const fs = require('fs');
const path = require('path');

const srcDir = 'e:/Sanjeevni-OS/vibrant.noomoagency.com';
const destDir = 'e:/Sanjeevni-OS/frontend/public';

function copyRecursiveSync(src, dest) {
  const exists = fs.existsSync(src);
  const stats = exists && fs.statSync(src);
  const isDirectory = exists && stats.isDirectory();
  if (isDirectory) {
    if (!fs.existsSync(dest)) {
      fs.mkdirSync(dest, { recursive: true });
    }
    fs.readdirSync(src).forEach((childItemName) => {
      copyRecursiveSync(
        path.join(src, childItemName),
        path.join(dest, childItemName)
      );
    });
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

// Folders to copy to frontend/public/
const folders = ['_nuxt', 'models', 'draco', 'texture', 'map', 'audio', 'images'];

folders.forEach((folder) => {
  const s = path.join(srcDir, folder);
  const d = path.join(destDir, folder);
  if (fs.existsSync(s)) {
    console.log(`Copying folder: ${folder}...`);
    copyRecursiveSync(s, d);
  } else {
    console.warn(`Source folder does not exist: ${folder}`);
  }
});

// Root files
const files = ['fav.png', 'og-image.jpg', '_payload.json', 'index.html'];
files.forEach((file) => {
  const s = path.join(srcDir, file);
  const d = path.join(destDir, file);
  if (fs.existsSync(s)) {
    console.log(`Copying file: ${file}...`);
    fs.copyFileSync(s, d);
  }
});

// Also create public/vibrant/index.html
const vibrantHtmlDir = path.join(destDir, 'vibrant');
if (!fs.existsSync(vibrantHtmlDir)) {
  fs.mkdirSync(vibrantHtmlDir, { recursive: true });
}
fs.copyFileSync(path.join(srcDir, 'index.html'), path.join(vibrantHtmlDir, 'index.html'));
console.log('Created frontend/public/vibrant/index.html');

console.log('Asset copy complete!');
