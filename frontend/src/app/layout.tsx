import type { Metadata } from 'next';
import '@/styles/main.css';

export const metadata: Metadata = {
  title: 'Normal is Boring | Living Spaces That Defy The Ordinary',
  description: 'Living Spaces That Defy The Ordinary. Architecture and bespoke residential developments.',
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
				<div class="logo__normal link disabled">Normal</div>
				<div class="logo__group">
					<div class="logo__is">is</div>
					<div class="logo__boring">boring<div class="reg">®</div></div>
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

			<!-- loader -->
			<div class="header__percent loader__percent f-edit-reg t-titulo-xxl">0%</div>
			<div class="header__progress loader__progress"></div>

		</div>

		<!-- MENU -->
			<div class="header__menu c-black d-none">
				<div class="header__menu__bg"></div>
				<ul id="menu-principal" class="header__menu__nav-site f-izmir t-titulo-l t-upper"><li id="menu-item-1411" class="link menu-item menu-item-type-post_type menu-item-object-page menu-item-1411"><a href="/about-us">About Us</a></li>
<li id="menu-item-1412" class="no-show link menu-item menu-item-type-post_type menu-item-object-page menu-item-1412"><a href="/projects">Projects</a></li>
<li id="menu-item-1088" class="link menu-item menu-item-type-custom menu-item-object-custom menu-item-1088"><a href="#contacto">Contact</a></li>
<li id="menu-item-1089" class="no-show-scroll link menu-item menu-item-type-custom menu-item-object-custom menu-item-1089"><a href="#disponibilidad">Availability</a></li>
</ul>
				<div class="header__menu__content">
					<div class="header__menu__media expand_mouse follow__wrap" data-text="Explore" data-url="/projects/la-solana">
						<a href="/projects/la-solana" class="btn btn--circle follow__mouse--md f-izmir t-parrafo-l d-none d-md-flex"></a>
						<div class="header__menu__media__title f-medium t-titulo-xl t-upper">LA SOLANA</div>
						
<div class="media header__menu__media__image noAnimate no-general-anim noAspect" data-delay=""> 
            <div class="media__wrap-source image">
            <img class="media__source w-100" src="/wp-content/uploads/2025/03/SOL_Gallery05.jpg">
        </div>
    </div>

					</div>
					<nav class="header__menu__nav-single">
						
						<h5 class="header__menu__nav-single__title f-izmir t-titulo t-upper">Projects</h5>

						<a href="/projects" class="header__menu__nav-single__link f-edit t-parrafo-l"><span class="link under">View All</span></a>
						
						<div class="header__menu__nav-single__proyectos">
																														<div class="header__menu__nav-single__proyectos__item ">
									<a href="/projects/la-solana">
										<div class="num-title t-titulo-l t-upper">
											<span class="num f-edit t-parrafo-xl t-normal">(1)</span> 
											<span class="title">La solana</span>
										</div>
										<div class="place f-edit t-parrafo-xl t-italic">Oleiros</div>
									</a>
								</div>
																							<div class="header__menu__nav-single__proyectos__item ">
									<a href="/projects/plaza-espana">
										<div class="num-title t-titulo-l t-upper">
											<span class="num f-edit t-parrafo-xl t-normal">(2)</span> 
											<span class="title">Plaza España 9</span>
										</div>
										<div class="place f-edit t-parrafo-xl t-italic">A Coruña</div>
									</a>
								</div>
																							<div class="header__menu__nav-single__proyectos__item ">
									<a href="/projects/rua-pexegueiro">
										<div class="num-title t-titulo-l t-upper">
											<span class="num f-edit t-parrafo-xl t-normal">(3)</span> 
											<span class="title">Pexegueiro</span>
										</div>
										<div class="place f-edit t-parrafo-xl t-italic">Oleiros</div>
									</a>
								</div>
																							<div class="header__menu__nav-single__proyectos__item disabled">
									<a href="/projects/la-solana">
										<div class="num-title t-titulo-l t-upper">
											<span class="num f-edit t-parrafo-xl t-normal">(4)</span> 
											<span class="title">Juno (Icaria IV)</span>
										</div>
										<div class="place f-edit t-parrafo-xl t-italic">Coming Soon</div>
									</a>
								</div>
																							<div class="header__menu__nav-single__proyectos__item disabled">
									<a href="/projects/la-solana">
										<div class="num-title t-titulo-l t-upper">
											<span class="num f-edit t-parrafo-xl t-normal">(5)</span> 
											<span class="title">Pol 43 Montrove</span>
										</div>
										<div class="place f-edit t-parrafo-xl t-italic">Coming Soon</div>
									</a>
								</div>
													</div>
					</nav>
				</div>
				
				<a href="tel:contacto@normalisboring.es" 
					class="header__menu__link-footer f-edit t-titulo link">contacto@normalisboring.es</a>
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
              <div className="modal__content__pretitle f-edit t-parrafo-l">(CONTACT)</div>
              <div className="modal__content__title t-upper f-regular t-titulo-xl t-center">Unlock <br/>your dream</div>
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
        <script src="https://cdnjs.cloudflare.com/ajax/libs/Swiper/8.4.5/swiper-bundle.min.js" defer></script>
        <script src="https://www.youtube.com/player_api" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/gsap.min.js" defer></script>
        <script src="https://cdn.jsdelivr.net/npm/gsap@3.12.7/dist/ScrollTrigger.min.js" defer></script>
        <script src="https://unpkg.com/swup@4" defer></script>
        <script src="/wp-content/themes/normalisboring25/js/gsap/ScrollSmoother.min.js" defer></script>
        <script src="/wp-content/themes/normalisboring25/js/gsap/SplitText.min.js" defer></script>
        <script src="/wp-content/themes/normalisboring25/js/gsap/MorphSVGPlugin.min.js" defer></script>
        <script src="https://unpkg.com/lenis@1.3.1/dist/lenis.min.js" defer></script>
        <script src="/wp-content/themes/normalisboring25/js/root.js" defer></script>
        <script src="/wp-content/themes/normalisboring25/js/preloader.js" defer></script>
        <script src="/wp-content/themes/normalisboring25/js/rollovers.js" defer></script>
        <script src="/wp-content/themes/normalisboring25/js/animations.js" defer></script>
        <script src="/wp-content/themes/normalisboring25/js/clicks.js" defer></script>
        <script src="/wp-content/themes/normalisboring25/js/scroll.js" defer></script>
        <script src="/wp-content/themes/normalisboring25/js/main.js" defer></script>
      </body>
    </html>
  );
}
