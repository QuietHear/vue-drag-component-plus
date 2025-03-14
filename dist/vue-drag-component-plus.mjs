import { resolveComponent as Yt, openBlock as _, createBlock as Ve, resolveDynamicComponent as ht, normalizeProps as dt, mergeProps as Ye, withCtx as At, createElementBlock as w, toDisplayString as K, ref as W, watch as pt, onMounted as Bt, onBeforeUnmount as Ht, normalizeStyle as m, unref as d, createElementVNode as B, Fragment as fe, renderList as Ke, normalizeClass as te, withModifiers as X, createCommentVNode as P, renderSlot as ye, createVNode as gt, createTextVNode as Lt, nextTick as ft, isVNode as yt } from "vue";
const vt = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(y) {
    return (q, qe) => {
      const z = Yt("el-icon");
      return y.iconObj.type === "custom" ? (_(), Ve(ht(y.iconObj.icon), dt(Ye({ key: 0 }, y.iconObj.attrs)), null, 16)) : y.iconObj.type === "el" ? (_(), Ve(z, dt(Ye({ key: 1 }, y.iconObj.attrs)), {
        default: At(() => [
          (_(), Ve(ht(y.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : y.iconObj.type === "iconfont" ? (_(), w("i", Ye({
        key: 2,
        class: ["icon iconfont", "icon-" + y.iconObj.icon]
      }, y.iconObj.attrs), null, 16)) : (_(), w("i", Ye({
        key: 3,
        class: y.iconObj.type
      }, y.iconObj.attrs), K(y.iconObj.icon), 17));
    };
  }
};
const Xt = { class: "content-box" }, $t = ["onMousedown", "onMouseenter", "onMouseleave"], Rt = { class: "com-item-box" }, Wt = ["title"], Nt = { class: "com-item-box-content" }, mt = ["onClick"], Vt = ["onClick"], Kt = ["onClick"], qt = {
  key: 1,
  class: "com-item-box-content"
}, Ft = ["onClick"], Ut = ["onClick"], Jt = ["onClick"], Qt = ["onClick"], Zt = ["onClick"], jt = ["onClick"], es = ["onMousedown"], ts = ["onMousedown"], ss = ["onMousedown"], ls = ["onMousedown"], os = ["onMousedown"], rs = ["onMousedown"], ns = ["onMousedown"], is = ["onMousedown"], as = {
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
  emits: ["baseWidthInit", "changeScle", "dragStart", "dragIng", "dragEnd", "resizeStart", "resizeIng", "resizeEnd", "showGroup", "openSetMenu", "updateChecked", "showTitPop", "domStart", "domReady"],
  setup(y, { expose: q, emit: qe }) {
    const z = qe, O = y, I = (s) => {
      if (typeof s == "object" && !yt(s) && s !== null && !(s instanceof Date)) {
        let t = s instanceof Array ? [] : {};
        for (let e in s)
          t[e] = typeof s[e] == "object" && !yt(s[e]) && s[e] !== null && !(s[e] instanceof Date) ? I(s[e]) : s[e];
        return t;
      } else
        return s;
    }, _t = (s, t) => {
      let e = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.msMatchesSelector;
      for (; s && !e.call(s, t); )
        s = s.parentElement;
      return s;
    }, xt = (s, t) => s.classList ? s.classList.contains(t) : new RegExp("\\s" + t + "\\s").test(" " + s.className + " "), Fe = (s, t) => {
      let e = [], o = (l) => {
        l.forEach((i) => {
          xt(i, t) && e.push(i), i.childNodes && i.childNodes.length > 0 && o(i.childNodes);
        });
      };
      return o(s.childNodes), e;
    }, Pe = (s, t, e = !1) => wt(se(s, t, e), t, e), se = (s, t, e = !1) => s.filter((o) => o[e ? "s_x" : "x"] <= t[e ? "s_x" : "x"] && o[e ? "s_x" : "x"] + o[e ? "s_width" : "width"] > t[e ? "s_x" : "x"] || o[e ? "s_x" : "x"] > t[e ? "s_x" : "x"] && o[e ? "s_x" : "x"] < t[e ? "s_x" : "x"] + t[e ? "s_width" : "width"]), wt = (s, t, e = !1) => s.filter((o) => o[e ? "s_y" : "y"] <= t[e ? "s_y" : "y"] && o[e ? "s_y" : "y"] + o[e ? "s_height" : "height"] > t[e ? "s_y" : "y"] || o[e ? "s_y" : "y"] > t[e ? "s_y" : "y"] && o[e ? "s_y" : "y"] < t[e ? "s_y" : "y"] + t[e ? "s_height" : "height"]), le = (s, t = (o) => o, e = !1) => {
      const o = I(r.value), l = I(s);
      l.sort((u, k) => {
        const h = u[e ? "s_y" : "y"], g = k[e ? "s_y" : "y"];
        if (h !== g)
          return h - g;
        {
          const n = u[e ? "s_x" : "x"], x = k[e ? "s_x" : "x"];
          return n - x;
        }
      });
      const i = (u) => {
        Pe(t(o, u), u, e).forEach((h) => {
          h[e ? "s_y" : "y"] = u[e ? "s_y" : "y"] + u[e ? "s_height" : "height"], i(h);
        });
      };
      l.forEach((u) => i(o.filter((k) => k.id === u.id)[0])), o.forEach((u) => {
        r.value.filter((k) => k.id === u.id)[0][e ? "s_y" : "y"] = u[e ? "s_y" : "y"];
      });
    }, H = (s) => {
      const t = I(s);
      return delete t.showPop, delete t.showSet, t.groupData ? t.groupData.forEach((e) => {
        delete e.showPop, delete e.showSet, j(e, t), delete e.s_width, delete e.s_height, delete e.s_x, delete e.s_y;
      }) : t.inGroupId && (delete t.showPop, delete t.showSet, j(t, r.value.filter((e) => e.id === t.inGroupId)[0])), delete t.btnPosition, delete t.s_width, delete t.s_height, delete t.s_x, delete t.s_y, t;
    }, r = W([]), Ue = () => {
      O.insertResizeKeys.forEach((s) => {
        O.excludeResizeKeys.indexOf(s) === -1 && F.value.push(s);
      });
    };
    pt(
      () => [O.insertResizeKeys, O.excludeResizeKeys],
      () => {
        Ue();
      }
    );
    const F = W([]);
    Ue();
    const Je = () => {
      r.value.length > 0 && r.value.filter((s) => s.isGroup === !0).forEach((s) => {
        ue(s);
      });
    }, Qe = () => {
      O.xSpace !== null && O.xSpace !== void 0 ? $.value = O.xSpace / 2 : $.value = 10 / 2, O.ySpace !== null && O.ySpace !== void 0 && O.ySpace >= 0 ? U.value = O.ySpace / 2 : U.value = $.value, Je();
    };
    pt(
      () => [O.xSpace, O.ySpace],
      () => {
        Qe();
      }
    );
    const $ = W(0), U = W(0);
    Qe();
    const R = W(null);
    let ae = null;
    const ve = (s) => {
      ae = s, z("baseWidthInit", ae);
    }, S = W(1), _e = (s) => {
      S.value = s, z("changeScle", S.value);
    }, ue = (s) => {
      s.s_width = s.width * S.value, s.s_height = s.height * S.value;
      const t = getComputedStyle(R.value), e = parseInt(t.getPropertyValue("--com-item-border-width").trim()), o = parseInt(t.getPropertyValue("--group-tit-height").trim());
      if (s.isGroup === !0) {
        const l = s.s_width - 2 * $.value * S.value - 2 * e, i = s.s_height - 2 * U.value * S.value - 2 * e - (s.groupTit ? o : 0);
        s.groupData.forEach((u) => {
          u.s_width = l * u.groupW, u.s_height = i * u.groupH, u.s_x = l * u.groupX, u.s_y = i * u.groupY;
        });
      }
    }, bt = (s) => {
      s.s_x = s.x * S.value, s.s_y = s.y * S.value;
    }, kt = (s) => {
      s.width = s.s_width / S.value, s.height = s.s_height / S.value;
      const t = getComputedStyle(R.value), e = parseInt(t.getPropertyValue("--group-tit-height").trim());
      if (s.isGroup === !0) {
        const o = s.width, l = s.height - (s.groupTit ? e : 0);
        s.groupData.forEach((i) => {
          i.x = o * i.groupX, i.y = l * i.groupY;
        });
      }
    }, Ae = (s) => {
      s.x = s.s_x / S.value, s.y = s.s_y / S.value;
    };
    let J = null, Ze = null;
    const xe = W(0), we = W(null), be = W(null), ke = W(null), Me = W(null), ce = (s) => {
      const t = I(s);
      if (!O.showAuxiliary || s === null)
        we.value = null, be.value = null, ke.value = null, Me.value = null;
      else {
        const e = getComputedStyle(R.value), o = parseInt(e.getPropertyValue("--auxiliary-width").trim()), l = r.value.filter((n) => n.id !== t.id).map((n) => n.s_y), i = r.value.filter((n) => n.id !== t.id).map((n) => n.s_y + n.s_height), u = [...l, ...i];
        u.sort(), u.filter((n) => n === t.s_y).length > 0 ? we.value = t.s_y : we.value = null, u.filter((n) => n === t.s_y + t.s_height).length > 0 ? be.value = t.s_y + t.s_height - o : be.value = null;
        const k = r.value.filter((n) => n.id !== t.id).map((n) => n.s_x), h = r.value.filter((n) => n.id !== t.id).map((n) => n.s_x + n.s_width), g = [...k, ...h];
        g.sort(), g.filter((n) => n === t.s_x).length > 0 ? ke.value = t.s_x : ke.value = null, g.filter((n) => n === t.s_x + t.s_width).length > 0 ? Me.value = t.s_x + t.s_width - o : Me.value = null;
      }
    };
    let D = null, je = null, et = null;
    const G = W({});
    let Be = null;
    const Mt = (s, t) => {
      clearTimeout(Be), Ee(), D = t, G.value = I(r.value[D]), z("dragStart", H(r.value[D])), r.value[D].move = !0, ce(r.value[D]);
      const e = _t(s.target, ".com-item");
      je = s.clientX - e.offsetLeft, et = s.clientY - e.offsetTop, window.addEventListener("mousemove", tt), window.addEventListener("mouseup", st);
    }, tt = (s) => {
      clearTimeout(Be);
      const t = s.clientX - je, e = s.clientY - et, o = t <= Q("left") ? Q("left") : t >= Q("right") ? Q("right") : t, l = e <= Q("top") ? Q("top") : e >= Q("bottom") ? Q("bottom") : e, i = o - r.value[D].s_x, u = l - r.value[D].s_y;
      let k = "";
      u > 0 ? k = "bottom" : u < 0 ? k = "top" : i > 2 ? k = "right" : i < -2 && (k = "left"), r.value[D].s_x = o, r.value[D].s_y = l, ce(r.value[D]);
      let h = Pe(I(r.value.filter((g) => g.move !== !0)), r.value[D], !0);
      if (h.length === 0)
        G.value.s_x = o, G.value.s_y = l;
      else
        switch (k) {
          case "top":
            h = h.filter((a) => a.s_y < G.value.s_y);
            const g = Math.min(...h.map((a) => a.s_y + a.s_height));
            h.forEach((a) => {
              Math.abs(a.s_y + a.s_height - g) < 5 && (a.s_y = g - a.s_height);
            });
            let n = G.value.s_y - l, x = !0, p = [...h];
            const E = (a) => {
              se(I(r.value.filter((c) => c.move !== !0 && Math.abs(c.s_y + c.s_height - a.s_y) <= 3)), a, !0).forEach((c) => {
                p.findIndex((f) => f.id === c.id) === -1 && (p.push(c), E(c));
              });
            };
            if (h.forEach((a) => {
              E(a);
            }), p.sort((a, b) => {
              const c = a.s_y, f = b.s_y;
              return c - f;
            }), (p.length === 0 || p.filter((a) => a.s_y === 0).length > 0) && (x = !1), x) {
              let a = 0;
              p.filter((c) => c.s_y === p[0].s_y).forEach((c) => {
                se(I(r.value.filter((C) => C.move !== !0 && C.s_y + C.s_height < c.s_y)), c, !0).forEach((C) => {
                  C.s_y + C.s_height > a && (a = C.s_y + C.s_height);
                });
              }), a = p[0].s_y - a, a < n && (n = a), p.forEach((c) => {
                c.s_y -= n, r.value.filter((f) => f.id === c.id)[0].s_y = c.s_y;
              }), G.value.s_x = o, G.value.s_y = r.value.filter((c) => c.id === p[p.length - 1].id)[0].s_y + r.value.filter((c) => c.id === p[p.length - 1].id)[0].s_height;
            } else {
              let a = 0;
              h.forEach((f) => {
                const C = se(r.value.filter((A) => A.move !== !0), f, !0).filter((A) => A.s_y > f.s_y + f.s_height);
                C.length > 0 && (a = Math.min(...C.map((A) => A.s_y)));
              });
              const b = a === 0 ? 0 : a - G.value.s_height - (Math.max(...h.map((f) => f.s_y + f.s_height)) - Math.min(...h.map((f) => f.s_y))), c = b === 0 ? l + G.value.s_height - Math.min(...h.map((f) => f.s_y)) : a - Math.min(...h.map((f) => f.s_y)) - (Math.max(...h.map((f) => f.s_y + f.s_height)) - Math.min(...h.map((f) => f.s_y)));
              (b === 0 || l <= b) && (h.filter((f) => f.s_y < G.value.s_y).forEach((f) => {
                f.s_y += c, r.value.filter((C) => C.id === f.id)[0].s_y = f.s_y;
              }), G.value.s_x = o, G.value.s_y = l, le(r.value, (f, C) => f.filter((A) => A.move !== !0 && A.id !== C.id), !0));
            }
            break;
          case "bottom":
            let T = 0;
            h.forEach((a) => {
              const b = se(r.value.filter((c) => c.move !== !0), a, !0).filter((c) => c.s_y + c.s_height < a.s_y);
              b.length > 0 && (T = Math.max(...b.map((c) => c.s_y + c.s_height)));
            });
            const L = T + (Math.max(...h.map((a) => a.s_height + a.s_y)) - Math.min(...h.map((a) => a.s_y))), Y = Math.min(...h.map((a) => a.s_y)) - T;
            l >= L && (h.filter((a) => a.s_y > G.value.s_y).forEach((a) => {
              a.s_y -= Y, r.value.filter((c) => c.id === a.id)[0].s_y = a.s_y;
              const b = Pe(r.value.filter((c) => c.move !== !0 && c.id !== a.id), a, !0);
              b.length > 0 && (a.s_y = Math.max(...b.map((c) => c.s_y + c.s_height)), r.value.filter((c) => c.id === a.id)[0].s_y = a.s_y);
            }), G.value.s_x = o, G.value.s_y = L, le(r.value, (a, b) => a.filter((c) => c.move !== !0 && c.id !== b.id), !0));
            break;
          case "left":
          case "right":
            h.sort((a, b) => {
              const c = a.s_y, f = b.s_y;
              return c - f;
            });
            let ee = !0;
            for (let a = 0; a < h.length; a++) {
              if (ee) {
                const b = I(r.value);
                for (let c = 0; c <= a; c++) {
                  let f = null;
                  const C = se(b.filter((A) => A.move !== !0 && A.s_y < h[c].s_y), h[c], !0);
                  if (C.length === 0 ? f = 0 : f = Math.max(...C.map((A) => A.s_y + A.s_height)), c === a) {
                    if (h[c].s_y - (h[c].s_y + h[c].s_height - l) < f) {
                      ee = !1;
                      break;
                    }
                  } else if (h[c].s_y - h[a].s_height < f) {
                    ee = !1;
                    break;
                  } else
                    b.filter((A) => A.id === h[c].id)[0].s_y -= h[a].s_height;
                }
              }
              if (ee) {
                h[a].s_y -= h[a].s_y + h[a].s_height - l, r.value.filter((b) => b.id === h[a].id)[0].s_y = h[a].s_y;
                for (let b = a; b > 0; b--)
                  h[a - 1].s_y -= h[a].s_height, r.value.filter((c) => c.id === h[a - 1].id)[0].s_y = h[a - 1].s_y;
              } else
                h.filter((b) => b.id === h[a].id).forEach((b) => {
                  b.s_y += r.value[D].s_y + r.value[D].s_height - b.s_y, r.value.filter((c) => c.id === b.id)[0].s_y = b.s_y, le([b], (c, f) => c.filter((C) => C.move !== !0 && C.id !== f.id), !0);
                });
            }
            G.value.s_x = o;
            break;
        }
      r.value.forEach((g) => {
        Ae(g);
      }), V(!1), z("dragIng", H(r.value[D]));
    }, st = () => {
      window.removeEventListener("mousemove", tt), window.removeEventListener("mouseup", st), delete r.value[D].move, r.value[D].s_x = G.value.s_x, r.value[D].s_y = G.value.s_y, ce(null), r.value.forEach((s) => {
        Ae(s);
      }), V(), z("dragEnd", H(r.value[D])), D = null, Be = setTimeout(() => {
        V();
      }, 500);
    }, Q = (s) => {
      switch (s) {
        case "top":
          return 0;
        case "right":
          return J - $.value * 2 * S.value - r.value[D].s_width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let v = null, He = "", Ie = 0, Ge = 0, oe = 0, re = 0, ne = 0, ie = 0, he = 0, Ce = 0, de = 0, ze = 0;
    const Z = (s, t, e) => {
      Ee(), v = t, z("resizeStart", H(v)), He = e, Ie = s.clientX, Ge = s.clientY, oe = t.s_width, re = t.s_height, ne = t.s_y, ie = t.s_x, v.drag = !0, ce(v);
      const o = r.value.filter((g) => g.static === !0 && (g.s_x < t.s_x ? g.s_x + g.s_width >= t.s_x : g.s_x <= t.s_x + t.s_width)), l = r.value.filter((g) => g.static === !0 && (g.s_y < t.s_y ? g.s_y + g.s_height >= t.s_y : g.s_y <= t.s_y + t.s_height)), i = o.filter((g) => g.s_y + g.s_height <= t.s_y).map((g) => g.s_y + g.s_height);
      i.length > 0 ? he = Math.max(...i) : he = 0;
      const u = o.filter((g) => g.s_y >= t.s_y + t.s_height).map((g) => g.s_y);
      u.length > 0 ? Ce = Math.min(...u) : Ce = 0;
      const k = l.filter((g) => g.s_x + g.s_width <= t.s_x).map((g) => g.s_x + g.s_width);
      k.length > 0 ? de = Math.max(...k) : de = 0;
      const h = l.filter((g) => g.s_x >= t.s_x + t.s_width).map((g) => g.s_x);
      h.length > 0 ? ze = Math.min(...h) : ze = 0, window.addEventListener("mousemove", lt), window.addEventListener("mouseup", ot);
    }, lt = (s) => {
      const t = oe + (s.clientX - Ie), e = re + (s.clientY - Ge), o = oe - (s.clientX - Ie), l = re - (s.clientY - Ge), i = ne + (s.clientY - Ge), u = ie + (s.clientX - Ie), k = getComputedStyle(R.value), h = parseInt(k.getPropertyValue("--com-item-border-width").trim()), g = parseInt(k.getPropertyValue("--group-tit-height").trim()), n = () => {
        if (v.isGroup === !0) {
          const T = v.s_width - 2 * $.value * S.value - 2 * h, L = v.s_height - 2 * U.value * S.value - 2 * h - (v.groupTit ? g : 0);
          v.groupData.forEach((Y) => {
            Y.s_width = T * Y.groupW, Y.s_height = L * Y.groupH, Y.s_x = T * Y.groupX, Y.s_y = L * Y.groupY;
          });
        }
      }, x = (O.itemMinWidth + $.value * 2) * S.value, p = (O.itemMinHeight + U.value * 2) * S.value;
      switch (He) {
        case "top-left":
          v.s_height = l < p ? p : l > M("top") ? M("top") : l, v.s_y = l < p ? ne + re - p : l > M("top") ? he : i, v.s_width = o < x ? x : o > M("left") ? M("left") : o, v.s_x = o < x ? ie + oe - x : o > M("left") ? de : u, n();
          break;
        case "top":
          v.s_height = l < p ? p : l > M("top") ? M("top") : l, v.s_y = l < p ? ne + re - p : l > M("top") ? he : i, n();
          break;
        case "top-right":
          v.s_height = l < p ? p : l > M("top") ? M("top") : l, v.s_y = l < p ? ne + re - p : l > M("top") ? he : i, v.s_width = t < x ? x : t > M("right") ? M("right") : t, n();
          break;
        case "left":
          v.s_width = o < x ? x : o > M("left") ? M("left") : o, v.s_x = o < x ? ie + oe - x : o > M("left") ? de : u, n();
          break;
        case "right":
          v.s_width = t < x ? x : t > M("right") ? M("right") : t, n();
          break;
        case "bottom-left":
          v.s_height = e < p ? p : e > M("bottom") ? M("bottom") : e, v.s_width = o < x ? x : o > M("left") ? M("left") : o, v.s_x = o < x ? ie + oe - x : o > M("left") ? de : u, n();
          break;
        case "bottom":
          v.s_height = e < p ? p : e > M("bottom") ? M("bottom") : e, n();
          break;
        case "bottom-right":
          v.s_height = e < p ? p : e > M("bottom") ? M("bottom") : e, v.s_width = t < x ? x : t > M("right") ? M("right") : t, n();
          break;
      }
      kt(v), ce(v);
      let E = Pe(I(r.value.filter((T) => T.drag !== !0)), v, !0);
      if (E.length > 0) {
        E.sort((T, L) => {
          const Y = T.s_y, ee = L.s_y;
          return Y - ee;
        });
        for (let T = 0; T < E.length; T++)
          E.filter((L) => L.id === E[T].id).forEach((L) => {
            L.s_y += v.s_y + v.s_height - L.s_y, r.value.filter((Y) => Y.id === L.id)[0].s_y = L.s_y, le([L], (Y, ee) => Y.filter((a) => a.drag !== !0 && a.id !== ee.id), !0);
          });
      }
      r.value.forEach((T) => {
        Ae(T);
      }), V(!1), z("resizeIng", H(v));
    }, ot = (s) => {
      delete v.drag, He = "", ce(null), window.removeEventListener("mousemove", lt), window.removeEventListener("mouseup", ot), V(), z("resizeEnd", H(v)), v = null;
    }, M = (s) => {
      switch (s) {
        case "top":
          return ne + re - he;
        case "left":
          return ie + oe - de;
        case "right":
          return (ze > 0 ? ze : J - $.value * 2 * S.value) - ie;
        case "bottom":
          return Ce > 0 ? Ce - ne : 999999999;
      }
    }, V = (s = !0) => {
      s === !0 && (le(r.value, (e, o) => e.filter((l) => l.id !== o.id)), St(), r.value.forEach((e) => {
        bt(e);
      }), Et());
      const t = r.value.map((e) => e.y + e.height);
      t.length > 0 ? xe.value = Math.max(...t) : xe.value = 0;
    }, St = () => {
      const s = I(r.value).sort((t, e) => {
        const o = t.y, l = e.y;
        return o - l;
      });
      for (let t = 0; t < s.length; t++) {
        const e = se(s, s[t]).filter((o) => o.y + o.height <= s[t].y);
        e.length > 0 ? s[t].y = Math.max(...e.map((o) => o.y + o.height)) : s[t].y = 0;
      }
      s.forEach((t) => {
        r.value.filter((e) => e.id === t.id)[0].y = t.y;
      });
    }, Et = () => {
      const s = r.value.filter((t) => t.isGroup === !0);
      if (s.length > 0) {
        const t = getComputedStyle(R.value), e = parseInt(t.getPropertyValue("--setting-icon-group-width").trim()), o = parseInt(t.getPropertyValue("--setting-icon-group-height").trim());
        s.forEach((l) => {
          $.value + l.s_x + l.s_width + e > J ? $.value + l.s_x - e < 0 ? O.groupBtnPosMore ? U.value + l.s_y - o < 0 ? l.btnPosition = "bottom" : l.btnPosition = "top" : l.btnPosition = "center" : l.btnPosition = "left" : l.btnPosition = "right";
        });
      }
    };
    Bt(() => {
      rt.observe(R.value);
    });
    const rt = new ResizeObserver((s) => {
      It(J === s[0].borderBoxSize[0].inlineSize ? null : s[0].borderBoxSize[0].inlineSize, Ze === s[0].borderBoxSize[0].blockSize ? null : s[0].borderBoxSize[0].blockSize);
    }), Se = W("");
    let Le = 0, Xe = 0, $e = null, Re = !1;
    const Dt = (s = [], t = null) => {
      clearInterval($e), Se.value = (/* @__PURE__ */ new Date()).getTime() + "", Le = 0, Xe = 0, s.forEach((e) => {
        Le += 1, e.isGroup === !0 && (Xe += e.groupData.length);
      }), ct(), z("domStart"), r.value = I(s), r.value.filter((e) => e.isGroup === !0).forEach((e) => {
        if (e.groupData.length < 2)
          De(e.id);
        else {
          const o = Te(e.groupData, e);
          Oe(o);
        }
      }), Re = !0, ft(() => {
        const e = R.value.getBoundingClientRect();
        t != null ? (ve(t), _e(e.width / t)) : (ve(r.value.length > 0 ? e.width : null), _e(1)), r.value.forEach((o) => {
          ue(o);
        }), V(), $e = setInterval(() => {
          Fe(R.value, Se.value + "p").length === Le && Fe(R.value, Se.value + "c").length === Xe && (clearInterval($e), z("domReady"));
        }, 10), setTimeout(() => {
          Re = !1;
        }, 500);
      });
    }, Pt = (s) => {
      s.showSet = !0;
    }, We = (s) => {
      const t = r.value.filter((e) => e.id === s);
      if (t.length === 1)
        delete t[0].showSet;
      else
        try {
        } catch {
        }
    }, nt = (s, t, e) => {
      const o = t.map((u) => u.y), l = Math.max(...o), i = t.filter((u) => u.y + u.height > l);
      i.sort((u, k) => {
        const h = u.x, g = k.x;
        return h - g;
      });
      for (let u = 0; u < i.length; u++) {
        if (u === 0 && i[u].x >= s.width) {
          s.y = l, s.x = 0;
          break;
        }
        if (i.length > 1 && u !== i.length - 1 && i[u].x + i[u].width + s.width <= i[u + 1].x) {
          s.y = l, s.x = i[u].x + i[u].width;
          break;
        }
        if (u === i.length - 1 && i[u].x + i[u].width + s.width <= e) {
          s.y = l, s.x = i[u].x + i[u].width;
          break;
        }
      }
      if (s.y == null) {
        s.x = 0;
        const u = t.map((k) => k.y + k.height);
        s.y = Math.max(...u);
      }
    }, pe = (s, t = null, e = !1) => {
      const o = I(s), l = r.value.filter((i) => i.id === t);
      if (o.id || (o.id = (/* @__PURE__ */ new Date()).getTime() + ""), t && l.length !== 1)
        try {
        } catch {
        } finally {
          return;
        }
      if (e !== !0 && (delete o.x, delete o.y, t ? (l[0].groupData.forEach((i) => {
        j(i, l[0]);
      }), nt(o, l[0].groupData, l[0].width)) : r.value.length === 0 ? (o.x = 0, o.y = 0) : nt(o, r.value, (ae || J) - $.value * 2)), t) {
        l[0].groupData.push(o);
        const i = Te(l[0].groupData, l[0]);
        Oe(i), le([i], (u, k) => u.filter((h) => h.id !== k.id));
      } else
        r.value.length === 0 && ve(J), ue(o), r.value.push(o);
      V();
    }, Ne = (s, t = null, e = null) => {
      let o = null;
      const l = r.value.filter((i) => i.id === t);
      if (t ? l.length === 1 && (o = I(l[0].groupData.filter((i) => i.id === s)[0])) : o = I(r.value.filter((i) => i.id === s)[0]), o)
        return o.id = e || (/* @__PURE__ */ new Date()).getTime() + "", t ? (j(o, l[0]), pe(o, t)) : pe(o), H(t ? r.value.filter((i) => i.id === t)[0].groupData.filter((i) => i.id === o.id)[0] : r.value.filter((i) => i.id === o.id)[0]);
      try {
      } catch {
      } finally {
        return null;
      }
    }, ge = (s, t = null) => {
      let e = -1;
      const o = r.value.filter((l) => l.id === t);
      if (t ? o.length === 1 && (e = o[0].groupData.findIndex((l) => l.id === s)) : e = r.value.findIndex((l) => l.id === s), e !== -1) {
        if (t)
          if (o[0].groupData.splice(e, 1), o[0].groupData.length === 1)
            De(t);
          else {
            o[0].groupData.forEach((i) => {
              j(i, o[0]);
            });
            const l = Te(o[0].groupData, o[0]);
            Oe(l);
          }
        else
          r.value.splice(e, 1), r.value.length === 0 && (ve(null), _e(1));
        V();
      } else
        try {
        } catch {
        }
    }, Oe = (s) => {
      if (s.id) {
        const t = I(s);
        delete t.showPop, delete t.showSet, delete t.btnPosition, t.groupData && t.groupData.forEach((l) => {
          delete l.showPop, delete l.showSet;
        });
        let e = -1;
        const o = r.value.filter((l) => l.id === t.inGroupId);
        if (t.inGroupId ? o.length === 1 && (e = o[0].groupData.findIndex((l) => l.id === t.id)) : e = r.value.findIndex((l) => l.id === t.id), e !== -1)
          t.inGroupId ? (o[0].groupData[e] = t, ue(o[0])) : (r.value[e] = t, ue(r.value[e])), V();
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, It = (s, t) => {
      s !== null && (J = s, Re || (_e(ae && J ? s / ae : 1), r.value.forEach((e) => {
        ue(e);
      }), V())), t !== null && (Ze = t);
    }, it = (s) => {
      s.showPop || (r.value.forEach((t) => {
        delete t.showPop, t.groupData && t.groupData.forEach((e) => {
          delete e.showPop;
        });
      }), z("openSetMenu", H(s)), s.showPop = !0, window.addEventListener("click", Ee));
    }, Ee = () => {
      r.value.forEach((s) => {
        delete s.showPop, s.groupData && s.groupData.forEach((t) => {
          delete t.showPop;
        });
      }), window.removeEventListener("click", Ee);
    }, N = W(!1), at = (s) => {
      const t = r.value.findIndex((e) => e.id === s);
      if (t !== -1)
        r.value[t].checked = !0, r.value[t].checkDis = !0, N.value = !0, z("showGroup", N.value);
      else
        try {
        } catch {
        }
    }, me = () => {
      N.value = !1, r.value.forEach((s) => {
        delete s.checked, delete s.checkDis, s.groupData && s.groupData.forEach((t) => {
          delete t.checked, delete t.checkDis;
        });
      }), z("showGroup", N.value);
    }, Gt = (s) => {
      s.checked = !s.checked, z("updateChecked", r.value.filter((t) => t.checked).length);
    }, Te = (s, t) => {
      const e = I(s), o = I(t);
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
          const x = I(e.slice(0, n + 1));
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
          const x = I(e.slice(0, n + 1));
          if (e[n + 1].y > Math.max(...x.map((p) => p.y + p.height))) {
            const p = e[n + 1].y - Math.max(...x.map((E) => E.y + E.height));
            for (let E = n + 1; E < e.length; E++)
              e[E].y -= p;
          }
        }
      }
      const l = e.map((n) => n.x + n.width), i = Math.max(...l), u = e.map((n) => n.y + n.height), k = Math.max(...u);
      e.forEach((n) => {
        n.inGroupId || (n.inGroupId = o.id), n.groupW = n.width / i, n.groupH = n.height / k, n.groupX = n.x / i, n.groupY = n.y / k, n.isObstacle = n.x + n.width === i && n.y === 0, delete n.width, delete n.height;
      });
      const h = getComputedStyle(R.value), g = parseInt(h.getPropertyValue("--group-tit-height").trim());
      return o.width = i, o.height = k + (o.groupTit ? g : 0), o.groupData = [...e], o;
    }, j = (s, t) => {
      const e = getComputedStyle(R.value), o = parseInt(e.getPropertyValue("--group-tit-height").trim());
      s.width = t.width * s.groupW, s.height = (t.height - (t.groupTit ? o : 0)) * s.groupH;
    }, Ct = () => {
      ft(() => {
        Je();
      });
    }, zt = () => {
      const s = r.value.filter((t) => t.checked);
      if (s.length > 1) {
        const t = {
          id: (/* @__PURE__ */ new Date()).getTime() + "G",
          isGroup: !0,
          groupTit: ""
        }, e = Te(s, t);
        return e.groupData.forEach((o) => {
          ge(o.id);
        }), pe(e), me(), H(r.value.filter((o) => o.id === e.id)[0]);
      } else
        return me(), null;
    }, ut = (s, t) => {
      const e = r.value.filter((o) => o.id === t)[0];
      if (e) {
        const o = e.groupData.filter((l) => l.id === s)[0];
        if (o)
          return e.groupData.length === 2 ? De(t) : (j(o, e), delete o.inGroupId, delete o.groupW, delete o.groupH, delete o.groupX, delete o.groupY, delete o.isObstacle, ge(o.id, e.id), pe(o), [H(r.value.filter((l) => l.id === s)[0])]);
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
    }, De = (s) => {
      const t = r.value.filter((e) => e.id === s)[0];
      if (t) {
        let e = [];
        t.groupData.forEach((l) => {
          j(l, t), l.x += t.x, l.y += t.y, delete l.inGroupId, delete l.groupW, delete l.groupH, delete l.groupX, delete l.groupY, delete l.isObstacle, e.push(l.id), pe(l, null, !0);
        }), ge(t.id);
        let o = [];
        return e.forEach((l) => {
          o.push(H(r.value.filter((i) => i.id === l)[0]));
        }), o;
      } else
        try {
        } catch {
        } finally {
          return [];
        }
    }, Ot = (s = "", t) => {
      const e = r.value.filter((o) => o.id === t)[0];
      if (e) {
        if (!e.groupTit || !s) {
          const o = getComputedStyle(R.value), l = parseInt(o.getPropertyValue("--group-tit-height").trim());
          e.groupTit && !s && (e.height -= l, e.s_height -= l * S.value), !e.groupTit && s && (e.height += l, e.s_height += l * S.value);
        }
        e.groupTit = s, le([e], (o, l) => o.filter((i) => i.id !== l.id)), V();
      } else
        try {
        } catch {
        }
    }, ct = () => {
      r.value = [], ve(null), _e(1), xe.value = 0;
    }, Tt = () => new Promise((s, t) => {
      r.value.forEach((o) => {
        delete o.showPop, delete o.showSet, o.groupData && o.groupData.forEach((l) => {
          delete l.showPop, delete l.showSet;
        });
      });
      const e = I(r.value);
      e.forEach((o) => {
        o.isGroup === !0 && o.groupData.forEach((l) => {
          j(l, o), delete l.s_width, delete l.s_height, delete l.s_x, delete l.s_y;
        }), delete o.btnPosition, delete o.s_width, delete o.s_height, delete o.s_x, delete o.s_y;
      }), s({ data: e, width: ae });
    });
    return Ht(() => {
      rt.unobserve(R.value), window.removeEventListener("click", Ee);
    }), q({ init: Dt, addItem: pe, copyItem: Ne, deleteItem: ge, updateItem: Oe, hideGroupSet: We, openGroup: at, closeGroup: me, changeGroupBorder: Ct, addGroup: zt, removeGroupItem: ut, removeGroup: De, changeGroupTit: Ot, resetData: ct, getData: Tt }), (s, t) => (_(), w("div", {
      class: "vue-drag-component-plus",
      style: m({ "--css-scle": d(S), "--com-x-space": d($) + "px", "--com-y-space": d(U) + "px" }),
      ref_key: "pageRef",
      ref: R
    }, [
      B("div", Xt, [
        (_(!0), w(fe, null, Ke(d(r), (e, o) => (_(), w("div", {
          class: te(["com-item", e.move ? "is-move" : "", e.drag ? "is-drag" : "", e.showPop || e.isGroup && e.groupData.filter((l) => l.showPop).length > 0 ? "on-top" : "", d(Se) + "p"]),
          style: m({
            width: e.s_width + "px",
            height: e.s_height + "px",
            top: e.s_y + "px",
            left: e.s_x + "px"
          }),
          key: o
        }, [
          B("div", {
            class: te(["com-item-inner", y.seeModel || d(N) || e.static === !0 || e.dragable === !1 ? "" : "can-drag", y.seeModel ? "no-hover" : ""]),
            onMousedown: X((l) => y.seeModel || d(N) || e.static === !0 || e.dragable === !1 ? null : Mt(l, o), ["prevent"]),
            onMouseenter: (l) => y.seeModel || d(N) || d(D) || d(v) || !e.isGroup ? null : Pt(e),
            onMouseleave: (l) => y.seeModel || d(N) || d(D) || d(v) || !e.isGroup ? null : We(e.id)
          }, [
            B("div", Rt, [
              e.isGroup ? (_(), w(fe, { key: 0 }, [
                e.groupTit ? (_(), w("div", {
                  key: 0,
                  class: "group-item-tit",
                  title: e.groupTit
                }, K(e.groupTit), 9, Wt)) : P("", !0),
                B("div", {
                  class: te(["group-item-content", e.groupTit ? "" : "full"])
                }, [
                  (_(!0), w(fe, null, Ke(e.groupData, (l, i) => (_(), w("div", {
                    class: te(["com-item-box-child", l.isObstacle ? "is-obstacle" : "", d(Se) + "c"]),
                    style: m({
                      width: l.s_width + "px",
                      height: l.s_height + "px",
                      top: l.s_y + "px",
                      left: l.s_x + "px"
                    }),
                    key: i
                  }, [
                    B("div", Nt, [
                      ye(s.$slots, "item", { data: l }, () => [
                        B("p", null, K(Math.round(l.s_width * 100) / 100) + "," + K(Math.round(l.s_height * 100) / 100), 1),
                        B("p", null, K(Math.round(l.s_x * 100) / 100) + "," + K(Math.round(l.s_y * 100) / 100), 1)
                      ])
                    ]),
                    !y.seeModel && !d(N) && d(D) === null && d(v) === null ? (_(), w("div", {
                      key: 0,
                      class: "setting-box",
                      style: m({ display: l.showPop ? "flex" : "none" }),
                      onMousedown: X((u) => null, ["prevent", "stop"])
                    }, [
                      gt(vt, {
                        iconObj: y.settingIcon,
                        onClick: X((u) => it(l), ["prevent", "stop"])
                      }, null, 8, ["iconObj", "onClick"])
                    ], 36)) : P("", !0),
                    l.showPop ? (_(), w("div", {
                      key: 1,
                      class: "setting-box-pop",
                      onMousedown: X((u) => null, ["prevent", "stop"])
                    }, [
                      ye(s.$slots, "setPopNormal", {
                        data: H(l)
                      }, () => [
                        B("div", {
                          class: "setting-box-pop-item",
                          onClick: (u) => ut(l.id, l.inGroupId)
                        }, "移出组合", 8, mt),
                        B("div", {
                          class: "setting-box-pop-item",
                          onClick: (u) => Ne(l.id, l.inGroupId)
                        }, "复制", 8, Vt),
                        B("div", {
                          class: "setting-box-pop-item",
                          onClick: (u) => ge(l.id, l.inGroupId)
                        }, "删除", 8, Kt)
                      ])
                    ], 32)) : P("", !0)
                  ], 6))), 128))
                ], 2)
              ], 64)) : (_(), w("div", qt, [
                ye(s.$slots, "item", { data: e }, () => [
                  B("p", null, K(Math.round(e.s_width * 100) / 100) + "," + K(Math.round(e.s_height * 100) / 100), 1),
                  B("p", null, K(Math.round(e.s_x * 100) / 100) + "," + K(Math.round(e.s_y * 100) / 100), 1)
                ])
              ])),
              !e.isGroup && e.notGroup !== !0 && d(N) ? (_(), w("div", {
                key: 2,
                class: te(["group-checkbox", e.checked ? "is-checked" : "", e.checkDis ? "disabled" : ""]),
                onClick: (l) => e.checkDis ? null : Gt(e)
              }, null, 10, Ft)) : P("", !0),
              !y.seeModel && !d(N) && d(D) === null && d(v) === null ? (_(), w("div", {
                key: 3,
                class: te(["setting-box", e.isGroup === !0 ? e.btnPosition === "right" ? "only-g" : e.btnPosition === "left" ? "only-g l" : e.btnPosition === "top" ? "only-g t" : e.btnPosition === "bottom" ? "only-g b" : e.btnPosition === "center" ? "only-g c" : "" : ""]),
                style: m({ display: e.showPop || e.showSet ? "flex" : "none" }),
                onMousedown: X((l) => null, ["prevent", "stop"])
              }, [
                gt(vt, {
                  iconObj: y.settingIcon,
                  onClick: X((l) => it(e), ["prevent", "stop"])
                }, null, 8, ["iconObj", "onClick"])
              ], 38)) : P("", !0),
              e.showPop ? (_(), w("div", {
                key: 4,
                class: te(["setting-box-pop", e.isGroup === !0 ? e.btnPosition === "right" ? "special" : e.btnPosition === "left" ? "special l" : e.btnPosition === "top" ? "special t" : e.btnPosition === "bottom" ? "special b" : e.btnPosition === "center" ? "special c" : "" : ""]),
                onMousedown: X((l) => null, ["prevent", "stop"])
              }, [
                e.isGroup === !0 ? ye(s.$slots, "setPopSpecial", {
                  key: 0,
                  data: H(e)
                }, () => [
                  y.hideTit ? P("", !0) : (_(), w("div", {
                    key: 0,
                    class: "setting-box-pop-item",
                    onClick: (l) => {
                      We(e.id), z("showTitPop", e.groupTit, e.id);
                    }
                  }, " 设置组合标题", 8, Ut)),
                  B("div", {
                    class: "setting-box-pop-item",
                    onClick: (l) => De(e.id)
                  }, "解除组合", 8, Jt)
                ]) : ye(s.$slots, "setPopNormal", {
                  key: 1,
                  data: H(e)
                }, () => [
                  e.notGroup !== !0 ? (_(), w("div", {
                    key: 0,
                    class: "setting-box-pop-item",
                    onClick: (l) => at(e.id)
                  }, "组合", 8, Qt)) : P("", !0),
                  B("div", {
                    class: "setting-box-pop-item",
                    onClick: (l) => Ne(e.id)
                  }, "复制", 8, Zt),
                  B("div", {
                    class: "setting-box-pop-item",
                    onClick: (l) => ge(e.id)
                  }, "删除", 8, jt)
                ])
              ], 34)) : P("", !0)
            ]),
            !y.seeModel && !d(N) && !e.showPop && !(e.isGroup && e.groupData.filter((l) => l.showPop).length > 0) && !e.move && e.static !== !0 && e.resizable !== !1 ? (_(), w(fe, { key: 0 }, [
              d(F).indexOf("topLeft") !== -1 ? (_(), w("div", {
                key: 0,
                class: "resize-line top-left",
                onMousedown: X((l) => Z(l, e, "top-left"), ["prevent", "stop"])
              }, null, 40, es)) : P("", !0),
              d(F).indexOf("top") !== -1 ? (_(), w("div", {
                key: 1,
                class: "resize-line top",
                onMousedown: X((l) => Z(l, e, "top"), ["prevent", "stop"])
              }, null, 40, ts)) : P("", !0),
              d(F).indexOf("topRight") !== -1 ? (_(), w("div", {
                key: 2,
                class: "resize-line top-right",
                onMousedown: X((l) => Z(l, e, "top-right"), ["prevent", "stop"])
              }, null, 40, ss)) : P("", !0),
              d(F).indexOf("left") !== -1 ? (_(), w("div", {
                key: 3,
                class: "resize-line left",
                onMousedown: X((l) => Z(l, e, "left"), ["prevent", "stop"])
              }, null, 40, ls)) : P("", !0),
              d(F).indexOf("right") !== -1 ? (_(), w("div", {
                key: 4,
                class: "resize-line right",
                onMousedown: X((l) => Z(l, e, "right"), ["prevent", "stop"])
              }, null, 40, os)) : P("", !0),
              d(F).indexOf("bottomLeft") !== -1 ? (_(), w("div", {
                key: 5,
                class: "resize-line bottom-left",
                onMousedown: X((l) => Z(l, e, "bottom-left"), ["prevent", "stop"])
              }, null, 40, rs)) : P("", !0),
              d(F).indexOf("bottom") !== -1 ? (_(), w("div", {
                key: 6,
                class: "resize-line bottom",
                onMousedown: X((l) => Z(l, e, "bottom"), ["prevent", "stop"])
              }, null, 40, ns)) : P("", !0),
              d(F).indexOf("bottomRight") !== -1 ? (_(), w("div", {
                key: 7,
                class: "resize-line bottom-right",
                onMousedown: X((l) => Z(l, e, "bottom-right"), ["prevent", "stop"])
              }, null, 40, is)) : P("", !0)
            ], 64)) : P("", !0)
          ], 42, $t)
        ], 6))), 128)),
        (_(!0), w(fe, null, Ke(d(r), (e, o) => (_(), w("div", {
          class: te(["shadow-bg", e.move ? "is-move" : ""]),
          style: m({
            width: e.s_width - d($) * 2 * d(S) + "px",
            height: e.s_height - d(U) * 2 * d(S) + "px",
            top: e.s_y + d(U) * d(S) + "px",
            left: e.s_x + d($) * d(S) + "px"
          }),
          key: o
        }, null, 6))), 128)),
        d(D) !== null ? (_(), w("div", {
          key: 0,
          class: "drag-bg",
          style: m({
            width: d(G).s_width + "px",
            height: d(G).s_height + "px",
            top: d(G).s_y + "px",
            left: d(G).s_x + "px"
          })
        }, null, 4)) : P("", !0),
        B("div", {
          class: "height-bg",
          style: m({ height: (d(xe) > 0 ? +(d(xe) * d(S) + (y.seeModel ? y.seeModelMinBg : 220)) : 0) + "px" })
        }, null, 4),
        y.showAuxiliary ? (_(), w(fe, { key: 1 }, [
          d(we) !== null ? (_(), w("div", {
            key: 0,
            class: "auxiliary-line hor",
            style: m({ top: d(we) + "px", left: "0px" })
          }, null, 4)) : P("", !0),
          d(be) !== null ? (_(), w("div", {
            key: 1,
            class: "auxiliary-line hor",
            style: m({ top: d(be) + "px", left: "0px" })
          }, null, 4)) : P("", !0),
          d(ke) !== null ? (_(), w("div", {
            key: 2,
            class: "auxiliary-line",
            style: m({ top: "0px", left: d(ke) + "px" })
          }, null, 4)) : P("", !0),
          d(Me) !== null ? (_(), w("div", {
            key: 3,
            class: "auxiliary-line",
            style: m({ top: "0px", left: d(Me) + "px" })
          }, null, 4)) : P("", !0)
        ], 64)) : P("", !0),
        d(r).length === 0 ? (_(), w("div", as, [
          ye(s.$slots, "empty", {}, () => [
            t[0] || (t[0] = Lt(" 暂无数据 "))
          ])
        ])) : P("", !0)
      ])
    ], 4));
  }
}, cs = [us], hs = {
  install(y) {
    cs.forEach((q) => {
      y.component("vueDragComponentPlus", q);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(hs);
export {
  hs as default
};
