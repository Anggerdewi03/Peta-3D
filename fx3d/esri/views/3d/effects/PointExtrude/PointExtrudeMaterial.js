//>>built
require({cache:{"url:fx3d/views/3d/effects/PointExtrude/PointExtrudeMaterial.xml":'\x3c?xml version\x3d"1.0" encoding\x3d"UTF-8"?\x3e\x3c!-- Copyright @ 2022 Esri. All rights reserved under the copyright laws of the United States and applicable international laws, treaties, and conventions. --\x3e\x3csnippets\x3e\x3csnippet name\x3d"pointExtrudeFS"\x3e\x3c![CDATA[\r\n#ifdef GL_ES\r\nprecision mediump float;\r\n#endif\r\nuniform float ss;uniform vec3 es;uniform vec4 is;uniform vec4 ms;uniform vec4 ie;uniform vec3 camPos;varying vec4 dc;varying vec3 cc;varying vec3 gh;const vec3 a\x3dvec3(1.0,1.0,1.0);const vec3 b\x3dvec3(1.0,1.0,1.0);const vec3 c\x3dvec3(0.2,0.2,0.2);void main(){vec3 d\x3dnormalize(gh-camPos);vec3 e\x3dnormalize(cc);vec3 f\x3dnormalize(reflect(d,e));float g\x3dmax(dot(f,es),.001);vec3 h\x3dc*ie.rgb*ie.w*pow(g,18.0);vec3 i\x3da*ms.rgb*ms.w*clamp(dot(e,es),.0,1.0);vec3 j\x3db*is.rgb*is.w;vec3 k\x3dvec3(j+i+h);gl_FragColor.xyz\x3ddc.xyz*k;float l\x3dss*0.01;gl_FragColor.w\x3dl;}]]\x3e\x3c/snippet\x3e\x3csnippet name\x3d"pointExtrudeVS"\x3e\x3c![CDATA[attribute vec3 $position;attribute vec3 $auxpos1;attribute vec3 $normal;attribute vec3 $auxpos2;uniform mat4 em;uniform mat4 viewMat;uniform sampler2D oe;uniform sampler2D mi;uniform float se;uniform vec3 li;uniform vec3 origin;uniform vec3 camPos;uniform sampler2D ii;uniform vec3 il;uniform float im;uniform float po;uniform vec2 ee;uniform vec2 ls;uniform bool oi;uniform float ml;uniform vec4 ps;varying vec4 dc;varying vec3 cc;varying vec3 gh; $linearInterpolator  $lonlat2position  $translationMat  $localTrans  $quintEaseOut const float a\x3d1.0;const float b\x3d0.0;vec4 matchPixelCenter(vec4 c,vec2 d){vec2 e\x3dvec2(.500123)+.5*c.xy/c.w;vec2 f\x3dfloor(e*d);vec2 g\x3dvec2(1.0)/d;vec2 h\x3d(((vec2(.5)+f)*g)*2.0-vec2(1.0))*c.w;return vec4(h.x,h.y,c.z,c.w);}void main(void){float i\x3dfract($auxpos2.x/ee.x);float j\x3dfloor($auxpos2.x/ee.y)/ee.y;float k\x3d(texture2D(oe,vec2(i,j))).r;float l\x3d(texture2D(mi,vec2(i,j))).r;float m\x3dmod(im,se);float n\x3dgetQuintEaseInOutValue(m,k,l,se);if(oi){n\x3dl;}float o\x3dgetLinearValue(ls,n);float p\x3d$auxpos2.y*po*2.0*PI;vec3 q\x3dvec3(li.x*cos(p),li.x*sin(p),0.0);bool r\x3dfalse;if($auxpos2.z\x3d\x3da){r\x3dtrue;}else if($auxpos2.z\x3d\x3db){r\x3dfalse;}vec3 s\x3dli.x*$position+$auxpos1;vec3 t\x3d(viewMat*vec4($auxpos1,1.0)).xyz;vec3 u;mat4 v\x3dmat4(1.0);\r\n#ifdef GLOBAL\r\nu\x3dnormalize(s+origin);\r\n#else\r\nu\x3dvec3(0.0,0.0,1.0);\r\n#endif\r\nvec3 w\x3d(viewMat*vec4(s,1.0)).xyz;cc\x3dnormalize(w-t);if(r){\r\n#ifdef EFFECT_DEBUG\r\ndc\x3dtexture2D(ii,vec2(o,0.5));dc\x3dvec4(o,0.0,0.0,1.0);dc\x3dvec4((texture2D(mi,vec2(0,0))).r/1200.0,0.0,0.0,1.0);dc\x3dvec4((texture2D(mi,vec2(0,0))).r,i,j,1.0);if(p\x3c1.0*PI){dc\x3dtexture2D(ii,vec2(o,0.5));}\r\n#else\r\ndc\x3dtexture2D(ii,vec2(o,0.5));\r\n#endif\r\ns+\x3d(u*getScope(li.yz,o));}else{\r\n#ifdef EFFECT_DEBUG\r\n#else\r\ndc\x3dvec4(il,1.0);\r\n#endif\r\n}vec3 x\x3dvec3(1.0,0.0,0.0);float y\x3d1.0;float z\x3d1.0;float A\x3dabs(dot(u,normalize(camPos-s)));float B\x3d0.00001;w\x3d(viewMat*vec4(s,1.0)).xyz;if(A\x3e.01){float C\x3dsqrt(1.0-A*A)/A;float D\x3d(1.0-C/ps[2]);if(z\x3e0.0){w*\x3dD;}else{w/\x3dD;}}w+\x3dx;vec4 E\x3dem*vec4(w,1.0);E.z-\x3dz*B*E.w;gl_Position\x3dmatchPixelCenter(E,ps.zw);cc\x3dnormalize(u+cc*0.5);gh\x3dw;}]]\x3e\x3c/snippet\x3e\x3c/snippets\x3e'}});
define("dojo/text!./PointExtrudeMaterial.xml dojo/_base/declare esri/core/Accessor ../../webgl-engine-extensions/GLSLShader ../../webgl-engine-extensions/GLSLProgramExt ../../support/fx3dUtils ../Materials".split(" "),function(g,h,n,f,k,p,l){return h([l],{declaredClass:"esri.views.3d.effects.PointExtrude.PointExtrudeMaterial",constructor:function(a){this._gl=a.gl;this._shaderSnippets=a.shaderSnippets;this._program=null;this._pushState=a.pushState;this._restoreState=a.restoreState;this._viewingMode=
a.viewingMode},destroy:function(){this._program&&(this._program.dispose(),delete this._program,this._program=null)},_addDefines:function(a,b){var c="";if(null!=b)if(Array.isArray(b))for(var d=0,m=b.length;d<m;d++){var e=b[d];c+="#define "+e+"\n"}else for(e in b)c+="#define "+e+"\n";return this._shaderSnippets.defines+"\n"+c+a},loadShaders:function(){if(this._shaderSnippets){null!=this._shaderSnippets.pointExtrudeVS&&null!=this._shaderSnippets.pointExtrudeFS||this._shaderSnippets._parse(g);var a=[];
"global"==this._viewingMode?a.push("GLOBAL"):a.push("LOCAL");a=this._addDefines(this._shaderSnippets.pointExtrudeVS,a);a=new f(35633,a,this._gl);var b=new f(35632,this._shaderSnippets.pointExtrudeFS,this._gl);this._program=new k([a,b],this._gl);this._program.init()}return this._initResources()},_initResources:function(){return!0},bind:function(a,b){this._program.use();this._program.uniformMatrix4fv("em",a.proj);this._program.uniform4fv("ps",a.viewport);this._program.uniform3fv("es",a.lightingData.direction);
this._program.uniform4fv("is",a.lightingData.ambient);this._program.uniform4fv("ms",a.lightingData.diffuse);this._program.uniform4fv("ie",a.lightingData.specular);b=this.getOldActiveUnit(b);a.oe.bind(b+1);this._program.uniform1i("oe",b+1);a.mi.bind(b+2);this._program.uniform1i("mi",b+2);this._program.uniform2fv("ee",a.ee);this._program.uniform2f("ls",a.ls,a.oo);this._program.uniform3fv("li",a.li);this._gl.activeTexture(33984+b+3);this._gl.bindTexture(3553,a.ii);this._program.uniform1i("ii",b+3);this._program.uniform1f("se",
a.se);this._program.uniform1f("ss",a.ss);this._program.uniform3fv("il",a.il);this._program.uniform1f("im",a.time);this._program.uniform1i("oi",a.reachedRepeatLimit);this._program.uniform1f("po",a.po);this._program.uniform1f("ml",a.zoom)},bindVec3f:function(a,b,c,d){this._program.uniform3f(a,b,c,d)},bindVec3fv:function(a,b){this._program.uniform3fv(a,b)},bindMat4:function(a,b){this._program.uniformMatrix4fv(a,b)},release:function(a){this._restoreState(a)}})});