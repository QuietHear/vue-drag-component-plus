import { resolveComponent as Yt, openBlock as x, createBlock as me, resolveDynamicComponent as ht, normalizeProps as dt, mergeProps as Ae, withCtx as Bt, createElementBlock as b, toDisplayString as K, ref as W, watch as pt, onMounted as Rt, onBeforeUnmount as Ht, normalizeStyle as V, unref as d, createElementVNode as B, Fragment as ge, renderList as Ke, normalizeClass as te, withModifiers as L, createCommentVNode as I, renderSlot as ye, createVNode as ft, createTextVNode as Lt, nextTick as gt, isVNode as yt } from "vue";
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
      const O = Yt("el-icon");
      return g.iconObj.type === "custom" ? (x(), me(ht(g.iconObj.icon), dt(Ae({ key: 0 }, g.iconObj.attrs)), null, 16)) : g.iconObj.type === "el" ? (x(), me(O, dt(Ae({ key: 1 }, g.iconObj.attrs)), {
        default: Bt(() => [
          (x(), me(ht(g.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : g.iconObj.type === "iconfont" ? (x(), b("i", Ae({
        key: 2,
        class: ["icon iconfont", "icon-" + g.iconObj.icon]
      }, g.iconObj.attrs), null, 16)) : (x(), b("i", Ae({
        key: 3,
        class: g.iconObj.type
      }, g.iconObj.attrs), K(g.iconObj.icon), 17));
    };
  }
};
const Xt = { class: "content-box" }, $t = ["onMousedown", "onMouseenter", "onMouseleave"], Wt = { class: "com-item-box" }, Nt = ["title"], Vt = { class: "com-item-box-content" }, mt = ["onClick"], Kt = ["onClick"], Ft = ["onClick"], qt = {
  key: 1,
  class: "com-item-box-content"
}, Ut = ["onClick"], Jt = ["onClick"], Qt = ["onClick"], Zt = ["onClick"], jt = ["onClick"], eo = ["onClick"], to = ["onMousedown"], oo = ["onMousedown"], so = ["onMousedown"], lo = ["onMousedown"], ro = ["onMousedown"], no = ["onMousedown"], ao = ["onMousedown"], io = ["onMousedown"], uo = {
  key: 2,
  class: "com-empty"
}, co = {
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
        let o = t instanceof Array ? [] : {};
        for (let e in t)
          o[e] = typeof t[e] == "object" && !yt(t[e]) && t[e] !== null && !(t[e] instanceof Date) ? D(t[e]) : t[e];
        return o;
      } else
        return t;
    }, _t = (t, o) => {
      let e = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
      for (; t && !e.call(t, o); )
        t = t.parentElement;
      return t;
    }, xt = (t, o) => t.classList ? t.classList.contains(o) : new RegExp("\\s" + o + "\\s").test(" " + t.className + " "), qe = (t, o) => {
      let e = [], l = (s) => {
        s.forEach((r) => {
          xt(r, o) && e.push(r), r.childNodes && r.childNodes.length > 0 && l(r.childNodes);
        });
      };
      return l(t.childNodes), e;
    }, Pe = (t, o, e = !1) => wt(oe(t, o, e), o, e), oe = (t, o, e = !1) => t.filter((l) => l[e ? "s_x" : "x"] <= o[e ? "s_x" : "x"] && l[e ? "s_x" : "x"] + l[e ? "s_width" : "width"] > o[e ? "s_x" : "x"] || l[e ? "s_x" : "x"] > o[e ? "s_x" : "x"] && l[e ? "s_x" : "x"] < o[e ? "s_x" : "x"] + o[e ? "s_width" : "width"]), wt = (t, o, e = !1) => t.filter((l) => l[e ? "s_y" : "y"] <= o[e ? "s_y" : "y"] && l[e ? "s_y" : "y"] + l[e ? "s_height" : "height"] > o[e ? "s_y" : "y"] || l[e ? "s_y" : "y"] > o[e ? "s_y" : "y"] && l[e ? "s_y" : "y"] < o[e ? "s_y" : "y"] + o[e ? "s_height" : "height"]), se = (t, o = (l) => l, e = !1) => {
      const l = D(n.value), s = D(t);
      s.sort((i, y) => {
        const c = i[e ? "s_y" : "y"], f = y[e ? "s_y" : "y"];
        if (c !== f)
          return c - f;
        {
          const a = i[e ? "s_x" : "x"], w = y[e ? "s_x" : "x"];
          return a - w;
        }
      });
      const r = (i) => {
        Pe(o(l, i), i, e).forEach((c) => {
          c[e ? "s_y" : "y"] = i[e ? "s_y" : "y"] + i[e ? "s_height" : "height"], r(c);
        });
      };
      s.forEach((i) => r(l.filter((y) => y.id === i.id)[0])), l.forEach((i) => {
        n.value.filter((y) => y.id === i.id)[0][e ? "s_y" : "y"] = i[e ? "s_y" : "y"];
      });
    }, R = (t) => {
      const o = D(t);
      return delete o.showPop, delete o.showSet, o.groupData ? o.groupData.forEach((e) => {
        delete e.showPop, delete e.showSet, j(e, o), delete e.s_width, delete e.s_height, delete e.s_x, delete e.s_y;
      }) : o.inGroupId && (delete o.showPop, delete o.showSet, j(o, n.value.filter((e) => e.id === o.inGroupId)[0])), delete o.btnPosition, delete o.s_width, delete o.s_height, delete o.s_x, delete o.s_y, o;
    }, n = W([]), Ue = () => {
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
      n.value.length > 0 && n.value.filter((t) => t.isGroup === !0).forEach((t) => {
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
      const o = getComputedStyle($.value), e = parseInt(o.getPropertyValue("--com-item-border-width").trim()), l = parseInt(o.getPropertyValue("--group-tit-height").trim());
      if (t.isGroup === !0) {
        const s = t.s_width - 2 * X.value * S.value - 2 * e, r = t.s_height - 2 * U.value * S.value - 2 * e - (t.groupTit ? l : 0);
        t.groupData.forEach((i) => {
          i.s_width = s * i.groupW, i.s_height = r * i.groupH, i.s_x = s * i.groupX, i.s_y = r * i.groupY;
        });
      }
    }, bt = (t) => {
      t.s_x = t.x * S.value, t.s_y = t.y * S.value;
    }, kt = (t) => {
      t.width = t.s_width / S.value, t.height = t.s_height / S.value;
      const o = getComputedStyle($.value), e = parseInt(o.getPropertyValue("--group-tit-height").trim());
      if (t.isGroup === !0) {
        const l = t.width, s = t.height - (t.groupTit ? e : 0);
        t.groupData.forEach((r) => {
          r.x = l * r.groupX, r.y = s * r.groupY;
        });
      }
    }, Ye = (t) => {
      t.x = t.s_x / S.value, t.y = t.s_y / S.value;
    };
    let J = null, Ze = null;
    const xe = W(0), we = W(null), be = W(null), ke = W(null), Me = W(null), ce = (t) => {
      const o = D(t);
      if (!z.showAuxiliary || t === null)
        we.value = null, be.value = null, ke.value = null, Me.value = null;
      else {
        const e = getComputedStyle($.value), l = parseInt(e.getPropertyValue("--auxiliary-width").trim()), s = n.value.filter((a) => a.id !== o.id).map((a) => a.s_y), r = n.value.filter((a) => a.id !== o.id).map((a) => a.s_y + a.s_height), i = [...s, ...r];
        i.sort(), i.filter((a) => a === o.s_y).length > 0 ? we.value = o.s_y : we.value = null, i.filter((a) => a === o.s_y + o.s_height).length > 0 ? be.value = o.s_y + o.s_height - l : be.value = null;
        const y = n.value.filter((a) => a.id !== o.id).map((a) => a.s_x), c = n.value.filter((a) => a.id !== o.id).map((a) => a.s_x + a.s_width), f = [...y, ...c];
        f.sort(), f.filter((a) => a === o.s_x).length > 0 ? ke.value = o.s_x : ke.value = null, f.filter((a) => a === o.s_x + o.s_width).length > 0 ? Me.value = o.s_x + o.s_width - l : Me.value = null;
      }
    };
    let P = null, je = null, et = null;
    const G = W({});
    let Be = null;
    const Mt = (t, o) => {
      clearTimeout(Be), Ee(), P = o, G.value = D(n.value[P]), O("dragStart", R(n.value[P])), n.value[P].move = !0, ce(n.value[P]);
      const e = _t(t.target, ".com-item");
      je = t.clientX - e.offsetLeft, et = t.clientY - e.offsetTop, window.addEventListener("mousemove", tt), window.addEventListener("mouseup", ot);
    }, tt = (t) => {
      clearTimeout(Be);
      const o = t.clientX - je, e = t.clientY - et, l = o <= Q("left") ? Q("left") : o >= Q("right") ? Q("right") : o, s = e <= Q("top") ? Q("top") : e >= Q("bottom") ? Q("bottom") : e, r = l - n.value[P].s_x, i = s - n.value[P].s_y;
      let y = "";
      i > 0 ? y = "bottom" : i < 0 ? y = "top" : r > 2 ? y = "right" : r < -2 && (y = "left"), n.value[P].s_x = l, n.value[P].s_y = s, ce(n.value[P]);
      let c = Pe(D(n.value.filter((f) => f.move !== !0)), n.value[P], !0);
      if (c.length === 0)
        G.value.s_x = l, G.value.s_y = s;
      else
        switch (y) {
          case "top":
            c = c.filter((u) => u.s_y < G.value.s_y);
            const f = Math.min(...c.map((u) => u.s_y + u.s_height));
            c.forEach((u) => {
              Math.abs(u.s_y + u.s_height - f) < 5 && (u.s_y = f - u.s_height);
            });
            let a = G.value.s_y - s, w = !0, p = [...c];
            const E = (u) => {
              oe(D(n.value.filter((h) => h.move !== !0 && Math.abs(h.s_y + h.s_height - u.s_y) <= 3)), u, !0).forEach((h) => {
                p.findIndex((v) => v.id === h.id) === -1 && (p.push(h), E(h));
              });
            };
            if (c.forEach((u) => {
              E(u);
            }), p.sort((u, k) => {
              const h = u.s_y, v = k.s_y;
              return h - v;
            }), (p.length === 0 || p.filter((u) => u.s_y === 0).length > 0) && (w = !1), w) {
              let u = 0;
              p.filter((h) => h.s_y === p[0].s_y).forEach((h) => {
                oe(D(n.value.filter((C) => C.move !== !0 && C.s_y + C.s_height < h.s_y)), h, !0).forEach((C) => {
                  C.s_y + C.s_height > u && (u = C.s_y + C.s_height);
                });
              }), u = p[0].s_y - u, u < a && (a = u), p.forEach((h) => {
                h.s_y -= a, n.value.filter((v) => v.id === h.id)[0].s_y = h.s_y;
              }), G.value.s_x = l, G.value.s_y = n.value.filter((h) => h.id === p[p.length - 1].id)[0].s_y + n.value.filter((h) => h.id === p[p.length - 1].id)[0].s_height;
            } else {
              let u = 0;
              c.forEach((v) => {
                const C = oe(n.value.filter((Y) => Y.move !== !0), v, !0).filter((Y) => Y.s_y > v.s_y + v.s_height);
                C.length > 0 && (u = Math.min(...C.map((Y) => Y.s_y)));
              });
              const k = u === 0 ? 0 : u - G.value.s_height - (Math.max(...c.map((v) => v.s_y + v.s_height)) - Math.min(...c.map((v) => v.s_y))), h = k === 0 ? s + G.value.s_height - Math.min(...c.map((v) => v.s_y)) : u - Math.min(...c.map((v) => v.s_y)) - (Math.max(...c.map((v) => v.s_y + v.s_height)) - Math.min(...c.map((v) => v.s_y)));
              (k === 0 || s <= k) && (c.filter((v) => v.s_y < G.value.s_y).forEach((v) => {
                v.s_y += h, n.value.filter((C) => C.id === v.id)[0].s_y = v.s_y;
              }), G.value.s_x = l, G.value.s_y = s, se(n.value, (v, C) => v.filter((Y) => Y.move !== !0 && Y.id !== C.id), !0));
            }
            break;
          case "bottom":
            let T = 0;
            c.forEach((u) => {
              const k = oe(n.value.filter((h) => h.move !== !0), u, !0).filter((h) => h.s_y + h.s_height < u.s_y);
              k.length > 0 && (T = Math.max(...k.map((h) => h.s_y + h.s_height)));
            });
            const H = T + (Math.max(...c.map((u) => u.s_height + u.s_y)) - Math.min(...c.map((u) => u.s_y))), A = Math.min(...c.map((u) => u.s_y)) - T;
            s >= H && (c.filter((u) => u.s_y > G.value.s_y).forEach((u) => {
              u.s_y -= A, n.value.filter((h) => h.id === u.id)[0].s_y = u.s_y;
              const k = Pe(n.value.filter((h) => h.move !== !0 && h.id !== u.id), u, !0);
              k.length > 0 && (u.s_y = Math.max(...k.map((h) => h.s_y + h.s_height)), n.value.filter((h) => h.id === u.id)[0].s_y = u.s_y);
            }), G.value.s_x = l, G.value.s_y = H, se(n.value, (u, k) => u.filter((h) => h.move !== !0 && h.id !== k.id), !0));
            break;
          case "left":
          case "right":
            c.sort((u, k) => {
              const h = u.s_y, v = k.s_y;
              return h - v;
            });
            let ee = !0;
            for (let u = 0; u < c.length; u++) {
              if (ee) {
                const k = D(n.value);
                for (let h = 0; h <= u; h++) {
                  let v = null;
                  const C = oe(k.filter((Y) => Y.move !== !0 && Y.s_y < c[h].s_y), c[h], !0);
                  if (C.length === 0 ? v = 0 : v = Math.max(...C.map((Y) => Y.s_y + Y.s_height)), h === u) {
                    if (c[h].s_y - (c[h].s_y + c[h].s_height - s) < v) {
                      ee = !1;
                      break;
                    }
                  } else if (c[h].s_y - c[u].s_height < v) {
                    ee = !1;
                    break;
                  } else
                    k.filter((Y) => Y.id === c[h].id)[0].s_y -= c[u].s_height;
                }
              }
              if (ee) {
                c[u].s_y -= c[u].s_y + c[u].s_height - s, n.value.filter((k) => k.id === c[u].id)[0].s_y = c[u].s_y;
                for (let k = u; k > 0; k--)
                  c[u - 1].s_y -= c[u].s_height, n.value.filter((h) => h.id === c[u - 1].id)[0].s_y = c[u - 1].s_y;
              } else
                c.filter((k) => k.id === c[u].id).forEach((k) => {
                  k.s_y += n.value[P].s_y + n.value[P].s_height - k.s_y, n.value.filter((h) => h.id === k.id)[0].s_y = k.s_y, se([k], (h, v) => h.filter((C) => C.move !== !0 && C.id !== v.id), !0);
                });
            }
            G.value.s_x = l;
            break;
        }
      n.value.forEach((f) => {
        Ye(f);
      }), m(!1), O("dragIng", R(n.value[P]));
    }, ot = () => {
      window.removeEventListener("mousemove", tt), window.removeEventListener("mouseup", ot), delete n.value[P].move, n.value[P].s_x = G.value.s_x, n.value[P].s_y = G.value.s_y, ce(null), n.value.forEach((t) => {
        Ye(t);
      }), m(), O("dragEnd", R(n.value[P])), P = null, Be = setTimeout(() => {
        m();
      }, 500);
    }, Q = (t) => {
      switch (t) {
        case "top":
          return 0;
        case "right":
          return J - X.value * 2 * S.value - n.value[P].s_width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let _ = null, Re = "", Ie = 0, Ge = 0, le = 0, re = 0, ne = 0, ae = 0, he = 0, Ce = 0, de = 0, ze = 0;
    const Z = (t, o, e) => {
      Ee(), _ = o, O("resizeStart", R(_)), Re = e, Ie = t.clientX, Ge = t.clientY, le = o.s_width, re = o.s_height, ne = o.s_y, ae = o.s_x, _.drag = !0, ce(_);
      const l = n.value.filter((f) => f.static === !0 && (f.s_x < o.s_x ? f.s_x + f.s_width >= o.s_x : f.s_x <= o.s_x + o.s_width)), s = n.value.filter((f) => f.static === !0 && (f.s_y < o.s_y ? f.s_y + f.s_height >= o.s_y : f.s_y <= o.s_y + o.s_height)), r = l.filter((f) => f.s_y + f.s_height <= o.s_y).map((f) => f.s_y + f.s_height);
      r.length > 0 ? he = Math.max(...r) : he = 0;
      const i = l.filter((f) => f.s_y >= o.s_y + o.s_height).map((f) => f.s_y);
      i.length > 0 ? Ce = Math.min(...i) : Ce = 0;
      const y = s.filter((f) => f.s_x + f.s_width <= o.s_x).map((f) => f.s_x + f.s_width);
      y.length > 0 ? de = Math.max(...y) : de = 0;
      const c = s.filter((f) => f.s_x >= o.s_x + o.s_width).map((f) => f.s_x);
      c.length > 0 ? ze = Math.min(...c) : ze = 0, window.addEventListener("mousemove", st), window.addEventListener("mouseup", lt);
    }, st = (t) => {
      const o = le + (t.clientX - Ie), e = re + (t.clientY - Ge), l = le - (t.clientX - Ie), s = re - (t.clientY - Ge), r = ne + (t.clientY - Ge), i = ae + (t.clientX - Ie), y = getComputedStyle($.value), c = parseInt(y.getPropertyValue("--com-item-border-width").trim()), f = parseInt(y.getPropertyValue("--group-tit-height").trim()), a = () => {
        if (_.isGroup === !0) {
          const T = _.s_width - 2 * X.value * S.value - 2 * c, H = _.s_height - 2 * U.value * S.value - 2 * c - (_.groupTit ? f : 0);
          _.groupData.forEach((A) => {
            A.s_width = T * A.groupW, A.s_height = H * A.groupH, A.s_x = T * A.groupX, A.s_y = H * A.groupY;
          });
        }
      }, w = (z.itemMinWidth + X.value * 2) * S.value, p = (z.itemMinHeight + U.value * 2) * S.value;
      switch (Re) {
        case "top-left":
          _.s_height = s < p ? p : s > M("top") ? M("top") : s, _.s_y = s < p ? ne + re - p : s > M("top") ? he : r, _.s_width = l < w ? w : l > M("left") ? M("left") : l, _.s_x = l < w ? ae + le - w : l > M("left") ? de : i, a();
          break;
        case "top":
          _.s_height = s < p ? p : s > M("top") ? M("top") : s, _.s_y = s < p ? ne + re - p : s > M("top") ? he : r, a();
          break;
        case "top-right":
          _.s_height = s < p ? p : s > M("top") ? M("top") : s, _.s_y = s < p ? ne + re - p : s > M("top") ? he : r, _.s_width = o < w ? w : o > M("right") ? M("right") : o, a();
          break;
        case "left":
          _.s_width = l < w ? w : l > M("left") ? M("left") : l, _.s_x = l < w ? ae + le - w : l > M("left") ? de : i, a();
          break;
        case "right":
          _.s_width = o < w ? w : o > M("right") ? M("right") : o, a();
          break;
        case "bottom-left":
          _.s_height = e < p ? p : e > M("bottom") ? M("bottom") : e, _.s_width = l < w ? w : l > M("left") ? M("left") : l, _.s_x = l < w ? ae + le - w : l > M("left") ? de : i, a();
          break;
        case "bottom":
          _.s_height = e < p ? p : e > M("bottom") ? M("bottom") : e, a();
          break;
        case "bottom-right":
          _.s_height = e < p ? p : e > M("bottom") ? M("bottom") : e, _.s_width = o < w ? w : o > M("right") ? M("right") : o, a();
          break;
      }
      kt(_), ce(_);
      let E = Pe(D(n.value.filter((T) => T.drag !== !0)), _, !0);
      if (E.length > 0) {
        E.sort((T, H) => {
          const A = T.s_y, ee = H.s_y;
          return A - ee;
        });
        for (let T = 0; T < E.length; T++)
          E.filter((H) => H.id === E[T].id).forEach((H) => {
            H.s_y += _.s_y + _.s_height - H.s_y, n.value.filter((A) => A.id === H.id)[0].s_y = H.s_y, se([H], (A, ee) => A.filter((u) => u.drag !== !0 && u.id !== ee.id), !0);
          });
      }
      n.value.forEach((T) => {
        Ye(T);
      }), m(!1), O("resizeIng", R(_));
    }, lt = (t) => {
      delete _.drag, Re = "", ce(null), window.removeEventListener("mousemove", st), window.removeEventListener("mouseup", lt), m(), O("resizeEnd", R(_)), _ = null;
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
      t === !0 && (se(n.value, (e, l) => e.filter((s) => s.id !== l.id)), St(), n.value.forEach((e) => {
        bt(e);
      }), Et());
      const o = n.value.map((e) => e.y + e.height);
      o.length > 0 ? xe.value = Math.max(...o) : xe.value = 0;
    }, St = () => {
      const t = D(n.value).sort((o, e) => {
        const l = o.y, s = e.y;
        return l - s;
      });
      for (let o = 0; o < t.length; o++) {
        const e = oe(t, t[o]).filter((l) => l.y + l.height <= t[o].y);
        e.length > 0 ? t[o].y = Math.max(...e.map((l) => l.y + l.height)) : t[o].y = 0;
      }
      t.forEach((o) => {
        n.value.filter((e) => e.id === o.id)[0].y = o.y;
      });
    }, Et = () => {
      const t = n.value.filter((o) => o.isGroup === !0);
      if (t.length > 0) {
        const o = getComputedStyle($.value), e = parseInt(o.getPropertyValue("--setting-icon-group-width").trim()), l = parseInt(o.getPropertyValue("--setting-icon-group-height").trim());
        t.forEach((s) => {
          X.value + s.s_x + s.s_width + e > J ? X.value + s.s_x - e < 0 ? z.groupBtnPosMore ? U.value + s.s_y - l < 0 ? s.btnPosition = "bottom" : s.btnPosition = "top" : s.btnPosition = "center" : s.btnPosition = "left" : s.btnPosition = "right";
        });
      }
    };
    Rt(() => {
      rt.observe($.value);
    });
    const rt = new ResizeObserver((t) => {
      Gt(J === t[0].borderBoxSize[0].inlineSize ? null : t[0].borderBoxSize[0].inlineSize, Ze === t[0].borderBoxSize[0].blockSize ? null : t[0].borderBoxSize[0].blockSize);
    }), Se = W("");
    let He = 0, Le = 0, Xe = null, $e = !1;
    const Dt = (t = [], o = null) => {
      clearInterval(Xe), Se.value = (/* @__PURE__ */ new Date()).getTime() + "", He = 0, Le = 0, t.forEach((e) => {
        He += 1, e.isGroup === !0 && (Le += e.groupData.length);
      }), ct(), O("domStart"), n.value = D(t), n.value.filter((e) => e.isGroup === !0).forEach((e) => {
        if (e.groupData.length < 2)
          De(e.id);
        else {
          const l = Te(e.groupData, e);
          Oe(l);
        }
      }), $e = !0, gt(() => {
        const e = $.value.getBoundingClientRect();
        o != null ? (ve(o), _e(e.width / o)) : (ve(n.value.length > 0 ? e.width : null), _e(1)), n.value.forEach((l) => {
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
      const o = n.value.filter((e) => e.id === t);
      if (o.length === 1)
        delete o[0].showSet;
      else
        try {
        } catch {
        }
    }, nt = (t, o, e) => {
      const l = o.map((i) => i.y), s = Math.max(...l), r = o.filter((i) => i.y + i.height > s);
      r.sort((i, y) => {
        const c = i.x, f = y.x;
        return c - f;
      });
      for (let i = 0; i < r.length; i++) {
        if (i === 0 && r[i].x >= t.width) {
          t.y = s, t.x = 0;
          break;
        }
        if (r.length > 1 && i !== r.length - 1 && r[i].x + r[i].width + t.width <= r[i + 1].x) {
          t.y = s, t.x = r[i].x + r[i].width;
          break;
        }
        if (i === r.length - 1 && r[i].x + r[i].width + t.width <= e) {
          t.y = s, t.x = r[i].x + r[i].width;
          break;
        }
      }
      if (t.y == null) {
        t.x = 0;
        const i = o.map((y) => y.y + y.height);
        t.y = Math.max(...i);
      }
    }, pe = (t, o = null, e = !1) => {
      const l = D(t), s = n.value.filter((r) => r.id === o);
      if (l.id || (l.id = (/* @__PURE__ */ new Date()).getTime() + ""), o && s.length !== 1)
        try {
        } catch {
        } finally {
          return;
        }
      if (e !== !0 && (delete l.x, delete l.y, o ? (s[0].groupData.forEach((r) => {
        j(r, s[0]);
      }), nt(l, s[0].groupData, s[0].width)) : n.value.length === 0 ? (l.x = 0, l.y = 0) : nt(l, n.value, (ie || J) - X.value * 2)), o) {
        s[0].groupData.push(l);
        const r = Te(s[0].groupData, s[0]);
        Oe(r), se([r], (i, y) => i.filter((c) => c.id !== y.id));
      } else
        n.value.length === 0 && ve(J), ue(l), n.value.push(l);
      m();
    }, Ne = (t, o = null, e = null) => {
      let l = null;
      const s = n.value.filter((r) => r.id === o);
      if (o ? s.length === 1 && (l = D(s[0].groupData.filter((r) => r.id === t)[0])) : l = D(n.value.filter((r) => r.id === t)[0]), l)
        return l.id = e || (/* @__PURE__ */ new Date()).getTime() + "", o ? (j(l, s[0]), pe(l, o)) : pe(l), R(o ? n.value.filter((r) => r.id === o)[0].groupData.filter((r) => r.id === l.id)[0] : n.value.filter((r) => r.id === l.id)[0]);
      try {
      } catch {
      } finally {
        return null;
      }
    }, fe = (t, o = null) => {
      let e = -1;
      const l = n.value.filter((s) => s.id === o);
      if (o ? l.length === 1 && (e = l[0].groupData.findIndex((s) => s.id === t)) : e = n.value.findIndex((s) => s.id === t), e !== -1) {
        if (o)
          if (l[0].groupData.splice(e, 1), l[0].groupData.length === 1)
            De(o);
          else {
            l[0].groupData.forEach((r) => {
              j(r, l[0]);
            });
            const s = Te(l[0].groupData, l[0]);
            Oe(s);
          }
        else
          n.value.splice(e, 1), n.value.length === 0 && (ve(null), _e(1));
        m();
      } else
        try {
        } catch {
        }
    }, It = (t) => {
      Oe(t, !1);
    }, Oe = (t, o = !0) => {
      if (t.id) {
        const e = D(t);
        let l = -1;
        const s = n.value.filter((r) => r.id === e.inGroupId);
        if (e.inGroupId ? s.length === 1 && (l = s[0].groupData.findIndex((r) => r.id === e.id)) : l = n.value.findIndex((r) => r.id === e.id), l !== -1) {
          if (o && (delete e.showPop, delete e.showSet, delete e.btnPosition, e.groupData && e.groupData.forEach((r) => {
            delete r.showPop, delete r.showSet;
          })), e.inGroupId) {
            if (o)
              s[0].groupData[l] = e;
            else
              try {
                delete s[0].showPop, delete s[0].showSet, delete s[0].btnPosition, s[0].groupData && s[0].groupData.forEach((r) => {
                  delete r.showPop, delete r.showSet;
                });
                for (let r in e) {
                  const i = r.split(".");
                  let y = s[0].groupData[l];
                  for (let c = 0; c < i.length; c++)
                    if (c === i.length - 1)
                      y[i[c]] = e[r];
                    else if (y = y[i[c]], !y)
                      throw new Error(r);
                }
              } catch {
                try {
                } catch {
                }
              }
            ue(s[0]);
          } else {
            if (o)
              n.value[l] = e;
            else
              try {
                delete n.value[l].showPop, delete n.value[l].showSet, delete n.value[l].btnPosition, n.value[l].groupData && n.value[l].groupData.forEach((r) => {
                  delete r.showPop, delete r.showSet;
                });
                for (let r in e) {
                  const i = r.split(".");
                  let y = n.value[l];
                  for (let c = 0; c < i.length; c++)
                    if (c === i.length - 1)
                      y[i[c]] = e[r];
                    else if (y = y[i[c]], !y)
                      throw new Error(r);
                }
              } catch {
                try {
                } catch {
                }
              }
            ue(n.value[l]);
          }
          m();
        } else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, Gt = (t, o) => {
      t !== null && (J = t, $e || (_e(ie && J ? t / ie : 1), n.value.forEach((e) => {
        ue(e);
      }), m())), o !== null && (Ze = o);
    }, at = (t) => {
      t.showPop || (n.value.forEach((o) => {
        delete o.showPop, o.groupData && o.groupData.forEach((e) => {
          delete e.showPop;
        });
      }), O("openSetMenu", R(t)), t.showPop = !0, window.addEventListener("click", Ee));
    }, Ee = () => {
      n.value.forEach((t) => {
        delete t.showPop, t.groupData && t.groupData.forEach((o) => {
          delete o.showPop;
        });
      }), window.removeEventListener("click", Ee);
    }, N = W(!1), it = (t) => {
      const o = n.value.findIndex((e) => e.id === t);
      if (o !== -1)
        n.value[o].checked = !0, n.value[o].checkDis = !0, N.value = !0, O("showGroup", N.value);
      else
        try {
        } catch {
        }
    }, Ve = () => {
      N.value = !1, n.value.forEach((t) => {
        delete t.checked, delete t.checkDis, t.groupData && t.groupData.forEach((o) => {
          delete o.checked, delete o.checkDis;
        });
      }), O("showGroup", N.value);
    }, Ct = (t) => {
      t.checked = !t.checked, O("updateChecked", n.value.filter((o) => o.checked).length);
    }, Te = (t, o) => {
      const e = D(t), l = D(o);
      e.sort((a, w) => {
        const p = a.x, E = w.x;
        return p - E;
      });
      for (let a = 0; a < e.length - 1; a++) {
        if (a === 0 && e[a].x > 0) {
          const w = e[a].x;
          for (let p = a; p < e.length; p++)
            e[p].x -= w;
        }
        if (e[a + 1].x > e[a].x + e[a].width) {
          const w = D(e.slice(0, a + 1));
          if (e[a + 1].x > Math.max(...w.map((p) => p.x + p.width))) {
            const p = e[a + 1].x - Math.max(...w.map((E) => E.x + E.width));
            for (let E = a + 1; E < e.length; E++)
              e[E].x -= p;
          }
        }
      }
      e.sort((a, w) => {
        const p = a.y, E = w.y;
        return p - E;
      });
      for (let a = 0; a < e.length - 1; a++) {
        if (a === 0 && e[a].y > 0) {
          const w = e[a].y;
          for (let p = a; p < e.length; p++)
            e[p].y -= w;
        }
        if (e[a + 1].y > e[a].y + e[a].height) {
          const w = D(e.slice(0, a + 1));
          if (e[a + 1].y > Math.max(...w.map((p) => p.y + p.height))) {
            const p = e[a + 1].y - Math.max(...w.map((E) => E.y + E.height));
            for (let E = a + 1; E < e.length; E++)
              e[E].y -= p;
          }
        }
      }
      const s = e.map((a) => a.x + a.width), r = Math.max(...s), i = e.map((a) => a.y + a.height), y = Math.max(...i);
      e.forEach((a) => {
        a.inGroupId || (a.inGroupId = l.id), a.groupW = a.width / r, a.groupH = a.height / y, a.groupX = a.x / r, a.groupY = a.y / y, a.isObstacle = a.x + a.width === r && a.y === 0, delete a.width, delete a.height;
      });
      const c = getComputedStyle($.value), f = parseInt(c.getPropertyValue("--group-tit-height").trim());
      return l.width = r, l.height = y + (l.groupTit ? f : 0), l.groupData = [...e], l;
    }, j = (t, o) => {
      const e = getComputedStyle($.value), l = parseInt(e.getPropertyValue("--group-tit-height").trim());
      t.width = o.width * t.groupW, t.height = (o.height - (o.groupTit ? l : 0)) * t.groupH;
    }, zt = () => {
      gt(() => {
        Je();
      });
    }, Ot = () => {
      let t = n.value.filter((o) => o.checked);
      if (t.length > 1)
        if (t = z.beforeAddGroup(D(t)), typeof t == "object" && t instanceof Array && t.length > 0 && t.filter((o) => o.id).length === t.length) {
          const o = {
            id: (/* @__PURE__ */ new Date()).getTime() + "G",
            isGroup: !0,
            groupTit: ""
          }, e = Te(t, o);
          return e.groupData.forEach((l) => {
            fe(l.id);
          }), pe(e), Ve(), R(n.value.filter((l) => l.id === e.id)[0]);
        } else
          try {
          } catch {
          } finally {
            return null;
          }
      else
        return Ve(), null;
    }, ut = (t, o) => {
      const e = n.value.filter((l) => l.id === o)[0];
      if (e) {
        let l = e.groupData.filter((s) => s.id === t)[0];
        if (l) {
          if (e.groupData.length === 2)
            return De(o);
          if (l = z.beforeRemoveGroup(D([l])), typeof l == "object" && l instanceof Array && l.length === 1 && l.filter((s) => s.id).length === 1)
            return l = l[0], j(l, e), delete l.inGroupId, delete l.groupW, delete l.groupH, delete l.groupX, delete l.groupY, delete l.isObstacle, fe(l.id, e.id), pe(l), [R(n.value.filter((s) => s.id === t)[0])];
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
      const o = n.value.filter((e) => e.id === t)[0];
      if (o) {
        let e = [], l = !0;
        try {
          o.groupData.forEach((s) => {
            if (s = z.beforeRemoveGroup(D([o])), typeof s == "object" && s instanceof Array && s.length === 1 && s.filter((r) => r.id).length === 1)
              s = s[0];
            else
              throw l = !1, new Error();
          });
        } catch {
        }
        if (l) {
          o.groupData.forEach((r) => {
            j(r, o), r.x += o.x, r.y += o.y, delete r.inGroupId, delete r.groupW, delete r.groupH, delete r.groupX, delete r.groupY, delete r.isObstacle, e.push(r.id), pe(r, null, !0);
          }), fe(o.id);
          let s = [];
          return e.forEach((r) => {
            s.push(R(n.value.filter((i) => i.id === r)[0]));
          }), s;
        } else
          return [];
      } else
        try {
        } catch {
        } finally {
          return [];
        }
    }, Tt = (t = "", o) => {
      const e = n.value.filter((l) => l.id === o)[0];
      if (e) {
        if (!e.groupTit || !t) {
          const l = getComputedStyle($.value), s = parseInt(l.getPropertyValue("--group-tit-height").trim());
          e.groupTit && !t && (e.height -= s, e.s_height -= s * S.value), !e.groupTit && t && (e.height += s, e.s_height += s * S.value);
        }
        e.groupTit = t, se([e], (l, s) => l.filter((r) => r.id !== s.id)), m();
      } else
        try {
        } catch {
        }
    }, ct = () => {
      n.value = [], ve(null), _e(1), xe.value = 0;
    }, At = () => new Promise((t, o) => {
      n.value.forEach((l) => {
        delete l.showPop, delete l.showSet, l.groupData && l.groupData.forEach((s) => {
          delete s.showPop, delete s.showSet;
        });
      });
      const e = D(n.value);
      e.forEach((l) => {
        l.isGroup === !0 && l.groupData.forEach((s) => {
          j(s, l), delete s.s_width, delete s.s_height, delete s.s_x, delete s.s_y;
        }), delete l.btnPosition, delete l.s_width, delete l.s_height, delete l.s_x, delete l.s_y;
      }), t({ data: e, width: ie });
    });
    return Ht(() => {
      rt.unobserve($.value), window.removeEventListener("click", Ee);
    }), F({ init: Dt, addItem: pe, copyItem: Ne, deleteItem: fe, updateItem: It, hideGroupSet: We, openGroup: it, closeGroup: Ve, changeGroupBorder: zt, addGroup: Ot, removeGroupItem: ut, removeGroup: De, changeGroupTit: Tt, resetData: ct, getData: At }), (t, o) => (x(), b("div", {
      class: "vue-drag-component-plus",
      style: V({ "--css-scle": d(S), "--com-x-space": d(X) + "px", "--com-y-space": d(U) + "px" }),
      ref_key: "pageRef",
      ref: $
    }, [
      B("div", Xt, [
        (x(!0), b(ge, null, Ke(d(n), (e, l) => (x(), b("div", {
          class: te(["com-item", e.move ? "is-move" : "", e.drag ? "is-drag" : "", e.showPop || e.isGroup && e.groupData.filter((s) => s.showPop).length > 0 ? "on-top" : "", d(Se) + "p"]),
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
            onMousedown: L((s) => g.seeModel || d(N) || e.static === !0 || e.dragable === !1 ? null : Mt(s, l), ["prevent"]),
            onMouseenter: (s) => g.seeModel || d(N) || d(P) || d(_) || !e.isGroup ? null : Pt(e),
            onMouseleave: (s) => g.seeModel || d(N) || d(P) || d(_) || !e.isGroup ? null : We(e.id)
          }, [
            B("div", Wt, [
              e.isGroup ? (x(), b(ge, { key: 0 }, [
                e.groupTit ? (x(), b("div", {
                  key: 0,
                  class: "group-item-tit",
                  title: e.groupTit
                }, K(e.groupTit), 9, Nt)) : I("", !0),
                B("div", {
                  class: te(["group-item-content", e.groupTit ? "" : "full"])
                }, [
                  (x(!0), b(ge, null, Ke(e.groupData, (s, r) => (x(), b("div", {
                    class: te(["com-item-box-child", s.isObstacle ? "is-obstacle" : "", d(Se) + "c"]),
                    style: V({
                      width: s.s_width + "px",
                      height: s.s_height + "px",
                      top: s.s_y + "px",
                      left: s.s_x + "px"
                    }),
                    key: r
                  }, [
                    B("div", Vt, [
                      ye(t.$slots, "item", { data: s }, () => [
                        B("p", null, K(Math.round(s.s_width * 100) / 100) + "," + K(Math.round(s.s_height * 100) / 100), 1),
                        B("p", null, K(Math.round(s.s_x * 100) / 100) + "," + K(Math.round(s.s_y * 100) / 100), 1)
                      ])
                    ]),
                    !g.seeModel && !d(N) && d(P) === null && d(_) === null ? (x(), b("div", {
                      key: 0,
                      class: "setting-box",
                      style: V({ display: s.showPop ? "flex" : "none" }),
                      onMousedown: L((i) => null, ["prevent", "stop"])
                    }, [
                      ft(vt, {
                        iconObj: g.settingIcon,
                        onClick: L((i) => at(s), ["prevent", "stop"])
                      }, null, 8, ["iconObj", "onClick"])
                    ], 36)) : I("", !0),
                    s.showPop ? (x(), b("div", {
                      key: 1,
                      class: "setting-box-pop",
                      onMousedown: L((i) => null, ["prevent", "stop"])
                    }, [
                      ye(t.$slots, "setPopNormal", {
                        data: R(s)
                      }, () => [
                        B("div", {
                          class: "setting-box-pop-item",
                          onClick: (i) => ut(s.id, s.inGroupId)
                        }, "移出组合", 8, mt),
                        B("div", {
                          class: "setting-box-pop-item",
                          onClick: (i) => Ne(s.id, s.inGroupId)
                        }, "复制", 8, Kt),
                        B("div", {
                          class: "setting-box-pop-item",
                          onClick: (i) => fe(s.id, s.inGroupId)
                        }, "删除", 8, Ft)
                      ])
                    ], 32)) : I("", !0)
                  ], 6))), 128))
                ], 2)
              ], 64)) : (x(), b("div", qt, [
                ye(t.$slots, "item", { data: e }, () => [
                  B("p", null, K(Math.round(e.s_width * 100) / 100) + "," + K(Math.round(e.s_height * 100) / 100), 1),
                  B("p", null, K(Math.round(e.s_x * 100) / 100) + "," + K(Math.round(e.s_y * 100) / 100), 1)
                ])
              ])),
              !e.isGroup && e.notGroup !== !0 && d(N) ? (x(), b("div", {
                key: 2,
                class: te(["group-checkbox", e.checked ? "is-checked" : "", e.checkDis ? "disabled" : ""]),
                onClick: (s) => e.checkDis ? null : Ct(e)
              }, null, 10, Ut)) : I("", !0),
              !g.seeModel && !d(N) && d(P) === null && d(_) === null ? (x(), b("div", {
                key: 3,
                class: te(["setting-box", e.isGroup === !0 ? e.btnPosition === "right" ? "only-g" : e.btnPosition === "left" ? "only-g l" : e.btnPosition === "top" ? "only-g t" : e.btnPosition === "bottom" ? "only-g b" : e.btnPosition === "center" ? "only-g c" : "" : ""]),
                style: V({ display: e.showPop || e.showSet ? "flex" : "none" }),
                onMousedown: L((s) => null, ["prevent", "stop"])
              }, [
                ft(vt, {
                  iconObj: g.settingIcon,
                  onClick: L((s) => at(e), ["prevent", "stop"])
                }, null, 8, ["iconObj", "onClick"])
              ], 38)) : I("", !0),
              e.showPop ? (x(), b("div", {
                key: 4,
                class: te(["setting-box-pop", e.isGroup === !0 ? e.btnPosition === "right" ? "special" : e.btnPosition === "left" ? "special l" : e.btnPosition === "top" ? "special t" : e.btnPosition === "bottom" ? "special b" : e.btnPosition === "center" ? "special c" : "" : ""]),
                onMousedown: L((s) => null, ["prevent", "stop"])
              }, [
                e.isGroup === !0 ? ye(t.$slots, "setPopSpecial", {
                  key: 0,
                  data: R(e)
                }, () => [
                  g.hideTit ? I("", !0) : (x(), b("div", {
                    key: 0,
                    class: "setting-box-pop-item",
                    onClick: (s) => {
                      We(e.id), O("showTitPop", e.groupTit, e.id);
                    }
                  }, " 设置组合标题", 8, Jt)),
                  B("div", {
                    class: "setting-box-pop-item",
                    onClick: (s) => De(e.id)
                  }, "解除组合", 8, Qt)
                ]) : ye(t.$slots, "setPopNormal", {
                  key: 1,
                  data: R(e)
                }, () => [
                  e.notGroup !== !0 ? (x(), b("div", {
                    key: 0,
                    class: "setting-box-pop-item",
                    onClick: (s) => it(e.id)
                  }, "组合", 8, Zt)) : I("", !0),
                  B("div", {
                    class: "setting-box-pop-item",
                    onClick: (s) => Ne(e.id)
                  }, "复制", 8, jt),
                  B("div", {
                    class: "setting-box-pop-item",
                    onClick: (s) => fe(e.id)
                  }, "删除", 8, eo)
                ])
              ], 34)) : I("", !0)
            ]),
            !g.seeModel && !d(N) && !e.showPop && !(e.isGroup && e.groupData.filter((s) => s.showPop).length > 0) && !e.move && e.static !== !0 && e.resizable !== !1 ? (x(), b(ge, { key: 0 }, [
              d(q).indexOf("topLeft") !== -1 ? (x(), b("div", {
                key: 0,
                class: "resize-line top-left",
                onMousedown: L((s) => Z(s, e, "top-left"), ["prevent", "stop"])
              }, null, 40, to)) : I("", !0),
              d(q).indexOf("top") !== -1 ? (x(), b("div", {
                key: 1,
                class: "resize-line top",
                onMousedown: L((s) => Z(s, e, "top"), ["prevent", "stop"])
              }, null, 40, oo)) : I("", !0),
              d(q).indexOf("topRight") !== -1 ? (x(), b("div", {
                key: 2,
                class: "resize-line top-right",
                onMousedown: L((s) => Z(s, e, "top-right"), ["prevent", "stop"])
              }, null, 40, so)) : I("", !0),
              d(q).indexOf("left") !== -1 ? (x(), b("div", {
                key: 3,
                class: "resize-line left",
                onMousedown: L((s) => Z(s, e, "left"), ["prevent", "stop"])
              }, null, 40, lo)) : I("", !0),
              d(q).indexOf("right") !== -1 ? (x(), b("div", {
                key: 4,
                class: "resize-line right",
                onMousedown: L((s) => Z(s, e, "right"), ["prevent", "stop"])
              }, null, 40, ro)) : I("", !0),
              d(q).indexOf("bottomLeft") !== -1 ? (x(), b("div", {
                key: 5,
                class: "resize-line bottom-left",
                onMousedown: L((s) => Z(s, e, "bottom-left"), ["prevent", "stop"])
              }, null, 40, no)) : I("", !0),
              d(q).indexOf("bottom") !== -1 ? (x(), b("div", {
                key: 6,
                class: "resize-line bottom",
                onMousedown: L((s) => Z(s, e, "bottom"), ["prevent", "stop"])
              }, null, 40, ao)) : I("", !0),
              d(q).indexOf("bottomRight") !== -1 ? (x(), b("div", {
                key: 7,
                class: "resize-line bottom-right",
                onMousedown: L((s) => Z(s, e, "bottom-right"), ["prevent", "stop"])
              }, null, 40, io)) : I("", !0)
            ], 64)) : I("", !0)
          ], 42, $t)
        ], 6))), 128)),
        (x(!0), b(ge, null, Ke(d(n), (e, l) => (x(), b("div", {
          class: te(["shadow-bg", e.move ? "is-move" : ""]),
          style: V({
            width: e.s_width - d(X) * 2 * d(S) + "px",
            height: e.s_height - d(U) * 2 * d(S) + "px",
            top: e.s_y + d(U) * d(S) + "px",
            left: e.s_x + d(X) * d(S) + "px"
          }),
          key: l
        }, null, 6))), 128)),
        d(P) !== null ? (x(), b("div", {
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
        g.showAuxiliary ? (x(), b(ge, { key: 1 }, [
          d(we) !== null ? (x(), b("div", {
            key: 0,
            class: "auxiliary-line hor",
            style: V({ top: d(we) + "px", left: "0px" })
          }, null, 4)) : I("", !0),
          d(be) !== null ? (x(), b("div", {
            key: 1,
            class: "auxiliary-line hor",
            style: V({ top: d(be) + "px", left: "0px" })
          }, null, 4)) : I("", !0),
          d(ke) !== null ? (x(), b("div", {
            key: 2,
            class: "auxiliary-line",
            style: V({ top: "0px", left: d(ke) + "px" })
          }, null, 4)) : I("", !0),
          d(Me) !== null ? (x(), b("div", {
            key: 3,
            class: "auxiliary-line",
            style: V({ top: "0px", left: d(Me) + "px" })
          }, null, 4)) : I("", !0)
        ], 64)) : I("", !0),
        d(n).length === 0 ? (x(), b("div", uo, [
          ye(t.$slots, "empty", {}, () => [
            o[0] || (o[0] = Lt(" 暂无数据 "))
          ])
        ])) : I("", !0)
      ])
    ], 4));
  }
}, ho = [co], po = {
  install(g) {
    ho.forEach((F) => {
      g.component("vueDragComponentPlus", F);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(po);
export {
  po as default
};
