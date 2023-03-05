import"./base.6b9c8e49.js";import{E as w,a as A}from"./el-tab-pane.1a08a962.js";import{g as y,r as v,m as u,F as b,H as n,z as s,a5 as k,l as r,E as t,Y as L,x as f,B as d,ax as C,aa as g,a4 as P,A as D,p as B,ad as T,o as N,aX as V,aY as I,a0 as S}from"./index.f0070d1f.js";import{E as z}from"./el-button.7b951db1.js";import{_ as M}from"./IconPark.vuevuetypescriptsetuptruelang.ef90c266.js";import{E as j}from"./el-avatar.de93e248.js";import{M as R}from"./More.75a6459a.js";import{P as U}from"./PlayOne.45758092.js";import{L as q}from"./Like.b857c887.js";import{E as Y,a as H}from"./el-table-column.88f6567c.js";import"./el-popper.64b4f96c.js";import{_ as O}from"./Playing.vuevuetypescriptsetuptruelang.7108677c.js";import{_ as Q}from"./plugin-vueexport-helper.2444895f.js";import"./typescript.4d8f05b6.js";import"./error.47aa3b19.js";import"./event.28e0ca55.js";import"./vnode.e8495fd9.js";import"./index.2216ef39.js";import"./size.86c9c628.js";const X={class:"leading-5"},G={key:0},J={key:1},K=y({__name:"MoreText",props:{text:null,end:null},setup(e){const m=e,_=v(!1),o=v(!0);return m.text&&m.text.length>m.end&&(_.value=!0),(p,a)=>(r(),u("div",X,[_.value?(r(),u(b,{key:0},[o.value?(r(),u("span",G,n(e.text.substring(0,e.end))+"...",1)):(r(),u("span",J,n(e.text)+"...",1)),s("span",{class:"ml-2 text-gray-700 dark:text-zinc-200 hover-text",onClick:a[0]||(a[0]=l=>o.value=!o.value)},"["+n(o.value?"\u8BE6\u60C5":"\u6536\u8D77")+"]",1)],64)):(r(),u(b,{key:1},[k(n(e.text),1)],64))]))}}),W={class:"flex items-stretch"},Z=["src"],tt={class:"ml-5 flex flex-col justify-between"},et={class:"text-2xl font-bold"},st={class:"my-2 flex text-xs items-center"},at={class:"mx-2 text-active"},lt={class:"flex text-tag"},nt={class:"ml-2 text-tag"},ot={class:"text-xs text-desc","leading-normal":""},it={class:"mt-2 text-xs flex"},ct={class:"ml-5"},rt={class:"justify-self-stretch mt-2 gap-x-6"},ut=s("span",null,"\u64AD\u653E\u5168\u90E8",-1),dt=s("span",null,"\u6536\u85CF",-1),mt=y({__name:"PlayListInfo",props:{playlist:null},emits:["playAll"],setup(e,{emit:m}){return(_,o)=>{const p=j,a=M,l=z;return r(),u("div",W,[s("img",{src:e.playlist.coverImgUrl,alt:"",class:"w-44 h-44 object-cover rounded-xl flex-shrink-0"},null,8,Z),s("div",tt,[s("div",et,n(e.playlist.name),1),s("div",st,[t(p,{src:e.playlist.creator.avatarUrl,size:"small",round:""},null,8,["src"]),s("div",at,n(e.playlist.creator.nickname),1),s("div",lt,[(r(!0),u(b,null,L(e.playlist.tags,i=>(r(),u("div",{key:i,class:"mr-2 hover-text"},"#"+n(i),1))),128))]),s("div",nt,n(e.playlist.createTime.toDate())+"\u521B\u5EFA",1)]),s("div",ot,[t(K,{text:e.playlist.description,end:90},null,8,["text"])]),s("div",it,[s("div",null,"\u6B4C\u66F2\uFF1A"+n(f(C)(e.playlist.trackCount)),1),s("div",ct,"\u64AD\u653E\uFF1A"+n(f(C)(e.playlist.playCount)),1)]),s("div",rt,[t(l,{type:"primary",round:"",onClick:o[0]||(o[0]=i=>m("playAll"))},{default:d(()=>[t(a,{icon:f(U),size:22,theme:"filled"},null,8,["icon"]),ut]),_:1}),t(l,{round:""},{default:d(()=>[t(a,{class:"mr-1",icon:f(q),size:18},null,8,["icon"]),dt]),_:1}),t(l,{class:"w-8",round:""},{default:d(()=>[t(a,{icon:f(R)},null,8,["icon"])]),_:1})])])])}}}),_t={key:0,class:"ml-1 text-xs text-active border rounded border-emerald-400"},pt=y({__name:"SongsList",props:{songs:null},setup(e){const{play:m}=g(),{id:_}=P(g()),o=({row:a,rowIndex:l})=>(console.log(a.id,_.value),a.id==_.value?"table-playing":""),p=a=>{m(a.id)};return(a,l)=>{const i=Y,h=H;return r(),D(h,{data:e.songs,style:{width:"100%"},"row-class-name":o,onCellDblclick:p},{default:d(()=>[t(i,{label:"",width:"50"},{default:d(c=>[t(O,{index:c.$index,"playing-id":c.row.id},null,8,["index","playing-id"])]),_:1}),t(i,{label:"\u6807\u9898","min-width":"150"},{default:d(c=>[s("span",null,n(c.row.name),1),c.row.sq?(r(),u("span",_t,"SQ")):B("",!0)]),_:1}),t(i,{prop:"al.name",label:"\u6B4C\u624B"}),t(i,{prop:"ar[0].name",label:"\u4E13\u9898"}),t(i,{label:"\u65F6\u95F4"},{default:d(c=>[k(n(f(T)(c.row.dt/1e3)),1)]),_:1})]),_:1},8,["data"])}}});const xt=Q(pt,[["__scopeId","data-v-cd6dcaab"]]),ft={key:0,class:"playlist p-5"},vt=k("comments"),St=y({__name:"Index",setup(e){const m=S(),{pushPlayList:_,play:o}=g(),p=v(),a=v("tracks"),l=v([]),i=()=>{const c=Number(m.query.id);V(c).then(x=>{p.value=x}),I(c).then(x=>{l.value=x})},h=()=>{_(!0,...l.value),o(l.value.first().id)};return N(i),(c,x)=>{const E=w,F=A;return p.value?(r(),u("div",ft,[t(mt,{playlist:p.value,onPlayAll:h},null,8,["playlist"]),t(F,{modelValue:a.value,"onUpdate:modelValue":x[0]||(x[0]=$=>a.value=$),class:"mt-2"},{default:d(()=>[t(E,{label:`\u6B4C\u66F2 ${l.value.length}`,name:"tracks"},{default:d(()=>[t(xt,{songs:l.value},null,8,["songs"])]),_:1},8,["label"]),t(E,{label:"\u8BC4\u8BBA",name:"comments"},{default:d(()=>[vt]),_:1})]),_:1},8,["modelValue"])])):B("",!0)}}});export{St as default};
