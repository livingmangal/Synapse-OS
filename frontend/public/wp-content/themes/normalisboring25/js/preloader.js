(() => {
  function initHunterSplash() {
    // If on agent tools or 3D Explorer page, do not activate video splash or loader
    if (
      window.location.pathname.includes('/vibrant') || 
      window.location.pathname.includes('/orchestrator') ||
      window.location.pathname.includes('/symptom-triage') ||
      window.location.pathname.includes('/medical-scan') ||
      window.location.pathname.includes('/records') ||
      document.getElementById('sanjeevani-3d-frame')
    ) {
      const splash = document.getElementById('video-splash');
      if (splash) {
        splash.style.display = 'none';
        splash.classList.add('hide-splash');
      }
      const pageLoader = document.getElementById('page-loader');
      if (pageLoader) {
        pageLoader.style.display = 'none';
      }
      return;
    }

    const splashSection = document.getElementById('video-splash');
    const desktopVideo = document.getElementById('splash-video-desktop');
    const mobileVideo = document.getElementById('splash-video-mobile');
    const skipBtn = document.getElementById('splash-skip-btn');

    if (!splashSection) {
      if (typeof init === 'function') init();
      return;
    }

    // Mark splash as active and lock scroll
    document.body.classList.add('video-splash-active');
    document.documentElement.classList.add('overflow-hidden');
    window.scrollTo(0, 0);

    let dismissed = false;

    function dismissSplash() {
      if (dismissed) return;
      dismissed = true;

      splashSection.classList.add('hide-splash');
      document.body.classList.remove('video-splash-active');

      // Initialize GSAP, Lenis, and page animations
      if (typeof init === 'function') {
        try {
          init();
        } catch (e) {
          console.warn('init error:', e);
        }
      }

      // Restore scrolling after smooth fade
      setTimeout(() => {
        document.documentElement.classList.remove('overflow-hidden');
      }, 1200);
    }

    // Pick active video based on screen width
    const isMobile = window.innerWidth < 768;
    const activeVideo = isMobile ? (mobileVideo || desktopVideo) : (desktopVideo || mobileVideo);
    const otherVideo = isMobile ? desktopVideo : mobileVideo;

    if (otherVideo) {
      try {
        otherVideo.pause();
      } catch (e) {}
    }

    if (activeVideo) {
      try {
        activeVideo.currentTime = 0;
        const playPromise = activeVideo.play();
        if (playPromise !== undefined) {
          playPromise.catch(() => {
            // Autoplay restricted fallback
            setTimeout(dismissSplash, 2000);
          });
        }
      } catch (err) {
        setTimeout(dismissSplash, 2000);
      }

      activeVideo.addEventListener('ended', dismissSplash);
      activeVideo.addEventListener('error', dismissSplash);
    }

    // Safety timeout so user is never locked out
    const safetyTimer = setTimeout(dismissSplash, 3800);

    if (skipBtn) {
      skipBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        clearTimeout(safetyTimer);
        dismissSplash();
      });
    }

    splashSection.addEventListener('click', () => {
      clearTimeout(safetyTimer);
      dismissSplash();
    });

    // Also support keyboard dismissal (Escape / Space / Enter)
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' || e.key === ' ' || e.key === 'Enter') {
        clearTimeout(safetyTimer);
        dismissSplash();
      }
    }, { once: true });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initHunterSplash);
  } else {
    initHunterSplash();
  }
})();