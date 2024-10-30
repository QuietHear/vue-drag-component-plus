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
    const X = St, v = E, G = (i) => {
      if (typeof i == "object" && !_t(i) && i !== null && !(i instanceof Date)) {
        let e = i instanceof Array ? [] : {};
        for (let t in i)
          e[t] = typeof i[t] == "object" && !_t(i[t]) && i[t] !== null && !(i[t] instanceof Date) ? G(i[t]) : i[t];
        return e;
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
      const e = G(i);
      if (i === null)
        ot.value = null, at.value = null, st.value = null, nt.value = null;
      else {
        const t = getComputedStyle(L.value), o = parseInt(t.getPropertyValue("--auxiliary-width").trim()), l = u.value.filter((a) => a.id !== e.id).map((a) => a.y), f = u.value.filter((a) => a.id !== e.id).map((a) => a.y + a.height - 1), c = [...l, ...f];
        c.sort(), c.filter((a) => a <= e.y && e.y - v.auxiliarySpace < a || a >= e.y && e.y + v.auxiliarySpace > a).length > 0 ? ot.value = e.y : ot.value = null, c.filter((a) => a <= e.y + e.height - 1 && e.y + e.height - 1 - v.auxiliarySpace < a || a >= e.y + e.height - 1 && e.y + e.height - 1 + v.auxiliarySpace > a).length > 0 ? at.value = e.y + e.height - o : at.value = null;
        const x = u.value.filter((a) => a.id !== e.id).map((a) => a.x), g = u.value.filter((a) => a.id !== e.id).map((a) => a.x + a.width - 1), n = [...x, ...g];
        n.sort(), n.filter((a) => a <= e.x && e.x - v.auxiliarySpace < a || a >= e.x && e.x + v.auxiliarySpace > a).length > 0 ? st.value = e.x : st.value = null, n.filter((a) => a <= e.x + e.width - 1 && e.x + e.width - 1 - v.auxiliarySpace < a || a >= e.x + e.width - 1 && e.x + e.width - 1 + v.auxiliarySpace > a).length > 0 ? nt.value = e.x + e.width - o : nt.value = null;
      }
    }, u = V([]), qt = (i, e) => {
      let t = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector;
      for (; i && !t.call(i, e); )
        i = i.parentElement;
      return i;
    };
    let I = null, It = null, Wt = null;
    const P = V({}), Ut = (i, e) => {
      ht(), I = e, P.value = G(u.value[I]), X("dragStart", G(u.value[I])), u.value[I].move = !0, m(u.value[I]);
      const t = qt(i.target, ".com-item");
      It = i.clientX - t.offsetLeft, Wt = i.clientY - t.offsetTop, window.addEventListener("mousemove", Ht), window.addEventListener("mouseup", Pt);
    }, Ht = (i) => {
      const e = i.clientX - It, t = i.clientY - Wt, o = e <= K("left") ? K("left") : e >= K("right") ? K("right") : e, l = t <= K("top") ? K("top") : t >= K("bottom") ? K("bottom") : t, f = o - u.value[I].x, c = l - u.value[I].y, x = `${f > 3 ? "right" : f < -3 ? "left" : ""}_${c > 0 ? "bottom" : c < 0 ? "top" : ""}`;
      u.value[I].x = o, u.value[I].y = l, m(u.value[I]);
      let g = G(u.value.filter((n) => n.move !== !0).filter((n) => n.x < o && n.x + n.width > o || n.x === o || n.x > o && n.x < o + u.value[I].width).filter((n) => n.y < l && n.y + n.height > l || n.y === l || n.y > l && n.y < l + u.value[I].height));
      if (g.length === 0)
        P.value.x = o, P.value.y = l;
      else {
        if (x.indexOf("top") !== -1) {
          g = g.filter((r) => r.y < P.value.y);
          const n = Math.min(...g.map((r) => r.y + r.height));
          g.forEach((r) => {
            Math.abs(r.y + r.height - n) < 5 && (r.y = n - r.height);
          });
          let a = P.value.y - l, y = !0, s = [...g];
          const d = (r) => {
            G(u.value.filter((h) => h.move !== !0 && h.y + h.height - r.y <= a + 3 && h.y + h.height - r.y >= 0).filter((h) => h.x < r.x && h.x + h.width > r.x || h.x >= r.x && h.x < r.x + r.width)).forEach((h) => {
              h.y + h.height !== r.y && (h.y = r.y - h.height), s.findIndex((O) => O.id === h.id) === -1 && (s.push(h), d(h));
            });
          };
          if (g.forEach((r) => {
            d(r);
          }), s.sort((r, w) => {
            const h = r.y, O = w.y;
            return h - O;
          }), (s.length === 0 || s.filter((r) => r.y === 0).length > 0) && (y = !1), y) {
            let r = 0;
            s.filter((h) => h.y === s[0].y).forEach((h) => {
              G(u.value.filter((k) => k.move !== !0 && k.y + k.height < h.y).filter((k) => k.x < h.x && k.x + k.width > h.x || k.x >= h.x && k.x < h.x + h.width)).forEach((k) => {
                k.y + k.height > r && (r = k.y + k.height);
              });
            }), r = s[0].y - r, r < a && (a = r), s.forEach((h) => {
              h.y -= a, u.value.filter((O) => O.id === h.id)[0].y = h.y;
            }), P.value.x = o, P.value.y = u.value.filter((h) => h.id === s[s.length - 1].id)[0].y + u.value.filter((h) => h.id === s[s.length - 1].id)[0].height;
          } else {
            let r = 0;
            g.forEach((O) => {
              const k = u.value.filter((C) => C.move !== !0).filter((C) => C.x < O.x && C.x + C.width > O.x || C.x === O.x || C.x > O.x && C.x < O.x + O.width).filter((C) => C.y > O.y + O.height);
              k.length > 0 && (r = Math.min(...k.map((C) => C.y)));
            });
            const w = r === 0 ? 0 : r - P.value.height - (Math.max(...g.map((O) => O.y + O.height)) - Math.min(...g.map((O) => O.y))), h = w === 0 ? l + P.value.height - Math.min(...g.map((O) => O.y)) : r - Math.min(...g.map((O) => O.y)) - (Math.max(...g.map((O) => O.y + O.height)) - Math.min(...g.map((O) => O.y)));
            if (w === 0 || l <= w) {
              g.filter((k) => k.y < P.value.y).forEach((k) => {
                k.y += h, u.value.filter((C) => C.id === k.id)[0].y = k.y;
              }), P.value.x = o, P.value.y = l;
              const O = (k) => {
                u.value.filter((z) => z.move !== !0 && z.id !== k.id).filter((z) => z.x < k.x && z.x + z.width > k.x || z.x === k.x || z.x > k.x && z.x < k.x + k.width).filter((z) => z.y < k.y && z.y + z.height > k.y || z.y === k.y || z.y > k.y && z.y < k.y + k.height).forEach((z) => {
                  z.y = k.y + k.height, O(z);
                });
              };
              u.value.forEach((k) => O(k));
            }
          }
          g = G(u.value.filter((r) => r.move !== !0).filter((r) => r.x < o && r.x + r.width > o || r.x === o || r.x > o && r.x < o + u.value[I].width).filter((r) => r.y < l && r.y + r.height > l || r.y === l || r.y > l && r.y < l + u.value[I].height));
        }
        if (x.indexOf("bottom") !== -1) {
          let n = 0;
          g.forEach((s) => {
            const d = u.value.filter((r) => r.move !== !0).filter((r) => r.x < s.x && r.x + r.width > s.x || r.x === s.x || r.x > s.x && r.x < s.x + s.width).filter((r) => r.y + r.height < s.y);
            d.length > 0 && (n = Math.max(...d.map((r) => r.y + r.height)));
          });
          const a = n + (Math.max(...g.map((s) => s.height + s.y)) - Math.min(...g.map((s) => s.y))), y = Math.min(...g.map((s) => s.y)) - n;
          if (l >= a) {
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
            u.value.forEach((r) => d(r)), g = G(u.value.filter((r) => r.move !== !0).filter((r) => r.x < o && r.x + r.width > o || r.x === o || r.x > o && r.x < o + u.value[I].width).filter((r) => r.y < l && r.y + r.height > l || r.y === l || r.y > l && r.y < l + u.value[I].height));
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
              const y = G(u.value);
              for (let s = 0; s <= a; s++) {
                let d = null;
                const r = y.filter((w) => w.move !== !0 && w.y < g[s].y).filter((w) => w.x < g[s].x && w.x + w.width > g[s].x || w.x === g[s].x || w.x > g[s].x && w.x < g[s].x + g[s].width);
                if (r.length === 0 ? d = 0 : d = Math.max(...r.map((w) => w.y + w.height)), s === a) {
                  if (g[s].y - (g[s].y + g[s].height - l) < d) {
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
              g[a].y -= g[a].y + g[a].height - l, u.value.filter((y) => y.id === g[a].id)[0].y = g[a].y;
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
      Y(!1), X("dragIng", G(u.value[I]));
    }, Pt = () => {
      window.removeEventListener("mousemove", Ht), window.removeEventListener("mouseup", Pt), delete u.value[I].move, u.value[I].x = P.value.x, u.value[I].y = P.value.y, m(null), Y(), X("dragEnd", G(u.value[I])), I = null;
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
    const F = (i, e, t) => {
      ht(), p = e, X("resizeStart", G(p)), wt = t, dt = i.clientX, ct = i.clientY, q = e.width, U = e.height, J = e.y, Q = e.x, p.drag = !0, m(p);
      const o = u.value.filter((n) => n.static === !0 && (n.x < e.x ? n.x + n.width >= e.x : n.x <= e.x + e.width)), l = u.value.filter((n) => n.static === !0 && (n.y < e.y ? n.y + n.height >= e.y : n.y <= e.y + e.height)), f = o.filter((n) => n.y + n.height <= e.y).map((n) => n.y + n.height);
      f.length > 0 ? j = Math.max(...f) : j = 0;
      const c = o.filter((n) => n.y >= e.y + e.height).map((n) => n.y);
      c.length > 0 ? yt = Math.min(...c) : yt = 0;
      const x = l.filter((n) => n.x + n.width <= e.x).map((n) => n.x + n.width);
      x.length > 0 ? tt = Math.max(...x) : tt = 0;
      const g = l.filter((n) => n.x >= e.x + e.width).map((n) => n.x);
      g.length > 0 ? pt = Math.min(...g) : pt = 0, window.addEventListener("mousemove", zt), window.addEventListener("mouseup", Ct);
    }, zt = (i) => {
      const e = q + (i.clientX - dt), t = U + (i.clientY - ct), o = q - (i.clientX - dt), l = U - (i.clientY - ct), f = J + (i.clientY - ct), c = Q + (i.clientX - dt), x = getComputedStyle(L.value), g = parseInt(x.getPropertyValue("--com-item-border-width").trim()), n = parseInt(x.getPropertyValue("--group-tit-height").trim());
      switch (wt) {
        case "top-left":
          if (p.height = l < v.itemMinHeight ? v.itemMinHeight : l > W("top") ? W("top") : l, p.y = l < v.itemMinHeight ? J + U - v.itemMinHeight : l > W("top") ? j : f, p.width = o < v.itemMinWidth ? v.itemMinWidth : o > W("left") ? W("left") : o, p.x = o < v.itemMinWidth ? Q + q - v.itemMinWidth : o > W("left") ? tt : c, p.isGroup === !0) {
            const y = p.width - 2 * g, s = p.height - 2 * g - (p.groupTit ? n : 0);
            p.groupData.forEach((d) => {
              d.width = y * d.groupW, d.x = y * d.groupX, d.height = s * d.groupH, d.y = s * d.groupY;
            });
          }
          break;
        case "top":
          if (p.height = l < v.itemMinHeight ? v.itemMinHeight : l > W("top") ? W("top") : l, p.y = l < v.itemMinHeight ? J + U - v.itemMinHeight : l > W("top") ? j : f, p.isGroup === !0) {
            const y = p.height - 2 * g - (p.groupTit ? n : 0);
            p.groupData.forEach((s) => {
              s.height = y * s.groupH, s.y = y * s.groupY;
            });
          }
          break;
        case "top-right":
          if (p.height = l < v.itemMinHeight ? v.itemMinHeight : l > W("top") ? W("top") : l, p.y = l < v.itemMinHeight ? J + U - v.itemMinHeight : l > W("top") ? j : f, p.width = e < v.itemMinWidth ? v.itemMinWidth : e > W("right") ? W("right") : e, p.isGroup === !0) {
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
          if (p.width = e < v.itemMinWidth ? v.itemMinWidth : e > W("right") ? W("right") : e, p.isGroup === !0) {
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
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > W("bottom") ? W("bottom") : t, p.width = e < v.itemMinWidth ? v.itemMinWidth : e > W("right") ? W("right") : e, p.isGroup === !0) {
            const y = p.width - 2 * g, s = p.height - 2 * g - (p.groupTit ? n : 0);
            p.groupData.forEach((d) => {
              d.width = y * d.groupW, d.x = y * d.groupX, d.height = s * d.groupH, d.y = s * d.groupY;
            });
          }
          break;
      }
      m(p);
      let a = G(u.value.filter((y) => y.drag !== !0).filter((y) => y.x < p.x && y.x + y.width > p.x || y.x === p.x || y.x > p.x && y.x < p.x + p.width).filter((y) => y.y < p.y && y.y + y.height > p.y || y.y === p.y || y.y > p.y && y.y < p.y + p.height));
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
      Y(!1), X("resizeIng", G(p));
    }, Ct = (i) => {
      delete p.drag, wt = "", m(null), window.removeEventListener("mousemove", zt), window.removeEventListener("mouseup", Ct), Y(), X("resizeEnd", G(p)), p = null;
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
      const e = u.value.map((t) => t.y + t.height);
      e.length > 0 ? rt.value = Math.max(...e) : rt.value = 0;
    };
    Bt(
      () => v.ySpace,
      () => {
        v.ySpace >= 0 && Tt();
      }
    );
    const Tt = () => {
      const i = G(u.value).sort((e, t) => {
        const o = e.y, l = t.y;
        return o - l;
      });
      for (let e = 0; e < i.length; e++) {
        if (e === 0 && i[e].y > 0) {
          const t = i[e].y;
          for (let o = e; o < i.length; o++)
            i[o].y -= t, u.value.filter((l) => l.id === i[o].id)[0].y = i[o].y;
        }
        if (e < i.length - 1 && i[e + 1].y > i[e].y + i[e].height) {
          const t = G(i.slice(0, e + 1));
          if (i[e + 1].y > Math.max(...t.map((o) => o.y + o.height))) {
            const o = i[e + 1].y - Math.max(...t.map((l) => l.y + l.height));
            for (let l = e + 1; l < i.length; l++)
              i[l].y -= o, u.value.filter((f) => f.id === i[l].id)[0].y = i[l].y;
          }
        }
      }
      for (let e = 0; e < i.length - 1; e++) {
        let t = i.findIndex((o) => o.y === i[e].y + i[e].height);
        if (t !== -1)
          for (let o = t; o < i.length; o++)
            i[o].y += v.ySpace, u.value.filter((l) => l.id === i[o].id)[0].y = i[o].y;
      }
      v.addFirstSpace && u.value.forEach((e) => e.y += v.ySpace);
    };
    ae(() => {
      Yt.observe(L.value);
    });
    const Yt = new ResizeObserver((i) => {
      mt(b === i[0].contentRect.width ? null : i[0].contentRect.width, Gt === i[0].contentRect.height ? null : i[0].contentRect.height);
    });
    let Mt = !1;
    const Jt = (i = [], e = null) => {
      u.value = G(i), u.value.filter((t) => t.isGroup === !0).forEach((t) => {
        if (t.isGroup === !0)
          if (t.groupData.length < 2)
            ut(t.id);
          else {
            const o = xt(t.groupData, t);
            ft(o);
          }
      }), e !== null ? bt(() => {
        const o = L.value.getBoundingClientRect().width / e, l = getComputedStyle(L.value), f = parseInt(l.getPropertyValue("--com-item-border-width").trim()), c = parseInt(l.getPropertyValue("--group-tit-height").trim());
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
    }, Qt = (i, e) => {
      e.showSet = !0;
    }, Zt = (i, e) => {
      delete e.showSet;
    }, Xt = (i, e, t) => {
      const o = e.map((c) => c.y), l = Math.max(...o), f = e.filter((c) => c.y + c.height > l);
      f.sort((c, x) => {
        const g = c.x, n = x.x;
        return g - n;
      });
      for (let c = 0; c < f.length; c++) {
        if (c === 0 && f[c].x >= i.width) {
          i.y = l, i.x = 0;
          break;
        }
        if (f.length > 1 && c !== f.length - 1 && f[c].x + f[c].width + i.width <= f[c + 1].x) {
          i.y = l, i.x = f[c].x + f[c].width;
          break;
        }
        if (c === f.length - 1 && f[c].x + f[c].width + i.width <= t) {
          i.y = l, i.x = f[c].x + f[c].width;
          break;
        }
      }
      if (i.y == null) {
        i.x = 0;
        const c = e.map((x) => x.y + x.height);
        i.y = Math.max(...c);
      }
    }, gt = (i, e = null, t = !1) => {
      const o = G(i), l = u.value.filter((f) => f.id === e);
      if (o.id || (o.id = (/* @__PURE__ */ new Date()).getTime() + ""), e && l.length !== 1) {
        try {
        } catch {
        }
        return;
      }
      if (t !== !0)
        if (delete o.x, delete o.y, e) {
          const f = getComputedStyle(L.value), c = parseInt(f.getPropertyValue("--com-item-border-width").trim());
          Xt(o, l[0].groupData, l[0].width - 2 * c);
        } else
          u.value.length === 0 ? (o.x = 0, o.y = 0) : Xt(o, u.value, b);
      if (e) {
        l[0].groupData.push(o);
        const f = xt(l[0].groupData, l[0]);
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
    }, et = (i, e = null) => {
      let t = -1;
      const o = u.value.filter((l) => l.id === e);
      if (e ? o.length === 1 && (t = o[0].groupData.findIndex((l) => l.id === i)) : t = u.value.findIndex((l) => l.id === i), t !== -1) {
        if (e)
          if (o[0].groupData.splice(t, 1), o[0].groupData.length === 1)
            ut(e);
          else {
            const l = xt(o[0].groupData, o[0]);
            ft(l);
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
        const e = G(i);
        delete e.showPop, delete e.showSet, e.groupData && e.groupData.forEach((l) => {
          delete l.showPop, delete l.showSet;
        });
        let t = -1;
        const o = u.value.filter((l) => l.id === e.inGroupId);
        if (e.inGroupId ? o.length === 1 && (t = o[0].groupData.findIndex((l) => l.id === e.id)) : t = u.value.findIndex((l) => l.id === e.id), t !== -1)
          e.inGroupId ? o[0].groupData[t] = e : u.value[t] = e, Y();
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, mt = (i, e) => {
      if (i !== null) {
        const t = b ? i / b : 1;
        b = i;
        const o = getComputedStyle(L.value), l = parseInt(o.getPropertyValue("--com-item-border-width").trim()), f = parseInt(o.getPropertyValue("--group-tit-height").trim());
        Mt || (u.value.forEach((c) => {
          if (c.width *= t, c.height *= t, c.x *= t, c.y *= t, c.isGroup === !0) {
            const x = c.width - 2 * l, g = c.height - 2 * l - (c.groupTit ? f : 0);
            c.groupData.forEach((n) => {
              n.width = x * n.groupW, n.x = x * n.groupX, n.height = g * n.groupH, n.y = g * n.groupY;
            });
          }
        }), Y());
      }
      e !== null && (Gt = e);
    }, Rt = (i) => {
      i.showPop || (u.value.forEach((e) => {
        delete e.showPop, e.groupData && e.groupData.forEach((t) => {
          delete t.showPop;
        });
      }), X("openSetMenu", G(i)), i.showPop = !0, window.addEventListener("click", ht));
    }, ht = () => {
      u.value.forEach((i) => {
        delete i.showPop, i.groupData && i.groupData.forEach((e) => {
          delete e.showPop;
        });
      }), window.removeEventListener("click", ht);
    }, $ = V(!1), Lt = (i) => {
      const e = u.value.findIndex((t) => t.id === i);
      if (e !== -1)
        u.value[e].checked = !0, u.value[e].disabled = !0, $.value = !0, X("showGroup", $.value);
      else
        try {
        } catch {
        }
    }, kt = () => {
      $.value = !1, u.value.forEach((i) => {
        delete i.checked, delete i.disabled, i.groupData && i.groupData.forEach((e) => {
          delete e.checked, delete e.disabled;
        });
      }), X("showGroup", $.value);
    }, jt = (i) => {
      i.checked = !i.checked, X("updateChecked", u.value.filter((e) => e.checked).length);
    }, xt = (i, e) => {
      const t = G(i), o = G(e);
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
          const y = G(t.slice(0, a + 1));
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
          const y = G(t.slice(0, a + 1));
          if (t[a + 1].y > Math.max(...y.map((s) => s.y + s.height))) {
            const s = t[a + 1].y - Math.max(...y.map((d) => d.y + d.height));
            for (let d = a + 1; d < t.length; d++)
              t[d].y -= s;
          }
        }
      }
      const l = t.map((a) => a.x + a.width), f = Math.max(...l), c = t.map((a) => a.y + a.height), x = Math.max(...c);
      t.forEach((a) => {
        a.inGroupId || (a.inGroupId = o.id), a.groupW = a.width / f, a.groupH = a.height / x, a.groupX = a.x / f, a.groupY = a.y / x, a.isObstacle = a.x + a.width === f && a.y === 0;
      });
      const g = getComputedStyle(L.value), n = parseInt(g.getPropertyValue("--com-item-border-width").trim());
      return o.width = f + 2 * n, o.height = x + 2 * n, o.groupData = [...t], o;
    }, te = () => {
      bt(() => {
        const i = getComputedStyle(L.value), e = parseInt(i.getPropertyValue("--com-item-border-width").trim()), t = parseInt(i.getPropertyValue("--group-tit-height").trim());
        u.value.filter((o) => o.isGroup === !0).forEach((o) => {
          const l = o.width - 2 * e, f = o.height - 2 * e - (o.groupTit ? t : 0);
          o.groupData.forEach((c) => {
            c.width = l * c.groupW, c.x = l * c.groupX, c.height = f * c.groupH, c.y = f * c.groupY;
          });
        });
      });
    }, ee = () => {
      const i = u.value.filter((e) => e.checked);
      if (i.length > 1) {
        const e = {
          id: (/* @__PURE__ */ new Date()).getTime() + "G",
          isGroup: !0,
          groupTit: ""
        }, t = xt(i, e);
        return t.groupData.forEach((o) => {
          et(o.id);
        }), gt(t), Y(), kt(), G(u.value.filter((o) => o.id === t.id)[0]);
      }
      return kt(), null;
    }, $t = (i, e) => {
      const t = u.value.filter((o) => o.id === e)[0];
      if (t) {
        const o = t.groupData.filter((l) => l.id === i)[0];
        if (o)
          t.groupData.length === 2 ? ut(e) : (delete o.inGroupId, delete o.groupW, delete o.groupH, delete o.groupX, delete o.groupY, delete o.isObstacle, et(o.id, t.id), gt(o), Y());
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, ut = (i) => {
      const e = u.value.filter((t) => t.id === i)[0];
      if (e)
        e.groupData.forEach((t) => {
          delete t.inGroupId, delete t.groupW, delete t.groupH, delete e.groupX, delete e.groupY, delete e.isObstacle, t.x += e.x, t.y += e.y, gt(t, null, !0);
        }), et(e.id), Y();
      else
        try {
        } catch {
        }
    }, le = (i = "", e) => {
      const t = u.value.filter((o) => o.id === e)[0];
      if (t) {
        if (!t.groupTit || !i) {
          const l = getComputedStyle(L.value), f = parseInt(l.getPropertyValue("--group-tit-height").trim());
          t.groupTit && !i && (t.height -= f), !t.groupTit && i && (t.height += f);
        }
        t.groupTit = i;
        const o = (l) => {
          u.value.filter((c) => c.id !== l.id).filter((c) => c.x < l.x && c.x + c.width > l.x || c.x === l.x || c.x > l.x && c.x < l.x + l.width).filter((c) => c.y < l.y && c.y + c.height > l.y || c.y === l.y || c.y > l.y && c.y < l.y + l.height).forEach((c) => {
            c.y = l.y + l.height, o(c);
          });
        };
        o(t), Y();
      } else
        try {
        } catch {
        }
    }, ie = () => (u.value.forEach((i) => {
      delete i.showPop, delete i.showSet, i.groupData && i.groupData.forEach((e) => {
        delete e.showPop, delete e.showSet;
      });
    }), { data: G(u.value), width: b });
    return se(() => {
      Yt.unobserve(L.value), window.removeEventListener("click", ht);
    }), N({ init: Jt, addItem: gt, deleteItem: et, updateItem: ft, openGroup: Lt, closeGroup: kt, changeGroupBorder: te, addGroup: ee, removeGroupItem: $t, removeGroup: ut, changeGroupTit: le, getData: ie }), (i, e) => (D(), S("div", {
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
          onMousedown: T((l) => E.seeModel || M($) || t.static === !0 || t.dragable === !1 ? null : Ut(l, o), ["prevent"]),
          onMouseenter: (l) => E.seeModel || M($) || M(I) || M(p) || !t.isGroup ? null : Qt(l, t),
          onMouseleave: (l) => E.seeModel || M($) || M(I) || M(p) || !t.isGroup ? null : Zt(l, t)
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
                (D(!0), S(lt, null, Dt(t.groupData, (l, f) => (D(), S("div", {
                  class: Z(["com-item-box-child", l.isObstacle ? "else" : ""]),
                  style: A({
                    width: l.width + "px",
                    height: l.height + "px",
                    top: l.y + "px",
                    left: l.x + "px"
                  }),
                  key: f
                }, [
                  R("div", ce, [
                    it(i.$slots, "item", { data: l }, () => [
                      R("p", null, B(Math.round(l.width * 100) / 100) + "," + B(Math.round(l.height * 100) / 100), 1),
                      R("p", null, B(Math.round(l.x * 100) / 100) + "," + B(Math.round(l.y * 100) / 100), 1)
                    ])
                  ]),
                  !E.seeModel && !M($) && M(I) === null && M(p) === null ? (D(), S("div", {
                    key: 0,
                    class: "setting-box",
                    style: A({ display: l.showPop ? "flex" : "none" }),
                    onMousedown: T((c) => null, ["prevent", "stop"])
                  }, [
                    Nt(Kt, {
                      iconObj: E.settingIcon,
                      onClick: T((c) => Rt(l), ["prevent", "stop"])
                    }, null, 8, ["iconObj", "onClick"])
                  ], 36)) : H("", !0),
                  l.showPop ? (D(), S("div", {
                    key: 1,
                    class: "setting-box-pop",
                    onMousedown: T((c) => null, ["prevent", "stop"])
                  }, [
                    it(i.$slots, "setPopNormal", {
                      data: G(l)
                    }, () => [
                      R("div", {
                        class: "setting-box-pop-item",
                        onClick: (c) => $t(l.id, l.inGroupId)
                      }, "移出组合", 8, ye),
                      R("div", {
                        class: "setting-box-pop-item",
                        onClick: (c) => et(l.id, l.inGroupId)
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
              onClick: (l) => t.disabled ? null : jt(t)
            }, null, 10, fe)) : H("", !0),
            !E.seeModel && !M($) && M(I) === null && M(p) === null ? (D(), S("div", {
              key: 3,
              class: Z(["setting-box", t.isGroup === !0 ? "only-g" : ""]),
              style: A({ display: t.showPop || t.showSet ? "flex" : "none" }),
              onMousedown: T((l) => null, ["prevent", "stop"])
            }, [
              Nt(Kt, {
                iconObj: E.settingIcon,
                onClick: T((l) => Rt(t), ["prevent", "stop"])
              }, null, 8, ["iconObj", "onClick"])
            ], 38)) : H("", !0),
            t.showPop ? (D(), S("div", {
              key: 4,
              class: Z(["setting-box-pop", t.isGroup === !0 ? "special" : ""]),
              onMousedown: T((l) => null, ["prevent", "stop"])
            }, [
              t.isGroup === !0 ? it(i.$slots, "setPopSpecial", {
                key: 0,
                data: G(t)
              }, () => [
                E.hideTit ? H("", !0) : (D(), S("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (l) => X("showTitPop", t.groupTit, t.id)
                }, " 设置组合标题", 8, xe)),
                R("div", {
                  class: "setting-box-pop-item",
                  onClick: (l) => ut(t.id)
                }, "解除组合", 8, ve)
              ]) : it(i.$slots, "setPopNormal", {
                key: 1,
                data: G(t)
              }, () => [
                t.notGroup !== !0 ? (D(), S("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (l) => Lt(t.id)
                }, "组合", 8, we)) : H("", !0),
                R("div", {
                  class: "setting-box-pop-item",
                  onClick: (l) => et(t.id)
                }, "删除", 8, Me)
              ])
            ], 34)) : H("", !0)
          ]),
          !E.seeModel && !M($) && !t.move && t.static !== !0 && t.resizable !== !1 ? (D(), S(lt, { key: 0 }, [
            M(_).indexOf("topLeft") !== -1 ? (D(), S("div", {
              key: 0,
              class: "resize-line top-left",
              onMousedown: T((l) => F(l, t, "top-left"), ["prevent", "stop"])
            }, null, 40, ke)) : H("", !0),
            M(_).indexOf("top") !== -1 ? (D(), S("div", {
              key: 1,
              class: "resize-line top",
              onMousedown: T((l) => F(l, t, "top"), ["prevent", "stop"])
            }, null, 40, Ee)) : H("", !0),
            M(_).indexOf("topRight") !== -1 ? (D(), S("div", {
              key: 2,
              class: "resize-line top-right",
              onMousedown: T((l) => F(l, t, "top-right"), ["prevent", "stop"])
            }, null, 40, De)) : H("", !0),
            M(_).indexOf("left") !== -1 ? (D(), S("div", {
              key: 3,
              class: "resize-line left",
              onMousedown: T((l) => F(l, t, "left"), ["prevent", "stop"])
            }, null, 40, Se)) : H("", !0),
            M(_).indexOf("right") !== -1 ? (D(), S("div", {
              key: 4,
              class: "resize-line right",
              onMousedown: T((l) => F(l, t, "right"), ["prevent", "stop"])
            }, null, 40, Oe)) : H("", !0),
            M(_).indexOf("bottomLeft") !== -1 ? (D(), S("div", {
              key: 5,
              class: "resize-line bottom-left",
              onMousedown: T((l) => F(l, t, "bottom-left"), ["prevent", "stop"])
            }, null, 40, Ge)) : H("", !0),
            M(_).indexOf("bottom") !== -1 ? (D(), S("div", {
              key: 6,
              class: "resize-line bottom",
              onMousedown: T((l) => F(l, t, "bottom"), ["prevent", "stop"])
            }, null, 40, Ie)) : H("", !0),
            M(_).indexOf("bottomRight") !== -1 ? (D(), S("div", {
              key: 7,
              class: "resize-line bottom-right",
              onMousedown: T((l) => F(l, t, "bottom-right"), ["prevent", "stop"])
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
            e[0] || (e[0] = ne(" 暂无数据 "))
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
