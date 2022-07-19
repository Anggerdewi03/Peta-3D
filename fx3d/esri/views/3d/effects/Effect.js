//>>built
define("dojo/_base/lang dojo/_base/array dojo/_base/declare esri/core/Evented esri/geometry/support/webMercatorUtils esri/geometry/Extent esri/core/libs/gl-matrix-2/vec3f64 esri/core/libs/gl-matrix-2/vec2f64 esri/core/libs/gl-matrix-2/vec2 esri/views/3d/webgl-engine/lib/GridLocalOriginFactory esri/geometry/projection ../webgl-engine-extensions/GLVerTexture ../support/fx3dUtils".split(" "),function(m,l,t,G,H,I,u,J,x,K,D,y,z){var A,E,v,w,B,L=J.vec2f64;x=x.vec2;u=u.vec3f64;var q=(u.create(),u.create()),
n={};t=t([G],{declaredClass:"esri.views.3d.effects.Effect",effectName:"Effect",constructor:function(a){this._view=a.view;this._layerView=a.layerView;this._renderCoordsHelper=a.view.renderCoordsHelper;this._renderSpatialReference=a.view.renderSpatialReference;this._layer=a.layer;this._wgs84SpatialReference=this._layerView._fx3dSpatialReference;this._stateStack=[];this._currentVizPage=0;this._preVizId=-1;this._repeatCount=0;this._hasSentReady=this._isReachedRepeatLimit=!1;this._vizFieldDefault="default";
this._vizFields=a.layer.vizFields;this._vizFieldMinMaxs={};this._vizFieldMinMaxs[this._vizFieldDefault]={min:0,max:0,maxFeature:null};l.forEach(this._vizFields,function(b){this._vizFieldMinMaxs[b]={min:null,max:null,maxFeature:null}}.bind(this));this._eventHandlers=[];this._vizFieldVerTextureSize=L.create();this._vizFieldVerTextures={};this._allLoaded=this._needsAllLoaded=!1;this._material=this._shaderSnippets=this._gl=null;this._addedGraphicsCount=this._toAddGraphicsIndex=0;this._addedGraphics=[];
this._resetState();this._resetTime();this._pause=!1;this._eventHandlers.push(this._layer.watch("pauseTag",function(b,d,e){this.ready&&(this._pause=b,b?b&&(this._pausedTime=this.time):this._lastTime=performance.now())}.bind(this)));this._spin=!1;this._eventHandlers.push(this._layer.watch("spinTag",function(b,d,e){return b&&"local"==this._view.viewingMode?(console.warn("Spinning operation is not supported in local scene."),void(this._layer.spinTag=!1)):(this._interactionHandlers||(this._interactionHandlers=
[],this._stopPropagation=function(c){c["native"].preventDefault();c.stopPropagation()}),1==b?(this._interactionHandlers.push(this._view.on("mouse-wheel",this._stopPropagation)),this._interactionHandlers.push(this._view.on("click",this._stopPropagation)),this._interactionHandlers.push(this._view.on("double-click",this._stopPropagation)),this._interactionHandlers.push(this._view.on("hold",this._stopPropagation)),this._interactionHandlers.push(this._view.on("drag",this._stopPropagation)),this._interactionHandlers.push(this._view.on("key-down",
this._stopPropagation)),this._interactionHandlers.push(this._view.on("key-up",this._stopPropagation)),this._interactionHandlers.push(this._view.on("pointer-down",this._stopPropagation)),this._interactionHandlers.push(this._view.on("pointer-up",this._stopPropagation)),this._interactionHandlers.push(this._view.on("pointer-move",this._stopPropagation))):this._interactionHandlers instanceof Array&&(this._interactionHandlers.forEach(function(c){c&&(c.remove(),c=null)}),this._interactionHandlers=[]),void(this._spin=
b))}.bind(this)));this._addLayerWatchHandler("visible");this.renderingInfo={visible:!0,repeat:5,transparency:100,animationInterval:5};this.renderMaxCountter=this.renderCountter=this.orderId=0},_addLayerWatchHandler:function(a){m.isString(a)&&this._eventHandlers.push(this._layer.watch(a,function(b,d,e){this.renderingInfo[e]=b;"visible"===a.toLowerCase()&&this.ready&&(b?this._lastTime=performance.now():b||(this._pausedTime=this.time))}.bind(this)))},_resetState:function(){this._pause=this.ready=!1;
this._shapeDirty=this._vacDirty=!0;this._isAddingGeometry=!1;this._colorBarDirty=this._colourMapDirty=this._renderingInfoDirty=!0;this._hasSentReady=this._firstAnimatedTo=this._isReachedRepeatLimit=this._shadersReady=!1},_resetTime:function(){this._pausedTime=this.time=this._lastTime=0},_pushState:function(a){for(var b=0;b<this._stateStack.length;b++)if(this._stateStack[b][0]==a[0])return;this._stateStack.push(a)},_restoreState:function(a){for(var b=0;b<this._stateStack.length;b++)"function"==typeof a[this._stateStack[b][0]]&&
a[this._stateStack[b][0]].apply(a,this._stateStack[b][1]instanceof Array?this._stateStack[b][1]:[this._stateStack[b][1]]);this._stateStack=[]},destroy:function(){l.forEach(this._eventHandlers,function(b){"function"==typeof b.remove&&b.remove()||"function"==typeof b.destroy&&b.destroy()});this._eventHandlers=[];this._interactionHandlers instanceof Array&&(l.forEach(this._interactionHandlers,function(b){"function"==typeof b.remove&&b.remove()||"function"==typeof b.destroy&&b.destroy();b=null}),this._interactionHandlers=
[]);this._resetState();this._destroy("_material");var a=Object.getOwnPropertyNames(this._vizFieldVerTextures);l.forEach(a,function(b){this._vizFieldVerTextures[b]instanceof y&&this._vizFieldVerTextures[b].dispose()}.bind(this))},_dispose:function(a){this[a]&&(this[a].dispose(),delete this[a]);this[a]=null},_destroy:function(a){this[a]&&(this[a].destroy(),delete this[a]);this[a]=null},initEffect:function(){this._effectConfig=z.effectConfig(this.effectName);this._initRenderingInfo(this._effectConfig);
var a=this._layer._get("renderingInfo");if(this._layer&&a){var b=Object.getOwnPropertyNames(a),d=Object.getOwnPropertyNames(this.renderingInfo),e=this;l.forEach(b,function(c){d?l.some(d,function(k){if(c.toLowerCase()===k.toLowerCase())return"shapetype"===c.toLowerCase()?e.renderingInfo[k]=a[c].toLowerCase():e.renderingInfo[k]=a[c],!0}):e.renderingInfo[c]=a[c]})}this._renderingInfoChange(this.renderingInfo);this._updateDefaultLabelHeight();this._eventHandlers.push(this._layer.on("fx3d-add-graphics",
function(c){this._needsAllLoaded||this._addGraphicsHandler(c)}.bind(this)));this._eventHandlers.push(this._layer.on("all-features-loaded",function(c){this._needsAllLoaded?(this._addGraphicsHandler(c),this._allLoaded=!0):this._shapeDirty=!0;this._layer.emit("effect-ok-test")}.bind(this)));this._eventHandlers.push(this._layer.on("fx3d-active-viz-field",m.hitch(this,this._activeVizFieldHandler)));this._eventHandlers.push(this._layer.watch("renderingInfo",this._renderingInfoChange.bind(this)))},_toWGS84Extent:function(a){var b=
{xmin:a.xmin,ymin:a.ymin,xmax:a.xmax,ymax:a.ymax};return a.spatialReference&&(n.x=a.xmin,n.y=a.ymin,n.z=0,n.spatialReference=a.spatialReference,D.projectPointToVector(n,q,this._wgs84SpatialReference),b.xmin=q[0],b.ymin=q[1],n.x=a.xmax,n.y=a.ymax,D.projectPointToVector(n,q,this._wgs84SpatialReference),b.xmax=q[0],b.ymax=q[1]),b},_calculateExtentCenter:function(a){var b=a.length;if(b){var d,e,c;if("point"==this._layer.geometryType){var k=d=a[0].geometry.longitude;var f=e=a[0].geometry.latitude;for(c=
1;c<b;c++){var g=a[c];null!=g.geometry&&(g.geometry.longitude<k&&(k=g.geometry.longitude),g.geometry.longitude>d&&(d=g.geometry.longitude),g.geometry.latitude<f&&(f=g.geometry.latitude),g.geometry.latitude>e&&(e=g.geometry.latitude))}}else if("polyline"==this._layer.geometryType||"polygon"==this._layer.geometryType){var h=a[0].geometry.extent;k=h.xmin;d=h.xmax;f=h.ymin;e=h.ymax;for(c=1;c<b;c++)g=a[c],null!=g.geometry&&null!=g.geometry.extent&&(h=g.geometry.extent,h.xmin<k&&(k=h.xmin),h.xmax>d&&(d=
h.xmax),h.ymin<f&&(f=h.ymin),h.ymax>e&&(e=h.ymax))}return new I(k,f,d,e,this._wgs84SpatialReference)}return null},_addGraphicsHandler:function(a){m.isArray(a.graphics)&&0<a.graphics.length&&(this._toAddGraphicsIndex=this._addedGraphicsCount,this._addedGraphicsCount+=a.graphics.length,this._needsAllLoaded?this._addedGraphics=a.graphics:this._addedGraphics=this._addedGraphics.concat(a.graphics),this._isAddingGeometry=!0,this._shapeDirty=!0)},_activeVizFieldHandler:function(a){"number"==typeof a.currentVizPage&&
((0>this._currentVizPage||this._currentVizPage>=this._vizFields.length)&&(this._currentVizPage=0),this.ready=!1,this._hasSentReady=!1,this._restoreRenderingInfo(),m.isObject(a.newRenderingInfo)&&m.mixin(this.renderingInfo,a.newRenderingInfo),this._shapeDirty=!1,this._colorBarDirty=!1,this._colourMapDirty=!1,this._renderingInfoChange(this.renderingInfo),this._updateDefaultLabelHeight(),this.update(),this._resetAnimation(),this._currentVizPage=a.currentVizPage,this._updateVizFieldMinMaxToLayer(),this._layerView._updateSelectedFeatureLabel(),
this._emitSyncEvent())},_resetAnimation:function(){this._repeatCount=0;this._preVizId=-1;this._isReachedRepeatLimit=!1;this._resetTime();this._layer.startAnimation()},_resetAddGeometries:function(){this._addedGraphics=[];this._isAddingGeometry=!1},_allGraphics:function(){return this._layerView.getLoadedGraphics()},_renderingInfoChange:function(a,b,d){a!==b&&a&&m.isObject(a)&&this._doRenderingInfoChange(a)},_doRenderingInfoChange:function(a){this._renderingInfoDirty=!0;for(var b in a)a.hasOwnProperty(b)&&
this.renderingInfo.hasOwnProperty(b)&&("visible"===b.toLowerCase()?(this._layer&&(this._layer[b]=a[b]),this.renderingInfo[b]=a[b]):"repeat"!==b.toLowerCase()&&"animationinterval"!==b.toLowerCase()||(this._resetAnimation(),this._clampScope(a,b),this.renderingInfo[b]=a[b]))},_initRenderingInfo:function(a){this._scopes={};a&&m.isObject(a)&&m.isArray(a.renderingInfo)&&l.forEach(a.renderingInfo,function(b){"shapetype"===b.name.toLowerCase()?this.renderingInfo[b.name]=b.defaultValue.toLowerCase():this.renderingInfo[b.name]=
b.defaultValue;m.isArray(b.scope)&&(this._scopes[b.name]=b.scope)}.bind(this))},_restoreRenderingInfo:function(){this.renderingInfo={visible:!0,repeat:5,transparency:100,animationInterval:5};this._initRenderingInfo(this._effectConfig);var a=this._layer._get("renderingInfo");if(this._layer&&a){var b=Object.getOwnPropertyNames(a),d=Object.getOwnPropertyNames(this.renderingInfo),e=this;l.forEach(b,function(c){d?l.some(d,function(k){if(c.toLowerCase()===k.toLowerCase())return"shapetype"===c.toLowerCase()?
e.renderingInfo[k]=a[c].toLowerCase():e.renderingInfo[k]=a[c],!0}):e.renderingInfo[c]=a[c]})}this._updateDefaultLabelHeight()},_clampScope:function(a,b){var d=this._scopes[b];m.isArray(d)&&"number"==typeof a[b]&&"number"==typeof d[0]&&"number"==typeof d[1]&&(a[b]<d[0]?a[b]=d[0]:a[b]>d[1]&&(a[b]=d[1]),0>a[b]&&(a[b]=0))},_updateRenderingInfo:function(){var a=!0;(!this._needsAllLoaded||this._needsAllLoaded&&this._allLoaded)&&0<this._allGraphics().length&&(this._colorBarDirty?(a=this._initColorBar(),
a&&(this._colorBarDirty=!1)):a=!0,this._colourMapDirty&&a?(a=this._initColourMap(),a&&(this._colourMapDirty=!1)):a=!0,a=!(!this._renderingInfoDirty||!a),this._renderingInfoDirty=!a)},_updateRenderingGeometry:function(){var a=!0;(!this._needsAllLoaded||this._needsAllLoaded&&this._allLoaded)&&0<this._allGraphics().length&&(a=this._initRenderContext(),a?(a=this._initVizFieldVertextures(),a&&this._layer.emit("can-locating-now"),this._shapeDirty=!a):(console.error("this._initRenderContext() FALSE"),this._shapeDirty=
!0),!0===this._shapeDirty&&(this._isAddingGeometry=!1))},_emitSyncEvent:function(){this._layer&&0<this._repeatCount&&(0>=this.renderingInfo.repeat||0<this.renderingInfo.repeat&&this._repeatCount<=this.renderingInfo.repeat)&&this._layer.emit("sync-viz-timer",{vizPage:this._currentVizPage,repeat:this._repeatCount})},_calculateRepeatCount:function(){B=Math.floor(this.time/this.renderingInfo.animationInterval);this._preVizId!==B&&(this._repeatCount++,this._preVizId=B,this._emitSyncEvent())},_updateVizPage:function(){0<
this.renderingInfo.repeat?this._repeatCount<=this.renderingInfo.repeat?this._calculateRepeatCount():this._isReachedRepeatLimit||(this._isReachedRepeatLimit=!0,this._layer.pauseAnimation(),this._layer.emit("reached-repeat-limit")):0>this.renderingInfo.repeat?(this._calculateRepeatCount(),this._isReachedRepeatLimit&&(this._isReachedRepeatLimit=!1)):this._isReachedRepeatLimit||(this._isReachedRepeatLimit=!0)},setupEffect:function(a){this._gl=a.gl;this._shaderSnippets=a.shaderSnippets;this._vaoExt=a.vaoExt;
this._shadersReady=this._loadShaders();this._vizFieldVerTextures[this._vizFieldDefault]=new y(this._gl);l.forEach(this._vizFields,function(b){this._vizFieldVerTextures[b]=new y(this._gl)}.bind(this))},update:function(){var a=!1;return this.renderingInfo.visible&&this._shadersReady?(this._renderingInfoDirty&&(this._updateRenderingInfo(),a=!0),this._shapeDirty&&(this._updateRenderingGeometry(),a=!0),this._renderingInfoDirty||this._shapeDirty||!this._shadersReady?this.ready=!1:this.ready=!0,this._updateSelfTime(),
this._updateVizPage(),this._spin&&this._doSpin(),a):a},render:function(a,b){a.time=this.time;a.reachedRepeatLimit=this._isReachedRepeatLimit},_doSpin:function(){A=this._view.camera.position;E=H.webMercatorToGeographic(A);v=E.x-1;-180>=v&&(v=179);w=A.z;8E6>w&&(w=8E6);this._view.goTo({position:[v,0,w],tilt:0,heading:0})},_bindPramsReady:function(){return 0<=this._currentVizPage&&this._currentVizPage<Object.getOwnPropertyNames(this._vizFieldMinMaxs).length&&this._currentVizPage<Object.getOwnPropertyNames(this._vizFieldVerTextures).length},
_updateSelfTime:function(){this.ready&&!this._pause&&(0!==this._lastTime?this.time=this._pausedTime+.001*(performance.now()-this._lastTime):(this._lastTime=performance.now(),this.time=0))},_loadShaders:function(){return!1},_initVertexLayout:function(){return!0},_initRenderContext:function(){return!0},_initVizFieldVertextures:function(){var a=this._allGraphics();if(0<a.length){console.log("_initVizFieldVertextures \x3d\x3d\x3e graphics.length \x3d\x3d\x3e "+a.length);var b=this._gl.getParameter(3379),
d=a.length,e=z.nextHighestPowerOfTwo(d);e>b&&(e=b,console.warn("Too many graphics, and extra features will be discarded."));var c=Math.ceil(d/e);c=z.nextHighestPowerOfTwo(c);c>b&&(c=b,console.warn("Too many graphics, and extra features will be discarded."));this._vizFieldVerTextures[this._vizFieldDefault].initTexture(e,c,new Float32Array(e*c*4));var k,f,g,h;return l.forEach(this._vizFields,function(p){var C=new Float32Array(e*c*4);this._vizFieldVerTextures[p].initTexture(e,c,C);(f=a[0].attributes[p])||
(f=0);(!f||"number"!=typeof f||0>f)&&(f=0);g=h=f;for(var F=a[0],r=0;r<a.length;r++)k=a[r].attributes,f=k[p],(!f||"number"!=typeof f||0>f)&&(f=0),C[4*r]=f,h<f&&(h=f,F=a[r]),g>f&&(g=f);console.log("set his._vizFieldVerTextures "+p);this._vizFieldVerTextures[p].updateTexture(C);this._vizFieldMinMaxs[p].min=g;this._vizFieldMinMaxs[p].max=h;this._vizFieldMinMaxs[p].maxFeature=F;this._updateVizFieldMinMaxToLayer()}.bind(this)),x.set(this._vizFieldVerTextureSize,e,c),!0}return!1},syncVizFieldVertextures:function(){return 0<
this._allGraphics().length&&(this._vizFieldVerTextures[this._vizFieldDefault].syncData(),l.forEach(this._vizFields,function(a){console.log("set his._vizFieldVerTextures "+a);this._vizFieldVerTextures[a].syncData()}.bind(this)),!0)},_updateVizFieldMinMaxToLayer:function(){this._layer._currentVizPage=this._currentVizPage;this._layer._currentVizFieldMinMax=this._vizFieldMinMaxs[this._vizFields[this._currentVizPage]]},_initColourMap:function(){return!0},_initColorBar:function(){return!0},_updateDefaultLabelHeight:function(){}});
return t.createLocalOriginFactory=function(){return new K.GridLocalOriginFactory},t});