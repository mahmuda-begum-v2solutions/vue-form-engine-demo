/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Le(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const n of e.split(",")) t[n] = 1;
  return (n) => n in t;
}
const B = Object.freeze({}), mt = Object.freeze([]), te = () => {
}, Fo = () => !1, Ut = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), rn = (e) => e.startsWith("onUpdate:"), q = Object.assign, os = (e, t) => {
  const n = e.indexOf(t);
  n > -1 && e.splice(n, 1);
}, jo = Object.prototype.hasOwnProperty, N = (e, t) => jo.call(e, t), P = Array.isArray, ot = (e) => bn(e) === "[object Map]", hi = (e) => bn(e) === "[object Set]", I = (e) => typeof e == "function", G = (e) => typeof e == "string", et = (e) => typeof e == "symbol", k = (e) => e !== null && typeof e == "object", rs = (e) => (k(e) || I(e)) && I(e.then) && I(e.catch), gi = Object.prototype.toString, bn = (e) => gi.call(e), ls = (e) => bn(e).slice(8, -1), yn = (e) => bn(e) === "[object Object]", cs = (e) => G(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, It = /* @__PURE__ */ Le(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Do = /* @__PURE__ */ Le(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), vn = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (n) => t[n] || (t[n] = e(n));
}, No = /-(\w)/g, ce = vn(
  (e) => e.replace(No, (t, n) => n ? n.toUpperCase() : "")
), Ho = /\B([A-Z])/g, he = vn(
  (e) => e.replace(Ho, "-$1").toLowerCase()
), wn = vn((e) => e.charAt(0).toUpperCase() + e.slice(1)), st = vn(
  (e) => e ? `on${wn(e)}` : ""
), rt = (e, t) => !Object.is(e, t), Tt = (e, ...t) => {
  for (let n = 0; n < e.length; n++)
    e[n](...t);
}, ln = (e, t, n, s = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: n
  });
}, Vo = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, Is = (e) => {
  const t = G(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let Rs;
const Bt = () => Rs || (Rs = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function fs(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++) {
      const s = e[n], i = G(s) ? Wo(s) : fs(s);
      if (i)
        for (const o in i)
          t[o] = i[o];
    }
    return t;
  } else if (G(e) || k(e))
    return e;
}
const Lo = /;(?![^(]*\))/g, Uo = /:([^]+)/, Bo = /\/\*[^]*?\*\//g;
function Wo(e) {
  const t = {};
  return e.replace(Bo, "").split(Lo).forEach((n) => {
    if (n) {
      const s = n.split(Uo);
      s.length > 1 && (t[s[0].trim()] = s[1].trim());
    }
  }), t;
}
function us(e) {
  let t = "";
  if (G(e))
    t = e;
  else if (P(e))
    for (let n = 0; n < e.length; n++) {
      const s = us(e[n]);
      s && (t += s + " ");
    }
  else if (k(e))
    for (const n in e)
      e[n] && (t += n + " ");
  return t.trim();
}
const Ko = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ko = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", qo = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", Go = /* @__PURE__ */ Le(Ko), Jo = /* @__PURE__ */ Le(ko), Yo = /* @__PURE__ */ Le(qo), zo = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Xo = /* @__PURE__ */ Le(zo);
function mi(e) {
  return !!e || e === "";
}
const _i = (e) => !!(e && e.__v_isRef === !0), bi = (e) => G(e) ? e : e == null ? "" : P(e) || k(e) && (e.toString === gi || !I(e.toString)) ? _i(e) ? bi(e.value) : JSON.stringify(e, yi, 2) : String(e), yi = (e, t) => _i(t) ? yi(e, t.value) : ot(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (n, [s, i], o) => (n[Rn(s, o) + " =>"] = i, n),
    {}
  )
} : hi(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((n) => Rn(n))
} : et(t) ? Rn(t) : k(t) && !P(t) && !yn(t) ? String(t) : t, Rn = (e, t = "") => {
  var n;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    et(e) ? `Symbol(${(n = e.description) != null ? n : t})` : e
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function je(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let de;
class Zo {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = de, !t && de && (this.index = (de.scopes || (de.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].pause();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, n;
      if (this.scopes)
        for (t = 0, n = this.scopes.length; t < n; t++)
          this.scopes[t].resume();
      for (t = 0, n = this.effects.length; t < n; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const n = de;
      try {
        return de = this, t();
      } finally {
        de = n;
      }
    } else
      je("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    de = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    de = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let n, s;
      for (n = 0, s = this.effects.length; n < s; n++)
        this.effects[n].stop();
      for (this.effects.length = 0, n = 0, s = this.cleanups.length; n < s; n++)
        this.cleanups[n]();
      if (this.cleanups.length = 0, this.scopes) {
        for (n = 0, s = this.scopes.length; n < s; n++)
          this.scopes[n].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const i = this.parent.scopes.pop();
        i && i !== this && (this.parent.scopes[this.index] = i, i.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Qo() {
  return de;
}
let V;
const Mn = /* @__PURE__ */ new WeakSet();
class vi {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, de && de.active && de.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Mn.has(this) && (Mn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || xi(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ms(this), Si(this);
    const t = V, n = xe;
    V = this, xe = !0;
    try {
      return this.fn();
    } finally {
      V !== this && je(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), Ci(this), V = t, xe = n, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        ps(t);
      this.deps = this.depsTail = void 0, Ms(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Mn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Wn(this) && this.run();
  }
  get dirty() {
    return Wn(this);
  }
}
let wi = 0, Rt, Mt;
function xi(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Mt, Mt = e;
    return;
  }
  e.next = Rt, Rt = e;
}
function as() {
  wi++;
}
function ds() {
  if (--wi > 0)
    return;
  if (Mt) {
    let t = Mt;
    for (Mt = void 0; t; ) {
      const n = t.next;
      t.next = void 0, t.flags &= -9, t = n;
    }
  }
  let e;
  for (; Rt; ) {
    let t = Rt;
    for (Rt = void 0; t; ) {
      const n = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (s) {
          e || (e = s);
        }
      t = n;
    }
  }
  if (e) throw e;
}
function Si(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function Ci(e) {
  let t, n = e.depsTail, s = n;
  for (; s; ) {
    const i = s.prevDep;
    s.version === -1 ? (s === n && (n = i), ps(s), er(s)) : t = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = i;
  }
  e.deps = t, e.depsTail = n;
}
function Wn(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (Ti(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function Ti(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Dt))
    return;
  e.globalVersion = Dt;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !Wn(e)) {
    e.flags &= -3;
    return;
  }
  const n = V, s = xe;
  V = e, xe = !0;
  try {
    Si(e);
    const i = e.fn(e._value);
    (t.version === 0 || rt(i, e._value)) && (e._value = i, t.version++);
  } catch (i) {
    throw t.version++, i;
  } finally {
    V = n, xe = s, Ci(e), e.flags &= -3;
  }
}
function ps(e, t = !1) {
  const { dep: n, prevSub: s, nextSub: i } = e;
  if (s && (s.nextSub = i, e.prevSub = void 0), i && (i.prevSub = s, e.nextSub = void 0), n.subsHead === e && (n.subsHead = i), n.subs === e && (n.subs = s, !s && n.computed)) {
    n.computed.flags &= -5;
    for (let o = n.computed.deps; o; o = o.nextDep)
      ps(o, !0);
  }
  !t && !--n.sc && n.map && n.map.delete(n.key);
}
function er(e) {
  const { prevDep: t, nextDep: n } = e;
  t && (t.nextDep = n, e.prevDep = void 0), n && (n.prevDep = t, e.nextDep = void 0);
}
let xe = !0;
const Oi = [];
function Ue() {
  Oi.push(xe), xe = !1;
}
function Be() {
  const e = Oi.pop();
  xe = e === void 0 ? !0 : e;
}
function Ms(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const n = V;
    V = void 0;
    try {
      t();
    } finally {
      V = n;
    }
  }
}
let Dt = 0;
class tr {
  constructor(t, n) {
    this.sub = t, this.dep = n, this.version = n.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ei {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.subsHead = void 0;
  }
  track(t) {
    if (!V || !xe || V === this.computed)
      return;
    let n = this.activeLink;
    if (n === void 0 || n.sub !== V)
      n = this.activeLink = new tr(V, this), V.deps ? (n.prevDep = V.depsTail, V.depsTail.nextDep = n, V.depsTail = n) : V.deps = V.depsTail = n, Pi(n);
    else if (n.version === -1 && (n.version = this.version, n.nextDep)) {
      const s = n.nextDep;
      s.prevDep = n.prevDep, n.prevDep && (n.prevDep.nextDep = s), n.prevDep = V.depsTail, n.nextDep = void 0, V.depsTail.nextDep = n, V.depsTail = n, V.deps === n && (V.deps = s);
    }
    return V.onTrack && V.onTrack(
      q(
        {
          effect: V
        },
        t
      )
    ), n;
  }
  trigger(t) {
    this.version++, Dt++, this.notify(t);
  }
  notify(t) {
    as();
    try {
      for (let n = this.subsHead; n; n = n.nextSub)
        n.sub.onTrigger && !(n.sub.flags & 8) && n.sub.onTrigger(
          q(
            {
              effect: n.sub
            },
            t
          )
        );
      for (let n = this.subs; n; n = n.prevSub)
        n.sub.notify() && n.sub.dep.notify();
    } finally {
      ds();
    }
  }
}
function Pi(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let s = t.deps; s; s = s.nextDep)
        Pi(s);
    }
    const n = e.dep.subs;
    n !== e && (e.prevSub = n, n && (n.nextSub = e)), e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const Kn = /* @__PURE__ */ new WeakMap(), lt = Symbol(
  "Object iterate"
), kn = Symbol(
  "Map keys iterate"
), Nt = Symbol(
  "Array iterate"
);
function X(e, t, n) {
  if (xe && V) {
    let s = Kn.get(e);
    s || Kn.set(e, s = /* @__PURE__ */ new Map());
    let i = s.get(n);
    i || (s.set(n, i = new Ei()), i.map = s, i.key = n), i.track({
      target: e,
      type: t,
      key: n
    });
  }
}
function Ie(e, t, n, s, i, o) {
  const r = Kn.get(e);
  if (!r) {
    Dt++;
    return;
  }
  const l = (u) => {
    u && u.trigger({
      target: e,
      type: t,
      key: n,
      newValue: s,
      oldValue: i,
      oldTarget: o
    });
  };
  if (as(), t === "clear")
    r.forEach(l);
  else {
    const u = P(e), p = u && cs(n);
    if (u && n === "length") {
      const d = Number(s);
      r.forEach((a, g) => {
        (g === "length" || g === Nt || !et(g) && g >= d) && l(a);
      });
    } else
      switch ((n !== void 0 || r.has(void 0)) && l(r.get(n)), p && l(r.get(Nt)), t) {
        case "add":
          u ? p && l(r.get("length")) : (l(r.get(lt)), ot(e) && l(r.get(kn)));
          break;
        case "delete":
          u || (l(r.get(lt)), ot(e) && l(r.get(kn)));
          break;
        case "set":
          ot(e) && l(r.get(lt));
          break;
      }
  }
  ds();
}
function dt(e) {
  const t = F(e);
  return t === e ? t : (X(t, "iterate", Nt), _e(e) ? t : t.map(pe));
}
function hs(e) {
  return X(e = F(e), "iterate", Nt), e;
}
const nr = {
  __proto__: null,
  [Symbol.iterator]() {
    return Fn(this, Symbol.iterator, pe);
  },
  concat(...e) {
    return dt(this).concat(
      ...e.map((t) => P(t) ? dt(t) : t)
    );
  },
  entries() {
    return Fn(this, "entries", (e) => (e[1] = pe(e[1]), e));
  },
  every(e, t) {
    return He(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return He(this, "filter", e, t, (n) => n.map(pe), arguments);
  },
  find(e, t) {
    return He(this, "find", e, t, pe, arguments);
  },
  findIndex(e, t) {
    return He(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return He(this, "findLast", e, t, pe, arguments);
  },
  findLastIndex(e, t) {
    return He(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return He(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return jn(this, "includes", e);
  },
  indexOf(...e) {
    return jn(this, "indexOf", e);
  },
  join(e) {
    return dt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return jn(this, "lastIndexOf", e);
  },
  map(e, t) {
    return He(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Ot(this, "pop");
  },
  push(...e) {
    return Ot(this, "push", e);
  },
  reduce(e, ...t) {
    return Fs(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return Fs(this, "reduceRight", e, t);
  },
  shift() {
    return Ot(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return He(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Ot(this, "splice", e);
  },
  toReversed() {
    return dt(this).toReversed();
  },
  toSorted(e) {
    return dt(this).toSorted(e);
  },
  toSpliced(...e) {
    return dt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Ot(this, "unshift", e);
  },
  values() {
    return Fn(this, "values", pe);
  }
};
function Fn(e, t, n) {
  const s = hs(e), i = s[t]();
  return s !== e && !_e(e) && (i._next = i.next, i.next = () => {
    const o = i._next();
    return o.value && (o.value = n(o.value)), o;
  }), i;
}
const sr = Array.prototype;
function He(e, t, n, s, i, o) {
  const r = hs(e), l = r !== e && !_e(e), u = r[t];
  if (u !== sr[t]) {
    const a = u.apply(e, o);
    return l ? pe(a) : a;
  }
  let p = n;
  r !== e && (l ? p = function(a, g) {
    return n.call(this, pe(a), g, e);
  } : n.length > 2 && (p = function(a, g) {
    return n.call(this, a, g, e);
  }));
  const d = u.call(r, p, s);
  return l && i ? i(d) : d;
}
function Fs(e, t, n, s) {
  const i = hs(e);
  let o = n;
  return i !== e && (_e(e) ? n.length > 3 && (o = function(r, l, u) {
    return n.call(this, r, l, u, e);
  }) : o = function(r, l, u) {
    return n.call(this, r, pe(l), u, e);
  }), i[t](o, ...s);
}
function jn(e, t, n) {
  const s = F(e);
  X(s, "iterate", Nt);
  const i = s[t](...n);
  return (i === -1 || i === !1) && cn(n[0]) ? (n[0] = F(n[0]), s[t](...n)) : i;
}
function Ot(e, t, n = []) {
  Ue(), as();
  const s = F(e)[t].apply(e, n);
  return ds(), Be(), s;
}
const ir = /* @__PURE__ */ Le("__proto__,__v_isRef,__isVue"), Ai = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(et)
);
function or(e) {
  et(e) || (e = String(e));
  const t = F(this);
  return X(t, "has", e), t.hasOwnProperty(e);
}
class $i {
  constructor(t = !1, n = !1) {
    this._isReadonly = t, this._isShallow = n;
  }
  get(t, n, s) {
    if (n === "__v_skip") return t.__v_skip;
    const i = this._isReadonly, o = this._isShallow;
    if (n === "__v_isReactive")
      return !i;
    if (n === "__v_isReadonly")
      return i;
    if (n === "__v_isShallow")
      return o;
    if (n === "__v_raw")
      return s === (i ? o ? Di : ji : o ? Fi : Mi).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(s) ? t : void 0;
    const r = P(t);
    if (!i) {
      let u;
      if (r && (u = nr[n]))
        return u;
      if (n === "hasOwnProperty")
        return or;
    }
    const l = Reflect.get(
      t,
      n,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      Y(t) ? t : s
    );
    return (et(n) ? Ai.has(n) : ir(n)) || (i || X(t, "get", n), o) ? l : Y(l) ? r && cs(n) ? l : l.value : k(l) ? i ? Ni(l) : gs(l) : l;
  }
}
class Ii extends $i {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, n, s, i) {
    let o = t[n];
    if (!this._isShallow) {
      const u = Ze(o);
      if (!_e(s) && !Ze(s) && (o = F(o), s = F(s)), !P(t) && Y(o) && !Y(s))
        return u ? !1 : (o.value = s, !0);
    }
    const r = P(t) && cs(n) ? Number(n) < t.length : N(t, n), l = Reflect.set(
      t,
      n,
      s,
      Y(t) ? t : i
    );
    return t === F(i) && (r ? rt(s, o) && Ie(t, "set", n, s, o) : Ie(t, "add", n, s)), l;
  }
  deleteProperty(t, n) {
    const s = N(t, n), i = t[n], o = Reflect.deleteProperty(t, n);
    return o && s && Ie(t, "delete", n, void 0, i), o;
  }
  has(t, n) {
    const s = Reflect.has(t, n);
    return (!et(n) || !Ai.has(n)) && X(t, "has", n), s;
  }
  ownKeys(t) {
    return X(
      t,
      "iterate",
      P(t) ? "length" : lt
    ), Reflect.ownKeys(t);
  }
}
class Ri extends $i {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, n) {
    return je(
      `Set operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, n) {
    return je(
      `Delete operation on key "${String(n)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const rr = /* @__PURE__ */ new Ii(), lr = /* @__PURE__ */ new Ri(), cr = /* @__PURE__ */ new Ii(!0), fr = /* @__PURE__ */ new Ri(!0), qn = (e) => e, Yt = (e) => Reflect.getPrototypeOf(e);
function ur(e, t, n) {
  return function(...s) {
    const i = this.__v_raw, o = F(i), r = ot(o), l = e === "entries" || e === Symbol.iterator && r, u = e === "keys" && r, p = i[e](...s), d = n ? qn : t ? Gn : pe;
    return !t && X(
      o,
      "iterate",
      u ? kn : lt
    ), {
      // iterator protocol
      next() {
        const { value: a, done: g } = p.next();
        return g ? { value: a, done: g } : {
          value: l ? [d(a[0]), d(a[1])] : d(a),
          done: g
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function zt(e) {
  return function(...t) {
    {
      const n = t[0] ? `on key "${t[0]}" ` : "";
      je(
        `${wn(e)} operation ${n}failed: target is readonly.`,
        F(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function ar(e, t) {
  const n = {
    get(i) {
      const o = this.__v_raw, r = F(o), l = F(i);
      e || (rt(i, l) && X(r, "get", i), X(r, "get", l));
      const { has: u } = Yt(r), p = t ? qn : e ? Gn : pe;
      if (u.call(r, i))
        return p(o.get(i));
      if (u.call(r, l))
        return p(o.get(l));
      o !== r && o.get(i);
    },
    get size() {
      const i = this.__v_raw;
      return !e && X(F(i), "iterate", lt), Reflect.get(i, "size", i);
    },
    has(i) {
      const o = this.__v_raw, r = F(o), l = F(i);
      return e || (rt(i, l) && X(r, "has", i), X(r, "has", l)), i === l ? o.has(i) : o.has(i) || o.has(l);
    },
    forEach(i, o) {
      const r = this, l = r.__v_raw, u = F(l), p = t ? qn : e ? Gn : pe;
      return !e && X(u, "iterate", lt), l.forEach((d, a) => i.call(o, p(d), p(a), r));
    }
  };
  return q(
    n,
    e ? {
      add: zt("add"),
      set: zt("set"),
      delete: zt("delete"),
      clear: zt("clear")
    } : {
      add(i) {
        !t && !_e(i) && !Ze(i) && (i = F(i));
        const o = F(this);
        return Yt(o).has.call(o, i) || (o.add(i), Ie(o, "add", i, i)), this;
      },
      set(i, o) {
        !t && !_e(o) && !Ze(o) && (o = F(o));
        const r = F(this), { has: l, get: u } = Yt(r);
        let p = l.call(r, i);
        p ? js(r, l, i) : (i = F(i), p = l.call(r, i));
        const d = u.call(r, i);
        return r.set(i, o), p ? rt(o, d) && Ie(r, "set", i, o, d) : Ie(r, "add", i, o), this;
      },
      delete(i) {
        const o = F(this), { has: r, get: l } = Yt(o);
        let u = r.call(o, i);
        u ? js(o, r, i) : (i = F(i), u = r.call(o, i));
        const p = l ? l.call(o, i) : void 0, d = o.delete(i);
        return u && Ie(o, "delete", i, void 0, p), d;
      },
      clear() {
        const i = F(this), o = i.size !== 0, r = ot(i) ? new Map(i) : new Set(i), l = i.clear();
        return o && Ie(
          i,
          "clear",
          void 0,
          void 0,
          r
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((i) => {
    n[i] = ur(i, e, t);
  }), n;
}
function xn(e, t) {
  const n = ar(e, t);
  return (s, i, o) => i === "__v_isReactive" ? !e : i === "__v_isReadonly" ? e : i === "__v_raw" ? s : Reflect.get(
    N(n, i) && i in s ? n : s,
    i,
    o
  );
}
const dr = {
  get: /* @__PURE__ */ xn(!1, !1)
}, pr = {
  get: /* @__PURE__ */ xn(!1, !0)
}, hr = {
  get: /* @__PURE__ */ xn(!0, !1)
}, gr = {
  get: /* @__PURE__ */ xn(!0, !0)
};
function js(e, t, n) {
  const s = F(n);
  if (s !== n && t.call(e, s)) {
    const i = ls(e);
    je(
      `Reactive ${i} contains both the raw and reactive versions of the same object${i === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const Mi = /* @__PURE__ */ new WeakMap(), Fi = /* @__PURE__ */ new WeakMap(), ji = /* @__PURE__ */ new WeakMap(), Di = /* @__PURE__ */ new WeakMap();
function mr(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
function _r(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : mr(ls(e));
}
function gs(e) {
  return Ze(e) ? e : Sn(
    e,
    !1,
    rr,
    dr,
    Mi
  );
}
function br(e) {
  return Sn(
    e,
    !1,
    cr,
    pr,
    Fi
  );
}
function Ni(e) {
  return Sn(
    e,
    !0,
    lr,
    hr,
    ji
  );
}
function Me(e) {
  return Sn(
    e,
    !0,
    fr,
    gr,
    Di
  );
}
function Sn(e, t, n, s, i) {
  if (!k(e))
    return je(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const o = i.get(e);
  if (o)
    return o;
  const r = _r(e);
  if (r === 0)
    return e;
  const l = new Proxy(
    e,
    r === 2 ? s : n
  );
  return i.set(e, l), l;
}
function _t(e) {
  return Ze(e) ? _t(e.__v_raw) : !!(e && e.__v_isReactive);
}
function Ze(e) {
  return !!(e && e.__v_isReadonly);
}
function _e(e) {
  return !!(e && e.__v_isShallow);
}
function cn(e) {
  return e ? !!e.__v_raw : !1;
}
function F(e) {
  const t = e && e.__v_raw;
  return t ? F(t) : e;
}
function yr(e) {
  return !N(e, "__v_skip") && Object.isExtensible(e) && ln(e, "__v_skip", !0), e;
}
const pe = (e) => k(e) ? gs(e) : e, Gn = (e) => k(e) ? Ni(e) : e;
function Y(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Hi(e) {
  return Y(e) ? e.value : e;
}
const vr = {
  get: (e, t, n) => t === "__v_raw" ? e : Hi(Reflect.get(e, t, n)),
  set: (e, t, n, s) => {
    const i = e[t];
    return Y(i) && !Y(n) ? (i.value = n, !0) : Reflect.set(e, t, n, s);
  }
};
function Vi(e) {
  return _t(e) ? e : new Proxy(e, vr);
}
class wr {
  constructor(t, n, s) {
    this.fn = t, this.setter = n, this._value = void 0, this.dep = new Ei(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Dt - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !n, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    V !== this)
      return xi(this, !0), !0;
  }
  get value() {
    const t = this.dep.track({
      target: this,
      type: "get",
      key: "value"
    });
    return Ti(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : je("Write operation failed: computed value is readonly");
  }
}
function xr(e, t, n = !1) {
  let s, i;
  return I(e) ? s = e : (s = e.get, i = e.set), new wr(s, i, n);
}
const Xt = {}, fn = /* @__PURE__ */ new WeakMap();
let it;
function Sr(e, t = !1, n = it) {
  if (n) {
    let s = fn.get(n);
    s || fn.set(n, s = []), s.push(e);
  } else t || je(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function Cr(e, t, n = B) {
  const { immediate: s, deep: i, once: o, scheduler: r, augmentJob: l, call: u } = n, p = (E) => {
    (n.onWarn || je)(
      "Invalid watch source: ",
      E,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (E) => i ? E : _e(E) || i === !1 || i === 0 ? Ye(E, 1) : Ye(E);
  let a, g, C, A, M = !1, Q = !1;
  if (Y(e) ? (g = () => e.value, M = _e(e)) : _t(e) ? (g = () => d(e), M = !0) : P(e) ? (Q = !0, M = e.some((E) => _t(E) || _e(E)), g = () => e.map((E) => {
    if (Y(E))
      return E.value;
    if (_t(E))
      return d(E);
    if (I(E))
      return u ? u(E, 2) : E();
    p(E);
  })) : I(e) ? t ? g = u ? () => u(e, 2) : e : g = () => {
    if (C) {
      Ue();
      try {
        C();
      } finally {
        Be();
      }
    }
    const E = it;
    it = a;
    try {
      return u ? u(e, 3, [A]) : e(A);
    } finally {
      it = E;
    }
  } : (g = te, p(e)), t && i) {
    const E = g, z = i === !0 ? 1 / 0 : i;
    g = () => Ye(E(), z);
  }
  const W = Qo(), J = () => {
    a.stop(), W && W.active && os(W.effects, a);
  };
  if (o && t) {
    const E = t;
    t = (...z) => {
      E(...z), J();
    };
  }
  let L = Q ? new Array(e.length).fill(Xt) : Xt;
  const fe = (E) => {
    if (!(!(a.flags & 1) || !a.dirty && !E))
      if (t) {
        const z = a.run();
        if (i || M || (Q ? z.some((be, ee) => rt(be, L[ee])) : rt(z, L))) {
          C && C();
          const be = it;
          it = a;
          try {
            const ee = [
              z,
              // pass undefined as the old value when it's changed for the first time
              L === Xt ? void 0 : Q && L[0] === Xt ? [] : L,
              A
            ];
            u ? u(t, 3, ee) : (
              // @ts-expect-error
              t(...ee)
            ), L = z;
          } finally {
            it = be;
          }
        }
      } else
        a.run();
  };
  return l && l(fe), a = new vi(g), a.scheduler = r ? () => r(fe, !1) : fe, A = (E) => Sr(E, !1, a), C = a.onStop = () => {
    const E = fn.get(a);
    if (E) {
      if (u)
        u(E, 4);
      else
        for (const z of E) z();
      fn.delete(a);
    }
  }, a.onTrack = n.onTrack, a.onTrigger = n.onTrigger, t ? s ? fe(!0) : L = a.run() : r ? r(fe.bind(null, !0), !0) : a.run(), J.pause = a.pause.bind(a), J.resume = a.resume.bind(a), J.stop = J, J;
}
function Ye(e, t = 1 / 0, n) {
  if (t <= 0 || !k(e) || e.__v_skip || (n = n || /* @__PURE__ */ new Set(), n.has(e)))
    return e;
  if (n.add(e), t--, Y(e))
    Ye(e.value, t, n);
  else if (P(e))
    for (let s = 0; s < e.length; s++)
      Ye(e[s], t, n);
  else if (hi(e) || ot(e))
    e.forEach((s) => {
      Ye(s, t, n);
    });
  else if (yn(e)) {
    for (const s in e)
      Ye(e[s], t, n);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Ye(e[s], t, n);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const ct = [];
function Zt(e) {
  ct.push(e);
}
function Qt() {
  ct.pop();
}
let Dn = !1;
function x(e, ...t) {
  if (Dn) return;
  Dn = !0, Ue();
  const n = ct.length ? ct[ct.length - 1].component : null, s = n && n.appContext.config.warnHandler, i = Tr();
  if (s)
    vt(
      s,
      n,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((o) => {
          var r, l;
          return (l = (r = o.toString) == null ? void 0 : r.call(o)) != null ? l : JSON.stringify(o);
        }).join(""),
        n && n.proxy,
        i.map(
          ({ vnode: o }) => `at <${Pn(n, o.type)}>`
        ).join(`
`),
        i
      ]
    );
  else {
    const o = [`[Vue warn]: ${e}`, ...t];
    i.length && o.push(`
`, ...Or(i)), console.warn(...o);
  }
  Be(), Dn = !1;
}
function Tr() {
  let e = ct[ct.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const n = t[0];
    n && n.vnode === e ? n.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const s = e.component && e.component.parent;
    e = s && s.vnode;
  }
  return t;
}
function Or(e) {
  const t = [];
  return e.forEach((n, s) => {
    t.push(...s === 0 ? [] : [`
`], ...Er(n));
  }), t;
}
function Er({ vnode: e, recurseCount: t }) {
  const n = t > 0 ? `... (${t} recursive calls)` : "", s = e.component ? e.component.parent == null : !1, i = ` at <${Pn(
    e.component,
    e.type,
    s
  )}`, o = ">" + n;
  return e.props ? [i, ...Pr(e.props), o] : [i + o];
}
function Pr(e) {
  const t = [], n = Object.keys(e);
  return n.slice(0, 3).forEach((s) => {
    t.push(...Li(s, e[s]));
  }), n.length > 3 && t.push(" ..."), t;
}
function Li(e, t, n) {
  return G(t) ? (t = JSON.stringify(t), n ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? n ? t : [`${e}=${t}`] : Y(t) ? (t = Li(e, F(t.value), !0), n ? t : [`${e}=Ref<`, t, ">"]) : I(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = F(t), n ? t : [`${e}=`, t]);
}
const ms = {
  sp: "serverPrefetch hook",
  bc: "beforeCreate hook",
  c: "created hook",
  bm: "beforeMount hook",
  m: "mounted hook",
  bu: "beforeUpdate hook",
  u: "updated",
  bum: "beforeUnmount hook",
  um: "unmounted hook",
  a: "activated hook",
  da: "deactivated hook",
  ec: "errorCaptured hook",
  rtc: "renderTracked hook",
  rtg: "renderTriggered hook",
  0: "setup function",
  1: "render function",
  2: "watcher getter",
  3: "watcher callback",
  4: "watcher cleanup function",
  5: "native event handler",
  6: "component event handler",
  7: "vnode hook",
  8: "directive hook",
  9: "transition hook",
  10: "app errorHandler",
  11: "app warnHandler",
  12: "ref function",
  13: "async component loader",
  14: "scheduler flush",
  15: "component update",
  16: "app unmount cleanup function"
};
function vt(e, t, n, s) {
  try {
    return s ? e(...s) : e();
  } catch (i) {
    Wt(i, t, n);
  }
}
function De(e, t, n, s) {
  if (I(e)) {
    const i = vt(e, t, n, s);
    return i && rs(i) && i.catch((o) => {
      Wt(o, t, n);
    }), i;
  }
  if (P(e)) {
    const i = [];
    for (let o = 0; o < e.length; o++)
      i.push(De(e[o], t, n, s));
    return i;
  } else
    x(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function Wt(e, t, n, s = !0) {
  const i = t ? t.vnode : null, { errorHandler: o, throwUnhandledErrorInProduction: r } = t && t.appContext.config || B;
  if (t) {
    let l = t.parent;
    const u = t.proxy, p = ms[n];
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let a = 0; a < d.length; a++)
          if (d[a](e, u, p) === !1)
            return;
      }
      l = l.parent;
    }
    if (o) {
      Ue(), vt(o, null, 10, [
        e,
        u,
        p
      ]), Be();
      return;
    }
  }
  Ar(e, n, i, s, r);
}
function Ar(e, t, n, s = !0, i = !1) {
  {
    const o = ms[t];
    if (n && Zt(n), x(`Unhandled error${o ? ` during execution of ${o}` : ""}`), n && Qt(), s)
      throw e;
    console.error(e);
  }
}
const ie = [];
let Ae = -1;
const bt = [];
let Ge = null, gt = 0;
const Ui = /* @__PURE__ */ Promise.resolve();
let un = null;
const $r = 100;
function Bi(e) {
  const t = un || Ui;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function Ir(e) {
  let t = Ae + 1, n = ie.length;
  for (; t < n; ) {
    const s = t + n >>> 1, i = ie[s], o = Ht(i);
    o < e || o === e && i.flags & 2 ? t = s + 1 : n = s;
  }
  return t;
}
function Cn(e) {
  if (!(e.flags & 1)) {
    const t = Ht(e), n = ie[ie.length - 1];
    !n || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= Ht(n) ? ie.push(e) : ie.splice(Ir(t), 0, e), e.flags |= 1, Wi();
  }
}
function Wi() {
  un || (un = Ui.then(qi));
}
function Ki(e) {
  P(e) ? bt.push(...e) : Ge && e.id === -1 ? Ge.splice(gt + 1, 0, e) : e.flags & 1 || (bt.push(e), e.flags |= 1), Wi();
}
function Ds(e, t, n = Ae + 1) {
  for (t = t || /* @__PURE__ */ new Map(); n < ie.length; n++) {
    const s = ie[n];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid || _s(t, s))
        continue;
      ie.splice(n, 1), n--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ki(e) {
  if (bt.length) {
    const t = [...new Set(bt)].sort(
      (n, s) => Ht(n) - Ht(s)
    );
    if (bt.length = 0, Ge) {
      Ge.push(...t);
      return;
    }
    for (Ge = t, e = e || /* @__PURE__ */ new Map(), gt = 0; gt < Ge.length; gt++) {
      const n = Ge[gt];
      _s(e, n) || (n.flags & 4 && (n.flags &= -2), n.flags & 8 || n(), n.flags &= -2);
    }
    Ge = null, gt = 0;
  }
}
const Ht = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function qi(e) {
  e = e || /* @__PURE__ */ new Map();
  const t = (n) => _s(e, n);
  try {
    for (Ae = 0; Ae < ie.length; Ae++) {
      const n = ie[Ae];
      if (n && !(n.flags & 8)) {
        if (t(n))
          continue;
        n.flags & 4 && (n.flags &= -2), vt(
          n,
          n.i,
          n.i ? 15 : 14
        ), n.flags & 4 || (n.flags &= -2);
      }
    }
  } finally {
    for (; Ae < ie.length; Ae++) {
      const n = ie[Ae];
      n && (n.flags &= -2);
    }
    Ae = -1, ie.length = 0, ki(e), un = null, (ie.length || bt.length) && qi(e);
  }
}
function _s(e, t) {
  const n = e.get(t) || 0;
  if (n > $r) {
    const s = t.i, i = s && Po(s.type);
    return Wt(
      `Maximum recursive updates exceeded${i ? ` in component <${i}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, n + 1), !1;
}
let Fe = !1;
const en = /* @__PURE__ */ new Map();
Bt().__VUE_HMR_RUNTIME__ = {
  createRecord: Nn(Gi),
  rerender: Nn(Fr),
  reload: Nn(jr)
};
const ut = /* @__PURE__ */ new Map();
function Rr(e) {
  const t = e.type.__hmrId;
  let n = ut.get(t);
  n || (Gi(t, e.type), n = ut.get(t)), n.instances.add(e);
}
function Mr(e) {
  ut.get(e.type.__hmrId).instances.delete(e);
}
function Gi(e, t) {
  return ut.has(e) ? !1 : (ut.set(e, {
    initialDef: an(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function an(e) {
  return Ao(e) ? e.__vccOpts : e;
}
function Fr(e, t) {
  const n = ut.get(e);
  n && (n.initialDef.render = t, [...n.instances].forEach((s) => {
    t && (s.render = t, an(s.type).render = t), s.renderCache = [], Fe = !0, s.update(), Fe = !1;
  }));
}
function jr(e, t) {
  const n = ut.get(e);
  if (!n) return;
  t = an(t), Ns(n.initialDef, t);
  const s = [...n.instances];
  for (let i = 0; i < s.length; i++) {
    const o = s[i], r = an(o.type);
    let l = en.get(r);
    l || (r !== n.initialDef && Ns(r, t), en.set(r, l = /* @__PURE__ */ new Set())), l.add(o), o.appContext.propsCache.delete(o.type), o.appContext.emitsCache.delete(o.type), o.appContext.optionsCache.delete(o.type), o.ceReload ? (l.add(o), o.ceReload(t.styles), l.delete(o)) : o.parent ? Cn(() => {
      Fe = !0, o.parent.update(), Fe = !1, l.delete(o);
    }) : o.appContext.reload ? o.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), o.root.ce && o !== o.root && o.root.ce._removeChildStyle(r);
  }
  Ki(() => {
    en.clear();
  });
}
function Ns(e, t) {
  q(e, t);
  for (const n in e)
    n !== "__file" && !(n in t) && delete e[n];
}
function Nn(e) {
  return (t, n) => {
    try {
      return e(t, n);
    } catch (s) {
      console.error(s), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Re, At = [], Jn = !1;
function Kt(e, ...t) {
  Re ? Re.emit(e, ...t) : Jn || At.push({ event: e, args: t });
}
function Ji(e, t) {
  var n, s;
  Re = e, Re ? (Re.enabled = !0, At.forEach(({ event: i, args: o }) => Re.emit(i, ...o)), At = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((s = (n = window.navigator) == null ? void 0 : n.userAgent) != null && s.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((o) => {
    Ji(o, t);
  }), setTimeout(() => {
    Re || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, Jn = !0, At = []);
  }, 3e3)) : (Jn = !0, At = []);
}
function Dr(e, t) {
  Kt("app:init", e, t, {
    Fragment: $e,
    Text: kt,
    Comment: Se,
    Static: nn
  });
}
function Nr(e) {
  Kt("app:unmount", e);
}
const Hr = /* @__PURE__ */ bs(
  "component:added"
  /* COMPONENT_ADDED */
), Yi = /* @__PURE__ */ bs(
  "component:updated"
  /* COMPONENT_UPDATED */
), Vr = /* @__PURE__ */ bs(
  "component:removed"
  /* COMPONENT_REMOVED */
), Lr = (e) => {
  Re && typeof Re.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Re.cleanupBuffer(e) && Vr(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function bs(e) {
  return (t) => {
    Kt(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const Ur = /* @__PURE__ */ zi(
  "perf:start"
  /* PERFORMANCE_START */
), Br = /* @__PURE__ */ zi(
  "perf:end"
  /* PERFORMANCE_END */
);
function zi(e) {
  return (t, n, s) => {
    Kt(e, t.appContext.app, t.uid, t, n, s);
  };
}
function Wr(e, t, n) {
  Kt(
    "component:emit",
    e.appContext.app,
    e,
    t,
    n
  );
}
let ge = null, Xi = null;
function dn(e) {
  const t = ge;
  return ge = e, Xi = e && e.type.__scopeId || null, t;
}
function Kr(e, t = ge, n) {
  if (!t || e._n)
    return e;
  const s = (...i) => {
    s._d && Ys(-1);
    const o = dn(t);
    let r;
    try {
      r = e(...i);
    } finally {
      dn(o), s._d && Ys(1);
    }
    return Yi(t), r;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function Zi(e) {
  Do(e) && x("Do not use built-in directive ids as custom directive id: " + e);
}
function tt(e, t, n, s) {
  const i = e.dirs, o = t && t.dirs;
  for (let r = 0; r < i.length; r++) {
    const l = i[r];
    o && (l.oldValue = o[r].value);
    let u = l.dir[s];
    u && (Ue(), De(u, n, 8, [
      e.el,
      l,
      e,
      t
    ]), Be());
  }
}
const kr = Symbol("_vte"), qr = (e) => e.__isTeleport;
function ys(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, ys(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Qi(e, t) {
  return I(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    q({ name: e.name }, t, { setup: e })
  ) : e;
}
function eo(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Gr = /* @__PURE__ */ new WeakSet();
function pn(e, t, n, s, i = !1) {
  if (P(e)) {
    e.forEach(
      (A, M) => pn(
        A,
        t && (P(t) ? t[M] : t),
        n,
        s,
        i
      )
    );
    return;
  }
  if (Ft(s) && !i) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && pn(e, t, n, s.component.subTree);
    return;
  }
  const o = s.shapeFlag & 4 ? Ts(s.component) : s.el, r = i ? null : o, { i: l, r: u } = e;
  if (!l) {
    x(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const p = t && t.r, d = l.refs === B ? l.refs = {} : l.refs, a = l.setupState, g = F(a), C = a === B ? () => !1 : (A) => (N(g, A) && !Y(g[A]) && x(
    `Template ref "${A}" used on a non-ref value. It will not work in the production build.`
  ), Gr.has(g[A]) ? !1 : N(g, A));
  if (p != null && p !== u && (G(p) ? (d[p] = null, C(p) && (a[p] = null)) : Y(p) && (p.value = null)), I(u))
    vt(u, l, 12, [r, d]);
  else {
    const A = G(u), M = Y(u);
    if (A || M) {
      const Q = () => {
        if (e.f) {
          const W = A ? C(u) ? a[u] : d[u] : u.value;
          i ? P(W) && os(W, o) : P(W) ? W.includes(o) || W.push(o) : A ? (d[u] = [o], C(u) && (a[u] = d[u])) : (u.value = [o], e.k && (d[e.k] = u.value));
        } else A ? (d[u] = r, C(u) && (a[u] = r)) : M ? (u.value = r, e.k && (d[e.k] = r)) : x("Invalid template ref type:", u, `(${typeof u})`);
      };
      r ? (Q.id = -1, ae(Q, n)) : Q();
    } else
      x("Invalid template ref type:", u, `(${typeof u})`);
  }
}
Bt().requestIdleCallback;
Bt().cancelIdleCallback;
const Ft = (e) => !!e.type.__asyncLoader, vs = (e) => e.type.__isKeepAlive;
function Jr(e, t) {
  to(e, "a", t);
}
function Yr(e, t) {
  to(e, "da", t);
}
function to(e, t, n = Z) {
  const s = e.__wdc || (e.__wdc = () => {
    let i = n;
    for (; i; ) {
      if (i.isDeactivated)
        return;
      i = i.parent;
    }
    return e();
  });
  if (Tn(t, s, n), n) {
    let i = n.parent;
    for (; i && i.parent; )
      vs(i.parent.vnode) && zr(s, t, n, i), i = i.parent;
  }
}
function zr(e, t, n, s) {
  const i = Tn(
    t,
    e,
    s,
    !0
    /* prepend */
  );
  no(() => {
    os(s[t], i);
  }, n);
}
function Tn(e, t, n = Z, s = !1) {
  if (n) {
    const i = n[e] || (n[e] = []), o = t.__weh || (t.__weh = (...r) => {
      Ue();
      const l = qt(n), u = De(t, n, e, r);
      return l(), Be(), u;
    });
    return s ? i.unshift(o) : i.push(o), o;
  } else {
    const i = st(ms[e].replace(/ hook$/, ""));
    x(
      `${i} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const We = (e) => (t, n = Z) => {
  (!Lt || e === "sp") && Tn(e, (...s) => t(...s), n);
}, Xr = We("bm"), Zr = We("m"), Qr = We(
  "bu"
), el = We("u"), tl = We(
  "bum"
), no = We("um"), nl = We(
  "sp"
), sl = We("rtg"), il = We("rtc");
function ol(e, t = Z) {
  Tn("ec", e, t);
}
const rl = Symbol.for("v-ndc"), Yn = (e) => e ? Oo(e) ? Ts(e) : Yn(e.parent) : null, ft = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ q(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => Me(e.props),
    $attrs: (e) => Me(e.attrs),
    $slots: (e) => Me(e.slots),
    $refs: (e) => Me(e.refs),
    $parent: (e) => Yn(e.parent),
    $root: (e) => Yn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => oo(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Cn(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Bi.bind(e.proxy)),
    $watch: (e) => Vl.bind(e)
  })
), ws = (e) => e === "_" || e === "$", Hn = (e, t) => e !== B && !e.__isScriptSetup && N(e, t), so = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: n, setupState: s, data: i, props: o, accessCache: r, type: l, appContext: u } = e;
    if (t === "__isVue")
      return !0;
    let p;
    if (t[0] !== "$") {
      const C = r[t];
      if (C !== void 0)
        switch (C) {
          case 1:
            return s[t];
          case 2:
            return i[t];
          case 4:
            return n[t];
          case 3:
            return o[t];
        }
      else {
        if (Hn(s, t))
          return r[t] = 1, s[t];
        if (i !== B && N(i, t))
          return r[t] = 2, i[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && N(p, t)
        )
          return r[t] = 3, o[t];
        if (n !== B && N(n, t))
          return r[t] = 4, n[t];
        zn && (r[t] = 0);
      }
    }
    const d = ft[t];
    let a, g;
    if (d)
      return t === "$attrs" ? (X(e.attrs, "get", ""), mn()) : t === "$slots" && X(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (a = l.__cssModules) && (a = a[t])
    )
      return a;
    if (n !== B && N(n, t))
      return r[t] = 4, n[t];
    if (
      // global properties
      g = u.config.globalProperties, N(g, t)
    )
      return g[t];
    ge && (!G(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (i !== B && ws(t[0]) && N(i, t) ? x(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === ge && x(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, n) {
    const { data: s, setupState: i, ctx: o } = e;
    return Hn(i, t) ? (i[t] = n, !0) : i.__isScriptSetup && N(i, t) ? (x(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : s !== B && N(s, t) ? (s[t] = n, !0) : N(e.props, t) ? (x(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (x(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (t in e.appContext.config.globalProperties ? Object.defineProperty(o, t, {
      enumerable: !0,
      configurable: !0,
      value: n
    }) : o[t] = n, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: n, ctx: s, appContext: i, propsOptions: o }
  }, r) {
    let l;
    return !!n[r] || e !== B && N(e, r) || Hn(t, r) || (l = o[0]) && N(l, r) || N(s, r) || N(ft, r) || N(i.config.globalProperties, r);
  },
  defineProperty(e, t, n) {
    return n.get != null ? e._.accessCache[t] = 0 : N(n, "value") && this.set(e, t, n.value, null), Reflect.defineProperty(e, t, n);
  }
};
so.ownKeys = (e) => (x(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e));
function ll(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(ft).forEach((n) => {
    Object.defineProperty(t, n, {
      configurable: !0,
      enumerable: !1,
      get: () => ft[n](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: te
    });
  }), t;
}
function cl(e) {
  const {
    ctx: t,
    propsOptions: [n]
  } = e;
  n && Object.keys(n).forEach((s) => {
    Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[s],
      set: te
    });
  });
}
function fl(e) {
  const { ctx: t, setupState: n } = e;
  Object.keys(F(n)).forEach((s) => {
    if (!n.__isScriptSetup) {
      if (ws(s[0])) {
        x(
          `setup() return property ${JSON.stringify(
            s
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, s, {
        enumerable: !0,
        configurable: !0,
        get: () => n[s],
        set: te
      });
    }
  });
}
function Hs(e) {
  return P(e) ? e.reduce(
    (t, n) => (t[n] = null, t),
    {}
  ) : e;
}
function ul() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, n) => {
    e[n] ? x(`${t} property "${n}" is already defined in ${e[n]}.`) : e[n] = t;
  };
}
let zn = !0;
function al(e) {
  const t = oo(e), n = e.proxy, s = e.ctx;
  zn = !1, t.beforeCreate && Vs(t.beforeCreate, e, "bc");
  const {
    // state
    data: i,
    computed: o,
    methods: r,
    watch: l,
    provide: u,
    inject: p,
    // lifecycle
    created: d,
    beforeMount: a,
    mounted: g,
    beforeUpdate: C,
    updated: A,
    activated: M,
    deactivated: Q,
    beforeDestroy: W,
    beforeUnmount: J,
    destroyed: L,
    unmounted: fe,
    render: E,
    renderTracked: z,
    renderTriggered: be,
    errorCaptured: ee,
    serverPrefetch: oe,
    // public API
    expose: Ne,
    inheritAttrs: Ke,
    // assets
    components: ve,
    directives: Gt,
    filters: Es
  } = t, ke = ul();
  {
    const [H] = e.propsOptions;
    if (H)
      for (const j in H)
        ke("Props", j);
  }
  if (p && dl(p, s, ke), r)
    for (const H in r) {
      const j = r[H];
      I(j) ? (Object.defineProperty(s, H, {
        value: j.bind(n),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }), ke("Methods", H)) : x(
        `Method "${H}" has type "${typeof j}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (i) {
    I(i) || x(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const H = i.call(n, n);
    if (rs(H) && x(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !k(H))
      x("data() should return an object.");
    else {
      e.data = gs(H);
      for (const j in H)
        ke("Data", j), ws(j[0]) || Object.defineProperty(s, j, {
          configurable: !0,
          enumerable: !0,
          get: () => H[j],
          set: te
        });
    }
  }
  if (zn = !0, o)
    for (const H in o) {
      const j = o[H], Ce = I(j) ? j.bind(n, n) : I(j.get) ? j.get.bind(n, n) : te;
      Ce === te && x(`Computed property "${H}" has no getter.`);
      const An = !I(j) && I(j.set) ? j.set.bind(n) : () => {
        x(
          `Write operation failed: computed property "${H}" is readonly.`
        );
      }, wt = gc({
        get: Ce,
        set: An
      });
      Object.defineProperty(s, H, {
        enumerable: !0,
        configurable: !0,
        get: () => wt.value,
        set: (at) => wt.value = at
      }), ke("Computed", H);
    }
  if (l)
    for (const H in l)
      io(l[H], s, n, H);
  if (u) {
    const H = I(u) ? u.call(n) : u;
    Reflect.ownKeys(H).forEach((j) => {
      bl(j, H[j]);
    });
  }
  d && Vs(d, e, "c");
  function re(H, j) {
    P(j) ? j.forEach((Ce) => H(Ce.bind(n))) : j && H(j.bind(n));
  }
  if (re(Xr, a), re(Zr, g), re(Qr, C), re(el, A), re(Jr, M), re(Yr, Q), re(ol, ee), re(il, z), re(sl, be), re(tl, J), re(no, fe), re(nl, oe), P(Ne))
    if (Ne.length) {
      const H = e.exposed || (e.exposed = {});
      Ne.forEach((j) => {
        Object.defineProperty(H, j, {
          get: () => n[j],
          set: (Ce) => n[j] = Ce
        });
      });
    } else e.exposed || (e.exposed = {});
  E && e.render === te && (e.render = E), Ke != null && (e.inheritAttrs = Ke), ve && (e.components = ve), Gt && (e.directives = Gt), oe && eo(e);
}
function dl(e, t, n = te) {
  P(e) && (e = Xn(e));
  for (const s in e) {
    const i = e[s];
    let o;
    k(i) ? "default" in i ? o = tn(
      i.from || s,
      i.default,
      !0
    ) : o = tn(i.from || s) : o = tn(i), Y(o) ? Object.defineProperty(t, s, {
      enumerable: !0,
      configurable: !0,
      get: () => o.value,
      set: (r) => o.value = r
    }) : t[s] = o, n("Inject", s);
  }
}
function Vs(e, t, n) {
  De(
    P(e) ? e.map((s) => s.bind(t.proxy)) : e.bind(t.proxy),
    t,
    n
  );
}
function io(e, t, n, s) {
  let i = s.includes(".") ? yo(n, s) : () => n[s];
  if (G(e)) {
    const o = t[e];
    I(o) ? Ln(i, o) : x(`Invalid watch handler specified by key "${e}"`, o);
  } else if (I(e))
    Ln(i, e.bind(n));
  else if (k(e))
    if (P(e))
      e.forEach((o) => io(o, t, n, s));
    else {
      const o = I(e.handler) ? e.handler.bind(n) : t[e.handler];
      I(o) ? Ln(i, o, e) : x(`Invalid watch handler specified by key "${e.handler}"`, o);
    }
  else
    x(`Invalid watch option: "${s}"`, e);
}
function oo(e) {
  const t = e.type, { mixins: n, extends: s } = t, {
    mixins: i,
    optionsCache: o,
    config: { optionMergeStrategies: r }
  } = e.appContext, l = o.get(t);
  let u;
  return l ? u = l : !i.length && !n && !s ? u = t : (u = {}, i.length && i.forEach(
    (p) => hn(u, p, r, !0)
  ), hn(u, t, r)), k(t) && o.set(t, u), u;
}
function hn(e, t, n, s = !1) {
  const { mixins: i, extends: o } = t;
  o && hn(e, o, n, !0), i && i.forEach(
    (r) => hn(e, r, n, !0)
  );
  for (const r in t)
    if (s && r === "expose")
      x(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = pl[r] || n && n[r];
      e[r] = l ? l(e[r], t[r]) : t[r];
    }
  return e;
}
const pl = {
  data: Ls,
  props: Us,
  emits: Us,
  // objects
  methods: $t,
  computed: $t,
  // lifecycle
  beforeCreate: se,
  created: se,
  beforeMount: se,
  mounted: se,
  beforeUpdate: se,
  updated: se,
  beforeDestroy: se,
  beforeUnmount: se,
  destroyed: se,
  unmounted: se,
  activated: se,
  deactivated: se,
  errorCaptured: se,
  serverPrefetch: se,
  // assets
  components: $t,
  directives: $t,
  // watch
  watch: gl,
  // provide / inject
  provide: Ls,
  inject: hl
};
function Ls(e, t) {
  return t ? e ? function() {
    return q(
      I(e) ? e.call(this, this) : e,
      I(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function hl(e, t) {
  return $t(Xn(e), Xn(t));
}
function Xn(e) {
  if (P(e)) {
    const t = {};
    for (let n = 0; n < e.length; n++)
      t[e[n]] = e[n];
    return t;
  }
  return e;
}
function se(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function $t(e, t) {
  return e ? q(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function Us(e, t) {
  return e ? P(e) && P(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : q(
    /* @__PURE__ */ Object.create(null),
    Hs(e),
    Hs(t ?? {})
  ) : t;
}
function gl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const n = q(/* @__PURE__ */ Object.create(null), e);
  for (const s in t)
    n[s] = se(e[s], t[s]);
  return n;
}
function ro() {
  return {
    app: null,
    config: {
      isNativeTag: Fo,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let ml = 0;
function _l(e, t) {
  return function(s, i = null) {
    I(s) || (s = q({}, s)), i != null && !k(i) && (x("root props passed to app.mount() must be an object."), i = null);
    const o = ro(), r = /* @__PURE__ */ new WeakSet(), l = [];
    let u = !1;
    const p = o.app = {
      _uid: ml++,
      _component: s,
      _props: i,
      _container: null,
      _context: o,
      _instance: null,
      version: Zs,
      get config() {
        return o.config;
      },
      set config(d) {
        x(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...a) {
        return r.has(d) ? x("Plugin has already been applied to target app.") : d && I(d.install) ? (r.add(d), d.install(p, ...a)) : I(d) ? (r.add(d), d(p, ...a)) : x(
          'A plugin must either be a function or an object with an "install" function.'
        ), p;
      },
      mixin(d) {
        return o.mixins.includes(d) ? x(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : o.mixins.push(d), p;
      },
      component(d, a) {
        return ss(d, o.config), a ? (o.components[d] && x(`Component "${d}" has already been registered in target app.`), o.components[d] = a, p) : o.components[d];
      },
      directive(d, a) {
        return Zi(d), a ? (o.directives[d] && x(`Directive "${d}" has already been registered in target app.`), o.directives[d] = a, p) : o.directives[d];
      },
      mount(d, a, g) {
        if (u)
          x(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          d.__vue_app__ && x(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const C = p._ceVNode || Xe(s, i);
          return C.appContext = o, g === !0 ? g = "svg" : g === !1 && (g = void 0), o.reload = () => {
            e(
              Qe(C),
              d,
              g
            );
          }, e(C, d, g), u = !0, p._container = d, d.__vue_app__ = p, p._instance = C.component, Dr(p, Zs), Ts(C.component);
        }
      },
      onUnmount(d) {
        typeof d != "function" && x(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        u ? (De(
          l,
          p._instance,
          16
        ), e(null, p._container), p._instance = null, Nr(p), delete p._container.__vue_app__) : x("Cannot unmount an app that is not mounted.");
      },
      provide(d, a) {
        return d in o.provides && x(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ), o.provides[d] = a, p;
      },
      runWithContext(d) {
        const a = yt;
        yt = p;
        try {
          return d();
        } finally {
          yt = a;
        }
      }
    };
    return p;
  };
}
let yt = null;
function bl(e, t) {
  if (!Z)
    x("provide() can only be used inside setup().");
  else {
    let n = Z.provides;
    const s = Z.parent && Z.parent.provides;
    s === n && (n = Z.provides = Object.create(s)), n[e] = t;
  }
}
function tn(e, t, n = !1) {
  const s = Z || ge;
  if (s || yt) {
    const i = yt ? yt._context.provides : s ? s.parent == null ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (i && e in i)
      return i[e];
    if (arguments.length > 1)
      return n && I(t) ? t.call(s && s.proxy) : t;
    x(`injection "${String(e)}" not found.`);
  } else
    x("inject() can only be used inside setup() or functional components.");
}
const lo = {}, co = () => Object.create(lo), fo = (e) => Object.getPrototypeOf(e) === lo;
function yl(e, t, n, s = !1) {
  const i = {}, o = co();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), uo(e, t, i, o);
  for (const r in e.propsOptions[0])
    r in i || (i[r] = void 0);
  po(t || {}, i, e), n ? e.props = s ? i : br(i) : e.type.props ? e.props = i : e.props = o, e.attrs = o;
}
function vl(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function wl(e, t, n, s) {
  const {
    props: i,
    attrs: o,
    vnode: { patchFlag: r }
  } = e, l = F(i), [u] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !vl(e) && (s || r > 0) && !(r & 16)
  ) {
    if (r & 8) {
      const d = e.vnode.dynamicProps;
      for (let a = 0; a < d.length; a++) {
        let g = d[a];
        if (On(e.emitsOptions, g))
          continue;
        const C = t[g];
        if (u)
          if (N(o, g))
            C !== o[g] && (o[g] = C, p = !0);
          else {
            const A = ce(g);
            i[A] = Zn(
              u,
              l,
              A,
              C,
              e,
              !1
            );
          }
        else
          C !== o[g] && (o[g] = C, p = !0);
      }
    }
  } else {
    uo(e, t, i, o) && (p = !0);
    let d;
    for (const a in l)
      (!t || // for camelCase
      !N(t, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = he(a)) === a || !N(t, d))) && (u ? n && // for camelCase
      (n[a] !== void 0 || // for kebab-case
      n[d] !== void 0) && (i[a] = Zn(
        u,
        l,
        a,
        void 0,
        e,
        !0
      )) : delete i[a]);
    if (o !== l)
      for (const a in o)
        (!t || !N(t, a)) && (delete o[a], p = !0);
  }
  p && Ie(e.attrs, "set", ""), po(t || {}, i, e);
}
function uo(e, t, n, s) {
  const [i, o] = e.propsOptions;
  let r = !1, l;
  if (t)
    for (let u in t) {
      if (It(u))
        continue;
      const p = t[u];
      let d;
      i && N(i, d = ce(u)) ? !o || !o.includes(d) ? n[d] = p : (l || (l = {}))[d] = p : On(e.emitsOptions, u) || (!(u in s) || p !== s[u]) && (s[u] = p, r = !0);
    }
  if (o) {
    const u = F(n), p = l || B;
    for (let d = 0; d < o.length; d++) {
      const a = o[d];
      n[a] = Zn(
        i,
        u,
        a,
        p[a],
        e,
        !N(p, a)
      );
    }
  }
  return r;
}
function Zn(e, t, n, s, i, o) {
  const r = e[n];
  if (r != null) {
    const l = N(r, "default");
    if (l && s === void 0) {
      const u = r.default;
      if (r.type !== Function && !r.skipFactory && I(u)) {
        const { propsDefaults: p } = i;
        if (n in p)
          s = p[n];
        else {
          const d = qt(i);
          s = p[n] = u.call(
            null,
            t
          ), d();
        }
      } else
        s = u;
      i.ce && i.ce._setProp(n, s);
    }
    r[
      0
      /* shouldCast */
    ] && (o && !l ? s = !1 : r[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === he(n)) && (s = !0));
  }
  return s;
}
const xl = /* @__PURE__ */ new WeakMap();
function ao(e, t, n = !1) {
  const s = n ? xl : t.propsCache, i = s.get(e);
  if (i)
    return i;
  const o = e.props, r = {}, l = [];
  let u = !1;
  if (!I(e)) {
    const d = (a) => {
      u = !0;
      const [g, C] = ao(a, t, !0);
      q(r, g), C && l.push(...C);
    };
    !n && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!o && !u)
    return k(e) && s.set(e, mt), mt;
  if (P(o))
    for (let d = 0; d < o.length; d++) {
      G(o[d]) || x("props must be strings when using array syntax.", o[d]);
      const a = ce(o[d]);
      Bs(a) && (r[a] = B);
    }
  else if (o) {
    k(o) || x("invalid props options", o);
    for (const d in o) {
      const a = ce(d);
      if (Bs(a)) {
        const g = o[d], C = r[a] = P(g) || I(g) ? { type: g } : q({}, g), A = C.type;
        let M = !1, Q = !0;
        if (P(A))
          for (let W = 0; W < A.length; ++W) {
            const J = A[W], L = I(J) && J.name;
            if (L === "Boolean") {
              M = !0;
              break;
            } else L === "String" && (Q = !1);
          }
        else
          M = I(A) && A.name === "Boolean";
        C[
          0
          /* shouldCast */
        ] = M, C[
          1
          /* shouldCastTrue */
        ] = Q, (M || N(C, "default")) && l.push(a);
      }
    }
  }
  const p = [r, l];
  return k(e) && s.set(e, p), p;
}
function Bs(e) {
  return e[0] !== "$" && !It(e) ? !0 : (x(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function Sl(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function po(e, t, n) {
  const s = F(t), i = n.propsOptions[0], o = Object.keys(e).map((r) => ce(r));
  for (const r in i) {
    let l = i[r];
    l != null && Cl(
      r,
      s[r],
      l,
      Me(s),
      !o.includes(r)
    );
  }
}
function Cl(e, t, n, s, i) {
  const { type: o, required: r, validator: l, skipCheck: u } = n;
  if (r && i) {
    x('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !r)) {
    if (o != null && o !== !0 && !u) {
      let p = !1;
      const d = P(o) ? o : [o], a = [];
      for (let g = 0; g < d.length && !p; g++) {
        const { valid: C, expectedType: A } = Ol(t, d[g]);
        a.push(A || ""), p = C;
      }
      if (!p) {
        x(El(e, t, a));
        return;
      }
    }
    l && !l(t, s) && x('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const Tl = /* @__PURE__ */ Le(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function Ol(e, t) {
  let n;
  const s = Sl(t);
  if (s === "null")
    n = e === null;
  else if (Tl(s)) {
    const i = typeof e;
    n = i === s.toLowerCase(), !n && i === "object" && (n = e instanceof t);
  } else s === "Object" ? n = k(e) : s === "Array" ? n = P(e) : n = e instanceof t;
  return {
    valid: n,
    expectedType: s
  };
}
function El(e, t, n) {
  if (n.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let s = `Invalid prop: type check failed for prop "${e}". Expected ${n.map(wn).join(" | ")}`;
  const i = n[0], o = ls(t), r = Ws(t, i), l = Ws(t, o);
  return n.length === 1 && Ks(i) && !Pl(i, o) && (s += ` with value ${r}`), s += `, got ${o} `, Ks(o) && (s += `with value ${l}.`), s;
}
function Ws(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function Ks(e) {
  return ["string", "number", "boolean"].some((n) => e.toLowerCase() === n);
}
function Pl(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const ho = (e) => e[0] === "_" || e === "$stable", xs = (e) => P(e) ? e.map(we) : [we(e)], Al = (e, t, n) => {
  if (t._n)
    return t;
  const s = Kr((...i) => (Z && (!n || n.root === Z.root) && x(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), xs(t(...i))), n);
  return s._c = !1, s;
}, go = (e, t, n) => {
  const s = e._ctx;
  for (const i in e) {
    if (ho(i)) continue;
    const o = e[i];
    if (I(o))
      t[i] = Al(i, o, s);
    else if (o != null) {
      x(
        `Non-function value encountered for slot "${i}". Prefer function slots for better performance.`
      );
      const r = xs(o);
      t[i] = () => r;
    }
  }
}, mo = (e, t) => {
  vs(e.vnode) || x(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const n = xs(t);
  e.slots.default = () => n;
}, Qn = (e, t, n) => {
  for (const s in t)
    (n || s !== "_") && (e[s] = t[s]);
}, $l = (e, t, n) => {
  const s = e.slots = co();
  if (e.vnode.shapeFlag & 32) {
    const i = t._;
    i ? (Qn(s, t, n), n && ln(s, "_", i, !0)) : go(t, s);
  } else t && mo(e, t);
}, Il = (e, t, n) => {
  const { vnode: s, slots: i } = e;
  let o = !0, r = B;
  if (s.shapeFlag & 32) {
    const l = t._;
    l ? Fe ? (Qn(i, t, n), Ie(e, "set", "$slots")) : n && l === 1 ? o = !1 : Qn(i, t, n) : (o = !t.$stable, go(t, i)), r = t;
  } else t && (mo(e, t), r = { default: 1 });
  if (o)
    for (const l in i)
      !ho(l) && r[l] == null && delete i[l];
};
let Et, ze;
function pt(e, t) {
  e.appContext.config.performance && gn() && ze.mark(`vue-${t}-${e.uid}`), Ur(e, t, gn() ? ze.now() : Date.now());
}
function ht(e, t) {
  if (e.appContext.config.performance && gn()) {
    const n = `vue-${t}-${e.uid}`, s = n + ":end";
    ze.mark(s), ze.measure(
      `<${Pn(e, e.type)}> ${t}`,
      n,
      s
    ), ze.clearMarks(n), ze.clearMarks(s);
  }
  Br(e, t, gn() ? ze.now() : Date.now());
}
function gn() {
  return Et !== void 0 || (typeof window < "u" && window.performance ? (Et = !0, ze = window.performance) : Et = !1), Et;
}
function Rl() {
  const e = [];
  if (e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const ae = ql;
function Ml(e) {
  return Fl(e);
}
function Fl(e, t) {
  Rl();
  const n = Bt();
  n.__VUE__ = !0, Ji(n.__VUE_DEVTOOLS_GLOBAL_HOOK__, n);
  const {
    insert: s,
    remove: i,
    patchProp: o,
    createElement: r,
    createText: l,
    createComment: u,
    setText: p,
    setElementText: d,
    parentNode: a,
    nextSibling: g,
    setScopeId: C = te,
    insertStaticContent: A
  } = e, M = (c, f, h, b = null, m = null, _ = null, S = void 0, w = null, v = Fe ? !1 : !!f.dynamicChildren) => {
    if (c === f)
      return;
    c && !Pt(c, f) && (b = Jt(c), qe(c, m, _, !0), c = null), f.patchFlag === -2 && (v = !1, f.dynamicChildren = null);
    const { type: y, ref: $, shapeFlag: T } = f;
    switch (y) {
      case kt:
        Q(c, f, h, b);
        break;
      case Se:
        W(c, f, h, b);
        break;
      case nn:
        c == null ? J(f, h, b, S) : L(c, f, h, S);
        break;
      case $e:
        Gt(
          c,
          f,
          h,
          b,
          m,
          _,
          S,
          w,
          v
        );
        break;
      default:
        T & 1 ? z(
          c,
          f,
          h,
          b,
          m,
          _,
          S,
          w,
          v
        ) : T & 6 ? Es(
          c,
          f,
          h,
          b,
          m,
          _,
          S,
          w,
          v
        ) : T & 64 || T & 128 ? y.process(
          c,
          f,
          h,
          b,
          m,
          _,
          S,
          w,
          v,
          St
        ) : x("Invalid VNode type:", y, `(${typeof y})`);
    }
    $ != null && m && pn($, c && c.ref, _, f || c, !f);
  }, Q = (c, f, h, b) => {
    if (c == null)
      s(
        f.el = l(f.children),
        h,
        b
      );
    else {
      const m = f.el = c.el;
      f.children !== c.children && p(m, f.children);
    }
  }, W = (c, f, h, b) => {
    c == null ? s(
      f.el = u(f.children || ""),
      h,
      b
    ) : f.el = c.el;
  }, J = (c, f, h, b) => {
    [c.el, c.anchor] = A(
      c.children,
      f,
      h,
      b,
      c.el,
      c.anchor
    );
  }, L = (c, f, h, b) => {
    if (f.children !== c.children) {
      const m = g(c.anchor);
      E(c), [f.el, f.anchor] = A(
        f.children,
        h,
        m,
        b
      );
    } else
      f.el = c.el, f.anchor = c.anchor;
  }, fe = ({ el: c, anchor: f }, h, b) => {
    let m;
    for (; c && c !== f; )
      m = g(c), s(c, h, b), c = m;
    s(f, h, b);
  }, E = ({ el: c, anchor: f }) => {
    let h;
    for (; c && c !== f; )
      h = g(c), i(c), c = h;
    i(f);
  }, z = (c, f, h, b, m, _, S, w, v) => {
    f.type === "svg" ? S = "svg" : f.type === "math" && (S = "mathml"), c == null ? be(
      f,
      h,
      b,
      m,
      _,
      S,
      w,
      v
    ) : Ne(
      c,
      f,
      m,
      _,
      S,
      w,
      v
    );
  }, be = (c, f, h, b, m, _, S, w) => {
    let v, y;
    const { props: $, shapeFlag: T, transition: O, dirs: R } = c;
    if (v = c.el = r(
      c.type,
      _,
      $ && $.is,
      $
    ), T & 8 ? d(v, c.children) : T & 16 && oe(
      c.children,
      v,
      null,
      b,
      m,
      Vn(c, _),
      S,
      w
    ), R && tt(c, null, b, "created"), ee(v, c, c.scopeId, S, b), $) {
      for (const K in $)
        K !== "value" && !It(K) && o(v, K, null, $[K], _, b);
      "value" in $ && o(v, "value", null, $.value, _), (y = $.onVnodeBeforeMount) && Pe(y, b, c);
    }
    ln(v, "__vnode", c, !0), ln(v, "__vueParentComponent", b, !0), R && tt(c, null, b, "beforeMount");
    const D = jl(m, O);
    D && O.beforeEnter(v), s(v, f, h), ((y = $ && $.onVnodeMounted) || D || R) && ae(() => {
      y && Pe(y, b, c), D && O.enter(v), R && tt(c, null, b, "mounted");
    }, m);
  }, ee = (c, f, h, b, m) => {
    if (h && C(c, h), b)
      for (let _ = 0; _ < b.length; _++)
        C(c, b[_]);
    if (m) {
      let _ = m.subTree;
      if (_.patchFlag > 0 && _.patchFlag & 2048 && (_ = Ss(_.children) || _), f === _ || xo(_.type) && (_.ssContent === f || _.ssFallback === f)) {
        const S = m.vnode;
        ee(
          c,
          S,
          S.scopeId,
          S.slotScopeIds,
          m.parent
        );
      }
    }
  }, oe = (c, f, h, b, m, _, S, w, v = 0) => {
    for (let y = v; y < c.length; y++) {
      const $ = c[y] = w ? Je(c[y]) : we(c[y]);
      M(
        null,
        $,
        f,
        h,
        b,
        m,
        _,
        S,
        w
      );
    }
  }, Ne = (c, f, h, b, m, _, S) => {
    const w = f.el = c.el;
    w.__vnode = f;
    let { patchFlag: v, dynamicChildren: y, dirs: $ } = f;
    v |= c.patchFlag & 16;
    const T = c.props || B, O = f.props || B;
    let R;
    if (h && nt(h, !1), (R = O.onVnodeBeforeUpdate) && Pe(R, h, f, c), $ && tt(f, c, h, "beforeUpdate"), h && nt(h, !0), Fe && (v = 0, S = !1, y = null), (T.innerHTML && O.innerHTML == null || T.textContent && O.textContent == null) && d(w, ""), y ? (Ke(
      c.dynamicChildren,
      y,
      w,
      h,
      b,
      Vn(f, m),
      _
    ), es(c, f)) : S || Ce(
      c,
      f,
      w,
      null,
      h,
      b,
      Vn(f, m),
      _,
      !1
    ), v > 0) {
      if (v & 16)
        ve(w, T, O, h, m);
      else if (v & 2 && T.class !== O.class && o(w, "class", null, O.class, m), v & 4 && o(w, "style", T.style, O.style, m), v & 8) {
        const D = f.dynamicProps;
        for (let K = 0; K < D.length; K++) {
          const U = D[K], ue = T[U], le = O[U];
          (le !== ue || U === "value") && o(w, U, ue, le, m, h);
        }
      }
      v & 1 && c.children !== f.children && d(w, f.children);
    } else !S && y == null && ve(w, T, O, h, m);
    ((R = O.onVnodeUpdated) || $) && ae(() => {
      R && Pe(R, h, f, c), $ && tt(f, c, h, "updated");
    }, b);
  }, Ke = (c, f, h, b, m, _, S) => {
    for (let w = 0; w < f.length; w++) {
      const v = c[w], y = f[w], $ = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        v.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (v.type === $e || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Pt(v, y) || // - In the case of a component, it could contain anything.
        v.shapeFlag & 70) ? a(v.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          h
        )
      );
      M(
        v,
        y,
        $,
        null,
        b,
        m,
        _,
        S,
        !0
      );
    }
  }, ve = (c, f, h, b, m) => {
    if (f !== h) {
      if (f !== B)
        for (const _ in f)
          !It(_) && !(_ in h) && o(
            c,
            _,
            f[_],
            null,
            m,
            b
          );
      for (const _ in h) {
        if (It(_)) continue;
        const S = h[_], w = f[_];
        S !== w && _ !== "value" && o(c, _, w, S, m, b);
      }
      "value" in h && o(c, "value", f.value, h.value, m);
    }
  }, Gt = (c, f, h, b, m, _, S, w, v) => {
    const y = f.el = c ? c.el : l(""), $ = f.anchor = c ? c.anchor : l("");
    let { patchFlag: T, dynamicChildren: O, slotScopeIds: R } = f;
    // #5523 dev root fragment may inherit directives
    (Fe || T & 2048) && (T = 0, v = !1, O = null), R && (w = w ? w.concat(R) : R), c == null ? (s(y, h, b), s($, h, b), oe(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      f.children || [],
      h,
      $,
      m,
      _,
      S,
      w,
      v
    )) : T > 0 && T & 64 && O && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (Ke(
      c.dynamicChildren,
      O,
      h,
      m,
      _,
      S,
      w
    ), es(c, f)) : Ce(
      c,
      f,
      h,
      $,
      m,
      _,
      S,
      w,
      v
    );
  }, Es = (c, f, h, b, m, _, S, w, v) => {
    f.slotScopeIds = w, c == null ? f.shapeFlag & 512 ? m.ctx.activate(
      f,
      h,
      b,
      S,
      v
    ) : ke(
      f,
      h,
      b,
      m,
      _,
      S,
      v
    ) : re(c, f, v);
  }, ke = (c, f, h, b, m, _, S) => {
    const w = c.component = ic(
      c,
      b,
      m
    );
    if (w.type.__hmrId && Rr(w), Zt(c), pt(w, "mount"), vs(c) && (w.ctx.renderer = St), pt(w, "init"), lc(w, !1, S), ht(w, "init"), w.asyncDep) {
      if (Fe && (c.el = null), m && m.registerDep(w, H, S), !c.el) {
        const v = w.subTree = Xe(Se);
        W(null, v, f, h);
      }
    } else
      H(
        w,
        c,
        f,
        h,
        m,
        _,
        S
      );
    Qt(), ht(w, "mount");
  }, re = (c, f, h) => {
    const b = f.component = c.component;
    if (Kl(c, f, h))
      if (b.asyncDep && !b.asyncResolved) {
        Zt(f), j(b, f, h), Qt();
        return;
      } else
        b.next = f, b.update();
    else
      f.el = c.el, b.vnode = f;
  }, H = (c, f, h, b, m, _, S) => {
    const w = () => {
      if (c.isMounted) {
        let { next: T, bu: O, u: R, parent: D, vnode: K } = c;
        {
          const Oe = _o(c);
          if (Oe) {
            T && (T.el = K.el, j(c, T, S)), Oe.asyncDep.then(() => {
              c.isUnmounted || w();
            });
            return;
          }
        }
        let U = T, ue;
        Zt(T || c.vnode), nt(c, !1), T ? (T.el = K.el, j(c, T, S)) : T = K, O && Tt(O), (ue = T.props && T.props.onVnodeBeforeUpdate) && Pe(ue, D, T, K), nt(c, !0), pt(c, "render");
        const le = qs(c);
        ht(c, "render");
        const Te = c.subTree;
        c.subTree = le, pt(c, "patch"), M(
          Te,
          le,
          // parent may have changed if it's in a teleport
          a(Te.el),
          // anchor may have changed if it's in a fragment
          Jt(Te),
          c,
          m,
          _
        ), ht(c, "patch"), T.el = le.el, U === null && kl(c, le.el), R && ae(R, m), (ue = T.props && T.props.onVnodeUpdated) && ae(
          () => Pe(ue, D, T, K),
          m
        ), Yi(c), Qt();
      } else {
        let T;
        const { el: O, props: R } = f, { bm: D, m: K, parent: U, root: ue, type: le } = c, Te = Ft(f);
        nt(c, !1), D && Tt(D), !Te && (T = R && R.onVnodeBeforeMount) && Pe(T, U, f), nt(c, !0);
        {
          ue.ce && ue.ce._injectChildStyle(le), pt(c, "render");
          const Oe = c.subTree = qs(c);
          ht(c, "render"), pt(c, "patch"), M(
            null,
            Oe,
            h,
            b,
            c,
            m,
            _
          ), ht(c, "patch"), f.el = Oe.el;
        }
        if (K && ae(K, m), !Te && (T = R && R.onVnodeMounted)) {
          const Oe = f;
          ae(
            () => Pe(T, U, Oe),
            m
          );
        }
        (f.shapeFlag & 256 || U && Ft(U.vnode) && U.vnode.shapeFlag & 256) && c.a && ae(c.a, m), c.isMounted = !0, Hr(c), f = h = b = null;
      }
    };
    c.scope.on();
    const v = c.effect = new vi(w);
    c.scope.off();
    const y = c.update = v.run.bind(v), $ = c.job = v.runIfDirty.bind(v);
    $.i = c, $.id = c.uid, v.scheduler = () => Cn($), nt(c, !0), v.onTrack = c.rtc ? (T) => Tt(c.rtc, T) : void 0, v.onTrigger = c.rtg ? (T) => Tt(c.rtg, T) : void 0, y();
  }, j = (c, f, h) => {
    f.component = c;
    const b = c.vnode.props;
    c.vnode = f, c.next = null, wl(c, f.props, b, h), Il(c, f.children, h), Ue(), Ds(c), Be();
  }, Ce = (c, f, h, b, m, _, S, w, v = !1) => {
    const y = c && c.children, $ = c ? c.shapeFlag : 0, T = f.children, { patchFlag: O, shapeFlag: R } = f;
    if (O > 0) {
      if (O & 128) {
        wt(
          y,
          T,
          h,
          b,
          m,
          _,
          S,
          w,
          v
        );
        return;
      } else if (O & 256) {
        An(
          y,
          T,
          h,
          b,
          m,
          _,
          S,
          w,
          v
        );
        return;
      }
    }
    R & 8 ? ($ & 16 && xt(y, m, _), T !== y && d(h, T)) : $ & 16 ? R & 16 ? wt(
      y,
      T,
      h,
      b,
      m,
      _,
      S,
      w,
      v
    ) : xt(y, m, _, !0) : ($ & 8 && d(h, ""), R & 16 && oe(
      T,
      h,
      b,
      m,
      _,
      S,
      w,
      v
    ));
  }, An = (c, f, h, b, m, _, S, w, v) => {
    c = c || mt, f = f || mt;
    const y = c.length, $ = f.length, T = Math.min(y, $);
    let O;
    for (O = 0; O < T; O++) {
      const R = f[O] = v ? Je(f[O]) : we(f[O]);
      M(
        c[O],
        R,
        h,
        null,
        m,
        _,
        S,
        w,
        v
      );
    }
    y > $ ? xt(
      c,
      m,
      _,
      !0,
      !1,
      T
    ) : oe(
      f,
      h,
      b,
      m,
      _,
      S,
      w,
      v,
      T
    );
  }, wt = (c, f, h, b, m, _, S, w, v) => {
    let y = 0;
    const $ = f.length;
    let T = c.length - 1, O = $ - 1;
    for (; y <= T && y <= O; ) {
      const R = c[y], D = f[y] = v ? Je(f[y]) : we(f[y]);
      if (Pt(R, D))
        M(
          R,
          D,
          h,
          null,
          m,
          _,
          S,
          w,
          v
        );
      else
        break;
      y++;
    }
    for (; y <= T && y <= O; ) {
      const R = c[T], D = f[O] = v ? Je(f[O]) : we(f[O]);
      if (Pt(R, D))
        M(
          R,
          D,
          h,
          null,
          m,
          _,
          S,
          w,
          v
        );
      else
        break;
      T--, O--;
    }
    if (y > T) {
      if (y <= O) {
        const R = O + 1, D = R < $ ? f[R].el : b;
        for (; y <= O; )
          M(
            null,
            f[y] = v ? Je(f[y]) : we(f[y]),
            h,
            D,
            m,
            _,
            S,
            w,
            v
          ), y++;
      }
    } else if (y > O)
      for (; y <= T; )
        qe(c[y], m, _, !0), y++;
    else {
      const R = y, D = y, K = /* @__PURE__ */ new Map();
      for (y = D; y <= O; y++) {
        const ne = f[y] = v ? Je(f[y]) : we(f[y]);
        ne.key != null && (K.has(ne.key) && x(
          "Duplicate keys found during update:",
          JSON.stringify(ne.key),
          "Make sure keys are unique."
        ), K.set(ne.key, y));
      }
      let U, ue = 0;
      const le = O - D + 1;
      let Te = !1, Oe = 0;
      const Ct = new Array(le);
      for (y = 0; y < le; y++) Ct[y] = 0;
      for (y = R; y <= T; y++) {
        const ne = c[y];
        if (ue >= le) {
          qe(ne, m, _, !0);
          continue;
        }
        let Ee;
        if (ne.key != null)
          Ee = K.get(ne.key);
        else
          for (U = D; U <= O; U++)
            if (Ct[U - D] === 0 && Pt(ne, f[U])) {
              Ee = U;
              break;
            }
        Ee === void 0 ? qe(ne, m, _, !0) : (Ct[Ee - D] = y + 1, Ee >= Oe ? Oe = Ee : Te = !0, M(
          ne,
          f[Ee],
          h,
          null,
          m,
          _,
          S,
          w,
          v
        ), ue++);
      }
      const As = Te ? Dl(Ct) : mt;
      for (U = As.length - 1, y = le - 1; y >= 0; y--) {
        const ne = D + y, Ee = f[ne], $s = ne + 1 < $ ? f[ne + 1].el : b;
        Ct[y] === 0 ? M(
          null,
          Ee,
          h,
          $s,
          m,
          _,
          S,
          w,
          v
        ) : Te && (U < 0 || y !== As[U] ? at(Ee, h, $s, 2) : U--);
      }
    }
  }, at = (c, f, h, b, m = null) => {
    const { el: _, type: S, transition: w, children: v, shapeFlag: y } = c;
    if (y & 6) {
      at(c.component.subTree, f, h, b);
      return;
    }
    if (y & 128) {
      c.suspense.move(f, h, b);
      return;
    }
    if (y & 64) {
      S.move(c, f, h, St);
      return;
    }
    if (S === $e) {
      s(_, f, h);
      for (let T = 0; T < v.length; T++)
        at(v[T], f, h, b);
      s(c.anchor, f, h);
      return;
    }
    if (S === nn) {
      fe(c, f, h);
      return;
    }
    if (b !== 2 && y & 1 && w)
      if (b === 0)
        w.beforeEnter(_), s(_, f, h), ae(() => w.enter(_), m);
      else {
        const { leave: T, delayLeave: O, afterLeave: R } = w, D = () => s(_, f, h), K = () => {
          T(_, () => {
            D(), R && R();
          });
        };
        O ? O(_, D, K) : K();
      }
    else
      s(_, f, h);
  }, qe = (c, f, h, b = !1, m = !1) => {
    const {
      type: _,
      props: S,
      ref: w,
      children: v,
      dynamicChildren: y,
      shapeFlag: $,
      patchFlag: T,
      dirs: O,
      cacheIndex: R
    } = c;
    if (T === -2 && (m = !1), w != null && pn(w, null, h, c, !0), R != null && (f.renderCache[R] = void 0), $ & 256) {
      f.ctx.deactivate(c);
      return;
    }
    const D = $ & 1 && O, K = !Ft(c);
    let U;
    if (K && (U = S && S.onVnodeBeforeUnmount) && Pe(U, f, c), $ & 6)
      Mo(c.component, h, b);
    else {
      if ($ & 128) {
        c.suspense.unmount(h, b);
        return;
      }
      D && tt(c, null, f, "beforeUnmount"), $ & 64 ? c.type.remove(
        c,
        f,
        h,
        St,
        b
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (_ !== $e || T > 0 && T & 64) ? xt(
        y,
        f,
        h,
        !1,
        !0
      ) : (_ === $e && T & 384 || !m && $ & 16) && xt(v, f, h), b && $n(c);
    }
    (K && (U = S && S.onVnodeUnmounted) || D) && ae(() => {
      U && Pe(U, f, c), D && tt(c, null, f, "unmounted");
    }, h);
  }, $n = (c) => {
    const { type: f, el: h, anchor: b, transition: m } = c;
    if (f === $e) {
      c.patchFlag > 0 && c.patchFlag & 2048 && m && !m.persisted ? c.children.forEach((S) => {
        S.type === Se ? i(S.el) : $n(S);
      }) : Ro(h, b);
      return;
    }
    if (f === nn) {
      E(c);
      return;
    }
    const _ = () => {
      i(h), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (c.shapeFlag & 1 && m && !m.persisted) {
      const { leave: S, delayLeave: w } = m, v = () => S(h, _);
      w ? w(c.el, _, v) : v();
    } else
      _();
  }, Ro = (c, f) => {
    let h;
    for (; c !== f; )
      h = g(c), i(c), c = h;
    i(f);
  }, Mo = (c, f, h) => {
    c.type.__hmrId && Mr(c);
    const { bum: b, scope: m, job: _, subTree: S, um: w, m: v, a: y } = c;
    ks(v), ks(y), b && Tt(b), m.stop(), _ && (_.flags |= 8, qe(S, c, f, h)), w && ae(w, f), ae(() => {
      c.isUnmounted = !0;
    }, f), f && f.pendingBranch && !f.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === f.pendingId && (f.deps--, f.deps === 0 && f.resolve()), Lr(c);
  }, xt = (c, f, h, b = !1, m = !1, _ = 0) => {
    for (let S = _; S < c.length; S++)
      qe(c[S], f, h, b, m);
  }, Jt = (c) => {
    if (c.shapeFlag & 6)
      return Jt(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const f = g(c.anchor || c.el), h = f && f[kr];
    return h ? g(h) : f;
  };
  let In = !1;
  const Ps = (c, f, h) => {
    c == null ? f._vnode && qe(f._vnode, null, null, !0) : M(
      f._vnode || null,
      c,
      f,
      null,
      null,
      null,
      h
    ), f._vnode = c, In || (In = !0, Ds(), ki(), In = !1);
  }, St = {
    p: M,
    um: qe,
    m: at,
    r: $n,
    mt: ke,
    mc: oe,
    pc: Ce,
    pbc: Ke,
    n: Jt,
    o: e
  };
  return {
    render: Ps,
    hydrate: void 0,
    createApp: _l(Ps)
  };
}
function Vn({ type: e, props: t }, n) {
  return n === "svg" && e === "foreignObject" || n === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : n;
}
function nt({ effect: e, job: t }, n) {
  n ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function jl(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function es(e, t, n = !1) {
  const s = e.children, i = t.children;
  if (P(s) && P(i))
    for (let o = 0; o < s.length; o++) {
      const r = s[o];
      let l = i[o];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = i[o] = Je(i[o]), l.el = r.el), !n && l.patchFlag !== -2 && es(r, l)), l.type === kt && (l.el = r.el), l.type === Se && !l.el && (l.el = r.el);
    }
}
function Dl(e) {
  const t = e.slice(), n = [0];
  let s, i, o, r, l;
  const u = e.length;
  for (s = 0; s < u; s++) {
    const p = e[s];
    if (p !== 0) {
      if (i = n[n.length - 1], e[i] < p) {
        t[s] = i, n.push(s);
        continue;
      }
      for (o = 0, r = n.length - 1; o < r; )
        l = o + r >> 1, e[n[l]] < p ? o = l + 1 : r = l;
      p < e[n[o]] && (o > 0 && (t[s] = n[o - 1]), n[o] = s);
    }
  }
  for (o = n.length, r = n[o - 1]; o-- > 0; )
    n[o] = r, r = t[r];
  return n;
}
function _o(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : _o(t);
}
function ks(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const Nl = Symbol.for("v-scx"), Hl = () => {
  {
    const e = tn(Nl);
    return e || x(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function Ln(e, t, n) {
  return I(t) || x(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), bo(e, t, n);
}
function bo(e, t, n = B) {
  const { immediate: s, deep: i, flush: o, once: r } = n;
  t || (s !== void 0 && x(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), i !== void 0 && x(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), r !== void 0 && x(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = q({}, n);
  l.onWarn = x;
  const u = t && s || !t && o !== "post";
  let p;
  if (Lt) {
    if (o === "sync") {
      const C = Hl();
      p = C.__watcherHandles || (C.__watcherHandles = []);
    } else if (!u) {
      const C = () => {
      };
      return C.stop = te, C.resume = te, C.pause = te, C;
    }
  }
  const d = Z;
  l.call = (C, A, M) => De(C, d, A, M);
  let a = !1;
  o === "post" ? l.scheduler = (C) => {
    ae(C, d && d.suspense);
  } : o !== "sync" && (a = !0, l.scheduler = (C, A) => {
    A ? C() : Cn(C);
  }), l.augmentJob = (C) => {
    t && (C.flags |= 4), a && (C.flags |= 2, d && (C.id = d.uid, C.i = d));
  };
  const g = Cr(e, t, l);
  return Lt && (p ? p.push(g) : u && g()), g;
}
function Vl(e, t, n) {
  const s = this.proxy, i = G(e) ? e.includes(".") ? yo(s, e) : () => s[e] : e.bind(s, s);
  let o;
  I(t) ? o = t : (o = t.handler, n = t);
  const r = qt(this), l = bo(i, o.bind(s), n);
  return r(), l;
}
function yo(e, t) {
  const n = t.split(".");
  return () => {
    let s = e;
    for (let i = 0; i < n.length && s; i++)
      s = s[n[i]];
    return s;
  };
}
const Ll = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ce(t)}Modifiers`] || e[`${he(t)}Modifiers`];
function Ul(e, t, ...n) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || B;
  {
    const {
      emitsOptions: d,
      propsOptions: [a]
    } = e;
    if (d)
      if (!(t in d))
        (!a || !(st(ce(t)) in a)) && x(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${st(ce(t))}" prop.`
        );
      else {
        const g = d[t];
        I(g) && (g(...n) || x(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let i = n;
  const o = t.startsWith("update:"), r = o && Ll(s, t.slice(7));
  r && (r.trim && (i = n.map((d) => G(d) ? d.trim() : d)), r.number && (i = n.map(Vo))), Wr(e, t, i);
  {
    const d = t.toLowerCase();
    d !== t && s[st(d)] && x(
      `Event "${d}" is emitted in component ${Pn(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${he(
        t
      )}" instead of "${t}".`
    );
  }
  let l, u = s[l = st(t)] || // also try camelCase event handler (#2249)
  s[l = st(ce(t))];
  !u && o && (u = s[l = st(he(t))]), u && De(
    u,
    e,
    6,
    i
  );
  const p = s[l + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, De(
      p,
      e,
      6,
      i
    );
  }
}
function vo(e, t, n = !1) {
  const s = t.emitsCache, i = s.get(e);
  if (i !== void 0)
    return i;
  const o = e.emits;
  let r = {}, l = !1;
  if (!I(e)) {
    const u = (p) => {
      const d = vo(p, t, !0);
      d && (l = !0, q(r, d));
    };
    !n && t.mixins.length && t.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  return !o && !l ? (k(e) && s.set(e, null), null) : (P(o) ? o.forEach((u) => r[u] = null) : q(r, o), k(e) && s.set(e, r), r);
}
function On(e, t) {
  return !e || !Ut(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), N(e, t[0].toLowerCase() + t.slice(1)) || N(e, he(t)) || N(e, t));
}
let ts = !1;
function mn() {
  ts = !0;
}
function qs(e) {
  const {
    type: t,
    vnode: n,
    proxy: s,
    withProxy: i,
    propsOptions: [o],
    slots: r,
    attrs: l,
    emit: u,
    render: p,
    renderCache: d,
    props: a,
    data: g,
    setupState: C,
    ctx: A,
    inheritAttrs: M
  } = e, Q = dn(e);
  let W, J;
  ts = !1;
  try {
    if (n.shapeFlag & 4) {
      const E = i || s, z = C.__isScriptSetup ? new Proxy(E, {
        get(be, ee, oe) {
          return x(
            `Property '${String(
              ee
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(be, ee, oe);
        }
      }) : E;
      W = we(
        p.call(
          z,
          E,
          d,
          Me(a),
          C,
          g,
          A
        )
      ), J = l;
    } else {
      const E = t;
      l === a && mn(), W = we(
        E.length > 1 ? E(
          Me(a),
          {
            get attrs() {
              return mn(), Me(l);
            },
            slots: r,
            emit: u
          }
        ) : E(
          Me(a),
          null
        )
      ), J = t.props ? l : Bl(l);
    }
  } catch (E) {
    jt.length = 0, Wt(E, e, 1), W = Xe(Se);
  }
  let L = W, fe;
  if (W.patchFlag > 0 && W.patchFlag & 2048 && ([L, fe] = wo(W)), J && M !== !1) {
    const E = Object.keys(J), { shapeFlag: z } = L;
    if (E.length) {
      if (z & 7)
        o && E.some(rn) && (J = Wl(
          J,
          o
        )), L = Qe(L, J, !1, !0);
      else if (!ts && L.type !== Se) {
        const be = Object.keys(l), ee = [], oe = [];
        for (let Ne = 0, Ke = be.length; Ne < Ke; Ne++) {
          const ve = be[Ne];
          Ut(ve) ? rn(ve) || ee.push(ve[2].toLowerCase() + ve.slice(3)) : oe.push(ve);
        }
        oe.length && x(
          `Extraneous non-props attributes (${oe.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), ee.length && x(
          `Extraneous non-emits event listeners (${ee.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return n.dirs && (Gs(L) || x(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), L = Qe(L, null, !1, !0), L.dirs = L.dirs ? L.dirs.concat(n.dirs) : n.dirs), n.transition && (Gs(L) || x(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), ys(L, n.transition)), fe ? fe(L) : W = L, dn(Q), W;
}
const wo = (e) => {
  const t = e.children, n = e.dynamicChildren, s = Ss(t, !1);
  if (s) {
    if (s.patchFlag > 0 && s.patchFlag & 2048)
      return wo(s);
  } else return [e, void 0];
  const i = t.indexOf(s), o = n ? n.indexOf(s) : -1, r = (l) => {
    t[i] = l, n && (o > -1 ? n[o] = l : l.patchFlag > 0 && (e.dynamicChildren = [...n, l]));
  };
  return [we(s), r];
};
function Ss(e, t = !0) {
  let n;
  for (let s = 0; s < e.length; s++) {
    const i = e[s];
    if (En(i)) {
      if (i.type !== Se || i.children === "v-if") {
        if (n)
          return;
        if (n = i, t && n.patchFlag > 0 && n.patchFlag & 2048)
          return Ss(n.children);
      }
    } else
      return;
  }
  return n;
}
const Bl = (e) => {
  let t;
  for (const n in e)
    (n === "class" || n === "style" || Ut(n)) && ((t || (t = {}))[n] = e[n]);
  return t;
}, Wl = (e, t) => {
  const n = {};
  for (const s in e)
    (!rn(s) || !(s.slice(9) in t)) && (n[s] = e[s]);
  return n;
}, Gs = (e) => e.shapeFlag & 7 || e.type === Se;
function Kl(e, t, n) {
  const { props: s, children: i, component: o } = e, { props: r, children: l, patchFlag: u } = t, p = o.emitsOptions;
  if ((i || l) && Fe || t.dirs || t.transition)
    return !0;
  if (n && u >= 0) {
    if (u & 1024)
      return !0;
    if (u & 16)
      return s ? Js(s, r, p) : !!r;
    if (u & 8) {
      const d = t.dynamicProps;
      for (let a = 0; a < d.length; a++) {
        const g = d[a];
        if (r[g] !== s[g] && !On(p, g))
          return !0;
      }
    }
  } else
    return (i || l) && (!l || !l.$stable) ? !0 : s === r ? !1 : s ? r ? Js(s, r, p) : !0 : !!r;
  return !1;
}
function Js(e, t, n) {
  const s = Object.keys(t);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let i = 0; i < s.length; i++) {
    const o = s[i];
    if (t[o] !== e[o] && !On(n, o))
      return !0;
  }
  return !1;
}
function kl({ vnode: e, parent: t }, n) {
  for (; t; ) {
    const s = t.subTree;
    if (s.suspense && s.suspense.activeBranch === e && (s.el = e.el), s === e)
      (e = t.vnode).el = n, t = t.parent;
    else
      break;
  }
}
const xo = (e) => e.__isSuspense;
function ql(e, t) {
  t && t.pendingBranch ? P(e) ? t.effects.push(...e) : t.effects.push(e) : Ki(e);
}
const $e = Symbol.for("v-fgt"), kt = Symbol.for("v-txt"), Se = Symbol.for("v-cmt"), nn = Symbol.for("v-stc"), jt = [];
let me = null;
function Gl(e = !1) {
  jt.push(me = e ? null : []);
}
function Jl() {
  jt.pop(), me = jt[jt.length - 1] || null;
}
let Vt = 1;
function Ys(e, t = !1) {
  Vt += e, e < 0 && me && t && (me.hasOnce = !0);
}
function Yl(e) {
  return e.dynamicChildren = Vt > 0 ? me || mt : null, Jl(), Vt > 0 && me && me.push(e), e;
}
function zl(e, t, n, s, i, o) {
  return Yl(
    Co(
      e,
      t,
      n,
      s,
      i,
      o,
      !0
    )
  );
}
function En(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Pt(e, t) {
  if (t.shapeFlag & 6 && e.component) {
    const n = en.get(t.type);
    if (n && n.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Xl = (...e) => Zl(
  ...e
), So = ({ key: e }) => e ?? null, sn = ({
  ref: e,
  ref_key: t,
  ref_for: n
}) => (typeof e == "number" && (e = "" + e), e != null ? G(e) || Y(e) || I(e) ? { i: ge, r: e, k: t, f: !!n } : e : null);
function Co(e, t = null, n = null, s = 0, i = null, o = e === $e ? 0 : 1, r = !1, l = !1) {
  const u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && So(t),
    ref: t && sn(t),
    scopeId: Xi,
    slotScopeIds: null,
    children: n,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: o,
    patchFlag: s,
    dynamicProps: i,
    dynamicChildren: null,
    appContext: null,
    ctx: ge
  };
  return l ? (Cs(u, n), o & 128 && e.normalize(u)) : n && (u.shapeFlag |= G(n) ? 8 : 16), u.key !== u.key && x("VNode created with invalid key (NaN). VNode type:", u.type), Vt > 0 && // avoid a block node from tracking itself
  !r && // has current parent block
  me && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (u.patchFlag > 0 || o & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  u.patchFlag !== 32 && me.push(u), u;
}
const Xe = Xl;
function Zl(e, t = null, n = null, s = 0, i = null, o = !1) {
  if ((!e || e === rl) && (e || x(`Invalid vnode type when creating vnode: ${e}.`), e = Se), En(e)) {
    const l = Qe(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return n && Cs(l, n), Vt > 0 && !o && me && (l.shapeFlag & 6 ? me[me.indexOf(e)] = l : me.push(l)), l.patchFlag = -2, l;
  }
  if (Ao(e) && (e = e.__vccOpts), t) {
    t = Ql(t);
    let { class: l, style: u } = t;
    l && !G(l) && (t.class = us(l)), k(u) && (cn(u) && !P(u) && (u = q({}, u)), t.style = fs(u));
  }
  const r = G(e) ? 1 : xo(e) ? 128 : qr(e) ? 64 : k(e) ? 4 : I(e) ? 2 : 0;
  return r & 4 && cn(e) && (e = F(e), x(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), Co(
    e,
    t,
    n,
    s,
    i,
    r,
    o,
    !0
  );
}
function Ql(e) {
  return e ? cn(e) || fo(e) ? q({}, e) : e : null;
}
function Qe(e, t, n = !1, s = !1) {
  const { props: i, ref: o, patchFlag: r, children: l, transition: u } = e, p = t ? tc(i || {}, t) : i, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && So(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      n && o ? P(o) ? o.concat(sn(t)) : [o, sn(t)] : sn(t)
    ) : o,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: r === -1 && P(l) ? l.map(To) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== $e ? r === -1 ? 16 : r | 16 : r,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: u,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Qe(e.ssContent),
    ssFallback: e.ssFallback && Qe(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return u && s && ys(
    d,
    u.clone(d)
  ), d;
}
function To(e) {
  const t = Qe(e);
  return P(e.children) && (t.children = e.children.map(To)), t;
}
function ec(e = " ", t = 0) {
  return Xe(kt, null, e, t);
}
function we(e) {
  return e == null || typeof e == "boolean" ? Xe(Se) : P(e) ? Xe(
    $e,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : En(e) ? Je(e) : Xe(kt, null, String(e));
}
function Je(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Qe(e);
}
function Cs(e, t) {
  let n = 0;
  const { shapeFlag: s } = e;
  if (t == null)
    t = null;
  else if (P(t))
    n = 16;
  else if (typeof t == "object")
    if (s & 65) {
      const i = t.default;
      i && (i._c && (i._d = !1), Cs(e, i()), i._c && (i._d = !0));
      return;
    } else {
      n = 32;
      const i = t._;
      !i && !fo(t) ? t._ctx = ge : i === 3 && ge && (ge.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else I(t) ? (t = { default: t, _ctx: ge }, n = 32) : (t = String(t), s & 64 ? (n = 16, t = [ec(t)]) : n = 8);
  e.children = t, e.shapeFlag |= n;
}
function tc(...e) {
  const t = {};
  for (let n = 0; n < e.length; n++) {
    const s = e[n];
    for (const i in s)
      if (i === "class")
        t.class !== s.class && (t.class = us([t.class, s.class]));
      else if (i === "style")
        t.style = fs([t.style, s.style]);
      else if (Ut(i)) {
        const o = t[i], r = s[i];
        r && o !== r && !(P(o) && o.includes(r)) && (t[i] = o ? [].concat(o, r) : r);
      } else i !== "" && (t[i] = s[i]);
  }
  return t;
}
function Pe(e, t, n, s = null) {
  De(e, t, 7, [
    n,
    s
  ]);
}
const nc = ro();
let sc = 0;
function ic(e, t, n) {
  const s = e.type, i = (t ? t.appContext : e.appContext) || nc, o = {
    uid: sc++,
    vnode: e,
    type: s,
    parent: t,
    appContext: i,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Zo(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(i.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: ao(s, i),
    emitsOptions: vo(s, i),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: B,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: B,
    data: B,
    props: B,
    attrs: B,
    slots: B,
    refs: B,
    setupState: B,
    setupContext: null,
    // suspense related
    suspense: n,
    suspenseId: n ? n.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return o.ctx = ll(o), o.root = t ? t.root : o, o.emit = Ul.bind(null, o), e.ce && e.ce(o), o;
}
let Z = null;
const oc = () => Z || ge;
let _n, ns;
{
  const e = Bt(), t = (n, s) => {
    let i;
    return (i = e[n]) || (i = e[n] = []), i.push(s), (o) => {
      i.length > 1 ? i.forEach((r) => r(o)) : i[0](o);
    };
  };
  _n = t(
    "__VUE_INSTANCE_SETTERS__",
    (n) => Z = n
  ), ns = t(
    "__VUE_SSR_SETTERS__",
    (n) => Lt = n
  );
}
const qt = (e) => {
  const t = Z;
  return _n(e), e.scope.on(), () => {
    e.scope.off(), _n(t);
  };
}, zs = () => {
  Z && Z.scope.off(), _n(null);
}, rc = /* @__PURE__ */ Le("slot,component");
function ss(e, { isNativeTag: t }) {
  (rc(e) || t(e)) && x(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function Oo(e) {
  return e.vnode.shapeFlag & 4;
}
let Lt = !1;
function lc(e, t = !1, n = !1) {
  t && ns(t);
  const { props: s, children: i } = e.vnode, o = Oo(e);
  yl(e, s, o, t), $l(e, i, n);
  const r = o ? cc(e, t) : void 0;
  return t && ns(!1), r;
}
function cc(e, t) {
  var n;
  const s = e.type;
  {
    if (s.name && ss(s.name, e.appContext.config), s.components) {
      const o = Object.keys(s.components);
      for (let r = 0; r < o.length; r++)
        ss(o[r], e.appContext.config);
    }
    if (s.directives) {
      const o = Object.keys(s.directives);
      for (let r = 0; r < o.length; r++)
        Zi(o[r]);
    }
    s.compilerOptions && fc() && x(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, so), cl(e);
  const { setup: i } = s;
  if (i) {
    Ue();
    const o = e.setupContext = i.length > 1 ? dc(e) : null, r = qt(e), l = vt(
      i,
      e,
      0,
      [
        Me(e.props),
        o
      ]
    ), u = rs(l);
    if (Be(), r(), (u || e.sp) && !Ft(e) && eo(e), u) {
      if (l.then(zs, zs), t)
        return l.then((p) => {
          Xs(e, p, t);
        }).catch((p) => {
          Wt(p, e, 0);
        });
      if (e.asyncDep = l, !e.suspense) {
        const p = (n = s.name) != null ? n : "Anonymous";
        x(
          `Component <${p}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      Xs(e, l, t);
  } else
    Eo(e, t);
}
function Xs(e, t, n) {
  I(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : k(t) ? (En(t) && x(
    "setup() should not return VNodes directly - return a render function instead."
  ), e.devtoolsRawSetupState = t, e.setupState = Vi(t), fl(e)) : t !== void 0 && x(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), Eo(e, n);
}
const fc = () => !0;
function Eo(e, t, n) {
  const s = e.type;
  e.render || (e.render = s.render || te);
  {
    const i = qt(e);
    Ue();
    try {
      al(e);
    } finally {
      Be(), i();
    }
  }
  !s.render && e.render === te && !t && (s.template ? x(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : x("Component is missing template or render function: ", s));
}
const uc = {
  get(e, t) {
    return mn(), X(e, "get", ""), e[t];
  },
  set() {
    return x("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return x("setupContext.attrs is readonly."), !1;
  }
};
function ac(e) {
  return new Proxy(e.slots, {
    get(t, n) {
      return X(e, "get", "$slots"), t[n];
    }
  });
}
function dc(e) {
  const t = (n) => {
    if (e.exposed && x("expose() should be called only once per setup()."), n != null) {
      let s = typeof n;
      s === "object" && (P(n) ? s = "array" : Y(n) && (s = "ref")), s !== "object" && x(
        `expose() should be passed a plain object, received ${s}.`
      );
    }
    e.exposed = n || {};
  };
  {
    let n, s;
    return Object.freeze({
      get attrs() {
        return n || (n = new Proxy(e.attrs, uc));
      },
      get slots() {
        return s || (s = ac(e));
      },
      get emit() {
        return (i, ...o) => e.emit(i, ...o);
      },
      expose: t
    });
  }
}
function Ts(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Vi(yr(e.exposed)), {
    get(t, n) {
      if (n in t)
        return t[n];
      if (n in ft)
        return ft[n](e);
    },
    has(t, n) {
      return n in t || n in ft;
    }
  })) : e.proxy;
}
const pc = /(?:^|[-_])(\w)/g, hc = (e) => e.replace(pc, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function Po(e, t = !0) {
  return I(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Pn(e, t, n = !1) {
  let s = Po(t);
  if (!s && t.__file) {
    const i = t.__file.match(/([^/\\]+)\.\w+$/);
    i && (s = i[1]);
  }
  if (!s && e && e.parent) {
    const i = (o) => {
      for (const r in o)
        if (o[r] === t)
          return r;
    };
    s = i(
      e.components || e.parent.type.components
    ) || i(e.appContext.components);
  }
  return s ? hc(s) : n ? "App" : "Anonymous";
}
function Ao(e) {
  return I(e) && "__vccOpts" in e;
}
const gc = (e, t) => {
  const n = xr(e, t, Lt);
  {
    const s = oc();
    s && s.appContext.config.warnRecursiveComputed && (n._warnRecursive = !0);
  }
  return n;
};
function mc() {
  if (typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, n = { style: "color:#f5222d" }, s = { style: "color:#eb2f96" }, i = {
    __vue_custom_formatter: !0,
    header(a) {
      return k(a) ? a.__isVue ? ["div", e, "VueInstance"] : Y(a) ? [
        "div",
        {},
        ["span", e, d(a)],
        "<",
        // avoid debugger accessing value affecting behavior
        l("_value" in a ? a._value : a),
        ">"
      ] : _t(a) ? [
        "div",
        {},
        ["span", e, _e(a) ? "ShallowReactive" : "Reactive"],
        "<",
        l(a),
        `>${Ze(a) ? " (readonly)" : ""}`
      ] : Ze(a) ? [
        "div",
        {},
        ["span", e, _e(a) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(a),
        ">"
      ] : null : null;
    },
    hasBody(a) {
      return a && a.__isVue;
    },
    body(a) {
      if (a && a.__isVue)
        return [
          "div",
          {},
          ...o(a.$)
        ];
    }
  };
  function o(a) {
    const g = [];
    a.type.props && a.props && g.push(r("props", F(a.props))), a.setupState !== B && g.push(r("setup", a.setupState)), a.data !== B && g.push(r("data", F(a.data)));
    const C = u(a, "computed");
    C && g.push(r("computed", C));
    const A = u(a, "inject");
    return A && g.push(r("injected", A)), g.push([
      "div",
      {},
      [
        "span",
        {
          style: s.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: a }]
    ]), g;
  }
  function r(a, g) {
    return g = q({}, g), Object.keys(g).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        a
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(g).map((C) => [
          "div",
          {},
          ["span", s, C + ": "],
          l(g[C], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(a, g = !0) {
    return typeof a == "number" ? ["span", t, a] : typeof a == "string" ? ["span", n, JSON.stringify(a)] : typeof a == "boolean" ? ["span", s, a] : k(a) ? ["object", { object: g ? F(a) : a }] : ["span", n, String(a)];
  }
  function u(a, g) {
    const C = a.type;
    if (I(C))
      return;
    const A = {};
    for (const M in a.ctx)
      p(C, M, g) && (A[M] = a.ctx[M]);
    return A;
  }
  function p(a, g, C) {
    const A = a[C];
    if (P(A) && A.includes(g) || k(A) && g in A || a.extends && p(a.extends, g, C) || a.mixins && a.mixins.some((M) => p(M, g, C)))
      return !0;
  }
  function d(a) {
    return _e(a) ? "ShallowRef" : a.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(i) : window.devtoolsFormatters = [i];
}
const Zs = "3.5.13", ye = x;
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let is;
const Qs = typeof window < "u" && window.trustedTypes;
if (Qs)
  try {
    is = /* @__PURE__ */ Qs.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    ye(`Error creating trusted types policy: ${e}`);
  }
const $o = is ? (e) => is.createHTML(e) : (e) => e, _c = "http://www.w3.org/2000/svg", bc = "http://www.w3.org/1998/Math/MathML", Ve = typeof document < "u" ? document : null, ei = Ve && /* @__PURE__ */ Ve.createElement("template"), yc = {
  insert: (e, t, n) => {
    t.insertBefore(e, n || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, n, s) => {
    const i = t === "svg" ? Ve.createElementNS(_c, e) : t === "mathml" ? Ve.createElementNS(bc, e) : n ? Ve.createElement(e, { is: n }) : Ve.createElement(e);
    return e === "select" && s && s.multiple != null && i.setAttribute("multiple", s.multiple), i;
  },
  createText: (e) => Ve.createTextNode(e),
  createComment: (e) => Ve.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ve.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, n, s, i, o) {
    const r = n ? n.previousSibling : t.lastChild;
    if (i && (i === o || i.nextSibling))
      for (; t.insertBefore(i.cloneNode(!0), n), !(i === o || !(i = i.nextSibling)); )
        ;
    else {
      ei.innerHTML = $o(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const l = ei.content;
      if (s === "svg" || s === "mathml") {
        const u = l.firstChild;
        for (; u.firstChild; )
          l.appendChild(u.firstChild);
        l.removeChild(u);
      }
      t.insertBefore(l, n);
    }
    return [
      // first
      r ? r.nextSibling : t.firstChild,
      // last
      n ? n.previousSibling : t.lastChild
    ];
  }
}, vc = Symbol("_vtc");
function wc(e, t, n) {
  const s = e[vc];
  s && (t = (t ? [t, ...s] : [...s]).join(" ")), t == null ? e.removeAttribute("class") : n ? e.setAttribute("class", t) : e.className = t;
}
const ti = Symbol("_vod"), xc = Symbol("_vsh"), Sc = Symbol("CSS_VAR_TEXT"), Cc = /(^|;)\s*display\s*:/;
function Tc(e, t, n) {
  const s = e.style, i = G(n);
  let o = !1;
  if (n && !i) {
    if (t)
      if (G(t))
        for (const r of t.split(";")) {
          const l = r.slice(0, r.indexOf(":")).trim();
          n[l] == null && on(s, l, "");
        }
      else
        for (const r in t)
          n[r] == null && on(s, r, "");
    for (const r in n)
      r === "display" && (o = !0), on(s, r, n[r]);
  } else if (i) {
    if (t !== n) {
      const r = s[Sc];
      r && (n += ";" + r), s.cssText = n, o = Cc.test(n);
    }
  } else t && e.removeAttribute("style");
  ti in e && (e[ti] = o ? s.display : "", e[xc] && (s.display = "none"));
}
const Oc = /[^\\];\s*$/, ni = /\s*!important$/;
function on(e, t, n) {
  if (P(n))
    n.forEach((s) => on(e, t, s));
  else if (n == null && (n = ""), Oc.test(n) && ye(
    `Unexpected semicolon at the end of '${t}' style value: '${n}'`
  ), t.startsWith("--"))
    e.setProperty(t, n);
  else {
    const s = Ec(e, t);
    ni.test(n) ? e.setProperty(
      he(s),
      n.replace(ni, ""),
      "important"
    ) : e[s] = n;
  }
}
const si = ["Webkit", "Moz", "ms"], Un = {};
function Ec(e, t) {
  const n = Un[t];
  if (n)
    return n;
  let s = ce(t);
  if (s !== "filter" && s in e)
    return Un[t] = s;
  s = wn(s);
  for (let i = 0; i < si.length; i++) {
    const o = si[i] + s;
    if (o in e)
      return Un[t] = o;
  }
  return t;
}
const ii = "http://www.w3.org/1999/xlink";
function oi(e, t, n, s, i, o = Xo(t)) {
  s && t.startsWith("xlink:") ? n == null ? e.removeAttributeNS(ii, t.slice(6, t.length)) : e.setAttributeNS(ii, t, n) : n == null || o && !mi(n) ? e.removeAttribute(t) : e.setAttribute(
    t,
    o ? "" : et(n) ? String(n) : n
  );
}
function ri(e, t, n, s, i) {
  if (t === "innerHTML" || t === "textContent") {
    n != null && (e[t] = t === "innerHTML" ? $o(n) : n);
    return;
  }
  const o = e.tagName;
  if (t === "value" && o !== "PROGRESS" && // custom elements may use _value internally
  !o.includes("-")) {
    const l = o === "OPTION" ? e.getAttribute("value") || "" : e.value, u = n == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(n);
    (l !== u || !("_value" in e)) && (e.value = u), n == null && e.removeAttribute(t), e._value = n;
    return;
  }
  let r = !1;
  if (n === "" || n == null) {
    const l = typeof e[t];
    l === "boolean" ? n = mi(n) : n == null && l === "string" ? (n = "", r = !0) : l === "number" && (n = 0, r = !0);
  }
  try {
    e[t] = n;
  } catch (l) {
    r || ye(
      `Failed setting prop "${t}" on <${o.toLowerCase()}>: value ${n} is invalid.`,
      l
    );
  }
  r && e.removeAttribute(i || t);
}
function Pc(e, t, n, s) {
  e.addEventListener(t, n, s);
}
function Ac(e, t, n, s) {
  e.removeEventListener(t, n, s);
}
const li = Symbol("_vei");
function $c(e, t, n, s, i = null) {
  const o = e[li] || (e[li] = {}), r = o[t];
  if (s && r)
    r.value = fi(s, t);
  else {
    const [l, u] = Ic(t);
    if (s) {
      const p = o[t] = Fc(
        fi(s, t),
        i
      );
      Pc(e, l, p, u);
    } else r && (Ac(e, l, r, u), o[t] = void 0);
  }
}
const ci = /(?:Once|Passive|Capture)$/;
function Ic(e) {
  let t;
  if (ci.test(e)) {
    t = {};
    let s;
    for (; s = e.match(ci); )
      e = e.slice(0, e.length - s[0].length), t[s[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : he(e.slice(2)), t];
}
let Bn = 0;
const Rc = /* @__PURE__ */ Promise.resolve(), Mc = () => Bn || (Rc.then(() => Bn = 0), Bn = Date.now());
function Fc(e, t) {
  const n = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= n.attached)
      return;
    De(
      jc(s, n.value),
      t,
      5,
      [s]
    );
  };
  return n.value = e, n.attached = Mc(), n;
}
function fi(e, t) {
  return I(e) || P(e) ? e : (ye(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), te);
}
function jc(e, t) {
  if (P(t)) {
    const n = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      n.call(e), e._stopped = !0;
    }, t.map(
      (s) => (i) => !i._stopped && s && s(i)
    );
  } else
    return t;
}
const ui = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Dc = (e, t, n, s, i, o) => {
  const r = i === "svg";
  t === "class" ? wc(e, s, r) : t === "style" ? Tc(e, n, s) : Ut(t) ? rn(t) || $c(e, t, n, s, o) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : Nc(e, t, s, r)) ? (ri(e, t, s), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && oi(e, t, s, r, o, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !G(s)) ? ri(e, ce(t), s, o, t) : (t === "true-value" ? e._trueValue = s : t === "false-value" && (e._falseValue = s), oi(e, t, s, r));
};
function Nc(e, t, n, s) {
  if (s)
    return !!(t === "innerHTML" || t === "textContent" || t in e && ui(t) && I(n));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const i = e.tagName;
    if (i === "IMG" || i === "VIDEO" || i === "CANVAS" || i === "SOURCE")
      return !1;
  }
  return ui(t) && G(n) ? !1 : t in e;
}
const ai = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Hc(e, t, n) {
  const s = /* @__PURE__ */ Qi(e, t);
  yn(s) && q(s, t);
  class i extends Os {
    constructor(r) {
      super(s, r, n);
    }
  }
  return i.def = s, i;
}
const Vc = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Os extends Vc {
  constructor(t, n = {}, s = pi) {
    super(), this._def = t, this._props = n, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && s !== pi ? this._root = this.shadowRoot : (this.shadowRoot && ye(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this), this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof Os) {
        this._parent = t;
        break;
      }
    this._instance || (this._resolved ? (this._setParent(), this._update()) : t && t._pendingResolve ? this._pendingResolve = t._pendingResolve.then(() => {
      this._pendingResolve = void 0, this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(t = this._parent) {
    t && (this._instance.parent = t._instance, this._instance.provides = t._instance.provides);
  }
  disconnectedCallback() {
    this._connected = !1, Bi(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    this._ob = new MutationObserver((s) => {
      for (const i of s)
        this._setAttr(i.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (s, i = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: o, styles: r } = s;
      let l;
      if (o && !P(o))
        for (const u in o) {
          const p = o[u];
          (p === Number || p && p.type === Number) && (u in this._props && (this._props[u] = Is(this._props[u])), (l || (l = /* @__PURE__ */ Object.create(null)))[ce(u)] = !0);
        }
      this._numberProps = l, i && this._resolveProps(s), this.shadowRoot ? this._applyStyles(r) : r && ye(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(s);
    }, n = this._def.__asyncLoader;
    n ? this._pendingResolve = n().then(
      (s) => t(this._def = s, !0)
    ) : t(this._def);
  }
  _mount(t) {
    t.name || (t.name = "VueElement"), this._app = this._createApp(t), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const n = this._instance && this._instance.exposed;
    if (n)
      for (const s in n)
        N(this, s) ? ye(`Exposed property "${s}" already exists on custom element.`) : Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Hi(n[s])
        });
  }
  _resolveProps(t) {
    const { props: n } = t, s = P(n) ? n : Object.keys(n || {});
    for (const i of Object.keys(this))
      i[0] !== "_" && s.includes(i) && this._setProp(i, this[i]);
    for (const i of s.map(ce))
      Object.defineProperty(this, i, {
        get() {
          return this._getProp(i);
        },
        set(o) {
          this._setProp(i, o, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const n = this.hasAttribute(t);
    let s = n ? this.getAttribute(t) : ai;
    const i = ce(t);
    n && this._numberProps && this._numberProps[i] && (s = Is(s)), this._setProp(i, s, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(t) {
    return this._props[t];
  }
  /**
   * @internal
   */
  _setProp(t, n, s = !0, i = !1) {
    if (n !== this._props[t] && (n === ai ? delete this._props[t] : (this._props[t] = n, t === "key" && this._app && (this._app._ceVNode.key = n)), i && this._instance && this._update(), s)) {
      const o = this._ob;
      o && o.disconnect(), n === !0 ? this.setAttribute(he(t), "") : typeof n == "string" || typeof n == "number" ? this.setAttribute(he(t), n + "") : n || this.removeAttribute(he(t)), o && o.observe(this, { attributes: !0 });
    }
  }
  _update() {
    Uc(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const n = Xe(this._def, q(t, this._props));
    return this._instance || (n.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0, s.ceReload = (o) => {
        this._styles && (this._styles.forEach((r) => this._root.removeChild(r)), this._styles.length = 0), this._applyStyles(o), this._instance = null, this._update();
      };
      const i = (o, r) => {
        this.dispatchEvent(
          new CustomEvent(
            o,
            yn(r[0]) ? q({ detail: r }, r[0]) : { detail: r }
          )
        );
      };
      s.emit = (o, ...r) => {
        i(o, r), he(o) !== o && i(he(o), r);
      }, this._setParent();
    }), n;
  }
  _applyStyles(t, n) {
    if (!t) return;
    if (n) {
      if (n === this._def || this._styleChildren.has(n))
        return;
      this._styleChildren.add(n);
    }
    const s = this._nonce;
    for (let i = t.length - 1; i >= 0; i--) {
      const o = document.createElement("style");
      if (s && o.setAttribute("nonce", s), o.textContent = t[i], this.shadowRoot.prepend(o), n) {
        if (n.__hmrId) {
          this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
          let r = this._childStyles.get(n.__hmrId);
          r || this._childStyles.set(n.__hmrId, r = []), r.push(o);
        }
      } else
        (this._styles || (this._styles = [])).push(o);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let n;
    for (; n = this.firstChild; ) {
      const s = n.nodeType === 1 && n.getAttribute("slot") || "default";
      (t[s] || (t[s] = [])).push(n), this.removeChild(n);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), n = this._instance.type.__scopeId;
    for (let s = 0; s < t.length; s++) {
      const i = t[s], o = i.getAttribute("name") || "default", r = this._slots[o], l = i.parentNode;
      if (r)
        for (const u of r) {
          if (n && u.nodeType === 1) {
            const p = n + "-s", d = document.createTreeWalker(u, 1);
            u.setAttribute(p, "");
            let a;
            for (; a = d.nextNode(); )
              a.setAttribute(p, "");
          }
          l.insertBefore(u, i);
        }
      else
        for (; i.firstChild; ) l.insertBefore(i.firstChild, i);
      l.removeChild(i);
    }
  }
  /**
   * @internal
   */
  _injectChildStyle(t) {
    this._applyStyles(t.styles, t);
  }
  /**
   * @internal
   */
  _removeChildStyle(t) {
    if (this._styleChildren.delete(t), this._childStyles && t.__hmrId) {
      const n = this._childStyles.get(t.__hmrId);
      n && (n.forEach((s) => this._root.removeChild(s)), n.length = 0);
    }
  }
}
const Lc = /* @__PURE__ */ q({ patchProp: Dc }, yc);
let di;
function Io() {
  return di || (di = Ml(Lc));
}
const Uc = (...e) => {
  Io().render(...e);
}, pi = (...e) => {
  const t = Io().createApp(...e);
  Wc(t), Kc(t);
  const { mount: n } = t;
  return t.mount = (s) => {
    const i = kc(s);
    if (!i) return;
    const o = t._component;
    !I(o) && !o.render && !o.template && (o.template = i.innerHTML), i.nodeType === 1 && (i.textContent = "");
    const r = n(i, !1, Bc(i));
    return i instanceof Element && (i.removeAttribute("v-cloak"), i.setAttribute("data-v-app", "")), r;
  }, t;
};
function Bc(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Wc(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => Go(t) || Jo(t) || Yo(t),
    writable: !1
  });
}
function Kc(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        ye(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const n = e.config.compilerOptions, s = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return ye(s), n;
      },
      set() {
        ye(s);
      }
    });
  }
}
function kc(e) {
  if (G(e)) {
    const t = document.querySelector(e);
    return t || ye(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && ye(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function qc() {
  mc();
}
qc();
const Gc = ["type"], Jc = /* @__PURE__ */ Qi({
  shadow: !0,
  __name: "BaseButton.ce",
  props: {
    label: { type: String },
    type: { type: String }
  },
  setup(e) {
    return (t, n) => (Gl(), zl("button", {
      type: t.type || "button"
    }, bi(t.label), 9, Gc));
  }
}), Yc = "button[data-v-6a018fa8]{padding:.5rem 1rem;background-color:#2563eb;color:#fff;border-radius:.25rem;transition:background-color .2s ease;border:none;cursor:pointer;font-size:1rem;line-height:1.5}button[data-v-6a018fa8]:hover{background-color:#1d4ed8}", zc = (e, t) => {
  const n = e.__vccOpts || e;
  for (const [s, i] of t)
    n[s] = i;
  return n;
}, Xc = /* @__PURE__ */ zc(Jc, [["styles", [Yc]], ["__scopeId", "data-v-6a018fa8"]]), Zc = /* @__PURE__ */ Hc(Xc);
customElements.define("base-button", Zc);
