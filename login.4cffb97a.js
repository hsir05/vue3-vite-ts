import{_ as y,c as v,d as w,e as F}from"./index.9166f48d.js";import{a as k,ab as g,af as S,ac as I,K as C,q as c,N as z,r as a,o as $,f as P,g as e,w as o,l as f,k as U}from"./vendor.a8d86989.js";var x=k({name:"Login",components:{Form:g,FormItem:g.Item,MyIcon:y,Checkbox:S,Input:I},setup(){const n=C(),t=c(!1),l=c(!1),h=c(!1),{t:u}=v(),m=z({user:"",password:""}),i=r=>{console.log(r,m),t.value=!0,setTimeout(()=>{n.replace(w)},800)},p=r=>{console.log(r)};function s(){l.value=!l.value}return{formState:m,loading:t,checked:h,isShow:l,t:u,handlePass:s,handleFinish:i,handleFinishFailed:p}}}),H=`@charset 'utf-8';
.ant-menu {
  font-weight: 600;
}
.collapse-transition {
  transition: 0.2s height ease-in-out, 0.2s padding-top ease-in-out, 0.2s padding-bottom ease-in-out;
}
.ant-layout-footer {
  padding: 10px;
  font-size: 14px;
}
.bb {
  border-bottom: 1px solid #f0f2f5;
}
.mr10 {
  margin-right: 10px;
}
.ml10 {
  margin-left: 10px;
}
.mt5 {
  margin-top: 5px;
}
.mb5 {
  margin-bottom: 5px;
}
.mt10 {
  margin-top: 10px;
}
.mb10 {
  margin-bottom: 10px;
}
.pt5 {
  padding-top: 5px;
}
.pb5 {
  padding-bottom: 5px;
}
.pr10 {
  padding-right: 10px;
}
.pl10 {
  padding-left: 10px;
}
.pd15 {
  padding: 14px;
}
.flex {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.h-header-action {
  font-size: 14px;
}
.h-header-action .h-header-action-item {
  cursor: pointer;
}
.h-header-action .h-header-action-item:hover {
  background-color: #f0f2f5;
}
.logo-mix-sidebar {
  margin: 0;
  width: 200px;
  color: #333;
  height: 45px;
  line-height: 45px;
  padding-left: 15px;
}
.logo-mix {
  margin: 0;
  padding-left: 10px;
  text-align: left;
  width: 200px;
  color: #333;
  height: 45px;
  line-height: 45px;
}
.main {
  min-width: 260px;
  width: 368px;
  margin: 0 auto;
  transform: translateY(30%);
  border: 1px solid #e5e5e5;
  padding: 15px;
  border-radius: 5px;
}
.main .submit-btn {
  width: 100%;
}
.main .logo-wrap {
  height: 100px;
  padding: 20px 0;
  text-align: center;
}
.main .checked {
  text-align: left;
}
`;const j={class:"main"},M=e("div",{class:"logo-wrap"},[e("img",{src:F,style:{height:"100%"},alt:""})],-1),N=e("h2",{style:{"text-align":"center"}},"vite-admin \u7BA1\u7406\u7CFB\u7EDF",-1),B={class:"checked mb10"},T=f("\u8BB0\u4F4F\u5BC6\u7801");function V(n,t,l,h,u,m){const i=a("MyIcon"),p=a("Input"),s=a("FormItem"),r=a("Checkbox"),b=a("a-button"),_=a("Form");return $(),P("div",j,[M,N,e(_,{class:"user-layout-login",model:n.formState,onFinish:n.handleFinish,onFinishFailed:n.handleFinishFailed},{default:o(()=>[e(s,null,{default:o(()=>[e(p,{value:n.formState.user,"onUpdate:value":t[1]||(t[1]=d=>n.formState.user=d),size:"large",placeholder:"Username"},{prefix:o(()=>[e(i,{type:"icon-user"})]),_:1},8,["value"])]),_:1}),e(s,null,{default:o(()=>[e(p,{value:n.formState.password,"onUpdate:value":t[2]||(t[2]=d=>n.formState.password=d),size:"large",type:n.isShow?"text":"password",placeholder:"Password"},{prefix:o(()=>[e(i,{type:"icon-mima1"})]),suffix:o(()=>[e(i,{type:n.isShow?"icon-eye1":"icon-eye",onClick:n.handlePass},null,8,["type","onClick"])]),_:1},8,["value","type"])]),_:1}),e("div",B,[e(r,{checked:n.checked,"onUpdate:checked":t[3]||(t[3]=d=>n.checked=d)},{default:o(()=>[T]),_:1},8,["checked"])]),e(s,null,{default:o(()=>[e(b,{class:"submit-btn",type:"primary",size:"large","html-type":"submit",loading:n.loading,disabled:n.formState.user===""||n.formState.password===""},{default:o(()=>[f(U(n.t("login")),1)]),_:1},8,["loading","disabled"])]),_:1})]),_:1},8,["model","onFinish","onFinishFailed"])])}x.render=V;export default x;
