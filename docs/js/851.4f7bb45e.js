"use strict";(self["webpackChunkcffinit"]=self["webpackChunkcffinit"]||[]).push([[851],{9795:(e,i,t)=>{t.r(i),t.d(i,{default:()=>z});var n=t(3673);const d=(0,n.HX)("data-v-f76c93b4");(0,n.dD)("data-v-f76c93b4");const r={id:"metroline"},a={id:"form"},o=(0,n.Wm)("div",{id:"form-title"},[(0,n.Wm)("h1",{class:"page-title"}," Identifiers ")],-1),s={id:"form-content"},l=(0,n.Uk)(" Add identifier "),u={id:"form-button-bar"};(0,n.Cn)();const p=d(((e,i,t,p,c,v)=>{const m=(0,n.up)("Stepper"),f=(0,n.up)("IdentifierCardViewing"),w=(0,n.up)("IdentifierCardEditing"),g=(0,n.up)("q-btn"),b=(0,n.up)("StepperActions");return(0,n.wg)(),(0,n.j4)(n.HY,null,[(0,n.Wm)("div",r,[(0,n.Wm)(m)]),(0,n.Wm)("div",a,[o,(0,n.Wm)("div",s,[((0,n.wg)(!0),(0,n.j4)(n.HY,null,(0,n.Ko)(e.identifiers,((t,d)=>((0,n.wg)(),(0,n.j4)("div",{key:d,class:"q-mb-md"},[e.editingId!==d?((0,n.wg)(),(0,n.j4)(f,{key:0,index:d,identifier:t,onEditPressed:()=>e.editingId=d},null,8,["index","identifier","onEditPressed"])):((0,n.wg)(),(0,n.j4)(w,(0,n.dG)({key:1,index:d},t,{onUpdateType:e.setIdentifierTypeField,onUpdateValue:e.setIdentifierValueField,onUpdateDescription:e.setIdentifierDescriptionField,onClosePressed:i[1]||(i[1]=()=>e.editingId=-1),onRemovePressed:e.removeIdentifier}),null,16,["index","onUpdateType","onUpdateValue","onUpdateDescription","onRemovePressed"]))])))),128)),(0,n.Wm)(g,{"no-caps":"",onClick:e.addIdentifier,color:"primary"},{default:d((()=>[l])),_:1},8,["onClick"])]),(0,n.Wm)("div",u,[(0,n.Wm)(b)])])],64)}));var c=t(1959),v=t(5264),m=t(2902);t(246);const f={class:"row items-center no-wrap"},w={class:"q-gutter-md items-center no-wrap"},g={class:"q-gutter-md items-center no-wrap"};function b(e,i,t,d,r,a){const o=(0,n.up)("q-option-group"),s=(0,n.up)("q-input"),l=(0,n.up)("q-card-section"),u=(0,n.up)("q-btn"),p=(0,n.up)("q-card-actions"),c=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(c,{flat:"",bordered:"",class:"bg-formcard"},{default:(0,n.w5)((()=>[(0,n.Wm)(l,null,{default:(0,n.w5)((()=>[(0,n.Wm)("div",f,[(0,n.Wm)(o,{inline:"",type:"radio","model-value":e.type,options:e.typeOptions,"onUpdate:modelValue":i[1]||(i[1]=i=>e.$emit("updateType","type",i))},null,8,["model-value","options"])]),(0,n.Wm)("div",w,[(0,n.Wm)(s,{"bg-color":"white",label:"Value",outlined:"",standout:"",dense:"","model-value":e.value,"onUpdate:modelValue":i[2]||(i[2]=i=>e.$emit("updateValue","value",i)),rules:[e.validateValue]},null,8,["model-value","rules"])]),(0,n.Wm)("div",g,[(0,n.Wm)(s,{"bg-color":"white",label:"Description",outlined:"",standout:"",dense:"","model-value":e.description,"onUpdate:modelValue":i[3]||(i[3]=i=>e.$emit("updateDescription","description",i)),rules:[e.validateDescription]},null,8,["model-value","rules"])])])),_:1}),(0,n.Wm)(p,{align:"between"},{default:(0,n.w5)((()=>[(0,n.Wm)(u,{icon:"delete",color:"negative",label:"Remove",dense:"",onClick:i[4]||(i[4]=i=>e.$emit("removePressed"))}),(0,n.Wm)(u,{icon:"close",label:"Close",dense:"",onClick:i[5]||(i[5]=i=>e.$emit("closePressed"))})])),_:1})])),_:1})}var y=t(4334);const I=(0,n.aZ)({name:"IdentifierCardEditing",props:{index:{type:Number,required:!0},type:{type:String,default:""},value:{type:String,default:""},description:{type:String,default:""}},setup(e){const i={doi:(0,y.rk)("/definitions/identifier/anyOf/0/properties/value"),url:(0,y.rk)("/definitions/identifier/anyOf/1/properties/value"),swh:(0,y.rk)("/definitions/identifier/anyOf/2/properties/value"),other:(0,y.rk)("/definitions/identifier/anyOf/3/properties/value")};return{validateValue:t=>i[e.type](t),validateDescription:(0,y.zN)("/definitions/identifier-description"),typeOptions:[{label:"DOI",value:"doi"},{label:"URL",value:"url"},{label:"Software Heritage",value:"swh"},{label:"Other",value:"other"}]}},emits:["closePressed","removePressed","updateType","updateValue","updateDescription"]});var W=t(151),C=t(5589),k=t(7011),q=t(1206),h=t(9367),V=t(9892),Z=t(7518),O=t.n(Z);I.render=b;const j=I;O()(I,"components",{QCard:W.Z,QCardSection:C.Z,QOptionGroup:k.Z,QInput:q.Z,QCardActions:h.Z,QBtn:V.Z});var D=t(2323);const P={class:"row items-center no-wrap"},S={class:"col-11"},U={class:"text-subtitle1"},Q={class:"text-subtitle1"},x={class:"text-subtitle1"},E={class:"col-1"};function _(e,i,t,d,r,a){const o=(0,n.up)("q-btn"),s=(0,n.up)("q-card-section"),l=(0,n.up)("q-card");return(0,n.wg)(),(0,n.j4)(l,{flat:"",bordered:"",class:"bg-formcard",onMouseover:i[2]||(i[2]=i=>e.showEdit=!0),onMouseleave:i[3]||(i[3]=i=>e.showEdit=!1)},{default:(0,n.w5)((()=>[(0,n.Wm)(s,null,{default:(0,n.w5)((()=>[(0,n.Wm)("div",P,[(0,n.Wm)("div",S,[(0,n.Wm)("div",U,(0,D.zw)(e.identifier.type),1),(0,n.Wm)("div",Q,(0,D.zw)(e.identifier.value),1),(0,n.Wm)("div",x,(0,D.zw)(e.identifier.description),1)]),(0,n.Wm)("div",E,[e.showEdit?((0,n.wg)(),(0,n.j4)(o,{key:0,color:"primary",round:"",flat:"",icon:"edit",onClick:i[1]||(i[1]=i=>e.$emit("editPressed"))})):(0,n.kq)("",!0)])])])),_:1})])),_:1})}const F=(0,n.aZ)({name:"IdentifierCardViewing",props:{index:{type:Number,required:!0},identifier:{type:Object,required:!0}},setup(){const e=(0,c.iH)(!1);return{showEdit:e}},emits:["editPressed"]});F.render=_;const H=F;O()(F,"components",{QCard:W.Z,QCardSection:C.Z,QBtn:V.Z});var T=t(1364);const $=(0,n.aZ)({name:"ScreenIdentifiers",components:{Stepper:v.Z,StepperActions:m.Z,IdentifierCardEditing:j,IdentifierCardViewing:H},setup(){const{identifiers:e,setIdentifiers:i}=(0,T.Y)(),t=(0,c.iH)(-1);return{identifiers:e,editingId:t,setIdentifierTypeField(n,d){const r=Object.assign({},e.value[t.value]);r.type=d,e.value[t.value]=r,i(e.value)},setIdentifierValueField(n,d){const r=Object.assign({},e.value[t.value]);r.value=d,e.value[t.value]=r,i(e.value)},setIdentifierDescriptionField(n,d){const r=Object.assign({},e.value[t.value]);r.description=d,e.value[t.value]=r,i(e.value)},removeIdentifier(){const n=[...e.value];n.splice(t.value,1),i(n),t.value=-1},addIdentifier(){const n={type:"doi",value:"",description:""},d=[...e.value,n];i(d),t.value=d.length-1}}}});$.render=p,$.__scopeId="data-v-f76c93b4";const z=$;O()($,"components",{QBtn:V.Z})}}]);