import { resolveComponent as es, createBlock as xt, createElementBlock as P, openBlock as D, resolveDynamicComponent as Ot, normalizeProps as Rt, mergeProps as tt, withCtx as ts, toDisplayString as te, ref as W, watch as wt, onMounted as ss, onBeforeUnmount as ls, normalizeStyle as Q, unref as g, createElementVNode as Y, createCommentVNode as z, Fragment as Te, renderList as bt, normalizeClass as ye, withModifiers as q, renderSlot as Ge, createVNode as Lt, createTextVNode as rs, nextTick as Nt, isVNode as Ht } from "vue";
const Yt = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(d) {
    return (M, L) => {
      const y = es("el-icon");
      return d.iconObj.type === "custom" ? (D(), xt(Ot(d.iconObj.icon), Rt(tt({ key: 0 }, d.iconObj.attrs)), null, 16)) : d.iconObj.type === "el" ? (D(), xt(y, Rt(tt({ key: 1 }, d.iconObj.attrs)), {
        default: ts(() => [
          (D(), xt(Ot(d.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : d.iconObj.type === "iconfont" ? (D(), P("i", tt({
        key: 2,
        class: ["icon iconfont", "icon-" + d.iconObj.icon]
      }, d.iconObj.attrs), null, 16)) : (D(), P("i", tt({
        key: 3,
        class: d.iconObj.type
      }, d.iconObj.attrs), te(d.iconObj.icon), 17));
    };
  }
}, Xt = (d, M = { x: "x", y: "y", width: "width", height: "height" }) => {
  let L = null;
  return d instanceof Array ? (L = [], d.forEach((y) => {
    typeof y[M.x] == "number" && typeof y[M.y] == "number" && typeof y[M.width] == "number" && typeof y[M.height] == "number" && L.push({
      x: y[M.x],
      y: y[M.y],
      width: y[M.width],
      height: y[M.height]
    });
  })) : typeof d[M.width] == "number" && typeof d[M.height] == "number" && (L = {
    width: d[M.width],
    height: d[M.height]
  }), L;
}, os = (d) => {
  const M = /* @__PURE__ */ new Map();
  return d.forEach((L) => {
    M.has(L.x) || M.set(L.x, []), M.get(L.x).push(L);
  }), M;
}, ns = (d, M) => d.filter((L) => L.x <= M.x && L.x + L.width > M.x || L.x > M.x && L.x < M.x + M.width), as = (d, M, L, y = !1) => {
  if (M.width > L)
    return null;
  let f = [];
  if (d.length === 0) {
    const N = { x: 0, y: 0 };
    return y ? [N] : N;
  }
  const R = Math.max(...d.map((N) => N.y + N.height)), C = /* @__PURE__ */ new Set([0]);
  d.forEach((N) => {
    C.add(N.y), C.add(N.y + N.height);
  });
  const be = Array.from(C).sort((N, V) => N - V);
  for (const N of be) {
    const V = N + M.height;
    if (V > R)
      continue;
    const p = d.filter((S) => S.y < V && S.y + S.height > N);
    if (p.length === 0) {
      const S = { x: 0, y: N };
      if (!y)
        return S;
      f.push(S);
      continue;
    }
    const F = p.map((S) => [S.x, S.x + S.width]);
    F.sort((S, o) => S[0] - o[0]);
    const H = [];
    let [O, Z] = F[0];
    for (let S = 1; S < F.length; S++) {
      const [o, de] = F[S];
      o <= Z ? Z = Math.max(Z, de) : (H.push([O, Z]), [O, Z] = [o, de]);
    }
    if (H.push([O, Z]), H[0][0] >= M.width) {
      const S = { x: 0, y: N };
      if (!y)
        return S;
      f.push(S);
    }
    let se = H[0][1];
    for (let S = 1; S < H.length; S++) {
      if (H[S][0] - se >= M.width) {
        const de = { x: se, y: N };
        if (!y)
          return de;
        f.push(de);
      }
      se = Math.max(se, H[S][1]);
    }
    if (L - se >= M.width) {
      const S = { x: se, y: N };
      if (!y)
        return S;
      f.push(S);
    }
  }
  return y ? (os(f).forEach((V, p) => {
    if (V.length > 1)
      for (let F = 0; F < V.length - 1; F++) {
        let H = { ...M, ...V[F] };
        ns(d.filter((O) => O.y >= H.y + H.height && O.y <= V[F + 1].y), H).length === 0 && (f = f.filter((O) => !(O.x === V[F + 1].x && O.y === V[F + 1].y)), V.splice(F, 1), F--);
      }
  }), f.sort((V, p) => V.y !== p.y ? V.y - p.y : V.x - p.x), f.length === 0 ? null : f) : null;
}, is = { class: "content-box-bottom" }, us = ["onMousedown", "onMouseenter", "onMouseleave"], hs = { class: "com-item-box" }, cs = ["title"], ds = { class: "com-item-box-content" }, ps = ["onClick"], fs = ["onClick"], gs = ["onClick"], vs = {
  key: 1,
  class: "com-item-box-content"
}, ys = ["onClick"], _s = ["onClick"], xs = ["onClick"], ws = ["onClick"], bs = ["onClick"], Is = ["onClick"], Ms = ["onClick"], ks = ["onClick"], Es = ["onClick"], Ss = ["onClick"], Ds = ["onMousedown"], Ps = ["onMousedown"], Cs = ["onMousedown"], Ts = ["onMousedown"], Gs = ["onMousedown"], As = ["onMousedown"], zs = ["onMousedown"], Bs = ["onMousedown"], Os = {
  key: 0,
  class: "com-empty"
}, Rs = {
  __name: "index",
  props: {
    // 包含收缩方向
    insertResizeKeys: {
      type: Array,
      default: () => ["topLeft", "top", "topRight", "left", "right", "bottomLeft", "bottom", "bottomRight"]
    },
    // 排除收缩方向
    excludeResizeKeys: {
      type: Array,
      default: () => []
    },
    // 手机拖动模式（在窄屏可以开启，将简化上下拖动交换的判断）
    mobileDragModel: {
      type: Boolean,
      default: !1
    },
    // 预览模式
    seeModel: {
      type: Boolean,
      default: !1
    },
    // 预览模式底部最小留白
    seeModelMinBg: {
      type: Number,
      default: 50,
      validator(d, M) {
        return d >= 0;
      }
    },
    // 组件项最小宽度（原始尺寸）
    itemMinWidth: {
      type: Number,
      default: 50,
      validator(d, M) {
        return d >= 20;
      }
    },
    // 组件项最小高度（原始尺寸）
    itemMinHeight: {
      type: Number,
      default: 50,
      validator(d, M) {
        return d >= 20;
      }
    },
    // 纵向相邻元素的自动间距（原始尺寸）
    xSpace: {
      type: Number,
      default: 10,
      validator(d, M) {
        return d >= 0;
      }
    },
    // 横向相邻元素的自动间距（原始尺寸）
    ySpace: {
      type: Number,
      default: null,
      validator(d, M) {
        return d >= 0;
      }
    },
    // 高度缩放折扣率（让高度没那么大变化）
    hScaleDiscount: {
      type: Number,
      default: 0.2,
      validator(d, M) {
        return d > 0;
      }
    },
    // 预览模式组件内css缩放比例最小值
    cssScaleMin: {
      type: Number,
      default: 0.75,
      validator(d, M) {
        return d > 0;
      }
    },
    // 预览模式组件内css缩放比例最大值
    cssScaleMax: {
      type: Number,
      default: 1.2,
      validator(d, M) {
        return d > 0 && d >= (M ? M.cssScaleMin : 0.1);
      }
    },
    // 设置图标
    settingIcon: {
      type: Object,
      default: () => ({
        icon: "设置"
      })
    },
    // 不展示内置组合插槽中的设置组合标题按钮
    hideTit: {
      type: Boolean,
      default: !1
    },
    // 显示辅助线
    showAuxiliary: {
      type: Boolean,
      default: !1
    },
    // 组合按钮位置更详细
    groupBtnPosMore: {
      type: Boolean,
      default: !1
    },
    // 组合前数据处理
    beforeAddGroup: {
      type: Function,
      default: (d) => d
    },
    // 解散/移出组合前数据处理
    beforeRemoveGroup: {
      type: Function,
      default: (d) => d
    },
    // 拖拽事件触发延迟时间（防止不小心单击了一下而开始拖动）
    dragDelayTime: {
      type: Number,
      default: 200,
      validator(d, M) {
        return d >= 0 && d < 1e3;
      }
    },
    // 拖动屏幕上下滚动触发高度（缩放尺寸）
    moveDistance: {
      type: [Number, String],
      default: "50px"
    },
    // 滚动条每次移动距离（缩放尺寸）
    scrollDistance: {
      type: [Number, String],
      default: "20px"
    },
    // 拖拽时元素不允许超出容器
    dragInBox: {
      type: Boolean,
      default: !1
    },
    // 拖拽结束时、缩放过程中自动吸附的最大间距（缩放尺寸）
    adsorbSpace: {
      type: Number,
      default: 10,
      validator(d, M) {
        return d >= 0;
      }
    }
  },
  emits: ["baseWidthInit", "changeScale", "changeCssScale", "changeTrimModel", "dragStart", "dragIng", "dragEnd", "resizeStart", "resizeIng", "resizeEnd", "showGroup", "openSetMenu", "updateChecked", "showTitPop", "domStart", "domReady", "hasError", "dealError"],
  setup(d, { expose: M, emit: L }) {
    const y = L, f = d, R = (t) => {
      if (typeof t == "object" && !Ht(t) && t !== null && !(t instanceof Date)) {
        let s = t instanceof Array ? [] : {};
        for (let e in t)
          s[e] = typeof t[e] == "object" && !Ht(t[e]) && t[e] !== null && !(t[e] instanceof Date) ? R(t[e]) : t[e];
        return s;
      } else
        return t;
    }, C = (t) => {
      let s = {};
      if (t instanceof Array)
        s = [], t.forEach((e) => {
          s.push(C(e));
        });
      else
        for (let e in t)
          [
            "id",
            "move",
            "drag",
            "itemMinWidth",
            "width",
            "s_width",
            "itemMinHeight",
            "height",
            "s_height",
            "x",
            "s_x",
            "y",
            "s_y",
            "isGroup",
            "groupTit",
            "groupData",
            "inGroupId",
            "groupW",
            "groupH",
            "groupX",
            "groupY"
          ].indexOf(e) !== -1 && (e === "groupData" ? s[e] = C(t[e]) : s[e] = t[e]);
      return s;
    }, be = (t, s, e = !0) => {
      if (t.length === 0)
        return null;
      let r = 1 / 0, l = 1 / 0, a = -1 / 0, _ = !1;
      for (const c of t) {
        const k = Math.abs(c - s);
        k < r ? (r = k, l = c, a = c, _ = k === 0) : k === r && (c < l && (l = c), c > a && (a = c));
      }
      return _ ? s : e ? l : a;
    }, N = (t, s) => {
      let e = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
      for (; t && !e.call(t, s); )
        t = t.parentElement;
      return t;
    }, V = (t, s) => t.classList ? t.classList.contains(s) : new RegExp("\\s" + s + "\\s").test(" " + t.className + " "), p = (t) => {
      try {
        return parseFloat(t.toFixed(7));
      } catch {
        y("hasError", "数值格式转换异常");
      }
    }, F = (t, s) => {
      let e = [], r = (l) => {
        l.forEach((a) => {
          V(a, s) && e.push(a), a.childNodes && a.childNodes.length > 0 && r(a.childNodes);
        });
      };
      return r(t.childNodes), e;
    }, H = (t, s, e = !1) => Z(O(t, s, e), s, e), O = (t, s, e = !1) => t.filter((r) => p(r[e ? "s_x" : "x"]) <= p(s[e ? "s_x" : "x"]) && p(r[e ? "s_x" : "x"] + r[e ? "s_width" : "width"]) > p(s[e ? "s_x" : "x"]) || p(r[e ? "s_x" : "x"]) > p(s[e ? "s_x" : "x"]) && p(r[e ? "s_x" : "x"]) < p(s[e ? "s_x" : "x"] + s[e ? "s_width" : "width"])), Z = (t, s, e = !1) => t.filter((r) => p(r[e ? "s_y" : "y"]) <= p(s[e ? "s_y" : "y"]) && p(r[e ? "s_y" : "y"] + r[e ? "s_height" : "height"]) > p(s[e ? "s_y" : "y"]) || p(r[e ? "s_y" : "y"]) > p(s[e ? "s_y" : "y"]) && p(r[e ? "s_y" : "y"]) < p(s[e ? "s_y" : "y"] + s[e ? "s_height" : "height"])), se = (t, s = (r) => r, e = !1) => {
      const r = C(o.value), l = C(t);
      l.sort((_, c) => {
        const k = p(_[e ? "s_y" : "y"]), G = p(c[e ? "s_y" : "y"]);
        if (k !== G)
          return k - G;
        {
          const h = p(_[e ? "s_x" : "x"]), A = p(c[e ? "s_x" : "x"]);
          return h - A;
        }
      });
      const a = (_) => {
        H(s(r, _), _, e).forEach((k) => {
          k[e ? "s_y" : "y"] = _[e ? "s_y" : "y"] + _[e ? "s_height" : "height"], a(k);
        });
      };
      l.forEach((_) => a(r.filter((c) => c.id === _.id)[0])), r.forEach((_) => {
        o.value.filter((c) => c.id === _.id)[0][e ? "s_y" : "y"] = _[e ? "s_y" : "y"];
      });
    }, S = (t) => {
      const s = R(t);
      return delete s.showPop, delete s.showSet, s.groupData ? s.groupData.forEach((e) => {
        delete e.showPop, delete e.showSet, ve(e, s), delete e.s_width, delete e.s_height, delete e.s_x, delete e.s_y;
      }) : s.inGroupId && (delete s.showPop, delete s.showSet, ve(s, o.value.filter((e) => e.id === s.inGroupId)[0])), delete s.btnPosition, delete s.s_width, delete s.s_height, delete s.s_x, delete s.s_y, delete s.syCopy, s;
    }, o = W([]), de = () => {
      f.insertResizeKeys.forEach((t) => {
        f.excludeResizeKeys.indexOf(t) === -1 && ie.value.push(t);
      });
    };
    wt(
      () => [f.insertResizeKeys, f.excludeResizeKeys],
      () => {
        de();
      }
    );
    const ie = W([]);
    de();
    const It = () => {
      o.value.length > 0 && o.value.filter((t) => t.isGroup === !0).forEach((t) => {
        _e(t);
      });
    }, Mt = () => {
      f.xSpace !== null && f.xSpace !== void 0 ? X.value = f.xSpace / 2 : X.value = 10 / 2, f.ySpace !== null && f.ySpace !== void 0 && f.ySpace >= 0 ? U.value = f.ySpace / 2 : U.value = X.value, It();
    };
    wt(
      () => [f.xSpace, f.ySpace],
      () => {
        Mt();
      }
    );
    const X = W(0), U = W(0);
    Mt();
    const K = W(null);
    let ue = null;
    const Ae = (t) => {
      ue = t, y("baseWidthInit", ue);
    }, oe = W(1), ze = W(1), Ie = (t) => {
      oe.value = t, t < f.cssScaleMin ? ze.value = f.cssScaleMin : t > f.cssScaleMax ? ze.value = f.cssScaleMax : ze.value = t, y("changeScale", oe.value), y("changeCssScale", f.seeModel ? ze.value : 1);
    }, j = () => 1 + (oe.value - 1) * f.hScaleDiscount;
    wt(
      () => f.seeModel,
      () => {
        Ie(oe.value);
      }
    );
    const _e = (t, s = null) => {
      s ? (t.width = t.width * s, t.height = t.height * s) : (t.s_width = t.width * oe.value, t.s_height = t.height * j());
      const e = getComputedStyle(K.value), r = parseInt(e.getPropertyValue("--com-item-border-width").trim()), l = parseInt(e.getPropertyValue("--group-tit-height").trim());
      if (t.isGroup === !0)
        if (s) {
          const a = t.width, _ = t.height - (t.groupTit ? l : 0);
          t.groupData.forEach((c) => {
            c.width = a * c.groupW, c.height = _ * c.groupH, c.x = a * c.groupX, c.y = _ * c.groupY;
          });
        } else {
          const a = t.s_width - 2 * X.value - 2 * r, _ = t.s_height - 2 * U.value - 2 * r - (t.groupTit ? l : 0);
          t.groupData.forEach((c) => {
            c.s_width = a * c.groupW, c.s_height = _ * c.groupH, c.s_x = a * c.groupX, c.s_y = _ * c.groupY;
          });
        }
    }, kt = (t, s = null) => {
      s ? (t.s_x = t.x * s, t.s_y = t.y * s) : (t.s_x = t.x * oe.value, t.s_y = t.y * j());
    }, $t = (t) => {
      t.width = t.s_width / oe.value, t.height = t.s_height / j();
      const s = getComputedStyle(K.value), e = parseInt(s.getPropertyValue("--group-tit-height").trim());
      if (t.isGroup === !0) {
        const r = t.width, l = t.height - (t.groupTit ? e : 0);
        t.groupData.forEach((a) => {
          a.x = r * a.groupX, a.y = l * a.groupY;
        });
      }
    }, Me = (t) => {
      t.x = t.s_x / oe.value, t.y = t.s_y / j();
    };
    let pe = null, Et = null;
    const fe = W(0), Be = W(null), Oe = W(null), Re = W(null), Le = W(null), Ne = W(null), He = W(null), xe = (t) => {
      const s = C(t);
      if (!f.showAuxiliary || t === null)
        Be.value = null, Oe.value = null, Re.value = null, Le.value = null, Ne.value = null, He.value = null;
      else {
        const e = getComputedStyle(K.value), r = parseInt(e.getPropertyValue("--auxiliary-width").trim()), l = o.value.filter((v) => v.id !== s.id).filter((v) => parseInt(v.s_x) < parseInt(s.s_x) && parseInt(v.s_x + v.s_width) <= parseInt(s.s_x) || parseInt(v.s_x) >= parseInt(s.s_x + s.s_width)), a = l.map((v) => parseInt(v.s_y)), _ = l.map((v) => parseInt(v.s_y + v.s_height / 2)), c = l.map((v) => parseInt(v.s_y + v.s_height)), k = [...a, ..._, ...c];
        k.sort(), k.filter((v) => v === parseInt(s.s_y)).length > 0 ? Be.value = s.s_y + U.value : Be.value = null, k.filter((v) => v === parseInt(s.s_y + s.s_height / 2)).length > 0 ? Oe.value = s.s_y + s.s_height / 2 : Oe.value = null, k.filter((v) => v === parseInt(s.s_y + s.s_height)).length > 0 ? Re.value = s.s_y + s.s_height - r - U.value : Re.value = null;
        const G = o.value.filter((v) => v.id !== s.id).map((v) => parseInt(v.s_x)), h = o.value.filter((v) => v.id !== s.id).map((v) => parseInt(v.s_x + v.s_width / 2)), A = o.value.filter((v) => v.id !== s.id).map((v) => parseInt(v.s_x + v.s_width)), T = [...G, ...h, ...A];
        T.sort(), T.filter((v) => v === parseInt(s.s_x)).length > 0 ? Le.value = s.s_x + X.value : Le.value = null, T.filter((v) => v === parseInt(s.s_x + s.s_width / 2)).length > 0 ? Ne.value = s.s_x + s.s_width / 2 : Ne.value = null, T.filter((v) => v === parseInt(s.s_x + s.s_width)).length > 0 ? He.value = s.s_x + s.s_width - r - X.value : He.value = null;
      }
    }, ke = () => {
      window.removeEventListener("keydown", ke), w !== null ? Je() : E !== null && ut();
    }, J = W(!1), st = (t) => {
      let s = null;
      s = o.value.filter((e) => e.id === t)[0], s && s.static !== !0 && s.dragable !== !1 ? (J.value = !0, Dt(o.value.findIndex((e) => e.id === t)), setTimeout(() => {
        window.addEventListener("click", Ye), window.addEventListener("keydown", lt);
      }, 50), y("changeTrimModel", J.value, S(o.value.filter((e) => e.id === s.id)[0]))) : y("hasError", "未找到组件");
    }, lt = (t) => {
      switch (t.keyCode) {
        // esc、enter、space
        case 13:
        case 27:
        case 32:
          t.preventDefault(), Ye();
          break;
        // 向左
        case 37:
          t.preventDefault(), De("left");
          break;
        // 向上
        case 38:
          t.preventDefault(), De("top");
          break;
        // 向右
        case 39:
          t.preventDefault(), De("right");
          break;
        // 向下
        case 40:
          t.preventDefault(), De("bottom");
          break;
      }
    }, Ye = () => {
      window.removeEventListener("click", Ye), window.removeEventListener("keydown", lt), Je(), J.value = !1, y("changeTrimModel", J.value);
    }, n = W({});
    let w = null, rt = null, ot = null, nt = null, he = null;
    const m = W(null);
    let St = null, Ue = null, at = null, it = null, Ee = null, ce = null, we = null, Se = null;
    const Xe = () => {
      clearInterval(we), we = null, Se = null;
    }, Dt = (t, s) => {
      clearTimeout(nt), clearTimeout(he), Xe(), Ke();
      const e = m.value.getBoundingClientRect();
      if (St = e.left, Ue = e.top, at = e.bottom, it = e.height, typeof f.moveDistance == "string" ? Ee = f.moveDistance.indexOf("px") !== -1 ? parseFloat(f.moveDistance) : 50 : Ee = f.moveDistance * it, typeof f.scrollDistance == "string" ? ce = f.scrollDistance.indexOf("px") !== -1 ? parseFloat(f.scrollDistance) : 20 : ce = f.scrollDistance * it, J.value)
        he = null, w = t, n.value = C(o.value[w]), y("dragStart", S(o.value[w])), o.value[w].move = !0, xe(o.value[w]), rt = 0, ot = 0;
      else {
        const r = N(t.target, ".com-item");
        r && (he = setTimeout(() => {
          he = null, w = s, n.value = C(o.value[w]), y("dragStart", S(o.value[w])), o.value[w].move = !0, xe(o.value[w]);
          const l = r.getBoundingClientRect();
          rt = t.clientX - l.left, ot = t.clientY - l.top, window.addEventListener("mousemove", De), window.addEventListener("keydown", ke);
        }, f.dragDelayTime), window.addEventListener("mouseup", Je));
      }
    }, De = (t) => {
      clearTimeout(nt), clearTimeout(he), he = null;
      let s = null, e = null;
      if (J.value)
        switch (s = o.value[w].s_x, e = o.value[w].s_y, t) {
          case "top":
            e -= 1;
            break;
          case "bottom":
            e += 1;
            break;
          case "left":
            s -= 1;
            break;
          case "right":
            s += 1;
            break;
        }
      else
        s = t.clientX - St - rt, e = t.clientY - Ue + m.value.scrollTop - ot;
      const r = s <= ne("left") ? ne("left") : s >= ne("right") ? ne("right") : s;
      let l = e <= ne("top") ? ne("top") : e >= ne("bottom") ? ne("bottom") : e;
      const a = r - o.value[w].s_x, _ = l - o.value[w].s_y;
      let c = "";
      a > 0 ? c = "right" : a < 0 ? c = "left" : _ > 0 ? c = "bottom" : _ < 0 && (c = "top"), f.dragInBox ? (o.value[w].s_x = r, o.value[w].s_y = l) : (o.value[w].s_x = s, o.value[w].s_y = e);
      const k = () => {
        let G = H(C(o.value.filter((h) => h.move !== !0)), o.value[w], !0);
        if (G.length === 0)
          n.value.s_x = r, n.value.s_y = l;
        else
          switch (c) {
            case "top":
              const h = R(n.value);
              h.s_x = r, H(C(o.value.filter((u) => u.move !== !0)), h, !0).length === 0 && (n.value.s_x = r);
              const A = G.filter((u) => f.mobileDragModel ? p(u.s_height + u.s_y - l) > 2 * U.value : o.value[w].s_height >= u.s_height && l - u.s_y <= 15 || o.value[w].s_height < u.s_height && l - u.s_y <= o.value[w].s_height / 2);
              if (A.length > 0) {
                const u = O(C(o.value.filter((x) => x.move !== !0 && p(x.s_y + x.s_height) <= p(n.value.s_y) && A.filter((i) => i.id === x.id).length === 0)), n.value, !0);
                let b = o.value[w].s_height;
                if (u.length === 0 && (b -= Math.min(...A.map((x) => x.s_y))), G.length === A.length ? n.value.s_y = u.length === 0 ? 0 : Math.max(...u.map((x) => x.s_y + x.s_height)) : n.value.s_y = Math.max(...u.map((x) => x.s_y + x.s_height)), n.value.s_x = r, b > 0) {
                  const x = R(A);
                  A.forEach((i) => {
                    O(o.value.filter(($) => $.move !== !0 && p($.s_y) >= p(i.s_y + i.s_height)), i, !0).forEach(($) => {
                      x.filter((_t) => _t.id === $.id).length === 0 && x.push(C($));
                    });
                  }), x.forEach((i) => {
                    G.length !== A.length && A.filter((I) => I.id === i.id).length === 1 && (i.s_y = n.value.s_y), i.s_y += b, o.value.filter((I) => I.id === i.id)[0].s_y = i.s_y;
                  });
                }
              }
              break;
            case "bottom":
              const T = R(n.value);
              T.s_x = r, H(C(o.value.filter((u) => u.move !== !0)), T, !0).length === 0 && (n.value.s_x = r);
              const v = G.filter((u) => f.mobileDragModel ? p(l + o.value[w].s_height - u.s_y) > 2 * U.value : o.value[w].s_height >= u.s_height && u.s_y + u.s_height - l - o.value[w].s_height <= 15 || o.value[w].s_height < u.s_height && u.s_y + u.s_height - l - o.value[w].s_height <= u.s_height / 2);
              if (v.length > 0) {
                v.forEach((x) => {
                  const i = O(C(o.value.filter((I) => I.move !== !0 && p(I.s_y + I.s_height) <= p(x.s_y))), x, !0);
                  x.s_y = i.length === 0 ? 0 : Math.max(...i.map((I) => I.s_y + I.s_height)), o.value.filter((I) => I.id === x.id)[0].s_y = x.s_y;
                });
                const u = [...H(v, o.value[w], !0), ...O(C(o.value.filter((x) => x.move !== !0 && p(x.s_y + x.s_height) <= p(o.value[w].s_y + o.value[w].s_height))), o.value[w], !0)];
                let b = Math.max(...u.map((x) => x.s_y + x.s_height)) - n.value.s_y;
                if (n.value.s_y = Math.max(...u.map((x) => x.s_y + x.s_height)), n.value.s_x = r, b > 0) {
                  const x = O(o.value.filter((i) => i.move !== !0 && p(i.s_y) >= p(n.value.s_y)), n.value, !0);
                  C(x).forEach((i) => {
                    O(o.value.filter(($) => $.move !== !0 && p($.s_y) >= p(i.s_y + i.s_height)), i, !0).forEach(($) => {
                      x.filter((_t) => _t.id === $.id).length === 0 && x.push(C($));
                    });
                  }), x.forEach((i) => {
                    i.s_y += b, o.value.filter((I) => I.id === i.id)[0].s_y = i.s_y;
                  });
                }
              }
              break;
            case "left":
            case "right":
              const B = G.filter((u) => u.s_x + u.s_width - r >= X.value * 3 && r + o.value[w].s_width - u.s_x >= X.value * 3).filter((u) => l < u.s_y || l >= u.s_y && l - u.s_y <= 15).sort((u, b) => {
                const x = p(u.s_y), i = p(b.s_y);
                return x - i;
              });
              if (B.length > 0)
                n.value.s_x = r, n.value.s_y = Math.min(...B.map((u) => u.s_y));
              else {
                let u = C(o.value[w]);
                if (u.s_y = Math.min(...G.map((b) => b.s_y)) - u.s_height, n.value.s_y >= Math.min(...G.map((b) => b.s_y + b.s_height)) || u.s_y >= 0 && H(C(o.value.filter((b) => b.move !== !0)), u, !0).length === 0) {
                  const b = R(n.value);
                  b.s_x = r, H(C(o.value.filter((x) => x.move !== !0)), b, !0).length === 0 && (n.value.s_x = r);
                }
              }
              B.forEach((u) => {
                const b = n.value.s_y + n.value.s_height - u.s_y > 0 ? n.value.s_y + n.value.s_height - u.s_y : 0, x = R([u]);
                O(o.value.filter((I) => I.move !== !0 && p(I.s_y) >= p(u.s_y + u.s_height)), u, !0).forEach((I) => {
                  x.filter(($) => $.id === I.id).length === 0 && x.push(C(I));
                }), x.forEach((I) => {
                  I.s_y += b, B.filter(($) => $.id === I.id).length === 1 && (B.filter(($) => $.id === I.id)[0].s_y = I.s_y), o.value.filter(($) => $.id === I.id)[0].s_y = I.s_y;
                });
              });
              break;
          }
        o.value.forEach((h) => {
          Me(h);
        }), Me(n.value), re(!1), xe(o.value[w]), y("dragIng"), n.value.s_y = o.value[w].syCopy, delete o.value[w].syCopy;
      };
      if (J.value) {
        let G = null;
        G = F(K.value, "i" + o.value[w].id + "d")[0].getBoundingClientRect().top, G - Ue <= Ee && c === "top" && (m.value.scrollTop = m.value.scrollTop - ce), at - G <= Ee && c === "bottom" && (m.value.scrollTop = m.value.scrollTop + ce), k();
      } else {
        const G = () => {
          const h = m.value.scrollTop;
          Se === "top" ? (m.value.scrollTop = m.value.scrollTop - ce, h <= ce ? (Xe(), l = 0) : l -= ce) : (m.value.scrollTop = m.value.scrollTop + ce, l += ce), o.value[w].s_y = l, k();
        };
        Se === "top" && c === "bottom" && Xe(), t.clientY - Ue <= Ee && c === "top" && !we && (k(), Se = "top", we = setInterval(G, 100)), Se === "bottom" && c === "top" && Xe(), at - t.clientY <= Ee && c === "bottom" && !we && (k(), Se = "bottom", we = setInterval(G, 100)), we || k();
      }
    }, Je = () => {
      if (window.removeEventListener("mouseup", Je), clearTimeout(he), he)
        he = null;
      else {
        if (Xe(), window.removeEventListener("mousemove", De), f.adsorbSpace > 0) {
          let t = !1;
          if ((n.value.s_x === 0 || n.value.s_x === ne("right")) && (t = !0), !t) {
            const s = Z(C(o.value.filter((e) => e.move !== !0 && p(e.s_x + e.s_width) <= p(n.value.s_x))), n.value, !0).filter((e) => parseInt(n.value.s_x) - parseInt(e.s_x + e.s_width) <= f.adsorbSpace);
            s.length > 0 && (n.value.s_x = Math.max(...s.map((e) => e.s_x + e.s_width)), t = !0);
          }
          if (!t) {
            let s = [];
            O(C(o.value.filter((e) => e.move !== !0 && (p(e.s_y + e.s_height) === p(n.value.s_y) || p(e.s_y) === p(n.value.s_y + n.value.s_height)))), n.value, !0).forEach((e) => {
              Math.abs(parseInt(e.s_x) - parseInt(n.value.s_x)) <= f.adsorbSpace && s.push(e.s_x), Math.abs(parseInt(e.s_x + e.s_width / 2) - parseInt(n.value.s_x)) <= f.adsorbSpace && s.push(e.s_x + e.s_width / 2), Math.abs(parseInt(e.s_x + e.s_width) - parseInt(n.value.s_x)) <= f.adsorbSpace && s.push(e.s_x + e.s_width);
            }), s.length > 0 && (n.value.s_x = Math.min(ne("right"), ...s), t = !0);
          }
          if (!t) {
            const s = Z(C(o.value.filter((e) => e.move !== !0 && p(n.value.s_x + n.value.s_width) <= p(e.s_x))), n.value, !0).filter((e) => parseInt(e.s_x) - parseInt(n.value.s_x + n.value.s_width) <= f.adsorbSpace);
            s.length > 0 && (n.value.s_x = Math.min(...s.map((e) => e.s_x)) - n.value.s_width, t = !0);
          }
          if (!t) {
            let s = [];
            O(C(o.value.filter((e) => e.move !== !0 && (p(e.s_y + e.s_height) === p(n.value.s_y) || p(e.s_y) === p(n.value.s_y + n.value.s_height)))), n.value, !0).forEach((e) => {
              Math.abs(parseInt(e.s_x) - parseInt(n.value.s_x + n.value.s_width)) <= f.adsorbSpace && s.push(e.s_x), Math.abs(parseInt(e.s_x + e.s_width / 2) - parseInt(n.value.s_x + n.value.s_width)) <= f.adsorbSpace && s.push(e.s_x + e.s_width / 2), Math.abs(parseInt(e.s_x + e.s_width) - parseInt(n.value.s_x + n.value.s_width)) <= f.adsorbSpace && s.push(e.s_x + e.s_width);
            }), s.length > 0 && (n.value.s_x = Math.max(n.value.s_width, ...s) - n.value.s_width, t = !0);
          }
        }
        delete o.value[w].move, o.value[w].s_x = n.value.s_x, o.value[w].s_y = n.value.s_y, xe(null), o.value.forEach((t) => {
          Me(t);
        }), re(), y("dragEnd", S(o.value[w])), w = null, ke(), nt = setTimeout(() => {
          re();
        }, 500);
      }
    }, ne = (t) => {
      switch (t) {
        case "top":
          return 0;
        case "right":
          return pe - X.value * 2 - o.value[w].s_width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let E = null, ae = "", Qe = 0, Ze = 0, $e = 0, We = 0, je = 0, Ve = 0;
    const ge = (t, s, e) => {
      Ke(), n.value = C(s), E = s, y("resizeStart", S(E)), ae = e, Qe = t.clientX, Ze = t.clientY, $e = s.s_width, We = s.s_height, je = s.s_y, Ve = s.s_x, E.drag = !0, xe(E), window.addEventListener("mousemove", Pt), window.addEventListener("mouseup", ut), window.addEventListener("keydown", ke);
    }, Pt = (t) => {
      const s = $e + (t.clientX - Qe), e = We + (t.clientY - Ze), r = $e - (t.clientX - Qe), l = We - (t.clientY - Ze), a = je + (t.clientY - Ze), _ = Ve + (t.clientX - Qe), c = (typeof n.value.itemMinWidth == "number" ? n.value.itemMinWidth : f.itemMinWidth) * oe.value, k = (typeof n.value.itemMinHeight == "number" ? n.value.itemMinHeight : f.itemMinHeight) * j();
      ae.indexOf("top") !== -1 ? (n.value.s_height = l < k ? k : l > le("top") ? le("top") : l, n.value.s_y = l < k ? je + We - k : l > le("top") ? 0 : a) : ae.indexOf("bottom") !== -1 && (n.value.s_height = e < k ? k : e > le("bottom") ? le("bottom") : e), ae.indexOf("left") !== -1 ? (n.value.s_width = r < c ? c : r > le("left") ? le("left") : r, n.value.s_x = r < c ? Ve + $e - c : r > le("left") ? 0 : _) : ae.indexOf("right") !== -1 && (n.value.s_width = s < c ? c : s > le("right") ? le("right") : s);
      let G = H(C(o.value.filter((B) => B.drag !== !0)), n.value, !0), h = [];
      if (ae.indexOf("top") !== -1) {
        const B = Math.abs(p(n.value.s_y - E.s_y)) > U.value * 2, u = [];
        let b = null;
        const x = o.value.filter((i) => i.id !== E.id).filter((i) => parseInt(i.s_x) < parseInt(n.value.s_x) && parseInt(i.s_x + i.s_width) <= parseInt(n.value.s_x) || parseInt(i.s_x) >= parseInt(n.value.s_x + n.value.s_width)).filter((i) => {
          let I = !1;
          return Math.abs(parseInt(n.value.s_y) - parseInt(i.s_y)) <= f.adsorbSpace && (u.push(i.s_y), I = !0), Math.abs(parseInt(n.value.s_y) - parseInt(i.s_y + i.s_height / 2)) <= f.adsorbSpace && (u.push(i.s_y + i.s_height / 2), I = !0), Math.abs(parseInt(n.value.s_y) - parseInt(i.s_y + i.s_height)) <= f.adsorbSpace && (u.push(i.s_y + i.s_height), I = !0), I;
        });
        b = be(u, n.value.s_y, !1), (x.length > 0 || B || n.value.s_y === 0 || n.value.s_height === k) && (E.s_height = (b ? n.value.s_y - b : 0) + n.value.s_height, E.s_y = b || n.value.s_y, G.length > 0 && (h = [...h, ...O(G, E, !0)]));
      } else if (ae.indexOf("bottom") !== -1) {
        const B = Math.abs(p(n.value.s_height - E.s_height)) > U.value * 2, u = [];
        let b = null;
        const x = o.value.filter((i) => i.id !== E.id).filter((i) => parseInt(i.s_x) < parseInt(n.value.s_x) && parseInt(i.s_x + i.s_width) <= parseInt(n.value.s_x) || parseInt(i.s_x) >= parseInt(n.value.s_x + n.value.s_width)).filter((i) => {
          let I = !1;
          return Math.abs(parseInt(n.value.s_y + n.value.s_height) - parseInt(i.s_y)) <= f.adsorbSpace && (u.push(i.s_y - n.value.s_y), I = !0), Math.abs(parseInt(n.value.s_y + n.value.s_height) - parseInt(i.s_y + i.s_height / 2)) <= f.adsorbSpace && (u.push(i.s_y + i.s_height / 2 - n.value.s_y), I = !0), Math.abs(parseInt(n.value.s_y + n.value.s_height) - parseInt(i.s_y + i.s_height)) <= f.adsorbSpace && (u.push(i.s_y + i.s_height - n.value.s_y), I = !0), I;
        });
        b = be(u, n.value.s_height), (x.length > 0 || B || n.value.s_height === k) && (E.s_height = b || n.value.s_height, G.length > 0 && (h = [...h, ...O(G, E, !0)]));
      }
      if (ae.indexOf("left") !== -1) {
        const B = Math.abs(p(n.value.s_x - E.s_x)) > X.value * 2, u = [];
        let b = null;
        const x = o.value.filter((i) => i.id !== E.id).filter((i) => {
          let I = !1;
          return Math.abs(parseInt(n.value.s_x) - parseInt(i.s_x)) <= f.adsorbSpace && (u.push(i.s_x), I = !0), Math.abs(parseInt(n.value.s_x) - parseInt(i.s_x + i.s_width / 2)) <= f.adsorbSpace && (u.push(i.s_x + i.s_width / 2), I = !0), Math.abs(parseInt(n.value.s_x) - parseInt(i.s_x + i.s_width)) <= f.adsorbSpace && (u.push(i.s_x + i.s_width), I = !0), I;
        });
        b = be(u, n.value.s_x, !1), (x.length > 0 || B || n.value.s_x === 0 || n.value.s_width === c) && (E.s_width = (b ? n.value.s_x - b : 0) + n.value.s_width, E.s_x = b || n.value.s_x, G.length > 0 && (h = [...h, ...Z(G, E, !0)]));
      } else if (ae.indexOf("right") !== -1) {
        const B = Math.abs(p(n.value.s_width - E.s_width)) > X.value * 2, u = [];
        let b = null;
        const x = o.value.filter((i) => i.id !== E.id).filter((i) => {
          let I = !1;
          return Math.abs(parseInt(n.value.s_x + n.value.s_width) - parseInt(i.s_x)) <= f.adsorbSpace && (u.push(i.s_x - n.value.s_x), I = !0), Math.abs(parseInt(n.value.s_x + n.value.s_width) - parseInt(i.s_x + i.s_width / 2)) <= f.adsorbSpace && (u.push(i.s_x + i.s_width / 2 - n.value.s_x), I = !0), Math.abs(parseInt(n.value.s_x + n.value.s_width) - parseInt(i.s_x + i.s_width)) <= f.adsorbSpace && (u.push(i.s_x + i.s_width - n.value.s_x), I = !0), I;
        });
        b = be(u, n.value.s_width), (x.length > 0 || B || n.value.s_width === le("right") || n.value.s_width === c) && (E.s_width = b || n.value.s_width, G.length > 0 && (h = [...h, ...Z(G, E, !0)]));
      }
      if (h.length > 0) {
        h.sort((B, u) => {
          const b = p(B.s_y), x = p(u.s_y);
          return b - x;
        });
        for (let B = 0; B < h.length; B++)
          h.filter((u) => u.id === h[B].id).forEach((u) => {
            u.s_y += E.s_y + E.s_height - u.s_y, o.value.filter((b) => b.id === u.id)[0].s_y = u.s_y, se([u], (b, x) => b.filter((i) => i.drag !== !0 && i.id !== x.id), !0);
          });
      }
      const A = getComputedStyle(K.value), T = parseInt(A.getPropertyValue("--com-item-border-width").trim()), v = parseInt(A.getPropertyValue("--group-tit-height").trim());
      if (E.isGroup === !0) {
        const B = E.s_width - 2 * X.value - 2 * T, u = E.s_height - 2 * U.value - 2 * T - (E.groupTit ? v : 0);
        E.groupData.forEach((b) => {
          b.s_width = B * b.groupW, b.s_height = u * b.groupH, b.s_x = B * b.groupX, b.s_y = u * b.groupY;
        });
      }
      $t(E), o.value.forEach((B) => {
        Me(B);
      }), re(!1), xe(E), y("resizeIng");
    }, ut = (t) => {
      delete E.drag, ae = "", xe(null), window.removeEventListener("mousemove", Pt), window.removeEventListener("mouseup", ut), re(), y("resizeEnd", S(E)), E = null, ke();
    }, le = (t) => {
      switch (t) {
        case "top":
          return je + We;
        case "left":
          return Ve + $e;
        case "right":
          return pe - X.value * 2 - Ve;
        case "bottom":
          return 999999999;
      }
    }, re = (t = !0) => {
      t === !0 && se(o.value, (e, r) => e.filter((l) => l.id !== r.id)), Wt(t), o.value.forEach((e) => {
        (t === !0 || e.move !== !0 && e.drag !== !0) && kt(e);
      }), t === !0 && Vt();
      const s = o.value.map((e) => {
        if (e.move === !0) {
          const r = C(e);
          return r.s_y = n.value.s_y, Me(r), r.y + e.height;
        } else
          return e.y + e.height;
      });
      s.length > 0 ? fe.value = Math.max(...s) : fe.value = 0;
    }, Wt = (t = !0) => {
      const s = C(o.value).sort((e, r) => {
        const l = p(e.y), a = p(r.y);
        return l - a;
      });
      if (!t) {
        if (E !== null) {
          const e = O(R(s.filter((l) => l.drag !== !0 && p(l.s_y + l.s_height) < p(E.s_y))), E), r = s.filter((l) => l.drag === !0)[0];
          r && (e.length > 0 ? (r.height += r.y - Math.max(...e.map((l) => l.y + l.height)), r.y = Math.max(...e.map((l) => l.y + l.height))) : (r.height += r.y, r.y = 0));
        } else if (w !== null) {
          const e = s.filter((r) => r.move === !0)[0];
          e && (e.s_x = n.value.s_x, e.s_y = n.value.s_y, Me(e));
        }
      }
      for (let e = 0; e < s.length; e++) {
        const r = O(s, s[e]).filter((l) => p(l.y + l.height) <= p(s[e].y));
        r.length > 0 ? s[e].y = Math.max(...r.map((l) => l.y + l.height)) : s[e].y = 0;
      }
      s.forEach((e) => {
        t === !0 || e.move !== !0 && e.drag !== !0 ? o.value.filter((r) => r.id === e.id)[0].y = e.y : e.move === !0 && (o.value.filter((r) => r.id === e.id)[0].syCopy = e.y * j());
      });
    }, Vt = () => {
      const t = o.value.filter((s) => s.isGroup === !0);
      if (t.length > 0) {
        const s = getComputedStyle(K.value), e = parseInt(s.getPropertyValue("--setting-icon-group-width").trim()), r = parseInt(s.getPropertyValue("--setting-icon-group-height").trim());
        t.forEach((l) => {
          X.value + l.s_x + l.s_width + e > pe ? X.value + l.s_x - e < 0 ? f.groupBtnPosMore ? U.value + l.s_y - r < 0 ? l.btnPosition = "bottom" : l.btnPosition = "top" : l.btnPosition = "center" : l.btnPosition = "left" : l.btnPosition = "right";
        });
      }
    }, Ct = new ResizeObserver((t) => {
      Ut(pe === t[0].borderBoxSize[0].inlineSize ? null : t[0].borderBoxSize[0].inlineSize, Et === t[0].borderBoxSize[0].blockSize ? null : t[0].borderBoxSize[0].blockSize);
    });
    ss(() => {
      Ct.observe(K.value);
    });
    const Fe = W("");
    let ht = 0, ct = 0, dt = null, pt = !1;
    const Ft = (t = [], s = null) => {
      clearInterval(dt), Fe.value = (/* @__PURE__ */ new Date()).getTime() + "", ht = 0, ct = 0;
      let e = [];
      t.forEach((r) => {
        ht += 1, r.isGroup === !0 && (ct += r.groupData.length), (r.y === void 0 || r.y === null) && (e.findIndex((l) => l.id === r.id) === -1 && e.push(R(r)), r.y = 0), (r.x === void 0 || r.x === null) && (e.findIndex((l) => l.id === r.id) === -1 && e.push(R(r)), r.x = 0);
      }), e.length > 0 && y("dealError", e), Bt(), y("domStart"), o.value = R(t), o.value.filter((r) => r.isGroup === !0).forEach((r) => {
        if (r.groupData.length < 2)
          qe(r.id);
        else {
          const l = et(r.groupData, r);
          me(l);
        }
      }), pt = !0, Nt(() => {
        const r = K.value.getBoundingClientRect();
        s != null && o.value.length > 0 ? (Ae(s), Ie(r.width / s)) : (Ae(o.value.length > 0 ? r.width : null), Ie(1)), o.value.forEach((l) => {
          _e(l);
        }), re(), dt = setInterval(() => {
          F(K.value, Fe.value + "p").length === ht && F(K.value, Fe.value + "c").length === ct && (clearInterval(dt), y("domReady"));
        }, 10), setTimeout(() => {
          pt = !1;
        }, 500);
      });
    }, Kt = (t) => {
      t.showSet = !0;
    }, ft = (t) => {
      const s = o.value.filter((e) => e.id === t);
      s.length === 1 ? delete s[0].showSet : y("hasError", "未找到组件");
    }, Tt = (t, s, e) => {
      const r = Xt(t), l = Xt(s), a = as(l, r, e);
      if (a)
        t.x = a.x, t.y = a.y;
      else {
        t.x = 0;
        const _ = l.map((c) => c.y + c.height);
        _.length > 0 ? t.y = Math.max(..._) : y("hasError", "组件宽度太大");
      }
    }, Pe = (t, s = null, e = !1) => {
      const r = R(t), l = o.value.filter((a) => a.id === s);
      if (r.id || (r.id = (/* @__PURE__ */ new Date()).getTime() + ""), s && l.length !== 1) {
        y("hasError", "未找到组件");
        return;
      }
      if (e !== !0 && (delete r.x, delete r.y, s ? (l[0].groupData.forEach((a) => {
        ve(a, l[0]);
      }), Tt(r, l[0].groupData, l[0].width)) : Tt(r, o.value, (ue || pe) - X.value * 2)), s) {
        l[0].groupData.push(r);
        const a = et(l[0].groupData, l[0]);
        me(a), se([a], (_, c) => _.filter((k) => k.id !== c.id));
      } else
        r.x !== void 0 && r.y !== void 0 && (o.value.length === 0 && Ae(pe), _e(r), o.value.push(r));
      re();
    }, gt = (t, s = null, e = null) => {
      let r = null;
      const l = o.value.filter((a) => a.id === s);
      return s ? l.length === 1 && (r = R(l[0].groupData.filter((a) => a.id === t)[0])) : r = R(o.value.filter((a) => a.id === t)[0]), r ? (r.id = e || (/* @__PURE__ */ new Date()).getTime() + "", s ? (ve(r, l[0]), Pe(r, s)) : Pe(r), S(s ? o.value.filter((a) => a.id === s)[0].groupData.filter((a) => a.id === r.id)[0] : o.value.filter((a) => a.id === r.id)[0])) : (y("hasError", "未找到组件"), null);
    }, Ce = (t, s = null, e = !0) => {
      let r = -1;
      const l = o.value.filter((a) => a.id === s);
      if (s ? l.length === 1 && (r = l[0].groupData.findIndex((a) => a.id === t)) : r = o.value.findIndex((a) => a.id === t), r !== -1) {
        if (s)
          if (l[0].groupData.splice(r, 1), l[0].groupData.length === 1)
            qe(s);
          else {
            l[0].groupData.forEach((_) => {
              ve(_, l[0]);
            });
            const a = et(l[0].groupData, l[0]);
            me(a);
          }
        else
          o.value.splice(r, 1), o.value.length === 0 && e && (Ae(null), Ie(1));
        e && re();
      } else
        y("hasError", "未找到组件");
    }, qt = (t) => {
      me(t, !1);
    }, me = (t, s = !0) => {
      if (t.id) {
        const e = R(t);
        let r = -1;
        const l = o.value.filter((a) => a.id === e.inGroupId);
        if (e.inGroupId ? l.length === 1 && (r = l[0].groupData.findIndex((a) => a.id === e.id)) : r = o.value.findIndex((a) => a.id === e.id), r !== -1) {
          if (s && (delete e.showPop, delete e.showSet, delete e.btnPosition, e.groupData && e.groupData.forEach((a) => {
            delete a.showPop, delete a.showSet;
          })), e.inGroupId) {
            if (s)
              l[0].groupData[r] = e;
            else
              try {
                delete l[0].showPop, delete l[0].showSet, delete l[0].btnPosition, l[0].groupData && l[0].groupData.forEach((a) => {
                  delete a.showPop, delete a.showSet;
                });
                for (let a in e) {
                  const _ = a.split(".");
                  let c = l[0].groupData[r];
                  for (let k = 0; k < _.length; k++)
                    if (k === _.length - 1)
                      c[_[k]] = e[a];
                    else if (c = c[_[k]], !c)
                      throw new Error(a);
                }
              } catch (a) {
                y("hasError", "数据key: " + (a + "").replace("Error: ", "") + " 不存在");
              }
            _e(l[0]);
          } else {
            if (s)
              o.value[r] = e;
            else
              try {
                delete o.value[r].showPop, delete o.value[r].showSet, delete o.value[r].btnPosition, o.value[r].groupData && o.value[r].groupData.forEach((a) => {
                  delete a.showPop, delete a.showSet;
                });
                for (let a in e) {
                  const _ = a.split(".");
                  let c = o.value[r];
                  for (let k = 0; k < _.length; k++)
                    if (k === _.length - 1)
                      c[_[k]] = e[a];
                    else if (c = c[_[k]], !c)
                      throw new Error(a);
                }
              } catch (a) {
                y("hasError", "数据key: " + (a + "").replace("Error: ", "") + " 不存在");
              }
            _e(o.value[r]);
          }
          re();
        } else
          y("hasError", "未找到组件");
      } else
        y("hasError", "未找到组件");
    }, vt = (t, s = !1) => {
      let e = null;
      return e = o.value.filter((r) => r.id === t)[0], e ? (typeof s == "boolean" ? e.static = s : s && typeof s == "object" && (typeof s.static == "boolean" && (e.static = s.static), typeof s.dragable == "boolean" && (e.dragable = s.dragable), typeof s.resizable == "boolean" && (e.resizable = s.resizable)), S(o.value.filter((r) => r.id === e.id)[0])) : (y("hasError", "未找到组件"), null);
    }, Ut = (t, s) => {
      t !== null && (pe = t, pt || (Ie(ue && pe ? t / ue : 1), o.value.forEach((e) => {
        _e(e);
      }), re())), s !== null && (Et = s);
    }, Gt = (t) => {
      t.showPop || (o.value.forEach((s) => {
        delete s.showPop, s.groupData && s.groupData.forEach((e) => {
          delete e.showPop;
        });
      }), y("openSetMenu", S(t)), t.showPop = !0, window.addEventListener("click", Ke));
    }, Ke = () => {
      o.value.forEach((t) => {
        delete t.showPop, t.groupData && t.groupData.forEach((s) => {
          delete s.showPop;
        });
      }), window.removeEventListener("click", Ke);
    }, ee = W(!1), At = (t) => {
      const s = o.value.findIndex((e) => e.id === t);
      s !== -1 ? (o.value[s].checked = !0, o.value[s].checkDis = !0, ee.value = !0, y("showGroup", ee.value)) : y("hasError", "未找到组件");
    }, yt = () => {
      ee.value = !1, o.value.forEach((t) => {
        delete t.checked, delete t.checkDis, t.groupData && t.groupData.forEach((s) => {
          delete s.checked, delete s.checkDis;
        });
      }), y("showGroup", ee.value);
    }, Jt = (t) => {
      t.checked = !t.checked, y("updateChecked", o.value.filter((s) => s.checked).length);
    }, et = (t, s) => {
      const e = R(t), r = R(s);
      e.sort((h, A) => {
        const T = p(h.x), v = p(A.x);
        return T - v;
      });
      for (let h = 0; h < e.length - 1; h++) {
        if (h === 0 && e[h].x > 0) {
          const A = e[h].x;
          for (let T = h; T < e.length; T++)
            e[T].x -= A;
        }
        if (e[h + 1].x > e[h].x + e[h].width) {
          const A = C(e.slice(0, h + 1));
          if (e[h + 1].x > Math.max(...A.map((T) => T.x + T.width))) {
            const T = e[h + 1].x - Math.max(...A.map((v) => v.x + v.width));
            for (let v = h + 1; v < e.length; v++)
              e[v].x -= T;
          }
        }
      }
      e.sort((h, A) => {
        const T = p(h.y), v = p(A.y);
        return T - v;
      });
      for (let h = 0; h < e.length - 1; h++) {
        if (h === 0 && e[h].y > 0) {
          const A = e[h].y;
          for (let T = h; T < e.length; T++)
            e[T].y -= A;
        }
        if (e[h + 1].y > e[h].y + e[h].height) {
          const A = C(e.slice(0, h + 1));
          if (e[h + 1].y > Math.max(...A.map((T) => T.y + T.height))) {
            const T = e[h + 1].y - Math.max(...A.map((v) => v.y + v.height));
            for (let v = h + 1; v < e.length; v++)
              e[v].y -= T;
          }
        }
      }
      const l = e.map((h) => h.x + h.width), a = Math.max(...l), _ = e.map((h) => h.y + h.height), c = Math.max(..._);
      e.forEach((h) => {
        h.inGroupId || (h.inGroupId = r.id), h.groupW = h.width / a, h.groupH = h.height / c, h.groupX = h.x / a, h.groupY = h.y / c, h.isObstacle = h.x + h.width === a && h.y === 0, delete h.width, delete h.height;
      });
      const k = getComputedStyle(K.value), G = parseInt(k.getPropertyValue("--group-tit-height").trim());
      return r.width = a, r.height = c + (r.groupTit ? G : 0), r.groupData = [...e], r;
    }, ve = (t, s) => {
      const e = getComputedStyle(K.value), r = parseInt(e.getPropertyValue("--group-tit-height").trim());
      t.width = s.width * t.groupW, t.height = (s.height - (s.groupTit ? r : 0)) * t.groupH;
    }, Qt = () => {
      Nt(() => {
        It();
      });
    }, Zt = () => {
      let t = o.value.filter((s) => s.checked);
      if (t.length > 1)
        if (t = f.beforeAddGroup(R(t)), typeof t == "object" && t instanceof Array && t.length > 0 && t.filter((s) => s.id).length === t.length) {
          const s = {
            id: (/* @__PURE__ */ new Date()).getTime() + "G",
            isGroup: !0,
            groupTit: ""
          }, e = et(t, s);
          return e.groupData.forEach((r) => {
            Ce(r.id, null, !1);
          }), Pe(e), yt(), S(o.value.filter((r) => r.id === e.id)[0]);
        } else
          return y("hasError", "自定义方法抛出数据格式不正确"), null;
      else
        return yt(), null;
    }, zt = (t, s) => {
      const e = o.value.filter((r) => r.id === s)[0];
      if (e) {
        let r = e.groupData.filter((l) => l.id === t)[0];
        return r ? e.groupData.length === 2 ? qe(s) : (r = f.beforeRemoveGroup(R([r])), typeof r == "object" && r instanceof Array && r.length === 1 && r.filter((l) => l.id).length === 1 ? (r = r[0], ve(r, e), delete r.inGroupId, delete r.groupW, delete r.groupH, delete r.groupX, delete r.groupY, delete r.isObstacle, Ce(r.id, e.id), Pe(r), [S(o.value.filter((l) => l.id === t)[0])]) : (y("hasError", "自定义方法抛出数据格式不正确"), [])) : (y("hasError", "未找到组件"), []);
      } else
        return y("hasError", "未找到组件"), [];
    }, qe = (t) => {
      const s = o.value.filter((e) => e.id === t)[0];
      if (s) {
        let e = [], r = !0;
        try {
          s.groupData.forEach((l) => {
            if (l = f.beforeRemoveGroup(R([s])), typeof l == "object" && l instanceof Array && l.length === 1 && l.filter((a) => a.id).length === 1)
              l = l[0];
            else
              throw r = !1, new Error();
          });
        } catch {
          y("hasError", "自定义方法抛出数据格式不正确");
        }
        if (r) {
          Ce(s.id, null, !1), s.groupData.forEach((a) => {
            ve(a, s), a.x += s.x, a.y += s.y, delete a.inGroupId, delete a.groupW, delete a.groupH, delete a.groupX, delete a.groupY, delete a.isObstacle, e.push(a.id), Pe(a, null, !0);
          });
          let l = [];
          return e.forEach((a) => {
            l.push(S(o.value.filter((_) => _.id === a)[0]));
          }), l;
        } else
          return [];
      } else
        return y("hasError", "未找到组件"), [];
    }, jt = (t = "", s) => {
      const e = o.value.filter((r) => r.id === s)[0];
      if (e) {
        if (!e.groupTit || !t) {
          const r = getComputedStyle(K.value), l = parseInt(r.getPropertyValue("--group-tit-height").trim());
          e.groupTit && !t && (e.height -= l, e.s_height -= l * j()), !e.groupTit && t && (e.height += l, e.s_height += l * j());
        }
        e.groupTit = t, se([e], (r, l) => r.filter((a) => a.id !== l.id)), re();
      } else
        y("hasError", "未找到组件");
    }, Bt = () => {
      o.value = [], Ae(null), Ie(1), fe.value = 0;
    }, mt = (t = null) => new Promise((s, e) => {
      o.value.forEach((l) => {
        delete l.showPop, delete l.showSet, l.groupData && l.groupData.forEach((a) => {
          delete a.showPop, delete a.showSet;
        });
      });
      const r = R(o.value);
      r.forEach((l) => {
        l.isGroup === !0 && l.groupData.forEach((a) => {
          ve(a, l), delete a.s_width, delete a.s_height, delete a.s_x, delete a.s_y;
        }), delete l.btnPosition, delete l.s_width, delete l.s_height, delete l.s_x, delete l.s_y;
      }), t && ue && r.forEach((l) => {
        _e(l, t / ue), kt(l, t / ue);
      }), s({ data: r, width: t || ue });
    });
    return ls(() => {
      Ct.unobserve(K.value), window.removeEventListener("click", Ke), window.removeEventListener("click", Ye), window.removeEventListener("keydown", lt), window.removeEventListener("keydown", ke);
    }), M({ init: Ft, addItem: Pe, copyItem: gt, deleteItem: Ce, updateItem: qt, toggleLockItem: vt, hideGroupSet: ft, openGroup: At, closeGroup: yt, changeGroupBorder: Qt, addGroup: Zt, removeGroupItem: zt, removeGroup: qe, changeGroupTit: jt, openTrimModel: st, closeTrimModel: Ye, resetData: Bt, getData: mt }), (t, s) => (D(), P("div", {
      class: "vue-drag-component-plus",
      style: Q({ "--item-scale": g(oe), "--css-scale": d.seeModel ? g(ze) : 1, "--com-x-space": g(X) + "px", "--com-y-space": g(U) + "px" }),
      ref_key: "pageRef",
      ref: K
    }, [
      Y("div", {
        class: "content-box",
        ref_key: "contentBoxRef",
        ref: m
      }, [
        s[1] || (s[1] = Y("div", { class: "content-box-top" }, null, -1)),
        Y("div", is, [
          (D(!0), P(Te, null, bt(g(o), (e, r) => (D(), P("div", {
            class: ye([
              "com-item",
              g(w) !== null || g(E) ? "" : "not-move-animate",
              e.move ? "is-move" : "",
              e.drag ? "is-drag" : "",
              e.showPop || e.isGroup && e.groupData.filter((l) => l.showPop).length > 0 ? "on-top" : "",
              // 初始化标记
              g(Fe) + "p",
              // 查找时唯一标识
              "i" + e.id + "d"
            ]),
            style: Q({
              width: e.s_width + "px",
              height: e.s_height + "px",
              top: e.s_y + "px",
              left: e.s_x + "px"
            }),
            key: r
          }, [
            Y("div", {
              class: ye([
                "com-item-inner",
                d.seeModel || g(J) || g(ee) || e.static === !0 || e.dragable === !1 ? "" : "can-drag",
                e.move || e.drag ? "always-hover" : "",
                d.seeModel ? "no-hover" : ""
              ]),
              onMousedown: q((l) => d.seeModel || g(J) || g(ee) || e.static === !0 || e.dragable === !1 ? null : Dt(l, r), ["prevent"]),
              onMouseenter: (l) => d.seeModel || g(J) || g(ee) || g(w) !== null || g(E) || !e.isGroup ? null : Kt(e),
              onMouseleave: (l) => d.seeModel || g(J) || g(ee) || g(w) !== null || g(E) || !e.isGroup ? null : ft(e.id)
            }, [
              Y("div", hs, [
                e.isGroup ? (D(), P(Te, { key: 0 }, [
                  e.groupTit ? (D(), P("div", {
                    key: 0,
                    class: "group-item-tit",
                    title: e.groupTit
                  }, te(e.groupTit), 9, cs)) : z("", !0),
                  Y("div", {
                    class: ye(["group-item-content", e.groupTit ? "" : "full"])
                  }, [
                    (D(!0), P(Te, null, bt(e.groupData, (l, a) => (D(), P("div", {
                      class: ye([
                        "com-item-box-child",
                        l.isObstacle ? "is-obstacle" : "",
                        g(Fe) + "c"
                      ]),
                      style: Q({
                        width: l.s_width + "px",
                        height: l.s_height + "px",
                        top: l.s_y + "px",
                        left: l.s_x + "px"
                      }),
                      key: a
                    }, [
                      Y("div", ds, [
                        Ge(t.$slots, "item", { data: l }, () => [
                          Y("p", null, te(parseInt(l.s_width * 100) / 100) + "," + te(parseInt(l.s_height * 100) / 100), 1),
                          Y("p", null, te(parseInt(l.s_x * 100) / 100) + "," + te(parseInt(l.s_y * 100) / 100), 1)
                        ])
                      ]),
                      !d.seeModel && !g(J) && !g(ee) && g(w) === null && g(E) === null ? (D(), P("div", {
                        key: 0,
                        class: "setting-box",
                        style: Q({ display: l.showPop ? "flex" : "none" }),
                        onMousedown: q((_) => null, ["prevent", "stop"])
                      }, [
                        Lt(Yt, {
                          iconObj: d.settingIcon,
                          onClick: q((_) => Gt(l), ["prevent", "stop"])
                        }, null, 8, ["iconObj", "onClick"])
                      ], 36)) : z("", !0),
                      l.showPop ? (D(), P("div", {
                        key: 1,
                        class: "setting-box-pop",
                        onMousedown: q((_) => null, ["prevent", "stop"])
                      }, [
                        Ge(t.$slots, "setPopNormal", {
                          data: S(l)
                        }, () => [
                          Y("div", {
                            class: "setting-box-pop-item",
                            onClick: (_) => zt(l.id, l.inGroupId)
                          }, "移出组合", 8, ps),
                          Y("div", {
                            class: "setting-box-pop-item",
                            onClick: (_) => gt(l.id, l.inGroupId)
                          }, "复制", 8, fs),
                          Y("div", {
                            class: "setting-box-pop-item",
                            onClick: (_) => Ce(l.id, l.inGroupId)
                          }, "删除", 8, gs)
                        ])
                      ], 32)) : z("", !0)
                    ], 6))), 128))
                  ], 2)
                ], 64)) : (D(), P("div", vs, [
                  Ge(t.$slots, "item", { data: e }, () => [
                    Y("p", null, te(parseInt(e.s_width * 100) / 100) + "," + te(parseInt(e.s_height * 100) / 100), 1),
                    Y("p", null, te(parseInt(e.s_x * 100) / 100) + "," + te(parseInt(e.s_y * 100) / 100), 1)
                  ])
                ])),
                !e.isGroup && e.notGroup !== !0 && g(ee) ? (D(), P("div", {
                  key: 2,
                  class: ye(["group-checkbox", e.checked ? "is-checked" : "", e.checkDis ? "disabled" : ""]),
                  onClick: (l) => e.checkDis ? null : Jt(e)
                }, null, 10, ys)) : z("", !0),
                !d.seeModel && !g(J) && !g(ee) && g(w) === null && g(E) === null ? (D(), P("div", {
                  key: 3,
                  class: ye(["setting-box", e.isGroup === !0 ? e.btnPosition === "right" ? "only-g" : e.btnPosition === "left" ? "only-g l" : e.btnPosition === "top" ? "only-g t" : e.btnPosition === "bottom" ? "only-g b" : e.btnPosition === "center" ? "only-g c" : "" : ""]),
                  style: Q({ display: e.showPop || e.showSet ? "flex" : "none" }),
                  onMousedown: q((l) => null, ["prevent", "stop"])
                }, [
                  Lt(Yt, {
                    iconObj: d.settingIcon,
                    onClick: q((l) => Gt(e), ["prevent", "stop"])
                  }, null, 8, ["iconObj", "onClick"])
                ], 38)) : z("", !0),
                e.showPop ? (D(), P("div", {
                  key: 4,
                  class: ye(["setting-box-pop", e.isGroup === !0 ? e.btnPosition === "right" ? "special" : e.btnPosition === "left" ? "special l" : e.btnPosition === "top" ? "special t" : e.btnPosition === "bottom" ? "special b" : e.btnPosition === "center" ? "special c" : "" : ""]),
                  onMousedown: q((l) => null, ["prevent", "stop"])
                }, [
                  e.isGroup === !0 ? Ge(t.$slots, "setPopSpecial", {
                    key: 0,
                    data: S(e)
                  }, () => [
                    Y("div", {
                      class: "setting-box-pop-item",
                      onClick: (l) => vt(e.id, e.static !== !0)
                    }, te(e.static === !0 ? "解除" : "") + "锁定 ", 9, _s),
                    e.static !== !0 ? (D(), P("div", {
                      key: 0,
                      class: "setting-box-pop-item",
                      onClick: (l) => st(e.id)
                    }, " 微调 ", 8, xs)) : z("", !0),
                    d.hideTit ? z("", !0) : (D(), P("div", {
                      key: 1,
                      class: "setting-box-pop-item",
                      onClick: (l) => {
                        ft(e.id), y("showTitPop", e.groupTit, e.id);
                      }
                    }, " 设置组合标题 ", 8, ws)),
                    Y("div", {
                      class: "setting-box-pop-item",
                      onClick: (l) => qe(e.id)
                    }, "解除组合", 8, bs)
                  ]) : Ge(t.$slots, "setPopNormal", {
                    key: 1,
                    data: S(e)
                  }, () => [
                    e.notGroup !== !0 ? (D(), P("div", {
                      key: 0,
                      class: "setting-box-pop-item",
                      onClick: (l) => At(e.id)
                    }, "组合", 8, Is)) : z("", !0),
                    Y("div", {
                      class: "setting-box-pop-item",
                      onClick: (l) => vt(e.id, e.static !== !0)
                    }, te(e.static === !0 ? "解除" : "") + "锁定 ", 9, Ms),
                    e.static !== !0 ? (D(), P("div", {
                      key: 1,
                      class: "setting-box-pop-item",
                      onClick: (l) => st(e.id)
                    }, " 微调 ", 8, ks)) : z("", !0),
                    Y("div", {
                      class: "setting-box-pop-item",
                      onClick: (l) => gt(e.id)
                    }, "复制", 8, Es),
                    Y("div", {
                      class: "setting-box-pop-item",
                      onClick: (l) => Ce(e.id)
                    }, "删除", 8, Ss)
                  ])
                ], 34)) : z("", !0)
              ]),
              !d.seeModel && !g(J) && !g(ee) && !e.showPop && !(e.isGroup && e.groupData.filter((l) => l.showPop).length > 0) && !e.move && e.static !== !0 && e.resizable !== !1 ? (D(), P(Te, { key: 0 }, [
                g(ie).indexOf("topLeft") !== -1 ? (D(), P("div", {
                  key: 0,
                  class: "resize-line top-left",
                  onMousedown: q((l) => ge(l, e, "top-left"), ["prevent", "stop"])
                }, null, 40, Ds)) : z("", !0),
                g(ie).indexOf("top") !== -1 ? (D(), P("div", {
                  key: 1,
                  class: "resize-line top",
                  onMousedown: q((l) => ge(l, e, "top"), ["prevent", "stop"])
                }, null, 40, Ps)) : z("", !0),
                g(ie).indexOf("topRight") !== -1 ? (D(), P("div", {
                  key: 2,
                  class: "resize-line top-right",
                  onMousedown: q((l) => ge(l, e, "top-right"), ["prevent", "stop"])
                }, null, 40, Cs)) : z("", !0),
                g(ie).indexOf("left") !== -1 ? (D(), P("div", {
                  key: 3,
                  class: "resize-line left",
                  onMousedown: q((l) => ge(l, e, "left"), ["prevent", "stop"])
                }, null, 40, Ts)) : z("", !0),
                g(ie).indexOf("right") !== -1 ? (D(), P("div", {
                  key: 4,
                  class: "resize-line right",
                  onMousedown: q((l) => ge(l, e, "right"), ["prevent", "stop"])
                }, null, 40, Gs)) : z("", !0),
                g(ie).indexOf("bottomLeft") !== -1 ? (D(), P("div", {
                  key: 5,
                  class: "resize-line bottom-left",
                  onMousedown: q((l) => ge(l, e, "bottom-left"), ["prevent", "stop"])
                }, null, 40, As)) : z("", !0),
                g(ie).indexOf("bottom") !== -1 ? (D(), P("div", {
                  key: 6,
                  class: "resize-line bottom",
                  onMousedown: q((l) => ge(l, e, "bottom"), ["prevent", "stop"])
                }, null, 40, zs)) : z("", !0),
                g(ie).indexOf("bottomRight") !== -1 ? (D(), P("div", {
                  key: 7,
                  class: "resize-line bottom-right",
                  onMousedown: q((l) => ge(l, e, "bottom-right"), ["prevent", "stop"])
                }, null, 40, Bs)) : z("", !0)
              ], 64)) : z("", !0)
            ], 42, us)
          ], 6))), 128)),
          (D(!0), P(Te, null, bt(g(o), (e, r) => (D(), P("div", {
            class: ye([
              "shadow-bg",
              g(w) !== null || g(E) ? "" : "not-move-animate",
              e.move ? "is-move" : "",
              e.drag ? "is-drag" : ""
            ]),
            style: Q({
              width: e.s_width - g(X) * 2 + "px",
              height: e.s_height - g(U) * 2 + "px",
              top: e.s_y + g(U) + "px",
              left: e.s_x + g(X) + "px"
            }),
            key: r
          }, null, 6))), 128)),
          g(w) !== null || g(E) ? (D(), P("div", {
            key: 0,
            class: "drag-bg",
            style: Q({
              width: g(n).s_width + "px",
              height: g(n).s_height + "px",
              top: g(n).s_y + "px",
              left: g(n).s_x + "px"
            })
          }, null, 4)) : z("", !0),
          Y("div", {
            class: "height-bg",
            style: Q({ height: (g(fe) > 0 ? g(fe) * j() + (d.seeModel ? d.seeModelMinBg : 220) : 0) + "px" })
          }, null, 4),
          d.showAuxiliary ? (D(), P(Te, { key: 1 }, [
            g(Be) !== null ? (D(), P("div", {
              key: 0,
              class: "auxiliary-line hor",
              style: Q({ top: g(Be) + "px", left: "0px" })
            }, null, 4)) : z("", !0),
            g(Oe) !== null ? (D(), P("div", {
              key: 1,
              class: "auxiliary-line hor",
              style: Q({ top: g(Oe) + "px", left: "0px" })
            }, null, 4)) : z("", !0),
            g(Re) !== null ? (D(), P("div", {
              key: 2,
              class: "auxiliary-line hor",
              style: Q({ top: g(Re) + "px", left: "0px" })
            }, null, 4)) : z("", !0),
            g(Le) !== null ? (D(), P("div", {
              key: 3,
              class: "auxiliary-line",
              style: Q({ top: "0px", left: g(Le) + "px", height: g(fe) * j() + 220 + "px" })
            }, null, 4)) : z("", !0),
            g(Ne) !== null ? (D(), P("div", {
              key: 4,
              class: "auxiliary-line",
              style: Q({ top: "0px", left: g(Ne) + "px", height: g(fe) * j() + 220 + "px" })
            }, null, 4)) : z("", !0),
            g(He) !== null ? (D(), P("div", {
              key: 5,
              class: "auxiliary-line",
              style: Q({ top: "0px", left: g(He) + "px", height: g(fe) * j() + 220 + "px" })
            }, null, 4)) : z("", !0)
          ], 64)) : z("", !0)
        ]),
        g(o).length === 0 ? (D(), P("div", Os, [
          Ge(t.$slots, "empty", {}, () => [
            s[0] || (s[0] = rs(" 暂无数据 "))
          ])
        ])) : z("", !0)
      ], 512)
    ], 4));
  }
}, Ls = [Rs], Ns = {
  install(d) {
    Ls.forEach((M) => {
      d.component("vueDragComponentPlus", M);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Ns);
export {
  Ns as default
};
