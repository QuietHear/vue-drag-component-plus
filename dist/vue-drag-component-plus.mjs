import { resolveComponent as Kt, openBlock as E, createBlock as xt, resolveDynamicComponent as Yt, normalizeProps as zt, mergeProps as ct, withCtx as qt, createElementBlock as D, toDisplayString as $, watch as Ft, ref as q, onMounted as Ut, onBeforeUnmount as Jt, createElementVNode as X, Fragment as dt, renderList as Xt, unref as G, normalizeClass as lt, normalizeStyle as m, withModifiers as Y, createCommentVNode as C, renderSlot as j, createVNode as bt, createTextVNode as Qt, nextTick as Zt } from "vue";
const Rt = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(O) {
    return (F, vt) => {
      const U = Kt("el-icon");
      return O.iconObj.type === "custom" ? (E(), xt(Yt(O.iconObj.icon), zt(ct({ key: 0 }, O.iconObj.attrs)), null, 16)) : O.iconObj.type === "el" ? (E(), xt(U, zt(ct({ key: 1 }, O.iconObj.attrs)), {
        default: qt(() => [
          (E(), xt(Yt(O.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : O.iconObj.type === "iconfont" ? (E(), D("i", ct({
        key: 2,
        class: ["icon iconfont", "icon-" + O.iconObj.icon]
      }, O.iconObj.attrs), null, 16)) : (E(), D("i", ct({
        key: 3,
        class: O.iconObj.type
      }, O.iconObj.attrs), $(O.iconObj.icon), 17));
    };
  }
};
const mt = ["onMousedown"], jt = { class: "com-item-content" }, te = ["title"], ee = ["onClick"], le = ["onClick"], ie = ["onClick"], re = ["onClick"], oe = ["onClick"], se = ["onClick"], ne = ["onClick"], he = ["onMousedown"], ae = ["onMousedown"], ue = ["onMousedown"], ce = ["onMousedown"], de = ["onMousedown"], ge = ["onMousedown"], pe = ["onMousedown"], ye = ["onMousedown"], fe = {
  key: 1,
  class: "com-empty"
}, xe = {
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
      validator(O, F) {
        return O >= 15;
      }
    },
    // 组件项最小高度
    itemMinHeight: {
      type: Number,
      default: 15,
      validator(O, F) {
        return O >= 15;
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
  setup(O, { expose: F, emit: vt }) {
    const U = vt, v = O, I = (i) => {
      let r = i instanceof Array ? [] : {};
      for (let t in i)
        r[t] = typeof i[t] == "object" ? I(i[t]) : i[t];
      return r;
    }, wt = () => {
      v.insertResizeKeys.forEach((i) => {
        v.excludeResizeKeys.indexOf(i) === -1 && S.value.push(i);
      });
    };
    Ft(
      () => [v.insertResizeKeys, v.excludeResizeKeys],
      () => {
        wt();
      }
    );
    const S = q([]);
    wt();
    const b = q(null);
    let L = null, it = null;
    const tt = q(null), rt = q(0), d = q([]), $t = (i, r) => {
      let t = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector;
      for (; i && !t.call(i, r); )
        i = i.parentElement;
      return i;
    };
    let M = null, Mt = null, kt = null;
    const W = q({}), St = (i, r) => {
      et(), M = r, W.value = I(d.value[M]), d.value[M].move = !0;
      const t = $t(i.target, ".com-item");
      Mt = i.clientX - t.offsetLeft, kt = i.clientY - t.offsetTop, window.addEventListener("mousemove", Et), window.addEventListener("mouseup", Ot);
    }, Et = (i) => {
      const r = i.clientX - Mt, t = i.clientY - kt, o = r <= _("left") ? _("left") : r >= _("right") ? _("right") : r, e = t <= _("top") ? _("top") : t >= _("bottom") ? _("bottom") : t, f = o - d.value[M].x, g = e - d.value[M].y, w = `${f > 0 ? "right" : f < 0 ? "left" : ""}_${g > 0 ? "bottom" : g < 0 ? "top" : ""}`;
      e > d.value[M].y && e > it - d.value[M].height - 30 && tt.value.scrollBy(0, 20), e < d.value[M].y && e - tt.value.scrollTop < 30 && tt.value.scrollBy(0, -20), d.value[M].x = o, d.value[M].y = e;
      let y = I(d.value.filter((u) => u.move !== !0).filter((u) => u.x < o && u.x + u.width > o || u.x === o || u.x > o && u.x < o + d.value[M].width).filter((u) => u.y < e && u.y + u.height > e || u.y === e || u.y > e && u.y < e + d.value[M].height));
      if (y.length === 0)
        W.value.x = o, W.value.y = e;
      else {
        if (w.indexOf("top") !== -1) {
          y = y.filter((h) => h.y < W.value.y);
          const u = Math.min(...y.map((h) => h.y + h.height));
          y.forEach((h) => {
            Math.abs(h.y + h.height - u) < 5 && (h.y = u - h.height);
          });
          let n = W.value.y - e, l = !0, s = [...y];
          const a = (h) => {
            I(d.value.filter((c) => c.move !== !0 && c.y + c.height - h.y <= n + 3 && c.y + c.height - h.y >= 0).filter((c) => c.x < h.x && c.x + c.width > h.x || c.x >= h.x && c.x < h.x + h.width)).forEach((c) => {
              c.y + c.height !== h.y && (c.y = h.y - c.height), s.findIndex((H) => H.id === c.id) === -1 && (s.push(c), a(c));
            });
          };
          if (y.forEach((h) => {
            a(h);
          }), s.sort((h, x) => {
            const c = h.y, H = x.y;
            return c - H;
          }), (s.length === 0 || s.filter((h) => h.y === 0).length > 0) && (l = !1), l) {
            let h = 0;
            s.filter((c) => c.y === s[0].y).forEach((c) => {
              I(d.value.filter((P) => P.move !== !0 && P.y + P.height < c.y).filter((P) => P.x < c.x && P.x + P.width > c.x || P.x >= c.x && P.x < c.x + c.width)).forEach((P) => {
                P.y + P.height > h && (h = P.y + P.height);
              });
            }), h = s[0].y - h, h < n && (n = h), s.forEach((c) => {
              c.y -= n, d.value.filter((H) => H.id === c.id)[0].y = c.y;
            }), W.value.x = o, W.value.y = d.value.filter((c) => c.id === s[s.length - 1].id)[0].y + d.value.filter((c) => c.id === s[s.length - 1].id)[0].height;
          } else {
            const h = Math.min(...y.map((x) => x.y));
            h - e >= -7 && h - e < 7 && (y.filter((x) => x.y < W.value.y).forEach((x) => {
              x.y += d.value[M].height, d.value.filter((H) => H.id === x.id)[0].y = x.y;
              const c = (H) => {
                d.value.filter((T) => T.move !== !0 && T.id !== H.id).filter((T) => T.x < H.x && T.x + T.width > H.x || T.x === H.x || T.x > H.x && T.x < H.x + H.width).filter((T) => T.y < H.y && T.y + T.height > H.y || T.y === H.y || T.y > H.y && T.y < H.y + H.height).forEach((T) => {
                  T.y = H.y + H.height, c(T);
                });
              };
              c(x);
            }), W.value.x = o, W.value.y = h);
          }
          y = I(d.value.filter((h) => h.move !== !0).filter((h) => h.x < o && h.x + h.width > o || h.x === o || h.x > o && h.x < o + d.value[M].width).filter((h) => h.y < e && h.y + h.height > e || h.y === e || h.y > e && h.y < e + d.value[M].height));
        }
        if (w.indexOf("bottom") !== -1) {
          const u = Math.max(...y.map((n) => n.y + n.height));
          if (u - (e + d.value[M].height) >= -7 && u - (e + d.value[M].height) < 7) {
            let n = !0;
            y.filter((l) => l.y > W.value.y).forEach((l) => {
              l.y -= d.value[M].height, d.value.filter((a) => a.id === l.id)[0].y = l.y;
              const s = d.value.filter((a) => a.move !== !0 && a.id !== l.id).filter((a) => a.x < l.x && a.x + a.width > l.x || a.x === l.x || a.x > l.x && a.x < l.x + l.width).filter((a) => a.y < l.y && a.y + a.height > l.y || a.y === l.y || a.y > l.y && a.y < l.y + l.height);
              if (s.length > 0) {
                l.y = Math.max(...s.map((h) => h.y + h.height)), d.value.filter((h) => h.id === l.id)[0].y = l.y;
                const a = (h) => {
                  d.value.filter((c) => c.id !== h.id).filter((c) => c.x < h.x && c.x + c.width > h.x || c.x === h.x || c.x > h.x && c.x < h.x + h.width).filter((c) => c.y < h.y && c.y + c.height > h.y || c.y === h.y || c.y > h.y && c.y < h.y + h.height).forEach((c) => {
                    c.y = h.y + h.height, c.move === !0 && (W.value.y = c.y, n = !1), a(c);
                  });
                };
                a(l);
              }
            }), W.value.x = o, n && (W.value.y = u - d.value[M].height), y = I(d.value.filter((l) => l.move !== !0).filter((l) => l.x < o && l.x + l.width > o || l.x === o || l.x > o && l.x < o + d.value[M].width).filter((l) => l.y < e && l.y + l.height > e || l.y === e || l.y > e && l.y < e + d.value[M].height));
          }
        }
        if (((w.indexOf("top") !== -1 || w.indexOf("bottom") !== -1) && (w.indexOf("right") !== -1 || w.indexOf("left") !== -1) && Math.abs(f) > 8 || w.indexOf("top") === -1 && w.indexOf("bottom") === -1 && (w.indexOf("right") !== -1 || w.indexOf("left") !== -1)) && y.length > 0) {
          y.sort((n, l) => {
            const s = n.y, a = l.y;
            return s - a;
          });
          let u = !0;
          for (let n = 0; n < y.length; n++) {
            if (u) {
              const l = I(d.value);
              for (let s = 0; s <= n; s++) {
                let a = null;
                const h = l.filter((x) => x.move !== !0 && x.y < y[s].y).filter((x) => x.x < y[s].x && x.x + x.width > y[s].x || x.x === y[s].x || x.x > y[s].x && x.x < y[s].x + y[s].width);
                if (h.length === 0 ? a = 0 : a = Math.max(...h.map((x) => x.y + x.height)), s === n) {
                  if (y[s].y - (y[s].y + y[s].height - e) < a) {
                    u = !1;
                    break;
                  }
                } else if (y[s].y - y[n].height < a) {
                  u = !1;
                  break;
                } else
                  l.filter((x) => x.id === y[s].id)[0].y -= y[n].height;
              }
            }
            if (u) {
              y[n].y -= y[n].y + y[n].height - e, d.value.filter((l) => l.id === y[n].id)[0].y = y[n].y;
              for (let l = n; l > 0; l--)
                y[n - 1].y -= y[n].height, d.value.filter((s) => s.id === y[n - 1].id)[0].y = y[n - 1].y;
            } else
              y.filter((l) => l.id === y[n].id).forEach((l) => {
                l.y += d.value[M].y + d.value[M].height - l.y, d.value.filter((a) => a.id === l.id)[0].y = l.y;
                const s = (a) => {
                  d.value.filter((x) => x.move !== !0 && x.id !== a.id).filter((x) => x.x < a.x && x.x + x.width > a.x || x.x === a.x || x.x > a.x && x.x < a.x + a.width).filter((x) => x.y < a.y && x.y + x.height > a.y || x.y === a.y || x.y > a.y && x.y < a.y + a.height).forEach((x) => {
                    x.y = a.y + a.height, s(x);
                  });
                };
                s(l);
              });
          }
          W.value.x = o;
        }
      }
      z();
    }, Ot = () => {
      window.removeEventListener("mousemove", Et), window.removeEventListener("mouseup", Ot), setTimeout(() => {
        delete d.value[M].move, d.value[M].x = W.value.x, d.value[M].y = W.value.y, M = null;
      }, 30);
    }, _ = (i) => {
      switch (i) {
        case "top":
          return 0;
        case "right":
          return L - d.value[M].width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let p = null, gt = "", ot = 0, st = 0, B = 0, A = 0, N = 0, K = 0, J = 0, nt = 0, Q = 0, ht = 0;
    const V = (i, r, t) => {
      et(), p = r, gt = t, ot = i.clientX, st = i.clientY, B = r.width, A = r.height, N = r.y, K = r.x, p.drag = !0;
      const o = d.value.filter((u) => u.static === !0 && (u.x < r.x ? u.x + u.width >= r.x : u.x <= r.x + r.width)), e = d.value.filter((u) => u.static === !0 && (u.y < r.y ? u.y + u.height >= r.y : u.y <= r.y + r.height)), f = o.filter((u) => u.y + u.height <= r.y).map((u) => u.y + u.height);
      f.length > 0 ? J = Math.max(...f) : J = 0;
      const g = o.filter((u) => u.y >= r.y + r.height).map((u) => u.y);
      g.length > 0 ? nt = Math.min(...g) : nt = 0;
      const w = e.filter((u) => u.x + u.width <= r.x).map((u) => u.x + u.width);
      w.length > 0 ? Q = Math.max(...w) : Q = 0;
      const y = e.filter((u) => u.x >= r.x + r.width).map((u) => u.x);
      y.length > 0 ? ht = Math.min(...y) : ht = 0, window.addEventListener("mousemove", Dt), window.addEventListener("mouseup", Gt);
    }, Dt = (i) => {
      const r = B + (i.clientX - ot), t = A + (i.clientY - st), o = B - (i.clientX - ot), e = A - (i.clientY - st), f = N + (i.clientY - st), g = K + (i.clientX - ot), w = getComputedStyle(b.value), y = parseInt(w.getPropertyValue("--com-item-border-width").trim()), u = parseInt(w.getPropertyValue("--group-tit-height").trim());
      switch (gt) {
        case "top-left":
          if (p.height = e < v.itemMinHeight ? v.itemMinHeight : e > k("top") ? k("top") : e, p.y = e < v.itemMinHeight ? N + A - v.itemMinHeight : e > k("top") ? J : f, p.width = o < v.itemMinWidth ? v.itemMinWidth : o > k("left") ? k("left") : o, p.x = o < v.itemMinWidth ? K + B - v.itemMinWidth : o > k("left") ? Q : g, p.isGroup === !0) {
            const l = p.width - 2 * y, s = p.height - 2 * y - (p.groupTit ? u : 0);
            p.groupData.forEach((a) => {
              a.width = l * a.groupW, a.x = l * a.groupX, a.height = s * a.groupH, a.y = s * a.groupY;
            });
          }
          break;
        case "top":
          if (p.height = e < v.itemMinHeight ? v.itemMinHeight : e > k("top") ? k("top") : e, p.y = e < v.itemMinHeight ? N + A - v.itemMinHeight : e > k("top") ? J : f, p.isGroup === !0) {
            const l = p.height - 2 * y - (p.groupTit ? u : 0);
            p.groupData.forEach((s) => {
              s.height = l * s.groupH, s.y = l * s.groupY;
            });
          }
          break;
        case "top-right":
          if (p.height = e < v.itemMinHeight ? v.itemMinHeight : e > k("top") ? k("top") : e, p.y = e < v.itemMinHeight ? N + A - v.itemMinHeight : e > k("top") ? J : f, p.width = r < v.itemMinWidth ? v.itemMinWidth : r > k("right") ? k("right") : r, p.isGroup === !0) {
            const l = p.width - 2 * y, s = p.height - 2 * y - (p.groupTit ? u : 0);
            p.groupData.forEach((a) => {
              a.width = l * a.groupW, a.x = l * a.groupX, a.height = s * a.groupH, a.y = s * a.groupY;
            });
          }
          break;
        case "left":
          if (p.width = o < v.itemMinWidth ? v.itemMinWidth : o > k("left") ? k("left") : o, p.x = o < v.itemMinWidth ? K + B - v.itemMinWidth : o > k("left") ? Q : g, p.isGroup === !0) {
            const l = p.width - 2 * y;
            p.groupData.forEach((s) => {
              s.width = l * s.groupW, s.x = l * s.groupX;
            });
          }
          break;
        case "right":
          if (p.width = r < v.itemMinWidth ? v.itemMinWidth : r > k("right") ? k("right") : r, p.isGroup === !0) {
            const l = p.width - 2 * y;
            p.groupData.forEach((s) => {
              s.width = l * s.groupW, s.x = l * s.groupX;
            });
          }
          break;
        case "bottom-left":
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > k("bottom") ? k("bottom") : t, p.width = o < v.itemMinWidth ? v.itemMinWidth : o > k("left") ? k("left") : o, p.x = o < v.itemMinWidth ? K + B - v.itemMinWidth : o > k("left") ? Q : g, p.isGroup === !0) {
            const l = p.width - 2 * y, s = p.height - 2 * y - (p.groupTit ? u : 0);
            p.groupData.forEach((a) => {
              a.width = l * a.groupW, a.x = l * a.groupX, a.height = s * a.groupH, a.y = s * a.groupY;
            });
          }
          break;
        case "bottom":
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > k("bottom") ? k("bottom") : t, p.isGroup === !0) {
            const l = p.height - 2 * y - (p.groupTit ? u : 0);
            p.groupData.forEach((s) => {
              s.height = l * s.groupH, s.y = l * s.groupY;
            });
          }
          break;
        case "bottom-right":
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > k("bottom") ? k("bottom") : t, p.width = r < v.itemMinWidth ? v.itemMinWidth : r > k("right") ? k("right") : r, p.isGroup === !0) {
            const l = p.width - 2 * y, s = p.height - 2 * y - (p.groupTit ? u : 0);
            p.groupData.forEach((a) => {
              a.width = l * a.groupW, a.x = l * a.groupX, a.height = s * a.groupH, a.y = s * a.groupY;
            });
          }
          break;
      }
      let n = I(d.value.filter((l) => l.drag !== !0).filter((l) => l.x < p.x && l.x + l.width > p.x || l.x === p.x || l.x > p.x && l.x < p.x + p.width).filter((l) => l.y < p.y && l.y + l.height > p.y || l.y === p.y || l.y > p.y && l.y < p.y + p.height));
      if (n.length > 0) {
        n.sort((l, s) => {
          const a = l.y, h = s.y;
          return a - h;
        });
        for (let l = 0; l < n.length; l++)
          n.filter((s) => s.id === n[l].id).forEach((s) => {
            s.y += p.y + p.height - s.y, d.value.filter((h) => h.id === s.id)[0].y = s.y;
            const a = (h) => {
              d.value.filter((c) => c.drag !== !0 && c.id !== h.id).filter((c) => c.x < h.x && c.x + c.width > h.x || c.x === h.x || c.x > h.x && c.x < h.x + h.width).filter((c) => c.y < h.y && c.y + c.height > h.y || c.y === h.y || c.y > h.y && c.y < h.y + h.height).forEach((c) => {
                c.y = h.y + h.height, a(c);
              });
            };
            a(s);
          });
      }
      z(), tt.value.scrollTo(0, rt.value - it);
    }, Gt = (i) => {
      delete p.drag, gt = "", p = null, window.removeEventListener("mousemove", Dt), window.removeEventListener("mouseup", Gt);
    }, k = (i) => {
      switch (i) {
        case "top":
          return N + A - J;
        case "left":
          return K + B - Q;
        case "right":
          return (ht > 0 ? ht : L) - K;
        case "bottom":
          return nt > 0 ? nt - N : 999999999;
      }
    }, z = () => {
      const i = d.value.map((r) => r.y + r.height);
      i.length > 0 ? rt.value = Math.max(...i) + 50 : rt.value = 0;
    };
    Ut(() => {
      Ht.observe(b.value);
    });
    const Ht = new ResizeObserver((i) => {
      _t(L === i[0].contentRect.width ? null : i[0].contentRect.width, it === i[0].contentRect.height ? null : i[0].contentRect.height);
    });
    let pt = !1;
    const Lt = (i = [], r = null) => {
      d.value = I(i), r !== null ? Zt(() => {
        const o = b.value.getBoundingClientRect().width / r, e = getComputedStyle(b.value), f = parseInt(e.getPropertyValue("--com-item-border-width").trim()), g = parseInt(e.getPropertyValue("--group-tit-height").trim());
        d.value.forEach((w) => {
          if (w.width *= o, w.height *= o, w.x *= o, w.y *= o, w.isGroup === !0) {
            const y = w.width - 2 * f, u = w.height - 2 * f - (w.groupTit ? g : 0);
            w.groupData.forEach((n) => {
              n.width = y * n.groupW, n.x = y * n.groupX, n.height = u * n.groupH, n.y = u * n.groupY;
            });
          }
        }), z();
      }) : z(), pt = !0, setTimeout(() => {
        pt = !1;
      }, 500);
    }, Wt = (i, r, t) => {
      const o = r.map((g) => g.y), e = Math.max(...o), f = r.filter((g) => g.y + g.height > e);
      f.sort((g, w) => {
        const y = g.x, u = w.x;
        return y - u;
      });
      for (let g = 0; g < f.length; g++) {
        if (g === 0 && f[g].x >= i.width) {
          i.y = e, i.x = 0;
          break;
        }
        if (f.length > 1 && g !== f.length - 1 && f[g].x + f[g].width + i.width <= f[g + 1].x) {
          i.y = e, i.x = f[g].x + f[g].width;
          break;
        }
        if (g === f.length - 1 && f[g].x + f[g].width + i.width <= t) {
          i.y = e, i.x = f[g].x + f[g].width;
          break;
        }
      }
      if (i.y == null) {
        i.x = 0;
        const g = r.map((w) => w.y + w.height);
        i.y = Math.max(...g);
      }
    }, at = (i, r = null, t = !1) => {
      const o = I(i), e = d.value.filter((f) => f.id === r);
      if (o.id || (o.id = (/* @__PURE__ */ new Date()).getTime() + ""), r && e.length !== 1) {
        try {
        } catch {
        }
        return;
      }
      if (t !== !0)
        if (delete o.x, delete o.y, r) {
          const f = getComputedStyle(b.value), g = parseInt(f.getPropertyValue("--com-item-border-width").trim());
          Wt(o, e[0].groupData, e[0].width - 2 * g);
        } else
          d.value.length === 0 ? (o.x = 0, o.y = 0) : Wt(o, d.value, L);
      if (r) {
        e[0].groupData.push(o);
        const f = ft(e[0].groupData, e[0]);
        yt(f);
      } else
        d.value.push(o);
      z();
    }, Z = (i, r = null) => {
      let t = -1;
      const o = d.value.filter((e) => e.id === r);
      if (r ? o.length === 1 && (t = o[0].groupData.findIndex((e) => e.id === i)) : t = d.value.findIndex((e) => e.id === i), t !== -1) {
        if (r)
          if (o[0].groupData.splice(t, 1), o[0].groupData.length === 1)
            ut(r);
          else {
            const e = ft(o[0].groupData, o[0]);
            yt(e);
          }
        else
          d.value.splice(t, 1);
        z();
      } else
        try {
        } catch {
        }
    }, yt = (i) => {
      if (i.id) {
        const r = I(i);
        let t = -1;
        const o = d.value.filter((e) => e.id === r.inGroupId);
        if (r.inGroupId ? o.length === 1 && (t = o[0].groupData.findIndex((e) => e.id === r.id)) : t = d.value.findIndex((e) => e.id === r.id), t !== -1)
          r.inGroupId ? o[0].groupData[t] = r : d.value[t] = r, z();
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, _t = (i, r) => {
      if (i !== null) {
        const t = L ? i / L : 1;
        L = i;
        const o = getComputedStyle(b.value), e = parseInt(o.getPropertyValue("--com-item-border-width").trim()), f = parseInt(o.getPropertyValue("--group-tit-height").trim());
        pt || (d.value.forEach((g) => {
          if (g.width *= t, g.height *= t, g.x *= t, g.y *= t, g.isGroup === !0) {
            const w = g.width - 2 * e, y = g.height - 2 * e - (g.groupTit ? f : 0);
            g.groupData.forEach((u) => {
              u.width = w * u.groupW, u.x = w * u.groupX, u.height = y * u.groupH, u.y = y * u.groupY;
            });
          }
        }), z());
      }
      r !== null && (it = r);
    }, Tt = (i) => {
      i.showPop || (d.value.forEach((r) => {
        delete r.showPop, r.groupData && r.groupData.forEach((t) => {
          delete t.showPop;
        });
      }), i.showPop = !0, window.addEventListener("click", et));
    }, et = () => {
      d.value.forEach((i) => {
        delete i.showPop, i.groupData && i.groupData.forEach((r) => {
          delete r.showPop;
        });
      }), window.removeEventListener("click", et);
    }, R = q(!1), Ct = (i) => {
      const r = d.value.findIndex((t) => t.id === i);
      if (r !== -1)
        d.value[r].checked = !0, d.value[r].disabled = !0, R.value = !0, U("showGroup", R.value);
      else
        try {
        } catch {
        }
    }, It = () => {
      R.value = !1, d.value.forEach((i) => {
        delete i.checked, delete i.disabled, i.groupData && i.groupData.forEach((r) => {
          delete r.checked, delete r.disabled;
        });
      }), U("showGroup", R.value);
    }, Vt = (i) => {
      i.checked = !i.checked, U("updateChecked", d.value.filter((r) => r.checked).length);
    }, ft = (i, r) => {
      const t = I(i), o = I(r);
      t.sort((n, l) => {
        const s = n.x, a = l.x;
        return s - a;
      });
      for (let n = 0; n < t.length - 1; n++) {
        if (n === 0 && t[n].x > 0) {
          const l = t[n].x;
          for (let s = n; s < t.length; s++)
            t[s].x -= l;
        }
        if (t[n + 1].x > t[n].x + t[n].width) {
          const l = t[n + 1].x - (t[n].x + t[n].width);
          for (let s = n + 1; s < t.length; s++)
            t[s].x -= l;
        }
      }
      t.sort((n, l) => {
        const s = n.y, a = l.y;
        return s - a;
      });
      for (let n = 0; n < t.length - 1; n++) {
        if (n === 0 && t[n].y > 0) {
          const l = t[n].y;
          for (let s = n; s < t.length; s++)
            t[s].y -= l;
        }
        if (t[n + 1].y > t[n].y + t[n].height) {
          const l = t[n + 1].y - (t[n].y + t[n].height);
          for (let s = n + 1; s < t.length; s++)
            t[s].y -= l;
        }
      }
      const e = t.map((n) => n.x + n.width), f = Math.max(...e), g = t.map((n) => n.y + n.height), w = Math.max(...g);
      t.forEach((n) => {
        n.inGroupId || (n.inGroupId = o.id), n.groupW = n.width / f, n.groupH = n.height / w, n.groupX = n.x / f, n.groupY = n.y / w, n.isObstacle = n.x + n.width === f && n.y === 0;
      });
      const y = getComputedStyle(b.value), u = parseInt(y.getPropertyValue("--com-item-border-width").trim());
      return o.width = f + 2 * u, o.height = w + 2 * u, o.groupData = [...t], o;
    }, Bt = () => {
      const i = d.value.filter((r) => r.checked);
      if (i.length > 1) {
        const r = {
          id: (/* @__PURE__ */ new Date()).getTime() + "G",
          isGroup: !0,
          groupTit: ""
        }, t = ft(i, r);
        t.groupData.forEach((o) => {
          Z(o.id);
        }), at(t), z();
      }
      It();
    }, Pt = (i, r) => {
      const t = d.value.filter((o) => o.id === r)[0];
      if (t) {
        const o = t.groupData.filter((e) => e.id === i)[0];
        if (o)
          t.groupData.length === 2 ? ut(r) : (delete o.inGroupId, delete o.groupW, delete o.groupH, delete o.groupX, delete o.groupY, delete o.isObstacle, Z(o.id, t.id), at(o), z());
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, ut = (i) => {
      const r = d.value.filter((t) => t.id === i)[0];
      if (r)
        Z(r.id), r.groupData.forEach((t) => {
          delete t.inGroupId, delete t.groupW, delete t.groupH, delete r.groupX, delete r.groupY, delete r.isObstacle, t.x += r.x, t.y += r.y, at(t, null, !0);
        }), z();
      else
        try {
        } catch {
        }
    }, At = (i = "", r) => {
      const t = d.value.filter((o) => o.id === r)[0];
      if (t) {
        if (!t.groupTit || !i) {
          const e = getComputedStyle(b.value), f = parseInt(e.getPropertyValue("--group-tit-height").trim());
          t.groupTit && !i && (t.height -= f), !t.groupTit && i && (t.height += f);
        }
        t.groupTit = i;
        const o = (e) => {
          d.value.filter((g) => g.id !== e.id).filter((g) => g.x < e.x && g.x + g.width > e.x || g.x === e.x || g.x > e.x && g.x < e.x + e.width).filter((g) => g.y < e.y && g.y + g.height > e.y || g.y === e.y || g.y > e.y && g.y < e.y + e.height).forEach((g) => {
            g.y = e.y + e.height, o(g);
          });
        };
        o(t), z();
      } else
        try {
        } catch {
        }
    }, Nt = () => ({ data: I(d.value), width: L });
    return Jt(() => {
      Ht.unobserve(b.value), window.removeEventListener("click", et);
    }), F({ init: Lt, addItem: at, deleteItem: Z, updateItem: yt, openGroup: Ct, closeGroup: It, addGroup: Bt, removeGroupItem: Pt, removeGroup: ut, changeGroupTit: At, getData: Nt }), (i, r) => (E(), D("div", {
      class: "vue-drag-component-plus",
      ref_key: "pageRef",
      ref: b
    }, [
      X("div", {
        class: "content-box",
        ref_key: "boxRef",
        ref: tt
      }, [
        (E(!0), D(dt, null, Xt(G(d), (t, o) => (E(), D("div", {
          class: lt(["com-item", O.seeModel || G(R) || t.static === !0 || t.dragable === !1 ? "" : "can-drag", t.move ? "is-move" : "", t.drag ? "is-drag" : "", t.showPop ? "on-top" : "", O.seeModel ? "no-hover" : ""]),
          style: m({
            width: t.width + "px",
            height: t.height + "px",
            top: t.y + "px",
            left: t.x + "px"
          }),
          key: o,
          onMousedown: Y((e) => O.seeModel || G(R) || t.static === !0 || t.dragable === !1 ? null : St(e, o), ["prevent"])
        }, [
          X("div", jt, [
            t.isGroup ? (E(), D(dt, { key: 0 }, [
              t.groupTit ? (E(), D("div", {
                key: 0,
                class: "group-item-tit",
                title: t.groupTit
              }, $(t.groupTit), 9, te)) : C("", !0),
              X("div", {
                class: lt(["group-item-content", t.groupTit ? "" : "full"])
              }, [
                (E(!0), D(dt, null, Xt(t.groupData, (e, f) => (E(), D("div", {
                  class: lt(["com-item-content-child", e.isObstacle ? "else" : ""]),
                  style: m({
                    width: e.width + "px",
                    height: e.height + "px",
                    top: e.y + "px",
                    left: e.x + "px"
                  }),
                  key: f
                }, [
                  j(i.$slots, "item", { data: e }, () => [
                    X("p", null, $(e.width) + "," + $(e.height), 1),
                    X("p", null, $(e.x) + "," + $(e.y), 1)
                  ]),
                  !O.seeModel && !G(R) && G(M) === null && G(p) === null ? (E(), D("div", {
                    key: 0,
                    class: "setting-box",
                    style: m({ display: e.showPop ? "flex" : "none" }),
                    onMousedown: Y((g) => null, ["prevent", "stop"])
                  }, [
                    bt(Rt, {
                      iconObj: O.settingIcon,
                      onClick: Y((g) => Tt(e), ["prevent", "stop"])
                    }, null, 8, ["iconObj", "onClick"])
                  ], 36)) : C("", !0),
                  e.showPop ? (E(), D("div", {
                    key: 1,
                    class: "setting-box-pop",
                    onMousedown: Y((g) => null, ["prevent", "stop"])
                  }, [
                    j(i.$slots, "setPopNormal", {
                      data: I(e)
                    }, () => [
                      X("div", {
                        class: "setting-box-pop-item",
                        onClick: (g) => Pt(e.id, e.inGroupId)
                      }, "移出组合", 8, ee),
                      X("div", {
                        class: "setting-box-pop-item",
                        onClick: (g) => Z(e.id, e.inGroupId)
                      }, "删除", 8, le)
                    ])
                  ], 32)) : C("", !0)
                ], 6))), 128))
              ], 2)
            ], 64)) : j(i.$slots, "item", {
              key: 1,
              data: t
            }, () => [
              X("p", null, $(t.width) + "," + $(t.height), 1),
              X("p", null, $(t.x) + "," + $(t.y), 1)
            ]),
            !t.isGroup && t.notGroup !== !0 && G(R) ? (E(), D("div", {
              key: 2,
              class: lt(["group-checkbox", t.checked ? "is-checked" : "", t.disabled ? "disabled" : ""]),
              onClick: (e) => t.disabled ? null : Vt(t)
            }, null, 10, ie)) : C("", !0),
            !O.seeModel && !G(R) && G(M) === null && G(p) === null ? (E(), D("div", {
              key: 3,
              class: "setting-box",
              style: m({ display: t.showPop ? "flex" : "none" }),
              onMousedown: Y((e) => null, ["prevent", "stop"])
            }, [
              bt(Rt, {
                iconObj: O.settingIcon,
                onClick: Y((e) => Tt(t), ["prevent", "stop"])
              }, null, 8, ["iconObj", "onClick"])
            ], 36)) : C("", !0),
            t.showPop ? (E(), D("div", {
              key: 4,
              class: lt(["setting-box-pop", t.isGroup === !0 ? "special" : ""]),
              onMousedown: Y((e) => null, ["prevent", "stop"])
            }, [
              t.isGroup === !0 ? j(i.$slots, "setPopSpecial", {
                key: 0,
                data: I(t)
              }, () => [
                O.hideTit ? C("", !0) : (E(), D("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (e) => U("showTitPop", t.groupTit, t.id)
                }, " 设置组合标题", 8, re)),
                X("div", {
                  class: "setting-box-pop-item",
                  onClick: (e) => ut(t.id)
                }, "解除组合", 8, oe)
              ]) : j(i.$slots, "setPopNormal", {
                key: 1,
                data: I(t)
              }, () => [
                t.notGroup !== !0 ? (E(), D("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (e) => Ct(t.id)
                }, "组合", 8, se)) : C("", !0),
                X("div", {
                  class: "setting-box-pop-item",
                  onClick: (e) => Z(t.id)
                }, "删除", 8, ne)
              ])
            ], 34)) : C("", !0)
          ]),
          !O.seeModel && !G(R) && !t.move && t.static !== !0 && t.resizable !== !1 ? (E(), D(dt, { key: 0 }, [
            G(S).indexOf("topLeft") !== -1 ? (E(), D("div", {
              key: 0,
              class: "resize-line top-left",
              onMousedown: Y((e) => V(e, t, "top-left"), ["prevent", "stop"])
            }, null, 40, he)) : C("", !0),
            G(S).indexOf("top") !== -1 ? (E(), D("div", {
              key: 1,
              class: "resize-line top",
              onMousedown: Y((e) => V(e, t, "top"), ["prevent", "stop"])
            }, null, 40, ae)) : C("", !0),
            G(S).indexOf("topRight") !== -1 ? (E(), D("div", {
              key: 2,
              class: "resize-line top-right",
              onMousedown: Y((e) => V(e, t, "top-right"), ["prevent", "stop"])
            }, null, 40, ue)) : C("", !0),
            G(S).indexOf("left") !== -1 ? (E(), D("div", {
              key: 3,
              class: "resize-line left",
              onMousedown: Y((e) => V(e, t, "left"), ["prevent", "stop"])
            }, null, 40, ce)) : C("", !0),
            G(S).indexOf("right") !== -1 ? (E(), D("div", {
              key: 4,
              class: "resize-line right",
              onMousedown: Y((e) => V(e, t, "right"), ["prevent", "stop"])
            }, null, 40, de)) : C("", !0),
            G(S).indexOf("bottomLeft") !== -1 ? (E(), D("div", {
              key: 5,
              class: "resize-line bottom-left",
              onMousedown: Y((e) => V(e, t, "bottom-left"), ["prevent", "stop"])
            }, null, 40, ge)) : C("", !0),
            G(S).indexOf("bottom") !== -1 ? (E(), D("div", {
              key: 6,
              class: "resize-line bottom",
              onMousedown: Y((e) => V(e, t, "bottom"), ["prevent", "stop"])
            }, null, 40, pe)) : C("", !0),
            G(S).indexOf("bottomRight") !== -1 ? (E(), D("div", {
              key: 7,
              class: "resize-line bottom-right",
              onMousedown: Y((e) => V(e, t, "bottom-right"), ["prevent", "stop"])
            }, null, 40, ye)) : C("", !0)
          ], 64)) : C("", !0)
        ], 46, mt))), 128)),
        G(M) !== null ? (E(), D("div", {
          key: 0,
          class: "drag-bg",
          style: m({
            width: G(W).width + "px",
            height: G(W).height + "px",
            top: G(W).y + "px",
            left: G(W).x + "px"
          })
        }, null, 4)) : C("", !0),
        X("div", {
          class: "height-bg",
          style: m({ height: G(rt) + "px" })
        }, null, 4),
        G(d).length === 0 ? (E(), D("div", fe, [
          j(i.$slots, "empty", {}, () => [
            Qt(" 暂无数据 ")
          ])
        ])) : C("", !0)
      ], 512)
    ], 512));
  }
}, ve = [xe], we = {
  install(O) {
    ve.forEach((F) => {
      O.component("vueDragComponentPlus", F);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(we);
export {
  we as default
};
