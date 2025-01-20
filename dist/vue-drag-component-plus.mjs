import { resolveComponent as It, openBlock as _, createBlock as Le, resolveDynamicComponent as nt, normalizeProps as it, mergeProps as Te, withCtx as Gt, createElementBlock as w, toDisplayString as K, ref as L, watch as at, onMounted as zt, onBeforeUnmount as Ct, normalizeStyle as N, unref as p, createElementVNode as A, Fragment as fe, renderList as Re, normalizeClass as te, withModifiers as $, createCommentVNode as D, renderSlot as ye, createVNode as ut, createTextVNode as Ot, nextTick as ct, isVNode as ht } from "vue";
const dt = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(y) {
    return (q, Ve) => {
      const B = It("el-icon");
      return y.iconObj.type === "custom" ? (_(), Le(nt(y.iconObj.icon), it(Te({ key: 0 }, y.iconObj.attrs)), null, 16)) : y.iconObj.type === "el" ? (_(), Le(B, it(Te({ key: 1 }, y.iconObj.attrs)), {
        default: Gt(() => [
          (_(), Le(nt(y.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : y.iconObj.type === "iconfont" ? (_(), w("i", Te({
        key: 2,
        class: ["icon iconfont", "icon-" + y.iconObj.icon]
      }, y.iconObj.attrs), null, 16)) : (_(), w("i", Te({
        key: 3,
        class: y.iconObj.type
      }, y.iconObj.attrs), K(y.iconObj.icon), 17));
    };
  }
};
const Tt = { class: "content-box" }, Yt = ["onMousedown", "onMouseenter", "onMouseleave"], At = { class: "com-item-box" }, Bt = ["title"], Ht = { class: "com-item-box-content" }, Xt = ["onClick"], $t = ["onClick"], Wt = ["onClick"], Lt = {
  key: 1,
  class: "com-item-box-content"
}, Rt = ["onClick"], Vt = ["onClick"], Nt = ["onClick"], mt = ["onClick"], Kt = ["onClick"], qt = ["onClick"], Ft = ["onMousedown"], Ut = ["onMousedown"], Jt = ["onMousedown"], Qt = ["onMousedown"], Zt = ["onMousedown"], jt = ["onMousedown"], es = ["onMousedown"], ts = ["onMousedown"], ss = {
  key: 2,
  class: "com-empty"
}, os = {
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
      validator(y, q) {
        return y >= 0;
      }
    },
    // 组件项最小宽度（原始尺寸）
    itemMinWidth: {
      type: Number,
      default: 15,
      validator(y, q) {
        return y >= 15;
      }
    },
    // 组件项最小高度（原始尺寸）
    itemMinHeight: {
      type: Number,
      default: 15,
      validator(y, q) {
        return y >= 15;
      }
    },
    // 纵向相邻元素的自动间距（原始尺寸）
    xSpace: {
      type: Number,
      default: 10,
      validator(y, q) {
        return y >= 0;
      }
    },
    // 横向相邻元素的自动间距（原始尺寸）
    ySpace: {
      type: Number,
      default: null,
      validator(y, q) {
        return y >= 0;
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
    // 显示辅助线
    showAuxiliary: {
      type: Boolean,
      default: !1
    },
    // 组合按钮位置更详细
    groupBtnPosMore: {
      type: Boolean,
      default: !1
    }
  },
  emits: ["baseWidthInit", "changeScle", "dragStart", "dragIng", "dragEnd", "resizeStart", "resizeIng", "resizeEnd", "showGroup", "openSetMenu", "updateChecked", "showTitPop"],
  setup(y, { expose: q, emit: Ve }) {
    const B = Ve, C = y, I = (s) => {
      if (typeof s == "object" && !ht(s) && s !== null && !(s instanceof Date)) {
        let t = s instanceof Array ? [] : {};
        for (let e in s)
          t[e] = typeof s[e] == "object" && !ht(s[e]) && s[e] !== null && !(s[e] instanceof Date) ? I(s[e]) : s[e];
        return t;
      } else
        return s;
    }, Pe = (s, t, e = !1) => pt(se(s, t, e), t, e), se = (s, t, e = !1) => s.filter((l) => l[e ? "s_x" : "x"] <= t[e ? "s_x" : "x"] && l[e ? "s_x" : "x"] + l[e ? "s_width" : "width"] > t[e ? "s_x" : "x"] || l[e ? "s_x" : "x"] > t[e ? "s_x" : "x"] && l[e ? "s_x" : "x"] < t[e ? "s_x" : "x"] + t[e ? "s_width" : "width"]), pt = (s, t, e = !1) => s.filter((l) => l[e ? "s_y" : "y"] <= t[e ? "s_y" : "y"] && l[e ? "s_y" : "y"] + l[e ? "s_height" : "height"] > t[e ? "s_y" : "y"] || l[e ? "s_y" : "y"] > t[e ? "s_y" : "y"] && l[e ? "s_y" : "y"] < t[e ? "s_y" : "y"] + t[e ? "s_height" : "height"]), oe = (s, t = (l) => l, e = !1) => {
      const l = I(r.value), o = I(s);
      o.sort((u, k) => {
        const h = u[e ? "s_y" : "y"], g = k[e ? "s_y" : "y"];
        if (h !== g)
          return h - g;
        {
          const n = u[e ? "s_x" : "x"], x = k[e ? "s_x" : "x"];
          return n - x;
        }
      });
      const a = (u) => {
        Pe(t(l, u), u, e).forEach((h) => {
          h[e ? "s_y" : "y"] = u[e ? "s_y" : "y"] + u[e ? "s_height" : "height"], a(h);
        });
      };
      o.forEach((u) => a(l.filter((k) => k.id === u.id)[0])), l.forEach((u) => {
        r.value.filter((k) => k.id === u.id)[0][e ? "s_y" : "y"] = u[e ? "s_y" : "y"];
      });
    }, H = (s) => {
      const t = I(s);
      return delete t.showPop, delete t.showSet, t.groupData ? t.groupData.forEach((e) => {
        delete e.showPop, delete e.showSet, j(e, t), delete e.s_width, delete e.s_height, delete e.s_x, delete e.s_y;
      }) : t.inGroupId && (delete t.showPop, delete t.showSet, j(t, r.value.filter((e) => e.id === t.inGroupId)[0])), delete t.btnPosition, delete t.s_width, delete t.s_height, delete t.s_x, delete t.s_y, t;
    }, r = L([]), Ne = () => {
      C.insertResizeKeys.forEach((s) => {
        C.excludeResizeKeys.indexOf(s) === -1 && F.value.push(s);
      });
    };
    at(
      () => [C.insertResizeKeys, C.excludeResizeKeys],
      () => {
        Ne();
      }
    );
    const F = L([]);
    Ne();
    const me = () => {
      r.value.length > 0 && r.value.filter((s) => s.isGroup === !0).forEach((s) => {
        ue(s);
      });
    }, Ke = () => {
      C.xSpace !== null && C.xSpace !== void 0 ? W.value = C.xSpace / 2 : W.value = 10 / 2, C.ySpace !== null && C.ySpace !== void 0 && C.ySpace >= 0 ? U.value = C.ySpace / 2 : U.value = W.value, me();
    };
    at(
      () => [C.xSpace, C.ySpace],
      () => {
        Ke();
      }
    );
    const W = L(0), U = L(0);
    Ke();
    const R = L(null);
    let ae = null;
    const ve = (s) => {
      ae = s, B("baseWidthInit", ae);
    }, S = L(1), _e = (s) => {
      S.value = s, B("changeScle", S.value);
    }, ue = (s) => {
      s.s_width = s.width * S.value, s.s_height = s.height * S.value;
      const t = getComputedStyle(R.value), e = parseInt(t.getPropertyValue("--com-item-border-width").trim()), l = parseInt(t.getPropertyValue("--group-tit-height").trim());
      if (s.isGroup === !0) {
        const o = s.s_width - 2 * W.value * S.value - 2 * e, a = s.s_height - 2 * U.value * S.value - 2 * e - (s.groupTit ? l : 0);
        s.groupData.forEach((u) => {
          u.s_width = o * u.groupW, u.s_height = a * u.groupH, u.s_x = o * u.groupX, u.s_y = a * u.groupY;
        });
      }
    }, gt = (s) => {
      s.s_x = s.x * S.value, s.s_y = s.y * S.value;
    }, ft = (s) => {
      s.width = s.s_width / S.value, s.height = s.s_height / S.value;
      const t = getComputedStyle(R.value), e = parseInt(t.getPropertyValue("--group-tit-height").trim());
      if (s.isGroup === !0) {
        const l = s.width, o = s.height - (s.groupTit ? e : 0);
        s.groupData.forEach((a) => {
          a.x = l * a.groupX, a.y = o * a.groupY;
        });
      }
    }, Ye = (s) => {
      s.x = s.s_x / S.value, s.y = s.s_y / S.value;
    };
    let J = null, qe = null;
    const xe = L(0), we = L(null), be = L(null), ke = L(null), Me = L(null), ce = (s) => {
      const t = I(s);
      if (!C.showAuxiliary || s === null)
        we.value = null, be.value = null, ke.value = null, Me.value = null;
      else {
        const e = getComputedStyle(R.value), l = parseInt(e.getPropertyValue("--auxiliary-width").trim()), o = r.value.filter((n) => n.id !== t.id).map((n) => n.s_y), a = r.value.filter((n) => n.id !== t.id).map((n) => n.s_y + n.s_height), u = [...o, ...a];
        u.sort(), u.filter((n) => n === t.s_y).length > 0 ? we.value = t.s_y : we.value = null, u.filter((n) => n === t.s_y + t.s_height).length > 0 ? be.value = t.s_y + t.s_height - l : be.value = null;
        const k = r.value.filter((n) => n.id !== t.id).map((n) => n.s_x), h = r.value.filter((n) => n.id !== t.id).map((n) => n.s_x + n.s_width), g = [...k, ...h];
        g.sort(), g.filter((n) => n === t.s_x).length > 0 ? ke.value = t.s_x : ke.value = null, g.filter((n) => n === t.s_x + t.s_width).length > 0 ? Me.value = t.s_x + t.s_width - l : Me.value = null;
      }
    }, yt = (s, t) => {
      let e = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.msMatchesSelector;
      for (; s && !e.call(s, t); )
        s = s.parentElement;
      return s;
    };
    let P = null, Fe = null, Ue = null;
    const G = L({});
    let Ae = null;
    const vt = (s, t) => {
      clearTimeout(Ae), Se(), P = t, G.value = I(r.value[P]), B("dragStart", H(r.value[P])), r.value[P].move = !0, ce(r.value[P]);
      const e = yt(s.target, ".com-item");
      Fe = s.clientX - e.offsetLeft, Ue = s.clientY - e.offsetTop, window.addEventListener("mousemove", Je), window.addEventListener("mouseup", Qe);
    }, Je = (s) => {
      clearTimeout(Ae);
      const t = s.clientX - Fe, e = s.clientY - Ue, l = t <= Q("left") ? Q("left") : t >= Q("right") ? Q("right") : t, o = e <= Q("top") ? Q("top") : e >= Q("bottom") ? Q("bottom") : e, a = l - r.value[P].s_x, u = o - r.value[P].s_y;
      let k = "";
      u > 0 ? k = "bottom" : u < 0 ? k = "top" : a > 2 ? k = "right" : a < -2 && (k = "left"), r.value[P].s_x = l, r.value[P].s_y = o, ce(r.value[P]);
      let h = Pe(I(r.value.filter((g) => g.move !== !0)), r.value[P], !0);
      if (h.length === 0)
        G.value.s_x = l, G.value.s_y = o;
      else
        switch (k) {
          case "top":
            h = h.filter((i) => i.s_y < G.value.s_y);
            const g = Math.min(...h.map((i) => i.s_y + i.s_height));
            h.forEach((i) => {
              Math.abs(i.s_y + i.s_height - g) < 5 && (i.s_y = g - i.s_height);
            });
            let n = G.value.s_y - o, x = !0, d = [...h];
            const E = (i) => {
              se(I(r.value.filter((c) => c.move !== !0 && Math.abs(c.s_y + c.s_height - i.s_y) <= 3)), i, !0).forEach((c) => {
                d.findIndex((f) => f.id === c.id) === -1 && (d.push(c), E(c));
              });
            };
            if (h.forEach((i) => {
              E(i);
            }), d.sort((i, b) => {
              const c = i.s_y, f = b.s_y;
              return c - f;
            }), (d.length === 0 || d.filter((i) => i.s_y === 0).length > 0) && (x = !1), x) {
              let i = 0;
              d.filter((c) => c.s_y === d[0].s_y).forEach((c) => {
                se(I(r.value.filter((z) => z.move !== !0 && z.s_y + z.s_height < c.s_y)), c, !0).forEach((z) => {
                  z.s_y + z.s_height > i && (i = z.s_y + z.s_height);
                });
              }), i = d[0].s_y - i, i < n && (n = i), d.forEach((c) => {
                c.s_y -= n, r.value.filter((f) => f.id === c.id)[0].s_y = c.s_y;
              }), G.value.s_x = l, G.value.s_y = r.value.filter((c) => c.id === d[d.length - 1].id)[0].s_y + r.value.filter((c) => c.id === d[d.length - 1].id)[0].s_height;
            } else {
              let i = 0;
              h.forEach((f) => {
                const z = se(r.value.filter((Y) => Y.move !== !0), f, !0).filter((Y) => Y.s_y > f.s_y + f.s_height);
                z.length > 0 && (i = Math.min(...z.map((Y) => Y.s_y)));
              });
              const b = i === 0 ? 0 : i - G.value.s_height - (Math.max(...h.map((f) => f.s_y + f.s_height)) - Math.min(...h.map((f) => f.s_y))), c = b === 0 ? o + G.value.s_height - Math.min(...h.map((f) => f.s_y)) : i - Math.min(...h.map((f) => f.s_y)) - (Math.max(...h.map((f) => f.s_y + f.s_height)) - Math.min(...h.map((f) => f.s_y)));
              (b === 0 || o <= b) && (h.filter((f) => f.s_y < G.value.s_y).forEach((f) => {
                f.s_y += c, r.value.filter((z) => z.id === f.id)[0].s_y = f.s_y;
              }), G.value.s_x = l, G.value.s_y = o, oe(r.value, (f, z) => f.filter((Y) => Y.move !== !0 && Y.id !== z.id), !0));
            }
            break;
          case "bottom":
            let O = 0;
            h.forEach((i) => {
              const b = se(r.value.filter((c) => c.move !== !0), i, !0).filter((c) => c.s_y + c.s_height < i.s_y);
              b.length > 0 && (O = Math.max(...b.map((c) => c.s_y + c.s_height)));
            });
            const X = O + (Math.max(...h.map((i) => i.s_height + i.s_y)) - Math.min(...h.map((i) => i.s_y))), T = Math.min(...h.map((i) => i.s_y)) - O;
            o >= X && (h.filter((i) => i.s_y > G.value.s_y).forEach((i) => {
              i.s_y -= T, r.value.filter((c) => c.id === i.id)[0].s_y = i.s_y;
              const b = Pe(r.value.filter((c) => c.move !== !0 && c.id !== i.id), i, !0);
              b.length > 0 && (i.s_y = Math.max(...b.map((c) => c.s_y + c.s_height)), r.value.filter((c) => c.id === i.id)[0].s_y = i.s_y);
            }), G.value.s_x = l, G.value.s_y = X, oe(r.value, (i, b) => i.filter((c) => c.move !== !0 && c.id !== b.id), !0));
            break;
          case "left":
          case "right":
            h.sort((i, b) => {
              const c = i.s_y, f = b.s_y;
              return c - f;
            });
            let ee = !0;
            for (let i = 0; i < h.length; i++) {
              if (ee) {
                const b = I(r.value);
                for (let c = 0; c <= i; c++) {
                  let f = null;
                  const z = se(b.filter((Y) => Y.move !== !0 && Y.s_y < h[c].s_y), h[c], !0);
                  if (z.length === 0 ? f = 0 : f = Math.max(...z.map((Y) => Y.s_y + Y.s_height)), c === i) {
                    if (h[c].s_y - (h[c].s_y + h[c].s_height - o) < f) {
                      ee = !1;
                      break;
                    }
                  } else if (h[c].s_y - h[i].s_height < f) {
                    ee = !1;
                    break;
                  } else
                    b.filter((Y) => Y.id === h[c].id)[0].s_y -= h[i].s_height;
                }
              }
              if (ee) {
                h[i].s_y -= h[i].s_y + h[i].s_height - o, r.value.filter((b) => b.id === h[i].id)[0].s_y = h[i].s_y;
                for (let b = i; b > 0; b--)
                  h[i - 1].s_y -= h[i].s_height, r.value.filter((c) => c.id === h[i - 1].id)[0].s_y = h[i - 1].s_y;
              } else
                h.filter((b) => b.id === h[i].id).forEach((b) => {
                  b.s_y += r.value[P].s_y + r.value[P].s_height - b.s_y, r.value.filter((c) => c.id === b.id)[0].s_y = b.s_y, oe([b], (c, f) => c.filter((z) => z.move !== !0 && z.id !== f.id), !0);
                });
            }
            G.value.s_x = l;
            break;
        }
      r.value.forEach((g) => {
        Ye(g);
      }), m(!1), B("dragIng", H(r.value[P]));
    }, Qe = () => {
      window.removeEventListener("mousemove", Je), window.removeEventListener("mouseup", Qe), delete r.value[P].move, r.value[P].s_x = G.value.s_x, r.value[P].s_y = G.value.s_y, ce(null), r.value.forEach((s) => {
        Ye(s);
      }), m(), B("dragEnd", H(r.value[P])), P = null, Ae = setTimeout(() => {
        m();
      }, 500);
    }, Q = (s) => {
      switch (s) {
        case "top":
          return 0;
        case "right":
          return J - W.value * 2 * S.value - r.value[P].s_width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let v = null, Be = "", De = 0, Ie = 0, le = 0, re = 0, ne = 0, ie = 0, he = 0, Ge = 0, de = 0, ze = 0;
    const Z = (s, t, e) => {
      Se(), v = t, B("resizeStart", H(v)), Be = e, De = s.clientX, Ie = s.clientY, le = t.s_width, re = t.s_height, ne = t.s_y, ie = t.s_x, v.drag = !0, ce(v);
      const l = r.value.filter((g) => g.static === !0 && (g.s_x < t.s_x ? g.s_x + g.s_width >= t.s_x : g.s_x <= t.s_x + t.s_width)), o = r.value.filter((g) => g.static === !0 && (g.s_y < t.s_y ? g.s_y + g.s_height >= t.s_y : g.s_y <= t.s_y + t.s_height)), a = l.filter((g) => g.s_y + g.s_height <= t.s_y).map((g) => g.s_y + g.s_height);
      a.length > 0 ? he = Math.max(...a) : he = 0;
      const u = l.filter((g) => g.s_y >= t.s_y + t.s_height).map((g) => g.s_y);
      u.length > 0 ? Ge = Math.min(...u) : Ge = 0;
      const k = o.filter((g) => g.s_x + g.s_width <= t.s_x).map((g) => g.s_x + g.s_width);
      k.length > 0 ? de = Math.max(...k) : de = 0;
      const h = o.filter((g) => g.s_x >= t.s_x + t.s_width).map((g) => g.s_x);
      h.length > 0 ? ze = Math.min(...h) : ze = 0, window.addEventListener("mousemove", Ze), window.addEventListener("mouseup", je);
    }, Ze = (s) => {
      const t = le + (s.clientX - De), e = re + (s.clientY - Ie), l = le - (s.clientX - De), o = re - (s.clientY - Ie), a = ne + (s.clientY - Ie), u = ie + (s.clientX - De), k = getComputedStyle(R.value), h = parseInt(k.getPropertyValue("--com-item-border-width").trim()), g = parseInt(k.getPropertyValue("--group-tit-height").trim()), n = () => {
        if (v.isGroup === !0) {
          const O = v.s_width - 2 * W.value * S.value - 2 * h, X = v.s_height - 2 * U.value * S.value - 2 * h - (v.groupTit ? g : 0);
          v.groupData.forEach((T) => {
            T.s_width = O * T.groupW, T.s_height = X * T.groupH, T.s_x = O * T.groupX, T.s_y = X * T.groupY;
          });
        }
      }, x = (C.itemMinWidth + W.value * 2) * S.value, d = (C.itemMinHeight + U.value * 2) * S.value;
      switch (Be) {
        case "top-left":
          v.s_height = o < d ? d : o > M("top") ? M("top") : o, v.s_y = o < d ? ne + re - d : o > M("top") ? he : a, v.s_width = l < x ? x : l > M("left") ? M("left") : l, v.s_x = l < x ? ie + le - x : l > M("left") ? de : u, n();
          break;
        case "top":
          v.s_height = o < d ? d : o > M("top") ? M("top") : o, v.s_y = o < d ? ne + re - d : o > M("top") ? he : a, n();
          break;
        case "top-right":
          v.s_height = o < d ? d : o > M("top") ? M("top") : o, v.s_y = o < d ? ne + re - d : o > M("top") ? he : a, v.s_width = t < x ? x : t > M("right") ? M("right") : t, n();
          break;
        case "left":
          v.s_width = l < x ? x : l > M("left") ? M("left") : l, v.s_x = l < x ? ie + le - x : l > M("left") ? de : u, n();
          break;
        case "right":
          v.s_width = t < x ? x : t > M("right") ? M("right") : t, n();
          break;
        case "bottom-left":
          v.s_height = e < d ? d : e > M("bottom") ? M("bottom") : e, v.s_width = l < x ? x : l > M("left") ? M("left") : l, v.s_x = l < x ? ie + le - x : l > M("left") ? de : u, n();
          break;
        case "bottom":
          v.s_height = e < d ? d : e > M("bottom") ? M("bottom") : e, n();
          break;
        case "bottom-right":
          v.s_height = e < d ? d : e > M("bottom") ? M("bottom") : e, v.s_width = t < x ? x : t > M("right") ? M("right") : t, n();
          break;
      }
      ft(v), ce(v);
      let E = Pe(I(r.value.filter((O) => O.drag !== !0)), v, !0);
      if (E.length > 0) {
        E.sort((O, X) => {
          const T = O.s_y, ee = X.s_y;
          return T - ee;
        });
        for (let O = 0; O < E.length; O++)
          E.filter((X) => X.id === E[O].id).forEach((X) => {
            X.s_y += v.s_y + v.s_height - X.s_y, r.value.filter((T) => T.id === X.id)[0].s_y = X.s_y, oe([X], (T, ee) => T.filter((i) => i.drag !== !0 && i.id !== ee.id), !0);
          });
      }
      r.value.forEach((O) => {
        Ye(O);
      }), m(!1), B("resizeIng", H(v));
    }, je = (s) => {
      delete v.drag, Be = "", ce(null), window.removeEventListener("mousemove", Ze), window.removeEventListener("mouseup", je), m(), B("resizeEnd", H(v)), v = null;
    }, M = (s) => {
      switch (s) {
        case "top":
          return ne + re - he;
        case "left":
          return ie + le - de;
        case "right":
          return (ze > 0 ? ze : J - W.value * 2 * S.value) - ie;
        case "bottom":
          return Ge > 0 ? Ge - ne : 999999999;
      }
    }, m = (s = !0) => {
      s === !0 && (oe(r.value, (e, l) => e.filter((o) => o.id !== l.id)), _t(), r.value.forEach((e) => {
        gt(e);
      }), xt());
      const t = r.value.map((e) => e.y + e.height);
      t.length > 0 ? xe.value = Math.max(...t) : xe.value = 0;
    }, _t = () => {
      const s = I(r.value).sort((t, e) => {
        const l = t.y, o = e.y;
        return l - o;
      });
      for (let t = 0; t < s.length; t++) {
        const e = se(s, s[t]).filter((l) => l.y + l.height <= s[t].y);
        e.length > 0 ? s[t].y = Math.max(...e.map((l) => l.y + l.height)) : s[t].y = 0;
      }
      s.forEach((t) => {
        r.value.filter((e) => e.id === t.id)[0].y = t.y;
      });
    }, xt = () => {
      const s = r.value.filter((t) => t.isGroup === !0);
      if (s.length > 0) {
        const t = getComputedStyle(R.value), e = parseInt(t.getPropertyValue("--setting-icon-group-width").trim()), l = parseInt(t.getPropertyValue("--setting-icon-group-height").trim());
        s.forEach((o) => {
          W.value + o.s_x + o.s_width + e > J ? W.value + o.s_x - e < 0 ? C.groupBtnPosMore ? U.value + o.s_y - l < 0 ? o.btnPosition = "bottom" : o.btnPosition = "top" : o.btnPosition = "center" : o.btnPosition = "left" : o.btnPosition = "right";
        });
      }
    };
    zt(() => {
      et.observe(R.value);
    });
    const et = new ResizeObserver((s) => {
      kt(J === s[0].borderBoxSize[0].inlineSize ? null : s[0].borderBoxSize[0].inlineSize, qe === s[0].borderBoxSize[0].blockSize ? null : s[0].borderBoxSize[0].blockSize);
    });
    let He = !1;
    const wt = (s = [], t = null) => {
      rt(), r.value = I(s), r.value.filter((e) => e.isGroup === !0).forEach((e) => {
        if (e.groupData.length < 2)
          Ee(e.id);
        else {
          const l = Oe(e.groupData, e);
          Ce(l);
        }
      }), He = !0, ct(() => {
        const e = R.value.getBoundingClientRect();
        t != null ? (ve(t), _e(e.width / t)) : (ve(r.value.length > 0 ? e.width : null), _e(1)), r.value.forEach((l) => {
          ue(l);
        }), m(), setTimeout(() => {
          He = !1;
        }, 500);
      });
    }, bt = (s) => {
      s.showSet = !0;
    }, Xe = (s) => {
      const t = r.value.filter((e) => e.id === s);
      if (t.length === 1)
        delete t[0].showSet;
      else
        try {
        } catch {
        }
    }, tt = (s, t, e) => {
      const l = t.map((u) => u.y), o = Math.max(...l), a = t.filter((u) => u.y + u.height > o);
      a.sort((u, k) => {
        const h = u.x, g = k.x;
        return h - g;
      });
      for (let u = 0; u < a.length; u++) {
        if (u === 0 && a[u].x >= s.width) {
          s.y = o, s.x = 0;
          break;
        }
        if (a.length > 1 && u !== a.length - 1 && a[u].x + a[u].width + s.width <= a[u + 1].x) {
          s.y = o, s.x = a[u].x + a[u].width;
          break;
        }
        if (u === a.length - 1 && a[u].x + a[u].width + s.width <= e) {
          s.y = o, s.x = a[u].x + a[u].width;
          break;
        }
      }
      if (s.y == null) {
        s.x = 0;
        const u = t.map((k) => k.y + k.height);
        s.y = Math.max(...u);
      }
    }, pe = (s, t = null, e = !1) => {
      const l = I(s), o = r.value.filter((a) => a.id === t);
      if (l.id || (l.id = (/* @__PURE__ */ new Date()).getTime() + ""), t && o.length !== 1)
        try {
        } catch {
        } finally {
          return;
        }
      if (e !== !0 && (delete l.x, delete l.y, t ? (o[0].groupData.forEach((a) => {
        j(a, o[0]);
      }), tt(l, o[0].groupData, o[0].width)) : r.value.length === 0 ? (l.x = 0, l.y = 0) : tt(l, r.value, (ae || J) - W.value * 2)), t) {
        o[0].groupData.push(l);
        const a = Oe(o[0].groupData, o[0]);
        Ce(a), oe([a], (u, k) => u.filter((h) => h.id !== k.id));
      } else
        r.value.length === 0 && ve(J), ue(l), r.value.push(l);
      m();
    }, $e = (s, t = null, e = null) => {
      let l = null;
      const o = r.value.filter((a) => a.id === t);
      if (t ? o.length === 1 && (l = I(o[0].groupData.filter((a) => a.id === s)[0])) : l = I(r.value.filter((a) => a.id === s)[0]), l)
        return l.id = e || (/* @__PURE__ */ new Date()).getTime() + "", t ? (j(l, o[0]), pe(l, t)) : pe(l), H(t ? r.value.filter((a) => a.id === t)[0].groupData.filter((a) => a.id === l.id)[0] : r.value.filter((a) => a.id === l.id)[0]);
      try {
      } catch {
      } finally {
        return null;
      }
    }, ge = (s, t = null) => {
      let e = -1;
      const l = r.value.filter((o) => o.id === t);
      if (t ? l.length === 1 && (e = l[0].groupData.findIndex((o) => o.id === s)) : e = r.value.findIndex((o) => o.id === s), e !== -1) {
        if (t)
          if (l[0].groupData.splice(e, 1), l[0].groupData.length === 1)
            Ee(t);
          else {
            l[0].groupData.forEach((a) => {
              j(a, l[0]);
            });
            const o = Oe(l[0].groupData, l[0]);
            Ce(o);
          }
        else
          r.value.splice(e, 1), r.value.length === 0 && (ve(null), _e(1));
        m();
      } else
        try {
        } catch {
        }
    }, Ce = (s) => {
      if (s.id) {
        const t = I(s);
        delete t.showPop, delete t.showSet, delete t.btnPosition, t.groupData && t.groupData.forEach((o) => {
          delete o.showPop, delete o.showSet;
        });
        let e = -1;
        const l = r.value.filter((o) => o.id === t.inGroupId);
        if (t.inGroupId ? l.length === 1 && (e = l[0].groupData.findIndex((o) => o.id === t.id)) : e = r.value.findIndex((o) => o.id === t.id), e !== -1)
          t.inGroupId ? (l[0].groupData[e] = t, ue(l[0])) : (r.value[e] = t, ue(r.value[e])), m();
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, kt = (s, t) => {
      s !== null && (J = s, He || (_e(ae && J ? s / ae : 1), r.value.forEach((e) => {
        ue(e);
      }), m())), t !== null && (qe = t);
    }, st = (s) => {
      s.showPop || (r.value.forEach((t) => {
        delete t.showPop, t.groupData && t.groupData.forEach((e) => {
          delete e.showPop;
        });
      }), B("openSetMenu", H(s)), s.showPop = !0, window.addEventListener("click", Se));
    }, Se = () => {
      r.value.forEach((s) => {
        delete s.showPop, s.groupData && s.groupData.forEach((t) => {
          delete t.showPop;
        });
      }), window.removeEventListener("click", Se);
    }, V = L(!1), ot = (s) => {
      const t = r.value.findIndex((e) => e.id === s);
      if (t !== -1)
        r.value[t].checked = !0, r.value[t].checkDis = !0, V.value = !0, B("showGroup", V.value);
      else
        try {
        } catch {
        }
    }, We = () => {
      V.value = !1, r.value.forEach((s) => {
        delete s.checked, delete s.checkDis, s.groupData && s.groupData.forEach((t) => {
          delete t.checked, delete t.checkDis;
        });
      }), B("showGroup", V.value);
    }, Mt = (s) => {
      s.checked = !s.checked, B("updateChecked", r.value.filter((t) => t.checked).length);
    }, Oe = (s, t) => {
      const e = I(s), l = I(t);
      e.sort((n, x) => {
        const d = n.x, E = x.x;
        return d - E;
      });
      for (let n = 0; n < e.length - 1; n++) {
        if (n === 0 && e[n].x > 0) {
          const x = e[n].x;
          for (let d = n; d < e.length; d++)
            e[d].x -= x;
        }
        if (e[n + 1].x > e[n].x + e[n].width) {
          const x = I(e.slice(0, n + 1));
          if (e[n + 1].x > Math.max(...x.map((d) => d.x + d.width))) {
            const d = e[n + 1].x - Math.max(...x.map((E) => E.x + E.width));
            for (let E = n + 1; E < e.length; E++)
              e[E].x -= d;
          }
        }
      }
      e.sort((n, x) => {
        const d = n.y, E = x.y;
        return d - E;
      });
      for (let n = 0; n < e.length - 1; n++) {
        if (n === 0 && e[n].y > 0) {
          const x = e[n].y;
          for (let d = n; d < e.length; d++)
            e[d].y -= x;
        }
        if (e[n + 1].y > e[n].y + e[n].height) {
          const x = I(e.slice(0, n + 1));
          if (e[n + 1].y > Math.max(...x.map((d) => d.y + d.height))) {
            const d = e[n + 1].y - Math.max(...x.map((E) => E.y + E.height));
            for (let E = n + 1; E < e.length; E++)
              e[E].y -= d;
          }
        }
      }
      const o = e.map((n) => n.x + n.width), a = Math.max(...o), u = e.map((n) => n.y + n.height), k = Math.max(...u);
      e.forEach((n) => {
        n.inGroupId || (n.inGroupId = l.id), n.groupW = n.width / a, n.groupH = n.height / k, n.groupX = n.x / a, n.groupY = n.y / k, n.isObstacle = n.x + n.width === a && n.y === 0, delete n.width, delete n.height;
      });
      const h = getComputedStyle(R.value), g = parseInt(h.getPropertyValue("--group-tit-height").trim());
      return l.width = a, l.height = k + (l.groupTit ? g : 0), l.groupData = [...e], l;
    }, j = (s, t) => {
      const e = getComputedStyle(R.value), l = parseInt(e.getPropertyValue("--group-tit-height").trim());
      s.width = t.width * s.groupW, s.height = (t.height - (t.groupTit ? l : 0)) * s.groupH;
    }, St = () => {
      ct(() => {
        me();
      });
    }, Et = () => {
      const s = r.value.filter((t) => t.checked);
      if (s.length > 1) {
        const t = {
          id: (/* @__PURE__ */ new Date()).getTime() + "G",
          isGroup: !0,
          groupTit: ""
        }, e = Oe(s, t);
        return e.groupData.forEach((l) => {
          ge(l.id);
        }), pe(e), We(), H(r.value.filter((l) => l.id === e.id)[0]);
      } else
        return We(), null;
    }, lt = (s, t) => {
      const e = r.value.filter((l) => l.id === t)[0];
      if (e) {
        const l = e.groupData.filter((o) => o.id === s)[0];
        if (l)
          return e.groupData.length === 2 ? Ee(t) : (j(l, e), delete l.inGroupId, delete l.groupW, delete l.groupH, delete l.groupX, delete l.groupY, delete l.isObstacle, ge(l.id, e.id), pe(l), [H(r.value.filter((o) => o.id === s)[0])]);
        try {
        } catch {
        } finally {
          return [];
        }
      } else
        try {
        } catch {
        } finally {
          return [];
        }
    }, Ee = (s) => {
      const t = r.value.filter((e) => e.id === s)[0];
      if (t) {
        let e = [];
        t.groupData.forEach((o) => {
          j(o, t), o.x += t.x, o.y += t.y, delete o.inGroupId, delete o.groupW, delete o.groupH, delete o.groupX, delete o.groupY, delete o.isObstacle, e.push(o.id), pe(o, null, !0);
        }), ge(t.id);
        let l = [];
        return e.forEach((o) => {
          l.push(H(r.value.filter((a) => a.id === o)[0]));
        }), l;
      } else
        try {
        } catch {
        } finally {
          return [];
        }
    }, Pt = (s = "", t) => {
      const e = r.value.filter((l) => l.id === t)[0];
      if (e) {
        if (!e.groupTit || !s) {
          const l = getComputedStyle(R.value), o = parseInt(l.getPropertyValue("--group-tit-height").trim());
          e.groupTit && !s && (e.height -= o, e.s_height -= o * S.value), !e.groupTit && s && (e.height += o, e.s_height += o * S.value);
        }
        e.groupTit = s, oe([e], (l, o) => l.filter((a) => a.id !== o.id)), m();
      } else
        try {
        } catch {
        }
    }, rt = () => {
      r.value = [], ve(null), _e(1), xe.value = 0;
    }, Dt = () => new Promise((s, t) => {
      r.value.forEach((l) => {
        delete l.showPop, delete l.showSet, l.groupData && l.groupData.forEach((o) => {
          delete o.showPop, delete o.showSet;
        });
      });
      const e = I(r.value);
      e.forEach((l) => {
        l.isGroup === !0 && l.groupData.forEach((o) => {
          j(o, l), delete o.s_width, delete o.s_height, delete o.s_x, delete o.s_y;
        }), delete l.btnPosition, delete l.s_width, delete l.s_height, delete l.s_x, delete l.s_y;
      }), s({ data: e, width: ae });
    });
    return Ct(() => {
      et.unobserve(R.value), window.removeEventListener("click", Se);
    }), q({ init: wt, addItem: pe, copyItem: $e, deleteItem: ge, updateItem: Ce, hideGroupSet: Xe, openGroup: ot, closeGroup: We, changeGroupBorder: St, addGroup: Et, removeGroupItem: lt, removeGroup: Ee, changeGroupTit: Pt, resetData: rt, getData: Dt }), (s, t) => (_(), w("div", {
      class: "vue-drag-component-plus",
      style: N({ "--css-scle": p(S), "--com-x-space": p(W) + "px", "--com-y-space": p(U) + "px" }),
      ref_key: "pageRef",
      ref: R
    }, [
      A("div", Tt, [
        (_(!0), w(fe, null, Re(p(r), (e, l) => (_(), w("div", {
          class: te(["com-item", e.move ? "is-move" : "", e.drag ? "is-drag" : "", e.showPop || e.isGroup && e.groupData.filter((o) => o.showPop).length > 0 ? "on-top" : ""]),
          style: N({
            width: e.s_width + "px",
            height: e.s_height + "px",
            top: e.s_y + "px",
            left: e.s_x + "px"
          }),
          key: l
        }, [
          A("div", {
            class: te(["com-item-inner", y.seeModel || p(V) || e.static === !0 || e.dragable === !1 ? "" : "can-drag", y.seeModel ? "no-hover" : ""]),
            onMousedown: $((o) => y.seeModel || p(V) || e.static === !0 || e.dragable === !1 ? null : vt(o, l), ["prevent"]),
            onMouseenter: (o) => y.seeModel || p(V) || p(P) || p(v) || !e.isGroup ? null : bt(e),
            onMouseleave: (o) => y.seeModel || p(V) || p(P) || p(v) || !e.isGroup ? null : Xe(e.id)
          }, [
            A("div", At, [
              e.isGroup ? (_(), w(fe, { key: 0 }, [
                e.groupTit ? (_(), w("div", {
                  key: 0,
                  class: "group-item-tit",
                  title: e.groupTit
                }, K(e.groupTit), 9, Bt)) : D("", !0),
                A("div", {
                  class: te(["group-item-content", e.groupTit ? "" : "full"])
                }, [
                  (_(!0), w(fe, null, Re(e.groupData, (o, a) => (_(), w("div", {
                    class: te(["com-item-box-child", o.isObstacle ? "is-obstacle" : ""]),
                    style: N({
                      width: o.s_width + "px",
                      height: o.s_height + "px",
                      top: o.s_y + "px",
                      left: o.s_x + "px"
                    }),
                    key: a
                  }, [
                    A("div", Ht, [
                      ye(s.$slots, "item", { data: o }, () => [
                        A("p", null, K(Math.round(o.s_width * 100) / 100) + "," + K(Math.round(o.s_height * 100) / 100), 1),
                        A("p", null, K(Math.round(o.s_x * 100) / 100) + "," + K(Math.round(o.s_y * 100) / 100), 1)
                      ])
                    ]),
                    !y.seeModel && !p(V) && p(P) === null && p(v) === null ? (_(), w("div", {
                      key: 0,
                      class: "setting-box",
                      style: N({ display: o.showPop ? "flex" : "none" }),
                      onMousedown: $((u) => null, ["prevent", "stop"])
                    }, [
                      ut(dt, {
                        iconObj: y.settingIcon,
                        onClick: $((u) => st(o), ["prevent", "stop"])
                      }, null, 8, ["iconObj", "onClick"])
                    ], 36)) : D("", !0),
                    o.showPop ? (_(), w("div", {
                      key: 1,
                      class: "setting-box-pop",
                      onMousedown: $((u) => null, ["prevent", "stop"])
                    }, [
                      ye(s.$slots, "setPopNormal", {
                        data: H(o)
                      }, () => [
                        A("div", {
                          class: "setting-box-pop-item",
                          onClick: (u) => lt(o.id, o.inGroupId)
                        }, "移出组合", 8, Xt),
                        A("div", {
                          class: "setting-box-pop-item",
                          onClick: (u) => $e(o.id, o.inGroupId)
                        }, "复制", 8, $t),
                        A("div", {
                          class: "setting-box-pop-item",
                          onClick: (u) => ge(o.id, o.inGroupId)
                        }, "删除", 8, Wt)
                      ])
                    ], 32)) : D("", !0)
                  ], 6))), 128))
                ], 2)
              ], 64)) : (_(), w("div", Lt, [
                ye(s.$slots, "item", { data: e }, () => [
                  A("p", null, K(Math.round(e.s_width * 100) / 100) + "," + K(Math.round(e.s_height * 100) / 100), 1),
                  A("p", null, K(Math.round(e.s_x * 100) / 100) + "," + K(Math.round(e.s_y * 100) / 100), 1)
                ])
              ])),
              !e.isGroup && e.notGroup !== !0 && p(V) ? (_(), w("div", {
                key: 2,
                class: te(["group-checkbox", e.checked ? "is-checked" : "", e.checkDis ? "disabled" : ""]),
                onClick: (o) => e.checkDis ? null : Mt(e)
              }, null, 10, Rt)) : D("", !0),
              !y.seeModel && !p(V) && p(P) === null && p(v) === null ? (_(), w("div", {
                key: 3,
                class: te(["setting-box", e.isGroup === !0 ? e.btnPosition === "right" ? "only-g" : e.btnPosition === "left" ? "only-g l" : e.btnPosition === "top" ? "only-g t" : e.btnPosition === "bottom" ? "only-g b" : e.btnPosition === "center" ? "only-g c" : "" : ""]),
                style: N({ display: e.showPop || e.showSet ? "flex" : "none" }),
                onMousedown: $((o) => null, ["prevent", "stop"])
              }, [
                ut(dt, {
                  iconObj: y.settingIcon,
                  onClick: $((o) => st(e), ["prevent", "stop"])
                }, null, 8, ["iconObj", "onClick"])
              ], 38)) : D("", !0),
              e.showPop ? (_(), w("div", {
                key: 4,
                class: te(["setting-box-pop", e.isGroup === !0 ? e.btnPosition === "right" ? "special" : e.btnPosition === "left" ? "special l" : e.btnPosition === "top" ? "special t" : e.btnPosition === "bottom" ? "special b" : e.btnPosition === "center" ? "special c" : "" : ""]),
                onMousedown: $((o) => null, ["prevent", "stop"])
              }, [
                e.isGroup === !0 ? ye(s.$slots, "setPopSpecial", {
                  key: 0,
                  data: H(e)
                }, () => [
                  y.hideTit ? D("", !0) : (_(), w("div", {
                    key: 0,
                    class: "setting-box-pop-item",
                    onClick: (o) => {
                      Xe(e.id), B("showTitPop", e.groupTit, e.id);
                    }
                  }, " 设置组合标题", 8, Vt)),
                  A("div", {
                    class: "setting-box-pop-item",
                    onClick: (o) => Ee(e.id)
                  }, "解除组合", 8, Nt)
                ]) : ye(s.$slots, "setPopNormal", {
                  key: 1,
                  data: H(e)
                }, () => [
                  e.notGroup !== !0 ? (_(), w("div", {
                    key: 0,
                    class: "setting-box-pop-item",
                    onClick: (o) => ot(e.id)
                  }, "组合", 8, mt)) : D("", !0),
                  A("div", {
                    class: "setting-box-pop-item",
                    onClick: (o) => $e(e.id)
                  }, "复制", 8, Kt),
                  A("div", {
                    class: "setting-box-pop-item",
                    onClick: (o) => ge(e.id)
                  }, "删除", 8, qt)
                ])
              ], 34)) : D("", !0)
            ]),
            !y.seeModel && !p(V) && !e.showPop && !(e.isGroup && e.groupData.filter((o) => o.showPop).length > 0) && !e.move && e.static !== !0 && e.resizable !== !1 ? (_(), w(fe, { key: 0 }, [
              p(F).indexOf("topLeft") !== -1 ? (_(), w("div", {
                key: 0,
                class: "resize-line top-left",
                onMousedown: $((o) => Z(o, e, "top-left"), ["prevent", "stop"])
              }, null, 40, Ft)) : D("", !0),
              p(F).indexOf("top") !== -1 ? (_(), w("div", {
                key: 1,
                class: "resize-line top",
                onMousedown: $((o) => Z(o, e, "top"), ["prevent", "stop"])
              }, null, 40, Ut)) : D("", !0),
              p(F).indexOf("topRight") !== -1 ? (_(), w("div", {
                key: 2,
                class: "resize-line top-right",
                onMousedown: $((o) => Z(o, e, "top-right"), ["prevent", "stop"])
              }, null, 40, Jt)) : D("", !0),
              p(F).indexOf("left") !== -1 ? (_(), w("div", {
                key: 3,
                class: "resize-line left",
                onMousedown: $((o) => Z(o, e, "left"), ["prevent", "stop"])
              }, null, 40, Qt)) : D("", !0),
              p(F).indexOf("right") !== -1 ? (_(), w("div", {
                key: 4,
                class: "resize-line right",
                onMousedown: $((o) => Z(o, e, "right"), ["prevent", "stop"])
              }, null, 40, Zt)) : D("", !0),
              p(F).indexOf("bottomLeft") !== -1 ? (_(), w("div", {
                key: 5,
                class: "resize-line bottom-left",
                onMousedown: $((o) => Z(o, e, "bottom-left"), ["prevent", "stop"])
              }, null, 40, jt)) : D("", !0),
              p(F).indexOf("bottom") !== -1 ? (_(), w("div", {
                key: 6,
                class: "resize-line bottom",
                onMousedown: $((o) => Z(o, e, "bottom"), ["prevent", "stop"])
              }, null, 40, es)) : D("", !0),
              p(F).indexOf("bottomRight") !== -1 ? (_(), w("div", {
                key: 7,
                class: "resize-line bottom-right",
                onMousedown: $((o) => Z(o, e, "bottom-right"), ["prevent", "stop"])
              }, null, 40, ts)) : D("", !0)
            ], 64)) : D("", !0)
          ], 42, Yt)
        ], 6))), 128)),
        (_(!0), w(fe, null, Re(p(r), (e, l) => (_(), w("div", {
          class: te(["shadow-bg", e.move ? "is-move" : ""]),
          style: N({
            width: e.s_width - p(W) * 2 * p(S) + "px",
            height: e.s_height - p(U) * 2 * p(S) + "px",
            top: e.s_y + p(U) * p(S) + "px",
            left: e.s_x + p(W) * p(S) + "px"
          }),
          key: l
        }, null, 6))), 128)),
        p(P) !== null ? (_(), w("div", {
          key: 0,
          class: "drag-bg",
          style: N({
            width: p(G).s_width + "px",
            height: p(G).s_height + "px",
            top: p(G).s_y + "px",
            left: p(G).s_x + "px"
          })
        }, null, 4)) : D("", !0),
        A("div", {
          class: "height-bg",
          style: N({ height: (p(xe) > 0 ? +(p(xe) * p(S) + (y.seeModel ? y.seeModelMinBg : 220)) : 0) + "px" })
        }, null, 4),
        y.showAuxiliary ? (_(), w(fe, { key: 1 }, [
          p(we) !== null ? (_(), w("div", {
            key: 0,
            class: "auxiliary-line hor",
            style: N({ top: p(we) + "px", left: "0px" })
          }, null, 4)) : D("", !0),
          p(be) !== null ? (_(), w("div", {
            key: 1,
            class: "auxiliary-line hor",
            style: N({ top: p(be) + "px", left: "0px" })
          }, null, 4)) : D("", !0),
          p(ke) !== null ? (_(), w("div", {
            key: 2,
            class: "auxiliary-line",
            style: N({ top: "0px", left: p(ke) + "px" })
          }, null, 4)) : D("", !0),
          p(Me) !== null ? (_(), w("div", {
            key: 3,
            class: "auxiliary-line",
            style: N({ top: "0px", left: p(Me) + "px" })
          }, null, 4)) : D("", !0)
        ], 64)) : D("", !0),
        p(r).length === 0 ? (_(), w("div", ss, [
          ye(s.$slots, "empty", {}, () => [
            t[0] || (t[0] = Ot(" 暂无数据 "))
          ])
        ])) : D("", !0)
      ])
    ], 4));
  }
}, ls = [os], rs = {
  install(y) {
    ls.forEach((q) => {
      y.component("vueDragComponentPlus", q);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(rs);
export {
  rs as default
};
