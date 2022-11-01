"use strict";(self["webpackChunkvue_toutiao"]=self["webpackChunkvue_toutiao"]||[]).push([[468],{7179:function(){},9864:function(t,i,e){var s=e(3915),n=e.n(s),o=e(855),a=e(4771),r=e(1047),h=(0,o.d)("cell-group"),l=h[0],c=h[1];function u(t,i,e,s){var o,h=t("div",n()([{class:[c({inset:i.inset}),(o={},o[r.r5]=i.border,o)]},(0,a.ED)(s,!0)]),[null==e.default?void 0:e.default()]);return i.title||e.title?t("div",{key:s.data.key},[t("div",{class:c("title",{inset:i.inset})},[e.title?e.title():i.title]),h]):h}u.props={title:String,inset:Boolean,border:{type:Boolean,default:!0}},i["Z"]=l(u)},2443:function(t,i,e){e(1958)},4639:function(t,i,e){var s=e(3915),n=e.n(s),o=e(855),a=e(3370),r=e(408),h=e(9858),l=(0,o.d)("image"),c=l[0],u=l[1];i["Z"]=c({props:{src:String,fit:String,alt:String,round:Boolean,width:[Number,String],height:[Number,String],radius:[Number,String],lazyLoad:Boolean,iconPrefix:String,showError:{type:Boolean,default:!0},showLoading:{type:Boolean,default:!0},errorIcon:{type:String,default:"photo-fail"},loadingIcon:{type:String,default:"photo"}},data:function(){return{loading:!0,error:!1}},watch:{src:function(){this.loading=!0,this.error=!1}},computed:{style:function(){var t={};return(0,a.Xq)(this.width)&&(t.width=(0,r.N)(this.width)),(0,a.Xq)(this.height)&&(t.height=(0,r.N)(this.height)),(0,a.Xq)(this.radius)&&(t.overflow="hidden",t.borderRadius=(0,r.N)(this.radius)),t}},created:function(){var t=this.$Lazyload;t&&a._f&&(t.$on("loaded",this.onLazyLoaded),t.$on("error",this.onLazyLoadError))},beforeDestroy:function(){var t=this.$Lazyload;t&&(t.$off("loaded",this.onLazyLoaded),t.$off("error",this.onLazyLoadError))},methods:{onLoad:function(t){this.loading=!1,this.$emit("load",t)},onLazyLoaded:function(t){var i=t.el;i===this.$refs.image&&this.loading&&this.onLoad()},onLazyLoadError:function(t){var i=t.el;i!==this.$refs.image||this.error||this.onError()},onError:function(t){this.error=!0,this.loading=!1,this.$emit("error",t)},onClick:function(t){this.$emit("click",t)},genPlaceholder:function(){var t=this.$createElement;return this.loading&&this.showLoading?t("div",{class:u("loading")},[this.slots("loading")||t(h.Z,{attrs:{name:this.loadingIcon,classPrefix:this.iconPrefix},class:u("loading-icon")})]):this.error&&this.showError?t("div",{class:u("error")},[this.slots("error")||t(h.Z,{attrs:{name:this.errorIcon,classPrefix:this.iconPrefix},class:u("error-icon")})]):void 0},genImage:function(){var t=this.$createElement,i={class:u("img"),attrs:{alt:this.alt},style:{objectFit:this.fit}};if(!this.error)return this.lazyLoad?t("img",n()([{ref:"image",directives:[{name:"lazy",value:this.src}]},i])):t("img",n()([{attrs:{src:this.src},on:{load:this.onLoad,error:this.onError}},i]))}},render:function(){var t=arguments[0];return t("div",{class:u({round:this.round}),style:this.style,on:{click:this.onClick}},[this.genImage(),this.genPlaceholder(),this.slots()])}})},5065:function(t,i,e){e.d(i,{f:function(){return s}});var s={inject:{vanField:{default:null}},watch:{value:function(){var t=this.vanField;t&&(t.resetValidation(),t.validateWithTrigger("onChange"))}},created:function(){var t=this.vanField;t&&!t.children&&(t.children=this)}}},7291:function(t,i,e){e.d(i,{Z:function(){return _}});e(7658);var s=e(9299),n=e(855),o=e(408),a=e(3370);function r(t){return Array.isArray(t)?t:[t]}function h(t,i){return new Promise((function(e){if("file"!==i){var s=new FileReader;s.onload=function(t){e(t.target.result)},"dataUrl"===i?s.readAsDataURL(t):"text"===i&&s.readAsText(t)}else e(null)}))}function l(t,i){return r(t).some((function(t){return!!t&&((0,a.mf)(i)?i(t):t.size>i)}))}var c=/\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;function u(t){return c.test(t)}function d(t){return!!t.isImage||(t.file&&t.file.type?0===t.file.type.indexOf("image"):t.url?u(t.url):!!t.content&&0===t.content.indexOf("data:image"))}var f=e(5065),v=e(9858),m=e(4639),g=e(4958),p=e(6369),w=(0,n.d)("image-preview"),y=w[0],S=w[1],b=e(7846),x=e(3969),z=e(5590),$=e(4292),C=e(5781),T=e(7799),P=e(4535),I=e(2115),L=(0,n.d)("swipe"),k=L[0],M=L[1],X=k({mixins:[x.D,(0,I.G)("vanSwipe"),(0,z.X)((function(t,i){t(window,"resize",this.resize,!0),t(window,"orientationchange",this.resize,!0),t(window,"visibilitychange",this.onVisibilityChange),i?this.initialize():this.clear()}))],props:{width:[Number,String],height:[Number,String],autoplay:[Number,String],vertical:Boolean,lazyRender:Boolean,indicatorColor:String,loop:{type:Boolean,default:!0},duration:{type:[Number,String],default:500},touchable:{type:Boolean,default:!0},initialSwipe:{type:[Number,String],default:0},showIndicators:{type:Boolean,default:!0},stopPropagation:{type:Boolean,default:!0}},data:function(){return{rect:null,offset:0,active:0,deltaX:0,deltaY:0,swiping:!1,computedWidth:0,computedHeight:0}},watch:{children:function(){this.initialize()},initialSwipe:function(){this.initialize()},autoplay:function(t){t>0?this.autoPlay():this.clear()}},computed:{count:function(){return this.children.length},maxCount:function(){return Math.ceil(Math.abs(this.minOffset)/this.size)},delta:function(){return this.vertical?this.deltaY:this.deltaX},size:function(){return this[this.vertical?"computedHeight":"computedWidth"]},trackSize:function(){return this.count*this.size},activeIndicator:function(){return(this.active+this.count)%this.count},isCorrectDirection:function(){var t=this.vertical?"vertical":"horizontal";return this.direction===t},trackStyle:function(){var t={transitionDuration:(this.swiping?0:this.duration)+"ms",transform:"translate"+(this.vertical?"Y":"X")+"("+this.offset+"px)"};if(this.size){var i=this.vertical?"height":"width",e=this.vertical?"width":"height";t[i]=this.trackSize+"px",t[e]=this[e]?this[e]+"px":""}return t},indicatorStyle:function(){return{backgroundColor:this.indicatorColor}},minOffset:function(){return(this.vertical?this.rect.height:this.rect.width)-this.size*this.count}},mounted:function(){this.bindTouchEvent(this.$refs.track)},methods:{initialize:function(t){if(void 0===t&&(t=+this.initialSwipe),this.$el&&!(0,$.x)(this.$el)){clearTimeout(this.timer);var i={width:this.$el.offsetWidth,height:this.$el.offsetHeight};this.rect=i,this.swiping=!0,this.active=t,this.computedWidth=+this.width||i.width,this.computedHeight=+this.height||i.height,this.offset=this.getTargetOffset(t),this.children.forEach((function(t){t.offset=0})),this.autoPlay()}},resize:function(){this.initialize(this.activeIndicator)},onVisibilityChange:function(){document.hidden?this.clear():this.autoPlay()},onTouchStart:function(t){this.touchable&&(this.clear(),this.touchStartTime=Date.now(),this.touchStart(t),this.correctPosition())},onTouchMove:function(t){this.touchable&&this.swiping&&(this.touchMove(t),this.isCorrectDirection&&((0,C.PF)(t,this.stopPropagation),this.move({offset:this.delta})))},onTouchEnd:function(){if(this.touchable&&this.swiping){var t=this.size,i=this.delta,e=Date.now()-this.touchStartTime,s=i/e,n=Math.abs(s)>.25||Math.abs(i)>t/2;if(n&&this.isCorrectDirection){var o=this.vertical?this.offsetY:this.offsetX,a=0;a=this.loop?o>0?i>0?-1:1:0:-Math[i>0?"ceil":"floor"](i/t),this.move({pace:a,emitChange:!0})}else i&&this.move({pace:0});this.swiping=!1,this.autoPlay()}},getTargetActive:function(t){var i=this.active,e=this.count,s=this.maxCount;return t?this.loop?(0,P.w6)(i+t,-1,e):(0,P.w6)(i+t,0,s):i},getTargetOffset:function(t,i){void 0===i&&(i=0);var e=t*this.size;this.loop||(e=Math.min(e,-this.minOffset));var s=i-e;return this.loop||(s=(0,P.w6)(s,this.minOffset,0)),s},move:function(t){var i=t.pace,e=void 0===i?0:i,s=t.offset,n=void 0===s?0:s,o=t.emitChange,a=this.loop,r=this.count,h=this.active,l=this.children,c=this.trackSize,u=this.minOffset;if(!(r<=1)){var d=this.getTargetActive(e),f=this.getTargetOffset(d,n);if(a){if(l[0]&&f!==u){var v=f<u;l[0].offset=v?c:0}if(l[r-1]&&0!==f){var m=f>0;l[r-1].offset=m?-c:0}}this.active=d,this.offset=f,o&&d!==h&&this.$emit("change",this.activeIndicator)}},prev:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),(0,T.d1)((function(){t.swiping=!1,t.move({pace:-1,emitChange:!0})}))},next:function(){var t=this;this.correctPosition(),this.resetTouchStatus(),(0,T.d1)((function(){t.swiping=!1,t.move({pace:1,emitChange:!0})}))},swipeTo:function(t,i){var e=this;void 0===i&&(i={}),this.correctPosition(),this.resetTouchStatus(),(0,T.d1)((function(){var s;s=e.loop&&t===e.count?0===e.active?0:t:t%e.count,i.immediate?(0,T.d1)((function(){e.swiping=!1})):e.swiping=!1,e.move({pace:s-e.active,emitChange:!0})}))},correctPosition:function(){this.swiping=!0,this.active<=-1&&this.move({pace:this.count}),this.active>=this.count&&this.move({pace:-this.count})},clear:function(){clearTimeout(this.timer)},autoPlay:function(){var t=this,i=this.autoplay;i>0&&this.count>1&&(this.clear(),this.timer=setTimeout((function(){t.next(),t.autoPlay()}),i))},genIndicator:function(){var t=this,i=this.$createElement,e=this.count,s=this.activeIndicator,n=this.slots("indicator");return n||(this.showIndicators&&e>1?i("div",{class:M("indicators",{vertical:this.vertical})},[Array.apply(void 0,Array(e)).map((function(e,n){return i("i",{class:M("indicator",{active:n===s}),style:n===s?t.indicatorStyle:null})}))]):void 0)}},render:function(){var t=arguments[0];return t("div",{class:M()},[t("div",{ref:"track",style:this.trackStyle,class:M("track",{vertical:this.vertical})},[this.slots()]),this.genIndicator()])}}),N=(0,n.d)("swipe-item"),Z=N[0],D=N[1],R=Z({mixins:[(0,I.j)("vanSwipe")],data:function(){return{offset:0,inited:!1,mounted:!1}},mounted:function(){var t=this;this.$nextTick((function(){t.mounted=!0}))},computed:{style:function(){var t={},i=this.parent,e=i.size,s=i.vertical;return e&&(t[s?"height":"width"]=e+"px"),this.offset&&(t.transform="translate"+(s?"Y":"X")+"("+this.offset+"px)"),t},shouldRender:function(){var t=this.index,i=this.inited,e=this.parent,s=this.mounted;if(!e.lazyRender||i)return!0;if(!s)return!1;var n=e.activeIndicator,o=e.count-1,a=0===n&&e.loop?o:n-1,r=n===o&&e.loop?0:n+1,h=t===n||t===a||t===r;return h&&(this.inited=!0),h}},render:function(){var t=arguments[0];return t("div",{class:D(),style:this.style,on:(0,s.Z)({},this.$listeners)},[this.shouldRender&&this.slots()])}});function A(t){return Math.sqrt(Math.pow(t[0].clientX-t[1].clientX,2)+Math.pow(t[0].clientY-t[1].clientY,2))}var B,E={mixins:[x.D],props:{src:String,show:Boolean,active:Number,minZoom:[Number,String],maxZoom:[Number,String],rootWidth:Number,rootHeight:Number},data:function(){return{scale:1,moveX:0,moveY:0,moving:!1,zooming:!1,imageRatio:0,displayWidth:0,displayHeight:0}},computed:{vertical:function(){var t=this.rootWidth,i=this.rootHeight,e=i/t;return this.imageRatio>e},imageStyle:function(){var t=this.scale,i={transitionDuration:this.zooming||this.moving?"0s":".3s"};if(1!==t){var e=this.moveX/t,s=this.moveY/t;i.transform="scale("+t+", "+t+") translate("+e+"px, "+s+"px)"}return i},maxMoveX:function(){if(this.imageRatio){var t=this.vertical?this.rootHeight/this.imageRatio:this.rootWidth;return Math.max(0,(this.scale*t-this.rootWidth)/2)}return 0},maxMoveY:function(){if(this.imageRatio){var t=this.vertical?this.rootHeight:this.rootWidth*this.imageRatio;return Math.max(0,(this.scale*t-this.rootHeight)/2)}return 0}},watch:{active:"resetScale",show:function(t){t||this.resetScale()}},mounted:function(){this.bindTouchEvent(this.$el)},methods:{resetScale:function(){this.setScale(1),this.moveX=0,this.moveY=0},setScale:function(t){t=(0,P.w6)(t,+this.minZoom,+this.maxZoom),t!==this.scale&&(this.scale=t,this.$emit("scale",{scale:this.scale,index:this.active}))},toggleScale:function(){var t=this.scale>1?1:2;this.setScale(t),this.moveX=0,this.moveY=0},onTouchStart:function(t){var i=t.touches,e=this.offsetX,s=void 0===e?0:e;this.touchStart(t),this.touchStartTime=new Date,this.fingerNum=i.length,this.startMoveX=this.moveX,this.startMoveY=this.moveY,this.moving=1===this.fingerNum&&1!==this.scale,this.zooming=2===this.fingerNum&&!s,this.zooming&&(this.startScale=this.scale,this.startDistance=A(t.touches))},onTouchMove:function(t){var i=t.touches;if(this.touchMove(t),(this.moving||this.zooming)&&(0,C.PF)(t,!0),this.moving){var e=this.deltaX+this.startMoveX,s=this.deltaY+this.startMoveY;this.moveX=(0,P.w6)(e,-this.maxMoveX,this.maxMoveX),this.moveY=(0,P.w6)(s,-this.maxMoveY,this.maxMoveY)}if(this.zooming&&2===i.length){var n=A(i),o=this.startScale*n/this.startDistance;this.setScale(o)}},onTouchEnd:function(t){var i=!1;(this.moving||this.zooming)&&(i=!0,this.moving&&this.startMoveX===this.moveX&&this.startMoveY===this.moveY&&(i=!1),t.touches.length||(this.zooming&&(this.moveX=(0,P.w6)(this.moveX,-this.maxMoveX,this.maxMoveX),this.moveY=(0,P.w6)(this.moveY,-this.maxMoveY,this.maxMoveY),this.zooming=!1),this.moving=!1,this.startMoveX=0,this.startMoveY=0,this.startScale=1,this.scale<1&&this.resetScale())),(0,C.PF)(t,i),this.checkTap(),this.resetTouchStatus()},checkTap:function(){var t=this;if(!(this.fingerNum>1)){var i=this.offsetX,e=void 0===i?0:i,s=this.offsetY,n=void 0===s?0:s,o=new Date-this.touchStartTime,a=250,r=5;e<r&&n<r&&o<a&&(this.doubleTapTimer?(clearTimeout(this.doubleTapTimer),this.doubleTapTimer=null,this.toggleScale()):this.doubleTapTimer=setTimeout((function(){t.$emit("close"),t.doubleTapTimer=null}),a))}},onLoad:function(t){var i=t.target,e=i.naturalWidth,s=i.naturalHeight;this.imageRatio=s/e}},render:function(){var t=arguments[0],i={loading:function(){return t(g.Z,{attrs:{type:"spinner"}})}};return t(R,{class:S("swipe-item")},[t(m.Z,{attrs:{src:this.src,fit:"contain"},class:S("image",{vertical:this.vertical}),style:this.imageStyle,scopedSlots:i,on:{load:this.onLoad}})])}},Y=y({mixins:[x.D,(0,b.e)({skipToggleEvent:!0}),(0,z.X)((function(t){t(window,"resize",this.resize,!0),t(window,"orientationchange",this.resize,!0)}))],props:{className:null,closeable:Boolean,asyncClose:Boolean,overlayStyle:Object,showIndicators:Boolean,images:{type:Array,default:function(){return[]}},loop:{type:Boolean,default:!0},overlay:{type:Boolean,default:!0},minZoom:{type:[Number,String],default:1/3},maxZoom:{type:[Number,String],default:3},transition:{type:String,default:"van-fade"},showIndex:{type:Boolean,default:!0},swipeDuration:{type:[Number,String],default:300},startPosition:{type:[Number,String],default:0},overlayClass:{type:String,default:S("overlay")},closeIcon:{type:String,default:"clear"},closeOnPopstate:{type:Boolean,default:!0},closeIconPosition:{type:String,default:"top-right"}},data:function(){return{active:0,rootWidth:0,rootHeight:0,doubleClickTimer:null}},mounted:function(){this.resize()},watch:{startPosition:"setActive",value:function(t){var i=this;t?(this.setActive(+this.startPosition),this.$nextTick((function(){i.resize(),i.$refs.swipe.swipeTo(+i.startPosition,{immediate:!0})}))):this.$emit("close",{index:this.active,url:this.images[this.active]})}},methods:{resize:function(){if(this.$el&&this.$el.getBoundingClientRect){var t=this.$el.getBoundingClientRect();this.rootWidth=t.width,this.rootHeight=t.height}},emitClose:function(){this.asyncClose||this.$emit("input",!1)},emitScale:function(t){this.$emit("scale",t)},setActive:function(t){t!==this.active&&(this.active=t,this.$emit("change",t))},genIndex:function(){var t=this.$createElement;if(this.showIndex)return t("div",{class:S("index")},[this.slots("index",{index:this.active})||this.active+1+" / "+this.images.length])},genCover:function(){var t=this.$createElement,i=this.slots("cover");if(i)return t("div",{class:S("cover")},[i])},genImages:function(){var t=this,i=this.$createElement;return i(X,{ref:"swipe",attrs:{lazyRender:!0,loop:this.loop,duration:this.swipeDuration,initialSwipe:this.startPosition,showIndicators:this.showIndicators,indicatorColor:"white"},class:S("swipe"),on:{change:this.setActive}},[this.images.map((function(e){return i(E,{attrs:{src:e,show:t.value,active:t.active,maxZoom:t.maxZoom,minZoom:t.minZoom,rootWidth:t.rootWidth,rootHeight:t.rootHeight},on:{scale:t.emitScale,close:t.emitClose}})}))])},genClose:function(){var t=this.$createElement;if(this.closeable)return t(v.Z,{attrs:{role:"button",name:this.closeIcon},class:S("close-icon",this.closeIconPosition),on:{click:this.emitClose}})},onClosed:function(){this.$emit("closed")},swipeTo:function(t,i){this.$refs.swipe&&this.$refs.swipe.swipeTo(t,i)}},render:function(){var t=arguments[0];return t("transition",{attrs:{name:this.transition},on:{afterLeave:this.onClosed}},[this.shouldRender?t("div",{directives:[{name:"show",value:this.value}],class:[S(),this.className]},[this.genClose(),this.genImages(),this.genIndex(),this.genCover()]):null])}}),F={loop:!0,value:!0,images:[],maxZoom:3,minZoom:1/3,onClose:null,onChange:null,className:"",showIndex:!0,closeable:!1,closeIcon:"clear",asyncClose:!1,transition:"van-fade",getContainer:"body",overlayStyle:null,startPosition:0,swipeDuration:300,showIndicators:!1,closeOnPopstate:!0,closeIconPosition:"top-right"},U=function(){B=new(p.ZP.extend(Y))({el:document.createElement("div")}),document.body.appendChild(B.$el),B.$on("change",(function(t){B.onChange&&B.onChange(t)})),B.$on("scale",(function(t){B.onScale&&B.onScale(t)}))},W=function(t,i){if(void 0===i&&(i=0),!a.sk){B||U();var e=Array.isArray(t)?{images:t,startPosition:i}:t;return(0,s.Z)(B,F,e),B.$once("input",(function(t){B.value=t})),B.$once("closed",(function(){B.images=[]})),e.onClose&&(B.$off("close"),B.$once("close",e.onClose)),B}};W.Component=Y,W.install=function(){p.ZP.use(Y)};var O=W,H=(0,n.d)("uploader"),j=H[0],V=H[1],_=j({inheritAttrs:!1,mixins:[f.f],model:{prop:"fileList"},props:{disabled:Boolean,readonly:Boolean,lazyLoad:Boolean,uploadText:String,afterRead:Function,beforeRead:Function,beforeDelete:Function,previewSize:[Number,String],previewOptions:Object,name:{type:[Number,String],default:""},accept:{type:String,default:"image/*"},fileList:{type:Array,default:function(){return[]}},maxSize:{type:[Number,String,Function],default:Number.MAX_VALUE},maxCount:{type:[Number,String],default:Number.MAX_VALUE},deletable:{type:Boolean,default:!0},showUpload:{type:Boolean,default:!0},previewImage:{type:Boolean,default:!0},previewFullImage:{type:Boolean,default:!0},imageFit:{type:String,default:"cover"},resultType:{type:String,default:"dataUrl"},uploadIcon:{type:String,default:"photograph"}},computed:{previewSizeWithUnit:function(){return(0,o.N)(this.previewSize)},value:function(){return this.fileList}},created:function(){this.urls=[]},beforeDestroy:function(){this.urls.forEach((function(t){return URL.revokeObjectURL(t)}))},methods:{getDetail:function(t){return void 0===t&&(t=this.fileList.length),{name:this.name,index:t}},onChange:function(t){var i=this,e=t.target.files;if(!this.disabled&&e.length){if(e=1===e.length?e[0]:[].slice.call(e),this.beforeRead){var s=this.beforeRead(e,this.getDetail());if(!s)return void this.resetInput();if((0,a.tI)(s))return void s.then((function(t){t?i.readFile(t):i.readFile(e)})).catch(this.resetInput)}this.readFile(e)}},readFile:function(t){var i=this,e=l(t,this.maxSize);if(Array.isArray(t)){var s=this.maxCount-this.fileList.length;t.length>s&&(t=t.slice(0,s)),Promise.all(t.map((function(t){return h(t,i.resultType)}))).then((function(s){var n=t.map((function(t,i){var e={file:t,status:"",message:""};return s[i]&&(e.content=s[i]),e}));i.onAfterRead(n,e)}))}else h(t,this.resultType).then((function(s){var n={file:t,status:"",message:""};s&&(n.content=s),i.onAfterRead(n,e)}))},onAfterRead:function(t,i){var e=this;this.resetInput();var s=t;if(i){var n=t;Array.isArray(t)?(n=[],s=[],t.forEach((function(t){t.file&&(l(t.file,e.maxSize)?n.push(t):s.push(t))}))):s=null,this.$emit("oversize",n,this.getDetail())}var o=Array.isArray(s)?Boolean(s.length):Boolean(s);o&&(this.$emit("input",[].concat(this.fileList,r(s))),this.afterRead&&this.afterRead(s,this.getDetail()))},onDelete:function(t,i){var e,s=this,n=null!=(e=t.beforeDelete)?e:this.beforeDelete;if(n){var o=n(t,this.getDetail(i));if(!o)return;if((0,a.tI)(o))return void o.then((function(){s.deleteFile(t,i)})).catch(a.ZT)}this.deleteFile(t,i)},deleteFile:function(t,i){var e=this.fileList.slice(0);e.splice(i,1),this.$emit("input",e),this.$emit("delete",t,this.getDetail(i))},resetInput:function(){this.$refs.input&&(this.$refs.input.value="")},onClickUpload:function(t){this.$emit("click-upload",t)},onPreviewImage:function(t){var i=this;if(this.previewFullImage){var e=this.fileList.filter((function(t){return d(t)})),n=e.map((function(t){return t.file&&!t.url&&"failed"!==t.status&&(t.url=URL.createObjectURL(t.file),i.urls.push(t.url)),t.url}));this.imagePreview=O((0,s.Z)({images:n,startPosition:e.indexOf(t),onClose:function(){i.$emit("close-preview")}},this.previewOptions))}},closeImagePreview:function(){this.imagePreview&&this.imagePreview.close()},chooseFile:function(){this.disabled||this.$refs.input&&this.$refs.input.click()},genPreviewMask:function(t){var i=this.$createElement,e=t.status,s=t.message;if("uploading"===e||"failed"===e){var n="failed"===e?i(v.Z,{attrs:{name:"close"},class:V("mask-icon")}):i(g.Z,{class:V("loading")}),o=(0,a.Xq)(s)&&""!==s;return i("div",{class:V("mask")},[n,o&&i("div",{class:V("mask-message")},[s])])}},genPreviewItem:function(t,i){var e,n,o,a=this,r=this.$createElement,h=null!=(e=t.deletable)?e:this.deletable,l="uploading"!==t.status&&h,c=l&&r("div",{class:V("preview-delete"),on:{click:function(e){e.stopPropagation(),a.onDelete(t,i)}}},[r(v.Z,{attrs:{name:"cross"},class:V("preview-delete-icon")})]),u=this.slots("preview-cover",(0,s.Z)({index:i},t)),f=u&&r("div",{class:V("preview-cover")},[u]),g=null!=(n=t.previewSize)?n:this.previewSize,p=null!=(o=t.imageFit)?o:this.imageFit,w=d(t)?r(m.Z,{attrs:{fit:p,src:t.content||t.url,width:g,height:g,lazyLoad:this.lazyLoad},class:V("preview-image"),on:{click:function(){a.onPreviewImage(t)}}},[f]):r("div",{class:V("file"),style:{width:this.previewSizeWithUnit,height:this.previewSizeWithUnit}},[r(v.Z,{class:V("file-icon"),attrs:{name:"description"}}),r("div",{class:[V("file-name"),"van-ellipsis"]},[t.file?t.file.name:t.url]),f]);return r("div",{class:V("preview"),on:{click:function(){a.$emit("click-preview",t,a.getDetail(i))}}},[w,this.genPreviewMask(t),c])},genPreviewList:function(){if(this.previewImage)return this.fileList.map(this.genPreviewItem)},genUpload:function(){var t=this.$createElement;if(!(this.fileList.length>=this.maxCount)&&this.showUpload){var i,e=this.slots(),n=this.readonly?null:t("input",{attrs:(0,s.Z)({},this.$attrs,{type:"file",accept:this.accept,disabled:this.disabled}),ref:"input",class:V("input"),on:{change:this.onChange}});if(e)return t("div",{class:V("input-wrapper"),key:"input-wrapper",on:{click:this.onClickUpload}},[e,n]);if(this.previewSize){var o=this.previewSizeWithUnit;i={width:o,height:o}}return t("div",{class:V("upload",{readonly:this.readonly}),style:i,on:{click:this.onClickUpload}},[t(v.Z,{attrs:{name:this.uploadIcon},class:V("upload-icon")}),this.uploadText&&t("span",{class:V("upload-text")},[this.uploadText]),n])}}},render:function(){var t=arguments[0];return t("div",{class:V()},[t("div",{class:V("wrapper",{disabled:this.disabled})},[this.genPreviewList(),this.genUpload()])])}})},6280:function(t,i,e){e(1958),e(6196),e(3332),e(6742),e(7179),e(2666),e(2939)},691:function(t,i,e){e.d(i,{x0:function(){return s}});e(3408),e(4590);let s=(t=21)=>crypto.getRandomValues(new Uint8Array(t)).reduce(((t,i)=>(i&=63,t+=i<36?i.toString(36):i<62?(i-26).toString(36).toUpperCase():i>62?"-":"_",t)),"")}}]);
//# sourceMappingURL=468.ae5d3398.js.map