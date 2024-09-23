(function(t,L){typeof exports=="object"&&typeof module<"u"?module.exports=L(require("vue")):typeof define=="function"&&define.amd?define(["vue"],L):(t=typeof globalThis<"u"?globalThis:t||self,t.vueDragComponentPlus=L(t.Vue))})(this,function(t){"use strict";const L={__name:"icon",props:{iconObj:{type:Object,requured:!0}},setup(m){return(P,ht)=>{const R=t.resolveComponent("el-icon");return m.iconObj.type==="custom"?(t.openBlock(),t.createBlock(t.resolveDynamicComponent(m.iconObj.icon),t.normalizeProps(t.mergeProps({key:0},m.iconObj.attrs)),null,16)):m.iconObj.type==="el"?(t.openBlock(),t.createBlock(R,t.normalizeProps(t.mergeProps({key:1},m.iconObj.attrs)),{default:t.withCtx(()=>[(t.openBlock(),t.createBlock(t.resolveDynamicComponent(m.iconObj.icon)))]),_:1},16)):m.iconObj.type==="iconfont"?(t.openBlock(),t.createElementBlock("i",t.mergeProps({key:2,class:["icon iconfont","icon-"+m.iconObj.icon]},m.iconObj.attrs),null,16)):(t.openBlock(),t.createElementBlock("i",t.mergeProps({key:3,class:m.iconObj.type},m.iconObj.attrs),t.toDisplayString(m.iconObj.icon),17))}}},re="",St=["onMousedown"],Vt={class:"com-item-box"},Ot=["title"],Nt={class:"com-item-box-content"},zt=["onClick"],Gt=["onClick"],Pt={key:1,class:"com-item-box-content"},Wt=["onClick"],Ht=["onClick"],Tt=["onClick"],It=["onClick"],vt=["onClick"],Yt=["onMousedown"],Xt=["onMousedown"],bt=["onMousedown"],Lt=["onMousedown"],Rt=["onMousedown"],$t=["onMousedown"],_t=["onMousedown"],At=["onMousedown"],Kt={key:2,class:"com-empty"},Ft=[{__name:"index",props:{insertResizeKeys:{type:Array,default:()=>["topLeft","top","topRight","left","right","bottomLeft","bottom","bottomRight"]},excludeResizeKeys:{type:Array,default:()=>[]},seeModel:{type:Boolean,default:!1},seeModelMinBg:{type:Number,default:50,validator(m,P){return m>=0}},itemMinWidth:{type:Number,default:15,validator(m,P){return m>=15}},itemMinHeight:{type:Number,default:15,validator(m,P){return m>=15}},ySpace:{type:Number,default:7,validator(m,P){return m>=0}},settingIcon:{type:Object,default:()=>({icon:"设置"})},hideTit:{type:Boolean,default:!1},hideAuxiliary:{type:Boolean,default:!1},auxiliarySpace:{type:Number,default:15,validator(m,P){return m>=1}}},emits:["showGroup","updateChecked","showTitPop"],setup(m,{expose:P,emit:ht}){const R=ht,w=m,D=r=>{let l=r instanceof Array?[]:{};for(let e in r)l[e]=typeof r[e]=="object"?D(r[e]):r[e];return l},dt=()=>{w.insertResizeKeys.forEach(r=>{w.excludeResizeKeys.indexOf(r)===-1&&W.value.push(r)})};t.watch(()=>[w.insertResizeKeys,w.excludeResizeKeys],()=>{dt()});const W=t.ref([]);dt();const z=t.ref(null);let H=null,pt=null;const qt=t.ref(null),F=t.ref(0),q=t.ref(null),U=t.ref(null),J=t.ref(null),Q=t.ref(null),$=r=>{const l=D(r);if(r===null)q.value=null,U.value=null,J.value=null,Q.value=null;else{const e=getComputedStyle(z.value),i=parseInt(e.getPropertyValue("--auxiliary-width").trim()),o=d.value.filter(n=>n.id!==l.id).map(n=>n.y),x=d.value.filter(n=>n.id!==l.id).map(n=>n.y+n.height-1),p=[...o,...x];p.sort(),p.filter(n=>n<=l.y&&l.y-w.auxiliarySpace<n||n>=l.y&&l.y+w.auxiliarySpace>n).length>0?q.value=l.y:q.value=null,p.filter(n=>n<=l.y+l.height-1&&l.y+l.height-1-w.auxiliarySpace<n||n>=l.y+l.height-1&&l.y+l.height-1+w.auxiliarySpace>n).length>0?U.value=l.y+l.height-i:U.value=null;const M=d.value.filter(n=>n.id!==l.id).map(n=>n.x),g=d.value.filter(n=>n.id!==l.id).map(n=>n.x+n.width-1),u=[...M,...g];u.sort(),u.filter(n=>n<=l.x&&l.x-w.auxiliarySpace<n||n>=l.x&&l.x+w.auxiliarySpace>n).length>0?J.value=l.x:J.value=null,u.filter(n=>n<=l.x+l.width-1&&l.x+l.width-1-w.auxiliarySpace<n||n>=l.x+l.width-1&&l.x+l.width-1+w.auxiliarySpace>n).length>0?Q.value=l.x+l.width-i:Q.value=null}},d=t.ref([]),Ut=(r,l)=>{let e=r.matches||r.webkitMatchesSelector||r.mozMatchesSelector||r.msMatchesSelector;for(;r&&!e.call(r,l);)r=r.parentElement;return r};let E=null,ut=null,yt=null;const S=t.ref({}),Jt=(r,l)=>{Z(),E=l,S.value=D(d.value[E]),d.value[E].move=!0,$(d.value[E]);const e=Ut(r.target,".com-item");ut=r.clientX-e.offsetLeft,yt=r.clientY-e.offsetTop,window.addEventListener("mousemove",ft),window.addEventListener("mouseup",gt)},ft=r=>{const l=r.clientX-ut,e=r.clientY-yt,i=l<=T("left")?T("left"):l>=T("right")?T("right"):l,o=e<=T("top")?T("top"):e>=T("bottom")?T("bottom"):e,x=i-d.value[E].x,p=o-d.value[E].y,M=`${x>0?"right":x<0?"left":""}_${p>0?"bottom":p<0?"top":""}`;d.value[E].x=i,d.value[E].y=o,$(d.value[E]);let g=D(d.value.filter(u=>u.move!==!0).filter(u=>u.x<i&&u.x+u.width>i||u.x===i||u.x>i&&u.x<i+d.value[E].width).filter(u=>u.y<o&&u.y+u.height>o||u.y===o||u.y>o&&u.y<o+d.value[E].height));if(g.length===0)S.value.x=i,S.value.y=o;else{if(M.indexOf("top")!==-1){g=g.filter(h=>h.y<S.value.y);const u=Math.min(...g.map(h=>h.y+h.height));g.forEach(h=>{Math.abs(h.y+h.height-u)<5&&(h.y=u-h.height)});let n=S.value.y-o,a=!0,c=[...g];const s=h=>{D(d.value.filter(y=>y.move!==!0&&y.y+y.height-h.y<=n+3&&y.y+y.height-h.y>=0).filter(y=>y.x<h.x&&y.x+y.width>h.x||y.x>=h.x&&y.x<h.x+h.width)).forEach(y=>{y.y+y.height!==h.y&&(y.y=h.y-y.height),c.findIndex(C=>C.id===y.id)===-1&&(c.push(y),s(y))})};if(g.forEach(h=>{s(h)}),c.sort((h,k)=>{const y=h.y,C=k.y;return y-C}),(c.length===0||c.filter(h=>h.y===0).length>0)&&(a=!1),a){let h=0;c.filter(y=>y.y===c[0].y).forEach(y=>{D(d.value.filter(O=>O.move!==!0&&O.y+O.height<y.y).filter(O=>O.x<y.x&&O.x+O.width>y.x||O.x>=y.x&&O.x<y.x+y.width)).forEach(O=>{O.y+O.height>h&&(h=O.y+O.height)})}),h=c[0].y-h,h<n&&(n=h),c.forEach(y=>{y.y-=n,d.value.filter(C=>C.id===y.id)[0].y=y.y}),S.value.x=i,S.value.y=d.value.filter(y=>y.id===c[c.length-1].id)[0].y+d.value.filter(y=>y.id===c[c.length-1].id)[0].height}else{const h=Math.min(...g.map(k=>k.y));h-o>=-7&&h-o<7&&(g.filter(k=>k.y<S.value.y).forEach(k=>{k.y+=d.value[E].height,d.value.filter(C=>C.id===k.id)[0].y=k.y;const y=C=>{d.value.filter(V=>V.move!==!0&&V.id!==C.id).filter(V=>V.x<C.x&&V.x+V.width>C.x||V.x===C.x||V.x>C.x&&V.x<C.x+C.width).filter(V=>V.y<C.y&&V.y+V.height>C.y||V.y===C.y||V.y>C.y&&V.y<C.y+C.height).forEach(V=>{V.y=C.y+C.height,y(V)})};y(k)}),S.value.x=i,S.value.y=h)}g=D(d.value.filter(h=>h.move!==!0).filter(h=>h.x<i&&h.x+h.width>i||h.x===i||h.x>i&&h.x<i+d.value[E].width).filter(h=>h.y<o&&h.y+h.height>o||h.y===o||h.y>o&&h.y<o+d.value[E].height))}if(M.indexOf("bottom")!==-1){const u=Math.max(...g.map(n=>n.y+n.height));if(u-(o+d.value[E].height)>=-7&&u-(o+d.value[E].height)<7){let n=!0;g.filter(a=>a.y>S.value.y).forEach(a=>{a.y-=d.value[E].height,d.value.filter(s=>s.id===a.id)[0].y=a.y;const c=d.value.filter(s=>s.move!==!0&&s.id!==a.id).filter(s=>s.x<a.x&&s.x+s.width>a.x||s.x===a.x||s.x>a.x&&s.x<a.x+a.width).filter(s=>s.y<a.y&&s.y+s.height>a.y||s.y===a.y||s.y>a.y&&s.y<a.y+a.height);if(c.length>0){a.y=Math.max(...c.map(h=>h.y+h.height)),d.value.filter(h=>h.id===a.id)[0].y=a.y;const s=h=>{d.value.filter(y=>y.id!==h.id).filter(y=>y.x<h.x&&y.x+y.width>h.x||y.x===h.x||y.x>h.x&&y.x<h.x+h.width).filter(y=>y.y<h.y&&y.y+y.height>h.y||y.y===h.y||y.y>h.y&&y.y<h.y+h.height).forEach(y=>{y.y=h.y+h.height,y.move===!0&&(S.value.y=y.y,n=!1),s(y)})};s(a)}}),S.value.x=i,n&&(S.value.y=u-d.value[E].height),g=D(d.value.filter(a=>a.move!==!0).filter(a=>a.x<i&&a.x+a.width>i||a.x===i||a.x>i&&a.x<i+d.value[E].width).filter(a=>a.y<o&&a.y+a.height>o||a.y===o||a.y>o&&a.y<o+d.value[E].height))}}if(((M.indexOf("top")!==-1||M.indexOf("bottom")!==-1)&&(M.indexOf("right")!==-1||M.indexOf("left")!==-1)&&Math.abs(x)>8||M.indexOf("top")===-1&&M.indexOf("bottom")===-1&&(M.indexOf("right")!==-1||M.indexOf("left")!==-1))&&g.length>0){g.sort((n,a)=>{const c=n.y,s=a.y;return c-s});let u=!0;for(let n=0;n<g.length;n++){if(u){const a=D(d.value);for(let c=0;c<=n;c++){let s=null;const h=a.filter(k=>k.move!==!0&&k.y<g[c].y).filter(k=>k.x<g[c].x&&k.x+k.width>g[c].x||k.x===g[c].x||k.x>g[c].x&&k.x<g[c].x+g[c].width);if(h.length===0?s=0:s=Math.max(...h.map(k=>k.y+k.height)),c===n){if(g[c].y-(g[c].y+g[c].height-o)<s){u=!1;break}}else if(g[c].y-g[n].height<s){u=!1;break}else a.filter(k=>k.id===g[c].id)[0].y-=g[n].height}}if(u){g[n].y-=g[n].y+g[n].height-o,d.value.filter(a=>a.id===g[n].id)[0].y=g[n].y;for(let a=n;a>0;a--)g[n-1].y-=g[n].height,d.value.filter(c=>c.id===g[n-1].id)[0].y=g[n-1].y}else g.filter(a=>a.id===g[n].id).forEach(a=>{a.y+=d.value[E].y+d.value[E].height-a.y,d.value.filter(s=>s.id===a.id)[0].y=a.y;const c=s=>{d.value.filter(k=>k.move!==!0&&k.id!==s.id).filter(k=>k.x<s.x&&k.x+k.width>s.x||k.x===s.x||k.x>s.x&&k.x<s.x+s.width).filter(k=>k.y<s.y&&k.y+k.height>s.y||k.y===s.y||k.y>s.y&&k.y<s.y+s.height).forEach(k=>{k.y=s.y+s.height,c(k)})};c(a)})}S.value.x=i}}N(!1)},gt=()=>{window.removeEventListener("mousemove",ft),window.removeEventListener("mouseup",gt),delete d.value[E].move,d.value[E].x=S.value.x,d.value[E].y=S.value.y,E=null,$(null),N()},T=r=>{switch(r){case"top":return 0;case"right":return H-d.value[E].width;case"bottom":return 999999999;case"left":return 0}};let f=null,at="",tt=0,et=0,v=0,Y=0,X=0,b=0,_=0,lt=0,A=0,ot=0;const I=(r,l,e)=>{Z(),f=l,at=e,tt=r.clientX,et=r.clientY,v=l.width,Y=l.height,X=l.y,b=l.x,f.drag=!0,$(f);const i=d.value.filter(u=>u.static===!0&&(u.x<l.x?u.x+u.width>=l.x:u.x<=l.x+l.width)),o=d.value.filter(u=>u.static===!0&&(u.y<l.y?u.y+u.height>=l.y:u.y<=l.y+l.height)),x=i.filter(u=>u.y+u.height<=l.y).map(u=>u.y+u.height);x.length>0?_=Math.max(...x):_=0;const p=i.filter(u=>u.y>=l.y+l.height).map(u=>u.y);p.length>0?lt=Math.min(...p):lt=0;const M=o.filter(u=>u.x+u.width<=l.x).map(u=>u.x+u.width);M.length>0?A=Math.max(...M):A=0;const g=o.filter(u=>u.x>=l.x+l.width).map(u=>u.x);g.length>0?ot=Math.min(...g):ot=0,window.addEventListener("mousemove",xt),window.addEventListener("mouseup",wt)},xt=r=>{const l=v+(r.clientX-tt),e=Y+(r.clientY-et),i=v-(r.clientX-tt),o=Y-(r.clientY-et),x=X+(r.clientY-et),p=b+(r.clientX-tt),M=getComputedStyle(z.value),g=parseInt(M.getPropertyValue("--com-item-border-width").trim()),u=parseInt(M.getPropertyValue("--group-tit-height").trim());switch(at){case"top-left":if(f.height=o<w.itemMinHeight?w.itemMinHeight:o>B("top")?B("top"):o,f.y=o<w.itemMinHeight?X+Y-w.itemMinHeight:o>B("top")?_:x,f.width=i<w.itemMinWidth?w.itemMinWidth:i>B("left")?B("left"):i,f.x=i<w.itemMinWidth?b+v-w.itemMinWidth:i>B("left")?A:p,f.isGroup===!0){const a=f.width-2*g,c=f.height-2*g-(f.groupTit?u:0);f.groupData.forEach(s=>{s.width=a*s.groupW,s.x=a*s.groupX,s.height=c*s.groupH,s.y=c*s.groupY})}break;case"top":if(f.height=o<w.itemMinHeight?w.itemMinHeight:o>B("top")?B("top"):o,f.y=o<w.itemMinHeight?X+Y-w.itemMinHeight:o>B("top")?_:x,f.isGroup===!0){const a=f.height-2*g-(f.groupTit?u:0);f.groupData.forEach(c=>{c.height=a*c.groupH,c.y=a*c.groupY})}break;case"top-right":if(f.height=o<w.itemMinHeight?w.itemMinHeight:o>B("top")?B("top"):o,f.y=o<w.itemMinHeight?X+Y-w.itemMinHeight:o>B("top")?_:x,f.width=l<w.itemMinWidth?w.itemMinWidth:l>B("right")?B("right"):l,f.isGroup===!0){const a=f.width-2*g,c=f.height-2*g-(f.groupTit?u:0);f.groupData.forEach(s=>{s.width=a*s.groupW,s.x=a*s.groupX,s.height=c*s.groupH,s.y=c*s.groupY})}break;case"left":if(f.width=i<w.itemMinWidth?w.itemMinWidth:i>B("left")?B("left"):i,f.x=i<w.itemMinWidth?b+v-w.itemMinWidth:i>B("left")?A:p,f.isGroup===!0){const a=f.width-2*g;f.groupData.forEach(c=>{c.width=a*c.groupW,c.x=a*c.groupX})}break;case"right":if(f.width=l<w.itemMinWidth?w.itemMinWidth:l>B("right")?B("right"):l,f.isGroup===!0){const a=f.width-2*g;f.groupData.forEach(c=>{c.width=a*c.groupW,c.x=a*c.groupX})}break;case"bottom-left":if(f.height=e<w.itemMinHeight?w.itemMinHeight:e>B("bottom")?B("bottom"):e,f.width=i<w.itemMinWidth?w.itemMinWidth:i>B("left")?B("left"):i,f.x=i<w.itemMinWidth?b+v-w.itemMinWidth:i>B("left")?A:p,f.isGroup===!0){const a=f.width-2*g,c=f.height-2*g-(f.groupTit?u:0);f.groupData.forEach(s=>{s.width=a*s.groupW,s.x=a*s.groupX,s.height=c*s.groupH,s.y=c*s.groupY})}break;case"bottom":if(f.height=e<w.itemMinHeight?w.itemMinHeight:e>B("bottom")?B("bottom"):e,f.isGroup===!0){const a=f.height-2*g-(f.groupTit?u:0);f.groupData.forEach(c=>{c.height=a*c.groupH,c.y=a*c.groupY})}break;case"bottom-right":if(f.height=e<w.itemMinHeight?w.itemMinHeight:e>B("bottom")?B("bottom"):e,f.width=l<w.itemMinWidth?w.itemMinWidth:l>B("right")?B("right"):l,f.isGroup===!0){const a=f.width-2*g,c=f.height-2*g-(f.groupTit?u:0);f.groupData.forEach(s=>{s.width=a*s.groupW,s.x=a*s.groupX,s.height=c*s.groupH,s.y=c*s.groupY})}break}$(f);let n=D(d.value.filter(a=>a.drag!==!0).filter(a=>a.x<f.x&&a.x+a.width>f.x||a.x===f.x||a.x>f.x&&a.x<f.x+f.width).filter(a=>a.y<f.y&&a.y+a.height>f.y||a.y===f.y||a.y>f.y&&a.y<f.y+f.height));if(n.length>0){n.sort((a,c)=>{const s=a.y,h=c.y;return s-h});for(let a=0;a<n.length;a++)n.filter(c=>c.id===n[a].id).forEach(c=>{c.y+=f.y+f.height-c.y,d.value.filter(h=>h.id===c.id)[0].y=c.y;const s=h=>{d.value.filter(y=>y.drag!==!0&&y.id!==h.id).filter(y=>y.x<h.x&&y.x+y.width>h.x||y.x===h.x||y.x>h.x&&y.x<h.x+h.width).filter(y=>y.y<h.y&&y.y+y.height>h.y||y.y===h.y||y.y>h.y&&y.y<h.y+h.height).forEach(y=>{y.y=h.y+h.height,s(y)})};s(c)})}N(!1)},wt=r=>{delete f.drag,at="",f=null,$(null),window.removeEventListener("mousemove",xt),window.removeEventListener("mouseup",wt),N()},B=r=>{switch(r){case"top":return X+Y-_;case"left":return b+v-A;case"right":return(ot>0?ot:H)-b;case"bottom":return lt>0?lt-X:999999999}},N=(r=!0)=>{r===!0&&kt();const l=d.value.map(e=>e.y+e.height);l.length>0?F.value=Math.max(...l):F.value=0};t.watch(()=>w.ySpace,()=>{w.ySpace>=0&&kt()});const kt=()=>{const r=D(d.value).sort((l,e)=>{const i=l.y,o=e.y;return i-o});for(let l=0;l<r.length;l++){if(l===0&&r[l].y>0){const e=r[l].y;for(let i=l;i<r.length;i++)r[i].y-=e,d.value.filter(o=>o.id===r[i].id)[0].y=r[i].y}if(l<r.length-1&&r[l+1].y>r[l].y+r[l].height){const e=D(r.slice(0,l+1));if(r[l+1].y>Math.max(...e.map(i=>i.y+i.height))){const i=r[l+1].y-Math.max(...e.map(o=>o.y+o.height));for(let o=l+1;o<r.length;o++)r[o].y-=i,d.value.filter(x=>x.id===r[o].id)[0].y=r[o].y}}}for(let l=0;l<r.length-1;l++){let e=r.findIndex(i=>i.y===r[l].y+r[l].height);if(e!==-1)for(let i=e;i<r.length;i++)r[i].y+=w.ySpace,d.value.filter(o=>o.id===r[i].id)[0].y=r[i].y}};t.onMounted(()=>{Mt.observe(z.value)});const Mt=new ResizeObserver(r=>{Zt(H===r[0].contentRect.width?null:r[0].contentRect.width,pt===r[0].contentRect.height?null:r[0].contentRect.height)});let st=!1;const Qt=(r=[],l=null)=>{d.value=D(r),d.value.filter(e=>e.isGroup===!0).forEach(e=>{if(e.isGroup===!0)if(e.groupData.length<2)j(e.id);else{const i=nt(e.groupData,e);it(i)}}),l!==null?t.nextTick(()=>{const i=z.value.getBoundingClientRect().width/l,o=getComputedStyle(z.value),x=parseInt(o.getPropertyValue("--com-item-border-width").trim()),p=parseInt(o.getPropertyValue("--group-tit-height").trim());d.value.forEach(M=>{if(M.width*=i,M.height*=i,M.x*=i,M.y*=i,M.isGroup===!0){const g=M.width-2*x,u=M.height-2*x-(M.groupTit?p:0);M.groupData.forEach(n=>{n.width=g*n.groupW,n.x=g*n.groupX,n.height=u*n.groupH,n.y=u*n.groupY})}}),N()}):N(),st=!0,setTimeout(()=>{st=!1},500)},mt=(r,l,e)=>{const i=l.map(p=>p.y),o=Math.max(...i),x=l.filter(p=>p.y+p.height>o);x.sort((p,M)=>{const g=p.x,u=M.x;return g-u});for(let p=0;p<x.length;p++){if(p===0&&x[p].x>=r.width){r.y=o,r.x=0;break}if(x.length>1&&p!==x.length-1&&x[p].x+x[p].width+r.width<=x[p+1].x){r.y=o,r.x=x[p].x+x[p].width;break}if(p===x.length-1&&x[p].x+x[p].width+r.width<=e){r.y=o,r.x=x[p].x+x[p].width;break}}if(r.y==null){r.x=0;const p=l.map(M=>M.y+M.height);r.y=Math.max(...p)}},rt=(r,l=null,e=!1)=>{const i=D(r),o=d.value.filter(x=>x.id===l);if(i.id||(i.id=new Date().getTime()+""),l&&o.length!==1){try{}catch{}return}if(e!==!0)if(delete i.x,delete i.y,l){const x=getComputedStyle(z.value),p=parseInt(x.getPropertyValue("--com-item-border-width").trim());mt(i,o[0].groupData,o[0].width-2*p)}else d.value.length===0?(i.x=0,i.y=0):mt(i,d.value,H);if(l){o[0].groupData.push(i);const x=nt(o[0].groupData,o[0]);it(x)}else d.value.push(i);N()},K=(r,l=null)=>{let e=-1;const i=d.value.filter(o=>o.id===l);if(l?i.length===1&&(e=i[0].groupData.findIndex(o=>o.id===r)):e=d.value.findIndex(o=>o.id===r),e!==-1){if(l)if(i[0].groupData.splice(e,1),i[0].groupData.length===1)j(l);else{const o=nt(i[0].groupData,i[0]);it(o)}else d.value.splice(e,1);N()}else try{}catch{}},it=r=>{if(r.id){const l=D(r);let e=-1;const i=d.value.filter(o=>o.id===l.inGroupId);if(l.inGroupId?i.length===1&&(e=i[0].groupData.findIndex(o=>o.id===l.id)):e=d.value.findIndex(o=>o.id===l.id),e!==-1)l.inGroupId?i[0].groupData[e]=l:d.value[e]=l,N();else try{}catch{}}else try{}catch{}},Zt=(r,l)=>{if(r!==null){const e=H?r/H:1;H=r;const i=getComputedStyle(z.value),o=parseInt(i.getPropertyValue("--com-item-border-width").trim()),x=parseInt(i.getPropertyValue("--group-tit-height").trim());st||(d.value.forEach(p=>{if(p.width*=e,p.height*=e,p.x*=e,p.y*=e,p.isGroup===!0){const M=p.width-2*o,g=p.height-2*o-(p.groupTit?x:0);p.groupData.forEach(u=>{u.width=M*u.groupW,u.x=M*u.groupX,u.height=g*u.groupH,u.y=g*u.groupY})}}),N())}l!==null&&(pt=l)},Et=r=>{r.showPop||(d.value.forEach(l=>{delete l.showPop,l.groupData&&l.groupData.forEach(e=>{delete e.showPop})}),r.showPop=!0,window.addEventListener("click",Z))},Z=()=>{d.value.forEach(r=>{delete r.showPop,r.groupData&&r.groupData.forEach(l=>{delete l.showPop})}),window.removeEventListener("click",Z)},G=t.ref(!1),Bt=r=>{const l=d.value.findIndex(e=>e.id===r);if(l!==-1)d.value[l].checked=!0,d.value[l].disabled=!0,G.value=!0,R("showGroup",G.value);else try{}catch{}},Ct=()=>{G.value=!1,d.value.forEach(r=>{delete r.checked,delete r.disabled,r.groupData&&r.groupData.forEach(l=>{delete l.checked,delete l.disabled})}),R("showGroup",G.value)},jt=r=>{r.checked=!r.checked,R("updateChecked",d.value.filter(l=>l.checked).length)},nt=(r,l)=>{const e=D(r),i=D(l);e.sort((n,a)=>{const c=n.x,s=a.x;return c-s});for(let n=0;n<e.length-1;n++){if(n===0&&e[n].x>0){const a=e[n].x;for(let c=n;c<e.length;c++)e[c].x-=a}if(e[n+1].x>e[n].x+e[n].width){const a=D(e.slice(0,n+1));if(e[n+1].x>Math.max(...a.map(c=>c.x+c.width))){const c=e[n+1].x-Math.max(...a.map(s=>s.x+s.width));for(let s=n+1;s<e.length;s++)e[s].x-=c}}}e.sort((n,a)=>{const c=n.y,s=a.y;return c-s});for(let n=0;n<e.length-1;n++){if(n===0&&e[n].y>0){const a=e[n].y;for(let c=n;c<e.length;c++)e[c].y-=a}if(e[n+1].y>e[n].y+e[n].height){const a=D(e.slice(0,n+1));if(e[n+1].y>Math.max(...a.map(c=>c.y+c.height))){const c=e[n+1].y-Math.max(...a.map(s=>s.y+s.height));for(let s=n+1;s<e.length;s++)e[s].y-=c}}}const o=e.map(n=>n.x+n.width),x=Math.max(...o),p=e.map(n=>n.y+n.height),M=Math.max(...p);e.forEach(n=>{n.inGroupId||(n.inGroupId=i.id),n.groupW=n.width/x,n.groupH=n.height/M,n.groupX=n.x/x,n.groupY=n.y/M,n.isObstacle=n.x+n.width===x&&n.y===0});const g=getComputedStyle(z.value),u=parseInt(g.getPropertyValue("--com-item-border-width").trim());return i.width=x+2*u,i.height=M+2*u,i.groupData=[...e],i},te=()=>{t.nextTick(()=>{const r=getComputedStyle(z.value),l=parseInt(r.getPropertyValue("--com-item-border-width").trim()),e=parseInt(r.getPropertyValue("--group-tit-height").trim());d.value.filter(i=>i.isGroup===!0).forEach(i=>{const o=i.width-2*l,x=i.height-2*l-(i.groupTit?e:0);i.groupData.forEach(p=>{p.width=o*p.groupW,p.x=o*p.groupX,p.height=x*p.groupH,p.y=x*p.groupY})})})},ee=()=>{const r=d.value.filter(l=>l.checked);if(r.length>1){const l={id:new Date().getTime()+"G",isGroup:!0,groupTit:""},e=nt(r,l);e.groupData.forEach(i=>{K(i.id)}),rt(e),N()}Ct()},Dt=(r,l)=>{const e=d.value.filter(i=>i.id===l)[0];if(e){const i=e.groupData.filter(o=>o.id===r)[0];if(i)e.groupData.length===2?j(l):(delete i.inGroupId,delete i.groupW,delete i.groupH,delete i.groupX,delete i.groupY,delete i.isObstacle,K(i.id,e.id),rt(i),N());else try{}catch{}}else try{}catch{}},j=r=>{const l=d.value.filter(e=>e.id===r)[0];if(l)K(l.id),l.groupData.forEach(e=>{delete e.inGroupId,delete e.groupW,delete e.groupH,delete l.groupX,delete l.groupY,delete l.isObstacle,e.x+=l.x,e.y+=l.y,rt(e,null,!0)}),N();else try{}catch{}},le=(r="",l)=>{const e=d.value.filter(i=>i.id===l)[0];if(e){if(!e.groupTit||!r){const o=getComputedStyle(z.value),x=parseInt(o.getPropertyValue("--group-tit-height").trim());e.groupTit&&!r&&(e.height-=x),!e.groupTit&&r&&(e.height+=x)}e.groupTit=r;const i=o=>{d.value.filter(p=>p.id!==o.id).filter(p=>p.x<o.x&&p.x+p.width>o.x||p.x===o.x||p.x>o.x&&p.x<o.x+o.width).filter(p=>p.y<o.y&&p.y+p.height>o.y||p.y===o.y||p.y>o.y&&p.y<o.y+o.height).forEach(p=>{p.y=o.y+o.height,i(p)})};i(e),N()}else try{}catch{}},oe=()=>(d.value.forEach(r=>{delete r.showPop,r.groupData&&r.groupData.forEach(l=>{delete l.showPop})}),{data:D(d.value),width:H});return t.onBeforeUnmount(()=>{Mt.unobserve(z.value),window.removeEventListener("click",Z)}),P({init:Qt,addItem:rt,deleteItem:K,updateItem:it,openGroup:Bt,closeGroup:Ct,changeGroupBorder:te,addGroup:ee,removeGroupItem:Dt,removeGroup:j,changeGroupTit:le,getData:oe}),(r,l)=>(t.openBlock(),t.createElementBlock("div",{class:"vue-drag-component-plus",ref_key:"pageRef",ref:z},[t.createElementVNode("div",{class:"content-box",ref_key:"boxRef",ref:qt},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(d),(e,i)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["com-item",m.seeModel||t.unref(G)||e.static===!0||e.dragable===!1?"":"can-drag",e.move?"is-move":"",e.drag?"is-drag":"",e.showPop?"on-top":"",m.seeModel?"no-hover":""]),style:t.normalizeStyle({width:e.width+"px",height:e.height+"px",top:e.y+"px",left:e.x+"px"}),key:i,onMousedown:t.withModifiers(o=>m.seeModel||t.unref(G)||e.static===!0||e.dragable===!1?null:Jt(o,i),["prevent"])},[t.createElementVNode("div",Vt,[e.isGroup?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[e.groupTit?(t.openBlock(),t.createElementBlock("div",{key:0,class:"group-item-tit",title:e.groupTit},t.toDisplayString(e.groupTit),9,Ot)):t.createCommentVNode("",!0),t.createElementVNode("div",{class:t.normalizeClass(["group-item-content",e.groupTit?"":"full"])},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.groupData,(o,x)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["com-item-box-child",o.isObstacle?"else":""]),style:t.normalizeStyle({width:o.width+"px",height:o.height+"px",top:o.y+"px",left:o.x+"px"}),key:x},[t.createElementVNode("div",Nt,[t.renderSlot(r.$slots,"item",{data:o},()=>[t.createElementVNode("p",null,t.toDisplayString(Math.round(o.width*100)/100)+","+t.toDisplayString(Math.round(o.height*100)/100),1),t.createElementVNode("p",null,t.toDisplayString(Math.round(o.x*100)/100)+","+t.toDisplayString(Math.round(o.y*100)/100),1)])]),!m.seeModel&&!t.unref(G)&&t.unref(E)===null&&t.unref(f)===null?(t.openBlock(),t.createElementBlock("div",{key:0,class:"setting-box",style:t.normalizeStyle({display:o.showPop?"flex":"none"}),onMousedown:t.withModifiers(p=>null,["prevent","stop"])},[t.createVNode(L,{iconObj:m.settingIcon,onClick:t.withModifiers(p=>Et(o),["prevent","stop"])},null,8,["iconObj","onClick"])],36)):t.createCommentVNode("",!0),o.showPop?(t.openBlock(),t.createElementBlock("div",{key:1,class:"setting-box-pop",onMousedown:t.withModifiers(p=>null,["prevent","stop"])},[t.renderSlot(r.$slots,"setPopNormal",{data:D(o)},()=>[t.createElementVNode("div",{class:"setting-box-pop-item",onClick:p=>Dt(o.id,o.inGroupId)},"移出组合",8,zt),t.createElementVNode("div",{class:"setting-box-pop-item",onClick:p=>K(o.id,o.inGroupId)},"删除",8,Gt)])],32)):t.createCommentVNode("",!0)],6))),128))],2)],64)):(t.openBlock(),t.createElementBlock("div",Pt,[t.renderSlot(r.$slots,"item",{data:e},()=>[t.createElementVNode("p",null,t.toDisplayString(Math.round(e.width*100)/100)+","+t.toDisplayString(Math.round(e.height*100)/100),1),t.createElementVNode("p",null,t.toDisplayString(Math.round(e.x*100)/100)+","+t.toDisplayString(Math.round(e.y*100)/100),1)])])),!e.isGroup&&e.notGroup!==!0&&t.unref(G)?(t.openBlock(),t.createElementBlock("div",{key:2,class:t.normalizeClass(["group-checkbox",e.checked?"is-checked":"",e.disabled?"disabled":""]),onClick:o=>e.disabled?null:jt(e)},null,10,Wt)):t.createCommentVNode("",!0),!m.seeModel&&!t.unref(G)&&t.unref(E)===null&&t.unref(f)===null?(t.openBlock(),t.createElementBlock("div",{key:3,class:"setting-box",style:t.normalizeStyle({display:e.showPop?"flex":"none"}),onMousedown:t.withModifiers(o=>null,["prevent","stop"])},[t.createVNode(L,{iconObj:m.settingIcon,onClick:t.withModifiers(o=>Et(e),["prevent","stop"])},null,8,["iconObj","onClick"])],36)):t.createCommentVNode("",!0),e.showPop?(t.openBlock(),t.createElementBlock("div",{key:4,class:t.normalizeClass(["setting-box-pop",e.isGroup===!0?"special":""]),onMousedown:t.withModifiers(o=>null,["prevent","stop"])},[e.isGroup===!0?t.renderSlot(r.$slots,"setPopSpecial",{key:0,data:D(e)},()=>[m.hideTit?t.createCommentVNode("",!0):(t.openBlock(),t.createElementBlock("div",{key:0,class:"setting-box-pop-item",onClick:o=>R("showTitPop",e.groupTit,e.id)}," 设置组合标题",8,Ht)),t.createElementVNode("div",{class:"setting-box-pop-item",onClick:o=>j(e.id)},"解除组合",8,Tt)]):t.renderSlot(r.$slots,"setPopNormal",{key:1,data:D(e)},()=>[e.notGroup!==!0?(t.openBlock(),t.createElementBlock("div",{key:0,class:"setting-box-pop-item",onClick:o=>Bt(e.id)},"组合",8,It)):t.createCommentVNode("",!0),t.createElementVNode("div",{class:"setting-box-pop-item",onClick:o=>K(e.id)},"删除",8,vt)])],34)):t.createCommentVNode("",!0)]),!m.seeModel&&!t.unref(G)&&!e.move&&e.static!==!0&&e.resizable!==!1?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[t.unref(W).indexOf("topLeft")!==-1?(t.openBlock(),t.createElementBlock("div",{key:0,class:"resize-line top-left",onMousedown:t.withModifiers(o=>I(o,e,"top-left"),["prevent","stop"])},null,40,Yt)):t.createCommentVNode("",!0),t.unref(W).indexOf("top")!==-1?(t.openBlock(),t.createElementBlock("div",{key:1,class:"resize-line top",onMousedown:t.withModifiers(o=>I(o,e,"top"),["prevent","stop"])},null,40,Xt)):t.createCommentVNode("",!0),t.unref(W).indexOf("topRight")!==-1?(t.openBlock(),t.createElementBlock("div",{key:2,class:"resize-line top-right",onMousedown:t.withModifiers(o=>I(o,e,"top-right"),["prevent","stop"])},null,40,bt)):t.createCommentVNode("",!0),t.unref(W).indexOf("left")!==-1?(t.openBlock(),t.createElementBlock("div",{key:3,class:"resize-line left",onMousedown:t.withModifiers(o=>I(o,e,"left"),["prevent","stop"])},null,40,Lt)):t.createCommentVNode("",!0),t.unref(W).indexOf("right")!==-1?(t.openBlock(),t.createElementBlock("div",{key:4,class:"resize-line right",onMousedown:t.withModifiers(o=>I(o,e,"right"),["prevent","stop"])},null,40,Rt)):t.createCommentVNode("",!0),t.unref(W).indexOf("bottomLeft")!==-1?(t.openBlock(),t.createElementBlock("div",{key:5,class:"resize-line bottom-left",onMousedown:t.withModifiers(o=>I(o,e,"bottom-left"),["prevent","stop"])},null,40,$t)):t.createCommentVNode("",!0),t.unref(W).indexOf("bottom")!==-1?(t.openBlock(),t.createElementBlock("div",{key:6,class:"resize-line bottom",onMousedown:t.withModifiers(o=>I(o,e,"bottom"),["prevent","stop"])},null,40,_t)):t.createCommentVNode("",!0),t.unref(W).indexOf("bottomRight")!==-1?(t.openBlock(),t.createElementBlock("div",{key:7,class:"resize-line bottom-right",onMousedown:t.withModifiers(o=>I(o,e,"bottom-right"),["prevent","stop"])},null,40,At)):t.createCommentVNode("",!0)],64)):t.createCommentVNode("",!0)],46,St))),128)),t.unref(E)!==null?(t.openBlock(),t.createElementBlock("div",{key:0,class:"drag-bg",style:t.normalizeStyle({width:t.unref(S).width+"px",height:t.unref(S).height+"px",top:t.unref(S).y+"px",left:t.unref(S).x+"px"})},null,4)):t.createCommentVNode("",!0),t.createElementVNode("div",{class:"height-bg",style:t.normalizeStyle({height:(t.unref(F)>0?+(t.unref(F)+(m.seeModel?m.seeModelMinBg:220)):t.unref(F))+"px"})},null,4),m.hideAuxiliary?t.createCommentVNode("",!0):(t.openBlock(),t.createElementBlock(t.Fragment,{key:1},[t.unref(q)!==null?(t.openBlock(),t.createElementBlock("div",{key:0,class:"auxiliary-line hor",style:t.normalizeStyle({top:t.unref(q)+"px",left:"0px"})},null,4)):t.createCommentVNode("",!0),t.unref(U)!==null?(t.openBlock(),t.createElementBlock("div",{key:1,class:"auxiliary-line hor",style:t.normalizeStyle({top:t.unref(U)+"px",left:"0px"})},null,4)):t.createCommentVNode("",!0),t.unref(J)!==null?(t.openBlock(),t.createElementBlock("div",{key:2,class:"auxiliary-line",style:t.normalizeStyle({top:"0px",left:t.unref(J)+"px"})},null,4)):t.createCommentVNode("",!0),t.unref(Q)!==null?(t.openBlock(),t.createElementBlock("div",{key:3,class:"auxiliary-line",style:t.normalizeStyle({top:"0px",left:t.unref(Q)+"px"})},null,4)):t.createCommentVNode("",!0)],64)),t.unref(d).length===0?(t.openBlock(),t.createElementBlock("div",Kt,[t.renderSlot(r.$slots,"empty",{},()=>[t.createTextVNode(" 暂无数据 ")])])):t.createCommentVNode("",!0)],512)],512))}}],ct={install(m){Ft.forEach(P=>{m.component("vueDragComponentPlus",P)})}};return typeof window<"u"&&window.Vue&&window.Vue.use(ct),ct});
