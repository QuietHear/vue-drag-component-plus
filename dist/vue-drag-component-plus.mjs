import { resolveComponent as Ut, openBlock as O, createBlock as xt, resolveDynamicComponent as Xt, normalizeProps as zt, mergeProps as ct, withCtx as Jt, createElementBlock as D, toDisplayString as R, watch as St, ref as F, onMounted as Qt, onBeforeUnmount as Zt, createElementVNode as z, Fragment as dt, renderList as bt, unref as G, normalizeClass as lt, normalizeStyle as m, withModifiers as Y, createCommentVNode as C, renderSlot as j, createVNode as Rt, createTextVNode as mt, nextTick as jt } from "vue";
const $t = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(M) {
    return (B, vt) => {
      const U = Ut("el-icon");
      return M.iconObj.type === "custom" ? (O(), xt(Xt(M.iconObj.icon), zt(ct({ key: 0 }, M.iconObj.attrs)), null, 16)) : M.iconObj.type === "el" ? (O(), xt(U, zt(ct({ key: 1 }, M.iconObj.attrs)), {
        default: Jt(() => [
          (O(), xt(Xt(M.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : M.iconObj.type === "iconfont" ? (O(), D("i", ct({
        key: 2,
        class: ["icon iconfont", "icon-" + M.iconObj.icon]
      }, M.iconObj.attrs), null, 16)) : (O(), D("i", ct({
        key: 3,
        class: M.iconObj.type
      }, M.iconObj.attrs), R(M.iconObj.icon), 17));
    };
  }
};
const te = ["onMousedown"], ee = { class: "com-item-content" }, le = ["title"], re = ["onClick"], ie = ["onClick"], oe = ["onClick"], se = ["onClick"], ne = ["onClick"], he = ["onClick"], ae = ["onClick"], ue = ["onMousedown"], ce = ["onMousedown"], de = ["onMousedown"], ge = ["onMousedown"], pe = ["onMousedown"], ye = ["onMousedown"], fe = ["onMousedown"], xe = ["onMousedown"], ve = {
  key: 1,
  class: "com-empty"
}, we = {
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
      validator(M, B) {
        return M >= 15;
      }
    },
    // 组件项最小高度
    itemMinHeight: {
      type: Number,
      default: 15,
      validator(M, B) {
        return M >= 15;
      }
    },
    // 纵向相邻元素的自动间距
    ySpace: {
      type: Number,
      default: 7,
      validator(M, B) {
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
    // 不展示内置设置组合标题按钮
    hideTit: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["showGroup", "updateChecked", "showTitPop"],
  setup(M, { expose: B, emit: vt }) {
    const U = vt, v = M, T = (l) => {
      let r = l instanceof Array ? [] : {};
      for (let t in l)
        r[t] = typeof l[t] == "object" ? T(l[t]) : l[t];
      return r;
    }, wt = () => {
      v.insertResizeKeys.forEach((l) => {
        v.excludeResizeKeys.indexOf(l) === -1 && $.value.push(l);
      });
    };
    St(
      () => [v.insertResizeKeys, v.excludeResizeKeys],
      () => {
        wt();
      }
    );
    const $ = F([]);
    wt();
    const S = F(null);
    let L = null, rt = null;
    const tt = F(null), it = F(0), n = F([]), Lt = (l, r) => {
      let t = l.matches || l.webkitMatchesSelector || l.mozMatchesSelector || l.msMatchesSelector;
      for (; l && !t.call(l, r); )
        l = l.parentElement;
      return l;
    };
    let k = null, Mt = null, kt = null;
    const W = F({}), _t = (l, r) => {
      et(), k = r, W.value = T(n.value[k]), n.value[k].move = !0;
      const t = Lt(l.target, ".com-item");
      Mt = l.clientX - t.offsetLeft, kt = l.clientY - t.offsetTop, window.addEventListener("mousemove", Et), window.addEventListener("mouseup", Ot);
    }, Et = (l) => {
      const r = l.clientX - Mt, t = l.clientY - kt, o = r <= _("left") ? _("left") : r >= _("right") ? _("right") : r, e = t <= _("top") ? _("top") : t >= _("bottom") ? _("bottom") : t, f = o - n.value[k].x, c = e - n.value[k].y, w = `${f > 0 ? "right" : f < 0 ? "left" : ""}_${c > 0 ? "bottom" : c < 0 ? "top" : ""}`;
      e > n.value[k].y && e > rt - n.value[k].height - 30 && tt.value.scrollBy(0, 20), e < n.value[k].y && e - tt.value.scrollTop < 30 && tt.value.scrollBy(0, -20), n.value[k].x = o, n.value[k].y = e;
      let y = T(n.value.filter((d) => d.move !== !0).filter((d) => d.x < o && d.x + d.width > o || d.x === o || d.x > o && d.x < o + n.value[k].width).filter((d) => d.y < e && d.y + d.height > e || d.y === e || d.y > e && d.y < e + n.value[k].height));
      if (y.length === 0)
        W.value.x = o, W.value.y = e;
      else {
        if (w.indexOf("top") !== -1) {
          y = y.filter((a) => a.y < W.value.y);
          const d = Math.min(...y.map((a) => a.y + a.height));
          y.forEach((a) => {
            Math.abs(a.y + a.height - d) < 5 && (a.y = d - a.height);
          });
          let h = W.value.y - e, i = !0, s = [...y];
          const u = (a) => {
            T(n.value.filter((g) => g.move !== !0 && g.y + g.height - a.y <= h + 3 && g.y + g.height - a.y >= 0).filter((g) => g.x < a.x && g.x + g.width > a.x || g.x >= a.x && g.x < a.x + a.width)).forEach((g) => {
              g.y + g.height !== a.y && (g.y = a.y - g.height), s.findIndex((H) => H.id === g.id) === -1 && (s.push(g), u(g));
            });
          };
          if (y.forEach((a) => {
            u(a);
          }), s.sort((a, x) => {
            const g = a.y, H = x.y;
            return g - H;
          }), (s.length === 0 || s.filter((a) => a.y === 0).length > 0) && (i = !1), i) {
            let a = 0;
            s.filter((g) => g.y === s[0].y).forEach((g) => {
              T(n.value.filter((P) => P.move !== !0 && P.y + P.height < g.y).filter((P) => P.x < g.x && P.x + P.width > g.x || P.x >= g.x && P.x < g.x + g.width)).forEach((P) => {
                P.y + P.height > a && (a = P.y + P.height);
              });
            }), a = s[0].y - a, a < h && (h = a), s.forEach((g) => {
              g.y -= h, n.value.filter((H) => H.id === g.id)[0].y = g.y;
            }), W.value.x = o, W.value.y = n.value.filter((g) => g.id === s[s.length - 1].id)[0].y + n.value.filter((g) => g.id === s[s.length - 1].id)[0].height;
          } else {
            const a = Math.min(...y.map((x) => x.y));
            a - e >= -7 && a - e < 7 && (y.filter((x) => x.y < W.value.y).forEach((x) => {
              x.y += n.value[k].height, n.value.filter((H) => H.id === x.id)[0].y = x.y;
              const g = (H) => {
                n.value.filter((I) => I.move !== !0 && I.id !== H.id).filter((I) => I.x < H.x && I.x + I.width > H.x || I.x === H.x || I.x > H.x && I.x < H.x + H.width).filter((I) => I.y < H.y && I.y + I.height > H.y || I.y === H.y || I.y > H.y && I.y < H.y + H.height).forEach((I) => {
                  I.y = H.y + H.height, g(I);
                });
              };
              g(x);
            }), W.value.x = o, W.value.y = a);
          }
          y = T(n.value.filter((a) => a.move !== !0).filter((a) => a.x < o && a.x + a.width > o || a.x === o || a.x > o && a.x < o + n.value[k].width).filter((a) => a.y < e && a.y + a.height > e || a.y === e || a.y > e && a.y < e + n.value[k].height));
        }
        if (w.indexOf("bottom") !== -1) {
          const d = Math.max(...y.map((h) => h.y + h.height));
          if (d - (e + n.value[k].height) >= -7 && d - (e + n.value[k].height) < 7) {
            let h = !0;
            y.filter((i) => i.y > W.value.y).forEach((i) => {
              i.y -= n.value[k].height, n.value.filter((u) => u.id === i.id)[0].y = i.y;
              const s = n.value.filter((u) => u.move !== !0 && u.id !== i.id).filter((u) => u.x < i.x && u.x + u.width > i.x || u.x === i.x || u.x > i.x && u.x < i.x + i.width).filter((u) => u.y < i.y && u.y + u.height > i.y || u.y === i.y || u.y > i.y && u.y < i.y + i.height);
              if (s.length > 0) {
                i.y = Math.max(...s.map((a) => a.y + a.height)), n.value.filter((a) => a.id === i.id)[0].y = i.y;
                const u = (a) => {
                  n.value.filter((g) => g.id !== a.id).filter((g) => g.x < a.x && g.x + g.width > a.x || g.x === a.x || g.x > a.x && g.x < a.x + a.width).filter((g) => g.y < a.y && g.y + g.height > a.y || g.y === a.y || g.y > a.y && g.y < a.y + a.height).forEach((g) => {
                    g.y = a.y + a.height, g.move === !0 && (W.value.y = g.y, h = !1), u(g);
                  });
                };
                u(i);
              }
            }), W.value.x = o, h && (W.value.y = d - n.value[k].height), y = T(n.value.filter((i) => i.move !== !0).filter((i) => i.x < o && i.x + i.width > o || i.x === o || i.x > o && i.x < o + n.value[k].width).filter((i) => i.y < e && i.y + i.height > e || i.y === e || i.y > e && i.y < e + n.value[k].height));
          }
        }
        if (((w.indexOf("top") !== -1 || w.indexOf("bottom") !== -1) && (w.indexOf("right") !== -1 || w.indexOf("left") !== -1) && Math.abs(f) > 8 || w.indexOf("top") === -1 && w.indexOf("bottom") === -1 && (w.indexOf("right") !== -1 || w.indexOf("left") !== -1)) && y.length > 0) {
          y.sort((h, i) => {
            const s = h.y, u = i.y;
            return s - u;
          });
          let d = !0;
          for (let h = 0; h < y.length; h++) {
            if (d) {
              const i = T(n.value);
              for (let s = 0; s <= h; s++) {
                let u = null;
                const a = i.filter((x) => x.move !== !0 && x.y < y[s].y).filter((x) => x.x < y[s].x && x.x + x.width > y[s].x || x.x === y[s].x || x.x > y[s].x && x.x < y[s].x + y[s].width);
                if (a.length === 0 ? u = 0 : u = Math.max(...a.map((x) => x.y + x.height)), s === h) {
                  if (y[s].y - (y[s].y + y[s].height - e) < u) {
                    d = !1;
                    break;
                  }
                } else if (y[s].y - y[h].height < u) {
                  d = !1;
                  break;
                } else
                  i.filter((x) => x.id === y[s].id)[0].y -= y[h].height;
              }
            }
            if (d) {
              y[h].y -= y[h].y + y[h].height - e, n.value.filter((i) => i.id === y[h].id)[0].y = y[h].y;
              for (let i = h; i > 0; i--)
                y[h - 1].y -= y[h].height, n.value.filter((s) => s.id === y[h - 1].id)[0].y = y[h - 1].y;
            } else
              y.filter((i) => i.id === y[h].id).forEach((i) => {
                i.y += n.value[k].y + n.value[k].height - i.y, n.value.filter((u) => u.id === i.id)[0].y = i.y;
                const s = (u) => {
                  n.value.filter((x) => x.move !== !0 && x.id !== u.id).filter((x) => x.x < u.x && x.x + x.width > u.x || x.x === u.x || x.x > u.x && x.x < u.x + u.width).filter((x) => x.y < u.y && x.y + x.height > u.y || x.y === u.y || x.y > u.y && x.y < u.y + u.height).forEach((x) => {
                    x.y = u.y + u.height, s(x);
                  });
                };
                s(i);
              });
          }
          W.value.x = o;
        }
      }
      X(!1);
    }, Ot = () => {
      window.removeEventListener("mousemove", Et), window.removeEventListener("mouseup", Ot), delete n.value[k].move, n.value[k].x = W.value.x, n.value[k].y = W.value.y, k = null, X();
    }, _ = (l) => {
      switch (l) {
        case "top":
          return 0;
        case "right":
          return L - n.value[k].width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let p = null, gt = "", ot = 0, st = 0, A = 0, N = 0, K = 0, q = 0, J = 0, nt = 0, Q = 0, ht = 0;
    const V = (l, r, t) => {
      et(), p = r, gt = t, ot = l.clientX, st = l.clientY, A = r.width, N = r.height, K = r.y, q = r.x, p.drag = !0;
      const o = n.value.filter((d) => d.static === !0 && (d.x < r.x ? d.x + d.width >= r.x : d.x <= r.x + r.width)), e = n.value.filter((d) => d.static === !0 && (d.y < r.y ? d.y + d.height >= r.y : d.y <= r.y + r.height)), f = o.filter((d) => d.y + d.height <= r.y).map((d) => d.y + d.height);
      f.length > 0 ? J = Math.max(...f) : J = 0;
      const c = o.filter((d) => d.y >= r.y + r.height).map((d) => d.y);
      c.length > 0 ? nt = Math.min(...c) : nt = 0;
      const w = e.filter((d) => d.x + d.width <= r.x).map((d) => d.x + d.width);
      w.length > 0 ? Q = Math.max(...w) : Q = 0;
      const y = e.filter((d) => d.x >= r.x + r.width).map((d) => d.x);
      y.length > 0 ? ht = Math.min(...y) : ht = 0, window.addEventListener("mousemove", Dt), window.addEventListener("mouseup", Gt);
    }, Dt = (l) => {
      const r = A + (l.clientX - ot), t = N + (l.clientY - st), o = A - (l.clientX - ot), e = N - (l.clientY - st), f = K + (l.clientY - st), c = q + (l.clientX - ot), w = getComputedStyle(S.value), y = parseInt(w.getPropertyValue("--com-item-border-width").trim()), d = parseInt(w.getPropertyValue("--group-tit-height").trim());
      switch (gt) {
        case "top-left":
          if (p.height = e < v.itemMinHeight ? v.itemMinHeight : e > E("top") ? E("top") : e, p.y = e < v.itemMinHeight ? K + N - v.itemMinHeight : e > E("top") ? J : f, p.width = o < v.itemMinWidth ? v.itemMinWidth : o > E("left") ? E("left") : o, p.x = o < v.itemMinWidth ? q + A - v.itemMinWidth : o > E("left") ? Q : c, p.isGroup === !0) {
            const i = p.width - 2 * y, s = p.height - 2 * y - (p.groupTit ? d : 0);
            p.groupData.forEach((u) => {
              u.width = i * u.groupW, u.x = i * u.groupX, u.height = s * u.groupH, u.y = s * u.groupY;
            });
          }
          break;
        case "top":
          if (p.height = e < v.itemMinHeight ? v.itemMinHeight : e > E("top") ? E("top") : e, p.y = e < v.itemMinHeight ? K + N - v.itemMinHeight : e > E("top") ? J : f, p.isGroup === !0) {
            const i = p.height - 2 * y - (p.groupTit ? d : 0);
            p.groupData.forEach((s) => {
              s.height = i * s.groupH, s.y = i * s.groupY;
            });
          }
          break;
        case "top-right":
          if (p.height = e < v.itemMinHeight ? v.itemMinHeight : e > E("top") ? E("top") : e, p.y = e < v.itemMinHeight ? K + N - v.itemMinHeight : e > E("top") ? J : f, p.width = r < v.itemMinWidth ? v.itemMinWidth : r > E("right") ? E("right") : r, p.isGroup === !0) {
            const i = p.width - 2 * y, s = p.height - 2 * y - (p.groupTit ? d : 0);
            p.groupData.forEach((u) => {
              u.width = i * u.groupW, u.x = i * u.groupX, u.height = s * u.groupH, u.y = s * u.groupY;
            });
          }
          break;
        case "left":
          if (p.width = o < v.itemMinWidth ? v.itemMinWidth : o > E("left") ? E("left") : o, p.x = o < v.itemMinWidth ? q + A - v.itemMinWidth : o > E("left") ? Q : c, p.isGroup === !0) {
            const i = p.width - 2 * y;
            p.groupData.forEach((s) => {
              s.width = i * s.groupW, s.x = i * s.groupX;
            });
          }
          break;
        case "right":
          if (p.width = r < v.itemMinWidth ? v.itemMinWidth : r > E("right") ? E("right") : r, p.isGroup === !0) {
            const i = p.width - 2 * y;
            p.groupData.forEach((s) => {
              s.width = i * s.groupW, s.x = i * s.groupX;
            });
          }
          break;
        case "bottom-left":
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > E("bottom") ? E("bottom") : t, p.width = o < v.itemMinWidth ? v.itemMinWidth : o > E("left") ? E("left") : o, p.x = o < v.itemMinWidth ? q + A - v.itemMinWidth : o > E("left") ? Q : c, p.isGroup === !0) {
            const i = p.width - 2 * y, s = p.height - 2 * y - (p.groupTit ? d : 0);
            p.groupData.forEach((u) => {
              u.width = i * u.groupW, u.x = i * u.groupX, u.height = s * u.groupH, u.y = s * u.groupY;
            });
          }
          break;
        case "bottom":
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > E("bottom") ? E("bottom") : t, p.isGroup === !0) {
            const i = p.height - 2 * y - (p.groupTit ? d : 0);
            p.groupData.forEach((s) => {
              s.height = i * s.groupH, s.y = i * s.groupY;
            });
          }
          break;
        case "bottom-right":
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > E("bottom") ? E("bottom") : t, p.width = r < v.itemMinWidth ? v.itemMinWidth : r > E("right") ? E("right") : r, p.isGroup === !0) {
            const i = p.width - 2 * y, s = p.height - 2 * y - (p.groupTit ? d : 0);
            p.groupData.forEach((u) => {
              u.width = i * u.groupW, u.x = i * u.groupX, u.height = s * u.groupH, u.y = s * u.groupY;
            });
          }
          break;
      }
      let h = T(n.value.filter((i) => i.drag !== !0).filter((i) => i.x < p.x && i.x + i.width > p.x || i.x === p.x || i.x > p.x && i.x < p.x + p.width).filter((i) => i.y < p.y && i.y + i.height > p.y || i.y === p.y || i.y > p.y && i.y < p.y + p.height));
      if (h.length > 0) {
        h.sort((i, s) => {
          const u = i.y, a = s.y;
          return u - a;
        });
        for (let i = 0; i < h.length; i++)
          h.filter((s) => s.id === h[i].id).forEach((s) => {
            s.y += p.y + p.height - s.y, n.value.filter((a) => a.id === s.id)[0].y = s.y;
            const u = (a) => {
              n.value.filter((g) => g.drag !== !0 && g.id !== a.id).filter((g) => g.x < a.x && g.x + g.width > a.x || g.x === a.x || g.x > a.x && g.x < a.x + a.width).filter((g) => g.y < a.y && g.y + g.height > a.y || g.y === a.y || g.y > a.y && g.y < a.y + a.height).forEach((g) => {
                g.y = a.y + a.height, u(g);
              });
            };
            u(s);
          });
      }
      X(!1), tt.value.scrollTo(0, it.value - rt);
    }, Gt = (l) => {
      delete p.drag, gt = "", p = null, window.removeEventListener("mousemove", Dt), window.removeEventListener("mouseup", Gt), X();
    }, E = (l) => {
      switch (l) {
        case "top":
          return K + N - J;
        case "left":
          return q + A - Q;
        case "right":
          return (ht > 0 ? ht : L) - q;
        case "bottom":
          return nt > 0 ? nt - K : 999999999;
      }
    }, X = (l = !0) => {
      l === !0 && Ht();
      const r = n.value.map((t) => t.y + t.height);
      r.length > 0 ? it.value = Math.max(...r) + 50 : it.value = 0;
    };
    St(
      () => v.ySpace,
      () => {
        v.ySpace >= 0 && Ht();
      }
    );
    const Ht = () => {
      n.value.sort((l, r) => {
        const t = l.y, o = r.y;
        return t - o;
      });
      for (let l = 0; l < n.value.length - 1; l++) {
        if (l === 0 && n.value[l].y > 0) {
          const r = n.value[l].y;
          for (let t = l; t < n.value.length; t++)
            n.value[t].y -= r;
        }
        if (n.value[l + 1].y > n.value[l].y + n.value[l].height) {
          const r = n.value[l + 1].y - (n.value[l].y + n.value[l].height);
          for (let t = l + 1; t < n.value.length; t++)
            n.value[t].y -= r;
        }
      }
      for (let l = 0; l < n.value.length - 1; l++) {
        let r = n.value.findIndex((t) => t.y === n.value[l].y + n.value[l].height);
        if (r !== -1)
          for (let t = r; t < n.value.length; t++)
            n.value[t].y += v.ySpace;
      }
    };
    Qt(() => {
      Wt.observe(S.value);
    });
    const Wt = new ResizeObserver((l) => {
      Bt(L === l[0].contentRect.width ? null : l[0].contentRect.width, rt === l[0].contentRect.height ? null : l[0].contentRect.height);
    });
    let pt = !1;
    const Vt = (l = [], r = null) => {
      n.value = T(l), r !== null ? jt(() => {
        const o = S.value.getBoundingClientRect().width / r, e = getComputedStyle(S.value), f = parseInt(e.getPropertyValue("--com-item-border-width").trim()), c = parseInt(e.getPropertyValue("--group-tit-height").trim());
        n.value.forEach((w) => {
          if (w.width *= o, w.height *= o, w.x *= o, w.y *= o, w.isGroup === !0) {
            const y = w.width - 2 * f, d = w.height - 2 * f - (w.groupTit ? c : 0);
            w.groupData.forEach((h) => {
              h.width = y * h.groupW, h.x = y * h.groupX, h.height = d * h.groupH, h.y = d * h.groupY;
            });
          }
        }), X();
      }) : X(), pt = !0, setTimeout(() => {
        pt = !1;
      }, 500);
    }, It = (l, r, t) => {
      const o = r.map((c) => c.y), e = Math.max(...o), f = r.filter((c) => c.y + c.height > e);
      f.sort((c, w) => {
        const y = c.x, d = w.x;
        return y - d;
      });
      for (let c = 0; c < f.length; c++) {
        if (c === 0 && f[c].x >= l.width) {
          l.y = e, l.x = 0;
          break;
        }
        if (f.length > 1 && c !== f.length - 1 && f[c].x + f[c].width + l.width <= f[c + 1].x) {
          l.y = e, l.x = f[c].x + f[c].width;
          break;
        }
        if (c === f.length - 1 && f[c].x + f[c].width + l.width <= t) {
          l.y = e, l.x = f[c].x + f[c].width;
          break;
        }
      }
      if (l.y == null) {
        l.x = 0;
        const c = r.map((w) => w.y + w.height);
        l.y = Math.max(...c);
      }
    }, at = (l, r = null, t = !1) => {
      const o = T(l), e = n.value.filter((f) => f.id === r);
      if (o.id || (o.id = (/* @__PURE__ */ new Date()).getTime() + ""), r && e.length !== 1) {
        try {
        } catch {
        }
        return;
      }
      if (t !== !0)
        if (delete o.x, delete o.y, r) {
          const f = getComputedStyle(S.value), c = parseInt(f.getPropertyValue("--com-item-border-width").trim());
          It(o, e[0].groupData, e[0].width - 2 * c);
        } else
          n.value.length === 0 ? (o.x = 0, o.y = 0) : It(o, n.value, L);
      if (r) {
        e[0].groupData.push(o);
        const f = ft(e[0].groupData, e[0]);
        yt(f);
      } else
        n.value.push(o);
      X();
    }, Z = (l, r = null) => {
      let t = -1;
      const o = n.value.filter((e) => e.id === r);
      if (r ? o.length === 1 && (t = o[0].groupData.findIndex((e) => e.id === l)) : t = n.value.findIndex((e) => e.id === l), t !== -1) {
        if (r)
          if (o[0].groupData.splice(t, 1), o[0].groupData.length === 1)
            ut(r);
          else {
            const e = ft(o[0].groupData, o[0]);
            yt(e);
          }
        else
          n.value.splice(t, 1);
        X();
      } else
        try {
        } catch {
        }
    }, yt = (l) => {
      if (l.id) {
        const r = T(l);
        let t = -1;
        const o = n.value.filter((e) => e.id === r.inGroupId);
        if (r.inGroupId ? o.length === 1 && (t = o[0].groupData.findIndex((e) => e.id === r.id)) : t = n.value.findIndex((e) => e.id === r.id), t !== -1)
          r.inGroupId ? o[0].groupData[t] = r : n.value[t] = r, X();
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, Bt = (l, r) => {
      if (l !== null) {
        const t = L ? l / L : 1;
        L = l;
        const o = getComputedStyle(S.value), e = parseInt(o.getPropertyValue("--com-item-border-width").trim()), f = parseInt(o.getPropertyValue("--group-tit-height").trim());
        pt || (n.value.forEach((c) => {
          if (c.width *= t, c.height *= t, c.x *= t, c.y *= t, c.isGroup === !0) {
            const w = c.width - 2 * e, y = c.height - 2 * e - (c.groupTit ? f : 0);
            c.groupData.forEach((d) => {
              d.width = w * d.groupW, d.x = w * d.groupX, d.height = y * d.groupH, d.y = y * d.groupY;
            });
          }
        }), X());
      }
      r !== null && (rt = r);
    }, Ct = (l) => {
      l.showPop || (n.value.forEach((r) => {
        delete r.showPop, r.groupData && r.groupData.forEach((t) => {
          delete t.showPop;
        });
      }), l.showPop = !0, window.addEventListener("click", et));
    }, et = () => {
      n.value.forEach((l) => {
        delete l.showPop, l.groupData && l.groupData.forEach((r) => {
          delete r.showPop;
        });
      }), window.removeEventListener("click", et);
    }, b = F(!1), Tt = (l) => {
      const r = n.value.findIndex((t) => t.id === l);
      if (r !== -1)
        n.value[r].checked = !0, n.value[r].disabled = !0, b.value = !0, U("showGroup", b.value);
      else
        try {
        } catch {
        }
    }, Pt = () => {
      b.value = !1, n.value.forEach((l) => {
        delete l.checked, delete l.disabled, l.groupData && l.groupData.forEach((r) => {
          delete r.checked, delete r.disabled;
        });
      }), U("showGroup", b.value);
    }, At = (l) => {
      l.checked = !l.checked, U("updateChecked", n.value.filter((r) => r.checked).length);
    }, ft = (l, r) => {
      const t = T(l), o = T(r);
      t.sort((h, i) => {
        const s = h.x, u = i.x;
        return s - u;
      });
      for (let h = 0; h < t.length - 1; h++) {
        if (h === 0 && t[h].x > 0) {
          const i = t[h].x;
          for (let s = h; s < t.length; s++)
            t[s].x -= i;
        }
        if (t[h + 1].x > t[h].x + t[h].width) {
          const i = t[h + 1].x - (t[h].x + t[h].width);
          for (let s = h + 1; s < t.length; s++)
            t[s].x -= i;
        }
      }
      t.sort((h, i) => {
        const s = h.y, u = i.y;
        return s - u;
      });
      for (let h = 0; h < t.length - 1; h++) {
        if (h === 0 && t[h].y > 0) {
          const i = t[h].y;
          for (let s = h; s < t.length; s++)
            t[s].y -= i;
        }
        if (t[h + 1].y > t[h].y + t[h].height) {
          const i = t[h + 1].y - (t[h].y + t[h].height);
          for (let s = h + 1; s < t.length; s++)
            t[s].y -= i;
        }
      }
      const e = t.map((h) => h.x + h.width), f = Math.max(...e), c = t.map((h) => h.y + h.height), w = Math.max(...c);
      t.forEach((h) => {
        h.inGroupId || (h.inGroupId = o.id), h.groupW = h.width / f, h.groupH = h.height / w, h.groupX = h.x / f, h.groupY = h.y / w, h.isObstacle = h.x + h.width === f && h.y === 0;
      });
      const y = getComputedStyle(S.value), d = parseInt(y.getPropertyValue("--com-item-border-width").trim());
      return o.width = f + 2 * d, o.height = w + 2 * d, o.groupData = [...t], o;
    }, Nt = () => {
      const l = getComputedStyle(S.value), r = parseInt(l.getPropertyValue("--com-item-border-width").trim()), t = parseInt(l.getPropertyValue("--group-tit-height").trim());
      n.value.filter((o) => o.isGroup === !0).forEach((o) => {
        const e = o.width - 2 * r, f = o.height - 2 * r - (o.groupTit ? t : 0);
        o.groupData.forEach((c) => {
          c.width = e * c.groupW, c.x = e * c.groupX, c.height = f * c.groupH, c.y = f * c.groupY;
        });
      });
    }, Kt = () => {
      const l = n.value.filter((r) => r.checked);
      if (l.length > 1) {
        const r = {
          id: (/* @__PURE__ */ new Date()).getTime() + "G",
          isGroup: !0,
          groupTit: ""
        }, t = ft(l, r);
        t.groupData.forEach((o) => {
          Z(o.id);
        }), at(t), X();
      }
      Pt();
    }, Yt = (l, r) => {
      const t = n.value.filter((o) => o.id === r)[0];
      if (t) {
        const o = t.groupData.filter((e) => e.id === l)[0];
        if (o)
          t.groupData.length === 2 ? ut(r) : (delete o.inGroupId, delete o.groupW, delete o.groupH, delete o.groupX, delete o.groupY, delete o.isObstacle, Z(o.id, t.id), at(o), X());
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, ut = (l) => {
      const r = n.value.filter((t) => t.id === l)[0];
      if (r)
        Z(r.id), r.groupData.forEach((t) => {
          delete t.inGroupId, delete t.groupW, delete t.groupH, delete r.groupX, delete r.groupY, delete r.isObstacle, t.x += r.x, t.y += r.y, at(t, null, !0);
        }), X();
      else
        try {
        } catch {
        }
    }, qt = (l = "", r) => {
      const t = n.value.filter((o) => o.id === r)[0];
      if (t) {
        if (!t.groupTit || !l) {
          const e = getComputedStyle(S.value), f = parseInt(e.getPropertyValue("--group-tit-height").trim());
          t.groupTit && !l && (t.height -= f), !t.groupTit && l && (t.height += f);
        }
        t.groupTit = l;
        const o = (e) => {
          n.value.filter((c) => c.id !== e.id).filter((c) => c.x < e.x && c.x + c.width > e.x || c.x === e.x || c.x > e.x && c.x < e.x + e.width).filter((c) => c.y < e.y && c.y + c.height > e.y || c.y === e.y || c.y > e.y && c.y < e.y + e.height).forEach((c) => {
            c.y = e.y + e.height, o(c);
          });
        };
        o(t), X();
      } else
        try {
        } catch {
        }
    }, Ft = () => ({ data: T(n.value), width: L });
    return Zt(() => {
      Wt.unobserve(S.value), window.removeEventListener("click", et);
    }), B({ init: Vt, addItem: at, deleteItem: Z, updateItem: yt, openGroup: Tt, closeGroup: Pt, changeGroupBorder: Nt, addGroup: Kt, removeGroupItem: Yt, removeGroup: ut, changeGroupTit: qt, getData: Ft }), (l, r) => (O(), D("div", {
      class: "vue-drag-component-plus",
      ref_key: "pageRef",
      ref: S
    }, [
      z("div", {
        class: "content-box",
        ref_key: "boxRef",
        ref: tt
      }, [
        (O(!0), D(dt, null, bt(G(n), (t, o) => (O(), D("div", {
          class: lt(["com-item", M.seeModel || G(b) || t.static === !0 || t.dragable === !1 ? "" : "can-drag", t.move ? "is-move" : "", t.drag ? "is-drag" : "", t.showPop ? "on-top" : "", M.seeModel ? "no-hover" : ""]),
          style: m({
            width: t.width + "px",
            height: t.height + "px",
            top: t.y + "px",
            left: t.x + "px"
          }),
          key: o,
          onMousedown: Y((e) => M.seeModel || G(b) || t.static === !0 || t.dragable === !1 ? null : _t(e, o), ["prevent"])
        }, [
          z("div", ee, [
            t.isGroup ? (O(), D(dt, { key: 0 }, [
              t.groupTit ? (O(), D("div", {
                key: 0,
                class: "group-item-tit",
                title: t.groupTit
              }, R(t.groupTit), 9, le)) : C("", !0),
              z("div", {
                class: lt(["group-item-content", t.groupTit ? "" : "full"])
              }, [
                (O(!0), D(dt, null, bt(t.groupData, (e, f) => (O(), D("div", {
                  class: lt(["com-item-content-child", e.isObstacle ? "else" : ""]),
                  style: m({
                    width: e.width + "px",
                    height: e.height + "px",
                    top: e.y + "px",
                    left: e.x + "px"
                  }),
                  key: f
                }, [
                  j(l.$slots, "item", { data: e }, () => [
                    z("p", null, R(Math.round(e.width * 100) / 100) + "," + R(Math.round(e.height * 100) / 100), 1),
                    z("p", null, R(Math.round(e.x * 100) / 100) + "," + R(Math.round(e.y * 100) / 100), 1)
                  ]),
                  !M.seeModel && !G(b) && G(k) === null && G(p) === null ? (O(), D("div", {
                    key: 0,
                    class: "setting-box",
                    style: m({ display: e.showPop ? "flex" : "none" }),
                    onMousedown: Y((c) => null, ["prevent", "stop"])
                  }, [
                    Rt($t, {
                      iconObj: M.settingIcon,
                      onClick: Y((c) => Ct(e), ["prevent", "stop"])
                    }, null, 8, ["iconObj", "onClick"])
                  ], 36)) : C("", !0),
                  e.showPop ? (O(), D("div", {
                    key: 1,
                    class: "setting-box-pop",
                    onMousedown: Y((c) => null, ["prevent", "stop"])
                  }, [
                    j(l.$slots, "setPopNormal", {
                      data: T(e)
                    }, () => [
                      z("div", {
                        class: "setting-box-pop-item",
                        onClick: (c) => Yt(e.id, e.inGroupId)
                      }, "移出组合", 8, re),
                      z("div", {
                        class: "setting-box-pop-item",
                        onClick: (c) => Z(e.id, e.inGroupId)
                      }, "删除", 8, ie)
                    ])
                  ], 32)) : C("", !0)
                ], 6))), 128))
              ], 2)
            ], 64)) : j(l.$slots, "item", {
              key: 1,
              data: t
            }, () => [
              z("p", null, R(Math.round(t.width * 100) / 100) + "," + R(Math.round(t.height * 100) / 100), 1),
              z("p", null, R(Math.round(t.x * 100) / 100) + "," + R(Math.round(t.y * 100) / 100), 1)
            ]),
            !t.isGroup && t.notGroup !== !0 && G(b) ? (O(), D("div", {
              key: 2,
              class: lt(["group-checkbox", t.checked ? "is-checked" : "", t.disabled ? "disabled" : ""]),
              onClick: (e) => t.disabled ? null : At(t)
            }, null, 10, oe)) : C("", !0),
            !M.seeModel && !G(b) && G(k) === null && G(p) === null ? (O(), D("div", {
              key: 3,
              class: "setting-box",
              style: m({ display: t.showPop ? "flex" : "none" }),
              onMousedown: Y((e) => null, ["prevent", "stop"])
            }, [
              Rt($t, {
                iconObj: M.settingIcon,
                onClick: Y((e) => Ct(t), ["prevent", "stop"])
              }, null, 8, ["iconObj", "onClick"])
            ], 36)) : C("", !0),
            t.showPop ? (O(), D("div", {
              key: 4,
              class: lt(["setting-box-pop", t.isGroup === !0 ? "special" : ""]),
              onMousedown: Y((e) => null, ["prevent", "stop"])
            }, [
              t.isGroup === !0 ? j(l.$slots, "setPopSpecial", {
                key: 0,
                data: T(t)
              }, () => [
                M.hideTit ? C("", !0) : (O(), D("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (e) => U("showTitPop", t.groupTit, t.id)
                }, " 设置组合标题", 8, se)),
                z("div", {
                  class: "setting-box-pop-item",
                  onClick: (e) => ut(t.id)
                }, "解除组合", 8, ne)
              ]) : j(l.$slots, "setPopNormal", {
                key: 1,
                data: T(t)
              }, () => [
                t.notGroup !== !0 ? (O(), D("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (e) => Tt(t.id)
                }, "组合", 8, he)) : C("", !0),
                z("div", {
                  class: "setting-box-pop-item",
                  onClick: (e) => Z(t.id)
                }, "删除", 8, ae)
              ])
            ], 34)) : C("", !0)
          ]),
          !M.seeModel && !G(b) && !t.move && t.static !== !0 && t.resizable !== !1 ? (O(), D(dt, { key: 0 }, [
            G($).indexOf("topLeft") !== -1 ? (O(), D("div", {
              key: 0,
              class: "resize-line top-left",
              onMousedown: Y((e) => V(e, t, "top-left"), ["prevent", "stop"])
            }, null, 40, ue)) : C("", !0),
            G($).indexOf("top") !== -1 ? (O(), D("div", {
              key: 1,
              class: "resize-line top",
              onMousedown: Y((e) => V(e, t, "top"), ["prevent", "stop"])
            }, null, 40, ce)) : C("", !0),
            G($).indexOf("topRight") !== -1 ? (O(), D("div", {
              key: 2,
              class: "resize-line top-right",
              onMousedown: Y((e) => V(e, t, "top-right"), ["prevent", "stop"])
            }, null, 40, de)) : C("", !0),
            G($).indexOf("left") !== -1 ? (O(), D("div", {
              key: 3,
              class: "resize-line left",
              onMousedown: Y((e) => V(e, t, "left"), ["prevent", "stop"])
            }, null, 40, ge)) : C("", !0),
            G($).indexOf("right") !== -1 ? (O(), D("div", {
              key: 4,
              class: "resize-line right",
              onMousedown: Y((e) => V(e, t, "right"), ["prevent", "stop"])
            }, null, 40, pe)) : C("", !0),
            G($).indexOf("bottomLeft") !== -1 ? (O(), D("div", {
              key: 5,
              class: "resize-line bottom-left",
              onMousedown: Y((e) => V(e, t, "bottom-left"), ["prevent", "stop"])
            }, null, 40, ye)) : C("", !0),
            G($).indexOf("bottom") !== -1 ? (O(), D("div", {
              key: 6,
              class: "resize-line bottom",
              onMousedown: Y((e) => V(e, t, "bottom"), ["prevent", "stop"])
            }, null, 40, fe)) : C("", !0),
            G($).indexOf("bottomRight") !== -1 ? (O(), D("div", {
              key: 7,
              class: "resize-line bottom-right",
              onMousedown: Y((e) => V(e, t, "bottom-right"), ["prevent", "stop"])
            }, null, 40, xe)) : C("", !0)
          ], 64)) : C("", !0)
        ], 46, te))), 128)),
        G(k) !== null ? (O(), D("div", {
          key: 0,
          class: "drag-bg",
          style: m({
            width: G(W).width + "px",
            height: G(W).height + "px",
            top: G(W).y + "px",
            left: G(W).x + "px"
          })
        }, null, 4)) : C("", !0),
        z("div", {
          class: "height-bg",
          style: m({ height: G(it) + "px" })
        }, null, 4),
        G(n).length === 0 ? (O(), D("div", ve, [
          j(l.$slots, "empty", {}, () => [
            mt(" 暂无数据 ")
          ])
        ])) : C("", !0)
      ], 512)
    ], 512));
  }
}, Me = [we], ke = {
  install(M) {
    Me.forEach((B) => {
      M.component("vueDragComponentPlus", B);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(ke);
export {
  ke as default
};
