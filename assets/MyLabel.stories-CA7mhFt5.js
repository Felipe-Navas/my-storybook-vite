import{j as F}from"./jsx-runtime-QvZ8i92b.js";import"./index-uubelm5h.js";const L=({label:s,size:v="normal",allCaps:S=!1,color:B="text-primary",fontColor:k,backgroundColor:T="transparent"})=>F.jsx("span",{className:`${v} ${B} label`,style:{color:k,backgroundColor:T},children:S?s.toUpperCase():s});L.__docgenInfo={description:"",methods:[],displayName:"MyLabel",props:{label:{required:!0,tsType:{name:"string"},description:"Text to be displayed"},size:{required:!1,tsType:{name:"union",raw:"'normal' | 'h1' | 'h2' | 'h3'",elements:[{name:"literal",value:"'normal'"},{name:"literal",value:"'h1'"},{name:"literal",value:"'h2'"},{name:"literal",value:"'h3'"}]},description:"Size of the label",defaultValue:{value:"'normal'",computed:!1}},allCaps:{required:!1,tsType:{name:"boolean"},description:"Whether the label should be all caps",defaultValue:{value:"false",computed:!1}},color:{required:!1,tsType:{name:"union",raw:"'text-primary' | 'text-secondary' | 'text-tertiary'",elements:[{name:"literal",value:"'text-primary'"},{name:"literal",value:"'text-secondary'"},{name:"literal",value:"'text-tertiary'"}]},description:"Color of the label",defaultValue:{value:"'text-primary'",computed:!1}},fontColor:{required:!1,tsType:{name:"string"},description:"Font color of the label"},backgroundColor:{required:!1,tsType:{name:"string"},description:"Background color of the label",defaultValue:{value:"'transparent'",computed:!1}}}};const V={title:"UI/Labels/MyLabel",component:L,tags:["autodocs"],parameters:{layout:"centered"},argTypes:{size:{control:"inline-radio"}}},e={args:{label:"Basic Label"}},a={args:{label:"All Caps Label",allCaps:!0}},r={args:{label:"Secondary Label",color:"text-secondary"}},o={args:{label:"Custom Color Label",fontColor:"#146b86"}},l={args:{label:"Custom Background Color Label",fontColor:"#FFF",backgroundColor:"#000000"}};var t,n,c;e.parameters={...e.parameters,docs:{...(t=e.parameters)==null?void 0:t.docs,source:{originalSource:`{
  args: {
    label: 'Basic Label'
  }
}`,...(c=(n=e.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var u,m,p;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'All Caps Label',
    allCaps: true
  }
}`,...(p=(m=a.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,i,b;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    label: 'Secondary Label',
    color: 'text-secondary'
  }
}`,...(b=(i=r.parameters)==null?void 0:i.docs)==null?void 0:b.source}}};var C,g,y;o.parameters={...o.parameters,docs:{...(C=o.parameters)==null?void 0:C.docs,source:{originalSource:`{
  args: {
    label: 'Custom Color Label',
    fontColor: '#146b86'
  }
}`,...(y=(g=o.parameters)==null?void 0:g.docs)==null?void 0:y.source}}};var f,h,x;l.parameters={...l.parameters,docs:{...(f=l.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: 'Custom Background Color Label',
    fontColor: '#FFF',
    backgroundColor: '#000000'
  }
}`,...(x=(h=l.parameters)==null?void 0:h.docs)==null?void 0:x.source}}};const _=["Basic","AllCaps","Secondary","CustomColor","CustomBackgroundColor"];export{a as AllCaps,e as Basic,l as CustomBackgroundColor,o as CustomColor,r as Secondary,_ as __namedExportsOrder,V as default};
