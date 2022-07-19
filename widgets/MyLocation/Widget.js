// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"esri/widgets/Locate":function(){define("../chunks/_rollupPluginBabelHelpers ../chunks/tslib.es6 ../core/accessorSupport/decorators/aliasOf ../core/arrayUtils ../core/has ../core/accessorSupport/ensureType ../core/accessorSupport/decorators/property ../core/accessorSupport/decorators/subclass ./Widget ./Locate/LocateViewModel ./support/decorators/accessibleHandler ./support/decorators/messageBundle ./support/decorators/vmEvent ./support/jsxFactory ./support/widgetUtils".split(" "),
function(k,e,d,g,l,t,q,r,E,B,C,y,z,v,D){g=function(x){function u(a,b){a=x.call(this,a,b)||this;a.geolocationOptions=null;a.goToLocationEnabled=null;a.goToOverride=null;a.graphic=null;a.iconClass="esri-icon-north-navigation";a.label=void 0;a.messages=null;a.messagesCommon=null;a.popupEnabled=null;a.scale=null;a.useHeadingEnabled=null;a.view=null;a.viewModel=new B;return a}k._inheritsLoose(u,x);var c=u.prototype;c.cancelLocate=function(){};c.locate=function(){};c.render=function(){const a=this.get("viewModel.state");
var b="locating"===a;b={["esri-icon-loading-indicator"]:b,["esri-rotating"]:b,["esri-icon-locate"]:!b};const m="locating"===a?this.messagesCommon.cancel:this.messages.title;return v.tsx("div",{bind:this,class:this.classes("esri-locate esri-widget--button esri-widget",{["esri-disabled"]:"disabled"===a,["esri-hidden"]:"feature-unsupported"===a}),hidden:"feature-unsupported"===a,onclick:this._locate,onkeydown:this._locate,role:"button",tabIndex:0,"aria-label":m,title:m},v.tsx("span",{"aria-hidden":"true",
class:this.classes("esri-icon",b)}),v.tsx("span",{class:"esri-icon-font-fallback-text"},this.messages.title))};c._locate=function(){const {viewModel:a}=this;"locating"===a.state?a.cancelLocate():a.locate()};return u}(E);e.__decorate([d.aliasOf("viewModel.geolocationOptions")],g.prototype,"geolocationOptions",void 0);e.__decorate([d.aliasOf("viewModel.goToLocationEnabled")],g.prototype,"goToLocationEnabled",void 0);e.__decorate([d.aliasOf("viewModel.goToOverride")],g.prototype,"goToOverride",void 0);
e.__decorate([d.aliasOf("viewModel.graphic")],g.prototype,"graphic",void 0);e.__decorate([q.property()],g.prototype,"iconClass",void 0);e.__decorate([q.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],g.prototype,"label",void 0);e.__decorate([q.property(),y.messageBundle("esri/widgets/Locate/t9n/Locate")],g.prototype,"messages",void 0);e.__decorate([q.property(),y.messageBundle("esri/t9n/common")],g.prototype,"messagesCommon",void 0);e.__decorate([d.aliasOf("viewModel.popupEnabled")],
g.prototype,"popupEnabled",void 0);e.__decorate([d.aliasOf("viewModel.scale")],g.prototype,"scale",void 0);e.__decorate([d.aliasOf("viewModel.useHeadingEnabled")],g.prototype,"useHeadingEnabled",void 0);e.__decorate([d.aliasOf("viewModel.view")],g.prototype,"view",void 0);e.__decorate([q.property({type:B}),z.vmEvent(["locate","locate-error"])],g.prototype,"viewModel",void 0);e.__decorate([d.aliasOf("viewModel.cancelLocate")],g.prototype,"cancelLocate",null);e.__decorate([d.aliasOf("viewModel.locate")],
g.prototype,"locate",null);e.__decorate([C.accessibleHandler()],g.prototype,"_locate",null);return g=e.__decorate([r.subclass("esri.widgets.Locate")],g)})},"esri/widgets/Locate/LocateViewModel":function(){define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../intl ../../PopupTemplate ../../core/Error ../../core/Handles ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../Popup/actions ../support/GeolocationPositioning ../support/geolocationUtils ../../intl/locale ../../intl/messages".split(" "),
function(k,e,d,g,l,t,q,r,E,B,C,y,z,v,D,x){function u(){return c.apply(this,arguments)}function c(){c=k._asyncToGenerator(function*(){const a=yield x.fetchMessageBundle("esri/widgets/Locate/t9n/Locate");return new g({title:a.currentLocation,fieldInfos:[{fieldName:"timestamp",label:a.timestamp,format:{dateFormat:"short-date-short-time"}},{fieldName:"latitude",label:a.latitude,format:{places:4,digitSeparator:!0}},{fieldName:"longitude",label:a.longitude,format:{places:4,digitSeparator:!0}},{fieldName:"accuracy",
label:a.accuracy,format:{places:0,digitSeparator:!0}},{fieldName:"altitude",label:a.altitude,format:{places:0,digitSeparator:!0}},{fieldName:"altitudeAccuracy",label:a.altitudeAccuracy,format:{places:0,digitSeparator:!0}},{fieldName:"heading",label:a.heading,format:{places:0,digitSeparator:!0}},{fieldName:"speed",label:a.speed,format:{places:0,digitSeparator:!0}}],actions:[y.removeSelectedFeature.clone()],content:[{type:"fields"}]})});return c.apply(this,arguments)}d=function(a){function b(h){h=a.call(this,
h)||this;h._locateController=null;h._handles=new t;h.popupEnabled=!0;h.locate=h.locate.bind(k._assertThisInitialized(h));return h}k._inheritsLoose(b,a);var m=b.prototype;m.initialize=function(){this._handles.add([D.onLocaleChange(()=>{var h;const {graphic:n,view:p}=this;(null==p?0:null==(h=p.graphics)?0:h.includes(n))&&this._updatePopupTemplate(n)})])};m.destroy=function(){this.cancelLocate();this._handles.destroy();this._handles=null};m.locate=function(){var h=k._asyncToGenerator(function*(){this.cancelLocate();
if("disabled"===this.state)throw new l("locate:disabled-state","Cannot locate when disabled.");if("feature-unsupported"===this.state)throw new l("locate:feature-unsupported-state","Cannot locate in unsecure domain.");const n=new AbortController;this._locateController=n;try{let p=yield v.getCurrentPosition(this.geolocationOptions);p=yield this._setPosition(p,{signal:n.signal});if(this._locateController!==n)return null;this.graphic&&(this.graphic=this.graphic.clone(),yield this._updatePopupTemplate(this.graphic),
this.view.graphics.push(this.graphic));this.emit("locate",{position:p});this._locateController=null;return p}catch(p){throw this._locateController=null,this.emit("locate-error",{error:p}),p;}});return function(){return h.apply(this,arguments)}}();m.cancelLocate=function(){this._clear();this._locateController&&this._locateController.abort();this._locateController=null};m._updatePopupTemplate=function(){var h=k._asyncToGenerator(function*(n){if(this.popupEnabled){var p=yield u(),G=n!==this.graphic;
this.destroyed||G||(n.popupTemplate=p)}});return function(n){return h.apply(this,arguments)}}();k._createClass(b,[{key:"state",get:function(){return this._geolocationUsable?this.get("view.ready")?this._locateController?"locating":"ready":"disabled":"feature-unsupported"}}]);return b}(z);e.__decorate([q.property()],d.prototype,"_locateController",void 0);e.__decorate([q.property()],d.prototype,"popupEnabled",void 0);e.__decorate([q.property({readOnly:!0})],d.prototype,"state",null);e.__decorate([q.property()],
d.prototype,"locate",null);e.__decorate([q.property()],d.prototype,"cancelLocate",null);return d=e.__decorate([C.subclass("esri.widgets.Locate.LocateViewModel")],d)})},"esri/widgets/support/GeolocationPositioning":function(){define("../../chunks/_rollupPluginBabelHelpers ../../chunks/tslib.es6 ../../assets ../../Graphic ../../core/Accessor ../../core/Error ../../core/Evented ../../core/accessorSupport/decorators/property ../../core/arrayUtils ../../core/has ../../core/accessorSupport/ensureType ../../core/accessorSupport/decorators/subclass ../../symbols/PictureMarkerSymbol ./geolocationUtils ./GoTo".split(" "),
function(k,e,d,g,l,t,q,r,E,B,C,y,z,v,D){l=function(x){function u(){var a=x.apply(this,arguments)||this;a._geolocationUsable=!0;a._iconPath=d.getAssetUrl("esri/images/support/sdk_gps_location.png");a.geolocationOptions=null;a.goToLocationEnabled=!0;a.graphic=new g({symbol:new z({url:a._iconPath,width:21,height:21})});a.scale=null;a.useHeadingEnabled=!0;a.view=null;return a}k._inheritsLoose(u,x);var c=u.prototype;c.initialize=function(){v.supported()||(this._geolocationUsable=!1)};c.destroy=function(){this._clear();
this.view=null};c._clear=function(){this.view&&this.view.graphics.remove(this.graphic)};c._getScaleWithinConstraints=function(a,b){if(!b)return a;if("2d"===b.type){const {effectiveMaxScale:m,effectiveMinScale:h}=b.constraints;return Math.min(h,Math.max(m,a))}return a};c._getScale=function(a){const {scale:b}=this;return this._getScaleWithinConstraints("number"===typeof b?b:2500,a)};c._getHeading=function(a,b){b=b&&b.spatialReference;a=a.coords&&a.coords.heading;if(!(!b||!b.isWebMercator&&!b.isGeographic||
"number"!==typeof a||isNaN(a)||0>a||360<a))return a};c._addHeading=function(a){const {heading:b,target:m,view:h}=a;h&&"number"===typeof b&&!isNaN(b)&&("3d"===h.type?m.heading=b:"2d"===h.type&&(m.rotation=360-b))};c._animatePoint=function(a,b,m,h){const {view:n}=this;if(!this.goToLocationEnabled||!n)return Promise.resolve(b);const p=this.useHeadingEnabled?this._getHeading(b,n):void 0;a={target:a,scale:m};this._addHeading({heading:p,target:a,view:n});return this.callGoTo({target:a,options:h}).then(()=>
b)};c._setPosition=function(){var a=k._asyncToGenerator(function*(b,m){try{const n=yield v.positionToPoint({position:b,view:this.view},m),{graphic:p}=this;var {timestamp:h}=b;const {coords:G}=b,{accuracy:H,altitude:L,altitudeAccuracy:M,heading:N,latitude:O,longitude:I,speed:J}=G;h={timestamp:h,accuracy:H,altitude:L,altitudeAccuracy:M,heading:N,latitude:O,longitude:I,speed:J};p&&(p.geometry=n,p.attributes=h);const K=this._getScale(this.view);return this._animatePoint(n,b,K,m)}catch(n){throw new t("positioning:invalid-point",
"Cannot position invalid point",{error:n});}});return function(b,m){return a.apply(this,arguments)}}();return u}(D.GoToMixin(q.EventedMixin(l)));e.__decorate([r.property()],l.prototype,"_geolocationUsable",void 0);e.__decorate([r.property()],l.prototype,"geolocationOptions",void 0);e.__decorate([r.property()],l.prototype,"goToLocationEnabled",void 0);e.__decorate([r.property()],l.prototype,"graphic",void 0);e.__decorate([r.property()],l.prototype,"scale",void 0);e.__decorate([r.property()],l.prototype,
"useHeadingEnabled",void 0);e.__decorate([r.property()],l.prototype,"view",void 0);return l=e.__decorate([y.subclass("esri.widgets.support.GeolocationPositioning")],l)})},"esri/widgets/support/geolocationUtils":function(){define("exports ../../config ../../core/Error ../../core/has ../../core/Logger ../../geometry/Point ../../geometry/support/webMercatorUtils ../../portal/Portal ../../chunks/_rollupPluginBabelHelpers ../../request ../../core/arrayUtils ../../core/urlUtils ../../geometry ../../geometry/Extent ../../geometry/Geometry ../../geometry/Multipoint ../../geometry/Polygon ../../geometry/Polyline ../../rest/geometryService/units ../../rest/operations/generalize ../../rest/support/GeneralizeParameters ../../rest/operations/lengths ../../rest/support/LengthsParameters ../../rest/operations/offset ../../rest/support/OffsetParameters ../../rest/geometryService/project ../../rest/operations/relation ../../rest/support/RelationParameters ../../rest/operations/trimExtend ../../rest/support/TrimExtendParameters ../../rest/support/ProjectParameters".split(" "),
function(k,e,d,g,l,t,q,r,E,B,C,y,z,v,D,x,u,c,a,b,m,h,n,p,G,H,L,M,N,O,I){function J(f,A,w){if(!A)return Promise.resolve(f);const F=A.spatialReference;return F.isWGS84?Promise.resolve(f):F.isWebMercator?Promise.resolve(q.geographicToWebMercator(f)):K(w).then(P=>{if(!P)throw new d("geometry-service:missing-url","Geometry service URL is missing");const R=new I({geometries:[f],outSpatialReference:F});return H.project(P,R,w).then(S=>S[0])})}function K(f){if(e.geometryServiceUrl)return Promise.resolve(e.geometryServiceUrl);
const A=r.getDefault();return A.load(f).catch(()=>{}).then(()=>A.get("helperServices.geometry.url"))}const Q=l.getLogger("esri.widgets.support.geolocationUtils"),T={maximumAge:0,timeout:15E3,enableHighAccuracy:!0};k.getCurrentPosition=function(f){f||(f=T);return new Promise((A,w)=>{setTimeout(()=>w(new d("geolocation:timeout","getting the current geolocation position timed out")),15E3);navigator.geolocation.getCurrentPosition(A,w,f)})};k.positionToPoint=function(f,A){const {position:w,view:F}=f;f=
w&&w.coords||{};f={accuracy:f.accuracy,altitude:f.altitude,altitudeAccuracy:f.altitudeAccuracy,heading:f.heading,latitude:f.latitude,longitude:f.longitude,speed:f.speed};f=w?{coords:f,timestamp:w.timestamp}:w;f=(f=f&&f.coords)?new t({longitude:f.longitude,latitude:f.latitude,z:f.altitude||null,spatialReference:{wkid:4326}}):null;return J(f,F,A)};k.supported=function(){var f;(f=g("esri-geolocation"))||Q.warn("geolocation-unsupported","Geolocation unsupported.");f&&((f=window.isSecureContext)||Q.warn("insecure-context",
"Geolocation requires a secure origin."));return f};Object.defineProperties(k,{__esModule:{value:!0},[Symbol.toStringTag]:{value:"Module"}})})},"widgets/MyLocation/_build-generate_module":function(){define(["dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/MyLocation/css/style.css":'.jimu-widget-mylocation {background-color: #fff; opacity: 0.8; color: rgba(0, 0, 0, 0.8);}.jimu-widget-mylocation:hover {opacity: 1;}.jimu-widget-mylocation.nohttps:hover{opacity: 0.8;}.jimu-widget-mylocation.onCenter {background-color: #000;}.jimu-widget-mylocation .esri-locate-node {display: none;}.jimu-widget-mylocation .place-holder {width: 32px; height: 32px; background-color: #666; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none; user-select: none; cursor: pointer; border: 1px solid rgba(0, 0, 0, 0.3); text-align: center; line-height: 30px; font-size: 14px; background-position: center center; background-repeat: no-repeat;}.jimu-widget-mylocation .place-holder:before {font-family: \'Themefont\'; content: "\\a907";}.jimu-widget-mylocation .place-holder.locating:before {content: "";}.jimu-widget-mylocation .place-holder.locating {background-image: url("images/loading_black.gif"); background-repeat: no-repeat; background-position: center;}.jimu-widget-mylocation .place-holder.nohttps{color: #bcbcbc;}.jimu-widget-mylocation .place-holder.tracking:before {content: "\\a913" !important; color: rgba(255, 255, 255, 0.8);}.jimu-widget-mylocation .place-holder {background-color: rgba(0, 0, 0, 0);}.jimu-widget-mylocation.onCenter .place-holder {color: #fff;}.jimu-widget-mylocation.onLocate .place-holder {background-color: rgba(0, 0, 0, 0.4);}',
"*now":function(k){k(['dojo/i18n!*preload*widgets/MyLocation/nls/Widget*["ar","bg","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare jimu/BaseWidget dojo/_base/html dojo/on dojo/when dojo/_base/lang esri/layers/GraphicsLayer esri/widgets/Locate esri/widgets/Locate/LocateViewModel esri/symbols/PictureMarkerSymbol esri/geometry/Point esri/geometry/SpatialReference esri/geometry/support/webMercatorUtils esri/rest/support/ProjectParameters esri/Graphic esri/config jimu/utils".split(" "),function(k,e,d,g,l,t,q,r,E,B,C,y,z,v,D,x,u){k=k([e],{name:"MyLocation",baseClass:"jimu-widget-mylocation",startup:function(){this.inherited(arguments);
this.placehoder=d.create("div",{"class":"place-holder",title:this.label},this.domNode);this.isNeedHttpsButNot=u.isNeedHttpsButNot();!0===this.isNeedHttpsButNot?(console.log("LocateButton::navigator.geolocation requires a secure origin."),d.addClass(this.domNode,"nohttps"),d.addClass(this.placehoder,"nohttps"),d.setAttr(this.placehoder,"title",this.nls.httpNotSupportError)):window.navigator.geolocation?this.own(g(this.placehoder,"click",t.hitch(this,this.onLocationClick))):d.setAttr(this.placehoder,
"title",this.nls.browserError)},onLocationClick:function(){d.hasClass(this.domNode,"onCenter")||d.hasClass(this.domNode,"locating")?this._destroyGeoLocate():(this._destroyGeoLocate(),this._createGeoLocateAndLocate())},_createGeoLocateAndLocate:function(){this.getGeoLocateInstance();this.geoLocate.viewModel.locate();d.addClass(this.placehoder,"locating")},getGeoLocateInstance:function(){var c=this.config.locateButton,a={maximumAge:0,timeout:15E3,enableHighAccuracy:!0};c.geolocationOptions&&t.mixin(a,
c.geolocationOptions);this.graphicsLayer=new q;this.sceneView.map.add(this.graphicsLayer);var b=d.create("div",{"class":"esri-locate-node"},this.domNode);a={view:this.sceneView,graphicsLayer:this.graphicsLayer,geolocationOptions:a,scale:c.scale,tracking:c.useTracking,clearOnTrackingStopEnabled:!1};c.highlightLocation||(a.graphic=null);this.geoLocate=new r({viewModel:new E(a),container:b,visible:!1});this.geoLocate.own(g(this.geoLocate.viewModel,"locate",t.hitch(this,this.onLocate)));this.geoLocate.own(g(this.geoLocate.viewModel,
"locate-error",t.hitch(this,this.onLocateError)));return this.geoLocate},onLocate:function(c){this.publishData({geoLocationResult:c});d.removeClass(this.placehoder,"locating");this.graphicsLayer.removeAll();this.geoLocate.viewModel.tracking&&d.addClass(this.placehoder,"tracking");if(c.error)this.onLocateError(c.error);else d.addClass(this.domNode,"onCenter"),this.neverLocate=!1},onLocateError:function(c){this.publishData({geoLocationResult:c});console.error(c.error);d.removeClass(this.placehoder,
"locating");d.removeClass(this.domNode,"onCenter");d.removeClass(this.placehoder,"tracking")},_destroyGeoLocate:function(){this.graphicsLayer&&(this.graphicsLayer.removeAll(),this.sceneView.map.remove(this.graphicsLayer));this.geoLocate&&(this.geoLocate.viewModel.cancelLocate(),this.geoLocate.viewModel.graphicsLayer.removeAll(),this.geoLocate.destroy(),this.geoLocate=null);d.removeClass(this.domNode,"onCenter");d.removeClass(this.placehoder,"tracking")},destroy:function(){this._destroyGeoLocate();
this.inherited(arguments)},_pointMarkerManualy:function(c){"undefined"!==typeof this.config.locateButton.highlightLocation&&!1!==this.config.locateButton.highlightLocation&&(this.highlightSymbol=new B({url:this.folderUrl+"css/images/sdk_gps_location.png",size:28,width:28,height:28,xoffset:14,yoffset:14}),c=new C({longitude:c.position.coords.longitude,latitude:c.position.coords.latitude,spatialReference:new y({wkid:4326})}),this._project(c).then(t.hitch(this,function(a){a=new D({geometry:a[0],symbol:this.highlightSymbol});
this.config.locateButton.highlightLocation&&this.graphicsLayer.add(a)}),t.hitch(this,function(a){this.onLocateError(a)})))},_project:function(c){var a=this.sceneView.spatialReference;if(c.spatialReference.equals(a))return l([c]);if(z.canProject(c,a))return l([z.project(c,a)]);var b=new v;b.geometries=[c];b.outSR=a;return x.geometryService.project(b)}});k.inPanel=!1;k.hasUIFile=!1;return k});