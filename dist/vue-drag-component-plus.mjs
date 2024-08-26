import { resolveComponent as He, openBlock as h, createBlock as le, resolveDynamicComponent as xe, normalizeProps as be, mergeProps as J, withCtx as Re, createElementBlock as v, toDisplayString as ie, watch as We, ref as H, onMounted as _e, onBeforeUnmount as $e, createElementVNode as R, Fragment as Q, renderList as Me, unref as p, normalizeClass as ke, normalizeStyle as A, withModifiers as x, createTextVNode as Z, renderSlot as B, createVNode as me, createCommentVNode as y, nextTick as Le } from "vue";
const Oe = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(g) {
    return (W, se) => {
      const T = He("el-icon");
      return g.iconObj.type === "custom" ? (h(), le(xe(g.iconObj.icon), be(J({ key: 0 }, g.iconObj.attrs)), null, 16)) : g.iconObj.type === "el" ? (h(), le(T, be(J({ key: 1 }, g.iconObj.attrs)), {
        default: Re(() => [
          (h(), le(xe(g.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : g.iconObj.type === "iconfont" ? (h(), v("i", J({
        key: 2,
        class: ["icon iconfont", "icon-" + g.iconObj.icon]
      }, g.iconObj.attrs), null, 16)) : (h(), v("i", J({
        key: 3,
        class: g.iconObj.type
      }, g.iconObj.attrs), ie(g.iconObj.icon), 17));
    };
  }
};
const Ae = ["onMousedown"], Be = { class: "com-item-content" }, Te = ["onClick"], Xe = ["onClick"], Ye = ["onClick"], Se = ["onClick"], Ke = ["onClick"], Ne = ["onClick"], Ve = ["onMousedown"], je = ["onMousedown"], qe = ["onMousedown"], Fe = ["onMousedown"], Ue = ["onMousedown"], Je = ["onMousedown"], Qe = ["onMousedown"], Ze = ["onMousedown"], et = {
  key: 1,
  class: "com-empty"
}, tt = {
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
    // 组件项最小宽度
    itemMinWidth: {
      type: Number,
      default: 15,
      validator(g, W) {
        return g >= 15;
      }
    },
    // 组件项最小高度
    itemMinHeight: {
      type: Number,
      default: 15,
      validator(g, W) {
        return g >= 15;
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
  emits: ["showGroup", "updateChecked"],
  setup(g, { expose: W, emit: se }) {
    const T = se, a = g, m = (n) => {
      let o = n instanceof Array ? [] : {};
      for (let t in n)
        o[t] = typeof n[t] == "object" ? m(n[t]) : n[t];
      return o;
    }, re = () => {
      a.insertResizeKeys.forEach((n) => {
        a.excludeResizeKeys.indexOf(n) === -1 && O.value.push(n);
      });
    };
    We(
      () => [a.insertResizeKeys, a.excludeResizeKeys],
      () => {
        re();
      }
    );
    const O = H([]);
    re();
    const S = H(null);
    let E = null, K = null;
    const X = H(null), N = H(0), i = H([
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
      //   x: 310,
      //   y: 500,
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
    let s = null, ae = null, ce = null;
    const b = H({}), ze = (n, o) => {
      Y(), s = o, b.value = m(i.value[s]), i.value[s].move = !0, ae = n.clientX - n.target.offsetParent.offsetLeft, ce = n.clientY - n.target.offsetParent.offsetTop, window.addEventListener("mousemove", ue), window.addEventListener("mouseup", de);
    }, ue = (n) => {
      const o = n.clientX - ae, t = n.clientY - ce, l = o <= z("left") ? z("left") : o >= z("right") ? z("right") : o, e = t <= z("top") ? z("top") : t >= z("bottom") ? z("bottom") : t;
      e > i.value[s].y && e > K - i.value[s].height - 30 && X.value.scrollBy(0, 20), e < i.value[s].y && e - X.value.scrollTop < 30 && X.value.scrollBy(0, -20), i.value[s].x = l, i.value[s].y = e, setTimeout(() => {
        i.value.filter((c) => c.static === !0).filter((c) => c.x === l && c.width === i.value[s].width || c.x > l && c.x < l + i.value[s].width || c.x + c.width > l && c.x + c.width < l + i.value[s].width).filter((c) => c.y === e && c.height === i.value[s].height || c.y > e && c.y < e + i.value[s].height || c.y + c.height > e && c.y + c.height < e + i.value[s].height).length === 0 ? (b.value.x = l, b.value.y = e) : (i.value.filter((r) => r.static === !0).filter((r) => r.x === l && r.width === i.value[s].width || r.x > l && r.x < l + i.value[s].width || r.x + r.width > l && r.x + r.width < l + i.value[s].width).filter((r) => r.y === i.value[s].y && r.height === i.value[s].height || r.y > i.value[s].y && r.y < i.value[s].y + i.value[s].height || r.y + r.height > i.value[s].y && r.y + r.height < i.value[s].y + i.value[s].height).length === 0 && (b.value.x = l), i.value.filter((r) => r.static === !0).filter((r) => r.x === i.value[s].x && r.width === i.value[s].width || r.x > i.value[s].x && r.x < i.value[s].x + i.value[s].width || r.x + r.width > i.value[s].x && r.x + r.width < i.value[s].x + i.value[s].width).filter((r) => r.y === e && r.height === i.value[s].height || r.y > e && r.y < e + i.value[s].height || r.y + r.height > e && r.y + r.height < e + i.value[s].height).length === 0 && (b.value.y = e)), M();
      }, 30);
    }, de = () => {
      window.removeEventListener("mousemove", ue), window.removeEventListener("mouseup", de), setTimeout(() => {
        delete i.value[s].move, i.value[s].x = b.value.x, i.value[s].y = b.value.y, s = null;
      }, 30);
    }, z = (n) => {
      switch (n) {
        case "top":
          return 0;
        case "right":
          return E - i.value[s].width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let f = null, ee = "", V = 0, j = 0, D = 0, G = 0, I = 0, P = 0, _ = 0, q = 0, $ = 0, F = 0;
    const C = (n, o, t) => {
      Y(), f = o, ee = t, V = n.clientX, j = n.clientY, D = o.width, G = o.height, I = o.y, P = o.x, f.drag = !0;
      const l = i.value.filter((u) => u.static === !0 && (u.x < o.x ? u.x + u.width >= o.x : u.x <= o.x + o.width)), e = i.value.filter((u) => u.static === !0 && (u.y < o.y ? u.y + u.height >= o.y : u.y <= o.y + o.height)), w = l.filter((u) => u.y + u.height <= o.y).map((u) => u.y + u.height);
      w.length > 0 ? _ = Math.max(...w) : _ = 0;
      const c = l.filter((u) => u.y >= o.y + o.height).map((u) => u.y);
      c.length > 0 ? q = Math.min(...c) : q = 0;
      const ne = e.filter((u) => u.x + u.width <= o.x).map((u) => u.x + u.width);
      ne.length > 0 ? $ = Math.max(...ne) : $ = 0;
      const r = e.filter((u) => u.x >= o.x + o.width).map((u) => u.x);
      r.length > 0 ? F = Math.min(...r) : F = 0, window.addEventListener("mousemove", he), window.addEventListener("mouseup", ge);
    }, he = (n) => {
      const o = D + (n.clientX - V), t = G + (n.clientY - j), l = D - (n.clientX - V), e = G - (n.clientY - j), w = I + (n.clientY - j), c = P + (n.clientX - V);
      switch (ee) {
        case "top-left":
          f.height = e < a.itemMinHeight ? a.itemMinHeight : e > d("top") ? d("top") : e, f.y = e < a.itemMinHeight ? I + G - a.itemMinHeight : e > d("top") ? _ : w, f.width = l < a.itemMinWidth ? a.itemMinWidth : l > d("left") ? d("left") : l, f.x = l < a.itemMinWidth ? P + D - a.itemMinWidth : l > d("left") ? $ : c;
          break;
        case "top":
          f.height = e < a.itemMinHeight ? a.itemMinHeight : e > d("top") ? d("top") : e, f.y = e < a.itemMinHeight ? I + G - a.itemMinHeight : e > d("top") ? _ : w;
          break;
        case "top-right":
          f.height = e < a.itemMinHeight ? a.itemMinHeight : e > d("top") ? d("top") : e, f.y = e < a.itemMinHeight ? I + G - a.itemMinHeight : e > d("top") ? _ : w, f.width = o < a.itemMinWidth ? a.itemMinWidth : o > d("right") ? d("right") : o;
          break;
        case "left":
          f.width = l < a.itemMinWidth ? a.itemMinWidth : l > d("left") ? d("left") : l, f.x = l < a.itemMinWidth ? P + D - a.itemMinWidth : l > d("left") ? $ : c;
          break;
        case "right":
          f.width = o < a.itemMinWidth ? a.itemMinWidth : o > d("right") ? d("right") : o;
          break;
        case "bottom-left":
          f.height = t < a.itemMinHeight ? a.itemMinHeight : t > d("bottom") ? d("bottom") : t, f.width = l < a.itemMinWidth ? a.itemMinWidth : l > d("left") ? d("left") : l, f.x = l < a.itemMinWidth ? P + D - a.itemMinWidth : l > d("left") ? $ : c;
          break;
        case "bottom":
          f.height = t < a.itemMinHeight ? a.itemMinHeight : t > d("bottom") ? d("bottom") : t;
          break;
        case "bottom-right":
          f.height = t < a.itemMinHeight ? a.itemMinHeight : t > d("bottom") ? d("bottom") : t, f.width = o < a.itemMinWidth ? a.itemMinWidth : o > d("right") ? d("right") : o;
          break;
      }
      M(), X.value.scrollTo(0, N.value - K);
    }, ge = (n) => {
      delete f.drag, ee = "", f = null, window.removeEventListener("mousemove", he), window.removeEventListener("mouseup", ge);
    }, d = (n) => {
      switch (n) {
        case "top":
          return I + G - _;
        case "left":
          return P + D - $;
        case "right":
          return (F > 0 ? F : E) - P;
        case "bottom":
          return q > 0 ? q - I : 999999999;
      }
    }, M = () => {
      const n = i.value.map((o) => o.y + o.height);
      n.length > 0 ? N.value = Math.max(...n) + 50 : N.value = 0;
    };
    _e(() => {
      pe.observe(S.value);
    });
    const pe = new ResizeObserver((n) => {
      De(E === n[0].contentRect.width ? null : n[0].contentRect.width, K === n[0].contentRect.height ? null : n[0].contentRect.height);
    });
    let te = !1;
    const Ce = (n = [], o = null) => {
      i.value = m(n), o !== null ? Le(() => {
        const l = S.value.getBoundingClientRect().width / o;
        i.value.forEach((e) => {
          e.width *= l, e.height *= l, e.x *= l, e.y *= l;
        }), M();
      }) : M(), te = !0, setTimeout(() => {
        te = !1;
      }, 500);
    }, U = (n, o = null, t = !1) => {
      const l = m(n);
      if (l.id || (l.id = (/* @__PURE__ */ new Date()).getTime() + ""), t !== !0 && !o) {
        l.x = 0;
        const e = i.value.map((w) => w.y + w.height);
        e.length > 0 ? l.y = Math.max(...e) : l.y = 0;
      }
      if (o) {
        const e = i.value.filter((w) => w.id === o);
        if (e.length === 1)
          e[0].groupData.push(l);
        else
          try {
          } catch {
          }
      } else
        i.value.push(l);
      M();
    }, L = (n, o = null) => {
      let t = -1;
      const l = i.value.filter((e) => e.id === o);
      if (o ? l.length === 1 && (t = l[0].groupData.findIndex((e) => e.id === n)) : t = i.value.findIndex((e) => e.id === n), t !== -1)
        o ? l[0].groupData.splice(t, 1) : i.value.splice(t, 1), M();
      else
        try {
        } catch {
        }
    }, Ee = (n) => {
      if (n.id) {
        const o = m(n);
        let t = -1;
        const l = i.value.filter((e) => e.id === o.inGroupId);
        if (o.inGroupId ? l.length === 1 && (t = l[0].groupData.findIndex((e) => e.id === o.id)) : t = i.value.findIndex((e) => e.id === o.id), t !== -1)
          o.inGroupId ? l[0].groupData[t] = o : i.value[t] = o, M();
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, De = (n, o) => {
      if (n !== null) {
        const t = E ? n / E : 1;
        E = n, te || (i.value.forEach((l) => {
          l.width *= t, l.height *= t, l.x *= t, l.y *= t;
        }), M());
      }
      o !== null && (K = o);
    }, ve = (n) => {
      n.showPop || (i.value.forEach((o) => {
        delete o.showPop, o.groupData && o.groupData.forEach((t) => {
          delete t.showPop;
        });
      }), n.showPop = !0, window.addEventListener("click", Y));
    }, Y = () => {
      i.value.forEach((n) => {
        delete n.showPop, n.groupData && n.groupData.forEach((o) => {
          delete o.showPop;
        });
      }), window.removeEventListener("click", Y);
    }, k = H(!1), fe = (n) => {
      const o = i.value.findIndex((t) => t.id === n);
      if (o !== -1)
        i.value[o].checked = !0, i.value[o].disabled = !0, k.value = !0, T("showGroup", k.value);
      else
        try {
        } catch {
        }
    }, ye = () => {
      k.value = !1, i.value.forEach((n) => {
        delete n.checked, delete n.disabled, n.groupData && n.groupData.forEach((o) => {
          delete o.checked, delete o.disabled;
        });
      }), T("showGroup", k.value);
    }, Ge = (n) => {
      n.checked = !n.checked, T("updateChecked", i.value.filter((o) => o.checked).length);
    }, Ie = () => {
      const n = i.value.filter((o) => o.checked);
      if (n.length > 1) {
        const o = {
          id: (/* @__PURE__ */ new Date()).getTime() + "G",
          isGroup: !0,
          width: 200,
          height: 200,
          groupData: []
        };
        n.forEach((t) => {
          L(t.id), t.inGroupId = o.id, o.groupData.push(t);
        }), U(o), M();
      }
      ye();
    }, we = (n, o) => {
      const t = i.value.filter((l) => l.id === o)[0];
      if (t) {
        const l = t.groupData.filter((e) => e.id === n)[0];
        if (l)
          delete l.inGroupId, U(l), L(l.id, t.id), t.groupData.length < 2 && oe(o), M();
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, oe = (n) => {
      const o = i.value.filter((t) => t.id === n)[0];
      if (o)
        L(o.id), o.groupData.forEach((t) => {
          delete t.inGroupId, U(t, null, !0);
        }), M();
      else
        try {
        } catch {
        }
    }, Pe = () => ({ data: m(i.value), width: E });
    return $e(() => {
      pe.unobserve(S.value), window.removeEventListener("click", Y);
    }), W({ init: Ce, addItem: U, deleteItem: L, updateItem: Ee, openGroup: fe, closeGroup: ye, addGroup: Ie, removeGroupItem: we, removeGroup: oe, getData: Pe }), (n, o) => (h(), v("div", {
      class: "vue-drag-component-plus",
      ref_key: "pageRef",
      ref: S
    }, [
      R("div", {
        class: "content-box",
        ref_key: "boxRef",
        ref: X
      }, [
        (h(!0), v(Q, null, Me(p(i), (t, l) => (h(), v("div", {
          class: ke(["com-item", g.seeModel || p(k) || t.static === !0 || t.dragable === !1 ? "" : "can-drag", t.move ? "is-move" : "", t.drag ? "is-drag" : "", t.showPop ? "on-top" : ""]),
          style: A({
            width: t.width + "px",
            height: t.height + "px",
            top: t.y + "px",
            left: t.x + "px"
          }),
          key: l,
          onMousedown: x((e) => g.seeModel || p(k) || t.static === !0 || t.dragable === !1 ? null : ze(e, l), ["prevent"])
        }, [
          R("div", Be, [
            t.isGroup ? (h(), v(Q, { key: 0 }, [
              Z(" 123 "),
              (h(!0), v(Q, null, Me(t.groupData, (e, w) => (h(), v("div", {
                class: "com-item-content-child",
                style: A({
                  width: e.width + "px",
                  height: e.height + "px",
                  top: e.y + "px",
                  left: e.x + "px"
                }),
                key: w
              }, [
                B(n.$slots, "item", { data: e }, () => [
                  Z(ie(l), 1)
                ]),
                !g.seeModel && !p(k) && p(s) === null && p(f) === null ? (h(), v("div", {
                  key: 0,
                  class: "setting-box",
                  style: A({ display: e.showPop ? "flex" : "none" }),
                  onMousedown: x((c) => null, ["prevent", "stop"])
                }, [
                  me(Oe, {
                    iconObj: g.settingIcon,
                    onClick: x((c) => ve(e), ["prevent", "stop"])
                  }, null, 8, ["iconObj", "onClick"])
                ], 36)) : y("", !0),
                e.showPop ? (h(), v("div", {
                  key: 1,
                  class: "setting-box-pop",
                  onMousedown: x((c) => null, ["prevent", "stop"])
                }, [
                  B(n.$slots, "setPopNormal", {
                    data: m(e)
                  }, () => [
                    R("div", {
                      class: "setting-box-pop-item",
                      onClick: (c) => we(e.id, e.inGroupId)
                    }, "移出组合", 8, Te),
                    R("div", {
                      class: "setting-box-pop-item",
                      onClick: (c) => L(e.id, e.inGroupId)
                    }, "删除", 8, Xe)
                  ])
                ], 32)) : y("", !0)
              ], 4))), 128))
            ], 64)) : B(n.$slots, "item", {
              key: 1,
              data: t
            }, () => [
              Z(ie(l), 1)
            ]),
            !t.isGroup && t.notGroup !== !0 && p(k) ? (h(), v("div", {
              key: 2,
              class: ke(["group-checkbox", t.checked ? "is-checked" : "", t.disabled ? "disabled" : ""]),
              onClick: (e) => t.disabled ? null : Ge(t)
            }, null, 10, Ye)) : y("", !0),
            !g.seeModel && !p(k) && p(s) === null && p(f) === null ? (h(), v("div", {
              key: 3,
              class: "setting-box",
              style: A({ display: t.showPop ? "flex" : "none" }),
              onMousedown: x((e) => null, ["prevent", "stop"])
            }, [
              me(Oe, {
                iconObj: g.settingIcon,
                onClick: x((e) => ve(t), ["prevent", "stop"])
              }, null, 8, ["iconObj", "onClick"])
            ], 36)) : y("", !0),
            t.showPop ? (h(), v("div", {
              key: 4,
              class: "setting-box-pop",
              onMousedown: x((e) => null, ["prevent", "stop"])
            }, [
              t.isGroup === !0 ? B(n.$slots, "setPopSpecial", {
                key: 0,
                data: m(t)
              }, () => [
                R("div", {
                  class: "setting-box-pop-item",
                  onClick: (e) => oe(t.id)
                }, "解除组合", 8, Se)
              ]) : B(n.$slots, "setPopNormal", {
                key: 1,
                data: m(t)
              }, () => [
                t.notGroup !== !0 ? (h(), v("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (e) => fe(t.id)
                }, "组合", 8, Ke)) : y("", !0),
                R("div", {
                  class: "setting-box-pop-item",
                  onClick: (e) => L(t.id)
                }, "删除", 8, Ne)
              ])
            ], 32)) : y("", !0)
          ]),
          !g.seeModel && !p(k) && !t.move && t.static !== !0 && t.resizable !== !1 ? (h(), v(Q, { key: 0 }, [
            p(O).indexOf("topLeft") !== -1 ? (h(), v("div", {
              key: 0,
              class: "resize-line top-left",
              onMousedown: x((e) => C(e, t, "top-left"), ["prevent", "stop"])
            }, null, 40, Ve)) : y("", !0),
            p(O).indexOf("top") !== -1 ? (h(), v("div", {
              key: 1,
              class: "resize-line top",
              onMousedown: x((e) => C(e, t, "top"), ["prevent", "stop"])
            }, null, 40, je)) : y("", !0),
            p(O).indexOf("topRight") !== -1 ? (h(), v("div", {
              key: 2,
              class: "resize-line top-right",
              onMousedown: x((e) => C(e, t, "top-right"), ["prevent", "stop"])
            }, null, 40, qe)) : y("", !0),
            p(O).indexOf("left") !== -1 ? (h(), v("div", {
              key: 3,
              class: "resize-line left",
              onMousedown: x((e) => C(e, t, "left"), ["prevent", "stop"])
            }, null, 40, Fe)) : y("", !0),
            p(O).indexOf("right") !== -1 ? (h(), v("div", {
              key: 4,
              class: "resize-line right",
              onMousedown: x((e) => C(e, t, "right"), ["prevent", "stop"])
            }, null, 40, Ue)) : y("", !0),
            p(O).indexOf("bottomLeft") !== -1 ? (h(), v("div", {
              key: 5,
              class: "resize-line bottom-left",
              onMousedown: x((e) => C(e, t, "bottom-left"), ["prevent", "stop"])
            }, null, 40, Je)) : y("", !0),
            p(O).indexOf("bottom") !== -1 ? (h(), v("div", {
              key: 6,
              class: "resize-line bottom",
              onMousedown: x((e) => C(e, t, "bottom"), ["prevent", "stop"])
            }, null, 40, Qe)) : y("", !0),
            p(O).indexOf("bottomRight") !== -1 ? (h(), v("div", {
              key: 7,
              class: "resize-line bottom-right",
              onMousedown: x((e) => C(e, t, "bottom-right"), ["prevent", "stop"])
            }, null, 40, Ze)) : y("", !0)
          ], 64)) : y("", !0)
        ], 46, Ae))), 128)),
        p(s) !== null ? (h(), v("div", {
          key: 0,
          class: "drag-bg",
          style: A({
            width: p(b).width + "px",
            height: p(b).height + "px",
            top: p(b).y + "px",
            left: p(b).x + "px"
          })
        }, null, 4)) : y("", !0),
        R("div", {
          class: "height-bg",
          style: A({ height: p(N) + "px" })
        }, null, 4),
        p(i).length === 0 ? (h(), v("div", et, [
          B(n.$slots, "empty", {}, () => [
            Z(" 暂无数据 ")
          ])
        ])) : y("", !0)
      ], 512)
    ], 512));
  }
}, ot = [tt], nt = {
  install(g) {
    ot.forEach((W) => {
      g.component("vueDragComponentPlus", W);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(nt);
export {
  nt as default
};
