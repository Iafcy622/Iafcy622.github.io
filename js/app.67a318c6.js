(function(e){function t(t){for(var a,l,r=t[0],s=t[1],p=t[2],m=0,u=[];m<r.length;m++)l=r[m],Object.prototype.hasOwnProperty.call(o,l)&&o[l]&&u.push(o[l][0]),o[l]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(e[a]=s[a]);c&&c(t);while(u.length)u.shift()();return i.push.apply(i,p||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var s=n[r];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=l(l.s=n[0]))}return e}var a={},o={app:0},i=[];function l(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=a,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)l.d(n,a,function(t){return e[t]}.bind(null,a));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],s=r.push.bind(r);r.push=t,r=r.slice();for(var p=0;p<r.length;p++)t(r[p]);var c=s;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Navbar"),n("div",{staticClass:"container"},[n("router-view")],1)],1)},i=[],l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"nav-wrapper green"},[n("div",{staticClass:"container"},[n("router-link",{staticClass:"brand-logo",attrs:{to:"/"}},[e._v("Employee Manager")])],1)])},r=[],s=n("2877"),p={},c=Object(s["a"])(p,l,r,!1,null,null,null),m=c.exports,u={name:"App",components:{Navbar:m}},d=u,f=Object(s["a"])(d,o,i,!1,null,null,null),v=f.exports,y=n("8c4f"),_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"dashboard"}},[n("ul",{staticClass:"collection with-header"},[e._m(0),e._l(e.employees,(function(t){return n("li",{key:t.id,staticClass:"collection-item"},[n("div",{staticClass:"chip"},[e._v(e._s(t.department))]),e._v(" "+e._s(t.employee_id)+" : "+e._s(t.name)+" "),n("router-link",{staticClass:"secondary-content",attrs:{to:{name:"ViewEmployee",params:{employee_id:t.employee_id}}}},[n("i",{staticClass:"fa fa-eye"})])],1)}))],2),n("div",{staticClass:"fixed-action-btn"},[n("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:"/new"}},[n("i",{staticClass:"fa fa-plus"})])],1)])},h=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("li",{staticClass:"collection-header"},[n("h4",[e._v("Employees")])])}],b=(n("4160"),n("b0c0"),n("159b"),n("8aa5")),g=n.n(b),w=(n("e71f"),{apiKey:"AIzaSyBxGiU6D2DqqcWI-ZqO4Tl5loRoc7Wl2j0",authDomain:"vue-employer-tutorial.firebaseapp.com",databaseURL:"https://vue-employer-tutorial.firebaseio.com",projectId:"vue-employer-tutorial",storageBucket:"vue-employer-tutorial.appspot.com",messagingSenderId:"1081178729069",appId:"1:1081178729069:web:ff408a9c8592a732e2ed64",measurementId:"G-9VM67J13V7"}),C=g.a.initializeApp(w),E=C.firestore(),x={name:"Dashboard",data:function(){return{employees:[]}},created:function(){var e=this;E.collection("employees").orderBy("department").get().then((function(t){t.forEach((function(t){var n=t.data(),a=n.employee_id,o=n.name,i=n.department,l=n.position,r={id:t.id,employee_id:a,name:o,department:i,position:l};e.employees.push(r)}))}))}},O=x,j=Object(s["a"])(O,_,h,!1,null,"477430bb",null),P=j.exports,$=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"new-employee"}},[n("h3",[e._v("New Employee")]),n("div",{staticClass:"row"},[n("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.saveEmployee(t)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",required:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}}),n("label",[e._v("Employee ID")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}}),n("label",[e._v("Name")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.department,expression:"department"}],attrs:{type:"text",required:""},domProps:{value:e.department},on:{input:function(t){t.target.composing||(e.department=t.target.value)}}}),n("label",[e._v("Department")])])]),n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}}),n("label",[e._v("Position")])])]),n("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),n("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancell")])],1)])])},D=[],k={name:"NewEmployee",data:function(){return{employee_id:null,name:null,department:null,position:null}},methods:{saveEmployee:function(){var e=this;E.collection("employees").add({employee_id:this.employee_id,name:this.name,department:this.department,position:this.position}).then((function(){e.$router.push("/")})).catch((function(e){return console.log(e)}))}}},N=k,q=Object(s["a"])(N,$,D,!1,null,"471cf7c2",null),S=q.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"view-employee"}},[n("ul",{staticClass:"collection with-header"},[n("li",{staticClass:"collection-header"},[n("h4",[e._v(e._s(e.name))])]),n("li",{staticClass:"collection-item"},[e._v("Employee ID : "+e._s(e.employee_id))]),n("li",{staticClass:"collection-item"},[e._v("Department : "+e._s(e.department))]),n("li",{staticClass:"collection-item"},[e._v("Position : "+e._s(e.position))])]),n("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Back To Home")]),n("button",{staticClass:"btn red",on:{click:e.deleteEmployee}},[e._v("Delete")]),n("div",{staticClass:"fixed-action-btn"},[n("router-link",{staticClass:"btn-floating btn-large red",attrs:{to:{name:"EditEmployee",params:{employee_id:e.employee_id}}}},[n("i",{staticClass:"fa fa-pencil"})])],1)],1)},M=[],V={name:"ViewEmployee",data:function(){return{employee_id:null,name:null,department:null,position:null}},beforeRouteEnter:function(e,t,n){E.collection("employees").where("employee_id","==",e.params.employee_id).get().then((function(e){e.forEach((function(e){n((function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.department=e.data().department,t.position=e.data().position}))}))}))},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;E.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then((function(t){t.forEach((function(t){var n=t.data(),a=n.employee_id,o=n.name,i=n.department,l=n.position;e.employee_id=a,e.name=o,e.department=i,e.position=l}))}))},deleteEmployee:function(){var e=this;confirm("Are You Sure?")&&E.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then((function(t){t.forEach((function(t){t.ref.delete(),e.$router.push({path:"/"})}))}))}}},T=V,A=Object(s["a"])(T,I,M,!1,null,"1b169ffe",null),B=A.exports,R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"edit-employee"}},[n("h3",[e._v("Edit Employee")]),n("div",{staticClass:"row"},[n("form",{staticClass:"col s12",on:{submit:function(t){return t.preventDefault(),e.updateEmployee(t)}}},[n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.employee_id,expression:"employee_id"}],attrs:{type:"text",disabled:""},domProps:{value:e.employee_id},on:{input:function(t){t.target.composing||(e.employee_id=t.target.value)}}})])]),n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.name,expression:"name"}],attrs:{type:"text",required:""},domProps:{value:e.name},on:{input:function(t){t.target.composing||(e.name=t.target.value)}}})])]),n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.department,expression:"department"}],attrs:{type:"text",required:""},domProps:{value:e.department},on:{input:function(t){t.target.composing||(e.department=t.target.value)}}})])]),n("div",{staticClass:"row"},[n("div",{staticClass:"input-field col s12"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.position,expression:"position"}],attrs:{type:"text",required:""},domProps:{value:e.position},on:{input:function(t){t.target.composing||(e.position=t.target.value)}}})])]),n("button",{staticClass:"btn",attrs:{type:"submit"}},[e._v("Submit")]),n("router-link",{staticClass:"btn grey",attrs:{to:"/"}},[e._v("Cancel")])],1)])])},J=[],z={name:"EditEmployee",data:function(){return{employee_id:null,name:null,department:null,position:null}},beforeRouteEnter:function(e,t,n){E.collection("employees").where("employee_id","==",e.params.employee_id).get().then((function(e){e.forEach((function(e){n((function(t){t.employee_id=e.data().employee_id,t.name=e.data().name,t.department=e.data().department,t.position=e.data().position}))}))}))},watch:{$route:"fetchData"},methods:{fetchData:function(){var e=this;E.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then((function(t){t.forEach((function(t){var n=t.data(),a=n.employee_id,o=n.name,i=n.department,l=n.position;e.employee_id=a,e.name=o,e.department=i,e.position=l}))}))},updateEmployee:function(){var e=this;E.collection("employees").where("employee_id","==",this.$route.params.employee_id).get().then((function(t){t.forEach((function(t){t.ref.update({employee_id:e.employee_id,name:e.name,department:e.department,position:e.position})}))})).then((function(){e.$router.push({name:"ViewEmployee",params:{employee_id:e.employee_id}})}))}}},G=z,U=Object(s["a"])(G,R,J,!1,null,"2a9ef104",null),W=U.exports;a["a"].use(y["a"]);var H=[{path:"/",name:"Dashboard",component:P},{path:"/new",name:"NewEmployee",component:S},{path:"/:employee_id",name:"ViewEmployee",component:B},{path:"/edit/:employee_id",name:"EditEmployee",component:W}],K=new y["a"]({routes:H}),L=K;a["a"].config.productionTip=!1,new a["a"]({router:L,render:function(e){return e(v)}}).$mount("#app")}});
//# sourceMappingURL=app.67a318c6.js.map