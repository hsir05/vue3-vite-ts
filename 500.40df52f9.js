import{a as p,ae as u,K as d,r as o,o as i,f as l,w as n,g as m,l as _,k as f}from"./vendor.a8d86989.js";import{c as h,d as k}from"./index.b67edd35.js";var a=p({name:"Exception500",components:{Result:u},setup(){const e=d(),{t}=h();return{handle:()=>{e.push(k)},t}}});function b(e,t,s,x,C,v){const r=o("a-button"),c=o("Result");return i(),l(c,{status:"500",title:"500","sub-title":"Sorry, the server is reporting an error."},{extra:n(()=>[m(r,{type:"primary",onClick:e.handle},{default:n(()=>[_(f(e.t("backToHome")),1)]),_:1},8,["onClick"])]),_:1})}a.render=b;export default a;