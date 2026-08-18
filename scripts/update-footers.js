const fs = require('fs');
const path = require('path');

const unifiedFooterHtml = `<footer class="sanjeevani-universal-footer relative w-full overflow-hidden" style="background-color: #EDE7DF; min-height: 780px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; position: relative; width: 100%; overflow: hidden; border-top: 1px solid #dfd7cc;">
    <!-- 1. Integrated Panoramic Landscape Canvas spanning the entire footer container -->
    <div style="position: absolute; inset: 0; width: 100%; height: 100%; pointer-events: none; overflow: hidden; z-index: 1;">
        <img src="/images/footer-landscape.jpg" alt="Sanjeevani Landscape" style="width: 100%; height: 100%; object-fit: cover; object-position: center bottom; display: block;" />
        
        <!-- Soft atmospheric mist overlay: top 45% gently blends into #EDE7DF so text is 100% crisp and readable -->
        <div style="position: absolute; inset: 0; background: linear-gradient(to bottom, #EDE7DF 0%, rgba(237, 231, 223, 0.94) 28%, rgba(237, 231, 223, 0.55) 48%, rgba(237, 231, 223, 0.1) 68%, transparent 100%);"></div>

        <!-- Soft bottom haze behind typography -->
        <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 140px; background: linear-gradient(to top, rgba(237, 231, 223, 0.75) 0%, rgba(237, 231, 223, 0.2) 60%, transparent 100%);"></div>
    </div>

    <!-- 2. Top Content Grid layered directly on top of the landscape in ONE clean row -->
    <div style="position: relative; max-width: 1320px; margin: 0 auto; padding: 4.5rem 2rem 14rem 2rem; z-index: 10;">
        <div style="display: grid; grid-template-columns: 2.2fr 1fr 1fr 1.3fr; gap: 2.5rem; align-items: start;">
            
            <!-- Column 1: Brand Information & CTA -->
            <div style="display: flex; flex-direction: column;">
                <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;">
                    <div style="width: 40px; height: 40px; border-radius: 14px; background-color: #000; color: #fff; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.12);">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                        </svg>
                    </div>
                    <span style="font-weight: 700; font-size: 1.15rem; color: #111; letter-spacing: -0.02em;">Sanjeevani</span>
                </div>

                <h2 style="font-size: 1.85rem; font-weight: 700; color: #111; line-height: 1.25; margin: 0 0 0.75rem 0; letter-spacing: -0.02em;">
                    Your smart AI Health Platform
                </h2>

                <p style="font-size: 0.925rem; color: #524b44; line-height: 1.6; max-width: 420px; margin: 0 0 1.75rem 0;">
                    Sanjeevani brings multi-agent triage, medical vision, real-time vitals, and clinical intelligence into one beautiful, live ecosystem beside your original clinical workflow.
                </p>

                <div style="margin-bottom: 2rem;">
                    <a href="/projects" style="display: inline-flex; align-items: center; gap: 0.65rem; background-color: #000; color: #fff; padding: 0.85rem 1.5rem; border-radius: 16px; font-size: 0.875rem; font-weight: 600; text-decoration: none; box-shadow: 0 4px 14px rgba(0,0,0,0.15); transition: transform 0.15s ease;">
                        <svg width="16" height="16" viewBox="0 0 170 170" fill="currentColor">
                            <path d="M150.37 130.25c-2.45 5.66-5.35 10.87-8.71 15.66-4.58 6.53-8.33 11.05-11.22 13.56-4.48 4.12-9.28 6.23-14.42 6.35-3.69 0-8.14-1.05-13.32-3.18-5.19-2.12-9.97-3.17-14.34-3.17-4.58 0-9.49 1.05-14.75 3.17-5.26 2.13-9.5 3.24-12.74 3.35-4.35.13-9.16-1.9-14.42-6.08-3.7-3.04-7.7-7.79-12.01-14.24-5.64-8.47-10.1-18.43-13.38-29.87-3.28-11.44-4.92-22.38-4.92-32.81 0-14.97 3.82-27.32 11.46-37.04 7.64-9.73 17.15-14.73 28.53-15.01 4.8 0 10.15 1.25 16.06 3.76 5.91 2.51 9.77 3.84 11.58 3.99 1.45-.15 5.48-1.52 12.09-4.11 6.61-2.59 12.05-3.74 16.32-3.46 12.78.69 22.82 5.15 30.12 13.39-11.05 6.72-16.44 15.93-16.18 27.63.26 9.38 3.91 17.27 10.95 23.66 4.3 3.92 9.36 6.77 15.18 8.55-2.28 6.66-4.93 13.07-7.96 19.23zM119.22 33.39c0-6.72 2.45-13.05 7.35-18 4.9-4.95 10.87-7.78 17.91-8.49.12 1.01.18 1.93.18 2.76 0 6.64-2.58 13.06-7.74 18.25-5.16 5.19-11.3 8.09-18.42 8.7-.24-.9-.38-1.72-.38-2.45z"/>
                        </svg>
                        <span>Download for macOS</span>
                    </a>
                </div>

                <div style="font-size: 0.8rem; color: #6e6760;">
                    <p style="margin: 0 0 0.35rem 0;">© 2026 Sanjeevani OS - All rights reserved</p>
                    <div style="display: flex; align-items: center; gap: 0.45rem;">
                        <span>Built with 💙 by</span>
                        <div style="display: flex; align-items: center; gap: 0.35rem; font-weight: 600; color: #111;">
                            <span style="display: inline-flex; align-items: center; justify-content: center; width: 18px; height: 18px; border-radius: 50%; background: #000; color: #fff; font-size: 9px; font-weight: 700;">S</span>
                            <span>Sanjeevani Team</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Column 2: Menu -->
            <div>
                <h3 style="font-size: 0.95rem; font-weight: 700; color: #111; margin: 0 0 1.25rem 0; letter-spacing: -0.01em;">Menu</h3>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.85rem; font-size: 0.875rem;">
                    <li><a href="/" style="color: #4a443d; text-decoration: none; font-weight: 500;">Home</a></li>
                    <li><a href="/projects" style="color: #4a443d; text-decoration: none; font-weight: 500;">Features</a></li>
                    <li><a href="/about-us" style="color: #4a443d; text-decoration: none; font-weight: 500;">FAQ</a></li>
                    <li><a href="/projects" style="color: #4a443d; text-decoration: none; font-weight: 500;">Pricing</a></li>
                    <li><a href="/projects" style="color: #4a443d; text-decoration: none; font-weight: 500;">Updates</a></li>
                </ul>
            </div>

            <!-- Column 3: Navigation -->
            <div>
                <h3 style="font-size: 0.95rem; font-weight: 700; color: #111; margin: 0 0 1.25rem 0; letter-spacing: -0.01em;">Navigation</h3>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.85rem; font-size: 0.875rem;">
                    <li><a href="mailto:hello@sanjeevani-os.com" style="color: #4a443d; text-decoration: none; font-weight: 500;">Contact</a></li>
                    <li><a href="/projects" style="color: #4a443d; text-decoration: none; font-weight: 500;">Roadmap</a></li>
                    <li><a href="/privacy-policy" style="color: #4a443d; text-decoration: none; font-weight: 500;">Privacy policy</a></li>
                    <li><a href="/legal-notice" style="color: #4a443d; text-decoration: none; font-weight: 500;">Terms of service</a></li>
                    <li><a href="/orchestrator-agent" style="color: #4a443d; text-decoration: none; font-weight: 500;">Customer portal</a></li>
                </ul>
            </div>

            <!-- Column 4: More products -->
            <div>
                <h3 style="font-size: 0.95rem; font-weight: 700; color: #111; margin: 0 0 1.25rem 0; letter-spacing: -0.01em;">More products</h3>
                <ul style="list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.85rem; font-size: 0.875rem;">
                    <li><a href="/projects/orchestrator-agent" style="color: #4a443d; text-decoration: none; font-weight: 500;">Orchestrator Agent</a></li>
                    <li><a href="/projects/medical-scan-agent" style="color: #4a443d; text-decoration: none; font-weight: 500;">Medical Scan AI</a></li>
                    <li><a href="/projects/symptom-triage-agent" style="color: #4a443d; text-decoration: none; font-weight: 500;">Symptom Triage Agent</a></li>
                    <li><a href="/vibrant" style="color: #4a443d; text-decoration: none; font-weight: 500;">3D Body Explorer</a></li>
                    <li><a href="/projects" style="color: #4a443d; text-decoration: none; font-weight: 500;">LiveKit Voice Hub</a></li>
                    <li><a href="/projects" style="color: #4a443d; text-decoration: none; font-weight: 500;">FHIR Health Vault</a></li>
                </ul>
            </div>

        </div>
    </div>

    <!-- 3. Soaring Bird Accent in the Valley -->
    <div style="position: absolute; top: 48%; left: 55%; transform: translate(-50%, -50%) rotate(-8deg); z-index: 5; pointer-events: none; opacity: 0.85;">
        <svg width="44" height="32" viewBox="0 0 54 38" fill="none">
            <path d="M0 14C12 8 20 2 27 18C34 2 42 8 54 14C45 15 36 12 27 26C18 12 9 15 0 14Z" fill="#2d2822" />
        </svg>
    </div>

    <!-- 4. Monumental Watermark Typography - Fully visible & centered without clipping -->
    <div style="position: absolute; bottom: 12px; left: 0; right: 0; width: 100%; display: flex; justify-content: center; align-items: flex-end; pointer-events: none; user-select: none; z-index: 10; padding: 0 1rem; box-sizing: border-box;">
        <span style="font-size: 13.5vw; font-weight: 700; letter-spacing: -0.035em; line-height: 1; color: rgba(255, 255, 255, 0.95); white-space: nowrap; text-align: center; text-shadow: 0 4px 24px rgba(0,0,0,0.12); font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; display: block;">
            Sanjeevani
        </span>
    </div>
</footer>`;

const targetFiles = [
  'frontend/src/app/page.tsx',
  'frontend/src/app/projects/page.tsx',
  'frontend/src/app/proyectos/page.tsx',
  'frontend/src/app/about-us/page.tsx',
  'frontend/src/app/conocenos/page.tsx',
  'frontend/src/app/privacy-policy/page.tsx',
  'frontend/src/app/politica-de-privacidad/page.tsx',
  'frontend/src/app/cookie-policy/page.tsx',
  'frontend/src/app/politica-de-cookies/page.tsx',
  'frontend/src/app/legal-notice/page.tsx',
  'frontend/src/app/aviso-legal/page.tsx',
  'frontend/src/app/orchestrator-agent/page.tsx',
  'frontend/src/app/medical-scan-agent/page.tsx',
  'frontend/src/app/symptom-triage-agent/page.tsx',
  'frontend/src/app/projects/orchestrator-agent/page.tsx',
  'frontend/src/app/projects/medical-scan-agent/page.tsx',
  'frontend/src/app/projects/symptom-triage-agent/page.tsx'
];

targetFiles.forEach(relPath => {
  const filePath = path.resolve(relPath);
  if (fs.existsSync(filePath)) {
    let content = fs.readFileSync(filePath, 'utf8');
    const footerRegex = /<footer class="sanjeevani-universal-footer[\s\S]*?<\/footer>/g;
    
    if (footerRegex.test(content)) {
      content = content.replace(footerRegex, unifiedFooterHtml);
      fs.writeFileSync(filePath, content, 'utf8');
      console.log('Updated visible text in footer: ' + relPath);
    }
  }
});
console.log('Finished updating Sanjeevani text position across all pages.');
