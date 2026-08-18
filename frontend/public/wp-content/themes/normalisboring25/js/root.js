var control = false;
///is_mobile
var is_mobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent))
if(window.innerWidth<=950) is_mobile = true;
// is_mobile = false;

//get browser
var is_mac = (/Mac/i.test(navigator.userAgent))
var is_safari = (/Safari/i.test(navigator.userAgent))
var is_iphone = (/iPhone/i.test(navigator.userAgent))
var is_ios = (/iPhone|iPad|iPod/i.test(navigator.userAgent))

///get size
var is_xxl = (window.innerWidth<=1366)
var is_lg = (window.innerWidth<=1024)
var is_md = (window.innerWidth<=768)
var is_sm = (window.innerWidth<=576)
var is_xs = (window.innerWidth<=468)

///get Index of elemnt
var getInd = (elem) => Array.from(elem.parentNode.children).indexOf(elem);
///get getComputedStyle
var getStyle = (elem) => window.getComputedStyle(elem) || elem.currentStyle;
///get em
var em = () => parseInt(window.getComputedStyle(document.getElementsByTagName('body')[0], null).getPropertyValue('font-size')) ;

if(control) console.log('is_mobile',is_mobile);
if(control) console.log('is_md',is_md)


// vars
var htmlEl = document.querySelector("html");
var header = document.querySelector('.header');
var header_logo = document.querySelector('.header__logo');
var header_logo_normal = header_logo.querySelector('.logo__normal');
var header_logo_group = header_logo.querySelector('.logo__group');
var menu = document.querySelector('.header__menu');
var btnAnchors = document.querySelector('.header__footer__btn');
var transition = document.querySelector(".transition");
var contacto = document.querySelector('.modal--contact');
var contacto_content = contacto.querySelector('.modal__content');
var posLogoMobile = (!is_mobile) ? 0 : '0.15em' ;
///
var timescale = 1.15;//1.15;
var lenisStop = true;

var swup, smoother, smoothWrapper, smoothContent, main, lenis, cursor, cursorSpan, openMenu, mousechanges,
triggersChapter = [], triggerNext, triggerHeaderLogo, triggerParallaxCierre, init_animations, last_animations, 
changeButtonAnchors, setScrollH, setSmooth, setClicks, setLink, setRollovers, setRolloverBtnBg, setRolloversMenu, 
removeRolloversMenu, menu_tl, anclas_tl, alert_tl, header_logo_tl, header_btn_tl, header_anchors_tl, scroll_tl, 
scroll_intro_tl, contacto_tl, chaptersAll, onlyOnce, onScroll, terms, setFlips, processResize = false;;

cursor = document.querySelector("#mouse");
cursorSpan = cursor.querySelector('span');
smoothWrapper = document.querySelector("#smooth-wrapper");
smoothContent = document.querySelector("#smooth-content");
main = document.querySelector('main');
chaptersAll = document.querySelectorAll('.mod-title--chapter.count');
terms = (document.querySelector('.mod-scroll__terms')) ? document.querySelector('.mod-scroll__terms') : undefined;
onlyOnce = false;
onScroll = false;

//gsap
gsap.registerPlugin(ScrollTrigger,ScrollSmoother,MorphSVGPlugin);
gsap.config({ nullTargetWarn: false, force3D: true });

///set if is safari
if(is_safari) htmlEl.classList.add('is_safari')

//recharge page on history browser
var pageShow = false
window.addEventListener( "pageshow", function (e) {  
    if(pageShow)
        window.location.reload();
    pageShow = true;
});

