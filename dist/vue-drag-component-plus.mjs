import { resolveComponent as we, openBlock as f, createBlock as U, resolveDynamicComponent as se, normalizeProps as re, mergeProps as K, withCtx as xe, createElementBlock as v, toDisplayString as he, watch as Me, ref as X, onMounted as be, onBeforeUnmount as me, createElementVNode as T, Fragment as ae, renderList as ke, unref as y, normalizeClass as Oe, normalizeStyle as G, withModifiers as w, renderSlot as J, createTextVNode as ce, createVNode as ze, createCommentVNode as p, nextTick as Ee } from "vue";
const Re = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(u) {
    return (L, r) => {
      const M = we("el-icon");
      return u.iconObj.type === "custom" ? (f(), U(se(u.iconObj.icon), re(K({ key: 0 }, u.iconObj.attrs)), null, 16)) : u.iconObj.type === "el" ? (f(), U(M, re(K({ key: 1 }, u.iconObj.attrs)), {
        default: xe(() => [
          (f(), U(se(u.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : u.iconObj.type === "iconfont" ? (f(), v("i", K({
        key: 2,
        class: ["icon iconfont", "icon-" + u.iconObj.icon]
      }, u.iconObj.attrs), null, 16)) : (f(), v("i", K({
        key: 3,
        class: u.iconObj.type
      }, u.iconObj.attrs), he(u.iconObj.icon), 17));
    };
  }
};
const He = ["onMousedown"], We = { class: "com-item-content" }, Le = {
  key: 0,
  class: "setting-box-pop"
}, Pe = ["onClick"], _e = ["onMousedown"], Ce = ["onMousedown"], Ae = ["onMousedown"], Xe = ["onMousedown"], Ye = ["onMousedown"], Ie = ["onMousedown"], Be = ["onMousedown"], Se = ["onMousedown"], $e = {
  key: 0,
  class: "com-empty"
}, De = {
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
    // 预览模式
    seeModel: {
      type: Boolean,
      default: !1
    },
    // 无设置菜单模式（仅拖动、缩放）
    noEditModel: {
      type: Boolean,
      default: !1
    },
    // 组件项最小宽度
    itemMinWidth: {
      type: Number,
      default: 15,
      validator(u, L) {
        return u >= 15;
      }
    },
    // 组件项最小高度
    itemMinHeight: {
      type: Number,
      default: 15,
      validator(u, L) {
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
  setup(u, { expose: L }) {
    const r = u, M = (t) => {
      let e = t instanceof Array ? [] : {};
      for (let n in t)
        e[n] = typeof t[n] == "object" ? M(t[n]) : t[n];
      return e;
    }, Q = () => {
      r.insertResizeKeys.forEach((t) => {
        r.excludeResizeKeys.indexOf(t) === -1 && x.value.push(t);
      });
    };
    Me(
      () => [r.insertResizeKeys, r.excludeResizeKeys],
      () => {
        Q();
      }
    );
    const x = X([]);
    Q();
    const Y = X(null);
    let O = null, I = null;
    const N = X(null), C = X(0), i = X([
      // {
      //   width: 100,
      //   height: 100,
      //   x: 300,
      //   y: 300
      // },
      // {
      //   width: 100,
      //   height: 100,
      //   x: 390,
      //   y: 50,
      //   static: true
      // },
      // {
      //   width: 100,
      //   height: 100,
      //   x: 50,
      //   y: 210,
      //   static: true
      // },
      // {
      //   width: 100,
      //   height: 100,
      //   x: 210,
      //   y: 600,
      //   static: true
      // },
      // {
      //   width: 100,
      //   height: 100,
      //   x: 700,
      //   y: 390,
      //   static: true
      // },
      // {
      //   width: 100,
      //   height: 100,
      //   x: 600,
      //   y: 290,
      //   static: true
      // }
    ]);
    let a = null, Z = null, j = null;
    const de = (t, e) => {
      A(), a = e, i.value[a].move = !0, Z = t.clientX - t.target.offsetParent.offsetLeft, j = t.clientY - t.target.offsetParent.offsetTop, window.addEventListener("mousemove", ee), window.addEventListener("mouseup", te);
    }, ee = (t) => {
      const e = t.clientX - Z, n = t.clientY - j, l = e <= b("left") ? b("left") : e >= b("right") ? b("right") : e, o = n <= b("top") ? b("top") : n >= b("bottom") ? b("bottom") : n;
      i.value.filter((d) => d.static === !0).filter((d) => d.x === l && d.width === i.value[a].width || d.x > l && d.x < l + i.value[a].width || d.x + d.width > l && d.x + d.width < l + i.value[a].width).filter((d) => d.y === o && d.height === i.value[a].height || d.y > o && d.y < o + i.value[a].height || d.y + d.height > o && d.y + d.height < o + i.value[a].height).length === 0 ? (i.value[a].x = l, i.value[a].y = o) : (i.value.filter((s) => s.static === !0).filter((s) => s.x === l && s.width === i.value[a].width || s.x > l && s.x < l + i.value[a].width || s.x + s.width > l && s.x + s.width < l + i.value[a].width).filter((s) => s.y === i.value[a].y && s.height === i.value[a].height || s.y > i.value[a].y && s.y < i.value[a].y + i.value[a].height || s.y + s.height > i.value[a].y && s.y + s.height < i.value[a].y + i.value[a].height).length === 0 && (i.value[a].x = l), i.value.filter((s) => s.static === !0).filter((s) => s.x === i.value[a].x && s.width === i.value[a].width || s.x > i.value[a].x && s.x < i.value[a].x + i.value[a].width || s.x + s.width > i.value[a].x && s.x + s.width < i.value[a].x + i.value[a].width).filter((s) => s.y === o && s.height === i.value[a].height || s.y > o && s.y < o + i.value[a].height || s.y + s.height > o && s.y + s.height < o + i.value[a].height).length === 0 && (i.value[a].y = o)), k(), N.value.scrollTo(0, C.value - I);
    }, te = () => {
      window.removeEventListener("mousemove", ee), window.removeEventListener("mouseup", te), delete i.value[a].move, a = null;
    }, b = (t) => {
      switch (t) {
        case "top":
          return 0;
        case "right":
          return O - i.value[a].width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let g = null, V = "", B = 0, S = 0, z = 0, E = 0, R = 0, H = 0, P = 0, $ = 0, _ = 0, D = 0;
    const m = (t, e, n) => {
      A(), g = e, V = n, B = t.clientX, S = t.clientY, z = e.width, E = e.height, R = e.y, H = e.x;
      const l = i.value.filter((c) => c.static === !0 && (c.x < e.x ? c.x + c.width >= e.x : c.x <= e.x + e.width)), o = i.value.filter((c) => c.static === !0 && (c.y < e.y ? c.y + c.height >= e.y : c.y <= e.y + e.height)), W = l.filter((c) => c.y + c.height <= e.y).map((c) => c.y + c.height);
      W.length > 0 ? P = Math.max(...W) : P = 0;
      const d = l.filter((c) => c.y >= e.y + e.height).map((c) => c.y);
      d.length > 0 ? $ = Math.max(...d) : $ = 0;
      const F = o.filter((c) => c.x + c.width <= e.x).map((c) => c.x + c.width);
      F.length > 0 ? _ = Math.max(...F) : _ = 0;
      const s = o.filter((c) => c.x >= e.x + e.width).map((c) => c.x);
      s.length > 0 ? D = Math.max(...s) : D = 0, window.addEventListener("mousemove", ne), window.addEventListener("mouseup", oe);
    }, ne = (t) => {
      const e = z + (t.clientX - B), n = E + (t.clientY - S), l = z - (t.clientX - B), o = E - (t.clientY - S), W = R + (t.clientY - S), d = H + (t.clientX - B);
      switch (V) {
        case "top-left":
          g.height = o < r.itemMinHeight ? r.itemMinHeight : o > h("top") ? h("top") : o, g.y = o < r.itemMinHeight ? R + E - r.itemMinHeight : o > h("top") ? P : W, g.width = l < r.itemMinWidth ? r.itemMinWidth : l > h("left") ? h("left") : l, g.x = l < r.itemMinWidth ? H + z - r.itemMinWidth : l > h("left") ? _ : d;
          break;
        case "top":
          g.height = o < r.itemMinHeight ? r.itemMinHeight : o > h("top") ? h("top") : o, g.y = o < r.itemMinHeight ? R + E - r.itemMinHeight : o > h("top") ? P : W;
          break;
        case "top-right":
          g.height = o < r.itemMinHeight ? r.itemMinHeight : o > h("top") ? h("top") : o, g.y = o < r.itemMinHeight ? R + E - r.itemMinHeight : o > h("top") ? P : W, g.width = e < r.itemMinWidth ? r.itemMinWidth : e > h("right") ? h("right") : e;
          break;
        case "left":
          g.width = l < r.itemMinWidth ? r.itemMinWidth : l > h("left") ? h("left") : l, g.x = l < r.itemMinWidth ? H + z - r.itemMinWidth : l > h("left") ? _ : d;
          break;
        case "right":
          g.width = e < r.itemMinWidth ? r.itemMinWidth : e > h("right") ? h("right") : e;
          break;
        case "bottom-left":
          g.height = n < r.itemMinHeight ? r.itemMinHeight : n > h("bottom") ? h("bottom") : n, g.width = l < r.itemMinWidth ? r.itemMinWidth : l > h("left") ? h("left") : l, g.x = l < r.itemMinWidth ? H + z - r.itemMinWidth : l > h("left") ? _ : d;
          break;
        case "bottom":
          g.height = n < r.itemMinHeight ? r.itemMinHeight : n > h("bottom") ? h("bottom") : n;
          break;
        case "bottom-right":
          g.height = n < r.itemMinHeight ? r.itemMinHeight : n > h("bottom") ? h("bottom") : n, g.width = e < r.itemMinWidth ? r.itemMinWidth : e > h("right") ? h("right") : e;
          break;
      }
      k(), N.value.scrollTo(0, C.value - I);
    }, oe = (t) => {
      V = "", g = null, window.removeEventListener("mousemove", ne), window.removeEventListener("mouseup", oe);
    }, h = (t) => {
      switch (t) {
        case "top":
          return R + E - P;
        case "left":
          return H + z - _;
        case "right":
          return (D > 0 ? D : O) - H;
        case "bottom":
          return $ > 0 ? $ - R : 999999999;
      }
    }, k = () => {
      const t = i.value.map((e) => e.y + e.height);
      t.length > 0 ? C.value = Math.max(...t) + 50 : C.value = 0;
    };
    be(() => {
      ie.observe(Y.value);
    });
    const ie = new ResizeObserver((t) => {
      ve(O === t[0].contentRect.width ? null : t[0].contentRect.width, I === t[0].contentRect.height ? null : t[0].contentRect.height);
    });
    let q = !1;
    const ue = (t = [], e = null) => {
      i.value = M(t), e !== null ? Ee(() => {
        const l = Y.value.getBoundingClientRect().width / e;
        i.value.forEach((o) => {
          o.width *= l, o.height *= l, o.x *= l, o.y *= l;
        }), k();
      }) : k(), q = !0, setTimeout(() => {
        q = !1;
      }, 500);
    }, ge = (t) => {
      const e = M(t);
      e.id || (e.id = (/* @__PURE__ */ new Date()).getTime() + ""), e.x = 0;
      const n = i.value.map((l) => l.y + l.height);
      n.length > 0 ? e.y = Math.max(...n) : e.y = 0, i.value.push(e), k();
    }, le = (t) => {
      const e = i.value.findIndex((n) => n.id === t);
      if (e !== -1)
        i.value.splice(e, 1), k();
      else
        try {
        } catch {
        }
    }, fe = (t) => {
      if (t.id) {
        const e = M(t), n = i.value.findIndex((l) => l.id === e.id);
        if (n !== -1)
          i.value[n] = e, k();
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, ve = (t, e) => {
      if (t !== null) {
        const n = O ? t / O : 1;
        O = t, q || (i.value.forEach((l) => {
          l.width *= n, l.height *= n, l.x *= n, l.y *= n;
        }), k());
      }
      e !== null && (I = e);
    }, ye = () => ({ data: M(i.value), width: O }), pe = (t) => {
      t.showPop || (i.value.forEach((e) => {
        delete e.showPop;
      }), t.showPop = !0, window.addEventListener("click", A));
    }, A = () => {
      i.value.forEach((t) => {
        delete t.showPop;
      }), window.removeEventListener("click", A);
    };
    return me(() => {
      ie.unobserve(Y.value), window.removeEventListener("click", A);
    }), L({ init: ue, addItem: ge, deleteItem: le, updateItem: fe, getData: ye }), (t, e) => (f(), v("div", {
      class: "vue-drag-component-plus",
      ref_key: "pageRef",
      ref: Y
    }, [
      T("div", {
        class: "content-box",
        ref_key: "boxRef",
        ref: N
      }, [
        (f(!0), v(ae, null, ke(y(i), (n, l) => (f(), v("div", {
          class: Oe(["com-item", u.seeModel || n.static === !0 || n.dragable === !1 ? "" : "can-drag", n.move ? "is-move" : ""]),
          style: G({
            width: n.width + "px",
            height: n.height + "px",
            top: n.y + "px",
            left: n.x + "px"
          }),
          key: l,
          onMousedown: w((o) => u.seeModel || n.static === !0 || n.dragable === !1 ? null : de(o, l), ["prevent"])
        }, [
          T("div", We, [
            J(t.$slots, "item", {
              $index: l,
              data: n
            }, () => [
              ce(he(l), 1)
            ]),
            !u.seeModel && !u.noEditModel && y(a) === null && y(g) === null ? (f(), v("div", {
              key: 0,
              class: "setting-box",
              style: G({ display: n.showPop ? "flex" : "none" }),
              onMousedown: w((o) => null, ["prevent", "stop"])
            }, [
              ze(Re, {
                iconObj: u.settingIcon,
                onClick: w((o) => pe(n), ["prevent", "stop"])
              }, null, 8, ["iconObj", "onClick"]),
              n.showPop ? (f(), v("div", Le, [
                J(t.$slots, "setPopNormal", {
                  $index: l,
                  data: M(n)
                }, () => [
                  T("div", {
                    class: "setting-box-pop-item",
                    onClick: (o) => le(n.id)
                  }, "删除", 8, Pe)
                ])
              ])) : p("", !0)
            ], 36)) : p("", !0)
          ]),
          !u.seeModel && n.static !== !0 && n.resizable !== !1 ? (f(), v(ae, { key: 0 }, [
            y(x).indexOf("topLeft") !== -1 ? (f(), v("div", {
              key: 0,
              class: "resize-line top-left",
              onMousedown: w((o) => m(o, n, "top-left"), ["prevent", "stop"])
            }, null, 40, _e)) : p("", !0),
            y(x).indexOf("top") !== -1 ? (f(), v("div", {
              key: 1,
              class: "resize-line top",
              onMousedown: w((o) => m(o, n, "top"), ["prevent", "stop"])
            }, null, 40, Ce)) : p("", !0),
            y(x).indexOf("topRight") !== -1 ? (f(), v("div", {
              key: 2,
              class: "resize-line top-right",
              onMousedown: w((o) => m(o, n, "top-right"), ["prevent", "stop"])
            }, null, 40, Ae)) : p("", !0),
            y(x).indexOf("left") !== -1 ? (f(), v("div", {
              key: 3,
              class: "resize-line left",
              onMousedown: w((o) => m(o, n, "left"), ["prevent", "stop"])
            }, null, 40, Xe)) : p("", !0),
            y(x).indexOf("right") !== -1 ? (f(), v("div", {
              key: 4,
              class: "resize-line right",
              onMousedown: w((o) => m(o, n, "right"), ["prevent", "stop"])
            }, null, 40, Ye)) : p("", !0),
            y(x).indexOf("bottomLeft") !== -1 ? (f(), v("div", {
              key: 5,
              class: "resize-line bottom-left",
              onMousedown: w((o) => m(o, n, "bottom-left"), ["prevent", "stop"])
            }, null, 40, Ie)) : p("", !0),
            y(x).indexOf("bottom") !== -1 ? (f(), v("div", {
              key: 6,
              class: "resize-line bottom",
              onMousedown: w((o) => m(o, n, "bottom"), ["prevent", "stop"])
            }, null, 40, Be)) : p("", !0),
            y(x).indexOf("bottomRight") !== -1 ? (f(), v("div", {
              key: 7,
              class: "resize-line bottom-right",
              onMousedown: w((o) => m(o, n, "bottom-right"), ["prevent", "stop"])
            }, null, 40, Se)) : p("", !0)
          ], 64)) : p("", !0)
        ], 46, He))), 128)),
        T("div", {
          class: "height-bg",
          style: G({ height: y(C) + "px" })
        }, null, 4),
        y(i).length === 0 ? (f(), v("div", $e, [
          J(t.$slots, "empty", {}, () => [
            ce(" 暂无数据 ")
          ])
        ])) : p("", !0)
      ], 512)
    ], 512));
  }
}, Ke = [De], Te = {
  install(u) {
    Ke.forEach((L) => {
      u.component("vueDragComponentPlus", L);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Te);
export {
  Te as default
};
