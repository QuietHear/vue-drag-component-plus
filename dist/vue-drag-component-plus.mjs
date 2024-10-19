import { resolveComponent as ee, openBlock as k, createBlock as Mt, resolveDynamicComponent as $t, normalizeProps as Vt, mergeProps as xt, withCtx as le, createElementBlock as O, toDisplayString as V, watch as At, ref as R, onMounted as ie, onBeforeUnmount as re, createElementVNode as X, Fragment as tt, renderList as kt, unref as E, normalizeClass as et, normalizeStyle as L, withModifiers as T, createCommentVNode as I, renderSlot as lt, createVNode as Bt, createTextVNode as oe, isVNode as _t, nextTick as Nt } from "vue";
const bt = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(M) {
    return (A, Et) => {
      const J = ee("el-icon");
      return M.iconObj.type === "custom" ? (k(), Mt($t(M.iconObj.icon), Vt(xt({ key: 0 }, M.iconObj.attrs)), null, 16)) : M.iconObj.type === "el" ? (k(), Mt(J, Vt(xt({ key: 1 }, M.iconObj.attrs)), {
        default: le(() => [
          (k(), Mt($t(M.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : M.iconObj.type === "iconfont" ? (k(), O("i", xt({
        key: 2,
        class: ["icon iconfont", "icon-" + M.iconObj.icon]
      }, M.iconObj.attrs), null, 16)) : (k(), O("i", xt({
        key: 3,
        class: M.iconObj.type
      }, M.iconObj.attrs), V(M.iconObj.icon), 17));
    };
  }
};
const se = ["onMousedown"], ne = { class: "com-item-box" }, ae = ["title"], he = { class: "com-item-box-content" }, ue = ["onClick"], ce = ["onClick"], de = {
  key: 1,
  class: "com-item-box-content"
}, ye = ["onClick"], pe = ["onClick"], ge = ["onClick"], fe = ["onClick"], xe = ["onClick"], ve = ["onMousedown"], we = ["onMousedown"], Me = ["onMousedown"], ke = ["onMousedown"], Ee = ["onMousedown"], De = ["onMousedown"], Oe = ["onMousedown"], Ge = ["onMousedown"], We = {
  key: 2,
  class: "com-empty"
}, He = {
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
    // 预览模式底部最小留白
    seeModelMinBg: {
      type: Number,
      default: 50,
      validator(M, A) {
        return M >= 0;
      }
    },
    // 组件项最小宽度
    itemMinWidth: {
      type: Number,
      default: 15,
      validator(M, A) {
        return M >= 15;
      }
    },
    // 组件项最小高度
    itemMinHeight: {
      type: Number,
      default: 15,
      validator(M, A) {
        return M >= 15;
      }
    },
    // 纵向相邻元素的自动间距
    ySpace: {
      type: Number,
      default: 7,
      validator(M, A) {
        return M >= 0;
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
      validator(M, A) {
        return M >= 1;
      }
    }
  },
  emits: ["showGroup", "updateChecked", "showTitPop"],
  setup(M, { expose: A, emit: Et }) {
    const J = Et, w = M, P = (i) => {
      if (typeof i == "object" && !_t(i) && i !== null && !(i instanceof Date)) {
        let e = i instanceof Array ? [] : {};
        for (let t in i)
          e[t] = typeof i[t] == "object" && !_t(i[t]) && i[t] !== null && !(i[t] instanceof Date) ? P(i[t]) : i[t];
        return e;
      } else
        return i;
    }, Dt = () => {
      w.insertResizeKeys.forEach((i) => {
        w.excludeResizeKeys.indexOf(i) === -1 && B.value.push(i);
      });
    };
    At(
      () => [w.insertResizeKeys, w.excludeResizeKeys],
      () => {
        Dt();
      }
    );
    const B = R([]);
    Dt();
    const z = R(null);
    let _ = null, Ot = null;
    const Kt = R(null), it = R(0), rt = R(null), ot = R(null), st = R(null), nt = R(null), Q = (i) => {
      const e = P(i);
      if (i === null)
        rt.value = null, ot.value = null, st.value = null, nt.value = null;
      else {
        const t = getComputedStyle(z.value), r = parseInt(t.getPropertyValue("--auxiliary-width").trim()), l = c.value.filter((o) => o.id !== e.id).map((o) => o.y), x = c.value.filter((o) => o.id !== e.id).map((o) => o.y + o.height - 1), u = [...l, ...x];
        u.sort(), u.filter((o) => o <= e.y && e.y - w.auxiliarySpace < o || o >= e.y && e.y + w.auxiliarySpace > o).length > 0 ? rt.value = e.y : rt.value = null, u.filter((o) => o <= e.y + e.height - 1 && e.y + e.height - 1 - w.auxiliarySpace < o || o >= e.y + e.height - 1 && e.y + e.height - 1 + w.auxiliarySpace > o).length > 0 ? ot.value = e.y + e.height - r : ot.value = null;
        const v = c.value.filter((o) => o.id !== e.id).map((o) => o.x), g = c.value.filter((o) => o.id !== e.id).map((o) => o.x + o.width - 1), a = [...v, ...g];
        a.sort(), a.filter((o) => o <= e.x && e.x - w.auxiliarySpace < o || o >= e.x && e.x + w.auxiliarySpace > o).length > 0 ? st.value = e.x : st.value = null, a.filter((o) => o <= e.x + e.width - 1 && e.x + e.width - 1 - w.auxiliarySpace < o || o >= e.x + e.width - 1 && e.x + e.width - 1 + w.auxiliarySpace > o).length > 0 ? nt.value = e.x + e.width - r : nt.value = null;
      }
    }, c = R([]), qt = (i, e) => {
      let t = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector;
      for (; i && !t.call(i, e); )
        i = i.parentElement;
      return i;
    };
    let W = null, Gt = null, Wt = null;
    const C = R({}), Ft = (i, e) => {
      at(), W = e, C.value = P(c.value[W]), c.value[W].move = !0, Q(c.value[W]);
      const t = qt(i.target, ".com-item");
      Gt = i.clientX - t.offsetLeft, Wt = i.clientY - t.offsetTop, window.addEventListener("mousemove", Ht), window.addEventListener("mouseup", It);
    }, Ht = (i) => {
      const e = i.clientX - Gt, t = i.clientY - Wt, r = e <= N("left") ? N("left") : e >= N("right") ? N("right") : e, l = t <= N("top") ? N("top") : t >= N("bottom") ? N("bottom") : t, x = r - c.value[W].x, u = l - c.value[W].y, v = `${x > 3 ? "right" : x < -3 ? "left" : ""}_${u > 0 ? "bottom" : u < 0 ? "top" : ""}`;
      c.value[W].x = r, c.value[W].y = l, Q(c.value[W]);
      let g = P(c.value.filter((a) => a.move !== !0).filter((a) => a.x < r && a.x + a.width > r || a.x === r || a.x > r && a.x < r + c.value[W].width).filter((a) => a.y < l && a.y + a.height > l || a.y === l || a.y > l && a.y < l + c.value[W].height));
      if (g.length === 0)
        C.value.x = r, C.value.y = l;
      else {
        if (v.indexOf("top") !== -1) {
          g = g.filter((h) => h.y < C.value.y);
          const a = Math.min(...g.map((h) => h.y + h.height));
          g.forEach((h) => {
            Math.abs(h.y + h.height - a) < 5 && (h.y = a - h.height);
          });
          let o = C.value.y - l, d = !0, n = [...g];
          const s = (h) => {
            P(c.value.filter((y) => y.move !== !0 && y.y + y.height - h.y <= o + 3 && y.y + y.height - h.y >= 0).filter((y) => y.x < h.x && y.x + y.width > h.x || y.x >= h.x && y.x < h.x + h.width)).forEach((y) => {
              y.y + y.height !== h.y && (y.y = h.y - y.height), n.findIndex((H) => H.id === y.id) === -1 && (n.push(y), s(y));
            });
          };
          if (g.forEach((h) => {
            s(h);
          }), n.sort((h, f) => {
            const y = h.y, H = f.y;
            return y - H;
          }), (n.length === 0 || n.filter((h) => h.y === 0).length > 0) && (d = !1), d) {
            let h = 0;
            n.filter((y) => y.y === n[0].y).forEach((y) => {
              P(c.value.filter((D) => D.move !== !0 && D.y + D.height < y.y).filter((D) => D.x < y.x && D.x + D.width > y.x || D.x >= y.x && D.x < y.x + y.width)).forEach((D) => {
                D.y + D.height > h && (h = D.y + D.height);
              });
            }), h = n[0].y - h, h < o && (o = h), n.forEach((y) => {
              y.y -= o, c.value.filter((H) => H.id === y.id)[0].y = y.y;
            }), C.value.x = r, C.value.y = c.value.filter((y) => y.id === n[n.length - 1].id)[0].y + c.value.filter((y) => y.id === n[n.length - 1].id)[0].height;
          } else {
            const h = Math.min(...g.map((f) => f.y));
            h - l >= -7 && h - l < 7 && (g.filter((f) => f.y < C.value.y).forEach((f) => {
              f.y += c.value[W].height, c.value.filter((H) => H.id === f.id)[0].y = f.y;
              const y = (H) => {
                c.value.filter((S) => S.move !== !0 && S.id !== H.id).filter((S) => S.x < H.x && S.x + S.width > H.x || S.x === H.x || S.x > H.x && S.x < H.x + H.width).filter((S) => S.y < H.y && S.y + S.height > H.y || S.y === H.y || S.y > H.y && S.y < H.y + H.height).forEach((S) => {
                  S.y = H.y + H.height, y(S);
                });
              };
              y(f);
            }), C.value.x = r, C.value.y = h);
          }
          g = P(c.value.filter((h) => h.move !== !0).filter((h) => h.x < r && h.x + h.width > r || h.x === r || h.x > r && h.x < r + c.value[W].width).filter((h) => h.y < l && h.y + h.height > l || h.y === l || h.y > l && h.y < l + c.value[W].height));
        }
        if (v.indexOf("bottom") !== -1) {
          let a = 0;
          g.forEach((n) => {
            const s = c.value.filter((h) => h.move !== !0).filter((h) => h.x < n.x && h.x + h.width > n.x || h.x === n.x || h.x > n.x && h.x < n.x + n.width).filter((h) => h.y + h.height < n.y);
            s.length > 0 && (a = Math.max(...s.map((h) => h.y + h.height)));
          });
          const o = a + (Math.max(...g.map((n) => n.height + n.y)) - Math.min(...g.map((n) => n.y))), d = Math.min(...g.map((n) => n.y)) - a;
          if (l >= o) {
            let n = !0;
            g.filter((s) => s.y > C.value.y).forEach((s) => {
              s.y -= d, c.value.filter((f) => f.id === s.id)[0].y = s.y;
              const h = c.value.filter((f) => f.move !== !0 && f.id !== s.id).filter((f) => f.x < s.x && f.x + f.width > s.x || f.x === s.x || f.x > s.x && f.x < s.x + s.width).filter((f) => f.y < s.y && f.y + f.height > s.y || f.y === s.y || f.y > s.y && f.y < s.y + s.height);
              if (h.length > 0) {
                s.y = Math.max(...h.map((y) => y.y + y.height)), c.value.filter((y) => y.id === s.id)[0].y = s.y;
                const f = (y) => {
                  c.value.filter((D) => D.id !== y.id).filter((D) => D.x < y.x && D.x + D.width > y.x || D.x === y.x || D.x > y.x && D.x < y.x + y.width).filter((D) => D.y < y.y && D.y + D.height > y.y || D.y === y.y || D.y > y.y && D.y < y.y + y.height).forEach((D) => {
                    D.y = y.y + y.height, D.move === !0 && (C.value.y = D.y, n = !1), f(D);
                  });
                };
                f(s);
              }
            }), C.value.x = r, n && (C.value.y = o), g = P(c.value.filter((s) => s.move !== !0).filter((s) => s.x < r && s.x + s.width > r || s.x === r || s.x > r && s.x < r + c.value[W].width).filter((s) => s.y < l && s.y + s.height > l || s.y === l || s.y > l && s.y < l + c.value[W].height));
          }
        }
        if (((v.indexOf("top") !== -1 || v.indexOf("bottom") !== -1) && (v.indexOf("right") !== -1 || v.indexOf("left") !== -1) && Math.abs(x) > 8 || v.indexOf("top") === -1 && v.indexOf("bottom") === -1 && (v.indexOf("right") !== -1 || v.indexOf("left") !== -1)) && g.length > 0) {
          g.sort((o, d) => {
            const n = o.y, s = d.y;
            return n - s;
          });
          let a = !0;
          for (let o = 0; o < g.length; o++) {
            if (a) {
              const d = P(c.value);
              for (let n = 0; n <= o; n++) {
                let s = null;
                const h = d.filter((f) => f.move !== !0 && f.y < g[n].y).filter((f) => f.x < g[n].x && f.x + f.width > g[n].x || f.x === g[n].x || f.x > g[n].x && f.x < g[n].x + g[n].width);
                if (h.length === 0 ? s = 0 : s = Math.max(...h.map((f) => f.y + f.height)), n === o) {
                  if (g[n].y - (g[n].y + g[n].height - l) < s) {
                    a = !1;
                    break;
                  }
                } else if (g[n].y - g[o].height < s) {
                  a = !1;
                  break;
                } else
                  d.filter((f) => f.id === g[n].id)[0].y -= g[o].height;
              }
            }
            if (a) {
              g[o].y -= g[o].y + g[o].height - l, c.value.filter((d) => d.id === g[o].id)[0].y = g[o].y;
              for (let d = o; d > 0; d--)
                g[o - 1].y -= g[o].height, c.value.filter((n) => n.id === g[o - 1].id)[0].y = g[o - 1].y;
            } else
              g.filter((d) => d.id === g[o].id).forEach((d) => {
                d.y += c.value[W].y + c.value[W].height - d.y, c.value.filter((s) => s.id === d.id)[0].y = d.y;
                const n = (s) => {
                  c.value.filter((f) => f.move !== !0 && f.id !== s.id).filter((f) => f.x < s.x && f.x + f.width > s.x || f.x === s.x || f.x > s.x && f.x < s.x + s.width).filter((f) => f.y < s.y && f.y + f.height > s.y || f.y === s.y || f.y > s.y && f.y < s.y + s.height).forEach((f) => {
                    f.y = s.y + s.height, n(f);
                  });
                };
                n(d);
              });
          }
          C.value.x = r;
        }
      }
      Y(!1);
    }, It = () => {
      window.removeEventListener("mousemove", Ht), window.removeEventListener("mouseup", It), delete c.value[W].move, c.value[W].x = C.value.x, c.value[W].y = C.value.y, W = null, Q(null), Y();
    }, N = (i) => {
      switch (i) {
        case "top":
          return 0;
        case "right":
          return _ - c.value[W].width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let p = null, vt = "", ut = 0, ct = 0, K = 0, q = 0, F = 0, U = 0, Z = 0, dt = 0, m = 0, yt = 0;
    const b = (i, e, t) => {
      at(), p = e, vt = t, ut = i.clientX, ct = i.clientY, K = e.width, q = e.height, F = e.y, U = e.x, p.drag = !0, Q(p);
      const r = c.value.filter((a) => a.static === !0 && (a.x < e.x ? a.x + a.width >= e.x : a.x <= e.x + e.width)), l = c.value.filter((a) => a.static === !0 && (a.y < e.y ? a.y + a.height >= e.y : a.y <= e.y + e.height)), x = r.filter((a) => a.y + a.height <= e.y).map((a) => a.y + a.height);
      x.length > 0 ? Z = Math.max(...x) : Z = 0;
      const u = r.filter((a) => a.y >= e.y + e.height).map((a) => a.y);
      u.length > 0 ? dt = Math.min(...u) : dt = 0;
      const v = l.filter((a) => a.x + a.width <= e.x).map((a) => a.x + a.width);
      v.length > 0 ? m = Math.max(...v) : m = 0;
      const g = l.filter((a) => a.x >= e.x + e.width).map((a) => a.x);
      g.length > 0 ? yt = Math.min(...g) : yt = 0, window.addEventListener("mousemove", Pt), window.addEventListener("mouseup", Ct);
    }, Pt = (i) => {
      const e = K + (i.clientX - ut), t = q + (i.clientY - ct), r = K - (i.clientX - ut), l = q - (i.clientY - ct), x = F + (i.clientY - ct), u = U + (i.clientX - ut), v = getComputedStyle(z.value), g = parseInt(v.getPropertyValue("--com-item-border-width").trim()), a = parseInt(v.getPropertyValue("--group-tit-height").trim());
      switch (vt) {
        case "top-left":
          if (p.height = l < w.itemMinHeight ? w.itemMinHeight : l > G("top") ? G("top") : l, p.y = l < w.itemMinHeight ? F + q - w.itemMinHeight : l > G("top") ? Z : x, p.width = r < w.itemMinWidth ? w.itemMinWidth : r > G("left") ? G("left") : r, p.x = r < w.itemMinWidth ? U + K - w.itemMinWidth : r > G("left") ? m : u, p.isGroup === !0) {
            const d = p.width - 2 * g, n = p.height - 2 * g - (p.groupTit ? a : 0);
            p.groupData.forEach((s) => {
              s.width = d * s.groupW, s.x = d * s.groupX, s.height = n * s.groupH, s.y = n * s.groupY;
            });
          }
          break;
        case "top":
          if (p.height = l < w.itemMinHeight ? w.itemMinHeight : l > G("top") ? G("top") : l, p.y = l < w.itemMinHeight ? F + q - w.itemMinHeight : l > G("top") ? Z : x, p.isGroup === !0) {
            const d = p.height - 2 * g - (p.groupTit ? a : 0);
            p.groupData.forEach((n) => {
              n.height = d * n.groupH, n.y = d * n.groupY;
            });
          }
          break;
        case "top-right":
          if (p.height = l < w.itemMinHeight ? w.itemMinHeight : l > G("top") ? G("top") : l, p.y = l < w.itemMinHeight ? F + q - w.itemMinHeight : l > G("top") ? Z : x, p.width = e < w.itemMinWidth ? w.itemMinWidth : e > G("right") ? G("right") : e, p.isGroup === !0) {
            const d = p.width - 2 * g, n = p.height - 2 * g - (p.groupTit ? a : 0);
            p.groupData.forEach((s) => {
              s.width = d * s.groupW, s.x = d * s.groupX, s.height = n * s.groupH, s.y = n * s.groupY;
            });
          }
          break;
        case "left":
          if (p.width = r < w.itemMinWidth ? w.itemMinWidth : r > G("left") ? G("left") : r, p.x = r < w.itemMinWidth ? U + K - w.itemMinWidth : r > G("left") ? m : u, p.isGroup === !0) {
            const d = p.width - 2 * g;
            p.groupData.forEach((n) => {
              n.width = d * n.groupW, n.x = d * n.groupX;
            });
          }
          break;
        case "right":
          if (p.width = e < w.itemMinWidth ? w.itemMinWidth : e > G("right") ? G("right") : e, p.isGroup === !0) {
            const d = p.width - 2 * g;
            p.groupData.forEach((n) => {
              n.width = d * n.groupW, n.x = d * n.groupX;
            });
          }
          break;
        case "bottom-left":
          if (p.height = t < w.itemMinHeight ? w.itemMinHeight : t > G("bottom") ? G("bottom") : t, p.width = r < w.itemMinWidth ? w.itemMinWidth : r > G("left") ? G("left") : r, p.x = r < w.itemMinWidth ? U + K - w.itemMinWidth : r > G("left") ? m : u, p.isGroup === !0) {
            const d = p.width - 2 * g, n = p.height - 2 * g - (p.groupTit ? a : 0);
            p.groupData.forEach((s) => {
              s.width = d * s.groupW, s.x = d * s.groupX, s.height = n * s.groupH, s.y = n * s.groupY;
            });
          }
          break;
        case "bottom":
          if (p.height = t < w.itemMinHeight ? w.itemMinHeight : t > G("bottom") ? G("bottom") : t, p.isGroup === !0) {
            const d = p.height - 2 * g - (p.groupTit ? a : 0);
            p.groupData.forEach((n) => {
              n.height = d * n.groupH, n.y = d * n.groupY;
            });
          }
          break;
        case "bottom-right":
          if (p.height = t < w.itemMinHeight ? w.itemMinHeight : t > G("bottom") ? G("bottom") : t, p.width = e < w.itemMinWidth ? w.itemMinWidth : e > G("right") ? G("right") : e, p.isGroup === !0) {
            const d = p.width - 2 * g, n = p.height - 2 * g - (p.groupTit ? a : 0);
            p.groupData.forEach((s) => {
              s.width = d * s.groupW, s.x = d * s.groupX, s.height = n * s.groupH, s.y = n * s.groupY;
            });
          }
          break;
      }
      Q(p);
      let o = P(c.value.filter((d) => d.drag !== !0).filter((d) => d.x < p.x && d.x + d.width > p.x || d.x === p.x || d.x > p.x && d.x < p.x + p.width).filter((d) => d.y < p.y && d.y + d.height > p.y || d.y === p.y || d.y > p.y && d.y < p.y + p.height));
      if (o.length > 0) {
        o.sort((d, n) => {
          const s = d.y, h = n.y;
          return s - h;
        });
        for (let d = 0; d < o.length; d++)
          o.filter((n) => n.id === o[d].id).forEach((n) => {
            n.y += p.y + p.height - n.y, c.value.filter((h) => h.id === n.id)[0].y = n.y;
            const s = (h) => {
              c.value.filter((y) => y.drag !== !0 && y.id !== h.id).filter((y) => y.x < h.x && y.x + y.width > h.x || y.x === h.x || y.x > h.x && y.x < h.x + h.width).filter((y) => y.y < h.y && y.y + y.height > h.y || y.y === h.y || y.y > h.y && y.y < h.y + h.height).forEach((y) => {
                y.y = h.y + h.height, s(y);
              });
            };
            s(n);
          });
      }
      Y(!1);
    }, Ct = (i) => {
      delete p.drag, vt = "", p = null, Q(null), window.removeEventListener("mousemove", Pt), window.removeEventListener("mouseup", Ct), Y();
    }, G = (i) => {
      switch (i) {
        case "top":
          return F + q - Z;
        case "left":
          return U + K - m;
        case "right":
          return (yt > 0 ? yt : _) - U;
        case "bottom":
          return dt > 0 ? dt - F : 999999999;
      }
    }, Y = (i = !0) => {
      i === !0 && St();
      const e = c.value.map((t) => t.y + t.height);
      e.length > 0 ? it.value = Math.max(...e) : it.value = 0;
    };
    At(
      () => w.ySpace,
      () => {
        w.ySpace >= 0 && St();
      }
    );
    const St = () => {
      const i = P(c.value).sort((e, t) => {
        const r = e.y, l = t.y;
        return r - l;
      });
      for (let e = 0; e < i.length; e++) {
        if (e === 0 && i[e].y > 0) {
          const t = i[e].y;
          for (let r = e; r < i.length; r++)
            i[r].y -= t, c.value.filter((l) => l.id === i[r].id)[0].y = i[r].y;
        }
        if (e < i.length - 1 && i[e + 1].y > i[e].y + i[e].height) {
          const t = P(i.slice(0, e + 1));
          if (i[e + 1].y > Math.max(...t.map((r) => r.y + r.height))) {
            const r = i[e + 1].y - Math.max(...t.map((l) => l.y + l.height));
            for (let l = e + 1; l < i.length; l++)
              i[l].y -= r, c.value.filter((x) => x.id === i[l].id)[0].y = i[l].y;
          }
        }
      }
      for (let e = 0; e < i.length - 1; e++) {
        let t = i.findIndex((r) => r.y === i[e].y + i[e].height);
        if (t !== -1)
          for (let r = t; r < i.length; r++)
            i[r].y += w.ySpace, c.value.filter((l) => l.id === i[r].id)[0].y = i[r].y;
      }
    };
    ie(() => {
      Tt.observe(z.value);
    });
    const Tt = new ResizeObserver((i) => {
      Jt(_ === i[0].contentRect.width ? null : i[0].contentRect.width, Ot === i[0].contentRect.height ? null : i[0].contentRect.height);
    });
    let wt = !1;
    const Ut = (i = [], e = null) => {
      c.value = P(i), c.value.filter((t) => t.isGroup === !0).forEach((t) => {
        if (t.isGroup === !0)
          if (t.groupData.length < 2)
            ht(t.id);
          else {
            const r = ft(t.groupData, t);
            gt(r);
          }
      }), e !== null ? Nt(() => {
        const r = z.value.getBoundingClientRect().width / e, l = getComputedStyle(z.value), x = parseInt(l.getPropertyValue("--com-item-border-width").trim()), u = parseInt(l.getPropertyValue("--group-tit-height").trim());
        c.value.forEach((v) => {
          if (v.width *= r, v.height *= r, v.x *= r, v.y *= r, v.isGroup === !0) {
            const g = v.width - 2 * x, a = v.height - 2 * x - (v.groupTit ? u : 0);
            v.groupData.forEach((o) => {
              o.width = g * o.groupW, o.x = g * o.groupX, o.height = a * o.groupH, o.y = a * o.groupY;
            });
          }
        }), Y();
      }) : Y(), wt = !0, setTimeout(() => {
        wt = !1;
      }, 500);
    }, Yt = (i, e, t) => {
      const r = e.map((u) => u.y), l = Math.max(...r), x = e.filter((u) => u.y + u.height > l);
      x.sort((u, v) => {
        const g = u.x, a = v.x;
        return g - a;
      });
      for (let u = 0; u < x.length; u++) {
        if (u === 0 && x[u].x >= i.width) {
          i.y = l, i.x = 0;
          break;
        }
        if (x.length > 1 && u !== x.length - 1 && x[u].x + x[u].width + i.width <= x[u + 1].x) {
          i.y = l, i.x = x[u].x + x[u].width;
          break;
        }
        if (u === x.length - 1 && x[u].x + x[u].width + i.width <= t) {
          i.y = l, i.x = x[u].x + x[u].width;
          break;
        }
      }
      if (i.y == null) {
        i.x = 0;
        const u = e.map((v) => v.y + v.height);
        i.y = Math.max(...u);
      }
    }, pt = (i, e = null, t = !1) => {
      const r = P(i), l = c.value.filter((x) => x.id === e);
      if (r.id || (r.id = (/* @__PURE__ */ new Date()).getTime() + ""), e && l.length !== 1) {
        try {
        } catch {
        }
        return;
      }
      if (t !== !0)
        if (delete r.x, delete r.y, e) {
          const x = getComputedStyle(z.value), u = parseInt(x.getPropertyValue("--com-item-border-width").trim());
          Yt(r, l[0].groupData, l[0].width - 2 * u);
        } else
          c.value.length === 0 ? (r.x = 0, r.y = 0) : Yt(r, c.value, _);
      if (e) {
        l[0].groupData.push(r);
        const x = ft(l[0].groupData, l[0]);
        gt(x);
        const u = (v) => {
          c.value.filter((a) => a.id !== v.id).filter((a) => a.x < v.x && a.x + a.width > v.x || a.x === v.x || a.x > v.x && a.x < v.x + v.width).filter((a) => a.y < v.y && a.y + a.height > v.y || a.y === v.y || a.y > v.y && a.y < v.y + v.height).forEach((a) => {
            a.y = v.y + v.height, u(a);
          });
        };
        u(x);
      } else
        c.value.push(r);
      Y();
    }, j = (i, e = null) => {
      let t = -1;
      const r = c.value.filter((l) => l.id === e);
      if (e ? r.length === 1 && (t = r[0].groupData.findIndex((l) => l.id === i)) : t = c.value.findIndex((l) => l.id === i), t !== -1) {
        if (e)
          if (r[0].groupData.splice(t, 1), r[0].groupData.length === 1)
            ht(e);
          else {
            const l = ft(r[0].groupData, r[0]);
            gt(l);
          }
        else
          c.value.splice(t, 1);
        Y();
      } else
        try {
        } catch {
        }
    }, gt = (i) => {
      if (i.id) {
        const e = P(i);
        delete e.showPop, e.groupData && e.groupData.forEach((l) => {
          delete l.showPop;
        });
        let t = -1;
        const r = c.value.filter((l) => l.id === e.inGroupId);
        if (e.inGroupId ? r.length === 1 && (t = r[0].groupData.findIndex((l) => l.id === e.id)) : t = c.value.findIndex((l) => l.id === e.id), t !== -1)
          e.inGroupId ? r[0].groupData[t] = e : c.value[t] = e, Y();
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, Jt = (i, e) => {
      if (i !== null) {
        const t = _ ? i / _ : 1;
        _ = i;
        const r = getComputedStyle(z.value), l = parseInt(r.getPropertyValue("--com-item-border-width").trim()), x = parseInt(r.getPropertyValue("--group-tit-height").trim());
        wt || (c.value.forEach((u) => {
          if (u.width *= t, u.height *= t, u.x *= t, u.y *= t, u.isGroup === !0) {
            const v = u.width - 2 * l, g = u.height - 2 * l - (u.groupTit ? x : 0);
            u.groupData.forEach((a) => {
              a.width = v * a.groupW, a.x = v * a.groupX, a.height = g * a.groupH, a.y = g * a.groupY;
            });
          }
        }), Y());
      }
      e !== null && (Ot = e);
    }, Xt = (i) => {
      i.showPop || (c.value.forEach((e) => {
        delete e.showPop, e.groupData && e.groupData.forEach((t) => {
          delete t.showPop;
        });
      }), i.showPop = !0, window.addEventListener("click", at));
    }, at = () => {
      c.value.forEach((i) => {
        delete i.showPop, i.groupData && i.groupData.forEach((e) => {
          delete e.showPop;
        });
      }), window.removeEventListener("click", at);
    }, $ = R(!1), zt = (i) => {
      const e = c.value.findIndex((t) => t.id === i);
      if (e !== -1)
        c.value[e].checked = !0, c.value[e].disabled = !0, $.value = !0, J("showGroup", $.value);
      else
        try {
        } catch {
        }
    }, Rt = () => {
      $.value = !1, c.value.forEach((i) => {
        delete i.checked, delete i.disabled, i.groupData && i.groupData.forEach((e) => {
          delete e.checked, delete e.disabled;
        });
      }), J("showGroup", $.value);
    }, Qt = (i) => {
      i.checked = !i.checked, J("updateChecked", c.value.filter((e) => e.checked).length);
    }, ft = (i, e) => {
      const t = P(i), r = P(e);
      t.sort((o, d) => {
        const n = o.x, s = d.x;
        return n - s;
      });
      for (let o = 0; o < t.length - 1; o++) {
        if (o === 0 && t[o].x > 0) {
          const d = t[o].x;
          for (let n = o; n < t.length; n++)
            t[n].x -= d;
        }
        if (t[o + 1].x > t[o].x + t[o].width) {
          const d = P(t.slice(0, o + 1));
          if (t[o + 1].x > Math.max(...d.map((n) => n.x + n.width))) {
            const n = t[o + 1].x - Math.max(...d.map((s) => s.x + s.width));
            for (let s = o + 1; s < t.length; s++)
              t[s].x -= n;
          }
        }
      }
      t.sort((o, d) => {
        const n = o.y, s = d.y;
        return n - s;
      });
      for (let o = 0; o < t.length - 1; o++) {
        if (o === 0 && t[o].y > 0) {
          const d = t[o].y;
          for (let n = o; n < t.length; n++)
            t[n].y -= d;
        }
        if (t[o + 1].y > t[o].y + t[o].height) {
          const d = P(t.slice(0, o + 1));
          if (t[o + 1].y > Math.max(...d.map((n) => n.y + n.height))) {
            const n = t[o + 1].y - Math.max(...d.map((s) => s.y + s.height));
            for (let s = o + 1; s < t.length; s++)
              t[s].y -= n;
          }
        }
      }
      const l = t.map((o) => o.x + o.width), x = Math.max(...l), u = t.map((o) => o.y + o.height), v = Math.max(...u);
      t.forEach((o) => {
        o.inGroupId || (o.inGroupId = r.id), o.groupW = o.width / x, o.groupH = o.height / v, o.groupX = o.x / x, o.groupY = o.y / v, o.isObstacle = o.x + o.width === x && o.y === 0;
      });
      const g = getComputedStyle(z.value), a = parseInt(g.getPropertyValue("--com-item-border-width").trim());
      return r.width = x + 2 * a, r.height = v + 2 * a, r.groupData = [...t], r;
    }, Zt = () => {
      Nt(() => {
        const i = getComputedStyle(z.value), e = parseInt(i.getPropertyValue("--com-item-border-width").trim()), t = parseInt(i.getPropertyValue("--group-tit-height").trim());
        c.value.filter((r) => r.isGroup === !0).forEach((r) => {
          const l = r.width - 2 * e, x = r.height - 2 * e - (r.groupTit ? t : 0);
          r.groupData.forEach((u) => {
            u.width = l * u.groupW, u.x = l * u.groupX, u.height = x * u.groupH, u.y = x * u.groupY;
          });
        });
      });
    }, mt = () => {
      const i = c.value.filter((e) => e.checked);
      if (i.length > 1) {
        const e = {
          id: (/* @__PURE__ */ new Date()).getTime() + "G",
          isGroup: !0,
          groupTit: ""
        }, t = ft(i, e);
        t.groupData.forEach((r) => {
          j(r.id);
        }), pt(t), Y();
      }
      Rt();
    }, Lt = (i, e) => {
      const t = c.value.filter((r) => r.id === e)[0];
      if (t) {
        const r = t.groupData.filter((l) => l.id === i)[0];
        if (r)
          t.groupData.length === 2 ? ht(e) : (delete r.inGroupId, delete r.groupW, delete r.groupH, delete r.groupX, delete r.groupY, delete r.isObstacle, j(r.id, t.id), pt(r), Y());
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, ht = (i) => {
      const e = c.value.filter((t) => t.id === i)[0];
      if (e)
        e.groupData.forEach((t) => {
          delete t.inGroupId, delete t.groupW, delete t.groupH, delete e.groupX, delete e.groupY, delete e.isObstacle, t.x += e.x, t.y += e.y, pt(t, null, !0);
        }), j(e.id), Y();
      else
        try {
        } catch {
        }
    }, jt = (i = "", e) => {
      const t = c.value.filter((r) => r.id === e)[0];
      if (t) {
        if (!t.groupTit || !i) {
          const l = getComputedStyle(z.value), x = parseInt(l.getPropertyValue("--group-tit-height").trim());
          t.groupTit && !i && (t.height -= x), !t.groupTit && i && (t.height += x);
        }
        t.groupTit = i;
        const r = (l) => {
          c.value.filter((u) => u.id !== l.id).filter((u) => u.x < l.x && u.x + u.width > l.x || u.x === l.x || u.x > l.x && u.x < l.x + l.width).filter((u) => u.y < l.y && u.y + u.height > l.y || u.y === l.y || u.y > l.y && u.y < l.y + l.height).forEach((u) => {
            u.y = l.y + l.height, r(u);
          });
        };
        r(t), Y();
      } else
        try {
        } catch {
        }
    }, te = () => (c.value.forEach((i) => {
      delete i.showPop, i.groupData && i.groupData.forEach((e) => {
        delete e.showPop;
      });
    }), { data: P(c.value), width: _ });
    return re(() => {
      Tt.unobserve(z.value), window.removeEventListener("click", at);
    }), A({ init: Ut, addItem: pt, deleteItem: j, updateItem: gt, openGroup: zt, closeGroup: Rt, changeGroupBorder: Zt, addGroup: mt, removeGroupItem: Lt, removeGroup: ht, changeGroupTit: jt, getData: te }), (i, e) => (k(), O("div", {
      class: "vue-drag-component-plus",
      ref_key: "pageRef",
      ref: z
    }, [
      X("div", {
        class: "content-box",
        ref_key: "boxRef",
        ref: Kt
      }, [
        (k(!0), O(tt, null, kt(E(c), (t, r) => (k(), O("div", {
          class: et(["com-item", M.seeModel || E($) || t.static === !0 || t.dragable === !1 ? "" : "can-drag", t.move ? "is-move" : "", t.drag ? "is-drag" : "", t.showPop ? "on-top" : "", M.seeModel ? "no-hover" : ""]),
          style: L({
            width: t.width + "px",
            height: t.height + "px",
            top: t.y + "px",
            left: t.x + "px"
          }),
          key: r,
          onMousedown: T((l) => M.seeModel || E($) || t.static === !0 || t.dragable === !1 ? null : Ft(l, r), ["prevent"])
        }, [
          X("div", ne, [
            t.isGroup ? (k(), O(tt, { key: 0 }, [
              t.groupTit ? (k(), O("div", {
                key: 0,
                class: "group-item-tit",
                title: t.groupTit
              }, V(t.groupTit), 9, ae)) : I("", !0),
              X("div", {
                class: et(["group-item-content", t.groupTit ? "" : "full"])
              }, [
                (k(!0), O(tt, null, kt(t.groupData, (l, x) => (k(), O("div", {
                  class: et(["com-item-box-child", l.isObstacle ? "else" : ""]),
                  style: L({
                    width: l.width + "px",
                    height: l.height + "px",
                    top: l.y + "px",
                    left: l.x + "px"
                  }),
                  key: x
                }, [
                  X("div", he, [
                    lt(i.$slots, "item", { data: l }, () => [
                      X("p", null, V(Math.round(l.width * 100) / 100) + "," + V(Math.round(l.height * 100) / 100), 1),
                      X("p", null, V(Math.round(l.x * 100) / 100) + "," + V(Math.round(l.y * 100) / 100), 1)
                    ])
                  ]),
                  !M.seeModel && !E($) && E(W) === null && E(p) === null ? (k(), O("div", {
                    key: 0,
                    class: "setting-box",
                    style: L({ display: l.showPop ? "flex" : "none" }),
                    onMousedown: T((u) => null, ["prevent", "stop"])
                  }, [
                    Bt(bt, {
                      iconObj: M.settingIcon,
                      onClick: T((u) => Xt(l), ["prevent", "stop"])
                    }, null, 8, ["iconObj", "onClick"])
                  ], 36)) : I("", !0),
                  l.showPop ? (k(), O("div", {
                    key: 1,
                    class: "setting-box-pop",
                    onMousedown: T((u) => null, ["prevent", "stop"])
                  }, [
                    lt(i.$slots, "setPopNormal", {
                      data: P(l)
                    }, () => [
                      X("div", {
                        class: "setting-box-pop-item",
                        onClick: (u) => Lt(l.id, l.inGroupId)
                      }, "移出组合", 8, ue),
                      X("div", {
                        class: "setting-box-pop-item",
                        onClick: (u) => j(l.id, l.inGroupId)
                      }, "删除", 8, ce)
                    ])
                  ], 32)) : I("", !0)
                ], 6))), 128))
              ], 2)
            ], 64)) : (k(), O("div", de, [
              lt(i.$slots, "item", { data: t }, () => [
                X("p", null, V(Math.round(t.width * 100) / 100) + "," + V(Math.round(t.height * 100) / 100), 1),
                X("p", null, V(Math.round(t.x * 100) / 100) + "," + V(Math.round(t.y * 100) / 100), 1)
              ])
            ])),
            !t.isGroup && t.notGroup !== !0 && E($) ? (k(), O("div", {
              key: 2,
              class: et(["group-checkbox", t.checked ? "is-checked" : "", t.disabled ? "disabled" : ""]),
              onClick: (l) => t.disabled ? null : Qt(t)
            }, null, 10, ye)) : I("", !0),
            !M.seeModel && !E($) && E(W) === null && E(p) === null ? (k(), O("div", {
              key: 3,
              class: "setting-box",
              style: L({ display: t.showPop ? "flex" : "none" }),
              onMousedown: T((l) => null, ["prevent", "stop"])
            }, [
              Bt(bt, {
                iconObj: M.settingIcon,
                onClick: T((l) => Xt(t), ["prevent", "stop"])
              }, null, 8, ["iconObj", "onClick"])
            ], 36)) : I("", !0),
            t.showPop ? (k(), O("div", {
              key: 4,
              class: et(["setting-box-pop", t.isGroup === !0 ? "special" : ""]),
              onMousedown: T((l) => null, ["prevent", "stop"])
            }, [
              t.isGroup === !0 ? lt(i.$slots, "setPopSpecial", {
                key: 0,
                data: P(t)
              }, () => [
                M.hideTit ? I("", !0) : (k(), O("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (l) => J("showTitPop", t.groupTit, t.id)
                }, " 设置组合标题", 8, pe)),
                X("div", {
                  class: "setting-box-pop-item",
                  onClick: (l) => ht(t.id)
                }, "解除组合", 8, ge)
              ]) : lt(i.$slots, "setPopNormal", {
                key: 1,
                data: P(t)
              }, () => [
                t.notGroup !== !0 ? (k(), O("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (l) => zt(t.id)
                }, "组合", 8, fe)) : I("", !0),
                X("div", {
                  class: "setting-box-pop-item",
                  onClick: (l) => j(t.id)
                }, "删除", 8, xe)
              ])
            ], 34)) : I("", !0)
          ]),
          !M.seeModel && !E($) && !t.move && t.static !== !0 && t.resizable !== !1 ? (k(), O(tt, { key: 0 }, [
            E(B).indexOf("topLeft") !== -1 ? (k(), O("div", {
              key: 0,
              class: "resize-line top-left",
              onMousedown: T((l) => b(l, t, "top-left"), ["prevent", "stop"])
            }, null, 40, ve)) : I("", !0),
            E(B).indexOf("top") !== -1 ? (k(), O("div", {
              key: 1,
              class: "resize-line top",
              onMousedown: T((l) => b(l, t, "top"), ["prevent", "stop"])
            }, null, 40, we)) : I("", !0),
            E(B).indexOf("topRight") !== -1 ? (k(), O("div", {
              key: 2,
              class: "resize-line top-right",
              onMousedown: T((l) => b(l, t, "top-right"), ["prevent", "stop"])
            }, null, 40, Me)) : I("", !0),
            E(B).indexOf("left") !== -1 ? (k(), O("div", {
              key: 3,
              class: "resize-line left",
              onMousedown: T((l) => b(l, t, "left"), ["prevent", "stop"])
            }, null, 40, ke)) : I("", !0),
            E(B).indexOf("right") !== -1 ? (k(), O("div", {
              key: 4,
              class: "resize-line right",
              onMousedown: T((l) => b(l, t, "right"), ["prevent", "stop"])
            }, null, 40, Ee)) : I("", !0),
            E(B).indexOf("bottomLeft") !== -1 ? (k(), O("div", {
              key: 5,
              class: "resize-line bottom-left",
              onMousedown: T((l) => b(l, t, "bottom-left"), ["prevent", "stop"])
            }, null, 40, De)) : I("", !0),
            E(B).indexOf("bottom") !== -1 ? (k(), O("div", {
              key: 6,
              class: "resize-line bottom",
              onMousedown: T((l) => b(l, t, "bottom"), ["prevent", "stop"])
            }, null, 40, Oe)) : I("", !0),
            E(B).indexOf("bottomRight") !== -1 ? (k(), O("div", {
              key: 7,
              class: "resize-line bottom-right",
              onMousedown: T((l) => b(l, t, "bottom-right"), ["prevent", "stop"])
            }, null, 40, Ge)) : I("", !0)
          ], 64)) : I("", !0)
        ], 46, se))), 128)),
        (k(!0), O(tt, null, kt(E(c), (t, r) => (k(), O("div", {
          class: et(["shadow-bg", t.move ? "is-move" : ""]),
          style: L({
            width: t.width + "px",
            height: t.height + "px",
            top: t.y + "px",
            left: t.x + "px"
          }),
          key: r
        }, null, 6))), 128)),
        E(W) !== null ? (k(), O("div", {
          key: 0,
          class: "drag-bg",
          style: L({
            width: E(C).width + "px",
            height: E(C).height + "px",
            top: E(C).y + "px",
            left: E(C).x + "px"
          })
        }, null, 4)) : I("", !0),
        X("div", {
          class: "height-bg",
          style: L({ height: (E(it) > 0 ? +(E(it) + (M.seeModel ? M.seeModelMinBg : 220)) : E(it)) + "px" })
        }, null, 4),
        M.hideAuxiliary ? I("", !0) : (k(), O(tt, { key: 1 }, [
          E(rt) !== null ? (k(), O("div", {
            key: 0,
            class: "auxiliary-line hor",
            style: L({ top: E(rt) + "px", left: "0px" })
          }, null, 4)) : I("", !0),
          E(ot) !== null ? (k(), O("div", {
            key: 1,
            class: "auxiliary-line hor",
            style: L({ top: E(ot) + "px", left: "0px" })
          }, null, 4)) : I("", !0),
          E(st) !== null ? (k(), O("div", {
            key: 2,
            class: "auxiliary-line",
            style: L({ top: "0px", left: E(st) + "px" })
          }, null, 4)) : I("", !0),
          E(nt) !== null ? (k(), O("div", {
            key: 3,
            class: "auxiliary-line",
            style: L({ top: "0px", left: E(nt) + "px" })
          }, null, 4)) : I("", !0)
        ], 64)),
        E(c).length === 0 ? (k(), O("div", We, [
          lt(i.$slots, "empty", {}, () => [
            e[0] || (e[0] = oe(" 暂无数据 "))
          ])
        ])) : I("", !0)
      ], 512)
    ], 512));
  }
}, Ie = [He], Pe = {
  install(M) {
    Ie.forEach((A) => {
      M.component("vueDragComponentPlus", A);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Pe);
export {
  Pe as default
};
