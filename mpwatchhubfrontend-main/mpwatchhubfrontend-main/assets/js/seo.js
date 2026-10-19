(function () {
    const base = (window.MPW_SITE_URL || 'https://mpwatchhub.in').replace(/\/+$/, '');

    function absoluteUrl(path) {
        if (!path) return '';
        if (/^https?:\/\//i.test(path)) return path;
        return base + '/' + String(path).replace(/^\//, '');
    }

    function setMeta(attr, key, content) {
        if (!content) return;
        let el = document.querySelector(`meta[${attr}="${key}"]`);
        if (!el) {
            el = document.createElement('meta');
            el.setAttribute(attr, key);
            document.head.appendChild(el);
        }
        el.setAttribute('content', content);
    }

    function truncate(text, max) {
        max = max || 155;
        const t = String(text || '').replace(/\s+/g, ' ').trim();
        if (t.length <= max) return t;
        return t.slice(0, max - 3).trim() + '...';
    }

    window.updatePageSeo = function (opts) {
        opts = opts || {};
        const title = opts.title;
        const description = opts.description ? truncate(opts.description) : '';
        const image = opts.image ? absoluteUrl(opts.image) : '';

        if (title) {
            document.title = title;
            setMeta('property', 'og:title', title);
            setMeta('name', 'twitter:title', title);
        }
        if (description) {
            setMeta('name', 'description', description);
            setMeta('property', 'og:description', description);
            setMeta('name', 'twitter:description', description);
        }
        if (image) {
            setMeta('property', 'og:image', image);
            setMeta('name', 'twitter:image', image);
        }
        if (opts.ogType) {
            setMeta('property', 'og:type', opts.ogType);
        }
    };

    const path = window.location.pathname.split('/').pop() || 'index.html';
    const search = window.location.search || '';
    let canonical = base + '/';

    if (path && path !== 'index.html') {
        canonical = base + '/' + path + search;
    } else if (search) {
        canonical = base + '/' + search;
    }

    let link = document.querySelector('link[rel="canonical"]');
    if (!link) {
        link = document.createElement('link');
        link.rel = 'canonical';
        document.head.appendChild(link);
    }
    link.href = canonical;

    setMeta('property', 'og:url', canonical);
})();
