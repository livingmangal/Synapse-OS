import {
  d as Ff,
  s as Bf,
  o as kf,
  Z as zf,
  h as Hf,
  y as Vf,
  $ as Gf,
  S as Wf,
  a as Xf,
  r as Kc,
  k as Yf,
  F as Va,
} from "./DdtYbjEm.js";
const qf = Symbol.for("nuxt:client-only"),
  xS = Ff({
    name: "ClientOnly",
    inheritAttrs: !1,
    props: ["fallback", "placeholder", "placeholderTag", "fallbackTag"],
    setup(s, { slots: e, attrs: t }) {
      const n = Bf(!1);
      kf(() => {
        n.value = !0;
      });
      const i = Gf();
      return (
        i && (i._nuxtClientOnly = !0),
        Wf(qf, !0),
        () => {
          if (n.value) {
            const l = e.default?.();
            return l && l.length === 1 ? [zf(l[0], t)] : l;
          }
          const r = e.fallback || e.placeholder;
          if (r) return Hf(r);
          const a = s.fallback || s.placeholder || "",
            o = s.fallbackTag || s.placeholderTag || "span";
          return Vf(o, t, a);
        }
      );
    },
  });
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ const Ql = "179",
  Cr = { ROTATE: 0, DOLLY: 1, PAN: 2 },
  br = { ROTATE: 0, PAN: 1, DOLLY_PAN: 2, DOLLY_ROTATE: 3 },
  jf = 0,
  Zc = 1,
  Kf = 2,
  Yu = 1,
  Zf = 2,
  ei = 3,
  li = 0,
  Jt = 1,
  Fn = 2,
  ai = 0,
  Pr = 1,
  $c = 2,
  Jc = 3,
  Qc = 4,
  $f = 5,
  ji = 100,
  Jf = 101,
  Qf = 102,
  ep = 103,
  tp = 104,
  np = 200,
  ip = 201,
  rp = 202,
  sp = 203,
  qo = 204,
  jo = 205,
  ap = 206,
  op = 207,
  lp = 208,
  cp = 209,
  hp = 210,
  up = 211,
  dp = 212,
  fp = 213,
  pp = 214,
  Ko = 0,
  Zo = 1,
  $o = 2,
  Fr = 3,
  Jo = 4,
  Qo = 5,
  el = 6,
  tl = 7,
  qu = 0,
  mp = 1,
  _p = 2,
  Ai = 0,
  gp = 1,
  xp = 2,
  vp = 3,
  yp = 4,
  Mp = 5,
  Sp = 6,
  Tp = 7,
  eh = "attached",
  Ep = "detached",
  Br = 300,
  kr = 301,
  zr = 302,
  nl = 303,
  il = 304,
  Ga = 306,
  Hr = 1e3,
  kt = 1001,
  Pa = 1002,
  qt = 1003,
  ju = 1004,
  ms = 1005,
  wt = 1006,
  ya = 1007,
  ri = 1008,
  th = 1008,
  fn = 1009,
  ec = 1010,
  tc = 1011,
  bs = 1012,
  Wa = 1013,
  Ci = 1014,
  $t = 1015,
  Li = 1016,
  nc = 1017,
  ic = 1018,
  As = 1020,
  Ku = 35902,
  Zu = 1021,
  $u = 1022,
  zt = 1023,
  ws = 1026,
  Rs = 1027,
  rc = 1028,
  sc = 1029,
  Ju = 1030,
  ac = 1031,
  oc = 1033,
  Ma = 33776,
  Sa = 33777,
  Ta = 33778,
  Ea = 33779,
  rl = 35840,
  sl = 35841,
  al = 35842,
  ol = 35843,
  ll = 36196,
  cl = 37492,
  hl = 37496,
  ul = 37808,
  dl = 37809,
  fl = 37810,
  pl = 37811,
  ml = 37812,
  _l = 37813,
  gl = 37814,
  xl = 37815,
  vl = 37816,
  yl = 37817,
  Ml = 37818,
  Sl = 37819,
  Tl = 37820,
  El = 37821,
  ba = 36492,
  bl = 36494,
  Al = 36495,
  Qu = 36283,
  wl = 36284,
  Rl = 36285,
  Cl = 36286,
  Cs = 2300,
  Ps = 2301,
  Ja = 2302,
  nh = 2400,
  ih = 2401,
  rh = 2402,
  bp = 2500,
  Ap = 0,
  ed = 1,
  Pl = 2,
  wp = 3200,
  Rp = 3201,
  lc = 0,
  Cp = 1,
  Mi = "",
  St = "srgb",
  Rt = "srgb-linear",
  Da = "linear",
  et = "srgb",
  or = 7680,
  sh = 519,
  Pp = 512,
  Dp = 513,
  Lp = 514,
  td = 515,
  Ip = 516,
  Up = 517,
  Np = 518,
  Op = 519,
  Dl = 35044,
  ah = "300 es",
  kn = 2e3,
  La = 2001;
class rr {
  addEventListener(e, t) {
    this._listeners === void 0 && (this._listeners = {});
    const n = this._listeners;
    (n[e] === void 0 && (n[e] = []), n[e].indexOf(t) === -1 && n[e].push(t));
  }
  hasEventListener(e, t) {
    const n = this._listeners;
    return n === void 0 ? !1 : n[e] !== void 0 && n[e].indexOf(t) !== -1;
  }
  removeEventListener(e, t) {
    const n = this._listeners;
    if (n === void 0) return;
    const i = n[e];
    if (i !== void 0) {
      const r = i.indexOf(t);
      r !== -1 && i.splice(r, 1);
    }
  }
  dispatchEvent(e) {
    const t = this._listeners;
    if (t === void 0) return;
    const n = t[e.type];
    if (n !== void 0) {
      e.target = this;
      const i = n.slice(0);
      for (let r = 0, a = i.length; r < a; r++) i[r].call(this, e);
      e.target = null;
    }
  }
}
const Ot = [
  "00",
  "01",
  "02",
  "03",
  "04",
  "05",
  "06",
  "07",
  "08",
  "09",
  "0a",
  "0b",
  "0c",
  "0d",
  "0e",
  "0f",
  "10",
  "11",
  "12",
  "13",
  "14",
  "15",
  "16",
  "17",
  "18",
  "19",
  "1a",
  "1b",
  "1c",
  "1d",
  "1e",
  "1f",
  "20",
  "21",
  "22",
  "23",
  "24",
  "25",
  "26",
  "27",
  "28",
  "29",
  "2a",
  "2b",
  "2c",
  "2d",
  "2e",
  "2f",
  "30",
  "31",
  "32",
  "33",
  "34",
  "35",
  "36",
  "37",
  "38",
  "39",
  "3a",
  "3b",
  "3c",
  "3d",
  "3e",
  "3f",
  "40",
  "41",
  "42",
  "43",
  "44",
  "45",
  "46",
  "47",
  "48",
  "49",
  "4a",
  "4b",
  "4c",
  "4d",
  "4e",
  "4f",
  "50",
  "51",
  "52",
  "53",
  "54",
  "55",
  "56",
  "57",
  "58",
  "59",
  "5a",
  "5b",
  "5c",
  "5d",
  "5e",
  "5f",
  "60",
  "61",
  "62",
  "63",
  "64",
  "65",
  "66",
  "67",
  "68",
  "69",
  "6a",
  "6b",
  "6c",
  "6d",
  "6e",
  "6f",
  "70",
  "71",
  "72",
  "73",
  "74",
  "75",
  "76",
  "77",
  "78",
  "79",
  "7a",
  "7b",
  "7c",
  "7d",
  "7e",
  "7f",
  "80",
  "81",
  "82",
  "83",
  "84",
  "85",
  "86",
  "87",
  "88",
  "89",
  "8a",
  "8b",
  "8c",
  "8d",
  "8e",
  "8f",
  "90",
  "91",
  "92",
  "93",
  "94",
  "95",
  "96",
  "97",
  "98",
  "99",
  "9a",
  "9b",
  "9c",
  "9d",
  "9e",
  "9f",
  "a0",
  "a1",
  "a2",
  "a3",
  "a4",
  "a5",
  "a6",
  "a7",
  "a8",
  "a9",
  "aa",
  "ab",
  "ac",
  "ad",
  "ae",
  "af",
  "b0",
  "b1",
  "b2",
  "b3",
  "b4",
  "b5",
  "b6",
  "b7",
  "b8",
  "b9",
  "ba",
  "bb",
  "bc",
  "bd",
  "be",
  "bf",
  "c0",
  "c1",
  "c2",
  "c3",
  "c4",
  "c5",
  "c6",
  "c7",
  "c8",
  "c9",
  "ca",
  "cb",
  "cc",
  "cd",
  "ce",
  "cf",
  "d0",
  "d1",
  "d2",
  "d3",
  "d4",
  "d5",
  "d6",
  "d7",
  "d8",
  "d9",
  "da",
  "db",
  "dc",
  "dd",
  "de",
  "df",
  "e0",
  "e1",
  "e2",
  "e3",
  "e4",
  "e5",
  "e6",
  "e7",
  "e8",
  "e9",
  "ea",
  "eb",
  "ec",
  "ed",
  "ee",
  "ef",
  "f0",
  "f1",
  "f2",
  "f3",
  "f4",
  "f5",
  "f6",
  "f7",
  "f8",
  "f9",
  "fa",
  "fb",
  "fc",
  "fd",
  "fe",
  "ff",
];
let oh = 1234567;
const vs = Math.PI / 180,
  Vr = 180 / Math.PI;
function Ln() {
  const s = (Math.random() * 4294967295) | 0,
    e = (Math.random() * 4294967295) | 0,
    t = (Math.random() * 4294967295) | 0,
    n = (Math.random() * 4294967295) | 0;
  return (
    Ot[s & 255] +
    Ot[(s >> 8) & 255] +
    Ot[(s >> 16) & 255] +
    Ot[(s >> 24) & 255] +
    "-" +
    Ot[e & 255] +
    Ot[(e >> 8) & 255] +
    "-" +
    Ot[((e >> 16) & 15) | 64] +
    Ot[(e >> 24) & 255] +
    "-" +
    Ot[(t & 63) | 128] +
    Ot[(t >> 8) & 255] +
    "-" +
    Ot[(t >> 16) & 255] +
    Ot[(t >> 24) & 255] +
    Ot[n & 255] +
    Ot[(n >> 8) & 255] +
    Ot[(n >> 16) & 255] +
    Ot[(n >> 24) & 255]
  ).toLowerCase();
}
function ze(s, e, t) {
  return Math.max(e, Math.min(t, s));
}
function cc(s, e) {
  return ((s % e) + e) % e;
}
function Fp(s, e, t, n, i) {
  return n + ((s - e) * (i - n)) / (t - e);
}
function Bp(s, e, t) {
  return s !== e ? (t - s) / (e - s) : 0;
}
function ys(s, e, t) {
  return (1 - t) * s + t * e;
}
function kp(s, e, t, n) {
  return ys(s, e, 1 - Math.exp(-t * n));
}
function zp(s, e = 1) {
  return e - Math.abs(cc(s, e * 2) - e);
}
function Hp(s, e, t) {
  return s <= e
    ? 0
    : s >= t
      ? 1
      : ((s = (s - e) / (t - e)), s * s * (3 - 2 * s));
}
function Vp(s, e, t) {
  return s <= e
    ? 0
    : s >= t
      ? 1
      : ((s = (s - e) / (t - e)), s * s * s * (s * (s * 6 - 15) + 10));
}
function Gp(s, e) {
  return s + Math.floor(Math.random() * (e - s + 1));
}
function Wp(s, e) {
  return s + Math.random() * (e - s);
}
function Xp(s) {
  return s * (0.5 - Math.random());
}
function Yp(s) {
  s !== void 0 && (oh = s);
  let e = (oh += 1831565813);
  return (
    (e = Math.imul(e ^ (e >>> 15), e | 1)),
    (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
    ((e ^ (e >>> 14)) >>> 0) / 4294967296
  );
}
function qp(s) {
  return s * vs;
}
function jp(s) {
  return s * Vr;
}
function Kp(s) {
  return (s & (s - 1)) === 0 && s !== 0;
}
function Zp(s) {
  return Math.pow(2, Math.ceil(Math.log(s) / Math.LN2));
}
function $p(s) {
  return Math.pow(2, Math.floor(Math.log(s) / Math.LN2));
}
function Jp(s, e, t, n, i) {
  const r = Math.cos,
    a = Math.sin,
    o = r(t / 2),
    l = a(t / 2),
    c = r((e + n) / 2),
    h = a((e + n) / 2),
    u = r((e - n) / 2),
    d = a((e - n) / 2),
    f = r((n - e) / 2),
    g = a((n - e) / 2);
  switch (i) {
    case "XYX":
      s.set(o * h, l * u, l * d, o * c);
      break;
    case "YZY":
      s.set(l * d, o * h, l * u, o * c);
      break;
    case "ZXZ":
      s.set(l * u, l * d, o * h, o * c);
      break;
    case "XZX":
      s.set(o * h, l * g, l * f, o * c);
      break;
    case "YXY":
      s.set(l * f, o * h, l * g, o * c);
      break;
    case "ZYZ":
      s.set(l * g, l * f, o * h, o * c);
      break;
    default:
      console.warn(
        "THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: " +
          i,
      );
  }
}
function Pn(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return s / 4294967295;
    case Uint16Array:
      return s / 65535;
    case Uint8Array:
      return s / 255;
    case Int32Array:
      return Math.max(s / 2147483647, -1);
    case Int16Array:
      return Math.max(s / 32767, -1);
    case Int8Array:
      return Math.max(s / 127, -1);
    default:
      throw new Error("Invalid component type.");
  }
}
function $e(s, e) {
  switch (e.constructor) {
    case Float32Array:
      return s;
    case Uint32Array:
      return Math.round(s * 4294967295);
    case Uint16Array:
      return Math.round(s * 65535);
    case Uint8Array:
      return Math.round(s * 255);
    case Int32Array:
      return Math.round(s * 2147483647);
    case Int16Array:
      return Math.round(s * 32767);
    case Int8Array:
      return Math.round(s * 127);
    default:
      throw new Error("Invalid component type.");
  }
}
const nd = {
  DEG2RAD: vs,
  RAD2DEG: Vr,
  generateUUID: Ln,
  clamp: ze,
  euclideanModulo: cc,
  mapLinear: Fp,
  inverseLerp: Bp,
  lerp: ys,
  damp: kp,
  pingpong: zp,
  smoothstep: Hp,
  smootherstep: Vp,
  randInt: Gp,
  randFloat: Wp,
  randFloatSpread: Xp,
  seededRandom: Yp,
  degToRad: qp,
  radToDeg: jp,
  isPowerOfTwo: Kp,
  ceilPowerOfTwo: Zp,
  floorPowerOfTwo: $p,
  setQuaternionFromProperEuler: Jp,
  normalize: $e,
  denormalize: Pn,
};
class Re {
  constructor(e = 0, t = 0) {
    ((Re.prototype.isVector2 = !0), (this.x = e), (this.y = t));
  }
  get width() {
    return this.x;
  }
  set width(e) {
    this.x = e;
  }
  get height() {
    return this.y;
  }
  set height(e) {
    this.y = e;
  }
  set(e, t) {
    return ((this.x = e), (this.y = t), this);
  }
  setScalar(e) {
    return ((this.x = e), (this.y = e), this);
  }
  setX(e) {
    return ((this.x = e), this);
  }
  setY(e) {
    return ((this.y = e), this);
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y);
  }
  copy(e) {
    return ((this.x = e.x), (this.y = e.y), this);
  }
  add(e) {
    return ((this.x += e.x), (this.y += e.y), this);
  }
  addScalar(e) {
    return ((this.x += e), (this.y += e), this);
  }
  addVectors(e, t) {
    return ((this.x = e.x + t.x), (this.y = e.y + t.y), this);
  }
  addScaledVector(e, t) {
    return ((this.x += e.x * t), (this.y += e.y * t), this);
  }
  sub(e) {
    return ((this.x -= e.x), (this.y -= e.y), this);
  }
  subScalar(e) {
    return ((this.x -= e), (this.y -= e), this);
  }
  subVectors(e, t) {
    return ((this.x = e.x - t.x), (this.y = e.y - t.y), this);
  }
  multiply(e) {
    return ((this.x *= e.x), (this.y *= e.y), this);
  }
  multiplyScalar(e) {
    return ((this.x *= e), (this.y *= e), this);
  }
  divide(e) {
    return ((this.x /= e.x), (this.y /= e.y), this);
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = e.elements;
    return (
      (this.x = i[0] * t + i[3] * n + i[6]),
      (this.y = i[1] * t + i[4] * n + i[7]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = ze(this.x, e.x, t.x)),
      (this.y = ze(this.y, e.y, t.y)),
      this
    );
  }
  clampScalar(e, t) {
    return ((this.x = ze(this.x, e, t)), (this.y = ze(this.y, e, t)), this);
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(ze(n, e, t));
  }
  floor() {
    return ((this.x = Math.floor(this.x)), (this.y = Math.floor(this.y)), this);
  }
  ceil() {
    return ((this.x = Math.ceil(this.x)), (this.y = Math.ceil(this.y)), this);
  }
  round() {
    return ((this.x = Math.round(this.x)), (this.y = Math.round(this.y)), this);
  }
  roundToZero() {
    return ((this.x = Math.trunc(this.x)), (this.y = Math.trunc(this.y)), this);
  }
  negate() {
    return ((this.x = -this.x), (this.y = -this.y), this);
  }
  dot(e) {
    return this.x * e.x + this.y * e.y;
  }
  cross(e) {
    return this.x * e.y - this.y * e.x;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  angle() {
    return Math.atan2(-this.y, -this.x) + Math.PI;
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ze(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y;
    return t * t + n * n;
  }
  manhattanDistanceTo(e) {
    return Math.abs(this.x - e.x) + Math.abs(this.y - e.y);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y;
  }
  fromArray(e, t = 0) {
    return ((this.x = e[t]), (this.y = e[t + 1]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.x), (e[t + 1] = this.y), e);
  }
  fromBufferAttribute(e, t) {
    return ((this.x = e.getX(t)), (this.y = e.getY(t)), this);
  }
  rotateAround(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      r = this.x - e.x,
      a = this.y - e.y;
    return (
      (this.x = r * n - a * i + e.x),
      (this.y = r * i + a * n + e.y),
      this
    );
  }
  random() {
    return ((this.x = Math.random()), (this.y = Math.random()), this);
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y);
  }
}
class Hn {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    ((this.isQuaternion = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i));
  }
  static slerpFlat(e, t, n, i, r, a, o) {
    let l = n[i + 0],
      c = n[i + 1],
      h = n[i + 2],
      u = n[i + 3];
    const d = r[a + 0],
      f = r[a + 1],
      g = r[a + 2],
      _ = r[a + 3];
    if (o === 0) {
      ((e[t + 0] = l), (e[t + 1] = c), (e[t + 2] = h), (e[t + 3] = u));
      return;
    }
    if (o === 1) {
      ((e[t + 0] = d), (e[t + 1] = f), (e[t + 2] = g), (e[t + 3] = _));
      return;
    }
    if (u !== _ || l !== d || c !== f || h !== g) {
      let m = 1 - o;
      const p = l * d + c * f + h * g + u * _,
        S = p >= 0 ? 1 : -1,
        M = 1 - p * p;
      if (M > Number.EPSILON) {
        const b = Math.sqrt(M),
          A = Math.atan2(b, p * S);
        ((m = Math.sin(m * A) / b), (o = Math.sin(o * A) / b));
      }
      const v = o * S;
      if (
        ((l = l * m + d * v),
        (c = c * m + f * v),
        (h = h * m + g * v),
        (u = u * m + _ * v),
        m === 1 - o)
      ) {
        const b = 1 / Math.sqrt(l * l + c * c + h * h + u * u);
        ((l *= b), (c *= b), (h *= b), (u *= b));
      }
    }
    ((e[t] = l), (e[t + 1] = c), (e[t + 2] = h), (e[t + 3] = u));
  }
  static multiplyQuaternionsFlat(e, t, n, i, r, a) {
    const o = n[i],
      l = n[i + 1],
      c = n[i + 2],
      h = n[i + 3],
      u = r[a],
      d = r[a + 1],
      f = r[a + 2],
      g = r[a + 3];
    return (
      (e[t] = o * g + h * u + l * f - c * d),
      (e[t + 1] = l * g + h * d + c * u - o * f),
      (e[t + 2] = c * g + h * f + o * d - l * u),
      (e[t + 3] = h * g - o * u - l * d - c * f),
      e
    );
  }
  get x() {
    return this._x;
  }
  set x(e) {
    ((this._x = e), this._onChangeCallback());
  }
  get y() {
    return this._y;
  }
  set y(e) {
    ((this._y = e), this._onChangeCallback());
  }
  get z() {
    return this._z;
  }
  set z(e) {
    ((this._z = e), this._onChangeCallback());
  }
  get w() {
    return this._w;
  }
  set w(e) {
    ((this._w = e), this._onChangeCallback());
  }
  set(e, t, n, i) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._w = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._w);
  }
  copy(e) {
    return (
      (this._x = e.x),
      (this._y = e.y),
      (this._z = e.z),
      (this._w = e.w),
      this._onChangeCallback(),
      this
    );
  }
  setFromEuler(e, t = !0) {
    const n = e._x,
      i = e._y,
      r = e._z,
      a = e._order,
      o = Math.cos,
      l = Math.sin,
      c = o(n / 2),
      h = o(i / 2),
      u = o(r / 2),
      d = l(n / 2),
      f = l(i / 2),
      g = l(r / 2);
    switch (a) {
      case "XYZ":
        ((this._x = d * h * u + c * f * g),
          (this._y = c * f * u - d * h * g),
          (this._z = c * h * g + d * f * u),
          (this._w = c * h * u - d * f * g));
        break;
      case "YXZ":
        ((this._x = d * h * u + c * f * g),
          (this._y = c * f * u - d * h * g),
          (this._z = c * h * g - d * f * u),
          (this._w = c * h * u + d * f * g));
        break;
      case "ZXY":
        ((this._x = d * h * u - c * f * g),
          (this._y = c * f * u + d * h * g),
          (this._z = c * h * g + d * f * u),
          (this._w = c * h * u - d * f * g));
        break;
      case "ZYX":
        ((this._x = d * h * u - c * f * g),
          (this._y = c * f * u + d * h * g),
          (this._z = c * h * g - d * f * u),
          (this._w = c * h * u + d * f * g));
        break;
      case "YZX":
        ((this._x = d * h * u + c * f * g),
          (this._y = c * f * u + d * h * g),
          (this._z = c * h * g - d * f * u),
          (this._w = c * h * u - d * f * g));
        break;
      case "XZY":
        ((this._x = d * h * u - c * f * g),
          (this._y = c * f * u - d * h * g),
          (this._z = c * h * g + d * f * u),
          (this._w = c * h * u + d * f * g));
        break;
      default:
        console.warn(
          "THREE.Quaternion: .setFromEuler() encountered an unknown order: " +
            a,
        );
    }
    return (t === !0 && this._onChangeCallback(), this);
  }
  setFromAxisAngle(e, t) {
    const n = t / 2,
      i = Math.sin(n);
    return (
      (this._x = e.x * i),
      (this._y = e.y * i),
      (this._z = e.z * i),
      (this._w = Math.cos(n)),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e) {
    const t = e.elements,
      n = t[0],
      i = t[4],
      r = t[8],
      a = t[1],
      o = t[5],
      l = t[9],
      c = t[2],
      h = t[6],
      u = t[10],
      d = n + o + u;
    if (d > 0) {
      const f = 0.5 / Math.sqrt(d + 1);
      ((this._w = 0.25 / f),
        (this._x = (h - l) * f),
        (this._y = (r - c) * f),
        (this._z = (a - i) * f));
    } else if (n > o && n > u) {
      const f = 2 * Math.sqrt(1 + n - o - u);
      ((this._w = (h - l) / f),
        (this._x = 0.25 * f),
        (this._y = (i + a) / f),
        (this._z = (r + c) / f));
    } else if (o > u) {
      const f = 2 * Math.sqrt(1 + o - n - u);
      ((this._w = (r - c) / f),
        (this._x = (i + a) / f),
        (this._y = 0.25 * f),
        (this._z = (l + h) / f));
    } else {
      const f = 2 * Math.sqrt(1 + u - n - o);
      ((this._w = (a - i) / f),
        (this._x = (r + c) / f),
        (this._y = (l + h) / f),
        (this._z = 0.25 * f));
    }
    return (this._onChangeCallback(), this);
  }
  setFromUnitVectors(e, t) {
    let n = e.dot(t) + 1;
    return (
      n < 1e-8
        ? ((n = 0),
          Math.abs(e.x) > Math.abs(e.z)
            ? ((this._x = -e.y), (this._y = e.x), (this._z = 0), (this._w = n))
            : ((this._x = 0), (this._y = -e.z), (this._z = e.y), (this._w = n)))
        : ((this._x = e.y * t.z - e.z * t.y),
          (this._y = e.z * t.x - e.x * t.z),
          (this._z = e.x * t.y - e.y * t.x),
          (this._w = n)),
      this.normalize()
    );
  }
  angleTo(e) {
    return 2 * Math.acos(Math.abs(ze(this.dot(e), -1, 1)));
  }
  rotateTowards(e, t) {
    const n = this.angleTo(e);
    if (n === 0) return this;
    const i = Math.min(1, t / n);
    return (this.slerp(e, i), this);
  }
  identity() {
    return this.set(0, 0, 0, 1);
  }
  invert() {
    return this.conjugate();
  }
  conjugate() {
    return (
      (this._x *= -1),
      (this._y *= -1),
      (this._z *= -1),
      this._onChangeCallback(),
      this
    );
  }
  dot(e) {
    return this._x * e._x + this._y * e._y + this._z * e._z + this._w * e._w;
  }
  lengthSq() {
    return (
      this._x * this._x +
      this._y * this._y +
      this._z * this._z +
      this._w * this._w
    );
  }
  length() {
    return Math.sqrt(
      this._x * this._x +
        this._y * this._y +
        this._z * this._z +
        this._w * this._w,
    );
  }
  normalize() {
    let e = this.length();
    return (
      e === 0
        ? ((this._x = 0), (this._y = 0), (this._z = 0), (this._w = 1))
        : ((e = 1 / e),
          (this._x = this._x * e),
          (this._y = this._y * e),
          (this._z = this._z * e),
          (this._w = this._w * e)),
      this._onChangeCallback(),
      this
    );
  }
  multiply(e) {
    return this.multiplyQuaternions(this, e);
  }
  premultiply(e) {
    return this.multiplyQuaternions(e, this);
  }
  multiplyQuaternions(e, t) {
    const n = e._x,
      i = e._y,
      r = e._z,
      a = e._w,
      o = t._x,
      l = t._y,
      c = t._z,
      h = t._w;
    return (
      (this._x = n * h + a * o + i * c - r * l),
      (this._y = i * h + a * l + r * o - n * c),
      (this._z = r * h + a * c + n * l - i * o),
      (this._w = a * h - n * o - i * l - r * c),
      this._onChangeCallback(),
      this
    );
  }
  slerp(e, t) {
    if (t === 0) return this;
    if (t === 1) return this.copy(e);
    const n = this._x,
      i = this._y,
      r = this._z,
      a = this._w;
    let o = a * e._w + n * e._x + i * e._y + r * e._z;
    if (
      (o < 0
        ? ((this._w = -e._w),
          (this._x = -e._x),
          (this._y = -e._y),
          (this._z = -e._z),
          (o = -o))
        : this.copy(e),
      o >= 1)
    )
      return ((this._w = a), (this._x = n), (this._y = i), (this._z = r), this);
    const l = 1 - o * o;
    if (l <= Number.EPSILON) {
      const f = 1 - t;
      return (
        (this._w = f * a + t * this._w),
        (this._x = f * n + t * this._x),
        (this._y = f * i + t * this._y),
        (this._z = f * r + t * this._z),
        this.normalize(),
        this
      );
    }
    const c = Math.sqrt(l),
      h = Math.atan2(c, o),
      u = Math.sin((1 - t) * h) / c,
      d = Math.sin(t * h) / c;
    return (
      (this._w = a * u + this._w * d),
      (this._x = n * u + this._x * d),
      (this._y = i * u + this._y * d),
      (this._z = r * u + this._z * d),
      this._onChangeCallback(),
      this
    );
  }
  slerpQuaternions(e, t, n) {
    return this.copy(e).slerp(t, n);
  }
  random() {
    const e = 2 * Math.PI * Math.random(),
      t = 2 * Math.PI * Math.random(),
      n = Math.random(),
      i = Math.sqrt(1 - n),
      r = Math.sqrt(n);
    return this.set(
      i * Math.sin(e),
      i * Math.cos(e),
      r * Math.sin(t),
      r * Math.cos(t),
    );
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._w === this._w
    );
  }
  fromArray(e, t = 0) {
    return (
      (this._x = e[t]),
      (this._y = e[t + 1]),
      (this._z = e[t + 2]),
      (this._w = e[t + 3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this._x = e.getX(t)),
      (this._y = e.getY(t)),
      (this._z = e.getZ(t)),
      (this._w = e.getW(t)),
      this._onChangeCallback(),
      this
    );
  }
  toJSON() {
    return this.toArray();
  }
  _onChange(e) {
    return ((this._onChangeCallback = e), this);
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    (yield this._x, yield this._y, yield this._z, yield this._w);
  }
}
class L {
  constructor(e = 0, t = 0, n = 0) {
    ((L.prototype.isVector3 = !0), (this.x = e), (this.y = t), (this.z = n));
  }
  set(e, t, n) {
    return (
      n === void 0 && (n = this.z),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      this
    );
  }
  setScalar(e) {
    return ((this.x = e), (this.y = e), (this.z = e), this);
  }
  setX(e) {
    return ((this.x = e), this);
  }
  setY(e) {
    return ((this.y = e), this);
  }
  setZ(e) {
    return ((this.z = e), this);
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z);
  }
  copy(e) {
    return ((this.x = e.x), (this.y = e.y), (this.z = e.z), this);
  }
  add(e) {
    return ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
  }
  addScalar(e) {
    return ((this.x += e), (this.y += e), (this.z += e), this);
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      this
    );
  }
  sub(e) {
    return ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
  }
  subScalar(e) {
    return ((this.x -= e), (this.y -= e), (this.z -= e), this);
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      this
    );
  }
  multiply(e) {
    return ((this.x *= e.x), (this.y *= e.y), (this.z *= e.z), this);
  }
  multiplyScalar(e) {
    return ((this.x *= e), (this.y *= e), (this.z *= e), this);
  }
  multiplyVectors(e, t) {
    return (
      (this.x = e.x * t.x),
      (this.y = e.y * t.y),
      (this.z = e.z * t.z),
      this
    );
  }
  applyEuler(e) {
    return this.applyQuaternion(lh.setFromEuler(e));
  }
  applyAxisAngle(e, t) {
    return this.applyQuaternion(lh.setFromAxisAngle(e, t));
  }
  applyMatrix3(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[3] * n + r[6] * i),
      (this.y = r[1] * t + r[4] * n + r[7] * i),
      (this.z = r[2] * t + r[5] * n + r[8] * i),
      this
    );
  }
  applyNormalMatrix(e) {
    return this.applyMatrix3(e).normalize();
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements,
      a = 1 / (r[3] * t + r[7] * n + r[11] * i + r[15]);
    return (
      (this.x = (r[0] * t + r[4] * n + r[8] * i + r[12]) * a),
      (this.y = (r[1] * t + r[5] * n + r[9] * i + r[13]) * a),
      (this.z = (r[2] * t + r[6] * n + r[10] * i + r[14]) * a),
      this
    );
  }
  applyQuaternion(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.x,
      a = e.y,
      o = e.z,
      l = e.w,
      c = 2 * (a * i - o * n),
      h = 2 * (o * t - r * i),
      u = 2 * (r * n - a * t);
    return (
      (this.x = t + l * c + a * u - o * h),
      (this.y = n + l * h + o * c - r * u),
      (this.z = i + l * u + r * h - a * c),
      this
    );
  }
  project(e) {
    return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(
      e.projectionMatrix,
    );
  }
  unproject(e) {
    return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(
      e.matrixWorld,
    );
  }
  transformDirection(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = e.elements;
    return (
      (this.x = r[0] * t + r[4] * n + r[8] * i),
      (this.y = r[1] * t + r[5] * n + r[9] * i),
      (this.z = r[2] * t + r[6] * n + r[10] * i),
      this.normalize()
    );
  }
  divide(e) {
    return ((this.x /= e.x), (this.y /= e.y), (this.z /= e.z), this);
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = ze(this.x, e.x, t.x)),
      (this.y = ze(this.y, e.y, t.y)),
      (this.z = ze(this.z, e.z, t.z)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = ze(this.x, e, t)),
      (this.y = ze(this.y, e, t)),
      (this.z = ze(this.z, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(ze(n, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      this
    );
  }
  negate() {
    return ((this.x = -this.x), (this.y = -this.y), (this.z = -this.z), this);
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z;
  }
  lengthSq() {
    return this.x * this.x + this.y * this.y + this.z * this.z;
  }
  length() {
    return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
  }
  manhattanLength() {
    return Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z);
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      this
    );
  }
  cross(e) {
    return this.crossVectors(this, e);
  }
  crossVectors(e, t) {
    const n = e.x,
      i = e.y,
      r = e.z,
      a = t.x,
      o = t.y,
      l = t.z;
    return (
      (this.x = i * l - r * o),
      (this.y = r * a - n * l),
      (this.z = n * o - i * a),
      this
    );
  }
  projectOnVector(e) {
    const t = e.lengthSq();
    if (t === 0) return this.set(0, 0, 0);
    const n = e.dot(this) / t;
    return this.copy(e).multiplyScalar(n);
  }
  projectOnPlane(e) {
    return (Qa.copy(this).projectOnVector(e), this.sub(Qa));
  }
  reflect(e) {
    return this.sub(Qa.copy(e).multiplyScalar(2 * this.dot(e)));
  }
  angleTo(e) {
    const t = Math.sqrt(this.lengthSq() * e.lengthSq());
    if (t === 0) return Math.PI / 2;
    const n = this.dot(e) / t;
    return Math.acos(ze(n, -1, 1));
  }
  distanceTo(e) {
    return Math.sqrt(this.distanceToSquared(e));
  }
  distanceToSquared(e) {
    const t = this.x - e.x,
      n = this.y - e.y,
      i = this.z - e.z;
    return t * t + n * n + i * i;
  }
  manhattanDistanceTo(e) {
    return (
      Math.abs(this.x - e.x) + Math.abs(this.y - e.y) + Math.abs(this.z - e.z)
    );
  }
  setFromSpherical(e) {
    return this.setFromSphericalCoords(e.radius, e.phi, e.theta);
  }
  setFromSphericalCoords(e, t, n) {
    const i = Math.sin(t) * e;
    return (
      (this.x = i * Math.sin(n)),
      (this.y = Math.cos(t) * e),
      (this.z = i * Math.cos(n)),
      this
    );
  }
  setFromCylindrical(e) {
    return this.setFromCylindricalCoords(e.radius, e.theta, e.y);
  }
  setFromCylindricalCoords(e, t, n) {
    return (
      (this.x = e * Math.sin(t)),
      (this.y = n),
      (this.z = e * Math.cos(t)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return ((this.x = t[12]), (this.y = t[13]), (this.z = t[14]), this);
  }
  setFromMatrixScale(e) {
    const t = this.setFromMatrixColumn(e, 0).length(),
      n = this.setFromMatrixColumn(e, 1).length(),
      i = this.setFromMatrixColumn(e, 2).length();
    return ((this.x = t), (this.y = n), (this.z = i), this);
  }
  setFromMatrixColumn(e, t) {
    return this.fromArray(e.elements, t * 4);
  }
  setFromMatrix3Column(e, t) {
    return this.fromArray(e.elements, t * 3);
  }
  setFromEuler(e) {
    return ((this.x = e._x), (this.y = e._y), (this.z = e._z), this);
  }
  setFromColor(e) {
    return ((this.x = e.r), (this.y = e.g), (this.z = e.b), this);
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z;
  }
  fromArray(e, t = 0) {
    return ((this.x = e[t]), (this.y = e[t + 1]), (this.z = e[t + 2]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.x), (e[t + 1] = this.y), (e[t + 2] = this.z), e);
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      this
    );
  }
  randomDirection() {
    const e = Math.random() * Math.PI * 2,
      t = Math.random() * 2 - 1,
      n = Math.sqrt(1 - t * t);
    return (
      (this.x = n * Math.cos(e)),
      (this.y = t),
      (this.z = n * Math.sin(e)),
      this
    );
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y, yield this.z);
  }
}
const Qa = new L(),
  lh = new Hn();
class Be {
  constructor(e, t, n, i, r, a, o, l, c) {
    ((Be.prototype.isMatrix3 = !0),
      (this.elements = [1, 0, 0, 0, 1, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, i, r, a, o, l, c));
  }
  set(e, t, n, i, r, a, o, l, c) {
    const h = this.elements;
    return (
      (h[0] = e),
      (h[1] = i),
      (h[2] = o),
      (h[3] = t),
      (h[4] = r),
      (h[5] = l),
      (h[6] = n),
      (h[7] = a),
      (h[8] = c),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 1, 0, 0, 0, 1), this);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrix3Column(this, 0),
      t.setFromMatrix3Column(this, 1),
      n.setFromMatrix3Column(this, 2),
      this
    );
  }
  setFromMatrix4(e) {
    const t = e.elements;
    return (
      this.set(t[0], t[4], t[8], t[1], t[5], t[9], t[2], t[6], t[10]),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      r = this.elements,
      a = n[0],
      o = n[3],
      l = n[6],
      c = n[1],
      h = n[4],
      u = n[7],
      d = n[2],
      f = n[5],
      g = n[8],
      _ = i[0],
      m = i[3],
      p = i[6],
      S = i[1],
      M = i[4],
      v = i[7],
      b = i[2],
      A = i[5],
      w = i[8];
    return (
      (r[0] = a * _ + o * S + l * b),
      (r[3] = a * m + o * M + l * A),
      (r[6] = a * p + o * v + l * w),
      (r[1] = c * _ + h * S + u * b),
      (r[4] = c * m + h * M + u * A),
      (r[7] = c * p + h * v + u * w),
      (r[2] = d * _ + f * S + g * b),
      (r[5] = d * m + f * M + g * A),
      (r[8] = d * p + f * v + g * w),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[3] *= e),
      (t[6] *= e),
      (t[1] *= e),
      (t[4] *= e),
      (t[7] *= e),
      (t[2] *= e),
      (t[5] *= e),
      (t[8] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      h = e[8];
    return (
      t * a * h - t * o * c - n * r * h + n * o * l + i * r * c - i * a * l
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      h = e[8],
      u = h * a - o * c,
      d = o * l - h * r,
      f = c * r - a * l,
      g = t * u + n * d + i * f;
    if (g === 0) return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0);
    const _ = 1 / g;
    return (
      (e[0] = u * _),
      (e[1] = (i * c - h * n) * _),
      (e[2] = (o * n - i * a) * _),
      (e[3] = d * _),
      (e[4] = (h * t - i * l) * _),
      (e[5] = (i * r - o * t) * _),
      (e[6] = f * _),
      (e[7] = (n * l - c * t) * _),
      (e[8] = (a * t - n * r) * _),
      this
    );
  }
  transpose() {
    let e;
    const t = this.elements;
    return (
      (e = t[1]),
      (t[1] = t[3]),
      (t[3] = e),
      (e = t[2]),
      (t[2] = t[6]),
      (t[6] = e),
      (e = t[5]),
      (t[5] = t[7]),
      (t[7] = e),
      this
    );
  }
  getNormalMatrix(e) {
    return this.setFromMatrix4(e).invert().transpose();
  }
  transposeIntoArray(e) {
    const t = this.elements;
    return (
      (e[0] = t[0]),
      (e[1] = t[3]),
      (e[2] = t[6]),
      (e[3] = t[1]),
      (e[4] = t[4]),
      (e[5] = t[7]),
      (e[6] = t[2]),
      (e[7] = t[5]),
      (e[8] = t[8]),
      this
    );
  }
  setUvTransform(e, t, n, i, r, a, o) {
    const l = Math.cos(r),
      c = Math.sin(r);
    return (
      this.set(
        n * l,
        n * c,
        -n * (l * a + c * o) + a + e,
        -i * c,
        i * l,
        -i * (-c * a + l * o) + o + t,
        0,
        0,
        1,
      ),
      this
    );
  }
  scale(e, t) {
    return (this.premultiply(eo.makeScale(e, t)), this);
  }
  rotate(e) {
    return (this.premultiply(eo.makeRotation(-e)), this);
  }
  translate(e, t) {
    return (this.premultiply(eo.makeTranslation(e, t)), this);
  }
  makeTranslation(e, t) {
    return (
      e.isVector2
        ? this.set(1, 0, e.x, 0, 1, e.y, 0, 0, 1)
        : this.set(1, 0, e, 0, 1, t, 0, 0, 1),
      this
    );
  }
  makeRotation(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(t, -n, 0, n, t, 0, 0, 0, 1), this);
  }
  makeScale(e, t) {
    return (this.set(e, 0, 0, 0, t, 0, 0, 0, 1), this);
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 9; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 9; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      e
    );
  }
  clone() {
    return new this.constructor().fromArray(this.elements);
  }
}
const eo = new Be();
function id(s) {
  for (let e = s.length - 1; e >= 0; --e) if (s[e] >= 65535) return !0;
  return !1;
}
function Ds(s) {
  return document.createElementNS("http://www.w3.org/1999/xhtml", s);
}
function Qp() {
  const s = Ds("canvas");
  return ((s.style.display = "block"), s);
}
const ch = {};
function Dr(s) {
  s in ch || ((ch[s] = !0), console.warn(s));
}
function em(s, e, t) {
  return new Promise(function (n, i) {
    function r() {
      switch (s.clientWaitSync(e, s.SYNC_FLUSH_COMMANDS_BIT, 0)) {
        case s.WAIT_FAILED:
          i();
          break;
        case s.TIMEOUT_EXPIRED:
          setTimeout(r, t);
          break;
        default:
          n();
      }
    }
    setTimeout(r, t);
  });
}
const hh = new Be().set(
    0.4123908,
    0.3575843,
    0.1804808,
    0.212639,
    0.7151687,
    0.0721923,
    0.0193308,
    0.1191948,
    0.9505322,
  ),
  uh = new Be().set(
    3.2409699,
    -1.5373832,
    -0.4986108,
    -0.9692436,
    1.8759675,
    0.0415551,
    0.0556301,
    -0.203977,
    1.0569715,
  );
function tm() {
  const s = {
      enabled: !0,
      workingColorSpace: Rt,
      spaces: {},
      convert: function (i, r, a) {
        return (
          this.enabled === !1 ||
            r === a ||
            !r ||
            !a ||
            (this.spaces[r].transfer === et &&
              ((i.r = oi(i.r)), (i.g = oi(i.g)), (i.b = oi(i.b))),
            this.spaces[r].primaries !== this.spaces[a].primaries &&
              (i.applyMatrix3(this.spaces[r].toXYZ),
              i.applyMatrix3(this.spaces[a].fromXYZ)),
            this.spaces[a].transfer === et &&
              ((i.r = Lr(i.r)), (i.g = Lr(i.g)), (i.b = Lr(i.b)))),
          i
        );
      },
      workingToColorSpace: function (i, r) {
        return this.convert(i, this.workingColorSpace, r);
      },
      colorSpaceToWorking: function (i, r) {
        return this.convert(i, r, this.workingColorSpace);
      },
      getPrimaries: function (i) {
        return this.spaces[i].primaries;
      },
      getTransfer: function (i) {
        return i === Mi ? Da : this.spaces[i].transfer;
      },
      getLuminanceCoefficients: function (i, r = this.workingColorSpace) {
        return i.fromArray(this.spaces[r].luminanceCoefficients);
      },
      define: function (i) {
        Object.assign(this.spaces, i);
      },
      _getMatrix: function (i, r, a) {
        return i.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ);
      },
      _getDrawingBufferColorSpace: function (i) {
        return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace;
      },
      _getUnpackColorSpace: function (i = this.workingColorSpace) {
        return this.spaces[i].workingColorSpaceConfig.unpackColorSpace;
      },
      fromWorkingColorSpace: function (i, r) {
        return (
          Dr(
            "THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace().",
          ),
          s.workingToColorSpace(i, r)
        );
      },
      toWorkingColorSpace: function (i, r) {
        return (
          Dr(
            "THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking().",
          ),
          s.colorSpaceToWorking(i, r)
        );
      },
    },
    e = [0.64, 0.33, 0.3, 0.6, 0.15, 0.06],
    t = [0.2126, 0.7152, 0.0722],
    n = [0.3127, 0.329];
  return (
    s.define({
      [Rt]: {
        primaries: e,
        whitePoint: n,
        transfer: Da,
        toXYZ: hh,
        fromXYZ: uh,
        luminanceCoefficients: t,
        workingColorSpaceConfig: { unpackColorSpace: St },
        outputColorSpaceConfig: { drawingBufferColorSpace: St },
      },
      [St]: {
        primaries: e,
        whitePoint: n,
        transfer: et,
        toXYZ: hh,
        fromXYZ: uh,
        luminanceCoefficients: t,
        outputColorSpaceConfig: { drawingBufferColorSpace: St },
      },
    }),
    s
  );
}
const We = tm();
function oi(s) {
  return s < 0.04045
    ? s * 0.0773993808
    : Math.pow(s * 0.9478672986 + 0.0521327014, 2.4);
}
function Lr(s) {
  return s < 0.0031308 ? s * 12.92 : 1.055 * Math.pow(s, 0.41666) - 0.055;
}
let lr;
class nm {
  static getDataURL(e, t = "image/png") {
    if (/^data:/i.test(e.src) || typeof HTMLCanvasElement > "u") return e.src;
    let n;
    if (e instanceof HTMLCanvasElement) n = e;
    else {
      (lr === void 0 && (lr = Ds("canvas")),
        (lr.width = e.width),
        (lr.height = e.height));
      const i = lr.getContext("2d");
      (e instanceof ImageData
        ? i.putImageData(e, 0, 0)
        : i.drawImage(e, 0, 0, e.width, e.height),
        (n = lr));
    }
    return n.toDataURL(t);
  }
  static sRGBToLinear(e) {
    if (
      (typeof HTMLImageElement < "u" && e instanceof HTMLImageElement) ||
      (typeof HTMLCanvasElement < "u" && e instanceof HTMLCanvasElement) ||
      (typeof ImageBitmap < "u" && e instanceof ImageBitmap)
    ) {
      const t = Ds("canvas");
      ((t.width = e.width), (t.height = e.height));
      const n = t.getContext("2d");
      n.drawImage(e, 0, 0, e.width, e.height);
      const i = n.getImageData(0, 0, e.width, e.height),
        r = i.data;
      for (let a = 0; a < r.length; a++) r[a] = oi(r[a] / 255) * 255;
      return (n.putImageData(i, 0, 0), t);
    } else if (e.data) {
      const t = e.data.slice(0);
      for (let n = 0; n < t.length; n++)
        t instanceof Uint8Array || t instanceof Uint8ClampedArray
          ? (t[n] = Math.floor(oi(t[n] / 255) * 255))
          : (t[n] = oi(t[n]));
      return { data: t, width: e.width, height: e.height };
    } else
      return (
        console.warn(
          "THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied.",
        ),
        e
      );
  }
}
let im = 0;
class hc {
  constructor(e = null) {
    ((this.isSource = !0),
      Object.defineProperty(this, "id", { value: im++ }),
      (this.uuid = Ln()),
      (this.data = e),
      (this.dataReady = !0),
      (this.version = 0));
  }
  getSize(e) {
    const t = this.data;
    return (
      t instanceof HTMLVideoElement
        ? e.set(t.videoWidth, t.videoHeight, 0)
        : t instanceof VideoFrame
          ? e.set(t.displayHeight, t.displayWidth, 0)
          : t !== null
            ? e.set(t.width, t.height, t.depth || 0)
            : e.set(0, 0, 0),
      e
    );
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.images[this.uuid] !== void 0) return e.images[this.uuid];
    const n = { uuid: this.uuid, url: "" },
      i = this.data;
    if (i !== null) {
      let r;
      if (Array.isArray(i)) {
        r = [];
        for (let a = 0, o = i.length; a < o; a++)
          i[a].isDataTexture ? r.push(to(i[a].image)) : r.push(to(i[a]));
      } else r = to(i);
      n.url = r;
    }
    return (t || (e.images[this.uuid] = n), n);
  }
}
function to(s) {
  return (typeof HTMLImageElement < "u" && s instanceof HTMLImageElement) ||
    (typeof HTMLCanvasElement < "u" && s instanceof HTMLCanvasElement) ||
    (typeof ImageBitmap < "u" && s instanceof ImageBitmap)
    ? nm.getDataURL(s)
    : s.data
      ? {
          data: Array.from(s.data),
          width: s.width,
          height: s.height,
          type: s.data.constructor.name,
        }
      : (console.warn("THREE.Texture: Unable to serialize Texture."), {});
}
let rm = 0;
const no = new L();
class ut extends rr {
  constructor(
    e = ut.DEFAULT_IMAGE,
    t = ut.DEFAULT_MAPPING,
    n = kt,
    i = kt,
    r = wt,
    a = ri,
    o = zt,
    l = fn,
    c = ut.DEFAULT_ANISOTROPY,
    h = Mi,
  ) {
    (super(),
      (this.isTexture = !0),
      Object.defineProperty(this, "id", { value: rm++ }),
      (this.uuid = Ln()),
      (this.name = ""),
      (this.source = new hc(e)),
      (this.mipmaps = []),
      (this.mapping = t),
      (this.channel = 0),
      (this.wrapS = n),
      (this.wrapT = i),
      (this.magFilter = r),
      (this.minFilter = a),
      (this.anisotropy = c),
      (this.format = o),
      (this.internalFormat = null),
      (this.type = l),
      (this.offset = new Re(0, 0)),
      (this.repeat = new Re(1, 1)),
      (this.center = new Re(0, 0)),
      (this.rotation = 0),
      (this.matrixAutoUpdate = !0),
      (this.matrix = new Be()),
      (this.generateMipmaps = !0),
      (this.premultiplyAlpha = !1),
      (this.flipY = !0),
      (this.unpackAlignment = 4),
      (this.colorSpace = h),
      (this.userData = {}),
      (this.updateRanges = []),
      (this.version = 0),
      (this.onUpdate = null),
      (this.renderTarget = null),
      (this.isRenderTargetTexture = !1),
      (this.isArrayTexture = !!(e && e.depth && e.depth > 1)),
      (this.pmremVersion = 0));
  }
  get width() {
    return this.source.getSize(no).x;
  }
  get height() {
    return this.source.getSize(no).y;
  }
  get depth() {
    return this.source.getSize(no).z;
  }
  get image() {
    return this.source.data;
  }
  set image(e = null) {
    this.source.data = e;
  }
  updateMatrix() {
    this.matrix.setUvTransform(
      this.offset.x,
      this.offset.y,
      this.repeat.x,
      this.repeat.y,
      this.rotation,
      this.center.x,
      this.center.y,
    );
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.source = e.source),
      (this.mipmaps = e.mipmaps.slice(0)),
      (this.mapping = e.mapping),
      (this.channel = e.channel),
      (this.wrapS = e.wrapS),
      (this.wrapT = e.wrapT),
      (this.magFilter = e.magFilter),
      (this.minFilter = e.minFilter),
      (this.anisotropy = e.anisotropy),
      (this.format = e.format),
      (this.internalFormat = e.internalFormat),
      (this.type = e.type),
      this.offset.copy(e.offset),
      this.repeat.copy(e.repeat),
      this.center.copy(e.center),
      (this.rotation = e.rotation),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this.matrix.copy(e.matrix),
      (this.generateMipmaps = e.generateMipmaps),
      (this.premultiplyAlpha = e.premultiplyAlpha),
      (this.flipY = e.flipY),
      (this.unpackAlignment = e.unpackAlignment),
      (this.colorSpace = e.colorSpace),
      (this.renderTarget = e.renderTarget),
      (this.isRenderTargetTexture = e.isRenderTargetTexture),
      (this.isArrayTexture = e.isArrayTexture),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      (this.needsUpdate = !0),
      this
    );
  }
  setValues(e) {
    for (const t in e) {
      const n = e[t];
      if (n === void 0) {
        console.warn(
          `THREE.Texture.setValues(): parameter '${t}' has value of undefined.`,
        );
        continue;
      }
      const i = this[t];
      if (i === void 0) {
        console.warn(
          `THREE.Texture.setValues(): property '${t}' does not exist.`,
        );
        continue;
      }
      (i && n && i.isVector2 && n.isVector2) ||
      (i && n && i.isVector3 && n.isVector3) ||
      (i && n && i.isMatrix3 && n.isMatrix3)
        ? i.copy(n)
        : (this[t] = n);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    if (!t && e.textures[this.uuid] !== void 0) return e.textures[this.uuid];
    const n = {
      metadata: { version: 4.7, type: "Texture", generator: "Texture.toJSON" },
      uuid: this.uuid,
      name: this.name,
      image: this.source.toJSON(e).uuid,
      mapping: this.mapping,
      channel: this.channel,
      repeat: [this.repeat.x, this.repeat.y],
      offset: [this.offset.x, this.offset.y],
      center: [this.center.x, this.center.y],
      rotation: this.rotation,
      wrap: [this.wrapS, this.wrapT],
      format: this.format,
      internalFormat: this.internalFormat,
      type: this.type,
      colorSpace: this.colorSpace,
      minFilter: this.minFilter,
      magFilter: this.magFilter,
      anisotropy: this.anisotropy,
      flipY: this.flipY,
      generateMipmaps: this.generateMipmaps,
      premultiplyAlpha: this.premultiplyAlpha,
      unpackAlignment: this.unpackAlignment,
    };
    return (
      Object.keys(this.userData).length > 0 && (n.userData = this.userData),
      t || (e.textures[this.uuid] = n),
      n
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  transformUv(e) {
    if (this.mapping !== Br) return e;
    if ((e.applyMatrix3(this.matrix), e.x < 0 || e.x > 1))
      switch (this.wrapS) {
        case Hr:
          e.x = e.x - Math.floor(e.x);
          break;
        case kt:
          e.x = e.x < 0 ? 0 : 1;
          break;
        case Pa:
          Math.abs(Math.floor(e.x) % 2) === 1
            ? (e.x = Math.ceil(e.x) - e.x)
            : (e.x = e.x - Math.floor(e.x));
          break;
      }
    if (e.y < 0 || e.y > 1)
      switch (this.wrapT) {
        case Hr:
          e.y = e.y - Math.floor(e.y);
          break;
        case kt:
          e.y = e.y < 0 ? 0 : 1;
          break;
        case Pa:
          Math.abs(Math.floor(e.y) % 2) === 1
            ? (e.y = Math.ceil(e.y) - e.y)
            : (e.y = e.y - Math.floor(e.y));
          break;
      }
    return (this.flipY && (e.y = 1 - e.y), e);
  }
  set needsUpdate(e) {
    e === !0 && (this.version++, (this.source.needsUpdate = !0));
  }
  set needsPMREMUpdate(e) {
    e === !0 && this.pmremVersion++;
  }
}
ut.DEFAULT_IMAGE = null;
ut.DEFAULT_MAPPING = Br;
ut.DEFAULT_ANISOTROPY = 1;
class Ke {
  constructor(e = 0, t = 0, n = 0, i = 1) {
    ((Ke.prototype.isVector4 = !0),
      (this.x = e),
      (this.y = t),
      (this.z = n),
      (this.w = i));
  }
  get width() {
    return this.z;
  }
  set width(e) {
    this.z = e;
  }
  get height() {
    return this.w;
  }
  set height(e) {
    this.w = e;
  }
  set(e, t, n, i) {
    return ((this.x = e), (this.y = t), (this.z = n), (this.w = i), this);
  }
  setScalar(e) {
    return ((this.x = e), (this.y = e), (this.z = e), (this.w = e), this);
  }
  setX(e) {
    return ((this.x = e), this);
  }
  setY(e) {
    return ((this.y = e), this);
  }
  setZ(e) {
    return ((this.z = e), this);
  }
  setW(e) {
    return ((this.w = e), this);
  }
  setComponent(e, t) {
    switch (e) {
      case 0:
        this.x = t;
        break;
      case 1:
        this.y = t;
        break;
      case 2:
        this.z = t;
        break;
      case 3:
        this.w = t;
        break;
      default:
        throw new Error("index is out of range: " + e);
    }
    return this;
  }
  getComponent(e) {
    switch (e) {
      case 0:
        return this.x;
      case 1:
        return this.y;
      case 2:
        return this.z;
      case 3:
        return this.w;
      default:
        throw new Error("index is out of range: " + e);
    }
  }
  clone() {
    return new this.constructor(this.x, this.y, this.z, this.w);
  }
  copy(e) {
    return (
      (this.x = e.x),
      (this.y = e.y),
      (this.z = e.z),
      (this.w = e.w !== void 0 ? e.w : 1),
      this
    );
  }
  add(e) {
    return (
      (this.x += e.x),
      (this.y += e.y),
      (this.z += e.z),
      (this.w += e.w),
      this
    );
  }
  addScalar(e) {
    return ((this.x += e), (this.y += e), (this.z += e), (this.w += e), this);
  }
  addVectors(e, t) {
    return (
      (this.x = e.x + t.x),
      (this.y = e.y + t.y),
      (this.z = e.z + t.z),
      (this.w = e.w + t.w),
      this
    );
  }
  addScaledVector(e, t) {
    return (
      (this.x += e.x * t),
      (this.y += e.y * t),
      (this.z += e.z * t),
      (this.w += e.w * t),
      this
    );
  }
  sub(e) {
    return (
      (this.x -= e.x),
      (this.y -= e.y),
      (this.z -= e.z),
      (this.w -= e.w),
      this
    );
  }
  subScalar(e) {
    return ((this.x -= e), (this.y -= e), (this.z -= e), (this.w -= e), this);
  }
  subVectors(e, t) {
    return (
      (this.x = e.x - t.x),
      (this.y = e.y - t.y),
      (this.z = e.z - t.z),
      (this.w = e.w - t.w),
      this
    );
  }
  multiply(e) {
    return (
      (this.x *= e.x),
      (this.y *= e.y),
      (this.z *= e.z),
      (this.w *= e.w),
      this
    );
  }
  multiplyScalar(e) {
    return ((this.x *= e), (this.y *= e), (this.z *= e), (this.w *= e), this);
  }
  applyMatrix4(e) {
    const t = this.x,
      n = this.y,
      i = this.z,
      r = this.w,
      a = e.elements;
    return (
      (this.x = a[0] * t + a[4] * n + a[8] * i + a[12] * r),
      (this.y = a[1] * t + a[5] * n + a[9] * i + a[13] * r),
      (this.z = a[2] * t + a[6] * n + a[10] * i + a[14] * r),
      (this.w = a[3] * t + a[7] * n + a[11] * i + a[15] * r),
      this
    );
  }
  divide(e) {
    return (
      (this.x /= e.x),
      (this.y /= e.y),
      (this.z /= e.z),
      (this.w /= e.w),
      this
    );
  }
  divideScalar(e) {
    return this.multiplyScalar(1 / e);
  }
  setAxisAngleFromQuaternion(e) {
    this.w = 2 * Math.acos(e.w);
    const t = Math.sqrt(1 - e.w * e.w);
    return (
      t < 1e-4
        ? ((this.x = 1), (this.y = 0), (this.z = 0))
        : ((this.x = e.x / t), (this.y = e.y / t), (this.z = e.z / t)),
      this
    );
  }
  setAxisAngleFromRotationMatrix(e) {
    let t, n, i, r;
    const l = e.elements,
      c = l[0],
      h = l[4],
      u = l[8],
      d = l[1],
      f = l[5],
      g = l[9],
      _ = l[2],
      m = l[6],
      p = l[10];
    if (
      Math.abs(h - d) < 0.01 &&
      Math.abs(u - _) < 0.01 &&
      Math.abs(g - m) < 0.01
    ) {
      if (
        Math.abs(h + d) < 0.1 &&
        Math.abs(u + _) < 0.1 &&
        Math.abs(g + m) < 0.1 &&
        Math.abs(c + f + p - 3) < 0.1
      )
        return (this.set(1, 0, 0, 0), this);
      t = Math.PI;
      const M = (c + 1) / 2,
        v = (f + 1) / 2,
        b = (p + 1) / 2,
        A = (h + d) / 4,
        w = (u + _) / 4,
        C = (g + m) / 4;
      return (
        M > v && M > b
          ? M < 0.01
            ? ((n = 0), (i = 0.707106781), (r = 0.707106781))
            : ((n = Math.sqrt(M)), (i = A / n), (r = w / n))
          : v > b
            ? v < 0.01
              ? ((n = 0.707106781), (i = 0), (r = 0.707106781))
              : ((i = Math.sqrt(v)), (n = A / i), (r = C / i))
            : b < 0.01
              ? ((n = 0.707106781), (i = 0.707106781), (r = 0))
              : ((r = Math.sqrt(b)), (n = w / r), (i = C / r)),
        this.set(n, i, r, t),
        this
      );
    }
    let S = Math.sqrt(
      (m - g) * (m - g) + (u - _) * (u - _) + (d - h) * (d - h),
    );
    return (
      Math.abs(S) < 0.001 && (S = 1),
      (this.x = (m - g) / S),
      (this.y = (u - _) / S),
      (this.z = (d - h) / S),
      (this.w = Math.acos((c + f + p - 1) / 2)),
      this
    );
  }
  setFromMatrixPosition(e) {
    const t = e.elements;
    return (
      (this.x = t[12]),
      (this.y = t[13]),
      (this.z = t[14]),
      (this.w = t[15]),
      this
    );
  }
  min(e) {
    return (
      (this.x = Math.min(this.x, e.x)),
      (this.y = Math.min(this.y, e.y)),
      (this.z = Math.min(this.z, e.z)),
      (this.w = Math.min(this.w, e.w)),
      this
    );
  }
  max(e) {
    return (
      (this.x = Math.max(this.x, e.x)),
      (this.y = Math.max(this.y, e.y)),
      (this.z = Math.max(this.z, e.z)),
      (this.w = Math.max(this.w, e.w)),
      this
    );
  }
  clamp(e, t) {
    return (
      (this.x = ze(this.x, e.x, t.x)),
      (this.y = ze(this.y, e.y, t.y)),
      (this.z = ze(this.z, e.z, t.z)),
      (this.w = ze(this.w, e.w, t.w)),
      this
    );
  }
  clampScalar(e, t) {
    return (
      (this.x = ze(this.x, e, t)),
      (this.y = ze(this.y, e, t)),
      (this.z = ze(this.z, e, t)),
      (this.w = ze(this.w, e, t)),
      this
    );
  }
  clampLength(e, t) {
    const n = this.length();
    return this.divideScalar(n || 1).multiplyScalar(ze(n, e, t));
  }
  floor() {
    return (
      (this.x = Math.floor(this.x)),
      (this.y = Math.floor(this.y)),
      (this.z = Math.floor(this.z)),
      (this.w = Math.floor(this.w)),
      this
    );
  }
  ceil() {
    return (
      (this.x = Math.ceil(this.x)),
      (this.y = Math.ceil(this.y)),
      (this.z = Math.ceil(this.z)),
      (this.w = Math.ceil(this.w)),
      this
    );
  }
  round() {
    return (
      (this.x = Math.round(this.x)),
      (this.y = Math.round(this.y)),
      (this.z = Math.round(this.z)),
      (this.w = Math.round(this.w)),
      this
    );
  }
  roundToZero() {
    return (
      (this.x = Math.trunc(this.x)),
      (this.y = Math.trunc(this.y)),
      (this.z = Math.trunc(this.z)),
      (this.w = Math.trunc(this.w)),
      this
    );
  }
  negate() {
    return (
      (this.x = -this.x),
      (this.y = -this.y),
      (this.z = -this.z),
      (this.w = -this.w),
      this
    );
  }
  dot(e) {
    return this.x * e.x + this.y * e.y + this.z * e.z + this.w * e.w;
  }
  lengthSq() {
    return (
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w
    );
  }
  length() {
    return Math.sqrt(
      this.x * this.x + this.y * this.y + this.z * this.z + this.w * this.w,
    );
  }
  manhattanLength() {
    return (
      Math.abs(this.x) + Math.abs(this.y) + Math.abs(this.z) + Math.abs(this.w)
    );
  }
  normalize() {
    return this.divideScalar(this.length() || 1);
  }
  setLength(e) {
    return this.normalize().multiplyScalar(e);
  }
  lerp(e, t) {
    return (
      (this.x += (e.x - this.x) * t),
      (this.y += (e.y - this.y) * t),
      (this.z += (e.z - this.z) * t),
      (this.w += (e.w - this.w) * t),
      this
    );
  }
  lerpVectors(e, t, n) {
    return (
      (this.x = e.x + (t.x - e.x) * n),
      (this.y = e.y + (t.y - e.y) * n),
      (this.z = e.z + (t.z - e.z) * n),
      (this.w = e.w + (t.w - e.w) * n),
      this
    );
  }
  equals(e) {
    return e.x === this.x && e.y === this.y && e.z === this.z && e.w === this.w;
  }
  fromArray(e, t = 0) {
    return (
      (this.x = e[t]),
      (this.y = e[t + 1]),
      (this.z = e[t + 2]),
      (this.w = e[t + 3]),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this.x),
      (e[t + 1] = this.y),
      (e[t + 2] = this.z),
      (e[t + 3] = this.w),
      e
    );
  }
  fromBufferAttribute(e, t) {
    return (
      (this.x = e.getX(t)),
      (this.y = e.getY(t)),
      (this.z = e.getZ(t)),
      (this.w = e.getW(t)),
      this
    );
  }
  random() {
    return (
      (this.x = Math.random()),
      (this.y = Math.random()),
      (this.z = Math.random()),
      (this.w = Math.random()),
      this
    );
  }
  *[Symbol.iterator]() {
    (yield this.x, yield this.y, yield this.z, yield this.w);
  }
}
class sm extends rr {
  constructor(e = 1, t = 1, n = {}) {
    (super(),
      (n = Object.assign(
        {
          generateMipmaps: !1,
          internalFormat: null,
          minFilter: wt,
          depthBuffer: !0,
          stencilBuffer: !1,
          resolveDepthBuffer: !0,
          resolveStencilBuffer: !0,
          depthTexture: null,
          samples: 0,
          count: 1,
          depth: 1,
          multiview: !1,
        },
        n,
      )),
      (this.isRenderTarget = !0),
      (this.width = e),
      (this.height = t),
      (this.depth = n.depth),
      (this.scissor = new Ke(0, 0, e, t)),
      (this.scissorTest = !1),
      (this.viewport = new Ke(0, 0, e, t)));
    const i = { width: e, height: t, depth: n.depth },
      r = new ut(i);
    this.textures = [];
    const a = n.count;
    for (let o = 0; o < a; o++)
      ((this.textures[o] = r.clone()),
        (this.textures[o].isRenderTargetTexture = !0),
        (this.textures[o].renderTarget = this));
    (this._setTextureOptions(n),
      (this.depthBuffer = n.depthBuffer),
      (this.stencilBuffer = n.stencilBuffer),
      (this.resolveDepthBuffer = n.resolveDepthBuffer),
      (this.resolveStencilBuffer = n.resolveStencilBuffer),
      (this._depthTexture = null),
      (this.depthTexture = n.depthTexture),
      (this.samples = n.samples),
      (this.multiview = n.multiview));
  }
  _setTextureOptions(e = {}) {
    const t = {
      minFilter: wt,
      generateMipmaps: !1,
      flipY: !1,
      internalFormat: null,
    };
    (e.mapping !== void 0 && (t.mapping = e.mapping),
      e.wrapS !== void 0 && (t.wrapS = e.wrapS),
      e.wrapT !== void 0 && (t.wrapT = e.wrapT),
      e.wrapR !== void 0 && (t.wrapR = e.wrapR),
      e.magFilter !== void 0 && (t.magFilter = e.magFilter),
      e.minFilter !== void 0 && (t.minFilter = e.minFilter),
      e.format !== void 0 && (t.format = e.format),
      e.type !== void 0 && (t.type = e.type),
      e.anisotropy !== void 0 && (t.anisotropy = e.anisotropy),
      e.colorSpace !== void 0 && (t.colorSpace = e.colorSpace),
      e.flipY !== void 0 && (t.flipY = e.flipY),
      e.generateMipmaps !== void 0 && (t.generateMipmaps = e.generateMipmaps),
      e.internalFormat !== void 0 && (t.internalFormat = e.internalFormat));
    for (let n = 0; n < this.textures.length; n++)
      this.textures[n].setValues(t);
  }
  get texture() {
    return this.textures[0];
  }
  set texture(e) {
    this.textures[0] = e;
  }
  set depthTexture(e) {
    (this._depthTexture !== null && (this._depthTexture.renderTarget = null),
      e !== null && (e.renderTarget = this),
      (this._depthTexture = e));
  }
  get depthTexture() {
    return this._depthTexture;
  }
  setSize(e, t, n = 1) {
    if (this.width !== e || this.height !== t || this.depth !== n) {
      ((this.width = e), (this.height = t), (this.depth = n));
      for (let i = 0, r = this.textures.length; i < r; i++)
        ((this.textures[i].image.width = e),
          (this.textures[i].image.height = t),
          (this.textures[i].image.depth = n),
          (this.textures[i].isArrayTexture = this.textures[i].image.depth > 1));
      this.dispose();
    }
    (this.viewport.set(0, 0, e, t), this.scissor.set(0, 0, e, t));
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    ((this.width = e.width),
      (this.height = e.height),
      (this.depth = e.depth),
      this.scissor.copy(e.scissor),
      (this.scissorTest = e.scissorTest),
      this.viewport.copy(e.viewport),
      (this.textures.length = 0));
    for (let t = 0, n = e.textures.length; t < n; t++) {
      ((this.textures[t] = e.textures[t].clone()),
        (this.textures[t].isRenderTargetTexture = !0),
        (this.textures[t].renderTarget = this));
      const i = Object.assign({}, e.textures[t].image);
      this.textures[t].source = new hc(i);
    }
    return (
      (this.depthBuffer = e.depthBuffer),
      (this.stencilBuffer = e.stencilBuffer),
      (this.resolveDepthBuffer = e.resolveDepthBuffer),
      (this.resolveStencilBuffer = e.resolveStencilBuffer),
      e.depthTexture !== null && (this.depthTexture = e.depthTexture.clone()),
      (this.samples = e.samples),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
class ci extends sm {
  constructor(e = 1, t = 1, n = {}) {
    (super(e, t, n), (this.isWebGLRenderTarget = !0));
  }
}
class rd extends ut {
  constructor(e = null, t = 1, n = 1, i = 1) {
    (super(null),
      (this.isDataArrayTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = qt),
      (this.minFilter = qt),
      (this.wrapR = kt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1),
      (this.layerUpdates = new Set()));
  }
  addLayerUpdate(e) {
    this.layerUpdates.add(e);
  }
  clearLayerUpdates() {
    this.layerUpdates.clear();
  }
}
class am extends ut {
  constructor(e = null, t = 1, n = 1, i = 1) {
    (super(null),
      (this.isData3DTexture = !0),
      (this.image = { data: e, width: t, height: n, depth: i }),
      (this.magFilter = qt),
      (this.minFilter = qt),
      (this.wrapR = kt),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1));
  }
}
class di {
  constructor(
    e = new L(1 / 0, 1 / 0, 1 / 0),
    t = new L(-1 / 0, -1 / 0, -1 / 0),
  ) {
    ((this.isBox3 = !0), (this.min = e), (this.max = t));
  }
  set(e, t) {
    return (this.min.copy(e), this.max.copy(t), this);
  }
  setFromArray(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t += 3)
      this.expandByPoint(An.fromArray(e, t));
    return this;
  }
  setFromBufferAttribute(e) {
    this.makeEmpty();
    for (let t = 0, n = e.count; t < n; t++)
      this.expandByPoint(An.fromBufferAttribute(e, t));
    return this;
  }
  setFromPoints(e) {
    this.makeEmpty();
    for (let t = 0, n = e.length; t < n; t++) this.expandByPoint(e[t]);
    return this;
  }
  setFromCenterAndSize(e, t) {
    const n = An.copy(t).multiplyScalar(0.5);
    return (this.min.copy(e).sub(n), this.max.copy(e).add(n), this);
  }
  setFromObject(e, t = !1) {
    return (this.makeEmpty(), this.expandByObject(e, t));
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.min.copy(e.min), this.max.copy(e.max), this);
  }
  makeEmpty() {
    return (
      (this.min.x = this.min.y = this.min.z = 1 / 0),
      (this.max.x = this.max.y = this.max.z = -1 / 0),
      this
    );
  }
  isEmpty() {
    return (
      this.max.x < this.min.x ||
      this.max.y < this.min.y ||
      this.max.z < this.min.z
    );
  }
  getCenter(e) {
    return this.isEmpty()
      ? e.set(0, 0, 0)
      : e.addVectors(this.min, this.max).multiplyScalar(0.5);
  }
  getSize(e) {
    return this.isEmpty() ? e.set(0, 0, 0) : e.subVectors(this.max, this.min);
  }
  expandByPoint(e) {
    return (this.min.min(e), this.max.max(e), this);
  }
  expandByVector(e) {
    return (this.min.sub(e), this.max.add(e), this);
  }
  expandByScalar(e) {
    return (this.min.addScalar(-e), this.max.addScalar(e), this);
  }
  expandByObject(e, t = !1) {
    e.updateWorldMatrix(!1, !1);
    const n = e.geometry;
    if (n !== void 0) {
      const r = n.getAttribute("position");
      if (t === !0 && r !== void 0 && e.isInstancedMesh !== !0)
        for (let a = 0, o = r.count; a < o; a++)
          (e.isMesh === !0
            ? e.getVertexPosition(a, An)
            : An.fromBufferAttribute(r, a),
            An.applyMatrix4(e.matrixWorld),
            this.expandByPoint(An));
      else
        (e.boundingBox !== void 0
          ? (e.boundingBox === null && e.computeBoundingBox(),
            Ws.copy(e.boundingBox))
          : (n.boundingBox === null && n.computeBoundingBox(),
            Ws.copy(n.boundingBox)),
          Ws.applyMatrix4(e.matrixWorld),
          this.union(Ws));
    }
    const i = e.children;
    for (let r = 0, a = i.length; r < a; r++) this.expandByObject(i[r], t);
    return this;
  }
  containsPoint(e) {
    return (
      e.x >= this.min.x &&
      e.x <= this.max.x &&
      e.y >= this.min.y &&
      e.y <= this.max.y &&
      e.z >= this.min.z &&
      e.z <= this.max.z
    );
  }
  containsBox(e) {
    return (
      this.min.x <= e.min.x &&
      e.max.x <= this.max.x &&
      this.min.y <= e.min.y &&
      e.max.y <= this.max.y &&
      this.min.z <= e.min.z &&
      e.max.z <= this.max.z
    );
  }
  getParameter(e, t) {
    return t.set(
      (e.x - this.min.x) / (this.max.x - this.min.x),
      (e.y - this.min.y) / (this.max.y - this.min.y),
      (e.z - this.min.z) / (this.max.z - this.min.z),
    );
  }
  intersectsBox(e) {
    return (
      e.max.x >= this.min.x &&
      e.min.x <= this.max.x &&
      e.max.y >= this.min.y &&
      e.min.y <= this.max.y &&
      e.max.z >= this.min.z &&
      e.min.z <= this.max.z
    );
  }
  intersectsSphere(e) {
    return (
      this.clampPoint(e.center, An),
      An.distanceToSquared(e.center) <= e.radius * e.radius
    );
  }
  intersectsPlane(e) {
    let t, n;
    return (
      e.normal.x > 0
        ? ((t = e.normal.x * this.min.x), (n = e.normal.x * this.max.x))
        : ((t = e.normal.x * this.max.x), (n = e.normal.x * this.min.x)),
      e.normal.y > 0
        ? ((t += e.normal.y * this.min.y), (n += e.normal.y * this.max.y))
        : ((t += e.normal.y * this.max.y), (n += e.normal.y * this.min.y)),
      e.normal.z > 0
        ? ((t += e.normal.z * this.min.z), (n += e.normal.z * this.max.z))
        : ((t += e.normal.z * this.max.z), (n += e.normal.z * this.min.z)),
      t <= -e.constant && n >= -e.constant
    );
  }
  intersectsTriangle(e) {
    if (this.isEmpty()) return !1;
    (this.getCenter(ss),
      Xs.subVectors(this.max, ss),
      cr.subVectors(e.a, ss),
      hr.subVectors(e.b, ss),
      ur.subVectors(e.c, ss),
      fi.subVectors(hr, cr),
      pi.subVectors(ur, hr),
      Fi.subVectors(cr, ur));
    let t = [
      0,
      -fi.z,
      fi.y,
      0,
      -pi.z,
      pi.y,
      0,
      -Fi.z,
      Fi.y,
      fi.z,
      0,
      -fi.x,
      pi.z,
      0,
      -pi.x,
      Fi.z,
      0,
      -Fi.x,
      -fi.y,
      fi.x,
      0,
      -pi.y,
      pi.x,
      0,
      -Fi.y,
      Fi.x,
      0,
    ];
    return !io(t, cr, hr, ur, Xs) ||
      ((t = [1, 0, 0, 0, 1, 0, 0, 0, 1]), !io(t, cr, hr, ur, Xs))
      ? !1
      : (Ys.crossVectors(fi, pi),
        (t = [Ys.x, Ys.y, Ys.z]),
        io(t, cr, hr, ur, Xs));
  }
  clampPoint(e, t) {
    return t.copy(e).clamp(this.min, this.max);
  }
  distanceToPoint(e) {
    return this.clampPoint(e, An).distanceTo(e);
  }
  getBoundingSphere(e) {
    return (
      this.isEmpty()
        ? e.makeEmpty()
        : (this.getCenter(e.center),
          (e.radius = this.getSize(An).length() * 0.5)),
      e
    );
  }
  intersect(e) {
    return (
      this.min.max(e.min),
      this.max.min(e.max),
      this.isEmpty() && this.makeEmpty(),
      this
    );
  }
  union(e) {
    return (this.min.min(e.min), this.max.max(e.max), this);
  }
  applyMatrix4(e) {
    return this.isEmpty()
      ? this
      : (jn[0].set(this.min.x, this.min.y, this.min.z).applyMatrix4(e),
        jn[1].set(this.min.x, this.min.y, this.max.z).applyMatrix4(e),
        jn[2].set(this.min.x, this.max.y, this.min.z).applyMatrix4(e),
        jn[3].set(this.min.x, this.max.y, this.max.z).applyMatrix4(e),
        jn[4].set(this.max.x, this.min.y, this.min.z).applyMatrix4(e),
        jn[5].set(this.max.x, this.min.y, this.max.z).applyMatrix4(e),
        jn[6].set(this.max.x, this.max.y, this.min.z).applyMatrix4(e),
        jn[7].set(this.max.x, this.max.y, this.max.z).applyMatrix4(e),
        this.setFromPoints(jn),
        this);
  }
  translate(e) {
    return (this.min.add(e), this.max.add(e), this);
  }
  equals(e) {
    return e.min.equals(this.min) && e.max.equals(this.max);
  }
  toJSON() {
    return { min: this.min.toArray(), max: this.max.toArray() };
  }
  fromJSON(e) {
    return (this.min.fromArray(e.min), this.max.fromArray(e.max), this);
  }
}
const jn = [
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
    new L(),
  ],
  An = new L(),
  Ws = new di(),
  cr = new L(),
  hr = new L(),
  ur = new L(),
  fi = new L(),
  pi = new L(),
  Fi = new L(),
  ss = new L(),
  Xs = new L(),
  Ys = new L(),
  Bi = new L();
function io(s, e, t, n, i) {
  for (let r = 0, a = s.length - 3; r <= a; r += 3) {
    Bi.fromArray(s, r);
    const o =
        i.x * Math.abs(Bi.x) + i.y * Math.abs(Bi.y) + i.z * Math.abs(Bi.z),
      l = e.dot(Bi),
      c = t.dot(Bi),
      h = n.dot(Bi);
    if (Math.max(-Math.max(l, c, h), Math.min(l, c, h)) > o) return !1;
  }
  return !0;
}
const om = new di(),
  as = new L(),
  ro = new L();
class Xn {
  constructor(e = new L(), t = -1) {
    ((this.isSphere = !0), (this.center = e), (this.radius = t));
  }
  set(e, t) {
    return (this.center.copy(e), (this.radius = t), this);
  }
  setFromPoints(e, t) {
    const n = this.center;
    t !== void 0 ? n.copy(t) : om.setFromPoints(e).getCenter(n);
    let i = 0;
    for (let r = 0, a = e.length; r < a; r++)
      i = Math.max(i, n.distanceToSquared(e[r]));
    return ((this.radius = Math.sqrt(i)), this);
  }
  copy(e) {
    return (this.center.copy(e.center), (this.radius = e.radius), this);
  }
  isEmpty() {
    return this.radius < 0;
  }
  makeEmpty() {
    return (this.center.set(0, 0, 0), (this.radius = -1), this);
  }
  containsPoint(e) {
    return e.distanceToSquared(this.center) <= this.radius * this.radius;
  }
  distanceToPoint(e) {
    return e.distanceTo(this.center) - this.radius;
  }
  intersectsSphere(e) {
    const t = this.radius + e.radius;
    return e.center.distanceToSquared(this.center) <= t * t;
  }
  intersectsBox(e) {
    return e.intersectsSphere(this);
  }
  intersectsPlane(e) {
    return Math.abs(e.distanceToPoint(this.center)) <= this.radius;
  }
  clampPoint(e, t) {
    const n = this.center.distanceToSquared(e);
    return (
      t.copy(e),
      n > this.radius * this.radius &&
        (t.sub(this.center).normalize(),
        t.multiplyScalar(this.radius).add(this.center)),
      t
    );
  }
  getBoundingBox(e) {
    return this.isEmpty()
      ? (e.makeEmpty(), e)
      : (e.set(this.center, this.center), e.expandByScalar(this.radius), e);
  }
  applyMatrix4(e) {
    return (
      this.center.applyMatrix4(e),
      (this.radius = this.radius * e.getMaxScaleOnAxis()),
      this
    );
  }
  translate(e) {
    return (this.center.add(e), this);
  }
  expandByPoint(e) {
    if (this.isEmpty()) return (this.center.copy(e), (this.radius = 0), this);
    as.subVectors(e, this.center);
    const t = as.lengthSq();
    if (t > this.radius * this.radius) {
      const n = Math.sqrt(t),
        i = (n - this.radius) * 0.5;
      (this.center.addScaledVector(as, i / n), (this.radius += i));
    }
    return this;
  }
  union(e) {
    return e.isEmpty()
      ? this
      : this.isEmpty()
        ? (this.copy(e), this)
        : (this.center.equals(e.center) === !0
            ? (this.radius = Math.max(this.radius, e.radius))
            : (ro.subVectors(e.center, this.center).setLength(e.radius),
              this.expandByPoint(as.copy(e.center).add(ro)),
              this.expandByPoint(as.copy(e.center).sub(ro))),
          this);
  }
  equals(e) {
    return e.center.equals(this.center) && e.radius === this.radius;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    return { radius: this.radius, center: this.center.toArray() };
  }
  fromJSON(e) {
    return ((this.radius = e.radius), this.center.fromArray(e.center), this);
  }
}
const Kn = new L(),
  so = new L(),
  qs = new L(),
  mi = new L(),
  ao = new L(),
  js = new L(),
  oo = new L();
class Qr {
  constructor(e = new L(), t = new L(0, 0, -1)) {
    ((this.origin = e), (this.direction = t));
  }
  set(e, t) {
    return (this.origin.copy(e), this.direction.copy(t), this);
  }
  copy(e) {
    return (this.origin.copy(e.origin), this.direction.copy(e.direction), this);
  }
  at(e, t) {
    return t.copy(this.origin).addScaledVector(this.direction, e);
  }
  lookAt(e) {
    return (this.direction.copy(e).sub(this.origin).normalize(), this);
  }
  recast(e) {
    return (this.origin.copy(this.at(e, Kn)), this);
  }
  closestPointToPoint(e, t) {
    t.subVectors(e, this.origin);
    const n = t.dot(this.direction);
    return n < 0
      ? t.copy(this.origin)
      : t.copy(this.origin).addScaledVector(this.direction, n);
  }
  distanceToPoint(e) {
    return Math.sqrt(this.distanceSqToPoint(e));
  }
  distanceSqToPoint(e) {
    const t = Kn.subVectors(e, this.origin).dot(this.direction);
    return t < 0
      ? this.origin.distanceToSquared(e)
      : (Kn.copy(this.origin).addScaledVector(this.direction, t),
        Kn.distanceToSquared(e));
  }
  distanceSqToSegment(e, t, n, i) {
    (so.copy(e).add(t).multiplyScalar(0.5),
      qs.copy(t).sub(e).normalize(),
      mi.copy(this.origin).sub(so));
    const r = e.distanceTo(t) * 0.5,
      a = -this.direction.dot(qs),
      o = mi.dot(this.direction),
      l = -mi.dot(qs),
      c = mi.lengthSq(),
      h = Math.abs(1 - a * a);
    let u, d, f, g;
    if (h > 0)
      if (((u = a * l - o), (d = a * o - l), (g = r * h), u >= 0))
        if (d >= -g)
          if (d <= g) {
            const _ = 1 / h;
            ((u *= _),
              (d *= _),
              (f = u * (u + a * d + 2 * o) + d * (a * u + d + 2 * l) + c));
          } else
            ((d = r),
              (u = Math.max(0, -(a * d + o))),
              (f = -u * u + d * (d + 2 * l) + c));
        else
          ((d = -r),
            (u = Math.max(0, -(a * d + o))),
            (f = -u * u + d * (d + 2 * l) + c));
      else
        d <= -g
          ? ((u = Math.max(0, -(-a * r + o))),
            (d = u > 0 ? -r : Math.min(Math.max(-r, -l), r)),
            (f = -u * u + d * (d + 2 * l) + c))
          : d <= g
            ? ((u = 0),
              (d = Math.min(Math.max(-r, -l), r)),
              (f = d * (d + 2 * l) + c))
            : ((u = Math.max(0, -(a * r + o))),
              (d = u > 0 ? r : Math.min(Math.max(-r, -l), r)),
              (f = -u * u + d * (d + 2 * l) + c));
    else
      ((d = a > 0 ? -r : r),
        (u = Math.max(0, -(a * d + o))),
        (f = -u * u + d * (d + 2 * l) + c));
    return (
      n && n.copy(this.origin).addScaledVector(this.direction, u),
      i && i.copy(so).addScaledVector(qs, d),
      f
    );
  }
  intersectSphere(e, t) {
    Kn.subVectors(e.center, this.origin);
    const n = Kn.dot(this.direction),
      i = Kn.dot(Kn) - n * n,
      r = e.radius * e.radius;
    if (i > r) return null;
    const a = Math.sqrt(r - i),
      o = n - a,
      l = n + a;
    return l < 0 ? null : o < 0 ? this.at(l, t) : this.at(o, t);
  }
  intersectsSphere(e) {
    return e.radius < 0
      ? !1
      : this.distanceSqToPoint(e.center) <= e.radius * e.radius;
  }
  distanceToPlane(e) {
    const t = e.normal.dot(this.direction);
    if (t === 0) return e.distanceToPoint(this.origin) === 0 ? 0 : null;
    const n = -(this.origin.dot(e.normal) + e.constant) / t;
    return n >= 0 ? n : null;
  }
  intersectPlane(e, t) {
    const n = this.distanceToPlane(e);
    return n === null ? null : this.at(n, t);
  }
  intersectsPlane(e) {
    const t = e.distanceToPoint(this.origin);
    return t === 0 || e.normal.dot(this.direction) * t < 0;
  }
  intersectBox(e, t) {
    let n, i, r, a, o, l;
    const c = 1 / this.direction.x,
      h = 1 / this.direction.y,
      u = 1 / this.direction.z,
      d = this.origin;
    return (
      c >= 0
        ? ((n = (e.min.x - d.x) * c), (i = (e.max.x - d.x) * c))
        : ((n = (e.max.x - d.x) * c), (i = (e.min.x - d.x) * c)),
      h >= 0
        ? ((r = (e.min.y - d.y) * h), (a = (e.max.y - d.y) * h))
        : ((r = (e.max.y - d.y) * h), (a = (e.min.y - d.y) * h)),
      n > a ||
      r > i ||
      ((r > n || isNaN(n)) && (n = r),
      (a < i || isNaN(i)) && (i = a),
      u >= 0
        ? ((o = (e.min.z - d.z) * u), (l = (e.max.z - d.z) * u))
        : ((o = (e.max.z - d.z) * u), (l = (e.min.z - d.z) * u)),
      n > l || o > i) ||
      ((o > n || n !== n) && (n = o), (l < i || i !== i) && (i = l), i < 0)
        ? null
        : this.at(n >= 0 ? n : i, t)
    );
  }
  intersectsBox(e) {
    return this.intersectBox(e, Kn) !== null;
  }
  intersectTriangle(e, t, n, i, r) {
    (ao.subVectors(t, e), js.subVectors(n, e), oo.crossVectors(ao, js));
    let a = this.direction.dot(oo),
      o;
    if (a > 0) {
      if (i) return null;
      o = 1;
    } else if (a < 0) ((o = -1), (a = -a));
    else return null;
    mi.subVectors(this.origin, e);
    const l = o * this.direction.dot(js.crossVectors(mi, js));
    if (l < 0) return null;
    const c = o * this.direction.dot(ao.cross(mi));
    if (c < 0 || l + c > a) return null;
    const h = -o * mi.dot(oo);
    return h < 0 ? null : this.at(h / a, r);
  }
  applyMatrix4(e) {
    return (
      this.origin.applyMatrix4(e),
      this.direction.transformDirection(e),
      this
    );
  }
  equals(e) {
    return e.origin.equals(this.origin) && e.direction.equals(this.direction);
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class Oe {
  constructor(e, t, n, i, r, a, o, l, c, h, u, d, f, g, _, m) {
    ((Oe.prototype.isMatrix4 = !0),
      (this.elements = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1]),
      e !== void 0 && this.set(e, t, n, i, r, a, o, l, c, h, u, d, f, g, _, m));
  }
  set(e, t, n, i, r, a, o, l, c, h, u, d, f, g, _, m) {
    const p = this.elements;
    return (
      (p[0] = e),
      (p[4] = t),
      (p[8] = n),
      (p[12] = i),
      (p[1] = r),
      (p[5] = a),
      (p[9] = o),
      (p[13] = l),
      (p[2] = c),
      (p[6] = h),
      (p[10] = u),
      (p[14] = d),
      (p[3] = f),
      (p[7] = g),
      (p[11] = _),
      (p[15] = m),
      this
    );
  }
  identity() {
    return (this.set(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
  }
  clone() {
    return new Oe().fromArray(this.elements);
  }
  copy(e) {
    const t = this.elements,
      n = e.elements;
    return (
      (t[0] = n[0]),
      (t[1] = n[1]),
      (t[2] = n[2]),
      (t[3] = n[3]),
      (t[4] = n[4]),
      (t[5] = n[5]),
      (t[6] = n[6]),
      (t[7] = n[7]),
      (t[8] = n[8]),
      (t[9] = n[9]),
      (t[10] = n[10]),
      (t[11] = n[11]),
      (t[12] = n[12]),
      (t[13] = n[13]),
      (t[14] = n[14]),
      (t[15] = n[15]),
      this
    );
  }
  copyPosition(e) {
    const t = this.elements,
      n = e.elements;
    return ((t[12] = n[12]), (t[13] = n[13]), (t[14] = n[14]), this);
  }
  setFromMatrix3(e) {
    const t = e.elements;
    return (
      this.set(
        t[0],
        t[3],
        t[6],
        0,
        t[1],
        t[4],
        t[7],
        0,
        t[2],
        t[5],
        t[8],
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractBasis(e, t, n) {
    return (
      e.setFromMatrixColumn(this, 0),
      t.setFromMatrixColumn(this, 1),
      n.setFromMatrixColumn(this, 2),
      this
    );
  }
  makeBasis(e, t, n) {
    return (
      this.set(
        e.x,
        t.x,
        n.x,
        0,
        e.y,
        t.y,
        n.y,
        0,
        e.z,
        t.z,
        n.z,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  extractRotation(e) {
    const t = this.elements,
      n = e.elements,
      i = 1 / dr.setFromMatrixColumn(e, 0).length(),
      r = 1 / dr.setFromMatrixColumn(e, 1).length(),
      a = 1 / dr.setFromMatrixColumn(e, 2).length();
    return (
      (t[0] = n[0] * i),
      (t[1] = n[1] * i),
      (t[2] = n[2] * i),
      (t[3] = 0),
      (t[4] = n[4] * r),
      (t[5] = n[5] * r),
      (t[6] = n[6] * r),
      (t[7] = 0),
      (t[8] = n[8] * a),
      (t[9] = n[9] * a),
      (t[10] = n[10] * a),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromEuler(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z,
      a = Math.cos(n),
      o = Math.sin(n),
      l = Math.cos(i),
      c = Math.sin(i),
      h = Math.cos(r),
      u = Math.sin(r);
    if (e.order === "XYZ") {
      const d = a * h,
        f = a * u,
        g = o * h,
        _ = o * u;
      ((t[0] = l * h),
        (t[4] = -l * u),
        (t[8] = c),
        (t[1] = f + g * c),
        (t[5] = d - _ * c),
        (t[9] = -o * l),
        (t[2] = _ - d * c),
        (t[6] = g + f * c),
        (t[10] = a * l));
    } else if (e.order === "YXZ") {
      const d = l * h,
        f = l * u,
        g = c * h,
        _ = c * u;
      ((t[0] = d + _ * o),
        (t[4] = g * o - f),
        (t[8] = a * c),
        (t[1] = a * u),
        (t[5] = a * h),
        (t[9] = -o),
        (t[2] = f * o - g),
        (t[6] = _ + d * o),
        (t[10] = a * l));
    } else if (e.order === "ZXY") {
      const d = l * h,
        f = l * u,
        g = c * h,
        _ = c * u;
      ((t[0] = d - _ * o),
        (t[4] = -a * u),
        (t[8] = g + f * o),
        (t[1] = f + g * o),
        (t[5] = a * h),
        (t[9] = _ - d * o),
        (t[2] = -a * c),
        (t[6] = o),
        (t[10] = a * l));
    } else if (e.order === "ZYX") {
      const d = a * h,
        f = a * u,
        g = o * h,
        _ = o * u;
      ((t[0] = l * h),
        (t[4] = g * c - f),
        (t[8] = d * c + _),
        (t[1] = l * u),
        (t[5] = _ * c + d),
        (t[9] = f * c - g),
        (t[2] = -c),
        (t[6] = o * l),
        (t[10] = a * l));
    } else if (e.order === "YZX") {
      const d = a * l,
        f = a * c,
        g = o * l,
        _ = o * c;
      ((t[0] = l * h),
        (t[4] = _ - d * u),
        (t[8] = g * u + f),
        (t[1] = u),
        (t[5] = a * h),
        (t[9] = -o * h),
        (t[2] = -c * h),
        (t[6] = f * u + g),
        (t[10] = d - _ * u));
    } else if (e.order === "XZY") {
      const d = a * l,
        f = a * c,
        g = o * l,
        _ = o * c;
      ((t[0] = l * h),
        (t[4] = -u),
        (t[8] = c * h),
        (t[1] = d * u + _),
        (t[5] = a * h),
        (t[9] = f * u - g),
        (t[2] = g * u - f),
        (t[6] = o * h),
        (t[10] = _ * u + d));
    }
    return (
      (t[3] = 0),
      (t[7] = 0),
      (t[11] = 0),
      (t[12] = 0),
      (t[13] = 0),
      (t[14] = 0),
      (t[15] = 1),
      this
    );
  }
  makeRotationFromQuaternion(e) {
    return this.compose(lm, e, cm);
  }
  lookAt(e, t, n) {
    const i = this.elements;
    return (
      on.subVectors(e, t),
      on.lengthSq() === 0 && (on.z = 1),
      on.normalize(),
      _i.crossVectors(n, on),
      _i.lengthSq() === 0 &&
        (Math.abs(n.z) === 1 ? (on.x += 1e-4) : (on.z += 1e-4),
        on.normalize(),
        _i.crossVectors(n, on)),
      _i.normalize(),
      Ks.crossVectors(on, _i),
      (i[0] = _i.x),
      (i[4] = Ks.x),
      (i[8] = on.x),
      (i[1] = _i.y),
      (i[5] = Ks.y),
      (i[9] = on.y),
      (i[2] = _i.z),
      (i[6] = Ks.z),
      (i[10] = on.z),
      this
    );
  }
  multiply(e) {
    return this.multiplyMatrices(this, e);
  }
  premultiply(e) {
    return this.multiplyMatrices(e, this);
  }
  multiplyMatrices(e, t) {
    const n = e.elements,
      i = t.elements,
      r = this.elements,
      a = n[0],
      o = n[4],
      l = n[8],
      c = n[12],
      h = n[1],
      u = n[5],
      d = n[9],
      f = n[13],
      g = n[2],
      _ = n[6],
      m = n[10],
      p = n[14],
      S = n[3],
      M = n[7],
      v = n[11],
      b = n[15],
      A = i[0],
      w = i[4],
      C = i[8],
      x = i[12],
      E = i[1],
      P = i[5],
      V = i[9],
      F = i[13],
      z = i[2],
      q = i[6],
      G = i[10],
      K = i[14],
      H = i[3],
      re = i[7],
      ae = i[11],
      _e = i[15];
    return (
      (r[0] = a * A + o * E + l * z + c * H),
      (r[4] = a * w + o * P + l * q + c * re),
      (r[8] = a * C + o * V + l * G + c * ae),
      (r[12] = a * x + o * F + l * K + c * _e),
      (r[1] = h * A + u * E + d * z + f * H),
      (r[5] = h * w + u * P + d * q + f * re),
      (r[9] = h * C + u * V + d * G + f * ae),
      (r[13] = h * x + u * F + d * K + f * _e),
      (r[2] = g * A + _ * E + m * z + p * H),
      (r[6] = g * w + _ * P + m * q + p * re),
      (r[10] = g * C + _ * V + m * G + p * ae),
      (r[14] = g * x + _ * F + m * K + p * _e),
      (r[3] = S * A + M * E + v * z + b * H),
      (r[7] = S * w + M * P + v * q + b * re),
      (r[11] = S * C + M * V + v * G + b * ae),
      (r[15] = S * x + M * F + v * K + b * _e),
      this
    );
  }
  multiplyScalar(e) {
    const t = this.elements;
    return (
      (t[0] *= e),
      (t[4] *= e),
      (t[8] *= e),
      (t[12] *= e),
      (t[1] *= e),
      (t[5] *= e),
      (t[9] *= e),
      (t[13] *= e),
      (t[2] *= e),
      (t[6] *= e),
      (t[10] *= e),
      (t[14] *= e),
      (t[3] *= e),
      (t[7] *= e),
      (t[11] *= e),
      (t[15] *= e),
      this
    );
  }
  determinant() {
    const e = this.elements,
      t = e[0],
      n = e[4],
      i = e[8],
      r = e[12],
      a = e[1],
      o = e[5],
      l = e[9],
      c = e[13],
      h = e[2],
      u = e[6],
      d = e[10],
      f = e[14],
      g = e[3],
      _ = e[7],
      m = e[11],
      p = e[15];
    return (
      g *
        (+r * l * u -
          i * c * u -
          r * o * d +
          n * c * d +
          i * o * f -
          n * l * f) +
      _ *
        (+t * l * f -
          t * c * d +
          r * a * d -
          i * a * f +
          i * c * h -
          r * l * h) +
      m *
        (+t * c * u -
          t * o * f -
          r * a * u +
          n * a * f +
          r * o * h -
          n * c * h) +
      p *
        (-i * o * h - t * l * u + t * o * d + i * a * u - n * a * d + n * l * h)
    );
  }
  transpose() {
    const e = this.elements;
    let t;
    return (
      (t = e[1]),
      (e[1] = e[4]),
      (e[4] = t),
      (t = e[2]),
      (e[2] = e[8]),
      (e[8] = t),
      (t = e[6]),
      (e[6] = e[9]),
      (e[9] = t),
      (t = e[3]),
      (e[3] = e[12]),
      (e[12] = t),
      (t = e[7]),
      (e[7] = e[13]),
      (e[13] = t),
      (t = e[11]),
      (e[11] = e[14]),
      (e[14] = t),
      this
    );
  }
  setPosition(e, t, n) {
    const i = this.elements;
    return (
      e.isVector3
        ? ((i[12] = e.x), (i[13] = e.y), (i[14] = e.z))
        : ((i[12] = e), (i[13] = t), (i[14] = n)),
      this
    );
  }
  invert() {
    const e = this.elements,
      t = e[0],
      n = e[1],
      i = e[2],
      r = e[3],
      a = e[4],
      o = e[5],
      l = e[6],
      c = e[7],
      h = e[8],
      u = e[9],
      d = e[10],
      f = e[11],
      g = e[12],
      _ = e[13],
      m = e[14],
      p = e[15],
      S = u * m * c - _ * d * c + _ * l * f - o * m * f - u * l * p + o * d * p,
      M = g * d * c - h * m * c - g * l * f + a * m * f + h * l * p - a * d * p,
      v = h * _ * c - g * u * c + g * o * f - a * _ * f - h * o * p + a * u * p,
      b = g * u * l - h * _ * l - g * o * d + a * _ * d + h * o * m - a * u * m,
      A = t * S + n * M + i * v + r * b;
    if (A === 0)
      return this.set(0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0);
    const w = 1 / A;
    return (
      (e[0] = S * w),
      (e[1] =
        (_ * d * r -
          u * m * r -
          _ * i * f +
          n * m * f +
          u * i * p -
          n * d * p) *
        w),
      (e[2] =
        (o * m * r -
          _ * l * r +
          _ * i * c -
          n * m * c -
          o * i * p +
          n * l * p) *
        w),
      (e[3] =
        (u * l * r -
          o * d * r -
          u * i * c +
          n * d * c +
          o * i * f -
          n * l * f) *
        w),
      (e[4] = M * w),
      (e[5] =
        (h * m * r -
          g * d * r +
          g * i * f -
          t * m * f -
          h * i * p +
          t * d * p) *
        w),
      (e[6] =
        (g * l * r -
          a * m * r -
          g * i * c +
          t * m * c +
          a * i * p -
          t * l * p) *
        w),
      (e[7] =
        (a * d * r -
          h * l * r +
          h * i * c -
          t * d * c -
          a * i * f +
          t * l * f) *
        w),
      (e[8] = v * w),
      (e[9] =
        (g * u * r -
          h * _ * r -
          g * n * f +
          t * _ * f +
          h * n * p -
          t * u * p) *
        w),
      (e[10] =
        (a * _ * r -
          g * o * r +
          g * n * c -
          t * _ * c -
          a * n * p +
          t * o * p) *
        w),
      (e[11] =
        (h * o * r -
          a * u * r -
          h * n * c +
          t * u * c +
          a * n * f -
          t * o * f) *
        w),
      (e[12] = b * w),
      (e[13] =
        (h * _ * i -
          g * u * i +
          g * n * d -
          t * _ * d -
          h * n * m +
          t * u * m) *
        w),
      (e[14] =
        (g * o * i -
          a * _ * i -
          g * n * l +
          t * _ * l +
          a * n * m -
          t * o * m) *
        w),
      (e[15] =
        (a * u * i -
          h * o * i +
          h * n * l -
          t * u * l -
          a * n * d +
          t * o * d) *
        w),
      this
    );
  }
  scale(e) {
    const t = this.elements,
      n = e.x,
      i = e.y,
      r = e.z;
    return (
      (t[0] *= n),
      (t[4] *= i),
      (t[8] *= r),
      (t[1] *= n),
      (t[5] *= i),
      (t[9] *= r),
      (t[2] *= n),
      (t[6] *= i),
      (t[10] *= r),
      (t[3] *= n),
      (t[7] *= i),
      (t[11] *= r),
      this
    );
  }
  getMaxScaleOnAxis() {
    const e = this.elements,
      t = e[0] * e[0] + e[1] * e[1] + e[2] * e[2],
      n = e[4] * e[4] + e[5] * e[5] + e[6] * e[6],
      i = e[8] * e[8] + e[9] * e[9] + e[10] * e[10];
    return Math.sqrt(Math.max(t, n, i));
  }
  makeTranslation(e, t, n) {
    return (
      e.isVector3
        ? this.set(1, 0, 0, e.x, 0, 1, 0, e.y, 0, 0, 1, e.z, 0, 0, 0, 1)
        : this.set(1, 0, 0, e, 0, 1, 0, t, 0, 0, 1, n, 0, 0, 0, 1),
      this
    );
  }
  makeRotationX(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(1, 0, 0, 0, 0, t, -n, 0, 0, n, t, 0, 0, 0, 0, 1), this);
  }
  makeRotationY(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(t, 0, n, 0, 0, 1, 0, 0, -n, 0, t, 0, 0, 0, 0, 1), this);
  }
  makeRotationZ(e) {
    const t = Math.cos(e),
      n = Math.sin(e);
    return (this.set(t, -n, 0, 0, n, t, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1), this);
  }
  makeRotationAxis(e, t) {
    const n = Math.cos(t),
      i = Math.sin(t),
      r = 1 - n,
      a = e.x,
      o = e.y,
      l = e.z,
      c = r * a,
      h = r * o;
    return (
      this.set(
        c * a + n,
        c * o - i * l,
        c * l + i * o,
        0,
        c * o + i * l,
        h * o + n,
        h * l - i * a,
        0,
        c * l - i * o,
        h * l + i * a,
        r * l * l + n,
        0,
        0,
        0,
        0,
        1,
      ),
      this
    );
  }
  makeScale(e, t, n) {
    return (this.set(e, 0, 0, 0, 0, t, 0, 0, 0, 0, n, 0, 0, 0, 0, 1), this);
  }
  makeShear(e, t, n, i, r, a) {
    return (this.set(1, n, r, 0, e, 1, a, 0, t, i, 1, 0, 0, 0, 0, 1), this);
  }
  compose(e, t, n) {
    const i = this.elements,
      r = t._x,
      a = t._y,
      o = t._z,
      l = t._w,
      c = r + r,
      h = a + a,
      u = o + o,
      d = r * c,
      f = r * h,
      g = r * u,
      _ = a * h,
      m = a * u,
      p = o * u,
      S = l * c,
      M = l * h,
      v = l * u,
      b = n.x,
      A = n.y,
      w = n.z;
    return (
      (i[0] = (1 - (_ + p)) * b),
      (i[1] = (f + v) * b),
      (i[2] = (g - M) * b),
      (i[3] = 0),
      (i[4] = (f - v) * A),
      (i[5] = (1 - (d + p)) * A),
      (i[6] = (m + S) * A),
      (i[7] = 0),
      (i[8] = (g + M) * w),
      (i[9] = (m - S) * w),
      (i[10] = (1 - (d + _)) * w),
      (i[11] = 0),
      (i[12] = e.x),
      (i[13] = e.y),
      (i[14] = e.z),
      (i[15] = 1),
      this
    );
  }
  decompose(e, t, n) {
    const i = this.elements;
    let r = dr.set(i[0], i[1], i[2]).length();
    const a = dr.set(i[4], i[5], i[6]).length(),
      o = dr.set(i[8], i[9], i[10]).length();
    (this.determinant() < 0 && (r = -r),
      (e.x = i[12]),
      (e.y = i[13]),
      (e.z = i[14]),
      wn.copy(this));
    const c = 1 / r,
      h = 1 / a,
      u = 1 / o;
    return (
      (wn.elements[0] *= c),
      (wn.elements[1] *= c),
      (wn.elements[2] *= c),
      (wn.elements[4] *= h),
      (wn.elements[5] *= h),
      (wn.elements[6] *= h),
      (wn.elements[8] *= u),
      (wn.elements[9] *= u),
      (wn.elements[10] *= u),
      t.setFromRotationMatrix(wn),
      (n.x = r),
      (n.y = a),
      (n.z = o),
      this
    );
  }
  makePerspective(e, t, n, i, r, a, o = kn, l = !1) {
    const c = this.elements,
      h = (2 * r) / (t - e),
      u = (2 * r) / (n - i),
      d = (t + e) / (t - e),
      f = (n + i) / (n - i);
    let g, _;
    if (l) ((g = r / (a - r)), (_ = (a * r) / (a - r)));
    else if (o === kn) ((g = -(a + r) / (a - r)), (_ = (-2 * a * r) / (a - r)));
    else if (o === La) ((g = -a / (a - r)), (_ = (-a * r) / (a - r)));
    else
      throw new Error(
        "THREE.Matrix4.makePerspective(): Invalid coordinate system: " + o,
      );
    return (
      (c[0] = h),
      (c[4] = 0),
      (c[8] = d),
      (c[12] = 0),
      (c[1] = 0),
      (c[5] = u),
      (c[9] = f),
      (c[13] = 0),
      (c[2] = 0),
      (c[6] = 0),
      (c[10] = g),
      (c[14] = _),
      (c[3] = 0),
      (c[7] = 0),
      (c[11] = -1),
      (c[15] = 0),
      this
    );
  }
  makeOrthographic(e, t, n, i, r, a, o = kn, l = !1) {
    const c = this.elements,
      h = 2 / (t - e),
      u = 2 / (n - i),
      d = -(t + e) / (t - e),
      f = -(n + i) / (n - i);
    let g, _;
    if (l) ((g = 1 / (a - r)), (_ = a / (a - r)));
    else if (o === kn) ((g = -2 / (a - r)), (_ = -(a + r) / (a - r)));
    else if (o === La) ((g = -1 / (a - r)), (_ = -r / (a - r)));
    else
      throw new Error(
        "THREE.Matrix4.makeOrthographic(): Invalid coordinate system: " + o,
      );
    return (
      (c[0] = h),
      (c[4] = 0),
      (c[8] = 0),
      (c[12] = d),
      (c[1] = 0),
      (c[5] = u),
      (c[9] = 0),
      (c[13] = f),
      (c[2] = 0),
      (c[6] = 0),
      (c[10] = g),
      (c[14] = _),
      (c[3] = 0),
      (c[7] = 0),
      (c[11] = 0),
      (c[15] = 1),
      this
    );
  }
  equals(e) {
    const t = this.elements,
      n = e.elements;
    for (let i = 0; i < 16; i++) if (t[i] !== n[i]) return !1;
    return !0;
  }
  fromArray(e, t = 0) {
    for (let n = 0; n < 16; n++) this.elements[n] = e[n + t];
    return this;
  }
  toArray(e = [], t = 0) {
    const n = this.elements;
    return (
      (e[t] = n[0]),
      (e[t + 1] = n[1]),
      (e[t + 2] = n[2]),
      (e[t + 3] = n[3]),
      (e[t + 4] = n[4]),
      (e[t + 5] = n[5]),
      (e[t + 6] = n[6]),
      (e[t + 7] = n[7]),
      (e[t + 8] = n[8]),
      (e[t + 9] = n[9]),
      (e[t + 10] = n[10]),
      (e[t + 11] = n[11]),
      (e[t + 12] = n[12]),
      (e[t + 13] = n[13]),
      (e[t + 14] = n[14]),
      (e[t + 15] = n[15]),
      e
    );
  }
}
const dr = new L(),
  wn = new Oe(),
  lm = new L(0, 0, 0),
  cm = new L(1, 1, 1),
  _i = new L(),
  Ks = new L(),
  on = new L(),
  dh = new Oe(),
  fh = new Hn();
class Vn {
  constructor(e = 0, t = 0, n = 0, i = Vn.DEFAULT_ORDER) {
    ((this.isEuler = !0),
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i));
  }
  get x() {
    return this._x;
  }
  set x(e) {
    ((this._x = e), this._onChangeCallback());
  }
  get y() {
    return this._y;
  }
  set y(e) {
    ((this._y = e), this._onChangeCallback());
  }
  get z() {
    return this._z;
  }
  set z(e) {
    ((this._z = e), this._onChangeCallback());
  }
  get order() {
    return this._order;
  }
  set order(e) {
    ((this._order = e), this._onChangeCallback());
  }
  set(e, t, n, i = this._order) {
    return (
      (this._x = e),
      (this._y = t),
      (this._z = n),
      (this._order = i),
      this._onChangeCallback(),
      this
    );
  }
  clone() {
    return new this.constructor(this._x, this._y, this._z, this._order);
  }
  copy(e) {
    return (
      (this._x = e._x),
      (this._y = e._y),
      (this._z = e._z),
      (this._order = e._order),
      this._onChangeCallback(),
      this
    );
  }
  setFromRotationMatrix(e, t = this._order, n = !0) {
    const i = e.elements,
      r = i[0],
      a = i[4],
      o = i[8],
      l = i[1],
      c = i[5],
      h = i[9],
      u = i[2],
      d = i[6],
      f = i[10];
    switch (t) {
      case "XYZ":
        ((this._y = Math.asin(ze(o, -1, 1))),
          Math.abs(o) < 0.9999999
            ? ((this._x = Math.atan2(-h, f)), (this._z = Math.atan2(-a, r)))
            : ((this._x = Math.atan2(d, c)), (this._z = 0)));
        break;
      case "YXZ":
        ((this._x = Math.asin(-ze(h, -1, 1))),
          Math.abs(h) < 0.9999999
            ? ((this._y = Math.atan2(o, f)), (this._z = Math.atan2(l, c)))
            : ((this._y = Math.atan2(-u, r)), (this._z = 0)));
        break;
      case "ZXY":
        ((this._x = Math.asin(ze(d, -1, 1))),
          Math.abs(d) < 0.9999999
            ? ((this._y = Math.atan2(-u, f)), (this._z = Math.atan2(-a, c)))
            : ((this._y = 0), (this._z = Math.atan2(l, r))));
        break;
      case "ZYX":
        ((this._y = Math.asin(-ze(u, -1, 1))),
          Math.abs(u) < 0.9999999
            ? ((this._x = Math.atan2(d, f)), (this._z = Math.atan2(l, r)))
            : ((this._x = 0), (this._z = Math.atan2(-a, c))));
        break;
      case "YZX":
        ((this._z = Math.asin(ze(l, -1, 1))),
          Math.abs(l) < 0.9999999
            ? ((this._x = Math.atan2(-h, c)), (this._y = Math.atan2(-u, r)))
            : ((this._x = 0), (this._y = Math.atan2(o, f))));
        break;
      case "XZY":
        ((this._z = Math.asin(-ze(a, -1, 1))),
          Math.abs(a) < 0.9999999
            ? ((this._x = Math.atan2(d, c)), (this._y = Math.atan2(o, r)))
            : ((this._x = Math.atan2(-h, f)), (this._y = 0)));
        break;
      default:
        console.warn(
          "THREE.Euler: .setFromRotationMatrix() encountered an unknown order: " +
            t,
        );
    }
    return ((this._order = t), n === !0 && this._onChangeCallback(), this);
  }
  setFromQuaternion(e, t, n) {
    return (
      dh.makeRotationFromQuaternion(e),
      this.setFromRotationMatrix(dh, t, n)
    );
  }
  setFromVector3(e, t = this._order) {
    return this.set(e.x, e.y, e.z, t);
  }
  reorder(e) {
    return (fh.setFromEuler(this), this.setFromQuaternion(fh, e));
  }
  equals(e) {
    return (
      e._x === this._x &&
      e._y === this._y &&
      e._z === this._z &&
      e._order === this._order
    );
  }
  fromArray(e) {
    return (
      (this._x = e[0]),
      (this._y = e[1]),
      (this._z = e[2]),
      e[3] !== void 0 && (this._order = e[3]),
      this._onChangeCallback(),
      this
    );
  }
  toArray(e = [], t = 0) {
    return (
      (e[t] = this._x),
      (e[t + 1] = this._y),
      (e[t + 2] = this._z),
      (e[t + 3] = this._order),
      e
    );
  }
  _onChange(e) {
    return ((this._onChangeCallback = e), this);
  }
  _onChangeCallback() {}
  *[Symbol.iterator]() {
    (yield this._x, yield this._y, yield this._z, yield this._order);
  }
}
Vn.DEFAULT_ORDER = "XYZ";
class uc {
  constructor() {
    this.mask = 1;
  }
  set(e) {
    this.mask = ((1 << e) | 0) >>> 0;
  }
  enable(e) {
    this.mask |= (1 << e) | 0;
  }
  enableAll() {
    this.mask = -1;
  }
  toggle(e) {
    this.mask ^= (1 << e) | 0;
  }
  disable(e) {
    this.mask &= ~((1 << e) | 0);
  }
  disableAll() {
    this.mask = 0;
  }
  test(e) {
    return (this.mask & e.mask) !== 0;
  }
  isEnabled(e) {
    return (this.mask & ((1 << e) | 0)) !== 0;
  }
}
let hm = 0;
const ph = new L(),
  fr = new Hn(),
  Zn = new Oe(),
  Zs = new L(),
  os = new L(),
  um = new L(),
  dm = new Hn(),
  mh = new L(1, 0, 0),
  _h = new L(0, 1, 0),
  gh = new L(0, 0, 1),
  xh = { type: "added" },
  fm = { type: "removed" },
  pr = { type: "childadded", child: null },
  lo = { type: "childremoved", child: null };
class dt extends rr {
  constructor() {
    (super(),
      (this.isObject3D = !0),
      Object.defineProperty(this, "id", { value: hm++ }),
      (this.uuid = Ln()),
      (this.name = ""),
      (this.type = "Object3D"),
      (this.parent = null),
      (this.children = []),
      (this.up = dt.DEFAULT_UP.clone()));
    const e = new L(),
      t = new Vn(),
      n = new Hn(),
      i = new L(1, 1, 1);
    function r() {
      n.setFromEuler(t, !1);
    }
    function a() {
      t.setFromQuaternion(n, void 0, !1);
    }
    (t._onChange(r),
      n._onChange(a),
      Object.defineProperties(this, {
        position: { configurable: !0, enumerable: !0, value: e },
        rotation: { configurable: !0, enumerable: !0, value: t },
        quaternion: { configurable: !0, enumerable: !0, value: n },
        scale: { configurable: !0, enumerable: !0, value: i },
        modelViewMatrix: { value: new Oe() },
        normalMatrix: { value: new Be() },
      }),
      (this.matrix = new Oe()),
      (this.matrixWorld = new Oe()),
      (this.matrixAutoUpdate = dt.DEFAULT_MATRIX_AUTO_UPDATE),
      (this.matrixWorldAutoUpdate = dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE),
      (this.matrixWorldNeedsUpdate = !1),
      (this.layers = new uc()),
      (this.visible = !0),
      (this.castShadow = !1),
      (this.receiveShadow = !1),
      (this.frustumCulled = !0),
      (this.renderOrder = 0),
      (this.animations = []),
      (this.customDepthMaterial = void 0),
      (this.customDistanceMaterial = void 0),
      (this.userData = {}));
  }
  onBeforeShadow() {}
  onAfterShadow() {}
  onBeforeRender() {}
  onAfterRender() {}
  applyMatrix4(e) {
    (this.matrixAutoUpdate && this.updateMatrix(),
      this.matrix.premultiply(e),
      this.matrix.decompose(this.position, this.quaternion, this.scale));
  }
  applyQuaternion(e) {
    return (this.quaternion.premultiply(e), this);
  }
  setRotationFromAxisAngle(e, t) {
    this.quaternion.setFromAxisAngle(e, t);
  }
  setRotationFromEuler(e) {
    this.quaternion.setFromEuler(e, !0);
  }
  setRotationFromMatrix(e) {
    this.quaternion.setFromRotationMatrix(e);
  }
  setRotationFromQuaternion(e) {
    this.quaternion.copy(e);
  }
  rotateOnAxis(e, t) {
    return (fr.setFromAxisAngle(e, t), this.quaternion.multiply(fr), this);
  }
  rotateOnWorldAxis(e, t) {
    return (fr.setFromAxisAngle(e, t), this.quaternion.premultiply(fr), this);
  }
  rotateX(e) {
    return this.rotateOnAxis(mh, e);
  }
  rotateY(e) {
    return this.rotateOnAxis(_h, e);
  }
  rotateZ(e) {
    return this.rotateOnAxis(gh, e);
  }
  translateOnAxis(e, t) {
    return (
      ph.copy(e).applyQuaternion(this.quaternion),
      this.position.add(ph.multiplyScalar(t)),
      this
    );
  }
  translateX(e) {
    return this.translateOnAxis(mh, e);
  }
  translateY(e) {
    return this.translateOnAxis(_h, e);
  }
  translateZ(e) {
    return this.translateOnAxis(gh, e);
  }
  localToWorld(e) {
    return (this.updateWorldMatrix(!0, !1), e.applyMatrix4(this.matrixWorld));
  }
  worldToLocal(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.applyMatrix4(Zn.copy(this.matrixWorld).invert())
    );
  }
  lookAt(e, t, n) {
    e.isVector3 ? Zs.copy(e) : Zs.set(e, t, n);
    const i = this.parent;
    (this.updateWorldMatrix(!0, !1),
      os.setFromMatrixPosition(this.matrixWorld),
      this.isCamera || this.isLight
        ? Zn.lookAt(os, Zs, this.up)
        : Zn.lookAt(Zs, os, this.up),
      this.quaternion.setFromRotationMatrix(Zn),
      i &&
        (Zn.extractRotation(i.matrixWorld),
        fr.setFromRotationMatrix(Zn),
        this.quaternion.premultiply(fr.invert())));
  }
  add(e) {
    if (arguments.length > 1) {
      for (let t = 0; t < arguments.length; t++) this.add(arguments[t]);
      return this;
    }
    return e === this
      ? (console.error(
          "THREE.Object3D.add: object can't be added as a child of itself.",
          e,
        ),
        this)
      : (e && e.isObject3D
          ? (e.removeFromParent(),
            (e.parent = this),
            this.children.push(e),
            e.dispatchEvent(xh),
            (pr.child = e),
            this.dispatchEvent(pr),
            (pr.child = null))
          : console.error(
              "THREE.Object3D.add: object not an instance of THREE.Object3D.",
              e,
            ),
        this);
  }
  remove(e) {
    if (arguments.length > 1) {
      for (let n = 0; n < arguments.length; n++) this.remove(arguments[n]);
      return this;
    }
    const t = this.children.indexOf(e);
    return (
      t !== -1 &&
        ((e.parent = null),
        this.children.splice(t, 1),
        e.dispatchEvent(fm),
        (lo.child = e),
        this.dispatchEvent(lo),
        (lo.child = null)),
      this
    );
  }
  removeFromParent() {
    const e = this.parent;
    return (e !== null && e.remove(this), this);
  }
  clear() {
    return this.remove(...this.children);
  }
  attach(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      Zn.copy(this.matrixWorld).invert(),
      e.parent !== null &&
        (e.parent.updateWorldMatrix(!0, !1), Zn.multiply(e.parent.matrixWorld)),
      e.applyMatrix4(Zn),
      e.removeFromParent(),
      (e.parent = this),
      this.children.push(e),
      e.updateWorldMatrix(!1, !0),
      e.dispatchEvent(xh),
      (pr.child = e),
      this.dispatchEvent(pr),
      (pr.child = null),
      this
    );
  }
  getObjectById(e) {
    return this.getObjectByProperty("id", e);
  }
  getObjectByName(e) {
    return this.getObjectByProperty("name", e);
  }
  getObjectByProperty(e, t) {
    if (this[e] === t) return this;
    for (let n = 0, i = this.children.length; n < i; n++) {
      const a = this.children[n].getObjectByProperty(e, t);
      if (a !== void 0) return a;
    }
  }
  getObjectsByProperty(e, t, n = []) {
    this[e] === t && n.push(this);
    const i = this.children;
    for (let r = 0, a = i.length; r < a; r++)
      i[r].getObjectsByProperty(e, t, n);
    return n;
  }
  getWorldPosition(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      e.setFromMatrixPosition(this.matrixWorld)
    );
  }
  getWorldQuaternion(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(os, e, um),
      e
    );
  }
  getWorldScale(e) {
    return (
      this.updateWorldMatrix(!0, !1),
      this.matrixWorld.decompose(os, dm, e),
      e
    );
  }
  getWorldDirection(e) {
    this.updateWorldMatrix(!0, !1);
    const t = this.matrixWorld.elements;
    return e.set(t[8], t[9], t[10]).normalize();
  }
  raycast() {}
  traverse(e) {
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverse(e);
  }
  traverseVisible(e) {
    if (this.visible === !1) return;
    e(this);
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].traverseVisible(e);
  }
  traverseAncestors(e) {
    const t = this.parent;
    t !== null && (e(t), t.traverseAncestors(e));
  }
  updateMatrix() {
    (this.matrix.compose(this.position, this.quaternion, this.scale),
      (this.matrixWorldNeedsUpdate = !0));
  }
  updateMatrixWorld(e) {
    (this.matrixAutoUpdate && this.updateMatrix(),
      (this.matrixWorldNeedsUpdate || e) &&
        (this.matrixWorldAutoUpdate === !0 &&
          (this.parent === null
            ? this.matrixWorld.copy(this.matrix)
            : this.matrixWorld.multiplyMatrices(
                this.parent.matrixWorld,
                this.matrix,
              )),
        (this.matrixWorldNeedsUpdate = !1),
        (e = !0)));
    const t = this.children;
    for (let n = 0, i = t.length; n < i; n++) t[n].updateMatrixWorld(e);
  }
  updateWorldMatrix(e, t) {
    const n = this.parent;
    if (
      (e === !0 && n !== null && n.updateWorldMatrix(!0, !1),
      this.matrixAutoUpdate && this.updateMatrix(),
      this.matrixWorldAutoUpdate === !0 &&
        (this.parent === null
          ? this.matrixWorld.copy(this.matrix)
          : this.matrixWorld.multiplyMatrices(
              this.parent.matrixWorld,
              this.matrix,
            )),
      t === !0)
    ) {
      const i = this.children;
      for (let r = 0, a = i.length; r < a; r++) i[r].updateWorldMatrix(!1, !0);
    }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string",
      n = {};
    t &&
      ((e = {
        geometries: {},
        materials: {},
        textures: {},
        images: {},
        shapes: {},
        skeletons: {},
        animations: {},
        nodes: {},
      }),
      (n.metadata = {
        version: 4.7,
        type: "Object",
        generator: "Object3D.toJSON",
      }));
    const i = {};
    ((i.uuid = this.uuid),
      (i.type = this.type),
      this.name !== "" && (i.name = this.name),
      this.castShadow === !0 && (i.castShadow = !0),
      this.receiveShadow === !0 && (i.receiveShadow = !0),
      this.visible === !1 && (i.visible = !1),
      this.frustumCulled === !1 && (i.frustumCulled = !1),
      this.renderOrder !== 0 && (i.renderOrder = this.renderOrder),
      Object.keys(this.userData).length > 0 && (i.userData = this.userData),
      (i.layers = this.layers.mask),
      (i.matrix = this.matrix.toArray()),
      (i.up = this.up.toArray()),
      this.matrixAutoUpdate === !1 && (i.matrixAutoUpdate = !1),
      this.isInstancedMesh &&
        ((i.type = "InstancedMesh"),
        (i.count = this.count),
        (i.instanceMatrix = this.instanceMatrix.toJSON()),
        this.instanceColor !== null &&
          (i.instanceColor = this.instanceColor.toJSON())),
      this.isBatchedMesh &&
        ((i.type = "BatchedMesh"),
        (i.perObjectFrustumCulled = this.perObjectFrustumCulled),
        (i.sortObjects = this.sortObjects),
        (i.drawRanges = this._drawRanges),
        (i.reservedRanges = this._reservedRanges),
        (i.geometryInfo = this._geometryInfo.map((o) => ({
          ...o,
          boundingBox: o.boundingBox ? o.boundingBox.toJSON() : void 0,
          boundingSphere: o.boundingSphere ? o.boundingSphere.toJSON() : void 0,
        }))),
        (i.instanceInfo = this._instanceInfo.map((o) => ({ ...o }))),
        (i.availableInstanceIds = this._availableInstanceIds.slice()),
        (i.availableGeometryIds = this._availableGeometryIds.slice()),
        (i.nextIndexStart = this._nextIndexStart),
        (i.nextVertexStart = this._nextVertexStart),
        (i.geometryCount = this._geometryCount),
        (i.maxInstanceCount = this._maxInstanceCount),
        (i.maxVertexCount = this._maxVertexCount),
        (i.maxIndexCount = this._maxIndexCount),
        (i.geometryInitialized = this._geometryInitialized),
        (i.matricesTexture = this._matricesTexture.toJSON(e)),
        (i.indirectTexture = this._indirectTexture.toJSON(e)),
        this._colorsTexture !== null &&
          (i.colorsTexture = this._colorsTexture.toJSON(e)),
        this.boundingSphere !== null &&
          (i.boundingSphere = this.boundingSphere.toJSON()),
        this.boundingBox !== null &&
          (i.boundingBox = this.boundingBox.toJSON())));
    function r(o, l) {
      return (o[l.uuid] === void 0 && (o[l.uuid] = l.toJSON(e)), l.uuid);
    }
    if (this.isScene)
      (this.background &&
        (this.background.isColor
          ? (i.background = this.background.toJSON())
          : this.background.isTexture &&
            (i.background = this.background.toJSON(e).uuid)),
        this.environment &&
          this.environment.isTexture &&
          this.environment.isRenderTargetTexture !== !0 &&
          (i.environment = this.environment.toJSON(e).uuid));
    else if (this.isMesh || this.isLine || this.isPoints) {
      i.geometry = r(e.geometries, this.geometry);
      const o = this.geometry.parameters;
      if (o !== void 0 && o.shapes !== void 0) {
        const l = o.shapes;
        if (Array.isArray(l))
          for (let c = 0, h = l.length; c < h; c++) {
            const u = l[c];
            r(e.shapes, u);
          }
        else r(e.shapes, l);
      }
    }
    if (
      (this.isSkinnedMesh &&
        ((i.bindMode = this.bindMode),
        (i.bindMatrix = this.bindMatrix.toArray()),
        this.skeleton !== void 0 &&
          (r(e.skeletons, this.skeleton), (i.skeleton = this.skeleton.uuid))),
      this.material !== void 0)
    )
      if (Array.isArray(this.material)) {
        const o = [];
        for (let l = 0, c = this.material.length; l < c; l++)
          o.push(r(e.materials, this.material[l]));
        i.material = o;
      } else i.material = r(e.materials, this.material);
    if (this.children.length > 0) {
      i.children = [];
      for (let o = 0; o < this.children.length; o++)
        i.children.push(this.children[o].toJSON(e).object);
    }
    if (this.animations.length > 0) {
      i.animations = [];
      for (let o = 0; o < this.animations.length; o++) {
        const l = this.animations[o];
        i.animations.push(r(e.animations, l));
      }
    }
    if (t) {
      const o = a(e.geometries),
        l = a(e.materials),
        c = a(e.textures),
        h = a(e.images),
        u = a(e.shapes),
        d = a(e.skeletons),
        f = a(e.animations),
        g = a(e.nodes);
      (o.length > 0 && (n.geometries = o),
        l.length > 0 && (n.materials = l),
        c.length > 0 && (n.textures = c),
        h.length > 0 && (n.images = h),
        u.length > 0 && (n.shapes = u),
        d.length > 0 && (n.skeletons = d),
        f.length > 0 && (n.animations = f),
        g.length > 0 && (n.nodes = g));
    }
    return ((n.object = i), n);
    function a(o) {
      const l = [];
      for (const c in o) {
        const h = o[c];
        (delete h.metadata, l.push(h));
      }
      return l;
    }
  }
  clone(e) {
    return new this.constructor().copy(this, e);
  }
  copy(e, t = !0) {
    if (
      ((this.name = e.name),
      this.up.copy(e.up),
      this.position.copy(e.position),
      (this.rotation.order = e.rotation.order),
      this.quaternion.copy(e.quaternion),
      this.scale.copy(e.scale),
      this.matrix.copy(e.matrix),
      this.matrixWorld.copy(e.matrixWorld),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      (this.matrixWorldAutoUpdate = e.matrixWorldAutoUpdate),
      (this.matrixWorldNeedsUpdate = e.matrixWorldNeedsUpdate),
      (this.layers.mask = e.layers.mask),
      (this.visible = e.visible),
      (this.castShadow = e.castShadow),
      (this.receiveShadow = e.receiveShadow),
      (this.frustumCulled = e.frustumCulled),
      (this.renderOrder = e.renderOrder),
      (this.animations = e.animations.slice()),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      t === !0)
    )
      for (let n = 0; n < e.children.length; n++) {
        const i = e.children[n];
        this.add(i.clone());
      }
    return this;
  }
}
dt.DEFAULT_UP = new L(0, 1, 0);
dt.DEFAULT_MATRIX_AUTO_UPDATE = !0;
dt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE = !0;
const Rn = new L(),
  $n = new L(),
  co = new L(),
  Jn = new L(),
  mr = new L(),
  _r = new L(),
  vh = new L(),
  ho = new L(),
  uo = new L(),
  fo = new L(),
  po = new Ke(),
  mo = new Ke(),
  _o = new Ke();
class Dn {
  constructor(e = new L(), t = new L(), n = new L()) {
    ((this.a = e), (this.b = t), (this.c = n));
  }
  static getNormal(e, t, n, i) {
    (i.subVectors(n, t), Rn.subVectors(e, t), i.cross(Rn));
    const r = i.lengthSq();
    return r > 0 ? i.multiplyScalar(1 / Math.sqrt(r)) : i.set(0, 0, 0);
  }
  static getBarycoord(e, t, n, i, r) {
    (Rn.subVectors(i, t), $n.subVectors(n, t), co.subVectors(e, t));
    const a = Rn.dot(Rn),
      o = Rn.dot($n),
      l = Rn.dot(co),
      c = $n.dot($n),
      h = $n.dot(co),
      u = a * c - o * o;
    if (u === 0) return (r.set(0, 0, 0), null);
    const d = 1 / u,
      f = (c * l - o * h) * d,
      g = (a * h - o * l) * d;
    return r.set(1 - f - g, g, f);
  }
  static containsPoint(e, t, n, i) {
    return this.getBarycoord(e, t, n, i, Jn) === null
      ? !1
      : Jn.x >= 0 && Jn.y >= 0 && Jn.x + Jn.y <= 1;
  }
  static getInterpolation(e, t, n, i, r, a, o, l) {
    return this.getBarycoord(e, t, n, i, Jn) === null
      ? ((l.x = 0),
        (l.y = 0),
        "z" in l && (l.z = 0),
        "w" in l && (l.w = 0),
        null)
      : (l.setScalar(0),
        l.addScaledVector(r, Jn.x),
        l.addScaledVector(a, Jn.y),
        l.addScaledVector(o, Jn.z),
        l);
  }
  static getInterpolatedAttribute(e, t, n, i, r, a) {
    return (
      po.setScalar(0),
      mo.setScalar(0),
      _o.setScalar(0),
      po.fromBufferAttribute(e, t),
      mo.fromBufferAttribute(e, n),
      _o.fromBufferAttribute(e, i),
      a.setScalar(0),
      a.addScaledVector(po, r.x),
      a.addScaledVector(mo, r.y),
      a.addScaledVector(_o, r.z),
      a
    );
  }
  static isFrontFacing(e, t, n, i) {
    return (Rn.subVectors(n, t), $n.subVectors(e, t), Rn.cross($n).dot(i) < 0);
  }
  set(e, t, n) {
    return (this.a.copy(e), this.b.copy(t), this.c.copy(n), this);
  }
  setFromPointsAndIndices(e, t, n, i) {
    return (this.a.copy(e[t]), this.b.copy(e[n]), this.c.copy(e[i]), this);
  }
  setFromAttributeAndIndices(e, t, n, i) {
    return (
      this.a.fromBufferAttribute(e, t),
      this.b.fromBufferAttribute(e, n),
      this.c.fromBufferAttribute(e, i),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    return (this.a.copy(e.a), this.b.copy(e.b), this.c.copy(e.c), this);
  }
  getArea() {
    return (
      Rn.subVectors(this.c, this.b),
      $n.subVectors(this.a, this.b),
      Rn.cross($n).length() * 0.5
    );
  }
  getMidpoint(e) {
    return e
      .addVectors(this.a, this.b)
      .add(this.c)
      .multiplyScalar(1 / 3);
  }
  getNormal(e) {
    return Dn.getNormal(this.a, this.b, this.c, e);
  }
  getPlane(e) {
    return e.setFromCoplanarPoints(this.a, this.b, this.c);
  }
  getBarycoord(e, t) {
    return Dn.getBarycoord(e, this.a, this.b, this.c, t);
  }
  getInterpolation(e, t, n, i, r) {
    return Dn.getInterpolation(e, this.a, this.b, this.c, t, n, i, r);
  }
  containsPoint(e) {
    return Dn.containsPoint(e, this.a, this.b, this.c);
  }
  isFrontFacing(e) {
    return Dn.isFrontFacing(this.a, this.b, this.c, e);
  }
  intersectsBox(e) {
    return e.intersectsTriangle(this);
  }
  closestPointToPoint(e, t) {
    const n = this.a,
      i = this.b,
      r = this.c;
    let a, o;
    (mr.subVectors(i, n), _r.subVectors(r, n), ho.subVectors(e, n));
    const l = mr.dot(ho),
      c = _r.dot(ho);
    if (l <= 0 && c <= 0) return t.copy(n);
    uo.subVectors(e, i);
    const h = mr.dot(uo),
      u = _r.dot(uo);
    if (h >= 0 && u <= h) return t.copy(i);
    const d = l * u - h * c;
    if (d <= 0 && l >= 0 && h <= 0)
      return ((a = l / (l - h)), t.copy(n).addScaledVector(mr, a));
    fo.subVectors(e, r);
    const f = mr.dot(fo),
      g = _r.dot(fo);
    if (g >= 0 && f <= g) return t.copy(r);
    const _ = f * c - l * g;
    if (_ <= 0 && c >= 0 && g <= 0)
      return ((o = c / (c - g)), t.copy(n).addScaledVector(_r, o));
    const m = h * g - f * u;
    if (m <= 0 && u - h >= 0 && f - g >= 0)
      return (
        vh.subVectors(r, i),
        (o = (u - h) / (u - h + (f - g))),
        t.copy(i).addScaledVector(vh, o)
      );
    const p = 1 / (m + _ + d);
    return (
      (a = _ * p),
      (o = d * p),
      t.copy(n).addScaledVector(mr, a).addScaledVector(_r, o)
    );
  }
  equals(e) {
    return e.a.equals(this.a) && e.b.equals(this.b) && e.c.equals(this.c);
  }
}
const sd = {
    aliceblue: 15792383,
    antiquewhite: 16444375,
    aqua: 65535,
    aquamarine: 8388564,
    azure: 15794175,
    beige: 16119260,
    bisque: 16770244,
    black: 0,
    blanchedalmond: 16772045,
    blue: 255,
    blueviolet: 9055202,
    brown: 10824234,
    burlywood: 14596231,
    cadetblue: 6266528,
    chartreuse: 8388352,
    chocolate: 13789470,
    coral: 16744272,
    cornflowerblue: 6591981,
    cornsilk: 16775388,
    crimson: 14423100,
    cyan: 65535,
    darkblue: 139,
    darkcyan: 35723,
    darkgoldenrod: 12092939,
    darkgray: 11119017,
    darkgreen: 25600,
    darkgrey: 11119017,
    darkkhaki: 12433259,
    darkmagenta: 9109643,
    darkolivegreen: 5597999,
    darkorange: 16747520,
    darkorchid: 10040012,
    darkred: 9109504,
    darksalmon: 15308410,
    darkseagreen: 9419919,
    darkslateblue: 4734347,
    darkslategray: 3100495,
    darkslategrey: 3100495,
    darkturquoise: 52945,
    darkviolet: 9699539,
    deeppink: 16716947,
    deepskyblue: 49151,
    dimgray: 6908265,
    dimgrey: 6908265,
    dodgerblue: 2003199,
    firebrick: 11674146,
    floralwhite: 16775920,
    forestgreen: 2263842,
    fuchsia: 16711935,
    gainsboro: 14474460,
    ghostwhite: 16316671,
    gold: 16766720,
    goldenrod: 14329120,
    gray: 8421504,
    green: 32768,
    greenyellow: 11403055,
    grey: 8421504,
    honeydew: 15794160,
    hotpink: 16738740,
    indianred: 13458524,
    indigo: 4915330,
    ivory: 16777200,
    khaki: 15787660,
    lavender: 15132410,
    lavenderblush: 16773365,
    lawngreen: 8190976,
    lemonchiffon: 16775885,
    lightblue: 11393254,
    lightcoral: 15761536,
    lightcyan: 14745599,
    lightgoldenrodyellow: 16448210,
    lightgray: 13882323,
    lightgreen: 9498256,
    lightgrey: 13882323,
    lightpink: 16758465,
    lightsalmon: 16752762,
    lightseagreen: 2142890,
    lightskyblue: 8900346,
    lightslategray: 7833753,
    lightslategrey: 7833753,
    lightsteelblue: 11584734,
    lightyellow: 16777184,
    lime: 65280,
    limegreen: 3329330,
    linen: 16445670,
    magenta: 16711935,
    maroon: 8388608,
    mediumaquamarine: 6737322,
    mediumblue: 205,
    mediumorchid: 12211667,
    mediumpurple: 9662683,
    mediumseagreen: 3978097,
    mediumslateblue: 8087790,
    mediumspringgreen: 64154,
    mediumturquoise: 4772300,
    mediumvioletred: 13047173,
    midnightblue: 1644912,
    mintcream: 16121850,
    mistyrose: 16770273,
    moccasin: 16770229,
    navajowhite: 16768685,
    navy: 128,
    oldlace: 16643558,
    olive: 8421376,
    olivedrab: 7048739,
    orange: 16753920,
    orangered: 16729344,
    orchid: 14315734,
    palegoldenrod: 15657130,
    palegreen: 10025880,
    paleturquoise: 11529966,
    palevioletred: 14381203,
    papayawhip: 16773077,
    peachpuff: 16767673,
    peru: 13468991,
    pink: 16761035,
    plum: 14524637,
    powderblue: 11591910,
    purple: 8388736,
    rebeccapurple: 6697881,
    red: 16711680,
    rosybrown: 12357519,
    royalblue: 4286945,
    saddlebrown: 9127187,
    salmon: 16416882,
    sandybrown: 16032864,
    seagreen: 3050327,
    seashell: 16774638,
    sienna: 10506797,
    silver: 12632256,
    skyblue: 8900331,
    slateblue: 6970061,
    slategray: 7372944,
    slategrey: 7372944,
    snow: 16775930,
    springgreen: 65407,
    steelblue: 4620980,
    tan: 13808780,
    teal: 32896,
    thistle: 14204888,
    tomato: 16737095,
    turquoise: 4251856,
    violet: 15631086,
    wheat: 16113331,
    white: 16777215,
    whitesmoke: 16119285,
    yellow: 16776960,
    yellowgreen: 10145074,
  },
  gi = { h: 0, s: 0, l: 0 },
  $s = { h: 0, s: 0, l: 0 };
function go(s, e, t) {
  return (
    t < 0 && (t += 1),
    t > 1 && (t -= 1),
    t < 1 / 6
      ? s + (e - s) * 6 * t
      : t < 1 / 2
        ? e
        : t < 2 / 3
          ? s + (e - s) * 6 * (2 / 3 - t)
          : s
  );
}
class Ie {
  constructor(e, t, n) {
    return (
      (this.isColor = !0),
      (this.r = 1),
      (this.g = 1),
      (this.b = 1),
      this.set(e, t, n)
    );
  }
  set(e, t, n) {
    if (t === void 0 && n === void 0) {
      const i = e;
      i && i.isColor
        ? this.copy(i)
        : typeof i == "number"
          ? this.setHex(i)
          : typeof i == "string" && this.setStyle(i);
    } else this.setRGB(e, t, n);
    return this;
  }
  setScalar(e) {
    return ((this.r = e), (this.g = e), (this.b = e), this);
  }
  setHex(e, t = St) {
    return (
      (e = Math.floor(e)),
      (this.r = ((e >> 16) & 255) / 255),
      (this.g = ((e >> 8) & 255) / 255),
      (this.b = (e & 255) / 255),
      We.colorSpaceToWorking(this, t),
      this
    );
  }
  setRGB(e, t, n, i = We.workingColorSpace) {
    return (
      (this.r = e),
      (this.g = t),
      (this.b = n),
      We.colorSpaceToWorking(this, i),
      this
    );
  }
  setHSL(e, t, n, i = We.workingColorSpace) {
    if (((e = cc(e, 1)), (t = ze(t, 0, 1)), (n = ze(n, 0, 1)), t === 0))
      this.r = this.g = this.b = n;
    else {
      const r = n <= 0.5 ? n * (1 + t) : n + t - n * t,
        a = 2 * n - r;
      ((this.r = go(a, r, e + 1 / 3)),
        (this.g = go(a, r, e)),
        (this.b = go(a, r, e - 1 / 3)));
    }
    return (We.colorSpaceToWorking(this, i), this);
  }
  setStyle(e, t = St) {
    function n(r) {
      r !== void 0 &&
        parseFloat(r) < 1 &&
        console.warn(
          "THREE.Color: Alpha component of " + e + " will be ignored.",
        );
    }
    let i;
    if ((i = /^(\w+)\(([^\)]*)\)/.exec(e))) {
      let r;
      const a = i[1],
        o = i[2];
      switch (a) {
        case "rgb":
        case "rgba":
          if (
            (r =
              /^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(r[4]),
              this.setRGB(
                Math.min(255, parseInt(r[1], 10)) / 255,
                Math.min(255, parseInt(r[2], 10)) / 255,
                Math.min(255, parseInt(r[3], 10)) / 255,
                t,
              )
            );
          if (
            (r =
              /^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(r[4]),
              this.setRGB(
                Math.min(100, parseInt(r[1], 10)) / 100,
                Math.min(100, parseInt(r[2], 10)) / 100,
                Math.min(100, parseInt(r[3], 10)) / 100,
                t,
              )
            );
          break;
        case "hsl":
        case "hsla":
          if (
            (r =
              /^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(
                o,
              ))
          )
            return (
              n(r[4]),
              this.setHSL(
                parseFloat(r[1]) / 360,
                parseFloat(r[2]) / 100,
                parseFloat(r[3]) / 100,
                t,
              )
            );
          break;
        default:
          console.warn("THREE.Color: Unknown color model " + e);
      }
    } else if ((i = /^\#([A-Fa-f\d]+)$/.exec(e))) {
      const r = i[1],
        a = r.length;
      if (a === 3)
        return this.setRGB(
          parseInt(r.charAt(0), 16) / 15,
          parseInt(r.charAt(1), 16) / 15,
          parseInt(r.charAt(2), 16) / 15,
          t,
        );
      if (a === 6) return this.setHex(parseInt(r, 16), t);
      console.warn("THREE.Color: Invalid hex color " + e);
    } else if (e && e.length > 0) return this.setColorName(e, t);
    return this;
  }
  setColorName(e, t = St) {
    const n = sd[e.toLowerCase()];
    return (
      n !== void 0
        ? this.setHex(n, t)
        : console.warn("THREE.Color: Unknown color " + e),
      this
    );
  }
  clone() {
    return new this.constructor(this.r, this.g, this.b);
  }
  copy(e) {
    return ((this.r = e.r), (this.g = e.g), (this.b = e.b), this);
  }
  copySRGBToLinear(e) {
    return ((this.r = oi(e.r)), (this.g = oi(e.g)), (this.b = oi(e.b)), this);
  }
  copyLinearToSRGB(e) {
    return ((this.r = Lr(e.r)), (this.g = Lr(e.g)), (this.b = Lr(e.b)), this);
  }
  convertSRGBToLinear() {
    return (this.copySRGBToLinear(this), this);
  }
  convertLinearToSRGB() {
    return (this.copyLinearToSRGB(this), this);
  }
  getHex(e = St) {
    return (
      We.workingToColorSpace(Ft.copy(this), e),
      Math.round(ze(Ft.r * 255, 0, 255)) * 65536 +
        Math.round(ze(Ft.g * 255, 0, 255)) * 256 +
        Math.round(ze(Ft.b * 255, 0, 255))
    );
  }
  getHexString(e = St) {
    return ("000000" + this.getHex(e).toString(16)).slice(-6);
  }
  getHSL(e, t = We.workingColorSpace) {
    We.workingToColorSpace(Ft.copy(this), t);
    const n = Ft.r,
      i = Ft.g,
      r = Ft.b,
      a = Math.max(n, i, r),
      o = Math.min(n, i, r);
    let l, c;
    const h = (o + a) / 2;
    if (o === a) ((l = 0), (c = 0));
    else {
      const u = a - o;
      switch (((c = h <= 0.5 ? u / (a + o) : u / (2 - a - o)), a)) {
        case n:
          l = (i - r) / u + (i < r ? 6 : 0);
          break;
        case i:
          l = (r - n) / u + 2;
          break;
        case r:
          l = (n - i) / u + 4;
          break;
      }
      l /= 6;
    }
    return ((e.h = l), (e.s = c), (e.l = h), e);
  }
  getRGB(e, t = We.workingColorSpace) {
    return (
      We.workingToColorSpace(Ft.copy(this), t),
      (e.r = Ft.r),
      (e.g = Ft.g),
      (e.b = Ft.b),
      e
    );
  }
  getStyle(e = St) {
    We.workingToColorSpace(Ft.copy(this), e);
    const t = Ft.r,
      n = Ft.g,
      i = Ft.b;
    return e !== St
      ? `color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`
      : `rgb(${Math.round(t * 255)},${Math.round(n * 255)},${Math.round(i * 255)})`;
  }
  offsetHSL(e, t, n) {
    return (this.getHSL(gi), this.setHSL(gi.h + e, gi.s + t, gi.l + n));
  }
  add(e) {
    return ((this.r += e.r), (this.g += e.g), (this.b += e.b), this);
  }
  addColors(e, t) {
    return (
      (this.r = e.r + t.r),
      (this.g = e.g + t.g),
      (this.b = e.b + t.b),
      this
    );
  }
  addScalar(e) {
    return ((this.r += e), (this.g += e), (this.b += e), this);
  }
  sub(e) {
    return (
      (this.r = Math.max(0, this.r - e.r)),
      (this.g = Math.max(0, this.g - e.g)),
      (this.b = Math.max(0, this.b - e.b)),
      this
    );
  }
  multiply(e) {
    return ((this.r *= e.r), (this.g *= e.g), (this.b *= e.b), this);
  }
  multiplyScalar(e) {
    return ((this.r *= e), (this.g *= e), (this.b *= e), this);
  }
  lerp(e, t) {
    return (
      (this.r += (e.r - this.r) * t),
      (this.g += (e.g - this.g) * t),
      (this.b += (e.b - this.b) * t),
      this
    );
  }
  lerpColors(e, t, n) {
    return (
      (this.r = e.r + (t.r - e.r) * n),
      (this.g = e.g + (t.g - e.g) * n),
      (this.b = e.b + (t.b - e.b) * n),
      this
    );
  }
  lerpHSL(e, t) {
    (this.getHSL(gi), e.getHSL($s));
    const n = ys(gi.h, $s.h, t),
      i = ys(gi.s, $s.s, t),
      r = ys(gi.l, $s.l, t);
    return (this.setHSL(n, i, r), this);
  }
  setFromVector3(e) {
    return ((this.r = e.x), (this.g = e.y), (this.b = e.z), this);
  }
  applyMatrix3(e) {
    const t = this.r,
      n = this.g,
      i = this.b,
      r = e.elements;
    return (
      (this.r = r[0] * t + r[3] * n + r[6] * i),
      (this.g = r[1] * t + r[4] * n + r[7] * i),
      (this.b = r[2] * t + r[5] * n + r[8] * i),
      this
    );
  }
  equals(e) {
    return e.r === this.r && e.g === this.g && e.b === this.b;
  }
  fromArray(e, t = 0) {
    return ((this.r = e[t]), (this.g = e[t + 1]), (this.b = e[t + 2]), this);
  }
  toArray(e = [], t = 0) {
    return ((e[t] = this.r), (e[t + 1] = this.g), (e[t + 2] = this.b), e);
  }
  fromBufferAttribute(e, t) {
    return (
      (this.r = e.getX(t)),
      (this.g = e.getY(t)),
      (this.b = e.getZ(t)),
      this
    );
  }
  toJSON() {
    return this.getHex();
  }
  *[Symbol.iterator]() {
    (yield this.r, yield this.g, yield this.b);
  }
}
const Ft = new Ie();
Ie.NAMES = sd;
let pm = 0;
class In extends rr {
  constructor() {
    (super(),
      (this.isMaterial = !0),
      Object.defineProperty(this, "id", { value: pm++ }),
      (this.uuid = Ln()),
      (this.name = ""),
      (this.type = "Material"),
      (this.blending = Pr),
      (this.side = li),
      (this.vertexColors = !1),
      (this.opacity = 1),
      (this.transparent = !1),
      (this.alphaHash = !1),
      (this.blendSrc = qo),
      (this.blendDst = jo),
      (this.blendEquation = ji),
      (this.blendSrcAlpha = null),
      (this.blendDstAlpha = null),
      (this.blendEquationAlpha = null),
      (this.blendColor = new Ie(0, 0, 0)),
      (this.blendAlpha = 0),
      (this.depthFunc = Fr),
      (this.depthTest = !0),
      (this.depthWrite = !0),
      (this.stencilWriteMask = 255),
      (this.stencilFunc = sh),
      (this.stencilRef = 0),
      (this.stencilFuncMask = 255),
      (this.stencilFail = or),
      (this.stencilZFail = or),
      (this.stencilZPass = or),
      (this.stencilWrite = !1),
      (this.clippingPlanes = null),
      (this.clipIntersection = !1),
      (this.clipShadows = !1),
      (this.shadowSide = null),
      (this.colorWrite = !0),
      (this.precision = null),
      (this.polygonOffset = !1),
      (this.polygonOffsetFactor = 0),
      (this.polygonOffsetUnits = 0),
      (this.dithering = !1),
      (this.alphaToCoverage = !1),
      (this.premultipliedAlpha = !1),
      (this.forceSinglePass = !1),
      (this.allowOverride = !0),
      (this.visible = !0),
      (this.toneMapped = !0),
      (this.userData = {}),
      (this.version = 0),
      (this._alphaTest = 0));
  }
  get alphaTest() {
    return this._alphaTest;
  }
  set alphaTest(e) {
    (this._alphaTest > 0 != e > 0 && this.version++, (this._alphaTest = e));
  }
  onBeforeRender() {}
  onBeforeCompile() {}
  customProgramCacheKey() {
    return this.onBeforeCompile.toString();
  }
  setValues(e) {
    if (e !== void 0)
      for (const t in e) {
        const n = e[t];
        if (n === void 0) {
          console.warn(
            `THREE.Material: parameter '${t}' has value of undefined.`,
          );
          continue;
        }
        const i = this[t];
        if (i === void 0) {
          console.warn(
            `THREE.Material: '${t}' is not a property of THREE.${this.type}.`,
          );
          continue;
        }
        i && i.isColor
          ? i.set(n)
          : i && i.isVector3 && n && n.isVector3
            ? i.copy(n)
            : (this[t] = n);
      }
  }
  toJSON(e) {
    const t = e === void 0 || typeof e == "string";
    t && (e = { textures: {}, images: {} });
    const n = {
      metadata: {
        version: 4.7,
        type: "Material",
        generator: "Material.toJSON",
      },
    };
    ((n.uuid = this.uuid),
      (n.type = this.type),
      this.name !== "" && (n.name = this.name),
      this.color && this.color.isColor && (n.color = this.color.getHex()),
      this.roughness !== void 0 && (n.roughness = this.roughness),
      this.metalness !== void 0 && (n.metalness = this.metalness),
      this.sheen !== void 0 && (n.sheen = this.sheen),
      this.sheenColor &&
        this.sheenColor.isColor &&
        (n.sheenColor = this.sheenColor.getHex()),
      this.sheenRoughness !== void 0 &&
        (n.sheenRoughness = this.sheenRoughness),
      this.emissive &&
        this.emissive.isColor &&
        (n.emissive = this.emissive.getHex()),
      this.emissiveIntensity !== void 0 &&
        this.emissiveIntensity !== 1 &&
        (n.emissiveIntensity = this.emissiveIntensity),
      this.specular &&
        this.specular.isColor &&
        (n.specular = this.specular.getHex()),
      this.specularIntensity !== void 0 &&
        (n.specularIntensity = this.specularIntensity),
      this.specularColor &&
        this.specularColor.isColor &&
        (n.specularColor = this.specularColor.getHex()),
      this.shininess !== void 0 && (n.shininess = this.shininess),
      this.clearcoat !== void 0 && (n.clearcoat = this.clearcoat),
      this.clearcoatRoughness !== void 0 &&
        (n.clearcoatRoughness = this.clearcoatRoughness),
      this.clearcoatMap &&
        this.clearcoatMap.isTexture &&
        (n.clearcoatMap = this.clearcoatMap.toJSON(e).uuid),
      this.clearcoatRoughnessMap &&
        this.clearcoatRoughnessMap.isTexture &&
        (n.clearcoatRoughnessMap = this.clearcoatRoughnessMap.toJSON(e).uuid),
      this.clearcoatNormalMap &&
        this.clearcoatNormalMap.isTexture &&
        ((n.clearcoatNormalMap = this.clearcoatNormalMap.toJSON(e).uuid),
        (n.clearcoatNormalScale = this.clearcoatNormalScale.toArray())),
      this.dispersion !== void 0 && (n.dispersion = this.dispersion),
      this.iridescence !== void 0 && (n.iridescence = this.iridescence),
      this.iridescenceIOR !== void 0 &&
        (n.iridescenceIOR = this.iridescenceIOR),
      this.iridescenceThicknessRange !== void 0 &&
        (n.iridescenceThicknessRange = this.iridescenceThicknessRange),
      this.iridescenceMap &&
        this.iridescenceMap.isTexture &&
        (n.iridescenceMap = this.iridescenceMap.toJSON(e).uuid),
      this.iridescenceThicknessMap &&
        this.iridescenceThicknessMap.isTexture &&
        (n.iridescenceThicknessMap =
          this.iridescenceThicknessMap.toJSON(e).uuid),
      this.anisotropy !== void 0 && (n.anisotropy = this.anisotropy),
      this.anisotropyRotation !== void 0 &&
        (n.anisotropyRotation = this.anisotropyRotation),
      this.anisotropyMap &&
        this.anisotropyMap.isTexture &&
        (n.anisotropyMap = this.anisotropyMap.toJSON(e).uuid),
      this.map && this.map.isTexture && (n.map = this.map.toJSON(e).uuid),
      this.matcap &&
        this.matcap.isTexture &&
        (n.matcap = this.matcap.toJSON(e).uuid),
      this.alphaMap &&
        this.alphaMap.isTexture &&
        (n.alphaMap = this.alphaMap.toJSON(e).uuid),
      this.lightMap &&
        this.lightMap.isTexture &&
        ((n.lightMap = this.lightMap.toJSON(e).uuid),
        (n.lightMapIntensity = this.lightMapIntensity)),
      this.aoMap &&
        this.aoMap.isTexture &&
        ((n.aoMap = this.aoMap.toJSON(e).uuid),
        (n.aoMapIntensity = this.aoMapIntensity)),
      this.bumpMap &&
        this.bumpMap.isTexture &&
        ((n.bumpMap = this.bumpMap.toJSON(e).uuid),
        (n.bumpScale = this.bumpScale)),
      this.normalMap &&
        this.normalMap.isTexture &&
        ((n.normalMap = this.normalMap.toJSON(e).uuid),
        (n.normalMapType = this.normalMapType),
        (n.normalScale = this.normalScale.toArray())),
      this.displacementMap &&
        this.displacementMap.isTexture &&
        ((n.displacementMap = this.displacementMap.toJSON(e).uuid),
        (n.displacementScale = this.displacementScale),
        (n.displacementBias = this.displacementBias)),
      this.roughnessMap &&
        this.roughnessMap.isTexture &&
        (n.roughnessMap = this.roughnessMap.toJSON(e).uuid),
      this.metalnessMap &&
        this.metalnessMap.isTexture &&
        (n.metalnessMap = this.metalnessMap.toJSON(e).uuid),
      this.emissiveMap &&
        this.emissiveMap.isTexture &&
        (n.emissiveMap = this.emissiveMap.toJSON(e).uuid),
      this.specularMap &&
        this.specularMap.isTexture &&
        (n.specularMap = this.specularMap.toJSON(e).uuid),
      this.specularIntensityMap &&
        this.specularIntensityMap.isTexture &&
        (n.specularIntensityMap = this.specularIntensityMap.toJSON(e).uuid),
      this.specularColorMap &&
        this.specularColorMap.isTexture &&
        (n.specularColorMap = this.specularColorMap.toJSON(e).uuid),
      this.envMap &&
        this.envMap.isTexture &&
        ((n.envMap = this.envMap.toJSON(e).uuid),
        this.combine !== void 0 && (n.combine = this.combine)),
      this.envMapRotation !== void 0 &&
        (n.envMapRotation = this.envMapRotation.toArray()),
      this.envMapIntensity !== void 0 &&
        (n.envMapIntensity = this.envMapIntensity),
      this.reflectivity !== void 0 && (n.reflectivity = this.reflectivity),
      this.refractionRatio !== void 0 &&
        (n.refractionRatio = this.refractionRatio),
      this.gradientMap &&
        this.gradientMap.isTexture &&
        (n.gradientMap = this.gradientMap.toJSON(e).uuid),
      this.transmission !== void 0 && (n.transmission = this.transmission),
      this.transmissionMap &&
        this.transmissionMap.isTexture &&
        (n.transmissionMap = this.transmissionMap.toJSON(e).uuid),
      this.thickness !== void 0 && (n.thickness = this.thickness),
      this.thicknessMap &&
        this.thicknessMap.isTexture &&
        (n.thicknessMap = this.thicknessMap.toJSON(e).uuid),
      this.attenuationDistance !== void 0 &&
        this.attenuationDistance !== 1 / 0 &&
        (n.attenuationDistance = this.attenuationDistance),
      this.attenuationColor !== void 0 &&
        (n.attenuationColor = this.attenuationColor.getHex()),
      this.size !== void 0 && (n.size = this.size),
      this.shadowSide !== null && (n.shadowSide = this.shadowSide),
      this.sizeAttenuation !== void 0 &&
        (n.sizeAttenuation = this.sizeAttenuation),
      this.blending !== Pr && (n.blending = this.blending),
      this.side !== li && (n.side = this.side),
      this.vertexColors === !0 && (n.vertexColors = !0),
      this.opacity < 1 && (n.opacity = this.opacity),
      this.transparent === !0 && (n.transparent = !0),
      this.blendSrc !== qo && (n.blendSrc = this.blendSrc),
      this.blendDst !== jo && (n.blendDst = this.blendDst),
      this.blendEquation !== ji && (n.blendEquation = this.blendEquation),
      this.blendSrcAlpha !== null && (n.blendSrcAlpha = this.blendSrcAlpha),
      this.blendDstAlpha !== null && (n.blendDstAlpha = this.blendDstAlpha),
      this.blendEquationAlpha !== null &&
        (n.blendEquationAlpha = this.blendEquationAlpha),
      this.blendColor &&
        this.blendColor.isColor &&
        (n.blendColor = this.blendColor.getHex()),
      this.blendAlpha !== 0 && (n.blendAlpha = this.blendAlpha),
      this.depthFunc !== Fr && (n.depthFunc = this.depthFunc),
      this.depthTest === !1 && (n.depthTest = this.depthTest),
      this.depthWrite === !1 && (n.depthWrite = this.depthWrite),
      this.colorWrite === !1 && (n.colorWrite = this.colorWrite),
      this.stencilWriteMask !== 255 &&
        (n.stencilWriteMask = this.stencilWriteMask),
      this.stencilFunc !== sh && (n.stencilFunc = this.stencilFunc),
      this.stencilRef !== 0 && (n.stencilRef = this.stencilRef),
      this.stencilFuncMask !== 255 &&
        (n.stencilFuncMask = this.stencilFuncMask),
      this.stencilFail !== or && (n.stencilFail = this.stencilFail),
      this.stencilZFail !== or && (n.stencilZFail = this.stencilZFail),
      this.stencilZPass !== or && (n.stencilZPass = this.stencilZPass),
      this.stencilWrite === !0 && (n.stencilWrite = this.stencilWrite),
      this.rotation !== void 0 &&
        this.rotation !== 0 &&
        (n.rotation = this.rotation),
      this.polygonOffset === !0 && (n.polygonOffset = !0),
      this.polygonOffsetFactor !== 0 &&
        (n.polygonOffsetFactor = this.polygonOffsetFactor),
      this.polygonOffsetUnits !== 0 &&
        (n.polygonOffsetUnits = this.polygonOffsetUnits),
      this.linewidth !== void 0 &&
        this.linewidth !== 1 &&
        (n.linewidth = this.linewidth),
      this.dashSize !== void 0 && (n.dashSize = this.dashSize),
      this.gapSize !== void 0 && (n.gapSize = this.gapSize),
      this.scale !== void 0 && (n.scale = this.scale),
      this.dithering === !0 && (n.dithering = !0),
      this.alphaTest > 0 && (n.alphaTest = this.alphaTest),
      this.alphaHash === !0 && (n.alphaHash = !0),
      this.alphaToCoverage === !0 && (n.alphaToCoverage = !0),
      this.premultipliedAlpha === !0 && (n.premultipliedAlpha = !0),
      this.forceSinglePass === !0 && (n.forceSinglePass = !0),
      this.wireframe === !0 && (n.wireframe = !0),
      this.wireframeLinewidth > 1 &&
        (n.wireframeLinewidth = this.wireframeLinewidth),
      this.wireframeLinecap !== "round" &&
        (n.wireframeLinecap = this.wireframeLinecap),
      this.wireframeLinejoin !== "round" &&
        (n.wireframeLinejoin = this.wireframeLinejoin),
      this.flatShading === !0 && (n.flatShading = !0),
      this.visible === !1 && (n.visible = !1),
      this.toneMapped === !1 && (n.toneMapped = !1),
      this.fog === !1 && (n.fog = !1),
      Object.keys(this.userData).length > 0 && (n.userData = this.userData));
    function i(r) {
      const a = [];
      for (const o in r) {
        const l = r[o];
        (delete l.metadata, a.push(l));
      }
      return a;
    }
    if (t) {
      const r = i(e.textures),
        a = i(e.images);
      (r.length > 0 && (n.textures = r), a.length > 0 && (n.images = a));
    }
    return n;
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    ((this.name = e.name),
      (this.blending = e.blending),
      (this.side = e.side),
      (this.vertexColors = e.vertexColors),
      (this.opacity = e.opacity),
      (this.transparent = e.transparent),
      (this.blendSrc = e.blendSrc),
      (this.blendDst = e.blendDst),
      (this.blendEquation = e.blendEquation),
      (this.blendSrcAlpha = e.blendSrcAlpha),
      (this.blendDstAlpha = e.blendDstAlpha),
      (this.blendEquationAlpha = e.blendEquationAlpha),
      this.blendColor.copy(e.blendColor),
      (this.blendAlpha = e.blendAlpha),
      (this.depthFunc = e.depthFunc),
      (this.depthTest = e.depthTest),
      (this.depthWrite = e.depthWrite),
      (this.stencilWriteMask = e.stencilWriteMask),
      (this.stencilFunc = e.stencilFunc),
      (this.stencilRef = e.stencilRef),
      (this.stencilFuncMask = e.stencilFuncMask),
      (this.stencilFail = e.stencilFail),
      (this.stencilZFail = e.stencilZFail),
      (this.stencilZPass = e.stencilZPass),
      (this.stencilWrite = e.stencilWrite));
    const t = e.clippingPlanes;
    let n = null;
    if (t !== null) {
      const i = t.length;
      n = new Array(i);
      for (let r = 0; r !== i; ++r) n[r] = t[r].clone();
    }
    return (
      (this.clippingPlanes = n),
      (this.clipIntersection = e.clipIntersection),
      (this.clipShadows = e.clipShadows),
      (this.shadowSide = e.shadowSide),
      (this.colorWrite = e.colorWrite),
      (this.precision = e.precision),
      (this.polygonOffset = e.polygonOffset),
      (this.polygonOffsetFactor = e.polygonOffsetFactor),
      (this.polygonOffsetUnits = e.polygonOffsetUnits),
      (this.dithering = e.dithering),
      (this.alphaTest = e.alphaTest),
      (this.alphaHash = e.alphaHash),
      (this.alphaToCoverage = e.alphaToCoverage),
      (this.premultipliedAlpha = e.premultipliedAlpha),
      (this.forceSinglePass = e.forceSinglePass),
      (this.visible = e.visible),
      (this.toneMapped = e.toneMapped),
      (this.userData = JSON.parse(JSON.stringify(e.userData))),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
}
class Si extends In {
  constructor(e) {
    (super(),
      (this.isMeshBasicMaterial = !0),
      (this.type = "MeshBasicMaterial"),
      (this.color = new Ie(16777215)),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.specularMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new Vn()),
      (this.combine = qu),
      (this.reflectivity = 1),
      (this.refractionRatio = 0.98),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.fog = !0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      (this.specularMap = e.specularMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.combine = e.combine),
      (this.reflectivity = e.reflectivity),
      (this.refractionRatio = e.refractionRatio),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Tt = new L(),
  Js = new Re();
let mm = 0;
class Ut {
  constructor(e, t, n = !1) {
    if (Array.isArray(e))
      throw new TypeError(
        "THREE.BufferAttribute: array should be a Typed Array.",
      );
    ((this.isBufferAttribute = !0),
      Object.defineProperty(this, "id", { value: mm++ }),
      (this.name = ""),
      (this.array = e),
      (this.itemSize = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.normalized = n),
      (this.usage = Dl),
      (this.updateRanges = []),
      (this.gpuType = $t),
      (this.version = 0));
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return ((this.usage = e), this);
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.name = e.name),
      (this.array = new e.array.constructor(e.array)),
      (this.itemSize = e.itemSize),
      (this.count = e.count),
      (this.normalized = e.normalized),
      (this.usage = e.usage),
      (this.gpuType = e.gpuType),
      this
    );
  }
  copyAt(e, t, n) {
    ((e *= this.itemSize), (n *= t.itemSize));
    for (let i = 0, r = this.itemSize; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  copyArray(e) {
    return (this.array.set(e), this);
  }
  applyMatrix3(e) {
    if (this.itemSize === 2)
      for (let t = 0, n = this.count; t < n; t++)
        (Js.fromBufferAttribute(this, t),
          Js.applyMatrix3(e),
          this.setXY(t, Js.x, Js.y));
    else if (this.itemSize === 3)
      for (let t = 0, n = this.count; t < n; t++)
        (Tt.fromBufferAttribute(this, t),
          Tt.applyMatrix3(e),
          this.setXYZ(t, Tt.x, Tt.y, Tt.z));
    return this;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (Tt.fromBufferAttribute(this, t),
        Tt.applyMatrix4(e),
        this.setXYZ(t, Tt.x, Tt.y, Tt.z));
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (Tt.fromBufferAttribute(this, t),
        Tt.applyNormalMatrix(e),
        this.setXYZ(t, Tt.x, Tt.y, Tt.z));
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (Tt.fromBufferAttribute(this, t),
        Tt.transformDirection(e),
        this.setXYZ(t, Tt.x, Tt.y, Tt.z));
    return this;
  }
  set(e, t = 0) {
    return (this.array.set(e, t), this);
  }
  getComponent(e, t) {
    let n = this.array[e * this.itemSize + t];
    return (this.normalized && (n = Pn(n, this.array)), n);
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = $e(n, this.array)),
      (this.array[e * this.itemSize + t] = n),
      this
    );
  }
  getX(e) {
    let t = this.array[e * this.itemSize];
    return (this.normalized && (t = Pn(t, this.array)), t);
  }
  setX(e, t) {
    return (
      this.normalized && (t = $e(t, this.array)),
      (this.array[e * this.itemSize] = t),
      this
    );
  }
  getY(e) {
    let t = this.array[e * this.itemSize + 1];
    return (this.normalized && (t = Pn(t, this.array)), t);
  }
  setY(e, t) {
    return (
      this.normalized && (t = $e(t, this.array)),
      (this.array[e * this.itemSize + 1] = t),
      this
    );
  }
  getZ(e) {
    let t = this.array[e * this.itemSize + 2];
    return (this.normalized && (t = Pn(t, this.array)), t);
  }
  setZ(e, t) {
    return (
      this.normalized && (t = $e(t, this.array)),
      (this.array[e * this.itemSize + 2] = t),
      this
    );
  }
  getW(e) {
    let t = this.array[e * this.itemSize + 3];
    return (this.normalized && (t = Pn(t, this.array)), t);
  }
  setW(e, t) {
    return (
      this.normalized && (t = $e(t, this.array)),
      (this.array[e * this.itemSize + 3] = t),
      this
    );
  }
  setXY(e, t, n) {
    return (
      (e *= this.itemSize),
      this.normalized && ((t = $e(t, this.array)), (n = $e(n, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = $e(t, this.array)),
        (n = $e(n, this.array)),
        (i = $e(i, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, r) {
    return (
      (e *= this.itemSize),
      this.normalized &&
        ((t = $e(t, this.array)),
        (n = $e(n, this.array)),
        (i = $e(i, this.array)),
        (r = $e(r, this.array))),
      (this.array[e + 0] = t),
      (this.array[e + 1] = n),
      (this.array[e + 2] = i),
      (this.array[e + 3] = r),
      this
    );
  }
  onUpload(e) {
    return ((this.onUploadCallback = e), this);
  }
  clone() {
    return new this.constructor(this.array, this.itemSize).copy(this);
  }
  toJSON() {
    const e = {
      itemSize: this.itemSize,
      type: this.array.constructor.name,
      array: Array.from(this.array),
      normalized: this.normalized,
    };
    return (
      this.name !== "" && (e.name = this.name),
      this.usage !== Dl && (e.usage = this.usage),
      e
    );
  }
}
class ad extends Ut {
  constructor(e, t, n) {
    super(new Uint16Array(e), t, n);
  }
}
class od extends Ut {
  constructor(e, t, n) {
    super(new Uint32Array(e), t, n);
  }
}
class En extends Ut {
  constructor(e, t, n) {
    super(new Float32Array(e), t, n);
  }
}
let _m = 0;
const xn = new Oe(),
  xo = new dt(),
  gr = new L(),
  ln = new di(),
  ls = new di(),
  Lt = new L();
class bn extends rr {
  constructor() {
    (super(),
      (this.isBufferGeometry = !0),
      Object.defineProperty(this, "id", { value: _m++ }),
      (this.uuid = Ln()),
      (this.name = ""),
      (this.type = "BufferGeometry"),
      (this.index = null),
      (this.indirect = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.morphTargetsRelative = !1),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null),
      (this.drawRange = { start: 0, count: 1 / 0 }),
      (this.userData = {}));
  }
  getIndex() {
    return this.index;
  }
  setIndex(e) {
    return (
      Array.isArray(e)
        ? (this.index = new (id(e) ? od : ad)(e, 1))
        : (this.index = e),
      this
    );
  }
  setIndirect(e) {
    return ((this.indirect = e), this);
  }
  getIndirect() {
    return this.indirect;
  }
  getAttribute(e) {
    return this.attributes[e];
  }
  setAttribute(e, t) {
    return ((this.attributes[e] = t), this);
  }
  deleteAttribute(e) {
    return (delete this.attributes[e], this);
  }
  hasAttribute(e) {
    return this.attributes[e] !== void 0;
  }
  addGroup(e, t, n = 0) {
    this.groups.push({ start: e, count: t, materialIndex: n });
  }
  clearGroups() {
    this.groups = [];
  }
  setDrawRange(e, t) {
    ((this.drawRange.start = e), (this.drawRange.count = t));
  }
  applyMatrix4(e) {
    const t = this.attributes.position;
    t !== void 0 && (t.applyMatrix4(e), (t.needsUpdate = !0));
    const n = this.attributes.normal;
    if (n !== void 0) {
      const r = new Be().getNormalMatrix(e);
      (n.applyNormalMatrix(r), (n.needsUpdate = !0));
    }
    const i = this.attributes.tangent;
    return (
      i !== void 0 && (i.transformDirection(e), (i.needsUpdate = !0)),
      this.boundingBox !== null && this.computeBoundingBox(),
      this.boundingSphere !== null && this.computeBoundingSphere(),
      this
    );
  }
  applyQuaternion(e) {
    return (xn.makeRotationFromQuaternion(e), this.applyMatrix4(xn), this);
  }
  rotateX(e) {
    return (xn.makeRotationX(e), this.applyMatrix4(xn), this);
  }
  rotateY(e) {
    return (xn.makeRotationY(e), this.applyMatrix4(xn), this);
  }
  rotateZ(e) {
    return (xn.makeRotationZ(e), this.applyMatrix4(xn), this);
  }
  translate(e, t, n) {
    return (xn.makeTranslation(e, t, n), this.applyMatrix4(xn), this);
  }
  scale(e, t, n) {
    return (xn.makeScale(e, t, n), this.applyMatrix4(xn), this);
  }
  lookAt(e) {
    return (
      xo.lookAt(e),
      xo.updateMatrix(),
      this.applyMatrix4(xo.matrix),
      this
    );
  }
  center() {
    return (
      this.computeBoundingBox(),
      this.boundingBox.getCenter(gr).negate(),
      this.translate(gr.x, gr.y, gr.z),
      this
    );
  }
  setFromPoints(e) {
    const t = this.getAttribute("position");
    if (t === void 0) {
      const n = [];
      for (let i = 0, r = e.length; i < r; i++) {
        const a = e[i];
        n.push(a.x, a.y, a.z || 0);
      }
      this.setAttribute("position", new En(n, 3));
    } else {
      const n = Math.min(e.length, t.count);
      for (let i = 0; i < n; i++) {
        const r = e[i];
        t.setXYZ(i, r.x, r.y, r.z || 0);
      }
      (e.length > t.count &&
        console.warn(
          "THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry.",
        ),
        (t.needsUpdate = !0));
    }
    return this;
  }
  computeBoundingBox() {
    this.boundingBox === null && (this.boundingBox = new di());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      (console.error(
        "THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",
        this,
      ),
        this.boundingBox.set(
          new L(-1 / 0, -1 / 0, -1 / 0),
          new L(1 / 0, 1 / 0, 1 / 0),
        ));
      return;
    }
    if (e !== void 0) {
      if ((this.boundingBox.setFromBufferAttribute(e), t))
        for (let n = 0, i = t.length; n < i; n++) {
          const r = t[n];
          (ln.setFromBufferAttribute(r),
            this.morphTargetsRelative
              ? (Lt.addVectors(this.boundingBox.min, ln.min),
                this.boundingBox.expandByPoint(Lt),
                Lt.addVectors(this.boundingBox.max, ln.max),
                this.boundingBox.expandByPoint(Lt))
              : (this.boundingBox.expandByPoint(ln.min),
                this.boundingBox.expandByPoint(ln.max)));
        }
    } else this.boundingBox.makeEmpty();
    (isNaN(this.boundingBox.min.x) ||
      isNaN(this.boundingBox.min.y) ||
      isNaN(this.boundingBox.min.z)) &&
      console.error(
        'THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',
        this,
      );
  }
  computeBoundingSphere() {
    this.boundingSphere === null && (this.boundingSphere = new Xn());
    const e = this.attributes.position,
      t = this.morphAttributes.position;
    if (e && e.isGLBufferAttribute) {
      (console.error(
        "THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",
        this,
      ),
        this.boundingSphere.set(new L(), 1 / 0));
      return;
    }
    if (e) {
      const n = this.boundingSphere.center;
      if ((ln.setFromBufferAttribute(e), t))
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r];
          (ls.setFromBufferAttribute(o),
            this.morphTargetsRelative
              ? (Lt.addVectors(ln.min, ls.min),
                ln.expandByPoint(Lt),
                Lt.addVectors(ln.max, ls.max),
                ln.expandByPoint(Lt))
              : (ln.expandByPoint(ls.min), ln.expandByPoint(ls.max)));
        }
      ln.getCenter(n);
      let i = 0;
      for (let r = 0, a = e.count; r < a; r++)
        (Lt.fromBufferAttribute(e, r),
          (i = Math.max(i, n.distanceToSquared(Lt))));
      if (t)
        for (let r = 0, a = t.length; r < a; r++) {
          const o = t[r],
            l = this.morphTargetsRelative;
          for (let c = 0, h = o.count; c < h; c++)
            (Lt.fromBufferAttribute(o, c),
              l && (gr.fromBufferAttribute(e, c), Lt.add(gr)),
              (i = Math.max(i, n.distanceToSquared(Lt))));
        }
      ((this.boundingSphere.radius = Math.sqrt(i)),
        isNaN(this.boundingSphere.radius) &&
          console.error(
            'THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',
            this,
          ));
    }
  }
  computeTangents() {
    const e = this.index,
      t = this.attributes;
    if (
      e === null ||
      t.position === void 0 ||
      t.normal === void 0 ||
      t.uv === void 0
    ) {
      console.error(
        "THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)",
      );
      return;
    }
    const n = t.position,
      i = t.normal,
      r = t.uv;
    this.hasAttribute("tangent") === !1 &&
      this.setAttribute("tangent", new Ut(new Float32Array(4 * n.count), 4));
    const a = this.getAttribute("tangent"),
      o = [],
      l = [];
    for (let C = 0; C < n.count; C++) ((o[C] = new L()), (l[C] = new L()));
    const c = new L(),
      h = new L(),
      u = new L(),
      d = new Re(),
      f = new Re(),
      g = new Re(),
      _ = new L(),
      m = new L();
    function p(C, x, E) {
      (c.fromBufferAttribute(n, C),
        h.fromBufferAttribute(n, x),
        u.fromBufferAttribute(n, E),
        d.fromBufferAttribute(r, C),
        f.fromBufferAttribute(r, x),
        g.fromBufferAttribute(r, E),
        h.sub(c),
        u.sub(c),
        f.sub(d),
        g.sub(d));
      const P = 1 / (f.x * g.y - g.x * f.y);
      isFinite(P) &&
        (_.copy(h)
          .multiplyScalar(g.y)
          .addScaledVector(u, -f.y)
          .multiplyScalar(P),
        m
          .copy(u)
          .multiplyScalar(f.x)
          .addScaledVector(h, -g.x)
          .multiplyScalar(P),
        o[C].add(_),
        o[x].add(_),
        o[E].add(_),
        l[C].add(m),
        l[x].add(m),
        l[E].add(m));
    }
    let S = this.groups;
    S.length === 0 && (S = [{ start: 0, count: e.count }]);
    for (let C = 0, x = S.length; C < x; ++C) {
      const E = S[C],
        P = E.start,
        V = E.count;
      for (let F = P, z = P + V; F < z; F += 3)
        p(e.getX(F + 0), e.getX(F + 1), e.getX(F + 2));
    }
    const M = new L(),
      v = new L(),
      b = new L(),
      A = new L();
    function w(C) {
      (b.fromBufferAttribute(i, C), A.copy(b));
      const x = o[C];
      (M.copy(x),
        M.sub(b.multiplyScalar(b.dot(x))).normalize(),
        v.crossVectors(A, x));
      const P = v.dot(l[C]) < 0 ? -1 : 1;
      a.setXYZW(C, M.x, M.y, M.z, P);
    }
    for (let C = 0, x = S.length; C < x; ++C) {
      const E = S[C],
        P = E.start,
        V = E.count;
      for (let F = P, z = P + V; F < z; F += 3)
        (w(e.getX(F + 0)), w(e.getX(F + 1)), w(e.getX(F + 2)));
    }
  }
  computeVertexNormals() {
    const e = this.index,
      t = this.getAttribute("position");
    if (t !== void 0) {
      let n = this.getAttribute("normal");
      if (n === void 0)
        ((n = new Ut(new Float32Array(t.count * 3), 3)),
          this.setAttribute("normal", n));
      else for (let d = 0, f = n.count; d < f; d++) n.setXYZ(d, 0, 0, 0);
      const i = new L(),
        r = new L(),
        a = new L(),
        o = new L(),
        l = new L(),
        c = new L(),
        h = new L(),
        u = new L();
      if (e)
        for (let d = 0, f = e.count; d < f; d += 3) {
          const g = e.getX(d + 0),
            _ = e.getX(d + 1),
            m = e.getX(d + 2);
          (i.fromBufferAttribute(t, g),
            r.fromBufferAttribute(t, _),
            a.fromBufferAttribute(t, m),
            h.subVectors(a, r),
            u.subVectors(i, r),
            h.cross(u),
            o.fromBufferAttribute(n, g),
            l.fromBufferAttribute(n, _),
            c.fromBufferAttribute(n, m),
            o.add(h),
            l.add(h),
            c.add(h),
            n.setXYZ(g, o.x, o.y, o.z),
            n.setXYZ(_, l.x, l.y, l.z),
            n.setXYZ(m, c.x, c.y, c.z));
        }
      else
        for (let d = 0, f = t.count; d < f; d += 3)
          (i.fromBufferAttribute(t, d + 0),
            r.fromBufferAttribute(t, d + 1),
            a.fromBufferAttribute(t, d + 2),
            h.subVectors(a, r),
            u.subVectors(i, r),
            h.cross(u),
            n.setXYZ(d + 0, h.x, h.y, h.z),
            n.setXYZ(d + 1, h.x, h.y, h.z),
            n.setXYZ(d + 2, h.x, h.y, h.z));
      (this.normalizeNormals(), (n.needsUpdate = !0));
    }
  }
  normalizeNormals() {
    const e = this.attributes.normal;
    for (let t = 0, n = e.count; t < n; t++)
      (Lt.fromBufferAttribute(e, t),
        Lt.normalize(),
        e.setXYZ(t, Lt.x, Lt.y, Lt.z));
  }
  toNonIndexed() {
    function e(o, l) {
      const c = o.array,
        h = o.itemSize,
        u = o.normalized,
        d = new c.constructor(l.length * h);
      let f = 0,
        g = 0;
      for (let _ = 0, m = l.length; _ < m; _++) {
        o.isInterleavedBufferAttribute
          ? (f = l[_] * o.data.stride + o.offset)
          : (f = l[_] * h);
        for (let p = 0; p < h; p++) d[g++] = c[f++];
      }
      return new Ut(d, h, u);
    }
    if (this.index === null)
      return (
        console.warn(
          "THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed.",
        ),
        this
      );
    const t = new bn(),
      n = this.index.array,
      i = this.attributes;
    for (const o in i) {
      const l = i[o],
        c = e(l, n);
      t.setAttribute(o, c);
    }
    const r = this.morphAttributes;
    for (const o in r) {
      const l = [],
        c = r[o];
      for (let h = 0, u = c.length; h < u; h++) {
        const d = c[h],
          f = e(d, n);
        l.push(f);
      }
      t.morphAttributes[o] = l;
    }
    t.morphTargetsRelative = this.morphTargetsRelative;
    const a = this.groups;
    for (let o = 0, l = a.length; o < l; o++) {
      const c = a[o];
      t.addGroup(c.start, c.count, c.materialIndex);
    }
    return t;
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "BufferGeometry",
        generator: "BufferGeometry.toJSON",
      },
    };
    if (
      ((e.uuid = this.uuid),
      (e.type = this.type),
      this.name !== "" && (e.name = this.name),
      Object.keys(this.userData).length > 0 && (e.userData = this.userData),
      this.parameters !== void 0)
    ) {
      const l = this.parameters;
      for (const c in l) l[c] !== void 0 && (e[c] = l[c]);
      return e;
    }
    e.data = { attributes: {} };
    const t = this.index;
    t !== null &&
      (e.data.index = {
        type: t.array.constructor.name,
        array: Array.prototype.slice.call(t.array),
      });
    const n = this.attributes;
    for (const l in n) {
      const c = n[l];
      e.data.attributes[l] = c.toJSON(e.data);
    }
    const i = {};
    let r = !1;
    for (const l in this.morphAttributes) {
      const c = this.morphAttributes[l],
        h = [];
      for (let u = 0, d = c.length; u < d; u++) {
        const f = c[u];
        h.push(f.toJSON(e.data));
      }
      h.length > 0 && ((i[l] = h), (r = !0));
    }
    r &&
      ((e.data.morphAttributes = i),
      (e.data.morphTargetsRelative = this.morphTargetsRelative));
    const a = this.groups;
    a.length > 0 && (e.data.groups = JSON.parse(JSON.stringify(a)));
    const o = this.boundingSphere;
    return (o !== null && (e.data.boundingSphere = o.toJSON()), e);
  }
  clone() {
    return new this.constructor().copy(this);
  }
  copy(e) {
    ((this.index = null),
      (this.attributes = {}),
      (this.morphAttributes = {}),
      (this.groups = []),
      (this.boundingBox = null),
      (this.boundingSphere = null));
    const t = {};
    this.name = e.name;
    const n = e.index;
    n !== null && this.setIndex(n.clone());
    const i = e.attributes;
    for (const c in i) {
      const h = i[c];
      this.setAttribute(c, h.clone(t));
    }
    const r = e.morphAttributes;
    for (const c in r) {
      const h = [],
        u = r[c];
      for (let d = 0, f = u.length; d < f; d++) h.push(u[d].clone(t));
      this.morphAttributes[c] = h;
    }
    this.morphTargetsRelative = e.morphTargetsRelative;
    const a = e.groups;
    for (let c = 0, h = a.length; c < h; c++) {
      const u = a[c];
      this.addGroup(u.start, u.count, u.materialIndex);
    }
    const o = e.boundingBox;
    o !== null && (this.boundingBox = o.clone());
    const l = e.boundingSphere;
    return (
      l !== null && (this.boundingSphere = l.clone()),
      (this.drawRange.start = e.drawRange.start),
      (this.drawRange.count = e.drawRange.count),
      (this.userData = e.userData),
      this
    );
  }
  dispose() {
    this.dispatchEvent({ type: "dispose" });
  }
}
const yh = new Oe(),
  ki = new Qr(),
  Qs = new Xn(),
  Mh = new L(),
  ea = new L(),
  ta = new L(),
  na = new L(),
  vo = new L(),
  ia = new L(),
  Sh = new L(),
  ra = new L();
class Yt extends dt {
  constructor(e = new bn(), t = new Si()) {
    (super(),
      (this.isMesh = !0),
      (this.type = "Mesh"),
      (this.geometry = e),
      (this.material = t),
      (this.morphTargetDictionary = void 0),
      (this.morphTargetInfluences = void 0),
      (this.count = 1),
      this.updateMorphTargets());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.morphTargetInfluences !== void 0 &&
        (this.morphTargetInfluences = e.morphTargetInfluences.slice()),
      e.morphTargetDictionary !== void 0 &&
        (this.morphTargetDictionary = Object.assign(
          {},
          e.morphTargetDictionary,
        )),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        ((this.morphTargetInfluences = []), (this.morphTargetDictionary = {}));
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          (this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = r));
        }
      }
    }
  }
  getVertexPosition(e, t) {
    const n = this.geometry,
      i = n.attributes.position,
      r = n.morphAttributes.position,
      a = n.morphTargetsRelative;
    t.fromBufferAttribute(i, e);
    const o = this.morphTargetInfluences;
    if (r && o) {
      ia.set(0, 0, 0);
      for (let l = 0, c = r.length; l < c; l++) {
        const h = o[l],
          u = r[l];
        h !== 0 &&
          (vo.fromBufferAttribute(u, e),
          a ? ia.addScaledVector(vo, h) : ia.addScaledVector(vo.sub(t), h));
      }
      t.add(ia);
    }
    return t;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.material,
      r = this.matrixWorld;
    i !== void 0 &&
      (n.boundingSphere === null && n.computeBoundingSphere(),
      Qs.copy(n.boundingSphere),
      Qs.applyMatrix4(r),
      ki.copy(e.ray).recast(e.near),
      !(
        Qs.containsPoint(ki.origin) === !1 &&
        (ki.intersectSphere(Qs, Mh) === null ||
          ki.origin.distanceToSquared(Mh) > (e.far - e.near) ** 2)
      ) &&
        (yh.copy(r).invert(),
        ki.copy(e.ray).applyMatrix4(yh),
        !(n.boundingBox !== null && ki.intersectsBox(n.boundingBox) === !1) &&
          this._computeIntersections(e, t, ki)));
  }
  _computeIntersections(e, t, n) {
    let i;
    const r = this.geometry,
      a = this.material,
      o = r.index,
      l = r.attributes.position,
      c = r.attributes.uv,
      h = r.attributes.uv1,
      u = r.attributes.normal,
      d = r.groups,
      f = r.drawRange;
    if (o !== null)
      if (Array.isArray(a))
        for (let g = 0, _ = d.length; g < _; g++) {
          const m = d[g],
            p = a[m.materialIndex],
            S = Math.max(m.start, f.start),
            M = Math.min(
              o.count,
              Math.min(m.start + m.count, f.start + f.count),
            );
          for (let v = S, b = M; v < b; v += 3) {
            const A = o.getX(v),
              w = o.getX(v + 1),
              C = o.getX(v + 2);
            ((i = sa(this, p, e, n, c, h, u, A, w, C)),
              i &&
                ((i.faceIndex = Math.floor(v / 3)),
                (i.face.materialIndex = m.materialIndex),
                t.push(i)));
          }
        }
      else {
        const g = Math.max(0, f.start),
          _ = Math.min(o.count, f.start + f.count);
        for (let m = g, p = _; m < p; m += 3) {
          const S = o.getX(m),
            M = o.getX(m + 1),
            v = o.getX(m + 2);
          ((i = sa(this, a, e, n, c, h, u, S, M, v)),
            i && ((i.faceIndex = Math.floor(m / 3)), t.push(i)));
        }
      }
    else if (l !== void 0)
      if (Array.isArray(a))
        for (let g = 0, _ = d.length; g < _; g++) {
          const m = d[g],
            p = a[m.materialIndex],
            S = Math.max(m.start, f.start),
            M = Math.min(
              l.count,
              Math.min(m.start + m.count, f.start + f.count),
            );
          for (let v = S, b = M; v < b; v += 3) {
            const A = v,
              w = v + 1,
              C = v + 2;
            ((i = sa(this, p, e, n, c, h, u, A, w, C)),
              i &&
                ((i.faceIndex = Math.floor(v / 3)),
                (i.face.materialIndex = m.materialIndex),
                t.push(i)));
          }
        }
      else {
        const g = Math.max(0, f.start),
          _ = Math.min(l.count, f.start + f.count);
        for (let m = g, p = _; m < p; m += 3) {
          const S = m,
            M = m + 1,
            v = m + 2;
          ((i = sa(this, a, e, n, c, h, u, S, M, v)),
            i && ((i.faceIndex = Math.floor(m / 3)), t.push(i)));
        }
      }
  }
}
function gm(s, e, t, n, i, r, a, o) {
  let l;
  if (
    (e.side === Jt
      ? (l = n.intersectTriangle(a, r, i, !0, o))
      : (l = n.intersectTriangle(i, r, a, e.side === li, o)),
    l === null)
  )
    return null;
  (ra.copy(o), ra.applyMatrix4(s.matrixWorld));
  const c = t.ray.origin.distanceTo(ra);
  return c < t.near || c > t.far
    ? null
    : { distance: c, point: ra.clone(), object: s };
}
function sa(s, e, t, n, i, r, a, o, l, c) {
  (s.getVertexPosition(o, ea),
    s.getVertexPosition(l, ta),
    s.getVertexPosition(c, na));
  const h = gm(s, e, t, n, ea, ta, na, Sh);
  if (h) {
    const u = new L();
    (Dn.getBarycoord(Sh, ea, ta, na, u),
      i && (h.uv = Dn.getInterpolatedAttribute(i, o, l, c, u, new Re())),
      r && (h.uv1 = Dn.getInterpolatedAttribute(r, o, l, c, u, new Re())),
      a &&
        ((h.normal = Dn.getInterpolatedAttribute(a, o, l, c, u, new L())),
        h.normal.dot(n.direction) > 0 && h.normal.multiplyScalar(-1)));
    const d = { a: o, b: l, c, normal: new L(), materialIndex: 0 };
    (Dn.getNormal(ea, ta, na, d.normal), (h.face = d), (h.barycoord = u));
  }
  return h;
}
class ks extends bn {
  constructor(e = 1, t = 1, n = 1, i = 1, r = 1, a = 1) {
    (super(),
      (this.type = "BoxGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        depth: n,
        widthSegments: i,
        heightSegments: r,
        depthSegments: a,
      }));
    const o = this;
    ((i = Math.floor(i)), (r = Math.floor(r)), (a = Math.floor(a)));
    const l = [],
      c = [],
      h = [],
      u = [];
    let d = 0,
      f = 0;
    (g("z", "y", "x", -1, -1, n, t, e, a, r, 0),
      g("z", "y", "x", 1, -1, n, t, -e, a, r, 1),
      g("x", "z", "y", 1, 1, e, n, t, i, a, 2),
      g("x", "z", "y", 1, -1, e, n, -t, i, a, 3),
      g("x", "y", "z", 1, -1, e, t, n, i, r, 4),
      g("x", "y", "z", -1, -1, e, t, -n, i, r, 5),
      this.setIndex(l),
      this.setAttribute("position", new En(c, 3)),
      this.setAttribute("normal", new En(h, 3)),
      this.setAttribute("uv", new En(u, 2)));
    function g(_, m, p, S, M, v, b, A, w, C, x) {
      const E = v / w,
        P = b / C,
        V = v / 2,
        F = b / 2,
        z = A / 2,
        q = w + 1,
        G = C + 1;
      let K = 0,
        H = 0;
      const re = new L();
      for (let ae = 0; ae < G; ae++) {
        const _e = ae * P - F;
        for (let Pe = 0; Pe < q; Pe++) {
          const nt = Pe * E - V;
          ((re[_] = nt * S),
            (re[m] = _e * M),
            (re[p] = z),
            c.push(re.x, re.y, re.z),
            (re[_] = 0),
            (re[m] = 0),
            (re[p] = A > 0 ? 1 : -1),
            h.push(re.x, re.y, re.z),
            u.push(Pe / w),
            u.push(1 - ae / C),
            (K += 1));
        }
      }
      for (let ae = 0; ae < C; ae++)
        for (let _e = 0; _e < w; _e++) {
          const Pe = d + _e + q * ae,
            nt = d + _e + q * (ae + 1),
            He = d + (_e + 1) + q * (ae + 1),
            W = d + (_e + 1) + q * ae;
          (l.push(Pe, nt, W), l.push(nt, He, W), (H += 6));
        }
      (o.addGroup(f, H, x), (f += H), (d += K));
    }
  }
  copy(e) {
    return (
      super.copy(e),
      (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  static fromJSON(e) {
    return new ks(
      e.width,
      e.height,
      e.depth,
      e.widthSegments,
      e.heightSegments,
      e.depthSegments,
    );
  }
}
function Gr(s) {
  const e = {};
  for (const t in s) {
    e[t] = {};
    for (const n in s[t]) {
      const i = s[t][n];
      i &&
      (i.isColor ||
        i.isMatrix3 ||
        i.isMatrix4 ||
        i.isVector2 ||
        i.isVector3 ||
        i.isVector4 ||
        i.isTexture ||
        i.isQuaternion)
        ? i.isRenderTargetTexture
          ? (console.warn(
              "UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms().",
            ),
            (e[t][n] = null))
          : (e[t][n] = i.clone())
        : Array.isArray(i)
          ? (e[t][n] = i.slice())
          : (e[t][n] = i);
    }
  }
  return e;
}
function Wt(s) {
  const e = {};
  for (let t = 0; t < s.length; t++) {
    const n = Gr(s[t]);
    for (const i in n) e[i] = n[i];
  }
  return e;
}
function xm(s) {
  const e = [];
  for (let t = 0; t < s.length; t++) e.push(s[t].clone());
  return e;
}
function ld(s) {
  const e = s.getRenderTarget();
  return e === null
    ? s.outputColorSpace
    : e.isXRRenderTarget === !0
      ? e.texture.colorSpace
      : We.workingColorSpace;
}
const cd = { clone: Gr, merge: Wt };
var vm = `void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,
  ym = `void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;
class Gn extends In {
  constructor(e) {
    (super(),
      (this.isShaderMaterial = !0),
      (this.type = "ShaderMaterial"),
      (this.defines = {}),
      (this.uniforms = {}),
      (this.uniformsGroups = []),
      (this.vertexShader = vm),
      (this.fragmentShader = ym),
      (this.linewidth = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.fog = !1),
      (this.lights = !1),
      (this.clipping = !1),
      (this.forceSinglePass = !0),
      (this.extensions = { clipCullDistance: !1, multiDraw: !1 }),
      (this.defaultAttributeValues = {
        color: [1, 1, 1],
        uv: [0, 0],
        uv1: [0, 0],
      }),
      (this.index0AttributeName = void 0),
      (this.uniformsNeedUpdate = !1),
      (this.glslVersion = null),
      e !== void 0 && this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.fragmentShader = e.fragmentShader),
      (this.vertexShader = e.vertexShader),
      (this.uniforms = Gr(e.uniforms)),
      (this.uniformsGroups = xm(e.uniformsGroups)),
      (this.defines = Object.assign({}, e.defines)),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.fog = e.fog),
      (this.lights = e.lights),
      (this.clipping = e.clipping),
      (this.extensions = Object.assign({}, e.extensions)),
      (this.glslVersion = e.glslVersion),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    ((t.glslVersion = this.glslVersion), (t.uniforms = {}));
    for (const i in this.uniforms) {
      const a = this.uniforms[i].value;
      a && a.isTexture
        ? (t.uniforms[i] = { type: "t", value: a.toJSON(e).uuid })
        : a && a.isColor
          ? (t.uniforms[i] = { type: "c", value: a.getHex() })
          : a && a.isVector2
            ? (t.uniforms[i] = { type: "v2", value: a.toArray() })
            : a && a.isVector3
              ? (t.uniforms[i] = { type: "v3", value: a.toArray() })
              : a && a.isVector4
                ? (t.uniforms[i] = { type: "v4", value: a.toArray() })
                : a && a.isMatrix3
                  ? (t.uniforms[i] = { type: "m3", value: a.toArray() })
                  : a && a.isMatrix4
                    ? (t.uniforms[i] = { type: "m4", value: a.toArray() })
                    : (t.uniforms[i] = { value: a });
    }
    (Object.keys(this.defines).length > 0 && (t.defines = this.defines),
      (t.vertexShader = this.vertexShader),
      (t.fragmentShader = this.fragmentShader),
      (t.lights = this.lights),
      (t.clipping = this.clipping));
    const n = {};
    for (const i in this.extensions) this.extensions[i] === !0 && (n[i] = !0);
    return (Object.keys(n).length > 0 && (t.extensions = n), t);
  }
}
class hd extends dt {
  constructor() {
    (super(),
      (this.isCamera = !0),
      (this.type = "Camera"),
      (this.matrixWorldInverse = new Oe()),
      (this.projectionMatrix = new Oe()),
      (this.projectionMatrixInverse = new Oe()),
      (this.coordinateSystem = kn),
      (this._reversedDepth = !1));
  }
  get reversedDepth() {
    return this._reversedDepth;
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.matrixWorldInverse.copy(e.matrixWorldInverse),
      this.projectionMatrix.copy(e.projectionMatrix),
      this.projectionMatrixInverse.copy(e.projectionMatrixInverse),
      (this.coordinateSystem = e.coordinateSystem),
      this
    );
  }
  getWorldDirection(e) {
    return super.getWorldDirection(e).negate();
  }
  updateMatrixWorld(e) {
    (super.updateMatrixWorld(e),
      this.matrixWorldInverse.copy(this.matrixWorld).invert());
  }
  updateWorldMatrix(e, t) {
    (super.updateWorldMatrix(e, t),
      this.matrixWorldInverse.copy(this.matrixWorld).invert());
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const xi = new L(),
  Th = new Re(),
  Eh = new Re();
class Zt extends hd {
  constructor(e = 50, t = 1, n = 0.1, i = 2e3) {
    (super(),
      (this.isPerspectiveCamera = !0),
      (this.type = "PerspectiveCamera"),
      (this.fov = e),
      (this.zoom = 1),
      (this.near = n),
      (this.far = i),
      (this.focus = 10),
      (this.aspect = t),
      (this.view = null),
      (this.filmGauge = 35),
      (this.filmOffset = 0),
      this.updateProjectionMatrix());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.fov = e.fov),
      (this.zoom = e.zoom),
      (this.near = e.near),
      (this.far = e.far),
      (this.focus = e.focus),
      (this.aspect = e.aspect),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      (this.filmGauge = e.filmGauge),
      (this.filmOffset = e.filmOffset),
      this
    );
  }
  setFocalLength(e) {
    const t = (0.5 * this.getFilmHeight()) / e;
    ((this.fov = Vr * 2 * Math.atan(t)), this.updateProjectionMatrix());
  }
  getFocalLength() {
    const e = Math.tan(vs * 0.5 * this.fov);
    return (0.5 * this.getFilmHeight()) / e;
  }
  getEffectiveFOV() {
    return Vr * 2 * Math.atan(Math.tan(vs * 0.5 * this.fov) / this.zoom);
  }
  getFilmWidth() {
    return this.filmGauge * Math.min(this.aspect, 1);
  }
  getFilmHeight() {
    return this.filmGauge / Math.max(this.aspect, 1);
  }
  getViewBounds(e, t, n) {
    (xi.set(-1, -1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      t.set(xi.x, xi.y).multiplyScalar(-e / xi.z),
      xi.set(1, 1, 0.5).applyMatrix4(this.projectionMatrixInverse),
      n.set(xi.x, xi.y).multiplyScalar(-e / xi.z));
  }
  getViewSize(e, t) {
    return (this.getViewBounds(e, Th, Eh), t.subVectors(Eh, Th));
  }
  setViewOffset(e, t, n, i, r, a) {
    ((this.aspect = e / t),
      this.view === null &&
        (this.view = {
          enabled: !0,
          fullWidth: 1,
          fullHeight: 1,
          offsetX: 0,
          offsetY: 0,
          width: 1,
          height: 1,
        }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix());
  }
  clearViewOffset() {
    (this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix());
  }
  updateProjectionMatrix() {
    const e = this.near;
    let t = (e * Math.tan(vs * 0.5 * this.fov)) / this.zoom,
      n = 2 * t,
      i = this.aspect * n,
      r = -0.5 * i;
    const a = this.view;
    if (this.view !== null && this.view.enabled) {
      const l = a.fullWidth,
        c = a.fullHeight;
      ((r += (a.offsetX * i) / l),
        (t -= (a.offsetY * n) / c),
        (i *= a.width / l),
        (n *= a.height / c));
    }
    const o = this.filmOffset;
    (o !== 0 && (r += (e * o) / this.getFilmWidth()),
      this.projectionMatrix.makePerspective(
        r,
        r + i,
        t,
        t - n,
        e,
        this.far,
        this.coordinateSystem,
        this.reversedDepth,
      ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.fov = this.fov),
      (t.object.zoom = this.zoom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      (t.object.focus = this.focus),
      (t.object.aspect = this.aspect),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      (t.object.filmGauge = this.filmGauge),
      (t.object.filmOffset = this.filmOffset),
      t
    );
  }
}
const xr = -90,
  vr = 1;
class Mm extends dt {
  constructor(e, t, n) {
    (super(),
      (this.type = "CubeCamera"),
      (this.renderTarget = n),
      (this.coordinateSystem = null),
      (this.activeMipmapLevel = 0));
    const i = new Zt(xr, vr, e, t);
    ((i.layers = this.layers), this.add(i));
    const r = new Zt(xr, vr, e, t);
    ((r.layers = this.layers), this.add(r));
    const a = new Zt(xr, vr, e, t);
    ((a.layers = this.layers), this.add(a));
    const o = new Zt(xr, vr, e, t);
    ((o.layers = this.layers), this.add(o));
    const l = new Zt(xr, vr, e, t);
    ((l.layers = this.layers), this.add(l));
    const c = new Zt(xr, vr, e, t);
    ((c.layers = this.layers), this.add(c));
  }
  updateCoordinateSystem() {
    const e = this.coordinateSystem,
      t = this.children.concat(),
      [n, i, r, a, o, l] = t;
    for (const c of t) this.remove(c);
    if (e === kn)
      (n.up.set(0, 1, 0),
        n.lookAt(1, 0, 0),
        i.up.set(0, 1, 0),
        i.lookAt(-1, 0, 0),
        r.up.set(0, 0, -1),
        r.lookAt(0, 1, 0),
        a.up.set(0, 0, 1),
        a.lookAt(0, -1, 0),
        o.up.set(0, 1, 0),
        o.lookAt(0, 0, 1),
        l.up.set(0, 1, 0),
        l.lookAt(0, 0, -1));
    else if (e === La)
      (n.up.set(0, -1, 0),
        n.lookAt(-1, 0, 0),
        i.up.set(0, -1, 0),
        i.lookAt(1, 0, 0),
        r.up.set(0, 0, 1),
        r.lookAt(0, 1, 0),
        a.up.set(0, 0, -1),
        a.lookAt(0, -1, 0),
        o.up.set(0, -1, 0),
        o.lookAt(0, 0, 1),
        l.up.set(0, -1, 0),
        l.lookAt(0, 0, -1));
    else
      throw new Error(
        "THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: " +
          e,
      );
    for (const c of t) (this.add(c), c.updateMatrixWorld());
  }
  update(e, t) {
    this.parent === null && this.updateMatrixWorld();
    const { renderTarget: n, activeMipmapLevel: i } = this;
    this.coordinateSystem !== e.coordinateSystem &&
      ((this.coordinateSystem = e.coordinateSystem),
      this.updateCoordinateSystem());
    const [r, a, o, l, c, h] = this.children,
      u = e.getRenderTarget(),
      d = e.getActiveCubeFace(),
      f = e.getActiveMipmapLevel(),
      g = e.xr.enabled;
    e.xr.enabled = !1;
    const _ = n.texture.generateMipmaps;
    ((n.texture.generateMipmaps = !1),
      e.setRenderTarget(n, 0, i),
      e.render(t, r),
      e.setRenderTarget(n, 1, i),
      e.render(t, a),
      e.setRenderTarget(n, 2, i),
      e.render(t, o),
      e.setRenderTarget(n, 3, i),
      e.render(t, l),
      e.setRenderTarget(n, 4, i),
      e.render(t, c),
      (n.texture.generateMipmaps = _),
      e.setRenderTarget(n, 5, i),
      e.render(t, h),
      e.setRenderTarget(u, d, f),
      (e.xr.enabled = g),
      (n.texture.needsPMREMUpdate = !0));
  }
}
class ud extends ut {
  constructor(e = [], t = kr, n, i, r, a, o, l, c, h) {
    (super(e, t, n, i, r, a, o, l, c, h),
      (this.isCubeTexture = !0),
      (this.flipY = !1));
  }
  get images() {
    return this.image;
  }
  set images(e) {
    this.image = e;
  }
}
class Sm extends ci {
  constructor(e = 1, t = {}) {
    (super(e, e, t), (this.isWebGLCubeRenderTarget = !0));
    const n = { width: e, height: e, depth: 1 },
      i = [n, n, n, n, n, n];
    ((this.texture = new ud(i)),
      this._setTextureOptions(t),
      (this.texture.isRenderTargetTexture = !0));
  }
  fromEquirectangularTexture(e, t) {
    ((this.texture.type = t.type),
      (this.texture.colorSpace = t.colorSpace),
      (this.texture.generateMipmaps = t.generateMipmaps),
      (this.texture.minFilter = t.minFilter),
      (this.texture.magFilter = t.magFilter));
    const n = {
        uniforms: { tEquirect: { value: null } },
        vertexShader: `

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,
        fragmentShader: `

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`,
      },
      i = new ks(5, 5, 5),
      r = new Gn({
        name: "CubemapFromEquirect",
        uniforms: Gr(n.uniforms),
        vertexShader: n.vertexShader,
        fragmentShader: n.fragmentShader,
        side: Jt,
        blending: ai,
      });
    r.uniforms.tEquirect.value = t;
    const a = new Yt(i, r),
      o = t.minFilter;
    return (
      t.minFilter === ri && (t.minFilter = wt),
      new Mm(1, 10, this).update(e, a),
      (t.minFilter = o),
      a.geometry.dispose(),
      a.material.dispose(),
      this
    );
  }
  clear(e, t = !0, n = !0, i = !0) {
    const r = e.getRenderTarget();
    for (let a = 0; a < 6; a++) (e.setRenderTarget(this, a), e.clear(t, n, i));
    e.setRenderTarget(r);
  }
}
class Zi extends dt {
  constructor() {
    (super(), (this.isGroup = !0), (this.type = "Group"));
  }
}
const Tm = { type: "move" };
class yo {
  constructor() {
    ((this._targetRay = null), (this._grip = null), (this._hand = null));
  }
  getHandSpace() {
    return (
      this._hand === null &&
        ((this._hand = new Zi()),
        (this._hand.matrixAutoUpdate = !1),
        (this._hand.visible = !1),
        (this._hand.joints = {}),
        (this._hand.inputState = { pinching: !1 })),
      this._hand
    );
  }
  getTargetRaySpace() {
    return (
      this._targetRay === null &&
        ((this._targetRay = new Zi()),
        (this._targetRay.matrixAutoUpdate = !1),
        (this._targetRay.visible = !1),
        (this._targetRay.hasLinearVelocity = !1),
        (this._targetRay.linearVelocity = new L()),
        (this._targetRay.hasAngularVelocity = !1),
        (this._targetRay.angularVelocity = new L())),
      this._targetRay
    );
  }
  getGripSpace() {
    return (
      this._grip === null &&
        ((this._grip = new Zi()),
        (this._grip.matrixAutoUpdate = !1),
        (this._grip.visible = !1),
        (this._grip.hasLinearVelocity = !1),
        (this._grip.linearVelocity = new L()),
        (this._grip.hasAngularVelocity = !1),
        (this._grip.angularVelocity = new L())),
      this._grip
    );
  }
  dispatchEvent(e) {
    return (
      this._targetRay !== null && this._targetRay.dispatchEvent(e),
      this._grip !== null && this._grip.dispatchEvent(e),
      this._hand !== null && this._hand.dispatchEvent(e),
      this
    );
  }
  connect(e) {
    if (e && e.hand) {
      const t = this._hand;
      if (t) for (const n of e.hand.values()) this._getHandJoint(t, n);
    }
    return (this.dispatchEvent({ type: "connected", data: e }), this);
  }
  disconnect(e) {
    return (
      this.dispatchEvent({ type: "disconnected", data: e }),
      this._targetRay !== null && (this._targetRay.visible = !1),
      this._grip !== null && (this._grip.visible = !1),
      this._hand !== null && (this._hand.visible = !1),
      this
    );
  }
  update(e, t, n) {
    let i = null,
      r = null,
      a = null;
    const o = this._targetRay,
      l = this._grip,
      c = this._hand;
    if (e && t.session.visibilityState !== "visible-blurred") {
      if (c && e.hand) {
        a = !0;
        for (const _ of e.hand.values()) {
          const m = t.getJointPose(_, n),
            p = this._getHandJoint(c, _);
          (m !== null &&
            (p.matrix.fromArray(m.transform.matrix),
            p.matrix.decompose(p.position, p.rotation, p.scale),
            (p.matrixWorldNeedsUpdate = !0),
            (p.jointRadius = m.radius)),
            (p.visible = m !== null));
        }
        const h = c.joints["index-finger-tip"],
          u = c.joints["thumb-tip"],
          d = h.position.distanceTo(u.position),
          f = 0.02,
          g = 0.005;
        c.inputState.pinching && d > f + g
          ? ((c.inputState.pinching = !1),
            this.dispatchEvent({
              type: "pinchend",
              handedness: e.handedness,
              target: this,
            }))
          : !c.inputState.pinching &&
            d <= f - g &&
            ((c.inputState.pinching = !0),
            this.dispatchEvent({
              type: "pinchstart",
              handedness: e.handedness,
              target: this,
            }));
      } else
        l !== null &&
          e.gripSpace &&
          ((r = t.getPose(e.gripSpace, n)),
          r !== null &&
            (l.matrix.fromArray(r.transform.matrix),
            l.matrix.decompose(l.position, l.rotation, l.scale),
            (l.matrixWorldNeedsUpdate = !0),
            r.linearVelocity
              ? ((l.hasLinearVelocity = !0),
                l.linearVelocity.copy(r.linearVelocity))
              : (l.hasLinearVelocity = !1),
            r.angularVelocity
              ? ((l.hasAngularVelocity = !0),
                l.angularVelocity.copy(r.angularVelocity))
              : (l.hasAngularVelocity = !1)));
      o !== null &&
        ((i = t.getPose(e.targetRaySpace, n)),
        i === null && r !== null && (i = r),
        i !== null &&
          (o.matrix.fromArray(i.transform.matrix),
          o.matrix.decompose(o.position, o.rotation, o.scale),
          (o.matrixWorldNeedsUpdate = !0),
          i.linearVelocity
            ? ((o.hasLinearVelocity = !0),
              o.linearVelocity.copy(i.linearVelocity))
            : (o.hasLinearVelocity = !1),
          i.angularVelocity
            ? ((o.hasAngularVelocity = !0),
              o.angularVelocity.copy(i.angularVelocity))
            : (o.hasAngularVelocity = !1),
          this.dispatchEvent(Tm)));
    }
    return (
      o !== null && (o.visible = i !== null),
      l !== null && (l.visible = r !== null),
      c !== null && (c.visible = a !== null),
      this
    );
  }
  _getHandJoint(e, t) {
    if (e.joints[t.jointName] === void 0) {
      const n = new Zi();
      ((n.matrixAutoUpdate = !1),
        (n.visible = !1),
        (e.joints[t.jointName] = n),
        e.add(n));
    }
    return e.joints[t.jointName];
  }
}
class Em extends dt {
  constructor() {
    (super(),
      (this.isScene = !0),
      (this.type = "Scene"),
      (this.background = null),
      (this.environment = null),
      (this.fog = null),
      (this.backgroundBlurriness = 0),
      (this.backgroundIntensity = 1),
      (this.backgroundRotation = new Vn()),
      (this.environmentIntensity = 1),
      (this.environmentRotation = new Vn()),
      (this.overrideMaterial = null),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        ));
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      e.background !== null && (this.background = e.background.clone()),
      e.environment !== null && (this.environment = e.environment.clone()),
      e.fog !== null && (this.fog = e.fog.clone()),
      (this.backgroundBlurriness = e.backgroundBlurriness),
      (this.backgroundIntensity = e.backgroundIntensity),
      this.backgroundRotation.copy(e.backgroundRotation),
      (this.environmentIntensity = e.environmentIntensity),
      this.environmentRotation.copy(e.environmentRotation),
      e.overrideMaterial !== null &&
        (this.overrideMaterial = e.overrideMaterial.clone()),
      (this.matrixAutoUpdate = e.matrixAutoUpdate),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.fog !== null && (t.object.fog = this.fog.toJSON()),
      this.backgroundBlurriness > 0 &&
        (t.object.backgroundBlurriness = this.backgroundBlurriness),
      this.backgroundIntensity !== 1 &&
        (t.object.backgroundIntensity = this.backgroundIntensity),
      (t.object.backgroundRotation = this.backgroundRotation.toArray()),
      this.environmentIntensity !== 1 &&
        (t.object.environmentIntensity = this.environmentIntensity),
      (t.object.environmentRotation = this.environmentRotation.toArray()),
      t
    );
  }
}
class bm {
  constructor(e, t) {
    ((this.isInterleavedBuffer = !0),
      (this.array = e),
      (this.stride = t),
      (this.count = e !== void 0 ? e.length / t : 0),
      (this.usage = Dl),
      (this.updateRanges = []),
      (this.version = 0),
      (this.uuid = Ln()));
  }
  onUploadCallback() {}
  set needsUpdate(e) {
    e === !0 && this.version++;
  }
  setUsage(e) {
    return ((this.usage = e), this);
  }
  addUpdateRange(e, t) {
    this.updateRanges.push({ start: e, count: t });
  }
  clearUpdateRanges() {
    this.updateRanges.length = 0;
  }
  copy(e) {
    return (
      (this.array = new e.array.constructor(e.array)),
      (this.count = e.count),
      (this.stride = e.stride),
      (this.usage = e.usage),
      this
    );
  }
  copyAt(e, t, n) {
    ((e *= this.stride), (n *= t.stride));
    for (let i = 0, r = this.stride; i < r; i++)
      this.array[e + i] = t.array[n + i];
    return this;
  }
  set(e, t = 0) {
    return (this.array.set(e, t), this);
  }
  clone(e) {
    (e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ln()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = this.array.slice(0).buffer));
    const t = new this.array.constructor(
        e.arrayBuffers[this.array.buffer._uuid],
      ),
      n = new this.constructor(t, this.stride);
    return (n.setUsage(this.usage), n);
  }
  onUpload(e) {
    return ((this.onUploadCallback = e), this);
  }
  toJSON(e) {
    return (
      e.arrayBuffers === void 0 && (e.arrayBuffers = {}),
      this.array.buffer._uuid === void 0 && (this.array.buffer._uuid = Ln()),
      e.arrayBuffers[this.array.buffer._uuid] === void 0 &&
        (e.arrayBuffers[this.array.buffer._uuid] = Array.from(
          new Uint32Array(this.array.buffer),
        )),
      {
        uuid: this.uuid,
        buffer: this.array.buffer._uuid,
        type: this.array.constructor.name,
        stride: this.stride,
      }
    );
  }
}
const Gt = new L();
class dc {
  constructor(e, t, n, i = !1) {
    ((this.isInterleavedBufferAttribute = !0),
      (this.name = ""),
      (this.data = e),
      (this.itemSize = t),
      (this.offset = n),
      (this.normalized = i));
  }
  get count() {
    return this.data.count;
  }
  get array() {
    return this.data.array;
  }
  set needsUpdate(e) {
    this.data.needsUpdate = e;
  }
  applyMatrix4(e) {
    for (let t = 0, n = this.data.count; t < n; t++)
      (Gt.fromBufferAttribute(this, t),
        Gt.applyMatrix4(e),
        this.setXYZ(t, Gt.x, Gt.y, Gt.z));
    return this;
  }
  applyNormalMatrix(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (Gt.fromBufferAttribute(this, t),
        Gt.applyNormalMatrix(e),
        this.setXYZ(t, Gt.x, Gt.y, Gt.z));
    return this;
  }
  transformDirection(e) {
    for (let t = 0, n = this.count; t < n; t++)
      (Gt.fromBufferAttribute(this, t),
        Gt.transformDirection(e),
        this.setXYZ(t, Gt.x, Gt.y, Gt.z));
    return this;
  }
  getComponent(e, t) {
    let n = this.array[e * this.data.stride + this.offset + t];
    return (this.normalized && (n = Pn(n, this.array)), n);
  }
  setComponent(e, t, n) {
    return (
      this.normalized && (n = $e(n, this.array)),
      (this.data.array[e * this.data.stride + this.offset + t] = n),
      this
    );
  }
  setX(e, t) {
    return (
      this.normalized && (t = $e(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset] = t),
      this
    );
  }
  setY(e, t) {
    return (
      this.normalized && (t = $e(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 1] = t),
      this
    );
  }
  setZ(e, t) {
    return (
      this.normalized && (t = $e(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 2] = t),
      this
    );
  }
  setW(e, t) {
    return (
      this.normalized && (t = $e(t, this.array)),
      (this.data.array[e * this.data.stride + this.offset + 3] = t),
      this
    );
  }
  getX(e) {
    let t = this.data.array[e * this.data.stride + this.offset];
    return (this.normalized && (t = Pn(t, this.array)), t);
  }
  getY(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 1];
    return (this.normalized && (t = Pn(t, this.array)), t);
  }
  getZ(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 2];
    return (this.normalized && (t = Pn(t, this.array)), t);
  }
  getW(e) {
    let t = this.data.array[e * this.data.stride + this.offset + 3];
    return (this.normalized && (t = Pn(t, this.array)), t);
  }
  setXY(e, t, n) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized && ((t = $e(t, this.array)), (n = $e(n, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      this
    );
  }
  setXYZ(e, t, n, i) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = $e(t, this.array)),
        (n = $e(n, this.array)),
        (i = $e(i, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      (this.data.array[e + 2] = i),
      this
    );
  }
  setXYZW(e, t, n, i, r) {
    return (
      (e = e * this.data.stride + this.offset),
      this.normalized &&
        ((t = $e(t, this.array)),
        (n = $e(n, this.array)),
        (i = $e(i, this.array)),
        (r = $e(r, this.array))),
      (this.data.array[e + 0] = t),
      (this.data.array[e + 1] = n),
      (this.data.array[e + 2] = i),
      (this.data.array[e + 3] = r),
      this
    );
  }
  clone(e) {
    if (e === void 0) {
      console.log(
        "THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.",
      );
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]);
      }
      return new Ut(
        new this.array.constructor(t),
        this.itemSize,
        this.normalized,
      );
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.clone(e)),
        new dc(
          e.interleavedBuffers[this.data.uuid],
          this.itemSize,
          this.offset,
          this.normalized,
        )
      );
  }
  toJSON(e) {
    if (e === void 0) {
      console.log(
        "THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.",
      );
      const t = [];
      for (let n = 0; n < this.count; n++) {
        const i = n * this.data.stride + this.offset;
        for (let r = 0; r < this.itemSize; r++) t.push(this.data.array[i + r]);
      }
      return {
        itemSize: this.itemSize,
        type: this.array.constructor.name,
        array: t,
        normalized: this.normalized,
      };
    } else
      return (
        e.interleavedBuffers === void 0 && (e.interleavedBuffers = {}),
        e.interleavedBuffers[this.data.uuid] === void 0 &&
          (e.interleavedBuffers[this.data.uuid] = this.data.toJSON(e)),
        {
          isInterleavedBufferAttribute: !0,
          itemSize: this.itemSize,
          data: this.data.uuid,
          offset: this.offset,
          normalized: this.normalized,
        }
      );
  }
}
const bh = new L(),
  Ah = new Ke(),
  wh = new Ke(),
  Am = new L(),
  Rh = new Oe(),
  aa = new L(),
  Mo = new Xn(),
  Ch = new Oe(),
  So = new Qr();
class wm extends Yt {
  constructor(e, t) {
    (super(e, t),
      (this.isSkinnedMesh = !0),
      (this.type = "SkinnedMesh"),
      (this.bindMode = eh),
      (this.bindMatrix = new Oe()),
      (this.bindMatrixInverse = new Oe()),
      (this.boundingBox = null),
      (this.boundingSphere = null));
  }
  computeBoundingBox() {
    const e = this.geometry;
    (this.boundingBox === null && (this.boundingBox = new di()),
      this.boundingBox.makeEmpty());
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      (this.getVertexPosition(n, aa), this.boundingBox.expandByPoint(aa));
  }
  computeBoundingSphere() {
    const e = this.geometry;
    (this.boundingSphere === null && (this.boundingSphere = new Xn()),
      this.boundingSphere.makeEmpty());
    const t = e.getAttribute("position");
    for (let n = 0; n < t.count; n++)
      (this.getVertexPosition(n, aa), this.boundingSphere.expandByPoint(aa));
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.bindMode = e.bindMode),
      this.bindMatrix.copy(e.bindMatrix),
      this.bindMatrixInverse.copy(e.bindMatrixInverse),
      (this.skeleton = e.skeleton),
      e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
      e.boundingSphere !== null &&
        (this.boundingSphere = e.boundingSphere.clone()),
      this
    );
  }
  raycast(e, t) {
    const n = this.material,
      i = this.matrixWorld;
    n !== void 0 &&
      (this.boundingSphere === null && this.computeBoundingSphere(),
      Mo.copy(this.boundingSphere),
      Mo.applyMatrix4(i),
      e.ray.intersectsSphere(Mo) !== !1 &&
        (Ch.copy(i).invert(),
        So.copy(e.ray).applyMatrix4(Ch),
        !(
          this.boundingBox !== null && So.intersectsBox(this.boundingBox) === !1
        ) && this._computeIntersections(e, t, So)));
  }
  getVertexPosition(e, t) {
    return (super.getVertexPosition(e, t), this.applyBoneTransform(e, t), t);
  }
  bind(e, t) {
    ((this.skeleton = e),
      t === void 0 &&
        (this.updateMatrixWorld(!0),
        this.skeleton.calculateInverses(),
        (t = this.matrixWorld)),
      this.bindMatrix.copy(t),
      this.bindMatrixInverse.copy(t).invert());
  }
  pose() {
    this.skeleton.pose();
  }
  normalizeSkinWeights() {
    const e = new Ke(),
      t = this.geometry.attributes.skinWeight;
    for (let n = 0, i = t.count; n < i; n++) {
      e.fromBufferAttribute(t, n);
      const r = 1 / e.manhattanLength();
      (r !== 1 / 0 ? e.multiplyScalar(r) : e.set(1, 0, 0, 0),
        t.setXYZW(n, e.x, e.y, e.z, e.w));
    }
  }
  updateMatrixWorld(e) {
    (super.updateMatrixWorld(e),
      this.bindMode === eh
        ? this.bindMatrixInverse.copy(this.matrixWorld).invert()
        : this.bindMode === Ep
          ? this.bindMatrixInverse.copy(this.bindMatrix).invert()
          : console.warn(
              "THREE.SkinnedMesh: Unrecognized bindMode: " + this.bindMode,
            ));
  }
  applyBoneTransform(e, t) {
    const n = this.skeleton,
      i = this.geometry;
    (Ah.fromBufferAttribute(i.attributes.skinIndex, e),
      wh.fromBufferAttribute(i.attributes.skinWeight, e),
      bh.copy(t).applyMatrix4(this.bindMatrix),
      t.set(0, 0, 0));
    for (let r = 0; r < 4; r++) {
      const a = wh.getComponent(r);
      if (a !== 0) {
        const o = Ah.getComponent(r);
        (Rh.multiplyMatrices(n.bones[o].matrixWorld, n.boneInverses[o]),
          t.addScaledVector(Am.copy(bh).applyMatrix4(Rh), a));
      }
    }
    return t.applyMatrix4(this.bindMatrixInverse);
  }
}
class dd extends dt {
  constructor() {
    (super(), (this.isBone = !0), (this.type = "Bone"));
  }
}
class fc extends ut {
  constructor(e = null, t = 1, n = 1, i, r, a, o, l, c = qt, h = qt, u, d) {
    (super(null, a, o, l, c, h, i, r, u, d),
      (this.isDataTexture = !0),
      (this.image = { data: e, width: t, height: n }),
      (this.generateMipmaps = !1),
      (this.flipY = !1),
      (this.unpackAlignment = 1));
  }
}
const Ph = new Oe(),
  Rm = new Oe();
class pc {
  constructor(e = [], t = []) {
    ((this.uuid = Ln()),
      (this.bones = e.slice(0)),
      (this.boneInverses = t),
      (this.boneMatrices = null),
      (this.boneTexture = null),
      this.init());
  }
  init() {
    const e = this.bones,
      t = this.boneInverses;
    if (((this.boneMatrices = new Float32Array(e.length * 16)), t.length === 0))
      this.calculateInverses();
    else if (e.length !== t.length) {
      (console.warn(
        "THREE.Skeleton: Number of inverse bone matrices does not match amount of bones.",
      ),
        (this.boneInverses = []));
      for (let n = 0, i = this.bones.length; n < i; n++)
        this.boneInverses.push(new Oe());
    }
  }
  calculateInverses() {
    this.boneInverses.length = 0;
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = new Oe();
      (this.bones[e] && n.copy(this.bones[e].matrixWorld).invert(),
        this.boneInverses.push(n));
    }
  }
  pose() {
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n && n.matrixWorld.copy(this.boneInverses[e]).invert();
    }
    for (let e = 0, t = this.bones.length; e < t; e++) {
      const n = this.bones[e];
      n &&
        (n.parent && n.parent.isBone
          ? (n.matrix.copy(n.parent.matrixWorld).invert(),
            n.matrix.multiply(n.matrixWorld))
          : n.matrix.copy(n.matrixWorld),
        n.matrix.decompose(n.position, n.quaternion, n.scale));
    }
  }
  update() {
    const e = this.bones,
      t = this.boneInverses,
      n = this.boneMatrices,
      i = this.boneTexture;
    for (let r = 0, a = e.length; r < a; r++) {
      const o = e[r] ? e[r].matrixWorld : Rm;
      (Ph.multiplyMatrices(o, t[r]), Ph.toArray(n, r * 16));
    }
    i !== null && (i.needsUpdate = !0);
  }
  clone() {
    return new pc(this.bones, this.boneInverses);
  }
  computeBoneTexture() {
    let e = Math.sqrt(this.bones.length * 4);
    ((e = Math.ceil(e / 4) * 4), (e = Math.max(e, 4)));
    const t = new Float32Array(e * e * 4);
    t.set(this.boneMatrices);
    const n = new fc(t, e, e, zt, $t);
    return (
      (n.needsUpdate = !0),
      (this.boneMatrices = t),
      (this.boneTexture = n),
      this
    );
  }
  getBoneByName(e) {
    for (let t = 0, n = this.bones.length; t < n; t++) {
      const i = this.bones[t];
      if (i.name === e) return i;
    }
  }
  dispose() {
    this.boneTexture !== null &&
      (this.boneTexture.dispose(), (this.boneTexture = null));
  }
  fromJSON(e, t) {
    this.uuid = e.uuid;
    for (let n = 0, i = e.bones.length; n < i; n++) {
      const r = e.bones[n];
      let a = t[r];
      (a === void 0 &&
        (console.warn("THREE.Skeleton: No bone found with UUID:", r),
        (a = new dd())),
        this.bones.push(a),
        this.boneInverses.push(new Oe().fromArray(e.boneInverses[n])));
    }
    return (this.init(), this);
  }
  toJSON() {
    const e = {
      metadata: {
        version: 4.7,
        type: "Skeleton",
        generator: "Skeleton.toJSON",
      },
      bones: [],
      boneInverses: [],
    };
    e.uuid = this.uuid;
    const t = this.bones,
      n = this.boneInverses;
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i];
      e.bones.push(a.uuid);
      const o = n[i];
      e.boneInverses.push(o.toArray());
    }
    return e;
  }
}
class Ll extends Ut {
  constructor(e, t, n, i = 1) {
    (super(e, t, n),
      (this.isInstancedBufferAttribute = !0),
      (this.meshPerAttribute = i));
  }
  copy(e) {
    return (super.copy(e), (this.meshPerAttribute = e.meshPerAttribute), this);
  }
  toJSON() {
    const e = super.toJSON();
    return (
      (e.meshPerAttribute = this.meshPerAttribute),
      (e.isInstancedBufferAttribute = !0),
      e
    );
  }
}
const yr = new Oe(),
  Dh = new Oe(),
  oa = [],
  Lh = new di(),
  Cm = new Oe(),
  cs = new Yt(),
  hs = new Xn();
class Pm extends Yt {
  constructor(e, t, n) {
    (super(e, t),
      (this.isInstancedMesh = !0),
      (this.instanceMatrix = new Ll(new Float32Array(n * 16), 16)),
      (this.instanceColor = null),
      (this.morphTexture = null),
      (this.count = n),
      (this.boundingBox = null),
      (this.boundingSphere = null));
    for (let i = 0; i < n; i++) this.setMatrixAt(i, Cm);
  }
  computeBoundingBox() {
    const e = this.geometry,
      t = this.count;
    (this.boundingBox === null && (this.boundingBox = new di()),
      e.boundingBox === null && e.computeBoundingBox(),
      this.boundingBox.makeEmpty());
    for (let n = 0; n < t; n++)
      (this.getMatrixAt(n, yr),
        Lh.copy(e.boundingBox).applyMatrix4(yr),
        this.boundingBox.union(Lh));
  }
  computeBoundingSphere() {
    const e = this.geometry,
      t = this.count;
    (this.boundingSphere === null && (this.boundingSphere = new Xn()),
      e.boundingSphere === null && e.computeBoundingSphere(),
      this.boundingSphere.makeEmpty());
    for (let n = 0; n < t; n++)
      (this.getMatrixAt(n, yr),
        hs.copy(e.boundingSphere).applyMatrix4(yr),
        this.boundingSphere.union(hs));
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      this.instanceMatrix.copy(e.instanceMatrix),
      e.morphTexture !== null && (this.morphTexture = e.morphTexture.clone()),
      e.instanceColor !== null &&
        (this.instanceColor = e.instanceColor.clone()),
      (this.count = e.count),
      e.boundingBox !== null && (this.boundingBox = e.boundingBox.clone()),
      e.boundingSphere !== null &&
        (this.boundingSphere = e.boundingSphere.clone()),
      this
    );
  }
  getColorAt(e, t) {
    t.fromArray(this.instanceColor.array, e * 3);
  }
  getMatrixAt(e, t) {
    t.fromArray(this.instanceMatrix.array, e * 16);
  }
  getMorphAt(e, t) {
    const n = t.morphTargetInfluences,
      i = this.morphTexture.source.data.data,
      r = n.length + 1,
      a = e * r + 1;
    for (let o = 0; o < n.length; o++) n[o] = i[a + o];
  }
  raycast(e, t) {
    const n = this.matrixWorld,
      i = this.count;
    if (
      ((cs.geometry = this.geometry),
      (cs.material = this.material),
      cs.material !== void 0 &&
        (this.boundingSphere === null && this.computeBoundingSphere(),
        hs.copy(this.boundingSphere),
        hs.applyMatrix4(n),
        e.ray.intersectsSphere(hs) !== !1))
    )
      for (let r = 0; r < i; r++) {
        (this.getMatrixAt(r, yr),
          Dh.multiplyMatrices(n, yr),
          (cs.matrixWorld = Dh),
          cs.raycast(e, oa));
        for (let a = 0, o = oa.length; a < o; a++) {
          const l = oa[a];
          ((l.instanceId = r), (l.object = this), t.push(l));
        }
        oa.length = 0;
      }
  }
  setColorAt(e, t) {
    (this.instanceColor === null &&
      (this.instanceColor = new Ll(
        new Float32Array(this.instanceMatrix.count * 3).fill(1),
        3,
      )),
      t.toArray(this.instanceColor.array, e * 3));
  }
  setMatrixAt(e, t) {
    t.toArray(this.instanceMatrix.array, e * 16);
  }
  setMorphAt(e, t) {
    const n = t.morphTargetInfluences,
      i = n.length + 1;
    this.morphTexture === null &&
      (this.morphTexture = new fc(
        new Float32Array(i * this.count),
        i,
        this.count,
        rc,
        $t,
      ));
    const r = this.morphTexture.source.data.data;
    let a = 0;
    for (let c = 0; c < n.length; c++) a += n[c];
    const o = this.geometry.morphTargetsRelative ? 1 : 1 - a,
      l = i * e;
    ((r[l] = o), r.set(n, l + 1));
  }
  updateMorphTargets() {}
  dispose() {
    (this.dispatchEvent({ type: "dispose" }),
      this.morphTexture !== null &&
        (this.morphTexture.dispose(), (this.morphTexture = null)));
  }
}
const To = new L(),
  Dm = new L(),
  Lm = new Be();
class yi {
  constructor(e = new L(1, 0, 0), t = 0) {
    ((this.isPlane = !0), (this.normal = e), (this.constant = t));
  }
  set(e, t) {
    return (this.normal.copy(e), (this.constant = t), this);
  }
  setComponents(e, t, n, i) {
    return (this.normal.set(e, t, n), (this.constant = i), this);
  }
  setFromNormalAndCoplanarPoint(e, t) {
    return (this.normal.copy(e), (this.constant = -t.dot(this.normal)), this);
  }
  setFromCoplanarPoints(e, t, n) {
    const i = To.subVectors(n, t).cross(Dm.subVectors(e, t)).normalize();
    return (this.setFromNormalAndCoplanarPoint(i, e), this);
  }
  copy(e) {
    return (this.normal.copy(e.normal), (this.constant = e.constant), this);
  }
  normalize() {
    const e = 1 / this.normal.length();
    return (this.normal.multiplyScalar(e), (this.constant *= e), this);
  }
  negate() {
    return ((this.constant *= -1), this.normal.negate(), this);
  }
  distanceToPoint(e) {
    return this.normal.dot(e) + this.constant;
  }
  distanceToSphere(e) {
    return this.distanceToPoint(e.center) - e.radius;
  }
  projectPoint(e, t) {
    return t.copy(e).addScaledVector(this.normal, -this.distanceToPoint(e));
  }
  intersectLine(e, t) {
    const n = e.delta(To),
      i = this.normal.dot(n);
    if (i === 0)
      return this.distanceToPoint(e.start) === 0 ? t.copy(e.start) : null;
    const r = -(e.start.dot(this.normal) + this.constant) / i;
    return r < 0 || r > 1 ? null : t.copy(e.start).addScaledVector(n, r);
  }
  intersectsLine(e) {
    const t = this.distanceToPoint(e.start),
      n = this.distanceToPoint(e.end);
    return (t < 0 && n > 0) || (n < 0 && t > 0);
  }
  intersectsBox(e) {
    return e.intersectsPlane(this);
  }
  intersectsSphere(e) {
    return e.intersectsPlane(this);
  }
  coplanarPoint(e) {
    return e.copy(this.normal).multiplyScalar(-this.constant);
  }
  applyMatrix4(e, t) {
    const n = t || Lm.getNormalMatrix(e),
      i = this.coplanarPoint(To).applyMatrix4(e),
      r = this.normal.applyMatrix3(n).normalize();
    return ((this.constant = -i.dot(r)), this);
  }
  translate(e) {
    return ((this.constant -= e.dot(this.normal)), this);
  }
  equals(e) {
    return e.normal.equals(this.normal) && e.constant === this.constant;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
const zi = new Xn(),
  Im = new Re(0.5, 0.5),
  la = new L();
class mc {
  constructor(
    e = new yi(),
    t = new yi(),
    n = new yi(),
    i = new yi(),
    r = new yi(),
    a = new yi(),
  ) {
    this.planes = [e, t, n, i, r, a];
  }
  set(e, t, n, i, r, a) {
    const o = this.planes;
    return (
      o[0].copy(e),
      o[1].copy(t),
      o[2].copy(n),
      o[3].copy(i),
      o[4].copy(r),
      o[5].copy(a),
      this
    );
  }
  copy(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) t[n].copy(e.planes[n]);
    return this;
  }
  setFromProjectionMatrix(e, t = kn, n = !1) {
    const i = this.planes,
      r = e.elements,
      a = r[0],
      o = r[1],
      l = r[2],
      c = r[3],
      h = r[4],
      u = r[5],
      d = r[6],
      f = r[7],
      g = r[8],
      _ = r[9],
      m = r[10],
      p = r[11],
      S = r[12],
      M = r[13],
      v = r[14],
      b = r[15];
    if (
      (i[0].setComponents(c - a, f - h, p - g, b - S).normalize(),
      i[1].setComponents(c + a, f + h, p + g, b + S).normalize(),
      i[2].setComponents(c + o, f + u, p + _, b + M).normalize(),
      i[3].setComponents(c - o, f - u, p - _, b - M).normalize(),
      n)
    )
      (i[4].setComponents(l, d, m, v).normalize(),
        i[5].setComponents(c - l, f - d, p - m, b - v).normalize());
    else if (
      (i[4].setComponents(c - l, f - d, p - m, b - v).normalize(), t === kn)
    )
      i[5].setComponents(c + l, f + d, p + m, b + v).normalize();
    else if (t === La) i[5].setComponents(l, d, m, v).normalize();
    else
      throw new Error(
        "THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: " +
          t,
      );
    return this;
  }
  intersectsObject(e) {
    if (e.boundingSphere !== void 0)
      (e.boundingSphere === null && e.computeBoundingSphere(),
        zi.copy(e.boundingSphere).applyMatrix4(e.matrixWorld));
    else {
      const t = e.geometry;
      (t.boundingSphere === null && t.computeBoundingSphere(),
        zi.copy(t.boundingSphere).applyMatrix4(e.matrixWorld));
    }
    return this.intersectsSphere(zi);
  }
  intersectsSprite(e) {
    zi.center.set(0, 0, 0);
    const t = Im.distanceTo(e.center);
    return (
      (zi.radius = 0.7071067811865476 + t),
      zi.applyMatrix4(e.matrixWorld),
      this.intersectsSphere(zi)
    );
  }
  intersectsSphere(e) {
    const t = this.planes,
      n = e.center,
      i = -e.radius;
    for (let r = 0; r < 6; r++) if (t[r].distanceToPoint(n) < i) return !1;
    return !0;
  }
  intersectsBox(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) {
      const i = t[n];
      if (
        ((la.x = i.normal.x > 0 ? e.max.x : e.min.x),
        (la.y = i.normal.y > 0 ? e.max.y : e.min.y),
        (la.z = i.normal.z > 0 ? e.max.z : e.min.z),
        i.distanceToPoint(la) < 0)
      )
        return !1;
    }
    return !0;
  }
  containsPoint(e) {
    const t = this.planes;
    for (let n = 0; n < 6; n++) if (t[n].distanceToPoint(e) < 0) return !1;
    return !0;
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class fd extends In {
  constructor(e) {
    (super(),
      (this.isLineBasicMaterial = !0),
      (this.type = "LineBasicMaterial"),
      (this.color = new Ie(16777215)),
      (this.map = null),
      (this.linewidth = 1),
      (this.linecap = "round"),
      (this.linejoin = "round"),
      (this.fog = !0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.linewidth = e.linewidth),
      (this.linecap = e.linecap),
      (this.linejoin = e.linejoin),
      (this.fog = e.fog),
      this
    );
  }
}
const Ia = new L(),
  Ua = new L(),
  Ih = new Oe(),
  us = new Qr(),
  ca = new Xn(),
  Eo = new L(),
  Uh = new L();
class _c extends dt {
  constructor(e = new bn(), t = new fd()) {
    (super(),
      (this.isLine = !0),
      (this.type = "Line"),
      (this.geometry = e),
      (this.material = t),
      (this.morphTargetDictionary = void 0),
      (this.morphTargetInfluences = void 0),
      this.updateMorphTargets());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [0];
      for (let i = 1, r = t.count; i < r; i++)
        (Ia.fromBufferAttribute(t, i - 1),
          Ua.fromBufferAttribute(t, i),
          (n[i] = n[i - 1]),
          (n[i] += Ia.distanceTo(Ua)));
      e.setAttribute("lineDistance", new En(n, 1));
    } else
      console.warn(
        "THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.",
      );
    return this;
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      r = e.params.Line.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      ca.copy(n.boundingSphere),
      ca.applyMatrix4(i),
      (ca.radius += r),
      e.ray.intersectsSphere(ca) === !1)
    )
      return;
    (Ih.copy(i).invert(), us.copy(e.ray).applyMatrix4(Ih));
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = o * o,
      c = this.isLineSegments ? 2 : 1,
      h = n.index,
      d = n.attributes.position;
    if (h !== null) {
      const f = Math.max(0, a.start),
        g = Math.min(h.count, a.start + a.count);
      for (let _ = f, m = g - 1; _ < m; _ += c) {
        const p = h.getX(_),
          S = h.getX(_ + 1),
          M = ha(this, e, us, l, p, S, _);
        M && t.push(M);
      }
      if (this.isLineLoop) {
        const _ = h.getX(g - 1),
          m = h.getX(f),
          p = ha(this, e, us, l, _, m, g - 1);
        p && t.push(p);
      }
    } else {
      const f = Math.max(0, a.start),
        g = Math.min(d.count, a.start + a.count);
      for (let _ = f, m = g - 1; _ < m; _ += c) {
        const p = ha(this, e, us, l, _, _ + 1, _);
        p && t.push(p);
      }
      if (this.isLineLoop) {
        const _ = ha(this, e, us, l, g - 1, f, g - 1);
        _ && t.push(_);
      }
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        ((this.morphTargetInfluences = []), (this.morphTargetDictionary = {}));
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          (this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = r));
        }
      }
    }
  }
}
function ha(s, e, t, n, i, r, a) {
  const o = s.geometry.attributes.position;
  if (
    (Ia.fromBufferAttribute(o, i),
    Ua.fromBufferAttribute(o, r),
    t.distanceSqToSegment(Ia, Ua, Eo, Uh) > n)
  )
    return;
  Eo.applyMatrix4(s.matrixWorld);
  const c = e.ray.origin.distanceTo(Eo);
  if (!(c < e.near || c > e.far))
    return {
      distance: c,
      point: Uh.clone().applyMatrix4(s.matrixWorld),
      index: a,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: s,
    };
}
const Nh = new L(),
  Oh = new L();
class Um extends _c {
  constructor(e, t) {
    (super(e, t), (this.isLineSegments = !0), (this.type = "LineSegments"));
  }
  computeLineDistances() {
    const e = this.geometry;
    if (e.index === null) {
      const t = e.attributes.position,
        n = [];
      for (let i = 0, r = t.count; i < r; i += 2)
        (Nh.fromBufferAttribute(t, i),
          Oh.fromBufferAttribute(t, i + 1),
          (n[i] = i === 0 ? 0 : n[i - 1]),
          (n[i + 1] = n[i] + Nh.distanceTo(Oh)));
      e.setAttribute("lineDistance", new En(n, 1));
    } else
      console.warn(
        "THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.",
      );
    return this;
  }
}
class Nm extends _c {
  constructor(e, t) {
    (super(e, t), (this.isLineLoop = !0), (this.type = "LineLoop"));
  }
}
class pd extends In {
  constructor(e) {
    (super(),
      (this.isPointsMaterial = !0),
      (this.type = "PointsMaterial"),
      (this.color = new Ie(16777215)),
      (this.map = null),
      (this.alphaMap = null),
      (this.size = 1),
      (this.sizeAttenuation = !0),
      (this.fog = !0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      this.color.copy(e.color),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.size = e.size),
      (this.sizeAttenuation = e.sizeAttenuation),
      (this.fog = e.fog),
      this
    );
  }
}
const Fh = new Oe(),
  Il = new Qr(),
  ua = new Xn(),
  da = new L();
class Om extends dt {
  constructor(e = new bn(), t = new pd()) {
    (super(),
      (this.isPoints = !0),
      (this.type = "Points"),
      (this.geometry = e),
      (this.material = t),
      (this.morphTargetDictionary = void 0),
      (this.morphTargetInfluences = void 0),
      this.updateMorphTargets());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.material = Array.isArray(e.material)
        ? e.material.slice()
        : e.material),
      (this.geometry = e.geometry),
      this
    );
  }
  raycast(e, t) {
    const n = this.geometry,
      i = this.matrixWorld,
      r = e.params.Points.threshold,
      a = n.drawRange;
    if (
      (n.boundingSphere === null && n.computeBoundingSphere(),
      ua.copy(n.boundingSphere),
      ua.applyMatrix4(i),
      (ua.radius += r),
      e.ray.intersectsSphere(ua) === !1)
    )
      return;
    (Fh.copy(i).invert(), Il.copy(e.ray).applyMatrix4(Fh));
    const o = r / ((this.scale.x + this.scale.y + this.scale.z) / 3),
      l = o * o,
      c = n.index,
      u = n.attributes.position;
    if (c !== null) {
      const d = Math.max(0, a.start),
        f = Math.min(c.count, a.start + a.count);
      for (let g = d, _ = f; g < _; g++) {
        const m = c.getX(g);
        (da.fromBufferAttribute(u, m), Bh(da, m, l, i, e, t, this));
      }
    } else {
      const d = Math.max(0, a.start),
        f = Math.min(u.count, a.start + a.count);
      for (let g = d, _ = f; g < _; g++)
        (da.fromBufferAttribute(u, g), Bh(da, g, l, i, e, t, this));
    }
  }
  updateMorphTargets() {
    const t = this.geometry.morphAttributes,
      n = Object.keys(t);
    if (n.length > 0) {
      const i = t[n[0]];
      if (i !== void 0) {
        ((this.morphTargetInfluences = []), (this.morphTargetDictionary = {}));
        for (let r = 0, a = i.length; r < a; r++) {
          const o = i[r].name || String(r);
          (this.morphTargetInfluences.push(0),
            (this.morphTargetDictionary[o] = r));
        }
      }
    }
  }
}
function Bh(s, e, t, n, i, r, a) {
  const o = Il.distanceSqToPoint(s);
  if (o < t) {
    const l = new L();
    (Il.closestPointToPoint(s, l), l.applyMatrix4(n));
    const c = i.ray.origin.distanceTo(l);
    if (c < i.near || c > i.far) return;
    r.push({
      distance: c,
      distanceToRay: Math.sqrt(o),
      point: l,
      index: e,
      face: null,
      faceIndex: null,
      barycoord: null,
      object: a,
    });
  }
}
class md extends ut {
  constructor(e, t, n = Ci, i, r, a, o = qt, l = qt, c, h = ws, u = 1) {
    if (h !== ws && h !== Rs)
      throw new Error(
        "DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat",
      );
    const d = { width: e, height: t, depth: u };
    (super(d, i, r, a, o, l, h, n, c),
      (this.isDepthTexture = !0),
      (this.flipY = !1),
      (this.generateMipmaps = !1),
      (this.compareFunction = null));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.source = new hc(Object.assign({}, e.image))),
      (this.compareFunction = e.compareFunction),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      this.compareFunction !== null &&
        (t.compareFunction = this.compareFunction),
      t
    );
  }
}
class _d extends bn {
  constructor(e = 1, t = 32, n = 0, i = Math.PI * 2) {
    (super(),
      (this.type = "CircleGeometry"),
      (this.parameters = {
        radius: e,
        segments: t,
        thetaStart: n,
        thetaLength: i,
      }),
      (t = Math.max(3, t)));
    const r = [],
      a = [],
      o = [],
      l = [],
      c = new L(),
      h = new Re();
    (a.push(0, 0, 0), o.push(0, 0, 1), l.push(0.5, 0.5));
    for (let u = 0, d = 3; u <= t; u++, d += 3) {
      const f = n + (u / t) * i;
      ((c.x = e * Math.cos(f)),
        (c.y = e * Math.sin(f)),
        a.push(c.x, c.y, c.z),
        o.push(0, 0, 1),
        (h.x = (a[d] / e + 1) / 2),
        (h.y = (a[d + 1] / e + 1) / 2),
        l.push(h.x, h.y));
    }
    for (let u = 1; u <= t; u++) r.push(u, u + 1, 0);
    (this.setIndex(r),
      this.setAttribute("position", new En(a, 3)),
      this.setAttribute("normal", new En(o, 3)),
      this.setAttribute("uv", new En(l, 2)));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  static fromJSON(e) {
    return new _d(e.radius, e.segments, e.thetaStart, e.thetaLength);
  }
}
class es extends bn {
  constructor(e = 1, t = 1, n = 1, i = 1) {
    (super(),
      (this.type = "PlaneGeometry"),
      (this.parameters = {
        width: e,
        height: t,
        widthSegments: n,
        heightSegments: i,
      }));
    const r = e / 2,
      a = t / 2,
      o = Math.floor(n),
      l = Math.floor(i),
      c = o + 1,
      h = l + 1,
      u = e / o,
      d = t / l,
      f = [],
      g = [],
      _ = [],
      m = [];
    for (let p = 0; p < h; p++) {
      const S = p * d - a;
      for (let M = 0; M < c; M++) {
        const v = M * u - r;
        (g.push(v, -S, 0), _.push(0, 0, 1), m.push(M / o), m.push(1 - p / l));
      }
    }
    for (let p = 0; p < l; p++)
      for (let S = 0; S < o; S++) {
        const M = S + c * p,
          v = S + c * (p + 1),
          b = S + 1 + c * (p + 1),
          A = S + 1 + c * p;
        (f.push(M, v, A), f.push(v, b, A));
      }
    (this.setIndex(f),
      this.setAttribute("position", new En(g, 3)),
      this.setAttribute("normal", new En(_, 3)),
      this.setAttribute("uv", new En(m, 2)));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.parameters = Object.assign({}, e.parameters)),
      this
    );
  }
  static fromJSON(e) {
    return new es(e.width, e.height, e.widthSegments, e.heightSegments);
  }
}
class gc extends In {
  constructor(e) {
    (super(),
      (this.isMeshStandardMaterial = !0),
      (this.type = "MeshStandardMaterial"),
      (this.defines = { STANDARD: "" }),
      (this.color = new Ie(16777215)),
      (this.roughness = 1),
      (this.metalness = 0),
      (this.map = null),
      (this.lightMap = null),
      (this.lightMapIntensity = 1),
      (this.aoMap = null),
      (this.aoMapIntensity = 1),
      (this.emissive = new Ie(0)),
      (this.emissiveIntensity = 1),
      (this.emissiveMap = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = lc),
      (this.normalScale = new Re(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.roughnessMap = null),
      (this.metalnessMap = null),
      (this.alphaMap = null),
      (this.envMap = null),
      (this.envMapRotation = new Vn()),
      (this.envMapIntensity = 1),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      (this.wireframeLinecap = "round"),
      (this.wireframeLinejoin = "round"),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "" }),
      this.color.copy(e.color),
      (this.roughness = e.roughness),
      (this.metalness = e.metalness),
      (this.map = e.map),
      (this.lightMap = e.lightMap),
      (this.lightMapIntensity = e.lightMapIntensity),
      (this.aoMap = e.aoMap),
      (this.aoMapIntensity = e.aoMapIntensity),
      this.emissive.copy(e.emissive),
      (this.emissiveMap = e.emissiveMap),
      (this.emissiveIntensity = e.emissiveIntensity),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.roughnessMap = e.roughnessMap),
      (this.metalnessMap = e.metalnessMap),
      (this.alphaMap = e.alphaMap),
      (this.envMap = e.envMap),
      this.envMapRotation.copy(e.envMapRotation),
      (this.envMapIntensity = e.envMapIntensity),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      (this.wireframeLinecap = e.wireframeLinecap),
      (this.wireframeLinejoin = e.wireframeLinejoin),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
class Yn extends gc {
  constructor(e) {
    (super(),
      (this.isMeshPhysicalMaterial = !0),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.type = "MeshPhysicalMaterial"),
      (this.anisotropyRotation = 0),
      (this.anisotropyMap = null),
      (this.clearcoatMap = null),
      (this.clearcoatRoughness = 0),
      (this.clearcoatRoughnessMap = null),
      (this.clearcoatNormalScale = new Re(1, 1)),
      (this.clearcoatNormalMap = null),
      (this.ior = 1.5),
      Object.defineProperty(this, "reflectivity", {
        get: function () {
          return ze((2.5 * (this.ior - 1)) / (this.ior + 1), 0, 1);
        },
        set: function (t) {
          this.ior = (1 + 0.4 * t) / (1 - 0.4 * t);
        },
      }),
      (this.iridescenceMap = null),
      (this.iridescenceIOR = 1.3),
      (this.iridescenceThicknessRange = [100, 400]),
      (this.iridescenceThicknessMap = null),
      (this.sheenColor = new Ie(0)),
      (this.sheenColorMap = null),
      (this.sheenRoughness = 1),
      (this.sheenRoughnessMap = null),
      (this.transmissionMap = null),
      (this.thickness = 0),
      (this.thicknessMap = null),
      (this.attenuationDistance = 1 / 0),
      (this.attenuationColor = new Ie(1, 1, 1)),
      (this.specularIntensity = 1),
      (this.specularIntensityMap = null),
      (this.specularColor = new Ie(1, 1, 1)),
      (this.specularColorMap = null),
      (this._anisotropy = 0),
      (this._clearcoat = 0),
      (this._dispersion = 0),
      (this._iridescence = 0),
      (this._sheen = 0),
      (this._transmission = 0),
      this.setValues(e));
  }
  get anisotropy() {
    return this._anisotropy;
  }
  set anisotropy(e) {
    (this._anisotropy > 0 != e > 0 && this.version++, (this._anisotropy = e));
  }
  get clearcoat() {
    return this._clearcoat;
  }
  set clearcoat(e) {
    (this._clearcoat > 0 != e > 0 && this.version++, (this._clearcoat = e));
  }
  get iridescence() {
    return this._iridescence;
  }
  set iridescence(e) {
    (this._iridescence > 0 != e > 0 && this.version++, (this._iridescence = e));
  }
  get dispersion() {
    return this._dispersion;
  }
  set dispersion(e) {
    (this._dispersion > 0 != e > 0 && this.version++, (this._dispersion = e));
  }
  get sheen() {
    return this._sheen;
  }
  set sheen(e) {
    (this._sheen > 0 != e > 0 && this.version++, (this._sheen = e));
  }
  get transmission() {
    return this._transmission;
  }
  set transmission(e) {
    (this._transmission > 0 != e > 0 && this.version++,
      (this._transmission = e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { STANDARD: "", PHYSICAL: "" }),
      (this.anisotropy = e.anisotropy),
      (this.anisotropyRotation = e.anisotropyRotation),
      (this.anisotropyMap = e.anisotropyMap),
      (this.clearcoat = e.clearcoat),
      (this.clearcoatMap = e.clearcoatMap),
      (this.clearcoatRoughness = e.clearcoatRoughness),
      (this.clearcoatRoughnessMap = e.clearcoatRoughnessMap),
      (this.clearcoatNormalMap = e.clearcoatNormalMap),
      this.clearcoatNormalScale.copy(e.clearcoatNormalScale),
      (this.dispersion = e.dispersion),
      (this.ior = e.ior),
      (this.iridescence = e.iridescence),
      (this.iridescenceMap = e.iridescenceMap),
      (this.iridescenceIOR = e.iridescenceIOR),
      (this.iridescenceThicknessRange = [...e.iridescenceThicknessRange]),
      (this.iridescenceThicknessMap = e.iridescenceThicknessMap),
      (this.sheen = e.sheen),
      this.sheenColor.copy(e.sheenColor),
      (this.sheenColorMap = e.sheenColorMap),
      (this.sheenRoughness = e.sheenRoughness),
      (this.sheenRoughnessMap = e.sheenRoughnessMap),
      (this.transmission = e.transmission),
      (this.transmissionMap = e.transmissionMap),
      (this.thickness = e.thickness),
      (this.thicknessMap = e.thicknessMap),
      (this.attenuationDistance = e.attenuationDistance),
      this.attenuationColor.copy(e.attenuationColor),
      (this.specularIntensity = e.specularIntensity),
      (this.specularIntensityMap = e.specularIntensityMap),
      this.specularColor.copy(e.specularColor),
      (this.specularColorMap = e.specularColorMap),
      this
    );
  }
}
class Fm extends In {
  constructor(e) {
    (super(),
      (this.isMeshDepthMaterial = !0),
      (this.type = "MeshDepthMaterial"),
      (this.depthPacking = wp),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.wireframe = !1),
      (this.wireframeLinewidth = 1),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.depthPacking = e.depthPacking),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.wireframe = e.wireframe),
      (this.wireframeLinewidth = e.wireframeLinewidth),
      this
    );
  }
}
class Bm extends In {
  constructor(e) {
    (super(),
      (this.isMeshDistanceMaterial = !0),
      (this.type = "MeshDistanceMaterial"),
      (this.map = null),
      (this.alphaMap = null),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.map = e.map),
      (this.alphaMap = e.alphaMap),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      this
    );
  }
}
class vS extends In {
  constructor(e) {
    (super(),
      (this.isMeshMatcapMaterial = !0),
      (this.defines = { MATCAP: "" }),
      (this.type = "MeshMatcapMaterial"),
      (this.color = new Ie(16777215)),
      (this.matcap = null),
      (this.map = null),
      (this.bumpMap = null),
      (this.bumpScale = 1),
      (this.normalMap = null),
      (this.normalMapType = lc),
      (this.normalScale = new Re(1, 1)),
      (this.displacementMap = null),
      (this.displacementScale = 1),
      (this.displacementBias = 0),
      (this.alphaMap = null),
      (this.flatShading = !1),
      (this.fog = !0),
      this.setValues(e));
  }
  copy(e) {
    return (
      super.copy(e),
      (this.defines = { MATCAP: "" }),
      this.color.copy(e.color),
      (this.matcap = e.matcap),
      (this.map = e.map),
      (this.bumpMap = e.bumpMap),
      (this.bumpScale = e.bumpScale),
      (this.normalMap = e.normalMap),
      (this.normalMapType = e.normalMapType),
      this.normalScale.copy(e.normalScale),
      (this.displacementMap = e.displacementMap),
      (this.displacementScale = e.displacementScale),
      (this.displacementBias = e.displacementBias),
      (this.alphaMap = e.alphaMap),
      (this.flatShading = e.flatShading),
      (this.fog = e.fog),
      this
    );
  }
}
function fa(s, e) {
  return !s || s.constructor === e
    ? s
    : typeof e.BYTES_PER_ELEMENT == "number"
      ? new e(s)
      : Array.prototype.slice.call(s);
}
function km(s) {
  return ArrayBuffer.isView(s) && !(s instanceof DataView);
}
function zm(s) {
  function e(i, r) {
    return s[i] - s[r];
  }
  const t = s.length,
    n = new Array(t);
  for (let i = 0; i !== t; ++i) n[i] = i;
  return (n.sort(e), n);
}
function kh(s, e, t) {
  const n = s.length,
    i = new s.constructor(n);
  for (let r = 0, a = 0; a !== n; ++r) {
    const o = t[r] * e;
    for (let l = 0; l !== e; ++l) i[a++] = s[o + l];
  }
  return i;
}
function gd(s, e, t, n) {
  let i = 1,
    r = s[0];
  for (; r !== void 0 && r[n] === void 0;) r = s[i++];
  if (r === void 0) return;
  let a = r[n];
  if (a !== void 0)
    if (Array.isArray(a))
      do
        ((a = r[n]),
          a !== void 0 && (e.push(r.time), t.push(...a)),
          (r = s[i++]));
      while (r !== void 0);
    else if (a.toArray !== void 0)
      do
        ((a = r[n]),
          a !== void 0 && (e.push(r.time), a.toArray(t, t.length)),
          (r = s[i++]));
      while (r !== void 0);
    else
      do
        ((a = r[n]), a !== void 0 && (e.push(r.time), t.push(a)), (r = s[i++]));
      while (r !== void 0);
}
class zs {
  constructor(e, t, n, i) {
    ((this.parameterPositions = e),
      (this._cachedIndex = 0),
      (this.resultBuffer = i !== void 0 ? i : new t.constructor(n)),
      (this.sampleValues = t),
      (this.valueSize = n),
      (this.settings = null),
      (this.DefaultSettings_ = {}));
  }
  evaluate(e) {
    const t = this.parameterPositions;
    let n = this._cachedIndex,
      i = t[n],
      r = t[n - 1];
    n: {
      e: {
        let a;
        t: {
          i: if (!(e < i)) {
            for (let o = n + 2; ;) {
              if (i === void 0) {
                if (e < r) break i;
                return (
                  (n = t.length),
                  (this._cachedIndex = n),
                  this.copySampleValue_(n - 1)
                );
              }
              if (n === o) break;
              if (((r = i), (i = t[++n]), e < i)) break e;
            }
            a = t.length;
            break t;
          }
          if (!(e >= r)) {
            const o = t[1];
            e < o && ((n = 2), (r = o));
            for (let l = n - 2; ;) {
              if (r === void 0)
                return ((this._cachedIndex = 0), this.copySampleValue_(0));
              if (n === l) break;
              if (((i = r), (r = t[--n - 1]), e >= r)) break e;
            }
            ((a = n), (n = 0));
            break t;
          }
          break n;
        }
        for (; n < a;) {
          const o = (n + a) >>> 1;
          e < t[o] ? (a = o) : (n = o + 1);
        }
        if (((i = t[n]), (r = t[n - 1]), r === void 0))
          return ((this._cachedIndex = 0), this.copySampleValue_(0));
        if (i === void 0)
          return (
            (n = t.length),
            (this._cachedIndex = n),
            this.copySampleValue_(n - 1)
          );
      }
      ((this._cachedIndex = n), this.intervalChanged_(n, r, i));
    }
    return this.interpolate_(n, r, e, i);
  }
  getSettings_() {
    return this.settings || this.DefaultSettings_;
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      r = e * i;
    for (let a = 0; a !== i; ++a) t[a] = n[r + a];
    return t;
  }
  interpolate_() {
    throw new Error("call to abstract method");
  }
  intervalChanged_() {}
}
class Hm extends zs {
  constructor(e, t, n, i) {
    (super(e, t, n, i),
      (this._weightPrev = -0),
      (this._offsetPrev = -0),
      (this._weightNext = -0),
      (this._offsetNext = -0),
      (this.DefaultSettings_ = { endingStart: nh, endingEnd: nh }));
  }
  intervalChanged_(e, t, n) {
    const i = this.parameterPositions;
    let r = e - 2,
      a = e + 1,
      o = i[r],
      l = i[a];
    if (o === void 0)
      switch (this.getSettings_().endingStart) {
        case ih:
          ((r = e), (o = 2 * t - n));
          break;
        case rh:
          ((r = i.length - 2), (o = t + i[r] - i[r + 1]));
          break;
        default:
          ((r = e), (o = n));
      }
    if (l === void 0)
      switch (this.getSettings_().endingEnd) {
        case ih:
          ((a = e), (l = 2 * n - t));
          break;
        case rh:
          ((a = 1), (l = n + i[1] - i[0]));
          break;
        default:
          ((a = e - 1), (l = t));
      }
    const c = (n - t) * 0.5,
      h = this.valueSize;
    ((this._weightPrev = c / (t - o)),
      (this._weightNext = c / (l - n)),
      (this._offsetPrev = r * h),
      (this._offsetNext = a * h));
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      l = e * o,
      c = l - o,
      h = this._offsetPrev,
      u = this._offsetNext,
      d = this._weightPrev,
      f = this._weightNext,
      g = (n - t) / (i - t),
      _ = g * g,
      m = _ * g,
      p = -d * m + 2 * d * _ - d * g,
      S = (1 + d) * m + (-1.5 - 2 * d) * _ + (-0.5 + d) * g + 1,
      M = (-1 - f) * m + (1.5 + f) * _ + 0.5 * g,
      v = f * m - f * _;
    for (let b = 0; b !== o; ++b)
      r[b] = p * a[h + b] + S * a[c + b] + M * a[l + b] + v * a[u + b];
    return r;
  }
}
class Vm extends zs {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      l = e * o,
      c = l - o,
      h = (n - t) / (i - t),
      u = 1 - h;
    for (let d = 0; d !== o; ++d) r[d] = a[c + d] * u + a[l + d] * h;
    return r;
  }
}
class Gm extends zs {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e) {
    return this.copySampleValue_(e - 1);
  }
}
class Un {
  constructor(e, t, n, i) {
    if (e === void 0)
      throw new Error("THREE.KeyframeTrack: track name is undefined");
    if (t === void 0 || t.length === 0)
      throw new Error("THREE.KeyframeTrack: no keyframes in track named " + e);
    ((this.name = e),
      (this.times = fa(t, this.TimeBufferType)),
      (this.values = fa(n, this.ValueBufferType)),
      this.setInterpolation(i || this.DefaultInterpolation));
  }
  static toJSON(e) {
    const t = e.constructor;
    let n;
    if (t.toJSON !== this.toJSON) n = t.toJSON(e);
    else {
      n = {
        name: e.name,
        times: fa(e.times, Array),
        values: fa(e.values, Array),
      };
      const i = e.getInterpolation();
      i !== e.DefaultInterpolation && (n.interpolation = i);
    }
    return ((n.type = e.ValueTypeName), n);
  }
  InterpolantFactoryMethodDiscrete(e) {
    return new Gm(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Vm(this.times, this.values, this.getValueSize(), e);
  }
  InterpolantFactoryMethodSmooth(e) {
    return new Hm(this.times, this.values, this.getValueSize(), e);
  }
  setInterpolation(e) {
    let t;
    switch (e) {
      case Cs:
        t = this.InterpolantFactoryMethodDiscrete;
        break;
      case Ps:
        t = this.InterpolantFactoryMethodLinear;
        break;
      case Ja:
        t = this.InterpolantFactoryMethodSmooth;
        break;
    }
    if (t === void 0) {
      const n =
        "unsupported interpolation for " +
        this.ValueTypeName +
        " keyframe track named " +
        this.name;
      if (this.createInterpolant === void 0)
        if (e !== this.DefaultInterpolation)
          this.setInterpolation(this.DefaultInterpolation);
        else throw new Error(n);
      return (console.warn("THREE.KeyframeTrack:", n), this);
    }
    return ((this.createInterpolant = t), this);
  }
  getInterpolation() {
    switch (this.createInterpolant) {
      case this.InterpolantFactoryMethodDiscrete:
        return Cs;
      case this.InterpolantFactoryMethodLinear:
        return Ps;
      case this.InterpolantFactoryMethodSmooth:
        return Ja;
    }
  }
  getValueSize() {
    return this.values.length / this.times.length;
  }
  shift(e) {
    if (e !== 0) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] += e;
    }
    return this;
  }
  scale(e) {
    if (e !== 1) {
      const t = this.times;
      for (let n = 0, i = t.length; n !== i; ++n) t[n] *= e;
    }
    return this;
  }
  trim(e, t) {
    const n = this.times,
      i = n.length;
    let r = 0,
      a = i - 1;
    for (; r !== i && n[r] < e;) ++r;
    for (; a !== -1 && n[a] > t;) --a;
    if ((++a, r !== 0 || a !== i)) {
      r >= a && ((a = Math.max(a, 1)), (r = a - 1));
      const o = this.getValueSize();
      ((this.times = n.slice(r, a)),
        (this.values = this.values.slice(r * o, a * o)));
    }
    return this;
  }
  validate() {
    let e = !0;
    const t = this.getValueSize();
    t - Math.floor(t) !== 0 &&
      (console.error("THREE.KeyframeTrack: Invalid value size in track.", this),
      (e = !1));
    const n = this.times,
      i = this.values,
      r = n.length;
    r === 0 &&
      (console.error("THREE.KeyframeTrack: Track is empty.", this), (e = !1));
    let a = null;
    for (let o = 0; o !== r; o++) {
      const l = n[o];
      if (typeof l == "number" && isNaN(l)) {
        (console.error(
          "THREE.KeyframeTrack: Time is not a valid number.",
          this,
          o,
          l,
        ),
          (e = !1));
        break;
      }
      if (a !== null && a > l) {
        (console.error(
          "THREE.KeyframeTrack: Out of order keys.",
          this,
          o,
          l,
          a,
        ),
          (e = !1));
        break;
      }
      a = l;
    }
    if (i !== void 0 && km(i))
      for (let o = 0, l = i.length; o !== l; ++o) {
        const c = i[o];
        if (isNaN(c)) {
          (console.error(
            "THREE.KeyframeTrack: Value is not a valid number.",
            this,
            o,
            c,
          ),
            (e = !1));
          break;
        }
      }
    return e;
  }
  optimize() {
    const e = this.times.slice(),
      t = this.values.slice(),
      n = this.getValueSize(),
      i = this.getInterpolation() === Ja,
      r = e.length - 1;
    let a = 1;
    for (let o = 1; o < r; ++o) {
      let l = !1;
      const c = e[o],
        h = e[o + 1];
      if (c !== h && (o !== 1 || c !== e[0]))
        if (i) l = !0;
        else {
          const u = o * n,
            d = u - n,
            f = u + n;
          for (let g = 0; g !== n; ++g) {
            const _ = t[u + g];
            if (_ !== t[d + g] || _ !== t[f + g]) {
              l = !0;
              break;
            }
          }
        }
      if (l) {
        if (o !== a) {
          e[a] = e[o];
          const u = o * n,
            d = a * n;
          for (let f = 0; f !== n; ++f) t[d + f] = t[u + f];
        }
        ++a;
      }
    }
    if (r > 0) {
      e[a] = e[r];
      for (let o = r * n, l = a * n, c = 0; c !== n; ++c) t[l + c] = t[o + c];
      ++a;
    }
    return (
      a !== e.length
        ? ((this.times = e.slice(0, a)), (this.values = t.slice(0, a * n)))
        : ((this.times = e), (this.values = t)),
      this
    );
  }
  clone() {
    const e = this.times.slice(),
      t = this.values.slice(),
      n = this.constructor,
      i = new n(this.name, e, t);
    return ((i.createInterpolant = this.createInterpolant), i);
  }
}
Un.prototype.ValueTypeName = "";
Un.prototype.TimeBufferType = Float32Array;
Un.prototype.ValueBufferType = Float32Array;
Un.prototype.DefaultInterpolation = Ps;
class ts extends Un {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
ts.prototype.ValueTypeName = "bool";
ts.prototype.ValueBufferType = Array;
ts.prototype.DefaultInterpolation = Cs;
ts.prototype.InterpolantFactoryMethodLinear = void 0;
ts.prototype.InterpolantFactoryMethodSmooth = void 0;
class xd extends Un {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
}
xd.prototype.ValueTypeName = "color";
class Wr extends Un {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
}
Wr.prototype.ValueTypeName = "number";
class Wm extends zs {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      l = (n - t) / (i - t);
    let c = e * o;
    for (let h = c + o; c !== h; c += 4) Hn.slerpFlat(r, 0, a, c - o, a, c, l);
    return r;
  }
}
class Xr extends Un {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  InterpolantFactoryMethodLinear(e) {
    return new Wm(this.times, this.values, this.getValueSize(), e);
  }
}
Xr.prototype.ValueTypeName = "quaternion";
Xr.prototype.InterpolantFactoryMethodSmooth = void 0;
class ns extends Un {
  constructor(e, t, n) {
    super(e, t, n);
  }
}
ns.prototype.ValueTypeName = "string";
ns.prototype.ValueBufferType = Array;
ns.prototype.DefaultInterpolation = Cs;
ns.prototype.InterpolantFactoryMethodLinear = void 0;
ns.prototype.InterpolantFactoryMethodSmooth = void 0;
class Yr extends Un {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
}
Yr.prototype.ValueTypeName = "vector";
class Xm {
  constructor(e = "", t = -1, n = [], i = bp) {
    ((this.name = e),
      (this.tracks = n),
      (this.duration = t),
      (this.blendMode = i),
      (this.uuid = Ln()),
      this.duration < 0 && this.resetDuration());
  }
  static parse(e) {
    const t = [],
      n = e.tracks,
      i = 1 / (e.fps || 1);
    for (let a = 0, o = n.length; a !== o; ++a) t.push(qm(n[a]).scale(i));
    const r = new this(e.name, e.duration, t, e.blendMode);
    return ((r.uuid = e.uuid), r);
  }
  static toJSON(e) {
    const t = [],
      n = e.tracks,
      i = {
        name: e.name,
        duration: e.duration,
        tracks: t,
        uuid: e.uuid,
        blendMode: e.blendMode,
      };
    for (let r = 0, a = n.length; r !== a; ++r) t.push(Un.toJSON(n[r]));
    return i;
  }
  static CreateFromMorphTargetSequence(e, t, n, i) {
    const r = t.length,
      a = [];
    for (let o = 0; o < r; o++) {
      let l = [],
        c = [];
      (l.push((o + r - 1) % r, o, (o + 1) % r), c.push(0, 1, 0));
      const h = zm(l);
      ((l = kh(l, 1, h)),
        (c = kh(c, 1, h)),
        !i && l[0] === 0 && (l.push(r), c.push(c[0])),
        a.push(
          new Wr(".morphTargetInfluences[" + t[o].name + "]", l, c).scale(
            1 / n,
          ),
        ));
    }
    return new this(e, -1, a);
  }
  static findByName(e, t) {
    let n = e;
    if (!Array.isArray(e)) {
      const i = e;
      n = (i.geometry && i.geometry.animations) || i.animations;
    }
    for (let i = 0; i < n.length; i++) if (n[i].name === t) return n[i];
    return null;
  }
  static CreateClipsFromMorphTargetSequences(e, t, n) {
    const i = {},
      r = /^([\w-]*?)([\d]+)$/;
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o],
        h = c.name.match(r);
      if (h && h.length > 1) {
        const u = h[1];
        let d = i[u];
        (d || (i[u] = d = []), d.push(c));
      }
    }
    const a = [];
    for (const o in i)
      a.push(this.CreateFromMorphTargetSequence(o, i[o], t, n));
    return a;
  }
  static parseAnimation(e, t) {
    if (
      (console.warn(
        "THREE.AnimationClip: parseAnimation() is deprecated and will be removed with r185",
      ),
      !e)
    )
      return (
        console.error("THREE.AnimationClip: No animation in JSONLoader data."),
        null
      );
    const n = function (u, d, f, g, _) {
        if (f.length !== 0) {
          const m = [],
            p = [];
          (gd(f, m, p, g), m.length !== 0 && _.push(new u(d, m, p)));
        }
      },
      i = [],
      r = e.name || "default",
      a = e.fps || 30,
      o = e.blendMode;
    let l = e.length || -1;
    const c = e.hierarchy || [];
    for (let u = 0; u < c.length; u++) {
      const d = c[u].keys;
      if (!(!d || d.length === 0))
        if (d[0].morphTargets) {
          const f = {};
          let g;
          for (g = 0; g < d.length; g++)
            if (d[g].morphTargets)
              for (let _ = 0; _ < d[g].morphTargets.length; _++)
                f[d[g].morphTargets[_]] = -1;
          for (const _ in f) {
            const m = [],
              p = [];
            for (let S = 0; S !== d[g].morphTargets.length; ++S) {
              const M = d[g];
              (m.push(M.time), p.push(M.morphTarget === _ ? 1 : 0));
            }
            i.push(new Wr(".morphTargetInfluence[" + _ + "]", m, p));
          }
          l = f.length * a;
        } else {
          const f = ".bones[" + t[u].name + "]";
          (n(Yr, f + ".position", d, "pos", i),
            n(Xr, f + ".quaternion", d, "rot", i),
            n(Yr, f + ".scale", d, "scl", i));
        }
    }
    return i.length === 0 ? null : new this(r, l, i, o);
  }
  resetDuration() {
    const e = this.tracks;
    let t = 0;
    for (let n = 0, i = e.length; n !== i; ++n) {
      const r = this.tracks[n];
      t = Math.max(t, r.times[r.times.length - 1]);
    }
    return ((this.duration = t), this);
  }
  trim() {
    for (let e = 0; e < this.tracks.length; e++)
      this.tracks[e].trim(0, this.duration);
    return this;
  }
  validate() {
    let e = !0;
    for (let t = 0; t < this.tracks.length; t++)
      e = e && this.tracks[t].validate();
    return e;
  }
  optimize() {
    for (let e = 0; e < this.tracks.length; e++) this.tracks[e].optimize();
    return this;
  }
  clone() {
    const e = [];
    for (let t = 0; t < this.tracks.length; t++) e.push(this.tracks[t].clone());
    return new this.constructor(this.name, this.duration, e, this.blendMode);
  }
  toJSON() {
    return this.constructor.toJSON(this);
  }
}
function Ym(s) {
  switch (s.toLowerCase()) {
    case "scalar":
    case "double":
    case "float":
    case "number":
    case "integer":
      return Wr;
    case "vector":
    case "vector2":
    case "vector3":
    case "vector4":
      return Yr;
    case "color":
      return xd;
    case "quaternion":
      return Xr;
    case "bool":
    case "boolean":
      return ts;
    case "string":
      return ns;
  }
  throw new Error("THREE.KeyframeTrack: Unsupported typeName: " + s);
}
function qm(s) {
  if (s.type === void 0)
    throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");
  const e = Ym(s.type);
  if (s.times === void 0) {
    const t = [],
      n = [];
    (gd(s.keys, t, n, "value"), (s.times = t), (s.values = n));
  }
  return e.parse !== void 0
    ? e.parse(s)
    : new e(s.name, s.times, s.values, s.interpolation);
}
const si = {
  enabled: !1,
  files: {},
  add: function (s, e) {
    this.enabled !== !1 && (this.files[s] = e);
  },
  get: function (s) {
    if (this.enabled !== !1) return this.files[s];
  },
  remove: function (s) {
    delete this.files[s];
  },
  clear: function () {
    this.files = {};
  },
};
class vd {
  constructor(e, t, n) {
    const i = this;
    let r = !1,
      a = 0,
      o = 0,
      l;
    const c = [];
    ((this.onStart = void 0),
      (this.onLoad = e),
      (this.onProgress = t),
      (this.onError = n),
      (this.abortController = new AbortController()),
      (this.itemStart = function (h) {
        (o++, r === !1 && i.onStart !== void 0 && i.onStart(h, a, o), (r = !0));
      }),
      (this.itemEnd = function (h) {
        (a++,
          i.onProgress !== void 0 && i.onProgress(h, a, o),
          a === o && ((r = !1), i.onLoad !== void 0 && i.onLoad()));
      }),
      (this.itemError = function (h) {
        i.onError !== void 0 && i.onError(h);
      }),
      (this.resolveURL = function (h) {
        return l ? l(h) : h;
      }),
      (this.setURLModifier = function (h) {
        return ((l = h), this);
      }),
      (this.addHandler = function (h, u) {
        return (c.push(h, u), this);
      }),
      (this.removeHandler = function (h) {
        const u = c.indexOf(h);
        return (u !== -1 && c.splice(u, 2), this);
      }),
      (this.getHandler = function (h) {
        for (let u = 0, d = c.length; u < d; u += 2) {
          const f = c[u],
            g = c[u + 1];
          if ((f.global && (f.lastIndex = 0), f.test(h))) return g;
        }
        return null;
      }),
      (this.abort = function () {
        return (
          this.abortController.abort(),
          (this.abortController = new AbortController()),
          this
        );
      }));
  }
}
const jm = new vd();
class Ii {
  constructor(e) {
    ((this.manager = e !== void 0 ? e : jm),
      (this.crossOrigin = "anonymous"),
      (this.withCredentials = !1),
      (this.path = ""),
      (this.resourcePath = ""),
      (this.requestHeader = {}));
  }
  load() {}
  loadAsync(e, t) {
    const n = this;
    return new Promise(function (i, r) {
      n.load(e, i, t, r);
    });
  }
  parse() {}
  setCrossOrigin(e) {
    return ((this.crossOrigin = e), this);
  }
  setWithCredentials(e) {
    return ((this.withCredentials = e), this);
  }
  setPath(e) {
    return ((this.path = e), this);
  }
  setResourcePath(e) {
    return ((this.resourcePath = e), this);
  }
  setRequestHeader(e) {
    return ((this.requestHeader = e), this);
  }
  abort() {
    return this;
  }
}
Ii.DEFAULT_MATERIAL_NAME = "__DEFAULT";
const Qn = {};
class Km extends Error {
  constructor(e, t) {
    (super(e), (this.response = t));
  }
}
class Ji extends Ii {
  constructor(e) {
    (super(e),
      (this.mimeType = ""),
      (this.responseType = ""),
      (this._abortController = new AbortController()));
  }
  load(e, t, n, i) {
    (e === void 0 && (e = ""),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e)));
    const r = si.get(`file:${e}`);
    if (r !== void 0)
      return (
        this.manager.itemStart(e),
        setTimeout(() => {
          (t && t(r), this.manager.itemEnd(e));
        }, 0),
        r
      );
    if (Qn[e] !== void 0) {
      Qn[e].push({ onLoad: t, onProgress: n, onError: i });
      return;
    }
    ((Qn[e] = []), Qn[e].push({ onLoad: t, onProgress: n, onError: i }));
    const a = new Request(e, {
        headers: new Headers(this.requestHeader),
        credentials: this.withCredentials ? "include" : "same-origin",
        signal:
          typeof AbortSignal.any == "function"
            ? AbortSignal.any([
                this._abortController.signal,
                this.manager.abortController.signal,
              ])
            : this._abortController.signal,
      }),
      o = this.mimeType,
      l = this.responseType;
    (fetch(a)
      .then((c) => {
        if (c.status === 200 || c.status === 0) {
          if (
            (c.status === 0 &&
              console.warn("THREE.FileLoader: HTTP Status 0 received."),
            typeof ReadableStream > "u" ||
              c.body === void 0 ||
              c.body.getReader === void 0)
          )
            return c;
          const h = Qn[e],
            u = c.body.getReader(),
            d = c.headers.get("X-File-Size") || c.headers.get("Content-Length"),
            f = d ? parseInt(d) : 0,
            g = f !== 0;
          let _ = 0;
          const m = new ReadableStream({
            start(p) {
              S();
              function S() {
                u.read().then(
                  ({ done: M, value: v }) => {
                    if (M) p.close();
                    else {
                      _ += v.byteLength;
                      const b = new ProgressEvent("progress", {
                        lengthComputable: g,
                        loaded: _,
                        total: f,
                      });
                      for (let A = 0, w = h.length; A < w; A++) {
                        const C = h[A];
                        C.onProgress && C.onProgress(b);
                      }
                      (p.enqueue(v), S());
                    }
                  },
                  (M) => {
                    p.error(M);
                  },
                );
              }
            },
          });
          return new Response(m);
        } else
          throw new Km(
            `fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,
            c,
          );
      })
      .then((c) => {
        switch (l) {
          case "arraybuffer":
            return c.arrayBuffer();
          case "blob":
            return c.blob();
          case "document":
            return c.text().then((h) => new DOMParser().parseFromString(h, o));
          case "json":
            return c.json();
          default:
            if (o === "") return c.text();
            {
              const u = /charset="?([^;"\s]*)"?/i.exec(o),
                d = u && u[1] ? u[1].toLowerCase() : void 0,
                f = new TextDecoder(d);
              return c.arrayBuffer().then((g) => f.decode(g));
            }
        }
      })
      .then((c) => {
        si.add(`file:${e}`, c);
        const h = Qn[e];
        delete Qn[e];
        for (let u = 0, d = h.length; u < d; u++) {
          const f = h[u];
          f.onLoad && f.onLoad(c);
        }
      })
      .catch((c) => {
        const h = Qn[e];
        if (h === void 0) throw (this.manager.itemError(e), c);
        delete Qn[e];
        for (let u = 0, d = h.length; u < d; u++) {
          const f = h[u];
          f.onError && f.onError(c);
        }
        this.manager.itemError(e);
      })
      .finally(() => {
        this.manager.itemEnd(e);
      }),
      this.manager.itemStart(e));
  }
  setResponseType(e) {
    return ((this.responseType = e), this);
  }
  setMimeType(e) {
    return ((this.mimeType = e), this);
  }
  abort() {
    return (
      this._abortController.abort(),
      (this._abortController = new AbortController()),
      this
    );
  }
}
const Mr = new WeakMap();
class Zm extends Ii {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    (this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e)));
    const r = this,
      a = si.get(`image:${e}`);
    if (a !== void 0) {
      if (a.complete === !0)
        (r.manager.itemStart(e),
          setTimeout(function () {
            (t && t(a), r.manager.itemEnd(e));
          }, 0));
      else {
        let u = Mr.get(a);
        (u === void 0 && ((u = []), Mr.set(a, u)),
          u.push({ onLoad: t, onError: i }));
      }
      return a;
    }
    const o = Ds("img");
    function l() {
      (h(), t && t(this));
      const u = Mr.get(this) || [];
      for (let d = 0; d < u.length; d++) {
        const f = u[d];
        f.onLoad && f.onLoad(this);
      }
      (Mr.delete(this), r.manager.itemEnd(e));
    }
    function c(u) {
      (h(), i && i(u), si.remove(`image:${e}`));
      const d = Mr.get(this) || [];
      for (let f = 0; f < d.length; f++) {
        const g = d[f];
        g.onError && g.onError(u);
      }
      (Mr.delete(this), r.manager.itemError(e), r.manager.itemEnd(e));
    }
    function h() {
      (o.removeEventListener("load", l, !1),
        o.removeEventListener("error", c, !1));
    }
    return (
      o.addEventListener("load", l, !1),
      o.addEventListener("error", c, !1),
      e.slice(0, 5) !== "data:" &&
        this.crossOrigin !== void 0 &&
        (o.crossOrigin = this.crossOrigin),
      si.add(`image:${e}`, o),
      r.manager.itemStart(e),
      (o.src = e),
      o
    );
  }
}
class $m extends Ii {
  constructor(e) {
    super(e);
  }
  load(e, t, n, i) {
    const r = new ut(),
      a = new Zm(this.manager);
    return (
      a.setCrossOrigin(this.crossOrigin),
      a.setPath(this.path),
      a.load(
        e,
        function (o) {
          ((r.image = o), (r.needsUpdate = !0), t !== void 0 && t(r));
        },
        n,
        i,
      ),
      r
    );
  }
}
class xc extends dt {
  constructor(e, t = 1) {
    (super(),
      (this.isLight = !0),
      (this.type = "Light"),
      (this.color = new Ie(e)),
      (this.intensity = t));
  }
  dispose() {}
  copy(e, t) {
    return (
      super.copy(e, t),
      this.color.copy(e.color),
      (this.intensity = e.intensity),
      this
    );
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.color = this.color.getHex()),
      (t.object.intensity = this.intensity),
      this.groundColor !== void 0 &&
        (t.object.groundColor = this.groundColor.getHex()),
      this.distance !== void 0 && (t.object.distance = this.distance),
      this.angle !== void 0 && (t.object.angle = this.angle),
      this.decay !== void 0 && (t.object.decay = this.decay),
      this.penumbra !== void 0 && (t.object.penumbra = this.penumbra),
      this.shadow !== void 0 && (t.object.shadow = this.shadow.toJSON()),
      this.target !== void 0 && (t.object.target = this.target.uuid),
      t
    );
  }
}
const bo = new Oe(),
  zh = new L(),
  Hh = new L();
class vc {
  constructor(e) {
    ((this.camera = e),
      (this.intensity = 1),
      (this.bias = 0),
      (this.normalBias = 0),
      (this.radius = 1),
      (this.blurSamples = 8),
      (this.mapSize = new Re(512, 512)),
      (this.mapType = fn),
      (this.map = null),
      (this.mapPass = null),
      (this.matrix = new Oe()),
      (this.autoUpdate = !0),
      (this.needsUpdate = !1),
      (this._frustum = new mc()),
      (this._frameExtents = new Re(1, 1)),
      (this._viewportCount = 1),
      (this._viewports = [new Ke(0, 0, 1, 1)]));
  }
  getViewportCount() {
    return this._viewportCount;
  }
  getFrustum() {
    return this._frustum;
  }
  updateMatrices(e) {
    const t = this.camera,
      n = this.matrix;
    (zh.setFromMatrixPosition(e.matrixWorld),
      t.position.copy(zh),
      Hh.setFromMatrixPosition(e.target.matrixWorld),
      t.lookAt(Hh),
      t.updateMatrixWorld(),
      bo.multiplyMatrices(t.projectionMatrix, t.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(
        bo,
        t.coordinateSystem,
        t.reversedDepth,
      ),
      t.reversedDepth
        ? n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 1, 0, 0, 0, 0, 1)
        : n.set(0.5, 0, 0, 0.5, 0, 0.5, 0, 0.5, 0, 0, 0.5, 0.5, 0, 0, 0, 1),
      n.multiply(bo));
  }
  getViewport(e) {
    return this._viewports[e];
  }
  getFrameExtents() {
    return this._frameExtents;
  }
  dispose() {
    (this.map && this.map.dispose(), this.mapPass && this.mapPass.dispose());
  }
  copy(e) {
    return (
      (this.camera = e.camera.clone()),
      (this.intensity = e.intensity),
      (this.bias = e.bias),
      (this.radius = e.radius),
      (this.autoUpdate = e.autoUpdate),
      (this.needsUpdate = e.needsUpdate),
      (this.normalBias = e.normalBias),
      (this.blurSamples = e.blurSamples),
      this.mapSize.copy(e.mapSize),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
  toJSON() {
    const e = {};
    return (
      this.intensity !== 1 && (e.intensity = this.intensity),
      this.bias !== 0 && (e.bias = this.bias),
      this.normalBias !== 0 && (e.normalBias = this.normalBias),
      this.radius !== 1 && (e.radius = this.radius),
      (this.mapSize.x !== 512 || this.mapSize.y !== 512) &&
        (e.mapSize = this.mapSize.toArray()),
      (e.camera = this.camera.toJSON(!1).object),
      delete e.camera.matrix,
      e
    );
  }
}
class Jm extends vc {
  constructor() {
    (super(new Zt(50, 1, 0.5, 500)),
      (this.isSpotLightShadow = !0),
      (this.focus = 1),
      (this.aspect = 1));
  }
  updateMatrices(e) {
    const t = this.camera,
      n = Vr * 2 * e.angle * this.focus,
      i = (this.mapSize.width / this.mapSize.height) * this.aspect,
      r = e.distance || t.far;
    ((n !== t.fov || i !== t.aspect || r !== t.far) &&
      ((t.fov = n), (t.aspect = i), (t.far = r), t.updateProjectionMatrix()),
      super.updateMatrices(e));
  }
  copy(e) {
    return (super.copy(e), (this.focus = e.focus), this);
  }
}
class Qm extends xc {
  constructor(e, t, n = 0, i = Math.PI / 3, r = 0, a = 2) {
    (super(e, t),
      (this.isSpotLight = !0),
      (this.type = "SpotLight"),
      this.position.copy(dt.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new dt()),
      (this.distance = n),
      (this.angle = i),
      (this.penumbra = r),
      (this.decay = a),
      (this.map = null),
      (this.shadow = new Jm()));
  }
  get power() {
    return this.intensity * Math.PI;
  }
  set power(e) {
    this.intensity = e / Math.PI;
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.angle = e.angle),
      (this.penumbra = e.penumbra),
      (this.decay = e.decay),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
const Vh = new Oe(),
  ds = new L(),
  Ao = new L();
class e_ extends vc {
  constructor() {
    (super(new Zt(90, 1, 0.5, 500)),
      (this.isPointLightShadow = !0),
      (this._frameExtents = new Re(4, 2)),
      (this._viewportCount = 6),
      (this._viewports = [
        new Ke(2, 1, 1, 1),
        new Ke(0, 1, 1, 1),
        new Ke(3, 1, 1, 1),
        new Ke(1, 1, 1, 1),
        new Ke(3, 0, 1, 1),
        new Ke(1, 0, 1, 1),
      ]),
      (this._cubeDirections = [
        new L(1, 0, 0),
        new L(-1, 0, 0),
        new L(0, 0, 1),
        new L(0, 0, -1),
        new L(0, 1, 0),
        new L(0, -1, 0),
      ]),
      (this._cubeUps = [
        new L(0, 1, 0),
        new L(0, 1, 0),
        new L(0, 1, 0),
        new L(0, 1, 0),
        new L(0, 0, 1),
        new L(0, 0, -1),
      ]));
  }
  updateMatrices(e, t = 0) {
    const n = this.camera,
      i = this.matrix,
      r = e.distance || n.far;
    (r !== n.far && ((n.far = r), n.updateProjectionMatrix()),
      ds.setFromMatrixPosition(e.matrixWorld),
      n.position.copy(ds),
      Ao.copy(n.position),
      Ao.add(this._cubeDirections[t]),
      n.up.copy(this._cubeUps[t]),
      n.lookAt(Ao),
      n.updateMatrixWorld(),
      i.makeTranslation(-ds.x, -ds.y, -ds.z),
      Vh.multiplyMatrices(n.projectionMatrix, n.matrixWorldInverse),
      this._frustum.setFromProjectionMatrix(
        Vh,
        n.coordinateSystem,
        n.reversedDepth,
      ));
  }
}
class t_ extends xc {
  constructor(e, t, n = 0, i = 2) {
    (super(e, t),
      (this.isPointLight = !0),
      (this.type = "PointLight"),
      (this.distance = n),
      (this.decay = i),
      (this.shadow = new e_()));
  }
  get power() {
    return this.intensity * 4 * Math.PI;
  }
  set power(e) {
    this.intensity = e / (4 * Math.PI);
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.distance = e.distance),
      (this.decay = e.decay),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class Xa extends hd {
  constructor(e = -1, t = 1, n = 1, i = -1, r = 0.1, a = 2e3) {
    (super(),
      (this.isOrthographicCamera = !0),
      (this.type = "OrthographicCamera"),
      (this.zoom = 1),
      (this.view = null),
      (this.left = e),
      (this.right = t),
      (this.top = n),
      (this.bottom = i),
      (this.near = r),
      (this.far = a),
      this.updateProjectionMatrix());
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.left = e.left),
      (this.right = e.right),
      (this.top = e.top),
      (this.bottom = e.bottom),
      (this.near = e.near),
      (this.far = e.far),
      (this.zoom = e.zoom),
      (this.view = e.view === null ? null : Object.assign({}, e.view)),
      this
    );
  }
  setViewOffset(e, t, n, i, r, a) {
    (this.view === null &&
      (this.view = {
        enabled: !0,
        fullWidth: 1,
        fullHeight: 1,
        offsetX: 0,
        offsetY: 0,
        width: 1,
        height: 1,
      }),
      (this.view.enabled = !0),
      (this.view.fullWidth = e),
      (this.view.fullHeight = t),
      (this.view.offsetX = n),
      (this.view.offsetY = i),
      (this.view.width = r),
      (this.view.height = a),
      this.updateProjectionMatrix());
  }
  clearViewOffset() {
    (this.view !== null && (this.view.enabled = !1),
      this.updateProjectionMatrix());
  }
  updateProjectionMatrix() {
    const e = (this.right - this.left) / (2 * this.zoom),
      t = (this.top - this.bottom) / (2 * this.zoom),
      n = (this.right + this.left) / 2,
      i = (this.top + this.bottom) / 2;
    let r = n - e,
      a = n + e,
      o = i + t,
      l = i - t;
    if (this.view !== null && this.view.enabled) {
      const c = (this.right - this.left) / this.view.fullWidth / this.zoom,
        h = (this.top - this.bottom) / this.view.fullHeight / this.zoom;
      ((r += c * this.view.offsetX),
        (a = r + c * this.view.width),
        (o -= h * this.view.offsetY),
        (l = o - h * this.view.height));
    }
    (this.projectionMatrix.makeOrthographic(
      r,
      a,
      o,
      l,
      this.near,
      this.far,
      this.coordinateSystem,
      this.reversedDepth,
    ),
      this.projectionMatrixInverse.copy(this.projectionMatrix).invert());
  }
  toJSON(e) {
    const t = super.toJSON(e);
    return (
      (t.object.zoom = this.zoom),
      (t.object.left = this.left),
      (t.object.right = this.right),
      (t.object.top = this.top),
      (t.object.bottom = this.bottom),
      (t.object.near = this.near),
      (t.object.far = this.far),
      this.view !== null && (t.object.view = Object.assign({}, this.view)),
      t
    );
  }
}
class n_ extends vc {
  constructor() {
    (super(new Xa(-5, 5, 5, -5, 0.5, 500)),
      (this.isDirectionalLightShadow = !0));
  }
}
class i_ extends xc {
  constructor(e, t) {
    (super(e, t),
      (this.isDirectionalLight = !0),
      (this.type = "DirectionalLight"),
      this.position.copy(dt.DEFAULT_UP),
      this.updateMatrix(),
      (this.target = new dt()),
      (this.shadow = new n_()));
  }
  dispose() {
    this.shadow.dispose();
  }
  copy(e) {
    return (
      super.copy(e),
      (this.target = e.target.clone()),
      (this.shadow = e.shadow.clone()),
      this
    );
  }
}
class Ms {
  static extractUrlBase(e) {
    const t = e.lastIndexOf("/");
    return t === -1 ? "./" : e.slice(0, t + 1);
  }
  static resolveURL(e, t) {
    return typeof e != "string" || e === ""
      ? ""
      : (/^https?:\/\//i.test(t) &&
          /^\//.test(e) &&
          (t = t.replace(/(^https?:\/\/[^\/]+).*/i, "$1")),
        /^(https?:)?\/\//i.test(e) ||
        /^data:.*,.*$/i.test(e) ||
        /^blob:.*$/i.test(e)
          ? e
          : t + e);
  }
}
const wo = new WeakMap();
class r_ extends Ii {
  constructor(e) {
    (super(e),
      (this.isImageBitmapLoader = !0),
      typeof createImageBitmap > "u" &&
        console.warn(
          "THREE.ImageBitmapLoader: createImageBitmap() not supported.",
        ),
      typeof fetch > "u" &&
        console.warn("THREE.ImageBitmapLoader: fetch() not supported."),
      (this.options = { premultiplyAlpha: "none" }),
      (this._abortController = new AbortController()));
  }
  setOptions(e) {
    return ((this.options = e), this);
  }
  load(e, t, n, i) {
    (e === void 0 && (e = ""),
      this.path !== void 0 && (e = this.path + e),
      (e = this.manager.resolveURL(e)));
    const r = this,
      a = si.get(`image-bitmap:${e}`);
    if (a !== void 0) {
      if ((r.manager.itemStart(e), a.then)) {
        a.then((c) => {
          if (wo.has(a) === !0)
            (i && i(wo.get(a)), r.manager.itemError(e), r.manager.itemEnd(e));
          else return (t && t(c), r.manager.itemEnd(e), c);
        });
        return;
      }
      return (
        setTimeout(function () {
          (t && t(a), r.manager.itemEnd(e));
        }, 0),
        a
      );
    }
    const o = {};
    ((o.credentials =
      this.crossOrigin === "anonymous" ? "same-origin" : "include"),
      (o.headers = this.requestHeader),
      (o.signal =
        typeof AbortSignal.any == "function"
          ? AbortSignal.any([
              this._abortController.signal,
              this.manager.abortController.signal,
            ])
          : this._abortController.signal));
    const l = fetch(e, o)
      .then(function (c) {
        return c.blob();
      })
      .then(function (c) {
        return createImageBitmap(
          c,
          Object.assign(r.options, { colorSpaceConversion: "none" }),
        );
      })
      .then(function (c) {
        return (
          si.add(`image-bitmap:${e}`, c),
          t && t(c),
          r.manager.itemEnd(e),
          c
        );
      })
      .catch(function (c) {
        (i && i(c),
          wo.set(l, c),
          si.remove(`image-bitmap:${e}`),
          r.manager.itemError(e),
          r.manager.itemEnd(e));
      });
    (si.add(`image-bitmap:${e}`, l), r.manager.itemStart(e));
  }
  abort() {
    return (
      this._abortController.abort(),
      (this._abortController = new AbortController()),
      this
    );
  }
}
class s_ extends Zt {
  constructor(e = []) {
    (super(),
      (this.isArrayCamera = !0),
      (this.isMultiViewCamera = !1),
      (this.cameras = e));
  }
}
class yS {
  constructor(e = !0) {
    ((this.autoStart = e),
      (this.startTime = 0),
      (this.oldTime = 0),
      (this.elapsedTime = 0),
      (this.running = !1));
  }
  start() {
    ((this.startTime = performance.now()),
      (this.oldTime = this.startTime),
      (this.elapsedTime = 0),
      (this.running = !0));
  }
  stop() {
    (this.getElapsedTime(), (this.running = !1), (this.autoStart = !1));
  }
  getElapsedTime() {
    return (this.getDelta(), this.elapsedTime);
  }
  getDelta() {
    let e = 0;
    if (this.autoStart && !this.running) return (this.start(), 0);
    if (this.running) {
      const t = performance.now();
      ((e = (t - this.oldTime) / 1e3),
        (this.oldTime = t),
        (this.elapsedTime += e));
    }
    return e;
  }
}
const yc = "\\[\\]\\.:\\/",
  a_ = new RegExp("[" + yc + "]", "g"),
  Mc = "[^" + yc + "]",
  o_ = "[^" + yc.replace("\\.", "") + "]",
  l_ = /((?:WC+[\/:])*)/.source.replace("WC", Mc),
  c_ = /(WCOD+)?/.source.replace("WCOD", o_),
  h_ = /(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC", Mc),
  u_ = /\.(WC+)(?:\[(.+)\])?/.source.replace("WC", Mc),
  d_ = new RegExp("^" + l_ + c_ + h_ + u_ + "$"),
  f_ = ["material", "materials", "bones", "map"];
class p_ {
  constructor(e, t, n) {
    const i = n || Je.parseTrackName(t);
    ((this._targetGroup = e), (this._bindings = e.subscribe_(t, i)));
  }
  getValue(e, t) {
    this.bind();
    const n = this._targetGroup.nCachedObjects_,
      i = this._bindings[n];
    i !== void 0 && i.getValue(e, t);
  }
  setValue(e, t) {
    const n = this._bindings;
    for (let i = this._targetGroup.nCachedObjects_, r = n.length; i !== r; ++i)
      n[i].setValue(e, t);
  }
  bind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].bind();
  }
  unbind() {
    const e = this._bindings;
    for (let t = this._targetGroup.nCachedObjects_, n = e.length; t !== n; ++t)
      e[t].unbind();
  }
}
class Je {
  constructor(e, t, n) {
    ((this.path = t),
      (this.parsedPath = n || Je.parseTrackName(t)),
      (this.node = Je.findNode(e, this.parsedPath.nodeName)),
      (this.rootNode = e),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound));
  }
  static create(e, t, n) {
    return e && e.isAnimationObjectGroup
      ? new Je.Composite(e, t, n)
      : new Je(e, t, n);
  }
  static sanitizeNodeName(e) {
    return e.replace(/\s/g, "_").replace(a_, "");
  }
  static parseTrackName(e) {
    const t = d_.exec(e);
    if (t === null)
      throw new Error("PropertyBinding: Cannot parse trackName: " + e);
    const n = {
        nodeName: t[2],
        objectName: t[3],
        objectIndex: t[4],
        propertyName: t[5],
        propertyIndex: t[6],
      },
      i = n.nodeName && n.nodeName.lastIndexOf(".");
    if (i !== void 0 && i !== -1) {
      const r = n.nodeName.substring(i + 1);
      f_.indexOf(r) !== -1 &&
        ((n.nodeName = n.nodeName.substring(0, i)), (n.objectName = r));
    }
    if (n.propertyName === null || n.propertyName.length === 0)
      throw new Error(
        "PropertyBinding: can not parse propertyName from trackName: " + e,
      );
    return n;
  }
  static findNode(e, t) {
    if (
      t === void 0 ||
      t === "" ||
      t === "." ||
      t === -1 ||
      t === e.name ||
      t === e.uuid
    )
      return e;
    if (e.skeleton) {
      const n = e.skeleton.getBoneByName(t);
      if (n !== void 0) return n;
    }
    if (e.children) {
      const n = function (r) {
          for (let a = 0; a < r.length; a++) {
            const o = r[a];
            if (o.name === t || o.uuid === t) return o;
            const l = n(o.children);
            if (l) return l;
          }
          return null;
        },
        i = n(e.children);
      if (i) return i;
    }
    return null;
  }
  _getValue_unavailable() {}
  _setValue_unavailable() {}
  _getValue_direct(e, t) {
    e[t] = this.targetObject[this.propertyName];
  }
  _getValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) e[t++] = n[i];
  }
  _getValue_arrayElement(e, t) {
    e[t] = this.resolvedProperty[this.propertyIndex];
  }
  _getValue_toArray(e, t) {
    this.resolvedProperty.toArray(e, t);
  }
  _setValue_direct(e, t) {
    this.targetObject[this.propertyName] = e[t];
  }
  _setValue_direct_setNeedsUpdate(e, t) {
    ((this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.needsUpdate = !0));
  }
  _setValue_direct_setMatrixWorldNeedsUpdate(e, t) {
    ((this.targetObject[this.propertyName] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0));
  }
  _setValue_array(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
  }
  _setValue_array_setNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    this.targetObject.needsUpdate = !0;
  }
  _setValue_array_setMatrixWorldNeedsUpdate(e, t) {
    const n = this.resolvedProperty;
    for (let i = 0, r = n.length; i !== r; ++i) n[i] = e[t++];
    this.targetObject.matrixWorldNeedsUpdate = !0;
  }
  _setValue_arrayElement(e, t) {
    this.resolvedProperty[this.propertyIndex] = e[t];
  }
  _setValue_arrayElement_setNeedsUpdate(e, t) {
    ((this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.needsUpdate = !0));
  }
  _setValue_arrayElement_setMatrixWorldNeedsUpdate(e, t) {
    ((this.resolvedProperty[this.propertyIndex] = e[t]),
      (this.targetObject.matrixWorldNeedsUpdate = !0));
  }
  _setValue_fromArray(e, t) {
    this.resolvedProperty.fromArray(e, t);
  }
  _setValue_fromArray_setNeedsUpdate(e, t) {
    (this.resolvedProperty.fromArray(e, t),
      (this.targetObject.needsUpdate = !0));
  }
  _setValue_fromArray_setMatrixWorldNeedsUpdate(e, t) {
    (this.resolvedProperty.fromArray(e, t),
      (this.targetObject.matrixWorldNeedsUpdate = !0));
  }
  _getValue_unbound(e, t) {
    (this.bind(), this.getValue(e, t));
  }
  _setValue_unbound(e, t) {
    (this.bind(), this.setValue(e, t));
  }
  bind() {
    let e = this.node;
    const t = this.parsedPath,
      n = t.objectName,
      i = t.propertyName;
    let r = t.propertyIndex;
    if (
      (e || ((e = Je.findNode(this.rootNode, t.nodeName)), (this.node = e)),
      (this.getValue = this._getValue_unavailable),
      (this.setValue = this._setValue_unavailable),
      !e)
    ) {
      console.warn(
        "THREE.PropertyBinding: No target node found for track: " +
          this.path +
          ".",
      );
      return;
    }
    if (n) {
      let c = t.objectIndex;
      switch (n) {
        case "materials":
          if (!e.material) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this,
            );
            return;
          }
          if (!e.material.materials) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",
              this,
            );
            return;
          }
          e = e.material.materials;
          break;
        case "bones":
          if (!e.skeleton) {
            console.error(
              "THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",
              this,
            );
            return;
          }
          e = e.skeleton.bones;
          for (let h = 0; h < e.length; h++)
            if (e[h].name === c) {
              c = h;
              break;
            }
          break;
        case "map":
          if ("map" in e) {
            e = e.map;
            break;
          }
          if (!e.material) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material as node does not have a material.",
              this,
            );
            return;
          }
          if (!e.material.map) {
            console.error(
              "THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",
              this,
            );
            return;
          }
          e = e.material.map;
          break;
        default:
          if (e[n] === void 0) {
            console.error(
              "THREE.PropertyBinding: Can not bind to objectName of node undefined.",
              this,
            );
            return;
          }
          e = e[n];
      }
      if (c !== void 0) {
        if (e[c] === void 0) {
          console.error(
            "THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",
            this,
            e,
          );
          return;
        }
        e = e[c];
      }
    }
    const a = e[i];
    if (a === void 0) {
      const c = t.nodeName;
      console.error(
        "THREE.PropertyBinding: Trying to update property for track: " +
          c +
          "." +
          i +
          " but it wasn't found.",
        e,
      );
      return;
    }
    let o = this.Versioning.None;
    ((this.targetObject = e),
      e.isMaterial === !0
        ? (o = this.Versioning.NeedsUpdate)
        : e.isObject3D === !0 && (o = this.Versioning.MatrixWorldNeedsUpdate));
    let l = this.BindingType.Direct;
    if (r !== void 0) {
      if (i === "morphTargetInfluences") {
        if (!e.geometry) {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",
            this,
          );
          return;
        }
        if (!e.geometry.morphAttributes) {
          console.error(
            "THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",
            this,
          );
          return;
        }
        e.morphTargetDictionary[r] !== void 0 &&
          (r = e.morphTargetDictionary[r]);
      }
      ((l = this.BindingType.ArrayElement),
        (this.resolvedProperty = a),
        (this.propertyIndex = r));
    } else
      a.fromArray !== void 0 && a.toArray !== void 0
        ? ((l = this.BindingType.HasFromToArray), (this.resolvedProperty = a))
        : Array.isArray(a)
          ? ((l = this.BindingType.EntireArray), (this.resolvedProperty = a))
          : (this.propertyName = i);
    ((this.getValue = this.GetterByBindingType[l]),
      (this.setValue = this.SetterByBindingTypeAndVersioning[l][o]));
  }
  unbind() {
    ((this.node = null),
      (this.getValue = this._getValue_unbound),
      (this.setValue = this._setValue_unbound));
  }
}
Je.Composite = p_;
Je.prototype.BindingType = {
  Direct: 0,
  EntireArray: 1,
  ArrayElement: 2,
  HasFromToArray: 3,
};
Je.prototype.Versioning = {
  None: 0,
  NeedsUpdate: 1,
  MatrixWorldNeedsUpdate: 2,
};
Je.prototype.GetterByBindingType = [
  Je.prototype._getValue_direct,
  Je.prototype._getValue_array,
  Je.prototype._getValue_arrayElement,
  Je.prototype._getValue_toArray,
];
Je.prototype.SetterByBindingTypeAndVersioning = [
  [
    Je.prototype._setValue_direct,
    Je.prototype._setValue_direct_setNeedsUpdate,
    Je.prototype._setValue_direct_setMatrixWorldNeedsUpdate,
  ],
  [
    Je.prototype._setValue_array,
    Je.prototype._setValue_array_setNeedsUpdate,
    Je.prototype._setValue_array_setMatrixWorldNeedsUpdate,
  ],
  [
    Je.prototype._setValue_arrayElement,
    Je.prototype._setValue_arrayElement_setNeedsUpdate,
    Je.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate,
  ],
  [
    Je.prototype._setValue_fromArray,
    Je.prototype._setValue_fromArray_setNeedsUpdate,
    Je.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate,
  ],
];
class yd {
  constructor(e) {
    this.value = e;
  }
  clone() {
    return new yd(
      this.value.clone === void 0 ? this.value : this.value.clone(),
    );
  }
}
const Gh = new Oe();
class MS {
  constructor(e, t, n = 0, i = 1 / 0) {
    ((this.ray = new Qr(e, t)),
      (this.near = n),
      (this.far = i),
      (this.camera = null),
      (this.layers = new uc()),
      (this.params = {
        Mesh: {},
        Line: { threshold: 1 },
        LOD: {},
        Points: { threshold: 1 },
        Sprite: {},
      }));
  }
  set(e, t) {
    this.ray.set(e, t);
  }
  setFromCamera(e, t) {
    t.isPerspectiveCamera
      ? (this.ray.origin.setFromMatrixPosition(t.matrixWorld),
        this.ray.direction
          .set(e.x, e.y, 0.5)
          .unproject(t)
          .sub(this.ray.origin)
          .normalize(),
        (this.camera = t))
      : t.isOrthographicCamera
        ? (this.ray.origin
            .set(e.x, e.y, (t.near + t.far) / (t.near - t.far))
            .unproject(t),
          this.ray.direction.set(0, 0, -1).transformDirection(t.matrixWorld),
          (this.camera = t))
        : console.error("THREE.Raycaster: Unsupported camera type: " + t.type);
  }
  setFromXRController(e) {
    return (
      Gh.identity().extractRotation(e.matrixWorld),
      this.ray.origin.setFromMatrixPosition(e.matrixWorld),
      this.ray.direction.set(0, 0, -1).applyMatrix4(Gh),
      this
    );
  }
  intersectObject(e, t = !0, n = []) {
    return (Ul(e, this, n, t), n.sort(Wh), n);
  }
  intersectObjects(e, t = !0, n = []) {
    for (let i = 0, r = e.length; i < r; i++) Ul(e[i], this, n, t);
    return (n.sort(Wh), n);
  }
}
function Wh(s, e) {
  return s.distance - e.distance;
}
function Ul(s, e, t, n) {
  let i = !0;
  if (
    (s.layers.test(e.layers) && s.raycast(e, t) === !1 && (i = !1),
    i === !0 && n === !0)
  ) {
    const r = s.children;
    for (let a = 0, o = r.length; a < o; a++) Ul(r[a], e, t, !0);
  }
}
class Xh {
  constructor(e = 1, t = 0, n = 0) {
    ((this.radius = e), (this.phi = t), (this.theta = n));
  }
  set(e, t, n) {
    return ((this.radius = e), (this.phi = t), (this.theta = n), this);
  }
  copy(e) {
    return (
      (this.radius = e.radius),
      (this.phi = e.phi),
      (this.theta = e.theta),
      this
    );
  }
  makeSafe() {
    return ((this.phi = ze(this.phi, 1e-6, Math.PI - 1e-6)), this);
  }
  setFromVector3(e) {
    return this.setFromCartesianCoords(e.x, e.y, e.z);
  }
  setFromCartesianCoords(e, t, n) {
    return (
      (this.radius = Math.sqrt(e * e + t * t + n * n)),
      this.radius === 0
        ? ((this.theta = 0), (this.phi = 0))
        : ((this.theta = Math.atan2(e, n)),
          (this.phi = Math.acos(ze(t / this.radius, -1, 1)))),
      this
    );
  }
  clone() {
    return new this.constructor().copy(this);
  }
}
class m_ extends rr {
  constructor(e, t = null) {
    (super(),
      (this.object = e),
      (this.domElement = t),
      (this.enabled = !0),
      (this.state = -1),
      (this.keys = {}),
      (this.mouseButtons = { LEFT: null, MIDDLE: null, RIGHT: null }),
      (this.touches = { ONE: null, TWO: null }));
  }
  connect(e) {
    if (e === void 0) {
      console.warn("THREE.Controls: connect() now requires an element.");
      return;
    }
    (this.domElement !== null && this.disconnect(), (this.domElement = e));
  }
  disconnect() {}
  dispose() {}
  update() {}
}
function Yh(s, e, t, n) {
  const i = __(n);
  switch (t) {
    case Zu:
      return s * e;
    case rc:
      return ((s * e) / i.components) * i.byteLength;
    case sc:
      return ((s * e) / i.components) * i.byteLength;
    case Ju:
      return ((s * e * 2) / i.components) * i.byteLength;
    case ac:
      return ((s * e * 2) / i.components) * i.byteLength;
    case $u:
      return ((s * e * 3) / i.components) * i.byteLength;
    case zt:
      return ((s * e * 4) / i.components) * i.byteLength;
    case oc:
      return ((s * e * 4) / i.components) * i.byteLength;
    case Ma:
    case Sa:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case Ta:
    case Ea:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case sl:
    case ol:
      return (Math.max(s, 16) * Math.max(e, 8)) / 4;
    case rl:
    case al:
      return (Math.max(s, 8) * Math.max(e, 8)) / 2;
    case ll:
    case cl:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 8;
    case hl:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case ul:
      return Math.floor((s + 3) / 4) * Math.floor((e + 3) / 4) * 16;
    case dl:
      return Math.floor((s + 4) / 5) * Math.floor((e + 3) / 4) * 16;
    case fl:
      return Math.floor((s + 4) / 5) * Math.floor((e + 4) / 5) * 16;
    case pl:
      return Math.floor((s + 5) / 6) * Math.floor((e + 4) / 5) * 16;
    case ml:
      return Math.floor((s + 5) / 6) * Math.floor((e + 5) / 6) * 16;
    case _l:
      return Math.floor((s + 7) / 8) * Math.floor((e + 4) / 5) * 16;
    case gl:
      return Math.floor((s + 7) / 8) * Math.floor((e + 5) / 6) * 16;
    case xl:
      return Math.floor((s + 7) / 8) * Math.floor((e + 7) / 8) * 16;
    case vl:
      return Math.floor((s + 9) / 10) * Math.floor((e + 4) / 5) * 16;
    case yl:
      return Math.floor((s + 9) / 10) * Math.floor((e + 5) / 6) * 16;
    case Ml:
      return Math.floor((s + 9) / 10) * Math.floor((e + 7) / 8) * 16;
    case Sl:
      return Math.floor((s + 9) / 10) * Math.floor((e + 9) / 10) * 16;
    case Tl:
      return Math.floor((s + 11) / 12) * Math.floor((e + 9) / 10) * 16;
    case El:
      return Math.floor((s + 11) / 12) * Math.floor((e + 11) / 12) * 16;
    case ba:
    case bl:
    case Al:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 16;
    case Qu:
    case wl:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 8;
    case Rl:
    case Cl:
      return Math.ceil(s / 4) * Math.ceil(e / 4) * 16;
  }
  throw new Error(`Unable to determine texture byte length for ${t} format.`);
}
function __(s) {
  switch (s) {
    case fn:
    case ec:
      return { byteLength: 1, components: 1 };
    case bs:
    case tc:
    case Li:
      return { byteLength: 2, components: 1 };
    case nc:
    case ic:
      return { byteLength: 2, components: 4 };
    case Ci:
    case Wa:
    case $t:
      return { byteLength: 4, components: 1 };
    case Ku:
      return { byteLength: 4, components: 3 };
  }
  throw new Error(`Unknown texture type ${s}.`);
}
typeof __THREE_DEVTOOLS__ < "u" &&
  __THREE_DEVTOOLS__.dispatchEvent(
    new CustomEvent("register", { detail: { revision: Ql } }),
  );
typeof window < "u" &&
  (window.__THREE__
    ? console.warn("WARNING: Multiple instances of Three.js being imported.")
    : (window.__THREE__ = Ql));
/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */ function Md() {
  let s = null,
    e = !1,
    t = null,
    n = null;
  function i(r, a) {
    (t(r, a), (n = s.requestAnimationFrame(i)));
  }
  return {
    start: function () {
      e !== !0 && t !== null && ((n = s.requestAnimationFrame(i)), (e = !0));
    },
    stop: function () {
      (s.cancelAnimationFrame(n), (e = !1));
    },
    setAnimationLoop: function (r) {
      t = r;
    },
    setContext: function (r) {
      s = r;
    },
  };
}
function g_(s) {
  const e = new WeakMap();
  function t(o, l) {
    const c = o.array,
      h = o.usage,
      u = c.byteLength,
      d = s.createBuffer();
    (s.bindBuffer(l, d), s.bufferData(l, c, h), o.onUploadCallback());
    let f;
    if (c instanceof Float32Array) f = s.FLOAT;
    else if (typeof Float16Array < "u" && c instanceof Float16Array)
      f = s.HALF_FLOAT;
    else if (c instanceof Uint16Array)
      o.isFloat16BufferAttribute ? (f = s.HALF_FLOAT) : (f = s.UNSIGNED_SHORT);
    else if (c instanceof Int16Array) f = s.SHORT;
    else if (c instanceof Uint32Array) f = s.UNSIGNED_INT;
    else if (c instanceof Int32Array) f = s.INT;
    else if (c instanceof Int8Array) f = s.BYTE;
    else if (c instanceof Uint8Array) f = s.UNSIGNED_BYTE;
    else if (c instanceof Uint8ClampedArray) f = s.UNSIGNED_BYTE;
    else
      throw new Error(
        "THREE.WebGLAttributes: Unsupported buffer data format: " + c,
      );
    return {
      buffer: d,
      type: f,
      bytesPerElement: c.BYTES_PER_ELEMENT,
      version: o.version,
      size: u,
    };
  }
  function n(o, l, c) {
    const h = l.array,
      u = l.updateRanges;
    if ((s.bindBuffer(c, o), u.length === 0)) s.bufferSubData(c, 0, h);
    else {
      u.sort((f, g) => f.start - g.start);
      let d = 0;
      for (let f = 1; f < u.length; f++) {
        const g = u[d],
          _ = u[f];
        _.start <= g.start + g.count + 1
          ? (g.count = Math.max(g.count, _.start + _.count - g.start))
          : (++d, (u[d] = _));
      }
      u.length = d + 1;
      for (let f = 0, g = u.length; f < g; f++) {
        const _ = u[f];
        s.bufferSubData(c, _.start * h.BYTES_PER_ELEMENT, h, _.start, _.count);
      }
      l.clearUpdateRanges();
    }
    l.onUploadCallback();
  }
  function i(o) {
    return (o.isInterleavedBufferAttribute && (o = o.data), e.get(o));
  }
  function r(o) {
    o.isInterleavedBufferAttribute && (o = o.data);
    const l = e.get(o);
    l && (s.deleteBuffer(l.buffer), e.delete(o));
  }
  function a(o, l) {
    if (
      (o.isInterleavedBufferAttribute && (o = o.data), o.isGLBufferAttribute)
    ) {
      const h = e.get(o);
      (!h || h.version < o.version) &&
        e.set(o, {
          buffer: o.buffer,
          type: o.type,
          bytesPerElement: o.elementSize,
          version: o.version,
        });
      return;
    }
    const c = e.get(o);
    if (c === void 0) e.set(o, t(o, l));
    else if (c.version < o.version) {
      if (c.size !== o.array.byteLength)
        throw new Error(
          "THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.",
        );
      (n(c.buffer, o, l), (c.version = o.version));
    }
  }
  return { get: i, remove: r, update: a };
}
var x_ = `#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,
  v_ = `#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,
  y_ = `#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,
  M_ = `#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  S_ = `#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,
  T_ = `#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,
  E_ = `#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,
  b_ = `#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,
  A_ = `#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,
  w_ = `#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,
  R_ = `vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,
  C_ = `vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,
  P_ = `float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,
  D_ = `#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,
  L_ = `#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,
  I_ = `#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,
  U_ = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,
  N_ = `#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,
  O_ = `#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,
  F_ = `#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,
  B_ = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,
  k_ = `#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,
  z_ = `#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,
  H_ = `#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,
  V_ = `#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,
  G_ = `vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,
  W_ = `#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,
  X_ = `#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,
  Y_ = `#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,
  q_ = `#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,
  j_ = "gl_FragColor = linearToOutputTexel( gl_FragColor );",
  K_ = `vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,
  Z_ = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,
  $_ = `#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,
  J_ = `#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,
  Q_ = `#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,
  eg = `#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,
  tg = `#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,
  ng = `#ifdef USE_FOG
	varying float vFogDepth;
#endif`,
  ig = `#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,
  rg = `#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,
  sg = `#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,
  ag = `#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,
  og = `LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,
  lg = `varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,
  cg = `uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,
  hg = `#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,
  ug = `ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,
  dg = `varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,
  fg = `BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,
  pg = `varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,
  mg = `PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,
  _g = `struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,
  gg = `
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,
  xg = `#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,
  vg = `#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,
  yg = `#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,
  Mg = `#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Sg = `#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,
  Tg = `#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,
  Eg = `#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,
  bg = `#ifdef USE_MAP
	uniform sampler2D map;
#endif`,
  Ag = `#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,
  wg = `#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,
  Rg = `float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,
  Cg = `#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,
  Pg = `#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,
  Dg = `#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,
  Lg = `#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  Ig = `#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,
  Ug = `#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,
  Ng = `float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,
  Og = `#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,
  Fg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  Bg = `#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,
  kg = `#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,
  zg = `#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,
  Hg = `#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,
  Vg = `#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,
  Gg = `#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,
  Wg = `#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,
  Xg = `#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,
  Yg = `vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,
  qg = `#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,
  jg = `vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,
  Kg = `#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,
  Zg = `#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,
  $g = `float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,
  Jg = `#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,
  Qg = `#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,
  e0 = `#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,
  t0 = `#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,
  n0 = `float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,
  i0 = `#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,
  r0 = `#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,
  s0 = `#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,
  a0 = `#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,
  o0 = `float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,
  l0 = `#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,
  c0 = `#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,
  h0 = `#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,
  u0 = `#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,
  d0 = `#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,
  f0 = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  p0 = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,
  m0 = `#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,
  _0 = `#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;
const g0 = `varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,
  x0 = `uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  v0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  y0 = `#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  M0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,
  S0 = `uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  T0 = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,
  E0 = `#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,
  b0 = `#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,
  A0 = `#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,
  w0 = `varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,
  R0 = `uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,
  C0 = `uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  P0 = `uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  D0 = `#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,
  L0 = `uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  I0 = `#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  U0 = `#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  N0 = `#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,
  O0 = `#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  F0 = `#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,
  B0 = `#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,
  k0 = `#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  z0 = `#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  H0 = `#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,
  V0 = `#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  G0 = `#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  W0 = `#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,
  X0 = `uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,
  Y0 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,
  q0 = `#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,
  j0 = `uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  K0 = `uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,
  Z0 = `uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,
  Le = {
    alphahash_fragment: x_,
    alphahash_pars_fragment: v_,
    alphamap_fragment: y_,
    alphamap_pars_fragment: M_,
    alphatest_fragment: S_,
    alphatest_pars_fragment: T_,
    aomap_fragment: E_,
    aomap_pars_fragment: b_,
    batching_pars_vertex: A_,
    batching_vertex: w_,
    begin_vertex: R_,
    beginnormal_vertex: C_,
    bsdfs: P_,
    iridescence_fragment: D_,
    bumpmap_pars_fragment: L_,
    clipping_planes_fragment: I_,
    clipping_planes_pars_fragment: U_,
    clipping_planes_pars_vertex: N_,
    clipping_planes_vertex: O_,
    color_fragment: F_,
    color_pars_fragment: B_,
    color_pars_vertex: k_,
    color_vertex: z_,
    common: H_,
    cube_uv_reflection_fragment: V_,
    defaultnormal_vertex: G_,
    displacementmap_pars_vertex: W_,
    displacementmap_vertex: X_,
    emissivemap_fragment: Y_,
    emissivemap_pars_fragment: q_,
    colorspace_fragment: j_,
    colorspace_pars_fragment: K_,
    envmap_fragment: Z_,
    envmap_common_pars_fragment: $_,
    envmap_pars_fragment: J_,
    envmap_pars_vertex: Q_,
    envmap_physical_pars_fragment: hg,
    envmap_vertex: eg,
    fog_vertex: tg,
    fog_pars_vertex: ng,
    fog_fragment: ig,
    fog_pars_fragment: rg,
    gradientmap_pars_fragment: sg,
    lightmap_pars_fragment: ag,
    lights_lambert_fragment: og,
    lights_lambert_pars_fragment: lg,
    lights_pars_begin: cg,
    lights_toon_fragment: ug,
    lights_toon_pars_fragment: dg,
    lights_phong_fragment: fg,
    lights_phong_pars_fragment: pg,
    lights_physical_fragment: mg,
    lights_physical_pars_fragment: _g,
    lights_fragment_begin: gg,
    lights_fragment_maps: xg,
    lights_fragment_end: vg,
    logdepthbuf_fragment: yg,
    logdepthbuf_pars_fragment: Mg,
    logdepthbuf_pars_vertex: Sg,
    logdepthbuf_vertex: Tg,
    map_fragment: Eg,
    map_pars_fragment: bg,
    map_particle_fragment: Ag,
    map_particle_pars_fragment: wg,
    metalnessmap_fragment: Rg,
    metalnessmap_pars_fragment: Cg,
    morphinstance_vertex: Pg,
    morphcolor_vertex: Dg,
    morphnormal_vertex: Lg,
    morphtarget_pars_vertex: Ig,
    morphtarget_vertex: Ug,
    normal_fragment_begin: Ng,
    normal_fragment_maps: Og,
    normal_pars_fragment: Fg,
    normal_pars_vertex: Bg,
    normal_vertex: kg,
    normalmap_pars_fragment: zg,
    clearcoat_normal_fragment_begin: Hg,
    clearcoat_normal_fragment_maps: Vg,
    clearcoat_pars_fragment: Gg,
    iridescence_pars_fragment: Wg,
    opaque_fragment: Xg,
    packing: Yg,
    premultiplied_alpha_fragment: qg,
    project_vertex: jg,
    dithering_fragment: Kg,
    dithering_pars_fragment: Zg,
    roughnessmap_fragment: $g,
    roughnessmap_pars_fragment: Jg,
    shadowmap_pars_fragment: Qg,
    shadowmap_pars_vertex: e0,
    shadowmap_vertex: t0,
    shadowmask_pars_fragment: n0,
    skinbase_vertex: i0,
    skinning_pars_vertex: r0,
    skinning_vertex: s0,
    skinnormal_vertex: a0,
    specularmap_fragment: o0,
    specularmap_pars_fragment: l0,
    tonemapping_fragment: c0,
    tonemapping_pars_fragment: h0,
    transmission_fragment: u0,
    transmission_pars_fragment: d0,
    uv_pars_fragment: f0,
    uv_pars_vertex: p0,
    uv_vertex: m0,
    worldpos_vertex: _0,
    background_vert: g0,
    background_frag: x0,
    backgroundCube_vert: v0,
    backgroundCube_frag: y0,
    cube_vert: M0,
    cube_frag: S0,
    depth_vert: T0,
    depth_frag: E0,
    distanceRGBA_vert: b0,
    distanceRGBA_frag: A0,
    equirect_vert: w0,
    equirect_frag: R0,
    linedashed_vert: C0,
    linedashed_frag: P0,
    meshbasic_vert: D0,
    meshbasic_frag: L0,
    meshlambert_vert: I0,
    meshlambert_frag: U0,
    meshmatcap_vert: N0,
    meshmatcap_frag: O0,
    meshnormal_vert: F0,
    meshnormal_frag: B0,
    meshphong_vert: k0,
    meshphong_frag: z0,
    meshphysical_vert: H0,
    meshphysical_frag: V0,
    meshtoon_vert: G0,
    meshtoon_frag: W0,
    points_vert: X0,
    points_frag: Y0,
    shadow_vert: q0,
    shadow_frag: j0,
    sprite_vert: K0,
    sprite_frag: Z0,
  },
  se = {
    common: {
      diffuse: { value: new Ie(16777215) },
      opacity: { value: 1 },
      map: { value: null },
      mapTransform: { value: new Be() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Be() },
      alphaTest: { value: 0 },
    },
    specularmap: {
      specularMap: { value: null },
      specularMapTransform: { value: new Be() },
    },
    envmap: {
      envMap: { value: null },
      envMapRotation: { value: new Be() },
      flipEnvMap: { value: -1 },
      reflectivity: { value: 1 },
      ior: { value: 1.5 },
      refractionRatio: { value: 0.98 },
    },
    aomap: {
      aoMap: { value: null },
      aoMapIntensity: { value: 1 },
      aoMapTransform: { value: new Be() },
    },
    lightmap: {
      lightMap: { value: null },
      lightMapIntensity: { value: 1 },
      lightMapTransform: { value: new Be() },
    },
    bumpmap: {
      bumpMap: { value: null },
      bumpMapTransform: { value: new Be() },
      bumpScale: { value: 1 },
    },
    normalmap: {
      normalMap: { value: null },
      normalMapTransform: { value: new Be() },
      normalScale: { value: new Re(1, 1) },
    },
    displacementmap: {
      displacementMap: { value: null },
      displacementMapTransform: { value: new Be() },
      displacementScale: { value: 1 },
      displacementBias: { value: 0 },
    },
    emissivemap: {
      emissiveMap: { value: null },
      emissiveMapTransform: { value: new Be() },
    },
    metalnessmap: {
      metalnessMap: { value: null },
      metalnessMapTransform: { value: new Be() },
    },
    roughnessmap: {
      roughnessMap: { value: null },
      roughnessMapTransform: { value: new Be() },
    },
    gradientmap: { gradientMap: { value: null } },
    fog: {
      fogDensity: { value: 25e-5 },
      fogNear: { value: 1 },
      fogFar: { value: 2e3 },
      fogColor: { value: new Ie(16777215) },
    },
    lights: {
      ambientLightColor: { value: [] },
      lightProbe: { value: [] },
      directionalLights: {
        value: [],
        properties: { direction: {}, color: {} },
      },
      directionalLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      directionalShadowMap: { value: [] },
      directionalShadowMatrix: { value: [] },
      spotLights: {
        value: [],
        properties: {
          color: {},
          position: {},
          direction: {},
          distance: {},
          coneCos: {},
          penumbraCos: {},
          decay: {},
        },
      },
      spotLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
        },
      },
      spotLightMap: { value: [] },
      spotShadowMap: { value: [] },
      spotLightMatrix: { value: [] },
      pointLights: {
        value: [],
        properties: { color: {}, position: {}, decay: {}, distance: {} },
      },
      pointLightShadows: {
        value: [],
        properties: {
          shadowIntensity: 1,
          shadowBias: {},
          shadowNormalBias: {},
          shadowRadius: {},
          shadowMapSize: {},
          shadowCameraNear: {},
          shadowCameraFar: {},
        },
      },
      pointShadowMap: { value: [] },
      pointShadowMatrix: { value: [] },
      hemisphereLights: {
        value: [],
        properties: { direction: {}, skyColor: {}, groundColor: {} },
      },
      rectAreaLights: {
        value: [],
        properties: { color: {}, position: {}, width: {}, height: {} },
      },
      ltc_1: { value: null },
      ltc_2: { value: null },
    },
    points: {
      diffuse: { value: new Ie(16777215) },
      opacity: { value: 1 },
      size: { value: 1 },
      scale: { value: 1 },
      map: { value: null },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Be() },
      alphaTest: { value: 0 },
      uvTransform: { value: new Be() },
    },
    sprite: {
      diffuse: { value: new Ie(16777215) },
      opacity: { value: 1 },
      center: { value: new Re(0.5, 0.5) },
      rotation: { value: 0 },
      map: { value: null },
      mapTransform: { value: new Be() },
      alphaMap: { value: null },
      alphaMapTransform: { value: new Be() },
      alphaTest: { value: 0 },
    },
  },
  Cn = {
    basic: {
      uniforms: Wt([
        se.common,
        se.specularmap,
        se.envmap,
        se.aomap,
        se.lightmap,
        se.fog,
      ]),
      vertexShader: Le.meshbasic_vert,
      fragmentShader: Le.meshbasic_frag,
    },
    lambert: {
      uniforms: Wt([
        se.common,
        se.specularmap,
        se.envmap,
        se.aomap,
        se.lightmap,
        se.emissivemap,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.fog,
        se.lights,
        { emissive: { value: new Ie(0) } },
      ]),
      vertexShader: Le.meshlambert_vert,
      fragmentShader: Le.meshlambert_frag,
    },
    phong: {
      uniforms: Wt([
        se.common,
        se.specularmap,
        se.envmap,
        se.aomap,
        se.lightmap,
        se.emissivemap,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.fog,
        se.lights,
        {
          emissive: { value: new Ie(0) },
          specular: { value: new Ie(1118481) },
          shininess: { value: 30 },
        },
      ]),
      vertexShader: Le.meshphong_vert,
      fragmentShader: Le.meshphong_frag,
    },
    standard: {
      uniforms: Wt([
        se.common,
        se.envmap,
        se.aomap,
        se.lightmap,
        se.emissivemap,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.roughnessmap,
        se.metalnessmap,
        se.fog,
        se.lights,
        {
          emissive: { value: new Ie(0) },
          roughness: { value: 1 },
          metalness: { value: 0 },
          envMapIntensity: { value: 1 },
        },
      ]),
      vertexShader: Le.meshphysical_vert,
      fragmentShader: Le.meshphysical_frag,
    },
    toon: {
      uniforms: Wt([
        se.common,
        se.aomap,
        se.lightmap,
        se.emissivemap,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.gradientmap,
        se.fog,
        se.lights,
        { emissive: { value: new Ie(0) } },
      ]),
      vertexShader: Le.meshtoon_vert,
      fragmentShader: Le.meshtoon_frag,
    },
    matcap: {
      uniforms: Wt([
        se.common,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        se.fog,
        { matcap: { value: null } },
      ]),
      vertexShader: Le.meshmatcap_vert,
      fragmentShader: Le.meshmatcap_frag,
    },
    points: {
      uniforms: Wt([se.points, se.fog]),
      vertexShader: Le.points_vert,
      fragmentShader: Le.points_frag,
    },
    dashed: {
      uniforms: Wt([
        se.common,
        se.fog,
        {
          scale: { value: 1 },
          dashSize: { value: 1 },
          totalSize: { value: 2 },
        },
      ]),
      vertexShader: Le.linedashed_vert,
      fragmentShader: Le.linedashed_frag,
    },
    depth: {
      uniforms: Wt([se.common, se.displacementmap]),
      vertexShader: Le.depth_vert,
      fragmentShader: Le.depth_frag,
    },
    normal: {
      uniforms: Wt([
        se.common,
        se.bumpmap,
        se.normalmap,
        se.displacementmap,
        { opacity: { value: 1 } },
      ]),
      vertexShader: Le.meshnormal_vert,
      fragmentShader: Le.meshnormal_frag,
    },
    sprite: {
      uniforms: Wt([se.sprite, se.fog]),
      vertexShader: Le.sprite_vert,
      fragmentShader: Le.sprite_frag,
    },
    background: {
      uniforms: {
        uvTransform: { value: new Be() },
        t2D: { value: null },
        backgroundIntensity: { value: 1 },
      },
      vertexShader: Le.background_vert,
      fragmentShader: Le.background_frag,
    },
    backgroundCube: {
      uniforms: {
        envMap: { value: null },
        flipEnvMap: { value: -1 },
        backgroundBlurriness: { value: 0 },
        backgroundIntensity: { value: 1 },
        backgroundRotation: { value: new Be() },
      },
      vertexShader: Le.backgroundCube_vert,
      fragmentShader: Le.backgroundCube_frag,
    },
    cube: {
      uniforms: {
        tCube: { value: null },
        tFlip: { value: -1 },
        opacity: { value: 1 },
      },
      vertexShader: Le.cube_vert,
      fragmentShader: Le.cube_frag,
    },
    equirect: {
      uniforms: { tEquirect: { value: null } },
      vertexShader: Le.equirect_vert,
      fragmentShader: Le.equirect_frag,
    },
    distanceRGBA: {
      uniforms: Wt([
        se.common,
        se.displacementmap,
        {
          referencePosition: { value: new L() },
          nearDistance: { value: 1 },
          farDistance: { value: 1e3 },
        },
      ]),
      vertexShader: Le.distanceRGBA_vert,
      fragmentShader: Le.distanceRGBA_frag,
    },
    shadow: {
      uniforms: Wt([
        se.lights,
        se.fog,
        { color: { value: new Ie(0) }, opacity: { value: 1 } },
      ]),
      vertexShader: Le.shadow_vert,
      fragmentShader: Le.shadow_frag,
    },
  };
Cn.physical = {
  uniforms: Wt([
    Cn.standard.uniforms,
    {
      clearcoat: { value: 0 },
      clearcoatMap: { value: null },
      clearcoatMapTransform: { value: new Be() },
      clearcoatNormalMap: { value: null },
      clearcoatNormalMapTransform: { value: new Be() },
      clearcoatNormalScale: { value: new Re(1, 1) },
      clearcoatRoughness: { value: 0 },
      clearcoatRoughnessMap: { value: null },
      clearcoatRoughnessMapTransform: { value: new Be() },
      dispersion: { value: 0 },
      iridescence: { value: 0 },
      iridescenceMap: { value: null },
      iridescenceMapTransform: { value: new Be() },
      iridescenceIOR: { value: 1.3 },
      iridescenceThicknessMinimum: { value: 100 },
      iridescenceThicknessMaximum: { value: 400 },
      iridescenceThicknessMap: { value: null },
      iridescenceThicknessMapTransform: { value: new Be() },
      sheen: { value: 0 },
      sheenColor: { value: new Ie(0) },
      sheenColorMap: { value: null },
      sheenColorMapTransform: { value: new Be() },
      sheenRoughness: { value: 1 },
      sheenRoughnessMap: { value: null },
      sheenRoughnessMapTransform: { value: new Be() },
      transmission: { value: 0 },
      transmissionMap: { value: null },
      transmissionMapTransform: { value: new Be() },
      transmissionSamplerSize: { value: new Re() },
      transmissionSamplerMap: { value: null },
      thickness: { value: 0 },
      thicknessMap: { value: null },
      thicknessMapTransform: { value: new Be() },
      attenuationDistance: { value: 0 },
      attenuationColor: { value: new Ie(0) },
      specularColor: { value: new Ie(1, 1, 1) },
      specularColorMap: { value: null },
      specularColorMapTransform: { value: new Be() },
      specularIntensity: { value: 1 },
      specularIntensityMap: { value: null },
      specularIntensityMapTransform: { value: new Be() },
      anisotropyVector: { value: new Re() },
      anisotropyMap: { value: null },
      anisotropyMapTransform: { value: new Be() },
    },
  ]),
  vertexShader: Le.meshphysical_vert,
  fragmentShader: Le.meshphysical_frag,
};
const pa = { r: 0, b: 0, g: 0 },
  Hi = new Vn(),
  $0 = new Oe();
function J0(s, e, t, n, i, r, a) {
  const o = new Ie(0);
  let l = r === !0 ? 0 : 1,
    c,
    h,
    u = null,
    d = 0,
    f = null;
  function g(M) {
    let v = M.isScene === !0 ? M.background : null;
    return (
      v && v.isTexture && (v = (M.backgroundBlurriness > 0 ? t : e).get(v)),
      v
    );
  }
  function _(M) {
    let v = !1;
    const b = g(M);
    b === null ? p(o, l) : b && b.isColor && (p(b, 1), (v = !0));
    const A = s.xr.getEnvironmentBlendMode();
    (A === "additive"
      ? n.buffers.color.setClear(0, 0, 0, 1, a)
      : A === "alpha-blend" && n.buffers.color.setClear(0, 0, 0, 0, a),
      (s.autoClear || v) &&
        (n.buffers.depth.setTest(!0),
        n.buffers.depth.setMask(!0),
        n.buffers.color.setMask(!0),
        s.clear(s.autoClearColor, s.autoClearDepth, s.autoClearStencil)));
  }
  function m(M, v) {
    const b = g(v);
    b && (b.isCubeTexture || b.mapping === Ga)
      ? (h === void 0 &&
          ((h = new Yt(
            new ks(1, 1, 1),
            new Gn({
              name: "BackgroundCubeMaterial",
              uniforms: Gr(Cn.backgroundCube.uniforms),
              vertexShader: Cn.backgroundCube.vertexShader,
              fragmentShader: Cn.backgroundCube.fragmentShader,
              side: Jt,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              allowOverride: !1,
            }),
          )),
          h.geometry.deleteAttribute("normal"),
          h.geometry.deleteAttribute("uv"),
          (h.onBeforeRender = function (A, w, C) {
            this.matrixWorld.copyPosition(C.matrixWorld);
          }),
          Object.defineProperty(h.material, "envMap", {
            get: function () {
              return this.uniforms.envMap.value;
            },
          }),
          i.update(h)),
        Hi.copy(v.backgroundRotation),
        (Hi.x *= -1),
        (Hi.y *= -1),
        (Hi.z *= -1),
        b.isCubeTexture &&
          b.isRenderTargetTexture === !1 &&
          ((Hi.y *= -1), (Hi.z *= -1)),
        (h.material.uniforms.envMap.value = b),
        (h.material.uniforms.flipEnvMap.value =
          b.isCubeTexture && b.isRenderTargetTexture === !1 ? -1 : 1),
        (h.material.uniforms.backgroundBlurriness.value =
          v.backgroundBlurriness),
        (h.material.uniforms.backgroundIntensity.value = v.backgroundIntensity),
        h.material.uniforms.backgroundRotation.value.setFromMatrix4(
          $0.makeRotationFromEuler(Hi),
        ),
        (h.material.toneMapped = We.getTransfer(b.colorSpace) !== et),
        (u !== b || d !== b.version || f !== s.toneMapping) &&
          ((h.material.needsUpdate = !0),
          (u = b),
          (d = b.version),
          (f = s.toneMapping)),
        h.layers.enableAll(),
        M.unshift(h, h.geometry, h.material, 0, 0, null))
      : b &&
        b.isTexture &&
        (c === void 0 &&
          ((c = new Yt(
            new es(2, 2),
            new Gn({
              name: "BackgroundMaterial",
              uniforms: Gr(Cn.background.uniforms),
              vertexShader: Cn.background.vertexShader,
              fragmentShader: Cn.background.fragmentShader,
              side: li,
              depthTest: !1,
              depthWrite: !1,
              fog: !1,
              allowOverride: !1,
            }),
          )),
          c.geometry.deleteAttribute("normal"),
          Object.defineProperty(c.material, "map", {
            get: function () {
              return this.uniforms.t2D.value;
            },
          }),
          i.update(c)),
        (c.material.uniforms.t2D.value = b),
        (c.material.uniforms.backgroundIntensity.value = v.backgroundIntensity),
        (c.material.toneMapped = We.getTransfer(b.colorSpace) !== et),
        b.matrixAutoUpdate === !0 && b.updateMatrix(),
        c.material.uniforms.uvTransform.value.copy(b.matrix),
        (u !== b || d !== b.version || f !== s.toneMapping) &&
          ((c.material.needsUpdate = !0),
          (u = b),
          (d = b.version),
          (f = s.toneMapping)),
        c.layers.enableAll(),
        M.unshift(c, c.geometry, c.material, 0, 0, null));
  }
  function p(M, v) {
    (M.getRGB(pa, ld(s)), n.buffers.color.setClear(pa.r, pa.g, pa.b, v, a));
  }
  function S() {
    (h !== void 0 && (h.geometry.dispose(), h.material.dispose(), (h = void 0)),
      c !== void 0 &&
        (c.geometry.dispose(), c.material.dispose(), (c = void 0)));
  }
  return {
    getClearColor: function () {
      return o;
    },
    setClearColor: function (M, v = 1) {
      (o.set(M), (l = v), p(o, l));
    },
    getClearAlpha: function () {
      return l;
    },
    setClearAlpha: function (M) {
      ((l = M), p(o, l));
    },
    render: _,
    addToRenderList: m,
    dispose: S,
  };
}
function Q0(s, e) {
  const t = s.getParameter(s.MAX_VERTEX_ATTRIBS),
    n = {},
    i = d(null);
  let r = i,
    a = !1;
  function o(E, P, V, F, z) {
    let q = !1;
    const G = u(F, V, P);
    (r !== G && ((r = G), c(r.object)),
      (q = f(E, F, V, z)),
      q && g(E, F, V, z),
      z !== null && e.update(z, s.ELEMENT_ARRAY_BUFFER),
      (q || a) &&
        ((a = !1),
        v(E, P, V, F),
        z !== null && s.bindBuffer(s.ELEMENT_ARRAY_BUFFER, e.get(z).buffer)));
  }
  function l() {
    return s.createVertexArray();
  }
  function c(E) {
    return s.bindVertexArray(E);
  }
  function h(E) {
    return s.deleteVertexArray(E);
  }
  function u(E, P, V) {
    const F = V.wireframe === !0;
    let z = n[E.id];
    z === void 0 && ((z = {}), (n[E.id] = z));
    let q = z[P.id];
    q === void 0 && ((q = {}), (z[P.id] = q));
    let G = q[F];
    return (G === void 0 && ((G = d(l())), (q[F] = G)), G);
  }
  function d(E) {
    const P = [],
      V = [],
      F = [];
    for (let z = 0; z < t; z++) ((P[z] = 0), (V[z] = 0), (F[z] = 0));
    return {
      geometry: null,
      program: null,
      wireframe: !1,
      newAttributes: P,
      enabledAttributes: V,
      attributeDivisors: F,
      object: E,
      attributes: {},
      index: null,
    };
  }
  function f(E, P, V, F) {
    const z = r.attributes,
      q = P.attributes;
    let G = 0;
    const K = V.getAttributes();
    for (const H in K)
      if (K[H].location >= 0) {
        const ae = z[H];
        let _e = q[H];
        if (
          (_e === void 0 &&
            (H === "instanceMatrix" &&
              E.instanceMatrix &&
              (_e = E.instanceMatrix),
            H === "instanceColor" && E.instanceColor && (_e = E.instanceColor)),
          ae === void 0 || ae.attribute !== _e || (_e && ae.data !== _e.data))
        )
          return !0;
        G++;
      }
    return r.attributesNum !== G || r.index !== F;
  }
  function g(E, P, V, F) {
    const z = {},
      q = P.attributes;
    let G = 0;
    const K = V.getAttributes();
    for (const H in K)
      if (K[H].location >= 0) {
        let ae = q[H];
        ae === void 0 &&
          (H === "instanceMatrix" &&
            E.instanceMatrix &&
            (ae = E.instanceMatrix),
          H === "instanceColor" && E.instanceColor && (ae = E.instanceColor));
        const _e = {};
        ((_e.attribute = ae),
          ae && ae.data && (_e.data = ae.data),
          (z[H] = _e),
          G++);
      }
    ((r.attributes = z), (r.attributesNum = G), (r.index = F));
  }
  function _() {
    const E = r.newAttributes;
    for (let P = 0, V = E.length; P < V; P++) E[P] = 0;
  }
  function m(E) {
    p(E, 0);
  }
  function p(E, P) {
    const V = r.newAttributes,
      F = r.enabledAttributes,
      z = r.attributeDivisors;
    ((V[E] = 1),
      F[E] === 0 && (s.enableVertexAttribArray(E), (F[E] = 1)),
      z[E] !== P && (s.vertexAttribDivisor(E, P), (z[E] = P)));
  }
  function S() {
    const E = r.newAttributes,
      P = r.enabledAttributes;
    for (let V = 0, F = P.length; V < F; V++)
      P[V] !== E[V] && (s.disableVertexAttribArray(V), (P[V] = 0));
  }
  function M(E, P, V, F, z, q, G) {
    G === !0
      ? s.vertexAttribIPointer(E, P, V, z, q)
      : s.vertexAttribPointer(E, P, V, F, z, q);
  }
  function v(E, P, V, F) {
    _();
    const z = F.attributes,
      q = V.getAttributes(),
      G = P.defaultAttributeValues;
    for (const K in q) {
      const H = q[K];
      if (H.location >= 0) {
        let re = z[K];
        if (
          (re === void 0 &&
            (K === "instanceMatrix" &&
              E.instanceMatrix &&
              (re = E.instanceMatrix),
            K === "instanceColor" && E.instanceColor && (re = E.instanceColor)),
          re !== void 0)
        ) {
          const ae = re.normalized,
            _e = re.itemSize,
            Pe = e.get(re);
          if (Pe === void 0) continue;
          const nt = Pe.buffer,
            He = Pe.type,
            W = Pe.bytesPerElement,
            oe = He === s.INT || He === s.UNSIGNED_INT || re.gpuType === Wa;
          if (re.isInterleavedBufferAttribute) {
            const ne = re.data,
              be = ne.stride,
              Ae = re.offset;
            if (ne.isInstancedInterleavedBuffer) {
              for (let Ue = 0; Ue < H.locationSize; Ue++)
                p(H.location + Ue, ne.meshPerAttribute);
              E.isInstancedMesh !== !0 &&
                F._maxInstanceCount === void 0 &&
                (F._maxInstanceCount = ne.meshPerAttribute * ne.count);
            } else
              for (let Ue = 0; Ue < H.locationSize; Ue++) m(H.location + Ue);
            s.bindBuffer(s.ARRAY_BUFFER, nt);
            for (let Ue = 0; Ue < H.locationSize; Ue++)
              M(
                H.location + Ue,
                _e / H.locationSize,
                He,
                ae,
                be * W,
                (Ae + (_e / H.locationSize) * Ue) * W,
                oe,
              );
          } else {
            if (re.isInstancedBufferAttribute) {
              for (let ne = 0; ne < H.locationSize; ne++)
                p(H.location + ne, re.meshPerAttribute);
              E.isInstancedMesh !== !0 &&
                F._maxInstanceCount === void 0 &&
                (F._maxInstanceCount = re.meshPerAttribute * re.count);
            } else
              for (let ne = 0; ne < H.locationSize; ne++) m(H.location + ne);
            s.bindBuffer(s.ARRAY_BUFFER, nt);
            for (let ne = 0; ne < H.locationSize; ne++)
              M(
                H.location + ne,
                _e / H.locationSize,
                He,
                ae,
                _e * W,
                (_e / H.locationSize) * ne * W,
                oe,
              );
          }
        } else if (G !== void 0) {
          const ae = G[K];
          if (ae !== void 0)
            switch (ae.length) {
              case 2:
                s.vertexAttrib2fv(H.location, ae);
                break;
              case 3:
                s.vertexAttrib3fv(H.location, ae);
                break;
              case 4:
                s.vertexAttrib4fv(H.location, ae);
                break;
              default:
                s.vertexAttrib1fv(H.location, ae);
            }
        }
      }
    }
    S();
  }
  function b() {
    C();
    for (const E in n) {
      const P = n[E];
      for (const V in P) {
        const F = P[V];
        for (const z in F) (h(F[z].object), delete F[z]);
        delete P[V];
      }
      delete n[E];
    }
  }
  function A(E) {
    if (n[E.id] === void 0) return;
    const P = n[E.id];
    for (const V in P) {
      const F = P[V];
      for (const z in F) (h(F[z].object), delete F[z]);
      delete P[V];
    }
    delete n[E.id];
  }
  function w(E) {
    for (const P in n) {
      const V = n[P];
      if (V[E.id] === void 0) continue;
      const F = V[E.id];
      for (const z in F) (h(F[z].object), delete F[z]);
      delete V[E.id];
    }
  }
  function C() {
    (x(), (a = !0), r !== i && ((r = i), c(r.object)));
  }
  function x() {
    ((i.geometry = null), (i.program = null), (i.wireframe = !1));
  }
  return {
    setup: o,
    reset: C,
    resetDefaultState: x,
    dispose: b,
    releaseStatesOfGeometry: A,
    releaseStatesOfProgram: w,
    initAttributes: _,
    enableAttribute: m,
    disableUnusedAttributes: S,
  };
}
function ex(s, e, t) {
  let n;
  function i(c) {
    n = c;
  }
  function r(c, h) {
    (s.drawArrays(n, c, h), t.update(h, n, 1));
  }
  function a(c, h, u) {
    u !== 0 && (s.drawArraysInstanced(n, c, h, u), t.update(h, n, u));
  }
  function o(c, h, u) {
    if (u === 0) return;
    e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n, c, 0, h, 0, u);
    let f = 0;
    for (let g = 0; g < u; g++) f += h[g];
    t.update(f, n, 1);
  }
  function l(c, h, u, d) {
    if (u === 0) return;
    const f = e.get("WEBGL_multi_draw");
    if (f === null) for (let g = 0; g < c.length; g++) a(c[g], h[g], d[g]);
    else {
      f.multiDrawArraysInstancedWEBGL(n, c, 0, h, 0, d, 0, u);
      let g = 0;
      for (let _ = 0; _ < u; _++) g += h[_] * d[_];
      t.update(g, n, 1);
    }
  }
  ((this.setMode = i),
    (this.render = r),
    (this.renderInstances = a),
    (this.renderMultiDraw = o),
    (this.renderMultiDrawInstances = l));
}
function tx(s, e, t, n) {
  let i;
  function r() {
    if (i !== void 0) return i;
    if (e.has("EXT_texture_filter_anisotropic") === !0) {
      const w = e.get("EXT_texture_filter_anisotropic");
      i = s.getParameter(w.MAX_TEXTURE_MAX_ANISOTROPY_EXT);
    } else i = 0;
    return i;
  }
  function a(w) {
    return !(
      w !== zt &&
      n.convert(w) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT)
    );
  }
  function o(w) {
    const C =
      w === Li &&
      (e.has("EXT_color_buffer_half_float") || e.has("EXT_color_buffer_float"));
    return !(
      w !== fn &&
      n.convert(w) !== s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE) &&
      w !== $t &&
      !C
    );
  }
  function l(w) {
    if (w === "highp") {
      if (
        s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.HIGH_FLOAT).precision >
          0 &&
        s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.HIGH_FLOAT).precision >
          0
      )
        return "highp";
      w = "mediump";
    }
    return w === "mediump" &&
      s.getShaderPrecisionFormat(s.VERTEX_SHADER, s.MEDIUM_FLOAT).precision >
        0 &&
      s.getShaderPrecisionFormat(s.FRAGMENT_SHADER, s.MEDIUM_FLOAT).precision >
        0
      ? "mediump"
      : "lowp";
  }
  let c = t.precision !== void 0 ? t.precision : "highp";
  const h = l(c);
  h !== c &&
    (console.warn(
      "THREE.WebGLRenderer:",
      c,
      "not supported, using",
      h,
      "instead.",
    ),
    (c = h));
  const u = t.logarithmicDepthBuffer === !0,
    d = t.reversedDepthBuffer === !0 && e.has("EXT_clip_control"),
    f = s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),
    g = s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),
    _ = s.getParameter(s.MAX_TEXTURE_SIZE),
    m = s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),
    p = s.getParameter(s.MAX_VERTEX_ATTRIBS),
    S = s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),
    M = s.getParameter(s.MAX_VARYING_VECTORS),
    v = s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),
    b = g > 0,
    A = s.getParameter(s.MAX_SAMPLES);
  return {
    isWebGL2: !0,
    getMaxAnisotropy: r,
    getMaxPrecision: l,
    textureFormatReadable: a,
    textureTypeReadable: o,
    precision: c,
    logarithmicDepthBuffer: u,
    reversedDepthBuffer: d,
    maxTextures: f,
    maxVertexTextures: g,
    maxTextureSize: _,
    maxCubemapSize: m,
    maxAttributes: p,
    maxVertexUniforms: S,
    maxVaryings: M,
    maxFragmentUniforms: v,
    vertexTextures: b,
    maxSamples: A,
  };
}
function nx(s) {
  const e = this;
  let t = null,
    n = 0,
    i = !1,
    r = !1;
  const a = new yi(),
    o = new Be(),
    l = { value: null, needsUpdate: !1 };
  ((this.uniform = l),
    (this.numPlanes = 0),
    (this.numIntersection = 0),
    (this.init = function (u, d) {
      const f = u.length !== 0 || d || n !== 0 || i;
      return ((i = d), (n = u.length), f);
    }),
    (this.beginShadows = function () {
      ((r = !0), h(null));
    }),
    (this.endShadows = function () {
      r = !1;
    }),
    (this.setGlobalState = function (u, d) {
      t = h(u, d, 0);
    }),
    (this.setState = function (u, d, f) {
      const g = u.clippingPlanes,
        _ = u.clipIntersection,
        m = u.clipShadows,
        p = s.get(u);
      if (!i || g === null || g.length === 0 || (r && !m)) r ? h(null) : c();
      else {
        const S = r ? 0 : n,
          M = S * 4;
        let v = p.clippingState || null;
        ((l.value = v), (v = h(g, d, M, f)));
        for (let b = 0; b !== M; ++b) v[b] = t[b];
        ((p.clippingState = v),
          (this.numIntersection = _ ? this.numPlanes : 0),
          (this.numPlanes += S));
      }
    }));
  function c() {
    (l.value !== t && ((l.value = t), (l.needsUpdate = n > 0)),
      (e.numPlanes = n),
      (e.numIntersection = 0));
  }
  function h(u, d, f, g) {
    const _ = u !== null ? u.length : 0;
    let m = null;
    if (_ !== 0) {
      if (((m = l.value), g !== !0 || m === null)) {
        const p = f + _ * 4,
          S = d.matrixWorldInverse;
        (o.getNormalMatrix(S),
          (m === null || m.length < p) && (m = new Float32Array(p)));
        for (let M = 0, v = f; M !== _; ++M, v += 4)
          (a.copy(u[M]).applyMatrix4(S, o),
            a.normal.toArray(m, v),
            (m[v + 3] = a.constant));
      }
      ((l.value = m), (l.needsUpdate = !0));
    }
    return ((e.numPlanes = _), (e.numIntersection = 0), m);
  }
}
function ix(s) {
  let e = new WeakMap();
  function t(a, o) {
    return (o === nl ? (a.mapping = kr) : o === il && (a.mapping = zr), a);
  }
  function n(a) {
    if (a && a.isTexture) {
      const o = a.mapping;
      if (o === nl || o === il)
        if (e.has(a)) {
          const l = e.get(a).texture;
          return t(l, a.mapping);
        } else {
          const l = a.image;
          if (l && l.height > 0) {
            const c = new Sm(l.height);
            return (
              c.fromEquirectangularTexture(s, a),
              e.set(a, c),
              a.addEventListener("dispose", i),
              t(c.texture, a.mapping)
            );
          } else return null;
        }
    }
    return a;
  }
  function i(a) {
    const o = a.target;
    o.removeEventListener("dispose", i);
    const l = e.get(o);
    l !== void 0 && (e.delete(o), l.dispose());
  }
  function r() {
    e = new WeakMap();
  }
  return { get: n, dispose: r };
}
const Ar = 4,
  qh = [0.125, 0.215, 0.35, 0.446, 0.526, 0.582],
  Ki = 20,
  Ro = new Xa(),
  jh = new Ie();
let Co = null,
  Po = 0,
  Do = 0,
  Lo = !1;
const Yi = (1 + Math.sqrt(5)) / 2,
  Sr = 1 / Yi,
  Kh = [
    new L(-Yi, Sr, 0),
    new L(Yi, Sr, 0),
    new L(-Sr, 0, Yi),
    new L(Sr, 0, Yi),
    new L(0, Yi, -Sr),
    new L(0, Yi, Sr),
    new L(-1, 1, -1),
    new L(1, 1, -1),
    new L(-1, 1, 1),
    new L(1, 1, 1),
  ],
  rx = new L();
class Zh {
  constructor(e) {
    ((this._renderer = e),
      (this._pingPongRenderTarget = null),
      (this._lodMax = 0),
      (this._cubeSize = 0),
      (this._lodPlanes = []),
      (this._sizeLods = []),
      (this._sigmas = []),
      (this._blurMaterial = null),
      (this._cubemapMaterial = null),
      (this._equirectMaterial = null),
      this._compileMaterial(this._blurMaterial));
  }
  fromScene(e, t = 0, n = 0.1, i = 100, r = {}) {
    const { size: a = 256, position: o = rx } = r;
    ((Co = this._renderer.getRenderTarget()),
      (Po = this._renderer.getActiveCubeFace()),
      (Do = this._renderer.getActiveMipmapLevel()),
      (Lo = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1),
      this._setSize(a));
    const l = this._allocateTargets();
    return (
      (l.depthBuffer = !0),
      this._sceneToCubeUV(e, n, i, l, o),
      t > 0 && this._blur(l, 0, 0, t),
      this._applyPMREM(l),
      this._cleanup(l),
      l
    );
  }
  fromEquirectangular(e, t = null) {
    return this._fromTexture(e, t);
  }
  fromCubemap(e, t = null) {
    return this._fromTexture(e, t);
  }
  compileCubemapShader() {
    this._cubemapMaterial === null &&
      ((this._cubemapMaterial = Qh()),
      this._compileMaterial(this._cubemapMaterial));
  }
  compileEquirectangularShader() {
    this._equirectMaterial === null &&
      ((this._equirectMaterial = Jh()),
      this._compileMaterial(this._equirectMaterial));
  }
  dispose() {
    (this._dispose(),
      this._cubemapMaterial !== null && this._cubemapMaterial.dispose(),
      this._equirectMaterial !== null && this._equirectMaterial.dispose());
  }
  _setSize(e) {
    ((this._lodMax = Math.floor(Math.log2(e))),
      (this._cubeSize = Math.pow(2, this._lodMax)));
  }
  _dispose() {
    (this._blurMaterial !== null && this._blurMaterial.dispose(),
      this._pingPongRenderTarget !== null &&
        this._pingPongRenderTarget.dispose());
    for (let e = 0; e < this._lodPlanes.length; e++)
      this._lodPlanes[e].dispose();
  }
  _cleanup(e) {
    (this._renderer.setRenderTarget(Co, Po, Do),
      (this._renderer.xr.enabled = Lo),
      (e.scissorTest = !1),
      ma(e, 0, 0, e.width, e.height));
  }
  _fromTexture(e, t) {
    (e.mapping === kr || e.mapping === zr
      ? this._setSize(
          e.image.length === 0
            ? 16
            : e.image[0].width || e.image[0].image.width,
        )
      : this._setSize(e.image.width / 4),
      (Co = this._renderer.getRenderTarget()),
      (Po = this._renderer.getActiveCubeFace()),
      (Do = this._renderer.getActiveMipmapLevel()),
      (Lo = this._renderer.xr.enabled),
      (this._renderer.xr.enabled = !1));
    const n = t || this._allocateTargets();
    return (
      this._textureToCubeUV(e, n),
      this._applyPMREM(n),
      this._cleanup(n),
      n
    );
  }
  _allocateTargets() {
    const e = 3 * Math.max(this._cubeSize, 112),
      t = 4 * this._cubeSize,
      n = {
        magFilter: wt,
        minFilter: wt,
        generateMipmaps: !1,
        type: Li,
        format: zt,
        colorSpace: Rt,
        depthBuffer: !1,
      },
      i = $h(e, t, n);
    if (
      this._pingPongRenderTarget === null ||
      this._pingPongRenderTarget.width !== e ||
      this._pingPongRenderTarget.height !== t
    ) {
      (this._pingPongRenderTarget !== null && this._dispose(),
        (this._pingPongRenderTarget = $h(e, t, n)));
      const { _lodMax: r } = this;
      (({
        sizeLods: this._sizeLods,
        lodPlanes: this._lodPlanes,
        sigmas: this._sigmas,
      } = sx(r)),
        (this._blurMaterial = ax(r, e, t)));
    }
    return i;
  }
  _compileMaterial(e) {
    const t = new Yt(this._lodPlanes[0], e);
    this._renderer.compile(t, Ro);
  }
  _sceneToCubeUV(e, t, n, i, r) {
    const l = new Zt(90, 1, t, n),
      c = [1, -1, 1, 1, 1, 1],
      h = [1, 1, 1, -1, -1, -1],
      u = this._renderer,
      d = u.autoClear,
      f = u.toneMapping;
    (u.getClearColor(jh),
      (u.toneMapping = Ai),
      (u.autoClear = !1),
      u.state.buffers.depth.getReversed() &&
        (u.setRenderTarget(i), u.clearDepth(), u.setRenderTarget(null)));
    const _ = new Si({
        name: "PMREM.Background",
        side: Jt,
        depthWrite: !1,
        depthTest: !1,
      }),
      m = new Yt(new ks(), _);
    let p = !1;
    const S = e.background;
    S
      ? S.isColor && (_.color.copy(S), (e.background = null), (p = !0))
      : (_.color.copy(jh), (p = !0));
    for (let M = 0; M < 6; M++) {
      const v = M % 3;
      v === 0
        ? (l.up.set(0, c[M], 0),
          l.position.set(r.x, r.y, r.z),
          l.lookAt(r.x + h[M], r.y, r.z))
        : v === 1
          ? (l.up.set(0, 0, c[M]),
            l.position.set(r.x, r.y, r.z),
            l.lookAt(r.x, r.y + h[M], r.z))
          : (l.up.set(0, c[M], 0),
            l.position.set(r.x, r.y, r.z),
            l.lookAt(r.x, r.y, r.z + h[M]));
      const b = this._cubeSize;
      (ma(i, v * b, M > 2 ? b : 0, b, b),
        u.setRenderTarget(i),
        p && u.render(m, l),
        u.render(e, l));
    }
    (m.geometry.dispose(),
      m.material.dispose(),
      (u.toneMapping = f),
      (u.autoClear = d),
      (e.background = S));
  }
  _textureToCubeUV(e, t) {
    const n = this._renderer,
      i = e.mapping === kr || e.mapping === zr;
    i
      ? (this._cubemapMaterial === null && (this._cubemapMaterial = Qh()),
        (this._cubemapMaterial.uniforms.flipEnvMap.value =
          e.isRenderTargetTexture === !1 ? -1 : 1))
      : this._equirectMaterial === null && (this._equirectMaterial = Jh());
    const r = i ? this._cubemapMaterial : this._equirectMaterial,
      a = new Yt(this._lodPlanes[0], r),
      o = r.uniforms;
    o.envMap.value = e;
    const l = this._cubeSize;
    (ma(t, 0, 0, 3 * l, 2 * l), n.setRenderTarget(t), n.render(a, Ro));
  }
  _applyPMREM(e) {
    const t = this._renderer,
      n = t.autoClear;
    t.autoClear = !1;
    const i = this._lodPlanes.length;
    for (let r = 1; r < i; r++) {
      const a = Math.sqrt(
          this._sigmas[r] * this._sigmas[r] -
            this._sigmas[r - 1] * this._sigmas[r - 1],
        ),
        o = Kh[(i - r - 1) % Kh.length];
      this._blur(e, r - 1, r, a, o);
    }
    t.autoClear = n;
  }
  _blur(e, t, n, i, r) {
    const a = this._pingPongRenderTarget;
    (this._halfBlur(e, a, t, n, i, "latitudinal", r),
      this._halfBlur(a, e, n, n, i, "longitudinal", r));
  }
  _halfBlur(e, t, n, i, r, a, o) {
    const l = this._renderer,
      c = this._blurMaterial;
    a !== "latitudinal" &&
      a !== "longitudinal" &&
      console.error(
        "blur direction must be either latitudinal or longitudinal!",
      );
    const h = 3,
      u = new Yt(this._lodPlanes[i], c),
      d = c.uniforms,
      f = this._sizeLods[n] - 1,
      g = isFinite(r) ? Math.PI / (2 * f) : (2 * Math.PI) / (2 * Ki - 1),
      _ = r / g,
      m = isFinite(r) ? 1 + Math.floor(h * _) : Ki;
    m > Ki &&
      console.warn(
        `sigmaRadians, ${r}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ki}`,
      );
    const p = [];
    let S = 0;
    for (let w = 0; w < Ki; ++w) {
      const C = w / _,
        x = Math.exp((-C * C) / 2);
      (p.push(x), w === 0 ? (S += x) : w < m && (S += 2 * x));
    }
    for (let w = 0; w < p.length; w++) p[w] = p[w] / S;
    ((d.envMap.value = e.texture),
      (d.samples.value = m),
      (d.weights.value = p),
      (d.latitudinal.value = a === "latitudinal"),
      o && (d.poleAxis.value = o));
    const { _lodMax: M } = this;
    ((d.dTheta.value = g), (d.mipInt.value = M - n));
    const v = this._sizeLods[i],
      b = 3 * v * (i > M - Ar ? i - M + Ar : 0),
      A = 4 * (this._cubeSize - v);
    (ma(t, b, A, 3 * v, 2 * v), l.setRenderTarget(t), l.render(u, Ro));
  }
}
function sx(s) {
  const e = [],
    t = [],
    n = [];
  let i = s;
  const r = s - Ar + 1 + qh.length;
  for (let a = 0; a < r; a++) {
    const o = Math.pow(2, i);
    t.push(o);
    let l = 1 / o;
    (a > s - Ar ? (l = qh[a - s + Ar - 1]) : a === 0 && (l = 0), n.push(l));
    const c = 1 / (o - 2),
      h = -c,
      u = 1 + c,
      d = [h, h, u, h, u, u, h, h, u, u, h, u],
      f = 6,
      g = 6,
      _ = 3,
      m = 2,
      p = 1,
      S = new Float32Array(_ * g * f),
      M = new Float32Array(m * g * f),
      v = new Float32Array(p * g * f);
    for (let A = 0; A < f; A++) {
      const w = ((A % 3) * 2) / 3 - 1,
        C = A > 2 ? 0 : -1,
        x = [
          w,
          C,
          0,
          w + 2 / 3,
          C,
          0,
          w + 2 / 3,
          C + 1,
          0,
          w,
          C,
          0,
          w + 2 / 3,
          C + 1,
          0,
          w,
          C + 1,
          0,
        ];
      (S.set(x, _ * g * A), M.set(d, m * g * A));
      const E = [A, A, A, A, A, A];
      v.set(E, p * g * A);
    }
    const b = new bn();
    (b.setAttribute("position", new Ut(S, _)),
      b.setAttribute("uv", new Ut(M, m)),
      b.setAttribute("faceIndex", new Ut(v, p)),
      e.push(b),
      i > Ar && i--);
  }
  return { lodPlanes: e, sizeLods: t, sigmas: n };
}
function $h(s, e, t) {
  const n = new ci(s, e, t);
  return (
    (n.texture.mapping = Ga),
    (n.texture.name = "PMREM.cubeUv"),
    (n.scissorTest = !0),
    n
  );
}
function ma(s, e, t, n, i) {
  (s.viewport.set(e, t, n, i), s.scissor.set(e, t, n, i));
}
function ax(s, e, t) {
  const n = new Float32Array(Ki),
    i = new L(0, 1, 0);
  return new Gn({
    name: "SphericalGaussianBlur",
    defines: {
      n: Ki,
      CUBEUV_TEXEL_WIDTH: 1 / e,
      CUBEUV_TEXEL_HEIGHT: 1 / t,
      CUBEUV_MAX_MIP: `${s}.0`,
    },
    uniforms: {
      envMap: { value: null },
      samples: { value: 1 },
      weights: { value: n },
      latitudinal: { value: !1 },
      dTheta: { value: 0 },
      mipInt: { value: 0 },
      poleAxis: { value: i },
    },
    vertexShader: Sc(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,
    blending: ai,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Jh() {
  return new Gn({
    name: "EquirectangularToCubeUV",
    uniforms: { envMap: { value: null } },
    vertexShader: Sc(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,
    blending: ai,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Qh() {
  return new Gn({
    name: "CubemapToCubeUV",
    uniforms: { envMap: { value: null }, flipEnvMap: { value: -1 } },
    vertexShader: Sc(),
    fragmentShader: `

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,
    blending: ai,
    depthTest: !1,
    depthWrite: !1,
  });
}
function Sc() {
  return `

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`;
}
function ox(s) {
  let e = new WeakMap(),
    t = null;
  function n(o) {
    if (o && o.isTexture) {
      const l = o.mapping,
        c = l === nl || l === il,
        h = l === kr || l === zr;
      if (c || h) {
        let u = e.get(o);
        const d = u !== void 0 ? u.texture.pmremVersion : 0;
        if (o.isRenderTargetTexture && o.pmremVersion !== d)
          return (
            t === null && (t = new Zh(s)),
            (u = c ? t.fromEquirectangular(o, u) : t.fromCubemap(o, u)),
            (u.texture.pmremVersion = o.pmremVersion),
            e.set(o, u),
            u.texture
          );
        if (u !== void 0) return u.texture;
        {
          const f = o.image;
          return (c && f && f.height > 0) || (h && f && i(f))
            ? (t === null && (t = new Zh(s)),
              (u = c ? t.fromEquirectangular(o) : t.fromCubemap(o)),
              (u.texture.pmremVersion = o.pmremVersion),
              e.set(o, u),
              o.addEventListener("dispose", r),
              u.texture)
            : null;
        }
      }
    }
    return o;
  }
  function i(o) {
    let l = 0;
    const c = 6;
    for (let h = 0; h < c; h++) o[h] !== void 0 && l++;
    return l === c;
  }
  function r(o) {
    const l = o.target;
    l.removeEventListener("dispose", r);
    const c = e.get(l);
    c !== void 0 && (e.delete(l), c.dispose());
  }
  function a() {
    ((e = new WeakMap()), t !== null && (t.dispose(), (t = null)));
  }
  return { get: n, dispose: a };
}
function lx(s) {
  const e = {};
  function t(n) {
    if (e[n] !== void 0) return e[n];
    let i;
    switch (n) {
      case "WEBGL_depth_texture":
        i =
          s.getExtension("WEBGL_depth_texture") ||
          s.getExtension("MOZ_WEBGL_depth_texture") ||
          s.getExtension("WEBKIT_WEBGL_depth_texture");
        break;
      case "EXT_texture_filter_anisotropic":
        i =
          s.getExtension("EXT_texture_filter_anisotropic") ||
          s.getExtension("MOZ_EXT_texture_filter_anisotropic") ||
          s.getExtension("WEBKIT_EXT_texture_filter_anisotropic");
        break;
      case "WEBGL_compressed_texture_s3tc":
        i =
          s.getExtension("WEBGL_compressed_texture_s3tc") ||
          s.getExtension("MOZ_WEBGL_compressed_texture_s3tc") ||
          s.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");
        break;
      case "WEBGL_compressed_texture_pvrtc":
        i =
          s.getExtension("WEBGL_compressed_texture_pvrtc") ||
          s.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");
        break;
      default:
        i = s.getExtension(n);
    }
    return ((e[n] = i), i);
  }
  return {
    has: function (n) {
      return t(n) !== null;
    },
    init: function () {
      (t("EXT_color_buffer_float"),
        t("WEBGL_clip_cull_distance"),
        t("OES_texture_float_linear"),
        t("EXT_color_buffer_half_float"),
        t("WEBGL_multisampled_render_to_texture"),
        t("WEBGL_render_shared_exponent"));
    },
    get: function (n) {
      const i = t(n);
      return (
        i === null &&
          Dr("THREE.WebGLRenderer: " + n + " extension not supported."),
        i
      );
    },
  };
}
function cx(s, e, t, n) {
  const i = {},
    r = new WeakMap();
  function a(u) {
    const d = u.target;
    d.index !== null && e.remove(d.index);
    for (const g in d.attributes) e.remove(d.attributes[g]);
    (d.removeEventListener("dispose", a), delete i[d.id]);
    const f = r.get(d);
    (f && (e.remove(f), r.delete(d)),
      n.releaseStatesOfGeometry(d),
      d.isInstancedBufferGeometry === !0 && delete d._maxInstanceCount,
      t.memory.geometries--);
  }
  function o(u, d) {
    return (
      i[d.id] === !0 ||
        (d.addEventListener("dispose", a),
        (i[d.id] = !0),
        t.memory.geometries++),
      d
    );
  }
  function l(u) {
    const d = u.attributes;
    for (const f in d) e.update(d[f], s.ARRAY_BUFFER);
  }
  function c(u) {
    const d = [],
      f = u.index,
      g = u.attributes.position;
    let _ = 0;
    if (f !== null) {
      const S = f.array;
      _ = f.version;
      for (let M = 0, v = S.length; M < v; M += 3) {
        const b = S[M + 0],
          A = S[M + 1],
          w = S[M + 2];
        d.push(b, A, A, w, w, b);
      }
    } else if (g !== void 0) {
      const S = g.array;
      _ = g.version;
      for (let M = 0, v = S.length / 3 - 1; M < v; M += 3) {
        const b = M + 0,
          A = M + 1,
          w = M + 2;
        d.push(b, A, A, w, w, b);
      }
    } else return;
    const m = new (id(d) ? od : ad)(d, 1);
    m.version = _;
    const p = r.get(u);
    (p && e.remove(p), r.set(u, m));
  }
  function h(u) {
    const d = r.get(u);
    if (d) {
      const f = u.index;
      f !== null && d.version < f.version && c(u);
    } else c(u);
    return r.get(u);
  }
  return { get: o, update: l, getWireframeAttribute: h };
}
function hx(s, e, t) {
  let n;
  function i(d) {
    n = d;
  }
  let r, a;
  function o(d) {
    ((r = d.type), (a = d.bytesPerElement));
  }
  function l(d, f) {
    (s.drawElements(n, f, r, d * a), t.update(f, n, 1));
  }
  function c(d, f, g) {
    g !== 0 && (s.drawElementsInstanced(n, f, r, d * a, g), t.update(f, n, g));
  }
  function h(d, f, g) {
    if (g === 0) return;
    e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n, f, 0, r, d, 0, g);
    let m = 0;
    for (let p = 0; p < g; p++) m += f[p];
    t.update(m, n, 1);
  }
  function u(d, f, g, _) {
    if (g === 0) return;
    const m = e.get("WEBGL_multi_draw");
    if (m === null) for (let p = 0; p < d.length; p++) c(d[p] / a, f[p], _[p]);
    else {
      m.multiDrawElementsInstancedWEBGL(n, f, 0, r, d, 0, _, 0, g);
      let p = 0;
      for (let S = 0; S < g; S++) p += f[S] * _[S];
      t.update(p, n, 1);
    }
  }
  ((this.setMode = i),
    (this.setIndex = o),
    (this.render = l),
    (this.renderInstances = c),
    (this.renderMultiDraw = h),
    (this.renderMultiDrawInstances = u));
}
function ux(s) {
  const e = { geometries: 0, textures: 0 },
    t = { frame: 0, calls: 0, triangles: 0, points: 0, lines: 0 };
  function n(r, a, o) {
    switch ((t.calls++, a)) {
      case s.TRIANGLES:
        t.triangles += o * (r / 3);
        break;
      case s.LINES:
        t.lines += o * (r / 2);
        break;
      case s.LINE_STRIP:
        t.lines += o * (r - 1);
        break;
      case s.LINE_LOOP:
        t.lines += o * r;
        break;
      case s.POINTS:
        t.points += o * r;
        break;
      default:
        console.error("THREE.WebGLInfo: Unknown draw mode:", a);
        break;
    }
  }
  function i() {
    ((t.calls = 0), (t.triangles = 0), (t.points = 0), (t.lines = 0));
  }
  return {
    memory: e,
    render: t,
    programs: null,
    autoReset: !0,
    reset: i,
    update: n,
  };
}
function dx(s, e, t) {
  const n = new WeakMap(),
    i = new Ke();
  function r(a, o, l) {
    const c = a.morphTargetInfluences,
      h =
        o.morphAttributes.position ||
        o.morphAttributes.normal ||
        o.morphAttributes.color,
      u = h !== void 0 ? h.length : 0;
    let d = n.get(o);
    if (d === void 0 || d.count !== u) {
      let x = function () {
        (w.dispose(), n.delete(o), o.removeEventListener("dispose", x));
      };
      d !== void 0 && d.texture.dispose();
      const f = o.morphAttributes.position !== void 0,
        g = o.morphAttributes.normal !== void 0,
        _ = o.morphAttributes.color !== void 0,
        m = o.morphAttributes.position || [],
        p = o.morphAttributes.normal || [],
        S = o.morphAttributes.color || [];
      let M = 0;
      (f === !0 && (M = 1), g === !0 && (M = 2), _ === !0 && (M = 3));
      let v = o.attributes.position.count * M,
        b = 1;
      v > e.maxTextureSize &&
        ((b = Math.ceil(v / e.maxTextureSize)), (v = e.maxTextureSize));
      const A = new Float32Array(v * b * 4 * u),
        w = new rd(A, v, b, u);
      ((w.type = $t), (w.needsUpdate = !0));
      const C = M * 4;
      for (let E = 0; E < u; E++) {
        const P = m[E],
          V = p[E],
          F = S[E],
          z = v * b * 4 * E;
        for (let q = 0; q < P.count; q++) {
          const G = q * C;
          (f === !0 &&
            (i.fromBufferAttribute(P, q),
            (A[z + G + 0] = i.x),
            (A[z + G + 1] = i.y),
            (A[z + G + 2] = i.z),
            (A[z + G + 3] = 0)),
            g === !0 &&
              (i.fromBufferAttribute(V, q),
              (A[z + G + 4] = i.x),
              (A[z + G + 5] = i.y),
              (A[z + G + 6] = i.z),
              (A[z + G + 7] = 0)),
            _ === !0 &&
              (i.fromBufferAttribute(F, q),
              (A[z + G + 8] = i.x),
              (A[z + G + 9] = i.y),
              (A[z + G + 10] = i.z),
              (A[z + G + 11] = F.itemSize === 4 ? i.w : 1)));
        }
      }
      ((d = { count: u, texture: w, size: new Re(v, b) }),
        n.set(o, d),
        o.addEventListener("dispose", x));
    }
    if (a.isInstancedMesh === !0 && a.morphTexture !== null)
      l.getUniforms().setValue(s, "morphTexture", a.morphTexture, t);
    else {
      let f = 0;
      for (let _ = 0; _ < c.length; _++) f += c[_];
      const g = o.morphTargetsRelative ? 1 : 1 - f;
      (l.getUniforms().setValue(s, "morphTargetBaseInfluence", g),
        l.getUniforms().setValue(s, "morphTargetInfluences", c));
    }
    (l.getUniforms().setValue(s, "morphTargetsTexture", d.texture, t),
      l.getUniforms().setValue(s, "morphTargetsTextureSize", d.size));
  }
  return { update: r };
}
function fx(s, e, t, n) {
  let i = new WeakMap();
  function r(l) {
    const c = n.render.frame,
      h = l.geometry,
      u = e.get(l, h);
    if (
      (i.get(u) !== c && (e.update(u), i.set(u, c)),
      l.isInstancedMesh &&
        (l.hasEventListener("dispose", o) === !1 &&
          l.addEventListener("dispose", o),
        i.get(l) !== c &&
          (t.update(l.instanceMatrix, s.ARRAY_BUFFER),
          l.instanceColor !== null && t.update(l.instanceColor, s.ARRAY_BUFFER),
          i.set(l, c))),
      l.isSkinnedMesh)
    ) {
      const d = l.skeleton;
      i.get(d) !== c && (d.update(), i.set(d, c));
    }
    return u;
  }
  function a() {
    i = new WeakMap();
  }
  function o(l) {
    const c = l.target;
    (c.removeEventListener("dispose", o),
      t.remove(c.instanceMatrix),
      c.instanceColor !== null && t.remove(c.instanceColor));
  }
  return { update: r, dispose: a };
}
const Sd = new ut(),
  eu = new md(1, 1),
  Td = new rd(),
  Ed = new am(),
  bd = new ud(),
  tu = [],
  nu = [],
  iu = new Float32Array(16),
  ru = new Float32Array(9),
  su = new Float32Array(4);
function is(s, e, t) {
  const n = s[0];
  if (n <= 0 || n > 0) return s;
  const i = e * t;
  let r = tu[i];
  if ((r === void 0 && ((r = new Float32Array(i)), (tu[i] = r)), e !== 0)) {
    n.toArray(r, 0);
    for (let a = 1, o = 0; a !== e; ++a) ((o += t), s[a].toArray(r, o));
  }
  return r;
}
function Ct(s, e) {
  if (s.length !== e.length) return !1;
  for (let t = 0, n = s.length; t < n; t++) if (s[t] !== e[t]) return !1;
  return !0;
}
function Pt(s, e) {
  for (let t = 0, n = e.length; t < n; t++) s[t] = e[t];
}
function Ya(s, e) {
  let t = nu[e];
  t === void 0 && ((t = new Int32Array(e)), (nu[e] = t));
  for (let n = 0; n !== e; ++n) t[n] = s.allocateTextureUnit();
  return t;
}
function px(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1f(this.addr, e), (t[0] = e));
}
function mx(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2f(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Ct(t, e)) return;
    (s.uniform2fv(this.addr, e), Pt(t, e));
  }
}
function _x(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3f(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else if (e.r !== void 0)
    (t[0] !== e.r || t[1] !== e.g || t[2] !== e.b) &&
      (s.uniform3f(this.addr, e.r, e.g, e.b),
      (t[0] = e.r),
      (t[1] = e.g),
      (t[2] = e.b));
  else {
    if (Ct(t, e)) return;
    (s.uniform3fv(this.addr, e), Pt(t, e));
  }
}
function gx(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4f(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Ct(t, e)) return;
    (s.uniform4fv(this.addr, e), Pt(t, e));
  }
}
function xx(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Ct(t, e)) return;
    (s.uniformMatrix2fv(this.addr, !1, e), Pt(t, e));
  } else {
    if (Ct(t, n)) return;
    (su.set(n), s.uniformMatrix2fv(this.addr, !1, su), Pt(t, n));
  }
}
function vx(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Ct(t, e)) return;
    (s.uniformMatrix3fv(this.addr, !1, e), Pt(t, e));
  } else {
    if (Ct(t, n)) return;
    (ru.set(n), s.uniformMatrix3fv(this.addr, !1, ru), Pt(t, n));
  }
}
function yx(s, e) {
  const t = this.cache,
    n = e.elements;
  if (n === void 0) {
    if (Ct(t, e)) return;
    (s.uniformMatrix4fv(this.addr, !1, e), Pt(t, e));
  } else {
    if (Ct(t, n)) return;
    (iu.set(n), s.uniformMatrix4fv(this.addr, !1, iu), Pt(t, n));
  }
}
function Mx(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1i(this.addr, e), (t[0] = e));
}
function Sx(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2i(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Ct(t, e)) return;
    (s.uniform2iv(this.addr, e), Pt(t, e));
  }
}
function Tx(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3i(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (Ct(t, e)) return;
    (s.uniform3iv(this.addr, e), Pt(t, e));
  }
}
function Ex(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4i(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Ct(t, e)) return;
    (s.uniform4iv(this.addr, e), Pt(t, e));
  }
}
function bx(s, e) {
  const t = this.cache;
  t[0] !== e && (s.uniform1ui(this.addr, e), (t[0] = e));
}
function Ax(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y) &&
      (s.uniform2ui(this.addr, e.x, e.y), (t[0] = e.x), (t[1] = e.y));
  else {
    if (Ct(t, e)) return;
    (s.uniform2uiv(this.addr, e), Pt(t, e));
  }
}
function wx(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z) &&
      (s.uniform3ui(this.addr, e.x, e.y, e.z),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z));
  else {
    if (Ct(t, e)) return;
    (s.uniform3uiv(this.addr, e), Pt(t, e));
  }
}
function Rx(s, e) {
  const t = this.cache;
  if (e.x !== void 0)
    (t[0] !== e.x || t[1] !== e.y || t[2] !== e.z || t[3] !== e.w) &&
      (s.uniform4ui(this.addr, e.x, e.y, e.z, e.w),
      (t[0] = e.x),
      (t[1] = e.y),
      (t[2] = e.z),
      (t[3] = e.w));
  else {
    if (Ct(t, e)) return;
    (s.uniform4uiv(this.addr, e), Pt(t, e));
  }
}
function Cx(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i));
  let r;
  (this.type === s.SAMPLER_2D_SHADOW
    ? ((eu.compareFunction = td), (r = eu))
    : (r = Sd),
    t.setTexture2D(e || r, i));
}
function Px(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  (n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture3D(e || Ed, i));
}
function Dx(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  (n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTextureCube(e || bd, i));
}
function Lx(s, e, t) {
  const n = this.cache,
    i = t.allocateTextureUnit();
  (n[0] !== i && (s.uniform1i(this.addr, i), (n[0] = i)),
    t.setTexture2DArray(e || Td, i));
}
function Ix(s) {
  switch (s) {
    case 5126:
      return px;
    case 35664:
      return mx;
    case 35665:
      return _x;
    case 35666:
      return gx;
    case 35674:
      return xx;
    case 35675:
      return vx;
    case 35676:
      return yx;
    case 5124:
    case 35670:
      return Mx;
    case 35667:
    case 35671:
      return Sx;
    case 35668:
    case 35672:
      return Tx;
    case 35669:
    case 35673:
      return Ex;
    case 5125:
      return bx;
    case 36294:
      return Ax;
    case 36295:
      return wx;
    case 36296:
      return Rx;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Cx;
    case 35679:
    case 36299:
    case 36307:
      return Px;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return Dx;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Lx;
  }
}
function Ux(s, e) {
  s.uniform1fv(this.addr, e);
}
function Nx(s, e) {
  const t = is(e, this.size, 2);
  s.uniform2fv(this.addr, t);
}
function Ox(s, e) {
  const t = is(e, this.size, 3);
  s.uniform3fv(this.addr, t);
}
function Fx(s, e) {
  const t = is(e, this.size, 4);
  s.uniform4fv(this.addr, t);
}
function Bx(s, e) {
  const t = is(e, this.size, 4);
  s.uniformMatrix2fv(this.addr, !1, t);
}
function kx(s, e) {
  const t = is(e, this.size, 9);
  s.uniformMatrix3fv(this.addr, !1, t);
}
function zx(s, e) {
  const t = is(e, this.size, 16);
  s.uniformMatrix4fv(this.addr, !1, t);
}
function Hx(s, e) {
  s.uniform1iv(this.addr, e);
}
function Vx(s, e) {
  s.uniform2iv(this.addr, e);
}
function Gx(s, e) {
  s.uniform3iv(this.addr, e);
}
function Wx(s, e) {
  s.uniform4iv(this.addr, e);
}
function Xx(s, e) {
  s.uniform1uiv(this.addr, e);
}
function Yx(s, e) {
  s.uniform2uiv(this.addr, e);
}
function qx(s, e) {
  s.uniform3uiv(this.addr, e);
}
function jx(s, e) {
  s.uniform4uiv(this.addr, e);
}
function Kx(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = Ya(t, i);
  Ct(n, r) || (s.uniform1iv(this.addr, r), Pt(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture2D(e[a] || Sd, r[a]);
}
function Zx(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = Ya(t, i);
  Ct(n, r) || (s.uniform1iv(this.addr, r), Pt(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture3D(e[a] || Ed, r[a]);
}
function $x(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = Ya(t, i);
  Ct(n, r) || (s.uniform1iv(this.addr, r), Pt(n, r));
  for (let a = 0; a !== i; ++a) t.setTextureCube(e[a] || bd, r[a]);
}
function Jx(s, e, t) {
  const n = this.cache,
    i = e.length,
    r = Ya(t, i);
  Ct(n, r) || (s.uniform1iv(this.addr, r), Pt(n, r));
  for (let a = 0; a !== i; ++a) t.setTexture2DArray(e[a] || Td, r[a]);
}
function Qx(s) {
  switch (s) {
    case 5126:
      return Ux;
    case 35664:
      return Nx;
    case 35665:
      return Ox;
    case 35666:
      return Fx;
    case 35674:
      return Bx;
    case 35675:
      return kx;
    case 35676:
      return zx;
    case 5124:
    case 35670:
      return Hx;
    case 35667:
    case 35671:
      return Vx;
    case 35668:
    case 35672:
      return Gx;
    case 35669:
    case 35673:
      return Wx;
    case 5125:
      return Xx;
    case 36294:
      return Yx;
    case 36295:
      return qx;
    case 36296:
      return jx;
    case 35678:
    case 36198:
    case 36298:
    case 36306:
    case 35682:
      return Kx;
    case 35679:
    case 36299:
    case 36307:
      return Zx;
    case 35680:
    case 36300:
    case 36308:
    case 36293:
      return $x;
    case 36289:
    case 36303:
    case 36311:
    case 36292:
      return Jx;
  }
}
class ev {
  constructor(e, t, n) {
    ((this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.setValue = Ix(t.type)));
  }
}
class tv {
  constructor(e, t, n) {
    ((this.id = e),
      (this.addr = n),
      (this.cache = []),
      (this.type = t.type),
      (this.size = t.size),
      (this.setValue = Qx(t.type)));
  }
}
class nv {
  constructor(e) {
    ((this.id = e), (this.seq = []), (this.map = {}));
  }
  setValue(e, t, n) {
    const i = this.seq;
    for (let r = 0, a = i.length; r !== a; ++r) {
      const o = i[r];
      o.setValue(e, t[o.id], n);
    }
  }
}
const Io = /(\w+)(\])?(\[|\.)?/g;
function au(s, e) {
  (s.seq.push(e), (s.map[e.id] = e));
}
function iv(s, e, t) {
  const n = s.name,
    i = n.length;
  for (Io.lastIndex = 0; ;) {
    const r = Io.exec(n),
      a = Io.lastIndex;
    let o = r[1];
    const l = r[2] === "]",
      c = r[3];
    if ((l && (o = o | 0), c === void 0 || (c === "[" && a + 2 === i))) {
      au(t, c === void 0 ? new ev(o, s, e) : new tv(o, s, e));
      break;
    } else {
      let u = t.map[o];
      (u === void 0 && ((u = new nv(o)), au(t, u)), (t = u));
    }
  }
}
class Aa {
  constructor(e, t) {
    ((this.seq = []), (this.map = {}));
    const n = e.getProgramParameter(t, e.ACTIVE_UNIFORMS);
    for (let i = 0; i < n; ++i) {
      const r = e.getActiveUniform(t, i),
        a = e.getUniformLocation(t, r.name);
      iv(r, a, this);
    }
  }
  setValue(e, t, n, i) {
    const r = this.map[t];
    r !== void 0 && r.setValue(e, n, i);
  }
  setOptional(e, t, n) {
    const i = t[n];
    i !== void 0 && this.setValue(e, n, i);
  }
  static upload(e, t, n, i) {
    for (let r = 0, a = t.length; r !== a; ++r) {
      const o = t[r],
        l = n[o.id];
      l.needsUpdate !== !1 && o.setValue(e, l.value, i);
    }
  }
  static seqWithValue(e, t) {
    const n = [];
    for (let i = 0, r = e.length; i !== r; ++i) {
      const a = e[i];
      a.id in t && n.push(a);
    }
    return n;
  }
}
function ou(s, e, t) {
  const n = s.createShader(e);
  return (s.shaderSource(n, t), s.compileShader(n), n);
}
const rv = 37297;
let sv = 0;
function av(s, e) {
  const t = s.split(`
`),
    n = [],
    i = Math.max(e - 6, 0),
    r = Math.min(e + 6, t.length);
  for (let a = i; a < r; a++) {
    const o = a + 1;
    n.push(`${o === e ? ">" : " "} ${o}: ${t[a]}`);
  }
  return n.join(`
`);
}
const lu = new Be();
function ov(s) {
  We._getMatrix(lu, We.workingColorSpace, s);
  const e = `mat3( ${lu.elements.map((t) => t.toFixed(4))} )`;
  switch (We.getTransfer(s)) {
    case Da:
      return [e, "LinearTransferOETF"];
    case et:
      return [e, "sRGBTransferOETF"];
    default:
      return (
        console.warn("THREE.WebGLProgram: Unsupported color space: ", s),
        [e, "LinearTransferOETF"]
      );
  }
}
function cu(s, e, t) {
  const n = s.getShaderParameter(e, s.COMPILE_STATUS),
    r = (s.getShaderInfoLog(e) || "").trim();
  if (n && r === "") return "";
  const a = /ERROR: 0:(\d+)/.exec(r);
  if (a) {
    const o = parseInt(a[1]);
    return (
      t.toUpperCase() +
      `

` +
      r +
      `

` +
      av(s.getShaderSource(e), o)
    );
  } else return r;
}
function lv(s, e) {
  const t = ov(e);
  return [
    `vec4 ${s}( vec4 value ) {`,
    `	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,
    "}",
  ].join(`
`);
}
function cv(s, e) {
  let t;
  switch (e) {
    case gp:
      t = "Linear";
      break;
    case xp:
      t = "Reinhard";
      break;
    case vp:
      t = "Cineon";
      break;
    case yp:
      t = "ACESFilmic";
      break;
    case Sp:
      t = "AgX";
      break;
    case Tp:
      t = "Neutral";
      break;
    case Mp:
      t = "Custom";
      break;
    default:
      (console.warn("THREE.WebGLProgram: Unsupported toneMapping:", e),
        (t = "Linear"));
  }
  return (
    "vec3 " + s + "( vec3 color ) { return " + t + "ToneMapping( color ); }"
  );
}
const _a = new L();
function hv() {
  We.getLuminanceCoefficients(_a);
  const s = _a.x.toFixed(4),
    e = _a.y.toFixed(4),
    t = _a.z.toFixed(4);
  return [
    "float luminance( const in vec3 rgb ) {",
    `	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,
    "	return dot( weights, rgb );",
    "}",
  ].join(`
`);
}
function uv(s) {
  return [
    s.extensionClipCullDistance
      ? "#extension GL_ANGLE_clip_cull_distance : require"
      : "",
    s.extensionMultiDraw ? "#extension GL_ANGLE_multi_draw : require" : "",
  ].filter(_s).join(`
`);
}
function dv(s) {
  const e = [];
  for (const t in s) {
    const n = s[t];
    n !== !1 && e.push("#define " + t + " " + n);
  }
  return e.join(`
`);
}
function fv(s, e) {
  const t = {},
    n = s.getProgramParameter(e, s.ACTIVE_ATTRIBUTES);
  for (let i = 0; i < n; i++) {
    const r = s.getActiveAttrib(e, i),
      a = r.name;
    let o = 1;
    (r.type === s.FLOAT_MAT2 && (o = 2),
      r.type === s.FLOAT_MAT3 && (o = 3),
      r.type === s.FLOAT_MAT4 && (o = 4),
      (t[a] = {
        type: r.type,
        location: s.getAttribLocation(e, a),
        locationSize: o,
      }));
  }
  return t;
}
function _s(s) {
  return s !== "";
}
function hu(s, e) {
  const t =
    e.numSpotLightShadows + e.numSpotLightMaps - e.numSpotLightShadowsWithMaps;
  return s
    .replace(/NUM_DIR_LIGHTS/g, e.numDirLights)
    .replace(/NUM_SPOT_LIGHTS/g, e.numSpotLights)
    .replace(/NUM_SPOT_LIGHT_MAPS/g, e.numSpotLightMaps)
    .replace(/NUM_SPOT_LIGHT_COORDS/g, t)
    .replace(/NUM_RECT_AREA_LIGHTS/g, e.numRectAreaLights)
    .replace(/NUM_POINT_LIGHTS/g, e.numPointLights)
    .replace(/NUM_HEMI_LIGHTS/g, e.numHemiLights)
    .replace(/NUM_DIR_LIGHT_SHADOWS/g, e.numDirLightShadows)
    .replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g, e.numSpotLightShadowsWithMaps)
    .replace(/NUM_SPOT_LIGHT_SHADOWS/g, e.numSpotLightShadows)
    .replace(/NUM_POINT_LIGHT_SHADOWS/g, e.numPointLightShadows);
}
function uu(s, e) {
  return s
    .replace(/NUM_CLIPPING_PLANES/g, e.numClippingPlanes)
    .replace(
      /UNION_CLIPPING_PLANES/g,
      e.numClippingPlanes - e.numClipIntersection,
    );
}
const pv = /^[ \t]*#include +<([\w\d./]+)>/gm;
function Nl(s) {
  return s.replace(pv, _v);
}
const mv = new Map();
function _v(s, e) {
  let t = Le[e];
  if (t === void 0) {
    const n = mv.get(e);
    if (n !== void 0)
      ((t = Le[n]),
        console.warn(
          'THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',
          e,
          n,
        ));
    else throw new Error("Can not resolve #include <" + e + ">");
  }
  return Nl(t);
}
const gv =
  /#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;
function du(s) {
  return s.replace(gv, xv);
}
function xv(s, e, t, n) {
  let i = "";
  for (let r = parseInt(e); r < parseInt(t); r++)
    i += n
      .replace(/\[\s*i\s*\]/g, "[ " + r + " ]")
      .replace(/UNROLLED_LOOP_INDEX/g, r);
  return i;
}
function fu(s) {
  let e = `precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;
  return (
    s.precision === "highp"
      ? (e += `
#define HIGH_PRECISION`)
      : s.precision === "mediump"
        ? (e += `
#define MEDIUM_PRECISION`)
        : s.precision === "lowp" &&
          (e += `
#define LOW_PRECISION`),
    e
  );
}
function vv(s) {
  let e = "SHADOWMAP_TYPE_BASIC";
  return (
    s.shadowMapType === Yu
      ? (e = "SHADOWMAP_TYPE_PCF")
      : s.shadowMapType === Zf
        ? (e = "SHADOWMAP_TYPE_PCF_SOFT")
        : s.shadowMapType === ei && (e = "SHADOWMAP_TYPE_VSM"),
    e
  );
}
function yv(s) {
  let e = "ENVMAP_TYPE_CUBE";
  if (s.envMap)
    switch (s.envMapMode) {
      case kr:
      case zr:
        e = "ENVMAP_TYPE_CUBE";
        break;
      case Ga:
        e = "ENVMAP_TYPE_CUBE_UV";
        break;
    }
  return e;
}
function Mv(s) {
  let e = "ENVMAP_MODE_REFLECTION";
  if (s.envMap)
    switch (s.envMapMode) {
      case zr:
        e = "ENVMAP_MODE_REFRACTION";
        break;
    }
  return e;
}
function Sv(s) {
  let e = "ENVMAP_BLENDING_NONE";
  if (s.envMap)
    switch (s.combine) {
      case qu:
        e = "ENVMAP_BLENDING_MULTIPLY";
        break;
      case mp:
        e = "ENVMAP_BLENDING_MIX";
        break;
      case _p:
        e = "ENVMAP_BLENDING_ADD";
        break;
    }
  return e;
}
function Tv(s) {
  const e = s.envMapCubeUVHeight;
  if (e === null) return null;
  const t = Math.log2(e) - 2,
    n = 1 / e;
  return {
    texelWidth: 1 / (3 * Math.max(Math.pow(2, t), 112)),
    texelHeight: n,
    maxMip: t,
  };
}
function Ev(s, e, t, n) {
  const i = s.getContext(),
    r = t.defines;
  let a = t.vertexShader,
    o = t.fragmentShader;
  const l = vv(t),
    c = yv(t),
    h = Mv(t),
    u = Sv(t),
    d = Tv(t),
    f = uv(t),
    g = dv(r),
    _ = i.createProgram();
  let m,
    p,
    S = t.glslVersion
      ? "#version " +
        t.glslVersion +
        `
`
      : "";
  (t.isRawShaderMaterial
    ? ((m = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
      ].filter(_s).join(`
`)),
      m.length > 0 &&
        (m += `
`),
      (p = [
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
      ].filter(_s).join(`
`)),
      p.length > 0 &&
        (p += `
`))
    : ((m = [
        fu(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.extensionClipCullDistance ? "#define USE_CLIP_DISTANCE" : "",
        t.batching ? "#define USE_BATCHING" : "",
        t.batchingColor ? "#define USE_BATCHING_COLOR" : "",
        t.instancing ? "#define USE_INSTANCING" : "",
        t.instancingColor ? "#define USE_INSTANCING_COLOR" : "",
        t.instancingMorph ? "#define USE_INSTANCING_MORPH" : "",
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.map ? "#define USE_MAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + h : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.displacementMap ? "#define USE_DISPLACEMENTMAP" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.mapUv ? "#define MAP_UV " + t.mapUv : "",
        t.alphaMapUv ? "#define ALPHAMAP_UV " + t.alphaMapUv : "",
        t.lightMapUv ? "#define LIGHTMAP_UV " + t.lightMapUv : "",
        t.aoMapUv ? "#define AOMAP_UV " + t.aoMapUv : "",
        t.emissiveMapUv ? "#define EMISSIVEMAP_UV " + t.emissiveMapUv : "",
        t.bumpMapUv ? "#define BUMPMAP_UV " + t.bumpMapUv : "",
        t.normalMapUv ? "#define NORMALMAP_UV " + t.normalMapUv : "",
        t.displacementMapUv
          ? "#define DISPLACEMENTMAP_UV " + t.displacementMapUv
          : "",
        t.metalnessMapUv ? "#define METALNESSMAP_UV " + t.metalnessMapUv : "",
        t.roughnessMapUv ? "#define ROUGHNESSMAP_UV " + t.roughnessMapUv : "",
        t.anisotropyMapUv
          ? "#define ANISOTROPYMAP_UV " + t.anisotropyMapUv
          : "",
        t.clearcoatMapUv ? "#define CLEARCOATMAP_UV " + t.clearcoatMapUv : "",
        t.clearcoatNormalMapUv
          ? "#define CLEARCOAT_NORMALMAP_UV " + t.clearcoatNormalMapUv
          : "",
        t.clearcoatRoughnessMapUv
          ? "#define CLEARCOAT_ROUGHNESSMAP_UV " + t.clearcoatRoughnessMapUv
          : "",
        t.iridescenceMapUv
          ? "#define IRIDESCENCEMAP_UV " + t.iridescenceMapUv
          : "",
        t.iridescenceThicknessMapUv
          ? "#define IRIDESCENCE_THICKNESSMAP_UV " + t.iridescenceThicknessMapUv
          : "",
        t.sheenColorMapUv
          ? "#define SHEEN_COLORMAP_UV " + t.sheenColorMapUv
          : "",
        t.sheenRoughnessMapUv
          ? "#define SHEEN_ROUGHNESSMAP_UV " + t.sheenRoughnessMapUv
          : "",
        t.specularMapUv ? "#define SPECULARMAP_UV " + t.specularMapUv : "",
        t.specularColorMapUv
          ? "#define SPECULAR_COLORMAP_UV " + t.specularColorMapUv
          : "",
        t.specularIntensityMapUv
          ? "#define SPECULAR_INTENSITYMAP_UV " + t.specularIntensityMapUv
          : "",
        t.transmissionMapUv
          ? "#define TRANSMISSIONMAP_UV " + t.transmissionMapUv
          : "",
        t.thicknessMapUv ? "#define THICKNESSMAP_UV " + t.thicknessMapUv : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors ? "#define USE_COLOR" : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.skinning ? "#define USE_SKINNING" : "",
        t.morphTargets ? "#define USE_MORPHTARGETS" : "",
        t.morphNormals && t.flatShading === !1
          ? "#define USE_MORPHNORMALS"
          : "",
        t.morphColors ? "#define USE_MORPHCOLORS" : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_TEXTURE_STRIDE " + t.morphTextureStride
          : "",
        t.morphTargetsCount > 0
          ? "#define MORPHTARGETS_COUNT " + t.morphTargetsCount
          : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.sizeAttenuation ? "#define USE_SIZEATTENUATION" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.reversedDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
        "uniform mat4 modelMatrix;",
        "uniform mat4 modelViewMatrix;",
        "uniform mat4 projectionMatrix;",
        "uniform mat4 viewMatrix;",
        "uniform mat3 normalMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        "#ifdef USE_INSTANCING",
        "	attribute mat4 instanceMatrix;",
        "#endif",
        "#ifdef USE_INSTANCING_COLOR",
        "	attribute vec3 instanceColor;",
        "#endif",
        "#ifdef USE_INSTANCING_MORPH",
        "	uniform sampler2D morphTexture;",
        "#endif",
        "attribute vec3 position;",
        "attribute vec3 normal;",
        "attribute vec2 uv;",
        "#ifdef USE_UV1",
        "	attribute vec2 uv1;",
        "#endif",
        "#ifdef USE_UV2",
        "	attribute vec2 uv2;",
        "#endif",
        "#ifdef USE_UV3",
        "	attribute vec2 uv3;",
        "#endif",
        "#ifdef USE_TANGENT",
        "	attribute vec4 tangent;",
        "#endif",
        "#if defined( USE_COLOR_ALPHA )",
        "	attribute vec4 color;",
        "#elif defined( USE_COLOR )",
        "	attribute vec3 color;",
        "#endif",
        "#ifdef USE_SKINNING",
        "	attribute vec4 skinIndex;",
        "	attribute vec4 skinWeight;",
        "#endif",
        `
`,
      ].filter(_s).join(`
`)),
      (p = [
        fu(t),
        "#define SHADER_TYPE " + t.shaderType,
        "#define SHADER_NAME " + t.shaderName,
        g,
        t.useFog && t.fog ? "#define USE_FOG" : "",
        t.useFog && t.fogExp2 ? "#define FOG_EXP2" : "",
        t.alphaToCoverage ? "#define ALPHA_TO_COVERAGE" : "",
        t.map ? "#define USE_MAP" : "",
        t.matcap ? "#define USE_MATCAP" : "",
        t.envMap ? "#define USE_ENVMAP" : "",
        t.envMap ? "#define " + c : "",
        t.envMap ? "#define " + h : "",
        t.envMap ? "#define " + u : "",
        d ? "#define CUBEUV_TEXEL_WIDTH " + d.texelWidth : "",
        d ? "#define CUBEUV_TEXEL_HEIGHT " + d.texelHeight : "",
        d ? "#define CUBEUV_MAX_MIP " + d.maxMip + ".0" : "",
        t.lightMap ? "#define USE_LIGHTMAP" : "",
        t.aoMap ? "#define USE_AOMAP" : "",
        t.bumpMap ? "#define USE_BUMPMAP" : "",
        t.normalMap ? "#define USE_NORMALMAP" : "",
        t.normalMapObjectSpace ? "#define USE_NORMALMAP_OBJECTSPACE" : "",
        t.normalMapTangentSpace ? "#define USE_NORMALMAP_TANGENTSPACE" : "",
        t.emissiveMap ? "#define USE_EMISSIVEMAP" : "",
        t.anisotropy ? "#define USE_ANISOTROPY" : "",
        t.anisotropyMap ? "#define USE_ANISOTROPYMAP" : "",
        t.clearcoat ? "#define USE_CLEARCOAT" : "",
        t.clearcoatMap ? "#define USE_CLEARCOATMAP" : "",
        t.clearcoatRoughnessMap ? "#define USE_CLEARCOAT_ROUGHNESSMAP" : "",
        t.clearcoatNormalMap ? "#define USE_CLEARCOAT_NORMALMAP" : "",
        t.dispersion ? "#define USE_DISPERSION" : "",
        t.iridescence ? "#define USE_IRIDESCENCE" : "",
        t.iridescenceMap ? "#define USE_IRIDESCENCEMAP" : "",
        t.iridescenceThicknessMap ? "#define USE_IRIDESCENCE_THICKNESSMAP" : "",
        t.specularMap ? "#define USE_SPECULARMAP" : "",
        t.specularColorMap ? "#define USE_SPECULAR_COLORMAP" : "",
        t.specularIntensityMap ? "#define USE_SPECULAR_INTENSITYMAP" : "",
        t.roughnessMap ? "#define USE_ROUGHNESSMAP" : "",
        t.metalnessMap ? "#define USE_METALNESSMAP" : "",
        t.alphaMap ? "#define USE_ALPHAMAP" : "",
        t.alphaTest ? "#define USE_ALPHATEST" : "",
        t.alphaHash ? "#define USE_ALPHAHASH" : "",
        t.sheen ? "#define USE_SHEEN" : "",
        t.sheenColorMap ? "#define USE_SHEEN_COLORMAP" : "",
        t.sheenRoughnessMap ? "#define USE_SHEEN_ROUGHNESSMAP" : "",
        t.transmission ? "#define USE_TRANSMISSION" : "",
        t.transmissionMap ? "#define USE_TRANSMISSIONMAP" : "",
        t.thicknessMap ? "#define USE_THICKNESSMAP" : "",
        t.vertexTangents && t.flatShading === !1 ? "#define USE_TANGENT" : "",
        t.vertexColors || t.instancingColor || t.batchingColor
          ? "#define USE_COLOR"
          : "",
        t.vertexAlphas ? "#define USE_COLOR_ALPHA" : "",
        t.vertexUv1s ? "#define USE_UV1" : "",
        t.vertexUv2s ? "#define USE_UV2" : "",
        t.vertexUv3s ? "#define USE_UV3" : "",
        t.pointsUvs ? "#define USE_POINTS_UV" : "",
        t.gradientMap ? "#define USE_GRADIENTMAP" : "",
        t.flatShading ? "#define FLAT_SHADED" : "",
        t.doubleSided ? "#define DOUBLE_SIDED" : "",
        t.flipSided ? "#define FLIP_SIDED" : "",
        t.shadowMapEnabled ? "#define USE_SHADOWMAP" : "",
        t.shadowMapEnabled ? "#define " + l : "",
        t.premultipliedAlpha ? "#define PREMULTIPLIED_ALPHA" : "",
        t.numLightProbes > 0 ? "#define USE_LIGHT_PROBES" : "",
        t.decodeVideoTexture ? "#define DECODE_VIDEO_TEXTURE" : "",
        t.decodeVideoTextureEmissive
          ? "#define DECODE_VIDEO_TEXTURE_EMISSIVE"
          : "",
        t.logarithmicDepthBuffer ? "#define USE_LOGDEPTHBUF" : "",
        t.reversedDepthBuffer ? "#define USE_REVERSEDEPTHBUF" : "",
        "uniform mat4 viewMatrix;",
        "uniform vec3 cameraPosition;",
        "uniform bool isOrthographic;",
        t.toneMapping !== Ai ? "#define TONE_MAPPING" : "",
        t.toneMapping !== Ai ? Le.tonemapping_pars_fragment : "",
        t.toneMapping !== Ai ? cv("toneMapping", t.toneMapping) : "",
        t.dithering ? "#define DITHERING" : "",
        t.opaque ? "#define OPAQUE" : "",
        Le.colorspace_pars_fragment,
        lv("linearToOutputTexel", t.outputColorSpace),
        hv(),
        t.useDepthPacking ? "#define DEPTH_PACKING " + t.depthPacking : "",
        `
`,
      ].filter(_s).join(`
`))),
    (a = Nl(a)),
    (a = hu(a, t)),
    (a = uu(a, t)),
    (o = Nl(o)),
    (o = hu(o, t)),
    (o = uu(o, t)),
    (a = du(a)),
    (o = du(o)),
    t.isRawShaderMaterial !== !0 &&
      ((S = `#version 300 es
`),
      (m =
        [
          f,
          "#define attribute in",
          "#define varying out",
          "#define texture2D texture",
        ].join(`
`) +
        `
` +
        m),
      (p =
        [
          "#define varying in",
          t.glslVersion === ah
            ? ""
            : "layout(location = 0) out highp vec4 pc_fragColor;",
          t.glslVersion === ah ? "" : "#define gl_FragColor pc_fragColor",
          "#define gl_FragDepthEXT gl_FragDepth",
          "#define texture2D texture",
          "#define textureCube texture",
          "#define texture2DProj textureProj",
          "#define texture2DLodEXT textureLod",
          "#define texture2DProjLodEXT textureProjLod",
          "#define textureCubeLodEXT textureLod",
          "#define texture2DGradEXT textureGrad",
          "#define texture2DProjGradEXT textureProjGrad",
          "#define textureCubeGradEXT textureGrad",
        ].join(`
`) +
        `
` +
        p)));
  const M = S + m + a,
    v = S + p + o,
    b = ou(i, i.VERTEX_SHADER, M),
    A = ou(i, i.FRAGMENT_SHADER, v);
  (i.attachShader(_, b),
    i.attachShader(_, A),
    t.index0AttributeName !== void 0
      ? i.bindAttribLocation(_, 0, t.index0AttributeName)
      : t.morphTargets === !0 && i.bindAttribLocation(_, 0, "position"),
    i.linkProgram(_));
  function w(P) {
    if (s.debug.checkShaderErrors) {
      const V = i.getProgramInfoLog(_) || "",
        F = i.getShaderInfoLog(b) || "",
        z = i.getShaderInfoLog(A) || "",
        q = V.trim(),
        G = F.trim(),
        K = z.trim();
      let H = !0,
        re = !0;
      if (i.getProgramParameter(_, i.LINK_STATUS) === !1)
        if (((H = !1), typeof s.debug.onShaderError == "function"))
          s.debug.onShaderError(i, _, b, A);
        else {
          const ae = cu(i, b, "vertex"),
            _e = cu(i, A, "fragment");
          console.error(
            "THREE.WebGLProgram: Shader Error " +
              i.getError() +
              " - VALIDATE_STATUS " +
              i.getProgramParameter(_, i.VALIDATE_STATUS) +
              `

Material Name: ` +
              P.name +
              `
Material Type: ` +
              P.type +
              `

Program Info Log: ` +
              q +
              `
` +
              ae +
              `
` +
              _e,
          );
        }
      else
        q !== ""
          ? console.warn("THREE.WebGLProgram: Program Info Log:", q)
          : (G === "" || K === "") && (re = !1);
      re &&
        (P.diagnostics = {
          runnable: H,
          programLog: q,
          vertexShader: { log: G, prefix: m },
          fragmentShader: { log: K, prefix: p },
        });
    }
    (i.deleteShader(b), i.deleteShader(A), (C = new Aa(i, _)), (x = fv(i, _)));
  }
  let C;
  this.getUniforms = function () {
    return (C === void 0 && w(this), C);
  };
  let x;
  this.getAttributes = function () {
    return (x === void 0 && w(this), x);
  };
  let E = t.rendererExtensionParallelShaderCompile === !1;
  return (
    (this.isReady = function () {
      return (E === !1 && (E = i.getProgramParameter(_, rv)), E);
    }),
    (this.destroy = function () {
      (n.releaseStatesOfProgram(this),
        i.deleteProgram(_),
        (this.program = void 0));
    }),
    (this.type = t.shaderType),
    (this.name = t.shaderName),
    (this.id = sv++),
    (this.cacheKey = e),
    (this.usedTimes = 1),
    (this.program = _),
    (this.vertexShader = b),
    (this.fragmentShader = A),
    this
  );
}
let bv = 0;
class Av {
  constructor() {
    ((this.shaderCache = new Map()), (this.materialCache = new Map()));
  }
  update(e) {
    const t = e.vertexShader,
      n = e.fragmentShader,
      i = this._getShaderStage(t),
      r = this._getShaderStage(n),
      a = this._getShaderCacheForMaterial(e);
    return (
      a.has(i) === !1 && (a.add(i), i.usedTimes++),
      a.has(r) === !1 && (a.add(r), r.usedTimes++),
      this
    );
  }
  remove(e) {
    const t = this.materialCache.get(e);
    for (const n of t)
      (n.usedTimes--, n.usedTimes === 0 && this.shaderCache.delete(n.code));
    return (this.materialCache.delete(e), this);
  }
  getVertexShaderID(e) {
    return this._getShaderStage(e.vertexShader).id;
  }
  getFragmentShaderID(e) {
    return this._getShaderStage(e.fragmentShader).id;
  }
  dispose() {
    (this.shaderCache.clear(), this.materialCache.clear());
  }
  _getShaderCacheForMaterial(e) {
    const t = this.materialCache;
    let n = t.get(e);
    return (n === void 0 && ((n = new Set()), t.set(e, n)), n);
  }
  _getShaderStage(e) {
    const t = this.shaderCache;
    let n = t.get(e);
    return (n === void 0 && ((n = new wv(e)), t.set(e, n)), n);
  }
}
class wv {
  constructor(e) {
    ((this.id = bv++), (this.code = e), (this.usedTimes = 0));
  }
}
function Rv(s, e, t, n, i, r, a) {
  const o = new uc(),
    l = new Av(),
    c = new Set(),
    h = [],
    u = i.logarithmicDepthBuffer,
    d = i.vertexTextures;
  let f = i.precision;
  const g = {
    MeshDepthMaterial: "depth",
    MeshDistanceMaterial: "distanceRGBA",
    MeshNormalMaterial: "normal",
    MeshBasicMaterial: "basic",
    MeshLambertMaterial: "lambert",
    MeshPhongMaterial: "phong",
    MeshToonMaterial: "toon",
    MeshStandardMaterial: "physical",
    MeshPhysicalMaterial: "physical",
    MeshMatcapMaterial: "matcap",
    LineBasicMaterial: "basic",
    LineDashedMaterial: "dashed",
    PointsMaterial: "points",
    ShadowMaterial: "shadow",
    SpriteMaterial: "sprite",
  };
  function _(x) {
    return (c.add(x), x === 0 ? "uv" : `uv${x}`);
  }
  function m(x, E, P, V, F) {
    const z = V.fog,
      q = F.geometry,
      G = x.isMeshStandardMaterial ? V.environment : null,
      K = (x.isMeshStandardMaterial ? t : e).get(x.envMap || G),
      H = K && K.mapping === Ga ? K.image.height : null,
      re = g[x.type];
    x.precision !== null &&
      ((f = i.getMaxPrecision(x.precision)),
      f !== x.precision &&
        console.warn(
          "THREE.WebGLProgram.getParameters:",
          x.precision,
          "not supported, using",
          f,
          "instead.",
        ));
    const ae =
        q.morphAttributes.position ||
        q.morphAttributes.normal ||
        q.morphAttributes.color,
      _e = ae !== void 0 ? ae.length : 0;
    let Pe = 0;
    (q.morphAttributes.position !== void 0 && (Pe = 1),
      q.morphAttributes.normal !== void 0 && (Pe = 2),
      q.morphAttributes.color !== void 0 && (Pe = 3));
    let nt, He, W, oe;
    if (re) {
      const Ze = Cn[re];
      ((nt = Ze.vertexShader), (He = Ze.fragmentShader));
    } else
      ((nt = x.vertexShader),
        (He = x.fragmentShader),
        l.update(x),
        (W = l.getVertexShaderID(x)),
        (oe = l.getFragmentShaderID(x)));
    const ne = s.getRenderTarget(),
      be = s.state.buffers.depth.getReversed(),
      Ae = F.isInstancedMesh === !0,
      Ue = F.isBatchedMesh === !0,
      vt = !!x.map,
      Ye = !!x.matcap,
      D = !!K,
      at = !!x.aoMap,
      Te = !!x.lightMap,
      je = !!x.bumpMap,
      Me = !!x.normalMap,
      ct = !!x.displacementMap,
      fe = !!x.emissiveMap,
      ke = !!x.metalnessMap,
      Dt = !!x.roughnessMap,
      yt = x.anisotropy > 0,
      R = x.clearcoat > 0,
      y = x.dispersion > 0,
      O = x.iridescence > 0,
      Y = x.sheen > 0,
      Z = x.transmission > 0,
      X = yt && !!x.anisotropyMap,
      ye = R && !!x.clearcoatMap,
      te = R && !!x.clearcoatNormalMap,
      ge = R && !!x.clearcoatRoughnessMap,
      xe = O && !!x.iridescenceMap,
      Q = O && !!x.iridescenceThicknessMap,
      he = Y && !!x.sheenColorMap,
      Ce = Y && !!x.sheenRoughnessMap,
      ve = !!x.specularMap,
      le = !!x.specularColorMap,
      Fe = !!x.specularIntensityMap,
      I = Z && !!x.transmissionMap,
      ee = Z && !!x.thicknessMap,
      ie = !!x.gradientMap,
      de = !!x.alphaMap,
      $ = x.alphaTest > 0,
      j = !!x.alphaHash,
      me = !!x.extensions;
    let Ne = Ai;
    x.toneMapped &&
      (ne === null || ne.isXRRenderTarget === !0) &&
      (Ne = s.toneMapping);
    const ot = {
      shaderID: re,
      shaderType: x.type,
      shaderName: x.name,
      vertexShader: nt,
      fragmentShader: He,
      defines: x.defines,
      customVertexShaderID: W,
      customFragmentShaderID: oe,
      isRawShaderMaterial: x.isRawShaderMaterial === !0,
      glslVersion: x.glslVersion,
      precision: f,
      batching: Ue,
      batchingColor: Ue && F._colorsTexture !== null,
      instancing: Ae,
      instancingColor: Ae && F.instanceColor !== null,
      instancingMorph: Ae && F.morphTexture !== null,
      supportsVertexTextures: d,
      outputColorSpace:
        ne === null
          ? s.outputColorSpace
          : ne.isXRRenderTarget === !0
            ? ne.texture.colorSpace
            : Rt,
      alphaToCoverage: !!x.alphaToCoverage,
      map: vt,
      matcap: Ye,
      envMap: D,
      envMapMode: D && K.mapping,
      envMapCubeUVHeight: H,
      aoMap: at,
      lightMap: Te,
      bumpMap: je,
      normalMap: Me,
      displacementMap: d && ct,
      emissiveMap: fe,
      normalMapObjectSpace: Me && x.normalMapType === Cp,
      normalMapTangentSpace: Me && x.normalMapType === lc,
      metalnessMap: ke,
      roughnessMap: Dt,
      anisotropy: yt,
      anisotropyMap: X,
      clearcoat: R,
      clearcoatMap: ye,
      clearcoatNormalMap: te,
      clearcoatRoughnessMap: ge,
      dispersion: y,
      iridescence: O,
      iridescenceMap: xe,
      iridescenceThicknessMap: Q,
      sheen: Y,
      sheenColorMap: he,
      sheenRoughnessMap: Ce,
      specularMap: ve,
      specularColorMap: le,
      specularIntensityMap: Fe,
      transmission: Z,
      transmissionMap: I,
      thicknessMap: ee,
      gradientMap: ie,
      opaque:
        x.transparent === !1 && x.blending === Pr && x.alphaToCoverage === !1,
      alphaMap: de,
      alphaTest: $,
      alphaHash: j,
      combine: x.combine,
      mapUv: vt && _(x.map.channel),
      aoMapUv: at && _(x.aoMap.channel),
      lightMapUv: Te && _(x.lightMap.channel),
      bumpMapUv: je && _(x.bumpMap.channel),
      normalMapUv: Me && _(x.normalMap.channel),
      displacementMapUv: ct && _(x.displacementMap.channel),
      emissiveMapUv: fe && _(x.emissiveMap.channel),
      metalnessMapUv: ke && _(x.metalnessMap.channel),
      roughnessMapUv: Dt && _(x.roughnessMap.channel),
      anisotropyMapUv: X && _(x.anisotropyMap.channel),
      clearcoatMapUv: ye && _(x.clearcoatMap.channel),
      clearcoatNormalMapUv: te && _(x.clearcoatNormalMap.channel),
      clearcoatRoughnessMapUv: ge && _(x.clearcoatRoughnessMap.channel),
      iridescenceMapUv: xe && _(x.iridescenceMap.channel),
      iridescenceThicknessMapUv: Q && _(x.iridescenceThicknessMap.channel),
      sheenColorMapUv: he && _(x.sheenColorMap.channel),
      sheenRoughnessMapUv: Ce && _(x.sheenRoughnessMap.channel),
      specularMapUv: ve && _(x.specularMap.channel),
      specularColorMapUv: le && _(x.specularColorMap.channel),
      specularIntensityMapUv: Fe && _(x.specularIntensityMap.channel),
      transmissionMapUv: I && _(x.transmissionMap.channel),
      thicknessMapUv: ee && _(x.thicknessMap.channel),
      alphaMapUv: de && _(x.alphaMap.channel),
      vertexTangents: !!q.attributes.tangent && (Me || yt),
      vertexColors: x.vertexColors,
      vertexAlphas:
        x.vertexColors === !0 &&
        !!q.attributes.color &&
        q.attributes.color.itemSize === 4,
      pointsUvs: F.isPoints === !0 && !!q.attributes.uv && (vt || de),
      fog: !!z,
      useFog: x.fog === !0,
      fogExp2: !!z && z.isFogExp2,
      flatShading: x.flatShading === !0 && x.wireframe === !1,
      sizeAttenuation: x.sizeAttenuation === !0,
      logarithmicDepthBuffer: u,
      reversedDepthBuffer: be,
      skinning: F.isSkinnedMesh === !0,
      morphTargets: q.morphAttributes.position !== void 0,
      morphNormals: q.morphAttributes.normal !== void 0,
      morphColors: q.morphAttributes.color !== void 0,
      morphTargetsCount: _e,
      morphTextureStride: Pe,
      numDirLights: E.directional.length,
      numPointLights: E.point.length,
      numSpotLights: E.spot.length,
      numSpotLightMaps: E.spotLightMap.length,
      numRectAreaLights: E.rectArea.length,
      numHemiLights: E.hemi.length,
      numDirLightShadows: E.directionalShadowMap.length,
      numPointLightShadows: E.pointShadowMap.length,
      numSpotLightShadows: E.spotShadowMap.length,
      numSpotLightShadowsWithMaps: E.numSpotLightShadowsWithMaps,
      numLightProbes: E.numLightProbes,
      numClippingPlanes: a.numPlanes,
      numClipIntersection: a.numIntersection,
      dithering: x.dithering,
      shadowMapEnabled: s.shadowMap.enabled && P.length > 0,
      shadowMapType: s.shadowMap.type,
      toneMapping: Ne,
      decodeVideoTexture:
        vt &&
        x.map.isVideoTexture === !0 &&
        We.getTransfer(x.map.colorSpace) === et,
      decodeVideoTextureEmissive:
        fe &&
        x.emissiveMap.isVideoTexture === !0 &&
        We.getTransfer(x.emissiveMap.colorSpace) === et,
      premultipliedAlpha: x.premultipliedAlpha,
      doubleSided: x.side === Fn,
      flipSided: x.side === Jt,
      useDepthPacking: x.depthPacking >= 0,
      depthPacking: x.depthPacking || 0,
      index0AttributeName: x.index0AttributeName,
      extensionClipCullDistance:
        me &&
        x.extensions.clipCullDistance === !0 &&
        n.has("WEBGL_clip_cull_distance"),
      extensionMultiDraw:
        ((me && x.extensions.multiDraw === !0) || Ue) &&
        n.has("WEBGL_multi_draw"),
      rendererExtensionParallelShaderCompile: n.has(
        "KHR_parallel_shader_compile",
      ),
      customProgramCacheKey: x.customProgramCacheKey(),
    };
    return (
      (ot.vertexUv1s = c.has(1)),
      (ot.vertexUv2s = c.has(2)),
      (ot.vertexUv3s = c.has(3)),
      c.clear(),
      ot
    );
  }
  function p(x) {
    const E = [];
    if (
      (x.shaderID
        ? E.push(x.shaderID)
        : (E.push(x.customVertexShaderID), E.push(x.customFragmentShaderID)),
      x.defines !== void 0)
    )
      for (const P in x.defines) (E.push(P), E.push(x.defines[P]));
    return (
      x.isRawShaderMaterial === !1 &&
        (S(E, x), M(E, x), E.push(s.outputColorSpace)),
      E.push(x.customProgramCacheKey),
      E.join()
    );
  }
  function S(x, E) {
    (x.push(E.precision),
      x.push(E.outputColorSpace),
      x.push(E.envMapMode),
      x.push(E.envMapCubeUVHeight),
      x.push(E.mapUv),
      x.push(E.alphaMapUv),
      x.push(E.lightMapUv),
      x.push(E.aoMapUv),
      x.push(E.bumpMapUv),
      x.push(E.normalMapUv),
      x.push(E.displacementMapUv),
      x.push(E.emissiveMapUv),
      x.push(E.metalnessMapUv),
      x.push(E.roughnessMapUv),
      x.push(E.anisotropyMapUv),
      x.push(E.clearcoatMapUv),
      x.push(E.clearcoatNormalMapUv),
      x.push(E.clearcoatRoughnessMapUv),
      x.push(E.iridescenceMapUv),
      x.push(E.iridescenceThicknessMapUv),
      x.push(E.sheenColorMapUv),
      x.push(E.sheenRoughnessMapUv),
      x.push(E.specularMapUv),
      x.push(E.specularColorMapUv),
      x.push(E.specularIntensityMapUv),
      x.push(E.transmissionMapUv),
      x.push(E.thicknessMapUv),
      x.push(E.combine),
      x.push(E.fogExp2),
      x.push(E.sizeAttenuation),
      x.push(E.morphTargetsCount),
      x.push(E.morphAttributeCount),
      x.push(E.numDirLights),
      x.push(E.numPointLights),
      x.push(E.numSpotLights),
      x.push(E.numSpotLightMaps),
      x.push(E.numHemiLights),
      x.push(E.numRectAreaLights),
      x.push(E.numDirLightShadows),
      x.push(E.numPointLightShadows),
      x.push(E.numSpotLightShadows),
      x.push(E.numSpotLightShadowsWithMaps),
      x.push(E.numLightProbes),
      x.push(E.shadowMapType),
      x.push(E.toneMapping),
      x.push(E.numClippingPlanes),
      x.push(E.numClipIntersection),
      x.push(E.depthPacking));
  }
  function M(x, E) {
    (o.disableAll(),
      E.supportsVertexTextures && o.enable(0),
      E.instancing && o.enable(1),
      E.instancingColor && o.enable(2),
      E.instancingMorph && o.enable(3),
      E.matcap && o.enable(4),
      E.envMap && o.enable(5),
      E.normalMapObjectSpace && o.enable(6),
      E.normalMapTangentSpace && o.enable(7),
      E.clearcoat && o.enable(8),
      E.iridescence && o.enable(9),
      E.alphaTest && o.enable(10),
      E.vertexColors && o.enable(11),
      E.vertexAlphas && o.enable(12),
      E.vertexUv1s && o.enable(13),
      E.vertexUv2s && o.enable(14),
      E.vertexUv3s && o.enable(15),
      E.vertexTangents && o.enable(16),
      E.anisotropy && o.enable(17),
      E.alphaHash && o.enable(18),
      E.batching && o.enable(19),
      E.dispersion && o.enable(20),
      E.batchingColor && o.enable(21),
      E.gradientMap && o.enable(22),
      x.push(o.mask),
      o.disableAll(),
      E.fog && o.enable(0),
      E.useFog && o.enable(1),
      E.flatShading && o.enable(2),
      E.logarithmicDepthBuffer && o.enable(3),
      E.reversedDepthBuffer && o.enable(4),
      E.skinning && o.enable(5),
      E.morphTargets && o.enable(6),
      E.morphNormals && o.enable(7),
      E.morphColors && o.enable(8),
      E.premultipliedAlpha && o.enable(9),
      E.shadowMapEnabled && o.enable(10),
      E.doubleSided && o.enable(11),
      E.flipSided && o.enable(12),
      E.useDepthPacking && o.enable(13),
      E.dithering && o.enable(14),
      E.transmission && o.enable(15),
      E.sheen && o.enable(16),
      E.opaque && o.enable(17),
      E.pointsUvs && o.enable(18),
      E.decodeVideoTexture && o.enable(19),
      E.decodeVideoTextureEmissive && o.enable(20),
      E.alphaToCoverage && o.enable(21),
      x.push(o.mask));
  }
  function v(x) {
    const E = g[x.type];
    let P;
    if (E) {
      const V = Cn[E];
      P = cd.clone(V.uniforms);
    } else P = x.uniforms;
    return P;
  }
  function b(x, E) {
    let P;
    for (let V = 0, F = h.length; V < F; V++) {
      const z = h[V];
      if (z.cacheKey === E) {
        ((P = z), ++P.usedTimes);
        break;
      }
    }
    return (P === void 0 && ((P = new Ev(s, E, x, r)), h.push(P)), P);
  }
  function A(x) {
    if (--x.usedTimes === 0) {
      const E = h.indexOf(x);
      ((h[E] = h[h.length - 1]), h.pop(), x.destroy());
    }
  }
  function w(x) {
    l.remove(x);
  }
  function C() {
    l.dispose();
  }
  return {
    getParameters: m,
    getProgramCacheKey: p,
    getUniforms: v,
    acquireProgram: b,
    releaseProgram: A,
    releaseShaderCache: w,
    programs: h,
    dispose: C,
  };
}
function Cv() {
  let s = new WeakMap();
  function e(a) {
    return s.has(a);
  }
  function t(a) {
    let o = s.get(a);
    return (o === void 0 && ((o = {}), s.set(a, o)), o);
  }
  function n(a) {
    s.delete(a);
  }
  function i(a, o, l) {
    s.get(a)[o] = l;
  }
  function r() {
    s = new WeakMap();
  }
  return { has: e, get: t, remove: n, update: i, dispose: r };
}
function Pv(s, e) {
  return s.groupOrder !== e.groupOrder
    ? s.groupOrder - e.groupOrder
    : s.renderOrder !== e.renderOrder
      ? s.renderOrder - e.renderOrder
      : s.material.id !== e.material.id
        ? s.material.id - e.material.id
        : s.z !== e.z
          ? s.z - e.z
          : s.id - e.id;
}
function pu(s, e) {
  return s.groupOrder !== e.groupOrder
    ? s.groupOrder - e.groupOrder
    : s.renderOrder !== e.renderOrder
      ? s.renderOrder - e.renderOrder
      : s.z !== e.z
        ? e.z - s.z
        : s.id - e.id;
}
function mu() {
  const s = [];
  let e = 0;
  const t = [],
    n = [],
    i = [];
  function r() {
    ((e = 0), (t.length = 0), (n.length = 0), (i.length = 0));
  }
  function a(u, d, f, g, _, m) {
    let p = s[e];
    return (
      p === void 0
        ? ((p = {
            id: u.id,
            object: u,
            geometry: d,
            material: f,
            groupOrder: g,
            renderOrder: u.renderOrder,
            z: _,
            group: m,
          }),
          (s[e] = p))
        : ((p.id = u.id),
          (p.object = u),
          (p.geometry = d),
          (p.material = f),
          (p.groupOrder = g),
          (p.renderOrder = u.renderOrder),
          (p.z = _),
          (p.group = m)),
      e++,
      p
    );
  }
  function o(u, d, f, g, _, m) {
    const p = a(u, d, f, g, _, m);
    f.transmission > 0
      ? n.push(p)
      : f.transparent === !0
        ? i.push(p)
        : t.push(p);
  }
  function l(u, d, f, g, _, m) {
    const p = a(u, d, f, g, _, m);
    f.transmission > 0
      ? n.unshift(p)
      : f.transparent === !0
        ? i.unshift(p)
        : t.unshift(p);
  }
  function c(u, d) {
    (t.length > 1 && t.sort(u || Pv),
      n.length > 1 && n.sort(d || pu),
      i.length > 1 && i.sort(d || pu));
  }
  function h() {
    for (let u = e, d = s.length; u < d; u++) {
      const f = s[u];
      if (f.id === null) break;
      ((f.id = null),
        (f.object = null),
        (f.geometry = null),
        (f.material = null),
        (f.group = null));
    }
  }
  return {
    opaque: t,
    transmissive: n,
    transparent: i,
    init: r,
    push: o,
    unshift: l,
    finish: h,
    sort: c,
  };
}
function Dv() {
  let s = new WeakMap();
  function e(n, i) {
    const r = s.get(n);
    let a;
    return (
      r === void 0
        ? ((a = new mu()), s.set(n, [a]))
        : i >= r.length
          ? ((a = new mu()), r.push(a))
          : (a = r[i]),
      a
    );
  }
  function t() {
    s = new WeakMap();
  }
  return { get: e, dispose: t };
}
function Lv() {
  const s = {};
  return {
    get: function (e) {
      if (s[e.id] !== void 0) return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = { direction: new L(), color: new Ie() };
          break;
        case "SpotLight":
          t = {
            position: new L(),
            direction: new L(),
            color: new Ie(),
            distance: 0,
            coneCos: 0,
            penumbraCos: 0,
            decay: 0,
          };
          break;
        case "PointLight":
          t = { position: new L(), color: new Ie(), distance: 0, decay: 0 };
          break;
        case "HemisphereLight":
          t = { direction: new L(), skyColor: new Ie(), groundColor: new Ie() };
          break;
        case "RectAreaLight":
          t = {
            color: new Ie(),
            position: new L(),
            halfWidth: new L(),
            halfHeight: new L(),
          };
          break;
      }
      return ((s[e.id] = t), t);
    },
  };
}
function Iv() {
  const s = {};
  return {
    get: function (e) {
      if (s[e.id] !== void 0) return s[e.id];
      let t;
      switch (e.type) {
        case "DirectionalLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Re(),
          };
          break;
        case "SpotLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Re(),
          };
          break;
        case "PointLight":
          t = {
            shadowIntensity: 1,
            shadowBias: 0,
            shadowNormalBias: 0,
            shadowRadius: 1,
            shadowMapSize: new Re(),
            shadowCameraNear: 1,
            shadowCameraFar: 1e3,
          };
          break;
      }
      return ((s[e.id] = t), t);
    },
  };
}
let Uv = 0;
function Nv(s, e) {
  return (
    (e.castShadow ? 2 : 0) -
    (s.castShadow ? 2 : 0) +
    (e.map ? 1 : 0) -
    (s.map ? 1 : 0)
  );
}
function Ov(s) {
  const e = new Lv(),
    t = Iv(),
    n = {
      version: 0,
      hash: {
        directionalLength: -1,
        pointLength: -1,
        spotLength: -1,
        rectAreaLength: -1,
        hemiLength: -1,
        numDirectionalShadows: -1,
        numPointShadows: -1,
        numSpotShadows: -1,
        numSpotMaps: -1,
        numLightProbes: -1,
      },
      ambient: [0, 0, 0],
      probe: [],
      directional: [],
      directionalShadow: [],
      directionalShadowMap: [],
      directionalShadowMatrix: [],
      spot: [],
      spotLightMap: [],
      spotShadow: [],
      spotShadowMap: [],
      spotLightMatrix: [],
      rectArea: [],
      rectAreaLTC1: null,
      rectAreaLTC2: null,
      point: [],
      pointShadow: [],
      pointShadowMap: [],
      pointShadowMatrix: [],
      hemi: [],
      numSpotLightShadowsWithMaps: 0,
      numLightProbes: 0,
    };
  for (let c = 0; c < 9; c++) n.probe.push(new L());
  const i = new L(),
    r = new Oe(),
    a = new Oe();
  function o(c) {
    let h = 0,
      u = 0,
      d = 0;
    for (let x = 0; x < 9; x++) n.probe[x].set(0, 0, 0);
    let f = 0,
      g = 0,
      _ = 0,
      m = 0,
      p = 0,
      S = 0,
      M = 0,
      v = 0,
      b = 0,
      A = 0,
      w = 0;
    c.sort(Nv);
    for (let x = 0, E = c.length; x < E; x++) {
      const P = c[x],
        V = P.color,
        F = P.intensity,
        z = P.distance,
        q = P.shadow && P.shadow.map ? P.shadow.map.texture : null;
      if (P.isAmbientLight) ((h += V.r * F), (u += V.g * F), (d += V.b * F));
      else if (P.isLightProbe) {
        for (let G = 0; G < 9; G++)
          n.probe[G].addScaledVector(P.sh.coefficients[G], F);
        w++;
      } else if (P.isDirectionalLight) {
        const G = e.get(P);
        if ((G.color.copy(P.color).multiplyScalar(P.intensity), P.castShadow)) {
          const K = P.shadow,
            H = t.get(P);
          ((H.shadowIntensity = K.intensity),
            (H.shadowBias = K.bias),
            (H.shadowNormalBias = K.normalBias),
            (H.shadowRadius = K.radius),
            (H.shadowMapSize = K.mapSize),
            (n.directionalShadow[f] = H),
            (n.directionalShadowMap[f] = q),
            (n.directionalShadowMatrix[f] = P.shadow.matrix),
            S++);
        }
        ((n.directional[f] = G), f++);
      } else if (P.isSpotLight) {
        const G = e.get(P);
        (G.position.setFromMatrixPosition(P.matrixWorld),
          G.color.copy(V).multiplyScalar(F),
          (G.distance = z),
          (G.coneCos = Math.cos(P.angle)),
          (G.penumbraCos = Math.cos(P.angle * (1 - P.penumbra))),
          (G.decay = P.decay),
          (n.spot[_] = G));
        const K = P.shadow;
        if (
          (P.map &&
            ((n.spotLightMap[b] = P.map),
            b++,
            K.updateMatrices(P),
            P.castShadow && A++),
          (n.spotLightMatrix[_] = K.matrix),
          P.castShadow)
        ) {
          const H = t.get(P);
          ((H.shadowIntensity = K.intensity),
            (H.shadowBias = K.bias),
            (H.shadowNormalBias = K.normalBias),
            (H.shadowRadius = K.radius),
            (H.shadowMapSize = K.mapSize),
            (n.spotShadow[_] = H),
            (n.spotShadowMap[_] = q),
            v++);
        }
        _++;
      } else if (P.isRectAreaLight) {
        const G = e.get(P);
        (G.color.copy(V).multiplyScalar(F),
          G.halfWidth.set(P.width * 0.5, 0, 0),
          G.halfHeight.set(0, P.height * 0.5, 0),
          (n.rectArea[m] = G),
          m++);
      } else if (P.isPointLight) {
        const G = e.get(P);
        if (
          (G.color.copy(P.color).multiplyScalar(P.intensity),
          (G.distance = P.distance),
          (G.decay = P.decay),
          P.castShadow)
        ) {
          const K = P.shadow,
            H = t.get(P);
          ((H.shadowIntensity = K.intensity),
            (H.shadowBias = K.bias),
            (H.shadowNormalBias = K.normalBias),
            (H.shadowRadius = K.radius),
            (H.shadowMapSize = K.mapSize),
            (H.shadowCameraNear = K.camera.near),
            (H.shadowCameraFar = K.camera.far),
            (n.pointShadow[g] = H),
            (n.pointShadowMap[g] = q),
            (n.pointShadowMatrix[g] = P.shadow.matrix),
            M++);
        }
        ((n.point[g] = G), g++);
      } else if (P.isHemisphereLight) {
        const G = e.get(P);
        (G.skyColor.copy(P.color).multiplyScalar(F),
          G.groundColor.copy(P.groundColor).multiplyScalar(F),
          (n.hemi[p] = G),
          p++);
      }
    }
    (m > 0 &&
      (s.has("OES_texture_float_linear") === !0
        ? ((n.rectAreaLTC1 = se.LTC_FLOAT_1), (n.rectAreaLTC2 = se.LTC_FLOAT_2))
        : ((n.rectAreaLTC1 = se.LTC_HALF_1), (n.rectAreaLTC2 = se.LTC_HALF_2))),
      (n.ambient[0] = h),
      (n.ambient[1] = u),
      (n.ambient[2] = d));
    const C = n.hash;
    (C.directionalLength !== f ||
      C.pointLength !== g ||
      C.spotLength !== _ ||
      C.rectAreaLength !== m ||
      C.hemiLength !== p ||
      C.numDirectionalShadows !== S ||
      C.numPointShadows !== M ||
      C.numSpotShadows !== v ||
      C.numSpotMaps !== b ||
      C.numLightProbes !== w) &&
      ((n.directional.length = f),
      (n.spot.length = _),
      (n.rectArea.length = m),
      (n.point.length = g),
      (n.hemi.length = p),
      (n.directionalShadow.length = S),
      (n.directionalShadowMap.length = S),
      (n.pointShadow.length = M),
      (n.pointShadowMap.length = M),
      (n.spotShadow.length = v),
      (n.spotShadowMap.length = v),
      (n.directionalShadowMatrix.length = S),
      (n.pointShadowMatrix.length = M),
      (n.spotLightMatrix.length = v + b - A),
      (n.spotLightMap.length = b),
      (n.numSpotLightShadowsWithMaps = A),
      (n.numLightProbes = w),
      (C.directionalLength = f),
      (C.pointLength = g),
      (C.spotLength = _),
      (C.rectAreaLength = m),
      (C.hemiLength = p),
      (C.numDirectionalShadows = S),
      (C.numPointShadows = M),
      (C.numSpotShadows = v),
      (C.numSpotMaps = b),
      (C.numLightProbes = w),
      (n.version = Uv++));
  }
  function l(c, h) {
    let u = 0,
      d = 0,
      f = 0,
      g = 0,
      _ = 0;
    const m = h.matrixWorldInverse;
    for (let p = 0, S = c.length; p < S; p++) {
      const M = c[p];
      if (M.isDirectionalLight) {
        const v = n.directional[u];
        (v.direction.setFromMatrixPosition(M.matrixWorld),
          i.setFromMatrixPosition(M.target.matrixWorld),
          v.direction.sub(i),
          v.direction.transformDirection(m),
          u++);
      } else if (M.isSpotLight) {
        const v = n.spot[f];
        (v.position.setFromMatrixPosition(M.matrixWorld),
          v.position.applyMatrix4(m),
          v.direction.setFromMatrixPosition(M.matrixWorld),
          i.setFromMatrixPosition(M.target.matrixWorld),
          v.direction.sub(i),
          v.direction.transformDirection(m),
          f++);
      } else if (M.isRectAreaLight) {
        const v = n.rectArea[g];
        (v.position.setFromMatrixPosition(M.matrixWorld),
          v.position.applyMatrix4(m),
          a.identity(),
          r.copy(M.matrixWorld),
          r.premultiply(m),
          a.extractRotation(r),
          v.halfWidth.set(M.width * 0.5, 0, 0),
          v.halfHeight.set(0, M.height * 0.5, 0),
          v.halfWidth.applyMatrix4(a),
          v.halfHeight.applyMatrix4(a),
          g++);
      } else if (M.isPointLight) {
        const v = n.point[d];
        (v.position.setFromMatrixPosition(M.matrixWorld),
          v.position.applyMatrix4(m),
          d++);
      } else if (M.isHemisphereLight) {
        const v = n.hemi[_];
        (v.direction.setFromMatrixPosition(M.matrixWorld),
          v.direction.transformDirection(m),
          _++);
      }
    }
  }
  return { setup: o, setupView: l, state: n };
}
function _u(s) {
  const e = new Ov(s),
    t = [],
    n = [];
  function i(h) {
    ((c.camera = h), (t.length = 0), (n.length = 0));
  }
  function r(h) {
    t.push(h);
  }
  function a(h) {
    n.push(h);
  }
  function o() {
    e.setup(t);
  }
  function l(h) {
    e.setupView(t, h);
  }
  const c = {
    lightsArray: t,
    shadowsArray: n,
    camera: null,
    lights: e,
    transmissionRenderTarget: {},
  };
  return {
    init: i,
    state: c,
    setupLights: o,
    setupLightsView: l,
    pushLight: r,
    pushShadow: a,
  };
}
function Fv(s) {
  let e = new WeakMap();
  function t(i, r = 0) {
    const a = e.get(i);
    let o;
    return (
      a === void 0
        ? ((o = new _u(s)), e.set(i, [o]))
        : r >= a.length
          ? ((o = new _u(s)), a.push(o))
          : (o = a[r]),
      o
    );
  }
  function n() {
    e = new WeakMap();
  }
  return { get: t, dispose: n };
}
const Bv = `void main() {
	gl_Position = vec4( position, 1.0 );
}`,
  kv = `uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;
function zv(s, e, t) {
  let n = new mc();
  const i = new Re(),
    r = new Re(),
    a = new Ke(),
    o = new Fm({ depthPacking: Rp }),
    l = new Bm(),
    c = {},
    h = t.maxTextureSize,
    u = { [li]: Jt, [Jt]: li, [Fn]: Fn },
    d = new Gn({
      defines: { VSM_SAMPLES: 8 },
      uniforms: {
        shadow_pass: { value: null },
        resolution: { value: new Re() },
        radius: { value: 4 },
      },
      vertexShader: Bv,
      fragmentShader: kv,
    }),
    f = d.clone();
  f.defines.HORIZONTAL_PASS = 1;
  const g = new bn();
  g.setAttribute(
    "position",
    new Ut(new Float32Array([-1, -1, 0.5, 3, -1, 0.5, -1, 3, 0.5]), 3),
  );
  const _ = new Yt(g, d),
    m = this;
  ((this.enabled = !1),
    (this.autoUpdate = !0),
    (this.needsUpdate = !1),
    (this.type = Yu));
  let p = this.type;
  this.render = function (A, w, C) {
    if (
      m.enabled === !1 ||
      (m.autoUpdate === !1 && m.needsUpdate === !1) ||
      A.length === 0
    )
      return;
    const x = s.getRenderTarget(),
      E = s.getActiveCubeFace(),
      P = s.getActiveMipmapLevel(),
      V = s.state;
    (V.setBlending(ai),
      V.buffers.depth.getReversed()
        ? V.buffers.color.setClear(0, 0, 0, 0)
        : V.buffers.color.setClear(1, 1, 1, 1),
      V.buffers.depth.setTest(!0),
      V.setScissorTest(!1));
    const F = p !== ei && this.type === ei,
      z = p === ei && this.type !== ei;
    for (let q = 0, G = A.length; q < G; q++) {
      const K = A[q],
        H = K.shadow;
      if (H === void 0) {
        console.warn("THREE.WebGLShadowMap:", K, "has no shadow.");
        continue;
      }
      if (H.autoUpdate === !1 && H.needsUpdate === !1) continue;
      i.copy(H.mapSize);
      const re = H.getFrameExtents();
      if (
        (i.multiply(re),
        r.copy(H.mapSize),
        (i.x > h || i.y > h) &&
          (i.x > h &&
            ((r.x = Math.floor(h / re.x)),
            (i.x = r.x * re.x),
            (H.mapSize.x = r.x)),
          i.y > h &&
            ((r.y = Math.floor(h / re.y)),
            (i.y = r.y * re.y),
            (H.mapSize.y = r.y))),
        H.map === null || F === !0 || z === !0)
      ) {
        const _e = this.type !== ei ? { minFilter: qt, magFilter: qt } : {};
        (H.map !== null && H.map.dispose(),
          (H.map = new ci(i.x, i.y, _e)),
          (H.map.texture.name = K.name + ".shadowMap"),
          H.camera.updateProjectionMatrix());
      }
      (s.setRenderTarget(H.map), s.clear());
      const ae = H.getViewportCount();
      for (let _e = 0; _e < ae; _e++) {
        const Pe = H.getViewport(_e);
        (a.set(r.x * Pe.x, r.y * Pe.y, r.x * Pe.z, r.y * Pe.w),
          V.viewport(a),
          H.updateMatrices(K, _e),
          (n = H.getFrustum()),
          v(w, C, H.camera, K, this.type));
      }
      (H.isPointLightShadow !== !0 && this.type === ei && S(H, C),
        (H.needsUpdate = !1));
    }
    ((p = this.type), (m.needsUpdate = !1), s.setRenderTarget(x, E, P));
  };
  function S(A, w) {
    const C = e.update(_);
    (d.defines.VSM_SAMPLES !== A.blurSamples &&
      ((d.defines.VSM_SAMPLES = A.blurSamples),
      (f.defines.VSM_SAMPLES = A.blurSamples),
      (d.needsUpdate = !0),
      (f.needsUpdate = !0)),
      A.mapPass === null && (A.mapPass = new ci(i.x, i.y)),
      (d.uniforms.shadow_pass.value = A.map.texture),
      (d.uniforms.resolution.value = A.mapSize),
      (d.uniforms.radius.value = A.radius),
      s.setRenderTarget(A.mapPass),
      s.clear(),
      s.renderBufferDirect(w, null, C, d, _, null),
      (f.uniforms.shadow_pass.value = A.mapPass.texture),
      (f.uniforms.resolution.value = A.mapSize),
      (f.uniforms.radius.value = A.radius),
      s.setRenderTarget(A.map),
      s.clear(),
      s.renderBufferDirect(w, null, C, f, _, null));
  }
  function M(A, w, C, x) {
    let E = null;
    const P =
      C.isPointLight === !0 ? A.customDistanceMaterial : A.customDepthMaterial;
    if (P !== void 0) E = P;
    else if (
      ((E = C.isPointLight === !0 ? l : o),
      (s.localClippingEnabled &&
        w.clipShadows === !0 &&
        Array.isArray(w.clippingPlanes) &&
        w.clippingPlanes.length !== 0) ||
        (w.displacementMap && w.displacementScale !== 0) ||
        (w.alphaMap && w.alphaTest > 0) ||
        (w.map && w.alphaTest > 0) ||
        w.alphaToCoverage === !0)
    ) {
      const V = E.uuid,
        F = w.uuid;
      let z = c[V];
      z === void 0 && ((z = {}), (c[V] = z));
      let q = z[F];
      (q === void 0 &&
        ((q = E.clone()), (z[F] = q), w.addEventListener("dispose", b)),
        (E = q));
    }
    if (
      ((E.visible = w.visible),
      (E.wireframe = w.wireframe),
      x === ei
        ? (E.side = w.shadowSide !== null ? w.shadowSide : w.side)
        : (E.side = w.shadowSide !== null ? w.shadowSide : u[w.side]),
      (E.alphaMap = w.alphaMap),
      (E.alphaTest = w.alphaToCoverage === !0 ? 0.5 : w.alphaTest),
      (E.map = w.map),
      (E.clipShadows = w.clipShadows),
      (E.clippingPlanes = w.clippingPlanes),
      (E.clipIntersection = w.clipIntersection),
      (E.displacementMap = w.displacementMap),
      (E.displacementScale = w.displacementScale),
      (E.displacementBias = w.displacementBias),
      (E.wireframeLinewidth = w.wireframeLinewidth),
      (E.linewidth = w.linewidth),
      C.isPointLight === !0 && E.isMeshDistanceMaterial === !0)
    ) {
      const V = s.properties.get(E);
      V.light = C;
    }
    return E;
  }
  function v(A, w, C, x, E) {
    if (A.visible === !1) return;
    if (
      A.layers.test(w.layers) &&
      (A.isMesh || A.isLine || A.isPoints) &&
      (A.castShadow || (A.receiveShadow && E === ei)) &&
      (!A.frustumCulled || n.intersectsObject(A))
    ) {
      A.modelViewMatrix.multiplyMatrices(C.matrixWorldInverse, A.matrixWorld);
      const F = e.update(A),
        z = A.material;
      if (Array.isArray(z)) {
        const q = F.groups;
        for (let G = 0, K = q.length; G < K; G++) {
          const H = q[G],
            re = z[H.materialIndex];
          if (re && re.visible) {
            const ae = M(A, re, x, E);
            (A.onBeforeShadow(s, A, w, C, F, ae, H),
              s.renderBufferDirect(C, null, F, ae, A, H),
              A.onAfterShadow(s, A, w, C, F, ae, H));
          }
        }
      } else if (z.visible) {
        const q = M(A, z, x, E);
        (A.onBeforeShadow(s, A, w, C, F, q, null),
          s.renderBufferDirect(C, null, F, q, A, null),
          A.onAfterShadow(s, A, w, C, F, q, null));
      }
    }
    const V = A.children;
    for (let F = 0, z = V.length; F < z; F++) v(V[F], w, C, x, E);
  }
  function b(A) {
    A.target.removeEventListener("dispose", b);
    for (const C in c) {
      const x = c[C],
        E = A.target.uuid;
      E in x && (x[E].dispose(), delete x[E]);
    }
  }
}
const Hv = {
  [Ko]: Zo,
  [$o]: el,
  [Jo]: tl,
  [Fr]: Qo,
  [Zo]: Ko,
  [el]: $o,
  [tl]: Jo,
  [Qo]: Fr,
};
function Vv(s, e) {
  function t() {
    let I = !1;
    const ee = new Ke();
    let ie = null;
    const de = new Ke(0, 0, 0, 0);
    return {
      setMask: function ($) {
        ie !== $ && !I && (s.colorMask($, $, $, $), (ie = $));
      },
      setLocked: function ($) {
        I = $;
      },
      setClear: function ($, j, me, Ne, ot) {
        (ot === !0 && (($ *= Ne), (j *= Ne), (me *= Ne)),
          ee.set($, j, me, Ne),
          de.equals(ee) === !1 && (s.clearColor($, j, me, Ne), de.copy(ee)));
      },
      reset: function () {
        ((I = !1), (ie = null), de.set(-1, 0, 0, 0));
      },
    };
  }
  function n() {
    let I = !1,
      ee = !1,
      ie = null,
      de = null,
      $ = null;
    return {
      setReversed: function (j) {
        if (ee !== j) {
          const me = e.get("EXT_clip_control");
          (j
            ? me.clipControlEXT(me.LOWER_LEFT_EXT, me.ZERO_TO_ONE_EXT)
            : me.clipControlEXT(me.LOWER_LEFT_EXT, me.NEGATIVE_ONE_TO_ONE_EXT),
            (ee = j));
          const Ne = $;
          (($ = null), this.setClear(Ne));
        }
      },
      getReversed: function () {
        return ee;
      },
      setTest: function (j) {
        j ? ne(s.DEPTH_TEST) : be(s.DEPTH_TEST);
      },
      setMask: function (j) {
        ie !== j && !I && (s.depthMask(j), (ie = j));
      },
      setFunc: function (j) {
        if ((ee && (j = Hv[j]), de !== j)) {
          switch (j) {
            case Ko:
              s.depthFunc(s.NEVER);
              break;
            case Zo:
              s.depthFunc(s.ALWAYS);
              break;
            case $o:
              s.depthFunc(s.LESS);
              break;
            case Fr:
              s.depthFunc(s.LEQUAL);
              break;
            case Jo:
              s.depthFunc(s.EQUAL);
              break;
            case Qo:
              s.depthFunc(s.GEQUAL);
              break;
            case el:
              s.depthFunc(s.GREATER);
              break;
            case tl:
              s.depthFunc(s.NOTEQUAL);
              break;
            default:
              s.depthFunc(s.LEQUAL);
          }
          de = j;
        }
      },
      setLocked: function (j) {
        I = j;
      },
      setClear: function (j) {
        $ !== j && (ee && (j = 1 - j), s.clearDepth(j), ($ = j));
      },
      reset: function () {
        ((I = !1), (ie = null), (de = null), ($ = null), (ee = !1));
      },
    };
  }
  function i() {
    let I = !1,
      ee = null,
      ie = null,
      de = null,
      $ = null,
      j = null,
      me = null,
      Ne = null,
      ot = null;
    return {
      setTest: function (Ze) {
        I || (Ze ? ne(s.STENCIL_TEST) : be(s.STENCIL_TEST));
      },
      setMask: function (Ze) {
        ee !== Ze && !I && (s.stencilMask(Ze), (ee = Ze));
      },
      setFunc: function (Ze, qn, Nn) {
        (ie !== Ze || de !== qn || $ !== Nn) &&
          (s.stencilFunc(Ze, qn, Nn), (ie = Ze), (de = qn), ($ = Nn));
      },
      setOp: function (Ze, qn, Nn) {
        (j !== Ze || me !== qn || Ne !== Nn) &&
          (s.stencilOp(Ze, qn, Nn), (j = Ze), (me = qn), (Ne = Nn));
      },
      setLocked: function (Ze) {
        I = Ze;
      },
      setClear: function (Ze) {
        ot !== Ze && (s.clearStencil(Ze), (ot = Ze));
      },
      reset: function () {
        ((I = !1),
          (ee = null),
          (ie = null),
          (de = null),
          ($ = null),
          (j = null),
          (me = null),
          (Ne = null),
          (ot = null));
      },
    };
  }
  const r = new t(),
    a = new n(),
    o = new i(),
    l = new WeakMap(),
    c = new WeakMap();
  let h = {},
    u = {},
    d = new WeakMap(),
    f = [],
    g = null,
    _ = !1,
    m = null,
    p = null,
    S = null,
    M = null,
    v = null,
    b = null,
    A = null,
    w = new Ie(0, 0, 0),
    C = 0,
    x = !1,
    E = null,
    P = null,
    V = null,
    F = null,
    z = null;
  const q = s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);
  let G = !1,
    K = 0;
  const H = s.getParameter(s.VERSION);
  H.indexOf("WebGL") !== -1
    ? ((K = parseFloat(/^WebGL (\d)/.exec(H)[1])), (G = K >= 1))
    : H.indexOf("OpenGL ES") !== -1 &&
      ((K = parseFloat(/^OpenGL ES (\d)/.exec(H)[1])), (G = K >= 2));
  let re = null,
    ae = {};
  const _e = s.getParameter(s.SCISSOR_BOX),
    Pe = s.getParameter(s.VIEWPORT),
    nt = new Ke().fromArray(_e),
    He = new Ke().fromArray(Pe);
  function W(I, ee, ie, de) {
    const $ = new Uint8Array(4),
      j = s.createTexture();
    (s.bindTexture(I, j),
      s.texParameteri(I, s.TEXTURE_MIN_FILTER, s.NEAREST),
      s.texParameteri(I, s.TEXTURE_MAG_FILTER, s.NEAREST));
    for (let me = 0; me < ie; me++)
      I === s.TEXTURE_3D || I === s.TEXTURE_2D_ARRAY
        ? s.texImage3D(ee, 0, s.RGBA, 1, 1, de, 0, s.RGBA, s.UNSIGNED_BYTE, $)
        : s.texImage2D(ee + me, 0, s.RGBA, 1, 1, 0, s.RGBA, s.UNSIGNED_BYTE, $);
    return j;
  }
  const oe = {};
  ((oe[s.TEXTURE_2D] = W(s.TEXTURE_2D, s.TEXTURE_2D, 1)),
    (oe[s.TEXTURE_CUBE_MAP] = W(
      s.TEXTURE_CUBE_MAP,
      s.TEXTURE_CUBE_MAP_POSITIVE_X,
      6,
    )),
    (oe[s.TEXTURE_2D_ARRAY] = W(s.TEXTURE_2D_ARRAY, s.TEXTURE_2D_ARRAY, 1, 1)),
    (oe[s.TEXTURE_3D] = W(s.TEXTURE_3D, s.TEXTURE_3D, 1, 1)),
    r.setClear(0, 0, 0, 1),
    a.setClear(1),
    o.setClear(0),
    ne(s.DEPTH_TEST),
    a.setFunc(Fr),
    je(!1),
    Me(Zc),
    ne(s.CULL_FACE),
    at(ai));
  function ne(I) {
    h[I] !== !0 && (s.enable(I), (h[I] = !0));
  }
  function be(I) {
    h[I] !== !1 && (s.disable(I), (h[I] = !1));
  }
  function Ae(I, ee) {
    return u[I] !== ee
      ? (s.bindFramebuffer(I, ee),
        (u[I] = ee),
        I === s.DRAW_FRAMEBUFFER && (u[s.FRAMEBUFFER] = ee),
        I === s.FRAMEBUFFER && (u[s.DRAW_FRAMEBUFFER] = ee),
        !0)
      : !1;
  }
  function Ue(I, ee) {
    let ie = f,
      de = !1;
    if (I) {
      ((ie = d.get(ee)), ie === void 0 && ((ie = []), d.set(ee, ie)));
      const $ = I.textures;
      if (ie.length !== $.length || ie[0] !== s.COLOR_ATTACHMENT0) {
        for (let j = 0, me = $.length; j < me; j++)
          ie[j] = s.COLOR_ATTACHMENT0 + j;
        ((ie.length = $.length), (de = !0));
      }
    } else ie[0] !== s.BACK && ((ie[0] = s.BACK), (de = !0));
    de && s.drawBuffers(ie);
  }
  function vt(I) {
    return g !== I ? (s.useProgram(I), (g = I), !0) : !1;
  }
  const Ye = {
    [ji]: s.FUNC_ADD,
    [Jf]: s.FUNC_SUBTRACT,
    [Qf]: s.FUNC_REVERSE_SUBTRACT,
  };
  ((Ye[ep] = s.MIN), (Ye[tp] = s.MAX));
  const D = {
    [np]: s.ZERO,
    [ip]: s.ONE,
    [rp]: s.SRC_COLOR,
    [qo]: s.SRC_ALPHA,
    [hp]: s.SRC_ALPHA_SATURATE,
    [lp]: s.DST_COLOR,
    [ap]: s.DST_ALPHA,
    [sp]: s.ONE_MINUS_SRC_COLOR,
    [jo]: s.ONE_MINUS_SRC_ALPHA,
    [cp]: s.ONE_MINUS_DST_COLOR,
    [op]: s.ONE_MINUS_DST_ALPHA,
    [up]: s.CONSTANT_COLOR,
    [dp]: s.ONE_MINUS_CONSTANT_COLOR,
    [fp]: s.CONSTANT_ALPHA,
    [pp]: s.ONE_MINUS_CONSTANT_ALPHA,
  };
  function at(I, ee, ie, de, $, j, me, Ne, ot, Ze) {
    if (I === ai) {
      _ === !0 && (be(s.BLEND), (_ = !1));
      return;
    }
    if ((_ === !1 && (ne(s.BLEND), (_ = !0)), I !== $f)) {
      if (I !== m || Ze !== x) {
        if (
          ((p !== ji || v !== ji) &&
            (s.blendEquation(s.FUNC_ADD), (p = ji), (v = ji)),
          Ze)
        )
          switch (I) {
            case Pr:
              s.blendFuncSeparate(
                s.ONE,
                s.ONE_MINUS_SRC_ALPHA,
                s.ONE,
                s.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case $c:
              s.blendFunc(s.ONE, s.ONE);
              break;
            case Jc:
              s.blendFuncSeparate(s.ZERO, s.ONE_MINUS_SRC_COLOR, s.ZERO, s.ONE);
              break;
            case Qc:
              s.blendFuncSeparate(
                s.DST_COLOR,
                s.ONE_MINUS_SRC_ALPHA,
                s.ZERO,
                s.ONE,
              );
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", I);
              break;
          }
        else
          switch (I) {
            case Pr:
              s.blendFuncSeparate(
                s.SRC_ALPHA,
                s.ONE_MINUS_SRC_ALPHA,
                s.ONE,
                s.ONE_MINUS_SRC_ALPHA,
              );
              break;
            case $c:
              s.blendFuncSeparate(s.SRC_ALPHA, s.ONE, s.ONE, s.ONE);
              break;
            case Jc:
              console.error(
                "THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true",
              );
              break;
            case Qc:
              console.error(
                "THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true",
              );
              break;
            default:
              console.error("THREE.WebGLState: Invalid blending: ", I);
              break;
          }
        ((S = null),
          (M = null),
          (b = null),
          (A = null),
          w.set(0, 0, 0),
          (C = 0),
          (m = I),
          (x = Ze));
      }
      return;
    }
    (($ = $ || ee),
      (j = j || ie),
      (me = me || de),
      (ee !== p || $ !== v) &&
        (s.blendEquationSeparate(Ye[ee], Ye[$]), (p = ee), (v = $)),
      (ie !== S || de !== M || j !== b || me !== A) &&
        (s.blendFuncSeparate(D[ie], D[de], D[j], D[me]),
        (S = ie),
        (M = de),
        (b = j),
        (A = me)),
      (Ne.equals(w) === !1 || ot !== C) &&
        (s.blendColor(Ne.r, Ne.g, Ne.b, ot), w.copy(Ne), (C = ot)),
      (m = I),
      (x = !1));
  }
  function Te(I, ee) {
    I.side === Fn ? be(s.CULL_FACE) : ne(s.CULL_FACE);
    let ie = I.side === Jt;
    (ee && (ie = !ie),
      je(ie),
      I.blending === Pr && I.transparent === !1
        ? at(ai)
        : at(
            I.blending,
            I.blendEquation,
            I.blendSrc,
            I.blendDst,
            I.blendEquationAlpha,
            I.blendSrcAlpha,
            I.blendDstAlpha,
            I.blendColor,
            I.blendAlpha,
            I.premultipliedAlpha,
          ),
      a.setFunc(I.depthFunc),
      a.setTest(I.depthTest),
      a.setMask(I.depthWrite),
      r.setMask(I.colorWrite));
    const de = I.stencilWrite;
    (o.setTest(de),
      de &&
        (o.setMask(I.stencilWriteMask),
        o.setFunc(I.stencilFunc, I.stencilRef, I.stencilFuncMask),
        o.setOp(I.stencilFail, I.stencilZFail, I.stencilZPass)),
      fe(I.polygonOffset, I.polygonOffsetFactor, I.polygonOffsetUnits),
      I.alphaToCoverage === !0
        ? ne(s.SAMPLE_ALPHA_TO_COVERAGE)
        : be(s.SAMPLE_ALPHA_TO_COVERAGE));
  }
  function je(I) {
    E !== I && (I ? s.frontFace(s.CW) : s.frontFace(s.CCW), (E = I));
  }
  function Me(I) {
    (I !== jf
      ? (ne(s.CULL_FACE),
        I !== P &&
          (I === Zc
            ? s.cullFace(s.BACK)
            : I === Kf
              ? s.cullFace(s.FRONT)
              : s.cullFace(s.FRONT_AND_BACK)))
      : be(s.CULL_FACE),
      (P = I));
  }
  function ct(I) {
    I !== V && (G && s.lineWidth(I), (V = I));
  }
  function fe(I, ee, ie) {
    I
      ? (ne(s.POLYGON_OFFSET_FILL),
        (F !== ee || z !== ie) && (s.polygonOffset(ee, ie), (F = ee), (z = ie)))
      : be(s.POLYGON_OFFSET_FILL);
  }
  function ke(I) {
    I ? ne(s.SCISSOR_TEST) : be(s.SCISSOR_TEST);
  }
  function Dt(I) {
    (I === void 0 && (I = s.TEXTURE0 + q - 1),
      re !== I && (s.activeTexture(I), (re = I)));
  }
  function yt(I, ee, ie) {
    ie === void 0 && (re === null ? (ie = s.TEXTURE0 + q - 1) : (ie = re));
    let de = ae[ie];
    (de === void 0 && ((de = { type: void 0, texture: void 0 }), (ae[ie] = de)),
      (de.type !== I || de.texture !== ee) &&
        (re !== ie && (s.activeTexture(ie), (re = ie)),
        s.bindTexture(I, ee || oe[I]),
        (de.type = I),
        (de.texture = ee)));
  }
  function R() {
    const I = ae[re];
    I !== void 0 &&
      I.type !== void 0 &&
      (s.bindTexture(I.type, null), (I.type = void 0), (I.texture = void 0));
  }
  function y() {
    try {
      s.compressedTexImage2D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function O() {
    try {
      s.compressedTexImage3D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function Y() {
    try {
      s.texSubImage2D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function Z() {
    try {
      s.texSubImage3D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function X() {
    try {
      s.compressedTexSubImage2D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function ye() {
    try {
      s.compressedTexSubImage3D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function te() {
    try {
      s.texStorage2D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function ge() {
    try {
      s.texStorage3D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function xe() {
    try {
      s.texImage2D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function Q() {
    try {
      s.texImage3D(...arguments);
    } catch (I) {
      console.error("THREE.WebGLState:", I);
    }
  }
  function he(I) {
    nt.equals(I) === !1 && (s.scissor(I.x, I.y, I.z, I.w), nt.copy(I));
  }
  function Ce(I) {
    He.equals(I) === !1 && (s.viewport(I.x, I.y, I.z, I.w), He.copy(I));
  }
  function ve(I, ee) {
    let ie = c.get(ee);
    ie === void 0 && ((ie = new WeakMap()), c.set(ee, ie));
    let de = ie.get(I);
    de === void 0 && ((de = s.getUniformBlockIndex(ee, I.name)), ie.set(I, de));
  }
  function le(I, ee) {
    const de = c.get(ee).get(I);
    l.get(ee) !== de &&
      (s.uniformBlockBinding(ee, de, I.__bindingPointIndex), l.set(ee, de));
  }
  function Fe() {
    (s.disable(s.BLEND),
      s.disable(s.CULL_FACE),
      s.disable(s.DEPTH_TEST),
      s.disable(s.POLYGON_OFFSET_FILL),
      s.disable(s.SCISSOR_TEST),
      s.disable(s.STENCIL_TEST),
      s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),
      s.blendEquation(s.FUNC_ADD),
      s.blendFunc(s.ONE, s.ZERO),
      s.blendFuncSeparate(s.ONE, s.ZERO, s.ONE, s.ZERO),
      s.blendColor(0, 0, 0, 0),
      s.colorMask(!0, !0, !0, !0),
      s.clearColor(0, 0, 0, 0),
      s.depthMask(!0),
      s.depthFunc(s.LESS),
      a.setReversed(!1),
      s.clearDepth(1),
      s.stencilMask(4294967295),
      s.stencilFunc(s.ALWAYS, 0, 4294967295),
      s.stencilOp(s.KEEP, s.KEEP, s.KEEP),
      s.clearStencil(0),
      s.cullFace(s.BACK),
      s.frontFace(s.CCW),
      s.polygonOffset(0, 0),
      s.activeTexture(s.TEXTURE0),
      s.bindFramebuffer(s.FRAMEBUFFER, null),
      s.bindFramebuffer(s.DRAW_FRAMEBUFFER, null),
      s.bindFramebuffer(s.READ_FRAMEBUFFER, null),
      s.useProgram(null),
      s.lineWidth(1),
      s.scissor(0, 0, s.canvas.width, s.canvas.height),
      s.viewport(0, 0, s.canvas.width, s.canvas.height),
      (h = {}),
      (re = null),
      (ae = {}),
      (u = {}),
      (d = new WeakMap()),
      (f = []),
      (g = null),
      (_ = !1),
      (m = null),
      (p = null),
      (S = null),
      (M = null),
      (v = null),
      (b = null),
      (A = null),
      (w = new Ie(0, 0, 0)),
      (C = 0),
      (x = !1),
      (E = null),
      (P = null),
      (V = null),
      (F = null),
      (z = null),
      nt.set(0, 0, s.canvas.width, s.canvas.height),
      He.set(0, 0, s.canvas.width, s.canvas.height),
      r.reset(),
      a.reset(),
      o.reset());
  }
  return {
    buffers: { color: r, depth: a, stencil: o },
    enable: ne,
    disable: be,
    bindFramebuffer: Ae,
    drawBuffers: Ue,
    useProgram: vt,
    setBlending: at,
    setMaterial: Te,
    setFlipSided: je,
    setCullFace: Me,
    setLineWidth: ct,
    setPolygonOffset: fe,
    setScissorTest: ke,
    activeTexture: Dt,
    bindTexture: yt,
    unbindTexture: R,
    compressedTexImage2D: y,
    compressedTexImage3D: O,
    texImage2D: xe,
    texImage3D: Q,
    updateUBOMapping: ve,
    uniformBlockBinding: le,
    texStorage2D: te,
    texStorage3D: ge,
    texSubImage2D: Y,
    texSubImage3D: Z,
    compressedTexSubImage2D: X,
    compressedTexSubImage3D: ye,
    scissor: he,
    viewport: Ce,
    reset: Fe,
  };
}
function Gv(s, e, t, n, i, r, a) {
  const o = e.has("WEBGL_multisampled_render_to_texture")
      ? e.get("WEBGL_multisampled_render_to_texture")
      : null,
    l =
      typeof navigator > "u" ? !1 : /OculusBrowser/g.test(navigator.userAgent),
    c = new Re(),
    h = new WeakMap();
  let u;
  const d = new WeakMap();
  let f = !1;
  try {
    f =
      typeof OffscreenCanvas < "u" &&
      new OffscreenCanvas(1, 1).getContext("2d") !== null;
  } catch {}
  function g(R, y) {
    return f ? new OffscreenCanvas(R, y) : Ds("canvas");
  }
  function _(R, y, O) {
    let Y = 1;
    const Z = yt(R);
    if (
      ((Z.width > O || Z.height > O) && (Y = O / Math.max(Z.width, Z.height)),
      Y < 1)
    )
      if (
        (typeof HTMLImageElement < "u" && R instanceof HTMLImageElement) ||
        (typeof HTMLCanvasElement < "u" && R instanceof HTMLCanvasElement) ||
        (typeof ImageBitmap < "u" && R instanceof ImageBitmap) ||
        (typeof VideoFrame < "u" && R instanceof VideoFrame)
      ) {
        const X = Math.floor(Y * Z.width),
          ye = Math.floor(Y * Z.height);
        u === void 0 && (u = g(X, ye));
        const te = y ? g(X, ye) : u;
        return (
          (te.width = X),
          (te.height = ye),
          te.getContext("2d").drawImage(R, 0, 0, X, ye),
          console.warn(
            "THREE.WebGLRenderer: Texture has been resized from (" +
              Z.width +
              "x" +
              Z.height +
              ") to (" +
              X +
              "x" +
              ye +
              ").",
          ),
          te
        );
      } else
        return (
          "data" in R &&
            console.warn(
              "THREE.WebGLRenderer: Image in DataTexture is too big (" +
                Z.width +
                "x" +
                Z.height +
                ").",
            ),
          R
        );
    return R;
  }
  function m(R) {
    return R.generateMipmaps;
  }
  function p(R) {
    s.generateMipmap(R);
  }
  function S(R) {
    return R.isWebGLCubeRenderTarget
      ? s.TEXTURE_CUBE_MAP
      : R.isWebGL3DRenderTarget
        ? s.TEXTURE_3D
        : R.isWebGLArrayRenderTarget || R.isCompressedArrayTexture
          ? s.TEXTURE_2D_ARRAY
          : s.TEXTURE_2D;
  }
  function M(R, y, O, Y, Z = !1) {
    if (R !== null) {
      if (s[R] !== void 0) return s[R];
      console.warn(
        "THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '" +
          R +
          "'",
      );
    }
    let X = y;
    if (
      (y === s.RED &&
        (O === s.FLOAT && (X = s.R32F),
        O === s.HALF_FLOAT && (X = s.R16F),
        O === s.UNSIGNED_BYTE && (X = s.R8)),
      y === s.RED_INTEGER &&
        (O === s.UNSIGNED_BYTE && (X = s.R8UI),
        O === s.UNSIGNED_SHORT && (X = s.R16UI),
        O === s.UNSIGNED_INT && (X = s.R32UI),
        O === s.BYTE && (X = s.R8I),
        O === s.SHORT && (X = s.R16I),
        O === s.INT && (X = s.R32I)),
      y === s.RG &&
        (O === s.FLOAT && (X = s.RG32F),
        O === s.HALF_FLOAT && (X = s.RG16F),
        O === s.UNSIGNED_BYTE && (X = s.RG8)),
      y === s.RG_INTEGER &&
        (O === s.UNSIGNED_BYTE && (X = s.RG8UI),
        O === s.UNSIGNED_SHORT && (X = s.RG16UI),
        O === s.UNSIGNED_INT && (X = s.RG32UI),
        O === s.BYTE && (X = s.RG8I),
        O === s.SHORT && (X = s.RG16I),
        O === s.INT && (X = s.RG32I)),
      y === s.RGB_INTEGER &&
        (O === s.UNSIGNED_BYTE && (X = s.RGB8UI),
        O === s.UNSIGNED_SHORT && (X = s.RGB16UI),
        O === s.UNSIGNED_INT && (X = s.RGB32UI),
        O === s.BYTE && (X = s.RGB8I),
        O === s.SHORT && (X = s.RGB16I),
        O === s.INT && (X = s.RGB32I)),
      y === s.RGBA_INTEGER &&
        (O === s.UNSIGNED_BYTE && (X = s.RGBA8UI),
        O === s.UNSIGNED_SHORT && (X = s.RGBA16UI),
        O === s.UNSIGNED_INT && (X = s.RGBA32UI),
        O === s.BYTE && (X = s.RGBA8I),
        O === s.SHORT && (X = s.RGBA16I),
        O === s.INT && (X = s.RGBA32I)),
      y === s.RGB && O === s.UNSIGNED_INT_5_9_9_9_REV && (X = s.RGB9_E5),
      y === s.RGBA)
    ) {
      const ye = Z ? Da : We.getTransfer(Y);
      (O === s.FLOAT && (X = s.RGBA32F),
        O === s.HALF_FLOAT && (X = s.RGBA16F),
        O === s.UNSIGNED_BYTE && (X = ye === et ? s.SRGB8_ALPHA8 : s.RGBA8),
        O === s.UNSIGNED_SHORT_4_4_4_4 && (X = s.RGBA4),
        O === s.UNSIGNED_SHORT_5_5_5_1 && (X = s.RGB5_A1));
    }
    return (
      (X === s.R16F ||
        X === s.R32F ||
        X === s.RG16F ||
        X === s.RG32F ||
        X === s.RGBA16F ||
        X === s.RGBA32F) &&
        e.get("EXT_color_buffer_float"),
      X
    );
  }
  function v(R, y) {
    let O;
    return (
      R
        ? y === null || y === Ci || y === As
          ? (O = s.DEPTH24_STENCIL8)
          : y === $t
            ? (O = s.DEPTH32F_STENCIL8)
            : y === bs &&
              ((O = s.DEPTH24_STENCIL8),
              console.warn(
                "DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.",
              ))
        : y === null || y === Ci || y === As
          ? (O = s.DEPTH_COMPONENT24)
          : y === $t
            ? (O = s.DEPTH_COMPONENT32F)
            : y === bs && (O = s.DEPTH_COMPONENT16),
      O
    );
  }
  function b(R, y) {
    return m(R) === !0 ||
      (R.isFramebufferTexture && R.minFilter !== qt && R.minFilter !== wt)
      ? Math.log2(Math.max(y.width, y.height)) + 1
      : R.mipmaps !== void 0 && R.mipmaps.length > 0
        ? R.mipmaps.length
        : R.isCompressedTexture && Array.isArray(R.image)
          ? y.mipmaps.length
          : 1;
  }
  function A(R) {
    const y = R.target;
    (y.removeEventListener("dispose", A),
      C(y),
      y.isVideoTexture && h.delete(y));
  }
  function w(R) {
    const y = R.target;
    (y.removeEventListener("dispose", w), E(y));
  }
  function C(R) {
    const y = n.get(R);
    if (y.__webglInit === void 0) return;
    const O = R.source,
      Y = d.get(O);
    if (Y) {
      const Z = Y[y.__cacheKey];
      (Z.usedTimes--,
        Z.usedTimes === 0 && x(R),
        Object.keys(Y).length === 0 && d.delete(O));
    }
    n.remove(R);
  }
  function x(R) {
    const y = n.get(R);
    s.deleteTexture(y.__webglTexture);
    const O = R.source,
      Y = d.get(O);
    (delete Y[y.__cacheKey], a.memory.textures--);
  }
  function E(R) {
    const y = n.get(R);
    if (
      (R.depthTexture && (R.depthTexture.dispose(), n.remove(R.depthTexture)),
      R.isWebGLCubeRenderTarget)
    )
      for (let Y = 0; Y < 6; Y++) {
        if (Array.isArray(y.__webglFramebuffer[Y]))
          for (let Z = 0; Z < y.__webglFramebuffer[Y].length; Z++)
            s.deleteFramebuffer(y.__webglFramebuffer[Y][Z]);
        else s.deleteFramebuffer(y.__webglFramebuffer[Y]);
        y.__webglDepthbuffer && s.deleteRenderbuffer(y.__webglDepthbuffer[Y]);
      }
    else {
      if (Array.isArray(y.__webglFramebuffer))
        for (let Y = 0; Y < y.__webglFramebuffer.length; Y++)
          s.deleteFramebuffer(y.__webglFramebuffer[Y]);
      else s.deleteFramebuffer(y.__webglFramebuffer);
      if (
        (y.__webglDepthbuffer && s.deleteRenderbuffer(y.__webglDepthbuffer),
        y.__webglMultisampledFramebuffer &&
          s.deleteFramebuffer(y.__webglMultisampledFramebuffer),
        y.__webglColorRenderbuffer)
      )
        for (let Y = 0; Y < y.__webglColorRenderbuffer.length; Y++)
          y.__webglColorRenderbuffer[Y] &&
            s.deleteRenderbuffer(y.__webglColorRenderbuffer[Y]);
      y.__webglDepthRenderbuffer &&
        s.deleteRenderbuffer(y.__webglDepthRenderbuffer);
    }
    const O = R.textures;
    for (let Y = 0, Z = O.length; Y < Z; Y++) {
      const X = n.get(O[Y]);
      (X.__webglTexture &&
        (s.deleteTexture(X.__webglTexture), a.memory.textures--),
        n.remove(O[Y]));
    }
    n.remove(R);
  }
  let P = 0;
  function V() {
    P = 0;
  }
  function F() {
    const R = P;
    return (
      R >= i.maxTextures &&
        console.warn(
          "THREE.WebGLTextures: Trying to use " +
            R +
            " texture units while this GPU supports only " +
            i.maxTextures,
        ),
      (P += 1),
      R
    );
  }
  function z(R) {
    const y = [];
    return (
      y.push(R.wrapS),
      y.push(R.wrapT),
      y.push(R.wrapR || 0),
      y.push(R.magFilter),
      y.push(R.minFilter),
      y.push(R.anisotropy),
      y.push(R.internalFormat),
      y.push(R.format),
      y.push(R.type),
      y.push(R.generateMipmaps),
      y.push(R.premultiplyAlpha),
      y.push(R.flipY),
      y.push(R.unpackAlignment),
      y.push(R.colorSpace),
      y.join()
    );
  }
  function q(R, y) {
    const O = n.get(R);
    if (
      (R.isVideoTexture && ke(R),
      R.isRenderTargetTexture === !1 &&
        R.isExternalTexture !== !0 &&
        R.version > 0 &&
        O.__version !== R.version)
    ) {
      const Y = R.image;
      if (Y === null)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but no image data found.",
        );
      else if (Y.complete === !1)
        console.warn(
          "THREE.WebGLRenderer: Texture marked for update but image is incomplete",
        );
      else {
        oe(O, R, y);
        return;
      }
    } else
      R.isExternalTexture &&
        (O.__webglTexture = R.sourceTexture ? R.sourceTexture : null);
    t.bindTexture(s.TEXTURE_2D, O.__webglTexture, s.TEXTURE0 + y);
  }
  function G(R, y) {
    const O = n.get(R);
    if (
      R.isRenderTargetTexture === !1 &&
      R.version > 0 &&
      O.__version !== R.version
    ) {
      oe(O, R, y);
      return;
    }
    t.bindTexture(s.TEXTURE_2D_ARRAY, O.__webglTexture, s.TEXTURE0 + y);
  }
  function K(R, y) {
    const O = n.get(R);
    if (
      R.isRenderTargetTexture === !1 &&
      R.version > 0 &&
      O.__version !== R.version
    ) {
      oe(O, R, y);
      return;
    }
    t.bindTexture(s.TEXTURE_3D, O.__webglTexture, s.TEXTURE0 + y);
  }
  function H(R, y) {
    const O = n.get(R);
    if (R.version > 0 && O.__version !== R.version) {
      ne(O, R, y);
      return;
    }
    t.bindTexture(s.TEXTURE_CUBE_MAP, O.__webglTexture, s.TEXTURE0 + y);
  }
  const re = { [Hr]: s.REPEAT, [kt]: s.CLAMP_TO_EDGE, [Pa]: s.MIRRORED_REPEAT },
    ae = {
      [qt]: s.NEAREST,
      [ju]: s.NEAREST_MIPMAP_NEAREST,
      [ms]: s.NEAREST_MIPMAP_LINEAR,
      [wt]: s.LINEAR,
      [ya]: s.LINEAR_MIPMAP_NEAREST,
      [ri]: s.LINEAR_MIPMAP_LINEAR,
    },
    _e = {
      [Pp]: s.NEVER,
      [Op]: s.ALWAYS,
      [Dp]: s.LESS,
      [td]: s.LEQUAL,
      [Lp]: s.EQUAL,
      [Np]: s.GEQUAL,
      [Ip]: s.GREATER,
      [Up]: s.NOTEQUAL,
    };
  function Pe(R, y) {
    if (
      (y.type === $t &&
        e.has("OES_texture_float_linear") === !1 &&
        (y.magFilter === wt ||
          y.magFilter === ya ||
          y.magFilter === ms ||
          y.magFilter === ri ||
          y.minFilter === wt ||
          y.minFilter === ya ||
          y.minFilter === ms ||
          y.minFilter === ri) &&
        console.warn(
          "THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device.",
        ),
      s.texParameteri(R, s.TEXTURE_WRAP_S, re[y.wrapS]),
      s.texParameteri(R, s.TEXTURE_WRAP_T, re[y.wrapT]),
      (R === s.TEXTURE_3D || R === s.TEXTURE_2D_ARRAY) &&
        s.texParameteri(R, s.TEXTURE_WRAP_R, re[y.wrapR]),
      s.texParameteri(R, s.TEXTURE_MAG_FILTER, ae[y.magFilter]),
      s.texParameteri(R, s.TEXTURE_MIN_FILTER, ae[y.minFilter]),
      y.compareFunction &&
        (s.texParameteri(R, s.TEXTURE_COMPARE_MODE, s.COMPARE_REF_TO_TEXTURE),
        s.texParameteri(R, s.TEXTURE_COMPARE_FUNC, _e[y.compareFunction])),
      e.has("EXT_texture_filter_anisotropic") === !0)
    ) {
      if (
        y.magFilter === qt ||
        (y.minFilter !== ms && y.minFilter !== ri) ||
        (y.type === $t && e.has("OES_texture_float_linear") === !1)
      )
        return;
      if (y.anisotropy > 1 || n.get(y).__currentAnisotropy) {
        const O = e.get("EXT_texture_filter_anisotropic");
        (s.texParameterf(
          R,
          O.TEXTURE_MAX_ANISOTROPY_EXT,
          Math.min(y.anisotropy, i.getMaxAnisotropy()),
        ),
          (n.get(y).__currentAnisotropy = y.anisotropy));
      }
    }
  }
  function nt(R, y) {
    let O = !1;
    R.__webglInit === void 0 &&
      ((R.__webglInit = !0), y.addEventListener("dispose", A));
    const Y = y.source;
    let Z = d.get(Y);
    Z === void 0 && ((Z = {}), d.set(Y, Z));
    const X = z(y);
    if (X !== R.__cacheKey) {
      (Z[X] === void 0 &&
        ((Z[X] = { texture: s.createTexture(), usedTimes: 0 }),
        a.memory.textures++,
        (O = !0)),
        Z[X].usedTimes++);
      const ye = Z[R.__cacheKey];
      (ye !== void 0 &&
        (Z[R.__cacheKey].usedTimes--, ye.usedTimes === 0 && x(y)),
        (R.__cacheKey = X),
        (R.__webglTexture = Z[X].texture));
    }
    return O;
  }
  function He(R, y, O) {
    return Math.floor(Math.floor(R / O) / y);
  }
  function W(R, y, O, Y) {
    const X = R.updateRanges;
    if (X.length === 0)
      t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, y.width, y.height, O, Y, y.data);
    else {
      X.sort((Q, he) => Q.start - he.start);
      let ye = 0;
      for (let Q = 1; Q < X.length; Q++) {
        const he = X[ye],
          Ce = X[Q],
          ve = he.start + he.count,
          le = He(Ce.start, y.width, 4),
          Fe = He(he.start, y.width, 4);
        Ce.start <= ve + 1 &&
        le === Fe &&
        He(Ce.start + Ce.count - 1, y.width, 4) === le
          ? (he.count = Math.max(he.count, Ce.start + Ce.count - he.start))
          : (++ye, (X[ye] = Ce));
      }
      X.length = ye + 1;
      const te = s.getParameter(s.UNPACK_ROW_LENGTH),
        ge = s.getParameter(s.UNPACK_SKIP_PIXELS),
        xe = s.getParameter(s.UNPACK_SKIP_ROWS);
      s.pixelStorei(s.UNPACK_ROW_LENGTH, y.width);
      for (let Q = 0, he = X.length; Q < he; Q++) {
        const Ce = X[Q],
          ve = Math.floor(Ce.start / 4),
          le = Math.ceil(Ce.count / 4),
          Fe = ve % y.width,
          I = Math.floor(ve / y.width),
          ee = le,
          ie = 1;
        (s.pixelStorei(s.UNPACK_SKIP_PIXELS, Fe),
          s.pixelStorei(s.UNPACK_SKIP_ROWS, I),
          t.texSubImage2D(s.TEXTURE_2D, 0, Fe, I, ee, ie, O, Y, y.data));
      }
      (R.clearUpdateRanges(),
        s.pixelStorei(s.UNPACK_ROW_LENGTH, te),
        s.pixelStorei(s.UNPACK_SKIP_PIXELS, ge),
        s.pixelStorei(s.UNPACK_SKIP_ROWS, xe));
    }
  }
  function oe(R, y, O) {
    let Y = s.TEXTURE_2D;
    ((y.isDataArrayTexture || y.isCompressedArrayTexture) &&
      (Y = s.TEXTURE_2D_ARRAY),
      y.isData3DTexture && (Y = s.TEXTURE_3D));
    const Z = nt(R, y),
      X = y.source;
    t.bindTexture(Y, R.__webglTexture, s.TEXTURE0 + O);
    const ye = n.get(X);
    if (X.version !== ye.__version || Z === !0) {
      t.activeTexture(s.TEXTURE0 + O);
      const te = We.getPrimaries(We.workingColorSpace),
        ge = y.colorSpace === Mi ? null : We.getPrimaries(y.colorSpace),
        xe =
          y.colorSpace === Mi || te === ge ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      (s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, y.flipY),
        s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y.premultiplyAlpha),
        s.pixelStorei(s.UNPACK_ALIGNMENT, y.unpackAlignment),
        s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, xe));
      let Q = _(y.image, !1, i.maxTextureSize);
      Q = Dt(y, Q);
      const he = r.convert(y.format, y.colorSpace),
        Ce = r.convert(y.type);
      let ve = M(y.internalFormat, he, Ce, y.colorSpace, y.isVideoTexture);
      Pe(Y, y);
      let le;
      const Fe = y.mipmaps,
        I = y.isVideoTexture !== !0,
        ee = ye.__version === void 0 || Z === !0,
        ie = X.dataReady,
        de = b(y, Q);
      if (y.isDepthTexture)
        ((ve = v(y.format === Rs, y.type)),
          ee &&
            (I
              ? t.texStorage2D(s.TEXTURE_2D, 1, ve, Q.width, Q.height)
              : t.texImage2D(
                  s.TEXTURE_2D,
                  0,
                  ve,
                  Q.width,
                  Q.height,
                  0,
                  he,
                  Ce,
                  null,
                )));
      else if (y.isDataTexture)
        if (Fe.length > 0) {
          I &&
            ee &&
            t.texStorage2D(s.TEXTURE_2D, de, ve, Fe[0].width, Fe[0].height);
          for (let $ = 0, j = Fe.length; $ < j; $++)
            ((le = Fe[$]),
              I
                ? ie &&
                  t.texSubImage2D(
                    s.TEXTURE_2D,
                    $,
                    0,
                    0,
                    le.width,
                    le.height,
                    he,
                    Ce,
                    le.data,
                  )
                : t.texImage2D(
                    s.TEXTURE_2D,
                    $,
                    ve,
                    le.width,
                    le.height,
                    0,
                    he,
                    Ce,
                    le.data,
                  ));
          y.generateMipmaps = !1;
        } else
          I
            ? (ee && t.texStorage2D(s.TEXTURE_2D, de, ve, Q.width, Q.height),
              ie && W(y, Q, he, Ce))
            : t.texImage2D(
                s.TEXTURE_2D,
                0,
                ve,
                Q.width,
                Q.height,
                0,
                he,
                Ce,
                Q.data,
              );
      else if (y.isCompressedTexture)
        if (y.isCompressedArrayTexture) {
          I &&
            ee &&
            t.texStorage3D(
              s.TEXTURE_2D_ARRAY,
              de,
              ve,
              Fe[0].width,
              Fe[0].height,
              Q.depth,
            );
          for (let $ = 0, j = Fe.length; $ < j; $++)
            if (((le = Fe[$]), y.format !== zt))
              if (he !== null)
                if (I) {
                  if (ie)
                    if (y.layerUpdates.size > 0) {
                      const me = Yh(le.width, le.height, y.format, y.type);
                      for (const Ne of y.layerUpdates) {
                        const ot = le.data.subarray(
                          (Ne * me) / le.data.BYTES_PER_ELEMENT,
                          ((Ne + 1) * me) / le.data.BYTES_PER_ELEMENT,
                        );
                        t.compressedTexSubImage3D(
                          s.TEXTURE_2D_ARRAY,
                          $,
                          0,
                          0,
                          Ne,
                          le.width,
                          le.height,
                          1,
                          he,
                          ot,
                        );
                      }
                      y.clearLayerUpdates();
                    } else
                      t.compressedTexSubImage3D(
                        s.TEXTURE_2D_ARRAY,
                        $,
                        0,
                        0,
                        0,
                        le.width,
                        le.height,
                        Q.depth,
                        he,
                        le.data,
                      );
                } else
                  t.compressedTexImage3D(
                    s.TEXTURE_2D_ARRAY,
                    $,
                    ve,
                    le.width,
                    le.height,
                    Q.depth,
                    0,
                    le.data,
                    0,
                    0,
                  );
              else
                console.warn(
                  "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                );
            else
              I
                ? ie &&
                  t.texSubImage3D(
                    s.TEXTURE_2D_ARRAY,
                    $,
                    0,
                    0,
                    0,
                    le.width,
                    le.height,
                    Q.depth,
                    he,
                    Ce,
                    le.data,
                  )
                : t.texImage3D(
                    s.TEXTURE_2D_ARRAY,
                    $,
                    ve,
                    le.width,
                    le.height,
                    Q.depth,
                    0,
                    he,
                    Ce,
                    le.data,
                  );
        } else {
          I &&
            ee &&
            t.texStorage2D(s.TEXTURE_2D, de, ve, Fe[0].width, Fe[0].height);
          for (let $ = 0, j = Fe.length; $ < j; $++)
            ((le = Fe[$]),
              y.format !== zt
                ? he !== null
                  ? I
                    ? ie &&
                      t.compressedTexSubImage2D(
                        s.TEXTURE_2D,
                        $,
                        0,
                        0,
                        le.width,
                        le.height,
                        he,
                        le.data,
                      )
                    : t.compressedTexImage2D(
                        s.TEXTURE_2D,
                        $,
                        ve,
                        le.width,
                        le.height,
                        0,
                        le.data,
                      )
                  : console.warn(
                      "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()",
                    )
                : I
                  ? ie &&
                    t.texSubImage2D(
                      s.TEXTURE_2D,
                      $,
                      0,
                      0,
                      le.width,
                      le.height,
                      he,
                      Ce,
                      le.data,
                    )
                  : t.texImage2D(
                      s.TEXTURE_2D,
                      $,
                      ve,
                      le.width,
                      le.height,
                      0,
                      he,
                      Ce,
                      le.data,
                    ));
        }
      else if (y.isDataArrayTexture)
        if (I) {
          if (
            (ee &&
              t.texStorage3D(
                s.TEXTURE_2D_ARRAY,
                de,
                ve,
                Q.width,
                Q.height,
                Q.depth,
              ),
            ie)
          )
            if (y.layerUpdates.size > 0) {
              const $ = Yh(Q.width, Q.height, y.format, y.type);
              for (const j of y.layerUpdates) {
                const me = Q.data.subarray(
                  (j * $) / Q.data.BYTES_PER_ELEMENT,
                  ((j + 1) * $) / Q.data.BYTES_PER_ELEMENT,
                );
                t.texSubImage3D(
                  s.TEXTURE_2D_ARRAY,
                  0,
                  0,
                  0,
                  j,
                  Q.width,
                  Q.height,
                  1,
                  he,
                  Ce,
                  me,
                );
              }
              y.clearLayerUpdates();
            } else
              t.texSubImage3D(
                s.TEXTURE_2D_ARRAY,
                0,
                0,
                0,
                0,
                Q.width,
                Q.height,
                Q.depth,
                he,
                Ce,
                Q.data,
              );
        } else
          t.texImage3D(
            s.TEXTURE_2D_ARRAY,
            0,
            ve,
            Q.width,
            Q.height,
            Q.depth,
            0,
            he,
            Ce,
            Q.data,
          );
      else if (y.isData3DTexture)
        I
          ? (ee &&
              t.texStorage3D(s.TEXTURE_3D, de, ve, Q.width, Q.height, Q.depth),
            ie &&
              t.texSubImage3D(
                s.TEXTURE_3D,
                0,
                0,
                0,
                0,
                Q.width,
                Q.height,
                Q.depth,
                he,
                Ce,
                Q.data,
              ))
          : t.texImage3D(
              s.TEXTURE_3D,
              0,
              ve,
              Q.width,
              Q.height,
              Q.depth,
              0,
              he,
              Ce,
              Q.data,
            );
      else if (y.isFramebufferTexture) {
        if (ee)
          if (I) t.texStorage2D(s.TEXTURE_2D, de, ve, Q.width, Q.height);
          else {
            let $ = Q.width,
              j = Q.height;
            for (let me = 0; me < de; me++)
              (t.texImage2D(s.TEXTURE_2D, me, ve, $, j, 0, he, Ce, null),
                ($ >>= 1),
                (j >>= 1));
          }
      } else if (Fe.length > 0) {
        if (I && ee) {
          const $ = yt(Fe[0]);
          t.texStorage2D(s.TEXTURE_2D, de, ve, $.width, $.height);
        }
        for (let $ = 0, j = Fe.length; $ < j; $++)
          ((le = Fe[$]),
            I
              ? ie && t.texSubImage2D(s.TEXTURE_2D, $, 0, 0, he, Ce, le)
              : t.texImage2D(s.TEXTURE_2D, $, ve, he, Ce, le));
        y.generateMipmaps = !1;
      } else if (I) {
        if (ee) {
          const $ = yt(Q);
          t.texStorage2D(s.TEXTURE_2D, de, ve, $.width, $.height);
        }
        ie && t.texSubImage2D(s.TEXTURE_2D, 0, 0, 0, he, Ce, Q);
      } else t.texImage2D(s.TEXTURE_2D, 0, ve, he, Ce, Q);
      (m(y) && p(Y), (ye.__version = X.version), y.onUpdate && y.onUpdate(y));
    }
    R.__version = y.version;
  }
  function ne(R, y, O) {
    if (y.image.length !== 6) return;
    const Y = nt(R, y),
      Z = y.source;
    t.bindTexture(s.TEXTURE_CUBE_MAP, R.__webglTexture, s.TEXTURE0 + O);
    const X = n.get(Z);
    if (Z.version !== X.__version || Y === !0) {
      t.activeTexture(s.TEXTURE0 + O);
      const ye = We.getPrimaries(We.workingColorSpace),
        te = y.colorSpace === Mi ? null : We.getPrimaries(y.colorSpace),
        ge =
          y.colorSpace === Mi || ye === te ? s.NONE : s.BROWSER_DEFAULT_WEBGL;
      (s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL, y.flipY),
        s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL, y.premultiplyAlpha),
        s.pixelStorei(s.UNPACK_ALIGNMENT, y.unpackAlignment),
        s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL, ge));
      const xe = y.isCompressedTexture || y.image[0].isCompressedTexture,
        Q = y.image[0] && y.image[0].isDataTexture,
        he = [];
      for (let j = 0; j < 6; j++)
        (!xe && !Q
          ? (he[j] = _(y.image[j], !0, i.maxCubemapSize))
          : (he[j] = Q ? y.image[j].image : y.image[j]),
          (he[j] = Dt(y, he[j])));
      const Ce = he[0],
        ve = r.convert(y.format, y.colorSpace),
        le = r.convert(y.type),
        Fe = M(y.internalFormat, ve, le, y.colorSpace),
        I = y.isVideoTexture !== !0,
        ee = X.__version === void 0 || Y === !0,
        ie = Z.dataReady;
      let de = b(y, Ce);
      Pe(s.TEXTURE_CUBE_MAP, y);
      let $;
      if (xe) {
        I &&
          ee &&
          t.texStorage2D(s.TEXTURE_CUBE_MAP, de, Fe, Ce.width, Ce.height);
        for (let j = 0; j < 6; j++) {
          $ = he[j].mipmaps;
          for (let me = 0; me < $.length; me++) {
            const Ne = $[me];
            y.format !== zt
              ? ve !== null
                ? I
                  ? ie &&
                    t.compressedTexSubImage2D(
                      s.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                      me,
                      0,
                      0,
                      Ne.width,
                      Ne.height,
                      ve,
                      Ne.data,
                    )
                  : t.compressedTexImage2D(
                      s.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                      me,
                      Fe,
                      Ne.width,
                      Ne.height,
                      0,
                      Ne.data,
                    )
                : console.warn(
                    "THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()",
                  )
              : I
                ? ie &&
                  t.texSubImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                    me,
                    0,
                    0,
                    Ne.width,
                    Ne.height,
                    ve,
                    le,
                    Ne.data,
                  )
                : t.texImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                    me,
                    Fe,
                    Ne.width,
                    Ne.height,
                    0,
                    ve,
                    le,
                    Ne.data,
                  );
          }
        }
      } else {
        if ((($ = y.mipmaps), I && ee)) {
          $.length > 0 && de++;
          const j = yt(he[0]);
          t.texStorage2D(s.TEXTURE_CUBE_MAP, de, Fe, j.width, j.height);
        }
        for (let j = 0; j < 6; j++)
          if (Q) {
            I
              ? ie &&
                t.texSubImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                  0,
                  0,
                  0,
                  he[j].width,
                  he[j].height,
                  ve,
                  le,
                  he[j].data,
                )
              : t.texImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                  0,
                  Fe,
                  he[j].width,
                  he[j].height,
                  0,
                  ve,
                  le,
                  he[j].data,
                );
            for (let me = 0; me < $.length; me++) {
              const ot = $[me].image[j].image;
              I
                ? ie &&
                  t.texSubImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                    me + 1,
                    0,
                    0,
                    ot.width,
                    ot.height,
                    ve,
                    le,
                    ot.data,
                  )
                : t.texImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                    me + 1,
                    Fe,
                    ot.width,
                    ot.height,
                    0,
                    ve,
                    le,
                    ot.data,
                  );
            }
          } else {
            I
              ? ie &&
                t.texSubImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                  0,
                  0,
                  0,
                  ve,
                  le,
                  he[j],
                )
              : t.texImage2D(
                  s.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                  0,
                  Fe,
                  ve,
                  le,
                  he[j],
                );
            for (let me = 0; me < $.length; me++) {
              const Ne = $[me];
              I
                ? ie &&
                  t.texSubImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                    me + 1,
                    0,
                    0,
                    ve,
                    le,
                    Ne.image[j],
                  )
                : t.texImage2D(
                    s.TEXTURE_CUBE_MAP_POSITIVE_X + j,
                    me + 1,
                    Fe,
                    ve,
                    le,
                    Ne.image[j],
                  );
            }
          }
      }
      (m(y) && p(s.TEXTURE_CUBE_MAP),
        (X.__version = Z.version),
        y.onUpdate && y.onUpdate(y));
    }
    R.__version = y.version;
  }
  function be(R, y, O, Y, Z, X) {
    const ye = r.convert(O.format, O.colorSpace),
      te = r.convert(O.type),
      ge = M(O.internalFormat, ye, te, O.colorSpace),
      xe = n.get(y),
      Q = n.get(O);
    if (((Q.__renderTarget = y), !xe.__hasExternalTextures)) {
      const he = Math.max(1, y.width >> X),
        Ce = Math.max(1, y.height >> X);
      Z === s.TEXTURE_3D || Z === s.TEXTURE_2D_ARRAY
        ? t.texImage3D(Z, X, ge, he, Ce, y.depth, 0, ye, te, null)
        : t.texImage2D(Z, X, ge, he, Ce, 0, ye, te, null);
    }
    (t.bindFramebuffer(s.FRAMEBUFFER, R),
      fe(y)
        ? o.framebufferTexture2DMultisampleEXT(
            s.FRAMEBUFFER,
            Y,
            Z,
            Q.__webglTexture,
            0,
            ct(y),
          )
        : (Z === s.TEXTURE_2D ||
            (Z >= s.TEXTURE_CUBE_MAP_POSITIVE_X &&
              Z <= s.TEXTURE_CUBE_MAP_NEGATIVE_Z)) &&
          s.framebufferTexture2D(s.FRAMEBUFFER, Y, Z, Q.__webglTexture, X),
      t.bindFramebuffer(s.FRAMEBUFFER, null));
  }
  function Ae(R, y, O) {
    if ((s.bindRenderbuffer(s.RENDERBUFFER, R), y.depthBuffer)) {
      const Y = y.depthTexture,
        Z = Y && Y.isDepthTexture ? Y.type : null,
        X = v(y.stencilBuffer, Z),
        ye = y.stencilBuffer ? s.DEPTH_STENCIL_ATTACHMENT : s.DEPTH_ATTACHMENT,
        te = ct(y);
      (fe(y)
        ? o.renderbufferStorageMultisampleEXT(
            s.RENDERBUFFER,
            te,
            X,
            y.width,
            y.height,
          )
        : O
          ? s.renderbufferStorageMultisample(
              s.RENDERBUFFER,
              te,
              X,
              y.width,
              y.height,
            )
          : s.renderbufferStorage(s.RENDERBUFFER, X, y.width, y.height),
        s.framebufferRenderbuffer(s.FRAMEBUFFER, ye, s.RENDERBUFFER, R));
    } else {
      const Y = y.textures;
      for (let Z = 0; Z < Y.length; Z++) {
        const X = Y[Z],
          ye = r.convert(X.format, X.colorSpace),
          te = r.convert(X.type),
          ge = M(X.internalFormat, ye, te, X.colorSpace),
          xe = ct(y);
        O && fe(y) === !1
          ? s.renderbufferStorageMultisample(
              s.RENDERBUFFER,
              xe,
              ge,
              y.width,
              y.height,
            )
          : fe(y)
            ? o.renderbufferStorageMultisampleEXT(
                s.RENDERBUFFER,
                xe,
                ge,
                y.width,
                y.height,
              )
            : s.renderbufferStorage(s.RENDERBUFFER, ge, y.width, y.height);
      }
    }
    s.bindRenderbuffer(s.RENDERBUFFER, null);
  }
  function Ue(R, y) {
    if (y && y.isWebGLCubeRenderTarget)
      throw new Error(
        "Depth Texture with cube render targets is not supported",
      );
    if (
      (t.bindFramebuffer(s.FRAMEBUFFER, R),
      !(y.depthTexture && y.depthTexture.isDepthTexture))
    )
      throw new Error(
        "renderTarget.depthTexture must be an instance of THREE.DepthTexture",
      );
    const Y = n.get(y.depthTexture);
    ((Y.__renderTarget = y),
      (!Y.__webglTexture ||
        y.depthTexture.image.width !== y.width ||
        y.depthTexture.image.height !== y.height) &&
        ((y.depthTexture.image.width = y.width),
        (y.depthTexture.image.height = y.height),
        (y.depthTexture.needsUpdate = !0)),
      q(y.depthTexture, 0));
    const Z = Y.__webglTexture,
      X = ct(y);
    if (y.depthTexture.format === ws)
      fe(y)
        ? o.framebufferTexture2DMultisampleEXT(
            s.FRAMEBUFFER,
            s.DEPTH_ATTACHMENT,
            s.TEXTURE_2D,
            Z,
            0,
            X,
          )
        : s.framebufferTexture2D(
            s.FRAMEBUFFER,
            s.DEPTH_ATTACHMENT,
            s.TEXTURE_2D,
            Z,
            0,
          );
    else if (y.depthTexture.format === Rs)
      fe(y)
        ? o.framebufferTexture2DMultisampleEXT(
            s.FRAMEBUFFER,
            s.DEPTH_STENCIL_ATTACHMENT,
            s.TEXTURE_2D,
            Z,
            0,
            X,
          )
        : s.framebufferTexture2D(
            s.FRAMEBUFFER,
            s.DEPTH_STENCIL_ATTACHMENT,
            s.TEXTURE_2D,
            Z,
            0,
          );
    else throw new Error("Unknown depthTexture format");
  }
  function vt(R) {
    const y = n.get(R),
      O = R.isWebGLCubeRenderTarget === !0;
    if (y.__boundDepthTexture !== R.depthTexture) {
      const Y = R.depthTexture;
      if ((y.__depthDisposeCallback && y.__depthDisposeCallback(), Y)) {
        const Z = () => {
          (delete y.__boundDepthTexture,
            delete y.__depthDisposeCallback,
            Y.removeEventListener("dispose", Z));
        };
        (Y.addEventListener("dispose", Z), (y.__depthDisposeCallback = Z));
      }
      y.__boundDepthTexture = Y;
    }
    if (R.depthTexture && !y.__autoAllocateDepthBuffer) {
      if (O)
        throw new Error(
          "target.depthTexture not supported in Cube render targets",
        );
      const Y = R.texture.mipmaps;
      Y && Y.length > 0
        ? Ue(y.__webglFramebuffer[0], R)
        : Ue(y.__webglFramebuffer, R);
    } else if (O) {
      y.__webglDepthbuffer = [];
      for (let Y = 0; Y < 6; Y++)
        if (
          (t.bindFramebuffer(s.FRAMEBUFFER, y.__webglFramebuffer[Y]),
          y.__webglDepthbuffer[Y] === void 0)
        )
          ((y.__webglDepthbuffer[Y] = s.createRenderbuffer()),
            Ae(y.__webglDepthbuffer[Y], R, !1));
        else {
          const Z = R.stencilBuffer
              ? s.DEPTH_STENCIL_ATTACHMENT
              : s.DEPTH_ATTACHMENT,
            X = y.__webglDepthbuffer[Y];
          (s.bindRenderbuffer(s.RENDERBUFFER, X),
            s.framebufferRenderbuffer(s.FRAMEBUFFER, Z, s.RENDERBUFFER, X));
        }
    } else {
      const Y = R.texture.mipmaps;
      if (
        (Y && Y.length > 0
          ? t.bindFramebuffer(s.FRAMEBUFFER, y.__webglFramebuffer[0])
          : t.bindFramebuffer(s.FRAMEBUFFER, y.__webglFramebuffer),
        y.__webglDepthbuffer === void 0)
      )
        ((y.__webglDepthbuffer = s.createRenderbuffer()),
          Ae(y.__webglDepthbuffer, R, !1));
      else {
        const Z = R.stencilBuffer
            ? s.DEPTH_STENCIL_ATTACHMENT
            : s.DEPTH_ATTACHMENT,
          X = y.__webglDepthbuffer;
        (s.bindRenderbuffer(s.RENDERBUFFER, X),
          s.framebufferRenderbuffer(s.FRAMEBUFFER, Z, s.RENDERBUFFER, X));
      }
    }
    t.bindFramebuffer(s.FRAMEBUFFER, null);
  }
  function Ye(R, y, O) {
    const Y = n.get(R);
    (y !== void 0 &&
      be(
        Y.__webglFramebuffer,
        R,
        R.texture,
        s.COLOR_ATTACHMENT0,
        s.TEXTURE_2D,
        0,
      ),
      O !== void 0 && vt(R));
  }
  function D(R) {
    const y = R.texture,
      O = n.get(R),
      Y = n.get(y);
    R.addEventListener("dispose", w);
    const Z = R.textures,
      X = R.isWebGLCubeRenderTarget === !0,
      ye = Z.length > 1;
    if (
      (ye ||
        (Y.__webglTexture === void 0 && (Y.__webglTexture = s.createTexture()),
        (Y.__version = y.version),
        a.memory.textures++),
      X)
    ) {
      O.__webglFramebuffer = [];
      for (let te = 0; te < 6; te++)
        if (y.mipmaps && y.mipmaps.length > 0) {
          O.__webglFramebuffer[te] = [];
          for (let ge = 0; ge < y.mipmaps.length; ge++)
            O.__webglFramebuffer[te][ge] = s.createFramebuffer();
        } else O.__webglFramebuffer[te] = s.createFramebuffer();
    } else {
      if (y.mipmaps && y.mipmaps.length > 0) {
        O.__webglFramebuffer = [];
        for (let te = 0; te < y.mipmaps.length; te++)
          O.__webglFramebuffer[te] = s.createFramebuffer();
      } else O.__webglFramebuffer = s.createFramebuffer();
      if (ye)
        for (let te = 0, ge = Z.length; te < ge; te++) {
          const xe = n.get(Z[te]);
          xe.__webglTexture === void 0 &&
            ((xe.__webglTexture = s.createTexture()), a.memory.textures++);
        }
      if (R.samples > 0 && fe(R) === !1) {
        ((O.__webglMultisampledFramebuffer = s.createFramebuffer()),
          (O.__webglColorRenderbuffer = []),
          t.bindFramebuffer(s.FRAMEBUFFER, O.__webglMultisampledFramebuffer));
        for (let te = 0; te < Z.length; te++) {
          const ge = Z[te];
          ((O.__webglColorRenderbuffer[te] = s.createRenderbuffer()),
            s.bindRenderbuffer(s.RENDERBUFFER, O.__webglColorRenderbuffer[te]));
          const xe = r.convert(ge.format, ge.colorSpace),
            Q = r.convert(ge.type),
            he = M(
              ge.internalFormat,
              xe,
              Q,
              ge.colorSpace,
              R.isXRRenderTarget === !0,
            ),
            Ce = ct(R);
          (s.renderbufferStorageMultisample(
            s.RENDERBUFFER,
            Ce,
            he,
            R.width,
            R.height,
          ),
            s.framebufferRenderbuffer(
              s.FRAMEBUFFER,
              s.COLOR_ATTACHMENT0 + te,
              s.RENDERBUFFER,
              O.__webglColorRenderbuffer[te],
            ));
        }
        (s.bindRenderbuffer(s.RENDERBUFFER, null),
          R.depthBuffer &&
            ((O.__webglDepthRenderbuffer = s.createRenderbuffer()),
            Ae(O.__webglDepthRenderbuffer, R, !0)),
          t.bindFramebuffer(s.FRAMEBUFFER, null));
      }
    }
    if (X) {
      (t.bindTexture(s.TEXTURE_CUBE_MAP, Y.__webglTexture),
        Pe(s.TEXTURE_CUBE_MAP, y));
      for (let te = 0; te < 6; te++)
        if (y.mipmaps && y.mipmaps.length > 0)
          for (let ge = 0; ge < y.mipmaps.length; ge++)
            be(
              O.__webglFramebuffer[te][ge],
              R,
              y,
              s.COLOR_ATTACHMENT0,
              s.TEXTURE_CUBE_MAP_POSITIVE_X + te,
              ge,
            );
        else
          be(
            O.__webglFramebuffer[te],
            R,
            y,
            s.COLOR_ATTACHMENT0,
            s.TEXTURE_CUBE_MAP_POSITIVE_X + te,
            0,
          );
      (m(y) && p(s.TEXTURE_CUBE_MAP), t.unbindTexture());
    } else if (ye) {
      for (let te = 0, ge = Z.length; te < ge; te++) {
        const xe = Z[te],
          Q = n.get(xe);
        let he = s.TEXTURE_2D;
        ((R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) &&
          (he = R.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY),
          t.bindTexture(he, Q.__webglTexture),
          Pe(he, xe),
          be(O.__webglFramebuffer, R, xe, s.COLOR_ATTACHMENT0 + te, he, 0),
          m(xe) && p(he));
      }
      t.unbindTexture();
    } else {
      let te = s.TEXTURE_2D;
      if (
        ((R.isWebGL3DRenderTarget || R.isWebGLArrayRenderTarget) &&
          (te = R.isWebGL3DRenderTarget ? s.TEXTURE_3D : s.TEXTURE_2D_ARRAY),
        t.bindTexture(te, Y.__webglTexture),
        Pe(te, y),
        y.mipmaps && y.mipmaps.length > 0)
      )
        for (let ge = 0; ge < y.mipmaps.length; ge++)
          be(O.__webglFramebuffer[ge], R, y, s.COLOR_ATTACHMENT0, te, ge);
      else be(O.__webglFramebuffer, R, y, s.COLOR_ATTACHMENT0, te, 0);
      (m(y) && p(te), t.unbindTexture());
    }
    R.depthBuffer && vt(R);
  }
  function at(R) {
    const y = R.textures;
    for (let O = 0, Y = y.length; O < Y; O++) {
      const Z = y[O];
      if (m(Z)) {
        const X = S(R),
          ye = n.get(Z).__webglTexture;
        (t.bindTexture(X, ye), p(X), t.unbindTexture());
      }
    }
  }
  const Te = [],
    je = [];
  function Me(R) {
    if (R.samples > 0) {
      if (fe(R) === !1) {
        const y = R.textures,
          O = R.width,
          Y = R.height;
        let Z = s.COLOR_BUFFER_BIT;
        const X = R.stencilBuffer
            ? s.DEPTH_STENCIL_ATTACHMENT
            : s.DEPTH_ATTACHMENT,
          ye = n.get(R),
          te = y.length > 1;
        if (te)
          for (let xe = 0; xe < y.length; xe++)
            (t.bindFramebuffer(
              s.FRAMEBUFFER,
              ye.__webglMultisampledFramebuffer,
            ),
              s.framebufferRenderbuffer(
                s.FRAMEBUFFER,
                s.COLOR_ATTACHMENT0 + xe,
                s.RENDERBUFFER,
                null,
              ),
              t.bindFramebuffer(s.FRAMEBUFFER, ye.__webglFramebuffer),
              s.framebufferTexture2D(
                s.DRAW_FRAMEBUFFER,
                s.COLOR_ATTACHMENT0 + xe,
                s.TEXTURE_2D,
                null,
                0,
              ));
        t.bindFramebuffer(
          s.READ_FRAMEBUFFER,
          ye.__webglMultisampledFramebuffer,
        );
        const ge = R.texture.mipmaps;
        ge && ge.length > 0
          ? t.bindFramebuffer(s.DRAW_FRAMEBUFFER, ye.__webglFramebuffer[0])
          : t.bindFramebuffer(s.DRAW_FRAMEBUFFER, ye.__webglFramebuffer);
        for (let xe = 0; xe < y.length; xe++) {
          if (
            (R.resolveDepthBuffer &&
              (R.depthBuffer && (Z |= s.DEPTH_BUFFER_BIT),
              R.stencilBuffer &&
                R.resolveStencilBuffer &&
                (Z |= s.STENCIL_BUFFER_BIT)),
            te)
          ) {
            s.framebufferRenderbuffer(
              s.READ_FRAMEBUFFER,
              s.COLOR_ATTACHMENT0,
              s.RENDERBUFFER,
              ye.__webglColorRenderbuffer[xe],
            );
            const Q = n.get(y[xe]).__webglTexture;
            s.framebufferTexture2D(
              s.DRAW_FRAMEBUFFER,
              s.COLOR_ATTACHMENT0,
              s.TEXTURE_2D,
              Q,
              0,
            );
          }
          (s.blitFramebuffer(0, 0, O, Y, 0, 0, O, Y, Z, s.NEAREST),
            l === !0 &&
              ((Te.length = 0),
              (je.length = 0),
              Te.push(s.COLOR_ATTACHMENT0 + xe),
              R.depthBuffer &&
                R.resolveDepthBuffer === !1 &&
                (Te.push(X),
                je.push(X),
                s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, je)),
              s.invalidateFramebuffer(s.READ_FRAMEBUFFER, Te)));
        }
        if (
          (t.bindFramebuffer(s.READ_FRAMEBUFFER, null),
          t.bindFramebuffer(s.DRAW_FRAMEBUFFER, null),
          te)
        )
          for (let xe = 0; xe < y.length; xe++) {
            (t.bindFramebuffer(
              s.FRAMEBUFFER,
              ye.__webglMultisampledFramebuffer,
            ),
              s.framebufferRenderbuffer(
                s.FRAMEBUFFER,
                s.COLOR_ATTACHMENT0 + xe,
                s.RENDERBUFFER,
                ye.__webglColorRenderbuffer[xe],
              ));
            const Q = n.get(y[xe]).__webglTexture;
            (t.bindFramebuffer(s.FRAMEBUFFER, ye.__webglFramebuffer),
              s.framebufferTexture2D(
                s.DRAW_FRAMEBUFFER,
                s.COLOR_ATTACHMENT0 + xe,
                s.TEXTURE_2D,
                Q,
                0,
              ));
          }
        t.bindFramebuffer(
          s.DRAW_FRAMEBUFFER,
          ye.__webglMultisampledFramebuffer,
        );
      } else if (R.depthBuffer && R.resolveDepthBuffer === !1 && l) {
        const y = R.stencilBuffer
          ? s.DEPTH_STENCIL_ATTACHMENT
          : s.DEPTH_ATTACHMENT;
        s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER, [y]);
      }
    }
  }
  function ct(R) {
    return Math.min(i.maxSamples, R.samples);
  }
  function fe(R) {
    const y = n.get(R);
    return (
      R.samples > 0 &&
      e.has("WEBGL_multisampled_render_to_texture") === !0 &&
      y.__useRenderToTexture !== !1
    );
  }
  function ke(R) {
    const y = a.render.frame;
    h.get(R) !== y && (h.set(R, y), R.update());
  }
  function Dt(R, y) {
    const O = R.colorSpace,
      Y = R.format,
      Z = R.type;
    return (
      R.isCompressedTexture === !0 ||
        R.isVideoTexture === !0 ||
        (O !== Rt &&
          O !== Mi &&
          (We.getTransfer(O) === et
            ? (Y !== zt || Z !== fn) &&
              console.warn(
                "THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType.",
              )
            : console.error(
                "THREE.WebGLTextures: Unsupported texture color space:",
                O,
              ))),
      y
    );
  }
  function yt(R) {
    return (
      typeof HTMLImageElement < "u" && R instanceof HTMLImageElement
        ? ((c.width = R.naturalWidth || R.width),
          (c.height = R.naturalHeight || R.height))
        : typeof VideoFrame < "u" && R instanceof VideoFrame
          ? ((c.width = R.displayWidth), (c.height = R.displayHeight))
          : ((c.width = R.width), (c.height = R.height)),
      c
    );
  }
  ((this.allocateTextureUnit = F),
    (this.resetTextureUnits = V),
    (this.setTexture2D = q),
    (this.setTexture2DArray = G),
    (this.setTexture3D = K),
    (this.setTextureCube = H),
    (this.rebindTextures = Ye),
    (this.setupRenderTarget = D),
    (this.updateRenderTargetMipmap = at),
    (this.updateMultisampleRenderTarget = Me),
    (this.setupDepthRenderbuffer = vt),
    (this.setupFrameBufferTexture = be),
    (this.useMultisampledRTT = fe));
}
function Wv(s, e) {
  function t(n, i = Mi) {
    let r;
    const a = We.getTransfer(i);
    if (n === fn) return s.UNSIGNED_BYTE;
    if (n === nc) return s.UNSIGNED_SHORT_4_4_4_4;
    if (n === ic) return s.UNSIGNED_SHORT_5_5_5_1;
    if (n === Ku) return s.UNSIGNED_INT_5_9_9_9_REV;
    if (n === ec) return s.BYTE;
    if (n === tc) return s.SHORT;
    if (n === bs) return s.UNSIGNED_SHORT;
    if (n === Wa) return s.INT;
    if (n === Ci) return s.UNSIGNED_INT;
    if (n === $t) return s.FLOAT;
    if (n === Li) return s.HALF_FLOAT;
    if (n === Zu) return s.ALPHA;
    if (n === $u) return s.RGB;
    if (n === zt) return s.RGBA;
    if (n === ws) return s.DEPTH_COMPONENT;
    if (n === Rs) return s.DEPTH_STENCIL;
    if (n === rc) return s.RED;
    if (n === sc) return s.RED_INTEGER;
    if (n === Ju) return s.RG;
    if (n === ac) return s.RG_INTEGER;
    if (n === oc) return s.RGBA_INTEGER;
    if (n === Ma || n === Sa || n === Ta || n === Ea)
      if (a === et)
        if (((r = e.get("WEBGL_compressed_texture_s3tc_srgb")), r !== null)) {
          if (n === Ma) return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;
          if (n === Sa) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;
          if (n === Ta) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;
          if (n === Ea) return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT;
        } else return null;
      else if (((r = e.get("WEBGL_compressed_texture_s3tc")), r !== null)) {
        if (n === Ma) return r.COMPRESSED_RGB_S3TC_DXT1_EXT;
        if (n === Sa) return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;
        if (n === Ta) return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;
        if (n === Ea) return r.COMPRESSED_RGBA_S3TC_DXT5_EXT;
      } else return null;
    if (n === rl || n === sl || n === al || n === ol)
      if (((r = e.get("WEBGL_compressed_texture_pvrtc")), r !== null)) {
        if (n === rl) return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;
        if (n === sl) return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;
        if (n === al) return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;
        if (n === ol) return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG;
      } else return null;
    if (n === ll || n === cl || n === hl)
      if (((r = e.get("WEBGL_compressed_texture_etc")), r !== null)) {
        if (n === ll || n === cl)
          return a === et ? r.COMPRESSED_SRGB8_ETC2 : r.COMPRESSED_RGB8_ETC2;
        if (n === hl)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC
            : r.COMPRESSED_RGBA8_ETC2_EAC;
      } else return null;
    if (
      n === ul ||
      n === dl ||
      n === fl ||
      n === pl ||
      n === ml ||
      n === _l ||
      n === gl ||
      n === xl ||
      n === vl ||
      n === yl ||
      n === Ml ||
      n === Sl ||
      n === Tl ||
      n === El
    )
      if (((r = e.get("WEBGL_compressed_texture_astc")), r !== null)) {
        if (n === ul)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR
            : r.COMPRESSED_RGBA_ASTC_4x4_KHR;
        if (n === dl)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR
            : r.COMPRESSED_RGBA_ASTC_5x4_KHR;
        if (n === fl)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR
            : r.COMPRESSED_RGBA_ASTC_5x5_KHR;
        if (n === pl)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR
            : r.COMPRESSED_RGBA_ASTC_6x5_KHR;
        if (n === ml)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR
            : r.COMPRESSED_RGBA_ASTC_6x6_KHR;
        if (n === _l)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR
            : r.COMPRESSED_RGBA_ASTC_8x5_KHR;
        if (n === gl)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR
            : r.COMPRESSED_RGBA_ASTC_8x6_KHR;
        if (n === xl)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR
            : r.COMPRESSED_RGBA_ASTC_8x8_KHR;
        if (n === vl)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR
            : r.COMPRESSED_RGBA_ASTC_10x5_KHR;
        if (n === yl)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR
            : r.COMPRESSED_RGBA_ASTC_10x6_KHR;
        if (n === Ml)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR
            : r.COMPRESSED_RGBA_ASTC_10x8_KHR;
        if (n === Sl)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR
            : r.COMPRESSED_RGBA_ASTC_10x10_KHR;
        if (n === Tl)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR
            : r.COMPRESSED_RGBA_ASTC_12x10_KHR;
        if (n === El)
          return a === et
            ? r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR
            : r.COMPRESSED_RGBA_ASTC_12x12_KHR;
      } else return null;
    if (n === ba || n === bl || n === Al)
      if (((r = e.get("EXT_texture_compression_bptc")), r !== null)) {
        if (n === ba)
          return a === et
            ? r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT
            : r.COMPRESSED_RGBA_BPTC_UNORM_EXT;
        if (n === bl) return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;
        if (n === Al) return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT;
      } else return null;
    if (n === Qu || n === wl || n === Rl || n === Cl)
      if (((r = e.get("EXT_texture_compression_rgtc")), r !== null)) {
        if (n === ba) return r.COMPRESSED_RED_RGTC1_EXT;
        if (n === wl) return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;
        if (n === Rl) return r.COMPRESSED_RED_GREEN_RGTC2_EXT;
        if (n === Cl) return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT;
      } else return null;
    return n === As ? s.UNSIGNED_INT_24_8 : s[n] !== void 0 ? s[n] : null;
  }
  return { convert: t };
}
class Ad extends ut {
  constructor(e = null) {
    (super(), (this.sourceTexture = e), (this.isExternalTexture = !0));
  }
}
const Xv = `
void main() {

	gl_Position = vec4( position, 1.0 );

}`,
  Yv = `
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;
class qv {
  constructor() {
    ((this.texture = null),
      (this.mesh = null),
      (this.depthNear = 0),
      (this.depthFar = 0));
  }
  init(e, t) {
    if (this.texture === null) {
      const n = new Ad(e.texture);
      ((e.depthNear !== t.depthNear || e.depthFar !== t.depthFar) &&
        ((this.depthNear = e.depthNear), (this.depthFar = e.depthFar)),
        (this.texture = n));
    }
  }
  getMesh(e) {
    if (this.texture !== null && this.mesh === null) {
      const t = e.cameras[0].viewport,
        n = new Gn({
          vertexShader: Xv,
          fragmentShader: Yv,
          uniforms: {
            depthColor: { value: this.texture },
            depthWidth: { value: t.z },
            depthHeight: { value: t.w },
          },
        });
      this.mesh = new Yt(new es(20, 20), n);
    }
    return this.mesh;
  }
  reset() {
    ((this.texture = null), (this.mesh = null));
  }
  getDepthTexture() {
    return this.texture;
  }
}
class jv extends rr {
  constructor(e, t) {
    super();
    const n = this;
    let i = null,
      r = 1,
      a = null,
      o = "local-floor",
      l = 1,
      c = null,
      h = null,
      u = null,
      d = null,
      f = null,
      g = null;
    const _ = new qv(),
      m = {},
      p = t.getContextAttributes();
    let S = null,
      M = null;
    const v = [],
      b = [],
      A = new Re();
    let w = null;
    const C = new Zt();
    C.viewport = new Ke();
    const x = new Zt();
    x.viewport = new Ke();
    const E = [C, x],
      P = new s_();
    let V = null,
      F = null;
    ((this.cameraAutoUpdate = !0),
      (this.enabled = !1),
      (this.isPresenting = !1),
      (this.getController = function (W) {
        let oe = v[W];
        return (
          oe === void 0 && ((oe = new yo()), (v[W] = oe)),
          oe.getTargetRaySpace()
        );
      }),
      (this.getControllerGrip = function (W) {
        let oe = v[W];
        return (
          oe === void 0 && ((oe = new yo()), (v[W] = oe)),
          oe.getGripSpace()
        );
      }),
      (this.getHand = function (W) {
        let oe = v[W];
        return (
          oe === void 0 && ((oe = new yo()), (v[W] = oe)),
          oe.getHandSpace()
        );
      }));
    function z(W) {
      const oe = b.indexOf(W.inputSource);
      if (oe === -1) return;
      const ne = v[oe];
      ne !== void 0 &&
        (ne.update(W.inputSource, W.frame, c || a),
        ne.dispatchEvent({ type: W.type, data: W.inputSource }));
    }
    function q() {
      (i.removeEventListener("select", z),
        i.removeEventListener("selectstart", z),
        i.removeEventListener("selectend", z),
        i.removeEventListener("squeeze", z),
        i.removeEventListener("squeezestart", z),
        i.removeEventListener("squeezeend", z),
        i.removeEventListener("end", q),
        i.removeEventListener("inputsourceschange", G));
      for (let W = 0; W < v.length; W++) {
        const oe = b[W];
        oe !== null && ((b[W] = null), v[W].disconnect(oe));
      }
      ((V = null), (F = null), _.reset());
      for (const W in m) delete m[W];
      (e.setRenderTarget(S),
        (f = null),
        (d = null),
        (u = null),
        (i = null),
        (M = null),
        He.stop(),
        (n.isPresenting = !1),
        e.setPixelRatio(w),
        e.setSize(A.width, A.height, !1),
        n.dispatchEvent({ type: "sessionend" }));
    }
    ((this.setFramebufferScaleFactor = function (W) {
      ((r = W),
        n.isPresenting === !0 &&
          console.warn(
            "THREE.WebXRManager: Cannot change framebuffer scale while presenting.",
          ));
    }),
      (this.setReferenceSpaceType = function (W) {
        ((o = W),
          n.isPresenting === !0 &&
            console.warn(
              "THREE.WebXRManager: Cannot change reference space type while presenting.",
            ));
      }),
      (this.getReferenceSpace = function () {
        return c || a;
      }),
      (this.setReferenceSpace = function (W) {
        c = W;
      }),
      (this.getBaseLayer = function () {
        return d !== null ? d : f;
      }),
      (this.getBinding = function () {
        return u;
      }),
      (this.getFrame = function () {
        return g;
      }),
      (this.getSession = function () {
        return i;
      }),
      (this.setSession = async function (W) {
        if (((i = W), i !== null)) {
          if (
            ((S = e.getRenderTarget()),
            i.addEventListener("select", z),
            i.addEventListener("selectstart", z),
            i.addEventListener("selectend", z),
            i.addEventListener("squeeze", z),
            i.addEventListener("squeezestart", z),
            i.addEventListener("squeezeend", z),
            i.addEventListener("end", q),
            i.addEventListener("inputsourceschange", G),
            p.xrCompatible !== !0 && (await t.makeXRCompatible()),
            (w = e.getPixelRatio()),
            e.getSize(A),
            typeof XRWebGLBinding < "u" && (u = new XRWebGLBinding(i, t)),
            u !== null && "createProjectionLayer" in XRWebGLBinding.prototype)
          ) {
            let ne = null,
              be = null,
              Ae = null;
            p.depth &&
              ((Ae = p.stencil ? t.DEPTH24_STENCIL8 : t.DEPTH_COMPONENT24),
              (ne = p.stencil ? Rs : ws),
              (be = p.stencil ? As : Ci));
            const Ue = {
              colorFormat: t.RGBA8,
              depthFormat: Ae,
              scaleFactor: r,
            };
            ((d = u.createProjectionLayer(Ue)),
              i.updateRenderState({ layers: [d] }),
              e.setPixelRatio(1),
              e.setSize(d.textureWidth, d.textureHeight, !1),
              (M = new ci(d.textureWidth, d.textureHeight, {
                format: zt,
                type: fn,
                depthTexture: new md(
                  d.textureWidth,
                  d.textureHeight,
                  be,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  void 0,
                  ne,
                ),
                stencilBuffer: p.stencil,
                colorSpace: e.outputColorSpace,
                samples: p.antialias ? 4 : 0,
                resolveDepthBuffer: d.ignoreDepthValues === !1,
                resolveStencilBuffer: d.ignoreDepthValues === !1,
              })));
          } else {
            const ne = {
              antialias: p.antialias,
              alpha: !0,
              depth: p.depth,
              stencil: p.stencil,
              framebufferScaleFactor: r,
            };
            ((f = new XRWebGLLayer(i, t, ne)),
              i.updateRenderState({ baseLayer: f }),
              e.setPixelRatio(1),
              e.setSize(f.framebufferWidth, f.framebufferHeight, !1),
              (M = new ci(f.framebufferWidth, f.framebufferHeight, {
                format: zt,
                type: fn,
                colorSpace: e.outputColorSpace,
                stencilBuffer: p.stencil,
                resolveDepthBuffer: f.ignoreDepthValues === !1,
                resolveStencilBuffer: f.ignoreDepthValues === !1,
              })));
          }
          ((M.isXRRenderTarget = !0),
            this.setFoveation(l),
            (c = null),
            (a = await i.requestReferenceSpace(o)),
            He.setContext(i),
            He.start(),
            (n.isPresenting = !0),
            n.dispatchEvent({ type: "sessionstart" }));
        }
      }),
      (this.getEnvironmentBlendMode = function () {
        if (i !== null) return i.environmentBlendMode;
      }),
      (this.getDepthTexture = function () {
        return _.getDepthTexture();
      }));
    function G(W) {
      for (let oe = 0; oe < W.removed.length; oe++) {
        const ne = W.removed[oe],
          be = b.indexOf(ne);
        be >= 0 && ((b[be] = null), v[be].disconnect(ne));
      }
      for (let oe = 0; oe < W.added.length; oe++) {
        const ne = W.added[oe];
        let be = b.indexOf(ne);
        if (be === -1) {
          for (let Ue = 0; Ue < v.length; Ue++)
            if (Ue >= b.length) {
              (b.push(ne), (be = Ue));
              break;
            } else if (b[Ue] === null) {
              ((b[Ue] = ne), (be = Ue));
              break;
            }
          if (be === -1) break;
        }
        const Ae = v[be];
        Ae && Ae.connect(ne);
      }
    }
    const K = new L(),
      H = new L();
    function re(W, oe, ne) {
      (K.setFromMatrixPosition(oe.matrixWorld),
        H.setFromMatrixPosition(ne.matrixWorld));
      const be = K.distanceTo(H),
        Ae = oe.projectionMatrix.elements,
        Ue = ne.projectionMatrix.elements,
        vt = Ae[14] / (Ae[10] - 1),
        Ye = Ae[14] / (Ae[10] + 1),
        D = (Ae[9] + 1) / Ae[5],
        at = (Ae[9] - 1) / Ae[5],
        Te = (Ae[8] - 1) / Ae[0],
        je = (Ue[8] + 1) / Ue[0],
        Me = vt * Te,
        ct = vt * je,
        fe = be / (-Te + je),
        ke = fe * -Te;
      if (
        (oe.matrixWorld.decompose(W.position, W.quaternion, W.scale),
        W.translateX(ke),
        W.translateZ(fe),
        W.matrixWorld.compose(W.position, W.quaternion, W.scale),
        W.matrixWorldInverse.copy(W.matrixWorld).invert(),
        Ae[10] === -1)
      )
        (W.projectionMatrix.copy(oe.projectionMatrix),
          W.projectionMatrixInverse.copy(oe.projectionMatrixInverse));
      else {
        const Dt = vt + fe,
          yt = Ye + fe,
          R = Me - ke,
          y = ct + (be - ke),
          O = ((D * Ye) / yt) * Dt,
          Y = ((at * Ye) / yt) * Dt;
        (W.projectionMatrix.makePerspective(R, y, O, Y, Dt, yt),
          W.projectionMatrixInverse.copy(W.projectionMatrix).invert());
      }
    }
    function ae(W, oe) {
      (oe === null
        ? W.matrixWorld.copy(W.matrix)
        : W.matrixWorld.multiplyMatrices(oe.matrixWorld, W.matrix),
        W.matrixWorldInverse.copy(W.matrixWorld).invert());
    }
    this.updateCamera = function (W) {
      if (i === null) return;
      let oe = W.near,
        ne = W.far;
      (_.texture !== null &&
        (_.depthNear > 0 && (oe = _.depthNear),
        _.depthFar > 0 && (ne = _.depthFar)),
        (P.near = x.near = C.near = oe),
        (P.far = x.far = C.far = ne),
        (V !== P.near || F !== P.far) &&
          (i.updateRenderState({ depthNear: P.near, depthFar: P.far }),
          (V = P.near),
          (F = P.far)),
        (P.layers.mask = W.layers.mask | 6),
        (C.layers.mask = P.layers.mask & 3),
        (x.layers.mask = P.layers.mask & 5));
      const be = W.parent,
        Ae = P.cameras;
      ae(P, be);
      for (let Ue = 0; Ue < Ae.length; Ue++) ae(Ae[Ue], be);
      (Ae.length === 2
        ? re(P, C, x)
        : P.projectionMatrix.copy(C.projectionMatrix),
        _e(W, P, be));
    };
    function _e(W, oe, ne) {
      (ne === null
        ? W.matrix.copy(oe.matrixWorld)
        : (W.matrix.copy(ne.matrixWorld),
          W.matrix.invert(),
          W.matrix.multiply(oe.matrixWorld)),
        W.matrix.decompose(W.position, W.quaternion, W.scale),
        W.updateMatrixWorld(!0),
        W.projectionMatrix.copy(oe.projectionMatrix),
        W.projectionMatrixInverse.copy(oe.projectionMatrixInverse),
        W.isPerspectiveCamera &&
          ((W.fov = Vr * 2 * Math.atan(1 / W.projectionMatrix.elements[5])),
          (W.zoom = 1)));
    }
    ((this.getCamera = function () {
      return P;
    }),
      (this.getFoveation = function () {
        if (!(d === null && f === null)) return l;
      }),
      (this.setFoveation = function (W) {
        ((l = W),
          d !== null && (d.fixedFoveation = W),
          f !== null && f.fixedFoveation !== void 0 && (f.fixedFoveation = W));
      }),
      (this.hasDepthSensing = function () {
        return _.texture !== null;
      }),
      (this.getDepthSensingMesh = function () {
        return _.getMesh(P);
      }),
      (this.getCameraTexture = function (W) {
        return m[W];
      }));
    let Pe = null;
    function nt(W, oe) {
      if (((h = oe.getViewerPose(c || a)), (g = oe), h !== null)) {
        const ne = h.views;
        f !== null &&
          (e.setRenderTargetFramebuffer(M, f.framebuffer),
          e.setRenderTarget(M));
        let be = !1;
        ne.length !== P.cameras.length && ((P.cameras.length = 0), (be = !0));
        for (let Ye = 0; Ye < ne.length; Ye++) {
          const D = ne[Ye];
          let at = null;
          if (f !== null) at = f.getViewport(D);
          else {
            const je = u.getViewSubImage(d, D);
            ((at = je.viewport),
              Ye === 0 &&
                (e.setRenderTargetTextures(
                  M,
                  je.colorTexture,
                  je.depthStencilTexture,
                ),
                e.setRenderTarget(M)));
          }
          let Te = E[Ye];
          (Te === void 0 &&
            ((Te = new Zt()),
            Te.layers.enable(Ye),
            (Te.viewport = new Ke()),
            (E[Ye] = Te)),
            Te.matrix.fromArray(D.transform.matrix),
            Te.matrix.decompose(Te.position, Te.quaternion, Te.scale),
            Te.projectionMatrix.fromArray(D.projectionMatrix),
            Te.projectionMatrixInverse.copy(Te.projectionMatrix).invert(),
            Te.viewport.set(at.x, at.y, at.width, at.height),
            Ye === 0 &&
              (P.matrix.copy(Te.matrix),
              P.matrix.decompose(P.position, P.quaternion, P.scale)),
            be === !0 && P.cameras.push(Te));
        }
        const Ae = i.enabledFeatures;
        if (
          Ae &&
          Ae.includes("depth-sensing") &&
          i.depthUsage == "gpu-optimized" &&
          u
        ) {
          const Ye = u.getDepthInformation(ne[0]);
          Ye && Ye.isValid && Ye.texture && _.init(Ye, i.renderState);
        }
        if (Ae && Ae.includes("camera-access") && (e.state.unbindTexture(), u))
          for (let Ye = 0; Ye < ne.length; Ye++) {
            const D = ne[Ye].camera;
            if (D) {
              let at = m[D];
              at || ((at = new Ad()), (m[D] = at));
              const Te = u.getCameraImage(D);
              at.sourceTexture = Te;
            }
          }
      }
      for (let ne = 0; ne < v.length; ne++) {
        const be = b[ne],
          Ae = v[ne];
        be !== null && Ae !== void 0 && Ae.update(be, oe, c || a);
      }
      (Pe && Pe(W, oe),
        oe.detectedPlanes &&
          n.dispatchEvent({ type: "planesdetected", data: oe }),
        (g = null));
    }
    const He = new Md();
    (He.setAnimationLoop(nt),
      (this.setAnimationLoop = function (W) {
        Pe = W;
      }),
      (this.dispose = function () {}));
  }
}
const Vi = new Vn(),
  Kv = new Oe();
function Zv(s, e) {
  function t(m, p) {
    (m.matrixAutoUpdate === !0 && m.updateMatrix(), p.value.copy(m.matrix));
  }
  function n(m, p) {
    (p.color.getRGB(m.fogColor.value, ld(s)),
      p.isFog
        ? ((m.fogNear.value = p.near), (m.fogFar.value = p.far))
        : p.isFogExp2 && (m.fogDensity.value = p.density));
  }
  function i(m, p, S, M, v) {
    p.isMeshBasicMaterial || p.isMeshLambertMaterial
      ? r(m, p)
      : p.isMeshToonMaterial
        ? (r(m, p), u(m, p))
        : p.isMeshPhongMaterial
          ? (r(m, p), h(m, p))
          : p.isMeshStandardMaterial
            ? (r(m, p), d(m, p), p.isMeshPhysicalMaterial && f(m, p, v))
            : p.isMeshMatcapMaterial
              ? (r(m, p), g(m, p))
              : p.isMeshDepthMaterial
                ? r(m, p)
                : p.isMeshDistanceMaterial
                  ? (r(m, p), _(m, p))
                  : p.isMeshNormalMaterial
                    ? r(m, p)
                    : p.isLineBasicMaterial
                      ? (a(m, p), p.isLineDashedMaterial && o(m, p))
                      : p.isPointsMaterial
                        ? l(m, p, S, M)
                        : p.isSpriteMaterial
                          ? c(m, p)
                          : p.isShadowMaterial
                            ? (m.color.value.copy(p.color),
                              (m.opacity.value = p.opacity))
                            : p.isShaderMaterial && (p.uniformsNeedUpdate = !1);
  }
  function r(m, p) {
    ((m.opacity.value = p.opacity),
      p.color && m.diffuse.value.copy(p.color),
      p.emissive &&
        m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),
      p.map && ((m.map.value = p.map), t(p.map, m.mapTransform)),
      p.alphaMap &&
        ((m.alphaMap.value = p.alphaMap), t(p.alphaMap, m.alphaMapTransform)),
      p.bumpMap &&
        ((m.bumpMap.value = p.bumpMap),
        t(p.bumpMap, m.bumpMapTransform),
        (m.bumpScale.value = p.bumpScale),
        p.side === Jt && (m.bumpScale.value *= -1)),
      p.normalMap &&
        ((m.normalMap.value = p.normalMap),
        t(p.normalMap, m.normalMapTransform),
        m.normalScale.value.copy(p.normalScale),
        p.side === Jt && m.normalScale.value.negate()),
      p.displacementMap &&
        ((m.displacementMap.value = p.displacementMap),
        t(p.displacementMap, m.displacementMapTransform),
        (m.displacementScale.value = p.displacementScale),
        (m.displacementBias.value = p.displacementBias)),
      p.emissiveMap &&
        ((m.emissiveMap.value = p.emissiveMap),
        t(p.emissiveMap, m.emissiveMapTransform)),
      p.specularMap &&
        ((m.specularMap.value = p.specularMap),
        t(p.specularMap, m.specularMapTransform)),
      p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest));
    const S = e.get(p),
      M = S.envMap,
      v = S.envMapRotation;
    (M &&
      ((m.envMap.value = M),
      Vi.copy(v),
      (Vi.x *= -1),
      (Vi.y *= -1),
      (Vi.z *= -1),
      M.isCubeTexture &&
        M.isRenderTargetTexture === !1 &&
        ((Vi.y *= -1), (Vi.z *= -1)),
      m.envMapRotation.value.setFromMatrix4(Kv.makeRotationFromEuler(Vi)),
      (m.flipEnvMap.value =
        M.isCubeTexture && M.isRenderTargetTexture === !1 ? -1 : 1),
      (m.reflectivity.value = p.reflectivity),
      (m.ior.value = p.ior),
      (m.refractionRatio.value = p.refractionRatio)),
      p.lightMap &&
        ((m.lightMap.value = p.lightMap),
        (m.lightMapIntensity.value = p.lightMapIntensity),
        t(p.lightMap, m.lightMapTransform)),
      p.aoMap &&
        ((m.aoMap.value = p.aoMap),
        (m.aoMapIntensity.value = p.aoMapIntensity),
        t(p.aoMap, m.aoMapTransform)));
  }
  function a(m, p) {
    (m.diffuse.value.copy(p.color),
      (m.opacity.value = p.opacity),
      p.map && ((m.map.value = p.map), t(p.map, m.mapTransform)));
  }
  function o(m, p) {
    ((m.dashSize.value = p.dashSize),
      (m.totalSize.value = p.dashSize + p.gapSize),
      (m.scale.value = p.scale));
  }
  function l(m, p, S, M) {
    (m.diffuse.value.copy(p.color),
      (m.opacity.value = p.opacity),
      (m.size.value = p.size * S),
      (m.scale.value = M * 0.5),
      p.map && ((m.map.value = p.map), t(p.map, m.uvTransform)),
      p.alphaMap &&
        ((m.alphaMap.value = p.alphaMap), t(p.alphaMap, m.alphaMapTransform)),
      p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest));
  }
  function c(m, p) {
    (m.diffuse.value.copy(p.color),
      (m.opacity.value = p.opacity),
      (m.rotation.value = p.rotation),
      p.map && ((m.map.value = p.map), t(p.map, m.mapTransform)),
      p.alphaMap &&
        ((m.alphaMap.value = p.alphaMap), t(p.alphaMap, m.alphaMapTransform)),
      p.alphaTest > 0 && (m.alphaTest.value = p.alphaTest));
  }
  function h(m, p) {
    (m.specular.value.copy(p.specular),
      (m.shininess.value = Math.max(p.shininess, 1e-4)));
  }
  function u(m, p) {
    p.gradientMap && (m.gradientMap.value = p.gradientMap);
  }
  function d(m, p) {
    ((m.metalness.value = p.metalness),
      p.metalnessMap &&
        ((m.metalnessMap.value = p.metalnessMap),
        t(p.metalnessMap, m.metalnessMapTransform)),
      (m.roughness.value = p.roughness),
      p.roughnessMap &&
        ((m.roughnessMap.value = p.roughnessMap),
        t(p.roughnessMap, m.roughnessMapTransform)),
      p.envMap && (m.envMapIntensity.value = p.envMapIntensity));
  }
  function f(m, p, S) {
    ((m.ior.value = p.ior),
      p.sheen > 0 &&
        (m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),
        (m.sheenRoughness.value = p.sheenRoughness),
        p.sheenColorMap &&
          ((m.sheenColorMap.value = p.sheenColorMap),
          t(p.sheenColorMap, m.sheenColorMapTransform)),
        p.sheenRoughnessMap &&
          ((m.sheenRoughnessMap.value = p.sheenRoughnessMap),
          t(p.sheenRoughnessMap, m.sheenRoughnessMapTransform))),
      p.clearcoat > 0 &&
        ((m.clearcoat.value = p.clearcoat),
        (m.clearcoatRoughness.value = p.clearcoatRoughness),
        p.clearcoatMap &&
          ((m.clearcoatMap.value = p.clearcoatMap),
          t(p.clearcoatMap, m.clearcoatMapTransform)),
        p.clearcoatRoughnessMap &&
          ((m.clearcoatRoughnessMap.value = p.clearcoatRoughnessMap),
          t(p.clearcoatRoughnessMap, m.clearcoatRoughnessMapTransform)),
        p.clearcoatNormalMap &&
          ((m.clearcoatNormalMap.value = p.clearcoatNormalMap),
          t(p.clearcoatNormalMap, m.clearcoatNormalMapTransform),
          m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),
          p.side === Jt && m.clearcoatNormalScale.value.negate())),
      p.dispersion > 0 && (m.dispersion.value = p.dispersion),
      p.iridescence > 0 &&
        ((m.iridescence.value = p.iridescence),
        (m.iridescenceIOR.value = p.iridescenceIOR),
        (m.iridescenceThicknessMinimum.value = p.iridescenceThicknessRange[0]),
        (m.iridescenceThicknessMaximum.value = p.iridescenceThicknessRange[1]),
        p.iridescenceMap &&
          ((m.iridescenceMap.value = p.iridescenceMap),
          t(p.iridescenceMap, m.iridescenceMapTransform)),
        p.iridescenceThicknessMap &&
          ((m.iridescenceThicknessMap.value = p.iridescenceThicknessMap),
          t(p.iridescenceThicknessMap, m.iridescenceThicknessMapTransform))),
      p.transmission > 0 &&
        ((m.transmission.value = p.transmission),
        (m.transmissionSamplerMap.value = S.texture),
        m.transmissionSamplerSize.value.set(S.width, S.height),
        p.transmissionMap &&
          ((m.transmissionMap.value = p.transmissionMap),
          t(p.transmissionMap, m.transmissionMapTransform)),
        (m.thickness.value = p.thickness),
        p.thicknessMap &&
          ((m.thicknessMap.value = p.thicknessMap),
          t(p.thicknessMap, m.thicknessMapTransform)),
        (m.attenuationDistance.value = p.attenuationDistance),
        m.attenuationColor.value.copy(p.attenuationColor)),
      p.anisotropy > 0 &&
        (m.anisotropyVector.value.set(
          p.anisotropy * Math.cos(p.anisotropyRotation),
          p.anisotropy * Math.sin(p.anisotropyRotation),
        ),
        p.anisotropyMap &&
          ((m.anisotropyMap.value = p.anisotropyMap),
          t(p.anisotropyMap, m.anisotropyMapTransform))),
      (m.specularIntensity.value = p.specularIntensity),
      m.specularColor.value.copy(p.specularColor),
      p.specularColorMap &&
        ((m.specularColorMap.value = p.specularColorMap),
        t(p.specularColorMap, m.specularColorMapTransform)),
      p.specularIntensityMap &&
        ((m.specularIntensityMap.value = p.specularIntensityMap),
        t(p.specularIntensityMap, m.specularIntensityMapTransform)));
  }
  function g(m, p) {
    p.matcap && (m.matcap.value = p.matcap);
  }
  function _(m, p) {
    const S = e.get(p).light;
    (m.referencePosition.value.setFromMatrixPosition(S.matrixWorld),
      (m.nearDistance.value = S.shadow.camera.near),
      (m.farDistance.value = S.shadow.camera.far));
  }
  return { refreshFogUniforms: n, refreshMaterialUniforms: i };
}
function $v(s, e, t, n) {
  let i = {},
    r = {},
    a = [];
  const o = s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);
  function l(S, M) {
    const v = M.program;
    n.uniformBlockBinding(S, v);
  }
  function c(S, M) {
    let v = i[S.id];
    v === void 0 &&
      (g(S), (v = h(S)), (i[S.id] = v), S.addEventListener("dispose", m));
    const b = M.program;
    n.updateUBOMapping(S, b);
    const A = e.render.frame;
    r[S.id] !== A && (d(S), (r[S.id] = A));
  }
  function h(S) {
    const M = u();
    S.__bindingPointIndex = M;
    const v = s.createBuffer(),
      b = S.__size,
      A = S.usage;
    return (
      s.bindBuffer(s.UNIFORM_BUFFER, v),
      s.bufferData(s.UNIFORM_BUFFER, b, A),
      s.bindBuffer(s.UNIFORM_BUFFER, null),
      s.bindBufferBase(s.UNIFORM_BUFFER, M, v),
      v
    );
  }
  function u() {
    for (let S = 0; S < o; S++) if (a.indexOf(S) === -1) return (a.push(S), S);
    return (
      console.error(
        "THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached.",
      ),
      0
    );
  }
  function d(S) {
    const M = i[S.id],
      v = S.uniforms,
      b = S.__cache;
    s.bindBuffer(s.UNIFORM_BUFFER, M);
    for (let A = 0, w = v.length; A < w; A++) {
      const C = Array.isArray(v[A]) ? v[A] : [v[A]];
      for (let x = 0, E = C.length; x < E; x++) {
        const P = C[x];
        if (f(P, A, x, b) === !0) {
          const V = P.__offset,
            F = Array.isArray(P.value) ? P.value : [P.value];
          let z = 0;
          for (let q = 0; q < F.length; q++) {
            const G = F[q],
              K = _(G);
            typeof G == "number" || typeof G == "boolean"
              ? ((P.__data[0] = G),
                s.bufferSubData(s.UNIFORM_BUFFER, V + z, P.__data))
              : G.isMatrix3
                ? ((P.__data[0] = G.elements[0]),
                  (P.__data[1] = G.elements[1]),
                  (P.__data[2] = G.elements[2]),
                  (P.__data[3] = 0),
                  (P.__data[4] = G.elements[3]),
                  (P.__data[5] = G.elements[4]),
                  (P.__data[6] = G.elements[5]),
                  (P.__data[7] = 0),
                  (P.__data[8] = G.elements[6]),
                  (P.__data[9] = G.elements[7]),
                  (P.__data[10] = G.elements[8]),
                  (P.__data[11] = 0))
                : (G.toArray(P.__data, z),
                  (z += K.storage / Float32Array.BYTES_PER_ELEMENT));
          }
          s.bufferSubData(s.UNIFORM_BUFFER, V, P.__data);
        }
      }
    }
    s.bindBuffer(s.UNIFORM_BUFFER, null);
  }
  function f(S, M, v, b) {
    const A = S.value,
      w = M + "_" + v;
    if (b[w] === void 0)
      return (
        typeof A == "number" || typeof A == "boolean"
          ? (b[w] = A)
          : (b[w] = A.clone()),
        !0
      );
    {
      const C = b[w];
      if (typeof A == "number" || typeof A == "boolean") {
        if (C !== A) return ((b[w] = A), !0);
      } else if (C.equals(A) === !1) return (C.copy(A), !0);
    }
    return !1;
  }
  function g(S) {
    const M = S.uniforms;
    let v = 0;
    const b = 16;
    for (let w = 0, C = M.length; w < C; w++) {
      const x = Array.isArray(M[w]) ? M[w] : [M[w]];
      for (let E = 0, P = x.length; E < P; E++) {
        const V = x[E],
          F = Array.isArray(V.value) ? V.value : [V.value];
        for (let z = 0, q = F.length; z < q; z++) {
          const G = F[z],
            K = _(G),
            H = v % b,
            re = H % K.boundary,
            ae = H + re;
          ((v += re),
            ae !== 0 && b - ae < K.storage && (v += b - ae),
            (V.__data = new Float32Array(
              K.storage / Float32Array.BYTES_PER_ELEMENT,
            )),
            (V.__offset = v),
            (v += K.storage));
        }
      }
    }
    const A = v % b;
    return (A > 0 && (v += b - A), (S.__size = v), (S.__cache = {}), this);
  }
  function _(S) {
    const M = { boundary: 0, storage: 0 };
    return (
      typeof S == "number" || typeof S == "boolean"
        ? ((M.boundary = 4), (M.storage = 4))
        : S.isVector2
          ? ((M.boundary = 8), (M.storage = 8))
          : S.isVector3 || S.isColor
            ? ((M.boundary = 16), (M.storage = 12))
            : S.isVector4
              ? ((M.boundary = 16), (M.storage = 16))
              : S.isMatrix3
                ? ((M.boundary = 48), (M.storage = 48))
                : S.isMatrix4
                  ? ((M.boundary = 64), (M.storage = 64))
                  : S.isTexture
                    ? console.warn(
                        "THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group.",
                      )
                    : console.warn(
                        "THREE.WebGLRenderer: Unsupported uniform value type.",
                        S,
                      ),
      M
    );
  }
  function m(S) {
    const M = S.target;
    M.removeEventListener("dispose", m);
    const v = a.indexOf(M.__bindingPointIndex);
    (a.splice(v, 1), s.deleteBuffer(i[M.id]), delete i[M.id], delete r[M.id]);
  }
  function p() {
    for (const S in i) s.deleteBuffer(i[S]);
    ((a = []), (i = {}), (r = {}));
  }
  return { bind: l, update: c, dispose: p };
}
class Jv {
  constructor(e = {}) {
    const {
      canvas: t = Qp(),
      context: n = null,
      depth: i = !0,
      stencil: r = !1,
      alpha: a = !1,
      antialias: o = !1,
      premultipliedAlpha: l = !0,
      preserveDrawingBuffer: c = !1,
      powerPreference: h = "default",
      failIfMajorPerformanceCaveat: u = !1,
      reversedDepthBuffer: d = !1,
    } = e;
    this.isWebGLRenderer = !0;
    let f;
    if (n !== null) {
      if (
        typeof WebGLRenderingContext < "u" &&
        n instanceof WebGLRenderingContext
      )
        throw new Error(
          "THREE.WebGLRenderer: WebGL 1 is not supported since r163.",
        );
      f = n.getContextAttributes().alpha;
    } else f = a;
    const g = new Uint32Array(4),
      _ = new Int32Array(4);
    let m = null,
      p = null;
    const S = [],
      M = [];
    ((this.domElement = t),
      (this.debug = { checkShaderErrors: !0, onShaderError: null }),
      (this.autoClear = !0),
      (this.autoClearColor = !0),
      (this.autoClearDepth = !0),
      (this.autoClearStencil = !0),
      (this.sortObjects = !0),
      (this.clippingPlanes = []),
      (this.localClippingEnabled = !1),
      (this.toneMapping = Ai),
      (this.toneMappingExposure = 1),
      (this.transmissionResolutionScale = 1));
    const v = this;
    let b = !1;
    this._outputColorSpace = St;
    let A = 0,
      w = 0,
      C = null,
      x = -1,
      E = null;
    const P = new Ke(),
      V = new Ke();
    let F = null;
    const z = new Ie(0);
    let q = 0,
      G = t.width,
      K = t.height,
      H = 1,
      re = null,
      ae = null;
    const _e = new Ke(0, 0, G, K),
      Pe = new Ke(0, 0, G, K);
    let nt = !1;
    const He = new mc();
    let W = !1,
      oe = !1;
    const ne = new Oe(),
      be = new L(),
      Ae = new Ke(),
      Ue = {
        background: null,
        fog: null,
        environment: null,
        overrideMaterial: null,
        isScene: !0,
      };
    let vt = !1;
    function Ye() {
      return C === null ? H : 1;
    }
    let D = n;
    function at(T, U) {
      return t.getContext(T, U);
    }
    try {
      const T = {
        alpha: !0,
        depth: i,
        stencil: r,
        antialias: o,
        premultipliedAlpha: l,
        preserveDrawingBuffer: c,
        powerPreference: h,
        failIfMajorPerformanceCaveat: u,
      };
      if (
        ("setAttribute" in t &&
          t.setAttribute("data-engine", `three.js r${Ql}`),
        t.addEventListener("webglcontextlost", ie, !1),
        t.addEventListener("webglcontextrestored", de, !1),
        t.addEventListener("webglcontextcreationerror", $, !1),
        D === null)
      ) {
        const U = "webgl2";
        if (((D = at(U, T)), D === null))
          throw at(U)
            ? new Error(
                "Error creating WebGL context with your selected attributes.",
              )
            : new Error("Error creating WebGL context.");
      }
    } catch (T) {
      throw (console.error("THREE.WebGLRenderer: " + T.message), T);
    }
    let Te,
      je,
      Me,
      ct,
      fe,
      ke,
      Dt,
      yt,
      R,
      y,
      O,
      Y,
      Z,
      X,
      ye,
      te,
      ge,
      xe,
      Q,
      he,
      Ce,
      ve,
      le,
      Fe;
    function I() {
      ((Te = new lx(D)),
        Te.init(),
        (ve = new Wv(D, Te)),
        (je = new tx(D, Te, e, ve)),
        (Me = new Vv(D, Te)),
        je.reversedDepthBuffer && d && Me.buffers.depth.setReversed(!0),
        (ct = new ux(D)),
        (fe = new Cv()),
        (ke = new Gv(D, Te, Me, fe, je, ve, ct)),
        (Dt = new ix(v)),
        (yt = new ox(v)),
        (R = new g_(D)),
        (le = new Q0(D, R)),
        (y = new cx(D, R, ct, le)),
        (O = new fx(D, y, R, ct)),
        (Q = new dx(D, je, ke)),
        (te = new nx(fe)),
        (Y = new Rv(v, Dt, yt, Te, je, le, te)),
        (Z = new Zv(v, fe)),
        (X = new Dv()),
        (ye = new Fv(Te)),
        (xe = new J0(v, Dt, yt, Me, O, f, l)),
        (ge = new zv(v, O, je)),
        (Fe = new $v(D, ct, je, Me)),
        (he = new ex(D, Te, ct)),
        (Ce = new hx(D, Te, ct)),
        (ct.programs = Y.programs),
        (v.capabilities = je),
        (v.extensions = Te),
        (v.properties = fe),
        (v.renderLists = X),
        (v.shadowMap = ge),
        (v.state = Me),
        (v.info = ct));
    }
    I();
    const ee = new jv(v, D);
    ((this.xr = ee),
      (this.getContext = function () {
        return D;
      }),
      (this.getContextAttributes = function () {
        return D.getContextAttributes();
      }),
      (this.forceContextLoss = function () {
        const T = Te.get("WEBGL_lose_context");
        T && T.loseContext();
      }),
      (this.forceContextRestore = function () {
        const T = Te.get("WEBGL_lose_context");
        T && T.restoreContext();
      }),
      (this.getPixelRatio = function () {
        return H;
      }),
      (this.setPixelRatio = function (T) {
        T !== void 0 && ((H = T), this.setSize(G, K, !1));
      }),
      (this.getSize = function (T) {
        return T.set(G, K);
      }),
      (this.setSize = function (T, U, B = !0) {
        if (ee.isPresenting) {
          console.warn(
            "THREE.WebGLRenderer: Can't change size while VR device is presenting.",
          );
          return;
        }
        ((G = T),
          (K = U),
          (t.width = Math.floor(T * H)),
          (t.height = Math.floor(U * H)),
          B === !0 && ((t.style.width = T + "px"), (t.style.height = U + "px")),
          this.setViewport(0, 0, T, U));
      }),
      (this.getDrawingBufferSize = function (T) {
        return T.set(G * H, K * H).floor();
      }),
      (this.setDrawingBufferSize = function (T, U, B) {
        ((G = T),
          (K = U),
          (H = B),
          (t.width = Math.floor(T * B)),
          (t.height = Math.floor(U * B)),
          this.setViewport(0, 0, T, U));
      }),
      (this.getCurrentViewport = function (T) {
        return T.copy(P);
      }),
      (this.getViewport = function (T) {
        return T.copy(_e);
      }),
      (this.setViewport = function (T, U, B, k) {
        (T.isVector4 ? _e.set(T.x, T.y, T.z, T.w) : _e.set(T, U, B, k),
          Me.viewport(P.copy(_e).multiplyScalar(H).round()));
      }),
      (this.getScissor = function (T) {
        return T.copy(Pe);
      }),
      (this.setScissor = function (T, U, B, k) {
        (T.isVector4 ? Pe.set(T.x, T.y, T.z, T.w) : Pe.set(T, U, B, k),
          Me.scissor(V.copy(Pe).multiplyScalar(H).round()));
      }),
      (this.getScissorTest = function () {
        return nt;
      }),
      (this.setScissorTest = function (T) {
        Me.setScissorTest((nt = T));
      }),
      (this.setOpaqueSort = function (T) {
        re = T;
      }),
      (this.setTransparentSort = function (T) {
        ae = T;
      }),
      (this.getClearColor = function (T) {
        return T.copy(xe.getClearColor());
      }),
      (this.setClearColor = function () {
        xe.setClearColor(...arguments);
      }),
      (this.getClearAlpha = function () {
        return xe.getClearAlpha();
      }),
      (this.setClearAlpha = function () {
        xe.setClearAlpha(...arguments);
      }),
      (this.clear = function (T = !0, U = !0, B = !0) {
        let k = 0;
        if (T) {
          let N = !1;
          if (C !== null) {
            const J = C.texture.format;
            N = J === oc || J === ac || J === sc;
          }
          if (N) {
            const J = C.texture.type,
              ce =
                J === fn ||
                J === Ci ||
                J === bs ||
                J === As ||
                J === nc ||
                J === ic,
              pe = xe.getClearColor(),
              ue = xe.getClearAlpha(),
              we = pe.r,
              De = pe.g,
              Se = pe.b;
            ce
              ? ((g[0] = we),
                (g[1] = De),
                (g[2] = Se),
                (g[3] = ue),
                D.clearBufferuiv(D.COLOR, 0, g))
              : ((_[0] = we),
                (_[1] = De),
                (_[2] = Se),
                (_[3] = ue),
                D.clearBufferiv(D.COLOR, 0, _));
          } else k |= D.COLOR_BUFFER_BIT;
        }
        (U && (k |= D.DEPTH_BUFFER_BIT),
          B &&
            ((k |= D.STENCIL_BUFFER_BIT),
            this.state.buffers.stencil.setMask(4294967295)),
          D.clear(k));
      }),
      (this.clearColor = function () {
        this.clear(!0, !1, !1);
      }),
      (this.clearDepth = function () {
        this.clear(!1, !0, !1);
      }),
      (this.clearStencil = function () {
        this.clear(!1, !1, !0);
      }),
      (this.dispose = function () {
        (t.removeEventListener("webglcontextlost", ie, !1),
          t.removeEventListener("webglcontextrestored", de, !1),
          t.removeEventListener("webglcontextcreationerror", $, !1),
          xe.dispose(),
          X.dispose(),
          ye.dispose(),
          fe.dispose(),
          Dt.dispose(),
          yt.dispose(),
          O.dispose(),
          le.dispose(),
          Fe.dispose(),
          Y.dispose(),
          ee.dispose(),
          ee.removeEventListener("sessionstart", Nn),
          ee.removeEventListener("sessionend", Gc),
          Ni.stop());
      }));
    function ie(T) {
      (T.preventDefault(),
        console.log("THREE.WebGLRenderer: Context Lost."),
        (b = !0));
    }
    function de() {
      (console.log("THREE.WebGLRenderer: Context Restored."), (b = !1));
      const T = ct.autoReset,
        U = ge.enabled,
        B = ge.autoUpdate,
        k = ge.needsUpdate,
        N = ge.type;
      (I(),
        (ct.autoReset = T),
        (ge.enabled = U),
        (ge.autoUpdate = B),
        (ge.needsUpdate = k),
        (ge.type = N));
    }
    function $(T) {
      console.error(
        "THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",
        T.statusMessage,
      );
    }
    function j(T) {
      const U = T.target;
      (U.removeEventListener("dispose", j), me(U));
    }
    function me(T) {
      (Ne(T), fe.remove(T));
    }
    function Ne(T) {
      const U = fe.get(T).programs;
      U !== void 0 &&
        (U.forEach(function (B) {
          Y.releaseProgram(B);
        }),
        T.isShaderMaterial && Y.releaseShaderCache(T));
    }
    this.renderBufferDirect = function (T, U, B, k, N, J) {
      U === null && (U = Ue);
      const ce = N.isMesh && N.matrixWorld.determinant() < 0,
        pe = Df(T, U, B, k, N);
      Me.setMaterial(k, ce);
      let ue = B.index,
        we = 1;
      if (k.wireframe === !0) {
        if (((ue = y.getWireframeAttribute(B)), ue === void 0)) return;
        we = 2;
      }
      const De = B.drawRange,
        Se = B.attributes.position;
      let Ge = De.start * we,
        Qe = (De.start + De.count) * we;
      (J !== null &&
        ((Ge = Math.max(Ge, J.start * we)),
        (Qe = Math.min(Qe, (J.start + J.count) * we))),
        ue !== null
          ? ((Ge = Math.max(Ge, 0)), (Qe = Math.min(Qe, ue.count)))
          : Se != null &&
            ((Ge = Math.max(Ge, 0)), (Qe = Math.min(Qe, Se.count))));
      const gt = Qe - Ge;
      if (gt < 0 || gt === 1 / 0) return;
      le.setup(N, k, pe, B, ue);
      let lt,
        it = he;
      if (
        (ue !== null && ((lt = R.get(ue)), (it = Ce), it.setIndex(lt)),
        N.isMesh)
      )
        k.wireframe === !0
          ? (Me.setLineWidth(k.wireframeLinewidth * Ye()), it.setMode(D.LINES))
          : it.setMode(D.TRIANGLES);
      else if (N.isLine) {
        let Ee = k.linewidth;
        (Ee === void 0 && (Ee = 1),
          Me.setLineWidth(Ee * Ye()),
          N.isLineSegments
            ? it.setMode(D.LINES)
            : N.isLineLoop
              ? it.setMode(D.LINE_LOOP)
              : it.setMode(D.LINE_STRIP));
      } else
        N.isPoints
          ? it.setMode(D.POINTS)
          : N.isSprite && it.setMode(D.TRIANGLES);
      if (N.isBatchedMesh)
        if (N._multiDrawInstances !== null)
          (Dr(
            "THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection.",
          ),
            it.renderMultiDrawInstances(
              N._multiDrawStarts,
              N._multiDrawCounts,
              N._multiDrawCount,
              N._multiDrawInstances,
            ));
        else if (Te.get("WEBGL_multi_draw"))
          it.renderMultiDraw(
            N._multiDrawStarts,
            N._multiDrawCounts,
            N._multiDrawCount,
          );
        else {
          const Ee = N._multiDrawStarts,
            ft = N._multiDrawCounts,
            qe = N._multiDrawCount,
            sn = ue ? R.get(ue).bytesPerElement : 1,
            ar = fe.get(k).currentProgram.getUniforms();
          for (let an = 0; an < qe; an++)
            (ar.setValue(D, "_gl_DrawID", an), it.render(Ee[an] / sn, ft[an]));
        }
      else if (N.isInstancedMesh) it.renderInstances(Ge, gt, N.count);
      else if (B.isInstancedBufferGeometry) {
        const Ee = B._maxInstanceCount !== void 0 ? B._maxInstanceCount : 1 / 0,
          ft = Math.min(B.instanceCount, Ee);
        it.renderInstances(Ge, gt, ft);
      } else it.render(Ge, gt);
    };
    function ot(T, U, B) {
      T.transparent === !0 && T.side === Fn && T.forceSinglePass === !1
        ? ((T.side = Jt),
          (T.needsUpdate = !0),
          Gs(T, U, B),
          (T.side = li),
          (T.needsUpdate = !0),
          Gs(T, U, B),
          (T.side = Fn))
        : Gs(T, U, B);
    }
    ((this.compile = function (T, U, B = null) {
      (B === null && (B = T),
        (p = ye.get(B)),
        p.init(U),
        M.push(p),
        B.traverseVisible(function (N) {
          N.isLight &&
            N.layers.test(U.layers) &&
            (p.pushLight(N), N.castShadow && p.pushShadow(N));
        }),
        T !== B &&
          T.traverseVisible(function (N) {
            N.isLight &&
              N.layers.test(U.layers) &&
              (p.pushLight(N), N.castShadow && p.pushShadow(N));
          }),
        p.setupLights());
      const k = new Set();
      return (
        T.traverse(function (N) {
          if (!(N.isMesh || N.isPoints || N.isLine || N.isSprite)) return;
          const J = N.material;
          if (J)
            if (Array.isArray(J))
              for (let ce = 0; ce < J.length; ce++) {
                const pe = J[ce];
                (ot(pe, B, N), k.add(pe));
              }
            else (ot(J, B, N), k.add(J));
        }),
        (p = M.pop()),
        k
      );
    }),
      (this.compileAsync = function (T, U, B = null) {
        const k = this.compile(T, U, B);
        return new Promise((N) => {
          function J() {
            if (
              (k.forEach(function (ce) {
                fe.get(ce).currentProgram.isReady() && k.delete(ce);
              }),
              k.size === 0)
            ) {
              N(T);
              return;
            }
            setTimeout(J, 10);
          }
          Te.get("KHR_parallel_shader_compile") !== null
            ? J()
            : setTimeout(J, 10);
        });
      }));
    let Ze = null;
    function qn(T) {
      Ze && Ze(T);
    }
    function Nn() {
      Ni.stop();
    }
    function Gc() {
      Ni.start();
    }
    const Ni = new Md();
    (Ni.setAnimationLoop(qn),
      typeof self < "u" && Ni.setContext(self),
      (this.setAnimationLoop = function (T) {
        ((Ze = T), ee.setAnimationLoop(T), T === null ? Ni.stop() : Ni.start());
      }),
      ee.addEventListener("sessionstart", Nn),
      ee.addEventListener("sessionend", Gc),
      (this.render = function (T, U) {
        if (U !== void 0 && U.isCamera !== !0) {
          console.error(
            "THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.",
          );
          return;
        }
        if (b === !0) return;
        if (
          (T.matrixWorldAutoUpdate === !0 && T.updateMatrixWorld(),
          U.parent === null &&
            U.matrixWorldAutoUpdate === !0 &&
            U.updateMatrixWorld(),
          ee.enabled === !0 &&
            ee.isPresenting === !0 &&
            (ee.cameraAutoUpdate === !0 && ee.updateCamera(U),
            (U = ee.getCamera())),
          T.isScene === !0 && T.onBeforeRender(v, T, U, C),
          (p = ye.get(T, M.length)),
          p.init(U),
          M.push(p),
          ne.multiplyMatrices(U.projectionMatrix, U.matrixWorldInverse),
          He.setFromProjectionMatrix(ne, kn, U.reversedDepth),
          (oe = this.localClippingEnabled),
          (W = te.init(this.clippingPlanes, oe)),
          (m = X.get(T, S.length)),
          m.init(),
          S.push(m),
          ee.enabled === !0 && ee.isPresenting === !0)
        ) {
          const J = v.xr.getDepthSensingMesh();
          J !== null && Za(J, U, -1 / 0, v.sortObjects);
        }
        (Za(T, U, 0, v.sortObjects),
          m.finish(),
          v.sortObjects === !0 && m.sort(re, ae),
          (vt =
            ee.enabled === !1 ||
            ee.isPresenting === !1 ||
            ee.hasDepthSensing() === !1),
          vt && xe.addToRenderList(m, T),
          this.info.render.frame++,
          W === !0 && te.beginShadows());
        const B = p.state.shadowsArray;
        (ge.render(B, T, U),
          W === !0 && te.endShadows(),
          this.info.autoReset === !0 && this.info.reset());
        const k = m.opaque,
          N = m.transmissive;
        if ((p.setupLights(), U.isArrayCamera)) {
          const J = U.cameras;
          if (N.length > 0)
            for (let ce = 0, pe = J.length; ce < pe; ce++) {
              const ue = J[ce];
              Xc(k, N, T, ue);
            }
          vt && xe.render(T);
          for (let ce = 0, pe = J.length; ce < pe; ce++) {
            const ue = J[ce];
            Wc(m, T, ue, ue.viewport);
          }
        } else
          (N.length > 0 && Xc(k, N, T, U), vt && xe.render(T), Wc(m, T, U));
        (C !== null &&
          w === 0 &&
          (ke.updateMultisampleRenderTarget(C), ke.updateRenderTargetMipmap(C)),
          T.isScene === !0 && T.onAfterRender(v, T, U),
          le.resetDefaultState(),
          (x = -1),
          (E = null),
          M.pop(),
          M.length > 0
            ? ((p = M[M.length - 1]),
              W === !0 && te.setGlobalState(v.clippingPlanes, p.state.camera))
            : (p = null),
          S.pop(),
          S.length > 0 ? (m = S[S.length - 1]) : (m = null));
      }));
    function Za(T, U, B, k) {
      if (T.visible === !1) return;
      if (T.layers.test(U.layers)) {
        if (T.isGroup) B = T.renderOrder;
        else if (T.isLOD) T.autoUpdate === !0 && T.update(U);
        else if (T.isLight) (p.pushLight(T), T.castShadow && p.pushShadow(T));
        else if (T.isSprite) {
          if (!T.frustumCulled || He.intersectsSprite(T)) {
            k && Ae.setFromMatrixPosition(T.matrixWorld).applyMatrix4(ne);
            const ce = O.update(T),
              pe = T.material;
            pe.visible && m.push(T, ce, pe, B, Ae.z, null);
          }
        } else if (
          (T.isMesh || T.isLine || T.isPoints) &&
          (!T.frustumCulled || He.intersectsObject(T))
        ) {
          const ce = O.update(T),
            pe = T.material;
          if (
            (k &&
              (T.boundingSphere !== void 0
                ? (T.boundingSphere === null && T.computeBoundingSphere(),
                  Ae.copy(T.boundingSphere.center))
                : (ce.boundingSphere === null && ce.computeBoundingSphere(),
                  Ae.copy(ce.boundingSphere.center)),
              Ae.applyMatrix4(T.matrixWorld).applyMatrix4(ne)),
            Array.isArray(pe))
          ) {
            const ue = ce.groups;
            for (let we = 0, De = ue.length; we < De; we++) {
              const Se = ue[we],
                Ge = pe[Se.materialIndex];
              Ge && Ge.visible && m.push(T, ce, Ge, B, Ae.z, Se);
            }
          } else pe.visible && m.push(T, ce, pe, B, Ae.z, null);
        }
      }
      const J = T.children;
      for (let ce = 0, pe = J.length; ce < pe; ce++) Za(J[ce], U, B, k);
    }
    function Wc(T, U, B, k) {
      const N = T.opaque,
        J = T.transmissive,
        ce = T.transparent;
      (p.setupLightsView(B),
        W === !0 && te.setGlobalState(v.clippingPlanes, B),
        k && Me.viewport(P.copy(k)),
        N.length > 0 && Vs(N, U, B),
        J.length > 0 && Vs(J, U, B),
        ce.length > 0 && Vs(ce, U, B),
        Me.buffers.depth.setTest(!0),
        Me.buffers.depth.setMask(!0),
        Me.buffers.color.setMask(!0),
        Me.setPolygonOffset(!1));
    }
    function Xc(T, U, B, k) {
      if ((B.isScene === !0 ? B.overrideMaterial : null) !== null) return;
      p.state.transmissionRenderTarget[k.id] === void 0 &&
        (p.state.transmissionRenderTarget[k.id] = new ci(1, 1, {
          generateMipmaps: !0,
          type:
            Te.has("EXT_color_buffer_half_float") ||
            Te.has("EXT_color_buffer_float")
              ? Li
              : fn,
          minFilter: ri,
          samples: 4,
          stencilBuffer: r,
          resolveDepthBuffer: !1,
          resolveStencilBuffer: !1,
          colorSpace: We.workingColorSpace,
        }));
      const J = p.state.transmissionRenderTarget[k.id],
        ce = k.viewport || P;
      J.setSize(
        ce.z * v.transmissionResolutionScale,
        ce.w * v.transmissionResolutionScale,
      );
      const pe = v.getRenderTarget(),
        ue = v.getActiveCubeFace(),
        we = v.getActiveMipmapLevel();
      (v.setRenderTarget(J),
        v.getClearColor(z),
        (q = v.getClearAlpha()),
        q < 1 && v.setClearColor(16777215, 0.5),
        v.clear(),
        vt && xe.render(B));
      const De = v.toneMapping;
      v.toneMapping = Ai;
      const Se = k.viewport;
      if (
        (k.viewport !== void 0 && (k.viewport = void 0),
        p.setupLightsView(k),
        W === !0 && te.setGlobalState(v.clippingPlanes, k),
        Vs(T, B, k),
        ke.updateMultisampleRenderTarget(J),
        ke.updateRenderTargetMipmap(J),
        Te.has("WEBGL_multisampled_render_to_texture") === !1)
      ) {
        let Ge = !1;
        for (let Qe = 0, gt = U.length; Qe < gt; Qe++) {
          const lt = U[Qe],
            it = lt.object,
            Ee = lt.geometry,
            ft = lt.material,
            qe = lt.group;
          if (ft.side === Fn && it.layers.test(k.layers)) {
            const sn = ft.side;
            ((ft.side = Jt),
              (ft.needsUpdate = !0),
              Yc(it, B, k, Ee, ft, qe),
              (ft.side = sn),
              (ft.needsUpdate = !0),
              (Ge = !0));
          }
        }
        Ge === !0 &&
          (ke.updateMultisampleRenderTarget(J), ke.updateRenderTargetMipmap(J));
      }
      (v.setRenderTarget(pe, ue, we),
        v.setClearColor(z, q),
        Se !== void 0 && (k.viewport = Se),
        (v.toneMapping = De));
    }
    function Vs(T, U, B) {
      const k = U.isScene === !0 ? U.overrideMaterial : null;
      for (let N = 0, J = T.length; N < J; N++) {
        const ce = T[N],
          pe = ce.object,
          ue = ce.geometry,
          we = ce.group;
        let De = ce.material;
        (De.allowOverride === !0 && k !== null && (De = k),
          pe.layers.test(B.layers) && Yc(pe, U, B, ue, De, we));
      }
    }
    function Yc(T, U, B, k, N, J) {
      (T.onBeforeRender(v, U, B, k, N, J),
        T.modelViewMatrix.multiplyMatrices(B.matrixWorldInverse, T.matrixWorld),
        T.normalMatrix.getNormalMatrix(T.modelViewMatrix),
        N.onBeforeRender(v, U, B, k, T, J),
        N.transparent === !0 && N.side === Fn && N.forceSinglePass === !1
          ? ((N.side = Jt),
            (N.needsUpdate = !0),
            v.renderBufferDirect(B, U, k, N, T, J),
            (N.side = li),
            (N.needsUpdate = !0),
            v.renderBufferDirect(B, U, k, N, T, J),
            (N.side = Fn))
          : v.renderBufferDirect(B, U, k, N, T, J),
        T.onAfterRender(v, U, B, k, N, J));
    }
    function Gs(T, U, B) {
      U.isScene !== !0 && (U = Ue);
      const k = fe.get(T),
        N = p.state.lights,
        J = p.state.shadowsArray,
        ce = N.state.version,
        pe = Y.getParameters(T, N.state, J, U, B),
        ue = Y.getProgramCacheKey(pe);
      let we = k.programs;
      ((k.environment = T.isMeshStandardMaterial ? U.environment : null),
        (k.fog = U.fog),
        (k.envMap = (T.isMeshStandardMaterial ? yt : Dt).get(
          T.envMap || k.environment,
        )),
        (k.envMapRotation =
          k.environment !== null && T.envMap === null
            ? U.environmentRotation
            : T.envMapRotation),
        we === void 0 &&
          (T.addEventListener("dispose", j),
          (we = new Map()),
          (k.programs = we)));
      let De = we.get(ue);
      if (De !== void 0) {
        if (k.currentProgram === De && k.lightsStateVersion === ce)
          return (jc(T, pe), De);
      } else
        ((pe.uniforms = Y.getUniforms(T)),
          T.onBeforeCompile(pe, v),
          (De = Y.acquireProgram(pe, ue)),
          we.set(ue, De),
          (k.uniforms = pe.uniforms));
      const Se = k.uniforms;
      return (
        ((!T.isShaderMaterial && !T.isRawShaderMaterial) ||
          T.clipping === !0) &&
          (Se.clippingPlanes = te.uniform),
        jc(T, pe),
        (k.needsLights = If(T)),
        (k.lightsStateVersion = ce),
        k.needsLights &&
          ((Se.ambientLightColor.value = N.state.ambient),
          (Se.lightProbe.value = N.state.probe),
          (Se.directionalLights.value = N.state.directional),
          (Se.directionalLightShadows.value = N.state.directionalShadow),
          (Se.spotLights.value = N.state.spot),
          (Se.spotLightShadows.value = N.state.spotShadow),
          (Se.rectAreaLights.value = N.state.rectArea),
          (Se.ltc_1.value = N.state.rectAreaLTC1),
          (Se.ltc_2.value = N.state.rectAreaLTC2),
          (Se.pointLights.value = N.state.point),
          (Se.pointLightShadows.value = N.state.pointShadow),
          (Se.hemisphereLights.value = N.state.hemi),
          (Se.directionalShadowMap.value = N.state.directionalShadowMap),
          (Se.directionalShadowMatrix.value = N.state.directionalShadowMatrix),
          (Se.spotShadowMap.value = N.state.spotShadowMap),
          (Se.spotLightMatrix.value = N.state.spotLightMatrix),
          (Se.spotLightMap.value = N.state.spotLightMap),
          (Se.pointShadowMap.value = N.state.pointShadowMap),
          (Se.pointShadowMatrix.value = N.state.pointShadowMatrix)),
        (k.currentProgram = De),
        (k.uniformsList = null),
        De
      );
    }
    function qc(T) {
      if (T.uniformsList === null) {
        const U = T.currentProgram.getUniforms();
        T.uniformsList = Aa.seqWithValue(U.seq, T.uniforms);
      }
      return T.uniformsList;
    }
    function jc(T, U) {
      const B = fe.get(T);
      ((B.outputColorSpace = U.outputColorSpace),
        (B.batching = U.batching),
        (B.batchingColor = U.batchingColor),
        (B.instancing = U.instancing),
        (B.instancingColor = U.instancingColor),
        (B.instancingMorph = U.instancingMorph),
        (B.skinning = U.skinning),
        (B.morphTargets = U.morphTargets),
        (B.morphNormals = U.morphNormals),
        (B.morphColors = U.morphColors),
        (B.morphTargetsCount = U.morphTargetsCount),
        (B.numClippingPlanes = U.numClippingPlanes),
        (B.numIntersection = U.numClipIntersection),
        (B.vertexAlphas = U.vertexAlphas),
        (B.vertexTangents = U.vertexTangents),
        (B.toneMapping = U.toneMapping));
    }
    function Df(T, U, B, k, N) {
      (U.isScene !== !0 && (U = Ue), ke.resetTextureUnits());
      const J = U.fog,
        ce = k.isMeshStandardMaterial ? U.environment : null,
        pe =
          C === null
            ? v.outputColorSpace
            : C.isXRRenderTarget === !0
              ? C.texture.colorSpace
              : Rt,
        ue = (k.isMeshStandardMaterial ? yt : Dt).get(k.envMap || ce),
        we =
          k.vertexColors === !0 &&
          !!B.attributes.color &&
          B.attributes.color.itemSize === 4,
        De = !!B.attributes.tangent && (!!k.normalMap || k.anisotropy > 0),
        Se = !!B.morphAttributes.position,
        Ge = !!B.morphAttributes.normal,
        Qe = !!B.morphAttributes.color;
      let gt = Ai;
      k.toneMapped &&
        (C === null || C.isXRRenderTarget === !0) &&
        (gt = v.toneMapping);
      const lt =
          B.morphAttributes.position ||
          B.morphAttributes.normal ||
          B.morphAttributes.color,
        it = lt !== void 0 ? lt.length : 0,
        Ee = fe.get(k),
        ft = p.state.lights;
      if (W === !0 && (oe === !0 || T !== E)) {
        const Vt = T === E && k.id === x;
        te.setState(k, T, Vt);
      }
      let qe = !1;
      k.version === Ee.__version
        ? ((Ee.needsLights && Ee.lightsStateVersion !== ft.state.version) ||
            Ee.outputColorSpace !== pe ||
            (N.isBatchedMesh && Ee.batching === !1) ||
            (!N.isBatchedMesh && Ee.batching === !0) ||
            (N.isBatchedMesh &&
              Ee.batchingColor === !0 &&
              N.colorTexture === null) ||
            (N.isBatchedMesh &&
              Ee.batchingColor === !1 &&
              N.colorTexture !== null) ||
            (N.isInstancedMesh && Ee.instancing === !1) ||
            (!N.isInstancedMesh && Ee.instancing === !0) ||
            (N.isSkinnedMesh && Ee.skinning === !1) ||
            (!N.isSkinnedMesh && Ee.skinning === !0) ||
            (N.isInstancedMesh &&
              Ee.instancingColor === !0 &&
              N.instanceColor === null) ||
            (N.isInstancedMesh &&
              Ee.instancingColor === !1 &&
              N.instanceColor !== null) ||
            (N.isInstancedMesh &&
              Ee.instancingMorph === !0 &&
              N.morphTexture === null) ||
            (N.isInstancedMesh &&
              Ee.instancingMorph === !1 &&
              N.morphTexture !== null) ||
            Ee.envMap !== ue ||
            (k.fog === !0 && Ee.fog !== J) ||
            (Ee.numClippingPlanes !== void 0 &&
              (Ee.numClippingPlanes !== te.numPlanes ||
                Ee.numIntersection !== te.numIntersection)) ||
            Ee.vertexAlphas !== we ||
            Ee.vertexTangents !== De ||
            Ee.morphTargets !== Se ||
            Ee.morphNormals !== Ge ||
            Ee.morphColors !== Qe ||
            Ee.toneMapping !== gt ||
            Ee.morphTargetsCount !== it) &&
          (qe = !0)
        : ((qe = !0), (Ee.__version = k.version));
      let sn = Ee.currentProgram;
      qe === !0 && (sn = Gs(k, U, N));
      let ar = !1,
        an = !1,
        rs = !1;
      const pt = sn.getUniforms(),
        _n = Ee.uniforms;
      if (
        (Me.useProgram(sn.program) && ((ar = !0), (an = !0), (rs = !0)),
        k.id !== x && ((x = k.id), (an = !0)),
        ar || E !== T)
      ) {
        (Me.buffers.depth.getReversed() &&
          T.reversedDepth !== !0 &&
          ((T._reversedDepth = !0), T.updateProjectionMatrix()),
          pt.setValue(D, "projectionMatrix", T.projectionMatrix),
          pt.setValue(D, "viewMatrix", T.matrixWorldInverse));
        const jt = pt.map.cameraPosition;
        (jt !== void 0 &&
          jt.setValue(D, be.setFromMatrixPosition(T.matrixWorld)),
          je.logarithmicDepthBuffer &&
            pt.setValue(
              D,
              "logDepthBufFC",
              2 / (Math.log(T.far + 1) / Math.LN2),
            ),
          (k.isMeshPhongMaterial ||
            k.isMeshToonMaterial ||
            k.isMeshLambertMaterial ||
            k.isMeshBasicMaterial ||
            k.isMeshStandardMaterial ||
            k.isShaderMaterial) &&
            pt.setValue(D, "isOrthographic", T.isOrthographicCamera === !0),
          E !== T && ((E = T), (an = !0), (rs = !0)));
      }
      if (N.isSkinnedMesh) {
        (pt.setOptional(D, N, "bindMatrix"),
          pt.setOptional(D, N, "bindMatrixInverse"));
        const Vt = N.skeleton;
        Vt &&
          (Vt.boneTexture === null && Vt.computeBoneTexture(),
          pt.setValue(D, "boneTexture", Vt.boneTexture, ke));
      }
      N.isBatchedMesh &&
        (pt.setOptional(D, N, "batchingTexture"),
        pt.setValue(D, "batchingTexture", N._matricesTexture, ke),
        pt.setOptional(D, N, "batchingIdTexture"),
        pt.setValue(D, "batchingIdTexture", N._indirectTexture, ke),
        pt.setOptional(D, N, "batchingColorTexture"),
        N._colorsTexture !== null &&
          pt.setValue(D, "batchingColorTexture", N._colorsTexture, ke));
      const gn = B.morphAttributes;
      if (
        ((gn.position !== void 0 ||
          gn.normal !== void 0 ||
          gn.color !== void 0) &&
          Q.update(N, B, sn),
        (an || Ee.receiveShadow !== N.receiveShadow) &&
          ((Ee.receiveShadow = N.receiveShadow),
          pt.setValue(D, "receiveShadow", N.receiveShadow)),
        k.isMeshGouraudMaterial &&
          k.envMap !== null &&
          ((_n.envMap.value = ue),
          (_n.flipEnvMap.value =
            ue.isCubeTexture && ue.isRenderTargetTexture === !1 ? -1 : 1)),
        k.isMeshStandardMaterial &&
          k.envMap === null &&
          U.environment !== null &&
          (_n.envMapIntensity.value = U.environmentIntensity),
        an &&
          (pt.setValue(D, "toneMappingExposure", v.toneMappingExposure),
          Ee.needsLights && Lf(_n, rs),
          J && k.fog === !0 && Z.refreshFogUniforms(_n, J),
          Z.refreshMaterialUniforms(
            _n,
            k,
            H,
            K,
            p.state.transmissionRenderTarget[T.id],
          ),
          Aa.upload(D, qc(Ee), _n, ke)),
        k.isShaderMaterial &&
          k.uniformsNeedUpdate === !0 &&
          (Aa.upload(D, qc(Ee), _n, ke), (k.uniformsNeedUpdate = !1)),
        k.isSpriteMaterial && pt.setValue(D, "center", N.center),
        pt.setValue(D, "modelViewMatrix", N.modelViewMatrix),
        pt.setValue(D, "normalMatrix", N.normalMatrix),
        pt.setValue(D, "modelMatrix", N.matrixWorld),
        k.isShaderMaterial || k.isRawShaderMaterial)
      ) {
        const Vt = k.uniformsGroups;
        for (let jt = 0, $a = Vt.length; jt < $a; jt++) {
          const Oi = Vt[jt];
          (Fe.update(Oi, sn), Fe.bind(Oi, sn));
        }
      }
      return sn;
    }
    function Lf(T, U) {
      ((T.ambientLightColor.needsUpdate = U),
        (T.lightProbe.needsUpdate = U),
        (T.directionalLights.needsUpdate = U),
        (T.directionalLightShadows.needsUpdate = U),
        (T.pointLights.needsUpdate = U),
        (T.pointLightShadows.needsUpdate = U),
        (T.spotLights.needsUpdate = U),
        (T.spotLightShadows.needsUpdate = U),
        (T.rectAreaLights.needsUpdate = U),
        (T.hemisphereLights.needsUpdate = U));
    }
    function If(T) {
      return (
        T.isMeshLambertMaterial ||
        T.isMeshToonMaterial ||
        T.isMeshPhongMaterial ||
        T.isMeshStandardMaterial ||
        T.isShadowMaterial ||
        (T.isShaderMaterial && T.lights === !0)
      );
    }
    ((this.getActiveCubeFace = function () {
      return A;
    }),
      (this.getActiveMipmapLevel = function () {
        return w;
      }),
      (this.getRenderTarget = function () {
        return C;
      }),
      (this.setRenderTargetTextures = function (T, U, B) {
        const k = fe.get(T);
        ((k.__autoAllocateDepthBuffer = T.resolveDepthBuffer === !1),
          k.__autoAllocateDepthBuffer === !1 && (k.__useRenderToTexture = !1),
          (fe.get(T.texture).__webglTexture = U),
          (fe.get(T.depthTexture).__webglTexture = k.__autoAllocateDepthBuffer
            ? void 0
            : B),
          (k.__hasExternalTextures = !0));
      }),
      (this.setRenderTargetFramebuffer = function (T, U) {
        const B = fe.get(T);
        ((B.__webglFramebuffer = U),
          (B.__useDefaultFramebuffer = U === void 0));
      }));
    const Uf = D.createFramebuffer();
    ((this.setRenderTarget = function (T, U = 0, B = 0) {
      ((C = T), (A = U), (w = B));
      let k = !0,
        N = null,
        J = !1,
        ce = !1;
      if (T) {
        const ue = fe.get(T);
        if (ue.__useDefaultFramebuffer !== void 0)
          (Me.bindFramebuffer(D.FRAMEBUFFER, null), (k = !1));
        else if (ue.__webglFramebuffer === void 0) ke.setupRenderTarget(T);
        else if (ue.__hasExternalTextures)
          ke.rebindTextures(
            T,
            fe.get(T.texture).__webglTexture,
            fe.get(T.depthTexture).__webglTexture,
          );
        else if (T.depthBuffer) {
          const Se = T.depthTexture;
          if (ue.__boundDepthTexture !== Se) {
            if (
              Se !== null &&
              fe.has(Se) &&
              (T.width !== Se.image.width || T.height !== Se.image.height)
            )
              throw new Error(
                "WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.",
              );
            ke.setupDepthRenderbuffer(T);
          }
        }
        const we = T.texture;
        (we.isData3DTexture ||
          we.isDataArrayTexture ||
          we.isCompressedArrayTexture) &&
          (ce = !0);
        const De = fe.get(T).__webglFramebuffer;
        (T.isWebGLCubeRenderTarget
          ? (Array.isArray(De[U]) ? (N = De[U][B]) : (N = De[U]), (J = !0))
          : T.samples > 0 && ke.useMultisampledRTT(T) === !1
            ? (N = fe.get(T).__webglMultisampledFramebuffer)
            : Array.isArray(De)
              ? (N = De[B])
              : (N = De),
          P.copy(T.viewport),
          V.copy(T.scissor),
          (F = T.scissorTest));
      } else
        (P.copy(_e).multiplyScalar(H).floor(),
          V.copy(Pe).multiplyScalar(H).floor(),
          (F = nt));
      if (
        (B !== 0 && (N = Uf),
        Me.bindFramebuffer(D.FRAMEBUFFER, N) && k && Me.drawBuffers(T, N),
        Me.viewport(P),
        Me.scissor(V),
        Me.setScissorTest(F),
        J)
      ) {
        const ue = fe.get(T.texture);
        D.framebufferTexture2D(
          D.FRAMEBUFFER,
          D.COLOR_ATTACHMENT0,
          D.TEXTURE_CUBE_MAP_POSITIVE_X + U,
          ue.__webglTexture,
          B,
        );
      } else if (ce) {
        const ue = U;
        for (let we = 0; we < T.textures.length; we++) {
          const De = fe.get(T.textures[we]);
          D.framebufferTextureLayer(
            D.FRAMEBUFFER,
            D.COLOR_ATTACHMENT0 + we,
            De.__webglTexture,
            B,
            ue,
          );
        }
      } else if (T !== null && B !== 0) {
        const ue = fe.get(T.texture);
        D.framebufferTexture2D(
          D.FRAMEBUFFER,
          D.COLOR_ATTACHMENT0,
          D.TEXTURE_2D,
          ue.__webglTexture,
          B,
        );
      }
      x = -1;
    }),
      (this.readRenderTargetPixels = function (T, U, B, k, N, J, ce, pe = 0) {
        if (!(T && T.isWebGLRenderTarget)) {
          console.error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
          return;
        }
        let ue = fe.get(T).__webglFramebuffer;
        if ((T.isWebGLCubeRenderTarget && ce !== void 0 && (ue = ue[ce]), ue)) {
          Me.bindFramebuffer(D.FRAMEBUFFER, ue);
          try {
            const we = T.textures[pe],
              De = we.format,
              Se = we.type;
            if (!je.textureFormatReadable(De)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.",
              );
              return;
            }
            if (!je.textureTypeReadable(Se)) {
              console.error(
                "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.",
              );
              return;
            }
            U >= 0 &&
              U <= T.width - k &&
              B >= 0 &&
              B <= T.height - N &&
              (T.textures.length > 1 && D.readBuffer(D.COLOR_ATTACHMENT0 + pe),
              D.readPixels(U, B, k, N, ve.convert(De), ve.convert(Se), J));
          } finally {
            const we = C !== null ? fe.get(C).__webglFramebuffer : null;
            Me.bindFramebuffer(D.FRAMEBUFFER, we);
          }
        }
      }),
      (this.readRenderTargetPixelsAsync = async function (
        T,
        U,
        B,
        k,
        N,
        J,
        ce,
        pe = 0,
      ) {
        if (!(T && T.isWebGLRenderTarget))
          throw new Error(
            "THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.",
          );
        let ue = fe.get(T).__webglFramebuffer;
        if ((T.isWebGLCubeRenderTarget && ce !== void 0 && (ue = ue[ce]), ue))
          if (U >= 0 && U <= T.width - k && B >= 0 && B <= T.height - N) {
            Me.bindFramebuffer(D.FRAMEBUFFER, ue);
            const we = T.textures[pe],
              De = we.format,
              Se = we.type;
            if (!je.textureFormatReadable(De))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.",
              );
            if (!je.textureTypeReadable(Se))
              throw new Error(
                "THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.",
              );
            const Ge = D.createBuffer();
            (D.bindBuffer(D.PIXEL_PACK_BUFFER, Ge),
              D.bufferData(D.PIXEL_PACK_BUFFER, J.byteLength, D.STREAM_READ),
              T.textures.length > 1 && D.readBuffer(D.COLOR_ATTACHMENT0 + pe),
              D.readPixels(U, B, k, N, ve.convert(De), ve.convert(Se), 0));
            const Qe = C !== null ? fe.get(C).__webglFramebuffer : null;
            Me.bindFramebuffer(D.FRAMEBUFFER, Qe);
            const gt = D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE, 0);
            return (
              D.flush(),
              await em(D, gt, 4),
              D.bindBuffer(D.PIXEL_PACK_BUFFER, Ge),
              D.getBufferSubData(D.PIXEL_PACK_BUFFER, 0, J),
              D.deleteBuffer(Ge),
              D.deleteSync(gt),
              J
            );
          } else
            throw new Error(
              "THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.",
            );
      }),
      (this.copyFramebufferToTexture = function (T, U = null, B = 0) {
        const k = Math.pow(2, -B),
          N = Math.floor(T.image.width * k),
          J = Math.floor(T.image.height * k),
          ce = U !== null ? U.x : 0,
          pe = U !== null ? U.y : 0;
        (ke.setTexture2D(T, 0),
          D.copyTexSubImage2D(D.TEXTURE_2D, B, 0, 0, ce, pe, N, J),
          Me.unbindTexture());
      }));
    const Nf = D.createFramebuffer(),
      Of = D.createFramebuffer();
    ((this.copyTextureToTexture = function (
      T,
      U,
      B = null,
      k = null,
      N = 0,
      J = null,
    ) {
      J === null &&
        (N !== 0
          ? (Dr(
              "WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels.",
            ),
            (J = N),
            (N = 0))
          : (J = 0));
      let ce, pe, ue, we, De, Se, Ge, Qe, gt;
      const lt = T.isCompressedTexture ? T.mipmaps[J] : T.image;
      if (B !== null)
        ((ce = B.max.x - B.min.x),
          (pe = B.max.y - B.min.y),
          (ue = B.isBox3 ? B.max.z - B.min.z : 1),
          (we = B.min.x),
          (De = B.min.y),
          (Se = B.isBox3 ? B.min.z : 0));
      else {
        const gn = Math.pow(2, -N);
        ((ce = Math.floor(lt.width * gn)),
          (pe = Math.floor(lt.height * gn)),
          T.isDataArrayTexture
            ? (ue = lt.depth)
            : T.isData3DTexture
              ? (ue = Math.floor(lt.depth * gn))
              : (ue = 1),
          (we = 0),
          (De = 0),
          (Se = 0));
      }
      k !== null
        ? ((Ge = k.x), (Qe = k.y), (gt = k.z))
        : ((Ge = 0), (Qe = 0), (gt = 0));
      const it = ve.convert(U.format),
        Ee = ve.convert(U.type);
      let ft;
      (U.isData3DTexture
        ? (ke.setTexture3D(U, 0), (ft = D.TEXTURE_3D))
        : U.isDataArrayTexture || U.isCompressedArrayTexture
          ? (ke.setTexture2DArray(U, 0), (ft = D.TEXTURE_2D_ARRAY))
          : (ke.setTexture2D(U, 0), (ft = D.TEXTURE_2D)),
        D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL, U.flipY),
        D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL, U.premultiplyAlpha),
        D.pixelStorei(D.UNPACK_ALIGNMENT, U.unpackAlignment));
      const qe = D.getParameter(D.UNPACK_ROW_LENGTH),
        sn = D.getParameter(D.UNPACK_IMAGE_HEIGHT),
        ar = D.getParameter(D.UNPACK_SKIP_PIXELS),
        an = D.getParameter(D.UNPACK_SKIP_ROWS),
        rs = D.getParameter(D.UNPACK_SKIP_IMAGES);
      (D.pixelStorei(D.UNPACK_ROW_LENGTH, lt.width),
        D.pixelStorei(D.UNPACK_IMAGE_HEIGHT, lt.height),
        D.pixelStorei(D.UNPACK_SKIP_PIXELS, we),
        D.pixelStorei(D.UNPACK_SKIP_ROWS, De),
        D.pixelStorei(D.UNPACK_SKIP_IMAGES, Se));
      const pt = T.isDataArrayTexture || T.isData3DTexture,
        _n = U.isDataArrayTexture || U.isData3DTexture;
      if (T.isDepthTexture) {
        const gn = fe.get(T),
          Vt = fe.get(U),
          jt = fe.get(gn.__renderTarget),
          $a = fe.get(Vt.__renderTarget);
        (Me.bindFramebuffer(D.READ_FRAMEBUFFER, jt.__webglFramebuffer),
          Me.bindFramebuffer(D.DRAW_FRAMEBUFFER, $a.__webglFramebuffer));
        for (let Oi = 0; Oi < ue; Oi++)
          (pt &&
            (D.framebufferTextureLayer(
              D.READ_FRAMEBUFFER,
              D.COLOR_ATTACHMENT0,
              fe.get(T).__webglTexture,
              N,
              Se + Oi,
            ),
            D.framebufferTextureLayer(
              D.DRAW_FRAMEBUFFER,
              D.COLOR_ATTACHMENT0,
              fe.get(U).__webglTexture,
              J,
              gt + Oi,
            )),
            D.blitFramebuffer(
              we,
              De,
              ce,
              pe,
              Ge,
              Qe,
              ce,
              pe,
              D.DEPTH_BUFFER_BIT,
              D.NEAREST,
            ));
        (Me.bindFramebuffer(D.READ_FRAMEBUFFER, null),
          Me.bindFramebuffer(D.DRAW_FRAMEBUFFER, null));
      } else if (N !== 0 || T.isRenderTargetTexture || fe.has(T)) {
        const gn = fe.get(T),
          Vt = fe.get(U);
        (Me.bindFramebuffer(D.READ_FRAMEBUFFER, Nf),
          Me.bindFramebuffer(D.DRAW_FRAMEBUFFER, Of));
        for (let jt = 0; jt < ue; jt++)
          (pt
            ? D.framebufferTextureLayer(
                D.READ_FRAMEBUFFER,
                D.COLOR_ATTACHMENT0,
                gn.__webglTexture,
                N,
                Se + jt,
              )
            : D.framebufferTexture2D(
                D.READ_FRAMEBUFFER,
                D.COLOR_ATTACHMENT0,
                D.TEXTURE_2D,
                gn.__webglTexture,
                N,
              ),
            _n
              ? D.framebufferTextureLayer(
                  D.DRAW_FRAMEBUFFER,
                  D.COLOR_ATTACHMENT0,
                  Vt.__webglTexture,
                  J,
                  gt + jt,
                )
              : D.framebufferTexture2D(
                  D.DRAW_FRAMEBUFFER,
                  D.COLOR_ATTACHMENT0,
                  D.TEXTURE_2D,
                  Vt.__webglTexture,
                  J,
                ),
            N !== 0
              ? D.blitFramebuffer(
                  we,
                  De,
                  ce,
                  pe,
                  Ge,
                  Qe,
                  ce,
                  pe,
                  D.COLOR_BUFFER_BIT,
                  D.NEAREST,
                )
              : _n
                ? D.copyTexSubImage3D(ft, J, Ge, Qe, gt + jt, we, De, ce, pe)
                : D.copyTexSubImage2D(ft, J, Ge, Qe, we, De, ce, pe));
        (Me.bindFramebuffer(D.READ_FRAMEBUFFER, null),
          Me.bindFramebuffer(D.DRAW_FRAMEBUFFER, null));
      } else
        _n
          ? T.isDataTexture || T.isData3DTexture
            ? D.texSubImage3D(ft, J, Ge, Qe, gt, ce, pe, ue, it, Ee, lt.data)
            : U.isCompressedArrayTexture
              ? D.compressedTexSubImage3D(
                  ft,
                  J,
                  Ge,
                  Qe,
                  gt,
                  ce,
                  pe,
                  ue,
                  it,
                  lt.data,
                )
              : D.texSubImage3D(ft, J, Ge, Qe, gt, ce, pe, ue, it, Ee, lt)
          : T.isDataTexture
            ? D.texSubImage2D(D.TEXTURE_2D, J, Ge, Qe, ce, pe, it, Ee, lt.data)
            : T.isCompressedTexture
              ? D.compressedTexSubImage2D(
                  D.TEXTURE_2D,
                  J,
                  Ge,
                  Qe,
                  lt.width,
                  lt.height,
                  it,
                  lt.data,
                )
              : D.texSubImage2D(D.TEXTURE_2D, J, Ge, Qe, ce, pe, it, Ee, lt);
      (D.pixelStorei(D.UNPACK_ROW_LENGTH, qe),
        D.pixelStorei(D.UNPACK_IMAGE_HEIGHT, sn),
        D.pixelStorei(D.UNPACK_SKIP_PIXELS, ar),
        D.pixelStorei(D.UNPACK_SKIP_ROWS, an),
        D.pixelStorei(D.UNPACK_SKIP_IMAGES, rs),
        J === 0 && U.generateMipmaps && D.generateMipmap(ft),
        Me.unbindTexture());
    }),
      (this.copyTextureToTexture3D = function (
        T,
        U,
        B = null,
        k = null,
        N = 0,
      ) {
        return (
          Dr(
            'WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.',
          ),
          this.copyTextureToTexture(T, U, B, k, N)
        );
      }),
      (this.initRenderTarget = function (T) {
        fe.get(T).__webglFramebuffer === void 0 && ke.setupRenderTarget(T);
      }),
      (this.initTexture = function (T) {
        (T.isCubeTexture
          ? ke.setTextureCube(T, 0)
          : T.isData3DTexture
            ? ke.setTexture3D(T, 0)
            : T.isDataArrayTexture || T.isCompressedArrayTexture
              ? ke.setTexture2DArray(T, 0)
              : ke.setTexture2D(T, 0),
          Me.unbindTexture());
      }),
      (this.resetState = function () {
        ((A = 0), (w = 0), (C = null), Me.reset(), le.reset());
      }),
      typeof __THREE_DEVTOOLS__ < "u" &&
        __THREE_DEVTOOLS__.dispatchEvent(
          new CustomEvent("observe", { detail: this }),
        ));
  }
  get coordinateSystem() {
    return kn;
  }
  get outputColorSpace() {
    return this._outputColorSpace;
  }
  set outputColorSpace(e) {
    this._outputColorSpace = e;
    const t = this.getContext();
    ((t.drawingBufferColorSpace = We._getDrawingBufferColorSpace(e)),
      (t.unpackColorSpace = We._getUnpackColorSpace()));
  }
}
function gu(s, e) {
  if (e === Ap)
    return (
      console.warn(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles.",
      ),
      s
    );
  if (e === Pl || e === ed) {
    let t = s.getIndex();
    if (t === null) {
      const a = [],
        o = s.getAttribute("position");
      if (o !== void 0) {
        for (let l = 0; l < o.count; l++) a.push(l);
        (s.setIndex(a), (t = s.getIndex()));
      } else
        return (
          console.error(
            "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.",
          ),
          s
        );
    }
    const n = t.count - 2,
      i = [];
    if (e === Pl)
      for (let a = 1; a <= n; a++)
        (i.push(t.getX(0)), i.push(t.getX(a)), i.push(t.getX(a + 1)));
    else
      for (let a = 0; a < n; a++)
        a % 2 === 0
          ? (i.push(t.getX(a)), i.push(t.getX(a + 1)), i.push(t.getX(a + 2)))
          : (i.push(t.getX(a + 2)), i.push(t.getX(a + 1)), i.push(t.getX(a)));
    i.length / 3 !== n &&
      console.error(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.",
      );
    const r = s.clone();
    return (r.setIndex(i), r.clearGroups(), r);
  } else
    return (
      console.error(
        "THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",
        e,
      ),
      s
    );
}
class SS extends Ii {
  constructor(e) {
    (super(e),
      (this.dracoLoader = null),
      (this.ktx2Loader = null),
      (this.meshoptDecoder = null),
      (this.pluginCallbacks = []),
      this.register(function (t) {
        return new iy(t);
      }),
      this.register(function (t) {
        return new ry(t);
      }),
      this.register(function (t) {
        return new fy(t);
      }),
      this.register(function (t) {
        return new py(t);
      }),
      this.register(function (t) {
        return new my(t);
      }),
      this.register(function (t) {
        return new ay(t);
      }),
      this.register(function (t) {
        return new oy(t);
      }),
      this.register(function (t) {
        return new ly(t);
      }),
      this.register(function (t) {
        return new cy(t);
      }),
      this.register(function (t) {
        return new ny(t);
      }),
      this.register(function (t) {
        return new hy(t);
      }),
      this.register(function (t) {
        return new sy(t);
      }),
      this.register(function (t) {
        return new dy(t);
      }),
      this.register(function (t) {
        return new uy(t);
      }),
      this.register(function (t) {
        return new ey(t);
      }),
      this.register(function (t) {
        return new _y(t);
      }),
      this.register(function (t) {
        return new gy(t);
      }));
  }
  load(e, t, n, i) {
    const r = this;
    let a;
    if (this.resourcePath !== "") a = this.resourcePath;
    else if (this.path !== "") {
      const c = Ms.extractUrlBase(e);
      a = Ms.resolveURL(c, this.path);
    } else a = Ms.extractUrlBase(e);
    this.manager.itemStart(e);
    const o = function (c) {
        (i ? i(c) : console.error(c),
          r.manager.itemError(e),
          r.manager.itemEnd(e));
      },
      l = new Ji(this.manager);
    (l.setPath(this.path),
      l.setResponseType("arraybuffer"),
      l.setRequestHeader(this.requestHeader),
      l.setWithCredentials(this.withCredentials),
      l.load(
        e,
        function (c) {
          try {
            r.parse(
              c,
              a,
              function (h) {
                (t(h), r.manager.itemEnd(e));
              },
              o,
            );
          } catch (h) {
            o(h);
          }
        },
        n,
        o,
      ));
  }
  setDRACOLoader(e) {
    return ((this.dracoLoader = e), this);
  }
  setKTX2Loader(e) {
    return ((this.ktx2Loader = e), this);
  }
  setMeshoptDecoder(e) {
    return ((this.meshoptDecoder = e), this);
  }
  register(e) {
    return (
      this.pluginCallbacks.indexOf(e) === -1 && this.pluginCallbacks.push(e),
      this
    );
  }
  unregister(e) {
    return (
      this.pluginCallbacks.indexOf(e) !== -1 &&
        this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1),
      this
    );
  }
  parse(e, t, n, i) {
    let r;
    const a = {},
      o = {},
      l = new TextDecoder();
    if (typeof e == "string") r = JSON.parse(e);
    else if (e instanceof ArrayBuffer)
      if (l.decode(new Uint8Array(e, 0, 4)) === wd) {
        try {
          a[Ve.KHR_BINARY_GLTF] = new xy(e);
        } catch (u) {
          i && i(u);
          return;
        }
        r = JSON.parse(a[Ve.KHR_BINARY_GLTF].content);
      } else r = JSON.parse(l.decode(e));
    else r = e;
    if (r.asset === void 0 || r.asset.version[0] < 2) {
      i &&
        i(
          new Error(
            "THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.",
          ),
        );
      return;
    }
    const c = new Dy(r, {
      path: t || this.resourcePath || "",
      crossOrigin: this.crossOrigin,
      requestHeader: this.requestHeader,
      manager: this.manager,
      ktx2Loader: this.ktx2Loader,
      meshoptDecoder: this.meshoptDecoder,
    });
    c.fileLoader.setRequestHeader(this.requestHeader);
    for (let h = 0; h < this.pluginCallbacks.length; h++) {
      const u = this.pluginCallbacks[h](c);
      (u.name ||
        console.error("THREE.GLTFLoader: Invalid plugin found: missing name"),
        (o[u.name] = u),
        (a[u.name] = !0));
    }
    if (r.extensionsUsed)
      for (let h = 0; h < r.extensionsUsed.length; ++h) {
        const u = r.extensionsUsed[h],
          d = r.extensionsRequired || [];
        switch (u) {
          case Ve.KHR_MATERIALS_UNLIT:
            a[u] = new ty();
            break;
          case Ve.KHR_DRACO_MESH_COMPRESSION:
            a[u] = new vy(r, this.dracoLoader);
            break;
          case Ve.KHR_TEXTURE_TRANSFORM:
            a[u] = new yy();
            break;
          case Ve.KHR_MESH_QUANTIZATION:
            a[u] = new My();
            break;
          default:
            d.indexOf(u) >= 0 &&
              o[u] === void 0 &&
              console.warn('THREE.GLTFLoader: Unknown extension "' + u + '".');
        }
      }
    (c.setExtensions(a), c.setPlugins(o), c.parse(n, i));
  }
  parseAsync(e, t) {
    const n = this;
    return new Promise(function (i, r) {
      n.parse(e, t, i, r);
    });
  }
}
function Qv() {
  let s = {};
  return {
    get: function (e) {
      return s[e];
    },
    add: function (e, t) {
      s[e] = t;
    },
    remove: function (e) {
      delete s[e];
    },
    removeAll: function () {
      s = {};
    },
  };
}
const Ve = {
  KHR_BINARY_GLTF: "KHR_binary_glTF",
  KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
  KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
  KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
  KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
  KHR_MATERIALS_IOR: "KHR_materials_ior",
  KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
  KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
  KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
  KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
  KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
  KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
  KHR_MATERIALS_VOLUME: "KHR_materials_volume",
  KHR_TEXTURE_BASISU: "KHR_texture_basisu",
  KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
  KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
  KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
  EXT_MATERIALS_BUMP: "EXT_materials_bump",
  EXT_TEXTURE_WEBP: "EXT_texture_webp",
  EXT_TEXTURE_AVIF: "EXT_texture_avif",
  EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
  EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing",
};
class ey {
  constructor(e) {
    ((this.parser = e),
      (this.name = Ve.KHR_LIGHTS_PUNCTUAL),
      (this.cache = { refs: {}, uses: {} }));
  }
  _markDefs() {
    const e = this.parser,
      t = this.parser.json.nodes || [];
    for (let n = 0, i = t.length; n < i; n++) {
      const r = t[n];
      r.extensions &&
        r.extensions[this.name] &&
        r.extensions[this.name].light !== void 0 &&
        e._addNodeRef(this.cache, r.extensions[this.name].light);
    }
  }
  _loadLight(e) {
    const t = this.parser,
      n = "light:" + e;
    let i = t.cache.get(n);
    if (i) return i;
    const r = t.json,
      l = (((r.extensions && r.extensions[this.name]) || {}).lights || [])[e];
    let c;
    const h = new Ie(16777215);
    l.color !== void 0 && h.setRGB(l.color[0], l.color[1], l.color[2], Rt);
    const u = l.range !== void 0 ? l.range : 0;
    switch (l.type) {
      case "directional":
        ((c = new i_(h)), c.target.position.set(0, 0, -1), c.add(c.target));
        break;
      case "point":
        ((c = new t_(h)), (c.distance = u));
        break;
      case "spot":
        ((c = new Qm(h)),
          (c.distance = u),
          (l.spot = l.spot || {}),
          (l.spot.innerConeAngle =
            l.spot.innerConeAngle !== void 0 ? l.spot.innerConeAngle : 0),
          (l.spot.outerConeAngle =
            l.spot.outerConeAngle !== void 0
              ? l.spot.outerConeAngle
              : Math.PI / 4),
          (c.angle = l.spot.outerConeAngle),
          (c.penumbra = 1 - l.spot.innerConeAngle / l.spot.outerConeAngle),
          c.target.position.set(0, 0, -1),
          c.add(c.target));
        break;
      default:
        throw new Error("THREE.GLTFLoader: Unexpected light type: " + l.type);
    }
    return (
      c.position.set(0, 0, 0),
      ti(c, l),
      l.intensity !== void 0 && (c.intensity = l.intensity),
      (c.name = t.createUniqueName(l.name || "light_" + e)),
      (i = Promise.resolve(c)),
      t.cache.add(n, i),
      i
    );
  }
  getDependency(e, t) {
    if (e === "light") return this._loadLight(t);
  }
  createNodeAttachment(e) {
    const t = this,
      n = this.parser,
      r = n.json.nodes[e],
      o = ((r.extensions && r.extensions[this.name]) || {}).light;
    return o === void 0
      ? null
      : this._loadLight(o).then(function (l) {
          return n._getNodeRef(t.cache, o, l);
        });
  }
}
class ty {
  constructor() {
    this.name = Ve.KHR_MATERIALS_UNLIT;
  }
  getMaterialType() {
    return Si;
  }
  extendParams(e, t, n) {
    const i = [];
    ((e.color = new Ie(1, 1, 1)), (e.opacity = 1));
    const r = t.pbrMetallicRoughness;
    if (r) {
      if (Array.isArray(r.baseColorFactor)) {
        const a = r.baseColorFactor;
        (e.color.setRGB(a[0], a[1], a[2], Rt), (e.opacity = a[3]));
      }
      r.baseColorTexture !== void 0 &&
        i.push(n.assignTexture(e, "map", r.baseColorTexture, St));
    }
    return Promise.all(i);
  }
}
class ny {
  constructor(e) {
    ((this.parser = e), (this.name = Ve.KHR_MATERIALS_EMISSIVE_STRENGTH));
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name].emissiveStrength;
    return (r !== void 0 && (t.emissiveIntensity = r), Promise.resolve());
  }
}
class iy {
  constructor(e) {
    ((this.parser = e), (this.name = Ve.KHR_MATERIALS_CLEARCOAT));
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    if (
      (a.clearcoatFactor !== void 0 && (t.clearcoat = a.clearcoatFactor),
      a.clearcoatTexture !== void 0 &&
        r.push(n.assignTexture(t, "clearcoatMap", a.clearcoatTexture)),
      a.clearcoatRoughnessFactor !== void 0 &&
        (t.clearcoatRoughness = a.clearcoatRoughnessFactor),
      a.clearcoatRoughnessTexture !== void 0 &&
        r.push(
          n.assignTexture(
            t,
            "clearcoatRoughnessMap",
            a.clearcoatRoughnessTexture,
          ),
        ),
      a.clearcoatNormalTexture !== void 0 &&
        (r.push(
          n.assignTexture(t, "clearcoatNormalMap", a.clearcoatNormalTexture),
        ),
        a.clearcoatNormalTexture.scale !== void 0))
    ) {
      const o = a.clearcoatNormalTexture.scale;
      t.clearcoatNormalScale = new Re(o, o);
    }
    return Promise.all(r);
  }
}
class ry {
  constructor(e) {
    ((this.parser = e), (this.name = Ve.KHR_MATERIALS_DISPERSION));
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name];
    return (
      (t.dispersion = r.dispersion !== void 0 ? r.dispersion : 0),
      Promise.resolve()
    );
  }
}
class sy {
  constructor(e) {
    ((this.parser = e), (this.name = Ve.KHR_MATERIALS_IRIDESCENCE));
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    return (
      a.iridescenceFactor !== void 0 && (t.iridescence = a.iridescenceFactor),
      a.iridescenceTexture !== void 0 &&
        r.push(n.assignTexture(t, "iridescenceMap", a.iridescenceTexture)),
      a.iridescenceIor !== void 0 && (t.iridescenceIOR = a.iridescenceIor),
      t.iridescenceThicknessRange === void 0 &&
        (t.iridescenceThicknessRange = [100, 400]),
      a.iridescenceThicknessMinimum !== void 0 &&
        (t.iridescenceThicknessRange[0] = a.iridescenceThicknessMinimum),
      a.iridescenceThicknessMaximum !== void 0 &&
        (t.iridescenceThicknessRange[1] = a.iridescenceThicknessMaximum),
      a.iridescenceThicknessTexture !== void 0 &&
        r.push(
          n.assignTexture(
            t,
            "iridescenceThicknessMap",
            a.iridescenceThicknessTexture,
          ),
        ),
      Promise.all(r)
    );
  }
}
class ay {
  constructor(e) {
    ((this.parser = e), (this.name = Ve.KHR_MATERIALS_SHEEN));
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [];
    ((t.sheenColor = new Ie(0, 0, 0)), (t.sheenRoughness = 0), (t.sheen = 1));
    const a = i.extensions[this.name];
    if (a.sheenColorFactor !== void 0) {
      const o = a.sheenColorFactor;
      t.sheenColor.setRGB(o[0], o[1], o[2], Rt);
    }
    return (
      a.sheenRoughnessFactor !== void 0 &&
        (t.sheenRoughness = a.sheenRoughnessFactor),
      a.sheenColorTexture !== void 0 &&
        r.push(n.assignTexture(t, "sheenColorMap", a.sheenColorTexture, St)),
      a.sheenRoughnessTexture !== void 0 &&
        r.push(
          n.assignTexture(t, "sheenRoughnessMap", a.sheenRoughnessTexture),
        ),
      Promise.all(r)
    );
  }
}
class oy {
  constructor(e) {
    ((this.parser = e), (this.name = Ve.KHR_MATERIALS_TRANSMISSION));
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    return (
      a.transmissionFactor !== void 0 &&
        (t.transmission = a.transmissionFactor),
      a.transmissionTexture !== void 0 &&
        r.push(n.assignTexture(t, "transmissionMap", a.transmissionTexture)),
      Promise.all(r)
    );
  }
}
class ly {
  constructor(e) {
    ((this.parser = e), (this.name = Ve.KHR_MATERIALS_VOLUME));
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    ((t.thickness = a.thicknessFactor !== void 0 ? a.thicknessFactor : 0),
      a.thicknessTexture !== void 0 &&
        r.push(n.assignTexture(t, "thicknessMap", a.thicknessTexture)),
      (t.attenuationDistance = a.attenuationDistance || 1 / 0));
    const o = a.attenuationColor || [1, 1, 1];
    return (
      (t.attenuationColor = new Ie().setRGB(o[0], o[1], o[2], Rt)),
      Promise.all(r)
    );
  }
}
class cy {
  constructor(e) {
    ((this.parser = e), (this.name = Ve.KHR_MATERIALS_IOR));
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yn;
  }
  extendMaterialParams(e, t) {
    const i = this.parser.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = i.extensions[this.name];
    return ((t.ior = r.ior !== void 0 ? r.ior : 1.5), Promise.resolve());
  }
}
class hy {
  constructor(e) {
    ((this.parser = e), (this.name = Ve.KHR_MATERIALS_SPECULAR));
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    ((t.specularIntensity = a.specularFactor !== void 0 ? a.specularFactor : 1),
      a.specularTexture !== void 0 &&
        r.push(n.assignTexture(t, "specularIntensityMap", a.specularTexture)));
    const o = a.specularColorFactor || [1, 1, 1];
    return (
      (t.specularColor = new Ie().setRGB(o[0], o[1], o[2], Rt)),
      a.specularColorTexture !== void 0 &&
        r.push(
          n.assignTexture(t, "specularColorMap", a.specularColorTexture, St),
        ),
      Promise.all(r)
    );
  }
}
class uy {
  constructor(e) {
    ((this.parser = e), (this.name = Ve.EXT_MATERIALS_BUMP));
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    return (
      (t.bumpScale = a.bumpFactor !== void 0 ? a.bumpFactor : 1),
      a.bumpTexture !== void 0 &&
        r.push(n.assignTexture(t, "bumpMap", a.bumpTexture)),
      Promise.all(r)
    );
  }
}
class dy {
  constructor(e) {
    ((this.parser = e), (this.name = Ve.KHR_MATERIALS_ANISOTROPY));
  }
  getMaterialType(e) {
    const n = this.parser.json.materials[e];
    return !n.extensions || !n.extensions[this.name] ? null : Yn;
  }
  extendMaterialParams(e, t) {
    const n = this.parser,
      i = n.json.materials[e];
    if (!i.extensions || !i.extensions[this.name]) return Promise.resolve();
    const r = [],
      a = i.extensions[this.name];
    return (
      a.anisotropyStrength !== void 0 && (t.anisotropy = a.anisotropyStrength),
      a.anisotropyRotation !== void 0 &&
        (t.anisotropyRotation = a.anisotropyRotation),
      a.anisotropyTexture !== void 0 &&
        r.push(n.assignTexture(t, "anisotropyMap", a.anisotropyTexture)),
      Promise.all(r)
    );
  }
}
class fy {
  constructor(e) {
    ((this.parser = e), (this.name = Ve.KHR_TEXTURE_BASISU));
  }
  loadTexture(e) {
    const t = this.parser,
      n = t.json,
      i = n.textures[e];
    if (!i.extensions || !i.extensions[this.name]) return null;
    const r = i.extensions[this.name],
      a = t.options.ktx2Loader;
    if (!a) {
      if (n.extensionsRequired && n.extensionsRequired.indexOf(this.name) >= 0)
        throw new Error(
          "THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures",
        );
      return null;
    }
    return t.loadTextureImage(e, r.source, a);
  }
}
class py {
  constructor(e) {
    ((this.parser = e), (this.name = Ve.EXT_TEXTURE_WEBP));
  }
  loadTexture(e) {
    const t = this.name,
      n = this.parser,
      i = n.json,
      r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const a = r.extensions[t],
      o = i.images[a.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return n.loadTextureImage(e, a.source, l);
  }
}
class my {
  constructor(e) {
    ((this.parser = e), (this.name = Ve.EXT_TEXTURE_AVIF));
  }
  loadTexture(e) {
    const t = this.name,
      n = this.parser,
      i = n.json,
      r = i.textures[e];
    if (!r.extensions || !r.extensions[t]) return null;
    const a = r.extensions[t],
      o = i.images[a.source];
    let l = n.textureLoader;
    if (o.uri) {
      const c = n.options.manager.getHandler(o.uri);
      c !== null && (l = c);
    }
    return n.loadTextureImage(e, a.source, l);
  }
}
class _y {
  constructor(e) {
    ((this.name = Ve.EXT_MESHOPT_COMPRESSION), (this.parser = e));
  }
  loadBufferView(e) {
    const t = this.parser.json,
      n = t.bufferViews[e];
    if (n.extensions && n.extensions[this.name]) {
      const i = n.extensions[this.name],
        r = this.parser.getDependency("buffer", i.buffer),
        a = this.parser.options.meshoptDecoder;
      if (!a || !a.supported) {
        if (
          t.extensionsRequired &&
          t.extensionsRequired.indexOf(this.name) >= 0
        )
          throw new Error(
            "THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files",
          );
        return null;
      }
      return r.then(function (o) {
        const l = i.byteOffset || 0,
          c = i.byteLength || 0,
          h = i.count,
          u = i.byteStride,
          d = new Uint8Array(o, l, c);
        return a.decodeGltfBufferAsync
          ? a
              .decodeGltfBufferAsync(h, u, d, i.mode, i.filter)
              .then(function (f) {
                return f.buffer;
              })
          : a.ready.then(function () {
              const f = new ArrayBuffer(h * u);
              return (
                a.decodeGltfBuffer(
                  new Uint8Array(f),
                  h,
                  u,
                  d,
                  i.mode,
                  i.filter,
                ),
                f
              );
            });
      });
    } else return null;
  }
}
class gy {
  constructor(e) {
    ((this.name = Ve.EXT_MESH_GPU_INSTANCING), (this.parser = e));
  }
  createNodeMesh(e) {
    const t = this.parser.json,
      n = t.nodes[e];
    if (!n.extensions || !n.extensions[this.name] || n.mesh === void 0)
      return null;
    const i = t.meshes[n.mesh];
    for (const c of i.primitives)
      if (
        c.mode !== yn.TRIANGLES &&
        c.mode !== yn.TRIANGLE_STRIP &&
        c.mode !== yn.TRIANGLE_FAN &&
        c.mode !== void 0
      )
        return null;
    const a = n.extensions[this.name].attributes,
      o = [],
      l = {};
    for (const c in a)
      o.push(
        this.parser
          .getDependency("accessor", a[c])
          .then((h) => ((l[c] = h), l[c])),
      );
    return o.length < 1
      ? null
      : (o.push(this.parser.createNodeMesh(e)),
        Promise.all(o).then((c) => {
          const h = c.pop(),
            u = h.isGroup ? h.children : [h],
            d = c[0].count,
            f = [];
          for (const g of u) {
            const _ = new Oe(),
              m = new L(),
              p = new Hn(),
              S = new L(1, 1, 1),
              M = new Pm(g.geometry, g.material, d);
            for (let v = 0; v < d; v++)
              (l.TRANSLATION && m.fromBufferAttribute(l.TRANSLATION, v),
                l.ROTATION && p.fromBufferAttribute(l.ROTATION, v),
                l.SCALE && S.fromBufferAttribute(l.SCALE, v),
                M.setMatrixAt(v, _.compose(m, p, S)));
            for (const v in l)
              if (v === "_COLOR_0") {
                const b = l[v];
                M.instanceColor = new Ll(b.array, b.itemSize, b.normalized);
              } else
                v !== "TRANSLATION" &&
                  v !== "ROTATION" &&
                  v !== "SCALE" &&
                  g.geometry.setAttribute(v, l[v]);
            (dt.prototype.copy.call(M, g),
              this.parser.assignFinalMaterial(M),
              f.push(M));
          }
          return h.isGroup ? (h.clear(), h.add(...f), h) : f[0];
        }));
  }
}
const wd = "glTF",
  fs = 12,
  xu = { JSON: 1313821514, BIN: 5130562 };
class xy {
  constructor(e) {
    ((this.name = Ve.KHR_BINARY_GLTF),
      (this.content = null),
      (this.body = null));
    const t = new DataView(e, 0, fs),
      n = new TextDecoder();
    if (
      ((this.header = {
        magic: n.decode(new Uint8Array(e.slice(0, 4))),
        version: t.getUint32(4, !0),
        length: t.getUint32(8, !0),
      }),
      this.header.magic !== wd)
    )
      throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
    if (this.header.version < 2)
      throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
    const i = this.header.length - fs,
      r = new DataView(e, fs);
    let a = 0;
    for (; a < i;) {
      const o = r.getUint32(a, !0);
      a += 4;
      const l = r.getUint32(a, !0);
      if (((a += 4), l === xu.JSON)) {
        const c = new Uint8Array(e, fs + a, o);
        this.content = n.decode(c);
      } else if (l === xu.BIN) {
        const c = fs + a;
        this.body = e.slice(c, c + o);
      }
      a += o;
    }
    if (this.content === null)
      throw new Error("THREE.GLTFLoader: JSON content not found.");
  }
}
class vy {
  constructor(e, t) {
    if (!t)
      throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
    ((this.name = Ve.KHR_DRACO_MESH_COMPRESSION),
      (this.json = e),
      (this.dracoLoader = t),
      this.dracoLoader.preload());
  }
  decodePrimitive(e, t) {
    const n = this.json,
      i = this.dracoLoader,
      r = e.extensions[this.name].bufferView,
      a = e.extensions[this.name].attributes,
      o = {},
      l = {},
      c = {};
    for (const h in a) {
      const u = Ol[h] || h.toLowerCase();
      o[u] = a[h];
    }
    for (const h in e.attributes) {
      const u = Ol[h] || h.toLowerCase();
      if (a[h] !== void 0) {
        const d = n.accessors[e.attributes[h]],
          f = Ir[d.componentType];
        ((c[u] = f.name), (l[u] = d.normalized === !0));
      }
    }
    return t.getDependency("bufferView", r).then(function (h) {
      return new Promise(function (u, d) {
        i.decodeDracoFile(
          h,
          function (f) {
            for (const g in f.attributes) {
              const _ = f.attributes[g],
                m = l[g];
              m !== void 0 && (_.normalized = m);
            }
            u(f);
          },
          o,
          c,
          Rt,
          d,
        );
      });
    });
  }
}
class yy {
  constructor() {
    this.name = Ve.KHR_TEXTURE_TRANSFORM;
  }
  extendTexture(e, t) {
    return (
      ((t.texCoord === void 0 || t.texCoord === e.channel) &&
        t.offset === void 0 &&
        t.rotation === void 0 &&
        t.scale === void 0) ||
        ((e = e.clone()),
        t.texCoord !== void 0 && (e.channel = t.texCoord),
        t.offset !== void 0 && e.offset.fromArray(t.offset),
        t.rotation !== void 0 && (e.rotation = t.rotation),
        t.scale !== void 0 && e.repeat.fromArray(t.scale),
        (e.needsUpdate = !0)),
      e
    );
  }
}
class My {
  constructor() {
    this.name = Ve.KHR_MESH_QUANTIZATION;
  }
}
class Rd extends zs {
  constructor(e, t, n, i) {
    super(e, t, n, i);
  }
  copySampleValue_(e) {
    const t = this.resultBuffer,
      n = this.sampleValues,
      i = this.valueSize,
      r = e * i * 3 + i;
    for (let a = 0; a !== i; a++) t[a] = n[r + a];
    return t;
  }
  interpolate_(e, t, n, i) {
    const r = this.resultBuffer,
      a = this.sampleValues,
      o = this.valueSize,
      l = o * 2,
      c = o * 3,
      h = i - t,
      u = (n - t) / h,
      d = u * u,
      f = d * u,
      g = e * c,
      _ = g - c,
      m = -2 * f + 3 * d,
      p = f - d,
      S = 1 - m,
      M = p - d + u;
    for (let v = 0; v !== o; v++) {
      const b = a[_ + v + o],
        A = a[_ + v + l] * h,
        w = a[g + v + o],
        C = a[g + v] * h;
      r[v] = S * b + M * A + m * w + p * C;
    }
    return r;
  }
}
const Sy = new Hn();
class Ty extends Rd {
  interpolate_(e, t, n, i) {
    const r = super.interpolate_(e, t, n, i);
    return (Sy.fromArray(r).normalize().toArray(r), r);
  }
}
const yn = {
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
  },
  Ir = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array,
  },
  vu = { 9728: qt, 9729: wt, 9984: ju, 9985: ya, 9986: ms, 9987: ri },
  yu = { 33071: kt, 33648: Pa, 10497: Hr },
  Uo = { SCALAR: 1, VEC2: 2, VEC3: 3, VEC4: 4, MAT2: 4, MAT3: 9, MAT4: 16 },
  Ol = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv1",
    TEXCOORD_2: "uv2",
    TEXCOORD_3: "uv3",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex",
  },
  vi = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences",
  },
  Ey = { CUBICSPLINE: void 0, LINEAR: Ps, STEP: Cs },
  No = { OPAQUE: "OPAQUE", MASK: "MASK", BLEND: "BLEND" };
function by(s) {
  return (
    s.DefaultMaterial === void 0 &&
      (s.DefaultMaterial = new gc({
        color: 16777215,
        emissive: 0,
        metalness: 1,
        roughness: 1,
        transparent: !1,
        depthTest: !0,
        side: li,
      })),
    s.DefaultMaterial
  );
}
function Gi(s, e, t) {
  for (const n in t.extensions)
    s[n] === void 0 &&
      ((e.userData.gltfExtensions = e.userData.gltfExtensions || {}),
      (e.userData.gltfExtensions[n] = t.extensions[n]));
}
function ti(s, e) {
  e.extras !== void 0 &&
    (typeof e.extras == "object"
      ? Object.assign(s.userData, e.extras)
      : console.warn(
          "THREE.GLTFLoader: Ignoring primitive type .extras, " + e.extras,
        ));
}
function Ay(s, e, t) {
  let n = !1,
    i = !1,
    r = !1;
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (
      (u.POSITION !== void 0 && (n = !0),
      u.NORMAL !== void 0 && (i = !0),
      u.COLOR_0 !== void 0 && (r = !0),
      n && i && r)
    )
      break;
  }
  if (!n && !i && !r) return Promise.resolve(s);
  const a = [],
    o = [],
    l = [];
  for (let c = 0, h = e.length; c < h; c++) {
    const u = e[c];
    if (n) {
      const d =
        u.POSITION !== void 0
          ? t.getDependency("accessor", u.POSITION)
          : s.attributes.position;
      a.push(d);
    }
    if (i) {
      const d =
        u.NORMAL !== void 0
          ? t.getDependency("accessor", u.NORMAL)
          : s.attributes.normal;
      o.push(d);
    }
    if (r) {
      const d =
        u.COLOR_0 !== void 0
          ? t.getDependency("accessor", u.COLOR_0)
          : s.attributes.color;
      l.push(d);
    }
  }
  return Promise.all([Promise.all(a), Promise.all(o), Promise.all(l)]).then(
    function (c) {
      const h = c[0],
        u = c[1],
        d = c[2];
      return (
        n && (s.morphAttributes.position = h),
        i && (s.morphAttributes.normal = u),
        r && (s.morphAttributes.color = d),
        (s.morphTargetsRelative = !0),
        s
      );
    },
  );
}
function wy(s, e) {
  if ((s.updateMorphTargets(), e.weights !== void 0))
    for (let t = 0, n = e.weights.length; t < n; t++)
      s.morphTargetInfluences[t] = e.weights[t];
  if (e.extras && Array.isArray(e.extras.targetNames)) {
    const t = e.extras.targetNames;
    if (s.morphTargetInfluences.length === t.length) {
      s.morphTargetDictionary = {};
      for (let n = 0, i = t.length; n < i; n++)
        s.morphTargetDictionary[t[n]] = n;
    } else
      console.warn(
        "THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.",
      );
  }
}
function Ry(s) {
  let e;
  const t = s.extensions && s.extensions[Ve.KHR_DRACO_MESH_COMPRESSION];
  if (
    (t
      ? (e = "draco:" + t.bufferView + ":" + t.indices + ":" + Oo(t.attributes))
      : (e = s.indices + ":" + Oo(s.attributes) + ":" + s.mode),
    s.targets !== void 0)
  )
    for (let n = 0, i = s.targets.length; n < i; n++)
      e += ":" + Oo(s.targets[n]);
  return e;
}
function Oo(s) {
  let e = "";
  const t = Object.keys(s).sort();
  for (let n = 0, i = t.length; n < i; n++) e += t[n] + ":" + s[t[n]] + ";";
  return e;
}
function Fl(s) {
  switch (s) {
    case Int8Array:
      return 1 / 127;
    case Uint8Array:
      return 1 / 255;
    case Int16Array:
      return 1 / 32767;
    case Uint16Array:
      return 1 / 65535;
    default:
      throw new Error(
        "THREE.GLTFLoader: Unsupported normalized accessor component type.",
      );
  }
}
function Cy(s) {
  return s.search(/\.jpe?g($|\?)/i) > 0 || s.search(/^data\:image\/jpeg/) === 0
    ? "image/jpeg"
    : s.search(/\.webp($|\?)/i) > 0 || s.search(/^data\:image\/webp/) === 0
      ? "image/webp"
      : s.search(/\.ktx2($|\?)/i) > 0 || s.search(/^data\:image\/ktx2/) === 0
        ? "image/ktx2"
        : "image/png";
}
const Py = new Oe();
class Dy {
  constructor(e = {}, t = {}) {
    ((this.json = e),
      (this.extensions = {}),
      (this.plugins = {}),
      (this.options = t),
      (this.cache = new Qv()),
      (this.associations = new Map()),
      (this.primitiveCache = {}),
      (this.nodeCache = {}),
      (this.meshCache = { refs: {}, uses: {} }),
      (this.cameraCache = { refs: {}, uses: {} }),
      (this.lightCache = { refs: {}, uses: {} }),
      (this.sourceCache = {}),
      (this.textureCache = {}),
      (this.nodeNamesUsed = {}));
    let n = !1,
      i = -1,
      r = !1,
      a = -1;
    if (typeof navigator < "u") {
      const o = navigator.userAgent;
      n = /^((?!chrome|android).)*safari/i.test(o) === !0;
      const l = o.match(/Version\/(\d+)/);
      ((i = n && l ? parseInt(l[1], 10) : -1),
        (r = o.indexOf("Firefox") > -1),
        (a = r ? o.match(/Firefox\/([0-9]+)\./)[1] : -1));
    }
    (typeof createImageBitmap > "u" || (n && i < 17) || (r && a < 98)
      ? (this.textureLoader = new $m(this.options.manager))
      : (this.textureLoader = new r_(this.options.manager)),
      this.textureLoader.setCrossOrigin(this.options.crossOrigin),
      this.textureLoader.setRequestHeader(this.options.requestHeader),
      (this.fileLoader = new Ji(this.options.manager)),
      this.fileLoader.setResponseType("arraybuffer"),
      this.options.crossOrigin === "use-credentials" &&
        this.fileLoader.setWithCredentials(!0));
  }
  setExtensions(e) {
    this.extensions = e;
  }
  setPlugins(e) {
    this.plugins = e;
  }
  parse(e, t) {
    const n = this,
      i = this.json,
      r = this.extensions;
    (this.cache.removeAll(),
      (this.nodeCache = {}),
      this._invokeAll(function (a) {
        return a._markDefs && a._markDefs();
      }),
      Promise.all(
        this._invokeAll(function (a) {
          return a.beforeRoot && a.beforeRoot();
        }),
      )
        .then(function () {
          return Promise.all([
            n.getDependencies("scene"),
            n.getDependencies("animation"),
            n.getDependencies("camera"),
          ]);
        })
        .then(function (a) {
          const o = {
            scene: a[0][i.scene || 0],
            scenes: a[0],
            animations: a[1],
            cameras: a[2],
            asset: i.asset,
            parser: n,
            userData: {},
          };
          return (
            Gi(r, o, i),
            ti(o, i),
            Promise.all(
              n._invokeAll(function (l) {
                return l.afterRoot && l.afterRoot(o);
              }),
            ).then(function () {
              for (const l of o.scenes) l.updateMatrixWorld();
              e(o);
            })
          );
        })
        .catch(t));
  }
  _markDefs() {
    const e = this.json.nodes || [],
      t = this.json.skins || [],
      n = this.json.meshes || [];
    for (let i = 0, r = t.length; i < r; i++) {
      const a = t[i].joints;
      for (let o = 0, l = a.length; o < l; o++) e[a[o]].isBone = !0;
    }
    for (let i = 0, r = e.length; i < r; i++) {
      const a = e[i];
      (a.mesh !== void 0 &&
        (this._addNodeRef(this.meshCache, a.mesh),
        a.skin !== void 0 && (n[a.mesh].isSkinnedMesh = !0)),
        a.camera !== void 0 && this._addNodeRef(this.cameraCache, a.camera));
    }
  }
  _addNodeRef(e, t) {
    t !== void 0 &&
      (e.refs[t] === void 0 && (e.refs[t] = e.uses[t] = 0), e.refs[t]++);
  }
  _getNodeRef(e, t, n) {
    if (e.refs[t] <= 1) return n;
    const i = n.clone(),
      r = (a, o) => {
        const l = this.associations.get(a);
        l != null && this.associations.set(o, l);
        for (const [c, h] of a.children.entries()) r(h, o.children[c]);
      };
    return (r(n, i), (i.name += "_instance_" + e.uses[t]++), i);
  }
  _invokeOne(e) {
    const t = Object.values(this.plugins);
    t.push(this);
    for (let n = 0; n < t.length; n++) {
      const i = e(t[n]);
      if (i) return i;
    }
    return null;
  }
  _invokeAll(e) {
    const t = Object.values(this.plugins);
    t.unshift(this);
    const n = [];
    for (let i = 0; i < t.length; i++) {
      const r = e(t[i]);
      r && n.push(r);
    }
    return n;
  }
  getDependency(e, t) {
    const n = e + ":" + t;
    let i = this.cache.get(n);
    if (!i) {
      switch (e) {
        case "scene":
          i = this.loadScene(t);
          break;
        case "node":
          i = this._invokeOne(function (r) {
            return r.loadNode && r.loadNode(t);
          });
          break;
        case "mesh":
          i = this._invokeOne(function (r) {
            return r.loadMesh && r.loadMesh(t);
          });
          break;
        case "accessor":
          i = this.loadAccessor(t);
          break;
        case "bufferView":
          i = this._invokeOne(function (r) {
            return r.loadBufferView && r.loadBufferView(t);
          });
          break;
        case "buffer":
          i = this.loadBuffer(t);
          break;
        case "material":
          i = this._invokeOne(function (r) {
            return r.loadMaterial && r.loadMaterial(t);
          });
          break;
        case "texture":
          i = this._invokeOne(function (r) {
            return r.loadTexture && r.loadTexture(t);
          });
          break;
        case "skin":
          i = this.loadSkin(t);
          break;
        case "animation":
          i = this._invokeOne(function (r) {
            return r.loadAnimation && r.loadAnimation(t);
          });
          break;
        case "camera":
          i = this.loadCamera(t);
          break;
        default:
          if (
            ((i = this._invokeOne(function (r) {
              return r != this && r.getDependency && r.getDependency(e, t);
            })),
            !i)
          )
            throw new Error("Unknown type: " + e);
          break;
      }
      this.cache.add(n, i);
    }
    return i;
  }
  getDependencies(e) {
    let t = this.cache.get(e);
    if (!t) {
      const n = this,
        i = this.json[e + (e === "mesh" ? "es" : "s")] || [];
      ((t = Promise.all(
        i.map(function (r, a) {
          return n.getDependency(e, a);
        }),
      )),
        this.cache.add(e, t));
    }
    return t;
  }
  loadBuffer(e) {
    const t = this.json.buffers[e],
      n = this.fileLoader;
    if (t.type && t.type !== "arraybuffer")
      throw new Error(
        "THREE.GLTFLoader: " + t.type + " buffer type is not supported.",
      );
    if (t.uri === void 0 && e === 0)
      return Promise.resolve(this.extensions[Ve.KHR_BINARY_GLTF].body);
    const i = this.options;
    return new Promise(function (r, a) {
      n.load(Ms.resolveURL(t.uri, i.path), r, void 0, function () {
        a(
          new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'),
        );
      });
    });
  }
  loadBufferView(e) {
    const t = this.json.bufferViews[e];
    return this.getDependency("buffer", t.buffer).then(function (n) {
      const i = t.byteLength || 0,
        r = t.byteOffset || 0;
      return n.slice(r, r + i);
    });
  }
  loadAccessor(e) {
    const t = this,
      n = this.json,
      i = this.json.accessors[e];
    if (i.bufferView === void 0 && i.sparse === void 0) {
      const a = Uo[i.type],
        o = Ir[i.componentType],
        l = i.normalized === !0,
        c = new o(i.count * a);
      return Promise.resolve(new Ut(c, a, l));
    }
    const r = [];
    return (
      i.bufferView !== void 0
        ? r.push(this.getDependency("bufferView", i.bufferView))
        : r.push(null),
      i.sparse !== void 0 &&
        (r.push(this.getDependency("bufferView", i.sparse.indices.bufferView)),
        r.push(this.getDependency("bufferView", i.sparse.values.bufferView))),
      Promise.all(r).then(function (a) {
        const o = a[0],
          l = Uo[i.type],
          c = Ir[i.componentType],
          h = c.BYTES_PER_ELEMENT,
          u = h * l,
          d = i.byteOffset || 0,
          f =
            i.bufferView !== void 0
              ? n.bufferViews[i.bufferView].byteStride
              : void 0,
          g = i.normalized === !0;
        let _, m;
        if (f && f !== u) {
          const p = Math.floor(d / f),
            S =
              "InterleavedBuffer:" +
              i.bufferView +
              ":" +
              i.componentType +
              ":" +
              p +
              ":" +
              i.count;
          let M = t.cache.get(S);
          (M ||
            ((_ = new c(o, p * f, (i.count * f) / h)),
            (M = new bm(_, f / h)),
            t.cache.add(S, M)),
            (m = new dc(M, l, (d % f) / h, g)));
        } else
          (o === null
            ? (_ = new c(i.count * l))
            : (_ = new c(o, d, i.count * l)),
            (m = new Ut(_, l, g)));
        if (i.sparse !== void 0) {
          const p = Uo.SCALAR,
            S = Ir[i.sparse.indices.componentType],
            M = i.sparse.indices.byteOffset || 0,
            v = i.sparse.values.byteOffset || 0,
            b = new S(a[1], M, i.sparse.count * p),
            A = new c(a[2], v, i.sparse.count * l);
          (o !== null &&
            (m = new Ut(m.array.slice(), m.itemSize, m.normalized)),
            (m.normalized = !1));
          for (let w = 0, C = b.length; w < C; w++) {
            const x = b[w];
            if (
              (m.setX(x, A[w * l]),
              l >= 2 && m.setY(x, A[w * l + 1]),
              l >= 3 && m.setZ(x, A[w * l + 2]),
              l >= 4 && m.setW(x, A[w * l + 3]),
              l >= 5)
            )
              throw new Error(
                "THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.",
              );
          }
          m.normalized = g;
        }
        return m;
      })
    );
  }
  loadTexture(e) {
    const t = this.json,
      n = this.options,
      r = t.textures[e].source,
      a = t.images[r];
    let o = this.textureLoader;
    if (a.uri) {
      const l = n.manager.getHandler(a.uri);
      l !== null && (o = l);
    }
    return this.loadTextureImage(e, r, o);
  }
  loadTextureImage(e, t, n) {
    const i = this,
      r = this.json,
      a = r.textures[e],
      o = r.images[t],
      l = (o.uri || o.bufferView) + ":" + a.sampler;
    if (this.textureCache[l]) return this.textureCache[l];
    const c = this.loadImageSource(t, n)
      .then(function (h) {
        ((h.flipY = !1),
          (h.name = a.name || o.name || ""),
          h.name === "" &&
            typeof o.uri == "string" &&
            o.uri.startsWith("data:image/") === !1 &&
            (h.name = o.uri));
        const d = (r.samplers || {})[a.sampler] || {};
        return (
          (h.magFilter = vu[d.magFilter] || wt),
          (h.minFilter = vu[d.minFilter] || ri),
          (h.wrapS = yu[d.wrapS] || Hr),
          (h.wrapT = yu[d.wrapT] || Hr),
          (h.generateMipmaps =
            !h.isCompressedTexture && h.minFilter !== qt && h.minFilter !== wt),
          i.associations.set(h, { textures: e }),
          h
        );
      })
      .catch(function () {
        return null;
      });
    return ((this.textureCache[l] = c), c);
  }
  loadImageSource(e, t) {
    const n = this,
      i = this.json,
      r = this.options;
    if (this.sourceCache[e] !== void 0)
      return this.sourceCache[e].then((u) => u.clone());
    const a = i.images[e],
      o = self.URL || self.webkitURL;
    let l = a.uri || "",
      c = !1;
    if (a.bufferView !== void 0)
      l = n.getDependency("bufferView", a.bufferView).then(function (u) {
        c = !0;
        const d = new Blob([u], { type: a.mimeType });
        return ((l = o.createObjectURL(d)), l);
      });
    else if (a.uri === void 0)
      throw new Error(
        "THREE.GLTFLoader: Image " + e + " is missing URI and bufferView",
      );
    const h = Promise.resolve(l)
      .then(function (u) {
        return new Promise(function (d, f) {
          let g = d;
          (t.isImageBitmapLoader === !0 &&
            (g = function (_) {
              const m = new ut(_);
              ((m.needsUpdate = !0), d(m));
            }),
            t.load(Ms.resolveURL(u, r.path), g, void 0, f));
        });
      })
      .then(function (u) {
        return (
          c === !0 && o.revokeObjectURL(l),
          ti(u, a),
          (u.userData.mimeType = a.mimeType || Cy(a.uri)),
          u
        );
      })
      .catch(function (u) {
        throw (console.error("THREE.GLTFLoader: Couldn't load texture", l), u);
      });
    return ((this.sourceCache[e] = h), h);
  }
  assignTexture(e, t, n, i) {
    const r = this;
    return this.getDependency("texture", n.index).then(function (a) {
      if (!a) return null;
      if (
        (n.texCoord !== void 0 &&
          n.texCoord > 0 &&
          ((a = a.clone()), (a.channel = n.texCoord)),
        r.extensions[Ve.KHR_TEXTURE_TRANSFORM])
      ) {
        const o =
          n.extensions !== void 0
            ? n.extensions[Ve.KHR_TEXTURE_TRANSFORM]
            : void 0;
        if (o) {
          const l = r.associations.get(a);
          ((a = r.extensions[Ve.KHR_TEXTURE_TRANSFORM].extendTexture(a, o)),
            r.associations.set(a, l));
        }
      }
      return (i !== void 0 && (a.colorSpace = i), (e[t] = a), a);
    });
  }
  assignFinalMaterial(e) {
    const t = e.geometry;
    let n = e.material;
    const i = t.attributes.tangent === void 0,
      r = t.attributes.color !== void 0,
      a = t.attributes.normal === void 0;
    if (e.isPoints) {
      const o = "PointsMaterial:" + n.uuid;
      let l = this.cache.get(o);
      (l ||
        ((l = new pd()),
        In.prototype.copy.call(l, n),
        l.color.copy(n.color),
        (l.map = n.map),
        (l.sizeAttenuation = !1),
        this.cache.add(o, l)),
        (n = l));
    } else if (e.isLine) {
      const o = "LineBasicMaterial:" + n.uuid;
      let l = this.cache.get(o);
      (l ||
        ((l = new fd()),
        In.prototype.copy.call(l, n),
        l.color.copy(n.color),
        (l.map = n.map),
        this.cache.add(o, l)),
        (n = l));
    }
    if (i || r || a) {
      let o = "ClonedMaterial:" + n.uuid + ":";
      (i && (o += "derivative-tangents:"),
        r && (o += "vertex-colors:"),
        a && (o += "flat-shading:"));
      let l = this.cache.get(o);
      (l ||
        ((l = n.clone()),
        r && (l.vertexColors = !0),
        a && (l.flatShading = !0),
        i &&
          (l.normalScale && (l.normalScale.y *= -1),
          l.clearcoatNormalScale && (l.clearcoatNormalScale.y *= -1)),
        this.cache.add(o, l),
        this.associations.set(l, this.associations.get(n))),
        (n = l));
    }
    e.material = n;
  }
  getMaterialType() {
    return gc;
  }
  loadMaterial(e) {
    const t = this,
      n = this.json,
      i = this.extensions,
      r = n.materials[e];
    let a;
    const o = {},
      l = r.extensions || {},
      c = [];
    if (l[Ve.KHR_MATERIALS_UNLIT]) {
      const u = i[Ve.KHR_MATERIALS_UNLIT];
      ((a = u.getMaterialType()), c.push(u.extendParams(o, r, t)));
    } else {
      const u = r.pbrMetallicRoughness || {};
      if (
        ((o.color = new Ie(1, 1, 1)),
        (o.opacity = 1),
        Array.isArray(u.baseColorFactor))
      ) {
        const d = u.baseColorFactor;
        (o.color.setRGB(d[0], d[1], d[2], Rt), (o.opacity = d[3]));
      }
      (u.baseColorTexture !== void 0 &&
        c.push(t.assignTexture(o, "map", u.baseColorTexture, St)),
        (o.metalness = u.metallicFactor !== void 0 ? u.metallicFactor : 1),
        (o.roughness = u.roughnessFactor !== void 0 ? u.roughnessFactor : 1),
        u.metallicRoughnessTexture !== void 0 &&
          (c.push(
            t.assignTexture(o, "metalnessMap", u.metallicRoughnessTexture),
          ),
          c.push(
            t.assignTexture(o, "roughnessMap", u.metallicRoughnessTexture),
          )),
        (a = this._invokeOne(function (d) {
          return d.getMaterialType && d.getMaterialType(e);
        })),
        c.push(
          Promise.all(
            this._invokeAll(function (d) {
              return d.extendMaterialParams && d.extendMaterialParams(e, o);
            }),
          ),
        ));
    }
    r.doubleSided === !0 && (o.side = Fn);
    const h = r.alphaMode || No.OPAQUE;
    if (
      (h === No.BLEND
        ? ((o.transparent = !0), (o.depthWrite = !1))
        : ((o.transparent = !1),
          h === No.MASK &&
            (o.alphaTest = r.alphaCutoff !== void 0 ? r.alphaCutoff : 0.5)),
      r.normalTexture !== void 0 &&
        a !== Si &&
        (c.push(t.assignTexture(o, "normalMap", r.normalTexture)),
        (o.normalScale = new Re(1, 1)),
        r.normalTexture.scale !== void 0))
    ) {
      const u = r.normalTexture.scale;
      o.normalScale.set(u, u);
    }
    if (
      (r.occlusionTexture !== void 0 &&
        a !== Si &&
        (c.push(t.assignTexture(o, "aoMap", r.occlusionTexture)),
        r.occlusionTexture.strength !== void 0 &&
          (o.aoMapIntensity = r.occlusionTexture.strength)),
      r.emissiveFactor !== void 0 && a !== Si)
    ) {
      const u = r.emissiveFactor;
      o.emissive = new Ie().setRGB(u[0], u[1], u[2], Rt);
    }
    return (
      r.emissiveTexture !== void 0 &&
        a !== Si &&
        c.push(t.assignTexture(o, "emissiveMap", r.emissiveTexture, St)),
      Promise.all(c).then(function () {
        const u = new a(o);
        return (
          r.name && (u.name = r.name),
          ti(u, r),
          t.associations.set(u, { materials: e }),
          r.extensions && Gi(i, u, r),
          u
        );
      })
    );
  }
  createUniqueName(e) {
    const t = Je.sanitizeNodeName(e || "");
    return t in this.nodeNamesUsed
      ? t + "_" + ++this.nodeNamesUsed[t]
      : ((this.nodeNamesUsed[t] = 0), t);
  }
  loadGeometries(e) {
    const t = this,
      n = this.extensions,
      i = this.primitiveCache;
    function r(o) {
      return n[Ve.KHR_DRACO_MESH_COMPRESSION]
        .decodePrimitive(o, t)
        .then(function (l) {
          return Mu(l, o, t);
        });
    }
    const a = [];
    for (let o = 0, l = e.length; o < l; o++) {
      const c = e[o],
        h = Ry(c),
        u = i[h];
      if (u) a.push(u.promise);
      else {
        let d;
        (c.extensions && c.extensions[Ve.KHR_DRACO_MESH_COMPRESSION]
          ? (d = r(c))
          : (d = Mu(new bn(), c, t)),
          (i[h] = { primitive: c, promise: d }),
          a.push(d));
      }
    }
    return Promise.all(a);
  }
  loadMesh(e) {
    const t = this,
      n = this.json,
      i = this.extensions,
      r = n.meshes[e],
      a = r.primitives,
      o = [];
    for (let l = 0, c = a.length; l < c; l++) {
      const h =
        a[l].material === void 0
          ? by(this.cache)
          : this.getDependency("material", a[l].material);
      o.push(h);
    }
    return (
      o.push(t.loadGeometries(a)),
      Promise.all(o).then(function (l) {
        const c = l.slice(0, l.length - 1),
          h = l[l.length - 1],
          u = [];
        for (let f = 0, g = h.length; f < g; f++) {
          const _ = h[f],
            m = a[f];
          let p;
          const S = c[f];
          if (
            m.mode === yn.TRIANGLES ||
            m.mode === yn.TRIANGLE_STRIP ||
            m.mode === yn.TRIANGLE_FAN ||
            m.mode === void 0
          )
            ((p = r.isSkinnedMesh === !0 ? new wm(_, S) : new Yt(_, S)),
              p.isSkinnedMesh === !0 && p.normalizeSkinWeights(),
              m.mode === yn.TRIANGLE_STRIP
                ? (p.geometry = gu(p.geometry, ed))
                : m.mode === yn.TRIANGLE_FAN &&
                  (p.geometry = gu(p.geometry, Pl)));
          else if (m.mode === yn.LINES) p = new Um(_, S);
          else if (m.mode === yn.LINE_STRIP) p = new _c(_, S);
          else if (m.mode === yn.LINE_LOOP) p = new Nm(_, S);
          else if (m.mode === yn.POINTS) p = new Om(_, S);
          else
            throw new Error(
              "THREE.GLTFLoader: Primitive mode unsupported: " + m.mode,
            );
          (Object.keys(p.geometry.morphAttributes).length > 0 && wy(p, r),
            (p.name = t.createUniqueName(r.name || "mesh_" + e)),
            ti(p, r),
            m.extensions && Gi(i, p, m),
            t.assignFinalMaterial(p),
            u.push(p));
        }
        for (let f = 0, g = u.length; f < g; f++)
          t.associations.set(u[f], { meshes: e, primitives: f });
        if (u.length === 1) return (r.extensions && Gi(i, u[0], r), u[0]);
        const d = new Zi();
        (r.extensions && Gi(i, d, r), t.associations.set(d, { meshes: e }));
        for (let f = 0, g = u.length; f < g; f++) d.add(u[f]);
        return d;
      })
    );
  }
  loadCamera(e) {
    let t;
    const n = this.json.cameras[e],
      i = n[n.type];
    if (!i) {
      console.warn("THREE.GLTFLoader: Missing camera parameters.");
      return;
    }
    return (
      n.type === "perspective"
        ? (t = new Zt(
            nd.radToDeg(i.yfov),
            i.aspectRatio || 1,
            i.znear || 1,
            i.zfar || 2e6,
          ))
        : n.type === "orthographic" &&
          (t = new Xa(-i.xmag, i.xmag, i.ymag, -i.ymag, i.znear, i.zfar)),
      n.name && (t.name = this.createUniqueName(n.name)),
      ti(t, n),
      Promise.resolve(t)
    );
  }
  loadSkin(e) {
    const t = this.json.skins[e],
      n = [];
    for (let i = 0, r = t.joints.length; i < r; i++)
      n.push(this._loadNodeShallow(t.joints[i]));
    return (
      t.inverseBindMatrices !== void 0
        ? n.push(this.getDependency("accessor", t.inverseBindMatrices))
        : n.push(null),
      Promise.all(n).then(function (i) {
        const r = i.pop(),
          a = i,
          o = [],
          l = [];
        for (let c = 0, h = a.length; c < h; c++) {
          const u = a[c];
          if (u) {
            o.push(u);
            const d = new Oe();
            (r !== null && d.fromArray(r.array, c * 16), l.push(d));
          } else
            console.warn(
              'THREE.GLTFLoader: Joint "%s" could not be found.',
              t.joints[c],
            );
        }
        return new pc(o, l);
      })
    );
  }
  loadAnimation(e) {
    const t = this.json,
      n = this,
      i = t.animations[e],
      r = i.name ? i.name : "animation_" + e,
      a = [],
      o = [],
      l = [],
      c = [],
      h = [];
    for (let u = 0, d = i.channels.length; u < d; u++) {
      const f = i.channels[u],
        g = i.samplers[f.sampler],
        _ = f.target,
        m = _.node,
        p = i.parameters !== void 0 ? i.parameters[g.input] : g.input,
        S = i.parameters !== void 0 ? i.parameters[g.output] : g.output;
      _.node !== void 0 &&
        (a.push(this.getDependency("node", m)),
        o.push(this.getDependency("accessor", p)),
        l.push(this.getDependency("accessor", S)),
        c.push(g),
        h.push(_));
    }
    return Promise.all([
      Promise.all(a),
      Promise.all(o),
      Promise.all(l),
      Promise.all(c),
      Promise.all(h),
    ]).then(function (u) {
      const d = u[0],
        f = u[1],
        g = u[2],
        _ = u[3],
        m = u[4],
        p = [];
      for (let S = 0, M = d.length; S < M; S++) {
        const v = d[S],
          b = f[S],
          A = g[S],
          w = _[S],
          C = m[S];
        if (v === void 0) continue;
        v.updateMatrix && v.updateMatrix();
        const x = n._createAnimationTracks(v, b, A, w, C);
        if (x) for (let E = 0; E < x.length; E++) p.push(x[E]);
      }
      return new Xm(r, void 0, p);
    });
  }
  createNodeMesh(e) {
    const t = this.json,
      n = this,
      i = t.nodes[e];
    return i.mesh === void 0
      ? null
      : n.getDependency("mesh", i.mesh).then(function (r) {
          const a = n._getNodeRef(n.meshCache, i.mesh, r);
          return (
            i.weights !== void 0 &&
              a.traverse(function (o) {
                if (o.isMesh)
                  for (let l = 0, c = i.weights.length; l < c; l++)
                    o.morphTargetInfluences[l] = i.weights[l];
              }),
            a
          );
        });
  }
  loadNode(e) {
    const t = this.json,
      n = this,
      i = t.nodes[e],
      r = n._loadNodeShallow(e),
      a = [],
      o = i.children || [];
    for (let c = 0, h = o.length; c < h; c++)
      a.push(n.getDependency("node", o[c]));
    const l =
      i.skin === void 0
        ? Promise.resolve(null)
        : n.getDependency("skin", i.skin);
    return Promise.all([r, Promise.all(a), l]).then(function (c) {
      const h = c[0],
        u = c[1],
        d = c[2];
      d !== null &&
        h.traverse(function (f) {
          f.isSkinnedMesh && f.bind(d, Py);
        });
      for (let f = 0, g = u.length; f < g; f++) h.add(u[f]);
      return h;
    });
  }
  _loadNodeShallow(e) {
    const t = this.json,
      n = this.extensions,
      i = this;
    if (this.nodeCache[e] !== void 0) return this.nodeCache[e];
    const r = t.nodes[e],
      a = r.name ? i.createUniqueName(r.name) : "",
      o = [],
      l = i._invokeOne(function (c) {
        return c.createNodeMesh && c.createNodeMesh(e);
      });
    return (
      l && o.push(l),
      r.camera !== void 0 &&
        o.push(
          i.getDependency("camera", r.camera).then(function (c) {
            return i._getNodeRef(i.cameraCache, r.camera, c);
          }),
        ),
      i
        ._invokeAll(function (c) {
          return c.createNodeAttachment && c.createNodeAttachment(e);
        })
        .forEach(function (c) {
          o.push(c);
        }),
      (this.nodeCache[e] = Promise.all(o).then(function (c) {
        let h;
        if (
          (r.isBone === !0
            ? (h = new dd())
            : c.length > 1
              ? (h = new Zi())
              : c.length === 1
                ? (h = c[0])
                : (h = new dt()),
          h !== c[0])
        )
          for (let u = 0, d = c.length; u < d; u++) h.add(c[u]);
        if (
          (r.name && ((h.userData.name = r.name), (h.name = a)),
          ti(h, r),
          r.extensions && Gi(n, h, r),
          r.matrix !== void 0)
        ) {
          const u = new Oe();
          (u.fromArray(r.matrix), h.applyMatrix4(u));
        } else
          (r.translation !== void 0 && h.position.fromArray(r.translation),
            r.rotation !== void 0 && h.quaternion.fromArray(r.rotation),
            r.scale !== void 0 && h.scale.fromArray(r.scale));
        if (!i.associations.has(h)) i.associations.set(h, {});
        else if (r.mesh !== void 0 && i.meshCache.refs[r.mesh] > 1) {
          const u = i.associations.get(h);
          i.associations.set(h, { ...u });
        }
        return ((i.associations.get(h).nodes = e), h);
      })),
      this.nodeCache[e]
    );
  }
  loadScene(e) {
    const t = this.extensions,
      n = this.json.scenes[e],
      i = this,
      r = new Zi();
    (n.name && (r.name = i.createUniqueName(n.name)),
      ti(r, n),
      n.extensions && Gi(t, r, n));
    const a = n.nodes || [],
      o = [];
    for (let l = 0, c = a.length; l < c; l++)
      o.push(i.getDependency("node", a[l]));
    return Promise.all(o).then(function (l) {
      for (let h = 0, u = l.length; h < u; h++) r.add(l[h]);
      const c = (h) => {
        const u = new Map();
        for (const [d, f] of i.associations)
          (d instanceof In || d instanceof ut) && u.set(d, f);
        return (
          h.traverse((d) => {
            const f = i.associations.get(d);
            f != null && u.set(d, f);
          }),
          u
        );
      };
      return ((i.associations = c(r)), r);
    });
  }
  _createAnimationTracks(e, t, n, i, r) {
    const a = [],
      o = e.name ? e.name : e.uuid,
      l = [];
    vi[r.path] === vi.weights
      ? e.traverse(function (d) {
          d.morphTargetInfluences && l.push(d.name ? d.name : d.uuid);
        })
      : l.push(o);
    let c;
    switch (vi[r.path]) {
      case vi.weights:
        c = Wr;
        break;
      case vi.rotation:
        c = Xr;
        break;
      case vi.translation:
      case vi.scale:
        c = Yr;
        break;
      default:
        switch (n.itemSize) {
          case 1:
            c = Wr;
            break;
          case 2:
          case 3:
          default:
            c = Yr;
            break;
        }
        break;
    }
    const h = i.interpolation !== void 0 ? Ey[i.interpolation] : Ps,
      u = this._getArrayFromAccessor(n);
    for (let d = 0, f = l.length; d < f; d++) {
      const g = new c(l[d] + "." + vi[r.path], t.array, u, h);
      (i.interpolation === "CUBICSPLINE" &&
        this._createCubicSplineTrackInterpolant(g),
        a.push(g));
    }
    return a;
  }
  _getArrayFromAccessor(e) {
    let t = e.array;
    if (e.normalized) {
      const n = Fl(t.constructor),
        i = new Float32Array(t.length);
      for (let r = 0, a = t.length; r < a; r++) i[r] = t[r] * n;
      t = i;
    }
    return t;
  }
  _createCubicSplineTrackInterpolant(e) {
    ((e.createInterpolant = function (n) {
      const i = this instanceof Xr ? Ty : Rd;
      return new i(this.times, this.values, this.getValueSize() / 3, n);
    }),
      (e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0));
  }
}
function Ly(s, e, t) {
  const n = e.attributes,
    i = new di();
  if (n.POSITION !== void 0) {
    const o = t.json.accessors[n.POSITION],
      l = o.min,
      c = o.max;
    if (l !== void 0 && c !== void 0) {
      if (
        (i.set(new L(l[0], l[1], l[2]), new L(c[0], c[1], c[2])), o.normalized)
      ) {
        const h = Fl(Ir[o.componentType]);
        (i.min.multiplyScalar(h), i.max.multiplyScalar(h));
      }
    } else {
      console.warn(
        "THREE.GLTFLoader: Missing min/max properties for accessor POSITION.",
      );
      return;
    }
  } else return;
  const r = e.targets;
  if (r !== void 0) {
    const o = new L(),
      l = new L();
    for (let c = 0, h = r.length; c < h; c++) {
      const u = r[c];
      if (u.POSITION !== void 0) {
        const d = t.json.accessors[u.POSITION],
          f = d.min,
          g = d.max;
        if (f !== void 0 && g !== void 0) {
          if (
            (l.setX(Math.max(Math.abs(f[0]), Math.abs(g[0]))),
            l.setY(Math.max(Math.abs(f[1]), Math.abs(g[1]))),
            l.setZ(Math.max(Math.abs(f[2]), Math.abs(g[2]))),
            d.normalized)
          ) {
            const _ = Fl(Ir[d.componentType]);
            l.multiplyScalar(_);
          }
          o.max(l);
        } else
          console.warn(
            "THREE.GLTFLoader: Missing min/max properties for accessor POSITION.",
          );
      }
    }
    i.expandByVector(o);
  }
  s.boundingBox = i;
  const a = new Xn();
  (i.getCenter(a.center),
    (a.radius = i.min.distanceTo(i.max) / 2),
    (s.boundingSphere = a));
}
function Mu(s, e, t) {
  const n = e.attributes,
    i = [];
  function r(a, o) {
    return t.getDependency("accessor", a).then(function (l) {
      s.setAttribute(o, l);
    });
  }
  for (const a in n) {
    const o = Ol[a] || a.toLowerCase();
    o in s.attributes || i.push(r(n[a], o));
  }
  if (e.indices !== void 0 && !s.index) {
    const a = t.getDependency("accessor", e.indices).then(function (o) {
      s.setIndex(o);
    });
    i.push(a);
  }
  return (
    We.workingColorSpace !== Rt &&
      "COLOR_0" in n &&
      console.warn(
        `THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${We.workingColorSpace}" not supported.`,
      ),
    ti(s, e),
    Ly(s, e, t),
    Promise.all(i).then(function () {
      return e.targets !== void 0 ? Ay(s, e.targets, t) : s;
    })
  );
}
const Fo = new WeakMap();
class TS extends Ii {
  constructor(e) {
    (super(e),
      (this.decoderPath = ""),
      (this.decoderConfig = {}),
      (this.decoderBinary = null),
      (this.decoderPending = null),
      (this.workerLimit = 4),
      (this.workerPool = []),
      (this.workerNextTaskID = 1),
      (this.workerSourceURL = ""),
      (this.defaultAttributeIDs = {
        position: "POSITION",
        normal: "NORMAL",
        color: "COLOR",
        uv: "TEX_COORD",
      }),
      (this.defaultAttributeTypes = {
        position: "Float32Array",
        normal: "Float32Array",
        color: "Float32Array",
        uv: "Float32Array",
      }));
  }
  setDecoderPath(e) {
    return ((this.decoderPath = e), this);
  }
  setDecoderConfig(e) {
    return ((this.decoderConfig = e), this);
  }
  setWorkerLimit(e) {
    return ((this.workerLimit = e), this);
  }
  load(e, t, n, i) {
    const r = new Ji(this.manager);
    (r.setPath(this.path),
      r.setResponseType("arraybuffer"),
      r.setRequestHeader(this.requestHeader),
      r.setWithCredentials(this.withCredentials),
      r.load(
        e,
        (a) => {
          this.parse(a, t, i);
        },
        n,
        i,
      ));
  }
  parse(e, t, n = () => {}) {
    this.decodeDracoFile(e, t, null, null, St, n).catch(n);
  }
  decodeDracoFile(e, t, n, i, r = Rt, a = () => {}) {
    const o = {
      attributeIDs: n || this.defaultAttributeIDs,
      attributeTypes: i || this.defaultAttributeTypes,
      useUniqueIDs: !!n,
      vertexColorSpace: r,
    };
    return this.decodeGeometry(e, o).then(t).catch(a);
  }
  decodeGeometry(e, t) {
    const n = JSON.stringify(t);
    if (Fo.has(e)) {
      const l = Fo.get(e);
      if (l.key === n) return l.promise;
      if (e.byteLength === 0)
        throw new Error(
          "THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.",
        );
    }
    let i;
    const r = this.workerNextTaskID++,
      a = e.byteLength,
      o = this._getWorker(r, a)
        .then(
          (l) => (
            (i = l),
            new Promise((c, h) => {
              ((i._callbacks[r] = { resolve: c, reject: h }),
                i.postMessage(
                  { type: "decode", id: r, taskConfig: t, buffer: e },
                  [e],
                ));
            })
          ),
        )
        .then((l) => this._createGeometry(l.geometry));
    return (
      o
        .catch(() => !0)
        .then(() => {
          i && r && this._releaseTask(i, r);
        }),
      Fo.set(e, { key: n, promise: o }),
      o
    );
  }
  _createGeometry(e) {
    const t = new bn();
    e.index && t.setIndex(new Ut(e.index.array, 1));
    for (let n = 0; n < e.attributes.length; n++) {
      const i = e.attributes[n],
        r = i.name,
        a = i.array,
        o = i.itemSize,
        l = new Ut(a, o);
      (r === "color" &&
        (this._assignVertexColorSpace(l, i.vertexColorSpace),
        (l.normalized = !(a instanceof Float32Array))),
        t.setAttribute(r, l));
    }
    return t;
  }
  _assignVertexColorSpace(e, t) {
    if (t !== St) return;
    const n = new Ie();
    for (let i = 0, r = e.count; i < r; i++)
      (n.fromBufferAttribute(e, i),
        We.colorSpaceToWorking(n, St),
        e.setXYZ(i, n.r, n.g, n.b));
  }
  _loadLibrary(e, t) {
    const n = new Ji(this.manager);
    return (
      n.setPath(this.decoderPath),
      n.setResponseType(t),
      n.setWithCredentials(this.withCredentials),
      new Promise((i, r) => {
        n.load(e, i, void 0, r);
      })
    );
  }
  preload() {
    return (this._initDecoder(), this);
  }
  _initDecoder() {
    if (this.decoderPending) return this.decoderPending;
    const e =
        typeof WebAssembly != "object" || this.decoderConfig.type === "js",
      t = [];
    return (
      e
        ? t.push(this._loadLibrary("draco_decoder.js", "text"))
        : (t.push(this._loadLibrary("draco_wasm_wrapper.js", "text")),
          t.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"))),
      (this.decoderPending = Promise.all(t).then((n) => {
        const i = n[0];
        e || (this.decoderConfig.wasmBinary = n[1]);
        const r = Iy.toString(),
          a = [
            "/* draco decoder */",
            i,
            "",
            "/* worker */",
            r.substring(r.indexOf("{") + 1, r.lastIndexOf("}")),
          ].join(`
`);
        this.workerSourceURL = URL.createObjectURL(new Blob([a]));
      })),
      this.decoderPending
    );
  }
  _getWorker(e, t) {
    return this._initDecoder().then(() => {
      if (this.workerPool.length < this.workerLimit) {
        const i = new Worker(this.workerSourceURL);
        ((i._callbacks = {}),
          (i._taskCosts = {}),
          (i._taskLoad = 0),
          i.postMessage({ type: "init", decoderConfig: this.decoderConfig }),
          (i.onmessage = function (r) {
            const a = r.data;
            switch (a.type) {
              case "decode":
                i._callbacks[a.id].resolve(a);
                break;
              case "error":
                i._callbacks[a.id].reject(a);
                break;
              default:
                console.error(
                  'THREE.DRACOLoader: Unexpected message, "' + a.type + '"',
                );
            }
          }),
          this.workerPool.push(i));
      } else
        this.workerPool.sort(function (i, r) {
          return i._taskLoad > r._taskLoad ? -1 : 1;
        });
      const n = this.workerPool[this.workerPool.length - 1];
      return ((n._taskCosts[e] = t), (n._taskLoad += t), n);
    });
  }
  _releaseTask(e, t) {
    ((e._taskLoad -= e._taskCosts[t]),
      delete e._callbacks[t],
      delete e._taskCosts[t]);
  }
  debug() {
    console.log(
      "Task load: ",
      this.workerPool.map((e) => e._taskLoad),
    );
  }
  dispose() {
    for (let e = 0; e < this.workerPool.length; ++e)
      this.workerPool[e].terminate();
    return (
      (this.workerPool.length = 0),
      this.workerSourceURL !== "" && URL.revokeObjectURL(this.workerSourceURL),
      this
    );
  }
}
function Iy() {
  let s, e;
  onmessage = function (a) {
    const o = a.data;
    switch (o.type) {
      case "init":
        ((s = o.decoderConfig),
          (e = new Promise(function (h) {
            ((s.onModuleLoaded = function (u) {
              h({ draco: u });
            }),
              DracoDecoderModule(s));
          })));
        break;
      case "decode":
        const l = o.buffer,
          c = o.taskConfig;
        e.then((h) => {
          const u = h.draco,
            d = new u.Decoder();
          try {
            const f = t(u, d, new Int8Array(l), c),
              g = f.attributes.map((_) => _.array.buffer);
            (f.index && g.push(f.index.array.buffer),
              self.postMessage({ type: "decode", id: o.id, geometry: f }, g));
          } catch (f) {
            (console.error(f),
              self.postMessage({ type: "error", id: o.id, error: f.message }));
          } finally {
            u.destroy(d);
          }
        });
        break;
    }
  };
  function t(a, o, l, c) {
    const h = c.attributeIDs,
      u = c.attributeTypes;
    let d, f;
    const g = o.GetEncodedGeometryType(l);
    if (g === a.TRIANGULAR_MESH)
      ((d = new a.Mesh()), (f = o.DecodeArrayToMesh(l, l.byteLength, d)));
    else if (g === a.POINT_CLOUD)
      ((d = new a.PointCloud()),
        (f = o.DecodeArrayToPointCloud(l, l.byteLength, d)));
    else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
    if (!f.ok() || d.ptr === 0)
      throw new Error("THREE.DRACOLoader: Decoding failed: " + f.error_msg());
    const _ = { index: null, attributes: [] };
    for (const m in h) {
      const p = self[u[m]];
      let S, M;
      if (c.useUniqueIDs) ((M = h[m]), (S = o.GetAttributeByUniqueId(d, M)));
      else {
        if (((M = o.GetAttributeId(d, a[h[m]])), M === -1)) continue;
        S = o.GetAttribute(d, M);
      }
      const v = i(a, o, d, m, p, S);
      (m === "color" && (v.vertexColorSpace = c.vertexColorSpace),
        _.attributes.push(v));
    }
    return (g === a.TRIANGULAR_MESH && (_.index = n(a, o, d)), a.destroy(d), _);
  }
  function n(a, o, l) {
    const h = l.num_faces() * 3,
      u = h * 4,
      d = a._malloc(u);
    o.GetTrianglesUInt32Array(l, u, d);
    const f = new Uint32Array(a.HEAPF32.buffer, d, h).slice();
    return (a._free(d), { array: f, itemSize: 1 });
  }
  function i(a, o, l, c, h, u) {
    const d = u.num_components(),
      g = l.num_points() * d,
      _ = g * h.BYTES_PER_ELEMENT,
      m = r(a, h),
      p = a._malloc(_);
    o.GetAttributeDataArrayForAllPoints(l, u, m, _, p);
    const S = new h(a.HEAPF32.buffer, p, g).slice();
    return (a._free(p), { name: c, array: S, itemSize: d });
  }
  function r(a, o) {
    switch (o) {
      case Float32Array:
        return a.DT_FLOAT32;
      case Int8Array:
        return a.DT_INT8;
      case Int16Array:
        return a.DT_INT16;
      case Int32Array:
        return a.DT_INT32;
      case Uint8Array:
        return a.DT_UINT8;
      case Uint16Array:
        return a.DT_UINT16;
      case Uint32Array:
        return a.DT_UINT32;
    }
  }
}
const Su = { type: "change" },
  Tc = { type: "start" },
  Cd = { type: "end" },
  ga = new Qr(),
  Tu = new yi(),
  Uy = Math.cos(70 * nd.DEG2RAD),
  At = new L(),
  Kt = 2 * Math.PI,
  tt = {
    NONE: -1,
    ROTATE: 0,
    DOLLY: 1,
    PAN: 2,
    TOUCH_ROTATE: 3,
    TOUCH_PAN: 4,
    TOUCH_DOLLY_PAN: 5,
    TOUCH_DOLLY_ROTATE: 6,
  },
  Bo = 1e-6;
class ES extends m_ {
  constructor(e, t = null) {
    (super(e, t),
      (this.state = tt.NONE),
      (this.target = new L()),
      (this.cursor = new L()),
      (this.minDistance = 0),
      (this.maxDistance = 1 / 0),
      (this.minZoom = 0),
      (this.maxZoom = 1 / 0),
      (this.minTargetRadius = 0),
      (this.maxTargetRadius = 1 / 0),
      (this.minPolarAngle = 0),
      (this.maxPolarAngle = Math.PI),
      (this.minAzimuthAngle = -1 / 0),
      (this.maxAzimuthAngle = 1 / 0),
      (this.enableDamping = !1),
      (this.dampingFactor = 0.05),
      (this.enableZoom = !0),
      (this.zoomSpeed = 1),
      (this.enableRotate = !0),
      (this.rotateSpeed = 1),
      (this.keyRotateSpeed = 1),
      (this.enablePan = !0),
      (this.panSpeed = 1),
      (this.screenSpacePanning = !0),
      (this.keyPanSpeed = 7),
      (this.zoomToCursor = !1),
      (this.autoRotate = !1),
      (this.autoRotateSpeed = 2),
      (this.keys = {
        LEFT: "ArrowLeft",
        UP: "ArrowUp",
        RIGHT: "ArrowRight",
        BOTTOM: "ArrowDown",
      }),
      (this.mouseButtons = {
        LEFT: Cr.ROTATE,
        MIDDLE: Cr.DOLLY,
        RIGHT: Cr.PAN,
      }),
      (this.touches = { ONE: br.ROTATE, TWO: br.DOLLY_PAN }),
      (this.target0 = this.target.clone()),
      (this.position0 = this.object.position.clone()),
      (this.zoom0 = this.object.zoom),
      (this._domElementKeyEvents = null),
      (this._lastPosition = new L()),
      (this._lastQuaternion = new Hn()),
      (this._lastTargetPosition = new L()),
      (this._quat = new Hn().setFromUnitVectors(e.up, new L(0, 1, 0))),
      (this._quatInverse = this._quat.clone().invert()),
      (this._spherical = new Xh()),
      (this._sphericalDelta = new Xh()),
      (this._scale = 1),
      (this._panOffset = new L()),
      (this._rotateStart = new Re()),
      (this._rotateEnd = new Re()),
      (this._rotateDelta = new Re()),
      (this._panStart = new Re()),
      (this._panEnd = new Re()),
      (this._panDelta = new Re()),
      (this._dollyStart = new Re()),
      (this._dollyEnd = new Re()),
      (this._dollyDelta = new Re()),
      (this._dollyDirection = new L()),
      (this._mouse = new Re()),
      (this._performCursorZoom = !1),
      (this._pointers = []),
      (this._pointerPositions = {}),
      (this._controlActive = !1),
      (this._onPointerMove = Oy.bind(this)),
      (this._onPointerDown = Ny.bind(this)),
      (this._onPointerUp = Fy.bind(this)),
      (this._onContextMenu = Wy.bind(this)),
      (this._onMouseWheel = zy.bind(this)),
      (this._onKeyDown = Hy.bind(this)),
      (this._onTouchStart = Vy.bind(this)),
      (this._onTouchMove = Gy.bind(this)),
      (this._onMouseDown = By.bind(this)),
      (this._onMouseMove = ky.bind(this)),
      (this._interceptControlDown = Xy.bind(this)),
      (this._interceptControlUp = Yy.bind(this)),
      this.domElement !== null && this.connect(this.domElement),
      this.update());
  }
  connect(e) {
    (super.connect(e),
      this.domElement.addEventListener("pointerdown", this._onPointerDown),
      this.domElement.addEventListener("pointercancel", this._onPointerUp),
      this.domElement.addEventListener("contextmenu", this._onContextMenu),
      this.domElement.addEventListener("wheel", this._onMouseWheel, {
        passive: !1,
      }),
      this.domElement
        .getRootNode()
        .addEventListener("keydown", this._interceptControlDown, {
          passive: !0,
          capture: !0,
        }),
      (this.domElement.style.touchAction = "none"));
  }
  disconnect() {
    (this.domElement.removeEventListener("pointerdown", this._onPointerDown),
      this.domElement.removeEventListener("pointermove", this._onPointerMove),
      this.domElement.removeEventListener("pointerup", this._onPointerUp),
      this.domElement.removeEventListener("pointercancel", this._onPointerUp),
      this.domElement.removeEventListener("wheel", this._onMouseWheel),
      this.domElement.removeEventListener("contextmenu", this._onContextMenu),
      this.stopListenToKeyEvents(),
      this.domElement
        .getRootNode()
        .removeEventListener("keydown", this._interceptControlDown, {
          capture: !0,
        }),
      (this.domElement.style.touchAction = "auto"));
  }
  dispose() {
    this.disconnect();
  }
  getPolarAngle() {
    return this._spherical.phi;
  }
  getAzimuthalAngle() {
    return this._spherical.theta;
  }
  getDistance() {
    return this.object.position.distanceTo(this.target);
  }
  listenToKeyEvents(e) {
    (e.addEventListener("keydown", this._onKeyDown),
      (this._domElementKeyEvents = e));
  }
  stopListenToKeyEvents() {
    this._domElementKeyEvents !== null &&
      (this._domElementKeyEvents.removeEventListener(
        "keydown",
        this._onKeyDown,
      ),
      (this._domElementKeyEvents = null));
  }
  saveState() {
    (this.target0.copy(this.target),
      this.position0.copy(this.object.position),
      (this.zoom0 = this.object.zoom));
  }
  reset() {
    (this.target.copy(this.target0),
      this.object.position.copy(this.position0),
      (this.object.zoom = this.zoom0),
      this.object.updateProjectionMatrix(),
      this.dispatchEvent(Su),
      this.update(),
      (this.state = tt.NONE));
  }
  update(e = null) {
    const t = this.object.position;
    (At.copy(t).sub(this.target),
      At.applyQuaternion(this._quat),
      this._spherical.setFromVector3(At),
      this.autoRotate &&
        this.state === tt.NONE &&
        this._rotateLeft(this._getAutoRotationAngle(e)),
      this.enableDamping
        ? ((this._spherical.theta +=
            this._sphericalDelta.theta * this.dampingFactor),
          (this._spherical.phi +=
            this._sphericalDelta.phi * this.dampingFactor))
        : ((this._spherical.theta += this._sphericalDelta.theta),
          (this._spherical.phi += this._sphericalDelta.phi)));
    let n = this.minAzimuthAngle,
      i = this.maxAzimuthAngle;
    (isFinite(n) &&
      isFinite(i) &&
      (n < -Math.PI ? (n += Kt) : n > Math.PI && (n -= Kt),
      i < -Math.PI ? (i += Kt) : i > Math.PI && (i -= Kt),
      n <= i
        ? (this._spherical.theta = Math.max(
            n,
            Math.min(i, this._spherical.theta),
          ))
        : (this._spherical.theta =
            this._spherical.theta > (n + i) / 2
              ? Math.max(n, this._spherical.theta)
              : Math.min(i, this._spherical.theta))),
      (this._spherical.phi = Math.max(
        this.minPolarAngle,
        Math.min(this.maxPolarAngle, this._spherical.phi),
      )),
      this._spherical.makeSafe(),
      this.enableDamping === !0
        ? this.target.addScaledVector(this._panOffset, this.dampingFactor)
        : this.target.add(this._panOffset),
      this.target.sub(this.cursor),
      this.target.clampLength(this.minTargetRadius, this.maxTargetRadius),
      this.target.add(this.cursor));
    let r = !1;
    if (
      (this.zoomToCursor && this._performCursorZoom) ||
      this.object.isOrthographicCamera
    )
      this._spherical.radius = this._clampDistance(this._spherical.radius);
    else {
      const a = this._spherical.radius;
      ((this._spherical.radius = this._clampDistance(
        this._spherical.radius * this._scale,
      )),
        (r = a != this._spherical.radius));
    }
    if (
      (At.setFromSpherical(this._spherical),
      At.applyQuaternion(this._quatInverse),
      t.copy(this.target).add(At),
      this.object.lookAt(this.target),
      this.enableDamping === !0
        ? ((this._sphericalDelta.theta *= 1 - this.dampingFactor),
          (this._sphericalDelta.phi *= 1 - this.dampingFactor),
          this._panOffset.multiplyScalar(1 - this.dampingFactor))
        : (this._sphericalDelta.set(0, 0, 0), this._panOffset.set(0, 0, 0)),
      this.zoomToCursor && this._performCursorZoom)
    ) {
      let a = null;
      if (this.object.isPerspectiveCamera) {
        const o = At.length();
        a = this._clampDistance(o * this._scale);
        const l = o - a;
        (this.object.position.addScaledVector(this._dollyDirection, l),
          this.object.updateMatrixWorld(),
          (r = !!l));
      } else if (this.object.isOrthographicCamera) {
        const o = new L(this._mouse.x, this._mouse.y, 0);
        o.unproject(this.object);
        const l = this.object.zoom;
        ((this.object.zoom = Math.max(
          this.minZoom,
          Math.min(this.maxZoom, this.object.zoom / this._scale),
        )),
          this.object.updateProjectionMatrix(),
          (r = l !== this.object.zoom));
        const c = new L(this._mouse.x, this._mouse.y, 0);
        (c.unproject(this.object),
          this.object.position.sub(c).add(o),
          this.object.updateMatrixWorld(),
          (a = At.length()));
      } else
        (console.warn(
          "WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled.",
        ),
          (this.zoomToCursor = !1));
      a !== null &&
        (this.screenSpacePanning
          ? this.target
              .set(0, 0, -1)
              .transformDirection(this.object.matrix)
              .multiplyScalar(a)
              .add(this.object.position)
          : (ga.origin.copy(this.object.position),
            ga.direction.set(0, 0, -1).transformDirection(this.object.matrix),
            Math.abs(this.object.up.dot(ga.direction)) < Uy
              ? this.object.lookAt(this.target)
              : (Tu.setFromNormalAndCoplanarPoint(this.object.up, this.target),
                ga.intersectPlane(Tu, this.target))));
    } else if (this.object.isOrthographicCamera) {
      const a = this.object.zoom;
      ((this.object.zoom = Math.max(
        this.minZoom,
        Math.min(this.maxZoom, this.object.zoom / this._scale),
      )),
        a !== this.object.zoom &&
          (this.object.updateProjectionMatrix(), (r = !0)));
    }
    return (
      (this._scale = 1),
      (this._performCursorZoom = !1),
      r ||
      this._lastPosition.distanceToSquared(this.object.position) > Bo ||
      8 * (1 - this._lastQuaternion.dot(this.object.quaternion)) > Bo ||
      this._lastTargetPosition.distanceToSquared(this.target) > Bo
        ? (this.dispatchEvent(Su),
          this._lastPosition.copy(this.object.position),
          this._lastQuaternion.copy(this.object.quaternion),
          this._lastTargetPosition.copy(this.target),
          !0)
        : !1
    );
  }
  _getAutoRotationAngle(e) {
    return e !== null
      ? (Kt / 60) * this.autoRotateSpeed * e
      : (Kt / 60 / 60) * this.autoRotateSpeed;
  }
  _getZoomScale(e) {
    const t = Math.abs(e * 0.01);
    return Math.pow(0.95, this.zoomSpeed * t);
  }
  _rotateLeft(e) {
    this._sphericalDelta.theta -= e;
  }
  _rotateUp(e) {
    this._sphericalDelta.phi -= e;
  }
  _panLeft(e, t) {
    (At.setFromMatrixColumn(t, 0),
      At.multiplyScalar(-e),
      this._panOffset.add(At));
  }
  _panUp(e, t) {
    (this.screenSpacePanning === !0
      ? At.setFromMatrixColumn(t, 1)
      : (At.setFromMatrixColumn(t, 0), At.crossVectors(this.object.up, At)),
      At.multiplyScalar(e),
      this._panOffset.add(At));
  }
  _pan(e, t) {
    const n = this.domElement;
    if (this.object.isPerspectiveCamera) {
      const i = this.object.position;
      At.copy(i).sub(this.target);
      let r = At.length();
      ((r *= Math.tan(((this.object.fov / 2) * Math.PI) / 180)),
        this._panLeft((2 * e * r) / n.clientHeight, this.object.matrix),
        this._panUp((2 * t * r) / n.clientHeight, this.object.matrix));
    } else
      this.object.isOrthographicCamera
        ? (this._panLeft(
            (e * (this.object.right - this.object.left)) /
              this.object.zoom /
              n.clientWidth,
            this.object.matrix,
          ),
          this._panUp(
            (t * (this.object.top - this.object.bottom)) /
              this.object.zoom /
              n.clientHeight,
            this.object.matrix,
          ))
        : (console.warn(
            "WARNING: OrbitControls.js encountered an unknown camera type - pan disabled.",
          ),
          (this.enablePan = !1));
  }
  _dollyOut(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera
      ? (this._scale /= e)
      : (console.warn(
          "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.",
        ),
        (this.enableZoom = !1));
  }
  _dollyIn(e) {
    this.object.isPerspectiveCamera || this.object.isOrthographicCamera
      ? (this._scale *= e)
      : (console.warn(
          "WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled.",
        ),
        (this.enableZoom = !1));
  }
  _updateZoomParameters(e, t) {
    if (!this.zoomToCursor) return;
    this._performCursorZoom = !0;
    const n = this.domElement.getBoundingClientRect(),
      i = e - n.left,
      r = t - n.top,
      a = n.width,
      o = n.height;
    ((this._mouse.x = (i / a) * 2 - 1),
      (this._mouse.y = -(r / o) * 2 + 1),
      this._dollyDirection
        .set(this._mouse.x, this._mouse.y, 1)
        .unproject(this.object)
        .sub(this.object.position)
        .normalize());
  }
  _clampDistance(e) {
    return Math.max(this.minDistance, Math.min(this.maxDistance, e));
  }
  _handleMouseDownRotate(e) {
    this._rotateStart.set(e.clientX, e.clientY);
  }
  _handleMouseDownDolly(e) {
    (this._updateZoomParameters(e.clientX, e.clientX),
      this._dollyStart.set(e.clientX, e.clientY));
  }
  _handleMouseDownPan(e) {
    this._panStart.set(e.clientX, e.clientY);
  }
  _handleMouseMoveRotate(e) {
    (this._rotateEnd.set(e.clientX, e.clientY),
      this._rotateDelta
        .subVectors(this._rotateEnd, this._rotateStart)
        .multiplyScalar(this.rotateSpeed));
    const t = this.domElement;
    (this._rotateLeft((Kt * this._rotateDelta.x) / t.clientHeight),
      this._rotateUp((Kt * this._rotateDelta.y) / t.clientHeight),
      this._rotateStart.copy(this._rotateEnd),
      this.update());
  }
  _handleMouseMoveDolly(e) {
    (this._dollyEnd.set(e.clientX, e.clientY),
      this._dollyDelta.subVectors(this._dollyEnd, this._dollyStart),
      this._dollyDelta.y > 0
        ? this._dollyOut(this._getZoomScale(this._dollyDelta.y))
        : this._dollyDelta.y < 0 &&
          this._dollyIn(this._getZoomScale(this._dollyDelta.y)),
      this._dollyStart.copy(this._dollyEnd),
      this.update());
  }
  _handleMouseMovePan(e) {
    (this._panEnd.set(e.clientX, e.clientY),
      this._panDelta
        .subVectors(this._panEnd, this._panStart)
        .multiplyScalar(this.panSpeed),
      this._pan(this._panDelta.x, this._panDelta.y),
      this._panStart.copy(this._panEnd),
      this.update());
  }
  _handleMouseWheel(e) {
    (this._updateZoomParameters(e.clientX, e.clientY),
      e.deltaY < 0
        ? this._dollyIn(this._getZoomScale(e.deltaY))
        : e.deltaY > 0 && this._dollyOut(this._getZoomScale(e.deltaY)),
      this.update());
  }
  _handleKeyDown(e) {
    let t = !1;
    switch (e.code) {
      case this.keys.UP:
        (e.ctrlKey || e.metaKey || e.shiftKey
          ? this.enableRotate &&
            this._rotateUp(
              (Kt * this.keyRotateSpeed) / this.domElement.clientHeight,
            )
          : this.enablePan && this._pan(0, this.keyPanSpeed),
          (t = !0));
        break;
      case this.keys.BOTTOM:
        (e.ctrlKey || e.metaKey || e.shiftKey
          ? this.enableRotate &&
            this._rotateUp(
              (-Kt * this.keyRotateSpeed) / this.domElement.clientHeight,
            )
          : this.enablePan && this._pan(0, -this.keyPanSpeed),
          (t = !0));
        break;
      case this.keys.LEFT:
        (e.ctrlKey || e.metaKey || e.shiftKey
          ? this.enableRotate &&
            this._rotateLeft(
              (Kt * this.keyRotateSpeed) / this.domElement.clientHeight,
            )
          : this.enablePan && this._pan(this.keyPanSpeed, 0),
          (t = !0));
        break;
      case this.keys.RIGHT:
        (e.ctrlKey || e.metaKey || e.shiftKey
          ? this.enableRotate &&
            this._rotateLeft(
              (-Kt * this.keyRotateSpeed) / this.domElement.clientHeight,
            )
          : this.enablePan && this._pan(-this.keyPanSpeed, 0),
          (t = !0));
        break;
    }
    t && (e.preventDefault(), this.update());
  }
  _handleTouchStartRotate(e) {
    if (this._pointers.length === 1) this._rotateStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e),
        n = 0.5 * (e.pageX + t.x),
        i = 0.5 * (e.pageY + t.y);
      this._rotateStart.set(n, i);
    }
  }
  _handleTouchStartPan(e) {
    if (this._pointers.length === 1) this._panStart.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e),
        n = 0.5 * (e.pageX + t.x),
        i = 0.5 * (e.pageY + t.y);
      this._panStart.set(n, i);
    }
  }
  _handleTouchStartDolly(e) {
    const t = this._getSecondPointerPosition(e),
      n = e.pageX - t.x,
      i = e.pageY - t.y,
      r = Math.sqrt(n * n + i * i);
    this._dollyStart.set(0, r);
  }
  _handleTouchStartDollyPan(e) {
    (this.enableZoom && this._handleTouchStartDolly(e),
      this.enablePan && this._handleTouchStartPan(e));
  }
  _handleTouchStartDollyRotate(e) {
    (this.enableZoom && this._handleTouchStartDolly(e),
      this.enableRotate && this._handleTouchStartRotate(e));
  }
  _handleTouchMoveRotate(e) {
    if (this._pointers.length == 1) this._rotateEnd.set(e.pageX, e.pageY);
    else {
      const n = this._getSecondPointerPosition(e),
        i = 0.5 * (e.pageX + n.x),
        r = 0.5 * (e.pageY + n.y);
      this._rotateEnd.set(i, r);
    }
    this._rotateDelta
      .subVectors(this._rotateEnd, this._rotateStart)
      .multiplyScalar(this.rotateSpeed);
    const t = this.domElement;
    (this._rotateLeft((Kt * this._rotateDelta.x) / t.clientHeight),
      this._rotateUp((Kt * this._rotateDelta.y) / t.clientHeight),
      this._rotateStart.copy(this._rotateEnd));
  }
  _handleTouchMovePan(e) {
    if (this._pointers.length === 1) this._panEnd.set(e.pageX, e.pageY);
    else {
      const t = this._getSecondPointerPosition(e),
        n = 0.5 * (e.pageX + t.x),
        i = 0.5 * (e.pageY + t.y);
      this._panEnd.set(n, i);
    }
    (this._panDelta
      .subVectors(this._panEnd, this._panStart)
      .multiplyScalar(this.panSpeed),
      this._pan(this._panDelta.x, this._panDelta.y),
      this._panStart.copy(this._panEnd));
  }
  _handleTouchMoveDolly(e) {
    const t = this._getSecondPointerPosition(e),
      n = e.pageX - t.x,
      i = e.pageY - t.y,
      r = Math.sqrt(n * n + i * i);
    (this._dollyEnd.set(0, r),
      this._dollyDelta.set(
        0,
        Math.pow(this._dollyEnd.y / this._dollyStart.y, this.zoomSpeed),
      ),
      this._dollyOut(this._dollyDelta.y),
      this._dollyStart.copy(this._dollyEnd));
    const a = (e.pageX + t.x) * 0.5,
      o = (e.pageY + t.y) * 0.5;
    this._updateZoomParameters(a, o);
  }
  _handleTouchMoveDollyPan(e) {
    (this.enableZoom && this._handleTouchMoveDolly(e),
      this.enablePan && this._handleTouchMovePan(e));
  }
  _handleTouchMoveDollyRotate(e) {
    (this.enableZoom && this._handleTouchMoveDolly(e),
      this.enableRotate && this._handleTouchMoveRotate(e));
  }
  _addPointer(e) {
    this._pointers.push(e.pointerId);
  }
  _removePointer(e) {
    delete this._pointerPositions[e.pointerId];
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) {
        this._pointers.splice(t, 1);
        return;
      }
  }
  _isTrackingPointer(e) {
    for (let t = 0; t < this._pointers.length; t++)
      if (this._pointers[t] == e.pointerId) return !0;
    return !1;
  }
  _trackPointer(e) {
    let t = this._pointerPositions[e.pointerId];
    (t === void 0 &&
      ((t = new Re()), (this._pointerPositions[e.pointerId] = t)),
      t.set(e.pageX, e.pageY));
  }
  _getSecondPointerPosition(e) {
    const t =
      e.pointerId === this._pointers[0] ? this._pointers[1] : this._pointers[0];
    return this._pointerPositions[t];
  }
  _customWheelEvent(e) {
    const t = e.deltaMode,
      n = { clientX: e.clientX, clientY: e.clientY, deltaY: e.deltaY };
    switch (t) {
      case 1:
        n.deltaY *= 16;
        break;
      case 2:
        n.deltaY *= 100;
        break;
    }
    return (e.ctrlKey && !this._controlActive && (n.deltaY *= 10), n);
  }
}
function Ny(s) {
  this.enabled !== !1 &&
    (this._pointers.length === 0 &&
      (this.domElement.setPointerCapture(s.pointerId),
      this.domElement.addEventListener("pointermove", this._onPointerMove),
      this.domElement.addEventListener("pointerup", this._onPointerUp)),
    !this._isTrackingPointer(s) &&
      (this._addPointer(s),
      s.pointerType === "touch"
        ? this._onTouchStart(s)
        : this._onMouseDown(s)));
}
function Oy(s) {
  this.enabled !== !1 &&
    (s.pointerType === "touch" ? this._onTouchMove(s) : this._onMouseMove(s));
}
function Fy(s) {
  switch ((this._removePointer(s), this._pointers.length)) {
    case 0:
      (this.domElement.releasePointerCapture(s.pointerId),
        this.domElement.removeEventListener("pointermove", this._onPointerMove),
        this.domElement.removeEventListener("pointerup", this._onPointerUp),
        this.dispatchEvent(Cd),
        (this.state = tt.NONE));
      break;
    case 1:
      const e = this._pointers[0],
        t = this._pointerPositions[e];
      this._onTouchStart({ pointerId: e, pageX: t.x, pageY: t.y });
      break;
  }
}
function By(s) {
  let e;
  switch (s.button) {
    case 0:
      e = this.mouseButtons.LEFT;
      break;
    case 1:
      e = this.mouseButtons.MIDDLE;
      break;
    case 2:
      e = this.mouseButtons.RIGHT;
      break;
    default:
      e = -1;
  }
  switch (e) {
    case Cr.DOLLY:
      if (this.enableZoom === !1) return;
      (this._handleMouseDownDolly(s), (this.state = tt.DOLLY));
      break;
    case Cr.ROTATE:
      if (s.ctrlKey || s.metaKey || s.shiftKey) {
        if (this.enablePan === !1) return;
        (this._handleMouseDownPan(s), (this.state = tt.PAN));
      } else {
        if (this.enableRotate === !1) return;
        (this._handleMouseDownRotate(s), (this.state = tt.ROTATE));
      }
      break;
    case Cr.PAN:
      if (s.ctrlKey || s.metaKey || s.shiftKey) {
        if (this.enableRotate === !1) return;
        (this._handleMouseDownRotate(s), (this.state = tt.ROTATE));
      } else {
        if (this.enablePan === !1) return;
        (this._handleMouseDownPan(s), (this.state = tt.PAN));
      }
      break;
    default:
      this.state = tt.NONE;
  }
  this.state !== tt.NONE && this.dispatchEvent(Tc);
}
function ky(s) {
  switch (this.state) {
    case tt.ROTATE:
      if (this.enableRotate === !1) return;
      this._handleMouseMoveRotate(s);
      break;
    case tt.DOLLY:
      if (this.enableZoom === !1) return;
      this._handleMouseMoveDolly(s);
      break;
    case tt.PAN:
      if (this.enablePan === !1) return;
      this._handleMouseMovePan(s);
      break;
  }
}
function zy(s) {
  this.enabled === !1 ||
    this.enableZoom === !1 ||
    this.state !== tt.NONE ||
    (s.preventDefault(),
    this.dispatchEvent(Tc),
    this._handleMouseWheel(this._customWheelEvent(s)),
    this.dispatchEvent(Cd));
}
function Hy(s) {
  this.enabled !== !1 && this._handleKeyDown(s);
}
function Vy(s) {
  switch ((this._trackPointer(s), this._pointers.length)) {
    case 1:
      switch (this.touches.ONE) {
        case br.ROTATE:
          if (this.enableRotate === !1) return;
          (this._handleTouchStartRotate(s), (this.state = tt.TOUCH_ROTATE));
          break;
        case br.PAN:
          if (this.enablePan === !1) return;
          (this._handleTouchStartPan(s), (this.state = tt.TOUCH_PAN));
          break;
        default:
          this.state = tt.NONE;
      }
      break;
    case 2:
      switch (this.touches.TWO) {
        case br.DOLLY_PAN:
          if (this.enableZoom === !1 && this.enablePan === !1) return;
          (this._handleTouchStartDollyPan(s),
            (this.state = tt.TOUCH_DOLLY_PAN));
          break;
        case br.DOLLY_ROTATE:
          if (this.enableZoom === !1 && this.enableRotate === !1) return;
          (this._handleTouchStartDollyRotate(s),
            (this.state = tt.TOUCH_DOLLY_ROTATE));
          break;
        default:
          this.state = tt.NONE;
      }
      break;
    default:
      this.state = tt.NONE;
  }
  this.state !== tt.NONE && this.dispatchEvent(Tc);
}
function Gy(s) {
  switch ((this._trackPointer(s), this.state)) {
    case tt.TOUCH_ROTATE:
      if (this.enableRotate === !1) return;
      (this._handleTouchMoveRotate(s), this.update());
      break;
    case tt.TOUCH_PAN:
      if (this.enablePan === !1) return;
      (this._handleTouchMovePan(s), this.update());
      break;
    case tt.TOUCH_DOLLY_PAN:
      if (this.enableZoom === !1 && this.enablePan === !1) return;
      (this._handleTouchMoveDollyPan(s), this.update());
      break;
    case tt.TOUCH_DOLLY_ROTATE:
      if (this.enableZoom === !1 && this.enableRotate === !1) return;
      (this._handleTouchMoveDollyRotate(s), this.update());
      break;
    default:
      this.state = tt.NONE;
  }
}
function Wy(s) {
  this.enabled !== !1 && s.preventDefault();
}
function Xy(s) {
  s.key === "Control" &&
    ((this._controlActive = !0),
    this.domElement
      .getRootNode()
      .addEventListener("keyup", this._interceptControlUp, {
        passive: !0,
        capture: !0,
      }));
}
function Yy(s) {
  s.key === "Control" &&
    ((this._controlActive = !1),
    this.domElement
      .getRootNode()
      .removeEventListener("keyup", this._interceptControlUp, {
        passive: !0,
        capture: !0,
      }));
}
function ni(s) {
  if (s === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called",
    );
  return s;
}
function Pd(s, e) {
  ((s.prototype = Object.create(e.prototype)),
    (s.prototype.constructor = s),
    (s.__proto__ = e));
}
/*!
 * GSAP 3.13.0
 * https://gsap.com
 *
 * @license Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var dn = {
    autoSleep: 120,
    force3D: "auto",
    nullTargetWarn: 1,
    units: { lineHeight: "" },
  },
  qr = { duration: 0.5, overwrite: !1, delay: 0 },
  Ec,
  Nt,
  ht,
  Mn = 1e8,
  st = 1 / Mn,
  Bl = Math.PI * 2,
  qy = Bl / 4,
  jy = 0,
  Dd = Math.sqrt,
  Ky = Math.cos,
  Zy = Math.sin,
  It = function (e) {
    return typeof e == "string";
  },
  xt = function (e) {
    return typeof e == "function";
  },
  hi = function (e) {
    return typeof e == "number";
  },
  bc = function (e) {
    return typeof e > "u";
  },
  Wn = function (e) {
    return typeof e == "object";
  },
  Qt = function (e) {
    return e !== !1;
  },
  Ac = function () {
    return typeof window < "u";
  },
  xa = function (e) {
    return xt(e) || It(e);
  },
  Ld =
    (typeof ArrayBuffer == "function" && ArrayBuffer.isView) || function () {},
  Ht = Array.isArray,
  kl = /(?:-?\.?\d|\.)+/gi,
  Id = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
  wr = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
  ko = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
  Ud = /[+-]=-?[.\d]+/,
  Nd = /[^,'"\[\]\s]+/gi,
  $y = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
  mt,
  On,
  zl,
  wc,
  pn = {},
  Na = {},
  Od,
  Fd = function (e) {
    return (Na = jr(e, pn)) && rn;
  },
  Rc = function (e, t) {
    return console.warn(
      "Invalid property",
      e,
      "set to",
      t,
      "Missing plugin? gsap.registerPlugin()",
    );
  },
  Ls = function (e, t) {
    return !t && console.warn(e);
  },
  Bd = function (e, t) {
    return (e && (pn[e] = t) && Na && (Na[e] = t)) || pn;
  },
  Is = function () {
    return 0;
  },
  Jy = { suppressEvents: !0, isStart: !0, kill: !1 },
  wa = { suppressEvents: !0, kill: !1 },
  Qy = { suppressEvents: !0 },
  Cc = {},
  wi = [],
  Hl = {},
  kd,
  cn = {},
  zo = {},
  Eu = 30,
  Ra = [],
  Pc = "",
  Dc = function (e) {
    var t = e[0],
      n,
      i;
    if ((Wn(t) || xt(t) || (e = [e]), !(n = (t._gsap || {}).harness))) {
      for (i = Ra.length; i-- && !Ra[i].targetTest(t););
      n = Ra[i];
    }
    for (i = e.length; i--;)
      (e[i] && (e[i]._gsap || (e[i]._gsap = new hf(e[i], n)))) ||
        e.splice(i, 1);
    return e;
  },
  Qi = function (e) {
    return e._gsap || Dc(Sn(e))[0]._gsap;
  },
  zd = function (e, t, n) {
    return (n = e[t]) && xt(n)
      ? e[t]()
      : (bc(n) && e.getAttribute && e.getAttribute(t)) || n;
  },
  en = function (e, t) {
    return (e = e.split(",")).forEach(t) || e;
  },
  Mt = function (e) {
    return Math.round(e * 1e5) / 1e5 || 0;
  },
  bt = function (e) {
    return Math.round(e * 1e7) / 1e7 || 0;
  },
  Ur = function (e, t) {
    var n = t.charAt(0),
      i = parseFloat(t.substr(2));
    return (
      (e = parseFloat(e)),
      n === "+" ? e + i : n === "-" ? e - i : n === "*" ? e * i : e / i
    );
  },
  eM = function (e, t) {
    for (var n = t.length, i = 0; e.indexOf(t[i]) < 0 && ++i < n;);
    return i < n;
  },
  Oa = function () {
    var e = wi.length,
      t = wi.slice(0),
      n,
      i;
    for (Hl = {}, wi.length = 0, n = 0; n < e; n++)
      ((i = t[n]),
        i && i._lazy && (i.render(i._lazy[0], i._lazy[1], !0)._lazy = 0));
  },
  Lc = function (e) {
    return !!(e._initted || e._startAt || e.add);
  },
  Hd = function (e, t, n, i) {
    (wi.length && !Nt && Oa(),
      e.render(t, n, !!(Nt && t < 0 && Lc(e))),
      wi.length && !Nt && Oa());
  },
  Vd = function (e) {
    var t = parseFloat(e);
    return (t || t === 0) && (e + "").match(Nd).length < 2
      ? t
      : It(e)
        ? e.trim()
        : e;
  },
  Gd = function (e) {
    return e;
  },
  mn = function (e, t) {
    for (var n in t) n in e || (e[n] = t[n]);
    return e;
  },
  tM = function (e) {
    return function (t, n) {
      for (var i in n)
        i in t || (i === "duration" && e) || i === "ease" || (t[i] = n[i]);
    };
  },
  jr = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  bu = function s(e, t) {
    for (var n in t)
      n !== "__proto__" &&
        n !== "constructor" &&
        n !== "prototype" &&
        (e[n] = Wn(t[n]) ? s(e[n] || (e[n] = {}), t[n]) : t[n]);
    return e;
  },
  Fa = function (e, t) {
    var n = {},
      i;
    for (i in e) i in t || (n[i] = e[i]);
    return n;
  },
  Ss = function (e) {
    var t = e.parent || mt,
      n = e.keyframes ? tM(Ht(e.keyframes)) : mn;
    if (Qt(e.inherit))
      for (; t;) (n(e, t.vars.defaults), (t = t.parent || t._dp));
    return e;
  },
  nM = function (e, t) {
    for (var n = e.length, i = n === t.length; i && n-- && e[n] === t[n];);
    return n < 0;
  },
  Wd = function (e, t, n, i, r) {
    var a = e[i],
      o;
    if (r) for (o = t[r]; a && a[r] > o;) a = a._prev;
    return (
      a ? ((t._next = a._next), (a._next = t)) : ((t._next = e[n]), (e[n] = t)),
      t._next ? (t._next._prev = t) : (e[i] = t),
      (t._prev = a),
      (t.parent = t._dp = e),
      t
    );
  },
  qa = function (e, t, n, i) {
    (n === void 0 && (n = "_first"), i === void 0 && (i = "_last"));
    var r = t._prev,
      a = t._next;
    (r ? (r._next = a) : e[n] === t && (e[n] = a),
      a ? (a._prev = r) : e[i] === t && (e[i] = r),
      (t._next = t._prev = t.parent = null));
  },
  Pi = function (e, t) {
    (e.parent &&
      (!t || e.parent.autoRemoveChildren) &&
      e.parent.remove &&
      e.parent.remove(e),
      (e._act = 0));
  },
  er = function (e, t) {
    if (e && (!t || t._end > e._dur || t._start < 0))
      for (var n = e; n;) ((n._dirty = 1), (n = n.parent));
    return e;
  },
  iM = function (e) {
    for (var t = e.parent; t && t.parent;)
      ((t._dirty = 1), t.totalDuration(), (t = t.parent));
    return e;
  },
  Vl = function (e, t, n, i) {
    return (
      e._startAt &&
      (Nt
        ? e._startAt.revert(wa)
        : (e.vars.immediateRender && !e.vars.autoRevert) ||
          e._startAt.render(t, !0, i))
    );
  },
  rM = function s(e) {
    return !e || (e._ts && s(e.parent));
  },
  Au = function (e) {
    return e._repeat ? Kr(e._tTime, (e = e.duration() + e._rDelay)) * e : 0;
  },
  Kr = function (e, t) {
    var n = Math.floor((e = bt(e / t)));
    return e && n === e ? n - 1 : n;
  },
  Ba = function (e, t) {
    return (
      (e - t._start) * t._ts +
      (t._ts >= 0 ? 0 : t._dirty ? t.totalDuration() : t._tDur)
    );
  },
  ja = function (e) {
    return (e._end = bt(
      e._start + (e._tDur / Math.abs(e._ts || e._rts || st) || 0),
    ));
  },
  Ka = function (e, t) {
    var n = e._dp;
    return (
      n &&
        n.smoothChildTiming &&
        e._ts &&
        ((e._start = bt(
          n._time -
            (e._ts > 0
              ? t / e._ts
              : ((e._dirty ? e.totalDuration() : e._tDur) - t) / -e._ts),
        )),
        ja(e),
        n._dirty || er(n, e)),
      e
    );
  },
  Xd = function (e, t) {
    var n;
    if (
      ((t._time ||
        (!t._dur && t._initted) ||
        (t._start < e._time && (t._dur || !t.add))) &&
        ((n = Ba(e.rawTime(), t)),
        (!t._dur || Hs(0, t.totalDuration(), n) - t._tTime > st) &&
          t.render(n, !0)),
      er(e, t)._dp && e._initted && e._time >= e._dur && e._ts)
    ) {
      if (e._dur < e.duration())
        for (n = e; n._dp;)
          (n.rawTime() >= 0 && n.totalTime(n._tTime), (n = n._dp));
      e._zTime = -st;
    }
  },
  Bn = function (e, t, n, i) {
    return (
      t.parent && Pi(t),
      (t._start = bt(
        (hi(n) ? n : n || e !== mt ? vn(e, n, t) : e._time) + t._delay,
      )),
      (t._end = bt(
        t._start + (t.totalDuration() / Math.abs(t.timeScale()) || 0),
      )),
      Wd(e, t, "_first", "_last", e._sort ? "_start" : 0),
      Gl(t) || (e._recent = t),
      i || Xd(e, t),
      e._ts < 0 && Ka(e, e._tTime),
      e
    );
  },
  Yd = function (e, t) {
    return (
      (pn.ScrollTrigger || Rc("scrollTrigger", t)) &&
      pn.ScrollTrigger.create(t, e)
    );
  },
  qd = function (e, t, n, i, r) {
    if ((Uc(e, t, r), !e._initted)) return 1;
    if (
      !n &&
      e._pt &&
      !Nt &&
      ((e._dur && e.vars.lazy !== !1) || (!e._dur && e.vars.lazy)) &&
      kd !== hn.frame
    )
      return (wi.push(e), (e._lazy = [r, i]), 1);
  },
  sM = function s(e) {
    var t = e.parent;
    return t && t._ts && t._initted && !t._lock && (t.rawTime() < 0 || s(t));
  },
  Gl = function (e) {
    var t = e.data;
    return t === "isFromStart" || t === "isStart";
  },
  aM = function (e, t, n, i) {
    var r = e.ratio,
      a =
        t < 0 ||
        (!t &&
          ((!e._start && sM(e) && !(!e._initted && Gl(e))) ||
            ((e._ts < 0 || e._dp._ts < 0) && !Gl(e))))
          ? 0
          : 1,
      o = e._rDelay,
      l = 0,
      c,
      h,
      u;
    if (
      (o &&
        e._repeat &&
        ((l = Hs(0, e._tDur, t)),
        (h = Kr(l, o)),
        e._yoyo && h & 1 && (a = 1 - a),
        h !== Kr(e._tTime, o) &&
          ((r = 1 - a), e.vars.repeatRefresh && e._initted && e.invalidate())),
      a !== r || Nt || i || e._zTime === st || (!t && e._zTime))
    ) {
      if (!e._initted && qd(e, t, i, n, l)) return;
      for (
        u = e._zTime,
          e._zTime = t || (n ? st : 0),
          n || (n = t && !u),
          e.ratio = a,
          e._from && (a = 1 - a),
          e._time = 0,
          e._tTime = l,
          c = e._pt;
        c;
      )
        (c.r(a, c.d), (c = c._next));
      (t < 0 && Vl(e, t, n, !0),
        e._onUpdate && !n && un(e, "onUpdate"),
        l && e._repeat && !n && e.parent && un(e, "onRepeat"),
        (t >= e._tDur || t < 0) &&
          e.ratio === a &&
          (a && Pi(e, 1),
          !n &&
            !Nt &&
            (un(e, a ? "onComplete" : "onReverseComplete", !0),
            e._prom && e._prom())));
    } else e._zTime || (e._zTime = t);
  },
  oM = function (e, t, n) {
    var i;
    if (n > t)
      for (i = e._first; i && i._start <= n;) {
        if (i.data === "isPause" && i._start > t) return i;
        i = i._next;
      }
    else
      for (i = e._last; i && i._start >= n;) {
        if (i.data === "isPause" && i._start < t) return i;
        i = i._prev;
      }
  },
  Zr = function (e, t, n, i) {
    var r = e._repeat,
      a = bt(t) || 0,
      o = e._tTime / e._tDur;
    return (
      o && !i && (e._time *= a / e._dur),
      (e._dur = a),
      (e._tDur = r ? (r < 0 ? 1e10 : bt(a * (r + 1) + e._rDelay * r)) : a),
      o > 0 && !i && Ka(e, (e._tTime = e._tDur * o)),
      e.parent && ja(e),
      n || er(e.parent, e),
      e
    );
  },
  wu = function (e) {
    return e instanceof Xt ? er(e) : Zr(e, e._dur);
  },
  lM = { _start: 0, endTime: Is, totalDuration: Is },
  vn = function s(e, t, n) {
    var i = e.labels,
      r = e._recent || lM,
      a = e.duration() >= Mn ? r.endTime(!1) : e._dur,
      o,
      l,
      c;
    return It(t) && (isNaN(t) || t in i)
      ? ((l = t.charAt(0)),
        (c = t.substr(-1) === "%"),
        (o = t.indexOf("=")),
        l === "<" || l === ">"
          ? (o >= 0 && (t = t.replace(/=/, "")),
            (l === "<" ? r._start : r.endTime(r._repeat >= 0)) +
              (parseFloat(t.substr(1)) || 0) *
                (c ? (o < 0 ? r : n).totalDuration() / 100 : 1))
          : o < 0
            ? (t in i || (i[t] = a), i[t])
            : ((l = parseFloat(t.charAt(o - 1) + t.substr(o + 1))),
              c && n && (l = (l / 100) * (Ht(n) ? n[0] : n).totalDuration()),
              o > 1 ? s(e, t.substr(0, o - 1), n) + l : a + l))
      : t == null
        ? a
        : +t;
  },
  Ts = function (e, t, n) {
    var i = hi(t[1]),
      r = (i ? 2 : 1) + (e < 2 ? 0 : 1),
      a = t[r],
      o,
      l;
    if ((i && (a.duration = t[1]), (a.parent = n), e)) {
      for (o = a, l = n; l && !("immediateRender" in o);)
        ((o = l.vars.defaults || {}), (l = Qt(l.vars.inherit) && l.parent));
      ((a.immediateRender = Qt(o.immediateRender)),
        e < 2 ? (a.runBackwards = 1) : (a.startAt = t[r - 1]));
    }
    return new Et(t[0], a, t[r + 1]);
  },
  Ui = function (e, t) {
    return e || e === 0 ? t(e) : t;
  },
  Hs = function (e, t, n) {
    return n < e ? e : n > t ? t : n;
  },
  Bt = function (e, t) {
    return !It(e) || !(t = $y.exec(e)) ? "" : t[1];
  },
  cM = function (e, t, n) {
    return Ui(n, function (i) {
      return Hs(e, t, i);
    });
  },
  Wl = [].slice,
  jd = function (e, t) {
    return (
      e &&
      Wn(e) &&
      "length" in e &&
      ((!t && !e.length) || (e.length - 1 in e && Wn(e[0]))) &&
      !e.nodeType &&
      e !== On
    );
  },
  hM = function (e, t, n) {
    return (
      n === void 0 && (n = []),
      e.forEach(function (i) {
        var r;
        return (It(i) && !t) || jd(i, 1)
          ? (r = n).push.apply(r, Sn(i))
          : n.push(i);
      }) || n
    );
  },
  Sn = function (e, t, n) {
    return ht && !t && ht.selector
      ? ht.selector(e)
      : It(e) && !n && (zl || !$r())
        ? Wl.call((t || wc).querySelectorAll(e), 0)
        : Ht(e)
          ? hM(e, n)
          : jd(e)
            ? Wl.call(e, 0)
            : e
              ? [e]
              : [];
  },
  Xl = function (e) {
    return (
      (e = Sn(e)[0] || Ls("Invalid scope") || {}),
      function (t) {
        var n = e.current || e.nativeElement || e;
        return Sn(
          t,
          n.querySelectorAll
            ? n
            : n === e
              ? Ls("Invalid scope") || wc.createElement("div")
              : e,
        );
      }
    );
  },
  Kd = function (e) {
    return e.sort(function () {
      return 0.5 - Math.random();
    });
  },
  Zd = function (e) {
    if (xt(e)) return e;
    var t = Wn(e) ? e : { each: e },
      n = tr(t.ease),
      i = t.from || 0,
      r = parseFloat(t.base) || 0,
      a = {},
      o = i > 0 && i < 1,
      l = isNaN(i) || o,
      c = t.axis,
      h = i,
      u = i;
    return (
      It(i)
        ? (h = u = { center: 0.5, edges: 0.5, end: 1 }[i] || 0)
        : !o && l && ((h = i[0]), (u = i[1])),
      function (d, f, g) {
        var _ = (g || t).length,
          m = a[_],
          p,
          S,
          M,
          v,
          b,
          A,
          w,
          C,
          x;
        if (!m) {
          if (((x = t.grid === "auto" ? 0 : (t.grid || [1, Mn])[1]), !x)) {
            for (
              w = -Mn;
              w < (w = g[x++].getBoundingClientRect().left) && x < _;
            );
            x < _ && x--;
          }
          for (
            m = a[_] = [],
              p = l ? Math.min(x, _) * h - 0.5 : i % x,
              S = x === Mn ? 0 : l ? (_ * u) / x - 0.5 : (i / x) | 0,
              w = 0,
              C = Mn,
              A = 0;
            A < _;
            A++
          )
            ((M = (A % x) - p),
              (v = S - ((A / x) | 0)),
              (m[A] = b = c ? Math.abs(c === "y" ? v : M) : Dd(M * M + v * v)),
              b > w && (w = b),
              b < C && (C = b));
          (i === "random" && Kd(m),
            (m.max = w - C),
            (m.min = C),
            (m.v = _ =
              (parseFloat(t.amount) ||
                parseFloat(t.each) *
                  (x > _
                    ? _ - 1
                    : c
                      ? c === "y"
                        ? _ / x
                        : x
                      : Math.max(x, _ / x)) ||
                0) * (i === "edges" ? -1 : 1)),
            (m.b = _ < 0 ? r - _ : r),
            (m.u = Bt(t.amount || t.each) || 0),
            (n = n && _ < 0 ? of(n) : n));
        }
        return (
          (_ = (m[d] - m.min) / m.max || 0),
          bt(m.b + (n ? n(_) : _) * m.v) + m.u
        );
      }
    );
  },
  Yl = function (e) {
    var t = Math.pow(10, ((e + "").split(".")[1] || "").length);
    return function (n) {
      var i = bt(Math.round(parseFloat(n) / e) * e * t);
      return (i - (i % 1)) / t + (hi(n) ? 0 : Bt(n));
    };
  },
  $d = function (e, t) {
    var n = Ht(e),
      i,
      r;
    return (
      !n &&
        Wn(e) &&
        ((i = n = e.radius || Mn),
        e.values
          ? ((e = Sn(e.values)), (r = !hi(e[0])) && (i *= i))
          : (e = Yl(e.increment))),
      Ui(
        t,
        n
          ? xt(e)
            ? function (a) {
                return ((r = e(a)), Math.abs(r - a) <= i ? r : a);
              }
            : function (a) {
                for (
                  var o = parseFloat(r ? a.x : a),
                    l = parseFloat(r ? a.y : 0),
                    c = Mn,
                    h = 0,
                    u = e.length,
                    d,
                    f;
                  u--;
                )
                  (r
                    ? ((d = e[u].x - o), (f = e[u].y - l), (d = d * d + f * f))
                    : (d = Math.abs(e[u] - o)),
                    d < c && ((c = d), (h = u)));
                return (
                  (h = !i || c <= i ? e[h] : a),
                  r || h === a || hi(a) ? h : h + Bt(a)
                );
              }
          : Yl(e),
      )
    );
  },
  Jd = function (e, t, n, i) {
    return Ui(Ht(e) ? !t : n === !0 ? !!(n = 0) : !i, function () {
      return Ht(e)
        ? e[~~(Math.random() * e.length)]
        : (n = n || 1e-5) &&
            (i = n < 1 ? Math.pow(10, (n + "").length - 2) : 1) &&
            Math.floor(
              Math.round((e - n / 2 + Math.random() * (t - e + n * 0.99)) / n) *
                n *
                i,
            ) / i;
    });
  },
  uM = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n];
    return function (i) {
      return t.reduce(function (r, a) {
        return a(r);
      }, i);
    };
  },
  dM = function (e, t) {
    return function (n) {
      return e(parseFloat(n)) + (t || Bt(n));
    };
  },
  fM = function (e, t, n) {
    return ef(e, t, 0, 1, n);
  },
  Qd = function (e, t, n) {
    return Ui(n, function (i) {
      return e[~~t(i)];
    });
  },
  pM = function s(e, t, n) {
    var i = t - e;
    return Ht(e)
      ? Qd(e, s(0, e.length), t)
      : Ui(n, function (r) {
          return ((i + ((r - e) % i)) % i) + e;
        });
  },
  mM = function s(e, t, n) {
    var i = t - e,
      r = i * 2;
    return Ht(e)
      ? Qd(e, s(0, e.length - 1), t)
      : Ui(n, function (a) {
          return ((a = (r + ((a - e) % r)) % r || 0), e + (a > i ? r - a : a));
        });
  },
  Us = function (e) {
    for (var t = 0, n = "", i, r, a, o; ~(i = e.indexOf("random(", t));)
      ((a = e.indexOf(")", i)),
        (o = e.charAt(i + 7) === "["),
        (r = e.substr(i + 7, a - i - 7).match(o ? Nd : kl)),
        (n +=
          e.substr(t, i - t) + Jd(o ? r : +r[0], o ? 0 : +r[1], +r[2] || 1e-5)),
        (t = a + 1));
    return n + e.substr(t, e.length - t);
  },
  ef = function (e, t, n, i, r) {
    var a = t - e,
      o = i - n;
    return Ui(r, function (l) {
      return n + (((l - e) / a) * o || 0);
    });
  },
  _M = function s(e, t, n, i) {
    var r = isNaN(e + t)
      ? 0
      : function (f) {
          return (1 - f) * e + f * t;
        };
    if (!r) {
      var a = It(e),
        o = {},
        l,
        c,
        h,
        u,
        d;
      if ((n === !0 && (i = 1) && (n = null), a))
        ((e = { p: e }), (t = { p: t }));
      else if (Ht(e) && !Ht(t)) {
        for (h = [], u = e.length, d = u - 2, c = 1; c < u; c++)
          h.push(s(e[c - 1], e[c]));
        (u--,
          (r = function (g) {
            g *= u;
            var _ = Math.min(d, ~~g);
            return h[_](g - _);
          }),
          (n = t));
      } else i || (e = jr(Ht(e) ? [] : {}, e));
      if (!h) {
        for (l in t) Ic.call(o, e, l, "get", t[l]);
        r = function (g) {
          return Fc(g, o) || (a ? e.p : e);
        };
      }
    }
    return Ui(n, r);
  },
  Ru = function (e, t, n) {
    var i = e.labels,
      r = Mn,
      a,
      o,
      l;
    for (a in i)
      ((o = i[a] - t),
        o < 0 == !!n && o && r > (o = Math.abs(o)) && ((l = a), (r = o)));
    return l;
  },
  un = function (e, t, n) {
    var i = e.vars,
      r = i[t],
      a = ht,
      o = e._ctx,
      l,
      c,
      h;
    if (r)
      return (
        (l = i[t + "Params"]),
        (c = i.callbackScope || e),
        n && wi.length && Oa(),
        o && (ht = o),
        (h = l ? r.apply(c, l) : r.call(c)),
        (ht = a),
        h
      );
  },
  gs = function (e) {
    return (
      Pi(e),
      e.scrollTrigger && e.scrollTrigger.kill(!!Nt),
      e.progress() < 1 && un(e, "onInterrupt"),
      e
    );
  },
  Rr,
  tf = [],
  nf = function (e) {
    if (e)
      if (((e = (!e.name && e.default) || e), Ac() || e.headless)) {
        var t = e.name,
          n = xt(e),
          i =
            t && !n && e.init
              ? function () {
                  this._props = [];
                }
              : e,
          r = {
            init: Is,
            render: Fc,
            add: Ic,
            kill: LM,
            modifier: DM,
            rawVars: 0,
          },
          a = {
            targetTest: 0,
            get: 0,
            getSetter: Oc,
            aliases: {},
            register: 0,
          };
        if (($r(), e !== i)) {
          if (cn[t]) return;
          (mn(i, mn(Fa(e, r), a)),
            jr(i.prototype, jr(r, Fa(e, a))),
            (cn[(i.prop = t)] = i),
            e.targetTest && (Ra.push(i), (Cc[t] = 1)),
            (t =
              (t === "css" ? "CSS" : t.charAt(0).toUpperCase() + t.substr(1)) +
              "Plugin"));
        }
        (Bd(t, i), e.register && e.register(rn, i, tn));
      } else tf.push(e);
  },
  rt = 255,
  xs = {
    aqua: [0, rt, rt],
    lime: [0, rt, 0],
    silver: [192, 192, 192],
    black: [0, 0, 0],
    maroon: [128, 0, 0],
    teal: [0, 128, 128],
    blue: [0, 0, rt],
    navy: [0, 0, 128],
    white: [rt, rt, rt],
    olive: [128, 128, 0],
    yellow: [rt, rt, 0],
    orange: [rt, 165, 0],
    gray: [128, 128, 128],
    purple: [128, 0, 128],
    green: [0, 128, 0],
    red: [rt, 0, 0],
    pink: [rt, 192, 203],
    cyan: [0, rt, rt],
    transparent: [rt, rt, rt, 0],
  },
  Ho = function (e, t, n) {
    return (
      (e += e < 0 ? 1 : e > 1 ? -1 : 0),
      ((e * 6 < 1
        ? t + (n - t) * e * 6
        : e < 0.5
          ? n
          : e * 3 < 2
            ? t + (n - t) * (2 / 3 - e) * 6
            : t) *
        rt +
        0.5) |
        0
    );
  },
  rf = function (e, t, n) {
    var i = e ? (hi(e) ? [e >> 16, (e >> 8) & rt, e & rt] : 0) : xs.black,
      r,
      a,
      o,
      l,
      c,
      h,
      u,
      d,
      f,
      g;
    if (!i) {
      if ((e.substr(-1) === "," && (e = e.substr(0, e.length - 1)), xs[e]))
        i = xs[e];
      else if (e.charAt(0) === "#") {
        if (
          (e.length < 6 &&
            ((r = e.charAt(1)),
            (a = e.charAt(2)),
            (o = e.charAt(3)),
            (e =
              "#" +
              r +
              r +
              a +
              a +
              o +
              o +
              (e.length === 5 ? e.charAt(4) + e.charAt(4) : ""))),
          e.length === 9)
        )
          return (
            (i = parseInt(e.substr(1, 6), 16)),
            [i >> 16, (i >> 8) & rt, i & rt, parseInt(e.substr(7), 16) / 255]
          );
        ((e = parseInt(e.substr(1), 16)),
          (i = [e >> 16, (e >> 8) & rt, e & rt]));
      } else if (e.substr(0, 3) === "hsl") {
        if (((i = g = e.match(kl)), !t))
          ((l = (+i[0] % 360) / 360),
            (c = +i[1] / 100),
            (h = +i[2] / 100),
            (a = h <= 0.5 ? h * (c + 1) : h + c - h * c),
            (r = h * 2 - a),
            i.length > 3 && (i[3] *= 1),
            (i[0] = Ho(l + 1 / 3, r, a)),
            (i[1] = Ho(l, r, a)),
            (i[2] = Ho(l - 1 / 3, r, a)));
        else if (~e.indexOf("="))
          return ((i = e.match(Id)), n && i.length < 4 && (i[3] = 1), i);
      } else i = e.match(kl) || xs.transparent;
      i = i.map(Number);
    }
    return (
      t &&
        !g &&
        ((r = i[0] / rt),
        (a = i[1] / rt),
        (o = i[2] / rt),
        (u = Math.max(r, a, o)),
        (d = Math.min(r, a, o)),
        (h = (u + d) / 2),
        u === d
          ? (l = c = 0)
          : ((f = u - d),
            (c = h > 0.5 ? f / (2 - u - d) : f / (u + d)),
            (l =
              u === r
                ? (a - o) / f + (a < o ? 6 : 0)
                : u === a
                  ? (o - r) / f + 2
                  : (r - a) / f + 4),
            (l *= 60)),
        (i[0] = ~~(l + 0.5)),
        (i[1] = ~~(c * 100 + 0.5)),
        (i[2] = ~~(h * 100 + 0.5))),
      n && i.length < 4 && (i[3] = 1),
      i
    );
  },
  sf = function (e) {
    var t = [],
      n = [],
      i = -1;
    return (
      e.split(Ri).forEach(function (r) {
        var a = r.match(wr) || [];
        (t.push.apply(t, a), n.push((i += a.length + 1)));
      }),
      (t.c = n),
      t
    );
  },
  Cu = function (e, t, n) {
    var i = "",
      r = (e + i).match(Ri),
      a = t ? "hsla(" : "rgba(",
      o = 0,
      l,
      c,
      h,
      u;
    if (!r) return e;
    if (
      ((r = r.map(function (d) {
        return (
          (d = rf(d, t, 1)) &&
          a +
            (t ? d[0] + "," + d[1] + "%," + d[2] + "%," + d[3] : d.join(",")) +
            ")"
        );
      })),
      n && ((h = sf(e)), (l = n.c), l.join(i) !== h.c.join(i)))
    )
      for (c = e.replace(Ri, "1").split(wr), u = c.length - 1; o < u; o++)
        i +=
          c[o] +
          (~l.indexOf(o)
            ? r.shift() || a + "0,0,0,0)"
            : (h.length ? h : r.length ? r : n).shift());
    if (!c)
      for (c = e.split(Ri), u = c.length - 1; o < u; o++) i += c[o] + r[o];
    return i + c[u];
  },
  Ri = (function () {
    var s =
        "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",
      e;
    for (e in xs) s += "|" + e + "\\b";
    return new RegExp(s + ")", "gi");
  })(),
  gM = /hsl[a]?\(/,
  af = function (e) {
    var t = e.join(" "),
      n;
    if (((Ri.lastIndex = 0), Ri.test(t)))
      return (
        (n = gM.test(t)),
        (e[1] = Cu(e[1], n)),
        (e[0] = Cu(e[0], n, sf(e[1]))),
        !0
      );
  },
  Ns,
  hn = (function () {
    var s = Date.now,
      e = 500,
      t = 33,
      n = s(),
      i = n,
      r = 1e3 / 240,
      a = r,
      o = [],
      l,
      c,
      h,
      u,
      d,
      f,
      g = function _(m) {
        var p = s() - i,
          S = m === !0,
          M,
          v,
          b,
          A;
        if (
          ((p > e || p < 0) && (n += p - t),
          (i += p),
          (b = i - n),
          (M = b - a),
          (M > 0 || S) &&
            ((A = ++u.frame),
            (d = b - u.time * 1e3),
            (u.time = b = b / 1e3),
            (a += M + (M >= r ? 4 : r - M)),
            (v = 1)),
          S || (l = c(_)),
          v)
        )
          for (f = 0; f < o.length; f++) o[f](b, d, A, m);
      };
    return (
      (u = {
        time: 0,
        frame: 0,
        tick: function () {
          g(!0);
        },
        deltaRatio: function (m) {
          return d / (1e3 / (m || 60));
        },
        wake: function () {
          Od &&
            (!zl &&
              Ac() &&
              ((On = zl = window),
              (wc = On.document || {}),
              (pn.gsap = rn),
              (On.gsapVersions || (On.gsapVersions = [])).push(rn.version),
              Fd(Na || On.GreenSockGlobals || (!On.gsap && On) || {}),
              tf.forEach(nf)),
            (h = typeof requestAnimationFrame < "u" && requestAnimationFrame),
            l && u.sleep(),
            (c =
              h ||
              function (m) {
                return setTimeout(m, (a - u.time * 1e3 + 1) | 0);
              }),
            (Ns = 1),
            g(2));
        },
        sleep: function () {
          ((h ? cancelAnimationFrame : clearTimeout)(l), (Ns = 0), (c = Is));
        },
        lagSmoothing: function (m, p) {
          ((e = m || 1 / 0), (t = Math.min(p || 33, e)));
        },
        fps: function (m) {
          ((r = 1e3 / (m || 240)), (a = u.time * 1e3 + r));
        },
        add: function (m, p, S) {
          var M = p
            ? function (v, b, A, w) {
                (m(v, b, A, w), u.remove(M));
              }
            : m;
          return (u.remove(m), o[S ? "unshift" : "push"](M), $r(), M);
        },
        remove: function (m, p) {
          ~(p = o.indexOf(m)) && o.splice(p, 1) && f >= p && f--;
        },
        _listeners: o,
      }),
      u
    );
  })(),
  $r = function () {
    return !Ns && hn.wake();
  },
  Xe = {},
  xM = /^[\d.\-M][\d.\-,\s]/,
  vM = /["']/g,
  yM = function (e) {
    for (
      var t = {},
        n = e.substr(1, e.length - 3).split(":"),
        i = n[0],
        r = 1,
        a = n.length,
        o,
        l,
        c;
      r < a;
      r++
    )
      ((l = n[r]),
        (o = r !== a - 1 ? l.lastIndexOf(",") : l.length),
        (c = l.substr(0, o)),
        (t[i] = isNaN(c) ? c.replace(vM, "").trim() : +c),
        (i = l.substr(o + 1).trim()));
    return t;
  },
  MM = function (e) {
    var t = e.indexOf("(") + 1,
      n = e.indexOf(")"),
      i = e.indexOf("(", t);
    return e.substring(t, ~i && i < n ? e.indexOf(")", n + 1) : n);
  },
  SM = function (e) {
    var t = (e + "").split("("),
      n = Xe[t[0]];
    return n && t.length > 1 && n.config
      ? n.config.apply(
          null,
          ~e.indexOf("{") ? [yM(t[1])] : MM(e).split(",").map(Vd),
        )
      : Xe._CE && xM.test(e)
        ? Xe._CE("", e)
        : n;
  },
  of = function (e) {
    return function (t) {
      return 1 - e(1 - t);
    };
  },
  lf = function s(e, t) {
    for (var n = e._first, i; n;)
      (n instanceof Xt
        ? s(n, t)
        : n.vars.yoyoEase &&
          (!n._yoyo || !n._repeat) &&
          n._yoyo !== t &&
          (n.timeline
            ? s(n.timeline, t)
            : ((i = n._ease),
              (n._ease = n._yEase),
              (n._yEase = i),
              (n._yoyo = t))),
        (n = n._next));
  },
  tr = function (e, t) {
    return (e && (xt(e) ? e : Xe[e] || SM(e))) || t;
  },
  sr = function (e, t, n, i) {
    (n === void 0 &&
      (n = function (l) {
        return 1 - t(1 - l);
      }),
      i === void 0 &&
        (i = function (l) {
          return l < 0.5 ? t(l * 2) / 2 : 1 - t((1 - l) * 2) / 2;
        }));
    var r = { easeIn: t, easeOut: n, easeInOut: i },
      a;
    return (
      en(e, function (o) {
        ((Xe[o] = pn[o] = r), (Xe[(a = o.toLowerCase())] = n));
        for (var l in r)
          Xe[
            a + (l === "easeIn" ? ".in" : l === "easeOut" ? ".out" : ".inOut")
          ] = Xe[o + "." + l] = r[l];
      }),
      r
    );
  },
  cf = function (e) {
    return function (t) {
      return t < 0.5 ? (1 - e(1 - t * 2)) / 2 : 0.5 + e((t - 0.5) * 2) / 2;
    };
  },
  Vo = function s(e, t, n) {
    var i = t >= 1 ? t : 1,
      r = (n || (e ? 0.3 : 0.45)) / (t < 1 ? t : 1),
      a = (r / Bl) * (Math.asin(1 / i) || 0),
      o = function (h) {
        return h === 1 ? 1 : i * Math.pow(2, -10 * h) * Zy((h - a) * r) + 1;
      },
      l =
        e === "out"
          ? o
          : e === "in"
            ? function (c) {
                return 1 - o(1 - c);
              }
            : cf(o);
    return (
      (r = Bl / r),
      (l.config = function (c, h) {
        return s(e, c, h);
      }),
      l
    );
  },
  Go = function s(e, t) {
    t === void 0 && (t = 1.70158);
    var n = function (a) {
        return a ? --a * a * ((t + 1) * a + t) + 1 : 0;
      },
      i =
        e === "out"
          ? n
          : e === "in"
            ? function (r) {
                return 1 - n(1 - r);
              }
            : cf(n);
    return (
      (i.config = function (r) {
        return s(e, r);
      }),
      i
    );
  };
en("Linear,Quad,Cubic,Quart,Quint,Strong", function (s, e) {
  var t = e < 5 ? e + 1 : e;
  sr(
    s + ",Power" + (t - 1),
    e
      ? function (n) {
          return Math.pow(n, t);
        }
      : function (n) {
          return n;
        },
    function (n) {
      return 1 - Math.pow(1 - n, t);
    },
    function (n) {
      return n < 0.5
        ? Math.pow(n * 2, t) / 2
        : 1 - Math.pow((1 - n) * 2, t) / 2;
    },
  );
});
Xe.Linear.easeNone = Xe.none = Xe.Linear.easeIn;
sr("Elastic", Vo("in"), Vo("out"), Vo());
(function (s, e) {
  var t = 1 / e,
    n = 2 * t,
    i = 2.5 * t,
    r = function (o) {
      return o < t
        ? s * o * o
        : o < n
          ? s * Math.pow(o - 1.5 / e, 2) + 0.75
          : o < i
            ? s * (o -= 2.25 / e) * o + 0.9375
            : s * Math.pow(o - 2.625 / e, 2) + 0.984375;
    };
  sr(
    "Bounce",
    function (a) {
      return 1 - r(1 - a);
    },
    r,
  );
})(7.5625, 2.75);
sr("Expo", function (s) {
  return Math.pow(2, 10 * (s - 1)) * s + s * s * s * s * s * s * (1 - s);
});
sr("Circ", function (s) {
  return -(Dd(1 - s * s) - 1);
});
sr("Sine", function (s) {
  return s === 1 ? 1 : -Ky(s * qy) + 1;
});
sr("Back", Go("in"), Go("out"), Go());
Xe.SteppedEase =
  Xe.steps =
  pn.SteppedEase =
    {
      config: function (e, t) {
        e === void 0 && (e = 1);
        var n = 1 / e,
          i = e + (t ? 0 : 1),
          r = t ? 1 : 0,
          a = 1 - st;
        return function (o) {
          return (((i * Hs(0, a, o)) | 0) + r) * n;
        };
      },
    };
qr.ease = Xe["quad.out"];
en(
  "onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",
  function (s) {
    return (Pc += s + "," + s + "Params,");
  },
);
var hf = function (e, t) {
    ((this.id = jy++),
      (e._gsap = this),
      (this.target = e),
      (this.harness = t),
      (this.get = t ? t.get : zd),
      (this.set = t ? t.getSetter : Oc));
  },
  Os = (function () {
    function s(t) {
      ((this.vars = t),
        (this._delay = +t.delay || 0),
        (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) &&
          ((this._rDelay = t.repeatDelay || 0),
          (this._yoyo = !!t.yoyo || !!t.yoyoEase)),
        (this._ts = 1),
        Zr(this, +t.duration, 1, 1),
        (this.data = t.data),
        ht && ((this._ctx = ht), ht.data.push(this)),
        Ns || hn.wake());
    }
    var e = s.prototype;
    return (
      (e.delay = function (n) {
        return n || n === 0
          ? (this.parent &&
              this.parent.smoothChildTiming &&
              this.startTime(this._start + n - this._delay),
            (this._delay = n),
            this)
          : this._delay;
      }),
      (e.duration = function (n) {
        return arguments.length
          ? this.totalDuration(
              this._repeat > 0 ? n + (n + this._rDelay) * this._repeat : n,
            )
          : this.totalDuration() && this._dur;
      }),
      (e.totalDuration = function (n) {
        return arguments.length
          ? ((this._dirty = 0),
            Zr(
              this,
              this._repeat < 0
                ? n
                : (n - this._repeat * this._rDelay) / (this._repeat + 1),
            ))
          : this._tDur;
      }),
      (e.totalTime = function (n, i) {
        if (($r(), !arguments.length)) return this._tTime;
        var r = this._dp;
        if (r && r.smoothChildTiming && this._ts) {
          for (Ka(this, n), !r._dp || r.parent || Xd(r, this); r && r.parent;)
            (r.parent._time !==
              r._start +
                (r._ts >= 0
                  ? r._tTime / r._ts
                  : (r.totalDuration() - r._tTime) / -r._ts) &&
              r.totalTime(r._tTime, !0),
              (r = r.parent));
          !this.parent &&
            this._dp.autoRemoveChildren &&
            ((this._ts > 0 && n < this._tDur) ||
              (this._ts < 0 && n > 0) ||
              (!this._tDur && !n)) &&
            Bn(this._dp, this, this._start - this._delay);
        }
        return (
          (this._tTime !== n ||
            (!this._dur && !i) ||
            (this._initted && Math.abs(this._zTime) === st) ||
            (!n && !this._initted && (this.add || this._ptLookup))) &&
            (this._ts || (this._pTime = n), Hd(this, n, i)),
          this
        );
      }),
      (e.time = function (n, i) {
        return arguments.length
          ? this.totalTime(
              Math.min(this.totalDuration(), n + Au(this)) %
                (this._dur + this._rDelay) || (n ? this._dur : 0),
              i,
            )
          : this._time;
      }),
      (e.totalProgress = function (n, i) {
        return arguments.length
          ? this.totalTime(this.totalDuration() * n, i)
          : this.totalDuration()
            ? Math.min(1, this._tTime / this._tDur)
            : this.rawTime() >= 0 && this._initted
              ? 1
              : 0;
      }),
      (e.progress = function (n, i) {
        return arguments.length
          ? this.totalTime(
              this.duration() *
                (this._yoyo && !(this.iteration() & 1) ? 1 - n : n) +
                Au(this),
              i,
            )
          : this.duration()
            ? Math.min(1, this._time / this._dur)
            : this.rawTime() > 0
              ? 1
              : 0;
      }),
      (e.iteration = function (n, i) {
        var r = this.duration() + this._rDelay;
        return arguments.length
          ? this.totalTime(this._time + (n - 1) * r, i)
          : this._repeat
            ? Kr(this._tTime, r) + 1
            : 1;
      }),
      (e.timeScale = function (n, i) {
        if (!arguments.length) return this._rts === -st ? 0 : this._rts;
        if (this._rts === n) return this;
        var r =
          this.parent && this._ts ? Ba(this.parent._time, this) : this._tTime;
        return (
          (this._rts = +n || 0),
          (this._ts = this._ps || n === -st ? 0 : this._rts),
          this.totalTime(
            Hs(-Math.abs(this._delay), this.totalDuration(), r),
            i !== !1,
          ),
          ja(this),
          iM(this)
        );
      }),
      (e.paused = function (n) {
        return arguments.length
          ? (this._ps !== n &&
              ((this._ps = n),
              n
                ? ((this._pTime =
                    this._tTime || Math.max(-this._delay, this.rawTime())),
                  (this._ts = this._act = 0))
                : ($r(),
                  (this._ts = this._rts),
                  this.totalTime(
                    this.parent && !this.parent.smoothChildTiming
                      ? this.rawTime()
                      : this._tTime || this._pTime,
                    this.progress() === 1 &&
                      Math.abs(this._zTime) !== st &&
                      (this._tTime -= st),
                  ))),
            this)
          : this._ps;
      }),
      (e.startTime = function (n) {
        if (arguments.length) {
          this._start = n;
          var i = this.parent || this._dp;
          return (
            i && (i._sort || !this.parent) && Bn(i, this, n - this._delay),
            this
          );
        }
        return this._start;
      }),
      (e.endTime = function (n) {
        return (
          this._start +
          (Qt(n) ? this.totalDuration() : this.duration()) /
            Math.abs(this._ts || 1)
        );
      }),
      (e.rawTime = function (n) {
        var i = this.parent || this._dp;
        return i
          ? n &&
            (!this._ts ||
              (this._repeat && this._time && this.totalProgress() < 1))
            ? this._tTime % (this._dur + this._rDelay)
            : this._ts
              ? Ba(i.rawTime(n), this)
              : this._tTime
          : this._tTime;
      }),
      (e.revert = function (n) {
        n === void 0 && (n = Qy);
        var i = Nt;
        return (
          (Nt = n),
          Lc(this) &&
            (this.timeline && this.timeline.revert(n),
            this.totalTime(-0.01, n.suppressEvents)),
          this.data !== "nested" && n.kill !== !1 && this.kill(),
          (Nt = i),
          this
        );
      }),
      (e.globalTime = function (n) {
        for (var i = this, r = arguments.length ? n : i.rawTime(); i;)
          ((r = i._start + r / (Math.abs(i._ts) || 1)), (i = i._dp));
        return !this.parent && this._sat ? this._sat.globalTime(n) : r;
      }),
      (e.repeat = function (n) {
        return arguments.length
          ? ((this._repeat = n === 1 / 0 ? -2 : n), wu(this))
          : this._repeat === -2
            ? 1 / 0
            : this._repeat;
      }),
      (e.repeatDelay = function (n) {
        if (arguments.length) {
          var i = this._time;
          return ((this._rDelay = n), wu(this), i ? this.time(i) : this);
        }
        return this._rDelay;
      }),
      (e.yoyo = function (n) {
        return arguments.length ? ((this._yoyo = n), this) : this._yoyo;
      }),
      (e.seek = function (n, i) {
        return this.totalTime(vn(this, n), Qt(i));
      }),
      (e.restart = function (n, i) {
        return (
          this.play().totalTime(n ? -this._delay : 0, Qt(i)),
          this._dur || (this._zTime = -st),
          this
        );
      }),
      (e.play = function (n, i) {
        return (n != null && this.seek(n, i), this.reversed(!1).paused(!1));
      }),
      (e.reverse = function (n, i) {
        return (
          n != null && this.seek(n || this.totalDuration(), i),
          this.reversed(!0).paused(!1)
        );
      }),
      (e.pause = function (n, i) {
        return (n != null && this.seek(n, i), this.paused(!0));
      }),
      (e.resume = function () {
        return this.paused(!1);
      }),
      (e.reversed = function (n) {
        return arguments.length
          ? (!!n !== this.reversed() &&
              this.timeScale(-this._rts || (n ? -st : 0)),
            this)
          : this._rts < 0;
      }),
      (e.invalidate = function () {
        return ((this._initted = this._act = 0), (this._zTime = -st), this);
      }),
      (e.isActive = function () {
        var n = this.parent || this._dp,
          i = this._start,
          r;
        return !!(
          !n ||
          (this._ts &&
            this._initted &&
            n.isActive() &&
            (r = n.rawTime(!0)) >= i &&
            r < this.endTime(!0) - st)
        );
      }),
      (e.eventCallback = function (n, i, r) {
        var a = this.vars;
        return arguments.length > 1
          ? (i
              ? ((a[n] = i),
                r && (a[n + "Params"] = r),
                n === "onUpdate" && (this._onUpdate = i))
              : delete a[n],
            this)
          : a[n];
      }),
      (e.then = function (n) {
        var i = this;
        return new Promise(function (r) {
          var a = xt(n) ? n : Gd,
            o = function () {
              var c = i.then;
              ((i.then = null),
                xt(a) && (a = a(i)) && (a.then || a === i) && (i.then = c),
                r(a),
                (i.then = c));
            };
          (i._initted && i.totalProgress() === 1 && i._ts >= 0) ||
          (!i._tTime && i._ts < 0)
            ? o()
            : (i._prom = o);
        });
      }),
      (e.kill = function () {
        gs(this);
      }),
      s
    );
  })();
mn(Os.prototype, {
  _time: 0,
  _start: 0,
  _end: 0,
  _tTime: 0,
  _tDur: 0,
  _dirty: 0,
  _repeat: 0,
  _yoyo: !1,
  parent: null,
  _initted: !1,
  _rDelay: 0,
  _ts: 1,
  _dp: 0,
  ratio: 0,
  _zTime: -st,
  _prom: 0,
  _ps: !1,
  _rts: 1,
});
var Xt = (function (s) {
  Pd(e, s);
  function e(n, i) {
    var r;
    return (
      n === void 0 && (n = {}),
      (r = s.call(this, n) || this),
      (r.labels = {}),
      (r.smoothChildTiming = !!n.smoothChildTiming),
      (r.autoRemoveChildren = !!n.autoRemoveChildren),
      (r._sort = Qt(n.sortChildren)),
      mt && Bn(n.parent || mt, ni(r), i),
      n.reversed && r.reverse(),
      n.paused && r.paused(!0),
      n.scrollTrigger && Yd(ni(r), n.scrollTrigger),
      r
    );
  }
  var t = e.prototype;
  return (
    (t.to = function (i, r, a) {
      return (Ts(0, arguments, this), this);
    }),
    (t.from = function (i, r, a) {
      return (Ts(1, arguments, this), this);
    }),
    (t.fromTo = function (i, r, a, o) {
      return (Ts(2, arguments, this), this);
    }),
    (t.set = function (i, r, a) {
      return (
        (r.duration = 0),
        (r.parent = this),
        Ss(r).repeatDelay || (r.repeat = 0),
        (r.immediateRender = !!r.immediateRender),
        new Et(i, r, vn(this, a), 1),
        this
      );
    }),
    (t.call = function (i, r, a) {
      return Bn(this, Et.delayedCall(0, i, r), a);
    }),
    (t.staggerTo = function (i, r, a, o, l, c, h) {
      return (
        (a.duration = r),
        (a.stagger = a.stagger || o),
        (a.onComplete = c),
        (a.onCompleteParams = h),
        (a.parent = this),
        new Et(i, a, vn(this, l)),
        this
      );
    }),
    (t.staggerFrom = function (i, r, a, o, l, c, h) {
      return (
        (a.runBackwards = 1),
        (Ss(a).immediateRender = Qt(a.immediateRender)),
        this.staggerTo(i, r, a, o, l, c, h)
      );
    }),
    (t.staggerFromTo = function (i, r, a, o, l, c, h, u) {
      return (
        (o.startAt = a),
        (Ss(o).immediateRender = Qt(o.immediateRender)),
        this.staggerTo(i, r, o, l, c, h, u)
      );
    }),
    (t.render = function (i, r, a) {
      var o = this._time,
        l = this._dirty ? this.totalDuration() : this._tDur,
        c = this._dur,
        h = i <= 0 ? 0 : bt(i),
        u = this._zTime < 0 != i < 0 && (this._initted || !c),
        d,
        f,
        g,
        _,
        m,
        p,
        S,
        M,
        v,
        b,
        A,
        w;
      if (
        (this !== mt && h > l && i >= 0 && (h = l), h !== this._tTime || a || u)
      ) {
        if (
          (o !== this._time &&
            c &&
            ((h += this._time - o), (i += this._time - o)),
          (d = h),
          (v = this._start),
          (M = this._ts),
          (p = !M),
          u && (c || (o = this._zTime), (i || !r) && (this._zTime = i)),
          this._repeat)
        ) {
          if (
            ((A = this._yoyo),
            (m = c + this._rDelay),
            this._repeat < -1 && i < 0)
          )
            return this.totalTime(m * 100 + i, r, a);
          if (
            ((d = bt(h % m)),
            h === l
              ? ((_ = this._repeat), (d = c))
              : ((b = bt(h / m)),
                (_ = ~~b),
                _ && _ === b && ((d = c), _--),
                d > c && (d = c)),
            (b = Kr(this._tTime, m)),
            !o &&
              this._tTime &&
              b !== _ &&
              this._tTime - b * m - this._dur <= 0 &&
              (b = _),
            A && _ & 1 && ((d = c - d), (w = 1)),
            _ !== b && !this._lock)
          ) {
            var C = A && b & 1,
              x = C === (A && _ & 1);
            if (
              (_ < b && (C = !C),
              (o = C ? 0 : h % c ? c : h),
              (this._lock = 1),
              (this.render(o || (w ? 0 : bt(_ * m)), r, !c)._lock = 0),
              (this._tTime = h),
              !r && this.parent && un(this, "onRepeat"),
              this.vars.repeatRefresh && !w && (this.invalidate()._lock = 1),
              (o && o !== this._time) ||
                p !== !this._ts ||
                (this.vars.onRepeat && !this.parent && !this._act))
            )
              return this;
            if (
              ((c = this._dur),
              (l = this._tDur),
              x &&
                ((this._lock = 2),
                (o = C ? c : -1e-4),
                this.render(o, !0),
                this.vars.repeatRefresh && !w && this.invalidate()),
              (this._lock = 0),
              !this._ts && !p)
            )
              return this;
            lf(this, w);
          }
        }
        if (
          (this._hasPause &&
            !this._forcing &&
            this._lock < 2 &&
            ((S = oM(this, bt(o), bt(d))), S && (h -= d - (d = S._start))),
          (this._tTime = h),
          (this._time = d),
          (this._act = !M),
          this._initted ||
            ((this._onUpdate = this.vars.onUpdate),
            (this._initted = 1),
            (this._zTime = i),
            (o = 0)),
          !o && h && !r && !b && (un(this, "onStart"), this._tTime !== h))
        )
          return this;
        if (d >= o && i >= 0)
          for (f = this._first; f;) {
            if (
              ((g = f._next), (f._act || d >= f._start) && f._ts && S !== f)
            ) {
              if (f.parent !== this) return this.render(i, r, a);
              if (
                (f.render(
                  f._ts > 0
                    ? (d - f._start) * f._ts
                    : (f._dirty ? f.totalDuration() : f._tDur) +
                        (d - f._start) * f._ts,
                  r,
                  a,
                ),
                d !== this._time || (!this._ts && !p))
              ) {
                ((S = 0), g && (h += this._zTime = -st));
                break;
              }
            }
            f = g;
          }
        else {
          f = this._last;
          for (var E = i < 0 ? i : d; f;) {
            if (((g = f._prev), (f._act || E <= f._end) && f._ts && S !== f)) {
              if (f.parent !== this) return this.render(i, r, a);
              if (
                (f.render(
                  f._ts > 0
                    ? (E - f._start) * f._ts
                    : (f._dirty ? f.totalDuration() : f._tDur) +
                        (E - f._start) * f._ts,
                  r,
                  a || (Nt && Lc(f)),
                ),
                d !== this._time || (!this._ts && !p))
              ) {
                ((S = 0), g && (h += this._zTime = E ? -st : st));
                break;
              }
            }
            f = g;
          }
        }
        if (
          S &&
          !r &&
          (this.pause(),
          (S.render(d >= o ? 0 : -st)._zTime = d >= o ? 1 : -1),
          this._ts)
        )
          return ((this._start = v), ja(this), this.render(i, r, a));
        (this._onUpdate && !r && un(this, "onUpdate", !0),
          ((h === l && this._tTime >= this.totalDuration()) || (!h && o)) &&
            (v === this._start || Math.abs(M) !== Math.abs(this._ts)) &&
            (this._lock ||
              ((i || !c) &&
                ((h === l && this._ts > 0) || (!h && this._ts < 0)) &&
                Pi(this, 1),
              !r &&
                !(i < 0 && !o) &&
                (h || o || !l) &&
                (un(
                  this,
                  h === l && i >= 0 ? "onComplete" : "onReverseComplete",
                  !0,
                ),
                this._prom &&
                  !(h < l && this.timeScale() > 0) &&
                  this._prom()))));
      }
      return this;
    }),
    (t.add = function (i, r) {
      var a = this;
      if ((hi(r) || (r = vn(this, r, i)), !(i instanceof Os))) {
        if (Ht(i))
          return (
            i.forEach(function (o) {
              return a.add(o, r);
            }),
            this
          );
        if (It(i)) return this.addLabel(i, r);
        if (xt(i)) i = Et.delayedCall(0, i);
        else return this;
      }
      return this !== i ? Bn(this, i, r) : this;
    }),
    (t.getChildren = function (i, r, a, o) {
      (i === void 0 && (i = !0),
        r === void 0 && (r = !0),
        a === void 0 && (a = !0),
        o === void 0 && (o = -Mn));
      for (var l = [], c = this._first; c;)
        (c._start >= o &&
          (c instanceof Et
            ? r && l.push(c)
            : (a && l.push(c), i && l.push.apply(l, c.getChildren(!0, r, a)))),
          (c = c._next));
      return l;
    }),
    (t.getById = function (i) {
      for (var r = this.getChildren(1, 1, 1), a = r.length; a--;)
        if (r[a].vars.id === i) return r[a];
    }),
    (t.remove = function (i) {
      return It(i)
        ? this.removeLabel(i)
        : xt(i)
          ? this.killTweensOf(i)
          : (i.parent === this && qa(this, i),
            i === this._recent && (this._recent = this._last),
            er(this));
    }),
    (t.totalTime = function (i, r) {
      return arguments.length
        ? ((this._forcing = 1),
          !this._dp &&
            this._ts &&
            (this._start = bt(
              hn.time -
                (this._ts > 0
                  ? i / this._ts
                  : (this.totalDuration() - i) / -this._ts),
            )),
          s.prototype.totalTime.call(this, i, r),
          (this._forcing = 0),
          this)
        : this._tTime;
    }),
    (t.addLabel = function (i, r) {
      return ((this.labels[i] = vn(this, r)), this);
    }),
    (t.removeLabel = function (i) {
      return (delete this.labels[i], this);
    }),
    (t.addPause = function (i, r, a) {
      var o = Et.delayedCall(0, r || Is, a);
      return (
        (o.data = "isPause"),
        (this._hasPause = 1),
        Bn(this, o, vn(this, i))
      );
    }),
    (t.removePause = function (i) {
      var r = this._first;
      for (i = vn(this, i); r;)
        (r._start === i && r.data === "isPause" && Pi(r), (r = r._next));
    }),
    (t.killTweensOf = function (i, r, a) {
      for (var o = this.getTweensOf(i, a), l = o.length; l--;)
        Ti !== o[l] && o[l].kill(i, r);
      return this;
    }),
    (t.getTweensOf = function (i, r) {
      for (var a = [], o = Sn(i), l = this._first, c = hi(r), h; l;)
        (l instanceof Et
          ? eM(l._targets, o) &&
            (c
              ? (!Ti || (l._initted && l._ts)) &&
                l.globalTime(0) <= r &&
                l.globalTime(l.totalDuration()) > r
              : !r || l.isActive()) &&
            a.push(l)
          : (h = l.getTweensOf(o, r)).length && a.push.apply(a, h),
          (l = l._next));
      return a;
    }),
    (t.tweenTo = function (i, r) {
      r = r || {};
      var a = this,
        o = vn(a, i),
        l = r,
        c = l.startAt,
        h = l.onStart,
        u = l.onStartParams,
        d = l.immediateRender,
        f,
        g = Et.to(
          a,
          mn(
            {
              ease: r.ease || "none",
              lazy: !1,
              immediateRender: !1,
              time: o,
              overwrite: "auto",
              duration:
                r.duration ||
                Math.abs(
                  (o - (c && "time" in c ? c.time : a._time)) / a.timeScale(),
                ) ||
                st,
              onStart: function () {
                if ((a.pause(), !f)) {
                  var m =
                    r.duration ||
                    Math.abs(
                      (o - (c && "time" in c ? c.time : a._time)) /
                        a.timeScale(),
                    );
                  (g._dur !== m && Zr(g, m, 0, 1).render(g._time, !0, !0),
                    (f = 1));
                }
                h && h.apply(g, u || []);
              },
            },
            r,
          ),
        );
      return d ? g.render(0) : g;
    }),
    (t.tweenFromTo = function (i, r, a) {
      return this.tweenTo(r, mn({ startAt: { time: vn(this, i) } }, a));
    }),
    (t.recent = function () {
      return this._recent;
    }),
    (t.nextLabel = function (i) {
      return (i === void 0 && (i = this._time), Ru(this, vn(this, i)));
    }),
    (t.previousLabel = function (i) {
      return (i === void 0 && (i = this._time), Ru(this, vn(this, i), 1));
    }),
    (t.currentLabel = function (i) {
      return arguments.length
        ? this.seek(i, !0)
        : this.previousLabel(this._time + st);
    }),
    (t.shiftChildren = function (i, r, a) {
      a === void 0 && (a = 0);
      for (var o = this._first, l = this.labels, c; o;)
        (o._start >= a && ((o._start += i), (o._end += i)), (o = o._next));
      if (r) for (c in l) l[c] >= a && (l[c] += i);
      return er(this);
    }),
    (t.invalidate = function (i) {
      var r = this._first;
      for (this._lock = 0; r;) (r.invalidate(i), (r = r._next));
      return s.prototype.invalidate.call(this, i);
    }),
    (t.clear = function (i) {
      i === void 0 && (i = !0);
      for (var r = this._first, a; r;) ((a = r._next), this.remove(r), (r = a));
      return (
        this._dp && (this._time = this._tTime = this._pTime = 0),
        i && (this.labels = {}),
        er(this)
      );
    }),
    (t.totalDuration = function (i) {
      var r = 0,
        a = this,
        o = a._last,
        l = Mn,
        c,
        h,
        u;
      if (arguments.length)
        return a.timeScale(
          (a._repeat < 0 ? a.duration() : a.totalDuration()) /
            (a.reversed() ? -i : i),
        );
      if (a._dirty) {
        for (u = a.parent; o;)
          ((c = o._prev),
            o._dirty && o.totalDuration(),
            (h = o._start),
            h > l && a._sort && o._ts && !a._lock
              ? ((a._lock = 1), (Bn(a, o, h - o._delay, 1)._lock = 0))
              : (l = h),
            h < 0 &&
              o._ts &&
              ((r -= h),
              ((!u && !a._dp) || (u && u.smoothChildTiming)) &&
                ((a._start += h / a._ts), (a._time -= h), (a._tTime -= h)),
              a.shiftChildren(-h, !1, -1 / 0),
              (l = 0)),
            o._end > r && o._ts && (r = o._end),
            (o = c));
        (Zr(a, a === mt && a._time > r ? a._time : r, 1, 1), (a._dirty = 0));
      }
      return a._tDur;
    }),
    (e.updateRoot = function (i) {
      if ((mt._ts && (Hd(mt, Ba(i, mt)), (kd = hn.frame)), hn.frame >= Eu)) {
        Eu += dn.autoSleep || 120;
        var r = mt._first;
        if ((!r || !r._ts) && dn.autoSleep && hn._listeners.length < 2) {
          for (; r && !r._ts;) r = r._next;
          r || hn.sleep();
        }
      }
    }),
    e
  );
})(Os);
mn(Xt.prototype, { _lock: 0, _hasPause: 0, _forcing: 0 });
var TM = function (e, t, n, i, r, a, o) {
    var l = new tn(this._pt, e, t, 0, 1, _f, null, r),
      c = 0,
      h = 0,
      u,
      d,
      f,
      g,
      _,
      m,
      p,
      S;
    for (
      l.b = n,
        l.e = i,
        n += "",
        i += "",
        (p = ~i.indexOf("random(")) && (i = Us(i)),
        a && ((S = [n, i]), a(S, e, t), (n = S[0]), (i = S[1])),
        d = n.match(ko) || [];
      (u = ko.exec(i));
    )
      ((g = u[0]),
        (_ = i.substring(c, u.index)),
        f ? (f = (f + 1) % 5) : _.substr(-5) === "rgba(" && (f = 1),
        g !== d[h++] &&
          ((m = parseFloat(d[h - 1]) || 0),
          (l._pt = {
            _next: l._pt,
            p: _ || h === 1 ? _ : ",",
            s: m,
            c: g.charAt(1) === "=" ? Ur(m, g) - m : parseFloat(g) - m,
            m: f && f < 4 ? Math.round : 0,
          }),
          (c = ko.lastIndex)));
    return (
      (l.c = c < i.length ? i.substring(c, i.length) : ""),
      (l.fp = o),
      (Ud.test(i) || p) && (l.e = 0),
      (this._pt = l),
      l
    );
  },
  Ic = function (e, t, n, i, r, a, o, l, c, h) {
    xt(i) && (i = i(r || 0, e, a));
    var u = e[t],
      d =
        n !== "get"
          ? n
          : xt(u)
            ? c
              ? e[
                  t.indexOf("set") || !xt(e["get" + t.substr(3)])
                    ? t
                    : "get" + t.substr(3)
                ](c)
              : e[t]()
            : u,
      f = xt(u) ? (c ? RM : pf) : Nc,
      g;
    if (
      (It(i) &&
        (~i.indexOf("random(") && (i = Us(i)),
        i.charAt(1) === "=" &&
          ((g = Ur(d, i) + (Bt(d) || 0)), (g || g === 0) && (i = g))),
      !h || d !== i || ql)
    )
      return !isNaN(d * i) && i !== ""
        ? ((g = new tn(
            this._pt,
            e,
            t,
            +d || 0,
            i - (d || 0),
            typeof u == "boolean" ? PM : mf,
            0,
            f,
          )),
          c && (g.fp = c),
          o && g.modifier(o, this, e),
          (this._pt = g))
        : (!u && !(t in e) && Rc(t, i),
          TM.call(this, e, t, d, i, f, l || dn.stringFilter, c));
  },
  EM = function (e, t, n, i, r) {
    if (
      (xt(e) && (e = Es(e, r, t, n, i)),
      !Wn(e) || (e.style && e.nodeType) || Ht(e) || Ld(e))
    )
      return It(e) ? Es(e, r, t, n, i) : e;
    var a = {},
      o;
    for (o in e) a[o] = Es(e[o], r, t, n, i);
    return a;
  },
  uf = function (e, t, n, i, r, a) {
    var o, l, c, h;
    if (
      cn[e] &&
      (o = new cn[e]()).init(
        r,
        o.rawVars ? t[e] : EM(t[e], i, r, a, n),
        n,
        i,
        a,
      ) !== !1 &&
      ((n._pt = l = new tn(n._pt, r, e, 0, 1, o.render, o, 0, o.priority)),
      n !== Rr)
    )
      for (c = n._ptLookup[n._targets.indexOf(r)], h = o._props.length; h--;)
        c[o._props[h]] = l;
    return o;
  },
  Ti,
  ql,
  Uc = function s(e, t, n) {
    var i = e.vars,
      r = i.ease,
      a = i.startAt,
      o = i.immediateRender,
      l = i.lazy,
      c = i.onUpdate,
      h = i.runBackwards,
      u = i.yoyoEase,
      d = i.keyframes,
      f = i.autoRevert,
      g = e._dur,
      _ = e._startAt,
      m = e._targets,
      p = e.parent,
      S = p && p.data === "nested" ? p.vars.targets : m,
      M = e._overwrite === "auto" && !Ec,
      v = e.timeline,
      b,
      A,
      w,
      C,
      x,
      E,
      P,
      V,
      F,
      z,
      q,
      G,
      K;
    if (
      (v && (!d || !r) && (r = "none"),
      (e._ease = tr(r, qr.ease)),
      (e._yEase = u ? of(tr(u === !0 ? r : u, qr.ease)) : 0),
      u &&
        e._yoyo &&
        !e._repeat &&
        ((u = e._yEase), (e._yEase = e._ease), (e._ease = u)),
      (e._from = !v && !!i.runBackwards),
      !v || (d && !i.stagger))
    ) {
      if (
        ((V = m[0] ? Qi(m[0]).harness : 0),
        (G = V && i[V.prop]),
        (b = Fa(i, Cc)),
        _ &&
          (_._zTime < 0 && _.progress(1),
          t < 0 && h && o && !f ? _.render(-1, !0) : _.revert(h && g ? wa : Jy),
          (_._lazy = 0)),
        a)
      ) {
        if (
          (Pi(
            (e._startAt = Et.set(
              m,
              mn(
                {
                  data: "isStart",
                  overwrite: !1,
                  parent: p,
                  immediateRender: !0,
                  lazy: !_ && Qt(l),
                  startAt: null,
                  delay: 0,
                  onUpdate:
                    c &&
                    function () {
                      return un(e, "onUpdate");
                    },
                  stagger: 0,
                },
                a,
              ),
            )),
          ),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (Nt || (!o && !f)) && e._startAt.revert(wa),
          o && g && t <= 0 && n <= 0)
        ) {
          t && (e._zTime = t);
          return;
        }
      } else if (h && g && !_) {
        if (
          (t && (o = !1),
          (w = mn(
            {
              overwrite: !1,
              data: "isFromStart",
              lazy: o && !_ && Qt(l),
              immediateRender: o,
              stagger: 0,
              parent: p,
            },
            b,
          )),
          G && (w[V.prop] = G),
          Pi((e._startAt = Et.set(m, w))),
          (e._startAt._dp = 0),
          (e._startAt._sat = e),
          t < 0 && (Nt ? e._startAt.revert(wa) : e._startAt.render(-1, !0)),
          (e._zTime = t),
          !o)
        )
          s(e._startAt, st, st);
        else if (!t) return;
      }
      for (
        e._pt = e._ptCache = 0, l = (g && Qt(l)) || (l && !g), A = 0;
        A < m.length;
        A++
      ) {
        if (
          ((x = m[A]),
          (P = x._gsap || Dc(m)[A]._gsap),
          (e._ptLookup[A] = z = {}),
          Hl[P.id] && wi.length && Oa(),
          (q = S === m ? A : S.indexOf(x)),
          V &&
            (F = new V()).init(x, G || b, e, q, S) !== !1 &&
            ((e._pt = C =
              new tn(e._pt, x, F.name, 0, 1, F.render, F, 0, F.priority)),
            F._props.forEach(function (H) {
              z[H] = C;
            }),
            F.priority && (E = 1)),
          !V || G)
        )
          for (w in b)
            cn[w] && (F = uf(w, b, e, q, x, S))
              ? F.priority && (E = 1)
              : (z[w] = C =
                  Ic.call(e, x, w, "get", b[w], q, S, 0, i.stringFilter));
        (e._op && e._op[A] && e.kill(x, e._op[A]),
          M &&
            e._pt &&
            ((Ti = e),
            mt.killTweensOf(x, z, e.globalTime(t)),
            (K = !e.parent),
            (Ti = 0)),
          e._pt && l && (Hl[P.id] = 1));
      }
      (E && gf(e), e._onInit && e._onInit(e));
    }
    ((e._onUpdate = c),
      (e._initted = (!e._op || e._pt) && !K),
      d && t <= 0 && v.render(Mn, !0, !0));
  },
  bM = function (e, t, n, i, r, a, o, l) {
    var c = ((e._pt && e._ptCache) || (e._ptCache = {}))[t],
      h,
      u,
      d,
      f;
    if (!c)
      for (
        c = e._ptCache[t] = [], d = e._ptLookup, f = e._targets.length;
        f--;
      ) {
        if (((h = d[f][t]), h && h.d && h.d._pt))
          for (h = h.d._pt; h && h.p !== t && h.fp !== t;) h = h._next;
        if (!h)
          return (
            (ql = 1),
            (e.vars[t] = "+=0"),
            Uc(e, o),
            (ql = 0),
            l ? Ls(t + " not eligible for reset") : 1
          );
        c.push(h);
      }
    for (f = c.length; f--;)
      ((u = c[f]),
        (h = u._pt || u),
        (h.s = (i || i === 0) && !r ? i : h.s + (i || 0) + a * h.c),
        (h.c = n - h.s),
        u.e && (u.e = Mt(n) + Bt(u.e)),
        u.b && (u.b = h.s + Bt(u.b)));
  },
  AM = function (e, t) {
    var n = e[0] ? Qi(e[0]).harness : 0,
      i = n && n.aliases,
      r,
      a,
      o,
      l;
    if (!i) return t;
    r = jr({}, t);
    for (a in i)
      if (a in r) for (l = i[a].split(","), o = l.length; o--;) r[l[o]] = r[a];
    return r;
  },
  wM = function (e, t, n, i) {
    var r = t.ease || i || "power1.inOut",
      a,
      o;
    if (Ht(t))
      ((o = n[e] || (n[e] = [])),
        t.forEach(function (l, c) {
          return o.push({ t: (c / (t.length - 1)) * 100, v: l, e: r });
        }));
    else
      for (a in t)
        ((o = n[a] || (n[a] = [])),
          a === "ease" || o.push({ t: parseFloat(e), v: t[a], e: r }));
  },
  Es = function (e, t, n, i, r) {
    return xt(e)
      ? e.call(t, n, i, r)
      : It(e) && ~e.indexOf("random(")
        ? Us(e)
        : e;
  },
  df = Pc + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
  ff = {};
en(df + ",id,stagger,delay,duration,paused,scrollTrigger", function (s) {
  return (ff[s] = 1);
});
var Et = (function (s) {
  Pd(e, s);
  function e(n, i, r, a) {
    var o;
    (typeof i == "number" && ((r.duration = i), (i = r), (r = null)),
      (o = s.call(this, a ? i : Ss(i)) || this));
    var l = o.vars,
      c = l.duration,
      h = l.delay,
      u = l.immediateRender,
      d = l.stagger,
      f = l.overwrite,
      g = l.keyframes,
      _ = l.defaults,
      m = l.scrollTrigger,
      p = l.yoyoEase,
      S = i.parent || mt,
      M = (Ht(n) || Ld(n) ? hi(n[0]) : "length" in i) ? [n] : Sn(n),
      v,
      b,
      A,
      w,
      C,
      x,
      E,
      P;
    if (
      ((o._targets = M.length
        ? Dc(M)
        : Ls(
            "GSAP target " + n + " not found. https://gsap.com",
            !dn.nullTargetWarn,
          ) || []),
      (o._ptLookup = []),
      (o._overwrite = f),
      g || d || xa(c) || xa(h))
    ) {
      if (
        ((i = o.vars),
        (v = o.timeline =
          new Xt({
            data: "nested",
            defaults: _ || {},
            targets: S && S.data === "nested" ? S.vars.targets : M,
          })),
        v.kill(),
        (v.parent = v._dp = ni(o)),
        (v._start = 0),
        d || xa(c) || xa(h))
      ) {
        if (((w = M.length), (E = d && Zd(d)), Wn(d)))
          for (C in d) ~df.indexOf(C) && (P || (P = {}), (P[C] = d[C]));
        for (b = 0; b < w; b++)
          ((A = Fa(i, ff)),
            (A.stagger = 0),
            p && (A.yoyoEase = p),
            P && jr(A, P),
            (x = M[b]),
            (A.duration = +Es(c, ni(o), b, x, M)),
            (A.delay = (+Es(h, ni(o), b, x, M) || 0) - o._delay),
            !d &&
              w === 1 &&
              A.delay &&
              ((o._delay = h = A.delay), (o._start += h), (A.delay = 0)),
            v.to(x, A, E ? E(b, x, M) : 0),
            (v._ease = Xe.none));
        v.duration() ? (c = h = 0) : (o.timeline = 0);
      } else if (g) {
        (Ss(mn(v.vars.defaults, { ease: "none" })),
          (v._ease = tr(g.ease || i.ease || "none")));
        var V = 0,
          F,
          z,
          q;
        if (Ht(g))
          (g.forEach(function (G) {
            return v.to(M, G, ">");
          }),
            v.duration());
        else {
          A = {};
          for (C in g)
            C === "ease" || C === "easeEach" || wM(C, g[C], A, g.easeEach);
          for (C in A)
            for (
              F = A[C].sort(function (G, K) {
                return G.t - K.t;
              }),
                V = 0,
                b = 0;
              b < F.length;
              b++
            )
              ((z = F[b]),
                (q = {
                  ease: z.e,
                  duration: ((z.t - (b ? F[b - 1].t : 0)) / 100) * c,
                }),
                (q[C] = z.v),
                v.to(M, q, V),
                (V += q.duration));
          v.duration() < c && v.to({}, { duration: c - v.duration() });
        }
      }
      c || o.duration((c = v.duration()));
    } else o.timeline = 0;
    return (
      f === !0 && !Ec && ((Ti = ni(o)), mt.killTweensOf(M), (Ti = 0)),
      Bn(S, ni(o), r),
      i.reversed && o.reverse(),
      i.paused && o.paused(!0),
      (u ||
        (!c &&
          !g &&
          o._start === bt(S._time) &&
          Qt(u) &&
          rM(ni(o)) &&
          S.data !== "nested")) &&
        ((o._tTime = -st), o.render(Math.max(0, -h) || 0)),
      m && Yd(ni(o), m),
      o
    );
  }
  var t = e.prototype;
  return (
    (t.render = function (i, r, a) {
      var o = this._time,
        l = this._tDur,
        c = this._dur,
        h = i < 0,
        u = i > l - st && !h ? l : i < st ? 0 : i,
        d,
        f,
        g,
        _,
        m,
        p,
        S,
        M,
        v;
      if (!c) aM(this, i, r, a);
      else if (
        u !== this._tTime ||
        !i ||
        a ||
        (!this._initted && this._tTime) ||
        (this._startAt && this._zTime < 0 !== h) ||
        this._lazy
      ) {
        if (((d = u), (M = this.timeline), this._repeat)) {
          if (((_ = c + this._rDelay), this._repeat < -1 && h))
            return this.totalTime(_ * 100 + i, r, a);
          if (
            ((d = bt(u % _)),
            u === l
              ? ((g = this._repeat), (d = c))
              : ((m = bt(u / _)),
                (g = ~~m),
                g && g === m ? ((d = c), g--) : d > c && (d = c)),
            (p = this._yoyo && g & 1),
            p && ((v = this._yEase), (d = c - d)),
            (m = Kr(this._tTime, _)),
            d === o && !a && this._initted && g === m)
          )
            return ((this._tTime = u), this);
          g !== m &&
            (M && this._yEase && lf(M, p),
            this.vars.repeatRefresh &&
              !p &&
              !this._lock &&
              d !== _ &&
              this._initted &&
              ((this._lock = a = 1),
              (this.render(bt(_ * g), !0).invalidate()._lock = 0)));
        }
        if (!this._initted) {
          if (qd(this, h ? i : d, a, r, u)) return ((this._tTime = 0), this);
          if (o !== this._time && !(a && this.vars.repeatRefresh && g !== m))
            return this;
          if (c !== this._dur) return this.render(i, r, a);
        }
        if (
          ((this._tTime = u),
          (this._time = d),
          !this._act && this._ts && ((this._act = 1), (this._lazy = 0)),
          (this.ratio = S = (v || this._ease)(d / c)),
          this._from && (this.ratio = S = 1 - S),
          !o && u && !r && !m && (un(this, "onStart"), this._tTime !== u))
        )
          return this;
        for (f = this._pt; f;) (f.r(S, f.d), (f = f._next));
        ((M && M.render(i < 0 ? i : M._dur * M._ease(d / this._dur), r, a)) ||
          (this._startAt && (this._zTime = i)),
          this._onUpdate &&
            !r &&
            (h && Vl(this, i, r, a), un(this, "onUpdate")),
          this._repeat &&
            g !== m &&
            this.vars.onRepeat &&
            !r &&
            this.parent &&
            un(this, "onRepeat"),
          (u === this._tDur || !u) &&
            this._tTime === u &&
            (h && !this._onUpdate && Vl(this, i, !0, !0),
            (i || !c) &&
              ((u === this._tDur && this._ts > 0) || (!u && this._ts < 0)) &&
              Pi(this, 1),
            !r &&
              !(h && !o) &&
              (u || o || p) &&
              (un(this, u === l ? "onComplete" : "onReverseComplete", !0),
              this._prom && !(u < l && this.timeScale() > 0) && this._prom())));
      }
      return this;
    }),
    (t.targets = function () {
      return this._targets;
    }),
    (t.invalidate = function (i) {
      return (
        (!i || !this.vars.runBackwards) && (this._startAt = 0),
        (this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0),
        (this._ptLookup = []),
        this.timeline && this.timeline.invalidate(i),
        s.prototype.invalidate.call(this, i)
      );
    }),
    (t.resetTo = function (i, r, a, o, l) {
      (Ns || hn.wake(), this._ts || this.play());
      var c = Math.min(this._dur, (this._dp._time - this._start) * this._ts),
        h;
      return (
        this._initted || Uc(this, c),
        (h = this._ease(c / this._dur)),
        bM(this, i, r, a, o, h, c, l)
          ? this.resetTo(i, r, a, o, 1)
          : (Ka(this, 0),
            this.parent ||
              Wd(
                this._dp,
                this,
                "_first",
                "_last",
                this._dp._sort ? "_start" : 0,
              ),
            this.render(0))
      );
    }),
    (t.kill = function (i, r) {
      if ((r === void 0 && (r = "all"), !i && (!r || r === "all")))
        return (
          (this._lazy = this._pt = 0),
          this.parent
            ? gs(this)
            : this.scrollTrigger && this.scrollTrigger.kill(!!Nt),
          this
        );
      if (this.timeline) {
        var a = this.timeline.totalDuration();
        return (
          this.timeline.killTweensOf(i, r, Ti && Ti.vars.overwrite !== !0)
            ._first || gs(this),
          this.parent &&
            a !== this.timeline.totalDuration() &&
            Zr(this, (this._dur * this.timeline._tDur) / a, 0, 1),
          this
        );
      }
      var o = this._targets,
        l = i ? Sn(i) : o,
        c = this._ptLookup,
        h = this._pt,
        u,
        d,
        f,
        g,
        _,
        m,
        p;
      if ((!r || r === "all") && nM(o, l))
        return (r === "all" && (this._pt = 0), gs(this));
      for (
        u = this._op = this._op || [],
          r !== "all" &&
            (It(r) &&
              ((_ = {}),
              en(r, function (S) {
                return (_[S] = 1);
              }),
              (r = _)),
            (r = AM(o, r))),
          p = o.length;
        p--;
      )
        if (~l.indexOf(o[p])) {
          ((d = c[p]),
            r === "all"
              ? ((u[p] = r), (g = d), (f = {}))
              : ((f = u[p] = u[p] || {}), (g = r)));
          for (_ in g)
            ((m = d && d[_]),
              m &&
                ((!("kill" in m.d) || m.d.kill(_) === !0) && qa(this, m, "_pt"),
                delete d[_]),
              f !== "all" && (f[_] = 1));
        }
      return (this._initted && !this._pt && h && gs(this), this);
    }),
    (e.to = function (i, r) {
      return new e(i, r, arguments[2]);
    }),
    (e.from = function (i, r) {
      return Ts(1, arguments);
    }),
    (e.delayedCall = function (i, r, a, o) {
      return new e(r, 0, {
        immediateRender: !1,
        lazy: !1,
        overwrite: !1,
        delay: i,
        onComplete: r,
        onReverseComplete: r,
        onCompleteParams: a,
        onReverseCompleteParams: a,
        callbackScope: o,
      });
    }),
    (e.fromTo = function (i, r, a) {
      return Ts(2, arguments);
    }),
    (e.set = function (i, r) {
      return ((r.duration = 0), r.repeatDelay || (r.repeat = 0), new e(i, r));
    }),
    (e.killTweensOf = function (i, r, a) {
      return mt.killTweensOf(i, r, a);
    }),
    e
  );
})(Os);
mn(Et.prototype, { _targets: [], _lazy: 0, _startAt: 0, _op: 0, _onInit: 0 });
en("staggerTo,staggerFrom,staggerFromTo", function (s) {
  Et[s] = function () {
    var e = new Xt(),
      t = Wl.call(arguments, 0);
    return (t.splice(s === "staggerFromTo" ? 5 : 4, 0, 0), e[s].apply(e, t));
  };
});
var Nc = function (e, t, n) {
    return (e[t] = n);
  },
  pf = function (e, t, n) {
    return e[t](n);
  },
  RM = function (e, t, n, i) {
    return e[t](i.fp, n);
  },
  CM = function (e, t, n) {
    return e.setAttribute(t, n);
  },
  Oc = function (e, t) {
    return xt(e[t]) ? pf : bc(e[t]) && e.setAttribute ? CM : Nc;
  },
  mf = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e6) / 1e6, t);
  },
  PM = function (e, t) {
    return t.set(t.t, t.p, !!(t.s + t.c * e), t);
  },
  _f = function (e, t) {
    var n = t._pt,
      i = "";
    if (!e && t.b) i = t.b;
    else if (e === 1 && t.e) i = t.e;
    else {
      for (; n;)
        ((i =
          n.p +
          (n.m ? n.m(n.s + n.c * e) : Math.round((n.s + n.c * e) * 1e4) / 1e4) +
          i),
          (n = n._next));
      i += t.c;
    }
    t.set(t.t, t.p, i, t);
  },
  Fc = function (e, t) {
    for (var n = t._pt; n;) (n.r(e, n.d), (n = n._next));
  },
  DM = function (e, t, n, i) {
    for (var r = this._pt, a; r;)
      ((a = r._next), r.p === i && r.modifier(e, t, n), (r = a));
  },
  LM = function (e) {
    for (var t = this._pt, n, i; t;)
      ((i = t._next),
        (t.p === e && !t.op) || t.op === e
          ? qa(this, t, "_pt")
          : t.dep || (n = 1),
        (t = i));
    return !n;
  },
  IM = function (e, t, n, i) {
    i.mSet(e, t, i.m.call(i.tween, n, i.mt), i);
  },
  gf = function (e) {
    for (var t = e._pt, n, i, r, a; t;) {
      for (n = t._next, i = r; i && i.pr > t.pr;) i = i._next;
      ((t._prev = i ? i._prev : a) ? (t._prev._next = t) : (r = t),
        (t._next = i) ? (i._prev = t) : (a = t),
        (t = n));
    }
    e._pt = r;
  },
  tn = (function () {
    function s(t, n, i, r, a, o, l, c, h) {
      ((this.t = n),
        (this.s = r),
        (this.c = a),
        (this.p = i),
        (this.r = o || mf),
        (this.d = l || this),
        (this.set = c || Nc),
        (this.pr = h || 0),
        (this._next = t),
        t && (t._prev = this));
    }
    var e = s.prototype;
    return (
      (e.modifier = function (n, i, r) {
        ((this.mSet = this.mSet || this.set),
          (this.set = IM),
          (this.m = n),
          (this.mt = r),
          (this.tween = i));
      }),
      s
    );
  })();
en(
  Pc +
    "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",
  function (s) {
    return (Cc[s] = 1);
  },
);
pn.TweenMax = pn.TweenLite = Et;
pn.TimelineLite = pn.TimelineMax = Xt;
mt = new Xt({
  sortChildren: !1,
  defaults: qr,
  autoRemoveChildren: !0,
  id: "root",
  smoothChildTiming: !0,
});
dn.stringFilter = af;
var nr = [],
  Ca = {},
  UM = [],
  Pu = 0,
  NM = 0,
  Wo = function (e) {
    return (Ca[e] || UM).map(function (t) {
      return t();
    });
  },
  jl = function () {
    var e = Date.now(),
      t = [];
    e - Pu > 2 &&
      (Wo("matchMediaInit"),
      nr.forEach(function (n) {
        var i = n.queries,
          r = n.conditions,
          a,
          o,
          l,
          c;
        for (o in i)
          ((a = On.matchMedia(i[o]).matches),
            a && (l = 1),
            a !== r[o] && ((r[o] = a), (c = 1)));
        c && (n.revert(), l && t.push(n));
      }),
      Wo("matchMediaRevert"),
      t.forEach(function (n) {
        return n.onMatch(n, function (i) {
          return n.add(null, i);
        });
      }),
      (Pu = e),
      Wo("matchMedia"));
  },
  xf = (function () {
    function s(t, n) {
      ((this.selector = n && Xl(n)),
        (this.data = []),
        (this._r = []),
        (this.isReverted = !1),
        (this.id = NM++),
        t && this.add(t));
    }
    var e = s.prototype;
    return (
      (e.add = function (n, i, r) {
        xt(n) && ((r = i), (i = n), (n = xt));
        var a = this,
          o = function () {
            var c = ht,
              h = a.selector,
              u;
            return (
              c && c !== a && c.data.push(a),
              r && (a.selector = Xl(r)),
              (ht = a),
              (u = i.apply(a, arguments)),
              xt(u) && a._r.push(u),
              (ht = c),
              (a.selector = h),
              (a.isReverted = !1),
              u
            );
          };
        return (
          (a.last = o),
          n === xt
            ? o(a, function (l) {
                return a.add(null, l);
              })
            : n
              ? (a[n] = o)
              : o
        );
      }),
      (e.ignore = function (n) {
        var i = ht;
        ((ht = null), n(this), (ht = i));
      }),
      (e.getTweens = function () {
        var n = [];
        return (
          this.data.forEach(function (i) {
            return i instanceof s
              ? n.push.apply(n, i.getTweens())
              : i instanceof Et &&
                  !(i.parent && i.parent.data === "nested") &&
                  n.push(i);
          }),
          n
        );
      }),
      (e.clear = function () {
        this._r.length = this.data.length = 0;
      }),
      (e.kill = function (n, i) {
        var r = this;
        if (
          (n
            ? (function () {
                for (var o = r.getTweens(), l = r.data.length, c; l--;)
                  ((c = r.data[l]),
                    c.data === "isFlip" &&
                      (c.revert(),
                      c.getChildren(!0, !0, !1).forEach(function (h) {
                        return o.splice(o.indexOf(h), 1);
                      })));
                for (
                  o
                    .map(function (h) {
                      return {
                        g:
                          h._dur ||
                          h._delay ||
                          (h._sat && !h._sat.vars.immediateRender)
                            ? h.globalTime(0)
                            : -1 / 0,
                        t: h,
                      };
                    })
                    .sort(function (h, u) {
                      return u.g - h.g || -1 / 0;
                    })
                    .forEach(function (h) {
                      return h.t.revert(n);
                    }),
                    l = r.data.length;
                  l--;
                )
                  ((c = r.data[l]),
                    c instanceof Xt
                      ? c.data !== "nested" &&
                        (c.scrollTrigger && c.scrollTrigger.revert(), c.kill())
                      : !(c instanceof Et) && c.revert && c.revert(n));
                (r._r.forEach(function (h) {
                  return h(n, r);
                }),
                  (r.isReverted = !0));
              })()
            : this.data.forEach(function (o) {
                return o.kill && o.kill();
              }),
          this.clear(),
          i)
        )
          for (var a = nr.length; a--;) nr[a].id === this.id && nr.splice(a, 1);
      }),
      (e.revert = function (n) {
        this.kill(n || {});
      }),
      s
    );
  })(),
  OM = (function () {
    function s(t) {
      ((this.contexts = []), (this.scope = t), ht && ht.data.push(this));
    }
    var e = s.prototype;
    return (
      (e.add = function (n, i, r) {
        Wn(n) || (n = { matches: n });
        var a = new xf(0, r || this.scope),
          o = (a.conditions = {}),
          l,
          c,
          h;
        (ht && !a.selector && (a.selector = ht.selector),
          this.contexts.push(a),
          (i = a.add("onMatch", i)),
          (a.queries = n));
        for (c in n)
          c === "all"
            ? (h = 1)
            : ((l = On.matchMedia(n[c])),
              l &&
                (nr.indexOf(a) < 0 && nr.push(a),
                (o[c] = l.matches) && (h = 1),
                l.addListener
                  ? l.addListener(jl)
                  : l.addEventListener("change", jl)));
        return (
          h &&
            i(a, function (u) {
              return a.add(null, u);
            }),
          this
        );
      }),
      (e.revert = function (n) {
        this.kill(n || {});
      }),
      (e.kill = function (n) {
        this.contexts.forEach(function (i) {
          return i.kill(n, !0);
        });
      }),
      s
    );
  })(),
  ka = {
    registerPlugin: function () {
      for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
        t[n] = arguments[n];
      t.forEach(function (i) {
        return nf(i);
      });
    },
    timeline: function (e) {
      return new Xt(e);
    },
    getTweensOf: function (e, t) {
      return mt.getTweensOf(e, t);
    },
    getProperty: function (e, t, n, i) {
      It(e) && (e = Sn(e)[0]);
      var r = Qi(e || {}).get,
        a = n ? Gd : Vd;
      return (
        n === "native" && (n = ""),
        e &&
          (t
            ? a(((cn[t] && cn[t].get) || r)(e, t, n, i))
            : function (o, l, c) {
                return a(((cn[o] && cn[o].get) || r)(e, o, l, c));
              })
      );
    },
    quickSetter: function (e, t, n) {
      if (((e = Sn(e)), e.length > 1)) {
        var i = e.map(function (h) {
            return rn.quickSetter(h, t, n);
          }),
          r = i.length;
        return function (h) {
          for (var u = r; u--;) i[u](h);
        };
      }
      e = e[0] || {};
      var a = cn[t],
        o = Qi(e),
        l = (o.harness && (o.harness.aliases || {})[t]) || t,
        c = a
          ? function (h) {
              var u = new a();
              ((Rr._pt = 0),
                u.init(e, n ? h + n : h, Rr, 0, [e]),
                u.render(1, u),
                Rr._pt && Fc(1, Rr));
            }
          : o.set(e, l);
      return a
        ? c
        : function (h) {
            return c(e, l, n ? h + n : h, o, 1);
          };
    },
    quickTo: function (e, t, n) {
      var i,
        r = rn.to(
          e,
          mn(
            ((i = {}), (i[t] = "+=0.1"), (i.paused = !0), (i.stagger = 0), i),
            n || {},
          ),
        ),
        a = function (l, c, h) {
          return r.resetTo(t, l, c, h);
        };
      return ((a.tween = r), a);
    },
    isTweening: function (e) {
      return mt.getTweensOf(e, !0).length > 0;
    },
    defaults: function (e) {
      return (e && e.ease && (e.ease = tr(e.ease, qr.ease)), bu(qr, e || {}));
    },
    config: function (e) {
      return bu(dn, e || {});
    },
    registerEffect: function (e) {
      var t = e.name,
        n = e.effect,
        i = e.plugins,
        r = e.defaults,
        a = e.extendTimeline;
      ((i || "").split(",").forEach(function (o) {
        return (
          o && !cn[o] && !pn[o] && Ls(t + " effect requires " + o + " plugin.")
        );
      }),
        (zo[t] = function (o, l, c) {
          return n(Sn(o), mn(l || {}, r), c);
        }),
        a &&
          (Xt.prototype[t] = function (o, l, c) {
            return this.add(zo[t](o, Wn(l) ? l : (c = l) && {}, this), c);
          }));
    },
    registerEase: function (e, t) {
      Xe[e] = tr(t);
    },
    parseEase: function (e, t) {
      return arguments.length ? tr(e, t) : Xe;
    },
    getById: function (e) {
      return mt.getById(e);
    },
    exportRoot: function (e, t) {
      e === void 0 && (e = {});
      var n = new Xt(e),
        i,
        r;
      for (
        n.smoothChildTiming = Qt(e.smoothChildTiming),
          mt.remove(n),
          n._dp = 0,
          n._time = n._tTime = mt._time,
          i = mt._first;
        i;
      )
        ((r = i._next),
          (t ||
            !(
              !i._dur &&
              i instanceof Et &&
              i.vars.onComplete === i._targets[0]
            )) &&
            Bn(n, i, i._start - i._delay),
          (i = r));
      return (Bn(mt, n, 0), n);
    },
    context: function (e, t) {
      return e ? new xf(e, t) : ht;
    },
    matchMedia: function (e) {
      return new OM(e);
    },
    matchMediaRefresh: function () {
      return (
        nr.forEach(function (e) {
          var t = e.conditions,
            n,
            i;
          for (i in t) t[i] && ((t[i] = !1), (n = 1));
          n && e.revert();
        }) || jl()
      );
    },
    addEventListener: function (e, t) {
      var n = Ca[e] || (Ca[e] = []);
      ~n.indexOf(t) || n.push(t);
    },
    removeEventListener: function (e, t) {
      var n = Ca[e],
        i = n && n.indexOf(t);
      i >= 0 && n.splice(i, 1);
    },
    utils: {
      wrap: pM,
      wrapYoyo: mM,
      distribute: Zd,
      random: Jd,
      snap: $d,
      normalize: fM,
      getUnit: Bt,
      clamp: cM,
      splitColor: rf,
      toArray: Sn,
      selector: Xl,
      mapRange: ef,
      pipe: uM,
      unitize: dM,
      interpolate: _M,
      shuffle: Kd,
    },
    install: Fd,
    effects: zo,
    ticker: hn,
    updateRoot: Xt.updateRoot,
    plugins: cn,
    globalTimeline: mt,
    core: {
      PropTween: tn,
      globals: Bd,
      Tween: Et,
      Timeline: Xt,
      Animation: Os,
      getCache: Qi,
      _removeLinkedListItem: qa,
      reverting: function () {
        return Nt;
      },
      context: function (e) {
        return (e && ht && (ht.data.push(e), (e._ctx = ht)), ht);
      },
      suppressOverwrites: function (e) {
        return (Ec = e);
      },
    },
  };
en("to,from,fromTo,delayedCall,set,killTweensOf", function (s) {
  return (ka[s] = Et[s]);
});
hn.add(Xt.updateRoot);
Rr = ka.to({}, { duration: 0 });
var FM = function (e, t) {
    for (var n = e._pt; n && n.p !== t && n.op !== t && n.fp !== t;)
      n = n._next;
    return n;
  },
  BM = function (e, t) {
    var n = e._targets,
      i,
      r,
      a;
    for (i in t)
      for (r = n.length; r--;)
        ((a = e._ptLookup[r][i]),
          a &&
            (a = a.d) &&
            (a._pt && (a = FM(a, i)),
            a && a.modifier && a.modifier(t[i], e, n[r], i)));
  },
  Xo = function (e, t) {
    return {
      name: e,
      headless: 1,
      rawVars: 1,
      init: function (i, r, a) {
        a._onInit = function (o) {
          var l, c;
          if (
            (It(r) &&
              ((l = {}),
              en(r, function (h) {
                return (l[h] = 1);
              }),
              (r = l)),
            t)
          ) {
            l = {};
            for (c in r) l[c] = t(r[c]);
            r = l;
          }
          BM(o, r);
        };
      },
    };
  },
  rn =
    ka.registerPlugin(
      {
        name: "attr",
        init: function (e, t, n, i, r) {
          var a, o, l;
          this.tween = n;
          for (a in t)
            ((l = e.getAttribute(a) || ""),
              (o = this.add(
                e,
                "setAttribute",
                (l || 0) + "",
                t[a],
                i,
                r,
                0,
                0,
                a,
              )),
              (o.op = a),
              (o.b = l),
              this._props.push(a));
        },
        render: function (e, t) {
          for (var n = t._pt; n;)
            (Nt ? n.set(n.t, n.p, n.b, n) : n.r(e, n.d), (n = n._next));
        },
      },
      {
        name: "endArray",
        headless: 1,
        init: function (e, t) {
          for (var n = t.length; n--;)
            this.add(e, n, e[n] || 0, t[n], 0, 0, 0, 0, 0, 1);
        },
      },
      Xo("roundProps", Yl),
      Xo("modifiers"),
      Xo("snap", $d),
    ) || ka;
Et.version = Xt.version = rn.version = "3.13.0";
Od = 1;
Ac() && $r();
Xe.Power0;
Xe.Power1;
Xe.Power2;
Xe.Power3;
Xe.Power4;
Xe.Linear;
Xe.Quad;
Xe.Cubic;
Xe.Quart;
Xe.Quint;
Xe.Strong;
Xe.Elastic;
Xe.Back;
Xe.SteppedEase;
Xe.Bounce;
Xe.Sine;
Xe.Expo;
Xe.Circ;
/*!
 * CSSPlugin 3.13.0
 * https://gsap.com
 *
 * Copyright 2008-2025, GreenSock. All rights reserved.
 * Subject to the terms at https://gsap.com/standard-license
 * @author: Jack Doyle, jack@greensock.com
 */ var Du,
  Ei,
  Nr,
  Bc,
  $i,
  Lu,
  kc,
  kM = function () {
    return typeof window < "u";
  },
  ui = {},
  qi = 180 / Math.PI,
  Or = Math.PI / 180,
  Tr = Math.atan2,
  Iu = 1e8,
  zc = /([A-Z])/g,
  zM = /(left|right|width|margin|padding|x)/i,
  HM = /[\s,\(]\S/,
  zn = {
    autoAlpha: "opacity,visibility",
    scale: "scaleX,scaleY",
    alpha: "opacity",
  },
  Kl = function (e, t) {
    return t.set(t.t, t.p, Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u, t);
  },
  VM = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e === 1 ? t.e : Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u,
      t,
    );
  },
  GM = function (e, t) {
    return t.set(
      t.t,
      t.p,
      e ? Math.round((t.s + t.c * e) * 1e4) / 1e4 + t.u : t.b,
      t,
    );
  },
  WM = function (e, t) {
    var n = t.s + t.c * e;
    t.set(t.t, t.p, ~~(n + (n < 0 ? -0.5 : 0.5)) + t.u, t);
  },
  vf = function (e, t) {
    return t.set(t.t, t.p, e ? t.e : t.b, t);
  },
  yf = function (e, t) {
    return t.set(t.t, t.p, e !== 1 ? t.b : t.e, t);
  },
  XM = function (e, t, n) {
    return (e.style[t] = n);
  },
  YM = function (e, t, n) {
    return e.style.setProperty(t, n);
  },
  qM = function (e, t, n) {
    return (e._gsap[t] = n);
  },
  jM = function (e, t, n) {
    return (e._gsap.scaleX = e._gsap.scaleY = n);
  },
  KM = function (e, t, n, i, r) {
    var a = e._gsap;
    ((a.scaleX = a.scaleY = n), a.renderTransform(r, a));
  },
  ZM = function (e, t, n, i, r) {
    var a = e._gsap;
    ((a[t] = n), a.renderTransform(r, a));
  },
  _t = "transform",
  nn = _t + "Origin",
  $M = function s(e, t) {
    var n = this,
      i = this.target,
      r = i.style,
      a = i._gsap;
    if (e in ui && r) {
      if (((this.tfm = this.tfm || {}), e !== "transform"))
        ((e = zn[e] || e),
          ~e.indexOf(",")
            ? e.split(",").forEach(function (o) {
                return (n.tfm[o] = ii(i, o));
              })
            : (this.tfm[e] = a.x ? a[e] : ii(i, e)),
          e === nn && (this.tfm.zOrigin = a.zOrigin));
      else
        return zn.transform.split(",").forEach(function (o) {
          return s.call(n, o, t);
        });
      if (this.props.indexOf(_t) >= 0) return;
      (a.svg &&
        ((this.svgo = i.getAttribute("data-svg-origin")),
        this.props.push(nn, t, "")),
        (e = _t));
    }
    (r || t) && this.props.push(e, t, r[e]);
  },
  Mf = function (e) {
    e.translate &&
      (e.removeProperty("translate"),
      e.removeProperty("scale"),
      e.removeProperty("rotate"));
  },
  JM = function () {
    var e = this.props,
      t = this.target,
      n = t.style,
      i = t._gsap,
      r,
      a;
    for (r = 0; r < e.length; r += 3)
      e[r + 1]
        ? e[r + 1] === 2
          ? t[e[r]](e[r + 2])
          : (t[e[r]] = e[r + 2])
        : e[r + 2]
          ? (n[e[r]] = e[r + 2])
          : n.removeProperty(
              e[r].substr(0, 2) === "--"
                ? e[r]
                : e[r].replace(zc, "-$1").toLowerCase(),
            );
    if (this.tfm) {
      for (a in this.tfm) i[a] = this.tfm[a];
      (i.svg &&
        (i.renderTransform(),
        t.setAttribute("data-svg-origin", this.svgo || "")),
        (r = kc()),
        (!r || !r.isStart) &&
          !n[_t] &&
          (Mf(n),
          i.zOrigin &&
            n[nn] &&
            ((n[nn] += " " + i.zOrigin + "px"),
            (i.zOrigin = 0),
            i.renderTransform()),
          (i.uncache = 1)));
    }
  },
  Sf = function (e, t) {
    var n = { target: e, props: [], revert: JM, save: $M };
    return (
      e._gsap || rn.core.getCache(e),
      t &&
        e.style &&
        e.nodeType &&
        t.split(",").forEach(function (i) {
          return n.save(i);
        }),
      n
    );
  },
  Tf,
  Zl = function (e, t) {
    var n = Ei.createElementNS
      ? Ei.createElementNS(
          (t || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"),
          e,
        )
      : Ei.createElement(e);
    return n && n.style ? n : Ei.createElement(e);
  },
  Tn = function s(e, t, n) {
    var i = getComputedStyle(e);
    return (
      i[t] ||
      i.getPropertyValue(t.replace(zc, "-$1").toLowerCase()) ||
      i.getPropertyValue(t) ||
      (!n && s(e, Jr(t) || t, 1)) ||
      ""
    );
  },
  Uu = "O,Moz,ms,Ms,Webkit".split(","),
  Jr = function (e, t, n) {
    var i = t || $i,
      r = i.style,
      a = 5;
    if (e in r && !n) return e;
    for (
      e = e.charAt(0).toUpperCase() + e.substr(1);
      a-- && !(Uu[a] + e in r);
    );
    return a < 0 ? null : (a === 3 ? "ms" : a >= 0 ? Uu[a] : "") + e;
  },
  $l = function () {
    kM() &&
      window.document &&
      ((Du = window),
      (Ei = Du.document),
      (Nr = Ei.documentElement),
      ($i = Zl("div") || { style: {} }),
      Zl("div"),
      (_t = Jr(_t)),
      (nn = _t + "Origin"),
      ($i.style.cssText =
        "border-width:0;line-height:0;position:absolute;padding:0"),
      (Tf = !!Jr("perspective")),
      (kc = rn.core.reverting),
      (Bc = 1));
  },
  Nu = function (e) {
    var t = e.ownerSVGElement,
      n = Zl(
        "svg",
        (t && t.getAttribute("xmlns")) || "http://www.w3.org/2000/svg",
      ),
      i = e.cloneNode(!0),
      r;
    ((i.style.display = "block"), n.appendChild(i), Nr.appendChild(n));
    try {
      r = i.getBBox();
    } catch {}
    return (n.removeChild(i), Nr.removeChild(n), r);
  },
  Ou = function (e, t) {
    for (var n = t.length; n--;)
      if (e.hasAttribute(t[n])) return e.getAttribute(t[n]);
  },
  Ef = function (e) {
    var t, n;
    try {
      t = e.getBBox();
    } catch {
      ((t = Nu(e)), (n = 1));
    }
    return (
      (t && (t.width || t.height)) || n || (t = Nu(e)),
      t && !t.width && !t.x && !t.y
        ? {
            x: +Ou(e, ["x", "cx", "x1"]) || 0,
            y: +Ou(e, ["y", "cy", "y1"]) || 0,
            width: 0,
            height: 0,
          }
        : t
    );
  },
  bf = function (e) {
    return !!(e.getCTM && (!e.parentNode || e.ownerSVGElement) && Ef(e));
  },
  ir = function (e, t) {
    if (t) {
      var n = e.style,
        i;
      (t in ui && t !== nn && (t = _t),
        n.removeProperty
          ? ((i = t.substr(0, 2)),
            (i === "ms" || t.substr(0, 6) === "webkit") && (t = "-" + t),
            n.removeProperty(
              i === "--" ? t : t.replace(zc, "-$1").toLowerCase(),
            ))
          : n.removeAttribute(t));
    }
  },
  bi = function (e, t, n, i, r, a) {
    var o = new tn(e._pt, t, n, 0, 1, a ? yf : vf);
    return ((e._pt = o), (o.b = i), (o.e = r), e._props.push(n), o);
  },
  Fu = { deg: 1, rad: 1, turn: 1 },
  QM = { grid: 1, flex: 1 },
  Di = function s(e, t, n, i) {
    var r = parseFloat(n) || 0,
      a = (n + "").trim().substr((r + "").length) || "px",
      o = $i.style,
      l = zM.test(t),
      c = e.tagName.toLowerCase() === "svg",
      h = (c ? "client" : "offset") + (l ? "Width" : "Height"),
      u = 100,
      d = i === "px",
      f = i === "%",
      g,
      _,
      m,
      p;
    if (i === a || !r || Fu[i] || Fu[a]) return r;
    if (
      (a !== "px" && !d && (r = s(e, t, n, "px")),
      (p = e.getCTM && bf(e)),
      (f || a === "%") && (ui[t] || ~t.indexOf("adius")))
    )
      return (
        (g = p ? e.getBBox()[l ? "width" : "height"] : e[h]),
        Mt(f ? (r / g) * u : (r / 100) * g)
      );
    if (
      ((o[l ? "width" : "height"] = u + (d ? a : i)),
      (_ =
        (i !== "rem" && ~t.indexOf("adius")) ||
        (i === "em" && e.appendChild && !c)
          ? e
          : e.parentNode),
      p && (_ = (e.ownerSVGElement || {}).parentNode),
      (!_ || _ === Ei || !_.appendChild) && (_ = Ei.body),
      (m = _._gsap),
      m && f && m.width && l && m.time === hn.time && !m.uncache)
    )
      return Mt((r / m.width) * u);
    if (f && (t === "height" || t === "width")) {
      var S = e.style[t];
      ((e.style[t] = u + i), (g = e[h]), S ? (e.style[t] = S) : ir(e, t));
    } else
      ((f || a === "%") &&
        !QM[Tn(_, "display")] &&
        (o.position = Tn(e, "position")),
        _ === e && (o.position = "static"),
        _.appendChild($i),
        (g = $i[h]),
        _.removeChild($i),
        (o.position = "absolute"));
    return (
      l && f && ((m = Qi(_)), (m.time = hn.time), (m.width = _[h])),
      Mt(d ? (g * r) / u : g && r ? (u / g) * r : 0)
    );
  },
  ii = function (e, t, n, i) {
    var r;
    return (
      Bc || $l(),
      t in zn &&
        t !== "transform" &&
        ((t = zn[t]), ~t.indexOf(",") && (t = t.split(",")[0])),
      ui[t] && t !== "transform"
        ? ((r = Bs(e, i)),
          (r =
            t !== "transformOrigin"
              ? r[t]
              : r.svg
                ? r.origin
                : Ha(Tn(e, nn)) + " " + r.zOrigin + "px"))
        : ((r = e.style[t]),
          (!r || r === "auto" || i || ~(r + "").indexOf("calc(")) &&
            (r =
              (za[t] && za[t](e, t, n)) ||
              Tn(e, t) ||
              zd(e, t) ||
              (t === "opacity" ? 1 : 0))),
      n && !~(r + "").trim().indexOf(" ") ? Di(e, t, r, n) + n : r
    );
  },
  eS = function (e, t, n, i) {
    if (!n || n === "none") {
      var r = Jr(t, e, 1),
        a = r && Tn(e, r, 1);
      a && a !== n
        ? ((t = r), (n = a))
        : t === "borderColor" && (n = Tn(e, "borderTopColor"));
    }
    var o = new tn(this._pt, e.style, t, 0, 1, _f),
      l = 0,
      c = 0,
      h,
      u,
      d,
      f,
      g,
      _,
      m,
      p,
      S,
      M,
      v,
      b;
    if (
      ((o.b = n),
      (o.e = i),
      (n += ""),
      (i += ""),
      i.substring(0, 6) === "var(--" &&
        (i = Tn(e, i.substring(4, i.indexOf(")")))),
      i === "auto" &&
        ((_ = e.style[t]),
        (e.style[t] = i),
        (i = Tn(e, t) || i),
        _ ? (e.style[t] = _) : ir(e, t)),
      (h = [n, i]),
      af(h),
      (n = h[0]),
      (i = h[1]),
      (d = n.match(wr) || []),
      (b = i.match(wr) || []),
      b.length)
    ) {
      for (; (u = wr.exec(i));)
        ((m = u[0]),
          (S = i.substring(l, u.index)),
          g
            ? (g = (g + 1) % 5)
            : (S.substr(-5) === "rgba(" || S.substr(-5) === "hsla(") && (g = 1),
          m !== (_ = d[c++] || "") &&
            ((f = parseFloat(_) || 0),
            (v = _.substr((f + "").length)),
            m.charAt(1) === "=" && (m = Ur(f, m) + v),
            (p = parseFloat(m)),
            (M = m.substr((p + "").length)),
            (l = wr.lastIndex - M.length),
            M ||
              ((M = M || dn.units[t] || v),
              l === i.length && ((i += M), (o.e += M))),
            v !== M && (f = Di(e, t, _, M) || 0),
            (o._pt = {
              _next: o._pt,
              p: S || c === 1 ? S : ",",
              s: f,
              c: p - f,
              m: (g && g < 4) || t === "zIndex" ? Math.round : 0,
            })));
      o.c = l < i.length ? i.substring(l, i.length) : "";
    } else o.r = t === "display" && i === "none" ? yf : vf;
    return (Ud.test(i) && (o.e = 0), (this._pt = o), o);
  },
  Bu = { top: "0%", bottom: "100%", left: "0%", right: "100%", center: "50%" },
  tS = function (e) {
    var t = e.split(" "),
      n = t[0],
      i = t[1] || "50%";
    return (
      (n === "top" || n === "bottom" || i === "left" || i === "right") &&
        ((e = n), (n = i), (i = e)),
      (t[0] = Bu[n] || n),
      (t[1] = Bu[i] || i),
      t.join(" ")
    );
  },
  nS = function (e, t) {
    if (t.tween && t.tween._time === t.tween._dur) {
      var n = t.t,
        i = n.style,
        r = t.u,
        a = n._gsap,
        o,
        l,
        c;
      if (r === "all" || r === !0) ((i.cssText = ""), (l = 1));
      else
        for (r = r.split(","), c = r.length; --c > -1;)
          ((o = r[c]),
            ui[o] && ((l = 1), (o = o === "transformOrigin" ? nn : _t)),
            ir(n, o));
      l &&
        (ir(n, _t),
        a &&
          (a.svg && n.removeAttribute("transform"),
          (i.scale = i.rotate = i.translate = "none"),
          Bs(n, 1),
          (a.uncache = 1),
          Mf(i)));
    }
  },
  za = {
    clearProps: function (e, t, n, i, r) {
      if (r.data !== "isFromStart") {
        var a = (e._pt = new tn(e._pt, t, n, 0, 0, nS));
        return ((a.u = i), (a.pr = -10), (a.tween = r), e._props.push(n), 1);
      }
    },
  },
  Fs = [1, 0, 0, 1, 0, 0],
  Af = {},
  wf = function (e) {
    return e === "matrix(1, 0, 0, 1, 0, 0)" || e === "none" || !e;
  },
  ku = function (e) {
    var t = Tn(e, _t);
    return wf(t) ? Fs : t.substr(7).match(Id).map(Mt);
  },
  Hc = function (e, t) {
    var n = e._gsap || Qi(e),
      i = e.style,
      r = ku(e),
      a,
      o,
      l,
      c;
    return n.svg && e.getAttribute("transform")
      ? ((l = e.transform.baseVal.consolidate().matrix),
        (r = [l.a, l.b, l.c, l.d, l.e, l.f]),
        r.join(",") === "1,0,0,1,0,0" ? Fs : r)
      : (r === Fs &&
          !e.offsetParent &&
          e !== Nr &&
          !n.svg &&
          ((l = i.display),
          (i.display = "block"),
          (a = e.parentNode),
          (!a || (!e.offsetParent && !e.getBoundingClientRect().width)) &&
            ((c = 1), (o = e.nextElementSibling), Nr.appendChild(e)),
          (r = ku(e)),
          l ? (i.display = l) : ir(e, "display"),
          c &&
            (o
              ? a.insertBefore(e, o)
              : a
                ? a.appendChild(e)
                : Nr.removeChild(e))),
        t && r.length > 6 ? [r[0], r[1], r[4], r[5], r[12], r[13]] : r);
  },
  Jl = function (e, t, n, i, r, a) {
    var o = e._gsap,
      l = r || Hc(e, !0),
      c = o.xOrigin || 0,
      h = o.yOrigin || 0,
      u = o.xOffset || 0,
      d = o.yOffset || 0,
      f = l[0],
      g = l[1],
      _ = l[2],
      m = l[3],
      p = l[4],
      S = l[5],
      M = t.split(" "),
      v = parseFloat(M[0]) || 0,
      b = parseFloat(M[1]) || 0,
      A,
      w,
      C,
      x;
    (n
      ? l !== Fs &&
        (w = f * m - g * _) &&
        ((C = v * (m / w) + b * (-_ / w) + (_ * S - m * p) / w),
        (x = v * (-g / w) + b * (f / w) - (f * S - g * p) / w),
        (v = C),
        (b = x))
      : ((A = Ef(e)),
        (v = A.x + (~M[0].indexOf("%") ? (v / 100) * A.width : v)),
        (b = A.y + (~(M[1] || M[0]).indexOf("%") ? (b / 100) * A.height : b))),
      i || (i !== !1 && o.smooth)
        ? ((p = v - c),
          (S = b - h),
          (o.xOffset = u + (p * f + S * _) - p),
          (o.yOffset = d + (p * g + S * m) - S))
        : (o.xOffset = o.yOffset = 0),
      (o.xOrigin = v),
      (o.yOrigin = b),
      (o.smooth = !!i),
      (o.origin = t),
      (o.originIsAbsolute = !!n),
      (e.style[nn] = "0px 0px"),
      a &&
        (bi(a, o, "xOrigin", c, v),
        bi(a, o, "yOrigin", h, b),
        bi(a, o, "xOffset", u, o.xOffset),
        bi(a, o, "yOffset", d, o.yOffset)),
      e.setAttribute("data-svg-origin", v + " " + b));
  },
  Bs = function (e, t) {
    var n = e._gsap || new hf(e);
    if ("x" in n && !t && !n.uncache) return n;
    var i = e.style,
      r = n.scaleX < 0,
      a = "px",
      o = "deg",
      l = getComputedStyle(e),
      c = Tn(e, nn) || "0",
      h,
      u,
      d,
      f,
      g,
      _,
      m,
      p,
      S,
      M,
      v,
      b,
      A,
      w,
      C,
      x,
      E,
      P,
      V,
      F,
      z,
      q,
      G,
      K,
      H,
      re,
      ae,
      _e,
      Pe,
      nt,
      He,
      W;
    return (
      (h = u = d = _ = m = p = S = M = v = 0),
      (f = g = 1),
      (n.svg = !!(e.getCTM && bf(e))),
      l.translate &&
        ((l.translate !== "none" ||
          l.scale !== "none" ||
          l.rotate !== "none") &&
          (i[_t] =
            (l.translate !== "none"
              ? "translate3d(" +
                (l.translate + " 0 0").split(" ").slice(0, 3).join(", ") +
                ") "
              : "") +
            (l.rotate !== "none" ? "rotate(" + l.rotate + ") " : "") +
            (l.scale !== "none"
              ? "scale(" + l.scale.split(" ").join(",") + ") "
              : "") +
            (l[_t] !== "none" ? l[_t] : "")),
        (i.scale = i.rotate = i.translate = "none")),
      (w = Hc(e, n.svg)),
      n.svg &&
        (n.uncache
          ? ((H = e.getBBox()),
            (c = n.xOrigin - H.x + "px " + (n.yOrigin - H.y) + "px"),
            (K = ""))
          : (K = !t && e.getAttribute("data-svg-origin")),
        Jl(e, K || c, !!K || n.originIsAbsolute, n.smooth !== !1, w)),
      (b = n.xOrigin || 0),
      (A = n.yOrigin || 0),
      w !== Fs &&
        ((P = w[0]),
        (V = w[1]),
        (F = w[2]),
        (z = w[3]),
        (h = q = w[4]),
        (u = G = w[5]),
        w.length === 6
          ? ((f = Math.sqrt(P * P + V * V)),
            (g = Math.sqrt(z * z + F * F)),
            (_ = P || V ? Tr(V, P) * qi : 0),
            (S = F || z ? Tr(F, z) * qi + _ : 0),
            S && (g *= Math.abs(Math.cos(S * Or))),
            n.svg && ((h -= b - (b * P + A * F)), (u -= A - (b * V + A * z))))
          : ((W = w[6]),
            (nt = w[7]),
            (ae = w[8]),
            (_e = w[9]),
            (Pe = w[10]),
            (He = w[11]),
            (h = w[12]),
            (u = w[13]),
            (d = w[14]),
            (C = Tr(W, Pe)),
            (m = C * qi),
            C &&
              ((x = Math.cos(-C)),
              (E = Math.sin(-C)),
              (K = q * x + ae * E),
              (H = G * x + _e * E),
              (re = W * x + Pe * E),
              (ae = q * -E + ae * x),
              (_e = G * -E + _e * x),
              (Pe = W * -E + Pe * x),
              (He = nt * -E + He * x),
              (q = K),
              (G = H),
              (W = re)),
            (C = Tr(-F, Pe)),
            (p = C * qi),
            C &&
              ((x = Math.cos(-C)),
              (E = Math.sin(-C)),
              (K = P * x - ae * E),
              (H = V * x - _e * E),
              (re = F * x - Pe * E),
              (He = z * E + He * x),
              (P = K),
              (V = H),
              (F = re)),
            (C = Tr(V, P)),
            (_ = C * qi),
            C &&
              ((x = Math.cos(C)),
              (E = Math.sin(C)),
              (K = P * x + V * E),
              (H = q * x + G * E),
              (V = V * x - P * E),
              (G = G * x - q * E),
              (P = K),
              (q = H)),
            m &&
              Math.abs(m) + Math.abs(_) > 359.9 &&
              ((m = _ = 0), (p = 180 - p)),
            (f = Mt(Math.sqrt(P * P + V * V + F * F))),
            (g = Mt(Math.sqrt(G * G + W * W))),
            (C = Tr(q, G)),
            (S = Math.abs(C) > 2e-4 ? C * qi : 0),
            (v = He ? 1 / (He < 0 ? -He : He) : 0)),
        n.svg &&
          ((K = e.getAttribute("transform")),
          (n.forceCSS = e.setAttribute("transform", "") || !wf(Tn(e, _t))),
          K && e.setAttribute("transform", K))),
      Math.abs(S) > 90 &&
        Math.abs(S) < 270 &&
        (r
          ? ((f *= -1), (S += _ <= 0 ? 180 : -180), (_ += _ <= 0 ? 180 : -180))
          : ((g *= -1), (S += S <= 0 ? 180 : -180))),
      (t = t || n.uncache),
      (n.x =
        h -
        ((n.xPercent =
          h &&
          ((!t && n.xPercent) ||
            (Math.round(e.offsetWidth / 2) === Math.round(-h) ? -50 : 0)))
          ? (e.offsetWidth * n.xPercent) / 100
          : 0) +
        a),
      (n.y =
        u -
        ((n.yPercent =
          u &&
          ((!t && n.yPercent) ||
            (Math.round(e.offsetHeight / 2) === Math.round(-u) ? -50 : 0)))
          ? (e.offsetHeight * n.yPercent) / 100
          : 0) +
        a),
      (n.z = d + a),
      (n.scaleX = Mt(f)),
      (n.scaleY = Mt(g)),
      (n.rotation = Mt(_) + o),
      (n.rotationX = Mt(m) + o),
      (n.rotationY = Mt(p) + o),
      (n.skewX = S + o),
      (n.skewY = M + o),
      (n.transformPerspective = v + a),
      (n.zOrigin = parseFloat(c.split(" ")[2]) || (!t && n.zOrigin) || 0) &&
        (i[nn] = Ha(c)),
      (n.xOffset = n.yOffset = 0),
      (n.force3D = dn.force3D),
      (n.renderTransform = n.svg ? rS : Tf ? Rf : iS),
      (n.uncache = 0),
      n
    );
  },
  Ha = function (e) {
    return (e = e.split(" "))[0] + " " + e[1];
  },
  Yo = function (e, t, n) {
    var i = Bt(t);
    return Mt(parseFloat(t) + parseFloat(Di(e, "x", n + "px", i))) + i;
  },
  iS = function (e, t) {
    ((t.z = "0px"),
      (t.rotationY = t.rotationX = "0deg"),
      (t.force3D = 0),
      Rf(e, t));
  },
  Wi = "0deg",
  ps = "0px",
  Xi = ") ",
  Rf = function (e, t) {
    var n = t || this,
      i = n.xPercent,
      r = n.yPercent,
      a = n.x,
      o = n.y,
      l = n.z,
      c = n.rotation,
      h = n.rotationY,
      u = n.rotationX,
      d = n.skewX,
      f = n.skewY,
      g = n.scaleX,
      _ = n.scaleY,
      m = n.transformPerspective,
      p = n.force3D,
      S = n.target,
      M = n.zOrigin,
      v = "",
      b = (p === "auto" && e && e !== 1) || p === !0;
    if (M && (u !== Wi || h !== Wi)) {
      var A = parseFloat(h) * Or,
        w = Math.sin(A),
        C = Math.cos(A),
        x;
      ((A = parseFloat(u) * Or),
        (x = Math.cos(A)),
        (a = Yo(S, a, w * x * -M)),
        (o = Yo(S, o, -Math.sin(A) * -M)),
        (l = Yo(S, l, C * x * -M + M)));
    }
    (m !== ps && (v += "perspective(" + m + Xi),
      (i || r) && (v += "translate(" + i + "%, " + r + "%) "),
      (b || a !== ps || o !== ps || l !== ps) &&
        (v +=
          l !== ps || b
            ? "translate3d(" + a + ", " + o + ", " + l + ") "
            : "translate(" + a + ", " + o + Xi),
      c !== Wi && (v += "rotate(" + c + Xi),
      h !== Wi && (v += "rotateY(" + h + Xi),
      u !== Wi && (v += "rotateX(" + u + Xi),
      (d !== Wi || f !== Wi) && (v += "skew(" + d + ", " + f + Xi),
      (g !== 1 || _ !== 1) && (v += "scale(" + g + ", " + _ + Xi),
      (S.style[_t] = v || "translate(0, 0)"));
  },
  rS = function (e, t) {
    var n = t || this,
      i = n.xPercent,
      r = n.yPercent,
      a = n.x,
      o = n.y,
      l = n.rotation,
      c = n.skewX,
      h = n.skewY,
      u = n.scaleX,
      d = n.scaleY,
      f = n.target,
      g = n.xOrigin,
      _ = n.yOrigin,
      m = n.xOffset,
      p = n.yOffset,
      S = n.forceCSS,
      M = parseFloat(a),
      v = parseFloat(o),
      b,
      A,
      w,
      C,
      x;
    ((l = parseFloat(l)),
      (c = parseFloat(c)),
      (h = parseFloat(h)),
      h && ((h = parseFloat(h)), (c += h), (l += h)),
      l || c
        ? ((l *= Or),
          (c *= Or),
          (b = Math.cos(l) * u),
          (A = Math.sin(l) * u),
          (w = Math.sin(l - c) * -d),
          (C = Math.cos(l - c) * d),
          c &&
            ((h *= Or),
            (x = Math.tan(c - h)),
            (x = Math.sqrt(1 + x * x)),
            (w *= x),
            (C *= x),
            h &&
              ((x = Math.tan(h)),
              (x = Math.sqrt(1 + x * x)),
              (b *= x),
              (A *= x))),
          (b = Mt(b)),
          (A = Mt(A)),
          (w = Mt(w)),
          (C = Mt(C)))
        : ((b = u), (C = d), (A = w = 0)),
      ((M && !~(a + "").indexOf("px")) || (v && !~(o + "").indexOf("px"))) &&
        ((M = Di(f, "x", a, "px")), (v = Di(f, "y", o, "px"))),
      (g || _ || m || p) &&
        ((M = Mt(M + g - (g * b + _ * w) + m)),
        (v = Mt(v + _ - (g * A + _ * C) + p))),
      (i || r) &&
        ((x = f.getBBox()),
        (M = Mt(M + (i / 100) * x.width)),
        (v = Mt(v + (r / 100) * x.height))),
      (x =
        "matrix(" + b + "," + A + "," + w + "," + C + "," + M + "," + v + ")"),
      f.setAttribute("transform", x),
      S && (f.style[_t] = x));
  },
  sS = function (e, t, n, i, r) {
    var a = 360,
      o = It(r),
      l = parseFloat(r) * (o && ~r.indexOf("rad") ? qi : 1),
      c = l - i,
      h = i + c + "deg",
      u,
      d;
    return (
      o &&
        ((u = r.split("_")[1]),
        u === "short" && ((c %= a), c !== c % (a / 2) && (c += c < 0 ? a : -a)),
        u === "cw" && c < 0
          ? (c = ((c + a * Iu) % a) - ~~(c / a) * a)
          : u === "ccw" && c > 0 && (c = ((c - a * Iu) % a) - ~~(c / a) * a)),
      (e._pt = d = new tn(e._pt, t, n, i, c, VM)),
      (d.e = h),
      (d.u = "deg"),
      e._props.push(n),
      d
    );
  },
  zu = function (e, t) {
    for (var n in t) e[n] = t[n];
    return e;
  },
  aS = function (e, t, n) {
    var i = zu({}, n._gsap),
      r = "perspective,force3D,transformOrigin,svgOrigin",
      a = n.style,
      o,
      l,
      c,
      h,
      u,
      d,
      f,
      g;
    i.svg
      ? ((c = n.getAttribute("transform")),
        n.setAttribute("transform", ""),
        (a[_t] = t),
        (o = Bs(n, 1)),
        ir(n, _t),
        n.setAttribute("transform", c))
      : ((c = getComputedStyle(n)[_t]),
        (a[_t] = t),
        (o = Bs(n, 1)),
        (a[_t] = c));
    for (l in ui)
      ((c = i[l]),
        (h = o[l]),
        c !== h &&
          r.indexOf(l) < 0 &&
          ((f = Bt(c)),
          (g = Bt(h)),
          (u = f !== g ? Di(n, l, c, g) : parseFloat(c)),
          (d = parseFloat(h)),
          (e._pt = new tn(e._pt, o, l, u, d - u, Kl)),
          (e._pt.u = g || 0),
          e._props.push(l)));
    zu(o, i);
  };
en("padding,margin,Width,Radius", function (s, e) {
  var t = "Top",
    n = "Right",
    i = "Bottom",
    r = "Left",
    a = (e < 3 ? [t, n, i, r] : [t + r, t + n, i + n, i + r]).map(function (o) {
      return e < 2 ? s + o : "border" + o + s;
    });
  za[e > 1 ? "border" + s : s] = function (o, l, c, h, u) {
    var d, f;
    if (arguments.length < 4)
      return (
        (d = a.map(function (g) {
          return ii(o, g, c);
        })),
        (f = d.join(" ")),
        f.split(d[0]).length === 5 ? d[0] : f
      );
    ((d = (h + "").split(" ")),
      (f = {}),
      a.forEach(function (g, _) {
        return (f[g] = d[_] = d[_] || d[((_ - 1) / 2) | 0]);
      }),
      o.init(l, f, u));
  };
});
var Cf = {
  name: "css",
  register: $l,
  targetTest: function (e) {
    return e.style && e.nodeType;
  },
  init: function (e, t, n, i, r) {
    var a = this._props,
      o = e.style,
      l = n.vars.startAt,
      c,
      h,
      u,
      d,
      f,
      g,
      _,
      m,
      p,
      S,
      M,
      v,
      b,
      A,
      w,
      C;
    (Bc || $l(),
      (this.styles = this.styles || Sf(e)),
      (C = this.styles.props),
      (this.tween = n));
    for (_ in t)
      if (_ !== "autoRound" && ((h = t[_]), !(cn[_] && uf(_, t, n, i, e, r)))) {
        if (
          ((f = typeof h),
          (g = za[_]),
          f === "function" && ((h = h.call(n, i, e, r)), (f = typeof h)),
          f === "string" && ~h.indexOf("random(") && (h = Us(h)),
          g)
        )
          g(this, e, _, h, n) && (w = 1);
        else if (_.substr(0, 2) === "--")
          ((c = (getComputedStyle(e).getPropertyValue(_) + "").trim()),
            (h += ""),
            (Ri.lastIndex = 0),
            Ri.test(c) || ((m = Bt(c)), (p = Bt(h))),
            p ? m !== p && (c = Di(e, _, c, p) + p) : m && (h += m),
            this.add(o, "setProperty", c, h, i, r, 0, 0, _),
            a.push(_),
            C.push(_, 0, o[_]));
        else if (f !== "undefined") {
          if (
            (l && _ in l
              ? ((c = typeof l[_] == "function" ? l[_].call(n, i, e, r) : l[_]),
                It(c) && ~c.indexOf("random(") && (c = Us(c)),
                Bt(c + "") ||
                  c === "auto" ||
                  (c += dn.units[_] || Bt(ii(e, _)) || ""),
                (c + "").charAt(1) === "=" && (c = ii(e, _)))
              : (c = ii(e, _)),
            (d = parseFloat(c)),
            (S = f === "string" && h.charAt(1) === "=" && h.substr(0, 2)),
            S && (h = h.substr(2)),
            (u = parseFloat(h)),
            _ in zn &&
              (_ === "autoAlpha" &&
                (d === 1 && ii(e, "visibility") === "hidden" && u && (d = 0),
                C.push("visibility", 0, o.visibility),
                bi(
                  this,
                  o,
                  "visibility",
                  d ? "inherit" : "hidden",
                  u ? "inherit" : "hidden",
                  !u,
                )),
              _ !== "scale" &&
                _ !== "transform" &&
                ((_ = zn[_]), ~_.indexOf(",") && (_ = _.split(",")[0]))),
            (M = _ in ui),
            M)
          ) {
            if (
              (this.styles.save(_),
              f === "string" &&
                h.substring(0, 6) === "var(--" &&
                ((h = Tn(e, h.substring(4, h.indexOf(")")))),
                (u = parseFloat(h))),
              v ||
                ((b = e._gsap),
                (b.renderTransform && !t.parseTransform) ||
                  Bs(e, t.parseTransform),
                (A = t.smoothOrigin !== !1 && b.smooth),
                (v = this._pt =
                  new tn(this._pt, o, _t, 0, 1, b.renderTransform, b, 0, -1)),
                (v.dep = 1)),
              _ === "scale")
            )
              ((this._pt = new tn(
                this._pt,
                b,
                "scaleY",
                b.scaleY,
                (S ? Ur(b.scaleY, S + u) : u) - b.scaleY || 0,
                Kl,
              )),
                (this._pt.u = 0),
                a.push("scaleY", _),
                (_ += "X"));
            else if (_ === "transformOrigin") {
              (C.push(nn, 0, o[nn]),
                (h = tS(h)),
                b.svg
                  ? Jl(e, h, 0, A, 0, this)
                  : ((p = parseFloat(h.split(" ")[2]) || 0),
                    p !== b.zOrigin && bi(this, b, "zOrigin", b.zOrigin, p),
                    bi(this, o, _, Ha(c), Ha(h))));
              continue;
            } else if (_ === "svgOrigin") {
              Jl(e, h, 1, A, 0, this);
              continue;
            } else if (_ in Af) {
              sS(this, b, _, d, S ? Ur(d, S + h) : h);
              continue;
            } else if (_ === "smoothOrigin") {
              bi(this, b, "smooth", b.smooth, h);
              continue;
            } else if (_ === "force3D") {
              b[_] = h;
              continue;
            } else if (_ === "transform") {
              aS(this, h, e);
              continue;
            }
          } else _ in o || (_ = Jr(_) || _);
          if (M || ((u || u === 0) && (d || d === 0) && !HM.test(h) && _ in o))
            ((m = (c + "").substr((d + "").length)),
              u || (u = 0),
              (p = Bt(h) || (_ in dn.units ? dn.units[_] : m)),
              m !== p && (d = Di(e, _, c, p)),
              (this._pt = new tn(
                this._pt,
                M ? b : o,
                _,
                d,
                (S ? Ur(d, S + u) : u) - d,
                !M && (p === "px" || _ === "zIndex") && t.autoRound !== !1
                  ? WM
                  : Kl,
              )),
              (this._pt.u = p || 0),
              m !== p && p !== "%" && ((this._pt.b = c), (this._pt.r = GM)));
          else if (_ in o) eS.call(this, e, _, c, S ? S + h : h);
          else if (_ in e) this.add(e, _, c || e[_], S ? S + h : h, i, r);
          else if (_ !== "parseTransform") {
            Rc(_, h);
            continue;
          }
          (M ||
            (_ in o
              ? C.push(_, 0, o[_])
              : typeof e[_] == "function"
                ? C.push(_, 2, e[_]())
                : C.push(_, 1, c || e[_])),
            a.push(_));
        }
      }
    w && gf(this);
  },
  render: function (e, t) {
    if (t.tween._time || !kc())
      for (var n = t._pt; n;) (n.r(e, n.d), (n = n._next));
    else t.styles.revert();
  },
  get: ii,
  aliases: zn,
  getSetter: function (e, t, n) {
    var i = zn[t];
    return (
      i && i.indexOf(",") < 0 && (t = i),
      t in ui && t !== nn && (e._gsap.x || ii(e, "x"))
        ? n && Lu === n
          ? t === "scale"
            ? jM
            : qM
          : (Lu = n || {}) && (t === "scale" ? KM : ZM)
        : e.style && !bc(e.style[t])
          ? XM
          : ~t.indexOf("-")
            ? YM
            : Oc(e, t)
    );
  },
  core: { _removeProperty: ir, _getMatrix: Hc },
};
rn.utils.checkPrefix = Jr;
rn.core.getStyleSaver = Sf;
(function (s, e, t, n) {
  var i = en(s + "," + e + "," + t, function (r) {
    ui[r] = 1;
  });
  (en(e, function (r) {
    ((dn.units[r] = "deg"), (Af[r] = 1));
  }),
    (zn[i[13]] = s + "," + e),
    en(n, function (r) {
      var a = r.split(":");
      zn[a[1]] = i[a[0]];
    }));
})(
  "x,y,z,scale,scaleX,scaleY,xPercent,yPercent",
  "rotation,rotationX,rotationY,skewX,skewY",
  "transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective",
  "0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY",
);
en(
  "x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",
  function (s) {
    dn.units[s] = "px";
  },
);
rn.registerPlugin(Cf);
var oS = rn.registerPlugin(Cf) || rn;
oS.core.Tween;
const lS = () => Xf().$device,
  bS = () => {
    const s = lS(),
      e = Kc(!1),
      t = Kc(!1);
    {
      const i = navigator.userAgent || "",
        r = navigator.platform || "",
        a = navigator.maxTouchPoints || 0,
        o = r === "MacIntel" && a > 1;
      e.value = /iPad/.test(i) || o;
      const l =
        /Safari/.test(i) &&
        !/(Chrome|CriOS|FxiOS|EdgiOS|OPiOS|OPR|EdgA|Edg)/.test(i);
      t.value = e.value && l;
    }
    const n = Yf(() => s.isTablet || e.value);
    return { ...s, isRealTablet: n, isIpadSafari: t };
  },
  Pf = (s, e, t) => {
    let n;
    switch (s) {
      case fn:
        n = new Uint8ClampedArray(e * t * 4);
        break;
      case Li:
        n = new Uint16Array(e * t * 4);
        break;
      case Ci:
        n = new Uint32Array(e * t * 4);
        break;
      case ec:
        n = new Int8Array(e * t * 4);
        break;
      case tc:
        n = new Int16Array(e * t * 4);
        break;
      case Wa:
        n = new Int32Array(e * t * 4);
        break;
      case $t:
        n = new Float32Array(e * t * 4);
        break;
      default:
        throw new Error("Unsupported data type");
    }
    return n;
  };
let va;
const cS = (s, e, t, n) => {
  if (va !== void 0) return va;
  const i = new ci(1, 1, n);
  e.setRenderTarget(i);
  const r = new Yt(new es(), new Si({ color: 16777215 }));
  (e.render(r, t), e.setRenderTarget(null));
  const a = Pf(s, i.width, i.height);
  return (
    e.readRenderTargetPixels(i, 0, 0, i.width, i.height, a),
    i.dispose(),
    r.geometry.dispose(),
    r.material.dispose(),
    (va = a[0] !== 0),
    va
  );
};
class Vc {
  constructor(e) {
    var t, n, i, r, a, o, l, c, h, u, d, f, g, _, m, p;
    ((this._rendererIsDisposable = !1),
      (this._supportsReadPixels = !0),
      (this.render = () => {
        this._renderer.setRenderTarget(this._renderTarget);
        try {
          this._renderer.render(this._scene, this._camera);
        } catch (M) {
          throw (this._renderer.setRenderTarget(null), M);
        }
        this._renderer.setRenderTarget(null);
      }),
      (this._width = e.width),
      (this._height = e.height),
      (this._type = e.type),
      (this._colorSpace = e.colorSpace));
    const S = {
      format: zt,
      depthBuffer: !1,
      stencilBuffer: !1,
      type: this._type,
      colorSpace: this._colorSpace,
      anisotropy:
        ((t = e.renderTargetOptions) === null || t === void 0
          ? void 0
          : t.anisotropy) !== void 0
          ? (n = e.renderTargetOptions) === null || n === void 0
            ? void 0
            : n.anisotropy
          : 1,
      generateMipmaps:
        ((i = e.renderTargetOptions) === null || i === void 0
          ? void 0
          : i.generateMipmaps) !== void 0
          ? (r = e.renderTargetOptions) === null || r === void 0
            ? void 0
            : r.generateMipmaps
          : !1,
      magFilter:
        ((a = e.renderTargetOptions) === null || a === void 0
          ? void 0
          : a.magFilter) !== void 0
          ? (o = e.renderTargetOptions) === null || o === void 0
            ? void 0
            : o.magFilter
          : wt,
      minFilter:
        ((l = e.renderTargetOptions) === null || l === void 0
          ? void 0
          : l.minFilter) !== void 0
          ? (c = e.renderTargetOptions) === null || c === void 0
            ? void 0
            : c.minFilter
          : wt,
      samples:
        ((h = e.renderTargetOptions) === null || h === void 0
          ? void 0
          : h.samples) !== void 0
          ? (u = e.renderTargetOptions) === null || u === void 0
            ? void 0
            : u.samples
          : void 0,
      wrapS:
        ((d = e.renderTargetOptions) === null || d === void 0
          ? void 0
          : d.wrapS) !== void 0
          ? (f = e.renderTargetOptions) === null || f === void 0
            ? void 0
            : f.wrapS
          : kt,
      wrapT:
        ((g = e.renderTargetOptions) === null || g === void 0
          ? void 0
          : g.wrapT) !== void 0
          ? (_ = e.renderTargetOptions) === null || _ === void 0
            ? void 0
            : _.wrapT
          : kt,
    };
    if (
      ((this._material = e.material),
      e.renderer
        ? (this._renderer = e.renderer)
        : ((this._renderer = Vc.instantiateRenderer()),
          (this._rendererIsDisposable = !0)),
      (this._scene = new Em()),
      (this._camera = new Xa()),
      this._camera.position.set(0, 0, 10),
      (this._camera.left = -0.5),
      (this._camera.right = 0.5),
      (this._camera.top = 0.5),
      (this._camera.bottom = -0.5),
      this._camera.updateProjectionMatrix(),
      !cS(this._type, this._renderer, this._camera, S))
    ) {
      let M;
      switch (this._type) {
        case Li:
          M = this._renderer.extensions.has("EXT_color_buffer_float")
            ? $t
            : void 0;
          break;
      }
      M !== void 0
        ? (console.warn(
            `This browser does not support reading pixels from ${this._type} RenderTargets, switching to ${$t}`,
          ),
          (this._type = M))
        : ((this._supportsReadPixels = !1),
          console.warn(
            "This browser dos not support toArray or toDataTexture, calls to those methods will result in an error thrown",
          ));
    }
    ((this._quad = new Yt(new es(), this._material)),
      this._quad.geometry.computeBoundingBox(),
      this._scene.add(this._quad),
      (this._renderTarget = new ci(this.width, this.height, S)),
      (this._renderTarget.texture.mapping =
        ((m = e.renderTargetOptions) === null || m === void 0
          ? void 0
          : m.mapping) !== void 0
          ? (p = e.renderTargetOptions) === null || p === void 0
            ? void 0
            : p.mapping
          : Br));
  }
  static instantiateRenderer() {
    const e = new Jv();
    return (e.setSize(128, 128), e);
  }
  toArray() {
    if (!this._supportsReadPixels)
      throw new Error("Can't read pixels in this browser");
    const e = Pf(this._type, this._width, this._height);
    return (
      this._renderer.readRenderTargetPixels(
        this._renderTarget,
        0,
        0,
        this._width,
        this._height,
        e,
      ),
      e
    );
  }
  toDataTexture(e) {
    const t = new fc(
      this.toArray(),
      this.width,
      this.height,
      zt,
      this._type,
      e?.mapping || Br,
      e?.wrapS || kt,
      e?.wrapT || kt,
      e?.magFilter || wt,
      e?.minFilter || wt,
      e?.anisotropy || 1,
      Rt,
    );
    return (
      (t.generateMipmaps =
        e?.generateMipmaps !== void 0 ? e?.generateMipmaps : !1),
      t
    );
  }
  disposeOnDemandRenderer() {
    (this._renderer.setRenderTarget(null),
      this._rendererIsDisposable &&
        (this._renderer.dispose(), this._renderer.forceContextLoss()));
  }
  dispose(e) {
    (this.disposeOnDemandRenderer(),
      e && this.renderTarget.dispose(),
      this.material instanceof Gn &&
        Object.values(this.material.uniforms).forEach((t) => {
          t.value instanceof ut && t.value.dispose();
        }),
      Object.values(this.material).forEach((t) => {
        t instanceof ut && t.dispose();
      }),
      this.material.dispose(),
      this._quad.geometry.dispose());
  }
  get width() {
    return this._width;
  }
  set width(e) {
    ((this._width = e), this._renderTarget.setSize(this._width, this._height));
  }
  get height() {
    return this._height;
  }
  set height(e) {
    ((this._height = e), this._renderTarget.setSize(this._width, this._height));
  }
  get renderer() {
    return this._renderer;
  }
  get renderTarget() {
    return this._renderTarget;
  }
  set renderTarget(e) {
    ((this._renderTarget = e),
      (this._width = e.width),
      (this._height = e.height));
  }
  get material() {
    return this._material;
  }
  get type() {
    return this._type;
  }
  get colorSpace() {
    return this._colorSpace;
  }
}
const hS = `
varying vec2 vUv;

void main() {
  vUv = uv;
  gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
}
`,
  uS = `
// min half float value
#define HALF_FLOAT_MIN vec3( -65504, -65504, -65504 )
// max half float value
#define HALF_FLOAT_MAX vec3( 65504, 65504, 65504 )

uniform sampler2D sdr;
uniform sampler2D gainMap;
uniform vec3 gamma;
uniform vec3 offsetHdr;
uniform vec3 offsetSdr;
uniform vec3 gainMapMin;
uniform vec3 gainMapMax;
uniform float weightFactor;

varying vec2 vUv;

void main() {
  vec3 rgb = texture2D( sdr, vUv ).rgb;
  vec3 recovery = texture2D( gainMap, vUv ).rgb;
  vec3 logRecovery = pow( recovery, gamma );
  vec3 logBoost = gainMapMin * ( 1.0 - logRecovery ) + gainMapMax * logRecovery;
  vec3 hdrColor = (rgb + offsetSdr) * exp2( logBoost * weightFactor ) - offsetHdr;
  vec3 clampedHdrColor = max( HALF_FLOAT_MIN, min( HALF_FLOAT_MAX, hdrColor ));
  gl_FragColor = vec4( clampedHdrColor , 1.0 );
}
`;
class dS extends Gn {
  constructor({
    gamma: e,
    offsetHdr: t,
    offsetSdr: n,
    gainMapMin: i,
    gainMapMax: r,
    maxDisplayBoost: a,
    hdrCapacityMin: o,
    hdrCapacityMax: l,
    sdr: c,
    gainMap: h,
  }) {
    (super({
      name: "GainMapDecoderMaterial",
      vertexShader: hS,
      fragmentShader: uS,
      uniforms: {
        sdr: { value: c },
        gainMap: { value: h },
        gamma: { value: new L(1 / e[0], 1 / e[1], 1 / e[2]) },
        offsetHdr: { value: new L().fromArray(t) },
        offsetSdr: { value: new L().fromArray(n) },
        gainMapMin: { value: new L().fromArray(i) },
        gainMapMax: { value: new L().fromArray(r) },
        weightFactor: { value: (Math.log2(a) - o) / (l - o) },
      },
      blending: ai,
      depthTest: !1,
      depthWrite: !1,
    }),
      (this._maxDisplayBoost = a),
      (this._hdrCapacityMin = o),
      (this._hdrCapacityMax = l),
      (this.needsUpdate = !0),
      (this.uniformsNeedUpdate = !0));
  }
  get sdr() {
    return this.uniforms.sdr.value;
  }
  set sdr(e) {
    this.uniforms.sdr.value = e;
  }
  get gainMap() {
    return this.uniforms.gainMap.value;
  }
  set gainMap(e) {
    this.uniforms.gainMap.value = e;
  }
  get offsetHdr() {
    return this.uniforms.offsetHdr.value.toArray();
  }
  set offsetHdr(e) {
    this.uniforms.offsetHdr.value.fromArray(e);
  }
  get offsetSdr() {
    return this.uniforms.offsetSdr.value.toArray();
  }
  set offsetSdr(e) {
    this.uniforms.offsetSdr.value.fromArray(e);
  }
  get gainMapMin() {
    return this.uniforms.gainMapMin.value.toArray();
  }
  set gainMapMin(e) {
    this.uniforms.gainMapMin.value.fromArray(e);
  }
  get gainMapMax() {
    return this.uniforms.gainMapMax.value.toArray();
  }
  set gainMapMax(e) {
    this.uniforms.gainMapMax.value.fromArray(e);
  }
  get gamma() {
    const e = this.uniforms.gamma.value;
    return [1 / e.x, 1 / e.y, 1 / e.z];
  }
  set gamma(e) {
    const t = this.uniforms.gamma.value;
    ((t.x = 1 / e[0]), (t.y = 1 / e[1]), (t.z = 1 / e[2]));
  }
  get hdrCapacityMin() {
    return this._hdrCapacityMin;
  }
  set hdrCapacityMin(e) {
    ((this._hdrCapacityMin = e), this.calculateWeight());
  }
  get hdrCapacityMax() {
    return this._hdrCapacityMax;
  }
  set hdrCapacityMax(e) {
    ((this._hdrCapacityMax = e), this.calculateWeight());
  }
  get maxDisplayBoost() {
    return this._maxDisplayBoost;
  }
  set maxDisplayBoost(e) {
    ((this._maxDisplayBoost = Math.max(1, Math.min(65504, e))),
      this.calculateWeight());
  }
  calculateWeight() {
    const e =
      (Math.log2(this._maxDisplayBoost) - this._hdrCapacityMin) /
      (this._hdrCapacityMax - this._hdrCapacityMin);
    this.uniforms.weightFactor.value = Math.max(0, Math.min(1, e));
  }
}
const Hu = (s) =>
  new Promise((e, t) => {
    const n = document.createElement("img");
    ((n.onload = () => {
      e(n);
    }),
      (n.onerror = (i) => {
        t(i);
      }),
      (n.src = URL.createObjectURL(s)));
  });
class fS extends Ii {
  constructor(e, t) {
    (super(t),
      e && (this._renderer = e),
      (this._internalLoadingManager = new vd()));
  }
  setRenderer(e) {
    return ((this._renderer = e), this);
  }
  setRenderTargetOptions(e) {
    return ((this._renderTargetOptions = e), this);
  }
  prepareQuadRenderer() {
    this._renderer ||
      console.warn(
        "WARNING: An existing WebGL Renderer was not passed to this Loader constructor or in setRenderer, the result of this Loader will need to be converted to a Data Texture with toDataTexture() before you can use it in your renderer.",
      );
    const e = new dS({
      gainMapMax: [1, 1, 1],
      gainMapMin: [0, 0, 0],
      gamma: [1, 1, 1],
      offsetHdr: [1, 1, 1],
      offsetSdr: [1, 1, 1],
      hdrCapacityMax: 1,
      hdrCapacityMin: 0,
      maxDisplayBoost: 1,
      gainMap: new ut(),
      sdr: new ut(),
    });
    return new Vc({
      width: 16,
      height: 16,
      type: Li,
      colorSpace: Rt,
      material: e,
      renderer: this._renderer,
      renderTargetOptions: this._renderTargetOptions,
    });
  }
  async render(e, t, n, i) {
    const r = i ? new Blob([i], { type: "image/jpeg" }) : void 0,
      a = new Blob([n], { type: "image/jpeg" });
    let o,
      l,
      c = !1;
    if (typeof createImageBitmap > "u") {
      const d = await Promise.all([r ? Hu(r) : Promise.resolve(void 0), Hu(a)]);
      ((l = d[0]), (o = d[1]), (c = !0));
    } else {
      const d = await Promise.all([
        r
          ? createImageBitmap(r, { imageOrientation: "flipY" })
          : Promise.resolve(void 0),
        createImageBitmap(a, { imageOrientation: "flipY" }),
      ]);
      ((l = d[0]), (o = d[1]));
    }
    const h = new ut(
      l || new ImageData(2, 2),
      Br,
      kt,
      kt,
      wt,
      th,
      zt,
      fn,
      1,
      Rt,
    );
    ((h.flipY = c), (h.needsUpdate = !0));
    const u = new ut(o, Br, kt, kt, wt, th, zt, fn, 1, St);
    ((u.flipY = c),
      (u.needsUpdate = !0),
      (e.width = o.width),
      (e.height = o.height),
      (e.material.gainMap = h),
      (e.material.sdr = u),
      (e.material.gainMapMin = t.gainMapMin),
      (e.material.gainMapMax = t.gainMapMax),
      (e.material.offsetHdr = t.offsetHdr),
      (e.material.offsetSdr = t.offsetSdr),
      (e.material.gamma = t.gamma),
      (e.material.hdrCapacityMin = t.hdrCapacityMin),
      (e.material.hdrCapacityMax = t.hdrCapacityMax),
      (e.material.maxDisplayBoost = Math.pow(2, t.hdrCapacityMax)),
      (e.material.needsUpdate = !0),
      e.render());
  }
}
class AS extends fS {
  load([e, t, n], i, r, a) {
    const o = this.prepareQuadRenderer();
    let l, c, h;
    const u = async () => {
      if (l && c && h) {
        try {
          await this.render(o, h, l, c);
        } catch (x) {
          (this.manager.itemError(e),
            this.manager.itemError(t),
            this.manager.itemError(n),
            typeof a == "function" && a(x),
            o.disposeOnDemandRenderer());
          return;
        }
        (typeof i == "function" && i(o),
          this.manager.itemEnd(e),
          this.manager.itemEnd(t),
          this.manager.itemEnd(n),
          o.disposeOnDemandRenderer());
      }
    };
    let d = !0,
      f = 0,
      g = 0,
      _ = !0,
      m = 0,
      p = 0,
      S = !0,
      M = 0,
      v = 0;
    const b = () => {
      if (typeof r == "function") {
        const x = f + m + M,
          E = g + p + v,
          P = d && _ && S;
        r(
          new ProgressEvent("progress", {
            lengthComputable: P,
            loaded: E,
            total: x,
          }),
        );
      }
    };
    (this.manager.itemStart(e),
      this.manager.itemStart(t),
      this.manager.itemStart(n));
    const A = new Ji(this._internalLoadingManager);
    (A.setResponseType("arraybuffer"),
      A.setRequestHeader(this.requestHeader),
      A.setPath(this.path),
      A.setWithCredentials(this.withCredentials),
      A.load(
        e,
        async (x) => {
          if (typeof x == "string") throw new Error("Invalid sdr buffer");
          ((l = x), await u());
        },
        (x) => {
          ((d = x.lengthComputable), (g = x.loaded), (f = x.total), b());
        },
        (x) => {
          (this.manager.itemError(e), typeof a == "function" && a(x));
        },
      ));
    const w = new Ji(this._internalLoadingManager);
    (w.setResponseType("arraybuffer"),
      w.setRequestHeader(this.requestHeader),
      w.setPath(this.path),
      w.setWithCredentials(this.withCredentials),
      w.load(
        t,
        async (x) => {
          if (typeof x == "string") throw new Error("Invalid gainmap buffer");
          ((c = x), await u());
        },
        (x) => {
          ((_ = x.lengthComputable), (p = x.loaded), (m = x.total), b());
        },
        (x) => {
          (this.manager.itemError(t), typeof a == "function" && a(x));
        },
      ));
    const C = new Ji(this._internalLoadingManager);
    return (
      C.setRequestHeader(this.requestHeader),
      C.setPath(this.path),
      C.setWithCredentials(this.withCredentials),
      C.load(
        n,
        async (x) => {
          if (typeof x != "string") throw new Error("Invalid metadata string");
          ((h = JSON.parse(x)), await u());
        },
        (x) => {
          ((S = x.lengthComputable), (v = x.loaded), (M = x.total), b());
        },
        (x) => {
          (this.manager.itemError(n), typeof a == "function" && a(x));
        },
      ),
      o
    );
  }
}
function pS(s, e, t) {
  return s.split(e).join(t);
}
const mS = Le.meshphong_frag.slice(
    0,
    Le.meshphong_frag.indexOf("void main() {"),
  ),
  _S = Le.meshphong_frag.slice(Le.meshphong_frag.indexOf("void main() {")),
  wS = {
    uniforms: cd.merge([
      Cn.phong.uniforms,
      {
        thicknessMap: { value: null },
        thicknessColor: { value: new Ie(16777215) },
        thicknessDistortion: { value: 0.1 },
        thicknessAmbient: { value: 0 },
        thicknessAttenuation: { value: 0.1 },
        thicknessPower: { value: 2 },
        thicknessScale: { value: 10 },
      },
    ]),
    vertexShader: ["#define USE_UV", Le.meshphong_vert].join(`
`),
    fragmentShader: [
      "#define USE_UV",
      "#define SUBSURFACE",
      mS,
      "uniform sampler2D thicknessMap;",
      "uniform float thicknessPower;",
      "uniform float thicknessScale;",
      "uniform float thicknessDistortion;",
      "uniform float thicknessAmbient;",
      "uniform float thicknessAttenuation;",
      "uniform vec3 thicknessColor;",
      "void RE_Direct_Scattering(const in IncidentLight directLight, const in vec2 uv, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, inout ReflectedLight reflectedLight) {",
      "	vec3 thickness = thicknessColor * texture2D(thicknessMap, uv).r;",
      "	vec3 scatteringHalf = normalize(directLight.direction + (geometryNormal * thicknessDistortion));",
      "	float scatteringDot = pow(saturate(dot(geometryViewDir, -scatteringHalf)), thicknessPower) * thicknessScale;",
      "	vec3 scatteringIllu = (scatteringDot + thicknessAmbient) * thickness;",
      "	reflectedLight.directDiffuse += scatteringIllu * thicknessAttenuation * directLight.color;",
      "}",
      _S.replace(
        "#include <lights_fragment_begin>",
        pS(
          Le.lights_fragment_begin,
          "RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",
          [
            "RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );",
            "#if defined( SUBSURFACE ) && defined( USE_UV )",
            " RE_Direct_Scattering(directLight, vUv, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, reflectedLight);",
            "#endif",
          ].join(`
`),
        ),
      ),
    ].join(`
`),
  };
class RS extends dt {
  constructor(e = document.createElement("div")) {
    (super(),
      (this.isCSS2DObject = !0),
      (this.element = e),
      (this.element.style.position = "absolute"),
      (this.element.style.userSelect = "none"),
      this.element.setAttribute("draggable", !1),
      (this.center = new Re(0.5, 0.5)),
      this.addEventListener("removed", function () {
        this.traverse(function (t) {
          t.element instanceof t.element.ownerDocument.defaultView.Element &&
            t.element.parentNode !== null &&
            t.element.remove();
        });
      }));
  }
  copy(e, t) {
    return (
      super.copy(e, t),
      (this.element = e.element.cloneNode(!0)),
      (this.center = e.center),
      this
    );
  }
}
const Er = new L(),
  Vu = new Oe(),
  Gu = new Oe(),
  Wu = new L(),
  Xu = new L();
class CS {
  constructor(e = {}) {
    const t = this;
    let n, i, r, a;
    const o = { objects: new WeakMap() },
      l = e.element !== void 0 ? e.element : document.createElement("div");
    ((l.style.overflow = "hidden"),
      (this.domElement = l),
      (this.getSize = function () {
        return { width: n, height: i };
      }),
      (this.render = function (g, _) {
        (g.matrixWorldAutoUpdate === !0 && g.updateMatrixWorld(),
          _.parent === null &&
            _.matrixWorldAutoUpdate === !0 &&
            _.updateMatrixWorld(),
          Vu.copy(_.matrixWorldInverse),
          Gu.multiplyMatrices(_.projectionMatrix, Vu),
          h(g, g, _),
          f(g));
      }),
      (this.setSize = function (g, _) {
        ((n = g),
          (i = _),
          (r = n / 2),
          (a = i / 2),
          (l.style.width = g + "px"),
          (l.style.height = _ + "px"));
      }));
    function c(g) {
      g.isCSS2DObject && (g.element.style.display = "none");
      for (let _ = 0, m = g.children.length; _ < m; _++) c(g.children[_]);
    }
    function h(g, _, m) {
      if (g.visible === !1) {
        c(g);
        return;
      }
      if (g.isCSS2DObject) {
        (Er.setFromMatrixPosition(g.matrixWorld), Er.applyMatrix4(Gu));
        const p = Er.z >= -1 && Er.z <= 1 && g.layers.test(m.layers) === !0,
          S = g.element;
        ((S.style.display = p === !0 ? "" : "none"),
          p === !0 &&
            (g.onBeforeRender(t, _, m),
            (S.style.transform =
              "translate(" +
              -100 * g.center.x +
              "%," +
              -100 * g.center.y +
              "%)translate(" +
              (Er.x * r + r) +
              "px," +
              (-Er.y * a + a) +
              "px)"),
            S.parentNode !== l && l.appendChild(S),
            g.onAfterRender(t, _, m)));
        const M = { distanceToCameraSquared: u(m, g) };
        o.objects.set(g, M);
      }
      for (let p = 0, S = g.children.length; p < S; p++) h(g.children[p], _, m);
    }
    function u(g, _) {
      return (
        Wu.setFromMatrixPosition(g.matrixWorld),
        Xu.setFromMatrixPosition(_.matrixWorld),
        Wu.distanceToSquared(Xu)
      );
    }
    function d(g) {
      const _ = [];
      return (
        g.traverseVisible(function (m) {
          m.isCSS2DObject && _.push(m);
        }),
        _
      );
    }
    function f(g) {
      const _ = d(g).sort(function (p, S) {
          if (p.renderOrder !== S.renderOrder)
            return S.renderOrder - p.renderOrder;
          const M = o.objects.get(p).distanceToCameraSquared,
            v = o.objects.get(S).distanceToCameraSquared;
          return M - v;
        }),
        m = _.length;
      for (let p = 0, S = _.length; p < S; p++)
        _[p].element.style.zIndex = m - p;
    }
  }
}
const PS = Va("/images/hotspot_vfx.png"),
  DS = Va("/images/svg/spotArrow.svg"),
  LS = Va("/images/svg/female.svg"),
  IS = Va("/images/svg/male.svg");
export {
  rr as $,
  Jo as A,
  tl as B,
  yS as C,
  TS as D,
  nl as E,
  wp as F,
  SS as G,
  vd as H,
  ut as I,
  qt as J,
  hd as K,
  wt as L,
  nd as M,
  Ai as N,
  ES as O,
  Zt as P,
  Yt as Q,
  Hr as R,
  Em as S,
  $m as T,
  cd as U,
  L as V,
  Jv as W,
  Jt as X,
  Fn as Y,
  li as Z,
  PS as _,
  St as a,
  Rt as a0,
  Mi as a1,
  Fm as a2,
  ai as a3,
  $o as a4,
  Ql as a5,
  In as a6,
  bn as a7,
  Ut as a8,
  el as a9,
  Qo as aa,
  Fr as ab,
  Zo as ac,
  Ko as ad,
  Ke as ae,
  Li as af,
  es as ag,
  _d as ah,
  Zi as ai,
  MS as aj,
  yi as ak,
  LS as al,
  IS as am,
  xS as an,
  Tp as ao,
  Xh as b,
  AS as c,
  t_ as d,
  wS as e,
  Ie as f,
  oS as g,
  Gn as h,
  Yn as i,
  Re as j,
  Si as k,
  DS as l,
  lS as m,
  CS as n,
  RS as o,
  vS as p,
  fn as q,
  md as r,
  Rs as s,
  As as t,
  bS as u,
  Ci as v,
  ci as w,
  yd as x,
  ri as y,
  Rp as z,
};
