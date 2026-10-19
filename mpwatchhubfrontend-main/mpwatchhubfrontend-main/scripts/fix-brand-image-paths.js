/**
 * Keeps display brand names but restores image folder/file paths to on-disk names.
 * Run after rename-brands.js
 */

const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, '..');
const repoRoot = path.join(root, '..');

const PATH_REVERT = [
  ['assets/images/brands/CARRTIER/', 'assets/images/brands/CARTIER/'],
  ['assets/images/brands/R0LEX/', 'assets/images/brands/ROLEX/'],
  ['assets/images/brands/00MEGA/', 'assets/images/brands/OMEGA/'],
  ['assets/images/brands/TISS0T/', 'assets/images/brands/TISOT/'],
  ['assets/images/brands/CASI0/', 'assets/images/brands/CASIO/'],
  ['assets/images/brands/G-SH0K/', 'assets/images/brands/GSHOCK/'],
  ['assets/images/brands/HUBl0T/', 'assets/images/brands/HUBLOT/'],
  ['assets/images/brands/AUDEMAS PIGET/', 'assets/images/brands/AUDEMARS PIGUET/'],
  ['assets/images/brands/RAD0/', 'assets/images/brands/RADO/'],
  ['assets/images/brands/TAGG HUER/', 'assets/images/brands/TAG HEUER/'],
  ['assets/images/brands/T0MMYY HILFEGER/', 'assets/images/brands/TOMMY HILFIGER/'],
  ['assets/images/brands/ARRMANII XCHANGE/', 'assets/images/brands/ARMANI EXCHANGE/'],
  ['assets/images/brands/F0SILL/', 'assets/images/brands/FOSSIL/'],
  ['assets/images/brands/RECHAARD MILI/', 'assets/images/brands/RICHARD MILLIE/'],
  ['assets/images/sunglasses/CARRTIER/', 'assets/images/sunglasses/CARTIER/'],
  ['assets/images/sunglasses/D0LCE AND GABBBAANA/', 'assets/images/sunglasses/DOLCE AND GABBANA/'],
  ['assets/images/sunglasses/GUUCI/', 'assets/images/sunglasses/GUCCI/'],
  ['assets/images/sunglasses/MEYBACH/', 'assets/images/sunglasses/MAYBACH/'],
  ['assets/images/sunglasses/MEW MEW/', 'assets/images/sunglasses/MIUMIU/'],
  ['assets/images/sunglasses/PRRAADA/', 'assets/images/sunglasses/PRADA/'],
  ['assets/images/sunglasses/REYBAN/', 'assets/images/sunglasses/RAY BAN/'],
  ['assets/images/sunglasses/VERSACHE/', 'assets/images/sunglasses/VERSACE/'],
];

const LOGO_REVERT = [
  ['brand-logos/R0lex.png', 'brand-logos/Rolex.png'],
  ['brand-logos/TAGG HUER.png', 'brand-logos/TAG HEUER.png'],
];

function fixContent(content) {
  let out = content;
  for (const [from, to] of PATH_REVERT) {
    out = out.split(from).join(to);
  }
  for (const [from, to] of LOGO_REVERT) {
    out = out.split(from).join(to);
  }
  return out;
}

const files = [
  path.join(root, 'assets', 'js', 'main.js'),
  path.join(root, 'assets', 'js', 'products.json'),
  path.join(root, 'index.html'),
  path.join(root, 'scratch_products.json'),
  path.join(repoRoot, 'project backend', 'data', 'products.json'),
];

files.forEach((filePath) => {
  if (!fs.existsSync(filePath)) return;
  const fixed = fixContent(fs.readFileSync(filePath, 'utf8'));
  fs.writeFileSync(filePath, fixed, 'utf8');
  console.log('Fixed paths:', filePath);
});

console.log('Image path fix complete.');
