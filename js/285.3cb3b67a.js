"use strict";(self["webpackChunkvue_toutiao"]=self["webpackChunkvue_toutiao"]||[]).push([[285],{5594:function(e,t,a){a.r(t),a.d(t,{default:function(){return f}});var l=function(){var e=this,t=e._self._c;return t("div",{staticClass:"box"},[t("div",{staticClass:"box_top"},[e._v(" 发布 ")]),t("div",[t("van-cell-group",{staticClass:"name"},[t("van-field",{attrs:{placeholder:"请输入标题"},model:{value:e.title,callback:function(t){e.title=t},expression:"title"}})],1),t("van-cell-group",{staticClass:"name"},[t("van-field",{attrs:{rows:"2",autosize:"",type:"textarea",maxlength:"500",placeholder:"请输入留言","show-word-limit":""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1)],1),t("div",{staticClass:"select"},[e._v(" 请选择发布的类型 "),t("select",{directives:[{name:"model",rawName:"v-model",value:e.value,expression:"value"}],on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.value=t.target.multiple?a:a[0]}}},e._l(e.arr,(function(a,l){return t("option",{key:l,domProps:{value:a}},[e._v(e._s(a.name))])})),0)]),t("div",[t("van-uploader",{attrs:{multiple:"","after-read":e.afterRead,"max-count":1},model:{value:e.fileList,callback:function(t){e.fileList=t},expression:"fileList"}})],1),t("div",{staticClass:"btn"},[t("van-button",{attrs:{type:"default",block:"",color:"rgb(7,193,76)"},on:{click:e.getfabu}},[e._v("发布")])],1)])},s=[],i=(a(8146),a(8848)),o=(a(6280),a(7291)),n=(a(606),a(4398)),r=(a(2443),a(9864)),u=(a(7322),a(6631)),c=(a(7505),a(7061)),d=(a(7658),a(691)),p={name:"public",components:{[c.Z.name]:c.Z,[u.Z.name]:u.Z,[r.Z.name]:r.Z,[n.Z.name]:n.Z,[o.Z.name]:o.Z,[i.Z.name]:i.Z},data(){return{value:"",message:"",title:"",arr:[],uid:"634fe8fb702e9d0001edf2de",username:"17613926309",fileList:[],files:null}},methods:{afterRead(e){this.files=e.file},setfenlei(){this.$axios({method:"get",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_cate_list"}).then((e=>{this.arr=e.data.data,console.log(this.arr)}))},getfabu(){this.$axios({method:"get",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/upload/token"}).then((e=>{let t=new FormData;t.append("key",(0,d.x0)()),t.append("file",this.files),t.append("token",e.data.token),this.$axios({method:"post",url:"https://upload-z1.qiniup.com",data:t}).then((e=>{this.$axios({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/add_article",data:{title:this.title,content:this.message,cate_id:this.value._id,cate_name:this.value.name,author_id:localStorage.getItem("uid"),imageSrc:[`http://toutiao.longxiaokj.com/${e.data.key}`]}}).then((e=>{0===e.data.code&&(this.title="",this.message="",this.value="",(0,i.Z)(e.data.msg),this.fileList=[]),(0,i.Z)(e.data.msg),console.log(e)}))}))}))}},created(){this.setfenlei();let e=localStorage.getItem("token"),t=localStorage.getItem("uid");t&&e||((0,i.Z)("你还没登录，请先登录"),this.$router.push({name:"login"}))}},m=p,h=a(1001),v=(0,h.Z)(m,l,s,!1,null,"de09d0ea",null),f=v.exports}}]);
//# sourceMappingURL=285.3cb3b67a.js.map