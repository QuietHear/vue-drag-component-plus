(function(t,R){typeof exports=="object"&&typeof module<"u"?module.exports=R(require("vue")):typeof define=="function"&&define.amd?define(["vue"],R):(t=typeof globalThis<"u"?globalThis:t||self,t.vueDragComponentPlus=R(t.Vue))})(this,function(t){"use strict";const R={__name:"icon",props:{iconObj:{type:Object,requured:!0}},setup(E){return(T,st)=>{const _=t.resolveComponent("el-icon");return E.iconObj.type==="custom"?(t.openBlock(),t.createBlock(t.resolveDynamicComponent(E.iconObj.icon),t.normalizeProps(t.mergeProps({key:0},E.iconObj.attrs)),null,16)):E.iconObj.type==="el"?(t.openBlock(),t.createBlock(_,t.normalizeProps(t.mergeProps({key:1},E.iconObj.attrs)),{default:t.withCtx(()=>[(t.openBlock(),t.createBlock(t.resolveDynamicComponent(E.iconObj.icon)))]),_:1},16)):E.iconObj.type==="iconfont"?(t.openBlock(),t.createElementBlock("i",t.mergeProps({key:2,class:["icon iconfont","icon-"+E.iconObj.icon]},E.iconObj.attrs),null,16)):(t.openBlock(),t.createElementBlock("i",t.mergeProps({key:3,class:E.iconObj.type},E.iconObj.attrs),t.toDisplayString(E.iconObj.icon),17))}}},Qt="",mt=["onMousedown"],Bt={class:"com-item-content"},vt=["title"],Dt=["onClick"],Ct=["onClick"],Ot=["onClick"],Vt=["onClick"],St=["onClick"],Gt=["onClick"],zt=["onClick"],Pt=["onMousedown"],Ht=["onMousedown"],Nt=["onMousedown"],Wt=["onMousedown"],Tt=["onMousedown"],It=["onMousedown"],Yt=["onMousedown"],Xt=["onMousedown"],bt={key:1,class:"com-empty"},Rt=[{__name:"index",props:{insertResizeKeys:{type:Array,default:()=>["topLeft","top","topRight","left","right","bottomLeft","bottom","bottomRight"]},excludeResizeKeys:{type:Array,default:()=>[]},seeModel:{type:Boolean,default:!1},itemMinWidth:{type:Number,default:15,validator(E,T){return E>=15}},itemMinHeight:{type:Number,default:15,validator(E,T){return E>=15}},ySpace:{type:Number,default:7,validator(E,T){return E>=0}},settingIcon:{type:Object,default:()=>({icon:"设置"})},hideTit:{type:Boolean,default:!1}},emits:["showGroup","updateChecked","showTitPop"],setup(E,{expose:T,emit:st}){const _=st,k=E,O=l=>{let r=l instanceof Array?[]:{};for(let e in l)r[e]=typeof l[e]=="object"?O(l[e]):l[e];return r},at=()=>{k.insertResizeKeys.forEach(l=>{k.excludeResizeKeys.indexOf(l)===-1&&P.value.push(l)})};t.watch(()=>[k.insertResizeKeys,k.excludeResizeKeys],()=>{at()});const P=t.ref([]);at();const G=t.ref(null);let H=null,U=null;const K=t.ref(null),J=t.ref(0),s=t.ref([]),_t=(l,r)=>{let e=l.matches||l.webkitMatchesSelector||l.mozMatchesSelector||l.msMatchesSelector;for(;l&&!e.call(l,r);)l=l.parentElement;return l};let m=null,ct=null,ht=null;const D=t.ref({}),$t=(l,r)=>{F(),m=r,D.value=O(s.value[m]),s.value[m].move=!0;const e=_t(l.target,".com-item");ct=l.clientX-e.offsetLeft,ht=l.clientY-e.offsetTop,window.addEventListener("mousemove",dt),window.addEventListener("mouseup",pt)},dt=l=>{const r=l.clientX-ct,e=l.clientY-ht,n=r<=N("left")?N("left"):r>=N("right")?N("right"):r,o=e<=N("top")?N("top"):e>=N("bottom")?N("bottom"):e,x=n-s.value[m].x,p=o-s.value[m].y,M=`${x>0?"right":x<0?"left":""}_${p>0?"bottom":p<0?"top":""}`;o>s.value[m].y&&o>U-s.value[m].height-30&&K.value.scrollBy(0,20),o<s.value[m].y&&o-K.value.scrollTop<30&&K.value.scrollBy(0,-20),s.value[m].x=n,s.value[m].y=o;let y=O(s.value.filter(u=>u.move!==!0).filter(u=>u.x<n&&u.x+u.width>n||u.x===n||u.x>n&&u.x<n+s.value[m].width).filter(u=>u.y<o&&u.y+u.height>o||u.y===o||u.y>o&&u.y<o+s.value[m].height));if(y.length===0)D.value.x=n,D.value.y=o;else{if(M.indexOf("top")!==-1){y=y.filter(h=>h.y<D.value.y);const u=Math.min(...y.map(h=>h.y+h.height));y.forEach(h=>{Math.abs(h.y+h.height-u)<5&&(h.y=u-h.height)});let c=D.value.y-o,i=!0,a=[...y];const d=h=>{O(s.value.filter(g=>g.move!==!0&&g.y+g.height-h.y<=c+3&&g.y+g.height-h.y>=0).filter(g=>g.x<h.x&&g.x+g.width>h.x||g.x>=h.x&&g.x<h.x+h.width)).forEach(g=>{g.y+g.height!==h.y&&(g.y=h.y-g.height),a.findIndex(v=>v.id===g.id)===-1&&(a.push(g),d(g))})};if(y.forEach(h=>{d(h)}),a.sort((h,w)=>{const g=h.y,v=w.y;return g-v}),(a.length===0||a.filter(h=>h.y===0).length>0)&&(i=!1),i){let h=0;a.filter(g=>g.y===a[0].y).forEach(g=>{O(s.value.filter(V=>V.move!==!0&&V.y+V.height<g.y).filter(V=>V.x<g.x&&V.x+V.width>g.x||V.x>=g.x&&V.x<g.x+g.width)).forEach(V=>{V.y+V.height>h&&(h=V.y+V.height)})}),h=a[0].y-h,h<c&&(c=h),a.forEach(g=>{g.y-=c,s.value.filter(v=>v.id===g.id)[0].y=g.y}),D.value.x=n,D.value.y=s.value.filter(g=>g.id===a[a.length-1].id)[0].y+s.value.filter(g=>g.id===a[a.length-1].id)[0].height}else{const h=Math.min(...y.map(w=>w.y));h-o>=-7&&h-o<7&&(y.filter(w=>w.y<D.value.y).forEach(w=>{w.y+=s.value[m].height,s.value.filter(v=>v.id===w.id)[0].y=w.y;const g=v=>{s.value.filter(C=>C.move!==!0&&C.id!==v.id).filter(C=>C.x<v.x&&C.x+C.width>v.x||C.x===v.x||C.x>v.x&&C.x<v.x+v.width).filter(C=>C.y<v.y&&C.y+C.height>v.y||C.y===v.y||C.y>v.y&&C.y<v.y+v.height).forEach(C=>{C.y=v.y+v.height,g(C)})};g(w)}),D.value.x=n,D.value.y=h)}y=O(s.value.filter(h=>h.move!==!0).filter(h=>h.x<n&&h.x+h.width>n||h.x===n||h.x>n&&h.x<n+s.value[m].width).filter(h=>h.y<o&&h.y+h.height>o||h.y===o||h.y>o&&h.y<o+s.value[m].height))}if(M.indexOf("bottom")!==-1){const u=Math.max(...y.map(c=>c.y+c.height));if(u-(o+s.value[m].height)>=-7&&u-(o+s.value[m].height)<7){let c=!0;y.filter(i=>i.y>D.value.y).forEach(i=>{i.y-=s.value[m].height,s.value.filter(d=>d.id===i.id)[0].y=i.y;const a=s.value.filter(d=>d.move!==!0&&d.id!==i.id).filter(d=>d.x<i.x&&d.x+d.width>i.x||d.x===i.x||d.x>i.x&&d.x<i.x+i.width).filter(d=>d.y<i.y&&d.y+d.height>i.y||d.y===i.y||d.y>i.y&&d.y<i.y+i.height);if(a.length>0){i.y=Math.max(...a.map(h=>h.y+h.height)),s.value.filter(h=>h.id===i.id)[0].y=i.y;const d=h=>{s.value.filter(g=>g.id!==h.id).filter(g=>g.x<h.x&&g.x+g.width>h.x||g.x===h.x||g.x>h.x&&g.x<h.x+h.width).filter(g=>g.y<h.y&&g.y+g.height>h.y||g.y===h.y||g.y>h.y&&g.y<h.y+h.height).forEach(g=>{g.y=h.y+h.height,g.move===!0&&(D.value.y=g.y,c=!1),d(g)})};d(i)}}),D.value.x=n,c&&(D.value.y=u-s.value[m].height),y=O(s.value.filter(i=>i.move!==!0).filter(i=>i.x<n&&i.x+i.width>n||i.x===n||i.x>n&&i.x<n+s.value[m].width).filter(i=>i.y<o&&i.y+i.height>o||i.y===o||i.y>o&&i.y<o+s.value[m].height))}}if(((M.indexOf("top")!==-1||M.indexOf("bottom")!==-1)&&(M.indexOf("right")!==-1||M.indexOf("left")!==-1)&&Math.abs(x)>8||M.indexOf("top")===-1&&M.indexOf("bottom")===-1&&(M.indexOf("right")!==-1||M.indexOf("left")!==-1))&&y.length>0){y.sort((c,i)=>{const a=c.y,d=i.y;return a-d});let u=!0;for(let c=0;c<y.length;c++){if(u){const i=O(s.value);for(let a=0;a<=c;a++){let d=null;const h=i.filter(w=>w.move!==!0&&w.y<y[a].y).filter(w=>w.x<y[a].x&&w.x+w.width>y[a].x||w.x===y[a].x||w.x>y[a].x&&w.x<y[a].x+y[a].width);if(h.length===0?d=0:d=Math.max(...h.map(w=>w.y+w.height)),a===c){if(y[a].y-(y[a].y+y[a].height-o)<d){u=!1;break}}else if(y[a].y-y[c].height<d){u=!1;break}else i.filter(w=>w.id===y[a].id)[0].y-=y[c].height}}if(u){y[c].y-=y[c].y+y[c].height-o,s.value.filter(i=>i.id===y[c].id)[0].y=y[c].y;for(let i=c;i>0;i--)y[c-1].y-=y[c].height,s.value.filter(a=>a.id===y[c-1].id)[0].y=y[c-1].y}else y.filter(i=>i.id===y[c].id).forEach(i=>{i.y+=s.value[m].y+s.value[m].height-i.y,s.value.filter(d=>d.id===i.id)[0].y=i.y;const a=d=>{s.value.filter(w=>w.move!==!0&&w.id!==d.id).filter(w=>w.x<d.x&&w.x+w.width>d.x||w.x===d.x||w.x>d.x&&w.x<d.x+d.width).filter(w=>w.y<d.y&&w.y+w.height>d.y||w.y===d.y||w.y>d.y&&w.y<d.y+d.height).forEach(w=>{w.y=d.y+d.height,a(w)})};a(i)})}D.value.x=n}}S(!1)},pt=()=>{window.removeEventListener("mousemove",dt),window.removeEventListener("mouseup",pt),delete s.value[m].move,s.value[m].x=D.value.x,s.value[m].y=D.value.y,m=null,S()},N=l=>{switch(l){case"top":return 0;case"right":return H-s.value[m].width;case"bottom":return 999999999;case"left":return 0}};let f=null,rt="",Q=0,Z=0,I=0,Y=0,X=0,b=0,$=0,j=0,L=0,tt=0;const W=(l,r,e)=>{F(),f=r,rt=e,Q=l.clientX,Z=l.clientY,I=r.width,Y=r.height,X=r.y,b=r.x,f.drag=!0;const n=s.value.filter(u=>u.static===!0&&(u.x<r.x?u.x+u.width>=r.x:u.x<=r.x+r.width)),o=s.value.filter(u=>u.static===!0&&(u.y<r.y?u.y+u.height>=r.y:u.y<=r.y+r.height)),x=n.filter(u=>u.y+u.height<=r.y).map(u=>u.y+u.height);x.length>0?$=Math.max(...x):$=0;const p=n.filter(u=>u.y>=r.y+r.height).map(u=>u.y);p.length>0?j=Math.min(...p):j=0;const M=o.filter(u=>u.x+u.width<=r.x).map(u=>u.x+u.width);M.length>0?L=Math.max(...M):L=0;const y=o.filter(u=>u.x>=r.x+r.width).map(u=>u.x);y.length>0?tt=Math.min(...y):tt=0,window.addEventListener("mousemove",ut),window.addEventListener("mouseup",gt)},ut=l=>{const r=I+(l.clientX-Q),e=Y+(l.clientY-Z),n=I-(l.clientX-Q),o=Y-(l.clientY-Z),x=X+(l.clientY-Z),p=b+(l.clientX-Q),M=getComputedStyle(G.value),y=parseInt(M.getPropertyValue("--com-item-border-width").trim()),u=parseInt(M.getPropertyValue("--group-tit-height").trim());switch(rt){case"top-left":if(f.height=o<k.itemMinHeight?k.itemMinHeight:o>B("top")?B("top"):o,f.y=o<k.itemMinHeight?X+Y-k.itemMinHeight:o>B("top")?$:x,f.width=n<k.itemMinWidth?k.itemMinWidth:n>B("left")?B("left"):n,f.x=n<k.itemMinWidth?b+I-k.itemMinWidth:n>B("left")?L:p,f.isGroup===!0){const i=f.width-2*y,a=f.height-2*y-(f.groupTit?u:0);f.groupData.forEach(d=>{d.width=i*d.groupW,d.x=i*d.groupX,d.height=a*d.groupH,d.y=a*d.groupY})}break;case"top":if(f.height=o<k.itemMinHeight?k.itemMinHeight:o>B("top")?B("top"):o,f.y=o<k.itemMinHeight?X+Y-k.itemMinHeight:o>B("top")?$:x,f.isGroup===!0){const i=f.height-2*y-(f.groupTit?u:0);f.groupData.forEach(a=>{a.height=i*a.groupH,a.y=i*a.groupY})}break;case"top-right":if(f.height=o<k.itemMinHeight?k.itemMinHeight:o>B("top")?B("top"):o,f.y=o<k.itemMinHeight?X+Y-k.itemMinHeight:o>B("top")?$:x,f.width=r<k.itemMinWidth?k.itemMinWidth:r>B("right")?B("right"):r,f.isGroup===!0){const i=f.width-2*y,a=f.height-2*y-(f.groupTit?u:0);f.groupData.forEach(d=>{d.width=i*d.groupW,d.x=i*d.groupX,d.height=a*d.groupH,d.y=a*d.groupY})}break;case"left":if(f.width=n<k.itemMinWidth?k.itemMinWidth:n>B("left")?B("left"):n,f.x=n<k.itemMinWidth?b+I-k.itemMinWidth:n>B("left")?L:p,f.isGroup===!0){const i=f.width-2*y;f.groupData.forEach(a=>{a.width=i*a.groupW,a.x=i*a.groupX})}break;case"right":if(f.width=r<k.itemMinWidth?k.itemMinWidth:r>B("right")?B("right"):r,f.isGroup===!0){const i=f.width-2*y;f.groupData.forEach(a=>{a.width=i*a.groupW,a.x=i*a.groupX})}break;case"bottom-left":if(f.height=e<k.itemMinHeight?k.itemMinHeight:e>B("bottom")?B("bottom"):e,f.width=n<k.itemMinWidth?k.itemMinWidth:n>B("left")?B("left"):n,f.x=n<k.itemMinWidth?b+I-k.itemMinWidth:n>B("left")?L:p,f.isGroup===!0){const i=f.width-2*y,a=f.height-2*y-(f.groupTit?u:0);f.groupData.forEach(d=>{d.width=i*d.groupW,d.x=i*d.groupX,d.height=a*d.groupH,d.y=a*d.groupY})}break;case"bottom":if(f.height=e<k.itemMinHeight?k.itemMinHeight:e>B("bottom")?B("bottom"):e,f.isGroup===!0){const i=f.height-2*y-(f.groupTit?u:0);f.groupData.forEach(a=>{a.height=i*a.groupH,a.y=i*a.groupY})}break;case"bottom-right":if(f.height=e<k.itemMinHeight?k.itemMinHeight:e>B("bottom")?B("bottom"):e,f.width=r<k.itemMinWidth?k.itemMinWidth:r>B("right")?B("right"):r,f.isGroup===!0){const i=f.width-2*y,a=f.height-2*y-(f.groupTit?u:0);f.groupData.forEach(d=>{d.width=i*d.groupW,d.x=i*d.groupX,d.height=a*d.groupH,d.y=a*d.groupY})}break}let c=O(s.value.filter(i=>i.drag!==!0).filter(i=>i.x<f.x&&i.x+i.width>f.x||i.x===f.x||i.x>f.x&&i.x<f.x+f.width).filter(i=>i.y<f.y&&i.y+i.height>f.y||i.y===f.y||i.y>f.y&&i.y<f.y+f.height));if(c.length>0){c.sort((i,a)=>{const d=i.y,h=a.y;return d-h});for(let i=0;i<c.length;i++)c.filter(a=>a.id===c[i].id).forEach(a=>{a.y+=f.y+f.height-a.y,s.value.filter(h=>h.id===a.id)[0].y=a.y;const d=h=>{s.value.filter(g=>g.drag!==!0&&g.id!==h.id).filter(g=>g.x<h.x&&g.x+g.width>h.x||g.x===h.x||g.x>h.x&&g.x<h.x+h.width).filter(g=>g.y<h.y&&g.y+g.height>h.y||g.y===h.y||g.y>h.y&&g.y<h.y+h.height).forEach(g=>{g.y=h.y+h.height,d(g)})};d(a)})}S(!1),K.value.scrollTo(0,J.value-U)},gt=l=>{delete f.drag,rt="",f=null,window.removeEventListener("mousemove",ut),window.removeEventListener("mouseup",gt),S()},B=l=>{switch(l){case"top":return X+Y-$;case"left":return b+I-L;case"right":return(tt>0?tt:H)-b;case"bottom":return j>0?j-X:999999999}},S=(l=!0)=>{l===!0&&ft();const r=s.value.map(e=>e.y+e.height);r.length>0?J.value=Math.max(...r)+50:J.value=0};t.watch(()=>k.ySpace,()=>{k.ySpace>=0&&ft()});const ft=()=>{s.value.sort((l,r)=>{const e=l.y,n=r.y;return e-n});for(let l=0;l<s.value.length-1;l++){if(l===0&&s.value[l].y>0){const r=s.value[l].y;for(let e=l;e<s.value.length;e++)s.value[e].y-=r}if(s.value[l+1].y>s.value[l].y+s.value[l].height){const r=s.value[l+1].y-(s.value[l].y+s.value[l].height);for(let e=l+1;e<s.value.length;e++)s.value[e].y-=r}}for(let l=0;l<s.value.length-1;l++){let r=s.value.findIndex(e=>e.y===s.value[l].y+s.value[l].height);if(r!==-1)for(let e=r;e<s.value.length;e++)s.value[e].y+=k.ySpace}};t.onMounted(()=>{yt.observe(G.value)});const yt=new ResizeObserver(l=>{At(H===l[0].contentRect.width?null:l[0].contentRect.width,U===l[0].contentRect.height?null:l[0].contentRect.height)});let it=!1;const Lt=(l=[],r=null)=>{s.value=O(l),s.value.filter(e=>e.isGroup===!0).forEach(e=>{if(e.isGroup===!0)if(e.groupData.length<2)q(e.id);else{const n=lt(e.groupData,e);ot(n)}}),r!==null?t.nextTick(()=>{const n=G.value.getBoundingClientRect().width/r,o=getComputedStyle(G.value),x=parseInt(o.getPropertyValue("--com-item-border-width").trim()),p=parseInt(o.getPropertyValue("--group-tit-height").trim());s.value.forEach(M=>{if(M.width*=n,M.height*=n,M.x*=n,M.y*=n,M.isGroup===!0){const y=M.width-2*x,u=M.height-2*x-(M.groupTit?p:0);M.groupData.forEach(c=>{c.width=y*c.groupW,c.x=y*c.groupX,c.height=u*c.groupH,c.y=u*c.groupY})}}),S()}):S(),it=!0,setTimeout(()=>{it=!1},500)},xt=(l,r,e)=>{const n=r.map(p=>p.y),o=Math.max(...n),x=r.filter(p=>p.y+p.height>o);x.sort((p,M)=>{const y=p.x,u=M.x;return y-u});for(let p=0;p<x.length;p++){if(p===0&&x[p].x>=l.width){l.y=o,l.x=0;break}if(x.length>1&&p!==x.length-1&&x[p].x+x[p].width+l.width<=x[p+1].x){l.y=o,l.x=x[p].x+x[p].width;break}if(p===x.length-1&&x[p].x+x[p].width+l.width<=e){l.y=o,l.x=x[p].x+x[p].width;break}}if(l.y==null){l.x=0;const p=r.map(M=>M.y+M.height);l.y=Math.max(...p)}},et=(l,r=null,e=!1)=>{const n=O(l),o=s.value.filter(x=>x.id===r);if(n.id||(n.id=new Date().getTime()+""),r&&o.length!==1){try{}catch{}return}if(e!==!0)if(delete n.x,delete n.y,r){const x=getComputedStyle(G.value),p=parseInt(x.getPropertyValue("--com-item-border-width").trim());xt(n,o[0].groupData,o[0].width-2*p)}else s.value.length===0?(n.x=0,n.y=0):xt(n,s.value,H);if(r){o[0].groupData.push(n);const x=lt(o[0].groupData,o[0]);ot(x)}else s.value.push(n);S()},A=(l,r=null)=>{let e=-1;const n=s.value.filter(o=>o.id===r);if(r?n.length===1&&(e=n[0].groupData.findIndex(o=>o.id===l)):e=s.value.findIndex(o=>o.id===l),e!==-1){if(r)if(n[0].groupData.splice(e,1),n[0].groupData.length===1)q(r);else{const o=lt(n[0].groupData,n[0]);ot(o)}else s.value.splice(e,1);S()}else try{}catch{}},ot=l=>{if(l.id){const r=O(l);let e=-1;const n=s.value.filter(o=>o.id===r.inGroupId);if(r.inGroupId?n.length===1&&(e=n[0].groupData.findIndex(o=>o.id===r.id)):e=s.value.findIndex(o=>o.id===r.id),e!==-1)r.inGroupId?n[0].groupData[e]=r:s.value[e]=r,S();else try{}catch{}}else try{}catch{}},At=(l,r)=>{if(l!==null){const e=H?l/H:1;H=l;const n=getComputedStyle(G.value),o=parseInt(n.getPropertyValue("--com-item-border-width").trim()),x=parseInt(n.getPropertyValue("--group-tit-height").trim());it||(s.value.forEach(p=>{if(p.width*=e,p.height*=e,p.x*=e,p.y*=e,p.isGroup===!0){const M=p.width-2*o,y=p.height-2*o-(p.groupTit?x:0);p.groupData.forEach(u=>{u.width=M*u.groupW,u.x=M*u.groupX,u.height=y*u.groupH,u.y=y*u.groupY})}}),S())}r!==null&&(U=r)},wt=l=>{l.showPop||(s.value.forEach(r=>{delete r.showPop,r.groupData&&r.groupData.forEach(e=>{delete e.showPop})}),l.showPop=!0,window.addEventListener("click",F))},F=()=>{s.value.forEach(l=>{delete l.showPop,l.groupData&&l.groupData.forEach(r=>{delete r.showPop})}),window.removeEventListener("click",F)},z=t.ref(!1),kt=l=>{const r=s.value.findIndex(e=>e.id===l);if(r!==-1)s.value[r].checked=!0,s.value[r].disabled=!0,z.value=!0,_("showGroup",z.value);else try{}catch{}},Mt=()=>{z.value=!1,s.value.forEach(l=>{delete l.checked,delete l.disabled,l.groupData&&l.groupData.forEach(r=>{delete r.checked,delete r.disabled})}),_("showGroup",z.value)},Kt=l=>{l.checked=!l.checked,_("updateChecked",s.value.filter(r=>r.checked).length)},lt=(l,r)=>{const e=O(l),n=O(r);e.sort((c,i)=>{const a=c.x,d=i.x;return a-d});for(let c=0;c<e.length-1;c++){if(c===0&&e[c].x>0){const i=e[c].x;for(let a=c;a<e.length;a++)e[a].x-=i}if(e[c+1].x>e[c].x+e[c].width){const i=e[c+1].x-(e[c].x+e[c].width);for(let a=c+1;a<e.length;a++)e[a].x-=i}}e.sort((c,i)=>{const a=c.y,d=i.y;return a-d});for(let c=0;c<e.length-1;c++){if(c===0&&e[c].y>0){const i=e[c].y;for(let a=c;a<e.length;a++)e[a].y-=i}if(e[c+1].y>e[c].y+e[c].height){const i=e[c+1].y-(e[c].y+e[c].height);for(let a=c+1;a<e.length;a++)e[a].y-=i}}const o=e.map(c=>c.x+c.width),x=Math.max(...o),p=e.map(c=>c.y+c.height),M=Math.max(...p);e.forEach(c=>{c.inGroupId||(c.inGroupId=n.id),c.groupW=c.width/x,c.groupH=c.height/M,c.groupX=c.x/x,c.groupY=c.y/M,c.isObstacle=c.x+c.width===x&&c.y===0});const y=getComputedStyle(G.value),u=parseInt(y.getPropertyValue("--com-item-border-width").trim());return n.width=x+2*u,n.height=M+2*u,n.groupData=[...e],n},Ft=()=>{t.nextTick(()=>{const l=getComputedStyle(G.value),r=parseInt(l.getPropertyValue("--com-item-border-width").trim()),e=parseInt(l.getPropertyValue("--group-tit-height").trim());s.value.filter(n=>n.isGroup===!0).forEach(n=>{const o=n.width-2*r,x=n.height-2*r-(n.groupTit?e:0);n.groupData.forEach(p=>{p.width=o*p.groupW,p.x=o*p.groupX,p.height=x*p.groupH,p.y=x*p.groupY})})})},qt=()=>{const l=s.value.filter(r=>r.checked);if(l.length>1){const r={id:new Date().getTime()+"G",isGroup:!0,groupTit:""},e=lt(l,r);e.groupData.forEach(n=>{A(n.id)}),et(e),S()}Mt()},Et=(l,r)=>{const e=s.value.filter(n=>n.id===r)[0];if(e){const n=e.groupData.filter(o=>o.id===l)[0];if(n)e.groupData.length===2?q(r):(delete n.inGroupId,delete n.groupW,delete n.groupH,delete n.groupX,delete n.groupY,delete n.isObstacle,A(n.id,e.id),et(n),S());else try{}catch{}}else try{}catch{}},q=l=>{const r=s.value.filter(e=>e.id===l)[0];if(r)A(r.id),r.groupData.forEach(e=>{delete e.inGroupId,delete e.groupW,delete e.groupH,delete r.groupX,delete r.groupY,delete r.isObstacle,e.x+=r.x,e.y+=r.y,et(e,null,!0)}),S();else try{}catch{}},Ut=(l="",r)=>{const e=s.value.filter(n=>n.id===r)[0];if(e){if(!e.groupTit||!l){const o=getComputedStyle(G.value),x=parseInt(o.getPropertyValue("--group-tit-height").trim());e.groupTit&&!l&&(e.height-=x),!e.groupTit&&l&&(e.height+=x)}e.groupTit=l;const n=o=>{s.value.filter(p=>p.id!==o.id).filter(p=>p.x<o.x&&p.x+p.width>o.x||p.x===o.x||p.x>o.x&&p.x<o.x+o.width).filter(p=>p.y<o.y&&p.y+p.height>o.y||p.y===o.y||p.y>o.y&&p.y<o.y+o.height).forEach(p=>{p.y=o.y+o.height,n(p)})};n(e),S()}else try{}catch{}},Jt=()=>{const l=O(s.value);return l.forEach(r=>{delete r.showPop,r.groupData&&r.groupData.forEach(e=>{delete e.showPop})}),{data:l,width:H}};return t.onBeforeUnmount(()=>{yt.unobserve(G.value),window.removeEventListener("click",F)}),T({init:Lt,addItem:et,deleteItem:A,updateItem:ot,openGroup:kt,closeGroup:Mt,changeGroupBorder:Ft,addGroup:qt,removeGroupItem:Et,removeGroup:q,changeGroupTit:Ut,getData:Jt}),(l,r)=>(t.openBlock(),t.createElementBlock("div",{class:"vue-drag-component-plus",ref_key:"pageRef",ref:G},[t.createElementVNode("div",{class:"content-box",ref_key:"boxRef",ref:K},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(t.unref(s),(e,n)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["com-item",E.seeModel||t.unref(z)||e.static===!0||e.dragable===!1?"":"can-drag",e.move?"is-move":"",e.drag?"is-drag":"",e.showPop?"on-top":"",E.seeModel?"no-hover":""]),style:t.normalizeStyle({width:e.width+"px",height:e.height+"px",top:e.y+"px",left:e.x+"px"}),key:n,onMousedown:t.withModifiers(o=>E.seeModel||t.unref(z)||e.static===!0||e.dragable===!1?null:$t(o,n),["prevent"])},[t.createElementVNode("div",Bt,[e.isGroup?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[e.groupTit?(t.openBlock(),t.createElementBlock("div",{key:0,class:"group-item-tit",title:e.groupTit},t.toDisplayString(e.groupTit),9,vt)):t.createCommentVNode("",!0),t.createElementVNode("div",{class:t.normalizeClass(["group-item-content",e.groupTit?"":"full"])},[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(e.groupData,(o,x)=>(t.openBlock(),t.createElementBlock("div",{class:t.normalizeClass(["com-item-content-child",o.isObstacle?"else":""]),style:t.normalizeStyle({width:o.width+"px",height:o.height+"px",top:o.y+"px",left:o.x+"px"}),key:x},[t.renderSlot(l.$slots,"item",{data:o},()=>[t.createElementVNode("p",null,t.toDisplayString(Math.round(o.width*100)/100)+","+t.toDisplayString(Math.round(o.height*100)/100),1),t.createElementVNode("p",null,t.toDisplayString(Math.round(o.x*100)/100)+","+t.toDisplayString(Math.round(o.y*100)/100),1)]),!E.seeModel&&!t.unref(z)&&t.unref(m)===null&&t.unref(f)===null?(t.openBlock(),t.createElementBlock("div",{key:0,class:"setting-box",style:t.normalizeStyle({display:o.showPop?"flex":"none"}),onMousedown:t.withModifiers(p=>null,["prevent","stop"])},[t.createVNode(R,{iconObj:E.settingIcon,onClick:t.withModifiers(p=>wt(o),["prevent","stop"])},null,8,["iconObj","onClick"])],36)):t.createCommentVNode("",!0),o.showPop?(t.openBlock(),t.createElementBlock("div",{key:1,class:"setting-box-pop",onMousedown:t.withModifiers(p=>null,["prevent","stop"])},[t.renderSlot(l.$slots,"setPopNormal",{data:O(o)},()=>[t.createElementVNode("div",{class:"setting-box-pop-item",onClick:p=>Et(o.id,o.inGroupId)},"移出组合",8,Dt),t.createElementVNode("div",{class:"setting-box-pop-item",onClick:p=>A(o.id,o.inGroupId)},"删除",8,Ct)])],32)):t.createCommentVNode("",!0)],6))),128))],2)],64)):t.renderSlot(l.$slots,"item",{key:1,data:e},()=>[t.createElementVNode("p",null,t.toDisplayString(Math.round(e.width*100)/100)+","+t.toDisplayString(Math.round(e.height*100)/100),1),t.createElementVNode("p",null,t.toDisplayString(Math.round(e.x*100)/100)+","+t.toDisplayString(Math.round(e.y*100)/100),1)]),!e.isGroup&&e.notGroup!==!0&&t.unref(z)?(t.openBlock(),t.createElementBlock("div",{key:2,class:t.normalizeClass(["group-checkbox",e.checked?"is-checked":"",e.disabled?"disabled":""]),onClick:o=>e.disabled?null:Kt(e)},null,10,Ot)):t.createCommentVNode("",!0),!E.seeModel&&!t.unref(z)&&t.unref(m)===null&&t.unref(f)===null?(t.openBlock(),t.createElementBlock("div",{key:3,class:"setting-box",style:t.normalizeStyle({display:e.showPop?"flex":"none"}),onMousedown:t.withModifiers(o=>null,["prevent","stop"])},[t.createVNode(R,{iconObj:E.settingIcon,onClick:t.withModifiers(o=>wt(e),["prevent","stop"])},null,8,["iconObj","onClick"])],36)):t.createCommentVNode("",!0),e.showPop?(t.openBlock(),t.createElementBlock("div",{key:4,class:t.normalizeClass(["setting-box-pop",e.isGroup===!0?"special":""]),onMousedown:t.withModifiers(o=>null,["prevent","stop"])},[e.isGroup===!0?t.renderSlot(l.$slots,"setPopSpecial",{key:0,data:O(e)},()=>[E.hideTit?t.createCommentVNode("",!0):(t.openBlock(),t.createElementBlock("div",{key:0,class:"setting-box-pop-item",onClick:o=>_("showTitPop",e.groupTit,e.id)}," 设置组合标题",8,Vt)),t.createElementVNode("div",{class:"setting-box-pop-item",onClick:o=>q(e.id)},"解除组合",8,St)]):t.renderSlot(l.$slots,"setPopNormal",{key:1,data:O(e)},()=>[e.notGroup!==!0?(t.openBlock(),t.createElementBlock("div",{key:0,class:"setting-box-pop-item",onClick:o=>kt(e.id)},"组合",8,Gt)):t.createCommentVNode("",!0),t.createElementVNode("div",{class:"setting-box-pop-item",onClick:o=>A(e.id)},"删除",8,zt)])],34)):t.createCommentVNode("",!0)]),!E.seeModel&&!t.unref(z)&&!e.move&&e.static!==!0&&e.resizable!==!1?(t.openBlock(),t.createElementBlock(t.Fragment,{key:0},[t.unref(P).indexOf("topLeft")!==-1?(t.openBlock(),t.createElementBlock("div",{key:0,class:"resize-line top-left",onMousedown:t.withModifiers(o=>W(o,e,"top-left"),["prevent","stop"])},null,40,Pt)):t.createCommentVNode("",!0),t.unref(P).indexOf("top")!==-1?(t.openBlock(),t.createElementBlock("div",{key:1,class:"resize-line top",onMousedown:t.withModifiers(o=>W(o,e,"top"),["prevent","stop"])},null,40,Ht)):t.createCommentVNode("",!0),t.unref(P).indexOf("topRight")!==-1?(t.openBlock(),t.createElementBlock("div",{key:2,class:"resize-line top-right",onMousedown:t.withModifiers(o=>W(o,e,"top-right"),["prevent","stop"])},null,40,Nt)):t.createCommentVNode("",!0),t.unref(P).indexOf("left")!==-1?(t.openBlock(),t.createElementBlock("div",{key:3,class:"resize-line left",onMousedown:t.withModifiers(o=>W(o,e,"left"),["prevent","stop"])},null,40,Wt)):t.createCommentVNode("",!0),t.unref(P).indexOf("right")!==-1?(t.openBlock(),t.createElementBlock("div",{key:4,class:"resize-line right",onMousedown:t.withModifiers(o=>W(o,e,"right"),["prevent","stop"])},null,40,Tt)):t.createCommentVNode("",!0),t.unref(P).indexOf("bottomLeft")!==-1?(t.openBlock(),t.createElementBlock("div",{key:5,class:"resize-line bottom-left",onMousedown:t.withModifiers(o=>W(o,e,"bottom-left"),["prevent","stop"])},null,40,It)):t.createCommentVNode("",!0),t.unref(P).indexOf("bottom")!==-1?(t.openBlock(),t.createElementBlock("div",{key:6,class:"resize-line bottom",onMousedown:t.withModifiers(o=>W(o,e,"bottom"),["prevent","stop"])},null,40,Yt)):t.createCommentVNode("",!0),t.unref(P).indexOf("bottomRight")!==-1?(t.openBlock(),t.createElementBlock("div",{key:7,class:"resize-line bottom-right",onMousedown:t.withModifiers(o=>W(o,e,"bottom-right"),["prevent","stop"])},null,40,Xt)):t.createCommentVNode("",!0)],64)):t.createCommentVNode("",!0)],46,mt))),128)),t.unref(m)!==null?(t.openBlock(),t.createElementBlock("div",{key:0,class:"drag-bg",style:t.normalizeStyle({width:t.unref(D).width+"px",height:t.unref(D).height+"px",top:t.unref(D).y+"px",left:t.unref(D).x+"px"})},null,4)):t.createCommentVNode("",!0),t.createElementVNode("div",{class:"height-bg",style:t.normalizeStyle({height:t.unref(J)+"px"})},null,4),t.unref(s).length===0?(t.openBlock(),t.createElementBlock("div",bt,[t.renderSlot(l.$slots,"empty",{},()=>[t.createTextVNode(" 暂无数据 ")])])):t.createCommentVNode("",!0)],512)],512))}}],nt={install(E){Rt.forEach(T=>{E.component("vueDragComponentPlus",T)})}};return typeof window<"u"&&window.Vue&&window.Vue.use(nt),nt});
