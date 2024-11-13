import { resolveComponent as re, openBlock as D, createBlock as Et, resolveDynamicComponent as Vt, normalizeProps as At, mergeProps as vt, withCtx as oe, createElementBlock as S, toDisplayString as B, watch as Bt, ref as V, onMounted as ae, onBeforeUnmount as se, createElementVNode as R, Fragment as lt, renderList as Dt, unref as M, normalizeClass as Z, normalizeStyle as A, withModifiers as T, createCommentVNode as H, renderSlot as it, createVNode as Nt, createTextVNode as ne, isVNode as _t, nextTick as bt } from "vue";
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
const he = ["onMousedown", "onMouseenter", "onMouseleave"], ue = { class: "com-item-box" }, de = ["title"], ce = { class: "com-item-box-content" }, ye = ["onClick"], pe = ["onClick"], ge = {
  key: 1,
  class: "com-item-box-content"
}, fe = ["onClick"], xe = ["onClick"], ve = ["onClick"], we = ["onClick"], Me = ["onClick"], ke = ["onMousedown"], Ee = ["onMousedown"], De = ["onMousedown"], Se = ["onMousedown"], Oe = ["onMousedown"], Ge = ["onMousedown"], Ie = ["onMousedown"], We = ["onMousedown"], He = {
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
    const X = St, v = E, O = (i) => {
      if (typeof i == "object" && !_t(i) && i !== null && !(i instanceof Date)) {
        let l = i instanceof Array ? [] : {};
        for (let t in i)
          l[t] = typeof i[t] == "object" && !_t(i[t]) && i[t] !== null && !(i[t] instanceof Date) ? O(i[t]) : i[t];
        return l;
      } else
        return i;
    }, Ot = () => {
      v.insertResizeKeys.forEach((i) => {
        v.excludeResizeKeys.indexOf(i) === -1 && _.value.push(i);
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
    const Ft = V(null), rt = V(0), ot = V(null), at = V(null), st = V(null), nt = V(null), m = (i) => {
      const l = O(i);
      if (i === null)
        ot.value = null, at.value = null, st.value = null, nt.value = null;
      else {
        const t = getComputedStyle(L.value), o = parseInt(t.getPropertyValue("--auxiliary-width").trim()), e = u.value.filter((a) => a.id !== l.id).map((a) => a.y), f = u.value.filter((a) => a.id !== l.id).map((a) => a.y + a.height - 1), c = [...e, ...f];
        c.sort(), c.filter((a) => a <= l.y && l.y - v.auxiliarySpace < a || a >= l.y && l.y + v.auxiliarySpace > a).length > 0 ? ot.value = l.y : ot.value = null, c.filter((a) => a <= l.y + l.height - 1 && l.y + l.height - 1 - v.auxiliarySpace < a || a >= l.y + l.height - 1 && l.y + l.height - 1 + v.auxiliarySpace > a).length > 0 ? at.value = l.y + l.height - o : at.value = null;
        const x = u.value.filter((a) => a.id !== l.id).map((a) => a.x), g = u.value.filter((a) => a.id !== l.id).map((a) => a.x + a.width - 1), n = [...x, ...g];
        n.sort(), n.filter((a) => a <= l.x && l.x - v.auxiliarySpace < a || a >= l.x && l.x + v.auxiliarySpace > a).length > 0 ? st.value = l.x : st.value = null, n.filter((a) => a <= l.x + l.width - 1 && l.x + l.width - 1 - v.auxiliarySpace < a || a >= l.x + l.width - 1 && l.x + l.width - 1 + v.auxiliarySpace > a).length > 0 ? nt.value = l.x + l.width - o : nt.value = null;
      }
    }, u = V([]), qt = (i, l) => {
      let t = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector;
      for (; i && !t.call(i, l); )
        i = i.parentElement;
      return i;
    };
    let I = null, It = null, Wt = null;
    const P = V({}), Ut = (i, l) => {
      ht(), I = l, P.value = O(u.value[I]), X("dragStart", O(u.value[I])), u.value[I].move = !0, m(u.value[I]);
      const t = qt(i.target, ".com-item");
      It = i.clientX - t.offsetLeft, Wt = i.clientY - t.offsetTop, window.addEventListener("mousemove", Ht), window.addEventListener("mouseup", Pt);
    }, Ht = (i) => {
      const l = i.clientX - It, t = i.clientY - Wt, o = l <= K("left") ? K("left") : l >= K("right") ? K("right") : l, e = t <= K("top") ? K("top") : t >= K("bottom") ? K("bottom") : t, f = o - u.value[I].x, c = e - u.value[I].y, x = `${f > 3 ? "right" : f < -3 ? "left" : ""}_${c > 0 ? "bottom" : c < 0 ? "top" : ""}`;
      u.value[I].x = o, u.value[I].y = e, m(u.value[I]);
      let g = O(u.value.filter((n) => n.move !== !0).filter((n) => n.x < o && n.x + n.width > o || n.x === o || n.x > o && n.x < o + u.value[I].width).filter((n) => n.y < e && n.y + n.height > e || n.y === e || n.y > e && n.y < e + u.value[I].height));
      if (g.length === 0)
        P.value.x = o, P.value.y = e;
      else {
        if (x.indexOf("top") !== -1) {
          g = g.filter((r) => r.y < P.value.y);
          const n = Math.min(...g.map((r) => r.y + r.height));
          g.forEach((r) => {
            Math.abs(r.y + r.height - n) < 5 && (r.y = n - r.height);
          });
          let a = P.value.y - e, y = !0, s = [...g];
          const d = (r) => {
            O(u.value.filter((h) => h.move !== !0 && h.y + h.height - r.y <= a + 3 && h.y + h.height - r.y >= 0).filter((h) => h.x < r.x && h.x + h.width > r.x || h.x >= r.x && h.x < r.x + r.width)).forEach((h) => {
              h.y + h.height !== r.y && (h.y = r.y - h.height), s.findIndex((G) => G.id === h.id) === -1 && (s.push(h), d(h));
            });
          };
          if (g.forEach((r) => {
            d(r);
          }), s.sort((r, w) => {
            const h = r.y, G = w.y;
            return h - G;
          }), (s.length === 0 || s.filter((r) => r.y === 0).length > 0) && (y = !1), y) {
            let r = 0;
            s.filter((h) => h.y === s[0].y).forEach((h) => {
              O(u.value.filter((k) => k.move !== !0 && k.y + k.height < h.y).filter((k) => k.x < h.x && k.x + k.width > h.x || k.x >= h.x && k.x < h.x + h.width)).forEach((k) => {
                k.y + k.height > r && (r = k.y + k.height);
              });
            }), r = s[0].y - r, r < a && (a = r), s.forEach((h) => {
              h.y -= a, u.value.filter((G) => G.id === h.id)[0].y = h.y;
            }), P.value.x = o, P.value.y = u.value.filter((h) => h.id === s[s.length - 1].id)[0].y + u.value.filter((h) => h.id === s[s.length - 1].id)[0].height;
          } else {
            let r = 0;
            g.forEach((G) => {
              const k = u.value.filter((C) => C.move !== !0).filter((C) => C.x < G.x && C.x + C.width > G.x || C.x === G.x || C.x > G.x && C.x < G.x + G.width).filter((C) => C.y > G.y + G.height);
              k.length > 0 && (r = Math.min(...k.map((C) => C.y)));
            });
            const w = r === 0 ? 0 : r - P.value.height - (Math.max(...g.map((G) => G.y + G.height)) - Math.min(...g.map((G) => G.y))), h = w === 0 ? e + P.value.height - Math.min(...g.map((G) => G.y)) : r - Math.min(...g.map((G) => G.y)) - (Math.max(...g.map((G) => G.y + G.height)) - Math.min(...g.map((G) => G.y)));
            if (w === 0 || e <= w) {
              g.filter((k) => k.y < P.value.y).forEach((k) => {
                k.y += h, u.value.filter((C) => C.id === k.id)[0].y = k.y;
              }), P.value.x = o, P.value.y = e;
              const G = (k) => {
                u.value.filter((z) => z.move !== !0 && z.id !== k.id).filter((z) => z.x < k.x && z.x + z.width > k.x || z.x === k.x || z.x > k.x && z.x < k.x + k.width).filter((z) => z.y < k.y && z.y + z.height > k.y || z.y === k.y || z.y > k.y && z.y < k.y + k.height).forEach((z) => {
                  z.y = k.y + k.height, G(z);
                });
              };
              u.value.forEach((k) => G(k));
            }
          }
          g = O(u.value.filter((r) => r.move !== !0).filter((r) => r.x < o && r.x + r.width > o || r.x === o || r.x > o && r.x < o + u.value[I].width).filter((r) => r.y < e && r.y + r.height > e || r.y === e || r.y > e && r.y < e + u.value[I].height));
        }
        if (x.indexOf("bottom") !== -1) {
          let n = 0;
          g.forEach((s) => {
            const d = u.value.filter((r) => r.move !== !0).filter((r) => r.x < s.x && r.x + r.width > s.x || r.x === s.x || r.x > s.x && r.x < s.x + s.width).filter((r) => r.y + r.height < s.y);
            d.length > 0 && (n = Math.max(...d.map((r) => r.y + r.height)));
          });
          const a = n + (Math.max(...g.map((s) => s.height + s.y)) - Math.min(...g.map((s) => s.y))), y = Math.min(...g.map((s) => s.y)) - n;
          if (e >= a) {
            let s = !0;
            g.filter((r) => r.y > P.value.y).forEach((r) => {
              r.y -= y, u.value.filter((h) => h.id === r.id)[0].y = r.y;
              const w = u.value.filter((h) => h.move !== !0 && h.id !== r.id).filter((h) => h.x < r.x && h.x + h.width > r.x || h.x === r.x || h.x > r.x && h.x < r.x + r.width).filter((h) => h.y < r.y && h.y + h.height > r.y || h.y === r.y || h.y > r.y && h.y < r.y + r.height);
              w.length > 0 && (r.y = Math.max(...w.map((h) => h.y + h.height)), u.value.filter((h) => h.id === r.id)[0].y = r.y);
            }), P.value.x = o, s && (P.value.y = a);
            const d = (r) => {
              u.value.filter((h) => h.id !== r.id).filter((h) => h.x < r.x && h.x + h.width > r.x || h.x === r.x || h.x > r.x && h.x < r.x + r.width).filter((h) => h.y < r.y && h.y + h.height > r.y || h.y === r.y || h.y > r.y && h.y < r.y + r.height).forEach((h) => {
                h.y = r.y + r.height, h.move === !0 && (P.value.y = h.y, s = !1), d(h);
              });
            };
            u.value.forEach((r) => d(r)), g = O(u.value.filter((r) => r.move !== !0).filter((r) => r.x < o && r.x + r.width > o || r.x === o || r.x > o && r.x < o + u.value[I].width).filter((r) => r.y < e && r.y + r.height > e || r.y === e || r.y > e && r.y < e + u.value[I].height));
          }
        }
        if (((x.indexOf("top") !== -1 || x.indexOf("bottom") !== -1) && (x.indexOf("right") !== -1 || x.indexOf("left") !== -1) && Math.abs(f) > 8 || x.indexOf("top") === -1 && x.indexOf("bottom") === -1 && (x.indexOf("right") !== -1 || x.indexOf("left") !== -1)) && g.length > 0) {
          g.sort((a, y) => {
            const s = a.y, d = y.y;
            return s - d;
          });
          let n = !0;
          for (let a = 0; a < g.length; a++) {
            if (n) {
              const y = O(u.value);
              for (let s = 0; s <= a; s++) {
                let d = null;
                const r = y.filter((w) => w.move !== !0 && w.y < g[s].y).filter((w) => w.x < g[s].x && w.x + w.width > g[s].x || w.x === g[s].x || w.x > g[s].x && w.x < g[s].x + g[s].width);
                if (r.length === 0 ? d = 0 : d = Math.max(...r.map((w) => w.y + w.height)), s === a) {
                  if (g[s].y - (g[s].y + g[s].height - e) < d) {
                    n = !1;
                    break;
                  }
                } else if (g[s].y - g[a].height < d) {
                  n = !1;
                  break;
                } else
                  y.filter((w) => w.id === g[s].id)[0].y -= g[a].height;
              }
            }
            if (n) {
              g[a].y -= g[a].y + g[a].height - e, u.value.filter((y) => y.id === g[a].id)[0].y = g[a].y;
              for (let y = a; y > 0; y--)
                g[a - 1].y -= g[a].height, u.value.filter((s) => s.id === g[a - 1].id)[0].y = g[a - 1].y;
            } else
              g.filter((y) => y.id === g[a].id).forEach((y) => {
                y.y += u.value[I].y + u.value[I].height - y.y, u.value.filter((d) => d.id === y.id)[0].y = y.y;
                const s = (d) => {
                  u.value.filter((w) => w.move !== !0 && w.id !== d.id).filter((w) => w.x < d.x && w.x + w.width > d.x || w.x === d.x || w.x > d.x && w.x < d.x + d.width).filter((w) => w.y < d.y && w.y + w.height > d.y || w.y === d.y || w.y > d.y && w.y < d.y + d.height).forEach((w) => {
                    w.y = d.y + d.height, s(w);
                  });
                };
                s(y);
              });
          }
          P.value.x = o;
        }
      }
      Y(!1), X("dragIng", O(u.value[I]));
    }, Pt = () => {
      window.removeEventListener("mousemove", Ht), window.removeEventListener("mouseup", Pt), delete u.value[I].move, u.value[I].x = P.value.x, u.value[I].y = P.value.y, m(null), Y(), X("dragEnd", O(u.value[I])), I = null;
    }, K = (i) => {
      switch (i) {
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
    let p = null, wt = "", dt = 0, ct = 0, q = 0, U = 0, J = 0, Q = 0, j = 0, yt = 0, tt = 0, pt = 0;
    const F = (i, l, t) => {
      ht(), p = l, X("resizeStart", O(p)), wt = t, dt = i.clientX, ct = i.clientY, q = l.width, U = l.height, J = l.y, Q = l.x, p.drag = !0, m(p);
      const o = u.value.filter((n) => n.static === !0 && (n.x < l.x ? n.x + n.width >= l.x : n.x <= l.x + l.width)), e = u.value.filter((n) => n.static === !0 && (n.y < l.y ? n.y + n.height >= l.y : n.y <= l.y + l.height)), f = o.filter((n) => n.y + n.height <= l.y).map((n) => n.y + n.height);
      f.length > 0 ? j = Math.max(...f) : j = 0;
      const c = o.filter((n) => n.y >= l.y + l.height).map((n) => n.y);
      c.length > 0 ? yt = Math.min(...c) : yt = 0;
      const x = e.filter((n) => n.x + n.width <= l.x).map((n) => n.x + n.width);
      x.length > 0 ? tt = Math.max(...x) : tt = 0;
      const g = e.filter((n) => n.x >= l.x + l.width).map((n) => n.x);
      g.length > 0 ? pt = Math.min(...g) : pt = 0, window.addEventListener("mousemove", zt), window.addEventListener("mouseup", Ct);
    }, zt = (i) => {
      const l = q + (i.clientX - dt), t = U + (i.clientY - ct), o = q - (i.clientX - dt), e = U - (i.clientY - ct), f = J + (i.clientY - ct), c = Q + (i.clientX - dt), x = getComputedStyle(L.value), g = parseInt(x.getPropertyValue("--com-item-border-width").trim()), n = parseInt(x.getPropertyValue("--group-tit-height").trim());
      switch (wt) {
        case "top-left":
          if (p.height = e < v.itemMinHeight ? v.itemMinHeight : e > W("top") ? W("top") : e, p.y = e < v.itemMinHeight ? J + U - v.itemMinHeight : e > W("top") ? j : f, p.width = o < v.itemMinWidth ? v.itemMinWidth : o > W("left") ? W("left") : o, p.x = o < v.itemMinWidth ? Q + q - v.itemMinWidth : o > W("left") ? tt : c, p.isGroup === !0) {
            const y = p.width - 2 * g, s = p.height - 2 * g - (p.groupTit ? n : 0);
            p.groupData.forEach((d) => {
              d.width = y * d.groupW, d.x = y * d.groupX, d.height = s * d.groupH, d.y = s * d.groupY;
            });
          }
          break;
        case "top":
          if (p.height = e < v.itemMinHeight ? v.itemMinHeight : e > W("top") ? W("top") : e, p.y = e < v.itemMinHeight ? J + U - v.itemMinHeight : e > W("top") ? j : f, p.isGroup === !0) {
            const y = p.height - 2 * g - (p.groupTit ? n : 0);
            p.groupData.forEach((s) => {
              s.height = y * s.groupH, s.y = y * s.groupY;
            });
          }
          break;
        case "top-right":
          if (p.height = e < v.itemMinHeight ? v.itemMinHeight : e > W("top") ? W("top") : e, p.y = e < v.itemMinHeight ? J + U - v.itemMinHeight : e > W("top") ? j : f, p.width = l < v.itemMinWidth ? v.itemMinWidth : l > W("right") ? W("right") : l, p.isGroup === !0) {
            const y = p.width - 2 * g, s = p.height - 2 * g - (p.groupTit ? n : 0);
            p.groupData.forEach((d) => {
              d.width = y * d.groupW, d.x = y * d.groupX, d.height = s * d.groupH, d.y = s * d.groupY;
            });
          }
          break;
        case "left":
          if (p.width = o < v.itemMinWidth ? v.itemMinWidth : o > W("left") ? W("left") : o, p.x = o < v.itemMinWidth ? Q + q - v.itemMinWidth : o > W("left") ? tt : c, p.isGroup === !0) {
            const y = p.width - 2 * g;
            p.groupData.forEach((s) => {
              s.width = y * s.groupW, s.x = y * s.groupX;
            });
          }
          break;
        case "right":
          if (p.width = l < v.itemMinWidth ? v.itemMinWidth : l > W("right") ? W("right") : l, p.isGroup === !0) {
            const y = p.width - 2 * g;
            p.groupData.forEach((s) => {
              s.width = y * s.groupW, s.x = y * s.groupX;
            });
          }
          break;
        case "bottom-left":
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > W("bottom") ? W("bottom") : t, p.width = o < v.itemMinWidth ? v.itemMinWidth : o > W("left") ? W("left") : o, p.x = o < v.itemMinWidth ? Q + q - v.itemMinWidth : o > W("left") ? tt : c, p.isGroup === !0) {
            const y = p.width - 2 * g, s = p.height - 2 * g - (p.groupTit ? n : 0);
            p.groupData.forEach((d) => {
              d.width = y * d.groupW, d.x = y * d.groupX, d.height = s * d.groupH, d.y = s * d.groupY;
            });
          }
          break;
        case "bottom":
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > W("bottom") ? W("bottom") : t, p.isGroup === !0) {
            const y = p.height - 2 * g - (p.groupTit ? n : 0);
            p.groupData.forEach((s) => {
              s.height = y * s.groupH, s.y = y * s.groupY;
            });
          }
          break;
        case "bottom-right":
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > W("bottom") ? W("bottom") : t, p.width = l < v.itemMinWidth ? v.itemMinWidth : l > W("right") ? W("right") : l, p.isGroup === !0) {
            const y = p.width - 2 * g, s = p.height - 2 * g - (p.groupTit ? n : 0);
            p.groupData.forEach((d) => {
              d.width = y * d.groupW, d.x = y * d.groupX, d.height = s * d.groupH, d.y = s * d.groupY;
            });
          }
          break;
      }
      m(p);
      let a = O(u.value.filter((y) => y.drag !== !0).filter((y) => y.x < p.x && y.x + y.width > p.x || y.x === p.x || y.x > p.x && y.x < p.x + p.width).filter((y) => y.y < p.y && y.y + y.height > p.y || y.y === p.y || y.y > p.y && y.y < p.y + p.height));
      if (a.length > 0) {
        a.sort((y, s) => {
          const d = y.y, r = s.y;
          return d - r;
        });
        for (let y = 0; y < a.length; y++)
          a.filter((s) => s.id === a[y].id).forEach((s) => {
            s.y += p.y + p.height - s.y, u.value.filter((r) => r.id === s.id)[0].y = s.y;
            const d = (r) => {
              u.value.filter((h) => h.drag !== !0 && h.id !== r.id).filter((h) => h.x < r.x && h.x + h.width > r.x || h.x === r.x || h.x > r.x && h.x < r.x + r.width).filter((h) => h.y < r.y && h.y + h.height > r.y || h.y === r.y || h.y > r.y && h.y < r.y + r.height).forEach((h) => {
                h.y = r.y + r.height, d(h);
              });
            };
            d(s);
          });
      }
      Y(!1), X("resizeIng", O(p));
    }, Ct = (i) => {
      delete p.drag, wt = "", m(null), window.removeEventListener("mousemove", zt), window.removeEventListener("mouseup", Ct), Y(), X("resizeEnd", O(p)), p = null;
    }, W = (i) => {
      switch (i) {
        case "top":
          return J + U - j;
        case "left":
          return Q + q - tt;
        case "right":
          return (pt > 0 ? pt : b) - Q;
        case "bottom":
          return yt > 0 ? yt - J : 999999999;
      }
    }, Y = (i = !0) => {
      i === !0 && Tt();
      const l = u.value.map((t) => t.y + t.height);
      l.length > 0 ? rt.value = Math.max(...l) : rt.value = 0;
    };
    Bt(
      () => v.ySpace,
      () => {
        v.ySpace >= 0 && Tt();
      }
    );
    const Tt = () => {
      const i = O(u.value).sort((l, t) => {
        const o = l.y, e = t.y;
        return o - e;
      });
      for (let l = 0; l < i.length; l++) {
        if (l === 0 && i[l].y > 0) {
          const t = i[l].y;
          for (let o = l; o < i.length; o++)
            i[o].y -= t, u.value.filter((e) => e.id === i[o].id)[0].y = i[o].y;
        }
        if (l < i.length - 1 && i[l + 1].y > i[l].y + i[l].height) {
          const t = O(i.slice(0, l + 1));
          if (i[l + 1].y > Math.max(...t.map((o) => o.y + o.height))) {
            const o = i[l + 1].y - Math.max(...t.map((e) => e.y + e.height));
            for (let e = l + 1; e < i.length; e++)
              i[e].y -= o, u.value.filter((f) => f.id === i[e].id)[0].y = i[e].y;
          }
        }
      }
      for (let l = 0; l < i.length - 1; l++) {
        let t = i.findIndex((o) => o.y === i[l].y + i[l].height);
        if (t !== -1)
          for (let o = t; o < i.length; o++)
            i[o].y += v.ySpace, u.value.filter((e) => e.id === i[o].id)[0].y = i[o].y;
      }
      v.addFirstSpace && u.value.forEach((l) => l.y += v.ySpace);
    };
    ae(() => {
      Yt.observe(L.value);
    });
    const Yt = new ResizeObserver((i) => {
      mt(b === i[0].contentRect.width ? null : i[0].contentRect.width, Gt === i[0].contentRect.height ? null : i[0].contentRect.height);
    });
    let Mt = !1;
    const Jt = (i = [], l = null) => {
      u.value = O(i), u.value.filter((t) => t.isGroup === !0).forEach((t) => {
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
            const g = x.width - 2 * f, n = x.height - 2 * f - (x.groupTit ? c : 0);
            x.groupData.forEach((a) => {
              a.width = g * a.groupW, a.x = g * a.groupX, a.height = n * a.groupH, a.y = n * a.groupY;
            });
          }
        }), Y();
      }) : Y(), Mt = !0, setTimeout(() => {
        Mt = !1;
      }, 500);
    }, Qt = (i, l) => {
      l.showSet = !0;
    }, Zt = (i, l) => {
      delete l.showSet;
    }, Xt = (i, l, t) => {
      const o = l.map((c) => c.y), e = Math.max(...o), f = l.filter((c) => c.y + c.height > e);
      f.sort((c, x) => {
        const g = c.x, n = x.x;
        return g - n;
      });
      for (let c = 0; c < f.length; c++) {
        if (c === 0 && f[c].x >= i.width) {
          i.y = e, i.x = 0;
          break;
        }
        if (f.length > 1 && c !== f.length - 1 && f[c].x + f[c].width + i.width <= f[c + 1].x) {
          i.y = e, i.x = f[c].x + f[c].width;
          break;
        }
        if (c === f.length - 1 && f[c].x + f[c].width + i.width <= t) {
          i.y = e, i.x = f[c].x + f[c].width;
          break;
        }
      }
      if (i.y == null) {
        i.x = 0;
        const c = l.map((x) => x.y + x.height);
        i.y = Math.max(...c);
      }
    }, gt = (i, l = null, t = !1) => {
      const o = O(i), e = u.value.filter((f) => f.id === l);
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
    }, et = (i, l = null) => {
      let t = -1;
      const o = u.value.filter((e) => e.id === l);
      if (l ? o.length === 1 && (t = o[0].groupData.findIndex((e) => e.id === i)) : t = u.value.findIndex((e) => e.id === i), t !== -1) {
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
    }, ft = (i) => {
      if (i.id) {
        const l = O(i);
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
    }, mt = (i, l) => {
      if (i !== null) {
        const t = b ? i / b : 1;
        b = i;
        const o = getComputedStyle(L.value), e = parseInt(o.getPropertyValue("--com-item-border-width").trim()), f = parseInt(o.getPropertyValue("--group-tit-height").trim());
        Mt || (u.value.forEach((c) => {
          if (c.width *= t, c.height *= t, c.x *= t, c.y *= t, c.isGroup === !0) {
            const x = c.width - 2 * e, g = c.height - 2 * e - (c.groupTit ? f : 0);
            c.groupData.forEach((n) => {
              n.width = x * n.groupW, n.x = x * n.groupX, n.height = g * n.groupH, n.y = g * n.groupY;
            });
          }
        }), Y());
      }
      l !== null && (Gt = l);
    }, Rt = (i) => {
      i.showPop || (u.value.forEach((l) => {
        delete l.showPop, l.groupData && l.groupData.forEach((t) => {
          delete t.showPop;
        });
      }), X("openSetMenu", O(i)), i.showPop = !0, window.addEventListener("click", ht));
    }, ht = () => {
      u.value.forEach((i) => {
        delete i.showPop, i.groupData && i.groupData.forEach((l) => {
          delete l.showPop;
        });
      }), window.removeEventListener("click", ht);
    }, $ = V(!1), Lt = (i) => {
      const l = u.value.findIndex((t) => t.id === i);
      if (l !== -1)
        u.value[l].checked = !0, u.value[l].disabled = !0, $.value = !0, X("showGroup", $.value);
      else
        try {
        } catch {
        }
    }, kt = () => {
      $.value = !1, u.value.forEach((i) => {
        delete i.checked, delete i.disabled, i.groupData && i.groupData.forEach((l) => {
          delete l.checked, delete l.disabled;
        });
      }), X("showGroup", $.value);
    }, jt = (i) => {
      i.checked = !i.checked, X("updateChecked", u.value.filter((l) => l.checked).length);
    }, xt = (i, l) => {
      const t = O(i), o = O(l);
      t.sort((a, y) => {
        const s = a.x, d = y.x;
        return s - d;
      });
      for (let a = 0; a < t.length - 1; a++) {
        if (a === 0 && t[a].x > 0) {
          const y = t[a].x;
          for (let s = a; s < t.length; s++)
            t[s].x -= y;
        }
        if (t[a + 1].x > t[a].x + t[a].width) {
          const y = O(t.slice(0, a + 1));
          if (t[a + 1].x > Math.max(...y.map((s) => s.x + s.width))) {
            const s = t[a + 1].x - Math.max(...y.map((d) => d.x + d.width));
            for (let d = a + 1; d < t.length; d++)
              t[d].x -= s;
          }
        }
      }
      t.sort((a, y) => {
        const s = a.y, d = y.y;
        return s - d;
      });
      for (let a = 0; a < t.length - 1; a++) {
        if (a === 0 && t[a].y > 0) {
          const y = t[a].y;
          for (let s = a; s < t.length; s++)
            t[s].y -= y;
        }
        if (t[a + 1].y > t[a].y + t[a].height) {
          const y = O(t.slice(0, a + 1));
          if (t[a + 1].y > Math.max(...y.map((s) => s.y + s.height))) {
            const s = t[a + 1].y - Math.max(...y.map((d) => d.y + d.height));
            for (let d = a + 1; d < t.length; d++)
              t[d].y -= s;
          }
        }
      }
      const e = t.map((a) => a.x + a.width), f = Math.max(...e), c = t.map((a) => a.y + a.height), x = Math.max(...c);
      t.forEach((a) => {
        a.inGroupId || (a.inGroupId = o.id), a.groupW = a.width / f, a.groupH = a.height / x, a.groupX = a.x / f, a.groupY = a.y / x, a.isObstacle = a.x + a.width === f && a.y === 0;
      });
      const g = getComputedStyle(L.value), n = parseInt(g.getPropertyValue("--com-item-border-width").trim());
      return o.width = f + 2 * n, o.height = x + 2 * n, o.groupData = [...t], o;
    }, te = () => {
      bt(() => {
        const i = getComputedStyle(L.value), l = parseInt(i.getPropertyValue("--com-item-border-width").trim()), t = parseInt(i.getPropertyValue("--group-tit-height").trim());
        u.value.filter((o) => o.isGroup === !0).forEach((o) => {
          const e = o.width - 2 * l, f = o.height - 2 * l - (o.groupTit ? t : 0);
          o.groupData.forEach((c) => {
            c.width = e * c.groupW, c.x = e * c.groupX, c.height = f * c.groupH, c.y = f * c.groupY;
          });
        });
      });
    }, ee = () => {
      const i = u.value.filter((l) => l.checked);
      if (i.length > 1) {
        const l = {
          id: (/* @__PURE__ */ new Date()).getTime() + "G",
          isGroup: !0,
          groupTit: ""
        }, t = xt(i, l);
        return t.groupData.forEach((o) => {
          et(o.id);
        }), gt(t), Y(), kt(), O(u.value.filter((o) => o.id === t.id)[0]);
      }
      return kt(), null;
    }, $t = (i, l) => {
      const t = u.value.filter((o) => o.id === l)[0];
      if (t) {
        const o = t.groupData.filter((e) => e.id === i)[0];
        if (o)
          return t.groupData.length === 2 ? ut(l) : (delete o.inGroupId, delete o.groupW, delete o.groupH, delete o.groupX, delete o.groupY, delete o.isObstacle, et(o.id, t.id), gt(o), Y(), [O(u.value.filter((e) => e.id === i)[0])]);
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
    }, ut = (i) => {
      const l = u.value.filter((t) => t.id === i)[0];
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
    }, le = (i = "", l) => {
      const t = u.value.filter((o) => o.id === l)[0];
      if (t) {
        if (!t.groupTit || !i) {
          const e = getComputedStyle(L.value), f = parseInt(e.getPropertyValue("--group-tit-height").trim());
          t.groupTit && !i && (t.height -= f), !t.groupTit && i && (t.height += f);
        }
        t.groupTit = i;
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
    }, ie = () => (u.value.forEach((i) => {
      delete i.showPop, delete i.showSet, i.groupData && i.groupData.forEach((l) => {
        delete l.showPop, delete l.showSet;
      });
    }), { data: O(u.value), width: b });
    return se(() => {
      Yt.unobserve(L.value), window.removeEventListener("click", ht);
    }), N({ init: Jt, addItem: gt, deleteItem: et, updateItem: ft, openGroup: Lt, closeGroup: kt, changeGroupBorder: te, addGroup: ee, removeGroupItem: $t, removeGroup: ut, changeGroupTit: le, getData: ie }), (i, l) => (D(), S("div", {
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
          onMousedown: T((e) => E.seeModel || M($) || t.static === !0 || t.dragable === !1 ? null : Ut(e, o), ["prevent"]),
          onMouseenter: (e) => E.seeModel || M($) || M(I) || M(p) || !t.isGroup ? null : Qt(e, t),
          onMouseleave: (e) => E.seeModel || M($) || M(I) || M(p) || !t.isGroup ? null : Zt(e, t)
        }, [
          R("div", ue, [
            t.isGroup ? (D(), S(lt, { key: 0 }, [
              t.groupTit ? (D(), S("div", {
                key: 0,
                class: "group-item-tit",
                title: t.groupTit
              }, B(t.groupTit), 9, de)) : H("", !0),
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
                    it(i.$slots, "item", { data: e }, () => [
                      R("p", null, B(Math.round(e.width * 100) / 100) + "," + B(Math.round(e.height * 100) / 100), 1),
                      R("p", null, B(Math.round(e.x * 100) / 100) + "," + B(Math.round(e.y * 100) / 100), 1)
                    ])
                  ]),
                  !E.seeModel && !M($) && M(I) === null && M(p) === null ? (D(), S("div", {
                    key: 0,
                    class: "setting-box",
                    style: A({ display: e.showPop ? "flex" : "none" }),
                    onMousedown: T((c) => null, ["prevent", "stop"])
                  }, [
                    Nt(Kt, {
                      iconObj: E.settingIcon,
                      onClick: T((c) => Rt(e), ["prevent", "stop"])
                    }, null, 8, ["iconObj", "onClick"])
                  ], 36)) : H("", !0),
                  e.showPop ? (D(), S("div", {
                    key: 1,
                    class: "setting-box-pop",
                    onMousedown: T((c) => null, ["prevent", "stop"])
                  }, [
                    it(i.$slots, "setPopNormal", {
                      data: O(e)
                    }, () => [
                      R("div", {
                        class: "setting-box-pop-item",
                        onClick: (c) => $t(e.id, e.inGroupId)
                      }, "移出组合", 8, ye),
                      R("div", {
                        class: "setting-box-pop-item",
                        onClick: (c) => et(e.id, e.inGroupId)
                      }, "删除", 8, pe)
                    ])
                  ], 32)) : H("", !0)
                ], 6))), 128))
              ], 2)
            ], 64)) : (D(), S("div", ge, [
              it(i.$slots, "item", { data: t }, () => [
                R("p", null, B(Math.round(t.width * 100) / 100) + "," + B(Math.round(t.height * 100) / 100), 1),
                R("p", null, B(Math.round(t.x * 100) / 100) + "," + B(Math.round(t.y * 100) / 100), 1)
              ])
            ])),
            !t.isGroup && t.notGroup !== !0 && M($) ? (D(), S("div", {
              key: 2,
              class: Z(["group-checkbox", t.checked ? "is-checked" : "", t.disabled ? "disabled" : ""]),
              onClick: (e) => t.disabled ? null : jt(t)
            }, null, 10, fe)) : H("", !0),
            !E.seeModel && !M($) && M(I) === null && M(p) === null ? (D(), S("div", {
              key: 3,
              class: Z(["setting-box", t.isGroup === !0 ? "only-g" : ""]),
              style: A({ display: t.showPop || t.showSet ? "flex" : "none" }),
              onMousedown: T((e) => null, ["prevent", "stop"])
            }, [
              Nt(Kt, {
                iconObj: E.settingIcon,
                onClick: T((e) => Rt(t), ["prevent", "stop"])
              }, null, 8, ["iconObj", "onClick"])
            ], 38)) : H("", !0),
            t.showPop ? (D(), S("div", {
              key: 4,
              class: Z(["setting-box-pop", t.isGroup === !0 ? "special" : ""]),
              onMousedown: T((e) => null, ["prevent", "stop"])
            }, [
              t.isGroup === !0 ? it(i.$slots, "setPopSpecial", {
                key: 0,
                data: O(t)
              }, () => [
                E.hideTit ? H("", !0) : (D(), S("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (e) => X("showTitPop", t.groupTit, t.id)
                }, " 设置组合标题", 8, xe)),
                R("div", {
                  class: "setting-box-pop-item",
                  onClick: (e) => ut(t.id)
                }, "解除组合", 8, ve)
              ]) : it(i.$slots, "setPopNormal", {
                key: 1,
                data: O(t)
              }, () => [
                t.notGroup !== !0 ? (D(), S("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (e) => Lt(t.id)
                }, "组合", 8, we)) : H("", !0),
                R("div", {
                  class: "setting-box-pop-item",
                  onClick: (e) => et(t.id)
                }, "删除", 8, Me)
              ])
            ], 34)) : H("", !0)
          ]),
          !E.seeModel && !M($) && !t.showPop && !t.move && t.static !== !0 && t.resizable !== !1 ? (D(), S(lt, { key: 0 }, [
            M(_).indexOf("topLeft") !== -1 ? (D(), S("div", {
              key: 0,
              class: "resize-line top-left",
              onMousedown: T((e) => F(e, t, "top-left"), ["prevent", "stop"])
            }, null, 40, ke)) : H("", !0),
            M(_).indexOf("top") !== -1 ? (D(), S("div", {
              key: 1,
              class: "resize-line top",
              onMousedown: T((e) => F(e, t, "top"), ["prevent", "stop"])
            }, null, 40, Ee)) : H("", !0),
            M(_).indexOf("topRight") !== -1 ? (D(), S("div", {
              key: 2,
              class: "resize-line top-right",
              onMousedown: T((e) => F(e, t, "top-right"), ["prevent", "stop"])
            }, null, 40, De)) : H("", !0),
            M(_).indexOf("left") !== -1 ? (D(), S("div", {
              key: 3,
              class: "resize-line left",
              onMousedown: T((e) => F(e, t, "left"), ["prevent", "stop"])
            }, null, 40, Se)) : H("", !0),
            M(_).indexOf("right") !== -1 ? (D(), S("div", {
              key: 4,
              class: "resize-line right",
              onMousedown: T((e) => F(e, t, "right"), ["prevent", "stop"])
            }, null, 40, Oe)) : H("", !0),
            M(_).indexOf("bottomLeft") !== -1 ? (D(), S("div", {
              key: 5,
              class: "resize-line bottom-left",
              onMousedown: T((e) => F(e, t, "bottom-left"), ["prevent", "stop"])
            }, null, 40, Ge)) : H("", !0),
            M(_).indexOf("bottom") !== -1 ? (D(), S("div", {
              key: 6,
              class: "resize-line bottom",
              onMousedown: T((e) => F(e, t, "bottom"), ["prevent", "stop"])
            }, null, 40, Ie)) : H("", !0),
            M(_).indexOf("bottomRight") !== -1 ? (D(), S("div", {
              key: 7,
              class: "resize-line bottom-right",
              onMousedown: T((e) => F(e, t, "bottom-right"), ["prevent", "stop"])
            }, null, 40, We)) : H("", !0)
          ], 64)) : H("", !0)
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
        }, null, 4)) : H("", !0),
        R("div", {
          class: "height-bg",
          style: A({ height: (M(rt) > 0 ? +(M(rt) + (E.seeModel ? E.seeModelMinBg : 220)) : M(rt)) + "px" })
        }, null, 4),
        E.hideAuxiliary ? H("", !0) : (D(), S(lt, { key: 1 }, [
          M(ot) !== null ? (D(), S("div", {
            key: 0,
            class: "auxiliary-line hor",
            style: A({ top: M(ot) + "px", left: "0px" })
          }, null, 4)) : H("", !0),
          M(at) !== null ? (D(), S("div", {
            key: 1,
            class: "auxiliary-line hor",
            style: A({ top: M(at) + "px", left: "0px" })
          }, null, 4)) : H("", !0),
          M(st) !== null ? (D(), S("div", {
            key: 2,
            class: "auxiliary-line",
            style: A({ top: "0px", left: M(st) + "px" })
          }, null, 4)) : H("", !0),
          M(nt) !== null ? (D(), S("div", {
            key: 3,
            class: "auxiliary-line",
            style: A({ top: "0px", left: M(nt) + "px" })
          }, null, 4)) : H("", !0)
        ], 64)),
        M(u).length === 0 ? (D(), S("div", He, [
          it(i.$slots, "empty", {}, () => [
            l[0] || (l[0] = ne(" 暂无数据 "))
          ])
        ])) : H("", !0)
      ], 512)
    ], 512));
  }
}, ze = [Pe], Ce = {
  install(E) {
    ze.forEach((N) => {
      E.component("vueDragComponentPlus", N);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Ce);
export {
  Ce as default
};
