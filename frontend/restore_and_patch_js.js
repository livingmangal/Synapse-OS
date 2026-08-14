const fs = require('fs');
const path = require('path');

const srcJsDir = 'e:/normalisboring.es/wp-content/themes/normalisboring25/js';
const dstJsDir = 'e:/normalisboring.es/frontend/public/wp-content/themes/normalisboring25/js';

// Ensure dst directory exists
if (!fs.existsSync(dstJsDir)) fs.mkdirSync(dstJsDir, { recursive: true });

// Copy gsap plugins
const gsapSrc = path.join(srcJsDir, 'gsap');
const gsapDst = path.join(dstJsDir, 'gsap');
if (!fs.existsSync(gsapDst)) fs.mkdirSync(gsapDst, { recursive: true });
fs.readdirSync(gsapSrc).forEach(f => {
  fs.copyFileSync(path.join(gsapSrc, f), path.join(gsapDst, f));
});

// Files to process
const files = ['root', 'preloader', 'rollovers', 'animations', 'clicks', 'scroll', 'main'];

files.forEach(name => {
  const sourceFile = path.join(srcJsDir, `${name}-1.js`);
  let content = fs.readFileSync(sourceFile, 'utf8');

  // Specific fixes
  if (name === 'root') {
    content = content.replace(
      "const contacto = document.querySelector('.modal--contact');\nconst contacto_content = contacto.querySelector('.modal__content');",
      "const contacto = document.querySelector('.modal--contact');\nconst contacto_content = contacto ? contacto.querySelector('.modal__content') : null;"
    );
    content = content.replace(
      "const header_logo_normal = header_logo.querySelector('.logo__normal');",
      "const header_logo_normal = header_logo ? header_logo.querySelector('.logo__normal') : null;"
    );
    content = content.replace(
      "const header_logo_group = header_logo.querySelector('.logo__group');",
      "const header_logo_group = header_logo ? header_logo.querySelector('.logo__group') : null;"
    );
    content = content.replace(
      "cursorSpan = cursor.querySelector('span');",
      "cursorSpan = cursor ? cursor.querySelector('span') : null;"
    );
  } else {
    // Wrap DOMContentLoaded listener with immediate execution if readyState is already loaded
    // Matches: document.addEventListener('DOMContentLoaded', () => { ... })
    // or window.addEventListener('DOMContentLoaded', () => { ... })
    content = content.replace(
      /(?:document|window)\.addEventListener\(['"]DOMContentLoaded['"],\s*\(\)\s*=>\s*\{([\s\S]*)\}\);?\s*$/m,
      `const _run_${name} = () => {$1};\nif (document.readyState === 'complete' || document.readyState === 'interactive') { _run_${name}(); } else { document.addEventListener('DOMContentLoaded', _run_${name}); }`
    );
  }

  const destFile = path.join(dstJsDir, `${name}.js`);
  fs.writeFileSync(destFile, content, 'utf8');
  console.log(`Successfully generated and patched: ${destFile}`);
});
