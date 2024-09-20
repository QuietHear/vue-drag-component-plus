import { resolveComponent as Jt, openBlock as k, createBlock as yt, resolveDynamicComponent as Yt, normalizeProps as Xt, mergeProps as ct, withCtx as Qt, createElementBlock as G, toDisplayString as R, watch as bt, ref as F, onMounted as Zt, onBeforeUnmount as mt, createElementVNode as b, Fragment as dt, renderList as zt, unref as O, normalizeClass as it, normalizeStyle as m, withModifiers as Y, createCommentVNode as P, renderSlot as j, createVNode as St, createTextVNode as jt, nextTick as Rt } from "vue";
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
      return M.iconObj.type === "custom" ? (k(), yt(Yt(M.iconObj.icon), Xt(ct({ key: 0 }, M.iconObj.attrs)), null, 16)) : M.iconObj.type === "el" ? (k(), yt(U, Xt(ct({ key: 1 }, M.iconObj.attrs)), {
        default: Qt(() => [
          (k(), yt(Yt(M.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : M.iconObj.type === "iconfont" ? (k(), G("i", ct({
        key: 2,
        class: ["icon iconfont", "icon-" + M.iconObj.icon]
      }, M.iconObj.attrs), null, 16)) : (k(), G("i", ct({
        key: 3,
        class: M.iconObj.type
      }, M.iconObj.attrs), R(M.iconObj.icon), 17));
    };
  }
};
const te = ["onMousedown"], ee = { class: "com-item-box" }, le = ["title"], ie = { class: "com-item-box-content" }, re = ["onClick"], oe = ["onClick"], se = {
  key: 1,
  class: "com-item-box-content"
}, ne = ["onClick"], he = ["onClick"], ae = ["onClick"], ue = ["onClick"], ce = ["onClick"], de = ["onMousedown"], ge = ["onMousedown"], pe = ["onMousedown"], ye = ["onMousedown"], fe = ["onMousedown"], xe = ["onMousedown"], ve = ["onMousedown"], we = ["onMousedown"], Me = {
  key: 1,
  class: "com-empty"
}, ke = {
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
      let i = l instanceof Array ? [] : {};
      for (let t in l)
        i[t] = typeof l[t] == "object" ? W(l[t]) : l[t];
      return i;
    }, xt = () => {
      v.insertResizeKeys.forEach((l) => {
        v.excludeResizeKeys.indexOf(l) === -1 && $.value.push(l);
      });
    };
    bt(
      () => [v.insertResizeKeys, v.excludeResizeKeys],
      () => {
        xt();
      }
    );
    const $ = F([]);
    xt();
    const z = F(null);
    let _ = null, vt = null;
    const Lt = F(null), tt = F(0), d = F([]), _t = (l, i) => {
      let t = l.matches || l.webkitMatchesSelector || l.mozMatchesSelector || l.msMatchesSelector;
      for (; l && !t.call(l, i); )
        l = l.parentElement;
      return l;
    };
    let D = null, wt = null, Mt = null;
    const I = F({}), Vt = (l, i) => {
      et(), D = i, I.value = W(d.value[D]), d.value[D].move = !0;
      const t = _t(l.target, ".com-item");
      wt = l.clientX - t.offsetLeft, Mt = l.clientY - t.offsetTop, window.addEventListener("mousemove", kt), window.addEventListener("mouseup", Et);
    }, kt = (l) => {
      const i = l.clientX - wt, t = l.clientY - Mt, r = i <= V("left") ? V("left") : i >= V("right") ? V("right") : i, e = t <= V("top") ? V("top") : t >= V("bottom") ? V("bottom") : t, f = r - d.value[D].x, u = e - d.value[D].y, w = `${f > 0 ? "right" : f < 0 ? "left" : ""}_${u > 0 ? "bottom" : u < 0 ? "top" : ""}`;
      d.value[D].x = r, d.value[D].y = e;
      let y = W(d.value.filter((c) => c.move !== !0).filter((c) => c.x < r && c.x + c.width > r || c.x === r || c.x > r && c.x < r + d.value[D].width).filter((c) => c.y < e && c.y + c.height > e || c.y === e || c.y > e && c.y < e + d.value[D].height));
      if (y.length === 0)
        I.value.x = r, I.value.y = e;
      else {
        if (w.indexOf("top") !== -1) {
          y = y.filter((a) => a.y < I.value.y);
          const c = Math.min(...y.map((a) => a.y + a.height));
          y.forEach((a) => {
            Math.abs(a.y + a.height - c) < 5 && (a.y = c - a.height);
          });
          let h = I.value.y - e, o = !0, n = [...y];
          const s = (a) => {
            W(d.value.filter((g) => g.move !== !0 && g.y + g.height - a.y <= h + 3 && g.y + g.height - a.y >= 0).filter((g) => g.x < a.x && g.x + g.width > a.x || g.x >= a.x && g.x < a.x + a.width)).forEach((g) => {
              g.y + g.height !== a.y && (g.y = a.y - g.height), n.findIndex((H) => H.id === g.id) === -1 && (n.push(g), s(g));
            });
          };
          if (y.forEach((a) => {
            s(a);
          }), n.sort((a, x) => {
            const g = a.y, H = x.y;
            return g - H;
          }), (n.length === 0 || n.filter((a) => a.y === 0).length > 0) && (o = !1), o) {
            let a = 0;
            n.filter((g) => g.y === n[0].y).forEach((g) => {
              W(d.value.filter((T) => T.move !== !0 && T.y + T.height < g.y).filter((T) => T.x < g.x && T.x + T.width > g.x || T.x >= g.x && T.x < g.x + g.width)).forEach((T) => {
                T.y + T.height > a && (a = T.y + T.height);
              });
            }), a = n[0].y - a, a < h && (h = a), n.forEach((g) => {
              g.y -= h, d.value.filter((H) => H.id === g.id)[0].y = g.y;
            }), I.value.x = r, I.value.y = d.value.filter((g) => g.id === n[n.length - 1].id)[0].y + d.value.filter((g) => g.id === n[n.length - 1].id)[0].height;
          } else {
            const a = Math.min(...y.map((x) => x.y));
            a - e >= -7 && a - e < 7 && (y.filter((x) => x.y < I.value.y).forEach((x) => {
              x.y += d.value[D].height, d.value.filter((H) => H.id === x.id)[0].y = x.y;
              const g = (H) => {
                d.value.filter((C) => C.move !== !0 && C.id !== H.id).filter((C) => C.x < H.x && C.x + C.width > H.x || C.x === H.x || C.x > H.x && C.x < H.x + H.width).filter((C) => C.y < H.y && C.y + C.height > H.y || C.y === H.y || C.y > H.y && C.y < H.y + H.height).forEach((C) => {
                  C.y = H.y + H.height, g(C);
                });
              };
              g(x);
            }), I.value.x = r, I.value.y = a);
          }
          y = W(d.value.filter((a) => a.move !== !0).filter((a) => a.x < r && a.x + a.width > r || a.x === r || a.x > r && a.x < r + d.value[D].width).filter((a) => a.y < e && a.y + a.height > e || a.y === e || a.y > e && a.y < e + d.value[D].height));
        }
        if (w.indexOf("bottom") !== -1) {
          const c = Math.max(...y.map((h) => h.y + h.height));
          if (c - (e + d.value[D].height) >= -7 && c - (e + d.value[D].height) < 7) {
            let h = !0;
            y.filter((o) => o.y > I.value.y).forEach((o) => {
              o.y -= d.value[D].height, d.value.filter((s) => s.id === o.id)[0].y = o.y;
              const n = d.value.filter((s) => s.move !== !0 && s.id !== o.id).filter((s) => s.x < o.x && s.x + s.width > o.x || s.x === o.x || s.x > o.x && s.x < o.x + o.width).filter((s) => s.y < o.y && s.y + s.height > o.y || s.y === o.y || s.y > o.y && s.y < o.y + o.height);
              if (n.length > 0) {
                o.y = Math.max(...n.map((a) => a.y + a.height)), d.value.filter((a) => a.id === o.id)[0].y = o.y;
                const s = (a) => {
                  d.value.filter((g) => g.id !== a.id).filter((g) => g.x < a.x && g.x + g.width > a.x || g.x === a.x || g.x > a.x && g.x < a.x + a.width).filter((g) => g.y < a.y && g.y + g.height > a.y || g.y === a.y || g.y > a.y && g.y < a.y + a.height).forEach((g) => {
                    g.y = a.y + a.height, g.move === !0 && (I.value.y = g.y, h = !1), s(g);
                  });
                };
                s(o);
              }
            }), I.value.x = r, h && (I.value.y = c - d.value[D].height), y = W(d.value.filter((o) => o.move !== !0).filter((o) => o.x < r && o.x + o.width > r || o.x === r || o.x > r && o.x < r + d.value[D].width).filter((o) => o.y < e && o.y + o.height > e || o.y === e || o.y > e && o.y < e + d.value[D].height));
          }
        }
        if (((w.indexOf("top") !== -1 || w.indexOf("bottom") !== -1) && (w.indexOf("right") !== -1 || w.indexOf("left") !== -1) && Math.abs(f) > 8 || w.indexOf("top") === -1 && w.indexOf("bottom") === -1 && (w.indexOf("right") !== -1 || w.indexOf("left") !== -1)) && y.length > 0) {
          y.sort((h, o) => {
            const n = h.y, s = o.y;
            return n - s;
          });
          let c = !0;
          for (let h = 0; h < y.length; h++) {
            if (c) {
              const o = W(d.value);
              for (let n = 0; n <= h; n++) {
                let s = null;
                const a = o.filter((x) => x.move !== !0 && x.y < y[n].y).filter((x) => x.x < y[n].x && x.x + x.width > y[n].x || x.x === y[n].x || x.x > y[n].x && x.x < y[n].x + y[n].width);
                if (a.length === 0 ? s = 0 : s = Math.max(...a.map((x) => x.y + x.height)), n === h) {
                  if (y[n].y - (y[n].y + y[n].height - e) < s) {
                    c = !1;
                    break;
                  }
                } else if (y[n].y - y[h].height < s) {
                  c = !1;
                  break;
                } else
                  o.filter((x) => x.id === y[n].id)[0].y -= y[h].height;
              }
            }
            if (c) {
              y[h].y -= y[h].y + y[h].height - e, d.value.filter((o) => o.id === y[h].id)[0].y = y[h].y;
              for (let o = h; o > 0; o--)
                y[h - 1].y -= y[h].height, d.value.filter((n) => n.id === y[h - 1].id)[0].y = y[h - 1].y;
            } else
              y.filter((o) => o.id === y[h].id).forEach((o) => {
                o.y += d.value[D].y + d.value[D].height - o.y, d.value.filter((s) => s.id === o.id)[0].y = o.y;
                const n = (s) => {
                  d.value.filter((x) => x.move !== !0 && x.id !== s.id).filter((x) => x.x < s.x && x.x + x.width > s.x || x.x === s.x || x.x > s.x && x.x < s.x + s.width).filter((x) => x.y < s.y && x.y + x.height > s.y || x.y === s.y || x.y > s.y && x.y < s.y + s.height).forEach((x) => {
                    x.y = s.y + s.height, n(x);
                  });
                };
                n(o);
              });
          }
          I.value.x = r;
        }
      }
      X(!1);
    }, Et = () => {
      window.removeEventListener("mousemove", kt), window.removeEventListener("mouseup", Et), delete d.value[D].move, d.value[D].x = I.value.x, d.value[D].y = I.value.y, D = null, X();
    }, V = (l) => {
      switch (l) {
        case "top":
          return 0;
        case "right":
          return _ - d.value[D].width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let p = null, gt = "", rt = 0, ot = 0, A = 0, N = 0, K = 0, q = 0, J = 0, st = 0, Q = 0, nt = 0;
    const B = (l, i, t) => {
      et(), p = i, gt = t, rt = l.clientX, ot = l.clientY, A = i.width, N = i.height, K = i.y, q = i.x, p.drag = !0;
      const r = d.value.filter((c) => c.static === !0 && (c.x < i.x ? c.x + c.width >= i.x : c.x <= i.x + i.width)), e = d.value.filter((c) => c.static === !0 && (c.y < i.y ? c.y + c.height >= i.y : c.y <= i.y + i.height)), f = r.filter((c) => c.y + c.height <= i.y).map((c) => c.y + c.height);
      f.length > 0 ? J = Math.max(...f) : J = 0;
      const u = r.filter((c) => c.y >= i.y + i.height).map((c) => c.y);
      u.length > 0 ? st = Math.min(...u) : st = 0;
      const w = e.filter((c) => c.x + c.width <= i.x).map((c) => c.x + c.width);
      w.length > 0 ? Q = Math.max(...w) : Q = 0;
      const y = e.filter((c) => c.x >= i.x + i.width).map((c) => c.x);
      y.length > 0 ? nt = Math.min(...y) : nt = 0, window.addEventListener("mousemove", Dt), window.addEventListener("mouseup", Ot);
    }, Dt = (l) => {
      const i = A + (l.clientX - rt), t = N + (l.clientY - ot), r = A - (l.clientX - rt), e = N - (l.clientY - ot), f = K + (l.clientY - ot), u = q + (l.clientX - rt), w = getComputedStyle(z.value), y = parseInt(w.getPropertyValue("--com-item-border-width").trim()), c = parseInt(w.getPropertyValue("--group-tit-height").trim());
      switch (gt) {
        case "top-left":
          if (p.height = e < v.itemMinHeight ? v.itemMinHeight : e > E("top") ? E("top") : e, p.y = e < v.itemMinHeight ? K + N - v.itemMinHeight : e > E("top") ? J : f, p.width = r < v.itemMinWidth ? v.itemMinWidth : r > E("left") ? E("left") : r, p.x = r < v.itemMinWidth ? q + A - v.itemMinWidth : r > E("left") ? Q : u, p.isGroup === !0) {
            const o = p.width - 2 * y, n = p.height - 2 * y - (p.groupTit ? c : 0);
            p.groupData.forEach((s) => {
              s.width = o * s.groupW, s.x = o * s.groupX, s.height = n * s.groupH, s.y = n * s.groupY;
            });
          }
          break;
        case "top":
          if (p.height = e < v.itemMinHeight ? v.itemMinHeight : e > E("top") ? E("top") : e, p.y = e < v.itemMinHeight ? K + N - v.itemMinHeight : e > E("top") ? J : f, p.isGroup === !0) {
            const o = p.height - 2 * y - (p.groupTit ? c : 0);
            p.groupData.forEach((n) => {
              n.height = o * n.groupH, n.y = o * n.groupY;
            });
          }
          break;
        case "top-right":
          if (p.height = e < v.itemMinHeight ? v.itemMinHeight : e > E("top") ? E("top") : e, p.y = e < v.itemMinHeight ? K + N - v.itemMinHeight : e > E("top") ? J : f, p.width = i < v.itemMinWidth ? v.itemMinWidth : i > E("right") ? E("right") : i, p.isGroup === !0) {
            const o = p.width - 2 * y, n = p.height - 2 * y - (p.groupTit ? c : 0);
            p.groupData.forEach((s) => {
              s.width = o * s.groupW, s.x = o * s.groupX, s.height = n * s.groupH, s.y = n * s.groupY;
            });
          }
          break;
        case "left":
          if (p.width = r < v.itemMinWidth ? v.itemMinWidth : r > E("left") ? E("left") : r, p.x = r < v.itemMinWidth ? q + A - v.itemMinWidth : r > E("left") ? Q : u, p.isGroup === !0) {
            const o = p.width - 2 * y;
            p.groupData.forEach((n) => {
              n.width = o * n.groupW, n.x = o * n.groupX;
            });
          }
          break;
        case "right":
          if (p.width = i < v.itemMinWidth ? v.itemMinWidth : i > E("right") ? E("right") : i, p.isGroup === !0) {
            const o = p.width - 2 * y;
            p.groupData.forEach((n) => {
              n.width = o * n.groupW, n.x = o * n.groupX;
            });
          }
          break;
        case "bottom-left":
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > E("bottom") ? E("bottom") : t, p.width = r < v.itemMinWidth ? v.itemMinWidth : r > E("left") ? E("left") : r, p.x = r < v.itemMinWidth ? q + A - v.itemMinWidth : r > E("left") ? Q : u, p.isGroup === !0) {
            const o = p.width - 2 * y, n = p.height - 2 * y - (p.groupTit ? c : 0);
            p.groupData.forEach((s) => {
              s.width = o * s.groupW, s.x = o * s.groupX, s.height = n * s.groupH, s.y = n * s.groupY;
            });
          }
          break;
        case "bottom":
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > E("bottom") ? E("bottom") : t, p.isGroup === !0) {
            const o = p.height - 2 * y - (p.groupTit ? c : 0);
            p.groupData.forEach((n) => {
              n.height = o * n.groupH, n.y = o * n.groupY;
            });
          }
          break;
        case "bottom-right":
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > E("bottom") ? E("bottom") : t, p.width = i < v.itemMinWidth ? v.itemMinWidth : i > E("right") ? E("right") : i, p.isGroup === !0) {
            const o = p.width - 2 * y, n = p.height - 2 * y - (p.groupTit ? c : 0);
            p.groupData.forEach((s) => {
              s.width = o * s.groupW, s.x = o * s.groupX, s.height = n * s.groupH, s.y = n * s.groupY;
            });
          }
          break;
      }
      let h = W(d.value.filter((o) => o.drag !== !0).filter((o) => o.x < p.x && o.x + o.width > p.x || o.x === p.x || o.x > p.x && o.x < p.x + p.width).filter((o) => o.y < p.y && o.y + o.height > p.y || o.y === p.y || o.y > p.y && o.y < p.y + p.height));
      if (h.length > 0) {
        h.sort((o, n) => {
          const s = o.y, a = n.y;
          return s - a;
        });
        for (let o = 0; o < h.length; o++)
          h.filter((n) => n.id === h[o].id).forEach((n) => {
            n.y += p.y + p.height - n.y, d.value.filter((a) => a.id === n.id)[0].y = n.y;
            const s = (a) => {
              d.value.filter((g) => g.drag !== !0 && g.id !== a.id).filter((g) => g.x < a.x && g.x + g.width > a.x || g.x === a.x || g.x > a.x && g.x < a.x + a.width).filter((g) => g.y < a.y && g.y + g.height > a.y || g.y === a.y || g.y > a.y && g.y < a.y + a.height).forEach((g) => {
                g.y = a.y + a.height, s(g);
              });
            };
            s(n);
          });
      }
      X(!1);
    }, Ot = (l) => {
      delete p.drag, gt = "", p = null, window.removeEventListener("mousemove", Dt), window.removeEventListener("mouseup", Ot), X();
    }, E = (l) => {
      switch (l) {
        case "top":
          return K + N - J;
        case "left":
          return q + A - Q;
        case "right":
          return (nt > 0 ? nt : _) - q;
        case "bottom":
          return st > 0 ? st - K : 999999999;
      }
    }, X = (l = !0) => {
      l === !0 && Gt();
      const i = d.value.map((t) => t.y + t.height);
      i.length > 0 ? tt.value = Math.max(...i) : tt.value = 0;
    };
    bt(
      () => v.ySpace,
      () => {
        v.ySpace >= 0 && Gt();
      }
    );
    const Gt = () => {
      const l = W(d.value).sort((i, t) => {
        const r = i.y, e = t.y;
        return r - e;
      });
      for (let i = 0; i < l.length; i++) {
        if (i === 0 && l[i].y > 0) {
          const t = l[i].y;
          for (let r = i; r < l.length; r++)
            l[r].y -= t, d.value.filter((e) => e.id === l[r].id).y = l[r].y;
        }
        if (i < l.length - 1 && l[i + 1].y > l[i].y + l[i].height) {
          const t = W(l.slice(0, i + 1));
          if (l[i + 1].y > Math.max(...t.map((r) => r.y + r.height))) {
            const r = l[i + 1].y - Math.max(...t.map((e) => e.y + e.height));
            for (let e = i + 1; e < l.length; e++)
              l[e].y -= r, d.value.filter((f) => f.id === l[e].id).y = l[e].y;
          }
        }
      }
      for (let i = 0; i < l.length - 1; i++) {
        let t = l.findIndex((r) => r.y === l[i].y + l[i].height);
        if (t !== -1)
          for (let r = t; r < l.length; r++)
            l[r].y += v.ySpace, d.value.filter((e) => e.id === l[r].id).y = l[r].y;
      }
    };
    Zt(() => {
      Ht.observe(z.value);
    });
    const Ht = new ResizeObserver((l) => {
      At(_ === l[0].contentRect.width ? null : l[0].contentRect.width, vt === l[0].contentRect.height ? null : l[0].contentRect.height);
    });
    let pt = !1;
    const Bt = (l = [], i = null) => {
      d.value = W(l), d.value.filter((t) => t.isGroup === !0).forEach((t) => {
        if (t.isGroup === !0)
          if (t.groupData.length < 2)
            lt(t.id);
          else {
            const r = ut(t.groupData, t);
            at(r);
          }
      }), i !== null ? Rt(() => {
        const r = z.value.getBoundingClientRect().width / i, e = getComputedStyle(z.value), f = parseInt(e.getPropertyValue("--com-item-border-width").trim()), u = parseInt(e.getPropertyValue("--group-tit-height").trim());
        d.value.forEach((w) => {
          if (w.width *= r, w.height *= r, w.x *= r, w.y *= r, w.isGroup === !0) {
            const y = w.width - 2 * f, c = w.height - 2 * f - (w.groupTit ? u : 0);
            w.groupData.forEach((h) => {
              h.width = y * h.groupW, h.x = y * h.groupX, h.height = c * h.groupH, h.y = c * h.groupY;
            });
          }
        }), X();
      }) : X(), pt = !0, setTimeout(() => {
        pt = !1;
      }, 500);
    }, Wt = (l, i, t) => {
      const r = i.map((u) => u.y), e = Math.max(...r), f = i.filter((u) => u.y + u.height > e);
      f.sort((u, w) => {
        const y = u.x, c = w.x;
        return y - c;
      });
      for (let u = 0; u < f.length; u++) {
        if (u === 0 && f[u].x >= l.width) {
          l.y = e, l.x = 0;
          break;
        }
        if (f.length > 1 && u !== f.length - 1 && f[u].x + f[u].width + l.width <= f[u + 1].x) {
          l.y = e, l.x = f[u].x + f[u].width;
          break;
        }
        if (u === f.length - 1 && f[u].x + f[u].width + l.width <= t) {
          l.y = e, l.x = f[u].x + f[u].width;
          break;
        }
      }
      if (l.y == null) {
        l.x = 0;
        const u = i.map((w) => w.y + w.height);
        l.y = Math.max(...u);
      }
    }, ht = (l, i = null, t = !1) => {
      const r = W(l), e = d.value.filter((f) => f.id === i);
      if (r.id || (r.id = (/* @__PURE__ */ new Date()).getTime() + ""), i && e.length !== 1) {
        try {
        } catch {
        }
        return;
      }
      if (t !== !0)
        if (delete r.x, delete r.y, i) {
          const f = getComputedStyle(z.value), u = parseInt(f.getPropertyValue("--com-item-border-width").trim());
          Wt(r, e[0].groupData, e[0].width - 2 * u);
        } else
          d.value.length === 0 ? (r.x = 0, r.y = 0) : Wt(r, d.value, _);
      if (i) {
        e[0].groupData.push(r);
        const f = ut(e[0].groupData, e[0]);
        at(f);
      } else
        d.value.push(r);
      X();
    }, Z = (l, i = null) => {
      let t = -1;
      const r = d.value.filter((e) => e.id === i);
      if (i ? r.length === 1 && (t = r[0].groupData.findIndex((e) => e.id === l)) : t = d.value.findIndex((e) => e.id === l), t !== -1) {
        if (i)
          if (r[0].groupData.splice(t, 1), r[0].groupData.length === 1)
            lt(i);
          else {
            const e = ut(r[0].groupData, r[0]);
            at(e);
          }
        else
          d.value.splice(t, 1);
        X();
      } else
        try {
        } catch {
        }
    }, at = (l) => {
      if (l.id) {
        const i = W(l);
        let t = -1;
        const r = d.value.filter((e) => e.id === i.inGroupId);
        if (i.inGroupId ? r.length === 1 && (t = r[0].groupData.findIndex((e) => e.id === i.id)) : t = d.value.findIndex((e) => e.id === i.id), t !== -1)
          i.inGroupId ? r[0].groupData[t] = i : d.value[t] = i, X();
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, At = (l, i) => {
      if (l !== null) {
        const t = _ ? l / _ : 1;
        _ = l;
        const r = getComputedStyle(z.value), e = parseInt(r.getPropertyValue("--com-item-border-width").trim()), f = parseInt(r.getPropertyValue("--group-tit-height").trim());
        pt || (d.value.forEach((u) => {
          if (u.width *= t, u.height *= t, u.x *= t, u.y *= t, u.isGroup === !0) {
            const w = u.width - 2 * e, y = u.height - 2 * e - (u.groupTit ? f : 0);
            u.groupData.forEach((c) => {
              c.width = w * c.groupW, c.x = w * c.groupX, c.height = y * c.groupH, c.y = y * c.groupY;
            });
          }
        }), X());
      }
      i !== null && (vt = i);
    }, It = (l) => {
      l.showPop || (d.value.forEach((i) => {
        delete i.showPop, i.groupData && i.groupData.forEach((t) => {
          delete t.showPop;
        });
      }), l.showPop = !0, window.addEventListener("click", et));
    }, et = () => {
      d.value.forEach((l) => {
        delete l.showPop, l.groupData && l.groupData.forEach((i) => {
          delete i.showPop;
        });
      }), window.removeEventListener("click", et);
    }, S = F(!1), Ct = (l) => {
      const i = d.value.findIndex((t) => t.id === l);
      if (i !== -1)
        d.value[i].checked = !0, d.value[i].disabled = !0, S.value = !0, U("showGroup", S.value);
      else
        try {
        } catch {
        }
    }, Pt = () => {
      S.value = !1, d.value.forEach((l) => {
        delete l.checked, delete l.disabled, l.groupData && l.groupData.forEach((i) => {
          delete i.checked, delete i.disabled;
        });
      }), U("showGroup", S.value);
    }, Nt = (l) => {
      l.checked = !l.checked, U("updateChecked", d.value.filter((i) => i.checked).length);
    }, ut = (l, i) => {
      const t = W(l), r = W(i);
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
      const e = t.map((h) => h.x + h.width), f = Math.max(...e), u = t.map((h) => h.y + h.height), w = Math.max(...u);
      t.forEach((h) => {
        h.inGroupId || (h.inGroupId = r.id), h.groupW = h.width / f, h.groupH = h.height / w, h.groupX = h.x / f, h.groupY = h.y / w, h.isObstacle = h.x + h.width === f && h.y === 0;
      });
      const y = getComputedStyle(z.value), c = parseInt(y.getPropertyValue("--com-item-border-width").trim());
      return r.width = f + 2 * c, r.height = w + 2 * c, r.groupData = [...t], r;
    }, Kt = () => {
      Rt(() => {
        const l = getComputedStyle(z.value), i = parseInt(l.getPropertyValue("--com-item-border-width").trim()), t = parseInt(l.getPropertyValue("--group-tit-height").trim());
        d.value.filter((r) => r.isGroup === !0).forEach((r) => {
          const e = r.width - 2 * i, f = r.height - 2 * i - (r.groupTit ? t : 0);
          r.groupData.forEach((u) => {
            u.width = e * u.groupW, u.x = e * u.groupX, u.height = f * u.groupH, u.y = f * u.groupY;
          });
        });
      });
    }, qt = () => {
      const l = d.value.filter((i) => i.checked);
      if (l.length > 1) {
        const i = {
          id: (/* @__PURE__ */ new Date()).getTime() + "G",
          isGroup: !0,
          groupTit: ""
        }, t = ut(l, i);
        t.groupData.forEach((r) => {
          Z(r.id);
        }), ht(t), X();
      }
      Pt();
    }, Tt = (l, i) => {
      const t = d.value.filter((r) => r.id === i)[0];
      if (t) {
        const r = t.groupData.filter((e) => e.id === l)[0];
        if (r)
          t.groupData.length === 2 ? lt(i) : (delete r.inGroupId, delete r.groupW, delete r.groupH, delete r.groupX, delete r.groupY, delete r.isObstacle, Z(r.id, t.id), ht(r), X());
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, lt = (l) => {
      const i = d.value.filter((t) => t.id === l)[0];
      if (i)
        Z(i.id), i.groupData.forEach((t) => {
          delete t.inGroupId, delete t.groupW, delete t.groupH, delete i.groupX, delete i.groupY, delete i.isObstacle, t.x += i.x, t.y += i.y, ht(t, null, !0);
        }), X();
      else
        try {
        } catch {
        }
    }, Ft = (l = "", i) => {
      const t = d.value.filter((r) => r.id === i)[0];
      if (t) {
        if (!t.groupTit || !l) {
          const e = getComputedStyle(z.value), f = parseInt(e.getPropertyValue("--group-tit-height").trim());
          t.groupTit && !l && (t.height -= f), !t.groupTit && l && (t.height += f);
        }
        t.groupTit = l;
        const r = (e) => {
          d.value.filter((u) => u.id !== e.id).filter((u) => u.x < e.x && u.x + u.width > e.x || u.x === e.x || u.x > e.x && u.x < e.x + e.width).filter((u) => u.y < e.y && u.y + u.height > e.y || u.y === e.y || u.y > e.y && u.y < e.y + e.height).forEach((u) => {
            u.y = e.y + e.height, r(u);
          });
        };
        r(t), X();
      } else
        try {
        } catch {
        }
    }, Ut = () => {
      const l = W(d.value);
      return l.forEach((i) => {
        delete i.showPop, i.groupData && i.groupData.forEach((t) => {
          delete t.showPop;
        });
      }), { data: l, width: _ };
    };
    return mt(() => {
      Ht.unobserve(z.value), window.removeEventListener("click", et);
    }), L({ init: Bt, addItem: ht, deleteItem: Z, updateItem: at, openGroup: Ct, closeGroup: Pt, changeGroupBorder: Kt, addGroup: qt, removeGroupItem: Tt, removeGroup: lt, changeGroupTit: Ft, getData: Ut }), (l, i) => (k(), G("div", {
      class: "vue-drag-component-plus",
      ref_key: "pageRef",
      ref: z
    }, [
      b("div", {
        class: "content-box",
        ref_key: "boxRef",
        ref: Lt
      }, [
        (k(!0), G(dt, null, zt(O(d), (t, r) => (k(), G("div", {
          class: it(["com-item", M.seeModel || O(S) || t.static === !0 || t.dragable === !1 ? "" : "can-drag", t.move ? "is-move" : "", t.drag ? "is-drag" : "", t.showPop ? "on-top" : "", M.seeModel ? "no-hover" : ""]),
          style: m({
            width: t.width + "px",
            height: t.height + "px",
            top: t.y + "px",
            left: t.x + "px"
          }),
          key: r,
          onMousedown: Y((e) => M.seeModel || O(S) || t.static === !0 || t.dragable === !1 ? null : Vt(e, r), ["prevent"])
        }, [
          b("div", ee, [
            t.isGroup ? (k(), G(dt, { key: 0 }, [
              t.groupTit ? (k(), G("div", {
                key: 0,
                class: "group-item-tit",
                title: t.groupTit
              }, R(t.groupTit), 9, le)) : P("", !0),
              b("div", {
                class: it(["group-item-content", t.groupTit ? "" : "full"])
              }, [
                (k(!0), G(dt, null, zt(t.groupData, (e, f) => (k(), G("div", {
                  class: it(["com-item-box-child", e.isObstacle ? "else" : ""]),
                  style: m({
                    width: e.width + "px",
                    height: e.height + "px",
                    top: e.y + "px",
                    left: e.x + "px"
                  }),
                  key: f
                }, [
                  b("div", ie, [
                    j(l.$slots, "item", { data: e }, () => [
                      b("p", null, R(Math.round(e.width * 100) / 100) + "," + R(Math.round(e.height * 100) / 100), 1),
                      b("p", null, R(Math.round(e.x * 100) / 100) + "," + R(Math.round(e.y * 100) / 100), 1)
                    ])
                  ]),
                  !M.seeModel && !O(S) && O(D) === null && O(p) === null ? (k(), G("div", {
                    key: 0,
                    class: "setting-box",
                    style: m({ display: e.showPop ? "flex" : "none" }),
                    onMousedown: Y((u) => null, ["prevent", "stop"])
                  }, [
                    St($t, {
                      iconObj: M.settingIcon,
                      onClick: Y((u) => It(e), ["prevent", "stop"])
                    }, null, 8, ["iconObj", "onClick"])
                  ], 36)) : P("", !0),
                  e.showPop ? (k(), G("div", {
                    key: 1,
                    class: "setting-box-pop",
                    onMousedown: Y((u) => null, ["prevent", "stop"])
                  }, [
                    j(l.$slots, "setPopNormal", {
                      data: W(e)
                    }, () => [
                      b("div", {
                        class: "setting-box-pop-item",
                        onClick: (u) => Tt(e.id, e.inGroupId)
                      }, "移出组合", 8, re),
                      b("div", {
                        class: "setting-box-pop-item",
                        onClick: (u) => Z(e.id, e.inGroupId)
                      }, "删除", 8, oe)
                    ])
                  ], 32)) : P("", !0)
                ], 6))), 128))
              ], 2)
            ], 64)) : (k(), G("div", se, [
              j(l.$slots, "item", { data: t }, () => [
                b("p", null, R(Math.round(t.width * 100) / 100) + "," + R(Math.round(t.height * 100) / 100), 1),
                b("p", null, R(Math.round(t.x * 100) / 100) + "," + R(Math.round(t.y * 100) / 100), 1)
              ])
            ])),
            !t.isGroup && t.notGroup !== !0 && O(S) ? (k(), G("div", {
              key: 2,
              class: it(["group-checkbox", t.checked ? "is-checked" : "", t.disabled ? "disabled" : ""]),
              onClick: (e) => t.disabled ? null : Nt(t)
            }, null, 10, ne)) : P("", !0),
            !M.seeModel && !O(S) && O(D) === null && O(p) === null ? (k(), G("div", {
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
            t.showPop ? (k(), G("div", {
              key: 4,
              class: it(["setting-box-pop", t.isGroup === !0 ? "special" : ""]),
              onMousedown: Y((e) => null, ["prevent", "stop"])
            }, [
              t.isGroup === !0 ? j(l.$slots, "setPopSpecial", {
                key: 0,
                data: W(t)
              }, () => [
                M.hideTit ? P("", !0) : (k(), G("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (e) => U("showTitPop", t.groupTit, t.id)
                }, " 设置组合标题", 8, he)),
                b("div", {
                  class: "setting-box-pop-item",
                  onClick: (e) => lt(t.id)
                }, "解除组合", 8, ae)
              ]) : j(l.$slots, "setPopNormal", {
                key: 1,
                data: W(t)
              }, () => [
                t.notGroup !== !0 ? (k(), G("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (e) => Ct(t.id)
                }, "组合", 8, ue)) : P("", !0),
                b("div", {
                  class: "setting-box-pop-item",
                  onClick: (e) => Z(t.id)
                }, "删除", 8, ce)
              ])
            ], 34)) : P("", !0)
          ]),
          !M.seeModel && !O(S) && !t.move && t.static !== !0 && t.resizable !== !1 ? (k(), G(dt, { key: 0 }, [
            O($).indexOf("topLeft") !== -1 ? (k(), G("div", {
              key: 0,
              class: "resize-line top-left",
              onMousedown: Y((e) => B(e, t, "top-left"), ["prevent", "stop"])
            }, null, 40, de)) : P("", !0),
            O($).indexOf("top") !== -1 ? (k(), G("div", {
              key: 1,
              class: "resize-line top",
              onMousedown: Y((e) => B(e, t, "top"), ["prevent", "stop"])
            }, null, 40, ge)) : P("", !0),
            O($).indexOf("topRight") !== -1 ? (k(), G("div", {
              key: 2,
              class: "resize-line top-right",
              onMousedown: Y((e) => B(e, t, "top-right"), ["prevent", "stop"])
            }, null, 40, pe)) : P("", !0),
            O($).indexOf("left") !== -1 ? (k(), G("div", {
              key: 3,
              class: "resize-line left",
              onMousedown: Y((e) => B(e, t, "left"), ["prevent", "stop"])
            }, null, 40, ye)) : P("", !0),
            O($).indexOf("right") !== -1 ? (k(), G("div", {
              key: 4,
              class: "resize-line right",
              onMousedown: Y((e) => B(e, t, "right"), ["prevent", "stop"])
            }, null, 40, fe)) : P("", !0),
            O($).indexOf("bottomLeft") !== -1 ? (k(), G("div", {
              key: 5,
              class: "resize-line bottom-left",
              onMousedown: Y((e) => B(e, t, "bottom-left"), ["prevent", "stop"])
            }, null, 40, xe)) : P("", !0),
            O($).indexOf("bottom") !== -1 ? (k(), G("div", {
              key: 6,
              class: "resize-line bottom",
              onMousedown: Y((e) => B(e, t, "bottom"), ["prevent", "stop"])
            }, null, 40, ve)) : P("", !0),
            O($).indexOf("bottomRight") !== -1 ? (k(), G("div", {
              key: 7,
              class: "resize-line bottom-right",
              onMousedown: Y((e) => B(e, t, "bottom-right"), ["prevent", "stop"])
            }, null, 40, we)) : P("", !0)
          ], 64)) : P("", !0)
        ], 46, te))), 128)),
        O(D) !== null ? (k(), G("div", {
          key: 0,
          class: "drag-bg",
          style: m({
            width: O(I).width + "px",
            height: O(I).height + "px",
            top: O(I).y + "px",
            left: O(I).x + "px"
          })
        }, null, 4)) : P("", !0),
        b("div", {
          class: "height-bg",
          style: m({ height: (O(tt) > 0 ? +(O(tt) + (M.seeModel ? M.seeModelMinBg : 220)) : O(tt)) + "px" })
        }, null, 4),
        O(d).length === 0 ? (k(), G("div", Me, [
          j(l.$slots, "empty", {}, () => [
            jt(" 暂无数据 ")
          ])
        ])) : P("", !0)
      ], 512)
    ], 512));
  }
}, Ee = [ke], De = {
  install(M) {
    Ee.forEach((L) => {
      M.component("vueDragComponentPlus", L);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(De);
export {
  De as default
};
