import{a as p,K as d,u as i,o as u,f}from"./vendor.a8d86989.js";var c=p({name:"Redirect",setup(){const{currentRoute:n,replace:a}=d(),{params:e,query:o}=i(n),{path:t,_redirect_type:s="path"}=e;Reflect.deleteProperty(e,"_redirect_type"),Reflect.deleteProperty(e,"path");const r=Array.isArray(t)?t.join("/"):t;a(s==="name"?{name:r,query:o,params:e}:{path:r.startsWith("/")?r:"/"+r,query:o})}});function _(n,a,e,o,t,s){return u(),f("div")}c.render=_;export default c;