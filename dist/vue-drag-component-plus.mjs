import { resolveComponent as Jt, openBlock as E, createBlock as yt, resolveDynamicComponent as Yt, normalizeProps as Xt, mergeProps as ct, withCtx as Qt, createElementBlock as G, toDisplayString as R, watch as zt, ref as F, onMounted as Zt, onBeforeUnmount as mt, createElementVNode as z, Fragment as dt, renderList as bt, unref as O, normalizeClass as rt, normalizeStyle as m, withModifiers as Y, createCommentVNode as P, renderSlot as j, createVNode as St, createTextVNode as jt, nextTick as Rt } from "vue";
const $t = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(M) {
    return (L, ft) => {
      const U = Jt("el-icon");
      return M.iconObj.type === "custom" ? (E(), yt(Yt(M.iconObj.icon), Xt(ct({ key: 0 }, M.iconObj.attrs)), null, 16)) : M.iconObj.type === "el" ? (E(), yt(U, Xt(ct({ key: 1 }, M.iconObj.attrs)), {
        default: Qt(() => [
          (E(), yt(Yt(M.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : M.iconObj.type === "iconfont" ? (E(), G("i", ct({
        key: 2,
        class: ["icon iconfont", "icon-" + M.iconObj.icon]
      }, M.iconObj.attrs), null, 16)) : (E(), G("i", ct({
        key: 3,
        class: M.iconObj.type
      }, M.iconObj.attrs), R(M.iconObj.icon), 17));
    };
  }
};
const te = ["onMousedown"], ee = { class: "com-item-content" }, le = ["title"], re = ["onClick"], ie = ["onClick"], oe = ["onClick"], se = ["onClick"], ne = ["onClick"], ae = ["onClick"], he = ["onClick"], ue = ["onMousedown"], ce = ["onMousedown"], de = ["onMousedown"], ge = ["onMousedown"], pe = ["onMousedown"], ye = ["onMousedown"], fe = ["onMousedown"], xe = ["onMousedown"], ve = {
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
    // 预览模式底部最小留白
    seeModelMinBg: {
      type: Number,
      default: 50,
      validator(M, L) {
        return M >= 0;
      }
    },
    // 组件项最小宽度
    itemMinWidth: {
      type: Number,
      default: 15,
      validator(M, L) {
        return M >= 15;
      }
    },
    // 组件项最小高度
    itemMinHeight: {
      type: Number,
      default: 15,
      validator(M, L) {
        return M >= 15;
      }
    },
    // 纵向相邻元素的自动间距
    ySpace: {
      type: Number,
      default: 7,
      validator(M, L) {
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
    }
  },
  emits: ["showGroup", "updateChecked", "showTitPop"],
  setup(M, { expose: L, emit: ft }) {
    const U = ft, v = M, W = (l) => {
      let r = l instanceof Array ? [] : {};
      for (let t in l)
        r[t] = typeof l[t] == "object" ? W(l[t]) : l[t];
      return r;
    }, xt = () => {
      v.insertResizeKeys.forEach((l) => {
        v.excludeResizeKeys.indexOf(l) === -1 && $.value.push(l);
      });
    };
    zt(
      () => [v.insertResizeKeys, v.excludeResizeKeys],
      () => {
        xt();
      }
    );
    const $ = F([]);
    xt();
    const b = F(null);
    let V = null, vt = null;
    const Lt = F(null), tt = F(0), a = F([]), Vt = (l, r) => {
      let t = l.matches || l.webkitMatchesSelector || l.mozMatchesSelector || l.msMatchesSelector;
      for (; l && !t.call(l, r); )
        l = l.parentElement;
      return l;
    };
    let D = null, wt = null, Mt = null;
    const I = F({}), _t = (l, r) => {
      et(), D = r, I.value = W(a.value[D]), a.value[D].move = !0;
      const t = Vt(l.target, ".com-item");
      wt = l.clientX - t.offsetLeft, Mt = l.clientY - t.offsetTop, window.addEventListener("mousemove", kt), window.addEventListener("mouseup", Et);
    }, kt = (l) => {
      const r = l.clientX - wt, t = l.clientY - Mt, i = r <= _("left") ? _("left") : r >= _("right") ? _("right") : r, e = t <= _("top") ? _("top") : t >= _("bottom") ? _("bottom") : t, f = i - a.value[D].x, c = e - a.value[D].y, w = `${f > 0 ? "right" : f < 0 ? "left" : ""}_${c > 0 ? "bottom" : c < 0 ? "top" : ""}`;
      a.value[D].x = i, a.value[D].y = e;
      let y = W(a.value.filter((d) => d.move !== !0).filter((d) => d.x < i && d.x + d.width > i || d.x === i || d.x > i && d.x < i + a.value[D].width).filter((d) => d.y < e && d.y + d.height > e || d.y === e || d.y > e && d.y < e + a.value[D].height));
      if (y.length === 0)
        I.value.x = i, I.value.y = e;
      else {
        if (w.indexOf("top") !== -1) {
          y = y.filter((u) => u.y < I.value.y);
          const d = Math.min(...y.map((u) => u.y + u.height));
          y.forEach((u) => {
            Math.abs(u.y + u.height - d) < 5 && (u.y = d - u.height);
          });
          let h = I.value.y - e, o = !0, n = [...y];
          const s = (u) => {
            W(a.value.filter((g) => g.move !== !0 && g.y + g.height - u.y <= h + 3 && g.y + g.height - u.y >= 0).filter((g) => g.x < u.x && g.x + g.width > u.x || g.x >= u.x && g.x < u.x + u.width)).forEach((g) => {
              g.y + g.height !== u.y && (g.y = u.y - g.height), n.findIndex((H) => H.id === g.id) === -1 && (n.push(g), s(g));
            });
          };
          if (y.forEach((u) => {
            s(u);
          }), n.sort((u, x) => {
            const g = u.y, H = x.y;
            return g - H;
          }), (n.length === 0 || n.filter((u) => u.y === 0).length > 0) && (o = !1), o) {
            let u = 0;
            n.filter((g) => g.y === n[0].y).forEach((g) => {
              W(a.value.filter((T) => T.move !== !0 && T.y + T.height < g.y).filter((T) => T.x < g.x && T.x + T.width > g.x || T.x >= g.x && T.x < g.x + g.width)).forEach((T) => {
                T.y + T.height > u && (u = T.y + T.height);
              });
            }), u = n[0].y - u, u < h && (h = u), n.forEach((g) => {
              g.y -= h, a.value.filter((H) => H.id === g.id)[0].y = g.y;
            }), I.value.x = i, I.value.y = a.value.filter((g) => g.id === n[n.length - 1].id)[0].y + a.value.filter((g) => g.id === n[n.length - 1].id)[0].height;
          } else {
            const u = Math.min(...y.map((x) => x.y));
            u - e >= -7 && u - e < 7 && (y.filter((x) => x.y < I.value.y).forEach((x) => {
              x.y += a.value[D].height, a.value.filter((H) => H.id === x.id)[0].y = x.y;
              const g = (H) => {
                a.value.filter((C) => C.move !== !0 && C.id !== H.id).filter((C) => C.x < H.x && C.x + C.width > H.x || C.x === H.x || C.x > H.x && C.x < H.x + H.width).filter((C) => C.y < H.y && C.y + C.height > H.y || C.y === H.y || C.y > H.y && C.y < H.y + H.height).forEach((C) => {
                  C.y = H.y + H.height, g(C);
                });
              };
              g(x);
            }), I.value.x = i, I.value.y = u);
          }
          y = W(a.value.filter((u) => u.move !== !0).filter((u) => u.x < i && u.x + u.width > i || u.x === i || u.x > i && u.x < i + a.value[D].width).filter((u) => u.y < e && u.y + u.height > e || u.y === e || u.y > e && u.y < e + a.value[D].height));
        }
        if (w.indexOf("bottom") !== -1) {
          const d = Math.max(...y.map((h) => h.y + h.height));
          if (d - (e + a.value[D].height) >= -7 && d - (e + a.value[D].height) < 7) {
            let h = !0;
            y.filter((o) => o.y > I.value.y).forEach((o) => {
              o.y -= a.value[D].height, a.value.filter((s) => s.id === o.id)[0].y = o.y;
              const n = a.value.filter((s) => s.move !== !0 && s.id !== o.id).filter((s) => s.x < o.x && s.x + s.width > o.x || s.x === o.x || s.x > o.x && s.x < o.x + o.width).filter((s) => s.y < o.y && s.y + s.height > o.y || s.y === o.y || s.y > o.y && s.y < o.y + o.height);
              if (n.length > 0) {
                o.y = Math.max(...n.map((u) => u.y + u.height)), a.value.filter((u) => u.id === o.id)[0].y = o.y;
                const s = (u) => {
                  a.value.filter((g) => g.id !== u.id).filter((g) => g.x < u.x && g.x + g.width > u.x || g.x === u.x || g.x > u.x && g.x < u.x + u.width).filter((g) => g.y < u.y && g.y + g.height > u.y || g.y === u.y || g.y > u.y && g.y < u.y + u.height).forEach((g) => {
                    g.y = u.y + u.height, g.move === !0 && (I.value.y = g.y, h = !1), s(g);
                  });
                };
                s(o);
              }
            }), I.value.x = i, h && (I.value.y = d - a.value[D].height), y = W(a.value.filter((o) => o.move !== !0).filter((o) => o.x < i && o.x + o.width > i || o.x === i || o.x > i && o.x < i + a.value[D].width).filter((o) => o.y < e && o.y + o.height > e || o.y === e || o.y > e && o.y < e + a.value[D].height));
          }
        }
        if (((w.indexOf("top") !== -1 || w.indexOf("bottom") !== -1) && (w.indexOf("right") !== -1 || w.indexOf("left") !== -1) && Math.abs(f) > 8 || w.indexOf("top") === -1 && w.indexOf("bottom") === -1 && (w.indexOf("right") !== -1 || w.indexOf("left") !== -1)) && y.length > 0) {
          y.sort((h, o) => {
            const n = h.y, s = o.y;
            return n - s;
          });
          let d = !0;
          for (let h = 0; h < y.length; h++) {
            if (d) {
              const o = W(a.value);
              for (let n = 0; n <= h; n++) {
                let s = null;
                const u = o.filter((x) => x.move !== !0 && x.y < y[n].y).filter((x) => x.x < y[n].x && x.x + x.width > y[n].x || x.x === y[n].x || x.x > y[n].x && x.x < y[n].x + y[n].width);
                if (u.length === 0 ? s = 0 : s = Math.max(...u.map((x) => x.y + x.height)), n === h) {
                  if (y[n].y - (y[n].y + y[n].height - e) < s) {
                    d = !1;
                    break;
                  }
                } else if (y[n].y - y[h].height < s) {
                  d = !1;
                  break;
                } else
                  o.filter((x) => x.id === y[n].id)[0].y -= y[h].height;
              }
            }
            if (d) {
              y[h].y -= y[h].y + y[h].height - e, a.value.filter((o) => o.id === y[h].id)[0].y = y[h].y;
              for (let o = h; o > 0; o--)
                y[h - 1].y -= y[h].height, a.value.filter((n) => n.id === y[h - 1].id)[0].y = y[h - 1].y;
            } else
              y.filter((o) => o.id === y[h].id).forEach((o) => {
                o.y += a.value[D].y + a.value[D].height - o.y, a.value.filter((s) => s.id === o.id)[0].y = o.y;
                const n = (s) => {
                  a.value.filter((x) => x.move !== !0 && x.id !== s.id).filter((x) => x.x < s.x && x.x + x.width > s.x || x.x === s.x || x.x > s.x && x.x < s.x + s.width).filter((x) => x.y < s.y && x.y + x.height > s.y || x.y === s.y || x.y > s.y && x.y < s.y + s.height).forEach((x) => {
                    x.y = s.y + s.height, n(x);
                  });
                };
                n(o);
              });
          }
          I.value.x = i;
        }
      }
      X(!1);
    }, Et = () => {
      window.removeEventListener("mousemove", kt), window.removeEventListener("mouseup", Et), delete a.value[D].move, a.value[D].x = I.value.x, a.value[D].y = I.value.y, D = null, X();
    }, _ = (l) => {
      switch (l) {
        case "top":
          return 0;
        case "right":
          return V - a.value[D].width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let p = null, gt = "", it = 0, ot = 0, A = 0, N = 0, K = 0, q = 0, J = 0, st = 0, Q = 0, nt = 0;
    const B = (l, r, t) => {
      et(), p = r, gt = t, it = l.clientX, ot = l.clientY, A = r.width, N = r.height, K = r.y, q = r.x, p.drag = !0;
      const i = a.value.filter((d) => d.static === !0 && (d.x < r.x ? d.x + d.width >= r.x : d.x <= r.x + r.width)), e = a.value.filter((d) => d.static === !0 && (d.y < r.y ? d.y + d.height >= r.y : d.y <= r.y + r.height)), f = i.filter((d) => d.y + d.height <= r.y).map((d) => d.y + d.height);
      f.length > 0 ? J = Math.max(...f) : J = 0;
      const c = i.filter((d) => d.y >= r.y + r.height).map((d) => d.y);
      c.length > 0 ? st = Math.min(...c) : st = 0;
      const w = e.filter((d) => d.x + d.width <= r.x).map((d) => d.x + d.width);
      w.length > 0 ? Q = Math.max(...w) : Q = 0;
      const y = e.filter((d) => d.x >= r.x + r.width).map((d) => d.x);
      y.length > 0 ? nt = Math.min(...y) : nt = 0, window.addEventListener("mousemove", Dt), window.addEventListener("mouseup", Ot);
    }, Dt = (l) => {
      const r = A + (l.clientX - it), t = N + (l.clientY - ot), i = A - (l.clientX - it), e = N - (l.clientY - ot), f = K + (l.clientY - ot), c = q + (l.clientX - it), w = getComputedStyle(b.value), y = parseInt(w.getPropertyValue("--com-item-border-width").trim()), d = parseInt(w.getPropertyValue("--group-tit-height").trim());
      switch (gt) {
        case "top-left":
          if (p.height = e < v.itemMinHeight ? v.itemMinHeight : e > k("top") ? k("top") : e, p.y = e < v.itemMinHeight ? K + N - v.itemMinHeight : e > k("top") ? J : f, p.width = i < v.itemMinWidth ? v.itemMinWidth : i > k("left") ? k("left") : i, p.x = i < v.itemMinWidth ? q + A - v.itemMinWidth : i > k("left") ? Q : c, p.isGroup === !0) {
            const o = p.width - 2 * y, n = p.height - 2 * y - (p.groupTit ? d : 0);
            p.groupData.forEach((s) => {
              s.width = o * s.groupW, s.x = o * s.groupX, s.height = n * s.groupH, s.y = n * s.groupY;
            });
          }
          break;
        case "top":
          if (p.height = e < v.itemMinHeight ? v.itemMinHeight : e > k("top") ? k("top") : e, p.y = e < v.itemMinHeight ? K + N - v.itemMinHeight : e > k("top") ? J : f, p.isGroup === !0) {
            const o = p.height - 2 * y - (p.groupTit ? d : 0);
            p.groupData.forEach((n) => {
              n.height = o * n.groupH, n.y = o * n.groupY;
            });
          }
          break;
        case "top-right":
          if (p.height = e < v.itemMinHeight ? v.itemMinHeight : e > k("top") ? k("top") : e, p.y = e < v.itemMinHeight ? K + N - v.itemMinHeight : e > k("top") ? J : f, p.width = r < v.itemMinWidth ? v.itemMinWidth : r > k("right") ? k("right") : r, p.isGroup === !0) {
            const o = p.width - 2 * y, n = p.height - 2 * y - (p.groupTit ? d : 0);
            p.groupData.forEach((s) => {
              s.width = o * s.groupW, s.x = o * s.groupX, s.height = n * s.groupH, s.y = n * s.groupY;
            });
          }
          break;
        case "left":
          if (p.width = i < v.itemMinWidth ? v.itemMinWidth : i > k("left") ? k("left") : i, p.x = i < v.itemMinWidth ? q + A - v.itemMinWidth : i > k("left") ? Q : c, p.isGroup === !0) {
            const o = p.width - 2 * y;
            p.groupData.forEach((n) => {
              n.width = o * n.groupW, n.x = o * n.groupX;
            });
          }
          break;
        case "right":
          if (p.width = r < v.itemMinWidth ? v.itemMinWidth : r > k("right") ? k("right") : r, p.isGroup === !0) {
            const o = p.width - 2 * y;
            p.groupData.forEach((n) => {
              n.width = o * n.groupW, n.x = o * n.groupX;
            });
          }
          break;
        case "bottom-left":
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > k("bottom") ? k("bottom") : t, p.width = i < v.itemMinWidth ? v.itemMinWidth : i > k("left") ? k("left") : i, p.x = i < v.itemMinWidth ? q + A - v.itemMinWidth : i > k("left") ? Q : c, p.isGroup === !0) {
            const o = p.width - 2 * y, n = p.height - 2 * y - (p.groupTit ? d : 0);
            p.groupData.forEach((s) => {
              s.width = o * s.groupW, s.x = o * s.groupX, s.height = n * s.groupH, s.y = n * s.groupY;
            });
          }
          break;
        case "bottom":
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > k("bottom") ? k("bottom") : t, p.isGroup === !0) {
            const o = p.height - 2 * y - (p.groupTit ? d : 0);
            p.groupData.forEach((n) => {
              n.height = o * n.groupH, n.y = o * n.groupY;
            });
          }
          break;
        case "bottom-right":
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > k("bottom") ? k("bottom") : t, p.width = r < v.itemMinWidth ? v.itemMinWidth : r > k("right") ? k("right") : r, p.isGroup === !0) {
            const o = p.width - 2 * y, n = p.height - 2 * y - (p.groupTit ? d : 0);
            p.groupData.forEach((s) => {
              s.width = o * s.groupW, s.x = o * s.groupX, s.height = n * s.groupH, s.y = n * s.groupY;
            });
          }
          break;
      }
      let h = W(a.value.filter((o) => o.drag !== !0).filter((o) => o.x < p.x && o.x + o.width > p.x || o.x === p.x || o.x > p.x && o.x < p.x + p.width).filter((o) => o.y < p.y && o.y + o.height > p.y || o.y === p.y || o.y > p.y && o.y < p.y + p.height));
      if (h.length > 0) {
        h.sort((o, n) => {
          const s = o.y, u = n.y;
          return s - u;
        });
        for (let o = 0; o < h.length; o++)
          h.filter((n) => n.id === h[o].id).forEach((n) => {
            n.y += p.y + p.height - n.y, a.value.filter((u) => u.id === n.id)[0].y = n.y;
            const s = (u) => {
              a.value.filter((g) => g.drag !== !0 && g.id !== u.id).filter((g) => g.x < u.x && g.x + g.width > u.x || g.x === u.x || g.x > u.x && g.x < u.x + u.width).filter((g) => g.y < u.y && g.y + g.height > u.y || g.y === u.y || g.y > u.y && g.y < u.y + u.height).forEach((g) => {
                g.y = u.y + u.height, s(g);
              });
            };
            s(n);
          });
      }
      X(!1);
    }, Ot = (l) => {
      delete p.drag, gt = "", p = null, window.removeEventListener("mousemove", Dt), window.removeEventListener("mouseup", Ot), X();
    }, k = (l) => {
      switch (l) {
        case "top":
          return K + N - J;
        case "left":
          return q + A - Q;
        case "right":
          return (nt > 0 ? nt : V) - q;
        case "bottom":
          return st > 0 ? st - K : 999999999;
      }
    }, X = (l = !0) => {
      l === !0 && Gt();
      const r = a.value.map((t) => t.y + t.height);
      r.length > 0 ? tt.value = Math.max(...r) : tt.value = 0;
    };
    zt(
      () => v.ySpace,
      () => {
        v.ySpace >= 0 && Gt();
      }
    );
    const Gt = () => {
      a.value.sort((l, r) => {
        const t = l.y, i = r.y;
        return t - i;
      });
      for (let l = 0; l < a.value.length; l++) {
        if (l === 0 && a.value[l].y > 0) {
          const r = a.value[l].y;
          for (let t = l; t < a.value.length; t++)
            a.value[t].y -= r;
        }
        if (l < a.value.length - 1 && a.value[l + 1].y > a.value[l].y + a.value[l].height) {
          const r = W(a.value.slice(0, l + 1));
          if (a.value[l + 1].y > Math.max(...r.map((t) => t.y + t.height))) {
            const t = a.value[l + 1].y - Math.max(...r.map((i) => i.y + i.height));
            for (let i = l + 1; i < a.value.length; i++)
              a.value[i].y -= t;
          }
        }
      }
      for (let l = 0; l < a.value.length - 1; l++) {
        let r = a.value.findIndex((t) => t.y === a.value[l].y + a.value[l].height);
        if (r !== -1)
          for (let t = r; t < a.value.length; t++)
            a.value[t].y += v.ySpace;
      }
    };
    Zt(() => {
      Ht.observe(b.value);
    });
    const Ht = new ResizeObserver((l) => {
      At(V === l[0].contentRect.width ? null : l[0].contentRect.width, vt === l[0].contentRect.height ? null : l[0].contentRect.height);
    });
    let pt = !1;
    const Bt = (l = [], r = null) => {
      a.value = W(l), a.value.filter((t) => t.isGroup === !0).forEach((t) => {
        if (t.isGroup === !0)
          if (t.groupData.length < 2)
            lt(t.id);
          else {
            const i = ut(t.groupData, t);
            ht(i);
          }
      }), r !== null ? Rt(() => {
        const i = b.value.getBoundingClientRect().width / r, e = getComputedStyle(b.value), f = parseInt(e.getPropertyValue("--com-item-border-width").trim()), c = parseInt(e.getPropertyValue("--group-tit-height").trim());
        a.value.forEach((w) => {
          if (w.width *= i, w.height *= i, w.x *= i, w.y *= i, w.isGroup === !0) {
            const y = w.width - 2 * f, d = w.height - 2 * f - (w.groupTit ? c : 0);
            w.groupData.forEach((h) => {
              h.width = y * h.groupW, h.x = y * h.groupX, h.height = d * h.groupH, h.y = d * h.groupY;
            });
          }
        }), X();
      }) : X(), pt = !0, setTimeout(() => {
        pt = !1;
      }, 500);
    }, Wt = (l, r, t) => {
      const i = r.map((c) => c.y), e = Math.max(...i), f = r.filter((c) => c.y + c.height > e);
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
      const i = W(l), e = a.value.filter((f) => f.id === r);
      if (i.id || (i.id = (/* @__PURE__ */ new Date()).getTime() + ""), r && e.length !== 1) {
        try {
        } catch {
        }
        return;
      }
      if (t !== !0)
        if (delete i.x, delete i.y, r) {
          const f = getComputedStyle(b.value), c = parseInt(f.getPropertyValue("--com-item-border-width").trim());
          Wt(i, e[0].groupData, e[0].width - 2 * c);
        } else
          a.value.length === 0 ? (i.x = 0, i.y = 0) : Wt(i, a.value, V);
      if (r) {
        e[0].groupData.push(i);
        const f = ut(e[0].groupData, e[0]);
        ht(f);
      } else
        a.value.push(i);
      X();
    }, Z = (l, r = null) => {
      let t = -1;
      const i = a.value.filter((e) => e.id === r);
      if (r ? i.length === 1 && (t = i[0].groupData.findIndex((e) => e.id === l)) : t = a.value.findIndex((e) => e.id === l), t !== -1) {
        if (r)
          if (i[0].groupData.splice(t, 1), i[0].groupData.length === 1)
            lt(r);
          else {
            const e = ut(i[0].groupData, i[0]);
            ht(e);
          }
        else
          a.value.splice(t, 1);
        X();
      } else
        try {
        } catch {
        }
    }, ht = (l) => {
      if (l.id) {
        const r = W(l);
        let t = -1;
        const i = a.value.filter((e) => e.id === r.inGroupId);
        if (r.inGroupId ? i.length === 1 && (t = i[0].groupData.findIndex((e) => e.id === r.id)) : t = a.value.findIndex((e) => e.id === r.id), t !== -1)
          r.inGroupId ? i[0].groupData[t] = r : a.value[t] = r, X();
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, At = (l, r) => {
      if (l !== null) {
        const t = V ? l / V : 1;
        V = l;
        const i = getComputedStyle(b.value), e = parseInt(i.getPropertyValue("--com-item-border-width").trim()), f = parseInt(i.getPropertyValue("--group-tit-height").trim());
        pt || (a.value.forEach((c) => {
          if (c.width *= t, c.height *= t, c.x *= t, c.y *= t, c.isGroup === !0) {
            const w = c.width - 2 * e, y = c.height - 2 * e - (c.groupTit ? f : 0);
            c.groupData.forEach((d) => {
              d.width = w * d.groupW, d.x = w * d.groupX, d.height = y * d.groupH, d.y = y * d.groupY;
            });
          }
        }), X());
      }
      r !== null && (vt = r);
    }, It = (l) => {
      l.showPop || (a.value.forEach((r) => {
        delete r.showPop, r.groupData && r.groupData.forEach((t) => {
          delete t.showPop;
        });
      }), l.showPop = !0, window.addEventListener("click", et));
    }, et = () => {
      a.value.forEach((l) => {
        delete l.showPop, l.groupData && l.groupData.forEach((r) => {
          delete r.showPop;
        });
      }), window.removeEventListener("click", et);
    }, S = F(!1), Ct = (l) => {
      const r = a.value.findIndex((t) => t.id === l);
      if (r !== -1)
        a.value[r].checked = !0, a.value[r].disabled = !0, S.value = !0, U("showGroup", S.value);
      else
        try {
        } catch {
        }
    }, Pt = () => {
      S.value = !1, a.value.forEach((l) => {
        delete l.checked, delete l.disabled, l.groupData && l.groupData.forEach((r) => {
          delete r.checked, delete r.disabled;
        });
      }), U("showGroup", S.value);
    }, Nt = (l) => {
      l.checked = !l.checked, U("updateChecked", a.value.filter((r) => r.checked).length);
    }, ut = (l, r) => {
      const t = W(l), i = W(r);
      t.sort((h, o) => {
        const n = h.x, s = o.x;
        return n - s;
      });
      for (let h = 0; h < t.length - 1; h++) {
        if (h === 0 && t[h].x > 0) {
          const o = t[h].x;
          for (let n = h; n < t.length; n++)
            t[n].x -= o;
        }
        if (t[h + 1].x > t[h].x + t[h].width) {
          const o = W(t.slice(0, h + 1));
          if (t[h + 1].x > Math.max(...o.map((n) => n.x + n.width))) {
            const n = t[h + 1].x - Math.max(...o.map((s) => s.x + s.width));
            for (let s = h + 1; s < t.length; s++)
              t[s].x -= n;
          }
        }
      }
      t.sort((h, o) => {
        const n = h.y, s = o.y;
        return n - s;
      });
      for (let h = 0; h < t.length - 1; h++) {
        if (h === 0 && t[h].y > 0) {
          const o = t[h].y;
          for (let n = h; n < t.length; n++)
            t[n].y -= o;
        }
        if (t[h + 1].y > t[h].y + t[h].height) {
          const o = W(t.slice(0, h + 1));
          if (t[h + 1].y > Math.max(...o.map((n) => n.y + n.height))) {
            const n = t[h + 1].y - Math.max(...o.map((s) => s.y + s.height));
            for (let s = h + 1; s < t.length; s++)
              t[s].y -= n;
          }
        }
      }
      const e = t.map((h) => h.x + h.width), f = Math.max(...e), c = t.map((h) => h.y + h.height), w = Math.max(...c);
      t.forEach((h) => {
        h.inGroupId || (h.inGroupId = i.id), h.groupW = h.width / f, h.groupH = h.height / w, h.groupX = h.x / f, h.groupY = h.y / w, h.isObstacle = h.x + h.width === f && h.y === 0;
      });
      const y = getComputedStyle(b.value), d = parseInt(y.getPropertyValue("--com-item-border-width").trim());
      return i.width = f + 2 * d, i.height = w + 2 * d, i.groupData = [...t], i;
    }, Kt = () => {
      Rt(() => {
        const l = getComputedStyle(b.value), r = parseInt(l.getPropertyValue("--com-item-border-width").trim()), t = parseInt(l.getPropertyValue("--group-tit-height").trim());
        a.value.filter((i) => i.isGroup === !0).forEach((i) => {
          const e = i.width - 2 * r, f = i.height - 2 * r - (i.groupTit ? t : 0);
          i.groupData.forEach((c) => {
            c.width = e * c.groupW, c.x = e * c.groupX, c.height = f * c.groupH, c.y = f * c.groupY;
          });
        });
      });
    }, qt = () => {
      const l = a.value.filter((r) => r.checked);
      if (l.length > 1) {
        const r = {
          id: (/* @__PURE__ */ new Date()).getTime() + "G",
          isGroup: !0,
          groupTit: ""
        }, t = ut(l, r);
        t.groupData.forEach((i) => {
          Z(i.id);
        }), at(t), X();
      }
      Pt();
    }, Tt = (l, r) => {
      const t = a.value.filter((i) => i.id === r)[0];
      if (t) {
        const i = t.groupData.filter((e) => e.id === l)[0];
        if (i)
          t.groupData.length === 2 ? lt(r) : (delete i.inGroupId, delete i.groupW, delete i.groupH, delete i.groupX, delete i.groupY, delete i.isObstacle, Z(i.id, t.id), at(i), X());
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, lt = (l) => {
      const r = a.value.filter((t) => t.id === l)[0];
      if (r)
        Z(r.id), r.groupData.forEach((t) => {
          delete t.inGroupId, delete t.groupW, delete t.groupH, delete r.groupX, delete r.groupY, delete r.isObstacle, t.x += r.x, t.y += r.y, at(t, null, !0);
        }), X();
      else
        try {
        } catch {
        }
    }, Ft = (l = "", r) => {
      const t = a.value.filter((i) => i.id === r)[0];
      if (t) {
        if (!t.groupTit || !l) {
          const e = getComputedStyle(b.value), f = parseInt(e.getPropertyValue("--group-tit-height").trim());
          t.groupTit && !l && (t.height -= f), !t.groupTit && l && (t.height += f);
        }
        t.groupTit = l;
        const i = (e) => {
          a.value.filter((c) => c.id !== e.id).filter((c) => c.x < e.x && c.x + c.width > e.x || c.x === e.x || c.x > e.x && c.x < e.x + e.width).filter((c) => c.y < e.y && c.y + c.height > e.y || c.y === e.y || c.y > e.y && c.y < e.y + e.height).forEach((c) => {
            c.y = e.y + e.height, i(c);
          });
        };
        i(t), X();
      } else
        try {
        } catch {
        }
    }, Ut = () => {
      const l = W(a.value);
      return l.forEach((r) => {
        delete r.showPop, r.groupData && r.groupData.forEach((t) => {
          delete t.showPop;
        });
      }), { data: l, width: V };
    };
    return mt(() => {
      Ht.unobserve(b.value), window.removeEventListener("click", et);
    }), L({ init: Bt, addItem: at, deleteItem: Z, updateItem: ht, openGroup: Ct, closeGroup: Pt, changeGroupBorder: Kt, addGroup: qt, removeGroupItem: Tt, removeGroup: lt, changeGroupTit: Ft, getData: Ut }), (l, r) => (E(), G("div", {
      class: "vue-drag-component-plus",
      ref_key: "pageRef",
      ref: b
    }, [
      z("div", {
        class: "content-box",
        ref_key: "boxRef",
        ref: Lt
      }, [
        (E(!0), G(dt, null, bt(O(a), (t, i) => (E(), G("div", {
          class: rt(["com-item", M.seeModel || O(S) || t.static === !0 || t.dragable === !1 ? "" : "can-drag", t.move ? "is-move" : "", t.drag ? "is-drag" : "", t.showPop ? "on-top" : "", M.seeModel ? "no-hover" : ""]),
          style: m({
            width: t.width + "px",
            height: t.height + "px",
            top: t.y + "px",
            left: t.x + "px"
          }),
          key: i,
          onMousedown: Y((e) => M.seeModel || O(S) || t.static === !0 || t.dragable === !1 ? null : _t(e, i), ["prevent"])
        }, [
          z("div", ee, [
            t.isGroup ? (E(), G(dt, { key: 0 }, [
              t.groupTit ? (E(), G("div", {
                key: 0,
                class: "group-item-tit",
                title: t.groupTit
              }, R(t.groupTit), 9, le)) : P("", !0),
              z("div", {
                class: rt(["group-item-content", t.groupTit ? "" : "full"])
              }, [
                (E(!0), G(dt, null, bt(t.groupData, (e, f) => (E(), G("div", {
                  class: rt(["com-item-content-child", e.isObstacle ? "else" : ""]),
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
                  !M.seeModel && !O(S) && O(D) === null && O(p) === null ? (E(), G("div", {
                    key: 0,
                    class: "setting-box",
                    style: m({ display: e.showPop ? "flex" : "none" }),
                    onMousedown: Y((c) => null, ["prevent", "stop"])
                  }, [
                    St($t, {
                      iconObj: M.settingIcon,
                      onClick: Y((c) => It(e), ["prevent", "stop"])
                    }, null, 8, ["iconObj", "onClick"])
                  ], 36)) : P("", !0),
                  e.showPop ? (E(), G("div", {
                    key: 1,
                    class: "setting-box-pop",
                    onMousedown: Y((c) => null, ["prevent", "stop"])
                  }, [
                    j(l.$slots, "setPopNormal", {
                      data: W(e)
                    }, () => [
                      z("div", {
                        class: "setting-box-pop-item",
                        onClick: (c) => Tt(e.id, e.inGroupId)
                      }, "移出组合", 8, re),
                      z("div", {
                        class: "setting-box-pop-item",
                        onClick: (c) => Z(e.id, e.inGroupId)
                      }, "删除", 8, ie)
                    ])
                  ], 32)) : P("", !0)
                ], 6))), 128))
              ], 2)
            ], 64)) : j(l.$slots, "item", {
              key: 1,
              data: t
            }, () => [
              z("p", null, R(Math.round(t.width * 100) / 100) + "," + R(Math.round(t.height * 100) / 100), 1),
              z("p", null, R(Math.round(t.x * 100) / 100) + "," + R(Math.round(t.y * 100) / 100), 1)
            ]),
            !t.isGroup && t.notGroup !== !0 && O(S) ? (E(), G("div", {
              key: 2,
              class: rt(["group-checkbox", t.checked ? "is-checked" : "", t.disabled ? "disabled" : ""]),
              onClick: (e) => t.disabled ? null : Nt(t)
            }, null, 10, oe)) : P("", !0),
            !M.seeModel && !O(S) && O(D) === null && O(p) === null ? (E(), G("div", {
              key: 3,
              class: "setting-box",
              style: m({ display: t.showPop ? "flex" : "none" }),
              onMousedown: Y((e) => null, ["prevent", "stop"])
            }, [
              St($t, {
                iconObj: M.settingIcon,
                onClick: Y((e) => It(t), ["prevent", "stop"])
              }, null, 8, ["iconObj", "onClick"])
            ], 36)) : P("", !0),
            t.showPop ? (E(), G("div", {
              key: 4,
              class: rt(["setting-box-pop", t.isGroup === !0 ? "special" : ""]),
              onMousedown: Y((e) => null, ["prevent", "stop"])
            }, [
              t.isGroup === !0 ? j(l.$slots, "setPopSpecial", {
                key: 0,
                data: W(t)
              }, () => [
                M.hideTit ? P("", !0) : (E(), G("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (e) => U("showTitPop", t.groupTit, t.id)
                }, " 设置组合标题", 8, se)),
                z("div", {
                  class: "setting-box-pop-item",
                  onClick: (e) => lt(t.id)
                }, "解除组合", 8, ne)
              ]) : j(l.$slots, "setPopNormal", {
                key: 1,
                data: W(t)
              }, () => [
                t.notGroup !== !0 ? (E(), G("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (e) => Ct(t.id)
                }, "组合", 8, ae)) : P("", !0),
                z("div", {
                  class: "setting-box-pop-item",
                  onClick: (e) => Z(t.id)
                }, "删除", 8, he)
              ])
            ], 34)) : P("", !0)
          ]),
          !M.seeModel && !O(S) && !t.move && t.static !== !0 && t.resizable !== !1 ? (E(), G(dt, { key: 0 }, [
            O($).indexOf("topLeft") !== -1 ? (E(), G("div", {
              key: 0,
              class: "resize-line top-left",
              onMousedown: Y((e) => B(e, t, "top-left"), ["prevent", "stop"])
            }, null, 40, ue)) : P("", !0),
            O($).indexOf("top") !== -1 ? (E(), G("div", {
              key: 1,
              class: "resize-line top",
              onMousedown: Y((e) => B(e, t, "top"), ["prevent", "stop"])
            }, null, 40, ce)) : P("", !0),
            O($).indexOf("topRight") !== -1 ? (E(), G("div", {
              key: 2,
              class: "resize-line top-right",
              onMousedown: Y((e) => B(e, t, "top-right"), ["prevent", "stop"])
            }, null, 40, de)) : P("", !0),
            O($).indexOf("left") !== -1 ? (E(), G("div", {
              key: 3,
              class: "resize-line left",
              onMousedown: Y((e) => B(e, t, "left"), ["prevent", "stop"])
            }, null, 40, ge)) : P("", !0),
            O($).indexOf("right") !== -1 ? (E(), G("div", {
              key: 4,
              class: "resize-line right",
              onMousedown: Y((e) => B(e, t, "right"), ["prevent", "stop"])
            }, null, 40, pe)) : P("", !0),
            O($).indexOf("bottomLeft") !== -1 ? (E(), G("div", {
              key: 5,
              class: "resize-line bottom-left",
              onMousedown: Y((e) => B(e, t, "bottom-left"), ["prevent", "stop"])
            }, null, 40, ye)) : P("", !0),
            O($).indexOf("bottom") !== -1 ? (E(), G("div", {
              key: 6,
              class: "resize-line bottom",
              onMousedown: Y((e) => B(e, t, "bottom"), ["prevent", "stop"])
            }, null, 40, fe)) : P("", !0),
            O($).indexOf("bottomRight") !== -1 ? (E(), G("div", {
              key: 7,
              class: "resize-line bottom-right",
              onMousedown: Y((e) => B(e, t, "bottom-right"), ["prevent", "stop"])
            }, null, 40, xe)) : P("", !0)
          ], 64)) : P("", !0)
        ], 46, te))), 128)),
        O(D) !== null ? (E(), G("div", {
          key: 0,
          class: "drag-bg",
          style: m({
            width: O(I).width + "px",
            height: O(I).height + "px",
            top: O(I).y + "px",
            left: O(I).x + "px"
          })
        }, null, 4)) : P("", !0),
        z("div", {
          class: "height-bg",
          style: m({ height: (O(tt) > 0 ? +(O(tt) + (M.seeModel ? M.seeModelMinBg : 220)) : O(tt)) + "px" })
        }, null, 4),
        O(a).length === 0 ? (E(), G("div", ve, [
          j(l.$slots, "empty", {}, () => [
            jt(" 暂无数据 ")
          ])
        ])) : P("", !0)
      ], 512)
    ], 512));
  }
}, Me = [we], ke = {
  install(M) {
    Me.forEach((L) => {
      M.component("vueDragComponentPlus", L);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(ke);
export {
  ke as default
};
