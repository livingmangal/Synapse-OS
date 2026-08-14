const fs = require('fs');
const path = require('path');

const srcJsDir = 'e:/normalisboring.es/wp-content/themes/normalisboring25/js';
const dstJsDir = 'e:/normalisboring.es/frontend/public/wp-content/themes/normalisboring25/js';

// Files to process
const files = ['root', 'preloader', 'rollovers', 'animations', 'clicks', 'scroll', 'main'];

files.forEach(name => {
  const sourceFile = path.join(srcJsDir, `${name}-1.js`);
  let content = fs.readFileSync(sourceFile, 'utf8');

  // Fix root.js
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
    // Strip outer document.addEventListener('DOMContentLoaded', () => { ... })
    // or window.addEventListener('DOMContentLoaded', () => { ... })
    // so that the functions (init_animations, setRollovers, etc.) are registered immediately!
    content = content.replace(/^document\.addEventListener\(['"]DOMContentLoaded['"],\s*\(\)\s*=>\s*\{\s*/m, '');
    content = content.replace(/^window\.addEventListener\(['"]DOMContentLoaded['"],\s*\(\)\s*=>\s*\{\s*/m, '');
    content = content.replace(/\}\);?\s*$/m, '');
  }

  const destFile = path.join(dstJsDir, `${name}.js`);
  fs.writeFileSync(destFile, content, 'utf8');
  console.log(`Unwrapped and registered immediately: ${destFile}`);
});
