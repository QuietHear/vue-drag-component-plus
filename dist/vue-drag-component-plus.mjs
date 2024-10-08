import { resolveComponent as te, openBlock as E, createBlock as Mt, resolveDynamicComponent as Lt, normalizeProps as $t, mergeProps as xt, withCtx as ee, createElementBlock as D, toDisplayString as V, watch as Vt, ref as R, onMounted as le, onBeforeUnmount as ie, createElementVNode as X, Fragment as nt, renderList as _t, unref as k, normalizeClass as ht, normalizeStyle as $, withModifiers as T, createCommentVNode as H, renderSlot as tt, createVNode as bt, createTextVNode as re, nextTick as Bt } from "vue";
const At = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(M) {
    return (_, kt) => {
      const J = te("el-icon");
      return M.iconObj.type === "custom" ? (E(), Mt(Lt(M.iconObj.icon), $t(xt({ key: 0 }, M.iconObj.attrs)), null, 16)) : M.iconObj.type === "el" ? (E(), Mt(J, $t(xt({ key: 1 }, M.iconObj.attrs)), {
        default: ee(() => [
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
const oe = ["onMousedown"], se = { class: "com-item-box" }, ae = ["title"], ne = { class: "com-item-box-content" }, he = ["onClick"], ue = ["onClick"], ce = {
  key: 1,
  class: "com-item-box-content"
}, de = ["onClick"], ye = ["onClick"], pe = ["onClick"], ge = ["onClick"], fe = ["onClick"], xe = ["onMousedown"], ve = ["onMousedown"], we = ["onMousedown"], Me = ["onMousedown"], ke = ["onMousedown"], Ee = ["onMousedown"], De = ["onMousedown"], Oe = ["onMousedown"], Ge = {
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
      validator(M, _) {
        return M >= 0;
      }
    },
    // 组件项最小宽度
    itemMinWidth: {
      type: Number,
      default: 15,
      validator(M, _) {
        return M >= 15;
      }
    },
    // 组件项最小高度
    itemMinHeight: {
      type: Number,
      default: 15,
      validator(M, _) {
        return M >= 15;
      }
    },
    // 纵向相邻元素的自动间距
    ySpace: {
      type: Number,
      default: 7,
      validator(M, _) {
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
      validator(M, _) {
        return M >= 1;
      }
    }
  },
  emits: ["showGroup", "updateChecked", "showTitPop"],
  setup(M, { expose: _, emit: kt }) {
    const J = kt, v = M, I = (i) => {
      let e = i instanceof Array ? [] : {};
      for (let t in i)
        e[t] = typeof i[t] == "object" ? I(i[t]) : i[t];
      return e;
    }, Et = () => {
      v.insertResizeKeys.forEach((i) => {
        v.excludeResizeKeys.indexOf(i) === -1 && b.value.push(i);
      });
    };
    Vt(
      () => [v.insertResizeKeys, v.excludeResizeKeys],
      () => {
        Et();
      }
    );
    const b = R([]);
    Et();
    const z = R(null);
    let B = null, Dt = null;
    const Nt = R(null), et = R(0), lt = R(null), it = R(null), rt = R(null), ot = R(null), Q = (i) => {
      const e = I(i);
      if (i === null)
        lt.value = null, it.value = null, rt.value = null, ot.value = null;
      else {
        const t = getComputedStyle(z.value), r = parseInt(t.getPropertyValue("--auxiliary-width").trim()), l = c.value.filter((o) => o.id !== e.id).map((o) => o.y), f = c.value.filter((o) => o.id !== e.id).map((o) => o.y + o.height - 1), d = [...l, ...f];
        d.sort(), d.filter((o) => o <= e.y && e.y - v.auxiliarySpace < o || o >= e.y && e.y + v.auxiliarySpace > o).length > 0 ? lt.value = e.y : lt.value = null, d.filter((o) => o <= e.y + e.height - 1 && e.y + e.height - 1 - v.auxiliarySpace < o || o >= e.y + e.height - 1 && e.y + e.height - 1 + v.auxiliarySpace > o).length > 0 ? it.value = e.y + e.height - r : it.value = null;
        const x = c.value.filter((o) => o.id !== e.id).map((o) => o.x), g = c.value.filter((o) => o.id !== e.id).map((o) => o.x + o.width - 1), n = [...x, ...g];
        n.sort(), n.filter((o) => o <= e.x && e.x - v.auxiliarySpace < o || o >= e.x && e.x + v.auxiliarySpace > o).length > 0 ? rt.value = e.x : rt.value = null, n.filter((o) => o <= e.x + e.width - 1 && e.x + e.width - 1 - v.auxiliarySpace < o || o >= e.x + e.width - 1 && e.x + e.width - 1 + v.auxiliarySpace > o).length > 0 ? ot.value = e.x + e.width - r : ot.value = null;
      }
    }, c = R([]), Kt = (i, e) => {
      let t = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector;
      for (; i && !t.call(i, e); )
        i = i.parentElement;
      return i;
    };
    let O = null, Ot = null, Gt = null;
    const P = R({}), qt = (i, e) => {
      st(), O = e, P.value = I(c.value[O]), c.value[O].move = !0, Q(c.value[O]);
      const t = Kt(i.target, ".com-item");
      Ot = i.clientX - t.offsetLeft, Gt = i.clientY - t.offsetTop, window.addEventListener("mousemove", Wt), window.addEventListener("mouseup", Ht);
    }, Wt = (i) => {
      const e = i.clientX - Ot, t = i.clientY - Gt, r = e <= A("left") ? A("left") : e >= A("right") ? A("right") : e, l = t <= A("top") ? A("top") : t >= A("bottom") ? A("bottom") : t, f = r - c.value[O].x, d = l - c.value[O].y, x = `${f > 0 ? "right" : f < 0 ? "left" : ""}_${d > 0 ? "bottom" : d < 0 ? "top" : ""}`;
      c.value[O].x = r, c.value[O].y = l, Q(c.value[O]);
      let g = I(c.value.filter((n) => n.move !== !0).filter((n) => n.x < r && n.x + n.width > r || n.x === r || n.x > r && n.x < r + c.value[O].width).filter((n) => n.y < l && n.y + n.height > l || n.y === l || n.y > l && n.y < l + c.value[O].height));
      if (g.length === 0)
        P.value.x = r, P.value.y = l;
      else {
        if (x.indexOf("top") !== -1) {
          g = g.filter((u) => u.y < P.value.y);
          const n = Math.min(...g.map((u) => u.y + u.height));
          g.forEach((u) => {
            Math.abs(u.y + u.height - n) < 5 && (u.y = n - u.height);
          });
          let o = P.value.y - l, s = !0, h = [...g];
          const a = (u) => {
            I(c.value.filter((y) => y.move !== !0 && y.y + y.height - u.y <= o + 3 && y.y + y.height - u.y >= 0).filter((y) => y.x < u.x && y.x + y.width > u.x || y.x >= u.x && y.x < u.x + u.width)).forEach((y) => {
              y.y + y.height !== u.y && (y.y = u.y - y.height), h.findIndex((W) => W.id === y.id) === -1 && (h.push(y), a(y));
            });
          };
          if (g.forEach((u) => {
            a(u);
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
          const n = Math.max(...g.map((o) => o.y + o.height));
          if (n - (l + c.value[O].height) >= -7 && n - (l + c.value[O].height) < 7) {
            let o = !0;
            g.filter((s) => s.y > P.value.y).forEach((s) => {
              s.y -= c.value[O].height, c.value.filter((a) => a.id === s.id)[0].y = s.y;
              const h = c.value.filter((a) => a.move !== !0 && a.id !== s.id).filter((a) => a.x < s.x && a.x + a.width > s.x || a.x === s.x || a.x > s.x && a.x < s.x + s.width).filter((a) => a.y < s.y && a.y + a.height > s.y || a.y === s.y || a.y > s.y && a.y < s.y + s.height);
              if (h.length > 0) {
                s.y = Math.max(...h.map((u) => u.y + u.height)), c.value.filter((u) => u.id === s.id)[0].y = s.y;
                const a = (u) => {
                  c.value.filter((y) => y.id !== u.id).filter((y) => y.x < u.x && y.x + y.width > u.x || y.x === u.x || y.x > u.x && y.x < u.x + u.width).filter((y) => y.y < u.y && y.y + y.height > u.y || y.y === u.y || y.y > u.y && y.y < u.y + u.height).forEach((y) => {
                    y.y = u.y + u.height, y.move === !0 && (P.value.y = y.y, o = !1), a(y);
                  });
                };
                a(s);
              }
            }), P.value.x = r, o && (P.value.y = n - c.value[O].height), g = I(c.value.filter((s) => s.move !== !0).filter((s) => s.x < r && s.x + s.width > r || s.x === r || s.x > r && s.x < r + c.value[O].width).filter((s) => s.y < l && s.y + s.height > l || s.y === l || s.y > l && s.y < l + c.value[O].height));
          }
        }
        if (((x.indexOf("top") !== -1 || x.indexOf("bottom") !== -1) && (x.indexOf("right") !== -1 || x.indexOf("left") !== -1) && Math.abs(f) > 8 || x.indexOf("top") === -1 && x.indexOf("bottom") === -1 && (x.indexOf("right") !== -1 || x.indexOf("left") !== -1)) && g.length > 0) {
          g.sort((o, s) => {
            const h = o.y, a = s.y;
            return h - a;
          });
          let n = !0;
          for (let o = 0; o < g.length; o++) {
            if (n) {
              const s = I(c.value);
              for (let h = 0; h <= o; h++) {
                let a = null;
                const u = s.filter((w) => w.move !== !0 && w.y < g[h].y).filter((w) => w.x < g[h].x && w.x + w.width > g[h].x || w.x === g[h].x || w.x > g[h].x && w.x < g[h].x + g[h].width);
                if (u.length === 0 ? a = 0 : a = Math.max(...u.map((w) => w.y + w.height)), h === o) {
                  if (g[h].y - (g[h].y + g[h].height - l) < a) {
                    n = !1;
                    break;
                  }
                } else if (g[h].y - g[o].height < a) {
                  n = !1;
                  break;
                } else
                  s.filter((w) => w.id === g[h].id)[0].y -= g[o].height;
              }
            }
            if (n) {
              g[o].y -= g[o].y + g[o].height - l, c.value.filter((s) => s.id === g[o].id)[0].y = g[o].y;
              for (let s = o; s > 0; s--)
                g[o - 1].y -= g[o].height, c.value.filter((h) => h.id === g[o - 1].id)[0].y = g[o - 1].y;
            } else
              g.filter((s) => s.id === g[o].id).forEach((s) => {
                s.y += c.value[O].y + c.value[O].height - s.y, c.value.filter((a) => a.id === s.id)[0].y = s.y;
                const h = (a) => {
                  c.value.filter((w) => w.move !== !0 && w.id !== a.id).filter((w) => w.x < a.x && w.x + w.width > a.x || w.x === a.x || w.x > a.x && w.x < a.x + a.width).filter((w) => w.y < a.y && w.y + w.height > a.y || w.y === a.y || w.y > a.y && w.y < a.y + a.height).forEach((w) => {
                    w.y = a.y + a.height, h(w);
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
    }, A = (i) => {
      switch (i) {
        case "top":
          return 0;
        case "right":
          return B - c.value[O].width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let p = null, vt = "", ut = 0, ct = 0, K = 0, q = 0, F = 0, U = 0, Z = 0, dt = 0, m = 0, yt = 0;
    const N = (i, e, t) => {
      st(), p = e, vt = t, ut = i.clientX, ct = i.clientY, K = e.width, q = e.height, F = e.y, U = e.x, p.drag = !0, Q(p);
      const r = c.value.filter((n) => n.static === !0 && (n.x < e.x ? n.x + n.width >= e.x : n.x <= e.x + e.width)), l = c.value.filter((n) => n.static === !0 && (n.y < e.y ? n.y + n.height >= e.y : n.y <= e.y + e.height)), f = r.filter((n) => n.y + n.height <= e.y).map((n) => n.y + n.height);
      f.length > 0 ? Z = Math.max(...f) : Z = 0;
      const d = r.filter((n) => n.y >= e.y + e.height).map((n) => n.y);
      d.length > 0 ? dt = Math.min(...d) : dt = 0;
      const x = l.filter((n) => n.x + n.width <= e.x).map((n) => n.x + n.width);
      x.length > 0 ? m = Math.max(...x) : m = 0;
      const g = l.filter((n) => n.x >= e.x + e.width).map((n) => n.x);
      g.length > 0 ? yt = Math.min(...g) : yt = 0, window.addEventListener("mousemove", It), window.addEventListener("mouseup", Pt);
    }, It = (i) => {
      const e = K + (i.clientX - ut), t = q + (i.clientY - ct), r = K - (i.clientX - ut), l = q - (i.clientY - ct), f = F + (i.clientY - ct), d = U + (i.clientX - ut), x = getComputedStyle(z.value), g = parseInt(x.getPropertyValue("--com-item-border-width").trim()), n = parseInt(x.getPropertyValue("--group-tit-height").trim());
      switch (vt) {
        case "top-left":
          if (p.height = l < v.itemMinHeight ? v.itemMinHeight : l > G("top") ? G("top") : l, p.y = l < v.itemMinHeight ? F + q - v.itemMinHeight : l > G("top") ? Z : f, p.width = r < v.itemMinWidth ? v.itemMinWidth : r > G("left") ? G("left") : r, p.x = r < v.itemMinWidth ? U + K - v.itemMinWidth : r > G("left") ? m : d, p.isGroup === !0) {
            const s = p.width - 2 * g, h = p.height - 2 * g - (p.groupTit ? n : 0);
            p.groupData.forEach((a) => {
              a.width = s * a.groupW, a.x = s * a.groupX, a.height = h * a.groupH, a.y = h * a.groupY;
            });
          }
          break;
        case "top":
          if (p.height = l < v.itemMinHeight ? v.itemMinHeight : l > G("top") ? G("top") : l, p.y = l < v.itemMinHeight ? F + q - v.itemMinHeight : l > G("top") ? Z : f, p.isGroup === !0) {
            const s = p.height - 2 * g - (p.groupTit ? n : 0);
            p.groupData.forEach((h) => {
              h.height = s * h.groupH, h.y = s * h.groupY;
            });
          }
          break;
        case "top-right":
          if (p.height = l < v.itemMinHeight ? v.itemMinHeight : l > G("top") ? G("top") : l, p.y = l < v.itemMinHeight ? F + q - v.itemMinHeight : l > G("top") ? Z : f, p.width = e < v.itemMinWidth ? v.itemMinWidth : e > G("right") ? G("right") : e, p.isGroup === !0) {
            const s = p.width - 2 * g, h = p.height - 2 * g - (p.groupTit ? n : 0);
            p.groupData.forEach((a) => {
              a.width = s * a.groupW, a.x = s * a.groupX, a.height = h * a.groupH, a.y = h * a.groupY;
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
            const s = p.width - 2 * g, h = p.height - 2 * g - (p.groupTit ? n : 0);
            p.groupData.forEach((a) => {
              a.width = s * a.groupW, a.x = s * a.groupX, a.height = h * a.groupH, a.y = h * a.groupY;
            });
          }
          break;
        case "bottom":
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > G("bottom") ? G("bottom") : t, p.isGroup === !0) {
            const s = p.height - 2 * g - (p.groupTit ? n : 0);
            p.groupData.forEach((h) => {
              h.height = s * h.groupH, h.y = s * h.groupY;
            });
          }
          break;
        case "bottom-right":
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > G("bottom") ? G("bottom") : t, p.width = e < v.itemMinWidth ? v.itemMinWidth : e > G("right") ? G("right") : e, p.isGroup === !0) {
            const s = p.width - 2 * g, h = p.height - 2 * g - (p.groupTit ? n : 0);
            p.groupData.forEach((a) => {
              a.width = s * a.groupW, a.x = s * a.groupX, a.height = h * a.groupH, a.y = h * a.groupY;
            });
          }
          break;
      }
      Q(p);
      let o = I(c.value.filter((s) => s.drag !== !0).filter((s) => s.x < p.x && s.x + s.width > p.x || s.x === p.x || s.x > p.x && s.x < p.x + p.width).filter((s) => s.y < p.y && s.y + s.height > p.y || s.y === p.y || s.y > p.y && s.y < p.y + p.height));
      if (o.length > 0) {
        o.sort((s, h) => {
          const a = s.y, u = h.y;
          return a - u;
        });
        for (let s = 0; s < o.length; s++)
          o.filter((h) => h.id === o[s].id).forEach((h) => {
            h.y += p.y + p.height - h.y, c.value.filter((u) => u.id === h.id)[0].y = h.y;
            const a = (u) => {
              c.value.filter((y) => y.drag !== !0 && y.id !== u.id).filter((y) => y.x < u.x && y.x + y.width > u.x || y.x === u.x || y.x > u.x && y.x < u.x + u.width).filter((y) => y.y < u.y && y.y + y.height > u.y || y.y === u.y || y.y > u.y && y.y < u.y + u.height).forEach((y) => {
                y.y = u.y + u.height, a(y);
              });
            };
            a(h);
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
          return (yt > 0 ? yt : B) - U;
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
    le(() => {
      St.observe(z.value);
    });
    const St = new ResizeObserver((i) => {
      Ut(B === i[0].contentRect.width ? null : i[0].contentRect.width, Dt === i[0].contentRect.height ? null : i[0].contentRect.height);
    });
    let wt = !1;
    const Ft = (i = [], e = null) => {
      c.value = I(i), c.value.filter((t) => t.isGroup === !0).forEach((t) => {
        if (t.isGroup === !0)
          if (t.groupData.length < 2)
            at(t.id);
          else {
            const r = ft(t.groupData, t);
            gt(r);
          }
      }), e !== null ? Bt(() => {
        const r = z.value.getBoundingClientRect().width / e, l = getComputedStyle(z.value), f = parseInt(l.getPropertyValue("--com-item-border-width").trim()), d = parseInt(l.getPropertyValue("--group-tit-height").trim());
        c.value.forEach((x) => {
          if (x.width *= r, x.height *= r, x.x *= r, x.y *= r, x.isGroup === !0) {
            const g = x.width - 2 * f, n = x.height - 2 * f - (x.groupTit ? d : 0);
            x.groupData.forEach((o) => {
              o.width = g * o.groupW, o.x = g * o.groupX, o.height = n * o.groupH, o.y = n * o.groupY;
            });
          }
        }), Y();
      }) : Y(), wt = !0, setTimeout(() => {
        wt = !1;
      }, 500);
    }, Tt = (i, e, t) => {
      const r = e.map((d) => d.y), l = Math.max(...r), f = e.filter((d) => d.y + d.height > l);
      f.sort((d, x) => {
        const g = d.x, n = x.x;
        return g - n;
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
          c.value.length === 0 ? (r.x = 0, r.y = 0) : Tt(r, c.value, B);
      if (e) {
        l[0].groupData.push(r);
        const f = ft(l[0].groupData, l[0]);
        gt(f);
        const d = (x) => {
          c.value.filter((n) => n.id !== x.id).filter((n) => n.x < x.x && n.x + n.width > x.x || n.x === x.x || n.x > x.x && n.x < x.x + x.width).filter((n) => n.y < x.y && n.y + n.height > x.y || n.y === x.y || n.y > x.y && n.y < x.y + x.height).forEach((n) => {
            n.y = x.y + x.height, d(n);
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
            at(e);
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
    }, Ut = (i, e) => {
      if (i !== null) {
        const t = B ? i / B : 1;
        B = i;
        const r = getComputedStyle(z.value), l = parseInt(r.getPropertyValue("--com-item-border-width").trim()), f = parseInt(r.getPropertyValue("--group-tit-height").trim());
        wt || (c.value.forEach((d) => {
          if (d.width *= t, d.height *= t, d.x *= t, d.y *= t, d.isGroup === !0) {
            const x = d.width - 2 * l, g = d.height - 2 * l - (d.groupTit ? f : 0);
            d.groupData.forEach((n) => {
              n.width = x * n.groupW, n.x = x * n.groupX, n.height = g * n.groupH, n.y = g * n.groupY;
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
    }, Jt = (i) => {
      i.checked = !i.checked, J("updateChecked", c.value.filter((e) => e.checked).length);
    }, ft = (i, e) => {
      const t = I(i), r = I(e);
      t.sort((o, s) => {
        const h = o.x, a = s.x;
        return h - a;
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
            const h = t[o + 1].x - Math.max(...s.map((a) => a.x + a.width));
            for (let a = o + 1; a < t.length; a++)
              t[a].x -= h;
          }
        }
      }
      t.sort((o, s) => {
        const h = o.y, a = s.y;
        return h - a;
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
            const h = t[o + 1].y - Math.max(...s.map((a) => a.y + a.height));
            for (let a = o + 1; a < t.length; a++)
              t[a].y -= h;
          }
        }
      }
      const l = t.map((o) => o.x + o.width), f = Math.max(...l), d = t.map((o) => o.y + o.height), x = Math.max(...d);
      t.forEach((o) => {
        o.inGroupId || (o.inGroupId = r.id), o.groupW = o.width / f, o.groupH = o.height / x, o.groupX = o.x / f, o.groupY = o.y / x, o.isObstacle = o.x + o.width === f && o.y === 0;
      });
      const g = getComputedStyle(z.value), n = parseInt(g.getPropertyValue("--com-item-border-width").trim());
      return r.width = f + 2 * n, r.height = x + 2 * n, r.groupData = [...t], r;
    }, Qt = () => {
      Bt(() => {
        const i = getComputedStyle(z.value), e = parseInt(i.getPropertyValue("--com-item-border-width").trim()), t = parseInt(i.getPropertyValue("--group-tit-height").trim());
        c.value.filter((r) => r.isGroup === !0).forEach((r) => {
          const l = r.width - 2 * e, f = r.height - 2 * e - (r.groupTit ? t : 0);
          r.groupData.forEach((d) => {
            d.width = l * d.groupW, d.x = l * d.groupX, d.height = f * d.groupH, d.y = f * d.groupY;
          });
        });
      });
    }, Zt = () => {
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
          t.groupData.length === 2 ? at(e) : (delete r.inGroupId, delete r.groupW, delete r.groupH, delete r.groupX, delete r.groupY, delete r.isObstacle, j(r.id, t.id), pt(r), Y());
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, at = (i) => {
      const e = c.value.filter((t) => t.id === i)[0];
      if (e)
        j(e.id), e.groupData.forEach((t) => {
          delete t.inGroupId, delete t.groupW, delete t.groupH, delete e.groupX, delete e.groupY, delete e.isObstacle, t.x += e.x, t.y += e.y, pt(t, null, !0);
        }), Y();
      else
        try {
        } catch {
        }
    }, mt = (i = "", e) => {
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
    }, jt = () => (c.value.forEach((i) => {
      delete i.showPop, i.groupData && i.groupData.forEach((e) => {
        delete e.showPop;
      });
    }), { data: I(c.value), width: B });
    return ie(() => {
      St.unobserve(z.value), window.removeEventListener("click", st);
    }), _({ init: Ft, addItem: pt, deleteItem: j, updateItem: gt, openGroup: Xt, closeGroup: zt, changeGroupBorder: Qt, addGroup: Zt, removeGroupItem: Rt, removeGroup: at, changeGroupTit: mt, getData: jt }), (i, e) => (E(), D("div", {
      class: "vue-drag-component-plus",
      ref_key: "pageRef",
      ref: z
    }, [
      X("div", {
        class: "content-box",
        ref_key: "boxRef",
        ref: Nt
      }, [
        (E(!0), D(nt, null, _t(k(c), (t, r) => (E(), D("div", {
          class: ht(["com-item", M.seeModel || k(L) || t.static === !0 || t.dragable === !1 ? "" : "can-drag", t.move ? "is-move" : "", t.drag ? "is-drag" : "", t.showPop ? "on-top" : "", M.seeModel ? "no-hover" : ""]),
          style: $({
            width: t.width + "px",
            height: t.height + "px",
            top: t.y + "px",
            left: t.x + "px"
          }),
          key: r,
          onMousedown: T((l) => M.seeModel || k(L) || t.static === !0 || t.dragable === !1 ? null : qt(l, r), ["prevent"])
        }, [
          X("div", se, [
            t.isGroup ? (E(), D(nt, { key: 0 }, [
              t.groupTit ? (E(), D("div", {
                key: 0,
                class: "group-item-tit",
                title: t.groupTit
              }, V(t.groupTit), 9, ae)) : H("", !0),
              X("div", {
                class: ht(["group-item-content", t.groupTit ? "" : "full"])
              }, [
                (E(!0), D(nt, null, _t(t.groupData, (l, f) => (E(), D("div", {
                  class: ht(["com-item-box-child", l.isObstacle ? "else" : ""]),
                  style: $({
                    width: l.width + "px",
                    height: l.height + "px",
                    top: l.y + "px",
                    left: l.x + "px"
                  }),
                  key: f
                }, [
                  X("div", ne, [
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
                    bt(At, {
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
                      }, "移出组合", 8, he),
                      X("div", {
                        class: "setting-box-pop-item",
                        onClick: (d) => j(l.id, l.inGroupId)
                      }, "删除", 8, ue)
                    ])
                  ], 32)) : H("", !0)
                ], 6))), 128))
              ], 2)
            ], 64)) : (E(), D("div", ce, [
              tt(i.$slots, "item", { data: t }, () => [
                X("p", null, V(Math.round(t.width * 100) / 100) + "," + V(Math.round(t.height * 100) / 100), 1),
                X("p", null, V(Math.round(t.x * 100) / 100) + "," + V(Math.round(t.y * 100) / 100), 1)
              ])
            ])),
            !t.isGroup && t.notGroup !== !0 && k(L) ? (E(), D("div", {
              key: 2,
              class: ht(["group-checkbox", t.checked ? "is-checked" : "", t.disabled ? "disabled" : ""]),
              onClick: (l) => t.disabled ? null : Jt(t)
            }, null, 10, de)) : H("", !0),
            !M.seeModel && !k(L) && k(O) === null && k(p) === null ? (E(), D("div", {
              key: 3,
              class: "setting-box",
              style: $({ display: t.showPop ? "flex" : "none" }),
              onMousedown: T((l) => null, ["prevent", "stop"])
            }, [
              bt(At, {
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
                }, " 设置组合标题", 8, ye)),
                X("div", {
                  class: "setting-box-pop-item",
                  onClick: (l) => at(t.id)
                }, "解除组合", 8, pe)
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
          !M.seeModel && !k(L) && !t.move && t.static !== !0 && t.resizable !== !1 ? (E(), D(nt, { key: 0 }, [
            k(b).indexOf("topLeft") !== -1 ? (E(), D("div", {
              key: 0,
              class: "resize-line top-left",
              onMousedown: T((l) => N(l, t, "top-left"), ["prevent", "stop"])
            }, null, 40, xe)) : H("", !0),
            k(b).indexOf("top") !== -1 ? (E(), D("div", {
              key: 1,
              class: "resize-line top",
              onMousedown: T((l) => N(l, t, "top"), ["prevent", "stop"])
            }, null, 40, ve)) : H("", !0),
            k(b).indexOf("topRight") !== -1 ? (E(), D("div", {
              key: 2,
              class: "resize-line top-right",
              onMousedown: T((l) => N(l, t, "top-right"), ["prevent", "stop"])
            }, null, 40, we)) : H("", !0),
            k(b).indexOf("left") !== -1 ? (E(), D("div", {
              key: 3,
              class: "resize-line left",
              onMousedown: T((l) => N(l, t, "left"), ["prevent", "stop"])
            }, null, 40, Me)) : H("", !0),
            k(b).indexOf("right") !== -1 ? (E(), D("div", {
              key: 4,
              class: "resize-line right",
              onMousedown: T((l) => N(l, t, "right"), ["prevent", "stop"])
            }, null, 40, ke)) : H("", !0),
            k(b).indexOf("bottomLeft") !== -1 ? (E(), D("div", {
              key: 5,
              class: "resize-line bottom-left",
              onMousedown: T((l) => N(l, t, "bottom-left"), ["prevent", "stop"])
            }, null, 40, Ee)) : H("", !0),
            k(b).indexOf("bottom") !== -1 ? (E(), D("div", {
              key: 6,
              class: "resize-line bottom",
              onMousedown: T((l) => N(l, t, "bottom"), ["prevent", "stop"])
            }, null, 40, De)) : H("", !0),
            k(b).indexOf("bottomRight") !== -1 ? (E(), D("div", {
              key: 7,
              class: "resize-line bottom-right",
              onMousedown: T((l) => N(l, t, "bottom-right"), ["prevent", "stop"])
            }, null, 40, Oe)) : H("", !0)
          ], 64)) : H("", !0)
        ], 46, oe))), 128)),
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
        M.hideAuxiliary ? H("", !0) : (E(), D(nt, { key: 1 }, [
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
        k(c).length === 0 ? (E(), D("div", Ge, [
          tt(i.$slots, "empty", {}, () => [
            re(" 暂无数据 ")
          ])
        ])) : H("", !0)
      ], 512)
    ], 512));
  }
}, He = [We], Ie = {
  install(M) {
    He.forEach((_) => {
      M.component("vueDragComponentPlus", _);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Ie);
export {
  Ie as default
};
