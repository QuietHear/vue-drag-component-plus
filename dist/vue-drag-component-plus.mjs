import { resolveComponent as ct, openBlock as p, createBlock as R, resolveDynamicComponent as tt, normalizeProps as et, mergeProps as N, withCtx as dt, createElementBlock as x, toDisplayString as it, ref as X, onBeforeUnmount as ut, normalizeStyle as B, unref as E, createElementVNode as v, Fragment as nt, renderList as gt, normalizeClass as vt, withModifiers as w, renderSlot as q, createTextVNode as ot, createVNode as wt, createCommentVNode as F } from "vue";
const pt = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(u) {
    return (O, h) => {
      const H = ct("el-icon");
      return u.iconObj.type === "custom" ? (p(), R(tt(u.iconObj.icon), et(N({ key: 0 }, u.iconObj.attrs)), null, 16)) : u.iconObj.type === "el" ? (p(), R(H, et(N({ key: 1 }, u.iconObj.attrs)), {
        default: dt(() => [
          (p(), R(tt(u.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : u.iconObj.type === "iconfont" ? (p(), x("i", N({
        key: 2,
        class: ["icon iconfont", "icon-" + u.iconObj.icon]
      }, u.iconObj.attrs), null, 16)) : (p(), x("i", N({
        key: 3,
        class: u.iconObj.type
      }, u.iconObj.attrs), it(u.iconObj.icon), 17));
    };
  }
};
const ft = ["onMousedown"], yt = { class: "com-item-content" }, xt = {
  key: 0,
  class: "setting-box-pop"
}, Mt = ["onClick"], mt = ["onMousedown"], bt = ["onMousedown"], kt = ["onMousedown"], _t = ["onMousedown"], Ot = ["onMousedown"], Ht = ["onMousedown"], Wt = ["onMousedown"], zt = ["onMousedown"], Et = {
  key: 0,
  class: "com-empty"
}, Pt = {
  __name: "index",
  props: {
    // 组件项最小宽度
    itemMinWidth: {
      type: Number,
      default: 15,
      validator(u, O) {
        return u >= 15;
      }
    },
    // 组件项最小高度
    itemMinHeight: {
      type: Number,
      default: 15,
      validator(u, O) {
        return u >= 15;
      }
    },
    // 设置图标
    settingIcon: {
      type: Object,
      default: () => ({
        icon: "设置"
      })
    }
  },
  setup(u, { expose: O }) {
    const h = u, H = X(0), Y = X(0), D = X(null), P = X(0), e = X([
      {
        width: 100,
        height: 100,
        x: 300,
        y: 300
      },
      {
        width: 100,
        height: 100,
        x: 390,
        y: 50,
        static: !0
      },
      {
        width: 100,
        height: 100,
        x: 50,
        y: 210,
        static: !0
      },
      {
        width: 100,
        height: 100,
        x: 210,
        y: 600,
        static: !0
      },
      {
        width: 100,
        height: 100,
        x: 700,
        y: 390,
        static: !0
      },
      {
        width: 100,
        height: 100,
        x: 600,
        y: 290,
        static: !0
      }
    ]);
    let a = null, U = null, j = null;
    const lt = (l, n) => {
      L(), a = n, e.value[a].move = !0, U = l.clientX - l.target.offsetParent.offsetLeft, j = l.clientY - l.target.offsetParent.offsetTop, window.addEventListener("mousemove", G), window.addEventListener("mouseup", J);
    }, G = (l) => {
      const n = l.clientX - U, i = l.clientY - j, s = n <= f("left") ? f("left") : n >= f("right") ? f("right") : n, t = i <= f("top") ? f("top") : i >= f("bottom") ? f("bottom") : i;
      e.value.filter((d) => d.static === !0).filter((d) => d.x === s && d.width === e.value[a].width || d.x > s && d.x < s + e.value[a].width || d.x + d.width > s && d.x + d.width < s + e.value[a].width).filter((d) => d.y === t && d.height === e.value[a].height || d.y > t && d.y < t + e.value[a].height || d.y + d.height > t && d.y + d.height < t + e.value[a].height).length === 0 ? (e.value[a].x = s, e.value[a].y = t) : (e.value.filter((o) => o.static === !0).filter((o) => o.x === s && o.width === e.value[a].width || o.x > s && o.x < s + e.value[a].width || o.x + o.width > s && o.x + o.width < s + e.value[a].width).filter((o) => o.y === e.value[a].y && o.height === e.value[a].height || o.y > e.value[a].y && o.y < e.value[a].y + e.value[a].height || o.y + o.height > e.value[a].y && o.y + o.height < e.value[a].y + e.value[a].height).length === 0 && (e.value[a].x = s), e.value.filter((o) => o.static === !0).filter((o) => o.x === e.value[a].x && o.width === e.value[a].width || o.x > e.value[a].x && o.x < e.value[a].x + e.value[a].width || o.x + o.width > e.value[a].x && o.x + o.width < e.value[a].x + e.value[a].width).filter((o) => o.y === t && o.height === e.value[a].height || o.y > t && o.y < t + e.value[a].height || o.y + o.height > t && o.y + o.height < t + e.value[a].height).length === 0 && (e.value[a].y = t)), V(), D.value.scrollTo(0, P.value - Y.value);
    }, J = () => {
      window.removeEventListener("mousemove", G), window.removeEventListener("mouseup", J), delete e.value[a].move, a = null;
    }, f = (l) => {
      switch (l) {
        case "top":
          return 0;
        case "right":
          return H.value - e.value[a].width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let g = null, I = "", C = 0, S = 0, M = 0, m = 0, b = 0, k = 0, W = 0, $ = 0, z = 0, A = 0;
    const y = (l, n, i) => {
      L(), g = n, I = i, C = l.clientX, S = l.clientY, M = n.width, m = n.height, b = n.y, k = n.x;
      const s = e.value.filter((r) => r.static === !0 && (r.x < n.x ? r.x + r.width >= n.x : r.x <= n.x + n.width)), t = e.value.filter((r) => r.static === !0 && (r.y < n.y ? r.y + r.height >= n.y : r.y <= n.y + n.height)), _ = s.filter((r) => r.y + r.height <= n.y).map((r) => r.y + r.height);
      _.length > 0 ? W = Math.max(..._) : W = 0;
      const d = s.filter((r) => r.y >= n.y + n.height).map((r) => r.y);
      d.length > 0 ? $ = Math.max(...d) : $ = 0;
      const T = t.filter((r) => r.x + r.width <= n.x).map((r) => r.x + r.width);
      T.length > 0 ? z = Math.max(...T) : z = 0;
      const o = t.filter((r) => r.x >= n.x + n.width).map((r) => r.x);
      o.length > 0 ? A = Math.max(...o) : A = 0, window.addEventListener("mousemove", K), window.addEventListener("mouseup", Q);
    }, K = (l) => {
      const n = M + (l.clientX - C), i = m + (l.clientY - S), s = M - (l.clientX - C), t = m - (l.clientY - S), _ = b + (l.clientY - S), d = k + (l.clientX - C);
      switch (I) {
        case "top-left":
          g.height = t < h.itemMinHeight ? h.itemMinHeight : t > c("top") ? c("top") : t, g.y = t < h.itemMinHeight ? b + m - h.itemMinHeight : t > c("top") ? W : _, g.width = s < h.itemMinWidth ? h.itemMinWidth : s > c("left") ? c("left") : s, g.x = s < h.itemMinWidth ? k + M - h.itemMinWidth : s > c("left") ? z : d;
          break;
        case "top":
          g.height = t < h.itemMinHeight ? h.itemMinHeight : t > c("top") ? c("top") : t, g.y = t < h.itemMinHeight ? b + m - h.itemMinHeight : t > c("top") ? W : _;
          break;
        case "top-right":
          g.height = t < h.itemMinHeight ? h.itemMinHeight : t > c("top") ? c("top") : t, g.y = t < h.itemMinHeight ? b + m - h.itemMinHeight : t > c("top") ? W : _, g.width = n < h.itemMinWidth ? h.itemMinWidth : n > c("right") ? c("right") : n;
          break;
        case "left":
          g.width = s < h.itemMinWidth ? h.itemMinWidth : s > c("left") ? c("left") : s, g.x = s < h.itemMinWidth ? k + M - h.itemMinWidth : s > c("left") ? z : d;
          break;
        case "right":
          g.width = n < h.itemMinWidth ? h.itemMinWidth : n > c("right") ? c("right") : n;
          break;
        case "bottom-left":
          g.height = i < h.itemMinHeight ? h.itemMinHeight : i > c("bottom") ? c("bottom") : i, g.width = s < h.itemMinWidth ? h.itemMinWidth : s > c("left") ? c("left") : s, g.x = s < h.itemMinWidth ? k + M - h.itemMinWidth : s > c("left") ? z : d;
          break;
        case "bottom":
          g.height = i < h.itemMinHeight ? h.itemMinHeight : i > c("bottom") ? c("bottom") : i;
          break;
        case "bottom-right":
          g.height = i < h.itemMinHeight ? h.itemMinHeight : i > c("bottom") ? c("bottom") : i, g.width = n < h.itemMinWidth ? h.itemMinWidth : n > c("right") ? c("right") : n;
          break;
      }
      V(), D.value.scrollTo(0, P.value - Y.value);
    }, Q = (l) => {
      I = "", g = null, window.removeEventListener("mousemove", K), window.removeEventListener("mouseup", Q);
    }, c = (l) => {
      switch (l) {
        case "top":
          return b + m - W;
        case "left":
          return k + M - z;
        case "right":
          return (A > 0 ? A : H.value) - k;
        case "bottom":
          return $ > 0 ? $ - b : 999999999;
      }
    }, V = () => {
      const l = e.value.map((n) => n.y + n.height);
      l.length > 0 ? P.value = Math.max(...l) + 50 : P.value = 0;
    }, st = (l, n) => {
      Z(l, n), V();
    }, ht = () => {
    }, at = () => {
    }, Z = (l, n) => {
      l !== null && (H.value = l), n !== null && (Y.value = n);
    }, rt = (l) => {
      l.showPop || (e.value.forEach((n) => {
        delete n.showPop;
      }), l.showPop = !0, window.addEventListener("click", L));
    }, L = () => {
      e.value.forEach((l) => {
        delete l.showPop;
      }), window.removeEventListener("click", L);
    };
    return ut(() => {
      window.removeEventListener("click", L);
    }), O({ init: st, addItem: ht, deleteItem: at, changePageSize: Z }), (l, n) => (p(), x("div", {
      class: "vue-drag-component-plus",
      style: B({ width: E(H) + "px", height: E(Y) + "px" })
    }, [
      v("div", {
        class: "content-box",
        ref_key: "boxRef",
        ref: D
      }, [
        (p(!0), x(nt, null, gt(E(e), (i, s) => (p(), x("div", {
          class: vt(["com-item", i.static === !0 || i.dragable === !1 ? "" : "can-drag", i.move ? "is-move" : ""]),
          style: B({
            width: i.width + "px",
            height: i.height + "px",
            top: i.y + "px",
            left: i.x + "px"
          }),
          key: s,
          onMousedown: w((t) => i.static === !0 || i.dragable === !1 ? null : lt(t, s), ["prevent"])
        }, [
          v("div", yt, [
            q(l.$slots, "item", {
              $index: s,
              data: i
            }, () => [
              ot(it(s), 1)
            ]),
            v("div", {
              class: "setting-box",
              style: B({ display: i.showPop ? "flex" : "none" }),
              onMousedown: w((t) => null, ["prevent", "stop"])
            }, [
              wt(pt, {
                iconObj: u.settingIcon,
                onClick: w((t) => rt(i), ["prevent", "stop"])
              }, null, 8, ["iconObj", "onClick"]),
              i.showPop ? (p(), x("div", xt, [
                q(l.$slots, "setPopNormal", {
                  $index: s,
                  data: i
                }, () => [
                  v("div", {
                    class: "setting-box-pop-item",
                    onClick: (t) => {
                      E(e).splice(s, 1);
                    }
                  }, "删除", 8, Mt)
                ])
              ])) : F("", !0)
            ], 36)
          ]),
          i.static !== !0 && i.resizable !== !1 ? (p(), x(nt, { key: 0 }, [
            v("div", {
              class: "resize-line top-left",
              onMousedown: w((t) => y(t, i, "top-left"), ["prevent", "stop"])
            }, null, 40, mt),
            v("div", {
              class: "resize-line top",
              onMousedown: w((t) => y(t, i, "top"), ["prevent", "stop"])
            }, null, 40, bt),
            v("div", {
              class: "resize-line top-right",
              onMousedown: w((t) => y(t, i, "top-right"), ["prevent", "stop"])
            }, null, 40, kt),
            v("div", {
              class: "resize-line left",
              onMousedown: w((t) => y(t, i, "left"), ["prevent", "stop"])
            }, null, 40, _t),
            v("div", {
              class: "resize-line right",
              onMousedown: w((t) => y(t, i, "right"), ["prevent", "stop"])
            }, null, 40, Ot),
            v("div", {
              class: "resize-line bottom-left",
              onMousedown: w((t) => y(t, i, "bottom-left"), ["prevent", "stop"])
            }, null, 40, Ht),
            v("div", {
              class: "resize-line bottom",
              onMousedown: w((t) => y(t, i, "bottom"), ["prevent", "stop"])
            }, null, 40, Wt),
            v("div", {
              class: "resize-line bottom-right",
              onMousedown: w((t) => y(t, i, "bottom-right"), ["prevent", "stop"])
            }, null, 40, zt)
          ], 64)) : F("", !0)
        ], 46, ft))), 128)),
        v("div", {
          class: "height-bg",
          style: B({ height: E(P) + "px" })
        }, null, 4),
        E(e).length === 0 ? (p(), x("div", Et, [
          q(l.$slots, "empty", {}, () => [
            ot(" 暂无数据 ")
          ])
        ])) : F("", !0)
      ], 512)
    ], 4));
  }
}, Lt = [Pt], Xt = {
  install(u) {
    Lt.forEach((O) => {
      u.component("vueDragComponentPlus", O);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Xt);
export {
  Xt as default
};
