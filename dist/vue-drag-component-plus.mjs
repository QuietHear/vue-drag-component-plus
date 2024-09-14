import { resolveComponent as Jt, openBlock as D, createBlock as xt, resolveDynamicComponent as Xt, normalizeProps as zt, mergeProps as gt, withCtx as Qt, createElementBlock as O, toDisplayString as R, watch as St, ref as F, onMounted as Zt, onBeforeUnmount as mt, createElementVNode as z, Fragment as pt, renderList as bt, unref as G, normalizeClass as rt, normalizeStyle as m, withModifiers as Y, createCommentVNode as C, renderSlot as j, createVNode as Rt, createTextVNode as jt, nextTick as $t } from "vue";
const Lt = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(M) {
    return (B, vt) => {
      const U = Jt("el-icon");
      return M.iconObj.type === "custom" ? (D(), xt(Xt(M.iconObj.icon), zt(gt({ key: 0 }, M.iconObj.attrs)), null, 16)) : M.iconObj.type === "el" ? (D(), xt(U, zt(gt({ key: 1 }, M.iconObj.attrs)), {
        default: Qt(() => [
          (D(), xt(Xt(M.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : M.iconObj.type === "iconfont" ? (D(), O("i", gt({
        key: 2,
        class: ["icon iconfont", "icon-" + M.iconObj.icon]
      }, M.iconObj.attrs), null, 16)) : (D(), O("i", gt({
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
    // 不展示内置组合插槽中的设置组合标题按钮
    hideTit: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["showGroup", "updateChecked", "showTitPop"],
  setup(M, { expose: B, emit: vt }) {
    const U = vt, v = M, P = (l) => {
      let r = l instanceof Array ? [] : {};
      for (let t in l)
        r[t] = typeof l[t] == "object" ? P(l[t]) : l[t];
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
    let L = null, it = null;
    const tt = F(null), ot = F(0), s = F([]), _t = (l, r) => {
      let t = l.matches || l.webkitMatchesSelector || l.mozMatchesSelector || l.msMatchesSelector;
      for (; l && !t.call(l, r); )
        l = l.parentElement;
      return l;
    };
    let k = null, Mt = null, kt = null;
    const W = F({}), Vt = (l, r) => {
      et(), k = r, W.value = P(s.value[k]), s.value[k].move = !0;
      const t = _t(l.target, ".com-item");
      Mt = l.clientX - t.offsetLeft, kt = l.clientY - t.offsetTop, window.addEventListener("mousemove", Et), window.addEventListener("mouseup", Dt);
    }, Et = (l) => {
      const r = l.clientX - Mt, t = l.clientY - kt, o = r <= _("left") ? _("left") : r >= _("right") ? _("right") : r, e = t <= _("top") ? _("top") : t >= _("bottom") ? _("bottom") : t, f = o - s.value[k].x, c = e - s.value[k].y, w = `${f > 0 ? "right" : f < 0 ? "left" : ""}_${c > 0 ? "bottom" : c < 0 ? "top" : ""}`;
      e > s.value[k].y && e > it - s.value[k].height - 30 && tt.value.scrollBy(0, 20), e < s.value[k].y && e - tt.value.scrollTop < 30 && tt.value.scrollBy(0, -20), s.value[k].x = o, s.value[k].y = e;
      let y = P(s.value.filter((d) => d.move !== !0).filter((d) => d.x < o && d.x + d.width > o || d.x === o || d.x > o && d.x < o + s.value[k].width).filter((d) => d.y < e && d.y + d.height > e || d.y === e || d.y > e && d.y < e + s.value[k].height));
      if (y.length === 0)
        W.value.x = o, W.value.y = e;
      else {
        if (w.indexOf("top") !== -1) {
          y = y.filter((h) => h.y < W.value.y);
          const d = Math.min(...y.map((h) => h.y + h.height));
          y.forEach((h) => {
            Math.abs(h.y + h.height - d) < 5 && (h.y = d - h.height);
          });
          let a = W.value.y - e, i = !0, n = [...y];
          const u = (h) => {
            P(s.value.filter((g) => g.move !== !0 && g.y + g.height - h.y <= a + 3 && g.y + g.height - h.y >= 0).filter((g) => g.x < h.x && g.x + g.width > h.x || g.x >= h.x && g.x < h.x + h.width)).forEach((g) => {
              g.y + g.height !== h.y && (g.y = h.y - g.height), n.findIndex((H) => H.id === g.id) === -1 && (n.push(g), u(g));
            });
          };
          if (y.forEach((h) => {
            u(h);
          }), n.sort((h, x) => {
            const g = h.y, H = x.y;
            return g - H;
          }), (n.length === 0 || n.filter((h) => h.y === 0).length > 0) && (i = !1), i) {
            let h = 0;
            n.filter((g) => g.y === n[0].y).forEach((g) => {
              P(s.value.filter((T) => T.move !== !0 && T.y + T.height < g.y).filter((T) => T.x < g.x && T.x + T.width > g.x || T.x >= g.x && T.x < g.x + g.width)).forEach((T) => {
                T.y + T.height > h && (h = T.y + T.height);
              });
            }), h = n[0].y - h, h < a && (a = h), n.forEach((g) => {
              g.y -= a, s.value.filter((H) => H.id === g.id)[0].y = g.y;
            }), W.value.x = o, W.value.y = s.value.filter((g) => g.id === n[n.length - 1].id)[0].y + s.value.filter((g) => g.id === n[n.length - 1].id)[0].height;
          } else {
            const h = Math.min(...y.map((x) => x.y));
            h - e >= -7 && h - e < 7 && (y.filter((x) => x.y < W.value.y).forEach((x) => {
              x.y += s.value[k].height, s.value.filter((H) => H.id === x.id)[0].y = x.y;
              const g = (H) => {
                s.value.filter((I) => I.move !== !0 && I.id !== H.id).filter((I) => I.x < H.x && I.x + I.width > H.x || I.x === H.x || I.x > H.x && I.x < H.x + H.width).filter((I) => I.y < H.y && I.y + I.height > H.y || I.y === H.y || I.y > H.y && I.y < H.y + H.height).forEach((I) => {
                  I.y = H.y + H.height, g(I);
                });
              };
              g(x);
            }), W.value.x = o, W.value.y = h);
          }
          y = P(s.value.filter((h) => h.move !== !0).filter((h) => h.x < o && h.x + h.width > o || h.x === o || h.x > o && h.x < o + s.value[k].width).filter((h) => h.y < e && h.y + h.height > e || h.y === e || h.y > e && h.y < e + s.value[k].height));
        }
        if (w.indexOf("bottom") !== -1) {
          const d = Math.max(...y.map((a) => a.y + a.height));
          if (d - (e + s.value[k].height) >= -7 && d - (e + s.value[k].height) < 7) {
            let a = !0;
            y.filter((i) => i.y > W.value.y).forEach((i) => {
              i.y -= s.value[k].height, s.value.filter((u) => u.id === i.id)[0].y = i.y;
              const n = s.value.filter((u) => u.move !== !0 && u.id !== i.id).filter((u) => u.x < i.x && u.x + u.width > i.x || u.x === i.x || u.x > i.x && u.x < i.x + i.width).filter((u) => u.y < i.y && u.y + u.height > i.y || u.y === i.y || u.y > i.y && u.y < i.y + i.height);
              if (n.length > 0) {
                i.y = Math.max(...n.map((h) => h.y + h.height)), s.value.filter((h) => h.id === i.id)[0].y = i.y;
                const u = (h) => {
                  s.value.filter((g) => g.id !== h.id).filter((g) => g.x < h.x && g.x + g.width > h.x || g.x === h.x || g.x > h.x && g.x < h.x + h.width).filter((g) => g.y < h.y && g.y + g.height > h.y || g.y === h.y || g.y > h.y && g.y < h.y + h.height).forEach((g) => {
                    g.y = h.y + h.height, g.move === !0 && (W.value.y = g.y, a = !1), u(g);
                  });
                };
                u(i);
              }
            }), W.value.x = o, a && (W.value.y = d - s.value[k].height), y = P(s.value.filter((i) => i.move !== !0).filter((i) => i.x < o && i.x + i.width > o || i.x === o || i.x > o && i.x < o + s.value[k].width).filter((i) => i.y < e && i.y + i.height > e || i.y === e || i.y > e && i.y < e + s.value[k].height));
          }
        }
        if (((w.indexOf("top") !== -1 || w.indexOf("bottom") !== -1) && (w.indexOf("right") !== -1 || w.indexOf("left") !== -1) && Math.abs(f) > 8 || w.indexOf("top") === -1 && w.indexOf("bottom") === -1 && (w.indexOf("right") !== -1 || w.indexOf("left") !== -1)) && y.length > 0) {
          y.sort((a, i) => {
            const n = a.y, u = i.y;
            return n - u;
          });
          let d = !0;
          for (let a = 0; a < y.length; a++) {
            if (d) {
              const i = P(s.value);
              for (let n = 0; n <= a; n++) {
                let u = null;
                const h = i.filter((x) => x.move !== !0 && x.y < y[n].y).filter((x) => x.x < y[n].x && x.x + x.width > y[n].x || x.x === y[n].x || x.x > y[n].x && x.x < y[n].x + y[n].width);
                if (h.length === 0 ? u = 0 : u = Math.max(...h.map((x) => x.y + x.height)), n === a) {
                  if (y[n].y - (y[n].y + y[n].height - e) < u) {
                    d = !1;
                    break;
                  }
                } else if (y[n].y - y[a].height < u) {
                  d = !1;
                  break;
                } else
                  i.filter((x) => x.id === y[n].id)[0].y -= y[a].height;
              }
            }
            if (d) {
              y[a].y -= y[a].y + y[a].height - e, s.value.filter((i) => i.id === y[a].id)[0].y = y[a].y;
              for (let i = a; i > 0; i--)
                y[a - 1].y -= y[a].height, s.value.filter((n) => n.id === y[a - 1].id)[0].y = y[a - 1].y;
            } else
              y.filter((i) => i.id === y[a].id).forEach((i) => {
                i.y += s.value[k].y + s.value[k].height - i.y, s.value.filter((u) => u.id === i.id)[0].y = i.y;
                const n = (u) => {
                  s.value.filter((x) => x.move !== !0 && x.id !== u.id).filter((x) => x.x < u.x && x.x + x.width > u.x || x.x === u.x || x.x > u.x && x.x < u.x + u.width).filter((x) => x.y < u.y && x.y + x.height > u.y || x.y === u.y || x.y > u.y && x.y < u.y + u.height).forEach((x) => {
                    x.y = u.y + u.height, n(x);
                  });
                };
                n(i);
              });
          }
          W.value.x = o;
        }
      }
      X(!1);
    }, Dt = () => {
      window.removeEventListener("mousemove", Et), window.removeEventListener("mouseup", Dt), delete s.value[k].move, s.value[k].x = W.value.x, s.value[k].y = W.value.y, k = null, X();
    }, _ = (l) => {
      switch (l) {
        case "top":
          return 0;
        case "right":
          return L - s.value[k].width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let p = null, yt = "", st = 0, nt = 0, A = 0, N = 0, K = 0, q = 0, J = 0, at = 0, Q = 0, ht = 0;
    const V = (l, r, t) => {
      et(), p = r, yt = t, st = l.clientX, nt = l.clientY, A = r.width, N = r.height, K = r.y, q = r.x, p.drag = !0;
      const o = s.value.filter((d) => d.static === !0 && (d.x < r.x ? d.x + d.width >= r.x : d.x <= r.x + r.width)), e = s.value.filter((d) => d.static === !0 && (d.y < r.y ? d.y + d.height >= r.y : d.y <= r.y + r.height)), f = o.filter((d) => d.y + d.height <= r.y).map((d) => d.y + d.height);
      f.length > 0 ? J = Math.max(...f) : J = 0;
      const c = o.filter((d) => d.y >= r.y + r.height).map((d) => d.y);
      c.length > 0 ? at = Math.min(...c) : at = 0;
      const w = e.filter((d) => d.x + d.width <= r.x).map((d) => d.x + d.width);
      w.length > 0 ? Q = Math.max(...w) : Q = 0;
      const y = e.filter((d) => d.x >= r.x + r.width).map((d) => d.x);
      y.length > 0 ? ht = Math.min(...y) : ht = 0, window.addEventListener("mousemove", Ot), window.addEventListener("mouseup", Gt);
    }, Ot = (l) => {
      const r = A + (l.clientX - st), t = N + (l.clientY - nt), o = A - (l.clientX - st), e = N - (l.clientY - nt), f = K + (l.clientY - nt), c = q + (l.clientX - st), w = getComputedStyle(S.value), y = parseInt(w.getPropertyValue("--com-item-border-width").trim()), d = parseInt(w.getPropertyValue("--group-tit-height").trim());
      switch (yt) {
        case "top-left":
          if (p.height = e < v.itemMinHeight ? v.itemMinHeight : e > E("top") ? E("top") : e, p.y = e < v.itemMinHeight ? K + N - v.itemMinHeight : e > E("top") ? J : f, p.width = o < v.itemMinWidth ? v.itemMinWidth : o > E("left") ? E("left") : o, p.x = o < v.itemMinWidth ? q + A - v.itemMinWidth : o > E("left") ? Q : c, p.isGroup === !0) {
            const i = p.width - 2 * y, n = p.height - 2 * y - (p.groupTit ? d : 0);
            p.groupData.forEach((u) => {
              u.width = i * u.groupW, u.x = i * u.groupX, u.height = n * u.groupH, u.y = n * u.groupY;
            });
          }
          break;
        case "top":
          if (p.height = e < v.itemMinHeight ? v.itemMinHeight : e > E("top") ? E("top") : e, p.y = e < v.itemMinHeight ? K + N - v.itemMinHeight : e > E("top") ? J : f, p.isGroup === !0) {
            const i = p.height - 2 * y - (p.groupTit ? d : 0);
            p.groupData.forEach((n) => {
              n.height = i * n.groupH, n.y = i * n.groupY;
            });
          }
          break;
        case "top-right":
          if (p.height = e < v.itemMinHeight ? v.itemMinHeight : e > E("top") ? E("top") : e, p.y = e < v.itemMinHeight ? K + N - v.itemMinHeight : e > E("top") ? J : f, p.width = r < v.itemMinWidth ? v.itemMinWidth : r > E("right") ? E("right") : r, p.isGroup === !0) {
            const i = p.width - 2 * y, n = p.height - 2 * y - (p.groupTit ? d : 0);
            p.groupData.forEach((u) => {
              u.width = i * u.groupW, u.x = i * u.groupX, u.height = n * u.groupH, u.y = n * u.groupY;
            });
          }
          break;
        case "left":
          if (p.width = o < v.itemMinWidth ? v.itemMinWidth : o > E("left") ? E("left") : o, p.x = o < v.itemMinWidth ? q + A - v.itemMinWidth : o > E("left") ? Q : c, p.isGroup === !0) {
            const i = p.width - 2 * y;
            p.groupData.forEach((n) => {
              n.width = i * n.groupW, n.x = i * n.groupX;
            });
          }
          break;
        case "right":
          if (p.width = r < v.itemMinWidth ? v.itemMinWidth : r > E("right") ? E("right") : r, p.isGroup === !0) {
            const i = p.width - 2 * y;
            p.groupData.forEach((n) => {
              n.width = i * n.groupW, n.x = i * n.groupX;
            });
          }
          break;
        case "bottom-left":
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > E("bottom") ? E("bottom") : t, p.width = o < v.itemMinWidth ? v.itemMinWidth : o > E("left") ? E("left") : o, p.x = o < v.itemMinWidth ? q + A - v.itemMinWidth : o > E("left") ? Q : c, p.isGroup === !0) {
            const i = p.width - 2 * y, n = p.height - 2 * y - (p.groupTit ? d : 0);
            p.groupData.forEach((u) => {
              u.width = i * u.groupW, u.x = i * u.groupX, u.height = n * u.groupH, u.y = n * u.groupY;
            });
          }
          break;
        case "bottom":
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > E("bottom") ? E("bottom") : t, p.isGroup === !0) {
            const i = p.height - 2 * y - (p.groupTit ? d : 0);
            p.groupData.forEach((n) => {
              n.height = i * n.groupH, n.y = i * n.groupY;
            });
          }
          break;
        case "bottom-right":
          if (p.height = t < v.itemMinHeight ? v.itemMinHeight : t > E("bottom") ? E("bottom") : t, p.width = r < v.itemMinWidth ? v.itemMinWidth : r > E("right") ? E("right") : r, p.isGroup === !0) {
            const i = p.width - 2 * y, n = p.height - 2 * y - (p.groupTit ? d : 0);
            p.groupData.forEach((u) => {
              u.width = i * u.groupW, u.x = i * u.groupX, u.height = n * u.groupH, u.y = n * u.groupY;
            });
          }
          break;
      }
      let a = P(s.value.filter((i) => i.drag !== !0).filter((i) => i.x < p.x && i.x + i.width > p.x || i.x === p.x || i.x > p.x && i.x < p.x + p.width).filter((i) => i.y < p.y && i.y + i.height > p.y || i.y === p.y || i.y > p.y && i.y < p.y + p.height));
      if (a.length > 0) {
        a.sort((i, n) => {
          const u = i.y, h = n.y;
          return u - h;
        });
        for (let i = 0; i < a.length; i++)
          a.filter((n) => n.id === a[i].id).forEach((n) => {
            n.y += p.y + p.height - n.y, s.value.filter((h) => h.id === n.id)[0].y = n.y;
            const u = (h) => {
              s.value.filter((g) => g.drag !== !0 && g.id !== h.id).filter((g) => g.x < h.x && g.x + g.width > h.x || g.x === h.x || g.x > h.x && g.x < h.x + h.width).filter((g) => g.y < h.y && g.y + g.height > h.y || g.y === h.y || g.y > h.y && g.y < h.y + h.height).forEach((g) => {
                g.y = h.y + h.height, u(g);
              });
            };
            u(n);
          });
      }
      X(!1), tt.value.scrollTo(0, ot.value - it);
    }, Gt = (l) => {
      delete p.drag, yt = "", p = null, window.removeEventListener("mousemove", Ot), window.removeEventListener("mouseup", Gt), X();
    }, E = (l) => {
      switch (l) {
        case "top":
          return K + N - J;
        case "left":
          return q + A - Q;
        case "right":
          return (ht > 0 ? ht : L) - q;
        case "bottom":
          return at > 0 ? at - K : 999999999;
      }
    }, X = (l = !0) => {
      l === !0 && Ht();
      const r = s.value.map((t) => t.y + t.height);
      r.length > 0 ? ot.value = Math.max(...r) + 50 : ot.value = 0;
    };
    St(
      () => v.ySpace,
      () => {
        v.ySpace >= 0 && Ht();
      }
    );
    const Ht = () => {
      s.value.sort((l, r) => {
        const t = l.y, o = r.y;
        return t - o;
      });
      for (let l = 0; l < s.value.length - 1; l++) {
        if (l === 0 && s.value[l].y > 0) {
          const r = s.value[l].y;
          for (let t = l; t < s.value.length; t++)
            s.value[t].y -= r;
        }
        if (s.value[l + 1].y > s.value[l].y + s.value[l].height) {
          const r = s.value[l + 1].y - (s.value[l].y + s.value[l].height);
          for (let t = l + 1; t < s.value.length; t++)
            s.value[t].y -= r;
        }
      }
      for (let l = 0; l < s.value.length - 1; l++) {
        let r = s.value.findIndex((t) => t.y === s.value[l].y + s.value[l].height);
        if (r !== -1)
          for (let t = r; t < s.value.length; t++)
            s.value[t].y += v.ySpace;
      }
    };
    Zt(() => {
      Wt.observe(S.value);
    });
    const Wt = new ResizeObserver((l) => {
      At(L === l[0].contentRect.width ? null : l[0].contentRect.width, it === l[0].contentRect.height ? null : l[0].contentRect.height);
    });
    let ft = !1;
    const Bt = (l = [], r = null) => {
      s.value = P(l), s.value.filter((t) => t.isGroup === !0).forEach((t) => {
        if (t.isGroup === !0)
          if (t.groupData.length < 2)
            lt(t.id);
          else {
            const o = dt(t.groupData, t);
            ct(o);
          }
      }), r !== null ? $t(() => {
        const o = S.value.getBoundingClientRect().width / r, e = getComputedStyle(S.value), f = parseInt(e.getPropertyValue("--com-item-border-width").trim()), c = parseInt(e.getPropertyValue("--group-tit-height").trim());
        s.value.forEach((w) => {
          if (w.width *= o, w.height *= o, w.x *= o, w.y *= o, w.isGroup === !0) {
            const y = w.width - 2 * f, d = w.height - 2 * f - (w.groupTit ? c : 0);
            w.groupData.forEach((a) => {
              a.width = y * a.groupW, a.x = y * a.groupX, a.height = d * a.groupH, a.y = d * a.groupY;
            });
          }
        }), X();
      }) : X(), ft = !0, setTimeout(() => {
        ft = !1;
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
    }, ut = (l, r = null, t = !1) => {
      const o = P(l), e = s.value.filter((f) => f.id === r);
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
          s.value.length === 0 ? (o.x = 0, o.y = 0) : It(o, s.value, L);
      if (r) {
        e[0].groupData.push(o);
        const f = dt(e[0].groupData, e[0]);
        ct(f);
      } else
        s.value.push(o);
      X();
    }, Z = (l, r = null) => {
      let t = -1;
      const o = s.value.filter((e) => e.id === r);
      if (r ? o.length === 1 && (t = o[0].groupData.findIndex((e) => e.id === l)) : t = s.value.findIndex((e) => e.id === l), t !== -1) {
        if (r)
          if (o[0].groupData.splice(t, 1), o[0].groupData.length === 1)
            lt(r);
          else {
            const e = dt(o[0].groupData, o[0]);
            ct(e);
          }
        else
          s.value.splice(t, 1);
        X();
      } else
        try {
        } catch {
        }
    }, ct = (l) => {
      if (l.id) {
        const r = P(l);
        let t = -1;
        const o = s.value.filter((e) => e.id === r.inGroupId);
        if (r.inGroupId ? o.length === 1 && (t = o[0].groupData.findIndex((e) => e.id === r.id)) : t = s.value.findIndex((e) => e.id === r.id), t !== -1)
          r.inGroupId ? o[0].groupData[t] = r : s.value[t] = r, X();
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
        const t = L ? l / L : 1;
        L = l;
        const o = getComputedStyle(S.value), e = parseInt(o.getPropertyValue("--com-item-border-width").trim()), f = parseInt(o.getPropertyValue("--group-tit-height").trim());
        ft || (s.value.forEach((c) => {
          if (c.width *= t, c.height *= t, c.x *= t, c.y *= t, c.isGroup === !0) {
            const w = c.width - 2 * e, y = c.height - 2 * e - (c.groupTit ? f : 0);
            c.groupData.forEach((d) => {
              d.width = w * d.groupW, d.x = w * d.groupX, d.height = y * d.groupH, d.y = y * d.groupY;
            });
          }
        }), X());
      }
      r !== null && (it = r);
    }, Ct = (l) => {
      l.showPop || (s.value.forEach((r) => {
        delete r.showPop, r.groupData && r.groupData.forEach((t) => {
          delete t.showPop;
        });
      }), l.showPop = !0, window.addEventListener("click", et));
    }, et = () => {
      s.value.forEach((l) => {
        delete l.showPop, l.groupData && l.groupData.forEach((r) => {
          delete r.showPop;
        });
      }), window.removeEventListener("click", et);
    }, b = F(!1), Pt = (l) => {
      const r = s.value.findIndex((t) => t.id === l);
      if (r !== -1)
        s.value[r].checked = !0, s.value[r].disabled = !0, b.value = !0, U("showGroup", b.value);
      else
        try {
        } catch {
        }
    }, Tt = () => {
      b.value = !1, s.value.forEach((l) => {
        delete l.checked, delete l.disabled, l.groupData && l.groupData.forEach((r) => {
          delete r.checked, delete r.disabled;
        });
      }), U("showGroup", b.value);
    }, Nt = (l) => {
      l.checked = !l.checked, U("updateChecked", s.value.filter((r) => r.checked).length);
    }, dt = (l, r) => {
      const t = P(l), o = P(r);
      t.sort((a, i) => {
        const n = a.x, u = i.x;
        return n - u;
      });
      for (let a = 0; a < t.length - 1; a++) {
        if (a === 0 && t[a].x > 0) {
          const i = t[a].x;
          for (let n = a; n < t.length; n++)
            t[n].x -= i;
        }
        if (t[a + 1].x > t[a].x + t[a].width) {
          const i = t[a + 1].x - (t[a].x + t[a].width);
          for (let n = a + 1; n < t.length; n++)
            t[n].x -= i;
        }
      }
      t.sort((a, i) => {
        const n = a.y, u = i.y;
        return n - u;
      });
      for (let a = 0; a < t.length - 1; a++) {
        if (a === 0 && t[a].y > 0) {
          const i = t[a].y;
          for (let n = a; n < t.length; n++)
            t[n].y -= i;
        }
        if (t[a + 1].y > t[a].y + t[a].height) {
          const i = t[a + 1].y - (t[a].y + t[a].height);
          for (let n = a + 1; n < t.length; n++)
            t[n].y -= i;
        }
      }
      const e = t.map((a) => a.x + a.width), f = Math.max(...e), c = t.map((a) => a.y + a.height), w = Math.max(...c);
      t.forEach((a) => {
        a.inGroupId || (a.inGroupId = o.id), a.groupW = a.width / f, a.groupH = a.height / w, a.groupX = a.x / f, a.groupY = a.y / w, a.isObstacle = a.x + a.width === f && a.y === 0;
      });
      const y = getComputedStyle(S.value), d = parseInt(y.getPropertyValue("--com-item-border-width").trim());
      return o.width = f + 2 * d, o.height = w + 2 * d, o.groupData = [...t], o;
    }, Kt = () => {
      $t(() => {
        const l = getComputedStyle(S.value), r = parseInt(l.getPropertyValue("--com-item-border-width").trim()), t = parseInt(l.getPropertyValue("--group-tit-height").trim());
        s.value.filter((o) => o.isGroup === !0).forEach((o) => {
          const e = o.width - 2 * r, f = o.height - 2 * r - (o.groupTit ? t : 0);
          o.groupData.forEach((c) => {
            c.width = e * c.groupW, c.x = e * c.groupX, c.height = f * c.groupH, c.y = f * c.groupY;
          });
        });
      });
    }, qt = () => {
      const l = s.value.filter((r) => r.checked);
      if (l.length > 1) {
        const r = {
          id: (/* @__PURE__ */ new Date()).getTime() + "G",
          isGroup: !0,
          groupTit: ""
        }, t = dt(l, r);
        t.groupData.forEach((o) => {
          Z(o.id);
        }), ut(t), X();
      }
      Tt();
    }, Yt = (l, r) => {
      const t = s.value.filter((o) => o.id === r)[0];
      if (t) {
        const o = t.groupData.filter((e) => e.id === l)[0];
        if (o)
          t.groupData.length === 2 ? lt(r) : (delete o.inGroupId, delete o.groupW, delete o.groupH, delete o.groupX, delete o.groupY, delete o.isObstacle, Z(o.id, t.id), ut(o), X());
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, lt = (l) => {
      const r = s.value.filter((t) => t.id === l)[0];
      if (r)
        Z(r.id), r.groupData.forEach((t) => {
          delete t.inGroupId, delete t.groupW, delete t.groupH, delete r.groupX, delete r.groupY, delete r.isObstacle, t.x += r.x, t.y += r.y, ut(t, null, !0);
        }), X();
      else
        try {
        } catch {
        }
    }, Ft = (l = "", r) => {
      const t = s.value.filter((o) => o.id === r)[0];
      if (t) {
        if (!t.groupTit || !l) {
          const e = getComputedStyle(S.value), f = parseInt(e.getPropertyValue("--group-tit-height").trim());
          t.groupTit && !l && (t.height -= f), !t.groupTit && l && (t.height += f);
        }
        t.groupTit = l;
        const o = (e) => {
          s.value.filter((c) => c.id !== e.id).filter((c) => c.x < e.x && c.x + c.width > e.x || c.x === e.x || c.x > e.x && c.x < e.x + e.width).filter((c) => c.y < e.y && c.y + c.height > e.y || c.y === e.y || c.y > e.y && c.y < e.y + e.height).forEach((c) => {
            c.y = e.y + e.height, o(c);
          });
        };
        o(t), X();
      } else
        try {
        } catch {
        }
    }, Ut = () => {
      const l = P(s.value);
      return l.forEach((r) => {
        delete r.showPop, r.groupData && r.groupData.forEach((t) => {
          delete t.showPop;
        });
      }), { data: l, width: L };
    };
    return mt(() => {
      Wt.unobserve(S.value), window.removeEventListener("click", et);
    }), B({ init: Bt, addItem: ut, deleteItem: Z, updateItem: ct, openGroup: Pt, closeGroup: Tt, changeGroupBorder: Kt, addGroup: qt, removeGroupItem: Yt, removeGroup: lt, changeGroupTit: Ft, getData: Ut }), (l, r) => (D(), O("div", {
      class: "vue-drag-component-plus",
      ref_key: "pageRef",
      ref: S
    }, [
      z("div", {
        class: "content-box",
        ref_key: "boxRef",
        ref: tt
      }, [
        (D(!0), O(pt, null, bt(G(s), (t, o) => (D(), O("div", {
          class: rt(["com-item", M.seeModel || G(b) || t.static === !0 || t.dragable === !1 ? "" : "can-drag", t.move ? "is-move" : "", t.drag ? "is-drag" : "", t.showPop ? "on-top" : "", M.seeModel ? "no-hover" : ""]),
          style: m({
            width: t.width + "px",
            height: t.height + "px",
            top: t.y + "px",
            left: t.x + "px"
          }),
          key: o,
          onMousedown: Y((e) => M.seeModel || G(b) || t.static === !0 || t.dragable === !1 ? null : Vt(e, o), ["prevent"])
        }, [
          z("div", ee, [
            t.isGroup ? (D(), O(pt, { key: 0 }, [
              t.groupTit ? (D(), O("div", {
                key: 0,
                class: "group-item-tit",
                title: t.groupTit
              }, R(t.groupTit), 9, le)) : C("", !0),
              z("div", {
                class: rt(["group-item-content", t.groupTit ? "" : "full"])
              }, [
                (D(!0), O(pt, null, bt(t.groupData, (e, f) => (D(), O("div", {
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
                  !M.seeModel && !G(b) && G(k) === null && G(p) === null ? (D(), O("div", {
                    key: 0,
                    class: "setting-box",
                    style: m({ display: e.showPop ? "flex" : "none" }),
                    onMousedown: Y((c) => null, ["prevent", "stop"])
                  }, [
                    Rt(Lt, {
                      iconObj: M.settingIcon,
                      onClick: Y((c) => Ct(e), ["prevent", "stop"])
                    }, null, 8, ["iconObj", "onClick"])
                  ], 36)) : C("", !0),
                  e.showPop ? (D(), O("div", {
                    key: 1,
                    class: "setting-box-pop",
                    onMousedown: Y((c) => null, ["prevent", "stop"])
                  }, [
                    j(l.$slots, "setPopNormal", {
                      data: P(e)
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
            !t.isGroup && t.notGroup !== !0 && G(b) ? (D(), O("div", {
              key: 2,
              class: rt(["group-checkbox", t.checked ? "is-checked" : "", t.disabled ? "disabled" : ""]),
              onClick: (e) => t.disabled ? null : Nt(t)
            }, null, 10, oe)) : C("", !0),
            !M.seeModel && !G(b) && G(k) === null && G(p) === null ? (D(), O("div", {
              key: 3,
              class: "setting-box",
              style: m({ display: t.showPop ? "flex" : "none" }),
              onMousedown: Y((e) => null, ["prevent", "stop"])
            }, [
              Rt(Lt, {
                iconObj: M.settingIcon,
                onClick: Y((e) => Ct(t), ["prevent", "stop"])
              }, null, 8, ["iconObj", "onClick"])
            ], 36)) : C("", !0),
            t.showPop ? (D(), O("div", {
              key: 4,
              class: rt(["setting-box-pop", t.isGroup === !0 ? "special" : ""]),
              onMousedown: Y((e) => null, ["prevent", "stop"])
            }, [
              t.isGroup === !0 ? j(l.$slots, "setPopSpecial", {
                key: 0,
                data: P(t)
              }, () => [
                M.hideTit ? C("", !0) : (D(), O("div", {
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
                data: P(t)
              }, () => [
                t.notGroup !== !0 ? (D(), O("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (e) => Pt(t.id)
                }, "组合", 8, ae)) : C("", !0),
                z("div", {
                  class: "setting-box-pop-item",
                  onClick: (e) => Z(t.id)
                }, "删除", 8, he)
              ])
            ], 34)) : C("", !0)
          ]),
          !M.seeModel && !G(b) && !t.move && t.static !== !0 && t.resizable !== !1 ? (D(), O(pt, { key: 0 }, [
            G($).indexOf("topLeft") !== -1 ? (D(), O("div", {
              key: 0,
              class: "resize-line top-left",
              onMousedown: Y((e) => V(e, t, "top-left"), ["prevent", "stop"])
            }, null, 40, ue)) : C("", !0),
            G($).indexOf("top") !== -1 ? (D(), O("div", {
              key: 1,
              class: "resize-line top",
              onMousedown: Y((e) => V(e, t, "top"), ["prevent", "stop"])
            }, null, 40, ce)) : C("", !0),
            G($).indexOf("topRight") !== -1 ? (D(), O("div", {
              key: 2,
              class: "resize-line top-right",
              onMousedown: Y((e) => V(e, t, "top-right"), ["prevent", "stop"])
            }, null, 40, de)) : C("", !0),
            G($).indexOf("left") !== -1 ? (D(), O("div", {
              key: 3,
              class: "resize-line left",
              onMousedown: Y((e) => V(e, t, "left"), ["prevent", "stop"])
            }, null, 40, ge)) : C("", !0),
            G($).indexOf("right") !== -1 ? (D(), O("div", {
              key: 4,
              class: "resize-line right",
              onMousedown: Y((e) => V(e, t, "right"), ["prevent", "stop"])
            }, null, 40, pe)) : C("", !0),
            G($).indexOf("bottomLeft") !== -1 ? (D(), O("div", {
              key: 5,
              class: "resize-line bottom-left",
              onMousedown: Y((e) => V(e, t, "bottom-left"), ["prevent", "stop"])
            }, null, 40, ye)) : C("", !0),
            G($).indexOf("bottom") !== -1 ? (D(), O("div", {
              key: 6,
              class: "resize-line bottom",
              onMousedown: Y((e) => V(e, t, "bottom"), ["prevent", "stop"])
            }, null, 40, fe)) : C("", !0),
            G($).indexOf("bottomRight") !== -1 ? (D(), O("div", {
              key: 7,
              class: "resize-line bottom-right",
              onMousedown: Y((e) => V(e, t, "bottom-right"), ["prevent", "stop"])
            }, null, 40, xe)) : C("", !0)
          ], 64)) : C("", !0)
        ], 46, te))), 128)),
        G(k) !== null ? (D(), O("div", {
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
          style: m({ height: G(ot) + "px" })
        }, null, 4),
        G(s).length === 0 ? (D(), O("div", ve, [
          j(l.$slots, "empty", {}, () => [
            jt(" 暂无数据 ")
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
