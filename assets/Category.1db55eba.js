import"./base.ab928bac.js";import{E as b}from"./el-button.291b702e.js";import{g as y,r as g,o as x,aI as k,l,m as i,z as n,q as v,F as f,Y as h,H as _,S as w,E as m,B as E,aJ as T,x as $,a5 as B,a1 as H}from"./index.b2e5e9b8.js";import{_ as q}from"./CoverPlay.vue_vue_type_style_index_0_lang.06daec29.js";import{_ as D}from"./_plugin-vue_export-helper.cdc0426e.js";import"./index.57e87d43.js";import"./size.61511ff8.js";import"./el-image-viewer.c0000d42.js";import"./typescript.7c7271d2.js";import"./IconPark.vue_vue_type_script_setup_true_lang.ef3966b8.js";import"./scroll.fc7cd787.js";import"./PlayOne.39c5e1c9.js";const F={class:"grid grid-flow-row grid-cols-8 2xl:lg:grid-cols-12 gap-5"},P=["onClick"],I=y({__name:"PlaylistHot",emits:["changeTag"],setup(C,{emit:d}){const o=s=>{t.value=s,d("changeTag",s)},t=g("\u5168\u90E8"),c=g();return x(async()=>{c.value=await k()}),(s,u)=>(l(),i("div",F,[n("div",{class:v(["button-text",{active:t.value=="\u5168\u90E8"}]),onClick:u[0]||(u[0]=e=>o("\u5168\u90E8"))},"\u5168\u90E8",2),(l(!0),i(f,null,h(c.value,e=>(l(),i("div",{key:e.id,class:v(["button-text",{active:t.value==e.name}]),onClick:r=>o(e.name)},_(e.name),11,P))),128))]))}});const N={class:"py-5 text-xl text-blod"},V={class:"grid grid-flow-row grid-cols-3 xl:grid-cols-5 2xl:grid-cols-7 gap-5"},z=["onClick"],A={class:"mt-2 text-xs text-main leading-5"},M={class:"mt-2 text-xs text-main text-title truncate"},S={class:"pt-8"},J=B("\u52A0\u8F7D\u66F4\u591A"),L=y({__name:"Category",setup(C){const d=H(),o=g(),t=w({init:!1,loading:!1,limit:35,before:0,more:!1,cat:"\u5168\u90E8"}),c=e=>{t.cat=e,t.before=0,t.more=!1,o.value=[],s()},s=async()=>{var e;t.loading=!0;try{const{playlists:r,lasttime:p,more:a}=await T({limit:t.limit,before:t.before,cat:t.cat});t.before<=0?o.value=r:(e=o.value)==null||e.push(...r),t.init=!0,t.loading=!1,t.before=p,t.more=a}catch{}},u=()=>{s()};return x(s),(e,r)=>{const p=b;return l(),i(f,null,[m(I,{onChangeTag:c}),n("div",N,_(t.cat)+"\u6B4C\u5355",1),n("div",V,[(l(!0),i(f,null,h(o.value,a=>(l(),i("div",{key:a.id,onClick:R=>$(d).push({name:"playlist",query:{id:a.id}})},[m(q,{name:a.name,"pic-url":a.coverImgUrl,"show-play-count":"","play-count":a.playCount},null,8,["name","pic-url","play-count"]),n("div",A,_(a.name),1),n("div",M,_(a.creator.nickname),1)],8,z))),128))]),n("div",S,[m(p,{text:"",type:"primary",class:"w-full text-full",loading:t.loading,onClick:u},{default:E(()=>[J]),_:1},8,["loading"])])],64)}}});const at=D(L,[["__scopeId","data-v-2be448ff"]]);export{at as default};
