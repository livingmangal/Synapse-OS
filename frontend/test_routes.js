const http = require('http');

const routes = [
  '/',
  '/vibrant',
  '/interactive-body',
  '/projects',
  '/about-us',
  '/vibrant/index.html',
  '/_nuxt/entry.D4y_q0WT.css',
  '/_nuxt/DdtYbjEm.js',
  '/models/skinMB2.glb',
  '/audio/Music.mp3'
];

async function checkRoute(r) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${r}`, (res) => {
      resolve({ route: r, statusCode: res.statusCode, location: res.headers.location });
    }).on('error', (err) => {
      resolve({ route: r, error: err.message });
    });
  });
}

(async () => {
  console.log('Testing Next.js routes and vibrant integration...');
  for (const r of routes) {
    const res = await checkRoute(r);
    console.log(`Route: ${res.route.padEnd(30)} -> Status: ${res.statusCode} ${res.location ? `(Redirect to: ${res.location})` : ''}`);
  }
})();
