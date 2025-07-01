import { resolveComponent as Jt, openBlock as b, createBlock as pt, resolveDynamicComponent as Tt, normalizeProps as zt, mergeProps as Ue, withCtx as Qt, createElementBlock as M, toDisplayString as Z, ref as X, watch as gt, onMounted as Zt, onBeforeUnmount as jt, normalizeStyle as q, unref as h, createElementVNode as W, Fragment as Me, renderList as yt, normalizeClass as pe, withModifiers as F, createCommentVNode as G, renderSlot as Ee, createVNode as Ot, createTextVNode as el, nextTick as At, isVNode as Bt } from "vue";
const Rt = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(u) {
    return (x, R) => {
      const E = Jt("el-icon");
      return u.iconObj.type === "custom" ? (b(), pt(Tt(u.iconObj.icon), zt(Ue({ key: 0 }, u.iconObj.attrs)), null, 16)) : u.iconObj.type === "el" ? (b(), pt(E, zt(Ue({ key: 1 }, u.iconObj.attrs)), {
        default: Qt(() => [
          (b(), pt(Tt(u.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : u.iconObj.type === "iconfont" ? (b(), M("i", Ue({
        key: 2,
        class: ["icon iconfont", "icon-" + u.iconObj.icon]
      }, u.iconObj.attrs), null, 16)) : (b(), M("i", Ue({
        key: 3,
        class: u.iconObj.type
      }, u.iconObj.attrs), Z(u.iconObj.icon), 17));
    };
  }
}, Lt = (u, x = { x: "x", y: "y", width: "width", height: "height" }) => {
  let R = null;
  return u instanceof Array ? (R = [], u.forEach((E) => {
    typeof E[x.x] == "number" && typeof E[x.y] == "number" && typeof E[x.width] == "number" && typeof E[x.height] == "number" && R.push({
      x: E[x.x],
      y: E[x.y],
      width: E[x.width],
      height: E[x.height]
    });
  })) : typeof u[x.width] == "number" && typeof u[x.height] == "number" && (R = {
    width: u[x.width],
    height: u[x.height]
  }), R;
}, tl = (u) => {
  const x = /* @__PURE__ */ new Map();
  return u.forEach((R) => {
    x.has(R.x) || x.set(R.x, []), x.get(R.x).push(R);
  }), x;
}, ll = (u, x) => u.filter((R) => R.x <= x.x && R.x + R.width > x.x || R.x > x.x && R.x < x.x + x.width), ol = (u, x, R, E = !1) => {
  if (x.width > R)
    return null;
  let v = [];
  if (u.length === 0) {
    const H = { x: 0, y: 0 };
    return E ? [H] : H;
  }
  const L = Math.max(...u.map((H) => H.y + H.height)), C = /* @__PURE__ */ new Set([0]);
  u.forEach((H) => {
    C.add(H.y), C.add(H.y + H.height);
  });
  const Je = Array.from(C).sort((H, a) => H - a);
  for (const H of Je) {
    const a = H + x.height;
    if (a > L)
      continue;
    const j = u.filter((r) => r.y < a && r.y + r.height > H);
    if (j.length === 0) {
      const r = { x: 0, y: H };
      if (!E)
        return r;
      v.push(r);
      continue;
    }
    const B = j.map((r) => [r.x, r.x + r.width]);
    B.sort((r, ue) => r[0] - ue[0]);
    const O = [];
    let [U, ee] = B[0];
    for (let r = 1; r < B.length; r++) {
      const [ue, m] = B[r];
      ue <= ee ? ee = Math.max(ee, m) : (O.push([U, ee]), [U, ee] = [ue, m]);
    }
    if (O.push([U, ee]), O[0][0] >= x.width) {
      const r = { x: 0, y: H };
      if (!E)
        return r;
      v.push(r);
    }
    let A = O[0][1];
    for (let r = 1; r < O.length; r++) {
      if (O[r][0] - A >= x.width) {
        const m = { x: A, y: H };
        if (!E)
          return m;
        v.push(m);
      }
      A = Math.max(A, O[r][1]);
    }
    if (R - A >= x.width) {
      const r = { x: A, y: H };
      if (!E)
        return r;
      v.push(r);
    }
  }
  return E ? (tl(v).forEach((a, j) => {
    if (a.length > 1)
      for (let B = 0; B < a.length - 1; B++) {
        let O = { ...x, ...a[B] };
        ll(u.filter((U) => U.y >= O.y + O.height && U.y <= a[B + 1].y), O).length === 0 && (v = v.filter((U) => !(U.x === a[B + 1].x && U.y === a[B + 1].y)), a.splice(B, 1), B--);
      }
  }), v.sort((a, j) => a.y !== j.y ? a.y - j.y : a.x - j.x), v.length === 0 ? null : v) : null;
};
const sl = ["onMousedown", "onMouseenter", "onMouseleave"], rl = { class: "com-item-box" }, nl = ["title"], il = { class: "com-item-box-content" }, ul = ["onClick"], al = ["onClick"], cl = ["onClick"], hl = {
  key: 1,
  class: "com-item-box-content"
}, dl = ["onClick"], fl = ["onClick"], pl = ["onClick"], gl = ["onClick"], yl = ["onClick"], vl = ["onClick"], _l = ["onClick"], xl = ["onClick"], wl = ["onClick"], bl = ["onClick"], kl = ["onMousedown"], Ml = ["onMousedown"], El = ["onMousedown"], Sl = ["onMousedown"], Dl = ["onMousedown"], Pl = ["onMousedown"], Cl = ["onMousedown"], Il = ["onMousedown"], Gl = {
  key: 2,
  class: "com-empty"
}, Tl = {
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
      validator(u, x) {
        return u >= 0;
      }
    },
    // 组件项最小宽度（原始尺寸）
    itemMinWidth: {
      type: Number,
      default: 50,
      validator(u, x) {
        return u >= 20;
      }
    },
    // 组件项最小高度（原始尺寸）
    itemMinHeight: {
      type: Number,
      default: 50,
      validator(u, x) {
        return u >= 20;
      }
    },
    // 纵向相邻元素的自动间距（原始尺寸）
    xSpace: {
      type: Number,
      default: 10,
      validator(u, x) {
        return u >= 0;
      }
    },
    // 横向相邻元素的自动间距（原始尺寸）
    ySpace: {
      type: Number,
      default: null,
      validator(u, x) {
        return u >= 0;
      }
    },
    // 高度缩放折扣率（让高度没那么大变化）
    hScaleDiscount: {
      type: Number,
      default: 0.2,
      validator(u, x) {
        return u > 0;
      }
    },
    // 预览模式组件内css缩放比例最小值
    cssScaleMin: {
      type: Number,
      default: 0.75,
      validator(u, x) {
        return u > 0;
      }
    },
    // 预览模式组件内css缩放比例最大值
    cssScaleMax: {
      type: Number,
      default: 1.2,
      validator(u, x) {
        return u > 0 && u >= (x ? x.cssScaleMin : 0.1);
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
      default: (u) => u
    },
    // 解散/移出组合前数据处理
    beforeRemoveGroup: {
      type: Function,
      default: (u) => u
    },
    // 拖拽事件触发延迟时间（防止不小心单击了一下而开始拖动）
    dragDelayTime: {
      type: Number,
      default: 200,
      validator(u, x) {
        return u >= 0 && u < 1e3;
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
  setup(u, { expose: x, emit: R }) {
    const E = R, v = u, L = (t) => {
      if (typeof t == "object" && !Bt(t) && t !== null && !(t instanceof Date)) {
        let l = t instanceof Array ? [] : {};
        for (let e in t)
          l[e] = typeof t[e] == "object" && !Bt(t[e]) && t[e] !== null && !(t[e] instanceof Date) ? L(t[e]) : t[e];
        return l;
      } else
        return t;
    }, C = (t) => {
      let l = {};
      if (t instanceof Array)
        l = [], t.forEach((e) => {
          l.push(C(e));
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
          ].indexOf(e) !== -1 && (e === "groupData" ? l[e] = C(t[e]) : l[e] = t[e]);
      return l;
    }, Je = (t, l) => {
      let e = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
      for (; t && !e.call(t, l); )
        t = t.parentElement;
      return t;
    }, H = (t, l) => t.classList ? t.classList.contains(l) : new RegExp("\\s" + l + "\\s").test(" " + t.className + " "), a = (t) => parseFloat(t.toFixed(7)), j = (t, l) => {
      let e = [], s = (o) => {
        o.forEach((n) => {
          H(n, l) && e.push(n), n.childNodes && n.childNodes.length > 0 && s(n.childNodes);
        });
      };
      return s(t.childNodes), e;
    }, B = (t, l, e = !1) => U(O(t, l, e), l, e), O = (t, l, e = !1) => t.filter((s) => a(s[e ? "s_x" : "x"]) <= a(l[e ? "s_x" : "x"]) && a(s[e ? "s_x" : "x"] + s[e ? "s_width" : "width"]) > a(l[e ? "s_x" : "x"]) || a(s[e ? "s_x" : "x"]) > a(l[e ? "s_x" : "x"]) && a(s[e ? "s_x" : "x"]) < a(l[e ? "s_x" : "x"] + l[e ? "s_width" : "width"])), U = (t, l, e = !1) => t.filter((s) => a(s[e ? "s_y" : "y"]) <= a(l[e ? "s_y" : "y"]) && a(s[e ? "s_y" : "y"] + s[e ? "s_height" : "height"]) > a(l[e ? "s_y" : "y"]) || a(s[e ? "s_y" : "y"]) > a(l[e ? "s_y" : "y"]) && a(s[e ? "s_y" : "y"]) < a(l[e ? "s_y" : "y"] + l[e ? "s_height" : "height"])), ee = (t, l = (s) => s, e = !1) => {
      const s = C(r.value), o = C(t);
      o.sort((g, p) => {
        const S = a(g[e ? "s_y" : "y"]), Y = a(p[e ? "s_y" : "y"]);
        if (S !== Y)
          return S - Y;
        {
          const c = a(g[e ? "s_x" : "x"]), D = a(p[e ? "s_x" : "x"]);
          return c - D;
        }
      });
      const n = (g) => {
        B(l(s, g), g, e).forEach((S) => {
          S[e ? "s_y" : "y"] = g[e ? "s_y" : "y"] + g[e ? "s_height" : "height"], n(S);
        });
      };
      o.forEach((g) => n(s.filter((p) => p.id === g.id)[0])), s.forEach((g) => {
        r.value.filter((p) => p.id === g.id)[0][e ? "s_y" : "y"] = g[e ? "s_y" : "y"];
      });
    }, A = (t) => {
      const l = L(t);
      return delete l.showPop, delete l.showSet, l.groupData ? l.groupData.forEach((e) => {
        delete e.showPop, delete e.showSet, fe(e, l), delete e.s_width, delete e.s_height, delete e.s_x, delete e.s_y;
      }) : l.inGroupId && (delete l.showPop, delete l.showSet, fe(l, r.value.filter((e) => e.id === l.inGroupId)[0])), delete l.btnPosition, delete l.s_width, delete l.s_height, delete l.s_x, delete l.s_y, delete l.syCopy, l;
    }, r = X([]), ue = () => {
      v.insertResizeKeys.forEach((t) => {
        v.excludeResizeKeys.indexOf(t) === -1 && m.value.push(t);
      });
    };
    gt(
      () => [v.insertResizeKeys, v.excludeResizeKeys],
      () => {
        ue();
      }
    );
    const m = X([]);
    ue();
    const vt = () => {
      r.value.length > 0 && r.value.filter((t) => t.isGroup === !0).forEach((t) => {
        ge(t);
      });
    }, _t = () => {
      v.xSpace !== null && v.xSpace !== void 0 ? $.value = v.xSpace / 2 : $.value = 10 / 2, v.ySpace !== null && v.ySpace !== void 0 && v.ySpace >= 0 ? te.value = v.ySpace / 2 : te.value = $.value, vt();
    };
    gt(
      () => [v.xSpace, v.ySpace],
      () => {
        _t();
      }
    );
    const $ = X(0), te = X(0);
    _t();
    const V = X(null);
    let ne = null;
    const Se = (t) => {
      ne = t, E("baseWidthInit", ne);
    }, oe = X(1), De = X(1), _e = (t) => {
      oe.value = t, t < v.cssScaleMin ? De.value = v.cssScaleMin : t > v.cssScaleMax ? De.value = v.cssScaleMax : De.value = t, E("changeScale", oe.value), E("changeCssScale", v.seeModel ? De.value : 1);
    }, J = () => 1 + (oe.value - 1) * v.hScaleDiscount;
    gt(
      () => v.seeModel,
      () => {
        _e(oe.value);
      }
    );
    const ge = (t, l = null) => {
      l ? (t.width = t.width * l, t.height = t.height * l) : (t.s_width = t.width * oe.value, t.s_height = t.height * J());
      const e = getComputedStyle(V.value), s = parseInt(e.getPropertyValue("--com-item-border-width").trim()), o = parseInt(e.getPropertyValue("--group-tit-height").trim());
      if (t.isGroup === !0)
        if (l) {
          const n = t.width, g = t.height - (t.groupTit ? o : 0);
          t.groupData.forEach((p) => {
            p.width = n * p.groupW, p.height = g * p.groupH, p.x = n * p.groupX, p.y = g * p.groupY;
          });
        } else {
          const n = t.s_width - 2 * $.value - 2 * s, g = t.s_height - 2 * te.value - 2 * s - (t.groupTit ? o : 0);
          t.groupData.forEach((p) => {
            p.s_width = n * p.groupW, p.s_height = g * p.groupH, p.s_x = n * p.groupX, p.s_y = g * p.groupY;
          });
        }
    }, xt = (t, l = null) => {
      l ? (t.s_x = t.x * l, t.s_y = t.y * l) : (t.s_x = t.x * oe.value, t.s_y = t.y * J());
    }, Ht = (t) => {
      t.width = t.s_width / oe.value, t.height = t.s_height / J();
      const l = getComputedStyle(V.value), e = parseInt(l.getPropertyValue("--group-tit-height").trim());
      if (t.isGroup === !0) {
        const s = t.width, o = t.height - (t.groupTit ? e : 0);
        t.groupData.forEach((n) => {
          n.x = s * n.groupX, n.y = o * n.groupY;
        });
      }
    }, Pe = (t) => {
      t.x = t.s_x / oe.value, t.y = t.s_y / J();
    };
    let ae = null, wt = null;
    const ce = X(0), Ce = X(null), Ie = X(null), Ge = X(null), Te = X(null), ze = X(null), Oe = X(null), ye = (t) => {
      const l = C(t);
      if (!v.showAuxiliary || t === null)
        Ce.value = null, Ie.value = null, Ge.value = null, Te.value = null, ze.value = null, Oe.value = null;
      else {
        const e = getComputedStyle(V.value), s = parseInt(e.getPropertyValue("--auxiliary-width").trim()), o = r.value.filter((f) => f.id !== l.id).map((f) => Math.round(f.s_y)), n = r.value.filter((f) => f.id !== l.id).map((f) => Math.round(f.s_y + f.s_height / 2)), g = r.value.filter((f) => f.id !== l.id).map((f) => Math.round(f.s_y + f.s_height)), p = [...o, ...n, ...g];
        p.sort(), p.filter((f) => f === Math.round(l.s_y)).length > 0 ? Ce.value = l.s_y : Ce.value = null, p.filter((f) => f === Math.round(l.s_y + l.s_height / 2)).length > 0 ? Ie.value = l.s_y + l.s_height / 2 : Ie.value = null, p.filter((f) => f === Math.round(l.s_y + l.s_height)).length > 0 ? Ge.value = l.s_y + l.s_height - s : Ge.value = null;
        const S = r.value.filter((f) => f.id !== l.id).map((f) => Math.round(f.s_x)), Y = r.value.filter((f) => f.id !== l.id).map((f) => Math.round(f.s_x + f.s_width / 2)), c = r.value.filter((f) => f.id !== l.id).map((f) => Math.round(f.s_x + f.s_width)), D = [...S, ...Y, ...c];
        D.sort(), D.filter((f) => f === Math.round(l.s_x)).length > 0 ? Te.value = l.s_x : Te.value = null, D.filter((f) => f === Math.round(l.s_x + l.s_width / 2)).length > 0 ? ze.value = l.s_x + l.s_width / 2 : ze.value = null, D.filter((f) => f === Math.round(l.s_x + l.s_width)).length > 0 ? Oe.value = l.s_x + l.s_width - s : Oe.value = null;
      }
    }, xe = () => {
      window.removeEventListener("keydown", xe), y !== null ? We() : k !== null && st();
    }, K = X(!1), Qe = (t) => {
      let l = null;
      if (l = r.value.filter((e) => e.id === t)[0], l && l.static !== !0 && l.dragable !== !1)
        K.value = !0, Mt(r.value.findIndex((e) => e.id === t)), setTimeout(() => {
          window.addEventListener("click", Ae), window.addEventListener("keydown", Ze);
        }, 50), E("changeTrimModel", K.value, A(r.value.filter((e) => e.id === l.id)[0]));
      else
        try {
        } catch {
        }
    }, Ze = (t) => {
      switch (t.keyCode) {
        case 13:
        case 27:
        case 32:
          t.preventDefault(), Ae();
          break;
        case 37:
          t.preventDefault(), we("left");
          break;
        case 38:
          t.preventDefault(), we("top");
          break;
        case 39:
          t.preventDefault(), we("right");
          break;
        case 40:
          t.preventDefault(), we("bottom");
          break;
      }
    }, Ae = () => {
      window.removeEventListener("click", Ae), window.removeEventListener("keydown", Ze), We(), K.value = !1, E("changeTrimModel", K.value);
    }, d = X({});
    let y = null, je = null, et = null, tt = null, ie = null;
    const ve = X(null);
    let bt = null, lt = null, kt = null, ot = null, Xe = null, $e = null;
    const Mt = (t, l) => {
      clearTimeout(tt), clearTimeout(ie), Ye();
      const e = ve.value.getBoundingClientRect();
      if (bt = e.left, lt = e.top, kt = e.bottom, ot = e.height, typeof v.moveDistance == "string" ? Xe = v.moveDistance.indexOf("px") !== -1 ? parseFloat(v.moveDistance) : 50 : Xe = v.moveDistance * ot, typeof v.scrollDistance == "string" ? $e = v.scrollDistance.indexOf("px") !== -1 ? parseFloat(v.scrollDistance) : 20 : $e = v.scrollDistance * ot, K.value)
        ie = null, y = t, d.value = C(r.value[y]), E("dragStart", A(r.value[y])), r.value[y].move = !0, ye(r.value[y]), je = 0, et = 0;
      else {
        const s = Je(t.target, ".com-item");
        s && (ie = setTimeout(() => {
          ie = null, y = l, d.value = C(r.value[y]), E("dragStart", A(r.value[y])), r.value[y].move = !0, ye(r.value[y]);
          const o = s.getBoundingClientRect();
          je = t.clientX - o.left, et = t.clientY - o.top, window.addEventListener("mousemove", we), window.addEventListener("keydown", xe);
        }, v.dragDelayTime), window.addEventListener("mouseup", We));
      }
    }, we = (t) => {
      clearTimeout(tt), clearTimeout(ie), ie = null;
      let l = null, e = null;
      if (K.value)
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
        l = t.clientX - bt - je, e = t.clientY - lt + ve.value.scrollTop - et;
      const s = l <= he("left") ? he("left") : l >= he("right") ? he("right") : l, o = e <= he("top") ? he("top") : e >= he("bottom") ? he("bottom") : e, n = s - r.value[y].s_x, g = o - r.value[y].s_y;
      let p = "";
      n > 0 ? p = "right" : n < 0 ? p = "left" : g > 0 ? p = "bottom" : g < 0 && (p = "top"), r.value[y].s_x = s, r.value[y].s_y = o;
      let S = null;
      K.value && (S = j(V.value, "i" + r.value[y].id + "d")[0].getBoundingClientRect().top), (S || t.clientY) - lt <= Xe && p === "top" && (ve.value.scrollTop = ve.value.scrollTop - $e), kt - (S || t.clientY) <= Xe && p === "bottom" && (ve.value.scrollTop = ve.value.scrollTop + $e);
      let Y = B(C(r.value.filter((c) => c.move !== !0)), r.value[y], !0);
      if (Y.length === 0)
        d.value.s_x = s, d.value.s_y = o;
      else
        switch (p) {
          case "top":
            const c = L(d.value);
            c.s_x = s, B(C(r.value.filter((i) => i.move !== !0)), c, !0).length === 0 && (d.value.s_x = s);
            const D = Y.filter((i) => v.mobileDragModel ? a(i.s_height + i.s_y - o) > 2 * te.value : r.value[y].s_height >= i.s_height && o - i.s_y <= 15 || r.value[y].s_height < i.s_height && o - i.s_y <= r.value[y].s_height / 2);
            if (D.length > 0) {
              const i = O(C(r.value.filter((_) => _.move !== !0 && a(_.s_y + _.s_height) <= a(d.value.s_y) && D.filter((P) => P.id === _.id).length === 0)), d.value, !0);
              let z = r.value[y].s_height;
              if (i.length === 0 && (z -= Math.min(...D.map((_) => _.s_y))), Y.length === D.length ? d.value.s_y = i.length === 0 ? 0 : Math.max(...i.map((_) => _.s_y + _.s_height)) : d.value.s_y = Math.max(...i.map((_) => _.s_y + _.s_height)), d.value.s_x = s, z > 0) {
                const _ = L(D);
                D.forEach((P) => {
                  O(r.value.filter((N) => N.move !== !0 && a(N.s_y) >= a(P.s_y + P.s_height)), P, !0).forEach((N) => {
                    _.filter((ft) => ft.id === N.id).length === 0 && _.push(C(N));
                  });
                }), _.forEach((P) => {
                  Y.length !== D.length && D.filter((I) => I.id === P.id).length === 1 && (P.s_y = d.value.s_y), P.s_y += z, r.value.filter((I) => I.id === P.id)[0].s_y = P.s_y;
                });
              }
            }
            break;
          case "bottom":
            const f = L(d.value);
            f.s_x = s, B(C(r.value.filter((i) => i.move !== !0)), f, !0).length === 0 && (d.value.s_x = s);
            const w = Y.filter((i) => v.mobileDragModel ? a(o + r.value[y].s_height - i.s_y) > 2 * te.value : r.value[y].s_height >= i.s_height && i.s_y + i.s_height - o - r.value[y].s_height <= 15 || r.value[y].s_height < i.s_height && i.s_y + i.s_height - o - r.value[y].s_height <= i.s_height / 2);
            if (w.length > 0) {
              w.forEach((_) => {
                const P = O(C(r.value.filter((I) => I.move !== !0 && a(I.s_y + I.s_height) <= a(_.s_y))), _, !0);
                _.s_y = P.length === 0 ? 0 : Math.max(...P.map((I) => I.s_y + I.s_height)), r.value.filter((I) => I.id === _.id)[0].s_y = _.s_y;
              });
              const i = [...B(w, r.value[y], !0), ...O(C(r.value.filter((_) => _.move !== !0 && a(_.s_y + _.s_height) <= a(r.value[y].s_y + r.value[y].s_height))), r.value[y], !0)];
              let z = Math.max(...i.map((_) => _.s_y + _.s_height)) - d.value.s_y;
              if (d.value.s_y = Math.max(...i.map((_) => _.s_y + _.s_height)), d.value.s_x = s, z > 0) {
                const _ = O(r.value.filter((P) => P.move !== !0 && a(P.s_y) >= a(d.value.s_y)), d.value, !0);
                C(_).forEach((P) => {
                  O(r.value.filter((N) => N.move !== !0 && a(N.s_y) >= a(P.s_y + P.s_height)), P, !0).forEach((N) => {
                    _.filter((ft) => ft.id === N.id).length === 0 && _.push(C(N));
                  });
                }), _.forEach((P) => {
                  P.s_y += z, r.value.filter((I) => I.id === P.id)[0].s_y = P.s_y;
                });
              }
            }
            break;
          case "left":
          case "right":
            const T = Y.filter((i) => i.s_x + i.s_width - s >= $.value * 2 && s + r.value[y].s_width - i.s_x >= $.value * 2).filter((i) => o < i.s_y || o >= i.s_y && o - i.s_y <= 15).sort((i, z) => {
              const _ = a(i.s_y), P = a(z.s_y);
              return _ - P;
            });
            if (T.length > 0)
              d.value.s_x = s, d.value.s_y = Math.min(...T.map((i) => i.s_y));
            else {
              let i = C(r.value[y]);
              if (i.s_y = Math.min(...Y.map((z) => z.s_y)) - i.s_height, d.value.s_y >= Math.min(...Y.map((z) => z.s_y + z.s_height)) || i.s_y >= 0 && B(C(r.value.filter((z) => z.move !== !0)), i, !0).length === 0) {
                const z = L(d.value);
                z.s_x = s, B(C(r.value.filter((_) => _.move !== !0)), z, !0).length === 0 && (d.value.s_x = s);
              }
            }
            T.forEach((i) => {
              const z = d.value.s_y + d.value.s_height - i.s_y > 0 ? d.value.s_y + d.value.s_height - i.s_y : 0, _ = L([i]);
              O(r.value.filter((I) => I.move !== !0 && a(I.s_y) >= a(i.s_y + i.s_height)), i, !0).forEach((I) => {
                _.filter((N) => N.id === I.id).length === 0 && _.push(C(I));
              }), _.forEach((I) => {
                I.s_y += z, T.filter((N) => N.id === I.id).length === 1 && (T.filter((N) => N.id === I.id)[0].s_y = I.s_y), r.value.filter((N) => N.id === I.id)[0].s_y = I.s_y;
              });
            });
            break;
        }
      r.value.forEach((c) => {
        Pe(c);
      }), Pe(d.value), le(!1), ye(r.value[y]), E("dragIng"), d.value.s_y = r.value[y].syCopy, delete r.value[y].syCopy;
    }, We = () => {
      window.removeEventListener("mouseup", We), clearTimeout(ie), ie ? ie = null : (window.removeEventListener("mousemove", we), delete r.value[y].move, r.value[y].s_x = d.value.s_x, r.value[y].s_y = d.value.s_y, ye(null), r.value.forEach((t) => {
        Pe(t);
      }), le(), E("dragEnd", A(r.value[y])), y = null, xe(), tt = setTimeout(() => {
        le();
      }, 500));
    }, he = (t) => {
      switch (t) {
        case "top":
          return 0;
        case "right":
          return ae - $.value * 2 - r.value[y].s_width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let k = null, se = "", me = 0, Ve = 0, Be = 0, Re = 0, Fe = 0, Le = 0;
    const de = (t, l, e) => {
      Ye(), d.value = C(l), k = l, E("resizeStart", A(k)), se = e, me = t.clientX, Ve = t.clientY, Be = l.s_width, Re = l.s_height, Fe = l.s_y, Le = l.s_x, k.drag = !0, ye(k), window.addEventListener("mousemove", Et), window.addEventListener("mouseup", st), window.addEventListener("keydown", xe);
    }, Et = (t) => {
      const l = Be + (t.clientX - me), e = Re + (t.clientY - Ve), s = Be - (t.clientX - me), o = Re - (t.clientY - Ve), n = Fe + (t.clientY - Ve), g = Le + (t.clientX - me), p = (typeof d.value.itemMinWidth == "number" ? d.value.itemMinWidth : v.itemMinWidth) * oe.value, S = (typeof d.value.itemMinHeight == "number" ? d.value.itemMinHeight : v.itemMinHeight) * J();
      se.indexOf("top") !== -1 ? (d.value.s_height = o < S ? S : o > re("top") ? re("top") : o, d.value.s_y = o < S ? Fe + Re - S : o > re("top") ? 0 : n) : se.indexOf("bottom") !== -1 && (d.value.s_height = e < S ? S : e > re("bottom") ? re("bottom") : e), se.indexOf("left") !== -1 ? (d.value.s_width = s < p ? p : s > re("left") ? re("left") : s, d.value.s_x = s < p ? Le + Be - p : s > re("left") ? 0 : g) : se.indexOf("right") !== -1 && (d.value.s_width = l < p ? p : l > re("right") ? re("right") : l);
      let Y = B(C(r.value.filter((w) => w.drag !== !0)), d.value, !0);
      if (Y.length > 0) {
        let w = [];
        if (se.indexOf("top") !== -1) {
          const T = O(Y, k, !0).filter((i) => a(i.s_y + i.s_height - d.value.s_y) > $.value * 2);
          T.length > 0 && (k.s_height = d.value.s_height, k.s_y = d.value.s_y, w = [...w, ...T]);
        } else if (se.indexOf("bottom") !== -1) {
          const T = O(Y, k, !0).filter((i) => a(d.value.s_y + d.value.s_height - i.s_y) > te.value * 2);
          T.length > 0 && (k.s_height = d.value.s_height, w = [...w, ...T]);
        }
        if (se.indexOf("left") !== -1) {
          const T = U(Y, k, !0).filter((i) => a(i.s_x + i.s_width - d.value.s_x) > $.value * 2);
          T.length > 0 && (k.s_width = d.value.s_width, k.s_x = d.value.s_x, w = [...w, ...T]);
        } else if (se.indexOf("right") !== -1) {
          const T = U(Y, k, !0).filter((i) => a(d.value.s_x + d.value.s_width - i.s_x) > $.value * 2);
          T.length > 0 && (k.s_width = d.value.s_width, w = [...w, ...T]);
        }
        if (w.length > 0) {
          w.sort((T, i) => {
            const z = a(T.s_y), _ = a(i.s_y);
            return z - _;
          });
          for (let T = 0; T < w.length; T++)
            w.filter((i) => i.id === w[T].id).forEach((i) => {
              i.s_y += k.s_y + k.s_height - i.s_y, r.value.filter((z) => z.id === i.id)[0].s_y = i.s_y, ee([i], (z, _) => z.filter((P) => P.drag !== !0 && P.id !== _.id), !0);
            });
        }
      } else
        k.s_x = d.value.s_x, k.s_y = d.value.s_y, k.s_width = d.value.s_width, k.s_height = d.value.s_height;
      const c = getComputedStyle(V.value), D = parseInt(c.getPropertyValue("--com-item-border-width").trim()), f = parseInt(c.getPropertyValue("--group-tit-height").trim());
      if (k.isGroup === !0) {
        const w = k.s_width - 2 * $.value - 2 * D, T = k.s_height - 2 * te.value - 2 * D - (k.groupTit ? f : 0);
        k.groupData.forEach((i) => {
          i.s_width = w * i.groupW, i.s_height = T * i.groupH, i.s_x = w * i.groupX, i.s_y = T * i.groupY;
        });
      }
      Ht(k), r.value.forEach((w) => {
        Pe(w);
      }), le(!1), ye(k), E("resizeIng");
    }, st = (t) => {
      delete k.drag, se = "", ye(null), window.removeEventListener("mousemove", Et), window.removeEventListener("mouseup", st), le(), E("resizeEnd", A(k)), k = null, xe();
    }, re = (t) => {
      switch (t) {
        case "top":
          return Fe + Re;
        case "left":
          return Le + Be;
        case "right":
          return ae - $.value * 2 - Le;
        case "bottom":
          return 999999999;
      }
    }, le = (t = !0) => {
      t === !0 && ee(r.value, (e, s) => e.filter((o) => o.id !== s.id)), Yt(t), r.value.forEach((e) => {
        (t === !0 || e.move !== !0 && e.drag !== !0) && xt(e);
      }), t === !0 && Nt();
      const l = r.value.map((e) => e.y + e.height);
      l.length > 0 ? ce.value = Math.max(...l) : ce.value = 0;
    }, Yt = (t = !0) => {
      const l = C(r.value).sort((e, s) => {
        const o = a(e.y), n = a(s.y);
        return o - n;
      });
      if (!t) {
        if (k !== null) {
          const e = O(L(l.filter((o) => o.drag !== !0 && a(o.s_y + o.s_height) < a(k.s_y))), k), s = l.filter((o) => o.drag === !0)[0];
          s && (e.length > 0 ? (s.height += s.y - Math.max(...e.map((o) => o.y + o.height)), s.y = Math.max(...e.map((o) => o.y + o.height))) : (s.height += s.y, s.y = 0));
        } else if (y !== null) {
          const e = l.filter((s) => s.move === !0)[0];
          e && (e.s_x = d.value.s_x, e.s_y = d.value.s_y, Pe(e));
        }
      }
      for (let e = 0; e < l.length; e++) {
        const s = O(l, l[e]).filter((o) => a(o.y + o.height) <= a(l[e].y));
        s.length > 0 ? l[e].y = Math.max(...s.map((o) => o.y + o.height)) : l[e].y = 0;
      }
      l.forEach((e) => {
        t === !0 || e.move !== !0 && e.drag !== !0 ? r.value.filter((s) => s.id === e.id)[0].y = e.y : e.move === !0 && (r.value.filter((s) => s.id === e.id)[0].syCopy = e.y * J());
      });
    }, Nt = () => {
      const t = r.value.filter((l) => l.isGroup === !0);
      if (t.length > 0) {
        const l = getComputedStyle(V.value), e = parseInt(l.getPropertyValue("--setting-icon-group-width").trim()), s = parseInt(l.getPropertyValue("--setting-icon-group-height").trim());
        t.forEach((o) => {
          $.value + o.s_x + o.s_width + e > ae ? $.value + o.s_x - e < 0 ? v.groupBtnPosMore ? te.value + o.s_y - s < 0 ? o.btnPosition = "bottom" : o.btnPosition = "top" : o.btnPosition = "center" : o.btnPosition = "left" : o.btnPosition = "right";
        });
      }
    }, St = new ResizeObserver((t) => {
      mt(ae === t[0].borderBoxSize[0].inlineSize ? null : t[0].borderBoxSize[0].inlineSize, wt === t[0].borderBoxSize[0].blockSize ? null : t[0].borderBoxSize[0].blockSize);
    });
    Zt(() => {
      St.observe(V.value);
    });
    const He = X("");
    let rt = 0, nt = 0, it = null, ut = !1;
    const Xt = (t = [], l = null) => {
      clearInterval(it), He.value = (/* @__PURE__ */ new Date()).getTime() + "", rt = 0, nt = 0, t.forEach((e) => {
        rt += 1, e.isGroup === !0 && (nt += e.groupData.length);
      }), Gt(), E("domStart"), r.value = L(t), r.value.filter((e) => e.isGroup === !0).forEach((e) => {
        if (e.groupData.length < 2)
          Ne(e.id);
        else {
          const s = qe(e.groupData, e);
          Ke(s);
        }
      }), ut = !0, At(() => {
        const e = V.value.getBoundingClientRect();
        l != null && r.value.length > 0 ? (Se(l), _e(e.width / l)) : (Se(r.value.length > 0 ? e.width : null), _e(1)), r.value.forEach((s) => {
          ge(s);
        }), le(), it = setInterval(() => {
          j(V.value, He.value + "p").length === rt && j(V.value, He.value + "c").length === nt && (clearInterval(it), E("domReady"));
        }, 10), setTimeout(() => {
          ut = !1;
        }, 500);
      });
    }, $t = (t) => {
      t.showSet = !0;
    }, at = (t) => {
      const l = r.value.filter((e) => e.id === t);
      if (l.length === 1)
        delete l[0].showSet;
      else
        try {
        } catch {
        }
    }, Dt = (t, l, e) => {
      const s = Lt(t), o = Lt(l), n = ol(o, s, e);
      if (n)
        t.x = n.x, t.y = n.y;
      else {
        t.x = 0;
        const g = o.map((p) => p.y + p.height);
        if (g.length > 0)
          t.y = Math.max(...g);
        else
          try {
          } catch {
          }
      }
    }, be = (t, l = null, e = !1) => {
      const s = L(t), o = r.value.filter((n) => n.id === l);
      if (s.id || (s.id = (/* @__PURE__ */ new Date()).getTime() + ""), l && o.length !== 1)
        try {
        } catch {
        } finally {
          return;
        }
      if (e !== !0 && (delete s.x, delete s.y, l ? (o[0].groupData.forEach((n) => {
        fe(n, o[0]);
      }), Dt(s, o[0].groupData, o[0].width)) : Dt(s, r.value, (ne || ae) - $.value * 2)), l) {
        o[0].groupData.push(s);
        const n = qe(o[0].groupData, o[0]);
        Ke(n), ee([n], (g, p) => g.filter((S) => S.id !== p.id));
      } else
        s.x !== void 0 && s.y !== void 0 && (r.value.length === 0 && Se(ae), ge(s), r.value.push(s));
      le();
    }, ct = (t, l = null, e = null) => {
      let s = null;
      const o = r.value.filter((n) => n.id === l);
      if (l ? o.length === 1 && (s = L(o[0].groupData.filter((n) => n.id === t)[0])) : s = L(r.value.filter((n) => n.id === t)[0]), s)
        return s.id = e || (/* @__PURE__ */ new Date()).getTime() + "", l ? (fe(s, o[0]), be(s, l)) : be(s), A(l ? r.value.filter((n) => n.id === l)[0].groupData.filter((n) => n.id === s.id)[0] : r.value.filter((n) => n.id === s.id)[0]);
      try {
      } catch {
      } finally {
        return null;
      }
    }, ke = (t, l = null, e = !0) => {
      let s = -1;
      const o = r.value.filter((n) => n.id === l);
      if (l ? o.length === 1 && (s = o[0].groupData.findIndex((n) => n.id === t)) : s = r.value.findIndex((n) => n.id === t), s !== -1) {
        if (l)
          if (o[0].groupData.splice(s, 1), o[0].groupData.length === 1)
            Ne(l);
          else {
            o[0].groupData.forEach((g) => {
              fe(g, o[0]);
            });
            const n = qe(o[0].groupData, o[0]);
            Ke(n);
          }
        else
          r.value.splice(s, 1), r.value.length === 0 && e && (Se(null), _e(1));
        e && le();
      } else
        try {
        } catch {
        }
    }, Wt = (t) => {
      Ke(t, !1);
    }, Ke = (t, l = !0) => {
      if (t.id) {
        const e = L(t);
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
                  const g = n.split(".");
                  let p = o[0].groupData[s];
                  for (let S = 0; S < g.length; S++)
                    if (S === g.length - 1)
                      p[g[S]] = e[n];
                    else if (p = p[g[S]], !p)
                      throw new Error(n);
                }
              } catch {
                try {
                } catch {
                }
              }
            ge(o[0]);
          } else {
            if (l)
              r.value[s] = e;
            else
              try {
                delete r.value[s].showPop, delete r.value[s].showSet, delete r.value[s].btnPosition, r.value[s].groupData && r.value[s].groupData.forEach((n) => {
                  delete n.showPop, delete n.showSet;
                });
                for (let n in e) {
                  const g = n.split(".");
                  let p = r.value[s];
                  for (let S = 0; S < g.length; S++)
                    if (S === g.length - 1)
                      p[g[S]] = e[n];
                    else if (p = p[g[S]], !p)
                      throw new Error(n);
                }
              } catch {
                try {
                } catch {
                }
              }
            ge(r.value[s]);
          }
          le();
        } else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, ht = (t, l = !1) => {
      let e = null;
      if (e = r.value.filter((s) => s.id === t)[0], e)
        return typeof l == "boolean" ? e.static = l : l && typeof l == "object" && (typeof l.static == "boolean" && (e.static = l.static), typeof l.dragable == "boolean" && (e.dragable = l.dragable), typeof l.resizable == "boolean" && (e.resizable = l.resizable)), A(r.value.filter((s) => s.id === e.id)[0]);
      try {
      } catch {
      } finally {
        return null;
      }
    }, mt = (t, l) => {
      t !== null && (ae = t, ut || (_e(ne && ae ? t / ne : 1), r.value.forEach((e) => {
        ge(e);
      }), le())), l !== null && (wt = l);
    }, Pt = (t) => {
      t.showPop || (r.value.forEach((l) => {
        delete l.showPop, l.groupData && l.groupData.forEach((e) => {
          delete e.showPop;
        });
      }), E("openSetMenu", A(t)), t.showPop = !0, window.addEventListener("click", Ye));
    }, Ye = () => {
      r.value.forEach((t) => {
        delete t.showPop, t.groupData && t.groupData.forEach((l) => {
          delete l.showPop;
        });
      }), window.removeEventListener("click", Ye);
    }, Q = X(!1), Ct = (t) => {
      const l = r.value.findIndex((e) => e.id === t);
      if (l !== -1)
        r.value[l].checked = !0, r.value[l].checkDis = !0, Q.value = !0, E("showGroup", Q.value);
      else
        try {
        } catch {
        }
    }, dt = () => {
      Q.value = !1, r.value.forEach((t) => {
        delete t.checked, delete t.checkDis, t.groupData && t.groupData.forEach((l) => {
          delete l.checked, delete l.checkDis;
        });
      }), E("showGroup", Q.value);
    }, Vt = (t) => {
      t.checked = !t.checked, E("updateChecked", r.value.filter((l) => l.checked).length);
    }, qe = (t, l) => {
      const e = L(t), s = L(l);
      e.sort((c, D) => {
        const f = a(c.x), w = a(D.x);
        return f - w;
      });
      for (let c = 0; c < e.length - 1; c++) {
        if (c === 0 && e[c].x > 0) {
          const D = e[c].x;
          for (let f = c; f < e.length; f++)
            e[f].x -= D;
        }
        if (e[c + 1].x > e[c].x + e[c].width) {
          const D = C(e.slice(0, c + 1));
          if (e[c + 1].x > Math.max(...D.map((f) => f.x + f.width))) {
            const f = e[c + 1].x - Math.max(...D.map((w) => w.x + w.width));
            for (let w = c + 1; w < e.length; w++)
              e[w].x -= f;
          }
        }
      }
      e.sort((c, D) => {
        const f = a(c.y), w = a(D.y);
        return f - w;
      });
      for (let c = 0; c < e.length - 1; c++) {
        if (c === 0 && e[c].y > 0) {
          const D = e[c].y;
          for (let f = c; f < e.length; f++)
            e[f].y -= D;
        }
        if (e[c + 1].y > e[c].y + e[c].height) {
          const D = C(e.slice(0, c + 1));
          if (e[c + 1].y > Math.max(...D.map((f) => f.y + f.height))) {
            const f = e[c + 1].y - Math.max(...D.map((w) => w.y + w.height));
            for (let w = c + 1; w < e.length; w++)
              e[w].y -= f;
          }
        }
      }
      const o = e.map((c) => c.x + c.width), n = Math.max(...o), g = e.map((c) => c.y + c.height), p = Math.max(...g);
      e.forEach((c) => {
        c.inGroupId || (c.inGroupId = s.id), c.groupW = c.width / n, c.groupH = c.height / p, c.groupX = c.x / n, c.groupY = c.y / p, c.isObstacle = c.x + c.width === n && c.y === 0, delete c.width, delete c.height;
      });
      const S = getComputedStyle(V.value), Y = parseInt(S.getPropertyValue("--group-tit-height").trim());
      return s.width = n, s.height = p + (s.groupTit ? Y : 0), s.groupData = [...e], s;
    }, fe = (t, l) => {
      const e = getComputedStyle(V.value), s = parseInt(e.getPropertyValue("--group-tit-height").trim());
      t.width = l.width * t.groupW, t.height = (l.height - (l.groupTit ? s : 0)) * t.groupH;
    }, Ft = () => {
      At(() => {
        vt();
      });
    }, Kt = () => {
      let t = r.value.filter((l) => l.checked);
      if (t.length > 1)
        if (t = v.beforeAddGroup(L(t)), typeof t == "object" && t instanceof Array && t.length > 0 && t.filter((l) => l.id).length === t.length) {
          const l = {
            id: (/* @__PURE__ */ new Date()).getTime() + "G",
            isGroup: !0,
            groupTit: ""
          }, e = qe(t, l);
          return e.groupData.forEach((s) => {
            ke(s.id, null, !1);
          }), be(e), dt(), A(r.value.filter((s) => s.id === e.id)[0]);
        } else
          try {
          } catch {
          } finally {
            return null;
          }
      else
        return dt(), null;
    }, It = (t, l) => {
      const e = r.value.filter((s) => s.id === l)[0];
      if (e) {
        let s = e.groupData.filter((o) => o.id === t)[0];
        if (s) {
          if (e.groupData.length === 2)
            return Ne(l);
          if (s = v.beforeRemoveGroup(L([s])), typeof s == "object" && s instanceof Array && s.length === 1 && s.filter((o) => o.id).length === 1)
            return s = s[0], fe(s, e), delete s.inGroupId, delete s.groupW, delete s.groupH, delete s.groupX, delete s.groupY, delete s.isObstacle, ke(s.id, e.id), be(s), [A(r.value.filter((o) => o.id === t)[0])];
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
    }, Ne = (t) => {
      const l = r.value.filter((e) => e.id === t)[0];
      if (l) {
        let e = [], s = !0;
        try {
          l.groupData.forEach((o) => {
            if (o = v.beforeRemoveGroup(L([l])), typeof o == "object" && o instanceof Array && o.length === 1 && o.filter((n) => n.id).length === 1)
              o = o[0];
            else
              throw s = !1, new Error();
          });
        } catch {
        }
        if (s) {
          ke(l.id, null, !1), l.groupData.forEach((n) => {
            fe(n, l), n.x += l.x, n.y += l.y, delete n.inGroupId, delete n.groupW, delete n.groupH, delete n.groupX, delete n.groupY, delete n.isObstacle, e.push(n.id), be(n, null, !0);
          });
          let o = [];
          return e.forEach((n) => {
            o.push(A(r.value.filter((g) => g.id === n)[0]));
          }), o;
        } else
          return [];
      } else
        try {
        } catch {
        } finally {
          return [];
        }
    }, qt = (t = "", l) => {
      const e = r.value.filter((s) => s.id === l)[0];
      if (e) {
        if (!e.groupTit || !t) {
          const s = getComputedStyle(V.value), o = parseInt(s.getPropertyValue("--group-tit-height").trim());
          e.groupTit && !t && (e.height -= o, e.s_height -= o * J()), !e.groupTit && t && (e.height += o, e.s_height += o * J());
        }
        e.groupTit = t, ee([e], (s, o) => s.filter((n) => n.id !== o.id)), le();
      } else
        try {
        } catch {
        }
    }, Gt = () => {
      r.value = [], Se(null), _e(1), ce.value = 0;
    }, Ut = (t = null) => new Promise((l, e) => {
      r.value.forEach((o) => {
        delete o.showPop, delete o.showSet, o.groupData && o.groupData.forEach((n) => {
          delete n.showPop, delete n.showSet;
        });
      });
      const s = L(r.value);
      s.forEach((o) => {
        o.isGroup === !0 && o.groupData.forEach((n) => {
          fe(n, o), delete n.s_width, delete n.s_height, delete n.s_x, delete n.s_y;
        }), delete o.btnPosition, delete o.s_width, delete o.s_height, delete o.s_x, delete o.s_y;
      }), t && ne && s.forEach((o) => {
        ge(o, t / ne), xt(o, t / ne);
      }), l({ data: s, width: t || ne });
    });
    return jt(() => {
      St.unobserve(V.value), window.removeEventListener("click", Ye), window.removeEventListener("click", Ae), window.removeEventListener("keydown", Ze), window.removeEventListener("keydown", xe);
    }), x({ init: Xt, addItem: be, copyItem: ct, deleteItem: ke, updateItem: Wt, toggleLockItem: ht, hideGroupSet: at, openGroup: Ct, closeGroup: dt, changeGroupBorder: Ft, addGroup: Kt, removeGroupItem: It, removeGroup: Ne, changeGroupTit: qt, openTrimModel: Qe, closeTrimModel: Ae, resetData: Gt, getData: Ut }), (t, l) => (b(), M("div", {
      class: "vue-drag-component-plus",
      style: q({ "--item-scale": h(oe), "--css-scale": u.seeModel ? h(De) : 1, "--com-x-space": h($) + "px", "--com-y-space": h(te) + "px" }),
      ref_key: "pageRef",
      ref: V
    }, [
      W("div", {
        class: "content-box",
        ref_key: "contentBoxRef",
        ref: ve
      }, [
        (b(!0), M(Me, null, yt(h(r), (e, s) => (b(), M("div", {
          class: pe([
            "com-item",
            h(y) !== null ? "" : "not-move-animate",
            e.move ? "is-move" : "",
            e.drag ? "is-drag" : "",
            e.showPop || e.isGroup && e.groupData.filter((o) => o.showPop).length > 0 ? "on-top" : "",
            // 初始化标记
            h(He) + "p",
            // 查找时唯一标识
            "i" + e.id + "d"
          ]),
          style: q({
            width: e.s_width + "px",
            height: e.s_height + "px",
            top: e.s_y + "px",
            left: e.s_x + "px"
          }),
          key: s
        }, [
          W("div", {
            class: pe([
              "com-item-inner",
              u.seeModel || h(K) || h(Q) || e.static === !0 || e.dragable === !1 ? "" : "can-drag",
              e.move || e.drag ? "always-hover" : "",
              u.seeModel ? "no-hover" : ""
            ]),
            onMousedown: F((o) => u.seeModel || h(K) || h(Q) || e.static === !0 || e.dragable === !1 ? null : Mt(o, s), ["prevent"]),
            onMouseenter: (o) => u.seeModel || h(K) || h(Q) || h(y) !== null || h(k) || !e.isGroup ? null : $t(e),
            onMouseleave: (o) => u.seeModel || h(K) || h(Q) || h(y) !== null || h(k) || !e.isGroup ? null : at(e.id)
          }, [
            W("div", rl, [
              e.isGroup ? (b(), M(Me, { key: 0 }, [
                e.groupTit ? (b(), M("div", {
                  key: 0,
                  class: "group-item-tit",
                  title: e.groupTit
                }, Z(e.groupTit), 9, nl)) : G("", !0),
                W("div", {
                  class: pe(["group-item-content", e.groupTit ? "" : "full"])
                }, [
                  (b(!0), M(Me, null, yt(e.groupData, (o, n) => (b(), M("div", {
                    class: pe([
                      "com-item-box-child",
                      o.isObstacle ? "is-obstacle" : "",
                      h(He) + "c"
                    ]),
                    style: q({
                      width: o.s_width + "px",
                      height: o.s_height + "px",
                      top: o.s_y + "px",
                      left: o.s_x + "px"
                    }),
                    key: n
                  }, [
                    W("div", il, [
                      Ee(t.$slots, "item", { data: o }, () => [
                        W("p", null, Z(Math.round(o.s_width * 100) / 100) + "," + Z(Math.round(o.s_height * 100) / 100), 1),
                        W("p", null, Z(Math.round(o.s_x * 100) / 100) + "," + Z(Math.round(o.s_y * 100) / 100), 1)
                      ])
                    ]),
                    !u.seeModel && !h(K) && !h(Q) && h(y) === null && h(k) === null ? (b(), M("div", {
                      key: 0,
                      class: "setting-box",
                      style: q({ display: o.showPop ? "flex" : "none" }),
                      onMousedown: F((g) => null, ["prevent", "stop"])
                    }, [
                      Ot(Rt, {
                        iconObj: u.settingIcon,
                        onClick: F((g) => Pt(o), ["prevent", "stop"])
                      }, null, 8, ["iconObj", "onClick"])
                    ], 36)) : G("", !0),
                    o.showPop ? (b(), M("div", {
                      key: 1,
                      class: "setting-box-pop",
                      onMousedown: F((g) => null, ["prevent", "stop"])
                    }, [
                      Ee(t.$slots, "setPopNormal", {
                        data: A(o)
                      }, () => [
                        W("div", {
                          class: "setting-box-pop-item",
                          onClick: (g) => It(o.id, o.inGroupId)
                        }, "移出组合", 8, ul),
                        W("div", {
                          class: "setting-box-pop-item",
                          onClick: (g) => ct(o.id, o.inGroupId)
                        }, "复制", 8, al),
                        W("div", {
                          class: "setting-box-pop-item",
                          onClick: (g) => ke(o.id, o.inGroupId)
                        }, "删除", 8, cl)
                      ])
                    ], 32)) : G("", !0)
                  ], 6))), 128))
                ], 2)
              ], 64)) : (b(), M("div", hl, [
                Ee(t.$slots, "item", { data: e }, () => [
                  W("p", null, Z(Math.round(e.s_width * 100) / 100) + "," + Z(Math.round(e.s_height * 100) / 100), 1),
                  W("p", null, Z(Math.round(e.s_x * 100) / 100) + "," + Z(Math.round(e.s_y * 100) / 100), 1)
                ])
              ])),
              !e.isGroup && e.notGroup !== !0 && h(Q) ? (b(), M("div", {
                key: 2,
                class: pe(["group-checkbox", e.checked ? "is-checked" : "", e.checkDis ? "disabled" : ""]),
                onClick: (o) => e.checkDis ? null : Vt(e)
              }, null, 10, dl)) : G("", !0),
              !u.seeModel && !h(K) && !h(Q) && h(y) === null && h(k) === null ? (b(), M("div", {
                key: 3,
                class: pe(["setting-box", e.isGroup === !0 ? e.btnPosition === "right" ? "only-g" : e.btnPosition === "left" ? "only-g l" : e.btnPosition === "top" ? "only-g t" : e.btnPosition === "bottom" ? "only-g b" : e.btnPosition === "center" ? "only-g c" : "" : ""]),
                style: q({ display: e.showPop || e.showSet ? "flex" : "none" }),
                onMousedown: F((o) => null, ["prevent", "stop"])
              }, [
                Ot(Rt, {
                  iconObj: u.settingIcon,
                  onClick: F((o) => Pt(e), ["prevent", "stop"])
                }, null, 8, ["iconObj", "onClick"])
              ], 38)) : G("", !0),
              e.showPop ? (b(), M("div", {
                key: 4,
                class: pe(["setting-box-pop", e.isGroup === !0 ? e.btnPosition === "right" ? "special" : e.btnPosition === "left" ? "special l" : e.btnPosition === "top" ? "special t" : e.btnPosition === "bottom" ? "special b" : e.btnPosition === "center" ? "special c" : "" : ""]),
                onMousedown: F((o) => null, ["prevent", "stop"])
              }, [
                e.isGroup === !0 ? Ee(t.$slots, "setPopSpecial", {
                  key: 0,
                  data: A(e)
                }, () => [
                  W("div", {
                    class: "setting-box-pop-item",
                    onClick: (o) => ht(e.id, e.static !== !0)
                  }, Z(e.static === !0 ? "解除" : "") + "锁定 ", 9, fl),
                  e.static !== !0 ? (b(), M("div", {
                    key: 0,
                    class: "setting-box-pop-item",
                    onClick: (o) => Qe(e.id)
                  }, " 微调 ", 8, pl)) : G("", !0),
                  u.hideTit ? G("", !0) : (b(), M("div", {
                    key: 1,
                    class: "setting-box-pop-item",
                    onClick: (o) => {
                      at(e.id), E("showTitPop", e.groupTit, e.id);
                    }
                  }, " 设置组合标题 ", 8, gl)),
                  W("div", {
                    class: "setting-box-pop-item",
                    onClick: (o) => Ne(e.id)
                  }, "解除组合", 8, yl)
                ]) : Ee(t.$slots, "setPopNormal", {
                  key: 1,
                  data: A(e)
                }, () => [
                  e.notGroup !== !0 ? (b(), M("div", {
                    key: 0,
                    class: "setting-box-pop-item",
                    onClick: (o) => Ct(e.id)
                  }, "组合", 8, vl)) : G("", !0),
                  W("div", {
                    class: "setting-box-pop-item",
                    onClick: (o) => ht(e.id, e.static !== !0)
                  }, Z(e.static === !0 ? "解除" : "") + "锁定 ", 9, _l),
                  e.static !== !0 ? (b(), M("div", {
                    key: 1,
                    class: "setting-box-pop-item",
                    onClick: (o) => Qe(e.id)
                  }, " 微调 ", 8, xl)) : G("", !0),
                  W("div", {
                    class: "setting-box-pop-item",
                    onClick: (o) => ct(e.id)
                  }, "复制", 8, wl),
                  W("div", {
                    class: "setting-box-pop-item",
                    onClick: (o) => ke(e.id)
                  }, "删除", 8, bl)
                ])
              ], 34)) : G("", !0)
            ]),
            !u.seeModel && !h(K) && !h(Q) && !e.showPop && !(e.isGroup && e.groupData.filter((o) => o.showPop).length > 0) && !e.move && e.static !== !0 && e.resizable !== !1 ? (b(), M(Me, { key: 0 }, [
              h(m).indexOf("topLeft") !== -1 ? (b(), M("div", {
                key: 0,
                class: "resize-line top-left",
                onMousedown: F((o) => de(o, e, "top-left"), ["prevent", "stop"])
              }, null, 40, kl)) : G("", !0),
              h(m).indexOf("top") !== -1 ? (b(), M("div", {
                key: 1,
                class: "resize-line top",
                onMousedown: F((o) => de(o, e, "top"), ["prevent", "stop"])
              }, null, 40, Ml)) : G("", !0),
              h(m).indexOf("topRight") !== -1 ? (b(), M("div", {
                key: 2,
                class: "resize-line top-right",
                onMousedown: F((o) => de(o, e, "top-right"), ["prevent", "stop"])
              }, null, 40, El)) : G("", !0),
              h(m).indexOf("left") !== -1 ? (b(), M("div", {
                key: 3,
                class: "resize-line left",
                onMousedown: F((o) => de(o, e, "left"), ["prevent", "stop"])
              }, null, 40, Sl)) : G("", !0),
              h(m).indexOf("right") !== -1 ? (b(), M("div", {
                key: 4,
                class: "resize-line right",
                onMousedown: F((o) => de(o, e, "right"), ["prevent", "stop"])
              }, null, 40, Dl)) : G("", !0),
              h(m).indexOf("bottomLeft") !== -1 ? (b(), M("div", {
                key: 5,
                class: "resize-line bottom-left",
                onMousedown: F((o) => de(o, e, "bottom-left"), ["prevent", "stop"])
              }, null, 40, Pl)) : G("", !0),
              h(m).indexOf("bottom") !== -1 ? (b(), M("div", {
                key: 6,
                class: "resize-line bottom",
                onMousedown: F((o) => de(o, e, "bottom"), ["prevent", "stop"])
              }, null, 40, Cl)) : G("", !0),
              h(m).indexOf("bottomRight") !== -1 ? (b(), M("div", {
                key: 7,
                class: "resize-line bottom-right",
                onMousedown: F((o) => de(o, e, "bottom-right"), ["prevent", "stop"])
              }, null, 40, Il)) : G("", !0)
            ], 64)) : G("", !0)
          ], 42, sl)
        ], 6))), 128)),
        (b(!0), M(Me, null, yt(h(r), (e, s) => (b(), M("div", {
          class: pe([
            "shadow-bg",
            h(y) !== null ? "" : "not-move-animate",
            e.move ? "is-move" : "",
            e.drag ? "is-drag" : ""
          ]),
          style: q({
            width: e.s_width - h($) * 2 + "px",
            height: e.s_height - h(te) * 2 + "px",
            top: e.s_y + h(te) + "px",
            left: e.s_x + h($) + "px"
          }),
          key: s
        }, null, 6))), 128)),
        h(y) !== null || h(k) ? (b(), M("div", {
          key: 0,
          class: "drag-bg",
          style: q({
            width: h(d).s_width + "px",
            height: h(d).s_height + "px",
            top: h(d).s_y + "px",
            left: h(d).s_x + "px"
          })
        }, null, 4)) : G("", !0),
        W("div", {
          class: "height-bg",
          style: q({ height: (h(ce) > 0 ? h(ce) * J() + (u.seeModel ? u.seeModelMinBg : 220) : 0) + "px" })
        }, null, 4),
        u.showAuxiliary ? (b(), M(Me, { key: 1 }, [
          h(Ce) !== null ? (b(), M("div", {
            key: 0,
            class: "auxiliary-line hor",
            style: q({ top: h(Ce) + "px", left: "0px" })
          }, null, 4)) : G("", !0),
          h(Ie) !== null ? (b(), M("div", {
            key: 1,
            class: "auxiliary-line hor",
            style: q({ top: h(Ie) + "px", left: "0px" })
          }, null, 4)) : G("", !0),
          h(Ge) !== null ? (b(), M("div", {
            key: 2,
            class: "auxiliary-line hor",
            style: q({ top: h(Ge) + "px", left: "0px" })
          }, null, 4)) : G("", !0),
          h(Te) !== null ? (b(), M("div", {
            key: 3,
            class: "auxiliary-line",
            style: q({ top: "0px", left: h(Te) + "px", height: h(ce) * J() + 220 + "px" })
          }, null, 4)) : G("", !0),
          h(ze) !== null ? (b(), M("div", {
            key: 4,
            class: "auxiliary-line",
            style: q({ top: "0px", left: h(ze) + "px", height: h(ce) * J() + 220 + "px" })
          }, null, 4)) : G("", !0),
          h(Oe) !== null ? (b(), M("div", {
            key: 5,
            class: "auxiliary-line",
            style: q({ top: "0px", left: h(Oe) + "px", height: h(ce) * J() + 220 + "px" })
          }, null, 4)) : G("", !0)
        ], 64)) : G("", !0),
        h(r).length === 0 ? (b(), M("div", Gl, [
          Ee(t.$slots, "empty", {}, () => [
            l[0] || (l[0] = el(" 暂无数据 "))
          ])
        ])) : G("", !0)
      ], 512)
    ], 4));
  }
}, zl = [Tl], Ol = {
  install(u) {
    zl.forEach((x) => {
      u.component("vueDragComponentPlus", x);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Ol);
export {
  Ol as default
};
