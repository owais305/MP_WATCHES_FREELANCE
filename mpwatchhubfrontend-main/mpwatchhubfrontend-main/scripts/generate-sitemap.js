/**
 * Regenerates sitemap.xml and robots.txt from static pages + product IDs in main.js.
 * Usage: node scripts/generate-sitemap.js
 * Edit sitemap.config.json to set your live site URL (GitHub Pages or custom domain).
 */

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const configPath = path.join(root, 'sitemap.config.json');
const mainJsPath = path.join(root, 'assets', 'js', 'main.js');

function loadConfig() {
  if (!fs.existsSync(configPath)) {
    throw new Error('Missing sitemap.config.json — set siteUrl to your live website.');
  }
  const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
  if (!config.siteUrl || config.siteUrl.includes('YOUR-DOMAIN')) {
    throw new Error('Set siteUrl in sitemap.config.json to your real live URL.');
  }
  return config;
}

function normalizeSiteUrl(url) {
  return url.replace(/\/+$/, '');
}

function extractProductIds(mainJs) {
  const ids = [];
  const re = /"id"\s*:\s*(\d+)/g;
  let match;
  const productsStart = mainJs.indexOf('const products = [');
  const productsEnd = mainJs.indexOf('];', productsStart);
  if (productsStart === -1 || productsEnd === -1) {
    throw new Error('Could not find products array in assets/js/main.js');
  }
  const block = mainJs.slice(productsStart, productsEnd);
  while ((match = re.exec(block)) !== null) {
    ids.push(Number(match[1]));
  }
  return [...new Set(ids)].sort((a, b) => a - b);
}

function xmlEscape(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;');
}

function urlEntry(loc, lastmod, changefreq, priority) {
  return `  <url>
    <loc>${xmlEscape(loc)}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`;
}

function generate() {
  const config = loadConfig();
  const siteUrl = normalizeSiteUrl(config.siteUrl);
  const mainJs = fs.readFileSync(mainJsPath, 'utf8');
  const productIds = extractProductIds(mainJs);
  const lastmod = new Date().toISOString().slice(0, 10);

  const staticPages = [
    { path: '/', changefreq: config.changefreq.home, priority: config.priority.home },
    { path: '/index.html', changefreq: config.changefreq.home, priority: config.priority.index || config.priority.home },
    { path: '/about.html', changefreq: config.changefreq.pages, priority: config.priority.pages },
    { path: '/contact.html', changefreq: config.changefreq.pages, priority: config.priority.pages },
  ];

  const homeSections = config.homeSections || [
    { path: '/index.html#sunglasses' },
    { path: '/index.html#bestseller' },
  ];
  const sectionPriority = config.priority.sections || '0.85';

  const entries = [];

  for (const page of staticPages) {
    entries.push(
      urlEntry(`${siteUrl}${page.path}`, lastmod, page.changefreq, page.priority)
    );
  }

  for (const section of homeSections) {
    entries.push(
      urlEntry(
        `${siteUrl}${section.path}`,
        lastmod,
        config.changefreq.home,
        sectionPriority
      )
    );
  }

  for (const id of productIds) {
    entries.push(
      urlEntry(
        `${siteUrl}/details.html?id=${id}`,
        lastmod,
        config.changefreq.products,
        config.priority.products
      )
    );
  }

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${entries.join('\n')}
</urlset>
`;

  const robots = `User-agent: *
Allow: /

Disallow: /admin.html

Sitemap: ${siteUrl}/sitemap.xml
`;

  fs.writeFileSync(path.join(root, 'sitemap.xml'), sitemap, 'utf8');
  fs.writeFileSync(path.join(root, 'robots.txt'), robots, 'utf8');

  const staticCount = staticPages.length + homeSections.length;
  console.log(`Wrote sitemap.xml (${staticCount} static URLs + ${productIds.length} products)`);
  console.log(`Wrote robots.txt`);
  console.log(`Site URL: ${siteUrl}`);
}

generate();
