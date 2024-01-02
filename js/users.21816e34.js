"use strict";(self["webpackChunkfrontend"]=self["webpackChunkfrontend"]||[]).push([[681],{9427:function(t,e,r){r.d(e,{Z:function(){return d}});var o=r(3396),s=r(7139);function n(t,e,r,n,a,i){return(0,o.wg)(),(0,o.iD)("button",{class:(0,s.C_)(["custom-btn",r.customButtonStyle]),onClick:e[0]||(e[0]=(...t)=>i.onClick&&i.onClick(...t))},[(0,o.WI)(t.$slots,"default")],2)}var a={name:"CustomButton",props:{customButtonStyle:{type:String,default:"w-full bg-teal-700 text-white p-2 rounded hover:bg-teal-500 mt-3"}},methods:{onClick(){this.$emit("clicked")}}},i=r(89);const l=(0,i.Z)(a,[["render",n]]);var d=l},2260:function(t,e,r){r.d(e,{Z:function(){return c}});var o=r(3396),s=r(7139);const n={class:"text-2xl font-bold mb-5 text-teal-700"};function a(t,e,r,a,i,l){return(0,o.wg)(),(0,o.iD)("h1",n,(0,s.zw)(r.text),1)}var i={props:{text:String}},l=r(89);const d=(0,l.Z)(i,[["render",a]]);var c=d},2680:function(t,e,r){r.r(e),r.d(e,{default:function(){return U}});var o=r(3396),s=r(7139);const n={class:"container mx-auto my-8 px-4 mb-40"},a={class:"overflow-x-auto bg-white rounded-lg shadow overflow-y-auto relative"},i={class:"border-collapse table-auto w-full whitespace-no-wrap bg-white table-striped relative"},l=(0,o._)("thead",null,[(0,o._)("tr",{class:"text-center"},[(0,o._)("th",{class:"py-2 px-3 sticky top-0 border-b bg-teal-700 text-white"},"ID"),(0,o._)("th",{class:"py-2 px-3 sticky top-0 border-b bg-teal-700 text-white"},"Salutation"),(0,o._)("th",{class:"py-2 px-3 sticky top-0 border-b bg-teal-700 text-white"},"Name"),(0,o._)("th",{class:"py-2 px-3 sticky top-0 border-b bg-teal-700 text-white"},"Email"),(0,o._)("th",{class:"py-2 px-3 sticky top-0 border-b bg-teal-700 text-white"},"Country"),(0,o._)("th",{class:"py-2 px-3 sticky top-0 border-b bg-teal-700 text-white"},"Actions")])],-1),d={class:"py-2 px-3 border-b border-gray-200"},c={class:"py-2 px-3 border-b border-gray-200"},u={class:"py-2 px-3 border-b border-gray-200"},h={class:"py-2 px-3 border-b border-gray-200"},p={class:"py-2 px-3 border-b border-gray-200"},b={class:"py-2 px-3 border-b border-gray-200"},w={key:0};function g(t,e,r,g,m,y){const x=(0,o.up)("NormalHeading"),f=(0,o.up)("PencilIcon"),v=(0,o.up)("CustomButton"),k=(0,o.up)("TrashIcon");return(0,o.wg)(),(0,o.iD)("div",n,[(0,o.Wm)(x,{text:"All Users"}),(0,o._)("div",a,[(0,o._)("table",i,[l,(0,o._)("tbody",null,[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(m.users,(t=>((0,o.wg)(),(0,o.iD)("tr",{key:t.id,class:"hover:bg-gray-100"},[(0,o._)("td",d,(0,s.zw)(t.id),1),(0,o._)("td",c,(0,s.zw)(t.salutation),1),(0,o._)("td",u,(0,s.zw)(t.name),1),(0,o._)("td",h,(0,s.zw)(t.email),1),(0,o._)("td",p,(0,s.zw)(t.address.country),1),(0,o._)("td",b,[this.store.getUserId!=t.id?((0,o.wg)(),(0,o.iD)("div",w,[(0,o.Wm)(v,{onClicked:e=>y.editUser(t.id),customButtonStyle:"p-2 hover:bg-green-500"},{default:(0,o.w5)((()=>[(0,o.Wm)(f,{class:"h-5 w-5 text-green-400 hover:text-white"})])),_:2},1032,["onClicked"]),(0,o.Wm)(v,{onClicked:e=>y.deleteUser(t.id),customButtonStyle:"p-2 hover:bg-red-500"},{default:(0,o.w5)((()=>[(0,o.Wm)(k,{class:"h-5 w-5 text-red-400 hover:text-white"})])),_:2},1032,["onClicked"])])):(0,o.kq)("",!0)])])))),128))])])])])}r(7658);var m=r(3667),y=r(4082),x=r(9427),f=r(2260),v=r(4460),k={components:{TrashIcon:m.Z,CustomButton:x.Z,PencilIcon:y.Z,NormalHeading:f.Z},data(){return{users:[],store:(0,v.V)()}},methods:{async deleteUser(t){await this.store.deleteUser(t),console.log(`done deleting user with id: ${t}, now refreshing ...`),await this.store.fetchUsers(),this.users=this.store.getAllUsers},editUser(t){this.$router.push({path:"/user/"+t})}},async mounted(){await this.store.fetchUsers(),this.users=this.store.getAllUsers}},_=r(89);const C=(0,_.Z)(k,[["render",g]]);var U=C},4082:function(t,e,r){r.d(e,{Z:function(){return s}});var o=r(3396);function s(t,e){return(0,o.wg)(),(0,o.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"})])}},3667:function(t,e,r){r.d(e,{Z:function(){return s}});var o=r(3396);function s(t,e){return(0,o.wg)(),(0,o.iD)("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"1.5",stroke:"currentColor","aria-hidden":"true"},[(0,o._)("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"})])}}}]);
//# sourceMappingURL=users.21816e34.js.map