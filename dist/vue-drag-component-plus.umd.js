(function(e,N){typeof exports=="object"&&typeof module<"u"?module.exports=N(require("vue")):typeof define=="function"&&define.amd?define(["vue"],N):(e=typeof globalThis<"u"?globalThis:e||self,e.vueDragComponentPlus=N(e.Vue))})(this,function(e){"use strict";const N={__name:"icon",props:{iconObj:{type:Object,requured:!0}},setup(g){return(z,c)=>{const y=e.resolveComponent("el-icon");return g.iconObj.type==="custom"?(e.openBlock(),e.createBlock(e.resolveDynamicComponent(g.iconObj.icon),e.normalizeProps(e.mergeProps({key:0},g.iconObj.attrs)),null,16)):g.iconObj.type==="el"?(e.openBlock(),e.createBlock(y,e.normalizeProps(e.mergeProps({key:1},g.iconObj.attrs)),{default:e.withCtx(()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(g.iconObj.icon)))]),_:1},16)):g.iconObj.type==="iconfont"?(e.openBlock(),e.createElementBlock("i",e.mergeProps({key:2,class:["icon iconfont","icon-"+g.iconObj.icon]},g.iconObj.attrs),null,16)):(e.openBlock(),e.createElementBlock("i",e.mergeProps({key:3,class:g.iconObj.type},g.iconObj.attrs),e.toDisplayString(g.iconObj.icon),17))}}},xe="",Z=["onMousedown"],j={class:"com-item-content"},ee={key:0,class:"setting-box-pop"},te=["onClick"],oe=["onMousedown"],ne=["onMousedown"],ie=["onMousedown"],le=["onMousedown"],re=["onMousedown"],se=["onMousedown"],ce=["onMousedown"],ae=["onMousedown"],de={key:0,class:"com-empty"},he=[{__name:"index",props:{insertResizeKeys:{type:Array,default:()=>["topLeft","top","topRight","left","right","bottomLeft","bottom","bottomRight"]},excludeResizeKeys:{type:Array,default:()=>[]},seeModel:{type:Boolean,default:!1},noEditModel:{type:Boolean,default:!1},itemMinWidth:{type:Number,default:15,validator(g,z){return g>=15}},itemMinHeight:{type:Number,default:15,validator(g,z){return g>=15}},settingIcon:{type:Object,default:()=>({icon:"设置"})}},setup(g,{expose:z}){const c=g,y=o=>{let t=o instanceof Array?[]:{};for(let n in o)t[n]=typeof o[n]=="object"?y(o[n]):o[n];return t},I=()=>{c.insertResizeKeys.forEach(o=>{c.excludeResizeKeys.indexOf(o)===-1&&u.value.push(o)})};e.watch(()=>[c.insertResizeKeys,c.excludeResizeKeys],()=>{I()});const u=e.ref([]);I();const H=e.ref(null);let M=null,P=null;const A=e.ref(null),R=e.ref(0),l=e.ref([]);let a=null,$=null,K=null;const fe=(o,t)=>{V(),a=t,l.value[a].move=!0,$=o.clientX-o.target.offsetParent.offsetLeft,K=o.clientY-o.target.offsetParent.offsetTop,window.addEventListener("mousemove",q),window.addEventListener("mouseup",F)},q=o=>{const t=o.clientX-$,n=o.clientY-K,r=t<=m("left")?m("left"):t>=m("right")?m("right"):t,i=n<=m("top")?m("top"):n>=m("bottom")?m("bottom"):n;l.value.filter(f=>f.static===!0).filter(f=>f.x===r&&f.width===l.value[a].width||f.x>r&&f.x<r+l.value[a].width||f.x+f.width>r&&f.x+f.width<r+l.value[a].width).filter(f=>f.y===i&&f.height===l.value[a].height||f.y>i&&f.y<i+l.value[a].height||f.y+f.height>i&&f.y+f.height<i+l.value[a].height).length===0?(l.value[a].x=r,l.value[a].y=i):(l.value.filter(s=>s.static===!0).filter(s=>s.x===r&&s.width===l.value[a].width||s.x>r&&s.x<r+l.value[a].width||s.x+s.width>r&&s.x+s.width<r+l.value[a].width).filter(s=>s.y===l.value[a].y&&s.height===l.value[a].height||s.y>l.value[a].y&&s.y<l.value[a].y+l.value[a].height||s.y+s.height>l.value[a].y&&s.y+s.height<l.value[a].y+l.value[a].height).length===0&&(l.value[a].x=r),l.value.filter(s=>s.static===!0).filter(s=>s.x===l.value[a].x&&s.width===l.value[a].width||s.x>l.value[a].x&&s.x<l.value[a].x+l.value[a].width||s.x+s.width>l.value[a].x&&s.x+s.width<l.value[a].x+l.value[a].width).filter(s=>s.y===i&&s.height===l.value[a].height||s.y>i&&s.y<i+l.value[a].height||s.y+s.height>i&&s.y+s.height<i+l.value[a].height).length===0&&(l.value[a].y=i)),x(),A.value.scrollTo(0,R.value-P)},F=()=>{window.removeEventListener("mousemove",q),window.removeEventListener("mouseup",F),delete l.value[a].move,a=null},m=o=>{switch(o){case"top":return 0;case"right":return M-l.value[a].width;case"bottom":return 999999999;case"left":return 0}};let p=null,D="",W=0,L=0,k=0,b=0,B=0,E=0,C=0,_=0,v=0,S=0;const w=(o,t,n)=>{V(),p=t,D=n,W=o.clientX,L=o.clientY,k=t.width,b=t.height,B=t.y,E=t.x;const r=l.value.filter(d=>d.static===!0&&(d.x<t.x?d.x+d.width>=t.x:d.x<=t.x+t.width)),i=l.value.filter(d=>d.static===!0&&(d.y<t.y?d.y+d.height>=t.y:d.y<=t.y+t.height)),O=r.filter(d=>d.y+d.height<=t.y).map(d=>d.y+d.height);O.length>0?C=Math.max(...O):C=0;const f=r.filter(d=>d.y>=t.y+t.height).map(d=>d.y);f.length>0?_=Math.max(...f):_=0;const X=i.filter(d=>d.x+d.width<=t.x).map(d=>d.x+d.width);X.length>0?v=Math.max(...X):v=0;const s=i.filter(d=>d.x>=t.x+t.width).map(d=>d.x);s.length>0?S=Math.max(...s):S=0,window.addEventListener("mousemove",U),window.addEventListener("mouseup",G)},U=o=>{const t=k+(o.clientX-W),n=b+(o.clientY-L),r=k-(o.clientX-W),i=b-(o.clientY-L),O=B+(o.clientY-L),f=E+(o.clientX-W);switch(D){case"top-left":p.height=i<c.itemMinHeight?c.itemMinHeight:i>h("top")?h("top"):i,p.y=i<c.itemMinHeight?B+b-c.itemMinHeight:i>h("top")?C:O,p.width=r<c.itemMinWidth?c.itemMinWidth:r>h("left")?h("left"):r,p.x=r<c.itemMinWidth?E+k-c.itemMinWidth:r>h("left")?v:f;break;case"top":p.height=i<c.itemMinHeight?c.itemMinHeight:i>h("top")?h("top"):i,p.y=i<c.itemMinHeight?B+b-c.itemMinHeight:i>h("top")?C:O;break;case"top-right":p.height=i<c.itemMinHeight?c.itemMinHeight:i>h("top")?h("top"):i,p.y=i<c.itemMinHeight?B+b-c.itemMinHeight:i>h("top")?C:O,p.width=t<c.itemMinWidth?c.itemMinWidth:t>h("right")?h("right"):t;break;case"left":p.width=r<c.itemMinWidth?c.itemMinWidth:r>h("left")?h("left"):r,p.x=r<c.itemMinWidth?E+k-c.itemMinWidth:r>h("left")?v:f;break;case"right":p.width=t<c.itemMinWidth?c.itemMinWidth:t>h("right")?h("right"):t;break;case"bottom-left":p.height=n<c.itemMinHeight?c.itemMinHeight:n>h("bottom")?h("bottom"):n,p.width=r<c.itemMinWidth?c.itemMinWidth:r>h("left")?h("left"):r,p.x=r<c.itemMinWidth?E+k-c.itemMinWidth:r>h("left")?v:f;break;case"bottom":p.height=n<c.itemMinHeight?c.itemMinHeight:n>h("bottom")?h("bottom"):n;break;case"bottom-right":p.height=n<c.itemMinHeight?c.itemMinHeight:n>h("bottom")?h("bottom"):n,p.width=t<c.itemMinWidth?c.itemMinWidth:t>h("right")?h("right"):t;break}x(),A.value.scrollTo(0,R.value-P)},G=o=>{D="",p=null,window.removeEventListener("mousemove",U),window.removeEventListener("mouseup",G)},h=o=>{switch(o){case"top":return B+b-C;case"left":return E+k-v;case"right":return(S>0?S:M)-E;case"bottom":return _>0?_-B:999999999}},x=()=>{const o=l.value.map(t=>t.y+t.height);o.length>0?R.value=Math.max(...o)+50:R.value=0};e.onMounted(()=>{J.observe(H.value)});const J=new ResizeObserver(o=>{ye(M===o[0].contentRect.width?null:o[0].contentRect.width,P===o[0].contentRect.height?null:o[0].contentRect.height)});let T=!1;const ge=(o=[],t=null)=>{l.value=y(o),t!==null?e.nextTick(()=>{const r=H.value.getBoundingClientRect().width/t;l.value.forEach(i=>{i.width*=r,i.height*=r,i.x*=r,i.y*=r}),x()}):x(),T=!0,setTimeout(()=>{T=!1},500)},pe=o=>{const t=y(o);t.id||(t.id=new Date().getTime()+""),t.x=0;const n=l.value.map(r=>r.y+r.height);n.length>0?t.y=Math.max(...n):t.y=0,l.value.push(t),x()},Q=o=>{const t=l.value.findIndex(n=>n.id===o);if(t!==-1)l.value.splice(t,1),x();else try{}catch{}},ue=o=>{if(o.id){const t=y(o),n=l.value.findIndex(r=>r.id===t.id);if(n!==-1)l.value[n]=t,x();else try{}catch{}}else try{}catch{}},ye=(o,t)=>{if(o!==null){const n=M?o/M:1;M=o,T||(l.value.forEach(r=>{r.width*=n,r.height*=n,r.x*=n,r.y*=n}),x())}t!==null&&(P=t)},me=()=>({data:y(l.value),width:M}),we=o=>{o.showPop||(l.value.forEach(t=>{delete t.showPop}),o.showPop=!0,window.addEventListener("click",V))},V=()=>{l.value.forEach(o=>{delete o.showPop}),window.removeEventListener("click",V)};return e.onBeforeUnmount(()=>{J.unobserve(H.value),window.removeEventListener("click",V)}),z({init:ge,addItem:pe,deleteItem:Q,updateItem:ue,getData:me}),(o,t)=>(e.openBlock(),e.createElementBlock("div",{class:"vue-drag-component-plus",ref_key:"pageRef",ref:H},[e.createElementVNode("div",{class:"content-box",ref_key:"boxRef",ref:A},[(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(e.unref(l),(n,r)=>(e.openBlock(),e.createElementBlock("div",{class:e.normalizeClass(["com-item",g.seeModel||n.static===!0||n.dragable===!1?"":"can-drag",n.move?"is-move":""]),style:e.normalizeStyle({width:n.width+"px",height:n.height+"px",top:n.y+"px",left:n.x+"px"}),key:r,onMousedown:e.withModifiers(i=>g.seeModel||n.static===!0||n.dragable===!1?null:fe(i,r),["prevent"])},[e.createElementVNode("div",j,[e.renderSlot(o.$slots,"item",{$index:r,data:n},()=>[e.createTextVNode(e.toDisplayString(r),1)]),!g.seeModel&&!g.noEditModel&&e.unref(a)===null&&e.unref(p)===null?(e.openBlock(),e.createElementBlock("div",{key:0,class:"setting-box",style:e.normalizeStyle({display:n.showPop?"flex":"none"}),onMousedown:e.withModifiers(i=>null,["prevent","stop"])},[e.createVNode(N,{iconObj:g.settingIcon,onClick:e.withModifiers(i=>we(n),["prevent","stop"])},null,8,["iconObj","onClick"]),n.showPop?(e.openBlock(),e.createElementBlock("div",ee,[e.renderSlot(o.$slots,"setPopNormal",{$index:r,data:y(n)},()=>[e.createElementVNode("div",{class:"setting-box-pop-item",onClick:i=>Q(n.id)},"删除",8,te)])])):e.createCommentVNode("",!0)],36)):e.createCommentVNode("",!0)]),!g.seeModel&&n.static!==!0&&n.resizable!==!1?(e.openBlock(),e.createElementBlock(e.Fragment,{key:0},[e.unref(u).indexOf("topLeft")!==-1?(e.openBlock(),e.createElementBlock("div",{key:0,class:"resize-line top-left",onMousedown:e.withModifiers(i=>w(i,n,"top-left"),["prevent","stop"])},null,40,oe)):e.createCommentVNode("",!0),e.unref(u).indexOf("top")!==-1?(e.openBlock(),e.createElementBlock("div",{key:1,class:"resize-line top",onMousedown:e.withModifiers(i=>w(i,n,"top"),["prevent","stop"])},null,40,ne)):e.createCommentVNode("",!0),e.unref(u).indexOf("topRight")!==-1?(e.openBlock(),e.createElementBlock("div",{key:2,class:"resize-line top-right",onMousedown:e.withModifiers(i=>w(i,n,"top-right"),["prevent","stop"])},null,40,ie)):e.createCommentVNode("",!0),e.unref(u).indexOf("left")!==-1?(e.openBlock(),e.createElementBlock("div",{key:3,class:"resize-line left",onMousedown:e.withModifiers(i=>w(i,n,"left"),["prevent","stop"])},null,40,le)):e.createCommentVNode("",!0),e.unref(u).indexOf("right")!==-1?(e.openBlock(),e.createElementBlock("div",{key:4,class:"resize-line right",onMousedown:e.withModifiers(i=>w(i,n,"right"),["prevent","stop"])},null,40,re)):e.createCommentVNode("",!0),e.unref(u).indexOf("bottomLeft")!==-1?(e.openBlock(),e.createElementBlock("div",{key:5,class:"resize-line bottom-left",onMousedown:e.withModifiers(i=>w(i,n,"bottom-left"),["prevent","stop"])},null,40,se)):e.createCommentVNode("",!0),e.unref(u).indexOf("bottom")!==-1?(e.openBlock(),e.createElementBlock("div",{key:6,class:"resize-line bottom",onMousedown:e.withModifiers(i=>w(i,n,"bottom"),["prevent","stop"])},null,40,ce)):e.createCommentVNode("",!0),e.unref(u).indexOf("bottomRight")!==-1?(e.openBlock(),e.createElementBlock("div",{key:7,class:"resize-line bottom-right",onMousedown:e.withModifiers(i=>w(i,n,"bottom-right"),["prevent","stop"])},null,40,ae)):e.createCommentVNode("",!0)],64)):e.createCommentVNode("",!0)],46,Z))),128)),e.createElementVNode("div",{class:"height-bg",style:e.normalizeStyle({height:e.unref(R)+"px"})},null,4),e.unref(l).length===0?(e.openBlock(),e.createElementBlock("div",de,[e.renderSlot(o.$slots,"empty",{},()=>[e.createTextVNode(" 暂无数据 ")])])):e.createCommentVNode("",!0)],512)],512))}}],Y={install(g){he.forEach(z=>{g.component("vueDragComponentPlus",z)})}};return typeof window<"u"&&window.Vue&&window.Vue.use(Y),Y});
