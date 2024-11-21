import { resolveComponent as he, openBlock as S, createBlock as Ot, resolveDynamicComponent as Nt, normalizeProps as _t, mergeProps as kt, withCtx as ue, createElementBlock as D, toDisplayString as b, watch as Kt, ref as V, onMounted as ce, onBeforeUnmount as de, normalizeStyle as A, unref as M, createElementVNode as L, Fragment as lt, renderList as Gt, normalizeClass as Z, withModifiers as Y, createCommentVNode as W, renderSlot as rt, createVNode as Ft, createTextVNode as pe, isVNode as qt, nextTick as Ut } from "vue";
const Jt = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(E) {
    return (N, It) => {
      const z = he("el-icon");
      return E.iconObj.type === "custom" ? (S(), Ot(Nt(E.iconObj.icon), _t(kt({ key: 0 }, E.iconObj.attrs)), null, 16)) : E.iconObj.type === "el" ? (S(), Ot(z, _t(kt({ key: 1 }, E.iconObj.attrs)), {
        default: ue(() => [
          (S(), Ot(Nt(E.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : E.iconObj.type === "iconfont" ? (S(), D("i", kt({
        key: 2,
        class: ["icon iconfont", "icon-" + E.iconObj.icon]
      }, E.iconObj.attrs), null, 16)) : (S(), D("i", kt({
        key: 3,
        class: E.iconObj.type
      }, E.iconObj.attrs), b(E.iconObj.icon), 17));
    };
  }
};
const ye = ["onMousedown", "onMouseenter", "onMouseleave"], ge = { class: "com-item-box" }, fe = ["title"], xe = { class: "com-item-box-content" }, ve = ["onClick"], we = ["onClick"], Me = {
  key: 1,
  class: "com-item-box-content"
}, ke = ["onClick"], Ee = ["onClick"], Se = ["onClick"], De = ["onClick"], Pe = ["onClick"], Oe = ["onMousedown"], Ge = ["onMousedown"], Ie = ["onMousedown"], We = ["onMousedown"], He = ["onMousedown"], Ce = ["onMousedown"], ze = ["onMousedown"], Te = ["onMousedown"], Ye = {
  key: 2,
  class: "com-empty"
}, Xe = {
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
      validator(E, N) {
        return E >= 0;
      }
    },
    // 组件项最小宽度
    itemMinWidth: {
      type: Number,
      default: 15,
      validator(E, N) {
        return E >= 15;
      }
    },
    // 组件项最小高度
    itemMinHeight: {
      type: Number,
      default: 15,
      validator(E, N) {
        return E >= 15;
      }
    },
    // 纵向相邻元素的自动间距
    ySpace: {
      type: Number,
      default: 7,
      validator(E, N) {
        return E >= 0;
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
      validator(E, N) {
        return E >= 1;
      }
    }
  },
  emits: ["baseWidthInit", "changeScle", "dragStart", "dragIng", "dragEnd", "resizeStart", "resizeIng", "resizeEnd", "showGroup", "openSetMenu", "updateChecked", "showTitPop"],
  setup(E, { expose: N, emit: It }) {
    const z = It, v = E, P = (i) => {
      if (typeof i == "object" && !qt(i) && i !== null && !(i instanceof Date)) {
        let e = i instanceof Array ? [] : {};
        for (let t in i)
          e[t] = typeof i[t] == "object" && !qt(i[t]) && i[t] !== null && !(i[t] instanceof Date) ? P(i[t]) : i[t];
        return e;
      } else
        return i;
    }, Wt = () => {
      v.insertResizeKeys.forEach((i) => {
        v.excludeResizeKeys.indexOf(i) === -1 && _.value.push(i);
      });
    };
    Kt(
      () => [v.insertResizeKeys, v.excludeResizeKeys],
      () => {
        Wt();
      }
    );
    const _ = V([]);
    Wt();
    const R = V(null);
    let it = null;
    const dt = (i) => {
      it = i, z("baseWidthInit", it);
    }, Et = V(1), pt = (i) => {
      Et.value = i, z("changeScle", Et.value);
    };
    let B = null, Ht = null;
    const Qt = V(null), ot = V(0), st = V(null), nt = V(null), at = V(null), ht = V(null), m = (i) => {
      const e = P(i);
      if (i === null)
        st.value = null, nt.value = null, at.value = null, ht.value = null;
      else {
        const t = getComputedStyle(R.value), o = parseInt(t.getPropertyValue("--auxiliary-width").trim()), l = c.value.filter((p) => p.id !== e.id).map((p) => p.y), f = c.value.filter((p) => p.id !== e.id).map((p) => p.y + p.height - 1), u = [...l, ...f];
        u.sort(), u.filter((p) => p <= e.y && e.y - v.auxiliarySpace < p || p >= e.y && e.y + v.auxiliarySpace > p).length > 0 ? st.value = e.y : st.value = null, u.filter((p) => p <= e.y + e.height - 1 && e.y + e.height - 1 - v.auxiliarySpace < p || p >= e.y + e.height - 1 && e.y + e.height - 1 + v.auxiliarySpace > p).length > 0 ? nt.value = e.y + e.height - o : nt.value = null;
        const x = c.value.filter((p) => p.id !== e.id).map((p) => p.x), y = c.value.filter((p) => p.id !== e.id).map((p) => p.x + p.width - 1), a = [...x, ...y];
        a.sort(), a.filter((p) => p <= e.x && e.x - v.auxiliarySpace < p || p >= e.x && e.x + v.auxiliarySpace > p).length > 0 ? at.value = e.x : at.value = null, a.filter((p) => p <= e.x + e.width - 1 && e.x + e.width - 1 - v.auxiliarySpace < p || p >= e.x + e.width - 1 && e.x + e.width - 1 + v.auxiliarySpace > p).length > 0 ? ht.value = e.x + e.width - o : ht.value = null;
      }
    }, c = V([]), Zt = (i, e) => {
      let t = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector;
      for (; i && !t.call(i, e); )
        i = i.parentElement;
      return i;
    };
    let G = null, Ct = null, zt = null;
    const H = V({}), mt = (i, e) => {
      ut(), G = e, H.value = P(c.value[G]), z("dragStart", P(c.value[G])), c.value[G].move = !0, m(c.value[G]);
      const t = Zt(i.target, ".com-item");
      Ct = i.clientX - t.offsetLeft, zt = i.clientY - t.offsetTop, window.addEventListener("mousemove", Tt), window.addEventListener("mouseup", Yt);
    }, Tt = (i) => {
      const e = i.clientX - Ct, t = i.clientY - zt, o = e <= K("left") ? K("left") : e >= K("right") ? K("right") : e, l = t <= K("top") ? K("top") : t >= K("bottom") ? K("bottom") : t, f = o - c.value[G].x, u = l - c.value[G].y, x = `${f > 3 ? "right" : f < -3 ? "left" : ""}_${u > 0 ? "bottom" : u < 0 ? "top" : ""}`;
      c.value[G].x = o, c.value[G].y = l, m(c.value[G]);
      let y = P(c.value.filter((a) => a.move !== !0).filter((a) => a.x < o && a.x + a.width > o || a.x === o || a.x > o && a.x < o + c.value[G].width).filter((a) => a.y < l && a.y + a.height > l || a.y === l || a.y > l && a.y < l + c.value[G].height));
      if (y.length === 0)
        H.value.x = o, H.value.y = l;
      else {
        if (x.indexOf("top") !== -1) {
          y = y.filter((r) => r.y < H.value.y);
          const a = Math.min(...y.map((r) => r.y + r.height));
          y.forEach((r) => {
            Math.abs(r.y + r.height - a) < 5 && (r.y = a - r.height);
          });
          let p = H.value.y - l, s = !0, n = [...y];
          const d = (r) => {
            P(c.value.filter((h) => h.move !== !0 && h.y + h.height - r.y <= p + 3 && h.y + h.height - r.y >= 0).filter((h) => h.x < r.x && h.x + h.width > r.x || h.x >= r.x && h.x < r.x + r.width)).forEach((h) => {
              h.y + h.height !== r.y && (h.y = r.y - h.height), n.findIndex((O) => O.id === h.id) === -1 && (n.push(h), d(h));
            });
          };
          if (y.forEach((r) => {
            d(r);
          }), n.sort((r, w) => {
            const h = r.y, O = w.y;
            return h - O;
          }), (n.length === 0 || n.filter((r) => r.y === 0).length > 0) && (s = !1), s) {
            let r = 0;
            n.filter((h) => h.y === n[0].y).forEach((h) => {
              P(c.value.filter((k) => k.move !== !0 && k.y + k.height < h.y).filter((k) => k.x < h.x && k.x + k.width > h.x || k.x >= h.x && k.x < h.x + h.width)).forEach((k) => {
                k.y + k.height > r && (r = k.y + k.height);
              });
            }), r = n[0].y - r, r < p && (p = r), n.forEach((h) => {
              h.y -= p, c.value.filter((O) => O.id === h.id)[0].y = h.y;
            }), H.value.x = o, H.value.y = c.value.filter((h) => h.id === n[n.length - 1].id)[0].y + c.value.filter((h) => h.id === n[n.length - 1].id)[0].height;
          } else {
            let r = 0;
            y.forEach((O) => {
              const k = c.value.filter((T) => T.move !== !0).filter((T) => T.x < O.x && T.x + T.width > O.x || T.x === O.x || T.x > O.x && T.x < O.x + O.width).filter((T) => T.y > O.y + O.height);
              k.length > 0 && (r = Math.min(...k.map((T) => T.y)));
            });
            const w = r === 0 ? 0 : r - H.value.height - (Math.max(...y.map((O) => O.y + O.height)) - Math.min(...y.map((O) => O.y))), h = w === 0 ? l + H.value.height - Math.min(...y.map((O) => O.y)) : r - Math.min(...y.map((O) => O.y)) - (Math.max(...y.map((O) => O.y + O.height)) - Math.min(...y.map((O) => O.y)));
            if (w === 0 || l <= w) {
              y.filter((k) => k.y < H.value.y).forEach((k) => {
                k.y += h, c.value.filter((T) => T.id === k.id)[0].y = k.y;
              }), H.value.x = o, H.value.y = l;
              const O = (k) => {
                c.value.filter((C) => C.move !== !0 && C.id !== k.id).filter((C) => C.x < k.x && C.x + C.width > k.x || C.x === k.x || C.x > k.x && C.x < k.x + k.width).filter((C) => C.y < k.y && C.y + C.height > k.y || C.y === k.y || C.y > k.y && C.y < k.y + k.height).forEach((C) => {
                  C.y = k.y + k.height, O(C);
                });
              };
              c.value.forEach((k) => O(k));
            }
          }
          y = P(c.value.filter((r) => r.move !== !0).filter((r) => r.x < o && r.x + r.width > o || r.x === o || r.x > o && r.x < o + c.value[G].width).filter((r) => r.y < l && r.y + r.height > l || r.y === l || r.y > l && r.y < l + c.value[G].height));
        }
        if (x.indexOf("bottom") !== -1) {
          let a = 0;
          y.forEach((n) => {
            const d = c.value.filter((r) => r.move !== !0).filter((r) => r.x < n.x && r.x + r.width > n.x || r.x === n.x || r.x > n.x && r.x < n.x + n.width).filter((r) => r.y + r.height < n.y);
            d.length > 0 && (a = Math.max(...d.map((r) => r.y + r.height)));
          });
          const p = a + (Math.max(...y.map((n) => n.height + n.y)) - Math.min(...y.map((n) => n.y))), s = Math.min(...y.map((n) => n.y)) - a;
          if (l >= p) {
            let n = !0;
            y.filter((r) => r.y > H.value.y).forEach((r) => {
              r.y -= s, c.value.filter((h) => h.id === r.id)[0].y = r.y;
              const w = c.value.filter((h) => h.move !== !0 && h.id !== r.id).filter((h) => h.x < r.x && h.x + h.width > r.x || h.x === r.x || h.x > r.x && h.x < r.x + r.width).filter((h) => h.y < r.y && h.y + h.height > r.y || h.y === r.y || h.y > r.y && h.y < r.y + r.height);
              w.length > 0 && (r.y = Math.max(...w.map((h) => h.y + h.height)), c.value.filter((h) => h.id === r.id)[0].y = r.y);
            }), H.value.x = o, n && (H.value.y = p);
            const d = (r) => {
              c.value.filter((h) => h.id !== r.id).filter((h) => h.x < r.x && h.x + h.width > r.x || h.x === r.x || h.x > r.x && h.x < r.x + r.width).filter((h) => h.y < r.y && h.y + h.height > r.y || h.y === r.y || h.y > r.y && h.y < r.y + r.height).forEach((h) => {
                h.y = r.y + r.height, h.move === !0 && (H.value.y = h.y, n = !1), d(h);
              });
            };
            c.value.forEach((r) => d(r)), y = P(c.value.filter((r) => r.move !== !0).filter((r) => r.x < o && r.x + r.width > o || r.x === o || r.x > o && r.x < o + c.value[G].width).filter((r) => r.y < l && r.y + r.height > l || r.y === l || r.y > l && r.y < l + c.value[G].height));
          }
        }
        if (((x.indexOf("top") !== -1 || x.indexOf("bottom") !== -1) && (x.indexOf("right") !== -1 || x.indexOf("left") !== -1) && Math.abs(f) > 8 || x.indexOf("top") === -1 && x.indexOf("bottom") === -1 && (x.indexOf("right") !== -1 || x.indexOf("left") !== -1)) && y.length > 0) {
          y.sort((p, s) => {
            const n = p.y, d = s.y;
            return n - d;
          });
          let a = !0;
          for (let p = 0; p < y.length; p++) {
            if (a) {
              const s = P(c.value);
              for (let n = 0; n <= p; n++) {
                let d = null;
                const r = s.filter((w) => w.move !== !0 && w.y < y[n].y).filter((w) => w.x < y[n].x && w.x + w.width > y[n].x || w.x === y[n].x || w.x > y[n].x && w.x < y[n].x + y[n].width);
                if (r.length === 0 ? d = 0 : d = Math.max(...r.map((w) => w.y + w.height)), n === p) {
                  if (y[n].y - (y[n].y + y[n].height - l) < d) {
                    a = !1;
                    break;
                  }
                } else if (y[n].y - y[p].height < d) {
                  a = !1;
                  break;
                } else
                  s.filter((w) => w.id === y[n].id)[0].y -= y[p].height;
              }
            }
            if (a) {
              y[p].y -= y[p].y + y[p].height - l, c.value.filter((s) => s.id === y[p].id)[0].y = y[p].y;
              for (let s = p; s > 0; s--)
                y[p - 1].y -= y[p].height, c.value.filter((n) => n.id === y[p - 1].id)[0].y = y[p - 1].y;
            } else
              y.filter((s) => s.id === y[p].id).forEach((s) => {
                s.y += c.value[G].y + c.value[G].height - s.y, c.value.filter((d) => d.id === s.id)[0].y = s.y;
                const n = (d) => {
                  c.value.filter((w) => w.move !== !0 && w.id !== d.id).filter((w) => w.x < d.x && w.x + w.width > d.x || w.x === d.x || w.x > d.x && w.x < d.x + d.width).filter((w) => w.y < d.y && w.y + w.height > d.y || w.y === d.y || w.y > d.y && w.y < d.y + d.height).forEach((w) => {
                    w.y = d.y + d.height, n(w);
                  });
                };
                n(s);
              });
          }
          H.value.x = o;
        }
      }
      X(!1), z("dragIng", P(c.value[G]));
    }, Yt = () => {
      window.removeEventListener("mousemove", Tt), window.removeEventListener("mouseup", Yt), delete c.value[G].move, c.value[G].x = H.value.x, c.value[G].y = H.value.y, m(null), X(), z("dragEnd", P(c.value[G])), G = null;
    }, K = (i) => {
      switch (i) {
        case "top":
          return 0;
        case "right":
          return B - c.value[G].width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let g = null, St = "", yt = 0, gt = 0, q = 0, U = 0, J = 0, Q = 0, j = 0, ft = 0, tt = 0, xt = 0;
    const F = (i, e, t) => {
      ut(), g = e, z("resizeStart", P(g)), St = t, yt = i.clientX, gt = i.clientY, q = e.width, U = e.height, J = e.y, Q = e.x, g.drag = !0, m(g);
      const o = c.value.filter((a) => a.static === !0 && (a.x < e.x ? a.x + a.width >= e.x : a.x <= e.x + e.width)), l = c.value.filter((a) => a.static === !0 && (a.y < e.y ? a.y + a.height >= e.y : a.y <= e.y + e.height)), f = o.filter((a) => a.y + a.height <= e.y).map((a) => a.y + a.height);
      f.length > 0 ? j = Math.max(...f) : j = 0;
      const u = o.filter((a) => a.y >= e.y + e.height).map((a) => a.y);
      u.length > 0 ? ft = Math.min(...u) : ft = 0;
      const x = l.filter((a) => a.x + a.width <= e.x).map((a) => a.x + a.width);
      x.length > 0 ? tt = Math.max(...x) : tt = 0;
      const y = l.filter((a) => a.x >= e.x + e.width).map((a) => a.x);
      y.length > 0 ? xt = Math.min(...y) : xt = 0, window.addEventListener("mousemove", Xt), window.addEventListener("mouseup", Rt);
    }, Xt = (i) => {
      const e = q + (i.clientX - yt), t = U + (i.clientY - gt), o = q - (i.clientX - yt), l = U - (i.clientY - gt), f = J + (i.clientY - gt), u = Q + (i.clientX - yt), x = getComputedStyle(R.value), y = parseInt(x.getPropertyValue("--com-item-border-width").trim()), a = parseInt(x.getPropertyValue("--group-tit-height").trim());
      switch (St) {
        case "top-left":
          if (g.height = l < v.itemMinHeight ? v.itemMinHeight : l > I("top") ? I("top") : l, g.y = l < v.itemMinHeight ? J + U - v.itemMinHeight : l > I("top") ? j : f, g.width = o < v.itemMinWidth ? v.itemMinWidth : o > I("left") ? I("left") : o, g.x = o < v.itemMinWidth ? Q + q - v.itemMinWidth : o > I("left") ? tt : u, g.isGroup === !0) {
            const s = g.width - 2 * y, n = g.height - 2 * y - (g.groupTit ? a : 0);
            g.groupData.forEach((d) => {
              d.width = s * d.groupW, d.x = s * d.groupX, d.height = n * d.groupH, d.y = n * d.groupY;
            });
          }
          break;
        case "top":
          if (g.height = l < v.itemMinHeight ? v.itemMinHeight : l > I("top") ? I("top") : l, g.y = l < v.itemMinHeight ? J + U - v.itemMinHeight : l > I("top") ? j : f, g.isGroup === !0) {
            const s = g.height - 2 * y - (g.groupTit ? a : 0);
            g.groupData.forEach((n) => {
              n.height = s * n.groupH, n.y = s * n.groupY;
            });
          }
          break;
        case "top-right":
          if (g.height = l < v.itemMinHeight ? v.itemMinHeight : l > I("top") ? I("top") : l, g.y = l < v.itemMinHeight ? J + U - v.itemMinHeight : l > I("top") ? j : f, g.width = e < v.itemMinWidth ? v.itemMinWidth : e > I("right") ? I("right") : e, g.isGroup === !0) {
            const s = g.width - 2 * y, n = g.height - 2 * y - (g.groupTit ? a : 0);
            g.groupData.forEach((d) => {
              d.width = s * d.groupW, d.x = s * d.groupX, d.height = n * d.groupH, d.y = n * d.groupY;
            });
          }
          break;
        case "left":
          if (g.width = o < v.itemMinWidth ? v.itemMinWidth : o > I("left") ? I("left") : o, g.x = o < v.itemMinWidth ? Q + q - v.itemMinWidth : o > I("left") ? tt : u, g.isGroup === !0) {
            const s = g.width - 2 * y;
            g.groupData.forEach((n) => {
              n.width = s * n.groupW, n.x = s * n.groupX;
            });
          }
          break;
        case "right":
          if (g.width = e < v.itemMinWidth ? v.itemMinWidth : e > I("right") ? I("right") : e, g.isGroup === !0) {
            const s = g.width - 2 * y;
            g.groupData.forEach((n) => {
              n.width = s * n.groupW, n.x = s * n.groupX;
            });
          }
          break;
        case "bottom-left":
          if (g.height = t < v.itemMinHeight ? v.itemMinHeight : t > I("bottom") ? I("bottom") : t, g.width = o < v.itemMinWidth ? v.itemMinWidth : o > I("left") ? I("left") : o, g.x = o < v.itemMinWidth ? Q + q - v.itemMinWidth : o > I("left") ? tt : u, g.isGroup === !0) {
            const s = g.width - 2 * y, n = g.height - 2 * y - (g.groupTit ? a : 0);
            g.groupData.forEach((d) => {
              d.width = s * d.groupW, d.x = s * d.groupX, d.height = n * d.groupH, d.y = n * d.groupY;
            });
          }
          break;
        case "bottom":
          if (g.height = t < v.itemMinHeight ? v.itemMinHeight : t > I("bottom") ? I("bottom") : t, g.isGroup === !0) {
            const s = g.height - 2 * y - (g.groupTit ? a : 0);
            g.groupData.forEach((n) => {
              n.height = s * n.groupH, n.y = s * n.groupY;
            });
          }
          break;
        case "bottom-right":
          if (g.height = t < v.itemMinHeight ? v.itemMinHeight : t > I("bottom") ? I("bottom") : t, g.width = e < v.itemMinWidth ? v.itemMinWidth : e > I("right") ? I("right") : e, g.isGroup === !0) {
            const s = g.width - 2 * y, n = g.height - 2 * y - (g.groupTit ? a : 0);
            g.groupData.forEach((d) => {
              d.width = s * d.groupW, d.x = s * d.groupX, d.height = n * d.groupH, d.y = n * d.groupY;
            });
          }
          break;
      }
      m(g);
      let p = P(c.value.filter((s) => s.drag !== !0).filter((s) => s.x < g.x && s.x + s.width > g.x || s.x === g.x || s.x > g.x && s.x < g.x + g.width).filter((s) => s.y < g.y && s.y + s.height > g.y || s.y === g.y || s.y > g.y && s.y < g.y + g.height));
      if (p.length > 0) {
        p.sort((s, n) => {
          const d = s.y, r = n.y;
          return d - r;
        });
        for (let s = 0; s < p.length; s++)
          p.filter((n) => n.id === p[s].id).forEach((n) => {
            n.y += g.y + g.height - n.y, c.value.filter((r) => r.id === n.id)[0].y = n.y;
            const d = (r) => {
              c.value.filter((h) => h.drag !== !0 && h.id !== r.id).filter((h) => h.x < r.x && h.x + h.width > r.x || h.x === r.x || h.x > r.x && h.x < r.x + r.width).filter((h) => h.y < r.y && h.y + h.height > r.y || h.y === r.y || h.y > r.y && h.y < r.y + r.height).forEach((h) => {
                h.y = r.y + r.height, d(h);
              });
            };
            d(n);
          });
      }
      X(!1), z("resizeIng", P(g));
    }, Rt = (i) => {
      delete g.drag, St = "", m(null), window.removeEventListener("mousemove", Xt), window.removeEventListener("mouseup", Rt), X(), z("resizeEnd", P(g)), g = null;
    }, I = (i) => {
      switch (i) {
        case "top":
          return J + U - j;
        case "left":
          return Q + q - tt;
        case "right":
          return (xt > 0 ? xt : B) - Q;
        case "bottom":
          return ft > 0 ? ft - J : 999999999;
      }
    }, X = (i = !0) => {
      i === !0 && (Lt(), jt());
      const e = c.value.map((t) => t.y + t.height);
      e.length > 0 ? ot.value = Math.max(...e) : ot.value = 0;
    };
    Kt(
      () => v.ySpace,
      () => {
        v.ySpace >= 0 && Lt();
      }
    );
    const Lt = () => {
      const i = P(c.value).sort((e, t) => {
        const o = e.y, l = t.y;
        return o - l;
      });
      for (let e = 0; e < i.length; e++) {
        const t = i.filter((o) => o.x <= i[e].x && o.x + o.width > i[e].x || o.x > i[e].x && o.x < i[e].x + i[e].width).filter((o) => o.y + o.height <= i[e].y);
        t.length > 0 ? i[e].y = Math.max(...t.map((o) => o.y + o.height)) : i[e].y = 0;
      }
      i.sort((e, t) => {
        const o = e.y, l = t.y;
        return o - l;
      });
      for (let e = 0; e < i.length - 1; e++) {
        const t = [], o = (l) => {
          i.filter((u) => u.x <= l.x && u.x + u.width > l.x || u.x > l.x && u.x < l.x + l.width).filter((u) => u.y === l.y + l.height).forEach((u) => {
            t.push(u.id), o(u);
          });
        };
        o(i[e]), t.forEach((l) => {
          i.filter((f) => f.id === l)[0].y += v.ySpace;
        });
      }
      i.forEach((e) => {
        c.value.filter((t) => t.id === e.id)[0].y = e.y;
      }), v.addFirstSpace && c.value.forEach((e) => e.y += v.ySpace);
    }, jt = () => {
      const i = c.value.filter((e) => e.isGroup === !0);
      if (i.length > 0) {
        const e = getComputedStyle(R.value), t = parseInt(e.getPropertyValue("--setting-icon-group-width").trim());
        i.forEach((o) => {
          o.x + o.width + t > B ? o.x - t < 0 ? o.btnPosition = "center" : o.btnPosition = "left" : o.btnPosition = "right";
        });
      }
    };
    ce(() => {
      $t.observe(R.value);
    });
    const $t = new ResizeObserver((i) => {
      re(B === i[0].contentRect.width ? null : i[0].contentRect.width, Ht === i[0].contentRect.height ? null : i[0].contentRect.height);
    });
    let Dt = !1;
    const te = (i = [], e = null) => {
      c.value = P(i), c.value.filter((t) => t.isGroup === !0).forEach((t) => {
        if (t.groupData.length < 2)
          ct(t.id);
        else {
          const o = Mt(t.groupData, t);
          wt(o);
        }
      }), Dt = !0, Ut(() => {
        const t = R.value.getBoundingClientRect();
        if (e !== null) {
          dt(e), pt(t.width / e);
          const o = t.width / e, l = getComputedStyle(R.value), f = parseInt(l.getPropertyValue("--com-item-border-width").trim()), u = parseInt(l.getPropertyValue("--group-tit-height").trim());
          c.value.forEach((x) => {
            if (x.width *= o, x.height *= o, x.x *= o, x.y *= o, x.isGroup === !0) {
              const y = x.width - 2 * f, a = x.height - 2 * f - (x.groupTit ? u : 0);
              x.groupData.forEach((p) => {
                p.width = y * p.groupW, p.x = y * p.groupX, p.height = a * p.groupH, p.y = a * p.groupY;
              });
            }
          }), X();
        } else
          dt(t.width), pt(1), X();
        setTimeout(() => {
          Dt = !1;
        }, 500);
      });
    }, ee = (i, e) => {
      e.showSet = !0;
    }, le = (i, e) => {
      delete e.showSet;
    }, Vt = (i, e, t) => {
      const o = e.map((u) => u.y), l = Math.max(...o), f = e.filter((u) => u.y + u.height > l);
      f.sort((u, x) => {
        const y = u.x, a = x.x;
        return y - a;
      });
      for (let u = 0; u < f.length; u++) {
        if (u === 0 && f[u].x >= i.width) {
          i.y = l, i.x = 0;
          break;
        }
        if (f.length > 1 && u !== f.length - 1 && f[u].x + f[u].width + i.width <= f[u + 1].x) {
          i.y = l, i.x = f[u].x + f[u].width;
          break;
        }
        if (u === f.length - 1 && f[u].x + f[u].width + i.width <= t) {
          i.y = l, i.x = f[u].x + f[u].width;
          break;
        }
      }
      if (i.y == null) {
        i.x = 0;
        const u = e.map((x) => x.y + x.height);
        i.y = Math.max(...u);
      }
    }, vt = (i, e = null, t = !1) => {
      const o = P(i), l = c.value.filter((f) => f.id === e);
      if (o.id || (o.id = (/* @__PURE__ */ new Date()).getTime() + ""), e && l.length !== 1) {
        try {
        } catch {
        }
        return;
      }
      if (t !== !0)
        if (delete o.x, delete o.y, e) {
          const f = getComputedStyle(R.value), u = parseInt(f.getPropertyValue("--com-item-border-width").trim());
          Vt(o, l[0].groupData, l[0].width - 2 * u);
        } else
          c.value.length === 0 ? (o.x = 0, o.y = 0) : Vt(o, c.value, B);
      if (e) {
        l[0].groupData.push(o);
        const f = Mt(l[0].groupData, l[0]);
        wt(f);
        const u = (x) => {
          c.value.filter((a) => a.id !== x.id).filter((a) => a.x < x.x && a.x + a.width > x.x || a.x === x.x || a.x > x.x && a.x < x.x + x.width).filter((a) => a.y < x.y && a.y + a.height > x.y || a.y === x.y || a.y > x.y && a.y < x.y + x.height).forEach((a) => {
            a.y = x.y + x.height, u(a);
          });
        };
        u(f);
      } else
        c.value.length === 0 && dt(B), c.value.push(o);
      X();
    }, et = (i, e = null) => {
      let t = -1;
      const o = c.value.filter((l) => l.id === e);
      if (e ? o.length === 1 && (t = o[0].groupData.findIndex((l) => l.id === i)) : t = c.value.findIndex((l) => l.id === i), t !== -1) {
        if (e)
          if (o[0].groupData.splice(t, 1), o[0].groupData.length === 1)
            ct(e);
          else {
            const l = Mt(o[0].groupData, o[0]);
            wt(l);
          }
        else
          c.value.splice(t, 1), c.value.length === 0 && (dt(null), pt(1));
        X();
      } else
        try {
        } catch {
        }
    }, wt = (i) => {
      if (i.id) {
        const e = P(i);
        delete e.showPop, delete e.showSet, delete e.btnPosition, e.groupData && e.groupData.forEach((l) => {
          delete l.showPop, delete l.showSet;
        });
        let t = -1;
        const o = c.value.filter((l) => l.id === e.inGroupId);
        if (e.inGroupId ? o.length === 1 && (t = o[0].groupData.findIndex((l) => l.id === e.id)) : t = c.value.findIndex((l) => l.id === e.id), t !== -1)
          e.inGroupId ? o[0].groupData[t] = e : c.value[t] = e, X();
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, re = (i, e) => {
      if (i !== null) {
        const t = B ? i / B : 1;
        if (B = i, !Dt) {
          pt(it && B ? i / it : 1);
          const o = getComputedStyle(R.value), l = parseInt(o.getPropertyValue("--com-item-border-width").trim()), f = parseInt(o.getPropertyValue("--group-tit-height").trim());
          c.value.forEach((u) => {
            if (u.width *= t, u.height *= t, u.x *= t, u.y *= t, u.isGroup === !0) {
              const x = u.width - 2 * l, y = u.height - 2 * l - (u.groupTit ? f : 0);
              u.groupData.forEach((a) => {
                a.width = x * a.groupW, a.x = x * a.groupX, a.height = y * a.groupH, a.y = y * a.groupY;
              });
            }
          }), X();
        }
      }
      e !== null && (Ht = e);
    }, At = (i) => {
      i.showPop || (c.value.forEach((e) => {
        delete e.showPop, e.groupData && e.groupData.forEach((t) => {
          delete t.showPop;
        });
      }), z("openSetMenu", P(i)), i.showPop = !0, window.addEventListener("click", ut));
    }, ut = () => {
      c.value.forEach((i) => {
        delete i.showPop, i.groupData && i.groupData.forEach((e) => {
          delete e.showPop;
        });
      }), window.removeEventListener("click", ut);
    }, $ = V(!1), Bt = (i) => {
      const e = c.value.findIndex((t) => t.id === i);
      if (e !== -1)
        c.value[e].checked = !0, c.value[e].disabled = !0, $.value = !0, z("showGroup", $.value);
      else
        try {
        } catch {
        }
    }, Pt = () => {
      $.value = !1, c.value.forEach((i) => {
        delete i.checked, delete i.disabled, i.groupData && i.groupData.forEach((e) => {
          delete e.checked, delete e.disabled;
        });
      }), z("showGroup", $.value);
    }, ie = (i) => {
      i.checked = !i.checked, z("updateChecked", c.value.filter((e) => e.checked).length);
    }, Mt = (i, e) => {
      const t = P(i), o = P(e);
      t.sort((s, n) => {
        const d = s.x, r = n.x;
        return d - r;
      });
      for (let s = 0; s < t.length - 1; s++) {
        if (s === 0 && t[s].x > 0) {
          const n = t[s].x;
          for (let d = s; d < t.length; d++)
            t[d].x -= n;
        }
        if (t[s + 1].x > t[s].x + t[s].width) {
          const n = P(t.slice(0, s + 1));
          if (t[s + 1].x > Math.max(...n.map((d) => d.x + d.width))) {
            const d = t[s + 1].x - Math.max(...n.map((r) => r.x + r.width));
            for (let r = s + 1; r < t.length; r++)
              t[r].x -= d;
          }
        }
      }
      t.sort((s, n) => {
        const d = s.y, r = n.y;
        return d - r;
      });
      for (let s = 0; s < t.length - 1; s++) {
        if (s === 0 && t[s].y > 0) {
          const n = t[s].y;
          for (let d = s; d < t.length; d++)
            t[d].y -= n;
        }
        if (t[s + 1].y > t[s].y + t[s].height) {
          const n = P(t.slice(0, s + 1));
          if (t[s + 1].y > Math.max(...n.map((d) => d.y + d.height))) {
            const d = t[s + 1].y - Math.max(...n.map((r) => r.y + r.height));
            for (let r = s + 1; r < t.length; r++)
              t[r].y -= d;
          }
        }
      }
      const l = t.map((s) => s.x + s.width), f = Math.max(...l), u = t.map((s) => s.y + s.height), x = Math.max(...u);
      t.forEach((s) => {
        s.inGroupId || (s.inGroupId = o.id), s.groupW = s.width / f, s.groupH = s.height / x, s.groupX = s.x / f, s.groupY = s.y / x, s.isObstacle = s.x + s.width === f && s.y === 0;
      });
      const y = getComputedStyle(R.value), a = parseInt(y.getPropertyValue("--com-item-border-width").trim()), p = parseInt(y.getPropertyValue("--group-tit-height").trim());
      return o.width = f + 2 * a, o.height = x + 2 * a + (o.groupTit ? p : 0), o.groupData = [...t], o;
    }, oe = () => {
      Ut(() => {
        const i = getComputedStyle(R.value), e = parseInt(i.getPropertyValue("--com-item-border-width").trim()), t = parseInt(i.getPropertyValue("--group-tit-height").trim());
        c.value.filter((o) => o.isGroup === !0).forEach((o) => {
          const l = o.width - 2 * e, f = o.height - 2 * e - (o.groupTit ? t : 0);
          o.groupData.forEach((u) => {
            u.width = l * u.groupW, u.x = l * u.groupX, u.height = f * u.groupH, u.y = f * u.groupY;
          });
        });
      });
    }, se = () => {
      const i = c.value.filter((e) => e.checked);
      if (i.length > 1) {
        const e = {
          id: (/* @__PURE__ */ new Date()).getTime() + "G",
          isGroup: !0,
          groupTit: ""
        }, t = Mt(i, e);
        return t.groupData.forEach((o) => {
          et(o.id);
        }), vt(t), X(), Pt(), P(c.value.filter((o) => o.id === t.id)[0]);
      }
      return Pt(), null;
    }, bt = (i, e) => {
      const t = c.value.filter((o) => o.id === e)[0];
      if (t) {
        const o = t.groupData.filter((l) => l.id === i)[0];
        if (o)
          return t.groupData.length === 2 ? ct(e) : (delete o.inGroupId, delete o.groupW, delete o.groupH, delete o.groupX, delete o.groupY, delete o.isObstacle, et(o.id, t.id), vt(o), X(), [P(c.value.filter((l) => l.id === i)[0])]);
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
    }, ct = (i) => {
      const e = c.value.filter((t) => t.id === i)[0];
      if (e) {
        let t = [];
        e.groupData.forEach((l) => {
          delete l.inGroupId, delete l.groupW, delete l.groupH, delete e.groupX, delete e.groupY, delete e.isObstacle, l.x += e.x, l.y += e.y, t.push(l.id), vt(l, null, !0);
        }), et(e.id), X();
        let o = [];
        return t.forEach((l) => {
          o.push(P(c.value.filter((f) => f.id === l)[0]));
        }), o;
      } else
        try {
        } catch {
        } finally {
          return [];
        }
    }, ne = (i = "", e) => {
      const t = c.value.filter((o) => o.id === e)[0];
      if (t) {
        if (!t.groupTit || !i) {
          const l = getComputedStyle(R.value), f = parseInt(l.getPropertyValue("--group-tit-height").trim());
          t.groupTit && !i && (t.height -= f), !t.groupTit && i && (t.height += f);
        }
        t.groupTit = i;
        const o = (l) => {
          c.value.filter((u) => u.id !== l.id).filter((u) => u.x < l.x && u.x + u.width > l.x || u.x === l.x || u.x > l.x && u.x < l.x + l.width).filter((u) => u.y < l.y && u.y + u.height > l.y || u.y === l.y || u.y > l.y && u.y < l.y + l.height).forEach((u) => {
            u.y = l.y + l.height, o(u);
          });
        };
        o(t), X();
      } else
        try {
        } catch {
        }
    }, ae = () => {
      c.value.forEach((e) => {
        delete e.showPop, delete e.showSet, delete e.btnPosition, e.groupData && e.groupData.forEach((t) => {
          delete t.showPop, delete t.showSet;
        });
      });
      const i = P(c.value);
      return i.forEach((e) => {
        delete e.btnPosition;
      }), { data: i, width: it };
    };
    return de(() => {
      $t.unobserve(R.value), window.removeEventListener("click", ut);
    }), N({ init: te, addItem: vt, deleteItem: et, updateItem: wt, openGroup: Bt, closeGroup: Pt, changeGroupBorder: oe, addGroup: se, removeGroupItem: bt, removeGroup: ct, changeGroupTit: ne, getData: ae }), (i, e) => (S(), D("div", {
      class: "vue-drag-component-plus",
      style: A({ "--css-scle": M(Et) }),
      ref_key: "pageRef",
      ref: R
    }, [
      L("div", {
        class: "content-box",
        ref_key: "boxRef",
        ref: Qt
      }, [
        (S(!0), D(lt, null, Gt(M(c), (t, o) => (S(), D("div", {
          class: Z(["com-item", E.seeModel || M($) || t.static === !0 || t.dragable === !1 ? "" : "can-drag", t.move ? "is-move" : "", t.drag ? "is-drag" : "", t.showPop ? "on-top" : "", E.seeModel ? "no-hover" : ""]),
          style: A({
            width: t.width + "px",
            height: t.height + "px",
            top: t.y + "px",
            left: t.x + "px"
          }),
          key: o,
          onMousedown: Y((l) => E.seeModel || M($) || t.static === !0 || t.dragable === !1 ? null : mt(l, o), ["prevent"]),
          onMouseenter: (l) => E.seeModel || M($) || M(G) || M(g) || !t.isGroup ? null : ee(l, t),
          onMouseleave: (l) => E.seeModel || M($) || M(G) || M(g) || !t.isGroup ? null : le(l, t)
        }, [
          L("div", ge, [
            t.isGroup ? (S(), D(lt, { key: 0 }, [
              t.groupTit ? (S(), D("div", {
                key: 0,
                class: "group-item-tit",
                title: t.groupTit
              }, b(t.groupTit), 9, fe)) : W("", !0),
              L("div", {
                class: Z(["group-item-content", t.groupTit ? "" : "full"])
              }, [
                (S(!0), D(lt, null, Gt(t.groupData, (l, f) => (S(), D("div", {
                  class: Z(["com-item-box-child", l.isObstacle ? "else" : ""]),
                  style: A({
                    width: l.width + "px",
                    height: l.height + "px",
                    top: l.y + "px",
                    left: l.x + "px"
                  }),
                  key: f
                }, [
                  L("div", xe, [
                    rt(i.$slots, "item", { data: l }, () => [
                      L("p", null, b(Math.round(l.width * 100) / 100) + "," + b(Math.round(l.height * 100) / 100), 1),
                      L("p", null, b(Math.round(l.x * 100) / 100) + "," + b(Math.round(l.y * 100) / 100), 1)
                    ])
                  ]),
                  !E.seeModel && !M($) && M(G) === null && M(g) === null ? (S(), D("div", {
                    key: 0,
                    class: "setting-box",
                    style: A({ display: l.showPop ? "flex" : "none" }),
                    onMousedown: Y((u) => null, ["prevent", "stop"])
                  }, [
                    Ft(Jt, {
                      iconObj: E.settingIcon,
                      onClick: Y((u) => At(l), ["prevent", "stop"])
                    }, null, 8, ["iconObj", "onClick"])
                  ], 36)) : W("", !0),
                  l.showPop ? (S(), D("div", {
                    key: 1,
                    class: "setting-box-pop",
                    onMousedown: Y((u) => null, ["prevent", "stop"])
                  }, [
                    rt(i.$slots, "setPopNormal", {
                      data: P(l)
                    }, () => [
                      L("div", {
                        class: "setting-box-pop-item",
                        onClick: (u) => bt(l.id, l.inGroupId)
                      }, "移出组合", 8, ve),
                      L("div", {
                        class: "setting-box-pop-item",
                        onClick: (u) => et(l.id, l.inGroupId)
                      }, "删除", 8, we)
                    ])
                  ], 32)) : W("", !0)
                ], 6))), 128))
              ], 2)
            ], 64)) : (S(), D("div", Me, [
              rt(i.$slots, "item", { data: t }, () => [
                L("p", null, b(Math.round(t.width * 100) / 100) + "," + b(Math.round(t.height * 100) / 100), 1),
                L("p", null, b(Math.round(t.x * 100) / 100) + "," + b(Math.round(t.y * 100) / 100), 1)
              ])
            ])),
            !t.isGroup && t.notGroup !== !0 && M($) ? (S(), D("div", {
              key: 2,
              class: Z(["group-checkbox", t.checked ? "is-checked" : "", t.disabled ? "disabled" : ""]),
              onClick: (l) => t.disabled ? null : ie(t)
            }, null, 10, ke)) : W("", !0),
            !E.seeModel && !M($) && M(G) === null && M(g) === null ? (S(), D("div", {
              key: 3,
              class: Z(["setting-box", t.isGroup === !0 ? t.btnPosition === "right" ? "only-g" : t.btnPosition === "left" ? "only-g l" : t.btnPosition === "center" ? "only-g c" : "" : ""]),
              style: A({ display: t.showPop || t.showSet ? "flex" : "none" }),
              onMousedown: Y((l) => null, ["prevent", "stop"])
            }, [
              Ft(Jt, {
                iconObj: E.settingIcon,
                onClick: Y((l) => At(t), ["prevent", "stop"])
              }, null, 8, ["iconObj", "onClick"])
            ], 38)) : W("", !0),
            t.showPop ? (S(), D("div", {
              key: 4,
              class: Z(["setting-box-pop", t.isGroup === !0 ? "special" : ""]),
              onMousedown: Y((l) => null, ["prevent", "stop"])
            }, [
              t.isGroup === !0 ? rt(i.$slots, "setPopSpecial", {
                key: 0,
                data: P(t)
              }, () => [
                E.hideTit ? W("", !0) : (S(), D("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (l) => z("showTitPop", t.groupTit, t.id)
                }, " 设置组合标题", 8, Ee)),
                L("div", {
                  class: "setting-box-pop-item",
                  onClick: (l) => ct(t.id)
                }, "解除组合", 8, Se)
              ]) : rt(i.$slots, "setPopNormal", {
                key: 1,
                data: P(t)
              }, () => [
                t.notGroup !== !0 ? (S(), D("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (l) => Bt(t.id)
                }, "组合", 8, De)) : W("", !0),
                L("div", {
                  class: "setting-box-pop-item",
                  onClick: (l) => et(t.id)
                }, "删除", 8, Pe)
              ])
            ], 34)) : W("", !0)
          ]),
          !E.seeModel && !M($) && !t.showPop && !t.move && t.static !== !0 && t.resizable !== !1 ? (S(), D(lt, { key: 0 }, [
            M(_).indexOf("topLeft") !== -1 ? (S(), D("div", {
              key: 0,
              class: "resize-line top-left",
              onMousedown: Y((l) => F(l, t, "top-left"), ["prevent", "stop"])
            }, null, 40, Oe)) : W("", !0),
            M(_).indexOf("top") !== -1 ? (S(), D("div", {
              key: 1,
              class: "resize-line top",
              onMousedown: Y((l) => F(l, t, "top"), ["prevent", "stop"])
            }, null, 40, Ge)) : W("", !0),
            M(_).indexOf("topRight") !== -1 ? (S(), D("div", {
              key: 2,
              class: "resize-line top-right",
              onMousedown: Y((l) => F(l, t, "top-right"), ["prevent", "stop"])
            }, null, 40, Ie)) : W("", !0),
            M(_).indexOf("left") !== -1 ? (S(), D("div", {
              key: 3,
              class: "resize-line left",
              onMousedown: Y((l) => F(l, t, "left"), ["prevent", "stop"])
            }, null, 40, We)) : W("", !0),
            M(_).indexOf("right") !== -1 ? (S(), D("div", {
              key: 4,
              class: "resize-line right",
              onMousedown: Y((l) => F(l, t, "right"), ["prevent", "stop"])
            }, null, 40, He)) : W("", !0),
            M(_).indexOf("bottomLeft") !== -1 ? (S(), D("div", {
              key: 5,
              class: "resize-line bottom-left",
              onMousedown: Y((l) => F(l, t, "bottom-left"), ["prevent", "stop"])
            }, null, 40, Ce)) : W("", !0),
            M(_).indexOf("bottom") !== -1 ? (S(), D("div", {
              key: 6,
              class: "resize-line bottom",
              onMousedown: Y((l) => F(l, t, "bottom"), ["prevent", "stop"])
            }, null, 40, ze)) : W("", !0),
            M(_).indexOf("bottomRight") !== -1 ? (S(), D("div", {
              key: 7,
              class: "resize-line bottom-right",
              onMousedown: Y((l) => F(l, t, "bottom-right"), ["prevent", "stop"])
            }, null, 40, Te)) : W("", !0)
          ], 64)) : W("", !0)
        ], 46, ye))), 128)),
        (S(!0), D(lt, null, Gt(M(c), (t, o) => (S(), D("div", {
          class: Z(["shadow-bg", t.move ? "is-move" : ""]),
          style: A({
            width: t.width + "px",
            height: t.height + "px",
            top: t.y + "px",
            left: t.x + "px"
          }),
          key: o
        }, null, 6))), 128)),
        M(G) !== null ? (S(), D("div", {
          key: 0,
          class: "drag-bg",
          style: A({
            width: M(H).width + "px",
            height: M(H).height + "px",
            top: M(H).y + "px",
            left: M(H).x + "px"
          })
        }, null, 4)) : W("", !0),
        L("div", {
          class: "height-bg",
          style: A({ height: (M(ot) > 0 ? +(M(ot) + (E.seeModel ? E.seeModelMinBg : 220)) : M(ot)) + "px" })
        }, null, 4),
        E.hideAuxiliary ? W("", !0) : (S(), D(lt, { key: 1 }, [
          M(st) !== null ? (S(), D("div", {
            key: 0,
            class: "auxiliary-line hor",
            style: A({ top: M(st) + "px", left: "0px" })
          }, null, 4)) : W("", !0),
          M(nt) !== null ? (S(), D("div", {
            key: 1,
            class: "auxiliary-line hor",
            style: A({ top: M(nt) + "px", left: "0px" })
          }, null, 4)) : W("", !0),
          M(at) !== null ? (S(), D("div", {
            key: 2,
            class: "auxiliary-line",
            style: A({ top: "0px", left: M(at) + "px" })
          }, null, 4)) : W("", !0),
          M(ht) !== null ? (S(), D("div", {
            key: 3,
            class: "auxiliary-line",
            style: A({ top: "0px", left: M(ht) + "px" })
          }, null, 4)) : W("", !0)
        ], 64)),
        M(c).length === 0 ? (S(), D("div", Ye, [
          rt(i.$slots, "empty", {}, () => [
            e[0] || (e[0] = pe(" 暂无数据 "))
          ])
        ])) : W("", !0)
      ], 512)
    ], 4));
  }
}, Re = [Xe], Le = {
  install(E) {
    Re.forEach((N) => {
      E.component("vueDragComponentPlus", N);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Le);
export {
  Le as default
};
