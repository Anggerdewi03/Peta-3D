// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"jimu/layoutManagers/BaseLayoutManager":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dijit/_WidgetBase dojo/Deferred dojo/promise/all ../utils ../WidgetPlaceholder ../OnScreenWidgetIcon".split(" "),function(w,h,f,l,r,p,t,g,n,q){var v=null;var u=w([r],{constructor:function(){this.widgetPlaceholders=[];this.onScreenWidgetIcons=[];this.invisibleWidgetIds=[]},name:"BaseLayoutManager",mapId:"map",sceneView:null,layoutId:"jimu-layout-manager",postCreate:function(){this.containerNode=
this.domNode;this.layoutId=jimuConfig.layoutId},resize:function(){},isSupportEdit:function(){return!1},getMapDiv:function(){},setSceneView:function(a){this.sceneView=a},onEnter:function(a,c){var b=new p;this.appConfig=a;this.mapId=c;b.resolve();return b},onLeave:function(){},onThemeLoad:function(){},loadAndLayout:function(a){},openWidget:function(a){},onLayoutChange:function(a){},onWidgetChange:function(a,c){},onGroupChange:function(a,c){},onWidgetPoolChange:function(a,c){this.reloadControllerWidget(a,
c.controllerId)},onOnScreenOrderChange:function(a,c){f.forEach(c,h.hitch(this,function(b){b.uri?f.some(this.onScreenWidgetIcons,h.hitch(this,function(k){if(k.configId===b.id)return l.setStyle(k.domNode,g.getPositionStyle({top:b.position.top,left:b.position.left,right:b.position.right,bottom:b.position.bottom,width:40,height:40})),k.moveTo(b.position),!0})):f.some(this.widgetPlaceholders,h.hitch(this,function(k){if(k.index===b.placeholderIndex){var d=g.getPositionStyle({top:b.position.top,left:b.position.left,
right:b.position.right,bottom:b.position.bottom,width:40,height:40});l.setStyle(k.domNode,d);return!0}}))}))},onActionTriggered:function(a){},onLayoutDefinitionChange:function(a,c){},onOnScreenGroupsChange:function(a,c){},destroyOnScreenWidgetsAndGroups:function(a){},loadOnScreenWidgets:function(a){var c=[];f.forEach(a.widgetOnScreen.widgets,function(b){!1===b.visible?this.invisibleWidgetIds.push(b.id):c.push(this.loadOnScreenWidget(b,a))},this);return t(c)},loadOnScreenWidget:function(a,c){var b=
new p;if("config"===c.mode&&!a.uri)return c=this._createOnScreenWidgetPlaceHolder(a),b.resolve(c),b;if(!a.uri)return b.resolve(null),b;a.inPanel||a.closeable?(c=this._createOnScreenWidgetIcon(a),b.resolve(c)):this.widgetManager.loadWidget(a).then(h.hitch(this,function(k){try{k.setPosition(k.position),this.widgetManager.openWidget(k)}catch(d){console.log(console.error("fail to startup widget "+k.name+". "+d.stack))}k.configId=a.id;b.resolve(k)}),function(k){b.reject(k)});return b},onOnScreenWidgetChange:function(a,
c){c=a.getConfigElementById(c.id);c.isController?this.reloadControllerWidget(a,c.id):(f.forEach(this.widgetPlaceholders,function(b){b.configId===c.id&&(b.destroy(),this.loadOnScreenWidget(c,a))},this),this.removeDestroyed(this.widgetPlaceholders),this._updatePlaceholder(a),f.forEach(this.onScreenWidgetIcons,function(b){if(b.configId===c.id){var k=b.state;b.destroy();this.loadOnScreenWidget(c,a).then(function(d){if(c.uri&&"opened"===k)d.onClick()})}},this),this.removeDestroyed(this.onScreenWidgetIcons),
f.forEach(this.widgetManager.getOnScreenOffPanelWidgets(),function(b){b.configId===c.id&&(b.destroy(),!1===c.visible?0>this.invisibleWidgetIds.indexOf(c.id)&&this.invisibleWidgetIds.push(c.id):this.loadOnScreenWidget(c,a))},this),f.forEach(this.invisibleWidgetIds,function(b){b===c.id&&!1!==c.visible&&(this.loadOnScreenWidget(c,a),b=this.invisibleWidgetIds.indexOf(c.id),this.invisibleWidgetIds.splice(b,1))},this),c.isOnScreen||f.forEach(this.widgetManager.getControllerWidgets(),function(b){b.widgetIsControlled(c.id)&&
this.reloadControllerWidget(a,b.id)},this))},destroyOnScreenWidgetIcons:function(){f.forEach(this.onScreenWidgetIcons,function(a){a.destroy()},this);this.onScreenWidgetIcons=[]},destroyOnScreenOffPanelWidgets:function(){f.forEach(this.widgetManager.getOnScreenOffPanelWidgets(),function(a){a.isController?this._destroyControllerWidget(a):this.widgetManager.destroyWidget(a)},this)},destroyWidgetPlaceholders:function(){f.forEach(this.widgetPlaceholders,function(a){a.destroy()},this);this.widgetPlaceholders=
[]},removeDestroyed:function(a){var c=[];f.forEach(a,function(b){b._destroyed&&c.push(b)});f.forEach(c,function(b){b=a.indexOf(b);a.splice(b,1)})},_createOnScreenWidgetPlaceHolder:function(a){var c="map"===a.position.relativeTo?this.mapId:this.layoutId;var b=h.clone(a);b.position.width=40;b.position.height=40;var k=g.getPositionStyle(b.position);a=new n({index:b.placeholderIndex,configId:a.id});l.setStyle(a.domNode,k);l.place(a.domNode,c);this.widgetPlaceholders.push(a);return a},_createOnScreenWidgetIcon:function(a){var c=
new q({panelManager:this.panelManager,widgetManager:this.widgetManager,widgetConfig:a,configId:a.id,sceneView:this.sceneView});"map"===a.position.relativeTo?l.place(c.domNode,this.mapId):l.place(c.domNode,this.layoutId);l.setStyle(c.domNode,g.getPositionStyle({top:a.position.top,left:a.position.left,right:a.position.right,bottom:a.position.bottom,width:40,height:40}));c.startup();!this.openAtStartWidget&&a.openAtStart&&(c.switchToOpen(),this.openAtStartWidget=a.name);this.onScreenWidgetIcons.push(c);
return c},reloadControllerWidget:function(a,c){var b=this.widgetManager.getWidgetById(c);if(b){var k=b.getOpenedIds(),d=b.windowState;this._destroyControllerWidget(b);this._loadControllerWidget(a,c,k,d)}else this._loadControllerWidget(a,c)},_destroyControllerWidget:function(a){f.forEach(a.getAllConfigs(),function(c){if(c.widgets)this.panelManager.destroyPanel(c.id+"_panel"),f.forEach(c.widgets,function(k){this.panelManager.destroyPanel(k.id+"_panel")},this);else{var b=this.widgetManager.getWidgetById(c.id);
b&&(c.inPanel?this.panelManager.destroyPanel(b.getPanel()):this.widgetManager.destroyWidget(b))}},this);this.widgetManager.destroyWidget(a)},_loadControllerWidget:function(a,c,b,k){c=a.getConfigElementById(c);!1!==c.visible&&this.loadOnScreenWidget(c,a).then(h.hitch(this,function(d){k&&this.widgetManager.changeWindowStateTo(d,k);b&&d.setOpenedIds(b)}))},_updatePlaceholder:function(a){f.forEach(this.widgetPlaceholders,function(c){c.setIndex(a.getConfigElementById(c.configId).placeholderIndex)},this)}});
u.getInstance=function(){null===v&&(v=new u);return v};return u})},"jimu/WidgetPlaceholder":function(){define(["dojo/_base/declare","dojo/_base/lang","dojo/_base/html","dijit/_WidgetBase","./utils"],function(w,h,f,l,r){return w(l,{"class":"jimu-widget-placeholder",position:null,postCreate:function(){this.inherited(arguments);this.indexNode=f.create("div",{"class":"inner",innerHTML:this.index},this.domNode);f.setAttr(this.domNode,"title",window.jimuNls.widgetPlaceholderTooltip)},moveTo:function(p){this.position=
h.clone(p);var t={left:"auto",right:"auto",bottom:"auto",top:"auto",width:"auto",height:"auto"};t=h.mixin(t,r.getPositionStyle(p));delete t.width;delete t.height;f.setStyle(this.domNode,t)},setIndex:function(p){this.index=p;this.indexNode.innerHTML=p}})})},"jimu/OnScreenWidgetIcon":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/on dijit/_WidgetBase ./utils".split(" "),function(w,h,f,l,r,p,t){return w(p,{"class":"jimu-widget-onscreen-icon",postCreate:function(){this.inherited(arguments);
this.iconNode=l.create("img",{src:this.widgetConfig.icon},this.domNode);window.isRTL&&this.widgetConfig.mirrorIconForRTL&&l.addClass(this.iconNode,"jimu-flipx");l.setAttr(this.domNode,"title",this.widgetConfig.label);this.own(r(this.domNode,"click",h.hitch(this,function(){this.onClick()})));this.position=h.clone(this.widgetConfig.position);"map"===this.widgetConfig.position.relativeTo&&this.own(r(this.sceneView,"resize",h.hitch(this,function(){var g=h.clone(this.position);delete g.width;delete g.height;
this.panel&&this.panel.setPosition(g)})));this.state="closed"},startup:function(){this.inherited(arguments)},onClick:function(){"closed"===this.state?this.switchToOpen():this.switchToClose()},moveTo:function(g){var n={left:"auto",right:"auto",bottom:"auto",top:"auto",width:"auto",height:"auto"};n=h.mixin(n,t.getPositionStyle(g));delete n.width;delete n.height;l.setStyle(this.domNode,n);this.position=h.clone(g);this.widgetConfig&&this.widgetConfig.panel&&(this.widgetConfig.panel.position=h.clone(g),
this.widgetConfig.position=h.clone(g));this.panel&&this.panel.setPosition(h.clone(g));this.widget&&this.widget.setPosition(this.getOffPanelWidgetPosition(this.widget))},destroy:function(){this.panel?this.panelManager.destroyPanel(this.panel):this.widget&&this.widgetManager.destroyWidget(this.widget);this.inherited(arguments)},switchToOpen:function(){this.state="opened";this.panelManager.closeAllPanelsInGroup(this.widgetConfig.gid);f.forEach(this.widgetManager.getOnScreenOffPanelWidgets(),function(g){g.closeable&&
this.widgetManager.closeWidget(g)},this);l.addClass(this.domNode,"jimu-state-selected");this._showLoading();!1===this.widgetConfig.inPanel?this.widgetManager.loadWidget(this.widgetConfig).then(h.hitch(this,function(g){this.widget=g;g.setPosition(this.getOffPanelWidgetPosition(g));this.widgetManager.openWidget(g);this.own(r(g,"close",h.hitch(this,function(){this.switchToClose()})));this._hideLoading()})):this.panelManager.showPanel(h.clone(this.widgetConfig)).then(h.hitch(this,function(g){this.panel=
g;this.own(r(g,"close",h.hitch(this,function(){this.switchToClose()})));this._hideLoading()}))},switchToClose:function(){this.state="closed";l.removeClass(this.domNode,"jimu-state-selected");!1===this.widgetConfig.inPanel?this.widgetManager.closeWidget(this.widget):this.panelManager.closePanel(this.panel)},getOffPanelWidgetPosition:function(g){var n={relativeTo:g.position.relativeTo},q=l.getMarginBox(this.domNode);g=this.widgetManager.getWidgetMarginBox(g);var v=l.getMarginBox("map"===n.relativeTo?
this.sceneView.map.id:jimuConfig.layoutId),u=q.t+q.h+1;u+g.h>v.h?n.bottom=v.h-q.t+1:n.top=u;window.isRTL?n.right=0>q.l+q.w-g.w?0:q.l+q.w-g.w:q.l+g.w>v.w?n.right=0:n.left=q.l;return n},_showLoading:function(){l.setAttr(this.iconNode,"src",require.toUrl("jimu")+"/images/loading_circle.gif")},_hideLoading:function(){l.setAttr(this.iconNode,"src",this.widgetConfig.icon)}})})}}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/_base/html dojo/topic dojo/dom-construct dojo/dom-geometry dojo/promise/all dojo/when ../WidgetManager ../PanelManager ../utils ../dijit/LoadingShelter ./BaseLayoutManager".split(" "),function(w,h,f,l,r,p,t,g,n,q,v,u,a,c){var b=null;var k=w([c],{name:"AbsolutePositionLayoutManager",constructor:function(){this.widgetManager=q.getInstance();this.panelManager=v.getInstance();r.subscribe("changeMapPosition",h.hitch(this,this.onChangeMapPosition));
this.onScreenGroupPanels=[]},sceneView:null,resize:function(){f.forEach(this.widgetManager.getAllWidgets(),function(d){!1===d.inPanel&&d.resize()},this)},setSceneView:function(d){this.inherited(arguments);this.panelManager.setSceneView(d)},getMapDiv:function(){return l.byId(this.mapId)?l.byId(this.mapId):l.create("div",{id:this.mapId,style:h.mixin({position:"absolute",backgroundColor:"#EEEEEE",overflow:"hidden",minWidth:"1px",minHeight:"1px"},u.getPositionStyle(this.appConfig.map.position))},this.layoutId)},
loadAndLayout:function(d){console.time("Load widgetOnScreen");this.setMapPosition(d.map.position);var e=new a,m=[];e.placeAt(this.layoutId);e.startup();m.push(this.loadOnScreenWidgets(d));f.forEach(d.widgetOnScreen.groups,function(x){m.push(this._loadOnScreenGroup(x,d))},this);g(m).then(h.hitch(this,function(){e&&(e.destroy(),e=null);console.timeEnd("Load widgetOnScreen");r.publish("preloadWidgetsLoaded")}),h.hitch(this,function(){e&&(e.destroy(),e=null);console.timeEnd("Load widgetOnScreen");r.publish("preloadWidgetsLoaded")}))},
destroyOnScreenWidgetsAndGroups:function(){this.panelManager.destroyAllPanels();this.destroyOnScreenOffPanelWidgets();this.destroyWidgetPlaceholders();this.destroyOnScreenWidgetIcons()},openWidget:function(d){f.forEach(this.onScreenWidgetIcons,function(e){e.configId===d&&e.switchToOpen()},this);f.forEach(this.widgetManager.getControllerWidgets(),function(e){e.widgetIsControlled(d)&&e.setOpenedIds([d])},this)},onLayoutChange:function(d){this._changeMapPosition(d);f.forEach(this.widgetPlaceholders,
function(e){e.moveTo(d.getConfigElementById(e.configId).position)},this);f.forEach(this.onScreenWidgetIcons,function(e){e.moveTo(d.getConfigElementById(e.configId).position)},this);f.forEach(this.widgetManager.getOnScreenOffPanelWidgets(),function(e){if(!e.closeable){var m=d.getConfigElementById(e.id).position;e.setPosition(m)}},this);f.forEach(this.onScreenGroupPanels,function(e){var m=d.getConfigElementById(e.config.id);m&&m.panel&&e.setPosition(m.panel.position)},this)},onWidgetChange:function(d,
e){e=d.getConfigElementById(e.id);this.onOnScreenWidgetChange(d,e);f.forEach(this.onScreenGroupPanels,function(m){m.reloadWidget(e)},this)},onGroupChange:function(d,e){e=d.getConfigElementById(e.id);e.isOnScreen?(this.panelManager.destroyPanel(e.id+"_panel"),this.removeDestroyed(this.onScreenGroupPanels),this._loadOnScreenGroup(e,d)):(f.forEach(this.widgetManager.getControllerWidgets(),function(m){m.isControlled(e.id)&&this.reloadControllerWidget(d,m.id)},this),f.forEach(this.panelManager.panels,
function(m){m.config.id===e.id&&m.updateConfig(e)},this))},onActionTriggered:function(d){"highLight"===d.action&&(f.forEach(this.widgetPlaceholders,function(e){e.configId===d.elementId&&this._highLight(e)},this),f.forEach(this.onScreenWidgetIcons,function(e){e.configId===d.elementId&&this._highLight(e)},this),f.forEach(this.widgetManager.getOnScreenOffPanelWidgets(),function(e){e.configId===d.elementId&&this._highLight(e)},this),f.forEach(this.onScreenGroupPanels,function(e){e.configId===d.elementId&&
this._highLight(e)},this));"removeHighLight"===d.action&&this._removeHighLight();"showLoading"===d.action&&(l.setStyle(jimuConfig.loadingId,"display","block"),l.setStyle(jimuConfig.mainPageId,"display","none"));"showApp"===d.action&&(l.setStyle(jimuConfig.loadingId,"display","none"),l.setStyle(jimuConfig.mainPageId,"display","block"))},onChangeMapPosition:function(d){var e=h.clone(this.mapPosition);h.mixin(e,d);this.setMapPosition(e)},setMapPosition:function(d){this.mapPosition=d;d=u.getPositionStyle(d);
l.setStyle(this.mapId,d)},getMapPosition:function(){return this.mapPosition},_highLight:function(d){if(d.domNode){this.hlDiv&&this._removeHighLight(d);var e=t.getContentBox(d.domNode);this.hlDiv=p.create("div",{style:{position:"absolute",left:e.l+"px",top:e.t+"px",width:e.w+"px",height:e.h+"px"},"class":"icon-highlight"},d.domNode,"before")}},_removeHighLight:function(){this.hlDiv&&(p.destroy(this.hlDiv),this.hlDiv=null)},_changeMapPosition:function(d){this.sceneView&&(u.isEqual(this.getMapPosition(),
d.map.position)||this.setMapPosition(d.map.position))},_loadOnScreenGroup:function(d,e){return e.mode||d.widgets&&0!==d.widgets.length?this.panelManager.showPanel(d).then(h.hitch(this,function(m){m.configId=d.id;this.onScreenGroupPanels.push(m);return m})):n(null)}});k.getInstance=function(){null===b&&(b=new k,window._absolutLayoutManager=b);return b};return k});