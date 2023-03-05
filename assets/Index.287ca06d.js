import"./base.ab928bac.js";import{E as f,a as w}from"./el-skeleton-item.dc5aab59.js";import{_ as x}from"./Title.vue_vue_type_script_setup_true_lang.1f1b7bcf.js";import{g as p,r as h,o as k,l as s,m as l,E as t,B as i,z as a,F as o,Y as _,H as m,aT as B,aU as N,aV as j,aW as C}from"./index.b2e5e9b8.js";import{_ as $}from"./CoverPlay.vue_vue_type_style_index_0_lang.06daec29.js";import{E}from"./el-avatar.e78de215.js";import"./IconPark.vue_vue_type_script_setup_true_lang.ef3966b8.js";import"./Right.3b88d182.js";import"./el-image-viewer.c0000d42.js";import"./typescript.7c7271d2.js";import"./scroll.fc7cd787.js";import"./PlayOne.39c5e1c9.js";import"./size.61511ff8.js";const A={class:"grid grid-flow-row grid-cols-3 lg:grid-cols-6 gap-5"},L={class:"grid grid-flow-row grid-cols-3 lg:grid-cols-6 gap-5"},U={class:"truncate text-xs mt-2"},z={class:"truncate text-xs mt-2 text-title"},T=p({__name:"Personalize",setup(g){const n=h([]);return k(async()=>{n.value=await B()}),(y,D)=>{const r=x,c=f,u=w;return s(),l(o,null,[t(r,{title:"\u63A8\u8350\u7535\u53F0",class:"mt-5"}),t(u,{class:"w-full",loading:!n.value.length,animated:""},{template:i(()=>[a("div",A,[(s(),l(o,null,_(6,e=>a("div",{key:e,class:"flex flex-col"},[t(c,{variant:"image",class:"aspect-square !w-full !h-auto"}),t(c,{variant:"p",class:"mt-2 !w-2/3"}),t(c,{variant:"p",class:"mt-2 !w-1/3"})])),64))])]),default:i(()=>[a("div",L,[(s(!0),l(o,null,_(n.value,e=>(s(),l("div",{key:e.id},[t($,{"pic-url":e.picUrl,name:e.name,"play-count":0},null,8,["pic-url","name"]),a("div",U,m(e.name),1),a("div",z,m(e.category),1)]))),128))])]),_:1},8,["loading"])],64)}}}),F={class:"grid grid-flow-row gap-5 grid-cols-3 lg:grid-cols-5 2xl:grid-cols-10"},S={class:"grid grid-flow-row gap-5 grid-cols-5 2xl:grid-cols-10"},V={class:"mt-2 text-xs text-main text-center truncate"},q=p({__name:"Newcomer",setup(g){const n=h([]);return k(async()=>{n.value=await N()}),(y,D)=>{const r=x,c=f,u=E,e=w;return s(),l(o,null,[t(r,{title:"\u4E3B\u64AD\u65B0\u4EBA\u699C"}),t(e,{class:"w-full",loading:!n.value.length,animated:""},{template:i(()=>[a("div",F,[(s(),l(o,null,_(10,d=>a("div",{key:d},[t(c,{variant:"image",class:"skeleton-image"}),t(c,{variant:"p",class:"mt-2 !w-2/3"})])),64))])]),default:i(()=>[a("div",S,[(s(!0),l(o,null,_(n.value,(d,P)=>(s(),l("div",{key:P},[t(u,{class:"!w-full !h-auto",src:d.avatarUrl},null,8,["src"]),a("div",V,m(d.nickName),1)]))),128))])]),_:1},8,["loading"])],64)}}});const I={class:"grid grid-flow-row gap-5 grid-cols-3 lg:grid-cols-5 2xl:grid-cols-10"},H={class:"grid grid-flow-row gap-5 grid-cols-5 2xl:grid-cols-10"},M={class:"mt-2 text-xs text-main text-center truncate"},W=p({__name:"Popular",setup(g){const n=h([]);return k(async()=>{n.value=await j()}),(y,D)=>{const r=f,c=E,u=w;return s(),l(o,null,[t(x,{title:"\u6700\u70ED\u4E3B\u64AD\u699C"}),t(u,{class:"w-full",loading:!n.value.length,animated:""},{template:i(()=>[a("div",I,[(s(),l(o,null,_(10,e=>a("div",{key:e},[t(r,{variant:"image",class:"skeleton-image"}),t(r,{variant:"p",class:"mt-2 !w-2/3"})])),64))])]),default:i(()=>[a("div",H,[(s(!0),l(o,null,_(n.value,(e,d)=>(s(),l("div",{key:d},[t(c,{class:"!w-full !h-auto",src:e.avatarUrl},null,8,["src"]),a("div",M,m(e.nickName),1)]))),128))])]),_:1},8,["loading"])],64)}}});const Y={class:"grid grid-flow-row grid-cols-5 2xl:grid-cols-10 gap-5"},b={class:"grid grid-flow-row grid-cols-5 2xl:grid-cols-10 gap-5"},G={class:"truncate text-xs mt-2"},J={class:"truncate text-xs mt-2 text-title"},K=p({__name:"Pay",setup(g){const n=h([]);return k(async()=>{n.value=await C()}),(y,D)=>{const r=x,c=f,u=w;return s(),l(o,null,[t(r,{title:"\u4ED8\u8D39\u7CBE\u54C1",class:"mt-5"}),t(u,{class:"w-full",loading:!n.value.length,animated:""},{template:i(()=>[a("div",Y,[(s(),l(o,null,_(6,e=>a("div",{key:e,class:"flex flex-col"},[t(c,{variant:"image",class:"aspect-square !w-full !h-auto"}),t(c,{variant:"p",class:"mt-2 !w-2/3"}),t(c,{variant:"p",class:"mt-2 !w-1/3"})])),64))])]),default:i(()=>[a("div",b,[(s(!0),l(o,null,_(n.value,e=>(s(),l("div",{key:e.id},[t($,{"pic-url":e.picUrl,name:e.name,"play-count":0},null,8,["pic-url","name"]),a("div",G,m(e.name),1),a("div",J,m(e.creatorName),1)]))),128))])]),_:1},8,["loading"])],64)}}}),rt=p({__name:"Index",setup(g){return(n,v)=>(s(),l(o,null,[t(T),t(W),t(q),t(K)],64))}});export{rt as default};
