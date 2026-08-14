import {
  F as ri,
  G as Io,
  d as ve,
  y as z,
  z as I,
  H as G,
  I as L,
  J as Oi,
  _ as Te,
  r as $,
  K as vs,
  A as E,
  L as ni,
  M as Wt,
  N as Xt,
  E as _s,
  B as at,
  C as Be,
  O as Da,
  P as Ma,
  o as xs,
  e as br,
  Q as ka,
  h as It,
  R as Lo,
  k as er,
  S as Ba,
  T as Oo,
  D as tr,
  U as Pi,
  V as yr,
  W as zo,
  X as wt,
  Y as Ro,
} from "./DdtYbjEm.js";
import {
  S as ir,
  W as Ho,
  u as ht,
  N as Go,
  P as Ar,
  O as No,
  G as Uo,
  D as Vo,
  T as Er,
  a as Ue,
  R as sr,
  C as jo,
  g as P,
  V as me,
  M as ji,
  b as Qo,
  c as Yo,
  E as Wo,
  d as nr,
  U as Rt,
  e as Ht,
  f as Re,
  h as _e,
  i as Xo,
  j as ze,
  k as Pa,
  _ as Ko,
  l as qo,
  m as Jo,
  n as Ia,
  o as La,
  p as Zo,
  q as Ii,
  r as $o,
  s as el,
  t as tl,
  v as il,
  w as Bt,
  L as fs,
  x as j,
  y as sl,
  z as Oa,
  A as rr,
  B as za,
  F as wi,
  H as nl,
  I as Fn,
  J as hs,
  K as rl,
  Q as un,
  X as Ws,
  Y as Xs,
  Z as al,
  $ as _r,
  a0 as Ra,
  a1 as Ha,
  a2 as ol,
  a3 as ai,
  a4 as Hr,
  a5 as Tn,
  a6 as Ga,
  a7 as ll,
  a8 as Gr,
  a9 as dl,
  aa as cl,
  ab as ul,
  ac as pl,
  ad as fl,
  ae as Nr,
  af as hl,
  ag as Ur,
  ah as gl,
  ai as ml,
  aj as vl,
  ak as xl,
  al as Fl,
  am as wl,
  an as bl,
} from "./BJZqkRRX.js";
const yl = ri("/images/svg/nLogoB.svg"),
  Al = ri("/images/svg/nLogoB2.svg"),
  El = ri("/images/svg/nLogo.svg"),
  Xe = Io("sceneId", {
    state: () => ({
      activeOrgan: null,
      activeState: "choose",
      activeStory: null,
      activeStoryTab: 0,
      organsList: [
        {
          index: 0,
          name: "Neurology",
          image: "/images/svg/icon_brain.svg",
          pickName: "Neurology",
        },
        {
          index: 1,
          name: "Cardiovascular",
          image: "/images/svg/icon_heart.svg",
          pickName: "Cardiovascular",
        },
        {
          index: 2,
          name: "Toxins",
          image: "/images/svg/icon_toxins.svg",
          pickName: "toxins",
        },
        {
          index: 3,
          name: "Gut",
          image: "/images/svg/icon_int.svg",
          pickName: "Gut Health",
        },
        {
          index: 4,
          name: "Hormones",
          image: "/images/svg/icon_hormons.svg",
          image2: "/images/svg/female.svg",
          pickName: "Hormones",
        },
        {
          index: 5,
          name: "Genetics",
          image: "/images/svg/icon_genetics.svg",
          pickName: "Genetics",
        },
        {
          index: 6,
          name: "Longevity",
          image: "/images/svg/icon_longevity.svg",
          pickName: "Longevity",
        },
      ],
      cameraMoving: !1,
      sceneLoaded: !1,
      bodySelected: "female",
      topTooltipText: "Choose Body Type",
      bottomTooltipText: "Choose Body Type",
      showTopTooltip: !0,
      showBottomTooltip: !1,
      hotspotClicked: !1,
      triggerSecondTooltip: !1,
      activeStoryName: null,
      mobileListOpen: !1,
      triggerStoryAnimation: !1,
    }),
    getters: {
      getActiveOrgan: (e) => e.activeOrgan,
      getActiveState: (e) => e.activeState,
      getOrgansList: (e) => e.organsList,
      getActiveStory: (e) => e.activeStory,
      getActiveStoryTab: (e) => e.activeStoryTab,
      isCameraMoving: (e) => e.cameraMoving,
      isSceneLoaded: (e) => e.sceneLoaded,
      getBodySelected: (e) => e.bodySelected,
      getTopTooltipText: (e) => e.topTooltipText,
      getBottomTooltipText: (e) => e.bottomTooltipText,
      isShowTopTooltip: (e) => e.showTopTooltip,
      isShowBottomTooltip: (e) => e.showBottomTooltip,
      isHotspotClicked: (e) => e.hotspotClicked,
      isTriggerSecondTooltip: (e) => e.triggerSecondTooltip,
      getActiveStoryName: (e) => e.activeStoryName,
      isMobileListOpen: (e) => e.mobileListOpen,
      isTriggerStoryAnimation: (e) => e.triggerStoryAnimation,
    },
    actions: {
      setTriggerStoryAnimation(e) {
        this.triggerStoryAnimation = e;
      },
      cameraTo(e) {
        this.activeOrgan = e;
      },
      setActiveState(e) {
        this.activeState = e;
      },
      setSliderState(e) {},
      setActiveStory(e) {
        this.activeStory = e;
      },
      setActiveStoryTab(e) {
        this.activeStoryTab = e;
      },
      setCameraMoving(e) {
        this.cameraMoving = e;
      },
      setSceneLoaded(e) {
        this.sceneLoaded = e;
      },
      setBodySelected(e) {
        this.bodySelected = e;
      },
      setTopTooltipText(e) {
        this.topTooltipText = e;
      },
      setBottomTooltipText(e) {
        this.bottomTooltipText = e;
      },
      setShowTopTooltip(e) {
        this.showTopTooltip = e;
      },
      setShowBottomTooltip(e) {
        this.showBottomTooltip = e;
      },
      setHotspotClicked(e) {
        this.hotspotClicked = e;
      },
      setHoverOrgan(e, t) {},
      setTriggerSecondTooltip(e) {
        this.triggerSecondTooltip = e;
      },
      setActiveStoryName(e) {
        this.activeStoryName = e;
      },
      setMobileListOpen(e) {
        this.mobileListOpen = e;
      },
      scrollToTopStory() {},
      playSound() {},
    },
  }),
  _l = ve({
    __name: "LogoMain",
    setup(e) {
      const t = Xe();
      return (i, s) => (
        I(),
        z(
          "a",
          {
            href: "https://noomoagency.com",
            target: "_blank",
            class: G([
              "fixed lg:block xs:hidden n-logo bottom-17 right-34 z-100 opacity-0 transition-all duration-300 delay-1800 ease-in-out",
              { "opacity-100": L(t).isSceneLoaded },
            ]),
          },
          s[0] ||
            (s[0] = [
              Oi(
                '<div class="flex cursor-pointer items-center" data-v-259c1204><p class="text-bold-700-13 text-white uppercase" data-v-259c1204>created by</p><div class="ml-9" data-v-259c1204><img class="logo-1" alt="noomo agency" src="' +
                  yl +
                  '" data-v-259c1204><img class="absolute top-6 logo-2" alt="noomo agency" src="' +
                  Al +
                  '" data-v-259c1204></div><img alt="noomo agency" class="w-39" src="' +
                  El +
                  '" data-v-259c1204></div>',
                1,
              ),
            ]),
          2,
        )
      );
    },
  }),
  Cl = Object.assign(Te(_l, [["__scopeId", "data-v-259c1204"]]), {
    __name: "LogoMain",
  }),
  Sl = ri("/images/svg/LogoWhite.svg"),
  Ks = ri("/images/svg/dots.svg"),
  Tl = {
    class:
      "flex items-center w-full bg-white h-65 px-32 rounded-full relative overflow-hidden",
  },
  Dl = {
    class:
      "text-semi-600-16 text-brand-green relative whitespace-nowrap overflow-hidden",
  },
  Ml = { class: "sub absolute left-0 transform translate-y-20" },
  kl = ve({
    __name: "StartButton",
    props: { text: { type: String, default: "" } },
    setup(e) {
      const t = $(null),
        i = vs({ x: 0, y: 0 }),
        s = (n) => {
          if (!t.value) return;
          const r = t.value.getBoundingClientRect(),
            a = n.clientX - r.left - 49,
            o = n.clientY - r.top - 49;
          ((i.x = a), (i.y = o));
        };
      return (n, r) => (
        I(),
        z(
          "div",
          {
            class:
              "start-button 4xl:scale-120 flex relative items-center cursor-pointer bg-white/41 hover:bg-brand-green/41 transition-all duration-300 ease-in-out px-8 h-81 rounded-full",
            onMousemove: s,
            onClick: (ev) => {
              try {
                const store = window.$pinia?._s?.get('sceneId');
                if (store) {
                  store.setActiveState('list');
                  store.playSound();
                  store.setShowTopTooltip(!1);
                  setTimeout(() => {
                    store.setTopTooltipText('Choose A System To Explore Tests');
                    store.setShowTopTooltip(!0);
                  }, 300);
                }
              } catch(e){}
            },
            ref_key: "buttonRef",
            ref: t,
          },
          [
            r[0] || (r[0] = E("span", { class: "pulse" }, null, -1)),
            E("div", Tl, [
              E(
                "div",
                {
                  class: "hover-gradient",
                  style: ni({ transform: `translate(${i.x}px, ${i.y}px)` }),
                },
                null,
                4,
              ),
              E("p", Dl, [
                (I(!0),
                z(
                  Wt,
                  null,
                  Xt(
                    e.text.split(""),
                    (a, o) => (
                      I(),
                      z(
                        "span",
                        {
                          class:
                            "main inline-block relative transform transition-all duration-300 ease-in-out",
                          style: ni({
                            transitionDelay: o * 10 + "ms",
                            width: a === " " ? "4px" : "auto",
                          }),
                        },
                        [_s(at(a) + " ", 1), E("span", Ml, at(a), 1)],
                        4,
                      )
                    ),
                  ),
                  256,
                )),
              ]),
            ]),
          ],
          544,
        )
      );
    },
  }),
  Bl = Object.assign(Te(kl, [["__scopeId", "data-v-ffaad5cf"]]), {
    __name: "NavigationsStartButton",
  }),
  Pl = { class: "flex w-full lg:grow items-center lg:mb-0 xs:mb-40" },
  Il = {
    class:
      "md:flex-1/2 xs:flex-1/1 lg:block xs:flex flex-col justify-center flex items-center",
  },
  Ll = { class: "flex items-center flex-col" },
  Ol = {
    class:
      "lg:text-regular-500-80 4xl:text-[112px] xs:text-regular-500-48 text-white lg:text-left xs:text-center flex flex-col justify-center",
  },
  zl = { class: "overflow-hidden animated-title relative" },
  Rl = { class: "overflow-hidden animated-title relative" },
  Hl = { class: "flex-1/2 lg:flex flex-col items-center xs:hidden pt-50" },
  Gl = { class: "overflow-hidden mb-8" },
  Nl = { class: "overflow-hidden mb-8" },
  Ul = { class: "overflow-hidden mb-8" },
  Vl = { class: "overflow-hidden" },
  Vr = "Personalized",
  jr = "Wellness",
  jl = ve({
    __name: "ChooseBody",
    setup(e) {
      const t = Xe(),
        i = () => {
          (t.setActiveState("list"),
            t.playSound(),
            t.setShowTopTooltip(!1),
            setTimeout(() => {
              (t.setTopTooltipText("Choose A System To Explore Tests"),
                t.setShowTopTooltip(!0));
            }, 300));
        };
      return (s, n) => (
        I(),
        z(
          "div",
          {
            class: G([
              "choose-body fixed w-full h-full z-40 flex-col flex lg:justify-between xs:justify-end 4xl:py-30 lg:py-20 md:py-80 lg:px-20 md:px-80 xs:px-10 xs:py-40 transition-all duration-500 ease-in-out",
              {
                "pointer-events-none opacity-0":
                  L(t).getActiveState !== "choose",
              },
            ]),
          },
          [
            n[5] ||
              (n[5] = E("div", { class: "lg:block xs:hidden" }, null, -1)),
            E("div", Pl, [
              E("div", Il, [
                E("div", Ll, [
                  E("div", Ol, [
                    E(
                      "img",
                      {
                        alt: "logo",
                        src: Sl,
                        class: G([
                          "block lg:mr-auto xs:mr-0 lg:pl-3 4xl:h-49 lg:h-35 xs:h-24 md:mb-16 xs:mb-8 opacity-0 transition-opacity duration-800 delay-1800 ease-in-out",
                          { "opacity-100": L(t).isSceneLoaded },
                        ]),
                      },
                      null,
                      2,
                    ),
                    E("div", zl, [
                      (I(!0),
                      z(
                        Wt,
                        null,
                        Xt(
                          Vr.split(""),
                          (r, a) => (
                            I(),
                            z(
                              "span",
                              {
                                key: a,
                                class: G([
                                  "inline-block transform translate-y-90 opacity-0 transition-all duration-900 ease-in-out",
                                  {
                                    "!translate-y-0 !opacity-100":
                                      L(t).isSceneLoaded,
                                  },
                                ]),
                                style: ni({
                                  transitionDelay: 1500 + a * 50 + "ms",
                                }),
                              },
                              at(r),
                              7,
                            )
                          ),
                        ),
                        128,
                      )),
                      E(
                        "i",
                        {
                          class: G([
                            "absolute lg:inline-block xs:hidden left-0 opacity-0 not-italic transition-all delay-2800 ease-in-out duration-500",
                            { "opacity-100": L(t).isSceneLoaded },
                          ]),
                        },
                        at(Vr),
                        2,
                      ),
                    ]),
                    E("div", Rl, [
                      (I(!0),
                      z(
                        Wt,
                        null,
                        Xt(
                          jr.split(""),
                          (r, a) => (
                            I(),
                            z(
                              "span",
                              {
                                key: a,
                                class: G([
                                  "inline-block transform translate-y-90 opacity-0 transition-all duration-900 ease-in-out",
                                  {
                                    "!translate-y-0 !opacity-100":
                                      L(t).isSceneLoaded,
                                  },
                                ]),
                                style: ni({
                                  transitionDelay: 1900 + a * 50 + "ms",
                                }),
                              },
                              at(r),
                              7,
                            )
                          ),
                        ),
                        128,
                      )),
                      E(
                        "i",
                        {
                          class: G([
                            "absolute lg:inline-block xs:hidden left-2 opacity-0 not-italic transition-all delay-2800 ease-in-out duration-500",
                            { "opacity-100": L(t).isSceneLoaded },
                          ]),
                        },
                        at(jr),
                        2,
                      ),
                    ]),
                  ]),
                ]),
              ]),
              n[4] ||
                (n[4] = E(
                  "div",
                  {
                    class:
                      "flex-1/3 h-200 lg:max-[1370px]:flex-1/5 2lg:block xs:hidden",
                  },
                  null,
                  -1,
                )),
              E("div", Hl, [
                E("div", null, [
                  E("div", Gl, [
                    E(
                      "p",
                      {
                        class: G([
                          "flex text-white tracking-small 4xl:text-[25px] text-regular-500-18 items-center justify-end mb-8 transform translate-y-90 transition-all delay-1500 duration-900 ease-in-out",
                          { "opacity-100 !translate-y-0": L(t).isSceneLoaded },
                        ]),
                      },
                      n[0] ||
                        (n[0] = [
                          E(
                            "img",
                            {
                              class: "dots 4xl:w-34 w-24 mr-10",
                              alt: "icon",
                              src: Ks,
                            },
                            null,
                            -1,
                          ),
                          _s("High Quality Labs ", -1),
                        ]),
                      2,
                    ),
                  ]),
                  E("div", Nl, [
                    E(
                      "p",
                      {
                        class: G([
                          "flex text-white tracking-small 4xl:text-[25px] text-regular-500-18 items-center justify-end mb-8 transform translate-y-90 transition-all delay-1600 duration-900 ease-in-out",
                          { "opacity-100 !translate-y-0": L(t).isSceneLoaded },
                        ]),
                      },
                      n[1] ||
                        (n[1] = [
                          E(
                            "img",
                            {
                              class: "dots 4xl:w-34 w-24 mr-10",
                              alt: "icon",
                              src: Ks,
                            },
                            null,
                            -1,
                          ),
                          _s("Proprietary Technology ", -1),
                        ]),
                      2,
                    ),
                  ]),
                  E("div", Ul, [
                    E(
                      "p",
                      {
                        class: G([
                          "flex text-white tracking-small 4xl:text-[25px] text-regular-500-18 items-center justify-end mb-8 transform translate-y-90 transition-all delay-1700 duration-900 ease-in-out",
                          { "opacity-100 !translate-y-0": L(t).isSceneLoaded },
                        ]),
                      },
                      n[2] ||
                        (n[2] = [
                          E(
                            "img",
                            {
                              class: "dots 4xl:w-34 w-24 mr-10",
                              alt: "icon",
                              src: Ks,
                            },
                            null,
                            -1,
                          ),
                          _s("Science & Research ", -1),
                        ]),
                      2,
                    ),
                  ]),
                  E("div", Vl, [
                    E(
                      "p",
                      {
                        class: G([
                          "flex text-white tracking-small 4xl:text-[25px] text-regular-500-18 items-center justify-end transform translate-y-90 transition-all delay-1800 duration-900 ease-in-out",
                          { "opacity-100 !translate-y-0": L(t).isSceneLoaded },
                        ]),
                      },
                      n[3] ||
                        (n[3] = [
                          E(
                            "img",
                            {
                              class: "dots 4xl:w-34 w-24 mr-10",
                              alt: "icon",
                              src: Ks,
                            },
                            null,
                            -1,
                          ),
                          _s("Advanced Software ", -1),
                        ]),
                      2,
                    ),
                  ]),
                ]),
              ]),
            ]),
            n[6] ||
              (n[6] = E("div", { class: "flex justify-between" }, null, -1)),
            E(
              "div",
              {
                class: G([
                  "flex justify-center flex-col items-center gap-20 opacity-0 translate-y-90 transition-all delay-2100 duration-500 ease-in-out",
                  { "opacity-100 !translate-y-0": L(t).isSceneLoaded },
                ]),
              },
              [Be(Bl, { onClick: i, text: "Start Experience" })],
              2,
            ),
          ],
          2,
        )
      );
    },
  }),
  Ql = Object.assign(Te(jl, [["__scopeId", "data-v-22c8e034"]]), {
    __name: "ChooseBody",
  });
/**
 * lil-gui
 * https://lil-gui.georgealways.com
 * @version 0.20.0
 * @author George Michael Brower
 * @license MIT
 */ class ti {
  constructor(t, i, s, n, r = "div") {
    ((this.parent = t),
      (this.object = i),
      (this.property = s),
      (this._disabled = !1),
      (this._hidden = !1),
      (this.initialValue = this.getValue()),
      (this.domElement = document.createElement(r)),
      this.domElement.classList.add("controller"),
      this.domElement.classList.add(n),
      (this.$name = document.createElement("div")),
      this.$name.classList.add("name"),
      (ti.nextNameID = ti.nextNameID || 0),
      (this.$name.id = `lil-gui-name-${++ti.nextNameID}`),
      (this.$widget = document.createElement("div")),
      this.$widget.classList.add("widget"),
      (this.$disable = this.$widget),
      this.domElement.appendChild(this.$name),
      this.domElement.appendChild(this.$widget),
      this.domElement.addEventListener("keydown", (a) => a.stopPropagation()),
      this.domElement.addEventListener("keyup", (a) => a.stopPropagation()),
      this.parent.children.push(this),
      this.parent.controllers.push(this),
      this.parent.$children.appendChild(this.domElement),
      (this._listenCallback = this._listenCallback.bind(this)),
      this.name(s));
  }
  name(t) {
    return ((this._name = t), (this.$name.textContent = t), this);
  }
  onChange(t) {
    return ((this._onChange = t), this);
  }
  _callOnChange() {
    (this.parent._callOnChange(this),
      this._onChange !== void 0 && this._onChange.call(this, this.getValue()),
      (this._changed = !0));
  }
  onFinishChange(t) {
    return ((this._onFinishChange = t), this);
  }
  _callOnFinishChange() {
    (this._changed &&
      (this.parent._callOnFinishChange(this),
      this._onFinishChange !== void 0 &&
        this._onFinishChange.call(this, this.getValue())),
      (this._changed = !1));
  }
  reset() {
    return (this.setValue(this.initialValue), this._callOnFinishChange(), this);
  }
  enable(t = !0) {
    return this.disable(!t);
  }
  disable(t = !0) {
    return t === this._disabled
      ? this
      : ((this._disabled = t),
        this.domElement.classList.toggle("disabled", t),
        this.$disable.toggleAttribute("disabled", t),
        this);
  }
  show(t = !0) {
    return (
      (this._hidden = !t),
      (this.domElement.style.display = this._hidden ? "none" : ""),
      this
    );
  }
  hide() {
    return this.show(!1);
  }
  options(t) {
    const i = this.parent.add(this.object, this.property, t);
    return (i.name(this._name), this.destroy(), i);
  }
  min(t) {
    return this;
  }
  max(t) {
    return this;
  }
  step(t) {
    return this;
  }
  decimals(t) {
    return this;
  }
  listen(t = !0) {
    return (
      (this._listening = t),
      this._listenCallbackID !== void 0 &&
        (cancelAnimationFrame(this._listenCallbackID),
        (this._listenCallbackID = void 0)),
      this._listening && this._listenCallback(),
      this
    );
  }
  _listenCallback() {
    this._listenCallbackID = requestAnimationFrame(this._listenCallback);
    const t = this.save();
    (t !== this._listenPrevValue && this.updateDisplay(),
      (this._listenPrevValue = t));
  }
  getValue() {
    return this.object[this.property];
  }
  setValue(t) {
    return (
      this.getValue() !== t &&
        ((this.object[this.property] = t),
        this._callOnChange(),
        this.updateDisplay()),
      this
    );
  }
  updateDisplay() {
    return this;
  }
  load(t) {
    return (this.setValue(t), this._callOnFinishChange(), this);
  }
  save() {
    return this.getValue();
  }
  destroy() {
    (this.listen(!1),
      this.parent.children.splice(this.parent.children.indexOf(this), 1),
      this.parent.controllers.splice(this.parent.controllers.indexOf(this), 1),
      this.parent.$children.removeChild(this.domElement));
  }
}
class Yl extends ti {
  constructor(t, i, s) {
    (super(t, i, s, "boolean", "label"),
      (this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "checkbox"),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      this.$widget.appendChild(this.$input),
      this.$input.addEventListener("change", () => {
        (this.setValue(this.$input.checked), this._callOnFinishChange());
      }),
      (this.$disable = this.$input),
      this.updateDisplay());
  }
  updateDisplay() {
    return ((this.$input.checked = this.getValue()), this);
  }
}
function ar(e) {
  let t, i;
  return (
    (t = e.match(/(#|0x)?([a-f0-9]{6})/i))
      ? (i = t[2])
      : (t = e.match(/rgb\(\s*(\d*)\s*,\s*(\d*)\s*,\s*(\d*)\s*\)/))
        ? (i =
            parseInt(t[1]).toString(16).padStart(2, 0) +
            parseInt(t[2]).toString(16).padStart(2, 0) +
            parseInt(t[3]).toString(16).padStart(2, 0))
        : (t = e.match(/^#?([a-f0-9])([a-f0-9])([a-f0-9])$/i)) &&
          (i = t[1] + t[1] + t[2] + t[2] + t[3] + t[3]),
    i ? "#" + i : !1
  );
}
const Wl = {
    isPrimitive: !0,
    match: (e) => typeof e == "string",
    fromHexString: ar,
    toHexString: ar,
  },
  Ns = {
    isPrimitive: !0,
    match: (e) => typeof e == "number",
    fromHexString: (e) => parseInt(e.substring(1), 16),
    toHexString: (e) => "#" + e.toString(16).padStart(6, 0),
  },
  Xl = {
    isPrimitive: !1,
    match: (e) => Array.isArray(e),
    fromHexString(e, t, i = 1) {
      const s = Ns.fromHexString(e);
      ((t[0] = (((s >> 16) & 255) / 255) * i),
        (t[1] = (((s >> 8) & 255) / 255) * i),
        (t[2] = ((s & 255) / 255) * i));
    },
    toHexString([e, t, i], s = 1) {
      s = 255 / s;
      const n = ((e * s) << 16) ^ ((t * s) << 8) ^ ((i * s) << 0);
      return Ns.toHexString(n);
    },
  },
  Kl = {
    isPrimitive: !1,
    match: (e) => Object(e) === e,
    fromHexString(e, t, i = 1) {
      const s = Ns.fromHexString(e);
      ((t.r = (((s >> 16) & 255) / 255) * i),
        (t.g = (((s >> 8) & 255) / 255) * i),
        (t.b = ((s & 255) / 255) * i));
    },
    toHexString({ r: e, g: t, b: i }, s = 1) {
      s = 255 / s;
      const n = ((e * s) << 16) ^ ((t * s) << 8) ^ ((i * s) << 0);
      return Ns.toHexString(n);
    },
  },
  ql = [Wl, Ns, Xl, Kl];
function Jl(e) {
  return ql.find((t) => t.match(e));
}
class Zl extends ti {
  constructor(t, i, s, n) {
    (super(t, i, s, "color"),
      (this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "color"),
      this.$input.setAttribute("tabindex", -1),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      (this.$text = document.createElement("input")),
      this.$text.setAttribute("type", "text"),
      this.$text.setAttribute("spellcheck", "false"),
      this.$text.setAttribute("aria-labelledby", this.$name.id),
      (this.$display = document.createElement("div")),
      this.$display.classList.add("display"),
      this.$display.appendChild(this.$input),
      this.$widget.appendChild(this.$display),
      this.$widget.appendChild(this.$text),
      (this._format = Jl(this.initialValue)),
      (this._rgbScale = n),
      (this._initialValueHexString = this.save()),
      (this._textFocused = !1),
      this.$input.addEventListener("input", () => {
        this._setValueFromHexString(this.$input.value);
      }),
      this.$input.addEventListener("blur", () => {
        this._callOnFinishChange();
      }),
      this.$text.addEventListener("input", () => {
        const r = ar(this.$text.value);
        r && this._setValueFromHexString(r);
      }),
      this.$text.addEventListener("focus", () => {
        ((this._textFocused = !0), this.$text.select());
      }),
      this.$text.addEventListener("blur", () => {
        ((this._textFocused = !1),
          this.updateDisplay(),
          this._callOnFinishChange());
      }),
      (this.$disable = this.$text),
      this.updateDisplay());
  }
  reset() {
    return (this._setValueFromHexString(this._initialValueHexString), this);
  }
  _setValueFromHexString(t) {
    if (this._format.isPrimitive) {
      const i = this._format.fromHexString(t);
      this.setValue(i);
    } else
      (this._format.fromHexString(t, this.getValue(), this._rgbScale),
        this._callOnChange(),
        this.updateDisplay());
  }
  save() {
    return this._format.toHexString(this.getValue(), this._rgbScale);
  }
  load(t) {
    return (this._setValueFromHexString(t), this._callOnFinishChange(), this);
  }
  updateDisplay() {
    return (
      (this.$input.value = this._format.toHexString(
        this.getValue(),
        this._rgbScale,
      )),
      this._textFocused || (this.$text.value = this.$input.value.substring(1)),
      (this.$display.style.backgroundColor = this.$input.value),
      this
    );
  }
}
class In extends ti {
  constructor(t, i, s) {
    (super(t, i, s, "function"),
      (this.$button = document.createElement("button")),
      this.$button.appendChild(this.$name),
      this.$widget.appendChild(this.$button),
      this.$button.addEventListener("click", (n) => {
        (n.preventDefault(),
          this.getValue().call(this.object),
          this._callOnChange());
      }),
      this.$button.addEventListener("touchstart", () => {}, { passive: !0 }),
      (this.$disable = this.$button));
  }
}
class $l extends ti {
  constructor(t, i, s, n, r, a) {
    (super(t, i, s, "number"), this._initInput(), this.min(n), this.max(r));
    const o = a !== void 0;
    (this.step(o ? a : this._getImplicitStep(), o), this.updateDisplay());
  }
  decimals(t) {
    return ((this._decimals = t), this.updateDisplay(), this);
  }
  min(t) {
    return ((this._min = t), this._onUpdateMinMax(), this);
  }
  max(t) {
    return ((this._max = t), this._onUpdateMinMax(), this);
  }
  step(t, i = !0) {
    return ((this._step = t), (this._stepExplicit = i), this);
  }
  updateDisplay() {
    const t = this.getValue();
    if (this._hasSlider) {
      let i = (t - this._min) / (this._max - this._min);
      ((i = Math.max(0, Math.min(i, 1))),
        (this.$fill.style.width = i * 100 + "%"));
    }
    return (
      this._inputFocused ||
        (this.$input.value =
          this._decimals === void 0 ? t : t.toFixed(this._decimals)),
      this
    );
  }
  _initInput() {
    ((this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "text"),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      window.matchMedia("(pointer: coarse)").matches &&
        (this.$input.setAttribute("type", "number"),
        this.$input.setAttribute("step", "any")),
      this.$widget.appendChild(this.$input),
      (this.$disable = this.$input));
    const i = () => {
        let m = parseFloat(this.$input.value);
        isNaN(m) ||
          (this._stepExplicit && (m = this._snap(m)),
          this.setValue(this._clamp(m)));
      },
      s = (m) => {
        const x = parseFloat(this.$input.value);
        isNaN(x) ||
          (this._snapClampSetValue(x + m),
          (this.$input.value = this.getValue()));
      },
      n = (m) => {
        (m.key === "Enter" && this.$input.blur(),
          m.code === "ArrowUp" &&
            (m.preventDefault(), s(this._step * this._arrowKeyMultiplier(m))),
          m.code === "ArrowDown" &&
            (m.preventDefault(),
            s(this._step * this._arrowKeyMultiplier(m) * -1)));
      },
      r = (m) => {
        this._inputFocused &&
          (m.preventDefault(), s(this._step * this._normalizeMouseWheel(m)));
      };
    let a = !1,
      o,
      l,
      d,
      u,
      c;
    const p = 5,
      f = (m) => {
        ((o = m.clientX),
          (l = d = m.clientY),
          (a = !0),
          (u = this.getValue()),
          (c = 0),
          window.addEventListener("mousemove", h),
          window.addEventListener("mouseup", F));
      },
      h = (m) => {
        if (a) {
          const x = m.clientX - o,
            w = m.clientY - l;
          Math.abs(w) > p
            ? (m.preventDefault(),
              this.$input.blur(),
              (a = !1),
              this._setDraggingStyle(!0, "vertical"))
            : Math.abs(x) > p && F();
        }
        if (!a) {
          const x = m.clientY - d;
          ((c -= x * this._step * this._arrowKeyMultiplier(m)),
            u + c > this._max
              ? (c = this._max - u)
              : u + c < this._min && (c = this._min - u),
            this._snapClampSetValue(u + c));
        }
        d = m.clientY;
      },
      F = () => {
        (this._setDraggingStyle(!1, "vertical"),
          this._callOnFinishChange(),
          window.removeEventListener("mousemove", h),
          window.removeEventListener("mouseup", F));
      },
      v = () => {
        this._inputFocused = !0;
      },
      g = () => {
        ((this._inputFocused = !1),
          this.updateDisplay(),
          this._callOnFinishChange());
      };
    (this.$input.addEventListener("input", i),
      this.$input.addEventListener("keydown", n),
      this.$input.addEventListener("wheel", r, { passive: !1 }),
      this.$input.addEventListener("mousedown", f),
      this.$input.addEventListener("focus", v),
      this.$input.addEventListener("blur", g));
  }
  _initSlider() {
    ((this._hasSlider = !0),
      (this.$slider = document.createElement("div")),
      this.$slider.classList.add("slider"),
      (this.$fill = document.createElement("div")),
      this.$fill.classList.add("fill"),
      this.$slider.appendChild(this.$fill),
      this.$widget.insertBefore(this.$slider, this.$input),
      this.domElement.classList.add("hasSlider"));
    const t = (g, m, x, w, _) => ((g - m) / (x - m)) * (_ - w) + w,
      i = (g) => {
        const m = this.$slider.getBoundingClientRect();
        let x = t(g, m.left, m.right, this._min, this._max);
        this._snapClampSetValue(x);
      },
      s = (g) => {
        (this._setDraggingStyle(!0),
          i(g.clientX),
          window.addEventListener("mousemove", n),
          window.addEventListener("mouseup", r));
      },
      n = (g) => {
        i(g.clientX);
      },
      r = () => {
        (this._callOnFinishChange(),
          this._setDraggingStyle(!1),
          window.removeEventListener("mousemove", n),
          window.removeEventListener("mouseup", r));
      };
    let a = !1,
      o,
      l;
    const d = (g) => {
        (g.preventDefault(),
          this._setDraggingStyle(!0),
          i(g.touches[0].clientX),
          (a = !1));
      },
      u = (g) => {
        g.touches.length > 1 ||
          (this._hasScrollBar
            ? ((o = g.touches[0].clientX), (l = g.touches[0].clientY), (a = !0))
            : d(g),
          window.addEventListener("touchmove", c, { passive: !1 }),
          window.addEventListener("touchend", p));
      },
      c = (g) => {
        if (a) {
          const m = g.touches[0].clientX - o,
            x = g.touches[0].clientY - l;
          Math.abs(m) > Math.abs(x)
            ? d(g)
            : (window.removeEventListener("touchmove", c),
              window.removeEventListener("touchend", p));
        } else (g.preventDefault(), i(g.touches[0].clientX));
      },
      p = () => {
        (this._callOnFinishChange(),
          this._setDraggingStyle(!1),
          window.removeEventListener("touchmove", c),
          window.removeEventListener("touchend", p));
      },
      f = this._callOnFinishChange.bind(this),
      h = 400;
    let F;
    const v = (g) => {
      if (Math.abs(g.deltaX) < Math.abs(g.deltaY) && this._hasScrollBar) return;
      g.preventDefault();
      const x = this._normalizeMouseWheel(g) * this._step;
      (this._snapClampSetValue(this.getValue() + x),
        (this.$input.value = this.getValue()),
        clearTimeout(F),
        (F = setTimeout(f, h)));
    };
    (this.$slider.addEventListener("mousedown", s),
      this.$slider.addEventListener("touchstart", u, { passive: !1 }),
      this.$slider.addEventListener("wheel", v, { passive: !1 }));
  }
  _setDraggingStyle(t, i = "horizontal") {
    (this.$slider && this.$slider.classList.toggle("active", t),
      document.body.classList.toggle("lil-gui-dragging", t),
      document.body.classList.toggle(`lil-gui-${i}`, t));
  }
  _getImplicitStep() {
    return this._hasMin && this._hasMax ? (this._max - this._min) / 1e3 : 0.1;
  }
  _onUpdateMinMax() {
    !this._hasSlider &&
      this._hasMin &&
      this._hasMax &&
      (this._stepExplicit || this.step(this._getImplicitStep(), !1),
      this._initSlider(),
      this.updateDisplay());
  }
  _normalizeMouseWheel(t) {
    let { deltaX: i, deltaY: s } = t;
    return (
      Math.floor(t.deltaY) !== t.deltaY &&
        t.wheelDelta &&
        ((i = 0),
        (s = -t.wheelDelta / 120),
        (s *= this._stepExplicit ? 1 : 10)),
      i + -s
    );
  }
  _arrowKeyMultiplier(t) {
    let i = this._stepExplicit ? 1 : 10;
    return (t.shiftKey ? (i *= 10) : t.altKey && (i /= 10), i);
  }
  _snap(t) {
    let i = 0;
    return (
      this._hasMin ? (i = this._min) : this._hasMax && (i = this._max),
      (t -= i),
      (t = Math.round(t / this._step) * this._step),
      (t += i),
      (t = parseFloat(t.toPrecision(15))),
      t
    );
  }
  _clamp(t) {
    return (
      t < this._min && (t = this._min),
      t > this._max && (t = this._max),
      t
    );
  }
  _snapClampSetValue(t) {
    this.setValue(this._clamp(this._snap(t)));
  }
  get _hasScrollBar() {
    const t = this.parent.root.$children;
    return t.scrollHeight > t.clientHeight;
  }
  get _hasMin() {
    return this._min !== void 0;
  }
  get _hasMax() {
    return this._max !== void 0;
  }
}
class ed extends ti {
  constructor(t, i, s, n) {
    (super(t, i, s, "option"),
      (this.$select = document.createElement("select")),
      this.$select.setAttribute("aria-labelledby", this.$name.id),
      (this.$display = document.createElement("div")),
      this.$display.classList.add("display"),
      this.$select.addEventListener("change", () => {
        (this.setValue(this._values[this.$select.selectedIndex]),
          this._callOnFinishChange());
      }),
      this.$select.addEventListener("focus", () => {
        this.$display.classList.add("focus");
      }),
      this.$select.addEventListener("blur", () => {
        this.$display.classList.remove("focus");
      }),
      this.$widget.appendChild(this.$select),
      this.$widget.appendChild(this.$display),
      (this.$disable = this.$select),
      this.options(n));
  }
  options(t) {
    return (
      (this._values = Array.isArray(t) ? t : Object.values(t)),
      (this._names = Array.isArray(t) ? t : Object.keys(t)),
      this.$select.replaceChildren(),
      this._names.forEach((i) => {
        const s = document.createElement("option");
        ((s.textContent = i), this.$select.appendChild(s));
      }),
      this.updateDisplay(),
      this
    );
  }
  updateDisplay() {
    const t = this.getValue(),
      i = this._values.indexOf(t);
    return (
      (this.$select.selectedIndex = i),
      (this.$display.textContent = i === -1 ? t : this._names[i]),
      this
    );
  }
}
class td extends ti {
  constructor(t, i, s) {
    (super(t, i, s, "string"),
      (this.$input = document.createElement("input")),
      this.$input.setAttribute("type", "text"),
      this.$input.setAttribute("spellcheck", "false"),
      this.$input.setAttribute("aria-labelledby", this.$name.id),
      this.$input.addEventListener("input", () => {
        this.setValue(this.$input.value);
      }),
      this.$input.addEventListener("keydown", (n) => {
        n.code === "Enter" && this.$input.blur();
      }),
      this.$input.addEventListener("blur", () => {
        this._callOnFinishChange();
      }),
      this.$widget.appendChild(this.$input),
      (this.$disable = this.$input),
      this.updateDisplay());
  }
  updateDisplay() {
    return ((this.$input.value = this.getValue()), this);
  }
}
var id = `.lil-gui {
  font-family: var(--font-family);
  font-size: var(--font-size);
  line-height: 1;
  font-weight: normal;
  font-style: normal;
  text-align: left;
  color: var(--text-color);
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  --background-color: #1f1f1f;
  --text-color: #ebebeb;
  --title-background-color: #111111;
  --title-text-color: #ebebeb;
  --widget-color: #424242;
  --hover-color: #4f4f4f;
  --focus-color: #595959;
  --number-color: #2cc9ff;
  --string-color: #a2db3c;
  --font-size: 11px;
  --input-font-size: 11px;
  --font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Arial, sans-serif;
  --font-family-mono: Menlo, Monaco, Consolas, "Droid Sans Mono", monospace;
  --padding: 4px;
  --spacing: 4px;
  --widget-height: 20px;
  --title-height: calc(var(--widget-height) + var(--spacing) * 1.25);
  --name-width: 45%;
  --slider-knob-width: 2px;
  --slider-input-width: 27%;
  --color-input-width: 27%;
  --slider-input-min-width: 45px;
  --color-input-min-width: 45px;
  --folder-indent: 7px;
  --widget-padding: 0 0 0 3px;
  --widget-border-radius: 2px;
  --checkbox-size: calc(0.75 * var(--widget-height));
  --scrollbar-width: 5px;
}
.lil-gui, .lil-gui * {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
.lil-gui.root {
  width: var(--width, 245px);
  display: flex;
  flex-direction: column;
  background: var(--background-color);
}
.lil-gui.root > .title {
  background: var(--title-background-color);
  color: var(--title-text-color);
}
.lil-gui.root > .children {
  overflow-x: hidden;
  overflow-y: auto;
}
.lil-gui.root > .children::-webkit-scrollbar {
  width: var(--scrollbar-width);
  height: var(--scrollbar-width);
  background: var(--background-color);
}
.lil-gui.root > .children::-webkit-scrollbar-thumb {
  border-radius: var(--scrollbar-width);
  background: var(--focus-color);
}
@media (pointer: coarse) {
  .lil-gui.allow-touch-styles, .lil-gui.allow-touch-styles .lil-gui {
    --widget-height: 28px;
    --padding: 6px;
    --spacing: 6px;
    --font-size: 13px;
    --input-font-size: 16px;
    --folder-indent: 10px;
    --scrollbar-width: 7px;
    --slider-input-min-width: 50px;
    --color-input-min-width: 65px;
  }
}
.lil-gui.force-touch-styles, .lil-gui.force-touch-styles .lil-gui {
  --widget-height: 28px;
  --padding: 6px;
  --spacing: 6px;
  --font-size: 13px;
  --input-font-size: 16px;
  --folder-indent: 10px;
  --scrollbar-width: 7px;
  --slider-input-min-width: 50px;
  --color-input-min-width: 65px;
}
.lil-gui.autoPlace {
  max-height: 100%;
  position: fixed;
  top: 0;
  right: 15px;
  z-index: 1001;
}

.lil-gui .controller {
  display: flex;
  align-items: center;
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
}
.lil-gui .controller.disabled {
  opacity: 0.5;
}
.lil-gui .controller.disabled, .lil-gui .controller.disabled * {
  pointer-events: none !important;
}
.lil-gui .controller > .name {
  min-width: var(--name-width);
  flex-shrink: 0;
  white-space: pre;
  padding-right: var(--spacing);
  line-height: var(--widget-height);
}
.lil-gui .controller .widget {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  min-height: var(--widget-height);
}
.lil-gui .controller.string input {
  color: var(--string-color);
}
.lil-gui .controller.boolean {
  cursor: pointer;
}
.lil-gui .controller.color .display {
  width: 100%;
  height: var(--widget-height);
  border-radius: var(--widget-border-radius);
  position: relative;
}
@media (hover: hover) {
  .lil-gui .controller.color .display:hover:before {
    content: " ";
    display: block;
    position: absolute;
    border-radius: var(--widget-border-radius);
    border: 1px solid #fff9;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
}
.lil-gui .controller.color input[type=color] {
  opacity: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.lil-gui .controller.color input[type=text] {
  margin-left: var(--spacing);
  font-family: var(--font-family-mono);
  min-width: var(--color-input-min-width);
  width: var(--color-input-width);
  flex-shrink: 0;
}
.lil-gui .controller.option select {
  opacity: 0;
  position: absolute;
  width: 100%;
  max-width: 100%;
}
.lil-gui .controller.option .display {
  position: relative;
  pointer-events: none;
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  line-height: var(--widget-height);
  max-width: 100%;
  overflow: hidden;
  word-break: break-all;
  padding-left: 0.55em;
  padding-right: 1.75em;
  background: var(--widget-color);
}
@media (hover: hover) {
  .lil-gui .controller.option .display.focus {
    background: var(--focus-color);
  }
}
.lil-gui .controller.option .display.active {
  background: var(--focus-color);
}
.lil-gui .controller.option .display:after {
  font-family: "lil-gui";
  content: "↕";
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  padding-right: 0.375em;
}
.lil-gui .controller.option .widget,
.lil-gui .controller.option select {
  cursor: pointer;
}
@media (hover: hover) {
  .lil-gui .controller.option .widget:hover .display {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number input {
  color: var(--number-color);
}
.lil-gui .controller.number.hasSlider input {
  margin-left: var(--spacing);
  width: var(--slider-input-width);
  min-width: var(--slider-input-min-width);
  flex-shrink: 0;
}
.lil-gui .controller.number .slider {
  width: 100%;
  height: var(--widget-height);
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
  padding-right: var(--slider-knob-width);
  overflow: hidden;
  cursor: ew-resize;
  touch-action: pan-y;
}
@media (hover: hover) {
  .lil-gui .controller.number .slider:hover {
    background: var(--hover-color);
  }
}
.lil-gui .controller.number .slider.active {
  background: var(--focus-color);
}
.lil-gui .controller.number .slider.active .fill {
  opacity: 0.95;
}
.lil-gui .controller.number .fill {
  height: 100%;
  border-right: var(--slider-knob-width) solid var(--number-color);
  box-sizing: content-box;
}

.lil-gui-dragging .lil-gui {
  --hover-color: var(--widget-color);
}
.lil-gui-dragging * {
  cursor: ew-resize !important;
}

.lil-gui-dragging.lil-gui-vertical * {
  cursor: ns-resize !important;
}

.lil-gui .title {
  height: var(--title-height);
  font-weight: 600;
  padding: 0 var(--padding);
  width: 100%;
  text-align: left;
  background: none;
  text-decoration-skip: objects;
}
.lil-gui .title:before {
  font-family: "lil-gui";
  content: "▾";
  padding-right: 2px;
  display: inline-block;
}
.lil-gui .title:active {
  background: var(--title-background-color);
  opacity: 0.75;
}
@media (hover: hover) {
  body:not(.lil-gui-dragging) .lil-gui .title:hover {
    background: var(--title-background-color);
    opacity: 0.85;
  }
  .lil-gui .title:focus {
    text-decoration: underline var(--focus-color);
  }
}
.lil-gui.root > .title:focus {
  text-decoration: none !important;
}
.lil-gui.closed > .title:before {
  content: "▸";
}
.lil-gui.closed > .children {
  transform: translateY(-7px);
  opacity: 0;
}
.lil-gui.closed:not(.transition) > .children {
  display: none;
}
.lil-gui.transition > .children {
  transition-duration: 300ms;
  transition-property: height, opacity, transform;
  transition-timing-function: cubic-bezier(0.2, 0.6, 0.35, 1);
  overflow: hidden;
  pointer-events: none;
}
.lil-gui .children:empty:before {
  content: "Empty";
  padding: 0 var(--padding);
  margin: var(--spacing) 0;
  display: block;
  height: var(--widget-height);
  font-style: italic;
  line-height: var(--widget-height);
  opacity: 0.5;
}
.lil-gui.root > .children > .lil-gui > .title {
  border: 0 solid var(--widget-color);
  border-width: 1px 0;
  transition: border-color 300ms;
}
.lil-gui.root > .children > .lil-gui.closed > .title {
  border-bottom-color: transparent;
}
.lil-gui + .controller {
  border-top: 1px solid var(--widget-color);
  margin-top: 0;
  padding-top: var(--spacing);
}
.lil-gui .lil-gui .lil-gui > .title {
  border: none;
}
.lil-gui .lil-gui .lil-gui > .children {
  border: none;
  margin-left: var(--folder-indent);
  border-left: 2px solid var(--widget-color);
}
.lil-gui .lil-gui .controller {
  border: none;
}

.lil-gui label, .lil-gui input, .lil-gui button {
  -webkit-tap-highlight-color: transparent;
}
.lil-gui input {
  border: 0;
  outline: none;
  font-family: var(--font-family);
  font-size: var(--input-font-size);
  border-radius: var(--widget-border-radius);
  height: var(--widget-height);
  background: var(--widget-color);
  color: var(--text-color);
  width: 100%;
}
@media (hover: hover) {
  .lil-gui input:hover {
    background: var(--hover-color);
  }
  .lil-gui input:active {
    background: var(--focus-color);
  }
}
.lil-gui input:disabled {
  opacity: 1;
}
.lil-gui input[type=text],
.lil-gui input[type=number] {
  padding: var(--widget-padding);
  -moz-appearance: textfield;
}
.lil-gui input[type=text]:focus,
.lil-gui input[type=number]:focus {
  background: var(--focus-color);
}
.lil-gui input[type=checkbox] {
  appearance: none;
  width: var(--checkbox-size);
  height: var(--checkbox-size);
  border-radius: var(--widget-border-radius);
  text-align: center;
  cursor: pointer;
}
.lil-gui input[type=checkbox]:checked:before {
  font-family: "lil-gui";
  content: "✓";
  font-size: var(--checkbox-size);
  line-height: var(--checkbox-size);
}
@media (hover: hover) {
  .lil-gui input[type=checkbox]:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui button {
  outline: none;
  cursor: pointer;
  font-family: var(--font-family);
  font-size: var(--font-size);
  color: var(--text-color);
  width: 100%;
  border: none;
}
.lil-gui .controller button {
  height: var(--widget-height);
  text-transform: none;
  background: var(--widget-color);
  border-radius: var(--widget-border-radius);
}
@media (hover: hover) {
  .lil-gui .controller button:hover {
    background: var(--hover-color);
  }
  .lil-gui .controller button:focus {
    box-shadow: inset 0 0 0 1px var(--focus-color);
  }
}
.lil-gui .controller button:active {
  background: var(--focus-color);
}

@font-face {
  font-family: "lil-gui";
  src: url("data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAUsAAsAAAAACJwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAAH4AAADAImwmYE9TLzIAAAGIAAAAPwAAAGBKqH5SY21hcAAAAcgAAAD0AAACrukyyJBnbHlmAAACvAAAAF8AAACEIZpWH2hlYWQAAAMcAAAAJwAAADZfcj2zaGhlYQAAA0QAAAAYAAAAJAC5AHhobXR4AAADXAAAABAAAABMAZAAAGxvY2EAAANsAAAAFAAAACgCEgIybWF4cAAAA4AAAAAeAAAAIAEfABJuYW1lAAADoAAAASIAAAIK9SUU/XBvc3QAAATEAAAAZgAAAJCTcMc2eJxVjbEOgjAURU+hFRBK1dGRL+ALnAiToyMLEzFpnPz/eAshwSa97517c/MwwJmeB9kwPl+0cf5+uGPZXsqPu4nvZabcSZldZ6kfyWnomFY/eScKqZNWupKJO6kXN3K9uCVoL7iInPr1X5baXs3tjuMqCtzEuagm/AAlzQgPAAB4nGNgYRBlnMDAysDAYM/gBiT5oLQBAwuDJAMDEwMrMwNWEJDmmsJwgCFeXZghBcjlZMgFCzOiKOIFAB71Bb8AeJy1kjFuwkAQRZ+DwRAwBtNQRUGKQ8OdKCAWUhAgKLhIuAsVSpWz5Bbkj3dEgYiUIszqWdpZe+Z7/wB1oCYmIoboiwiLT2WjKl/jscrHfGg/pKdMkyklC5Zs2LEfHYpjcRoPzme9MWWmk3dWbK9ObkWkikOetJ554fWyoEsmdSlt+uR0pCJR34b6t/TVg1SY3sYvdf8vuiKrpyaDXDISiegp17p7579Gp3p++y7HPAiY9pmTibljrr85qSidtlg4+l25GLCaS8e6rRxNBmsnERunKbaOObRz7N72ju5vdAjYpBXHgJylOAVsMseDAPEP8LYoUHicY2BiAAEfhiAGJgZWBgZ7RnFRdnVJELCQlBSRlATJMoLV2DK4glSYs6ubq5vbKrJLSbGrgEmovDuDJVhe3VzcXFwNLCOILB/C4IuQ1xTn5FPilBTj5FPmBAB4WwoqAHicY2BkYGAA4sk1sR/j+W2+MnAzpDBgAyEMQUCSg4EJxAEAwUgFHgB4nGNgZGBgSGFggJMhDIwMqEAYAByHATJ4nGNgAIIUNEwmAABl3AGReJxjYAACIQYlBiMGJ3wQAEcQBEV4nGNgZGBgEGZgY2BiAAEQyQWEDAz/wXwGAAsPATIAAHicXdBNSsNAHAXwl35iA0UQXYnMShfS9GPZA7T7LgIu03SSpkwzYTIt1BN4Ak/gKTyAeCxfw39jZkjymzcvAwmAW/wgwHUEGDb36+jQQ3GXGot79L24jxCP4gHzF/EIr4jEIe7wxhOC3g2TMYy4Q7+Lu/SHuEd/ivt4wJd4wPxbPEKMX3GI5+DJFGaSn4qNzk8mcbKSR6xdXdhSzaOZJGtdapd4vVPbi6rP+cL7TGXOHtXKll4bY1Xl7EGnPtp7Xy2n00zyKLVHfkHBa4IcJ2oD3cgggWvt/V/FbDrUlEUJhTn/0azVWbNTNr0Ens8de1tceK9xZmfB1CPjOmPH4kitmvOubcNpmVTN3oFJyjzCvnmrwhJTzqzVj9jiSX911FjeAAB4nG3HMRKCMBBA0f0giiKi4DU8k0V2GWbIZDOh4PoWWvq6J5V8If9NVNQcaDhyouXMhY4rPTcG7jwYmXhKq8Wz+p762aNaeYXom2n3m2dLTVgsrCgFJ7OTmIkYbwIbC6vIB7WmFfAAAA==") format("woff");
}`;
function sd(e) {
  const t = document.createElement("style");
  t.innerHTML = e;
  const i = document.querySelector("head link[rel=stylesheet], head style");
  i ? document.head.insertBefore(t, i) : document.head.appendChild(t);
}
let Qr = !1;
class Cr {
  constructor({
    parent: t,
    autoPlace: i = t === void 0,
    container: s,
    width: n,
    title: r = "Controls",
    closeFolders: a = !1,
    injectStyles: o = !0,
    touchStyles: l = !0,
  } = {}) {
    if (
      ((this.parent = t),
      (this.root = t ? t.root : this),
      (this.children = []),
      (this.controllers = []),
      (this.folders = []),
      (this._closed = !1),
      (this._hidden = !1),
      (this.domElement = document.createElement("div")),
      this.domElement.classList.add("lil-gui"),
      (this.$title = document.createElement("button")),
      this.$title.classList.add("title"),
      this.$title.setAttribute("aria-expanded", !0),
      this.$title.addEventListener("click", () =>
        this.openAnimated(this._closed),
      ),
      this.$title.addEventListener("touchstart", () => {}, { passive: !0 }),
      (this.$children = document.createElement("div")),
      this.$children.classList.add("children"),
      this.domElement.appendChild(this.$title),
      this.domElement.appendChild(this.$children),
      this.title(r),
      this.parent)
    ) {
      (this.parent.children.push(this),
        this.parent.folders.push(this),
        this.parent.$children.appendChild(this.domElement));
      return;
    }
    (this.domElement.classList.add("root"),
      l && this.domElement.classList.add("allow-touch-styles"),
      !Qr && o && (sd(id), (Qr = !0)),
      s
        ? s.appendChild(this.domElement)
        : i &&
          (this.domElement.classList.add("autoPlace"),
          document.body.appendChild(this.domElement)),
      n && this.domElement.style.setProperty("--width", n + "px"),
      (this._closeFolders = a));
  }
  add(t, i, s, n, r) {
    if (Object(s) === s) return new ed(this, t, i, s);
    const a = t[i];
    switch (typeof a) {
      case "number":
        return new $l(this, t, i, s, n, r);
      case "boolean":
        return new Yl(this, t, i);
      case "string":
        return new td(this, t, i);
      case "function":
        return new In(this, t, i);
    }
    console.error(
      `gui.add failed
	property:`,
      i,
      `
	object:`,
      t,
      `
	value:`,
      a,
    );
  }
  addColor(t, i, s = 1) {
    return new Zl(this, t, i, s);
  }
  addFolder(t) {
    const i = new Cr({ parent: this, title: t });
    return (this.root._closeFolders && i.close(), i);
  }
  load(t, i = !0) {
    return (
      t.controllers &&
        this.controllers.forEach((s) => {
          s instanceof In ||
            (s._name in t.controllers && s.load(t.controllers[s._name]));
        }),
      i &&
        t.folders &&
        this.folders.forEach((s) => {
          s._title in t.folders && s.load(t.folders[s._title]);
        }),
      this
    );
  }
  save(t = !0) {
    const i = { controllers: {}, folders: {} };
    return (
      this.controllers.forEach((s) => {
        if (!(s instanceof In)) {
          if (s._name in i.controllers)
            throw new Error(
              `Cannot save GUI with duplicate property "${s._name}"`,
            );
          i.controllers[s._name] = s.save();
        }
      }),
      t &&
        this.folders.forEach((s) => {
          if (s._title in i.folders)
            throw new Error(
              `Cannot save GUI with duplicate folder "${s._title}"`,
            );
          i.folders[s._title] = s.save();
        }),
      i
    );
  }
  open(t = !0) {
    return (
      this._setClosed(!t),
      this.$title.setAttribute("aria-expanded", !this._closed),
      this.domElement.classList.toggle("closed", this._closed),
      this
    );
  }
  close() {
    return this.open(!1);
  }
  _setClosed(t) {
    this._closed !== t && ((this._closed = t), this._callOnOpenClose(this));
  }
  show(t = !0) {
    return (
      (this._hidden = !t),
      (this.domElement.style.display = this._hidden ? "none" : ""),
      this
    );
  }
  hide() {
    return this.show(!1);
  }
  openAnimated(t = !0) {
    return (
      this._setClosed(!t),
      this.$title.setAttribute("aria-expanded", !this._closed),
      requestAnimationFrame(() => {
        const i = this.$children.clientHeight;
        ((this.$children.style.height = i + "px"),
          this.domElement.classList.add("transition"));
        const s = (r) => {
          r.target === this.$children &&
            ((this.$children.style.height = ""),
            this.domElement.classList.remove("transition"),
            this.$children.removeEventListener("transitionend", s));
        };
        this.$children.addEventListener("transitionend", s);
        const n = t ? this.$children.scrollHeight : 0;
        (this.domElement.classList.toggle("closed", !t),
          requestAnimationFrame(() => {
            this.$children.style.height = n + "px";
          }));
      }),
      this
    );
  }
  title(t) {
    return ((this._title = t), (this.$title.textContent = t), this);
  }
  reset(t = !0) {
    return (
      (t ? this.controllersRecursive() : this.controllers).forEach((s) =>
        s.reset(),
      ),
      this
    );
  }
  onChange(t) {
    return ((this._onChange = t), this);
  }
  _callOnChange(t) {
    (this.parent && this.parent._callOnChange(t),
      this._onChange !== void 0 &&
        this._onChange.call(this, {
          object: t.object,
          property: t.property,
          value: t.getValue(),
          controller: t,
        }));
  }
  onFinishChange(t) {
    return ((this._onFinishChange = t), this);
  }
  _callOnFinishChange(t) {
    (this.parent && this.parent._callOnFinishChange(t),
      this._onFinishChange !== void 0 &&
        this._onFinishChange.call(this, {
          object: t.object,
          property: t.property,
          value: t.getValue(),
          controller: t,
        }));
  }
  onOpenClose(t) {
    return ((this._onOpenClose = t), this);
  }
  _callOnOpenClose(t) {
    (this.parent && this.parent._callOnOpenClose(t),
      this._onOpenClose !== void 0 && this._onOpenClose.call(this, t));
  }
  destroy() {
    (this.parent &&
      (this.parent.children.splice(this.parent.children.indexOf(this), 1),
      this.parent.folders.splice(this.parent.folders.indexOf(this), 1)),
      this.domElement.parentElement &&
        this.domElement.parentElement.removeChild(this.domElement),
      Array.from(this.children).forEach((t) => t.destroy()));
  }
  controllersRecursive() {
    let t = Array.from(this.controllers);
    return (
      this.folders.forEach((i) => {
        t = t.concat(i.controllersRecursive());
      }),
      t
    );
  }
  foldersRecursive() {
    let t = Array.from(this.folders);
    return (
      this.folders.forEach((i) => {
        t = t.concat(i.foldersRecursive());
      }),
      t
    );
  }
}
function nd(e, t = document.body) {
  const { isRealTablet: i, isMobile: s } = ht(),
    r = ji.degToRad(7),
    a = {
      enabled: !0,
      baseAz: 0,
      basePol: 0,
      baseRadius: 1,
      deltaAz: 0,
      deltaPol: 0,
    },
    o = P.quickTo(a, "deltaAz", { duration: 0.35, ease: "power2.out" }),
    l = P.quickTo(a, "deltaPol", { duration: 0.35, ease: "power2.out" }),
    d = new me(),
    u = new Qo();
  function c() {
    const x = e.object,
      w = e.target;
    (d.copy(x.position).sub(w),
      u.setFromVector3(d),
      (a.baseAz = u.theta),
      (a.basePol = u.phi),
      (a.baseRadius = u.radius));
  }
  function p() {
    a.enabled && c();
  }
  function f(x) {
    if (!a.enabled || s || i.value) return;
    const w = (x.clientX / window.innerWidth) * 2 - 1,
      _ = (x.clientY / window.innerHeight) * 2 - 1,
      T = ji.clamp(-w * r, -r, r),
      A = ji.clamp(_ * r, -r, r);
    (o(T), l(A));
  }
  function h() {
    a.enabled && (o(0), l(0));
  }
  (t.addEventListener("pointerenter", p, { passive: !0 }),
    t.addEventListener("pointermove", f, { passive: !0 }),
    t.addEventListener("pointerleave", h, { passive: !0 }),
    t.addEventListener("pointercancel", h, { passive: !0 }),
    window.addEventListener("blur", h));
  function F() {
    if (!a.enabled) return;
    const x = e.object,
      w = e.target;
    let _ = a.baseAz + a.deltaAz,
      T = a.basePol + a.deltaPol;
    const A = (e.minPolarAngle ?? 0) + 1e-4,
      k = (e.maxPolarAngle ?? Math.PI) - 1e-4;
    T = ji.clamp(T, A, k);
    const S = Number.isFinite(e.minAzimuthAngle) ? e.minAzimuthAngle : -1 / 0,
      y = Number.isFinite(e.maxAzimuthAngle) ? e.maxAzimuthAngle : 1 / 0;
    _ = ji.clamp(_, S, y);
    const B = a.baseRadius,
      M = Math.sin(T) * B;
    (x.position.set(
      w.x + M * Math.sin(_),
      w.y + Math.cos(T) * B,
      w.z + M * Math.cos(_),
    ),
      x.lookAt(w),
      e.update());
  }
  function v() {
    ((a.enabled = !1), o(0), l(0), (a.deltaAz = 0), (a.deltaPol = 0));
  }
  function g() {
    (c(), o(0), l(0), (a.enabled = !0));
  }
  function m() {
    (t.removeEventListener("pointerenter", p),
      t.removeEventListener("pointermove", f),
      t.removeEventListener("pointerleave", h),
      t.removeEventListener("pointercancel", h),
      window.removeEventListener("blur", h));
  }
  return (
    c(),
    { update: F, dispose: m, pause: v, resume: g, syncFromControls: c }
  );
}
function Yr(e, t = 2560, i = 1440) {
  const s = window.innerWidth,
    n = window.innerHeight;
  (e.setPixelRatio(1), e.setSize(s, n, !1));
}
const rd = async (e) => {
  const t = new jo(),
    i = new ir(),
    s = new Ho({
      powerPreference: "high-performance",
      precision: "highp",
      antialias: !1,
      alpha: !1,
    }),
    { isRealTablet: n, isMobile: r } = ht();
  (n.value || r
    ? (s.setPixelRatio(
        window.devicePixelRatio >= 2 ? 1.5 : window.devicePixelRatio,
      ),
      s.setSize(window.innerWidth, window.innerHeight))
    : Yr(s, 1920, 1080),
    (s.toneMapping = Go),
    (s.shadowMap.enabled = !1),
    (s.toneMappingExposure = 1),
    e.appendChild(s.domElement));
  const a = {
      desktop: { y: 4.2, z: 2 },
      tablet: { y: 4.1, z: 1.5 },
      mobile: { y: 4, z: 1.5 },
    },
    o = { desktop: { y: 4.2 }, tablet: { y: 4.1 }, mobile: { y: 4 } },
    l = new Ar(50, window.innerWidth / window.innerHeight, 0.1, 2e3);
  (l.position.set(
    0,
    r ? a.mobile.y : n.value ? a.tablet.y : a.desktop.y,
    r ? a.mobile.z : n.value ? a.tablet.z : a.desktop.z,
  ),
    l.setFocalLength(35));
  const d = document.querySelector(".vibrant-scene"),
    u = new No(l, d);
  (u.target.set(0, r ? o.mobile.y : n.value ? o.tablet.y : o.desktop.y, 0),
    (u.enabled = !1),
    (u.enableRotate = !1),
    (u.enablePan = !1),
    (u.enableZoom = !1),
    (u.enableDamping = !0),
    (u.dampingFactor = 0.08));
  const c = new Uo(),
    p = new Vo();
  (p.setDecoderPath("/draco/"), c.setDRACOLoader(p));
  const f = new Cr();
  (f.hide(),
    document.querySelector(".lil-gui")?.remove(),
    f
      .addFolder("Scene Controls")
      .add(u, "enabled")
      .name("Enable Orbit Controls"));
  const F = nd(u, document.body),
    v = new Er(),
    g = await v.loadAsync("/texture/white.jpg");
  g.colorSpace = Ue;
  const m = await v.loadAsync("/texture/white.jpg");
  g.wrapS = g.wrapT = sr;
  let x = 0;
  const w = () => {
    n || r
      ? ((l.aspect = window.innerWidth / window.innerHeight),
        l.updateProjectionMatrix(),
        s.setSize(window.innerWidth, window.innerHeight))
      : (cancelAnimationFrame(x),
        (x = requestAnimationFrame(() => Yr(s, 2560, 1440))));
  };
  return (
    window.addEventListener("resize", w),
    {
      scene: i,
      renderer: s,
      camera: l,
      controls: u,
      gltfLoader: c,
      gui: f,
      clock: t,
      hoverOrbit: F,
      texturesSSS: { imgTexture: g, thicknessTexture: m },
    }
  );
};
async function ad(e, t, i) {
  const n = await new Yo(t).loadAsync([
    "/map/GSG_PRO_STUDIOS_METAL_001_sm.webp",
    "/map/GSG_PRO_STUDIOS_METAL_001_sm-gainmap.webp",
    "/map/GSG_PRO_STUDIOS_METAL_001_sm.json",
  ]);
  ((n.renderTarget.texture.mapping = Wo),
    (e.environment = n.renderTarget.texture));
}
const Gt = (e, t, i = "name") => {
    const s = function () {
        ((this.color = e.uniforms.thicknessColor.value),
          (this.shininess = e.uniforms.shininess.value),
          (this.diffuse = e.uniforms.diffuse.value),
          (this.distortion = e.uniforms.thicknessDistortion.value),
          (this.ambient = e.uniforms.thicknessAmbient.value),
          (this.attenuation = e.uniforms.thicknessAttenuation.value),
          (this.power = e.uniforms.thicknessPower.value),
          (this.scale = e.uniforms.thicknessScale.value),
          (this.opacity = e.uniforms.opacity.value),
          (this.ior = e.uniforms.ior.value),
          (this.reflectivity = e.uniforms.reflectivity.value),
          (this.refractionRatio = e.uniforms.refractionRatio.value),
          (this.specular = e.uniforms.specular.value));
      },
      n = new s(),
      r = t.addFolder(`${i} Controls`);
    r.close();
    const a = r.addFolder(`${i} Color`);
    (a
      .add(n.color, "x", 0, 1, 0.01)
      .name("Color Red")
      .onChange(function (l) {
        e.uniforms.thicknessColor.value.x = l;
      }),
      a
        .add(n.color, "y", 0, 1, 0.01)
        .name("Color Green")
        .onChange(function (l) {
          e.uniforms.thicknessColor.value.y = l;
        }),
      a
        .add(n.color, "z", 0, 1, 0.01)
        .name("Color Blue")
        .onChange(function (l) {
          e.uniforms.thicknessColor.value.z = l;
        }));
    const o = r.addFolder(`${i} Diffuse`);
    (o
      .add(n.diffuse, "x", -10, 10, 0.01)
      .name("Diffuse X")
      .onChange(function (l) {
        e.uniforms.diffuse.value.x = l;
      }),
      o
        .add(n.diffuse, "y", -10, 10, 0.01)
        .name("Diffuse Y")
        .onChange(function (l) {
          e.uniforms.diffuse.value.y = l;
        }),
      o
        .add(n.diffuse, "z", -10, 10, 0.01)
        .name("Diffuse Z")
        .onChange(function (l) {
          e.uniforms.diffuse.value.z = l;
        }),
      r
        .add(n, "opacity")
        .min(0)
        .max(1)
        .step(0.01)
        .onChange(function () {
          e.uniforms.opacity.value = n.opacity;
        }),
      r
        .add(n, "shininess")
        .min(0)
        .max(1e3)
        .step(1)
        .onChange(function () {
          e.uniforms.shininess.value = n.shininess;
        }),
      r
        .add(n, "distortion")
        .min(0.01)
        .max(1)
        .step(0.01)
        .onChange(function () {
          e.uniforms.thicknessDistortion.value = n.distortion;
        }),
      r
        .add(n, "ambient")
        .min(0.01)
        .max(2)
        .step(0.01)
        .onChange(function () {
          e.uniforms.thicknessAmbient.value = n.ambient;
        }),
      r
        .add(n, "attenuation")
        .min(0.01)
        .max(5)
        .step(0.05)
        .onChange(function () {
          e.uniforms.thicknessAttenuation.value = n.attenuation;
        }),
      r
        .add(n, "power")
        .min(0.01)
        .max(16)
        .step(0.1)
        .onChange(function () {
          e.uniforms.thicknessPower.value = n.power;
        }),
      r
        .add(n, "scale")
        .min(0.01)
        .max(50)
        .step(0.1)
        .onChange(function () {
          e.uniforms.thicknessScale.value = n.scale;
        }));
  },
  gs = (
    e,
    t,
    i,
    s = "name",
    n = { enableLight: !0, intensity: 0.05, distance: 1, color: "#ffffff" },
  ) => {
    const r = n,
      a = new nr(r.color, r.intensity, r.distance);
    (a.position.set(t.x, t.y, t.z), e.add(a));
    const o = i.addFolder(`${s} Light Controls`);
    o.close();
    const l = o.addFolder("Position");
    (l
      .add(a.position, "x", t.x - 1, t.x + 1, 0.01)
      .name("X")
      .onChange((d) => {
        ((a.position.x = d), (pointLightHelper.position.x = d));
      }),
      l
        .add(a.position, "y", t.y - 1, t.y + 1, 0.01)
        .name("Y")
        .onChange((d) => {
          ((a.position.y = d), (pointLightHelper.position.y = d));
        }),
      l
        .add(a.position, "z", t.z - 1, t.x + 1, 0.01)
        .name("Z")
        .onChange((d) => {
          ((a.position.z = d), (pointLightHelper.position.z = d));
        }),
      o
        .add(r, "enableLight")
        .name("Enable Light")
        .onChange((d) => {
          ((a.visible = d), (pointLightHelper.visible = d));
        }),
      o
        .add(a, "intensity", 0, 1)
        .name("Intensity")
        .onChange((d) => {
          a.intensity = d;
        }),
      o
        .add(a, "distance", 0, 5)
        .name("Distance")
        .onChange((d) => {
          a.distance = d;
        }),
      o
        .addColor(r, "color")
        .name("Color")
        .onChange((d) => {
          a.color.set(d);
        }));
  },
  od = async (e, t, i, s, n, r, a) => {
    const l = (await t.loadAsync("/models/brain.glb")).scene,
      d = a.imgTexture,
      u = a.thicknessTexture,
      c = Ht,
      p = Rt.clone(c.uniforms);
    ((p.map.value = d),
      (p.diffuse.value = new me(-1.4, -4.39, -7.92)),
      (p.shininess.value = 567),
      (p.thicknessMap.value = u),
      (p.thicknessColor.value = new me(0.52, 0.36, 0.82)),
      (p.thicknessDistortion.value = 0.94),
      (p.thicknessAmbient.value = 1.29),
      (p.thicknessAttenuation.value = 1.26),
      (p.thicknessPower.value = 4.41),
      (p.thicknessScale.value = 36),
      (p.ior.value = 1.5),
      (p.reflectivity.value = 1),
      (p.refractionRatio.value = 0.98),
      (p.specular.value = new Re(
        0.005605391621829108,
        0.005605391621829108,
        0.005605391621829108,
      )),
      (p.opacity.value = 0));
    const f = new _e({
      uniforms: p,
      vertexShader: c.vertexShader,
      fragmentShader: c.fragmentShader,
      lights: !0,
      transparent: !1,
    });
    f.alphaHash = !0;
    const h = l.children[0];
    ((h.visible = !1), (h.material = f), e.add(l));
    const F = {
      x: h.position.x + 0.19,
      y: h.position.y,
      z: h.position.z - 0.43,
    };
    (gs(e, F, i, "Brain", {
      intensity: 0.226,
      distance: 1.1,
      color: 16711782,
      enableLight: !0,
    }),
      Gt(f, i, "Brain"));
    const v = P.context(() => {}),
      { isRealTablet: g, isMobile: m } = ht(),
      x = { desktop: { y: 0.2 }, tablet: { y: 0.2 }, mobile: { y: 0.2 } },
      w = {
        desktop: { x: 0.5, y: 0.2, z: 2 },
        tablet: { x: 0.2, y: 0.2, z: 1.2 },
        mobile: { x: 0.3, y: 0.2, z: 1.2 },
      };
    function _() {
      (r.pause(),
        v.add(() => {
          (P.killTweensOf([n.position, s.target]),
            P.timeline({ defaults: { ease: "power2.inOut", duration: 1 } })
              .to(
                s.target,
                {
                  x: h.position.x,
                  y:
                    h.position.y -
                    (m ? x.mobile.y : g.value ? x.tablet.y : x.desktop.y),
                  z: h.position.z,
                  onUpdate: () => {
                    s.update();
                  },
                },
                0,
              )
              .to(
                n.position,
                {
                  x:
                    h.position.x +
                    (m ? w.mobile.x : g.value ? w.tablet.x : w.desktop.x),
                  y:
                    h.position.y -
                    (m ? w.mobile.y : g.value ? w.tablet.y : w.desktop.y),
                  z:
                    h.position.z +
                    (m ? w.mobile.z : g.value ? w.tablet.z : w.desktop.z),
                  onComplete: () => {
                    (s.update(), requestAnimationFrame(() => r.resume()));
                  },
                },
                0,
              ));
        }));
    }
    const T = { desktop: { y: 3.4 }, tablet: { y: 3.4 }, mobile: { y: 3.4 } },
      A = {
        desktop: { x: 0, y: 3.4, z: 5 },
        tablet: { x: 0, y: 3.4, z: 5 },
        mobile: { x: 0, y: 3.4, z: 3.5 },
      };
    function k() {
      (r.pause(),
        v.add(() => {
          (P.killTweensOf([n.position, s.target]),
            P.timeline({ defaults: { ease: "power2.inOut", duration: 1 } })
              .to(
                s.target,
                {
                  x: 0,
                  y: m ? T.mobile.y : g.value ? T.tablet.y : T.desktop.y,
                  z: 0,
                  onUpdate: () => {
                    s.update();
                  },
                },
                0,
              )
              .to(
                n.position,
                {
                  x: m ? A.mobile.x : g.value ? A.tablet.x : A.desktop.x,
                  y: m ? A.mobile.y : g.value ? A.tablet.y : A.desktop.y,
                  z: m ? A.mobile.z : g.value ? A.tablet.z : A.desktop.z,
                  onComplete: () => {
                    (s.update(), requestAnimationFrame(() => r.resume()));
                  },
                },
                0,
              ));
        }));
    }
    const S = {
        desktop: { x: 0.32, y: 0, z: 1.2 },
        tablet: { x: 0.32, y: 0, z: 1.2 },
        mobile: { x: -0.32, y: 0.2, z: 1.2 },
      },
      y = {
        desktop: { x: 0.32, y: 0 },
        tablet: { x: 0, y: 0 },
        mobile: { x: 0, y: 0.2 },
      };
    function B() {
      (r.pause(),
        v.add(() => {
          (P.killTweensOf([n.position, s.target]),
            P.timeline({ defaults: { ease: "power2.inOut", duration: 1 } })
              .to(
                s.target,
                {
                  x:
                    h.position.x -
                    (m ? y.mobile.x : g.value ? y.tablet.x : y.desktop.x),
                  y:
                    h.position.y -
                    (m ? y.mobile.y : g.value ? y.tablet.y : y.desktop.y),
                  z: h.position.z,
                  onUpdate: () => {
                    s.update();
                  },
                },
                0,
              )
              .to(
                n.position,
                {
                  x:
                    h.position.x -
                    (m ? S.mobile.x : g.value ? S.tablet.x : S.desktop.x),
                  y:
                    h.position.y -
                    (m ? S.mobile.y : g.value ? S.tablet.y : S.desktop.y),
                  z:
                    h.position.z +
                    (m ? S.mobile.z : g.value ? S.tablet.z : S.desktop.z),
                  onComplete: () => {
                    (s.update(), requestAnimationFrame(() => r.resume()));
                  },
                },
                0,
              ));
        }));
    }
    const M = {
        desktop: { x: 0.73, y: 0.5, z: 3 },
        tablet: { x: 0, y: 0.6, z: 3 },
        mobile: { x: 0, y: 0.6, z: 2.5 },
      },
      Q = {
        desktop: { x: 0.73, y: 0.5 },
        tablet: { x: 0, y: 0.75 },
        mobile: { x: 0, y: 0.75 },
      };
    function K() {
      (r.pause(),
        v.add(() => {
          (P.killTweensOf([n.position, s.target]),
            P.timeline({ defaults: { ease: "power2.inOut", duration: 1 } })
              .to(
                s.target,
                {
                  x:
                    h.position.x -
                    (m ? Q.mobile.x : g.value ? Q.tablet.x : Q.desktop.x),
                  y:
                    h.position.y -
                    (m ? Q.mobile.y : g.value ? Q.tablet.y : Q.desktop.y),
                  z: h.position.z,
                  onUpdate: () => {
                    s.update();
                  },
                },
                0,
              )
              .to(
                n.position,
                {
                  x:
                    h.position.x -
                    (m ? M.mobile.x : g.value ? M.tablet.x : M.desktop.x),
                  y:
                    h.position.y -
                    (m ? M.mobile.y : g.value ? M.tablet.y : M.desktop.y),
                  z:
                    h.position.z +
                    (m ? M.mobile.z : g.value ? M.tablet.z : M.desktop.z),
                  onComplete: () => {
                    (s.update(), requestAnimationFrame(() => r.resume()));
                  },
                },
                0,
              ));
        }));
    }
    function oe(C = !0) {
      (C && (h.visible = !0),
        v.add(() => {
          (P.killTweensOf(p.opacity),
            P.to(p.opacity, {
              duration: 0.6,
              value: C ? 1 : 0,
              ease: "power2.inOut",
              onComplete: () => {
                C || (h.visible = !1);
              },
            }));
        }));
    }
    let R;
    v.add(() => {
      ((R = P.timeline({ paused: !0 })),
        R.to(
          f.uniforms.thicknessPower,
          { value: 1, ease: "power1.inOut", duration: 1, repeat: -1, yoyo: !0 },
          0,
        ).to(
          f.uniforms.thicknessScale,
          { value: 5, ease: "power1.inOut", duration: 1, repeat: -1, yoyo: !0 },
          0,
        ));
    });
    function N(C = !0) {
      C ? R.play() : R.pause();
    }
    return {
      cameraToBrain: _,
      cameraToBrainStory: B,
      cameraToBrainHormones: k,
      cameraToBrainStoryHormones: K,
      showBrain: oe,
      animateMaterial: N,
      cleanup: () => v.revert(),
    };
  },
  ld = async (e, t, i, s, n, r, a) => {
    const l = (await t.loadAsync("/models/intestine.glb")).scene,
      d = a.imgTexture,
      u = a.thicknessTexture,
      c = Ht,
      p = Rt.clone(c.uniforms);
    ((p.map.value = d),
      (p.diffuse.value = new me(-0.59, -6.83, 0.5)),
      (p.shininess.value = 453),
      (p.thicknessMap.value = u),
      (p.thicknessColor.value = new me(0.85, 0.43, 0.32)),
      (p.thicknessDistortion.value = 0.53),
      (p.thicknessAmbient.value = 0.61),
      (p.thicknessAttenuation.value = 1.01),
      (p.thicknessPower.value = 3.41),
      (p.thicknessScale.value = 18),
      (p.ior.value = 1.5),
      (p.reflectivity.value = 1),
      (p.refractionRatio.value = 0.98),
      (p.specular.value = new Re(
        0.005605391621829108,
        0.005605391621829108,
        0.005605391621829108,
      )),
      (p.opacity.value = 0));
    const f = new _e({
      uniforms: p,
      vertexShader: c.vertexShader,
      fragmentShader: c.fragmentShader,
      lights: !0,
      transparent: !1,
    });
    f.alphaHash = !0;
    const h = l.children[0];
    ((h.visible = !1),
      (h.material = f),
      e.add(l),
      gs(e, { x: -0.005, y: 3.27, z: -0.18 }, i, "Intestine", {
        intensity: 0.326,
        distance: 0.39,
        color: 16777215,
        enableLight: !0,
      }));
    const v = {
      x: l.children[0].position.x,
      y: l.children[0].position.y - 0.28,
      z: l.children[0].position.z - 0.5,
    };
    (gs(e, v, i, "Intestine 2", {
      intensity: 0.109,
      distance: 1.5,
      color: 16777215,
      enableLight: !0,
    }),
      Gt(f, i, "Intestine"));
    const g = P.context(() => {}),
      { isRealTablet: m, isMobile: x } = ht(),
      w = { desktop: { y: 0.07 }, tablet: { y: 0.07 }, mobile: { y: 0.07 } },
      _ = {
        desktop: { y: 0.07, z: 2 },
        tablet: { y: 0.07, z: 2 },
        mobile: { y: 0.07, z: 1.7 },
      };
    function T() {
      (r.pause(),
        g.add(() => {
          (P.killTweensOf([n.position, s.target]),
            P.timeline({ defaults: { ease: "power2.inOut", duration: 1 } })
              .to(
                s.target,
                {
                  x: l.children[0].position.x,
                  y:
                    l.children[0].position.y +
                    (x ? w.mobile.y : m.value ? w.tablet.y : w.desktop.y),
                  z: l.children[0].position.z,
                  overflow: "auto",
                  onUpdate: () => {
                    s.update();
                  },
                },
                0,
              )
              .to(
                n.position,
                {
                  x: l.children[0].position.x,
                  y:
                    l.children[0].position.y +
                    (x ? _.mobile.y : m.value ? _.tablet.y : _.desktop.y),
                  z:
                    l.children[0].position.z +
                    (x ? _.mobile.z : m.value ? _.tablet.z : _.desktop.z),
                  overwrite: "auto",
                  onComplete: () => {
                    (s.update(), requestAnimationFrame(() => r.resume()));
                  },
                },
                0,
              ));
        }));
    }
    const A = {
        desktop: { x: 0.5, y: 0, z: 1.5 },
        tablet: { x: 0, y: 0.2, z: 1.5 },
        mobile: { x: 0, y: 0.15, z: 1.5 },
      },
      k = {
        desktop: { x: 0.4, y: 0 },
        tablet: { x: 0, y: 0.15 },
        mobile: { x: 0, y: 0.1 },
      };
    function S() {
      (r.pause(),
        g.add(() => {
          (P.killTweensOf([n.position, s.target]),
            P.timeline({ defaults: { ease: "power2.inOut", duration: 1 } })
              .to(
                s.target,
                {
                  x:
                    l.children[0].position.x -
                    (x ? k.mobile.x : m.value ? k.tablet.x : k.desktop.x),
                  y:
                    l.children[0].position.y -
                    (x ? k.mobile.y : m.value ? k.tablet.y : k.desktop.y),
                  z: l.children[0].position.z,
                  overflow: "auto",
                  onUpdate: () => {
                    s.update();
                  },
                },
                0,
              )
              .to(
                n.position,
                {
                  x:
                    l.children[0].position.x -
                    (x ? A.mobile.x : m.value ? A.tablet.x : A.desktop.x),
                  y:
                    l.children[0].position.y -
                    (x ? A.mobile.y : m.value ? A.tablet.y : A.desktop.y),
                  z:
                    l.children[0].position.z +
                    (x ? A.mobile.z : m.value ? A.tablet.z : A.desktop.z),
                  overwrite: "auto",
                  onComplete: () => {
                    (s.update(), requestAnimationFrame(() => r.resume()));
                  },
                },
                0,
              ));
        }));
    }
    function y(Q = !0) {
      (Q && (h.visible = !0),
        g.add(() => {
          (P.killTweensOf(p.opacity),
            P.to(p.opacity, {
              duration: 0.6,
              value: Q ? 1 : 0,
              ease: "power2.inOut",
              onComplete: () => {
                Q || (h.visible = !1);
              },
            }));
        }));
    }
    let B;
    g.add(() => {
      ((B = P.timeline({ paused: !0 })),
        B.to(
          f.uniforms.thicknessPower,
          { value: 2, ease: "power1.inOut", duration: 1, repeat: -1, yoyo: !0 },
          0,
        ).to(
          f.uniforms.thicknessScale,
          {
            value: 24,
            ease: "power1.inOut",
            duration: 1,
            repeat: -1,
            yoyo: !0,
          },
          0,
        ));
    });
    function M(Q = !0) {
      Q ? B.play() : B.pause();
    }
    return {
      cameraToIntestine: T,
      cameraToIntestineStory: S,
      showIntestine: y,
      animateMaterial: M,
      cleanup: () => g.revert(),
    };
  },
  dd = async (e, t, i, s, n, r, a) => {
    const l = (await t.loadAsync("/models/heart.glb")).scene,
      d = a.imgTexture,
      u = a.thicknessTexture,
      c = Ht,
      p = Rt.clone(c.uniforms);
    ((p.map.value = d),
      (p.diffuse.value = new me(4.3, -4.66, -3.03)),
      (p.shininess.value = 478),
      (p.thicknessMap.value = u),
      (p.thicknessColor.value = new me(1, 0.59, 0.59)),
      (p.thicknessDistortion.value = 0.85),
      (p.thicknessAmbient.value = 0.84),
      (p.thicknessAttenuation.value = 1.06),
      (p.thicknessPower.value = 4.61),
      (p.thicknessScale.value = 50),
      (p.ior.value = 1.5),
      (p.reflectivity.value = 1),
      (p.refractionRatio.value = 0.98),
      (p.specular.value = new Re(
        0.005605391621829108,
        0.005605391621829108,
        0.005605391621829108,
      )),
      (p.opacity.value = 0));
    const f = new _e({
      uniforms: p,
      vertexShader: c.vertexShader,
      fragmentShader: c.fragmentShader,
      lights: !0,
      transparent: !1,
    });
    f.alphaHash = !0;
    const h = {
      x: l.children[0].position.x,
      y: l.children[0].position.y,
      z: l.children[0].position.z - 1.4,
    };
    (gs(e, h, i, "Heart", {
      intensity: 0.542,
      distance: 2.2,
      color: 16711816,
      enableLight: !0,
    }),
      Gt(f, i, "Heart"));
    const F = l.children[0];
    ((F.visible = !1), (F.material = f), e.add(l));
    const v = P.context(() => {}),
      { isRealTablet: g, isMobile: m } = ht(),
      x = { desktop: { y: 0.1 }, tablet: { y: 0.1 }, mobile: { y: 0.1 } },
      w = {
        desktop: { x: 0.3, y: 0.1, z: 2 },
        tablet: { x: 0.3, y: 0.1, z: 2 },
        mobile: { x: 0.3, y: 0.1, z: 1.4 },
      };
    function _() {
      (r.pause(),
        v.add(() => {
          (P.killTweensOf([n.position, s.target]),
            P.timeline({ defaults: { ease: "power2.inOut", duration: 1 } })
              .to(
                s.target,
                {
                  x: l.children[0].position.x,
                  y:
                    l.children[0].position.y -
                    (m ? x.mobile.y : g.value ? x.tablet.y : x.desktop.y),
                  z: l.children[0].position.z,
                  overwrite: "auto",
                  onUpdate: () => {
                    s.update();
                  },
                },
                0,
              )
              .to(
                n.position,
                {
                  x:
                    l.children[0].position.x +
                    (m ? w.mobile.x : g.value ? w.tablet.x : w.desktop.x),
                  y:
                    l.children[0].position.y -
                    (m ? w.mobile.y : g.value ? w.tablet.y : w.desktop.y),
                  z:
                    l.children[0].position.z +
                    (m ? w.mobile.z : g.value ? w.tablet.z : w.desktop.z),
                  overwrite: "auto",
                  onComplete: () => {
                    (s.update(), requestAnimationFrame(() => r.resume()));
                  },
                },
                0,
              ));
        }));
    }
    const T = {
        desktop: { x: 0.2, y: 0, z: 0.8 },
        tablet: { x: 0.2, y: 0.2, z: 0.8 },
        mobile: { x: 0.2, y: 0.2, z: 0.8 },
      },
      A = {
        desktop: { x: 0.2, y: 0 },
        tablet: { x: 0, y: 0.1 },
        mobile: { x: 0, y: 0.1 },
      };
    function k() {
      (r.pause(),
        v.add(() => {
          (P.killTweensOf([n.position, s.target]),
            P.timeline({
              defaults: { ease: "power2.inOut", duration: 1 },
              onComplete: () => {
                (s.update(), requestAnimationFrame(() => r.resume()));
              },
            })
              .to(
                s.target,
                {
                  x:
                    F.position.x -
                    (m ? A.mobile.x : g.value ? A.tablet.x : A.desktop.x),
                  y:
                    F.position.y -
                    (m ? A.mobile.y : g.value ? A.tablet.y : A.desktop.y),
                  z: F.position.z,
                  onUpdate: () => {
                    s.update();
                  },
                },
                0,
              )
              .to(
                n.position,
                {
                  x:
                    F.position.x -
                    (m ? T.mobile.x : g.value ? T.tablet.x : T.desktop.x),
                  y:
                    F.position.y -
                    (m ? T.mobile.y : g.value ? T.tablet.y : T.desktop.y),
                  z:
                    F.position.z +
                    (m ? T.mobile.z : g.value ? T.tablet.z : T.desktop.z),
                },
                0,
              ));
        }));
    }
    function S(M = !0) {
      (M && (F.visible = !0),
        v.add(() => {
          (P.killTweensOf(p.opacity),
            P.to(p.opacity, {
              duration: 0.6,
              value: M ? 1 : 0,
              ease: "power2.inOut",
              onComplete: () => {
                M || (F.visible = !1);
              },
            }));
        }));
    }
    let y;
    v.add(() => {
      ((y = P.timeline({ paused: !0 })),
        y
          .to(
            f.uniforms.thicknessAmbient,
            {
              value: 0.4,
              ease: "power1.inOut",
              duration: 1,
              repeat: -1,
              yoyo: !0,
            },
            0,
          )
          .to(
            f.uniforms.thicknessScale,
            {
              value: 40,
              ease: "power1.inOut",
              duration: 1,
              repeat: -1,
              yoyo: !0,
            },
            0,
          ));
    });
    function B(M = !0) {
      M ? y.play() : y.pause();
    }
    return {
      cameraToHeart: _,
      cameraToHeartStory: k,
      showHeart: S,
      animateMaterial: B,
      cleanup: () => v.revert(),
    };
  },
  cd = async (e, t, i, s, n, r, a) => {
    const l = (await t.loadAsync("/models/liver.glb")).scene,
      d = a.imgTexture,
      u = a.thicknessTexture,
      c = Ht,
      p = Rt.clone(c.uniforms);
    ((p.map.value = d),
      (p.diffuse.value = new me(8.1, -4.39, -3.58)),
      (p.shininess.value = 567),
      (p.thicknessMap.value = u),
      (p.thicknessColor.value = new me(0.89, 0.63, 0.55)),
      (p.thicknessDistortion.value = 0.53),
      (p.thicknessAmbient.value = 0.33),
      (p.thicknessAttenuation.value = 1.26),
      (p.thicknessPower.value = 6.61),
      (p.thicknessScale.value = 0.41),
      (p.ior.value = 1.5),
      (p.reflectivity.value = 1),
      (p.refractionRatio.value = 0.98),
      (p.specular.value = new Re(
        0.005605391621829108,
        0.005605391621829108,
        0.005605391621829108,
      )),
      (p.opacity.value = 0));
    const f = new _e({
      uniforms: p,
      vertexShader: c.vertexShader,
      fragmentShader: c.fragmentShader,
      lights: !0,
      transparent: !1,
    });
    f.alphaHash = !0;
    const h = l.children[0];
    ((h.visible = !1), (h.material = f), e.add(l), Gt(f, i, "Liver"));
    const F = P.context(() => {}),
      { isRealTablet: v, isMobile: g } = ht(),
      m = { desktop: { y: 0.1 }, tablet: { y: 0.1 }, mobile: { y: 0.1 } },
      x = {
        desktop: { x: 0.3, y: 0.1, z: 1.5 },
        tablet: { x: 0.3, y: 0.1, z: 1.5 },
        mobile: { x: 0.3, y: 0.1, z: 1.3 },
      };
    function w() {
      (r.pause(),
        F.add(() => {
          (P.killTweensOf([n.position, s.target]),
            P.timeline({ defaults: { ease: "power2.inOut", duration: 1 } })
              .to(
                s.target,
                {
                  x: l.children[0].position.x,
                  y:
                    l.children[0].position.y -
                    (g ? m.mobile.y : v.value ? m.tablet.y : m.desktop.y),
                  z: l.children[0].position.z,
                  overwrite: "auto",
                  onUpdate: () => {
                    s.update();
                  },
                },
                0,
              )
              .to(
                n.position,
                {
                  x:
                    l.children[0].position.x +
                    (g ? x.mobile.x : v.value ? x.tablet.x : x.desktop.x),
                  y:
                    l.children[0].position.y -
                    (g ? x.mobile.y : v.value ? x.tablet.y : x.desktop.y),
                  z:
                    l.children[0].position.z +
                    (g ? x.mobile.z : v.value ? x.tablet.z : x.desktop.z),
                  overwrite: "auto",
                  onComplete: () => {
                    (s.update(), requestAnimationFrame(() => r.resume()));
                  },
                },
                0,
              ));
        }));
    }
    const _ = {
        desktop: { x: 0.32, y: 0.1, z: 1.2 },
        tablet: { x: 0.32, y: 0.2, z: 1.2 },
        mobile: { x: 0.32, y: 0.2, z: 1.2 },
      },
      T = {
        desktop: { x: 0.32, y: 0.1 },
        tablet: { x: 0, y: 0.3 },
        mobile: { x: 0, y: 0.3 },
      };
    function A() {
      (r.pause(),
        F.add(() => {
          (P.killTweensOf([n.position, s.target]),
            P.timeline({ defaults: { ease: "power2.inOut", duration: 1 } })
              .to(
                s.target,
                {
                  x:
                    l.children[0].position.x -
                    (g ? T.mobile.x : v.value ? T.tablet.x : T.desktop.x),
                  y:
                    l.children[0].position.y -
                    (g ? T.mobile.y : v.value ? T.tablet.y : T.desktop.y),
                  z: l.children[0].position.z,
                  overwrite: "auto",
                  onUpdate: () => {
                    s.update();
                  },
                },
                0,
              )
              .to(
                n.position,
                {
                  x:
                    l.children[0].position.x -
                    (g ? _.mobile.x : v.value ? _.tablet.x : _.desktop.x),
                  y:
                    l.children[0].position.y -
                    (g ? _.mobile.y : v.value ? _.tablet.y : _.desktop.y),
                  z:
                    l.children[0].position.z +
                    (g ? _.mobile.z : v.value ? _.tablet.z : _.desktop.z),
                  overwrite: "auto",
                  onComplete: () => {
                    (s.update(), requestAnimationFrame(() => r.resume()));
                  },
                },
                0,
              ));
        }));
    }
    function k(B = !0) {
      (B && (h.visible = !0),
        F.add(() => {
          (P.killTweensOf(p.opacity),
            P.to(p.opacity, {
              duration: 0.6,
              value: B ? 1 : 0,
              ease: "power2.inOut",
              onComplete: () => {
                B || (h.visible = !1);
              },
            }));
        }));
    }
    let S;
    F.add(() => {
      ((S = P.timeline({ paused: !0 })),
        S.to(
          f.uniforms.thicknessPower,
          { value: 3, ease: "power1.inOut", duration: 1, repeat: -1, yoyo: !0 },
          0,
        ).to(
          f.uniforms.thicknessScale,
          {
            value: 1.5,
            ease: "power1.inOut",
            duration: 1,
            repeat: -1,
            yoyo: !0,
          },
          0,
        ));
    });
    function y(B = !0) {
      B ? S.play() : S.pause();
    }
    return {
      cameraToLiver: w,
      cameraToLiverStory: A,
      showLiver: k,
      animateMaterial: y,
      cleanup: () => F.revert(),
    };
  },
  ud = async (e, t, i, s) => {
    const r = (await t.loadAsync("/models/stomach.glb")).scene,
      a = s.imgTexture,
      o = s.thicknessTexture,
      l = Ht,
      d = Rt.clone(l.uniforms);
    ((d.map.value = a),
      (d.diffuse.value = new me(10, -1.4, -1.95)),
      (d.shininess.value = 326),
      (d.thicknessMap.value = o),
      (d.thicknessColor.value = new me(0.73, 0.23, 0.33)),
      (d.thicknessDistortion.value = 0.47),
      (d.thicknessAmbient.value = 0.48),
      (d.thicknessAttenuation.value = 0.26),
      (d.thicknessPower.value = 16),
      (d.thicknessScale.value = 16),
      (d.ior.value = 1.5),
      (d.reflectivity.value = 1),
      (d.refractionRatio.value = 0.98),
      (d.specular.value = new Re(
        0.005605391621829108,
        0.005605391621829108,
        0.005605391621829108,
      )),
      (d.opacity.value = 0));
    const u = new _e({
      uniforms: d,
      vertexShader: l.vertexShader,
      fragmentShader: l.fragmentShader,
      lights: !0,
      transparent: !1,
    });
    u.alphaHash = !0;
    const c = r.children[0];
    ((c.visible = !1), (c.material = u), e.add(r), Gt(u, i, "Stomach"));
    const p = P.context(() => {});
    function f(v = !0) {
      (v && (c.visible = !0),
        p.add(() => {
          (P.killTweensOf(d.opacity),
            P.to(d.opacity, {
              duration: 0.6,
              value: v ? 1 : 0,
              ease: "power2.inOut",
              onComplete: () => {
                v || (c.visible = !1);
              },
            }));
        }));
    }
    let h;
    p.add(() => {
      ((h = P.timeline({ paused: !0 })),
        h
          .to(
            u.uniforms.thicknessPower,
            {
              value: 10,
              ease: "power1.inOut",
              duration: 1,
              repeat: -1,
              yoyo: !0,
            },
            0,
          )
          .to(
            u.uniforms.thicknessScale,
            {
              value: 10,
              ease: "power1.inOut",
              duration: 1,
              repeat: -1,
              yoyo: !0,
            },
            0,
          ));
    });
    function F(v = !0) {
      v ? h.play() : h.pause();
    }
    return { showStomach: f, animateMaterial: F, cleanup: () => p.revert() };
  },
  pd = async (e, t, i, s, n, r) => {
    const { isRealTablet: a, isMobile: o, isIpadSafari: l } = ht(),
      d = a.value || o,
      c = (
        await t.loadAsync(
          d ? "/models/skinMB2Mobile.glb" : "/models/skinMB2.glb",
        )
      ).scene,
      f = (await t.loadAsync(d ? "/models/skinF2.glb" : "/models/skinF.glb"))
        .scene,
      h = (C, ee = !1) => {
        C.onBeforeCompile = (b) => {
          ((b.uniforms.uDissolve = {
            value:
              C.userData.initialDissolve !== void 0
                ? C.userData.initialDissolve
                : 0,
          }),
            (b.uniforms.uTime = { value: 0 }),
            (C.userData.shader = b),
            (b.vertexShader =
              `
        varying vec2 vDissolveUv;
      ` + b.vertexShader),
            (b.vertexShader = b.vertexShader.replace(
              "#include <uv_vertex>",
              `
        #include <uv_vertex>
        vDissolveUv = uv;
        `,
            )),
            (b.fragmentShader =
              `
        uniform float uDissolve;
        uniform float uTime;
        varying vec2 vDissolveUv;

        //	Classic Perlin 3D Noise 
        //	by Stefan Gustavson (https://github.com/stegu/webgl-noise)
        //
        vec4 permute(vec4 x){return mod(((x*34.0)+1.0)*x, 289.0);}
        vec4 taylorInvSqrt(vec4 r){return 1.79284291400159 - 0.85373472095314 * r;}
        vec3 fade(vec3 t) {return t*t*t*(t*(t*6.0-15.0)+10.0);}

        float cnoise(vec3 P){
          vec3 Pi0 = floor(P); // Integer part for indexing
          vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1
          Pi0 = mod(Pi0, 289.0);
          Pi1 = mod(Pi1, 289.0);
          vec3 Pf0 = fract(P); // Fractional part for interpolation
          vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0
          vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);
          vec4 iy = vec4(Pi0.yy, Pi1.yy);
          vec4 iz0 = Pi0.zzzz;
          vec4 iz1 = Pi1.zzzz;

          vec4 ixy = permute(permute(ix) + iy);
          vec4 ixy0 = permute(ixy + iz0);
          vec4 ixy1 = permute(ixy + iz1);

          vec4 gx0 = ixy0 / 7.0;
          vec4 gy0 = fract(floor(gx0) / 7.0) - 0.5;
          gx0 = fract(gx0);
          vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);
          vec4 sz0 = step(gz0, vec4(0.0));
          gx0 -= sz0 * (step(0.0, gx0) - 0.5);
          gy0 -= sz0 * (step(0.0, gy0) - 0.5);

          vec4 gx1 = ixy1 / 7.0;
          vec4 gy1 = fract(floor(gx1) / 7.0) - 0.5;
          gx1 = fract(gx1);
          vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);
          vec4 sz1 = step(gz1, vec4(0.0));
          gx1 -= sz1 * (step(0.0, gx1) - 0.5);
          gy1 -= sz1 * (step(0.0, gy1) - 0.5);

          vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);
          vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);
          vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);
          vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);
          vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);
          vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);
          vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);
          vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);

          vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));
          g000 *= norm0.x;
          g010 *= norm0.y;
          g100 *= norm0.z;
          g110 *= norm0.w;
          vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));
          g001 *= norm1.x;
          g011 *= norm1.y;
          g101 *= norm1.z;
          g111 *= norm1.w;

          float n000 = dot(g000, Pf0);
          float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));
          float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));
          float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));
          float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));
          float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));
          float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));
          float n111 = dot(g111, Pf1);

          vec3 fade_xyz = fade(Pf0);
          vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);
          vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);
          float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x); 
          return 1.2 * n_xyz;
        }
      ` + b.fragmentShader),
            (b.fragmentShader = b.fragmentShader.replace(
              "#include <dithering_fragment>",
              `
        #include <dithering_fragment>
        float noiseValue = cnoise(vec3(vDissolveUv * 12.0, 0.0)); // Scale UVs for noise
        noiseValue = noiseValue * 0.5 + 0.5; // Map to 0-1 range
        
        if (noiseValue < uDissolve) {
            discard;
        }
        float edgeThickness = 0.04;
        if (noiseValue < uDissolve + edgeThickness) {
            gl_FragColor.rgb += vec3(0.2); 
        }
        `,
            )),
            ee && (ee.visible = !1));
        };
      },
      F = await new Er().loadAsync("/texture/Plastic015A_1K-JPG_NormalGL.jpg");
    ((F.wrapS = sr), (F.wrapT = sr), F.repeat.set(2, 2));
    const v = new Xo({
        color: 16777215,
        roughness: d ? 0.1 : 0.45,
        metalness: 0.033,
        transmission: d ? 0 : 1,
        thickness: 0.86,
        ior: 2,
        clearcoat: 1,
        clearcoatRoughness: 0,
        dispersion: 1,
        reflectivity: 1,
        iridescence: 1,
        iridescenceIOR: 1.453,
        sheen: 0.326,
        sheenRoughness: 1,
        sheenColor: 0,
        specularIntensity: 1,
        specularColor: 16777215,
        opacity: d ? 0.3 : 1,
        transparent: d,
        normalMap: F,
        normalScale: new ze(15, 15),
      }),
      g = v.clone();
    ((v.userData.initialDissolve = 0.72),
      (g.userData.initialDissolve = 0.72),
      h(v, c),
      h(g),
      (c.children[0].material = v),
      (f.children[0].material = g));
    let m = "female";
    ((c.visible = !0),
      (f.visible = !0),
      i
        .add({ disableModal: !1 }, "disableModal")
        .name("Disable Modal")
        .onChange((C) => {
          C
            ? ((c.visible = !1), (f.visible = !1))
            : ((c.visible = !1), (f.visible = !0));
        }));
    const x = {
        color: 16777215,
        roughness: 0.555,
        metalness: 0.033,
        transmission: 1,
        thickness: 0,
        ior: 2,
        clearcoat: 1,
        clearcoatRoughness: 0,
        dispersion: 1,
        reflectivity: 1,
        iridescence: 1,
        iridescenceIOR: 1.3,
        sheen: 0.326,
        sheenRoughness: 1,
        sheenColor: 0,
        specularIntensity: 1,
        specularColor: 16777215,
      },
      w = i.addFolder("Skin Glass Material Controls");
    (w.close(),
      w
        .add(x, "roughness", 0, 1)
        .name("Roughness")
        .onChange((C) => {
          ((v.roughness = C), (g.roughness = C));
        }),
      w
        .add(x, "metalness", 0, 1)
        .name("Metalness")
        .onChange((C) => {
          ((v.metalness = C), (g.metalness = C));
        }),
      w
        .add(x, "transmission", 0, 1)
        .name("Transmission")
        .onChange((C) => {
          ((v.transmission = C), (g.transmission = C));
        }),
      w
        .add(x, "thickness", 0, 1)
        .name("Thickness")
        .onChange((C) => {
          ((v.thickness = C), (g.thickness = C));
        }),
      w
        .add(x, "ior", 1, 2)
        .name("IOR")
        .onChange((C) => {
          ((v.ior = C), (g.ior = C));
        }),
      w
        .add(x, "clearcoat", 0, 1)
        .name("Clearcoat")
        .onChange((C) => {
          ((v.clearcoat = C), (g.clearcoat = C));
        }),
      w
        .add(x, "clearcoatRoughness", 0, 1)
        .name("Clearcoat Roughness")
        .onChange((C) => {
          ((v.clearcoatRoughness = C), (g.clearcoatRoughness = C));
        }),
      w
        .add(x, "reflectivity", 0, 1)
        .name("Reflectivity")
        .onChange((C) => {
          ((v.reflectivity = C), (g.reflectivity = C));
        }),
      w
        .addColor(x, "color")
        .name("Color")
        .onChange((C) => {
          (v.color.set(C), g.color.set(C));
        }),
      w
        .addColor(x, "specularColor")
        .name("Specular Color")
        .onChange((C) => {
          (v.specularColor.set(C), g.specularColor.set(C));
        }),
      w
        .add(x, "specularIntensity", 0, 1)
        .name("Specular Intensity")
        .onChange((C) => {
          ((v.specularIntensity = C), (g.specularIntensity = C));
        }),
      w
        .add(x, "dispersion", 0, 1)
        .name("Dispersion")
        .onChange((C) => {
          ((v.dispersion = C), (g.dispersion = C));
        }),
      w
        .add(x, "iridescence", 0, 1)
        .name("Iridescence")
        .onChange((C) => {
          ((v.iridescence = C), (g.iridescence = C));
        }),
      w
        .add(x, "iridescenceIOR", 1, 2)
        .name("Iridescence IOR")
        .onChange((C) => {
          ((v.iridescenceIOR = C), (g.iridescenceIOR = C));
        }),
      w
        .add(x, "sheen", 0, 1)
        .name("Sheen")
        .onChange((C) => {
          ((v.sheen = C), (g.sheen = C));
        }),
      w
        .add(x, "sheenRoughness", 0, 1)
        .name("Sheen Roughness")
        .onChange((C) => {
          ((v.sheenRoughness = C), (g.sheenRoughness = C));
        }),
      w
        .addColor(x, "sheenColor")
        .name("Sheen Color")
        .onChange((C) => {
          (v.sheenColor.set(C), g.sheenColor.set(C));
        }));
    const _ = { value: 0 };
    (w
      .add(_, "value", 0, 1)
      .name("Dissolve")
      .onChange((C) => {
        ((v.userData.shader.uniforms.uDissolve.value = C),
          (g.userData.shader.uniforms.uDissolve.value = C));
      }),
      e.add(c),
      e.add(f));
    const T = new nr(16777215, 0.5, 10);
    (T.position.set(-2, 3.5, 0.5), e.add(T));
    const A = new nr(16777215, 0.5, 10);
    (A.position.set(2, 3.5, 0.5), e.add(A));
    const k = {
        enableLight: !0,
        intensity: 0.5,
        distance: 10,
        color: 16777215,
      },
      S = i.addFolder("Sides Light Controls");
    (S.close(),
      S.add(k, "enableLight")
        .name("Enable Light side")
        .onChange((C) => {
          ((T.visible = C),
            (A.visible = C),
            (pointLightHelper.visible = C),
            (pointLightHelper2.visible = C));
        }),
      S.add(T, "intensity", 0, 1)
        .name("Intensity")
        .onChange((C) => {
          ((T.intensity = C), (A.intensity = C));
        }),
      S.add(T, "distance", 0, 10)
        .name("Distance")
        .onChange((C) => {
          ((T.distance = C), (A.distance = C));
        }),
      S.addColor(k, "color")
        .name("Color")
        .onChange((C) => {
          (T.color.set(C),
            A.color.set(C),
            pointLightHelper.color.set(C),
            pointLightHelper2.color.set(C));
        }));
    const y = P.context(() => {}),
      B = () => {
        y.add(() => {
          (P.killTweensOf([v, g]),
            P.timeline().to([v, g], {
              roughness: d ? 0.02 : 0.186,
              metalness: 0.033,
              transmission: d ? 0 : 1,
              thickness: 0,
              ior: 2,
              clearcoat: 1,
              clearcoatRoughness: 0,
              dispersion: 1,
              reflectivity: 1,
              iridescence: 1,
              iridescenceIOR: 1.453,
              sheen: 0.326,
              sheenRoughness: 1,
              specularIntensity: 1,
              duration: 1,
              opacity: 0.3,
              ease: "none",
            }));
        });
      },
      M = () => {
        (m === "female" ? (f.visible = !0) : (c.visible = !0),
          y.add(() => {
            P.killTweensOf([v, g]);
            const C = P.timeline();
            (C.to([v, g], {
              roughness: 0.1,
              metalness: 0,
              reflectivity: 0.5,
              clearcoat: 0.5,
              specularIntensity: 0.5,
              transmission: d ? 0 : 1,
              thickness: 0,
              ior: 2,
              clearcoatRoughness: 0,
              dispersion: 1,
              iridescence: 1,
              iridescenceIOR: 1.3,
              sheen: 0.326,
              sheenRoughness: 1,
              duration: 1,
              opacity: 0.3,
              ease: "none",
            }),
              C.play());
          }));
      },
      Q = () => {
        y.add(() => {
          P.killTweensOf([v, g]);
          const C = P.timeline();
          (C.to([v, g], {
            roughness: 0,
            reflectivity: 0,
            clearcoat: 0,
            specularIntensity: 0,
            metalness: 0,
            transmission: d ? 0 : 1,
            thickness: 0,
            ior: 1.5,
            clearcoatRoughness: 0,
            dispersion: 0,
            iridescence: 0,
            iridescenceIOR: 1.3,
            sheen: 0,
            sheenRoughness: 0,
            opacity: 0,
            duration: 1,
            ease: "none",
            onComplete: () => {
              ((c.visible = !1), (f.visible = !1));
            },
          }),
            C.play());
        });
      },
      K = {
        desktop: { y: 3.5, z: 5 },
        tablet: { y: 3.9, z: 2.5 },
        mobile: { y: 3.7, z: 3.2 },
      },
      oe = { desktop: { y: 3.5 }, tablet: { y: 3.7 }, mobile: { y: 3.5 } };
    return {
      firstSkinState: B,
      secondSkinState: M,
      thirdSkinState: Q,
      cameraToSkin: () => {
        (r.pause(),
          y.add(() => {
            (P.killTweensOf([n.position, s.target]),
              P.timeline({ defaults: { ease: "power2.inOut", duration: 1 } })
                .to(
                  s.target,
                  {
                    x: 0,
                    y: o ? oe.mobile.y : a.value ? oe.tablet.y : oe.desktop.y,
                    z: 0,
                    overwrite: "auto",
                    onUpdate: () => {
                      s.update();
                    },
                  },
                  0,
                )
                .to(
                  n.position,
                  {
                    x: 0,
                    y: o ? K.mobile.y : a.value ? K.tablet.y : K.desktop.y,
                    z: o ? K.mobile.z : a.value ? K.tablet.z : K.desktop.z,
                    overwrite: "auto",
                    onComplete: () => {
                      (s.update(), requestAnimationFrame(() => r.resume()));
                    },
                  },
                  0,
                ));
          }));
      },
      showModel: (C) => {
        C === "male"
          ? ((c.visible = !0),
            (m = "male"),
            v.userData.shader &&
              P.to(v.userData.shader.uniforms.uDissolve, {
                value: 0.15,
                duration: 2,
                ease: "power2.inOut",
                overwrite: "auto",
              }),
            g.userData.shader &&
              P.to(g.userData.shader.uniforms.uDissolve, {
                value: 0.72,
                duration: 2,
                ease: "power2.inOut",
                overwrite: "auto",
                onComplete: () => {
                  f.visible = !1;
                },
              }))
          : ((f.visible = !0),
            (m = "female"),
            g.userData.shader &&
              P.to(g.userData.shader.uniforms.uDissolve, {
                value: 0.15,
                duration: 2,
                ease: "power2.inOut",
                overwrite: "auto",
              }),
            v.userData.shader &&
              P.to(v.userData.shader.uniforms.uDissolve, {
                value: 0.72,
                duration: 2,
                ease: "power2.inOut",
                overwrite: "auto",
                onComplete: () => {
                  c.visible = !1;
                },
              }));
      },
      cleanup: () => y.revert(),
    };
  },
  ae = {
    colorA: "#dbfff6",
    colorMid: "#fbebff",
    colorB: "#9ec3ff",
    highlightColor: "#deccff",
    speed: 0.7,
    flowSpeed: 0.35,
    pulseSpeed: 0.8,
    noiseScale: 20.2,
    noiseAmount: 0.63,
    noiseDetailScale: 15.5,
    noiseDetailAmount: 1,
    swirlStrength: 1,
    glowStrength: 0.72,
    pulseStrength: 0.33,
    fresnelStrength: 0.55,
    fresnelPower: 0.55,
    highlightIntensity: 0.95,
    curve: 0.5,
  },
  fd = async (e, t, i) => {
    const n = (await t.loadAsync("/models/podium.glb")).scene,
      r = new Pa({ color: 16777215 });
    ((r.userData.uTime = { value: 0 }),
      (r.userData.uColorA = { value: new Re(ae.colorA) }),
      (r.userData.uColorMid = { value: new Re(ae.colorMid) }),
      (r.userData.uColorB = { value: new Re(ae.colorB) }),
      (r.userData.uHighlightColor = { value: new Re(ae.highlightColor) }),
      (r.userData.uSpeed = { value: ae.speed }),
      (r.userData.uFlowSpeed = { value: ae.flowSpeed }),
      (r.userData.uPulseSpeed = { value: ae.pulseSpeed }),
      (r.userData.uNoiseScale = { value: ae.noiseScale }),
      (r.userData.uNoiseAmount = { value: ae.noiseAmount }),
      (r.userData.uNoiseDetailScale = { value: ae.noiseDetailScale }),
      (r.userData.uNoiseDetailAmount = { value: ae.noiseDetailAmount }),
      (r.userData.uSwirlStrength = { value: ae.swirlStrength }),
      (r.userData.uGlowStrength = { value: ae.glowStrength }),
      (r.userData.uPulseStrength = { value: ae.pulseStrength }),
      (r.userData.uFresnelStrength = { value: ae.fresnelStrength }),
      (r.userData.uFresnelPower = { value: ae.fresnelPower }),
      (r.userData.uHighlightIntensity = { value: ae.highlightIntensity }),
      (r.userData.uCurve = { value: ae.curve }),
      (r.onBeforeCompile = (o) => {
        ((o.uniforms.uTime = r.userData.uTime),
          (o.uniforms.uColorA = r.userData.uColorA),
          (o.uniforms.uColorMid = r.userData.uColorMid),
          (o.uniforms.uColorB = r.userData.uColorB),
          (o.uniforms.uHighlightColor = r.userData.uHighlightColor),
          (o.uniforms.uSpeed = r.userData.uSpeed),
          (o.uniforms.uFlowSpeed = r.userData.uFlowSpeed),
          (o.uniforms.uPulseSpeed = r.userData.uPulseSpeed),
          (o.uniforms.uNoiseScale = r.userData.uNoiseScale),
          (o.uniforms.uNoiseAmount = r.userData.uNoiseAmount),
          (o.uniforms.uNoiseDetailScale = r.userData.uNoiseDetailScale),
          (o.uniforms.uNoiseDetailAmount = r.userData.uNoiseDetailAmount),
          (o.uniforms.uSwirlStrength = r.userData.uSwirlStrength),
          (o.uniforms.uGlowStrength = r.userData.uGlowStrength),
          (o.uniforms.uPulseStrength = r.userData.uPulseStrength),
          (o.uniforms.uFresnelStrength = r.userData.uFresnelStrength),
          (o.uniforms.uFresnelPower = r.userData.uFresnelPower),
          (o.uniforms.uHighlightIntensity = r.userData.uHighlightIntensity),
          (o.uniforms.uCurve = r.userData.uCurve),
          (o.vertexShader = o.vertexShader
            .replace(
              "void main() {",
              `
      varying vec2 vUv;
      varying vec3 vViewDir;
      varying vec3 vSurfaceNormal;
      void main() {
      vUv = uv;
      `,
            )
            .replace(
              "vec3 transformedNormal = normalMatrix * objectNormal;",
              `
      vec3 transformedNormal = normalMatrix * objectNormal;
      vSurfaceNormal = normalize(transformedNormal);
      `,
            )
            .replace(
              "vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );",
              `
      vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );
      vViewDir = -mvPosition.xyz;
      `,
            )));
        const l = `
    varying vec2 vUv;
    varying vec3 vViewDir;
    varying vec3 vSurfaceNormal;
    uniform float uTime;
    uniform vec3 uColorA;
    uniform vec3 uColorMid;
    uniform vec3 uColorB;
    uniform vec3 uHighlightColor;
    uniform float uSpeed;
    uniform float uFlowSpeed;
    uniform float uPulseSpeed;
    uniform float uNoiseScale;
    uniform float uNoiseAmount;
    uniform float uNoiseDetailScale;
    uniform float uNoiseDetailAmount;
    uniform float uSwirlStrength;
    uniform float uGlowStrength;
    uniform float uPulseStrength;
    uniform float uFresnelStrength;
    uniform float uFresnelPower;
    uniform float uHighlightIntensity;
    uniform float uCurve;

    float hash21(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }
    float valueNoise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      float a = hash21(i);
      float b = hash21(i + vec2(1.0, 0.0));
      float c = hash21(i + vec2(0.0, 1.0));
      float d = hash21(i + vec2(1.0, 1.0));
      vec2 u = f * f * (3.0 - 2.0 * f);
      return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
    }

    float curveMix(float t, float k) {
      if (k == 1.0) return t;
      return pow(t, k);
    }

    vec2 swirl(vec2 uv, float strength, float timeShift) {
      vec2 c = uv - vec2(0.5);
      float r = length(c);
      float angle = strength * smoothstep(0.0, 0.7, r) * sin(r * 8.0 - timeShift);
      mat2 rot = mat2(cos(angle), -sin(angle), sin(angle), cos(angle));
      return rot * c + vec2(0.5);
    }

    float layeredNoise(vec2 uv, float scale, float detailScale, float detailAmount) {
      float base = valueNoise(uv * scale);
      float detail = valueNoise(uv * detailScale);
      return mix(base, detail, detailAmount);
    }
  `;
        ((o.fragmentShader = o.fragmentShader
          .replace(
            "void main() {",
            `
      ${l}
      void main() {
      `,
          )
          .replace(
            "vec4 diffuseColor = vec4( diffuse, opacity );",
            `
      vec4 diffuseColor = vec4( diffuse, opacity );

      vec2 swirlUV = swirl(vUv, uSwirlStrength, uTime * uFlowSpeed);
      vec2 fluidUV = swirlUV + vec2(sin(uTime * uSpeed) * 0.01, cos(uTime * uSpeed * 0.8) * 0.01);

      float baseGradient = clamp(fluidUV.y, 0.0, 1.0);
      float baseNoise = layeredNoise(fluidUV, uNoiseScale, uNoiseDetailScale, uNoiseDetailAmount);
      float centered = (baseNoise - 0.5) * 1.6 * uNoiseAmount;

      float t = curveMix(clamp(baseGradient + centered, 0.0, 1.0), max(0.0001, uCurve));

      vec3 grad = mix(uColorA, uColorMid, smoothstep(0.0, 0.55, t));
      grad = mix(grad, uColorB, smoothstep(0.35, 1.0, t));

      float pulse = 0.5 + 0.5 * sin(uTime * uPulseSpeed + fluidUV.y * 6.283);
      float pulseMask = pow(pulse, 3.0) * uPulseStrength;

      vec3 nrm = normalize(vSurfaceNormal);
      vec3 viewDir = normalize(vViewDir);
      float fresnelTerm = pow(1.0 - abs(dot(nrm, viewDir)), uFresnelPower);
      float fresnelGlow = fresnelTerm * uFresnelStrength;

      float highlight = smoothstep(0.65, 1.0, baseNoise);
      float highlightGlow = clamp(highlight * uHighlightIntensity, 0.0, 1.0);

      float pulseGlow = pulseMask * uGlowStrength;
      float glowAmount = clamp(fresnelGlow + pulseGlow, 0.0, 1.0);

      vec3 withHighlight = mix(grad, uHighlightColor, highlightGlow);
      vec3 highlightMix = mix(withHighlight, uHighlightColor, glowAmount);

      diffuseColor.rgb = highlightMix;
      `,
          )),
          (r.userData.shader = o));
      }),
      (n.children[0].material = r),
      e.add(n));
    const a = i.addFolder("Podium");
    (a.close(),
      setTimeout(() => {
        (P.to(r.userData.uTime, {
          value: 200,
          duration: 200,
          ease: "none",
          repeat: -1,
          yoyo: !1,
        }),
          a
            .addColor(ae, "colorA")
            .name("Color A")
            .onChange((o) => r.userData.uColorA.value.set(o)),
          a
            .addColor(ae, "colorMid")
            .name("Color Mid")
            .onChange((o) => r.userData.uColorMid.value.set(o)),
          a
            .addColor(ae, "colorB")
            .name("Color B")
            .onChange((o) => r.userData.uColorB.value.set(o)),
          a
            .addColor(ae, "highlightColor")
            .name("Highlight")
            .onChange((o) => r.userData.uHighlightColor.value.set(o)),
          a
            .add(ae, "speed", 0, 2, 0.01)
            .name("Drift Speed")
            .onChange((o) => (r.userData.uSpeed.value = o)),
          a
            .add(ae, "flowSpeed", 0, 1, 0.01)
            .name("Swirl Flow")
            .onChange((o) => (r.userData.uFlowSpeed.value = o)),
          a
            .add(ae, "pulseSpeed", 0, 2, 0.01)
            .name("Pulse Speed")
            .onChange((o) => (r.userData.uPulseSpeed.value = o)),
          a
            .add(ae, "noiseScale", 0.1, 40, 0.1)
            .name("Noise Scale")
            .onChange((o) => (r.userData.uNoiseScale.value = o)),
          a
            .add(ae, "noiseAmount", 0, 1, 0.01)
            .name("Noise Amount")
            .onChange((o) => (r.userData.uNoiseAmount.value = o)),
          a
            .add(ae, "noiseDetailScale", 1, 80, 0.5)
            .name("Detail Scale")
            .onChange((o) => (r.userData.uNoiseDetailScale.value = o)),
          a
            .add(ae, "noiseDetailAmount", 0, 1, 0.01)
            .name("Detail Amount")
            .onChange((o) => (r.userData.uNoiseDetailAmount.value = o)),
          a
            .add(ae, "swirlStrength", 0, 1, 0.01)
            .name("Swirl Strength")
            .onChange((o) => (r.userData.uSwirlStrength.value = o)),
          a
            .add(ae, "glowStrength", 0, 1, 0.01)
            .name("Glow Strength")
            .onChange((o) => (r.userData.uGlowStrength.value = o)),
          a
            .add(ae, "pulseStrength", 0, 1, 0.01)
            .name("Pulse Strength")
            .onChange((o) => (r.userData.uPulseStrength.value = o)),
          a
            .add(ae, "fresnelStrength", 0, 1, 0.01)
            .name("Fresnel Strength")
            .onChange((o) => (r.userData.uFresnelStrength.value = o)),
          a
            .add(ae, "fresnelPower", 0.5, 4, 0.01)
            .name("Fresnel Power")
            .onChange((o) => (r.userData.uFresnelPower.value = o)),
          a
            .add(ae, "highlightIntensity", 0, 1, 0.01)
            .name("Highlight Int")
            .onChange((o) => (r.userData.uHighlightIntensity.value = o)),
          a
            .add(ae, "curve", 0.1, 4, 0.01)
            .name("Curve")
            .onChange((o) => (r.userData.uCurve.value = o)));
      }, 1e3));
  },
  hd = {
    class:
      "overflow-hidden rounded-2xl absolute pointer-events-none w-full h-full top-0 left-0",
  },
  gd = { class: "bottom-block flex items-center relative z-2" },
  md = { class: "text-semi-600-16 whitespace-nowrap" },
  vd = ve({
    __name: "Hotspot",
    props: {
      text: { type: String, default: "Hotspot" },
      group: { type: String, default: "default" },
      modalId: { type: String, default: "defaultModal" },
    },
    setup(e) {
      const t = Xe(),
        i = vs({ x: 0, y: 0 }),
        s = $(null),
        n = (a) => {
          if (!s.value) return;
          const o = s.value.getBoundingClientRect(),
            l = a.clientX - o.left - 49,
            d = a.clientY - o.top - 49;
          ((i.x = l), (i.y = d));
        },
        r = (a) => {
          (t.setActiveStory(a),
            t.setActiveState("story"),
            t.setActiveStoryTab(0),
            setTimeout(() => {
              t.setTriggerStoryAnimation(!0);
            }, 50),
            t.hotspotClicked ||
              (t.setHotspotClicked(!0), t.setShowTopTooltip(!1)));
        };
      return (a, o) => (
        I(),
        z(
          "div",
          {
            ref_key: "buttonRef",
            ref: s,
            class: G([
              {
                "opacity-100 !pointer-events-auto delay-700":
                  L(t).getActiveOrgan === e.group &&
                  L(t).getActiveState === "slider",
              },
              "hotspot opacity-0 transition-opacity absolute border-1 md:border-white/21 xs:border-none left-0 top-0 transition-opacity-0 pointer-events-none delay-0 ease-in-out duration-300",
            ]),
            onClick: o[0] || (o[0] = (l) => r(e.modalId)),
            onMousemove: n,
          },
          [
            o[2] ||
              (o[2] = E(
                "div",
                { class: "circle relative z-2" },
                [
                  E("img", {
                    alt: "icon",
                    class: "absolute w-full h-full scale-150",
                    src: Ko,
                  }),
                ],
                -1,
              )),
            E("div", hd, [
              E(
                "div",
                {
                  class: "hover-gradient",
                  style: ni({ transform: `translate(${i.x}px, ${i.y}px)` }),
                },
                null,
                4,
              ),
            ]),
            E("div", gd, [
              E("p", md, at(e.text), 1),
              o[1] ||
                (o[1] = E(
                  "img",
                  { alt: "arrow", class: "arrow", src: qo },
                  null,
                  -1,
                )),
            ]),
          ],
          34,
        )
      );
    },
  }),
  xd = Object.assign(Te(vd, [["__scopeId", "data-v-f557c80e"]]), {
    __name: "NavigationsHotspot",
  }),
  Fd = async (e, t, i) => {
    const { isMobile: s } = Jo(),
      n = new Ia();
    (n.setSize(window.innerWidth, window.innerHeight),
      (n.domElement.style.position = "absolute"),
      (n.domElement.style.top = "0px"),
      e.appendChild(n.domElement));
    const a = (
      await t.loadAsync(
        s ? "/models/hotspotsMobile.glb" : "/models/hotspots.glb",
      )
    ).scene;
    return (
      i.add(a),
      a.children.forEach((o, l) => {
        const d = document.createElement("div");
        Da(xd, {
          text: (o.children[0]?.isObject3D
            ? o.children[0].name
            : o.name
          ).replace(/_/g, " "),
          group: o.name.slice(4, o.name.length - 1),
          modalId: o.children[0]?.isObject3D ? o.children[0].name : o.name,
        }).mount(d);
        const c = new La(d);
        (c.position.set(0, 0, 0), o.add(c), c.layers.set(0));
      }),
      n
    );
  },
  wd = ve({
    __name: "CircleHotspot",
    props: { organ: {}, index: {} },
    setup(e) {
      const t = Xe(),
        i = $(!1),
        s = $(!1);
      Ma(
        () => t.isMobileListOpen,
        (a) => {
          a
            ? ((i.value = !0),
              (s.value = !1),
              setTimeout(() => {
                s.value = !0;
              }, 300))
            : ((s.value = !1),
              setTimeout(() => {
                i.value = !1;
              }, 300));
        },
      );
      const n = (a, o, l) => {
          (t.setActiveState(a),
            t.cameraTo(o),
            t.setSliderState(l),
            t.isTriggerSecondTooltip ||
              (t.setTriggerSecondTooltip(!0),
              t.setShowTopTooltip(!1),
              setTimeout(() => {
                (t.setTopTooltipText("Click On The Test To Learn More"),
                  t.setShowTopTooltip(!0));
              }, 500)));
        },
        r = (a, o = !1) => {
          t.getActiveState === "list" && t.setHoverOrgan(a, o);
        };
      return (a, o) => (
        I(),
        z(
          "div",
          {
            class: G([
              "circulo-contenedor opacity-0 pointer-events-none",
              {
                "opacity-100 !pointer-events-auto":
                  L(t).getActiveState === "list",
                "!opacity-0 !pointer-events-none": i.value,
                "!w-0": s.value,
              },
            ]),
            onClick: o[0] || (o[0] = (l) => n("slider", a.organ, a.index)),
            onMouseenter: o[1] || (o[1] = (l) => r(a.organ, !0)),
            onMouseleave: o[2] || (o[2] = (l) => r(a.organ, !1)),
          },
          o[3] ||
            (o[3] = [
              Oi(
                '<div class="glow-bg"></div><div class="circulo-principal"><div class="puntos-container"><div class="punto"></div> <div class="punto"></div> <div class="punto"></div></div></div>',
                2,
              ),
            ]),
          34,
        )
      );
    },
  }),
  bd = Object.assign(wd, { __name: "NavigationsCircleHotspot" }),
  yd = async (e, t, i) => {
    const s = new Ia();
    (s.setSize(window.innerWidth, window.innerHeight),
      (s.domElement.style.position = "absolute"),
      (s.domElement.style.top = "0px"),
      e.appendChild(s.domElement));
    const r = (await t.loadAsync("/models/hotspotsList.glb")).scene;
    return (
      i.add(r),
      r.children.forEach((a, o) => {
        const l = document.createElement("div");
        Da(bd, {
          organ: a.name.slice(0, a.name.length - 1),
          index: parseInt(a.name.slice(a.name.length - 1), 10),
        }).mount(l);
        const u = new La(l);
        (u.position.set(0, 0, 0), a.add(u), u.layers.set(0));
      }),
      s
    );
  },
  Ad = async (e, t, i, s) => {
    const r = (await t.loadAsync("/models/galbladder.glb")).scene,
      a = s.imgTexture,
      o = s.thicknessTexture,
      l = Ht,
      d = Rt.clone(l.uniforms);
    ((d.map.value = a),
      (d.diffuse.value = new me(9.19, -0.59, -1.13)),
      (d.shininess.value = 211),
      (d.thicknessMap.value = o),
      (d.thicknessColor.value = new me(0.71, 0.44, 0.43)),
      (d.thicknessDistortion.value = 0.16),
      (d.thicknessAmbient.value = 0.2),
      (d.thicknessAttenuation.value = 0.11),
      (d.thicknessPower.value = 0.91),
      (d.thicknessScale.value = 0.01),
      (d.ior.value = 1.5),
      (d.reflectivity.value = 1),
      (d.refractionRatio.value = 0.98),
      (d.specular.value = new Re(
        0.005605391621829108,
        0.005605391621829108,
        0.005605391621829108,
      )),
      (d.opacity.value = 0));
    const u = new _e({
      uniforms: d,
      vertexShader: l.vertexShader,
      fragmentShader: l.fragmentShader,
      lights: !0,
      transparent: !1,
    });
    u.alphaHash = !0;
    const c = r.children[0];
    ((c.visible = !1), (c.material = u), e.add(r), Gt(u, i, "Galbladder"));
    const p = P.context(() => {});
    function f(F = !0) {
      (F && (c.visible = !0),
        p.add(() => {
          (P.killTweensOf(d.opacity),
            P.to(d.opacity, {
              duration: 0.6,
              value: F ? 1 : 0,
              ease: "power2.inOut",
              onComplete: () => {
                F || (c.visible = !1);
              },
            }));
        }));
    }
    function h(F = !0) {}
    return { showGalbladder: f, animateMaterial: h };
  },
  Ed = async (e, t, i, s) => {
    const r = (await t.loadAsync("/models/glands.glb")).scene,
      a = s.imgTexture,
      o = s.thicknessTexture,
      l = Ht,
      d = Rt.clone(l.uniforms);
    ((d.map.value = a),
      (d.diffuse.value = new me(1.58, 0.2, 0.2)),
      (d.shininess.value = 500),
      (d.thicknessMap.value = o),
      (d.thicknessColor.value = new me(0.77, 0.73, 0.32)),
      (d.thicknessDistortion.value = 0.12),
      (d.thicknessAmbient.value = 0.46),
      (d.thicknessAttenuation.value = 0.06),
      (d.thicknessPower.value = 4.21),
      (d.thicknessScale.value = 15.61),
      (d.ior.value = 1.5),
      (d.reflectivity.value = 1),
      (d.refractionRatio.value = 0.98),
      (d.specular.value = new Re(
        0.005605391621829108,
        0.005605391621829108,
        0.005605391621829108,
      )),
      (d.opacity.value = 0));
    const u = new _e({
      uniforms: d,
      vertexShader: l.vertexShader,
      fragmentShader: l.fragmentShader,
      lights: !0,
      transparent: !1,
    });
    u.alphaHash = !0;
    const c = r.children[0];
    ((c.visible = !1), (c.material = u), e.add(r), Gt(u, i, "Glands"));
    const p = P.context(() => {});
    function f(F = !0) {
      (F && (c.visible = !0),
        p.add(() => {
          (P.killTweensOf(d.opacity),
            P.to(d.opacity, {
              duration: 0.6,
              value: F ? 1 : 0,
              ease: "power2.inOut",
              onComplete: () => {
                F || (c.visible = !1);
              },
            }));
        }));
    }
    function h(F = !0) {}
    return { showGlands: f, animateMaterial: h, cleanup: () => p.revert() };
  },
  _d = async (e, t, i, s) => {
    const r = (await t.loadAsync("/models/kidneys2.glb")).scene,
      a = s.imgTexture,
      o = s.thicknessTexture,
      l = Ht,
      d = Rt.clone(l.uniforms);
    ((d.map.value = a),
      (d.diffuse.value = new me(1.04, -4.39, -3.85)),
      (d.shininess.value = 500),
      (d.thicknessMap.value = o),
      (d.thicknessColor.value = new me(0.39, 0.43, 0.44)),
      (d.thicknessDistortion.value = 0.85),
      (d.thicknessAmbient.value = 0.01),
      (d.thicknessAttenuation.value = 0.26),
      (d.thicknessPower.value = 2.61),
      (d.thicknessScale.value = 50),
      (d.ior.value = 1.5),
      (d.reflectivity.value = 1),
      (d.refractionRatio.value = 0.98),
      (d.specular.value = new Re(
        0.005605391621829108,
        0.005605391621829108,
        0.005605391621829108,
      )),
      (d.opacity.value = 0));
    const u = new _e({
      uniforms: d,
      vertexShader: l.vertexShader,
      fragmentShader: l.fragmentShader,
      lights: !0,
      transparent: !1,
    });
    u.alphaHash = !0;
    const c = r.children[0];
    ((c.visible = !1), (c.material = u), e.add(r), Gt(u, i, "Kidneys"));
    const p = P.context(() => {});
    function f(v = !0) {
      (v && (c.visible = !0),
        p.add(() => {
          (P.killTweensOf(d.opacity),
            P.to(d.opacity, {
              duration: 0.6,
              value: v ? 1 : 0,
              ease: "power2.inOut",
              onComplete: () => {
                v || (c.visible = !1);
              },
            }));
        }));
    }
    let h;
    p.add(() => {
      ((h = P.timeline({ paused: !0 })),
        h
          .to(
            u.uniforms.thicknessPower,
            {
              value: 2,
              ease: "power1.inOut",
              duration: 1,
              repeat: -1,
              yoyo: !0,
            },
            0,
          )
          .to(
            u.uniforms.thicknessScale,
            {
              value: 30,
              ease: "power1.inOut",
              duration: 1,
              repeat: -1,
              yoyo: !0,
            },
            0,
          ));
    });
    function F(v = !0) {
      v ? h.play() : h.pause();
    }
    return { showKidneys: f, animateMaterial: F, cleanup: () => p.revert() };
  },
  Cd = async (e, t, i, s) => {
    const r = (await t.loadAsync("/models/pancreas.glb")).scene,
      a = s.imgTexture,
      o = s.thicknessTexture,
      l = Ht,
      d = Rt.clone(l.uniforms);
    ((d.map.value = a),
      (d.diffuse.value = new me(1, 0.2, 0.2)),
      (d.shininess.value = 500),
      (d.thicknessMap.value = o),
      (d.thicknessColor.value = new me(1, 0.4, 0.4)),
      (d.thicknessDistortion.value = 0.57),
      (d.thicknessAmbient.value = 0.03),
      (d.thicknessAttenuation.value = 0.36),
      (d.thicknessPower.value = 2),
      (d.thicknessScale.value = 16),
      (d.ior.value = 1.5),
      (d.reflectivity.value = 1),
      (d.refractionRatio.value = 0.98),
      (d.specular.value = new Re(
        0.005605391621829108,
        0.005605391621829108,
        0.005605391621829108,
      )),
      (d.opacity.value = 0));
    const u = new _e({
      uniforms: d,
      vertexShader: l.vertexShader,
      fragmentShader: l.fragmentShader,
      lights: !0,
      transparent: !1,
    });
    u.alphaHash = !0;
    const c = r.children[0];
    ((c.visible = !1), (c.material = u), e.add(r), Gt(u, i, "Pancreas"));
    const p = P.context(() => {});
    function f(F = !0) {
      (F && (c.visible = !0),
        p.add(() => {
          (P.killTweensOf(d.opacity),
            P.to(d.opacity, {
              duration: 0.6,
              value: F ? 1 : 0,
              ease: "power2.inOut",
              onComplete: () => {
                F || (c.visible = !1);
              },
            }));
        }));
    }
    function h(F = !0) {}
    return { showPancreas: f, animateMaterial: h, cleanup: () => p.revert() };
  },
  Sd = async (e, t, i, s, n, r, a) => {
    const l = (await t.loadAsync("/models/dna.glb")).scene,
      d = a.imgTexture,
      u = a.thicknessTexture,
      c = Ht,
      p = Rt.clone(c.uniforms);
    ((p.map.value = d),
      (p.diffuse.value = new me(8.64, -1.68, -0.085)),
      (p.shininess.value = 517),
      (p.thicknessMap.value = u),
      (p.thicknessColor.value = new me(0.89, 0.43, 0.28)),
      (p.thicknessDistortion.value = 0.74),
      (p.thicknessAmbient.value = 0.66),
      (p.thicknessAttenuation.value = 1.21),
      (p.thicknessPower.value = 3.01),
      (p.thicknessScale.value = 16),
      (p.ior.value = 1.5),
      (p.reflectivity.value = 1),
      (p.refractionRatio.value = 0.98),
      (p.specular.value = new Re(
        0.005605391621829108,
        0.005605391621829108,
        0.005605391621829108,
      )),
      (p.opacity.value = 0));
    const f = new _e({
      uniforms: p,
      vertexShader: c.vertexShader,
      fragmentShader: c.fragmentShader,
      lights: !0,
      transparent: !1,
    });
    f.alphaHash = !0;
    const h = l.children[0];
    ((h.visible = !1),
      (h.material = f),
      e.add(l),
      gs(e, { x: -0.63, y: 3.09, z: -0.6 }, i, "DNA", {
        intensity: 0.05,
        distance: 1.245,
        color: "#ffc7c7",
        enableLight: !0,
      }),
      Gt(f, i, "DNA"));
    const v = P.context(() => {});
    function g() {
      (r.pause(),
        v.add(() => {
          (P.killTweensOf([n.position, s.target]),
            P.timeline({ defaults: { ease: "power2.inOut", duration: 1 } })
              .to(
                s.target,
                {
                  x: l.children[0].position.x,
                  y: l.children[0].position.y - 0.1,
                  z: l.children[0].position.z,
                  overflow: "auto",
                  onUpdate: () => {
                    s.update();
                  },
                },
                0,
              )
              .to(
                n.position,
                {
                  x: l.children[0].position.x + 0.5,
                  y: l.children[0].position.y - 0.1,
                  z: l.children[0].position.z + 1.5,
                  overflow: "auto",
                  onComplete: () => {
                    (s.update(), requestAnimationFrame(() => r.resume()));
                  },
                },
                0,
              ));
        }));
    }
    const { isRealTablet: m, isMobile: x } = ht(),
      w = {
        desktop: { x: 0.32, y: 0, z: 1.2 },
        tablet: { x: 0.32, y: 0.5, z: 1.2 },
        mobile: { x: 0.32, y: 0.5, z: 1.2 },
      },
      _ = {
        desktop: { x: 0.32, y: 0 },
        tablet: { x: 0, y: 0.2 },
        mobile: { x: 0, y: 0.2 },
      };
    function T() {
      (r.pause(),
        v.add(() => {
          (P.killTweensOf([n.position, s.target]),
            P.timeline({ defaults: { ease: "power2.inOut", duration: 1 } })
              .to(
                s.target,
                {
                  x:
                    l.children[0].position.x -
                    (x ? _.mobile.x : m.value ? _.tablet.x : _.desktop.x),
                  y:
                    l.children[0].position.y -
                    (x ? _.mobile.y : m.value ? _.tablet.y : _.desktop.y),
                  z: l.children[0].position.z,
                  overwrite: "auto",
                  onUpdate: () => {
                    s.update();
                  },
                },
                0,
              )
              .to(
                n.position,
                {
                  x:
                    l.children[0].position.x -
                    (x ? w.mobile.x : m.value ? w.tablet.x : w.desktop.x),
                  y:
                    l.children[0].position.y -
                    (x ? w.mobile.y : m.value ? w.tablet.y : w.desktop.y),
                  z:
                    l.children[0].position.z +
                    (x ? w.mobile.z : m.value ? w.tablet.z : w.desktop.z),
                  overwrite: "auto",
                  onComplete: () => {
                    (s.update(), requestAnimationFrame(() => r.resume()));
                  },
                },
                0,
              ));
        }));
    }
    function A(y = !0) {
      (y && (h.visible = !0),
        v.add(() => {
          (P.killTweensOf(p.opacity),
            P.to(p.opacity, {
              duration: 0.6,
              value: y ? 1 : 0,
              ease: "power2.inOut",
              onComplete: () => {
                y || (h.visible = !1);
              },
            }));
        }));
    }
    let k;
    v.add(() => {
      ((k = P.timeline({ paused: !0 })),
        k
          .to(
            f.uniforms.thicknessPower,
            {
              value: 2,
              ease: "power1.inOut",
              duration: 1,
              repeat: -1,
              yoyo: !0,
            },
            0,
          )
          .to(
            f.uniforms.thicknessScale,
            {
              value: 0,
              ease: "power1.inOut",
              duration: 1,
              repeat: -1,
              yoyo: !0,
            },
            0,
          ));
    });
    function S(y = !0) {
      y ? k.play() : k.pause();
    }
    return {
      cameraToDNA: g,
      cameraToDNAStory: T,
      showDNA: A,
      animateMaterial: S,
      cleanup: () => v.revert(),
    };
  },
  Td = async (e, t, i, s, n, r, a) => {
    const l = (await t.loadAsync("/models/cellNew.glb")).scene,
      d = a.imgTexture,
      u = a.thicknessTexture,
      c = Ht,
      p = Rt.clone(c.uniforms);
    ((p.map.value = d),
      (p.diffuse.value = new me(-6.02, -6.29, 7.83)),
      (p.shininess.value = 415),
      (p.thicknessMap.value = u),
      (p.thicknessColor.value = new me(0.4, 0.17, 1)),
      (p.thicknessDistortion.value = 0.72),
      (p.thicknessAmbient.value = 0.28),
      (p.thicknessAttenuation.value = 1.01),
      (p.thicknessPower.value = 4.81),
      (p.thicknessScale.value = 16),
      (p.ior.value = 1.5),
      (p.reflectivity.value = 1),
      (p.refractionRatio.value = 0.98),
      (p.specular.value = new Re(
        0.005605391621829108,
        0.005605391621829108,
        0.005605391621829108,
      )),
      (p.opacity.value = 0));
    const f = new _e({
      uniforms: p,
      vertexShader: c.vertexShader,
      fragmentShader: c.fragmentShader,
      lights: !0,
      transparent: !1,
    });
    ((f.alphaHash = !0), e.add(l));
    const h = l.children[0];
    ((h.visible = !1),
      (h.material = f),
      gs(e, { x: 0.9, y: 2.9, z: -0.57 }, i, "Cell", {
        intensity: 0.05,
        distance: 1,
        color: "#5cceff",
        enableLight: !0,
      }),
      Gt(f, i, "Cell"));
    const v = P.context(() => {}),
      { isRealTablet: g, isMobile: m } = ht(),
      x = { desktop: { y: 0.02 }, tablet: { y: 0.02 }, mobile: { y: 0.02 } },
      w = {
        desktop: { x: 0.2, y: 0.1, z: 0.5 },
        tablet: { x: 0.2, y: 0.1, z: 0.5 },
        mobile: { x: 0.2, y: 0.1, z: 0.37 },
      };
    function _() {
      (r.pause(),
        v.add(() => {
          (P.killTweensOf([n.position, s.target]),
            P.timeline({ defaults: { ease: "power2.inOut", duration: 1 } })
              .to(
                s.target,
                {
                  x: h.position.x,
                  y:
                    h.position.y -
                    (m ? x.mobile.y : g.value ? x.tablet.y : x.desktop.y),
                  z: h.position.z,
                  overwrite: "auto",
                  onUpdate: () => {
                    s.update();
                  },
                },
                0,
              )
              .to(
                n.position,
                {
                  x:
                    h.position.x -
                    (m ? w.mobile.x : g.value ? w.tablet.x : w.desktop.x),
                  y:
                    h.position.y +
                    (m ? w.mobile.y : g.value ? w.tablet.y : w.desktop.y),
                  z:
                    h.position.z +
                    (m ? w.mobile.z : g.value ? w.tablet.z : w.desktop.z),
                  overwrite: "auto",
                  onComplete: () => {
                    (s.update(), requestAnimationFrame(() => r.resume()));
                  },
                },
                0,
              ));
        }));
    }
    const T = {
        desktop: { x: 0.12, y: 0, z: 0.5 },
        tablet: { x: 0.12, y: 0.06, z: 0.5 },
        mobile: { x: 0.12, y: 0.06, z: 0.5 },
      },
      A = {
        desktop: { x: 0.12, y: 0 },
        tablet: { x: 0, y: 0.08 },
        mobile: { x: 0, y: 0.08 },
      };
    function k() {
      (r.pause(),
        v.add(() => {
          (P.killTweensOf([n.position, s.target]),
            P.timeline({ defaults: { ease: "power2.inOut", duration: 1 } })
              .to(
                s.target,
                {
                  x:
                    h.position.x -
                    (m ? A.mobile.x : g.value ? A.tablet.x : A.desktop.x),
                  y:
                    h.position.y -
                    (m ? A.mobile.y : g.value ? A.tablet.y : A.desktop.y),
                  z: h.position.z,
                  overwrite: "auto",
                  onUpdate: () => {
                    s.update();
                  },
                },
                0,
              )
              .to(
                n.position,
                {
                  x:
                    h.position.x -
                    (m ? T.mobile.x : g.value ? T.tablet.x : T.desktop.x),
                  y:
                    h.position.y -
                    (m ? T.mobile.y : g.value ? T.tablet.y : T.desktop.y),
                  z:
                    h.position.z +
                    (m ? T.mobile.z : g.value ? T.tablet.z : T.desktop.z),
                  overwrite: "auto",
                  onComplete: () => {
                    (s.update(), requestAnimationFrame(() => r.resume()));
                  },
                },
                0,
              ));
        }));
    }
    function S(M = !0) {
      (M && (h.visible = !0),
        v.add(() => {
          (P.killTweensOf(p.opacity),
            P.to(p.opacity, {
              duration: 0.6,
              value: M ? 1 : 0,
              ease: "power2.inOut",
              onComplete: () => {
                M || (h.visible = !1);
              },
            }));
        }));
    }
    let y;
    v.add(() => {
      ((y = P.timeline({ paused: !0 })),
        y
          .to(
            f.uniforms.thicknessAttenuation,
            {
              value: 3,
              ease: "power1.inOut",
              duration: 1,
              repeat: -1,
              yoyo: !0,
            },
            0,
          )
          .to(
            f.uniforms.thicknessScale,
            {
              value: 10,
              ease: "power1.inOut",
              duration: 1,
              repeat: -1,
              yoyo: !0,
            },
            0,
          ));
    });
    function B(M = !0) {
      M ? y.play() : y.pause();
    }
    return {
      cameraToCell: _,
      cameraToCellStory: k,
      showCell: S,
      animateMaterial: B,
      cleanup: () => v.revert(),
    };
  },
  Dd = async (e, t, i, s) => {
    const r = (await t.loadAsync("/models/thyroid.glb")).scene,
      a = s.imgTexture,
      o = s.thicknessTexture,
      l = Ht,
      d = Rt.clone(l.uniforms);
    ((d.map.value = a),
      (d.diffuse.value = new me(4.3, -2.49, 1.04)),
      (d.shininess.value = 500),
      (d.thicknessMap.value = o),
      (d.thicknessColor.value = new me(0.7, 0.54, 0.93)),
      (d.thicknessDistortion.value = 0.1),
      (d.thicknessAmbient.value = 0.4),
      (d.thicknessAttenuation.value = 0.8),
      (d.thicknessPower.value = 2),
      (d.thicknessScale.value = 16),
      (d.ior.value = 1.5),
      (d.reflectivity.value = 1),
      (d.refractionRatio.value = 0.98),
      (d.specular.value = new Re(
        0.005605391621829108,
        0.005605391621829108,
        0.005605391621829108,
      )),
      (d.opacity.value = 0));
    const u = new _e({
      uniforms: d,
      vertexShader: l.vertexShader,
      fragmentShader: l.fragmentShader,
      lights: !0,
      transparent: !1,
    });
    u.alphaHash = !0;
    const c = r.children[0];
    ((c.visible = !1), (c.material = u), e.add(r), Gt(u, i, "Thyroid"));
    const p = P.context(() => {});
    function f(F = !0) {
      (F && (c.visible = !0),
        p.add(() => {
          (P.killTweensOf(d.opacity),
            P.to(d.opacity, {
              duration: 0.6,
              value: F ? 1 : 0,
              ease: "power2.inOut",
              onComplete: () => {
                F || (c.visible = !1);
              },
            }));
        }));
    }
    function h(F = !0) {}
    return { showThyroid: f, animateMaterial: h };
  },
  Md = async (e, t, i) => {
    const n = (await t.loadAsync("/models/newBG.glb")).scene,
      r = new Er(),
      a = [
        "/texture/mats/mat.png",
        "/texture/mats/mat2.png",
        "/texture/mats/mat3.png",
        "/texture/mats/mat4.png",
        "/texture/mats/mat5.png",
        "/texture/mats/mat6.png",
        "/texture/mats/mat7.png",
        "/texture/mats/mat8.png",
        "/texture/mats/mat9.png",
        "/texture/mats/mat10.png",
        "/texture/mats/mat11.png",
        "/texture/mats/mat12.png",
        "/texture/mats/mat13.png",
        "/texture/mats/mat14.png",
        "/texture/mats/mat15.png",
        "/texture/mats/mat16.png",
        "/texture/mats/mat17.png",
        "/texture/mats/mat18.png",
        "/texture/mats/mat19.png",
        "/texture/mats/mat20.png",
      ],
      o = await r.loadAsync("/texture/mats/mat20.png");
    await r.loadAsync("/texture/mats/invert.jpg");
    const l = new Zo({ matcap: o, transparent: !0, opacity: 0.3 });
    (e.add(n),
      n.traverse((c) => {
        c.isMesh &&
          ((c.material = l),
          P.to(c.position, {
            y: c.position.y + P.utils.random(-2, 2),
            x: c.position.x + P.utils.random(-2, 2),
            z: c.position.z + P.utils.random(-2, 2),
            duration: P.utils.random(20, 60),
            repeat: -1,
            yoyo: !0,
            ease: "none",
          }));
      }));
    const d = { matcap: "/texture/mats/mat20.png" },
      u = i.addFolder("Background sphere");
    (u.close,
      u
        .add(d, "matcap", a)
        .name("BG Matcap")
        .onChange(async (c) => {
          const p = await r.loadAsync(c);
          ((l.matcap = p), (l.needsUpdate = !0));
        }));
  };
/**
 * postprocessing v6.37.7 build Mon Aug 04 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */ var Ln = 1 / 1e3,
  kd = 1e3,
  Bd = class {
    constructor() {
      ((this.startTime = performance.now()),
        (this.previousTime = 0),
        (this.currentTime = 0),
        (this._delta = 0),
        (this._elapsed = 0),
        (this._fixedDelta = 1e3 / 60),
        (this.timescale = 1),
        (this.useFixedDelta = !1),
        (this._autoReset = !1));
    }
    get autoReset() {
      return this._autoReset;
    }
    set autoReset(e) {
      typeof document < "u" &&
        document.hidden !== void 0 &&
        (e
          ? document.addEventListener("visibilitychange", this)
          : document.removeEventListener("visibilitychange", this),
        (this._autoReset = e));
    }
    get delta() {
      return this._delta * Ln;
    }
    get fixedDelta() {
      return this._fixedDelta * Ln;
    }
    set fixedDelta(e) {
      this._fixedDelta = e * kd;
    }
    get elapsed() {
      return this._elapsed * Ln;
    }
    update(e) {
      (this.useFixedDelta
        ? (this._delta = this.fixedDelta)
        : ((this.previousTime = this.currentTime),
          (this.currentTime =
            (e !== void 0 ? e : performance.now()) - this.startTime),
          (this._delta = this.currentTime - this.previousTime)),
        (this._delta *= this.timescale),
        (this._elapsed += this._delta));
    }
    reset() {
      ((this._delta = 0),
        (this._elapsed = 0),
        (this.currentTime = performance.now() - this.startTime));
    }
    getDelta() {
      return this.delta;
    }
    getElapsed() {
      return this.elapsed;
    }
    handleEvent(e) {
      document.hidden ||
        (this.currentTime = performance.now() - this.startTime);
    }
    dispose() {
      this.autoReset = !1;
    }
  },
  Pd = (() => {
    const e = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]),
      t = new Float32Array([0, 0, 2, 0, 0, 2]),
      i = new ll();
    return (
      i.setAttribute("position", new Gr(e, 3)),
      i.setAttribute("uv", new Gr(t, 2)),
      i
    );
  })(),
  bt = class or {
    static get fullscreenGeometry() {
      return Pd;
    }
    constructor(t = "Pass", i = new ir(), s = new rl()) {
      ((this.name = t),
        (this.renderer = null),
        (this.scene = i),
        (this.camera = s),
        (this.screen = null),
        (this.rtt = !0),
        (this.needsSwap = !0),
        (this.needsDepthTexture = !1),
        (this.enabled = !0));
    }
    get renderToScreen() {
      return !this.rtt;
    }
    set renderToScreen(t) {
      if (this.rtt === t) {
        const i = this.fullscreenMaterial;
        (i !== null && (i.needsUpdate = !0), (this.rtt = !t));
      }
    }
    set mainScene(t) {}
    set mainCamera(t) {}
    setRenderer(t) {
      this.renderer = t;
    }
    isEnabled() {
      return this.enabled;
    }
    setEnabled(t) {
      this.enabled = t;
    }
    get fullscreenMaterial() {
      return this.screen !== null ? this.screen.material : null;
    }
    set fullscreenMaterial(t) {
      let i = this.screen;
      i !== null
        ? (i.material = t)
        : ((i = new un(or.fullscreenGeometry, t)),
          (i.frustumCulled = !1),
          this.scene === null && (this.scene = new ir()),
          this.scene.add(i),
          (this.screen = i));
    }
    getFullscreenMaterial() {
      return this.fullscreenMaterial;
    }
    setFullscreenMaterial(t) {
      this.fullscreenMaterial = t;
    }
    getDepthTexture() {
      return null;
    }
    setDepthTexture(t, i = wi) {}
    render(t, i, s, n, r) {
      throw new Error("Render method not implemented!");
    }
    setSize(t, i) {}
    initialize(t, i, s) {}
    dispose() {
      for (const t of Object.keys(this)) {
        const i = this[t];
        (i instanceof Bt ||
          i instanceof Ga ||
          i instanceof Fn ||
          i instanceof or) &&
          this[t].dispose();
      }
      this.fullscreenMaterial !== null && this.fullscreenMaterial.dispose();
    }
  },
  Id = class extends bt {
    constructor() {
      (super("ClearMaskPass", null, null), (this.needsSwap = !1));
    }
    render(e, t, i, s, n) {
      const r = e.state.buffers.stencil;
      (r.setLocked(!1), r.setTest(!1));
    }
  },
  Ld = `#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,
  Dn =
    "varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",
  Na = class extends _e {
    constructor() {
      super({
        name: "CopyMaterial",
        uniforms: { inputBuffer: new j(null), opacity: new j(1) },
        blending: ai,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: Ld,
        vertexShader: Dn,
      });
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    setInputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    getOpacity(e) {
      return this.uniforms.opacity.value;
    }
    setOpacity(e) {
      this.uniforms.opacity.value = e;
    }
  },
  Ua = class extends bt {
    constructor(e, t = !0) {
      (super("CopyPass"),
        (this.fullscreenMaterial = new Na()),
        (this.needsSwap = !1),
        (this.renderTarget = e),
        e === void 0 &&
          ((this.renderTarget = new Bt(1, 1, {
            minFilter: fs,
            magFilter: fs,
            stencilBuffer: !1,
            depthBuffer: !1,
          })),
          (this.renderTarget.texture.name = "CopyPass.Target")),
        (this.autoResize = t));
    }
    get resize() {
      return this.autoResize;
    }
    set resize(e) {
      this.autoResize = e;
    }
    get texture() {
      return this.renderTarget.texture;
    }
    getTexture() {
      return this.renderTarget.texture;
    }
    setAutoResizeEnabled(e) {
      this.autoResize = e;
    }
    render(e, t, i, s, n) {
      ((this.fullscreenMaterial.inputBuffer = t.texture),
        e.setRenderTarget(this.renderToScreen ? null : this.renderTarget),
        e.render(this.scene, this.camera));
    }
    setSize(e, t) {
      this.autoResize && this.renderTarget.setSize(e, t);
    }
    initialize(e, t, i) {
      i !== void 0 &&
        ((this.renderTarget.texture.type = i),
        i !== Ii
          ? (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1")
          : e !== null &&
            e.outputColorSpace === Ue &&
            (this.renderTarget.texture.colorSpace = Ue));
    }
  },
  Wr = new Re(),
  Mn = class extends bt {
    constructor(e = !0, t = !0, i = !1) {
      (super("ClearPass", null, null),
        (this.needsSwap = !1),
        (this.color = e),
        (this.depth = t),
        (this.stencil = i),
        (this.overrideClearColor = null),
        (this.overrideClearAlpha = -1));
    }
    setClearFlags(e, t, i) {
      ((this.color = e), (this.depth = t), (this.stencil = i));
    }
    getOverrideClearColor() {
      return this.overrideClearColor;
    }
    setOverrideClearColor(e) {
      this.overrideClearColor = e;
    }
    getOverrideClearAlpha() {
      return this.overrideClearAlpha;
    }
    setOverrideClearAlpha(e) {
      this.overrideClearAlpha = e;
    }
    render(e, t, i, s, n) {
      const r = this.overrideClearColor,
        a = this.overrideClearAlpha,
        o = e.getClearAlpha(),
        l = r !== null,
        d = a >= 0;
      (l
        ? (e.getClearColor(Wr), e.setClearColor(r, d ? a : o))
        : d && e.setClearAlpha(a),
        e.setRenderTarget(this.renderToScreen ? null : t),
        e.clear(this.color, this.depth, this.stencil),
        l ? e.setClearColor(Wr, o) : d && e.setClearAlpha(o));
    }
  },
  Od = class extends bt {
    constructor(e, t) {
      (super("MaskPass", e, t),
        (this.needsSwap = !1),
        (this.clearPass = new Mn(!1, !1, !0)),
        (this.inverse = !1));
    }
    set mainScene(e) {
      this.scene = e;
    }
    set mainCamera(e) {
      this.camera = e;
    }
    get inverted() {
      return this.inverse;
    }
    set inverted(e) {
      this.inverse = e;
    }
    get clear() {
      return this.clearPass.enabled;
    }
    set clear(e) {
      this.clearPass.enabled = e;
    }
    getClearPass() {
      return this.clearPass;
    }
    isInverted() {
      return this.inverted;
    }
    setInverted(e) {
      this.inverted = e;
    }
    render(e, t, i, s, n) {
      const r = e.getContext(),
        a = e.state.buffers,
        o = this.scene,
        l = this.camera,
        d = this.clearPass,
        u = this.inverted ? 0 : 1,
        c = 1 - u;
      (a.color.setMask(!1),
        a.depth.setMask(!1),
        a.color.setLocked(!0),
        a.depth.setLocked(!0),
        a.stencil.setTest(!0),
        a.stencil.setOp(r.REPLACE, r.REPLACE, r.REPLACE),
        a.stencil.setFunc(r.ALWAYS, u, 4294967295),
        a.stencil.setClear(c),
        a.stencil.setLocked(!0),
        this.clearPass.enabled &&
          (this.renderToScreen
            ? d.render(e, null)
            : (d.render(e, t), d.render(e, i))),
        this.renderToScreen
          ? (e.setRenderTarget(null), e.render(o, l))
          : (e.setRenderTarget(t),
            e.render(o, l),
            e.setRenderTarget(i),
            e.render(o, l)),
        a.color.setLocked(!1),
        a.depth.setLocked(!1),
        a.stencil.setLocked(!1),
        a.stencil.setFunc(r.EQUAL, 1, 4294967295),
        a.stencil.setOp(r.KEEP, r.KEEP, r.KEEP),
        a.stencil.setLocked(!0));
    }
  },
  zd = class {
    constructor(
      e = null,
      {
        depthBuffer: t = !0,
        stencilBuffer: i = !1,
        multisampling: s = 0,
        frameBufferType: n,
      } = {},
    ) {
      ((this.renderer = null),
        (this.inputBuffer = this.createBuffer(t, i, n, s)),
        (this.outputBuffer = this.inputBuffer.clone()),
        (this.copyPass = new Ua()),
        (this.depthTexture = null),
        (this.passes = []),
        (this.timer = new Bd()),
        (this.autoRenderToScreen = !0),
        this.setRenderer(e));
    }
    get multisampling() {
      return this.inputBuffer.samples || 0;
    }
    set multisampling(e) {
      const t = this.inputBuffer,
        i = this.multisampling;
      i > 0 && e > 0
        ? ((this.inputBuffer.samples = e),
          (this.outputBuffer.samples = e),
          this.inputBuffer.dispose(),
          this.outputBuffer.dispose())
        : i !== e &&
          (this.inputBuffer.dispose(),
          this.outputBuffer.dispose(),
          (this.inputBuffer = this.createBuffer(
            t.depthBuffer,
            t.stencilBuffer,
            t.texture.type,
            e,
          )),
          (this.inputBuffer.depthTexture = this.depthTexture),
          (this.outputBuffer = this.inputBuffer.clone()));
    }
    getTimer() {
      return this.timer;
    }
    getRenderer() {
      return this.renderer;
    }
    setRenderer(e) {
      if (((this.renderer = e), e !== null)) {
        const t = e.getSize(new ze()),
          i = e.getContext().getContextAttributes().alpha,
          s = this.inputBuffer.texture.type;
        (s === Ii &&
          e.outputColorSpace === Ue &&
          ((this.inputBuffer.texture.colorSpace = Ue),
          (this.outputBuffer.texture.colorSpace = Ue),
          this.inputBuffer.dispose(),
          this.outputBuffer.dispose()),
          (e.autoClear = !1),
          this.setSize(t.width, t.height));
        for (const n of this.passes) n.initialize(e, i, s);
      }
    }
    replaceRenderer(e, t = !0) {
      const i = this.renderer,
        s = i.domElement.parentNode;
      return (
        this.setRenderer(e),
        t &&
          s !== null &&
          (s.removeChild(i.domElement), s.appendChild(e.domElement)),
        i
      );
    }
    createDepthTexture() {
      const e = (this.depthTexture = new $o());
      return (
        (this.inputBuffer.depthTexture = e),
        this.inputBuffer.dispose(),
        this.inputBuffer.stencilBuffer
          ? ((e.format = el), (e.type = tl))
          : (e.type = il),
        e
      );
    }
    deleteDepthTexture() {
      if (this.depthTexture !== null) {
        (this.depthTexture.dispose(),
          (this.depthTexture = null),
          (this.inputBuffer.depthTexture = null),
          this.inputBuffer.dispose());
        for (const e of this.passes) e.setDepthTexture(null);
      }
    }
    createBuffer(e, t, i, s) {
      const n = this.renderer,
        r = n === null ? new ze() : n.getDrawingBufferSize(new ze()),
        a = {
          minFilter: fs,
          magFilter: fs,
          stencilBuffer: t,
          depthBuffer: e,
          type: i,
        },
        o = new Bt(r.width, r.height, a);
      return (
        s > 0 && ((o.ignoreDepthForMultisampleCopy = !1), (o.samples = s)),
        i === Ii &&
          n !== null &&
          n.outputColorSpace === Ue &&
          (o.texture.colorSpace = Ue),
        (o.texture.name = "EffectComposer.Buffer"),
        (o.texture.generateMipmaps = !1),
        o
      );
    }
    setMainScene(e) {
      for (const t of this.passes) t.mainScene = e;
    }
    setMainCamera(e) {
      for (const t of this.passes) t.mainCamera = e;
    }
    addPass(e, t) {
      const i = this.passes,
        s = this.renderer,
        n = s.getDrawingBufferSize(new ze()),
        r = s.getContext().getContextAttributes().alpha,
        a = this.inputBuffer.texture.type;
      if (
        (e.setRenderer(s),
        e.setSize(n.width, n.height),
        e.initialize(s, r, a),
        this.autoRenderToScreen &&
          (i.length > 0 && (i[i.length - 1].renderToScreen = !1),
          e.renderToScreen && (this.autoRenderToScreen = !1)),
        t !== void 0 ? i.splice(t, 0, e) : i.push(e),
        this.autoRenderToScreen && (i[i.length - 1].renderToScreen = !0),
        e.needsDepthTexture || this.depthTexture !== null)
      )
        if (this.depthTexture === null) {
          const o = this.createDepthTexture();
          for (e of i) e.setDepthTexture(o);
        } else e.setDepthTexture(this.depthTexture);
    }
    removePass(e) {
      const t = this.passes,
        i = t.indexOf(e);
      if (i !== -1 && t.splice(i, 1).length > 0) {
        if (this.depthTexture !== null) {
          const r = (o, l) => o || l.needsDepthTexture;
          t.reduce(r, !1) ||
            (e.getDepthTexture() === this.depthTexture &&
              e.setDepthTexture(null),
            this.deleteDepthTexture());
        }
        this.autoRenderToScreen &&
          i === t.length &&
          ((e.renderToScreen = !1),
          t.length > 0 && (t[t.length - 1].renderToScreen = !0));
      }
    }
    removeAllPasses() {
      const e = this.passes;
      (this.deleteDepthTexture(),
        e.length > 0 &&
          (this.autoRenderToScreen && (e[e.length - 1].renderToScreen = !1),
          (this.passes = [])));
    }
    render(e) {
      const t = this.renderer,
        i = this.copyPass;
      let s = this.inputBuffer,
        n = this.outputBuffer,
        r = !1,
        a,
        o,
        l;
      e === void 0 && (this.timer.update(), (e = this.timer.getDelta()));
      for (const d of this.passes)
        d.enabled &&
          (d.render(t, s, n, e, r),
          d.needsSwap &&
            (r &&
              ((i.renderToScreen = d.renderToScreen),
              (a = t.getContext()),
              (o = t.state.buffers.stencil),
              o.setFunc(a.NOTEQUAL, 1, 4294967295),
              i.render(t, s, n, e, r),
              o.setFunc(a.EQUAL, 1, 4294967295)),
            (l = s),
            (s = n),
            (n = l)),
          d instanceof Od ? (r = !0) : d instanceof Id && (r = !1));
    }
    setSize(e, t, i) {
      const s = this.renderer,
        n = s.getSize(new ze());
      ((e === void 0 || t === void 0) && ((e = n.width), (t = n.height)),
        (n.width !== e || n.height !== t) && s.setSize(e, t, i));
      const r = s.getDrawingBufferSize(new ze());
      (this.inputBuffer.setSize(r.width, r.height),
        this.outputBuffer.setSize(r.width, r.height));
      for (const a of this.passes) a.setSize(r.width, r.height);
    }
    reset() {
      (this.dispose(), (this.autoRenderToScreen = !0));
    }
    dispose() {
      for (const e of this.passes) e.dispose();
      ((this.passes = []),
        this.inputBuffer !== null && this.inputBuffer.dispose(),
        this.outputBuffer !== null && this.outputBuffer.dispose(),
        this.deleteDepthTexture(),
        this.copyPass.dispose(),
        this.timer.dispose(),
        bt.fullscreenGeometry.dispose());
    }
  },
  ii = { NONE: 0, DEPTH: 1, CONVOLUTION: 2 },
  fe = {
    FRAGMENT_HEAD: "FRAGMENT_HEAD",
    FRAGMENT_MAIN_UV: "FRAGMENT_MAIN_UV",
    FRAGMENT_MAIN_IMAGE: "FRAGMENT_MAIN_IMAGE",
    VERTEX_HEAD: "VERTEX_HEAD",
    VERTEX_MAIN_SUPPORT: "VERTEX_MAIN_SUPPORT",
  },
  Rd = class {
    constructor() {
      ((this.shaderParts = new Map([
        [fe.FRAGMENT_HEAD, null],
        [fe.FRAGMENT_MAIN_UV, null],
        [fe.FRAGMENT_MAIN_IMAGE, null],
        [fe.VERTEX_HEAD, null],
        [fe.VERTEX_MAIN_SUPPORT, null],
      ])),
        (this.defines = new Map()),
        (this.uniforms = new Map()),
        (this.blendModes = new Map()),
        (this.extensions = new Set()),
        (this.attributes = ii.NONE),
        (this.varyings = new Set()),
        (this.uvTransformation = !1),
        (this.readDepth = !1),
        (this.colorSpace = Ra));
    }
  },
  On = !1,
  Xr = class {
    constructor(e = null) {
      ((this.originalMaterials = new Map()),
        (this.material = null),
        (this.materials = null),
        (this.materialsBackSide = null),
        (this.materialsDoubleSide = null),
        (this.materialsFlatShaded = null),
        (this.materialsFlatShadedBackSide = null),
        (this.materialsFlatShadedDoubleSide = null),
        this.setMaterial(e),
        (this.meshCount = 0),
        (this.replaceMaterial = (t) => {
          if (t.isMesh) {
            let i;
            if (t.material.flatShading)
              switch (t.material.side) {
                case Xs:
                  i = this.materialsFlatShadedDoubleSide;
                  break;
                case Ws:
                  i = this.materialsFlatShadedBackSide;
                  break;
                default:
                  i = this.materialsFlatShaded;
                  break;
              }
            else
              switch (t.material.side) {
                case Xs:
                  i = this.materialsDoubleSide;
                  break;
                case Ws:
                  i = this.materialsBackSide;
                  break;
                default:
                  i = this.materials;
                  break;
              }
            (this.originalMaterials.set(t, t.material),
              t.isSkinnedMesh
                ? (t.material = i[2])
                : t.isInstancedMesh
                  ? (t.material = i[1])
                  : (t.material = i[0]),
              ++this.meshCount);
          }
        }));
    }
    cloneMaterial(e) {
      if (!(e instanceof _e)) return e.clone();
      const t = e.uniforms,
        i = new Map();
      for (const n in t) {
        const r = t[n].value;
        r.isRenderTargetTexture && ((t[n].value = null), i.set(n, r));
      }
      const s = e.clone();
      for (const n of i)
        ((t[n[0]].value = n[1]), (s.uniforms[n[0]].value = n[1]));
      return s;
    }
    setMaterial(e) {
      if ((this.disposeMaterials(), (this.material = e), e !== null)) {
        const t = (this.materials = [
          this.cloneMaterial(e),
          this.cloneMaterial(e),
          this.cloneMaterial(e),
        ]);
        for (const i of t)
          ((i.uniforms = Object.assign({}, e.uniforms)), (i.side = al));
        ((t[2].skinning = !0),
          (this.materialsBackSide = t.map((i) => {
            const s = this.cloneMaterial(i);
            return (
              (s.uniforms = Object.assign({}, e.uniforms)),
              (s.side = Ws),
              s
            );
          })),
          (this.materialsDoubleSide = t.map((i) => {
            const s = this.cloneMaterial(i);
            return (
              (s.uniforms = Object.assign({}, e.uniforms)),
              (s.side = Xs),
              s
            );
          })),
          (this.materialsFlatShaded = t.map((i) => {
            const s = this.cloneMaterial(i);
            return (
              (s.uniforms = Object.assign({}, e.uniforms)),
              (s.flatShading = !0),
              s
            );
          })),
          (this.materialsFlatShadedBackSide = t.map((i) => {
            const s = this.cloneMaterial(i);
            return (
              (s.uniforms = Object.assign({}, e.uniforms)),
              (s.flatShading = !0),
              (s.side = Ws),
              s
            );
          })),
          (this.materialsFlatShadedDoubleSide = t.map((i) => {
            const s = this.cloneMaterial(i);
            return (
              (s.uniforms = Object.assign({}, e.uniforms)),
              (s.flatShading = !0),
              (s.side = Xs),
              s
            );
          })));
      }
    }
    render(e, t, i) {
      const s = e.shadowMap.enabled;
      if (((e.shadowMap.enabled = !1), On)) {
        const n = this.originalMaterials;
        ((this.meshCount = 0),
          t.traverse(this.replaceMaterial),
          e.render(t, i));
        for (const r of n) r[0].material = r[1];
        this.meshCount !== n.size && n.clear();
      } else {
        const n = t.overrideMaterial;
        ((t.overrideMaterial = this.material),
          e.render(t, i),
          (t.overrideMaterial = n));
      }
      e.shadowMap.enabled = s;
    }
    disposeMaterials() {
      if (this.material !== null) {
        const e = this.materials
          .concat(this.materialsBackSide)
          .concat(this.materialsDoubleSide)
          .concat(this.materialsFlatShaded)
          .concat(this.materialsFlatShadedBackSide)
          .concat(this.materialsFlatShadedDoubleSide);
        for (const t of e) t.dispose();
      }
    }
    dispose() {
      (this.originalMaterials.clear(), this.disposeMaterials());
    }
    static get workaroundEnabled() {
      return On;
    }
    static set workaroundEnabled(e) {
      On = e;
    }
  },
  Si = -1,
  kt = class extends _r {
    constructor(e, t = Si, i = Si, s = 1) {
      (super(),
        (this.resizable = e),
        (this.baseSize = new ze(1, 1)),
        (this.preferredSize = new ze(t, i)),
        (this.target = this.preferredSize),
        (this.s = s),
        (this.effectiveSize = new ze()),
        this.addEventListener("change", () => this.updateEffectiveSize()),
        this.updateEffectiveSize());
    }
    updateEffectiveSize() {
      const e = this.baseSize,
        t = this.preferredSize,
        i = this.effectiveSize,
        s = this.scale;
      (t.width !== Si
        ? (i.width = t.width)
        : t.height !== Si
          ? (i.width = Math.round(t.height * (e.width / Math.max(e.height, 1))))
          : (i.width = Math.round(e.width * s)),
        t.height !== Si
          ? (i.height = t.height)
          : t.width !== Si
            ? (i.height = Math.round(
                t.width / Math.max(e.width / Math.max(e.height, 1), 1),
              ))
            : (i.height = Math.round(e.height * s)));
    }
    get width() {
      return this.effectiveSize.width;
    }
    set width(e) {
      this.preferredWidth = e;
    }
    get height() {
      return this.effectiveSize.height;
    }
    set height(e) {
      this.preferredHeight = e;
    }
    getWidth() {
      return this.width;
    }
    getHeight() {
      return this.height;
    }
    get scale() {
      return this.s;
    }
    set scale(e) {
      this.s !== e &&
        ((this.s = e),
        this.preferredSize.setScalar(Si),
        this.dispatchEvent({ type: "change" }),
        this.resizable.setSize(this.baseSize.width, this.baseSize.height));
    }
    getScale() {
      return this.scale;
    }
    setScale(e) {
      this.scale = e;
    }
    get baseWidth() {
      return this.baseSize.width;
    }
    set baseWidth(e) {
      this.baseSize.width !== e &&
        ((this.baseSize.width = e),
        this.dispatchEvent({ type: "change" }),
        this.resizable.setSize(this.baseSize.width, this.baseSize.height));
    }
    getBaseWidth() {
      return this.baseWidth;
    }
    setBaseWidth(e) {
      this.baseWidth = e;
    }
    get baseHeight() {
      return this.baseSize.height;
    }
    set baseHeight(e) {
      this.baseSize.height !== e &&
        ((this.baseSize.height = e),
        this.dispatchEvent({ type: "change" }),
        this.resizable.setSize(this.baseSize.width, this.baseSize.height));
    }
    getBaseHeight() {
      return this.baseHeight;
    }
    setBaseHeight(e) {
      this.baseHeight = e;
    }
    setBaseSize(e, t) {
      (this.baseSize.width !== e || this.baseSize.height !== t) &&
        (this.baseSize.set(e, t),
        this.dispatchEvent({ type: "change" }),
        this.resizable.setSize(this.baseSize.width, this.baseSize.height));
    }
    get preferredWidth() {
      return this.preferredSize.width;
    }
    set preferredWidth(e) {
      this.preferredSize.width !== e &&
        ((this.preferredSize.width = e),
        this.dispatchEvent({ type: "change" }),
        this.resizable.setSize(this.baseSize.width, this.baseSize.height));
    }
    getPreferredWidth() {
      return this.preferredWidth;
    }
    setPreferredWidth(e) {
      this.preferredWidth = e;
    }
    get preferredHeight() {
      return this.preferredSize.height;
    }
    set preferredHeight(e) {
      this.preferredSize.height !== e &&
        ((this.preferredSize.height = e),
        this.dispatchEvent({ type: "change" }),
        this.resizable.setSize(this.baseSize.width, this.baseSize.height));
    }
    getPreferredHeight() {
      return this.preferredHeight;
    }
    setPreferredHeight(e) {
      this.preferredHeight = e;
    }
    setPreferredSize(e, t) {
      (this.preferredSize.width !== e || this.preferredSize.height !== t) &&
        (this.preferredSize.set(e, t),
        this.dispatchEvent({ type: "change" }),
        this.resizable.setSize(this.baseSize.width, this.baseSize.height));
    }
    copy(e) {
      ((this.s = e.scale),
        this.baseSize.set(e.baseWidth, e.baseHeight),
        this.preferredSize.set(e.preferredWidth, e.preferredHeight),
        this.dispatchEvent({ type: "change" }),
        this.resizable.setSize(this.baseSize.width, this.baseSize.height));
    }
    static get AUTO_SIZE() {
      return Si;
    }
  },
  Hd = class {
    constructor(e = 0) {
      this.nextId = e;
    }
    getNextId() {
      return this.nextId++;
    }
    reset(e = 0) {
      return ((this.nextId = e), this);
    }
  },
  zn = new Hd(2),
  Gd = class extends Set {
    constructor(e, t = zn.getNextId()) {
      (super(),
        (this.exclusive = !1),
        (this._layer = t),
        (this._layer < 1 || this._layer > 31) &&
          (console.warn("Layer out of range, resetting to 2"),
          zn.reset(2),
          (this._layer = zn.getNextId())),
        e !== void 0 && this.set(e));
    }
    get layer() {
      return this._layer;
    }
    set layer(e) {
      const t = this._layer;
      for (const i of this) (i.layers.disable(t), i.layers.enable(e));
      this._layer = e;
    }
    getLayer() {
      return this.layer;
    }
    setLayer(e) {
      this.layer = e;
    }
    isExclusive() {
      return this.exclusive;
    }
    setExclusive(e) {
      this.exclusive = e;
    }
    clear() {
      const e = this.layer;
      for (const t of this) t.layers.disable(e);
      return super.clear();
    }
    set(e) {
      this.clear();
      for (const t of e) this.add(t);
      return this;
    }
    indexOf(e) {
      return this.has(e) ? 0 : -1;
    }
    add(e) {
      return (
        this.exclusive ? e.layers.set(this.layer) : e.layers.enable(this.layer),
        super.add(e)
      );
    }
    delete(e) {
      return (this.has(e) && e.layers.disable(this.layer), super.delete(e));
    }
    toggle(e) {
      let t;
      return (
        this.has(e) ? (this.delete(e), (t = !1)) : (this.add(e), (t = !0)),
        t
      );
    }
    setVisible(e) {
      for (const t of this) e ? t.layers.enable(0) : t.layers.disable(0);
      return this;
    }
  },
  Z = {
    SKIP: 9,
    SET: 30,
    ADD: 0,
    ALPHA: 1,
    AVERAGE: 2,
    COLOR: 3,
    COLOR_BURN: 4,
    COLOR_DODGE: 5,
    DARKEN: 6,
    DIFFERENCE: 7,
    DIVIDE: 8,
    DST: 9,
    EXCLUSION: 10,
    HARD_LIGHT: 11,
    HARD_MIX: 12,
    HUE: 13,
    INVERT: 14,
    INVERT_RGB: 15,
    LIGHTEN: 16,
    LINEAR_BURN: 17,
    LINEAR_DODGE: 18,
    LINEAR_LIGHT: 19,
    LUMINOSITY: 20,
    MULTIPLY: 21,
    NEGATION: 22,
    NORMAL: 23,
    OVERLAY: 24,
    PIN_LIGHT: 25,
    REFLECT: 26,
    SATURATION: 27,
    SCREEN: 28,
    SOFT_LIGHT: 29,
    SRC: 30,
    SUBTRACT: 31,
    VIVID_LIGHT: 32,
  },
  Nd =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb,y.a),opacity);}",
  Ud =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,y.a*opacity);}",
  Vd =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb)*0.5,y.a),opacity);}",
  jd =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.xy,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",
  Qd =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=mix(step(0.0,b)*(1.0-min(vec3(1.0),(1.0-a)/b)),vec3(1.0),step(1.0,a));return mix(x,vec4(z,y.a),opacity);}",
  Yd =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb,b=y.rgb;vec3 z=step(0.0,a)*mix(min(vec3(1.0),a/max(1.0-b,1e-9)),vec3(1.0),step(1.0,b));return mix(x,vec4(z,y.a),opacity);}",
  Wd =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb,y.rgb),y.a),opacity);}",
  Xd =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(abs(x.rgb-y.rgb),y.a),opacity);}",
  Kd =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb/max(y.rgb,1e-12),y.a),opacity);}",
  qd =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4((x.rgb+y.rgb-2.0*x.rgb*y.rgb),y.a),opacity);}",
  Jd =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=min(x.rgb,1.0);vec3 b=min(y.rgb,1.0);vec3 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,b));return mix(x,vec4(z,y.a),opacity);}",
  Zd =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(step(1.0,x.rgb+y.rgb),y.a),opacity);}",
  $d =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.x,xHSL.yz));return mix(x,vec4(z,y.a),opacity);}",
  ec =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-y.rgb,y.a),opacity);}",
  tc =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(y.rgb*(1.0-x.rgb),y.a),opacity);}",
  ic =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb,y.rgb),y.a),opacity);}",
  sc =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",
  nc =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(min(x.rgb+y.rgb,1.0),y.a),opacity);}",
  rc =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(clamp(2.0*y.rgb+x.rgb-1.0,0.0,1.0),y.a),opacity);}",
  ac =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.xy,yHSL.z));return mix(x,vec4(z,y.a),opacity);}",
  oc =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb*y.rgb,y.a),opacity);}",
  lc =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(1.0-abs(1.0-x.rgb-y.rgb),y.a),opacity);}",
  dc =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",
  cc =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(2.0*y.rgb*x.rgb,1.0-2.0*(1.0-y.rgb)*(1.0-x.rgb),step(0.5,x.rgb));return mix(x,vec4(z,y.a),opacity);}",
  uc =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 y2=2.0*y.rgb;vec3 z=mix(mix(y2,x.rgb,step(0.5*x.rgb,y.rgb)),max(y2-1.0,vec3(0.0)),step(x.rgb,y2-1.0));return mix(x,vec4(z,y.a),opacity);}",
  pc =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(min(x.rgb*x.rgb/max(1.0-y.rgb,1e-12),1.0),y.rgb,step(1.0,y.rgb));return mix(x,vec4(z,y.a),opacity);}",
  fc =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.x,yHSL.y,xHSL.z));return mix(x,vec4(z,y.a),opacity);}",
  hc =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(x.rgb+y.rgb-min(x.rgb*y.rgb,1.0),y.a),opacity);}",
  gc =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 a=x.rgb;vec3 b=y.rgb;vec3 y2=2.0*b;vec3 w=step(0.5,b);vec3 c=a-(1.0-y2)*a*(1.0-a);vec3 d=mix(a+(y2-1.0)*(sqrt(a)-a),a+(y2-1.0)*a*((16.0*a-12.0)*a+3.0),w*(1.0-step(0.25,a)));vec3 z=mix(c,d,w);return mix(x,vec4(z,y.a),opacity);}",
  mc =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",
  vc =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,vec4(max(x.rgb+y.rgb-1.0,0.0),y.a),opacity);}",
  xc =
    "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 z=mix(max(1.0-min((1.0-x.rgb)/(2.0*y.rgb),1.0),0.0),min(x.rgb/(2.0*(1.0-y.rgb)),1.0),step(0.5,y.rgb));return mix(x,vec4(z,y.a),opacity);}",
  Fc = new Map([
    [Z.ADD, Nd],
    [Z.ALPHA, Ud],
    [Z.AVERAGE, Vd],
    [Z.COLOR, jd],
    [Z.COLOR_BURN, Qd],
    [Z.COLOR_DODGE, Yd],
    [Z.DARKEN, Wd],
    [Z.DIFFERENCE, Xd],
    [Z.DIVIDE, Kd],
    [Z.DST, null],
    [Z.EXCLUSION, qd],
    [Z.HARD_LIGHT, Jd],
    [Z.HARD_MIX, Zd],
    [Z.HUE, $d],
    [Z.INVERT, ec],
    [Z.INVERT_RGB, tc],
    [Z.LIGHTEN, ic],
    [Z.LINEAR_BURN, sc],
    [Z.LINEAR_DODGE, nc],
    [Z.LINEAR_LIGHT, rc],
    [Z.LUMINOSITY, ac],
    [Z.MULTIPLY, oc],
    [Z.NEGATION, lc],
    [Z.NORMAL, dc],
    [Z.OVERLAY, cc],
    [Z.PIN_LIGHT, uc],
    [Z.REFLECT, pc],
    [Z.SATURATION, fc],
    [Z.SCREEN, hc],
    [Z.SOFT_LIGHT, gc],
    [Z.SRC, mc],
    [Z.SUBTRACT, vc],
    [Z.VIVID_LIGHT, xc],
  ]),
  wc = class extends _r {
    constructor(e, t = 1) {
      (super(), (this._blendFunction = e), (this.opacity = new j(t)));
    }
    getOpacity() {
      return this.opacity.value;
    }
    setOpacity(e) {
      this.opacity.value = e;
    }
    get blendFunction() {
      return this._blendFunction;
    }
    set blendFunction(e) {
      ((this._blendFunction = e), this.dispatchEvent({ type: "change" }));
    }
    getBlendFunction() {
      return this.blendFunction;
    }
    setBlendFunction(e) {
      this.blendFunction = e;
    }
    getShaderCode() {
      return Fc.get(this.blendFunction);
    }
  },
  Sr = class extends _r {
    constructor(
      e,
      t,
      {
        attributes: i = ii.NONE,
        blendFunction: s = Z.NORMAL,
        defines: n = new Map(),
        uniforms: r = new Map(),
        extensions: a = null,
        vertexShader: o = null,
      } = {},
    ) {
      (super(),
        (this.name = e),
        (this.renderer = null),
        (this.attributes = i),
        (this.fragmentShader = t),
        (this.vertexShader = o),
        (this.defines = n),
        (this.uniforms = r),
        (this.extensions = a),
        (this.blendMode = new wc(s)),
        this.blendMode.addEventListener("change", (l) => this.setChanged()),
        (this._inputColorSpace = Ra),
        (this._outputColorSpace = Ha));
    }
    get inputColorSpace() {
      return this._inputColorSpace;
    }
    set inputColorSpace(e) {
      ((this._inputColorSpace = e), this.setChanged());
    }
    get outputColorSpace() {
      return this._outputColorSpace;
    }
    set outputColorSpace(e) {
      ((this._outputColorSpace = e), this.setChanged());
    }
    set mainScene(e) {}
    set mainCamera(e) {}
    getName() {
      return this.name;
    }
    setRenderer(e) {
      this.renderer = e;
    }
    getDefines() {
      return this.defines;
    }
    getUniforms() {
      return this.uniforms;
    }
    getExtensions() {
      return this.extensions;
    }
    getBlendMode() {
      return this.blendMode;
    }
    getAttributes() {
      return this.attributes;
    }
    setAttributes(e) {
      ((this.attributes = e), this.setChanged());
    }
    getFragmentShader() {
      return this.fragmentShader;
    }
    setFragmentShader(e) {
      ((this.fragmentShader = e), this.setChanged());
    }
    getVertexShader() {
      return this.vertexShader;
    }
    setVertexShader(e) {
      ((this.vertexShader = e), this.setChanged());
    }
    setChanged() {
      this.dispatchEvent({ type: "change" });
    }
    setDepthTexture(e, t = wi) {}
    update(e, t, i) {}
    setSize(e, t) {}
    initialize(e, t, i) {}
    dispose() {
      for (const e of Object.keys(this)) {
        const t = this[e];
        (t instanceof Bt ||
          t instanceof Ga ||
          t instanceof Fn ||
          t instanceof bt) &&
          this[e].dispose();
      }
    }
  },
  kn = { MEDIUM: 2, LARGE: 3, HUGE: 5 },
  bc = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,
  yc =
    "uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",
  Ac = [
    new Float32Array([0, 0]),
    new Float32Array([0, 1, 1]),
    new Float32Array([0, 1, 1, 2]),
    new Float32Array([0, 1, 2, 2, 3]),
    new Float32Array([0, 1, 2, 3, 4, 4, 5]),
    new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10]),
  ],
  Ec = class extends _e {
    constructor(e = new Nr()) {
      (super({
        name: "KawaseBlurMaterial",
        uniforms: {
          inputBuffer: new j(null),
          texelSize: new j(new Nr()),
          scale: new j(1),
          kernel: new j(0),
        },
        blending: ai,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: bc,
        vertexShader: yc,
      }),
        this.setTexelSize(e.x, e.y),
        (this.kernelSize = kn.MEDIUM));
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    setInputBuffer(e) {
      this.inputBuffer = e;
    }
    get kernelSequence() {
      return Ac[this.kernelSize];
    }
    get scale() {
      return this.uniforms.scale.value;
    }
    set scale(e) {
      this.uniforms.scale.value = e;
    }
    getScale() {
      return this.uniforms.scale.value;
    }
    setScale(e) {
      this.uniforms.scale.value = e;
    }
    getKernel() {
      return null;
    }
    get kernel() {
      return this.uniforms.kernel.value;
    }
    set kernel(e) {
      this.uniforms.kernel.value = e;
    }
    setKernel(e) {
      this.kernel = e;
    }
    setTexelSize(e, t) {
      this.uniforms.texelSize.value.set(e, t, e * 0.5, t * 0.5);
    }
    setSize(e, t) {
      const i = 1 / e,
        s = 1 / t;
      this.uniforms.texelSize.value.set(i, s, i * 0.5, s * 0.5);
    }
  },
  _c = class extends bt {
    constructor({
      kernelSize: e = kn.MEDIUM,
      resolutionScale: t = 0.5,
      width: i = kt.AUTO_SIZE,
      height: s = kt.AUTO_SIZE,
      resolutionX: n = i,
      resolutionY: r = s,
    } = {}) {
      (super("KawaseBlurPass"),
        (this.renderTargetA = new Bt(1, 1, { depthBuffer: !1 })),
        (this.renderTargetA.texture.name = "Blur.Target.A"),
        (this.renderTargetB = this.renderTargetA.clone()),
        (this.renderTargetB.texture.name = "Blur.Target.B"));
      const a = (this.resolution = new kt(this, n, r, t));
      (a.addEventListener("change", (o) =>
        this.setSize(a.baseWidth, a.baseHeight),
      ),
        (this._blurMaterial = new Ec()),
        (this._blurMaterial.kernelSize = e),
        (this.copyMaterial = new Na()));
    }
    getResolution() {
      return this.resolution;
    }
    get blurMaterial() {
      return this._blurMaterial;
    }
    set blurMaterial(e) {
      this._blurMaterial = e;
    }
    get dithering() {
      return this.copyMaterial.dithering;
    }
    set dithering(e) {
      this.copyMaterial.dithering = e;
    }
    get kernelSize() {
      return this.blurMaterial.kernelSize;
    }
    set kernelSize(e) {
      this.blurMaterial.kernelSize = e;
    }
    get width() {
      return this.resolution.width;
    }
    set width(e) {
      this.resolution.preferredWidth = e;
    }
    get height() {
      return this.resolution.height;
    }
    set height(e) {
      this.resolution.preferredHeight = e;
    }
    get scale() {
      return this.blurMaterial.scale;
    }
    set scale(e) {
      this.blurMaterial.scale = e;
    }
    getScale() {
      return this.blurMaterial.scale;
    }
    setScale(e) {
      this.blurMaterial.scale = e;
    }
    getKernelSize() {
      return this.kernelSize;
    }
    setKernelSize(e) {
      this.kernelSize = e;
    }
    getResolutionScale() {
      return this.resolution.scale;
    }
    setResolutionScale(e) {
      this.resolution.scale = e;
    }
    render(e, t, i, s, n) {
      const r = this.scene,
        a = this.camera,
        o = this.renderTargetA,
        l = this.renderTargetB,
        d = this.blurMaterial,
        u = d.kernelSequence;
      let c = t;
      this.fullscreenMaterial = d;
      for (let p = 0, f = u.length; p < f; ++p) {
        const h = (p & 1) === 0 ? o : l;
        ((d.kernel = u[p]),
          (d.inputBuffer = c.texture),
          e.setRenderTarget(h),
          e.render(r, a),
          (c = h));
      }
      ((this.fullscreenMaterial = this.copyMaterial),
        (this.copyMaterial.inputBuffer = c.texture),
        e.setRenderTarget(this.renderToScreen ? null : i),
        e.render(r, a));
    }
    setSize(e, t) {
      const i = this.resolution;
      i.setBaseSize(e, t);
      const s = i.width,
        n = i.height;
      (this.renderTargetA.setSize(s, n),
        this.renderTargetB.setSize(s, n),
        this.blurMaterial.setSize(e, t));
    }
    initialize(e, t, i) {
      i !== void 0 &&
        ((this.renderTargetA.texture.type = i),
        (this.renderTargetB.texture.type = i),
        i !== Ii
          ? ((this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1"),
            (this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1"))
          : e !== null &&
            e.outputColorSpace === Ue &&
            ((this.renderTargetA.texture.colorSpace = Ue),
            (this.renderTargetB.texture.colorSpace = Ue)));
    }
    static get AUTO_SIZE() {
      return kt.AUTO_SIZE;
    }
  },
  Cc = `#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);float mask=1.0;
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);mask=low*high;
#elif defined(THRESHOLD)
mask=smoothstep(threshold,threshold+smoothing,l);
#endif
#ifdef COLOR
gl_FragColor=texel*mask;
#else
gl_FragColor=vec4(l*mask);
#endif
}`,
  Sc = class extends _e {
    constructor(e = !1, t = null) {
      (super({
        name: "LuminanceMaterial",
        defines: { THREE_REVISION: Tn.replace(/\D+/g, "") },
        uniforms: {
          inputBuffer: new j(null),
          threshold: new j(0),
          smoothing: new j(1),
          range: new j(null),
        },
        blending: ai,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: Cc,
        vertexShader: Dn,
      }),
        (this.colorOutput = e),
        (this.luminanceRange = t));
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    setInputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    get threshold() {
      return this.uniforms.threshold.value;
    }
    set threshold(e) {
      (this.smoothing > 0 || e > 0
        ? (this.defines.THRESHOLD = "1")
        : delete this.defines.THRESHOLD,
        (this.uniforms.threshold.value = e));
    }
    getThreshold() {
      return this.threshold;
    }
    setThreshold(e) {
      this.threshold = e;
    }
    get smoothing() {
      return this.uniforms.smoothing.value;
    }
    set smoothing(e) {
      (this.threshold > 0 || e > 0
        ? (this.defines.THRESHOLD = "1")
        : delete this.defines.THRESHOLD,
        (this.uniforms.smoothing.value = e));
    }
    getSmoothingFactor() {
      return this.smoothing;
    }
    setSmoothingFactor(e) {
      this.smoothing = e;
    }
    get useThreshold() {
      return this.threshold > 0 || this.smoothing > 0;
    }
    set useThreshold(e) {}
    get colorOutput() {
      return this.defines.COLOR !== void 0;
    }
    set colorOutput(e) {
      (e ? (this.defines.COLOR = "1") : delete this.defines.COLOR,
        (this.needsUpdate = !0));
    }
    isColorOutputEnabled(e) {
      return this.colorOutput;
    }
    setColorOutputEnabled(e) {
      this.colorOutput = e;
    }
    get useRange() {
      return this.luminanceRange !== null;
    }
    set useRange(e) {
      this.luminanceRange = null;
    }
    get luminanceRange() {
      return this.uniforms.range.value;
    }
    set luminanceRange(e) {
      (e !== null ? (this.defines.RANGE = "1") : delete this.defines.RANGE,
        (this.uniforms.range.value = e),
        (this.needsUpdate = !0));
    }
    getLuminanceRange() {
      return this.luminanceRange;
    }
    setLuminanceRange(e) {
      this.luminanceRange = e;
    }
  },
  Va = class extends bt {
    constructor({
      renderTarget: e,
      luminanceRange: t,
      colorOutput: i,
      resolutionScale: s = 1,
      width: n = kt.AUTO_SIZE,
      height: r = kt.AUTO_SIZE,
      resolutionX: a = n,
      resolutionY: o = r,
    } = {}) {
      (super("LuminancePass"),
        (this.fullscreenMaterial = new Sc(i, t)),
        (this.needsSwap = !1),
        (this.renderTarget = e),
        this.renderTarget === void 0 &&
          ((this.renderTarget = new Bt(1, 1, { depthBuffer: !1 })),
          (this.renderTarget.texture.name = "LuminancePass.Target")));
      const l = (this.resolution = new kt(this, a, o, s));
      l.addEventListener("change", (d) =>
        this.setSize(l.baseWidth, l.baseHeight),
      );
    }
    get texture() {
      return this.renderTarget.texture;
    }
    getTexture() {
      return this.renderTarget.texture;
    }
    getResolution() {
      return this.resolution;
    }
    render(e, t, i, s, n) {
      const r = this.fullscreenMaterial;
      ((r.inputBuffer = t.texture),
        e.setRenderTarget(this.renderToScreen ? null : this.renderTarget),
        e.render(this.scene, this.camera));
    }
    setSize(e, t) {
      const i = this.resolution;
      (i.setBaseSize(e, t), this.renderTarget.setSize(i.width, i.height));
    }
    initialize(e, t, i) {
      i !== void 0 &&
        i !== Ii &&
        ((this.renderTarget.texture.type = i),
        (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1"));
    }
  },
  Tc = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,
  Dc =
    "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",
  Mc = class extends _e {
    constructor() {
      super({
        name: "DownsamplingMaterial",
        uniforms: { inputBuffer: new j(null), texelSize: new j(new ze()) },
        blending: ai,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: Tc,
        vertexShader: Dc,
      });
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    setSize(e, t) {
      this.uniforms.texelSize.value.set(1 / e, 1 / t);
    }
  },
  kc = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,
  Bc =
    "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",
  Pc = class extends _e {
    constructor() {
      super({
        name: "UpsamplingMaterial",
        uniforms: {
          inputBuffer: new j(null),
          supportBuffer: new j(null),
          texelSize: new j(new ze()),
          radius: new j(0.85),
        },
        blending: ai,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: kc,
        vertexShader: Bc,
      });
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    set supportBuffer(e) {
      this.uniforms.supportBuffer.value = e;
    }
    get radius() {
      return this.uniforms.radius.value;
    }
    set radius(e) {
      this.uniforms.radius.value = e;
    }
    setSize(e, t) {
      this.uniforms.texelSize.value.set(1 / e, 1 / t);
    }
  },
  Ic = class extends bt {
    constructor() {
      (super("MipmapBlurPass"),
        (this.needsSwap = !1),
        (this.renderTarget = new Bt(1, 1, { depthBuffer: !1 })),
        (this.renderTarget.texture.name = "Upsampling.Mipmap0"),
        (this.downsamplingMipmaps = []),
        (this.upsamplingMipmaps = []),
        (this.downsamplingMaterial = new Mc()),
        (this.upsamplingMaterial = new Pc()),
        (this.resolution = new ze()));
    }
    get texture() {
      return this.renderTarget.texture;
    }
    get levels() {
      return this.downsamplingMipmaps.length;
    }
    set levels(e) {
      if (this.levels !== e) {
        const t = this.renderTarget;
        (this.dispose(),
          (this.downsamplingMipmaps = []),
          (this.upsamplingMipmaps = []));
        for (let i = 0; i < e; ++i) {
          const s = t.clone();
          ((s.texture.name = "Downsampling.Mipmap" + i),
            this.downsamplingMipmaps.push(s));
        }
        this.upsamplingMipmaps.push(t);
        for (let i = 1, s = e - 1; i < s; ++i) {
          const n = t.clone();
          ((n.texture.name = "Upsampling.Mipmap" + i),
            this.upsamplingMipmaps.push(n));
        }
        this.setSize(this.resolution.x, this.resolution.y);
      }
    }
    get radius() {
      return this.upsamplingMaterial.radius;
    }
    set radius(e) {
      this.upsamplingMaterial.radius = e;
    }
    render(e, t, i, s, n) {
      const { scene: r, camera: a } = this,
        { downsamplingMaterial: o, upsamplingMaterial: l } = this,
        { downsamplingMipmaps: d, upsamplingMipmaps: u } = this;
      let c = t;
      this.fullscreenMaterial = o;
      for (let p = 0, f = d.length; p < f; ++p) {
        const h = d[p];
        (o.setSize(c.width, c.height),
          (o.inputBuffer = c.texture),
          e.setRenderTarget(h),
          e.render(r, a),
          (c = h));
      }
      this.fullscreenMaterial = l;
      for (let p = u.length - 1; p >= 0; --p) {
        const f = u[p];
        (l.setSize(c.width, c.height),
          (l.inputBuffer = c.texture),
          (l.supportBuffer = d[p].texture),
          e.setRenderTarget(f),
          e.render(r, a),
          (c = f));
      }
    }
    setSize(e, t) {
      const i = this.resolution;
      i.set(e, t);
      let s = i.width,
        n = i.height;
      for (let r = 0, a = this.downsamplingMipmaps.length; r < a; ++r)
        ((s = Math.round(s * 0.5)),
          (n = Math.round(n * 0.5)),
          this.downsamplingMipmaps[r].setSize(s, n),
          r < this.upsamplingMipmaps.length &&
            this.upsamplingMipmaps[r].setSize(s, n));
    }
    initialize(e, t, i) {
      if (i !== void 0) {
        const s = this.downsamplingMipmaps.concat(this.upsamplingMipmaps);
        for (const n of s) n.texture.type = i;
        if (i !== Ii)
          ((this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1"),
            (this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1"));
        else if (e !== null && e.outputColorSpace === Ue)
          for (const n of s) n.texture.colorSpace = Ue;
      }
    }
    dispose() {
      super.dispose();
      for (const e of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))
        e.dispose();
    }
  },
  Lc = `#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 texel=texture2D(map,uv);outputColor=vec4(texel.rgb*intensity,max(inputColor.a,texel.a));}`,
  Oc = class extends Sr {
    constructor({
      blendFunction: e = Z.SCREEN,
      luminanceThreshold: t = 1,
      luminanceSmoothing: i = 0.03,
      mipmapBlur: s = !0,
      intensity: n = 1,
      radius: r = 0.85,
      levels: a = 8,
      kernelSize: o = kn.LARGE,
      resolutionScale: l = 0.5,
      width: d = kt.AUTO_SIZE,
      height: u = kt.AUTO_SIZE,
      resolutionX: c = d,
      resolutionY: p = u,
    } = {}) {
      (super("BloomEffect", Lc, {
        blendFunction: e,
        uniforms: new Map([
          ["map", new j(null)],
          ["intensity", new j(n)],
        ]),
      }),
        (this.renderTarget = new Bt(1, 1, { depthBuffer: !1 })),
        (this.renderTarget.texture.name = "Bloom.Target"),
        (this.blurPass = new _c({ kernelSize: o })),
        (this.luminancePass = new Va({ colorOutput: !0 })),
        (this.luminanceMaterial.threshold = t),
        (this.luminanceMaterial.smoothing = i),
        (this.mipmapBlurPass = new Ic()),
        (this.mipmapBlurPass.enabled = s),
        (this.mipmapBlurPass.radius = r),
        (this.mipmapBlurPass.levels = a),
        (this.uniforms.get("map").value = s
          ? this.mipmapBlurPass.texture
          : this.renderTarget.texture));
      const f = (this.resolution = new kt(this, c, p, l));
      f.addEventListener("change", (h) =>
        this.setSize(f.baseWidth, f.baseHeight),
      );
    }
    get texture() {
      return this.mipmapBlurPass.enabled
        ? this.mipmapBlurPass.texture
        : this.renderTarget.texture;
    }
    getTexture() {
      return this.texture;
    }
    getResolution() {
      return this.resolution;
    }
    getBlurPass() {
      return this.blurPass;
    }
    getLuminancePass() {
      return this.luminancePass;
    }
    get luminanceMaterial() {
      return this.luminancePass.fullscreenMaterial;
    }
    getLuminanceMaterial() {
      return this.luminancePass.fullscreenMaterial;
    }
    get width() {
      return this.resolution.width;
    }
    set width(e) {
      this.resolution.preferredWidth = e;
    }
    get height() {
      return this.resolution.height;
    }
    set height(e) {
      this.resolution.preferredHeight = e;
    }
    get dithering() {
      return this.blurPass.dithering;
    }
    set dithering(e) {
      this.blurPass.dithering = e;
    }
    get kernelSize() {
      return this.blurPass.kernelSize;
    }
    set kernelSize(e) {
      this.blurPass.kernelSize = e;
    }
    get distinction() {
      return (console.warn(this.name, "distinction was removed"), 1);
    }
    set distinction(e) {
      console.warn(this.name, "distinction was removed");
    }
    get intensity() {
      return this.uniforms.get("intensity").value;
    }
    set intensity(e) {
      this.uniforms.get("intensity").value = e;
    }
    getIntensity() {
      return this.intensity;
    }
    setIntensity(e) {
      this.intensity = e;
    }
    getResolutionScale() {
      return this.resolution.scale;
    }
    setResolutionScale(e) {
      this.resolution.scale = e;
    }
    update(e, t, i) {
      const s = this.renderTarget,
        n = this.luminancePass;
      n.enabled
        ? (n.render(e, t),
          this.mipmapBlurPass.enabled
            ? this.mipmapBlurPass.render(e, n.renderTarget)
            : this.blurPass.render(e, n.renderTarget, s))
        : this.mipmapBlurPass.enabled
          ? this.mipmapBlurPass.render(e, t)
          : this.blurPass.render(e, t, s);
    }
    setSize(e, t) {
      const i = this.resolution;
      (i.setBaseSize(e, t),
        this.renderTarget.setSize(i.width, i.height),
        this.blurPass.resolution.copy(i),
        this.luminancePass.setSize(e, t),
        this.mipmapBlurPass.setSize(e, t));
    }
    initialize(e, t, i) {
      (this.blurPass.initialize(e, t, i),
        this.luminancePass.initialize(e, t, i),
        this.mipmapBlurPass.initialize(e, t, i),
        i !== void 0 &&
          ((this.renderTarget.texture.type = i),
          e !== null &&
            e.outputColorSpace === Ue &&
            (this.renderTarget.texture.colorSpace = Ue)));
    }
  },
  lr = class extends bt {
    constructor(e, t = "inputBuffer") {
      (super("ShaderPass"), (this.fullscreenMaterial = e), (this.input = t));
    }
    setInput(e) {
      this.input = e;
    }
    render(e, t, i, s, n) {
      const r = this.fullscreenMaterial.uniforms;
      (t !== null &&
        r !== void 0 &&
        r[this.input] !== void 0 &&
        (r[this.input].value = t.texture),
        e.setRenderTarget(this.renderToScreen ? null : i),
        e.render(this.scene, this.camera));
    }
    initialize(e, t, i) {
      i !== void 0 &&
        i !== Ii &&
        (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1");
    }
  },
  ks = { KEEP_MAX_DEPTH: 1, DISCARD_MAX_DEPTH: 2 },
  zc = `#include <common>
#include <packing>
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer0;uniform highp sampler2D depthBuffer1;
#else
uniform mediump sampler2D depthBuffer0;uniform mediump sampler2D depthBuffer1;
#endif
uniform sampler2D inputBuffer;uniform vec2 cameraNearFar;float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#else
return orthographicDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);
#endif
}varying vec2 vUv;void main(){vec2 depth;
#if DEPTH_PACKING_0 == 3201
depth.x=unpackRGBAToDepth(texture2D(depthBuffer0,vUv));
#else
depth.x=texture2D(depthBuffer0,vUv).r;
#ifdef LOG_DEPTH
float d=pow(2.0,depth.x*log2(cameraNearFar.y+1.0))-1.0;float a=cameraNearFar.y/(cameraNearFar.y-cameraNearFar.x);float b=cameraNearFar.y*cameraNearFar.x/(cameraNearFar.x-cameraNearFar.y);depth.x=a+b/d;
#endif
#endif
#if DEPTH_PACKING_1 == 3201
depth.y=unpackRGBAToDepth(texture2D(depthBuffer1,vUv));
#else
depth.y=texture2D(depthBuffer1,vUv).r;
#ifdef LOG_DEPTH
float d=pow(2.0,depth.y*log2(cameraNearFar.y+1.0))-1.0;float a=cameraNearFar.y/(cameraNearFar.y-cameraNearFar.x);float b=cameraNearFar.y*cameraNearFar.x/(cameraNearFar.x-cameraNearFar.y);depth.y=a+b/d;
#endif
#endif
bool isMaxDepth=(depth.x==1.0);
#ifdef PERSPECTIVE_CAMERA
depth.x=viewZToOrthographicDepth(getViewZ(depth.x),cameraNearFar.x,cameraNearFar.y);depth.y=viewZToOrthographicDepth(getViewZ(depth.y),cameraNearFar.x,cameraNearFar.y);
#endif
#if DEPTH_TEST_STRATEGY == 0
bool keep=depthTest(depth.x,depth.y);
#elif DEPTH_TEST_STRATEGY == 1
bool keep=isMaxDepth||depthTest(depth.x,depth.y);
#else
bool keep=!isMaxDepth&&depthTest(depth.x,depth.y);
#endif
if(keep){gl_FragColor=texture2D(inputBuffer,vUv);}else{discard;}}`,
  Rc = class extends _e {
    constructor() {
      (super({
        name: "DepthMaskMaterial",
        defines: {
          DEPTH_EPSILON: "0.0001",
          DEPTH_PACKING_0: "0",
          DEPTH_PACKING_1: "0",
          DEPTH_TEST_STRATEGY: ks.KEEP_MAX_DEPTH,
        },
        uniforms: {
          inputBuffer: new j(null),
          depthBuffer0: new j(null),
          depthBuffer1: new j(null),
          cameraNearFar: new j(new ze(1, 1)),
        },
        blending: ai,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: zc,
        vertexShader: Dn,
      }),
        (this.depthMode = Hr));
    }
    set depthBuffer0(e) {
      this.uniforms.depthBuffer0.value = e;
    }
    set depthPacking0(e) {
      ((this.defines.DEPTH_PACKING_0 = e.toFixed(0)), (this.needsUpdate = !0));
    }
    setDepthBuffer0(e, t = wi) {
      ((this.depthBuffer0 = e), (this.depthPacking0 = t));
    }
    set depthBuffer1(e) {
      this.uniforms.depthBuffer1.value = e;
    }
    set depthPacking1(e) {
      ((this.defines.DEPTH_PACKING_1 = e.toFixed(0)), (this.needsUpdate = !0));
    }
    setDepthBuffer1(e, t = wi) {
      ((this.depthBuffer1 = e), (this.depthPacking1 = t));
    }
    get maxDepthStrategy() {
      return Number(this.defines.DEPTH_TEST_STRATEGY);
    }
    set maxDepthStrategy(e) {
      ((this.defines.DEPTH_TEST_STRATEGY = e.toFixed(0)),
        (this.needsUpdate = !0));
    }
    get keepFar() {
      return this.maxDepthStrategy;
    }
    set keepFar(e) {
      this.maxDepthStrategy = e ? ks.KEEP_MAX_DEPTH : ks.DISCARD_MAX_DEPTH;
    }
    getMaxDepthStrategy() {
      return this.maxDepthStrategy;
    }
    setMaxDepthStrategy(e) {
      this.maxDepthStrategy = e;
    }
    get epsilon() {
      return Number(this.defines.DEPTH_EPSILON);
    }
    set epsilon(e) {
      ((this.defines.DEPTH_EPSILON = e.toFixed(16)), (this.needsUpdate = !0));
    }
    getEpsilon() {
      return this.epsilon;
    }
    setEpsilon(e) {
      this.epsilon = e;
    }
    get depthMode() {
      return Number(this.defines.DEPTH_MODE);
    }
    set depthMode(e) {
      let t;
      switch (e) {
        case fl:
          t = "false";
          break;
        case pl:
          t = "true";
          break;
        case rr:
          t = "abs(d1 - d0) <= DEPTH_EPSILON";
          break;
        case za:
          t = "abs(d1 - d0) > DEPTH_EPSILON";
          break;
        case Hr:
          t = "d0 > d1";
          break;
        case ul:
          t = "d0 >= d1";
          break;
        case cl:
          t = "d0 <= d1";
          break;
        case dl:
        default:
          t = "d0 < d1";
          break;
      }
      ((this.defines.DEPTH_MODE = e.toFixed(0)),
        (this.defines["depthTest(d0, d1)"] = t),
        (this.needsUpdate = !0));
    }
    getDepthMode() {
      return this.depthMode;
    }
    setDepthMode(e) {
      this.depthMode = e;
    }
    adoptCameraSettings(e) {
      this.copyCameraSettings(e);
    }
    copyCameraSettings(e) {
      e &&
        (this.uniforms.cameraNearFar.value.set(e.near, e.far),
        e instanceof Ar
          ? (this.defines.PERSPECTIVE_CAMERA = "1")
          : delete this.defines.PERSPECTIVE_CAMERA,
        (this.needsUpdate = !0));
    }
  },
  ja = class extends bt {
    constructor(e, t, i = null) {
      (super("RenderPass", e, t),
        (this.needsSwap = !1),
        (this.clearPass = new Mn()),
        (this.overrideMaterialManager = i === null ? null : new Xr(i)),
        (this.ignoreBackground = !1),
        (this.skipShadowMapUpdate = !1),
        (this.selection = null));
    }
    set mainScene(e) {
      this.scene = e;
    }
    set mainCamera(e) {
      this.camera = e;
    }
    get renderToScreen() {
      return super.renderToScreen;
    }
    set renderToScreen(e) {
      ((super.renderToScreen = e), (this.clearPass.renderToScreen = e));
    }
    get overrideMaterial() {
      const e = this.overrideMaterialManager;
      return e !== null ? e.material : null;
    }
    set overrideMaterial(e) {
      const t = this.overrideMaterialManager;
      e !== null
        ? t !== null
          ? t.setMaterial(e)
          : (this.overrideMaterialManager = new Xr(e))
        : t !== null && (t.dispose(), (this.overrideMaterialManager = null));
    }
    getOverrideMaterial() {
      return this.overrideMaterial;
    }
    setOverrideMaterial(e) {
      this.overrideMaterial = e;
    }
    get clear() {
      return this.clearPass.enabled;
    }
    set clear(e) {
      this.clearPass.enabled = e;
    }
    getSelection() {
      return this.selection;
    }
    setSelection(e) {
      this.selection = e;
    }
    isBackgroundDisabled() {
      return this.ignoreBackground;
    }
    setBackgroundDisabled(e) {
      this.ignoreBackground = e;
    }
    isShadowMapDisabled() {
      return this.skipShadowMapUpdate;
    }
    setShadowMapDisabled(e) {
      this.skipShadowMapUpdate = e;
    }
    getClearPass() {
      return this.clearPass;
    }
    render(e, t, i, s, n) {
      const r = this.scene,
        a = this.camera,
        o = this.selection,
        l = a.layers.mask,
        d = r.background,
        u = e.shadowMap.autoUpdate,
        c = this.renderToScreen ? null : t;
      (o !== null && a.layers.set(o.getLayer()),
        this.skipShadowMapUpdate && (e.shadowMap.autoUpdate = !1),
        (this.ignoreBackground || this.clearPass.overrideClearColor !== null) &&
          (r.background = null),
        this.clearPass.enabled && this.clearPass.render(e, t),
        e.setRenderTarget(c),
        this.overrideMaterialManager !== null
          ? this.overrideMaterialManager.render(e, r, a)
          : e.render(r, a),
        (a.layers.mask = l),
        (r.background = d),
        (e.shadowMap.autoUpdate = u));
    }
  },
  Qa = { COLOR: 2 },
  Hc = { DISABLED: 0 },
  rs = { LOW: 0, MEDIUM: 1, HIGH: 2, ULTRA: 3 },
  xt = {
    LINEAR: 0,
    REINHARD: 1,
    REINHARD2: 2,
    REINHARD2_ADAPTIVE: 3,
    OPTIMIZED_CINEON: 5,
    CINEON: 5,
    ACES_FILMIC: 6,
    AGX: 7,
    NEUTRAL: 8,
  },
  Gc = class extends bt {
    constructor(
      e,
      t,
      {
        renderTarget: i,
        resolutionScale: s = 1,
        width: n = kt.AUTO_SIZE,
        height: r = kt.AUTO_SIZE,
        resolutionX: a = n,
        resolutionY: o = r,
      } = {},
    ) {
      (super("DepthPass"),
        (this.needsSwap = !1),
        (this.renderPass = new ja(e, t, new ol({ depthPacking: Oa }))));
      const l = this.renderPass;
      ((l.skipShadowMapUpdate = !0), (l.ignoreBackground = !0));
      const d = l.clearPass;
      ((d.overrideClearColor = new Re(16777215)),
        (d.overrideClearAlpha = 1),
        (this.renderTarget = i),
        this.renderTarget === void 0 &&
          ((this.renderTarget = new Bt(1, 1, { minFilter: hs, magFilter: hs })),
          (this.renderTarget.texture.name = "DepthPass.Target")));
      const u = (this.resolution = new kt(this, a, o, s));
      u.addEventListener("change", (c) =>
        this.setSize(u.baseWidth, u.baseHeight),
      );
    }
    set mainScene(e) {
      this.renderPass.mainScene = e;
    }
    set mainCamera(e) {
      this.renderPass.mainCamera = e;
    }
    get texture() {
      return this.renderTarget.texture;
    }
    getTexture() {
      return this.renderTarget.texture;
    }
    getResolution() {
      return this.resolution;
    }
    getResolutionScale() {
      return this.resolution.scale;
    }
    setResolutionScale(e) {
      this.resolution.scale = e;
    }
    render(e, t, i, s, n) {
      const r = this.renderToScreen ? null : this.renderTarget;
      this.renderPass.render(e, r);
    }
    setSize(e, t) {
      const i = this.resolution;
      (i.setBaseSize(e, t), this.renderTarget.setSize(i.width, i.height));
    }
  },
  Nc = class extends Oc {
    constructor(e, t, i) {
      (super(i),
        this.setAttributes(this.getAttributes() | ii.DEPTH),
        (this.camera = t),
        (this.depthPass = new Gc(e, t)),
        (this.clearPass = new Mn(!0, !1, !1)),
        (this.clearPass.overrideClearColor = new Re(0)),
        (this.depthMaskPass = new lr(new Rc())));
      const s = this.depthMaskMaterial;
      (s.copyCameraSettings(t),
        (s.depthBuffer1 = this.depthPass.texture),
        (s.depthPacking1 = Oa),
        (s.depthMode = rr),
        (this.renderTargetMasked = new Bt(1, 1, { depthBuffer: !1 })),
        (this.renderTargetMasked.texture.name = "Bloom.Masked"),
        (this.selection = new Gd()),
        (this._inverted = !1),
        (this._ignoreBackground = !1));
    }
    set mainScene(e) {
      this.depthPass.mainScene = e;
    }
    set mainCamera(e) {
      ((this.camera = e),
        (this.depthPass.mainCamera = e),
        this.depthMaskMaterial.copyCameraSettings(e));
    }
    getSelection() {
      return this.selection;
    }
    get depthMaskMaterial() {
      return this.depthMaskPass.fullscreenMaterial;
    }
    get inverted() {
      return this._inverted;
    }
    set inverted(e) {
      ((this._inverted = e), (this.depthMaskMaterial.depthMode = e ? za : rr));
    }
    isInverted() {
      return this.inverted;
    }
    setInverted(e) {
      this.inverted = e;
    }
    get ignoreBackground() {
      return this._ignoreBackground;
    }
    set ignoreBackground(e) {
      ((this._ignoreBackground = e),
        (this.depthMaskMaterial.maxDepthStrategy = e
          ? ks.DISCARD_MAX_DEPTH
          : ks.KEEP_MAX_DEPTH));
    }
    isBackgroundDisabled() {
      return this.ignoreBackground;
    }
    setBackgroundDisabled(e) {
      this.ignoreBackground = e;
    }
    setDepthTexture(e, t = wi) {
      ((this.depthMaskMaterial.depthBuffer0 = e),
        (this.depthMaskMaterial.depthPacking0 = t));
    }
    update(e, t, i) {
      const s = this.camera,
        n = this.selection,
        r = this.inverted;
      let a = t;
      if (this.ignoreBackground || !r || n.size > 0) {
        const o = s.layers.mask;
        (s.layers.set(n.layer),
          this.depthPass.render(e),
          (s.layers.mask = o),
          (a = this.renderTargetMasked),
          this.clearPass.render(e, a),
          this.depthMaskPass.render(e, t, a));
      }
      super.update(e, a, i);
    }
    setSize(e, t) {
      (super.setSize(e, t),
        this.renderTargetMasked.setSize(e, t),
        this.depthPass.setSize(e, t));
    }
    initialize(e, t, i) {
      (super.initialize(e, t, i),
        this.clearPass.initialize(e, t, i),
        this.depthPass.initialize(e, t, i),
        this.depthMaskPass.initialize(e, t, i),
        e !== null &&
          e.capabilities.logarithmicDepthBuffer &&
          (this.depthMaskPass.fullscreenMaterial.defines.LOG_DEPTH = "1"),
        i !== void 0 &&
          ((this.renderTargetMasked.texture.type = i),
          e !== null &&
            e.outputColorSpace === Ue &&
            (this.renderTargetMasked.texture.colorSpace = Ue)));
    }
  },
  Uc = `varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
#if EDGE_DETECTION_MODE == 1
#include <common>
#endif
#if EDGE_DETECTION_MODE == 0 || PREDICATION_MODE == 1
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}vec3 gatherNeighbors(){float p=readDepth(vUv);float pLeft=readDepth(vUv0);float pTop=readDepth(vUv1);return vec3(p,pLeft,pTop);}
#elif PREDICATION_MODE == 2
uniform sampler2D predicationBuffer;vec3 gatherNeighbors(){float p=texture2D(predicationBuffer,vUv).r;float pLeft=texture2D(predicationBuffer,vUv0).r;float pTop=texture2D(predicationBuffer,vUv1).r;return vec3(p,pLeft,pTop);}
#endif
#if PREDICATION_MODE != 0
vec2 calculatePredicatedThreshold(){vec3 neighbours=gatherNeighbors();vec2 delta=abs(neighbours.xx-neighbours.yz);vec2 edges=step(PREDICATION_THRESHOLD,delta);return PREDICATION_SCALE*EDGE_THRESHOLD*(1.0-PREDICATION_STRENGTH*edges);}
#endif
#if EDGE_DETECTION_MODE != 0
uniform sampler2D inputBuffer;
#endif
void main(){
#if EDGE_DETECTION_MODE == 0
const vec2 threshold=vec2(DEPTH_THRESHOLD);
#elif PREDICATION_MODE != 0
vec2 threshold=calculatePredicatedThreshold();
#else
const vec2 threshold=vec2(EDGE_THRESHOLD);
#endif
#if EDGE_DETECTION_MODE == 0
vec3 neighbors=gatherNeighbors();vec2 delta=abs(neighbors.xx-vec2(neighbors.y,neighbors.z));vec2 edges=step(threshold,delta);if(dot(edges,vec2(1.0))==0.0){discard;}gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 1
float l=luminance(texture2D(inputBuffer,vUv).rgb);float lLeft=luminance(texture2D(inputBuffer,vUv0).rgb);float lTop=luminance(texture2D(inputBuffer,vUv1).rgb);vec4 delta;delta.xy=abs(l-vec2(lLeft,lTop));vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}float lRight=luminance(texture2D(inputBuffer,vUv2).rgb);float lBottom=luminance(texture2D(inputBuffer,vUv3).rgb);delta.zw=abs(l-vec2(lRight,lBottom));vec2 maxDelta=max(delta.xy,delta.zw);float lLeftLeft=luminance(texture2D(inputBuffer,vUv4).rgb);float lTopTop=luminance(texture2D(inputBuffer,vUv5).rgb);delta.zw=abs(vec2(lLeft,lTop)-vec2(lLeftLeft,lTopTop));maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges.xy*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 2
vec4 delta;vec3 c=texture2D(inputBuffer,vUv).rgb;vec3 cLeft=texture2D(inputBuffer,vUv0).rgb;vec3 t=abs(c-cLeft);delta.x=max(max(t.r,t.g),t.b);vec3 cTop=texture2D(inputBuffer,vUv1).rgb;t=abs(c-cTop);delta.y=max(max(t.r,t.g),t.b);vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}vec3 cRight=texture2D(inputBuffer,vUv2).rgb;t=abs(c-cRight);delta.z=max(max(t.r,t.g),t.b);vec3 cBottom=texture2D(inputBuffer,vUv3).rgb;t=abs(c-cBottom);delta.w=max(max(t.r,t.g),t.b);vec2 maxDelta=max(delta.xy,delta.zw);vec3 cLeftLeft=texture2D(inputBuffer,vUv4).rgb;t=abs(c-cLeftLeft);delta.z=max(max(t.r,t.g),t.b);vec3 cTopTop=texture2D(inputBuffer,vUv5).rgb;t=abs(c-cTopTop);delta.w=max(max(t.r,t.g),t.b);maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#endif
}`,
  Vc = `uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,
  jc = class extends _e {
    constructor(e = new ze(), t = Qa.COLOR) {
      (super({
        name: "EdgeDetectionMaterial",
        defines: {
          THREE_REVISION: Tn.replace(/\D+/g, ""),
          LOCAL_CONTRAST_ADAPTATION_FACTOR: "2.0",
          EDGE_THRESHOLD: "0.1",
          DEPTH_THRESHOLD: "0.01",
          PREDICATION_MODE: "0",
          PREDICATION_THRESHOLD: "0.01",
          PREDICATION_SCALE: "2.0",
          PREDICATION_STRENGTH: "1.0",
          DEPTH_PACKING: "0",
        },
        uniforms: {
          inputBuffer: new j(null),
          depthBuffer: new j(null),
          predicationBuffer: new j(null),
          texelSize: new j(e),
        },
        blending: ai,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: Uc,
        vertexShader: Vc,
      }),
        (this.edgeDetectionMode = t));
    }
    set depthBuffer(e) {
      this.uniforms.depthBuffer.value = e;
    }
    set depthPacking(e) {
      ((this.defines.DEPTH_PACKING = e.toFixed(0)), (this.needsUpdate = !0));
    }
    setDepthBuffer(e, t = wi) {
      ((this.depthBuffer = e), (this.depthPacking = t));
    }
    get edgeDetectionMode() {
      return Number(this.defines.EDGE_DETECTION_MODE);
    }
    set edgeDetectionMode(e) {
      ((this.defines.EDGE_DETECTION_MODE = e.toFixed(0)),
        (this.needsUpdate = !0));
    }
    getEdgeDetectionMode() {
      return this.edgeDetectionMode;
    }
    setEdgeDetectionMode(e) {
      this.edgeDetectionMode = e;
    }
    get localContrastAdaptationFactor() {
      return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR);
    }
    set localContrastAdaptationFactor(e) {
      ((this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR = e.toFixed("6")),
        (this.needsUpdate = !0));
    }
    getLocalContrastAdaptationFactor() {
      return this.localContrastAdaptationFactor;
    }
    setLocalContrastAdaptationFactor(e) {
      this.localContrastAdaptationFactor = e;
    }
    get edgeDetectionThreshold() {
      return Number(this.defines.EDGE_THRESHOLD);
    }
    set edgeDetectionThreshold(e) {
      ((this.defines.EDGE_THRESHOLD = e.toFixed("6")),
        (this.defines.DEPTH_THRESHOLD = (e * 0.1).toFixed("6")),
        (this.needsUpdate = !0));
    }
    getEdgeDetectionThreshold() {
      return this.edgeDetectionThreshold;
    }
    setEdgeDetectionThreshold(e) {
      this.edgeDetectionThreshold = e;
    }
    get predicationMode() {
      return Number(this.defines.PREDICATION_MODE);
    }
    set predicationMode(e) {
      ((this.defines.PREDICATION_MODE = e.toFixed(0)), (this.needsUpdate = !0));
    }
    getPredicationMode() {
      return this.predicationMode;
    }
    setPredicationMode(e) {
      this.predicationMode = e;
    }
    set predicationBuffer(e) {
      this.uniforms.predicationBuffer.value = e;
    }
    setPredicationBuffer(e) {
      this.uniforms.predicationBuffer.value = e;
    }
    get predicationThreshold() {
      return Number(this.defines.PREDICATION_THRESHOLD);
    }
    set predicationThreshold(e) {
      ((this.defines.PREDICATION_THRESHOLD = e.toFixed("6")),
        (this.needsUpdate = !0));
    }
    getPredicationThreshold() {
      return this.predicationThreshold;
    }
    setPredicationThreshold(e) {
      this.predicationThreshold = e;
    }
    get predicationScale() {
      return Number(this.defines.PREDICATION_SCALE);
    }
    set predicationScale(e) {
      ((this.defines.PREDICATION_SCALE = e.toFixed("6")),
        (this.needsUpdate = !0));
    }
    getPredicationScale() {
      return this.predicationScale;
    }
    setPredicationScale(e) {
      this.predicationScale = e;
    }
    get predicationStrength() {
      return Number(this.defines.PREDICATION_STRENGTH);
    }
    set predicationStrength(e) {
      ((this.defines.PREDICATION_STRENGTH = e.toFixed("6")),
        (this.needsUpdate = !0));
    }
    getPredicationStrength() {
      return this.predicationStrength;
    }
    setPredicationStrength(e) {
      this.predicationStrength = e;
    }
    setSize(e, t) {
      this.uniforms.texelSize.value.set(1 / e, 1 / t);
    }
  },
  Qc = `#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
#if __VERSION__ < 300
#define round(v) floor(v + 0.5)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform lowp sampler2D areaTexture;uniform lowp sampler2D searchTexture;uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}vec2 decodeDiagBilinearAccess(in vec2 e){e.r=e.r*abs(5.0*e.r-5.0*0.75);return round(e);}vec4 decodeDiagBilinearAccess(in vec4 e){e.rb=e.rb*abs(5.0*e.rb-5.0*0.75);return round(e);}vec2 searchDiag1(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 searchDiag2(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);coord.x+=0.25*texelSize.x;vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;e=decodeDiagBilinearAccess(e);coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 areaDiag(const in vec2 dist,const in vec2 e,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE_DIAG,AREATEX_MAX_DISTANCE_DIAG)*e+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.x+=0.5;texCoord.y+=AREATEX_SUBTEX_SIZE*offset;return texture2D(areaTexture,texCoord).rg;}vec2 calculateDiagWeights(const in vec2 texCoord,const in vec2 e,const in vec4 subsampleIndices){vec2 weights=vec2(0.0);vec4 d;vec2 end;if(e.r>0.0){d.xz=searchDiag1(texCoord,vec2(-1.0,1.0),end);d.x+=float(end.y>0.9);}else{d.xz=vec2(0.0);}d.yw=searchDiag1(texCoord,vec2(1.0,-1.0),end);if(d.x+d.y>2.0){vec4 coords=vec4(-d.x+0.25,d.x,d.y,-d.y-0.25)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.xy=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).rg;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).rg;c.yxwz=decodeDiagBilinearAccess(c.xyzw);vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.z);}d.xz=searchDiag2(texCoord,vec2(-1.0,-1.0),end);if(sampleLevelZeroOffset(inputBuffer,texCoord,vec2(1,0)).r>0.0){d.yw=searchDiag2(texCoord,vec2(1.0),end);d.y+=float(end.y>0.9);}else{d.yw=vec2(0.0);}if(d.x+d.y>2.0){vec4 coords=vec4(-d.x,-d.x,d.y,d.y)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.x=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).g;c.y=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(0,-1)).r;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).gr;vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.w).gr;}return weights;}float searchLength(const in vec2 e,const in float offset){vec2 scale=SEARCHTEX_SIZE*vec2(0.5,-1.0);vec2 bias=SEARCHTEX_SIZE*vec2(offset,1.0);scale+=vec2(-1.0,1.0);bias+=vec2(0.5,-0.5);scale*=1.0/SEARCHTEX_PACKED_SIZE;bias*=1.0/SEARCHTEX_PACKED_SIZE;return texture2D(searchTexture,scale*e+bias).r;}float searchXLeft(in vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x>end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(-2.0,0.0)*texelSize+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.0)+3.25;return texelSize.x*offset+texCoord.x;}float searchXRight(vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x<end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(2.0,0.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.5)+3.25;return-texelSize.x*offset+texCoord.x;}float searchYUp(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.y>end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=-vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.0)+3.25;return texelSize.y*offset+texCoord.y;}float searchYDown(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;i++){if(!(texCoord.y<end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.5)+3.25;return-texelSize.y*offset+texCoord.y;}vec2 area(const in vec2 dist,const in float e1,const in float e2,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE)*round(4.0*vec2(e1,e2))+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.y=AREATEX_SUBTEX_SIZE*offset+texCoord.y;return texture2D(areaTexture,texCoord).rg;}void detectHorizontalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,1)).r;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).r;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,-2)).r;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,-2)).r;weights*=clamp(factor,0.0,1.0);
#endif
}void detectVerticalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(1,0)).g;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).g;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(-2,0)).g;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(-2,1)).g;weights*=clamp(factor,0.0,1.0);
#endif
}void main(){vec4 weights=vec4(0.0);vec4 subsampleIndices=vec4(0.0);vec2 e=texture2D(inputBuffer,vUv).rg;if(e.g>0.0){
#if !defined(DISABLE_DIAG_DETECTION)
weights.rg=calculateDiagWeights(vUv,e,subsampleIndices);if(weights.r==-weights.g){
#endif
vec2 d;vec3 coords;coords.x=searchXLeft(vOffset[0].xy,vOffset[2].x);coords.y=vOffset[1].y;d.x=coords.x;float e1=texture2D(inputBuffer,coords.xy).r;coords.z=searchXRight(vOffset[0].zw,vOffset[2].y);d.y=coords.z;d=round(resolution.xx*d+-vPixCoord.xx);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.zy,vec2(1,0)).r;weights.rg=area(sqrtD,e1,e2,subsampleIndices.y);coords.y=vUv.y;detectHorizontalCornerPattern(weights.rg,coords.xyzy,d);
#if !defined(DISABLE_DIAG_DETECTION)
}else{e.r=0.0;}
#endif
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`,
  Yc =
    "uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}",
  Wc = class extends _e {
    constructor(e = new ze(), t = new ze()) {
      super({
        name: "SMAAWeightsMaterial",
        defines: {
          MAX_SEARCH_STEPS_INT: "16",
          MAX_SEARCH_STEPS_FLOAT: "16.0",
          MAX_SEARCH_STEPS_DIAG_INT: "8",
          MAX_SEARCH_STEPS_DIAG_FLOAT: "8.0",
          CORNER_ROUNDING: "25",
          CORNER_ROUNDING_NORM: "0.25",
          AREATEX_MAX_DISTANCE: "16.0",
          AREATEX_MAX_DISTANCE_DIAG: "20.0",
          AREATEX_PIXEL_SIZE: "(1.0 / vec2(160.0, 560.0))",
          AREATEX_SUBTEX_SIZE: "(1.0 / 7.0)",
          SEARCHTEX_SIZE: "vec2(66.0, 33.0)",
          SEARCHTEX_PACKED_SIZE: "vec2(64.0, 16.0)",
        },
        uniforms: {
          inputBuffer: new j(null),
          searchTexture: new j(null),
          areaTexture: new j(null),
          resolution: new j(t),
          texelSize: new j(e),
        },
        blending: ai,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: Qc,
        vertexShader: Yc,
      });
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    setInputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    get searchTexture() {
      return this.uniforms.searchTexture.value;
    }
    set searchTexture(e) {
      this.uniforms.searchTexture.value = e;
    }
    get areaTexture() {
      return this.uniforms.areaTexture.value;
    }
    set areaTexture(e) {
      this.uniforms.areaTexture.value = e;
    }
    setLookupTextures(e, t) {
      ((this.searchTexture = e), (this.areaTexture = t));
    }
    get orthogonalSearchSteps() {
      return Number(this.defines.MAX_SEARCH_STEPS_INT);
    }
    set orthogonalSearchSteps(e) {
      const t = Math.min(Math.max(e, 0), 112);
      ((this.defines.MAX_SEARCH_STEPS_INT = t.toFixed("0")),
        (this.defines.MAX_SEARCH_STEPS_FLOAT = t.toFixed("1")),
        (this.needsUpdate = !0));
    }
    setOrthogonalSearchSteps(e) {
      this.orthogonalSearchSteps = e;
    }
    get diagonalSearchSteps() {
      return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT);
    }
    set diagonalSearchSteps(e) {
      const t = Math.min(Math.max(e, 0), 20);
      ((this.defines.MAX_SEARCH_STEPS_DIAG_INT = t.toFixed("0")),
        (this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT = t.toFixed("1")),
        (this.needsUpdate = !0));
    }
    setDiagonalSearchSteps(e) {
      this.diagonalSearchSteps = e;
    }
    get diagonalDetection() {
      return this.defines.DISABLE_DIAG_DETECTION === void 0;
    }
    set diagonalDetection(e) {
      (e
        ? delete this.defines.DISABLE_DIAG_DETECTION
        : (this.defines.DISABLE_DIAG_DETECTION = "1"),
        (this.needsUpdate = !0));
    }
    isDiagonalDetectionEnabled() {
      return this.diagonalDetection;
    }
    setDiagonalDetectionEnabled(e) {
      this.diagonalDetection = e;
    }
    get cornerRounding() {
      return Number(this.defines.CORNER_ROUNDING);
    }
    set cornerRounding(e) {
      const t = Math.min(Math.max(e, 0), 100);
      ((this.defines.CORNER_ROUNDING = t.toFixed("4")),
        (this.defines.CORNER_ROUNDING_NORM = (t / 100).toFixed("4")),
        (this.needsUpdate = !0));
    }
    setCornerRounding(e) {
      this.cornerRounding = e;
    }
    get cornerDetection() {
      return this.defines.DISABLE_CORNER_DETECTION === void 0;
    }
    set cornerDetection(e) {
      (e
        ? delete this.defines.DISABLE_CORNER_DETECTION
        : (this.defines.DISABLE_CORNER_DETECTION = "1"),
        (this.needsUpdate = !0));
    }
    isCornerRoundingEnabled() {
      return this.cornerDetection;
    }
    setCornerRoundingEnabled(e) {
      this.cornerDetection = e;
    }
    setSize(e, t) {
      const i = this.uniforms;
      (i.texelSize.value.set(1 / e, 1 / t), i.resolution.value.set(e, t));
    }
  },
  Kr =
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC",
  qr =
    "data:image/png;base64,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",
  Xc =
    "uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}",
  Kc =
    "varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}",
  qc = class extends Sr {
    constructor({
      blendFunction: e = Z.SRC,
      preset: t = rs.MEDIUM,
      edgeDetectionMode: i = Qa.COLOR,
      predicationMode: s = Hc.DISABLED,
    } = {}) {
      super("SMAAEffect", Xc, {
        vertexShader: Kc,
        blendFunction: e,
        attributes: ii.CONVOLUTION | ii.DEPTH,
        uniforms: new Map([["weightMap", new j(null)]]),
      });
      let n, r;
      (arguments.length > 1 &&
        ((n = arguments[0]),
        (r = arguments[1]),
        arguments.length > 2 && (t = arguments[2]),
        arguments.length > 3 && (i = arguments[3])),
        (this.renderTargetEdges = new Bt(1, 1, { depthBuffer: !1 })),
        (this.renderTargetEdges.texture.name = "SMAA.Edges"),
        (this.renderTargetWeights = this.renderTargetEdges.clone()),
        (this.renderTargetWeights.texture.name = "SMAA.Weights"),
        (this.uniforms.get("weightMap").value =
          this.renderTargetWeights.texture),
        (this.clearPass = new Mn(!0, !1, !1)),
        (this.clearPass.overrideClearColor = new Re(0)),
        (this.clearPass.overrideClearAlpha = 1),
        (this.edgeDetectionPass = new lr(new jc())),
        (this.edgeDetectionMaterial.edgeDetectionMode = i),
        (this.edgeDetectionMaterial.predicationMode = s),
        (this.weightsPass = new lr(new Wc())));
      const a = new nl();
      ((a.onLoad = () => {
        const o = new Fn(n);
        ((o.name = "SMAA.Search"),
          (o.magFilter = hs),
          (o.minFilter = hs),
          (o.generateMipmaps = !1),
          (o.needsUpdate = !0),
          (o.flipY = !0),
          (this.weightsMaterial.searchTexture = o));
        const l = new Fn(r);
        ((l.name = "SMAA.Area"),
          (l.magFilter = fs),
          (l.minFilter = fs),
          (l.generateMipmaps = !1),
          (l.needsUpdate = !0),
          (l.flipY = !1),
          (this.weightsMaterial.areaTexture = l),
          this.dispatchEvent({ type: "load" }));
      }),
        a.itemStart("search"),
        a.itemStart("area"),
        n !== void 0 && r !== void 0
          ? (a.itemEnd("search"), a.itemEnd("area"))
          : typeof Image < "u" &&
            ((n = new Image()),
            (r = new Image()),
            n.addEventListener("load", () => a.itemEnd("search")),
            r.addEventListener("load", () => a.itemEnd("area")),
            (n.src = Kr),
            (r.src = qr)),
        this.applyPreset(t));
    }
    get edgesTexture() {
      return this.renderTargetEdges.texture;
    }
    getEdgesTexture() {
      return this.edgesTexture;
    }
    get weightsTexture() {
      return this.renderTargetWeights.texture;
    }
    getWeightsTexture() {
      return this.weightsTexture;
    }
    get edgeDetectionMaterial() {
      return this.edgeDetectionPass.fullscreenMaterial;
    }
    get colorEdgesMaterial() {
      return this.edgeDetectionMaterial;
    }
    getEdgeDetectionMaterial() {
      return this.edgeDetectionMaterial;
    }
    get weightsMaterial() {
      return this.weightsPass.fullscreenMaterial;
    }
    getWeightsMaterial() {
      return this.weightsMaterial;
    }
    setEdgeDetectionThreshold(e) {
      this.edgeDetectionMaterial.edgeDetectionThreshold = e;
    }
    setOrthogonalSearchSteps(e) {
      this.weightsMaterial.orthogonalSearchSteps = e;
    }
    applyPreset(e) {
      const t = this.edgeDetectionMaterial,
        i = this.weightsMaterial;
      switch (e) {
        case rs.LOW:
          ((t.edgeDetectionThreshold = 0.15),
            (i.orthogonalSearchSteps = 4),
            (i.diagonalDetection = !1),
            (i.cornerDetection = !1));
          break;
        case rs.MEDIUM:
          ((t.edgeDetectionThreshold = 0.1),
            (i.orthogonalSearchSteps = 8),
            (i.diagonalDetection = !1),
            (i.cornerDetection = !1));
          break;
        case rs.HIGH:
          ((t.edgeDetectionThreshold = 0.1),
            (i.orthogonalSearchSteps = 16),
            (i.diagonalSearchSteps = 8),
            (i.cornerRounding = 25),
            (i.diagonalDetection = !0),
            (i.cornerDetection = !0));
          break;
        case rs.ULTRA:
          ((t.edgeDetectionThreshold = 0.05),
            (i.orthogonalSearchSteps = 32),
            (i.diagonalSearchSteps = 16),
            (i.cornerRounding = 25),
            (i.diagonalDetection = !0),
            (i.cornerDetection = !0));
          break;
      }
    }
    setDepthTexture(e, t = wi) {
      ((this.edgeDetectionMaterial.depthBuffer = e),
        (this.edgeDetectionMaterial.depthPacking = t));
    }
    update(e, t, i) {
      (this.clearPass.render(e, this.renderTargetEdges),
        this.edgeDetectionPass.render(e, t, this.renderTargetEdges),
        this.weightsPass.render(
          e,
          this.renderTargetEdges,
          this.renderTargetWeights,
        ));
    }
    setSize(e, t) {
      (this.edgeDetectionMaterial.setSize(e, t),
        this.weightsMaterial.setSize(e, t),
        this.renderTargetEdges.setSize(e, t),
        this.renderTargetWeights.setSize(e, t));
    }
    dispose() {
      const { searchTexture: e, areaTexture: t } = this.weightsMaterial;
      (e !== null && t !== null && (e.dispose(), t.dispose()), super.dispose());
    }
    static get searchImageDataURL() {
      return Kr;
    }
    static get areaImageDataURL() {
      return qr;
    }
  },
  Jc = `#include <packing>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
uniform lowp sampler2D luminanceBuffer0;uniform lowp sampler2D luminanceBuffer1;uniform float minLuminance;uniform float deltaTime;uniform float tau;varying vec2 vUv;void main(){float l0=unpackRGBAToFloat(texture2D(luminanceBuffer0,vUv));
#if __VERSION__ < 300
float l1=texture2DLodEXT(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#else
float l1=textureLod(luminanceBuffer1,vUv,MIP_LEVEL_1X1).r;
#endif
l0=max(minLuminance,l0);l1=max(minLuminance,l1);float adaptedLum=l0+(l1-l0)*(1.0-exp(-deltaTime*tau));gl_FragColor=(adaptedLum==1.0)?vec4(1.0):packFloatToRGBA(adaptedLum);}`,
  Zc = class extends _e {
    constructor() {
      super({
        name: "AdaptiveLuminanceMaterial",
        defines: { MIP_LEVEL_1X1: "0.0" },
        uniforms: {
          luminanceBuffer0: new j(null),
          luminanceBuffer1: new j(null),
          minLuminance: new j(0.01),
          deltaTime: new j(0),
          tau: new j(1),
        },
        extensions: { shaderTextureLOD: !0 },
        blending: ai,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        fragmentShader: Jc,
        vertexShader: Dn,
      });
    }
    set luminanceBuffer0(e) {
      this.uniforms.luminanceBuffer0.value = e;
    }
    setLuminanceBuffer0(e) {
      this.uniforms.luminanceBuffer0.value = e;
    }
    set luminanceBuffer1(e) {
      this.uniforms.luminanceBuffer1.value = e;
    }
    setLuminanceBuffer1(e) {
      this.uniforms.luminanceBuffer1.value = e;
    }
    set mipLevel1x1(e) {
      ((this.defines.MIP_LEVEL_1X1 = e.toFixed(1)), (this.needsUpdate = !0));
    }
    setMipLevel1x1(e) {
      this.mipLevel1x1 = e;
    }
    set deltaTime(e) {
      this.uniforms.deltaTime.value = e;
    }
    setDeltaTime(e) {
      this.uniforms.deltaTime.value = e;
    }
    get minLuminance() {
      return this.uniforms.minLuminance.value;
    }
    set minLuminance(e) {
      this.uniforms.minLuminance.value = e;
    }
    getMinLuminance() {
      return this.uniforms.minLuminance.value;
    }
    setMinLuminance(e) {
      this.uniforms.minLuminance.value = e;
    }
    get adaptationRate() {
      return this.uniforms.tau.value;
    }
    set adaptationRate(e) {
      this.uniforms.tau.value = e;
    }
    getAdaptationRate() {
      return this.uniforms.tau.value;
    }
    setAdaptationRate(e) {
      this.uniforms.tau.value = e;
    }
  },
  $c = class extends bt {
    constructor(e, { minLuminance: t = 0.01, adaptationRate: i = 1 } = {}) {
      (super("AdaptiveLuminancePass"),
        (this.fullscreenMaterial = new Zc()),
        (this.needsSwap = !1),
        (this.renderTargetPrevious = new Bt(1, 1, {
          minFilter: hs,
          magFilter: hs,
          depthBuffer: !1,
        })),
        (this.renderTargetPrevious.texture.name = "Luminance.Previous"));
      const s = this.fullscreenMaterial;
      ((s.luminanceBuffer0 = this.renderTargetPrevious.texture),
        (s.luminanceBuffer1 = e),
        (s.minLuminance = t),
        (s.adaptationRate = i),
        (this.renderTargetAdapted = this.renderTargetPrevious.clone()),
        (this.renderTargetAdapted.texture.name = "Luminance.Adapted"),
        (this.copyPass = new Ua(this.renderTargetPrevious, !1)));
    }
    get texture() {
      return this.renderTargetAdapted.texture;
    }
    getTexture() {
      return this.renderTargetAdapted.texture;
    }
    set mipLevel1x1(e) {
      this.fullscreenMaterial.mipLevel1x1 = e;
    }
    get adaptationRate() {
      return this.fullscreenMaterial.adaptationRate;
    }
    set adaptationRate(e) {
      this.fullscreenMaterial.adaptationRate = e;
    }
    render(e, t, i, s, n) {
      ((this.fullscreenMaterial.deltaTime = s),
        e.setRenderTarget(
          this.renderToScreen ? null : this.renderTargetAdapted,
        ),
        e.render(this.scene, this.camera),
        this.copyPass.render(e, this.renderTargetAdapted));
    }
  },
  eu = `#include <tonemapping_pars_fragment>
uniform float whitePoint;
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
uniform float middleGrey;
#if TONE_MAPPING_MODE == 3
uniform lowp sampler2D luminanceBuffer;
#else
uniform float averageLuminance;
#endif
vec3 Reinhard2ToneMapping(vec3 color){color*=toneMappingExposure;float l=luminance(color);
#if TONE_MAPPING_MODE == 3
float lumAvg=unpackRGBAToFloat(texture2D(luminanceBuffer,vec2(0.5)));
#else
float lumAvg=averageLuminance;
#endif
float lumScaled=(l*middleGrey)/max(lumAvg,1e-6);float lumCompressed=lumScaled*(1.0+lumScaled/(whitePoint*whitePoint));lumCompressed/=(1.0+lumScaled);return clamp(lumCompressed*color,0.0,1.0);}
#elif TONE_MAPPING_MODE == 4
#define A 0.15
#define B 0.50
#define C 0.10
#define D 0.20
#define E 0.02
#define F 0.30
vec3 Uncharted2Helper(const in vec3 x){return((x*(A*x+C*B)+D*E)/(x*(A*x+B)+D*F))-E/F;}vec3 Uncharted2ToneMapping(vec3 color){color*=toneMappingExposure;return clamp(Uncharted2Helper(color)/Uncharted2Helper(vec3(whitePoint)),0.0,1.0);}
#endif
void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){
#if TONE_MAPPING_MODE == 2 || TONE_MAPPING_MODE == 3
outputColor=vec4(Reinhard2ToneMapping(inputColor.rgb),inputColor.a);
#elif TONE_MAPPING_MODE == 4
outputColor=vec4(Uncharted2ToneMapping(inputColor.rgb),inputColor.a);
#else
outputColor=vec4(toneMapping(inputColor.rgb),inputColor.a);
#endif
}`,
  tu = class extends Sr {
    constructor({
      blendFunction: e = Z.SRC,
      adaptive: t = !1,
      mode: i = t ? xt.REINHARD2_ADAPTIVE : xt.AGX,
      resolution: s = 256,
      maxLuminance: n = 4,
      whitePoint: r = n,
      middleGrey: a = 0.6,
      minLuminance: o = 0.01,
      averageLuminance: l = 1,
      adaptationRate: d = 1,
    } = {}) {
      (super("ToneMappingEffect", eu, {
        blendFunction: e,
        uniforms: new Map([
          ["luminanceBuffer", new j(null)],
          ["maxLuminance", new j(n)],
          ["whitePoint", new j(r)],
          ["middleGrey", new j(a)],
          ["averageLuminance", new j(l)],
        ]),
      }),
        (this.renderTargetLuminance = new Bt(1, 1, {
          minFilter: sl,
          depthBuffer: !1,
        })),
        (this.renderTargetLuminance.texture.generateMipmaps = !0),
        (this.renderTargetLuminance.texture.name = "Luminance"),
        (this.luminancePass = new Va({
          renderTarget: this.renderTargetLuminance,
        })),
        (this.adaptiveLuminancePass = new $c(this.luminancePass.texture, {
          minLuminance: o,
          adaptationRate: d,
        })),
        (this.uniforms.get("luminanceBuffer").value =
          this.adaptiveLuminancePass.texture),
        (this.resolution = s),
        (this.mode = i));
    }
    get mode() {
      return Number(this.defines.get("TONE_MAPPING_MODE"));
    }
    set mode(e) {
      if (this.mode === e) return;
      const i =
        Tn.replace(/\D+/g, "") >= 168
          ? "CineonToneMapping(texel)"
          : "OptimizedCineonToneMapping(texel)";
      switch (
        (this.defines.clear(),
        this.defines.set("TONE_MAPPING_MODE", e.toFixed(0)),
        e)
      ) {
        case xt.LINEAR:
          this.defines.set("toneMapping(texel)", "LinearToneMapping(texel)");
          break;
        case xt.REINHARD:
          this.defines.set("toneMapping(texel)", "ReinhardToneMapping(texel)");
          break;
        case xt.CINEON:
        case xt.OPTIMIZED_CINEON:
          this.defines.set("toneMapping(texel)", i);
          break;
        case xt.ACES_FILMIC:
          this.defines.set(
            "toneMapping(texel)",
            "ACESFilmicToneMapping(texel)",
          );
          break;
        case xt.AGX:
          this.defines.set("toneMapping(texel)", "AgXToneMapping(texel)");
          break;
        case xt.NEUTRAL:
          this.defines.set("toneMapping(texel)", "NeutralToneMapping(texel)");
          break;
        default:
          this.defines.set("toneMapping(texel)", "texel");
          break;
      }
      ((this.adaptiveLuminancePass.enabled = e === xt.REINHARD2_ADAPTIVE),
        this.setChanged());
    }
    getMode() {
      return this.mode;
    }
    setMode(e) {
      this.mode = e;
    }
    get whitePoint() {
      return this.uniforms.get("whitePoint").value;
    }
    set whitePoint(e) {
      this.uniforms.get("whitePoint").value = e;
    }
    get middleGrey() {
      return this.uniforms.get("middleGrey").value;
    }
    set middleGrey(e) {
      this.uniforms.get("middleGrey").value = e;
    }
    get averageLuminance() {
      return this.uniforms.get("averageLuminance").value;
    }
    set averageLuminance(e) {
      this.uniforms.get("averageLuminance").value = e;
    }
    get adaptiveLuminanceMaterial() {
      return this.adaptiveLuminancePass.fullscreenMaterial;
    }
    getAdaptiveLuminanceMaterial() {
      return this.adaptiveLuminanceMaterial;
    }
    get resolution() {
      return this.luminancePass.resolution.width;
    }
    set resolution(e) {
      const t = Math.max(0, Math.ceil(Math.log2(e))),
        i = Math.pow(2, t);
      (this.luminancePass.resolution.setPreferredSize(i, i),
        (this.adaptiveLuminanceMaterial.mipLevel1x1 = t));
    }
    getResolution() {
      return this.resolution;
    }
    setResolution(e) {
      this.resolution = e;
    }
    get adaptive() {
      return this.mode === xt.REINHARD2_ADAPTIVE;
    }
    set adaptive(e) {
      this.mode = e ? xt.REINHARD2_ADAPTIVE : xt.REINHARD2;
    }
    get adaptationRate() {
      return this.adaptiveLuminanceMaterial.adaptationRate;
    }
    set adaptationRate(e) {
      this.adaptiveLuminanceMaterial.adaptationRate = e;
    }
    get distinction() {
      return (console.warn(this.name, "distinction was removed."), 1);
    }
    set distinction(e) {
      console.warn(this.name, "distinction was removed.");
    }
    update(e, t, i) {
      this.adaptiveLuminancePass.enabled &&
        (this.luminancePass.render(e, t),
        this.adaptiveLuminancePass.render(e, null, null, i));
    }
    initialize(e, t, i) {
      this.adaptiveLuminancePass.initialize(e, t, i);
    }
  },
  iu = `#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,
  su =
    "uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",
  nu = class extends _e {
    constructor(e, t, i, s, n = !1) {
      (super({
        name: "EffectMaterial",
        defines: {
          THREE_REVISION: Tn.replace(/\D+/g, ""),
          DEPTH_PACKING: "0",
          ENCODE_OUTPUT: "1",
        },
        uniforms: {
          inputBuffer: new j(null),
          depthBuffer: new j(null),
          resolution: new j(new ze()),
          texelSize: new j(new ze()),
          cameraNear: new j(0.3),
          cameraFar: new j(1e3),
          aspect: new j(1),
          time: new j(0),
        },
        blending: ai,
        toneMapped: !1,
        depthWrite: !1,
        depthTest: !1,
        dithering: n,
      }),
        e && this.setShaderParts(e),
        t && this.setDefines(t),
        i && this.setUniforms(i),
        this.copyCameraSettings(s));
    }
    set inputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    setInputBuffer(e) {
      this.uniforms.inputBuffer.value = e;
    }
    get depthBuffer() {
      return this.uniforms.depthBuffer.value;
    }
    set depthBuffer(e) {
      this.uniforms.depthBuffer.value = e;
    }
    get depthPacking() {
      return Number(this.defines.DEPTH_PACKING);
    }
    set depthPacking(e) {
      ((this.defines.DEPTH_PACKING = e.toFixed(0)), (this.needsUpdate = !0));
    }
    setDepthBuffer(e, t = wi) {
      ((this.depthBuffer = e), (this.depthPacking = t));
    }
    setShaderData(e) {
      (this.setShaderParts(e.shaderParts),
        this.setDefines(e.defines),
        this.setUniforms(e.uniforms),
        this.setExtensions(e.extensions));
    }
    setShaderParts(e) {
      return (
        (this.fragmentShader = iu
          .replace(fe.FRAGMENT_HEAD, e.get(fe.FRAGMENT_HEAD) || "")
          .replace(fe.FRAGMENT_MAIN_UV, e.get(fe.FRAGMENT_MAIN_UV) || "")
          .replace(
            fe.FRAGMENT_MAIN_IMAGE,
            e.get(fe.FRAGMENT_MAIN_IMAGE) || "",
          )),
        (this.vertexShader = su
          .replace(fe.VERTEX_HEAD, e.get(fe.VERTEX_HEAD) || "")
          .replace(
            fe.VERTEX_MAIN_SUPPORT,
            e.get(fe.VERTEX_MAIN_SUPPORT) || "",
          )),
        (this.needsUpdate = !0),
        this
      );
    }
    setDefines(e) {
      for (const t of e.entries()) this.defines[t[0]] = t[1];
      return ((this.needsUpdate = !0), this);
    }
    setUniforms(e) {
      for (const t of e.entries()) this.uniforms[t[0]] = t[1];
      return this;
    }
    setExtensions(e) {
      this.extensions = {};
      for (const t of e) this.extensions[t] = !0;
      return this;
    }
    get encodeOutput() {
      return this.defines.ENCODE_OUTPUT !== void 0;
    }
    set encodeOutput(e) {
      this.encodeOutput !== e &&
        (e
          ? (this.defines.ENCODE_OUTPUT = "1")
          : delete this.defines.ENCODE_OUTPUT,
        (this.needsUpdate = !0));
    }
    isOutputEncodingEnabled(e) {
      return this.encodeOutput;
    }
    setOutputEncodingEnabled(e) {
      this.encodeOutput = e;
    }
    get time() {
      return this.uniforms.time.value;
    }
    set time(e) {
      this.uniforms.time.value = e;
    }
    setDeltaTime(e) {
      this.uniforms.time.value += e;
    }
    adoptCameraSettings(e) {
      this.copyCameraSettings(e);
    }
    copyCameraSettings(e) {
      e &&
        ((this.uniforms.cameraNear.value = e.near),
        (this.uniforms.cameraFar.value = e.far),
        e instanceof Ar
          ? (this.defines.PERSPECTIVE_CAMERA = "1")
          : delete this.defines.PERSPECTIVE_CAMERA,
        (this.needsUpdate = !0));
    }
    setSize(e, t) {
      const i = this.uniforms;
      (i.resolution.value.set(e, t),
        i.texelSize.value.set(1 / e, 1 / t),
        (i.aspect.value = e / t));
    }
    static get Section() {
      return fe;
    }
  };
function Jr(e, t, i) {
  for (const s of t) {
    const n = "$1" + e + s.charAt(0).toUpperCase() + s.slice(1),
      r = new RegExp("([^\\.])(\\b" + s + "\\b)", "g");
    for (const a of i.entries())
      a[1] !== null && i.set(a[0], a[1].replace(r, n));
  }
}
function ru(e, t, i) {
  let s = t.getFragmentShader(),
    n = t.getVertexShader();
  const r = s !== void 0 && /mainImage/.test(s),
    a = s !== void 0 && /mainUv/.test(s);
  if (((i.attributes |= t.getAttributes()), s === void 0))
    throw new Error(`Missing fragment shader (${t.name})`);
  if (a && (i.attributes & ii.CONVOLUTION) !== 0)
    throw new Error(
      `Effects that transform UVs are incompatible with convolution effects (${t.name})`,
    );
  if (!r && !a)
    throw new Error(`Could not find mainImage or mainUv function (${t.name})`);
  {
    const o = /\w+\s+(\w+)\([\w\s,]*\)\s*{/g,
      l = i.shaderParts;
    let d = l.get(fe.FRAGMENT_HEAD) || "",
      u = l.get(fe.FRAGMENT_MAIN_UV) || "",
      c = l.get(fe.FRAGMENT_MAIN_IMAGE) || "",
      p = l.get(fe.VERTEX_HEAD) || "",
      f = l.get(fe.VERTEX_MAIN_SUPPORT) || "";
    const h = new Set(),
      F = new Set();
    if (
      (a &&
        ((u += `	${e}MainUv(UV);
`),
        (i.uvTransformation = !0)),
      n !== null && /mainSupport/.test(n))
    ) {
      const m = /mainSupport *\([\w\s]*?uv\s*?\)/.test(n);
      ((f += `	${e}MainSupport(`),
        (f += m
          ? `vUv);
`
          : `);
`));
      for (const x of n.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))
        for (const w of x[1].split(/\s*,\s*/))
          (i.varyings.add(w), h.add(w), F.add(w));
      for (const x of n.matchAll(o)) F.add(x[1]);
    }
    for (const m of s.matchAll(o)) F.add(m[1]);
    for (const m of t.defines.keys()) F.add(m.replace(/\([\w\s,]*\)/g, ""));
    for (const m of t.uniforms.keys()) F.add(m);
    (F.delete("while"),
      F.delete("for"),
      F.delete("if"),
      t.uniforms.forEach((m, x) =>
        i.uniforms.set(e + x.charAt(0).toUpperCase() + x.slice(1), m),
      ),
      t.defines.forEach((m, x) =>
        i.defines.set(e + x.charAt(0).toUpperCase() + x.slice(1), m),
      ));
    const v = new Map([
      ["fragment", s],
      ["vertex", n],
    ]);
    (Jr(e, F, i.defines),
      Jr(e, F, v),
      (s = v.get("fragment")),
      (n = v.get("vertex")));
    const g = t.blendMode;
    if ((i.blendModes.set(g.blendFunction, g), r)) {
      (t.inputColorSpace !== null &&
        t.inputColorSpace !== i.colorSpace &&
        (c +=
          t.inputColorSpace === Ue
            ? `color0 = sRGBTransferOETF(color0);
	`
            : `color0 = sRGBToLinear(color0);
	`),
        t.outputColorSpace !== Ha
          ? (i.colorSpace = t.outputColorSpace)
          : t.inputColorSpace !== null && (i.colorSpace = t.inputColorSpace));
      const m = /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;
      ((c += `${e}MainImage(color0, UV, `),
        (i.attributes & ii.DEPTH) !== 0 &&
          m.test(s) &&
          ((c += "depth, "), (i.readDepth = !0)),
        (c += `color1);
	`));
      const x = e + "BlendOpacity";
      (i.uniforms.set(x, g.opacity),
        (c += `color0 = blend${g.blendFunction}(color0, color1, ${x});

	`),
        (d += `uniform float ${x};

`));
    }
    if (
      ((d +=
        s +
        `
`),
      n !== null &&
        (p +=
          n +
          `
`),
      l.set(fe.FRAGMENT_HEAD, d),
      l.set(fe.FRAGMENT_MAIN_UV, u),
      l.set(fe.FRAGMENT_MAIN_IMAGE, c),
      l.set(fe.VERTEX_HEAD, p),
      l.set(fe.VERTEX_MAIN_SUPPORT, f),
      t.extensions !== null)
    )
      for (const m of t.extensions) i.extensions.add(m);
  }
}
var Rn = class extends bt {
  constructor(e, ...t) {
    (super("EffectPass"),
      (this.fullscreenMaterial = new nu(null, null, null, e)),
      (this.listener = (i) => this.handleEvent(i)),
      (this.effects = []),
      this.setEffects(t),
      (this.skipRendering = !1),
      (this.minTime = 1),
      (this.maxTime = Number.POSITIVE_INFINITY),
      (this.timeScale = 1));
  }
  set mainScene(e) {
    for (const t of this.effects) t.mainScene = e;
  }
  set mainCamera(e) {
    this.fullscreenMaterial.copyCameraSettings(e);
    for (const t of this.effects) t.mainCamera = e;
  }
  get encodeOutput() {
    return this.fullscreenMaterial.encodeOutput;
  }
  set encodeOutput(e) {
    this.fullscreenMaterial.encodeOutput = e;
  }
  get dithering() {
    return this.fullscreenMaterial.dithering;
  }
  set dithering(e) {
    const t = this.fullscreenMaterial;
    ((t.dithering = e), (t.needsUpdate = !0));
  }
  setEffects(e) {
    for (const t of this.effects)
      t.removeEventListener("change", this.listener);
    this.effects = e.sort((t, i) => i.attributes - t.attributes);
    for (const t of this.effects) t.addEventListener("change", this.listener);
  }
  updateMaterial() {
    const e = new Rd();
    let t = 0;
    for (const a of this.effects)
      if (a.blendMode.blendFunction === Z.DST)
        e.attributes |= a.getAttributes() & ii.DEPTH;
      else {
        if ((e.attributes & a.getAttributes() & ii.CONVOLUTION) !== 0)
          throw new Error(`Convolution effects cannot be merged (${a.name})`);
        ru("e" + t++, a, e);
      }
    let i = e.shaderParts.get(fe.FRAGMENT_HEAD),
      s = e.shaderParts.get(fe.FRAGMENT_MAIN_IMAGE),
      n = e.shaderParts.get(fe.FRAGMENT_MAIN_UV);
    const r = /\bblend\b/g;
    for (const a of e.blendModes.values())
      i +=
        a.getShaderCode().replace(r, `blend${a.blendFunction}`) +
        `
`;
    ((e.attributes & ii.DEPTH) !== 0
      ? (e.readDepth &&
          (s =
            `float depth = readDepth(UV);

	` + s),
        (this.needsDepthTexture = this.getDepthTexture() === null))
      : (this.needsDepthTexture = !1),
      e.colorSpace === Ue &&
        (s += `color0 = sRGBToLinear(color0);
	`),
      e.uvTransformation
        ? ((n =
            `vec2 transformedUv = vUv;
` + n),
          e.defines.set("UV", "transformedUv"))
        : e.defines.set("UV", "vUv"),
      e.shaderParts.set(fe.FRAGMENT_HEAD, i),
      e.shaderParts.set(fe.FRAGMENT_MAIN_IMAGE, s),
      e.shaderParts.set(fe.FRAGMENT_MAIN_UV, n));
    for (const [a, o] of e.shaderParts)
      o !== null &&
        e.shaderParts.set(
          a,
          o.trim().replace(
            /^#/,
            `
#`,
          ),
        );
    ((this.skipRendering = t === 0),
      (this.needsSwap = !this.skipRendering),
      this.fullscreenMaterial.setShaderData(e));
  }
  recompile() {
    this.updateMaterial();
  }
  getDepthTexture() {
    return this.fullscreenMaterial.depthBuffer;
  }
  setDepthTexture(e, t = wi) {
    ((this.fullscreenMaterial.depthBuffer = e),
      (this.fullscreenMaterial.depthPacking = t));
    for (const i of this.effects) i.setDepthTexture(e, t);
  }
  render(e, t, i, s, n) {
    for (const r of this.effects) r.update(e, t, s);
    if (!this.skipRendering || this.renderToScreen) {
      const r = this.fullscreenMaterial;
      ((r.inputBuffer = t.texture),
        (r.time += s * this.timeScale),
        e.setRenderTarget(this.renderToScreen ? null : i),
        e.render(this.scene, this.camera));
    }
  }
  setSize(e, t) {
    this.fullscreenMaterial.setSize(e, t);
    for (const i of this.effects) i.setSize(e, t);
  }
  initialize(e, t, i) {
    this.renderer = e;
    for (const s of this.effects) s.initialize(e, t, i);
    (this.updateMaterial(),
      i !== void 0 &&
        i !== Ii &&
        (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1"));
  }
  dispose() {
    super.dispose();
    for (const e of this.effects)
      (e.removeEventListener("change", this.listener), e.dispose());
  }
  handleEvent(e) {
    switch (e.type) {
      case "change":
        this.recompile();
        break;
    }
  }
};
const au = async (e, t, i, s) => {
    const n = new zd(e, { frameBufferType: hl, multisampling: 0 });
    n.addPass(new ja(t, i));
    const r = new tu({
        blendFunction: Z.SET,
        mode: xt.NEUTRAL,
        exposure: 2.1,
        whitePoint: 1.89,
        middleGrey: 7,
        minLuminance: 1,
        maxLuminance: 6,
        width: 512,
      }),
      a = new Nc(t, i, {
        mipmapBlur: !0,
        luminanceThreshold: 0,
        luminanceSmoothing: 0,
        levels: 7,
        intensity: 1,
        radius: 0.99,
        kernelSize: kn.HUGE,
        blendFunction: Z.SCREEN,
      }),
      o = new Rn(i, a),
      l = {
        intensity: a.intensity,
        radius: a.mipmapBlurPass.radius,
        luminance: {
          filter: a.luminancePass.enabled,
          threshold: a.luminanceMaterial.threshold,
          smoothing: a.luminanceMaterial.smoothing,
        },
        selection: { inverted: a.inverted, "ignore bg": a.ignoreBackground },
        opacity: a.blendMode.opacity.value,
        "blend mode": a.blendMode.blendFunction,
      },
      d = s.addFolder("Selective Bloom Effect");
    (d.add(l, "intensity", 0, 2).onChange((c) => {
      a.intensity = c;
    }),
      d.add(l, "radius", 0, 2).onChange((c) => {
        a.mipmapBlurPass.radius = c;
      }),
      d.add(l.luminance, "filter").onChange((c) => {
        a.luminancePass.enabled = c;
      }),
      d.add(l.luminance, "threshold", 0, 1).onChange((c) => {
        a.luminanceMaterial.threshold = Number(c);
      }),
      d.add(l.luminance, "smoothing", 0, 1).onChange((c) => {
        a.luminanceMaterial.smoothing = Number(c);
      }),
      d.add(l.selection, "inverted").onChange((c) => {
        a.inverted = c;
      }),
      d.add(l.selection, "ignore bg").onChange((c) => {
        a.ignoreBackground = c;
      }),
      d.add(l, "opacity", 0, 1).onChange((c) => {
        a.blendMode.opacity.value = c;
      }),
      d.add(l, "blend mode", Z).onChange((c) => {
        a.blendMode.blendFunction = Number(c);
      }),
      n.addPass(new Rn(i, r)),
      n.addPass(o),
      n.addPass(new Rn(i, new qc({ preset: rs.HIGH }))));
    const u = () => {
      n.setSize(window.innerWidth, window.innerHeight);
    };
    return (
      window.addEventListener("resize", u),
      { postProcessing: n, selectiveBloomEffect: a }
    );
  },
  ou = (
    e,
    t,
    {
      pointerElement: i = document.body,
      planeDistance: s = 7,
      lineColor: n = 16777215,
      opacity: r = 0,
      thickness: a = 0.005,
      lerpFactor: o = 0.2,
      circleRadius: l = 0.015,
    } = {},
  ) => {
    let d = {},
      u = !1;
    if (typeof window < "u" && typeof ht == "function")
      try {
        ((d = ht()),
          (u = !!d?.isMobile || !!(d?.isRealTablet && d.isRealTablet?.value)));
      } catch {
        u = "ontouchstart" in window || navigator.maxTouchPoints > 0;
      }
    else
      u =
        typeof window < "u" &&
        ("ontouchstart" in window || navigator.maxTouchPoints > 0);
    const c = new Pa({ color: n, transparent: !0, opacity: r, depthWrite: !1 }),
      p = new un(new Ur(10, 1), c),
      f = new un(new Ur(1, 10), c),
      h = new gl(l, 32),
      F = new un(h, c),
      v = new ml();
    ((v.renderOrder = -10),
      (v.visible = !u),
      v.add(p),
      v.add(f),
      v.add(F),
      e.add(v),
      setTimeout(() => {
        (v.position.set(0, 4.18, -5), Q());
      }, 400));
    const g = new ze(),
      m = new vl(),
      x = new xl(),
      w = new me(),
      _ = new me(),
      T = new me(),
      A = new me(),
      k = new me();
    let S = !1,
      y = !0,
      B = !1;
    const M = () => {
        (t.getWorldDirection(k),
          w.copy(k).normalize(),
          _.copy(t.position).addScaledVector(w, s),
          x.setFromNormalAndCoplanarPoint(w, _));
      },
      Q = () => {
        const pe = 2 * s * Math.tan(ji.degToRad(t.fov * 0.5)),
          de = pe * t.aspect;
        (p.scale.set(de, a, 1), f.scale.set(a, pe, 1), (y = !1));
      },
      K = (pe) => {
        if (!i) return;
        const de = i.getBoundingClientRect(),
          ye = ((pe.clientX - de.left) / de.width) * 2 - 1,
          Ke = -(((pe.clientY - de.top) / de.height) * 2 - 1);
        (g.set(ye, Ke), (S = !0));
      },
      oe = (pe) => {
        u || B || ((v.visible = !0), K(pe));
      },
      R = (pe) => {
        u || B || (v.visible || (v.visible = !0), K(pe));
      },
      N = () => {
        ((S = !1), (v.visible = !1));
      },
      C = () => {
        !i || u || B || (v.visible = !u);
      },
      ee = (pe) => {
        if (!i) return;
        const de = i.getBoundingClientRect();
        pe.clientX >= de.left &&
        pe.clientX <= de.right &&
        pe.clientY >= de.top &&
        pe.clientY <= de.bottom
          ? (S || (v.visible = !0), R(pe))
          : S && N();
      },
      b = (pe) => {
        if (!i) return;
        const de = i.getBoundingClientRect();
        pe.clientX >= de.left &&
        pe.clientX <= de.right &&
        pe.clientY >= de.top &&
        pe.clientY <= de.bottom
          ? (S || (v.visible = !0), R(pe))
          : S && N();
      };
    i &&
      typeof window < "u" &&
      (window.addEventListener("pointermove", ee, { passive: !0 }),
      window.addEventListener("mousemove", b, { passive: !0 }),
      i.addEventListener("pointerenter", oe, { passive: !0 }),
      i.addEventListener("pointermove", R, { passive: !0 }),
      i.addEventListener("pointerleave", N, { passive: !0 }),
      i.addEventListener("pointercancel", N, { passive: !0 }),
      i.addEventListener("mousemove", R, { passive: !0 }),
      C());
    let Fe = !1;
    return {
      update: () => {
        B ||
          !v.visible ||
          !S ||
          (y && Q(),
          Fe || ((Fe = !0), (c.opacity = ji.lerp(0, 0.3, 1))),
          M(),
          v.quaternion.copy(t.quaternion),
          m.setFromCamera(g, t),
          m.ray.intersectPlane(x, T) && (A.copy(T), v.position.lerp(A, o)));
      },
      resize: () => {
        y = !0;
      },
      dispose: () => {
        B ||
          ((B = !0),
          typeof window < "u" &&
            (window.removeEventListener("pointermove", ee),
            window.removeEventListener("mousemove", b)),
          i &&
            (i.removeEventListener("pointerenter", oe),
            i.removeEventListener("pointermove", R),
            i.removeEventListener("pointerleave", N),
            i.removeEventListener("pointercancel", N),
            i.removeEventListener("mousemove", R)),
          v.remove(p),
          v.remove(f),
          v.remove(F),
          e.remove(v),
          p.geometry.dispose(),
          f.geometry.dispose(),
          F.geometry.dispose(),
          c.dispose());
      },
    };
  },
  lu = {
    __name: "SceneComponentsVibrantScene",
    setup(e) {
      const t = Xe(),
        i = $(null),
        s = $(!1),
        n = $(!1);
      let r,
        a,
        o,
        l,
        d,
        u,
        c,
        p,
        f,
        h,
        F,
        v,
        g,
        m,
        x,
        w,
        _,
        T,
        A,
        k,
        S,
        y,
        B,
        M;
      t.$onAction(({ name: q, args: U }) => {
        (q === "setHoverOrgan" && U[0] === "Neurology" && p?.showBrain(U[1]),
          q === "setHoverOrgan" &&
            U[0] === "Cardiovascular" &&
            F?.showHeart(U[1]),
          q === "setHoverOrgan" &&
            U[0] === "Toxins" &&
            (v?.showLiver(U[1]), _?.showKidneys(U[1])),
          q === "setHoverOrgan" &&
            U[0] === "Gut" &&
            (f?.showIntestine(U[1]),
            g?.showStomach(U[1]),
            w?.showGalbladder(U[1]),
            _?.showKidneys(U[1]),
            v?.showLiver(U[1]),
            T?.showPancreas(U[1]),
            A?.showGlands(U[1])),
          q === "setHoverOrgan" &&
            U[0] === "Hormones" &&
            (p?.showBrain(U[1]),
            _?.showKidneys(U[1]),
            A?.showGlands(U[1]),
            k?.showThyroid(U[1])),
          q === "setHoverOrgan" && U[0] === "Genetics" && m?.showDNA(U[1]),
          q === "setHoverOrgan" && U[0] === "Longevity" && x?.showCell(U[1]),
          q === "cameraTo" && U[0] === "Neurology" && Q(),
          q === "cameraTo" && U[0] === "Cardiovascular" && K(),
          q === "cameraTo" && U[0] === "Toxins" && oe(),
          q === "cameraTo" && U[0] === "Gut" && R(),
          q === "cameraTo" && U[0] === "Hormones" && N(),
          q === "cameraTo" && U[0] === "Genetics" && ee(),
          q === "cameraTo" && U[0] === "Longevity" && C(),
          q === "setActiveState" &&
            U[0] === "slider" &&
            (h?.secondSkinState(), (s.value = !0), (n.value = !1)),
          q === "setActiveState" &&
            U[0] === "list" &&
            (h?.firstSkinState(),
            h?.cameraToSkin(),
            (s.value = !1),
            (n.value = !0),
            b()),
          q === "setActiveState" &&
            U[0] === "story" &&
            (h?.thirdSkinState(),
            (s.value = !1),
            (n.value = !1),
            t.getActiveOrgan === "Neurology" && p?.cameraToBrainStory(),
            t.getActiveOrgan === "Cardiovascular" && F?.cameraToHeartStory(),
            t.getActiveOrgan === "Toxins" && v?.cameraToLiverStory(),
            t.getActiveOrgan === "Gut" && f?.cameraToIntestineStory(),
            t.getActiveOrgan === "Hormones" && p?.cameraToBrainStoryHormones(),
            t.getActiveOrgan === "Genetics" && m?.cameraToDNAStory(),
            t.getActiveOrgan === "Longevity" && x?.cameraToCellStory()),
          q === "setBodySelected" &&
            (U[0] === "male" ? h?.showModel("male") : h?.showModel("female")));
      });
      const Q = () => {
          (p?.cameraToBrain(),
            p?.showBrain(!0),
            p?.animateMaterial(!0),
            f?.showIntestine(!1),
            g?.showStomach(!1),
            w?.showGalbladder(!1),
            _?.showKidneys(!1),
            v?.showLiver(!1),
            T?.showPancreas(!1),
            A?.showGlands(!1),
            F?.showHeart(!1),
            m?.showDNA(!1),
            x?.showCell(!1),
            k?.showThyroid(!1),
            f?.animateMaterial(!1),
            g?.animateMaterial(!1),
            w?.animateMaterial(!1),
            _?.animateMaterial(!1),
            v?.animateMaterial(!1),
            T?.animateMaterial(!1),
            A?.animateMaterial(!1),
            F?.animateMaterial(!1),
            m?.animateMaterial(!1),
            x?.animateMaterial(!1),
            k?.animateMaterial(!1));
        },
        K = () => {
          (F?.cameraToHeart(),
            F?.showHeart(!0),
            F?.animateMaterial(!0),
            p?.showBrain(!1),
            f?.showIntestine(!1),
            g?.showStomach(!1),
            w?.showGalbladder(!1),
            _?.showKidneys(!1),
            v?.showLiver(!1),
            T?.showPancreas(!1),
            A?.showGlands(!1),
            m?.showDNA(!1),
            x?.showCell(!1),
            k?.showThyroid(!1),
            p?.animateMaterial(!1),
            f?.animateMaterial(!1),
            g?.animateMaterial(!1),
            w?.animateMaterial(!1),
            _?.animateMaterial(!1),
            v?.animateMaterial(!1),
            T?.animateMaterial(!1),
            A?.animateMaterial(!1),
            m?.animateMaterial(!1),
            x?.animateMaterial(!1),
            k?.animateMaterial(!1));
        },
        oe = () => {
          (v?.cameraToLiver(),
            v?.showLiver(!0),
            _?.showKidneys(!0),
            v?.animateMaterial(!0),
            _?.animateMaterial(!0),
            p?.showBrain(!1),
            f?.showIntestine(!1),
            g?.showStomach(!1),
            w?.showGalbladder(!1),
            T?.showPancreas(!1),
            A?.showGlands(!1),
            F?.showHeart(!1),
            m?.showDNA(!1),
            x?.showCell(!1),
            k?.showThyroid(!1),
            p?.animateMaterial(!1),
            f?.animateMaterial(!1),
            g?.animateMaterial(!1),
            w?.animateMaterial(!1),
            T?.animateMaterial(!1),
            A?.animateMaterial(!1),
            F?.animateMaterial(!1),
            m?.animateMaterial(!1),
            x?.animateMaterial(!1),
            k?.animateMaterial(!1));
        },
        R = () => {
          (f?.cameraToIntestine(),
            f?.showIntestine(!0),
            g?.showStomach(!0),
            w?.showGalbladder(!0),
            _?.showKidneys(!0),
            v?.showLiver(!0),
            T?.showPancreas(!0),
            A?.showGlands(!0),
            f?.animateMaterial(!0),
            g?.animateMaterial(!0),
            w?.animateMaterial(!0),
            _?.animateMaterial(!0),
            v?.animateMaterial(!0),
            T?.animateMaterial(!0),
            A?.animateMaterial(!0),
            p?.showBrain(!1),
            F?.showHeart(!1),
            m?.showDNA(!1),
            x?.showCell(!1),
            k?.showThyroid(!1),
            p?.animateMaterial(!1),
            F?.animateMaterial(!1),
            m?.animateMaterial(!1),
            x?.animateMaterial(!1),
            k?.animateMaterial(!1));
        },
        N = () => {
          (p?.cameraToBrainHormones(),
            p?.showBrain(!0),
            _?.showKidneys(!0),
            A?.showGlands(!0),
            k?.showThyroid(!0),
            p?.animateMaterial(!0),
            _?.animateMaterial(!0),
            A?.animateMaterial(!0),
            k?.animateMaterial(!0),
            f?.showIntestine(!1),
            g?.showStomach(!1),
            w?.showGalbladder(!1),
            v?.showLiver(!1),
            T?.showPancreas(!1),
            F?.showHeart(!1),
            m?.showDNA(!1),
            x?.showCell(!1),
            f?.animateMaterial(!1),
            g?.animateMaterial(!1),
            w?.animateMaterial(!1),
            v?.animateMaterial(!1),
            T?.animateMaterial(!1),
            F?.animateMaterial(!1),
            m?.animateMaterial(!1),
            x?.animateMaterial(!1));
        },
        C = () => {
          (x?.cameraToCell(),
            x?.showCell(!0),
            x?.animateMaterial(!0),
            p?.showBrain(!1),
            f?.showIntestine(!1),
            g?.showStomach(!1),
            w?.showGalbladder(!1),
            _?.showKidneys(!1),
            v?.showLiver(!1),
            T?.showPancreas(!1),
            A?.showGlands(!1),
            F?.showHeart(!1),
            m?.showDNA(!1),
            k?.showThyroid(!1),
            p?.animateMaterial(!1),
            f?.animateMaterial(!1),
            g?.animateMaterial(!1),
            w?.animateMaterial(!1),
            _?.animateMaterial(!1),
            v?.animateMaterial(!1),
            T?.animateMaterial(!1),
            A?.animateMaterial(!1),
            F?.animateMaterial(!1),
            m?.animateMaterial(!1),
            k?.animateMaterial(!1));
        },
        ee = () => {
          (m?.cameraToDNA(),
            m?.showDNA(!0),
            m?.animateMaterial(!0),
            p?.showBrain(!1),
            f?.showIntestine(!1),
            g?.showStomach(!1),
            w?.showGalbladder(!1),
            _?.showKidneys(!1),
            v?.showLiver(!1),
            T?.showPancreas(!1),
            A?.showGlands(!1),
            F?.showHeart(!1),
            x?.showCell(!1),
            k?.showThyroid(!1),
            p?.animateMaterial(!1),
            f?.animateMaterial(!1),
            g?.animateMaterial(!1),
            w?.animateMaterial(!1),
            _?.animateMaterial(!1),
            v?.animateMaterial(!1),
            T?.animateMaterial(!1),
            A?.animateMaterial(!1),
            F?.animateMaterial(!1),
            x?.animateMaterial(!1),
            k?.animateMaterial(!1));
        },
        b = () => {
          (f?.showIntestine(!1),
            g?.showStomach(!1),
            w?.showGalbladder(!1),
            _?.showKidneys(!1),
            v?.showLiver(!1),
            T?.showPancreas(!1),
            A?.showGlands(!1),
            p?.showBrain(!1),
            F?.showHeart(!1),
            m?.showDNA(!1),
            x?.showCell(!1),
            k?.showThyroid(!1));
        };
      xs(async () => {
        const q = await rd(i.value);
        ((r = q.scene),
          (a = q.renderer),
          (o = q.camera),
          (l = q.controls),
          (d = q.gltfLoader),
          (u = q.gui),
          q.clock,
          q.world,
          (S = q.hoverOrbit),
          (B = q.texturesSSS),
          (y = (await au(a, r, o, u)).postProcessing),
          (M = ou(r, o, { pointerElement: i.value })),
          await ad(r, a),
          (p = await od(r, d, u, l, o, S, B)),
          (f = await ld(r, d, u, l, o, S, B)),
          (F = await dd(r, d, u, l, o, S, B)),
          (v = await cd(r, d, u, l, o, S, B)),
          (g = await ud(r, d, u, B)),
          (w = await Ad(r, d, u, B)),
          (A = await Ed(r, d, u, B)),
          (_ = await _d(r, d, u, B)),
          (T = await Cd(r, d, u, B)),
          (m = await Sd(r, d, u, l, o, S, B)),
          (x = await Td(r, d, u, l, o, S, B)),
          (k = await Dd(r, d, u, B)),
          await Md(r, d, u),
          (h = await pd(r, d, u, l, o, S)),
          await fd(r, d, u),
          (c = await Fd(document.querySelector(".home-page"), d, r)),
          await yd(document.querySelector(".home-page"), d, r),
          t.setSceneLoaded(!0),
          yt(),
          setTimeout(() => {
            h?.showModel("female");
          }, 700),
          P.ticker.fps(60),
          P.ticker.add(yt),
          window.addEventListener("resize", Fe));
      });
      const Fe = () => {
          if (!i.value) return;
          const q = i.value.clientWidth,
            U = i.value.clientHeight;
          ((o.aspect = q / U),
            o.updateProjectionMatrix(),
            c.setSize(window.innerWidth, window.innerHeight),
            M?.resize());
        },
        yt = () => {
          (S.update(), M?.update(), y.render(), c.render(r, o), l.update());
        };
      return (
        br(() => {
          (window.removeEventListener("resize", Fe), M?.dispose());
        }),
        (q, U) => (
          I(),
          z(
            "div",
            {
              ref_key: "container",
              ref: i,
              class: "fixed w-full h-full top-0 left-0 vibrant-scene",
            },
            null,
            512,
          )
        )
      );
    },
  },
  du = Te(lu, [["__scopeId", "data-v-270f70a7"]]),
  Zr = ri("/images/svg/sliderArrow.svg");
function $r(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function Tr(e, t) {
  (e === void 0 && (e = {}), t === void 0 && (t = {}));
  const i = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((s) => i.indexOf(s) < 0)
    .forEach((s) => {
      typeof e[s] > "u"
        ? (e[s] = t[s])
        : $r(t[s]) &&
          $r(e[s]) &&
          Object.keys(t[s]).length > 0 &&
          Tr(e[s], t[s]);
    });
}
const Ya = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function $i() {
  const e = typeof document < "u" ? document : {};
  return (Tr(e, Ya), e);
}
const cu = {
  document: Ya,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function gt() {
  const e = typeof window < "u" ? window : {};
  return (Tr(e, cu), e);
}
function uu(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function pu(e) {
  const t = e;
  Object.keys(t).forEach((i) => {
    try {
      t[i] = null;
    } catch {}
    try {
      delete t[i];
    } catch {}
  });
}
function Wa(e, t) {
  return (t === void 0 && (t = 0), setTimeout(e, t));
}
function wn() {
  return Date.now();
}
function fu(e) {
  const t = gt();
  let i;
  return (
    t.getComputedStyle && (i = t.getComputedStyle(e, null)),
    !i && e.currentStyle && (i = e.currentStyle),
    i || (i = e.style),
    i
  );
}
function hu(e, t) {
  t === void 0 && (t = "x");
  const i = gt();
  let s, n, r;
  const a = fu(e);
  return (
    i.WebKitCSSMatrix
      ? ((n = a.transform || a.webkitTransform),
        n.split(",").length > 6 &&
          (n = n
            .split(", ")
            .map((o) => o.replace(",", "."))
            .join(", ")),
        (r = new i.WebKitCSSMatrix(n === "none" ? "" : n)))
      : ((r =
          a.MozTransform ||
          a.OTransform ||
          a.MsTransform ||
          a.msTransform ||
          a.transform ||
          a
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (s = r.toString().split(","))),
    t === "x" &&
      (i.WebKitCSSMatrix
        ? (n = r.m41)
        : s.length === 16
          ? (n = parseFloat(s[12]))
          : (n = parseFloat(s[4]))),
    t === "y" &&
      (i.WebKitCSSMatrix
        ? (n = r.m42)
        : s.length === 16
          ? (n = parseFloat(s[13]))
          : (n = parseFloat(s[5]))),
    n || 0
  );
}
function qs(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function gu(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function Tt() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let i = 1; i < arguments.length; i += 1) {
    const s = i < 0 || arguments.length <= i ? void 0 : arguments[i];
    if (s != null && !gu(s)) {
      const n = Object.keys(Object(s)).filter((r) => t.indexOf(r) < 0);
      for (let r = 0, a = n.length; r < a; r += 1) {
        const o = n[r],
          l = Object.getOwnPropertyDescriptor(s, o);
        l !== void 0 &&
          l.enumerable &&
          (qs(e[o]) && qs(s[o])
            ? s[o].__swiper__
              ? (e[o] = s[o])
              : Tt(e[o], s[o])
            : !qs(e[o]) && qs(s[o])
              ? ((e[o] = {}), s[o].__swiper__ ? (e[o] = s[o]) : Tt(e[o], s[o]))
              : (e[o] = s[o]));
      }
    }
  }
  return e;
}
function Js(e, t, i) {
  e.style.setProperty(t, i);
}
function Xa(e) {
  let { swiper: t, targetPosition: i, side: s } = e;
  const n = gt(),
    r = -t.translate;
  let a = null,
    o;
  const l = t.params.speed;
  ((t.wrapperEl.style.scrollSnapType = "none"),
    n.cancelAnimationFrame(t.cssModeFrameID));
  const d = i > r ? "next" : "prev",
    u = (p, f) => (d === "next" && p >= f) || (d === "prev" && p <= f),
    c = () => {
      ((o = new Date().getTime()), a === null && (a = o));
      const p = Math.max(Math.min((o - a) / l, 1), 0),
        f = 0.5 - Math.cos(p * Math.PI) / 2;
      let h = r + f * (i - r);
      if ((u(h, i) && (h = i), t.wrapperEl.scrollTo({ [s]: h }), u(h, i))) {
        ((t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            ((t.wrapperEl.style.overflow = ""),
              t.wrapperEl.scrollTo({ [s]: h }));
          }),
          n.cancelAnimationFrame(t.cssModeFrameID));
        return;
      }
      t.cssModeFrameID = n.requestAnimationFrame(c);
    };
  c();
}
function Ka(e) {
  return (
    e.querySelector(".swiper-slide-transform") ||
    (e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform")) ||
    e
  );
}
function $t(e, t) {
  t === void 0 && (t = "");
  const i = gt(),
    s = [...e.children];
  return (
    i.HTMLSlotElement &&
      e instanceof HTMLSlotElement &&
      s.push(...e.assignedElements()),
    t ? s.filter((n) => n.matches(t)) : s
  );
}
function mu(e, t) {
  const i = [t];
  for (; i.length > 0;) {
    const s = i.shift();
    if (e === s) return !0;
    i.push(
      ...s.children,
      ...(s.shadowRoot ? s.shadowRoot.children : []),
      ...(s.assignedElements ? s.assignedElements() : []),
    );
  }
}
function vu(e, t) {
  const i = gt();
  let s = t.contains(e);
  return (
    !s &&
      i.HTMLSlotElement &&
      t instanceof HTMLSlotElement &&
      ((s = [...t.assignedElements()].includes(e)), s || (s = mu(e, t))),
    s
  );
}
function bn(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function yn(e, t) {
  t === void 0 && (t = []);
  const i = document.createElement(e);
  return (i.classList.add(...(Array.isArray(t) ? t : uu(t))), i);
}
function xu(e, t) {
  const i = [];
  for (; e.previousElementSibling;) {
    const s = e.previousElementSibling;
    (t ? s.matches(t) && i.push(s) : i.push(s), (e = s));
  }
  return i;
}
function Fu(e, t) {
  const i = [];
  for (; e.nextElementSibling;) {
    const s = e.nextElementSibling;
    (t ? s.matches(t) && i.push(s) : i.push(s), (e = s));
  }
  return i;
}
function Di(e, t) {
  return gt().getComputedStyle(e, null).getPropertyValue(t);
}
function ea(e) {
  let t = e,
    i;
  if (t) {
    for (i = 0; (t = t.previousSibling) !== null;) t.nodeType === 1 && (i += 1);
    return i;
  }
}
function wu(e, t) {
  const i = [];
  let s = e.parentElement;
  for (; s;) (i.push(s), (s = s.parentElement));
  return i;
}
function bu(e, t) {
  function i(s) {
    s.target === e && (t.call(e, s), e.removeEventListener("transitionend", i));
  }
  t && e.addEventListener("transitionend", i);
}
function ta(e, t, i) {
  const s = gt();
  return (
    e[t === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      s
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-right" : "margin-top"),
    ) +
    parseFloat(
      s
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom"),
    )
  );
}
function pi(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
}
function ia(e, t) {
  (t === void 0 && (t = ""),
    typeof trustedTypes < "u"
      ? (e.innerHTML = trustedTypes
          .createPolicy("html", { createHTML: (i) => i })
          .createHTML(t))
      : (e.innerHTML = t));
}
let Hn;
function yu() {
  const e = gt(),
    t = $i();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function qa() {
  return (Hn || (Hn = yu()), Hn);
}
let Gn;
function Au(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const i = qa(),
    s = gt(),
    n = s.navigator.platform,
    r = t || s.navigator.userAgent,
    a = { ios: !1, android: !1 },
    o = s.screen.width,
    l = s.screen.height,
    d = r.match(/(Android);?[\s\/]+([\d.]+)?/);
  let u = r.match(/(iPad).*OS\s([\d_]+)/);
  const c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
    p = !u && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    f = n === "Win32";
  let h = n === "MacIntel";
  const F = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !u &&
      h &&
      i.touch &&
      F.indexOf(`${o}x${l}`) >= 0 &&
      ((u = r.match(/(Version)\/([\d.]+)/)),
      u || (u = [0, 1, "13_0_0"]),
      (h = !1)),
    d && !f && ((a.os = "android"), (a.android = !0)),
    (u || p || c) && ((a.os = "ios"), (a.ios = !0)),
    a
  );
}
function Ja(e) {
  return (e === void 0 && (e = {}), Gn || (Gn = Au(e)), Gn);
}
let Nn;
function Eu() {
  const e = gt(),
    t = Ja();
  let i = !1;
  function s() {
    const o = e.navigator.userAgent.toLowerCase();
    return (
      o.indexOf("safari") >= 0 &&
      o.indexOf("chrome") < 0 &&
      o.indexOf("android") < 0
    );
  }
  if (s()) {
    const o = String(e.navigator.userAgent);
    if (o.includes("Version/")) {
      const [l, d] = o
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((u) => Number(u));
      i = l < 16 || (l === 16 && d < 2);
    }
  }
  const n = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent,
    ),
    r = s(),
    a = r || (n && t.ios);
  return {
    isSafari: i || r,
    needPerspectiveFix: i,
    need3dFix: a,
    isWebView: n,
  };
}
function Za() {
  return (Nn || (Nn = Eu()), Nn);
}
function _u(e) {
  let { swiper: t, on: i, emit: s } = e;
  const n = gt();
  let r = null,
    a = null;
  const o = () => {
      !t || t.destroyed || !t.initialized || (s("beforeResize"), s("resize"));
    },
    l = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((r = new ResizeObserver((c) => {
          a = n.requestAnimationFrame(() => {
            const { width: p, height: f } = t;
            let h = p,
              F = f;
            (c.forEach((v) => {
              let { contentBoxSize: g, contentRect: m, target: x } = v;
              (x && x !== t.el) ||
                ((h = m ? m.width : (g[0] || g).inlineSize),
                (F = m ? m.height : (g[0] || g).blockSize));
            }),
              (h !== p || F !== f) && o());
          });
        })),
        r.observe(t.el));
    },
    d = () => {
      (a && n.cancelAnimationFrame(a),
        r && r.unobserve && t.el && (r.unobserve(t.el), (r = null)));
    },
    u = () => {
      !t || t.destroyed || !t.initialized || s("orientationchange");
    };
  (i("init", () => {
    if (t.params.resizeObserver && typeof n.ResizeObserver < "u") {
      l();
      return;
    }
    (n.addEventListener("resize", o),
      n.addEventListener("orientationchange", u));
  }),
    i("destroy", () => {
      (d(),
        n.removeEventListener("resize", o),
        n.removeEventListener("orientationchange", u));
    }));
}
function Cu(e) {
  let { swiper: t, extendParams: i, on: s, emit: n } = e;
  const r = [],
    a = gt(),
    o = function (u, c) {
      c === void 0 && (c = {});
      const p = a.MutationObserver || a.WebkitMutationObserver,
        f = new p((h) => {
          if (t.__preventObserver__) return;
          if (h.length === 1) {
            n("observerUpdate", h[0]);
            return;
          }
          const F = function () {
            n("observerUpdate", h[0]);
          };
          a.requestAnimationFrame
            ? a.requestAnimationFrame(F)
            : a.setTimeout(F, 0);
        });
      (f.observe(u, {
        attributes: typeof c.attributes > "u" ? !0 : c.attributes,
        childList: t.isElement || (typeof c.childList > "u" ? !0 : c).childList,
        characterData: typeof c.characterData > "u" ? !0 : c.characterData,
      }),
        r.push(f));
    },
    l = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const u = wu(t.hostEl);
          for (let c = 0; c < u.length; c += 1) o(u[c]);
        }
        (o(t.hostEl, { childList: t.params.observeSlideChildren }),
          o(t.wrapperEl, { attributes: !1 }));
      }
    },
    d = () => {
      (r.forEach((u) => {
        u.disconnect();
      }),
        r.splice(0, r.length));
    };
  (i({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    s("init", l),
    s("destroy", d));
}
var Su = {
  on(e, t, i) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s;
    const n = i ? "unshift" : "push";
    return (
      e.split(" ").forEach((r) => {
        (s.eventsListeners[r] || (s.eventsListeners[r] = []),
          s.eventsListeners[r][n](t));
      }),
      s
    );
  },
  once(e, t, i) {
    const s = this;
    if (!s.eventsListeners || s.destroyed || typeof t != "function") return s;
    function n() {
      (s.off(e, n), n.__emitterProxy && delete n.__emitterProxy);
      for (var r = arguments.length, a = new Array(r), o = 0; o < r; o++)
        a[o] = arguments[o];
      t.apply(s, a);
    }
    return ((n.__emitterProxy = t), s.on(e, n, i));
  },
  onAny(e, t) {
    const i = this;
    if (!i.eventsListeners || i.destroyed || typeof e != "function") return i;
    const s = t ? "unshift" : "push";
    return (
      i.eventsAnyListeners.indexOf(e) < 0 && i.eventsAnyListeners[s](e),
      i
    );
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const i = t.eventsAnyListeners.indexOf(e);
    return (i >= 0 && t.eventsAnyListeners.splice(i, 1), t);
  },
  off(e, t) {
    const i = this;
    return (
      !i.eventsListeners ||
        i.destroyed ||
        !i.eventsListeners ||
        e.split(" ").forEach((s) => {
          typeof t > "u"
            ? (i.eventsListeners[s] = [])
            : i.eventsListeners[s] &&
              i.eventsListeners[s].forEach((n, r) => {
                (n === t || (n.__emitterProxy && n.__emitterProxy === t)) &&
                  i.eventsListeners[s].splice(r, 1);
              });
        }),
      i
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, i, s;
    for (var n = arguments.length, r = new Array(n), a = 0; a < n; a++)
      r[a] = arguments[a];
    return (
      typeof r[0] == "string" || Array.isArray(r[0])
        ? ((t = r[0]), (i = r.slice(1, r.length)), (s = e))
        : ((t = r[0].events), (i = r[0].data), (s = r[0].context || e)),
      i.unshift(s),
      (Array.isArray(t) ? t : t.split(" ")).forEach((l) => {
        (e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((d) => {
            d.apply(s, [l, ...i]);
          }),
          e.eventsListeners &&
            e.eventsListeners[l] &&
            e.eventsListeners[l].forEach((d) => {
              d.apply(s, i);
            }));
      }),
      e
    );
  },
};
function Tu() {
  const e = this;
  let t, i;
  const s = e.el;
  (typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = s.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (i = e.params.height)
      : (i = s.clientHeight),
    !((t === 0 && e.isHorizontal()) || (i === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(Di(s, "padding-left") || 0, 10) -
        parseInt(Di(s, "padding-right") || 0, 10)),
      (i =
        i -
        parseInt(Di(s, "padding-top") || 0, 10) -
        parseInt(Di(s, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(i) && (i = 0),
      Object.assign(e, {
        width: t,
        height: i,
        size: e.isHorizontal() ? t : i,
      })));
}
function Du() {
  const e = this;
  function t(y, B) {
    return parseFloat(y.getPropertyValue(e.getDirectionLabel(B)) || 0);
  }
  const i = e.params,
    { wrapperEl: s, slidesEl: n, size: r, rtlTranslate: a, wrongRTL: o } = e,
    l = e.virtual && i.virtual.enabled,
    d = l ? e.virtual.slides.length : e.slides.length,
    u = $t(n, `.${e.params.slideClass}, swiper-slide`),
    c = l ? e.virtual.slides.length : u.length;
  let p = [];
  const f = [],
    h = [];
  let F = i.slidesOffsetBefore;
  typeof F == "function" && (F = i.slidesOffsetBefore.call(e));
  let v = i.slidesOffsetAfter;
  typeof v == "function" && (v = i.slidesOffsetAfter.call(e));
  const g = e.snapGrid.length,
    m = e.slidesGrid.length;
  let x = i.spaceBetween,
    w = -F,
    _ = 0,
    T = 0;
  if (typeof r > "u") return;
  (typeof x == "string" && x.indexOf("%") >= 0
    ? (x = (parseFloat(x.replace("%", "")) / 100) * r)
    : typeof x == "string" && (x = parseFloat(x)),
    (e.virtualSize = -x),
    u.forEach((y) => {
      (a ? (y.style.marginLeft = "") : (y.style.marginRight = ""),
        (y.style.marginBottom = ""),
        (y.style.marginTop = ""));
    }),
    i.centeredSlides &&
      i.cssMode &&
      (Js(s, "--swiper-centered-offset-before", ""),
      Js(s, "--swiper-centered-offset-after", "")));
  const A = i.grid && i.grid.rows > 1 && e.grid;
  A ? e.grid.initSlides(u) : e.grid && e.grid.unsetSlides();
  let k;
  const S =
    i.slidesPerView === "auto" &&
    i.breakpoints &&
    Object.keys(i.breakpoints).filter(
      (y) => typeof i.breakpoints[y].slidesPerView < "u",
    ).length > 0;
  for (let y = 0; y < c; y += 1) {
    k = 0;
    let B;
    if (
      (u[y] && (B = u[y]),
      A && e.grid.updateSlide(y, B, u),
      !(u[y] && Di(B, "display") === "none"))
    ) {
      if (i.slidesPerView === "auto") {
        S && (u[y].style[e.getDirectionLabel("width")] = "");
        const M = getComputedStyle(B),
          Q = B.style.transform,
          K = B.style.webkitTransform;
        if (
          (Q && (B.style.transform = "none"),
          K && (B.style.webkitTransform = "none"),
          i.roundLengths)
        )
          k = e.isHorizontal() ? ta(B, "width") : ta(B, "height");
        else {
          const oe = t(M, "width"),
            R = t(M, "padding-left"),
            N = t(M, "padding-right"),
            C = t(M, "margin-left"),
            ee = t(M, "margin-right"),
            b = M.getPropertyValue("box-sizing");
          if (b && b === "border-box") k = oe + C + ee;
          else {
            const { clientWidth: Fe, offsetWidth: yt } = B;
            k = oe + R + N + C + ee + (yt - Fe);
          }
        }
        (Q && (B.style.transform = Q),
          K && (B.style.webkitTransform = K),
          i.roundLengths && (k = Math.floor(k)));
      } else
        ((k = (r - (i.slidesPerView - 1) * x) / i.slidesPerView),
          i.roundLengths && (k = Math.floor(k)),
          u[y] && (u[y].style[e.getDirectionLabel("width")] = `${k}px`));
      (u[y] && (u[y].swiperSlideSize = k),
        h.push(k),
        i.centeredSlides
          ? ((w = w + k / 2 + _ / 2 + x),
            _ === 0 && y !== 0 && (w = w - r / 2 - x),
            y === 0 && (w = w - r / 2 - x),
            Math.abs(w) < 1 / 1e3 && (w = 0),
            i.roundLengths && (w = Math.floor(w)),
            T % i.slidesPerGroup === 0 && p.push(w),
            f.push(w))
          : (i.roundLengths && (w = Math.floor(w)),
            (T - Math.min(e.params.slidesPerGroupSkip, T)) %
              e.params.slidesPerGroup ===
              0 && p.push(w),
            f.push(w),
            (w = w + k + x)),
        (e.virtualSize += k + x),
        (_ = k),
        (T += 1));
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, r) + v),
    a &&
      o &&
      (i.effect === "slide" || i.effect === "coverflow") &&
      (s.style.width = `${e.virtualSize + x}px`),
    i.setWrapperSize &&
      (s.style[e.getDirectionLabel("width")] = `${e.virtualSize + x}px`),
    A && e.grid.updateWrapperSize(k, p),
    !i.centeredSlides)
  ) {
    const y = [];
    for (let B = 0; B < p.length; B += 1) {
      let M = p[B];
      (i.roundLengths && (M = Math.floor(M)),
        p[B] <= e.virtualSize - r && y.push(M));
    }
    ((p = y),
      Math.floor(e.virtualSize - r) - Math.floor(p[p.length - 1]) > 1 &&
        p.push(e.virtualSize - r));
  }
  if (l && i.loop) {
    const y = h[0] + x;
    if (i.slidesPerGroup > 1) {
      const B = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / i.slidesPerGroup,
        ),
        M = y * i.slidesPerGroup;
      for (let Q = 0; Q < B; Q += 1) p.push(p[p.length - 1] + M);
    }
    for (let B = 0; B < e.virtual.slidesBefore + e.virtual.slidesAfter; B += 1)
      (i.slidesPerGroup === 1 && p.push(p[p.length - 1] + y),
        f.push(f[f.length - 1] + y),
        (e.virtualSize += y));
  }
  if ((p.length === 0 && (p = [0]), x !== 0)) {
    const y =
      e.isHorizontal() && a ? "marginLeft" : e.getDirectionLabel("marginRight");
    u.filter((B, M) =>
      !i.cssMode || i.loop ? !0 : M !== u.length - 1,
    ).forEach((B) => {
      B.style[y] = `${x}px`;
    });
  }
  if (i.centeredSlides && i.centeredSlidesBounds) {
    let y = 0;
    (h.forEach((M) => {
      y += M + (x || 0);
    }),
      (y -= x));
    const B = y > r ? y - r : 0;
    p = p.map((M) => (M <= 0 ? -F : M > B ? B + v : M));
  }
  if (i.centerInsufficientSlides) {
    let y = 0;
    (h.forEach((M) => {
      y += M + (x || 0);
    }),
      (y -= x));
    const B = (i.slidesOffsetBefore || 0) + (i.slidesOffsetAfter || 0);
    if (y + B < r) {
      const M = (r - y - B) / 2;
      (p.forEach((Q, K) => {
        p[K] = Q - M;
      }),
        f.forEach((Q, K) => {
          f[K] = Q + M;
        }));
    }
  }
  if (
    (Object.assign(e, {
      slides: u,
      snapGrid: p,
      slidesGrid: f,
      slidesSizesGrid: h,
    }),
    i.centeredSlides && i.cssMode && !i.centeredSlidesBounds)
  ) {
    (Js(s, "--swiper-centered-offset-before", `${-p[0]}px`),
      Js(
        s,
        "--swiper-centered-offset-after",
        `${e.size / 2 - h[h.length - 1] / 2}px`,
      ));
    const y = -e.snapGrid[0],
      B = -e.slidesGrid[0];
    ((e.snapGrid = e.snapGrid.map((M) => M + y)),
      (e.slidesGrid = e.slidesGrid.map((M) => M + B)));
  }
  if (
    (c !== d && e.emit("slidesLengthChange"),
    p.length !== g &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    f.length !== m && e.emit("slidesGridLengthChange"),
    i.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !l && !i.cssMode && (i.effect === "slide" || i.effect === "fade"))
  ) {
    const y = `${i.containerModifierClass}backface-hidden`,
      B = e.el.classList.contains(y);
    c <= i.maxBackfaceHiddenSlides
      ? B || e.el.classList.add(y)
      : B && e.el.classList.remove(y);
  }
}
function Mu(e) {
  const t = this,
    i = [],
    s = t.virtual && t.params.virtual.enabled;
  let n = 0,
    r;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const a = (o) => (s ? t.slides[t.getSlideIndexByData(o)] : t.slides[o]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((o) => {
        i.push(o);
      });
    else
      for (r = 0; r < Math.ceil(t.params.slidesPerView); r += 1) {
        const o = t.activeIndex + r;
        if (o > t.slides.length && !s) break;
        i.push(a(o));
      }
  else i.push(a(t.activeIndex));
  for (r = 0; r < i.length; r += 1)
    if (typeof i[r] < "u") {
      const o = i[r].offsetHeight;
      n = o > n ? o : n;
    }
  (n || n === 0) && (t.wrapperEl.style.height = `${n}px`);
}
function ku() {
  const e = this,
    t = e.slides,
    i = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let s = 0; s < t.length; s += 1)
    t[s].swiperSlideOffset =
      (e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop) -
      i -
      e.cssOverflowAdjustment();
}
const sa = (e, t, i) => {
  t && !e.classList.contains(i)
    ? e.classList.add(i)
    : !t && e.classList.contains(i) && e.classList.remove(i);
};
function Bu(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    i = t.params,
    { slides: s, rtlTranslate: n, snapGrid: r } = t;
  if (s.length === 0) return;
  typeof s[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let a = -e;
  (n && (a = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []));
  let o = i.spaceBetween;
  typeof o == "string" && o.indexOf("%") >= 0
    ? (o = (parseFloat(o.replace("%", "")) / 100) * t.size)
    : typeof o == "string" && (o = parseFloat(o));
  for (let l = 0; l < s.length; l += 1) {
    const d = s[l];
    let u = d.swiperSlideOffset;
    i.cssMode && i.centeredSlides && (u -= s[0].swiperSlideOffset);
    const c =
        (a + (i.centeredSlides ? t.minTranslate() : 0) - u) /
        (d.swiperSlideSize + o),
      p =
        (a - r[0] + (i.centeredSlides ? t.minTranslate() : 0) - u) /
        (d.swiperSlideSize + o),
      f = -(a - u),
      h = f + t.slidesSizesGrid[l],
      F = f >= 0 && f <= t.size - t.slidesSizesGrid[l],
      v =
        (f >= 0 && f < t.size - 1) ||
        (h > 1 && h <= t.size) ||
        (f <= 0 && h >= t.size);
    (v && (t.visibleSlides.push(d), t.visibleSlidesIndexes.push(l)),
      sa(d, v, i.slideVisibleClass),
      sa(d, F, i.slideFullyVisibleClass),
      (d.progress = n ? -c : c),
      (d.originalProgress = n ? -p : p));
  }
}
function Pu(e) {
  const t = this;
  if (typeof e > "u") {
    const u = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * u) || 0;
  }
  const i = t.params,
    s = t.maxTranslate() - t.minTranslate();
  let { progress: n, isBeginning: r, isEnd: a, progressLoop: o } = t;
  const l = r,
    d = a;
  if (s === 0) ((n = 0), (r = !0), (a = !0));
  else {
    n = (e - t.minTranslate()) / s;
    const u = Math.abs(e - t.minTranslate()) < 1,
      c = Math.abs(e - t.maxTranslate()) < 1;
    ((r = u || n <= 0), (a = c || n >= 1), u && (n = 0), c && (n = 1));
  }
  if (i.loop) {
    const u = t.getSlideIndexByData(0),
      c = t.getSlideIndexByData(t.slides.length - 1),
      p = t.slidesGrid[u],
      f = t.slidesGrid[c],
      h = t.slidesGrid[t.slidesGrid.length - 1],
      F = Math.abs(e);
    (F >= p ? (o = (F - p) / h) : (o = (F + h - f) / h), o > 1 && (o -= 1));
  }
  (Object.assign(t, { progress: n, progressLoop: o, isBeginning: r, isEnd: a }),
    (i.watchSlidesProgress || (i.centeredSlides && i.autoHeight)) &&
      t.updateSlidesProgress(e),
    r && !l && t.emit("reachBeginning toEdge"),
    a && !d && t.emit("reachEnd toEdge"),
    ((l && !r) || (d && !a)) && t.emit("fromEdge"),
    t.emit("progress", n));
}
const Un = (e, t, i) => {
  t && !e.classList.contains(i)
    ? e.classList.add(i)
    : !t && e.classList.contains(i) && e.classList.remove(i);
};
function Iu() {
  const e = this,
    { slides: t, params: i, slidesEl: s, activeIndex: n } = e,
    r = e.virtual && i.virtual.enabled,
    a = e.grid && i.grid && i.grid.rows > 1,
    o = (c) => $t(s, `.${i.slideClass}${c}, swiper-slide${c}`)[0];
  let l, d, u;
  if (r)
    if (i.loop) {
      let c = n - e.virtual.slidesBefore;
      (c < 0 && (c = e.virtual.slides.length + c),
        c >= e.virtual.slides.length && (c -= e.virtual.slides.length),
        (l = o(`[data-swiper-slide-index="${c}"]`)));
    } else l = o(`[data-swiper-slide-index="${n}"]`);
  else
    a
      ? ((l = t.find((c) => c.column === n)),
        (u = t.find((c) => c.column === n + 1)),
        (d = t.find((c) => c.column === n - 1)))
      : (l = t[n]);
  (l &&
    (a ||
      ((u = Fu(l, `.${i.slideClass}, swiper-slide`)[0]),
      i.loop && !u && (u = t[0]),
      (d = xu(l, `.${i.slideClass}, swiper-slide`)[0]),
      i.loop && !d === 0 && (d = t[t.length - 1]))),
    t.forEach((c) => {
      (Un(c, c === l, i.slideActiveClass),
        Un(c, c === u, i.slideNextClass),
        Un(c, c === d, i.slidePrevClass));
    }),
    e.emitSlidesClasses());
}
const pn = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const i = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      s = t.closest(i());
    if (s) {
      let n = s.querySelector(`.${e.params.lazyPreloaderClass}`);
      (!n &&
        e.isElement &&
        (s.shadowRoot
          ? (n = s.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              s.shadowRoot &&
                ((n = s.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`,
                )),
                n && n.remove());
            })),
        n && n.remove());
    }
  },
  Vn = (e, t) => {
    if (!e.slides[t]) return;
    const i = e.slides[t].querySelector('[loading="lazy"]');
    i && i.removeAttribute("loading");
  },
  dr = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const i = e.slides.length;
    if (!i || !t || t < 0) return;
    t = Math.min(t, i);
    const s =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      n = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const a = n,
        o = [a - t];
      (o.push(...Array.from({ length: t }).map((l, d) => a + s + d)),
        e.slides.forEach((l, d) => {
          o.includes(l.column) && Vn(e, d);
        }));
      return;
    }
    const r = n + s - 1;
    if (e.params.rewind || e.params.loop)
      for (let a = n - t; a <= r + t; a += 1) {
        const o = ((a % i) + i) % i;
        (o < n || o > r) && Vn(e, o);
      }
    else
      for (let a = Math.max(n - t, 0); a <= Math.min(r + t, i - 1); a += 1)
        a !== n && (a > r || a < n) && Vn(e, a);
  };
function Lu(e) {
  const { slidesGrid: t, params: i } = e,
    s = e.rtlTranslate ? e.translate : -e.translate;
  let n;
  for (let r = 0; r < t.length; r += 1)
    typeof t[r + 1] < "u"
      ? s >= t[r] && s < t[r + 1] - (t[r + 1] - t[r]) / 2
        ? (n = r)
        : s >= t[r] && s < t[r + 1] && (n = r + 1)
      : s >= t[r] && (n = r);
  return (i.normalizeSlideIndex && (n < 0 || typeof n > "u") && (n = 0), n);
}
function Ou(e) {
  const t = this,
    i = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: s, params: n, activeIndex: r, realIndex: a, snapIndex: o } = t;
  let l = e,
    d;
  const u = (f) => {
    let h = f - t.virtual.slidesBefore;
    return (
      h < 0 && (h = t.virtual.slides.length + h),
      h >= t.virtual.slides.length && (h -= t.virtual.slides.length),
      h
    );
  };
  if ((typeof l > "u" && (l = Lu(t)), s.indexOf(i) >= 0)) d = s.indexOf(i);
  else {
    const f = Math.min(n.slidesPerGroupSkip, l);
    d = f + Math.floor((l - f) / n.slidesPerGroup);
  }
  if ((d >= s.length && (d = s.length - 1), l === r && !t.params.loop)) {
    d !== o && ((t.snapIndex = d), t.emit("snapIndexChange"));
    return;
  }
  if (l === r && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = u(l);
    return;
  }
  const c = t.grid && n.grid && n.grid.rows > 1;
  let p;
  if (t.virtual && n.virtual.enabled && n.loop) p = u(l);
  else if (c) {
    const f = t.slides.find((F) => F.column === l);
    let h = parseInt(f.getAttribute("data-swiper-slide-index"), 10);
    (Number.isNaN(h) && (h = Math.max(t.slides.indexOf(f), 0)),
      (p = Math.floor(h / n.grid.rows)));
  } else if (t.slides[l]) {
    const f = t.slides[l].getAttribute("data-swiper-slide-index");
    f ? (p = parseInt(f, 10)) : (p = l);
  } else p = l;
  (Object.assign(t, {
    previousSnapIndex: o,
    snapIndex: d,
    previousRealIndex: a,
    realIndex: p,
    previousIndex: r,
    activeIndex: l,
  }),
    t.initialized && dr(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (a !== p && t.emit("realIndexChange"), t.emit("slideChange")));
}
function zu(e, t) {
  const i = this,
    s = i.params;
  let n = e.closest(`.${s.slideClass}, swiper-slide`);
  !n &&
    i.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((o) => {
      !n && o.matches && o.matches(`.${s.slideClass}, swiper-slide`) && (n = o);
    });
  let r = !1,
    a;
  if (n) {
    for (let o = 0; o < i.slides.length; o += 1)
      if (i.slides[o] === n) {
        ((r = !0), (a = o));
        break;
      }
  }
  if (n && r)
    ((i.clickedSlide = n),
      i.virtual && i.params.virtual.enabled
        ? (i.clickedIndex = parseInt(
            n.getAttribute("data-swiper-slide-index"),
            10,
          ))
        : (i.clickedIndex = a));
  else {
    ((i.clickedSlide = void 0), (i.clickedIndex = void 0));
    return;
  }
  s.slideToClickedSlide &&
    i.clickedIndex !== void 0 &&
    i.clickedIndex !== i.activeIndex &&
    i.slideToClickedSlide();
}
var Ru = {
  updateSize: Tu,
  updateSlides: Du,
  updateAutoHeight: Mu,
  updateSlidesOffset: ku,
  updateSlidesProgress: Bu,
  updateProgress: Pu,
  updateSlidesClasses: Iu,
  updateActiveIndex: Ou,
  updateClickedSlide: zu,
};
function Hu(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: i, rtlTranslate: s, translate: n, wrapperEl: r } = t;
  if (i.virtualTranslate) return s ? -n : n;
  if (i.cssMode) return n;
  let a = hu(r, e);
  return ((a += t.cssOverflowAdjustment()), s && (a = -a), a || 0);
}
function Gu(e, t) {
  const i = this,
    { rtlTranslate: s, params: n, wrapperEl: r, progress: a } = i;
  let o = 0,
    l = 0;
  const d = 0;
  (i.isHorizontal() ? (o = s ? -e : e) : (l = e),
    n.roundLengths && ((o = Math.floor(o)), (l = Math.floor(l))),
    (i.previousTranslate = i.translate),
    (i.translate = i.isHorizontal() ? o : l),
    n.cssMode
      ? (r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal()
          ? -o
          : -l)
      : n.virtualTranslate ||
        (i.isHorizontal()
          ? (o -= i.cssOverflowAdjustment())
          : (l -= i.cssOverflowAdjustment()),
        (r.style.transform = `translate3d(${o}px, ${l}px, ${d}px)`)));
  let u;
  const c = i.maxTranslate() - i.minTranslate();
  (c === 0 ? (u = 0) : (u = (e - i.minTranslate()) / c),
    u !== a && i.updateProgress(e),
    i.emit("setTranslate", i.translate, t));
}
function Nu() {
  return -this.snapGrid[0];
}
function Uu() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function Vu(e, t, i, s, n) {
  (e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    i === void 0 && (i = !0),
    s === void 0 && (s = !0));
  const r = this,
    { params: a, wrapperEl: o } = r;
  if (r.animating && a.preventInteractionOnTransition) return !1;
  const l = r.minTranslate(),
    d = r.maxTranslate();
  let u;
  if (
    (s && e > l ? (u = l) : s && e < d ? (u = d) : (u = e),
    r.updateProgress(u),
    a.cssMode)
  ) {
    const c = r.isHorizontal();
    if (t === 0) o[c ? "scrollLeft" : "scrollTop"] = -u;
    else {
      if (!r.support.smoothScroll)
        return (
          Xa({ swiper: r, targetPosition: -u, side: c ? "left" : "top" }),
          !0
        );
      o.scrollTo({ [c ? "left" : "top"]: -u, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (r.setTransition(0),
        r.setTranslate(u),
        i && (r.emit("beforeTransitionStart", t, n), r.emit("transitionEnd")))
      : (r.setTransition(t),
        r.setTranslate(u),
        i && (r.emit("beforeTransitionStart", t, n), r.emit("transitionStart")),
        r.animating ||
          ((r.animating = !0),
          r.onTranslateToWrapperTransitionEnd ||
            (r.onTranslateToWrapperTransitionEnd = function (p) {
              !r ||
                r.destroyed ||
                (p.target === this &&
                  (r.wrapperEl.removeEventListener(
                    "transitionend",
                    r.onTranslateToWrapperTransitionEnd,
                  ),
                  (r.onTranslateToWrapperTransitionEnd = null),
                  delete r.onTranslateToWrapperTransitionEnd,
                  (r.animating = !1),
                  i && r.emit("transitionEnd")));
            }),
          r.wrapperEl.addEventListener(
            "transitionend",
            r.onTranslateToWrapperTransitionEnd,
          ))),
    !0
  );
}
var ju = {
  getTranslate: Hu,
  setTranslate: Gu,
  minTranslate: Nu,
  maxTranslate: Uu,
  translateTo: Vu,
};
function Qu(e, t) {
  const i = this;
  (i.params.cssMode ||
    ((i.wrapperEl.style.transitionDuration = `${e}ms`),
    (i.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    i.emit("setTransition", e, t));
}
function $a(e) {
  let { swiper: t, runCallbacks: i, direction: s, step: n } = e;
  const { activeIndex: r, previousIndex: a } = t;
  let o = s;
  (o || (r > a ? (o = "next") : r < a ? (o = "prev") : (o = "reset")),
    t.emit(`transition${n}`),
    i && o === "reset"
      ? t.emit(`slideResetTransition${n}`)
      : i &&
        r !== a &&
        (t.emit(`slideChangeTransition${n}`),
        o === "next"
          ? t.emit(`slideNextTransition${n}`)
          : t.emit(`slidePrevTransition${n}`)));
}
function Yu(e, t) {
  e === void 0 && (e = !0);
  const i = this,
    { params: s } = i;
  s.cssMode ||
    (s.autoHeight && i.updateAutoHeight(),
    $a({ swiper: i, runCallbacks: e, direction: t, step: "Start" }));
}
function Wu(e, t) {
  e === void 0 && (e = !0);
  const i = this,
    { params: s } = i;
  ((i.animating = !1),
    !s.cssMode &&
      (i.setTransition(0),
      $a({ swiper: i, runCallbacks: e, direction: t, step: "End" })));
}
var Xu = { setTransition: Qu, transitionStart: Yu, transitionEnd: Wu };
function Ku(e, t, i, s, n) {
  (e === void 0 && (e = 0),
    i === void 0 && (i = !0),
    typeof e == "string" && (e = parseInt(e, 10)));
  const r = this;
  let a = e;
  a < 0 && (a = 0);
  const {
    params: o,
    snapGrid: l,
    slidesGrid: d,
    previousIndex: u,
    activeIndex: c,
    rtlTranslate: p,
    wrapperEl: f,
    enabled: h,
  } = r;
  if (
    (!h && !s && !n) ||
    r.destroyed ||
    (r.animating && o.preventInteractionOnTransition)
  )
    return !1;
  typeof t > "u" && (t = r.params.speed);
  const F = Math.min(r.params.slidesPerGroupSkip, a);
  let v = F + Math.floor((a - F) / r.params.slidesPerGroup);
  v >= l.length && (v = l.length - 1);
  const g = -l[v];
  if (o.normalizeSlideIndex)
    for (let A = 0; A < d.length; A += 1) {
      const k = -Math.floor(g * 100),
        S = Math.floor(d[A] * 100),
        y = Math.floor(d[A + 1] * 100);
      typeof d[A + 1] < "u"
        ? k >= S && k < y - (y - S) / 2
          ? (a = A)
          : k >= S && k < y && (a = A + 1)
        : k >= S && (a = A);
    }
  if (
    r.initialized &&
    a !== c &&
    ((!r.allowSlideNext &&
      (p
        ? g > r.translate && g > r.minTranslate()
        : g < r.translate && g < r.minTranslate())) ||
      (!r.allowSlidePrev &&
        g > r.translate &&
        g > r.maxTranslate() &&
        (c || 0) !== a))
  )
    return !1;
  (a !== (u || 0) && i && r.emit("beforeSlideChangeStart"),
    r.updateProgress(g));
  let m;
  a > c ? (m = "next") : a < c ? (m = "prev") : (m = "reset");
  const x = r.virtual && r.params.virtual.enabled;
  if (!(x && n) && ((p && -g === r.translate) || (!p && g === r.translate)))
    return (
      r.updateActiveIndex(a),
      o.autoHeight && r.updateAutoHeight(),
      r.updateSlidesClasses(),
      o.effect !== "slide" && r.setTranslate(g),
      m !== "reset" && (r.transitionStart(i, m), r.transitionEnd(i, m)),
      !1
    );
  if (o.cssMode) {
    const A = r.isHorizontal(),
      k = p ? g : -g;
    if (t === 0)
      (x &&
        ((r.wrapperEl.style.scrollSnapType = "none"),
        (r._immediateVirtual = !0)),
        x && !r._cssModeVirtualInitialSet && r.params.initialSlide > 0
          ? ((r._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              f[A ? "scrollLeft" : "scrollTop"] = k;
            }))
          : (f[A ? "scrollLeft" : "scrollTop"] = k),
        x &&
          requestAnimationFrame(() => {
            ((r.wrapperEl.style.scrollSnapType = ""),
              (r._immediateVirtual = !1));
          }));
    else {
      if (!r.support.smoothScroll)
        return (
          Xa({ swiper: r, targetPosition: k, side: A ? "left" : "top" }),
          !0
        );
      f.scrollTo({ [A ? "left" : "top"]: k, behavior: "smooth" });
    }
    return !0;
  }
  const T = Za().isSafari;
  return (
    x && !n && T && r.isElement && r.virtual.update(!1, !1, a),
    r.setTransition(t),
    r.setTranslate(g),
    r.updateActiveIndex(a),
    r.updateSlidesClasses(),
    r.emit("beforeTransitionStart", t, s),
    r.transitionStart(i, m),
    t === 0
      ? r.transitionEnd(i, m)
      : r.animating ||
        ((r.animating = !0),
        r.onSlideToWrapperTransitionEnd ||
          (r.onSlideToWrapperTransitionEnd = function (k) {
            !r ||
              r.destroyed ||
              (k.target === this &&
                (r.wrapperEl.removeEventListener(
                  "transitionend",
                  r.onSlideToWrapperTransitionEnd,
                ),
                (r.onSlideToWrapperTransitionEnd = null),
                delete r.onSlideToWrapperTransitionEnd,
                r.transitionEnd(i, m)));
          }),
        r.wrapperEl.addEventListener(
          "transitionend",
          r.onSlideToWrapperTransitionEnd,
        )),
    !0
  );
}
function qu(e, t, i, s) {
  (e === void 0 && (e = 0),
    i === void 0 && (i = !0),
    typeof e == "string" && (e = parseInt(e, 10)));
  const n = this;
  if (n.destroyed) return;
  typeof t > "u" && (t = n.params.speed);
  const r = n.grid && n.params.grid && n.params.grid.rows > 1;
  let a = e;
  if (n.params.loop)
    if (n.virtual && n.params.virtual.enabled) a = a + n.virtual.slidesBefore;
    else {
      let o;
      if (r) {
        const p = a * n.params.grid.rows;
        o = n.slides.find(
          (f) => f.getAttribute("data-swiper-slide-index") * 1 === p,
        ).column;
      } else o = n.getSlideIndexByData(a);
      const l = r
          ? Math.ceil(n.slides.length / n.params.grid.rows)
          : n.slides.length,
        { centeredSlides: d } = n.params;
      let u = n.params.slidesPerView;
      u === "auto"
        ? (u = n.slidesPerViewDynamic())
        : ((u = Math.ceil(parseFloat(n.params.slidesPerView, 10))),
          d && u % 2 === 0 && (u = u + 1));
      let c = l - o < u;
      if (
        (d && (c = c || o < Math.ceil(u / 2)),
        s && d && n.params.slidesPerView !== "auto" && !r && (c = !1),
        c)
      ) {
        const p = d
          ? o < n.activeIndex
            ? "prev"
            : "next"
          : o - n.activeIndex - 1 < n.params.slidesPerView
            ? "next"
            : "prev";
        n.loopFix({
          direction: p,
          slideTo: !0,
          activeSlideIndex: p === "next" ? o + 1 : o - l + 1,
          slideRealIndex: p === "next" ? n.realIndex : void 0,
        });
      }
      if (r) {
        const p = a * n.params.grid.rows;
        a = n.slides.find(
          (f) => f.getAttribute("data-swiper-slide-index") * 1 === p,
        ).column;
      } else a = n.getSlideIndexByData(a);
    }
  return (
    requestAnimationFrame(() => {
      n.slideTo(a, t, i, s);
    }),
    n
  );
}
function Ju(e, t, i) {
  t === void 0 && (t = !0);
  const s = this,
    { enabled: n, params: r, animating: a } = s;
  if (!n || s.destroyed) return s;
  typeof e > "u" && (e = s.params.speed);
  let o = r.slidesPerGroup;
  r.slidesPerView === "auto" &&
    r.slidesPerGroup === 1 &&
    r.slidesPerGroupAuto &&
    (o = Math.max(s.slidesPerViewDynamic("current", !0), 1));
  const l = s.activeIndex < r.slidesPerGroupSkip ? 1 : o,
    d = s.virtual && r.virtual.enabled;
  if (r.loop) {
    if (a && !d && r.loopPreventsSliding) return !1;
    if (
      (s.loopFix({ direction: "next" }),
      (s._clientLeft = s.wrapperEl.clientLeft),
      s.activeIndex === s.slides.length - 1 && r.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          s.slideTo(s.activeIndex + l, e, t, i);
        }),
        !0
      );
  }
  return r.rewind && s.isEnd
    ? s.slideTo(0, e, t, i)
    : s.slideTo(s.activeIndex + l, e, t, i);
}
function Zu(e, t, i) {
  t === void 0 && (t = !0);
  const s = this,
    {
      params: n,
      snapGrid: r,
      slidesGrid: a,
      rtlTranslate: o,
      enabled: l,
      animating: d,
    } = s;
  if (!l || s.destroyed) return s;
  typeof e > "u" && (e = s.params.speed);
  const u = s.virtual && n.virtual.enabled;
  if (n.loop) {
    if (d && !u && n.loopPreventsSliding) return !1;
    (s.loopFix({ direction: "prev" }),
      (s._clientLeft = s.wrapperEl.clientLeft));
  }
  const c = o ? s.translate : -s.translate;
  function p(m) {
    return m < 0 ? -Math.floor(Math.abs(m)) : Math.floor(m);
  }
  const f = p(c),
    h = r.map((m) => p(m)),
    F = n.freeMode && n.freeMode.enabled;
  let v = r[h.indexOf(f) - 1];
  if (typeof v > "u" && (n.cssMode || F)) {
    let m;
    (r.forEach((x, w) => {
      f >= x && (m = w);
    }),
      typeof m < "u" && (v = F ? r[m] : r[m > 0 ? m - 1 : m]));
  }
  let g = 0;
  if (
    (typeof v < "u" &&
      ((g = a.indexOf(v)),
      g < 0 && (g = s.activeIndex - 1),
      n.slidesPerView === "auto" &&
        n.slidesPerGroup === 1 &&
        n.slidesPerGroupAuto &&
        ((g = g - s.slidesPerViewDynamic("previous", !0) + 1),
        (g = Math.max(g, 0)))),
    n.rewind && s.isBeginning)
  ) {
    const m =
      s.params.virtual && s.params.virtual.enabled && s.virtual
        ? s.virtual.slides.length - 1
        : s.slides.length - 1;
    return s.slideTo(m, e, t, i);
  } else if (n.loop && s.activeIndex === 0 && n.cssMode)
    return (
      requestAnimationFrame(() => {
        s.slideTo(g, e, t, i);
      }),
      !0
    );
  return s.slideTo(g, e, t, i);
}
function $u(e, t, i) {
  t === void 0 && (t = !0);
  const s = this;
  if (!s.destroyed)
    return (
      typeof e > "u" && (e = s.params.speed),
      s.slideTo(s.activeIndex, e, t, i)
    );
}
function ep(e, t, i, s) {
  (t === void 0 && (t = !0), s === void 0 && (s = 0.5));
  const n = this;
  if (n.destroyed) return;
  typeof e > "u" && (e = n.params.speed);
  let r = n.activeIndex;
  const a = Math.min(n.params.slidesPerGroupSkip, r),
    o = a + Math.floor((r - a) / n.params.slidesPerGroup),
    l = n.rtlTranslate ? n.translate : -n.translate;
  if (l >= n.snapGrid[o]) {
    const d = n.snapGrid[o],
      u = n.snapGrid[o + 1];
    l - d > (u - d) * s && (r += n.params.slidesPerGroup);
  } else {
    const d = n.snapGrid[o - 1],
      u = n.snapGrid[o];
    l - d <= (u - d) * s && (r -= n.params.slidesPerGroup);
  }
  return (
    (r = Math.max(r, 0)),
    (r = Math.min(r, n.slidesGrid.length - 1)),
    n.slideTo(r, e, t, i)
  );
}
function tp() {
  const e = this;
  if (e.destroyed) return;
  const { params: t, slidesEl: i } = e,
    s = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let n = e.getSlideIndexWhenGrid(e.clickedIndex),
    r;
  const a = e.isElement ? "swiper-slide" : `.${t.slideClass}`,
    o = e.grid && e.params.grid && e.params.grid.rows > 1;
  if (t.loop) {
    if (e.animating) return;
    ((r = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? e.slideToLoop(r)
        : n >
            (o
              ? (e.slides.length - s) / 2 - (e.params.grid.rows - 1)
              : e.slides.length - s)
          ? (e.loopFix(),
            (n = e.getSlideIndex(
              $t(i, `${a}[data-swiper-slide-index="${r}"]`)[0],
            )),
            Wa(() => {
              e.slideTo(n);
            }))
          : e.slideTo(n));
  } else e.slideTo(n);
}
var ip = {
  slideTo: Ku,
  slideToLoop: qu,
  slideNext: Ju,
  slidePrev: Zu,
  slideReset: $u,
  slideToClosest: ep,
  slideToClickedSlide: tp,
};
function sp(e, t) {
  const i = this,
    { params: s, slidesEl: n } = i;
  if (!s.loop || (i.virtual && i.params.virtual.enabled)) return;
  const r = () => {
      $t(n, `.${s.slideClass}, swiper-slide`).forEach((f, h) => {
        f.setAttribute("data-swiper-slide-index", h);
      });
    },
    a = () => {
      const p = $t(n, `.${s.slideBlankClass}`);
      (p.forEach((f) => {
        f.remove();
      }),
        p.length > 0 && (i.recalcSlides(), i.updateSlides()));
    },
    o = i.grid && s.grid && s.grid.rows > 1;
  s.loopAddBlankSlides && (s.slidesPerGroup > 1 || o) && a();
  const l = s.slidesPerGroup * (o ? s.grid.rows : 1),
    d = i.slides.length % l !== 0,
    u = o && i.slides.length % s.grid.rows !== 0,
    c = (p) => {
      for (let f = 0; f < p; f += 1) {
        const h = i.isElement
          ? yn("swiper-slide", [s.slideBlankClass])
          : yn("div", [s.slideClass, s.slideBlankClass]);
        i.slidesEl.append(h);
      }
    };
  if (d) {
    if (s.loopAddBlankSlides) {
      const p = l - (i.slides.length % l);
      (c(p), i.recalcSlides(), i.updateSlides());
    } else
      bn(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      );
    r();
  } else if (u) {
    if (s.loopAddBlankSlides) {
      const p = s.grid.rows - (i.slides.length % s.grid.rows);
      (c(p), i.recalcSlides(), i.updateSlides());
    } else
      bn(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)",
      );
    r();
  } else r();
  i.loopFix({
    slideRealIndex: e,
    direction: s.centeredSlides ? void 0 : "next",
    initial: t,
  });
}
function np(e) {
  let {
    slideRealIndex: t,
    slideTo: i = !0,
    direction: s,
    setTranslate: n,
    activeSlideIndex: r,
    initial: a,
    byController: o,
    byMousewheel: l,
  } = e === void 0 ? {} : e;
  const d = this;
  if (!d.params.loop) return;
  d.emit("beforeLoopFix");
  const {
      slides: u,
      allowSlidePrev: c,
      allowSlideNext: p,
      slidesEl: f,
      params: h,
    } = d,
    { centeredSlides: F, initialSlide: v } = h;
  if (
    ((d.allowSlidePrev = !0),
    (d.allowSlideNext = !0),
    d.virtual && h.virtual.enabled)
  ) {
    (i &&
      (!h.centeredSlides && d.snapIndex === 0
        ? d.slideTo(d.virtual.slides.length, 0, !1, !0)
        : h.centeredSlides && d.snapIndex < h.slidesPerView
          ? d.slideTo(d.virtual.slides.length + d.snapIndex, 0, !1, !0)
          : d.snapIndex === d.snapGrid.length - 1 &&
            d.slideTo(d.virtual.slidesBefore, 0, !1, !0)),
      (d.allowSlidePrev = c),
      (d.allowSlideNext = p),
      d.emit("loopFix"));
    return;
  }
  let g = h.slidesPerView;
  g === "auto"
    ? (g = d.slidesPerViewDynamic())
    : ((g = Math.ceil(parseFloat(h.slidesPerView, 10))),
      F && g % 2 === 0 && (g = g + 1));
  const m = h.slidesPerGroupAuto ? g : h.slidesPerGroup;
  let x = F ? Math.max(m, Math.ceil(g / 2)) : m;
  (x % m !== 0 && (x += m - (x % m)),
    (x += h.loopAdditionalSlides),
    (d.loopedSlides = x));
  const w = d.grid && h.grid && h.grid.rows > 1;
  u.length < g + x || (d.params.effect === "cards" && u.length < g + x * 2)
    ? bn(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters",
      )
    : w &&
      h.grid.fill === "row" &&
      bn(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`",
      );
  const _ = [],
    T = [],
    A = w ? Math.ceil(u.length / h.grid.rows) : u.length,
    k = a && A - v < g && !F;
  let S = k ? v : d.activeIndex;
  typeof r > "u"
    ? (r = d.getSlideIndex(
        u.find((R) => R.classList.contains(h.slideActiveClass)),
      ))
    : (S = r);
  const y = s === "next" || !s,
    B = s === "prev" || !s;
  let M = 0,
    Q = 0;
  const oe = (w ? u[r].column : r) + (F && typeof n > "u" ? -g / 2 + 0.5 : 0);
  if (oe < x) {
    M = Math.max(x - oe, m);
    for (let R = 0; R < x - oe; R += 1) {
      const N = R - Math.floor(R / A) * A;
      if (w) {
        const C = A - N - 1;
        for (let ee = u.length - 1; ee >= 0; ee -= 1)
          u[ee].column === C && _.push(ee);
      } else _.push(A - N - 1);
    }
  } else if (oe + g > A - x) {
    ((Q = Math.max(oe - (A - x * 2), m)),
      k && (Q = Math.max(Q, g - A + v + 1)));
    for (let R = 0; R < Q; R += 1) {
      const N = R - Math.floor(R / A) * A;
      w
        ? u.forEach((C, ee) => {
            C.column === N && T.push(ee);
          })
        : T.push(N);
    }
  }
  if (
    ((d.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      d.__preventObserver__ = !1;
    }),
    d.params.effect === "cards" &&
      u.length < g + x * 2 &&
      (T.includes(r) && T.splice(T.indexOf(r), 1),
      _.includes(r) && _.splice(_.indexOf(r), 1)),
    B &&
      _.forEach((R) => {
        ((u[R].swiperLoopMoveDOM = !0),
          f.prepend(u[R]),
          (u[R].swiperLoopMoveDOM = !1));
      }),
    y &&
      T.forEach((R) => {
        ((u[R].swiperLoopMoveDOM = !0),
          f.append(u[R]),
          (u[R].swiperLoopMoveDOM = !1));
      }),
    d.recalcSlides(),
    h.slidesPerView === "auto"
      ? d.updateSlides()
      : w &&
        ((_.length > 0 && B) || (T.length > 0 && y)) &&
        d.slides.forEach((R, N) => {
          d.grid.updateSlide(N, R, d.slides);
        }),
    h.watchSlidesProgress && d.updateSlidesOffset(),
    i)
  ) {
    if (_.length > 0 && B) {
      if (typeof t > "u") {
        const R = d.slidesGrid[S],
          C = d.slidesGrid[S + M] - R;
        l
          ? d.setTranslate(d.translate - C)
          : (d.slideTo(S + Math.ceil(M), 0, !1, !0),
            n &&
              ((d.touchEventsData.startTranslate =
                d.touchEventsData.startTranslate - C),
              (d.touchEventsData.currentTranslate =
                d.touchEventsData.currentTranslate - C)));
      } else if (n) {
        const R = w ? _.length / h.grid.rows : _.length;
        (d.slideTo(d.activeIndex + R, 0, !1, !0),
          (d.touchEventsData.currentTranslate = d.translate));
      }
    } else if (T.length > 0 && y)
      if (typeof t > "u") {
        const R = d.slidesGrid[S],
          C = d.slidesGrid[S - Q] - R;
        l
          ? d.setTranslate(d.translate - C)
          : (d.slideTo(S - Q, 0, !1, !0),
            n &&
              ((d.touchEventsData.startTranslate =
                d.touchEventsData.startTranslate - C),
              (d.touchEventsData.currentTranslate =
                d.touchEventsData.currentTranslate - C)));
      } else {
        const R = w ? T.length / h.grid.rows : T.length;
        d.slideTo(d.activeIndex - R, 0, !1, !0);
      }
  }
  if (
    ((d.allowSlidePrev = c),
    (d.allowSlideNext = p),
    d.controller && d.controller.control && !o)
  ) {
    const R = {
      slideRealIndex: t,
      direction: s,
      setTranslate: n,
      activeSlideIndex: r,
      byController: !0,
    };
    Array.isArray(d.controller.control)
      ? d.controller.control.forEach((N) => {
          !N.destroyed &&
            N.params.loop &&
            N.loopFix({
              ...R,
              slideTo: N.params.slidesPerView === h.slidesPerView ? i : !1,
            });
        })
      : d.controller.control instanceof d.constructor &&
        d.controller.control.params.loop &&
        d.controller.control.loopFix({
          ...R,
          slideTo:
            d.controller.control.params.slidesPerView === h.slidesPerView
              ? i
              : !1,
        });
  }
  d.emit("loopFix");
}
function rp() {
  const e = this,
    { params: t, slidesEl: i } = e;
  if (!t.loop || !i || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const s = [];
  (e.slides.forEach((n) => {
    const r =
      typeof n.swiperSlideIndex > "u"
        ? n.getAttribute("data-swiper-slide-index") * 1
        : n.swiperSlideIndex;
    s[r] = n;
  }),
    e.slides.forEach((n) => {
      n.removeAttribute("data-swiper-slide-index");
    }),
    s.forEach((n) => {
      i.append(n);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0));
}
var ap = { loopCreate: sp, loopFix: np, loopDestroy: rp };
function op(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const i = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  (t.isElement && (t.__preventObserver__ = !0),
    (i.style.cursor = "move"),
    (i.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      }));
}
function lp() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var dp = { setGrabCursor: op, unsetGrabCursor: lp };
function cp(e, t) {
  t === void 0 && (t = this);
  function i(s) {
    if (!s || s === $i() || s === gt()) return null;
    s.assignedSlot && (s = s.assignedSlot);
    const n = s.closest(e);
    return !n && !s.getRootNode ? null : n || i(s.getRootNode().host);
  }
  return i(t);
}
function na(e, t, i) {
  const s = gt(),
    { params: n } = e,
    r = n.edgeSwipeDetection,
    a = n.edgeSwipeThreshold;
  return r && (i <= a || i >= s.innerWidth - a)
    ? r === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function up(e) {
  const t = this,
    i = $i();
  let s = e;
  s.originalEvent && (s = s.originalEvent);
  const n = t.touchEventsData;
  if (s.type === "pointerdown") {
    if (n.pointerId !== null && n.pointerId !== s.pointerId) return;
    n.pointerId = s.pointerId;
  } else
    s.type === "touchstart" &&
      s.targetTouches.length === 1 &&
      (n.touchId = s.targetTouches[0].identifier);
  if (s.type === "touchstart") {
    na(t, s, s.targetTouches[0].pageX);
    return;
  }
  const { params: r, touches: a, enabled: o } = t;
  if (
    !o ||
    (!r.simulateTouch && s.pointerType === "mouse") ||
    (t.animating && r.preventInteractionOnTransition)
  )
    return;
  !t.animating && r.cssMode && r.loop && t.loopFix();
  let l = s.target;
  if (
    (r.touchEventsTarget === "wrapper" && !vu(l, t.wrapperEl)) ||
    ("which" in s && s.which === 3) ||
    ("button" in s && s.button > 0) ||
    (n.isTouched && n.isMoved)
  )
    return;
  const d = !!r.noSwipingClass && r.noSwipingClass !== "",
    u = s.composedPath ? s.composedPath() : s.path;
  d && s.target && s.target.shadowRoot && u && (l = u[0]);
  const c = r.noSwipingSelector ? r.noSwipingSelector : `.${r.noSwipingClass}`,
    p = !!(s.target && s.target.shadowRoot);
  if (r.noSwiping && (p ? cp(c, l) : l.closest(c))) {
    t.allowClick = !0;
    return;
  }
  if (r.swipeHandler && !l.closest(r.swipeHandler)) return;
  ((a.currentX = s.pageX), (a.currentY = s.pageY));
  const f = a.currentX,
    h = a.currentY;
  if (!na(t, s, f)) return;
  (Object.assign(n, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (a.startX = f),
    (a.startY = h),
    (n.touchStartTime = wn()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    r.threshold > 0 && (n.allowThresholdMove = !1));
  let F = !0;
  (l.matches(n.focusableElements) &&
    ((F = !1), l.nodeName === "SELECT" && (n.isTouched = !1)),
    i.activeElement &&
      i.activeElement.matches(n.focusableElements) &&
      i.activeElement !== l &&
      (s.pointerType === "mouse" ||
        (s.pointerType !== "mouse" && !l.matches(n.focusableElements))) &&
      i.activeElement.blur());
  const v = F && t.allowTouchMove && r.touchStartPreventDefault;
  ((r.touchStartForcePreventDefault || v) &&
    !l.isContentEditable &&
    s.preventDefault(),
    r.freeMode &&
      r.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !r.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", s));
}
function pp(e) {
  const t = $i(),
    i = this,
    s = i.touchEventsData,
    { params: n, touches: r, rtlTranslate: a, enabled: o } = i;
  if (!o || (!n.simulateTouch && e.pointerType === "mouse")) return;
  let l = e;
  if (
    (l.originalEvent && (l = l.originalEvent),
    l.type === "pointermove" &&
      (s.touchId !== null || l.pointerId !== s.pointerId))
  )
    return;
  let d;
  if (l.type === "touchmove") {
    if (
      ((d = [...l.changedTouches].find((_) => _.identifier === s.touchId)),
      !d || d.identifier !== s.touchId)
    )
      return;
  } else d = l;
  if (!s.isTouched) {
    s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", l);
    return;
  }
  const u = d.pageX,
    c = d.pageY;
  if (l.preventedByNestedSwiper) {
    ((r.startX = u), (r.startY = c));
    return;
  }
  if (!i.allowTouchMove) {
    (l.target.matches(s.focusableElements) || (i.allowClick = !1),
      s.isTouched &&
        (Object.assign(r, { startX: u, startY: c, currentX: u, currentY: c }),
        (s.touchStartTime = wn())));
    return;
  }
  if (n.touchReleaseOnEdges && !n.loop)
    if (i.isVertical()) {
      if (
        (c < r.startY && i.translate <= i.maxTranslate()) ||
        (c > r.startY && i.translate >= i.minTranslate())
      ) {
        ((s.isTouched = !1), (s.isMoved = !1));
        return;
      }
    } else {
      if (
        a &&
        ((u > r.startX && -i.translate <= i.maxTranslate()) ||
          (u < r.startX && -i.translate >= i.minTranslate()))
      )
        return;
      if (
        !a &&
        ((u < r.startX && i.translate <= i.maxTranslate()) ||
          (u > r.startX && i.translate >= i.minTranslate()))
      )
        return;
    }
  if (
    (t.activeElement &&
      t.activeElement.matches(s.focusableElements) &&
      t.activeElement !== l.target &&
      l.pointerType !== "mouse" &&
      t.activeElement.blur(),
    t.activeElement &&
      l.target === t.activeElement &&
      l.target.matches(s.focusableElements))
  ) {
    ((s.isMoved = !0), (i.allowClick = !1));
    return;
  }
  (s.allowTouchCallbacks && i.emit("touchMove", l),
    (r.previousX = r.currentX),
    (r.previousY = r.currentY),
    (r.currentX = u),
    (r.currentY = c));
  const p = r.currentX - r.startX,
    f = r.currentY - r.startY;
  if (i.params.threshold && Math.sqrt(p ** 2 + f ** 2) < i.params.threshold)
    return;
  if (typeof s.isScrolling > "u") {
    let _;
    (i.isHorizontal() && r.currentY === r.startY) ||
    (i.isVertical() && r.currentX === r.startX)
      ? (s.isScrolling = !1)
      : p * p + f * f >= 25 &&
        ((_ = (Math.atan2(Math.abs(f), Math.abs(p)) * 180) / Math.PI),
        (s.isScrolling = i.isHorizontal()
          ? _ > n.touchAngle
          : 90 - _ > n.touchAngle));
  }
  if (
    (s.isScrolling && i.emit("touchMoveOpposite", l),
    typeof s.startMoving > "u" &&
      (r.currentX !== r.startX || r.currentY !== r.startY) &&
      (s.startMoving = !0),
    s.isScrolling ||
      (l.type === "touchmove" && s.preventTouchMoveFromPointerMove))
  ) {
    s.isTouched = !1;
    return;
  }
  if (!s.startMoving) return;
  ((i.allowClick = !1),
    !n.cssMode && l.cancelable && l.preventDefault(),
    n.touchMoveStopPropagation && !n.nested && l.stopPropagation());
  let h = i.isHorizontal() ? p : f,
    F = i.isHorizontal() ? r.currentX - r.previousX : r.currentY - r.previousY;
  (n.oneWayMovement &&
    ((h = Math.abs(h) * (a ? 1 : -1)), (F = Math.abs(F) * (a ? 1 : -1))),
    (r.diff = h),
    (h *= n.touchRatio),
    a && ((h = -h), (F = -F)));
  const v = i.touchesDirection;
  ((i.swipeDirection = h > 0 ? "prev" : "next"),
    (i.touchesDirection = F > 0 ? "prev" : "next"));
  const g = i.params.loop && !n.cssMode,
    m =
      (i.touchesDirection === "next" && i.allowSlideNext) ||
      (i.touchesDirection === "prev" && i.allowSlidePrev);
  if (!s.isMoved) {
    if (
      (g && m && i.loopFix({ direction: i.swipeDirection }),
      (s.startTranslate = i.getTranslate()),
      i.setTransition(0),
      i.animating)
    ) {
      const _ = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      i.wrapperEl.dispatchEvent(_);
    }
    ((s.allowMomentumBounce = !1),
      n.grabCursor &&
        (i.allowSlideNext === !0 || i.allowSlidePrev === !0) &&
        i.setGrabCursor(!0),
      i.emit("sliderFirstMove", l));
  }
  if (
    (new Date().getTime(),
    n._loopSwapReset !== !1 &&
      s.isMoved &&
      s.allowThresholdMove &&
      v !== i.touchesDirection &&
      g &&
      m &&
      Math.abs(h) >= 1)
  ) {
    (Object.assign(r, {
      startX: u,
      startY: c,
      currentX: u,
      currentY: c,
      startTranslate: s.currentTranslate,
    }),
      (s.loopSwapReset = !0),
      (s.startTranslate = s.currentTranslate));
    return;
  }
  (i.emit("sliderMove", l),
    (s.isMoved = !0),
    (s.currentTranslate = h + s.startTranslate));
  let x = !0,
    w = n.resistanceRatio;
  if (
    (n.touchReleaseOnEdges && (w = 0),
    h > 0
      ? (g &&
          m &&
          s.allowThresholdMove &&
          s.currentTranslate >
            (n.centeredSlides
              ? i.minTranslate() -
                i.slidesSizesGrid[i.activeIndex + 1] -
                (n.slidesPerView !== "auto" &&
                i.slides.length - n.slidesPerView >= 2
                  ? i.slidesSizesGrid[i.activeIndex + 1] + i.params.spaceBetween
                  : 0) -
                i.params.spaceBetween
              : i.minTranslate()) &&
          i.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        s.currentTranslate > i.minTranslate() &&
          ((x = !1),
          n.resistance &&
            (s.currentTranslate =
              i.minTranslate() -
              1 +
              (-i.minTranslate() + s.startTranslate + h) ** w)))
      : h < 0 &&
        (g &&
          m &&
          s.allowThresholdMove &&
          s.currentTranslate <
            (n.centeredSlides
              ? i.maxTranslate() +
                i.slidesSizesGrid[i.slidesSizesGrid.length - 1] +
                i.params.spaceBetween +
                (n.slidesPerView !== "auto" &&
                i.slides.length - n.slidesPerView >= 2
                  ? i.slidesSizesGrid[i.slidesSizesGrid.length - 1] +
                    i.params.spaceBetween
                  : 0)
              : i.maxTranslate()) &&
          i.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              i.slides.length -
              (n.slidesPerView === "auto"
                ? i.slidesPerViewDynamic()
                : Math.ceil(parseFloat(n.slidesPerView, 10))),
          }),
        s.currentTranslate < i.maxTranslate() &&
          ((x = !1),
          n.resistance &&
            (s.currentTranslate =
              i.maxTranslate() +
              1 -
              (i.maxTranslate() - s.startTranslate - h) ** w))),
    x && (l.preventedByNestedSwiper = !0),
    !i.allowSlideNext &&
      i.swipeDirection === "next" &&
      s.currentTranslate < s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !i.allowSlidePrev &&
      i.swipeDirection === "prev" &&
      s.currentTranslate > s.startTranslate &&
      (s.currentTranslate = s.startTranslate),
    !i.allowSlidePrev &&
      !i.allowSlideNext &&
      (s.currentTranslate = s.startTranslate),
    n.threshold > 0)
  )
    if (Math.abs(h) > n.threshold || s.allowThresholdMove) {
      if (!s.allowThresholdMove) {
        ((s.allowThresholdMove = !0),
          (r.startX = r.currentX),
          (r.startY = r.currentY),
          (s.currentTranslate = s.startTranslate),
          (r.diff = i.isHorizontal()
            ? r.currentX - r.startX
            : r.currentY - r.startY));
        return;
      }
    } else {
      s.currentTranslate = s.startTranslate;
      return;
    }
  !n.followFinger ||
    n.cssMode ||
    (((n.freeMode && n.freeMode.enabled && i.freeMode) ||
      n.watchSlidesProgress) &&
      (i.updateActiveIndex(), i.updateSlidesClasses()),
    n.freeMode && n.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(),
    i.updateProgress(s.currentTranslate),
    i.setTranslate(s.currentTranslate));
}
function fp(e) {
  const t = this,
    i = t.touchEventsData;
  let s = e;
  s.originalEvent && (s = s.originalEvent);
  let n;
  if (s.type === "touchend" || s.type === "touchcancel") {
    if (
      ((n = [...s.changedTouches].find((_) => _.identifier === i.touchId)),
      !n || n.identifier !== i.touchId)
    )
      return;
  } else {
    if (i.touchId !== null || s.pointerId !== i.pointerId) return;
    n = s;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      s.type,
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(s.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  ((i.pointerId = null), (i.touchId = null));
  const {
    params: a,
    touches: o,
    rtlTranslate: l,
    slidesGrid: d,
    enabled: u,
  } = t;
  if (!u || (!a.simulateTouch && s.pointerType === "mouse")) return;
  if (
    (i.allowTouchCallbacks && t.emit("touchEnd", s),
    (i.allowTouchCallbacks = !1),
    !i.isTouched)
  ) {
    (i.isMoved && a.grabCursor && t.setGrabCursor(!1),
      (i.isMoved = !1),
      (i.startMoving = !1));
    return;
  }
  a.grabCursor &&
    i.isMoved &&
    i.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const c = wn(),
    p = c - i.touchStartTime;
  if (t.allowClick) {
    const _ = s.path || (s.composedPath && s.composedPath());
    (t.updateClickedSlide((_ && _[0]) || s.target, _),
      t.emit("tap click", s),
      p < 300 &&
        c - i.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", s));
  }
  if (
    ((i.lastClickTime = wn()),
    Wa(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !i.isTouched ||
      !i.isMoved ||
      !t.swipeDirection ||
      (o.diff === 0 && !i.loopSwapReset) ||
      (i.currentTranslate === i.startTranslate && !i.loopSwapReset))
  ) {
    ((i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1));
    return;
  }
  ((i.isTouched = !1), (i.isMoved = !1), (i.startMoving = !1));
  let f;
  if (
    (a.followFinger
      ? (f = l ? t.translate : -t.translate)
      : (f = -i.currentTranslate),
    a.cssMode)
  )
    return;
  if (a.freeMode && a.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: f });
    return;
  }
  const h = f >= -t.maxTranslate() && !t.params.loop;
  let F = 0,
    v = t.slidesSizesGrid[0];
  for (
    let _ = 0;
    _ < d.length;
    _ += _ < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup
  ) {
    const T = _ < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
    typeof d[_ + T] < "u"
      ? (h || (f >= d[_] && f < d[_ + T])) && ((F = _), (v = d[_ + T] - d[_]))
      : (h || f >= d[_]) && ((F = _), (v = d[d.length - 1] - d[d.length - 2]));
  }
  let g = null,
    m = null;
  a.rewind &&
    (t.isBeginning
      ? (m =
          a.virtual && a.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (g = 0));
  const x = (f - d[F]) / v,
    w = F < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
  if (p > a.longSwipesMs) {
    if (!a.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    (t.swipeDirection === "next" &&
      (x >= a.longSwipesRatio
        ? t.slideTo(a.rewind && t.isEnd ? g : F + w)
        : t.slideTo(F)),
      t.swipeDirection === "prev" &&
        (x > 1 - a.longSwipesRatio
          ? t.slideTo(F + w)
          : m !== null && x < 0 && Math.abs(x) > a.longSwipesRatio
            ? t.slideTo(m)
            : t.slideTo(F)));
  } else {
    if (!a.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (s.target === t.navigation.nextEl || s.target === t.navigation.prevEl)
      ? s.target === t.navigation.nextEl
        ? t.slideTo(F + w)
        : t.slideTo(F)
      : (t.swipeDirection === "next" && t.slideTo(g !== null ? g : F + w),
        t.swipeDirection === "prev" && t.slideTo(m !== null ? m : F));
  }
}
function ra() {
  const e = this,
    { params: t, el: i } = e;
  if (i && i.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: s, allowSlidePrev: n, snapGrid: r } = e,
    a = e.virtual && e.params.virtual.enabled;
  ((e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses());
  const o = a && t.loop;
  ((t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !o
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !a
      ? e.slideToLoop(e.realIndex, 0, !1, !0)
      : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = n),
    (e.allowSlideNext = s),
    e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow());
}
function hp(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function gp() {
  const e = this,
    { wrapperEl: t, rtlTranslate: i, enabled: s } = e;
  if (!s) return;
  ((e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses());
  let n;
  const r = e.maxTranslate() - e.minTranslate();
  (r === 0 ? (n = 0) : (n = (e.translate - e.minTranslate()) / r),
    n !== e.progress && e.updateProgress(i ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1));
}
function mp(e) {
  const t = this;
  (pn(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update());
}
function vp() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const eo = (e, t) => {
  const i = $i(),
    { params: s, el: n, wrapperEl: r, device: a } = e,
    o = !!s.nested,
    l = t === "on" ? "addEventListener" : "removeEventListener",
    d = t;
  !n ||
    typeof n == "string" ||
    (i[l]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: o }),
    n[l]("touchstart", e.onTouchStart, { passive: !1 }),
    n[l]("pointerdown", e.onTouchStart, { passive: !1 }),
    i[l]("touchmove", e.onTouchMove, { passive: !1, capture: o }),
    i[l]("pointermove", e.onTouchMove, { passive: !1, capture: o }),
    i[l]("touchend", e.onTouchEnd, { passive: !0 }),
    i[l]("pointerup", e.onTouchEnd, { passive: !0 }),
    i[l]("pointercancel", e.onTouchEnd, { passive: !0 }),
    i[l]("touchcancel", e.onTouchEnd, { passive: !0 }),
    i[l]("pointerout", e.onTouchEnd, { passive: !0 }),
    i[l]("pointerleave", e.onTouchEnd, { passive: !0 }),
    i[l]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (s.preventClicks || s.preventClicksPropagation) &&
      n[l]("click", e.onClick, !0),
    s.cssMode && r[l]("scroll", e.onScroll),
    s.updateOnWindowResize
      ? e[d](
          a.ios || a.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          ra,
          !0,
        )
      : e[d]("observerUpdate", ra, !0),
    n[l]("load", e.onLoad, { capture: !0 }));
};
function xp() {
  const e = this,
    { params: t } = e;
  ((e.onTouchStart = up.bind(e)),
    (e.onTouchMove = pp.bind(e)),
    (e.onTouchEnd = fp.bind(e)),
    (e.onDocumentTouchStart = vp.bind(e)),
    t.cssMode && (e.onScroll = gp.bind(e)),
    (e.onClick = hp.bind(e)),
    (e.onLoad = mp.bind(e)),
    eo(e, "on"));
}
function Fp() {
  eo(this, "off");
}
var wp = { attachEvents: xp, detachEvents: Fp };
const aa = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function bp() {
  const e = this,
    { realIndex: t, initialized: i, params: s, el: n } = e,
    r = s.breakpoints;
  if (!r || (r && Object.keys(r).length === 0)) return;
  const a = $i(),
    o =
      s.breakpointsBase === "window" || !s.breakpointsBase
        ? s.breakpointsBase
        : "container",
    l =
      ["window", "container"].includes(s.breakpointsBase) || !s.breakpointsBase
        ? e.el
        : a.querySelector(s.breakpointsBase),
    d = e.getBreakpoint(r, o, l);
  if (!d || e.currentBreakpoint === d) return;
  const c = (d in r ? r[d] : void 0) || e.originalParams,
    p = aa(e, s),
    f = aa(e, c),
    h = e.params.grabCursor,
    F = c.grabCursor,
    v = s.enabled;
  (p && !f
    ? (n.classList.remove(
        `${s.containerModifierClass}grid`,
        `${s.containerModifierClass}grid-column`,
      ),
      e.emitContainerClasses())
    : !p &&
      f &&
      (n.classList.add(`${s.containerModifierClass}grid`),
      ((c.grid.fill && c.grid.fill === "column") ||
        (!c.grid.fill && s.grid.fill === "column")) &&
        n.classList.add(`${s.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    h && !F ? e.unsetGrabCursor() : !h && F && e.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((T) => {
      if (typeof c[T] > "u") return;
      const A = s[T] && s[T].enabled,
        k = c[T] && c[T].enabled;
      (A && !k && e[T].disable(), !A && k && e[T].enable());
    }));
  const g = c.direction && c.direction !== s.direction,
    m = s.loop && (c.slidesPerView !== s.slidesPerView || g),
    x = s.loop;
  (g && i && e.changeDirection(), Tt(e.params, c));
  const w = e.params.enabled,
    _ = e.params.loop;
  (Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    v && !w ? e.disable() : !v && w && e.enable(),
    (e.currentBreakpoint = d),
    e.emit("_beforeBreakpoint", c),
    i &&
      (m
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !x && _
          ? (e.loopCreate(t), e.updateSlides())
          : x && !_ && e.loopDestroy()),
    e.emit("breakpoint", c));
}
function yp(e, t, i) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !i))) return;
  let s = !1;
  const n = gt(),
    r = t === "window" ? n.innerHeight : i.clientHeight,
    a = Object.keys(e).map((o) => {
      if (typeof o == "string" && o.indexOf("@") === 0) {
        const l = parseFloat(o.substr(1));
        return { value: r * l, point: o };
      }
      return { value: o, point: o };
    });
  a.sort((o, l) => parseInt(o.value, 10) - parseInt(l.value, 10));
  for (let o = 0; o < a.length; o += 1) {
    const { point: l, value: d } = a[o];
    t === "window"
      ? n.matchMedia(`(min-width: ${d}px)`).matches && (s = l)
      : d <= i.clientWidth && (s = l);
  }
  return s || "max";
}
var Ap = { setBreakpoint: bp, getBreakpoint: yp };
function Ep(e, t) {
  const i = [];
  return (
    e.forEach((s) => {
      typeof s == "object"
        ? Object.keys(s).forEach((n) => {
            s[n] && i.push(t + n);
          })
        : typeof s == "string" && i.push(t + s);
    }),
    i
  );
}
function _p() {
  const e = this,
    { classNames: t, params: i, rtl: s, el: n, device: r } = e,
    a = Ep(
      [
        "initialized",
        i.direction,
        { "free-mode": e.params.freeMode && i.freeMode.enabled },
        { autoheight: i.autoHeight },
        { rtl: s },
        { grid: i.grid && i.grid.rows > 1 },
        {
          "grid-column": i.grid && i.grid.rows > 1 && i.grid.fill === "column",
        },
        { android: r.android },
        { ios: r.ios },
        { "css-mode": i.cssMode },
        { centered: i.cssMode && i.centeredSlides },
        { "watch-progress": i.watchSlidesProgress },
      ],
      i.containerModifierClass,
    );
  (t.push(...a), n.classList.add(...t), e.emitContainerClasses());
}
function Cp() {
  const e = this,
    { el: t, classNames: i } = e;
  !t ||
    typeof t == "string" ||
    (t.classList.remove(...i), e.emitContainerClasses());
}
var Sp = { addClasses: _p, removeClasses: Cp };
function Tp() {
  const e = this,
    { isLocked: t, params: i } = e,
    { slidesOffsetBefore: s } = i;
  if (s) {
    const n = e.slides.length - 1,
      r = e.slidesGrid[n] + e.slidesSizesGrid[n] + s * 2;
    e.isLocked = e.size > r;
  } else e.isLocked = e.snapGrid.length === 1;
  (i.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    i.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock"));
}
var Dp = { checkOverflow: Tp },
  cr = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function Mp(e, t) {
  return function (s) {
    s === void 0 && (s = {});
    const n = Object.keys(s)[0],
      r = s[n];
    if (typeof r != "object" || r === null) {
      Tt(t, s);
      return;
    }
    if (
      (e[n] === !0 && (e[n] = { enabled: !0 }),
      n === "navigation" &&
        e[n] &&
        e[n].enabled &&
        !e[n].prevEl &&
        !e[n].nextEl &&
        (e[n].auto = !0),
      ["pagination", "scrollbar"].indexOf(n) >= 0 &&
        e[n] &&
        e[n].enabled &&
        !e[n].el &&
        (e[n].auto = !0),
      !(n in e && "enabled" in r))
    ) {
      Tt(t, s);
      return;
    }
    (typeof e[n] == "object" && !("enabled" in e[n]) && (e[n].enabled = !0),
      e[n] || (e[n] = { enabled: !1 }),
      Tt(t, s));
  };
}
const jn = {
    eventsEmitter: Su,
    update: Ru,
    translate: ju,
    transition: Xu,
    slide: ip,
    loop: ap,
    grabCursor: dp,
    events: wp,
    breakpoints: Ap,
    checkOverflow: Dp,
    classes: Sp,
  },
  Qn = {};
let Dr = class mi {
  constructor() {
    let t, i;
    for (var s = arguments.length, n = new Array(s), r = 0; r < s; r++)
      n[r] = arguments[r];
    (n.length === 1 &&
    n[0].constructor &&
    Object.prototype.toString.call(n[0]).slice(8, -1) === "Object"
      ? (i = n[0])
      : ([t, i] = n),
      i || (i = {}),
      (i = Tt({}, i)),
      t && !i.el && (i.el = t));
    const a = $i();
    if (
      i.el &&
      typeof i.el == "string" &&
      a.querySelectorAll(i.el).length > 1
    ) {
      const u = [];
      return (
        a.querySelectorAll(i.el).forEach((c) => {
          const p = Tt({}, i, { el: c });
          u.push(new mi(p));
        }),
        u
      );
    }
    const o = this;
    ((o.__swiper__ = !0),
      (o.support = qa()),
      (o.device = Ja({ userAgent: i.userAgent })),
      (o.browser = Za()),
      (o.eventsListeners = {}),
      (o.eventsAnyListeners = []),
      (o.modules = [...o.__modules__]),
      i.modules && Array.isArray(i.modules) && o.modules.push(...i.modules));
    const l = {};
    o.modules.forEach((u) => {
      u({
        params: i,
        swiper: o,
        extendParams: Mp(i, l),
        on: o.on.bind(o),
        once: o.once.bind(o),
        off: o.off.bind(o),
        emit: o.emit.bind(o),
      });
    });
    const d = Tt({}, cr, l);
    return (
      (o.params = Tt({}, d, Qn, i)),
      (o.originalParams = Tt({}, o.params)),
      (o.passedParams = Tt({}, i)),
      o.params &&
        o.params.on &&
        Object.keys(o.params.on).forEach((u) => {
          o.on(u, o.params.on[u]);
        }),
      o.params && o.params.onAny && o.onAny(o.params.onAny),
      Object.assign(o, {
        enabled: o.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return o.params.direction === "horizontal";
        },
        isVertical() {
          return o.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: o.params.allowSlideNext,
        allowSlidePrev: o.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: o.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: o.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      o.emit("_swiper"),
      o.params.init && o.init(),
      o
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: i, params: s } = this,
      n = $t(i, `.${s.slideClass}, swiper-slide`),
      r = ea(n[0]);
    return ea(t) - r;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.find(
        (i) => i.getAttribute("data-swiper-slide-index") * 1 === t,
      ),
    );
  }
  getSlideIndexWhenGrid(t) {
    return (
      this.grid &&
        this.params.grid &&
        this.params.grid.rows > 1 &&
        (this.params.grid.fill === "column"
          ? (t = Math.floor(t / this.params.grid.rows))
          : this.params.grid.fill === "row" &&
            (t = t % Math.ceil(this.slides.length / this.params.grid.rows))),
      t
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: i, params: s } = t;
    t.slides = $t(i, `.${s.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, i) {
    const s = this;
    t = Math.min(Math.max(t, 0), 1);
    const n = s.minTranslate(),
      a = (s.maxTranslate() - n) * t + n;
    (s.translateTo(a, typeof i > "u" ? 0 : i),
      s.updateActiveIndex(),
      s.updateSlidesClasses());
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const i = t.el.className
      .split(" ")
      .filter(
        (s) =>
          s.indexOf("swiper") === 0 ||
          s.indexOf(t.params.containerModifierClass) === 0,
      );
    t.emit("_containerClasses", i.join(" "));
  }
  getSlideClasses(t) {
    const i = this;
    return i.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (s) =>
              s.indexOf("swiper-slide") === 0 ||
              s.indexOf(i.params.slideClass) === 0,
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const i = [];
    (t.slides.forEach((s) => {
      const n = t.getSlideClasses(s);
      (i.push({ slideEl: s, classNames: n }), t.emit("_slideClass", s, n));
    }),
      t.emit("_slideClasses", i));
  }
  slidesPerViewDynamic(t, i) {
    (t === void 0 && (t = "current"), i === void 0 && (i = !1));
    const s = this,
      {
        params: n,
        slides: r,
        slidesGrid: a,
        slidesSizesGrid: o,
        size: l,
        activeIndex: d,
      } = s;
    let u = 1;
    if (typeof n.slidesPerView == "number") return n.slidesPerView;
    if (n.centeredSlides) {
      let c = r[d] ? Math.ceil(r[d].swiperSlideSize) : 0,
        p;
      for (let f = d + 1; f < r.length; f += 1)
        r[f] &&
          !p &&
          ((c += Math.ceil(r[f].swiperSlideSize)), (u += 1), c > l && (p = !0));
      for (let f = d - 1; f >= 0; f -= 1)
        r[f] &&
          !p &&
          ((c += r[f].swiperSlideSize), (u += 1), c > l && (p = !0));
    } else if (t === "current")
      for (let c = d + 1; c < r.length; c += 1)
        (i ? a[c] + o[c] - a[d] < l : a[c] - a[d] < l) && (u += 1);
    else for (let c = d - 1; c >= 0; c -= 1) a[d] - a[c] < l && (u += 1);
    return u;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: i, params: s } = t;
    (s.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((a) => {
        a.complete && pn(t, a);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses());
    function n() {
      const a = t.rtlTranslate ? t.translate * -1 : t.translate,
        o = Math.min(Math.max(a, t.maxTranslate()), t.minTranslate());
      (t.setTranslate(o), t.updateActiveIndex(), t.updateSlidesClasses());
    }
    let r;
    if (s.freeMode && s.freeMode.enabled && !s.cssMode)
      (n(), s.autoHeight && t.updateAutoHeight());
    else {
      if (
        (s.slidesPerView === "auto" || s.slidesPerView > 1) &&
        t.isEnd &&
        !s.centeredSlides
      ) {
        const a = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides;
        r = t.slideTo(a.length - 1, 0, !1, !0);
      } else r = t.slideTo(t.activeIndex, 0, !1, !0);
      r || n();
    }
    (s.watchOverflow && i !== t.snapGrid && t.checkOverflow(),
      t.emit("update"));
  }
  changeDirection(t, i) {
    i === void 0 && (i = !0);
    const s = this,
      n = s.params.direction;
    return (
      t || (t = n === "horizontal" ? "vertical" : "horizontal"),
      t === n ||
        (t !== "horizontal" && t !== "vertical") ||
        (s.el.classList.remove(`${s.params.containerModifierClass}${n}`),
        s.el.classList.add(`${s.params.containerModifierClass}${t}`),
        s.emitContainerClasses(),
        (s.params.direction = t),
        s.slides.forEach((r) => {
          t === "vertical" ? (r.style.width = "") : (r.style.height = "");
        }),
        s.emit("changeDirection"),
        i && s.update()),
      s
    );
  }
  changeLanguageDirection(t) {
    const i = this;
    (i.rtl && t === "rtl") ||
      (!i.rtl && t === "ltr") ||
      ((i.rtl = t === "rtl"),
      (i.rtlTranslate = i.params.direction === "horizontal" && i.rtl),
      i.rtl
        ? (i.el.classList.add(`${i.params.containerModifierClass}rtl`),
          (i.el.dir = "rtl"))
        : (i.el.classList.remove(`${i.params.containerModifierClass}rtl`),
          (i.el.dir = "ltr")),
      i.update());
  }
  mount(t) {
    const i = this;
    if (i.mounted) return !0;
    let s = t || i.params.el;
    if ((typeof s == "string" && (s = document.querySelector(s)), !s))
      return !1;
    ((s.swiper = i),
      s.parentNode &&
        s.parentNode.host &&
        s.parentNode.host.nodeName ===
          i.params.swiperElementNodeName.toUpperCase() &&
        (i.isElement = !0));
    const n = () =>
      `.${(i.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let a =
      s && s.shadowRoot && s.shadowRoot.querySelector
        ? s.shadowRoot.querySelector(n())
        : $t(s, n())[0];
    return (
      !a &&
        i.params.createElements &&
        ((a = yn("div", i.params.wrapperClass)),
        s.append(a),
        $t(s, `.${i.params.slideClass}`).forEach((o) => {
          a.append(o);
        })),
      Object.assign(i, {
        el: s,
        wrapperEl: a,
        slidesEl:
          i.isElement && !s.parentNode.host.slideSlots ? s.parentNode.host : a,
        hostEl: i.isElement ? s.parentNode.host : s,
        mounted: !0,
        rtl: s.dir.toLowerCase() === "rtl" || Di(s, "direction") === "rtl",
        rtlTranslate:
          i.params.direction === "horizontal" &&
          (s.dir.toLowerCase() === "rtl" || Di(s, "direction") === "rtl"),
        wrongRTL: Di(a, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const i = this;
    if (i.initialized || i.mount(t) === !1) return i;
    (i.emit("beforeInit"),
      i.params.breakpoints && i.setBreakpoint(),
      i.addClasses(),
      i.updateSize(),
      i.updateSlides(),
      i.params.watchOverflow && i.checkOverflow(),
      i.params.grabCursor && i.enabled && i.setGrabCursor(),
      i.params.loop && i.virtual && i.params.virtual.enabled
        ? i.slideTo(
            i.params.initialSlide + i.virtual.slidesBefore,
            0,
            i.params.runCallbacksOnInit,
            !1,
            !0,
          )
        : i.slideTo(
            i.params.initialSlide,
            0,
            i.params.runCallbacksOnInit,
            !1,
            !0,
          ),
      i.params.loop && i.loopCreate(void 0, !0),
      i.attachEvents());
    const n = [...i.el.querySelectorAll('[loading="lazy"]')];
    return (
      i.isElement && n.push(...i.hostEl.querySelectorAll('[loading="lazy"]')),
      n.forEach((r) => {
        r.complete
          ? pn(i, r)
          : r.addEventListener("load", (a) => {
              pn(i, a.target);
            });
      }),
      dr(i),
      (i.initialized = !0),
      dr(i),
      i.emit("init"),
      i.emit("afterInit"),
      i
    );
  }
  destroy(t, i) {
    (t === void 0 && (t = !0), i === void 0 && (i = !0));
    const s = this,
      { params: n, el: r, wrapperEl: a, slides: o } = s;
    return (
      typeof s.params > "u" ||
        s.destroyed ||
        (s.emit("beforeDestroy"),
        (s.initialized = !1),
        s.detachEvents(),
        n.loop && s.loopDestroy(),
        i &&
          (s.removeClasses(),
          r && typeof r != "string" && r.removeAttribute("style"),
          a && a.removeAttribute("style"),
          o &&
            o.length &&
            o.forEach((l) => {
              (l.classList.remove(
                n.slideVisibleClass,
                n.slideFullyVisibleClass,
                n.slideActiveClass,
                n.slideNextClass,
                n.slidePrevClass,
              ),
                l.removeAttribute("style"),
                l.removeAttribute("data-swiper-slide-index"));
            })),
        s.emit("destroy"),
        Object.keys(s.eventsListeners).forEach((l) => {
          s.off(l);
        }),
        t !== !1 &&
          (s.el && typeof s.el != "string" && (s.el.swiper = null), pu(s)),
        (s.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    Tt(Qn, t);
  }
  static get extendedDefaults() {
    return Qn;
  }
  static get defaults() {
    return cr;
  }
  static installModule(t) {
    mi.prototype.__modules__ || (mi.prototype.__modules__ = []);
    const i = mi.prototype.__modules__;
    typeof t == "function" && i.indexOf(t) < 0 && i.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((i) => mi.installModule(i)), mi)
      : (mi.installModule(t), mi);
  }
};
Object.keys(jn).forEach((e) => {
  Object.keys(jn[e]).forEach((t) => {
    Dr.prototype[t] = jn[e][t];
  });
});
Dr.use([_u, Cu]);
const to = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function Ki(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function ds(e, t) {
  const i = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((s) => i.indexOf(s) < 0)
    .forEach((s) => {
      typeof e[s] > "u"
        ? (e[s] = t[s])
        : Ki(t[s]) && Ki(e[s]) && Object.keys(t[s]).length > 0
          ? t[s].__swiper__
            ? (e[s] = t[s])
            : ds(e[s], t[s])
          : (e[s] = t[s]);
    });
}
function io(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function so(e) {
  return (
    e === void 0 && (e = {}),
    e.pagination && typeof e.pagination.el > "u"
  );
}
function no(e) {
  return (e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u");
}
function ro(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((s) => s.trim())
      .filter((s) => !!s),
    i = [];
  return (
    t.forEach((s) => {
      i.indexOf(s) < 0 && i.push(s);
    }),
    i.join(" ")
  );
}
function kp(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function Bp(e) {
  let {
    swiper: t,
    slides: i,
    passedParams: s,
    changedParams: n,
    nextEl: r,
    prevEl: a,
    scrollbarEl: o,
    paginationEl: l,
  } = e;
  const d = n.filter(
      (S) => S !== "children" && S !== "direction" && S !== "wrapperClass",
    ),
    {
      params: u,
      pagination: c,
      navigation: p,
      scrollbar: f,
      virtual: h,
      thumbs: F,
    } = t;
  let v, g, m, x, w, _, T, A;
  (n.includes("thumbs") &&
    s.thumbs &&
    s.thumbs.swiper &&
    !s.thumbs.swiper.destroyed &&
    u.thumbs &&
    (!u.thumbs.swiper || u.thumbs.swiper.destroyed) &&
    (v = !0),
    n.includes("controller") &&
      s.controller &&
      s.controller.control &&
      u.controller &&
      !u.controller.control &&
      (g = !0),
    n.includes("pagination") &&
      s.pagination &&
      (s.pagination.el || l) &&
      (u.pagination || u.pagination === !1) &&
      c &&
      !c.el &&
      (m = !0),
    n.includes("scrollbar") &&
      s.scrollbar &&
      (s.scrollbar.el || o) &&
      (u.scrollbar || u.scrollbar === !1) &&
      f &&
      !f.el &&
      (x = !0),
    n.includes("navigation") &&
      s.navigation &&
      (s.navigation.prevEl || a) &&
      (s.navigation.nextEl || r) &&
      (u.navigation || u.navigation === !1) &&
      p &&
      !p.prevEl &&
      !p.nextEl &&
      (w = !0));
  const k = (S) => {
    t[S] &&
      (t[S].destroy(),
      S === "navigation"
        ? (t.isElement && (t[S].prevEl.remove(), t[S].nextEl.remove()),
          (u[S].prevEl = void 0),
          (u[S].nextEl = void 0),
          (t[S].prevEl = void 0),
          (t[S].nextEl = void 0))
        : (t.isElement && t[S].el.remove(),
          (u[S].el = void 0),
          (t[S].el = void 0)));
  };
  (n.includes("loop") &&
    t.isElement &&
    (u.loop && !s.loop ? (_ = !0) : !u.loop && s.loop ? (T = !0) : (A = !0)),
    d.forEach((S) => {
      if (Ki(u[S]) && Ki(s[S]))
        (Object.assign(u[S], s[S]),
          (S === "navigation" || S === "pagination" || S === "scrollbar") &&
            "enabled" in s[S] &&
            !s[S].enabled &&
            k(S));
      else {
        const y = s[S];
        (y === !0 || y === !1) &&
        (S === "navigation" || S === "pagination" || S === "scrollbar")
          ? y === !1 && k(S)
          : (u[S] = s[S]);
      }
    }),
    d.includes("controller") &&
      !g &&
      t.controller &&
      t.controller.control &&
      u.controller &&
      u.controller.control &&
      (t.controller.control = u.controller.control),
    n.includes("children") && i && h && u.virtual.enabled
      ? ((h.slides = i), h.update(!0))
      : n.includes("virtual") &&
        h &&
        u.virtual.enabled &&
        (i && (h.slides = i), h.update(!0)),
    n.includes("children") && i && u.loop && (A = !0),
    v && F.init() && F.update(!0),
    g && (t.controller.control = u.controller.control),
    m &&
      (t.isElement &&
        (!l || typeof l == "string") &&
        ((l = document.createElement("div")),
        l.classList.add("swiper-pagination"),
        l.part.add("pagination"),
        t.el.appendChild(l)),
      l && (u.pagination.el = l),
      c.init(),
      c.render(),
      c.update()),
    x &&
      (t.isElement &&
        (!o || typeof o == "string") &&
        ((o = document.createElement("div")),
        o.classList.add("swiper-scrollbar"),
        o.part.add("scrollbar"),
        t.el.appendChild(o)),
      o && (u.scrollbar.el = o),
      f.init(),
      f.updateSize(),
      f.setTranslate()),
    w &&
      (t.isElement &&
        ((!r || typeof r == "string") &&
          ((r = document.createElement("div")),
          r.classList.add("swiper-button-next"),
          ia(r, t.hostEl.constructor.nextButtonSvg),
          r.part.add("button-next"),
          t.el.appendChild(r)),
        (!a || typeof a == "string") &&
          ((a = document.createElement("div")),
          a.classList.add("swiper-button-prev"),
          ia(a, t.hostEl.constructor.prevButtonSvg),
          a.part.add("button-prev"),
          t.el.appendChild(a))),
      r && (u.navigation.nextEl = r),
      a && (u.navigation.prevEl = a),
      p.init(),
      p.update()),
    n.includes("allowSlideNext") && (t.allowSlideNext = s.allowSlideNext),
    n.includes("allowSlidePrev") && (t.allowSlidePrev = s.allowSlidePrev),
    n.includes("direction") && t.changeDirection(s.direction, !1),
    (_ || A) && t.loopDestroy(),
    (T || A) && t.loopCreate(),
    t.update());
}
function oa(e, t) {
  e === void 0 && (e = {});
  const i = { on: {} },
    s = {},
    n = {};
  (ds(i, cr), (i._emitClasses = !0), (i.init = !1));
  const r = {},
    a = to.map((l) => l.replace(/_/, "")),
    o = Object.assign({}, e);
  return (
    Object.keys(o).forEach((l) => {
      typeof e[l] > "u" ||
        (a.indexOf(l) >= 0
          ? Ki(e[l])
            ? ((i[l] = {}), (n[l] = {}), ds(i[l], e[l]), ds(n[l], e[l]))
            : ((i[l] = e[l]), (n[l] = e[l]))
          : l.search(/on[A-Z]/) === 0 && typeof e[l] == "function"
            ? (i.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
            : (r[l] = e[l]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((l) => {
      (i[l] === !0 && (i[l] = {}), i[l] === !1 && delete i[l]);
    }),
    { params: i, passedParams: n, rest: r, events: s }
  );
}
function Pp(e, t) {
  let {
    el: i,
    nextEl: s,
    prevEl: n,
    paginationEl: r,
    scrollbarEl: a,
    swiper: o,
  } = e;
  (io(t) &&
    s &&
    n &&
    ((o.params.navigation.nextEl = s),
    (o.originalParams.navigation.nextEl = s),
    (o.params.navigation.prevEl = n),
    (o.originalParams.navigation.prevEl = n)),
    so(t) &&
      r &&
      ((o.params.pagination.el = r), (o.originalParams.pagination.el = r)),
    no(t) &&
      a &&
      ((o.params.scrollbar.el = a), (o.originalParams.scrollbar.el = a)),
    o.init(i));
}
function Ip(e, t, i, s, n) {
  const r = [];
  if (!t) return r;
  const a = (l) => {
    r.indexOf(l) < 0 && r.push(l);
  };
  if (i && s) {
    const l = s.map(n),
      d = i.map(n);
    (l.join("") !== d.join("") && a("children"),
      s.length !== i.length && a("children"));
  }
  return (
    to
      .filter((l) => l[0] === "_")
      .map((l) => l.replace(/_/, ""))
      .forEach((l) => {
        if (l in e && l in t)
          if (Ki(e[l]) && Ki(t[l])) {
            const d = Object.keys(e[l]),
              u = Object.keys(t[l]);
            d.length !== u.length
              ? a(l)
              : (d.forEach((c) => {
                  e[l][c] !== t[l][c] && a(l);
                }),
                u.forEach((c) => {
                  e[l][c] !== t[l][c] && a(l);
                }));
          } else e[l] !== t[l] && a(l);
      }),
    r
  );
}
const Lp = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.emit("_virtualUpdated"),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function Yn(e, t, i) {
  e === void 0 && (e = {});
  const s = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    },
    r = (a, o) => {
      Array.isArray(a) &&
        a.forEach((l) => {
          const d = typeof l.type == "symbol";
          (o === "default" && (o = "container-end"),
            d && l.children
              ? r(l.children, o)
              : (l.type &&
                    (l.type.name === "SwiperSlide" ||
                      l.type.name === "AsyncComponentWrapper")) ||
                  (l.componentOptions &&
                    l.componentOptions.tag === "SwiperSlide")
                ? s.push(l)
                : n[o] && n[o].push(l));
        });
    };
  return (
    Object.keys(e).forEach((a) => {
      if (typeof e[a] != "function") return;
      const o = e[a]();
      r(o, a);
    }),
    (i.value = t.value),
    (t.value = s),
    { slides: s, slots: n }
  );
}
function Op(e, t, i) {
  if (!i) return null;
  const s = (u) => {
      let c = u;
      return (
        u < 0 ? (c = t.length + u) : c >= t.length && (c = c - t.length),
        c
      );
    },
    n = e.value.isHorizontal()
      ? { [e.value.rtlTranslate ? "right" : "left"]: `${i.offset}px` }
      : { top: `${i.offset}px` },
    { from: r, to: a } = i,
    o = e.value.params.loop ? -t.length : 0,
    l = e.value.params.loop ? t.length * 2 : t.length,
    d = [];
  for (let u = o; u < l; u += 1)
    u >= r && u <= a && d.length < t.length && d.push(t[s(u)]);
  return d.map((u) => {
    if (
      (u.props || (u.props = {}),
      u.props.style || (u.props.style = {}),
      (u.props.swiperRef = e),
      (u.props.style = n),
      u.type)
    )
      return It(u.type, { ...u.props }, u.children);
    if (u.componentOptions)
      return It(
        u.componentOptions.Ctor,
        { ...u.props },
        u.componentOptions.children,
      );
  });
}
const zp = {
    name: "Swiper",
    props: {
      tag: { type: String, default: "div" },
      wrapperTag: { type: String, default: "div" },
      modules: { type: Array, default: void 0 },
      init: { type: Boolean, default: void 0 },
      direction: { type: String, default: void 0 },
      oneWayMovement: { type: Boolean, default: void 0 },
      swiperElementNodeName: { type: String, default: "SWIPER-CONTAINER" },
      touchEventsTarget: { type: String, default: void 0 },
      initialSlide: { type: Number, default: void 0 },
      speed: { type: Number, default: void 0 },
      cssMode: { type: Boolean, default: void 0 },
      updateOnWindowResize: { type: Boolean, default: void 0 },
      resizeObserver: { type: Boolean, default: void 0 },
      nested: { type: Boolean, default: void 0 },
      focusableElements: { type: String, default: void 0 },
      width: { type: Number, default: void 0 },
      height: { type: Number, default: void 0 },
      preventInteractionOnTransition: { type: Boolean, default: void 0 },
      userAgent: { type: String, default: void 0 },
      url: { type: String, default: void 0 },
      edgeSwipeDetection: { type: [Boolean, String], default: void 0 },
      edgeSwipeThreshold: { type: Number, default: void 0 },
      autoHeight: { type: Boolean, default: void 0 },
      setWrapperSize: { type: Boolean, default: void 0 },
      virtualTranslate: { type: Boolean, default: void 0 },
      effect: { type: String, default: void 0 },
      breakpoints: { type: Object, default: void 0 },
      breakpointsBase: { type: String, default: void 0 },
      spaceBetween: { type: [Number, String], default: void 0 },
      slidesPerView: { type: [Number, String], default: void 0 },
      maxBackfaceHiddenSlides: { type: Number, default: void 0 },
      slidesPerGroup: { type: Number, default: void 0 },
      slidesPerGroupSkip: { type: Number, default: void 0 },
      slidesPerGroupAuto: { type: Boolean, default: void 0 },
      centeredSlides: { type: Boolean, default: void 0 },
      centeredSlidesBounds: { type: Boolean, default: void 0 },
      slidesOffsetBefore: { type: Number, default: void 0 },
      slidesOffsetAfter: { type: Number, default: void 0 },
      normalizeSlideIndex: { type: Boolean, default: void 0 },
      centerInsufficientSlides: { type: Boolean, default: void 0 },
      watchOverflow: { type: Boolean, default: void 0 },
      roundLengths: { type: Boolean, default: void 0 },
      touchRatio: { type: Number, default: void 0 },
      touchAngle: { type: Number, default: void 0 },
      simulateTouch: { type: Boolean, default: void 0 },
      shortSwipes: { type: Boolean, default: void 0 },
      longSwipes: { type: Boolean, default: void 0 },
      longSwipesRatio: { type: Number, default: void 0 },
      longSwipesMs: { type: Number, default: void 0 },
      followFinger: { type: Boolean, default: void 0 },
      allowTouchMove: { type: Boolean, default: void 0 },
      threshold: { type: Number, default: void 0 },
      touchMoveStopPropagation: { type: Boolean, default: void 0 },
      touchStartPreventDefault: { type: Boolean, default: void 0 },
      touchStartForcePreventDefault: { type: Boolean, default: void 0 },
      touchReleaseOnEdges: { type: Boolean, default: void 0 },
      uniqueNavElements: { type: Boolean, default: void 0 },
      resistance: { type: Boolean, default: void 0 },
      resistanceRatio: { type: Number, default: void 0 },
      watchSlidesProgress: { type: Boolean, default: void 0 },
      grabCursor: { type: Boolean, default: void 0 },
      preventClicks: { type: Boolean, default: void 0 },
      preventClicksPropagation: { type: Boolean, default: void 0 },
      slideToClickedSlide: { type: Boolean, default: void 0 },
      loop: { type: Boolean, default: void 0 },
      loopedSlides: { type: Number, default: void 0 },
      loopPreventsSliding: { type: Boolean, default: void 0 },
      loopAdditionalSlides: { type: Number, default: void 0 },
      loopAddBlankSlides: { type: Boolean, default: void 0 },
      rewind: { type: Boolean, default: void 0 },
      allowSlidePrev: { type: Boolean, default: void 0 },
      allowSlideNext: { type: Boolean, default: void 0 },
      swipeHandler: { type: Boolean, default: void 0 },
      noSwiping: { type: Boolean, default: void 0 },
      noSwipingClass: { type: String, default: void 0 },
      noSwipingSelector: { type: String, default: void 0 },
      passiveListeners: { type: Boolean, default: void 0 },
      containerModifierClass: { type: String, default: void 0 },
      slideClass: { type: String, default: void 0 },
      slideActiveClass: { type: String, default: void 0 },
      slideVisibleClass: { type: String, default: void 0 },
      slideFullyVisibleClass: { type: String, default: void 0 },
      slideBlankClass: { type: String, default: void 0 },
      slideNextClass: { type: String, default: void 0 },
      slidePrevClass: { type: String, default: void 0 },
      wrapperClass: { type: String, default: void 0 },
      lazyPreloaderClass: { type: String, default: void 0 },
      lazyPreloadPrevNext: { type: Number, default: void 0 },
      runCallbacksOnInit: { type: Boolean, default: void 0 },
      observer: { type: Boolean, default: void 0 },
      observeParents: { type: Boolean, default: void 0 },
      observeSlideChildren: { type: Boolean, default: void 0 },
      a11y: { type: [Boolean, Object], default: void 0 },
      autoplay: { type: [Boolean, Object], default: void 0 },
      controller: { type: Object, default: void 0 },
      coverflowEffect: { type: Object, default: void 0 },
      cubeEffect: { type: Object, default: void 0 },
      fadeEffect: { type: Object, default: void 0 },
      flipEffect: { type: Object, default: void 0 },
      creativeEffect: { type: Object, default: void 0 },
      cardsEffect: { type: Object, default: void 0 },
      hashNavigation: { type: [Boolean, Object], default: void 0 },
      history: { type: [Boolean, Object], default: void 0 },
      keyboard: { type: [Boolean, Object], default: void 0 },
      mousewheel: { type: [Boolean, Object], default: void 0 },
      navigation: { type: [Boolean, Object], default: void 0 },
      pagination: { type: [Boolean, Object], default: void 0 },
      parallax: { type: [Boolean, Object], default: void 0 },
      scrollbar: { type: [Boolean, Object], default: void 0 },
      thumbs: { type: Object, default: void 0 },
      virtual: { type: [Boolean, Object], default: void 0 },
      zoom: { type: [Boolean, Object], default: void 0 },
      grid: { type: [Object], default: void 0 },
      freeMode: { type: [Boolean, Object], default: void 0 },
      enabled: { type: Boolean, default: void 0 },
    },
    emits: [
      "_beforeBreakpoint",
      "_containerClasses",
      "_slideClass",
      "_slideClasses",
      "_swiper",
      "_freeModeNoMomentumRelease",
      "_virtualUpdated",
      "activeIndexChange",
      "afterInit",
      "autoplay",
      "autoplayStart",
      "autoplayStop",
      "autoplayPause",
      "autoplayResume",
      "autoplayTimeLeft",
      "beforeDestroy",
      "beforeInit",
      "beforeLoopFix",
      "beforeResize",
      "beforeSlideChangeStart",
      "beforeTransitionStart",
      "breakpoint",
      "changeDirection",
      "click",
      "disable",
      "doubleTap",
      "doubleClick",
      "destroy",
      "enable",
      "fromEdge",
      "hashChange",
      "hashSet",
      "init",
      "keyPress",
      "lock",
      "loopFix",
      "momentumBounce",
      "navigationHide",
      "navigationShow",
      "navigationPrev",
      "navigationNext",
      "observerUpdate",
      "orientationchange",
      "paginationHide",
      "paginationRender",
      "paginationShow",
      "paginationUpdate",
      "progress",
      "reachBeginning",
      "reachEnd",
      "realIndexChange",
      "resize",
      "scroll",
      "scrollbarDragEnd",
      "scrollbarDragMove",
      "scrollbarDragStart",
      "setTransition",
      "setTranslate",
      "slidesUpdated",
      "slideChange",
      "slideChangeTransitionEnd",
      "slideChangeTransitionStart",
      "slideNextTransitionEnd",
      "slideNextTransitionStart",
      "slidePrevTransitionEnd",
      "slidePrevTransitionStart",
      "slideResetTransitionStart",
      "slideResetTransitionEnd",
      "sliderMove",
      "sliderFirstMove",
      "slidesLengthChange",
      "slidesGridLengthChange",
      "snapGridLengthChange",
      "snapIndexChange",
      "swiper",
      "tap",
      "toEdge",
      "touchEnd",
      "touchMove",
      "touchMoveOpposite",
      "touchStart",
      "transitionEnd",
      "transitionStart",
      "unlock",
      "update",
      "virtualUpdate",
      "zoomChange",
    ],
    setup(e, t) {
      let { slots: i, emit: s } = t;
      const { tag: n, wrapperTag: r } = e,
        a = $("swiper"),
        o = $(null),
        l = $(!1),
        d = $(!1),
        u = $(null),
        c = $(null),
        p = $(null),
        f = { value: [] },
        h = { value: [] },
        F = $(null),
        v = $(null),
        g = $(null),
        m = $(null),
        { params: x, passedParams: w } = oa(e);
      (Yn(i, f, h), (p.value = w), (h.value = f.value));
      const _ = () => {
        (Yn(i, f, h), (l.value = !0));
      };
      ((x.onAny = function (k) {
        for (
          var S = arguments.length, y = new Array(S > 1 ? S - 1 : 0), B = 1;
          B < S;
          B++
        )
          y[B - 1] = arguments[B];
        s(k, ...y);
      }),
        Object.assign(x.on, {
          _beforeBreakpoint: _,
          _containerClasses(k, S) {
            a.value = S;
          },
        }));
      const T = { ...x };
      if (
        (delete T.wrapperClass,
        (c.value = new Dr(T)),
        c.value.virtual && c.value.params.virtual.enabled)
      ) {
        c.value.virtual.slides = f.value;
        const k = {
          cache: !1,
          slides: f.value,
          renderExternal: (S) => {
            o.value = S;
          },
          renderExternalUpdate: !1,
        };
        (ds(c.value.params.virtual, k), ds(c.value.originalParams.virtual, k));
      }
      (ka(() => {
        !d.value && c.value && (c.value.emitSlidesClasses(), (d.value = !0));
        const { passedParams: k } = oa(e),
          S = Ip(k, p.value, f.value, h.value, (y) => y.props && y.props.key);
        ((p.value = k),
          (S.length || l.value) &&
            c.value &&
            !c.value.destroyed &&
            Bp({
              swiper: c.value,
              slides: f.value,
              passedParams: k,
              changedParams: S,
              nextEl: F.value,
              prevEl: v.value,
              scrollbarEl: m.value,
              paginationEl: g.value,
            }),
          (l.value = !1));
      }),
        Ba("swiper", c),
        Ma(o, () => {
          Oo(() => {
            Lp(c.value);
          });
        }),
        xs(() => {
          u.value &&
            (Pp(
              {
                el: u.value,
                nextEl: F.value,
                prevEl: v.value,
                paginationEl: g.value,
                scrollbarEl: m.value,
                swiper: c.value,
              },
              x,
            ),
            s("swiper", c.value));
        }),
        br(() => {
          c.value && !c.value.destroyed && c.value.destroy(!0, !1);
        }));
      function A(k) {
        return x.virtual
          ? Op(c, k, o.value)
          : (k.forEach((S, y) => {
              (S.props || (S.props = {}),
                (S.props.swiperRef = c),
                (S.props.swiperSlideIndex = y));
            }),
            k);
      }
      return () => {
        const { slides: k, slots: S } = Yn(i, f, h);
        return It(n, { ref: u, class: ro(a.value) }, [
          S["container-start"],
          It(r, { class: kp(x.wrapperClass) }, [
            S["wrapper-start"],
            A(k),
            S["wrapper-end"],
          ]),
          io(e) && [
            It("div", { ref: v, class: "swiper-button-prev" }),
            It("div", { ref: F, class: "swiper-button-next" }),
          ],
          no(e) && It("div", { ref: m, class: "swiper-scrollbar" }),
          so(e) && It("div", { ref: g, class: "swiper-pagination" }),
          S["container-end"],
        ]);
      };
    },
  },
  Rp = {
    name: "SwiperSlide",
    props: {
      tag: { type: String, default: "div" },
      swiperRef: { type: Object, required: !1 },
      swiperSlideIndex: { type: Number, default: void 0, required: !1 },
      zoom: { type: Boolean, default: void 0, required: !1 },
      lazy: { type: Boolean, default: !1, required: !1 },
      virtualIndex: { type: [String, Number], default: void 0 },
    },
    setup(e, t) {
      let { slots: i } = t,
        s = !1;
      const { swiperRef: n } = e,
        r = $(null),
        a = $("swiper-slide"),
        o = $(!1);
      function l(c, p, f) {
        p === r.value && (a.value = f);
      }
      (xs(() => {
        !n || !n.value || (n.value.on("_slideClass", l), (s = !0));
      }),
        Lo(() => {
          s || !n || !n.value || (n.value.on("_slideClass", l), (s = !0));
        }),
        ka(() => {
          !r.value ||
            !n ||
            !n.value ||
            (typeof e.swiperSlideIndex < "u" &&
              (r.value.swiperSlideIndex = e.swiperSlideIndex),
            n.value.destroyed &&
              a.value !== "swiper-slide" &&
              (a.value = "swiper-slide"));
        }),
        br(() => {
          !n || !n.value || n.value.off("_slideClass", l);
        }));
      const d = er(() => ({
        isActive: a.value.indexOf("swiper-slide-active") >= 0,
        isVisible: a.value.indexOf("swiper-slide-visible") >= 0,
        isPrev: a.value.indexOf("swiper-slide-prev") >= 0,
        isNext: a.value.indexOf("swiper-slide-next") >= 0,
      }));
      Ba("swiperSlide", d);
      const u = () => {
        o.value = !0;
      };
      return () =>
        It(
          e.tag,
          {
            class: ro(`${a.value}`),
            ref: r,
            "data-swiper-slide-index":
              typeof e.virtualIndex > "u" && n && n.value && n.value.params.loop
                ? e.swiperSlideIndex
                : e.virtualIndex,
            onLoadCapture: u,
          },
          e.zoom
            ? It(
                "div",
                {
                  class: "swiper-zoom-container",
                  "data-swiper-zoom":
                    typeof e.zoom == "number" ? e.zoom : void 0,
                },
                [
                  i.default && i.default(d.value),
                  e.lazy &&
                    !o.value &&
                    It("div", { class: "swiper-lazy-preloader" }),
                ],
              )
            : [
                i.default && i.default(d.value),
                e.lazy &&
                  !o.value &&
                  It("div", { class: "swiper-lazy-preloader" }),
              ],
        );
    },
  };
function Hp(e, t, i, s) {
  return (
    e.params.createElements &&
      Object.keys(s).forEach((n) => {
        if (!i[n] && i.auto === !0) {
          let r = $t(e.el, `.${s[n]}`)[0];
          (r || ((r = yn("div", s[n])), (r.className = s[n]), e.el.append(r)),
            (i[n] = r),
            (t[n] = r));
        }
      }),
    i
  );
}
function Gp(e) {
  let { swiper: t, extendParams: i, on: s, emit: n } = e;
  (i({
    navigation: {
      nextEl: null,
      prevEl: null,
      hideOnClick: !1,
      disabledClass: "swiper-button-disabled",
      hiddenClass: "swiper-button-hidden",
      lockClass: "swiper-button-lock",
      navigationDisabledClass: "swiper-navigation-disabled",
    },
  }),
    (t.navigation = { nextEl: null, prevEl: null }));
  function r(h) {
    let F;
    return h &&
      typeof h == "string" &&
      t.isElement &&
      ((F = t.el.querySelector(h) || t.hostEl.querySelector(h)), F)
      ? F
      : (h &&
          (typeof h == "string" && (F = [...document.querySelectorAll(h)]),
          t.params.uniqueNavElements &&
          typeof h == "string" &&
          F &&
          F.length > 1 &&
          t.el.querySelectorAll(h).length === 1
            ? (F = t.el.querySelector(h))
            : F && F.length === 1 && (F = F[0])),
        h && !F ? h : F);
  }
  function a(h, F) {
    const v = t.params.navigation;
    ((h = pi(h)),
      h.forEach((g) => {
        g &&
          (g.classList[F ? "add" : "remove"](...v.disabledClass.split(" ")),
          g.tagName === "BUTTON" && (g.disabled = F),
          t.params.watchOverflow &&
            t.enabled &&
            g.classList[t.isLocked ? "add" : "remove"](v.lockClass));
      }));
  }
  function o() {
    const { nextEl: h, prevEl: F } = t.navigation;
    if (t.params.loop) {
      (a(F, !1), a(h, !1));
      return;
    }
    (a(F, t.isBeginning && !t.params.rewind),
      a(h, t.isEnd && !t.params.rewind));
  }
  function l(h) {
    (h.preventDefault(),
      !(t.isBeginning && !t.params.loop && !t.params.rewind) &&
        (t.slidePrev(), n("navigationPrev")));
  }
  function d(h) {
    (h.preventDefault(),
      !(t.isEnd && !t.params.loop && !t.params.rewind) &&
        (t.slideNext(), n("navigationNext")));
  }
  function u() {
    const h = t.params.navigation;
    if (
      ((t.params.navigation = Hp(
        t,
        t.originalParams.navigation,
        t.params.navigation,
        { nextEl: "swiper-button-next", prevEl: "swiper-button-prev" },
      )),
      !(h.nextEl || h.prevEl))
    )
      return;
    let F = r(h.nextEl),
      v = r(h.prevEl);
    (Object.assign(t.navigation, { nextEl: F, prevEl: v }),
      (F = pi(F)),
      (v = pi(v)));
    const g = (m, x) => {
      (m && m.addEventListener("click", x === "next" ? d : l),
        !t.enabled && m && m.classList.add(...h.lockClass.split(" ")));
    };
    (F.forEach((m) => g(m, "next")), v.forEach((m) => g(m, "prev")));
  }
  function c() {
    let { nextEl: h, prevEl: F } = t.navigation;
    ((h = pi(h)), (F = pi(F)));
    const v = (g, m) => {
      (g.removeEventListener("click", m === "next" ? d : l),
        g.classList.remove(...t.params.navigation.disabledClass.split(" ")));
    };
    (h.forEach((g) => v(g, "next")), F.forEach((g) => v(g, "prev")));
  }
  (s("init", () => {
    t.params.navigation.enabled === !1 ? f() : (u(), o());
  }),
    s("toEdge fromEdge lock unlock", () => {
      o();
    }),
    s("destroy", () => {
      c();
    }),
    s("enable disable", () => {
      let { nextEl: h, prevEl: F } = t.navigation;
      if (((h = pi(h)), (F = pi(F)), t.enabled)) {
        o();
        return;
      }
      [...h, ...F]
        .filter((v) => !!v)
        .forEach((v) => v.classList.add(t.params.navigation.lockClass));
    }),
    s("click", (h, F) => {
      let { nextEl: v, prevEl: g } = t.navigation;
      ((v = pi(v)), (g = pi(g)));
      const m = F.target;
      let x = g.includes(m) || v.includes(m);
      if (t.isElement && !x) {
        const w = F.path || (F.composedPath && F.composedPath());
        w && (x = w.find((_) => v.includes(_) || g.includes(_)));
      }
      if (t.params.navigation.hideOnClick && !x) {
        if (
          t.pagination &&
          t.params.pagination &&
          t.params.pagination.clickable &&
          (t.pagination.el === m || t.pagination.el.contains(m))
        )
          return;
        let w;
        (v.length
          ? (w = v[0].classList.contains(t.params.navigation.hiddenClass))
          : g.length &&
            (w = g[0].classList.contains(t.params.navigation.hiddenClass)),
          n(w === !0 ? "navigationShow" : "navigationHide"),
          [...v, ...g]
            .filter((_) => !!_)
            .forEach((_) =>
              _.classList.toggle(t.params.navigation.hiddenClass),
            ));
      }
    }));
  const p = () => {
      (t.el.classList.remove(
        ...t.params.navigation.navigationDisabledClass.split(" "),
      ),
        u(),
        o());
    },
    f = () => {
      (t.el.classList.add(
        ...t.params.navigation.navigationDisabledClass.split(" "),
      ),
        c());
    };
  Object.assign(t.navigation, {
    enable: p,
    disable: f,
    update: o,
    init: u,
    destroy: c,
  });
}
function Np(e) {
  const {
    effect: t,
    swiper: i,
    on: s,
    setTranslate: n,
    setTransition: r,
    overwriteParams: a,
    perspective: o,
    recreateShadows: l,
    getEffectParams: d,
  } = e;
  (s("beforeInit", () => {
    if (i.params.effect !== t) return;
    (i.classNames.push(`${i.params.containerModifierClass}${t}`),
      o && o() && i.classNames.push(`${i.params.containerModifierClass}3d`));
    const c = a ? a() : {};
    (Object.assign(i.params, c), Object.assign(i.originalParams, c));
  }),
    s("setTranslate _virtualUpdated", () => {
      i.params.effect === t && n();
    }),
    s("setTransition", (c, p) => {
      i.params.effect === t && r(p);
    }),
    s("transitionEnd", () => {
      if (i.params.effect === t && l) {
        if (!d || !d().slideShadows) return;
        (i.slides.forEach((c) => {
          c.querySelectorAll(
            ".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left",
          ).forEach((p) => p.remove());
        }),
          l());
      }
    }));
  let u;
  s("virtualUpdate", () => {
    i.params.effect === t &&
      (i.slides.length || (u = !0),
      requestAnimationFrame(() => {
        u && i.slides && i.slides.length && (n(), (u = !1));
      }));
  });
}
function Up(e, t) {
  const i = Ka(t);
  return (
    i !== t &&
      ((i.style.backfaceVisibility = "hidden"),
      (i.style["-webkit-backface-visibility"] = "hidden")),
    i
  );
}
function Vp(e) {
  let { swiper: t, duration: i, transformElements: s } = e;
  const { activeIndex: n } = t;
  if (t.params.virtualTranslate && i !== 0) {
    let r = !1,
      a;
    ((a = s),
      a.forEach((o) => {
        bu(o, () => {
          if (r || !t || t.destroyed) return;
          ((r = !0), (t.animating = !1));
          const l = new window.CustomEvent("transitionend", {
            bubbles: !0,
            cancelable: !0,
          });
          t.wrapperEl.dispatchEvent(l);
        });
      }));
  }
}
function jp(e) {
  let { swiper: t, extendParams: i, on: s } = e;
  (i({ fadeEffect: { crossFade: !1 } }),
    Np({
      effect: "fade",
      swiper: t,
      on: s,
      setTranslate: () => {
        const { slides: a } = t,
          o = t.params.fadeEffect;
        for (let l = 0; l < a.length; l += 1) {
          const d = t.slides[l];
          let c = -d.swiperSlideOffset;
          t.params.virtualTranslate || (c -= t.translate);
          let p = 0;
          t.isHorizontal() || ((p = c), (c = 0));
          const f = t.params.fadeEffect.crossFade
              ? Math.max(1 - Math.abs(d.progress), 0)
              : 1 + Math.min(Math.max(d.progress, -1), 0),
            h = Up(o, d);
          ((h.style.opacity = f),
            (h.style.transform = `translate3d(${c}px, ${p}px, 0px)`));
        }
      },
      setTransition: (a) => {
        const o = t.slides.map((l) => Ka(l));
        (o.forEach((l) => {
          l.style.transitionDuration = `${a}ms`;
        }),
          Vp({ swiper: t, duration: a, transformElements: o }));
      },
      overwriteParams: () => ({
        slidesPerView: 1,
        slidesPerGroup: 1,
        watchSlidesProgress: !0,
        spaceBetween: 0,
        virtualTranslate: !t.params.cssMode,
      }),
    }));
}
const Qp = {
    key: 0,
    class: "male scale-110",
    width: "35",
    height: "35",
    viewBox: "0 0 35 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Yp = {
    key: 1,
    width: "35",
    class: "scale-110",
    height: "35",
    viewBox: "0 0 35 35",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  },
  Wp = ve({
    __name: "HormonsIcon",
    setup(e) {
      const t = Xe();
      return (i, s) =>
        L(t).getBodySelected === "male"
          ? (I(),
            z(
              "svg",
              Qp,
              s[0] ||
                (s[0] = [
                  E(
                    "path",
                    { d: "M31.7356 3.69727L25.082 10.3465", stroke: "black" },
                    null,
                    -1,
                  ),
                  E(
                    "path",
                    {
                      d: "M23.207 3.60938L31.793 3.60938L31.793 12.1953",
                      stroke: "black",
                    },
                    null,
                    -1,
                  ),
                  E(
                    "path",
                    {
                      d: "M7.5 16.5C7.5 22.0228 11.9772 26.5 17.5 26.5C23.0228 26.5 27.5 22.0228 27.5 16.5C27.5 10.9772 23.0228 6.5 17.5 6.5C11.9772 6.5 7.5 10.9772 7.5 16.5Z",
                      stroke: "black",
                    },
                    null,
                    -1,
                  ),
                ]),
            ))
          : (I(),
            z(
              "svg",
              Yp,
              s[1] ||
                (s[1] = [
                  E(
                    "path",
                    {
                      d: "M17.4742 26.5V30.9004M17.4742 30.9004H12.6641M17.4742 30.9004V34.8994M17.4742 30.9004H22.3298",
                      stroke: "black",
                    },
                    null,
                    -1,
                  ),
                  E(
                    "path",
                    {
                      d: "M7.5 16.5C7.5 22.0228 11.9772 26.5 17.5 26.5C23.0228 26.5 27.5 22.0228 27.5 16.5C27.5 10.9772 23.0228 6.5 17.5 6.5C11.9772 6.5 7.5 10.9772 7.5 16.5Z",
                      stroke: "black",
                    },
                    null,
                    -1,
                  ),
                ]),
            ));
    },
  }),
  ao = Object.assign(Wp, { __name: "IconsHormonsIcon" }),
  Xp = ["aria-disabled", "disabled"],
  Kp = ve({
    __name: "SliderArrow",
    props: {
      direction: { type: String, required: !0, default: "right" },
      disabled: { type: Boolean, required: !1, default: !1 },
    },
    setup(e) {
      return (t, i) => (
        I(),
        z(
          "button",
          {
            class: G([
              "slider-arrow flex items-center justify-center h-full rounded-lg w-121 cursor-pointer relative bg-linear-[180deg,rgba(255,255,255,1.0)_0%,rgba(255,255,255,1.0)_100%]",
              {
                "!bg-linear-[180deg,rgba(255,255,255,0.4)_0%,rgba(255,255,255,0.1)_100%] shadow-[inset_0px_4px_40px_0px_#ffffff66] !cursor-default":
                  e.disabled,
              },
            ]),
            type: "button",
            "aria-disabled": e.disabled,
            disabled: e.disabled,
          },
          [
            E(
              "span",
              {
                class: G([
                  "absolute w-full h-full top-0 left-0 border-gray-100 border-1 rounded-lg scale-90 opacity-0 hover:opacity-100 transition-opacity duration-300",
                  { hidden: e.disabled },
                ]),
              },
              null,
              2,
            ),
            (I(),
            z(
              "svg",
              {
                class: G({
                  "rotate-180": e.direction === "left",
                  disable: e.disabled,
                }),
                width: "16",
                height: "24",
                viewBox: "0 0 16 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
                "aria-hidden": "true",
              },
              i[0] ||
                (i[0] = [
                  E(
                    "path",
                    {
                      d: "M-3 -12L13 12L-3 36",
                      stroke: "#010835",
                      "stroke-width": "4",
                    },
                    null,
                    -1,
                  ),
                ]),
              2,
            )),
          ],
          10,
          Xp,
        )
      );
    },
  }),
  la = Object.assign(Te(Kp, [["__scopeId", "data-v-4ed9ec75"]]), {
    __name: "NavigationsSliderArrow",
  }),
  qp = { class: "opacity-50 text-regular-400-13 uppercase" },
  Jp = { class: "text-semi-600-20 h-31" },
  Zp = ve({
    __name: "SliderAlt",
    props: {
      className: { type: String, default: "" },
      textTop: { type: String, default: "" },
      textBottom: { type: String, default: "" },
    },
    setup(e) {
      return (t, i) => (
        I(),
        z(
          "div",
          {
            class: G([
              "slider-alt absolute w-220 h-100 -top-120 rounded overflow-hidden flex flex-col justify-center px-24 transform",
              [e.className, { "!opacity-0": e.textBottom === "" }],
            ]),
          },
          [E("p", qp, at(e.textTop), 1), E("p", Jp, at(e.textBottom), 1)],
          2,
        )
      );
    },
  }),
  da = Object.assign(Te(Zp, [["__scopeId", "data-v-861c5300"]]), {
    __name: "NavigationsSliderAlt",
  }),
  $p = { class: "lg:container relative h-106 xs:max-[767px]:h-90" },
  ef = {
    class:
      "flex items-center justify-between w-full px-8 py-8 h-full lg:border-1 border-white/21 md:border-0 rounded-2xl backdrop-blur bg-linear-[180deg,rgba(255,255,255,0.2)_0%,rgba(255,255,255,0)_100%]",
  },
  tf = {
    class:
      "h-full xs:flex lg:block xs:items-center transition-all lg:px-0 md:px-15 xs:px-0 transform duration-700 xs:bg-white xs:rounded-lg lg:bg-transparent",
  },
  sf = ["src", "alt"],
  nf = {
    class:
      "text-semi-600-35 lg:translate-y-0 xs:-translate-y-2 xs:text-[2.6rem] md:text-[3.5rem]",
  },
  rf = {
    class:
      "lg:flex xs:hidden items-center justify-between h-full gap-8 relative",
  },
  af = ve({
    __name: "OrgansSlider",
    setup(e) {
      const t = Xe();
      t.$onAction(({ name: m, args: x }) => {
        m === "setSliderState" && c(x[0]);
      });
      const i = t.getOrgansList,
        s = $(null),
        n = [Gp, jp],
        r = $(!0),
        a = $(!1),
        o = $(400),
        l = $(""),
        d = $(""),
        u = (m) => {
          ((s.value = m),
            h(),
            f(),
            (l.value = i[s.value?.activeIndex - 1]?.name ?? ""),
            (d.value = i[s.value?.activeIndex + 1]?.name ?? ""));
        },
        c = (m) => {
          s.value?.slideTo(m);
        };
      function p() {
        const m = s.value;
        return m ? (m.slides?.[m.activeIndex] ?? null) : null;
      }
      function f() {
        const m = p(),
          x = Math.ceil(m?.getBoundingClientRect().width ?? 0);
        o.value = x;
      }
      function h() {
        ((r.value = s.value?.isBeginning ?? !0),
          (a.value = s.value?.isEnd ?? !0));
      }
      const F = () => {
        (t.cameraTo(i[s.value?.activeIndex].name),
          (l.value = i[s.value?.activeIndex - 1]?.name ?? ""),
          (d.value = i[s.value?.activeIndex + 1]?.name ?? ""),
          f(),
          h());
      };
      function v() {
        s.value?.slideNext();
      }
      const g = () => {
        s.value?.slidePrev();
      };
      return (m, x) => (
        I(),
        z(
          "div",
          {
            id: "organs-slider",
            class: G([
              "fixed z-10 lg:left-0 xs:left-1/2 lg:w-full lg:px-[15vw] md:bottom-20 xs:bottom-20 transform translate-y-80 lg:translate-x-0 xs:translate-x-[-50%] opacity-0 transition-all duration-500 ease-in-out pointer-events-none",
              {
                "!opacity-100 !translate-y-0 !pointer-events-auto":
                  L(t).getActiveState === "slider",
              },
            ]),
          },
          [
            E("div", $p, [
              E("div", ef, [
                E("div", tf, [
                  E(
                    "div",
                    {
                      class: G([
                        { "opacity-40": r.value },
                        "w-60 h-60 xs:flex items-center justify-center lg:hidden",
                      ]),
                      onClick: g,
                    },
                    x[0] ||
                      (x[0] = [
                        E(
                          "img",
                          { class: "rotate-180", alt: "arrow", src: Zr },
                          null,
                          -1,
                        ),
                      ]),
                    2,
                  ),
                  Be(
                    L(zp),
                    {
                      modules: n,
                      loop: !1,
                      slidesPerView: 1,
                      allowTouchMove: !1,
                      onSwiper: u,
                      effect: "fade",
                      onSlideChange: F,
                      style: ni({ width: o.value + "px" }),
                      class:
                        "h-full rounded-lg lg:bg-white transform transition-all duration-600 md:max-[1181px]:md:!w-325 xs:max-[767px]:!w-[calc(100vw-160px)]",
                    },
                    {
                      default: tr(() => [
                        (I(!0),
                        z(
                          Wt,
                          null,
                          Xt(
                            L(i),
                            (w) => (
                              I(),
                              Pi(
                                L(Rp),
                                {
                                  class:
                                    "flex h-full items-center lg:pl-22 lg:pr-35 md:pl-35 md:pr-35 xs:px-0 !opacity-100 lg:!w-auto md:!w-325 xs:!w-[calc(100vw-160px)]",
                                },
                                {
                                  default: tr(({ isActive: _ }) => [
                                    E(
                                      "div",
                                      {
                                        class: G([
                                          "flex items-center w-full h-full lg:-translate-x-30 transition-all duration-600 transform md:justify-center xs:justify-center",
                                          {
                                            "opacity-100 scale-100 lg:translate-x-0 delay-300":
                                              _,
                                            "opacity-0 scale-90": !_,
                                          },
                                        ]),
                                      },
                                      [
                                        w.name !== "Hormones"
                                          ? (I(),
                                            z(
                                              "img",
                                              {
                                                key: 0,
                                                src: w.image,
                                                alt: w.name,
                                                class:
                                                  "w-44 shrink-0 mr-22 xs:hidden lg:block",
                                              },
                                              null,
                                              8,
                                              sf,
                                            ))
                                          : (I(), Pi(ao, { key: 1 })),
                                        E("p", nf, at(w.name), 1),
                                      ],
                                      2,
                                    ),
                                  ]),
                                  _: 2,
                                },
                                1024,
                              )
                            ),
                          ),
                          256,
                        )),
                      ]),
                      _: 1,
                    },
                    8,
                    ["style"],
                  ),
                  E(
                    "div",
                    {
                      class: G([
                        { "opacity-60": a.value },
                        "w-60 h-60 xs:flex lg:hidden items-center justify-center",
                      ]),
                      onClick: v,
                    },
                    x[1] ||
                      (x[1] = [E("img", { alt: "arrow", src: Zr }, null, -1)]),
                    2,
                  ),
                ]),
                E("div", rf, [
                  Be(
                    la,
                    {
                      disabled: r.value,
                      direction: "left",
                      onClick: g,
                      class: "arrow",
                    },
                    null,
                    8,
                    ["disabled"],
                  ),
                  Be(
                    da,
                    {
                      className: "left-0",
                      textTop: "PREV",
                      textBottom: l.value,
                    },
                    null,
                    8,
                    ["textBottom"],
                  ),
                  Be(
                    la,
                    {
                      disabled: a.value,
                      direction: "right",
                      onClick: v,
                      class: "arrow",
                    },
                    null,
                    8,
                    ["disabled"],
                  ),
                  Be(
                    da,
                    {
                      className: "right-15",
                      textTop: "NEXT",
                      textBottom: d.value,
                    },
                    null,
                    8,
                    ["textBottom"],
                  ),
                ]),
              ]),
            ]),
          ],
          2,
        )
      );
    },
  }),
  of = Object.assign(Te(af, [["__scopeId", "data-v-0598555a"]]), {
    __name: "OrgansSlider",
  }),
  lf = {
    class:
      "circle-button relative rounded-full h-32 w-32 flex items-center justify-center text-white cursor-pointer",
  },
  df = {
    class:
      "bg-white rounded-full w-full h-full flex items-center justify-center relative",
  },
  cf = ve({
    __name: "CircleButton",
    props: { icon: {} },
    setup(e) {
      return (t, i) => (
        I(),
        z("div", lf, [
          i[0] ||
            (i[0] = E(
              "div",
              {
                class:
                  "bg-white/41 absolute scale-140 w-full h-full rounded-full",
              },
              null,
              -1,
            )),
          E("div", df, [(I(), Pi(yr(t.icon)))]),
        ])
      );
    },
  }),
  oo = Object.assign(cf, { __name: "NavigationsCircleButton" }),
  uf = {},
  pf = {
    width: "8",
    height: "12",
    viewBox: "0 0 8 12",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };
function ff(e, t) {
  return (
    I(),
    z(
      "svg",
      pf,
      t[0] ||
        (t[0] = [
          E(
            "path",
            {
              d: "M9.2019 -6L1.2019 6L9.2019 18",
              stroke: "black",
              "stroke-width": "2",
            },
            null,
            -1,
          ),
        ]),
    )
  );
}
const lo = Object.assign(Te(uf, [["render", ff]]), { __name: "IconsBackIcon" }),
  hf = {},
  gf = {
    width: "80",
    height: "80",
    class: "brain",
    viewBox: "0 0 80 80",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };
function mf(e, t) {
  return (
    I(),
    z(
      "svg",
      gf,
      t[0] ||
        (t[0] = [
          Oi(
            '<path d="M31.9371 56.7738C31.9371 54.0201 30.8434 51.379 28.8965 49.4315C26.9496 47.484 24.3089 46.3895 21.5552 46.3887C21.3859 46.3887 21.2357 46.4302 21.0664 46.4398" stroke="#010835" stroke-width="3" stroke-linecap="round"></path><path d="M30.8607 15.6841C31.9752 15.3083 32.9644 14.6321 33.7193 13.73C34.4741 12.8279 34.9652 11.7349 35.1385 10.5716C35.3118 9.40817 35.1606 8.21951 34.7016 7.13657C34.2425 6.05363 33.4934 5.11843 32.5368 4.43404C31.5801 3.74966 30.4531 3.34264 29.28 3.25784C28.1068 3.17304 26.933 3.41375 25.8879 3.95345C24.8428 4.49315 23.967 5.31089 23.3569 6.31656C22.7469 7.32222 22.4263 8.47678 22.4305 9.653C22.4393 10.2307 22.5263 10.8045 22.6893 11.3588C22.3347 11.3301 21.9929 11.2502 21.6319 11.2502C19.3951 11.2388 17.2002 11.857 15.298 13.034C13.3959 14.2111 11.8633 15.8995 10.8753 17.9064C9.8874 19.9132 9.484 22.1576 9.71124 24.3829C9.93848 26.6081 10.7872 28.7246 12.1604 30.4904C9.74558 30.65 7.48181 31.7218 5.82796 33.4886C4.1741 35.2554 3.25391 37.5849 3.25391 40.005C3.25391 42.4251 4.1741 44.7546 5.82796 46.5214C7.48181 48.2882 9.74558 49.36 12.1604 49.5197C10.7887 51.2852 9.94132 53.4009 9.71494 55.6251C9.48856 57.8493 9.89234 60.0923 10.8802 62.098C11.868 64.1036 13.4 65.791 15.3013 66.9673C17.2025 68.1436 19.3962 68.7614 21.6319 68.7502C21.9929 68.7502 22.3347 68.6768 22.6893 68.6448C22.349 69.8485 22.3696 71.1256 22.7484 72.3178C23.1273 73.5099 23.8478 74.5646 24.8205 75.351C25.7933 76.1375 26.9755 76.621 28.2205 76.7418C29.4656 76.8625 30.7187 76.6151 31.8244 76.0303C32.9301 75.4454 33.8399 74.5488 34.4407 73.4517C35.0416 72.3546 35.3072 71.1053 35.2046 69.8586C35.102 68.6119 34.6357 67.4228 33.8635 66.4387C33.0913 65.4546 32.0472 64.7189 30.8607 64.3227" stroke="#010835" stroke-width="3" stroke-linecap="round"></path><path d="M21.0664 33.566C21.2325 33.566 21.3859 33.6139 21.5552 33.6139C24.3084 33.613 26.9486 32.519 28.8954 30.5721C30.8422 28.6253 31.9363 25.9851 31.9371 23.2319" stroke="#010835" stroke-width="3" stroke-linecap="round"></path><path d="M48.0586 56.7738C48.0586 54.0201 49.1523 51.379 51.0992 49.4315C53.0461 47.484 55.6868 46.3895 58.4405 46.3887C58.6098 46.3887 58.76 46.4302 58.9293 46.4398" stroke="#010835" stroke-width="3" stroke-linecap="round"></path><path d="M49.1389 15.6841C48.0243 15.3083 47.0351 14.6321 46.2803 13.73C45.5255 12.8279 45.0344 11.7349 44.8611 10.5716C44.6877 9.40817 44.8389 8.21951 45.298 7.13657C45.7571 6.05363 46.5062 5.11843 47.4628 4.43404C48.4194 3.74966 49.5464 3.34264 50.7196 3.25784C51.8928 3.17304 53.0666 3.41375 54.1117 3.95345C55.1568 4.49315 56.0326 5.31089 56.6426 6.31656C57.2527 7.32222 57.5733 8.47678 57.5691 9.653C57.5603 10.2307 57.4733 10.8045 57.3103 11.3588C57.6649 11.3269 58.0067 11.2502 58.3677 11.2502C60.6039 11.2393 62.7982 11.8576 64.6998 13.0345C66.6014 14.2114 68.1336 15.8994 69.1214 17.9057C70.1092 19.912 70.5128 22.1557 70.2861 24.3805C70.0594 26.6052 69.2114 28.7214 67.8392 30.4872C70.254 30.6468 72.5178 31.7186 74.1716 33.4854C75.8255 35.2522 76.7457 37.5817 76.7457 40.0018C76.7457 42.4219 75.8255 44.7514 74.1716 46.5182C72.5178 48.285 70.254 49.3569 67.8392 49.5165C69.2118 51.2819 70.06 53.398 70.2869 55.6227C70.5138 57.8474 70.1102 60.0911 69.1222 62.0973C68.1343 64.1035 66.6019 65.7913 64.7001 66.9677C62.7983 68.1442 60.6039 68.7619 58.3677 68.7502C58.0067 68.7502 57.6649 68.6768 57.3103 68.6448C57.6506 69.8485 57.63 71.1256 57.2511 72.3178C56.8723 73.5099 56.1518 74.5646 55.179 75.351C54.2063 76.1375 53.0241 76.621 51.7791 76.7418C50.534 76.8625 49.2809 76.6151 48.1752 76.0303C47.0694 75.4454 46.1597 74.5488 45.5588 73.4517C44.958 72.3546 44.6924 71.1053 44.795 69.8586C44.8976 68.6119 45.3639 67.4228 46.1361 66.4387C46.9083 65.4546 47.9524 64.7189 49.1389 64.3227" stroke="#010835" stroke-width="3" stroke-linecap="round"></path><path d="M58.9293 33.566C58.7632 33.566 58.6098 33.6139 58.4405 33.6139C55.6873 33.613 53.0471 32.519 51.1003 30.5721C49.1535 28.6253 48.0594 25.9851 48.0586 23.2319" stroke="#010835" stroke-width="3" stroke-linecap="round"></path><path d="M35.2031 9.33373C36.66 8.49261 38.3126 8.0498 39.9948 8.0498C41.677 8.0498 43.3296 8.49261 44.7865 9.33373" stroke="#010835" stroke-width="3" stroke-linecap="round"></path><path d="M34.9141 72.2637C36.476 73.1066 38.2231 73.548 39.998 73.548C41.7729 73.548 43.52 73.1066 45.082 72.2637" stroke="#010835" stroke-width="3" stroke-linecap="round"></path><path d="M40 24.0308V57.5724" stroke="#010835" stroke-width="3" stroke-linecap="round"></path>',
            9,
          ),
        ]),
    )
  );
}
const ca = Object.assign(Te(hf, [["render", mf]]), {
    __name: "IconsBrainIcon",
  }),
  vf = {},
  xf = {
    width: "30",
    height: "28",
    class: "heart",
    viewBox: "0 0 30 28",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };
function Ff(e, t) {
  return (
    I(),
    z(
      "svg",
      xf,
      t[0] ||
        (t[0] = [
          E(
            "path",
            {
              d: "M9.08807 0.3129C6.76605 0.3129 4.43265 1.19956 2.65709 2.975C-0.876258 6.50847 -0.889535 12.2154 2.60944 15.7701V15.7799L14.5457 27.7068C14.7973 27.9542 15.2007 27.9542 15.4522 27.7068L27.3886 15.7799C27.3886 15.7767 27.3886 15.7735 27.3886 15.7701C30.8876 12.2154 30.8743 6.50847 27.3409 2.975C25.5867 1.22089 23.2896 0.33317 20.9958 0.3129C18.8339 0.293934 16.7364 0.948022 15.0038 2.46861C13.2928 0.963313 11.2262 0.3129 9.08807 0.3129ZM9.08807 1.60104C11.0598 1.60104 13.0214 2.35233 14.5459 3.85289C14.7974 4.10027 15.2008 4.10027 15.4523 3.85289C16.9947 2.33466 18.9906 1.5835 20.9863 1.60104C22.9539 1.6187 24.9132 2.37923 26.425 3.89105C29.4702 6.93615 29.4783 11.8005 26.4632 14.8637L15.0038 26.3326L3.53497 14.8637C0.519868 11.8005 0.52793 6.93615 3.57314 3.89105C5.1031 2.36098 7.09618 1.60104 9.08807 1.60104Z",
              fill: "#010835",
            },
            null,
            -1,
          ),
        ]),
    )
  );
}
const wf = Object.assign(Te(vf, [["render", Ff]]), {
    __name: "IconsHeartIcon",
  }),
  bf = {},
  yf = {
    width: "30",
    height: "30",
    class: "toxin",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };
function Af(e, t) {
  return (
    I(),
    z(
      "svg",
      yf,
      t[0] ||
        (t[0] = [
          Oi(
            '<path d="M15.0622 24.6964C17.5335 21.8808 14.9787 19.4907 15.3364 15.9898C15.786 11.5888 20.3388 11.8895 19.9134 7.80297C19.286 1.77538 6.89641 3.96767 4.92937 15.1794C3.02361 26.0418 11.446 28.8162 15.0622 24.6964Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.776 21.8682C28.1183 19.9406 27.391 18.1997 25.51 17.8657C23.629 17.5318 22.3469 18.916 22.0048 20.8436C21.6625 22.7711 22.3724 24.509 24.2708 24.846C26.1003 25.1708 27.4339 23.7957 27.776 21.8682Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.6247 20.4916C12.8341 19.3125 12.279 18.228 10.9222 17.9871C9.56528 17.7463 8.67081 18.5734 8.46148 19.7525C8.25215 20.9316 8.79466 22.0139 10.1641 22.257C11.4839 22.4914 12.4154 21.6708 12.6247 20.4916Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.9864 11.0945C14.9274 10.9473 15.5998 10.2496 15.4304 9.1667C15.261 8.08381 14.4078 7.6247 13.4668 7.77188C12.5256 7.91907 11.8517 8.60679 12.0227 9.6997C12.1874 10.753 13.0454 11.2417 13.9864 11.0945Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.06891 14.4869C8.86474 14.4869 8.69922 14.3214 8.69922 14.1172C8.69922 13.9131 8.86474 13.7476 9.06891 13.7476" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.07031 14.4869C9.27449 14.4869 9.44 14.3214 9.44 14.1172C9.44 13.9131 9.27449 13.7476 9.07031 13.7476" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25.2604 21.1095C25.0561 21.1095 24.8906 20.944 24.8906 20.7399C24.8906 20.5357 25.0561 20.3701 25.2604 20.3701" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25.2617 21.1095C25.466 21.1095 25.6315 20.944 25.6315 20.7399C25.6315 20.5357 25.466 20.3701 25.2617 20.3701" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.9414 4.64368L17.1697 2.06445" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M13.383 4.88239L12.8633 2.45264" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.2227 5.99485L21.88 4.64355" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.9414 8.38379L22.2374 8.68414" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.9766 11.7417L19.7243 13.1291" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.3281 16.1426L17.8304 16.6876" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.0312 20.8359L18.0505 20.7422" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15.5938 23.9766L18.1283 25.3806" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.543 28.7456V26.5127" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24.8906 17.8031V16.2729" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M22.7713 18.9807L22.043 17.9346" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.9262 22.1426L20.4883 22.6941" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M23.5425 24.6279L22.4688 25.9129" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25.9141 24.6484L26.5492 25.9136" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.6641 22.418L28.8183 22.8057" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.082 18.7007L28.143 18.0186" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.82812 27.3122L7.6505 25.3564" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3.42969 23.6103L5.44704 22.4414" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.17188 19.5299L4.68469 19.1309" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M2.32031 15.3242L4.83314 15.7148" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 10.6543L5.80547 12.0691" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M5.73047 7.10742L7.76948 8.68391" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M9.15234 4.19434L10.5415 6.14884" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.4818 28.0012L13.4336 25.9561" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>',
            32,
          ),
        ]),
    )
  );
}
const Ef = Object.assign(Te(bf, [["render", Af]]), {
    __name: "IconsToxinIcon",
  }),
  _f = {},
  Cf = {
    width: "30",
    height: "30",
    class: "int",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };
function Sf(e, t) {
  return (
    I(),
    z(
      "svg",
      Cf,
      t[0] ||
        (t[0] = [
          Oi(
            '<mask id="mask0_2752_30028" style="mask-type:luminance;" maskUnits="userSpaceOnUse" x="1" y="0" width="29" height="29"><path d="M29.0625 0.75H1.5V28.3125H29.0625V0.75Z" fill="white"></path></mask><g mask="url(#mask0_2752_30028)"><path d="M10.0586 15.6763C10.4221 16.2584 11.0685 16.6457 11.8054 16.6457H12.546C12.546 17.6402 13.2515 18.4699 14.1891 18.6617" stroke="#010835" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.204 21.2713C27.148 20.7101 26.9285 20.1809 26.582 19.7471C27.72 19.3555 28.538 18.2765 28.538 17.0055C28.538 16.3009 28.2864 15.6552 27.8685 15.1527C28.2864 14.6503 28.538 14.0045 28.538 13.2999C28.538 12.5883 28.2812 11.937 27.8558 11.4325C28.2923 10.9148 28.5513 10.2424 28.5374 9.5091C28.5201 8.59024 28.0659 7.76754 27.3734 7.24634" stroke="#010835" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M20.3064 10.3519C20.3334 10.9412 20.5367 11.4843 20.8642 11.9306C20.5304 12.4031 20.3336 12.9792 20.3336 13.6016C20.3336 14.2373 20.5388 14.8248 20.8857 15.3028C20.5388 15.7808 20.3336 16.3682 20.3336 17.004C20.3336 17.4457 20.4327 17.864 20.6094 18.2387C19.7054 17.905 18.6553 18.0284 17.8351 18.6593C17.819 18.6716 17.8037 18.6849 17.7878 18.6975C17.2693 18.2882 16.6082 18.0516 15.8907 18.0764C14.3598 18.1294 13.1205 19.3919 13.0943 20.9235C13.083 21.5871 13.295 22.2007 13.6597 22.6945C13.5248 23.0048 13.4496 23.3472 13.4496 23.7072C13.4496 24.3946 13.7223 25.0181 14.1654 25.4758C14.5466 25.8697 14.7723 26.388 14.7723 26.9361V27.7725H17.2145V26.9647C17.2145 26.4123 17.4268 25.8796 17.8127 25.4845C18.0581 25.2334 18.2518 24.9317 18.3769 24.5965C19.383 25.691 21.0761 25.8541 22.2767 24.9305C22.5703 24.7047 22.8079 24.4333 22.9889 24.1345C23.1659 24.2254 23.3547 24.2997 23.5544 24.354C23.7559 24.4089 23.9584 24.4412 24.159 24.4523" stroke="#010835" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.07859 8.3125C3.18186 8.8056 2.57437 9.75923 2.57427 10.8548C2.57427 11.4222 2.73788 11.9509 3.01945 12.3979C2.42522 12.9289 2.05078 13.7008 2.05078 14.5603C2.05078 15.42 2.42522 16.1919 3.01945 16.7229C2.73788 17.1698 2.57427 17.6986 2.57427 18.2659C2.57427 19.8672 3.87245 21.1654 5.47371 21.1654C5.56598 21.1654 5.65685 21.1597 5.74692 21.1512C5.92118 22.0674 6.32451 22.9301 6.9335 23.6652C7.14164 23.9165 7.44214 24.0464 7.74484 24.0464C7.98497 24.0464 8.22668 23.9646 8.42486 23.7967C8.86506 23.4239 8.91009 22.7549 8.54423 22.3089C8.18563 21.8719 7.94332 21.3633 7.82933 20.8229C9.20432 20.596 10.2533 19.4022 10.2533 17.9629C10.2533 17.3271 10.048 16.7395 9.70101 16.2616C10.048 15.7837 10.2533 15.1961 10.2533 14.5603C10.2533 13.9245 10.048 13.337 9.70101 12.859C10.048 12.3811 10.2533 11.7935 10.2533 11.1577C10.2533 10.864 10.2096 10.5804 10.1284 10.3132" stroke="#010835" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M27.4266 4.94227C27.2645 4.51762 27.0139 4.15275 26.704 3.86051C26.6839 3.59976 26.6271 3.33742 26.529 3.08065C25.9802 1.64289 24.3697 0.922213 22.9319 1.47111C22.1925 1.75339 21.6435 2.31683 21.3585 2.99277C20.7277 2.41647 19.8413 2.13629 18.9386 2.31414C18.202 2.45921 17.5914 2.88267 17.1932 3.45319C16.6944 2.98241 16.0223 2.69336 15.2823 2.69336C14.5422 2.69336 13.8702 2.98241 13.3714 3.45319C12.9732 2.88257 12.3626 2.45921 11.626 2.31414C10.7232 2.13629 9.83688 2.41637 9.20608 2.99277C8.92121 2.31683 8.37212 1.75339 7.63271 1.47111C6.19495 0.922213 4.58451 1.64289 4.03561 3.08065C3.93757 3.33742 3.88068 3.59976 3.86055 3.86051C3.55058 4.15275 3.30009 4.51762 3.13808 4.94227C2.56308 6.44828 3.31793 8.13534 4.82404 8.71024C5.79929 9.08259 6.85006 8.89667 7.62603 8.3108C7.99758 9.28136 8.8445 10.0452 9.93931 10.2608C10.9941 10.4685 12.0292 10.1186 12.74 9.41588C13.3651 10.1129 14.2723 10.5518 15.2823 10.5518C16.2923 10.5518 17.1995 10.1129 17.8246 9.41588C18.5354 10.1187 19.5706 10.4686 20.6253 10.2608C21.7201 10.0452 22.567 9.28136 22.9386 8.3108C23.7144 8.89667 24.7653 9.08259 25.7405 8.71024C27.2467 8.13534 28.0015 6.44828 27.4266 4.94227Z" stroke="#010835" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M24.3144 8.90381C24.3144 12.2536 24.0833 15.5495 23.6364 18.7762C23.4321 20.2502 22.1778 21.3508 20.6898 21.3508H16.7383" stroke="#010835" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.12146 18.2686C6.04125 17.5235 6 16.7667 6 16.0004C6 13.3657 6.48673 10.8447 7.37519 8.52246" stroke="#010835" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M6.83984 5.05029C9.45203 6.0929 12.3022 6.66661 15.2866 6.66661C18.2708 6.66661 21.121 6.0929 23.7333 5.05029" stroke="#010835" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M12.543 16.6437C12.543 15.5978 13.3908 14.75 14.4367 14.75" stroke="#010835" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M14.4453 14.7546H17.0714C17.6284 14.7546 18.0799 14.3031 18.0799 13.7461" stroke="#010835" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M10.3906 12.8274H12.3657" stroke="#010835" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path></g>',
            2,
          ),
        ]),
    )
  );
}
const Tf = Object.assign(Te(_f, [["render", Sf]]), { __name: "IconsIntIcon" }),
  Df = {},
  Mf = {
    width: "30",
    height: "30",
    class: "dna",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };
function kf(e, t) {
  return (
    I(),
    z(
      "svg",
      Mf,
      t[0] ||
        (t[0] = [
          Oi(
            '<path d="M15 9.6875C17.4162 9.6875 19.375 7.72875 19.375 5.3125C19.375 2.89625 17.4162 0.9375 15 0.9375C12.5838 0.9375 10.625 2.89625 10.625 5.3125C10.625 7.72875 12.5838 9.6875 15 9.6875Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M17.7507 27.5625L15.0007 21.1875L12.2507 27.5625C11.8757 28.4375 10.8757 29.0625 10.0007 29.0625C9.62574 29.0625 9.25074 28.9375 9.00074 28.8125C7.75074 28.1875 7.25074 26.8125 7.75074 25.5625L11.6257 16.5625V14.9375L4.75074 12.1875C3.50074 11.6875 2.87573 10.3125 3.37573 9.0625C3.91054 7.72548 5.25273 7.01329 6.62574 7.56249C7.99877 8.1117 10.2508 9.06249 12.6257 9.93749C13.3957 10.2583 14.1987 10.4145 15.0007 10.4059C15.8029 10.4145 16.6057 10.2583 17.3757 9.93749C19.7507 9.06249 22.0027 8.1117 23.3757 7.56249C24.7487 7.01329 26.091 7.72548 26.6257 9.0625C27.1257 10.3125 26.5007 11.6875 25.2507 12.1875L18.3757 14.9375V16.5625L22.2507 25.5625C22.7507 26.8125 22.2507 28.1875 21.0007 28.8125C20.7507 28.9375 20.3757 29.0625 20.0007 29.0625C19.1257 29.0625 18.1257 28.4375 17.7507 27.5625Z" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25.25 12.1606C26.875 12.4106 27.875 14.0356 27.375 15.4106C26.875 16.6606 25.5 17.4106 24.25 16.9106" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M25.875 25.563C26.625 24.438 26.25 22.813 25.125 22.188L19.125 18.313" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.75047 12.1602C3.12547 12.4102 2.12547 14.0351 2.62547 15.4101C3.12547 16.6601 4.50047 17.4101 5.75047 16.9101" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path><path d="M4.12457 25.563C3.37457 24.438 3.74956 22.813 4.87456 22.188L10.8746 18.313" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"></path>',
            6,
          ),
        ]),
    )
  );
}
const Bf = Object.assign(Te(Df, [["render", kf]]), { __name: "IconsDnaIcon" }),
  Pf = {},
  If = {
    width: "30",
    height: "30",
    class: "cell",
    viewBox: "0 0 30 30",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
  };
function Lf(e, t) {
  return (
    I(),
    z(
      "svg",
      If,
      t[0] ||
        (t[0] = [
          Oi(
            '<path d="M14.9986 28.0412C22.2014 28.0412 28.0402 22.2023 28.0402 14.9996C28.0402 7.79693 22.2014 1.95801 14.9986 1.95801C7.79597 1.95801 1.95703 7.79693 1.95703 14.9996C1.95703 22.2023 7.79597 28.0412 14.9986 28.0412Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M8.32869 19.5695C9.44434 19.5695 10.3488 18.6651 10.3488 17.5493C10.3488 16.4337 9.44434 15.5293 8.32869 15.5293C7.21302 15.5293 6.30859 16.4337 6.30859 17.5493C6.30859 18.6651 7.21302 19.5695 8.32869 19.5695Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M21.932 10.2763C21.932 12.2845 20.304 13.9125 18.2958 13.9125C16.8013 13.9125 15.5174 13.0108 14.9583 11.7219C14.6918 11.8137 14.4056 11.8635 14.1078 11.8635C12.6654 11.8635 11.4961 10.6942 11.4961 9.25182C11.4961 7.80944 12.6654 6.64015 14.1078 6.64015C14.8537 6.64015 15.5266 6.95288 16.0025 7.45437C16.6282 6.94531 17.4264 6.64014 18.2958 6.64014C20.304 6.64014 21.932 8.26811 21.932 10.2763Z" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M19.1445 21.5377C19.471 18.5314 22.8339 19.7317 22.6907 16.5938" stroke="black" stroke-linecap="round"></path><path d="M14.9989 18.6002C14.8031 18.6002 14.6445 18.4416 14.6445 18.2459C14.6445 18.0502 14.8031 17.8916 14.9989 17.8916" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M15 18.6002C15.1956 18.6002 15.3543 18.4416 15.3543 18.2459C15.3543 18.0502 15.1956 17.8916 15 17.8916" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.54569 9.45759C7.35003 9.45759 7.19141 9.29898 7.19141 9.10331C7.19141 8.90764 7.35003 8.74902 7.54569 8.74902" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M7.54688 9.45759C7.74253 9.45759 7.90116 9.29898 7.90116 9.10331C7.90116 8.90764 7.74253 8.74902 7.54688 8.74902" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.362 24.0738C16.1664 24.0738 16.0078 23.9152 16.0078 23.7195C16.0078 23.5238 16.1664 23.3652 16.362 23.3652" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path><path d="M16.3594 24.0738C16.555 24.0738 16.7136 23.9152 16.7136 23.7195C16.7136 23.5238 16.555 23.3652 16.3594 23.3652" stroke="black" stroke-linecap="round" stroke-linejoin="round"></path>',
            10,
          ),
        ]),
    )
  );
}
const Of = Object.assign(Te(Pf, [["render", Lf]]), { __name: "IconsCellIcon" }),
  zf = { class: "flex gap-20" },
  Rf = {
    class: "text-semi-600-16 leading-none capitalize transform translate-y-7",
  },
  Hf = ve({
    __name: "PickOrganButton",
    props: {
      organ: { type: Object, required: !0 },
      icon: { type: Object, required: !1 },
    },
    setup(e) {
      Xe();
      const t = $(null),
        i = vs({ x: 0, y: 0 }),
        s = (n) => {
          if (!t.value) return;
          const r = t.value.getBoundingClientRect(),
            a = n.clientX - r.left - 49,
            o = n.clientY - r.top - 49;
          ((i.x = a), (i.y = o));
        };
      return (n, r) => (
        I(),
        z(
          "div",
          {
            class:
              "bg-white/61 relative pick-organs-item hover:bg-white overflow-hidden flex h-64 xs:max-[767px]:h-58 rounded-2xl pl-24 pr-30 items-center mb-8 justify-between transition duration-300 ease-in-out cursor-pointer",
            ref_key: "button",
            ref: t,
            onMousemove: s,
          },
          [
            E(
              "div",
              {
                class: "hover-gradient",
                style: ni({ transform: `translate(${i.x}px, ${i.y}px)` }),
              },
              null,
              4,
            ),
            E("div", zf, [
              (I(), Pi(yr(e.icon), { class: "w-30 h-30 icon" })),
              E("p", Rf, at(e.organ.pickName), 1),
            ]),
            r[0] ||
              (r[0] = E(
                "svg",
                {
                  width: "8",
                  class: "arrow",
                  height: "12",
                  viewBox: "0 0 8 12",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                [
                  E("path", {
                    d: "M-1.5 -6L6.5 6L-1.5 18",
                    stroke: "#282F3C",
                    "stroke-width": "2",
                  }),
                ],
                -1,
              )),
          ],
          544,
        )
      );
    },
  }),
  Gf = Object.assign(Hf, { __name: "NavigationsPickOrganButton" }),
  Nf = { class: "lg:pt-30 md:pt-30 xs:pt-20 pb-8" },
  Uf = { class: "px-16" },
  Vf = ve({
    __name: "PickOrgans",
    setup(e) {
      const t = Xe(),
        { isRealTablet: i, isMobile: s } = ht(),
        n = $(null),
        r = t.getOrgansList,
        a = (u) =>
          ({
            Neurology: ca,
            Cardiovascular: wf,
            Toxins: Ef,
            Gut: Tf,
            Hormones: ao,
            Genetics: Bf,
            Longevity: Of,
          })[u] || ca,
        o = () => {
          (!s && !i.value) || t.setMobileListOpen(!t.isMobileListOpen);
        },
        l = (u, c, p) => {
          (t.setActiveState(u),
            t.cameraTo(c),
            t.setSliderState(p),
            t.setMobileListOpen(!1),
            t.isTriggerSecondTooltip ||
              (t.setTriggerSecondTooltip(!0),
              t.setShowTopTooltip(!1),
              setTimeout(() => {
                (t.setTopTooltipText("Click On The Test To Learn More"),
                  t.setShowTopTooltip(!0));
              }, 500)));
        },
        d = (u, c = !1) => {
          t.getActiveState === "list" && t.setHoverOrgan(u, c);
        };
      return (u, c) => (
        I(),
        z("div", null, [
          E(
            "div",
            {
              class: G([
                "md:hidden xs:block fixed w-full h-full pointer-events-none transform left-0 top-0",
                {
                  "!pointer-events-auto z-8":
                    L(t).getActiveState === "list" && L(t).isMobileListOpen,
                },
              ]),
              onClick: c[0] || (c[0] = (p) => L(t).setMobileListOpen(!1)),
            },
            null,
            2,
          ),
          E(
            "div",
            {
              ref_key: "list",
              ref: n,
              class: G([
                "pick-organs border-1 border-white/21 fixed lg:right-20 md:right-1/2 xs:right-0 lg:w-360 md:w-450 xs:w-full z-9 brand-white-gradient backdrop-blur rounded-2smd lg:bottom-53 md:bottom-0 lg:-translate-y-0 md:translate-y-full transition-all duration-500 ease-in-out transform lg:translate-x-50 md:translate-x-1/2 xs:translate-x-0 opacity-0 pointer-events-none xs:translate-y-full xs:bottom-0",
                {
                  "!opacity-100 !pointer-events-auto lg:!translate-x-0 md:max-[1181px]:translate-y-[86%] xs:max-[767px]:translate-y-[87%]":
                    L(t).getActiveState === "list",
                  "": L(t).getActiveState !== "list",
                  "md:max-[1181px]:!translate-y-0 xs:max-[767px]:!translate-y-0":
                    L(t).isMobileListOpen,
                },
              ]),
            },
            [
              E("div", Nf, [
                E(
                  "div",
                  {
                    onClick: o,
                    class:
                      "flex md:mb-30 xs:mb-30 lg:justify-center xs:justify-between lg:items-start xs:items-center px-20",
                  },
                  [
                    c[1] ||
                      (c[1] = E(
                        "p",
                        { class: "text-bold-700-15 uppercase" },
                        "Explore categories",
                        -1,
                      )),
                    Be(
                      oo,
                      {
                        class: G([
                          "lg:hidden transform rotate-90",
                          { "!-rotate-90": L(t).isMobileListOpen },
                        ]),
                        icon: lo,
                      },
                      null,
                      8,
                      ["class"],
                    ),
                  ],
                ),
                E("div", Uf, [
                  (I(!0),
                  z(
                    Wt,
                    null,
                    Xt(
                      L(r),
                      (p) => (
                        I(),
                        Pi(
                          Gf,
                          {
                            organ: p,
                            icon: a(p.name),
                            onClick: (f) => l("slider", p.name, p.index),
                            onMouseenter: (f) => d(p.name, !0),
                            onMouseleave: (f) => d(p.name, !1),
                          },
                          null,
                          8,
                          [
                            "organ",
                            "icon",
                            "onClick",
                            "onMouseenter",
                            "onMouseleave",
                          ],
                        )
                      ),
                    ),
                    256,
                  )),
                ]),
              ]),
            ],
            2,
          ),
        ])
      );
    },
  }),
  jf = Object.assign(Vf, { __name: "PickOrgans" }),
  Qf = ri("/images/svg/LogoNew.svg"),
  Yf = ri("/images/svg/Logo.svg"),
  Wf = {
    class:
      "flex justify-between items-center md:h-48 xs:h-48 px-8 brand-white-gradient relative backdrop-blur-md rounded-full gap-0 border-1 border-white/21",
  },
  Xf = ve({
    __name: "BodySwicher",
    setup(e) {
      const t = Xe(),
        i = (a) => {
          (t.setBodySelected(a), t.setShowTopTooltip(!1));
        },
        s = $(null),
        n = vs({ x: 0, y: 0 }),
        r = (a) => {
          if (!s.value) return;
          const o = s.value.getBoundingClientRect(),
            l = a.clientX - o.left - 49,
            d = a.clientY - o.top - 49;
          ((n.x = l), (n.y = d));
        };
      return (a, o) => (
        I(),
        z(
          "div",
          {
            onMousemove: r,
            ref_key: "buttonRef",
            ref: s,
            class: "body-switcher overflow-hidden rounded-full",
          },
          [
            E("div", Wf, [
              E(
                "div",
                {
                  class: "hover-gradient",
                  style: ni({ transform: `translate(${n.x}px, ${n.y}px)` }),
                },
                null,
                4,
              ),
              E(
                "div",
                {
                  class: G([
                    "active-element bg-brand-green md:w-93 xs:w-85 md:h-32 xs:h-32 left-7 rounded-full absolute transition-all duration-800 ease-in-out",
                    {
                      "md:!w-84 xs:!w-68 md:!left-107 xs:!left-90":
                        L(t).getBodySelected === "male",
                    },
                  ]),
                },
                null,
                2,
              ),
              E(
                "div",
                {
                  onClick: o[0] || (o[0] = (l) => i("female")),
                  class:
                    "simple-button flex items-center cursor-pointer transition-all duration-300 ease-in-out px-16 h-48 rounded-full relative",
                },
                [
                  E(
                    "p",
                    {
                      class: G([
                        "text-bold-700-13 uppercase transition-all duration-600 ease-in-out",
                        { "text-white": L(t).getBodySelected === "female" },
                      ]),
                    },
                    "female",
                    2,
                  ),
                  E(
                    "img",
                    {
                      class: G([
                        { invert: L(t).getBodySelected === "female" },
                        "h-15 ml-2 transition-all duration-600 ease-in-out md:block xs:hidden",
                      ]),
                      alt: "icon",
                      src: Fl,
                    },
                    null,
                    2,
                  ),
                ],
              ),
              E(
                "div",
                {
                  onClick: o[1] || (o[1] = (l) => i("male")),
                  class:
                    "simple-button flex items-center cursor-pointer transition-all duration-300 ease-in-out px-16 h-48 rounded-full relative",
                },
                [
                  E(
                    "p",
                    {
                      class: G([
                        { "text-white": L(t).getBodySelected === "male" },
                        "text-bold-700-13 uppercase transition-all duration-600 ease-in-out",
                      ]),
                    },
                    "male",
                    2,
                  ),
                  E(
                    "img",
                    {
                      alt: "icon",
                      class: G([
                        { invert: L(t).getBodySelected === "male" },
                        "h-15 ml-4 transition-all duration-600 ease-in-out md:block xs:hidden",
                      ]),
                      src: wl,
                    },
                    null,
                    2,
                  ),
                ],
              ),
            ]),
          ],
          544,
        )
      );
    },
  }),
  Kf = Object.assign(Te(Xf, [["__scopeId", "data-v-10c76f19"]]), {
    __name: "NavigationsBodySwicher",
  }),
  qf = ve({
    __name: "HeaderActiveStory",
    setup(e) {
      const t = Xe();
      return (i, s) => (
        I(),
        z(
          "div",
          {
            class: G([
              "rounded-4xl ml-20 h-43 flex shadow-[0px_4px_80px_0px_#0000003D] bg-white uppercase items-center px-16 text-bold-700-16 opacity-0 transition-all duration-500 ease-in-out translate-x-30 absolute transform xs:max-[767px]:w-180 pointer-events-none lg:hidden",
              {
                "opacity-100 !translate-x-50 cursor-pointer !pointer-events-auto":
                  L(t).getActiveState === "story",
              },
            ]),
          },
          at(L(t).getActiveStoryName),
          3,
        )
      );
    },
  }),
  Jf = Object.assign(qf, { __name: "NavigationsHeaderActiveStory" }),
  Zf = {
    class:
      "container px-20 flex items-center justify-between md:pt-22 xs:pt-20",
  },
  $f = { class: "flex-1/3 flex items-center relative" },
  eh = ve({
    __name: "Header",
    setup(e) {
      const t = Xe(),
        i = () => {
          (t.getActiveState === "story"
            ? (t.setActiveState("slider"),
              t.cameraTo(t.getActiveOrgan),
              t.setTriggerStoryAnimation(!1),
              setTimeout(() => {
                (t.setActiveStory(null), t.setActiveStoryTab(0));
              }, 600))
            : t.setActiveState("list"),
            t.hotspotClicked || t.setShowTopTooltip(!1));
        },
        s = () => {
          window.location.reload();
        };
      return (n, r) => (
        I(),
        z(
          "header",
          {
            class: G([
              "fixed z-41 w-full h-32 top-0 left-0 -translate-y-90 transition-all opacity-0 transform delay-2100 duration-600 ease-in-out",
              { "translate-y-0 opacity-100": L(t).isSceneLoaded },
            ]),
          },
          [
            E("div", Zf, [
              E("div", $f, [
                Be(
                  oo,
                  {
                    class: G([
                      {
                        "!opacity-100 !pointer-events-auto":
                          L(t).getActiveState === "slider" ||
                          L(t).getActiveState === "story",
                      },
                      "opacity-0 pointer-events-none",
                    ]),
                    onClick: i,
                    icon: lo,
                  },
                  null,
                  8,
                  ["class"],
                ),
                Be(Jf, {
                  onClick: r[0] || (r[0] = (a) => L(t).scrollToTopStory()),
                }),
              ]),
              E(
                "div",
                {
                  class: G([
                    "flex-1/3 flex items-center justify-center transition-all transform duration-500 ease-in-out",
                    {
                      "pointer-events-none -translate-y-80 opacity-0":
                        L(t).getActiveState === "story",
                    },
                  ]),
                },
                [Be(Kf)],
                2,
              ),
              E(
                "div",
                {
                  class: G([
                    "flex-1/3 flex justify-end transform translate-y-0 opacity-100 duration-500 ease-in-out transition-all",
                    {
                      "!opacity-0 !-translate-y-40":
                        L(t).getActiveState === "choose",
                    },
                  ]),
                },
                [
                  E("img", {
                    onClick: s,
                    alt: "logo",
                    class: "cursor-pointer md:h-40 xs:h-34 lg:hidden",
                    src: Qf,
                  }),
                  E("img", {
                    onClick: s,
                    alt: "logo",
                    class: "cursor-pointer lg:block xs:hidden h-35",
                    src: Yf,
                  }),
                ],
                2,
              ),
            ]),
          ],
          2,
        )
      );
    },
  }),
  th = Object.assign(eh, { __name: "Header" }),
  ih = {
    class:
      "simple-button whitespace-nowrap flex items-center cursor-pointer transition-all duration-300 ease-in-out lg:px-16 xs:px-12 h-32 lg:rounded-full",
  },
  sh = { class: "lg:text-semi-600-14 xs:text-semi-600-16" },
  nh = ve({
    __name: "SimpleButton",
    props: {
      text: { type: String, default: "" },
      counter: { type: Number, default: 0 },
    },
    setup(e) {
      return (t, i) => (I(), z("div", ih, [E("p", sh, at(e.text), 1)]));
    },
  }),
  rh = Object.assign(Te(nh, [["__scopeId", "data-v-b3d8fae3"]]), {
    __name: "NavigationsSimpleButton",
  }),
  ah = {
    class:
      "flex brand-white-gradient relative backdrop-blur-md rounded-full border-1 border-white/21 lg:justify-between xs:justify-around items-center lg:h-48 xs:h-67 px-8 lg:rounded-full gap-8 lg:w-auto xs:w-screen xs:overflow-y-scroll no-scrollbar",
  },
  oh = { class: "title mx-18 lg:block xs:hidden" },
  lh = ve({
    __name: "StoryHeader",
    props: { data: {} },
    setup(e) {
      const t = Xe();
      xs(() => {});
      const i = $(null),
        s = vs({ x: 0, y: 0 }),
        n = (r) => {
          if (!i.value) return;
          const a = i.value.getBoundingClientRect(),
            o = r.clientX - a.left - 49,
            l = r.clientY - a.top - 49;
          ((s.x = o), (s.y = l));
        };
      return (r, a) => (
        I(),
        z(
          "div",
          {
            onMousemove: n,
            ref_key: "buttonRef",
            ref: i,
            class:
              "content-header lg:rounded-full xs:rounded-t overflow-hidden flex justify-between items-center fixed z-42 lg:top-22 lg:bottom-[unset] xs:bottom-0 left-[50%] translate-x-[-50%] lg:max-[1280px]:translate-x-[calc(-50%_-_10rem)] lg:bg-transparent xs:bg-white lg:shadow-none xs:shadow-[0px_-20px_80px_0px_#00000040]",
          },
          [
            E(
              "div",
              {
                class: "hover-gradient",
                style: ni({ transform: `translate(${s.x}px, ${s.y}px)` }),
              },
              null,
              4,
            ),
            E("div", ah, [
              E("div", oh, [
                E(
                  "p",
                  {
                    onClick: a[0] || (a[0] = (o) => L(t).scrollToTopStory()),
                    class:
                      "lg:text-semi-600-14 xs:text-semi-600-16 whitespace-nowrap cursor-pointer",
                  },
                  at(r.data[0]?.title || "") + ": ",
                  1,
                ),
              ]),
              (I(!0),
              z(
                Wt,
                null,
                Xt(
                  r.data,
                  (o, l) => (
                    I(),
                    Pi(
                      rh,
                      {
                        class: G({ active: l === L(t).getActiveStoryTab }),
                        onClick: (d) => L(t).setActiveStoryTab(l),
                        text: o.name,
                        counter: l + 1,
                      },
                      null,
                      8,
                      ["class", "onClick", "text", "counter"],
                    )
                  ),
                ),
                256,
              )),
            ]),
          ],
          544,
        )
      );
    },
  }),
  dh = Object.assign(Te(lh, [["__scopeId", "data-v-ff05c6d1"]]), {
    __name: "StoryComponentsStoryHeader",
  });
function ch(e, t) {
  for (var i = 0; i < t.length; i++) {
    var s = t[i];
    ((s.enumerable = s.enumerable || !1),
      (s.configurable = !0),
      "value" in s && (s.writable = !0),
      Object.defineProperty(e, s.key, s));
  }
}
function uh(e, t, i) {
  return (t && ch(e.prototype, t), e);
}
/*!
 * Observer 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Ze,
  fn,
  Mt,
  Mi,
  ki,
  cs,
  co,
  Ui,
  Bs,
  uo,
  xi,
  Yt,
  po,
  fo = function () {
    return (
      Ze ||
      (typeof window < "u" && (Ze = window.gsap) && Ze.registerPlugin && Ze)
    );
  },
  ho = 1,
  ls = [],
  se = [],
  si = [],
  Ps = Date.now,
  ur = function (t, i) {
    return i;
  },
  ph = function () {
    var t = Bs.core,
      i = t.bridge || {},
      s = t._scrollers,
      n = t._proxies;
    (s.push.apply(s, se),
      n.push.apply(n, si),
      (se = s),
      (si = n),
      (ur = function (a, o) {
        return i[a](o);
      }));
  },
  Bi = function (t, i) {
    return ~si.indexOf(t) && si[si.indexOf(t) + 1][i];
  },
  Is = function (t) {
    return !!~uo.indexOf(t);
  },
  dt = function (t, i, s, n, r) {
    return t.addEventListener(i, s, { passive: n !== !1, capture: !!r });
  },
  lt = function (t, i, s, n) {
    return t.removeEventListener(i, s, !!n);
  },
  Zs = "scrollLeft",
  $s = "scrollTop",
  pr = function () {
    return (xi && xi.isPressed) || se.cache++;
  },
  An = function (t, i) {
    var s = function n(r) {
      if (r || r === 0) {
        ho && (Mt.history.scrollRestoration = "manual");
        var a = xi && xi.isPressed;
        ((r = n.v = Math.round(r) || (xi && xi.iOS ? 1 : 0)),
          t(r),
          (n.cacheID = se.cache),
          a && ur("ss", r));
      } else
        (i || se.cache !== n.cacheID || ur("ref")) &&
          ((n.cacheID = se.cache), (n.v = t()));
      return n.v + n.offset;
    };
    return ((s.offset = 0), t && s);
  },
  ft = {
    s: Zs,
    p: "left",
    p2: "Left",
    os: "right",
    os2: "Right",
    d: "width",
    d2: "Width",
    a: "x",
    sc: An(function (e) {
      return arguments.length
        ? Mt.scrollTo(e, Ne.sc())
        : Mt.pageXOffset || Mi[Zs] || ki[Zs] || cs[Zs] || 0;
    }),
  },
  Ne = {
    s: $s,
    p: "top",
    p2: "Top",
    os: "bottom",
    os2: "Bottom",
    d: "height",
    d2: "Height",
    a: "y",
    op: ft,
    sc: An(function (e) {
      return arguments.length
        ? Mt.scrollTo(ft.sc(), e)
        : Mt.pageYOffset || Mi[$s] || ki[$s] || cs[$s] || 0;
    }),
  },
  Ft = function (t, i) {
    return (
      ((i && i._ctx && i._ctx.selector) || Ze.utils.toArray)(t)[0] ||
      (typeof t == "string" && Ze.config().nullTargetWarn !== !1
        ? console.warn("Element not found:", t)
        : null)
    );
  },
  fh = function (t, i) {
    for (var s = i.length; s--;) if (i[s] === t || i[s].contains(t)) return !0;
    return !1;
  },
  Li = function (t, i) {
    var s = i.s,
      n = i.sc;
    Is(t) && (t = Mi.scrollingElement || ki);
    var r = se.indexOf(t),
      a = n === Ne.sc ? 1 : 2;
    (!~r && (r = se.push(t) - 1), se[r + a] || dt(t, "scroll", pr));
    var o = se[r + a],
      l =
        o ||
        (se[r + a] =
          An(Bi(t, s), !0) ||
          (Is(t)
            ? n
            : An(function (d) {
                return arguments.length ? (t[s] = d) : t[s];
              })));
    return (
      (l.target = t),
      o || (l.smooth = Ze.getProperty(t, "scrollBehavior") === "smooth"),
      l
    );
  },
  fr = function (t, i, s) {
    var n = t,
      r = t,
      a = Ps(),
      o = a,
      l = i || 50,
      d = Math.max(500, l * 3),
      u = function (h, F) {
        var v = Ps();
        F || v - a > l
          ? ((r = n), (n = h), (o = a), (a = v))
          : s
            ? (n += h)
            : (n = r + ((h - r) / (v - o)) * (a - o));
      },
      c = function () {
        ((r = n = s ? 0 : n), (o = a = 0));
      },
      p = function (h) {
        var F = o,
          v = r,
          g = Ps();
        return (
          (h || h === 0) && h !== n && u(h),
          a === o || g - o > d
            ? 0
            : ((n + (s ? v : -v)) / ((s ? g : a) - F)) * 1e3
        );
      };
    return { update: u, reset: c, getVelocity: p };
  },
  As = function (t, i) {
    return (
      i && !t._gsapAllow && t.preventDefault(),
      t.changedTouches ? t.changedTouches[0] : t
    );
  },
  ua = function (t) {
    var i = Math.max.apply(Math, t),
      s = Math.min.apply(Math, t);
    return Math.abs(i) >= Math.abs(s) ? i : s;
  },
  go = function () {
    ((Bs = Ze.core.globals().ScrollTrigger), Bs && Bs.core && ph());
  },
  mo = function (t) {
    return (
      (Ze = t || fo()),
      !fn &&
        Ze &&
        typeof document < "u" &&
        document.body &&
        ((Mt = window),
        (Mi = document),
        (ki = Mi.documentElement),
        (cs = Mi.body),
        (uo = [Mt, Mi, ki, cs]),
        Ze.utils.clamp,
        (po = Ze.core.context || function () {}),
        (Ui = "onpointerenter" in cs ? "pointer" : "mouse"),
        (co = Pe.isTouch =
          Mt.matchMedia &&
          Mt.matchMedia("(hover: none), (pointer: coarse)").matches
            ? 1
            : "ontouchstart" in Mt ||
                navigator.maxTouchPoints > 0 ||
                navigator.msMaxTouchPoints > 0
              ? 2
              : 0),
        (Yt = Pe.eventTypes =
          (
            "ontouchstart" in ki
              ? "touchstart,touchmove,touchcancel,touchend"
              : "onpointerdown" in ki
                ? "pointerdown,pointermove,pointercancel,pointerup"
                : "mousedown,mousemove,mouseup,mouseup"
          ).split(",")),
        setTimeout(function () {
          return (ho = 0);
        }, 500),
        go(),
        (fn = 1)),
      fn
    );
  };
ft.op = Ne;
se.cache = 0;
var Pe = (function () {
  function e(i) {
    this.init(i);
  }
  var t = e.prototype;
  return (
    (t.init = function (s) {
      (fn || mo(Ze) || console.warn("Please gsap.registerPlugin(Observer)"),
        Bs || go());
      var n = s.tolerance,
        r = s.dragMinimum,
        a = s.type,
        o = s.target,
        l = s.lineHeight,
        d = s.debounce,
        u = s.preventDefault,
        c = s.onStop,
        p = s.onStopDelay,
        f = s.ignore,
        h = s.wheelSpeed,
        F = s.event,
        v = s.onDragStart,
        g = s.onDragEnd,
        m = s.onDrag,
        x = s.onPress,
        w = s.onRelease,
        _ = s.onRight,
        T = s.onLeft,
        A = s.onUp,
        k = s.onDown,
        S = s.onChangeX,
        y = s.onChangeY,
        B = s.onChange,
        M = s.onToggleX,
        Q = s.onToggleY,
        K = s.onHover,
        oe = s.onHoverEnd,
        R = s.onMove,
        N = s.ignoreCheck,
        C = s.isNormalizer,
        ee = s.onGestureStart,
        b = s.onGestureEnd,
        Fe = s.onWheel,
        yt = s.onEnable,
        q = s.onDisable,
        U = s.onClick,
        pe = s.scrollSpeed,
        de = s.capture,
        ye = s.allowClicks,
        Ke = s.lockAxis,
        $e = s.onLockAxis;
      ((this.target = o = Ft(o) || ki),
        (this.vars = s),
        f && (f = Ze.utils.toArray(f)),
        (n = n || 1e-9),
        (r = r || 0),
        (h = h || 1),
        (pe = pe || 1),
        (a = a || "wheel,touch,pointer"),
        (d = d !== !1),
        l || (l = parseFloat(Mt.getComputedStyle(cs).lineHeight) || 22));
      var bi,
        ot,
        mt,
        ce,
        De,
        vt,
        At,
        D = this,
        Et = 0,
        oi = 0,
        yi = s.passive || (!u && s.passive !== !1),
        Ce = Li(o, ft),
        li = Li(o, Ne),
        Ai = Ce(),
        zi = li(),
        Ve =
          ~a.indexOf("touch") &&
          !~a.indexOf("pointer") &&
          Yt[0] === "pointerdown",
        Ei = Is(o),
        Me = o.ownerDocument || Mi,
        Nt = [0, 0, 0],
        Pt = [0, 0, 0],
        di = 0,
        Fs = function () {
          return (di = Ps());
        },
        Ie = function (Y, he) {
          return (
            ((D.event = Y) && f && fh(Y.target, f)) ||
            (he && Ve && Y.pointerType !== "touch") ||
            (N && N(Y, he))
          );
        },
        js = function () {
          (D._vx.reset(), D._vy.reset(), ot.pause(), c && c(D));
        },
        ci = function () {
          var Y = (D.deltaX = ua(Nt)),
            he = (D.deltaY = ua(Pt)),
            O = Math.abs(Y) >= n,
            W = Math.abs(he) >= n;
          (B && (O || W) && B(D, Y, he, Nt, Pt),
            O &&
              (_ && D.deltaX > 0 && _(D),
              T && D.deltaX < 0 && T(D),
              S && S(D),
              M && D.deltaX < 0 != Et < 0 && M(D),
              (Et = D.deltaX),
              (Nt[0] = Nt[1] = Nt[2] = 0)),
            W &&
              (k && D.deltaY > 0 && k(D),
              A && D.deltaY < 0 && A(D),
              y && y(D),
              Q && D.deltaY < 0 != oi < 0 && Q(D),
              (oi = D.deltaY),
              (Pt[0] = Pt[1] = Pt[2] = 0)),
            (ce || mt) &&
              (R && R(D),
              mt && (v && mt === 1 && v(D), m && m(D), (mt = 0)),
              (ce = !1)),
            vt && !(vt = !1) && $e && $e(D),
            De && (Fe(D), (De = !1)),
            (bi = 0));
        },
        es = function (Y, he, O) {
          ((Nt[O] += Y),
            (Pt[O] += he),
            D._vx.update(Y),
            D._vy.update(he),
            d ? bi || (bi = requestAnimationFrame(ci)) : ci());
        },
        ts = function (Y, he) {
          (Ke &&
            !At &&
            ((D.axis = At = Math.abs(Y) > Math.abs(he) ? "x" : "y"), (vt = !0)),
            At !== "y" && ((Nt[2] += Y), D._vx.update(Y, !0)),
            At !== "x" && ((Pt[2] += he), D._vy.update(he, !0)),
            d ? bi || (bi = requestAnimationFrame(ci)) : ci());
        },
        _i = function (Y) {
          if (!Ie(Y, 1)) {
            Y = As(Y, u);
            var he = Y.clientX,
              O = Y.clientY,
              W = he - D.x,
              V = O - D.y,
              X = D.isDragging;
            ((D.x = he),
              (D.y = O),
              (X ||
                ((W || V) &&
                  (Math.abs(D.startX - he) >= r ||
                    Math.abs(D.startY - O) >= r))) &&
                ((mt = X ? 2 : 1), X || (D.isDragging = !0), ts(W, V)));
          }
        },
        Ri = (D.onPress = function (J) {
          Ie(J, 1) ||
            (J && J.button) ||
            ((D.axis = At = null),
            ot.pause(),
            (D.isPressed = !0),
            (J = As(J)),
            (Et = oi = 0),
            (D.startX = D.x = J.clientX),
            (D.startY = D.y = J.clientY),
            D._vx.reset(),
            D._vy.reset(),
            dt(C ? o : Me, Yt[1], _i, yi, !0),
            (D.deltaX = D.deltaY = 0),
            x && x(D));
        }),
        ne = (D.onRelease = function (J) {
          if (!Ie(J, 1)) {
            lt(C ? o : Me, Yt[1], _i, !0);
            var Y = !isNaN(D.y - D.startY),
              he = D.isDragging,
              O =
                he &&
                (Math.abs(D.x - D.startX) > 3 || Math.abs(D.y - D.startY) > 3),
              W = As(J);
            (!O &&
              Y &&
              (D._vx.reset(),
              D._vy.reset(),
              u &&
                ye &&
                Ze.delayedCall(0.08, function () {
                  if (Ps() - di > 300 && !J.defaultPrevented) {
                    if (J.target.click) J.target.click();
                    else if (Me.createEvent) {
                      var V = Me.createEvent("MouseEvents");
                      (V.initMouseEvent(
                        "click",
                        !0,
                        !0,
                        Mt,
                        1,
                        W.screenX,
                        W.screenY,
                        W.clientX,
                        W.clientY,
                        !1,
                        !1,
                        !1,
                        !1,
                        0,
                        null,
                      ),
                        J.target.dispatchEvent(V));
                    }
                  }
                })),
              (D.isDragging = D.isGesturing = D.isPressed = !1),
              c && he && !C && ot.restart(!0),
              mt && ci(),
              g && he && g(D),
              w && w(D, O));
          }
        }),
        Hi = function (Y) {
          return (
            Y.touches &&
            Y.touches.length > 1 &&
            (D.isGesturing = !0) &&
            ee(Y, D.isDragging)
          );
        },
        Ut = function () {
          return (D.isGesturing = !1) || b(D);
        },
        Vt = function (Y) {
          if (!Ie(Y)) {
            var he = Ce(),
              O = li();
            (es((he - Ai) * pe, (O - zi) * pe, 1),
              (Ai = he),
              (zi = O),
              c && ot.restart(!0));
          }
        },
        jt = function (Y) {
          if (!Ie(Y)) {
            ((Y = As(Y, u)), Fe && (De = !0));
            var he =
              (Y.deltaMode === 1 ? l : Y.deltaMode === 2 ? Mt.innerHeight : 1) *
              h;
            (es(Y.deltaX * he, Y.deltaY * he, 0), c && !C && ot.restart(!0));
          }
        },
        Gi = function (Y) {
          if (!Ie(Y)) {
            var he = Y.clientX,
              O = Y.clientY,
              W = he - D.x,
              V = O - D.y;
            ((D.x = he),
              (D.y = O),
              (ce = !0),
              c && ot.restart(!0),
              (W || V) && ts(W, V));
          }
        },
        is = function (Y) {
          ((D.event = Y), K(D));
        },
        ui = function (Y) {
          ((D.event = Y), oe(D));
        },
        ws = function (Y) {
          return Ie(Y) || (As(Y, u) && U(D));
        };
      ((ot = D._dc = Ze.delayedCall(p || 0.25, js).pause()),
        (D.deltaX = D.deltaY = 0),
        (D._vx = fr(0, 50, !0)),
        (D._vy = fr(0, 50, !0)),
        (D.scrollX = Ce),
        (D.scrollY = li),
        (D.isDragging = D.isGesturing = D.isPressed = !1),
        po(this),
        (D.enable = function (J) {
          return (
            D.isEnabled ||
              (dt(Ei ? Me : o, "scroll", pr),
              a.indexOf("scroll") >= 0 && dt(Ei ? Me : o, "scroll", Vt, yi, de),
              a.indexOf("wheel") >= 0 && dt(o, "wheel", jt, yi, de),
              ((a.indexOf("touch") >= 0 && co) || a.indexOf("pointer") >= 0) &&
                (dt(o, Yt[0], Ri, yi, de),
                dt(Me, Yt[2], ne),
                dt(Me, Yt[3], ne),
                ye && dt(o, "click", Fs, !0, !0),
                U && dt(o, "click", ws),
                ee && dt(Me, "gesturestart", Hi),
                b && dt(Me, "gestureend", Ut),
                K && dt(o, Ui + "enter", is),
                oe && dt(o, Ui + "leave", ui),
                R && dt(o, Ui + "move", Gi)),
              (D.isEnabled = !0),
              (D.isDragging = D.isGesturing = D.isPressed = ce = mt = !1),
              D._vx.reset(),
              D._vy.reset(),
              (Ai = Ce()),
              (zi = li()),
              J && J.type && Ri(J),
              yt && yt(D)),
            D
          );
        }),
        (D.disable = function () {
          D.isEnabled &&
            (ls.filter(function (J) {
              return J !== D && Is(J.target);
            }).length || lt(Ei ? Me : o, "scroll", pr),
            D.isPressed &&
              (D._vx.reset(), D._vy.reset(), lt(C ? o : Me, Yt[1], _i, !0)),
            lt(Ei ? Me : o, "scroll", Vt, de),
            lt(o, "wheel", jt, de),
            lt(o, Yt[0], Ri, de),
            lt(Me, Yt[2], ne),
            lt(Me, Yt[3], ne),
            lt(o, "click", Fs, !0),
            lt(o, "click", ws),
            lt(Me, "gesturestart", Hi),
            lt(Me, "gestureend", Ut),
            lt(o, Ui + "enter", is),
            lt(o, Ui + "leave", ui),
            lt(o, Ui + "move", Gi),
            (D.isEnabled = D.isPressed = D.isDragging = !1),
            q && q(D));
        }),
        (D.kill = D.revert =
          function () {
            D.disable();
            var J = ls.indexOf(D);
            (J >= 0 && ls.splice(J, 1), xi === D && (xi = 0));
          }),
        ls.push(D),
        C && Is(o) && (xi = D),
        D.enable(F));
    }),
    uh(e, [
      {
        key: "velocityX",
        get: function () {
          return this._vx.getVelocity();
        },
      },
      {
        key: "velocityY",
        get: function () {
          return this._vy.getVelocity();
        },
      },
    ]),
    e
  );
})();
Pe.version = "3.13.0";
Pe.create = function (e) {
  return new Pe(e);
};
Pe.register = mo;
Pe.getAll = function () {
  return ls.slice();
};
Pe.getById = function (e) {
  return ls.filter(function (t) {
    return t.vars.id === e;
  })[0];
};
fo() && Ze.registerPlugin(Pe);
/*!
 * ScrollTrigger 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var H,
  as,
  ie,
  be,
  Dt,
  ge,
  Mr,
  En,
  Us,
  Ls,
  Cs,
  en,
  st,
  Bn,
  hr,
  ut,
  pa,
  fa,
  os,
  vo,
  Wn,
  xo,
  ct,
  gr,
  Fo,
  wo,
  Ti,
  mr,
  kr,
  us,
  Br,
  _n,
  vr,
  Xn,
  tn = 1,
  nt = Date.now,
  Kn = nt(),
  zt = 0,
  Ss = 0,
  ha = function (t, i, s) {
    var n = St(t) && (t.substr(0, 6) === "clamp(" || t.indexOf("max") > -1);
    return ((s["_" + i + "Clamp"] = n), n ? t.substr(6, t.length - 7) : t);
  },
  ga = function (t, i) {
    return i && (!St(t) || t.substr(0, 6) !== "clamp(")
      ? "clamp(" + t + ")"
      : t;
  },
  hh = function e() {
    return Ss && requestAnimationFrame(e);
  },
  ma = function () {
    return (Bn = 1);
  },
  va = function () {
    return (Bn = 0);
  },
  Zt = function (t) {
    return t;
  },
  Ts = function (t) {
    return Math.round(t * 1e5) / 1e5 || 0;
  },
  bo = function () {
    return typeof window < "u";
  },
  yo = function () {
    return H || (bo() && (H = window.gsap) && H.registerPlugin && H);
  },
  qi = function (t) {
    return !!~Mr.indexOf(t);
  },
  Ao = function (t) {
    return (
      (t === "Height" ? Br : ie["inner" + t]) ||
      Dt["client" + t] ||
      ge["client" + t]
    );
  },
  Eo = function (t) {
    return (
      Bi(t, "getBoundingClientRect") ||
      (qi(t)
        ? function () {
            return ((xn.width = ie.innerWidth), (xn.height = Br), xn);
          }
        : function () {
            return vi(t);
          })
    );
  },
  gh = function (t, i, s) {
    var n = s.d,
      r = s.d2,
      a = s.a;
    return (a = Bi(t, "getBoundingClientRect"))
      ? function () {
          return a()[n];
        }
      : function () {
          return (i ? Ao(r) : t["client" + r]) || 0;
        };
  },
  mh = function (t, i) {
    return !i || ~si.indexOf(t)
      ? Eo(t)
      : function () {
          return xn;
        };
  },
  ei = function (t, i) {
    var s = i.s,
      n = i.d2,
      r = i.d,
      a = i.a;
    return Math.max(
      0,
      (s = "scroll" + n) && (a = Bi(t, s))
        ? a() - Eo(t)()[r]
        : qi(t)
          ? (Dt[s] || ge[s]) - Ao(n)
          : t[s] - t["offset" + n],
    );
  },
  sn = function (t, i) {
    for (var s = 0; s < os.length; s += 3)
      (!i || ~i.indexOf(os[s + 1])) && t(os[s], os[s + 1], os[s + 2]);
  },
  St = function (t) {
    return typeof t == "string";
  },
  rt = function (t) {
    return typeof t == "function";
  },
  Ds = function (t) {
    return typeof t == "number";
  },
  Vi = function (t) {
    return typeof t == "object";
  },
  Es = function (t, i, s) {
    return t && t.progress(i ? 0 : 1) && s && t.pause();
  },
  qn = function (t, i) {
    if (t.enabled) {
      var s = t._ctx
        ? t._ctx.add(function () {
            return i(t);
          })
        : i(t);
      s && s.totalTime && (t.callbackAnimation = s);
    }
  },
  ss = Math.abs,
  _o = "left",
  Co = "top",
  Pr = "right",
  Ir = "bottom",
  Yi = "width",
  Wi = "height",
  Os = "Right",
  zs = "Left",
  Rs = "Top",
  Hs = "Bottom",
  Oe = "padding",
  Lt = "margin",
  ms = "Width",
  Lr = "Height",
  Ge = "px",
  Ot = function (t) {
    return ie.getComputedStyle(t);
  },
  vh = function (t) {
    var i = Ot(t).position;
    t.style.position = i === "absolute" || i === "fixed" ? i : "relative";
  },
  xa = function (t, i) {
    for (var s in i) s in t || (t[s] = i[s]);
    return t;
  },
  vi = function (t, i) {
    var s =
        i &&
        Ot(t)[hr] !== "matrix(1, 0, 0, 1, 0, 0)" &&
        H.to(t, {
          x: 0,
          y: 0,
          xPercent: 0,
          yPercent: 0,
          rotation: 0,
          rotationX: 0,
          rotationY: 0,
          scale: 1,
          skewX: 0,
          skewY: 0,
        }).progress(1),
      n = t.getBoundingClientRect();
    return (s && s.progress(0).kill(), n);
  },
  Cn = function (t, i) {
    var s = i.d2;
    return t["offset" + s] || t["client" + s] || 0;
  },
  So = function (t) {
    var i = [],
      s = t.labels,
      n = t.duration(),
      r;
    for (r in s) i.push(s[r] / n);
    return i;
  },
  xh = function (t) {
    return function (i) {
      return H.utils.snap(So(t), i);
    };
  },
  Or = function (t) {
    var i = H.utils.snap(t),
      s =
        Array.isArray(t) &&
        t.slice(0).sort(function (n, r) {
          return n - r;
        });
    return s
      ? function (n, r, a) {
          a === void 0 && (a = 0.001);
          var o;
          if (!r) return i(n);
          if (r > 0) {
            for (n -= a, o = 0; o < s.length; o++) if (s[o] >= n) return s[o];
            return s[o - 1];
          } else for (o = s.length, n += a; o--;) if (s[o] <= n) return s[o];
          return s[0];
        }
      : function (n, r, a) {
          a === void 0 && (a = 0.001);
          var o = i(n);
          return !r || Math.abs(o - n) < a || o - n < 0 == r < 0
            ? o
            : i(r < 0 ? n - t : n + t);
        };
  },
  Fh = function (t) {
    return function (i, s) {
      return Or(So(t))(i, s.direction);
    };
  },
  nn = function (t, i, s, n) {
    return s.split(",").forEach(function (r) {
      return t(i, r, n);
    });
  },
  We = function (t, i, s, n, r) {
    return t.addEventListener(i, s, { passive: !n, capture: !!r });
  },
  Ye = function (t, i, s, n) {
    return t.removeEventListener(i, s, !!n);
  },
  rn = function (t, i, s) {
    ((s = s && s.wheelHandler), s && (t(i, "wheel", s), t(i, "touchmove", s)));
  },
  Fa = {
    startColor: "green",
    endColor: "red",
    indent: 0,
    fontSize: "16px",
    fontWeight: "normal",
  },
  an = { toggleActions: "play", anticipatePin: 0 },
  Sn = { top: 0, left: 0, center: 0.5, bottom: 1, right: 1 },
  hn = function (t, i) {
    if (St(t)) {
      var s = t.indexOf("="),
        n = ~s ? +(t.charAt(s - 1) + 1) * parseFloat(t.substr(s + 1)) : 0;
      (~s && (t.indexOf("%") > s && (n *= i / 100), (t = t.substr(0, s - 1))),
        (t =
          n +
          (t in Sn
            ? Sn[t] * i
            : ~t.indexOf("%")
              ? (parseFloat(t) * i) / 100
              : parseFloat(t) || 0)));
    }
    return t;
  },
  on = function (t, i, s, n, r, a, o, l) {
    var d = r.startColor,
      u = r.endColor,
      c = r.fontSize,
      p = r.indent,
      f = r.fontWeight,
      h = be.createElement("div"),
      F = qi(s) || Bi(s, "pinType") === "fixed",
      v = t.indexOf("scroller") !== -1,
      g = F ? ge : s,
      m = t.indexOf("start") !== -1,
      x = m ? d : u,
      w =
        "border-color:" +
        x +
        ";font-size:" +
        c +
        ";color:" +
        x +
        ";font-weight:" +
        f +
        ";pointer-events:none;white-space:nowrap;font-family:sans-serif,Arial;z-index:1000;padding:4px 8px;border-width:0;border-style:solid;";
    return (
      (w += "position:" + ((v || l) && F ? "fixed;" : "absolute;")),
      (v || l || !F) &&
        (w += (n === Ne ? Pr : Ir) + ":" + (a + parseFloat(p)) + "px;"),
      o &&
        (w +=
          "box-sizing:border-box;text-align:left;width:" +
          o.offsetWidth +
          "px;"),
      (h._isStart = m),
      h.setAttribute("class", "gsap-marker-" + t + (i ? " marker-" + i : "")),
      (h.style.cssText = w),
      (h.innerText = i || i === 0 ? t + "-" + i : t),
      g.children[0] ? g.insertBefore(h, g.children[0]) : g.appendChild(h),
      (h._offset = h["offset" + n.op.d2]),
      gn(h, 0, n, m),
      h
    );
  },
  gn = function (t, i, s, n) {
    var r = { display: "block" },
      a = s[n ? "os2" : "p2"],
      o = s[n ? "p2" : "os2"];
    ((t._isFlipped = n),
      (r[s.a + "Percent"] = n ? -100 : 0),
      (r[s.a] = n ? "1px" : 0),
      (r["border" + a + ms] = 1),
      (r["border" + o + ms] = 0),
      (r[s.p] = i + "px"),
      H.set(t, r));
  },
  te = [],
  xr = {},
  Vs,
  wa = function () {
    return nt() - zt > 34 && (Vs || (Vs = requestAnimationFrame(Fi)));
  },
  ns = function () {
    (!ct || !ct.isPressed || ct.startX > ge.clientWidth) &&
      (se.cache++,
      ct ? Vs || (Vs = requestAnimationFrame(Fi)) : Fi(),
      zt || Zi("scrollStart"),
      (zt = nt()));
  },
  Jn = function () {
    ((wo = ie.innerWidth), (Fo = ie.innerHeight));
  },
  Ms = function (t) {
    (se.cache++,
      (t === !0 ||
        (!st &&
          !xo &&
          !be.fullscreenElement &&
          !be.webkitFullscreenElement &&
          (!gr ||
            wo !== ie.innerWidth ||
            Math.abs(ie.innerHeight - Fo) > ie.innerHeight * 0.25))) &&
        En.restart(!0));
  },
  Ji = {},
  wh = [],
  To = function e() {
    return Ye(re, "scrollEnd", e) || Qi(!0);
  },
  Zi = function (t) {
    return (
      (Ji[t] &&
        Ji[t].map(function (i) {
          return i();
        })) ||
      wh
    );
  },
  Ct = [],
  Do = function (t) {
    for (var i = 0; i < Ct.length; i += 5)
      (!t || (Ct[i + 4] && Ct[i + 4].query === t)) &&
        ((Ct[i].style.cssText = Ct[i + 1]),
        Ct[i].getBBox && Ct[i].setAttribute("transform", Ct[i + 2] || ""),
        (Ct[i + 3].uncache = 1));
  },
  zr = function (t, i) {
    var s;
    for (ut = 0; ut < te.length; ut++)
      ((s = te[ut]),
        s && (!i || s._ctx === i) && (t ? s.kill(1) : s.revert(!0, !0)));
    ((_n = !0), i && Do(i), i || Zi("revert"));
  },
  Mo = function (t, i) {
    (se.cache++,
      (i || !pt) &&
        se.forEach(function (s) {
          return rt(s) && s.cacheID++ && (s.rec = 0);
        }),
      St(t) && (ie.history.scrollRestoration = kr = t));
  },
  pt,
  Xi = 0,
  ba,
  bh = function () {
    if (ba !== Xi) {
      var t = (ba = Xi);
      requestAnimationFrame(function () {
        return t === Xi && Qi(!0);
      });
    }
  },
  ko = function () {
    (ge.appendChild(us),
      (Br = (!ct && us.offsetHeight) || ie.innerHeight),
      ge.removeChild(us));
  },
  ya = function (t) {
    return Us(
      ".gsap-marker-start, .gsap-marker-end, .gsap-marker-scroller-start, .gsap-marker-scroller-end",
    ).forEach(function (i) {
      return (i.style.display = t ? "none" : "block");
    });
  },
  Qi = function (t, i) {
    if (
      ((Dt = be.documentElement),
      (ge = be.body),
      (Mr = [ie, be, Dt, ge]),
      zt && !t && !_n)
    ) {
      We(re, "scrollEnd", To);
      return;
    }
    (ko(),
      (pt = re.isRefreshing = !0),
      se.forEach(function (n) {
        return rt(n) && ++n.cacheID && (n.rec = n());
      }));
    var s = Zi("refreshInit");
    (vo && re.sort(),
      i || zr(),
      se.forEach(function (n) {
        rt(n) && (n.smooth && (n.target.style.scrollBehavior = "auto"), n(0));
      }),
      te.slice(0).forEach(function (n) {
        return n.refresh();
      }),
      (_n = !1),
      te.forEach(function (n) {
        if (n._subPinOffset && n.pin) {
          var r = n.vars.horizontal ? "offsetWidth" : "offsetHeight",
            a = n.pin[r];
          (n.revert(!0, 1), n.adjustPinSpacing(n.pin[r] - a), n.refresh());
        }
      }),
      (vr = 1),
      ya(!0),
      te.forEach(function (n) {
        var r = ei(n.scroller, n._dir),
          a = n.vars.end === "max" || (n._endClamp && n.end > r),
          o = n._startClamp && n.start >= r;
        (a || o) &&
          n.setPositions(
            o ? r - 1 : n.start,
            a ? Math.max(o ? r : n.start + 1, r) : n.end,
            !0,
          );
      }),
      ya(!1),
      (vr = 0),
      s.forEach(function (n) {
        return n && n.render && n.render(-1);
      }),
      se.forEach(function (n) {
        rt(n) &&
          (n.smooth &&
            requestAnimationFrame(function () {
              return (n.target.style.scrollBehavior = "smooth");
            }),
          n.rec && n(n.rec));
      }),
      Mo(kr, 1),
      En.pause(),
      Xi++,
      (pt = 2),
      Fi(2),
      te.forEach(function (n) {
        return rt(n.vars.onRefresh) && n.vars.onRefresh(n);
      }),
      (pt = re.isRefreshing = !1),
      Zi("refresh"));
  },
  Fr = 0,
  mn = 1,
  Gs,
  Fi = function (t) {
    if (t === 2 || (!pt && !_n)) {
      ((re.isUpdating = !0), Gs && Gs.update(0));
      var i = te.length,
        s = nt(),
        n = s - Kn >= 50,
        r = i && te[0].scroll();
      if (
        ((mn = Fr > r ? -1 : 1),
        pt || (Fr = r),
        n &&
          (zt && !Bn && s - zt > 200 && ((zt = 0), Zi("scrollEnd")),
          (Cs = Kn),
          (Kn = s)),
        mn < 0)
      ) {
        for (ut = i; ut-- > 0;) te[ut] && te[ut].update(0, n);
        mn = 1;
      } else for (ut = 0; ut < i; ut++) te[ut] && te[ut].update(0, n);
      re.isUpdating = !1;
    }
    Vs = 0;
  },
  wr = [
    _o,
    Co,
    Ir,
    Pr,
    Lt + Hs,
    Lt + Os,
    Lt + Rs,
    Lt + zs,
    "display",
    "flexShrink",
    "float",
    "zIndex",
    "gridColumnStart",
    "gridColumnEnd",
    "gridRowStart",
    "gridRowEnd",
    "gridArea",
    "justifySelf",
    "alignSelf",
    "placeSelf",
    "order",
  ],
  vn = wr.concat([
    Yi,
    Wi,
    "boxSizing",
    "max" + ms,
    "max" + Lr,
    "position",
    Lt,
    Oe,
    Oe + Rs,
    Oe + Os,
    Oe + Hs,
    Oe + zs,
  ]),
  yh = function (t, i, s) {
    ps(s);
    var n = t._gsap;
    if (n.spacerIsNative) ps(n.spacerState);
    else if (t._gsap.swappedIn) {
      var r = i.parentNode;
      r && (r.insertBefore(t, i), r.removeChild(i));
    }
    t._gsap.swappedIn = !1;
  },
  Zn = function (t, i, s, n) {
    if (!t._gsap.swappedIn) {
      for (var r = wr.length, a = i.style, o = t.style, l; r--;)
        ((l = wr[r]), (a[l] = s[l]));
      ((a.position = s.position === "absolute" ? "absolute" : "relative"),
        s.display === "inline" && (a.display = "inline-block"),
        (o[Ir] = o[Pr] = "auto"),
        (a.flexBasis = s.flexBasis || "auto"),
        (a.overflow = "visible"),
        (a.boxSizing = "border-box"),
        (a[Yi] = Cn(t, ft) + Ge),
        (a[Wi] = Cn(t, Ne) + Ge),
        (a[Oe] = o[Lt] = o[Co] = o[_o] = "0"),
        ps(n),
        (o[Yi] = o["max" + ms] = s[Yi]),
        (o[Wi] = o["max" + Lr] = s[Wi]),
        (o[Oe] = s[Oe]),
        t.parentNode !== i &&
          (t.parentNode.insertBefore(i, t), i.appendChild(t)),
        (t._gsap.swappedIn = !0));
    }
  },
  Ah = /([A-Z])/g,
  ps = function (t) {
    if (t) {
      var i = t.t.style,
        s = t.length,
        n = 0,
        r,
        a;
      for ((t.t._gsap || H.core.getCache(t.t)).uncache = 1; n < s; n += 2)
        ((a = t[n + 1]),
          (r = t[n]),
          a
            ? (i[r] = a)
            : i[r] && i.removeProperty(r.replace(Ah, "-$1").toLowerCase()));
    }
  },
  ln = function (t) {
    for (var i = vn.length, s = t.style, n = [], r = 0; r < i; r++)
      n.push(vn[r], s[vn[r]]);
    return ((n.t = t), n);
  },
  Eh = function (t, i, s) {
    for (var n = [], r = t.length, a = s ? 8 : 0, o; a < r; a += 2)
      ((o = t[a]), n.push(o, o in i ? i[o] : t[a + 1]));
    return ((n.t = t.t), n);
  },
  xn = { left: 0, top: 0 },
  Aa = function (t, i, s, n, r, a, o, l, d, u, c, p, f, h) {
    (rt(t) && (t = t(l)),
      St(t) &&
        t.substr(0, 3) === "max" &&
        (t = p + (t.charAt(4) === "=" ? hn("0" + t.substr(3), s) : 0)));
    var F = f ? f.time() : 0,
      v,
      g,
      m;
    if ((f && f.seek(0), isNaN(t) || (t = +t), Ds(t)))
      (f &&
        (t = H.utils.mapRange(
          f.scrollTrigger.start,
          f.scrollTrigger.end,
          0,
          p,
          t,
        )),
        o && gn(o, s, n, !0));
    else {
      rt(i) && (i = i(l));
      var x = (t || "0").split(" "),
        w,
        _,
        T,
        A;
      ((m = Ft(i, l) || ge),
        (w = vi(m) || {}),
        (!w || (!w.left && !w.top)) &&
          Ot(m).display === "none" &&
          ((A = m.style.display),
          (m.style.display = "block"),
          (w = vi(m)),
          A ? (m.style.display = A) : m.style.removeProperty("display")),
        (_ = hn(x[0], w[n.d])),
        (T = hn(x[1] || "0", s)),
        (t = w[n.p] - d[n.p] - u + _ + r - T),
        o && gn(o, T, n, s - T < 20 || (o._isStart && T > 20)),
        (s -= s - T));
    }
    if ((h && ((l[h] = t || -0.001), t < 0 && (t = 0)), a)) {
      var k = t + s,
        S = a._isStart;
      ((v = "scroll" + n.d2),
        gn(
          a,
          k,
          n,
          (S && k > 20) ||
            (!S && (c ? Math.max(ge[v], Dt[v]) : a.parentNode[v]) <= k + 1),
        ),
        c &&
          ((d = vi(o)),
          c && (a.style[n.op.p] = d[n.op.p] - n.op.m - a._offset + Ge)));
    }
    return (
      f &&
        m &&
        ((v = vi(m)),
        f.seek(p),
        (g = vi(m)),
        (f._caScrollDist = v[n.p] - g[n.p]),
        (t = (t / f._caScrollDist) * p)),
      f && f.seek(F),
      f ? t : Math.round(t)
    );
  },
  _h = /(webkit|moz|length|cssText|inset)/i,
  Ea = function (t, i, s, n) {
    if (t.parentNode !== i) {
      var r = t.style,
        a,
        o;
      if (i === ge) {
        ((t._stOrig = r.cssText), (o = Ot(t)));
        for (a in o)
          !+a &&
            !_h.test(a) &&
            o[a] &&
            typeof r[a] == "string" &&
            a !== "0" &&
            (r[a] = o[a]);
        ((r.top = s), (r.left = n));
      } else r.cssText = t._stOrig;
      ((H.core.getCache(t).uncache = 1), i.appendChild(t));
    }
  },
  Bo = function (t, i, s) {
    var n = i,
      r = n;
    return function (a) {
      var o = Math.round(t());
      return (
        o !== n &&
          o !== r &&
          Math.abs(o - n) > 3 &&
          Math.abs(o - r) > 3 &&
          ((a = o), s && s()),
        (r = n),
        (n = Math.round(a)),
        n
      );
    };
  },
  dn = function (t, i, s) {
    var n = {};
    ((n[i.p] = "+=" + s), H.set(t, n));
  },
  _a = function (t, i) {
    var s = Li(t, i),
      n = "_scroll" + i.p2,
      r = function a(o, l, d, u, c) {
        var p = a.tween,
          f = l.onComplete,
          h = {};
        d = d || s();
        var F = Bo(s, d, function () {
          (p.kill(), (a.tween = 0));
        });
        return (
          (c = (u && c) || 0),
          (u = u || o - d),
          p && p.kill(),
          (l[n] = o),
          (l.inherit = !1),
          (l.modifiers = h),
          (h[n] = function () {
            return F(d + u * p.ratio + c * p.ratio * p.ratio);
          }),
          (l.onUpdate = function () {
            (se.cache++, a.tween && Fi());
          }),
          (l.onComplete = function () {
            ((a.tween = 0), f && f.call(p));
          }),
          (p = a.tween = H.to(t, l)),
          p
        );
      };
    return (
      (t[n] = s),
      (s.wheelHandler = function () {
        return r.tween && r.tween.kill() && (r.tween = 0);
      }),
      We(t, "wheel", s.wheelHandler),
      re.isTouch && We(t, "touchmove", s.wheelHandler),
      r
    );
  },
  re = (function () {
    function e(i, s) {
      (as ||
        e.register(H) ||
        console.warn("Please gsap.registerPlugin(ScrollTrigger)"),
        mr(this),
        this.init(i, s));
    }
    var t = e.prototype;
    return (
      (t.init = function (s, n) {
        if (
          ((this.progress = this.start = 0),
          this.vars && this.kill(!0, !0),
          !Ss)
        ) {
          this.update = this.refresh = this.kill = Zt;
          return;
        }
        s = xa(St(s) || Ds(s) || s.nodeType ? { trigger: s } : s, an);
        var r = s,
          a = r.onUpdate,
          o = r.toggleClass,
          l = r.id,
          d = r.onToggle,
          u = r.onRefresh,
          c = r.scrub,
          p = r.trigger,
          f = r.pin,
          h = r.pinSpacing,
          F = r.invalidateOnRefresh,
          v = r.anticipatePin,
          g = r.onScrubComplete,
          m = r.onSnapComplete,
          x = r.once,
          w = r.snap,
          _ = r.pinReparent,
          T = r.pinSpacer,
          A = r.containerAnimation,
          k = r.fastScrollEnd,
          S = r.preventOverlaps,
          y =
            s.horizontal || (s.containerAnimation && s.horizontal !== !1)
              ? ft
              : Ne,
          B = !c && c !== 0,
          M = Ft(s.scroller || ie),
          Q = H.core.getCache(M),
          K = qi(M),
          oe =
            ("pinType" in s
              ? s.pinType
              : Bi(M, "pinType") || (K && "fixed")) === "fixed",
          R = [s.onEnter, s.onLeave, s.onEnterBack, s.onLeaveBack],
          N = B && s.toggleActions.split(" "),
          C = "markers" in s ? s.markers : an.markers,
          ee = K ? 0 : parseFloat(Ot(M)["border" + y.p2 + ms]) || 0,
          b = this,
          Fe =
            s.onRefreshInit &&
            function () {
              return s.onRefreshInit(b);
            },
          yt = gh(M, K, y),
          q = mh(M, K),
          U = 0,
          pe = 0,
          de = 0,
          ye = Li(M, y),
          Ke,
          $e,
          bi,
          ot,
          mt,
          ce,
          De,
          vt,
          At,
          D,
          Et,
          oi,
          yi,
          Ce,
          li,
          Ai,
          zi,
          Ve,
          Ei,
          Me,
          Nt,
          Pt,
          di,
          Fs,
          Ie,
          js,
          ci,
          es,
          ts,
          _i,
          Ri,
          ne,
          Hi,
          Ut,
          Vt,
          jt,
          Gi,
          is,
          ui;
        if (
          ((b._startClamp = b._endClamp = !1),
          (b._dir = y),
          (v *= 45),
          (b.scroller = M),
          (b.scroll = A ? A.time.bind(A) : ye),
          (ot = ye()),
          (b.vars = s),
          (n = n || s.animation),
          "refreshPriority" in s &&
            ((vo = 1), s.refreshPriority === -9999 && (Gs = b)),
          (Q.tweenScroll = Q.tweenScroll || {
            top: _a(M, Ne),
            left: _a(M, ft),
          }),
          (b.tweenTo = Ke = Q.tweenScroll[y.p]),
          (b.scrubDuration = function (O) {
            ((Hi = Ds(O) && O),
              Hi
                ? ne
                  ? ne.duration(O)
                  : (ne = H.to(n, {
                      ease: "expo",
                      totalProgress: "+=0",
                      inherit: !1,
                      duration: Hi,
                      paused: !0,
                      onComplete: function () {
                        return g && g(b);
                      },
                    }))
                : (ne && ne.progress(1).kill(), (ne = 0)));
          }),
          n &&
            ((n.vars.lazy = !1),
            (n._initted && !b.isReverted) ||
              (n.vars.immediateRender !== !1 &&
                s.immediateRender !== !1 &&
                n.duration() &&
                n.render(0, !0, !0)),
            (b.animation = n.pause()),
            (n.scrollTrigger = b),
            b.scrubDuration(c),
            (_i = 0),
            l || (l = n.vars.id)),
          w &&
            ((!Vi(w) || w.push) && (w = { snapTo: w }),
            "scrollBehavior" in ge.style &&
              H.set(K ? [ge, Dt] : M, { scrollBehavior: "auto" }),
            se.forEach(function (O) {
              return (
                rt(O) &&
                O.target === (K ? be.scrollingElement || Dt : M) &&
                (O.smooth = !1)
              );
            }),
            (bi = rt(w.snapTo)
              ? w.snapTo
              : w.snapTo === "labels"
                ? xh(n)
                : w.snapTo === "labelsDirectional"
                  ? Fh(n)
                  : w.directional !== !1
                    ? function (O, W) {
                        return Or(w.snapTo)(
                          O,
                          nt() - pe < 500 ? 0 : W.direction,
                        );
                      }
                    : H.utils.snap(w.snapTo)),
            (Ut = w.duration || { min: 0.1, max: 2 }),
            (Ut = Vi(Ut) ? Ls(Ut.min, Ut.max) : Ls(Ut, Ut)),
            (Vt = H.delayedCall(w.delay || Hi / 2 || 0.1, function () {
              var O = ye(),
                W = nt() - pe < 500,
                V = Ke.tween;
              if (
                (W || Math.abs(b.getVelocity()) < 10) &&
                !V &&
                !Bn &&
                U !== O
              ) {
                var X = (O - ce) / Ce,
                  je = n && !B ? n.totalProgress() : X,
                  le = W ? 0 : ((je - Ri) / (nt() - Cs)) * 1e3 || 0,
                  ke = H.utils.clamp(-X, 1 - X, (ss(le / 2) * le) / 0.185),
                  et = X + (w.inertia === !1 ? 0 : ke),
                  Se,
                  Ae,
                  we = w,
                  Qt = we.onStart,
                  Ee = we.onInterrupt,
                  _t = we.onComplete;
                if (
                  ((Se = bi(et, b)),
                  Ds(Se) || (Se = et),
                  (Ae = Math.max(0, Math.round(ce + Se * Ce))),
                  O <= De && O >= ce && Ae !== O)
                ) {
                  if (V && !V._initted && V.data <= ss(Ae - O)) return;
                  (w.inertia === !1 && (ke = Se - X),
                    Ke(
                      Ae,
                      {
                        duration: Ut(
                          ss(
                            (Math.max(ss(et - je), ss(Se - je)) * 0.185) /
                              le /
                              0.05 || 0,
                          ),
                        ),
                        ease: w.ease || "power3",
                        data: ss(Ae - O),
                        onInterrupt: function () {
                          return Vt.restart(!0) && Ee && Ee(b);
                        },
                        onComplete: function () {
                          (b.update(),
                            (U = ye()),
                            n &&
                              !B &&
                              (ne
                                ? ne.resetTo(
                                    "totalProgress",
                                    Se,
                                    n._tTime / n._tDur,
                                  )
                                : n.progress(Se)),
                            (_i = Ri =
                              n && !B ? n.totalProgress() : b.progress),
                            m && m(b),
                            _t && _t(b));
                        },
                      },
                      O,
                      ke * Ce,
                      Ae - O - ke * Ce,
                    ),
                    Qt && Qt(b, Ke.tween));
                }
              } else b.isActive && U !== O && Vt.restart(!0);
            }).pause())),
          l && (xr[l] = b),
          (p = b.trigger = Ft(p || (f !== !0 && f))),
          (ui = p && p._gsap && p._gsap.stRevert),
          ui && (ui = ui(b)),
          (f = f === !0 ? p : Ft(f)),
          St(o) && (o = { targets: p, className: o }),
          f &&
            (h === !1 ||
              h === Lt ||
              (h =
                !h &&
                f.parentNode &&
                f.parentNode.style &&
                Ot(f.parentNode).display === "flex"
                  ? !1
                  : Oe),
            (b.pin = f),
            ($e = H.core.getCache(f)),
            $e.spacer
              ? (li = $e.pinState)
              : (T &&
                  ((T = Ft(T)),
                  T && !T.nodeType && (T = T.current || T.nativeElement),
                  ($e.spacerIsNative = !!T),
                  T && ($e.spacerState = ln(T))),
                ($e.spacer = Ve = T || be.createElement("div")),
                Ve.classList.add("pin-spacer"),
                l && Ve.classList.add("pin-spacer-" + l),
                ($e.pinState = li = ln(f))),
            s.force3D !== !1 && H.set(f, { force3D: !0 }),
            (b.spacer = Ve = $e.spacer),
            (ts = Ot(f)),
            (Fs = ts[h + y.os2]),
            (Me = H.getProperty(f)),
            (Nt = H.quickSetter(f, y.a, Ge)),
            Zn(f, Ve, ts),
            (zi = ln(f))),
          C)
        ) {
          ((oi = Vi(C) ? xa(C, Fa) : Fa),
            (D = on("scroller-start", l, M, y, oi, 0)),
            (Et = on("scroller-end", l, M, y, oi, 0, D)),
            (Ei = D["offset" + y.op.d2]));
          var ws = Ft(Bi(M, "content") || M);
          ((vt = this.markerStart = on("start", l, ws, y, oi, Ei, 0, A)),
            (At = this.markerEnd = on("end", l, ws, y, oi, Ei, 0, A)),
            A && (is = H.quickSetter([vt, At], y.a, Ge)),
            !oe &&
              !(si.length && Bi(M, "fixedMarkers") === !0) &&
              (vh(K ? ge : M),
              H.set([D, Et], { force3D: !0 }),
              (js = H.quickSetter(D, y.a, Ge)),
              (es = H.quickSetter(Et, y.a, Ge))));
        }
        if (A) {
          var J = A.vars.onUpdate,
            Y = A.vars.onUpdateParams;
          A.eventCallback("onUpdate", function () {
            (b.update(0, 0, 1), J && J.apply(A, Y || []));
          });
        }
        if (
          ((b.previous = function () {
            return te[te.indexOf(b) - 1];
          }),
          (b.next = function () {
            return te[te.indexOf(b) + 1];
          }),
          (b.revert = function (O, W) {
            if (!W) return b.kill(!0);
            var V = O !== !1 || !b.enabled,
              X = st;
            V !== b.isReverted &&
              (V &&
                ((jt = Math.max(ye(), b.scroll.rec || 0)),
                (de = b.progress),
                (Gi = n && n.progress())),
              vt &&
                [vt, At, D, Et].forEach(function (je) {
                  return (je.style.display = V ? "none" : "block");
                }),
              V && ((st = b), b.update(V)),
              f &&
                (!_ || !b.isActive) &&
                (V ? yh(f, Ve, li) : Zn(f, Ve, Ot(f), Ie)),
              V || b.update(V),
              (st = X),
              (b.isReverted = V));
          }),
          (b.refresh = function (O, W, V, X) {
            if (!((st || !b.enabled) && !W)) {
              if (f && O && zt) {
                We(e, "scrollEnd", To);
                return;
              }
              (!pt && Fe && Fe(b),
                (st = b),
                Ke.tween && !V && (Ke.tween.kill(), (Ke.tween = 0)),
                ne && ne.pause(),
                F &&
                  n &&
                  (n.revert({ kill: !1 }).invalidate(),
                  n.getChildren &&
                    n.getChildren(!0, !0, !1).forEach(function (Ci) {
                      return Ci.vars.immediateRender && Ci.render(0, !0, !0);
                    })),
                b.isReverted || b.revert(!0, !0),
                (b._subPinOffset = !1));
              var je = yt(),
                le = q(),
                ke = A ? A.duration() : ei(M, y),
                et = Ce <= 0.01 || !Ce,
                Se = 0,
                Ae = X || 0,
                we = Vi(V) ? V.end : s.end,
                Qt = s.endTrigger || p,
                Ee = Vi(V)
                  ? V.start
                  : s.start || (s.start === 0 || !p ? 0 : f ? "0 0" : "0 100%"),
                _t = (b.pinnedContainer =
                  s.pinnedContainer && Ft(s.pinnedContainer, b)),
                Kt = (p && Math.max(0, te.indexOf(b))) || 0,
                qe = Kt,
                Je,
                tt,
                Ni,
                Qs,
                it,
                He,
                qt,
                Pn,
                Rr,
                bs,
                Jt,
                ys,
                Ys;
              for (
                C &&
                Vi(V) &&
                ((ys = H.getProperty(D, y.p)), (Ys = H.getProperty(Et, y.p)));
                qe-- > 0;
              )
                ((He = te[qe]),
                  He.end || He.refresh(0, 1) || (st = b),
                  (qt = He.pin),
                  qt &&
                    (qt === p || qt === f || qt === _t) &&
                    !He.isReverted &&
                    (bs || (bs = []), bs.unshift(He), He.revert(!0, !0)),
                  He !== te[qe] && (Kt--, qe--));
              for (
                rt(Ee) && (Ee = Ee(b)),
                  Ee = ha(Ee, "start", b),
                  ce =
                    Aa(
                      Ee,
                      p,
                      je,
                      y,
                      ye(),
                      vt,
                      D,
                      b,
                      le,
                      ee,
                      oe,
                      ke,
                      A,
                      b._startClamp && "_startClamp",
                    ) || (f ? -0.001 : 0),
                  rt(we) && (we = we(b)),
                  St(we) &&
                    !we.indexOf("+=") &&
                    (~we.indexOf(" ")
                      ? (we = (St(Ee) ? Ee.split(" ")[0] : "") + we)
                      : ((Se = hn(we.substr(2), je)),
                        (we = St(Ee)
                          ? Ee
                          : (A
                              ? H.utils.mapRange(
                                  0,
                                  A.duration(),
                                  A.scrollTrigger.start,
                                  A.scrollTrigger.end,
                                  ce,
                                )
                              : ce) + Se),
                        (Qt = p))),
                  we = ha(we, "end", b),
                  De =
                    Math.max(
                      ce,
                      Aa(
                        we || (Qt ? "100% 0" : ke),
                        Qt,
                        je,
                        y,
                        ye() + Se,
                        At,
                        Et,
                        b,
                        le,
                        ee,
                        oe,
                        ke,
                        A,
                        b._endClamp && "_endClamp",
                      ),
                    ) || -0.001,
                  Se = 0,
                  qe = Kt;
                qe--;
              )
                ((He = te[qe]),
                  (qt = He.pin),
                  qt &&
                    He.start - He._pinPush <= ce &&
                    !A &&
                    He.end > 0 &&
                    ((Je =
                      He.end -
                      (b._startClamp ? Math.max(0, He.start) : He.start)),
                    ((qt === p && He.start - He._pinPush < ce) || qt === _t) &&
                      isNaN(Ee) &&
                      (Se += Je * (1 - He.progress)),
                    qt === f && (Ae += Je)));
              if (
                ((ce += Se),
                (De += Se),
                b._startClamp && (b._startClamp += Se),
                b._endClamp &&
                  !pt &&
                  ((b._endClamp = De || -0.001), (De = Math.min(De, ei(M, y)))),
                (Ce = De - ce || ((ce -= 0.01) && 0.001)),
                et && (de = H.utils.clamp(0, 1, H.utils.normalize(ce, De, jt))),
                (b._pinPush = Ae),
                vt &&
                  Se &&
                  ((Je = {}),
                  (Je[y.a] = "+=" + Se),
                  _t && (Je[y.p] = "-=" + ye()),
                  H.set([vt, At], Je)),
                f && !(vr && b.end >= ei(M, y)))
              )
                ((Je = Ot(f)),
                  (Qs = y === Ne),
                  (Ni = ye()),
                  (Pt = parseFloat(Me(y.a)) + Ae),
                  !ke &&
                    De > 1 &&
                    ((Jt = (K ? be.scrollingElement || Dt : M).style),
                    (Jt = {
                      style: Jt,
                      value: Jt["overflow" + y.a.toUpperCase()],
                    }),
                    K &&
                      Ot(ge)["overflow" + y.a.toUpperCase()] !== "scroll" &&
                      (Jt.style["overflow" + y.a.toUpperCase()] = "scroll")),
                  Zn(f, Ve, Je),
                  (zi = ln(f)),
                  (tt = vi(f, !0)),
                  (Pn = oe && Li(M, Qs ? ft : Ne)()),
                  h
                    ? ((Ie = [h + y.os2, Ce + Ae + Ge]),
                      (Ie.t = Ve),
                      (qe = h === Oe ? Cn(f, y) + Ce + Ae : 0),
                      qe &&
                        (Ie.push(y.d, qe + Ge),
                        Ve.style.flexBasis !== "auto" &&
                          (Ve.style.flexBasis = qe + Ge)),
                      ps(Ie),
                      _t &&
                        te.forEach(function (Ci) {
                          Ci.pin === _t &&
                            Ci.vars.pinSpacing !== !1 &&
                            (Ci._subPinOffset = !0);
                        }),
                      oe && ye(jt))
                    : ((qe = Cn(f, y)),
                      qe &&
                        Ve.style.flexBasis !== "auto" &&
                        (Ve.style.flexBasis = qe + Ge)),
                  oe &&
                    ((it = {
                      top: tt.top + (Qs ? Ni - ce : Pn) + Ge,
                      left: tt.left + (Qs ? Pn : Ni - ce) + Ge,
                      boxSizing: "border-box",
                      position: "fixed",
                    }),
                    (it[Yi] = it["max" + ms] = Math.ceil(tt.width) + Ge),
                    (it[Wi] = it["max" + Lr] = Math.ceil(tt.height) + Ge),
                    (it[Lt] =
                      it[Lt + Rs] =
                      it[Lt + Os] =
                      it[Lt + Hs] =
                      it[Lt + zs] =
                        "0"),
                    (it[Oe] = Je[Oe]),
                    (it[Oe + Rs] = Je[Oe + Rs]),
                    (it[Oe + Os] = Je[Oe + Os]),
                    (it[Oe + Hs] = Je[Oe + Hs]),
                    (it[Oe + zs] = Je[Oe + zs]),
                    (Ai = Eh(li, it, _)),
                    pt && ye(0)),
                  n
                    ? ((Rr = n._initted),
                      Wn(1),
                      n.render(n.duration(), !0, !0),
                      (di = Me(y.a) - Pt + Ce + Ae),
                      (ci = Math.abs(Ce - di) > 1),
                      oe && ci && Ai.splice(Ai.length - 2, 2),
                      n.render(0, !0, !0),
                      Rr || n.invalidate(!0),
                      n.parent || n.totalTime(n.totalTime()),
                      Wn(0))
                    : (di = Ce),
                  Jt &&
                    (Jt.value
                      ? (Jt.style["overflow" + y.a.toUpperCase()] = Jt.value)
                      : Jt.style.removeProperty("overflow-" + y.a)));
              else if (p && ye() && !A)
                for (tt = p.parentNode; tt && tt !== ge;)
                  (tt._pinOffset &&
                    ((ce -= tt._pinOffset), (De -= tt._pinOffset)),
                    (tt = tt.parentNode));
              (bs &&
                bs.forEach(function (Ci) {
                  return Ci.revert(!1, !0);
                }),
                (b.start = ce),
                (b.end = De),
                (ot = mt = pt ? jt : ye()),
                !A && !pt && (ot < jt && ye(jt), (b.scroll.rec = 0)),
                b.revert(!1, !0),
                (pe = nt()),
                Vt && ((U = -1), Vt.restart(!0)),
                (st = 0),
                n &&
                  B &&
                  (n._initted || Gi) &&
                  n.progress() !== Gi &&
                  n.progress(Gi || 0, !0).render(n.time(), !0, !0),
                (et || de !== b.progress || A || F || (n && !n._initted)) &&
                  (n &&
                    !B &&
                    (n._initted || de || n.vars.immediateRender !== !1) &&
                    n.totalProgress(
                      A && ce < -0.001 && !de
                        ? H.utils.normalize(ce, De, 0)
                        : de,
                      !0,
                    ),
                  (b.progress = et || (ot - ce) / Ce === de ? 0 : de)),
                f && h && (Ve._pinOffset = Math.round(b.progress * di)),
                ne && ne.invalidate(),
                isNaN(ys) ||
                  ((ys -= H.getProperty(D, y.p)),
                  (Ys -= H.getProperty(Et, y.p)),
                  dn(D, y, ys),
                  dn(vt, y, ys - (X || 0)),
                  dn(Et, y, Ys),
                  dn(At, y, Ys - (X || 0))),
                et && !pt && b.update(),
                u && !pt && !yi && ((yi = !0), u(b), (yi = !1)));
            }
          }),
          (b.getVelocity = function () {
            return ((ye() - mt) / (nt() - Cs)) * 1e3 || 0;
          }),
          (b.endAnimation = function () {
            (Es(b.callbackAnimation),
              n &&
                (ne
                  ? ne.progress(1)
                  : n.paused()
                    ? B || Es(n, b.direction < 0, 1)
                    : Es(n, n.reversed())));
          }),
          (b.labelToScroll = function (O) {
            return (
              (n &&
                n.labels &&
                (ce || b.refresh() || ce) +
                  (n.labels[O] / n.duration()) * Ce) ||
              0
            );
          }),
          (b.getTrailing = function (O) {
            var W = te.indexOf(b),
              V = b.direction > 0 ? te.slice(0, W).reverse() : te.slice(W + 1);
            return (
              St(O)
                ? V.filter(function (X) {
                    return X.vars.preventOverlaps === O;
                  })
                : V
            ).filter(function (X) {
              return b.direction > 0 ? X.end <= ce : X.start >= De;
            });
          }),
          (b.update = function (O, W, V) {
            if (!(A && !V && !O)) {
              var X = pt === !0 ? jt : b.scroll(),
                je = O ? 0 : (X - ce) / Ce,
                le = je < 0 ? 0 : je > 1 ? 1 : je || 0,
                ke = b.progress,
                et,
                Se,
                Ae,
                we,
                Qt,
                Ee,
                _t,
                Kt;
              if (
                (W &&
                  ((mt = ot),
                  (ot = A ? ye() : X),
                  w && ((Ri = _i), (_i = n && !B ? n.totalProgress() : le))),
                v &&
                  f &&
                  !st &&
                  !tn &&
                  zt &&
                  (!le && ce < X + ((X - mt) / (nt() - Cs)) * v
                    ? (le = 1e-4)
                    : le === 1 &&
                      De > X + ((X - mt) / (nt() - Cs)) * v &&
                      (le = 0.9999)),
                le !== ke && b.enabled)
              ) {
                if (
                  ((et = b.isActive = !!le && le < 1),
                  (Se = !!ke && ke < 1),
                  (Ee = et !== Se),
                  (Qt = Ee || !!le != !!ke),
                  (b.direction = le > ke ? 1 : -1),
                  (b.progress = le),
                  Qt &&
                    !st &&
                    ((Ae = le && !ke ? 0 : le === 1 ? 1 : ke === 1 ? 2 : 3),
                    B &&
                      ((we =
                        (!Ee && N[Ae + 1] !== "none" && N[Ae + 1]) || N[Ae]),
                      (Kt =
                        n &&
                        (we === "complete" || we === "reset" || we in n)))),
                  S &&
                    (Ee || Kt) &&
                    (Kt || c || !n) &&
                    (rt(S)
                      ? S(b)
                      : b.getTrailing(S).forEach(function (Ni) {
                          return Ni.endAnimation();
                        })),
                  B ||
                    (ne && !st && !tn
                      ? (ne._dp._time - ne._start !== ne._time &&
                          ne.render(ne._dp._time - ne._start),
                        ne.resetTo
                          ? ne.resetTo("totalProgress", le, n._tTime / n._tDur)
                          : ((ne.vars.totalProgress = le),
                            ne.invalidate().restart()))
                      : n && n.totalProgress(le, !!(st && (pe || O)))),
                  f)
                ) {
                  if ((O && h && (Ve.style[h + y.os2] = Fs), !oe))
                    Nt(Ts(Pt + di * le));
                  else if (Qt) {
                    if (
                      ((_t = !O && le > ke && De + 1 > X && X + 1 >= ei(M, y)),
                      _)
                    )
                      if (!O && (et || _t)) {
                        var qe = vi(f, !0),
                          Je = X - ce;
                        Ea(
                          f,
                          ge,
                          qe.top + (y === Ne ? Je : 0) + Ge,
                          qe.left + (y === Ne ? 0 : Je) + Ge,
                        );
                      } else Ea(f, Ve);
                    (ps(et || _t ? Ai : zi),
                      (ci && le < 1 && et) ||
                        Nt(Pt + (le === 1 && !_t ? di : 0)));
                  }
                }
                (w && !Ke.tween && !st && !tn && Vt.restart(!0),
                  o &&
                    (Ee || (x && le && (le < 1 || !Xn))) &&
                    Us(o.targets).forEach(function (Ni) {
                      return Ni.classList[et || x ? "add" : "remove"](
                        o.className,
                      );
                    }),
                  a && !B && !O && a(b),
                  Qt && !st
                    ? (B &&
                        (Kt &&
                          (we === "complete"
                            ? n.pause().totalProgress(1)
                            : we === "reset"
                              ? n.restart(!0).pause()
                              : we === "restart"
                                ? n.restart(!0)
                                : n[we]()),
                        a && a(b)),
                      (Ee || !Xn) &&
                        (d && Ee && qn(b, d),
                        R[Ae] && qn(b, R[Ae]),
                        x && (le === 1 ? b.kill(!1, 1) : (R[Ae] = 0)),
                        Ee || ((Ae = le === 1 ? 1 : 3), R[Ae] && qn(b, R[Ae]))),
                      k &&
                        !et &&
                        Math.abs(b.getVelocity()) > (Ds(k) ? k : 2500) &&
                        (Es(b.callbackAnimation),
                        ne
                          ? ne.progress(1)
                          : Es(n, we === "reverse" ? 1 : !le, 1)))
                    : B && a && !st && a(b));
              }
              if (es) {
                var tt = A ? (X / A.duration()) * (A._caScrollDist || 0) : X;
                (js(tt + (D._isFlipped ? 1 : 0)), es(tt));
              }
              is && is((-X / A.duration()) * (A._caScrollDist || 0));
            }
          }),
          (b.enable = function (O, W) {
            b.enabled ||
              ((b.enabled = !0),
              We(M, "resize", Ms),
              K || We(M, "scroll", ns),
              Fe && We(e, "refreshInit", Fe),
              O !== !1 && ((b.progress = de = 0), (ot = mt = U = ye())),
              W !== !1 && b.refresh());
          }),
          (b.getTween = function (O) {
            return O && Ke ? Ke.tween : ne;
          }),
          (b.setPositions = function (O, W, V, X) {
            if (A) {
              var je = A.scrollTrigger,
                le = A.duration(),
                ke = je.end - je.start;
              ((O = je.start + (ke * O) / le), (W = je.start + (ke * W) / le));
            }
            (b.refresh(
              !1,
              !1,
              {
                start: ga(O, V && !!b._startClamp),
                end: ga(W, V && !!b._endClamp),
              },
              X,
            ),
              b.update());
          }),
          (b.adjustPinSpacing = function (O) {
            if (Ie && O) {
              var W = Ie.indexOf(y.d) + 1;
              ((Ie[W] = parseFloat(Ie[W]) + O + Ge),
                (Ie[1] = parseFloat(Ie[1]) + O + Ge),
                ps(Ie));
            }
          }),
          (b.disable = function (O, W) {
            if (
              b.enabled &&
              (O !== !1 && b.revert(!0, !0),
              (b.enabled = b.isActive = !1),
              W || (ne && ne.pause()),
              (jt = 0),
              $e && ($e.uncache = 1),
              Fe && Ye(e, "refreshInit", Fe),
              Vt && (Vt.pause(), Ke.tween && Ke.tween.kill() && (Ke.tween = 0)),
              !K)
            ) {
              for (var V = te.length; V--;)
                if (te[V].scroller === M && te[V] !== b) return;
              (Ye(M, "resize", Ms), K || Ye(M, "scroll", ns));
            }
          }),
          (b.kill = function (O, W) {
            (b.disable(O, W), ne && !W && ne.kill(), l && delete xr[l]);
            var V = te.indexOf(b);
            (V >= 0 && te.splice(V, 1),
              V === ut && mn > 0 && ut--,
              (V = 0),
              te.forEach(function (X) {
                return X.scroller === b.scroller && (V = 1);
              }),
              V || pt || (b.scroll.rec = 0),
              n &&
                ((n.scrollTrigger = null),
                O && n.revert({ kill: !1 }),
                W || n.kill()),
              vt &&
                [vt, At, D, Et].forEach(function (X) {
                  return X.parentNode && X.parentNode.removeChild(X);
                }),
              Gs === b && (Gs = 0),
              f &&
                ($e && ($e.uncache = 1),
                (V = 0),
                te.forEach(function (X) {
                  return X.pin === f && V++;
                }),
                V || ($e.spacer = 0)),
              s.onKill && s.onKill(b));
          }),
          te.push(b),
          b.enable(!1, !1),
          ui && ui(b),
          n && n.add && !Ce)
        ) {
          var he = b.update;
          ((b.update = function () {
            ((b.update = he), se.cache++, ce || De || b.refresh());
          }),
            H.delayedCall(0.01, b.update),
            (Ce = 0.01),
            (ce = De = 0));
        } else b.refresh();
        f && bh();
      }),
      (e.register = function (s) {
        return (
          as ||
            ((H = s || yo()), bo() && window.document && e.enable(), (as = Ss)),
          as
        );
      }),
      (e.defaults = function (s) {
        if (s) for (var n in s) an[n] = s[n];
        return an;
      }),
      (e.disable = function (s, n) {
        ((Ss = 0),
          te.forEach(function (a) {
            return a[n ? "kill" : "disable"](s);
          }),
          Ye(ie, "wheel", ns),
          Ye(be, "scroll", ns),
          clearInterval(en),
          Ye(be, "touchcancel", Zt),
          Ye(ge, "touchstart", Zt),
          nn(Ye, be, "pointerdown,touchstart,mousedown", ma),
          nn(Ye, be, "pointerup,touchend,mouseup", va),
          En.kill(),
          sn(Ye));
        for (var r = 0; r < se.length; r += 3)
          (rn(Ye, se[r], se[r + 1]), rn(Ye, se[r], se[r + 2]));
      }),
      (e.enable = function () {
        if (
          ((ie = window),
          (be = document),
          (Dt = be.documentElement),
          (ge = be.body),
          H &&
            ((Us = H.utils.toArray),
            (Ls = H.utils.clamp),
            (mr = H.core.context || Zt),
            (Wn = H.core.suppressOverwrites || Zt),
            (kr = ie.history.scrollRestoration || "auto"),
            (Fr = ie.pageYOffset || 0),
            H.core.globals("ScrollTrigger", e),
            ge))
        ) {
          ((Ss = 1),
            (us = document.createElement("div")),
            (us.style.height = "100vh"),
            (us.style.position = "absolute"),
            ko(),
            hh(),
            Pe.register(H),
            (e.isTouch = Pe.isTouch),
            (Ti =
              Pe.isTouch &&
              /(iPad|iPhone|iPod|Mac)/g.test(navigator.userAgent)),
            (gr = Pe.isTouch === 1),
            We(ie, "wheel", ns),
            (Mr = [ie, be, Dt, ge]),
            H.matchMedia
              ? ((e.matchMedia = function (d) {
                  var u = H.matchMedia(),
                    c;
                  for (c in d) u.add(c, d[c]);
                  return u;
                }),
                H.addEventListener("matchMediaInit", function () {
                  return zr();
                }),
                H.addEventListener("matchMediaRevert", function () {
                  return Do();
                }),
                H.addEventListener("matchMedia", function () {
                  (Qi(0, 1), Zi("matchMedia"));
                }),
                H.matchMedia().add("(orientation: portrait)", function () {
                  return (Jn(), Jn);
                }))
              : console.warn("Requires GSAP 3.11.0 or later"),
            Jn(),
            We(be, "scroll", ns));
          var s = ge.hasAttribute("style"),
            n = ge.style,
            r = n.borderTopStyle,
            a = H.core.Animation.prototype,
            o,
            l;
          for (
            a.revert ||
              Object.defineProperty(a, "revert", {
                value: function () {
                  return this.time(-0.01, !0);
                },
              }),
              n.borderTopStyle = "solid",
              o = vi(ge),
              Ne.m = Math.round(o.top + Ne.sc()) || 0,
              ft.m = Math.round(o.left + ft.sc()) || 0,
              r ? (n.borderTopStyle = r) : n.removeProperty("border-top-style"),
              s || (ge.setAttribute("style", ""), ge.removeAttribute("style")),
              en = setInterval(wa, 250),
              H.delayedCall(0.5, function () {
                return (tn = 0);
              }),
              We(be, "touchcancel", Zt),
              We(ge, "touchstart", Zt),
              nn(We, be, "pointerdown,touchstart,mousedown", ma),
              nn(We, be, "pointerup,touchend,mouseup", va),
              hr = H.utils.checkPrefix("transform"),
              vn.push(hr),
              as = nt(),
              En = H.delayedCall(0.2, Qi).pause(),
              os = [
                be,
                "visibilitychange",
                function () {
                  var d = ie.innerWidth,
                    u = ie.innerHeight;
                  be.hidden
                    ? ((pa = d), (fa = u))
                    : (pa !== d || fa !== u) && Ms();
                },
                be,
                "DOMContentLoaded",
                Qi,
                ie,
                "load",
                Qi,
                ie,
                "resize",
                Ms,
              ],
              sn(We),
              te.forEach(function (d) {
                return d.enable(0, 1);
              }),
              l = 0;
            l < se.length;
            l += 3
          )
            (rn(Ye, se[l], se[l + 1]), rn(Ye, se[l], se[l + 2]));
        }
      }),
      (e.config = function (s) {
        "limitCallbacks" in s && (Xn = !!s.limitCallbacks);
        var n = s.syncInterval;
        ((n && clearInterval(en)) || ((en = n) && setInterval(wa, n)),
          "ignoreMobileResize" in s &&
            (gr = e.isTouch === 1 && s.ignoreMobileResize),
          "autoRefreshEvents" in s &&
            (sn(Ye) || sn(We, s.autoRefreshEvents || "none"),
            (xo = (s.autoRefreshEvents + "").indexOf("resize") === -1)));
      }),
      (e.scrollerProxy = function (s, n) {
        var r = Ft(s),
          a = se.indexOf(r),
          o = qi(r);
        (~a && se.splice(a, o ? 6 : 2),
          n && (o ? si.unshift(ie, n, ge, n, Dt, n) : si.unshift(r, n)));
      }),
      (e.clearMatchMedia = function (s) {
        te.forEach(function (n) {
          return n._ctx && n._ctx.query === s && n._ctx.kill(!0, !0);
        });
      }),
      (e.isInViewport = function (s, n, r) {
        var a = (St(s) ? Ft(s) : s).getBoundingClientRect(),
          o = a[r ? Yi : Wi] * n || 0;
        return r
          ? a.right - o > 0 && a.left + o < ie.innerWidth
          : a.bottom - o > 0 && a.top + o < ie.innerHeight;
      }),
      (e.positionInViewport = function (s, n, r) {
        St(s) && (s = Ft(s));
        var a = s.getBoundingClientRect(),
          o = a[r ? Yi : Wi],
          l =
            n == null
              ? o / 2
              : n in Sn
                ? Sn[n] * o
                : ~n.indexOf("%")
                  ? (parseFloat(n) * o) / 100
                  : parseFloat(n) || 0;
        return r ? (a.left + l) / ie.innerWidth : (a.top + l) / ie.innerHeight;
      }),
      (e.killAll = function (s) {
        if (
          (te.slice(0).forEach(function (r) {
            return r.vars.id !== "ScrollSmoother" && r.kill();
          }),
          s !== !0)
        ) {
          var n = Ji.killAll || [];
          ((Ji = {}),
            n.forEach(function (r) {
              return r();
            }));
        }
      }),
      e
    );
  })();
re.version = "3.13.0";
re.saveStyles = function (e) {
  return e
    ? Us(e).forEach(function (t) {
        if (t && t.style) {
          var i = Ct.indexOf(t);
          (i >= 0 && Ct.splice(i, 5),
            Ct.push(
              t,
              t.style.cssText,
              t.getBBox && t.getAttribute("transform"),
              H.core.getCache(t),
              mr(),
            ));
        }
      })
    : Ct;
};
re.revert = function (e, t) {
  return zr(!e, t);
};
re.create = function (e, t) {
  return new re(e, t);
};
re.refresh = function (e) {
  return e ? Ms(!0) : (as || re.register()) && Qi(!0);
};
re.update = function (e) {
  return ++se.cache && Fi(e === !0 ? 2 : 0);
};
re.clearScrollMemory = Mo;
re.maxScroll = function (e, t) {
  return ei(e, t ? ft : Ne);
};
re.getScrollFunc = function (e, t) {
  return Li(Ft(e), t ? ft : Ne);
};
re.getById = function (e) {
  return xr[e];
};
re.getAll = function () {
  return te.filter(function (e) {
    return e.vars.id !== "ScrollSmoother";
  });
};
re.isScrolling = function () {
  return !!zt;
};
re.snapDirectional = Or;
re.addEventListener = function (e, t) {
  var i = Ji[e] || (Ji[e] = []);
  ~i.indexOf(t) || i.push(t);
};
re.removeEventListener = function (e, t) {
  var i = Ji[e],
    s = i && i.indexOf(t);
  s >= 0 && i.splice(s, 1);
};
re.batch = function (e, t) {
  var i = [],
    s = {},
    n = t.interval || 0.016,
    r = t.batchMax || 1e9,
    a = function (d, u) {
      var c = [],
        p = [],
        f = H.delayedCall(n, function () {
          (u(c, p), (c = []), (p = []));
        }).pause();
      return function (h) {
        (c.length || f.restart(!0),
          c.push(h.trigger),
          p.push(h),
          r <= c.length && f.progress(1));
      };
    },
    o;
  for (o in t)
    s[o] =
      o.substr(0, 2) === "on" && rt(t[o]) && o !== "onRefreshInit"
        ? a(o, t[o])
        : t[o];
  return (
    rt(r) &&
      ((r = r()),
      We(re, "refresh", function () {
        return (r = t.batchMax());
      })),
    Us(e).forEach(function (l) {
      var d = {};
      for (o in s) d[o] = s[o];
      ((d.trigger = l), i.push(re.create(d)));
    }),
    i
  );
};
var Ca = function (t, i, s, n) {
    return (
      i > n ? t(n) : i < 0 && t(0),
      s > n ? (n - i) / (s - i) : s < 0 ? i / (i - s) : 1
    );
  },
  $n = function e(t, i) {
    (i === !0
      ? t.style.removeProperty("touch-action")
      : (t.style.touchAction =
          i === !0
            ? "auto"
            : i
              ? "pan-" + i + (Pe.isTouch ? " pinch-zoom" : "")
              : "none"),
      t === Dt && e(ge, i));
  },
  cn = { auto: 1, scroll: 1 },
  Ch = function (t) {
    var i = t.event,
      s = t.target,
      n = t.axis,
      r = (i.changedTouches ? i.changedTouches[0] : i).target,
      a = r._gsap || H.core.getCache(r),
      o = nt(),
      l;
    if (!a._isScrollT || o - a._isScrollT > 2e3) {
      for (
        ;
        r &&
        r !== ge &&
        ((r.scrollHeight <= r.clientHeight && r.scrollWidth <= r.clientWidth) ||
          !(cn[(l = Ot(r)).overflowY] || cn[l.overflowX]));
      )
        r = r.parentNode;
      ((a._isScroll =
        r &&
        r !== s &&
        !qi(r) &&
        (cn[(l = Ot(r)).overflowY] || cn[l.overflowX])),
        (a._isScrollT = o));
    }
    (a._isScroll || n === "x") && (i.stopPropagation(), (i._gsapAllow = !0));
  },
  Po = function (t, i, s, n) {
    return Pe.create({
      target: t,
      capture: !0,
      debounce: !1,
      lockAxis: !0,
      type: i,
      onWheel: (n = n && Ch),
      onPress: n,
      onDrag: n,
      onScroll: n,
      onEnable: function () {
        return s && We(be, Pe.eventTypes[0], Ta, !1, !0);
      },
      onDisable: function () {
        return Ye(be, Pe.eventTypes[0], Ta, !0);
      },
    });
  },
  Sh = /(input|label|select|textarea)/i,
  Sa,
  Ta = function (t) {
    var i = Sh.test(t.target.tagName);
    (i || Sa) && ((t._gsapAllow = !0), (Sa = i));
  },
  Th = function (t) {
    (Vi(t) || (t = {}),
      (t.preventDefault = t.isNormalizer = t.allowClicks = !0),
      t.type || (t.type = "wheel,touch"),
      (t.debounce = !!t.debounce),
      (t.id = t.id || "normalizer"));
    var i = t,
      s = i.normalizeScrollX,
      n = i.momentum,
      r = i.allowNestedScroll,
      a = i.onRelease,
      o,
      l,
      d = Ft(t.target) || Dt,
      u = H.core.globals().ScrollSmoother,
      c = u && u.get(),
      p =
        Ti &&
        ((t.content && Ft(t.content)) ||
          (c && t.content !== !1 && !c.smooth() && c.content())),
      f = Li(d, Ne),
      h = Li(d, ft),
      F = 1,
      v =
        (Pe.isTouch && ie.visualViewport
          ? ie.visualViewport.scale * ie.visualViewport.width
          : ie.outerWidth) / ie.innerWidth,
      g = 0,
      m = rt(n)
        ? function () {
            return n(o);
          }
        : function () {
            return n || 2.8;
          },
      x,
      w,
      _ = Po(d, t.type, !0, r),
      T = function () {
        return (w = !1);
      },
      A = Zt,
      k = Zt,
      S = function () {
        ((l = ei(d, Ne)),
          (k = Ls(Ti ? 1 : 0, l)),
          s && (A = Ls(0, ei(d, ft))),
          (x = Xi));
      },
      y = function () {
        ((p._gsap.y = Ts(parseFloat(p._gsap.y) + f.offset) + "px"),
          (p.style.transform =
            "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
            parseFloat(p._gsap.y) +
            ", 0, 1)"),
          (f.offset = f.cacheID = 0));
      },
      B = function () {
        if (w) {
          requestAnimationFrame(T);
          var C = Ts(o.deltaY / 2),
            ee = k(f.v - C);
          if (p && ee !== f.v + f.offset) {
            f.offset = ee - f.v;
            var b = Ts((parseFloat(p && p._gsap.y) || 0) - f.offset);
            ((p.style.transform =
              "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " +
              b +
              ", 0, 1)"),
              (p._gsap.y = b + "px"),
              (f.cacheID = se.cache),
              Fi());
          }
          return !0;
        }
        (f.offset && y(), (w = !0));
      },
      M,
      Q,
      K,
      oe,
      R = function () {
        (S(),
          M.isActive() &&
            M.vars.scrollY > l &&
            (f() > l ? M.progress(1) && f(l) : M.resetTo("scrollY", l)));
      };
    return (
      p && H.set(p, { y: "+=0" }),
      (t.ignoreCheck = function (N) {
        return (
          (Ti && N.type === "touchmove" && B()) ||
          (F > 1.05 && N.type !== "touchstart") ||
          o.isGesturing ||
          (N.touches && N.touches.length > 1)
        );
      }),
      (t.onPress = function () {
        w = !1;
        var N = F;
        ((F = Ts(((ie.visualViewport && ie.visualViewport.scale) || 1) / v)),
          M.pause(),
          N !== F && $n(d, F > 1.01 ? !0 : s ? !1 : "x"),
          (Q = h()),
          (K = f()),
          S(),
          (x = Xi));
      }),
      (t.onRelease = t.onGestureStart =
        function (N, C) {
          if ((f.offset && y(), !C)) oe.restart(!0);
          else {
            se.cache++;
            var ee = m(),
              b,
              Fe;
            (s &&
              ((b = h()),
              (Fe = b + (ee * 0.05 * -N.velocityX) / 0.227),
              (ee *= Ca(h, b, Fe, ei(d, ft))),
              (M.vars.scrollX = A(Fe))),
              (b = f()),
              (Fe = b + (ee * 0.05 * -N.velocityY) / 0.227),
              (ee *= Ca(f, b, Fe, ei(d, Ne))),
              (M.vars.scrollY = k(Fe)),
              M.invalidate().duration(ee).play(0.01),
              ((Ti && M.vars.scrollY >= l) || b >= l - 1) &&
                H.to({}, { onUpdate: R, duration: ee }));
          }
          a && a(N);
        }),
      (t.onWheel = function () {
        (M._ts && M.pause(), nt() - g > 1e3 && ((x = 0), (g = nt())));
      }),
      (t.onChange = function (N, C, ee, b, Fe) {
        if (
          (Xi !== x && S(),
          C && s && h(A(b[2] === C ? Q + (N.startX - N.x) : h() + C - b[1])),
          ee)
        ) {
          f.offset && y();
          var yt = Fe[2] === ee,
            q = yt ? K + N.startY - N.y : f() + ee - Fe[1],
            U = k(q);
          (yt && q !== U && (K += U - q), f(U));
        }
        (ee || C) && Fi();
      }),
      (t.onEnable = function () {
        ($n(d, s ? !1 : "x"),
          re.addEventListener("refresh", R),
          We(ie, "resize", R),
          f.smooth &&
            ((f.target.style.scrollBehavior = "auto"),
            (f.smooth = h.smooth = !1)),
          _.enable());
      }),
      (t.onDisable = function () {
        ($n(d, !0),
          Ye(ie, "resize", R),
          re.removeEventListener("refresh", R),
          _.kill());
      }),
      (t.lockAxis = t.lockAxis !== !1),
      (o = new Pe(t)),
      (o.iOS = Ti),
      Ti && !f() && f(1),
      Ti && H.ticker.add(Zt),
      (oe = o._dc),
      (M = H.to(o, {
        ease: "power4",
        paused: !0,
        inherit: !1,
        scrollX: s ? "+=0.1" : "+=0",
        scrollY: "+=0.1",
        modifiers: {
          scrollY: Bo(f, f(), function () {
            return M.pause();
          }),
        },
        onUpdate: Fi,
        onComplete: oe.vars.onComplete,
      })),
      o
    );
  };
re.sort = function (e) {
  if (rt(e)) return te.sort(e);
  var t = ie.pageYOffset || 0;
  return (
    re.getAll().forEach(function (i) {
      return (i._sortY = i.trigger
        ? t + i.trigger.getBoundingClientRect().top
        : i.start + ie.innerHeight);
    }),
    te.sort(
      e ||
        function (i, s) {
          return (
            (i.vars.refreshPriority || 0) * -1e6 +
            (i.vars.containerAnimation ? 1e6 : i._sortY) -
            ((s.vars.containerAnimation ? 1e6 : s._sortY) +
              (s.vars.refreshPriority || 0) * -1e6)
          );
        },
    )
  );
};
re.observe = function (e) {
  return new Pe(e);
};
re.normalizeScroll = function (e) {
  if (typeof e > "u") return ct;
  if (e === !0 && ct) return ct.enable();
  if (e === !1) {
    (ct && ct.kill(), (ct = e));
    return;
  }
  var t = e instanceof Pe ? e : Th(e);
  return (
    ct && ct.target === t.target && ct.kill(),
    qi(t.target) && (ct = t),
    t
  );
};
re.core = {
  _getVelocityProp: fr,
  _inputObserver: Po,
  _scrollers: se,
  _proxies: si,
  bridge: {
    ss: function () {
      (zt || Zi("scrollStart"), (zt = nt()));
    },
    ref: function () {
      return st;
    },
  },
};
yo() && H.registerPlugin(re);
const Dh = { class: "container h-screen lg:pr-0 lg:pl-0 xs:px-0" },
  Mh = { class: "flex relative h-full" },
  kh = ["onWheel"],
  Bh = ["src", "alt"],
  Ph = ["src"],
  Ih = ve({
    __name: "StoryContent",
    props: { content: { type: Array, default: () => [] } },
    setup(e) {
      P.registerPlugin(re);
      const { isDesktop: t, isRealTablet: i, isMobile: s } = ht(),
        n = e,
        r = $([]),
        a = $([]),
        o = $([]),
        l = $([]),
        d = Xe(),
        u = P.context(() => {}),
        c = $(!1),
        p = new Map(),
        f = new Map(),
        h = (v, g) => {
          if (g !== d.getActiveStoryTab) return;
          const m = r.value[g];
          if (m && !m.contains(v.target)) {
            (v.preventDefault(),
              p.has(g) ||
                (p.set(
                  g,
                  P.quickTo(m, "scrollTop", {
                    duration: 0.5,
                    ease: "power2.out",
                  }),
                ),
                f.set(g, m.scrollTop)));
            let x = f.get(g) ?? m.scrollTop;
            (Math.abs(x - m.scrollTop) > 100 &&
              !P.isTweening(m) &&
              (x = m.scrollTop),
              (x += v.deltaY));
            const w = m.scrollHeight - m.clientHeight;
            ((x = Math.max(0, Math.min(x, w))), f.set(g, x), p.get(g)(x));
          }
        };
      (d.$onAction(({ name: v }) => {
        if (v === "scrollToTopStory") {
          const g = d.getActiveStoryTab,
            m = r.value[g];
          m &&
            (m.scrollTo({ top: 0, behavior: "smooth" }),
            f.has(g) && f.set(g, 0));
        }
      }),
        xs(() => {
          ((c.value = !0), F());
        }));
      const F = () => {
        o.value.forEach((v, g) => {
          g === 0 && d.setActiveStoryName(n.content[g].headerText);
          const m = a.value[g],
            x = r.value[g],
            w = l.value[g];
          m &&
            x &&
            u.add(() => {
              const _ = P.timeline({}),
                T = P.timeline({});
              (_.fromTo(
                m,
                {
                  width: "220px",
                  height: "220px",
                  borderRadius: "50%",
                  borderWidth: "6px",
                },
                {
                  width: "100%",
                  height: "100%",
                  borderWidth: "0px",
                  borderRadius: "0px",
                  ease: "none",
                  scrollTrigger: {
                    trigger: ".s-t",
                    scroller: x,
                    start: "top bottom",
                    end: "center center",
                    scrub: !0,
                  },
                },
              )
                .fromTo(
                  m,
                  {
                    width: "100%",
                    height: "100%",
                    borderWidth: "0px",
                    borderRadius: "0px",
                  },
                  {
                    width: "220px",
                    height: "220px",
                    borderRadius: "50%",
                    borderWidth: "6px",
                    ease: "none",
                    scrollTrigger: {
                      trigger: ".s-t",
                      scroller: x,
                      start: "bottom top",
                      end: "bottom+=300 top",
                      scrub: !0,
                    },
                  },
                )
                .fromTo(
                  m,
                  {
                    width: "220px",
                    height: "220px",
                    borderRadius: "50%",
                    borderWidth: "6px",
                  },
                  {
                    width: "220px",
                    height: "220px",
                    borderRadius: "50%",
                    borderWidth: "6px",
                  },
                ),
                T.fromTo(
                  w,
                  { borderRadius: "50%", scale: 2 },
                  {
                    borderRadius: "0px",
                    scale: 1,
                    ease: "none",
                    scrollTrigger: {
                      trigger: ".s-t",
                      scroller: x,
                      start: "top bottom",
                      end: "center center",
                      scrub: !0,
                    },
                  },
                )
                  .fromTo(
                    w,
                    { borderRadius: "0px", scale: 1 },
                    {
                      borderRadius: "50%",
                      scale: 2,
                      ease: "none",
                      scrollTrigger: {
                        trigger: ".s-t",
                        scroller: x,
                        start: "bottom top",
                        end: "bottom+=300 top",
                        scrub: !0,
                      },
                    },
                  )
                  .fromTo(
                    w,
                    { borderRadius: "50%", scale: 2 },
                    { borderRadius: "50%", scale: 2 },
                  ));
            });
        });
      };
      return (
        zo(() => {
          ((c.value = !1), u.revert());
        }),
        (v, g) => (
          I(),
          z("div", Dh, [
            E("div", Mh, [
              (I(!0),
              z(
                Wt,
                null,
                Xt(
                  e.content,
                  (m, x) => (
                    I(),
                    z(
                      "div",
                      {
                        class: G([
                          "scroll-parent absolute flex h-full w-full pointer-events-none opacity-0 transition-all duration-600 ease-in-out",
                          {
                            "opacity-100 !pointer-events-auto":
                              x === L(d).getActiveStoryTab,
                          },
                        ]),
                        ref_for: !0,
                        ref_key: "storiesElements",
                        ref: o,
                        onWheel: (w) => h(w, x),
                      },
                      [
                        E(
                          "div",
                          {
                            ref_for: !0,
                            ref_key: "scrollElements",
                            ref: r,
                            class: G([
                              "scroll-element transform transition-all ease-in-out duration-600 delay-100 translate-y-100 lg:w-6/11 lg:h-[calc(100svh-88px)] border-1 border-white/51 md:pb-0 xs:pb-100 xs:h-screen relative z-2 rounded-tr lg:backdrop-blur-2xl lg:bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.6)_0%,_rgba(255,_255,_255,_0.4)_108.25%)] overflow-y-scroll no-scrollbar lg:mt-88 top-0 left-0 lg:pt-[9vw] lg:pr-0",
                              {
                                "!translate-y-0 duration-800 delay-600":
                                  L(d).isTriggerStoryAnimation,
                              },
                            ]),
                          },
                          [
                            E(
                              "div",
                              {
                                class: G([
                                  "lg:w-[100%] xs:w-full xs:px-40 lg:hidden xs:block md:h-[60vh] xs:h-[50vh]",
                                  { "!h-[60vh] !block": L(i) },
                                ]),
                              },
                              null,
                              2,
                            ),
                            E(
                              "div",
                              {
                                class: G([
                                  "transform opacity-0 translate-y-50 transition-all duration-600 delay-0 ease-in-out",
                                  {
                                    "opacity-100 duration-800 !translate-y-0 delay-700":
                                      L(d).isTriggerStoryAnimation,
                                  },
                                ]),
                              },
                              [
                                (I(!0),
                                z(
                                  Wt,
                                  null,
                                  Xt(
                                    m.sections,
                                    (w) => (
                                      I(),
                                      z(
                                        "div",
                                        {
                                          class: G([
                                            "lg:w-444 3lg:w-620 xs:w-full lg:mx-auto lg:bg-transparent xs:bg-white/81 lg:px-[0vw] md:px-40 xs:px-20",
                                            {
                                              "xs:rounded-t-2smd":
                                                w.component.__name ===
                                                "StoryComponentsElementsStoryElementTitle",
                                              "!bg-white/81 !px-40 !w-full":
                                                L(i),
                                            },
                                          ]),
                                        },
                                        [
                                          (I(),
                                          Pi(
                                            yr(w.component),
                                            Ro(
                                              { class: "max-w-1160" },
                                              { ref_for: !0 },
                                              { ...(w.props || {}) },
                                            ),
                                            null,
                                            16,
                                          )),
                                        ],
                                        2,
                                      )
                                    ),
                                  ),
                                  256,
                                )),
                              ],
                              2,
                            ),
                          ],
                          2,
                        ),
                        L(t) && !L(i) && !L(s)
                          ? (I(),
                            z(
                              "div",
                              {
                                key: 0,
                                class: G([
                                  "absolute pointer-events-none w-12/25 h-[calc(100svh-87px)] opacity-0 scale-25 top-88 right-0 transition-all delay-0 duration-600 ease-in-out",
                                  {
                                    "opacity-100 scale-100 delay-900":
                                      L(d).isTriggerStoryAnimation,
                                  },
                                ]),
                              },
                              [
                                m.illustration
                                  ? (I(),
                                    z(
                                      "div",
                                      {
                                        key: 0,
                                        ref_for: !0,
                                        ref_key: "illustrationElements",
                                        ref: a,
                                        class:
                                          "absolute top-[50%] left-[50%] translate-y-[-50%] translate-x-[-50%] flex w-220 h-220 rounded-full overflow-hidden border-6 border-white/41",
                                      },
                                      [
                                        m.illustration.type === "image"
                                          ? (I(),
                                            z(
                                              "img",
                                              {
                                                key: 0,
                                                ref_for: !0,
                                                ref_key: "illustrationImages",
                                                ref: l,
                                                src: m.illustration.src,
                                                alt: m.illustration.alt,
                                                class:
                                                  "w-full h-full object-cover rounded-full scale-200",
                                              },
                                              null,
                                              8,
                                              Bh,
                                            ))
                                          : wt("", !0),
                                        m.illustration.type === "video"
                                          ? (I(),
                                            z(
                                              "video",
                                              {
                                                key: 1,
                                                ref_for: !0,
                                                ref_key: "illustrationImages",
                                                ref: l,
                                                muted: "",
                                                autoplay: "",
                                                loop: "",
                                                playsinline: "",
                                                class:
                                                  "w-full h-full object-cover rounded-full scale-200",
                                              },
                                              [
                                                E(
                                                  "source",
                                                  {
                                                    src: m.illustration.src,
                                                    type: "video/mp4",
                                                  },
                                                  null,
                                                  8,
                                                  Ph,
                                                ),
                                              ],
                                              512,
                                            ))
                                          : wt("", !0),
                                      ],
                                      512,
                                    ))
                                  : wt("", !0),
                              ],
                              2,
                            ))
                          : wt("", !0),
                      ],
                      42,
                      kh,
                    )
                  ),
                ),
                256,
              )),
            ]),
          ])
        )
      );
    },
  }),
  Lh = Object.assign(Ih, { __name: "StoryComponentsStoryContent" }),
  Oh = { class: "pb-32 lg:pt-0 xs:pt-40 lg:rounded-t-0 md:rounded-t-24" },
  zh = ["innerHTML"],
  Rh = ["innerHTML"],
  Hh = ve({
    __name: "StoryElementTitle",
    props: { title: String, text: String },
    setup(e) {
      return (t, i) => (
        I(),
        z("div", Oh, [
          E(
            "div",
            {
              class:
                "text-bold-700-42 mb-24 xs:max-[767px]:mb-20 xs:max-[767px]:text-[32px]",
              innerHTML: e.title,
            },
            null,
            8,
            zh,
          ),
          e.text
            ? (I(),
              z(
                "div",
                { key: 0, class: "text-semi-600-16", innerHTML: e.text },
                null,
                8,
                Rh,
              ))
            : wt("", !0),
          i[0] ||
            (i[0] = E(
              "div",
              {
                class:
                  "hr mt-32 h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]",
              },
              null,
              -1,
            )),
        ])
      );
    },
  }),
  Le = Object.assign(Hh, {
    __name: "StoryComponentsElementsStoryElementTitle",
  }),
  Gh = { class: "pb-32" },
  Nh = ["innerHTML"],
  Uh = ["innerHTML"],
  Vh = ve({
    __name: "StoryElementParagraph",
    props: {
      title: { type: String, default: "" },
      text: { type: Array, default: () => [] },
    },
    setup(e) {
      return (t, i) => (
        I(),
        z("div", Gh, [
          e.title
            ? (I(),
              z(
                "div",
                {
                  key: 0,
                  class:
                    "text-bold-700-22 mb-24 xs:max-[767px]:text-[24px] relative title-with-icons",
                  innerHTML: e.title,
                },
                null,
                8,
                Nh,
              ))
            : wt("", !0),
          (I(!0),
          z(
            Wt,
            null,
            Xt(
              e.text,
              (s) => (
                I(),
                z(
                  "div",
                  { class: "text-regular-400-16 mb-24", innerHTML: s },
                  null,
                  8,
                  Uh,
                )
              ),
            ),
            256,
          )),
          i[0] ||
            (i[0] = E(
              "div",
              {
                class:
                  "hr mt-32 h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]",
              },
              null,
              -1,
            )),
        ])
      );
    },
  }),
  xe = Object.assign(Vh, {
    __name: "StoryComponentsElementsStoryElementParagraph",
  }),
  jh = { class: "pb-32" },
  Qh = ["innerHTML"],
  Yh = ["innerHTML"],
  Wh = ve({
    __name: "StoryElementBiomarkers",
    props: {
      title: { type: String, default: "" },
      biomarkers: { type: Array, default: () => [] },
    },
    setup(e) {
      return (t, i) => (
        I(),
        z("div", jh, [
          e.title
            ? (I(),
              z(
                "div",
                {
                  key: 0,
                  class:
                    "text-bold-700-22 mb-18 xs:max-[767px]:text-[24px] relative title-with-icons",
                  innerHTML: e.title,
                },
                null,
                8,
                Qh,
              ))
            : wt("", !0),
          (I(!0),
          z(
            Wt,
            null,
            Xt(
              e.biomarkers,
              (s) => (
                I(),
                z("div", { class: "parent", innerHTML: s.test }, null, 8, Yh)
              ),
            ),
            256,
          )),
          i[0] ||
            (i[0] = E(
              "div",
              {
                class:
                  "hr mt-32 h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]",
              },
              null,
              -1,
            )),
        ])
      );
    },
  }),
  Qe = Object.assign(Wh, {
    __name: "StoryComponentsElementsStoryElementBiomarkers",
  }),
  Xh = { class: "md:pb-104 xs:pb-200" },
  Kh = { class: "h-full flex lg:flex-1/2 items-center gap-40" },
  qh = ["innerHTML"],
  Jh = ve({
    __name: "StoryElementNext",
    props: {
      title: { type: String, default: "" },
      image: { type: String, default: null },
      index: { type: Number, default: 0 },
    },
    setup(e) {
      const t = Xe(),
        i = $(null),
        s = vs({ x: 0, y: 0 }),
        n = (r) => {
          if (!i.value) return;
          const a = i.value.getBoundingClientRect(),
            o = r.clientX - a.left - 49,
            l = r.clientY - a.top - 49;
          ((s.x = o), (s.y = l));
        };
      return (r, a) => (
        I(),
        z("div", Xh, [
          E(
            "div",
            {
              ref_key: "buttonRef",
              ref: i,
              onMousemove: n,
              class: G([
                { "pl-36": !e.image },
                "max-w-900 next-story overflow-hidden flex items-center justify-between cursor-pointer w-full h-100 xs:max-[767px]:h-auto pl-36 pr-6 lg:py-0 xs:py-30 rounded-44 backdrop-blur lg:bg-transparent xs:bg-linear-[360deg,rgba(255,255,255,0.2)_10%,rgba(255,255,255,1.0)_20%] xs:bg-transparent xs:max-[767px]:rounded-2smd xs:max-[767px]:px-30 md:py-16",
              ]),
              onClick: a[0] || (a[0] = (o) => L(t).setActiveStoryTab(e.index)),
            },
            [
              E(
                "div",
                {
                  class: "hover-gradient",
                  style: ni({ transform: `translate(${s.x}px, ${s.y}px)` }),
                },
                null,
                4,
              ),
              E("div", Kh, [
                E("div", null, [
                  a[1] ||
                    (a[1] = E(
                      "p",
                      {
                        class:
                          "lg:text-bold-700-12 xs:text-bold-700-20 text-brand-dark uppercase",
                      },
                      "next",
                      -1,
                    )),
                  E(
                    "div",
                    {
                      class:
                        "text-place pr-30 xs:max-[767px]:pr-0 max-w-400 text-semi-600-16",
                      innerHTML: e.title,
                    },
                    null,
                    8,
                    qh,
                  ),
                ]),
              ]),
              a[2] ||
                (a[2] = E(
                  "div",
                  {
                    class:
                      "bg-white w-76 h-88 rounded-2smd flex items-center justify-center relative z-2",
                  },
                  [
                    E("div", {
                      class:
                        "grad w-50 h-50 absolute transition-all duration-300 ease-in-out",
                    }),
                    E(
                      "svg",
                      {
                        width: "12",
                        height: "18",
                        viewBox: "0 0 12 18",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                      },
                      [
                        E("path", {
                          d: "M-2.25 -9L9.75 9L-2.25 27",
                          stroke: "#010835",
                          "stroke-width": "3",
                        }),
                      ],
                    ),
                  ],
                  -1,
                )),
            ],
            34,
          ),
        ])
      );
    },
  }),
  fi = Object.assign(Jh, { __name: "StoryComponentsElementsStoryElementNext" }),
  Zh = { class: "flex mb-92 items-center gap-16" },
  $h = ["src"],
  eg = { key: 1, class: "bg-brand-dark w-8 h-8 rounded-full" },
  tg = ["innerHTML"],
  ig = ve({
    __name: "StoryElementBreadcrumbs",
    props: {
      icon: { type: String, default: null },
      text: { type: String, default: "" },
    },
    setup(e) {
      return (t, i) => (
        I(),
        z("div", Zh, [
          e.icon
            ? (I(),
              z(
                "img",
                { key: 0, alt: "icon", src: e.icon, class: "w-64" },
                null,
                8,
                $h,
              ))
            : wt("", !0),
          e.icon ? (I(), z("div", eg)) : wt("", !0),
          E("div", { innerHTML: e.text }, null, 8, tg),
        ])
      );
    },
  });
Object.assign(ig, { __name: "StoryComponentsElementsStoryElementBreadcrumbs" });
const sg = { class: "pb-64" },
  ng = ["innerHTML"],
  rg = ["textContent"],
  ag = ve({
    __name: "StoryElementList",
    props: {
      title: { type: String },
      list: { type: Array, default: () => [] },
      removeDots: { type: Boolean, default: !1 },
    },
    setup(e) {
      return (t, i) => (
        I(),
        z("div", sg, [
          e.title
            ? (I(),
              z(
                "div",
                { key: 0, class: "text-bold-700-22 mb-24", innerHTML: e.title },
                null,
                8,
                ng,
              ))
            : wt("", !0),
          E(
            "ul",
            { class: G([{ "list-none": e.removeDots }, "list-disc pl-17"]) },
            [
              (I(!0),
              z(
                Wt,
                null,
                Xt(
                  e.list,
                  (s) => (
                    I(),
                    z(
                      "li",
                      {
                        class: "text-regular-400-16 mb-15",
                        textContent: at(s),
                      },
                      null,
                      8,
                      rg,
                    )
                  ),
                ),
                256,
              )),
            ],
            2,
          ),
        ])
      );
    },
  }),
  ue = Object.assign(ag, { __name: "StoryComponentsElementsStoryElementList" }),
  og = { class: "pb-64 xs:max-[767px]:!pb-60" },
  lg = {
    class:
      "qr-element flex items-center justify-between w-full h-153 pl-16 pr-64 py-16 xs:max-[767px]:h-auto xs:max-[767px]:pr-16",
  },
  dg = {
    class:
      "h-full flex items-center gap-40 xs:max-[767px]:flex-col xs:max-[767px]:!pt-26 xs:max-[767px]:!pb-30 xs:max-[767px]:!px-40",
  },
  cg = ["src"],
  ug = ["innerHTML"],
  pg = ve({
    __name: "qrCodeElement",
    props: {
      title: { type: String, default: "" },
      image: { type: String, default: null },
    },
    setup(e) {
      return (t, i) => (
        I(),
        z("div", og, [
          E("div", lg, [
            E("div", dg, [
              e.image
                ? (I(),
                  z(
                    "img",
                    {
                      key: 0,
                      alt: "image",
                      src: e.image,
                      class:
                        "h-full object-contain xs:max-[767px]:mx-auto xs:max-[767px]:block",
                    },
                    null,
                    8,
                    cg,
                  ))
                : wt("", !0),
              E("div", null, [
                i[0] ||
                  (i[0] = E(
                    "p",
                    {
                      class:
                        "lg:text-bold-700-13 mb-4 xs:text-bold-700-13 !tracking-3 text-brand-green uppercase xs:max-[767px]:!text-center",
                    },
                    "SCAN QR CODE TO GET",
                    -1,
                  )),
                E(
                  "div",
                  {
                    class:
                      "max-w-540 text-semi-700-18 xs:max-[767px]:!text-center",
                    innerHTML: e.title,
                  },
                  null,
                  8,
                  ug,
                ),
              ]),
            ]),
          ]),
        ])
      );
    },
  }),
  hi = Object.assign(Te(pg, [["__scopeId", "data-v-46a8bf7c"]]), {
    __name: "StoryComponentsElementsQrCodeElement",
  }),
  fg = { key: 0, class: "pb-64" },
  hg = ["src"],
  gg = ve({
    __name: "StoryElementVideo",
    props: {
      src: { type: String, required: !0 },
      type: { type: String, default: "video" },
    },
    setup(e) {
      const { isRealTablet: t, isMobile: i } = ht();
      return (s, n) =>
        L(t) || L(i)
          ? (I(),
            z("div", fg, [
              e.type === "video"
                ? (I(),
                  z(
                    "video",
                    {
                      key: 0,
                      class: "w-full h-full object-cover rounded",
                      src: e.src,
                      autoplay: "",
                      muted: "",
                      loop: "",
                      playsinline: "",
                    },
                    null,
                    8,
                    hg,
                  ))
                : wt("", !0),
            ]))
          : wt("", !0);
    },
  }),
  gi = Object.assign(gg, {
    __name: "StoryComponentsElementsStoryElementVideo",
  }),
  mg = {
    Neural_Zoomer: [
      {
        type: "story",
        id: "brain1-1",
        name: "story",
        headerText: "Neural Zoomer Plus",
        selectorName: "The Mild Demyelination",
        sections: [
          {
            component: Le,
            props: {
              title: "<h1>The Mild Demyelination & Cognitive Pattern</h1>",
            },
          },
          {
            component: xe,
            props: {
              title: "<h2>The Clinical Picture</h2>",
              text: [
                "<p>Rachel, a 38-year-old nurse, noticed occasional difficulty finding words during patient handoffs and mild fatigue that worsened throughout her shifts.</p>",
                "<p>She experienced subtle coordination issues and brief episodes of visual blurring that resolved within minutes.</p>",
              ],
            },
          },
          {
            component: gi,
            props: { type: "video", src: "/videos/NeuralHealthV03.mp4" },
          },
          {
            component: Qe,
            props: {
              title: "<h2>Key Biomarkers Working Together</h2>",
              biomarkers: [
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white rounded-t-2sm justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Anti-Myelin Basic Protein (≤ 10)</p>
                          <p class="text-mono-regular-400-13 uppercase">Demyelination and oligodendrocyte stress</p>
                        </div>
                        <div class="biomarker-tag tag-orange with-arrow arrow-top">17.8</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>
`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Anti-GABA Receptor (≤ 10)</p>
                          <p class="text-mono-regular-400-13 uppercase">Impaired inhibitory neurotransmission</p>
                        </div>
                        <div class="biomarker-tag tag-green with-arrow">5.9</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Anti-AChR (≤ 10)</p>
                          <p class="text-mono-regular-400-13 uppercase">Impaired neuromuscular signalling</p>
                        </div>
                        <div class="biomarker-tag tag-green with-arrow">8.3</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Anti-NMDA Receptor (≤ 10)</p>
                          <p class="text-mono-regular-400-13 uppercase">Impaired excitatory neurotransmission</p>
                        </div>
                        <div class="biomarker-tag tag-green with-arrow">6.5</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 rounded-b-2sm bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Anti-MOG (≤ 10)</p>
                          <p class="text-mono-regular-400-13 uppercase">Impaired myelin integrity</p>
                        </div>
                        <div class="biomarker-tag tag-green with-arrow">7.1</div>
                      </div>`,
                },
              ],
            },
          },
          {
            component: xe,
            props: {
              title: '<h2 class="s-t">The Clinical Insight</h2>',
              text: [
                "<p>This pattern indicates mild autoimmune activity directed toward neuronal structural components rather than synaptic receptors.</p>",
                "<p>The presence of anti-myelin basic protein antibodies reflects early demyelination and oligodendrocyte stress, consistent with intermittent conduction delays and subtle neurological symptoms.</p>",
                "<p>The absence of anti-GABA, anti-AChR, anti-NMDA, and anti-MOG antibodies suggests that receptor-mediated neurotransmission and broader myelin integrity remain largely preserved, pointing to an early stage of autoimmune involvement.</p>",
              ],
            },
          },
          {
            component: Qe,
            props: {
              title: "<h2>Neuroprotective Support Protocol</h2>",
              biomarkers: [
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Glutamine</p><p class="text-semi-600-16 text-brand-green">500 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">Glutamine supports GABA synthesis by providing a precursor for glutamate, which is then converted into GABA. Glutamine can be converted to glutamate through the action of the enzyme glutaminase.</p>
                            <p class="with-left-dot text-regular-400-16 mb-24">Following this, glutamate serves as the substrate for the enzyme glutamate decarboxylase (GAD), which catalyzes the conversion of glutamate to GABA.</p>
                            <p class="with-left-dot text-regular-400-16">Therefore, oral intake of glutamine supports the synthesis of GABA and helps improve its levels.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Coenzyme Q10</p><p class="text-semi-600-16 text-brand-green">100 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16">Studies have reported that Coenzyme Q10 supplementation reduced glutamate excitotoxicity and oxidative stress.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">PUFAs</p><p class="text-semi-600-16 text-brand-green">950 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16">PUFAs reduce inflammation by reducing the levels of proinflammatory cytokines and animal studies showed that PUFAs prevent demyelination and promotes remyelination and neuronal protection.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Vitamin D</p><p class="text-semi-600-16 text-brand-green">600 IU/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">Vitamin D influences neurodegenerative disease risk and progression, and a few studies have suggested its role in the development and function of the CNS.</p>
                            <p class="with-left-dot text-regular-400-16">Studies have reported that it reduces inflammation in inflammatory demyelination diseases.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Magnesium</p><p class="text-semi-600-16 text-brand-green">400 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">Magnesium is crucial for the proper functioning of the nervous system.</p>
                            <p class="with-left-dot text-regular-400-16 mb-24">Magnesium is used to treat pain in various conditions. Studies have reported low levels of magnesium in patients with migraine.</p>
                            <p class="with-left-dot text-regular-400-16">Magnesium prevents gluatamate toxicity by blocking the glutamate receptors.</p>
                        </div>
                       </div>`,
                },
              ],
            },
          },
          {
            component: fi,
            props: {
              title:
                "<p>Comprehensive Neurological Autoimmunity & Brain Health Assessment",
              index: 1,
            },
          },
        ],
        illustration: {
          type: "video",
          src: "/videos/NeuralHealthV03.mp4",
          alt: "image",
        },
      },
      {
        type: "overview",
        id: "brain1-overview",
        name: "overview",
        selectorName: "Test Overview",
        sections: [
          {
            component: Le,
            props: {
              title:
                "<h1>Comprehensive Neurological Autoimmunity & Brain Health Assessment</h1>",
            },
          },
          {
            component: xe,
            props: {
              text: [
                "<p>The Neural Zoomer Plus evaluates immune reactivity to neurological antigens associated with neuroinflammation, cognitive decline, and autoimmune-related brain disorders.</p>",
                "<p>This test identifies autoimmune activity years before clinical diagnosis, enabling early intervention when treatments are most effective. By detecting both autoantibodies and infectious triggers, it provides a complete picture of neuroinflammation causes.</p>",
                "<p>The panel is particularly valuable for patients with unexplained neurological symptoms, helping differentiate between various conditions and guide targeted therapeutic approaches.</p>",
              ],
            },
          },
          {
            component: hi,
            props: {
              title: "<h2>Neural Zoomer Plus Sample Report</h2>",
              image: "/images/qrs/qrNeutralZoomer.svg",
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Symptoms to Consider This Test</h2>",
              list: [
                "Memory loss, brain fog, or cognitive decline",
                "Unexplained neurological symptoms (numbness, tingling, weakness)",
                "Mood disorders (depression, anxiety, bipolar)",
                "Movement disorders or balance problems",
                "Suspected PANDAS/PANS or autoimmune encephalitis",
                "Family history of Alzheimer's, Parkinson's, or Multiple Sclerosis",
              ],
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Key Highlight Markers</h2>",
              list: [
                "24 neurological autoimmunity & inflammation markers",
                "48 neurological antigens including anti-myelin, anti-ganglioside antibodies",
                "Alzheimer's markers: Anti-amyloid beta, anti-tau antibodies",
                "Neurotransmitter receptor antibodies: Dopamine, glutamate, GABA receptors",
                "Infections that most commonly act as the trigger, including Group A Strep, Epstein Barr Virus",
                "Cytomegalovirus, and the Herpes virus family",
                "Optional ApoE genotype testing for Alzheimer's risk",
              ],
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Main Product Highlights</h2>",
              list: [
                "Utilizing advanced bio-chip microarray technology, this panel provides a deeper analysis of nervous system health",
                "Multiplex protein microarray technology ensures highly accurate detection of a wide range of pathogens and immune responses",
                "Comprehensive assessment of both neurological autoimmunity and infectious triggers",
                "Early detection of neurodegenerative processes before clinical symptoms",
                "Useful for complex neurological cases with unclear etiology",
              ],
            },
          },
        ],
      },
    ],
    Neurotransmitters: [
      {
        type: "story",
        id: "brain1-1",
        name: "story",
        headerText: "Neurotransmitters Panel",
        selectorName: "The Neurotransmitter Imbalance",
        sections: [
          {
            component: Le,
            props: {
              title:
                "<h1>The Neurotransmitter Imbalance & Mood-Cognitive Pattern</h1>",
              text: "<p>When Barrier Function Breaks Down</p>",
            },
          },
          {
            component: xe,
            props: {
              title: "<h2>The Clinical Picture</h2>",
              text: [
                "<p>Sarah, a 32-year-old marketing executive, began experiencing persistent low mood, difficulty concentrating during meetings, and disrupted sleep patterns.</p>",
                "<p>She noticed increased anxiety before presentations and found herself relying more heavily on caffeine to maintain focus throughout the day.</p>",
              ],
            },
          },
          {
            component: gi,
            props: { type: "video", src: "/videos/Neurotransmiters.mp4" },
          },
          {
            component: Qe,
            props: {
              title: "<h2>Key Biomarkers Working Together</h2>",
              biomarkers: [
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white rounded-t-2sm justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Serotonin (5-HIAA) (51.2-127.9 mcg/g)</p>
                          <p class="text-mono-regular-400-13 uppercase">Degrading commensal</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow">46.5</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>
`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Morning Cortisol (6.2-19.4 μg/dL)</p>
                          <p class="text-mono-regular-400-13 uppercase">Elevated intestinal permeability marker</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow arrow-top only-arrow"></div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Dopamine (125.2-254.7 mcg/g)</p>
                          <p class="text-mono-regular-400-13 uppercase">Intestinal inflammation</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow">119.2</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 rounded-b-2sm bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Homovanillic Acid (HVA) (3535 - 8455 mg/24hr)</p>
                          <p class="text-mono-regular-400-13 uppercase">Gluten sensitivity</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow">3178</div>
                      </div>`,
                },
              ],
            },
          },
          {
            component: xe,
            props: {
              title: '<h2 class="s-t">The Clinical Insight</h2>',
              text: [
                "<p>This pattern reveals a complex neurotransmitter network dysfunction affecting mood regulation, stress response, and cognitive performance. </p>",
                "<p>Significantly low serotonin metabolites indicate compromised mood stability and sleep regulation, while markedly elevated cortisol suggests chronic stress activation disrupting normal neurotransmitter synthesis.</p>",
                "<p>Mildly reduced GABA activity contributes to heightened anxiety and difficulty with relaxation, while dopamine dysfunction (evidenced by low dopamine and significantly reduced HVA) affects motivation and reward processing.</p>",
                "<p>This interconnected imbalance creates a cycle where stress depletes neurotransmitters, leading to further mood and cognitive symptoms.</p>",
              ],
            },
          },
          {
            component: Qe,
            props: {
              title: "<h2>Neurotransmitter Balance Support Protocol</h2>",
              biomarkers: [
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">L-Tryptophan</p><p class="text-semi-600-16 text-brand-green">500 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">L-Tryptophan serves as the precursor to serotonin synthesis.</p>
                            <p class="with-left-dot text-regular-400-16 mb-24">It crosses the blood-brain barrier and is converted to 5-hydroxytryptophan (5-HTP) by tryptophan hydroxylase, then to serotonin by aromatic L-amino acid decarboxylase. </p>
                            <p class="with-left-dot text-regular-400-16">Adequate tryptophan availability supports mood stability, sleep quality, and emotional regulation</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">GABA</p><p class="text-semi-600-16 text-brand-green">10 billion CFU/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">GABA is the brain's primary inhibitory neurotransmitter, promoting calmness and reducing anxiety. </p>
                            <p class="with-left-dot text-regular-400-16">While oral GABA has limited blood-brain barrier penetration, studies suggest it may influence the enteric nervous system and potentially support central GABA activity through vagal pathways, helping to restore the excitatory-inhibitory balance.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Tyrosine</p><p class="text-semi-600-16 text-brand-green">500 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">L-Tyrosine is the precursor for dopamine, norepinephrine, and epinephrine synthesis.</p>
                            <p class="with-left-dot text-regular-400-16 mb-24">Tyrosine hydroxylase converts tyrosine to L-DOPA, which is then converted to dopamine. </p>
                            <p class="with-left-dot text-regular-400-16">This supports motivation, focus, and stress resilience, particularly during periods of high cognitive or physical demand.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Phosphatidylserine</p><p class="text-semi-600-16 text-brand-green">100 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16">Phosphatidylserine maintains neuronal membrane integrity and supports acetylcholine receptor function. It enhances memory formation, cognitive processing, and helps regulate cortisol response to stress, supporting both neurotransmitter function and stress hormone balance</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">400 mg/day</p><p class="text-semi-600-16 text-brand-green">500 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">Magnesium acts as a cofactor in over 300 enzymatic reactions, including those involved in neurotransmitter synthesis and function. </p>
                            <p class="with-left-dot text-regular-400-16 mb-24">It modulates NMDA receptors, supports GABA activity, and helps regulate the HPA axis.</p>
                            <p class="with-left-dot text-regular-400-16">The glycinate form enhances absorption and provides additional calming effects through glycine's inhibitory neurotransmitter properties.</p>
                        </div>
                       </div>`,
                },
              ],
            },
          },
          {
            component: fi,
            props: {
              title:
                "<p>Comprehensive Neurotransmitter Balance Assessment for Mental & Cognitive Health",
              index: 1,
            },
          },
        ],
        illustration: {
          type: "video",
          src: "/videos/Neurotransmiters.mp4",
          alt: "image",
        },
      },
      {
        type: "overview",
        id: "brain2-overview",
        name: "overview",
        selectorName: "Test Overview",
        sections: [
          {
            component: Le,
            props: {
              title:
                "<h1>Comprehensive Neurotransmitter Balance Assessment for Mental & Cognitive Health</h1>",
            },
          },
          {
            component: xe,
            props: {
              text: [
                "<p>The Neurotransmitters Panel evaluates the levels of neurotransmitters and their metabolites in the body, which are essential for mood regulation, cognitive function, and stress response.</p>",
                "<p>Neurotransmitter imbalances underlie many mental health conditions, yet standard psychiatric evaluations don't measure them directly.</p>",
                "<p>This test provides objective data to guide targeted amino acid therapy, nutritional support, and medication selection.</p>",
                "<p>By understanding both neurotransmitter levels and their metabolic patterns, practitioners can identify whether issues stem from inadequate production, excessive breakdown, or receptor dysfunction.</p>",
              ],
            },
          },
          {
            component: hi,
            props: {
              title: "<h2>Neurotransmitters Panel Sample Report</h2>",
              image: "/images/qrs/qrNeurotransmitter.svg",
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Symptoms to Consider This Test</h2>",
              list: [
                "Depression, anxiety, or panic attacks",
                "Insomnia or sleep disturbances",
                "ADHD, focus, or concentration issues",
                "Chronic fatigue or low motivation",
                "Mood swings or irritability",
                "Addiction or compulsive behaviors",
              ],
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Key Highlight Markers</h2>",
              list: [
                "Key neurotransmitters, including serotonin, dopamine, and GABA",
                "Excitatory neurotransmitters: Glutamate, epinephrine, norepinephrine, PEA",
                "Inhibitory neurotransmitters: GABA, glycine, serotonin",
                "Neurotransmitter metabolites: HVA, 5-HIAA, VMA, DOPAC",
                "Amino acid precursors: Tryptophan, tyrosine, taurine",
                "Histamine and methylation markers",
              ],
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Main Product Highlights</h2>",
              list: [
                "Measures urinary levels of key neurotransmitters and their metabolites",
                "Non-invasive urine testing that can be done at home",
                "Measures both the levels of neurotransmitters and their metabolites, providing deeper insights into brain chemistry",
                "Comprehensive evaluation of synthesis, metabolism, and clearance patterns",
                "Identifies specific imbalances driving mental health symptoms",
              ],
            },
          },
        ],
      },
    ],
    Cardio_Zoomer: [
      {
        type: "story",
        id: "cardio1-1",
        name: "story 1",
        headerText: "Cardio Zoomer",
        selectorName: "The Endothelial Dysfunction",
        sections: [
          {
            component: Le,
            props: {
              title:
                "<h1>The Endothelial Dysfunction & Cardiovascular Risk Pattern</h1>",
              text: "<p>Beyond Standard Lipid Panels</p>",
            },
          },
          {
            component: xe,
            props: {
              title: "<h2>The Clinical Picture</h2>",
              text: [
                "<p>Michael, a 45-year-old financial advisor, presented with elevated blood pressure readings during routine checkups and occasional chest tightness during strenuous exercise.</p>",
                "<p>His family history included early cardiovascular disease, and recent stress tests showed borderline abnormal results with reduced exercise tolerance.</p>",
              ],
            },
          },
          {
            component: gi,
            props: { type: "video", src: "/videos/CardioZoomerNew.mp4" },
          },
          {
            component: Qe,
            props: {
              title: "<h2>Key Biomarkers Working Together</h2>",
              biomarkers: [
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white rounded-t-2sm justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">ADMA (0 - 105 ng/mL)</p>
                          <p class="text-mono-regular-400-13 uppercase">ADMA</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow arrow-top">120.8</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>
`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">SDMA (0 - 159 ng/mL)</p>
                          <p class="text-mono-regular-400-13 uppercase">SDMA</p>
                        </div>
                        <div class="biomarker-tag tag-orange with-arrow arrow-top">211</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">L-Arginine (81.6 - 249.0 nmol/mL)</p>
                          <p class="text-mono-regular-400-13 uppercase">L-Arginine</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow">56.9</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Homoarginine (66 – 265 ng/mL)</p>
                          <p class="text-mono-regular-400-13 uppercase">Homoarginine</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow">34</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 rounded-b-2sm bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Arginine/ADMA Ratio (>90)</p>
                          <p class="text-mono-regular-400-13 uppercase">Arginine/ADMA Ratio</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow">0.47</div>
                      </div>`,
                },
              ],
            },
          },
          {
            component: xe,
            props: {
              title: '<h2 class="s-t">The Clinical Insight</h2>',
              text: [
                "<p>This pattern reveals significant endothelial dysfunction with elevated cardiovascular risk.</p>",
                "<p>Markedly elevated ADMA levels indicate severe competitive inhibition of nitric oxide synthase, while mildly elevated SDMA suggests additional impairment in arginine transport and utilization.</p>",
                "<p>The combination of reduced L-arginine availability and significantly low homoarginine levels further compromises cardiovascular protective mechanisms. </p>",
                "<p>The critically low arginine/ADMA ratio strongly predicts increased risk for atherothrombotic events and suggests the need for aggressive cardiovascular risk reduction strategies</p>",
              ],
            },
          },
          {
            component: Qe,
            props: {
              title: "<h2>Neuroprotective Support Protocol</h2>",
              biomarkers: [
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">L-Arginine</p><p class="text-semi-600-16 text-brand-green">2000 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">L-Arginine serves as the substrate for nitric oxide synthase, competing with ADMA for enzyme binding sites.</p>
                            <p class="with-left-dot text-regular-400-16 mb-24">Supplementation increases the arginine/ADMA ratio, potentially restoring endothelial nitric oxide production and improving flow-mediated vasodilation. </p>
                            <p class="with-left-dot text-regular-400-16">This moderate dose helps overcome competitive inhibition by methylarginines while maintaining safety.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">L-Citrulline</p><p class="text-semi-600-16 text-brand-green">1000 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">L-Citrulline bypasses potential arginine transport limitations and is converted to arginine in the kidneys through the citrulline-arginine cycle. </p>
                            <p class="with-left-dot text-regular-400-16">This pathway provides a more sustained increase in plasma arginine levels compared to direct arginine supplementation, supporting endothelial function and nitric oxide production.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Folic Acid</p><p class="text-semi-600-16 text-brand-green">400 mcg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">Folic acid supports the activity of dimethylarginine dimethylaminohydrolase (DDAH), the enzyme responsible for ADMA degradation. </p>
                            <p class="with-left-dot text-regular-400-16">Adequate folate status helps maintain optimal ADMA clearance and supports endothelial nitric oxide synthase coupling, preventing the enzyme from producing superoxide instead of nitric oxide.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Omega-3 Fatty acids (EPA/DHA)</p><p class="text-semi-600-16 text-brand-green">1500 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">EPA and DHA reduce inflammatory cytokines that can upregulate ADMA-producing enzymes like protein arginine methyltransferases (PRMTs). </p>
                            <p class="with-left-dot text-regular-400-16">They also support endothelial function through membrane stabilization and enhanced nitric oxide bioavailability, complementing the arginine-nitric oxide pathway.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Coenzyme Q10</p><p class="text-semi-600-16 text-brand-green">100 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">CoQ10 acts as a cofactor for endothelial nitric oxide synthase and helps prevent NOS uncoupling, a condition where the enzyme produces superoxide instead of nitric oxide.</p>
                            <p class="with-left-dot text-regular-400-16">It also supports mitochondrial function in endothelial cells and may help reduce oxidative stress that can increase ADMA levels and impair cardiovascular function.</p>
                        </div>
                       </div>`,
                },
              ],
            },
          },
          {
            component: fi,
            props: {
              title:
                "<p>The Metabolic Syndrome & Atherogenic Dyslipidemia Pattern",
              image: "/images/cardioTra.jpg",
              index: 1,
            },
          },
        ],
        illustration: {
          type: "video",
          src: "/videos/CardioZoomerNew.mp4",
          alt: "image",
        },
      },
      {
        type: "story",
        id: "cardio1-1",
        name: "story 2",
        headerText: "Cardio Zoomer",
        selectorName: "The Metabolic Syndrome",
        sections: [
          {
            component: Le,
            props: {
              title:
                "<h1>The Metabolic Syndrome & Atherogenic Dyslipidemia Pattern</h1>",
            },
          },
          {
            component: xe,
            props: {
              title: "<h2>The Clinical Picture</h2>",
              text: [
                "<p>Thomas, a 52-year-old executive, presented with central obesity, hypertension, and family history of early cardiovascular disease.</p>",
                "<p>Despite “normal” total cholesterol, his advanced lipid testing revealed atherogenic dyslipidemia with oxidative stress:</p>",
              ],
            },
          },
          {
            component: gi,
            props: { type: "video", src: "/videos/Cardio.mp4" },
          },
          {
            component: Qe,
            props: {
              title: "<h2>Key Biomarkers Working Together</h2>",
              biomarkers: [
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white rounded-t-2sm justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Triglycerides (< 149 mg/dL)</p>
                          <p class="text-mono-regular-400-13 uppercase">Excess fat storage</p>
                        </div>
                        <div class="biomarker-tag tag-orange with-arrow arrow-top">176</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>
`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">HDL-C (≥ 66 mg/dL)</p>
                          <p class="text-mono-regular-400-13 uppercase">Impaired reverse cholesterol transport</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow">57</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">LDL (≤ 99 mg/dL)</p>
                          <p class="text-mono-regular-400-13 uppercase">Poor cholesterol processing</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow arrow-top">119</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Small Dense LDL (≤ 50 mg/dL)</p>
                          <p class="text-mono-regular-400-13 uppercase">Highly atherogenic particle</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow arrow-top">65</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Lipoprotein(a) [Lp(a)] (≤ 29 mg/dL)</p>
                          <p class="text-mono-regular-400-13 uppercase">Proinflammatory and prothrombotic particle</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow arrow-top">34</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Oxidized LDL (≤ 99.1 U/L)</p>
                          <p class="text-mono-regular-400-13 uppercase">Highly atherogenic particle</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow arrow-top">108.3</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 rounded-b-2sm bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">ApoB/ApoA1 ratio (≤ 0.59)</p>
                          <p class="text-mono-regular-400-13 uppercase">Highly atherogenic ratio</p>
                        </div>
                        <div class="biomarker-tag tag-orange with-arrow arrow-top">0.78</div>
                      </div>`,
                },
              ],
            },
          },
          {
            component: xe,
            props: {
              title: '<h2 class="s-t">The Clinical Insight</h2>',
              text: [
                "<p>This pattern reveals insulin resistance driving impaired lipoprotein clearance. </p>",
                "<p>Elevated triglycerides create triglyceride-enriched HDL and LDL particles that become small, dense, and oxidation-prone. </p>",
                "<p>High Lp(a) adds genetic cardiovascular risk, while elevated oxLDL indicates active atherogenesis.</p>",
                "<p>The low HDL reflects impaired reverse cholesterol transport and antioxidant capacity.</p>",
              ],
            },
          },
          {
            component: Qe,
            props: {
              title: "<h2>Neuroprotective Support Protocol</h2>",
              biomarkers: [
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Berberine HCl</p><p class="text-semi-600-16 text-brand-green">1500 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16">Berberine increases HDL levels by upregulating the expression of genes involved in lipid metabolism, such as apolipoprotein A-I, a key component of HDL particles.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Red Yeast Rice (Monacolin K)</p><p class="text-semi-600-16 text-brand-green">200 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16">Red yeast rice supplementation inhibits HMG-CoA reductase, reducing cholesterol synthesis in the liver. This decreases the production of low-density lipoproteins (LDLs).</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Vitamin B3 (Niacin)</p><p class="text-semi-600-16 text-brand-green">16 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">Vitamin B3 supplementation reduces lipoprotein(a) [Lp(a)] levels primarily by enhancing hepatic lipoprotein metabolism. It increases the activity of lipoprotein lipase, which accelerates the catabolism of Lp(a) particles. </p>
                            <p class="with-left-dot text-regular-400-16">Additionally, niacin decreases the production of VLDL by downregulating its synthesis in the liver.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Omega-3 EPA/DHA</p><p class="text-semi-600-16 text-brand-green">1 g/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">Omega-3 fatty acids reduce triglycerides by suppressing hepatic VLDL production and promoting fatty acid oxidation. By inhibiting NF-κB signaling, they further mitigate inflammation through lowering pro-inflammatory cytokine levels. </p>
                            <p class="with-left-dot text-regular-400-16">In addition, they prevent LDL oxidation by stabilizing lipid membranes, collectively reducing the risk of atherogenesis.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">DHA</p><p class="text-semi-600-16 text-brand-green">1 g/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">DHA supplementation decreases sdLDL levels by promoting increased lipoprotein lipase activity, which enhances the clearance of triglyceride-rich lipoproteins. This reduces the conversion of these lipoproteins into sdLDL. </p>
                            <p class="with-left-dot text-regular-400-16">Additionally, DHA improves the lipid profile by increasing HDL cholesterol, which aids in reducing sdLDL levels.</p>
                        </div>
                       </div>`,
                },
              ],
            },
          },
          {
            component: fi,
            props: {
              title:
                "<p>Comprehensive Cardiovascular Risk Assessment — Beyond Standard Lipid Panels",
              index: 2,
            },
          },
        ],
        illustration: {
          type: "video",
          src: "/videos/Cardio.mp4",
          alt: "image",
        },
      },
      {
        type: "overview",
        id: "cardio2-overview",
        name: "overview",
        selectorName: "Test Overview",
        sections: [
          {
            component: Le,
            props: {
              title:
                "<h1>Comprehensive Cardiovascular Risk Assessment — Beyond Standard Lipid Panels</h1>",
            },
          },
          {
            component: xe,
            props: {
              text: [
                "<p>The Cardiac Zoomer Panel aids in detecting key lipid, apolipoprotein, inflammation, and myocardial stress markers associated with cardiovascular disease risk.</p>",
                "<p>This test goes beyond traditional lipid panels by evaluating oxidative stress, endothelial dysfunction, and genetic predispositions that standard tests miss.</p>",
                "<p>Early identification of cardiovascular risk factors enables preventive interventions before irreversible damage occurs, potentially preventing heart attacks and strokes.</p>",
                "<p>The comprehensive nature of this panel allows for personalized treatment strategies targeting specific risk factors rather than one-size-fits-all approaches.</p>",
              ],
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Symptoms to Consider This Test</h2>",
              list: [
                "Chest pain, shortness of breath, or irregular heartbeat",
                "Family history of heart disease, stroke, or sudden cardiac death",
                "High blood pressure or cholesterol despite treatment",
                "Unexplained fatigue or decreased exercise tolerance",
                "Diabetes or metabolic syndrome",
                "Inflammatory conditions affecting cardiovascular health",
              ],
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Key Highlight Markers</h2>",
              list: [
                "Advanced Lipid Panel: ApoB, Lp(a), oxidized LDL, small dense LDL particles, ceramides, sterols",
                "Inflammatory Markers: hs-CRP, MPO, PLAC, Lp-PLA2",
                "Metabolic Markers: Insulin, HbA1c, adiponectin",
                "Genetic Risk Factors: ApoE genotype, 9p21 genetic variants",
                "Myocardial Stress Markers: NT-proBNP, troponin",
                "Endothelial Function: ADMA, SDMA, homocysteine",
              ],
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Main Product Highlights</h2>",
              list: [
                "Measures key biomarkers like cholesterol, triglycerides, and hs-CRP, offering a clear picture of heart health and inflammation levels",
                "Uses cutting-edge analyzers, microarrays, and chemiluminescence technology to identify heart disease risks earlier and with greater precision than traditional methods",
                "Early detection capabilities for silent cardiovascular issues before symptoms appear",
                "Comprehensive evaluation beyond standard cholesterol testing",
                "Personalized risk stratification based on genetic and biochemical markers",
              ],
            },
          },
        ],
      },
    ],
    Toxins_Panel: [
      {
        type: "story",
        id: "cardio1-1",
        name: "story",
        headerText: "Toxins Panel",
        selectorName: "The Total Tox Burden",
        sections: [
          {
            component: Le,
            props: {
              title:
                "<h1>The Total Tox Burden & Environmental Toxicity Pattern</h1>",
            },
          },
          {
            component: xe,
            props: {
              title: "<h2>The Clinical Picture</h2>",
              text: [
                "<p>Emily, a 48-year-old teacher, presented with chronic fatigue, brain fog, frequent headaches, and unexplained skin rashes.</p>",
                '<p>Despite a "healthy" lifestyle, her history of living in an older home with potential mold exposure and using plastic containers raised concerns.</p>',
                "<p>Advanced toxin testing revealed elevated total tox burden with multiple exposures</p>",
              ],
            },
          },
          {
            component: gi,
            props: { type: "video", src: "/videos/ToxinsV03.mp4" },
          },
          {
            component: Qe,
            props: {
              title: "<h2>Key Biomarkers Working Together</h2>",
              biomarkers: [
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white rounded-t-2sm justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Mercury (≤1.61 ug/g)</p>
                          <p class="text-mono-regular-400-13 uppercase">Neurotoxin and oxidative stressor</p>
                        </div>
                        <div class="biomarker-tag tag-orange with-arrow arrow-top">1.14</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>
`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Lead (≤1.16 ug/g)</p>
                          <p class="text-mono-regular-400-13 uppercase">Nervous system disruptor</p>
                        </div>
                        <div class="biomarker-tag tag-orange with-arrow arrow-top">1.27</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Aflatoxin B1 (≤6.93 ng/g)</p>
                          <p class="text-mono-regular-400-13 uppercase">Liver toxin impairing detoxification and increasing oxidative stress</p>
                        </div>
                        <div class="biomarker-tag tag-orange with-arrow arrow-top">5.98</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Bisphenol A (BPA) (≤5.09 ug/g)</p>
                          <p class="text-mono-regular-400-13 uppercase">Endocrine disruptor</p>
                        </div>
                        <div class="biomarker-tag tag-orange with-arrow arrow-top">5.66</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Ochratoxin A (≤6.8 ng/g)</p>
                          <p class="text-mono-regular-400-13 uppercase">Kidney toxin impairing detoxification and immune function</p>
                        </div>
                        <div class="biomarker-tag tag-orange with-arrow arrow-top">6.9</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Glyphosate (≤7.6 ug/g)</p>
                          <p class="text-mono-regular-400-13 uppercase">Detoxification inhibitor and metabolic disruptor</p>
                        </div>
                        <div class="biomarker-tag tag-orange with-arrow arrow-top">8.87</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 rounded-b-2sm bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Perfluoroalkyl Substances (PFAS) (≤2.205 ug/g)</p>
                          <p class="text-mono-regular-400-13 uppercase">Endocrine disruptor</p>
                        </div>
                        <div class="biomarker-tag tag-orange with-arrow arrow-top">5.981</div>
                      </div>`,
                },
              ],
            },
          },
          {
            component: xe,
            props: {
              title: '<h2 class="s-t">The Clinical Insight</h2>',
              text: [
                "<p>This pattern indicates chronic environmental exposure driving systemic inflammation and oxidative stress. </p>",
                "<p>Heavy metals like mercury and lead impair neurological function and energy production, while mycotoxins from mold disrupt liver and kidney detoxification. Environmental chemicals such as BPA and PFAS act as endocrine disruptors, exacerbating hormonal imbalances and immune dysfunction. </p>",
                "<p>The overall high tox burden overwhelms natural detox pathways, leading to bioaccumulation and increased risk of autoimmune conditions, chronic fatigue, and neurological issues.</p>",
              ],
            },
          },
          {
            component: Qe,
            props: {
              title: "<h2>Targeted Detoxification Optimization Protocol</h2>",
              biomarkers: [
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">N-Acetyl Cysteine (NAC)</p><p class="text-semi-600-16 text-brand-green">600 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">NAC serves as a precursor to glutathione, enhancing the body's ability to bind and excrete heavy metals like mercury and lead through urinary pathways.</p>
                            <p class="with-left-dot text-regular-400-16">It also reduces oxidative stress by replenishing antioxidant defenses against mycotoxins and environmental chemicals.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Milk Thistle (Silymarin)</p><p class="text-semi-600-16 text-brand-green">150 mg twice daily</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">Milk thistle supports liver detoxification by promoting phase I and II enzyme activity, which helps metabolize and eliminate mycotoxins and pesticides. </p>
                            <p class="with-left-dot text-regular-400-16">It protects hepatocytes from oxidative damage caused by heavy metals and improves bile flow for toxin excretion.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Chlorella</p><p class="text-semi-600-16 text-brand-green">1g/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">Chlorella acts as a natural chelator, binding to heavy metals such as cadmium and lead in the gastrointestinal tract to prevent absorption and facilitate fecal elimination.</p>
                            <p class="with-left-dot text-regular-400-16">It also supports detoxification of environmental toxins like PFAS by enhancing cellular repair and reducing inflammation.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Activated Charcoal</p><p class="text-semi-600-16 text-brand-green">500 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">Activated charcoal adsorbs mycotoxins and chemical pollutants in the digestive system, preventing their reabsorption and promoting excretion through the bowels</p>
                            <p class="with-left-dot text-regular-400-16">It helps mitigate the effects of pesticides and plastics by trapping them before they enter systemic circulation.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Vitamin C</p><p class="text-semi-600-16 text-brand-green">1g/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">Vitamin C boosts antioxidant capacity to neutralize free radicals generated by heavy metals and environmental toxins, while supporting collagen synthesis for tissue repair.</p>
                            <p class="with-left-dot text-regular-400-16">It enhances immune function and aids in the chelation of metals like lead, improving overall detox efficiency.</p>
                        </div>
                       </div>`,
                },
              ],
            },
          },
          {
            component: fi,
            props: {
              title: "<p>Complete Toxic Burden Assessment — 87+ Toxins",
              index: 1,
            },
          },
        ],
        illustration: {
          type: "video",
          src: "/videos/ToxinsV03.mp4",
          alt: "image",
        },
      },
      {
        type: "overview",
        id: "cardio2-overview",
        name: "overview",
        selectorName: "Test Overview",
        sections: [
          {
            component: Le,
            props: {
              title: "<h1>Total Toxic Burden Assessment — 87+ Toxins</h1>",
            },
          },
          {
            component: xe,
            props: {
              text: [
                "<p>Toxin Testing provides detailed insights into toxin accumulation and exposure, helping guide personalized detoxification strategies.</p>",
                "<p>Environmental toxins are ubiquitous and accumulate over time, contributing to chronic disease and accelerated aging.</p>",
                "<p>This comprehensive panel identifies specific toxins, allowing for targeted removal strategies rather than generic detox protocols.</p>",
                "<p>Understanding total toxic burden is essential for patients with unexplained chronic illness, as toxins often underlie treatment-resistant conditions.</p>",
              ],
            },
          },
          {
            component: hi,
            props: {
              title: "<h2>Environmental Toxins Sample Report</h2>",
              image: "/images/qrs/qrToxins.svg",
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Symptoms to Consider This Test</h2>",
              list: [
                "Chronic fatigue or fibromyalgia",
                "Brain fog or cognitive decline",
                "Respiratory issues or chronic sinusitis",
                "Hormonal imbalances",
                "Autoimmune conditions",
                "Unexplained neurological symptoms",
              ],
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Key Highlight Markers</h2>",
              list: [
                "29 mycotoxins, 20 heavy metals, and 38 environmental chemicals",
                "Heavy metals: Mercury, lead, arsenic, cadmium, aluminum",
                "Mycotoxins: Aflatoxin, ochratoxin, trichothecenes",
                "PFAS chemicals: PFOA, PFOS, and related compounds",
                "Pesticides, herbicides, and plasticizers",
                "Volatile organic compounds (VOCs)",
              ],
              removeDots: !0,
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Main Product Highlights</h2>",
              list: [
                "Utilizing advanced liquid chromatography-mass spectrometry (LC-MS/MS) technology",
                "Wide Range of Toxins Measured: assesses mycotoxins, heavy metals, PFAS, and environmental chemicals, offering a complete view of toxic exposure",
                "Single test for comprehensive toxic burden assessment",
                "Highly sensitive detection of low-level exposures",
                "Guides targeted detoxification protocols",
              ],
            },
          },
        ],
      },
    ],
    Gut_Zoomer: [
      {
        type: "story",
        id: "cardio1-1",
        name: "story 1",
        headerText: "Gut Zoomer",
        selectorName: "The Intestinal Permeability Pattern",
        sections: [
          {
            component: Le,
            props: {
              title:
                "<h1>The Intestinal Permeability & Inflammation Pattern</h1>",
              text: "<p>When Barrier Function Breaks Down</p>",
            },
          },
          {
            component: xe,
            props: {
              title: "<h2>The Clinical Picture</h2>",
              text: [
                "<p>Sarah, a 42-year-old professional, presented  with chronic fatigue, brain fog, and multiple food sensitivities. </p>",
                "<p>Her Gut Zoomer revealed a clear pattern of compromised intestinal barrier function</p>",
              ],
            },
          },
          {
            component: gi,
            props: { type: "video", src: "/videos/MasterGutZoomerV03.mp4" },
          },
          {
            component: Qe,
            props: {
              title: "<h2>Key Biomarkers Working Together</h2>",
              biomarkers: [
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white rounded-t-2sm justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Akkermansia muciniphila</p>
                          <p class="text-mono-regular-400-13 uppercase">Degrading commensal</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow">critical mucus</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>
`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Fecal Zonulin</p>
                          <p class="text-mono-regular-400-13 uppercase">Elevated intestinal permeability marker</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow arrow-top">245 ng/m</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Calprotectin</p>
                          <p class="text-mono-regular-400-13 uppercase">Intestinal inflammation</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow arrow-top">185 mcg/g</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Lysozyme</p>
                          <p class="text-mono-regular-400-13 uppercase">Antimicrobial peptide indicating epithelial stress</p>
                        </div>
                        <div class="biomarker-tag tag-orange with-arrow arrow-top">elevated</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Low anti-inflammatory SCFA</p>
                          <p class="text-mono-regular-400-13 uppercase">Low anti-inflammatory SCFA</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow">8%</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 rounded-b-2sm bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Deamidated Gliadin Peptide Antibody</p>
                          <p class="text-mono-regular-400-13 uppercase">Gluten sensitivity</p>
                        </div>
                        <div class="biomarker-tag tag-orange with-arrow arrow-top">positive</div>
                      </div>`,
                },
              ],
            },
          },
          {
            component: xe,
            props: {
              title: '<h2 class="s-t">The Clinical Insight</h2>',
              text: [
                "<p>This combination reveals a classic leaky gut pattern. The depleted Akkermansia muciniphila means reduced mucus layer protection. </p>",
                "<p>Elevated zonulin confirms increased intestinal permeability, while high calprotectin indicates active inflammation. The low butyrate (a crucial fuel for colonocytes) further compromises barrier repair.</p>",
                "<p>The positive gliadin antibodies suggest gluten triggering additional barrier disruption.</p>",
              ],
            },
          },
          {
            component: Qe,
            props: {
              title: "<h2>Targeted Supplementation Strategy</h2>",
              biomarkers: [
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Lactobacillus rhamnosus GG</p><p class="text-semi-600-16 text-brand-green">10 billion CFU/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16">Clinically proven to improve intestinal permeability by strengthening tight junctions</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">E. coli Nissle 1917</p><p class="text-semi-600-16 text-brand-green">10 billion CFU/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16">Upregulates   tight   junction   proteins,   directly   addressing permeability</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Inulin</p><p class="text-semi-600-16 text-brand-green">10g/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16">Selectively   feeds   Akkermansia   and   increases   butyrate production</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">L-Glutamine</p><p class="text-semi-600-16 text-brand-green">5g twice daily</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16">Primary fuel for enterocytes, supports barrier repair</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Quercetin</p><p class="text-semi-600-16 text-brand-green">500mg twice daily</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16">Reduces zonulin release and inflammation</p>
                        </div>
                       </div>`,
                },
              ],
            },
          },
          {
            component: fi,
            props: {
              title: "<p>The Estrogen Dominance & Gut Dysbiosis Pattern",
              image: "/images/gutTra.jpg",
              index: 1,
            },
          },
        ],
        illustration: {
          type: "video",
          src: "/videos/MasterGutZoomerV03.mp4",
          alt: "image",
        },
      },
      {
        type: "story",
        id: "cardio1-1",
        name: "story 2",
        selectorName: "The Estrogen Dominance",
        sections: [
          {
            component: Le,
            props: {
              title: "<h1>The Estrogen Dominance & Gut Dysbiosis Pattern</h1>",
            },
          },
          {
            component: xe,
            props: {
              title: "<h2>The Clinical Picture</h2>",
              text: [
                "<p>Rebecca, a 44-year-old marketing director, presented with heavy menstrual bleeding, breast tenderness, mood swings, and weight gain despite hormone replacement therapy.</p>",
                "<p>Her comprehensive gut and hormone testing revealed impaired estrogen clearance due to dysbiotic gut bacteria.</p>",
              ],
            },
          },
          { component: gi, props: { type: "video", src: "/videos/Gut.mp4" } },
          {
            component: Qe,
            props: {
              title: "<h2>Key Biomarkers Working Together</h2>",
              biomarkers: [
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white rounded-t-2sm justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">β-Glucuronidase Activity (≤2300.0 U/mL)</p>
                          <p class="text-mono-regular-400-13 uppercase">Estrogen reactivation</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow arrow-top">2784.0</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>
`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Deoxycholic Acid (DCA) (24.25-75.84 %)</p>
                          <p class="text-mono-regular-400-13 uppercase">Gut inflammation</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow arrow-top">76.8</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Lithocholic Acid (LCA) (24.16-75.75%)</p>
                          <p class="text-mono-regular-400-13 uppercase">Impaired bile acid metabolism</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow">11.7</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Butyrate-producing Bacteria</p>
                          <p class="text-mono-regular-400-13 uppercase">Reduced SCFA production / Impaired gut barrier</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow only-arrow"></div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Enterobacteriaceae (10.0-20.0)</p>
                          <p class="text-mono-regular-400-13 uppercase">Intestinal permeability</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow arrow-top">23.2</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 rounded-b-2sm bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Total Short Chain Fatty Acids (45.4-210.1 micromol/g)</p>
                          <p class="text-mono-regular-400-13 uppercase">Gut dysbiosis</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow">35.3</div>
                      </div>`,
                },
              ],
            },
          },
          {
            component: xe,
            props: {
              title: '<h2 class="s-t">The Clinical Insight</h2>',
              text: [
                "<p>This pattern reveals dysbiotic bacteria driving estrogen recirculation through excessive β-glucuronidase production. Depleted beneficial bacteria cannot produce adequate SCFAs to maintain gut barrier integrity. </p>",
                "<p>Elevated DCA from bacterial overgrowth creates intestinal inflammation, while low LCA indicates impaired bile acid metabolism. </p>",
                "<p>The combination of poor estrogen elimination and inflammatory gut environment perpetuates hormone imbalance despite external hormone therapy.</p>",
              ],
            },
          },
          {
            component: Qe,
            props: {
              title: "<h2>Targeted Supplementation Strategy</h2>",
              biomarkers: [
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Calcium-D-Glucarate</p><p class="text-semi-600-16 text-brand-green">200 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">Oral supplementation of calcium-D-glucarate can inhibit β-glucuronidase, produced by colonic microflora, thereby preventing the deconjugation of detoxified compounds.</p>
                            <p class="with-left-dot text-regular-400-16">This supplement may be effective in reducing fecal β-glucuronidase levels and supporting detoxification pathways.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Lactobacillus rhamnosus GG</p><p class="text-semi-600-16 text-brand-green">10 billion CFU/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">Studies have shown that supplementation with Lactobacillus strains reduced β-glucuronidase activity in the gut, which may help reduce the reactivation of toxins and improve gut microbiome balance. </p>
                            <p class="with-left-dot text-regular-400-16">This supplementation could be considered for lowering β-glucuronidase levels and promoting gut health.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Butyrate (Tributyrin)</p><p class="text-semi-600-16 text-brand-green">300 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16">Tributyrin is a dietary supplement of butyrate. Oral intake of tributyrin can significantly elevate butyrate levels.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Vitamin D</p><p class="text-semi-600-16 text-brand-green">600 IU/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16">Vitamin D influences bile acid metabolism and can help regulate its synthesis in the liver. Therefore, its intake can be considered beneficial for improving bile acid metabolism.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Inulin</p><p class="text-semi-600-16 text-brand-green">10 g/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">Inulin is a naturally occurring compound derived from plants and is used as a prebiotic.</p>
                            <p class="with-left-dot text-regular-400-16">Oral intake of inulin has the potential to increase the abundance of SCFA-producing bacteria, thereby helping to raise acetate, propionate, and butyrate levels in the gut.</p>
                        </div>
                       </div>`,
                },
              ],
            },
          },
          {
            component: fi,
            props: {
              title:
                "<p>The Most Comprehensive Gut Microbiome & Digestive Health Analysis — 300+ Markers",
              index: 2,
            },
          },
        ],
        illustration: { type: "video", src: "/videos/Gut.mp4", alt: "image" },
      },
      {
        type: "overview",
        id: "cardio2-overview",
        name: "overview",
        selectorName: "Test Overview",
        sections: [
          {
            component: Le,
            props: {
              title:
                "<h1>The Most Comprehensive Gut Microbiome & Digestive Health Analysis — 300+ Markers</h1>",
            },
          },
          {
            component: xe,
            props: {
              text: [
                "<p>The Gut Zoomer provides the most comprehensive assessment of gut health available, measuring beneficial bacteria, pathogens, inflammation, permeability, and metabolic function in one test.</p>",
                "<p>Gut Zoomer helps you understand your risk of heart disease and reveals the role genetics play in your cardiac health through the gut-heart axis.</p>",
                "<p>This test identifies specific dysbiosis patterns that standard stool tests miss, enabling targeted interventions rather than generic protocols.</p>",
                "<p>By evaluating the gut ecosystem comprehensively, it reveals connections between gut health and systemic conditions from autoimmunity to mental health.</p>",
              ],
            },
          },
          {
            component: hi,
            props: {
              title: "<h2>Gut Zoomer Sample Report</h2>",
              image: "/images/qrs/qrGutZommer.svg",
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Symptoms to Consider This Test</h2>",
              list: [
                "Chronic diarrhea, constipation, or IBS symptoms",
                "Bloating, gas, and abdominal pain",
                "Food sensitivities or unexplained reactions",
                "Autoimmune conditions",
                "Skin issues (eczema, acne, rosacea)",
                "Mental health issues (anxiety, depression, brain fog)",
              ],
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Key Highlight Markers</h2>",
              list: [
                "100+ beneficial bacteria species (commensals)",
                "75+ pathogenic organisms (bacteria, viruses, parasites, fungi)",
                "7 inflammatory markers (calprotectin, lactoferrin, lysozyme)",
                "6 gut antibodies (ASCA, anti-tTG, anti-gliadin)",
                "14 metabolites (SCFAs, bile acids, β-glucuronidase)",
                "Digestive markers (pancreatic elastase, zonulin, sIgA)",
              ],
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Main Product Highlights</h2>",
              list: [
                "Most comprehensive gut test available with 300+ biomarkers",
                "Multiple testing technologies: DNA sequencing, ELISA, mass spectrometry",
                "Identifies root causes of chronic symptoms beyond standard testing",
                "Includes pathogen detection often missed by culture methods",
                "Provides specific probiotic and prebiotic recommendations",
              ],
            },
          },
        ],
      },
    ],
    Food_Sensitivity: [
      {
        type: "overview",
        id: "cardio2-overview",
        name: "overview",
        headerText: "Food Sensitivity Complete",
        selectorName: "Test Overview",
        sections: [
          {
            component: Le,
            props: {
              title:
                "<h1>Comprehensive Food Sensitivity Testing — 209 Foods & 57 Additives</h1>",
            },
          },
          {
            component: xe,
            props: {
              text: [
                "<p>The Food Sensitivity Complete test identifies IgG- and IgA-mediated immune responses to a broad range of foods, helping you uncover hidden triggers.</p>",
                "<p>Many chronic symptoms stem from unidentified food sensitivities that create ongoing inflammation and immune activation.</p>",
                "<p>This comprehensive panel identifies specific trigger foods, enabling targeted elimination diets rather than broad restrictions.</p>",
                "<p>By measuring both IgG and IgA responses, it captures different types of immune reactions, providing a complete picture of food reactivity.</p>",
              ],
            },
          },
          {
            component: hi,
            props: {
              title: "<h2>Food Sensitivity Complete Sample Report</h2>",
              image: "/images/qrs/qrFood.svg",
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Symptoms to Consider This Test</h2>",
              list: [
                "Digestive issues (bloating, gas, diarrhea, constipation)",
                "Chronic fatigue or brain fog",
                "Headaches or migraines",
                "Joint pain or inflammation",
                "Skin problems (eczema, acne, hives)",
                "Unexplained weight gain or difficulty losing weight",
              ],
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Key Highlight Markers</h2>",
              list: [
                "IgG- and IgA-mediated immune responses to a broad range of foods",
                "209 foods and additives tested",
                "Common allergens: Gluten, dairy, eggs, nuts, soy",
                "Food additives: Preservatives, artificial sweeteners, food dyes",
                "Spices and herbs",
                "Nightshades and lectins",
              ],
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Main Product Highlights</h2>",
              list: [
                "Utilizing protein microarray technology, this comprehensive panel helps identify potential food sensitivities",
                "The test uses high-density microarray technology proven over 95–100% accuracy for detecting IgG and IgA antibodies",
                "Most extensive food panel available",
                "Includes both immediate and delayed reactions",
                "Tests food additives often overlooked in other panels",
              ],
            },
          },
        ],
      },
    ],
    Hormone_Zoomer: [
      {
        type: "story",
        id: "cardio1-1",
        name: "story",
        headerText: "Hormone Zoomer",
        selectorName: "The Postmenopausal Bone Loss",
        sections: [
          {
            component: Le,
            props: {
              title:
                "<h1>The Postmenopausal Bone Loss & Hormone Deficiency Pattern</h1>",
            },
          },
          {
            component: xe,
            props: {
              title: "<h2>The Clinical Picture</h2>",
              text: [
                "<p>Margaret,a 56-year-old teacher, experienced her last menstrual period 18 months ago and recently noticed height loss and back pain. </p>",
                "<p>Her recent DEXA scan showed early osteopenia, and she was concerned about her family history of hip fractures:</p>",
              ],
            },
          },
          {
            component: gi,
            props: { type: "video", src: "/videos/Hormones3D.mp4" },
          },
          {
            component: Qe,
            props: {
              title: "<h2>Key Biomarkers Working Together</h2>",
              biomarkers: [
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white rounded-t-2sm justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Deoxypyridinoline (DPD) (2.6-8.7nmol/mmol)</p>
                          <p class="text-mono-regular-400-13 uppercase">Excessive collagen breakdown</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow arrow-top">12.60</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>
`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Pyridinoline (PYD) (20-40 nmol/mmol)</p>
                          <p class="text-mono-regular-400-13 uppercase">Excessive collagen breakdown</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow arrow-top">67</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Estradiol (0.18-0.81 mcg/g)</p>
                          <p class="text-mono-regular-400-13 uppercase">Reduced osteoblast activity and increased bone resorption</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow">0.13</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Testosterone (0.78-3.11 mcg/g)</p>
                          <p class="text-mono-regular-400-13 uppercase">Decreased bone density</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow">0.57</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Cortisol (Night) (3.2-9.2 mcg/g)</p>
                          <p class="text-mono-regular-400-13 uppercase">Impaired osteoblast function and calcium absorption</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow arrow-top">10.2</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 rounded-b-2sm bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">DHEA (6.77-42.11 mcg/g)</p>
                          <p class="text-mono-regular-400-13 uppercase">Reduced anabolic support for bone formation and repair</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow">5.44</div>
                      </div>`,
                },
              ],
            },
          },
          {
            component: xe,
            props: {
              title: '<h2 class="s-t">The Clinical Insight</h2>',
              text: [
                "<p>This pattern reveals accelerated bone loss due to estrogen deficiency with multiple contributing factors.</p>",
                "<p>Elevated DPD and PYD indicate excessive collagen breakdown exceeding formation. Low estradiol removes osteoblast protective signaling and allows unopposed osteoclast activity. Decreased testosterone reduces periosteal bone formation. Elevated nighttime cortisol inhibits osteoblast function and calcium absorption.</p>",
                "<p>DHEA depletion removes anabolic bone support, while oxidative stress accelerates bone matrix degradation and impairs repair mechanisms.</p>",
              ],
            },
          },
          {
            component: Qe,
            props: {
              title: "<h2>Comprehensive Bone Protection Protocol</h2>",
              biomarkers: [
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Calcium</p><p class="text-semi-600-16 text-brand-green">1500 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">Calcium supplementation reduces bone resorption by inhibiting osteoclast activity, leading to decreased collagen breakdown.</p>
                            <p class="with-left-dot text-regular-400-16 mb-24">Calcium MCHC is a more bioavailable form of calcium and includes phosphorus, collagen, and other minerals and is a preferred version for better absorption.</p>
                            <p class="with-left-dot text-regular-400-16">This supplementation lowers the release of deoxypyridinoline (DPD) into circulation. As a result, urinary DPD levels, a marker of bone degradation, decrease</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Phytoestrogens</p><p class="text-semi-600-16 text-brand-green">50 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">Phytoestrogens, by binding to estrogen receptors, mimic estrogenic effects and reduce bone resorption. This leads to decreased collagen breakdown, lowering urinary pyridinoline (PYD), a marker of bone degradation.</p>
                            <p class="with-left-dot text-regular-400-16">Additionally, they modulate osteoclast activity, further reducing PYD levels.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Absorbable 3,3'-Diindolylmethane (DIM)</p><p class="text-semi-600-16 text-brand-green">108 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">Absorbable 3,3'-Diindolylmethane (DIM) supplement increases cortisol by modulating the aryl hydrocarbon receptor (AhR) pathway, which influences the adrenal gland's function. This modulation can lead to increased activity of enzymes involved in steroidogenesis, thereby elevating cortisol production. </p>
                            <p class="with-left-dot text-regular-400-16">Additionally, DIM affects hormone metabolism and balance, contributing to higher cortisol</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Vitamin D</p><p class="text-semi-600-16 text-brand-green">600 IU/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">Vitamin D supplements increase testosterone by enhancing the expression of testosterone synthesis-related genes in the testes and improving calcium absorption, which is vital for testosterone production.</p>
                            <p class="with-left-dot text-regular-400-16">Additionally, Vitamin D receptors in the Leydig cells of the testes facilitate the production of testosterone. This hormone synthesis boost is particularly notable in individuals with Vitamin D deficiency.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">DHEA</p><p class="text-semi-600-16 text-brand-green"></p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">DHEA supplements boost DHEA levels by directly increasing the availability of this hormone in the bloodstream. </p>
                            <p class="with-left-dot text-regular-400-16">This supplemental DHEA is absorbed into the body and, once in circulation, contributes to higher overall DHEA concentrations.</p>
                        </div>
                       </div>`,
                },
              ],
            },
          },
          {
            component: fi,
            props: {
              title: "<p>Complete Hormone Metabolism & Balance Assessment",
              index: 1,
            },
          },
        ],
        illustration: {
          type: "video",
          src: "/videos/Hormones3D.mp4",
          alt: "image",
        },
      },
      {
        type: "overview",
        id: "cardio2-overview",
        name: "overview",
        selectorName: "Test Overview",
        sections: [
          {
            component: Le,
            props: {
              title:
                "<h1>Complete Hormone Metabolism & Balance Assessment</h1>",
            },
          },
          {
            component: xe,
            props: {
              text: [
                "<p>The Hormone Zoomer provides insights into hormonal imbalances, circadian rhythm function, and stress response.</p>",
                "<p>This comprehensive approach evaluates not just hormone levels but how they're metabolized and cleared, revealing why some patients don't respond to hormone therapy.</p>",
                "<p>The Hormone Zoomer offers a comprehensive evaluation of hormone levels, including cortisol, estrogen, progesterone, testosterone, and endocrine disruptors.</p>",
                "<p>By identifying toxic interference and metabolic patterns, it enables truly personalized hormone optimization strategies.</p>",
              ],
            },
          },
          {
            component: hi,
            props: {
              title: "<h2>Hormone Zoomer (Female) Test Sample Report</h2>",
              image: "/images/qrs/qrHormones.svg",
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Symptoms to Consider This Test</h2>",
              list: [
                "Fatigue, low energy, or burnout",
                "Weight gain or difficulty losing weight",
                "Mood swings, anxiety, or depression",
                "Irregular menstrual cycles or PMS/PMDD",
                "Low libido or sexual dysfunction",
                "Sleep disturbances or insomnia",
              ],
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Key Highlight Markers</h2>",
              list: [
                "Cortisol, estrogen, progesterone, and testosterone at multiple time points",
                "Estrogen, progesterone, testosterone, DHEA, cortisol, melatonin, and their metabolites",
                "Estrogen metabolism pathways (2-OH, 4-OH, 16-OH)",
                "Endocrine disruptors (e.g., BPA, phthalates), bone turnover markers (DPD, PYD), and oxidative stress (8OHdG)",
                "Methylation markers affecting hormone metabolism",
                "Diurnal cortisol and melatonin patterns",
              ],
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Main Product Highlights</h2>",
              list: [
                "Utilizing liquid chromatography-tandem mass spectrometry (LC-MS/MS) technology for precision",
                "Combines salivary (bioavailable) and urinary (metabolites) testing",
                "Uses LC-MS/MS and GC-MS/MS methods for highly sensitive, lab-grade hormone and toxin detection",
                "Evaluates both hormone levels and detoxification pathways",
                "Identifies endocrine disruptors interfering with hormone function",
              ],
            },
          },
        ],
      },
    ],
    Genetics_Testing_Suite: [
      {
        type: "overview",
        id: "cardio2-overview",
        name: "overview",
        headerText: "Genetics Testing Suite",
        selectorName: "Test Overview",
        sections: [
          {
            component: Le,
            props: {
              title:
                "<h1>Comprehensive Genetic Blueprint for Personalized Health Optimization</h1>",
            },
          },
          {
            component: xe,
            props: {
              text: [
                "<p>The Methylation Panel evaluates genetic and biochemical pathways involved in detoxification, DNA repair, and overall cellular function. Genetic testing reveals inherited predispositions that explain why standard treatments fail for some patients.</p>",
                "<p>The Toxin Genetics Test provides insights into detoxification pathways, helping identify genetic predispositions that may influence toxin-related health risks.</p>",
                "<p>This comprehensive genetic analysis enables truly personalized medicine, optimizing interventions based on individual biochemistry rather than population averages.</p>",
                "<p>Understanding genetic variants guides targeted supplementation, dietary modifications, and lifestyle interventions for optimal health expression.</p>",
              ],
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Symptoms to Consider This Test</h2>",
              list: [
                "Family history of chronic disease",
                "Treatment-resistant conditions",
                "Multiple chemical sensitivities",
                "Poor response to medications or supplements",
                "Unexplained chronic symptoms",
                "Interest in preventive/personalized medicine",
              ],
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Key Highlight Markers</h2>",
              list: [
                "Cardiovascular Genetics: ApoE, MTHFR, ACE, 9p21 variants",
                "Toxin Genetics: SNPs (single nucleotide polymorphisms) in detoxification genes, Phase I & II pathways",
                "Methylation Panel: Key genetic variations that affect methylation pathways, MTHFR, COMT, CBS",
                "Oxidative Stress Genetics: 32 genetic variants in antioxidant enzymes",
                "Nutrition Genetics: Vitamin metabolism, mineral absorption genes",
              ],
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Main Product Highlights</h2>",
              list: [
                "Real-Time PCR Technology enables precise and highly sensitive detection of genetic variations",
                "Comprehensive coverage of health-relevant genetic variants",
                "Actionable results with specific intervention strategies",
                "One-time testing provides lifetime insights",
                "Guides personalized supplementation and lifestyle",
              ],
            },
          },
        ],
      },
    ],
    Oxidative_Stress: [
      {
        type: "story",
        id: "cardio1-1",
        name: "story",
        headerText: "Oxidative Stress",
        selectorName: "The Chronic Fatigue",
        sections: [
          {
            component: Le,
            props: {
              title:
                "<h1>The Chronic Fatigue & Multi-System Oxidative Damage Pattern</h1>",
            },
          },
          {
            component: xe,
            props: {
              title: "<h2>The Clinical Picture</h2>",
              text: [
                "<p>Robert, a 48-year-old IT director, experienced progressive fatigue over 18 months that no longer improved with rest.</p>",
                "<p>He had difficulty concentrating at work, muscle aches after minimal exercise, and felt “aged beyond his years” despite normal routine blood tests:</p>",
              ],
            },
          },
          {
            component: gi,
            props: { type: "video", src: "/videos/OxidativeStressV03.mp4" },
          },
          {
            component: Qe,
            props: {
              title: "<h2>Key Biomarkers Working Together</h2>",
              biomarkers: [
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white rounded-t-2sm justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">8-Hydroxy-2'-deoxyguanosine (≤4 ug/g)</p>
                          <p class="text-mono-regular-400-13 uppercase">Oxidative Injury</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow arrow-top">5.44</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>
`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Protein Dityrosine (≤5 ug/g)</p>
                          <p class="text-mono-regular-400-13 uppercase">Increased protein cross-linking</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow arrow-top">5.45</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Lipid Peroxidation Markers (≤163.53 ug/g)</p>
                          <p class="text-mono-regular-400-13 uppercase">Membrane damage indicators</p>
                        </div>
                        <div class="biomarker-tag tag-orange with-arrow arrow-top">146.71</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Nitrotyrosine (≤285.69 ug/g)</p>
                          <p class="text-mono-regular-400-13 uppercase">Protein nitration</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow arrow-top">318.62</div>
                      </div><div class="hr h-2 bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]"></div>`,
                },
                {
                  test: `<div class="flex pl-20 pr-10 pt-20 pb-16 rounded-b-2sm bg-white justify-between items-center gap-10">
                        <div>
                          <p class="text-semi-600-16 mb-8">Nitrative Stress Biomarkers (≤107.47 ug/g)</p>
                          <p class="text-mono-regular-400-13 uppercase">Indicators of protein damage and disrupted signaling</p>
                        </div>
                        <div class="biomarker-tag tag-red with-arrow arrow-top">127.88</div>
                      </div>`,
                },
              ],
            },
          },
          {
            component: xe,
            props: {
              title: '<h2 class="s-t">The Clinical Insight</h2>',
              text: [
                "<p>This pattern reveals widespread oxidative and nitrative damage affecting multiple cellular systems.</p>",
                "<p>Elevated 8-OHdG indicates severe oxidative injury to genetic material, potentially affecting cellular repair and energy production. Increased protein dityrosine formation shows extensive protein cross-linking and enzyme dysfunction.</p>",
                "<p>Lipid peroxidation damages cellular membranes, impairing energy transport and cellular communication.</p>",
                "<p>Elevated nitrotyrosine and nitrative stress markers reveal protein nitration processes that create dysfunctional enzymes and disrupt normal cellular signaling pathways.</p>",
              ],
            },
          },
          {
            component: Qe,
            props: {
              title: "<h2>Neuroprotective Support Protocol</h2>",
              biomarkers: [
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Creatine</p><p class="text-semi-600-16 text-brand-green">3 g/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16">Creatine supplements decrease 8-Hydroxy-2'-deoxyguanosine by enhancing cellular energy production, reducing oxidative stress, and indirectly protecting DNA from oxidative damage, as lower oxidative stress levels correlate with reduced 8-OHdG formation.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">N-acetyl cysteine (NAC)</p><p class="text-semi-600-16 text-brand-green">250 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16 mb-24">NAC is known for its antioxidant properties and its role in supporting glutathione production, a crucial antioxidant enzyme in the body. </p>
                            <p class="with-left-dot text-regular-400-16">While there is limited direct evidence linking NAC supplementation to the reduction of dityrosine, dityrosine formation is associated with oxidative stress and protein damage. NAC may indirectly help mitigate dityrosine formation by reducing oxidative stress.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Resveratrol</p><p class="text-semi-600-16 text-brand-green">500 mg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16">Resveratrol supplements decrease nitrotyrosine by inhibiting nitric oxide synthase (NOS) activity, reducing excessive nitric oxide production, and consequently decreasing the formation of nitrotyrosine, a marker of oxidative and nitrosative stress.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm mb-15">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Curcumin</p><p class="text-semi-600-16 text-brand-green">250 mg/daY</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16">Curcumin inhibits the activation of NF-κB, which in turn suppresses the expression of enzymes involved in lipid peroxidation.</p>
                        </div>
                       </div>`,
                },
                {
                  test: `<div class="bg-white p-10 rounded-2sm">
                        <div class="flex px-16 mb-16 h-50 rounded-sm justify-between items-center bg-[linear-gradient(270deg,_#E8EFFF_-13.01%,_#C1E8FF_1.33%,_#FFF6FE_26.42%,_#E6DFFF_49.72%,_#FFFFFF_70.33%,_#D5E8FF_98.11%,_#FFFFFF_122.3%,_#F6EAFF_133.06%,_#E8EFFF_152.77%)]">
                            <p class="text-semi-600-16 text-brand-green">Selenium</p><p class="text-semi-600-16 text-brand-green">55 mcg/day</p>
                        </div>
                        <div class="px-30 mb-20">
                            <p class="with-left-dot text-regular-400-16">Selenium supplements decrease 8-Hydroxyguanine by supporting the activity of selenoproteins, such as glutathione peroxidase, which reduce oxidative stress and limit DNA damage, including 8-Hydroxyguanine formation.</p>
                        </div>
                       </div>`,
                },
              ],
            },
          },
          {
            component: fi,
            props: {
              title:
                "<p>The Genetic Antioxidant Deficiency & Accelerated Aging Pattern",
              index: 1,
            },
          },
        ],
        illustration: {
          type: "video",
          src: "/videos/OxidativeStressV03.mp4",
          alt: "image",
        },
      },
      {
        type: "overview",
        id: "cardio2-overview",
        name: "overview",
        selectorName: "Test Overview",
        sections: [
          {
            component: Le,
            props: {
              title:
                "<h1>Advanced Oxidative Damage & Antioxidant Capacity Assessment</h1>",
            },
          },
          {
            component: xe,
            props: {
              text: [
                "<p>The Oxidative Stress Profile evaluates oxidative damage, antioxidant capacity, and cellular resilience, key factors in understanding the biological rate of aging. Oxidative stress is a fundamental driver of aging and chronic disease, yet standard tests don’t measure it comprehensively.</p>",
                "<p>This panel uniquely combines genetic predisposition with current oxidative damage, revealing both inherited vulnerabilities and current status.</p>",
                "<p>By identifying specific types of oxidative damage and antioxidant deficiencies, it enables targeted interventions to slow aging and prevent disease.</p>",
              ],
            },
          },
          {
            component: hi,
            props: {
              title: "<h2>Oxidative Stress Profile Sample Report</h2>",
              image: "/images/qrs/qrOxidative.svg",
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Symptoms to Consider This Test</h2>",
              list: [
                "Premature aging or wrinkles",
                "Chronic fatigue or low energy",
                "Poor exercise recovery",
                "Chronic inflammation",
                "Cardiovascular disease risk",
                "Neurodegenerative concerns",
              ],
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Key Highlight Markers</h2>",
              list: [
                "16 oxidative damage markers to your DNA, RNA, protein, lipids",
                "32 genetic variants to personalize your genetic disposition to antioxidant enzymes",
                "DNA damage: 8-OHdG, 8-hydroxyguanine",
                "Lipid peroxidation: 8-iso-PGF2α, MDA",
                "Protein oxidation: Dityrosine, nitrotyrosine",
                "Antioxidant genes: SOD, GPX, CAT variants",
              ],
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Main Product Highlights</h2>",
              list: [
                "Using advanced liquid chromatography–mass spectrometry (LC-MS/MS), the test measures 16 urinary markers of oxidative damage",
                "29 Genetic Markers & Enzymatic Antioxidant Response Markers",
                "Only test combining current damage with genetic predisposition",
                "Provides oxidative damage score compared to age group",
                "Guides personalized antioxidant strategies",
              ],
            },
          },
        ],
      },
    ],
    Nutrition: [
      {
        type: "overview",
        id: "cardio2-overview",
        name: "overview",
        headerText: "Micronutrient Panel",
        selectorName: "Test Overview",
        sections: [
          {
            component: Le,
            props: {
              title:
                "<h1>Comprehensive Cellular Nutrition Assessment — 40+ Nutrients</h1>",
            },
          },
          {
            component: xe,
            props: {
              text: [
                "<p>The Micronutrient Panel provides insights into nutrient status, absorption, and potential deficiencies, helping guide personalized supplementation and dietary strategies. Nutrient deficiencies are epidemic yet often subclinical, contributing to chronic disease and suboptimal health.</p>",
                "<p>This test measures both intracellular (long-term) and extracellular (current) nutrient status, providing a complete picture that standard serum tests miss. The NutriPro version adds genetic analysis, revealing why certain nutrients are chronically low despite supplementation.</p>",
              ],
            },
          },
          {
            component: hi,
            props: {
              title: "<h2>Micronutrient Panel Sample Report</h2>",
              image: "/images/qrs/qrMicro.svg",
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Symptoms to Consider This Test</h2>",
              list: [
                "Chronic fatigue or low energy",
                "Frequent infections or poor immunity",
                "Poor wound healing",
                "Hair loss or brittle nails",
                "Mood disorders or cognitive issues",
                "Osteoporosis or muscle weakness",
              ],
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Key Highlight Markers</h2>",
              list: [
                "Intracellular and extracellular levels of essential vitamins, minerals, antioxidants, fatty acids, and amino acids",
                "Vitamins: A, B-complex, C, D, E, K1, K2",
                "Minerals: Magnesium, zinc, selenium, iron, copper",
                "Antioxidants: CoQ10, glutathione, alpha-lipoic acid",
                "Fatty acids: Omega-3 and omega-6 profiles",
                "Amino acids: All essential and conditionally essential",
              ],
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Main Product Highlights</h2>",
              list: [
                "Utilizing advanced liquid chromatography–mass spectrometry (LC-MS/MS) technology",
                "Measures intracellular & extracellular micronutrient levels to assess the body’s functional need",
                "NutriPro adds genetic testing for nutrient metabolism",
                "Most comprehensive nutrient assessment available",
                "Identifies both deficiencies and functional insufficiencies",
              ],
            },
          },
        ],
      },
    ],
    Autoimmunity: [
      {
        type: "overview",
        id: "cardio2-overview",
        name: "overview",
        headerText: "Autoimmune Zoomer",
        selectorName: "Test Overview",
        sections: [
          {
            component: Le,
            props: {
              title:
                "<h1>Comprehensive Autoimmune Disease Screen — 30+ Tissue Antibodies</h1>",
            },
          },
          {
            component: xe,
            props: {
              text: [
                "<p>The Autoimmune Zoomer aids in detecting autoantibodies and antigens associated with systemic autoimmunity, including thyroid disorders, rheumatoid arthritis, and type 1 diabetes.</p>",
                "<p>Autoimmune diseases often simmer for years before diagnosis, causing preventable tissue damage.</p>",
                "<p>This comprehensive panel detects autoimmune activity in its earliest stages when interventions are most effective.</p>",
                "<p>By identifying specific antibody patterns, it helps differentiate between various autoimmune conditions and guides targeted immune modulation strategies.</p>",
              ],
            },
          },
          {
            component: hi,
            props: {
              title: "<h2>Autoimmune Zoomer Sample Report</h2>",
              image: "/images/qrs/qrAuto.svg",
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Symptoms to Consider This Test</h2>",
              list: [
                "Joint pain, stiffness, or swelling",
                "Chronic fatigue or muscle weakness",
                "Skin rashes or photosensitivity",
                "Unexplained fever or inflammation",
                "Multiple seemingly unrelated symptoms",
                "Family history of autoimmune disease",
              ],
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Key Highlight Markers</h2>",
              list: [
                "Autoantibodies and antigens associated with systemic autoimmunity, thyroid disorders, rheumatoid arthritis, and type 1 diabetes",
                "Thyroid antibodies: TPO, thyroglobulin, TSH receptor",
                "Systemic markers: ANA, ENA, anti-dsDNA",
                "Tissue-specific antibodies: Myelin, insulin, intrinsic factor",
                "Inflammatory markers correlating with autoimmune activity",
                "Early detection markers appearing before clinical symptoms",
              ],
            },
          },
          {
            component: ue,
            props: {
              title: "<h2>Main Product Highlights</h2>",
              list: [
                "Utilizing bio-chip immunofluorescence and ELISA technology, this panel provides early detection and precise monitoring",
                "Broad spectrum of autoantibodies detects autoantibodies and antigens associated with systemic autoimmunity",
                "More comprehensive than standard ANA testing",
                "Identifies autoimmune activity years before clinical diagnosis",
                "Monitors disease activity and treatment response",
              ],
            },
          },
        ],
      },
    ],
  },
  vg = ve({
    __name: "StoryWrapper",
    setup(e) {
      const t = Xe(),
        i = er(() => (t.activeStory != null ? mg[t.activeStory] || [] : [])),
        s = er(() =>
          i.value.map((n) => ({
            title: n.headerText || !1,
            type: n.type || "",
            name: n.selectorName || "",
          })),
        );
      return (n, r) => (
        I(),
        z("div", null, [
          Be(
            dh,
            {
              data: L(s),
              class: G([
                "transition-all duration-500 ease-in-out opacity-0 -translate-y-50 pointer-events-none",
                {
                  "opacity-100 translate-y-0 !pointer-events-auto":
                    L(t).activeState === "story",
                },
              ]),
            },
            null,
            8,
            ["data", "class"],
          ),
          E(
            "div",
            {
              class: G([
                "fixed w-full h-full top-0 left-0 z-10 pointer-events-none",
                { "!pointer-events-auto": L(t).activeState === "story" },
              ]),
            },
            [
              E(
                "div",
                {
                  class: G([
                    "transition-all opacity-0 duration-600 delay-0 ease-in-out",
                    { "opacity-100 delay-600": L(t).activeState === "story" },
                  ]),
                },
                [
                  L(i).length > 0
                    ? (I(),
                      Pi(
                        Lh,
                        { key: 0, id: "content", content: L(i) },
                        null,
                        8,
                        ["content"],
                      ))
                    : wt("", !0),
                ],
                2,
              ),
            ],
            2,
          ),
        ])
      );
    },
  }),
  xg = Object.assign(vg, { __name: "StoryComponentsStoryWrapper" }),
  Fg = ri("/images/svg/bigLogo.svg"),
  wg = {
    class:
      "lg:h-[12vw] z-10 md:h-[15vw] xs:h-[25vw] lg:w-[12vw] md:w-[15vw] xs:w-[25vw] relative flex items-center justify-center transition-opacity duration-400 ease-in-out",
  },
  bg = ve({
    __name: "preloader",
    setup(e) {
      const t = Xe(),
        { isDesktop: i, isRealTablet: s, isMobile: n, isSafari: r } = ht(),
        a = $(null);
      return (
        t.$onAction(({ name: o }) => {
          if (o === "setSceneLoaded") {
            if (n || s.value) return;
            const l = P.timeline({ paused: !1 }),
              d = P.timeline({ paused: !1 });
            (l.to("#preloaderMask radialGradient", {
              duration: 3,
              attr: { r: "100%" },
              transformOrigin: "center center",
              ease: "power2.inOut",
            }),
              d.to("#preloaderMask radialGradient .first", {
                duration: 3,
                transformOrigin: "center center",
                attr: { offset: "100%" },
                ease: "power2.inOut",
              }),
              setTimeout(() => {
                a.value.style.display = "none";
              }, 2500));
          }
        }),
        (o, l) => (
          I(),
          z(
            "div",
            {
              ref_key: "preloader",
              ref: a,
              id: "preloader",
              class: G([
                "flex justify-center items-center fixed z-50 bg-white transition-opacity lg:duration-400 xs:duration-700 lg:delay-1000 xs:delay-1300 ease-in-out",
                {
                  "pointer-events-none": L(t).isSceneLoaded,
                  "opacity-0": L(t).isSceneLoaded && (L(n) || L(s)),
                  safari: L(i) && !L(s) && L(r),
                  "opacity-1": L(t).isSceneLoaded && L(i) && !L(s) && L(r),
                },
              ]),
            },
            [
              E("div", wg, [
                l[0] ||
                  (l[0] = E(
                    "div",
                    {
                      class:
                        "blur-circle bg-brand-blue-100 absolute w-full h-full rounded-full transform scale-200 top-[-1.5vw] left-0 blur-[20px]",
                    },
                    null,
                    -1,
                  )),
                E(
                  "div",
                  {
                    class: G([
                      "purple-circle bg-brand-purple-100 absolute w-full h-full rounded-full transform scale-0 top-[-1.5vw] left-0 blur-[20px] transition-transform duration-1000 ease-in-out",
                      { "lg:scale-1000": L(t).isSceneLoaded },
                    ]),
                  },
                  null,
                  2,
                ),
                l[1] ||
                  (l[1] = E(
                    "div",
                    {
                      class:
                        "circle circle-1 absolute top-[-1.5vw] left-0 w-full h-full rounded-full border-1 border-brand-white-200",
                    },
                    null,
                    -1,
                  )),
                l[2] ||
                  (l[2] = E(
                    "div",
                    {
                      class:
                        "circle circle-2 absolute top-[-1.5vw] left-0 w-full h-full rounded-full border-1 border-brand-white-200",
                    },
                    null,
                    -1,
                  )),
                l[3] ||
                  (l[3] = E(
                    "div",
                    {
                      class:
                        "circle circle-3 absolute top-[-1.5vw] left-0 w-full h-full rounded-full border-1 border-brand-white-200",
                    },
                    null,
                    -1,
                  )),
                l[4] ||
                  (l[4] = E(
                    "img",
                    {
                      alt: "logo",
                      src: Fg,
                      class:
                        "lg:w-[8vw] lg:-translate-y-[0.7vw] md:w-[14vw] xs:w-[20vw] transition-all duration-400 ease-in-out",
                    },
                    null,
                    -1,
                  )),
                E(
                  "div",
                  {
                    class: G([
                      "purple-circle bg-white absolute w-full h-full rounded-full transform scale-0 top-[-1.5vw] left-0 blur-[20px] transition-transform delay-450 duration-900 ease-in-out",
                      { "lg:scale-1000": L(t).isSceneLoaded },
                    ]),
                  },
                  null,
                  2,
                ),
              ]),
              l[5] ||
                (l[5] = Oi(
                  '<svg id="preloaderMask" width="100%" height="100%" viewBox="0 0 100% 100%" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" data-v-6b9081fa><defs data-v-6b9081fa><radialGradient id="gradMask" cx="50%" cy="50%" r="0%" data-v-6b9081fa><stop class="first" offset="0%" stop-color="black" data-v-6b9081fa></stop><stop offset="100%" stop-color="white" data-v-6b9081fa></stop></radialGradient><mask id="fadeMask" data-v-6b9081fa><rect width="100%" height="100%" fill="url(#gradMask)" data-v-6b9081fa></rect></mask></defs><rect width="100%" height="100%" fill="white" mask="url(#fadeMask)" data-v-6b9081fa></rect></svg>',
                  1,
                )),
            ],
            2,
          )
        )
      );
    },
  }),
  yg = Object.assign(Te(bg, [["__scopeId", "data-v-6b9081fa"]]), {
    __name: "Preloader",
  }),
  Ag = ri("/audio/Music.mp3"),
  Eg = {
    class:
      "w-48 h-20 relative mb-2 bg-brand-green-200 rounded-full flex justify-center items-center",
  },
  _g = {
    class:
      "h-20 w-72 relative bg-brand-green-200 rounded-full flex justify-center items-center",
  },
  Cg = { class: "text-bold-700-12 text-white" },
  Sg = ve({
    __name: "soundSwicher",
    setup(e) {
      const t = Xe();
      t.$onAction(({ name: u }) => {
        u === "playSound" && o();
      });
      const i = $(!1),
        s = $(null),
        n = $(!1),
        r = (u) => {},
        a = () => {
          s.value.paused ? o() : d();
        };
      xs(() => {
        if (!s.value) return;
        ((s.value.volume = 0), s.value.addEventListener("error", r));
        const u = () => {
          s.value?.removeEventListener("canplay", u);
        };
        (s.value.addEventListener("canplay", u),
          s.value.load(),
          document.addEventListener("visibilitychange", () => {
            if (document.hidden)
              try {
                s.value?.pause();
              } catch {}
            else i.value && o();
          }));
      });
      const o = () => {
          if (!(!s.value || n.value)) {
            if (s.value.readyState < 2) {
              const u = () => {
                (s.value?.removeEventListener("canplay", u), l());
              };
              (s.value.addEventListener("canplay", u), s.value.load());
              return;
            }
            l();
          }
        },
        l = () => {
          if (!s.value || n.value) return;
          ((n.value = !0), (i.value = !0));
          const u = s.value.play();
          u !== void 0
            ? u
                .then(() => {
                  (P.to(s.value, {
                    volume: 0.2,
                    duration: 0.5,
                    ease: "power2.inOut",
                    overwrite: "auto",
                  }),
                    (n.value = !1));
                })
                .catch((c) => {
                  ((n.value = !1), (i.value = !1));
                })
            : (P.to(s.value, {
                volume: 0.2,
                duration: 0.5,
                ease: "power2.inOut",
                overwrite: "auto",
              }),
              (n.value = !1));
        },
        d = () => {
          ((i.value = !1),
            s.value &&
              P.to(s.value, {
                volume: 0,
                duration: 0.5,
                ease: "power2.inOut",
                overwrite: "auto",
                onComplete: () => {
                  if (s.value)
                    try {
                      s.value.pause();
                    } catch {}
                },
              }));
        };
      return (u, c) => (
        I(),
        z(
          "div",
          {
            class: G([
              "sound fixed bottom-20 left-20 z-41 md:block xs:hidden cursor-pointer transition-all opacity-0 -translate-x-90 delay-2100 duration-600 ease-in-out",
              { "opacity-100 translate-x-0": L(t).isSceneLoaded },
            ]),
            onClick: a,
          },
          [
            E("div", Eg, [
              E(
                "div",
                {
                  class: G([
                    "h-12 w-5 rounded-full circle circle-left",
                    { animated: i.value, spaced: !i.value },
                  ]),
                },
                null,
                2,
              ),
              E(
                "div",
                {
                  class: G([
                    "h-12 w-5 rounded-full circle circle-left",
                    { animated: i.value, spaced: !i.value },
                  ]),
                },
                null,
                2,
              ),
              E(
                "div",
                {
                  class: G([
                    "h-12 w-5 rounded-full circle circle-left",
                    { animated: i.value, spaced: !i.value },
                  ]),
                },
                null,
                2,
              ),
              E(
                "div",
                {
                  class: G([
                    "h-12 w-5 rounded-full circle circle-left",
                    { animated: i.value, spaced: !i.value },
                  ]),
                },
                null,
                2,
              ),
              E(
                "div",
                {
                  class: G([
                    "h-12 w-5 rounded-full circle circle-left",
                    { animated: i.value, spaced: !i.value },
                  ]),
                },
                null,
                2,
              ),
              E(
                "div",
                {
                  class: G([
                    "h-12 w-5 rounded-full circle circle-left",
                    { animated: i.value, spaced: !i.value },
                  ]),
                },
                null,
                2,
              ),
              E(
                "div",
                {
                  class: G([
                    "h-12 w-5 rounded-full circle circle-center",
                    { animated: i.value, spaced: !i.value },
                  ]),
                },
                null,
                2,
              ),
              E(
                "div",
                {
                  class: G([
                    "h-12 w-5 rounded-full circle circle-right",
                    { animated: i.value, spaced: !i.value },
                  ]),
                },
                null,
                2,
              ),
              E(
                "div",
                {
                  class: G([
                    "h-12 w-5 rounded-full circle circle-right",
                    { animated: i.value, spaced: !i.value },
                  ]),
                },
                null,
                2,
              ),
              E(
                "div",
                {
                  class: G([
                    "h-12 w-5 rounded-full circle circle-right",
                    { animated: i.value, spaced: !i.value },
                  ]),
                },
                null,
                2,
              ),
              E(
                "div",
                {
                  class: G([
                    "h-12 w-5 rounded-full circle circle-right",
                    { animated: i.value, spaced: !i.value },
                  ]),
                },
                null,
                2,
              ),
              E(
                "div",
                {
                  class: G([
                    "h-12 w-5 rounded-full circle circle-right",
                    { animated: i.value, spaced: !i.value },
                  ]),
                },
                null,
                2,
              ),
              E(
                "div",
                {
                  class: G([
                    "h-12 w-5 rounded-full circle circle-right",
                    { animated: i.value, spaced: !i.value },
                  ]),
                },
                null,
                2,
              ),
            ]),
            E("div", _g, [
              E("p", Cg, at(i.value ? "Sound on" : "Sound off"), 1),
            ]),
            E(
              "audio",
              { ref_key: "audio", ref: s, loop: "", onError: r },
              c[0] ||
                (c[0] = [
                  E("source", { type: "audio/mpeg", src: Ag }, null, -1),
                ]),
              544,
            ),
          ],
          2,
        )
      );
    },
  }),
  Tg = Object.assign(Te(Sg, [["__scopeId", "data-v-aabee8c7"]]), {
    __name: "SoundSwicher",
  }),
  Dg = { class: "home-page" },
  Mg = ve({
    __name: "index",
    setup(e) {
      return (t, i) => {
        const s = Cl,
          n = bl,
          r = Ql;
        return (
          I(),
          z("div", Dg, [
            Be(n, null, {
              default: tr(() => [
                Be(th),
                Be(du),
                Be(jf),
                Be(of),
                Be(xg),
                Be(s),
              ]),
              _: 1,
            }),
            Be(r),
            Be(Tg),
            Be(yg),
          ])
        );
      };
    },
  }),
  Pg = Te(Mg, [["__scopeId", "data-v-67bb2039"]]);
export { Pg as default };
