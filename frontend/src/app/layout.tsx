import type { Metadata } from 'next';
import Script from 'next/script';
import '@/styles/main.css';

export const metadata: Metadata = {
  title: 'Sanjeevani OS | Multi-Agent Health Platform',
  description: 'The Sanjeevani OS is an open-source, multi-agent health architecture powered by specialized AI sub-agents.',
  icons: {
    icon: '/wp-content/uploads/2025/05/favicon-150x150.png',
    apple: '/wp-content/uploads/2025/05/favicon-300x300.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/wp-content/themes/normalisboring25/css/fonts/editorialnew-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/wp-content/themes/normalisboring25/css/fonts/editorialnew-regular.woff" as="font" type="font/woff" crossOrigin="anonymous" />
        <link rel="stylesheet" href="/wp-includes/css/dist/block-library/common.min.css" />
        <link rel="stylesheet" href="/wp-content/plugins/contact-form-7/includes/css/styles.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.css" />
        <link rel="stylesheet" href="/wp-content/themes/normalisboring25/css/main.css" />
      </head>
      <body suppressHydrationWarning>
        {/* Hunter Healthcare Page Loader Overlay */}
        <div id="page-loader" aria-hidden="true">
          <svg id="pre-loader-svg" width="710" height="2870" viewBox="0 0 710 2870" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="long" fillRule="evenodd" clipRule="evenodd" d="M476.34 1477.98C383.028 1477.98 309.347 1404.53 309.347 1311.5V0H399.716V1387.89H596.166V1477.98H476.34ZM90.3684 1169.5H0V1696.37H90.3684V1169.5ZM709.116 1169.5H618.747V1696.37H709.116V1169.5ZM399.716 1554.37C399.716 1461.35 326.035 1387.89 232.721 1387.89H112.949V1477.98H309.347V2870H399.716V1554.37Z" fill="black"/>
            <path id="short" fillRule="evenodd" clipRule="evenodd" d="M476.34 1480.06C383.028 1480.06 309.347 1406.47 309.347 1313.27V1171L399.716 1171V1389.8H596.166V1480.06H476.34ZM90.3684 1171H0V1698.86H90.3684V1171ZM709.116 1171H618.747V1698.86H709.116V1171ZM399.716 1556.6C399.716 1463.39 326.035 1389.8 232.721 1389.8H112.949V1480.06H309.347V1698.86H399.716V1556.6Z" fill="black"/>
          </svg>
        </div>

        {/* Hunter Healthcare Video Splash (Homepage Welcome Loader) */}
        <section className="animated-splash-page" id="video-splash">
          <video
            id="splash-video-desktop"
            className="splash-video-desktop animated-splash-page__video"
            playsInline
            autoPlay
            muted
            preload="auto"
          >
            <source src="/videos/hunter_splash_wide.mp4" type="video/mp4" />
          </video>
          <video
            id="splash-video-mobile"
            className="splash-video-mobile animated-splash-page__video"
            playsInline
            autoPlay
            muted
            preload="auto"
          >
            <source src="/videos/hunter_splash_tall.mp4" type="video/mp4" />
          </video>
          <button id="splash-skip-btn" className="splash-skip-btn" type="button" aria-label="Skip intro">
            Skip
          </button>
        </section>

        <div className="grid wrapper">
          <div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div>
        </div>

        <div id="mouse" className="d-md-nonexx" suppressHydrationWarning><div><span className="f-izmir t-parrafo"></span></div></div>

        {/* Global Luxury Header */}
        <div suppressHydrationWarning dangerouslySetInnerHTML={{ __html: `<header>
		
		<div class="header wrapper">

			<!-- logo -->
			<div class="header__logo logo c-white" data-url="/">
				<!-- <a href="/">&nbsp;</a> -->
				<div class="logo__normal link disabled">Sanjeevani</div>
				<div class="logo__group">
					<div class="logo__is">O</div>
					<div class="logo__boring">S<div class="reg">®</div></div>
				</div>
				<!-- <img class="logo__image" src="/wp-content/themes/normalisboring25/images/logo_normalisboring.svg"> -->
			</div>

			<!-- btn menu -->
			<a class="header__btn btn btn--menu btn--header btn--bg f-edit t-parrafo-l d-none">
				<span><span>Menu</span></span>
			</a>

			<!-- btn anchors -->
			<a class="header__footer__btn btn--header btn btn--bg f-edit t-parrafo-l d-none">
				<span>
					<span>
						<span class="number f-edit t-italic t-parrafo-l"></span> 
						<span class="circle"></span> 
						<span class="name f-edit t-parrafo-l"></span> 
					</span>
				</span>
			</a>

		</div>

		<!-- MENU -->
			<div class="header__menu c-black d-none">
				<div class="header__menu__bg"></div>
				<ul id="menu-principal" class="header__menu__nav-site f-izmir t-titulo-l t-upper"><li id="menu-item-1411" class="link menu-item menu-item-type-post_type menu-item-object-page menu-item-1411"><a href="/about-us">About Us</a></li>
<li id="menu-item-1412" class="no-show link menu-item menu-item-type-post_type menu-item-object-page menu-item-1412"><a href="/projects">Agents</a></li>
<li id="menu-item-1088" class="link menu-item menu-item-type-custom menu-item-object-custom menu-item-1088"><a href="#contacto">Contact</a></li>
<li id="menu-item-1089" class="no-show-scroll link menu-item menu-item-type-custom menu-item-object-custom menu-item-1089"><a href="#disponibilidad">Availability</a></li>
</ul>
				<div class="header__menu__content">
					<div class="header__menu__media expand_mouse follow__wrap" data-text="Explore" data-url="/orchestrator-agent">
						<a href="/orchestrator-agent" class="btn btn--circle follow__mouse--md f-izmir t-parrafo-l d-none d-md-flex"></a>
						<div class="header__menu__media__title f-medium t-titulo-xl t-upper">ORCHESTRATOR AGENT</div>
						
<div class="media header__menu__media__image noAnimate no-general-anim noAspect" data-delay=""> 
            <div class="media__wrap-source image">
            <img class="media__source w-100" src="/wp-content/uploads/2025/03/SOL_Gallery05.jpg">
        </div>
    </div>

					</div>
					<nav class="header__menu__nav-single">
						
						<h5 class="header__menu__nav-single__title f-izmir t-titulo t-upper">Agents</h5>

						<a href="/projects" class="header__menu__nav-single__link f-edit t-parrafo-l"><span class="link under">View All</span></a>
						
						<div class="header__menu__nav-single__proyectos">
																														<div class="header__menu__nav-single__proyectos__item ">
									<a href="/orchestrator-agent">
										<div class="num-title t-titulo-l t-upper">
											<span class="num f-edit t-parrafo-xl t-normal">(1)</span> 
											<span class="title">Orchestrator Agent</span>
										</div>
										<div class="place f-edit t-parrafo-xl t-italic">Active</div>
									</a>
								</div>
																							<div class="header__menu__nav-single__proyectos__item ">
									<a href="/medical-scan-agent">
										<div class="num-title t-titulo-l t-upper">
											<span class="num f-edit t-parrafo-xl t-normal">(2)</span> 
											<span class="title">Medical Scan Agent</span>
										</div>
										<div class="place f-edit t-parrafo-xl t-italic">Active</div>
									</a>
								</div>
																							<div class="header__menu__nav-single__proyectos__item ">
									<a href="/symptom-triage-agent">
										<div class="num-title t-titulo-l t-upper">
											<span class="num f-edit t-parrafo-xl t-normal">(3)</span> 
											<span class="title">Symptom Triage Agent</span>
										</div>
										<div class="place f-edit t-parrafo-xl t-italic">Active</div>
									</a>
								</div>
																							<div class="header__menu__nav-single__proyectos__item disabled">
									<a href="/projects">
										<div class="num-title t-titulo-l t-upper">
											<span class="num f-edit t-parrafo-xl t-normal">(4)</span> 
											<span class="title">Blockchain Records</span>
										</div>
										<div class="place f-edit t-parrafo-xl t-italic">Coming Soon</div>
									</a>
								</div>
																							<div class="header__menu__nav-single__proyectos__item disabled">
									<a href="/projects">
										<div class="num-title t-titulo-l t-upper">
											<span class="num f-edit t-parrafo-xl t-normal">(5)</span> 
											<span class="title">Outbreak Predictive</span>
										</div>
										<div class="place f-edit t-parrafo-xl t-italic">Coming Soon</div>
									</a>
								</div>
													</div>
					</nav>
				</div>
				
				<a href="tel:hello@sanjeevani-os.com" 
					class="header__menu__link-footer f-edit t-titulo link">hello@sanjeevani-os.com</a>
			</div>
		<!-- MENU -->

	</header>` }} />

        {/* Page Container */}
        <div id="smooth-wrapper">
          <div id="smooth-content">
            {children}
          </div>
        </div>

        {/* Modals required by scripts */}
        <div id="wrap-modals">
          <div className="modal modal--contact d-none" data-lenis-prevent="true">
            <div className="modal__bg"></div>
            <div className="modal__content bg-white">
              <a className="modal__close close"><span></span><span></span></a>
              <div className="modal__content__pretitle f-edit t-parrafo-l">(CONNECT)</div>
              <div className="modal__content__title t-upper f-regular t-titulo-xl t-center">Test the <br/>Live Platform</div>
            </div>
          </div>

          <div className="modal modal--media d-none" data-lenis-prevent="true">
            <div className="modal__bg"></div>
            <div className="modal__content">
              <a className="modal__close close close--white"><span></span><span></span></a>
              <div className="modal__video"></div>
            </div>
          </div>
        </div>

        {/* Sequential Execution Scripts */}
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js" strategy="beforeInteractive" />
        <Script src="https://www.youtube.com/player_api" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js" strategy="beforeInteractive" />
        <Script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js" strategy="beforeInteractive" />
        <Script src="https://unpkg.com/swup@4" strategy="beforeInteractive" />
        <Script src="/wp-content/themes/normalisboring25/js/gsap/ScrollSmoother.min.js" strategy="beforeInteractive" />
        <Script src="/wp-content/themes/normalisboring25/js/gsap/SplitText.min.js" strategy="beforeInteractive" />
        <Script src="/wp-content/themes/normalisboring25/js/gsap/MorphSVGPlugin.min.js" strategy="beforeInteractive" />
        <Script src="https://unpkg.com/lenis@1.3.1/dist/lenis.min.js" strategy="beforeInteractive" />
        <Script src="/wp-content/themes/normalisboring25/js/root.js" strategy="beforeInteractive" />
        <Script src="/wp-content/themes/normalisboring25/js/preloader.js" strategy="beforeInteractive" />
        <Script src="/wp-content/themes/normalisboring25/js/rollovers.js" strategy="beforeInteractive" />
        <Script src="/wp-content/themes/normalisboring25/js/animations.js" strategy="beforeInteractive" />
        <Script src="/wp-content/themes/normalisboring25/js/clicks.js" strategy="beforeInteractive" />
        <Script src="/wp-content/themes/normalisboring25/js/scroll.js" strategy="beforeInteractive" />
        <Script src="/wp-content/themes/normalisboring25/js/main.js" strategy="beforeInteractive" />

        {/* OCR Engine Carousel Interactive Controller */}
        <Script src="/wp-content/themes/normalisboring25/js/ocr-carousel.js" strategy="afterInteractive" />

        {/* LiveKit Isometric Agentic Architecture Controller */}
        <Script src="/wp-content/themes/normalisboring25/js/agentic-diagram.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
