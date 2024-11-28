import { resolveComponent as bt, openBlock as w, createBlock as Ye, resolveDynamicComponent as et, normalizeProps as tt, mergeProps as me, withCtx as Et, createElementBlock as b, toDisplayString as V, watch as st, ref as X, onMounted as St, onBeforeUnmount as Dt, normalizeStyle as L, unref as f, createElementVNode as z, Fragment as ce, renderList as Re, normalizeClass as se, withModifiers as T, createCommentVNode as I, renderSlot as de, createVNode as ot, createTextVNode as Pt, isVNode as lt, nextTick as rt } from "vue";
const it = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(_) {
    return (B, Ae) => {
      const O = bt("el-icon");
      return _.iconObj.type === "custom" ? (w(), Ye(et(_.iconObj.icon), tt(me({ key: 0 }, _.iconObj.attrs)), null, 16)) : _.iconObj.type === "el" ? (w(), Ye(O, tt(me({ key: 1 }, _.iconObj.attrs)), {
        default: Et(() => [
          (w(), Ye(et(_.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : _.iconObj.type === "iconfont" ? (w(), b("i", me({
        key: 2,
        class: ["icon iconfont", "icon-" + _.iconObj.icon]
      }, _.iconObj.attrs), null, 16)) : (w(), b("i", me({
        key: 3,
        class: _.iconObj.type
      }, _.iconObj.attrs), V(_.iconObj.icon), 17));
    };
  }
};
const It = ["onMousedown", "onMouseenter", "onMouseleave"], Gt = { class: "com-item-box" }, Ct = ["title"], mt = { class: "com-item-box-content" }, Wt = ["onClick"], Ht = ["onClick"], Ot = ["onClick"], zt = {
  key: 1,
  class: "com-item-box-content"
}, Tt = ["onClick"], Yt = ["onClick"], Rt = ["onClick"], At = ["onClick"], Xt = ["onClick"], Lt = ["onClick"], $t = ["onMousedown"], Vt = ["onMousedown"], Bt = ["onMousedown"], Nt = ["onMousedown"], Kt = ["onMousedown"], Ft = ["onMousedown"], qt = ["onMousedown"], Ut = ["onMousedown"], Jt = {
  key: 2,
  class: "com-empty"
}, Qt = {
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
      validator(_, B) {
        return _ >= 0;
      }
    },
    // 组件项最小宽度
    itemMinWidth: {
      type: Number,
      default: 15,
      validator(_, B) {
        return _ >= 15;
      }
    },
    // 组件项最小高度
    itemMinHeight: {
      type: Number,
      default: 15,
      validator(_, B) {
        return _ >= 15;
      }
    },
    // 纵向相邻元素的自动间距
    ySpace: {
      type: Number,
      default: 7,
      validator(_, B) {
        return _ >= 0;
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
      validator(_, B) {
        return _ >= 1;
      }
    }
  },
  emits: ["baseWidthInit", "changeScle", "dragStart", "dragIng", "dragEnd", "resizeStart", "resizeIng", "resizeEnd", "showGroup", "openSetMenu", "updateChecked", "showTitPop"],
  setup(_, { expose: B, emit: Ae }) {
    const O = Ae, d = _, G = (s) => {
      if (typeof s == "object" && !lt(s) && s !== null && !(s instanceof Date)) {
        let t = s instanceof Array ? [] : {};
        for (let e in s)
          t[e] = typeof s[e] == "object" && !lt(s[e]) && s[e] !== null && !(s[e] instanceof Date) ? G(s[e]) : s[e];
        return t;
      } else
        return s;
    }, xe = (s, t, e = !1) => nt(K(s, t, e), t, e), K = (s, t, e = !1) => s.filter((l) => l[e ? "s_x" : "x"] <= t[e ? "s_x" : "x"] && l[e ? "s_x" : "x"] + l[e ? "s_width" : "width"] > t[e ? "s_x" : "x"] || l[e ? "s_x" : "x"] > t[e ? "s_x" : "x"] && l[e ? "s_x" : "x"] < t[e ? "s_x" : "x"] + t[e ? "s_width" : "width"]), nt = (s, t, e = !1) => s.filter((l) => l[e ? "s_y" : "y"] <= t[e ? "s_y" : "y"] && l[e ? "s_y" : "y"] + l[e ? "s_height" : "height"] > t[e ? "s_y" : "y"] || l[e ? "s_y" : "y"] > t[e ? "s_y" : "y"] && l[e ? "s_y" : "y"] < t[e ? "s_y" : "y"] + t[e ? "s_height" : "height"]), Q = (s, t = (l) => l, e = !1) => {
      const l = G(r.value), o = G(s);
      o.sort((i, E) => {
        const c = i[e ? "s_y" : "y"], g = E[e ? "s_y" : "y"];
        return c - g;
      });
      const a = (i) => {
        xe(t(l, i), i, e).forEach((c) => {
          c[e ? "s_y" : "y"] = i[e ? "s_y" : "y"] + i[e ? "s_height" : "height"], a(c);
        });
      };
      o.forEach((i) => a(l.filter((E) => E.id === i.id)[0])), l.forEach((i) => {
        r.value.filter((E) => E.id === i.id)[0][e ? "s_y" : "y"] = i[e ? "s_y" : "y"];
      });
    }, W = (s) => {
      const t = G(s);
      return delete t.showPop, delete t.showSet, t.groupData ? t.groupData.forEach((e) => {
        delete e.showPop, delete e.showSet, J(e, t), delete e.s_width, delete e.s_height, delete e.s_x, delete e.s_y;
      }) : t.inGroupId && (delete t.showPop, delete t.showSet, J(t, r.value.filter((e) => e.id === t.inGroupId)[0])), delete t.btnPosition, delete t.s_width, delete t.s_height, delete t.s_x, delete t.s_y, t;
    }, Xe = () => {
      d.insertResizeKeys.forEach((s) => {
        d.excludeResizeKeys.indexOf(s) === -1 && N.value.push(s);
      });
    };
    st(
      () => [d.insertResizeKeys, d.excludeResizeKeys],
      () => {
        Xe();
      }
    );
    const N = X([]);
    Xe();
    const Y = X(null);
    let oe = null;
    const we = (s) => {
      oe = s, O("baseWidthInit", oe);
    }, R = X(1), Me = (s) => {
      R.value = s, O("changeScle", R.value);
    }, le = (s) => {
      s.s_width = s.width * R.value, s.s_height = s.height * R.value;
      const t = getComputedStyle(Y.value), e = parseInt(t.getPropertyValue("--com-item-border-width").trim()), l = parseInt(t.getPropertyValue("--group-tit-height").trim());
      if (s.isGroup === !0) {
        const o = s.s_width - 2 * e, a = s.s_height - 2 * e - (s.groupTit ? l : 0);
        s.groupData.forEach((i) => {
          i.s_width = o * i.groupW, i.s_height = a * i.groupH, i.s_x = o * i.groupX, i.s_y = a * i.groupY;
        });
      }
    }, at = (s) => {
      s.s_x = s.x * R.value, s.s_y = s.y * R.value;
    }, ut = (s) => {
      s.width = s.s_width / R.value, s.height = s.s_height / R.value;
      const t = getComputedStyle(Y.value), e = parseInt(t.getPropertyValue("--com-item-border-width").trim()), l = parseInt(t.getPropertyValue("--group-tit-height").trim());
      if (s.isGroup === !0) {
        const o = s.width - 2 * e, a = s.height - 2 * e - (s.groupTit ? l : 0);
        s.groupData.forEach((i) => {
          i.x = o * i.groupX, i.y = a * i.groupY;
        });
      }
    }, We = (s) => {
      s.x = s.s_x / R.value, s.y = s.s_y / R.value;
    };
    let F = null, Le = null;
    const ht = X(null), ke = X(0), pe = X(null), ge = X(null), fe = X(null), ye = X(null), re = (s) => {
      const t = G(s);
      if (s === null)
        pe.value = null, ge.value = null, fe.value = null, ye.value = null;
      else {
        const e = getComputedStyle(Y.value), l = parseInt(e.getPropertyValue("--auxiliary-width").trim()), o = r.value.filter((p) => p.id !== t.id).map((p) => p.s_y), a = r.value.filter((p) => p.id !== t.id).map((p) => p.s_y + p.s_height - 1), i = [...o, ...a];
        i.sort(), i.filter((p) => p <= t.s_y && t.s_y - d.auxiliarySpace < p || p >= t.s_y && t.s_y + d.auxiliarySpace > p).length > 0 ? pe.value = t.s_y : pe.value = null, i.filter((p) => p <= t.s_y + t.s_height - 1 && t.s_y + t.s_height - 1 - d.auxiliarySpace < p || p >= t.s_y + t.s_height - 1 && t.s_y + t.s_height - 1 + d.auxiliarySpace > p).length > 0 ? ge.value = t.s_y + t.s_height - l : ge.value = null;
        const E = r.value.filter((p) => p.id !== t.id).map((p) => p.s_x), c = r.value.filter((p) => p.id !== t.id).map((p) => p.s_x + p.s_width - 1), g = [...E, ...c];
        g.sort(), g.filter((p) => p <= t.s_x && t.s_x - d.auxiliarySpace < p || p >= t.s_x && t.s_x + d.auxiliarySpace > p).length > 0 ? fe.value = t.s_x : fe.value = null, g.filter((p) => p <= t.s_x + t.s_width - 1 && t.s_x + t.s_width - 1 - d.auxiliarySpace < p || p >= t.s_x + t.s_width - 1 && t.s_x + t.s_width - 1 + d.auxiliarySpace > p).length > 0 ? ye.value = t.s_x + t.s_width - l : ye.value = null;
      }
    }, r = X([]), ct = (s, t) => {
      let e = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.msMatchesSelector;
      for (; s && !e.call(s, t); )
        s = s.parentElement;
      return s;
    };
    let P = null, $e = null, Ve = null;
    const C = X({}), dt = (s, t) => {
      _e(), P = t, C.value = G(r.value[P]), O("dragStart", W(r.value[P])), r.value[P].move = !0, re(r.value[P]);
      const e = ct(s.target, ".com-item");
      $e = s.clientX - e.offsetLeft, Ve = s.clientY - e.offsetTop, window.addEventListener("mousemove", Be), window.addEventListener("mouseup", Ne);
    }, Be = (s) => {
      const t = s.clientX - $e, e = s.clientY - Ve, l = t <= q("left") ? q("left") : t >= q("right") ? q("right") : t, o = e <= q("top") ? q("top") : e >= q("bottom") ? q("bottom") : e, a = l - r.value[P].s_x, i = o - r.value[P].s_y;
      let E = "";
      i > 0 ? E = "bottom" : i < 0 ? E = "top" : a > 2 ? E = "right" : a < -2 && (E = "left"), r.value[P].s_x = l, r.value[P].s_y = o, re(r.value[P]);
      let c = xe(G(r.value.filter((g) => g.move !== !0)), r.value[P], !0);
      if (c.length === 0)
        C.value.s_x = l, C.value.s_y = o;
      else
        switch (E) {
          case "top":
            c = c.filter((n) => n.s_y < C.value.s_y);
            const g = Math.min(...c.map((n) => n.s_y + n.s_height));
            c.forEach((n) => {
              Math.abs(n.s_y + n.s_height - g) < 5 && (n.s_y = g - n.s_height);
            });
            let p = C.value.s_y - o, h = !0, x = [...c];
            const M = (n) => {
              K(G(r.value.filter((u) => u.move !== !0 && u.s_y + u.s_height - n.s_y <= p + 3 && u.s_y + u.s_height - n.s_y >= 0)), n, !0).forEach((u) => {
                u.s_y + u.s_height !== n.s_y && (u.s_y = n.s_y - u.s_height), x.findIndex((y) => y.id === u.id) === -1 && (x.push(u), M(u));
              });
            };
            if (c.forEach((n) => {
              M(n);
            }), x.sort((n, S) => {
              const u = n.s_y, y = S.s_y;
              return u - y;
            }), (x.length === 0 || x.filter((n) => n.s_y === 0).length > 0) && (h = !1), h) {
              let n = 0;
              x.filter((u) => u.s_y === x[0].s_y).forEach((u) => {
                K(G(r.value.filter((m) => m.move !== !0 && m.s_y + m.s_height < u.s_y)), u, !0).forEach((m) => {
                  m.s_y + m.s_height > n && (n = m.s_y + m.s_height);
                });
              }), n = x[0].s_y - n, n < p && (p = n), x.forEach((u) => {
                u.s_y -= p, r.value.filter((y) => y.id === u.id)[0].s_y = u.s_y;
              }), C.value.s_x = l, C.value.s_y = r.value.filter((u) => u.id === x[x.length - 1].id)[0].s_y + r.value.filter((u) => u.id === x[x.length - 1].id)[0].s_height;
            } else {
              let n = 0;
              c.forEach((y) => {
                const m = K(r.value.filter((H) => H.move !== !0), y, !0).filter((H) => H.s_y > y.s_y + y.s_height);
                m.length > 0 && (n = Math.min(...m.map((H) => H.s_y)));
              });
              const S = n === 0 ? 0 : n - C.value.s_height - (Math.max(...c.map((y) => y.s_y + y.s_height)) - Math.min(...c.map((y) => y.s_y))), u = S === 0 ? o + C.value.s_height - Math.min(...c.map((y) => y.s_y)) : n - Math.min(...c.map((y) => y.s_y)) - (Math.max(...c.map((y) => y.s_y + y.s_height)) - Math.min(...c.map((y) => y.s_y)));
              (S === 0 || o <= S) && (c.filter((y) => y.s_y < C.value.s_y).forEach((y) => {
                y.s_y += u, r.value.filter((m) => m.id === y.id)[0].s_y = y.s_y;
              }), C.value.s_x = l, C.value.s_y = o, Q(r.value, (y, m) => y.filter((H) => H.move !== !0 && H.id !== m.id), !0));
            }
            break;
          case "bottom":
            let k = 0;
            c.forEach((n) => {
              const S = K(r.value.filter((u) => u.move !== !0), n, !0).filter((u) => u.s_y + u.s_height < n.s_y);
              S.length > 0 && (k = Math.max(...S.map((u) => u.s_y + u.s_height)));
            });
            const he = k + (Math.max(...c.map((n) => n.s_height + n.s_y)) - Math.min(...c.map((n) => n.s_y))), Ge = Math.min(...c.map((n) => n.s_y)) - k;
            o >= he && (c.filter((n) => n.s_y > C.value.s_y).forEach((n) => {
              n.s_y -= Ge, r.value.filter((u) => u.id === n.id)[0].s_y = n.s_y;
              const S = xe(r.value.filter((u) => u.move !== !0 && u.id !== n.id), n, !0);
              S.length > 0 && (n.s_y = Math.max(...S.map((u) => u.s_y + u.s_height)), r.value.filter((u) => u.id === n.id)[0].s_y = n.s_y);
            }), C.value.s_x = l, C.value.s_y = he, Q(r.value, (n, S) => n.filter((u) => u.move !== !0 && u.id !== S.id), !0));
            break;
          case "left":
          case "right":
            c.sort((n, S) => {
              const u = n.s_y, y = S.s_y;
              return u - y;
            });
            let Ce = !0;
            for (let n = 0; n < c.length; n++) {
              if (Ce) {
                const S = G(r.value);
                for (let u = 0; u <= n; u++) {
                  let y = null;
                  const m = K(S.filter((H) => H.move !== !0 && H.s_y < c[u].s_y), c[u], !0);
                  if (m.length === 0 ? y = 0 : y = Math.max(...m.map((H) => H.s_y + H.s_height)), u === n) {
                    if (c[u].s_y - (c[u].s_y + c[u].s_height - o) < y) {
                      Ce = !1;
                      break;
                    }
                  } else if (c[u].s_y - c[n].s_height < y) {
                    Ce = !1;
                    break;
                  } else
                    S.filter((H) => H.id === c[u].id)[0].s_y -= c[n].s_height;
                }
              }
              if (Ce) {
                c[n].s_y -= c[n].s_y + c[n].s_height - o, r.value.filter((S) => S.id === c[n].id)[0].s_y = c[n].s_y;
                for (let S = n; S > 0; S--)
                  c[n - 1].s_y -= c[n].s_height, r.value.filter((u) => u.id === c[n - 1].id)[0].s_y = c[n - 1].s_y;
              } else
                c.filter((S) => S.id === c[n].id).forEach((S) => {
                  S.s_y += r.value[P].s_y + r.value[P].s_height - S.s_y, r.value.filter((u) => u.id === S.id)[0].s_y = S.s_y, Q([S], (u, y) => u.filter((m) => m.move !== !0 && m.id !== y.id), !0);
                });
            }
            C.value.s_x = l;
            break;
        }
      r.value.forEach((g) => {
        We(g);
      }), $(!1), O("dragIng", W(r.value[P]));
    }, Ne = () => {
      window.removeEventListener("mousemove", Be), window.removeEventListener("mouseup", Ne), delete r.value[P].move, r.value[P].s_x = C.value.s_x, r.value[P].s_y = C.value.s_y, re(null), r.value.forEach((s) => {
        We(s);
      }), $(), O("dragEnd", W(r.value[P])), P = null;
    }, q = (s) => {
      switch (s) {
        case "top":
          return 0;
        case "right":
          return F - r.value[P].s_width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let v = null, He = "", be = 0, Ee = 0, Z = 0, j = 0, ee = 0, te = 0, ie = 0, Se = 0, ne = 0, De = 0;
    const U = (s, t, e) => {
      _e(), v = t, O("resizeStart", W(v)), He = e, be = s.clientX, Ee = s.clientY, Z = t.s_width, j = t.s_height, ee = t.s_y, te = t.s_x, v.drag = !0, re(v);
      const l = r.value.filter((g) => g.static === !0 && (g.s_x < t.s_x ? g.s_x + g.s_width >= t.s_x : g.s_x <= t.s_x + t.s_width)), o = r.value.filter((g) => g.static === !0 && (g.s_y < t.s_y ? g.s_y + g.s_height >= t.s_y : g.s_y <= t.s_y + t.s_height)), a = l.filter((g) => g.s_y + g.s_height <= t.s_y).map((g) => g.s_y + g.s_height);
      a.length > 0 ? ie = Math.max(...a) : ie = 0;
      const i = l.filter((g) => g.s_y >= t.s_y + t.s_height).map((g) => g.s_y);
      i.length > 0 ? Se = Math.min(...i) : Se = 0;
      const E = o.filter((g) => g.s_x + g.s_width <= t.s_x).map((g) => g.s_x + g.s_width);
      E.length > 0 ? ne = Math.max(...E) : ne = 0;
      const c = o.filter((g) => g.s_x >= t.s_x + t.s_width).map((g) => g.s_x);
      c.length > 0 ? De = Math.min(...c) : De = 0, window.addEventListener("mousemove", Ke), window.addEventListener("mouseup", Fe);
    }, Ke = (s) => {
      const t = Z + (s.clientX - be), e = j + (s.clientY - Ee), l = Z - (s.clientX - be), o = j - (s.clientY - Ee), a = ee + (s.clientY - Ee), i = te + (s.clientX - be), E = getComputedStyle(Y.value), c = parseInt(E.getPropertyValue("--com-item-border-width").trim()), g = parseInt(E.getPropertyValue("--group-tit-height").trim()), p = () => {
        if (v.isGroup === !0) {
          const x = v.s_width - 2 * c, M = v.s_height - 2 * c - (v.groupTit ? g : 0);
          v.groupData.forEach((k) => {
            k.s_width = x * k.groupW, k.s_x = x * k.groupX, k.s_height = M * k.groupH, k.s_y = M * k.groupY;
          });
        }
      };
      switch (He) {
        case "top-left":
          v.s_height = o < d.itemMinHeight ? d.itemMinHeight : o > D("top") ? D("top") : o, v.s_y = o < d.itemMinHeight ? ee + j - d.itemMinHeight : o > D("top") ? ie : a, v.s_width = l < d.itemMinWidth ? d.itemMinWidth : l > D("left") ? D("left") : l, v.s_x = l < d.itemMinWidth ? te + Z - d.itemMinWidth : l > D("left") ? ne : i, p();
          break;
        case "top":
          v.s_height = o < d.itemMinHeight ? d.itemMinHeight : o > D("top") ? D("top") : o, v.s_y = o < d.itemMinHeight ? ee + j - d.itemMinHeight : o > D("top") ? ie : a, p();
          break;
        case "top-right":
          v.s_height = o < d.itemMinHeight ? d.itemMinHeight : o > D("top") ? D("top") : o, v.s_y = o < d.itemMinHeight ? ee + j - d.itemMinHeight : o > D("top") ? ie : a, v.s_width = t < d.itemMinWidth ? d.itemMinWidth : t > D("right") ? D("right") : t, p();
          break;
        case "left":
          v.s_width = l < d.itemMinWidth ? d.itemMinWidth : l > D("left") ? D("left") : l, v.s_x = l < d.itemMinWidth ? te + Z - d.itemMinWidth : l > D("left") ? ne : i, p();
          break;
        case "right":
          v.s_width = t < d.itemMinWidth ? d.itemMinWidth : t > D("right") ? D("right") : t, p();
          break;
        case "bottom-left":
          v.s_height = e < d.itemMinHeight ? d.itemMinHeight : e > D("bottom") ? D("bottom") : e, v.s_width = l < d.itemMinWidth ? d.itemMinWidth : l > D("left") ? D("left") : l, v.s_x = l < d.itemMinWidth ? te + Z - d.itemMinWidth : l > D("left") ? ne : i, p();
          break;
        case "bottom":
          v.s_height = e < d.itemMinHeight ? d.itemMinHeight : e > D("bottom") ? D("bottom") : e, p();
          break;
        case "bottom-right":
          v.s_height = e < d.itemMinHeight ? d.itemMinHeight : e > D("bottom") ? D("bottom") : e, v.s_width = t < d.itemMinWidth ? d.itemMinWidth : t > D("right") ? D("right") : t, p();
          break;
      }
      ut(v), re(v);
      let h = xe(G(r.value.filter((x) => x.drag !== !0)), v, !0);
      if (h.length > 0) {
        h.sort((x, M) => {
          const k = x.s_y, he = M.s_y;
          return k - he;
        });
        for (let x = 0; x < h.length; x++)
          h.filter((M) => M.id === h[x].id).forEach((M) => {
            M.s_y += v.s_y + v.s_height - M.s_y, r.value.filter((k) => k.id === M.id)[0].s_y = M.s_y, Q([M], (k, he) => k.filter((Ge) => Ge.drag !== !0 && Ge.id !== he.id), !0);
          });
      }
      r.value.forEach((x) => {
        We(x);
      }), $(!1), O("resizeIng", W(v));
    }, Fe = (s) => {
      delete v.drag, He = "", re(null), window.removeEventListener("mousemove", Ke), window.removeEventListener("mouseup", Fe), $(), O("resizeEnd", W(v)), v = null;
    }, D = (s) => {
      switch (s) {
        case "top":
          return ee + j - ie;
        case "left":
          return te + Z - ne;
        case "right":
          return (De > 0 ? De : F) - te;
        case "bottom":
          return Se > 0 ? Se - ee : 999999999;
      }
    }, $ = (s = !0) => {
      s === !0 && (Q(r.value, (e, l) => e.filter((o) => o.id !== l.id)), qe(), r.value.forEach((e) => {
        at(e);
      }), pt());
      const t = r.value.map((e) => e.y + e.height);
      t.length > 0 ? ke.value = Math.max(...t) : ke.value = 0;
    };
    st(
      () => d.ySpace,
      () => {
        d.ySpace >= 0 && qe();
      }
    );
    const qe = () => {
      const s = G(r.value).sort((t, e) => {
        const l = t.y, o = e.y;
        return l - o;
      });
      for (let t = 0; t < s.length; t++) {
        const e = K(s, s[t]).filter((l) => l.y + l.height <= s[t].y);
        e.length > 0 ? s[t].y = Math.max(...e.map((l) => l.y + l.height)) : s[t].y = 0;
      }
      s.sort((t, e) => {
        const l = t.y, o = e.y;
        return l - o;
      });
      for (let t = 0; t < s.length - 1; t++) {
        const e = [], l = (o) => {
          K(s, o).filter((i) => i.y === o.y + o.height).forEach((i) => {
            e.push(i.id), l(i);
          });
        };
        l(s[t]), e.forEach((o) => {
          s.filter((a) => a.id === o)[0].y += d.ySpace;
        });
      }
      s.forEach((t) => {
        r.value.filter((e) => e.id === t.id)[0].y = t.y;
      }), d.addFirstSpace && r.value.forEach((t) => t.y += d.ySpace);
    }, pt = () => {
      const s = r.value.filter((t) => t.isGroup === !0);
      if (s.length > 0) {
        const t = getComputedStyle(Y.value), e = parseInt(t.getPropertyValue("--setting-icon-group-width").trim());
        s.forEach((l) => {
          l.s_x + l.s_width + e > F ? l.s_x - e < 0 ? l.btnPosition = "center" : l.btnPosition = "left" : l.btnPosition = "right";
        });
      }
    };
    St(() => {
      Ue.observe(Y.value);
    });
    const Ue = new ResizeObserver((s) => {
      _t(F === s[0].contentRect.width ? null : s[0].contentRect.width, Le === s[0].contentRect.height ? null : s[0].contentRect.height);
    });
    let Oe = !1;
    const gt = (s = [], t = null) => {
      r.value = G(s), r.value.filter((e) => e.isGroup === !0).forEach((e) => {
        if (e.groupData.length < 2)
          ve(e.id);
        else {
          const l = Ie(e.groupData, e);
          Pe(l);
        }
      }), Oe = !0, rt(() => {
        const e = Y.value.getBoundingClientRect();
        t != null ? (we(t), Me(e.width / t)) : (we(e.width), Me(1)), r.value.forEach((l) => {
          le(l);
        }), $(), setTimeout(() => {
          Oe = !1;
        }, 500);
      });
    }, ft = (s, t) => {
      t.showSet = !0;
    }, yt = (s, t) => {
      delete t.showSet;
    }, Je = (s, t, e) => {
      const l = t.map((i) => i.y), o = Math.max(...l), a = t.filter((i) => i.y + i.height > o);
      a.sort((i, E) => {
        const c = i.x, g = E.x;
        return c - g;
      });
      for (let i = 0; i < a.length; i++) {
        if (i === 0 && a[i].x >= s.width) {
          s.y = o, s.x = 0;
          break;
        }
        if (a.length > 1 && i !== a.length - 1 && a[i].x + a[i].width + s.width <= a[i + 1].x) {
          s.y = o, s.x = a[i].x + a[i].width;
          break;
        }
        if (i === a.length - 1 && a[i].x + a[i].width + s.width <= e) {
          s.y = o, s.x = a[i].x + a[i].width;
          break;
        }
      }
      if (s.y == null) {
        s.x = 0;
        const i = t.map((E) => E.y + E.height);
        s.y = Math.max(...i);
      }
    }, ae = (s, t = null, e = !1) => {
      const l = G(s), o = r.value.filter((a) => a.id === t);
      if (l.id || (l.id = (/* @__PURE__ */ new Date()).getTime() + ""), t && o.length !== 1)
        try {
        } catch {
        } finally {
          return;
        }
      if (e !== !0)
        if (delete l.x, delete l.y, t) {
          o[0].groupData.forEach((E) => {
            J(E, o[0]);
          });
          const a = getComputedStyle(Y.value), i = parseInt(a.getPropertyValue("--com-item-border-width").trim());
          Je(l, o[0].groupData, o[0].width - 2 * i);
        } else
          r.value.length === 0 ? (l.x = 0, l.y = 0) : Je(l, r.value, oe || F);
      if (t) {
        o[0].groupData.push(l);
        const a = Ie(o[0].groupData, o[0]);
        Pe(a), Q([a], (i, E) => i.filter((c) => c.id !== E.id));
      } else
        r.value.length === 0 && we(F), le(l), r.value.push(l);
      $();
    }, ze = (s, t = null, e = null) => {
      let l = null;
      const o = r.value.filter((a) => a.id === t);
      if (t ? o.length === 1 && (l = G(o[0].groupData.filter((a) => a.id === s)[0])) : l = G(r.value.filter((a) => a.id === s)[0]), l)
        return l.id = e || (/* @__PURE__ */ new Date()).getTime() + "", t ? (J(l, o[0]), ae(l, t)) : ae(l), W(t ? r.value.filter((a) => a.id === t)[0].groupData.filter((a) => a.id === l.id)[0] : r.value.filter((a) => a.id === l.id)[0]);
      try {
      } catch {
      } finally {
        return null;
      }
    }, ue = (s, t = null) => {
      let e = -1;
      const l = r.value.filter((o) => o.id === t);
      if (t ? l.length === 1 && (e = l[0].groupData.findIndex((o) => o.id === s)) : e = r.value.findIndex((o) => o.id === s), e !== -1) {
        if (t)
          if (l[0].groupData.splice(e, 1), l[0].groupData.length === 1)
            ve(t);
          else {
            l[0].groupData.forEach((a) => {
              J(a, l[0]);
            });
            const o = Ie(l[0].groupData, l[0]);
            Pe(o);
          }
        else
          r.value.splice(e, 1), r.value.length === 0 && (we(null), Me(1));
        $();
      } else
        try {
        } catch {
        }
    }, Pe = (s) => {
      if (s.id) {
        const t = G(s);
        delete t.showPop, delete t.showSet, delete t.btnPosition, t.groupData && t.groupData.forEach((o) => {
          delete o.showPop, delete o.showSet;
        });
        let e = -1;
        const l = r.value.filter((o) => o.id === t.inGroupId);
        if (t.inGroupId ? l.length === 1 && (e = l[0].groupData.findIndex((o) => o.id === t.id)) : e = r.value.findIndex((o) => o.id === t.id), e !== -1)
          t.inGroupId ? (l[0].groupData[e] = t, le(l[0])) : (r.value[e] = t, le(r.value[e])), $();
        else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, _t = (s, t) => {
      s !== null && (F = s, Oe || (Me(oe && F ? s / oe : 1), r.value.forEach((e) => {
        le(e);
      }), $())), t !== null && (Le = t);
    }, Qe = (s) => {
      s.showPop || (r.value.forEach((t) => {
        delete t.showPop, t.groupData && t.groupData.forEach((e) => {
          delete e.showPop;
        });
      }), O("openSetMenu", W(s)), s.showPop = !0, window.addEventListener("click", _e));
    }, _e = () => {
      r.value.forEach((s) => {
        delete s.showPop, s.groupData && s.groupData.forEach((t) => {
          delete t.showPop;
        });
      }), window.removeEventListener("click", _e);
    }, A = X(!1), Ze = (s) => {
      const t = r.value.findIndex((e) => e.id === s);
      if (t !== -1)
        r.value[t].checked = !0, r.value[t].checkDis = !0, A.value = !0, O("showGroup", A.value);
      else
        try {
        } catch {
        }
    }, Te = () => {
      A.value = !1, r.value.forEach((s) => {
        delete s.checked, delete s.checkDis, s.groupData && s.groupData.forEach((t) => {
          delete t.checked, delete t.checkDis;
        });
      }), O("showGroup", A.value);
    }, vt = (s) => {
      s.checked = !s.checked, O("updateChecked", r.value.filter((t) => t.checked).length);
    }, Ie = (s, t) => {
      const e = G(s), l = G(t);
      e.sort((h, x) => {
        const M = h.x, k = x.x;
        return M - k;
      });
      for (let h = 0; h < e.length - 1; h++) {
        if (h === 0 && e[h].x > 0) {
          const x = e[h].x;
          for (let M = h; M < e.length; M++)
            e[M].x -= x;
        }
        if (e[h + 1].x > e[h].x + e[h].width) {
          const x = G(e.slice(0, h + 1));
          if (e[h + 1].x > Math.max(...x.map((M) => M.x + M.width))) {
            const M = e[h + 1].x - Math.max(...x.map((k) => k.x + k.width));
            for (let k = h + 1; k < e.length; k++)
              e[k].x -= M;
          }
        }
      }
      e.sort((h, x) => {
        const M = h.y, k = x.y;
        return M - k;
      });
      for (let h = 0; h < e.length - 1; h++) {
        if (h === 0 && e[h].y > 0) {
          const x = e[h].y;
          for (let M = h; M < e.length; M++)
            e[M].y -= x;
        }
        if (e[h + 1].y > e[h].y + e[h].height) {
          const x = G(e.slice(0, h + 1));
          if (e[h + 1].y > Math.max(...x.map((M) => M.y + M.height))) {
            const M = e[h + 1].y - Math.max(...x.map((k) => k.y + k.height));
            for (let k = h + 1; k < e.length; k++)
              e[k].y -= M;
          }
        }
      }
      const o = e.map((h) => h.x + h.width), a = Math.max(...o), i = e.map((h) => h.y + h.height), E = Math.max(...i);
      e.forEach((h) => {
        h.inGroupId || (h.inGroupId = l.id), h.groupW = h.width / a, h.groupH = h.height / E, h.groupX = h.x / a, h.groupY = h.y / E, delete h.width, delete h.height, h.isObstacle = h.x + h.width === a && h.y === 0;
      });
      const c = getComputedStyle(Y.value), g = parseInt(c.getPropertyValue("--com-item-border-width").trim()), p = parseInt(c.getPropertyValue("--group-tit-height").trim());
      return l.width = a + 2 * g, l.height = E + 2 * g + (l.groupTit ? p : 0), l.groupData = [...e], l;
    }, J = (s, t) => {
      const e = getComputedStyle(Y.value), l = parseInt(e.getPropertyValue("--com-item-border-width").trim()), o = parseInt(e.getPropertyValue("--group-tit-height").trim());
      s.width = (t.width - 2 * l) * s.groupW, s.height = (t.height - 2 * l - (t.groupTit ? o : 0)) * s.groupH;
    }, xt = () => {
      rt(() => {
        r.value.filter((s) => s.isGroup === !0).forEach((s) => {
          le(s);
        });
      });
    }, wt = () => {
      const s = r.value.filter((t) => t.checked);
      if (s.length > 1) {
        const t = {
          id: (/* @__PURE__ */ new Date()).getTime() + "G",
          isGroup: !0,
          groupTit: ""
        }, e = Ie(s, t);
        return e.groupData.forEach((l) => {
          ue(l.id);
        }), ae(e), Te(), W(r.value.filter((l) => l.id === e.id)[0]);
      } else
        return Te(), null;
    }, je = (s, t) => {
      const e = r.value.filter((l) => l.id === t)[0];
      if (e) {
        const l = e.groupData.filter((o) => o.id === s)[0];
        if (l)
          return e.groupData.length === 2 ? ve(t) : (J(l, e), delete l.inGroupId, delete l.groupW, delete l.groupH, delete l.groupX, delete l.groupY, delete l.isObstacle, ue(l.id, e.id), ae(l), [W(r.value.filter((o) => o.id === s)[0])]);
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
    }, ve = (s) => {
      const t = r.value.filter((e) => e.id === s)[0];
      if (t) {
        let e = [];
        t.groupData.forEach((o) => {
          J(o, t), o.x += t.x, o.y += t.y, delete o.inGroupId, delete o.groupW, delete o.groupH, delete t.groupX, delete t.groupY, delete t.isObstacle, e.push(o.id), ae(o, null, !0);
        }), ue(t.id);
        let l = [];
        return e.forEach((o) => {
          l.push(G(r.value.filter((a) => a.id === o)[0]));
        }), l;
      } else
        try {
        } catch {
        } finally {
          return [];
        }
    }, Mt = (s = "", t) => {
      const e = r.value.filter((l) => l.id === t)[0];
      if (e) {
        if (!e.groupTit || !s) {
          const l = getComputedStyle(Y.value), o = parseInt(l.getPropertyValue("--group-tit-height").trim());
          e.groupTit && !s && (e.height -= o, e.s_height -= o), !e.groupTit && s && (e.height += o, e.s_height += o);
        }
        e.groupTit = s, Q([e], (l, o) => l.filter((a) => a.id !== o.id)), $();
      } else
        try {
        } catch {
        }
    }, kt = () => new Promise((s, t) => {
      r.value.forEach((l) => {
        delete l.showPop, delete l.showSet, l.groupData && l.groupData.forEach((o) => {
          delete o.showPop, delete o.showSet;
        });
      });
      const e = G(r.value);
      e.forEach((l) => {
        l.isGroup === !0 && l.groupData.forEach((o) => {
          J(o, l), delete o.s_width, delete o.s_height, delete o.s_x, delete o.s_y;
        }), delete l.btnPosition, delete l.s_width, delete l.s_height, delete l.s_x, delete l.s_y;
      }), s({ data: e, width: oe });
    });
    return Dt(() => {
      Ue.unobserve(Y.value), window.removeEventListener("click", _e);
    }), B({ init: gt, addItem: ae, copyItem: ze, deleteItem: ue, updateItem: Pe, openGroup: Ze, closeGroup: Te, changeGroupBorder: xt, addGroup: wt, removeGroupItem: je, removeGroup: ve, changeGroupTit: Mt, getData: kt }), (s, t) => (w(), b("div", {
      class: "vue-drag-component-plus",
      style: L({ "--css-scle": f(R) }),
      ref_key: "pageRef",
      ref: Y
    }, [
      z("div", {
        class: "content-box",
        ref_key: "boxRef",
        ref: ht
      }, [
        (w(!0), b(ce, null, Re(f(r), (e, l) => (w(), b("div", {
          class: se(["com-item", _.seeModel || f(A) || e.static === !0 || e.dragable === !1 ? "" : "can-drag", e.move ? "is-move" : "", e.drag ? "is-drag" : "", e.showPop ? "on-top" : "", _.seeModel ? "no-hover" : ""]),
          style: L({
            width: e.s_width + "px",
            height: e.s_height + "px",
            top: e.s_y + "px",
            left: e.s_x + "px"
          }),
          key: l,
          onMousedown: T((o) => _.seeModel || f(A) || e.static === !0 || e.dragable === !1 ? null : dt(o, l), ["prevent"]),
          onMouseenter: (o) => _.seeModel || f(A) || f(P) || f(v) || !e.isGroup ? null : ft(o, e),
          onMouseleave: (o) => _.seeModel || f(A) || f(P) || f(v) || !e.isGroup ? null : yt(o, e)
        }, [
          z("div", Gt, [
            e.isGroup ? (w(), b(ce, { key: 0 }, [
              e.groupTit ? (w(), b("div", {
                key: 0,
                class: "group-item-tit",
                title: e.groupTit
              }, V(e.groupTit), 9, Ct)) : I("", !0),
              z("div", {
                class: se(["group-item-content", e.groupTit ? "" : "full"])
              }, [
                (w(!0), b(ce, null, Re(e.groupData, (o, a) => (w(), b("div", {
                  class: se(["com-item-box-child", o.isObstacle ? "else" : ""]),
                  style: L({
                    width: o.s_width + "px",
                    height: o.s_height + "px",
                    top: o.s_y + "px",
                    left: o.s_x + "px"
                  }),
                  key: a
                }, [
                  z("div", mt, [
                    de(s.$slots, "item", {
                      data: W(o)
                    }, () => [
                      z("p", null, V(Math.round(o.s_width * 100) / 100) + "," + V(Math.round(o.s_height * 100) / 100), 1),
                      z("p", null, V(Math.round(o.s_x * 100) / 100) + "," + V(Math.round(o.s_y * 100) / 100), 1)
                    ])
                  ]),
                  !_.seeModel && !f(A) && f(P) === null && f(v) === null ? (w(), b("div", {
                    key: 0,
                    class: "setting-box",
                    style: L({ display: o.showPop ? "flex" : "none" }),
                    onMousedown: T((i) => null, ["prevent", "stop"])
                  }, [
                    ot(it, {
                      iconObj: _.settingIcon,
                      onClick: T((i) => Qe(o), ["prevent", "stop"])
                    }, null, 8, ["iconObj", "onClick"])
                  ], 36)) : I("", !0),
                  o.showPop ? (w(), b("div", {
                    key: 1,
                    class: "setting-box-pop",
                    onMousedown: T((i) => null, ["prevent", "stop"])
                  }, [
                    de(s.$slots, "setPopNormal", {
                      data: W(o)
                    }, () => [
                      z("div", {
                        class: "setting-box-pop-item",
                        onClick: (i) => je(o.id, o.inGroupId)
                      }, "移出组合", 8, Wt),
                      z("div", {
                        class: "setting-box-pop-item",
                        onClick: (i) => ze(o.id, o.inGroupId)
                      }, "复制", 8, Ht),
                      z("div", {
                        class: "setting-box-pop-item",
                        onClick: (i) => ue(o.id, o.inGroupId)
                      }, "删除", 8, Ot)
                    ])
                  ], 32)) : I("", !0)
                ], 6))), 128))
              ], 2)
            ], 64)) : (w(), b("div", zt, [
              de(s.$slots, "item", {
                data: W(e)
              }, () => [
                z("p", null, V(Math.round(e.s_width * 100) / 100) + "," + V(Math.round(e.s_height * 100) / 100), 1),
                z("p", null, V(Math.round(e.s_x * 100) / 100) + "," + V(Math.round(e.s_y * 100) / 100), 1)
              ])
            ])),
            !e.isGroup && e.notGroup !== !0 && f(A) ? (w(), b("div", {
              key: 2,
              class: se(["group-checkbox", e.checked ? "is-checked" : "", e.checkDis ? "disabled" : ""]),
              onClick: (o) => e.checkDis ? null : vt(e)
            }, null, 10, Tt)) : I("", !0),
            !_.seeModel && !f(A) && f(P) === null && f(v) === null ? (w(), b("div", {
              key: 3,
              class: se(["setting-box", e.isGroup === !0 ? e.btnPosition === "right" ? "only-g" : e.btnPosition === "left" ? "only-g l" : e.btnPosition === "center" ? "only-g c" : "" : ""]),
              style: L({ display: e.showPop || e.showSet ? "flex" : "none" }),
              onMousedown: T((o) => null, ["prevent", "stop"])
            }, [
              ot(it, {
                iconObj: _.settingIcon,
                onClick: T((o) => Qe(e), ["prevent", "stop"])
              }, null, 8, ["iconObj", "onClick"])
            ], 38)) : I("", !0),
            e.showPop ? (w(), b("div", {
              key: 4,
              class: se(["setting-box-pop", e.isGroup === !0 ? e.btnPosition === "right" ? "special" : e.btnPosition === "left" ? "special l" : e.btnPosition === "center" ? "special c" : "" : ""]),
              onMousedown: T((o) => null, ["prevent", "stop"])
            }, [
              e.isGroup === !0 ? de(s.$slots, "setPopSpecial", {
                key: 0,
                data: W(e)
              }, () => [
                _.hideTit ? I("", !0) : (w(), b("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (o) => O("showTitPop", e.groupTit, e.id)
                }, " 设置组合标题", 8, Yt)),
                z("div", {
                  class: "setting-box-pop-item",
                  onClick: (o) => ve(e.id)
                }, "解除组合", 8, Rt)
              ]) : de(s.$slots, "setPopNormal", {
                key: 1,
                data: W(e)
              }, () => [
                e.notGroup !== !0 ? (w(), b("div", {
                  key: 0,
                  class: "setting-box-pop-item",
                  onClick: (o) => Ze(e.id)
                }, "组合", 8, At)) : I("", !0),
                z("div", {
                  class: "setting-box-pop-item",
                  onClick: (o) => ze(e.id)
                }, "复制", 8, Xt),
                z("div", {
                  class: "setting-box-pop-item",
                  onClick: (o) => ue(e.id)
                }, "删除", 8, Lt)
              ])
            ], 34)) : I("", !0)
          ]),
          !_.seeModel && !f(A) && !e.showPop && !e.move && e.static !== !0 && e.resizable !== !1 ? (w(), b(ce, { key: 0 }, [
            f(N).indexOf("topLeft") !== -1 ? (w(), b("div", {
              key: 0,
              class: "resize-line top-left",
              onMousedown: T((o) => U(o, e, "top-left"), ["prevent", "stop"])
            }, null, 40, $t)) : I("", !0),
            f(N).indexOf("top") !== -1 ? (w(), b("div", {
              key: 1,
              class: "resize-line top",
              onMousedown: T((o) => U(o, e, "top"), ["prevent", "stop"])
            }, null, 40, Vt)) : I("", !0),
            f(N).indexOf("topRight") !== -1 ? (w(), b("div", {
              key: 2,
              class: "resize-line top-right",
              onMousedown: T((o) => U(o, e, "top-right"), ["prevent", "stop"])
            }, null, 40, Bt)) : I("", !0),
            f(N).indexOf("left") !== -1 ? (w(), b("div", {
              key: 3,
              class: "resize-line left",
              onMousedown: T((o) => U(o, e, "left"), ["prevent", "stop"])
            }, null, 40, Nt)) : I("", !0),
            f(N).indexOf("right") !== -1 ? (w(), b("div", {
              key: 4,
              class: "resize-line right",
              onMousedown: T((o) => U(o, e, "right"), ["prevent", "stop"])
            }, null, 40, Kt)) : I("", !0),
            f(N).indexOf("bottomLeft") !== -1 ? (w(), b("div", {
              key: 5,
              class: "resize-line bottom-left",
              onMousedown: T((o) => U(o, e, "bottom-left"), ["prevent", "stop"])
            }, null, 40, Ft)) : I("", !0),
            f(N).indexOf("bottom") !== -1 ? (w(), b("div", {
              key: 6,
              class: "resize-line bottom",
              onMousedown: T((o) => U(o, e, "bottom"), ["prevent", "stop"])
            }, null, 40, qt)) : I("", !0),
            f(N).indexOf("bottomRight") !== -1 ? (w(), b("div", {
              key: 7,
              class: "resize-line bottom-right",
              onMousedown: T((o) => U(o, e, "bottom-right"), ["prevent", "stop"])
            }, null, 40, Ut)) : I("", !0)
          ], 64)) : I("", !0)
        ], 46, It))), 128)),
        (w(!0), b(ce, null, Re(f(r), (e, l) => (w(), b("div", {
          class: se(["shadow-bg", e.move ? "is-move" : ""]),
          style: L({
            width: e.s_width + "px",
            height: e.s_height + "px",
            top: e.s_y + "px",
            left: e.s_x + "px"
          }),
          key: l
        }, null, 6))), 128)),
        f(P) !== null ? (w(), b("div", {
          key: 0,
          class: "drag-bg",
          style: L({
            width: f(C).s_width + "px",
            height: f(C).s_height + "px",
            top: f(C).s_y + "px",
            left: f(C).s_x + "px"
          })
        }, null, 4)) : I("", !0),
        z("div", {
          class: "height-bg",
          style: L({ height: (f(ke) > 0 ? +(f(ke) * f(R) + (_.seeModel ? _.seeModelMinBg : 220)) : 0) + "px" })
        }, null, 4),
        _.hideAuxiliary ? I("", !0) : (w(), b(ce, { key: 1 }, [
          f(pe) !== null ? (w(), b("div", {
            key: 0,
            class: "auxiliary-line hor",
            style: L({ top: f(pe) + "px", left: "0px" })
          }, null, 4)) : I("", !0),
          f(ge) !== null ? (w(), b("div", {
            key: 1,
            class: "auxiliary-line hor",
            style: L({ top: f(ge) + "px", left: "0px" })
          }, null, 4)) : I("", !0),
          f(fe) !== null ? (w(), b("div", {
            key: 2,
            class: "auxiliary-line",
            style: L({ top: "0px", left: f(fe) + "px" })
          }, null, 4)) : I("", !0),
          f(ye) !== null ? (w(), b("div", {
            key: 3,
            class: "auxiliary-line",
            style: L({ top: "0px", left: f(ye) + "px" })
          }, null, 4)) : I("", !0)
        ], 64)),
        f(r).length === 0 ? (w(), b("div", Jt, [
          de(s.$slots, "empty", {}, () => [
            t[0] || (t[0] = Pt(" 暂无数据 "))
          ])
        ])) : I("", !0)
      ], 512)
    ], 4));
  }
}, Zt = [Qt], jt = {
  install(_) {
    Zt.forEach((B) => {
      _.component("vueDragComponentPlus", B);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(jt);
export {
  jt as default
};
