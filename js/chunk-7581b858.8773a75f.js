(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7581b858"],{"2f10":function(e,r,t){},ad1f:function(e,r,t){"use strict";var a=t("2f10"),o=t.n(a);o.a},cc4d:function(e,r,t){"use strict";t.r(r);var a=function(){var e=this,r=e.$createElement,t=e._self._c||r;return t("div",{staticClass:"register"},[t("div",{staticClass:"Form_Box"},[t("div",{staticClass:"logo"},[t("Logo",{attrs:{size:100}})],1),t("div",{staticClass:"Border_Top_Box"},[t("h4",{staticClass:"reg_text"},[e._v("Register")]),t("el-form",{ref:"registerForm",staticClass:"form",attrs:{"label-position":"top",rules:e.rules,"label-width":"80px",model:e.formLabelAlign}},[t("el-form-item",{attrs:{label:"Email",prop:"email"}},[t("el-input",{model:{value:e.formLabelAlign.email,callback:function(r){e.$set(e.formLabelAlign,"email",r)},expression:"formLabelAlign.email"}})],1),t("el-form-item",{attrs:{label:"Email Code",prop:"email_code"}},[t("el-col",{attrs:{md:20,xs:15,sm:18}},[t("el-input",{attrs:{placeholder:"please click button at right to send code to your email"},model:{value:e.formLabelAlign.email_code,callback:function(r){e.$set(e.formLabelAlign,"email_code",r)},expression:"formLabelAlign.email_code"}})],1),t("el-col",{attrs:{md:4,xs:9,span:6}},[t("el-button",{attrs:{type:"primary",icon:"el-icon-message"}},[e._v("Send Code")])],1)],1),t("el-form-item",{attrs:{label:"Password",prop:"password"}},[t("el-input",{attrs:{type:"password"},model:{value:e.formLabelAlign.password,callback:function(r){e.$set(e.formLabelAlign,"password",r)},expression:"formLabelAlign.password"}})],1),t("el-form-item",{attrs:{label:"Password Confirmtation",prop:"password2"}},[t("el-input",{attrs:{type:"password"},model:{value:e.formLabelAlign.password2,callback:function(r){e.$set(e.formLabelAlign,"password2",r)},expression:"formLabelAlign.password2"}})],1),t("el-divider",{attrs:{"content-position":"left"}},[e._v("Invitation Code")]),t("el-form-item",{attrs:{prop:"invite_code"}},[t("el-input",{model:{value:e.formLabelAlign.invite_code,callback:function(r){e.$set(e.formLabelAlign,"invite_code",r)},expression:"formLabelAlign.invite_code"}})],1),t("el-form-item",{attrs:{prop:"checked"}},[t("el-checkbox",{model:{value:e.formLabelAlign.checked,callback:function(r){e.$set(e.formLabelAlign,"checked",r)},expression:"formLabelAlign.checked"}},[e._v("I agree with the terms and conditions")])],1),t("el-button",{staticClass:"Form_Submit",attrs:{type:"primary",loading:e.loading,size:"nomal"},on:{click:function(r){return e.handleSubmit("registerForm")}}},[e._v("Register")])],1)],1),t("Footer")],1)])},o=[],i=t("3835"),l=(t("96cf"),t("1da1")),s=t("8237"),n=t.n(s),c=t("365c"),m={data:function(){var e=this,r=function(r,t,a){var o=e.formLabelAlign,i=o.password,l=o.password2;if(i!==l)return a(new Error("两次输入密码不一致!"));a()};return{formLabelAlign:{},loading:!1,rules:{email:[{required:!0,message:"请输入Email",trigger:"blur"}],email_code:[{required:!0,message:"请输入Email Code",trigger:"blur"}],password:[{required:!0,message:"请输入Password",trigger:"blur"}],password2:[{required:!0,message:"请确认Password",trigger:"blur"},{validator:r,trigger:"blur"}],checked:[{required:!0,message:"请勾选",trigger:"change"}]}}},methods:{handleSubmit:function(e){var r=this;this.$refs[e].validate(function(){var e=Object(l["a"])(regeneratorRuntime.mark((function e(t){var a,o,l,s,m,d,u;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!t){e.next=12;break}return r.loading=!0,a=r.formLabelAlign,o=a.email,l=a.password,s=a.invite_code,e.next=5,Object(c["b"])({username:o,pwd:n()(l),invite_code:s});case 5:m=e.sent,d=Object(i["a"])(m,1),u=d[0],r.loading=!1,u&&(r.$message("注册成功，请登录"),setTimeout((function(){r.$router.push("/login")}),2500)),e.next=14;break;case 12:return console.log("error submit!!"),e.abrupt("return",!1);case 14:case"end":return e.stop()}}),e)})));return function(r){return e.apply(this,arguments)}}())}}},d=m,u=(t("ad1f"),t("2877")),p=Object(u["a"])(d,a,o,!1,null,"0a56a91a",null);r["default"]=p.exports}}]);
//# sourceMappingURL=chunk-7581b858.8773a75f.js.map