"use strict";(self["webpackChunkvue_toutiao"]=self["webpackChunkvue_toutiao"]||[]).push([[183],{7183:function(t,e,n){n.r(e),n.d(e,{default:function(){return B}});var i=function(){var t=this,e=t._self._c;return e("div",[e("form",{staticClass:"search_top",attrs:{action:"/"}},[e("van-search",{attrs:{"show-action":"",autofocus:"",placeholder:"请输入搜索关键词"},on:{search:t.onSearch,cancel:t.onCancel,focus:t.focus},scopedSlots:t._u([{key:"left",fn:function(){return[e("div",{on:{click:t.back}},[e("van-icon",{attrs:{name:"arrow-left"}})],1)]},proxy:!0}]),model:{value:t.value,callback:function(e){t.value=e},expression:"value"}})],1),e("div",{directives:[{name:"show",rawName:"v-show",value:t.ishistory,expression:"ishistory"}],staticClass:"box_history"},[e("div",{staticClass:"suosou_history"},[e("p",[t._v("搜索历史")]),e("van-icon",{attrs:{name:"delete-o"},on:{click:t.del}})],1),e("div",t._l(t.arr,(function(n,i){return e("van-cell",{key:i,staticClass:"history",attrs:{title:n,"is-link":""},on:{click:function(e){return t.sousuohistory(n)}},scopedSlots:t._u([{key:"right-icon",fn:function(){return[e("van-icon",{attrs:{name:"cross",size:"20"},on:{click:function(e){return e.stopPropagation(),t.delete_history(i)}}})]},proxy:!0}],null,!0)})})),1)]),e("sousuo-list",{directives:[{name:"show",rawName:"v-show",value:t.sou,expression:"sou"}],staticClass:"leibiaojieguo",attrs:{val:t.val}})],1)},o=[],s=(n(2443),n(9864)),a=(n(7322),n(6631)),l=(n(5825),n(9858)),r=(n(1958),n(3332),n(6742),n(3094),n(7984),n(3915)),c=n.n(r),u=n(9299),d=n(855),h=n(4771),f=n(5781),v=n(7061),p=(0,d.d)("search"),g=p[0],m=p[1],y=p[2];function k(t,e,n,i){function o(){if(n.label||e.label)return t("div",{class:m("label")},[n.label?n.label():e.label])}function s(){if(e.showAction)return t("div",{class:m("action"),attrs:{role:"button",tabindex:"0"},on:{click:o}},[n.action?n.action():e.actionText||y("cancel")]);function o(){n.action||((0,h.j8)(i,"input",""),(0,h.j8)(i,"cancel"))}}var a={attrs:i.data.attrs,on:(0,u.Z)({},i.listeners,{keypress:function(t){13===t.keyCode&&((0,f.PF)(t),(0,h.j8)(i,"search",e.value)),(0,h.j8)(i,"keypress",t)}})},l=(0,h.ED)(i);return l.attrs=void 0,t("div",c()([{class:m({"show-action":e.showAction}),style:{background:e.background}},l]),[null==n.left?void 0:n.left(),t("div",{class:m("content",e.shape)},[o(),t(v.Z,c()([{attrs:{type:"search",border:!1,value:e.value,leftIcon:e.leftIcon,rightIcon:e.rightIcon,clearable:e.clearable,clearTrigger:e.clearTrigger},scopedSlots:{"left-icon":n["left-icon"],"right-icon":n["right-icon"]}},a]))]),s()])}k.props={value:String,label:String,rightIcon:String,actionText:String,background:String,showAction:Boolean,clearTrigger:String,shape:{type:String,default:"square"},clearable:{type:Boolean,default:!0},leftIcon:{type:String,default:"search"}};var b=g(k),Z=(n(8146),n(8848)),C=(n(7658),function(){var t=this,e=t._self._c;return e("div",{staticClass:"list-content"},[e("van-list",{attrs:{finished:t.finished,offset:"","finished-text":"没有更多了"},on:{load:function(e){return t.onLoad(t.val)}},model:{value:t.loading,callback:function(e){t.loading=e},expression:"loading"}},t._l(t.list,(function(n,i){return e("van-cell",{key:i,on:{click:function(e){return t.jinruxq(n._id)}}},[n.imageSrc.length>1?e("div",{staticClass:"content1"},[e("h3",[t._v(t._s(n.title))]),e("div",{staticClass:"content-img"},t._l(n.imageSrc,(function(t,n){return e("div",{key:n,staticClass:"content-div"},[e("img",{attrs:{src:t,alt:""}})])})),0)]):e("div",{staticClass:"content"},[e("h3",[t._v(t._s(n.title))]),t._l(n.imageSrc,(function(t,n){return e("div",{key:n,staticClass:"content-img"},[e("img",{attrs:{src:t,alt:""}})])}))],2),e("div",{staticClass:"content-bottom"},[e("p",[t._v("作者"+t._s(n.author))]),e("p",[t._v(t._s(n.comment)+"评论")]),e("p",[t._v("发布时间"+t._s(new Date(n.time).toLocaleDateString()))]),e("div",[e("van-icon",{attrs:{name:"cross"}})],1)])])})),1)],1)}),S=[],_=(n(6791),n(4269)),x=(n(446),n(8186)),w=(n(2763),n(5094)),I=n(70),$={name:"sousuoList",components:{[l.Z.name]:l.Z,[w.Z.name]:w.Z,[x.Z.name]:x.Z,[_.Z.name]:_.Z,[a.Z.name]:a.Z},data(){return{loading:!1,finished:!1,list:[],skip:0}},props:["val"],methods:{onLoad(t){(0,I.ZP)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/search",data:{key_word:t,skip:this.skip,limit:10}}).then((t=>{this.list.push(...t.data.data),console.log(t)})),this.skip++,this.loading=!1},jinruxq(t){this.$router.push({name:"listcontent",params:{id:t}})}},watch:{val(t){this.onLoad(t),this.list=[]}}},L=$,T=n(1001),P=(0,T.Z)(L,C,S,!1,null,"6e6a74b6",null),E=P.exports,O={name:"search",data(){return{value:"",arr:[],sou:!1,val:"",ishistory:!0}},components:{sousuoList:E,[Z.Z.name]:Z.Z,[b.name]:b,[l.Z.name]:l.Z,[a.Z.name]:a.Z,[s.Z.name]:s.Z},methods:{onSearch(t){""===t.trim()||(this.arr.push(t.trim()),this.arr=[...new Set(this.arr)],this.val=t,localStorage.setItem("sousuohistory",this.arr),this.sou=!0,this.ishistory=!1)},onCancel(){this.value=""},back(){this.$router.go(-1)},del(){this.arr=[],localStorage.setItem("sousuohistory",this.arr)},focus(){this.ishistory=!0,this.sou=!1},sousuohistory(t){this.onSearch(t)},delete_history(t){this.arr.splice(t,1),localStorage.setItem("sousuohistory",this.arr)}},mounted(){this.arr=localStorage.getItem("sousuohistory").split(",")}},j=O,A=(0,T.Z)(j,i,o,!1,null,"4419949e",null),B=A.exports},9864:function(t,e,n){var i=n(3915),o=n.n(i),s=n(855),a=n(4771),l=n(1047),r=(0,s.d)("cell-group"),c=r[0],u=r[1];function d(t,e,n,i){var s,r=t("div",o()([{class:[u({inset:e.inset}),(s={},s[l.r5]=e.border,s)]},(0,a.ED)(i,!0)]),[null==n.default?void 0:n.default()]);return e.title||n.title?t("div",{key:i.data.key},[t("div",{class:u("title",{inset:e.inset})},[n.title?n.title():e.title]),r]):r}d.props={title:String,inset:Boolean,border:{type:Boolean,default:!0}},e["Z"]=c(d)},2443:function(t,e,n){n(1958)},8848:function(t,e,n){n.d(e,{Z:function(){return $}});n(7658);var i=n(9299),o=n(6369),s=n(855),a=n(3370),l=0;function r(t){t?(l||document.body.classList.add("van-toast--unclickable"),l++):(l--,l||document.body.classList.remove("van-toast--unclickable"))}var c=n(7846),u=n(9858),d=n(4958),h=(0,s.d)("toast"),f=h[0],v=h[1],p=f({mixins:[(0,c.e)()],props:{icon:String,className:null,iconPrefix:String,loadingType:String,forbidClick:Boolean,closeOnClick:Boolean,message:[Number,String],type:{type:String,default:"text"},position:{type:String,default:"middle"},transition:{type:String,default:"van-fade"},lockScroll:{type:Boolean,default:!1}},data:function(){return{clickable:!1}},mounted:function(){this.toggleClickable()},destroyed:function(){this.toggleClickable()},watch:{value:"toggleClickable",forbidClick:"toggleClickable"},methods:{onClick:function(){this.closeOnClick&&this.close()},toggleClickable:function(){var t=this.value&&this.forbidClick;this.clickable!==t&&(this.clickable=t,r(t))},onAfterEnter:function(){this.$emit("opened"),this.onOpened&&this.onOpened()},onAfterLeave:function(){this.$emit("closed")},genIcon:function(){var t=this.$createElement,e=this.icon,n=this.type,i=this.iconPrefix,o=this.loadingType,s=e||"success"===n||"fail"===n;return s?t(u.Z,{class:v("icon"),attrs:{classPrefix:i,name:e||n}}):"loading"===n?t(d.Z,{class:v("loading"),attrs:{type:o}}):void 0},genMessage:function(){var t=this.$createElement,e=this.type,n=this.message;if((0,a.Xq)(n)&&""!==n)return"html"===e?t("div",{class:v("text"),domProps:{innerHTML:n}}):t("div",{class:v("text")},[n])}},render:function(){var t,e=arguments[0];return e("transition",{attrs:{name:this.transition},on:{afterEnter:this.onAfterEnter,afterLeave:this.onAfterLeave}},[e("div",{directives:[{name:"show",value:this.value}],class:[v([this.position,(t={},t[this.type]=!this.icon,t)]),this.className],on:{click:this.onClick}},[this.genIcon(),this.genMessage()])])}}),g=n(1015),m={icon:"",type:"text",mask:!1,value:!0,message:"",className:"",overlay:!1,onClose:null,onOpened:null,duration:2e3,iconPrefix:void 0,position:"middle",transition:"van-fade",forbidClick:!1,loadingType:void 0,getContainer:"body",overlayStyle:null,closeOnClick:!1,closeOnClickOverlay:!1},y={},k=[],b=!1,Z=(0,i.Z)({},m);function C(t){return(0,a.Kn)(t)?t:{message:t}}function S(t){return document.body.contains(t)}function _(){if(a.sk)return{};if(k=k.filter((function(t){return!t.$el.parentNode||S(t.$el)})),!k.length||b){var t=new(o.ZP.extend(p))({el:document.createElement("div")});t.$on("input",(function(e){t.value=e})),k.push(t)}return k[k.length-1]}function x(t){return(0,i.Z)({},t,{overlay:t.mask||t.overlay,mask:void 0,duration:void 0})}function w(t){void 0===t&&(t={});var e=_();return e.value&&e.updateZIndex(),t=C(t),t=(0,i.Z)({},Z,y[t.type||Z.type],t),t.clear=function(){e.value=!1,t.onClose&&(t.onClose(),t.onClose=null),b&&!a.sk&&e.$on("closed",(function(){clearTimeout(e.timer),k=k.filter((function(t){return t!==e})),(0,g.Z)(e.$el),e.$destroy()}))},(0,i.Z)(e,x(t)),clearTimeout(e.timer),t.duration>0&&(e.timer=setTimeout((function(){e.clear()}),t.duration)),e}var I=function(t){return function(e){return w((0,i.Z)({type:t},C(e)))}};["loading","success","fail"].forEach((function(t){w[t]=I(t)})),w.clear=function(t){k.length&&(t?(k.forEach((function(t){t.clear()})),k=[]):b?k.shift().clear():k[0].clear())},w.setDefaultOptions=function(t,e){"string"===typeof t?y[t]=e:(0,i.Z)(Z,t)},w.resetDefaultOptions=function(t){"string"===typeof t?y[t]=null:(Z=(0,i.Z)({},m),y={})},w.allowMultiple=function(t){void 0===t&&(t=!0),b=t},w.install=function(){o.ZP.use(p)},o.ZP.prototype.$toast=w;var $=w},8146:function(t,e,n){n(1958),n(6196),n(3332),n(6742),n(2666),n(2939)}}]);
//# sourceMappingURL=183.12f78ac8.js.map