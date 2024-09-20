import { resolveComponent as te, openBlock as E, createBlock as Mt, resolveDynamicComponent as Rt, normalizeProps as Lt, mergeProps as xt, withCtx as ee, createElementBlock as D, toDisplayString as $, watch as $t, ref as z, onMounted as le, onBeforeUnmount as ie, createElementVNode as X, Fragment as at, renderList as Vt, unref as k, normalizeClass as ht, normalizeStyle as L, withModifiers as T, createCommentVNode as H, renderSlot as tt, createVNode as _t, createTextVNode as re, nextTick as Bt } from "vue";
const At = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(M) {
    return (V, kt) => {
      const J = te("el-icon");
      return M.iconObj.type === "custom" ? (E(), Mt(Rt(M.iconObj.icon), Lt(xt({ key: 0 }, M.iconObj.attrs)), null, 16)) : M.iconObj.type === "el" ? (E(), Mt(J, Lt(xt({ key: 1 }, M.iconObj.attrs)), {
        default: ee(() => [
          (E(), Mt(Rt(M.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : M.iconObj.type === "iconfont" ? (E(), D("i", xt({
        key: 2,
        class: ["icon iconfont", "icon-" + M.iconObj.icon]
      }, M.iconObj.attrs), null, 16)) : (E(), D("i", xt({
        key: 3,
        class: M.iconObj.type
      }, M.iconObj.attrs), $(M.iconObj.icon), 17));
    };
  }
};
const oe = ["onMousedown"], ne = { class: "com-item-box" }, se = ["title"], ae = { class: "com-item-box-content" }, he = ["onClick"], ue = ["onClick"], ce = {
  key: 1,
  class: "com-item-box-content"
}, de = ["onClick"], pe = ["onClick"], ye = ["onClick"], ge = ["onClick"], fe = ["onClick"], xe = ["onMousedown"], ve = ["onMousedown"], we = ["onMousedown"], Me = ["onMousedown"], ke = ["onMousedown"], Ee = ["onMousedown"], De = ["onMousedown"], Oe = ["onMousedown"], Ge = {
  key: 2,
  class: "com-empty"
}, We = {
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
      validator(M, V) {
        return M >= 0;
      }
    },
    // 组件项最小宽度
    itemMinWidth: {
      type: Number,
      default: 15,
      validator(M, V) {
        return M >= 15;
      }
    },
    // 组件项最小高度
    itemMinHeight: {
      type: Number,
      default: 15,
      validator(M, V) {
        return M >= 15;
      }
    },
    // 纵向相邻元素的自动间距
    ySpace: {
      type: Number,
      default: 7,
      validator(M, V) {
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
      validator(M, V) {
        return M >= 1;
      }
    }
  },
  emits: ["showGroup", "updateChecked", "showTitPop"],
  setup(M, { expose: V, emit: kt }) {
    const J = kt, x = M, I = (i) => {
      let e = i instanceof Array ? [] : {};
      for (let t in i)
        e[t] = typeof i[t] == "object" ? I(i[t]) : i[t];
      return e;
    }, Et = () => {
      x.insertResizeKeys.forEach((i) => {
        x.excludeResizeKeys.indexOf(i) === -1 && _.value.push(i);
      });
    };
    $t(
      () => [x.insertResizeKeys, x.excludeResizeKeys],
      () => {
        Et();
      }
    );
    const _ = z([]);
    Et();
    const b = z(null);
    let B = null, Dt = null;
    const Nt = z(null), et = z(0), lt = z(null), it = z(null), rt = z(null), ot = z(null), Q = (i) => {
      const e = I(i);
      if (i === null)
        lt.value = null, it.value = null, rt.value = null, ot.value = null;
      else {
        const t = getComputedStyle(b.value), r = parseInt(t.getPropertyValue("--auxiliary-width").trim()), l = u.value.filter((o) => o.id !== e.id).map((o) => o.y), f = u.value.filter((o) => o.id !== e.id).map((o) => o.y + o.height - 1), c = [...l, ...f];
        c.sort(), c.filter((o) => o <= e.y && e.y - x.auxiliarySpace < o || o >= e.y && e.y + x.auxiliarySpace > o).length > 0 ? lt.value = e.y : lt.value = null, c.filter((o) => o <= e.y + e.height - 1 && e.y + e.height - 1 - x.auxiliarySpace < o || o >= e.y + e.height - 1 && e.y + e.height - 1 + x.auxiliarySpace > o).length > 0 ? it.value = e.y + e.height - r : it.value = null;
        const w = u.value.filter((o) => o.id !== e.id).map((o) => o.x), g = u.value.filter((o) => o.id !== e.id).map((o) => o.x + o.width - 1), d = [...w, ...g];
        d.sort(), d.filter((o) => o <= e.x && e.x - x.auxiliarySpace < o || o >= e.x && e.x + x.auxiliarySpace > o).length > 0 ? rt.value = e.x : rt.value = null, d.filter((o) => o <= e.x + e.width - 1 && e.x + e.width - 1 - x.auxiliarySpace < o || o >= e.x + e.width - 1 && e.x + e.width - 1 + x.auxiliarySpace > o).length > 0 ? ot.value = e.x + e.width - r : ot.value = null;
      }
    }, u = z([]), Kt = (i, e) => {
      let t = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector;
      for (; i && !t.call(i, e); )
        i = i.parentElement;
      return i;
    };
    let O = null, Ot = null, Gt = null;
    const C = z({}), qt = (i, e) => {
      nt(), O = e, C.value = I(u.value[O]), u.value[O].move = !0, Q(u.value[O]);
      const t = Kt(i.target, ".com-item");
      Ot = i.clientX - t.offsetLeft, Gt = i.clientY - t.offsetTop, window.addEventListener("mousemove", Wt), window.addEventListener("mouseup", Ht);
    }, Wt = (i) => {
      const e = i.clientX - Ot, t = i.clientY - Gt, r = e <= A("left") ? A("left") : e >= A("right") ? A("right") : e, l = t <= A("top") ? A("top") : t >= A("bottom") ? A("bottom") : t, f = r - u.value[O].x, c = l - u.value[O].y, w = `${f > 0 ? "right" : f < 0 ? "left" : ""}_${c > 0 ? "bottom" : c < 0 ? "top" : ""}`;
      u.value[O].x = r, u.value[O].y = l, Q(u.value[O]);
      let g = I(u.value.filter((d) => d.move !== !0).filter((d) => d.x < r && d.x + d.width > r || d.x === r || d.x > r && d.x < r + u.value[O].width).filter((d) => d.y < l && d.y + d.height > l || d.y === l || d.y > l && d.y < l + u.value[O].height));
      if (g.length === 0)
        C.value.x = r, C.value.y = l;
      else {
        if (w.indexOf("top") !== -1) {
          g = g.filter((h) => h.y < C.value.y);
          const d = Math.min(...g.map((h) => h.y + h.height));
          g.forEach((h) => {
            Math.abs(h.y + h.height - d) < 5 && (h.y = d - h.height);
          });
          let o = C.value.y - l, n = !0, a = [...g];
          const s = (h) => {
            I(u.value.filter((p) => p.move !== !0 && p.y + p.height - h.y <= o + 3 && p.y + p.height - h.y >= 0).filter((p) => p.x < h.x && p.x + p.width > h.x || p.x >= h.x && p.x < h.x + h.width)).forEach((p) => {
              p.y + p.height !== h.y && (p.y = h.y - p.height), a.findIndex((W) => W.id === p.id) === -1 && (a.push(p), s(p));
            });
          };
          if (g.forEach((h) => {
            s(h);
          }), a.sort((h, v) => {
            const p = h.y, W = v.y;
            return p - W;
          }), (a.length === 0 || a.filter((h) => h.y === 0).length > 0) && (n = !1), n) {
            let h = 0;
            a.filter((p) => p.y === a[0].y).forEach((p) => {
              I(u.value.filter((S) => S.move !== !0 && S.y + S.height < p.y).filter((S) => S.x < p.x && S.x + S.width > p.x || S.x >= p.x && S.x < p.x + p.width)).forEach((S) => {
                S.y + S.height > h && (h = S.y + S.height);
              });
            }), h = a[0].y - h, h < o && (o = h), a.forEach((p) => {
              p.y -= o, u.value.filter((W) => W.id === p.id)[0].y = p.y;
            }), C.value.x = r, C.value.y = u.value.filter((p) => p.id === a[a.length - 1].id)[0].y + u.value.filter((p) => p.id === a[a.length - 1].id)[0].height;
          } else {
            const h = Math.min(...g.map((v) => v.y));
            h - l >= -7 && h - l < 7 && (g.filter((v) => v.y < C.value.y).forEach((v) => {
              v.y += u.value[O].height, u.value.filter((W) => W.id === v.id)[0].y = v.y;
              const p = (W) => {
                u.value.filter((P) => P.move !== !0 && P.id !== W.id).filter((P) => P.x < W.x && P.x + P.width > W.x || P.x === W.x || P.x > W.x && P.x < W.x + W.width).filter((P) => P.y < W.y && P.y + P.height > W.y || P.y === W.y || P.y > W.y && P.y < W.y + W.height).forEach((P) => {
                  P.y = W.y + W.height, p(P);
                });
              };
              p(v);
            }), C.value.x = r, C.value.y = h);
          }
          g = I(u.value.filter((h) => h.move !== !0).filter((h) => h.x < r && h.x + h.width > r || h.x === r || h.x > r && h.x < r + u.value[O].width).filter((h) => h.y < l && h.y + h.height > l || h.y === l || h.y > l && h.y < l + u.value[O].height));
        }
        if (w.indexOf("bottom") !== -1) {
          const d = Math.max(...g.map((o) => o.y + o.height));
          if (d - (l + u.value[O].height) >= -7 && d - (l + u.value[O].height) < 7) {
            let o = !0;
            g.filter((n) => n.y > C.value.y).forEach((n) => {
              n.y -= u.value[O].height, u.value.filter((s) => s.id === n.id)[0].y = n.y;
              const a = u.value.filter((s) => s.move !== !0 && s.id !== n.id).filter((s) => s.x < n.x && s.x + s.width > n.x || s.x === n.x || s.x > n.x && s.x < n.x + n.width).filter((s) => s.y < n.y && s.y + s.height > n.y || s.y === n.y || s.y > n.y && s.y < n.y + n.height);
              if (a.length > 0) {
                n.y = Math.max(...a.map((h) => h.y + h.height)), u.value.filter((h) => h.id === n.id)[0].y = n.y;
                const s = (h) => {
                  u.value.filter((p) => p.id !== h.id).filter((p) => p.x < h.x && p.x + p.width > h.x || p.x === h.x || p.x > h.x && p.x < h.x + h.width).filter((p) => p.y < h.y && p.y + p.height > h.y || p.y === h.y || p.y > h.y && p.y < h.y + h.height).forEach((p) => {
                    p.y = h.y + h.height, p.move === !0 && (C.value.y = p.y, o = !1), s(p);
                  });
                };
                s(n);
              }
            }), C.value.x = r, o && (C.value.y = d - u.value[O].height), g = I(u.value.filter((n) => n.move !== !0).filter((n) => n.x < r && n.x + n.width > r || n.x === r || n.x > r && n.x < r + u.value[O].width).filter((n) => n.y < l && n.y + n.height > l || n.y === l || n.y > l && n.y < l + u.value[O].height));
          }
        }
        if (((w.indexOf("top") !== -1 || w.indexOf("bottom") !== -1) && (w.indexOf("right") !== -1 || w.indexOf("left") !== -1) && Math.abs(f) > 8 || w.indexOf("top") === -1 && w.indexOf("bottom") === -1 && (w.indexOf("right") !== -1 || w.indexOf("left") !== -1)) && g.length > 0) {
          g.sort((o, n) => {
            const a = o.y, s = n.y;
            return a - s;
          });
          let d = !0;
          for (let o = 0; o < g.length; o++) {
            if (d) {
              const n = I(u.value);
              for (let a = 0; a <= o; a++) {
                let s = null;
                const h = n.filter((v) => v.move !== !0 && v.y < g[a].y).filter((v) => v.x < g[a].x && v.x + v.width > g[a].x || v.x === g[a].x || v.x > g[a].x && v.x < g[a].x + g[a].width);
                if (h.length === 0 ? s = 0 : s = Math.max(...h.map((v) => v.y + v.height)), a === o) {
                  if (g[a].y - (g[a].y + g[a].height - l) < s) {
                    d = !1;
                    break;
                  }
                } else if (g[a].y - g[o].height < s) {
                  d = !1;
                  break;
                } else
                  n.filter((v) => v.id === g[a].id)[0].y -= g[o].height;
              }
            }
            if (d) {
              g[o].y -= g[o].y + g[o].height - l, u.value.filter((n) => n.id === g[o].id)[0].y = g[o].y;
              for (let n = o; n > 0; n--)
                g[o - 1].y -= g[o].height, u.value.filter((a) => a.id === g[o - 1].id)[0].y = g[o - 1].y;
            } else
              g.filter((n) => n.id === g[o].id).forEach((n) => {
                n.y += u.value[O].y + u.value[O].height - n.y, u.value.filter((s) => s.id === n.id)[0].y = n.y;
                const a = (s) => {
                  u.value.filter((v) => v.move !== !0 && v.id !== s.id).filter((v) => v.x < s.x && v.x + v.width > s.x || v.x === s.x || v.x > s.x && v.x < s.x + s.width).filter((v) => v.y < s.y && v.y + v.height > s.y || v.y === s.y || v.y > s.y && v.y < s.y + s.height).forEach((v) => {
                    v.y = s.y + s.height, a(v);
                  });
                };
                a(n);
              });
          }
          C.value.x = r;
        }
      }
      Y(!1);
    }, Ht = () => {
      window.removeEventListener("mousemove", Wt), window.removeEventListener("mouseup", Ht), delete u.value[O].move, u.value[O].x = C.value.x, u.value[O].y = C.value.y, O = null, Q(null), Y();
    }, A = (i) => {
      switch (i) {
        case "top":
          return 0;
        case "right":
          return B - u.value[O].width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let y = null, vt = "", ut = 0, ct = 0, K = 0, q = 0, F = 0, U = 0, Z = 0, dt = 0, m = 0, pt = 0;
    const N = (i, e, t) => {
      nt(), y = e, vt = t, ut = i.clientX, ct = i.clientY, K = e.width, q = e.height, F = e.y, U = e.x, y.drag = !0, Q(y);
      const r = u.value.filter((d) => d.static === !0 && (d.x < e.x ? d.x + d.width >= e.x : d.x <= e.x + e.width)), l = u.value.filter((d) => d.static === !0 && (d.y < e.y ? d.y + d.height >= e.y : d.y <= e.y + e.height)), f = r.filter((d) => d.y + d.height <= e.y).map((d) => d.y + d.height);
      f.length > 0 ? Z = Math.max(...f) : Z = 0;
      const c = r.filter((d) => d.y >= e.y + e.height).map((d) => d.y);
      c.length > 0 ? dt = Math.min(...c) : dt = 0;
      const w = l.filter((d) => d.x + d.width <= e.x).map((d) => d.x + d.width);
      w.length > 0 ? m = Math.max(...w) : m = 0;
      const g = l.filter((d) => d.x >= e.x + e.width).map((d) => d.x);
      g.length > 0 ? pt = Math.min(...g) : pt = 0, window.addEventListener("mousemove", It), window.addEventListener("mouseup", Ct);
    }, It = (i) => {
      const e = K + (i.clientX - ut), t = q + (i.clientY - ct), r = K - (i.clientX - ut), l = q - (i.clientY - ct), f = F + (i.clientY - ct), c = U + (i.clientX - ut), w = getComputedStyle(b.value), g = parseInt(w.getPropertyValue("--com-item-border-width").trim()), d = parseInt(w.getPropertyValue("--group-tit-height").trim());
      switch (vt) {
        case "top-left":
          if (y.height = l < x.itemMinHeight ? x.itemMinHeight : l > G("top") ? G("top") : l, y.y = l < x.itemMinHeight ? F + q - x.itemMinHeight : l > G("top") ? Z : f, y.width = r < x.itemMinWidth ? x.itemMinWidth : r > G("left") ? G("left") : r, y.x = r < x.itemMinWidth ? U + K - x.itemMinWidth : r > G("left") ? m : c, y.isGroup === !0) {
            const n = y.width - 2 * g, a = y.height - 2 * g - (y.groupTit ? d : 0);
            y.groupData.forEach((s) => {
              s.width = n * s.groupW, s.x = n * s.groupX, s.height = a * s.groupH, s.y = a * s.groupY;
            });
          }
          break;
        case "top":
          if (y.height = l < x.itemMinHeight ? x.itemMinHeight : l > G("top") ? G("top") : l, y.y = l < x.itemMinHeight ? F + q - x.itemMinHeight : l > G("top") ? Z : f, y.isGroup === !0) {
            const n = y.height - 2 * g - (y.groupTit ? d : 0);
            y.groupData.forEach((a) => {
              a.height = n * a.groupH, a.y = n * a.groupY;
            });
          }
          break;
        case "top-right":
          if (y.height = l < x.itemMinHeight ? x.itemMinHeight : l > G("top") ? G("top") : l, y.y = l < x.itemMinHeight ? F + q - x.itemMinHeight : l > G("top") ? Z : f, y.width = e < x.itemMinWidth ? x.itemMinWidth : e > G("right") ? G("right") : e, y.isGroup === !0) {
            const n = y.width - 2 * g, a = y.height - 2 * g - (y.groupTit ? d : 0);
            y.groupData.forEach((s) => {
              s.width = n * s.groupW, s.x = n * s.groupX, s.height = a * s.groupH, s.y = a * s.groupY;
            });
          }
          break;
        case "left":
          if (y.width = r < x.itemMinWidth ? x.itemMinWidth : r > G("left") ? G("left") : r, y.x = r < x.itemMinWidth ? U + K - x.itemMinWidth : r > G("left") ? m : c, y.isGroup === !0) {
            const n = y.width - 2 * g;
            y.groupData.forEach((a) => {
              a.width = n * a.groupW, a.x = n * a.groupX;
            });
          }
          break;
        case "right":
          if (y.width = e < x.itemMinWidth ? x.itemMinWidth : e > G("right") ? G("right") : e, y.isGroup === !0) {
            const n = y.width - 2 * g;
            y.groupData.forEach((a) => {
              a.width = n * a.groupW, a.x = n * a.groupX;
            });
          }
          break;
        case "bottom-left":
          if (y.height = t < x.itemMinHeight ? x.itemMinHeight : t > G("bottom") ? G("bottom") : t, y.width = r < x.itemMinWidth ? x.itemMinWidth : r > G("left") ? G("left") : r, y.x = r < x.itemMinWidth ? U + K - x.itemMinWidth : r > G("left") ? m : c, y.isGroup === !0) {
            const n = y.width - 2 * g, a = y.height - 2 * g - (y.groupTit ? d : 0);
            y.groupData.forEach((s) => {
              s.width = n * s.groupW, s.x = n * s.groupX, s.height = a * s.groupH, s.y = a * s.groupY;
            });
          }
          break;
        case "bottom":
          if (y.height = t < x.itemMinHeight ? x.itemMinHeight : t > G("bottom") ? G("bottom") : t, y.isGroup === !0) {
            const n = y.height - 2 * g - (y.groupTit ? d : 0);
            y.groupData.forEach((a) => {
              a.height = n * a.groupH, a.y = n * a.groupY;
            });
          }
          break;
        case "bottom-right":
          if (y.height = t < x.itemMinHeight ? x.itemMinHeight : t > G("bottom") ? G("bottom") : t, y.width = e < x.itemMinWidth ? x.itemMinWidth : e > G("right") ? G("right") : e, y.isGroup === !0) {
            const n = y.width - 2 * g, a = y.height - 2 * g - (y.groupTit ? d : 0);
            y.groupData.forEach((s) => {
              s.width = n * s.groupW, s.x = n * s.groupX, s.height = a * s.groupH, s.y = a * s.groupY;
            });
          }
          break;
      }
      Q(y);
      let o = I(u.value.filter((n) => n.drag !== !0).filter((n) => n.x < y.x && n.x + n.width > y.x || n.x === y.x || n.x > y.x && n.x < y.x + y.width).filter((n) => n.y < y.y && n.y + n.height > y.y || n.y === y.y || n.y > y.y && n.y < y.y + y.height));
      if (o.length > 0) {
        o.sort((n, a) => {
          const s = n.y, h = a.y;
          return s - h;
        });
        for (let n = 0; n < o.length; n++)
          o.filter((a) => a.id === o[n].id).forEach((a) => {
            a.y += y.y + y.height - a.y, u.value.filter((h) => h.id === a.id)[0].y = a.y;
            const s = (h) => {
              u.value.filter((p) => p.drag !== !0 && p.id !== h.id).filter((p) => p.x < h.x && p.x + p.width > h.x || p.x === h.x || p.x > h.x && p.x < h.x + h.width).filter((p) => p.y < h.y && p.y + p.height > h.y || p.y === h.y || p.y > h.y && p.y < h.y + h.height).forEach((p) => {
                p.y = h.y + h.height, s(p);
              });
            };
            s(a);
          });
      }
      Y(!1);
    }, Ct = (i) => {
      delete y.drag, vt = "", y = null, Q(null), window.removeEventListener("mousemove", It), window.removeEventListener("mouseup", Ct), Y();
    }, G = (i) => {
      switch (i) {
        case "top":
          return F + q - Z;
        case "left":
          return U + K - m;
        case "right":
          return (pt > 0 ? pt : B) - U;
        case "bottom":
          return dt > 0 ? dt - F : 999999999;
      }
    }, Y = (i = !0) => {
      i === !0 && Pt();
      const e = u.value.map((t) => t.y + t.height);
      e.length > 0 ? et.value = Math.max(...e) : et.value = 0;
    };
    $t(
      () => x.ySpace,
      () => {
        x.ySpace >= 0 && Pt();
      }
    );
    const Pt = () => {
      const i = I(u.value).sort((e, t) => {
        const r = e.y, l = t.y;
        return r - l;
      });
      for (let e = 0; e < i.length; e++) {
        if (e === 0 && i[e].y > 0) {
          const t = i[e].y;
          for (let r = e; r < i.length; r++)
            i[r].y -= t, u.value.filter((l) => l.id === i[r].id)[0].y = i[r].y;
        }
        if (e < i.length - 1 && i[e + 1].y > i[e].y + i[e].height) {
          const t = I(i.slice(0, e + 1));
          if (i[e + 1].y > Math.max(...t.map((r) => r.y + r.height))) {
            const r = i[e + 1].y - Math.max(...t.map((l) => l.y + l.height));
            for (let l = e + 1; l < i.length; l++)
              i[l].y -= r, u.value.filter((f) => f.id === i[l].id)[0].y = i[l].y;
          }
        }
      }
      for (let e = 0; e < i.length - 1; e++) {
        let t = i.findIndex((r) => r.y === i[e].y + i[e].height);
        if (t !== -1)
          for (let r = t; r < i.length; r++)
            i[r].y += x.ySpace, u.value.filter((l) => l.id === i[r].id)[0].y = i[r].y;
      }
    };
    le(() => {
      St.observe(b.value);
    });
    const St = new ResizeObserver((i) => {
      Ut(B === i[0].contentRect.width ? null : i[0].contentRect.width, Dt === i[0].contentRect.height ? null : i[0].contentRect.height);
    });
    let wt = !1;
    const Ft = (i = [], e = null) => {
      u.value = I(i), u.value.filter((t) => t.isGroup === !0).forEach((t) => {
        if (t.isGroup === !0)
          if (t.groupData.length < 2)
            st(t.id);
          else {
            const r = ft(t.groupData, t);
            gt(r);
          }
      }), e !== null ? Bt(() => {
        const r = b.value.getBoundingClientRect().width / e, l = getComputedStyle(b.value), f = parseInt(l.getPropertyValue("--com-item-border-width").trim()), c = parseInt(l.getPropertyValue("--group-tit-height").trim());
        u.value.forEach((w) => {
          if (w.width *= r, w.height *= r, w.x *= r, w.y *= r, w.isGroup === !0) {
            const g = w.width - 2 * f, d = w.height - 2 * f - (w.groupTit ? c : 0);
            w.groupData.forEach((o) => {
              o.width = g * o.groupW, o.x = g * o.groupX, o.height = d * o.groupH, o.y = d * o.groupY;
            });
          }
        }), Y();
      }) : Y(), wt = !0, setTimeout(() => {
        wt = !1;
      }, 500);
    }, Tt = (i, e, t) => {
      const r = e.map((c) => c.y), l = Math.max(...r), f = e.filter((c) => c.y + c.height > l);
      f.sort((c, w) => {
        const g = c.x, d = w.x;
        return g - d;
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
        const c = e.map((w) => w.y + w.height);
        i.y = Math.max(...c);
      }
    }, yt = (i, e = null, t = !1) => {
      const r = I(i), l = u.value.filter((f) => f.id === e);
      if (r.id || (r.id = (/* @__PURE__ */ new Date()).getTime() + ""), e && l.length !== 1) {
        try {
        } catch {
        }
        return;
      }
      if (t !== !0)
        if (delete r.x, delete r.y, e) {
          const f = getComputedStyle(b.value), c = parseInt(f.getPropertyValue("--com-item-border-width").trim());
          Tt(r, l[0].groupData, l[0].width - 2 * c);
        } else
          u.value.length === 0 ? (r.x = 0, r.y = 0) : Tt(r, u.value, B);
      if (e) {
        l[0].groupData.push(r);
        const f = ft(l[0].groupData, l[0]);
        gt(f);
      } else
        u.value.push(r);
      Y();
    }, j = (i, e = null) => {
      let t = -1;
      const r = u.value.filter((l) => l.id === e);
      if (e ? r.length === 1 && (t = r[0].groupData.findIndex((l) => l.id === i)) : t = u.value.findIndex((l) => l.id === i), t !== -1) {
        if (e)
          if (r[0].groupData.splice(t, 1), r[0].groupData.length === 1)
            st(e);
          else {
            const l = ft(r[0].groupData, r[0]);
            gt(l);
          }
        else
          u.value.splice(t, 1);
        Y();
      } else
        try {
        } catch {
        }
    }, gt = (i) => {
      if (i.id) {
        const e = I(i);
        let t = -1;
        const r = u.value.filter((l) => l.id === e.inGroupId);
        if (e.inGroupId ? r.length === 1 && (t = r[0].groupData.findIndex((l) => l.id === e.id)) : t = u.value.findIndex((l) => l.id === e.id), t !== -1)
          e.inGroupId ? r[0].groupData[t] = e : u.value[t] = e, Y();
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, Ut = (i, e) => {
      if (i !== null) {
        const t = B ? i / B : 1;
        B = i;
        const r = getComputedStyle(b.value), l = parseInt(r.getPropertyValue("--com-item-border-width").trim()), f = parseInt(r.getPropertyValue("--group-tit-height").trim());
        wt || (u.value.forEach((c) => {
          if (c.width *= t, c.height *= t, c.x *= t, c.y *= t, c.isGroup === !0) {
            const w = c.width - 2 * l, g = c.height - 2 * l - (c.groupTit ? f : 0);
            c.groupData.forEach((d) => {
              d.width = w * d.groupW, d.x = w * d.groupX, d.height = g * d.groupH, d.y = g * d.groupY;
            });
          }
        }), Y());
      }
      e !== null && (Dt = e);
    }, Yt = (i) => {
      i.showPop || (u.value.forEach((e) => {
        delete e.showPop, e.groupData && e.groupData.forEach((t) => {
          delete t.showPop;
        });
      }), i.showPop = !0, window.addEventListener("click", nt));
    }, nt = () => {
      u.value.forEach((i) => {
        delete i.showPop, i.groupData && i.groupData.forEach((e) => {
          delete e.showPop;
        });
      }), window.removeEventListener("click", nt);
    }, R = z(!1), Xt = (i) => {
      const e = u.value.findIndex((t) => t.id === i);
      if (e !== -1)
        u.value[e].checked = !0, u.value[e].disabled = !0, R.value = !0, J("showGroup", R.value);
      else
        try {
        } catch {
        }
    }, bt = () => {
      R.value = !1, u.value.forEach((i) => {
        delete i.checked, delete i.disabled, i.groupData && i.groupData.forEach((e) => {
          delete e.checked, delete e.disabled;
        });
      }), J("showGroup", R.value);
    }, Jt = (i) => {
      i.checked = !i.checked, J("updateChecked", u.value.filter((e) => e.checked).length);
    }, ft = (i, e) => {
      const t = I(i), r = I(e);
      t.sort((o, n) => {
        const a = o.x, s = n.x;
        return a - s;
      });
      for (let o = 0; o < t.length - 1; o++) {
        if (o === 0 && t[o].x > 0) {
          const n = t[o].x;
          for (let a = o; a < t.length; a++)
            t[a].x -= n;
        }
        if (t[o + 1].x > t[o].x + t[o].width) {
          const n = I(t.slice(0, o + 1));
          if (t[o + 1].x > Math.max(...n.map((a) => a.x + a.width))) {
            const a = t[o + 1].x - Math.max(...n.map((s) => s.x + s.width));
            for (let s = o + 1; s < t.length; s++)
              t[s].x -= a;
          }
        }
      }
      t.sort((o, n) => {
        const a = o.y, s = n.y;
        return a - s;
      });
      for (let o = 0; o < t.length - 1; o++) {
        if (o === 0 && t[o].y > 0) {
          const n = t[o].y;
          for (let a = o; a < t.length; a++)
            t[a].y -= n;
        }
        if (t[o + 1].y > t[o].y + t[o].height) {
          const n = I(t.slice(0, o + 1));
          if (t[o + 1].y > Math.max(...n.map((a) => a.y + a.height))) {
            const a = t[o + 1].y - Math.max(...n.map((s) => s.y + s.height));
            for (let s = o + 1; s < t.length; s++)
              t[s].y -= a;
          }
        }
      }
      const l = t.map((o) => o.x + o.width), f = Math.max(...l), c = t.map((o) => o.y + o.height), w = Math.max(...c);
      t.forEach((o) => {
        o.inGroupId || (o.inGroupId = r.id), o.groupW = o.width / f, o.groupH = o.height / w, o.groupX = o.x / f, o.groupY = o.y / w, o.isObstacle = o.x + o.width === f && o.y === 0;
      });
      const g = getComputedStyle(b.value), d = parseInt(g.getPropertyValue("--com-item-border-width").trim());
      return r.width = f + 2 * d, r.height = w + 2 * d, r.groupData = [...t], r;
    }, Qt = () => {
      Bt(() => {
        const i = getComputedStyle(b.value), e = parseInt(i.getPropertyValue("--com-item-border-width").trim()), t = parseInt(i.getPropertyValue("--group-tit-height").trim());
        u.value.filter((r) => r.isGroup === !0).forEach((r) => {
          const l = r.width - 2 * e, f = r.height - 2 * e - (r.groupTit ? t : 0);
          r.groupData.forEach((c) => {
            c.width = l * c.groupW, c.x = l * c.groupX, c.height = f * c.groupH, c.y = f * c.groupY;
          });
        });
      });
    }, Zt = () => {
      const i = u.value.filter((e) => e.checked);
      if (i.length > 1) {
        const e = {
          id: (/* @__PURE__ */ new Date()).getTime() + "G",
          isGroup: !0,
          groupTit: ""
        }, t = ft(i, e);
        t.groupData.forEach((r) => {
          j(r.id);
        }), yt(t), Y();
      }
      bt();
    }, zt = (i, e) => {
      const t = u.value.filter((r) => r.id === e)[0];
      if (t) {
        const r = t.groupData.filter((l) => l.id === i)[0];
        if (r)
          t.groupData.length === 2 ? st(e) : (delete r.inGroupId, delete r.groupW, delete r.groupH, delete r.groupX, delete r.groupY, delete r.isObstacle, j(r.id, t.id), yt(r), Y());
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, st = (i) => {
      const e = u.value.filter((t) => t.id === i)[0];
      if (e)
        j(e.id), e.groupData.forEach((t) => {
          delete t.inGroupId, delete t.groupW, delete t.groupH, delete e.groupX, delete e.groupY, delete e.isObstacle, t.x += e.x, t.y += e.y, yt(t, null, !0);
        }), Y();
      else
        try {
        } catch {
        }
    }, mt = (i = "", e) => {
      const t = u.value.filter((r) => r.id === e)[0];
      if (t) {
        if (!t.groupTit || !i) {
          const l = getComputedStyle(b.value), f = parseInt(l.getPropertyValue("--group-tit-height").trim());
          t.groupTit && !i && (t.height -= f), !t.groupTit && i && (t.height += f);
        }
        t.groupTit = i;
        const r = (l) => {
          u.value.filter((c) => c.id !== l.id).filter((c) => c.x < l.x && c.x + c.width > l.x || c.x === l.x || c.x > l.x && c.x < l.x + l.width).filter((c) => c.y < l.y && c.y + c.height > l.y || c.y === l.y || c.y > l.y && c.y < l.y + l.height).forEach((c) => {
            c.y = l.y + l.height, r(c);
          });
        };
        r(t), Y();
      } else
        try {
        } catch {
        }
    }, jt = () => {
      const i = I(u.value);
      return i.forEach((e) => {
        delete e.showPop, e.groupData && e.groupData.forEach((t) => {
          delete t.showPop;
        });
      }), { data: i, width: B };
    };
    return ie(() => {
      St.unobserve(b.value), window.removeEventListener("click", nt);
    }), V({ init: Ft, addItem: yt, deleteItem: j, updateItem: gt, openGroup: Xt, closeGroup: bt, changeGroupBorder: Qt, addGroup: Zt, removeGroupItem: zt, removeGroup: st, changeGroupTit: mt, getData: jt }), (i, e) => (E(), D("div", {
      class: "vue-drag-component-plus",
      ref_key: "pageRef",
      ref: b
    }, [
      X("div", {
        class: "content-box",
        ref_key: "boxRef",
        ref: Nt
      }, [
        (E(!0), D(at, null, Vt(k(u), (t, r) => (E(), D("div", {
          class: ht(["com-item", M.seeModel || k(R) || t.static === !0 || t.dragable === !1 ? "" : "can-drag", t.move ? "is-move" : "", t.drag ? "is-drag" : "", t.showPop ? "on-top" : "", M.seeModel ? "no-hover" : ""]),
          style: L({
            width: t.width + "px",
            height: t.height + "px",
            top: t.y + "px",
            left: t.x + "px"
          }),
          key: r,
          onMousedown: T((l) => M.seeModel || k(R) || t.static === !0 || t.dragable === !1 ? null : qt(l, r), ["prevent"])
        }, [
          X("div", ne, [
            t.isGroup ? (E(), D(at, { key: 0 }, [
              t.groupTit ? (E(), D("div", {
                key: 0,
                class: "group-item-tit",
                title: t.groupTit
              }, $(t.groupTit), 9, se)) : H("", !0),
              X("div", {
                class: ht(["group-item-content", t.groupTit ? "" : "full"])
              }, [
                (E(!0), D(at, null, Vt(t.groupData, (l, f) => (E(), D("div", {
                  class: ht(["com-item-box-child", l.isObstacle ? "else" : ""]),
                  style: L({
                    width: l.width + "px",
                    height: l.height + "px",
                    top: l.y + "px",
                    left: l.x + "px"
                  }),
                  key: f
                }, [
                  X("div", ae, [
                    tt(i.$slots, "item", { data: l }, () => [
                      X("p", null, $(Math.round(l.width * 100) / 100) + "," + $(Math.round(l.height * 100) / 100), 1),
                      X("p", null, $(Math.round(l.x * 100) / 100) + "," + $(Math.round(l.y * 100) / 100), 1)
                    ])
                  ]),
                  !M.seeModel && !k(R) && k(O) === null && k(y) === null ? (E(), D("div", {
                    key: 0,
                    class: "setting-box",
                    style: L({ display: l.showPop ? "flex" : "none" }),
                    onMousedown: T((c) => null, ["prevent", "stop"])
                  }, [
                    _t(At, {
                      iconObj: M.settingIcon,
                      onClick: T((c) => Yt(l), ["prevent", "stop"])
                    }, null, 8, ["iconObj", "onClick"])
                  ], 36)) : H("", !0),
                  l.showPop ? (E(), D("div", {
                    key: 1,
                    class: "setting-box-pop",
                    onMousedown: T((c) => null, ["prevent", "stop"])
                  }, [
                    tt(i.$slots, "setPopNormal", {
                      data: I(l)
                    }, () => [
                      X("div", {
                        class: "setting-box-pop-item",
                        onClick: (c) => zt(l.id, l.inGroupId)
                      }, "移出组合", 8, he),
                      X("div", {
                        class: "setting-box-pop-item",
                        onClick: (c) => j(l.id, l.inGroupId)
                      }, "删除", 8, ue)
                    ])
                  ], 32)) : H("", !0)
                ], 6))), 128))
              ], 2)
            ], 64)) : (E(), D("div", ce, [
              tt(i.$slots, "item", { data: t }, () => [
                X("p", null, $(Math.round(t.width * 100) / 100) + "," + $(Math.round(t.height * 100) / 100), 1),
                X("p", null, $(Math.round(t.x * 100) / 100) + "," + $(Math.round(t.y * 100) / 100), 1)
              ])
            ])),
            !t.isGroup && t.notGroup !== !0 && k(R) ? (E(), D("div", {
              key: 2,
              class: ht(["group-checkbox", t.checked ? "is-checked" : "", t.disabled ? "disabled" : ""]),
              onClick: (l) => t.disabled ? null : Jt(t)
            }, null, 10, de)) : H("", !0),
            !M.seeModel && !k(R) && k(O) === null && k(y) === null ? (E(), D("div", {
              key: 3,
              class: "setting-box",
              style: L({ display: t.showPop ? "flex" : "none" }),
              onMousedown: T((l) => null, ["prevent", "stop"])
            }, [
              _t(At, {
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
                  onClick: (l) => st(t.id)
                }, "解除组合", 8, ye)
              ]) : tt(i.$slots, "setPopNormal", {
                key: 1,
                data: I(t)
              }, () => [
                t.notGroup !== !0 ? (E(), D("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (l) => Xt(t.id)
                }, "组合", 8, ge)) : H("", !0),
                X("div", {
                  class: "setting-box-pop-item",
                  onClick: (l) => j(t.id)
                }, "删除", 8, fe)
              ])
            ], 34)) : H("", !0)
          ]),
          !M.seeModel && !k(R) && !t.move && t.static !== !0 && t.resizable !== !1 ? (E(), D(at, { key: 0 }, [
            k(_).indexOf("topLeft") !== -1 ? (E(), D("div", {
              key: 0,
              class: "resize-line top-left",
              onMousedown: T((l) => N(l, t, "top-left"), ["prevent", "stop"])
            }, null, 40, xe)) : H("", !0),
            k(_).indexOf("top") !== -1 ? (E(), D("div", {
              key: 1,
              class: "resize-line top",
              onMousedown: T((l) => N(l, t, "top"), ["prevent", "stop"])
            }, null, 40, ve)) : H("", !0),
            k(_).indexOf("topRight") !== -1 ? (E(), D("div", {
              key: 2,
              class: "resize-line top-right",
              onMousedown: T((l) => N(l, t, "top-right"), ["prevent", "stop"])
            }, null, 40, we)) : H("", !0),
            k(_).indexOf("left") !== -1 ? (E(), D("div", {
              key: 3,
              class: "resize-line left",
              onMousedown: T((l) => N(l, t, "left"), ["prevent", "stop"])
            }, null, 40, Me)) : H("", !0),
            k(_).indexOf("right") !== -1 ? (E(), D("div", {
              key: 4,
              class: "resize-line right",
              onMousedown: T((l) => N(l, t, "right"), ["prevent", "stop"])
            }, null, 40, ke)) : H("", !0),
            k(_).indexOf("bottomLeft") !== -1 ? (E(), D("div", {
              key: 5,
              class: "resize-line bottom-left",
              onMousedown: T((l) => N(l, t, "bottom-left"), ["prevent", "stop"])
            }, null, 40, Ee)) : H("", !0),
            k(_).indexOf("bottom") !== -1 ? (E(), D("div", {
              key: 6,
              class: "resize-line bottom",
              onMousedown: T((l) => N(l, t, "bottom"), ["prevent", "stop"])
            }, null, 40, De)) : H("", !0),
            k(_).indexOf("bottomRight") !== -1 ? (E(), D("div", {
              key: 7,
              class: "resize-line bottom-right",
              onMousedown: T((l) => N(l, t, "bottom-right"), ["prevent", "stop"])
            }, null, 40, Oe)) : H("", !0)
          ], 64)) : H("", !0)
        ], 46, oe))), 128)),
        k(O) !== null ? (E(), D("div", {
          key: 0,
          class: "drag-bg",
          style: L({
            width: k(C).width + "px",
            height: k(C).height + "px",
            top: k(C).y + "px",
            left: k(C).x + "px"
          })
        }, null, 4)) : H("", !0),
        X("div", {
          class: "height-bg",
          style: L({ height: (k(et) > 0 ? +(k(et) + (M.seeModel ? M.seeModelMinBg : 220)) : k(et)) + "px" })
        }, null, 4),
        M.hideAuxiliary ? H("", !0) : (E(), D(at, { key: 1 }, [
          k(lt) !== null ? (E(), D("div", {
            key: 0,
            class: "auxiliary-line hor",
            style: L({ top: k(lt) + "px", left: "0px" })
          }, null, 4)) : H("", !0),
          k(it) !== null ? (E(), D("div", {
            key: 1,
            class: "auxiliary-line hor",
            style: L({ top: k(it) + "px", left: "0px" })
          }, null, 4)) : H("", !0),
          k(rt) !== null ? (E(), D("div", {
            key: 2,
            class: "auxiliary-line",
            style: L({ top: "0px", left: k(rt) + "px" })
          }, null, 4)) : H("", !0),
          k(ot) !== null ? (E(), D("div", {
            key: 3,
            class: "auxiliary-line",
            style: L({ top: "0px", left: k(ot) + "px" })
          }, null, 4)) : H("", !0)
        ], 64)),
        k(u).length === 0 ? (E(), D("div", Ge, [
          tt(i.$slots, "empty", {}, () => [
            re(" 暂无数据 ")
          ])
        ])) : H("", !0)
      ], 512)
    ], 512));
  }
}, He = [We], Ie = {
  install(M) {
    He.forEach((V) => {
      M.component("vueDragComponentPlus", V);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Ie);
export {
  Ie as default
};
