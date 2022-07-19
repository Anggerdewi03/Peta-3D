// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"widgets/Navigate/_build-generate_module":function(){define(["dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Navigate/css/style.css":'.jimu-widget-navigate{background-color: #fff; opacity: 0.8; color: rgba(0, 0, 0, 0.8);}.jimu-widget-navigate:hover{opacity: 1;}.jimu-widget-navigate .control-mode{width: 32px; height: 32px; cursor: pointer; border: 1px solid rgba(0, 0, 0, 0.3); text-align: center; line-height: 30px; font-size: 14px;}.jimu-widget-navigate .control-mode:before{font-family: \'Themefont\';}.jimu-widget-navigate .control-mode.pan:before{content: "\\a910";}.jimu-widget-navigate .control-mode.rotate:before{content: "\\a911";}',
"*now":function(b){b(['dojo/i18n!*preload*widgets/Navigate/nls/Widget*["ar","bg","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/on dojo/_base/declare dojo/_base/html dojo/_base/lang jimu/BaseWidget esri/widgets/NavigationToggle".split(" "),function(b,c,a,d,e,f){return c([e],{name:"Navigate",baseClass:"jimu-widget-navigate",_isPan:!0,_panClass:"pan",_rotateClass:"rotate",postCreate:function(){this.inherited(arguments);this.iconNode=a.create("div",{"class":"control-mode",title:this.label},this.domNode);this.navigationToggle=new f({view:this.sceneView});this.own(b(this.iconNode,"click",d.hitch(this,this._onIconNodeClick)));
this._updateUI()},_updateUI:function(){a.removeClass(this.iconNode,this._panClass);a.removeClass(this.iconNode,this._rotateClass);this._isPan?a.addClass(this.iconNode,this._panClass):a.addClass(this.iconNode,this._rotateClass)},_onIconNodeClick:function(){this.navigationToggle.toggle();this._isPan=!this._isPan;this._updateUI()},destroy:function(){this.navigationToggle&&this.navigationToggle.destroy();this.navigationToggle=null;this.inherited(arguments)}})});