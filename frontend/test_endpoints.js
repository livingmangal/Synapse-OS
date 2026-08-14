const http = require('http');

const urls = [
  '/vibrant/index.html',
  '/_nuxt/entry.D4y_q0WT.css',
  '/_nuxt/DdtYbjEm.js',
  '/_nuxt/Bnwl1Oju.js',
  '/_nuxt/BJZqkRRX.js',
  '/models/skinMB2.glb',
  '/models/skinF.glb',
  '/models/brain.glb',
  '/models/heart.glb',
  '/models/intestine.glb',
  '/models/liver.glb',
  '/models/glands.glb',
  '/models/thyroid.glb',
  '/models/dna.glb',
  '/models/cellNew.glb',
  '/models/podium.glb',
  '/models/hotspots.glb',
  '/models/newBG.glb',
  '/draco/draco_decoder.wasm',
  '/draco/draco_wasm_wrapper.js',
  '/texture/Plastic015A_1K-JPG_NormalGL.jpg',
  '/texture/mats/mat20.png',
  '/map/GSG_PRO_STUDIOS_METAL_001_sm.webp',
  '/map/GSG_PRO_STUDIOS_METAL_001_sm-gainmap.webp',
  '/map/GSG_PRO_STUDIOS_METAL_001_sm.json',
  '/audio/Music.mp3',
  '/images/svg/LogoWhite.svg',
  '/images/svg/bigLogo.svg',
  '/images/svg/icon_brain.svg',
  '/images/svg/icon_heart.svg',
  '/images/svg/icon_toxins.svg',
  '/images/svg/icon_int.svg',
  '/images/svg/icon_hormons.svg',
  '/images/svg/icon_genetics.svg',
  '/images/svg/icon_longevity.svg'
];

async function checkUrl(path) {
  return new Promise((resolve) => {
    http.get(`http://localhost:3000${path}`, (res) => {
      resolve({ path, statusCode: res.statusCode, contentType: res.headers['content-type'], size: res.headers['content-length'] });
    }).on('error', (err) => {
      resolve({ path, error: err.message });
    });
  });
}

(async () => {
  console.log('Testing endpoint responses on localhost:3000...');
  let allPassed = true;
  for (const u of urls) {
    const res = await checkUrl(u);
    if (res.statusCode === 200) {
      console.log(`[PASS] 200 OK: ${res.path} (${res.contentType}, ${res.size || 'chunked'} bytes)`);
    } else {
      console.error(`[FAIL] ${res.statusCode || 'ERROR'}: ${res.path} - ${res.error || ''}`);
      allPassed = false;
    }
  }
  console.log(allPassed ? '\nALL ASSETS TESTED & RETURNED HTTP 200 OK!' : '\nSOME ASSETS FAILED');
})();
