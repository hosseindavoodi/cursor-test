const fs = require('fs');
const path = require('path');

const esmDir = path.join(__dirname, '..', 'dist', 'esm');
const cjsDir = path.join(__dirname, '..', 'dist', 'cjs');

function toCjs(js) {
  // naive transform: replace export/import with require/module.exports via wrapper
  return `'use strict';\n` + js
    .replace(/export\s+\*\s+from\s+['\"](.*)['\"];?/g, (m, p1) => `module.exports = Object.assign(module.exports || {}, require('${p1}'));`)
    .replace(/export\s+\{([^}]+)\}\s+from\s+['\"](.*)['\"];?/g, (m, names, p1) => `{ const m=require('${p1}'); ${names.split(',').map(n=>n.trim()).map(n=>`exports.${n} = m.${n};`).join(' ')} }`)
    .replace(/export\s+default\s+/g, 'module.exports = ')
    .replace(/export\s+\{([^}]+)\};?/g, (m, names)=> names.split(',').map(n=>n.trim()).map(n=>`exports.${n} = ${n};`).join('\n'))
    .replace(/export\s+(class|function|const|let|var)\s+/g, '$1 ');
}

function copyDir(src, dst) {
  if (!fs.existsSync(dst)) fs.mkdirSync(dst, { recursive: true });
  for (const f of fs.readdirSync(src)) {
    const s = path.join(src, f);
    const d = path.join(dst, f.endsWith('.js') ? f.replace(/\.js$/, '.cjs') : f);
    const stat = fs.statSync(s);
    if (stat.isDirectory()) copyDir(s, path.join(dst, f));
    else if (f.endsWith('.js')) fs.writeFileSync(d, toCjs(fs.readFileSync(s, 'utf8')));
    else fs.copyFileSync(s, d);
  }
}

copyDir(esmDir, cjsDir);
