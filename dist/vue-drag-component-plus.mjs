import { resolveComponent as re, openBlock as D, createBlock as kt, resolveDynamicComponent as Vt, normalizeProps as At, mergeProps as vt, withCtx as oe, createElementBlock as O, toDisplayString as A, watch as Bt, ref as $, onMounted as ae, onBeforeUnmount as se, createElementVNode as z, Fragment as lt, renderList as Et, unref as M, normalizeClass as Q, normalizeStyle as V, withModifiers as Y, createCommentVNode as H, renderSlot as it, createVNode as Nt, createTextVNode as ne, isVNode as _t, nextTick as bt } from "vue";
const Kt = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(E) {
    return (B, Dt) => {
      const Z = re("el-icon");
      return E.iconObj.type === "custom" ? (D(), kt(Vt(E.iconObj.icon), At(vt({ key: 0 }, E.iconObj.attrs)), null, 16)) : E.iconObj.type === "el" ? (D(), kt(Z, At(vt({ key: 1 }, E.iconObj.attrs)), {
        default: oe(() => [
          (D(), kt(Vt(E.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : E.iconObj.type === "iconfont" ? (D(), O("i", vt({
        key: 2,
        class: ["icon iconfont", "icon-" + E.iconObj.icon]
      }, E.iconObj.attrs), null, 16)) : (D(), O("i", vt({
        key: 3,
        class: E.iconObj.type
      }, E.iconObj.attrs), A(E.iconObj.icon), 17));
    };
  }
};
const he = ["onMousedown", "onMouseenter", "onMouseleave"], ue = { class: "com-item-box" }, ce = ["title"], de = { class: "com-item-box-content" }, ye = ["onClick"], pe = ["onClick"], ge = {
  key: 1,
  class: "com-item-box-content"
}, fe = ["onClick"], xe = ["onClick"], ve = ["onClick"], we = ["onClick"], Me = ["onClick"], ke = ["onMousedown"], Ee = ["onMousedown"], De = ["onMousedown"], Oe = ["onMousedown"], Se = ["onMousedown"], Ge = ["onMousedown"], We = ["onMousedown"], He = ["onMousedown"], Ie = {
  key: 2,
  class: "com-empty"
}, Pe = {
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
    // 顶部组件添加ySpace间距
    addFirstSpace: {
      type: Boolean,
      default: !1
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
      validator(E, B) {
        return E >= 0;
      }
    },
    // 组件项最小宽度
    itemMinWidth: {
      type: Number,
      default: 15,
      validator(E, B) {
        return E >= 15;
      }
    },
    // 组件项最小高度
    itemMinHeight: {
      type: Number,
      default: 15,
      validator(E, B) {
        return E >= 15;
      }
    },
    // 纵向相邻元素的自动间距
    ySpace: {
      type: Number,
      default: 7,
      validator(E, B) {
        return E >= 0;
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
      validator(E, B) {
        return E >= 1;
      }
    }
  },
  emits: ["showGroup", "updateChecked", "showTitPop"],
  setup(E, { expose: B, emit: Dt }) {
    const Z = Dt, v = E, I = (i) => {
      if (typeof i == "object" && !_t(i) && i !== null && !(i instanceof Date)) {
        let e = i instanceof Array ? [] : {};
        for (let t in i)
          e[t] = typeof i[t] == "object" && !_t(i[t]) && i[t] !== null && !(i[t] instanceof Date) ? I(i[t]) : i[t];
        return e;
      } else
        return i;
    }, Ot = () => {
      v.insertResizeKeys.forEach((i) => {
        v.excludeResizeKeys.indexOf(i) === -1 && N.value.push(i);
      });
    };
    Bt(
      () => [v.insertResizeKeys, v.excludeResizeKeys],
      () => {
        Ot();
      }
    );
    const N = $([]);
    Ot();
    const R = $(null);
    let _ = null, St = null;
    const Ft = $(null), rt = $(0), ot = $(null), at = $(null), st = $(null), nt = $(null), m = (i) => {
      const e = I(i);
      if (i === null)
        ot.value = null, at.value = null, st.value = null, nt.value = null;
      else {
        const t = getComputedStyle(R.value), o = parseInt(t.getPropertyValue("--auxiliary-width").trim()), l = c.value.filter((a) => a.id !== e.id).map((a) => a.y), f = c.value.filter((a) => a.id !== e.id).map((a) => a.y + a.height - 1), d = [...l, ...f];
        d.sort(), d.filter((a) => a <= e.y && e.y - v.auxiliarySpace < a || a >= e.y && e.y + v.auxiliarySpace > a).length > 0 ? ot.value = e.y : ot.value = null, d.filter((a) => a <= e.y + e.height - 1 && e.y + e.height - 1 - v.auxiliarySpace < a || a >= e.y + e.height - 1 && e.y + e.height - 1 + v.auxiliarySpace > a).length > 0 ? at.value = e.y + e.height - o : at.value = null;
        const x = c.value.filter((a) => a.id !== e.id).map((a) => a.x), p = c.value.filter((a) => a.id !== e.id).map((a) => a.x + a.width - 1), n = [...x, ...p];
        n.sort(), n.filter((a) => a <= e.x && e.x - v.auxiliarySpace < a || a >= e.x && e.x + v.auxiliarySpace > a).length > 0 ? st.value = e.x : st.value = null, n.filter((a) => a <= e.x + e.width - 1 && e.x + e.width - 1 - v.auxiliarySpace < a || a >= e.x + e.width - 1 && e.x + e.width - 1 + v.auxiliarySpace > a).length > 0 ? nt.value = e.x + e.width - o : nt.value = null;
      }
    }, c = $([]), qt = (i, e) => {
      let t = i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector;
      for (; i && !t.call(i, e); )
        i = i.parentElement;
      return i;
    };
    let W = null, Gt = null, Wt = null;
    const P = $({}), Ut = (i, e) => {
      ht(), W = e, P.value = I(c.value[W]), c.value[W].move = !0, m(c.value[W]);
      const t = qt(i.target, ".com-item");
      Gt = i.clientX - t.offsetLeft, Wt = i.clientY - t.offsetTop, window.addEventListener("mousemove", Ht), window.addEventListener("mouseup", It);
    }, Ht = (i) => {
      const e = i.clientX - Gt, t = i.clientY - Wt, o = e <= b("left") ? b("left") : e >= b("right") ? b("right") : e, l = t <= b("top") ? b("top") : t >= b("bottom") ? b("bottom") : t, f = o - c.value[W].x, d = l - c.value[W].y, x = `${f > 3 ? "right" : f < -3 ? "left" : ""}_${d > 0 ? "bottom" : d < 0 ? "top" : ""}`;
      c.value[W].x = o, c.value[W].y = l, m(c.value[W]);
      let p = I(c.value.filter((n) => n.move !== !0).filter((n) => n.x < o && n.x + n.width > o || n.x === o || n.x > o && n.x < o + c.value[W].width).filter((n) => n.y < l && n.y + n.height > l || n.y === l || n.y > l && n.y < l + c.value[W].height));
      if (p.length === 0)
        P.value.x = o, P.value.y = l;
      else {
        if (x.indexOf("top") !== -1) {
          p = p.filter((r) => r.y < P.value.y);
          const n = Math.min(...p.map((r) => r.y + r.height));
          p.forEach((r) => {
            Math.abs(r.y + r.height - n) < 5 && (r.y = n - r.height);
          });
          let a = P.value.y - l, y = !0, s = [...p];
          const u = (r) => {
            I(c.value.filter((h) => h.move !== !0 && h.y + h.height - r.y <= a + 3 && h.y + h.height - r.y >= 0).filter((h) => h.x < r.x && h.x + h.width > r.x || h.x >= r.x && h.x < r.x + r.width)).forEach((h) => {
              h.y + h.height !== r.y && (h.y = r.y - h.height), s.findIndex((S) => S.id === h.id) === -1 && (s.push(h), u(h));
            });
          };
          if (p.forEach((r) => {
            u(r);
          }), s.sort((r, w) => {
            const h = r.y, S = w.y;
            return h - S;
          }), (s.length === 0 || s.filter((r) => r.y === 0).length > 0) && (y = !1), y) {
            let r = 0;
            s.filter((h) => h.y === s[0].y).forEach((h) => {
              I(c.value.filter((k) => k.move !== !0 && k.y + k.height < h.y).filter((k) => k.x < h.x && k.x + k.width > h.x || k.x >= h.x && k.x < h.x + h.width)).forEach((k) => {
                k.y + k.height > r && (r = k.y + k.height);
              });
            }), r = s[0].y - r, r < a && (a = r), s.forEach((h) => {
              h.y -= a, c.value.filter((S) => S.id === h.id)[0].y = h.y;
            }), P.value.x = o, P.value.y = c.value.filter((h) => h.id === s[s.length - 1].id)[0].y + c.value.filter((h) => h.id === s[s.length - 1].id)[0].height;
          } else {
            let r = 0;
            p.forEach((S) => {
              const k = c.value.filter((T) => T.move !== !0).filter((T) => T.x < S.x && T.x + T.width > S.x || T.x === S.x || T.x > S.x && T.x < S.x + S.width).filter((T) => T.y > S.y + S.height);
              k.length > 0 && (r = Math.min(...k.map((T) => T.y)));
            });
            const w = r === 0 ? 0 : r - P.value.height - (Math.max(...p.map((S) => S.y + S.height)) - Math.min(...p.map((S) => S.y))), h = w === 0 ? l + P.value.height - Math.min(...p.map((S) => S.y)) : r - Math.min(...p.map((S) => S.y)) - (Math.max(...p.map((S) => S.y + S.height)) - Math.min(...p.map((S) => S.y)));
            if (w === 0 || l <= w) {
              p.filter((k) => k.y < P.value.y).forEach((k) => {
                k.y += h, c.value.filter((T) => T.id === k.id)[0].y = k.y;
              }), P.value.x = o, P.value.y = l;
              const S = (k) => {
                c.value.filter((C) => C.move !== !0 && C.id !== k.id).filter((C) => C.x < k.x && C.x + C.width > k.x || C.x === k.x || C.x > k.x && C.x < k.x + k.width).filter((C) => C.y < k.y && C.y + C.height > k.y || C.y === k.y || C.y > k.y && C.y < k.y + k.height).forEach((C) => {
                  C.y = k.y + k.height, S(C);
                });
              };
              c.value.forEach((k) => S(k));
            }
          }
          p = I(c.value.filter((r) => r.move !== !0).filter((r) => r.x < o && r.x + r.width > o || r.x === o || r.x > o && r.x < o + c.value[W].width).filter((r) => r.y < l && r.y + r.height > l || r.y === l || r.y > l && r.y < l + c.value[W].height));
        }
        if (x.indexOf("bottom") !== -1) {
          let n = 0;
          p.forEach((s) => {
            const u = c.value.filter((r) => r.move !== !0).filter((r) => r.x < s.x && r.x + r.width > s.x || r.x === s.x || r.x > s.x && r.x < s.x + s.width).filter((r) => r.y + r.height < s.y);
            u.length > 0 && (n = Math.max(...u.map((r) => r.y + r.height)));
          });
          const a = n + (Math.max(...p.map((s) => s.height + s.y)) - Math.min(...p.map((s) => s.y))), y = Math.min(...p.map((s) => s.y)) - n;
          if (l >= a) {
            let s = !0;
            p.filter((r) => r.y > P.value.y).forEach((r) => {
              r.y -= y, c.value.filter((h) => h.id === r.id)[0].y = r.y;
              const w = c.value.filter((h) => h.move !== !0 && h.id !== r.id).filter((h) => h.x < r.x && h.x + h.width > r.x || h.x === r.x || h.x > r.x && h.x < r.x + r.width).filter((h) => h.y < r.y && h.y + h.height > r.y || h.y === r.y || h.y > r.y && h.y < r.y + r.height);
              w.length > 0 && (r.y = Math.max(...w.map((h) => h.y + h.height)), c.value.filter((h) => h.id === r.id)[0].y = r.y);
            }), P.value.x = o, s && (P.value.y = a);
            const u = (r) => {
              c.value.filter((h) => h.id !== r.id).filter((h) => h.x < r.x && h.x + h.width > r.x || h.x === r.x || h.x > r.x && h.x < r.x + r.width).filter((h) => h.y < r.y && h.y + h.height > r.y || h.y === r.y || h.y > r.y && h.y < r.y + r.height).forEach((h) => {
                h.y = r.y + r.height, h.move === !0 && (P.value.y = h.y, s = !1), u(h);
              });
            };
            c.value.forEach((r) => u(r)), p = I(c.value.filter((r) => r.move !== !0).filter((r) => r.x < o && r.x + r.width > o || r.x === o || r.x > o && r.x < o + c.value[W].width).filter((r) => r.y < l && r.y + r.height > l || r.y === l || r.y > l && r.y < l + c.value[W].height));
          }
        }
        if (((x.indexOf("top") !== -1 || x.indexOf("bottom") !== -1) && (x.indexOf("right") !== -1 || x.indexOf("left") !== -1) && Math.abs(f) > 8 || x.indexOf("top") === -1 && x.indexOf("bottom") === -1 && (x.indexOf("right") !== -1 || x.indexOf("left") !== -1)) && p.length > 0) {
          p.sort((a, y) => {
            const s = a.y, u = y.y;
            return s - u;
          });
          let n = !0;
          for (let a = 0; a < p.length; a++) {
            if (n) {
              const y = I(c.value);
              for (let s = 0; s <= a; s++) {
                let u = null;
                const r = y.filter((w) => w.move !== !0 && w.y < p[s].y).filter((w) => w.x < p[s].x && w.x + w.width > p[s].x || w.x === p[s].x || w.x > p[s].x && w.x < p[s].x + p[s].width);
                if (r.length === 0 ? u = 0 : u = Math.max(...r.map((w) => w.y + w.height)), s === a) {
                  if (p[s].y - (p[s].y + p[s].height - l) < u) {
                    n = !1;
                    break;
                  }
                } else if (p[s].y - p[a].height < u) {
                  n = !1;
                  break;
                } else
                  y.filter((w) => w.id === p[s].id)[0].y -= p[a].height;
              }
            }
            if (n) {
              p[a].y -= p[a].y + p[a].height - l, c.value.filter((y) => y.id === p[a].id)[0].y = p[a].y;
              for (let y = a; y > 0; y--)
                p[a - 1].y -= p[a].height, c.value.filter((s) => s.id === p[a - 1].id)[0].y = p[a - 1].y;
            } else
              p.filter((y) => y.id === p[a].id).forEach((y) => {
                y.y += c.value[W].y + c.value[W].height - y.y, c.value.filter((u) => u.id === y.id)[0].y = y.y;
                const s = (u) => {
                  c.value.filter((w) => w.move !== !0 && w.id !== u.id).filter((w) => w.x < u.x && w.x + w.width > u.x || w.x === u.x || w.x > u.x && w.x < u.x + u.width).filter((w) => w.y < u.y && w.y + w.height > u.y || w.y === u.y || w.y > u.y && w.y < u.y + u.height).forEach((w) => {
                    w.y = u.y + u.height, s(w);
                  });
                };
                s(y);
              });
          }
          P.value.x = o;
        }
      }
      X(!1);
    }, It = () => {
      window.removeEventListener("mousemove", Ht), window.removeEventListener("mouseup", It), delete c.value[W].move, c.value[W].x = P.value.x, c.value[W].y = P.value.y, W = null, m(null), X();
    }, b = (i) => {
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
    let g = null, wt = "", ct = 0, dt = 0, F = 0, q = 0, U = 0, J = 0, j = 0, yt = 0, tt = 0, pt = 0;
    const K = (i, e, t) => {
      ht(), g = e, wt = t, ct = i.clientX, dt = i.clientY, F = e.width, q = e.height, U = e.y, J = e.x, g.drag = !0, m(g);
      const o = c.value.filter((n) => n.static === !0 && (n.x < e.x ? n.x + n.width >= e.x : n.x <= e.x + e.width)), l = c.value.filter((n) => n.static === !0 && (n.y < e.y ? n.y + n.height >= e.y : n.y <= e.y + e.height)), f = o.filter((n) => n.y + n.height <= e.y).map((n) => n.y + n.height);
      f.length > 0 ? j = Math.max(...f) : j = 0;
      const d = o.filter((n) => n.y >= e.y + e.height).map((n) => n.y);
      d.length > 0 ? yt = Math.min(...d) : yt = 0;
      const x = l.filter((n) => n.x + n.width <= e.x).map((n) => n.x + n.width);
      x.length > 0 ? tt = Math.max(...x) : tt = 0;
      const p = l.filter((n) => n.x >= e.x + e.width).map((n) => n.x);
      p.length > 0 ? pt = Math.min(...p) : pt = 0, window.addEventListener("mousemove", Pt), window.addEventListener("mouseup", Ct);
    }, Pt = (i) => {
      const e = F + (i.clientX - ct), t = q + (i.clientY - dt), o = F - (i.clientX - ct), l = q - (i.clientY - dt), f = U + (i.clientY - dt), d = J + (i.clientX - ct), x = getComputedStyle(R.value), p = parseInt(x.getPropertyValue("--com-item-border-width").trim()), n = parseInt(x.getPropertyValue("--group-tit-height").trim());
      switch (wt) {
        case "top-left":
          if (g.height = l < v.itemMinHeight ? v.itemMinHeight : l > G("top") ? G("top") : l, g.y = l < v.itemMinHeight ? U + q - v.itemMinHeight : l > G("top") ? j : f, g.width = o < v.itemMinWidth ? v.itemMinWidth : o > G("left") ? G("left") : o, g.x = o < v.itemMinWidth ? J + F - v.itemMinWidth : o > G("left") ? tt : d, g.isGroup === !0) {
            const y = g.width - 2 * p, s = g.height - 2 * p - (g.groupTit ? n : 0);
            g.groupData.forEach((u) => {
              u.width = y * u.groupW, u.x = y * u.groupX, u.height = s * u.groupH, u.y = s * u.groupY;
            });
          }
          break;
        case "top":
          if (g.height = l < v.itemMinHeight ? v.itemMinHeight : l > G("top") ? G("top") : l, g.y = l < v.itemMinHeight ? U + q - v.itemMinHeight : l > G("top") ? j : f, g.isGroup === !0) {
            const y = g.height - 2 * p - (g.groupTit ? n : 0);
            g.groupData.forEach((s) => {
              s.height = y * s.groupH, s.y = y * s.groupY;
            });
          }
          break;
        case "top-right":
          if (g.height = l < v.itemMinHeight ? v.itemMinHeight : l > G("top") ? G("top") : l, g.y = l < v.itemMinHeight ? U + q - v.itemMinHeight : l > G("top") ? j : f, g.width = e < v.itemMinWidth ? v.itemMinWidth : e > G("right") ? G("right") : e, g.isGroup === !0) {
            const y = g.width - 2 * p, s = g.height - 2 * p - (g.groupTit ? n : 0);
            g.groupData.forEach((u) => {
              u.width = y * u.groupW, u.x = y * u.groupX, u.height = s * u.groupH, u.y = s * u.groupY;
            });
          }
          break;
        case "left":
          if (g.width = o < v.itemMinWidth ? v.itemMinWidth : o > G("left") ? G("left") : o, g.x = o < v.itemMinWidth ? J + F - v.itemMinWidth : o > G("left") ? tt : d, g.isGroup === !0) {
            const y = g.width - 2 * p;
            g.groupData.forEach((s) => {
              s.width = y * s.groupW, s.x = y * s.groupX;
            });
          }
          break;
        case "right":
          if (g.width = e < v.itemMinWidth ? v.itemMinWidth : e > G("right") ? G("right") : e, g.isGroup === !0) {
            const y = g.width - 2 * p;
            g.groupData.forEach((s) => {
              s.width = y * s.groupW, s.x = y * s.groupX;
            });
          }
          break;
        case "bottom-left":
          if (g.height = t < v.itemMinHeight ? v.itemMinHeight : t > G("bottom") ? G("bottom") : t, g.width = o < v.itemMinWidth ? v.itemMinWidth : o > G("left") ? G("left") : o, g.x = o < v.itemMinWidth ? J + F - v.itemMinWidth : o > G("left") ? tt : d, g.isGroup === !0) {
            const y = g.width - 2 * p, s = g.height - 2 * p - (g.groupTit ? n : 0);
            g.groupData.forEach((u) => {
              u.width = y * u.groupW, u.x = y * u.groupX, u.height = s * u.groupH, u.y = s * u.groupY;
            });
          }
          break;
        case "bottom":
          if (g.height = t < v.itemMinHeight ? v.itemMinHeight : t > G("bottom") ? G("bottom") : t, g.isGroup === !0) {
            const y = g.height - 2 * p - (g.groupTit ? n : 0);
            g.groupData.forEach((s) => {
              s.height = y * s.groupH, s.y = y * s.groupY;
            });
          }
          break;
        case "bottom-right":
          if (g.height = t < v.itemMinHeight ? v.itemMinHeight : t > G("bottom") ? G("bottom") : t, g.width = e < v.itemMinWidth ? v.itemMinWidth : e > G("right") ? G("right") : e, g.isGroup === !0) {
            const y = g.width - 2 * p, s = g.height - 2 * p - (g.groupTit ? n : 0);
            g.groupData.forEach((u) => {
              u.width = y * u.groupW, u.x = y * u.groupX, u.height = s * u.groupH, u.y = s * u.groupY;
            });
          }
          break;
      }
      m(g);
      let a = I(c.value.filter((y) => y.drag !== !0).filter((y) => y.x < g.x && y.x + y.width > g.x || y.x === g.x || y.x > g.x && y.x < g.x + g.width).filter((y) => y.y < g.y && y.y + y.height > g.y || y.y === g.y || y.y > g.y && y.y < g.y + g.height));
      if (a.length > 0) {
        a.sort((y, s) => {
          const u = y.y, r = s.y;
          return u - r;
        });
        for (let y = 0; y < a.length; y++)
          a.filter((s) => s.id === a[y].id).forEach((s) => {
            s.y += g.y + g.height - s.y, c.value.filter((r) => r.id === s.id)[0].y = s.y;
            const u = (r) => {
              c.value.filter((h) => h.drag !== !0 && h.id !== r.id).filter((h) => h.x < r.x && h.x + h.width > r.x || h.x === r.x || h.x > r.x && h.x < r.x + r.width).filter((h) => h.y < r.y && h.y + h.height > r.y || h.y === r.y || h.y > r.y && h.y < r.y + r.height).forEach((h) => {
                h.y = r.y + r.height, u(h);
              });
            };
            u(s);
          });
      }
      X(!1);
    }, Ct = (i) => {
      delete g.drag, wt = "", g = null, m(null), window.removeEventListener("mousemove", Pt), window.removeEventListener("mouseup", Ct), X();
    }, G = (i) => {
      switch (i) {
        case "top":
          return U + q - j;
        case "left":
          return J + F - tt;
        case "right":
          return (pt > 0 ? pt : _) - J;
        case "bottom":
          return yt > 0 ? yt - U : 999999999;
      }
    }, X = (i = !0) => {
      i === !0 && Tt();
      const e = c.value.map((t) => t.y + t.height);
      e.length > 0 ? rt.value = Math.max(...e) : rt.value = 0;
    };
    Bt(
      () => v.ySpace,
      () => {
        v.ySpace >= 0 && Tt();
      }
    );
    const Tt = () => {
      const i = I(c.value).sort((e, t) => {
        const o = e.y, l = t.y;
        return o - l;
      });
      for (let e = 0; e < i.length; e++) {
        if (e === 0 && i[e].y > 0) {
          const t = i[e].y;
          for (let o = e; o < i.length; o++)
            i[o].y -= t, c.value.filter((l) => l.id === i[o].id)[0].y = i[o].y;
        }
        if (e < i.length - 1 && i[e + 1].y > i[e].y + i[e].height) {
          const t = I(i.slice(0, e + 1));
          if (i[e + 1].y > Math.max(...t.map((o) => o.y + o.height))) {
            const o = i[e + 1].y - Math.max(...t.map((l) => l.y + l.height));
            for (let l = e + 1; l < i.length; l++)
              i[l].y -= o, c.value.filter((f) => f.id === i[l].id)[0].y = i[l].y;
          }
        }
      }
      for (let e = 0; e < i.length - 1; e++) {
        let t = i.findIndex((o) => o.y === i[e].y + i[e].height);
        if (t !== -1)
          for (let o = t; o < i.length; o++)
            i[o].y += v.ySpace, c.value.filter((l) => l.id === i[o].id)[0].y = i[o].y;
      }
      v.addFirstSpace && c.value.forEach((e) => e.y += v.ySpace);
    };
    ae(() => {
      Yt.observe(R.value);
    });
    const Yt = new ResizeObserver((i) => {
      mt(_ === i[0].contentRect.width ? null : i[0].contentRect.width, St === i[0].contentRect.height ? null : i[0].contentRect.height);
    });
    let Mt = !1;
    const Jt = (i = [], e = null) => {
      c.value = I(i), c.value.filter((t) => t.isGroup === !0).forEach((t) => {
        if (t.isGroup === !0)
          if (t.groupData.length < 2)
            ut(t.id);
          else {
            const o = xt(t.groupData, t);
            ft(o);
          }
      }), e !== null ? bt(() => {
        const o = R.value.getBoundingClientRect().width / e, l = getComputedStyle(R.value), f = parseInt(l.getPropertyValue("--com-item-border-width").trim()), d = parseInt(l.getPropertyValue("--group-tit-height").trim());
        c.value.forEach((x) => {
          if (x.width *= o, x.height *= o, x.x *= o, x.y *= o, x.isGroup === !0) {
            const p = x.width - 2 * f, n = x.height - 2 * f - (x.groupTit ? d : 0);
            x.groupData.forEach((a) => {
              a.width = p * a.groupW, a.x = p * a.groupX, a.height = n * a.groupH, a.y = n * a.groupY;
            });
          }
        }), X();
      }) : X(), Mt = !0, setTimeout(() => {
        Mt = !1;
      }, 500);
    }, Qt = (i, e) => {
      e.showSet = !0;
    }, Zt = (i, e) => {
      delete e.showSet;
    }, Xt = (i, e, t) => {
      const o = e.map((d) => d.y), l = Math.max(...o), f = e.filter((d) => d.y + d.height > l);
      f.sort((d, x) => {
        const p = d.x, n = x.x;
        return p - n;
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
    }, gt = (i, e = null, t = !1) => {
      const o = I(i), l = c.value.filter((f) => f.id === e);
      if (o.id || (o.id = (/* @__PURE__ */ new Date()).getTime() + ""), e && l.length !== 1) {
        try {
        } catch {
        }
        return;
      }
      if (t !== !0)
        if (delete o.x, delete o.y, e) {
          const f = getComputedStyle(R.value), d = parseInt(f.getPropertyValue("--com-item-border-width").trim());
          Xt(o, l[0].groupData, l[0].width - 2 * d);
        } else
          c.value.length === 0 ? (o.x = 0, o.y = 0) : Xt(o, c.value, _);
      if (e) {
        l[0].groupData.push(o);
        const f = xt(l[0].groupData, l[0]);
        ft(f);
        const d = (x) => {
          c.value.filter((n) => n.id !== x.id).filter((n) => n.x < x.x && n.x + n.width > x.x || n.x === x.x || n.x > x.x && n.x < x.x + x.width).filter((n) => n.y < x.y && n.y + n.height > x.y || n.y === x.y || n.y > x.y && n.y < x.y + x.height).forEach((n) => {
            n.y = x.y + x.height, d(n);
          });
        };
        d(f);
      } else
        c.value.push(o);
      X();
    }, et = (i, e = null) => {
      let t = -1;
      const o = c.value.filter((l) => l.id === e);
      if (e ? o.length === 1 && (t = o[0].groupData.findIndex((l) => l.id === i)) : t = c.value.findIndex((l) => l.id === i), t !== -1) {
        if (e)
          if (o[0].groupData.splice(t, 1), o[0].groupData.length === 1)
            ut(e);
          else {
            const l = xt(o[0].groupData, o[0]);
            ft(l);
          }
        else
          c.value.splice(t, 1);
        X();
      } else
        try {
        } catch {
        }
    }, ft = (i) => {
      if (i.id) {
        const e = I(i);
        delete e.showPop, delete e.showSet, e.groupData && e.groupData.forEach((l) => {
          delete l.showPop, delete l.showSet;
        });
        let t = -1;
        const o = c.value.filter((l) => l.id === e.inGroupId);
        if (e.inGroupId ? o.length === 1 && (t = o[0].groupData.findIndex((l) => l.id === e.id)) : t = c.value.findIndex((l) => l.id === e.id), t !== -1)
          e.inGroupId ? o[0].groupData[t] = e : c.value[t] = e, X();
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, mt = (i, e) => {
      if (i !== null) {
        const t = _ ? i / _ : 1;
        _ = i;
        const o = getComputedStyle(R.value), l = parseInt(o.getPropertyValue("--com-item-border-width").trim()), f = parseInt(o.getPropertyValue("--group-tit-height").trim());
        Mt || (c.value.forEach((d) => {
          if (d.width *= t, d.height *= t, d.x *= t, d.y *= t, d.isGroup === !0) {
            const x = d.width - 2 * l, p = d.height - 2 * l - (d.groupTit ? f : 0);
            d.groupData.forEach((n) => {
              n.width = x * n.groupW, n.x = x * n.groupX, n.height = p * n.groupH, n.y = p * n.groupY;
            });
          }
        }), X());
      }
      e !== null && (St = e);
    }, zt = (i) => {
      i.showPop || (c.value.forEach((e) => {
        delete e.showPop, e.groupData && e.groupData.forEach((t) => {
          delete t.showPop;
        });
      }), i.showPop = !0, window.addEventListener("click", ht));
    }, ht = () => {
      c.value.forEach((i) => {
        delete i.showPop, i.groupData && i.groupData.forEach((e) => {
          delete e.showPop;
        });
      }), window.removeEventListener("click", ht);
    }, L = $(!1), Rt = (i) => {
      const e = c.value.findIndex((t) => t.id === i);
      if (e !== -1)
        c.value[e].checked = !0, c.value[e].disabled = !0, L.value = !0, Z("showGroup", L.value);
      else
        try {
        } catch {
        }
    }, Lt = () => {
      L.value = !1, c.value.forEach((i) => {
        delete i.checked, delete i.disabled, i.groupData && i.groupData.forEach((e) => {
          delete e.checked, delete e.disabled;
        });
      }), Z("showGroup", L.value);
    }, jt = (i) => {
      i.checked = !i.checked, Z("updateChecked", c.value.filter((e) => e.checked).length);
    }, xt = (i, e) => {
      const t = I(i), o = I(e);
      t.sort((a, y) => {
        const s = a.x, u = y.x;
        return s - u;
      });
      for (let a = 0; a < t.length - 1; a++) {
        if (a === 0 && t[a].x > 0) {
          const y = t[a].x;
          for (let s = a; s < t.length; s++)
            t[s].x -= y;
        }
        if (t[a + 1].x > t[a].x + t[a].width) {
          const y = I(t.slice(0, a + 1));
          if (t[a + 1].x > Math.max(...y.map((s) => s.x + s.width))) {
            const s = t[a + 1].x - Math.max(...y.map((u) => u.x + u.width));
            for (let u = a + 1; u < t.length; u++)
              t[u].x -= s;
          }
        }
      }
      t.sort((a, y) => {
        const s = a.y, u = y.y;
        return s - u;
      });
      for (let a = 0; a < t.length - 1; a++) {
        if (a === 0 && t[a].y > 0) {
          const y = t[a].y;
          for (let s = a; s < t.length; s++)
            t[s].y -= y;
        }
        if (t[a + 1].y > t[a].y + t[a].height) {
          const y = I(t.slice(0, a + 1));
          if (t[a + 1].y > Math.max(...y.map((s) => s.y + s.height))) {
            const s = t[a + 1].y - Math.max(...y.map((u) => u.y + u.height));
            for (let u = a + 1; u < t.length; u++)
              t[u].y -= s;
          }
        }
      }
      const l = t.map((a) => a.x + a.width), f = Math.max(...l), d = t.map((a) => a.y + a.height), x = Math.max(...d);
      t.forEach((a) => {
        a.inGroupId || (a.inGroupId = o.id), a.groupW = a.width / f, a.groupH = a.height / x, a.groupX = a.x / f, a.groupY = a.y / x, a.isObstacle = a.x + a.width === f && a.y === 0;
      });
      const p = getComputedStyle(R.value), n = parseInt(p.getPropertyValue("--com-item-border-width").trim());
      return o.width = f + 2 * n, o.height = x + 2 * n, o.groupData = [...t], o;
    }, te = () => {
      bt(() => {
        const i = getComputedStyle(R.value), e = parseInt(i.getPropertyValue("--com-item-border-width").trim()), t = parseInt(i.getPropertyValue("--group-tit-height").trim());
        c.value.filter((o) => o.isGroup === !0).forEach((o) => {
          const l = o.width - 2 * e, f = o.height - 2 * e - (o.groupTit ? t : 0);
          o.groupData.forEach((d) => {
            d.width = l * d.groupW, d.x = l * d.groupX, d.height = f * d.groupH, d.y = f * d.groupY;
          });
        });
      });
    }, ee = () => {
      const i = c.value.filter((e) => e.checked);
      if (i.length > 1) {
        const e = {
          id: (/* @__PURE__ */ new Date()).getTime() + "G",
          isGroup: !0,
          groupTit: ""
        }, t = xt(i, e);
        t.groupData.forEach((o) => {
          et(o.id);
        }), gt(t), X();
      }
      Lt();
    }, $t = (i, e) => {
      const t = c.value.filter((o) => o.id === e)[0];
      if (t) {
        const o = t.groupData.filter((l) => l.id === i)[0];
        if (o)
          t.groupData.length === 2 ? ut(e) : (delete o.inGroupId, delete o.groupW, delete o.groupH, delete o.groupX, delete o.groupY, delete o.isObstacle, et(o.id, t.id), gt(o), X());
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, ut = (i) => {
      const e = c.value.filter((t) => t.id === i)[0];
      if (e)
        e.groupData.forEach((t) => {
          delete t.inGroupId, delete t.groupW, delete t.groupH, delete e.groupX, delete e.groupY, delete e.isObstacle, t.x += e.x, t.y += e.y, gt(t, null, !0);
        }), et(e.id), X();
      else
        try {
        } catch {
        }
    }, le = (i = "", e) => {
      const t = c.value.filter((o) => o.id === e)[0];
      if (t) {
        if (!t.groupTit || !i) {
          const l = getComputedStyle(R.value), f = parseInt(l.getPropertyValue("--group-tit-height").trim());
          t.groupTit && !i && (t.height -= f), !t.groupTit && i && (t.height += f);
        }
        t.groupTit = i;
        const o = (l) => {
          c.value.filter((d) => d.id !== l.id).filter((d) => d.x < l.x && d.x + d.width > l.x || d.x === l.x || d.x > l.x && d.x < l.x + l.width).filter((d) => d.y < l.y && d.y + d.height > l.y || d.y === l.y || d.y > l.y && d.y < l.y + l.height).forEach((d) => {
            d.y = l.y + l.height, o(d);
          });
        };
        o(t), X();
      } else
        try {
        } catch {
        }
    }, ie = () => (c.value.forEach((i) => {
      delete i.showPop, delete i.showSet, i.groupData && i.groupData.forEach((e) => {
        delete e.showPop, delete e.showSet;
      });
    }), { data: I(c.value), width: _ });
    return se(() => {
      Yt.unobserve(R.value), window.removeEventListener("click", ht);
    }), B({ init: Jt, addItem: gt, deleteItem: et, updateItem: ft, openGroup: Rt, closeGroup: Lt, changeGroupBorder: te, addGroup: ee, removeGroupItem: $t, removeGroup: ut, changeGroupTit: le, getData: ie }), (i, e) => (D(), O("div", {
      class: "vue-drag-component-plus",
      ref_key: "pageRef",
      ref: R
    }, [
      z("div", {
        class: "content-box",
        ref_key: "boxRef",
        ref: Ft
      }, [
        (D(!0), O(lt, null, Et(M(c), (t, o) => (D(), O("div", {
          class: Q(["com-item", E.seeModel || M(L) || t.static === !0 || t.dragable === !1 ? "" : "can-drag", t.move ? "is-move" : "", t.drag ? "is-drag" : "", t.showPop ? "on-top" : "", E.seeModel ? "no-hover" : ""]),
          style: V({
            width: t.width + "px",
            height: t.height + "px",
            top: t.y + "px",
            left: t.x + "px"
          }),
          key: o,
          onMousedown: Y((l) => E.seeModel || M(L) || t.static === !0 || t.dragable === !1 ? null : Ut(l, o), ["prevent"]),
          onMouseenter: (l) => E.seeModel || M(L) || M(W) || M(g) || !t.isGroup ? null : Qt(l, t),
          onMouseleave: (l) => E.seeModel || M(L) || M(W) || M(g) || !t.isGroup ? null : Zt(l, t)
        }, [
          z("div", ue, [
            t.isGroup ? (D(), O(lt, { key: 0 }, [
              t.groupTit ? (D(), O("div", {
                key: 0,
                class: "group-item-tit",
                title: t.groupTit
              }, A(t.groupTit), 9, ce)) : H("", !0),
              z("div", {
                class: Q(["group-item-content", t.groupTit ? "" : "full"])
              }, [
                (D(!0), O(lt, null, Et(t.groupData, (l, f) => (D(), O("div", {
                  class: Q(["com-item-box-child", l.isObstacle ? "else" : ""]),
                  style: V({
                    width: l.width + "px",
                    height: l.height + "px",
                    top: l.y + "px",
                    left: l.x + "px"
                  }),
                  key: f
                }, [
                  z("div", de, [
                    it(i.$slots, "item", { data: l }, () => [
                      z("p", null, A(Math.round(l.width * 100) / 100) + "," + A(Math.round(l.height * 100) / 100), 1),
                      z("p", null, A(Math.round(l.x * 100) / 100) + "," + A(Math.round(l.y * 100) / 100), 1)
                    ])
                  ]),
                  !E.seeModel && !M(L) && M(W) === null && M(g) === null ? (D(), O("div", {
                    key: 0,
                    class: "setting-box",
                    style: V({ display: l.showPop ? "flex" : "none" }),
                    onMousedown: Y((d) => null, ["prevent", "stop"])
                  }, [
                    Nt(Kt, {
                      iconObj: E.settingIcon,
                      onClick: Y((d) => zt(l), ["prevent", "stop"])
                    }, null, 8, ["iconObj", "onClick"])
                  ], 36)) : H("", !0),
                  l.showPop ? (D(), O("div", {
                    key: 1,
                    class: "setting-box-pop",
                    onMousedown: Y((d) => null, ["prevent", "stop"])
                  }, [
                    it(i.$slots, "setPopNormal", {
                      data: I(l)
                    }, () => [
                      z("div", {
                        class: "setting-box-pop-item",
                        onClick: (d) => $t(l.id, l.inGroupId)
                      }, "移出组合", 8, ye),
                      z("div", {
                        class: "setting-box-pop-item",
                        onClick: (d) => et(l.id, l.inGroupId)
                      }, "删除", 8, pe)
                    ])
                  ], 32)) : H("", !0)
                ], 6))), 128))
              ], 2)
            ], 64)) : (D(), O("div", ge, [
              it(i.$slots, "item", { data: t }, () => [
                z("p", null, A(Math.round(t.width * 100) / 100) + "," + A(Math.round(t.height * 100) / 100), 1),
                z("p", null, A(Math.round(t.x * 100) / 100) + "," + A(Math.round(t.y * 100) / 100), 1)
              ])
            ])),
            !t.isGroup && t.notGroup !== !0 && M(L) ? (D(), O("div", {
              key: 2,
              class: Q(["group-checkbox", t.checked ? "is-checked" : "", t.disabled ? "disabled" : ""]),
              onClick: (l) => t.disabled ? null : jt(t)
            }, null, 10, fe)) : H("", !0),
            !E.seeModel && !M(L) && M(W) === null && M(g) === null ? (D(), O("div", {
              key: 3,
              class: Q(["setting-box", t.isGroup === !0 ? "only-g" : ""]),
              style: V({ display: t.showPop || t.showSet ? "flex" : "none" }),
              onMousedown: Y((l) => null, ["prevent", "stop"])
            }, [
              Nt(Kt, {
                iconObj: E.settingIcon,
                onClick: Y((l) => zt(t), ["prevent", "stop"])
              }, null, 8, ["iconObj", "onClick"])
            ], 38)) : H("", !0),
            t.showPop ? (D(), O("div", {
              key: 4,
              class: Q(["setting-box-pop", t.isGroup === !0 ? "special" : ""]),
              onMousedown: Y((l) => null, ["prevent", "stop"])
            }, [
              t.isGroup === !0 ? it(i.$slots, "setPopSpecial", {
                key: 0,
                data: I(t)
              }, () => [
                E.hideTit ? H("", !0) : (D(), O("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (l) => Z("showTitPop", t.groupTit, t.id)
                }, " 设置组合标题", 8, xe)),
                z("div", {
                  class: "setting-box-pop-item",
                  onClick: (l) => ut(t.id)
                }, "解除组合", 8, ve)
              ]) : it(i.$slots, "setPopNormal", {
                key: 1,
                data: I(t)
              }, () => [
                t.notGroup !== !0 ? (D(), O("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (l) => Rt(t.id)
                }, "组合", 8, we)) : H("", !0),
                z("div", {
                  class: "setting-box-pop-item",
                  onClick: (l) => et(t.id)
                }, "删除", 8, Me)
              ])
            ], 34)) : H("", !0)
          ]),
          !E.seeModel && !M(L) && !t.move && t.static !== !0 && t.resizable !== !1 ? (D(), O(lt, { key: 0 }, [
            M(N).indexOf("topLeft") !== -1 ? (D(), O("div", {
              key: 0,
              class: "resize-line top-left",
              onMousedown: Y((l) => K(l, t, "top-left"), ["prevent", "stop"])
            }, null, 40, ke)) : H("", !0),
            M(N).indexOf("top") !== -1 ? (D(), O("div", {
              key: 1,
              class: "resize-line top",
              onMousedown: Y((l) => K(l, t, "top"), ["prevent", "stop"])
            }, null, 40, Ee)) : H("", !0),
            M(N).indexOf("topRight") !== -1 ? (D(), O("div", {
              key: 2,
              class: "resize-line top-right",
              onMousedown: Y((l) => K(l, t, "top-right"), ["prevent", "stop"])
            }, null, 40, De)) : H("", !0),
            M(N).indexOf("left") !== -1 ? (D(), O("div", {
              key: 3,
              class: "resize-line left",
              onMousedown: Y((l) => K(l, t, "left"), ["prevent", "stop"])
            }, null, 40, Oe)) : H("", !0),
            M(N).indexOf("right") !== -1 ? (D(), O("div", {
              key: 4,
              class: "resize-line right",
              onMousedown: Y((l) => K(l, t, "right"), ["prevent", "stop"])
            }, null, 40, Se)) : H("", !0),
            M(N).indexOf("bottomLeft") !== -1 ? (D(), O("div", {
              key: 5,
              class: "resize-line bottom-left",
              onMousedown: Y((l) => K(l, t, "bottom-left"), ["prevent", "stop"])
            }, null, 40, Ge)) : H("", !0),
            M(N).indexOf("bottom") !== -1 ? (D(), O("div", {
              key: 6,
              class: "resize-line bottom",
              onMousedown: Y((l) => K(l, t, "bottom"), ["prevent", "stop"])
            }, null, 40, We)) : H("", !0),
            M(N).indexOf("bottomRight") !== -1 ? (D(), O("div", {
              key: 7,
              class: "resize-line bottom-right",
              onMousedown: Y((l) => K(l, t, "bottom-right"), ["prevent", "stop"])
            }, null, 40, He)) : H("", !0)
          ], 64)) : H("", !0)
        ], 46, he))), 128)),
        (D(!0), O(lt, null, Et(M(c), (t, o) => (D(), O("div", {
          class: Q(["shadow-bg", t.move ? "is-move" : ""]),
          style: V({
            width: t.width + "px",
            height: t.height + "px",
            top: t.y + "px",
            left: t.x + "px"
          }),
          key: o
        }, null, 6))), 128)),
        M(W) !== null ? (D(), O("div", {
          key: 0,
          class: "drag-bg",
          style: V({
            width: M(P).width + "px",
            height: M(P).height + "px",
            top: M(P).y + "px",
            left: M(P).x + "px"
          })
        }, null, 4)) : H("", !0),
        z("div", {
          class: "height-bg",
          style: V({ height: (M(rt) > 0 ? +(M(rt) + (E.seeModel ? E.seeModelMinBg : 220)) : M(rt)) + "px" })
        }, null, 4),
        E.hideAuxiliary ? H("", !0) : (D(), O(lt, { key: 1 }, [
          M(ot) !== null ? (D(), O("div", {
            key: 0,
            class: "auxiliary-line hor",
            style: V({ top: M(ot) + "px", left: "0px" })
          }, null, 4)) : H("", !0),
          M(at) !== null ? (D(), O("div", {
            key: 1,
            class: "auxiliary-line hor",
            style: V({ top: M(at) + "px", left: "0px" })
          }, null, 4)) : H("", !0),
          M(st) !== null ? (D(), O("div", {
            key: 2,
            class: "auxiliary-line",
            style: V({ top: "0px", left: M(st) + "px" })
          }, null, 4)) : H("", !0),
          M(nt) !== null ? (D(), O("div", {
            key: 3,
            class: "auxiliary-line",
            style: V({ top: "0px", left: M(nt) + "px" })
          }, null, 4)) : H("", !0)
        ], 64)),
        M(c).length === 0 ? (D(), O("div", Ie, [
          it(i.$slots, "empty", {}, () => [
            e[0] || (e[0] = ne(" 暂无数据 "))
          ])
        ])) : H("", !0)
      ], 512)
    ], 512));
  }
}, Ce = [Pe], Te = {
  install(E) {
    Ce.forEach((B) => {
      E.component("vueDragComponentPlus", B);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Te);
export {
  Te as default
};
