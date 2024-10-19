import { resolveComponent as ee, openBlock as E, createBlock as Mt, resolveDynamicComponent as Lt, normalizeProps as $t, mergeProps as xt, withCtx as le, createElementBlock as D, toDisplayString as V, watch as Vt, ref as R, onMounted as ie, onBeforeUnmount as re, createElementVNode as X, Fragment as at, renderList as At, unref as k, normalizeClass as ht, normalizeStyle as $, withModifiers as T, createCommentVNode as H, renderSlot as tt, createVNode as Bt, createTextVNode as oe, isVNode as _t, nextTick as Nt } from "vue";
const bt = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(M) {
    return (A, kt) => {
      const J = ee("el-icon");
      return M.iconObj.type === "custom" ? (E(), Mt(Lt(M.iconObj.icon), $t(xt({ key: 0 }, M.iconObj.attrs)), null, 16)) : M.iconObj.type === "el" ? (E(), Mt(J, $t(xt({ key: 1 }, M.iconObj.attrs)), {
        default: le(() => [
          (E(), Mt(Lt(M.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : M.iconObj.type === "iconfont" ? (E(), D("i", xt({
        key: 2,
        class: ["icon iconfont", "icon-" + M.iconObj.icon]
      }, M.iconObj.attrs), null, 16)) : (E(), D("i", xt({
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
  setup(M, { expose: A, emit: kt }) {
    const J = kt, v = M, I = (i) => {
      if (typeof i == "object" && !_t(i) && i !== null && !(i instanceof Date)) {
        let e = i instanceof Array ? [] : {};
        for (let t in i)
          e[t] = typeof i[t] == "object" && !_t(i[t]) && i[t] !== null && !(i[t] instanceof Date) ? I(i[t]) : i[t];
        return e;
      } else
        return i;
    }, Et = () => {
      v.insertResizeKeys.forEach((i) => {
        v.excludeResizeKeys.indexOf(i) === -1 && B.value.push(i);
      });
    };
    Vt(
      () => [v.insertResizeKeys, v.excludeResizeKeys],
      () => {
        Et();
      }
    );
    const B = R([]);
    Et();
    const z = R(null);
    let _ = null, Dt = null;
    const Kt = R(null), et = R(0), lt = R(null), it = R(null), rt = R(null), ot = R(null), Q = (i) => {
      const e = I(i);
      if (i === null)
        lt.value = null, it.value = null, rt.value = null, ot.value = null;
      else {
        const t = getComputedStyle(z.value), r = parseInt(t.getPropertyValue("--auxiliary-width").trim()), l = c.value.filter((o) => o.id !== e.id).map((o) => o.y), f = c.value.filter((o) => o.id !== e.id).map((o) => o.y + o.height - 1), d = [...l, ...f];
        d.sort(), d.filter((o) => o <= e.y && e.y - v.auxiliarySpace < o || o >= e.y && e.y + v.auxiliarySpace > o).length > 0 ? lt.value = e.y : lt.value = null, d.filter((o) => o <= e.y + e.height - 1 && e.y + e.height - 1 - v.auxiliarySpace < o || o >= e.y + e.height - 1 && e.y + e.height - 1 + v.auxiliarySpace > o).length > 0 ? it.value = e.y + e.height - r : it.value = null;
        const x = c.value.filter((o) => o.id !== e.id).map((o) => o.x), g = c.value.filter((o) => o.id !== e.id).map((o) => o.x + o.width - 1), a = [...x, ...g];
        a.sort(), a.filter((o) => o <= e.x && e.x - v.auxiliarySpace < o || o >= e.x && e.x + v.auxiliarySpace > o).length > 0 ? rt.value = e.x : rt.value = null, a.filter((o) => o <= e.x + e.width - 1 && e.x + e.width - 1 - v.auxiliarySpace < o || o >= e.x + e.width - 1 && e.x + e.width - 1 + v.auxiliarySpace > o).length > 0 ? ot.value = e.x + e.width - r : ot.value = null;
      }
    }, c = R([]), qt = (i, e) => {
      let t = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector;
      for (; i && !t.call(i, e); )
        i = i.parentElement;
      return i;
    };
    let O = null, Ot = null, Gt = null;
    const P = R({}), Ft = (i, e) => {
      st(), O = e, P.value = I(c.value[O]), c.value[O].move = !0, Q(c.value[O]);
      const t = qt(i.target, ".com-item");
      Ot = i.clientX - t.offsetLeft, Gt = i.clientY - t.offsetTop, window.addEventListener("mousemove", Wt), window.addEventListener("mouseup", Ht);
    }, Wt = (i) => {
      const e = i.clientX - Ot, t = i.clientY - Gt, r = e <= N("left") ? N("left") : e >= N("right") ? N("right") : e, l = t <= N("top") ? N("top") : t >= N("bottom") ? N("bottom") : t, f = r - c.value[O].x, d = l - c.value[O].y, x = `${f > 0 ? "right" : f < 0 ? "left" : ""}_${d > 0 ? "bottom" : d < 0 ? "top" : ""}`;
      c.value[O].x = r, c.value[O].y = l, Q(c.value[O]);
      let g = I(c.value.filter((a) => a.move !== !0).filter((a) => a.x < r && a.x + a.width > r || a.x === r || a.x > r && a.x < r + c.value[O].width).filter((a) => a.y < l && a.y + a.height > l || a.y === l || a.y > l && a.y < l + c.value[O].height));
      if (g.length === 0)
        P.value.x = r, P.value.y = l;
      else {
        if (x.indexOf("top") !== -1) {
          g = g.filter((u) => u.y < P.value.y);
          const a = Math.min(...g.map((u) => u.y + u.height));
          g.forEach((u) => {
            Math.abs(u.y + u.height - a) < 5 && (u.y = a - u.height);
          });
          let o = P.value.y - l, s = !0, h = [...g];
          const n = (u) => {
            I(c.value.filter((y) => y.move !== !0 && y.y + y.height - u.y <= o + 3 && y.y + y.height - u.y >= 0).filter((y) => y.x < u.x && y.x + y.width > u.x || y.x >= u.x && y.x < u.x + u.width)).forEach((y) => {
              y.y + y.height !== u.y && (y.y = u.y - y.height), h.findIndex((W) => W.id === y.id) === -1 && (h.push(y), n(y));
            });
          };
          if (g.forEach((u) => {
            n(u);
          }), h.sort((u, w) => {
            const y = u.y, W = w.y;
            return y - W;
          }), (h.length === 0 || h.filter((u) => u.y === 0).length > 0) && (s = !1), s) {
            let u = 0;
            h.filter((y) => y.y === h[0].y).forEach((y) => {
              I(c.value.filter((S) => S.move !== !0 && S.y + S.height < y.y).filter((S) => S.x < y.x && S.x + S.width > y.x || S.x >= y.x && S.x < y.x + y.width)).forEach((S) => {
                S.y + S.height > u && (u = S.y + S.height);
              });
            }), u = h[0].y - u, u < o && (o = u), h.forEach((y) => {
              y.y -= o, c.value.filter((W) => W.id === y.id)[0].y = y.y;
            }), P.value.x = r, P.value.y = c.value.filter((y) => y.id === h[h.length - 1].id)[0].y + c.value.filter((y) => y.id === h[h.length - 1].id)[0].height;
          } else {
            const u = Math.min(...g.map((w) => w.y));
            u - l >= -7 && u - l < 7 && (g.filter((w) => w.y < P.value.y).forEach((w) => {
              w.y += c.value[O].height, c.value.filter((W) => W.id === w.id)[0].y = w.y;
              const y = (W) => {
                c.value.filter((C) => C.move !== !0 && C.id !== W.id).filter((C) => C.x < W.x && C.x + C.width > W.x || C.x === W.x || C.x > W.x && C.x < W.x + W.width).filter((C) => C.y < W.y && C.y + C.height > W.y || C.y === W.y || C.y > W.y && C.y < W.y + W.height).forEach((C) => {
                  C.y = W.y + W.height, y(C);
                });
              };
              y(w);
            }), P.value.x = r, P.value.y = u);
          }
          g = I(c.value.filter((u) => u.move !== !0).filter((u) => u.x < r && u.x + u.width > r || u.x === r || u.x > r && u.x < r + c.value[O].width).filter((u) => u.y < l && u.y + u.height > l || u.y === l || u.y > l && u.y < l + c.value[O].height));
        }
        if (x.indexOf("bottom") !== -1) {
          const a = Math.max(...g.map((o) => o.y + o.height));
          if (a - (l + c.value[O].height) >= -7 && a - (l + c.value[O].height) < 7) {
            let o = !0;
            g.filter((s) => s.y > P.value.y).forEach((s) => {
              s.y -= c.value[O].height, c.value.filter((n) => n.id === s.id)[0].y = s.y;
              const h = c.value.filter((n) => n.move !== !0 && n.id !== s.id).filter((n) => n.x < s.x && n.x + n.width > s.x || n.x === s.x || n.x > s.x && n.x < s.x + s.width).filter((n) => n.y < s.y && n.y + n.height > s.y || n.y === s.y || n.y > s.y && n.y < s.y + s.height);
              if (h.length > 0) {
                s.y = Math.max(...h.map((u) => u.y + u.height)), c.value.filter((u) => u.id === s.id)[0].y = s.y;
                const n = (u) => {
                  c.value.filter((y) => y.id !== u.id).filter((y) => y.x < u.x && y.x + y.width > u.x || y.x === u.x || y.x > u.x && y.x < u.x + u.width).filter((y) => y.y < u.y && y.y + y.height > u.y || y.y === u.y || y.y > u.y && y.y < u.y + u.height).forEach((y) => {
                    y.y = u.y + u.height, y.move === !0 && (P.value.y = y.y, o = !1), n(y);
                  });
                };
                n(s);
              }
            }), P.value.x = r, o && (P.value.y = a - c.value[O].height), g = I(c.value.filter((s) => s.move !== !0).filter((s) => s.x < r && s.x + s.width > r || s.x === r || s.x > r && s.x < r + c.value[O].width).filter((s) => s.y < l && s.y + s.height > l || s.y === l || s.y > l && s.y < l + c.value[O].height));
          }
        }
        if (((x.indexOf("top") !== -1 || x.indexOf("bottom") !== -1) && (x.indexOf("right") !== -1 || x.indexOf("left") !== -1) && Math.abs(f) > 8 || x.indexOf("top") === -1 && x.indexOf("bottom") === -1 && (x.indexOf("right") !== -1 || x.indexOf("left") !== -1)) && g.length > 0) {
          g.sort((o, s) => {
            const h = o.y, n = s.y;
            return h - n;
          });
          let a = !0;
          for (let o = 0; o < g.length; o++) {
            if (a) {
              const s = I(c.value);
              for (let h = 0; h <= o; h++) {
                let n = null;
                const u = s.filter((w) => w.move !== !0 && w.y < g[h].y).filter((w) => w.x < g[h].x && w.x + w.width > g[h].x || w.x === g[h].x || w.x > g[h].x && w.x < g[h].x + g[h].width);
                if (u.length === 0 ? n = 0 : n = Math.max(...u.map((w) => w.y + w.height)), h === o) {
                  if (g[h].y - (g[h].y + g[h].height - l) < n) {
                    a = !1;
                    break;
                  }
                } else if (g[h].y - g[o].height < n) {
                  a = !1;
                  break;
                } else
                  s.filter((w) => w.id === g[h].id)[0].y -= g[o].height;
              }
            }
            if (a) {
              g[o].y -= g[o].y + g[o].height - l, c.value.filter((s) => s.id === g[o].id)[0].y = g[o].y;
              for (let s = o; s > 0; s--)
                g[o - 1].y -= g[o].height, c.value.filter((h) => h.id === g[o - 1].id)[0].y = g[o - 1].y;
            } else
              g.filter((s) => s.id === g[o].id).forEach((s) => {
                s.y += c.value[O].y + c.value[O].height - s.y, c.value.filter((n) => n.id === s.id)[0].y = s.y;
                const h = (n) => {
                  c.value.filter((w) => w.move !== !0 && w.id !== n.id).filter((w) => w.x < n.x && w.x + w.width > n.x || w.x === n.x || w.x > n.x && w.x < n.x + n.width).filter((w) => w.y < n.y && w.y + w.height > n.y || w.y === n.y || w.y > n.y && w.y < n.y + n.height).forEach((w) => {
                    w.y = n.y + n.height, h(w);
                  });
                };
                h(s);
              });
          }
          P.value.x = r;
        }
      }
      Y(!1);
    }, Ht = () => {
      window.removeEventListener("mousemove", Wt), window.removeEventListener("mouseup", Ht), delete c.value[O].move, c.value[O].x = P.value.x, c.value[O].y = P.value.y, O = null, Q(null), Y();
    }, N = (i) => {
      switch (i) {
        case "top":
          return 0;
        case "right":
          return _ - c.value[O].width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let p = null, vt = "", ut = 0, ct = 0, K = 0, q = 0, F = 0, U = 0, Z = 0, dt = 0, m = 0, yt = 0;
    const b = (i, e, t) => {
      st(), p = e, vt = t, ut = i.clientX, ct = i.clientY, K = e.width, q = e.height, F = e.y, U = e.x, p.drag = !0, Q(p);
      const r = c.value.filter((a) => a.static === !0 && (a.x < e.x ? a.x + a.width >= e.x : a.x <= e.x + e.width)), l = c.value.filter((a) => a.static === !0 && (a.y < e.y ? a.y + a.height >= e.y : a.y <= e.y + e.height)), f = r.filter((a) => a.y + a.height <= e.y).map((a) => a.y + a.height);
      f.length > 0 ? Z = Math.max(...f) : Z = 0;
      const d = r.filter((a) => a.y >= e.y + e.height).map((a) => a.y);
      d.length > 0 ? dt = Math.min(...d) : dt = 0;
      const x = l.filter((a) => a.x + a.width <= e.x).map((a) => a.x + a.width);
      x.length > 0 ? m = Math.max(...x) : m = 0;
      const g = l.filter((a) => a.x >= e.x + e.width).map((a) => a.x);
      g.length > 0 ? yt = Math.min(...g) : yt = 0, window.addEventListener("mousemove", It), window.addEventListener("mouseup", Pt);
    }, It = (i) => {
      const e = K + (i.clientX - ut), t = q + (i.clientY - ct), r = K - (i.clientX - ut), l = q - (i.clientY - ct), f = F + (i.clientY - ct), d = U + (i.clientX - ut), x = getComputedStyle(z.value), g = parseInt(x.getPropertyValue("--com-item-border-width").trim()), a = parseInt(x.getPropertyValue("--group-tit-height").trim());
      switch (vt) {
        case "top-left":
          if (p.height = l < v.itemMinHeight ? v.itemMinHeight : l > G("top") ? G("top") : l, p.y = l < v.itemMinHeight ? F + q - v.itemMinHeight : l > G("top") ? Z : f, p.width = r < v.itemMinWidth ? v.itemMinWidth : r > G("left") ? G("left") : r, p.x = r < v.itemMinWidth ? U + K - v.itemMinWidth : r > G("left") ? m : d, p.isGroup === !0) {
            const s = p.width - 2 * g, h = p.height - 2 * g - (p.groupTit ? a : 0);
            p.groupData.forEach((n) => {
              n.width = s * n.groupW, n.x = s * n.groupX, n.height = h * n.groupH, n.y = h * n.groupY;
            });
          }
          break;
        case "top":
          if (p.height = l < v.itemMinHeight ? v.itemMinHeight : l > G("top") ? G("top") : l, p.y = l < v.itemMinHeight ? F + q - v.itemMinHeight : l > G("top") ? Z : f, p.isGroup === !0) {
            const s = p.height - 2 * g - (p.groupTit ? a : 0);
            p.groupData.forEach((h) => {
              h.height = s * h.groupH, h.y = s * h.groupY;
            });
          }
          break;
        case "top-right":
          if (p.height = l < v.itemMinHeight ? v.itemMinHeight : l > G("top") ? G("top") : l, p.y = l < v.itemMinHeight ? F + q - v.itemMinHeight : l > G("top") ? Z : f, p.width = e < v.itemMinWidth ? v.itemMinWidth : e > G("right") ? G("right") : e, p.isGroup === !0) {
            const s = p.width - 2 * g, h = p.height - 2 * g - (p.groupTit ? a : 0);
            p.groupData.forEach((n) => {
              n.width = s * n.groupW, n.x = s * n.groupX, n.height = h * n.groupH, n.y = h * n.groupY;
            });
          }
          break;
        case "left":
          if (p.width = r < v.itemMinWidth ? v.itemMinWidth : r > G("left") ? G("left") : r, p.x = r < v.itemMinWidth ? U + K - v.itemMinWidth : r > G("left") ? m : d, p.isGroup === !0) {
            const s = p.width - 2 * g;
            p.groupData.forEach((h) => {
              h.width = s * h.groupW, h.x = s * h.groupX;
            });
          }
          break;
        case "right":
          if (p.width = e < v.itemMinWidth ? v.itemMinWidth : e > G("right") ? G("right") : e, p.isGroup === !0) {
            const s = p.width - 2 * g;
            p.groupData.forEach((h) => {
              h.width = s * h.groupW, h.x = s * h.groupX;
            });
          }
          break;
        case "bottom-left":
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > G("bottom") ? G("bottom") : t, p.width = r < v.itemMinWidth ? v.itemMinWidth : r > G("left") ? G("left") : r, p.x = r < v.itemMinWidth ? U + K - v.itemMinWidth : r > G("left") ? m : d, p.isGroup === !0) {
            const s = p.width - 2 * g, h = p.height - 2 * g - (p.groupTit ? a : 0);
            p.groupData.forEach((n) => {
              n.width = s * n.groupW, n.x = s * n.groupX, n.height = h * n.groupH, n.y = h * n.groupY;
            });
          }
          break;
        case "bottom":
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > G("bottom") ? G("bottom") : t, p.isGroup === !0) {
            const s = p.height - 2 * g - (p.groupTit ? a : 0);
            p.groupData.forEach((h) => {
              h.height = s * h.groupH, h.y = s * h.groupY;
            });
          }
          break;
        case "bottom-right":
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > G("bottom") ? G("bottom") : t, p.width = e < v.itemMinWidth ? v.itemMinWidth : e > G("right") ? G("right") : e, p.isGroup === !0) {
            const s = p.width - 2 * g, h = p.height - 2 * g - (p.groupTit ? a : 0);
            p.groupData.forEach((n) => {
              n.width = s * n.groupW, n.x = s * n.groupX, n.height = h * n.groupH, n.y = h * n.groupY;
            });
          }
          break;
      }
      Q(p);
      let o = I(c.value.filter((s) => s.drag !== !0).filter((s) => s.x < p.x && s.x + s.width > p.x || s.x === p.x || s.x > p.x && s.x < p.x + p.width).filter((s) => s.y < p.y && s.y + s.height > p.y || s.y === p.y || s.y > p.y && s.y < p.y + p.height));
      if (o.length > 0) {
        o.sort((s, h) => {
          const n = s.y, u = h.y;
          return n - u;
        });
        for (let s = 0; s < o.length; s++)
          o.filter((h) => h.id === o[s].id).forEach((h) => {
            h.y += p.y + p.height - h.y, c.value.filter((u) => u.id === h.id)[0].y = h.y;
            const n = (u) => {
              c.value.filter((y) => y.drag !== !0 && y.id !== u.id).filter((y) => y.x < u.x && y.x + y.width > u.x || y.x === u.x || y.x > u.x && y.x < u.x + u.width).filter((y) => y.y < u.y && y.y + y.height > u.y || y.y === u.y || y.y > u.y && y.y < u.y + u.height).forEach((y) => {
                y.y = u.y + u.height, n(y);
              });
            };
            n(h);
          });
      }
      Y(!1);
    }, Pt = (i) => {
      delete p.drag, vt = "", p = null, Q(null), window.removeEventListener("mousemove", It), window.removeEventListener("mouseup", Pt), Y();
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
      i === !0 && Ct();
      const e = c.value.map((t) => t.y + t.height);
      e.length > 0 ? et.value = Math.max(...e) : et.value = 0;
    };
    Vt(
      () => v.ySpace,
      () => {
        v.ySpace >= 0 && Ct();
      }
    );
    const Ct = () => {
      const i = I(c.value).sort((e, t) => {
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
          const t = I(i.slice(0, e + 1));
          if (i[e + 1].y > Math.max(...t.map((r) => r.y + r.height))) {
            const r = i[e + 1].y - Math.max(...t.map((l) => l.y + l.height));
            for (let l = e + 1; l < i.length; l++)
              i[l].y -= r, c.value.filter((f) => f.id === i[l].id)[0].y = i[l].y;
          }
        }
      }
      for (let e = 0; e < i.length - 1; e++) {
        let t = i.findIndex((r) => r.y === i[e].y + i[e].height);
        if (t !== -1)
          for (let r = t; r < i.length; r++)
            i[r].y += v.ySpace, c.value.filter((l) => l.id === i[r].id)[0].y = i[r].y;
      }
    };
    ie(() => {
      St.observe(z.value);
    });
    const St = new ResizeObserver((i) => {
      Jt(_ === i[0].contentRect.width ? null : i[0].contentRect.width, Dt === i[0].contentRect.height ? null : i[0].contentRect.height);
    });
    let wt = !1;
    const Ut = (i = [], e = null) => {
      c.value = I(i), c.value.filter((t) => t.isGroup === !0).forEach((t) => {
        if (t.isGroup === !0)
          if (t.groupData.length < 2)
            nt(t.id);
          else {
            const r = ft(t.groupData, t);
            gt(r);
          }
      }), e !== null ? Nt(() => {
        const r = z.value.getBoundingClientRect().width / e, l = getComputedStyle(z.value), f = parseInt(l.getPropertyValue("--com-item-border-width").trim()), d = parseInt(l.getPropertyValue("--group-tit-height").trim());
        c.value.forEach((x) => {
          if (x.width *= r, x.height *= r, x.x *= r, x.y *= r, x.isGroup === !0) {
            const g = x.width - 2 * f, a = x.height - 2 * f - (x.groupTit ? d : 0);
            x.groupData.forEach((o) => {
              o.width = g * o.groupW, o.x = g * o.groupX, o.height = a * o.groupH, o.y = a * o.groupY;
            });
          }
        }), Y();
      }) : Y(), wt = !0, setTimeout(() => {
        wt = !1;
      }, 500);
    }, Tt = (i, e, t) => {
      const r = e.map((d) => d.y), l = Math.max(...r), f = e.filter((d) => d.y + d.height > l);
      f.sort((d, x) => {
        const g = d.x, a = x.x;
        return g - a;
      });
      for (let d = 0; d < f.length; d++) {
        if (d === 0 && f[d].x >= i.width) {
          i.y = l, i.x = 0;
          break;
        }
        if (f.length > 1 && d !== f.length - 1 && f[d].x + f[d].width + i.width <= f[d + 1].x) {
          i.y = l, i.x = f[d].x + f[d].width;
          break;
        }
        if (d === f.length - 1 && f[d].x + f[d].width + i.width <= t) {
          i.y = l, i.x = f[d].x + f[d].width;
          break;
        }
      }
      if (i.y == null) {
        i.x = 0;
        const d = e.map((x) => x.y + x.height);
        i.y = Math.max(...d);
      }
    }, pt = (i, e = null, t = !1) => {
      const r = I(i), l = c.value.filter((f) => f.id === e);
      if (r.id || (r.id = (/* @__PURE__ */ new Date()).getTime() + ""), e && l.length !== 1) {
        try {
        } catch {
        }
        return;
      }
      if (t !== !0)
        if (delete r.x, delete r.y, e) {
          const f = getComputedStyle(z.value), d = parseInt(f.getPropertyValue("--com-item-border-width").trim());
          Tt(r, l[0].groupData, l[0].width - 2 * d);
        } else
          c.value.length === 0 ? (r.x = 0, r.y = 0) : Tt(r, c.value, _);
      if (e) {
        l[0].groupData.push(r);
        const f = ft(l[0].groupData, l[0]);
        gt(f);
        const d = (x) => {
          c.value.filter((a) => a.id !== x.id).filter((a) => a.x < x.x && a.x + a.width > x.x || a.x === x.x || a.x > x.x && a.x < x.x + x.width).filter((a) => a.y < x.y && a.y + a.height > x.y || a.y === x.y || a.y > x.y && a.y < x.y + x.height).forEach((a) => {
            a.y = x.y + x.height, d(a);
          });
        };
        d(f);
      } else
        c.value.push(r);
      Y();
    }, j = (i, e = null) => {
      let t = -1;
      const r = c.value.filter((l) => l.id === e);
      if (e ? r.length === 1 && (t = r[0].groupData.findIndex((l) => l.id === i)) : t = c.value.findIndex((l) => l.id === i), t !== -1) {
        if (e)
          if (r[0].groupData.splice(t, 1), r[0].groupData.length === 1)
            nt(e);
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
        const e = I(i);
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
        const r = getComputedStyle(z.value), l = parseInt(r.getPropertyValue("--com-item-border-width").trim()), f = parseInt(r.getPropertyValue("--group-tit-height").trim());
        wt || (c.value.forEach((d) => {
          if (d.width *= t, d.height *= t, d.x *= t, d.y *= t, d.isGroup === !0) {
            const x = d.width - 2 * l, g = d.height - 2 * l - (d.groupTit ? f : 0);
            d.groupData.forEach((a) => {
              a.width = x * a.groupW, a.x = x * a.groupX, a.height = g * a.groupH, a.y = g * a.groupY;
            });
          }
        }), Y());
      }
      e !== null && (Dt = e);
    }, Yt = (i) => {
      i.showPop || (c.value.forEach((e) => {
        delete e.showPop, e.groupData && e.groupData.forEach((t) => {
          delete t.showPop;
        });
      }), i.showPop = !0, window.addEventListener("click", st));
    }, st = () => {
      c.value.forEach((i) => {
        delete i.showPop, i.groupData && i.groupData.forEach((e) => {
          delete e.showPop;
        });
      }), window.removeEventListener("click", st);
    }, L = R(!1), Xt = (i) => {
      const e = c.value.findIndex((t) => t.id === i);
      if (e !== -1)
        c.value[e].checked = !0, c.value[e].disabled = !0, L.value = !0, J("showGroup", L.value);
      else
        try {
        } catch {
        }
    }, zt = () => {
      L.value = !1, c.value.forEach((i) => {
        delete i.checked, delete i.disabled, i.groupData && i.groupData.forEach((e) => {
          delete e.checked, delete e.disabled;
        });
      }), J("showGroup", L.value);
    }, Qt = (i) => {
      i.checked = !i.checked, J("updateChecked", c.value.filter((e) => e.checked).length);
    }, ft = (i, e) => {
      const t = I(i), r = I(e);
      t.sort((o, s) => {
        const h = o.x, n = s.x;
        return h - n;
      });
      for (let o = 0; o < t.length - 1; o++) {
        if (o === 0 && t[o].x > 0) {
          const s = t[o].x;
          for (let h = o; h < t.length; h++)
            t[h].x -= s;
        }
        if (t[o + 1].x > t[o].x + t[o].width) {
          const s = I(t.slice(0, o + 1));
          if (t[o + 1].x > Math.max(...s.map((h) => h.x + h.width))) {
            const h = t[o + 1].x - Math.max(...s.map((n) => n.x + n.width));
            for (let n = o + 1; n < t.length; n++)
              t[n].x -= h;
          }
        }
      }
      t.sort((o, s) => {
        const h = o.y, n = s.y;
        return h - n;
      });
      for (let o = 0; o < t.length - 1; o++) {
        if (o === 0 && t[o].y > 0) {
          const s = t[o].y;
          for (let h = o; h < t.length; h++)
            t[h].y -= s;
        }
        if (t[o + 1].y > t[o].y + t[o].height) {
          const s = I(t.slice(0, o + 1));
          if (t[o + 1].y > Math.max(...s.map((h) => h.y + h.height))) {
            const h = t[o + 1].y - Math.max(...s.map((n) => n.y + n.height));
            for (let n = o + 1; n < t.length; n++)
              t[n].y -= h;
          }
        }
      }
      const l = t.map((o) => o.x + o.width), f = Math.max(...l), d = t.map((o) => o.y + o.height), x = Math.max(...d);
      t.forEach((o) => {
        o.inGroupId || (o.inGroupId = r.id), o.groupW = o.width / f, o.groupH = o.height / x, o.groupX = o.x / f, o.groupY = o.y / x, o.isObstacle = o.x + o.width === f && o.y === 0;
      });
      const g = getComputedStyle(z.value), a = parseInt(g.getPropertyValue("--com-item-border-width").trim());
      return r.width = f + 2 * a, r.height = x + 2 * a, r.groupData = [...t], r;
    }, Zt = () => {
      Nt(() => {
        const i = getComputedStyle(z.value), e = parseInt(i.getPropertyValue("--com-item-border-width").trim()), t = parseInt(i.getPropertyValue("--group-tit-height").trim());
        c.value.filter((r) => r.isGroup === !0).forEach((r) => {
          const l = r.width - 2 * e, f = r.height - 2 * e - (r.groupTit ? t : 0);
          r.groupData.forEach((d) => {
            d.width = l * d.groupW, d.x = l * d.groupX, d.height = f * d.groupH, d.y = f * d.groupY;
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
      zt();
    }, Rt = (i, e) => {
      const t = c.value.filter((r) => r.id === e)[0];
      if (t) {
        const r = t.groupData.filter((l) => l.id === i)[0];
        if (r)
          t.groupData.length === 2 ? nt(e) : (delete r.inGroupId, delete r.groupW, delete r.groupH, delete r.groupX, delete r.groupY, delete r.isObstacle, j(r.id, t.id), pt(r), Y());
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, nt = (i) => {
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
          const l = getComputedStyle(z.value), f = parseInt(l.getPropertyValue("--group-tit-height").trim());
          t.groupTit && !i && (t.height -= f), !t.groupTit && i && (t.height += f);
        }
        t.groupTit = i;
        const r = (l) => {
          c.value.filter((d) => d.id !== l.id).filter((d) => d.x < l.x && d.x + d.width > l.x || d.x === l.x || d.x > l.x && d.x < l.x + l.width).filter((d) => d.y < l.y && d.y + d.height > l.y || d.y === l.y || d.y > l.y && d.y < l.y + l.height).forEach((d) => {
            d.y = l.y + l.height, r(d);
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
    }), { data: I(c.value), width: _ });
    return re(() => {
      St.unobserve(z.value), window.removeEventListener("click", st);
    }), A({ init: Ut, addItem: pt, deleteItem: j, updateItem: gt, openGroup: Xt, closeGroup: zt, changeGroupBorder: Zt, addGroup: mt, removeGroupItem: Rt, removeGroup: nt, changeGroupTit: jt, getData: te }), (i, e) => (E(), D("div", {
      class: "vue-drag-component-plus",
      ref_key: "pageRef",
      ref: z
    }, [
      X("div", {
        class: "content-box",
        ref_key: "boxRef",
        ref: Kt
      }, [
        (E(!0), D(at, null, At(k(c), (t, r) => (E(), D("div", {
          class: ht(["com-item", M.seeModel || k(L) || t.static === !0 || t.dragable === !1 ? "" : "can-drag", t.move ? "is-move" : "", t.drag ? "is-drag" : "", t.showPop ? "on-top" : "", M.seeModel ? "no-hover" : ""]),
          style: $({
            width: t.width + "px",
            height: t.height + "px",
            top: t.y + "px",
            left: t.x + "px"
          }),
          key: r,
          onMousedown: T((l) => M.seeModel || k(L) || t.static === !0 || t.dragable === !1 ? null : Ft(l, r), ["prevent"])
        }, [
          X("div", ne, [
            t.isGroup ? (E(), D(at, { key: 0 }, [
              t.groupTit ? (E(), D("div", {
                key: 0,
                class: "group-item-tit",
                title: t.groupTit
              }, V(t.groupTit), 9, ae)) : H("", !0),
              X("div", {
                class: ht(["group-item-content", t.groupTit ? "" : "full"])
              }, [
                (E(!0), D(at, null, At(t.groupData, (l, f) => (E(), D("div", {
                  class: ht(["com-item-box-child", l.isObstacle ? "else" : ""]),
                  style: $({
                    width: l.width + "px",
                    height: l.height + "px",
                    top: l.y + "px",
                    left: l.x + "px"
                  }),
                  key: f
                }, [
                  X("div", he, [
                    tt(i.$slots, "item", { data: l }, () => [
                      X("p", null, V(Math.round(l.width * 100) / 100) + "," + V(Math.round(l.height * 100) / 100), 1),
                      X("p", null, V(Math.round(l.x * 100) / 100) + "," + V(Math.round(l.y * 100) / 100), 1)
                    ])
                  ]),
                  !M.seeModel && !k(L) && k(O) === null && k(p) === null ? (E(), D("div", {
                    key: 0,
                    class: "setting-box",
                    style: $({ display: l.showPop ? "flex" : "none" }),
                    onMousedown: T((d) => null, ["prevent", "stop"])
                  }, [
                    Bt(bt, {
                      iconObj: M.settingIcon,
                      onClick: T((d) => Yt(l), ["prevent", "stop"])
                    }, null, 8, ["iconObj", "onClick"])
                  ], 36)) : H("", !0),
                  l.showPop ? (E(), D("div", {
                    key: 1,
                    class: "setting-box-pop",
                    onMousedown: T((d) => null, ["prevent", "stop"])
                  }, [
                    tt(i.$slots, "setPopNormal", {
                      data: I(l)
                    }, () => [
                      X("div", {
                        class: "setting-box-pop-item",
                        onClick: (d) => Rt(l.id, l.inGroupId)
                      }, "移出组合", 8, ue),
                      X("div", {
                        class: "setting-box-pop-item",
                        onClick: (d) => j(l.id, l.inGroupId)
                      }, "删除", 8, ce)
                    ])
                  ], 32)) : H("", !0)
                ], 6))), 128))
              ], 2)
            ], 64)) : (E(), D("div", de, [
              tt(i.$slots, "item", { data: t }, () => [
                X("p", null, V(Math.round(t.width * 100) / 100) + "," + V(Math.round(t.height * 100) / 100), 1),
                X("p", null, V(Math.round(t.x * 100) / 100) + "," + V(Math.round(t.y * 100) / 100), 1)
              ])
            ])),
            !t.isGroup && t.notGroup !== !0 && k(L) ? (E(), D("div", {
              key: 2,
              class: ht(["group-checkbox", t.checked ? "is-checked" : "", t.disabled ? "disabled" : ""]),
              onClick: (l) => t.disabled ? null : Qt(t)
            }, null, 10, ye)) : H("", !0),
            !M.seeModel && !k(L) && k(O) === null && k(p) === null ? (E(), D("div", {
              key: 3,
              class: "setting-box",
              style: $({ display: t.showPop ? "flex" : "none" }),
              onMousedown: T((l) => null, ["prevent", "stop"])
            }, [
              Bt(bt, {
                iconObj: M.settingIcon,
                onClick: T((l) => Yt(t), ["prevent", "stop"])
              }, null, 8, ["iconObj", "onClick"])
            ], 36)) : H("", !0),
            t.showPop ? (E(), D("div", {
              key: 4,
              class: ht(["setting-box-pop", t.isGroup === !0 ? "special" : ""]),
              onMousedown: T((l) => null, ["prevent", "stop"])
            }, [
              t.isGroup === !0 ? tt(i.$slots, "setPopSpecial", {
                key: 0,
                data: I(t)
              }, () => [
                M.hideTit ? H("", !0) : (E(), D("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (l) => J("showTitPop", t.groupTit, t.id)
                }, " 设置组合标题", 8, pe)),
                X("div", {
                  class: "setting-box-pop-item",
                  onClick: (l) => nt(t.id)
                }, "解除组合", 8, ge)
              ]) : tt(i.$slots, "setPopNormal", {
                key: 1,
                data: I(t)
              }, () => [
                t.notGroup !== !0 ? (E(), D("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (l) => Xt(t.id)
                }, "组合", 8, fe)) : H("", !0),
                X("div", {
                  class: "setting-box-pop-item",
                  onClick: (l) => j(t.id)
                }, "删除", 8, xe)
              ])
            ], 34)) : H("", !0)
          ]),
          !M.seeModel && !k(L) && !t.move && t.static !== !0 && t.resizable !== !1 ? (E(), D(at, { key: 0 }, [
            k(B).indexOf("topLeft") !== -1 ? (E(), D("div", {
              key: 0,
              class: "resize-line top-left",
              onMousedown: T((l) => b(l, t, "top-left"), ["prevent", "stop"])
            }, null, 40, ve)) : H("", !0),
            k(B).indexOf("top") !== -1 ? (E(), D("div", {
              key: 1,
              class: "resize-line top",
              onMousedown: T((l) => b(l, t, "top"), ["prevent", "stop"])
            }, null, 40, we)) : H("", !0),
            k(B).indexOf("topRight") !== -1 ? (E(), D("div", {
              key: 2,
              class: "resize-line top-right",
              onMousedown: T((l) => b(l, t, "top-right"), ["prevent", "stop"])
            }, null, 40, Me)) : H("", !0),
            k(B).indexOf("left") !== -1 ? (E(), D("div", {
              key: 3,
              class: "resize-line left",
              onMousedown: T((l) => b(l, t, "left"), ["prevent", "stop"])
            }, null, 40, ke)) : H("", !0),
            k(B).indexOf("right") !== -1 ? (E(), D("div", {
              key: 4,
              class: "resize-line right",
              onMousedown: T((l) => b(l, t, "right"), ["prevent", "stop"])
            }, null, 40, Ee)) : H("", !0),
            k(B).indexOf("bottomLeft") !== -1 ? (E(), D("div", {
              key: 5,
              class: "resize-line bottom-left",
              onMousedown: T((l) => b(l, t, "bottom-left"), ["prevent", "stop"])
            }, null, 40, De)) : H("", !0),
            k(B).indexOf("bottom") !== -1 ? (E(), D("div", {
              key: 6,
              class: "resize-line bottom",
              onMousedown: T((l) => b(l, t, "bottom"), ["prevent", "stop"])
            }, null, 40, Oe)) : H("", !0),
            k(B).indexOf("bottomRight") !== -1 ? (E(), D("div", {
              key: 7,
              class: "resize-line bottom-right",
              onMousedown: T((l) => b(l, t, "bottom-right"), ["prevent", "stop"])
            }, null, 40, Ge)) : H("", !0)
          ], 64)) : H("", !0)
        ], 46, se))), 128)),
        k(O) !== null ? (E(), D("div", {
          key: 0,
          class: "drag-bg",
          style: $({
            width: k(P).width + "px",
            height: k(P).height + "px",
            top: k(P).y + "px",
            left: k(P).x + "px"
          })
        }, null, 4)) : H("", !0),
        X("div", {
          class: "height-bg",
          style: $({ height: (k(et) > 0 ? +(k(et) + (M.seeModel ? M.seeModelMinBg : 220)) : k(et)) + "px" })
        }, null, 4),
        M.hideAuxiliary ? H("", !0) : (E(), D(at, { key: 1 }, [
          k(lt) !== null ? (E(), D("div", {
            key: 0,
            class: "auxiliary-line hor",
            style: $({ top: k(lt) + "px", left: "0px" })
          }, null, 4)) : H("", !0),
          k(it) !== null ? (E(), D("div", {
            key: 1,
            class: "auxiliary-line hor",
            style: $({ top: k(it) + "px", left: "0px" })
          }, null, 4)) : H("", !0),
          k(rt) !== null ? (E(), D("div", {
            key: 2,
            class: "auxiliary-line",
            style: $({ top: "0px", left: k(rt) + "px" })
          }, null, 4)) : H("", !0),
          k(ot) !== null ? (E(), D("div", {
            key: 3,
            class: "auxiliary-line",
            style: $({ top: "0px", left: k(ot) + "px" })
          }, null, 4)) : H("", !0)
        ], 64)),
        k(c).length === 0 ? (E(), D("div", We, [
          tt(i.$slots, "empty", {}, () => [
            e[0] || (e[0] = oe(" 暂无数据 "))
          ])
        ])) : H("", !0)
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
