(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6b67ec3f"],{"7d19":function(e,t,s){"use strict";var o=s("e704"),a=s.n(o);a.a},d9c9:function(e,t,s){"use strict";s.r(t);var o=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"login"},[s("el-row",{staticClass:"hidden-md-and-up"},[s("el-col",[s("div",{staticClass:"sm_bg"},[s("div",{staticClass:"welcome_text"},[s("p",[e._v("Welcome")]),s("p",[e._v("to GoNowEx")]),s("span",{staticClass:"el-icon-bottom",staticStyle:{"margin-top":"15px"}})])])])],1),s("el-row",{attrs:{type:"flex"}},[s("el-col",{attrs:{md:8,xs:24,sm:24}},[s("div",{staticClass:"form_box"},[s("div",{staticClass:"logo"},[s("Logo",{attrs:{size:80}})],1),s("p",{staticClass:"welcome"},[s("span",[e._v("Welcome to "),s("span",{staticClass:"text"},[e._v("GONowEx")])])]),s("p",{staticClass:"tips"},[e._v(" Before you get started, you must login or register if you don't already have an account. ")]),s("el-form",{ref:"loginForm",staticClass:"form",attrs:{"label-position":"top",rules:e.rules,"label-width":"80px",model:e.loginForm}},[s("el-form-item",{attrs:{label:"Email",prop:"email"}},[s("el-input",{model:{value:e.loginForm.email,callback:function(t){e.$set(e.loginForm,"email",t)},expression:"loginForm.email"}})],1),s("el-form-item",{attrs:{label:"Password",prop:"password"}},[s("el-input",{model:{value:e.loginForm.password,callback:function(t){e.$set(e.loginForm,"password",t)},expression:"loginForm.password"}})],1),s("p",{staticClass:"remember"},[s("el-checkbox",{model:{value:e.checked,callback:function(t){e.checked=t},expression:"checked"}},[e._v("Remember Me")])],1)],1),s("div",{staticClass:"text_btn"},[s("span",{staticClass:"A_Text",on:{click:function(t){return e.$router.push("/forgotpassword")}}},[e._v("Forgot Password?")]),s("el-button",{attrs:{type:"primary",size:"nomal"},on:{click:function(t){return e.handleSubmit("loginForm")}}},[e._v("Login")])],1),s("div",{staticClass:"create"},[e._v(" Don't have an account? "),s("span",{staticClass:"A_Text",on:{click:function(t){return e.$router.push("/register")}}},[e._v("Create new one")])]),s("Footer")],1)]),s("el-col",{staticClass:"login_bg hidden-md-and-down",attrs:{md:16}},[s("div",{staticClass:"welcome_text"},[s("p",[e._v("Welcome")]),s("p",[e._v("to GoNowEx")])])])],1)],1)},a=[],l={data:function(){return{loginForm:{},checked:!1,rules:{email:[{required:!0,message:"请输入Email",trigger:"blur"}],password:[{required:!0,message:"请输入Password",trigger:"blur"}]}}},methods:{handleSubmit:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))}}},i=l,r=(s("7d19"),s("2877")),n=Object(r["a"])(i,o,a,!1,null,"49f4ab84",null);t["default"]=n.exports},e704:function(e,t,s){}}]);
//# sourceMappingURL=chunk-6b67ec3f.b6acf124.js.map