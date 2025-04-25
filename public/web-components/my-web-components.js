/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function ot(e) {
  const t = /* @__PURE__ */ Object.create(null);
  for (const r of e.split(",")) t[r] = 1;
  return (r) => r in t;
}
const te = Object.freeze({}), Rt = Object.freeze([]), he = () => {
}, ps = () => !1, ar = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Or = (e) => e.startsWith("onUpdate:"), le = Object.assign, Vo = (e, t) => {
  const r = e.indexOf(t);
  r > -1 && e.splice(r, 1);
}, hs = Object.prototype.hasOwnProperty, G = (e, t) => hs.call(e, t), I = Array.isArray, xt = (e) => dr(e) === "[object Map]", Nt = (e) => dr(e) === "[object Set]", an = (e) => dr(e) === "[object Date]", D = (e) => typeof e == "function", ie = (e) => typeof e == "string", Ge = (e) => typeof e == "symbol", re = (e) => e !== null && typeof e == "object", Po = (e) => (re(e) || D(e)) && D(e.then) && D(e.catch), Jn = Object.prototype.toString, dr = (e) => Jn.call(e), Fo = (e) => dr(e).slice(8, -1), Lr = (e) => dr(e) === "[object Object]", Ro = (e) => ie(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, Xt = /* @__PURE__ */ ot(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), ms = /* @__PURE__ */ ot(
  "bind,cloak,else-if,else,for,html,if,model,on,once,pre,show,slot,text,memo"
), Ur = (e) => {
  const t = /* @__PURE__ */ Object.create(null);
  return (r) => t[r] || (t[r] = e(r));
}, bs = /-(\w)/g, ue = Ur(
  (e) => e.replace(bs, (t, r) => r ? r.toUpperCase() : "")
), gs = /\B([A-Z])/g, Te = Ur(
  (e) => e.replace(gs, "-$1").toLowerCase()
), Tt = Ur((e) => e.charAt(0).toUpperCase() + e.slice(1)), yt = Ur(
  (e) => e ? `on${Tt(e)}` : ""
), ht = (e, t) => !Object.is(e, t), Pt = (e, ...t) => {
  for (let r = 0; r < e.length; r++)
    e[r](...t);
}, Er = (e, t, r, o = !1) => {
  Object.defineProperty(e, t, {
    configurable: !0,
    enumerable: !1,
    writable: o,
    value: r
  });
}, Ar = (e) => {
  const t = parseFloat(e);
  return isNaN(t) ? e : t;
}, dn = (e) => {
  const t = ie(e) ? Number(e) : NaN;
  return isNaN(t) ? e : t;
};
let cn;
const cr = () => cn || (cn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function jo(e) {
  if (I(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++) {
      const o = e[r], n = ie(o) ? ws(o) : jo(o);
      if (n)
        for (const i in n)
          t[i] = n[i];
    }
    return t;
  } else if (ie(e) || re(e))
    return e;
}
const vs = /;(?![^(]*\))/g, ys = /:([^]+)/, _s = /\/\*[^]*?\*\//g;
function ws(e) {
  const t = {};
  return e.replace(_s, "").split(vs).forEach((r) => {
    if (r) {
      const o = r.split(ys);
      o.length > 1 && (t[o[0].trim()] = o[1].trim());
    }
  }), t;
}
function se(e) {
  let t = "";
  if (ie(e))
    t = e;
  else if (I(e))
    for (let r = 0; r < e.length; r++) {
      const o = se(e[r]);
      o && (t += o + " ");
    }
  else if (re(e))
    for (const r in e)
      e[r] && (t += r + " ");
  return t.trim();
}
const xs = "html,body,base,head,link,meta,style,title,address,article,aside,footer,header,hgroup,h1,h2,h3,h4,h5,h6,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,summary,template,blockquote,iframe,tfoot", ks = "svg,animate,animateMotion,animateTransform,circle,clipPath,color-profile,defs,desc,discard,ellipse,feBlend,feColorMatrix,feComponentTransfer,feComposite,feConvolveMatrix,feDiffuseLighting,feDisplacementMap,feDistantLight,feDropShadow,feFlood,feFuncA,feFuncB,feFuncG,feFuncR,feGaussianBlur,feImage,feMerge,feMergeNode,feMorphology,feOffset,fePointLight,feSpecularLighting,feSpotLight,feTile,feTurbulence,filter,foreignObject,g,hatch,hatchpath,image,line,linearGradient,marker,mask,mesh,meshgradient,meshpatch,meshrow,metadata,mpath,path,pattern,polygon,polyline,radialGradient,rect,set,solidcolor,stop,switch,symbol,text,textPath,title,tspan,unknown,use,view", Ss = "annotation,annotation-xml,maction,maligngroup,malignmark,math,menclose,merror,mfenced,mfrac,mfraction,mglyph,mi,mlabeledtr,mlongdiv,mmultiscripts,mn,mo,mover,mpadded,mphantom,mprescripts,mroot,mrow,ms,mscarries,mscarry,msgroup,msline,mspace,msqrt,msrow,mstack,mstyle,msub,msubsup,msup,mtable,mtd,mtext,mtr,munder,munderover,none,semantics", $s = /* @__PURE__ */ ot(xs), Cs = /* @__PURE__ */ ot(ks), Ts = /* @__PURE__ */ ot(Ss), Os = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Es = /* @__PURE__ */ ot(Os);
function Xn(e) {
  return !!e || e === "";
}
function As(e, t) {
  if (e.length !== t.length) return !1;
  let r = !0;
  for (let o = 0; r && o < e.length; o++)
    r = Ot(e[o], t[o]);
  return r;
}
function Ot(e, t) {
  if (e === t) return !0;
  let r = an(e), o = an(t);
  if (r || o)
    return r && o ? e.getTime() === t.getTime() : !1;
  if (r = Ge(e), o = Ge(t), r || o)
    return e === t;
  if (r = I(e), o = I(t), r || o)
    return r && o ? As(e, t) : !1;
  if (r = re(e), o = re(t), r || o) {
    if (!r || !o)
      return !1;
    const n = Object.keys(e).length, i = Object.keys(t).length;
    if (n !== i)
      return !1;
    for (const s in e) {
      const l = e.hasOwnProperty(s), a = t.hasOwnProperty(s);
      if (l && !a || !l && a || !Ot(e[s], t[s]))
        return !1;
    }
  }
  return String(e) === String(t);
}
function zo(e, t) {
  return e.findIndex((r) => Ot(r, t));
}
const Zn = (e) => !!(e && e.__v_isRef === !0), R = (e) => ie(e) ? e : e == null ? "" : I(e) || re(e) && (e.toString === Jn || !D(e.toString)) ? Zn(e) ? R(e.value) : JSON.stringify(e, Qn, 2) : String(e), Qn = (e, t) => Zn(t) ? Qn(e, t.value) : xt(t) ? {
  [`Map(${t.size})`]: [...t.entries()].reduce(
    (r, [o, n], i) => (r[ro(o, i) + " =>"] = n, r),
    {}
  )
} : Nt(t) ? {
  [`Set(${t.size})`]: [...t.values()].map((r) => ro(r))
} : Ge(t) ? ro(t) : re(t) && !I(t) && !Lr(t) ? String(t) : t, ro = (e, t = "") => {
  var r;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Ge(e) ? `Symbol(${(r = e.description) != null ? r : t})` : e
  );
};
/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ye(e, ...t) {
  console.warn(`[Vue warn] ${e}`, ...t);
}
let Ce;
class Is {
  constructor(t = !1) {
    this.detached = t, this._active = !0, this.effects = [], this.cleanups = [], this._isPaused = !1, this.parent = Ce, !t && Ce && (this.index = (Ce.scopes || (Ce.scopes = [])).push(
      this
    ) - 1);
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].pause();
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let t, r;
      if (this.scopes)
        for (t = 0, r = this.scopes.length; t < r; t++)
          this.scopes[t].resume();
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].resume();
    }
  }
  run(t) {
    if (this._active) {
      const r = Ce;
      try {
        return Ce = this, t();
      } finally {
        Ce = r;
      }
    } else
      Ye("cannot run an inactive effect scope.");
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    Ce = this;
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    Ce = this.parent;
  }
  stop(t) {
    if (this._active) {
      this._active = !1;
      let r, o;
      for (r = 0, o = this.effects.length; r < o; r++)
        this.effects[r].stop();
      for (this.effects.length = 0, r = 0, o = this.cleanups.length; r < o; r++)
        this.cleanups[r]();
      if (this.cleanups.length = 0, this.scopes) {
        for (r = 0, o = this.scopes.length; r < o; r++)
          this.scopes[r].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !t) {
        const n = this.parent.scopes.pop();
        n && n !== this && (this.parent.scopes[this.index] = n, n.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function Ms() {
  return Ce;
}
let ee;
const oo = /* @__PURE__ */ new WeakSet();
class ei {
  constructor(t) {
    this.fn = t, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, Ce && Ce.active && Ce.effects.push(this);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, oo.has(this) && (oo.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || ri(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, fn(this), oi(this);
    const t = ee, r = Re;
    ee = this, Re = !0;
    try {
      return this.fn();
    } finally {
      ee !== this && Ye(
        "Active effect was not restored correctly - this is likely a Vue internal bug."
      ), ni(this), ee = t, Re = r, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let t = this.deps; t; t = t.nextDep)
        Ho(t);
      this.deps = this.depsTail = void 0, fn(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? oo.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    mo(this) && this.run();
  }
  get dirty() {
    return mo(this);
  }
}
let ti = 0, Zt, Qt;
function ri(e, t = !1) {
  if (e.flags |= 8, t) {
    e.next = Qt, Qt = e;
    return;
  }
  e.next = Zt, Zt = e;
}
function Do() {
  ti++;
}
function No() {
  if (--ti > 0)
    return;
  if (Qt) {
    let t = Qt;
    for (Qt = void 0; t; ) {
      const r = t.next;
      t.next = void 0, t.flags &= -9, t = r;
    }
  }
  let e;
  for (; Zt; ) {
    let t = Zt;
    for (Zt = void 0; t; ) {
      const r = t.next;
      if (t.next = void 0, t.flags &= -9, t.flags & 1)
        try {
          t.trigger();
        } catch (o) {
          e || (e = o);
        }
      t = r;
    }
  }
  if (e) throw e;
}
function oi(e) {
  for (let t = e.deps; t; t = t.nextDep)
    t.version = -1, t.prevActiveLink = t.dep.activeLink, t.dep.activeLink = t;
}
function ni(e) {
  let t, r = e.depsTail, o = r;
  for (; o; ) {
    const n = o.prevDep;
    o.version === -1 ? (o === r && (r = n), Ho(o), Vs(o)) : t = o, o.dep.activeLink = o.prevActiveLink, o.prevActiveLink = void 0, o = n;
  }
  e.deps = t, e.depsTail = r;
}
function mo(e) {
  for (let t = e.deps; t; t = t.nextDep)
    if (t.dep.version !== t.version || t.dep.computed && (ii(t.dep.computed) || t.dep.version !== t.version))
      return !0;
  return !!e._dirty;
}
function ii(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === rr))
    return;
  e.globalVersion = rr;
  const t = e.dep;
  if (e.flags |= 2, t.version > 0 && !e.isSSR && e.deps && !mo(e)) {
    e.flags &= -3;
    return;
  }
  const r = ee, o = Re;
  ee = e, Re = !0;
  try {
    oi(e);
    const n = e.fn(e._value);
    (t.version === 0 || ht(n, e._value)) && (e._value = n, t.version++);
  } catch (n) {
    throw t.version++, n;
  } finally {
    ee = r, Re = o, ni(e), e.flags &= -3;
  }
}
function Ho(e, t = !1) {
  const { dep: r, prevSub: o, nextSub: n } = e;
  if (o && (o.nextSub = n, e.prevSub = void 0), n && (n.prevSub = o, e.nextSub = void 0), r.subsHead === e && (r.subsHead = n), r.subs === e && (r.subs = o, !o && r.computed)) {
    r.computed.flags &= -5;
    for (let i = r.computed.deps; i; i = i.nextDep)
      Ho(i, !0);
  }
  !t && !--r.sc && r.map && r.map.delete(r.key);
}
function Vs(e) {
  const { prevDep: t, nextDep: r } = e;
  t && (t.nextDep = r, e.prevDep = void 0), r && (r.prevDep = t, e.nextDep = void 0);
}
let Re = !0;
const si = [];
function nt() {
  si.push(Re), Re = !1;
}
function it() {
  const e = si.pop();
  Re = e === void 0 ? !0 : e;
}
function fn(e) {
  const { cleanup: t } = e;
  if (e.cleanup = void 0, t) {
    const r = ee;
    ee = void 0;
    try {
      t();
    } finally {
      ee = r;
    }
  }
}
let rr = 0;
class Ps {
  constructor(t, r) {
    this.sub = t, this.dep = r, this.version = r.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Lo {
  constructor(t) {
    this.computed = t, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.subsHead = void 0;
  }
  track(t) {
    if (!ee || !Re || ee === this.computed)
      return;
    let r = this.activeLink;
    if (r === void 0 || r.sub !== ee)
      r = this.activeLink = new Ps(ee, this), ee.deps ? (r.prevDep = ee.depsTail, ee.depsTail.nextDep = r, ee.depsTail = r) : ee.deps = ee.depsTail = r, li(r);
    else if (r.version === -1 && (r.version = this.version, r.nextDep)) {
      const o = r.nextDep;
      o.prevDep = r.prevDep, r.prevDep && (r.prevDep.nextDep = o), r.prevDep = ee.depsTail, r.nextDep = void 0, ee.depsTail.nextDep = r, ee.depsTail = r, ee.deps === r && (ee.deps = o);
    }
    return ee.onTrack && ee.onTrack(
      le(
        {
          effect: ee
        },
        t
      )
    ), r;
  }
  trigger(t) {
    this.version++, rr++, this.notify(t);
  }
  notify(t) {
    Do();
    try {
      for (let r = this.subsHead; r; r = r.nextSub)
        r.sub.onTrigger && !(r.sub.flags & 8) && r.sub.onTrigger(
          le(
            {
              effect: r.sub
            },
            t
          )
        );
      for (let r = this.subs; r; r = r.prevSub)
        r.sub.notify() && r.sub.dep.notify();
    } finally {
      No();
    }
  }
}
function li(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const t = e.dep.computed;
    if (t && !e.dep.subs) {
      t.flags |= 20;
      for (let o = t.deps; o; o = o.nextDep)
        li(o);
    }
    const r = e.dep.subs;
    r !== e && (e.prevSub = r, r && (r.nextSub = e)), e.dep.subsHead === void 0 && (e.dep.subsHead = e), e.dep.subs = e;
  }
}
const bo = /* @__PURE__ */ new WeakMap(), kt = Symbol(
  "Object iterate"
), go = Symbol(
  "Map keys iterate"
), or = Symbol(
  "Array iterate"
);
function fe(e, t, r) {
  if (Re && ee) {
    let o = bo.get(e);
    o || bo.set(e, o = /* @__PURE__ */ new Map());
    let n = o.get(r);
    n || (o.set(r, n = new Lo()), n.map = o, n.key = r), n.track({
      target: e,
      type: t,
      key: r
    });
  }
}
function Ue(e, t, r, o, n, i) {
  const s = bo.get(e);
  if (!s) {
    rr++;
    return;
  }
  const l = (a) => {
    a && a.trigger({
      target: e,
      type: t,
      key: r,
      newValue: o,
      oldValue: n,
      oldTarget: i
    });
  };
  if (Do(), t === "clear")
    s.forEach(l);
  else {
    const a = I(e), p = a && Ro(r);
    if (a && r === "length") {
      const d = Number(o);
      s.forEach((f, b) => {
        (b === "length" || b === or || !Ge(b) && b >= d) && l(f);
      });
    } else
      switch ((r !== void 0 || s.has(void 0)) && l(s.get(r)), p && l(s.get(or)), t) {
        case "add":
          a ? p && l(s.get("length")) : (l(s.get(kt)), xt(e) && l(s.get(go)));
          break;
        case "delete":
          a || (l(s.get(kt)), xt(e) && l(s.get(go)));
          break;
        case "set":
          xt(e) && l(s.get(kt));
          break;
      }
  }
  No();
}
function It(e) {
  const t = L(e);
  return t === e ? t : (fe(t, "iterate", or), ye(e) ? t : t.map(pe));
}
function Br(e) {
  return fe(e = L(e), "iterate", or), e;
}
const Fs = {
  __proto__: null,
  [Symbol.iterator]() {
    return no(this, Symbol.iterator, pe);
  },
  concat(...e) {
    return It(this).concat(
      ...e.map((t) => I(t) ? It(t) : t)
    );
  },
  entries() {
    return no(this, "entries", (e) => (e[1] = pe(e[1]), e));
  },
  every(e, t) {
    return Xe(this, "every", e, t, void 0, arguments);
  },
  filter(e, t) {
    return Xe(this, "filter", e, t, (r) => r.map(pe), arguments);
  },
  find(e, t) {
    return Xe(this, "find", e, t, pe, arguments);
  },
  findIndex(e, t) {
    return Xe(this, "findIndex", e, t, void 0, arguments);
  },
  findLast(e, t) {
    return Xe(this, "findLast", e, t, pe, arguments);
  },
  findLastIndex(e, t) {
    return Xe(this, "findLastIndex", e, t, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, t) {
    return Xe(this, "forEach", e, t, void 0, arguments);
  },
  includes(...e) {
    return io(this, "includes", e);
  },
  indexOf(...e) {
    return io(this, "indexOf", e);
  },
  join(e) {
    return It(this).join(e);
  },
  // keys() iterator only reads `length`, no optimisation required
  lastIndexOf(...e) {
    return io(this, "lastIndexOf", e);
  },
  map(e, t) {
    return Xe(this, "map", e, t, void 0, arguments);
  },
  pop() {
    return Wt(this, "pop");
  },
  push(...e) {
    return Wt(this, "push", e);
  },
  reduce(e, ...t) {
    return un(this, "reduce", e, t);
  },
  reduceRight(e, ...t) {
    return un(this, "reduceRight", e, t);
  },
  shift() {
    return Wt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, t) {
    return Xe(this, "some", e, t, void 0, arguments);
  },
  splice(...e) {
    return Wt(this, "splice", e);
  },
  toReversed() {
    return It(this).toReversed();
  },
  toSorted(e) {
    return It(this).toSorted(e);
  },
  toSpliced(...e) {
    return It(this).toSpliced(...e);
  },
  unshift(...e) {
    return Wt(this, "unshift", e);
  },
  values() {
    return no(this, "values", pe);
  }
};
function no(e, t, r) {
  const o = Br(e), n = o[t]();
  return o !== e && !ye(e) && (n._next = n.next, n.next = () => {
    const i = n._next();
    return i.value && (i.value = r(i.value)), i;
  }), n;
}
const Rs = Array.prototype;
function Xe(e, t, r, o, n, i) {
  const s = Br(e), l = s !== e && !ye(e), a = s[t];
  if (a !== Rs[t]) {
    const f = a.apply(e, i);
    return l ? pe(f) : f;
  }
  let p = r;
  s !== e && (l ? p = function(f, b) {
    return r.call(this, pe(f), b, e);
  } : r.length > 2 && (p = function(f, b) {
    return r.call(this, f, b, e);
  }));
  const d = a.call(s, p, o);
  return l && n ? n(d) : d;
}
function un(e, t, r, o) {
  const n = Br(e);
  let i = r;
  return n !== e && (ye(e) ? r.length > 3 && (i = function(s, l, a) {
    return r.call(this, s, l, a, e);
  }) : i = function(s, l, a) {
    return r.call(this, s, pe(l), a, e);
  }), n[t](i, ...o);
}
function io(e, t, r) {
  const o = L(e);
  fe(o, "iterate", or);
  const n = o[t](...r);
  return (n === -1 || n === !1) && Ir(r[0]) ? (r[0] = L(r[0]), o[t](...r)) : n;
}
function Wt(e, t, r = []) {
  nt(), Do();
  const o = L(e)[t].apply(e, r);
  return No(), it(), o;
}
const js = /* @__PURE__ */ ot("__proto__,__v_isRef,__isVue"), ai = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Ge)
);
function zs(e) {
  Ge(e) || (e = String(e));
  const t = L(this);
  return fe(t, "has", e), t.hasOwnProperty(e);
}
class di {
  constructor(t = !1, r = !1) {
    this._isReadonly = t, this._isShallow = r;
  }
  get(t, r, o) {
    if (r === "__v_skip") return t.__v_skip;
    const n = this._isReadonly, i = this._isShallow;
    if (r === "__v_isReactive")
      return !n;
    if (r === "__v_isReadonly")
      return n;
    if (r === "__v_isShallow")
      return i;
    if (r === "__v_raw")
      return o === (n ? i ? mi : hi : i ? pi : ui).get(t) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(t) === Object.getPrototypeOf(o) ? t : void 0;
    const s = I(t);
    if (!n) {
      let a;
      if (s && (a = Fs[r]))
        return a;
      if (r === "hasOwnProperty")
        return zs;
    }
    const l = Reflect.get(
      t,
      r,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      ae(t) ? t : o
    );
    return (Ge(r) ? ai.has(r) : js(r)) || (n || fe(t, "get", r), i) ? l : ae(l) ? s && Ro(r) ? l : l.value : re(l) ? n ? bi(l) : nr(l) : l;
  }
}
class ci extends di {
  constructor(t = !1) {
    super(!1, t);
  }
  set(t, r, o, n) {
    let i = t[r];
    if (!this._isShallow) {
      const a = rt(i);
      if (!ye(o) && !rt(o) && (i = L(i), o = L(o)), !I(t) && ae(i) && !ae(o))
        return a ? !1 : (i.value = o, !0);
    }
    const s = I(t) && Ro(r) ? Number(r) < t.length : G(t, r), l = Reflect.set(
      t,
      r,
      o,
      ae(t) ? t : n
    );
    return t === L(n) && (s ? ht(o, i) && Ue(t, "set", r, o, i) : Ue(t, "add", r, o)), l;
  }
  deleteProperty(t, r) {
    const o = G(t, r), n = t[r], i = Reflect.deleteProperty(t, r);
    return i && o && Ue(t, "delete", r, void 0, n), i;
  }
  has(t, r) {
    const o = Reflect.has(t, r);
    return (!Ge(r) || !ai.has(r)) && fe(t, "has", r), o;
  }
  ownKeys(t) {
    return fe(
      t,
      "iterate",
      I(t) ? "length" : kt
    ), Reflect.ownKeys(t);
  }
}
class fi extends di {
  constructor(t = !1) {
    super(!0, t);
  }
  set(t, r) {
    return Ye(
      `Set operation on key "${String(r)}" failed: target is readonly.`,
      t
    ), !0;
  }
  deleteProperty(t, r) {
    return Ye(
      `Delete operation on key "${String(r)}" failed: target is readonly.`,
      t
    ), !0;
  }
}
const Ds = /* @__PURE__ */ new ci(), Ns = /* @__PURE__ */ new fi(), Hs = /* @__PURE__ */ new ci(!0), Ls = /* @__PURE__ */ new fi(!0), vo = (e) => e, gr = (e) => Reflect.getPrototypeOf(e);
function Us(e, t, r) {
  return function(...o) {
    const n = this.__v_raw, i = L(n), s = xt(i), l = e === "entries" || e === Symbol.iterator && s, a = e === "keys" && s, p = n[e](...o), d = r ? vo : t ? yo : pe;
    return !t && fe(
      i,
      "iterate",
      a ? go : kt
    ), {
      // iterator protocol
      next() {
        const { value: f, done: b } = p.next();
        return b ? { value: f, done: b } : {
          value: l ? [d(f[0]), d(f[1])] : d(f),
          done: b
        };
      },
      // iterable protocol
      [Symbol.iterator]() {
        return this;
      }
    };
  };
}
function vr(e) {
  return function(...t) {
    {
      const r = t[0] ? `on key "${t[0]}" ` : "";
      Ye(
        `${Tt(e)} operation ${r}failed: target is readonly.`,
        L(this)
      );
    }
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Bs(e, t) {
  const r = {
    get(n) {
      const i = this.__v_raw, s = L(i), l = L(n);
      e || (ht(n, l) && fe(s, "get", n), fe(s, "get", l));
      const { has: a } = gr(s), p = t ? vo : e ? yo : pe;
      if (a.call(s, n))
        return p(i.get(n));
      if (a.call(s, l))
        return p(i.get(l));
      i !== s && i.get(n);
    },
    get size() {
      const n = this.__v_raw;
      return !e && fe(L(n), "iterate", kt), Reflect.get(n, "size", n);
    },
    has(n) {
      const i = this.__v_raw, s = L(i), l = L(n);
      return e || (ht(n, l) && fe(s, "has", n), fe(s, "has", l)), n === l ? i.has(n) : i.has(n) || i.has(l);
    },
    forEach(n, i) {
      const s = this, l = s.__v_raw, a = L(l), p = t ? vo : e ? yo : pe;
      return !e && fe(a, "iterate", kt), l.forEach((d, f) => n.call(i, p(d), p(f), s));
    }
  };
  return le(
    r,
    e ? {
      add: vr("add"),
      set: vr("set"),
      delete: vr("delete"),
      clear: vr("clear")
    } : {
      add(n) {
        !t && !ye(n) && !rt(n) && (n = L(n));
        const i = L(this);
        return gr(i).has.call(i, n) || (i.add(n), Ue(i, "add", n, n)), this;
      },
      set(n, i) {
        !t && !ye(i) && !rt(i) && (i = L(i));
        const s = L(this), { has: l, get: a } = gr(s);
        let p = l.call(s, n);
        p ? pn(s, l, n) : (n = L(n), p = l.call(s, n));
        const d = a.call(s, n);
        return s.set(n, i), p ? ht(i, d) && Ue(s, "set", n, i, d) : Ue(s, "add", n, i), this;
      },
      delete(n) {
        const i = L(this), { has: s, get: l } = gr(i);
        let a = s.call(i, n);
        a ? pn(i, s, n) : (n = L(n), a = s.call(i, n));
        const p = l ? l.call(i, n) : void 0, d = i.delete(n);
        return a && Ue(i, "delete", n, void 0, p), d;
      },
      clear() {
        const n = L(this), i = n.size !== 0, s = xt(n) ? new Map(n) : new Set(n), l = n.clear();
        return i && Ue(
          n,
          "clear",
          void 0,
          void 0,
          s
        ), l;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((n) => {
    r[n] = Us(n, e, t);
  }), r;
}
function Kr(e, t) {
  const r = Bs(e, t);
  return (o, n, i) => n === "__v_isReactive" ? !e : n === "__v_isReadonly" ? e : n === "__v_raw" ? o : Reflect.get(
    G(r, n) && n in o ? r : o,
    n,
    i
  );
}
const Ks = {
  get: /* @__PURE__ */ Kr(!1, !1)
}, Ws = {
  get: /* @__PURE__ */ Kr(!1, !0)
}, qs = {
  get: /* @__PURE__ */ Kr(!0, !1)
}, Gs = {
  get: /* @__PURE__ */ Kr(!0, !0)
};
function pn(e, t, r) {
  const o = L(r);
  if (o !== r && t.call(e, o)) {
    const n = Fo(e);
    Ye(
      `Reactive ${n} contains both the raw and reactive versions of the same object${n === "Map" ? " as keys" : ""}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`
    );
  }
}
const ui = /* @__PURE__ */ new WeakMap(), pi = /* @__PURE__ */ new WeakMap(), hi = /* @__PURE__ */ new WeakMap(), mi = /* @__PURE__ */ new WeakMap();
function Ys(e) {
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
function Js(e) {
  return e.__v_skip || !Object.isExtensible(e) ? 0 : Ys(Fo(e));
}
function nr(e) {
  return rt(e) ? e : Wr(
    e,
    !1,
    Ds,
    Ks,
    ui
  );
}
function Xs(e) {
  return Wr(
    e,
    !1,
    Hs,
    Ws,
    pi
  );
}
function bi(e) {
  return Wr(
    e,
    !0,
    Ns,
    qs,
    hi
  );
}
function Ke(e) {
  return Wr(
    e,
    !0,
    Ls,
    Gs,
    mi
  );
}
function Wr(e, t, r, o, n) {
  if (!re(e))
    return Ye(
      `value cannot be made ${t ? "readonly" : "reactive"}: ${String(
        e
      )}`
    ), e;
  if (e.__v_raw && !(t && e.__v_isReactive))
    return e;
  const i = n.get(e);
  if (i)
    return i;
  const s = Js(e);
  if (s === 0)
    return e;
  const l = new Proxy(
    e,
    s === 2 ? o : r
  );
  return n.set(e, l), l;
}
function St(e) {
  return rt(e) ? St(e.__v_raw) : !!(e && e.__v_isReactive);
}
function rt(e) {
  return !!(e && e.__v_isReadonly);
}
function ye(e) {
  return !!(e && e.__v_isShallow);
}
function Ir(e) {
  return e ? !!e.__v_raw : !1;
}
function L(e) {
  const t = e && e.__v_raw;
  return t ? L(t) : e;
}
function Zs(e) {
  return !G(e, "__v_skip") && Object.isExtensible(e) && Er(e, "__v_skip", !0), e;
}
const pe = (e) => re(e) ? nr(e) : e, yo = (e) => re(e) ? bi(e) : e;
function ae(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function _r(e) {
  return Qs(e, !1);
}
function Qs(e, t) {
  return ae(e) ? e : new el(e, t);
}
class el {
  constructor(t, r) {
    this.dep = new Lo(), this.__v_isRef = !0, this.__v_isShallow = !1, this._rawValue = r ? t : L(t), this._value = r ? t : pe(t), this.__v_isShallow = r;
  }
  get value() {
    return this.dep.track({
      target: this,
      type: "get",
      key: "value"
    }), this._value;
  }
  set value(t) {
    const r = this._rawValue, o = this.__v_isShallow || ye(t) || rt(t);
    t = o ? t : L(t), ht(t, r) && (this._rawValue = t, this._value = o ? t : pe(t), this.dep.trigger({
      target: this,
      type: "set",
      key: "value",
      newValue: t,
      oldValue: r
    }));
  }
}
function gi(e) {
  return ae(e) ? e.value : e;
}
const tl = {
  get: (e, t, r) => t === "__v_raw" ? e : gi(Reflect.get(e, t, r)),
  set: (e, t, r, o) => {
    const n = e[t];
    return ae(n) && !ae(r) ? (n.value = r, !0) : Reflect.set(e, t, r, o);
  }
};
function vi(e) {
  return St(e) ? e : new Proxy(e, tl);
}
class rl {
  constructor(t, r, o) {
    this.fn = t, this.setter = r, this._value = void 0, this.dep = new Lo(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = rr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !r, this.isSSR = o;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    ee !== this)
      return ri(this, !0), !0;
  }
  get value() {
    const t = this.dep.track({
      target: this,
      type: "get",
      key: "value"
    });
    return ii(this), t && (t.version = this.dep.version), this._value;
  }
  set value(t) {
    this.setter ? this.setter(t) : Ye("Write operation failed: computed value is readonly");
  }
}
function ol(e, t, r = !1) {
  let o, n;
  return D(e) ? o = e : (o = e.get, n = e.set), new rl(o, n, r);
}
const yr = {}, Mr = /* @__PURE__ */ new WeakMap();
let _t;
function nl(e, t = !1, r = _t) {
  if (r) {
    let o = Mr.get(r);
    o || Mr.set(r, o = []), o.push(e);
  } else t || Ye(
    "onWatcherCleanup() was called when there was no active watcher to associate with."
  );
}
function il(e, t, r = te) {
  const { immediate: o, deep: n, once: i, scheduler: s, augmentJob: l, call: a } = r, p = (w) => {
    (r.onWarn || Ye)(
      "Invalid watch source: ",
      w,
      "A watch source can only be a getter/effect function, a ref, a reactive object, or an array of these types."
    );
  }, d = (w) => n ? w : ye(w) || n === !1 || n === 0 ? Qe(w, 1) : Qe(w);
  let f, b, h, $, M = !1, X = !1;
  if (ae(e) ? (b = () => e.value, M = ye(e)) : St(e) ? (b = () => d(e), M = !0) : I(e) ? (X = !0, M = e.some((w) => St(w) || ye(w)), b = () => e.map((w) => {
    if (ae(w))
      return w.value;
    if (St(w))
      return d(w);
    if (D(w))
      return a ? a(w, 2) : w();
    p(w);
  })) : D(e) ? t ? b = a ? () => a(e, 2) : e : b = () => {
    if (h) {
      nt();
      try {
        h();
      } finally {
        it();
      }
    }
    const w = _t;
    _t = f;
    try {
      return a ? a(e, 3, [$]) : e($);
    } finally {
      _t = w;
    }
  } : (b = he, p(e)), t && n) {
    const w = b, O = n === !0 ? 1 / 0 : n;
    b = () => Qe(w(), O);
  }
  const N = Ms(), Y = () => {
    f.stop(), N && N.active && Vo(N.effects, f);
  };
  if (i && t) {
    const w = t;
    t = (...O) => {
      w(...O), Y();
    };
  }
  let j = X ? new Array(e.length).fill(yr) : yr;
  const V = (w) => {
    if (!(!(f.flags & 1) || !f.dirty && !w))
      if (t) {
        const O = f.run();
        if (n || M || (X ? O.some((B, K) => ht(B, j[K])) : ht(O, j))) {
          h && h();
          const B = _t;
          _t = f;
          try {
            const K = [
              O,
              // pass undefined as the old value when it's changed for the first time
              j === yr ? void 0 : X && j[0] === yr ? [] : j,
              $
            ];
            a ? a(t, 3, K) : (
              // @ts-expect-error
              t(...K)
            ), j = O;
          } finally {
            _t = B;
          }
        }
      } else
        f.run();
  };
  return l && l(V), f = new ei(b), f.scheduler = s ? () => s(V, !1) : V, $ = (w) => nl(w, !1, f), h = f.onStop = () => {
    const w = Mr.get(f);
    if (w) {
      if (a)
        a(w, 4);
      else
        for (const O of w) O();
      Mr.delete(f);
    }
  }, f.onTrack = r.onTrack, f.onTrigger = r.onTrigger, t ? o ? V(!0) : j = f.run() : s ? s(V.bind(null, !0), !0) : f.run(), Y.pause = f.pause.bind(f), Y.resume = f.resume.bind(f), Y.stop = Y, Y;
}
function Qe(e, t = 1 / 0, r) {
  if (t <= 0 || !re(e) || e.__v_skip || (r = r || /* @__PURE__ */ new Set(), r.has(e)))
    return e;
  if (r.add(e), t--, ae(e))
    Qe(e.value, t, r);
  else if (I(e))
    for (let o = 0; o < e.length; o++)
      Qe(e[o], t, r);
  else if (Nt(e) || xt(e))
    e.forEach((o) => {
      Qe(o, t, r);
    });
  else if (Lr(e)) {
    for (const o in e)
      Qe(e[o], t, r);
    for (const o of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, o) && Qe(e[o], t, r);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
const $t = [];
function wr(e) {
  $t.push(e);
}
function xr() {
  $t.pop();
}
let so = !1;
function T(e, ...t) {
  if (so) return;
  so = !0, nt();
  const r = $t.length ? $t[$t.length - 1].component : null, o = r && r.appContext.config.warnHandler, n = sl();
  if (o)
    Ht(
      o,
      r,
      11,
      [
        // eslint-disable-next-line no-restricted-syntax
        e + t.map((i) => {
          var s, l;
          return (l = (s = i.toString) == null ? void 0 : s.call(i)) != null ? l : JSON.stringify(i);
        }).join(""),
        r && r.proxy,
        n.map(
          ({ vnode: i }) => `at <${Zr(r, i.type)}>`
        ).join(`
`),
        n
      ]
    );
  else {
    const i = [`[Vue warn]: ${e}`, ...t];
    n.length && i.push(`
`, ...ll(n)), console.warn(...i);
  }
  it(), so = !1;
}
function sl() {
  let e = $t[$t.length - 1];
  if (!e)
    return [];
  const t = [];
  for (; e; ) {
    const r = t[0];
    r && r.vnode === e ? r.recurseCount++ : t.push({
      vnode: e,
      recurseCount: 0
    });
    const o = e.component && e.component.parent;
    e = o && o.vnode;
  }
  return t;
}
function ll(e) {
  const t = [];
  return e.forEach((r, o) => {
    t.push(...o === 0 ? [] : [`
`], ...al(r));
  }), t;
}
function al({ vnode: e, recurseCount: t }) {
  const r = t > 0 ? `... (${t} recursive calls)` : "", o = e.component ? e.component.parent == null : !1, n = ` at <${Zr(
    e.component,
    e.type,
    o
  )}`, i = ">" + r;
  return e.props ? [n, ...dl(e.props), i] : [n + i];
}
function dl(e) {
  const t = [], r = Object.keys(e);
  return r.slice(0, 3).forEach((o) => {
    t.push(...yi(o, e[o]));
  }), r.length > 3 && t.push(" ..."), t;
}
function yi(e, t, r) {
  return ie(t) ? (t = JSON.stringify(t), r ? t : [`${e}=${t}`]) : typeof t == "number" || typeof t == "boolean" || t == null ? r ? t : [`${e}=${t}`] : ae(t) ? (t = yi(e, L(t.value), !0), r ? t : [`${e}=Ref<`, t, ">"]) : D(t) ? [`${e}=fn${t.name ? `<${t.name}>` : ""}`] : (t = L(t), r ? t : [`${e}=`, t]);
}
const Uo = {
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
function Ht(e, t, r, o) {
  try {
    return o ? e(...o) : e();
  } catch (n) {
    fr(n, t, r);
  }
}
function Je(e, t, r, o) {
  if (D(e)) {
    const n = Ht(e, t, r, o);
    return n && Po(n) && n.catch((i) => {
      fr(i, t, r);
    }), n;
  }
  if (I(e)) {
    const n = [];
    for (let i = 0; i < e.length; i++)
      n.push(Je(e[i], t, r, o));
    return n;
  } else
    T(
      `Invalid value type passed to callWithAsyncErrorHandling(): ${typeof e}`
    );
}
function fr(e, t, r, o = !0) {
  const n = t ? t.vnode : null, { errorHandler: i, throwUnhandledErrorInProduction: s } = t && t.appContext.config || te;
  if (t) {
    let l = t.parent;
    const a = t.proxy, p = Uo[r];
    for (; l; ) {
      const d = l.ec;
      if (d) {
        for (let f = 0; f < d.length; f++)
          if (d[f](e, a, p) === !1)
            return;
      }
      l = l.parent;
    }
    if (i) {
      nt(), Ht(i, null, 10, [
        e,
        a,
        p
      ]), it();
      return;
    }
  }
  cl(e, r, n, o, s);
}
function cl(e, t, r, o = !0, n = !1) {
  {
    const i = Uo[t];
    if (r && wr(r), T(`Unhandled error${i ? ` during execution of ${i}` : ""}`), r && xr(), o)
      throw e;
    console.error(e);
  }
}
const ve = [];
let Le = -1;
const jt = [];
let ct = null, Ft = 0;
const _i = /* @__PURE__ */ Promise.resolve();
let Vr = null;
const fl = 100;
function Bo(e) {
  const t = Vr || _i;
  return e ? t.then(this ? e.bind(this) : e) : t;
}
function ul(e) {
  let t = Le + 1, r = ve.length;
  for (; t < r; ) {
    const o = t + r >>> 1, n = ve[o], i = ir(n);
    i < e || i === e && n.flags & 2 ? t = o + 1 : r = o;
  }
  return t;
}
function qr(e) {
  if (!(e.flags & 1)) {
    const t = ir(e), r = ve[ve.length - 1];
    !r || // fast path when the job id is larger than the tail
    !(e.flags & 2) && t >= ir(r) ? ve.push(e) : ve.splice(ul(t), 0, e), e.flags |= 1, wi();
  }
}
function wi() {
  Vr || (Vr = _i.then(Si));
}
function xi(e) {
  I(e) ? jt.push(...e) : ct && e.id === -1 ? ct.splice(Ft + 1, 0, e) : e.flags & 1 || (jt.push(e), e.flags |= 1), wi();
}
function hn(e, t, r = Le + 1) {
  for (t = t || /* @__PURE__ */ new Map(); r < ve.length; r++) {
    const o = ve[r];
    if (o && o.flags & 2) {
      if (e && o.id !== e.uid || Ko(t, o))
        continue;
      ve.splice(r, 1), r--, o.flags & 4 && (o.flags &= -2), o(), o.flags & 4 || (o.flags &= -2);
    }
  }
}
function ki(e) {
  if (jt.length) {
    const t = [...new Set(jt)].sort(
      (r, o) => ir(r) - ir(o)
    );
    if (jt.length = 0, ct) {
      ct.push(...t);
      return;
    }
    for (ct = t, e = e || /* @__PURE__ */ new Map(), Ft = 0; Ft < ct.length; Ft++) {
      const r = ct[Ft];
      Ko(e, r) || (r.flags & 4 && (r.flags &= -2), r.flags & 8 || r(), r.flags &= -2);
    }
    ct = null, Ft = 0;
  }
}
const ir = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Si(e) {
  e = e || /* @__PURE__ */ new Map();
  const t = (r) => Ko(e, r);
  try {
    for (Le = 0; Le < ve.length; Le++) {
      const r = ve[Le];
      if (r && !(r.flags & 8)) {
        if (t(r))
          continue;
        r.flags & 4 && (r.flags &= -2), Ht(
          r,
          r.i,
          r.i ? 15 : 14
        ), r.flags & 4 || (r.flags &= -2);
      }
    }
  } finally {
    for (; Le < ve.length; Le++) {
      const r = ve[Le];
      r && (r.flags &= -2);
    }
    Le = -1, ve.length = 0, ki(e), Vr = null, (ve.length || jt.length) && Si(e);
  }
}
function Ko(e, t) {
  const r = e.get(t) || 0;
  if (r > fl) {
    const o = t.i, n = o && en(o.type);
    return fr(
      `Maximum recursive updates exceeded${n ? ` in component <${n}>` : ""}. This means you have a reactive effect that is mutating its own dependencies and thus recursively triggering itself. Possible sources include component template, render function, updated hook or watcher source function.`,
      null,
      10
    ), !0;
  }
  return e.set(t, r + 1), !1;
}
let We = !1;
const kr = /* @__PURE__ */ new Map();
cr().__VUE_HMR_RUNTIME__ = {
  createRecord: lo($i),
  rerender: lo(ml),
  reload: lo(bl)
};
const Et = /* @__PURE__ */ new Map();
function pl(e) {
  const t = e.type.__hmrId;
  let r = Et.get(t);
  r || ($i(t, e.type), r = Et.get(t)), r.instances.add(e);
}
function hl(e) {
  Et.get(e.type.__hmrId).instances.delete(e);
}
function $i(e, t) {
  return Et.has(e) ? !1 : (Et.set(e, {
    initialDef: Pr(t),
    instances: /* @__PURE__ */ new Set()
  }), !0);
}
function Pr(e) {
  return ss(e) ? e.__vccOpts : e;
}
function ml(e, t) {
  const r = Et.get(e);
  r && (r.initialDef.render = t, [...r.instances].forEach((o) => {
    t && (o.render = t, Pr(o.type).render = t), o.renderCache = [], We = !0, o.update(), We = !1;
  }));
}
function bl(e, t) {
  const r = Et.get(e);
  if (!r) return;
  t = Pr(t), mn(r.initialDef, t);
  const o = [...r.instances];
  for (let n = 0; n < o.length; n++) {
    const i = o[n], s = Pr(i.type);
    let l = kr.get(s);
    l || (s !== r.initialDef && mn(s, t), kr.set(s, l = /* @__PURE__ */ new Set())), l.add(i), i.appContext.propsCache.delete(i.type), i.appContext.emitsCache.delete(i.type), i.appContext.optionsCache.delete(i.type), i.ceReload ? (l.add(i), i.ceReload(t.styles), l.delete(i)) : i.parent ? qr(() => {
      We = !0, i.parent.update(), We = !1, l.delete(i);
    }) : i.appContext.reload ? i.appContext.reload() : typeof window < "u" ? window.location.reload() : console.warn(
      "[HMR] Root or manually mounted instance modified. Full reload required."
    ), i.root.ce && i !== i.root && i.root.ce._removeChildStyle(s);
  }
  xi(() => {
    kr.clear();
  });
}
function mn(e, t) {
  le(e, t);
  for (const r in e)
    r !== "__file" && !(r in t) && delete e[r];
}
function lo(e) {
  return (t, r) => {
    try {
      return e(t, r);
    } catch (o) {
      console.error(o), console.warn(
        "[HMR] Something went wrong during Vue component hot-reload. Full reload required."
      );
    }
  };
}
let Be, Yt = [], _o = !1;
function ur(e, ...t) {
  Be ? Be.emit(e, ...t) : _o || Yt.push({ event: e, args: t });
}
function Ci(e, t) {
  var r, o;
  Be = e, Be ? (Be.enabled = !0, Yt.forEach(({ event: n, args: i }) => Be.emit(n, ...i)), Yt = []) : /* handle late devtools injection - only do this if we are in an actual */ /* browser environment to avoid the timer handle stalling test runner exit */ /* (#4815) */ typeof window < "u" && // some envs mock window but not fully
  window.HTMLElement && // also exclude jsdom
  // eslint-disable-next-line no-restricted-syntax
  !((o = (r = window.navigator) == null ? void 0 : r.userAgent) != null && o.includes("jsdom")) ? ((t.__VUE_DEVTOOLS_HOOK_REPLAY__ = t.__VUE_DEVTOOLS_HOOK_REPLAY__ || []).push((i) => {
    Ci(i, t);
  }), setTimeout(() => {
    Be || (t.__VUE_DEVTOOLS_HOOK_REPLAY__ = null, _o = !0, Yt = []);
  }, 3e3)) : (_o = !0, Yt = []);
}
function gl(e, t) {
  ur("app:init", e, t, {
    Fragment: Z,
    Text: pr,
    Comment: Ee,
    Static: $r
  });
}
function vl(e) {
  ur("app:unmount", e);
}
const yl = /* @__PURE__ */ Wo(
  "component:added"
  /* COMPONENT_ADDED */
), Ti = /* @__PURE__ */ Wo(
  "component:updated"
  /* COMPONENT_UPDATED */
), _l = /* @__PURE__ */ Wo(
  "component:removed"
  /* COMPONENT_REMOVED */
), wl = (e) => {
  Be && typeof Be.cleanupBuffer == "function" && // remove the component if it wasn't buffered
  !Be.cleanupBuffer(e) && _l(e);
};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function Wo(e) {
  return (t) => {
    ur(
      e,
      t.appContext.app,
      t.uid,
      t.parent ? t.parent.uid : void 0,
      t
    );
  };
}
const xl = /* @__PURE__ */ Oi(
  "perf:start"
  /* PERFORMANCE_START */
), kl = /* @__PURE__ */ Oi(
  "perf:end"
  /* PERFORMANCE_END */
);
function Oi(e) {
  return (t, r, o) => {
    ur(e, t.appContext.app, t.uid, t, r, o);
  };
}
function Sl(e, t, r) {
  ur(
    "component:emit",
    e.appContext.app,
    e,
    t,
    r
  );
}
let me = null, Ei = null;
function Fr(e) {
  const t = me;
  return me = e, Ei = e && e.type.__scopeId || null, t;
}
function qo(e, t = me, r) {
  if (!t || e._n)
    return e;
  const o = (...n) => {
    o._d && On(-1);
    const i = Fr(t);
    let s;
    try {
      s = e(...n);
    } finally {
      Fr(i), o._d && On(1);
    }
    return Ti(t), s;
  };
  return o._n = !0, o._c = !0, o._d = !0, o;
}
function Ai(e) {
  ms(e) && T("Do not use built-in directive ids as custom directive id: " + e);
}
function tt(e, t) {
  if (me === null)
    return T("withDirectives can only be used inside render functions."), e;
  const r = Xr(me), o = e.dirs || (e.dirs = []);
  for (let n = 0; n < t.length; n++) {
    let [i, s, l, a = te] = t[n];
    i && (D(i) && (i = {
      mounted: i,
      updated: i
    }), i.deep && Qe(s), o.push({
      dir: i,
      instance: r,
      value: s,
      oldValue: void 0,
      arg: l,
      modifiers: a
    }));
  }
  return e;
}
function gt(e, t, r, o) {
  const n = e.dirs, i = t && t.dirs;
  for (let s = 0; s < n.length; s++) {
    const l = n[s];
    i && (l.oldValue = i[s].value);
    let a = l.dir[o];
    a && (nt(), Je(a, r, 8, [
      e.el,
      l,
      e,
      t
    ]), it());
  }
}
const $l = Symbol("_vte"), Cl = (e) => e.__isTeleport;
function Go(e, t) {
  e.shapeFlag & 6 && e.component ? (e.transition = t, Go(e.component.subTree, t)) : e.shapeFlag & 128 ? (e.ssContent.transition = t.clone(e.ssContent), e.ssFallback.transition = t.clone(e.ssFallback)) : e.transition = t;
}
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function _e(e, t) {
  return D(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    le({ name: e.name }, t, { setup: e })
  ) : e;
}
function Ii(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
const Tl = /* @__PURE__ */ new WeakSet();
function Rr(e, t, r, o, n = !1) {
  if (I(e)) {
    e.forEach(
      ($, M) => Rr(
        $,
        t && (I(t) ? t[M] : t),
        r,
        o,
        n
      )
    );
    return;
  }
  if (er(o) && !n) {
    o.shapeFlag & 512 && o.type.__asyncResolved && o.component.subTree.component && Rr(e, t, r, o.component.subTree);
    return;
  }
  const i = o.shapeFlag & 4 ? Xr(o.component) : o.el, s = n ? null : i, { i: l, r: a } = e;
  if (!l) {
    T(
      "Missing ref owner context. ref cannot be used on hoisted vnodes. A vnode with ref must be created inside the render function."
    );
    return;
  }
  const p = t && t.r, d = l.refs === te ? l.refs = {} : l.refs, f = l.setupState, b = L(f), h = f === te ? () => !1 : ($) => (G(b, $) && !ae(b[$]) && T(
    `Template ref "${$}" used on a non-ref value. It will not work in the production build.`
  ), Tl.has(b[$]) ? !1 : G(b, $));
  if (p != null && p !== a && (ie(p) ? (d[p] = null, h(p) && (f[p] = null)) : ae(p) && (p.value = null)), D(a))
    Ht(a, l, 12, [s, d]);
  else {
    const $ = ie(a), M = ae(a);
    if ($ || M) {
      const X = () => {
        if (e.f) {
          const N = $ ? h(a) ? f[a] : d[a] : a.value;
          n ? I(N) && Vo(N, i) : I(N) ? N.includes(i) || N.push(i) : $ ? (d[a] = [i], h(a) && (f[a] = d[a])) : (a.value = [i], e.k && (d[e.k] = a.value));
        } else $ ? (d[a] = s, h(a) && (f[a] = s)) : M ? (a.value = s, e.k && (d[e.k] = s)) : T("Invalid template ref type:", a, `(${typeof a})`);
      };
      s ? (X.id = -1, $e(X, r)) : X();
    } else
      T("Invalid template ref type:", a, `(${typeof a})`);
  }
}
cr().requestIdleCallback;
cr().cancelIdleCallback;
const er = (e) => !!e.type.__asyncLoader, Yo = (e) => e.type.__isKeepAlive;
function Ol(e, t) {
  Mi(e, "a", t);
}
function El(e, t) {
  Mi(e, "da", t);
}
function Mi(e, t, r = ce) {
  const o = e.__wdc || (e.__wdc = () => {
    let n = r;
    for (; n; ) {
      if (n.isDeactivated)
        return;
      n = n.parent;
    }
    return e();
  });
  if (Gr(t, o, r), r) {
    let n = r.parent;
    for (; n && n.parent; )
      Yo(n.parent.vnode) && Al(o, t, r, n), n = n.parent;
  }
}
function Al(e, t, r, o) {
  const n = Gr(
    t,
    e,
    o,
    !0
    /* prepend */
  );
  Pi(() => {
    Vo(o[t], n);
  }, r);
}
function Gr(e, t, r = ce, o = !1) {
  if (r) {
    const n = r[e] || (r[e] = []), i = t.__weh || (t.__weh = (...s) => {
      nt();
      const l = hr(r), a = Je(t, r, e, s);
      return l(), it(), a;
    });
    return o ? n.unshift(i) : n.push(i), i;
  } else {
    const n = yt(Uo[e].replace(/ hook$/, ""));
    T(
      `${n} is called when there is no active component instance to be associated with. Lifecycle injection APIs can only be used during execution of setup(). If you are using async setup(), make sure to register lifecycle hooks before the first await statement.`
    );
  }
}
const st = (e) => (t, r = ce) => {
  (!lr || e === "sp") && Gr(e, (...o) => t(...o), r);
}, Il = st("bm"), Vi = st("m"), Ml = st(
  "bu"
), Vl = st("u"), Pl = st(
  "bum"
), Pi = st("um"), Fl = st(
  "sp"
), Rl = st("rtg"), jl = st("rtc");
function zl(e, t = ce) {
  Gr("ec", e, t);
}
const Dl = "components", Fi = Symbol.for("v-ndc");
function jr(e) {
  return ie(e) ? Nl(Dl, e, !1) || e : e || Fi;
}
function Nl(e, t, r = !0, o = !1) {
  const n = me || ce;
  if (n) {
    const i = n.type;
    {
      const l = en(
        i,
        !1
      );
      if (l && (l === t || l === ue(t) || l === Tt(ue(t))))
        return i;
    }
    const s = (
      // local registration
      // check instance[type] first which is resolved for options API
      bn(n[e] || i[e], t) || // global registration
      bn(n.appContext[e], t)
    );
    return !s && o ? i : (r && !s && T(`Failed to resolve ${e.slice(0, -1)}: ${t}
If this is a native custom element, make sure to exclude it from component resolution via compilerOptions.isCustomElement.`), s);
  } else
    T(
      `resolve${Tt(e.slice(0, -1))} can only be used in render() or setup().`
    );
}
function bn(e, t) {
  return e && (e[t] || e[ue(t)] || e[Tt(ue(t))]);
}
function Ie(e, t, r, o) {
  let n;
  const i = r, s = I(e);
  if (s || ie(e)) {
    const l = s && St(e);
    let a = !1;
    l && (a = !ye(e), e = Br(e)), n = new Array(e.length);
    for (let p = 0, d = e.length; p < d; p++)
      n[p] = t(
        a ? pe(e[p]) : e[p],
        p,
        void 0,
        i
      );
  } else if (typeof e == "number") {
    Number.isInteger(e) || T(`The v-for range expect an integer value but got ${e}.`), n = new Array(e);
    for (let l = 0; l < e; l++)
      n[l] = t(l + 1, l, void 0, i);
  } else if (re(e))
    if (e[Symbol.iterator])
      n = Array.from(
        e,
        (l, a) => t(l, a, void 0, i)
      );
    else {
      const l = Object.keys(e);
      n = new Array(l.length);
      for (let a = 0, p = l.length; a < p; a++) {
        const d = l[a];
        n[a] = t(e[d], d, a, i);
      }
    }
  else
    n = [];
  return n;
}
const wo = (e) => e ? ns(e) ? Xr(e) : wo(e.parent) : null, Ct = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ le(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => Ke(e.props),
    $attrs: (e) => Ke(e.attrs),
    $slots: (e) => Ke(e.slots),
    $refs: (e) => Ke(e.refs),
    $parent: (e) => wo(e.parent),
    $root: (e) => wo(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => zi(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      qr(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Bo.bind(e.proxy)),
    $watch: (e) => ya.bind(e)
  })
), Jo = (e) => e === "_" || e === "$", ao = (e, t) => e !== te && !e.__isScriptSetup && G(e, t), Ri = {
  get({ _: e }, t) {
    if (t === "__v_skip")
      return !0;
    const { ctx: r, setupState: o, data: n, props: i, accessCache: s, type: l, appContext: a } = e;
    if (t === "__isVue")
      return !0;
    let p;
    if (t[0] !== "$") {
      const h = s[t];
      if (h !== void 0)
        switch (h) {
          case 1:
            return o[t];
          case 2:
            return n[t];
          case 4:
            return r[t];
          case 3:
            return i[t];
        }
      else {
        if (ao(o, t))
          return s[t] = 1, o[t];
        if (n !== te && G(n, t))
          return s[t] = 2, n[t];
        if (
          // only cache other properties when instance has declared (thus stable)
          // props
          (p = e.propsOptions[0]) && G(p, t)
        )
          return s[t] = 3, i[t];
        if (r !== te && G(r, t))
          return s[t] = 4, r[t];
        xo && (s[t] = 0);
      }
    }
    const d = Ct[t];
    let f, b;
    if (d)
      return t === "$attrs" ? (fe(e.attrs, "get", ""), Nr()) : t === "$slots" && fe(e, "get", t), d(e);
    if (
      // css module (injected by vue-loader)
      (f = l.__cssModules) && (f = f[t])
    )
      return f;
    if (r !== te && G(r, t))
      return s[t] = 4, r[t];
    if (
      // global properties
      b = a.config.globalProperties, G(b, t)
    )
      return b[t];
    me && (!ie(t) || // #1091 avoid internal isRef/isVNode checks on component instance leading
    // to infinite warning loop
    t.indexOf("__v") !== 0) && (n !== te && Jo(t[0]) && G(n, t) ? T(
      `Property ${JSON.stringify(
        t
      )} must be accessed via $data because it starts with a reserved character ("$" or "_") and is not proxied on the render context.`
    ) : e === me && T(
      `Property ${JSON.stringify(t)} was accessed during render but is not defined on instance.`
    ));
  },
  set({ _: e }, t, r) {
    const { data: o, setupState: n, ctx: i } = e;
    return ao(n, t) ? (n[t] = r, !0) : n.__isScriptSetup && G(n, t) ? (T(`Cannot mutate <script setup> binding "${t}" from Options API.`), !1) : o !== te && G(o, t) ? (o[t] = r, !0) : G(e.props, t) ? (T(`Attempting to mutate prop "${t}". Props are readonly.`), !1) : t[0] === "$" && t.slice(1) in e ? (T(
      `Attempting to mutate public property "${t}". Properties starting with $ are reserved and readonly.`
    ), !1) : (t in e.appContext.config.globalProperties ? Object.defineProperty(i, t, {
      enumerable: !0,
      configurable: !0,
      value: r
    }) : i[t] = r, !0);
  },
  has({
    _: { data: e, setupState: t, accessCache: r, ctx: o, appContext: n, propsOptions: i }
  }, s) {
    let l;
    return !!r[s] || e !== te && G(e, s) || ao(t, s) || (l = i[0]) && G(l, s) || G(o, s) || G(Ct, s) || G(n.config.globalProperties, s);
  },
  defineProperty(e, t, r) {
    return r.get != null ? e._.accessCache[t] = 0 : G(r, "value") && this.set(e, t, r.value, null), Reflect.defineProperty(e, t, r);
  }
};
Ri.ownKeys = (e) => (T(
  "Avoid app logic that relies on enumerating keys on a component instance. The keys will be empty in production mode to avoid performance overhead."
), Reflect.ownKeys(e));
function Hl(e) {
  const t = {};
  return Object.defineProperty(t, "_", {
    configurable: !0,
    enumerable: !1,
    get: () => e
  }), Object.keys(Ct).forEach((r) => {
    Object.defineProperty(t, r, {
      configurable: !0,
      enumerable: !1,
      get: () => Ct[r](e),
      // intercepted by the proxy so no need for implementation,
      // but needed to prevent set errors
      set: he
    });
  }), t;
}
function Ll(e) {
  const {
    ctx: t,
    propsOptions: [r]
  } = e;
  r && Object.keys(r).forEach((o) => {
    Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => e.props[o],
      set: he
    });
  });
}
function Ul(e) {
  const { ctx: t, setupState: r } = e;
  Object.keys(L(r)).forEach((o) => {
    if (!r.__isScriptSetup) {
      if (Jo(o[0])) {
        T(
          `setup() return property ${JSON.stringify(
            o
          )} should not start with "$" or "_" which are reserved prefixes for Vue internals.`
        );
        return;
      }
      Object.defineProperty(t, o, {
        enumerable: !0,
        configurable: !0,
        get: () => r[o],
        set: he
      });
    }
  });
}
function gn(e) {
  return I(e) ? e.reduce(
    (t, r) => (t[r] = null, t),
    {}
  ) : e;
}
function Bl() {
  const e = /* @__PURE__ */ Object.create(null);
  return (t, r) => {
    e[r] ? T(`${t} property "${r}" is already defined in ${e[r]}.`) : e[r] = t;
  };
}
let xo = !0;
function Kl(e) {
  const t = zi(e), r = e.proxy, o = e.ctx;
  xo = !1, t.beforeCreate && vn(t.beforeCreate, e, "bc");
  const {
    // state
    data: n,
    computed: i,
    methods: s,
    watch: l,
    provide: a,
    inject: p,
    // lifecycle
    created: d,
    beforeMount: f,
    mounted: b,
    beforeUpdate: h,
    updated: $,
    activated: M,
    deactivated: X,
    beforeDestroy: N,
    beforeUnmount: Y,
    destroyed: j,
    unmounted: V,
    render: w,
    renderTracked: O,
    renderTriggered: B,
    errorCaptured: K,
    serverPrefetch: de,
    // public API
    expose: Me,
    inheritAttrs: lt,
    // assets
    components: Pe,
    directives: mr,
    filters: on
  } = t, at = Bl();
  {
    const [J] = e.propsOptions;
    if (J)
      for (const W in J)
        at("Props", W);
  }
  if (p && Wl(p, o, at), s)
    for (const J in s) {
      const W = s[J];
      D(W) ? (Object.defineProperty(o, J, {
        value: W.bind(r),
        configurable: !0,
        enumerable: !0,
        writable: !0
      }), at("Methods", J)) : T(
        `Method "${J}" has type "${typeof W}" in the component definition. Did you reference the function correctly?`
      );
    }
  if (n) {
    D(n) || T(
      "The data option must be a function. Plain object usage is no longer supported."
    );
    const J = n.call(r, r);
    if (Po(J) && T(
      "data() returned a Promise - note data() cannot be async; If you intend to perform data fetching before component renders, use async setup() + <Suspense>."
    ), !re(J))
      T("data() should return an object.");
    else {
      e.data = nr(J);
      for (const W in J)
        at("Data", W), Jo(W[0]) || Object.defineProperty(o, W, {
          configurable: !0,
          enumerable: !0,
          get: () => J[W],
          set: he
        });
    }
  }
  if (xo = !0, i)
    for (const J in i) {
      const W = i[J], je = D(W) ? W.bind(r, r) : D(W.get) ? W.get.bind(r, r) : he;
      je === he && T(`Computed property "${J}" has no getter.`);
      const Qr = !D(W) && D(W.set) ? W.set.bind(r) : () => {
        T(
          `Write operation failed: computed property "${J}" is readonly.`
        );
      }, Lt = Q({
        get: je,
        set: Qr
      });
      Object.defineProperty(o, J, {
        enumerable: !0,
        configurable: !0,
        get: () => Lt.value,
        set: (At) => Lt.value = At
      }), at("Computed", J);
    }
  if (l)
    for (const J in l)
      ji(l[J], o, r, J);
  if (a) {
    const J = D(a) ? a.call(r) : a;
    Reflect.ownKeys(J).forEach((W) => {
      Zl(W, J[W]);
    });
  }
  d && vn(d, e, "c");
  function we(J, W) {
    I(W) ? W.forEach((je) => J(je.bind(r))) : W && J(W.bind(r));
  }
  if (we(Il, f), we(Vi, b), we(Ml, h), we(Vl, $), we(Ol, M), we(El, X), we(zl, K), we(jl, O), we(Rl, B), we(Pl, Y), we(Pi, V), we(Fl, de), I(Me))
    if (Me.length) {
      const J = e.exposed || (e.exposed = {});
      Me.forEach((W) => {
        Object.defineProperty(J, W, {
          get: () => r[W],
          set: (je) => r[W] = je
        });
      });
    } else e.exposed || (e.exposed = {});
  w && e.render === he && (e.render = w), lt != null && (e.inheritAttrs = lt), Pe && (e.components = Pe), mr && (e.directives = mr), de && Ii(e);
}
function Wl(e, t, r = he) {
  I(e) && (e = ko(e));
  for (const o in e) {
    const n = e[o];
    let i;
    re(n) ? "default" in n ? i = Sr(
      n.from || o,
      n.default,
      !0
    ) : i = Sr(n.from || o) : i = Sr(n), ae(i) ? Object.defineProperty(t, o, {
      enumerable: !0,
      configurable: !0,
      get: () => i.value,
      set: (s) => i.value = s
    }) : t[o] = i, r("Inject", o);
  }
}
function vn(e, t, r) {
  Je(
    I(e) ? e.map((o) => o.bind(t.proxy)) : e.bind(t.proxy),
    t,
    r
  );
}
function ji(e, t, r, o) {
  let n = o.includes(".") ? Xi(r, o) : () => r[o];
  if (ie(e)) {
    const i = t[e];
    D(i) ? fo(n, i) : T(`Invalid watch handler specified by key "${e}"`, i);
  } else if (D(e))
    fo(n, e.bind(r));
  else if (re(e))
    if (I(e))
      e.forEach((i) => ji(i, t, r, o));
    else {
      const i = D(e.handler) ? e.handler.bind(r) : t[e.handler];
      D(i) ? fo(n, i, e) : T(`Invalid watch handler specified by key "${e.handler}"`, i);
    }
  else
    T(`Invalid watch option: "${o}"`, e);
}
function zi(e) {
  const t = e.type, { mixins: r, extends: o } = t, {
    mixins: n,
    optionsCache: i,
    config: { optionMergeStrategies: s }
  } = e.appContext, l = i.get(t);
  let a;
  return l ? a = l : !n.length && !r && !o ? a = t : (a = {}, n.length && n.forEach(
    (p) => zr(a, p, s, !0)
  ), zr(a, t, s)), re(t) && i.set(t, a), a;
}
function zr(e, t, r, o = !1) {
  const { mixins: n, extends: i } = t;
  i && zr(e, i, r, !0), n && n.forEach(
    (s) => zr(e, s, r, !0)
  );
  for (const s in t)
    if (o && s === "expose")
      T(
        '"expose" option is ignored when declared in mixins or extends. It should only be declared in the base component itself.'
      );
    else {
      const l = ql[s] || r && r[s];
      e[s] = l ? l(e[s], t[s]) : t[s];
    }
  return e;
}
const ql = {
  data: yn,
  props: _n,
  emits: _n,
  // objects
  methods: Jt,
  computed: Jt,
  // lifecycle
  beforeCreate: ge,
  created: ge,
  beforeMount: ge,
  mounted: ge,
  beforeUpdate: ge,
  updated: ge,
  beforeDestroy: ge,
  beforeUnmount: ge,
  destroyed: ge,
  unmounted: ge,
  activated: ge,
  deactivated: ge,
  errorCaptured: ge,
  serverPrefetch: ge,
  // assets
  components: Jt,
  directives: Jt,
  // watch
  watch: Yl,
  // provide / inject
  provide: yn,
  inject: Gl
};
function yn(e, t) {
  return t ? e ? function() {
    return le(
      D(e) ? e.call(this, this) : e,
      D(t) ? t.call(this, this) : t
    );
  } : t : e;
}
function Gl(e, t) {
  return Jt(ko(e), ko(t));
}
function ko(e) {
  if (I(e)) {
    const t = {};
    for (let r = 0; r < e.length; r++)
      t[e[r]] = e[r];
    return t;
  }
  return e;
}
function ge(e, t) {
  return e ? [...new Set([].concat(e, t))] : t;
}
function Jt(e, t) {
  return e ? le(/* @__PURE__ */ Object.create(null), e, t) : t;
}
function _n(e, t) {
  return e ? I(e) && I(t) ? [.../* @__PURE__ */ new Set([...e, ...t])] : le(
    /* @__PURE__ */ Object.create(null),
    gn(e),
    gn(t ?? {})
  ) : t;
}
function Yl(e, t) {
  if (!e) return t;
  if (!t) return e;
  const r = le(/* @__PURE__ */ Object.create(null), e);
  for (const o in t)
    r[o] = ge(e[o], t[o]);
  return r;
}
function Di() {
  return {
    app: null,
    config: {
      isNativeTag: ps,
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
let Jl = 0;
function Xl(e, t) {
  return function(o, n = null) {
    D(o) || (o = le({}, o)), n != null && !re(n) && (T("root props passed to app.mount() must be an object."), n = null);
    const i = Di(), s = /* @__PURE__ */ new WeakSet(), l = [];
    let a = !1;
    const p = i.app = {
      _uid: Jl++,
      _component: o,
      _props: n,
      _container: null,
      _context: i,
      _instance: null,
      version: In,
      get config() {
        return i.config;
      },
      set config(d) {
        T(
          "app.config cannot be replaced. Modify individual options instead."
        );
      },
      use(d, ...f) {
        return s.has(d) ? T("Plugin has already been applied to target app.") : d && D(d.install) ? (s.add(d), d.install(p, ...f)) : D(d) ? (s.add(d), d(p, ...f)) : T(
          'A plugin must either be a function or an object with an "install" function.'
        ), p;
      },
      mixin(d) {
        return i.mixins.includes(d) ? T(
          "Mixin has already been applied to target app" + (d.name ? `: ${d.name}` : "")
        ) : i.mixins.push(d), p;
      },
      component(d, f) {
        return Ao(d, i.config), f ? (i.components[d] && T(`Component "${d}" has already been registered in target app.`), i.components[d] = f, p) : i.components[d];
      },
      directive(d, f) {
        return Ai(d), f ? (i.directives[d] && T(`Directive "${d}" has already been registered in target app.`), i.directives[d] = f, p) : i.directives[d];
      },
      mount(d, f, b) {
        if (a)
          T(
            "App has already been mounted.\nIf you want to remount the same app, move your app creation logic into a factory function and create fresh app instances for each mount - e.g. `const createMyApp = () => createApp(App)`"
          );
        else {
          d.__vue_app__ && T(
            "There is already an app instance mounted on the host container.\n If you want to mount another app on the same host container, you need to unmount the previous app by calling `app.unmount()` first."
          );
          const h = p._ceVNode || qe(o, n);
          return h.appContext = i, b === !0 ? b = "svg" : b === !1 && (b = void 0), i.reload = () => {
            e(
              mt(h),
              d,
              b
            );
          }, e(h, d, b), a = !0, p._container = d, d.__vue_app__ = p, p._instance = h.component, gl(p, In), Xr(h.component);
        }
      },
      onUnmount(d) {
        typeof d != "function" && T(
          `Expected function as first argument to app.onUnmount(), but got ${typeof d}`
        ), l.push(d);
      },
      unmount() {
        a ? (Je(
          l,
          p._instance,
          16
        ), e(null, p._container), p._instance = null, vl(p), delete p._container.__vue_app__) : T("Cannot unmount an app that is not mounted.");
      },
      provide(d, f) {
        return d in i.provides && T(
          `App already provides property with key "${String(d)}". It will be overwritten with the new value.`
        ), i.provides[d] = f, p;
      },
      runWithContext(d) {
        const f = zt;
        zt = p;
        try {
          return d();
        } finally {
          zt = f;
        }
      }
    };
    return p;
  };
}
let zt = null;
function Zl(e, t) {
  if (!ce)
    T("provide() can only be used inside setup().");
  else {
    let r = ce.provides;
    const o = ce.parent && ce.parent.provides;
    o === r && (r = ce.provides = Object.create(o)), r[e] = t;
  }
}
function Sr(e, t, r = !1) {
  const o = ce || me;
  if (o || zt) {
    const n = zt ? zt._context.provides : o ? o.parent == null ? o.vnode.appContext && o.vnode.appContext.provides : o.parent.provides : void 0;
    if (n && e in n)
      return n[e];
    if (arguments.length > 1)
      return r && D(t) ? t.call(o && o.proxy) : t;
    T(`injection "${String(e)}" not found.`);
  } else
    T("inject() can only be used inside setup() or functional components.");
}
const Ni = {}, Hi = () => Object.create(Ni), Li = (e) => Object.getPrototypeOf(e) === Ni;
function Ql(e, t, r, o = !1) {
  const n = {}, i = Hi();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ui(e, t, n, i);
  for (const s in e.propsOptions[0])
    s in n || (n[s] = void 0);
  Ki(t || {}, n, e), r ? e.props = o ? n : Xs(n) : e.type.props ? e.props = n : e.props = i, e.attrs = i;
}
function ea(e) {
  for (; e; ) {
    if (e.type.__hmrId) return !0;
    e = e.parent;
  }
}
function ta(e, t, r, o) {
  const {
    props: n,
    attrs: i,
    vnode: { patchFlag: s }
  } = e, l = L(n), [a] = e.propsOptions;
  let p = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    !ea(e) && (o || s > 0) && !(s & 16)
  ) {
    if (s & 8) {
      const d = e.vnode.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        let b = d[f];
        if (Yr(e.emitsOptions, b))
          continue;
        const h = t[b];
        if (a)
          if (G(i, b))
            h !== i[b] && (i[b] = h, p = !0);
          else {
            const $ = ue(b);
            n[$] = So(
              a,
              l,
              $,
              h,
              e,
              !1
            );
          }
        else
          h !== i[b] && (i[b] = h, p = !0);
      }
    }
  } else {
    Ui(e, t, n, i) && (p = !0);
    let d;
    for (const f in l)
      (!t || // for camelCase
      !G(t, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((d = Te(f)) === f || !G(t, d))) && (a ? r && // for camelCase
      (r[f] !== void 0 || // for kebab-case
      r[d] !== void 0) && (n[f] = So(
        a,
        l,
        f,
        void 0,
        e,
        !0
      )) : delete n[f]);
    if (i !== l)
      for (const f in i)
        (!t || !G(t, f)) && (delete i[f], p = !0);
  }
  p && Ue(e.attrs, "set", ""), Ki(t || {}, n, e);
}
function Ui(e, t, r, o) {
  const [n, i] = e.propsOptions;
  let s = !1, l;
  if (t)
    for (let a in t) {
      if (Xt(a))
        continue;
      const p = t[a];
      let d;
      n && G(n, d = ue(a)) ? !i || !i.includes(d) ? r[d] = p : (l || (l = {}))[d] = p : Yr(e.emitsOptions, a) || (!(a in o) || p !== o[a]) && (o[a] = p, s = !0);
    }
  if (i) {
    const a = L(r), p = l || te;
    for (let d = 0; d < i.length; d++) {
      const f = i[d];
      r[f] = So(
        n,
        a,
        f,
        p[f],
        e,
        !G(p, f)
      );
    }
  }
  return s;
}
function So(e, t, r, o, n, i) {
  const s = e[r];
  if (s != null) {
    const l = G(s, "default");
    if (l && o === void 0) {
      const a = s.default;
      if (s.type !== Function && !s.skipFactory && D(a)) {
        const { propsDefaults: p } = n;
        if (r in p)
          o = p[r];
        else {
          const d = hr(n);
          o = p[r] = a.call(
            null,
            t
          ), d();
        }
      } else
        o = a;
      n.ce && n.ce._setProp(r, o);
    }
    s[
      0
      /* shouldCast */
    ] && (i && !l ? o = !1 : s[
      1
      /* shouldCastTrue */
    ] && (o === "" || o === Te(r)) && (o = !0));
  }
  return o;
}
const ra = /* @__PURE__ */ new WeakMap();
function Bi(e, t, r = !1) {
  const o = r ? ra : t.propsCache, n = o.get(e);
  if (n)
    return n;
  const i = e.props, s = {}, l = [];
  let a = !1;
  if (!D(e)) {
    const d = (f) => {
      a = !0;
      const [b, h] = Bi(f, t, !0);
      le(s, b), h && l.push(...h);
    };
    !r && t.mixins.length && t.mixins.forEach(d), e.extends && d(e.extends), e.mixins && e.mixins.forEach(d);
  }
  if (!i && !a)
    return re(e) && o.set(e, Rt), Rt;
  if (I(i))
    for (let d = 0; d < i.length; d++) {
      ie(i[d]) || T("props must be strings when using array syntax.", i[d]);
      const f = ue(i[d]);
      wn(f) && (s[f] = te);
    }
  else if (i) {
    re(i) || T("invalid props options", i);
    for (const d in i) {
      const f = ue(d);
      if (wn(f)) {
        const b = i[d], h = s[f] = I(b) || D(b) ? { type: b } : le({}, b), $ = h.type;
        let M = !1, X = !0;
        if (I($))
          for (let N = 0; N < $.length; ++N) {
            const Y = $[N], j = D(Y) && Y.name;
            if (j === "Boolean") {
              M = !0;
              break;
            } else j === "String" && (X = !1);
          }
        else
          M = D($) && $.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = M, h[
          1
          /* shouldCastTrue */
        ] = X, (M || G(h, "default")) && l.push(f);
      }
    }
  }
  const p = [s, l];
  return re(e) && o.set(e, p), p;
}
function wn(e) {
  return e[0] !== "$" && !Xt(e) ? !0 : (T(`Invalid prop name: "${e}" is a reserved property.`), !1);
}
function oa(e) {
  return e === null ? "null" : typeof e == "function" ? e.name || "" : typeof e == "object" && e.constructor && e.constructor.name || "";
}
function Ki(e, t, r) {
  const o = L(t), n = r.propsOptions[0], i = Object.keys(e).map((s) => ue(s));
  for (const s in n) {
    let l = n[s];
    l != null && na(
      s,
      o[s],
      l,
      Ke(o),
      !i.includes(s)
    );
  }
}
function na(e, t, r, o, n) {
  const { type: i, required: s, validator: l, skipCheck: a } = r;
  if (s && n) {
    T('Missing required prop: "' + e + '"');
    return;
  }
  if (!(t == null && !s)) {
    if (i != null && i !== !0 && !a) {
      let p = !1;
      const d = I(i) ? i : [i], f = [];
      for (let b = 0; b < d.length && !p; b++) {
        const { valid: h, expectedType: $ } = sa(t, d[b]);
        f.push($ || ""), p = h;
      }
      if (!p) {
        T(la(e, t, f));
        return;
      }
    }
    l && !l(t, o) && T('Invalid prop: custom validator check failed for prop "' + e + '".');
  }
}
const ia = /* @__PURE__ */ ot(
  "String,Number,Boolean,Function,Symbol,BigInt"
);
function sa(e, t) {
  let r;
  const o = oa(t);
  if (o === "null")
    r = e === null;
  else if (ia(o)) {
    const n = typeof e;
    r = n === o.toLowerCase(), !r && n === "object" && (r = e instanceof t);
  } else o === "Object" ? r = re(e) : o === "Array" ? r = I(e) : r = e instanceof t;
  return {
    valid: r,
    expectedType: o
  };
}
function la(e, t, r) {
  if (r.length === 0)
    return `Prop type [] for prop "${e}" won't match anything. Did you mean to use type Array instead?`;
  let o = `Invalid prop: type check failed for prop "${e}". Expected ${r.map(Tt).join(" | ")}`;
  const n = r[0], i = Fo(t), s = xn(t, n), l = xn(t, i);
  return r.length === 1 && kn(n) && !aa(n, i) && (o += ` with value ${s}`), o += `, got ${i} `, kn(i) && (o += `with value ${l}.`), o;
}
function xn(e, t) {
  return t === "String" ? `"${e}"` : t === "Number" ? `${Number(e)}` : `${e}`;
}
function kn(e) {
  return ["string", "number", "boolean"].some((r) => e.toLowerCase() === r);
}
function aa(...e) {
  return e.some((t) => t.toLowerCase() === "boolean");
}
const Wi = (e) => e[0] === "_" || e === "$stable", Xo = (e) => I(e) ? e.map(Fe) : [Fe(e)], da = (e, t, r) => {
  if (t._n)
    return t;
  const o = qo((...n) => (ce && (!r || r.root === ce.root) && T(
    `Slot "${e}" invoked outside of the render function: this will not track dependencies used in the slot. Invoke the slot function inside the render function instead.`
  ), Xo(t(...n))), r);
  return o._c = !1, o;
}, qi = (e, t, r) => {
  const o = e._ctx;
  for (const n in e) {
    if (Wi(n)) continue;
    const i = e[n];
    if (D(i))
      t[n] = da(n, i, o);
    else if (i != null) {
      T(
        `Non-function value encountered for slot "${n}". Prefer function slots for better performance.`
      );
      const s = Xo(i);
      t[n] = () => s;
    }
  }
}, Gi = (e, t) => {
  Yo(e.vnode) || T(
    "Non-function value encountered for default slot. Prefer function slots for better performance."
  );
  const r = Xo(t);
  e.slots.default = () => r;
}, $o = (e, t, r) => {
  for (const o in t)
    (r || o !== "_") && (e[o] = t[o]);
}, ca = (e, t, r) => {
  const o = e.slots = Hi();
  if (e.vnode.shapeFlag & 32) {
    const n = t._;
    n ? ($o(o, t, r), r && Er(o, "_", n, !0)) : qi(t, o);
  } else t && Gi(e, t);
}, fa = (e, t, r) => {
  const { vnode: o, slots: n } = e;
  let i = !0, s = te;
  if (o.shapeFlag & 32) {
    const l = t._;
    l ? We ? ($o(n, t, r), Ue(e, "set", "$slots")) : r && l === 1 ? i = !1 : $o(n, t, r) : (i = !t.$stable, qi(t, n)), s = t;
  } else t && (Gi(e, t), s = { default: 1 });
  if (i)
    for (const l in n)
      !Wi(l) && s[l] == null && delete n[l];
};
let qt, ut;
function Mt(e, t) {
  e.appContext.config.performance && Dr() && ut.mark(`vue-${t}-${e.uid}`), xl(e, t, Dr() ? ut.now() : Date.now());
}
function Vt(e, t) {
  if (e.appContext.config.performance && Dr()) {
    const r = `vue-${t}-${e.uid}`, o = r + ":end";
    ut.mark(o), ut.measure(
      `<${Zr(e, e.type)}> ${t}`,
      r,
      o
    ), ut.clearMarks(r), ut.clearMarks(o);
  }
  kl(e, t, Dr() ? ut.now() : Date.now());
}
function Dr() {
  return qt !== void 0 || (typeof window < "u" && window.performance ? (qt = !0, ut = window.performance) : qt = !1), qt;
}
function ua() {
  const e = [];
  if (e.length) {
    const t = e.length > 1;
    console.warn(
      `Feature flag${t ? "s" : ""} ${e.join(", ")} ${t ? "are" : "is"} not explicitly defined. You are running the esm-bundler build of Vue, which expects these compile-time feature flags to be globally injected via the bundler config in order to get better tree-shaking in the production bundle.

For more details, see https://link.vuejs.org/feature-flags.`
    );
  }
}
const $e = Ca;
function pa(e) {
  return ha(e);
}
function ha(e, t) {
  ua();
  const r = cr();
  r.__VUE__ = !0, Ci(r.__VUE_DEVTOOLS_GLOBAL_HOOK__, r);
  const {
    insert: o,
    remove: n,
    patchProp: i,
    createElement: s,
    createText: l,
    createComment: a,
    setText: p,
    setElementText: d,
    parentNode: f,
    nextSibling: b,
    setScopeId: h = he,
    insertStaticContent: $
  } = e, M = (c, u, m, x = null, v = null, y = null, E = void 0, C = null, S = We ? !1 : !!u.dynamicChildren) => {
    if (c === u)
      return;
    c && !Gt(c, u) && (x = br(c), dt(c, v, y, !0), c = null), u.patchFlag === -2 && (S = !1, u.dynamicChildren = null);
    const { type: k, ref: z, shapeFlag: A } = u;
    switch (k) {
      case pr:
        X(c, u, m, x);
        break;
      case Ee:
        N(c, u, m, x);
        break;
      case $r:
        c == null ? Y(u, m, x, E) : j(c, u, m, E);
        break;
      case Z:
        mr(
          c,
          u,
          m,
          x,
          v,
          y,
          E,
          C,
          S
        );
        break;
      default:
        A & 1 ? O(
          c,
          u,
          m,
          x,
          v,
          y,
          E,
          C,
          S
        ) : A & 6 ? on(
          c,
          u,
          m,
          x,
          v,
          y,
          E,
          C,
          S
        ) : A & 64 || A & 128 ? k.process(
          c,
          u,
          m,
          x,
          v,
          y,
          E,
          C,
          S,
          Bt
        ) : T("Invalid VNode type:", k, `(${typeof k})`);
    }
    z != null && v && Rr(z, c && c.ref, y, u || c, !u);
  }, X = (c, u, m, x) => {
    if (c == null)
      o(
        u.el = l(u.children),
        m,
        x
      );
    else {
      const v = u.el = c.el;
      u.children !== c.children && p(v, u.children);
    }
  }, N = (c, u, m, x) => {
    c == null ? o(
      u.el = a(u.children || ""),
      m,
      x
    ) : u.el = c.el;
  }, Y = (c, u, m, x) => {
    [c.el, c.anchor] = $(
      c.children,
      u,
      m,
      x,
      c.el,
      c.anchor
    );
  }, j = (c, u, m, x) => {
    if (u.children !== c.children) {
      const v = b(c.anchor);
      w(c), [u.el, u.anchor] = $(
        u.children,
        m,
        v,
        x
      );
    } else
      u.el = c.el, u.anchor = c.anchor;
  }, V = ({ el: c, anchor: u }, m, x) => {
    let v;
    for (; c && c !== u; )
      v = b(c), o(c, m, x), c = v;
    o(u, m, x);
  }, w = ({ el: c, anchor: u }) => {
    let m;
    for (; c && c !== u; )
      m = b(c), n(c), c = m;
    n(u);
  }, O = (c, u, m, x, v, y, E, C, S) => {
    u.type === "svg" ? E = "svg" : u.type === "math" && (E = "mathml"), c == null ? B(
      u,
      m,
      x,
      v,
      y,
      E,
      C,
      S
    ) : Me(
      c,
      u,
      v,
      y,
      E,
      C,
      S
    );
  }, B = (c, u, m, x, v, y, E, C) => {
    let S, k;
    const { props: z, shapeFlag: A, transition: P, dirs: H } = c;
    if (S = c.el = s(
      c.type,
      y,
      z && z.is,
      z
    ), A & 8 ? d(S, c.children) : A & 16 && de(
      c.children,
      S,
      null,
      x,
      v,
      co(c, y),
      E,
      C
    ), H && gt(c, null, x, "created"), K(S, c, c.scopeId, E, x), z) {
      for (const ne in z)
        ne !== "value" && !Xt(ne) && i(S, ne, null, z[ne], y, x);
      "value" in z && i(S, "value", null, z.value, y), (k = z.onVnodeBeforeMount) && He(k, x, c);
    }
    Er(S, "__vnode", c, !0), Er(S, "__vueParentComponent", x, !0), H && gt(c, null, x, "beforeMount");
    const q = ma(v, P);
    q && P.beforeEnter(S), o(S, u, m), ((k = z && z.onVnodeMounted) || q || H) && $e(() => {
      k && He(k, x, c), q && P.enter(S), H && gt(c, null, x, "mounted");
    }, v);
  }, K = (c, u, m, x, v) => {
    if (m && h(c, m), x)
      for (let y = 0; y < x.length; y++)
        h(c, x[y]);
    if (v) {
      let y = v.subTree;
      if (y.patchFlag > 0 && y.patchFlag & 2048 && (y = Zo(y.children) || y), u === y || es(y.type) && (y.ssContent === u || y.ssFallback === u)) {
        const E = v.vnode;
        K(
          c,
          E,
          E.scopeId,
          E.slotScopeIds,
          v.parent
        );
      }
    }
  }, de = (c, u, m, x, v, y, E, C, S = 0) => {
    for (let k = S; k < c.length; k++) {
      const z = c[k] = C ? ft(c[k]) : Fe(c[k]);
      M(
        null,
        z,
        u,
        m,
        x,
        v,
        y,
        E,
        C
      );
    }
  }, Me = (c, u, m, x, v, y, E) => {
    const C = u.el = c.el;
    C.__vnode = u;
    let { patchFlag: S, dynamicChildren: k, dirs: z } = u;
    S |= c.patchFlag & 16;
    const A = c.props || te, P = u.props || te;
    let H;
    if (m && vt(m, !1), (H = P.onVnodeBeforeUpdate) && He(H, m, u, c), z && gt(u, c, m, "beforeUpdate"), m && vt(m, !0), We && (S = 0, E = !1, k = null), (A.innerHTML && P.innerHTML == null || A.textContent && P.textContent == null) && d(C, ""), k ? (lt(
      c.dynamicChildren,
      k,
      C,
      m,
      x,
      co(u, v),
      y
    ), Co(c, u)) : E || je(
      c,
      u,
      C,
      null,
      m,
      x,
      co(u, v),
      y,
      !1
    ), S > 0) {
      if (S & 16)
        Pe(C, A, P, m, v);
      else if (S & 2 && A.class !== P.class && i(C, "class", null, P.class, v), S & 4 && i(C, "style", A.style, P.style, v), S & 8) {
        const q = u.dynamicProps;
        for (let ne = 0; ne < q.length; ne++) {
          const oe = q[ne], Se = A[oe], xe = P[oe];
          (xe !== Se || oe === "value") && i(C, oe, Se, xe, v, m);
        }
      }
      S & 1 && c.children !== u.children && d(C, u.children);
    } else !E && k == null && Pe(C, A, P, m, v);
    ((H = P.onVnodeUpdated) || z) && $e(() => {
      H && He(H, m, u, c), z && gt(u, c, m, "updated");
    }, x);
  }, lt = (c, u, m, x, v, y, E) => {
    for (let C = 0; C < u.length; C++) {
      const S = c[C], k = u[C], z = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === Z || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Gt(S, k) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 70) ? f(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          m
        )
      );
      M(
        S,
        k,
        z,
        null,
        x,
        v,
        y,
        E,
        !0
      );
    }
  }, Pe = (c, u, m, x, v) => {
    if (u !== m) {
      if (u !== te)
        for (const y in u)
          !Xt(y) && !(y in m) && i(
            c,
            y,
            u[y],
            null,
            v,
            x
          );
      for (const y in m) {
        if (Xt(y)) continue;
        const E = m[y], C = u[y];
        E !== C && y !== "value" && i(c, y, C, E, v, x);
      }
      "value" in m && i(c, "value", u.value, m.value, v);
    }
  }, mr = (c, u, m, x, v, y, E, C, S) => {
    const k = u.el = c ? c.el : l(""), z = u.anchor = c ? c.anchor : l("");
    let { patchFlag: A, dynamicChildren: P, slotScopeIds: H } = u;
    // #5523 dev root fragment may inherit directives
    (We || A & 2048) && (A = 0, S = !1, P = null), H && (C = C ? C.concat(H) : H), c == null ? (o(k, m, x), o(z, m, x), de(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      u.children || [],
      m,
      z,
      v,
      y,
      E,
      C,
      S
    )) : A > 0 && A & 64 && P && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    c.dynamicChildren ? (lt(
      c.dynamicChildren,
      P,
      m,
      v,
      y,
      E,
      C
    ), Co(c, u)) : je(
      c,
      u,
      m,
      z,
      v,
      y,
      E,
      C,
      S
    );
  }, on = (c, u, m, x, v, y, E, C, S) => {
    u.slotScopeIds = C, c == null ? u.shapeFlag & 512 ? v.ctx.activate(
      u,
      m,
      x,
      E,
      S
    ) : at(
      u,
      m,
      x,
      v,
      y,
      E,
      S
    ) : we(c, u, S);
  }, at = (c, u, m, x, v, y, E) => {
    const C = c.component = Va(
      c,
      x,
      v
    );
    if (C.type.__hmrId && pl(C), wr(c), Mt(C, "mount"), Yo(c) && (C.ctx.renderer = Bt), Mt(C, "init"), Ra(C, !1, E), Vt(C, "init"), C.asyncDep) {
      if (We && (c.el = null), v && v.registerDep(C, J, E), !c.el) {
        const S = C.subTree = qe(Ee);
        N(null, S, u, m);
      }
    } else
      J(
        C,
        c,
        u,
        m,
        v,
        y,
        E
      );
    xr(), Vt(C, "mount");
  }, we = (c, u, m) => {
    const x = u.component = c.component;
    if (Sa(c, u, m))
      if (x.asyncDep && !x.asyncResolved) {
        wr(u), W(x, u, m), xr();
        return;
      } else
        x.next = u, x.update();
    else
      u.el = c.el, x.vnode = u;
  }, J = (c, u, m, x, v, y, E) => {
    const C = () => {
      if (c.isMounted) {
        let { next: A, bu: P, u: H, parent: q, vnode: ne } = c;
        {
          const De = Yi(c);
          if (De) {
            A && (A.el = ne.el, W(c, A, E)), De.asyncDep.then(() => {
              c.isUnmounted || C();
            });
            return;
          }
        }
        let oe = A, Se;
        wr(A || c.vnode), vt(c, !1), A ? (A.el = ne.el, W(c, A, E)) : A = ne, P && Pt(P), (Se = A.props && A.props.onVnodeBeforeUpdate) && He(Se, q, A, ne), vt(c, !0), Mt(c, "render");
        const xe = $n(c);
        Vt(c, "render");
        const ze = c.subTree;
        c.subTree = xe, Mt(c, "patch"), M(
          ze,
          xe,
          // parent may have changed if it's in a teleport
          f(ze.el),
          // anchor may have changed if it's in a fragment
          br(ze),
          c,
          v,
          y
        ), Vt(c, "patch"), A.el = xe.el, oe === null && $a(c, xe.el), H && $e(H, v), (Se = A.props && A.props.onVnodeUpdated) && $e(
          () => He(Se, q, A, ne),
          v
        ), Ti(c), xr();
      } else {
        let A;
        const { el: P, props: H } = u, { bm: q, m: ne, parent: oe, root: Se, type: xe } = c, ze = er(u);
        vt(c, !1), q && Pt(q), !ze && (A = H && H.onVnodeBeforeMount) && He(A, oe, u), vt(c, !0);
        {
          Se.ce && Se.ce._injectChildStyle(xe), Mt(c, "render");
          const De = c.subTree = $n(c);
          Vt(c, "render"), Mt(c, "patch"), M(
            null,
            De,
            m,
            x,
            c,
            v,
            y
          ), Vt(c, "patch"), u.el = De.el;
        }
        if (ne && $e(ne, v), !ze && (A = H && H.onVnodeMounted)) {
          const De = u;
          $e(
            () => He(A, oe, De),
            v
          );
        }
        (u.shapeFlag & 256 || oe && er(oe.vnode) && oe.vnode.shapeFlag & 256) && c.a && $e(c.a, v), c.isMounted = !0, yl(c), u = m = x = null;
      }
    };
    c.scope.on();
    const S = c.effect = new ei(C);
    c.scope.off();
    const k = c.update = S.run.bind(S), z = c.job = S.runIfDirty.bind(S);
    z.i = c, z.id = c.uid, S.scheduler = () => qr(z), vt(c, !0), S.onTrack = c.rtc ? (A) => Pt(c.rtc, A) : void 0, S.onTrigger = c.rtg ? (A) => Pt(c.rtg, A) : void 0, k();
  }, W = (c, u, m) => {
    u.component = c;
    const x = c.vnode.props;
    c.vnode = u, c.next = null, ta(c, u.props, x, m), fa(c, u.children, m), nt(), hn(c), it();
  }, je = (c, u, m, x, v, y, E, C, S = !1) => {
    const k = c && c.children, z = c ? c.shapeFlag : 0, A = u.children, { patchFlag: P, shapeFlag: H } = u;
    if (P > 0) {
      if (P & 128) {
        Lt(
          k,
          A,
          m,
          x,
          v,
          y,
          E,
          C,
          S
        );
        return;
      } else if (P & 256) {
        Qr(
          k,
          A,
          m,
          x,
          v,
          y,
          E,
          C,
          S
        );
        return;
      }
    }
    H & 8 ? (z & 16 && Ut(k, v, y), A !== k && d(m, A)) : z & 16 ? H & 16 ? Lt(
      k,
      A,
      m,
      x,
      v,
      y,
      E,
      C,
      S
    ) : Ut(k, v, y, !0) : (z & 8 && d(m, ""), H & 16 && de(
      A,
      m,
      x,
      v,
      y,
      E,
      C,
      S
    ));
  }, Qr = (c, u, m, x, v, y, E, C, S) => {
    c = c || Rt, u = u || Rt;
    const k = c.length, z = u.length, A = Math.min(k, z);
    let P;
    for (P = 0; P < A; P++) {
      const H = u[P] = S ? ft(u[P]) : Fe(u[P]);
      M(
        c[P],
        H,
        m,
        null,
        v,
        y,
        E,
        C,
        S
      );
    }
    k > z ? Ut(
      c,
      v,
      y,
      !0,
      !1,
      A
    ) : de(
      u,
      m,
      x,
      v,
      y,
      E,
      C,
      S,
      A
    );
  }, Lt = (c, u, m, x, v, y, E, C, S) => {
    let k = 0;
    const z = u.length;
    let A = c.length - 1, P = z - 1;
    for (; k <= A && k <= P; ) {
      const H = c[k], q = u[k] = S ? ft(u[k]) : Fe(u[k]);
      if (Gt(H, q))
        M(
          H,
          q,
          m,
          null,
          v,
          y,
          E,
          C,
          S
        );
      else
        break;
      k++;
    }
    for (; k <= A && k <= P; ) {
      const H = c[A], q = u[P] = S ? ft(u[P]) : Fe(u[P]);
      if (Gt(H, q))
        M(
          H,
          q,
          m,
          null,
          v,
          y,
          E,
          C,
          S
        );
      else
        break;
      A--, P--;
    }
    if (k > A) {
      if (k <= P) {
        const H = P + 1, q = H < z ? u[H].el : x;
        for (; k <= P; )
          M(
            null,
            u[k] = S ? ft(u[k]) : Fe(u[k]),
            m,
            q,
            v,
            y,
            E,
            C,
            S
          ), k++;
      }
    } else if (k > P)
      for (; k <= A; )
        dt(c[k], v, y, !0), k++;
    else {
      const H = k, q = k, ne = /* @__PURE__ */ new Map();
      for (k = q; k <= P; k++) {
        const be = u[k] = S ? ft(u[k]) : Fe(u[k]);
        be.key != null && (ne.has(be.key) && T(
          "Duplicate keys found during update:",
          JSON.stringify(be.key),
          "Make sure keys are unique."
        ), ne.set(be.key, k));
      }
      let oe, Se = 0;
      const xe = P - q + 1;
      let ze = !1, De = 0;
      const Kt = new Array(xe);
      for (k = 0; k < xe; k++) Kt[k] = 0;
      for (k = H; k <= A; k++) {
        const be = c[k];
        if (Se >= xe) {
          dt(be, v, y, !0);
          continue;
        }
        let Ne;
        if (be.key != null)
          Ne = ne.get(be.key);
        else
          for (oe = q; oe <= P; oe++)
            if (Kt[oe - q] === 0 && Gt(be, u[oe])) {
              Ne = oe;
              break;
            }
        Ne === void 0 ? dt(be, v, y, !0) : (Kt[Ne - q] = k + 1, Ne >= De ? De = Ne : ze = !0, M(
          be,
          u[Ne],
          m,
          null,
          v,
          y,
          E,
          C,
          S
        ), Se++);
      }
      const sn = ze ? ba(Kt) : Rt;
      for (oe = sn.length - 1, k = xe - 1; k >= 0; k--) {
        const be = q + k, Ne = u[be], ln = be + 1 < z ? u[be + 1].el : x;
        Kt[k] === 0 ? M(
          null,
          Ne,
          m,
          ln,
          v,
          y,
          E,
          C,
          S
        ) : ze && (oe < 0 || k !== sn[oe] ? At(Ne, m, ln, 2) : oe--);
      }
    }
  }, At = (c, u, m, x, v = null) => {
    const { el: y, type: E, transition: C, children: S, shapeFlag: k } = c;
    if (k & 6) {
      At(c.component.subTree, u, m, x);
      return;
    }
    if (k & 128) {
      c.suspense.move(u, m, x);
      return;
    }
    if (k & 64) {
      E.move(c, u, m, Bt);
      return;
    }
    if (E === Z) {
      o(y, u, m);
      for (let A = 0; A < S.length; A++)
        At(S[A], u, m, x);
      o(c.anchor, u, m);
      return;
    }
    if (E === $r) {
      V(c, u, m);
      return;
    }
    if (x !== 2 && k & 1 && C)
      if (x === 0)
        C.beforeEnter(y), o(y, u, m), $e(() => C.enter(y), v);
      else {
        const { leave: A, delayLeave: P, afterLeave: H } = C, q = () => o(y, u, m), ne = () => {
          A(y, () => {
            q(), H && H();
          });
        };
        P ? P(y, q, ne) : ne();
      }
    else
      o(y, u, m);
  }, dt = (c, u, m, x = !1, v = !1) => {
    const {
      type: y,
      props: E,
      ref: C,
      children: S,
      dynamicChildren: k,
      shapeFlag: z,
      patchFlag: A,
      dirs: P,
      cacheIndex: H
    } = c;
    if (A === -2 && (v = !1), C != null && Rr(C, null, m, c, !0), H != null && (u.renderCache[H] = void 0), z & 256) {
      u.ctx.deactivate(c);
      return;
    }
    const q = z & 1 && P, ne = !er(c);
    let oe;
    if (ne && (oe = E && E.onVnodeBeforeUnmount) && He(oe, u, c), z & 6)
      us(c.component, m, x);
    else {
      if (z & 128) {
        c.suspense.unmount(m, x);
        return;
      }
      q && gt(c, null, u, "beforeUnmount"), z & 64 ? c.type.remove(
        c,
        u,
        m,
        Bt,
        x
      ) : k && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !k.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (y !== Z || A > 0 && A & 64) ? Ut(
        k,
        u,
        m,
        !1,
        !0
      ) : (y === Z && A & 384 || !v && z & 16) && Ut(S, u, m), x && eo(c);
    }
    (ne && (oe = E && E.onVnodeUnmounted) || q) && $e(() => {
      oe && He(oe, u, c), q && gt(c, null, u, "unmounted");
    }, m);
  }, eo = (c) => {
    const { type: u, el: m, anchor: x, transition: v } = c;
    if (u === Z) {
      c.patchFlag > 0 && c.patchFlag & 2048 && v && !v.persisted ? c.children.forEach((E) => {
        E.type === Ee ? n(E.el) : eo(E);
      }) : fs(m, x);
      return;
    }
    if (u === $r) {
      w(c);
      return;
    }
    const y = () => {
      n(m), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (c.shapeFlag & 1 && v && !v.persisted) {
      const { leave: E, delayLeave: C } = v, S = () => E(m, y);
      C ? C(c.el, y, S) : S();
    } else
      y();
  }, fs = (c, u) => {
    let m;
    for (; c !== u; )
      m = b(c), n(c), c = m;
    n(u);
  }, us = (c, u, m) => {
    c.type.__hmrId && hl(c);
    const { bum: x, scope: v, job: y, subTree: E, um: C, m: S, a: k } = c;
    Sn(S), Sn(k), x && Pt(x), v.stop(), y && (y.flags |= 8, dt(E, c, u, m)), C && $e(C, u), $e(() => {
      c.isUnmounted = !0;
    }, u), u && u.pendingBranch && !u.isUnmounted && c.asyncDep && !c.asyncResolved && c.suspenseId === u.pendingId && (u.deps--, u.deps === 0 && u.resolve()), wl(c);
  }, Ut = (c, u, m, x = !1, v = !1, y = 0) => {
    for (let E = y; E < c.length; E++)
      dt(c[E], u, m, x, v);
  }, br = (c) => {
    if (c.shapeFlag & 6)
      return br(c.component.subTree);
    if (c.shapeFlag & 128)
      return c.suspense.next();
    const u = b(c.anchor || c.el), m = u && u[$l];
    return m ? b(m) : u;
  };
  let to = !1;
  const nn = (c, u, m) => {
    c == null ? u._vnode && dt(u._vnode, null, null, !0) : M(
      u._vnode || null,
      c,
      u,
      null,
      null,
      null,
      m
    ), u._vnode = c, to || (to = !0, hn(), ki(), to = !1);
  }, Bt = {
    p: M,
    um: dt,
    m: At,
    r: eo,
    mt: at,
    mc: de,
    pc: je,
    pbc: lt,
    n: br,
    o: e
  };
  return {
    render: nn,
    hydrate: void 0,
    createApp: Xl(nn)
  };
}
function co({ type: e, props: t }, r) {
  return r === "svg" && e === "foreignObject" || r === "mathml" && e === "annotation-xml" && t && t.encoding && t.encoding.includes("html") ? void 0 : r;
}
function vt({ effect: e, job: t }, r) {
  r ? (e.flags |= 32, t.flags |= 4) : (e.flags &= -33, t.flags &= -5);
}
function ma(e, t) {
  return (!e || e && !e.pendingBranch) && t && !t.persisted;
}
function Co(e, t, r = !1) {
  const o = e.children, n = t.children;
  if (I(o) && I(n))
    for (let i = 0; i < o.length; i++) {
      const s = o[i];
      let l = n[i];
      l.shapeFlag & 1 && !l.dynamicChildren && ((l.patchFlag <= 0 || l.patchFlag === 32) && (l = n[i] = ft(n[i]), l.el = s.el), !r && l.patchFlag !== -2 && Co(s, l)), l.type === pr && (l.el = s.el), l.type === Ee && !l.el && (l.el = s.el);
    }
}
function ba(e) {
  const t = e.slice(), r = [0];
  let o, n, i, s, l;
  const a = e.length;
  for (o = 0; o < a; o++) {
    const p = e[o];
    if (p !== 0) {
      if (n = r[r.length - 1], e[n] < p) {
        t[o] = n, r.push(o);
        continue;
      }
      for (i = 0, s = r.length - 1; i < s; )
        l = i + s >> 1, e[r[l]] < p ? i = l + 1 : s = l;
      p < e[r[i]] && (i > 0 && (t[o] = r[i - 1]), r[i] = o);
    }
  }
  for (i = r.length, s = r[i - 1]; i-- > 0; )
    r[i] = s, s = t[s];
  return r;
}
function Yi(e) {
  const t = e.subTree.component;
  if (t)
    return t.asyncDep && !t.asyncResolved ? t : Yi(t);
}
function Sn(e) {
  if (e)
    for (let t = 0; t < e.length; t++)
      e[t].flags |= 8;
}
const ga = Symbol.for("v-scx"), va = () => {
  {
    const e = Sr(ga);
    return e || T(
      "Server rendering context not provided. Make sure to only call useSSRContext() conditionally in the server build."
    ), e;
  }
};
function fo(e, t, r) {
  return D(t) || T(
    "`watch(fn, options?)` signature has been moved to a separate API. Use `watchEffect(fn, options?)` instead. `watch` now only supports `watch(source, cb, options?) signature."
  ), Ji(e, t, r);
}
function Ji(e, t, r = te) {
  const { immediate: o, deep: n, flush: i, once: s } = r;
  t || (o !== void 0 && T(
    'watch() "immediate" option is only respected when using the watch(source, callback, options?) signature.'
  ), n !== void 0 && T(
    'watch() "deep" option is only respected when using the watch(source, callback, options?) signature.'
  ), s !== void 0 && T(
    'watch() "once" option is only respected when using the watch(source, callback, options?) signature.'
  ));
  const l = le({}, r);
  l.onWarn = T;
  const a = t && o || !t && i !== "post";
  let p;
  if (lr) {
    if (i === "sync") {
      const h = va();
      p = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!a) {
      const h = () => {
      };
      return h.stop = he, h.resume = he, h.pause = he, h;
    }
  }
  const d = ce;
  l.call = (h, $, M) => Je(h, d, $, M);
  let f = !1;
  i === "post" ? l.scheduler = (h) => {
    $e(h, d && d.suspense);
  } : i !== "sync" && (f = !0, l.scheduler = (h, $) => {
    $ ? h() : qr(h);
  }), l.augmentJob = (h) => {
    t && (h.flags |= 4), f && (h.flags |= 2, d && (h.id = d.uid, h.i = d));
  };
  const b = il(e, t, l);
  return lr && (p ? p.push(b) : a && b()), b;
}
function ya(e, t, r) {
  const o = this.proxy, n = ie(e) ? e.includes(".") ? Xi(o, e) : () => o[e] : e.bind(o, o);
  let i;
  D(t) ? i = t : (i = t.handler, r = t);
  const s = hr(this), l = Ji(n, i.bind(o), r);
  return s(), l;
}
function Xi(e, t) {
  const r = t.split(".");
  return () => {
    let o = e;
    for (let n = 0; n < r.length && o; n++)
      o = o[r[n]];
    return o;
  };
}
const _a = (e, t) => t === "modelValue" || t === "model-value" ? e.modelModifiers : e[`${t}Modifiers`] || e[`${ue(t)}Modifiers`] || e[`${Te(t)}Modifiers`];
function wa(e, t, ...r) {
  if (e.isUnmounted) return;
  const o = e.vnode.props || te;
  {
    const {
      emitsOptions: d,
      propsOptions: [f]
    } = e;
    if (d)
      if (!(t in d))
        (!f || !(yt(ue(t)) in f)) && T(
          `Component emitted event "${t}" but it is neither declared in the emits option nor as an "${yt(ue(t))}" prop.`
        );
      else {
        const b = d[t];
        D(b) && (b(...r) || T(
          `Invalid event arguments: event validation failed for event "${t}".`
        ));
      }
  }
  let n = r;
  const i = t.startsWith("update:"), s = i && _a(o, t.slice(7));
  s && (s.trim && (n = r.map((d) => ie(d) ? d.trim() : d)), s.number && (n = r.map(Ar))), Sl(e, t, n);
  {
    const d = t.toLowerCase();
    d !== t && o[yt(d)] && T(
      `Event "${d}" is emitted in component ${Zr(
        e,
        e.type
      )} but the handler is registered for "${t}". Note that HTML attributes are case-insensitive and you cannot use v-on to listen to camelCase events when using in-DOM templates. You should probably use "${Te(
        t
      )}" instead of "${t}".`
    );
  }
  let l, a = o[l = yt(t)] || // also try camelCase event handler (#2249)
  o[l = yt(ue(t))];
  !a && i && (a = o[l = yt(Te(t))]), a && Je(
    a,
    e,
    6,
    n
  );
  const p = o[l + "Once"];
  if (p) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[l])
      return;
    e.emitted[l] = !0, Je(
      p,
      e,
      6,
      n
    );
  }
}
function Zi(e, t, r = !1) {
  const o = t.emitsCache, n = o.get(e);
  if (n !== void 0)
    return n;
  const i = e.emits;
  let s = {}, l = !1;
  if (!D(e)) {
    const a = (p) => {
      const d = Zi(p, t, !0);
      d && (l = !0, le(s, d));
    };
    !r && t.mixins.length && t.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !i && !l ? (re(e) && o.set(e, null), null) : (I(i) ? i.forEach((a) => s[a] = null) : le(s, i), re(e) && o.set(e, s), s);
}
function Yr(e, t) {
  return !e || !ar(t) ? !1 : (t = t.slice(2).replace(/Once$/, ""), G(e, t[0].toLowerCase() + t.slice(1)) || G(e, Te(t)) || G(e, t));
}
let To = !1;
function Nr() {
  To = !0;
}
function $n(e) {
  const {
    type: t,
    vnode: r,
    proxy: o,
    withProxy: n,
    propsOptions: [i],
    slots: s,
    attrs: l,
    emit: a,
    render: p,
    renderCache: d,
    props: f,
    data: b,
    setupState: h,
    ctx: $,
    inheritAttrs: M
  } = e, X = Fr(e);
  let N, Y;
  To = !1;
  try {
    if (r.shapeFlag & 4) {
      const w = n || o, O = h.__isScriptSetup ? new Proxy(w, {
        get(B, K, de) {
          return T(
            `Property '${String(
              K
            )}' was accessed via 'this'. Avoid using 'this' in templates.`
          ), Reflect.get(B, K, de);
        }
      }) : w;
      N = Fe(
        p.call(
          O,
          w,
          d,
          Ke(f),
          h,
          b,
          $
        )
      ), Y = l;
    } else {
      const w = t;
      l === f && Nr(), N = Fe(
        w.length > 1 ? w(
          Ke(f),
          {
            get attrs() {
              return Nr(), Ke(l);
            },
            slots: s,
            emit: a
          }
        ) : w(
          Ke(f),
          null
        )
      ), Y = t.props ? l : xa(l);
    }
  } catch (w) {
    tr.length = 0, fr(w, e, 1), N = qe(Ee);
  }
  let j = N, V;
  if (N.patchFlag > 0 && N.patchFlag & 2048 && ([j, V] = Qi(N)), Y && M !== !1) {
    const w = Object.keys(Y), { shapeFlag: O } = j;
    if (w.length) {
      if (O & 7)
        i && w.some(Or) && (Y = ka(
          Y,
          i
        )), j = mt(j, Y, !1, !0);
      else if (!To && j.type !== Ee) {
        const B = Object.keys(l), K = [], de = [];
        for (let Me = 0, lt = B.length; Me < lt; Me++) {
          const Pe = B[Me];
          ar(Pe) ? Or(Pe) || K.push(Pe[2].toLowerCase() + Pe.slice(3)) : de.push(Pe);
        }
        de.length && T(
          `Extraneous non-props attributes (${de.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text or teleport root nodes.`
        ), K.length && T(
          `Extraneous non-emits event listeners (${K.join(", ")}) were passed to component but could not be automatically inherited because component renders fragment or text root nodes. If the listener is intended to be a component custom event listener only, declare it using the "emits" option.`
        );
      }
    }
  }
  return r.dirs && (Cn(j) || T(
    "Runtime directive used on component with non-element root node. The directives will not function as intended."
  ), j = mt(j, null, !1, !0), j.dirs = j.dirs ? j.dirs.concat(r.dirs) : r.dirs), r.transition && (Cn(j) || T(
    "Component inside <Transition> renders non-element root node that cannot be animated."
  ), Go(j, r.transition)), V ? V(j) : N = j, Fr(X), N;
}
const Qi = (e) => {
  const t = e.children, r = e.dynamicChildren, o = Zo(t, !1);
  if (o) {
    if (o.patchFlag > 0 && o.patchFlag & 2048)
      return Qi(o);
  } else return [e, void 0];
  const n = t.indexOf(o), i = r ? r.indexOf(o) : -1, s = (l) => {
    t[n] = l, r && (i > -1 ? r[i] = l : l.patchFlag > 0 && (e.dynamicChildren = [...r, l]));
  };
  return [Fe(o), s];
};
function Zo(e, t = !0) {
  let r;
  for (let o = 0; o < e.length; o++) {
    const n = e[o];
    if (Jr(n)) {
      if (n.type !== Ee || n.children === "v-if") {
        if (r)
          return;
        if (r = n, t && r.patchFlag > 0 && r.patchFlag & 2048)
          return Zo(r.children);
      }
    } else
      return;
  }
  return r;
}
const xa = (e) => {
  let t;
  for (const r in e)
    (r === "class" || r === "style" || ar(r)) && ((t || (t = {}))[r] = e[r]);
  return t;
}, ka = (e, t) => {
  const r = {};
  for (const o in e)
    (!Or(o) || !(o.slice(9) in t)) && (r[o] = e[o]);
  return r;
}, Cn = (e) => e.shapeFlag & 7 || e.type === Ee;
function Sa(e, t, r) {
  const { props: o, children: n, component: i } = e, { props: s, children: l, patchFlag: a } = t, p = i.emitsOptions;
  if ((n || l) && We || t.dirs || t.transition)
    return !0;
  if (r && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return o ? Tn(o, s, p) : !!s;
    if (a & 8) {
      const d = t.dynamicProps;
      for (let f = 0; f < d.length; f++) {
        const b = d[f];
        if (s[b] !== o[b] && !Yr(p, b))
          return !0;
      }
    }
  } else
    return (n || l) && (!l || !l.$stable) ? !0 : o === s ? !1 : o ? s ? Tn(o, s, p) : !0 : !!s;
  return !1;
}
function Tn(e, t, r) {
  const o = Object.keys(t);
  if (o.length !== Object.keys(e).length)
    return !0;
  for (let n = 0; n < o.length; n++) {
    const i = o[n];
    if (t[i] !== e[i] && !Yr(r, i))
      return !0;
  }
  return !1;
}
function $a({ vnode: e, parent: t }, r) {
  for (; t; ) {
    const o = t.subTree;
    if (o.suspense && o.suspense.activeBranch === e && (o.el = e.el), o === e)
      (e = t.vnode).el = r, t = t.parent;
    else
      break;
  }
}
const es = (e) => e.__isSuspense;
function Ca(e, t) {
  t && t.pendingBranch ? I(e) ? t.effects.push(...e) : t.effects.push(e) : xi(e);
}
const Z = Symbol.for("v-fgt"), pr = Symbol.for("v-txt"), Ee = Symbol.for("v-cmt"), $r = Symbol.for("v-stc"), tr = [];
let Oe = null;
function g(e = !1) {
  tr.push(Oe = e ? null : []);
}
function Ta() {
  tr.pop(), Oe = tr[tr.length - 1] || null;
}
let sr = 1;
function On(e, t = !1) {
  sr += e, e < 0 && Oe && t && (Oe.hasOnce = !0);
}
function ts(e) {
  return e.dynamicChildren = sr > 0 ? Oe || Rt : null, Ta(), sr > 0 && Oe && Oe.push(e), e;
}
function _(e, t, r, o, n, i) {
  return ts(
    U(
      e,
      t,
      r,
      o,
      n,
      i,
      !0
    )
  );
}
function pt(e, t, r, o, n) {
  return ts(
    qe(
      e,
      t,
      r,
      o,
      n,
      !0
    )
  );
}
function Jr(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Gt(e, t) {
  if (t.shapeFlag & 6 && e.component) {
    const r = kr.get(t.type);
    if (r && r.has(e.component))
      return e.shapeFlag &= -257, t.shapeFlag &= -513, !1;
  }
  return e.type === t.type && e.key === t.key;
}
const Oa = (...e) => Ea(
  ...e
), rs = ({ key: e }) => e ?? null, Cr = ({
  ref: e,
  ref_key: t,
  ref_for: r
}) => (typeof e == "number" && (e = "" + e), e != null ? ie(e) || ae(e) || D(e) ? { i: me, r: e, k: t, f: !!r } : e : null);
function U(e, t = null, r = null, o = 0, n = null, i = e === Z ? 0 : 1, s = !1, l = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: t,
    key: t && rs(t),
    ref: t && Cr(t),
    scopeId: Ei,
    slotScopeIds: null,
    children: r,
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
    shapeFlag: i,
    patchFlag: o,
    dynamicProps: n,
    dynamicChildren: null,
    appContext: null,
    ctx: me
  };
  return l ? (Qo(a, r), i & 128 && e.normalize(a)) : r && (a.shapeFlag |= ie(r) ? 8 : 16), a.key !== a.key && T("VNode created with invalid key (NaN). VNode type:", a.type), sr > 0 && // avoid a block node from tracking itself
  !s && // has current parent block
  Oe && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || i & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && Oe.push(a), a;
}
const qe = Oa;
function Ea(e, t = null, r = null, o = 0, n = null, i = !1) {
  if ((!e || e === Fi) && (e || T(`Invalid vnode type when creating vnode: ${e}.`), e = Ee), Jr(e)) {
    const l = mt(
      e,
      t,
      !0
      /* mergeRef: true */
    );
    return r && Qo(l, r), sr > 0 && !i && Oe && (l.shapeFlag & 6 ? Oe[Oe.indexOf(e)] = l : Oe.push(l)), l.patchFlag = -2, l;
  }
  if (ss(e) && (e = e.__vccOpts), t) {
    t = Aa(t);
    let { class: l, style: a } = t;
    l && !ie(l) && (t.class = se(l)), re(a) && (Ir(a) && !I(a) && (a = le({}, a)), t.style = jo(a));
  }
  const s = ie(e) ? 1 : es(e) ? 128 : Cl(e) ? 64 : re(e) ? 4 : D(e) ? 2 : 0;
  return s & 4 && Ir(e) && (e = L(e), T(
    "Vue received a Component that was made a reactive object. This can lead to unnecessary performance overhead and should be avoided by marking the component with `markRaw` or using `shallowRef` instead of `ref`.",
    `
Component that was made reactive: `,
    e
  )), U(
    e,
    t,
    r,
    o,
    n,
    s,
    i,
    !0
  );
}
function Aa(e) {
  return e ? Ir(e) || Li(e) ? le({}, e) : e : null;
}
function mt(e, t, r = !1, o = !1) {
  const { props: n, ref: i, patchFlag: s, children: l, transition: a } = e, p = t ? Oo(n || {}, t) : n, d = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: p,
    key: p && rs(p),
    ref: t && t.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      r && i ? I(i) ? i.concat(Cr(t)) : [i, Cr(t)] : Cr(t)
    ) : i,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: s === -1 && I(l) ? l.map(os) : l,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: t && e.type !== Z ? s === -1 ? 16 : s | 16 : s,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && mt(e.ssContent),
    ssFallback: e.ssFallback && mt(e.ssFallback),
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce
  };
  return a && o && Go(
    d,
    a.clone(d)
  ), d;
}
function os(e) {
  const t = mt(e);
  return I(e.children) && (t.children = e.children.map(os)), t;
}
function wt(e = " ", t = 0) {
  return qe(pr, null, e, t);
}
function F(e = "", t = !1) {
  return t ? (g(), pt(Ee, null, e)) : qe(Ee, null, e);
}
function Fe(e) {
  return e == null || typeof e == "boolean" ? qe(Ee) : I(e) ? qe(
    Z,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : Jr(e) ? ft(e) : qe(pr, null, String(e));
}
function ft(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : mt(e);
}
function Qo(e, t) {
  let r = 0;
  const { shapeFlag: o } = e;
  if (t == null)
    t = null;
  else if (I(t))
    r = 16;
  else if (typeof t == "object")
    if (o & 65) {
      const n = t.default;
      n && (n._c && (n._d = !1), Qo(e, n()), n._c && (n._d = !0));
      return;
    } else {
      r = 32;
      const n = t._;
      !n && !Li(t) ? t._ctx = me : n === 3 && me && (me.slots._ === 1 ? t._ = 1 : (t._ = 2, e.patchFlag |= 1024));
    }
  else D(t) ? (t = { default: t, _ctx: me }, r = 32) : (t = String(t), o & 64 ? (r = 16, t = [wt(t)]) : r = 8);
  e.children = t, e.shapeFlag |= r;
}
function Oo(...e) {
  const t = {};
  for (let r = 0; r < e.length; r++) {
    const o = e[r];
    for (const n in o)
      if (n === "class")
        t.class !== o.class && (t.class = se([t.class, o.class]));
      else if (n === "style")
        t.style = jo([t.style, o.style]);
      else if (ar(n)) {
        const i = t[n], s = o[n];
        s && i !== s && !(I(i) && i.includes(s)) && (t[n] = i ? [].concat(i, s) : s);
      } else n !== "" && (t[n] = o[n]);
  }
  return t;
}
function He(e, t, r, o = null) {
  Je(e, t, 7, [
    r,
    o
  ]);
}
const Ia = Di();
let Ma = 0;
function Va(e, t, r) {
  const o = e.type, n = (t ? t.appContext : e.appContext) || Ia, i = {
    uid: Ma++,
    vnode: e,
    type: o,
    parent: t,
    appContext: n,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new Is(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: t ? t.provides : Object.create(n.provides),
    ids: t ? t.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Bi(o, n),
    emitsOptions: Zi(o, n),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: te,
    // inheritAttrs
    inheritAttrs: o.inheritAttrs,
    // state
    ctx: te,
    data: te,
    props: te,
    attrs: te,
    slots: te,
    refs: te,
    setupState: te,
    setupContext: null,
    // suspense related
    suspense: r,
    suspenseId: r ? r.pendingId : 0,
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
  return i.ctx = Hl(i), i.root = t ? t.root : i, i.emit = wa.bind(null, i), e.ce && e.ce(i), i;
}
let ce = null;
const Pa = () => ce || me;
let Hr, Eo;
{
  const e = cr(), t = (r, o) => {
    let n;
    return (n = e[r]) || (n = e[r] = []), n.push(o), (i) => {
      n.length > 1 ? n.forEach((s) => s(i)) : n[0](i);
    };
  };
  Hr = t(
    "__VUE_INSTANCE_SETTERS__",
    (r) => ce = r
  ), Eo = t(
    "__VUE_SSR_SETTERS__",
    (r) => lr = r
  );
}
const hr = (e) => {
  const t = ce;
  return Hr(e), e.scope.on(), () => {
    e.scope.off(), Hr(t);
  };
}, En = () => {
  ce && ce.scope.off(), Hr(null);
}, Fa = /* @__PURE__ */ ot("slot,component");
function Ao(e, { isNativeTag: t }) {
  (Fa(e) || t(e)) && T(
    "Do not use built-in or reserved HTML elements as component id: " + e
  );
}
function ns(e) {
  return e.vnode.shapeFlag & 4;
}
let lr = !1;
function Ra(e, t = !1, r = !1) {
  t && Eo(t);
  const { props: o, children: n } = e.vnode, i = ns(e);
  Ql(e, o, i, t), ca(e, n, r);
  const s = i ? ja(e, t) : void 0;
  return t && Eo(!1), s;
}
function ja(e, t) {
  var r;
  const o = e.type;
  {
    if (o.name && Ao(o.name, e.appContext.config), o.components) {
      const i = Object.keys(o.components);
      for (let s = 0; s < i.length; s++)
        Ao(i[s], e.appContext.config);
    }
    if (o.directives) {
      const i = Object.keys(o.directives);
      for (let s = 0; s < i.length; s++)
        Ai(i[s]);
    }
    o.compilerOptions && za() && T(
      '"compilerOptions" is only supported when using a build of Vue that includes the runtime compiler. Since you are using a runtime-only build, the options should be passed via your build tool config instead.'
    );
  }
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Ri), Ll(e);
  const { setup: n } = o;
  if (n) {
    nt();
    const i = e.setupContext = n.length > 1 ? Ha(e) : null, s = hr(e), l = Ht(
      n,
      e,
      0,
      [
        Ke(e.props),
        i
      ]
    ), a = Po(l);
    if (it(), s(), (a || e.sp) && !er(e) && Ii(e), a) {
      if (l.then(En, En), t)
        return l.then((p) => {
          An(e, p, t);
        }).catch((p) => {
          fr(p, e, 0);
        });
      if (e.asyncDep = l, !e.suspense) {
        const p = (r = o.name) != null ? r : "Anonymous";
        T(
          `Component <${p}>: setup function returned a promise, but no <Suspense> boundary was found in the parent component tree. A component with async setup() must be nested in a <Suspense> in order to be rendered.`
        );
      }
    } else
      An(e, l, t);
  } else
    is(e, t);
}
function An(e, t, r) {
  D(t) ? e.type.__ssrInlineRender ? e.ssrRender = t : e.render = t : re(t) ? (Jr(t) && T(
    "setup() should not return VNodes directly - return a render function instead."
  ), e.devtoolsRawSetupState = t, e.setupState = vi(t), Ul(e)) : t !== void 0 && T(
    `setup() should return an object. Received: ${t === null ? "null" : typeof t}`
  ), is(e, r);
}
const za = () => !0;
function is(e, t, r) {
  const o = e.type;
  e.render || (e.render = o.render || he);
  {
    const n = hr(e);
    nt();
    try {
      Kl(e);
    } finally {
      it(), n();
    }
  }
  !o.render && e.render === he && !t && (o.template ? T(
    'Component provided template option but runtime compilation is not supported in this build of Vue. Configure your bundler to alias "vue" to "vue/dist/vue.esm-bundler.js".'
  ) : T("Component is missing template or render function: ", o));
}
const Da = {
  get(e, t) {
    return Nr(), fe(e, "get", ""), e[t];
  },
  set() {
    return T("setupContext.attrs is readonly."), !1;
  },
  deleteProperty() {
    return T("setupContext.attrs is readonly."), !1;
  }
};
function Na(e) {
  return new Proxy(e.slots, {
    get(t, r) {
      return fe(e, "get", "$slots"), t[r];
    }
  });
}
function Ha(e) {
  const t = (r) => {
    if (e.exposed && T("expose() should be called only once per setup()."), r != null) {
      let o = typeof r;
      o === "object" && (I(r) ? o = "array" : ae(r) && (o = "ref")), o !== "object" && T(
        `expose() should be passed a plain object, received ${o}.`
      );
    }
    e.exposed = r || {};
  };
  {
    let r, o;
    return Object.freeze({
      get attrs() {
        return r || (r = new Proxy(e.attrs, Da));
      },
      get slots() {
        return o || (o = Na(e));
      },
      get emit() {
        return (n, ...i) => e.emit(n, ...i);
      },
      expose: t
    });
  }
}
function Xr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(vi(Zs(e.exposed)), {
    get(t, r) {
      if (r in t)
        return t[r];
      if (r in Ct)
        return Ct[r](e);
    },
    has(t, r) {
      return r in t || r in Ct;
    }
  })) : e.proxy;
}
const La = /(?:^|[-_])(\w)/g, Ua = (e) => e.replace(La, (t) => t.toUpperCase()).replace(/[-_]/g, "");
function en(e, t = !0) {
  return D(e) ? e.displayName || e.name : e.name || t && e.__name;
}
function Zr(e, t, r = !1) {
  let o = en(t);
  if (!o && t.__file) {
    const n = t.__file.match(/([^/\\]+)\.\w+$/);
    n && (o = n[1]);
  }
  if (!o && e && e.parent) {
    const n = (i) => {
      for (const s in i)
        if (i[s] === t)
          return s;
    };
    o = n(
      e.components || e.parent.type.components
    ) || n(e.appContext.components);
  }
  return o ? Ua(o) : r ? "App" : "Anonymous";
}
function ss(e) {
  return D(e) && "__vccOpts" in e;
}
const Q = (e, t) => {
  const r = ol(e, t, lr);
  {
    const o = Pa();
    o && o.appContext.config.warnRecursiveComputed && (r._warnRecursive = !0);
  }
  return r;
};
function Ba() {
  if (typeof window > "u")
    return;
  const e = { style: "color:#3ba776" }, t = { style: "color:#1677ff" }, r = { style: "color:#f5222d" }, o = { style: "color:#eb2f96" }, n = {
    __vue_custom_formatter: !0,
    header(f) {
      return re(f) ? f.__isVue ? ["div", e, "VueInstance"] : ae(f) ? [
        "div",
        {},
        ["span", e, d(f)],
        "<",
        // avoid debugger accessing value affecting behavior
        l("_value" in f ? f._value : f),
        ">"
      ] : St(f) ? [
        "div",
        {},
        ["span", e, ye(f) ? "ShallowReactive" : "Reactive"],
        "<",
        l(f),
        `>${rt(f) ? " (readonly)" : ""}`
      ] : rt(f) ? [
        "div",
        {},
        ["span", e, ye(f) ? "ShallowReadonly" : "Readonly"],
        "<",
        l(f),
        ">"
      ] : null : null;
    },
    hasBody(f) {
      return f && f.__isVue;
    },
    body(f) {
      if (f && f.__isVue)
        return [
          "div",
          {},
          ...i(f.$)
        ];
    }
  };
  function i(f) {
    const b = [];
    f.type.props && f.props && b.push(s("props", L(f.props))), f.setupState !== te && b.push(s("setup", f.setupState)), f.data !== te && b.push(s("data", L(f.data)));
    const h = a(f, "computed");
    h && b.push(s("computed", h));
    const $ = a(f, "inject");
    return $ && b.push(s("injected", $)), b.push([
      "div",
      {},
      [
        "span",
        {
          style: o.style + ";opacity:0.66"
        },
        "$ (internal): "
      ],
      ["object", { object: f }]
    ]), b;
  }
  function s(f, b) {
    return b = le({}, b), Object.keys(b).length ? [
      "div",
      { style: "line-height:1.25em;margin-bottom:0.6em" },
      [
        "div",
        {
          style: "color:#476582"
        },
        f
      ],
      [
        "div",
        {
          style: "padding-left:1.25em"
        },
        ...Object.keys(b).map((h) => [
          "div",
          {},
          ["span", o, h + ": "],
          l(b[h], !1)
        ])
      ]
    ] : ["span", {}];
  }
  function l(f, b = !0) {
    return typeof f == "number" ? ["span", t, f] : typeof f == "string" ? ["span", r, JSON.stringify(f)] : typeof f == "boolean" ? ["span", o, f] : re(f) ? ["object", { object: b ? L(f) : f }] : ["span", r, String(f)];
  }
  function a(f, b) {
    const h = f.type;
    if (D(h))
      return;
    const $ = {};
    for (const M in f.ctx)
      p(h, M, b) && ($[M] = f.ctx[M]);
    return $;
  }
  function p(f, b, h) {
    const $ = f[h];
    if (I($) && $.includes(b) || re($) && b in $ || f.extends && p(f.extends, b, h) || f.mixins && f.mixins.some((M) => p(M, b, h)))
      return !0;
  }
  function d(f) {
    return ye(f) ? "ShallowRef" : f.effect ? "ComputedRef" : "Ref";
  }
  window.devtoolsFormatters ? window.devtoolsFormatters.push(n) : window.devtoolsFormatters = [n];
}
const In = "3.5.13", Ae = T;
/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Io;
const Mn = typeof window < "u" && window.trustedTypes;
if (Mn)
  try {
    Io = /* @__PURE__ */ Mn.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch (e) {
    Ae(`Error creating trusted types policy: ${e}`);
  }
const ls = Io ? (e) => Io.createHTML(e) : (e) => e, Ka = "http://www.w3.org/2000/svg", Wa = "http://www.w3.org/1998/Math/MathML", Ze = typeof document < "u" ? document : null, Vn = Ze && /* @__PURE__ */ Ze.createElement("template"), qa = {
  insert: (e, t, r) => {
    t.insertBefore(e, r || null);
  },
  remove: (e) => {
    const t = e.parentNode;
    t && t.removeChild(e);
  },
  createElement: (e, t, r, o) => {
    const n = t === "svg" ? Ze.createElementNS(Ka, e) : t === "mathml" ? Ze.createElementNS(Wa, e) : r ? Ze.createElement(e, { is: r }) : Ze.createElement(e);
    return e === "select" && o && o.multiple != null && n.setAttribute("multiple", o.multiple), n;
  },
  createText: (e) => Ze.createTextNode(e),
  createComment: (e) => Ze.createComment(e),
  setText: (e, t) => {
    e.nodeValue = t;
  },
  setElementText: (e, t) => {
    e.textContent = t;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ze.querySelector(e),
  setScopeId(e, t) {
    e.setAttribute(t, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, t, r, o, n, i) {
    const s = r ? r.previousSibling : t.lastChild;
    if (n && (n === i || n.nextSibling))
      for (; t.insertBefore(n.cloneNode(!0), r), !(n === i || !(n = n.nextSibling)); )
        ;
    else {
      Vn.innerHTML = ls(
        o === "svg" ? `<svg>${e}</svg>` : o === "mathml" ? `<math>${e}</math>` : e
      );
      const l = Vn.content;
      if (o === "svg" || o === "mathml") {
        const a = l.firstChild;
        for (; a.firstChild; )
          l.appendChild(a.firstChild);
        l.removeChild(a);
      }
      t.insertBefore(l, r);
    }
    return [
      // first
      s ? s.nextSibling : t.firstChild,
      // last
      r ? r.previousSibling : t.lastChild
    ];
  }
}, Ga = Symbol("_vtc");
function Ya(e, t, r) {
  const o = e[Ga];
  o && (t = (t ? [t, ...o] : [...o]).join(" ")), t == null ? e.removeAttribute("class") : r ? e.setAttribute("class", t) : e.className = t;
}
const Pn = Symbol("_vod"), Ja = Symbol("_vsh"), Xa = Symbol("CSS_VAR_TEXT"), Za = /(^|;)\s*display\s*:/;
function Qa(e, t, r) {
  const o = e.style, n = ie(r);
  let i = !1;
  if (r && !n) {
    if (t)
      if (ie(t))
        for (const s of t.split(";")) {
          const l = s.slice(0, s.indexOf(":")).trim();
          r[l] == null && Tr(o, l, "");
        }
      else
        for (const s in t)
          r[s] == null && Tr(o, s, "");
    for (const s in r)
      s === "display" && (i = !0), Tr(o, s, r[s]);
  } else if (n) {
    if (t !== r) {
      const s = o[Xa];
      s && (r += ";" + s), o.cssText = r, i = Za.test(r);
    }
  } else t && e.removeAttribute("style");
  Pn in e && (e[Pn] = i ? o.display : "", e[Ja] && (o.display = "none"));
}
const ed = /[^\\];\s*$/, Fn = /\s*!important$/;
function Tr(e, t, r) {
  if (I(r))
    r.forEach((o) => Tr(e, t, o));
  else if (r == null && (r = ""), ed.test(r) && Ae(
    `Unexpected semicolon at the end of '${t}' style value: '${r}'`
  ), t.startsWith("--"))
    e.setProperty(t, r);
  else {
    const o = td(e, t);
    Fn.test(r) ? e.setProperty(
      Te(o),
      r.replace(Fn, ""),
      "important"
    ) : e[o] = r;
  }
}
const Rn = ["Webkit", "Moz", "ms"], uo = {};
function td(e, t) {
  const r = uo[t];
  if (r)
    return r;
  let o = ue(t);
  if (o !== "filter" && o in e)
    return uo[t] = o;
  o = Tt(o);
  for (let n = 0; n < Rn.length; n++) {
    const i = Rn[n] + o;
    if (i in e)
      return uo[t] = i;
  }
  return t;
}
const jn = "http://www.w3.org/1999/xlink";
function zn(e, t, r, o, n, i = Es(t)) {
  o && t.startsWith("xlink:") ? r == null ? e.removeAttributeNS(jn, t.slice(6, t.length)) : e.setAttributeNS(jn, t, r) : r == null || i && !Xn(r) ? e.removeAttribute(t) : e.setAttribute(
    t,
    i ? "" : Ge(r) ? String(r) : r
  );
}
function Dn(e, t, r, o, n) {
  if (t === "innerHTML" || t === "textContent") {
    r != null && (e[t] = t === "innerHTML" ? ls(r) : r);
    return;
  }
  const i = e.tagName;
  if (t === "value" && i !== "PROGRESS" && // custom elements may use _value internally
  !i.includes("-")) {
    const l = i === "OPTION" ? e.getAttribute("value") || "" : e.value, a = r == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(r);
    (l !== a || !("_value" in e)) && (e.value = a), r == null && e.removeAttribute(t), e._value = r;
    return;
  }
  let s = !1;
  if (r === "" || r == null) {
    const l = typeof e[t];
    l === "boolean" ? r = Xn(r) : r == null && l === "string" ? (r = "", s = !0) : l === "number" && (r = 0, s = !0);
  }
  try {
    e[t] = r;
  } catch (l) {
    s || Ae(
      `Failed setting prop "${t}" on <${i.toLowerCase()}>: value ${r} is invalid.`,
      l
    );
  }
  s && e.removeAttribute(n || t);
}
function et(e, t, r, o) {
  e.addEventListener(t, r, o);
}
function rd(e, t, r, o) {
  e.removeEventListener(t, r, o);
}
const Nn = Symbol("_vei");
function od(e, t, r, o, n = null) {
  const i = e[Nn] || (e[Nn] = {}), s = i[t];
  if (o && s)
    s.value = Ln(o, t);
  else {
    const [l, a] = nd(t);
    if (o) {
      const p = i[t] = ld(
        Ln(o, t),
        n
      );
      et(e, l, p, a);
    } else s && (rd(e, l, s, a), i[t] = void 0);
  }
}
const Hn = /(?:Once|Passive|Capture)$/;
function nd(e) {
  let t;
  if (Hn.test(e)) {
    t = {};
    let o;
    for (; o = e.match(Hn); )
      e = e.slice(0, e.length - o[0].length), t[o[0].toLowerCase()] = !0;
  }
  return [e[2] === ":" ? e.slice(3) : Te(e.slice(2)), t];
}
let po = 0;
const id = /* @__PURE__ */ Promise.resolve(), sd = () => po || (id.then(() => po = 0), po = Date.now());
function ld(e, t) {
  const r = (o) => {
    if (!o._vts)
      o._vts = Date.now();
    else if (o._vts <= r.attached)
      return;
    Je(
      ad(o, r.value),
      t,
      5,
      [o]
    );
  };
  return r.value = e, r.attached = sd(), r;
}
function Ln(e, t) {
  return D(e) || I(e) ? e : (Ae(
    `Wrong type passed as event handler to ${t} - did you forget @ or : in front of your prop?
Expected function or array of functions, received type ${typeof e}.`
  ), he);
}
function ad(e, t) {
  if (I(t)) {
    const r = e.stopImmediatePropagation;
    return e.stopImmediatePropagation = () => {
      r.call(e), e._stopped = !0;
    }, t.map(
      (o) => (n) => !n._stopped && o && o(n)
    );
  } else
    return t;
}
const Un = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, dd = (e, t, r, o, n, i) => {
  const s = n === "svg";
  t === "class" ? Ya(e, o, s) : t === "style" ? Qa(e, r, o) : ar(t) ? Or(t) || od(e, t, r, o, i) : (t[0] === "." ? (t = t.slice(1), !0) : t[0] === "^" ? (t = t.slice(1), !1) : cd(e, t, o, s)) ? (Dn(e, t, o), !e.tagName.includes("-") && (t === "value" || t === "checked" || t === "selected") && zn(e, t, o, s, i, t !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && (/[A-Z]/.test(t) || !ie(o)) ? Dn(e, ue(t), o, i, t) : (t === "true-value" ? e._trueValue = o : t === "false-value" && (e._falseValue = o), zn(e, t, o, s));
};
function cd(e, t, r, o) {
  if (o)
    return !!(t === "innerHTML" || t === "textContent" || t in e && Un(t) && D(r));
  if (t === "spellcheck" || t === "draggable" || t === "translate" || t === "form" || t === "list" && e.tagName === "INPUT" || t === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (t === "width" || t === "height") {
    const n = e.tagName;
    if (n === "IMG" || n === "VIDEO" || n === "CANVAS" || n === "SOURCE")
      return !1;
  }
  return Un(t) && ie(r) ? !1 : t in e;
}
const Bn = {};
/*! #__NO_SIDE_EFFECTS__ */
// @__NO_SIDE_EFFECTS__
function fd(e, t, r) {
  const o = /* @__PURE__ */ _e(e, t);
  Lr(o) && le(o, t);
  class n extends tn {
    constructor(s) {
      super(o, s, r);
    }
  }
  return n.def = o, n;
}
const ud = typeof HTMLElement < "u" ? HTMLElement : class {
};
class tn extends ud {
  constructor(t, r = {}, o = Yn) {
    super(), this._def = t, this._props = r, this._createApp = o, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._ob = null, this.shadowRoot && o !== Yn ? this._root = this.shadowRoot : (this.shadowRoot && Ae(
      "Custom element has pre-rendered declarative shadow root but is not defined as hydratable. Use `defineSSRCustomElement`."
    ), t.shadowRoot !== !1 ? (this.attachShadow({ mode: "open" }), this._root = this.shadowRoot) : this._root = this), this._def.__asyncLoader || this._resolveProps(this._def);
  }
  connectedCallback() {
    if (!this.isConnected) return;
    this.shadowRoot || this._parseSlots(), this._connected = !0;
    let t = this;
    for (; t = t && (t.parentNode || t.host); )
      if (t instanceof tn) {
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
    this._connected = !1, Bo(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null);
    });
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return;
    for (let o = 0; o < this.attributes.length; o++)
      this._setAttr(this.attributes[o].name);
    this._ob = new MutationObserver((o) => {
      for (const n of o)
        this._setAttr(n.attributeName);
    }), this._ob.observe(this, { attributes: !0 });
    const t = (o, n = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: i, styles: s } = o;
      let l;
      if (i && !I(i))
        for (const a in i) {
          const p = i[a];
          (p === Number || p && p.type === Number) && (a in this._props && (this._props[a] = dn(this._props[a])), (l || (l = /* @__PURE__ */ Object.create(null)))[ue(a)] = !0);
        }
      this._numberProps = l, n && this._resolveProps(o), this.shadowRoot ? this._applyStyles(s) : s && Ae(
        "Custom element style injection is not supported when using shadowRoot: false"
      ), this._mount(o);
    }, r = this._def.__asyncLoader;
    r ? this._pendingResolve = r().then(
      (o) => t(this._def = o, !0)
    ) : t(this._def);
  }
  _mount(t) {
    t.name || (t.name = "VueElement"), this._app = this._createApp(t), t.configureApp && t.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const r = this._instance && this._instance.exposed;
    if (r)
      for (const o in r)
        G(this, o) ? Ae(`Exposed property "${o}" already exists on custom element.`) : Object.defineProperty(this, o, {
          // unwrap ref to be consistent with public instance behavior
          get: () => gi(r[o])
        });
  }
  _resolveProps(t) {
    const { props: r } = t, o = I(r) ? r : Object.keys(r || {});
    for (const n of Object.keys(this))
      n[0] !== "_" && o.includes(n) && this._setProp(n, this[n]);
    for (const n of o.map(ue))
      Object.defineProperty(this, n, {
        get() {
          return this._getProp(n);
        },
        set(i) {
          this._setProp(n, i, !0, !0);
        }
      });
  }
  _setAttr(t) {
    if (t.startsWith("data-v-")) return;
    const r = this.hasAttribute(t);
    let o = r ? this.getAttribute(t) : Bn;
    const n = ue(t);
    r && this._numberProps && this._numberProps[n] && (o = dn(o)), this._setProp(n, o, !1, !0);
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
  _setProp(t, r, o = !0, n = !1) {
    if (r !== this._props[t] && (r === Bn ? delete this._props[t] : (this._props[t] = r, t === "key" && this._app && (this._app._ceVNode.key = r)), n && this._instance && this._update(), o)) {
      const i = this._ob;
      i && i.disconnect(), r === !0 ? this.setAttribute(Te(t), "") : typeof r == "string" || typeof r == "number" ? this.setAttribute(Te(t), r + "") : r || this.removeAttribute(Te(t)), i && i.observe(this, { attributes: !0 });
    }
  }
  _update() {
    vd(this._createVNode(), this._root);
  }
  _createVNode() {
    const t = {};
    this.shadowRoot || (t.onVnodeMounted = t.onVnodeUpdated = this._renderSlots.bind(this));
    const r = qe(this._def, le(t, this._props));
    return this._instance || (r.ce = (o) => {
      this._instance = o, o.ce = this, o.isCE = !0, o.ceReload = (i) => {
        this._styles && (this._styles.forEach((s) => this._root.removeChild(s)), this._styles.length = 0), this._applyStyles(i), this._instance = null, this._update();
      };
      const n = (i, s) => {
        this.dispatchEvent(
          new CustomEvent(
            i,
            Lr(s[0]) ? le({ detail: s }, s[0]) : { detail: s }
          )
        );
      };
      o.emit = (i, ...s) => {
        n(i, s), Te(i) !== i && n(Te(i), s);
      }, this._setParent();
    }), r;
  }
  _applyStyles(t, r) {
    if (!t) return;
    if (r) {
      if (r === this._def || this._styleChildren.has(r))
        return;
      this._styleChildren.add(r);
    }
    const o = this._nonce;
    for (let n = t.length - 1; n >= 0; n--) {
      const i = document.createElement("style");
      if (o && i.setAttribute("nonce", o), i.textContent = t[n], this.shadowRoot.prepend(i), r) {
        if (r.__hmrId) {
          this._childStyles || (this._childStyles = /* @__PURE__ */ new Map());
          let s = this._childStyles.get(r.__hmrId);
          s || this._childStyles.set(r.__hmrId, s = []), s.push(i);
        }
      } else
        (this._styles || (this._styles = [])).push(i);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const t = this._slots = {};
    let r;
    for (; r = this.firstChild; ) {
      const o = r.nodeType === 1 && r.getAttribute("slot") || "default";
      (t[o] || (t[o] = [])).push(r), this.removeChild(r);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const t = (this._teleportTarget || this).querySelectorAll("slot"), r = this._instance.type.__scopeId;
    for (let o = 0; o < t.length; o++) {
      const n = t[o], i = n.getAttribute("name") || "default", s = this._slots[i], l = n.parentNode;
      if (s)
        for (const a of s) {
          if (r && a.nodeType === 1) {
            const p = r + "-s", d = document.createTreeWalker(a, 1);
            a.setAttribute(p, "");
            let f;
            for (; f = d.nextNode(); )
              f.setAttribute(p, "");
          }
          l.insertBefore(a, n);
        }
      else
        for (; n.firstChild; ) l.insertBefore(n.firstChild, n);
      l.removeChild(n);
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
      const r = this._childStyles.get(t.__hmrId);
      r && (r.forEach((o) => this._root.removeChild(o)), r.length = 0);
    }
  }
}
const bt = (e) => {
  const t = e.props["onUpdate:modelValue"] || !1;
  return I(t) ? (r) => Pt(t, r) : t;
};
function pd(e) {
  e.target.composing = !0;
}
function Kn(e) {
  const t = e.target;
  t.composing && (t.composing = !1, t.dispatchEvent(new Event("input")));
}
const Ve = Symbol("_assign"), Mo = {
  created(e, { modifiers: { lazy: t, trim: r, number: o } }, n) {
    e[Ve] = bt(n);
    const i = o || n.props && n.props.type === "number";
    et(e, t ? "change" : "input", (s) => {
      if (s.target.composing) return;
      let l = e.value;
      r && (l = l.trim()), i && (l = Ar(l)), e[Ve](l);
    }), r && et(e, "change", () => {
      e.value = e.value.trim();
    }), t || (et(e, "compositionstart", pd), et(e, "compositionend", Kn), et(e, "change", Kn));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: t }) {
    e.value = t ?? "";
  },
  beforeUpdate(e, { value: t, oldValue: r, modifiers: { lazy: o, trim: n, number: i } }, s) {
    if (e[Ve] = bt(s), e.composing) return;
    const l = (i || e.type === "number") && !/^0\d/.test(e.value) ? Ar(e.value) : e.value, a = t ?? "";
    l !== a && (document.activeElement === e && e.type !== "range" && (o && t === r || n && e.value.trim() === a) || (e.value = a));
  }
}, as = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, t, r) {
    e[Ve] = bt(r), et(e, "change", () => {
      const o = e._modelValue, n = Dt(e), i = e.checked, s = e[Ve];
      if (I(o)) {
        const l = zo(o, n), a = l !== -1;
        if (i && !a)
          s(o.concat(n));
        else if (!i && a) {
          const p = [...o];
          p.splice(l, 1), s(p);
        }
      } else if (Nt(o)) {
        const l = new Set(o);
        i ? l.add(n) : l.delete(n), s(l);
      } else
        s(ds(e, i));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Wn,
  beforeUpdate(e, t, r) {
    e[Ve] = bt(r), Wn(e, t, r);
  }
};
function Wn(e, { value: t, oldValue: r }, o) {
  e._modelValue = t;
  let n;
  if (I(t))
    n = zo(t, o.props.value) > -1;
  else if (Nt(t))
    n = t.has(o.props.value);
  else {
    if (t === r) return;
    n = Ot(t, ds(e, !0));
  }
  e.checked !== n && (e.checked = n);
}
const hd = {
  created(e, { value: t }, r) {
    e.checked = Ot(t, r.props.value), e[Ve] = bt(r), et(e, "change", () => {
      e[Ve](Dt(e));
    });
  },
  beforeUpdate(e, { value: t, oldValue: r }, o) {
    e[Ve] = bt(o), t !== r && (e.checked = Ot(t, o.props.value));
  }
}, rn = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: t, modifiers: { number: r } }, o) {
    const n = Nt(t);
    et(e, "change", () => {
      const i = Array.prototype.filter.call(e.options, (s) => s.selected).map(
        (s) => r ? Ar(Dt(s)) : Dt(s)
      );
      e[Ve](
        e.multiple ? n ? new Set(i) : i : i[0]
      ), e._assigning = !0, Bo(() => {
        e._assigning = !1;
      });
    }), e[Ve] = bt(o);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: t }) {
    qn(e, t);
  },
  beforeUpdate(e, t, r) {
    e[Ve] = bt(r);
  },
  updated(e, { value: t }) {
    e._assigning || qn(e, t);
  }
};
function qn(e, t) {
  const r = e.multiple, o = I(t);
  if (r && !o && !Nt(t)) {
    Ae(
      `<select multiple v-model> expects an Array or Set value for its binding, but got ${Object.prototype.toString.call(t).slice(8, -1)}.`
    );
    return;
  }
  for (let n = 0, i = e.options.length; n < i; n++) {
    const s = e.options[n], l = Dt(s);
    if (r)
      if (o) {
        const a = typeof l;
        a === "string" || a === "number" ? s.selected = t.some((p) => String(p) === String(l)) : s.selected = zo(t, l) > -1;
      } else
        s.selected = t.has(l);
    else if (Ot(Dt(s), t)) {
      e.selectedIndex !== n && (e.selectedIndex = n);
      return;
    }
  }
  !r && e.selectedIndex !== -1 && (e.selectedIndex = -1);
}
function Dt(e) {
  return "_value" in e ? e._value : e.value;
}
function ds(e, t) {
  const r = t ? "_trueValue" : "_falseValue";
  return r in e ? e[r] : t;
}
const md = ["ctrl", "shift", "alt", "meta"], bd = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, t) => md.some((r) => e[`${r}Key`] && !t.includes(r))
}, ho = (e, t) => {
  const r = e._withMods || (e._withMods = {}), o = t.join(".");
  return r[o] || (r[o] = (n, ...i) => {
    for (let s = 0; s < t.length; s++) {
      const l = bd[t[s]];
      if (l && l(n, t)) return;
    }
    return e(n, ...i);
  });
}, gd = /* @__PURE__ */ le({ patchProp: dd }, qa);
let Gn;
function cs() {
  return Gn || (Gn = pa(gd));
}
const vd = (...e) => {
  cs().render(...e);
}, Yn = (...e) => {
  const t = cs().createApp(...e);
  _d(t), wd(t);
  const { mount: r } = t;
  return t.mount = (o) => {
    const n = xd(o);
    if (!n) return;
    const i = t._component;
    !D(i) && !i.render && !i.template && (i.template = n.innerHTML), n.nodeType === 1 && (n.textContent = "");
    const s = r(n, !1, yd(n));
    return n instanceof Element && (n.removeAttribute("v-cloak"), n.setAttribute("data-v-app", "")), s;
  }, t;
};
function yd(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function _d(e) {
  Object.defineProperty(e.config, "isNativeTag", {
    value: (t) => $s(t) || Cs(t) || Ts(t),
    writable: !1
  });
}
function wd(e) {
  {
    const t = e.config.isCustomElement;
    Object.defineProperty(e.config, "isCustomElement", {
      get() {
        return t;
      },
      set() {
        Ae(
          "The `isCustomElement` config option is deprecated. Use `compilerOptions.isCustomElement` instead."
        );
      }
    });
    const r = e.config.compilerOptions, o = 'The `compilerOptions` config option is only respected when using a build of Vue.js that includes the runtime compiler (aka "full build"). Since you are using the runtime-only build, `compilerOptions` must be passed to `@vue/compiler-dom` in the build setup instead.\n- For vue-loader: pass it via vue-loader\'s `compilerOptions` loader option.\n- For vue-cli: see https://cli.vuejs.org/guide/webpack.html#modifying-options-of-a-loader\n- For vite: pass it via @vitejs/plugin-vue options. See https://github.com/vitejs/vite-plugin-vue/tree/main/packages/plugin-vue#example-for-passing-options-to-vuecompiler-sfc';
    Object.defineProperty(e.config, "compilerOptions", {
      get() {
        return Ae(o), r;
      },
      set() {
        Ae(o);
      }
    });
  }
}
function xd(e) {
  if (ie(e)) {
    const t = document.querySelector(e);
    return t || Ae(
      `Failed to mount app: mount target selector "${e}" returned null.`
    ), t;
  }
  return window.ShadowRoot && e instanceof window.ShadowRoot && e.mode === "closed" && Ae(
    'mounting on a ShadowRoot with `{mode: "closed"}` may lead to unpredictable bugs'
  ), e;
}
/**
* vue v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function kd() {
  Ba();
}
kd();
const Sd = { class: "field-input" }, $d = ["for"], Cd = ["id", "value"], Td = ["id", "value"], Od = {
  key: 3,
  class: "input-error-message"
}, Ed = {
  key: 4,
  class: "input-help"
}, Ad = /* @__PURE__ */ _e({
  shadow: !0,
  __name: "FieldInput.ce",
  props: {
    modelValue: { type: [String, Number, Boolean] },
    field: { type: Object },
    error: { type: [String, null] }
  },
  emits: ["update:modelValue"],
  setup(e) {
    const t = e, r = Q(() => {
      var n, i;
      return ((n = t.field.props) == null ? void 0 : n.id) || ((i = t.field.props) == null ? void 0 : i.name) || `input-field-${Math.random().toString(36).substring(2, 15)}`;
    }), o = Q(() => !!t.error);
    return (n, i) => {
      var s;
      return g(), _("div", Sd, [
        n.field.label ? (g(), _("label", {
          key: 0,
          for: r.value,
          class: "input-label"
        }, R(n.field.label), 9, $d)) : F("", !0),
        ((s = n.field.props) == null ? void 0 : s.type) === "color" ? (g(), _("input", Oo({
          key: 1,
          id: r.value
        }, n.field.props, {
          value: n.modelValue,
          onInput: i[0] || (i[0] = (l) => n.$emit("update:modelValue", l.target.value)),
          class: ["input-base input-color", { "input-error": o.value }]
        }), null, 16, Cd)) : (g(), _("input", Oo({
          key: 2,
          id: r.value
        }, n.field.props, {
          value: n.modelValue,
          onInput: i[1] || (i[1] = (l) => n.$emit("update:modelValue", l.target.value)),
          class: ["input-base", { "input-error": o.value }]
        }), null, 16, Td)),
        n.error ? (g(), _("p", Od, R(n.error), 1)) : n.field.helpText ? (g(), _("p", Ed, R(n.field.helpText), 1)) : F("", !0)
      ]);
    };
  }
}), Id = ".input-base[data-v-d912895a]{font-size:.875rem;padding:.75rem 1rem;border:1px solid #ccc;border-radius:.375rem;width:-webkit-fill-available;background-color:#fff;color:inherit;transition:all .3s ease;display:block;margin-bottom:1rem}.input-color[data-v-d912895a]{-webkit-appearance:none;-moz-appearance:none;appearance:none;width:3rem;height:3rem;padding:0;border:none;background:none;cursor:pointer;border-radius:.375rem;display:block;margin-bottom:1rem}.input-error[data-v-d912895a]{border-color:#f44336}.input-error-message[data-v-d912895a]{color:#f44336}.input-help[data-v-d912895a]{color:#888}.input-label[data-v-d912895a]{font-weight:700;margin-bottom:.5rem;display:block}@media (prefers-color-scheme: dark){.input-base[data-v-d912895a]{background-color:#333;color:#fff;border-color:#555}.input-color[data-v-d912895a]{background-color:#333;color:#fff}.input-error[data-v-d912895a]{border-color:#9d190f}.input-error-message[data-v-d912895a]{color:#9d190f}.input-help[data-v-d912895a]{color:#bbb}}@media (max-width: 320px){.input-base[data-v-d912895a]{font-size:.75rem;padding:.625rem .75rem}.input-color[data-v-d912895a]{width:2.5rem;height:2.5rem}.input-label[data-v-d912895a]{font-size:.75rem}}@media (min-width: 321px) and (max-width: 768px){.input-base[data-v-d912895a]{font-size:.875rem}.input-color[data-v-d912895a]{width:2.75rem;height:2.75rem}}@media (min-width: 769px){.input-base[data-v-d912895a]{font-size:1rem}.input-color[data-v-d912895a]{width:3rem;height:3rem}}", ke = (e, t) => {
  const r = e.__vccOpts || e;
  for (const [o, n] of t)
    r[o] = n;
  return r;
}, Md = /* @__PURE__ */ ke(Ad, [["styles", [Id]], ["__scopeId", "data-v-d912895a"]]), Vd = { class: "field-wrapper" }, Pd = ["for"], Fd = ["id", "name", "placeholder", "rows", "disabled", "readonly", "maxlength", "minlength", "aria-label", "aria-describedby"], Rd = {
  key: 1,
  class: "field-error"
}, jd = {
  key: 2,
  class: "field-help"
}, zd = /* @__PURE__ */ _e({
  shadow: !0,
  __name: "FieldTextarea.ce",
  props: {
    modelValue: { type: [String, Number, Boolean] },
    field: { type: Object },
    error: { type: [String, null] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, o = t, n = Q(() => {
      var a, p;
      return ((a = r.field.props) == null ? void 0 : a.id) || ((p = r.field.props) == null ? void 0 : p.name) || "textarea-field";
    }), i = Q(() => !!r.error), s = Q(() => {
      var a;
      return ((a = r.field.props) == null ? void 0 : a.rows) || 3;
    }), l = Q({
      get: () => {
        const a = r.modelValue;
        return typeof a == "string" || typeof a == "number" ? a : "";
      },
      set: (a) => {
        o("update:modelValue", a);
      }
    });
    return (a, p) => {
      var d, f, b, h, $, M, X, N;
      return g(), _("div", Vd, [
        a.field.label ? (g(), _("label", {
          key: 0,
          for: n.value,
          class: "field-label"
        }, R(a.field.label), 9, Pd)) : F("", !0),
        tt(U("textarea", {
          id: n.value,
          name: (d = a.field.props) == null ? void 0 : d.name,
          placeholder: (f = a.field.props) == null ? void 0 : f.placeholder,
          rows: s.value,
          disabled: (b = a.field.props) == null ? void 0 : b.disabled,
          readonly: (h = a.field.props) == null ? void 0 : h.readonly,
          maxlength: ($ = a.field.props) == null ? void 0 : $.maxlength,
          minlength: (M = a.field.props) == null ? void 0 : M.minlength,
          class: se(["field-textarea", { error: i.value }]),
          "aria-label": (X = a.field.props) == null ? void 0 : X.ariaLabel,
          "aria-describedby": (N = a.field.props) == null ? void 0 : N.ariaDescribedBy,
          "onUpdate:modelValue": p[0] || (p[0] = (Y) => l.value = Y)
        }, null, 10, Fd), [
          [Mo, l.value]
        ]),
        a.error ? (g(), _("p", Rd, R(a.error), 1)) : a.field.helpText ? (g(), _("p", jd, R(a.field.helpText), 1)) : F("", !0)
      ]);
    };
  }
}), Dd = ".field-wrapper[data-v-78888751]{display:flex;flex-direction:column;margin-bottom:1rem;width:-webkit-fill-available}.field-label[data-v-78888751]{font-weight:700;margin-bottom:.5rem;display:block;font-size:1rem}.field-textarea[data-v-78888751]{font-size:1rem;padding:.75rem 1rem;border:1px solid #ccc;border-radius:.375rem;width:100%;background-color:#fff;color:#111;resize:vertical;transition:all .3s ease;width:-webkit-fill-available}.field-error[data-v-78888751]{color:#f44336;font-size:.875rem;margin-top:.5rem}.field-help[data-v-78888751]{color:#888;font-size:.875rem;margin-top:.5rem}@media (prefers-color-scheme: dark){.field-textarea[data-v-78888751]{background-color:#333;color:#fff;border-color:#555}.field-error[data-v-78888751]{color:#f44336}.field-help[data-v-78888751]{color:#bbb}.field-label[data-v-78888751]{color:#fff}}@media (max-width: 320px){.field-label[data-v-78888751]{font-size:.875rem}.field-textarea[data-v-78888751]{font-size:.875rem;padding:.5rem .75rem}}@media (min-width: 321px) and (max-width: 768px){.field-label[data-v-78888751]{font-size:.9375rem}.field-textarea[data-v-78888751]{font-size:.9375rem;padding:.625rem .875rem}}@media (min-width: 769px){.field-label[data-v-78888751]{font-size:1rem}.field-textarea[data-v-78888751]{font-size:1rem;padding:.75rem 1rem}}", Nd = /* @__PURE__ */ ke(zd, [["styles", [Dd]], ["__scopeId", "data-v-78888751"]]), Hd = { class: "field-wrapper" }, Ld = ["for"], Ud = { class: "select-wrapper" }, Bd = ["id", "name", "disabled", "readonly", "multiple"], Kd = {
  value: "",
  disabled: "",
  selected: ""
}, Wd = ["value"], qd = {
  key: 1,
  class: "field-error"
}, Gd = {
  key: 2,
  class: "field-help"
}, Yd = /* @__PURE__ */ _e({
  shadow: !0,
  __name: "FieldSelect.ce",
  props: {
    modelValue: { type: [String, Number, Boolean, Array] },
    error: { type: [String, null] },
    field: { type: Object }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, o = t, n = Q(() => {
      var a, p;
      return ((a = r.field.props) == null ? void 0 : a.id) || ((p = r.field.props) == null ? void 0 : p.name) || `select-field-${Math.random().toString(36).substring(2, 15)}`;
    }), i = Q(() => !!r.error), s = Q({
      get: () => {
        var a;
        return r.modelValue ?? ((a = r.field.props) != null && a.multiple ? [] : "");
      },
      // Defaulting to empty array for multiple selections
      set: (a) => {
        o("update:modelValue", a);
      }
    }), l = (a) => typeof a == "object" && a !== null && "label" in a && "value" in a;
    return (a, p) => {
      var d, f, b;
      return g(), _("div", Hd, [
        a.field.label ? (g(), _("label", {
          key: 0,
          for: n.value,
          class: "field-label"
        }, R(a.field.label), 9, Ld)) : F("", !0),
        U("div", Ud, [
          tt(U("select", {
            id: n.value,
            name: n.value,
            "onUpdate:modelValue": p[0] || (p[0] = (h) => s.value = h),
            disabled: (d = a.field.props) == null ? void 0 : d.disabled,
            readonly: (f = a.field.props) == null ? void 0 : f.readonly,
            class: se(["field-select", { error: i.value }]),
            multiple: (b = a.field.props) == null ? void 0 : b.multiple
          }, [
            U("option", Kd, " Select " + R(a.field.label), 1),
            (g(!0), _(Z, null, Ie(a.field.options, (h, $) => (g(), _("option", {
              key: $,
              value: l(h) ? h.value : h
            }, R(l(h) ? h.label : h), 9, Wd))), 128))
          ], 10, Bd), [
            [rn, s.value]
          ]),
          p[1] || (p[1] = U("span", { class: "custom-arrow" }, "▼", -1))
        ]),
        i.value && a.error ? (g(), _("p", qd, R(a.error), 1)) : F("", !0),
        a.field.helpText && !i.value ? (g(), _("p", Gd, R(a.field.helpText), 1)) : F("", !0)
      ]);
    };
  }
}), Jd = ".field-wrapper[data-v-d3b58449]{display:flex;flex-direction:column;margin-bottom:1rem}.field-label[data-v-d3b58449]{font-weight:700;margin-bottom:.5rem;display:block;font-size:1rem}.select-wrapper[data-v-d3b58449]{position:relative;width:100%}.field-select[data-v-d3b58449]{font-size:1rem;padding:.75rem 1rem;border:1px solid #ccc;border-radius:.375rem;width:100%;background-color:#fff;color:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none;transition:all .3s ease}.field-select[data-v-d3b58449]::-ms-expand{display:none}.field-select.error[data-v-d3b58449]{border-color:#f44336}.field-error[data-v-d3b58449]{color:#f44336;font-size:.875rem;margin-top:.5rem}.field-help[data-v-d3b58449]{color:#888;font-size:.875rem;margin-top:.5rem}.custom-arrow[data-v-d3b58449]{position:absolute;right:1rem;top:50%;transform:translateY(-50%);font-size:1.25rem;color:#888;pointer-events:none;z-index:1;transition:transform .2s ease-in-out}.field-select:focus+.custom-arrow[data-v-d3b58449],.field-select:active+.custom-arrow[data-v-d3b58449]{transform:translateY(-50%) rotate(180deg)}@media (prefers-color-scheme: dark){.field-select[data-v-d3b58449]{background-color:#333!important;color:#fff!important;border-color:#555!important;-webkit-appearance:none;-moz-appearance:none;appearance:none}.field-select[data-v-d3b58449]:focus{outline-color:#2196f3}.field-error[data-v-d3b58449]{color:#f44336}.field-help[data-v-d3b58449]{color:#bbb}.field-label[data-v-d3b58449],.custom-arrow[data-v-d3b58449]{color:#fff}}@media (max-width: 320px){.field-label[data-v-d3b58449]{font-size:.875rem}.field-select[data-v-d3b58449]{font-size:.875rem;padding:.5rem .75rem}.custom-arrow[data-v-d3b58449]{font-size:1.125rem}}@media (min-width: 321px) and (max-width: 768px){.field-label[data-v-d3b58449]{font-size:.9375rem}.field-select[data-v-d3b58449]{font-size:.9375rem;padding:.625rem .875rem}.custom-arrow[data-v-d3b58449]{font-size:1.25rem}}@media (min-width: 769px){.field-label[data-v-d3b58449]{font-size:1rem}.field-select[data-v-d3b58449]{font-size:1rem;padding:.75rem 1rem}.custom-arrow[data-v-d3b58449]{font-size:1.25rem}}", Xd = /* @__PURE__ */ ke(Yd, [["styles", [Jd]], ["__scopeId", "data-v-d3b58449"]]), Zd = ["for"], Qd = { key: 1 }, ec = ["id", "name", "disabled", "readonly", "aria-label", "aria-describedby"], tc = {
  key: 2,
  class: "field-checkbox-wrapper"
}, rc = { class: "checkbox-container" }, oc = ["id", "name", "value", "checked", "disabled", "readonly", "aria-label", "aria-describedby", "onChange"], nc = ["for"], ic = {
  key: 3,
  class: "field-error"
}, sc = {
  key: 4,
  class: "field-help"
}, lc = /* @__PURE__ */ _e({
  shadow: !0,
  __name: "FieldCheckbox.ce",
  props: {
    modelValue: { type: [Array, Boolean] },
    field: { type: Object },
    error: { type: [String, null] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, o = t, n = Q(() => {
      var d, f;
      return ((d = r.field.props) == null ? void 0 : d.id) || ((f = r.field.props) == null ? void 0 : f.name) || "checkbox-field";
    }), i = Q(() => !!r.error), s = Q(() => Array.isArray(r.modelValue) ? r.modelValue : []), l = (d) => s.value.includes(d), a = (d) => {
      const f = l(d) ? s.value.filter((b) => b !== d) : [...s.value, d];
      o("update:modelValue", f);
    }, p = Q({
      get: () => !!r.modelValue,
      set: (d) => o("update:modelValue", d)
    });
    return (d, f) => {
      var b, h, $, M, X;
      return g(), _("div", {
        class: se({ "field-wrapper-inline": !d.field.options, "field-wrapper": d.field.options })
      }, [
        d.field.label ? (g(), _("label", {
          key: 0,
          for: n.value,
          class: "field-label"
        }, R(d.field.label), 9, Zd)) : F("", !0),
        d.field.options ? (g(), _("div", tc, [
          U("div", rc, [
            (g(!0), _(Z, null, Ie(d.field.options, (N, Y) => {
              var j, V, w, O;
              return g(), _("div", {
                key: Y,
                class: "checkbox-option"
              }, [
                U("input", {
                  type: "checkbox",
                  id: `${n.value}-${N}`,
                  name: n.value,
                  value: N,
                  checked: l(N),
                  disabled: (j = d.field.props) == null ? void 0 : j.disabled,
                  readonly: (V = d.field.props) == null ? void 0 : V.readonly,
                  "aria-label": (w = d.field.props) == null ? void 0 : w.ariaLabel,
                  "aria-describedby": (O = d.field.props) == null ? void 0 : O.ariaDescribedBy,
                  onChange: (B) => a(N),
                  class: "checkbox-input"
                }, null, 40, oc),
                U("label", {
                  for: `${n.value}-${N}`,
                  class: "checkbox-label"
                }, R(N), 9, nc)
              ]);
            }), 128))
          ])
        ])) : (g(), _("div", Qd, [
          tt(U("input", {
            type: "checkbox",
            id: n.value,
            name: (b = d.field.props) == null ? void 0 : b.name,
            disabled: (h = d.field.props) == null ? void 0 : h.disabled,
            readonly: ($ = d.field.props) == null ? void 0 : $.readonly,
            "aria-label": (M = d.field.props) == null ? void 0 : M.ariaLabel,
            "aria-describedby": (X = d.field.props) == null ? void 0 : X.ariaDescribedBy,
            "onUpdate:modelValue": f[0] || (f[0] = (N) => p.value = N),
            class: "checkbox-input"
          }, null, 8, ec), [
            [as, p.value]
          ])
        ])),
        i.value && d.error ? (g(), _("p", ic, R(d.error), 1)) : F("", !0),
        d.field.helpText && !i.value ? (g(), _("p", sc, R(d.field.helpText), 1)) : F("", !0)
      ], 2);
    };
  }
}), ac = ".field-wrapper[data-v-e735e9bd]{display:flex;flex-direction:column;margin-bottom:1rem}.field-label[data-v-e735e9bd]{font-weight:700;margin-bottom:.5rem;display:block}.field-wrapper-inline[data-v-e735e9bd]{display:flex;align-items:start;gap:.5rem}.field-checkbox-wrapper[data-v-e735e9bd]{display:flex;flex-direction:column;gap:1rem}.checkbox-container[data-v-e735e9bd]{display:flex;flex-wrap:wrap;gap:1rem}.checkbox-option[data-v-e735e9bd]{display:flex;align-items:center;margin-bottom:.5rem}.checkbox-label[data-v-e735e9bd]{font-size:1rem;cursor:pointer;margin-left:.5rem}.checkbox-input[data-v-e735e9bd]{width:20px;height:20px;cursor:pointer;accent-color:#2563eb;background-color:transparent;border:2px solid #999}.field-error[data-v-e735e9bd]{color:#f44336;font-size:.875rem;margin-top:.5rem}.field-help[data-v-e735e9bd]{color:#888;font-size:.875rem;margin-top:.5rem}@media (prefers-color-scheme: dark){.field-label[data-v-e735e9bd],.checkbox-label[data-v-e735e9bd]{color:#fff}.field-error[data-v-e735e9bd]{color:#f44336}.field-help[data-v-e735e9bd]{color:#bbb}.checkbox-input[data-v-e735e9bd]{background-color:#444;box-shadow:inset 0 0 0 20px #444;border-color:#999595}.checkbox-input[data-v-e735e9bd]:checked{box-shadow:none}}@media (max-width: 320px){.field-label[data-v-e735e9bd],.checkbox-label[data-v-e735e9bd]{font-size:.875rem}}@media (min-width: 321px) and (max-width: 768px){.field-label[data-v-e735e9bd]{font-size:.9375rem}.checkbox-label[data-v-e735e9bd]{font-size:1rem}}@media (min-width: 769px){.field-label[data-v-e735e9bd],.checkbox-label[data-v-e735e9bd]{font-size:1rem}}", dc = /* @__PURE__ */ ke(lc, [["styles", [ac]], ["__scopeId", "data-v-e735e9bd"]]), cc = { class: "field-wrapper" }, fc = { class: "field-inline" }, uc = ["for"], pc = { class: "toggle-wrapper" }, hc = ["id", "name"], mc = {
  key: 0,
  class: "field-error"
}, bc = {
  key: 1,
  class: "field-help"
}, gc = /* @__PURE__ */ _e({
  shadow: !0,
  __name: "FieldToggle.ce",
  props: {
    modelValue: { type: Boolean },
    error: { type: [String, null] },
    field: { type: Object }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, o = t, n = Q(
      () => {
        var l, a;
        return ((l = r.field.props) == null ? void 0 : l.id) || ((a = r.field.props) == null ? void 0 : a.name) || `toggle-field-${Math.random().toString(36).slice(2)}`;
      }
    ), i = Q(() => !!r.error), s = Q({
      get: () => r.modelValue ?? !1,
      set: (l) => o("update:modelValue", l)
    });
    return (l, a) => (g(), _("div", cc, [
      U("div", fc, [
        l.field.label ? (g(), _("label", {
          key: 0,
          for: n.value,
          class: "field-label"
        }, R(l.field.label), 9, uc)) : F("", !0),
        U("div", pc, [
          tt(U("input", {
            type: "checkbox",
            id: n.value,
            name: n.value,
            "onUpdate:modelValue": a[0] || (a[0] = (p) => s.value = p),
            class: "toggle-input"
          }, null, 8, hc), [
            [as, s.value]
          ]),
          a[1] || (a[1] = U("span", { class: "toggle-slider" }, null, -1))
        ])
      ]),
      i.value && l.error ? (g(), _("p", mc, R(l.error), 1)) : F("", !0),
      l.field.helpText && !i.value ? (g(), _("p", bc, R(l.field.helpText), 1)) : F("", !0)
    ]));
  }
}), vc = '.field-wrapper[data-v-76e195fe]{display:flex;flex-direction:column;gap:.25rem}.field-inline[data-v-76e195fe]{display:flex;align-items:center;gap:.75rem}.toggle-wrapper[data-v-76e195fe]{position:relative;width:50px;height:25px}.toggle-input[data-v-76e195fe]{opacity:0;width:100%;height:100%;position:absolute;z-index:2;cursor:pointer}.toggle-slider[data-v-76e195fe]{position:absolute;top:0;left:0;right:0;bottom:0;background-color:#ccc;border-radius:25px;transition:background-color .3s ease;pointer-events:none}.toggle-slider[data-v-76e195fe]:before{content:"";position:absolute;width:15px;height:15px;left:5px;bottom:5px;background-color:#fff;border-radius:50%;transition:transform .3s ease}.toggle-input:checked+.toggle-slider[data-v-76e195fe]{background-color:#4caf50}.toggle-input:checked+.toggle-slider[data-v-76e195fe]:before{transform:translate(25px)}.field-error[data-v-76e195fe]{color:#f44336;font-size:.875rem}.field-help[data-v-76e195fe]{color:#888;font-size:.875rem}@media (prefers-color-scheme: dark){.toggle-slider[data-v-76e195fe]{background-color:#444}.toggle-input:checked+.toggle-slider[data-v-76e195fe]{background-color:#2196f3}.toggle-slider[data-v-76e195fe]:before{background-color:#fff}.field-error[data-v-76e195fe]{color:#f44336}.field-help[data-v-76e195fe]{color:#bbb}}', yc = /* @__PURE__ */ ke(gc, [["styles", [vc]], ["__scopeId", "data-v-76e195fe"]]), _c = { class: "field-wrapper" }, wc = ["for"], xc = { class: "field-file-wrapper" }, kc = ["id", "name", "accept", "multiple", "disabled", "readonly", "aria-label", "aria-describedby", "aria-invalid"], Sc = {
  key: 0,
  class: "file-info"
}, $c = { class: "field-file-text" }, Cc = { class: "file-preview-list" }, Tc = {
  key: 1,
  class: "field-error"
}, Oc = {
  key: 2,
  class: "field-help"
}, Ec = /* @__PURE__ */ _e({
  shadow: !0,
  __name: "FieldFile.ce",
  props: {
    modelValue: { type: null },
    error: { type: [String, null] },
    field: { type: Object }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, o = t, n = Q(() => {
      var d, f;
      return ((d = r.field.props) == null ? void 0 : d.id) || ((f = r.field.props) == null ? void 0 : f.name) || "file-field";
    }), i = Q(() => {
      var d;
      return !!r.error || ((d = r.field.props) == null ? void 0 : d.error);
    }), s = Q(() => {
      var d;
      return r.error || ((d = r.field.props) == null ? void 0 : d.errorMessage);
    }), l = Q({
      get: () => r.modelValue ?? null,
      set: (d) => o("update:modelValue", d)
    }), a = (d) => {
      const f = d.target;
      f != null && f.files && (l.value = f.files);
    }, p = () => {
      l.value = null;
    };
    return (d, f) => {
      var b, h, $, M, X, N, Y;
      return g(), _("div", _c, [
        d.field.label ? (g(), _("label", {
          key: 0,
          for: n.value,
          class: "field-label"
        }, R(d.field.label), 9, wc)) : F("", !0),
        U("div", xc, [
          U("input", {
            type: "file",
            id: n.value,
            name: (b = d.field.props) == null ? void 0 : b.name,
            accept: (h = d.field.props) == null ? void 0 : h.accept,
            multiple: ($ = d.field.props) == null ? void 0 : $.multiple,
            disabled: (M = d.field.props) == null ? void 0 : M.disabled,
            readonly: (X = d.field.props) == null ? void 0 : X.readonly,
            onChange: a,
            "aria-label": (N = d.field.props) == null ? void 0 : N.ariaLabel,
            "aria-describedby": (Y = d.field.props) == null ? void 0 : Y.ariaDescribedBy,
            "aria-invalid": i.value ? "true" : void 0,
            class: "field-file-input"
          }, null, 40, kc),
          l.value && l.value.length ? (g(), _("div", Sc, [
            U("p", $c, R(l.value.length) + " file(s) selected", 1),
            U("ul", Cc, [
              (g(!0), _(Z, null, Ie(Array.from(l.value), (j, V) => (g(), _("li", {
                key: V,
                class: "file-preview-item"
              }, R(j.name), 1))), 128))
            ]),
            U("button", {
              type: "button",
              class: "clear-files",
              onClick: p
            }, "Clear files")
          ])) : F("", !0)
        ]),
        i.value && s.value ? (g(), _("p", Tc, R(s.value), 1)) : F("", !0),
        d.field.helpText && !i.value ? (g(), _("p", Oc, R(d.field.helpText), 1)) : F("", !0)
      ]);
    };
  }
}), Ac = ".field-wrapper[data-v-fb93d855]{display:flex;flex-direction:column;gap:.25rem}.field-label[data-v-fb93d855]{font-weight:600;font-size:1rem;color:#222}.field-file-wrapper[data-v-fb93d855]{display:flex;flex-direction:column;gap:.5rem}.field-file-input[data-v-fb93d855]{font-size:.9375rem;padding:.5rem;border:1px solid #ccc;border-radius:6px;background-color:#fff;color:#333;cursor:pointer;transition:border-color .3s ease,background-color .3s ease}.field-file-input[data-v-fb93d855]:hover{border-color:#888}.field-file-text[data-v-fb93d855]{font-size:.875rem;color:#444}.file-preview-list[data-v-fb93d855]{padding-left:1rem;list-style-type:disc;color:#555;font-size:.875rem}.file-preview-item[data-v-fb93d855]{line-height:1.4}.clear-files[data-v-fb93d855]{background:none;color:#f44336;font-size:.8125rem;cursor:pointer;padding:0;border:none;align-self:flex-start}.clear-files[data-v-fb93d855]:hover{text-decoration:underline}.field-error[data-v-fb93d855]{font-size:.875rem;color:#f44336}.field-help[data-v-fb93d855]{font-size:.875rem;color:#666}@media (max-width: 320px){.field-label[data-v-fb93d855]{font-size:.875rem}.field-file-input[data-v-fb93d855]{font-size:.8125rem;padding:.375rem}.field-file-text[data-v-fb93d855],.file-preview-list[data-v-fb93d855],.field-error[data-v-fb93d855],.field-help[data-v-fb93d855]{font-size:.75rem}}@media (min-width: 321px) and (max-width: 768px){.field-label[data-v-fb93d855]{font-size:.9375rem}.field-file-input[data-v-fb93d855]{font-size:.875rem;padding:.5rem}.field-file-text[data-v-fb93d855],.file-preview-list[data-v-fb93d855],.field-error[data-v-fb93d855],.field-help[data-v-fb93d855]{font-size:.8125rem}}@media (min-width: 769px){.field-label[data-v-fb93d855]{font-size:1rem}.field-file-input[data-v-fb93d855]{font-size:.9375rem;padding:.5rem .75rem}.field-file-text[data-v-fb93d855],.file-preview-list[data-v-fb93d855],.field-error[data-v-fb93d855],.field-help[data-v-fb93d855]{font-size:.875rem}}@media (prefers-color-scheme: dark){.field-label[data-v-fb93d855]{color:#eee}.field-file-input[data-v-fb93d855]{background-color:#1f1f1f;border-color:#444;color:#eee}.field-file-input[data-v-fb93d855]:hover{border-color:#888}.field-file-text[data-v-fb93d855],.file-preview-list[data-v-fb93d855]{color:#ccc}.field-help[data-v-fb93d855]{color:#aaa}}", Ic = /* @__PURE__ */ ke(Ec, [["styles", [Ac]], ["__scopeId", "data-v-fb93d855"]]), Mc = { class: "field-wrapper" }, Vc = { class: "field-inline" }, Pc = {
  key: 0,
  class: "field-label"
}, Fc = ["href", "target", "rel"], Rc = {
  key: 0,
  class: "field-help"
}, jc = /* @__PURE__ */ _e({
  shadow: !0,
  __name: "FieldLink.ce",
  props: {
    field: { type: Object }
  },
  setup(e) {
    return (t, r) => {
      var o, n, i, s;
      return g(), _("div", Mc, [
        U("div", Vc, [
          t.field.label ? (g(), _("label", Pc, R(t.field.label), 1)) : F("", !0),
          U("a", {
            href: (o = t.field.props) == null ? void 0 : o.href,
            target: (n = t.field.props) != null && n.external ? "_blank" : "_self",
            rel: (i = t.field.props) != null && i.external ? "noopener noreferrer" : "",
            class: "field-link"
          }, R((s = t.field.props) == null ? void 0 : s.text), 9, Fc)
        ]),
        t.field.helpText ? (g(), _("p", Rc, R(t.field.helpText), 1)) : F("", !0)
      ]);
    };
  }
}), zc = "a[data-v-c04cdc5d]{text-decoration:none;color:inherit;-webkit-tap-highlight-color:transparent}.field-wrapper[data-v-c04cdc5d]{display:flex;flex-direction:column;gap:.25rem}.field-inline[data-v-c04cdc5d]{display:flex;flex-wrap:wrap;align-items:baseline;gap:.5rem}.field-label[data-v-c04cdc5d]{font-weight:600;font-size:1rem;color:#222}.field-link[data-v-c04cdc5d]{font-size:.9375rem;font-style:italic;color:#007bff;text-decoration:none;transition:color .3s ease,text-decoration .3s ease}.field-link[data-v-c04cdc5d]:hover{color:#0056b3;text-decoration:underline}.field-help[data-v-c04cdc5d]{font-size:.875rem;color:#666}@media (max-width: 320px){.field-label[data-v-c04cdc5d]{font-size:.875rem}.field-link[data-v-c04cdc5d]{font-size:.8125rem}.field-help[data-v-c04cdc5d]{font-size:.75rem}}@media (min-width: 321px) and (max-width: 768px){.field-label[data-v-c04cdc5d]{font-size:.9375rem}.field-link[data-v-c04cdc5d]{font-size:.875rem}.field-help[data-v-c04cdc5d]{font-size:.8125rem}}@media (min-width: 769px){.field-label[data-v-c04cdc5d]{font-size:1rem}.field-link[data-v-c04cdc5d]{font-size:.9375rem}.field-help[data-v-c04cdc5d]{font-size:.875rem}}@media (prefers-color-scheme: dark){.field-label[data-v-c04cdc5d]{color:#eee}.field-link[data-v-c04cdc5d]{color:#66b2ff}.field-link[data-v-c04cdc5d]:hover{color:#aad4ff}.field-help[data-v-c04cdc5d]{color:#aaa}}", Dc = /* @__PURE__ */ ke(jc, [["styles", [zc]], ["__scopeId", "data-v-c04cdc5d"]]), Nc = { class: "field-wrapper" }, Hc = ["for"], Lc = { class: "radio-group" }, Uc = ["id", "name", "value", "disabled", "readonly", "aria-label", "aria-describedby"], Bc = ["for"], Kc = {
  key: 1,
  class: "field-error"
}, Wc = {
  key: 2,
  class: "field-help"
}, qc = /* @__PURE__ */ _e({
  shadow: !0,
  __name: "FieldRadio.ce",
  props: {
    modelValue: { type: [String, Number, Boolean] },
    field: { type: Object },
    error: { type: [String, null] }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, o = t, n = Q(() => {
      var l, a, p;
      return ((l = r.field.props) == null ? void 0 : l.id) || ((a = r.field.props) == null ? void 0 : a.name) || ((p = r.field.label) == null ? void 0 : p.toLowerCase().replace(/\s+/g, "-")) || "radio-field";
    }), i = Q(() => !!r.error), s = Q({
      get: () => r.modelValue ?? "",
      set: (l) => {
        o("update:modelValue", l);
      }
    });
    return (l, a) => (g(), _("div", Nc, [
      l.field.label ? (g(), _("label", {
        key: 0,
        for: n.value,
        class: "field-label"
      }, R(l.field.label), 9, Hc)) : F("", !0),
      U("div", Lc, [
        (g(!0), _(Z, null, Ie(l.field.options, (p) => {
          var d, f, b, h, $;
          return g(), _("div", {
            key: String(p.value),
            class: "radio-option"
          }, [
            tt(U("input", {
              type: "radio",
              id: `${n.value}-${p.value}`,
              name: ((d = l.field.props) == null ? void 0 : d.name) || l.field.label || n.value,
              value: p.value,
              "onUpdate:modelValue": a[0] || (a[0] = (M) => s.value = M),
              disabled: (f = l.field.props) == null ? void 0 : f.disabled,
              readonly: (b = l.field.props) == null ? void 0 : b.readonly,
              "aria-label": (h = l.field.props) == null ? void 0 : h.ariaLabel,
              "aria-describedby": ($ = l.field.props) == null ? void 0 : $.ariaDescribedBy,
              class: "radio-input"
            }, null, 8, Uc), [
              [hd, s.value]
            ]),
            U("label", {
              for: `${n.value}-${p.value}`,
              class: "radio-label"
            }, R(p.label), 9, Bc)
          ]);
        }), 128))
      ]),
      i.value && l.error ? (g(), _("p", Kc, R(l.error), 1)) : F("", !0),
      l.field.helpText && !i.value ? (g(), _("p", Wc, R(l.field.helpText), 1)) : F("", !0)
    ]));
  }
}), Gc = '.field-wrapper[data-v-bd4dd48e]{display:flex;flex-direction:column;margin-bottom:1rem}.field-label[data-v-bd4dd48e]{font-weight:700;margin-bottom:.5rem;display:block}.radio-group[data-v-bd4dd48e]{display:flex;flex-wrap:wrap;gap:1rem;justify-content:flex-start}.radio-option[data-v-bd4dd48e]{display:flex;align-items:center}.radio-input[data-v-bd4dd48e]{margin-right:.5rem;cursor:pointer;transition:transform .3s ease,border-color .3s ease,background-color .3s ease;-webkit-appearance:none;-moz-appearance:none;appearance:none;width:20px;height:20px;border-radius:50%;border:2px solid #ccc;background-color:#fff;position:relative}.radio-input[data-v-bd4dd48e]:before{content:"";position:absolute;top:3px;left:3px;width:10px;height:10px;border-radius:50%;background-color:transparent;transition:background-color .3s ease}.radio-input[data-v-bd4dd48e]:checked:before{background-color:#2196f3}.radio-input[data-v-bd4dd48e]:disabled{background-color:#444;border-color:#555}.radio-input[data-v-bd4dd48e]:checked:disabled:before{background-color:#fff;border-color:#2196f3}.radio-label[data-v-bd4dd48e]{font-size:1rem;cursor:pointer;transition:color .3s ease}.field-error[data-v-bd4dd48e]{color:#f44336;font-size:.875rem;margin-top:.5rem}.field-help[data-v-bd4dd48e]{color:#888;font-size:.875rem;margin-top:.5rem}@media (prefers-color-scheme: dark){.radio-input[data-v-bd4dd48e]{background-color:#444;border-color:#999595}.radio-input[data-v-bd4dd48e]:checked{background-color:#2196f3;border-color:#2196f3}.radio-input[data-v-bd4dd48e]:checked:before{background-color:#fff}.field-label[data-v-bd4dd48e],.radio-label[data-v-bd4dd48e]{color:#fff}.field-error[data-v-bd4dd48e]{color:#f44336}.field-help[data-v-bd4dd48e]{color:#bbb}}@media (max-width: 320px){.field-label[data-v-bd4dd48e]{font-size:.875rem}.radio-input[data-v-bd4dd48e]{transform:scale(1.2)}.radio-label[data-v-bd4dd48e]{font-size:.875rem}}@media (min-width: 321px) and (max-width: 768px){.field-label[data-v-bd4dd48e]{font-size:.9375rem}.radio-input[data-v-bd4dd48e]{transform:scale(1.1)}.radio-label[data-v-bd4dd48e]{font-size:1rem}}@media (min-width: 769px){.field-label[data-v-bd4dd48e]{font-size:1rem}.radio-input[data-v-bd4dd48e]{transform:scale(1)}.radio-label[data-v-bd4dd48e]{font-size:1rem}}', Yc = /* @__PURE__ */ ke(qc, [["styles", [Gc]], ["__scopeId", "data-v-bd4dd48e"]]), Jc = { class: "field-wrapper" }, Xc = ["for"], Zc = { class: "select-wrapper" }, Qc = ["id", "name", "disabled", "readonly", "aria-label", "aria-describedby", "aria-invalid"], ef = {
  key: 0,
  value: "",
  disabled: "",
  selected: ""
}, tf = ["value"], rf = ["value"], of = ["label"], nf = ["value"], sf = {
  key: 1,
  class: "field-loading"
}, lf = {
  key: 2,
  class: "field-error"
}, af = {
  key: 3,
  class: "field-error"
}, df = {
  key: 4,
  class: "field-help"
}, cf = /* @__PURE__ */ _e({
  shadow: !0,
  __name: "FieldAsyncSelect.ce",
  props: {
    modelValue: { type: [String, Number, Boolean] },
    error: { type: [String, null] },
    field: { type: Object }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, o = t, n = Q(
      () => {
        var h, $;
        return ((h = r.field.props) == null ? void 0 : h.id) || (($ = r.field.props) == null ? void 0 : $.name) || `async-select-field-${Math.random().toString(36).substring(2, 15)}`;
      }
    ), i = _r(null), s = Q(() => !!r.error || !!i.value), l = _r([]), a = _r(!0), p = Q({
      get: () => r.modelValue ?? "",
      set: (h) => {
        o("update:modelValue", h);
      }
    }), d = async () => {
      var h;
      try {
        a.value = !0;
        const $ = await fetch(((h = r.field.props) == null ? void 0 : h.optionsUrl) || "");
        if (!$.ok) throw new Error("Failed to fetch options");
        const M = await $.json();
        l.value = M || [];
      } catch ($) {
        $ instanceof Error ? (i.value = "Failed to load options: " + $.message, console.log($.message)) : (i.value = "An unknown error occurred while loading options.", console.log("Unknown error", $));
      } finally {
        a.value = !1;
      }
    };
    Vi(() => {
      var h;
      (h = r.field.props) != null && h.optionsUrl ? d() : (l.value = r.field.options || [], a.value = !1);
    });
    const f = (h) => typeof h == "object" && "group" in h, b = (h) => typeof h == "object" && "label" in h && "value" in h;
    return (h, $) => {
      var M, X, N, Y;
      return g(), _("div", Jc, [
        h.field.label ? (g(), _("label", {
          key: 0,
          for: n.value,
          class: "field-label"
        }, R(h.field.label), 9, Xc)) : F("", !0),
        U("div", Zc, [
          tt(U("select", {
            id: n.value,
            name: n.value,
            "onUpdate:modelValue": $[0] || ($[0] = (j) => p.value = j),
            disabled: (M = h.field.props) == null ? void 0 : M.disabled,
            readonly: (X = h.field.props) == null ? void 0 : X.readonly,
            "aria-label": (N = h.field.props) == null ? void 0 : N.ariaLabel,
            "aria-describedby": (Y = h.field.props) == null ? void 0 : Y.ariaDescribedBy,
            "aria-invalid": s.value,
            class: se(["field-select", { error: s.value }])
          }, [
            a.value ? F("", !0) : (g(), _("option", ef, " Select " + R(h.field.label || "an option"), 1)),
            (g(!0), _(Z, null, Ie(l.value, (j, V) => (g(), _(Z, {
              key: "option-" + V
            }, [
              typeof j == "string" ? (g(), _("option", {
                key: 0,
                value: j
              }, R(j), 9, tf)) : b(j) ? (g(), _("option", {
                key: 1,
                value: j.value
              }, R(j.label), 9, rf)) : f(j) ? (g(), _("optgroup", {
                key: 2,
                label: j.group
              }, [
                (g(!0), _(Z, null, Ie(j.options, (w, O) => (g(), _("option", {
                  key: "group-option-" + O,
                  value: b(w) ? w.value : w
                }, R(b(w) ? w.label : w), 9, nf))), 128))
              ], 8, of)) : F("", !0)
            ], 64))), 128))
          ], 10, Qc), [
            [rn, p.value]
          ]),
          $[1] || ($[1] = U("span", { class: "custom-arrow" }, "▼", -1))
        ]),
        a.value ? (g(), _("p", sf, "Loading...")) : F("", !0),
        i.value ? (g(), _("p", lf, R(i.value), 1)) : F("", !0),
        r.error ? (g(), _("p", af, R(r.error), 1)) : F("", !0),
        h.field.helpText && !s.value ? (g(), _("p", df, R(h.field.helpText), 1)) : F("", !0)
      ]);
    };
  }
}), ff = ".field-wrapper[data-v-afffae47]{display:flex;flex-direction:column;margin-bottom:1rem}.field-label[data-v-afffae47]{font-weight:700;margin-bottom:.5rem;font-size:1rem}.select-wrapper[data-v-afffae47]{position:relative;width:100%}.field-select[data-v-afffae47]{font-size:1rem;padding:.75rem 1rem;border:1px solid #ccc;border-radius:.375rem;width:100%;background-color:#fff;color:inherit;-webkit-appearance:none;-moz-appearance:none;appearance:none;transition:all .3s ease}.field-select.error[data-v-afffae47]{border-color:#f44336}.custom-arrow[data-v-afffae47]{position:absolute;right:1rem;top:50%;transform:translateY(-50%);font-size:1.25rem;color:#888;pointer-events:none;z-index:1;transition:transform .2s ease-in-out}.field-select:focus+.custom-arrow[data-v-afffae47],.field-select:active+.custom-arrow[data-v-afffae47]{transform:translateY(-50%) rotate(180deg)}.field-loading[data-v-afffae47],.field-help[data-v-afffae47],.field-error[data-v-afffae47]{font-size:.875rem;margin-top:.5rem}.field-loading[data-v-afffae47]{color:#999;font-style:italic}.field-error[data-v-afffae47]{color:#f44336}.field-help[data-v-afffae47]{color:#666}@media (prefers-color-scheme: dark){.field-label[data-v-afffae47]{color:#eee}.field-select[data-v-afffae47]{background-color:#333!important;color:#fff!important;border-color:#555!important;-webkit-appearance:none;-moz-appearance:none;appearance:none}.field-select option[data-v-afffae47]{background-color:#333!important;color:#fff!important}.field-select[data-v-afffae47]:focus{border-color:#888}.field-select[data-v-afffae47]:disabled{background-color:#333;color:#777}.field-loading[data-v-afffae47],.field-help[data-v-afffae47]{color:#aaa}.field-error[data-v-afffae47]{color:#f44336}}", uf = /* @__PURE__ */ ke(cf, [["styles", [ff]], ["__scopeId", "data-v-afffae47"]]), pf = { class: "field-wrapper" }, hf = { class: "field-label-help" }, mf = ["for"], bf = {
  key: 1,
  class: "field-help inline"
}, gf = ["id", "name", "placeholder", "disabled", "readonly"], vf = ["id", "name", "disabled", "readonly"], yf = ["value"], _f = ["id", "name", "placeholder", "disabled", "readonly"], wf = {
  key: 3,
  class: "field-error"
}, xf = /* @__PURE__ */ _e({
  shadow: !0,
  __name: "FieldCustom.ce",
  props: {
    modelValue: { type: [String, Number, Boolean] },
    error: { type: [String, null] },
    field: { type: Object }
  },
  emits: ["update:modelValue"],
  setup(e, { emit: t }) {
    const r = e, o = t, n = Q(
      () => r.field.label ? r.field.label.toLowerCase().replace(/\s+/g, "-") + "-field" : "custom-field"
    ), i = Q(() => !!r.error || !!r.field.errorMessage), s = (a) => typeof a != "string" && "label" in a && "value" in a, l = Q({
      get: () => r.modelValue === !0 || r.modelValue === !1 ? String(r.modelValue) : r.modelValue ?? "",
      set: (a) => {
        o("update:modelValue", a);
      }
    });
    return (a, p) => (g(), _("div", pf, [
      U("div", hf, [
        a.field.label ? (g(), _("label", {
          key: 0,
          for: n.value,
          class: "field-label"
        }, R(a.field.label), 9, mf)) : F("", !0),
        a.field.helpText && !i.value ? (g(), _("span", bf, R(a.field.helpText), 1)) : F("", !0)
      ]),
      a.field.type === "text" ? tt((g(), _("input", {
        key: 0,
        id: n.value,
        name: n.value,
        "onUpdate:modelValue": p[0] || (p[0] = (d) => l.value = d),
        type: "text",
        placeholder: a.field.placeholder,
        disabled: a.field.disabled,
        readonly: a.field.readonly,
        class: "field-input"
      }, null, 8, gf)), [
        [Mo, l.value]
      ]) : F("", !0),
      a.field.type === "select" ? tt((g(), _("select", {
        key: 1,
        id: n.value,
        name: n.value,
        "onUpdate:modelValue": p[1] || (p[1] = (d) => l.value = d),
        disabled: a.field.disabled,
        readonly: a.field.readonly,
        class: "field-select"
      }, [
        p[3] || (p[3] = U("option", { value: "" }, "Select an option", -1)),
        (g(!0), _(Z, null, Ie(a.field.options, (d, f) => (g(), _("option", {
          key: f,
          value: s(d) ? d.value : d
        }, R(s(d) ? d.label : d), 9, yf))), 128))
      ], 8, vf)), [
        [rn, l.value]
      ]) : F("", !0),
      a.field.type === "textarea" ? tt((g(), _("textarea", {
        key: 2,
        id: n.value,
        name: n.value,
        "onUpdate:modelValue": p[2] || (p[2] = (d) => l.value = d),
        placeholder: a.field.placeholder,
        disabled: a.field.disabled,
        readonly: a.field.readonly,
        class: "field-textarea"
      }, null, 8, _f)), [
        [Mo, l.value]
      ]) : F("", !0),
      i.value ? (g(), _("p", wf, R(a.error || a.field.errorMessage), 1)) : F("", !0)
    ]));
  }
}), kf = ".field-wrapper[data-v-5409f4fe]{display:flex;flex-direction:column;gap:1rem;margin-bottom:1.5rem;width:-webkit-fill-available}.field-label-help[data-v-5409f4fe]{display:flex;justify-content:space-between;align-items:center;margin-bottom:.25rem}.field-help.inline[data-v-5409f4fe]{font-style:italic;font-size:.85rem;color:#666}.field-label[data-v-5409f4fe]{font-weight:700;font-size:1rem}.field-input[data-v-5409f4fe],.field-select[data-v-5409f4fe],.field-textarea[data-v-5409f4fe]{font-size:.875rem;padding:.75rem 1rem;border:1px solid #ccc;border-radius:.375rem;width:-webkit-fill-available;background-color:#fff;color:inherit;transition:all .3s ease;display:block;margin-bottom:1rem}.field-error[data-v-5409f4fe]{color:#f44336;font-size:.875rem;margin-top:.5rem}.field-select[data-v-5409f4fe]{-webkit-appearance:none;-moz-appearance:none;appearance:none}.field-textarea[data-v-5409f4fe]{height:6rem}@media (prefers-color-scheme: dark){.field-input[data-v-5409f4fe],.field-select[data-v-5409f4fe],.field-textarea[data-v-5409f4fe]{background-color:#333;color:#fff;border-color:#555}.field-error[data-v-5409f4fe]{color:#f44336}.field-help.inline[data-v-5409f4fe]{color:#bbb}.field-label[data-v-5409f4fe]{color:#fff}}@media (max-width: 320px){.field-input[data-v-5409f4fe],.field-select[data-v-5409f4fe],.field-textarea[data-v-5409f4fe]{font-size:.75rem;padding:.625rem .75rem}.field-label[data-v-5409f4fe]{font-size:.75rem}}@media (min-width: 321px) and (max-width: 768px){.field-input[data-v-5409f4fe],.field-select[data-v-5409f4fe],.field-textarea[data-v-5409f4fe]{font-size:.875rem}}@media (min-width: 769px){.field-input[data-v-5409f4fe],.field-select[data-v-5409f4fe],.field-textarea[data-v-5409f4fe]{font-size:1rem}}", Sf = /* @__PURE__ */ ke(xf, [["styles", [kf]], ["__scopeId", "data-v-5409f4fe"]]), $f = ["href"], Cf = {
  key: 0,
  class: "link-text"
}, Tf = ["src", "alt"], Of = /* @__PURE__ */ _e({
  shadow: !0,
  __name: "FormPageHeader.ce",
  props: {
    block: { type: Object }
  },
  setup(e) {
    const t = (s) => s.type === "heading", r = (s) => s.type === "paragraph", o = (s) => s.type === "link", n = (s) => s.type === "text", i = (s) => s.type === "image";
    return (s, l) => (g(), _("div", {
      class: se(["page-header", s.block.wrapperClass])
    }, [
      (g(!0), _(Z, null, Ie(s.block.content, (a, p) => (g(), _(Z, { key: p }, [
        t(a) ? (g(), pt(jr(a.tag || "h1"), {
          key: 0,
          class: se(["heading-text", a.class])
        }, {
          default: qo(() => [
            wt(R(a.text), 1)
          ]),
          _: 2
        }, 1032, ["class"])) : r(a) ? (g(), _("p", {
          key: 1,
          class: se(["paragraph-text", a.class])
        }, R(a.text), 3)) : o(a) ? (g(), _("a", {
          key: 2,
          href: a.href,
          class: se(["link-block", a.class]),
          target: "_blank",
          rel: "noopener noreferrer"
        }, [
          (g(!0), _(Z, null, Ie(a.content || [], (d, f) => (g(), _(Z, { key: f }, [
            n(d) ? (g(), _("span", Cf, R(d.text), 1)) : i(d) ? (g(), _("img", {
              key: 1,
              src: d.src,
              alt: d.alt || "",
              class: se(["link-image", d.class])
            }, null, 10, Tf)) : F("", !0)
          ], 64))), 128))
        ], 10, $f)) : F("", !0)
      ], 64))), 128))
    ], 2));
  }
}), Ef = "a[data-v-51a49929]{text-decoration:none;color:inherit;-webkit-tap-highlight-color:transparent}.heading-text[data-v-51a49929]{font-size:2rem;font-weight:700;color:#1a1a1a;margin-bottom:.75rem;line-height:1.3}.paragraph-text[data-v-51a49929]{font-size:1rem;color:#444;margin-bottom:.5rem;line-height:1.6}.link-block[data-v-51a49929]{display:inline-flex;align-items:center;gap:.5rem;color:#06c;text-decoration:underline}.link-block[data-v-51a49929]:hover{color:#004999}.link-text[data-v-51a49929]{font-size:.95rem}.link-image[data-v-51a49929]{height:1rem;width:1rem;object-fit:contain}@media (prefers-color-scheme: dark){.page-header[data-v-51a49929]{color:#eee}.heading-text[data-v-51a49929]{color:#fff}.paragraph-text[data-v-51a49929]{color:#ccc}.link-block[data-v-51a49929]{color:#8cf}.link-block[data-v-51a49929]:hover{color:#aad8ff}}@media (max-width: 320px){.heading-text[data-v-51a49929]{font-size:1.5rem}.paragraph-text[data-v-51a49929],.link-text[data-v-51a49929]{font-size:.875rem}.link-image[data-v-51a49929]{height:.8rem;width:.8rem}}@media (min-width: 321px) and (max-width: 768px){.heading-text[data-v-51a49929]{font-size:1.75rem}.paragraph-text[data-v-51a49929]{font-size:1rem}.link-text[data-v-51a49929]{font-size:.95rem}.link-image[data-v-51a49929]{height:.9rem;width:.9rem}}@media (min-width: 769px){.heading-text[data-v-51a49929]{font-size:2rem}.paragraph-text[data-v-51a49929],.link-text[data-v-51a49929]{font-size:1rem}.link-image[data-v-51a49929]{height:1rem;width:1rem}}", Af = /* @__PURE__ */ ke(Of, [["styles", [Ef]], ["__scopeId", "data-v-51a49929"]]), If = /* @__PURE__ */ _e({
  shadow: !0,
  __name: "FormSectionHeader.ce",
  props: {
    block: { type: Object }
  },
  setup(e) {
    const t = (o) => o.type === "heading", r = (o) => o.type === "paragraph";
    return (o, n) => (g(), _("div", {
      class: se(["section-header", o.block.wrapperClass])
    }, [
      (g(!0), _(Z, null, Ie(o.block.content, (i, s) => (g(), _(Z, { key: s }, [
        t(i) ? (g(), pt(jr(i.tag || "h2"), {
          key: 0,
          class: se(["section-heading", i.class])
        }, {
          default: qo(() => [
            wt(R(i.text), 1)
          ]),
          _: 2
        }, 1032, ["class"])) : r(i) ? (g(), _("p", {
          key: 1,
          class: se(["section-paragraph", i.class])
        }, R(i.text), 3)) : F("", !0)
      ], 64))), 128))
    ], 2));
  }
}), Mf = ".section-header[data-v-36d8433b]{margin-bottom:.5rem;padding:0 1rem}.section-heading[data-v-36d8433b]{font-size:1.5rem;font-weight:600;color:#222;margin-bottom:.5rem;line-height:1.4}.section-paragraph[data-v-36d8433b]{font-size:1rem;color:#555;line-height:1.6;margin-bottom:.5rem}@media (prefers-color-scheme: dark){.section-heading[data-v-36d8433b]{color:#fff}.section-paragraph[data-v-36d8433b]{color:#ccc}}@media (max-width: 320px){.section-heading[data-v-36d8433b]{font-size:1.25rem}.section-paragraph[data-v-36d8433b]{font-size:.875rem}}@media (min-width: 321px) and (max-width: 768px){.section-heading[data-v-36d8433b]{font-size:1.375rem}.section-paragraph[data-v-36d8433b]{font-size:.9375rem}}@media (min-width: 769px){.section-heading[data-v-36d8433b]{font-size:1.5rem}.section-paragraph[data-v-36d8433b]{font-size:1rem}}", Vf = /* @__PURE__ */ ke(If, [["styles", [Mf]], ["__scopeId", "data-v-36d8433b"]]), Pf = { class: "form-actions" }, Ff = ["disabled", "aria-label"], Rf = ["disabled", "aria-label"], jf = ["disabled", "onClick", "aria-label"], zf = {
  key: 1,
  class: "loading-spinner"
}, Df = { class: "link-class" }, Nf = ["href", "aria-label", "target"], Hf = /* @__PURE__ */ _e({
  shadow: !0,
  __name: "FormActions.ce",
  props: {
    buttons: { type: Array },
    link: { type: Object },
    isSubmitting: { type: Boolean }
  },
  emits: ["submit", "reset", "custom-action"],
  setup(e, { emit: t }) {
    const r = t, o = (s) => {
      s && r("custom-action", s);
    }, n = () => {
      r("submit");
    }, i = () => {
      r("reset");
    };
    return (s, l) => (g(), _(Z, null, [
      U("div", Pf, [
        (g(!0), _(Z, null, Ie(s.buttons, (a, p) => (g(), _("div", {
          key: p,
          class: "form-action-button"
        }, [
          a.type === "submit" ? (g(), _("button", {
            key: 0,
            disabled: a.disabled || s.isSubmitting,
            onClick: ho(n, ["prevent"]),
            class: se(["btn", "btn-submit", a.class]),
            "aria-label": a.text
          }, [
            a.icon ? (g(), _("i", {
              key: 0,
              class: se(a.icon)
            }, null, 2)) : F("", !0),
            wt(" " + R(a.text), 1)
          ], 10, Ff)) : F("", !0),
          a.type === "reset" ? (g(), _("button", {
            key: 1,
            disabled: a.disabled,
            onClick: ho(i, ["prevent"]),
            class: se(["btn", "btn-reset", a.class]),
            "aria-label": a.text
          }, [
            a.icon ? (g(), _("i", {
              key: 0,
              class: se(a.icon)
            }, null, 2)) : F("", !0),
            wt(" " + R(a.text), 1)
          ], 10, Rf)) : F("", !0),
          a.type === "button" ? (g(), _("button", {
            key: 2,
            disabled: a.disabled || a.loading,
            onClick: ho((d) => o(a.actionId), ["prevent"]),
            class: se(["btn", "btn-action", a.class]),
            "aria-label": a.text
          }, [
            a.icon ? (g(), _("i", {
              key: 0,
              class: se(a.icon)
            }, null, 2)) : F("", !0),
            wt(" " + R(a.text) + " ", 1),
            a.loading ? (g(), _("span", zf)) : F("", !0)
          ], 10, jf)) : F("", !0)
        ]))), 128))
      ]),
      U("div", Df, [
        s.link ? (g(), _("a", {
          key: 0,
          href: s.link.href,
          class: se(s.link.class),
          "aria-label": s.link.text,
          target: s.link.external ? "_blank" : "_self"
        }, [
          s.link.icon ? (g(), _("i", {
            key: 0,
            class: se(s.link.icon)
          }, null, 2)) : F("", !0),
          wt(" " + R(s.link.text), 1)
        ], 10, Nf)) : F("", !0)
      ])
    ], 64));
  }
}), Lf = "a[data-v-e6ab61ec]{text-decoration:none;color:inherit;-webkit-tap-highlight-color:transparent}.form-actions[data-v-e6ab61ec]{display:flex;justify-content:center;flex-wrap:wrap;gap:.75rem;margin-top:1rem}.form-action-button[data-v-e6ab61ec]{display:flex}.btn[data-v-e6ab61ec]{display:inline-flex;align-items:center;justify-content:center;padding:.45rem .9rem;border-radius:.375rem;font-size:1rem;cursor:pointer;transition:background-color .2s ease}.btn-submit[data-v-e6ab61ec]{background-color:#007bff;color:#fff}.btn-submit[data-v-e6ab61ec]:disabled{background-color:#6c757d;cursor:not-allowed}.btn-reset[data-v-e6ab61ec]{background-color:#f8f9fa;color:#495057}.btn-reset[data-v-e6ab61ec]:disabled{background-color:#e9ecef;cursor:not-allowed}.btn-action[data-v-e6ab61ec]{background-color:#28a745;color:#fff}.btn-action[data-v-e6ab61ec]:disabled{background-color:#6c757d;cursor:not-allowed}.loading-spinner[data-v-e6ab61ec]{margin-left:.5rem;border:2px solid transparent;border-top-color:#fff;border-radius:50%;width:1rem;height:1rem;animation:spin-e6ab61ec 1s linear infinite}.link-class[data-v-e6ab61ec]{display:flex;color:#013164;justify-content:center;text-decoration:underline}@keyframes spin-e6ab61ec{0%{transform:rotate(0)}to{transform:rotate(360deg)}}a.link-about[data-v-e6ab61ec]{display:block;margin-top:1rem;text-align:center;font-size:.875rem;color:#007bff;text-decoration:underline;cursor:pointer}a.link-about[data-v-e6ab61ec]:hover{text-decoration:none}@media (prefers-color-scheme: dark){.btn-submit[data-v-e6ab61ec]{background-color:#0069d9}.btn-reset[data-v-e6ab61ec]{background-color:#343a40;color:#ccc}.btn-action[data-v-e6ab61ec]{background-color:#218838}.btn-submit[data-v-e6ab61ec]:disabled,.btn-reset[data-v-e6ab61ec]:disabled,.btn-action[data-v-e6ab61ec]:disabled{background-color:#6c757d}a.link-about[data-v-e6ab61ec]{color:#66b3ff}}@media (max-width: 320px){.form-actions[data-v-e6ab61ec]{flex-direction:column;align-items:center}.btn[data-v-e6ab61ec]{width:100%;padding:.5rem 1rem;font-size:.95rem}.form-action-button[data-v-e6ab61ec]{width:100%}}@media (min-width: 321px) and (max-width: 768px){.form-actions[data-v-e6ab61ec]{justify-content:center}.btn[data-v-e6ab61ec]{padding:.6rem 1.1rem;font-size:1.05rem}}@media (min-width: 769px){.form-actions[data-v-e6ab61ec]{justify-content:center}.btn[data-v-e6ab61ec]{padding:.65rem 1.25rem;font-size:1.1rem}}", Uf = /* @__PURE__ */ ke(Hf, [["styles", [Lf]], ["__scopeId", "data-v-e6ab61ec"]]), Bf = { class: "form-engine" }, Kf = { class: "form-fields" }, Wf = {
  key: 0,
  class: "field-grid"
}, qf = {
  key: 0,
  class: "modal-overlay"
}, Gf = { class: "modal-content" }, Yf = /* @__PURE__ */ _e({
  shadow: !0,
  __name: "FormEngine.ce",
  props: {
    genericPageHeader: { type: Object },
    genericFormSectionHeader: { type: Object },
    genericFormFields: { type: Array },
    genericActionButtons: { type: Object }
  },
  emits: ["submit"],
  setup(e, { emit: t }) {
    const r = e, o = t, n = nr({}), i = nr({}), s = (V) => ({
      input: Md,
      textarea: Nd,
      select: Xd,
      checkbox: dc,
      radio: Yc,
      toggle: yc,
      file: Ic,
      link: Dc,
      custom: Sf,
      asyncSelect: uf
    })[V ?? "input"], l = (V) => {
      if (!V.condition) return !0;
      const { field: w, value: O, operator: B = "equals" } = V.condition, K = n[w];
      switch (B) {
        case "equals":
          return K === O;
        case "notEquals":
          return K !== O;
        case "includes":
          return Array.isArray(K) && K.includes(O);
        case "greaterThan":
          return K > O;
        case "lessThan":
          return K < O;
        default:
          return !0;
      }
    }, a = _r(!1);
    function p() {
      a.value = !a.value, console.log("isPreviewVisible.value", a.value);
    }
    const d = Q(() => {
      const V = {};
      for (const w in n) {
        const O = n[w];
        V[w] = O instanceof File ? `[File: ${O.name}]` : O;
      }
      return V;
    });
    function f(V) {
      return ["string", "number", "boolean"].includes(typeof V);
    }
    function b(V, w, O) {
      if (!O) return null;
      if (O.required && (w == null || w === ""))
        return O.customMessage || "This field is required.";
      if (O.pattern && typeof w == "string" && !(typeof O.pattern == "string" ? new RegExp(O.pattern) : O.pattern).test(w))
        return O.customMessage || "Invalid format.";
      if (typeof O.minLength == "number" && typeof w == "string" && w.length < O.minLength)
        return O.customMessage || `Minimum length is ${O.minLength}.`;
      if (typeof O.maxLength == "number" && typeof w == "string" && w.length > O.maxLength)
        return O.customMessage || `Maximum length is ${O.maxLength}.`;
      if ((typeof O.min == "number" || typeof O.min == "string") && w !== "" && (typeof w == "number" || typeof w == "string") && w < O.min)
        return O.customMessage || `Minimum value is ${O.min}.`;
      if ((typeof O.max == "number" || typeof O.max == "string") && w !== "" && (typeof w == "number" || typeof w == "string") && w > O.max)
        return O.customMessage || `Maximum value is ${O.max}.`;
      if (O.maxSize && w instanceof File && w.size / 1048576 > O.maxSize)
        return O.customMessage || `File size must be under ${O.maxSize} MB.`;
      if (f(w) && typeof O.customValidator == "function") {
        const B = O.customValidator(w);
        if (B !== !0)
          return typeof B == "string" ? B : O.customMessage || "Invalid.";
      }
      return null;
    }
    function h(V) {
      return V.grid === !0;
    }
    function $(V) {
      return V.grid === !1 || V.grid === void 0;
    }
    function M(V) {
      let w = !0;
      for (const B in i)
        i[B] = null;
      const O = [];
      V.forEach((B) => {
        h(B) ? O.push(...B.children.filter($)) : $(B) && O.push(B);
      });
      for (const B of O) {
        if (!l(B)) continue;
        const K = n[B.name], de = b(B.name, K, B.validation);
        de ? (i[B.name] = de, w = !1) : i[B.name] = null;
      }
      return w;
    }
    const X = () => {
      if (!M(r.genericFormFields)) {
        console.warn("Validation failed:", i);
        return;
      }
      console.log("Submitting form from webcomponent", n), o("submit", n);
    }, N = () => {
      for (const V in n)
        n[V] = null;
      for (const V in i)
        i[V] = null;
      a.value = !1, console.log("Form has been reset.");
    }, Y = (V) => {
      V === "previewForm" ? p() : console.log(`Custom action triggered: ${V}`);
    };
    function j(V) {
      i[V] = null;
    }
    return (V, w) => (g(), _(Z, null, [
      U("form", Bf, [
        V.genericPageHeader ? (g(), pt(Af, {
          key: 0,
          block: V.genericPageHeader
        }, null, 8, ["block"])) : F("", !0),
        V.genericFormSectionHeader ? (g(), pt(Vf, {
          key: 1,
          block: V.genericFormSectionHeader
        }, null, 8, ["block"])) : F("", !0),
        U("div", Kf, [
          (g(!0), _(Z, null, Ie(V.genericFormFields, (O, B) => (g(), _(Z, { key: B }, [
            "grid" in O && O.grid ? (g(), _("div", Wf, [
              (g(!0), _(Z, null, Ie(O.children, (K, de) => (g(), _(Z, { key: de }, [
                $(K) && l(K) ? (g(), pt(jr(s(K.component)), {
                  key: 0,
                  field: K,
                  modelValue: n[K.name],
                  error: i[K.name],
                  "onUpdate:modelValue": (Me) => n[K.name] = Me,
                  onInput: (Me) => j(K.name)
                }, null, 40, ["field", "modelValue", "error", "onUpdate:modelValue", "onInput"])) : F("", !0)
              ], 64))), 128))
            ])) : $(O) && l(O) ? (g(), pt(jr(s(O.component)), {
              key: 1,
              field: O,
              modelValue: n[O.name],
              error: i[O.name],
              "onUpdate:modelValue": (K) => n[O.name] = K,
              onInput: (K) => j(O.name)
            }, null, 40, ["field", "modelValue", "error", "onUpdate:modelValue", "onInput"])) : F("", !0)
          ], 64))), 128))
        ]),
        V.genericActionButtons ? (g(), pt(Uf, {
          key: 2,
          buttons: V.genericActionButtons.buttons,
          link: V.genericActionButtons.link,
          isSubmitting: !1,
          onSubmit: X,
          onReset: N,
          onCustomAction: Y
        }, null, 8, ["buttons", "link"])) : F("", !0)
      ]),
      a.value ? (g(), _("div", qf, [
        U("div", Gf, [
          w[1] || (w[1] = U("h3", null, "Preview Form Data", -1)),
          U("pre", null, R(d.value), 1),
          U("button", {
            onClick: w[0] || (w[0] = (O) => p())
          }, "Close")
        ])
      ])) : F("", !0)
    ], 64));
  }
}), Jf = ".form-engine[data-v-d17f71a8]{display:flex;flex-direction:column;gap:1.5rem;padding:1rem;background-color:#e5f1f1;border-radius:.5rem;box-shadow:0 .0625rem .375rem #0000001a;border:.125rem solid teal;transition:background .3s ease,color .3s ease}@media (prefers-color-scheme: dark){.form-engine[data-v-d17f71a8]{background-color:#577171;border-color:#089393}}.form-fields[data-v-d17f71a8]{display:flex;flex-direction:column;gap:1rem}.field-grid[data-v-d17f71a8]{display:grid;grid-template-columns:repeat(auto-fit,minmax(15rem,1fr));gap:1rem}.modal-overlay[data-v-d17f71a8]{position:fixed;top:0;right:0;bottom:0;left:0;background:#0006;display:flex;align-items:center;justify-content:center;z-index:100;padding:1rem;box-sizing:border-box}.modal-content[data-v-d17f71a8]{background-color:#e5f1f1;color:#000;padding:1.5rem;border-radius:.5rem;max-width:36rem;width:100%;max-height:80vh;overflow-y:auto;box-shadow:0 .25rem 1rem #0003}.modal-content h3[data-v-d17f71a8]{font-size:1.25rem;margin-bottom:1rem}.modal-content pre[data-v-d17f71a8]{background:#d0e6e6;padding:1rem;border-radius:.25rem;font-size:.875rem;white-space:pre-wrap;word-wrap:break-word}.modal-content button[data-v-d17f71a8]{margin-top:1rem;padding:.5rem 1rem;background-color:teal;color:#fff;border:none;border-radius:.25rem;cursor:pointer;font-weight:600}.modal-content button[data-v-d17f71a8]:hover{background-color:#066}@media (prefers-color-scheme: dark){.modal-content[data-v-d17f71a8]{background-color:#577171;color:#f1f1f1}.modal-content pre[data-v-d17f71a8]{background:#475c5c}}@media (max-width: 320px){html[data-v-d17f71a8]{font-size:87.5%}body[data-v-d17f71a8]{padding:.5rem}.grid[data-v-d17f71a8]{display:block}.grid[data-v-d17f71a8]>*{margin-bottom:1rem}}@media (min-width: 321px) and (max-width: 768px){.form-engine[data-v-d17f71a8]{padding:.75rem;gap:1rem}.field-grid[data-v-d17f71a8]{grid-template-columns:1fr}.modal-content[data-v-d17f71a8]{padding:1.25rem;font-size:.875rem}.modal-content h3[data-v-d17f71a8]{font-size:1.125rem}}@media (min-width: 769px){.form-engine[data-v-d17f71a8]{padding:1rem;gap:1.5rem}.field-grid[data-v-d17f71a8]{grid-template-columns:repeat(auto-fit,minmax(15rem,1fr))}.modal-content[data-v-d17f71a8]{padding:1.5rem;font-size:1rem}.modal-content h3[data-v-d17f71a8]{font-size:1.25rem}}", Xf = /* @__PURE__ */ ke(Yf, [["styles", [Jf]], ["__scopeId", "data-v-d17f71a8"]]), Zf = /* @__PURE__ */ fd(Xf);
customElements.define("form-engine", Zf);
