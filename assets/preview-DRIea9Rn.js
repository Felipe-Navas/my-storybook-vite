const __vite__fileDeps=["./DocsRenderer-K4EAMTCU-7qqxrWXK.js","./iframe-DKVc_Zj3.js","./index-uubelm5h.js","./react-18-Dz2HlB-T.js","./index-Dei0BBcc.js","./index-CR0FvWQF.js","./jsx-runtime-QvZ8i92b.js","./index-D-8MO0q_.js","./index-D0OBZnxu.js","./index-DrFu-skq.js"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import{_ as a}from"./iframe-DKVc_Zj3.js";import"../sb-preview/runtime.js";const{global:s}=__STORYBOOK_MODULE_GLOBAL__;var _=Object.entries(s.TAGS_OPTIONS??{}).reduce((e,r)=>{let[t,o]=r;return o.excludeFromDocsStories&&(e[t]=!0),e},{}),d={docs:{renderer:async()=>{let{DocsRenderer:e}=await a(()=>import("./DocsRenderer-K4EAMTCU-7qqxrWXK.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9]),import.meta.url);return new e},stories:{filter:e=>{var r;return(e.tags||[]).filter(t=>_[t]).length===0&&!((r=e.parameters.docs)!=null&&r.disable)}}}};export{d as parameters};
