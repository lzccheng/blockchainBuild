(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23dfbb54"],{"8f18":function(e,l,r){},9355:function(e,l,r){"use strict";var a=r("8f18"),s=r.n(a);s.a},cc4d:function(e,l,r){"use strict";r.r(l);var a=function(){var e=this,l=e.$createElement,r=e._self._c||l;return r("div",{staticClass:"register"},[r("div",{staticClass:"Form_Box"},[r("div",{staticClass:"logo"},[r("Logo",{attrs:{size:100}})],1),r("div",{staticClass:"Border_Top_Box"},[r("h4",{staticClass:"reg_text"},[e._v("Register")]),r("el-form",{ref:"registerForm",staticClass:"form",attrs:{"label-position":"top",rules:e.rules,"label-width":"80px",model:e.formLabelAlign}},[r("el-form-item",{attrs:{label:"Email",prop:"email"}},[r("el-input",{model:{value:e.formLabelAlign.email,callback:function(l){e.$set(e.formLabelAlign,"email",l)},expression:"formLabelAlign.email"}})],1),r("el-form-item",{attrs:{label:"Email Code",prop:"email_code"}},[r("el-col",{attrs:{md:20,xs:15,sm:18}},[r("el-input",{attrs:{placeholder:"please click button at right to send code to your email"},model:{value:e.formLabelAlign.email_code,callback:function(l){e.$set(e.formLabelAlign,"email_code",l)},expression:"formLabelAlign.email_code"}})],1),r("el-col",{attrs:{md:4,xs:9,span:6}},[r("el-button",{attrs:{type:"primary",icon:"el-icon-message"}},[e._v("Send Code")])],1)],1),r("el-form-item",{attrs:{label:"Password",prop:"password"}},[r("el-input",{model:{value:e.formLabelAlign.password,callback:function(l){e.$set(e.formLabelAlign,"password",l)},expression:"formLabelAlign.password"}})],1),r("el-form-item",{attrs:{label:"Password Confirmtation",prop:"password2"}},[r("el-input",{model:{value:e.formLabelAlign.password2,callback:function(l){e.$set(e.formLabelAlign,"password2",l)},expression:"formLabelAlign.password2"}})],1),r("p",[r("el-checkbox",{model:{value:e.checked,callback:function(l){e.checked=l},expression:"checked"}},[e._v("I agree with the terms and conditions")])],1),r("el-button",{staticClass:"Form_Submit",attrs:{type:"primary",size:"nomal"},on:{click:function(l){return e.handleSubmit("registerForm")}}},[e._v("Register")])],1)],1),r("Footer")],1)])},s=[],t={data:function(){return{formLabelAlign:{},checked:!1,rules:{email:[{required:!0,message:"请输入Email",trigger:"blur"}],email_code:[{required:!0,message:"请输入Email Code",trigger:"blur"}],password:[{required:!0,message:"请输入Password",trigger:"blur"}],password2:[{required:!0,message:"请确认Password",trigger:"blur"}]}}},methods:{handleSubmit:function(e){this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;alert("submit!")}))}}},o=t,i=(r("9355"),r("2877")),n=Object(i["a"])(o,a,s,!1,null,"516a97a9",null);l["default"]=n.exports}}]);
//# sourceMappingURL=chunk-23dfbb54.63d63d9e.js.map