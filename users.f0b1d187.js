import{a as w,aa as C,S as B,ab as m,ac as D,ad as h,q as p,N as I,r as o,o as N,f as T,g as e,w as a,l as i}from"./vendor.57a28caf.js";/* empty css              */import"./index.05677622.js";/* empty css              */const U=[{title:"\u7528\u6237\u540D\u79F0",dataIndex:"userName",align:"center",key:"userName"},{title:"\u89D2\u8272",dataIndex:"code",align:"center",key:"code"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",align:"center",key:"3"},{title:"\u72B6\u6001",dataIndex:"status",align:"center",width:130,key:"2",slots:{customRender:"statusAction"}},{title:"\u5907\u6CE8",dataIndex:"remark",align:"center",width:100,key:"2"},{title:"\u64CD\u4F5C",key:"operation",fixed:"right",align:"center",width:130,slots:{customRender:"action"}}];var _=w({name:"Users",components:{Table:C,Switch:B,Form:m,Input:D,Select:h,SelectOption:h.Option,FormItem:m.Item},setup(){const t=p([{userName:"\u5F20\u4E09",code:"superAdmin",status:"1",id:1,createTime:"2021/09/01",remark:"\u6D4B\u8BD5"},{userName:"\u674E\u56DB",code:"admin",status:"0",id:2,createTime:"2021/09/01",remark:"\u6D4B\u8BD5"}]),s=p(),c=I({userName:"",status:""});return{tableData:t,columns:U,formRef:s,formState:c,resetForm:()=>{s.value.resetFields()},handleFinish:n=>{console.log(n,c)},handleFinishFailed:n=>{console.log(n)},addBtn:()=>{},handleSwitch:n=>{console.log(n)}}}});const j=i("\u7981\u7528"),A=i("\u542F\u7528"),E=i("\u5168\u90E8"),O=i("\u641C\u7D22"),R=i("\u91CD\u7F6E"),V={class:"mt10"},$=i("\u65B0\u589E"),q=e("a",null,"\u7F16\u8F91",-1),K=e("a",{class:"ml10"},"\u5220\u9664",-1);function x(t,s,c,f,F,k){const r=o("Input"),d=o("FormItem"),n=o("SelectOption"),S=o("Select"),u=o("a-button"),y=o("Form"),b=o("Switch"),v=o("Table");return N(),T("div",null,[e(y,{layout:"inline",ref:"formRef",model:t.formState,onFinish:t.handleFinish,onFinishFailed:t.handleFinishFailed},{default:a(()=>[e(d,{label:"\u7528\u6237\u540D\u79F0",name:"userName"},{default:a(()=>[e(r,{value:t.formState.userName,"onUpdate:value":s[1]||(s[1]=l=>t.formState.userName=l),placeholder:"\u8BF7\u8F93\u5165\u7528\u6237\u540D\u79F0",style:{width:"150px"}},null,8,["value"])]),_:1}),e(d,{label:"\u72B6\u6001",name:"status"},{default:a(()=>[e(S,{value:t.formState.status,"onUpdate:value":s[2]||(s[2]=l=>t.formState.status=l),placeholder:"\u8BF7\u9009\u62E9\u72B6\u6001",style:{width:"150px"}},{default:a(()=>[e(n,{value:"0"},{default:a(()=>[j]),_:1}),e(n,{value:"1"},{default:a(()=>[A]),_:1}),e(n,{value:""},{default:a(()=>[E]),_:1})]),_:1},8,["value"])]),_:1}),e(d,null,{default:a(()=>[e(u,{type:"primary","html-type":"submit"},{default:a(()=>[O]),_:1}),e(u,{type:"primary",onClick:t.resetForm,class:"ml10"},{default:a(()=>[R]),_:1},8,["onClick"])]),_:1})]),_:1},8,["model","onFinish","onFinishFailed"]),e("div",V,[e(u,{type:"primary",onClick:t.addBtn,class:"mr10"},{default:a(()=>[$]),_:1},8,["onClick"])]),e(v,{columns:t.columns,class:"mt10","data-source":t.tableData,pagination:!1,rowKey:"id",bordered:"",scroll:{y:400}},{statusAction:a(({index:l})=>[e(b,{"checked-children":"\u5DF2\u542F\u7528","un-checked-children":"\u5DF2\u7981\u7528",unCheckedValue:"1",checkedValue:"0",onChange:t.handleSwitch,checked:t.tableData[l].status,"onUpdate:checked":g=>t.tableData[l].status=g},null,8,["onChange","checked","onUpdate:checked"])]),action:a(()=>[q,K]),_:1},8,["columns","data-source"])])}_.render=x;export default _;