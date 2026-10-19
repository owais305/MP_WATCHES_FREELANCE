/**
 * Renames brand strings across catalog JSON/JS and index.html.
 * Run: node scripts/rename-brands.js
 */

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const repoRoot = path.join(root, '..');

// Order: longest / most specific first
const REPLACEMENTS = [
  ['DOLCE AND GABBANA', 'D0LCE AND GABBBAANA'],
  ['Dolce & Gabbana', 'd0lce & gabbbaana'],
  ['ARMANI EXCHANGE', 'ARRMANII XCHANGE'],
  ['Armani Exchange', 'Arrmanii xchange'],
  ['AUDEMARS PIGUET', 'AUDEMAS PIGET'],
  ['Audemars Piguet', 'Audemas piget'],
  ['TOMMY HILFIGER', 'T0MMYY HILFEGER'],
  ['Tommy Hilfiger', 'T0mmyy hilfeger'],
  ['TAG HEUER', 'TAGG HUER'],
  ['Tag Heuer', 'TAgg huer'],
  ['RAY BAN', 'REYBAN'],
  ['Ray Ban', 'reyban'],
  ['GSHOCK', 'G-SH0K'],
  ['G-Shock', 'G-sh0k'],
  ['Gshock', 'G-sh0k'],
  ['ROLEX', 'R0LEX'],
  ['Rolex', 'R0lex'],
  ['CARTIER', 'CARRTIER'],
  ['Cartier', 'carrtier'],
  ['OMEGA', '00MEGA'],
  ['Omega', '00mega'],
  ['TISOT', 'TISS0T'],
  ['Tissot', 'tiss0t'],
  ['CASIO', 'CASI0'],
  ['Casio', 'casi0'],
  ['HUBLOT', 'HUBl0T'],
  ['Hublot', 'HUBl0T'],
  ['FOSSIL', 'F0SILL'],
  ['Fossil', 'F0sill'],
  ['RADO', 'RAD0'],
  ['Rado', 'Rad0'],
  ['GUCCI', 'GUUCI'],
  ['Gucci', 'Guuci'],
  ['MAYBACH', 'MEYBACH'],
  ['Maybach', 'meybach'],
  ['MIUMIU', 'MEW MEW'],
  ['Miu Miu', 'mew mew'],
  ['PRADA', 'PRRAADA'],
  ['Prada', 'prraada'],
  ['VERSACE', 'VERSACHE'],
  ['Versace', 'versache'],
  ['RICHARD MILLIE', 'RECHAARD MILI'],
  ['Richard millie', 'richaard mili'],
];

function applyReplacements(content) {
  let out = content;
  for (const [from, to] of REPLACEMENTS) {
    out = out.split(from).join(to);
  }
  return out;
}

function processFile(filePath) {
  if (!fs.existsSync(filePath)) {
    console.log('Skip (missing):', filePath);
    return;
  }
  const before = fs.readFileSync(filePath, 'utf8');
  const after = applyReplacements(before);
  if (before !== after) {
    fs.writeFileSync(filePath, after, 'utf8');
    console.log('Updated:', filePath);
  } else {
    console.log('No changes:', filePath);
  }
}

const files = [
  path.join(root, 'assets', 'js', 'main.js'),
  path.join(root, 'assets', 'js', 'products.json'),
  path.join(root, 'index.html'),
  path.join(root, 'scratch_products.json'),
  path.join(repoRoot, 'project backend', 'data', 'products.json'),
];

files.forEach(processFile);
console.log('Brand rename complete.');
