import { resolveComponent as Ht, openBlock as w, createBlock as st, resolveDynamicComponent as wt, normalizeProps as bt, mergeProps as Ye, withCtx as Rt, createElementBlock as k, toDisplayString as Q, ref as R, watch as rt, onMounted as Nt, onBeforeUnmount as Yt, normalizeStyle as q, unref as c, createElementVNode as N, Fragment as ke, renderList as nt, normalizeClass as he, withModifiers as m, createCommentVNode as A, renderSlot as Me, createVNode as kt, createTextVNode as Wt, nextTick as Mt, isVNode as St } from "vue";
const Et = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(u) {
    return (y, B) => {
      const S = Ht("el-icon");
      return u.iconObj.type === "custom" ? (w(), st(wt(u.iconObj.icon), bt(Ye({ key: 0 }, u.iconObj.attrs)), null, 16)) : u.iconObj.type === "el" ? (w(), st(S, bt(Ye({ key: 1 }, u.iconObj.attrs)), {
        default: Rt(() => [
          (w(), st(wt(u.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : u.iconObj.type === "iconfont" ? (w(), k("i", Ye({
        key: 2,
        class: ["icon iconfont", "icon-" + u.iconObj.icon]
      }, u.iconObj.attrs), null, 16)) : (w(), k("i", Ye({
        key: 3,
        class: u.iconObj.type
      }, u.iconObj.attrs), Q(u.iconObj.icon), 17));
    };
  }
}, Pt = (u, y = { x: "x", y: "y", width: "width", height: "height" }) => {
  let B = null;
  return u instanceof Array ? (B = [], u.forEach((S) => {
    typeof S[y.x] == "number" && typeof S[y.y] == "number" && typeof S[y.width] == "number" && typeof S[y.height] == "number" && B.push({
      x: S[y.x],
      y: S[y.y],
      width: S[y.width],
      height: S[y.height]
    });
  })) : typeof u[y.width] == "number" && typeof u[y.height] == "number" && (B = {
    width: u[y.width],
    height: u[y.height]
  }), B;
}, Vt = (u) => {
  const y = /* @__PURE__ */ new Map();
  return u.forEach((B) => {
    y.has(B.x) || y.set(B.x, []), y.get(B.x).push(B);
  }), y;
}, Kt = (u, y) => u.filter((B) => B.x <= y.x && B.x + B.width > y.x || B.x > y.x && B.x < y.x + y.width), mt = (u, y, B, S = !1) => {
  if (y.width > B)
    return null;
  let b = [];
  if (u.length === 0) {
    const L = { x: 0, y: 0 };
    return S ? [L] : L;
  }
  const v = Math.max(...u.map((L) => L.y + L.height)), Se = /* @__PURE__ */ new Set([0]);
  u.forEach((L) => {
    Se.add(L.y), Se.add(L.y + L.height);
  });
  const We = Array.from(Se).sort((L, O) => L - O);
  for (const L of We) {
    const O = L + y.height;
    if (O > v)
      continue;
    const $ = u.filter((E) => E.y < O && E.y + E.height > L);
    if ($.length === 0) {
      const E = { x: 0, y: L };
      if (!S)
        return E;
      b.push(E);
      continue;
    }
    const W = $.map((E) => [E.x, E.x + E.width]);
    W.sort((E, le) => E[0] - le[0]);
    const Y = [];
    let [z, r] = W[0];
    for (let E = 1; E < W.length; E++) {
      const [le, se] = W[E];
      le <= r ? r = Math.max(r, se) : (Y.push([z, r]), [z, r] = [le, se]);
    }
    if (Y.push([z, r]), Y[0][0] >= y.width) {
      const E = { x: 0, y: L };
      if (!S)
        return E;
      b.push(E);
    }
    let ee = Y[0][1];
    for (let E = 1; E < Y.length; E++) {
      if (Y[E][0] - ee >= y.width) {
        const se = { x: ee, y: L };
        if (!S)
          return se;
        b.push(se);
      }
      ee = Math.max(ee, Y[E][1]);
    }
    if (B - ee >= y.width) {
      const E = { x: ee, y: L };
      if (!S)
        return E;
      b.push(E);
    }
  }
  return S ? (Vt(b).forEach((O, $) => {
    if (O.length > 1)
      for (let W = 0; W < O.length - 1; W++) {
        let Y = { ...y, ...O[W] };
        Kt(u.filter((z) => z.y >= Y.y + Y.height && z.y <= O[W + 1].y), Y).length === 0 && (b = b.filter((z) => !(z.x === O[W + 1].x && z.y === O[W + 1].y)), O.splice(W, 1), W--);
      }
  }), b.sort((O, $) => O.y !== $.y ? O.y - $.y : O.x - $.x), b.length === 0 ? null : b) : null;
};
const Ft = { class: "content-box" }, qt = ["onMousedown", "onMouseenter", "onMouseleave"], Ut = { class: "com-item-box" }, Jt = ["title"], Qt = { class: "com-item-box-content" }, Zt = ["onClick"], jt = ["onClick"], eo = ["onClick"], to = {
  key: 1,
  class: "com-item-box-content"
}, oo = ["onClick"], lo = ["onClick"], so = ["onClick"], ro = ["onClick"], no = ["onClick"], io = ["onClick"], ao = ["onClick"], uo = ["onClick"], co = ["onClick"], ho = ["onClick"], fo = ["onMousedown"], po = ["onMousedown"], go = ["onMousedown"], yo = ["onMousedown"], vo = ["onMousedown"], _o = ["onMousedown"], xo = ["onMousedown"], wo = ["onMousedown"], bo = {
  key: 2,
  class: "com-empty"
}, ko = {
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
      validator(u, y) {
        return u >= 0;
      }
    },
    // 组件项最小宽度（原始尺寸）
    itemMinWidth: {
      type: Number,
      default: 50,
      validator(u, y) {
        return u >= 20;
      }
    },
    // 组件项最小高度（原始尺寸）
    itemMinHeight: {
      type: Number,
      default: 50,
      validator(u, y) {
        return u >= 20;
      }
    },
    // 纵向相邻元素的自动间距（原始尺寸）
    xSpace: {
      type: Number,
      default: 10,
      validator(u, y) {
        return u >= 0;
      }
    },
    // 横向相邻元素的自动间距（原始尺寸）
    ySpace: {
      type: Number,
      default: null,
      validator(u, y) {
        return u >= 0;
      }
    },
    // 高度缩放折扣率（让高度没那么大变化）
    hScaleDiscount: {
      type: Number,
      default: 0.2,
      validator(u, y) {
        return u > 0;
      }
    },
    // 预览模式组件内css缩放比例最小值
    cssScaleMin: {
      type: Number,
      default: 0.75,
      validator(u, y) {
        return u > 0;
      }
    },
    // 预览模式组件内css缩放比例最大值
    cssScaleMax: {
      type: Number,
      default: 1.2,
      validator(u, y) {
        return u > 0 && u >= y.cssScaleMin;
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
      default: (u) => u
    },
    // 解散/移出组合前数据处理
    beforeRemoveGroup: {
      type: Function,
      default: (u) => u
    },
    // 拖拽事件触发延迟时间（防止不小心单击了一下而开始拖动）
    dragDelayTime: {
      type: Number,
      default: 200,
      validator(u, y) {
        return u >= 0 && u < 1e3;
      }
    }
  },
  emits: ["baseWidthInit", "changeScale", "changeCssScale", "changeTrimModel", "dragStart", "dragIng", "dragEnd", "resizeStart", "resizeIng", "resizeEnd", "showGroup", "openSetMenu", "updateChecked", "showTitPop", "domStart", "domReady"],
  setup(u, { expose: y, emit: B }) {
    const S = B, b = u, v = (t) => {
      if (typeof t == "object" && !St(t) && t !== null && !(t instanceof Date)) {
        let o = t instanceof Array ? [] : {};
        for (let e in t)
          o[e] = typeof t[e] == "object" && !St(t[e]) && t[e] !== null && !(t[e] instanceof Date) ? v(t[e]) : t[e];
        return o;
      } else
        return t;
    }, Se = (t, o) => {
      let e = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
      for (; t && !e.call(t, o); )
        t = t.parentElement;
      return t;
    }, We = (t, o) => t.classList ? t.classList.contains(o) : new RegExp("\\s" + o + "\\s").test(" " + t.className + " "), L = (t, o) => {
      let e = [], s = (l) => {
        l.forEach((n) => {
          We(n, o) && e.push(n), n.childNodes && n.childNodes.length > 0 && s(n.childNodes);
        });
      };
      return s(t.childNodes), e;
    }, O = (t, o, e = !1) => W($(t, o, e), o, e), $ = (t, o, e = !1) => t.filter((s) => s[e ? "s_x" : "x"] <= o[e ? "s_x" : "x"] && s[e ? "s_x" : "x"] + s[e ? "s_width" : "width"] > o[e ? "s_x" : "x"] || s[e ? "s_x" : "x"] > o[e ? "s_x" : "x"] && s[e ? "s_x" : "x"] < o[e ? "s_x" : "x"] + o[e ? "s_width" : "width"]), W = (t, o, e = !1) => t.filter((s) => s[e ? "s_y" : "y"] <= o[e ? "s_y" : "y"] && s[e ? "s_y" : "y"] + s[e ? "s_height" : "height"] > o[e ? "s_y" : "y"] || s[e ? "s_y" : "y"] > o[e ? "s_y" : "y"] && s[e ? "s_y" : "y"] < o[e ? "s_y" : "y"] + o[e ? "s_height" : "height"]), Y = (t, o = (s) => s, e = !1) => {
      const s = v(r.value), l = v(t);
      l.sort((p, f) => {
        const P = p[e ? "s_y" : "y"], H = f[e ? "s_y" : "y"];
        if (P !== H)
          return P - H;
        {
          const a = p[e ? "s_x" : "x"], x = f[e ? "s_x" : "x"];
          return a - x;
        }
      });
      const n = (p) => {
        O(o(s, p), p, e).forEach((P) => {
          P[e ? "s_y" : "y"] = p[e ? "s_y" : "y"] + p[e ? "s_height" : "height"], n(P);
        });
      };
      l.forEach((p) => n(s.filter((f) => f.id === p.id)[0])), s.forEach((p) => {
        r.value.filter((f) => f.id === p.id)[0][e ? "s_y" : "y"] = p[e ? "s_y" : "y"];
      });
    }, z = (t) => {
      const o = v(t);
      return delete o.showPop, delete o.showSet, o.groupData ? o.groupData.forEach((e) => {
        delete e.showPop, delete e.showSet, ce(e, o), delete e.s_width, delete e.s_height, delete e.s_x, delete e.s_y;
      }) : o.inGroupId && (delete o.showPop, delete o.showSet, ce(o, r.value.filter((e) => e.id === o.inGroupId)[0])), delete o.btnPosition, delete o.s_width, delete o.s_height, delete o.s_x, delete o.s_y, delete o.syCopy, o;
    }, r = R([]), ee = () => {
      b.insertResizeKeys.forEach((t) => {
        b.excludeResizeKeys.indexOf(t) === -1 && E.value.push(t);
      });
    };
    rt(
      () => [b.insertResizeKeys, b.excludeResizeKeys],
      () => {
        ee();
      }
    );
    const E = R([]);
    ee();
    const le = () => {
      r.value.length > 0 && r.value.filter((t) => t.isGroup === !0).forEach((t) => {
        de(t);
      });
    }, se = () => {
      b.xSpace !== null && b.xSpace !== void 0 ? V.value = b.xSpace / 2 : V.value = 10 / 2, b.ySpace !== null && b.ySpace !== void 0 && b.ySpace >= 0 ? re.value = b.ySpace / 2 : re.value = V.value, le();
    };
    rt(
      () => [b.xSpace, b.ySpace],
      () => {
        se();
      }
    );
    const V = R(0), re = R(0);
    se();
    const K = R(null);
    let te = null;
    const Ee = (t) => {
      te = t, S("baseWidthInit", te);
    }, j = R(1), Pe = R(1), ve = (t) => {
      j.value = t, t < b.cssScaleMin ? Pe.value = b.cssScaleMin : t > b.cssScaleMax ? Pe.value = b.cssScaleMax : Pe.value = t, S("changeScale", j.value), S("changeCssScale", b.seeModel ? Pe.value : 1);
    }, U = () => 1 + (j.value - 1) * b.hScaleDiscount;
    rt(
      () => b.seeModel,
      () => {
        ve(j.value);
      }
    );
    const de = (t, o = null) => {
      o ? (t.width = t.width * o, t.height = t.height * o) : (t.s_width = t.width * j.value, t.s_height = t.height * U());
      const e = getComputedStyle(K.value), s = parseInt(e.getPropertyValue("--com-item-border-width").trim()), l = parseInt(e.getPropertyValue("--group-tit-height").trim());
      if (t.isGroup === !0)
        if (o) {
          const n = t.width, p = t.height - (t.groupTit ? l : 0);
          t.groupData.forEach((f) => {
            f.width = n * f.groupW, f.height = p * f.groupH, f.x = n * f.groupX, f.y = p * f.groupY;
          });
        } else {
          const n = t.s_width - 2 * V.value - 2 * s, p = t.s_height - 2 * re.value - 2 * s - (t.groupTit ? l : 0);
          t.groupData.forEach((f) => {
            f.s_width = n * f.groupW, f.s_height = p * f.groupH, f.s_x = n * f.groupX, f.s_y = p * f.groupY;
          });
        }
    }, it = (t, o = null) => {
      o ? (t.s_x = t.x * o, t.s_y = t.y * o) : (t.s_x = t.x * j.value, t.s_y = t.y * U());
    }, Ct = (t) => {
      t.width = t.s_width / j.value, t.height = t.s_height / U();
      const o = getComputedStyle(K.value), e = parseInt(o.getPropertyValue("--group-tit-height").trim());
      if (t.isGroup === !0) {
        const s = t.width, l = t.height - (t.groupTit ? e : 0);
        t.groupData.forEach((n) => {
          n.x = s * n.groupX, n.y = l * n.groupY;
        });
      }
    }, Ce = (t) => {
      t.x = t.s_x / j.value, t.y = t.s_y / U();
    };
    let ne = null, at = null;
    const ie = R(0), De = R(null), Ie = R(null), Ge = R(null), Te = R(null), ze = R(null), Ae = R(null), fe = (t) => {
      const o = v(t);
      if (!b.showAuxiliary || t === null)
        De.value = null, Ie.value = null, Ge.value = null, Te.value = null, ze.value = null, Ae.value = null;
      else {
        const e = getComputedStyle(K.value), s = parseInt(e.getPropertyValue("--auxiliary-width").trim()), l = r.value.filter((i) => i.id !== o.id).map((i) => Math.round(i.s_y)), n = r.value.filter((i) => i.id !== o.id).map((i) => Math.round(i.s_y + i.s_height / 2)), p = r.value.filter((i) => i.id !== o.id).map((i) => Math.round(i.s_y + i.s_height)), f = [...l, ...n, ...p];
        f.sort(), f.filter((i) => i === Math.round(o.s_y)).length > 0 ? De.value = o.s_y : De.value = null, f.filter((i) => i === Math.round(o.s_y + o.s_height / 2)).length > 0 ? Ie.value = o.s_y + o.s_height / 2 : Ie.value = null, f.filter((i) => i === Math.round(o.s_y + o.s_height)).length > 0 ? Ge.value = o.s_y + o.s_height - s : Ge.value = null;
        const P = r.value.filter((i) => i.id !== o.id).map((i) => Math.round(i.s_x)), H = r.value.filter((i) => i.id !== o.id).map((i) => Math.round(i.s_x + i.s_width / 2)), a = r.value.filter((i) => i.id !== o.id).map((i) => Math.round(i.s_x + i.s_width)), x = [...P, ...H, ...a];
        x.sort(), x.filter((i) => i === Math.round(o.s_x)).length > 0 ? Te.value = o.s_x : Te.value = null, x.filter((i) => i === Math.round(o.s_x + o.s_width / 2)).length > 0 ? ze.value = o.s_x + o.s_width / 2 : ze.value = null, x.filter((i) => i === Math.round(o.s_x + o.s_width)).length > 0 ? Ae.value = o.s_x + o.s_width - s : Ae.value = null;
      }
    }, F = R(!1), Ve = (t) => {
      let o = null;
      if (o = r.value.filter((e) => e.id === t)[0], o && o.static !== !0 && o.dragable !== !1)
        F.value = !0, ht(r.value.findIndex((e) => e.id === t)), setTimeout(() => {
          window.addEventListener("click", Oe), window.addEventListener("keydown", Ke);
        }, 50), S("changeTrimModel", F.value, z(r.value.filter((e) => e.id === o.id)[0]));
      else
        try {
        } catch {
        }
    }, Ke = (t) => {
      switch (t.keyCode) {
        case 13:
        case 27:
        case 32:
          Oe();
          break;
        case 37:
          _e("left");
          break;
        case 38:
          _e("top");
          break;
        case 39:
          _e("right");
          break;
        case 40:
          _e("bottom");
          break;
      }
    }, Oe = () => {
      window.removeEventListener("click", Oe), window.removeEventListener("keydown", Ke), Fe(), F.value = !1, S("changeTrimModel", F.value);
    };
    let g = null, ut = null, ct = null;
    const M = R({});
    let me = null, oe = null;
    const ht = (t, o) => {
      if (clearTimeout(me), clearTimeout(oe), Be(), F.value)
        oe = null, g = t, M.value = v(r.value[g]), S("dragStart", z(r.value[g])), r.value[g].move = !0, fe(r.value[g]);
      else {
        const e = Se(t.target, ".com-item");
        e && (oe = setTimeout(() => {
          oe = null, g = o, M.value = v(r.value[g]), S("dragStart", z(r.value[g])), r.value[g].move = !0, fe(r.value[g]), ut = t.clientX - e.offsetLeft, ct = t.clientY - e.offsetTop, window.addEventListener("mousemove", _e);
        }, b.dragDelayTime), window.addEventListener("mouseup", Fe));
      }
    }, _e = (t) => {
      clearTimeout(me), clearTimeout(oe), oe = null;
      let o = null, e = null;
      if (F.value) {
        const H = L(K.value, "i" + r.value[g].id + "d")[0];
        switch (o = H.offsetLeft, e = H.offsetTop, t) {
          case "top":
            e -= 1;
            break;
          case "bottom":
            e += 1;
            break;
          case "left":
            o -= 1;
            break;
          case "right":
            o += 1;
            break;
        }
      } else
        o = t.clientX - ut, e = t.clientY - ct;
      const s = o <= ae("left") ? ae("left") : o >= ae("right") ? ae("right") : o, l = e <= ae("top") ? ae("top") : e >= ae("bottom") ? ae("bottom") : e, n = s - r.value[g].s_x, p = l - r.value[g].s_y;
      let f = "";
      n > 0 ? f = "right" : n < 0 ? f = "left" : p > 0 ? f = "bottom" : p < 0 && (f = "top"), r.value[g].s_x = s, r.value[g].s_y = l;
      let P = O(v(r.value.filter((H) => H.move !== !0)), r.value[g], !0);
      if (P.length === 0)
        M.value.s_x = s, M.value.s_y = l;
      else
        switch (f) {
          case "top":
            const H = v(M.value);
            H.s_x = s, O(v(r.value.filter((h) => h.move !== !0)), H, !0).length === 0 && (M.value.s_x = s);
            const a = P.filter((h) => r.value[g].s_height >= h.s_height && l - h.s_y <= 15 || r.value[g].s_height < h.s_height && l - h.s_y <= r.value[g].s_height / 2);
            if (a.length > 0) {
              const h = $(v(r.value.filter((d) => d.move !== !0 && d.s_y + d.s_height <= M.value.s_y && a.filter((D) => D.id === d.id).length === 0)), M.value, !0);
              let C = r.value[g].s_height;
              if (h.length === 0 && (C -= Math.min(...a.map((d) => d.s_y))), P.length === a.length ? M.value.s_y = h.length === 0 ? 0 : Math.max(...h.map((d) => d.s_y + d.s_height)) : M.value.s_y = Math.max(...h.map((d) => d.s_y + d.s_height)), M.value.s_x = s, C > 0) {
                const d = v(a);
                a.forEach((D) => {
                  $(r.value.filter((X) => X.move !== !0 && X.s_y >= D.s_y + D.s_height), D, !0).forEach((X) => {
                    d.filter((lt) => lt.id === X.id).length === 0 && d.push(v(X));
                  });
                }), d.forEach((D) => {
                  P.length !== a.length && a.filter((I) => I.id === D.id).length === 1 && (D.s_y = M.value.s_y), D.s_y += C, r.value.filter((I) => I.id === D.id)[0].s_y = D.s_y;
                });
              }
            }
            break;
          case "bottom":
            const x = v(M.value);
            x.s_x = s, O(v(r.value.filter((h) => h.move !== !0)), x, !0).length === 0 && (M.value.s_x = s);
            const i = P.filter((h) => r.value[g].s_height >= h.s_height && h.s_y + h.s_height - l - r.value[g].s_height <= 15 || r.value[g].s_height < h.s_height && h.s_y + h.s_height - l - r.value[g].s_height <= h.s_height / 2);
            if (i.length > 0) {
              i.forEach((d) => {
                const D = $(v(r.value.filter((I) => I.move !== !0 && I.s_y + I.s_height <= d.s_y)), d, !0);
                d.s_y = D.length === 0 ? 0 : Math.max(...D.map((I) => I.s_y + I.s_height)), r.value.filter((I) => I.id === d.id)[0].s_y = d.s_y;
              });
              const h = [...O(i, r.value[g], !0), ...$(v(r.value.filter((d) => d.move !== !0 && d.s_y + d.s_height <= r.value[g].s_y + r.value[g].s_height)), r.value[g], !0)];
              let C = Math.max(...h.map((d) => d.s_y + d.s_height)) - M.value.s_y;
              if (M.value.s_y = Math.max(...h.map((d) => d.s_y + d.s_height)), M.value.s_x = s, C > 0) {
                const d = $(r.value.filter((D) => D.move !== !0 && D.s_y >= M.value.s_y), M.value, !0);
                v(d).forEach((D) => {
                  $(r.value.filter((X) => X.move !== !0 && X.s_y >= D.s_y + D.s_height), D, !0).forEach((X) => {
                    d.filter((lt) => lt.id === X.id).length === 0 && d.push(v(X));
                  });
                }), d.forEach((D) => {
                  D.s_y += C, r.value.filter((I) => I.id === D.id)[0].s_y = D.s_y;
                });
              }
            }
            break;
          case "left":
          case "right":
            const T = P.filter((h) => h.s_x + h.s_width - s >= V.value * 2 && s + r.value[g].s_width - h.s_x >= V.value * 2).filter((h) => l < h.s_y || l >= h.s_y && l - h.s_y <= 15).sort((h, C) => {
              const d = h.s_y, D = C.s_y;
              return d - D;
            });
            if (T.length > 0)
              M.value.s_x = s, M.value.s_y = Math.min(...T.map((h) => h.s_y));
            else {
              let h = v(r.value[g]);
              if (h.s_y = Math.min(...P.map((C) => C.s_y)) - h.s_height, M.value.s_y >= Math.min(...P.map((C) => C.s_y + C.s_height)) || h.s_y >= 0 && O(v(r.value.filter((C) => C.move !== !0)), h, !0).length === 0) {
                const C = v(M.value);
                C.s_x = s, O(v(r.value.filter((d) => d.move !== !0)), C, !0).length === 0 && (M.value.s_x = s);
              }
            }
            T.forEach((h) => {
              const C = M.value.s_y + M.value.s_height - h.s_y > 0 ? M.value.s_y + M.value.s_height - h.s_y : 0, d = v([h]);
              $(r.value.filter((I) => I.move !== !0 && I.s_y >= h.s_y + h.s_height), h, !0).forEach((I) => {
                d.filter((X) => X.id === I.id).length === 0 && d.push(v(I));
              }), d.forEach((I) => {
                I.s_y += C, T.filter((X) => X.id === I.id).length === 1 && (T.filter((X) => X.id === I.id)[0].s_y = I.s_y), r.value.filter((X) => X.id === I.id)[0].s_y = I.s_y;
              });
            });
            break;
        }
      r.value.forEach((H) => {
        Ce(H);
      }), Ce(M.value), Z(!1), fe(r.value[g]), S("dragIng", z(r.value[g])), M.value.s_y = r.value[g].syCopy, delete r.value[g].syCopy;
    }, Fe = () => {
      window.removeEventListener("mouseup", Fe), clearTimeout(oe), oe ? oe = null : (window.removeEventListener("mousemove", _e), delete r.value[g].move, r.value[g].s_x = M.value.s_x, r.value[g].s_y = M.value.s_y, fe(null), r.value.forEach((t) => {
        Ce(t);
      }), Z(), S("dragEnd", z(r.value[g])), g = null, me = setTimeout(() => {
        Z();
      }, 500));
    }, ae = (t) => {
      switch (t) {
        case "top":
          return 0;
        case "right":
          return ne - V.value * 2 - r.value[g].s_width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let _ = null, qe = "", $e = 0, He = 0, pe = 0, ge = 0, xe = 0, ye = 0;
    const ue = (t, o, e) => {
      Be(), _ = o, S("resizeStart", z(_)), qe = e, $e = t.clientX, He = t.clientY, pe = o.s_width, ge = o.s_height, xe = o.s_y, ye = o.s_x, _.drag = !0, fe(_), window.addEventListener("mousemove", dt), window.addEventListener("mouseup", ft);
    }, dt = (t) => {
      const o = pe + (t.clientX - $e), e = ge + (t.clientY - He), s = pe - (t.clientX - $e), l = ge - (t.clientY - He), n = xe + (t.clientY - He), p = ye + (t.clientX - $e), f = getComputedStyle(K.value), P = parseInt(f.getPropertyValue("--com-item-border-width").trim()), H = parseInt(f.getPropertyValue("--group-tit-height").trim()), a = () => {
        if (_.isGroup === !0) {
          const h = _.s_width - 2 * V.value - 2 * P, C = _.s_height - 2 * re.value - 2 * P - (_.groupTit ? H : 0);
          _.groupData.forEach((d) => {
            d.s_width = h * d.groupW, d.s_height = C * d.groupH, d.s_x = h * d.groupX, d.s_y = C * d.groupY;
          });
        }
      }, x = b.itemMinWidth * j.value, i = b.itemMinHeight * U();
      switch (qe) {
        case "top-left":
          _.s_height = l < i ? i : l > G("top") ? G("top") : l, _.s_y = l < i ? xe + ge - i : l > G("top") ? 0 : n, _.s_width = s < x ? x : s > G("left") ? G("left") : s, _.s_x = s < x ? ye + pe - x : s > G("left") ? 0 : p, a();
          break;
        case "top":
          _.s_height = l < i ? i : l > G("top") ? G("top") : l, _.s_y = l < i ? xe + ge - i : l > G("top") ? 0 : n, a();
          break;
        case "top-right":
          _.s_height = l < i ? i : l > G("top") ? G("top") : l, _.s_y = l < i ? xe + ge - i : l > G("top") ? 0 : n, _.s_width = o < x ? x : o > G("right") ? G("right") : o, a();
          break;
        case "left":
          _.s_width = s < x ? x : s > G("left") ? G("left") : s, _.s_x = s < x ? ye + pe - x : s > G("left") ? 0 : p, a();
          break;
        case "right":
          _.s_width = o < x ? x : o > G("right") ? G("right") : o, a();
          break;
        case "bottom-left":
          _.s_height = e < i ? i : e > G("bottom") ? G("bottom") : e, _.s_width = s < x ? x : s > G("left") ? G("left") : s, _.s_x = s < x ? ye + pe - x : s > G("left") ? 0 : p, a();
          break;
        case "bottom":
          _.s_height = e < i ? i : e > G("bottom") ? G("bottom") : e, a();
          break;
        case "bottom-right":
          _.s_height = e < i ? i : e > G("bottom") ? G("bottom") : e, _.s_width = o < x ? x : o > G("right") ? G("right") : o, a();
          break;
      }
      Ct(_);
      let T = O(v(r.value.filter((h) => h.drag !== !0)), _, !0);
      if (T.length > 0) {
        T.sort((h, C) => {
          const d = h.s_y, D = C.s_y;
          return d - D;
        });
        for (let h = 0; h < T.length; h++)
          T.filter((C) => C.id === T[h].id).forEach((C) => {
            C.s_y += _.s_y + _.s_height - C.s_y, r.value.filter((d) => d.id === C.id)[0].s_y = C.s_y, Y([C], (d, D) => d.filter((I) => I.drag !== !0 && I.id !== D.id), !0);
          });
      }
      r.value.forEach((h) => {
        Ce(h);
      }), Z(!1), fe(_), S("resizeIng", z(_));
    }, ft = (t) => {
      delete _.drag, qe = "", fe(null), window.removeEventListener("mousemove", dt), window.removeEventListener("mouseup", ft), Z(), S("resizeEnd", z(_)), _ = null;
    }, G = (t) => {
      switch (t) {
        case "top":
          return xe + ge;
        case "left":
          return ye + pe;
        case "right":
          return ne - V.value * 2 - ye;
        case "bottom":
          return 999999999;
      }
    }, Z = (t = !0) => {
      t === !0 && Y(r.value, (e, s) => e.filter((l) => l.id !== s.id)), Dt(t), r.value.forEach((e) => {
        (t === !0 || e.move !== !0 && e.drag !== !0) && it(e);
      }), t === !0 && It();
      const o = r.value.map((e) => e.y + e.height);
      o.length > 0 ? ie.value = Math.max(...o) : ie.value = 0;
    }, Dt = (t = !0) => {
      const o = v(r.value).sort((e, s) => {
        const l = e.y, n = s.y;
        return l - n;
      });
      if (!t) {
        if (_ !== null) {
          const e = $(v(o.filter((l) => l.drag !== !0 && l.s_y + l.s_height < _.s_y)), _), s = o.filter((l) => l.drag === !0)[0];
          s && (e.length > 0 ? (s.height += s.y - Math.max(...e.map((l) => l.y + l.height)), s.y = Math.max(...e.map((l) => l.y + l.height))) : (s.height += s.y, s.y = 0));
        } else if (g !== null) {
          const e = o.filter((s) => s.move === !0)[0];
          e && (e.s_x = M.value.s_x, e.s_y = M.value.s_y, Ce(e));
        }
      }
      for (let e = 0; e < o.length; e++) {
        const s = $(o, o[e]).filter((l) => l.y + l.height <= o[e].y);
        s.length > 0 ? o[e].y = Math.max(...s.map((l) => l.y + l.height)) : o[e].y = 0;
      }
      o.forEach((e) => {
        t === !0 || e.move !== !0 && e.drag !== !0 ? r.value.filter((s) => s.id === e.id)[0].y = e.y : e.move === !0 && (r.value.filter((s) => s.id === e.id)[0].syCopy = e.y * U());
      });
    }, It = () => {
      const t = r.value.filter((o) => o.isGroup === !0);
      if (t.length > 0) {
        const o = getComputedStyle(K.value), e = parseInt(o.getPropertyValue("--setting-icon-group-width").trim()), s = parseInt(o.getPropertyValue("--setting-icon-group-height").trim());
        t.forEach((l) => {
          V.value + l.s_x + l.s_width + e > ne ? V.value + l.s_x - e < 0 ? b.groupBtnPosMore ? re.value + l.s_y - s < 0 ? l.btnPosition = "bottom" : l.btnPosition = "top" : l.btnPosition = "center" : l.btnPosition = "left" : l.btnPosition = "right";
        });
      }
    }, pt = new ResizeObserver((t) => {
      At(ne === t[0].borderBoxSize[0].inlineSize ? null : t[0].borderBoxSize[0].inlineSize, at === t[0].borderBoxSize[0].blockSize ? null : t[0].borderBoxSize[0].blockSize);
    });
    Nt(() => {
      pt.observe(K.value);
    });
    const Le = R("");
    let Ue = 0, Je = 0, Qe = null, Ze = !1;
    const Gt = (t = [], o = null) => {
      clearInterval(Qe), Le.value = (/* @__PURE__ */ new Date()).getTime() + "", Ue = 0, Je = 0, t.forEach((e) => {
        Ue += 1, e.isGroup === !0 && (Je += e.groupData.length);
      }), xt(), S("domStart"), r.value = v(t), r.value.filter((e) => e.isGroup === !0).forEach((e) => {
        if (e.groupData.length < 2)
          Xe(e.id);
        else {
          const s = Ne(e.groupData, e);
          Re(s);
        }
      }), Ze = !0, Mt(() => {
        const e = K.value.getBoundingClientRect();
        o != null ? (Ee(o), ve(e.width / o)) : (Ee(r.value.length > 0 ? e.width : null), ve(1)), r.value.forEach((s) => {
          de(s);
        }), Z(), Qe = setInterval(() => {
          L(K.value, Le.value + "p").length === Ue && L(K.value, Le.value + "c").length === Je && (clearInterval(Qe), S("domReady"));
        }, 10), setTimeout(() => {
          Ze = !1;
        }, 500);
      });
    }, Tt = (t) => {
      t.showSet = !0;
    }, je = (t) => {
      const o = r.value.filter((e) => e.id === t);
      if (o.length === 1)
        delete o[0].showSet;
      else
        try {
        } catch {
        }
    }, gt = (t, o, e) => {
      const s = Pt(t), l = Pt(o), n = mt(l, s, e);
      if (n)
        t.x = n.x, t.y = n.y;
      else {
        t.x = 0;
        const p = l.map((f) => f.y + f.height);
        if (p.length > 0)
          t.y = Math.max(...p);
        else
          try {
          } catch {
          }
      }
    }, we = (t, o = null, e = !1) => {
      const s = v(t), l = r.value.filter((n) => n.id === o);
      if (s.id || (s.id = (/* @__PURE__ */ new Date()).getTime() + ""), o && l.length !== 1)
        try {
        } catch {
        } finally {
          return;
        }
      if (e !== !0 && (delete s.x, delete s.y, o ? (l[0].groupData.forEach((n) => {
        ce(n, l[0]);
      }), gt(s, l[0].groupData, l[0].width)) : gt(s, r.value, (te || ne) - V.value * 2)), o) {
        l[0].groupData.push(s);
        const n = Ne(l[0].groupData, l[0]);
        Re(n), Y([n], (p, f) => p.filter((P) => P.id !== f.id));
      } else
        s.x !== void 0 && s.y !== void 0 && (r.value.length === 0 && Ee(ne), de(s), r.value.push(s));
      Z();
    }, et = (t, o = null, e = null) => {
      let s = null;
      const l = r.value.filter((n) => n.id === o);
      if (o ? l.length === 1 && (s = v(l[0].groupData.filter((n) => n.id === t)[0])) : s = v(r.value.filter((n) => n.id === t)[0]), s)
        return s.id = e || (/* @__PURE__ */ new Date()).getTime() + "", o ? (ce(s, l[0]), we(s, o)) : we(s), z(o ? r.value.filter((n) => n.id === o)[0].groupData.filter((n) => n.id === s.id)[0] : r.value.filter((n) => n.id === s.id)[0]);
      try {
      } catch {
      } finally {
        return null;
      }
    }, be = (t, o = null, e = !0) => {
      let s = -1;
      const l = r.value.filter((n) => n.id === o);
      if (o ? l.length === 1 && (s = l[0].groupData.findIndex((n) => n.id === t)) : s = r.value.findIndex((n) => n.id === t), s !== -1) {
        if (o)
          if (l[0].groupData.splice(s, 1), l[0].groupData.length === 1)
            Xe(o);
          else {
            l[0].groupData.forEach((p) => {
              ce(p, l[0]);
            });
            const n = Ne(l[0].groupData, l[0]);
            Re(n);
          }
        else
          r.value.splice(s, 1), r.value.length === 0 && e && (Ee(null), ve(1));
        e && Z();
      } else
        try {
        } catch {
        }
    }, zt = (t) => {
      Re(t, !1);
    }, Re = (t, o = !0) => {
      if (t.id) {
        const e = v(t);
        let s = -1;
        const l = r.value.filter((n) => n.id === e.inGroupId);
        if (e.inGroupId ? l.length === 1 && (s = l[0].groupData.findIndex((n) => n.id === e.id)) : s = r.value.findIndex((n) => n.id === e.id), s !== -1) {
          if (o && (delete e.showPop, delete e.showSet, delete e.btnPosition, e.groupData && e.groupData.forEach((n) => {
            delete n.showPop, delete n.showSet;
          })), e.inGroupId) {
            if (o)
              l[0].groupData[s] = e;
            else
              try {
                delete l[0].showPop, delete l[0].showSet, delete l[0].btnPosition, l[0].groupData && l[0].groupData.forEach((n) => {
                  delete n.showPop, delete n.showSet;
                });
                for (let n in e) {
                  const p = n.split(".");
                  let f = l[0].groupData[s];
                  for (let P = 0; P < p.length; P++)
                    if (P === p.length - 1)
                      f[p[P]] = e[n];
                    else if (f = f[p[P]], !f)
                      throw new Error(n);
                }
              } catch {
                try {
                } catch {
                }
              }
            de(l[0]);
          } else {
            if (o)
              r.value[s] = e;
            else
              try {
                delete r.value[s].showPop, delete r.value[s].showSet, delete r.value[s].btnPosition, r.value[s].groupData && r.value[s].groupData.forEach((n) => {
                  delete n.showPop, delete n.showSet;
                });
                for (let n in e) {
                  const p = n.split(".");
                  let f = r.value[s];
                  for (let P = 0; P < p.length; P++)
                    if (P === p.length - 1)
                      f[p[P]] = e[n];
                    else if (f = f[p[P]], !f)
                      throw new Error(n);
                }
              } catch {
                try {
                } catch {
                }
              }
            de(r.value[s]);
          }
          Z();
        } else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, tt = (t, o = !1) => {
      let e = null;
      if (e = r.value.filter((s) => s.id === t)[0], e)
        return typeof o == "boolean" ? e.static = o : o && typeof o == "object" && (typeof o.static == "boolean" && (e.static = o.static), typeof o.dragable == "boolean" && (e.dragable = o.dragable), typeof o.resizable == "boolean" && (e.resizable = o.resizable)), z(r.value.filter((s) => s.id === e.id)[0]);
      try {
      } catch {
      } finally {
        return null;
      }
    }, At = (t, o) => {
      t !== null && (ne = t, Ze || (ve(te && ne ? t / te : 1), r.value.forEach((e) => {
        de(e);
      }), Z())), o !== null && (at = o);
    }, yt = (t) => {
      t.showPop || (r.value.forEach((o) => {
        delete o.showPop, o.groupData && o.groupData.forEach((e) => {
          delete e.showPop;
        });
      }), S("openSetMenu", z(t)), t.showPop = !0, window.addEventListener("click", Be));
    }, Be = () => {
      r.value.forEach((t) => {
        delete t.showPop, t.groupData && t.groupData.forEach((o) => {
          delete o.showPop;
        });
      }), window.removeEventListener("click", Be);
    }, J = R(!1), vt = (t) => {
      const o = r.value.findIndex((e) => e.id === t);
      if (o !== -1)
        r.value[o].checked = !0, r.value[o].checkDis = !0, J.value = !0, S("showGroup", J.value);
      else
        try {
        } catch {
        }
    }, ot = () => {
      J.value = !1, r.value.forEach((t) => {
        delete t.checked, delete t.checkDis, t.groupData && t.groupData.forEach((o) => {
          delete o.checked, delete o.checkDis;
        });
      }), S("showGroup", J.value);
    }, Ot = (t) => {
      t.checked = !t.checked, S("updateChecked", r.value.filter((o) => o.checked).length);
    }, Ne = (t, o) => {
      const e = v(t), s = v(o);
      e.sort((a, x) => {
        const i = a.x, T = x.x;
        return i - T;
      });
      for (let a = 0; a < e.length - 1; a++) {
        if (a === 0 && e[a].x > 0) {
          const x = e[a].x;
          for (let i = a; i < e.length; i++)
            e[i].x -= x;
        }
        if (e[a + 1].x > e[a].x + e[a].width) {
          const x = v(e.slice(0, a + 1));
          if (e[a + 1].x > Math.max(...x.map((i) => i.x + i.width))) {
            const i = e[a + 1].x - Math.max(...x.map((T) => T.x + T.width));
            for (let T = a + 1; T < e.length; T++)
              e[T].x -= i;
          }
        }
      }
      e.sort((a, x) => {
        const i = a.y, T = x.y;
        return i - T;
      });
      for (let a = 0; a < e.length - 1; a++) {
        if (a === 0 && e[a].y > 0) {
          const x = e[a].y;
          for (let i = a; i < e.length; i++)
            e[i].y -= x;
        }
        if (e[a + 1].y > e[a].y + e[a].height) {
          const x = v(e.slice(0, a + 1));
          if (e[a + 1].y > Math.max(...x.map((i) => i.y + i.height))) {
            const i = e[a + 1].y - Math.max(...x.map((T) => T.y + T.height));
            for (let T = a + 1; T < e.length; T++)
              e[T].y -= i;
          }
        }
      }
      const l = e.map((a) => a.x + a.width), n = Math.max(...l), p = e.map((a) => a.y + a.height), f = Math.max(...p);
      e.forEach((a) => {
        a.inGroupId || (a.inGroupId = s.id), a.groupW = a.width / n, a.groupH = a.height / f, a.groupX = a.x / n, a.groupY = a.y / f, a.isObstacle = a.x + a.width === n && a.y === 0, delete a.width, delete a.height;
      });
      const P = getComputedStyle(K.value), H = parseInt(P.getPropertyValue("--group-tit-height").trim());
      return s.width = n, s.height = f + (s.groupTit ? H : 0), s.groupData = [...e], s;
    }, ce = (t, o) => {
      const e = getComputedStyle(K.value), s = parseInt(e.getPropertyValue("--group-tit-height").trim());
      t.width = o.width * t.groupW, t.height = (o.height - (o.groupTit ? s : 0)) * t.groupH;
    }, Lt = () => {
      Mt(() => {
        le();
      });
    }, Bt = () => {
      let t = r.value.filter((o) => o.checked);
      if (t.length > 1)
        if (t = b.beforeAddGroup(v(t)), typeof t == "object" && t instanceof Array && t.length > 0 && t.filter((o) => o.id).length === t.length) {
          const o = {
            id: (/* @__PURE__ */ new Date()).getTime() + "G",
            isGroup: !0,
            groupTit: ""
          }, e = Ne(t, o);
          return e.groupData.forEach((s) => {
            be(s.id, null, !1);
          }), we(e), ot(), z(r.value.filter((s) => s.id === e.id)[0]);
        } else
          try {
          } catch {
          } finally {
            return null;
          }
      else
        return ot(), null;
    }, _t = (t, o) => {
      const e = r.value.filter((s) => s.id === o)[0];
      if (e) {
        let s = e.groupData.filter((l) => l.id === t)[0];
        if (s) {
          if (e.groupData.length === 2)
            return Xe(o);
          if (s = b.beforeRemoveGroup(v([s])), typeof s == "object" && s instanceof Array && s.length === 1 && s.filter((l) => l.id).length === 1)
            return s = s[0], ce(s, e), delete s.inGroupId, delete s.groupW, delete s.groupH, delete s.groupX, delete s.groupY, delete s.isObstacle, be(s.id, e.id), we(s), [z(r.value.filter((l) => l.id === t)[0])];
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
    }, Xe = (t) => {
      const o = r.value.filter((e) => e.id === t)[0];
      if (o) {
        let e = [], s = !0;
        try {
          o.groupData.forEach((l) => {
            if (l = b.beforeRemoveGroup(v([o])), typeof l == "object" && l instanceof Array && l.length === 1 && l.filter((n) => n.id).length === 1)
              l = l[0];
            else
              throw s = !1, new Error();
          });
        } catch {
        }
        if (s) {
          o.groupData.forEach((n) => {
            ce(n, o), n.x += o.x, n.y += o.y, delete n.inGroupId, delete n.groupW, delete n.groupH, delete n.groupX, delete n.groupY, delete n.isObstacle, e.push(n.id), we(n, null, !0);
          }), be(o.id);
          let l = [];
          return e.forEach((n) => {
            l.push(z(r.value.filter((p) => p.id === n)[0]));
          }), l;
        } else
          return [];
      } else
        try {
        } catch {
        } finally {
          return [];
        }
    }, Xt = (t = "", o) => {
      const e = r.value.filter((s) => s.id === o)[0];
      if (e) {
        if (!e.groupTit || !t) {
          const s = getComputedStyle(K.value), l = parseInt(s.getPropertyValue("--group-tit-height").trim());
          e.groupTit && !t && (e.height -= l, e.s_height -= l * U()), !e.groupTit && t && (e.height += l, e.s_height += l * U());
        }
        e.groupTit = t, Y([e], (s, l) => s.filter((n) => n.id !== l.id)), Z();
      } else
        try {
        } catch {
        }
    }, xt = () => {
      r.value = [], Ee(null), ve(1), ie.value = 0;
    }, $t = (t = null) => new Promise((o, e) => {
      r.value.forEach((l) => {
        delete l.showPop, delete l.showSet, l.groupData && l.groupData.forEach((n) => {
          delete n.showPop, delete n.showSet;
        });
      });
      const s = v(r.value);
      s.forEach((l) => {
        l.isGroup === !0 && l.groupData.forEach((n) => {
          ce(n, l), delete n.s_width, delete n.s_height, delete n.s_x, delete n.s_y;
        }), delete l.btnPosition, delete l.s_width, delete l.s_height, delete l.s_x, delete l.s_y;
      }), t && te && s.forEach((l) => {
        de(l, t / te), it(l, t / te);
      }), o({ data: s, width: t || te });
    });
    return Yt(() => {
      pt.unobserve(K.value), window.removeEventListener("click", Be), window.removeEventListener("click", Oe), window.removeEventListener("keydown", Ke);
    }), y({ init: Gt, addItem: we, copyItem: et, deleteItem: be, updateItem: zt, toggleLockItem: tt, hideGroupSet: je, openGroup: vt, closeGroup: ot, changeGroupBorder: Lt, addGroup: Bt, removeGroupItem: _t, removeGroup: Xe, changeGroupTit: Xt, openTrimModel: Ve, closeTrimModel: Oe, resetData: xt, getData: $t }), (t, o) => (w(), k("div", {
      class: "vue-drag-component-plus",
      style: q({ "--item-scale": c(j), "--css-scale": u.seeModel ? c(Pe) : 1, "--com-x-space": c(V) + "px", "--com-y-space": c(re) + "px" }),
      ref_key: "pageRef",
      ref: K
    }, [
      N("div", Ft, [
        (w(!0), k(ke, null, nt(c(r), (e, s) => (w(), k("div", {
          class: he([
            "com-item",
            c(g) !== null ? "" : "not-move-animate",
            e.move ? "is-move" : "",
            e.drag ? "is-drag" : "",
            e.showPop || e.isGroup && e.groupData.filter((l) => l.showPop).length > 0 ? "on-top" : "",
            // 初始化标记
            c(Le) + "p",
            "i" + e.id + "d"
          ]),
          style: q({
            width: e.s_width + "px",
            height: e.s_height + "px",
            top: e.s_y + "px",
            left: e.s_x + "px"
          }),
          key: s
        }, [
          N("div", {
            class: he([
              "com-item-inner",
              u.seeModel || c(F) || c(J) || e.static === !0 || e.dragable === !1 ? "" : "can-drag",
              u.seeModel || c(F) ? "no-hover" : ""
            ]),
            onMousedown: m((l) => u.seeModel || c(F) || c(J) || e.static === !0 || e.dragable === !1 ? null : ht(l, s), ["prevent"]),
            onMouseenter: (l) => u.seeModel || c(F) || c(J) || c(g) !== null || c(_) || !e.isGroup ? null : Tt(e),
            onMouseleave: (l) => u.seeModel || c(F) || c(J) || c(g) !== null || c(_) || !e.isGroup ? null : je(e.id)
          }, [
            N("div", Ut, [
              e.isGroup ? (w(), k(ke, { key: 0 }, [
                e.groupTit ? (w(), k("div", {
                  key: 0,
                  class: "group-item-tit",
                  title: e.groupTit
                }, Q(e.groupTit), 9, Jt)) : A("", !0),
                N("div", {
                  class: he(["group-item-content", e.groupTit ? "" : "full"])
                }, [
                  (w(!0), k(ke, null, nt(e.groupData, (l, n) => (w(), k("div", {
                    class: he([
                      "com-item-box-child",
                      l.isObstacle ? "is-obstacle" : "",
                      c(Le) + "c"
                    ]),
                    style: q({
                      width: l.s_width + "px",
                      height: l.s_height + "px",
                      top: l.s_y + "px",
                      left: l.s_x + "px"
                    }),
                    key: n
                  }, [
                    N("div", Qt, [
                      Me(t.$slots, "item", { data: l }, () => [
                        N("p", null, Q(Math.round(l.s_width * 100) / 100) + "," + Q(Math.round(l.s_height * 100) / 100), 1),
                        N("p", null, Q(Math.round(l.s_x * 100) / 100) + "," + Q(Math.round(l.s_y * 100) / 100), 1)
                      ])
                    ]),
                    !u.seeModel && !c(F) && !c(J) && c(g) === null && c(_) === null ? (w(), k("div", {
                      key: 0,
                      class: "setting-box",
                      style: q({ display: l.showPop ? "flex" : "none" }),
                      onMousedown: m((p) => null, ["prevent", "stop"])
                    }, [
                      kt(Et, {
                        iconObj: u.settingIcon,
                        onClick: m((p) => yt(l), ["prevent", "stop"])
                      }, null, 8, ["iconObj", "onClick"])
                    ], 36)) : A("", !0),
                    l.showPop ? (w(), k("div", {
                      key: 1,
                      class: "setting-box-pop",
                      onMousedown: m((p) => null, ["prevent", "stop"])
                    }, [
                      Me(t.$slots, "setPopNormal", {
                        data: z(l)
                      }, () => [
                        N("div", {
                          class: "setting-box-pop-item",
                          onClick: (p) => _t(l.id, l.inGroupId)
                        }, "移出组合", 8, Zt),
                        N("div", {
                          class: "setting-box-pop-item",
                          onClick: (p) => et(l.id, l.inGroupId)
                        }, "复制", 8, jt),
                        N("div", {
                          class: "setting-box-pop-item",
                          onClick: (p) => be(l.id, l.inGroupId)
                        }, "删除", 8, eo)
                      ])
                    ], 32)) : A("", !0)
                  ], 6))), 128))
                ], 2)
              ], 64)) : (w(), k("div", to, [
                Me(t.$slots, "item", { data: e }, () => [
                  N("p", null, Q(Math.round(e.s_width * 100) / 100) + "," + Q(Math.round(e.s_height * 100) / 100), 1),
                  N("p", null, Q(Math.round(e.s_x * 100) / 100) + "," + Q(Math.round(e.s_y * 100) / 100), 1)
                ])
              ])),
              !e.isGroup && e.notGroup !== !0 && c(J) ? (w(), k("div", {
                key: 2,
                class: he(["group-checkbox", e.checked ? "is-checked" : "", e.checkDis ? "disabled" : ""]),
                onClick: (l) => e.checkDis ? null : Ot(e)
              }, null, 10, oo)) : A("", !0),
              !u.seeModel && !c(F) && !c(J) && c(g) === null && c(_) === null ? (w(), k("div", {
                key: 3,
                class: he(["setting-box", e.isGroup === !0 ? e.btnPosition === "right" ? "only-g" : e.btnPosition === "left" ? "only-g l" : e.btnPosition === "top" ? "only-g t" : e.btnPosition === "bottom" ? "only-g b" : e.btnPosition === "center" ? "only-g c" : "" : ""]),
                style: q({ display: e.showPop || e.showSet ? "flex" : "none" }),
                onMousedown: m((l) => null, ["prevent", "stop"])
              }, [
                kt(Et, {
                  iconObj: u.settingIcon,
                  onClick: m((l) => yt(e), ["prevent", "stop"])
                }, null, 8, ["iconObj", "onClick"])
              ], 38)) : A("", !0),
              e.showPop ? (w(), k("div", {
                key: 4,
                class: he(["setting-box-pop", e.isGroup === !0 ? e.btnPosition === "right" ? "special" : e.btnPosition === "left" ? "special l" : e.btnPosition === "top" ? "special t" : e.btnPosition === "bottom" ? "special b" : e.btnPosition === "center" ? "special c" : "" : ""]),
                onMousedown: m((l) => null, ["prevent", "stop"])
              }, [
                e.isGroup === !0 ? Me(t.$slots, "setPopSpecial", {
                  key: 0,
                  data: z(e)
                }, () => [
                  N("div", {
                    class: "setting-box-pop-item",
                    onClick: (l) => tt(e.id, e.static !== !0)
                  }, Q(e.static === !0 ? "解除" : "") + "锁定 ", 9, lo),
                  e.static !== !0 ? (w(), k("div", {
                    key: 0,
                    class: "setting-box-pop-item",
                    onClick: (l) => Ve(e.id)
                  }, " 微调 ", 8, so)) : A("", !0),
                  u.hideTit ? A("", !0) : (w(), k("div", {
                    key: 1,
                    class: "setting-box-pop-item",
                    onClick: (l) => {
                      je(e.id), S("showTitPop", e.groupTit, e.id);
                    }
                  }, " 设置组合标题 ", 8, ro)),
                  N("div", {
                    class: "setting-box-pop-item",
                    onClick: (l) => Xe(e.id)
                  }, "解除组合", 8, no)
                ]) : Me(t.$slots, "setPopNormal", {
                  key: 1,
                  data: z(e)
                }, () => [
                  e.notGroup !== !0 ? (w(), k("div", {
                    key: 0,
                    class: "setting-box-pop-item",
                    onClick: (l) => vt(e.id)
                  }, "组合", 8, io)) : A("", !0),
                  N("div", {
                    class: "setting-box-pop-item",
                    onClick: (l) => tt(e.id, e.static !== !0)
                  }, Q(e.static === !0 ? "解除" : "") + "锁定 ", 9, ao),
                  e.static !== !0 ? (w(), k("div", {
                    key: 1,
                    class: "setting-box-pop-item",
                    onClick: (l) => Ve(e.id)
                  }, " 微调 ", 8, uo)) : A("", !0),
                  N("div", {
                    class: "setting-box-pop-item",
                    onClick: (l) => et(e.id)
                  }, "复制", 8, co),
                  N("div", {
                    class: "setting-box-pop-item",
                    onClick: (l) => be(e.id)
                  }, "删除", 8, ho)
                ])
              ], 34)) : A("", !0)
            ]),
            !u.seeModel && !c(F) && !c(J) && !e.showPop && !(e.isGroup && e.groupData.filter((l) => l.showPop).length > 0) && !e.move && e.static !== !0 && e.resizable !== !1 ? (w(), k(ke, { key: 0 }, [
              c(E).indexOf("topLeft") !== -1 ? (w(), k("div", {
                key: 0,
                class: "resize-line top-left",
                onMousedown: m((l) => ue(l, e, "top-left"), ["prevent", "stop"])
              }, null, 40, fo)) : A("", !0),
              c(E).indexOf("top") !== -1 ? (w(), k("div", {
                key: 1,
                class: "resize-line top",
                onMousedown: m((l) => ue(l, e, "top"), ["prevent", "stop"])
              }, null, 40, po)) : A("", !0),
              c(E).indexOf("topRight") !== -1 ? (w(), k("div", {
                key: 2,
                class: "resize-line top-right",
                onMousedown: m((l) => ue(l, e, "top-right"), ["prevent", "stop"])
              }, null, 40, go)) : A("", !0),
              c(E).indexOf("left") !== -1 ? (w(), k("div", {
                key: 3,
                class: "resize-line left",
                onMousedown: m((l) => ue(l, e, "left"), ["prevent", "stop"])
              }, null, 40, yo)) : A("", !0),
              c(E).indexOf("right") !== -1 ? (w(), k("div", {
                key: 4,
                class: "resize-line right",
                onMousedown: m((l) => ue(l, e, "right"), ["prevent", "stop"])
              }, null, 40, vo)) : A("", !0),
              c(E).indexOf("bottomLeft") !== -1 ? (w(), k("div", {
                key: 5,
                class: "resize-line bottom-left",
                onMousedown: m((l) => ue(l, e, "bottom-left"), ["prevent", "stop"])
              }, null, 40, _o)) : A("", !0),
              c(E).indexOf("bottom") !== -1 ? (w(), k("div", {
                key: 6,
                class: "resize-line bottom",
                onMousedown: m((l) => ue(l, e, "bottom"), ["prevent", "stop"])
              }, null, 40, xo)) : A("", !0),
              c(E).indexOf("bottomRight") !== -1 ? (w(), k("div", {
                key: 7,
                class: "resize-line bottom-right",
                onMousedown: m((l) => ue(l, e, "bottom-right"), ["prevent", "stop"])
              }, null, 40, wo)) : A("", !0)
            ], 64)) : A("", !0)
          ], 42, qt)
        ], 6))), 128)),
        (w(!0), k(ke, null, nt(c(r), (e, s) => (w(), k("div", {
          class: he([
            "shadow-bg",
            c(g) !== null ? "" : "not-move-animate",
            e.move ? "is-move" : "",
            e.drag ? "is-drag" : ""
          ]),
          style: q({
            width: e.s_width - c(V) * 2 + "px",
            height: e.s_height - c(re) * 2 + "px",
            top: e.s_y + c(re) + "px",
            left: e.s_x + c(V) + "px"
          }),
          key: s
        }, null, 6))), 128)),
        c(g) !== null ? (w(), k("div", {
          key: 0,
          class: "drag-bg",
          style: q({
            width: c(M).s_width + "px",
            height: c(M).s_height + "px",
            top: c(M).s_y + "px",
            left: c(M).s_x + "px"
          })
        }, null, 4)) : A("", !0),
        N("div", {
          class: "height-bg",
          style: q({ height: (c(ie) > 0 ? c(ie) * U() + (u.seeModel ? u.seeModelMinBg : 220) : 0) + "px" })
        }, null, 4),
        u.showAuxiliary ? (w(), k(ke, { key: 1 }, [
          c(De) !== null ? (w(), k("div", {
            key: 0,
            class: "auxiliary-line hor",
            style: q({ top: c(De) + "px", left: "0px" })
          }, null, 4)) : A("", !0),
          c(Ie) !== null ? (w(), k("div", {
            key: 1,
            class: "auxiliary-line hor",
            style: q({ top: c(Ie) + "px", left: "0px" })
          }, null, 4)) : A("", !0),
          c(Ge) !== null ? (w(), k("div", {
            key: 2,
            class: "auxiliary-line hor",
            style: q({ top: c(Ge) + "px", left: "0px" })
          }, null, 4)) : A("", !0),
          c(Te) !== null ? (w(), k("div", {
            key: 3,
            class: "auxiliary-line",
            style: q({ top: "0px", left: c(Te) + "px", height: c(ie) * U() + 220 + "px" })
          }, null, 4)) : A("", !0),
          c(ze) !== null ? (w(), k("div", {
            key: 4,
            class: "auxiliary-line",
            style: q({ top: "0px", left: c(ze) + "px", height: c(ie) * U() + 220 + "px" })
          }, null, 4)) : A("", !0),
          c(Ae) !== null ? (w(), k("div", {
            key: 5,
            class: "auxiliary-line",
            style: q({ top: "0px", left: c(Ae) + "px", height: c(ie) * U() + 220 + "px" })
          }, null, 4)) : A("", !0)
        ], 64)) : A("", !0),
        c(r).length === 0 ? (w(), k("div", bo, [
          Me(t.$slots, "empty", {}, () => [
            o[0] || (o[0] = Wt(" 暂无数据 "))
          ])
        ])) : A("", !0)
      ])
    ], 4));
  }
}, Mo = [ko], So = {
  install(u) {
    Mo.forEach((y) => {
      u.component("vueDragComponentPlus", y);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(So);
export {
  So as default
};
