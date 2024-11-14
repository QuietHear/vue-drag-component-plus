import { resolveComponent as re, openBlock as D, createBlock as Et, resolveDynamicComponent as Vt, normalizeProps as At, mergeProps as vt, withCtx as oe, createElementBlock as S, toDisplayString as B, watch as Bt, ref as V, onMounted as ae, onBeforeUnmount as se, createElementVNode as R, Fragment as lt, renderList as Dt, unref as M, normalizeClass as Z, normalizeStyle as A, withModifiers as C, createCommentVNode as W, renderSlot as it, createVNode as Nt, createTextVNode as ne, isVNode as _t, nextTick as bt } from "vue";
const Kt = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(E) {
    return (N, St) => {
      const X = re("el-icon");
      return E.iconObj.type === "custom" ? (D(), Et(Vt(E.iconObj.icon), At(vt({ key: 0 }, E.iconObj.attrs)), null, 16)) : E.iconObj.type === "el" ? (D(), Et(X, At(vt({ key: 1 }, E.iconObj.attrs)), {
        default: oe(() => [
          (D(), Et(Vt(E.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : E.iconObj.type === "iconfont" ? (D(), S("i", vt({
        key: 2,
        class: ["icon iconfont", "icon-" + E.iconObj.icon]
      }, E.iconObj.attrs), null, 16)) : (D(), S("i", vt({
        key: 3,
        class: E.iconObj.type
      }, E.iconObj.attrs), B(E.iconObj.icon), 17));
    };
  }
};
const he = ["onMousedown", "onMouseenter", "onMouseleave"], ue = { class: "com-item-box" }, de = ["title"], ce = { class: "com-item-box-content" }, pe = ["onClick"], ye = ["onClick"], ge = {
  key: 1,
  class: "com-item-box-content"
}, fe = ["onClick"], xe = ["onClick"], ve = ["onClick"], we = ["onClick"], Me = ["onClick"], ke = ["onMousedown"], Ee = ["onMousedown"], De = ["onMousedown"], Se = ["onMousedown"], Oe = ["onMousedown"], Ge = ["onMousedown"], Ie = ["onMousedown"], He = ["onMousedown"], We = {
  key: 2,
  class: "com-empty"
}, Pe = {
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
  emits: ["dragStart", "dragIng", "dragEnd", "resizeStart", "resizeIng", "resizeEnd", "showGroup", "openSetMenu", "updateChecked", "showTitPop"],
  setup(E, { expose: N, emit: St }) {
    const X = St, v = E, O = (r) => {
      if (typeof r == "object" && !_t(r) && r !== null && !(r instanceof Date)) {
        let l = r instanceof Array ? [] : {};
        for (let t in r)
          l[t] = typeof r[t] == "object" && !_t(r[t]) && r[t] !== null && !(r[t] instanceof Date) ? O(r[t]) : r[t];
        return l;
      } else
        return r;
    }, Ot = () => {
      v.insertResizeKeys.forEach((r) => {
        v.excludeResizeKeys.indexOf(r) === -1 && _.value.push(r);
      });
    };
    Bt(
      () => [v.insertResizeKeys, v.excludeResizeKeys],
      () => {
        Ot();
      }
    );
    const _ = V([]);
    Ot();
    const L = V(null);
    let b = null, Gt = null;
    const Ft = V(null), rt = V(0), ot = V(null), at = V(null), st = V(null), nt = V(null), m = (r) => {
      const l = O(r);
      if (r === null)
        ot.value = null, at.value = null, st.value = null, nt.value = null;
      else {
        const t = getComputedStyle(L.value), o = parseInt(t.getPropertyValue("--auxiliary-width").trim()), e = u.value.filter((p) => p.id !== l.id).map((p) => p.y), f = u.value.filter((p) => p.id !== l.id).map((p) => p.y + p.height - 1), c = [...e, ...f];
        c.sort(), c.filter((p) => p <= l.y && l.y - v.auxiliarySpace < p || p >= l.y && l.y + v.auxiliarySpace > p).length > 0 ? ot.value = l.y : ot.value = null, c.filter((p) => p <= l.y + l.height - 1 && l.y + l.height - 1 - v.auxiliarySpace < p || p >= l.y + l.height - 1 && l.y + l.height - 1 + v.auxiliarySpace > p).length > 0 ? at.value = l.y + l.height - o : at.value = null;
        const x = u.value.filter((p) => p.id !== l.id).map((p) => p.x), y = u.value.filter((p) => p.id !== l.id).map((p) => p.x + p.width - 1), n = [...x, ...y];
        n.sort(), n.filter((p) => p <= l.x && l.x - v.auxiliarySpace < p || p >= l.x && l.x + v.auxiliarySpace > p).length > 0 ? st.value = l.x : st.value = null, n.filter((p) => p <= l.x + l.width - 1 && l.x + l.width - 1 - v.auxiliarySpace < p || p >= l.x + l.width - 1 && l.x + l.width - 1 + v.auxiliarySpace > p).length > 0 ? nt.value = l.x + l.width - o : nt.value = null;
      }
    }, u = V([]), qt = (r, l) => {
      let t = r.matches || r.webkitMatchesSelector || r.mozMatchesSelector || r.msMatchesSelector;
      for (; r && !t.call(r, l); )
        r = r.parentElement;
      return r;
    };
    let I = null, It = null, Ht = null;
    const P = V({}), Ut = (r, l) => {
      ht(), I = l, P.value = O(u.value[I]), X("dragStart", O(u.value[I])), u.value[I].move = !0, m(u.value[I]);
      const t = qt(r.target, ".com-item");
      It = r.clientX - t.offsetLeft, Ht = r.clientY - t.offsetTop, window.addEventListener("mousemove", Wt), window.addEventListener("mouseup", Pt);
    }, Wt = (r) => {
      const l = r.clientX - It, t = r.clientY - Ht, o = l <= K("left") ? K("left") : l >= K("right") ? K("right") : l, e = t <= K("top") ? K("top") : t >= K("bottom") ? K("bottom") : t, f = o - u.value[I].x, c = e - u.value[I].y, x = `${f > 3 ? "right" : f < -3 ? "left" : ""}_${c > 0 ? "bottom" : c < 0 ? "top" : ""}`;
      u.value[I].x = o, u.value[I].y = e, m(u.value[I]);
      let y = O(u.value.filter((n) => n.move !== !0).filter((n) => n.x < o && n.x + n.width > o || n.x === o || n.x > o && n.x < o + u.value[I].width).filter((n) => n.y < e && n.y + n.height > e || n.y === e || n.y > e && n.y < e + u.value[I].height));
      if (y.length === 0)
        P.value.x = o, P.value.y = e;
      else {
        if (x.indexOf("top") !== -1) {
          y = y.filter((i) => i.y < P.value.y);
          const n = Math.min(...y.map((i) => i.y + i.height));
          y.forEach((i) => {
            Math.abs(i.y + i.height - n) < 5 && (i.y = n - i.height);
          });
          let p = P.value.y - e, a = !0, s = [...y];
          const d = (i) => {
            O(u.value.filter((h) => h.move !== !0 && h.y + h.height - i.y <= p + 3 && h.y + h.height - i.y >= 0).filter((h) => h.x < i.x && h.x + h.width > i.x || h.x >= i.x && h.x < i.x + i.width)).forEach((h) => {
              h.y + h.height !== i.y && (h.y = i.y - h.height), s.findIndex((G) => G.id === h.id) === -1 && (s.push(h), d(h));
            });
          };
          if (y.forEach((i) => {
            d(i);
          }), s.sort((i, w) => {
            const h = i.y, G = w.y;
            return h - G;
          }), (s.length === 0 || s.filter((i) => i.y === 0).length > 0) && (a = !1), a) {
            let i = 0;
            s.filter((h) => h.y === s[0].y).forEach((h) => {
              O(u.value.filter((k) => k.move !== !0 && k.y + k.height < h.y).filter((k) => k.x < h.x && k.x + k.width > h.x || k.x >= h.x && k.x < h.x + h.width)).forEach((k) => {
                k.y + k.height > i && (i = k.y + k.height);
              });
            }), i = s[0].y - i, i < p && (p = i), s.forEach((h) => {
              h.y -= p, u.value.filter((G) => G.id === h.id)[0].y = h.y;
            }), P.value.x = o, P.value.y = u.value.filter((h) => h.id === s[s.length - 1].id)[0].y + u.value.filter((h) => h.id === s[s.length - 1].id)[0].height;
          } else {
            let i = 0;
            y.forEach((G) => {
              const k = u.value.filter((z) => z.move !== !0).filter((z) => z.x < G.x && z.x + z.width > G.x || z.x === G.x || z.x > G.x && z.x < G.x + G.width).filter((z) => z.y > G.y + G.height);
              k.length > 0 && (i = Math.min(...k.map((z) => z.y)));
            });
            const w = i === 0 ? 0 : i - P.value.height - (Math.max(...y.map((G) => G.y + G.height)) - Math.min(...y.map((G) => G.y))), h = w === 0 ? e + P.value.height - Math.min(...y.map((G) => G.y)) : i - Math.min(...y.map((G) => G.y)) - (Math.max(...y.map((G) => G.y + G.height)) - Math.min(...y.map((G) => G.y)));
            if (w === 0 || e <= w) {
              y.filter((k) => k.y < P.value.y).forEach((k) => {
                k.y += h, u.value.filter((z) => z.id === k.id)[0].y = k.y;
              }), P.value.x = o, P.value.y = e;
              const G = (k) => {
                u.value.filter((T) => T.move !== !0 && T.id !== k.id).filter((T) => T.x < k.x && T.x + T.width > k.x || T.x === k.x || T.x > k.x && T.x < k.x + k.width).filter((T) => T.y < k.y && T.y + T.height > k.y || T.y === k.y || T.y > k.y && T.y < k.y + k.height).forEach((T) => {
                  T.y = k.y + k.height, G(T);
                });
              };
              u.value.forEach((k) => G(k));
            }
          }
          y = O(u.value.filter((i) => i.move !== !0).filter((i) => i.x < o && i.x + i.width > o || i.x === o || i.x > o && i.x < o + u.value[I].width).filter((i) => i.y < e && i.y + i.height > e || i.y === e || i.y > e && i.y < e + u.value[I].height));
        }
        if (x.indexOf("bottom") !== -1) {
          let n = 0;
          y.forEach((s) => {
            const d = u.value.filter((i) => i.move !== !0).filter((i) => i.x < s.x && i.x + i.width > s.x || i.x === s.x || i.x > s.x && i.x < s.x + s.width).filter((i) => i.y + i.height < s.y);
            d.length > 0 && (n = Math.max(...d.map((i) => i.y + i.height)));
          });
          const p = n + (Math.max(...y.map((s) => s.height + s.y)) - Math.min(...y.map((s) => s.y))), a = Math.min(...y.map((s) => s.y)) - n;
          if (e >= p) {
            let s = !0;
            y.filter((i) => i.y > P.value.y).forEach((i) => {
              i.y -= a, u.value.filter((h) => h.id === i.id)[0].y = i.y;
              const w = u.value.filter((h) => h.move !== !0 && h.id !== i.id).filter((h) => h.x < i.x && h.x + h.width > i.x || h.x === i.x || h.x > i.x && h.x < i.x + i.width).filter((h) => h.y < i.y && h.y + h.height > i.y || h.y === i.y || h.y > i.y && h.y < i.y + i.height);
              w.length > 0 && (i.y = Math.max(...w.map((h) => h.y + h.height)), u.value.filter((h) => h.id === i.id)[0].y = i.y);
            }), P.value.x = o, s && (P.value.y = p);
            const d = (i) => {
              u.value.filter((h) => h.id !== i.id).filter((h) => h.x < i.x && h.x + h.width > i.x || h.x === i.x || h.x > i.x && h.x < i.x + i.width).filter((h) => h.y < i.y && h.y + h.height > i.y || h.y === i.y || h.y > i.y && h.y < i.y + i.height).forEach((h) => {
                h.y = i.y + i.height, h.move === !0 && (P.value.y = h.y, s = !1), d(h);
              });
            };
            u.value.forEach((i) => d(i)), y = O(u.value.filter((i) => i.move !== !0).filter((i) => i.x < o && i.x + i.width > o || i.x === o || i.x > o && i.x < o + u.value[I].width).filter((i) => i.y < e && i.y + i.height > e || i.y === e || i.y > e && i.y < e + u.value[I].height));
          }
        }
        if (((x.indexOf("top") !== -1 || x.indexOf("bottom") !== -1) && (x.indexOf("right") !== -1 || x.indexOf("left") !== -1) && Math.abs(f) > 8 || x.indexOf("top") === -1 && x.indexOf("bottom") === -1 && (x.indexOf("right") !== -1 || x.indexOf("left") !== -1)) && y.length > 0) {
          y.sort((p, a) => {
            const s = p.y, d = a.y;
            return s - d;
          });
          let n = !0;
          for (let p = 0; p < y.length; p++) {
            if (n) {
              const a = O(u.value);
              for (let s = 0; s <= p; s++) {
                let d = null;
                const i = a.filter((w) => w.move !== !0 && w.y < y[s].y).filter((w) => w.x < y[s].x && w.x + w.width > y[s].x || w.x === y[s].x || w.x > y[s].x && w.x < y[s].x + y[s].width);
                if (i.length === 0 ? d = 0 : d = Math.max(...i.map((w) => w.y + w.height)), s === p) {
                  if (y[s].y - (y[s].y + y[s].height - e) < d) {
                    n = !1;
                    break;
                  }
                } else if (y[s].y - y[p].height < d) {
                  n = !1;
                  break;
                } else
                  a.filter((w) => w.id === y[s].id)[0].y -= y[p].height;
              }
            }
            if (n) {
              y[p].y -= y[p].y + y[p].height - e, u.value.filter((a) => a.id === y[p].id)[0].y = y[p].y;
              for (let a = p; a > 0; a--)
                y[p - 1].y -= y[p].height, u.value.filter((s) => s.id === y[p - 1].id)[0].y = y[p - 1].y;
            } else
              y.filter((a) => a.id === y[p].id).forEach((a) => {
                a.y += u.value[I].y + u.value[I].height - a.y, u.value.filter((d) => d.id === a.id)[0].y = a.y;
                const s = (d) => {
                  u.value.filter((w) => w.move !== !0 && w.id !== d.id).filter((w) => w.x < d.x && w.x + w.width > d.x || w.x === d.x || w.x > d.x && w.x < d.x + d.width).filter((w) => w.y < d.y && w.y + w.height > d.y || w.y === d.y || w.y > d.y && w.y < d.y + d.height).forEach((w) => {
                    w.y = d.y + d.height, s(w);
                  });
                };
                s(a);
              });
          }
          P.value.x = o;
        }
      }
      Y(!1), X("dragIng", O(u.value[I]));
    }, Pt = () => {
      window.removeEventListener("mousemove", Wt), window.removeEventListener("mouseup", Pt), delete u.value[I].move, u.value[I].x = P.value.x, u.value[I].y = P.value.y, m(null), Y(), X("dragEnd", O(u.value[I])), I = null;
    }, K = (r) => {
      switch (r) {
        case "top":
          return 0;
        case "right":
          return b - u.value[I].width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let g = null, wt = "", dt = 0, ct = 0, q = 0, U = 0, J = 0, Q = 0, j = 0, pt = 0, tt = 0, yt = 0;
    const F = (r, l, t) => {
      ht(), g = l, X("resizeStart", O(g)), wt = t, dt = r.clientX, ct = r.clientY, q = l.width, U = l.height, J = l.y, Q = l.x, g.drag = !0, m(g);
      const o = u.value.filter((n) => n.static === !0 && (n.x < l.x ? n.x + n.width >= l.x : n.x <= l.x + l.width)), e = u.value.filter((n) => n.static === !0 && (n.y < l.y ? n.y + n.height >= l.y : n.y <= l.y + l.height)), f = o.filter((n) => n.y + n.height <= l.y).map((n) => n.y + n.height);
      f.length > 0 ? j = Math.max(...f) : j = 0;
      const c = o.filter((n) => n.y >= l.y + l.height).map((n) => n.y);
      c.length > 0 ? pt = Math.min(...c) : pt = 0;
      const x = e.filter((n) => n.x + n.width <= l.x).map((n) => n.x + n.width);
      x.length > 0 ? tt = Math.max(...x) : tt = 0;
      const y = e.filter((n) => n.x >= l.x + l.width).map((n) => n.x);
      y.length > 0 ? yt = Math.min(...y) : yt = 0, window.addEventListener("mousemove", Tt), window.addEventListener("mouseup", zt);
    }, Tt = (r) => {
      const l = q + (r.clientX - dt), t = U + (r.clientY - ct), o = q - (r.clientX - dt), e = U - (r.clientY - ct), f = J + (r.clientY - ct), c = Q + (r.clientX - dt), x = getComputedStyle(L.value), y = parseInt(x.getPropertyValue("--com-item-border-width").trim()), n = parseInt(x.getPropertyValue("--group-tit-height").trim());
      switch (wt) {
        case "top-left":
          if (g.height = e < v.itemMinHeight ? v.itemMinHeight : e > H("top") ? H("top") : e, g.y = e < v.itemMinHeight ? J + U - v.itemMinHeight : e > H("top") ? j : f, g.width = o < v.itemMinWidth ? v.itemMinWidth : o > H("left") ? H("left") : o, g.x = o < v.itemMinWidth ? Q + q - v.itemMinWidth : o > H("left") ? tt : c, g.isGroup === !0) {
            const a = g.width - 2 * y, s = g.height - 2 * y - (g.groupTit ? n : 0);
            g.groupData.forEach((d) => {
              d.width = a * d.groupW, d.x = a * d.groupX, d.height = s * d.groupH, d.y = s * d.groupY;
            });
          }
          break;
        case "top":
          if (g.height = e < v.itemMinHeight ? v.itemMinHeight : e > H("top") ? H("top") : e, g.y = e < v.itemMinHeight ? J + U - v.itemMinHeight : e > H("top") ? j : f, g.isGroup === !0) {
            const a = g.height - 2 * y - (g.groupTit ? n : 0);
            g.groupData.forEach((s) => {
              s.height = a * s.groupH, s.y = a * s.groupY;
            });
          }
          break;
        case "top-right":
          if (g.height = e < v.itemMinHeight ? v.itemMinHeight : e > H("top") ? H("top") : e, g.y = e < v.itemMinHeight ? J + U - v.itemMinHeight : e > H("top") ? j : f, g.width = l < v.itemMinWidth ? v.itemMinWidth : l > H("right") ? H("right") : l, g.isGroup === !0) {
            const a = g.width - 2 * y, s = g.height - 2 * y - (g.groupTit ? n : 0);
            g.groupData.forEach((d) => {
              d.width = a * d.groupW, d.x = a * d.groupX, d.height = s * d.groupH, d.y = s * d.groupY;
            });
          }
          break;
        case "left":
          if (g.width = o < v.itemMinWidth ? v.itemMinWidth : o > H("left") ? H("left") : o, g.x = o < v.itemMinWidth ? Q + q - v.itemMinWidth : o > H("left") ? tt : c, g.isGroup === !0) {
            const a = g.width - 2 * y;
            g.groupData.forEach((s) => {
              s.width = a * s.groupW, s.x = a * s.groupX;
            });
          }
          break;
        case "right":
          if (g.width = l < v.itemMinWidth ? v.itemMinWidth : l > H("right") ? H("right") : l, g.isGroup === !0) {
            const a = g.width - 2 * y;
            g.groupData.forEach((s) => {
              s.width = a * s.groupW, s.x = a * s.groupX;
            });
          }
          break;
        case "bottom-left":
          if (g.height = t < v.itemMinHeight ? v.itemMinHeight : t > H("bottom") ? H("bottom") : t, g.width = o < v.itemMinWidth ? v.itemMinWidth : o > H("left") ? H("left") : o, g.x = o < v.itemMinWidth ? Q + q - v.itemMinWidth : o > H("left") ? tt : c, g.isGroup === !0) {
            const a = g.width - 2 * y, s = g.height - 2 * y - (g.groupTit ? n : 0);
            g.groupData.forEach((d) => {
              d.width = a * d.groupW, d.x = a * d.groupX, d.height = s * d.groupH, d.y = s * d.groupY;
            });
          }
          break;
        case "bottom":
          if (g.height = t < v.itemMinHeight ? v.itemMinHeight : t > H("bottom") ? H("bottom") : t, g.isGroup === !0) {
            const a = g.height - 2 * y - (g.groupTit ? n : 0);
            g.groupData.forEach((s) => {
              s.height = a * s.groupH, s.y = a * s.groupY;
            });
          }
          break;
        case "bottom-right":
          if (g.height = t < v.itemMinHeight ? v.itemMinHeight : t > H("bottom") ? H("bottom") : t, g.width = l < v.itemMinWidth ? v.itemMinWidth : l > H("right") ? H("right") : l, g.isGroup === !0) {
            const a = g.width - 2 * y, s = g.height - 2 * y - (g.groupTit ? n : 0);
            g.groupData.forEach((d) => {
              d.width = a * d.groupW, d.x = a * d.groupX, d.height = s * d.groupH, d.y = s * d.groupY;
            });
          }
          break;
      }
      m(g);
      let p = O(u.value.filter((a) => a.drag !== !0).filter((a) => a.x < g.x && a.x + a.width > g.x || a.x === g.x || a.x > g.x && a.x < g.x + g.width).filter((a) => a.y < g.y && a.y + a.height > g.y || a.y === g.y || a.y > g.y && a.y < g.y + g.height));
      if (p.length > 0) {
        p.sort((a, s) => {
          const d = a.y, i = s.y;
          return d - i;
        });
        for (let a = 0; a < p.length; a++)
          p.filter((s) => s.id === p[a].id).forEach((s) => {
            s.y += g.y + g.height - s.y, u.value.filter((i) => i.id === s.id)[0].y = s.y;
            const d = (i) => {
              u.value.filter((h) => h.drag !== !0 && h.id !== i.id).filter((h) => h.x < i.x && h.x + h.width > i.x || h.x === i.x || h.x > i.x && h.x < i.x + i.width).filter((h) => h.y < i.y && h.y + h.height > i.y || h.y === i.y || h.y > i.y && h.y < i.y + i.height).forEach((h) => {
                h.y = i.y + i.height, d(h);
              });
            };
            d(s);
          });
      }
      Y(!1), X("resizeIng", O(g));
    }, zt = (r) => {
      delete g.drag, wt = "", m(null), window.removeEventListener("mousemove", Tt), window.removeEventListener("mouseup", zt), Y(), X("resizeEnd", O(g)), g = null;
    }, H = (r) => {
      switch (r) {
        case "top":
          return J + U - j;
        case "left":
          return Q + q - tt;
        case "right":
          return (yt > 0 ? yt : b) - Q;
        case "bottom":
          return pt > 0 ? pt - J : 999999999;
      }
    }, Y = (r = !0) => {
      r === !0 && Ct();
      const l = u.value.map((t) => t.y + t.height);
      l.length > 0 ? rt.value = Math.max(...l) : rt.value = 0;
    };
    Bt(
      () => v.ySpace,
      () => {
        v.ySpace >= 0 && Ct();
      }
    );
    const Ct = () => {
      const r = O(u.value).sort((l, t) => {
        const o = l.y, e = t.y;
        return o - e;
      });
      for (let l = 0; l < r.length; l++) {
        if (l === 0 && r[l].y > 0) {
          const t = r[l].y;
          for (let o = l; o < r.length; o++)
            r[o].y -= t, u.value.filter((e) => e.id === r[o].id)[0].y = r[o].y;
        }
        if (l < r.length - 1 && r[l + 1].y > r[l].y + r[l].height) {
          const t = O(r.slice(0, l + 1));
          if (r[l + 1].y > Math.max(...t.map((o) => o.y + o.height))) {
            const o = r[l + 1].y - Math.max(...t.map((e) => e.y + e.height));
            for (let e = l + 1; e < r.length; e++)
              r[e].y -= o, u.value.filter((f) => f.id === r[e].id)[0].y = r[e].y;
          }
        }
      }
      for (let l = 0; l < r.length - 1; l++) {
        let t = r.findIndex((o) => o.y === r[l].y + r[l].height);
        if (t !== -1)
          for (let o = t; o < r.length; o++)
            r[o].y += v.ySpace, u.value.filter((e) => e.id === r[o].id)[0].y = r[o].y;
      }
      v.addFirstSpace && u.value.forEach((l) => l.y += v.ySpace);
    };
    ae(() => {
      Yt.observe(L.value);
    });
    const Yt = new ResizeObserver((r) => {
      mt(b === r[0].contentRect.width ? null : r[0].contentRect.width, Gt === r[0].contentRect.height ? null : r[0].contentRect.height);
    });
    let Mt = !1;
    const Jt = (r = [], l = null) => {
      u.value = O(r), u.value.filter((t) => t.isGroup === !0).forEach((t) => {
        if (t.isGroup === !0)
          if (t.groupData.length < 2)
            ut(t.id);
          else {
            const o = xt(t.groupData, t);
            ft(o);
          }
      }), l !== null ? bt(() => {
        const o = L.value.getBoundingClientRect().width / l, e = getComputedStyle(L.value), f = parseInt(e.getPropertyValue("--com-item-border-width").trim()), c = parseInt(e.getPropertyValue("--group-tit-height").trim());
        u.value.forEach((x) => {
          if (x.width *= o, x.height *= o, x.x *= o, x.y *= o, x.isGroup === !0) {
            const y = x.width - 2 * f, n = x.height - 2 * f - (x.groupTit ? c : 0);
            x.groupData.forEach((p) => {
              p.width = y * p.groupW, p.x = y * p.groupX, p.height = n * p.groupH, p.y = n * p.groupY;
            });
          }
        }), Y();
      }) : Y(), Mt = !0, setTimeout(() => {
        Mt = !1;
      }, 500);
    }, Qt = (r, l) => {
      l.showSet = !0;
    }, Zt = (r, l) => {
      delete l.showSet;
    }, Xt = (r, l, t) => {
      const o = l.map((c) => c.y), e = Math.max(...o), f = l.filter((c) => c.y + c.height > e);
      f.sort((c, x) => {
        const y = c.x, n = x.x;
        return y - n;
      });
      for (let c = 0; c < f.length; c++) {
        if (c === 0 && f[c].x >= r.width) {
          r.y = e, r.x = 0;
          break;
        }
        if (f.length > 1 && c !== f.length - 1 && f[c].x + f[c].width + r.width <= f[c + 1].x) {
          r.y = e, r.x = f[c].x + f[c].width;
          break;
        }
        if (c === f.length - 1 && f[c].x + f[c].width + r.width <= t) {
          r.y = e, r.x = f[c].x + f[c].width;
          break;
        }
      }
      if (r.y == null) {
        r.x = 0;
        const c = l.map((x) => x.y + x.height);
        r.y = Math.max(...c);
      }
    }, gt = (r, l = null, t = !1) => {
      const o = O(r), e = u.value.filter((f) => f.id === l);
      if (o.id || (o.id = (/* @__PURE__ */ new Date()).getTime() + ""), l && e.length !== 1) {
        try {
        } catch {
        }
        return;
      }
      if (t !== !0)
        if (delete o.x, delete o.y, l) {
          const f = getComputedStyle(L.value), c = parseInt(f.getPropertyValue("--com-item-border-width").trim());
          Xt(o, e[0].groupData, e[0].width - 2 * c);
        } else
          u.value.length === 0 ? (o.x = 0, o.y = 0) : Xt(o, u.value, b);
      if (l) {
        e[0].groupData.push(o);
        const f = xt(e[0].groupData, e[0]);
        ft(f);
        const c = (x) => {
          u.value.filter((n) => n.id !== x.id).filter((n) => n.x < x.x && n.x + n.width > x.x || n.x === x.x || n.x > x.x && n.x < x.x + x.width).filter((n) => n.y < x.y && n.y + n.height > x.y || n.y === x.y || n.y > x.y && n.y < x.y + x.height).forEach((n) => {
            n.y = x.y + x.height, c(n);
          });
        };
        c(f);
      } else
        u.value.push(o);
      Y();
    }, et = (r, l = null) => {
      let t = -1;
      const o = u.value.filter((e) => e.id === l);
      if (l ? o.length === 1 && (t = o[0].groupData.findIndex((e) => e.id === r)) : t = u.value.findIndex((e) => e.id === r), t !== -1) {
        if (l)
          if (o[0].groupData.splice(t, 1), o[0].groupData.length === 1)
            ut(l);
          else {
            const e = xt(o[0].groupData, o[0]);
            ft(e);
          }
        else
          u.value.splice(t, 1);
        Y();
      } else
        try {
        } catch {
        }
    }, ft = (r) => {
      if (r.id) {
        const l = O(r);
        delete l.showPop, delete l.showSet, l.groupData && l.groupData.forEach((e) => {
          delete e.showPop, delete e.showSet;
        });
        let t = -1;
        const o = u.value.filter((e) => e.id === l.inGroupId);
        if (l.inGroupId ? o.length === 1 && (t = o[0].groupData.findIndex((e) => e.id === l.id)) : t = u.value.findIndex((e) => e.id === l.id), t !== -1)
          l.inGroupId ? o[0].groupData[t] = l : u.value[t] = l, Y();
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, mt = (r, l) => {
      if (r !== null) {
        const t = b ? r / b : 1;
        b = r;
        const o = getComputedStyle(L.value), e = parseInt(o.getPropertyValue("--com-item-border-width").trim()), f = parseInt(o.getPropertyValue("--group-tit-height").trim());
        Mt || (u.value.forEach((c) => {
          if (c.width *= t, c.height *= t, c.x *= t, c.y *= t, c.isGroup === !0) {
            const x = c.width - 2 * e, y = c.height - 2 * e - (c.groupTit ? f : 0);
            c.groupData.forEach((n) => {
              n.width = x * n.groupW, n.x = x * n.groupX, n.height = y * n.groupH, n.y = y * n.groupY;
            });
          }
        }), Y());
      }
      l !== null && (Gt = l);
    }, Rt = (r) => {
      r.showPop || (u.value.forEach((l) => {
        delete l.showPop, l.groupData && l.groupData.forEach((t) => {
          delete t.showPop;
        });
      }), X("openSetMenu", O(r)), r.showPop = !0, window.addEventListener("click", ht));
    }, ht = () => {
      u.value.forEach((r) => {
        delete r.showPop, r.groupData && r.groupData.forEach((l) => {
          delete l.showPop;
        });
      }), window.removeEventListener("click", ht);
    }, $ = V(!1), Lt = (r) => {
      const l = u.value.findIndex((t) => t.id === r);
      if (l !== -1)
        u.value[l].checked = !0, u.value[l].disabled = !0, $.value = !0, X("showGroup", $.value);
      else
        try {
        } catch {
        }
    }, kt = () => {
      $.value = !1, u.value.forEach((r) => {
        delete r.checked, delete r.disabled, r.groupData && r.groupData.forEach((l) => {
          delete l.checked, delete l.disabled;
        });
      }), X("showGroup", $.value);
    }, jt = (r) => {
      r.checked = !r.checked, X("updateChecked", u.value.filter((l) => l.checked).length);
    }, xt = (r, l) => {
      const t = O(r), o = O(l);
      t.sort((a, s) => {
        const d = a.x, i = s.x;
        return d - i;
      });
      for (let a = 0; a < t.length - 1; a++) {
        if (a === 0 && t[a].x > 0) {
          const s = t[a].x;
          for (let d = a; d < t.length; d++)
            t[d].x -= s;
        }
        if (t[a + 1].x > t[a].x + t[a].width) {
          const s = O(t.slice(0, a + 1));
          if (t[a + 1].x > Math.max(...s.map((d) => d.x + d.width))) {
            const d = t[a + 1].x - Math.max(...s.map((i) => i.x + i.width));
            for (let i = a + 1; i < t.length; i++)
              t[i].x -= d;
          }
        }
      }
      t.sort((a, s) => {
        const d = a.y, i = s.y;
        return d - i;
      });
      for (let a = 0; a < t.length - 1; a++) {
        if (a === 0 && t[a].y > 0) {
          const s = t[a].y;
          for (let d = a; d < t.length; d++)
            t[d].y -= s;
        }
        if (t[a + 1].y > t[a].y + t[a].height) {
          const s = O(t.slice(0, a + 1));
          if (t[a + 1].y > Math.max(...s.map((d) => d.y + d.height))) {
            const d = t[a + 1].y - Math.max(...s.map((i) => i.y + i.height));
            for (let i = a + 1; i < t.length; i++)
              t[i].y -= d;
          }
        }
      }
      const e = t.map((a) => a.x + a.width), f = Math.max(...e), c = t.map((a) => a.y + a.height), x = Math.max(...c);
      t.forEach((a) => {
        a.inGroupId || (a.inGroupId = o.id), a.groupW = a.width / f, a.groupH = a.height / x, a.groupX = a.x / f, a.groupY = a.y / x, a.isObstacle = a.x + a.width === f && a.y === 0;
      });
      const y = getComputedStyle(L.value), n = parseInt(y.getPropertyValue("--com-item-border-width").trim()), p = parseInt(y.getPropertyValue("--group-tit-height").trim());
      return o.width = f + 2 * n, o.height = x + 2 * n + (o.groupTit ? p : 0), o.groupData = [...t], o;
    }, te = () => {
      bt(() => {
        const r = getComputedStyle(L.value), l = parseInt(r.getPropertyValue("--com-item-border-width").trim()), t = parseInt(r.getPropertyValue("--group-tit-height").trim());
        u.value.filter((o) => o.isGroup === !0).forEach((o) => {
          const e = o.width - 2 * l, f = o.height - 2 * l - (o.groupTit ? t : 0);
          o.groupData.forEach((c) => {
            c.width = e * c.groupW, c.x = e * c.groupX, c.height = f * c.groupH, c.y = f * c.groupY;
          });
        });
      });
    }, ee = () => {
      const r = u.value.filter((l) => l.checked);
      if (r.length > 1) {
        const l = {
          id: (/* @__PURE__ */ new Date()).getTime() + "G",
          isGroup: !0,
          groupTit: ""
        }, t = xt(r, l);
        return t.groupData.forEach((o) => {
          et(o.id);
        }), gt(t), Y(), kt(), O(u.value.filter((o) => o.id === t.id)[0]);
      }
      return kt(), null;
    }, $t = (r, l) => {
      const t = u.value.filter((o) => o.id === l)[0];
      if (t) {
        const o = t.groupData.filter((e) => e.id === r)[0];
        if (o)
          return t.groupData.length === 2 ? ut(l) : (delete o.inGroupId, delete o.groupW, delete o.groupH, delete o.groupX, delete o.groupY, delete o.isObstacle, et(o.id, t.id), gt(o), Y(), [O(u.value.filter((e) => e.id === r)[0])]);
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
    }, ut = (r) => {
      const l = u.value.filter((t) => t.id === r)[0];
      if (l) {
        let t = [];
        l.groupData.forEach((e) => {
          delete e.inGroupId, delete e.groupW, delete e.groupH, delete l.groupX, delete l.groupY, delete l.isObstacle, e.x += l.x, e.y += l.y, t.push(e.id), gt(e, null, !0);
        }), et(l.id), Y();
        let o = [];
        return t.forEach((e) => {
          o.push(O(u.value.filter((f) => f.id === e)[0]));
        }), o;
      } else
        try {
        } catch {
        } finally {
          return [];
        }
    }, le = (r = "", l) => {
      const t = u.value.filter((o) => o.id === l)[0];
      if (t) {
        if (!t.groupTit || !r) {
          const e = getComputedStyle(L.value), f = parseInt(e.getPropertyValue("--group-tit-height").trim());
          t.groupTit && !r && (t.height -= f), !t.groupTit && r && (t.height += f);
        }
        t.groupTit = r;
        const o = (e) => {
          u.value.filter((c) => c.id !== e.id).filter((c) => c.x < e.x && c.x + c.width > e.x || c.x === e.x || c.x > e.x && c.x < e.x + e.width).filter((c) => c.y < e.y && c.y + c.height > e.y || c.y === e.y || c.y > e.y && c.y < e.y + e.height).forEach((c) => {
            c.y = e.y + e.height, o(c);
          });
        };
        o(t), Y();
      } else
        try {
        } catch {
        }
    }, ie = () => (u.value.forEach((r) => {
      delete r.showPop, delete r.showSet, r.groupData && r.groupData.forEach((l) => {
        delete l.showPop, delete l.showSet;
      });
    }), { data: O(u.value), width: b });
    return se(() => {
      Yt.unobserve(L.value), window.removeEventListener("click", ht);
    }), N({ init: Jt, addItem: gt, deleteItem: et, updateItem: ft, openGroup: Lt, closeGroup: kt, changeGroupBorder: te, addGroup: ee, removeGroupItem: $t, removeGroup: ut, changeGroupTit: le, getData: ie }), (r, l) => (D(), S("div", {
      class: "vue-drag-component-plus",
      ref_key: "pageRef",
      ref: L
    }, [
      R("div", {
        class: "content-box",
        ref_key: "boxRef",
        ref: Ft
      }, [
        (D(!0), S(lt, null, Dt(M(u), (t, o) => (D(), S("div", {
          class: Z(["com-item", E.seeModel || M($) || t.static === !0 || t.dragable === !1 ? "" : "can-drag", t.move ? "is-move" : "", t.drag ? "is-drag" : "", t.showPop ? "on-top" : "", E.seeModel ? "no-hover" : ""]),
          style: A({
            width: t.width + "px",
            height: t.height + "px",
            top: t.y + "px",
            left: t.x + "px"
          }),
          key: o,
          onMousedown: C((e) => E.seeModel || M($) || t.static === !0 || t.dragable === !1 ? null : Ut(e, o), ["prevent"]),
          onMouseenter: (e) => E.seeModel || M($) || M(I) || M(g) || !t.isGroup ? null : Qt(e, t),
          onMouseleave: (e) => E.seeModel || M($) || M(I) || M(g) || !t.isGroup ? null : Zt(e, t)
        }, [
          R("div", ue, [
            t.isGroup ? (D(), S(lt, { key: 0 }, [
              t.groupTit ? (D(), S("div", {
                key: 0,
                class: "group-item-tit",
                title: t.groupTit
              }, B(t.groupTit), 9, de)) : W("", !0),
              R("div", {
                class: Z(["group-item-content", t.groupTit ? "" : "full"])
              }, [
                (D(!0), S(lt, null, Dt(t.groupData, (e, f) => (D(), S("div", {
                  class: Z(["com-item-box-child", e.isObstacle ? "else" : ""]),
                  style: A({
                    width: e.width + "px",
                    height: e.height + "px",
                    top: e.y + "px",
                    left: e.x + "px"
                  }),
                  key: f
                }, [
                  R("div", ce, [
                    it(r.$slots, "item", { data: e }, () => [
                      R("p", null, B(Math.round(e.width * 100) / 100) + "," + B(Math.round(e.height * 100) / 100), 1),
                      R("p", null, B(Math.round(e.x * 100) / 100) + "," + B(Math.round(e.y * 100) / 100), 1)
                    ])
                  ]),
                  !E.seeModel && !M($) && M(I) === null && M(g) === null ? (D(), S("div", {
                    key: 0,
                    class: "setting-box",
                    style: A({ display: e.showPop ? "flex" : "none" }),
                    onMousedown: C((c) => null, ["prevent", "stop"])
                  }, [
                    Nt(Kt, {
                      iconObj: E.settingIcon,
                      onClick: C((c) => Rt(e), ["prevent", "stop"])
                    }, null, 8, ["iconObj", "onClick"])
                  ], 36)) : W("", !0),
                  e.showPop ? (D(), S("div", {
                    key: 1,
                    class: "setting-box-pop",
                    onMousedown: C((c) => null, ["prevent", "stop"])
                  }, [
                    it(r.$slots, "setPopNormal", {
                      data: O(e)
                    }, () => [
                      R("div", {
                        class: "setting-box-pop-item",
                        onClick: (c) => $t(e.id, e.inGroupId)
                      }, "移出组合", 8, pe),
                      R("div", {
                        class: "setting-box-pop-item",
                        onClick: (c) => et(e.id, e.inGroupId)
                      }, "删除", 8, ye)
                    ])
                  ], 32)) : W("", !0)
                ], 6))), 128))
              ], 2)
            ], 64)) : (D(), S("div", ge, [
              it(r.$slots, "item", { data: t }, () => [
                R("p", null, B(Math.round(t.width * 100) / 100) + "," + B(Math.round(t.height * 100) / 100), 1),
                R("p", null, B(Math.round(t.x * 100) / 100) + "," + B(Math.round(t.y * 100) / 100), 1)
              ])
            ])),
            !t.isGroup && t.notGroup !== !0 && M($) ? (D(), S("div", {
              key: 2,
              class: Z(["group-checkbox", t.checked ? "is-checked" : "", t.disabled ? "disabled" : ""]),
              onClick: (e) => t.disabled ? null : jt(t)
            }, null, 10, fe)) : W("", !0),
            !E.seeModel && !M($) && M(I) === null && M(g) === null ? (D(), S("div", {
              key: 3,
              class: Z(["setting-box", t.isGroup === !0 ? "only-g" : ""]),
              style: A({ display: t.showPop || t.showSet ? "flex" : "none" }),
              onMousedown: C((e) => null, ["prevent", "stop"])
            }, [
              Nt(Kt, {
                iconObj: E.settingIcon,
                onClick: C((e) => Rt(t), ["prevent", "stop"])
              }, null, 8, ["iconObj", "onClick"])
            ], 38)) : W("", !0),
            t.showPop ? (D(), S("div", {
              key: 4,
              class: Z(["setting-box-pop", t.isGroup === !0 ? "special" : ""]),
              onMousedown: C((e) => null, ["prevent", "stop"])
            }, [
              t.isGroup === !0 ? it(r.$slots, "setPopSpecial", {
                key: 0,
                data: O(t)
              }, () => [
                E.hideTit ? W("", !0) : (D(), S("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (e) => X("showTitPop", t.groupTit, t.id)
                }, " 设置组合标题", 8, xe)),
                R("div", {
                  class: "setting-box-pop-item",
                  onClick: (e) => ut(t.id)
                }, "解除组合", 8, ve)
              ]) : it(r.$slots, "setPopNormal", {
                key: 1,
                data: O(t)
              }, () => [
                t.notGroup !== !0 ? (D(), S("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (e) => Lt(t.id)
                }, "组合", 8, we)) : W("", !0),
                R("div", {
                  class: "setting-box-pop-item",
                  onClick: (e) => et(t.id)
                }, "删除", 8, Me)
              ])
            ], 34)) : W("", !0)
          ]),
          !E.seeModel && !M($) && !t.showPop && !t.move && t.static !== !0 && t.resizable !== !1 ? (D(), S(lt, { key: 0 }, [
            M(_).indexOf("topLeft") !== -1 ? (D(), S("div", {
              key: 0,
              class: "resize-line top-left",
              onMousedown: C((e) => F(e, t, "top-left"), ["prevent", "stop"])
            }, null, 40, ke)) : W("", !0),
            M(_).indexOf("top") !== -1 ? (D(), S("div", {
              key: 1,
              class: "resize-line top",
              onMousedown: C((e) => F(e, t, "top"), ["prevent", "stop"])
            }, null, 40, Ee)) : W("", !0),
            M(_).indexOf("topRight") !== -1 ? (D(), S("div", {
              key: 2,
              class: "resize-line top-right",
              onMousedown: C((e) => F(e, t, "top-right"), ["prevent", "stop"])
            }, null, 40, De)) : W("", !0),
            M(_).indexOf("left") !== -1 ? (D(), S("div", {
              key: 3,
              class: "resize-line left",
              onMousedown: C((e) => F(e, t, "left"), ["prevent", "stop"])
            }, null, 40, Se)) : W("", !0),
            M(_).indexOf("right") !== -1 ? (D(), S("div", {
              key: 4,
              class: "resize-line right",
              onMousedown: C((e) => F(e, t, "right"), ["prevent", "stop"])
            }, null, 40, Oe)) : W("", !0),
            M(_).indexOf("bottomLeft") !== -1 ? (D(), S("div", {
              key: 5,
              class: "resize-line bottom-left",
              onMousedown: C((e) => F(e, t, "bottom-left"), ["prevent", "stop"])
            }, null, 40, Ge)) : W("", !0),
            M(_).indexOf("bottom") !== -1 ? (D(), S("div", {
              key: 6,
              class: "resize-line bottom",
              onMousedown: C((e) => F(e, t, "bottom"), ["prevent", "stop"])
            }, null, 40, Ie)) : W("", !0),
            M(_).indexOf("bottomRight") !== -1 ? (D(), S("div", {
              key: 7,
              class: "resize-line bottom-right",
              onMousedown: C((e) => F(e, t, "bottom-right"), ["prevent", "stop"])
            }, null, 40, He)) : W("", !0)
          ], 64)) : W("", !0)
        ], 46, he))), 128)),
        (D(!0), S(lt, null, Dt(M(u), (t, o) => (D(), S("div", {
          class: Z(["shadow-bg", t.move ? "is-move" : ""]),
          style: A({
            width: t.width + "px",
            height: t.height + "px",
            top: t.y + "px",
            left: t.x + "px"
          }),
          key: o
        }, null, 6))), 128)),
        M(I) !== null ? (D(), S("div", {
          key: 0,
          class: "drag-bg",
          style: A({
            width: M(P).width + "px",
            height: M(P).height + "px",
            top: M(P).y + "px",
            left: M(P).x + "px"
          })
        }, null, 4)) : W("", !0),
        R("div", {
          class: "height-bg",
          style: A({ height: (M(rt) > 0 ? +(M(rt) + (E.seeModel ? E.seeModelMinBg : 220)) : M(rt)) + "px" })
        }, null, 4),
        E.hideAuxiliary ? W("", !0) : (D(), S(lt, { key: 1 }, [
          M(ot) !== null ? (D(), S("div", {
            key: 0,
            class: "auxiliary-line hor",
            style: A({ top: M(ot) + "px", left: "0px" })
          }, null, 4)) : W("", !0),
          M(at) !== null ? (D(), S("div", {
            key: 1,
            class: "auxiliary-line hor",
            style: A({ top: M(at) + "px", left: "0px" })
          }, null, 4)) : W("", !0),
          M(st) !== null ? (D(), S("div", {
            key: 2,
            class: "auxiliary-line",
            style: A({ top: "0px", left: M(st) + "px" })
          }, null, 4)) : W("", !0),
          M(nt) !== null ? (D(), S("div", {
            key: 3,
            class: "auxiliary-line",
            style: A({ top: "0px", left: M(nt) + "px" })
          }, null, 4)) : W("", !0)
        ], 64)),
        M(u).length === 0 ? (D(), S("div", We, [
          it(r.$slots, "empty", {}, () => [
            l[0] || (l[0] = ne(" 暂无数据 "))
          ])
        ])) : W("", !0)
      ], 512)
    ], 512));
  }
}, Te = [Pe], ze = {
  install(E) {
    Te.forEach((N) => {
      E.component("vueDragComponentPlus", N);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(ze);
export {
  ze as default
};
