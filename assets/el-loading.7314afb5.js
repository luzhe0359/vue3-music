import{r as h,S as T,aL as $,X as I,K as f,B as N,k as V,v as E,E as P,T as O,n as w,f as _,J as A,b as R,aM as j}from"./index.b2e5e9b8.js";import{u as B,r as b,i as K,g as m,b as C}from"./base.ab928bac.js";import{a as M}from"./IconPark.vue_vue_type_script_setup_true_lang.ef3966b8.js";function Z(t){let e;const l=B("loading"),o=h(!1),n=T({...t,originalPosition:"",originalOverflow:"",visible:!1});function a(s){n.text=s}function c(){const s=n.parent;if(!s.vLoadingAddClassList){let u=s.getAttribute("loading-number");u=Number.parseInt(u)-1,u?s.setAttribute("loading-number",u.toString()):(b(s,l.bm("parent","relative")),s.removeAttribute("loading-number")),b(s,l.bm("parent","hidden"))}d(),v.unmount()}function d(){var s,u;(u=(s=r.$el)==null?void 0:s.parentNode)==null||u.removeChild(r.$el)}function p(){var s;t.beforeClose&&!t.beforeClose()||(o.value=!0,clearTimeout(e),e=window.setTimeout(i,400),n.visible=!1,(s=t.closed)==null||s.call(t))}function i(){if(!o.value)return;const s=n.parent;o.value=!1,s.vLoadingAddClassList=void 0,c()}const v=$({name:"ElLoading",setup(){return()=>{const s=n.spinner||n.svg,u=f("svg",{class:"circular",viewBox:n.svgViewBox?n.svgViewBox:"0 0 50 50",...s?{innerHTML:s}:{}},[f("circle",{class:"path",cx:"25",cy:"25",r:"20",fill:"none"})]),S=n.text?f("p",{class:l.b("text")},[n.text]):void 0;return f(O,{name:l.b("fade"),onAfterLeave:i},{default:N(()=>[V(P("div",{style:{backgroundColor:n.background||""},class:[l.b("mask"),n.customClass,n.fullscreen?"is-fullscreen":""]},[f("div",{class:l.b("spinner")},[u,S])]),[[E,n.visible]])])})}}}),r=v.mount(document.createElement("div"));return{...I(n),setText:a,removeElLoadingChild:d,close:p,handleAfterLeave:i,vm:r,get $el(){return r.$el}}}let g;const q=function(t={}){if(!K)return;const e=z(t);if(e.fullscreen&&g)return g;const l=Z({...e,closed:()=>{var n;(n=e.closed)==null||n.call(e),e.fullscreen&&(g=void 0)}});D(e,e.parent,l),L(e,e.parent,l),e.parent.vLoadingAddClassList=()=>L(e,e.parent,l);let o=e.parent.getAttribute("loading-number");return o?o=`${Number.parseInt(o)+1}`:o="1",e.parent.setAttribute("loading-number",o),e.parent.appendChild(l.$el),w(()=>l.visible.value=e.visible),e.fullscreen&&(g=l),l},z=t=>{var e,l,o,n;let a;return _(t.target)?a=(e=document.querySelector(t.target))!=null?e:document.body:a=t.target||document.body,{parent:a===document.body||t.body?document.body:a,background:t.background||"",svg:t.svg||"",svgViewBox:t.svgViewBox||"",spinner:t.spinner||!1,text:t.text||"",fullscreen:a===document.body&&((l=t.fullscreen)!=null?l:!0),lock:(o=t.lock)!=null?o:!1,customClass:t.customClass||"",visible:(n=t.visible)!=null?n:!0,target:a}},D=async(t,e,l)=>{const{nextZIndex:o}=M(),n={};if(t.fullscreen)l.originalPosition.value=m(document.body,"position"),l.originalOverflow.value=m(document.body,"overflow"),n.zIndex=o();else if(t.parent===document.body){l.originalPosition.value=m(document.body,"position"),await w();for(const a of["top","left"]){const c=a==="top"?"scrollTop":"scrollLeft";n[a]=`${t.target.getBoundingClientRect()[a]+document.body[c]+document.documentElement[c]-Number.parseInt(m(document.body,`margin-${a}`),10)}px`}for(const a of["height","width"])n[a]=`${t.target.getBoundingClientRect()[a]}px`}else l.originalPosition.value=m(e,"position");for(const[a,c]of Object.entries(n))l.$el.style[a]=c},L=(t,e,l)=>{const o=B("loading");["absolute","fixed","sticky"].includes(l.originalPosition.value)?b(e,o.bm("parent","relative")):C(e,o.bm("parent","relative")),t.fullscreen&&t.lock?C(e,o.bm("parent","hidden")):b(e,o.bm("parent","hidden"))},x=Symbol("ElLoading"),k=(t,e)=>{var l,o,n,a;const c=e.instance,d=r=>A(e.value)?e.value[r]:void 0,p=r=>{const s=_(r)&&(c==null?void 0:c[r])||r;return s&&h(s)},i=r=>p(d(r)||t.getAttribute(`element-loading-${j(r)}`)),y=(l=d("fullscreen"))!=null?l:e.modifiers.fullscreen,v={text:i("text"),svg:i("svg"),svgViewBox:i("svgViewBox"),spinner:i("spinner"),background:i("background"),customClass:i("customClass"),fullscreen:y,target:(o=d("target"))!=null?o:y?void 0:t,body:(n=d("body"))!=null?n:e.modifiers.body,lock:(a=d("lock"))!=null?a:e.modifiers.lock};t[x]={options:v,instance:q(v)}},F=(t,e)=>{for(const l of Object.keys(e))R(e[l])&&(e[l].value=t[l])},Y={mounted(t,e){e.value&&k(t,e)},updated(t,e){const l=t[x];e.oldValue!==e.value&&(e.value&&!e.oldValue?k(t,e):e.value&&e.oldValue?A(e.value)&&F(e.value,l.options):l==null||l.instance.close())},unmounted(t){var e;(e=t[x])==null||e.instance.close()}};export{Y as v};
