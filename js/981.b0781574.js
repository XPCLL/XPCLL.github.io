"use strict";(self["webpackChunkvue_toutiao"]=self["webpackChunkvue_toutiao"]||[]).push([[981],{9981:function(t,e,i){i.r(e),i.d(e,{default:function(){return j}});var n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"xqlist"},[e("div",{staticClass:"msg_heard"},[e("div",{on:{click:t.back}},[e("van-icon",{attrs:{name:"arrow-left",color:"#fff"}})],1),t._m(0),e("div")]),e("div",{staticClass:"content_title"},[e("h2",[t._v(t._s(t.arr.title))])]),e("div",{staticClass:"content_author"},[e("div",{staticClass:"content_left"},[e("div",[e("van-image",{attrs:{round:"",width:"40px",height:"40px",src:t.arr.avatar},on:{error:t.imgError}})],1),e("div",{staticClass:"content_time"},[e("p",{staticClass:"author"},[t._v("作者:"+t._s(t.arr.author))]),e("p",{staticClass:"time"},[t._v(t._s(new Date(t.arr.time).toLocaleDateString()))])])]),e("div",[e("van-button",{staticClass:"btn_color",attrs:{icon:"plus",round:"",type:"primary"},on:{click:t.isshow}},[t._v(t._s(t.show1?"关注":"已关注"))])],1)]),e("div",{staticClass:"neirong"},[e("p",[t._v(t._s(t.arr.content))]),t._l(t.arr.imageSrc,(function(i,n){return e("div",{key:n},[e("img",{attrs:{src:i,alt:"",srcset:""},on:{error:t.imgError}})])}))],2),t._l(t.pinglunlist,(function(i,n){return e("div",{key:n},[e("div",{staticClass:"content_author1"},[e("div",{staticClass:"content_left"},[e("div",[e("van-image",{attrs:{round:"",width:"40px",height:"40px",src:i.info.avatar}})],1),e("div",{staticClass:"pinglun"},[e("van-cell",[e("div",{staticClass:"content_time",on:{click:function(e){return t.huifupinlun(i)}}},[e("p",[t._v("作者:"+t._s(i.info.nickname))]),e("h6",[t._v(t._s(i.content))]),e("div",{staticClass:"content_btn"},[e("p",{staticClass:"time"},[t._v(t._s(t.ontime(i.create_time)))]),e("button",{staticClass:"huifu",on:{click:function(e){return e.stopPropagation(),t.chakanhuifu(i)}}},[t._v(" "+t._s(i.reply_num)+"回复")])])])]),e("van-popup",{style:{height:"30%"},attrs:{closeable:"",position:"bottom"},model:{value:t.showshow,callback:function(e){t.showshow=e},expression:"showshow"}},[t._v(" 回复"+t._s(t.nickname)+"的评论 "),e("van-field",{staticClass:"text",attrs:{autosize:"",autofocus:"",type:"textarea",maxlength:"1500",placeholder:"请输入评论","show-word-limit":""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),e("div",{staticClass:"baocun"},[e("van-button",{attrs:{type:"primary",block:""},on:{click:t.gethuifupinglun}},[t._v("评论")])],1)],1)],1)]),e("div",[i.is_like?e("van-icon",{attrs:{name:"good-job",size:"20",color:"red"},on:{click:function(e){return t.qxhuifudianzan(i)}}}):e("van-icon",{attrs:{name:"good-job",size:"20"},on:{click:function(e){return t.huifudianzan(i)}}}),e("span",[t._v(t._s(i.like_count))])],1)]),e("div",{directives:[{name:"show",rawName:"v-show",value:i._id===t.clickid,expression:"item._id===clickid"}]},t._l(t.huifulist,(function(i,n){return e("div",{key:n,staticClass:"content_author2"},[e("div",{staticClass:"content_left"},[e("div",[e("van-image",{attrs:{round:"",width:"40px",height:"40px",src:i.info.avatar}})],1),e("div",{staticClass:"content_time"},[e("p",[t._v("作者:"+t._s(i.info.nickname))]),e("h6",[t._v(t._s(i.content))]),e("div",{staticClass:"content_btn"},[e("p",{staticClass:"time"},[t._v(t._s(t.ontime(i.create_time)))])])])])])})),0)])})),e("div",{staticClass:"xq_footer",on:{click:t.islogin}},[e("div",{staticClass:"pinglun"},[e("van-cell",[e("van-button",{staticClass:"btn",attrs:{round:"",type:"info"},on:{click:t.showPopup}},[t._v("写评论")])],1),e("van-popup",{style:{height:"40%"},attrs:{closeable:"",position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[t._v(" 评论 "),e("van-field",{staticClass:"text",attrs:{autosize:"",autofocus:"",type:"textarea",maxlength:"1500",placeholder:"请输入评论","show-word-limit":""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}}),e("div",{staticClass:"baocun"},[e("van-button",{attrs:{type:"primary",block:""},on:{click:t.getFabupinglun}},[t._v("发布")])],1)],1)],1),e("van-icon",{attrs:{name:"comment-o",size:"20"}}),e("div",[t.arr.is_fav?e("van-icon",{attrs:{name:"star",size:"20",color:"red"},on:{click:t.qxshoucang}}):e("van-icon",{attrs:{name:"star",size:"20"},on:{click:t.shoucang}})],1),e("div",[t.arr.is_like?e("van-icon",{attrs:{name:"good-job",size:"20",color:"red"},on:{click:t.qxdianzhan}}):e("van-icon",{attrs:{name:"good-job",size:"20"},on:{click:t.dianzhan}})],1),e("div",[e("van-cell",{on:{click:function(e){t.showShare=!0}}},[e("van-icon",{attrs:{name:"share",size:"20"}})],1),e("van-share-sheet",{attrs:{title:"立即分享给好友",options:t.options},on:{select:t.onSelect},model:{value:t.showShare,callback:function(e){t.showShare=e},expression:"showShare"}})],1)],1),e("div")],2)},a=[function(){var t=this,e=t._self._c;return e("div",[e("p",{staticClass:"p"},[t._v("列表详情")])])}],s=(i(1958),i(6196),i(3332),i(6742),i(2666),i(9299)),o=i(855),r=i(7846),l=i(6811),c=["qq","link","weibo","wechat","poster","qrcode","weapp-qrcode","wechat-moments"],h=(0,o.d)("share-sheet"),d=h[0],u=h[1],p=h[2],m=d({props:(0,s.Z)({},r.M,{title:String,duration:String,cancelText:String,description:String,getContainer:[String,Function],options:{type:Array,default:function(){return[]}},overlay:{type:Boolean,default:!0},closeOnPopstate:{type:Boolean,default:!0},safeAreaInsetBottom:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}}),methods:{onCancel:function(){this.toggle(!1),this.$emit("cancel")},onSelect:function(t,e){this.$emit("select",t,e)},toggle:function(t){this.$emit("input",t)},getIconURL:function(t){return-1!==c.indexOf(t)?"https://img01.yzcdn.cn/vant/share-sheet-"+t+".png":t},genHeader:function(){var t=this.$createElement,e=this.slots("title")||this.title,i=this.slots("description")||this.description;if(e||i)return t("div",{class:u("header")},[e&&t("h2",{class:u("title")},[e]),i&&t("span",{class:u("description")},[i])])},genOptions:function(t,e){var i=this,n=this.$createElement;return n("div",{class:u("options",{border:e})},[t.map((function(t,e){return n("div",{attrs:{role:"button",tabindex:"0"},class:[u("option"),t.className],on:{click:function(){i.onSelect(t,e)}}},[n("img",{attrs:{src:i.getIconURL(t.icon)},class:u("icon")}),t.name&&n("span",{class:u("name")},[t.name]),t.description&&n("span",{class:u("option-description")},[t.description])])}))])},genRows:function(){var t=this,e=this.options;return Array.isArray(e[0])?e.map((function(e,i){return t.genOptions(e,0!==i)})):this.genOptions(e)},genCancelText:function(){var t,e=this.$createElement,i=null!=(t=this.cancelText)?t:p("cancel");if(i)return e("button",{attrs:{type:"button"},class:u("cancel"),on:{click:this.onCancel}},[i])},onClickOverlay:function(){this.$emit("click-overlay")}},render:function(){var t=arguments[0];return t(l.Z,{attrs:{round:!0,value:this.value,position:"bottom",overlay:this.overlay,duration:this.duration,lazyRender:this.lazyRender,lockScroll:this.lockScroll,getContainer:this.getContainer,closeOnPopstate:this.closeOnPopstate,closeOnClickOverlay:this.closeOnClickOverlay,safeAreaInsetBottom:this.safeAreaInsetBottom},class:u(),on:{input:this.toggle,"click-overlay":this.onClickOverlay}},[this.genHeader(),this.genRows(),this.genCancelText()])}}),g=(i(3094),i(7799)),v=i(2115),f=i(6631),_=i(5363),b=(0,o.d)("collapse-item"),w=b[0],k=b[1],y=["title","icon","right-icon"],x=w({mixins:[(0,v.j)("vanCollapse")],props:(0,s.Z)({},_.T,{name:[Number,String],disabled:Boolean,lazyRender:{type:Boolean,default:!0},isLink:{type:Boolean,default:!0}}),data:function(){return{show:null,inited:null}},computed:{currentName:function(){var t;return null!=(t=this.name)?t:this.index},expanded:function(){var t=this;if(!this.parent)return null;var e=this.parent,i=e.value,n=e.accordion;return n?i===this.currentName:i.some((function(e){return e===t.currentName}))}},created:function(){this.show=this.expanded,this.inited=this.expanded},watch:{expanded:function(t,e){var i=this;if(null!==e){t&&(this.show=!0,this.inited=!0);var n=t?this.$nextTick:g.Wn;n((function(){var e=i.$refs,n=e.content,a=e.wrapper;if(n&&a){var s=n.offsetHeight;if(s){var o=s+"px";a.style.height=t?0:o,(0,g.d1)((function(){a.style.height=t?o:0}))}else i.onTransitionEnd()}}))}}},methods:{onClick:function(){this.disabled||this.toggle()},toggle:function(t){void 0===t&&(t=!this.expanded);var e=this.parent,i=this.currentName,n=e.accordion&&i===e.value,a=n?"":i;this.parent.switch(a,t)},onTransitionEnd:function(){this.expanded?this.$refs.wrapper.style.height="":this.show=!1},genTitle:function(){var t=this,e=this.$createElement,i=this.border,n=this.disabled,a=this.expanded,o=y.reduce((function(e,i){return t.slots(i)&&(e[i]=function(){return t.slots(i)}),e}),{});return this.slots("value")&&(o.default=function(){return t.slots("value")}),e(f.Z,{attrs:{role:"button",tabindex:n?-1:0,"aria-expanded":String(a)},class:k("title",{disabled:n,expanded:a,borderless:!i}),on:{click:this.onClick},scopedSlots:o,props:(0,s.Z)({},this.$props)})},genContent:function(){var t=this.$createElement;if(this.inited||!this.lazyRender)return t("div",{directives:[{name:"show",value:this.show}],ref:"wrapper",class:k("wrapper"),on:{transitionend:this.onTransitionEnd}},[t("div",{ref:"content",class:k("content")},[this.slots()])])}},render:function(){var t=arguments[0];return t("div",{class:[k({border:this.index&&this.border})]},[this.genTitle(),this.genContent()])}}),C=i(1047),S=(0,o.d)("collapse"),Z=S[0],$=S[1],z=Z({mixins:[(0,v.G)("vanCollapse")],props:{accordion:Boolean,value:[String,Number,Array],border:{type:Boolean,default:!0}},methods:{switch:function(t,e){this.accordion||(t=e?this.value.concat(t):this.value.filter((function(e){return e!==t}))),this.$emit("change",t),this.$emit("input",t)}},render:function(){var t,e=arguments[0];return e("div",{class:[$(),(t={},t[C.r5]=this.border,t)]},[this.slots()])}}),I=(i(8146),i(8848)),L=(i(7505),i(7061)),P=(i(836),i(4408),i(4639)),E=(i(3089),i(4398)),q=(i(5825),i(9858)),B=(i(2443),i(9864)),O=(i(7322),i(70)),N={name:"listcontent",data(){return{arr:{},show1:!0,show:!1,value:"",message:"",pinglunlist:[],clickid:"",huifulist:[],showshow:!1,huifuid:"",showShare:!1,nickname:"",options:[[{name:"微信",icon:"wechat"},{name:"朋友圈",icon:"wechat-moments"},{name:"微博",icon:"weibo"},{name:"QQ",icon:"qq"}],[{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"},{name:"小程序码",icon:"weapp-qrcode"}]]}},components:{[f.Z.name]:f.Z,[B.Z.name]:B.Z,[q.Z.name]:q.Z,[E.Z.name]:E.Z,[P.Z.name]:P.Z,[l.Z.name]:l.Z,[L.Z.name]:L.Z,[I.Z.name]:I.Z,[z.name]:z,[x.name]:x,[m.name]:m},methods:{back(){this.$router.go(-1)},islogin(){let t=localStorage.getItem("uid"),e=localStorage.getItem("token"),i=localStorage.getItem("tokenExpired");if(t&&e){let t=+new Date;t>=i&&(0,I.Z)("你的账户长时间没登陆，请重新登录")}else(0,I.Z)("你的账户没登陆，请登录")},isshow(){this.show1=!this.show1},chakanhuifu(t){this.clickid=t._id,0===t.reply_num?this.clickid="":(0,O.ZP)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_reply_list",data:{skip:0,limit:10,user_id:localStorage.getItem("uid"),reply_comment_id:t._id,article_id:this.$route.params.id}}).then((t=>{this.huifulist=t.data.data}))},showPopup(){this.show=!0},getFabupinglun(){(0,O.ZP)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/add_comment",data:{user_id:localStorage.getItem("uid"),article_id:this.$route.params.id,content:this.message,reply_comment_id:"",comment_type:0}}).then((t=>{this.show=!1,this.message="",this.pinglunliebiao()}))},huifupinlun(t){this.huifuid=t._id,this.nickname=t.info.nickname,this.showshow=!0},gethuifupinglun(){(0,O.ZP)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/add_comment",data:{user_id:localStorage.getItem("uid"),article_id:this.$route.params.id,content:this.message,reply_comment_id:this.huifuid,comment_type:1}}).then((t=>{this.showshow=!1,this.message="",this.pinglunliebiao()}))},pinglun(){(0,O.ZP)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_article_detail",data:{article_id:this.$route.params.id,user_id:localStorage.getItem("uid")}}).then((t=>{this.arr=t.data.data}))},pinglunliebiao(){(0,O.ZP)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/get_comment_list",data:{article_id:this.$route.params.id,user_id:localStorage.getItem("uid"),skip:0,limit:10}}).then((t=>{this.pinglunlist=t.data.data}))},dianzhan(){(0,O.ZP)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/like",data:{user_id:localStorage.getItem("uid"),article_id:this.$route.params.id}}).then((t=>{this.pinglun()}))},qxdianzhan(){(0,O.ZP)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/unlike",data:{user_id:localStorage.getItem("uid"),article_id:this.$route.params.id}}).then((t=>{this.pinglun()}))},huifudianzan(t){console.log(t._id),(0,O.ZP)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/comment_like",data:{user_id:localStorage.getItem("uid"),comment_id:t._id}}).then((t=>{this.pinglunliebiao()}))},qxhuifudianzan(t){(0,O.ZP)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/comment_unlike",data:{user_id:localStorage.getItem("uid"),comment_id:t._id}}).then((t=>{this.pinglunliebiao()}))},shoucang(){(0,O.ZP)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/add_fav",data:{user_id:localStorage.getItem("uid"),article_id:this.$route.params.id}}).then((t=>{this.pinglun()}))},qxshoucang(){(0,O.ZP)({method:"post",url:"https://d33a5037-6c63-4e92-8bb1-30018ab701ea.bspapp.com/http/api/remove_fav",data:{user_id:localStorage.getItem("uid"),article_id:this.$route.params.id}}).then((t=>{this.pinglun()}))},onSelect(t){(0,I.Z)(t.name),this.showShare=!1}},created(){this.pinglun(),this.pinglunliebiao()}},T=N,R=i(1001),A=(0,R.Z)(T,n,a,!1,null,"70588d75",null),j=A.exports},7179:function(){},9864:function(t,e,i){var n=i(3915),a=i.n(n),s=i(855),o=i(4771),r=i(1047),l=(0,s.d)("cell-group"),c=l[0],h=l[1];function d(t,e,i,n){var s,l=t("div",a()([{class:[h({inset:e.inset}),(s={},s[r.r5]=e.border,s)]},(0,o.ED)(n,!0)]),[null==i.default?void 0:i.default()]);return e.title||i.title?t("div",{key:n.data.key},[t("div",{class:h("title",{inset:e.inset})},[i.title?i.title():e.title]),l]):l}d.props={title:String,inset:Boolean,border:{type:Boolean,default:!0}},e["Z"]=c(d)},2443:function(t,e,i){i(1958)},4639:function(t,e,i){var n=i(3915),a=i.n(n),s=i(855),o=i(3370),r=i(408),l=i(9858),c=(0,s.d)("image"),h=c[0],d=c[1];e["Z"]=h({props:{src:String,fit:String,alt:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,iconPrefix:String,showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},errorIcon:{type:String,default:"photo-fail"},loadingIcon:{type:String,default:"photo"}},data:function(){return{loading:!0,error:!1}},watch:{src:function(){this.loading=!0,this.error=!1}},computed:{style:function(){var t={};return(0,o.Xq)(this.width)&&(t.width=(0,r.N)(this.width)),(0,o.Xq)(this.height)&&(t.height=(0,r.N)(this.height)),(0,o.Xq)(this.radius)&&(t.overflow="hidden",t.borderRadius=(0,r.N)(this.radius)),t}},created:function(){var t=this.$Lazyload;t&&o._f&&(t.$on("loaded",this.onLazyLoaded),t.$on("error",this.onLazyLoadError))},beforeDestroy:function(){var t=this.$Lazyload;t&&(t.$off("loaded",this.onLazyLoaded),t.$off("error",this.onLazyLoadError))},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t)},onLazyLoaded:function(t){var e=t.el;e===this.$refs.image&&this.loading&&this.onLoad()},onLazyLoadError:function(t){var e=t.el;e!==this.$refs.image||this.error||this.onError()},onError:function(t){this.error=!0,this.loading=!1,this.$emit("error",t)},onClick:function(t){this.$emit("click",t)},genPlaceholder:function(){var t=this.$createElement;return this.loading&&this.showLoading?t("div",{class:d("loading")},[this.slots("loading")||t(l.Z,{attrs:{name:this.loadingIcon,classPrefix:this.iconPrefix},class:d("loading-icon")})]):this.error&&this.showError?t("div",{class:d("error")},[this.slots("error")||t(l.Z,{attrs:{name:this.errorIcon,classPrefix:this.iconPrefix},class:d("error-icon")})]):void 0},genImage:function(){var t=this.$createElement,e={class:d("img"),attrs:{alt:this.alt},style:{objectFit:this.fit}};if(!this.error)return this.lazyLoad?t("img",a()([{ref:"image",directives:[{name:"lazy",value:this.src}]},e])):t("img",a()([{attrs:{src:this.src},on:{load:this.onLoad,error:this.onError}},e]))}},render:function(){var t=arguments[0];return t("div",{class:d({round:this.round}),style:this.style,on:{click:this.onClick}},[this.genImage(),this.genPlaceholder(),this.slots()])}})},4408:function(t,e,i){i(1958),i(3332),i(6742),i(7179)},836:function(t,e,i){i(1958),i(6196),i(3332),i(6742),i(2666)}}]);
//# sourceMappingURL=981.b0781574.js.map