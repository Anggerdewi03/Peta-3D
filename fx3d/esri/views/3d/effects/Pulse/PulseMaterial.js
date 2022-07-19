//>>built
require({cache:{"url:fx3d/views/3d/effects/Pulse/PulseMaterial.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\x3c!-- Copyright @ 2022 Esri. All rights reserved under the copyright laws of the United States and applicable international laws, treaties, and conventions. --\x3e\x3csnippets\x3e\x3csnippet name\x3d"pulseFS"\x3e\x3c![CDATA[\r\n#ifdef GL_ES\r\nprecision mediump float;\r\n#endif\r\nuniform vec3 io;uniform vec4 es;uniform vec4 ps;uniform vec4 oi;uniform vec3 ee;uniform float pl;uniform vec3 ss;varying vec2 dg;varying vec3 dd;varying vec3 cc;varying vec4 gg;const vec3 a\x3dvec3(1.0,1.0,1.0);const vec3 b\x3dvec3(1.0,1.0,1.0);const vec3 c\x3dvec3(0.4,0.4,0.4);void main(){vec3 d\x3dnormalize(cc-ee);vec3 e\x3dnormalize(dd);vec3 f\x3dnormalize(reflect(d,e));float g\x3dmax(dot(f,io),.001);vec3 h\x3dc*oi.rgb*oi.w*pow(g,16.0);vec3 i\x3da*ps.rgb*ps.w*clamp(dot(e,io),.0,1.0);vec3 j\x3db*es.rgb*es.w;vec3 k\x3dvec3(j+i+h);float l\x3dabs(dg.x-0.5)/0.5;gl_FragColor\x3d(1.0-l)*vec4(ss,1.0)+l*gg;gl_FragColor*\x3dvec4(k,1.0);float m\x3dpl*0.01;gl_FragColor.w\x3dm;}]]\x3e\x3c/snippet\x3e\x3csnippet name\x3d"pulseVS"\x3e\x3c![CDATA[attribute vec3 $position;attribute vec3 $auxpos1;uniform mat4 ls;uniform mat4 po;uniform bool pm;uniform float sp;uniform sampler2D el;uniform sampler2D is;uniform vec2 op;uniform float mm;uniform vec2 ep;uniform float ms;uniform vec2 ol;uniform bool os;uniform sampler2D lp;varying vec3 dd;varying vec3 cc;varying vec2 dg;varying vec4 gg; $lonlat2position  $translationMat  $linearInterpolator  $localTrans  $expoEaseOut const float a\x3d0.0;const float b\x3d1.0;const float c\x3d2.0;const float d\x3d3.0;void main(void){float e\x3dfract($auxpos1.x/op.x);float f\x3dfloor($auxpos1.x/op.y)/op.y;float g\x3d(texture2D(el,vec2(e,f))).r;float h\x3d(texture2D(is,vec2(e,f))).r;float i\x3dmod(ms,mm);float j\x3dgetExpoEaseOutValue(i,g,h,mm);if(os) j\x3dh;float k\x3dgetLinearValue(ol,j);if(pm){float l\x3d200000.0;if($auxpos1.y\x3d\x3da||$auxpos1.y\x3d\x3dd){l\x3dgetScope(ep,k);}else if($auxpos1.y\x3d\x3db||$auxpos1.y\x3d\x3dc){l\x3d1.25*getScope(ep,k);}if($auxpos1.y\x3d\x3da) dg\x3dvec2(0.0,0.0);else if($auxpos1.y\x3d\x3dd) dg\x3dvec2(0.0,1.0);else if($auxpos1.y\x3d\x3db) dg\x3dvec2(1.0,0.0);else if($auxpos1.y\x3d\x3dc) dg\x3dvec2(1.0,1.0);float m\x3d$auxpos1.z*2.0*PI;vec3 n\x3dvec3(l*cos(m),l*sin(m),0.0);vec3 o,p;mat4 q\x3dmat4(1.0);\r\n#ifdef GLOBAL\r\nmat4 r\x3dgetTransMat($position);q\x3dtoRotationMat(r);o\x3d(r*vec4(n,1.0)).xyz;vec4 s\x3dvec4(0.0,0.0,1.0,0.0);p\x3d(q*s).xyz;\r\n#else\r\no\x3dwgs84ToWebMerc($position);o+\x3dn;p\x3dvec3(1.0,0.0,1.0);\r\n#endif\r\ngl_Position\x3dls*po*vec4(o,1.0);dd\x3dnormalize(p);cc\x3do;gg\x3dtexture2D(lp,vec2(k,0.5));}else{float t\x3dgetScope(ep,k);mat4 r\x3dgetTransMat($position);float u\x3d($auxpos1.y-sp/2.0)*(20.0/sp);float v\x3d($auxpos1.z-sp/2.0)*(20.0/sp);float w\x3dexp(-0.0831*(u*u+v*v));float x\x3datan(u,v);u\x3dw*cos(2.0*x);v\x3dw*sin(2.0*x);float y\x3dsqrt(u*u+v*v)*getScope(ep,k);vec3 o\x3d(r*vec4(t*($auxpos1.y/sp-0.5),t*($auxpos1.z/sp-0.5),y,1.0)).xyz;vec3 p\x3dnormalize(o);gl_Position\x3dls*po*vec4(o,1.0);dd\x3dp;cc\x3do;dg\x3d$auxpos1.yz/(sp-1.0);}}]]\x3e\x3c/snippet\x3e\x3c/snippets\x3e'}});
define("dojo/text!./PulseMaterial.xml dojo/_base/declare ../../webgl-engine-extensions/GLSLShader ../../webgl-engine-extensions/GLSLProgramExt ../../support/fx3dUtils ../Materials".split(" "),function(g,h,f,k,n,l){return h([l],{declaredClass:"esri.views.3d.effects.Pulse.PulseMaterial",constructor:function(a){this._gl=a.gl;this._shaderSnippets=a.shaderSnippets;this._program=null;this._viewingMode=a.viewingMode;this._pushState=a.pushState;this._restoreState=a.restoreState},destroy:function(){this._program&&
(this._program.dispose(),delete this._program,this._program=null)},_addDefines:function(a,b){var c="";if(null!=b)if(Array.isArray(b))for(var d=0,m=b.length;d<m;d++){var e=b[d];c+="#define "+e+"\n"}else for(e in b)c+="#define "+e+"\n";return this._shaderSnippets.defines+"\n"+c+a},loadShaders:function(){if(this._shaderSnippets){void 0!==this._shaderSnippets.pulseVS&&void 0!==this._shaderSnippets.pulseFS||this._shaderSnippets._parse(g);var a=[];"global"==this._viewingMode?a.push("GLOBAL"):a.push("LOCAL");
a=this._addDefines(this._shaderSnippets.pulseVS,a);a=new f(35633,a,this._gl);var b=new f(35632,this._shaderSnippets.pulseFS,this._gl);this._program=new k([a,b],this._gl);this._program.init()}return this._initResources()},getProgram:function(){return this._program},_initResources:function(){return!0},bind:function(a,b){this._program.use();this._program.uniformMatrix4fv("ls",a.proj);this._program.uniformMatrix4fv("po",a.view);this._program.uniform1i("pm",a.pm);this._program.uniform1f("sp",a.sp);this._program.uniform3fv("ee",
a.camPos);this._program.uniform3fv("io",a.lightingData.direction);this._program.uniform4fv("es",a.lightingData.ambient);this._program.uniform4fv("ps",a.lightingData.diffuse);this._program.uniform4fv("oi",a.lightingData.specular);this._oldTex=this._gl.getParameter(32873);var c=this.getOldActiveUnit(b);a.el.bind(c+1);this._program.uniform1i("el",c+1);a.is.bind(c+2);this._program.uniform1i("is",c+2);this._program.uniform2fv("op",a.op);this._program.uniform2fv("ol",[a.ol,a.lo]);this._program.uniform2fv("ep",
a.ep);this._program.uniform1f("mm",a.mm);this._program.uniform1f("pl",a.pl);this._gl.activeTexture(33984+c+3);this._gl.bindTexture(3553,a.lp);this._program.uniform1i("lp",c+3);this._program.uniform1f("ms",a.time);this._program.uniform1i("os",a.reachedRepeatLimit);this._program.uniform3fv("ss",a.ss);1!=b._depthTestEnabled&&(this._pushState(["setDepthTestEnabled",b._depthTestEnabled]),b.setDepthTestEnabled(!0));519!=b._depthFunction&&(this._pushState(["setDepthFunction",b._depthFunction]),b.setDepthFunction(519));
0!=b._depthWriteEnabled&&(this._pushState(["setDepthWriteEnabled",b._depthWriteEnabled]),b.setDepthWriteEnabled(!1));1!=b._polygonCullingEnabled&&(this._pushState(["setFaceCullingEnabled",b._polygonCullingEnabled]),b.setFaceCullingEnabled(!0));1028!=b._cullFace&&(this._pushState(["setCullFace",b._cullFace]),b.setCullFace(1028));1!=b._blendEnabled&&(this._pushState(["setBlendingEnabled",b._blendEnabled]),b.setBlendingEnabled(!0));this._pushState(["setBlendFunctionSeparate",[b._state.blendFunction.srcRGB,
b._state.blendFunction.dstRGB,b._state.blendFunction.srcAlpha,b._state.blendFunction.dstAlpha]]);b.setBlendFunction(770,771)},release:function(a){this._gl.activeTexture(33984+a._state.activeTexture+1);this._gl.bindTexture(3553,this._oldTex);this._restoreState(a);this._gl.useProgram(null)}})});