import { resolveComponent as Ft, openBlock as O, createBlock as xt, resolveDynamicComponent as zt, normalizeProps as Xt, mergeProps as ct, withCtx as Ut, createElementBlock as D, toDisplayString as R, watch as St, ref as F, onMounted as Jt, onBeforeUnmount as Qt, createElementVNode as X, Fragment as dt, renderList as bt, unref as G, normalizeClass as lt, normalizeStyle as m, withModifiers as Y, createCommentVNode as C, renderSlot as j, createVNode as Rt, createTextVNode as Zt, nextTick as mt } from "vue";
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
      const U = Ft("el-icon");
      return M.iconObj.type === "custom" ? (O(), xt(zt(M.iconObj.icon), Xt(ct({ key: 0 }, M.iconObj.attrs)), null, 16)) : M.iconObj.type === "el" ? (O(), xt(U, Xt(ct({ key: 1 }, M.iconObj.attrs)), {
        default: Ut(() => [
          (O(), xt(zt(M.iconObj.icon)))
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
const jt = ["onMousedown"], te = { class: "com-item-content" }, ee = ["title"], le = ["onClick"], ie = ["onClick"], re = ["onClick"], oe = ["onClick"], se = ["onClick"], ne = ["onClick"], he = ["onClick"], ae = ["onMousedown"], ue = ["onMousedown"], ce = ["onMousedown"], de = ["onMousedown"], ge = ["onMousedown"], ye = ["onMousedown"], pe = ["onMousedown"], fe = ["onMousedown"], xe = {
  key: 1,
  class: "com-empty"
}, ve = {
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
      let i = l instanceof Array ? [] : {};
      for (let t in l)
        i[t] = typeof l[t] == "object" ? T(l[t]) : l[t];
      return i;
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
    const tt = F(null), rt = F(0), n = F([]), Lt = (l, i) => {
      let t = l.matches || l.webkitMatchesSelector || l.mozMatchesSelector || l.msMatchesSelector;
      for (; l && !t.call(l, i); )
        l = l.parentElement;
      return l;
    };
    let k = null, Mt = null, kt = null;
    const W = F({}), _t = (l, i) => {
      et(), k = i, W.value = T(n.value[k]), n.value[k].move = !0;
      const t = Lt(l.target, ".com-item");
      Mt = l.clientX - t.offsetLeft, kt = l.clientY - t.offsetTop, window.addEventListener("mousemove", Et), window.addEventListener("mouseup", Ot);
    }, Et = (l) => {
      const i = l.clientX - Mt, t = l.clientY - kt, o = i <= _("left") ? _("left") : i >= _("right") ? _("right") : i, e = t <= _("top") ? _("top") : t >= _("bottom") ? _("bottom") : t, f = o - n.value[k].x, g = e - n.value[k].y, w = `${f > 0 ? "right" : f < 0 ? "left" : ""}_${g > 0 ? "bottom" : g < 0 ? "top" : ""}`;
      e > n.value[k].y && e > it - n.value[k].height - 30 && tt.value.scrollBy(0, 20), e < n.value[k].y && e - tt.value.scrollTop < 30 && tt.value.scrollBy(0, -20), n.value[k].x = o, n.value[k].y = e;
      let p = T(n.value.filter((c) => c.move !== !0).filter((c) => c.x < o && c.x + c.width > o || c.x === o || c.x > o && c.x < o + n.value[k].width).filter((c) => c.y < e && c.y + c.height > e || c.y === e || c.y > e && c.y < e + n.value[k].height));
      if (p.length === 0)
        W.value.x = o, W.value.y = e;
      else {
        if (w.indexOf("top") !== -1) {
          p = p.filter((a) => a.y < W.value.y);
          const c = Math.min(...p.map((a) => a.y + a.height));
          p.forEach((a) => {
            Math.abs(a.y + a.height - c) < 5 && (a.y = c - a.height);
          });
          let h = W.value.y - e, r = !0, s = [...p];
          const u = (a) => {
            T(n.value.filter((d) => d.move !== !0 && d.y + d.height - a.y <= h + 3 && d.y + d.height - a.y >= 0).filter((d) => d.x < a.x && d.x + d.width > a.x || d.x >= a.x && d.x < a.x + a.width)).forEach((d) => {
              d.y + d.height !== a.y && (d.y = a.y - d.height), s.findIndex((H) => H.id === d.id) === -1 && (s.push(d), u(d));
            });
          };
          if (p.forEach((a) => {
            u(a);
          }), s.sort((a, x) => {
            const d = a.y, H = x.y;
            return d - H;
          }), (s.length === 0 || s.filter((a) => a.y === 0).length > 0) && (r = !1), r) {
            let a = 0;
            s.filter((d) => d.y === s[0].y).forEach((d) => {
              T(n.value.filter((P) => P.move !== !0 && P.y + P.height < d.y).filter((P) => P.x < d.x && P.x + P.width > d.x || P.x >= d.x && P.x < d.x + d.width)).forEach((P) => {
                P.y + P.height > a && (a = P.y + P.height);
              });
            }), a = s[0].y - a, a < h && (h = a), s.forEach((d) => {
              d.y -= h, n.value.filter((H) => H.id === d.id)[0].y = d.y;
            }), W.value.x = o, W.value.y = n.value.filter((d) => d.id === s[s.length - 1].id)[0].y + n.value.filter((d) => d.id === s[s.length - 1].id)[0].height;
          } else {
            const a = Math.min(...p.map((x) => x.y));
            a - e >= -7 && a - e < 7 && (p.filter((x) => x.y < W.value.y).forEach((x) => {
              x.y += n.value[k].height, n.value.filter((H) => H.id === x.id)[0].y = x.y;
              const d = (H) => {
                n.value.filter((I) => I.move !== !0 && I.id !== H.id).filter((I) => I.x < H.x && I.x + I.width > H.x || I.x === H.x || I.x > H.x && I.x < H.x + H.width).filter((I) => I.y < H.y && I.y + I.height > H.y || I.y === H.y || I.y > H.y && I.y < H.y + H.height).forEach((I) => {
                  I.y = H.y + H.height, d(I);
                });
              };
              d(x);
            }), W.value.x = o, W.value.y = a);
          }
          p = T(n.value.filter((a) => a.move !== !0).filter((a) => a.x < o && a.x + a.width > o || a.x === o || a.x > o && a.x < o + n.value[k].width).filter((a) => a.y < e && a.y + a.height > e || a.y === e || a.y > e && a.y < e + n.value[k].height));
        }
        if (w.indexOf("bottom") !== -1) {
          const c = Math.max(...p.map((h) => h.y + h.height));
          if (c - (e + n.value[k].height) >= -7 && c - (e + n.value[k].height) < 7) {
            let h = !0;
            p.filter((r) => r.y > W.value.y).forEach((r) => {
              r.y -= n.value[k].height, n.value.filter((u) => u.id === r.id)[0].y = r.y;
              const s = n.value.filter((u) => u.move !== !0 && u.id !== r.id).filter((u) => u.x < r.x && u.x + u.width > r.x || u.x === r.x || u.x > r.x && u.x < r.x + r.width).filter((u) => u.y < r.y && u.y + u.height > r.y || u.y === r.y || u.y > r.y && u.y < r.y + r.height);
              if (s.length > 0) {
                r.y = Math.max(...s.map((a) => a.y + a.height)), n.value.filter((a) => a.id === r.id)[0].y = r.y;
                const u = (a) => {
                  n.value.filter((d) => d.id !== a.id).filter((d) => d.x < a.x && d.x + d.width > a.x || d.x === a.x || d.x > a.x && d.x < a.x + a.width).filter((d) => d.y < a.y && d.y + d.height > a.y || d.y === a.y || d.y > a.y && d.y < a.y + a.height).forEach((d) => {
                    d.y = a.y + a.height, d.move === !0 && (W.value.y = d.y, h = !1), u(d);
                  });
                };
                u(r);
              }
            }), W.value.x = o, h && (W.value.y = c - n.value[k].height), p = T(n.value.filter((r) => r.move !== !0).filter((r) => r.x < o && r.x + r.width > o || r.x === o || r.x > o && r.x < o + n.value[k].width).filter((r) => r.y < e && r.y + r.height > e || r.y === e || r.y > e && r.y < e + n.value[k].height));
          }
        }
        if (((w.indexOf("top") !== -1 || w.indexOf("bottom") !== -1) && (w.indexOf("right") !== -1 || w.indexOf("left") !== -1) && Math.abs(f) > 8 || w.indexOf("top") === -1 && w.indexOf("bottom") === -1 && (w.indexOf("right") !== -1 || w.indexOf("left") !== -1)) && p.length > 0) {
          p.sort((h, r) => {
            const s = h.y, u = r.y;
            return s - u;
          });
          let c = !0;
          for (let h = 0; h < p.length; h++) {
            if (c) {
              const r = T(n.value);
              for (let s = 0; s <= h; s++) {
                let u = null;
                const a = r.filter((x) => x.move !== !0 && x.y < p[s].y).filter((x) => x.x < p[s].x && x.x + x.width > p[s].x || x.x === p[s].x || x.x > p[s].x && x.x < p[s].x + p[s].width);
                if (a.length === 0 ? u = 0 : u = Math.max(...a.map((x) => x.y + x.height)), s === h) {
                  if (p[s].y - (p[s].y + p[s].height - e) < u) {
                    c = !1;
                    break;
                  }
                } else if (p[s].y - p[h].height < u) {
                  c = !1;
                  break;
                } else
                  r.filter((x) => x.id === p[s].id)[0].y -= p[h].height;
              }
            }
            if (c) {
              p[h].y -= p[h].y + p[h].height - e, n.value.filter((r) => r.id === p[h].id)[0].y = p[h].y;
              for (let r = h; r > 0; r--)
                p[h - 1].y -= p[h].height, n.value.filter((s) => s.id === p[h - 1].id)[0].y = p[h - 1].y;
            } else
              p.filter((r) => r.id === p[h].id).forEach((r) => {
                r.y += n.value[k].y + n.value[k].height - r.y, n.value.filter((u) => u.id === r.id)[0].y = r.y;
                const s = (u) => {
                  n.value.filter((x) => x.move !== !0 && x.id !== u.id).filter((x) => x.x < u.x && x.x + x.width > u.x || x.x === u.x || x.x > u.x && x.x < u.x + u.width).filter((x) => x.y < u.y && x.y + x.height > u.y || x.y === u.y || x.y > u.y && x.y < u.y + u.height).forEach((x) => {
                    x.y = u.y + u.height, s(x);
                  });
                };
                s(r);
              });
          }
          W.value.x = o;
        }
      }
      z(!1);
    }, Ot = () => {
      window.removeEventListener("mousemove", Et), window.removeEventListener("mouseup", Ot), delete n.value[k].move, n.value[k].x = W.value.x, n.value[k].y = W.value.y, k = null, z();
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
    let y = null, gt = "", ot = 0, st = 0, A = 0, N = 0, K = 0, q = 0, J = 0, nt = 0, Q = 0, ht = 0;
    const V = (l, i, t) => {
      et(), y = i, gt = t, ot = l.clientX, st = l.clientY, A = i.width, N = i.height, K = i.y, q = i.x, y.drag = !0;
      const o = n.value.filter((c) => c.static === !0 && (c.x < i.x ? c.x + c.width >= i.x : c.x <= i.x + i.width)), e = n.value.filter((c) => c.static === !0 && (c.y < i.y ? c.y + c.height >= i.y : c.y <= i.y + i.height)), f = o.filter((c) => c.y + c.height <= i.y).map((c) => c.y + c.height);
      f.length > 0 ? J = Math.max(...f) : J = 0;
      const g = o.filter((c) => c.y >= i.y + i.height).map((c) => c.y);
      g.length > 0 ? nt = Math.min(...g) : nt = 0;
      const w = e.filter((c) => c.x + c.width <= i.x).map((c) => c.x + c.width);
      w.length > 0 ? Q = Math.max(...w) : Q = 0;
      const p = e.filter((c) => c.x >= i.x + i.width).map((c) => c.x);
      p.length > 0 ? ht = Math.min(...p) : ht = 0, window.addEventListener("mousemove", Dt), window.addEventListener("mouseup", Gt);
    }, Dt = (l) => {
      const i = A + (l.clientX - ot), t = N + (l.clientY - st), o = A - (l.clientX - ot), e = N - (l.clientY - st), f = K + (l.clientY - st), g = q + (l.clientX - ot), w = getComputedStyle(S.value), p = parseInt(w.getPropertyValue("--com-item-border-width").trim()), c = parseInt(w.getPropertyValue("--group-tit-height").trim());
      switch (gt) {
        case "top-left":
          if (y.height = e < v.itemMinHeight ? v.itemMinHeight : e > E("top") ? E("top") : e, y.y = e < v.itemMinHeight ? K + N - v.itemMinHeight : e > E("top") ? J : f, y.width = o < v.itemMinWidth ? v.itemMinWidth : o > E("left") ? E("left") : o, y.x = o < v.itemMinWidth ? q + A - v.itemMinWidth : o > E("left") ? Q : g, y.isGroup === !0) {
            const r = y.width - 2 * p, s = y.height - 2 * p - (y.groupTit ? c : 0);
            y.groupData.forEach((u) => {
              u.width = r * u.groupW, u.x = r * u.groupX, u.height = s * u.groupH, u.y = s * u.groupY;
            });
          }
          break;
        case "top":
          if (y.height = e < v.itemMinHeight ? v.itemMinHeight : e > E("top") ? E("top") : e, y.y = e < v.itemMinHeight ? K + N - v.itemMinHeight : e > E("top") ? J : f, y.isGroup === !0) {
            const r = y.height - 2 * p - (y.groupTit ? c : 0);
            y.groupData.forEach((s) => {
              s.height = r * s.groupH, s.y = r * s.groupY;
            });
          }
          break;
        case "top-right":
          if (y.height = e < v.itemMinHeight ? v.itemMinHeight : e > E("top") ? E("top") : e, y.y = e < v.itemMinHeight ? K + N - v.itemMinHeight : e > E("top") ? J : f, y.width = i < v.itemMinWidth ? v.itemMinWidth : i > E("right") ? E("right") : i, y.isGroup === !0) {
            const r = y.width - 2 * p, s = y.height - 2 * p - (y.groupTit ? c : 0);
            y.groupData.forEach((u) => {
              u.width = r * u.groupW, u.x = r * u.groupX, u.height = s * u.groupH, u.y = s * u.groupY;
            });
          }
          break;
        case "left":
          if (y.width = o < v.itemMinWidth ? v.itemMinWidth : o > E("left") ? E("left") : o, y.x = o < v.itemMinWidth ? q + A - v.itemMinWidth : o > E("left") ? Q : g, y.isGroup === !0) {
            const r = y.width - 2 * p;
            y.groupData.forEach((s) => {
              s.width = r * s.groupW, s.x = r * s.groupX;
            });
          }
          break;
        case "right":
          if (y.width = i < v.itemMinWidth ? v.itemMinWidth : i > E("right") ? E("right") : i, y.isGroup === !0) {
            const r = y.width - 2 * p;
            y.groupData.forEach((s) => {
              s.width = r * s.groupW, s.x = r * s.groupX;
            });
          }
          break;
        case "bottom-left":
          if (y.height = t < v.itemMinHeight ? v.itemMinHeight : t > E("bottom") ? E("bottom") : t, y.width = o < v.itemMinWidth ? v.itemMinWidth : o > E("left") ? E("left") : o, y.x = o < v.itemMinWidth ? q + A - v.itemMinWidth : o > E("left") ? Q : g, y.isGroup === !0) {
            const r = y.width - 2 * p, s = y.height - 2 * p - (y.groupTit ? c : 0);
            y.groupData.forEach((u) => {
              u.width = r * u.groupW, u.x = r * u.groupX, u.height = s * u.groupH, u.y = s * u.groupY;
            });
          }
          break;
        case "bottom":
          if (y.height = t < v.itemMinHeight ? v.itemMinHeight : t > E("bottom") ? E("bottom") : t, y.isGroup === !0) {
            const r = y.height - 2 * p - (y.groupTit ? c : 0);
            y.groupData.forEach((s) => {
              s.height = r * s.groupH, s.y = r * s.groupY;
            });
          }
          break;
        case "bottom-right":
          if (y.height = t < v.itemMinHeight ? v.itemMinHeight : t > E("bottom") ? E("bottom") : t, y.width = i < v.itemMinWidth ? v.itemMinWidth : i > E("right") ? E("right") : i, y.isGroup === !0) {
            const r = y.width - 2 * p, s = y.height - 2 * p - (y.groupTit ? c : 0);
            y.groupData.forEach((u) => {
              u.width = r * u.groupW, u.x = r * u.groupX, u.height = s * u.groupH, u.y = s * u.groupY;
            });
          }
          break;
      }
      let h = T(n.value.filter((r) => r.drag !== !0).filter((r) => r.x < y.x && r.x + r.width > y.x || r.x === y.x || r.x > y.x && r.x < y.x + y.width).filter((r) => r.y < y.y && r.y + r.height > y.y || r.y === y.y || r.y > y.y && r.y < y.y + y.height));
      if (h.length > 0) {
        h.sort((r, s) => {
          const u = r.y, a = s.y;
          return u - a;
        });
        for (let r = 0; r < h.length; r++)
          h.filter((s) => s.id === h[r].id).forEach((s) => {
            s.y += y.y + y.height - s.y, n.value.filter((a) => a.id === s.id)[0].y = s.y;
            const u = (a) => {
              n.value.filter((d) => d.drag !== !0 && d.id !== a.id).filter((d) => d.x < a.x && d.x + d.width > a.x || d.x === a.x || d.x > a.x && d.x < a.x + a.width).filter((d) => d.y < a.y && d.y + d.height > a.y || d.y === a.y || d.y > a.y && d.y < a.y + a.height).forEach((d) => {
                d.y = a.y + a.height, u(d);
              });
            };
            u(s);
          });
      }
      z(!1), tt.value.scrollTo(0, rt.value - it);
    }, Gt = (l) => {
      delete y.drag, gt = "", y = null, window.removeEventListener("mousemove", Dt), window.removeEventListener("mouseup", Gt), z();
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
    }, z = (l = !0) => {
      l === !0 && Ht();
      const i = n.value.map((t) => t.y + t.height);
      i.length > 0 ? rt.value = Math.max(...i) + 50 : rt.value = 0;
    };
    St(
      () => v.ySpace,
      () => {
        v.ySpace >= 0 && Ht();
      }
    );
    const Ht = () => {
      n.value.sort((l, i) => {
        const t = l.y, o = i.y;
        return t - o;
      });
      for (let l = 0; l < n.value.length - 1; l++) {
        if (l === 0 && n.value[l].y > 0) {
          const i = n.value[l].y;
          for (let t = l; t < n.value.length; t++)
            n.value[t].y -= i;
        }
        if (n.value[l + 1].y > n.value[l].y + n.value[l].height) {
          const i = n.value[l + 1].y - (n.value[l].y + n.value[l].height);
          for (let t = l + 1; t < n.value.length; t++)
            n.value[t].y -= i;
        }
      }
      for (let l = 0; l < n.value.length - 1; l++) {
        let i = n.value.findIndex((t) => t.y === n.value[l].y + n.value[l].height);
        if (i !== -1)
          for (let t = i; t < n.value.length; t++)
            n.value[t].y += v.ySpace;
      }
    };
    Jt(() => {
      Wt.observe(S.value);
    });
    const Wt = new ResizeObserver((l) => {
      Bt(L === l[0].contentRect.width ? null : l[0].contentRect.width, it === l[0].contentRect.height ? null : l[0].contentRect.height);
    });
    let yt = !1;
    const Vt = (l = [], i = null) => {
      n.value = T(l), i !== null ? mt(() => {
        const o = S.value.getBoundingClientRect().width / i, e = getComputedStyle(S.value), f = parseInt(e.getPropertyValue("--com-item-border-width").trim()), g = parseInt(e.getPropertyValue("--group-tit-height").trim());
        n.value.forEach((w) => {
          if (w.width *= o, w.height *= o, w.x *= o, w.y *= o, w.isGroup === !0) {
            const p = w.width - 2 * f, c = w.height - 2 * f - (w.groupTit ? g : 0);
            w.groupData.forEach((h) => {
              h.width = p * h.groupW, h.x = p * h.groupX, h.height = c * h.groupH, h.y = c * h.groupY;
            });
          }
        }), z();
      }) : z(), yt = !0, setTimeout(() => {
        yt = !1;
      }, 500);
    }, It = (l, i, t) => {
      const o = i.map((g) => g.y), e = Math.max(...o), f = i.filter((g) => g.y + g.height > e);
      f.sort((g, w) => {
        const p = g.x, c = w.x;
        return p - c;
      });
      for (let g = 0; g < f.length; g++) {
        if (g === 0 && f[g].x >= l.width) {
          l.y = e, l.x = 0;
          break;
        }
        if (f.length > 1 && g !== f.length - 1 && f[g].x + f[g].width + l.width <= f[g + 1].x) {
          l.y = e, l.x = f[g].x + f[g].width;
          break;
        }
        if (g === f.length - 1 && f[g].x + f[g].width + l.width <= t) {
          l.y = e, l.x = f[g].x + f[g].width;
          break;
        }
      }
      if (l.y == null) {
        l.x = 0;
        const g = i.map((w) => w.y + w.height);
        l.y = Math.max(...g);
      }
    }, at = (l, i = null, t = !1) => {
      const o = T(l), e = n.value.filter((f) => f.id === i);
      if (o.id || (o.id = (/* @__PURE__ */ new Date()).getTime() + ""), i && e.length !== 1) {
        try {
        } catch {
        }
        return;
      }
      if (t !== !0)
        if (delete o.x, delete o.y, i) {
          const f = getComputedStyle(S.value), g = parseInt(f.getPropertyValue("--com-item-border-width").trim());
          It(o, e[0].groupData, e[0].width - 2 * g);
        } else
          n.value.length === 0 ? (o.x = 0, o.y = 0) : It(o, n.value, L);
      if (i) {
        e[0].groupData.push(o);
        const f = ft(e[0].groupData, e[0]);
        pt(f);
      } else
        n.value.push(o);
      z();
    }, Z = (l, i = null) => {
      let t = -1;
      const o = n.value.filter((e) => e.id === i);
      if (i ? o.length === 1 && (t = o[0].groupData.findIndex((e) => e.id === l)) : t = n.value.findIndex((e) => e.id === l), t !== -1) {
        if (i)
          if (o[0].groupData.splice(t, 1), o[0].groupData.length === 1)
            ut(i);
          else {
            const e = ft(o[0].groupData, o[0]);
            pt(e);
          }
        else
          n.value.splice(t, 1);
        z();
      } else
        try {
        } catch {
        }
    }, pt = (l) => {
      if (l.id) {
        const i = T(l);
        let t = -1;
        const o = n.value.filter((e) => e.id === i.inGroupId);
        if (i.inGroupId ? o.length === 1 && (t = o[0].groupData.findIndex((e) => e.id === i.id)) : t = n.value.findIndex((e) => e.id === i.id), t !== -1)
          i.inGroupId ? o[0].groupData[t] = i : n.value[t] = i, z();
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, Bt = (l, i) => {
      if (l !== null) {
        const t = L ? l / L : 1;
        L = l;
        const o = getComputedStyle(S.value), e = parseInt(o.getPropertyValue("--com-item-border-width").trim()), f = parseInt(o.getPropertyValue("--group-tit-height").trim());
        yt || (n.value.forEach((g) => {
          if (g.width *= t, g.height *= t, g.x *= t, g.y *= t, g.isGroup === !0) {
            const w = g.width - 2 * e, p = g.height - 2 * e - (g.groupTit ? f : 0);
            g.groupData.forEach((c) => {
              c.width = w * c.groupW, c.x = w * c.groupX, c.height = p * c.groupH, c.y = p * c.groupY;
            });
          }
        }), z());
      }
      i !== null && (it = i);
    }, Ct = (l) => {
      l.showPop || (n.value.forEach((i) => {
        delete i.showPop, i.groupData && i.groupData.forEach((t) => {
          delete t.showPop;
        });
      }), l.showPop = !0, window.addEventListener("click", et));
    }, et = () => {
      n.value.forEach((l) => {
        delete l.showPop, l.groupData && l.groupData.forEach((i) => {
          delete i.showPop;
        });
      }), window.removeEventListener("click", et);
    }, b = F(!1), Tt = (l) => {
      const i = n.value.findIndex((t) => t.id === l);
      if (i !== -1)
        n.value[i].checked = !0, n.value[i].disabled = !0, b.value = !0, U("showGroup", b.value);
      else
        try {
        } catch {
        }
    }, Pt = () => {
      b.value = !1, n.value.forEach((l) => {
        delete l.checked, delete l.disabled, l.groupData && l.groupData.forEach((i) => {
          delete i.checked, delete i.disabled;
        });
      }), U("showGroup", b.value);
    }, At = (l) => {
      l.checked = !l.checked, U("updateChecked", n.value.filter((i) => i.checked).length);
    }, ft = (l, i) => {
      const t = T(l), o = T(i);
      t.sort((h, r) => {
        const s = h.x, u = r.x;
        return s - u;
      });
      for (let h = 0; h < t.length - 1; h++) {
        if (h === 0 && t[h].x > 0) {
          const r = t[h].x;
          for (let s = h; s < t.length; s++)
            t[s].x -= r;
        }
        if (t[h + 1].x > t[h].x + t[h].width) {
          const r = t[h + 1].x - (t[h].x + t[h].width);
          for (let s = h + 1; s < t.length; s++)
            t[s].x -= r;
        }
      }
      t.sort((h, r) => {
        const s = h.y, u = r.y;
        return s - u;
      });
      for (let h = 0; h < t.length - 1; h++) {
        if (h === 0 && t[h].y > 0) {
          const r = t[h].y;
          for (let s = h; s < t.length; s++)
            t[s].y -= r;
        }
        if (t[h + 1].y > t[h].y + t[h].height) {
          const r = t[h + 1].y - (t[h].y + t[h].height);
          for (let s = h + 1; s < t.length; s++)
            t[s].y -= r;
        }
      }
      const e = t.map((h) => h.x + h.width), f = Math.max(...e), g = t.map((h) => h.y + h.height), w = Math.max(...g);
      t.forEach((h) => {
        h.inGroupId || (h.inGroupId = o.id), h.groupW = h.width / f, h.groupH = h.height / w, h.groupX = h.x / f, h.groupY = h.y / w, h.isObstacle = h.x + h.width === f && h.y === 0;
      });
      const p = getComputedStyle(S.value), c = parseInt(p.getPropertyValue("--com-item-border-width").trim());
      return o.width = f + 2 * c, o.height = w + 2 * c, o.groupData = [...t], o;
    }, Nt = () => {
      const l = n.value.filter((i) => i.checked);
      if (l.length > 1) {
        const i = {
          id: (/* @__PURE__ */ new Date()).getTime() + "G",
          isGroup: !0,
          groupTit: ""
        }, t = ft(l, i);
        t.groupData.forEach((o) => {
          Z(o.id);
        }), at(t), z();
      }
      Pt();
    }, Yt = (l, i) => {
      const t = n.value.filter((o) => o.id === i)[0];
      if (t) {
        const o = t.groupData.filter((e) => e.id === l)[0];
        if (o)
          t.groupData.length === 2 ? ut(i) : (delete o.inGroupId, delete o.groupW, delete o.groupH, delete o.groupX, delete o.groupY, delete o.isObstacle, Z(o.id, t.id), at(o), z());
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, ut = (l) => {
      const i = n.value.filter((t) => t.id === l)[0];
      if (i)
        Z(i.id), i.groupData.forEach((t) => {
          delete t.inGroupId, delete t.groupW, delete t.groupH, delete i.groupX, delete i.groupY, delete i.isObstacle, t.x += i.x, t.y += i.y, at(t, null, !0);
        }), z();
      else
        try {
        } catch {
        }
    }, Kt = (l = "", i) => {
      const t = n.value.filter((o) => o.id === i)[0];
      if (t) {
        if (!t.groupTit || !l) {
          const e = getComputedStyle(S.value), f = parseInt(e.getPropertyValue("--group-tit-height").trim());
          t.groupTit && !l && (t.height -= f), !t.groupTit && l && (t.height += f);
        }
        t.groupTit = l;
        const o = (e) => {
          n.value.filter((g) => g.id !== e.id).filter((g) => g.x < e.x && g.x + g.width > e.x || g.x === e.x || g.x > e.x && g.x < e.x + e.width).filter((g) => g.y < e.y && g.y + g.height > e.y || g.y === e.y || g.y > e.y && g.y < e.y + e.height).forEach((g) => {
            g.y = e.y + e.height, o(g);
          });
        };
        o(t), z();
      } else
        try {
        } catch {
        }
    }, qt = () => ({ data: T(n.value), width: L });
    return Qt(() => {
      Wt.unobserve(S.value), window.removeEventListener("click", et);
    }), B({ init: Vt, addItem: at, deleteItem: Z, updateItem: pt, openGroup: Tt, closeGroup: Pt, addGroup: Nt, removeGroupItem: Yt, removeGroup: ut, changeGroupTit: Kt, getData: qt }), (l, i) => (O(), D("div", {
      class: "vue-drag-component-plus",
      ref_key: "pageRef",
      ref: S
    }, [
      X("div", {
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
          X("div", te, [
            t.isGroup ? (O(), D(dt, { key: 0 }, [
              t.groupTit ? (O(), D("div", {
                key: 0,
                class: "group-item-tit",
                title: t.groupTit
              }, R(t.groupTit), 9, ee)) : C("", !0),
              X("div", {
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
                    X("p", null, R(e.width) + "," + R(e.height), 1),
                    X("p", null, R(e.x) + "," + R(e.y), 1)
                  ]),
                  !M.seeModel && !G(b) && G(k) === null && G(y) === null ? (O(), D("div", {
                    key: 0,
                    class: "setting-box",
                    style: m({ display: e.showPop ? "flex" : "none" }),
                    onMousedown: Y((g) => null, ["prevent", "stop"])
                  }, [
                    Rt($t, {
                      iconObj: M.settingIcon,
                      onClick: Y((g) => Ct(e), ["prevent", "stop"])
                    }, null, 8, ["iconObj", "onClick"])
                  ], 36)) : C("", !0),
                  e.showPop ? (O(), D("div", {
                    key: 1,
                    class: "setting-box-pop",
                    onMousedown: Y((g) => null, ["prevent", "stop"])
                  }, [
                    j(l.$slots, "setPopNormal", {
                      data: T(e)
                    }, () => [
                      X("div", {
                        class: "setting-box-pop-item",
                        onClick: (g) => Yt(e.id, e.inGroupId)
                      }, "移出组合", 8, le),
                      X("div", {
                        class: "setting-box-pop-item",
                        onClick: (g) => Z(e.id, e.inGroupId)
                      }, "删除", 8, ie)
                    ])
                  ], 32)) : C("", !0)
                ], 6))), 128))
              ], 2)
            ], 64)) : j(l.$slots, "item", {
              key: 1,
              data: t
            }, () => [
              X("p", null, R(t.width) + "," + R(t.height), 1),
              X("p", null, R(t.x) + "," + R(t.y), 1)
            ]),
            !t.isGroup && t.notGroup !== !0 && G(b) ? (O(), D("div", {
              key: 2,
              class: lt(["group-checkbox", t.checked ? "is-checked" : "", t.disabled ? "disabled" : ""]),
              onClick: (e) => t.disabled ? null : At(t)
            }, null, 10, re)) : C("", !0),
            !M.seeModel && !G(b) && G(k) === null && G(y) === null ? (O(), D("div", {
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
                }, " 设置组合标题", 8, oe)),
                X("div", {
                  class: "setting-box-pop-item",
                  onClick: (e) => ut(t.id)
                }, "解除组合", 8, se)
              ]) : j(l.$slots, "setPopNormal", {
                key: 1,
                data: T(t)
              }, () => [
                t.notGroup !== !0 ? (O(), D("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (e) => Tt(t.id)
                }, "组合", 8, ne)) : C("", !0),
                X("div", {
                  class: "setting-box-pop-item",
                  onClick: (e) => Z(t.id)
                }, "删除", 8, he)
              ])
            ], 34)) : C("", !0)
          ]),
          !M.seeModel && !G(b) && !t.move && t.static !== !0 && t.resizable !== !1 ? (O(), D(dt, { key: 0 }, [
            G($).indexOf("topLeft") !== -1 ? (O(), D("div", {
              key: 0,
              class: "resize-line top-left",
              onMousedown: Y((e) => V(e, t, "top-left"), ["prevent", "stop"])
            }, null, 40, ae)) : C("", !0),
            G($).indexOf("top") !== -1 ? (O(), D("div", {
              key: 1,
              class: "resize-line top",
              onMousedown: Y((e) => V(e, t, "top"), ["prevent", "stop"])
            }, null, 40, ue)) : C("", !0),
            G($).indexOf("topRight") !== -1 ? (O(), D("div", {
              key: 2,
              class: "resize-line top-right",
              onMousedown: Y((e) => V(e, t, "top-right"), ["prevent", "stop"])
            }, null, 40, ce)) : C("", !0),
            G($).indexOf("left") !== -1 ? (O(), D("div", {
              key: 3,
              class: "resize-line left",
              onMousedown: Y((e) => V(e, t, "left"), ["prevent", "stop"])
            }, null, 40, de)) : C("", !0),
            G($).indexOf("right") !== -1 ? (O(), D("div", {
              key: 4,
              class: "resize-line right",
              onMousedown: Y((e) => V(e, t, "right"), ["prevent", "stop"])
            }, null, 40, ge)) : C("", !0),
            G($).indexOf("bottomLeft") !== -1 ? (O(), D("div", {
              key: 5,
              class: "resize-line bottom-left",
              onMousedown: Y((e) => V(e, t, "bottom-left"), ["prevent", "stop"])
            }, null, 40, ye)) : C("", !0),
            G($).indexOf("bottom") !== -1 ? (O(), D("div", {
              key: 6,
              class: "resize-line bottom",
              onMousedown: Y((e) => V(e, t, "bottom"), ["prevent", "stop"])
            }, null, 40, pe)) : C("", !0),
            G($).indexOf("bottomRight") !== -1 ? (O(), D("div", {
              key: 7,
              class: "resize-line bottom-right",
              onMousedown: Y((e) => V(e, t, "bottom-right"), ["prevent", "stop"])
            }, null, 40, fe)) : C("", !0)
          ], 64)) : C("", !0)
        ], 46, jt))), 128)),
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
        X("div", {
          class: "height-bg",
          style: m({ height: G(rt) + "px" })
        }, null, 4),
        G(n).length === 0 ? (O(), D("div", xe, [
          j(l.$slots, "empty", {}, () => [
            Zt(" 暂无数据 ")
          ])
        ])) : C("", !0)
      ], 512)
    ], 512));
  }
}, we = [ve], Me = {
  install(M) {
    we.forEach((B) => {
      M.component("vueDragComponentPlus", B);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Me);
export {
  Me as default
};
