import { resolveComponent as Nt, openBlock as b, createBlock as nt, resolveDynamicComponent as Mt, normalizeProps as Et, mergeProps as me, withCtx as Wt, createElementBlock as E, toDisplayString as J, ref as Y, watch as it, onMounted as Vt, onBeforeUnmount as mt, normalizeStyle as K, unref as c, createElementVNode as N, Fragment as be, renderList as ut, normalizeClass as fe, withModifiers as m, createCommentVNode as G, renderSlot as ke, createVNode as St, createTextVNode as Kt, nextTick as Pt, isVNode as Dt } from "vue";
const Ct = {
  __name: "icon",
  props: {
    iconObj: {
      type: Object,
      requured: !0
    }
  },
  setup(i) {
    return (x, H) => {
      const S = Nt("el-icon");
      return i.iconObj.type === "custom" ? (b(), nt(Mt(i.iconObj.icon), Et(me({ key: 0 }, i.iconObj.attrs)), null, 16)) : i.iconObj.type === "el" ? (b(), nt(S, Et(me({ key: 1 }, i.iconObj.attrs)), {
        default: Wt(() => [
          (b(), nt(Mt(i.iconObj.icon)))
        ]),
        _: 1
      }, 16)) : i.iconObj.type === "iconfont" ? (b(), E("i", me({
        key: 2,
        class: ["icon iconfont", "icon-" + i.iconObj.icon]
      }, i.iconObj.attrs), null, 16)) : (b(), E("i", me({
        key: 3,
        class: i.iconObj.type
      }, i.iconObj.attrs), J(i.iconObj.icon), 17));
    };
  }
}, It = (i, x = { x: "x", y: "y", width: "width", height: "height" }) => {
  let H = null;
  return i instanceof Array ? (H = [], i.forEach((S) => {
    typeof S[x.x] == "number" && typeof S[x.y] == "number" && typeof S[x.width] == "number" && typeof S[x.height] == "number" && H.push({
      x: S[x.x],
      y: S[x.y],
      width: S[x.width],
      height: S[x.height]
    });
  })) : typeof i[x.width] == "number" && typeof i[x.height] == "number" && (H = {
    width: i[x.width],
    height: i[x.height]
  }), H;
}, Ft = (i) => {
  const x = /* @__PURE__ */ new Map();
  return i.forEach((H) => {
    x.has(H.x) || x.set(H.x, []), x.get(H.x).push(H);
  }), x;
}, qt = (i, x) => i.filter((H) => H.x <= x.x && H.x + H.width > x.x || H.x > x.x && H.x < x.x + x.width), Ut = (i, x, H, S = !1) => {
  if (x.width > H)
    return null;
  let k = [];
  if (i.length === 0) {
    const X = { x: 0, y: 0 };
    return S ? [X] : X;
  }
  const B = Math.max(...i.map((X) => X.y + X.height)), I = /* @__PURE__ */ new Set([0]);
  i.forEach((X) => {
    I.add(X.y), I.add(X.y + X.height);
  });
  const Ke = Array.from(I).sort((X, a) => X - a);
  for (const X of Ke) {
    const a = X + x.height;
    if (a > B)
      continue;
    const Q = i.filter((r) => r.y < a && r.y + r.height > X);
    if (Q.length === 0) {
      const r = { x: 0, y: X };
      if (!S)
        return r;
      k.push(r);
      continue;
    }
    const A = Q.map((r) => [r.x, r.x + r.width]);
    A.sort((r, ie) => r[0] - ie[0]);
    const O = [];
    let [Z, j] = A[0];
    for (let r = 1; r < A.length; r++) {
      const [ie, W] = A[r];
      ie <= j ? j = Math.max(j, W) : (O.push([Z, j]), [Z, j] = [ie, W]);
    }
    if (O.push([Z, j]), O[0][0] >= x.width) {
      const r = { x: 0, y: X };
      if (!S)
        return r;
      k.push(r);
    }
    let z = O[0][1];
    for (let r = 1; r < O.length; r++) {
      if (O[r][0] - z >= x.width) {
        const W = { x: z, y: X };
        if (!S)
          return W;
        k.push(W);
      }
      z = Math.max(z, O[r][1]);
    }
    if (H - z >= x.width) {
      const r = { x: z, y: X };
      if (!S)
        return r;
      k.push(r);
    }
  }
  return S ? (Ft(k).forEach((a, Q) => {
    if (a.length > 1)
      for (let A = 0; A < a.length - 1; A++) {
        let O = { ...x, ...a[A] };
        qt(i.filter((Z) => Z.y >= O.y + O.height && Z.y <= a[A + 1].y), O).length === 0 && (k = k.filter((Z) => !(Z.x === a[A + 1].x && Z.y === a[A + 1].y)), a.splice(A, 1), A--);
      }
  }), k.sort((a, Q) => a.y !== Q.y ? a.y - Q.y : a.x - Q.x), k.length === 0 ? null : k) : null;
};
const Jt = { class: "content-box" }, Qt = ["onMousedown", "onMouseenter", "onMouseleave"], Zt = { class: "com-item-box" }, jt = ["title"], el = { class: "com-item-box-content" }, tl = ["onClick"], ll = ["onClick"], ol = ["onClick"], sl = {
  key: 1,
  class: "com-item-box-content"
}, rl = ["onClick"], nl = ["onClick"], il = ["onClick"], ul = ["onClick"], al = ["onClick"], hl = ["onClick"], cl = ["onClick"], dl = ["onClick"], fl = ["onClick"], gl = ["onClick"], pl = ["onMousedown"], yl = ["onMousedown"], vl = ["onMousedown"], _l = ["onMousedown"], xl = ["onMousedown"], wl = ["onMousedown"], bl = ["onMousedown"], kl = ["onMousedown"], Ml = {
  key: 2,
  class: "com-empty"
}, El = {
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
    // 手机拖动模式（在窄屏可以开启，将简化上下拖动交换的判断）
    mobileDragModel: {
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
      validator(i, x) {
        return i >= 0;
      }
    },
    // 组件项最小宽度（原始尺寸）
    itemMinWidth: {
      type: Number,
      default: 50,
      validator(i, x) {
        return i >= 20;
      }
    },
    // 组件项最小高度（原始尺寸）
    itemMinHeight: {
      type: Number,
      default: 50,
      validator(i, x) {
        return i >= 20;
      }
    },
    // 纵向相邻元素的自动间距（原始尺寸）
    xSpace: {
      type: Number,
      default: 10,
      validator(i, x) {
        return i >= 0;
      }
    },
    // 横向相邻元素的自动间距（原始尺寸）
    ySpace: {
      type: Number,
      default: null,
      validator(i, x) {
        return i >= 0;
      }
    },
    // 高度缩放折扣率（让高度没那么大变化）
    hScaleDiscount: {
      type: Number,
      default: 0.2,
      validator(i, x) {
        return i > 0;
      }
    },
    // 预览模式组件内css缩放比例最小值
    cssScaleMin: {
      type: Number,
      default: 0.75,
      validator(i, x) {
        return i > 0;
      }
    },
    // 预览模式组件内css缩放比例最大值
    cssScaleMax: {
      type: Number,
      default: 1.2,
      validator(i, x) {
        return i > 0 && i >= (x ? x.cssScaleMin : 0.1);
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
      default: (i) => i
    },
    // 解散/移出组合前数据处理
    beforeRemoveGroup: {
      type: Function,
      default: (i) => i
    },
    // 拖拽事件触发延迟时间（防止不小心单击了一下而开始拖动）
    dragDelayTime: {
      type: Number,
      default: 200,
      validator(i, x) {
        return i >= 0 && i < 1e3;
      }
    }
  },
  emits: ["baseWidthInit", "changeScale", "changeCssScale", "changeTrimModel", "dragStart", "dragIng", "dragEnd", "resizeStart", "resizeIng", "resizeEnd", "showGroup", "openSetMenu", "updateChecked", "showTitPop", "domStart", "domReady"],
  setup(i, { expose: x, emit: H }) {
    const S = H, k = i, B = (t) => {
      if (typeof t == "object" && !Dt(t) && t !== null && !(t instanceof Date)) {
        let l = t instanceof Array ? [] : {};
        for (let e in t)
          l[e] = typeof t[e] == "object" && !Dt(t[e]) && t[e] !== null && !(t[e] instanceof Date) ? B(t[e]) : t[e];
        return l;
      } else
        return t;
    }, I = (t) => {
      let l = {};
      if (t instanceof Array)
        l = [], t.forEach((e) => {
          l.push(I(e));
        });
      else
        for (let e in t)
          [
            "id",
            "move",
            "drag",
            "itemMinWidth",
            "width",
            "s_width",
            "itemMinHeight",
            "height",
            "s_height",
            "x",
            "s_x",
            "y",
            "s_y",
            "isGroup",
            "groupTit",
            "groupData",
            "inGroupId",
            "groupW",
            "groupH",
            "groupX",
            "groupY"
          ].indexOf(e) !== -1 && (e === "groupData" ? l[e] = I(t[e]) : l[e] = t[e]);
      return l;
    }, Ke = (t, l) => {
      let e = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.msMatchesSelector;
      for (; t && !e.call(t, l); )
        t = t.parentElement;
      return t;
    }, X = (t, l) => t.classList ? t.classList.contains(l) : new RegExp("\\s" + l + "\\s").test(" " + t.className + " "), a = (t) => parseFloat(t.toFixed(7)), Q = (t, l) => {
      let e = [], s = (o) => {
        o.forEach((n) => {
          X(n, l) && e.push(n), n.childNodes && n.childNodes.length > 0 && s(n.childNodes);
        });
      };
      return s(t.childNodes), e;
    }, A = (t, l, e = !1) => Z(O(t, l, e), l, e), O = (t, l, e = !1) => t.filter((s) => a(s[e ? "s_x" : "x"]) <= a(l[e ? "s_x" : "x"]) && a(s[e ? "s_x" : "x"] + s[e ? "s_width" : "width"]) > a(l[e ? "s_x" : "x"]) || a(s[e ? "s_x" : "x"]) > a(l[e ? "s_x" : "x"]) && a(s[e ? "s_x" : "x"]) < a(l[e ? "s_x" : "x"] + l[e ? "s_width" : "width"])), Z = (t, l, e = !1) => t.filter((s) => a(s[e ? "s_y" : "y"]) <= a(l[e ? "s_y" : "y"]) && a(s[e ? "s_y" : "y"] + s[e ? "s_height" : "height"]) > a(l[e ? "s_y" : "y"]) || a(s[e ? "s_y" : "y"]) > a(l[e ? "s_y" : "y"]) && a(s[e ? "s_y" : "y"]) < a(l[e ? "s_y" : "y"] + l[e ? "s_height" : "height"])), j = (t, l = (s) => s, e = !1) => {
      const s = I(r.value), o = I(t);
      o.sort((p, g) => {
        const M = a(p[e ? "s_y" : "y"]), L = a(g[e ? "s_y" : "y"]);
        if (M !== L)
          return M - L;
        {
          const h = a(p[e ? "s_x" : "x"]), T = a(g[e ? "s_x" : "x"]);
          return h - T;
        }
      });
      const n = (p) => {
        A(l(s, p), p, e).forEach((M) => {
          M[e ? "s_y" : "y"] = p[e ? "s_y" : "y"] + p[e ? "s_height" : "height"], n(M);
        });
      };
      o.forEach((p) => n(s.filter((g) => g.id === p.id)[0])), s.forEach((p) => {
        r.value.filter((g) => g.id === p.id)[0][e ? "s_y" : "y"] = p[e ? "s_y" : "y"];
      });
    }, z = (t) => {
      const l = B(t);
      return delete l.showPop, delete l.showSet, l.groupData ? l.groupData.forEach((e) => {
        delete e.showPop, delete e.showSet, de(e, l), delete e.s_width, delete e.s_height, delete e.s_x, delete e.s_y;
      }) : l.inGroupId && (delete l.showPop, delete l.showSet, de(l, r.value.filter((e) => e.id === l.inGroupId)[0])), delete l.btnPosition, delete l.s_width, delete l.s_height, delete l.s_x, delete l.s_y, delete l.syCopy, l;
    }, r = Y([]), ie = () => {
      k.insertResizeKeys.forEach((t) => {
        k.excludeResizeKeys.indexOf(t) === -1 && W.value.push(t);
      });
    };
    it(
      () => [k.insertResizeKeys, k.excludeResizeKeys],
      () => {
        ie();
      }
    );
    const W = Y([]);
    ie();
    const at = () => {
      r.value.length > 0 && r.value.filter((t) => t.isGroup === !0).forEach((t) => {
        ge(t);
      });
    }, ht = () => {
      k.xSpace !== null && k.xSpace !== void 0 ? R.value = k.xSpace / 2 : R.value = 10 / 2, k.ySpace !== null && k.ySpace !== void 0 && k.ySpace >= 0 ? ee.value = k.ySpace / 2 : ee.value = R.value, at();
    };
    it(
      () => [k.xSpace, k.ySpace],
      () => {
        ht();
      }
    );
    const R = Y(0), ee = Y(0);
    ht();
    const V = Y(null);
    let re = null;
    const Me = (t) => {
      re = t, S("baseWidthInit", re);
    }, le = Y(1), Ee = Y(1), ye = (t) => {
      le.value = t, t < k.cssScaleMin ? Ee.value = k.cssScaleMin : t > k.cssScaleMax ? Ee.value = k.cssScaleMax : Ee.value = t, S("changeScale", le.value), S("changeCssScale", k.seeModel ? Ee.value : 1);
    }, q = () => 1 + (le.value - 1) * k.hScaleDiscount;
    it(
      () => k.seeModel,
      () => {
        ye(le.value);
      }
    );
    const ge = (t, l = null) => {
      l ? (t.width = t.width * l, t.height = t.height * l) : (t.s_width = t.width * le.value, t.s_height = t.height * q());
      const e = getComputedStyle(V.value), s = parseInt(e.getPropertyValue("--com-item-border-width").trim()), o = parseInt(e.getPropertyValue("--group-tit-height").trim());
      if (t.isGroup === !0)
        if (l) {
          const n = t.width, p = t.height - (t.groupTit ? o : 0);
          t.groupData.forEach((g) => {
            g.width = n * g.groupW, g.height = p * g.groupH, g.x = n * g.groupX, g.y = p * g.groupY;
          });
        } else {
          const n = t.s_width - 2 * R.value - 2 * s, p = t.s_height - 2 * ee.value - 2 * s - (t.groupTit ? o : 0);
          t.groupData.forEach((g) => {
            g.s_width = n * g.groupW, g.s_height = p * g.groupH, g.s_x = n * g.groupX, g.s_y = p * g.groupY;
          });
        }
    }, ct = (t, l = null) => {
      l ? (t.s_x = t.x * l, t.s_y = t.y * l) : (t.s_x = t.x * le.value, t.s_y = t.y * q());
    }, Gt = (t) => {
      t.width = t.s_width / le.value, t.height = t.s_height / q();
      const l = getComputedStyle(V.value), e = parseInt(l.getPropertyValue("--group-tit-height").trim());
      if (t.isGroup === !0) {
        const s = t.width, o = t.height - (t.groupTit ? e : 0);
        t.groupData.forEach((n) => {
          n.x = s * n.groupX, n.y = o * n.groupY;
        });
      }
    }, Se = (t) => {
      t.x = t.s_x / le.value, t.y = t.s_y / q();
    };
    let ue = null, dt = null;
    const ae = Y(0), Pe = Y(null), De = Y(null), Ce = Y(null), Ie = Y(null), Ge = Y(null), Te = Y(null), pe = (t) => {
      const l = I(t);
      if (!k.showAuxiliary || t === null)
        Pe.value = null, De.value = null, Ce.value = null, Ie.value = null, Ge.value = null, Te.value = null;
      else {
        const e = getComputedStyle(V.value), s = parseInt(e.getPropertyValue("--auxiliary-width").trim()), o = r.value.filter((d) => d.id !== l.id).map((d) => Math.round(d.s_y)), n = r.value.filter((d) => d.id !== l.id).map((d) => Math.round(d.s_y + d.s_height / 2)), p = r.value.filter((d) => d.id !== l.id).map((d) => Math.round(d.s_y + d.s_height)), g = [...o, ...n, ...p];
        g.sort(), g.filter((d) => d === Math.round(l.s_y)).length > 0 ? Pe.value = l.s_y : Pe.value = null, g.filter((d) => d === Math.round(l.s_y + l.s_height / 2)).length > 0 ? De.value = l.s_y + l.s_height / 2 : De.value = null, g.filter((d) => d === Math.round(l.s_y + l.s_height)).length > 0 ? Ce.value = l.s_y + l.s_height - s : Ce.value = null;
        const M = r.value.filter((d) => d.id !== l.id).map((d) => Math.round(d.s_x)), L = r.value.filter((d) => d.id !== l.id).map((d) => Math.round(d.s_x + d.s_width / 2)), h = r.value.filter((d) => d.id !== l.id).map((d) => Math.round(d.s_x + d.s_width)), T = [...M, ...L, ...h];
        T.sort(), T.filter((d) => d === Math.round(l.s_x)).length > 0 ? Ie.value = l.s_x : Ie.value = null, T.filter((d) => d === Math.round(l.s_x + l.s_width / 2)).length > 0 ? Ge.value = l.s_x + l.s_width / 2 : Ge.value = null, T.filter((d) => d === Math.round(l.s_x + l.s_width)).length > 0 ? Te.value = l.s_x + l.s_width - s : Te.value = null;
      }
    }, ve = () => {
      window.removeEventListener("keydown", ve), v !== null ? $e() : P !== null && Je();
    }, F = Y(!1), Fe = (t) => {
      let l = null;
      if (l = r.value.filter((e) => e.id === t)[0], l && l.static !== !0 && l.dragable !== !1)
        F.value = !0, pt(r.value.findIndex((e) => e.id === t)), setTimeout(() => {
          window.addEventListener("click", ze), window.addEventListener("keydown", qe);
        }, 50), S("changeTrimModel", F.value, z(r.value.filter((e) => e.id === l.id)[0]));
      else
        try {
        } catch {
        }
    }, qe = (t) => {
      switch (t.keyCode) {
        case 13:
        case 27:
        case 32:
          ze();
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
    }, ze = () => {
      window.removeEventListener("click", ze), window.removeEventListener("keydown", qe), $e(), F.value = !1, S("changeTrimModel", F.value);
    }, f = Y({});
    let v = null, ft = null, gt = null, Ue = null, ne = null;
    const pt = (t, l) => {
      if (clearTimeout(Ue), clearTimeout(ne), Be(), F.value)
        ne = null, v = t, f.value = I(r.value[v]), S("dragStart", z(r.value[v])), r.value[v].move = !0, pe(r.value[v]);
      else {
        const e = Ke(t.target, ".com-item");
        e && (ne = setTimeout(() => {
          ne = null, v = l, f.value = I(r.value[v]), S("dragStart", z(r.value[v])), r.value[v].move = !0, pe(r.value[v]), ft = t.clientX - e.offsetLeft, gt = t.clientY - e.offsetTop, window.addEventListener("mousemove", _e), window.addEventListener("keydown", ve);
        }, k.dragDelayTime), window.addEventListener("mouseup", $e));
      }
    }, _e = (t) => {
      clearTimeout(Ue), clearTimeout(ne), ne = null;
      let l = null, e = null;
      if (F.value) {
        const L = Q(V.value, "i" + r.value[v].id + "d")[0];
        switch (l = L.offsetLeft, e = L.offsetTop, t) {
          case "top":
            e -= 1;
            break;
          case "bottom":
            e += 1;
            break;
          case "left":
            l -= 1;
            break;
          case "right":
            l += 1;
            break;
        }
      } else
        l = t.clientX - ft, e = t.clientY - gt;
      const s = l <= he("left") ? he("left") : l >= he("right") ? he("right") : l, o = e <= he("top") ? he("top") : e >= he("bottom") ? he("bottom") : e, n = s - r.value[v].s_x, p = o - r.value[v].s_y;
      let g = "";
      n > 0 ? g = "right" : n < 0 ? g = "left" : p > 0 ? g = "bottom" : p < 0 && (g = "top"), r.value[v].s_x = s, r.value[v].s_y = o;
      let M = A(I(r.value.filter((L) => L.move !== !0)), r.value[v], !0);
      if (M.length === 0)
        f.value.s_x = s, f.value.s_y = o;
      else
        switch (g) {
          case "top":
            const L = B(f.value);
            L.s_x = s, A(I(r.value.filter((u) => u.move !== !0)), L, !0).length === 0 && (f.value.s_x = s);
            const h = M.filter((u) => k.mobileDragModel ? a(u.s_height + u.s_y - o) > 2 * ee.value : r.value[v].s_height >= u.s_height && o - u.s_y <= 15 || r.value[v].s_height < u.s_height && o - u.s_y <= r.value[v].s_height / 2);
            if (h.length > 0) {
              const u = O(I(r.value.filter((y) => y.move !== !0 && a(y.s_y + y.s_height) <= a(f.value.s_y) && h.filter((D) => D.id === y.id).length === 0)), f.value, !0);
              let _ = r.value[v].s_height;
              if (u.length === 0 && (_ -= Math.min(...h.map((y) => y.s_y))), M.length === h.length ? f.value.s_y = u.length === 0 ? 0 : Math.max(...u.map((y) => y.s_y + y.s_height)) : f.value.s_y = Math.max(...u.map((y) => y.s_y + y.s_height)), f.value.s_x = s, _ > 0) {
                const y = B(h);
                h.forEach((D) => {
                  O(r.value.filter(($) => $.move !== !0 && a($.s_y) >= a(D.s_y + D.s_height)), D, !0).forEach(($) => {
                    y.filter((rt) => rt.id === $.id).length === 0 && y.push(I($));
                  });
                }), y.forEach((D) => {
                  M.length !== h.length && h.filter((C) => C.id === D.id).length === 1 && (D.s_y = f.value.s_y), D.s_y += _, r.value.filter((C) => C.id === D.id)[0].s_y = D.s_y;
                });
              }
            }
            break;
          case "bottom":
            const T = B(f.value);
            T.s_x = s, A(I(r.value.filter((u) => u.move !== !0)), T, !0).length === 0 && (f.value.s_x = s);
            const d = M.filter((u) => k.mobileDragModel ? a(o + r.value[v].s_height - u.s_y) > 2 * ee.value : r.value[v].s_height >= u.s_height && u.s_y + u.s_height - o - r.value[v].s_height <= 15 || r.value[v].s_height < u.s_height && u.s_y + u.s_height - o - r.value[v].s_height <= u.s_height / 2);
            if (d.length > 0) {
              d.forEach((y) => {
                const D = O(I(r.value.filter((C) => C.move !== !0 && a(C.s_y + C.s_height) <= a(y.s_y))), y, !0);
                y.s_y = D.length === 0 ? 0 : Math.max(...D.map((C) => C.s_y + C.s_height)), r.value.filter((C) => C.id === y.id)[0].s_y = y.s_y;
              });
              const u = [...A(d, r.value[v], !0), ...O(I(r.value.filter((y) => y.move !== !0 && a(y.s_y + y.s_height) <= a(r.value[v].s_y + r.value[v].s_height))), r.value[v], !0)];
              let _ = Math.max(...u.map((y) => y.s_y + y.s_height)) - f.value.s_y;
              if (f.value.s_y = Math.max(...u.map((y) => y.s_y + y.s_height)), f.value.s_x = s, _ > 0) {
                const y = O(r.value.filter((D) => D.move !== !0 && a(D.s_y) >= a(f.value.s_y)), f.value, !0);
                I(y).forEach((D) => {
                  O(r.value.filter(($) => $.move !== !0 && a($.s_y) >= a(D.s_y + D.s_height)), D, !0).forEach(($) => {
                    y.filter((rt) => rt.id === $.id).length === 0 && y.push(I($));
                  });
                }), y.forEach((D) => {
                  D.s_y += _, r.value.filter((C) => C.id === D.id)[0].s_y = D.s_y;
                });
              }
            }
            break;
          case "left":
          case "right":
            const w = M.filter((u) => u.s_x + u.s_width - s >= R.value * 2 && s + r.value[v].s_width - u.s_x >= R.value * 2).filter((u) => o < u.s_y || o >= u.s_y && o - u.s_y <= 15).sort((u, _) => {
              const y = a(u.s_y), D = a(_.s_y);
              return y - D;
            });
            if (w.length > 0)
              f.value.s_x = s, f.value.s_y = Math.min(...w.map((u) => u.s_y));
            else {
              let u = I(r.value[v]);
              if (u.s_y = Math.min(...M.map((_) => _.s_y)) - u.s_height, f.value.s_y >= Math.min(...M.map((_) => _.s_y + _.s_height)) || u.s_y >= 0 && A(I(r.value.filter((_) => _.move !== !0)), u, !0).length === 0) {
                const _ = B(f.value);
                _.s_x = s, A(I(r.value.filter((y) => y.move !== !0)), _, !0).length === 0 && (f.value.s_x = s);
              }
            }
            w.forEach((u) => {
              const _ = f.value.s_y + f.value.s_height - u.s_y > 0 ? f.value.s_y + f.value.s_height - u.s_y : 0, y = B([u]);
              O(r.value.filter((C) => C.move !== !0 && a(C.s_y) >= a(u.s_y + u.s_height)), u, !0).forEach((C) => {
                y.filter(($) => $.id === C.id).length === 0 && y.push(I(C));
              }), y.forEach((C) => {
                C.s_y += _, w.filter(($) => $.id === C.id).length === 1 && (w.filter(($) => $.id === C.id)[0].s_y = C.s_y), r.value.filter(($) => $.id === C.id)[0].s_y = C.s_y;
              });
            });
            break;
        }
      r.value.forEach((L) => {
        Se(L);
      }), Se(f.value), te(!1), pe(r.value[v]), S("dragIng"), f.value.s_y = r.value[v].syCopy, delete r.value[v].syCopy;
    }, $e = () => {
      window.removeEventListener("mouseup", $e), clearTimeout(ne), ne ? ne = null : (window.removeEventListener("mousemove", _e), delete r.value[v].move, r.value[v].s_x = f.value.s_x, r.value[v].s_y = f.value.s_y, pe(null), r.value.forEach((t) => {
        Se(t);
      }), te(), S("dragEnd", z(r.value[v])), v = null, ve(), Ue = setTimeout(() => {
        te();
      }, 500));
    }, he = (t) => {
      switch (t) {
        case "top":
          return 0;
        case "right":
          return ue - R.value * 2 - r.value[v].s_width;
        case "bottom":
          return 999999999;
        case "left":
          return 0;
      }
    };
    let P = null, oe = "", Re = 0, Ye = 0, Ae = 0, Oe = 0, Ne = 0, Le = 0;
    const ce = (t, l, e) => {
      Be(), f.value = I(l), P = l, S("resizeStart", z(P)), oe = e, Re = t.clientX, Ye = t.clientY, Ae = l.s_width, Oe = l.s_height, Ne = l.s_y, Le = l.s_x, P.drag = !0, pe(P), window.addEventListener("mousemove", yt), window.addEventListener("mouseup", Je), window.addEventListener("keydown", ve);
    }, yt = (t) => {
      const l = Ae + (t.clientX - Re), e = Oe + (t.clientY - Ye), s = Ae - (t.clientX - Re), o = Oe - (t.clientY - Ye), n = Ne + (t.clientY - Ye), p = Le + (t.clientX - Re), g = (typeof f.value.itemMinWidth == "number" ? f.value.itemMinWidth : k.itemMinWidth) * le.value, M = (typeof f.value.itemMinHeight == "number" ? f.value.itemMinHeight : k.itemMinHeight) * q();
      oe.indexOf("top") !== -1 ? (f.value.s_height = o < M ? M : o > se("top") ? se("top") : o, f.value.s_y = o < M ? Ne + Oe - M : o > se("top") ? 0 : n) : oe.indexOf("bottom") !== -1 && (f.value.s_height = e < M ? M : e > se("bottom") ? se("bottom") : e), oe.indexOf("left") !== -1 ? (f.value.s_width = s < g ? g : s > se("left") ? se("left") : s, f.value.s_x = s < g ? Le + Ae - g : s > se("left") ? 0 : p) : oe.indexOf("right") !== -1 && (f.value.s_width = l < g ? g : l > se("right") ? se("right") : l);
      let L = A(I(r.value.filter((w) => w.drag !== !0)), f.value, !0);
      if (L.length > 0) {
        let w = [];
        if (oe.indexOf("top") !== -1) {
          const u = L.filter((_) => a(_.s_y + _.s_height - f.value.s_y) > R.value * 2);
          u.length > 0 && (P.s_height = f.value.s_height, P.s_y = f.value.s_y, w = [...w, ...u]);
        } else if (oe.indexOf("bottom") !== -1) {
          const u = L.filter((_) => a(f.value.s_y + f.value.s_height - _.s_y) > ee.value * 2);
          u.length > 0 && (P.s_height = f.value.s_height, w = [...w, ...u]);
        }
        if (oe.indexOf("left") !== -1) {
          const u = L.filter((_) => a(_.s_x + _.s_width - f.value.s_x) > R.value * 2);
          u.length > 0 && (P.s_width = f.value.s_width, P.s_x = f.value.s_x, w = [...w, ...u]);
        } else if (oe.indexOf("right") !== -1) {
          const u = L.filter((_) => a(f.value.s_x + f.value.s_width - _.s_x) > R.value * 2);
          u.length > 0 && (P.s_width = f.value.s_width, w = [...w, ...u]);
        }
        if (w.length > 0) {
          w.sort((u, _) => {
            const y = a(u.s_y), D = a(_.s_y);
            return y - D;
          });
          for (let u = 0; u < w.length; u++)
            w.filter((_) => _.id === w[u].id).forEach((_) => {
              _.s_y += P.s_y + P.s_height - _.s_y, r.value.filter((y) => y.id === _.id)[0].s_y = _.s_y, j([_], (y, D) => y.filter((C) => C.drag !== !0 && C.id !== D.id), !0);
            });
        }
      } else
        P.s_x = f.value.s_x, P.s_y = f.value.s_y, P.s_width = f.value.s_width, P.s_height = f.value.s_height;
      const h = getComputedStyle(V.value), T = parseInt(h.getPropertyValue("--com-item-border-width").trim()), d = parseInt(h.getPropertyValue("--group-tit-height").trim());
      if (P.isGroup === !0) {
        const w = P.s_width - 2 * R.value - 2 * T, u = P.s_height - 2 * ee.value - 2 * T - (P.groupTit ? d : 0);
        P.groupData.forEach((_) => {
          _.s_width = w * _.groupW, _.s_height = u * _.groupH, _.s_x = w * _.groupX, _.s_y = u * _.groupY;
        });
      }
      Gt(P), r.value.forEach((w) => {
        Se(w);
      }), te(!1), pe(P), S("resizeIng");
    }, Je = (t) => {
      delete P.drag, oe = "", pe(null), window.removeEventListener("mousemove", yt), window.removeEventListener("mouseup", Je), te(), S("resizeEnd", z(P)), P = null, ve();
    }, se = (t) => {
      switch (t) {
        case "top":
          return Ne + Oe;
        case "left":
          return Le + Ae;
        case "right":
          return ue - R.value * 2 - Le;
        case "bottom":
          return 999999999;
      }
    }, te = (t = !0) => {
      t === !0 && j(r.value, (e, s) => e.filter((o) => o.id !== s.id)), Tt(t), r.value.forEach((e) => {
        (t === !0 || e.move !== !0 && e.drag !== !0) && ct(e);
      }), t === !0 && zt();
      const l = r.value.map((e) => e.y + e.height);
      l.length > 0 ? ae.value = Math.max(...l) : ae.value = 0;
    }, Tt = (t = !0) => {
      const l = I(r.value).sort((e, s) => {
        const o = a(e.y), n = a(s.y);
        return o - n;
      });
      if (!t) {
        if (P !== null) {
          const e = O(B(l.filter((o) => o.drag !== !0 && a(o.s_y + o.s_height) < a(P.s_y))), P), s = l.filter((o) => o.drag === !0)[0];
          s && (e.length > 0 ? (s.height += s.y - Math.max(...e.map((o) => o.y + o.height)), s.y = Math.max(...e.map((o) => o.y + o.height))) : (s.height += s.y, s.y = 0));
        } else if (v !== null) {
          const e = l.filter((s) => s.move === !0)[0];
          e && (e.s_x = f.value.s_x, e.s_y = f.value.s_y, Se(e));
        }
      }
      for (let e = 0; e < l.length; e++) {
        const s = O(l, l[e]).filter((o) => a(o.y + o.height) <= a(l[e].y));
        s.length > 0 ? l[e].y = Math.max(...s.map((o) => o.y + o.height)) : l[e].y = 0;
      }
      l.forEach((e) => {
        t === !0 || e.move !== !0 && e.drag !== !0 ? r.value.filter((s) => s.id === e.id)[0].y = e.y : e.move === !0 && (r.value.filter((s) => s.id === e.id)[0].syCopy = e.y * q());
      });
    }, zt = () => {
      const t = r.value.filter((l) => l.isGroup === !0);
      if (t.length > 0) {
        const l = getComputedStyle(V.value), e = parseInt(l.getPropertyValue("--setting-icon-group-width").trim()), s = parseInt(l.getPropertyValue("--setting-icon-group-height").trim());
        t.forEach((o) => {
          R.value + o.s_x + o.s_width + e > ue ? R.value + o.s_x - e < 0 ? k.groupBtnPosMore ? ee.value + o.s_y - s < 0 ? o.btnPosition = "bottom" : o.btnPosition = "top" : o.btnPosition = "center" : o.btnPosition = "left" : o.btnPosition = "right";
        });
      }
    }, vt = new ResizeObserver((t) => {
      Ht(ue === t[0].borderBoxSize[0].inlineSize ? null : t[0].borderBoxSize[0].inlineSize, dt === t[0].borderBoxSize[0].blockSize ? null : t[0].borderBoxSize[0].blockSize);
    });
    Vt(() => {
      vt.observe(V.value);
    });
    const He = Y("");
    let Qe = 0, Ze = 0, je = null, et = !1;
    const At = (t = [], l = null) => {
      clearInterval(je), He.value = (/* @__PURE__ */ new Date()).getTime() + "", Qe = 0, Ze = 0, t.forEach((e) => {
        Qe += 1, e.isGroup === !0 && (Ze += e.groupData.length);
      }), kt(), S("domStart"), r.value = B(t), r.value.filter((e) => e.isGroup === !0).forEach((e) => {
        if (e.groupData.length < 2)
          Xe(e.id);
        else {
          const s = Ve(e.groupData, e);
          We(s);
        }
      }), et = !0, Pt(() => {
        const e = V.value.getBoundingClientRect();
        l != null && r.value.length > 0 ? (Me(l), ye(e.width / l)) : (Me(r.value.length > 0 ? e.width : null), ye(1)), r.value.forEach((s) => {
          ge(s);
        }), te(), je = setInterval(() => {
          Q(V.value, He.value + "p").length === Qe && Q(V.value, He.value + "c").length === Ze && (clearInterval(je), S("domReady"));
        }, 10), setTimeout(() => {
          et = !1;
        }, 500);
      });
    }, Ot = (t) => {
      t.showSet = !0;
    }, tt = (t) => {
      const l = r.value.filter((e) => e.id === t);
      if (l.length === 1)
        delete l[0].showSet;
      else
        try {
        } catch {
        }
    }, _t = (t, l, e) => {
      const s = It(t), o = It(l), n = Ut(o, s, e);
      if (n)
        t.x = n.x, t.y = n.y;
      else {
        t.x = 0;
        const p = o.map((g) => g.y + g.height);
        if (p.length > 0)
          t.y = Math.max(...p);
        else
          try {
          } catch {
          }
      }
    }, xe = (t, l = null, e = !1) => {
      const s = B(t), o = r.value.filter((n) => n.id === l);
      if (s.id || (s.id = (/* @__PURE__ */ new Date()).getTime() + ""), l && o.length !== 1)
        try {
        } catch {
        } finally {
          return;
        }
      if (e !== !0 && (delete s.x, delete s.y, l ? (o[0].groupData.forEach((n) => {
        de(n, o[0]);
      }), _t(s, o[0].groupData, o[0].width)) : _t(s, r.value, (re || ue) - R.value * 2)), l) {
        o[0].groupData.push(s);
        const n = Ve(o[0].groupData, o[0]);
        We(n), j([n], (p, g) => p.filter((M) => M.id !== g.id));
      } else
        s.x !== void 0 && s.y !== void 0 && (r.value.length === 0 && Me(ue), ge(s), r.value.push(s));
      te();
    }, lt = (t, l = null, e = null) => {
      let s = null;
      const o = r.value.filter((n) => n.id === l);
      if (l ? o.length === 1 && (s = B(o[0].groupData.filter((n) => n.id === t)[0])) : s = B(r.value.filter((n) => n.id === t)[0]), s)
        return s.id = e || (/* @__PURE__ */ new Date()).getTime() + "", l ? (de(s, o[0]), xe(s, l)) : xe(s), z(l ? r.value.filter((n) => n.id === l)[0].groupData.filter((n) => n.id === s.id)[0] : r.value.filter((n) => n.id === s.id)[0]);
      try {
      } catch {
      } finally {
        return null;
      }
    }, we = (t, l = null, e = !0) => {
      let s = -1;
      const o = r.value.filter((n) => n.id === l);
      if (l ? o.length === 1 && (s = o[0].groupData.findIndex((n) => n.id === t)) : s = r.value.findIndex((n) => n.id === t), s !== -1) {
        if (l)
          if (o[0].groupData.splice(s, 1), o[0].groupData.length === 1)
            Xe(l);
          else {
            o[0].groupData.forEach((p) => {
              de(p, o[0]);
            });
            const n = Ve(o[0].groupData, o[0]);
            We(n);
          }
        else
          r.value.splice(s, 1), r.value.length === 0 && e && (Me(null), ye(1));
        e && te();
      } else
        try {
        } catch {
        }
    }, Lt = (t) => {
      We(t, !1);
    }, We = (t, l = !0) => {
      if (t.id) {
        const e = B(t);
        let s = -1;
        const o = r.value.filter((n) => n.id === e.inGroupId);
        if (e.inGroupId ? o.length === 1 && (s = o[0].groupData.findIndex((n) => n.id === e.id)) : s = r.value.findIndex((n) => n.id === e.id), s !== -1) {
          if (l && (delete e.showPop, delete e.showSet, delete e.btnPosition, e.groupData && e.groupData.forEach((n) => {
            delete n.showPop, delete n.showSet;
          })), e.inGroupId) {
            if (l)
              o[0].groupData[s] = e;
            else
              try {
                delete o[0].showPop, delete o[0].showSet, delete o[0].btnPosition, o[0].groupData && o[0].groupData.forEach((n) => {
                  delete n.showPop, delete n.showSet;
                });
                for (let n in e) {
                  const p = n.split(".");
                  let g = o[0].groupData[s];
                  for (let M = 0; M < p.length; M++)
                    if (M === p.length - 1)
                      g[p[M]] = e[n];
                    else if (g = g[p[M]], !g)
                      throw new Error(n);
                }
              } catch {
                try {
                } catch {
                }
              }
            ge(o[0]);
          } else {
            if (l)
              r.value[s] = e;
            else
              try {
                delete r.value[s].showPop, delete r.value[s].showSet, delete r.value[s].btnPosition, r.value[s].groupData && r.value[s].groupData.forEach((n) => {
                  delete n.showPop, delete n.showSet;
                });
                for (let n in e) {
                  const p = n.split(".");
                  let g = r.value[s];
                  for (let M = 0; M < p.length; M++)
                    if (M === p.length - 1)
                      g[p[M]] = e[n];
                    else if (g = g[p[M]], !g)
                      throw new Error(n);
                }
              } catch {
                try {
                } catch {
                }
              }
            ge(r.value[s]);
          }
          te();
        } else
          try {
          } catch {
          }
      } else
        try {
        } catch {
        }
    }, ot = (t, l = !1) => {
      let e = null;
      if (e = r.value.filter((s) => s.id === t)[0], e)
        return typeof l == "boolean" ? e.static = l : l && typeof l == "object" && (typeof l.static == "boolean" && (e.static = l.static), typeof l.dragable == "boolean" && (e.dragable = l.dragable), typeof l.resizable == "boolean" && (e.resizable = l.resizable)), z(r.value.filter((s) => s.id === e.id)[0]);
      try {
      } catch {
      } finally {
        return null;
      }
    }, Ht = (t, l) => {
      t !== null && (ue = t, et || (ye(re && ue ? t / re : 1), r.value.forEach((e) => {
        ge(e);
      }), te())), l !== null && (dt = l);
    }, xt = (t) => {
      t.showPop || (r.value.forEach((l) => {
        delete l.showPop, l.groupData && l.groupData.forEach((e) => {
          delete e.showPop;
        });
      }), S("openSetMenu", z(t)), t.showPop = !0, window.addEventListener("click", Be));
    }, Be = () => {
      r.value.forEach((t) => {
        delete t.showPop, t.groupData && t.groupData.forEach((l) => {
          delete l.showPop;
        });
      }), window.removeEventListener("click", Be);
    }, U = Y(!1), wt = (t) => {
      const l = r.value.findIndex((e) => e.id === t);
      if (l !== -1)
        r.value[l].checked = !0, r.value[l].checkDis = !0, U.value = !0, S("showGroup", U.value);
      else
        try {
        } catch {
        }
    }, st = () => {
      U.value = !1, r.value.forEach((t) => {
        delete t.checked, delete t.checkDis, t.groupData && t.groupData.forEach((l) => {
          delete l.checked, delete l.checkDis;
        });
      }), S("showGroup", U.value);
    }, Bt = (t) => {
      t.checked = !t.checked, S("updateChecked", r.value.filter((l) => l.checked).length);
    }, Ve = (t, l) => {
      const e = B(t), s = B(l);
      e.sort((h, T) => {
        const d = a(h.x), w = a(T.x);
        return d - w;
      });
      for (let h = 0; h < e.length - 1; h++) {
        if (h === 0 && e[h].x > 0) {
          const T = e[h].x;
          for (let d = h; d < e.length; d++)
            e[d].x -= T;
        }
        if (e[h + 1].x > e[h].x + e[h].width) {
          const T = I(e.slice(0, h + 1));
          if (e[h + 1].x > Math.max(...T.map((d) => d.x + d.width))) {
            const d = e[h + 1].x - Math.max(...T.map((w) => w.x + w.width));
            for (let w = h + 1; w < e.length; w++)
              e[w].x -= d;
          }
        }
      }
      e.sort((h, T) => {
        const d = a(h.y), w = a(T.y);
        return d - w;
      });
      for (let h = 0; h < e.length - 1; h++) {
        if (h === 0 && e[h].y > 0) {
          const T = e[h].y;
          for (let d = h; d < e.length; d++)
            e[d].y -= T;
        }
        if (e[h + 1].y > e[h].y + e[h].height) {
          const T = I(e.slice(0, h + 1));
          if (e[h + 1].y > Math.max(...T.map((d) => d.y + d.height))) {
            const d = e[h + 1].y - Math.max(...T.map((w) => w.y + w.height));
            for (let w = h + 1; w < e.length; w++)
              e[w].y -= d;
          }
        }
      }
      const o = e.map((h) => h.x + h.width), n = Math.max(...o), p = e.map((h) => h.y + h.height), g = Math.max(...p);
      e.forEach((h) => {
        h.inGroupId || (h.inGroupId = s.id), h.groupW = h.width / n, h.groupH = h.height / g, h.groupX = h.x / n, h.groupY = h.y / g, h.isObstacle = h.x + h.width === n && h.y === 0, delete h.width, delete h.height;
      });
      const M = getComputedStyle(V.value), L = parseInt(M.getPropertyValue("--group-tit-height").trim());
      return s.width = n, s.height = g + (s.groupTit ? L : 0), s.groupData = [...e], s;
    }, de = (t, l) => {
      const e = getComputedStyle(V.value), s = parseInt(e.getPropertyValue("--group-tit-height").trim());
      t.width = l.width * t.groupW, t.height = (l.height - (l.groupTit ? s : 0)) * t.groupH;
    }, Xt = () => {
      Pt(() => {
        at();
      });
    }, $t = () => {
      let t = r.value.filter((l) => l.checked);
      if (t.length > 1)
        if (t = k.beforeAddGroup(B(t)), typeof t == "object" && t instanceof Array && t.length > 0 && t.filter((l) => l.id).length === t.length) {
          const l = {
            id: (/* @__PURE__ */ new Date()).getTime() + "G",
            isGroup: !0,
            groupTit: ""
          }, e = Ve(t, l);
          return e.groupData.forEach((s) => {
            we(s.id, null, !1);
          }), xe(e), st(), z(r.value.filter((s) => s.id === e.id)[0]);
        } else
          try {
          } catch {
          } finally {
            return null;
          }
      else
        return st(), null;
    }, bt = (t, l) => {
      const e = r.value.filter((s) => s.id === l)[0];
      if (e) {
        let s = e.groupData.filter((o) => o.id === t)[0];
        if (s) {
          if (e.groupData.length === 2)
            return Xe(l);
          if (s = k.beforeRemoveGroup(B([s])), typeof s == "object" && s instanceof Array && s.length === 1 && s.filter((o) => o.id).length === 1)
            return s = s[0], de(s, e), delete s.inGroupId, delete s.groupW, delete s.groupH, delete s.groupX, delete s.groupY, delete s.isObstacle, we(s.id, e.id), xe(s), [z(r.value.filter((o) => o.id === t)[0])];
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
      const l = r.value.filter((e) => e.id === t)[0];
      if (l) {
        let e = [], s = !0;
        try {
          l.groupData.forEach((o) => {
            if (o = k.beforeRemoveGroup(B([l])), typeof o == "object" && o instanceof Array && o.length === 1 && o.filter((n) => n.id).length === 1)
              o = o[0];
            else
              throw s = !1, new Error();
          });
        } catch {
        }
        if (s) {
          we(l.id, null, !1), l.groupData.forEach((n) => {
            de(n, l), n.x += l.x, n.y += l.y, delete n.inGroupId, delete n.groupW, delete n.groupH, delete n.groupX, delete n.groupY, delete n.isObstacle, e.push(n.id), xe(n, null, !0);
          });
          let o = [];
          return e.forEach((n) => {
            o.push(z(r.value.filter((p) => p.id === n)[0]));
          }), o;
        } else
          return [];
      } else
        try {
        } catch {
        } finally {
          return [];
        }
    }, Rt = (t = "", l) => {
      const e = r.value.filter((s) => s.id === l)[0];
      if (e) {
        if (!e.groupTit || !t) {
          const s = getComputedStyle(V.value), o = parseInt(s.getPropertyValue("--group-tit-height").trim());
          e.groupTit && !t && (e.height -= o, e.s_height -= o * q()), !e.groupTit && t && (e.height += o, e.s_height += o * q());
        }
        e.groupTit = t, j([e], (s, o) => s.filter((n) => n.id !== o.id)), te();
      } else
        try {
        } catch {
        }
    }, kt = () => {
      r.value = [], Me(null), ye(1), ae.value = 0;
    }, Yt = (t = null) => new Promise((l, e) => {
      r.value.forEach((o) => {
        delete o.showPop, delete o.showSet, o.groupData && o.groupData.forEach((n) => {
          delete n.showPop, delete n.showSet;
        });
      });
      const s = B(r.value);
      s.forEach((o) => {
        o.isGroup === !0 && o.groupData.forEach((n) => {
          de(n, o), delete n.s_width, delete n.s_height, delete n.s_x, delete n.s_y;
        }), delete o.btnPosition, delete o.s_width, delete o.s_height, delete o.s_x, delete o.s_y;
      }), t && re && s.forEach((o) => {
        ge(o, t / re), ct(o, t / re);
      }), l({ data: s, width: t || re });
    });
    return mt(() => {
      vt.unobserve(V.value), window.removeEventListener("click", Be), window.removeEventListener("click", ze), window.removeEventListener("keydown", qe), window.removeEventListener("keydown", ve);
    }), x({ init: At, addItem: xe, copyItem: lt, deleteItem: we, updateItem: Lt, toggleLockItem: ot, hideGroupSet: tt, openGroup: wt, closeGroup: st, changeGroupBorder: Xt, addGroup: $t, removeGroupItem: bt, removeGroup: Xe, changeGroupTit: Rt, openTrimModel: Fe, closeTrimModel: ze, resetData: kt, getData: Yt }), (t, l) => (b(), E("div", {
      class: "vue-drag-component-plus",
      style: K({ "--item-scale": c(le), "--css-scale": i.seeModel ? c(Ee) : 1, "--com-x-space": c(R) + "px", "--com-y-space": c(ee) + "px" }),
      ref_key: "pageRef",
      ref: V
    }, [
      N("div", Jt, [
        (b(!0), E(be, null, ut(c(r), (e, s) => (b(), E("div", {
          class: fe([
            "com-item",
            c(v) !== null ? "" : "not-move-animate",
            e.move ? "is-move" : "",
            e.drag ? "is-drag" : "",
            e.showPop || e.isGroup && e.groupData.filter((o) => o.showPop).length > 0 ? "on-top" : "",
            // 初始化标记
            c(He) + "p",
            "i" + e.id + "d"
          ]),
          style: K({
            width: e.s_width + "px",
            height: e.s_height + "px",
            top: e.s_y + "px",
            left: e.s_x + "px"
          }),
          key: s
        }, [
          N("div", {
            class: fe([
              "com-item-inner",
              i.seeModel || c(F) || c(U) || e.static === !0 || e.dragable === !1 ? "" : "can-drag",
              e.move || e.drag ? "always-hover" : "",
              i.seeModel ? "no-hover" : ""
            ]),
            onMousedown: m((o) => i.seeModel || c(F) || c(U) || e.static === !0 || e.dragable === !1 ? null : pt(o, s), ["prevent"]),
            onMouseenter: (o) => i.seeModel || c(F) || c(U) || c(v) !== null || c(P) || !e.isGroup ? null : Ot(e),
            onMouseleave: (o) => i.seeModel || c(F) || c(U) || c(v) !== null || c(P) || !e.isGroup ? null : tt(e.id)
          }, [
            N("div", Zt, [
              e.isGroup ? (b(), E(be, { key: 0 }, [
                e.groupTit ? (b(), E("div", {
                  key: 0,
                  class: "group-item-tit",
                  title: e.groupTit
                }, J(e.groupTit), 9, jt)) : G("", !0),
                N("div", {
                  class: fe(["group-item-content", e.groupTit ? "" : "full"])
                }, [
                  (b(!0), E(be, null, ut(e.groupData, (o, n) => (b(), E("div", {
                    class: fe([
                      "com-item-box-child",
                      o.isObstacle ? "is-obstacle" : "",
                      c(He) + "c"
                    ]),
                    style: K({
                      width: o.s_width + "px",
                      height: o.s_height + "px",
                      top: o.s_y + "px",
                      left: o.s_x + "px"
                    }),
                    key: n
                  }, [
                    N("div", el, [
                      ke(t.$slots, "item", { data: o }, () => [
                        N("p", null, J(Math.round(o.s_width * 100) / 100) + "," + J(Math.round(o.s_height * 100) / 100), 1),
                        N("p", null, J(Math.round(o.s_x * 100) / 100) + "," + J(Math.round(o.s_y * 100) / 100), 1)
                      ])
                    ]),
                    !i.seeModel && !c(F) && !c(U) && c(v) === null && c(P) === null ? (b(), E("div", {
                      key: 0,
                      class: "setting-box",
                      style: K({ display: o.showPop ? "flex" : "none" }),
                      onMousedown: m((p) => null, ["prevent", "stop"])
                    }, [
                      St(Ct, {
                        iconObj: i.settingIcon,
                        onClick: m((p) => xt(o), ["prevent", "stop"])
                      }, null, 8, ["iconObj", "onClick"])
                    ], 36)) : G("", !0),
                    o.showPop ? (b(), E("div", {
                      key: 1,
                      class: "setting-box-pop",
                      onMousedown: m((p) => null, ["prevent", "stop"])
                    }, [
                      ke(t.$slots, "setPopNormal", {
                        data: z(o)
                      }, () => [
                        N("div", {
                          class: "setting-box-pop-item",
                          onClick: (p) => bt(o.id, o.inGroupId)
                        }, "移出组合", 8, tl),
                        N("div", {
                          class: "setting-box-pop-item",
                          onClick: (p) => lt(o.id, o.inGroupId)
                        }, "复制", 8, ll),
                        N("div", {
                          class: "setting-box-pop-item",
                          onClick: (p) => we(o.id, o.inGroupId)
                        }, "删除", 8, ol)
                      ])
                    ], 32)) : G("", !0)
                  ], 6))), 128))
                ], 2)
              ], 64)) : (b(), E("div", sl, [
                ke(t.$slots, "item", { data: e }, () => [
                  N("p", null, J(Math.round(e.s_width * 100) / 100) + "," + J(Math.round(e.s_height * 100) / 100), 1),
                  N("p", null, J(Math.round(e.s_x * 100) / 100) + "," + J(Math.round(e.s_y * 100) / 100), 1)
                ])
              ])),
              !e.isGroup && e.notGroup !== !0 && c(U) ? (b(), E("div", {
                key: 2,
                class: fe(["group-checkbox", e.checked ? "is-checked" : "", e.checkDis ? "disabled" : ""]),
                onClick: (o) => e.checkDis ? null : Bt(e)
              }, null, 10, rl)) : G("", !0),
              !i.seeModel && !c(F) && !c(U) && c(v) === null && c(P) === null ? (b(), E("div", {
                key: 3,
                class: fe(["setting-box", e.isGroup === !0 ? e.btnPosition === "right" ? "only-g" : e.btnPosition === "left" ? "only-g l" : e.btnPosition === "top" ? "only-g t" : e.btnPosition === "bottom" ? "only-g b" : e.btnPosition === "center" ? "only-g c" : "" : ""]),
                style: K({ display: e.showPop || e.showSet ? "flex" : "none" }),
                onMousedown: m((o) => null, ["prevent", "stop"])
              }, [
                St(Ct, {
                  iconObj: i.settingIcon,
                  onClick: m((o) => xt(e), ["prevent", "stop"])
                }, null, 8, ["iconObj", "onClick"])
              ], 38)) : G("", !0),
              e.showPop ? (b(), E("div", {
                key: 4,
                class: fe(["setting-box-pop", e.isGroup === !0 ? e.btnPosition === "right" ? "special" : e.btnPosition === "left" ? "special l" : e.btnPosition === "top" ? "special t" : e.btnPosition === "bottom" ? "special b" : e.btnPosition === "center" ? "special c" : "" : ""]),
                onMousedown: m((o) => null, ["prevent", "stop"])
              }, [
                e.isGroup === !0 ? ke(t.$slots, "setPopSpecial", {
                  key: 0,
                  data: z(e)
                }, () => [
                  N("div", {
                    class: "setting-box-pop-item",
                    onClick: (o) => ot(e.id, e.static !== !0)
                  }, J(e.static === !0 ? "解除" : "") + "锁定 ", 9, nl),
                  e.static !== !0 ? (b(), E("div", {
                    key: 0,
                    class: "setting-box-pop-item",
                    onClick: (o) => Fe(e.id)
                  }, " 微调 ", 8, il)) : G("", !0),
                  i.hideTit ? G("", !0) : (b(), E("div", {
                    key: 1,
                    class: "setting-box-pop-item",
                    onClick: (o) => {
                      tt(e.id), S("showTitPop", e.groupTit, e.id);
                    }
                  }, " 设置组合标题 ", 8, ul)),
                  N("div", {
                    class: "setting-box-pop-item",
                    onClick: (o) => Xe(e.id)
                  }, "解除组合", 8, al)
                ]) : ke(t.$slots, "setPopNormal", {
                  key: 1,
                  data: z(e)
                }, () => [
                  e.notGroup !== !0 ? (b(), E("div", {
                    key: 0,
                    class: "setting-box-pop-item",
                    onClick: (o) => wt(e.id)
                  }, "组合", 8, hl)) : G("", !0),
                  N("div", {
                    class: "setting-box-pop-item",
                    onClick: (o) => ot(e.id, e.static !== !0)
                  }, J(e.static === !0 ? "解除" : "") + "锁定 ", 9, cl),
                  e.static !== !0 ? (b(), E("div", {
                    key: 1,
                    class: "setting-box-pop-item",
                    onClick: (o) => Fe(e.id)
                  }, " 微调 ", 8, dl)) : G("", !0),
                  N("div", {
                    class: "setting-box-pop-item",
                    onClick: (o) => lt(e.id)
                  }, "复制", 8, fl),
                  N("div", {
                    class: "setting-box-pop-item",
                    onClick: (o) => we(e.id)
                  }, "删除", 8, gl)
                ])
              ], 34)) : G("", !0)
            ]),
            !i.seeModel && !c(F) && !c(U) && !e.showPop && !(e.isGroup && e.groupData.filter((o) => o.showPop).length > 0) && !e.move && e.static !== !0 && e.resizable !== !1 ? (b(), E(be, { key: 0 }, [
              c(W).indexOf("topLeft") !== -1 ? (b(), E("div", {
                key: 0,
                class: "resize-line top-left",
                onMousedown: m((o) => ce(o, e, "top-left"), ["prevent", "stop"])
              }, null, 40, pl)) : G("", !0),
              c(W).indexOf("top") !== -1 ? (b(), E("div", {
                key: 1,
                class: "resize-line top",
                onMousedown: m((o) => ce(o, e, "top"), ["prevent", "stop"])
              }, null, 40, yl)) : G("", !0),
              c(W).indexOf("topRight") !== -1 ? (b(), E("div", {
                key: 2,
                class: "resize-line top-right",
                onMousedown: m((o) => ce(o, e, "top-right"), ["prevent", "stop"])
              }, null, 40, vl)) : G("", !0),
              c(W).indexOf("left") !== -1 ? (b(), E("div", {
                key: 3,
                class: "resize-line left",
                onMousedown: m((o) => ce(o, e, "left"), ["prevent", "stop"])
              }, null, 40, _l)) : G("", !0),
              c(W).indexOf("right") !== -1 ? (b(), E("div", {
                key: 4,
                class: "resize-line right",
                onMousedown: m((o) => ce(o, e, "right"), ["prevent", "stop"])
              }, null, 40, xl)) : G("", !0),
              c(W).indexOf("bottomLeft") !== -1 ? (b(), E("div", {
                key: 5,
                class: "resize-line bottom-left",
                onMousedown: m((o) => ce(o, e, "bottom-left"), ["prevent", "stop"])
              }, null, 40, wl)) : G("", !0),
              c(W).indexOf("bottom") !== -1 ? (b(), E("div", {
                key: 6,
                class: "resize-line bottom",
                onMousedown: m((o) => ce(o, e, "bottom"), ["prevent", "stop"])
              }, null, 40, bl)) : G("", !0),
              c(W).indexOf("bottomRight") !== -1 ? (b(), E("div", {
                key: 7,
                class: "resize-line bottom-right",
                onMousedown: m((o) => ce(o, e, "bottom-right"), ["prevent", "stop"])
              }, null, 40, kl)) : G("", !0)
            ], 64)) : G("", !0)
          ], 42, Qt)
        ], 6))), 128)),
        (b(!0), E(be, null, ut(c(r), (e, s) => (b(), E("div", {
          class: fe([
            "shadow-bg",
            c(v) !== null ? "" : "not-move-animate",
            e.move ? "is-move" : "",
            e.drag ? "is-drag" : ""
          ]),
          style: K({
            width: e.s_width - c(R) * 2 + "px",
            height: e.s_height - c(ee) * 2 + "px",
            top: e.s_y + c(ee) + "px",
            left: e.s_x + c(R) + "px"
          }),
          key: s
        }, null, 6))), 128)),
        c(v) !== null || c(P) ? (b(), E("div", {
          key: 0,
          class: "drag-bg",
          style: K({
            width: c(f).s_width + "px",
            height: c(f).s_height + "px",
            top: c(f).s_y + "px",
            left: c(f).s_x + "px"
          })
        }, null, 4)) : G("", !0),
        N("div", {
          class: "height-bg",
          style: K({ height: (c(ae) > 0 ? c(ae) * q() + (i.seeModel ? i.seeModelMinBg : 220) : 0) + "px" })
        }, null, 4),
        i.showAuxiliary ? (b(), E(be, { key: 1 }, [
          c(Pe) !== null ? (b(), E("div", {
            key: 0,
            class: "auxiliary-line hor",
            style: K({ top: c(Pe) + "px", left: "0px" })
          }, null, 4)) : G("", !0),
          c(De) !== null ? (b(), E("div", {
            key: 1,
            class: "auxiliary-line hor",
            style: K({ top: c(De) + "px", left: "0px" })
          }, null, 4)) : G("", !0),
          c(Ce) !== null ? (b(), E("div", {
            key: 2,
            class: "auxiliary-line hor",
            style: K({ top: c(Ce) + "px", left: "0px" })
          }, null, 4)) : G("", !0),
          c(Ie) !== null ? (b(), E("div", {
            key: 3,
            class: "auxiliary-line",
            style: K({ top: "0px", left: c(Ie) + "px", height: c(ae) * q() + 220 + "px" })
          }, null, 4)) : G("", !0),
          c(Ge) !== null ? (b(), E("div", {
            key: 4,
            class: "auxiliary-line",
            style: K({ top: "0px", left: c(Ge) + "px", height: c(ae) * q() + 220 + "px" })
          }, null, 4)) : G("", !0),
          c(Te) !== null ? (b(), E("div", {
            key: 5,
            class: "auxiliary-line",
            style: K({ top: "0px", left: c(Te) + "px", height: c(ae) * q() + 220 + "px" })
          }, null, 4)) : G("", !0)
        ], 64)) : G("", !0),
        c(r).length === 0 ? (b(), E("div", Ml, [
          ke(t.$slots, "empty", {}, () => [
            l[0] || (l[0] = Kt(" 暂无数据 "))
          ])
        ])) : G("", !0)
      ])
    ], 4));
  }
}, Sl = [El], Pl = {
  install(i) {
    Sl.forEach((x) => {
      i.component("vueDragComponentPlus", x);
    });
  }
};
typeof window < "u" && window.Vue && window.Vue.use(Pl);
export {
  Pl as default
};
