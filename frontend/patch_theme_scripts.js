const fs = require('fs');
const path = require('path');

const jsDir = 'e:/normalisboring.es/frontend/public/wp-content/themes/normalisboring25/js';

// 1. Fix root.js
const rootPath = path.join(jsDir, 'root.js');
let rootContent = fs.readFileSync(rootPath, 'utf8');

// Safeguard query selectors in root.js
rootContent = rootContent.replace(
  "const contacto = document.querySelector('.modal--contact');\nconst contacto_content = contacto.querySelector('.modal__content');",
  "const contacto = document.querySelector('.modal--contact');\nconst contacto_content = contacto ? contacto.querySelector('.modal__content') : null;"
);
rootContent = rootContent.replace(
  "const header_logo_normal = header_logo.querySelector('.logo__normal');",
  "const header_logo_normal = header_logo ? header_logo.querySelector('.logo__normal') : null;"
);
rootContent = rootContent.replace(
  "const header_logo_group = header_logo.querySelector('.logo__group');",
  "const header_logo_group = header_logo ? header_logo.querySelector('.logo__group') : null;"
);
rootContent = rootContent.replace(
  "cursorSpan = cursor.querySelector('span');",
  "cursorSpan = cursor ? cursor.querySelector('span') : null;"
);
fs.writeFileSync(rootPath, rootContent, 'utf8');
console.log('Patched root.js');

// 2. Patch DOMContentLoaded in all scripts
const scripts = ['preloader.js', 'rollovers.js', 'animations.js', 'clicks.js', 'scroll.js', 'main.js'];

scripts.forEach(scriptName => {
  const filePath = path.join(jsDir, scriptName);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace document.addEventListener('DOMContentLoaded', fn)
    // or window.addEventListener('DOMContentLoaded', fn)
    // with safe execution
    content = content.replace(
      /document\.addEventListener\(['"]DOMContentLoaded['"],\s*\(\)\s*=>\s*\{([\s\S]*)\}\);?\s*$/m,
      `function init_${scriptName.replace('.js', '')}() {$1}\nif (document.readyState === 'complete' || document.readyState === 'interactive') { setTimeout(init_${scriptName.replace('.js', '')}, 50); } else { document.addEventListener('DOMContentLoaded', init_${scriptName.replace('.js', '')}); }`
    );
    
    content = content.replace(
      /window\.addEventListener\(['"]DOMContentLoaded['"],\s*\(\)\s*=>\s*\{([\s\S]*)\}\);?\s*$/m,
      `function init_${scriptName.replace('.js', '')}() {$1}\nif (document.readyState === 'complete' || document.readyState === 'interactive') { setTimeout(init_${scriptName.replace('.js', '')}, 50); } else { window.addEventListener('DOMContentLoaded', init_${scriptName.replace('.js', '')}); }`
    );

    fs.writeFileSync(filePath, content, 'utf8');
    console.log(`Patched ${scriptName}`);
  }
});
