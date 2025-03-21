import { resolveComponent as At, openBlock as _, createBlock as me, resolveDynamicComponent as ht, normalizeProps as dt, mergeProps as Ae, withCtx as Yt, createElementBlock as w, toDisplayString as K, ref as W, watch as pt, onMounted as Bt, onBeforeUnmount as Rt, normalizeStyle as V, unref as d, createElementVNode as B, Fragment as ge, renderList as Ke, normalizeClass as te, withModifiers as L, createCommentVNode as I, renderSlot as ye, createVNode as ft, createTextVNode as Ht, nextTick as gt, isVNode as yt } from "vue";
const vt = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(g) {
    return (F, Fe) => {
      const O = At("el-icon");
      return g.iconObj.type === "custom" ? (_(), me(ht(g.iconObj.icon), dt(Ae({ key: 0 }, g.iconObj.attrs)), null, 16)) : g.iconObj.type === "el" ? (_(), me(O, dt(Ae({ key: 1 }, g.iconObj.attrs)), {
        default: Yt(() => [
          (_(), me(ht(g.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : g.iconObj.type === "iconfont" ? (_(), w("i", Ae({
        key: 2,
        class: ["icon iconfont", "icon-" + g.iconObj.icon]
      }, g.iconObj.attrs), null, 16)) : (_(), w("i", Ae({
        key: 3,
        class: g.iconObj.type
      }, g.iconObj.attrs), K(g.iconObj.icon), 17));
    };
  }
};
const Lt = { class: "content-box" }, Xt = ["onMousedown", "onMouseenter", "onMouseleave"], $t = { class: "com-item-box" }, Wt = ["title"], Nt = { class: "com-item-box-content" }, Vt = ["onClick"], mt = ["onClick"], Kt = ["onClick"], Ft = {
  key: 1,
  class: "com-item-box-content"
}, qt = ["onClick"], Ut = ["onClick"], Jt = ["onClick"], Qt = ["onClick"], Zt = ["onClick"], jt = ["onClick"], es = ["onMousedown"], ts = ["onMousedown"], ss = ["onMousedown"], os = ["onMousedown"], ls = ["onMousedown"], rs = ["onMousedown"], ns = ["onMousedown"], as = ["onMousedown"], is = {
  key: 2,
  class: "com-empty"
}, us = {
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
      validator(g, F) {
        return g >= 0;
      }
    },
    // 组件项最小宽度（原始尺寸）
    itemMinWidth: {
      type: Number,
      default: 15,
      validator(g, F) {
        return g >= 15;
      }
    },
    // 组件项最小高度（原始尺寸）
    itemMinHeight: {
      type: Number,
      default: 15,
      validator(g, F) {
        return g >= 15;
      }
    },
    // 纵向相邻元素的自动间距（原始尺寸）
    xSpace: {
      type: Number,
      default: 10,
      validator(g, F) {
        return g >= 0;
      }
    },
    // 横向相邻元素的自动间距（原始尺寸）
    ySpace: {
      type: Number,
      default: null,
      validator(g, F) {
        return g >= 0;
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
    },
    // 组合前数据处理
    beforeAddGroup: {
      type: Function,
      default: (g) => g
    },
    // 解散/移出组合前数据处理
    beforeRemoveGroup: {
      type: Function,
      default: (g) => g
    }
  },
  emits: ["baseWidthInit", "changeScle", "dragStart", "dragIng", "dragEnd", "resizeStart", "resizeIng", "resizeEnd", "showGroup", "openSetMenu", "updateChecked", "showTitPop", "domStart", "domReady"],
  setup(g, { expose: F, emit: Fe }) {
    const O = Fe, z = g, D = (t) => {
      if (typeof t == "object" && !yt(t) && t !== null && !(t instanceof Date)) {
        let s = t instanceof Array ? [] : {};
        for (let e in t)
          s[e] = typeof t[e] == "object" && !yt(t[e]) && t[e] !== null && !(t[e] instanceof Date) ? D(t[e]) : t[e];
        return s;
      } else
        return t;
    }, _t = (t, s) => {
      let e = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
      for (; t && !e.call(t, s); )
        t = t.parentElement;
      return t;
    }, xt = (t, s) => t.classList ? t.classList.contains(s) : new RegExp("\\s" + s + "\\s").test(" " + t.className + " "), qe = (t, s) => {
      let e = [], l = (o) => {
        o.forEach((a) => {
          xt(a, s) && e.push(a), a.childNodes && a.childNodes.length > 0 && l(a.childNodes);
        });
      };
      return l(t.childNodes), e;
    }, Pe = (t, s, e = !1) => wt(se(t, s, e), s, e), se = (t, s, e = !1) => t.filter((l) => l[e ? "s_x" : "x"] <= s[e ? "s_x" : "x"] && l[e ? "s_x" : "x"] + l[e ? "s_width" : "width"] > s[e ? "s_x" : "x"] || l[e ? "s_x" : "x"] > s[e ? "s_x" : "x"] && l[e ? "s_x" : "x"] < s[e ? "s_x" : "x"] + s[e ? "s_width" : "width"]), wt = (t, s, e = !1) => t.filter((l) => l[e ? "s_y" : "y"] <= s[e ? "s_y" : "y"] && l[e ? "s_y" : "y"] + l[e ? "s_height" : "height"] > s[e ? "s_y" : "y"] || l[e ? "s_y" : "y"] > s[e ? "s_y" : "y"] && l[e ? "s_y" : "y"] < s[e ? "s_y" : "y"] + s[e ? "s_height" : "height"]), oe = (t, s = (l) => l, e = !1) => {
      const l = D(r.value), o = D(t);
      o.sort((u, k) => {
        const h = u[e ? "s_y" : "y"], f = k[e ? "s_y" : "y"];
        if (h !== f)
          return h - f;
        {
          const n = u[e ? "s_x" : "x"], x = k[e ? "s_x" : "x"];
          return n - x;
        }
      });
      const a = (u) => {
        Pe(s(l, u), u, e).forEach((h) => {
          h[e ? "s_y" : "y"] = u[e ? "s_y" : "y"] + u[e ? "s_height" : "height"], a(h);
        });
      };
      o.forEach((u) => a(l.filter((k) => k.id === u.id)[0])), l.forEach((u) => {
        r.value.filter((k) => k.id === u.id)[0][e ? "s_y" : "y"] = u[e ? "s_y" : "y"];
      });
    }, R = (t) => {
      const s = D(t);
      return delete s.showPop, delete s.showSet, s.groupData ? s.groupData.forEach((e) => {
        delete e.showPop, delete e.showSet, j(e, s), delete e.s_width, delete e.s_height, delete e.s_x, delete e.s_y;
      }) : s.inGroupId && (delete s.showPop, delete s.showSet, j(s, r.value.filter((e) => e.id === s.inGroupId)[0])), delete s.btnPosition, delete s.s_width, delete s.s_height, delete s.s_x, delete s.s_y, s;
    }, r = W([]), Ue = () => {
      z.insertResizeKeys.forEach((t) => {
        z.excludeResizeKeys.indexOf(t) === -1 && q.value.push(t);
      });
    };
    pt(
      () => [z.insertResizeKeys, z.excludeResizeKeys],
      () => {
        Ue();
      }
    );
    const q = W([]);
    Ue();
    const Je = () => {
      r.value.length > 0 && r.value.filter((t) => t.isGroup === !0).forEach((t) => {
        ue(t);
      });
    }, Qe = () => {
      z.xSpace !== null && z.xSpace !== void 0 ? X.value = z.xSpace / 2 : X.value = 10 / 2, z.ySpace !== null && z.ySpace !== void 0 && z.ySpace >= 0 ? U.value = z.ySpace / 2 : U.value = X.value, Je();
    };
    pt(
      () => [z.xSpace, z.ySpace],
      () => {
        Qe();
      }
    );
    const X = W(0), U = W(0);
    Qe();
    const $ = W(null);
    let ie = null;
    const ve = (t) => {
      ie = t, O("baseWidthInit", ie);
    }, S = W(1), _e = (t) => {
      S.value = t, O("changeScle", S.value);
    }, ue = (t) => {
      t.s_width = t.width * S.value, t.s_height = t.height * S.value;
      const s = getComputedStyle($.value), e = parseInt(s.getPropertyValue("--com-item-border-width").trim()), l = parseInt(s.getPropertyValue("--group-tit-height").trim());
      if (t.isGroup === !0) {
        const o = t.s_width - 2 * X.value * S.value - 2 * e, a = t.s_height - 2 * U.value * S.value - 2 * e - (t.groupTit ? l : 0);
        t.groupData.forEach((u) => {
          u.s_width = o * u.groupW, u.s_height = a * u.groupH, u.s_x = o * u.groupX, u.s_y = a * u.groupY;
        });
      }
    }, bt = (t) => {
      t.s_x = t.x * S.value, t.s_y = t.y * S.value;
    }, kt = (t) => {
      t.width = t.s_width / S.value, t.height = t.s_height / S.value;
      const s = getComputedStyle($.value), e = parseInt(s.getPropertyValue("--group-tit-height").trim());
      if (t.isGroup === !0) {
        const l = t.width, o = t.height - (t.groupTit ? e : 0);
        t.groupData.forEach((a) => {
          a.x = l * a.groupX, a.y = o * a.groupY;
        });
      }
    }, Ye = (t) => {
      t.x = t.s_x / S.value, t.y = t.s_y / S.value;
    };
    let J = null, Ze = null;
    const xe = W(0), we = W(null), be = W(null), ke = W(null), Me = W(null), ce = (t) => {
      const s = D(t);
      if (!z.showAuxiliary || t === null)
        we.value = null, be.value = null, ke.value = null, Me.value = null;
      else {
        const e = getComputedStyle($.value), l = parseInt(e.getPropertyValue("--auxiliary-width").trim()), o = r.value.filter((n) => n.id !== s.id).map((n) => n.s_y), a = r.value.filter((n) => n.id !== s.id).map((n) => n.s_y + n.s_height), u = [...o, ...a];
        u.sort(), u.filter((n) => n === s.s_y).length > 0 ? we.value = s.s_y : we.value = null, u.filter((n) => n === s.s_y + s.s_height).length > 0 ? be.value = s.s_y + s.s_height - l : be.value = null;
        const k = r.value.filter((n) => n.id !== s.id).map((n) => n.s_x), h = r.value.filter((n) => n.id !== s.id).map((n) => n.s_x + n.s_width), f = [...k, ...h];
        f.sort(), f.filter((n) => n === s.s_x).length > 0 ? ke.value = s.s_x : ke.value = null, f.filter((n) => n === s.s_x + s.s_width).length > 0 ? Me.value = s.s_x + s.s_width - l : Me.value = null;
      }
    };
    let P = null, je = null, et = null;
    const G = W({});
    let Be = null;
    const Mt = (t, s) => {
      clearTimeout(Be), Ee(), P = s, G.value = D(r.value[P]), O("dragStart", R(r.value[P])), r.value[P].move = !0, ce(r.value[P]);
      const e = _t(t.target, ".com-item");
      je = t.clientX - e.offsetLeft, et = t.clientY - e.offsetTop, window.addEventListener("mousemove", tt), window.addEventListener("mouseup", st);
    }, tt = (t) => {
      clearTimeout(Be);
      const s = t.clientX - je, e = t.clientY - et, l = s <= Q("left") ? Q("left") : s >= Q("right") ? Q("right") : s, o = e <= Q("top") ? Q("top") : e >= Q("bottom") ? Q("bottom") : e, a = l - r.value[P].s_x, u = o - r.value[P].s_y;
      let k = "";
      u > 0 ? k = "bottom" : u < 0 ? k = "top" : a > 2 ? k = "right" : a < -2 && (k = "left"), r.value[P].s_x = l, r.value[P].s_y = o, ce(r.value[P]);
      let h = Pe(D(r.value.filter((f) => f.move !== !0)), r.value[P], !0);
      if (h.length === 0)
        G.value.s_x = l, G.value.s_y = o;
      else
        switch (k) {
          case "top":
            h = h.filter((i) => i.s_y < G.value.s_y);
            const f = Math.min(...h.map((i) => i.s_y + i.s_height));
            h.forEach((i) => {
              Math.abs(i.s_y + i.s_height - f) < 5 && (i.s_y = f - i.s_height);
            });
            let n = G.value.s_y - o, x = !0, p = [...h];
            const E = (i) => {
              se(D(r.value.filter((c) => c.move !== !0 && Math.abs(c.s_y + c.s_height - i.s_y) <= 3)), i, !0).forEach((c) => {
                p.findIndex((y) => y.id === c.id) === -1 && (p.push(c), E(c));
              });
            };
            if (h.forEach((i) => {
              E(i);
            }), p.sort((i, b) => {
              const c = i.s_y, y = b.s_y;
              return c - y;
            }), (p.length === 0 || p.filter((i) => i.s_y === 0).length > 0) && (x = !1), x) {
              let i = 0;
              p.filter((c) => c.s_y === p[0].s_y).forEach((c) => {
                se(D(r.value.filter((C) => C.move !== !0 && C.s_y + C.s_height < c.s_y)), c, !0).forEach((C) => {
                  C.s_y + C.s_height > i && (i = C.s_y + C.s_height);
                });
              }), i = p[0].s_y - i, i < n && (n = i), p.forEach((c) => {
                c.s_y -= n, r.value.filter((y) => y.id === c.id)[0].s_y = c.s_y;
              }), G.value.s_x = l, G.value.s_y = r.value.filter((c) => c.id === p[p.length - 1].id)[0].s_y + r.value.filter((c) => c.id === p[p.length - 1].id)[0].s_height;
            } else {
              let i = 0;
              h.forEach((y) => {
                const C = se(r.value.filter((Y) => Y.move !== !0), y, !0).filter((Y) => Y.s_y > y.s_y + y.s_height);
                C.length > 0 && (i = Math.min(...C.map((Y) => Y.s_y)));
              });
              const b = i === 0 ? 0 : i - G.value.s_height - (Math.max(...h.map((y) => y.s_y + y.s_height)) - Math.min(...h.map((y) => y.s_y))), c = b === 0 ? o + G.value.s_height - Math.min(...h.map((y) => y.s_y)) : i - Math.min(...h.map((y) => y.s_y)) - (Math.max(...h.map((y) => y.s_y + y.s_height)) - Math.min(...h.map((y) => y.s_y)));
              (b === 0 || o <= b) && (h.filter((y) => y.s_y < G.value.s_y).forEach((y) => {
                y.s_y += c, r.value.filter((C) => C.id === y.id)[0].s_y = y.s_y;
              }), G.value.s_x = l, G.value.s_y = o, oe(r.value, (y, C) => y.filter((Y) => Y.move !== !0 && Y.id !== C.id), !0));
            }
            break;
          case "bottom":
            let T = 0;
            h.forEach((i) => {
              const b = se(r.value.filter((c) => c.move !== !0), i, !0).filter((c) => c.s_y + c.s_height < i.s_y);
              b.length > 0 && (T = Math.max(...b.map((c) => c.s_y + c.s_height)));
            });
            const H = T + (Math.max(...h.map((i) => i.s_height + i.s_y)) - Math.min(...h.map((i) => i.s_y))), A = Math.min(...h.map((i) => i.s_y)) - T;
            o >= H && (h.filter((i) => i.s_y > G.value.s_y).forEach((i) => {
              i.s_y -= A, r.value.filter((c) => c.id === i.id)[0].s_y = i.s_y;
              const b = Pe(r.value.filter((c) => c.move !== !0 && c.id !== i.id), i, !0);
              b.length > 0 && (i.s_y = Math.max(...b.map((c) => c.s_y + c.s_height)), r.value.filter((c) => c.id === i.id)[0].s_y = i.s_y);
            }), G.value.s_x = l, G.value.s_y = H, oe(r.value, (i, b) => i.filter((c) => c.move !== !0 && c.id !== b.id), !0));
            break;
          case "left":
          case "right":
            h.sort((i, b) => {
              const c = i.s_y, y = b.s_y;
              return c - y;
            });
            let ee = !0;
            for (let i = 0; i < h.length; i++) {
              if (ee) {
                const b = D(r.value);
                for (let c = 0; c <= i; c++) {
                  let y = null;
                  const C = se(b.filter((Y) => Y.move !== !0 && Y.s_y < h[c].s_y), h[c], !0);
                  if (C.length === 0 ? y = 0 : y = Math.max(...C.map((Y) => Y.s_y + Y.s_height)), c === i) {
                    if (h[c].s_y - (h[c].s_y + h[c].s_height - o) < y) {
                      ee = !1;
                      break;
                    }
                  } else if (h[c].s_y - h[i].s_height < y) {
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
                  b.s_y += r.value[P].s_y + r.value[P].s_height - b.s_y, r.value.filter((c) => c.id === b.id)[0].s_y = b.s_y, oe([b], (c, y) => c.filter((C) => C.move !== !0 && C.id !== y.id), !0);
                });
            }
            G.value.s_x = l;
            break;
        }
      r.value.forEach((f) => {
        Ye(f);
      }), m(!1), O("dragIng", R(r.value[P]));
    }, st = () => {
      window.removeEventListener("mousemove", tt), window.removeEventListener("mouseup", st), delete r.value[P].move, r.value[P].s_x = G.value.s_x, r.value[P].s_y = G.value.s_y, ce(null), r.value.forEach((t) => {
        Ye(t);
      }), m(), O("dragEnd", R(r.value[P])), P = null, Be = setTimeout(() => {
        m();
      }, 500);
    }, Q = (t) => {
      switch (t) {
        case "top":
          return 0;
        case "right":
          return J - X.value * 2 * S.value - r.value[P].s_width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let v = null, Re = "", Ie = 0, Ge = 0, le = 0, re = 0, ne = 0, ae = 0, he = 0, Ce = 0, de = 0, ze = 0;
    const Z = (t, s, e) => {
      Ee(), v = s, O("resizeStart", R(v)), Re = e, Ie = t.clientX, Ge = t.clientY, le = s.s_width, re = s.s_height, ne = s.s_y, ae = s.s_x, v.drag = !0, ce(v);
      const l = r.value.filter((f) => f.static === !0 && (f.s_x < s.s_x ? f.s_x + f.s_width >= s.s_x : f.s_x <= s.s_x + s.s_width)), o = r.value.filter((f) => f.static === !0 && (f.s_y < s.s_y ? f.s_y + f.s_height >= s.s_y : f.s_y <= s.s_y + s.s_height)), a = l.filter((f) => f.s_y + f.s_height <= s.s_y).map((f) => f.s_y + f.s_height);
      a.length > 0 ? he = Math.max(...a) : he = 0;
      const u = l.filter((f) => f.s_y >= s.s_y + s.s_height).map((f) => f.s_y);
      u.length > 0 ? Ce = Math.min(...u) : Ce = 0;
      const k = o.filter((f) => f.s_x + f.s_width <= s.s_x).map((f) => f.s_x + f.s_width);
      k.length > 0 ? de = Math.max(...k) : de = 0;
      const h = o.filter((f) => f.s_x >= s.s_x + s.s_width).map((f) => f.s_x);
      h.length > 0 ? ze = Math.min(...h) : ze = 0, window.addEventListener("mousemove", ot), window.addEventListener("mouseup", lt);
    }, ot = (t) => {
      const s = le + (t.clientX - Ie), e = re + (t.clientY - Ge), l = le - (t.clientX - Ie), o = re - (t.clientY - Ge), a = ne + (t.clientY - Ge), u = ae + (t.clientX - Ie), k = getComputedStyle($.value), h = parseInt(k.getPropertyValue("--com-item-border-width").trim()), f = parseInt(k.getPropertyValue("--group-tit-height").trim()), n = () => {
        if (v.isGroup === !0) {
          const T = v.s_width - 2 * X.value * S.value - 2 * h, H = v.s_height - 2 * U.value * S.value - 2 * h - (v.groupTit ? f : 0);
          v.groupData.forEach((A) => {
            A.s_width = T * A.groupW, A.s_height = H * A.groupH, A.s_x = T * A.groupX, A.s_y = H * A.groupY;
          });
        }
      }, x = (z.itemMinWidth + X.value * 2) * S.value, p = (z.itemMinHeight + U.value * 2) * S.value;
      switch (Re) {
        case "top-left":
          v.s_height = o < p ? p : o > M("top") ? M("top") : o, v.s_y = o < p ? ne + re - p : o > M("top") ? he : a, v.s_width = l < x ? x : l > M("left") ? M("left") : l, v.s_x = l < x ? ae + le - x : l > M("left") ? de : u, n();
          break;
        case "top":
          v.s_height = o < p ? p : o > M("top") ? M("top") : o, v.s_y = o < p ? ne + re - p : o > M("top") ? he : a, n();
          break;
        case "top-right":
          v.s_height = o < p ? p : o > M("top") ? M("top") : o, v.s_y = o < p ? ne + re - p : o > M("top") ? he : a, v.s_width = s < x ? x : s > M("right") ? M("right") : s, n();
          break;
        case "left":
          v.s_width = l < x ? x : l > M("left") ? M("left") : l, v.s_x = l < x ? ae + le - x : l > M("left") ? de : u, n();
          break;
        case "right":
          v.s_width = s < x ? x : s > M("right") ? M("right") : s, n();
          break;
        case "bottom-left":
          v.s_height = e < p ? p : e > M("bottom") ? M("bottom") : e, v.s_width = l < x ? x : l > M("left") ? M("left") : l, v.s_x = l < x ? ae + le - x : l > M("left") ? de : u, n();
          break;
        case "bottom":
          v.s_height = e < p ? p : e > M("bottom") ? M("bottom") : e, n();
          break;
        case "bottom-right":
          v.s_height = e < p ? p : e > M("bottom") ? M("bottom") : e, v.s_width = s < x ? x : s > M("right") ? M("right") : s, n();
          break;
      }
      kt(v), ce(v);
      let E = Pe(D(r.value.filter((T) => T.drag !== !0)), v, !0);
      if (E.length > 0) {
        E.sort((T, H) => {
          const A = T.s_y, ee = H.s_y;
          return A - ee;
        });
        for (let T = 0; T < E.length; T++)
          E.filter((H) => H.id === E[T].id).forEach((H) => {
            H.s_y += v.s_y + v.s_height - H.s_y, r.value.filter((A) => A.id === H.id)[0].s_y = H.s_y, oe([H], (A, ee) => A.filter((i) => i.drag !== !0 && i.id !== ee.id), !0);
          });
      }
      r.value.forEach((T) => {
        Ye(T);
      }), m(!1), O("resizeIng", R(v));
    }, lt = (t) => {
      delete v.drag, Re = "", ce(null), window.removeEventListener("mousemove", ot), window.removeEventListener("mouseup", lt), m(), O("resizeEnd", R(v)), v = null;
    }, M = (t) => {
      switch (t) {
        case "top":
          return ne + re - he;
        case "left":
          return ae + le - de;
        case "right":
          return (ze > 0 ? ze : J - X.value * 2 * S.value) - ae;
        case "bottom":
          return Ce > 0 ? Ce - ne : 999999999;
      }
    }, m = (t = !0) => {
      t === !0 && (oe(r.value, (e, l) => e.filter((o) => o.id !== l.id)), St(), r.value.forEach((e) => {
        bt(e);
      }), Et());
      const s = r.value.map((e) => e.y + e.height);
      s.length > 0 ? xe.value = Math.max(...s) : xe.value = 0;
    }, St = () => {
      const t = D(r.value).sort((s, e) => {
        const l = s.y, o = e.y;
        return l - o;
      });
      for (let s = 0; s < t.length; s++) {
        const e = se(t, t[s]).filter((l) => l.y + l.height <= t[s].y);
        e.length > 0 ? t[s].y = Math.max(...e.map((l) => l.y + l.height)) : t[s].y = 0;
      }
      t.forEach((s) => {
        r.value.filter((e) => e.id === s.id)[0].y = s.y;
      });
    }, Et = () => {
      const t = r.value.filter((s) => s.isGroup === !0);
      if (t.length > 0) {
        const s = getComputedStyle($.value), e = parseInt(s.getPropertyValue("--setting-icon-group-width").trim()), l = parseInt(s.getPropertyValue("--setting-icon-group-height").trim());
        t.forEach((o) => {
          X.value + o.s_x + o.s_width + e > J ? X.value + o.s_x - e < 0 ? z.groupBtnPosMore ? U.value + o.s_y - l < 0 ? o.btnPosition = "bottom" : o.btnPosition = "top" : o.btnPosition = "center" : o.btnPosition = "left" : o.btnPosition = "right";
        });
      }
    };
    Bt(() => {
      rt.observe($.value);
    });
    const rt = new ResizeObserver((t) => {
      It(J === t[0].borderBoxSize[0].inlineSize ? null : t[0].borderBoxSize[0].inlineSize, Ze === t[0].borderBoxSize[0].blockSize ? null : t[0].borderBoxSize[0].blockSize);
    }), Se = W("");
    let He = 0, Le = 0, Xe = null, $e = !1;
    const Dt = (t = [], s = null) => {
      clearInterval(Xe), Se.value = (/* @__PURE__ */ new Date()).getTime() + "", He = 0, Le = 0, t.forEach((e) => {
        He += 1, e.isGroup === !0 && (Le += e.groupData.length);
      }), ct(), O("domStart"), r.value = D(t), r.value.filter((e) => e.isGroup === !0).forEach((e) => {
        if (e.groupData.length < 2)
          De(e.id);
        else {
          const l = Te(e.groupData, e);
          Oe(l);
        }
      }), $e = !0, gt(() => {
        const e = $.value.getBoundingClientRect();
        s != null ? (ve(s), _e(e.width / s)) : (ve(r.value.length > 0 ? e.width : null), _e(1)), r.value.forEach((l) => {
          ue(l);
        }), m(), Xe = setInterval(() => {
          qe($.value, Se.value + "p").length === He && qe($.value, Se.value + "c").length === Le && (clearInterval(Xe), O("domReady"));
        }, 10), setTimeout(() => {
          $e = !1;
        }, 500);
      });
    }, Pt = (t) => {
      t.showSet = !0;
    }, We = (t) => {
      const s = r.value.filter((e) => e.id === t);
      if (s.length === 1)
        delete s[0].showSet;
      else
        try {
        } catch {
        }
    }, nt = (t, s, e) => {
      const l = s.map((u) => u.y), o = Math.max(...l), a = s.filter((u) => u.y + u.height > o);
      a.sort((u, k) => {
        const h = u.x, f = k.x;
        return h - f;
      });
      for (let u = 0; u < a.length; u++) {
        if (u === 0 && a[u].x >= t.width) {
          t.y = o, t.x = 0;
          break;
        }
        if (a.length > 1 && u !== a.length - 1 && a[u].x + a[u].width + t.width <= a[u + 1].x) {
          t.y = o, t.x = a[u].x + a[u].width;
          break;
        }
        if (u === a.length - 1 && a[u].x + a[u].width + t.width <= e) {
          t.y = o, t.x = a[u].x + a[u].width;
          break;
        }
      }
      if (t.y == null) {
        t.x = 0;
        const u = s.map((k) => k.y + k.height);
        t.y = Math.max(...u);
      }
    }, pe = (t, s = null, e = !1) => {
      const l = D(t), o = r.value.filter((a) => a.id === s);
      if (l.id || (l.id = (/* @__PURE__ */ new Date()).getTime() + ""), s && o.length !== 1)
        try {
        } catch {
        } finally {
          return;
        }
      if (e !== !0 && (delete l.x, delete l.y, s ? (o[0].groupData.forEach((a) => {
        j(a, o[0]);
      }), nt(l, o[0].groupData, o[0].width)) : r.value.length === 0 ? (l.x = 0, l.y = 0) : nt(l, r.value, (ie || J) - X.value * 2)), s) {
        o[0].groupData.push(l);
        const a = Te(o[0].groupData, o[0]);
        Oe(a), oe([a], (u, k) => u.filter((h) => h.id !== k.id));
      } else
        r.value.length === 0 && ve(J), ue(l), r.value.push(l);
      m();
    }, Ne = (t, s = null, e = null) => {
      let l = null;
      const o = r.value.filter((a) => a.id === s);
      if (s ? o.length === 1 && (l = D(o[0].groupData.filter((a) => a.id === t)[0])) : l = D(r.value.filter((a) => a.id === t)[0]), l)
        return l.id = e || (/* @__PURE__ */ new Date()).getTime() + "", s ? (j(l, o[0]), pe(l, s)) : pe(l), R(s ? r.value.filter((a) => a.id === s)[0].groupData.filter((a) => a.id === l.id)[0] : r.value.filter((a) => a.id === l.id)[0]);
      try {
      } catch {
      } finally {
        return null;
      }
    }, fe = (t, s = null) => {
      let e = -1;
      const l = r.value.filter((o) => o.id === s);
      if (s ? l.length === 1 && (e = l[0].groupData.findIndex((o) => o.id === t)) : e = r.value.findIndex((o) => o.id === t), e !== -1) {
        if (s)
          if (l[0].groupData.splice(e, 1), l[0].groupData.length === 1)
            De(s);
          else {
            l[0].groupData.forEach((a) => {
              j(a, l[0]);
            });
            const o = Te(l[0].groupData, l[0]);
            Oe(o);
          }
        else
          r.value.splice(e, 1), r.value.length === 0 && (ve(null), _e(1));
        m();
      } else
        try {
        } catch {
        }
    }, Oe = (t) => {
      if (t.id) {
        const s = D(t);
        delete s.showPop, delete s.showSet, delete s.btnPosition, s.groupData && s.groupData.forEach((o) => {
          delete o.showPop, delete o.showSet;
        });
        let e = -1;
        const l = r.value.filter((o) => o.id === s.inGroupId);
        if (s.inGroupId ? l.length === 1 && (e = l[0].groupData.findIndex((o) => o.id === s.id)) : e = r.value.findIndex((o) => o.id === s.id), e !== -1)
          s.inGroupId ? (l[0].groupData[e] = s, ue(l[0])) : (r.value[e] = s, ue(r.value[e])), m();
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, It = (t, s) => {
      t !== null && (J = t, $e || (_e(ie && J ? t / ie : 1), r.value.forEach((e) => {
        ue(e);
      }), m())), s !== null && (Ze = s);
    }, at = (t) => {
      t.showPop || (r.value.forEach((s) => {
        delete s.showPop, s.groupData && s.groupData.forEach((e) => {
          delete e.showPop;
        });
      }), O("openSetMenu", R(t)), t.showPop = !0, window.addEventListener("click", Ee));
    }, Ee = () => {
      r.value.forEach((t) => {
        delete t.showPop, t.groupData && t.groupData.forEach((s) => {
          delete s.showPop;
        });
      }), window.removeEventListener("click", Ee);
    }, N = W(!1), it = (t) => {
      const s = r.value.findIndex((e) => e.id === t);
      if (s !== -1)
        r.value[s].checked = !0, r.value[s].checkDis = !0, N.value = !0, O("showGroup", N.value);
      else
        try {
        } catch {
        }
    }, Ve = () => {
      N.value = !1, r.value.forEach((t) => {
        delete t.checked, delete t.checkDis, t.groupData && t.groupData.forEach((s) => {
          delete s.checked, delete s.checkDis;
        });
      }), O("showGroup", N.value);
    }, Gt = (t) => {
      t.checked = !t.checked, O("updateChecked", r.value.filter((s) => s.checked).length);
    }, Te = (t, s) => {
      const e = D(t), l = D(s);
      e.sort((n, x) => {
        const p = n.x, E = x.x;
        return p - E;
      });
      for (let n = 0; n < e.length - 1; n++) {
        if (n === 0 && e[n].x > 0) {
          const x = e[n].x;
          for (let p = n; p < e.length; p++)
            e[p].x -= x;
        }
        if (e[n + 1].x > e[n].x + e[n].width) {
          const x = D(e.slice(0, n + 1));
          if (e[n + 1].x > Math.max(...x.map((p) => p.x + p.width))) {
            const p = e[n + 1].x - Math.max(...x.map((E) => E.x + E.width));
            for (let E = n + 1; E < e.length; E++)
              e[E].x -= p;
          }
        }
      }
      e.sort((n, x) => {
        const p = n.y, E = x.y;
        return p - E;
      });
      for (let n = 0; n < e.length - 1; n++) {
        if (n === 0 && e[n].y > 0) {
          const x = e[n].y;
          for (let p = n; p < e.length; p++)
            e[p].y -= x;
        }
        if (e[n + 1].y > e[n].y + e[n].height) {
          const x = D(e.slice(0, n + 1));
          if (e[n + 1].y > Math.max(...x.map((p) => p.y + p.height))) {
            const p = e[n + 1].y - Math.max(...x.map((E) => E.y + E.height));
            for (let E = n + 1; E < e.length; E++)
              e[E].y -= p;
          }
        }
      }
      const o = e.map((n) => n.x + n.width), a = Math.max(...o), u = e.map((n) => n.y + n.height), k = Math.max(...u);
      e.forEach((n) => {
        n.inGroupId || (n.inGroupId = l.id), n.groupW = n.width / a, n.groupH = n.height / k, n.groupX = n.x / a, n.groupY = n.y / k, n.isObstacle = n.x + n.width === a && n.y === 0, delete n.width, delete n.height;
      });
      const h = getComputedStyle($.value), f = parseInt(h.getPropertyValue("--group-tit-height").trim());
      return l.width = a, l.height = k + (l.groupTit ? f : 0), l.groupData = [...e], l;
    }, j = (t, s) => {
      const e = getComputedStyle($.value), l = parseInt(e.getPropertyValue("--group-tit-height").trim());
      t.width = s.width * t.groupW, t.height = (s.height - (s.groupTit ? l : 0)) * t.groupH;
    }, Ct = () => {
      gt(() => {
        Je();
      });
    }, zt = () => {
      let t = r.value.filter((s) => s.checked);
      if (t.length > 1)
        if (t = z.beforeAddGroup(D(t)), typeof t == "object" && t instanceof Array && t.length > 0 && t.filter((s) => s.id).length === t.length) {
          const s = {
            id: (/* @__PURE__ */ new Date()).getTime() + "G",
            isGroup: !0,
            groupTit: ""
          }, e = Te(t, s);
          return e.groupData.forEach((l) => {
            fe(l.id);
          }), pe(e), Ve(), R(r.value.filter((l) => l.id === e.id)[0]);
        } else
          try {
          } catch {
          } finally {
            return null;
          }
      else
        return Ve(), null;
    }, ut = (t, s) => {
      const e = r.value.filter((l) => l.id === s)[0];
      if (e) {
        let l = e.groupData.filter((o) => o.id === t)[0];
        if (l) {
          if (e.groupData.length === 2)
            return De(s);
          if (l = z.beforeRemoveGroup(D([l])), typeof l == "object" && l instanceof Array && l.length === 1 && l.filter((o) => o.id).length === 1)
            return l = l[0], j(l, e), delete l.inGroupId, delete l.groupW, delete l.groupH, delete l.groupX, delete l.groupY, delete l.isObstacle, fe(l.id, e.id), pe(l), [R(r.value.filter((o) => o.id === t)[0])];
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
      } else
        try {
        } catch {
        } finally {
          return [];
        }
    }, De = (t) => {
      const s = r.value.filter((e) => e.id === t)[0];
      if (s) {
        let e = [], l = !0;
        try {
          s.groupData.forEach((o) => {
            if (o = z.beforeRemoveGroup(D([s])), typeof o == "object" && o instanceof Array && o.length === 1 && o.filter((a) => a.id).length === 1)
              o = o[0];
            else
              throw l = !1, new Error();
          });
        } catch {
        }
        if (l) {
          s.groupData.forEach((a) => {
            j(a, s), a.x += s.x, a.y += s.y, delete a.inGroupId, delete a.groupW, delete a.groupH, delete a.groupX, delete a.groupY, delete a.isObstacle, e.push(a.id), pe(a, null, !0);
          }), fe(s.id);
          let o = [];
          return e.forEach((a) => {
            o.push(R(r.value.filter((u) => u.id === a)[0]));
          }), o;
        } else
          return [];
      } else
        try {
        } catch {
        } finally {
          return [];
        }
    }, Ot = (t = "", s) => {
      const e = r.value.filter((l) => l.id === s)[0];
      if (e) {
        if (!e.groupTit || !t) {
          const l = getComputedStyle($.value), o = parseInt(l.getPropertyValue("--group-tit-height").trim());
          e.groupTit && !t && (e.height -= o, e.s_height -= o * S.value), !e.groupTit && t && (e.height += o, e.s_height += o * S.value);
        }
        e.groupTit = t, oe([e], (l, o) => l.filter((a) => a.id !== o.id)), m();
      } else
        try {
        } catch {
        }
    }, ct = () => {
      r.value = [], ve(null), _e(1), xe.value = 0;
    }, Tt = () => new Promise((t, s) => {
      r.value.forEach((l) => {
        delete l.showPop, delete l.showSet, l.groupData && l.groupData.forEach((o) => {
          delete o.showPop, delete o.showSet;
        });
      });
      const e = D(r.value);
      e.forEach((l) => {
        l.isGroup === !0 && l.groupData.forEach((o) => {
          j(o, l), delete o.s_width, delete o.s_height, delete o.s_x, delete o.s_y;
        }), delete l.btnPosition, delete l.s_width, delete l.s_height, delete l.s_x, delete l.s_y;
      }), t({ data: e, width: ie });
    });
    return Rt(() => {
      rt.unobserve($.value), window.removeEventListener("click", Ee);
    }), F({ init: Dt, addItem: pe, copyItem: Ne, deleteItem: fe, updateItem: Oe, hideGroupSet: We, openGroup: it, closeGroup: Ve, changeGroupBorder: Ct, addGroup: zt, removeGroupItem: ut, removeGroup: De, changeGroupTit: Ot, resetData: ct, getData: Tt }), (t, s) => (_(), w("div", {
      class: "vue-drag-component-plus",
      style: V({ "--css-scle": d(S), "--com-x-space": d(X) + "px", "--com-y-space": d(U) + "px" }),
      ref_key: "pageRef",
      ref: $
    }, [
      B("div", Lt, [
        (_(!0), w(ge, null, Ke(d(r), (e, l) => (_(), w("div", {
          class: te(["com-item", e.move ? "is-move" : "", e.drag ? "is-drag" : "", e.showPop || e.isGroup && e.groupData.filter((o) => o.showPop).length > 0 ? "on-top" : "", d(Se) + "p"]),
          style: V({
            width: e.s_width + "px",
            height: e.s_height + "px",
            top: e.s_y + "px",
            left: e.s_x + "px"
          }),
          key: l
        }, [
          B("div", {
            class: te(["com-item-inner", g.seeModel || d(N) || e.static === !0 || e.dragable === !1 ? "" : "can-drag", g.seeModel ? "no-hover" : ""]),
            onMousedown: L((o) => g.seeModel || d(N) || e.static === !0 || e.dragable === !1 ? null : Mt(o, l), ["prevent"]),
            onMouseenter: (o) => g.seeModel || d(N) || d(P) || d(v) || !e.isGroup ? null : Pt(e),
            onMouseleave: (o) => g.seeModel || d(N) || d(P) || d(v) || !e.isGroup ? null : We(e.id)
          }, [
            B("div", $t, [
              e.isGroup ? (_(), w(ge, { key: 0 }, [
                e.groupTit ? (_(), w("div", {
                  key: 0,
                  class: "group-item-tit",
                  title: e.groupTit
                }, K(e.groupTit), 9, Wt)) : I("", !0),
                B("div", {
                  class: te(["group-item-content", e.groupTit ? "" : "full"])
                }, [
                  (_(!0), w(ge, null, Ke(e.groupData, (o, a) => (_(), w("div", {
                    class: te(["com-item-box-child", o.isObstacle ? "is-obstacle" : "", d(Se) + "c"]),
                    style: V({
                      width: o.s_width + "px",
                      height: o.s_height + "px",
                      top: o.s_y + "px",
                      left: o.s_x + "px"
                    }),
                    key: a
                  }, [
                    B("div", Nt, [
                      ye(t.$slots, "item", { data: o }, () => [
                        B("p", null, K(Math.round(o.s_width * 100) / 100) + "," + K(Math.round(o.s_height * 100) / 100), 1),
                        B("p", null, K(Math.round(o.s_x * 100) / 100) + "," + K(Math.round(o.s_y * 100) / 100), 1)
                      ])
                    ]),
                    !g.seeModel && !d(N) && d(P) === null && d(v) === null ? (_(), w("div", {
                      key: 0,
                      class: "setting-box",
                      style: V({ display: o.showPop ? "flex" : "none" }),
                      onMousedown: L((u) => null, ["prevent", "stop"])
                    }, [
                      ft(vt, {
                        iconObj: g.settingIcon,
                        onClick: L((u) => at(o), ["prevent", "stop"])
                      }, null, 8, ["iconObj", "onClick"])
                    ], 36)) : I("", !0),
                    o.showPop ? (_(), w("div", {
                      key: 1,
                      class: "setting-box-pop",
                      onMousedown: L((u) => null, ["prevent", "stop"])
                    }, [
                      ye(t.$slots, "setPopNormal", {
                        data: R(o)
                      }, () => [
                        B("div", {
                          class: "setting-box-pop-item",
                          onClick: (u) => ut(o.id, o.inGroupId)
                        }, "移出组合", 8, Vt),
                        B("div", {
                          class: "setting-box-pop-item",
                          onClick: (u) => Ne(o.id, o.inGroupId)
                        }, "复制", 8, mt),
                        B("div", {
                          class: "setting-box-pop-item",
                          onClick: (u) => fe(o.id, o.inGroupId)
                        }, "删除", 8, Kt)
                      ])
                    ], 32)) : I("", !0)
                  ], 6))), 128))
                ], 2)
              ], 64)) : (_(), w("div", Ft, [
                ye(t.$slots, "item", { data: e }, () => [
                  B("p", null, K(Math.round(e.s_width * 100) / 100) + "," + K(Math.round(e.s_height * 100) / 100), 1),
                  B("p", null, K(Math.round(e.s_x * 100) / 100) + "," + K(Math.round(e.s_y * 100) / 100), 1)
                ])
              ])),
              !e.isGroup && e.notGroup !== !0 && d(N) ? (_(), w("div", {
                key: 2,
                class: te(["group-checkbox", e.checked ? "is-checked" : "", e.checkDis ? "disabled" : ""]),
                onClick: (o) => e.checkDis ? null : Gt(e)
              }, null, 10, qt)) : I("", !0),
              !g.seeModel && !d(N) && d(P) === null && d(v) === null ? (_(), w("div", {
                key: 3,
                class: te(["setting-box", e.isGroup === !0 ? e.btnPosition === "right" ? "only-g" : e.btnPosition === "left" ? "only-g l" : e.btnPosition === "top" ? "only-g t" : e.btnPosition === "bottom" ? "only-g b" : e.btnPosition === "center" ? "only-g c" : "" : ""]),
                style: V({ display: e.showPop || e.showSet ? "flex" : "none" }),
                onMousedown: L((o) => null, ["prevent", "stop"])
              }, [
                ft(vt, {
                  iconObj: g.settingIcon,
                  onClick: L((o) => at(e), ["prevent", "stop"])
                }, null, 8, ["iconObj", "onClick"])
              ], 38)) : I("", !0),
              e.showPop ? (_(), w("div", {
                key: 4,
                class: te(["setting-box-pop", e.isGroup === !0 ? e.btnPosition === "right" ? "special" : e.btnPosition === "left" ? "special l" : e.btnPosition === "top" ? "special t" : e.btnPosition === "bottom" ? "special b" : e.btnPosition === "center" ? "special c" : "" : ""]),
                onMousedown: L((o) => null, ["prevent", "stop"])
              }, [
                e.isGroup === !0 ? ye(t.$slots, "setPopSpecial", {
                  key: 0,
                  data: R(e)
                }, () => [
                  g.hideTit ? I("", !0) : (_(), w("div", {
                    key: 0,
                    class: "setting-box-pop-item",
                    onClick: (o) => {
                      We(e.id), O("showTitPop", e.groupTit, e.id);
                    }
                  }, " 设置组合标题", 8, Ut)),
                  B("div", {
                    class: "setting-box-pop-item",
                    onClick: (o) => De(e.id)
                  }, "解除组合", 8, Jt)
                ]) : ye(t.$slots, "setPopNormal", {
                  key: 1,
                  data: R(e)
                }, () => [
                  e.notGroup !== !0 ? (_(), w("div", {
                    key: 0,
                    class: "setting-box-pop-item",
                    onClick: (o) => it(e.id)
                  }, "组合", 8, Qt)) : I("", !0),
                  B("div", {
                    class: "setting-box-pop-item",
                    onClick: (o) => Ne(e.id)
                  }, "复制", 8, Zt),
                  B("div", {
                    class: "setting-box-pop-item",
                    onClick: (o) => fe(e.id)
                  }, "删除", 8, jt)
                ])
              ], 34)) : I("", !0)
            ]),
            !g.seeModel && !d(N) && !e.showPop && !(e.isGroup && e.groupData.filter((o) => o.showPop).length > 0) && !e.move && e.static !== !0 && e.resizable !== !1 ? (_(), w(ge, { key: 0 }, [
              d(q).indexOf("topLeft") !== -1 ? (_(), w("div", {
                key: 0,
                class: "resize-line top-left",
                onMousedown: L((o) => Z(o, e, "top-left"), ["prevent", "stop"])
              }, null, 40, es)) : I("", !0),
              d(q).indexOf("top") !== -1 ? (_(), w("div", {
                key: 1,
                class: "resize-line top",
                onMousedown: L((o) => Z(o, e, "top"), ["prevent", "stop"])
              }, null, 40, ts)) : I("", !0),
              d(q).indexOf("topRight") !== -1 ? (_(), w("div", {
                key: 2,
                class: "resize-line top-right",
                onMousedown: L((o) => Z(o, e, "top-right"), ["prevent", "stop"])
              }, null, 40, ss)) : I("", !0),
              d(q).indexOf("left") !== -1 ? (_(), w("div", {
                key: 3,
                class: "resize-line left",
                onMousedown: L((o) => Z(o, e, "left"), ["prevent", "stop"])
              }, null, 40, os)) : I("", !0),
              d(q).indexOf("right") !== -1 ? (_(), w("div", {
                key: 4,
                class: "resize-line right",
                onMousedown: L((o) => Z(o, e, "right"), ["prevent", "stop"])
              }, null, 40, ls)) : I("", !0),
              d(q).indexOf("bottomLeft") !== -1 ? (_(), w("div", {
                key: 5,
                class: "resize-line bottom-left",
                onMousedown: L((o) => Z(o, e, "bottom-left"), ["prevent", "stop"])
              }, null, 40, rs)) : I("", !0),
              d(q).indexOf("bottom") !== -1 ? (_(), w("div", {
                key: 6,
                class: "resize-line bottom",
                onMousedown: L((o) => Z(o, e, "bottom"), ["prevent", "stop"])
              }, null, 40, ns)) : I("", !0),
              d(q).indexOf("bottomRight") !== -1 ? (_(), w("div", {
                key: 7,
                class: "resize-line bottom-right",
                onMousedown: L((o) => Z(o, e, "bottom-right"), ["prevent", "stop"])
              }, null, 40, as)) : I("", !0)
            ], 64)) : I("", !0)
          ], 42, Xt)
        ], 6))), 128)),
        (_(!0), w(ge, null, Ke(d(r), (e, l) => (_(), w("div", {
          class: te(["shadow-bg", e.move ? "is-move" : ""]),
          style: V({
            width: e.s_width - d(X) * 2 * d(S) + "px",
            height: e.s_height - d(U) * 2 * d(S) + "px",
            top: e.s_y + d(U) * d(S) + "px",
            left: e.s_x + d(X) * d(S) + "px"
          }),
          key: l
        }, null, 6))), 128)),
        d(P) !== null ? (_(), w("div", {
          key: 0,
          class: "drag-bg",
          style: V({
            width: d(G).s_width + "px",
            height: d(G).s_height + "px",
            top: d(G).s_y + "px",
            left: d(G).s_x + "px"
          })
        }, null, 4)) : I("", !0),
        B("div", {
          class: "height-bg",
          style: V({ height: (d(xe) > 0 ? +(d(xe) * d(S) + (g.seeModel ? g.seeModelMinBg : 220)) : 0) + "px" })
        }, null, 4),
        g.showAuxiliary ? (_(), w(ge, { key: 1 }, [
          d(we) !== null ? (_(), w("div", {
            key: 0,
            class: "auxiliary-line hor",
            style: V({ top: d(we) + "px", left: "0px" })
          }, null, 4)) : I("", !0),
          d(be) !== null ? (_(), w("div", {
            key: 1,
            class: "auxiliary-line hor",
            style: V({ top: d(be) + "px", left: "0px" })
          }, null, 4)) : I("", !0),
          d(ke) !== null ? (_(), w("div", {
            key: 2,
            class: "auxiliary-line",
            style: V({ top: "0px", left: d(ke) + "px" })
          }, null, 4)) : I("", !0),
          d(Me) !== null ? (_(), w("div", {
            key: 3,
            class: "auxiliary-line",
            style: V({ top: "0px", left: d(Me) + "px" })
          }, null, 4)) : I("", !0)
        ], 64)) : I("", !0),
        d(r).length === 0 ? (_(), w("div", is, [
          ye(t.$slots, "empty", {}, () => [
            s[0] || (s[0] = Ht(" 暂无数据 "))
          ])
        ])) : I("", !0)
      ])
    ], 4));
  }
}, cs = [us], hs = {
  install(g) {
    cs.forEach((F) => {
      g.component("vueDragComponentPlus", F);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(hs);
export {
  hs as default
};
