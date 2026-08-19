import type { Metadata } from 'next';
import '@/styles/main.css';
import type { Metadata } from 'next';
import Script from 'next/script';
import '@/styles/main.css';
import SanjeevniAssistant from '@/components/ui/SanjeevniAssistant';
import SanjeevaniAssistantModal from '@/components/SanjeevaniAssistantModal';
import ScriptsLoader from '@/components/ScriptsLoader';

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
      <head suppressHydrationWarning>
        <link rel="preload" href="/wp-content/themes/normalisboring25/css/fonts/editorialnew-regular.woff2" as="font" type="font/woff2" crossOrigin="anonymous" suppressHydrationWarning />
        <link rel="preload" href="/wp-content/themes/normalisboring25/css/fonts/editorialnew-regular.woff" as="font" type="font/woff" crossOrigin="anonymous" suppressHydrationWarning />
        <link rel="stylesheet" href="/wp-content/plugins/contact-form-7/includes/css/styles.css" suppressHydrationWarning />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.css" suppressHydrationWarning />
        <link rel="stylesheet" href="/wp-content/themes/normalisboring25/css/main.css" suppressHydrationWarning />
      </head>
      <body suppressHydrationWarning>
        {/* Hunter Healthcare Page Loader Overlay */}
        <div id="page-loader" aria-hidden="true" suppressHydrationWarning>
          <svg id="pre-loader-svg" width="710" height="2870" viewBox="0 0 710 2870" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path id="long" fillRule="evenodd" clipRule="evenodd" d="M476.34 1477.98C383.028 1477.98 309.347 1404.53 309.347 1311.5V0H399.716V1387.89H596.166V1477.98H476.34ZM90.3684 1169.5H0V1696.37H90.3684V1169.5ZM709.116 1169.5H618.747V1696.37H709.116V1169.5ZM399.716 1554.37C399.716 1461.35 326.035 1387.89 232.721 1387.89H112.949V1477.98H309.347V2870H399.716V1554.37Z" fill="black"/>
            <path id="short" fillRule="evenodd" clipRule="evenodd" d="M476.34 1480.06C383.028 1480.06 309.347 1406.47 309.347 1313.27V1171L399.716 1171V1389.8H596.166V1480.06H476.34ZM90.3684 1171H0V1698.86H90.3684V1171ZM709.116 1171H618.747V1698.86H709.116V1171ZM399.716 1556.6C399.716 1463.39 326.035 1389.8 232.721 1389.8H112.949V1480.06H309.347V1698.86H399.716V1556.6Z" fill="black"/>
          </svg>
        </div>

        {/* Hunter Healthcare Video Splash (Homepage Welcome Loader) */}
        <section className="animated-splash-page" id="video-splash" suppressHydrationWarning>
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
				<ul id="menu-principal" class="header__menu__nav-site f-izmir t-titulo-l t-upper">
					<li class="link menu-item"><a href="/" data-no-swup="true">Home</a></li>
					<li class="link menu-item"><a href="/orchestrator-agent" data-no-swup="true">Orchestrator Swarm</a></li>
					<li class="link menu-item"><a href="/symptom-triage-agent" data-no-swup="true">Clinical Triage & ML</a></li>
					<li class="link menu-item"><a href="/medical-scan-agent" data-no-swup="true">Medical Scan AI</a></li>
					<li class="link menu-item"><a href="/vibrant" data-no-swup="true" style="color: #38bdf8;">3D Health Twin</a></li>
					<li class="link menu-item"><a href="/records" data-no-swup="true" style="color: #10b981;">ABHA & Records</a></li>
				</ul>
				<div class="header__menu__content">
					<div class="header__menu__media expand_mouse follow__wrap" data-text="Explore" data-url="/orchestrator-agent">
						<a href="/orchestrator-agent" data-no-swup="true" class="btn btn--circle follow__mouse--md f-izmir t-parrafo-l d-none d-md-flex"></a>
						<div class="header__menu__media__title f-medium t-titulo-xl t-upper">ORCHESTRATOR AGENT</div>
						
<div class="media header__menu__media__image noAnimate no-general-anim noAspect" data-delay=""> 
            <div class="media__wrap-source image">
            <img class="media__source w-100" src="/wp-content/uploads/2025/03/SOL_Gallery05.jpg">
        </div>
    </div>

					</div>
					<nav class="header__menu__nav-single">
						
						<h5 class="header__menu__nav-single__title f-izmir t-titulo t-upper">Agents & Infrastructure</h5>

						<a href="/projects" data-no-swup="true" class="header__menu__nav-single__link f-edit t-parrafo-l"><span class="link under">View All Agents</span></a>
						
						<div class="header__menu__nav-single__proyectos">
							<div class="header__menu__nav-single__proyectos__item ">
								<a href="/orchestrator-agent" data-no-swup="true">
									<div class="num-title t-titulo-l t-upper">
										<span class="num f-edit t-parrafo-xl t-normal">(1)</span> 
										<span class="title">Orchestrator Agent</span>
									</div>
									<div class="place f-edit t-parrafo-xl t-italic">Active</div>
								</a>
							</div>
							<div class="header__menu__nav-single__proyectos__item ">
								<a href="/medical-scan-agent" data-no-swup="true">
									<div class="num-title t-titulo-l t-upper">
										<span class="num f-edit t-parrafo-xl t-normal">(2)</span> 
										<span class="title">Medical Scan Agent</span>
									</div>
									<div class="place f-edit t-parrafo-xl t-italic">Active</div>
								</a>
							</div>
							<div class="header__menu__nav-single__proyectos__item ">
								<a href="/symptom-triage-agent" data-no-swup="true">
									<div class="num-title t-titulo-l t-upper">
										<span class="num f-edit t-parrafo-xl t-normal">(3)</span> 
										<span class="title">Symptom Triage Agent</span>
									</div>
									<div class="place f-edit t-parrafo-xl t-italic">Active</div>
								</a>
							</div>
							<div class="header__menu__nav-single__proyectos__item ">
								<a href="/vibrant" data-no-swup="true">
									<div class="num-title t-titulo-l t-upper">
										<span class="num f-edit t-parrafo-xl t-normal">(4)</span> 
										<span class="title">3D Body Explorer</span>
									</div>
									<div class="place f-edit t-parrafo-xl t-italic" style="color: #38bdf8; font-weight: 600;">3D Live</div>
								</a>
							</div>
							<div class="header__menu__nav-single__proyectos__item ">
								<a href="/records" data-no-swup="true">
									<div class="num-title t-titulo-l t-upper">
										<span class="num f-edit t-parrafo-xl t-normal">(5)</span> 
										<span class="title">ABHA & Health Passport</span>
									</div>
									<div class="place f-edit t-parrafo-xl t-italic" style="color: #10b981; font-weight: 600;">On-Chain Verified</div>
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

        {/* Global Sanjeevani Assistant Mode */}
        <SanjeevaniAssistantModal />

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

        {/* LiveKit Isometric Agentic Architecture Controller */}
        <Script src="/wp-content/themes/normalisboring25/js/agentic-diagram.js" strategy="afterInteractive" />
        <SanjeevniAssistant />
        <SanjeevaniAssistantModal />
        <ScriptsLoader />
      </body>
      </body>
    </html>
  );
}
