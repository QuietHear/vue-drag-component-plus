import { resolveComponent as kt, openBlock as w, createBlock as Te, resolveDynamicComponent as je, normalizeProps as et, mergeProps as Ce, withCtx as bt, createElementBlock as E, toDisplayString as $, watch as tt, ref as A, onMounted as Et, onBeforeUnmount as St, normalizeStyle as X, unref as y, createElementVNode as O, Fragment as he, renderList as Ye, normalizeClass as ee, withModifiers as z, createCommentVNode as m, renderSlot as ce, createVNode as st, createTextVNode as Dt, isVNode as ot, nextTick as lt } from "vue";
const rt = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(_) {
    return (V, Re) => {
      const H = kt("el-icon");
      return _.iconObj.type === "custom" ? (w(), Te(je(_.iconObj.icon), et(Ce({ key: 0 }, _.iconObj.attrs)), null, 16)) : _.iconObj.type === "el" ? (w(), Te(H, et(Ce({ key: 1 }, _.iconObj.attrs)), {
        default: bt(() => [
          (w(), Te(je(_.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : _.iconObj.type === "iconfont" ? (w(), E("i", Ce({
        key: 2,
        class: ["icon iconfont", "icon-" + _.iconObj.icon]
      }, _.iconObj.attrs), null, 16)) : (w(), E("i", Ce({
        key: 3,
        class: _.iconObj.type
      }, _.iconObj.attrs), $(_.iconObj.icon), 17));
    };
  }
};
const Pt = ["onMousedown", "onMouseenter", "onMouseleave"], It = { class: "com-item-box" }, mt = ["title"], Ct = { class: "com-item-box-content" }, Gt = ["onClick"], Wt = ["onClick"], Ht = ["onClick"], Ot = {
  key: 1,
  class: "com-item-box-content"
}, zt = ["onClick"], Tt = ["onClick"], Yt = ["onClick"], Rt = ["onClick"], At = ["onClick"], Xt = ["onClick"], Lt = ["onMousedown"], $t = ["onMousedown"], Vt = ["onMousedown"], Bt = ["onMousedown"], Nt = ["onMousedown"], Kt = ["onMousedown"], Ft = ["onMousedown"], qt = ["onMousedown"], Ut = {
  key: 2,
  class: "com-empty"
}, Jt = {
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
    // 顶部组件添加ySpace间距
    addFirstSpace: {
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
      validator(_, V) {
        return _ >= 0;
      }
    },
    // 组件项最小宽度
    itemMinWidth: {
      type: Number,
      default: 15,
      validator(_, V) {
        return _ >= 15;
      }
    },
    // 组件项最小高度
    itemMinHeight: {
      type: Number,
      default: 15,
      validator(_, V) {
        return _ >= 15;
      }
    },
    // 纵向相邻元素的自动间距
    ySpace: {
      type: Number,
      default: 7,
      validator(_, V) {
        return _ >= 0;
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
    // 不显示辅助线
    hideAuxiliary: {
      type: Boolean,
      default: !1
    },
    // 辅助线显示距离
    auxiliarySpace: {
      type: Number,
      default: 15,
      validator(_, V) {
        return _ >= 1;
      }
    }
  },
  emits: ["baseWidthInit", "changeScle", "dragStart", "dragIng", "dragEnd", "resizeStart", "resizeIng", "resizeEnd", "showGroup", "openSetMenu", "updateChecked", "showTitPop"],
  setup(_, { expose: V, emit: Re }) {
    const H = Re, d = _, k = (s) => {
      if (typeof s == "object" && !ot(s) && s !== null && !(s instanceof Date)) {
        let t = s instanceof Array ? [] : {};
        for (let e in s)
          t[e] = typeof s[e] == "object" && !ot(s[e]) && s[e] !== null && !(s[e] instanceof Date) ? k(s[e]) : s[e];
        return t;
      } else
        return s;
    }, ve = (s, t, e = !1) => it(N(s, t, e), t, e), N = (s, t, e = !1) => s.filter((l) => l[e ? "s_x" : "x"] <= t[e ? "s_x" : "x"] && l[e ? "s_x" : "x"] + l[e ? "s_width" : "width"] > t[e ? "s_x" : "x"] || l[e ? "s_x" : "x"] > t[e ? "s_x" : "x"] && l[e ? "s_x" : "x"] < t[e ? "s_x" : "x"] + t[e ? "s_width" : "width"]), it = (s, t, e = !1) => s.filter((l) => l[e ? "s_y" : "y"] <= t[e ? "s_y" : "y"] && l[e ? "s_y" : "y"] + l[e ? "s_height" : "height"] > t[e ? "s_y" : "y"] || l[e ? "s_y" : "y"] > t[e ? "s_y" : "y"] && l[e ? "s_y" : "y"] < t[e ? "s_y" : "y"] + t[e ? "s_height" : "height"]), U = (s, t = (l) => l, e = !1) => {
      const l = k(r.value), o = k(s);
      o.sort((i, S) => {
        const c = i[e ? "s_y" : "y"], g = S[e ? "s_y" : "y"];
        return c - g;
      });
      const a = (i) => {
        ve(t(l, i), i, e).forEach((c) => {
          c[e ? "s_y" : "y"] = i[e ? "s_y" : "y"] + i[e ? "s_height" : "height"], a(c);
        });
      };
      o.forEach((i) => a(l.filter((S) => S.id === i.id)[0])), l.forEach((i) => {
        r.value.filter((S) => S.id === i.id)[0][e ? "s_y" : "y"] = i[e ? "s_y" : "y"];
      });
    }, Ae = () => {
      d.insertResizeKeys.forEach((s) => {
        d.excludeResizeKeys.indexOf(s) === -1 && B.value.push(s);
      });
    };
    tt(
      () => [d.insertResizeKeys, d.excludeResizeKeys],
      () => {
        Ae();
      }
    );
    const B = A([]);
    Ae();
    const T = A(null);
    let te = null;
    const xe = (s) => {
      te = s, H("baseWidthInit", te);
    }, Y = A(1), we = (s) => {
      Y.value = s, H("changeScle", Y.value);
    }, se = (s) => {
      s.s_width = s.width * Y.value, s.s_height = s.height * Y.value;
      const t = getComputedStyle(T.value), e = parseInt(t.getPropertyValue("--com-item-border-width").trim()), l = parseInt(t.getPropertyValue("--group-tit-height").trim());
      if (s.isGroup === !0) {
        const o = s.s_width - 2 * e, a = s.s_height - 2 * e - (s.groupTit ? l : 0);
        s.groupData.forEach((i) => {
          i.s_width = o * i.groupW, i.s_height = a * i.groupH, i.s_x = o * i.groupX, i.s_y = a * i.groupY;
        });
      }
    }, nt = (s) => {
      s.s_x = s.x * Y.value, s.s_y = s.y * Y.value;
    }, at = (s) => {
      s.width = s.s_width / Y.value, s.height = s.s_height / Y.value;
      const t = getComputedStyle(T.value), e = parseInt(t.getPropertyValue("--com-item-border-width").trim()), l = parseInt(t.getPropertyValue("--group-tit-height").trim());
      if (s.isGroup === !0) {
        const o = s.width - 2 * e, a = s.height - 2 * e - (s.groupTit ? l : 0);
        s.groupData.forEach((i) => {
          i.x = o * i.groupX, i.y = a * i.groupY;
        });
      }
    }, Ge = (s) => {
      s.x = s.s_x / Y.value, s.y = s.s_y / Y.value;
    };
    let K = null, Xe = null;
    const ut = A(null), Me = A(0), de = A(null), pe = A(null), ge = A(null), ye = A(null), oe = (s) => {
      const t = k(s);
      if (s === null)
        de.value = null, pe.value = null, ge.value = null, ye.value = null;
      else {
        const e = getComputedStyle(T.value), l = parseInt(e.getPropertyValue("--auxiliary-width").trim()), o = r.value.filter((p) => p.id !== t.id).map((p) => p.s_y), a = r.value.filter((p) => p.id !== t.id).map((p) => p.s_y + p.s_height - 1), i = [...o, ...a];
        i.sort(), i.filter((p) => p <= t.s_y && t.s_y - d.auxiliarySpace < p || p >= t.s_y && t.s_y + d.auxiliarySpace > p).length > 0 ? de.value = t.s_y : de.value = null, i.filter((p) => p <= t.s_y + t.s_height - 1 && t.s_y + t.s_height - 1 - d.auxiliarySpace < p || p >= t.s_y + t.s_height - 1 && t.s_y + t.s_height - 1 + d.auxiliarySpace > p).length > 0 ? pe.value = t.s_y + t.s_height - l : pe.value = null;
        const S = r.value.filter((p) => p.id !== t.id).map((p) => p.s_x), c = r.value.filter((p) => p.id !== t.id).map((p) => p.s_x + p.s_width - 1), g = [...S, ...c];
        g.sort(), g.filter((p) => p <= t.s_x && t.s_x - d.auxiliarySpace < p || p >= t.s_x && t.s_x + d.auxiliarySpace > p).length > 0 ? ge.value = t.s_x : ge.value = null, g.filter((p) => p <= t.s_x + t.s_width - 1 && t.s_x + t.s_width - 1 - d.auxiliarySpace < p || p >= t.s_x + t.s_width - 1 && t.s_x + t.s_width - 1 + d.auxiliarySpace > p).length > 0 ? ye.value = t.s_x + t.s_width - l : ye.value = null;
      }
    }, r = A([]), ht = (s, t) => {
      let e = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.msMatchesSelector;
      for (; s && !e.call(s, t); )
        s = s.parentElement;
      return s;
    };
    let I = null, Le = null, $e = null;
    const C = A({}), ct = (s, t) => {
      fe(), I = t, C.value = k(r.value[I]), H("dragStart", k(r.value[I])), r.value[I].move = !0, oe(r.value[I]);
      const e = ht(s.target, ".com-item");
      Le = s.clientX - e.offsetLeft, $e = s.clientY - e.offsetTop, window.addEventListener("mousemove", Ve), window.addEventListener("mouseup", Be);
    }, Ve = (s) => {
      const t = s.clientX - Le, e = s.clientY - $e, l = t <= F("left") ? F("left") : t >= F("right") ? F("right") : t, o = e <= F("top") ? F("top") : e >= F("bottom") ? F("bottom") : e, a = l - r.value[I].s_x, i = o - r.value[I].s_y;
      let S = "";
      i > 0 ? S = "bottom" : i < 0 ? S = "top" : a > 2 ? S = "right" : a < -2 && (S = "left"), r.value[I].s_x = l, r.value[I].s_y = o, oe(r.value[I]);
      let c = ve(k(r.value.filter((g) => g.move !== !0)), r.value[I], !0);
      if (c.length === 0)
        C.value.s_x = l, C.value.s_y = o;
      else
        switch (S) {
          case "top":
            c = c.filter((n) => n.s_y < C.value.s_y);
            const g = Math.min(...c.map((n) => n.s_y + n.s_height));
            c.forEach((n) => {
              Math.abs(n.s_y + n.s_height - g) < 5 && (n.s_y = g - n.s_height);
            });
            let p = C.value.s_y - o, h = !0, x = [...c];
            const M = (n) => {
              N(k(r.value.filter((u) => u.move !== !0 && u.s_y + u.s_height - n.s_y <= p + 3 && u.s_y + u.s_height - n.s_y >= 0)), n, !0).forEach((u) => {
                u.s_y + u.s_height !== n.s_y && (u.s_y = n.s_y - u.s_height), x.findIndex((f) => f.id === u.id) === -1 && (x.push(u), M(u));
              });
            };
            if (c.forEach((n) => {
              M(n);
            }), x.sort((n, D) => {
              const u = n.s_y, f = D.s_y;
              return u - f;
            }), (x.length === 0 || x.filter((n) => n.s_y === 0).length > 0) && (h = !1), h) {
              let n = 0;
              x.filter((u) => u.s_y === x[0].s_y).forEach((u) => {
                N(k(r.value.filter((G) => G.move !== !0 && G.s_y + G.s_height < u.s_y)), u, !0).forEach((G) => {
                  G.s_y + G.s_height > n && (n = G.s_y + G.s_height);
                });
              }), n = x[0].s_y - n, n < p && (p = n), x.forEach((u) => {
                u.s_y -= p, r.value.filter((f) => f.id === u.id)[0].s_y = u.s_y;
              }), C.value.s_x = l, C.value.s_y = r.value.filter((u) => u.id === x[x.length - 1].id)[0].s_y + r.value.filter((u) => u.id === x[x.length - 1].id)[0].s_height;
            } else {
              let n = 0;
              c.forEach((f) => {
                const G = N(r.value.filter((W) => W.move !== !0), f, !0).filter((W) => W.s_y > f.s_y + f.s_height);
                G.length > 0 && (n = Math.min(...G.map((W) => W.s_y)));
              });
              const D = n === 0 ? 0 : n - C.value.s_height - (Math.max(...c.map((f) => f.s_y + f.s_height)) - Math.min(...c.map((f) => f.s_y))), u = D === 0 ? o + C.value.s_height - Math.min(...c.map((f) => f.s_y)) : n - Math.min(...c.map((f) => f.s_y)) - (Math.max(...c.map((f) => f.s_y + f.s_height)) - Math.min(...c.map((f) => f.s_y)));
              (D === 0 || o <= D) && (c.filter((f) => f.s_y < C.value.s_y).forEach((f) => {
                f.s_y += u, r.value.filter((G) => G.id === f.id)[0].s_y = f.s_y;
              }), C.value.s_x = l, C.value.s_y = o, U(r.value, (f, G) => f.filter((W) => W.move !== !0 && W.id !== G.id), !0));
            }
            break;
          case "bottom":
            let b = 0;
            c.forEach((n) => {
              const D = N(r.value.filter((u) => u.move !== !0), n, !0).filter((u) => u.s_y + u.s_height < n.s_y);
              D.length > 0 && (b = Math.max(...D.map((u) => u.s_y + u.s_height)));
            });
            const ue = b + (Math.max(...c.map((n) => n.s_height + n.s_y)) - Math.min(...c.map((n) => n.s_y))), Ie = Math.min(...c.map((n) => n.s_y)) - b;
            o >= ue && (c.filter((n) => n.s_y > C.value.s_y).forEach((n) => {
              n.s_y -= Ie, r.value.filter((u) => u.id === n.id)[0].s_y = n.s_y;
              const D = ve(r.value.filter((u) => u.move !== !0 && u.id !== n.id), n, !0);
              D.length > 0 && (n.s_y = Math.max(...D.map((u) => u.s_y + u.s_height)), r.value.filter((u) => u.id === n.id)[0].s_y = n.s_y);
            }), C.value.s_x = l, C.value.s_y = ue, U(r.value, (n, D) => n.filter((u) => u.move !== !0 && u.id !== D.id), !0));
            break;
          case "left":
          case "right":
            c.sort((n, D) => {
              const u = n.s_y, f = D.s_y;
              return u - f;
            });
            let me = !0;
            for (let n = 0; n < c.length; n++) {
              if (me) {
                const D = k(r.value);
                for (let u = 0; u <= n; u++) {
                  let f = null;
                  const G = N(D.filter((W) => W.move !== !0 && W.s_y < c[u].s_y), c[u], !0);
                  if (G.length === 0 ? f = 0 : f = Math.max(...G.map((W) => W.s_y + W.s_height)), u === n) {
                    if (c[u].s_y - (c[u].s_y + c[u].s_height - o) < f) {
                      me = !1;
                      break;
                    }
                  } else if (c[u].s_y - c[n].s_height < f) {
                    me = !1;
                    break;
                  } else
                    D.filter((W) => W.id === c[u].id)[0].s_y -= c[n].s_height;
                }
              }
              if (me) {
                c[n].s_y -= c[n].s_y + c[n].s_height - o, r.value.filter((D) => D.id === c[n].id)[0].s_y = c[n].s_y;
                for (let D = n; D > 0; D--)
                  c[n - 1].s_y -= c[n].s_height, r.value.filter((u) => u.id === c[n - 1].id)[0].s_y = c[n - 1].s_y;
              } else
                c.filter((D) => D.id === c[n].id).forEach((D) => {
                  D.s_y += r.value[I].s_y + r.value[I].s_height - D.s_y, r.value.filter((u) => u.id === D.id)[0].s_y = D.s_y, U([D], (u, f) => u.filter((G) => G.move !== !0 && G.id !== f.id), !0);
                });
            }
            C.value.s_x = l;
            break;
        }
      r.value.forEach((g) => {
        Ge(g);
      }), L(!1), H("dragIng", k(r.value[I]));
    }, Be = () => {
      window.removeEventListener("mousemove", Ve), window.removeEventListener("mouseup", Be), delete r.value[I].move, r.value[I].s_x = C.value.s_x, r.value[I].s_y = C.value.s_y, oe(null), r.value.forEach((s) => {
        Ge(s);
      }), L(), H("dragEnd", k(r.value[I])), I = null;
    }, F = (s) => {
      switch (s) {
        case "top":
          return 0;
        case "right":
          return K - r.value[I].s_width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let v = null, We = "", ke = 0, be = 0, J = 0, Q = 0, Z = 0, j = 0, le = 0, Ee = 0, re = 0, Se = 0;
    const q = (s, t, e) => {
      fe(), v = t, H("resizeStart", k(v)), We = e, ke = s.clientX, be = s.clientY, J = t.s_width, Q = t.s_height, Z = t.s_y, j = t.s_x, v.drag = !0, oe(v);
      const l = r.value.filter((g) => g.static === !0 && (g.s_x < t.s_x ? g.s_x + g.s_width >= t.s_x : g.s_x <= t.s_x + t.s_width)), o = r.value.filter((g) => g.static === !0 && (g.s_y < t.s_y ? g.s_y + g.s_height >= t.s_y : g.s_y <= t.s_y + t.s_height)), a = l.filter((g) => g.s_y + g.s_height <= t.s_y).map((g) => g.s_y + g.s_height);
      a.length > 0 ? le = Math.max(...a) : le = 0;
      const i = l.filter((g) => g.s_y >= t.s_y + t.s_height).map((g) => g.s_y);
      i.length > 0 ? Ee = Math.min(...i) : Ee = 0;
      const S = o.filter((g) => g.s_x + g.s_width <= t.s_x).map((g) => g.s_x + g.s_width);
      S.length > 0 ? re = Math.max(...S) : re = 0;
      const c = o.filter((g) => g.s_x >= t.s_x + t.s_width).map((g) => g.s_x);
      c.length > 0 ? Se = Math.min(...c) : Se = 0, window.addEventListener("mousemove", Ne), window.addEventListener("mouseup", Ke);
    }, Ne = (s) => {
      const t = J + (s.clientX - ke), e = Q + (s.clientY - be), l = J - (s.clientX - ke), o = Q - (s.clientY - be), a = Z + (s.clientY - be), i = j + (s.clientX - ke), S = getComputedStyle(T.value), c = parseInt(S.getPropertyValue("--com-item-border-width").trim()), g = parseInt(S.getPropertyValue("--group-tit-height").trim()), p = () => {
        if (v.isGroup === !0) {
          const x = v.s_width - 2 * c, M = v.s_height - 2 * c - (v.groupTit ? g : 0);
          v.groupData.forEach((b) => {
            b.s_width = x * b.groupW, b.s_x = x * b.groupX, b.s_height = M * b.groupH, b.s_y = M * b.groupY;
          });
        }
      };
      switch (We) {
        case "top-left":
          v.s_height = o < d.itemMinHeight ? d.itemMinHeight : o > P("top") ? P("top") : o, v.s_y = o < d.itemMinHeight ? Z + Q - d.itemMinHeight : o > P("top") ? le : a, v.s_width = l < d.itemMinWidth ? d.itemMinWidth : l > P("left") ? P("left") : l, v.s_x = l < d.itemMinWidth ? j + J - d.itemMinWidth : l > P("left") ? re : i, p();
          break;
        case "top":
          v.s_height = o < d.itemMinHeight ? d.itemMinHeight : o > P("top") ? P("top") : o, v.s_y = o < d.itemMinHeight ? Z + Q - d.itemMinHeight : o > P("top") ? le : a, p();
          break;
        case "top-right":
          v.s_height = o < d.itemMinHeight ? d.itemMinHeight : o > P("top") ? P("top") : o, v.s_y = o < d.itemMinHeight ? Z + Q - d.itemMinHeight : o > P("top") ? le : a, v.s_width = t < d.itemMinWidth ? d.itemMinWidth : t > P("right") ? P("right") : t, p();
          break;
        case "left":
          v.s_width = l < d.itemMinWidth ? d.itemMinWidth : l > P("left") ? P("left") : l, v.s_x = l < d.itemMinWidth ? j + J - d.itemMinWidth : l > P("left") ? re : i, p();
          break;
        case "right":
          v.s_width = t < d.itemMinWidth ? d.itemMinWidth : t > P("right") ? P("right") : t, p();
          break;
        case "bottom-left":
          v.s_height = e < d.itemMinHeight ? d.itemMinHeight : e > P("bottom") ? P("bottom") : e, v.s_width = l < d.itemMinWidth ? d.itemMinWidth : l > P("left") ? P("left") : l, v.s_x = l < d.itemMinWidth ? j + J - d.itemMinWidth : l > P("left") ? re : i, p();
          break;
        case "bottom":
          v.s_height = e < d.itemMinHeight ? d.itemMinHeight : e > P("bottom") ? P("bottom") : e, p();
          break;
        case "bottom-right":
          v.s_height = e < d.itemMinHeight ? d.itemMinHeight : e > P("bottom") ? P("bottom") : e, v.s_width = t < d.itemMinWidth ? d.itemMinWidth : t > P("right") ? P("right") : t, p();
          break;
      }
      at(v), oe(v);
      let h = ve(k(r.value.filter((x) => x.drag !== !0)), v, !0);
      if (h.length > 0) {
        h.sort((x, M) => {
          const b = x.s_y, ue = M.s_y;
          return b - ue;
        });
        for (let x = 0; x < h.length; x++)
          h.filter((M) => M.id === h[x].id).forEach((M) => {
            M.s_y += v.s_y + v.s_height - M.s_y, r.value.filter((b) => b.id === M.id)[0].s_y = M.s_y, U([M], (b, ue) => b.filter((Ie) => Ie.drag !== !0 && Ie.id !== ue.id), !0);
          });
      }
      r.value.forEach((x) => {
        Ge(x);
      }), L(!1), H("resizeIng", k(v));
    }, Ke = (s) => {
      delete v.drag, We = "", oe(null), window.removeEventListener("mousemove", Ne), window.removeEventListener("mouseup", Ke), L(), H("resizeEnd", k(v)), v = null;
    }, P = (s) => {
      switch (s) {
        case "top":
          return Z + Q - le;
        case "left":
          return j + J - re;
        case "right":
          return (Se > 0 ? Se : K) - j;
        case "bottom":
          return Ee > 0 ? Ee - Z : 999999999;
      }
    }, L = (s = !0) => {
      s === !0 && (U(r.value, (e, l) => e.filter((o) => o.id !== l.id)), Fe(), r.value.forEach((e) => {
        nt(e);
      }), dt());
      const t = r.value.map((e) => e.y + e.height);
      t.length > 0 ? Me.value = Math.max(...t) : Me.value = 0;
    };
    tt(
      () => d.ySpace,
      () => {
        d.ySpace >= 0 && Fe();
      }
    );
    const Fe = () => {
      const s = k(r.value).sort((t, e) => {
        const l = t.y, o = e.y;
        return l - o;
      });
      for (let t = 0; t < s.length; t++) {
        const e = N(s, s[t]).filter((l) => l.y + l.height <= s[t].y);
        e.length > 0 ? s[t].y = Math.max(...e.map((l) => l.y + l.height)) : s[t].y = 0;
      }
      s.sort((t, e) => {
        const l = t.y, o = e.y;
        return l - o;
      });
      for (let t = 0; t < s.length - 1; t++) {
        const e = [], l = (o) => {
          N(s, o).filter((i) => i.y === o.y + o.height).forEach((i) => {
            e.push(i.id), l(i);
          });
        };
        l(s[t]), e.forEach((o) => {
          s.filter((a) => a.id === o)[0].y += d.ySpace;
        });
      }
      s.forEach((t) => {
        r.value.filter((e) => e.id === t.id)[0].y = t.y;
      }), d.addFirstSpace && r.value.forEach((t) => t.y += d.ySpace);
    }, dt = () => {
      const s = r.value.filter((t) => t.isGroup === !0);
      if (s.length > 0) {
        const t = getComputedStyle(T.value), e = parseInt(t.getPropertyValue("--setting-icon-group-width").trim());
        s.forEach((l) => {
          l.s_x + l.s_width + e > K ? l.s_x - e < 0 ? l.btnPosition = "center" : l.btnPosition = "left" : l.btnPosition = "right";
        });
      }
    };
    Et(() => {
      qe.observe(T.value);
    });
    const qe = new ResizeObserver((s) => {
      ft(K === s[0].contentRect.width ? null : s[0].contentRect.width, Xe === s[0].contentRect.height ? null : s[0].contentRect.height);
    });
    let He = !1;
    const pt = (s = [], t = null) => {
      r.value = k(s), r.value.filter((e) => e.isGroup === !0).forEach((e) => {
        if (e.groupData.length < 2)
          _e(e.id);
        else {
          const l = Pe(e.groupData, e);
          De(l);
        }
      }), He = !0, lt(() => {
        const e = T.value.getBoundingClientRect();
        t != null ? (xe(t), we(e.width / t)) : (xe(e.width), we(1)), r.value.forEach((l) => {
          se(l);
        }), L(), setTimeout(() => {
          He = !1;
        }, 500);
      });
    }, gt = (s, t) => {
      t.showSet = !0;
    }, yt = (s, t) => {
      delete t.showSet;
    }, Ue = (s, t, e) => {
      const l = t.map((i) => i.y), o = Math.max(...l), a = t.filter((i) => i.y + i.height > o);
      a.sort((i, S) => {
        const c = i.x, g = S.x;
        return c - g;
      });
      for (let i = 0; i < a.length; i++) {
        if (i === 0 && a[i].x >= s.width) {
          s.y = o, s.x = 0;
          break;
        }
        if (a.length > 1 && i !== a.length - 1 && a[i].x + a[i].width + s.width <= a[i + 1].x) {
          s.y = o, s.x = a[i].x + a[i].width;
          break;
        }
        if (i === a.length - 1 && a[i].x + a[i].width + s.width <= e) {
          s.y = o, s.x = a[i].x + a[i].width;
          break;
        }
      }
      if (s.y == null) {
        s.x = 0;
        const i = t.map((S) => S.y + S.height);
        s.y = Math.max(...i);
      }
    }, ie = (s, t = null, e = !1) => {
      const l = k(s), o = r.value.filter((a) => a.id === t);
      if (l.id || (l.id = (/* @__PURE__ */ new Date()).getTime() + ""), t && o.length !== 1)
        try {
        } catch {
        } finally {
          return;
        }
      if (e !== !0)
        if (delete l.x, delete l.y, t) {
          o[0].groupData.forEach((S) => {
            ae(S, o[0]);
          });
          const a = getComputedStyle(T.value), i = parseInt(a.getPropertyValue("--com-item-border-width").trim());
          Ue(l, o[0].groupData, o[0].width - 2 * i);
        } else
          r.value.length === 0 ? (l.x = 0, l.y = 0) : Ue(l, r.value, te || K);
      if (t) {
        o[0].groupData.push(l);
        const a = Pe(o[0].groupData, o[0]);
        De(a), U([a], (i, S) => i.filter((c) => c.id !== S.id));
      } else
        r.value.length === 0 && xe(K), se(l), r.value.push(l);
      L();
    }, Oe = (s, t = null, e = null) => {
      let l = null;
      const o = r.value.filter((a) => a.id === t);
      if (t ? o.length === 1 && (l = k(o[0].groupData.filter((a) => a.id === s)[0])) : l = k(r.value.filter((a) => a.id === s)[0]), l)
        return l.id = e || (/* @__PURE__ */ new Date()).getTime() + "", t ? (ae(l, o[0]), ie(l, t)) : ie(l), k(t ? r.value.filter((a) => a.id === t)[0].groupData.filter((a) => a.id === l.id)[0] : r.value.filter((a) => a.id === l.id)[0]);
      try {
      } catch {
      } finally {
        return null;
      }
    }, ne = (s, t = null) => {
      let e = -1;
      const l = r.value.filter((o) => o.id === t);
      if (t ? l.length === 1 && (e = l[0].groupData.findIndex((o) => o.id === s)) : e = r.value.findIndex((o) => o.id === s), e !== -1) {
        if (t)
          if (l[0].groupData.splice(e, 1), l[0].groupData.length === 1)
            _e(t);
          else {
            l[0].groupData.forEach((a) => {
              ae(a, l[0]);
            });
            const o = Pe(l[0].groupData, l[0]);
            De(o);
          }
        else
          r.value.splice(e, 1), r.value.length === 0 && (xe(null), we(1));
        L();
      } else
        try {
        } catch {
        }
    }, De = (s) => {
      if (s.id) {
        const t = k(s);
        delete t.showPop, delete t.showSet, delete t.btnPosition, t.groupData && t.groupData.forEach((o) => {
          delete o.showPop, delete o.showSet;
        });
        let e = -1;
        const l = r.value.filter((o) => o.id === t.inGroupId);
        if (t.inGroupId ? l.length === 1 && (e = l[0].groupData.findIndex((o) => o.id === t.id)) : e = r.value.findIndex((o) => o.id === t.id), e !== -1)
          t.inGroupId ? (l[0].groupData[e] = t, se(l[0])) : (r.value[e] = t, se(r.value[e])), L();
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, ft = (s, t) => {
      s !== null && (K = s, He || (we(te && K ? s / te : 1), r.value.forEach((e) => {
        se(e);
      }), L())), t !== null && (Xe = t);
    }, Je = (s) => {
      s.showPop || (r.value.forEach((t) => {
        delete t.showPop, t.groupData && t.groupData.forEach((e) => {
          delete e.showPop;
        });
      }), H("openSetMenu", k(s)), s.showPop = !0, window.addEventListener("click", fe));
    }, fe = () => {
      r.value.forEach((s) => {
        delete s.showPop, s.groupData && s.groupData.forEach((t) => {
          delete t.showPop;
        });
      }), window.removeEventListener("click", fe);
    }, R = A(!1), Qe = (s) => {
      const t = r.value.findIndex((e) => e.id === s);
      if (t !== -1)
        r.value[t].checked = !0, r.value[t].checkDis = !0, R.value = !0, H("showGroup", R.value);
      else
        try {
        } catch {
        }
    }, ze = () => {
      R.value = !1, r.value.forEach((s) => {
        delete s.checked, delete s.checkDis, s.groupData && s.groupData.forEach((t) => {
          delete t.checked, delete t.checkDis;
        });
      }), H("showGroup", R.value);
    }, _t = (s) => {
      s.checked = !s.checked, H("updateChecked", r.value.filter((t) => t.checked).length);
    }, Pe = (s, t) => {
      const e = k(s), l = k(t);
      e.sort((h, x) => {
        const M = h.x, b = x.x;
        return M - b;
      });
      for (let h = 0; h < e.length - 1; h++) {
        if (h === 0 && e[h].x > 0) {
          const x = e[h].x;
          for (let M = h; M < e.length; M++)
            e[M].x -= x;
        }
        if (e[h + 1].x > e[h].x + e[h].width) {
          const x = k(e.slice(0, h + 1));
          if (e[h + 1].x > Math.max(...x.map((M) => M.x + M.width))) {
            const M = e[h + 1].x - Math.max(...x.map((b) => b.x + b.width));
            for (let b = h + 1; b < e.length; b++)
              e[b].x -= M;
          }
        }
      }
      e.sort((h, x) => {
        const M = h.y, b = x.y;
        return M - b;
      });
      for (let h = 0; h < e.length - 1; h++) {
        if (h === 0 && e[h].y > 0) {
          const x = e[h].y;
          for (let M = h; M < e.length; M++)
            e[M].y -= x;
        }
        if (e[h + 1].y > e[h].y + e[h].height) {
          const x = k(e.slice(0, h + 1));
          if (e[h + 1].y > Math.max(...x.map((M) => M.y + M.height))) {
            const M = e[h + 1].y - Math.max(...x.map((b) => b.y + b.height));
            for (let b = h + 1; b < e.length; b++)
              e[b].y -= M;
          }
        }
      }
      const o = e.map((h) => h.x + h.width), a = Math.max(...o), i = e.map((h) => h.y + h.height), S = Math.max(...i);
      e.forEach((h) => {
        h.inGroupId || (h.inGroupId = l.id), h.groupW = h.width / a, h.groupH = h.height / S, h.groupX = h.x / a, h.groupY = h.y / S, delete h.width, delete h.height, h.isObstacle = h.x + h.width === a && h.y === 0;
      });
      const c = getComputedStyle(T.value), g = parseInt(c.getPropertyValue("--com-item-border-width").trim()), p = parseInt(c.getPropertyValue("--group-tit-height").trim());
      return l.width = a + 2 * g, l.height = S + 2 * g + (l.groupTit ? p : 0), l.groupData = [...e], l;
    }, ae = (s, t) => {
      const e = getComputedStyle(T.value), l = parseInt(e.getPropertyValue("--com-item-border-width").trim()), o = parseInt(e.getPropertyValue("--group-tit-height").trim());
      s.width = (t.width - 2 * l) * s.groupW, s.height = (t.height - 2 * l - (t.groupTit ? o : 0)) * s.groupH;
    }, vt = () => {
      lt(() => {
        r.value.filter((s) => s.isGroup === !0).forEach((s) => {
          se(s);
        });
      });
    }, xt = () => {
      const s = r.value.filter((t) => t.checked);
      if (s.length > 1) {
        const t = {
          id: (/* @__PURE__ */ new Date()).getTime() + "G",
          isGroup: !0,
          groupTit: ""
        }, e = Pe(s, t);
        return e.groupData.forEach((l) => {
          ne(l.id);
        }), ie(e), ze(), k(r.value.filter((l) => l.id === e.id)[0]);
      } else
        return ze(), null;
    }, Ze = (s, t) => {
      const e = r.value.filter((l) => l.id === t)[0];
      if (e) {
        const l = e.groupData.filter((o) => o.id === s)[0];
        if (l)
          return e.groupData.length === 2 ? _e(t) : (ae(l, e), delete l.inGroupId, delete l.groupW, delete l.groupH, delete l.groupX, delete l.groupY, delete l.isObstacle, ne(l.id, e.id), ie(l), [k(r.value.filter((o) => o.id === s)[0])]);
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
    }, _e = (s) => {
      const t = r.value.filter((e) => e.id === s)[0];
      if (t) {
        let e = [];
        t.groupData.forEach((o) => {
          ae(o, t), o.x += t.x, o.y += t.y, delete o.inGroupId, delete o.groupW, delete o.groupH, delete t.groupX, delete t.groupY, delete t.isObstacle, e.push(o.id), ie(o, null, !0);
        }), ne(t.id);
        let l = [];
        return e.forEach((o) => {
          l.push(k(r.value.filter((a) => a.id === o)[0]));
        }), l;
      } else
        try {
        } catch {
        } finally {
          return [];
        }
    }, wt = (s = "", t) => {
      const e = r.value.filter((l) => l.id === t)[0];
      if (e) {
        if (!e.groupTit || !s) {
          const l = getComputedStyle(T.value), o = parseInt(l.getPropertyValue("--group-tit-height").trim());
          e.groupTit && !s && (e.height -= o, e.s_height -= o), !e.groupTit && s && (e.height += o, e.s_height += o);
        }
        e.groupTit = s, U([e], (l, o) => l.filter((a) => a.id !== o.id)), L();
      } else
        try {
        } catch {
        }
    }, Mt = () => new Promise((s, t) => {
      r.value.forEach((l) => {
        delete l.showPop, delete l.showSet, l.groupData && l.groupData.forEach((o) => {
          delete o.showPop, delete o.showSet;
        });
      });
      const e = k(r.value);
      e.forEach((l) => {
        l.isGroup === !0 && l.groupData.forEach((o) => {
          ae(o, l), delete o.s_width, delete o.s_height, delete o.s_x, delete o.s_y;
        }), delete l.btnPosition, delete l.s_width, delete l.s_height, delete l.s_x, delete l.s_y;
      }), s({ data: e, width: te });
    });
    return St(() => {
      qe.unobserve(T.value), window.removeEventListener("click", fe);
    }), V({ init: pt, addItem: ie, copyItem: Oe, deleteItem: ne, updateItem: De, openGroup: Qe, closeGroup: ze, changeGroupBorder: vt, addGroup: xt, removeGroupItem: Ze, removeGroup: _e, changeGroupTit: wt, getData: Mt }), (s, t) => (w(), E("div", {
      class: "vue-drag-component-plus",
      style: X({ "--css-scle": y(Y) }),
      ref_key: "pageRef",
      ref: T
    }, [
      O("div", {
        class: "content-box",
        ref_key: "boxRef",
        ref: ut
      }, [
        (w(!0), E(he, null, Ye(y(r), (e, l) => (w(), E("div", {
          class: ee(["com-item", _.seeModel || y(R) || e.static === !0 || e.dragable === !1 ? "" : "can-drag", e.move ? "is-move" : "", e.drag ? "is-drag" : "", e.showPop ? "on-top" : "", _.seeModel ? "no-hover" : ""]),
          style: X({
            width: e.s_width + "px",
            height: e.s_height + "px",
            top: e.s_y + "px",
            left: e.s_x + "px"
          }),
          key: l,
          onMousedown: z((o) => _.seeModel || y(R) || e.static === !0 || e.dragable === !1 ? null : ct(o, l), ["prevent"]),
          onMouseenter: (o) => _.seeModel || y(R) || y(I) || y(v) || !e.isGroup ? null : gt(o, e),
          onMouseleave: (o) => _.seeModel || y(R) || y(I) || y(v) || !e.isGroup ? null : yt(o, e)
        }, [
          O("div", It, [
            e.isGroup ? (w(), E(he, { key: 0 }, [
              e.groupTit ? (w(), E("div", {
                key: 0,
                class: "group-item-tit",
                title: e.groupTit
              }, $(e.groupTit), 9, mt)) : m("", !0),
              O("div", {
                class: ee(["group-item-content", e.groupTit ? "" : "full"])
              }, [
                (w(!0), E(he, null, Ye(e.groupData, (o, a) => (w(), E("div", {
                  class: ee(["com-item-box-child", o.isObstacle ? "else" : ""]),
                  style: X({
                    width: o.s_width + "px",
                    height: o.s_height + "px",
                    top: o.s_y + "px",
                    left: o.s_x + "px"
                  }),
                  key: a
                }, [
                  O("div", Ct, [
                    ce(s.$slots, "item", { data: o }, () => [
                      O("p", null, $(Math.round(o.s_width * 100) / 100) + "," + $(Math.round(o.s_height * 100) / 100), 1),
                      O("p", null, $(Math.round(o.s_x * 100) / 100) + "," + $(Math.round(o.s_y * 100) / 100), 1)
                    ])
                  ]),
                  !_.seeModel && !y(R) && y(I) === null && y(v) === null ? (w(), E("div", {
                    key: 0,
                    class: "setting-box",
                    style: X({ display: o.showPop ? "flex" : "none" }),
                    onMousedown: z((i) => null, ["prevent", "stop"])
                  }, [
                    st(rt, {
                      iconObj: _.settingIcon,
                      onClick: z((i) => Je(o), ["prevent", "stop"])
                    }, null, 8, ["iconObj", "onClick"])
                  ], 36)) : m("", !0),
                  o.showPop ? (w(), E("div", {
                    key: 1,
                    class: "setting-box-pop",
                    onMousedown: z((i) => null, ["prevent", "stop"])
                  }, [
                    ce(s.$slots, "setPopNormal", {
                      data: k(o)
                    }, () => [
                      O("div", {
                        class: "setting-box-pop-item",
                        onClick: (i) => Ze(o.id, o.inGroupId)
                      }, "移出组合", 8, Gt),
                      O("div", {
                        class: "setting-box-pop-item",
                        onClick: (i) => Oe(o.id, o.inGroupId)
                      }, "复制", 8, Wt),
                      O("div", {
                        class: "setting-box-pop-item",
                        onClick: (i) => ne(o.id, o.inGroupId)
                      }, "删除", 8, Ht)
                    ])
                  ], 32)) : m("", !0)
                ], 6))), 128))
              ], 2)
            ], 64)) : (w(), E("div", Ot, [
              ce(s.$slots, "item", { data: e }, () => [
                O("p", null, $(Math.round(e.s_width * 100) / 100) + "," + $(Math.round(e.s_height * 100) / 100), 1),
                O("p", null, $(Math.round(e.s_x * 100) / 100) + "," + $(Math.round(e.s_y * 100) / 100), 1)
              ])
            ])),
            !e.isGroup && e.notGroup !== !0 && y(R) ? (w(), E("div", {
              key: 2,
              class: ee(["group-checkbox", e.checked ? "is-checked" : "", e.checkDis ? "disabled" : ""]),
              onClick: (o) => e.checkDis ? null : _t(e)
            }, null, 10, zt)) : m("", !0),
            !_.seeModel && !y(R) && y(I) === null && y(v) === null ? (w(), E("div", {
              key: 3,
              class: ee(["setting-box", e.isGroup === !0 ? e.btnPosition === "right" ? "only-g" : e.btnPosition === "left" ? "only-g l" : e.btnPosition === "center" ? "only-g c" : "" : ""]),
              style: X({ display: e.showPop || e.showSet ? "flex" : "none" }),
              onMousedown: z((o) => null, ["prevent", "stop"])
            }, [
              st(rt, {
                iconObj: _.settingIcon,
                onClick: z((o) => Je(e), ["prevent", "stop"])
              }, null, 8, ["iconObj", "onClick"])
            ], 38)) : m("", !0),
            e.showPop ? (w(), E("div", {
              key: 4,
              class: ee(["setting-box-pop", e.isGroup === !0 ? e.btnPosition === "right" ? "special" : e.btnPosition === "left" ? "special l" : e.btnPosition === "center" ? "special c" : "" : ""]),
              onMousedown: z((o) => null, ["prevent", "stop"])
            }, [
              e.isGroup === !0 ? ce(s.$slots, "setPopSpecial", {
                key: 0,
                data: k(e)
              }, () => [
                _.hideTit ? m("", !0) : (w(), E("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (o) => H("showTitPop", e.groupTit, e.id)
                }, " 设置组合标题", 8, Tt)),
                O("div", {
                  class: "setting-box-pop-item",
                  onClick: (o) => _e(e.id)
                }, "解除组合", 8, Yt)
              ]) : ce(s.$slots, "setPopNormal", {
                key: 1,
                data: k(e)
              }, () => [
                e.notGroup !== !0 ? (w(), E("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (o) => Qe(e.id)
                }, "组合", 8, Rt)) : m("", !0),
                O("div", {
                  class: "setting-box-pop-item",
                  onClick: (o) => Oe(e.id)
                }, "复制", 8, At),
                O("div", {
                  class: "setting-box-pop-item",
                  onClick: (o) => ne(e.id)
                }, "删除", 8, Xt)
              ])
            ], 34)) : m("", !0)
          ]),
          !_.seeModel && !y(R) && !e.showPop && !e.move && e.static !== !0 && e.resizable !== !1 ? (w(), E(he, { key: 0 }, [
            y(B).indexOf("topLeft") !== -1 ? (w(), E("div", {
              key: 0,
              class: "resize-line top-left",
              onMousedown: z((o) => q(o, e, "top-left"), ["prevent", "stop"])
            }, null, 40, Lt)) : m("", !0),
            y(B).indexOf("top") !== -1 ? (w(), E("div", {
              key: 1,
              class: "resize-line top",
              onMousedown: z((o) => q(o, e, "top"), ["prevent", "stop"])
            }, null, 40, $t)) : m("", !0),
            y(B).indexOf("topRight") !== -1 ? (w(), E("div", {
              key: 2,
              class: "resize-line top-right",
              onMousedown: z((o) => q(o, e, "top-right"), ["prevent", "stop"])
            }, null, 40, Vt)) : m("", !0),
            y(B).indexOf("left") !== -1 ? (w(), E("div", {
              key: 3,
              class: "resize-line left",
              onMousedown: z((o) => q(o, e, "left"), ["prevent", "stop"])
            }, null, 40, Bt)) : m("", !0),
            y(B).indexOf("right") !== -1 ? (w(), E("div", {
              key: 4,
              class: "resize-line right",
              onMousedown: z((o) => q(o, e, "right"), ["prevent", "stop"])
            }, null, 40, Nt)) : m("", !0),
            y(B).indexOf("bottomLeft") !== -1 ? (w(), E("div", {
              key: 5,
              class: "resize-line bottom-left",
              onMousedown: z((o) => q(o, e, "bottom-left"), ["prevent", "stop"])
            }, null, 40, Kt)) : m("", !0),
            y(B).indexOf("bottom") !== -1 ? (w(), E("div", {
              key: 6,
              class: "resize-line bottom",
              onMousedown: z((o) => q(o, e, "bottom"), ["prevent", "stop"])
            }, null, 40, Ft)) : m("", !0),
            y(B).indexOf("bottomRight") !== -1 ? (w(), E("div", {
              key: 7,
              class: "resize-line bottom-right",
              onMousedown: z((o) => q(o, e, "bottom-right"), ["prevent", "stop"])
            }, null, 40, qt)) : m("", !0)
          ], 64)) : m("", !0)
        ], 46, Pt))), 128)),
        (w(!0), E(he, null, Ye(y(r), (e, l) => (w(), E("div", {
          class: ee(["shadow-bg", e.move ? "is-move" : ""]),
          style: X({
            width: e.s_width + "px",
            height: e.s_height + "px",
            top: e.s_y + "px",
            left: e.s_x + "px"
          }),
          key: l
        }, null, 6))), 128)),
        y(I) !== null ? (w(), E("div", {
          key: 0,
          class: "drag-bg",
          style: X({
            width: y(C).s_width + "px",
            height: y(C).s_height + "px",
            top: y(C).s_y + "px",
            left: y(C).s_x + "px"
          })
        }, null, 4)) : m("", !0),
        O("div", {
          class: "height-bg",
          style: X({ height: (y(Me) > 0 ? +(y(Me) * y(Y) + (_.seeModel ? _.seeModelMinBg : 220)) : 0) + "px" })
        }, null, 4),
        _.hideAuxiliary ? m("", !0) : (w(), E(he, { key: 1 }, [
          y(de) !== null ? (w(), E("div", {
            key: 0,
            class: "auxiliary-line hor",
            style: X({ top: y(de) + "px", left: "0px" })
          }, null, 4)) : m("", !0),
          y(pe) !== null ? (w(), E("div", {
            key: 1,
            class: "auxiliary-line hor",
            style: X({ top: y(pe) + "px", left: "0px" })
          }, null, 4)) : m("", !0),
          y(ge) !== null ? (w(), E("div", {
            key: 2,
            class: "auxiliary-line",
            style: X({ top: "0px", left: y(ge) + "px" })
          }, null, 4)) : m("", !0),
          y(ye) !== null ? (w(), E("div", {
            key: 3,
            class: "auxiliary-line",
            style: X({ top: "0px", left: y(ye) + "px" })
          }, null, 4)) : m("", !0)
        ], 64)),
        y(r).length === 0 ? (w(), E("div", Ut, [
          ce(s.$slots, "empty", {}, () => [
            t[0] || (t[0] = Dt(" 暂无数据 "))
          ])
        ])) : m("", !0)
      ], 512)
    ], 4));
  }
}, Qt = [Jt], Zt = {
  install(_) {
    Qt.forEach((V) => {
      _.component("vueDragComponentPlus", V);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Zt);
export {
  Zt as default
};
