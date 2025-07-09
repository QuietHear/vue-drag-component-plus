import { resolveComponent as jt, openBlock as b, createBlock as _t, resolveDynamicComponent as Ot, normalizeProps as Bt, mergeProps as je, withCtx as el, createElementBlock as S, toDisplayString as j, ref as X, watch as xt, onMounted as tl, onBeforeUnmount as ll, normalizeStyle as J, unref as p, createElementVNode as W, Fragment as Ce, renderList as wt, normalizeClass as ve, withModifiers as q, createCommentVNode as z, renderSlot as Ie, createVNode as Rt, createTextVNode as ol, nextTick as Lt, isVNode as Ht } from "vue";
const Yt = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(c) {
    return (w, L) => {
      const E = jt("el-icon");
      return c.iconObj.type === "custom" ? (b(), _t(Ot(c.iconObj.icon), Bt(je({ key: 0 }, c.iconObj.attrs)), null, 16)) : c.iconObj.type === "el" ? (b(), _t(E, Bt(je({ key: 1 }, c.iconObj.attrs)), {
        default: el(() => [
          (b(), _t(Ot(c.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : c.iconObj.type === "iconfont" ? (b(), S("i", je({
        key: 2,
        class: ["icon iconfont", "icon-" + c.iconObj.icon]
      }, c.iconObj.attrs), null, 16)) : (b(), S("i", je({
        key: 3,
        class: c.iconObj.type
      }, c.iconObj.attrs), j(c.iconObj.icon), 17));
    };
  }
}, Nt = (c, w = { x: "x", y: "y", width: "width", height: "height" }) => {
  let L = null;
  return c instanceof Array ? (L = [], c.forEach((E) => {
    typeof E[w.x] == "number" && typeof E[w.y] == "number" && typeof E[w.width] == "number" && typeof E[w.height] == "number" && L.push({
      x: E[w.x],
      y: E[w.y],
      width: E[w.width],
      height: E[w.height]
    });
  })) : typeof c[w.width] == "number" && typeof c[w.height] == "number" && (L = {
    width: c[w.width],
    height: c[w.height]
  }), L;
}, sl = (c) => {
  const w = /* @__PURE__ */ new Map();
  return c.forEach((L) => {
    w.has(L.x) || w.set(L.x, []), w.get(L.x).push(L);
  }), w;
}, rl = (c, w) => c.filter((L) => L.x <= w.x && L.x + L.width > w.x || L.x > w.x && L.x < w.x + w.width), nl = (c, w, L, E = !1) => {
  if (w.width > L)
    return null;
  let _ = [];
  if (c.length === 0) {
    const Y = { x: 0, y: 0 };
    return E ? [Y] : Y;
  }
  const H = Math.max(...c.map((Y) => Y.y + Y.height)), I = /* @__PURE__ */ new Set([0]);
  c.forEach((Y) => {
    I.add(Y.y), I.add(Y.y + Y.height);
  });
  const et = Array.from(I).sort((Y, d) => Y - d);
  for (const Y of et) {
    const d = Y + w.height;
    if (d > H)
      continue;
    const ee = c.filter((r) => r.y < d && r.y + r.height > Y);
    if (ee.length === 0) {
      const r = { x: 0, y: Y };
      if (!E)
        return r;
      _.push(r);
      continue;
    }
    const R = ee.map((r) => [r.x, r.x + r.width]);
    R.sort((r, he) => r[0] - he[0]);
    const A = [];
    let [V, te] = R[0];
    for (let r = 1; r < R.length; r++) {
      const [he, F] = R[r];
      he <= te ? te = Math.max(te, F) : (A.push([V, te]), [V, te] = [he, F]);
    }
    if (A.push([V, te]), A[0][0] >= w.width) {
      const r = { x: 0, y: Y };
      if (!E)
        return r;
      _.push(r);
    }
    let B = A[0][1];
    for (let r = 1; r < A.length; r++) {
      if (A[r][0] - B >= w.width) {
        const F = { x: B, y: Y };
        if (!E)
          return F;
        _.push(F);
      }
      B = Math.max(B, A[r][1]);
    }
    if (L - B >= w.width) {
      const r = { x: B, y: Y };
      if (!E)
        return r;
      _.push(r);
    }
  }
  return E ? (sl(_).forEach((d, ee) => {
    if (d.length > 1)
      for (let R = 0; R < d.length - 1; R++) {
        let A = { ...w, ...d[R] };
        rl(c.filter((V) => V.y >= A.y + A.height && V.y <= d[R + 1].y), A).length === 0 && (_ = _.filter((V) => !(V.x === d[R + 1].x && V.y === d[R + 1].y)), d.splice(R, 1), R--);
      }
  }), _.sort((d, ee) => d.y !== ee.y ? d.y - ee.y : d.x - ee.x), _.length === 0 ? null : _) : null;
};
const il = ["onMousedown", "onMouseenter", "onMouseleave"], ul = { class: "com-item-box" }, al = ["title"], hl = { class: "com-item-box-content" }, cl = ["onClick"], dl = ["onClick"], fl = ["onClick"], pl = {
  key: 1,
  class: "com-item-box-content"
}, gl = ["onClick"], vl = ["onClick"], yl = ["onClick"], _l = ["onClick"], xl = ["onClick"], wl = ["onClick"], Ml = ["onClick"], bl = ["onClick"], kl = ["onClick"], Sl = ["onClick"], El = ["onMousedown"], Dl = ["onMousedown"], Pl = ["onMousedown"], Cl = ["onMousedown"], Il = ["onMousedown"], Tl = ["onMousedown"], Gl = ["onMousedown"], zl = ["onMousedown"], Al = {
  key: 2,
  class: "com-empty"
}, Ol = {
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
      validator(c, w) {
        return c >= 0;
      }
    },
    // 组件项最小宽度（原始尺寸）
    itemMinWidth: {
      type: Number,
      default: 50,
      validator(c, w) {
        return c >= 20;
      }
    },
    // 组件项最小高度（原始尺寸）
    itemMinHeight: {
      type: Number,
      default: 50,
      validator(c, w) {
        return c >= 20;
      }
    },
    // 纵向相邻元素的自动间距（原始尺寸）
    xSpace: {
      type: Number,
      default: 10,
      validator(c, w) {
        return c >= 0;
      }
    },
    // 横向相邻元素的自动间距（原始尺寸）
    ySpace: {
      type: Number,
      default: null,
      validator(c, w) {
        return c >= 0;
      }
    },
    // 高度缩放折扣率（让高度没那么大变化）
    hScaleDiscount: {
      type: Number,
      default: 0.2,
      validator(c, w) {
        return c > 0;
      }
    },
    // 预览模式组件内css缩放比例最小值
    cssScaleMin: {
      type: Number,
      default: 0.75,
      validator(c, w) {
        return c > 0;
      }
    },
    // 预览模式组件内css缩放比例最大值
    cssScaleMax: {
      type: Number,
      default: 1.2,
      validator(c, w) {
        return c > 0 && c >= (w ? w.cssScaleMin : 0.1);
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
      default: (c) => c
    },
    // 解散/移出组合前数据处理
    beforeRemoveGroup: {
      type: Function,
      default: (c) => c
    },
    // 拖拽事件触发延迟时间（防止不小心单击了一下而开始拖动）
    dragDelayTime: {
      type: Number,
      default: 200,
      validator(c, w) {
        return c >= 0 && c < 1e3;
      }
    },
    // 拖动屏幕上下滚动触发高度
    moveDistance: {
      type: [Number, String],
      default: "50px"
    },
    // 滚动条每次移动距离
    scrollDistance: {
      type: [Number, String],
      default: "20px"
    }
  },
  emits: ["baseWidthInit", "changeScale", "changeCssScale", "changeTrimModel", "dragStart", "dragIng", "dragEnd", "resizeStart", "resizeIng", "resizeEnd", "showGroup", "openSetMenu", "updateChecked", "showTitPop", "domStart", "domReady"],
  setup(c, { expose: w, emit: L }) {
    const E = L, _ = c, H = (t) => {
      if (typeof t == "object" && !Ht(t) && t !== null && !(t instanceof Date)) {
        let l = t instanceof Array ? [] : {};
        for (let e in t)
          l[e] = typeof t[e] == "object" && !Ht(t[e]) && t[e] !== null && !(t[e] instanceof Date) ? H(t[e]) : t[e];
        return l;
      } else
        return t;
    }, I = (t) => {
      let l = {};
      if (t instanceof Array)
        l = [], t.forEach((e) => {
          l.push(I(e));
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
          ].indexOf(e) !== -1 && (e === "groupData" ? l[e] = I(t[e]) : l[e] = t[e]);
      return l;
    }, et = (t, l) => {
      let e = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
      for (; t && !e.call(t, l); )
        t = t.parentElement;
      return t;
    }, Y = (t, l) => t.classList ? t.classList.contains(l) : new RegExp("\\s" + l + "\\s").test(" " + t.className + " "), d = (t) => parseFloat(t.toFixed(7)), ee = (t, l) => {
      let e = [], s = (o) => {
        o.forEach((n) => {
          Y(n, l) && e.push(n), n.childNodes && n.childNodes.length > 0 && s(n.childNodes);
        });
      };
      return s(t.childNodes), e;
    }, R = (t, l, e = !1) => V(A(t, l, e), l, e), A = (t, l, e = !1) => t.filter((s) => d(s[e ? "s_x" : "x"]) <= d(l[e ? "s_x" : "x"]) && d(s[e ? "s_x" : "x"] + s[e ? "s_width" : "width"]) > d(l[e ? "s_x" : "x"]) || d(s[e ? "s_x" : "x"]) > d(l[e ? "s_x" : "x"]) && d(s[e ? "s_x" : "x"]) < d(l[e ? "s_x" : "x"] + l[e ? "s_width" : "width"])), V = (t, l, e = !1) => t.filter((s) => d(s[e ? "s_y" : "y"]) <= d(l[e ? "s_y" : "y"]) && d(s[e ? "s_y" : "y"] + s[e ? "s_height" : "height"]) > d(l[e ? "s_y" : "y"]) || d(s[e ? "s_y" : "y"]) > d(l[e ? "s_y" : "y"]) && d(s[e ? "s_y" : "y"]) < d(l[e ? "s_y" : "y"] + l[e ? "s_height" : "height"])), te = (t, l = (s) => s, e = !1) => {
      const s = I(r.value), o = I(t);
      o.sort((v, g) => {
        const k = d(v[e ? "s_y" : "y"]), D = d(g[e ? "s_y" : "y"]);
        if (k !== D)
          return k - D;
        {
          const f = d(v[e ? "s_x" : "x"]), T = d(g[e ? "s_x" : "x"]);
          return f - T;
        }
      });
      const n = (v) => {
        R(l(s, v), v, e).forEach((k) => {
          k[e ? "s_y" : "y"] = v[e ? "s_y" : "y"] + v[e ? "s_height" : "height"], n(k);
        });
      };
      o.forEach((v) => n(s.filter((g) => g.id === v.id)[0])), s.forEach((v) => {
        r.value.filter((g) => g.id === v.id)[0][e ? "s_y" : "y"] = v[e ? "s_y" : "y"];
      });
    }, B = (t) => {
      const l = H(t);
      return delete l.showPop, delete l.showSet, l.groupData ? l.groupData.forEach((e) => {
        delete e.showPop, delete e.showSet, ge(e, l), delete e.s_width, delete e.s_height, delete e.s_x, delete e.s_y;
      }) : l.inGroupId && (delete l.showPop, delete l.showSet, ge(l, r.value.filter((e) => e.id === l.inGroupId)[0])), delete l.btnPosition, delete l.s_width, delete l.s_height, delete l.s_x, delete l.s_y, delete l.syCopy, l;
    }, r = X([]), he = () => {
      _.insertResizeKeys.forEach((t) => {
        _.excludeResizeKeys.indexOf(t) === -1 && F.value.push(t);
      });
    };
    xt(
      () => [_.insertResizeKeys, _.excludeResizeKeys],
      () => {
        he();
      }
    );
    const F = X([]);
    he();
    const Mt = () => {
      r.value.length > 0 && r.value.filter((t) => t.isGroup === !0).forEach((t) => {
        ye(t);
      });
    }, bt = () => {
      _.xSpace !== null && _.xSpace !== void 0 ? $.value = _.xSpace / 2 : $.value = 10 / 2, _.ySpace !== null && _.ySpace !== void 0 && _.ySpace >= 0 ? le.value = _.ySpace / 2 : le.value = $.value, Mt();
    };
    xt(
      () => [_.xSpace, _.ySpace],
      () => {
        bt();
      }
    );
    const $ = X(0), le = X(0);
    bt();
    const K = X(null);
    let ie = null;
    const Te = (t) => {
      ie = t, E("baseWidthInit", ie);
    }, se = X(1), Ge = X(1), we = (t) => {
      se.value = t, t < _.cssScaleMin ? Ge.value = _.cssScaleMin : t > _.cssScaleMax ? Ge.value = _.cssScaleMax : Ge.value = t, E("changeScale", se.value), E("changeCssScale", _.seeModel ? Ge.value : 1);
    }, Q = () => 1 + (se.value - 1) * _.hScaleDiscount;
    xt(
      () => _.seeModel,
      () => {
        we(se.value);
      }
    );
    const ye = (t, l = null) => {
      l ? (t.width = t.width * l, t.height = t.height * l) : (t.s_width = t.width * se.value, t.s_height = t.height * Q());
      const e = getComputedStyle(K.value), s = parseInt(e.getPropertyValue("--com-item-border-width").trim()), o = parseInt(e.getPropertyValue("--group-tit-height").trim());
      if (t.isGroup === !0)
        if (l) {
          const n = t.width, v = t.height - (t.groupTit ? o : 0);
          t.groupData.forEach((g) => {
            g.width = n * g.groupW, g.height = v * g.groupH, g.x = n * g.groupX, g.y = v * g.groupY;
          });
        } else {
          const n = t.s_width - 2 * $.value - 2 * s, v = t.s_height - 2 * le.value - 2 * s - (t.groupTit ? o : 0);
          t.groupData.forEach((g) => {
            g.s_width = n * g.groupW, g.s_height = v * g.groupH, g.s_x = n * g.groupX, g.s_y = v * g.groupY;
          });
        }
    }, kt = (t, l = null) => {
      l ? (t.s_x = t.x * l, t.s_y = t.y * l) : (t.s_x = t.x * se.value, t.s_y = t.y * Q());
    }, Xt = (t) => {
      t.width = t.s_width / se.value, t.height = t.s_height / Q();
      const l = getComputedStyle(K.value), e = parseInt(l.getPropertyValue("--group-tit-height").trim());
      if (t.isGroup === !0) {
        const s = t.width, o = t.height - (t.groupTit ? e : 0);
        t.groupData.forEach((n) => {
          n.x = s * n.groupX, n.y = o * n.groupY;
        });
      }
    }, Me = (t) => {
      t.x = t.s_x / se.value, t.y = t.s_y / Q();
    };
    let ce = null, St = null;
    const de = X(0), ze = X(null), Ae = X(null), Oe = X(null), Be = X(null), Re = X(null), Le = X(null), _e = (t) => {
      const l = I(t);
      if (!_.showAuxiliary || t === null)
        ze.value = null, Ae.value = null, Oe.value = null, Be.value = null, Re.value = null, Le.value = null;
      else {
        const e = getComputedStyle(K.value), s = parseInt(e.getPropertyValue("--auxiliary-width").trim()), o = r.value.filter((u) => u.id !== l.id).filter((u) => Math.round(u.s_x) < Math.round(l.s_x) && Math.round(u.s_x + u.s_width) <= Math.round(l.s_x) || Math.round(u.s_x) >= Math.round(l.s_x + l.s_width)), n = o.map((u) => Math.round(u.s_y)), v = o.map((u) => Math.round(u.s_y + u.s_height / 2)), g = o.map((u) => Math.round(u.s_y + u.s_height)), k = [...n, ...v, ...g];
        k.sort(), k.filter((u) => u === Math.round(l.s_y)).length > 0 ? ze.value = l.s_y : ze.value = null, k.filter((u) => u === Math.round(l.s_y + l.s_height / 2)).length > 0 ? Ae.value = l.s_y + l.s_height / 2 : Ae.value = null, k.filter((u) => u === Math.round(l.s_y + l.s_height)).length > 0 ? Oe.value = l.s_y + l.s_height - s : Oe.value = null;
        const D = r.value.filter((u) => u.id !== l.id).map((u) => Math.round(u.s_x)), f = r.value.filter((u) => u.id !== l.id).map((u) => Math.round(u.s_x + u.s_width / 2)), T = r.value.filter((u) => u.id !== l.id).map((u) => Math.round(u.s_x + u.s_width)), P = [...D, ...f, ...T];
        P.sort(), P.filter((u) => u === Math.round(l.s_x)).length > 0 ? Be.value = l.s_x : Be.value = null, P.filter((u) => u === Math.round(l.s_x + l.s_width / 2)).length > 0 ? Re.value = l.s_x + l.s_width / 2 : Re.value = null, P.filter((u) => u === Math.round(l.s_x + l.s_width)).length > 0 ? Le.value = l.s_x + l.s_width - s : Le.value = null;
      }
    }, be = () => {
      window.removeEventListener("keydown", be), y !== null ? qe() : M !== null && ut();
    }, U = X(!1), tt = (t) => {
      let l = null;
      if (l = r.value.filter((e) => e.id === t)[0], l && l.static !== !0 && l.dragable !== !1)
        U.value = !0, Dt(r.value.findIndex((e) => e.id === t)), setTimeout(() => {
          window.addEventListener("click", He), window.addEventListener("keydown", lt);
        }, 50), E("changeTrimModel", U.value, B(r.value.filter((e) => e.id === l.id)[0]));
      else
        try {
        } catch {
        }
    }, lt = (t) => {
      switch (t.keyCode) {
        case 13:
        case 27:
        case 32:
          t.preventDefault(), He();
          break;
        case 37:
          t.preventDefault(), Ee("left");
          break;
        case 38:
          t.preventDefault(), Ee("top");
          break;
        case 39:
          t.preventDefault(), Ee("right");
          break;
        case 40:
          t.preventDefault(), Ee("bottom");
          break;
      }
    }, He = () => {
      window.removeEventListener("click", He), window.removeEventListener("keydown", lt), qe(), U.value = !1, E("changeTrimModel", U.value);
    }, i = X({});
    let y = null, ot = null, st = null, rt = null, ue = null;
    const Z = X(null);
    let Et = null, Ke = null, nt = null, it = null, ke = null, ae = null, xe = null, Se = null;
    const Ye = () => {
      clearInterval(xe), xe = null, Se = null;
    }, Dt = (t, l) => {
      clearTimeout(rt), clearTimeout(ue), Ye(), Ve();
      const e = Z.value.getBoundingClientRect();
      if (Et = e.left, Ke = e.top, nt = e.bottom, it = e.height, typeof _.moveDistance == "string" ? ke = _.moveDistance.indexOf("px") !== -1 ? parseFloat(_.moveDistance) : 50 : ke = _.moveDistance * it, typeof _.scrollDistance == "string" ? ae = _.scrollDistance.indexOf("px") !== -1 ? parseFloat(_.scrollDistance) : 20 : ae = _.scrollDistance * it, U.value)
        ue = null, y = t, i.value = I(r.value[y]), E("dragStart", B(r.value[y])), r.value[y].move = !0, _e(r.value[y]), ot = 0, st = 0;
      else {
        const s = et(t.target, ".com-item");
        s && (ue = setTimeout(() => {
          ue = null, y = l, i.value = I(r.value[y]), E("dragStart", B(r.value[y])), r.value[y].move = !0, _e(r.value[y]);
          const o = s.getBoundingClientRect();
          ot = t.clientX - o.left, st = t.clientY - o.top, window.addEventListener("mousemove", Ee), window.addEventListener("keydown", be);
        }, _.dragDelayTime), window.addEventListener("mouseup", qe));
      }
    }, Ee = (t) => {
      clearTimeout(rt), clearTimeout(ue), ue = null;
      let l = null, e = null;
      if (U.value)
        switch (l = r.value[y].s_x, e = r.value[y].s_y, t) {
          case "top":
            e -= 1;
            break;
          case "bottom":
            e += 1;
            break;
          case "left":
            l -= 1;
            break;
          case "right":
            l += 1;
            break;
        }
      else
        l = t.clientX - Et - ot, e = t.clientY - Ke + Z.value.scrollTop - st;
      const s = l <= fe("left") ? fe("left") : l >= fe("right") ? fe("right") : l;
      let o = e <= fe("top") ? fe("top") : e >= fe("bottom") ? fe("bottom") : e;
      const n = s - r.value[y].s_x, v = o - r.value[y].s_y;
      let g = "";
      n > 0 ? g = "right" : n < 0 ? g = "left" : v > 0 ? g = "bottom" : v < 0 && (g = "top"), r.value[y].s_x = s, r.value[y].s_y = o;
      const k = () => {
        let D = R(I(r.value.filter((f) => f.move !== !0)), r.value[y], !0);
        if (D.length === 0)
          i.value.s_x = s, i.value.s_y = o;
        else
          switch (g) {
            case "top":
              const f = H(i.value);
              f.s_x = s, R(I(r.value.filter((a) => a.move !== !0)), f, !0).length === 0 && (i.value.s_x = s);
              const T = D.filter((a) => _.mobileDragModel ? d(a.s_height + a.s_y - o) > 2 * le.value : r.value[y].s_height >= a.s_height && o - a.s_y <= 15 || r.value[y].s_height < a.s_height && o - a.s_y <= r.value[y].s_height / 2);
              if (T.length > 0) {
                const a = A(I(r.value.filter((x) => x.move !== !0 && d(x.s_y + x.s_height) <= d(i.value.s_y) && T.filter((C) => C.id === x.id).length === 0)), i.value, !0);
                let h = r.value[y].s_height;
                if (a.length === 0 && (h -= Math.min(...T.map((x) => x.s_y))), D.length === T.length ? i.value.s_y = a.length === 0 ? 0 : Math.max(...a.map((x) => x.s_y + x.s_height)) : i.value.s_y = Math.max(...a.map((x) => x.s_y + x.s_height)), i.value.s_x = s, h > 0) {
                  const x = H(T);
                  T.forEach((C) => {
                    A(r.value.filter((N) => N.move !== !0 && d(N.s_y) >= d(C.s_y + C.s_height)), C, !0).forEach((N) => {
                      x.filter((yt) => yt.id === N.id).length === 0 && x.push(I(N));
                    });
                  }), x.forEach((C) => {
                    D.length !== T.length && T.filter((G) => G.id === C.id).length === 1 && (C.s_y = i.value.s_y), C.s_y += h, r.value.filter((G) => G.id === C.id)[0].s_y = C.s_y;
                  });
                }
              }
              break;
            case "bottom":
              const P = H(i.value);
              P.s_x = s, R(I(r.value.filter((a) => a.move !== !0)), P, !0).length === 0 && (i.value.s_x = s);
              const u = D.filter((a) => _.mobileDragModel ? d(o + r.value[y].s_height - a.s_y) > 2 * le.value : r.value[y].s_height >= a.s_height && a.s_y + a.s_height - o - r.value[y].s_height <= 15 || r.value[y].s_height < a.s_height && a.s_y + a.s_height - o - r.value[y].s_height <= a.s_height / 2);
              if (u.length > 0) {
                u.forEach((x) => {
                  const C = A(I(r.value.filter((G) => G.move !== !0 && d(G.s_y + G.s_height) <= d(x.s_y))), x, !0);
                  x.s_y = C.length === 0 ? 0 : Math.max(...C.map((G) => G.s_y + G.s_height)), r.value.filter((G) => G.id === x.id)[0].s_y = x.s_y;
                });
                const a = [...R(u, r.value[y], !0), ...A(I(r.value.filter((x) => x.move !== !0 && d(x.s_y + x.s_height) <= d(r.value[y].s_y + r.value[y].s_height))), r.value[y], !0)];
                let h = Math.max(...a.map((x) => x.s_y + x.s_height)) - i.value.s_y;
                if (i.value.s_y = Math.max(...a.map((x) => x.s_y + x.s_height)), i.value.s_x = s, h > 0) {
                  const x = A(r.value.filter((C) => C.move !== !0 && d(C.s_y) >= d(i.value.s_y)), i.value, !0);
                  I(x).forEach((C) => {
                    A(r.value.filter((N) => N.move !== !0 && d(N.s_y) >= d(C.s_y + C.s_height)), C, !0).forEach((N) => {
                      x.filter((yt) => yt.id === N.id).length === 0 && x.push(I(N));
                    });
                  }), x.forEach((C) => {
                    C.s_y += h, r.value.filter((G) => G.id === C.id)[0].s_y = C.s_y;
                  });
                }
              }
              break;
            case "left":
            case "right":
              const O = D.filter((a) => a.s_x + a.s_width - s >= $.value * 3 && s + r.value[y].s_width - a.s_x >= $.value * 3).filter((a) => o < a.s_y || o >= a.s_y && o - a.s_y <= 15).sort((a, h) => {
                const x = d(a.s_y), C = d(h.s_y);
                return x - C;
              });
              if (O.length > 0)
                i.value.s_x = s, i.value.s_y = Math.min(...O.map((a) => a.s_y));
              else {
                let a = I(r.value[y]);
                if (a.s_y = Math.min(...D.map((h) => h.s_y)) - a.s_height, i.value.s_y >= Math.min(...D.map((h) => h.s_y + h.s_height)) || a.s_y >= 0 && R(I(r.value.filter((h) => h.move !== !0)), a, !0).length === 0) {
                  const h = H(i.value);
                  h.s_x = s, R(I(r.value.filter((x) => x.move !== !0)), h, !0).length === 0 && (i.value.s_x = s);
                }
              }
              O.forEach((a) => {
                const h = i.value.s_y + i.value.s_height - a.s_y > 0 ? i.value.s_y + i.value.s_height - a.s_y : 0, x = H([a]);
                A(r.value.filter((G) => G.move !== !0 && d(G.s_y) >= d(a.s_y + a.s_height)), a, !0).forEach((G) => {
                  x.filter((N) => N.id === G.id).length === 0 && x.push(I(G));
                }), x.forEach((G) => {
                  G.s_y += h, O.filter((N) => N.id === G.id).length === 1 && (O.filter((N) => N.id === G.id)[0].s_y = G.s_y), r.value.filter((N) => N.id === G.id)[0].s_y = G.s_y;
                });
              });
              break;
          }
        r.value.forEach((f) => {
          Me(f);
        }), Me(i.value), oe(!1), _e(r.value[y]), E("dragIng"), i.value.s_y = r.value[y].syCopy, delete r.value[y].syCopy;
      };
      if (U.value) {
        let D = null;
        D = ee(K.value, "i" + r.value[y].id + "d")[0].getBoundingClientRect().top, D - Ke <= ke && g === "top" && (Z.value.scrollTop = Z.value.scrollTop - ae), nt - D <= ke && g === "bottom" && (Z.value.scrollTop = Z.value.scrollTop + ae), k();
      } else {
        const D = () => {
          const f = Z.value.scrollTop;
          Se === "top" ? (Z.value.scrollTop = Z.value.scrollTop - ae, f <= ae ? (Ye(), o = 0) : o -= ae) : (Z.value.scrollTop = Z.value.scrollTop + ae, o += ae), r.value[y].s_y = o, k();
        };
        Se === "top" && g === "bottom" && Ye(), t.clientY - Ke <= ke && g === "top" && !xe && (k(), Se = "top", xe = setInterval(D, 100)), Se === "bottom" && g === "top" && Ye(), nt - t.clientY <= ke && g === "bottom" && !xe && (k(), Se = "bottom", xe = setInterval(D, 100)), xe || k();
      }
    }, qe = () => {
      window.removeEventListener("mouseup", qe), clearTimeout(ue), ue ? ue = null : (Ye(), window.removeEventListener("mousemove", Ee), delete r.value[y].move, r.value[y].s_x = i.value.s_x, r.value[y].s_y = i.value.s_y, _e(null), r.value.forEach((t) => {
        Me(t);
      }), oe(), E("dragEnd", B(r.value[y])), y = null, be(), rt = setTimeout(() => {
        oe();
      }, 500));
    }, fe = (t) => {
      switch (t) {
        case "top":
          return 0;
        case "right":
          return ce - $.value * 2 - r.value[y].s_width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let M = null, re = "", Ue = 0, Je = 0, Ne = 0, Xe = 0, Qe = 0, $e = 0;
    const pe = (t, l, e) => {
      Ve(), i.value = I(l), M = l, E("resizeStart", B(M)), re = e, Ue = t.clientX, Je = t.clientY, Ne = l.s_width, Xe = l.s_height, Qe = l.s_y, $e = l.s_x, M.drag = !0, _e(M), window.addEventListener("mousemove", Pt), window.addEventListener("mouseup", ut), window.addEventListener("keydown", be);
    }, Pt = (t) => {
      const l = Ne + (t.clientX - Ue), e = Xe + (t.clientY - Je), s = Ne - (t.clientX - Ue), o = Xe - (t.clientY - Je), n = Qe + (t.clientY - Je), v = $e + (t.clientX - Ue), g = (typeof i.value.itemMinWidth == "number" ? i.value.itemMinWidth : _.itemMinWidth) * se.value, k = (typeof i.value.itemMinHeight == "number" ? i.value.itemMinHeight : _.itemMinHeight) * Q();
      re.indexOf("top") !== -1 ? (i.value.s_height = o < k ? k : o > ne("top") ? ne("top") : o, i.value.s_y = o < k ? Qe + Xe - k : o > ne("top") ? 0 : n) : re.indexOf("bottom") !== -1 && (i.value.s_height = e < k ? k : e > ne("bottom") ? ne("bottom") : e), re.indexOf("left") !== -1 ? (i.value.s_width = s < g ? g : s > ne("left") ? ne("left") : s, i.value.s_x = s < g ? $e + Ne - g : s > ne("left") ? 0 : v) : re.indexOf("right") !== -1 && (i.value.s_width = l < g ? g : l > ne("right") ? ne("right") : l);
      let D = R(I(r.value.filter((u) => u.drag !== !0)), i.value, !0);
      if (D.length > 0) {
        let u = [];
        if (re.indexOf("top") !== -1) {
          const O = A(D, M, !0).filter((h) => d(h.s_y + h.s_height - i.value.s_y) > $.value * 2), a = r.value.filter((h) => h.id !== M.id).filter((h) => Math.round(h.s_x) < Math.round(i.value.s_x) && Math.round(h.s_x + h.s_width) <= Math.round(i.value.s_x) || Math.round(h.s_x) >= Math.round(i.value.s_x + i.value.s_width)).filter((h) => Math.round(h.s_y) === Math.round(i.value.s_y) || Math.round(h.s_y + h.s_height / 2) === Math.round(i.value.s_y) || Math.round(h.s_y + h.s_height) === Math.round(i.value.s_y));
          (a.length > 0 || O.length > 0) && (M.s_height = i.value.s_height, M.s_y = i.value.s_y, u = [...u, ...a.length > 0 ? A(D, M, !0) : O]);
        } else if (re.indexOf("bottom") !== -1) {
          const O = A(D, M, !0).filter((h) => d(i.value.s_y + i.value.s_height - h.s_y) > le.value * 2), a = r.value.filter((h) => h.id !== M.id).filter((h) => Math.round(h.s_x) < Math.round(i.value.s_x) && Math.round(h.s_x + h.s_width) <= Math.round(i.value.s_x) || Math.round(h.s_x) >= Math.round(i.value.s_x + i.value.s_width)).filter((h) => Math.round(h.s_y) === Math.round(i.value.s_y + i.value.s_height) || Math.round(h.s_y + h.s_height / 2) === Math.round(i.value.s_y + i.value.s_height) || Math.round(h.s_y + h.s_height) === Math.round(i.value.s_y + i.value.s_height));
          (a.length > 0 || O.length > 0) && (M.s_height = i.value.s_height, u = [...u, ...a.length > 0 ? A(D, M, !0) : O]);
        }
        if (re.indexOf("left") !== -1) {
          const O = V(D, M, !0).filter((h) => d(h.s_x + h.s_width - i.value.s_x) > $.value * 2), a = r.value.filter((h) => h.id !== M.id).filter((h) => Math.round(h.s_x) === Math.round(i.value.s_x) || Math.round(h.s_x + h.s_width / 2) === Math.round(i.value.s_x) || Math.round(h.s_x + h.s_width) === Math.round(i.value.s_x));
          (a.length > 0 || O.length > 0) && (M.s_width = i.value.s_width, M.s_x = i.value.s_x, u = [...u, ...a.length > 0 ? V(D, M, !0) : O]);
        } else if (re.indexOf("right") !== -1) {
          const O = V(D, M, !0).filter((h) => d(i.value.s_x + i.value.s_width - h.s_x) > $.value * 2), a = r.value.filter((h) => h.id !== M.id).filter((h) => Math.round(h.s_x) === Math.round(i.value.s_x + i.value.s_width) || Math.round(h.s_x + h.s_width / 2) === Math.round(i.value.s_x + i.value.s_width) || Math.round(h.s_x + h.s_width) === Math.round(i.value.s_x + i.value.s_width));
          (a.length > 0 || O.length > 0) && (M.s_width = i.value.s_width, u = [...u, ...a.length > 0 ? V(D, M, !0) : O]);
        }
        if (u.length > 0) {
          u.sort((O, a) => {
            const h = d(O.s_y), x = d(a.s_y);
            return h - x;
          });
          for (let O = 0; O < u.length; O++)
            u.filter((a) => a.id === u[O].id).forEach((a) => {
              a.s_y += M.s_y + M.s_height - a.s_y, r.value.filter((h) => h.id === a.id)[0].s_y = a.s_y, te([a], (h, x) => h.filter((C) => C.drag !== !0 && C.id !== x.id), !0);
            });
        }
      } else
        M.s_x = i.value.s_x, M.s_y = i.value.s_y, M.s_width = i.value.s_width, M.s_height = i.value.s_height;
      const f = getComputedStyle(K.value), T = parseInt(f.getPropertyValue("--com-item-border-width").trim()), P = parseInt(f.getPropertyValue("--group-tit-height").trim());
      if (M.isGroup === !0) {
        const u = M.s_width - 2 * $.value - 2 * T, O = M.s_height - 2 * le.value - 2 * T - (M.groupTit ? P : 0);
        M.groupData.forEach((a) => {
          a.s_width = u * a.groupW, a.s_height = O * a.groupH, a.s_x = u * a.groupX, a.s_y = O * a.groupY;
        });
      }
      Xt(M), r.value.forEach((u) => {
        Me(u);
      }), oe(!1), _e(i.value), E("resizeIng");
    }, ut = (t) => {
      delete M.drag, re = "", _e(null), window.removeEventListener("mousemove", Pt), window.removeEventListener("mouseup", ut), oe(), E("resizeEnd", B(M)), M = null, be();
    }, ne = (t) => {
      switch (t) {
        case "top":
          return Qe + Xe;
        case "left":
          return $e + Ne;
        case "right":
          return ce - $.value * 2 - $e;
        case "bottom":
          return 999999999;
      }
    }, oe = (t = !0) => {
      t === !0 && te(r.value, (e, s) => e.filter((o) => o.id !== s.id)), $t(t), r.value.forEach((e) => {
        (t === !0 || e.move !== !0 && e.drag !== !0) && kt(e);
      }), t === !0 && Wt();
      const l = r.value.map((e) => {
        if (e.move === !0) {
          const s = I(e);
          return s.s_y = i.value.s_y, Me(s), s.y + e.height;
        } else
          return e.y + e.height;
      });
      l.length > 0 ? de.value = Math.max(...l) : de.value = 0;
    }, $t = (t = !0) => {
      const l = I(r.value).sort((e, s) => {
        const o = d(e.y), n = d(s.y);
        return o - n;
      });
      if (!t) {
        if (M !== null) {
          const e = A(H(l.filter((o) => o.drag !== !0 && d(o.s_y + o.s_height) < d(M.s_y))), M), s = l.filter((o) => o.drag === !0)[0];
          s && (e.length > 0 ? (s.height += s.y - Math.max(...e.map((o) => o.y + o.height)), s.y = Math.max(...e.map((o) => o.y + o.height))) : (s.height += s.y, s.y = 0));
        } else if (y !== null) {
          const e = l.filter((s) => s.move === !0)[0];
          e && (e.s_x = i.value.s_x, e.s_y = i.value.s_y, Me(e));
        }
      }
      for (let e = 0; e < l.length; e++) {
        const s = A(l, l[e]).filter((o) => d(o.y + o.height) <= d(l[e].y));
        s.length > 0 ? l[e].y = Math.max(...s.map((o) => o.y + o.height)) : l[e].y = 0;
      }
      l.forEach((e) => {
        t === !0 || e.move !== !0 && e.drag !== !0 ? r.value.filter((s) => s.id === e.id)[0].y = e.y : e.move === !0 && (r.value.filter((s) => s.id === e.id)[0].syCopy = e.y * Q());
      });
    }, Wt = () => {
      const t = r.value.filter((l) => l.isGroup === !0);
      if (t.length > 0) {
        const l = getComputedStyle(K.value), e = parseInt(l.getPropertyValue("--setting-icon-group-width").trim()), s = parseInt(l.getPropertyValue("--setting-icon-group-height").trim());
        t.forEach((o) => {
          $.value + o.s_x + o.s_width + e > ce ? $.value + o.s_x - e < 0 ? _.groupBtnPosMore ? le.value + o.s_y - s < 0 ? o.btnPosition = "bottom" : o.btnPosition = "top" : o.btnPosition = "center" : o.btnPosition = "left" : o.btnPosition = "right";
        });
      }
    }, Ct = new ResizeObserver((t) => {
      qt(ce === t[0].borderBoxSize[0].inlineSize ? null : t[0].borderBoxSize[0].inlineSize, St === t[0].borderBoxSize[0].blockSize ? null : t[0].borderBoxSize[0].blockSize);
    });
    tl(() => {
      Ct.observe(K.value);
    });
    const We = X("");
    let at = 0, ht = 0, ct = null, dt = !1;
    const Vt = (t = [], l = null) => {
      clearInterval(ct), We.value = (/* @__PURE__ */ new Date()).getTime() + "", at = 0, ht = 0, t.forEach((e) => {
        at += 1, e.isGroup === !0 && (ht += e.groupData.length);
      }), At(), E("domStart"), r.value = H(t), r.value.filter((e) => e.isGroup === !0).forEach((e) => {
        if (e.groupData.length < 2)
          Fe(e.id);
        else {
          const s = me(e.groupData, e);
          Ze(s);
        }
      }), dt = !0, Lt(() => {
        const e = K.value.getBoundingClientRect();
        l != null && r.value.length > 0 ? (Te(l), we(e.width / l)) : (Te(r.value.length > 0 ? e.width : null), we(1)), r.value.forEach((s) => {
          ye(s);
        }), oe(), ct = setInterval(() => {
          ee(K.value, We.value + "p").length === at && ee(K.value, We.value + "c").length === ht && (clearInterval(ct), E("domReady"));
        }, 10), setTimeout(() => {
          dt = !1;
        }, 500);
      });
    }, Ft = (t) => {
      t.showSet = !0;
    }, ft = (t) => {
      const l = r.value.filter((e) => e.id === t);
      if (l.length === 1)
        delete l[0].showSet;
      else
        try {
        } catch {
        }
    }, It = (t, l, e) => {
      const s = Nt(t), o = Nt(l), n = nl(o, s, e);
      if (n)
        t.x = n.x, t.y = n.y;
      else {
        t.x = 0;
        const v = o.map((g) => g.y + g.height);
        if (v.length > 0)
          t.y = Math.max(...v);
        else
          try {
          } catch {
          }
      }
    }, De = (t, l = null, e = !1) => {
      const s = H(t), o = r.value.filter((n) => n.id === l);
      if (s.id || (s.id = (/* @__PURE__ */ new Date()).getTime() + ""), l && o.length !== 1)
        try {
        } catch {
        } finally {
          return;
        }
      if (e !== !0 && (delete s.x, delete s.y, l ? (o[0].groupData.forEach((n) => {
        ge(n, o[0]);
      }), It(s, o[0].groupData, o[0].width)) : It(s, r.value, (ie || ce) - $.value * 2)), l) {
        o[0].groupData.push(s);
        const n = me(o[0].groupData, o[0]);
        Ze(n), te([n], (v, g) => v.filter((k) => k.id !== g.id));
      } else
        s.x !== void 0 && s.y !== void 0 && (r.value.length === 0 && Te(ce), ye(s), r.value.push(s));
      oe();
    }, pt = (t, l = null, e = null) => {
      let s = null;
      const o = r.value.filter((n) => n.id === l);
      if (l ? o.length === 1 && (s = H(o[0].groupData.filter((n) => n.id === t)[0])) : s = H(r.value.filter((n) => n.id === t)[0]), s)
        return s.id = e || (/* @__PURE__ */ new Date()).getTime() + "", l ? (ge(s, o[0]), De(s, l)) : De(s), B(l ? r.value.filter((n) => n.id === l)[0].groupData.filter((n) => n.id === s.id)[0] : r.value.filter((n) => n.id === s.id)[0]);
      try {
      } catch {
      } finally {
        return null;
      }
    }, Pe = (t, l = null, e = !0) => {
      let s = -1;
      const o = r.value.filter((n) => n.id === l);
      if (l ? o.length === 1 && (s = o[0].groupData.findIndex((n) => n.id === t)) : s = r.value.findIndex((n) => n.id === t), s !== -1) {
        if (l)
          if (o[0].groupData.splice(s, 1), o[0].groupData.length === 1)
            Fe(l);
          else {
            o[0].groupData.forEach((v) => {
              ge(v, o[0]);
            });
            const n = me(o[0].groupData, o[0]);
            Ze(n);
          }
        else
          r.value.splice(s, 1), r.value.length === 0 && e && (Te(null), we(1));
        e && oe();
      } else
        try {
        } catch {
        }
    }, Kt = (t) => {
      Ze(t, !1);
    }, Ze = (t, l = !0) => {
      if (t.id) {
        const e = H(t);
        let s = -1;
        const o = r.value.filter((n) => n.id === e.inGroupId);
        if (e.inGroupId ? o.length === 1 && (s = o[0].groupData.findIndex((n) => n.id === e.id)) : s = r.value.findIndex((n) => n.id === e.id), s !== -1) {
          if (l && (delete e.showPop, delete e.showSet, delete e.btnPosition, e.groupData && e.groupData.forEach((n) => {
            delete n.showPop, delete n.showSet;
          })), e.inGroupId) {
            if (l)
              o[0].groupData[s] = e;
            else
              try {
                delete o[0].showPop, delete o[0].showSet, delete o[0].btnPosition, o[0].groupData && o[0].groupData.forEach((n) => {
                  delete n.showPop, delete n.showSet;
                });
                for (let n in e) {
                  const v = n.split(".");
                  let g = o[0].groupData[s];
                  for (let k = 0; k < v.length; k++)
                    if (k === v.length - 1)
                      g[v[k]] = e[n];
                    else if (g = g[v[k]], !g)
                      throw new Error(n);
                }
              } catch {
                try {
                } catch {
                }
              }
            ye(o[0]);
          } else {
            if (l)
              r.value[s] = e;
            else
              try {
                delete r.value[s].showPop, delete r.value[s].showSet, delete r.value[s].btnPosition, r.value[s].groupData && r.value[s].groupData.forEach((n) => {
                  delete n.showPop, delete n.showSet;
                });
                for (let n in e) {
                  const v = n.split(".");
                  let g = r.value[s];
                  for (let k = 0; k < v.length; k++)
                    if (k === v.length - 1)
                      g[v[k]] = e[n];
                    else if (g = g[v[k]], !g)
                      throw new Error(n);
                }
              } catch {
                try {
                } catch {
                }
              }
            ye(r.value[s]);
          }
          oe();
        } else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, gt = (t, l = !1) => {
      let e = null;
      if (e = r.value.filter((s) => s.id === t)[0], e)
        return typeof l == "boolean" ? e.static = l : l && typeof l == "object" && (typeof l.static == "boolean" && (e.static = l.static), typeof l.dragable == "boolean" && (e.dragable = l.dragable), typeof l.resizable == "boolean" && (e.resizable = l.resizable)), B(r.value.filter((s) => s.id === e.id)[0]);
      try {
      } catch {
      } finally {
        return null;
      }
    }, qt = (t, l) => {
      t !== null && (ce = t, dt || (we(ie && ce ? t / ie : 1), r.value.forEach((e) => {
        ye(e);
      }), oe())), l !== null && (St = l);
    }, Tt = (t) => {
      t.showPop || (r.value.forEach((l) => {
        delete l.showPop, l.groupData && l.groupData.forEach((e) => {
          delete e.showPop;
        });
      }), E("openSetMenu", B(t)), t.showPop = !0, window.addEventListener("click", Ve));
    }, Ve = () => {
      r.value.forEach((t) => {
        delete t.showPop, t.groupData && t.groupData.forEach((l) => {
          delete l.showPop;
        });
      }), window.removeEventListener("click", Ve);
    }, m = X(!1), Gt = (t) => {
      const l = r.value.findIndex((e) => e.id === t);
      if (l !== -1)
        r.value[l].checked = !0, r.value[l].checkDis = !0, m.value = !0, E("showGroup", m.value);
      else
        try {
        } catch {
        }
    }, vt = () => {
      m.value = !1, r.value.forEach((t) => {
        delete t.checked, delete t.checkDis, t.groupData && t.groupData.forEach((l) => {
          delete l.checked, delete l.checkDis;
        });
      }), E("showGroup", m.value);
    }, Ut = (t) => {
      t.checked = !t.checked, E("updateChecked", r.value.filter((l) => l.checked).length);
    }, me = (t, l) => {
      const e = H(t), s = H(l);
      e.sort((f, T) => {
        const P = d(f.x), u = d(T.x);
        return P - u;
      });
      for (let f = 0; f < e.length - 1; f++) {
        if (f === 0 && e[f].x > 0) {
          const T = e[f].x;
          for (let P = f; P < e.length; P++)
            e[P].x -= T;
        }
        if (e[f + 1].x > e[f].x + e[f].width) {
          const T = I(e.slice(0, f + 1));
          if (e[f + 1].x > Math.max(...T.map((P) => P.x + P.width))) {
            const P = e[f + 1].x - Math.max(...T.map((u) => u.x + u.width));
            for (let u = f + 1; u < e.length; u++)
              e[u].x -= P;
          }
        }
      }
      e.sort((f, T) => {
        const P = d(f.y), u = d(T.y);
        return P - u;
      });
      for (let f = 0; f < e.length - 1; f++) {
        if (f === 0 && e[f].y > 0) {
          const T = e[f].y;
          for (let P = f; P < e.length; P++)
            e[P].y -= T;
        }
        if (e[f + 1].y > e[f].y + e[f].height) {
          const T = I(e.slice(0, f + 1));
          if (e[f + 1].y > Math.max(...T.map((P) => P.y + P.height))) {
            const P = e[f + 1].y - Math.max(...T.map((u) => u.y + u.height));
            for (let u = f + 1; u < e.length; u++)
              e[u].y -= P;
          }
        }
      }
      const o = e.map((f) => f.x + f.width), n = Math.max(...o), v = e.map((f) => f.y + f.height), g = Math.max(...v);
      e.forEach((f) => {
        f.inGroupId || (f.inGroupId = s.id), f.groupW = f.width / n, f.groupH = f.height / g, f.groupX = f.x / n, f.groupY = f.y / g, f.isObstacle = f.x + f.width === n && f.y === 0, delete f.width, delete f.height;
      });
      const k = getComputedStyle(K.value), D = parseInt(k.getPropertyValue("--group-tit-height").trim());
      return s.width = n, s.height = g + (s.groupTit ? D : 0), s.groupData = [...e], s;
    }, ge = (t, l) => {
      const e = getComputedStyle(K.value), s = parseInt(e.getPropertyValue("--group-tit-height").trim());
      t.width = l.width * t.groupW, t.height = (l.height - (l.groupTit ? s : 0)) * t.groupH;
    }, Jt = () => {
      Lt(() => {
        Mt();
      });
    }, Qt = () => {
      let t = r.value.filter((l) => l.checked);
      if (t.length > 1)
        if (t = _.beforeAddGroup(H(t)), typeof t == "object" && t instanceof Array && t.length > 0 && t.filter((l) => l.id).length === t.length) {
          const l = {
            id: (/* @__PURE__ */ new Date()).getTime() + "G",
            isGroup: !0,
            groupTit: ""
          }, e = me(t, l);
          return e.groupData.forEach((s) => {
            Pe(s.id, null, !1);
          }), De(e), vt(), B(r.value.filter((s) => s.id === e.id)[0]);
        } else
          try {
          } catch {
          } finally {
            return null;
          }
      else
        return vt(), null;
    }, zt = (t, l) => {
      const e = r.value.filter((s) => s.id === l)[0];
      if (e) {
        let s = e.groupData.filter((o) => o.id === t)[0];
        if (s) {
          if (e.groupData.length === 2)
            return Fe(l);
          if (s = _.beforeRemoveGroup(H([s])), typeof s == "object" && s instanceof Array && s.length === 1 && s.filter((o) => o.id).length === 1)
            return s = s[0], ge(s, e), delete s.inGroupId, delete s.groupW, delete s.groupH, delete s.groupX, delete s.groupY, delete s.isObstacle, Pe(s.id, e.id), De(s), [B(r.value.filter((o) => o.id === t)[0])];
          try {
          } catch {
          } finally {
            return [];
          }
        } else
          try {
          } catch {
          } finally {
            return [];
          }
      } else
        try {
        } catch {
        } finally {
          return [];
        }
    }, Fe = (t) => {
      const l = r.value.filter((e) => e.id === t)[0];
      if (l) {
        let e = [], s = !0;
        try {
          l.groupData.forEach((o) => {
            if (o = _.beforeRemoveGroup(H([l])), typeof o == "object" && o instanceof Array && o.length === 1 && o.filter((n) => n.id).length === 1)
              o = o[0];
            else
              throw s = !1, new Error();
          });
        } catch {
        }
        if (s) {
          Pe(l.id, null, !1), l.groupData.forEach((n) => {
            ge(n, l), n.x += l.x, n.y += l.y, delete n.inGroupId, delete n.groupW, delete n.groupH, delete n.groupX, delete n.groupY, delete n.isObstacle, e.push(n.id), De(n, null, !0);
          });
          let o = [];
          return e.forEach((n) => {
            o.push(B(r.value.filter((v) => v.id === n)[0]));
          }), o;
        } else
          return [];
      } else
        try {
        } catch {
        } finally {
          return [];
        }
    }, Zt = (t = "", l) => {
      const e = r.value.filter((s) => s.id === l)[0];
      if (e) {
        if (!e.groupTit || !t) {
          const s = getComputedStyle(K.value), o = parseInt(s.getPropertyValue("--group-tit-height").trim());
          e.groupTit && !t && (e.height -= o, e.s_height -= o * Q()), !e.groupTit && t && (e.height += o, e.s_height += o * Q());
        }
        e.groupTit = t, te([e], (s, o) => s.filter((n) => n.id !== o.id)), oe();
      } else
        try {
        } catch {
        }
    }, At = () => {
      r.value = [], Te(null), we(1), de.value = 0;
    }, mt = (t = null) => new Promise((l, e) => {
      r.value.forEach((o) => {
        delete o.showPop, delete o.showSet, o.groupData && o.groupData.forEach((n) => {
          delete n.showPop, delete n.showSet;
        });
      });
      const s = H(r.value);
      s.forEach((o) => {
        o.isGroup === !0 && o.groupData.forEach((n) => {
          ge(n, o), delete n.s_width, delete n.s_height, delete n.s_x, delete n.s_y;
        }), delete o.btnPosition, delete o.s_width, delete o.s_height, delete o.s_x, delete o.s_y;
      }), t && ie && s.forEach((o) => {
        ye(o, t / ie), kt(o, t / ie);
      }), l({ data: s, width: t || ie });
    });
    return ll(() => {
      Ct.unobserve(K.value), window.removeEventListener("click", Ve), window.removeEventListener("click", He), window.removeEventListener("keydown", lt), window.removeEventListener("keydown", be);
    }), w({ init: Vt, addItem: De, copyItem: pt, deleteItem: Pe, updateItem: Kt, toggleLockItem: gt, hideGroupSet: ft, openGroup: Gt, closeGroup: vt, changeGroupBorder: Jt, addGroup: Qt, removeGroupItem: zt, removeGroup: Fe, changeGroupTit: Zt, openTrimModel: tt, closeTrimModel: He, resetData: At, getData: mt }), (t, l) => (b(), S("div", {
      class: "vue-drag-component-plus",
      style: J({ "--item-scale": p(se), "--css-scale": c.seeModel ? p(Ge) : 1, "--com-x-space": p($) + "px", "--com-y-space": p(le) + "px" }),
      ref_key: "pageRef",
      ref: K
    }, [
      W("div", {
        class: "content-box",
        ref_key: "contentBoxRef",
        ref: Z
      }, [
        (b(!0), S(Ce, null, wt(p(r), (e, s) => (b(), S("div", {
          class: ve([
            "com-item",
            p(y) !== null ? "" : "not-move-animate",
            e.move ? "is-move" : "",
            e.drag ? "is-drag" : "",
            e.showPop || e.isGroup && e.groupData.filter((o) => o.showPop).length > 0 ? "on-top" : "",
            // 初始化标记
            p(We) + "p",
            // 查找时唯一标识
            "i" + e.id + "d"
          ]),
          style: J({
            width: e.s_width + "px",
            height: e.s_height + "px",
            top: e.s_y + "px",
            left: e.s_x + "px"
          }),
          key: s
        }, [
          W("div", {
            class: ve([
              "com-item-inner",
              c.seeModel || p(U) || p(m) || e.static === !0 || e.dragable === !1 ? "" : "can-drag",
              e.move || e.drag ? "always-hover" : "",
              c.seeModel ? "no-hover" : ""
            ]),
            onMousedown: q((o) => c.seeModel || p(U) || p(m) || e.static === !0 || e.dragable === !1 ? null : Dt(o, s), ["prevent"]),
            onMouseenter: (o) => c.seeModel || p(U) || p(m) || p(y) !== null || p(M) || !e.isGroup ? null : Ft(e),
            onMouseleave: (o) => c.seeModel || p(U) || p(m) || p(y) !== null || p(M) || !e.isGroup ? null : ft(e.id)
          }, [
            W("div", ul, [
              e.isGroup ? (b(), S(Ce, { key: 0 }, [
                e.groupTit ? (b(), S("div", {
                  key: 0,
                  class: "group-item-tit",
                  title: e.groupTit
                }, j(e.groupTit), 9, al)) : z("", !0),
                W("div", {
                  class: ve(["group-item-content", e.groupTit ? "" : "full"])
                }, [
                  (b(!0), S(Ce, null, wt(e.groupData, (o, n) => (b(), S("div", {
                    class: ve([
                      "com-item-box-child",
                      o.isObstacle ? "is-obstacle" : "",
                      p(We) + "c"
                    ]),
                    style: J({
                      width: o.s_width + "px",
                      height: o.s_height + "px",
                      top: o.s_y + "px",
                      left: o.s_x + "px"
                    }),
                    key: n
                  }, [
                    W("div", hl, [
                      Ie(t.$slots, "item", { data: o }, () => [
                        W("p", null, j(Math.round(o.s_width * 100) / 100) + "," + j(Math.round(o.s_height * 100) / 100), 1),
                        W("p", null, j(Math.round(o.s_x * 100) / 100) + "," + j(Math.round(o.s_y * 100) / 100), 1)
                      ])
                    ]),
                    !c.seeModel && !p(U) && !p(m) && p(y) === null && p(M) === null ? (b(), S("div", {
                      key: 0,
                      class: "setting-box",
                      style: J({ display: o.showPop ? "flex" : "none" }),
                      onMousedown: q((v) => null, ["prevent", "stop"])
                    }, [
                      Rt(Yt, {
                        iconObj: c.settingIcon,
                        onClick: q((v) => Tt(o), ["prevent", "stop"])
                      }, null, 8, ["iconObj", "onClick"])
                    ], 36)) : z("", !0),
                    o.showPop ? (b(), S("div", {
                      key: 1,
                      class: "setting-box-pop",
                      onMousedown: q((v) => null, ["prevent", "stop"])
                    }, [
                      Ie(t.$slots, "setPopNormal", {
                        data: B(o)
                      }, () => [
                        W("div", {
                          class: "setting-box-pop-item",
                          onClick: (v) => zt(o.id, o.inGroupId)
                        }, "移出组合", 8, cl),
                        W("div", {
                          class: "setting-box-pop-item",
                          onClick: (v) => pt(o.id, o.inGroupId)
                        }, "复制", 8, dl),
                        W("div", {
                          class: "setting-box-pop-item",
                          onClick: (v) => Pe(o.id, o.inGroupId)
                        }, "删除", 8, fl)
                      ])
                    ], 32)) : z("", !0)
                  ], 6))), 128))
                ], 2)
              ], 64)) : (b(), S("div", pl, [
                Ie(t.$slots, "item", { data: e }, () => [
                  W("p", null, j(Math.round(e.s_width * 100) / 100) + "," + j(Math.round(e.s_height * 100) / 100), 1),
                  W("p", null, j(Math.round(e.s_x * 100) / 100) + "," + j(Math.round(e.s_y * 100) / 100), 1)
                ])
              ])),
              !e.isGroup && e.notGroup !== !0 && p(m) ? (b(), S("div", {
                key: 2,
                class: ve(["group-checkbox", e.checked ? "is-checked" : "", e.checkDis ? "disabled" : ""]),
                onClick: (o) => e.checkDis ? null : Ut(e)
              }, null, 10, gl)) : z("", !0),
              !c.seeModel && !p(U) && !p(m) && p(y) === null && p(M) === null ? (b(), S("div", {
                key: 3,
                class: ve(["setting-box", e.isGroup === !0 ? e.btnPosition === "right" ? "only-g" : e.btnPosition === "left" ? "only-g l" : e.btnPosition === "top" ? "only-g t" : e.btnPosition === "bottom" ? "only-g b" : e.btnPosition === "center" ? "only-g c" : "" : ""]),
                style: J({ display: e.showPop || e.showSet ? "flex" : "none" }),
                onMousedown: q((o) => null, ["prevent", "stop"])
              }, [
                Rt(Yt, {
                  iconObj: c.settingIcon,
                  onClick: q((o) => Tt(e), ["prevent", "stop"])
                }, null, 8, ["iconObj", "onClick"])
              ], 38)) : z("", !0),
              e.showPop ? (b(), S("div", {
                key: 4,
                class: ve(["setting-box-pop", e.isGroup === !0 ? e.btnPosition === "right" ? "special" : e.btnPosition === "left" ? "special l" : e.btnPosition === "top" ? "special t" : e.btnPosition === "bottom" ? "special b" : e.btnPosition === "center" ? "special c" : "" : ""]),
                onMousedown: q((o) => null, ["prevent", "stop"])
              }, [
                e.isGroup === !0 ? Ie(t.$slots, "setPopSpecial", {
                  key: 0,
                  data: B(e)
                }, () => [
                  W("div", {
                    class: "setting-box-pop-item",
                    onClick: (o) => gt(e.id, e.static !== !0)
                  }, j(e.static === !0 ? "解除" : "") + "锁定 ", 9, vl),
                  e.static !== !0 ? (b(), S("div", {
                    key: 0,
                    class: "setting-box-pop-item",
                    onClick: (o) => tt(e.id)
                  }, " 微调 ", 8, yl)) : z("", !0),
                  c.hideTit ? z("", !0) : (b(), S("div", {
                    key: 1,
                    class: "setting-box-pop-item",
                    onClick: (o) => {
                      ft(e.id), E("showTitPop", e.groupTit, e.id);
                    }
                  }, " 设置组合标题 ", 8, _l)),
                  W("div", {
                    class: "setting-box-pop-item",
                    onClick: (o) => Fe(e.id)
                  }, "解除组合", 8, xl)
                ]) : Ie(t.$slots, "setPopNormal", {
                  key: 1,
                  data: B(e)
                }, () => [
                  e.notGroup !== !0 ? (b(), S("div", {
                    key: 0,
                    class: "setting-box-pop-item",
                    onClick: (o) => Gt(e.id)
                  }, "组合", 8, wl)) : z("", !0),
                  W("div", {
                    class: "setting-box-pop-item",
                    onClick: (o) => gt(e.id, e.static !== !0)
                  }, j(e.static === !0 ? "解除" : "") + "锁定 ", 9, Ml),
                  e.static !== !0 ? (b(), S("div", {
                    key: 1,
                    class: "setting-box-pop-item",
                    onClick: (o) => tt(e.id)
                  }, " 微调 ", 8, bl)) : z("", !0),
                  W("div", {
                    class: "setting-box-pop-item",
                    onClick: (o) => pt(e.id)
                  }, "复制", 8, kl),
                  W("div", {
                    class: "setting-box-pop-item",
                    onClick: (o) => Pe(e.id)
                  }, "删除", 8, Sl)
                ])
              ], 34)) : z("", !0)
            ]),
            !c.seeModel && !p(U) && !p(m) && !e.showPop && !(e.isGroup && e.groupData.filter((o) => o.showPop).length > 0) && !e.move && e.static !== !0 && e.resizable !== !1 ? (b(), S(Ce, { key: 0 }, [
              p(F).indexOf("topLeft") !== -1 ? (b(), S("div", {
                key: 0,
                class: "resize-line top-left",
                onMousedown: q((o) => pe(o, e, "top-left"), ["prevent", "stop"])
              }, null, 40, El)) : z("", !0),
              p(F).indexOf("top") !== -1 ? (b(), S("div", {
                key: 1,
                class: "resize-line top",
                onMousedown: q((o) => pe(o, e, "top"), ["prevent", "stop"])
              }, null, 40, Dl)) : z("", !0),
              p(F).indexOf("topRight") !== -1 ? (b(), S("div", {
                key: 2,
                class: "resize-line top-right",
                onMousedown: q((o) => pe(o, e, "top-right"), ["prevent", "stop"])
              }, null, 40, Pl)) : z("", !0),
              p(F).indexOf("left") !== -1 ? (b(), S("div", {
                key: 3,
                class: "resize-line left",
                onMousedown: q((o) => pe(o, e, "left"), ["prevent", "stop"])
              }, null, 40, Cl)) : z("", !0),
              p(F).indexOf("right") !== -1 ? (b(), S("div", {
                key: 4,
                class: "resize-line right",
                onMousedown: q((o) => pe(o, e, "right"), ["prevent", "stop"])
              }, null, 40, Il)) : z("", !0),
              p(F).indexOf("bottomLeft") !== -1 ? (b(), S("div", {
                key: 5,
                class: "resize-line bottom-left",
                onMousedown: q((o) => pe(o, e, "bottom-left"), ["prevent", "stop"])
              }, null, 40, Tl)) : z("", !0),
              p(F).indexOf("bottom") !== -1 ? (b(), S("div", {
                key: 6,
                class: "resize-line bottom",
                onMousedown: q((o) => pe(o, e, "bottom"), ["prevent", "stop"])
              }, null, 40, Gl)) : z("", !0),
              p(F).indexOf("bottomRight") !== -1 ? (b(), S("div", {
                key: 7,
                class: "resize-line bottom-right",
                onMousedown: q((o) => pe(o, e, "bottom-right"), ["prevent", "stop"])
              }, null, 40, zl)) : z("", !0)
            ], 64)) : z("", !0)
          ], 42, il)
        ], 6))), 128)),
        (b(!0), S(Ce, null, wt(p(r), (e, s) => (b(), S("div", {
          class: ve([
            "shadow-bg",
            p(y) !== null ? "" : "not-move-animate",
            e.move ? "is-move" : "",
            e.drag ? "is-drag" : ""
          ]),
          style: J({
            width: e.s_width - p($) * 2 + "px",
            height: e.s_height - p(le) * 2 + "px",
            top: e.s_y + p(le) + "px",
            left: e.s_x + p($) + "px"
          }),
          key: s
        }, null, 6))), 128)),
        p(y) !== null || p(M) ? (b(), S("div", {
          key: 0,
          class: "drag-bg",
          style: J({
            width: p(i).s_width + "px",
            height: p(i).s_height + "px",
            top: p(i).s_y + "px",
            left: p(i).s_x + "px"
          })
        }, null, 4)) : z("", !0),
        W("div", {
          class: "height-bg",
          style: J({ height: (p(de) > 0 ? p(de) * Q() + (c.seeModel ? c.seeModelMinBg : 220) : 0) + "px" })
        }, null, 4),
        c.showAuxiliary ? (b(), S(Ce, { key: 1 }, [
          p(ze) !== null ? (b(), S("div", {
            key: 0,
            class: "auxiliary-line hor",
            style: J({ top: p(ze) + "px", left: "0px" })
          }, null, 4)) : z("", !0),
          p(Ae) !== null ? (b(), S("div", {
            key: 1,
            class: "auxiliary-line hor",
            style: J({ top: p(Ae) + "px", left: "0px" })
          }, null, 4)) : z("", !0),
          p(Oe) !== null ? (b(), S("div", {
            key: 2,
            class: "auxiliary-line hor",
            style: J({ top: p(Oe) + "px", left: "0px" })
          }, null, 4)) : z("", !0),
          p(Be) !== null ? (b(), S("div", {
            key: 3,
            class: "auxiliary-line",
            style: J({ top: "0px", left: p(Be) + "px", height: p(de) * Q() + 220 + "px" })
          }, null, 4)) : z("", !0),
          p(Re) !== null ? (b(), S("div", {
            key: 4,
            class: "auxiliary-line",
            style: J({ top: "0px", left: p(Re) + "px", height: p(de) * Q() + 220 + "px" })
          }, null, 4)) : z("", !0),
          p(Le) !== null ? (b(), S("div", {
            key: 5,
            class: "auxiliary-line",
            style: J({ top: "0px", left: p(Le) + "px", height: p(de) * Q() + 220 + "px" })
          }, null, 4)) : z("", !0)
        ], 64)) : z("", !0),
        p(r).length === 0 ? (b(), S("div", Al, [
          Ie(t.$slots, "empty", {}, () => [
            l[0] || (l[0] = ol(" 暂无数据 "))
          ])
        ])) : z("", !0)
      ], 512)
    ], 4));
  }
}, Bl = [Ol], Rl = {
  install(c) {
    Bl.forEach((w) => {
      c.component("vueDragComponentPlus", w);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Rl);
export {
  Rl as default
};
