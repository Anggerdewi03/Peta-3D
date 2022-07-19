// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"dijit/_WidgetsInTemplateMixin":function(){define(["dojo/_base/array","dojo/aspect","dojo/_base/declare","dojo/_base/lang","dojo/parser"],function(H,C,c,h,l){return c("dijit._WidgetsInTemplateMixin",null,{_earlyTemplatedStartup:!1,contextRequire:null,_beforeFillContent:function(){if(/dojoType|data-dojo-type/i.test(this.domNode.innerHTML)){var b=this.domNode;this.containerNode&&!this.searchContainerNode&&(this.containerNode.stopParser=!0);l.parse(b,{noStart:!this._earlyTemplatedStartup,
template:!0,inherited:{dir:this.dir,lang:this.lang,textDir:this.textDir},propsThis:this,contextRequire:this.contextRequire,scope:"dojo"}).then(h.hitch(this,function(y){this._startupWidgets=y;for(var k=0;k<y.length;k++)this._processTemplateNode(y[k],function(a,e){return a[e]},function(a,e,r){return e in a?a.connect(a,e,r):a.on(e,r,!0)});this.containerNode&&this.containerNode.stopParser&&delete this.containerNode.stopParser}));if(!this._startupWidgets)throw Error(this.declaredClass+": parser returned unfilled promise (probably waiting for module auto-load), unsupported by _WidgetsInTemplateMixin.   Must pre-load all supporting widgets before instantiation.");
}},_processTemplateNode:function(b,y,k){return y(b,"dojoType")||y(b,"data-dojo-type")?!0:this.inherited(arguments)},startup:function(){H.forEach(this._startupWidgets,function(b){b&&!b._started&&b.startup&&b.startup()});this._startupWidgets=null;this.inherited(arguments)}})})},"dojo/parser":function(){define("require ./_base/kernel ./_base/lang ./_base/array ./_base/config ./dom ./_base/window ./_base/url ./aspect ./promise/all ./date/stamp ./Deferred ./has ./query ./on ./ready".split(" "),function(H,
C,c,h,l,b,y,k,a,e,r,F,K,P,d,m){function E(f){return eval("("+f+")")}function S(f){var g=f._nameCaseMap,t=f.prototype;if(!g||g._extendCnt<T){g=f._nameCaseMap={};for(var v in t)"_"!==v.charAt(0)&&(g[v.toLowerCase()]=v);g._extendCnt=T}return g}function Q(f,g){g||(g=H);var t=g._dojoParserCtorMap||(g._dojoParserCtorMap={}),v=f.join();if(!t[v]){for(var u=[],n=0,A=f.length;n<A;n++){var G=f[n];u[u.length]=t[G]=t[G]||c.getObject(G)||~G.indexOf("/")&&g(G)}f=u.shift();t[v]=u.length?f.createSubclass?f.createSubclass(u):
f.extend.apply(f,u):f}return t[v]}new Date("X");var T=0;a.after(c,"extend",function(){T++},!0);K={_clearCache:function(){T++;_ctorMap={}},_functionFromScript:function(f,g){var t="",v="",u=f.getAttribute(g+"args")||f.getAttribute("args");g=f.getAttribute("with");u=(u||"").split(/\s*,\s*/);g&&g.length&&h.forEach(g.split(/\s*,\s*/),function(n){t+="with("+n+"){";v+="}"});return new Function(u,t+f.innerHTML+v)},instantiate:function(f,g,t){g=g||{};t=t||{};var v=(t.scope||C._scopeName)+"Type",u="data-"+
(t.scope||C._scopeName)+"-",n=u+"type",A=u+"mixins",G=[];h.forEach(f,function(D){var I=v in g?g[v]:D.getAttribute(n)||D.getAttribute(v);if(I){var w=D.getAttribute(A);I=w?[I].concat(w.split(/\s*,\s*/)):[I];G.push({node:D,types:I})}});return this._instantiate(G,g,t)},_instantiate:function(f,g,t,v){function u(n){g._started||t.noStart||h.forEach(n,function(A){"function"!==typeof A.startup||A._started||A.startup()});return n}f=h.map(f,function(n){var A=n.ctor||Q(n.types,t.contextRequire);if(!A)throw Error("Unable to resolve constructor for: '"+
n.types.join()+"'");return this.construct(A,n.node,g,t,n.scripts,n.inherited)},this);return v?e(f).then(u):u(f)},construct:function(f,g,t,v,u,n){function A(R){L&&c.setObject(L,R);for(q=0;q<B.length;q++)a[B[q].advice||"after"](R,B[q].method,c.hitch(R,B[q].func),!0);for(q=0;q<N.length;q++)N[q].call(R);for(q=0;q<O.length;q++)R.watch(O[q].prop,O[q].func);for(q=0;q<U.length;q++)d(R,U[q].event,U[q].func);return R}var G=f&&f.prototype;v=v||{};var D={};v.defaults&&c.mixin(D,v.defaults);n&&c.mixin(D,n);var I=
g.attributes;var w=v.scope||C._scopeName;n="data-"+w+"-";var p={};"dojo"!==w&&(p[n+"props"]="data-dojo-props",p[n+"type"]="data-dojo-type",p[n+"mixins"]="data-dojo-mixins",p[w+"type"]="dojotype",p[n+"id"]="data-dojo-id");var q=0,x;w=[];for(var L,M;x=I[q++];){var J=x.name,z=J.toLowerCase();x=x.value;switch(p[z]||z){case "data-dojo-type":case "dojotype":case "data-dojo-mixins":break;case "data-dojo-props":M=x;break;case "data-dojo-id":case "jsid":L=x;break;case "data-dojo-attach-point":case "dojoattachpoint":D.dojoAttachPoint=
x;break;case "data-dojo-attach-event":case "dojoattachevent":D.dojoAttachEvent=x;break;case "class":D["class"]=g.className;break;case "style":D.style=g.style&&g.style.cssText;break;default:if(J in G||(J=S(f)[z]||J),J in G)switch(typeof G[J]){case "string":D[J]=x;break;case "number":D[J]=x.length?Number(x):NaN;break;case "boolean":D[J]="false"!=x.toLowerCase();break;case "function":""===x||-1!=x.search(/[^\w\.]+/i)?D[J]=new Function(x):D[J]=c.getObject(x,!1)||new Function(x);w.push(J);break;default:z=
G[J],D[J]=z&&"length"in z?x?x.split(/\s*,\s*/):[]:z instanceof Date?""==x?new Date(""):"now"==x?new Date:r.fromISOString(x):z instanceof k?C.baseUrl+x:E(x)}else D[J]=x}}for(I=0;I<w.length;I++)p=w[I].toLowerCase(),g.removeAttribute(p),g[p]=null;if(M)try{M=E.call(v.propsThis,"{"+M+"}"),c.mixin(D,M)}catch(R){throw Error(R.toString()+" in data-dojo-props\x3d'"+M+"'");}c.mixin(D,t);u||(u=f&&(f._noScript||G._noScript)?[]:P("\x3e script[type^\x3d'dojo/']",g));var B=[],N=[],O=[],U=[];if(u)for(q=0;q<u.length;q++)p=
u[q],g.removeChild(p),t=p.getAttribute(n+"event")||p.getAttribute("event"),v=p.getAttribute(n+"prop"),M=p.getAttribute(n+"method"),w=p.getAttribute(n+"advice"),I=p.getAttribute("type"),p=this._functionFromScript(p,n),t?"dojo/connect"==I?B.push({method:t,func:p}):"dojo/on"==I?U.push({event:t,func:p}):D[t]=p:"dojo/aspect"==I?B.push({method:M,advice:w,func:p}):"dojo/watch"==I?O.push({prop:v,func:p}):N.push(p);f=(u=f.markupFactory||G.markupFactory)?u(D,g,f):new f(D,g);return f.then?f.then(A):A(f)},scan:function(f,
g){function t(z){if(!z.inherited){z.inherited={};var B=z.node,N=t(z.parent);B={dir:B.getAttribute("dir")||N.dir,lang:B.getAttribute("lang")||N.lang,textDir:B.getAttribute(I)||N.textDir};for(var O in B)B[O]&&(z.inherited[O]=B[O])}return z.inherited}var v=[],u=[],n={},A=(g.scope||C._scopeName)+"Type",G="data-"+(g.scope||C._scopeName)+"-",D=G+"type",I=G+"textdir";G+="mixins";var w=f.firstChild,p=g.inherited;if(!p){p=function O(B,N){return B.getAttribute&&B.getAttribute(N)||B.parentNode&&O(B.parentNode,
N)};p={dir:p(f,"dir"),lang:p(f,"lang"),textDir:p(f,I)};for(var q in p)p[q]||delete p[q]}q={inherited:p};for(var x,L;;)if(w)if(1!=w.nodeType)w=w.nextSibling;else if(x&&"script"==w.nodeName.toLowerCase())(p=w.getAttribute("type"))&&/^dojo\/\w/i.test(p)&&x.push(w),w=w.nextSibling;else if(L)w=w.nextSibling;else if(p=w.getAttribute(D)||w.getAttribute(A),f=w.firstChild,p||f&&(3!=f.nodeType||f.nextSibling)){L=null;if(p){var M=w.getAttribute(G);x=M?[p].concat(M.split(/\s*,\s*/)):[p];try{L=Q(x,g.contextRequire)}catch(z){}L||
h.forEach(x,function(z){~z.indexOf("/")&&!n[z]&&(n[z]=!0,u[u.length]=z)});M=L&&!L.prototype._noScript?[]:null;q={types:x,ctor:L,parent:q,node:w,scripts:M};q.inherited=t(q);v.push(q)}else q={node:w,scripts:x,parent:q};x=M;L=w.stopParser||L&&L.prototype.stopParser&&!g.template;w=f}else w=w.nextSibling;else{if(!q||!q.node)break;w=q.node.nextSibling;L=!1;q=q.parent;x=q.scripts}var J=new F;u.length?(g.contextRequire||H)(u,function(){J.resolve(h.filter(v,function(z){if(!z.ctor)try{z.ctor=Q(z.types,g.contextRequire)}catch(O){}for(var B=
z.parent;B&&!B.types;)B=B.parent;var N=z.ctor&&z.ctor.prototype;z.instantiateChildren=!(N&&N.stopParser&&!g.template);z.instantiate=!B||B.instantiate&&B.instantiateChildren;return z.instantiate}))}):J.resolve(v);return J.promise},_require:function(f,g){f=E("{"+f.innerHTML+"}");var t=[],v=[],u=new F;g=g&&g.contextRequire||H;for(var n in f)t.push(n),v.push(f[n]);g(v,function(){for(var A=0;A<t.length;A++)c.setObject(t[A],arguments[A]);u.resolve(arguments)});return u.promise},_scanAmd:function(f,g){var t=
new F,v=t.promise;t.resolve(!0);var u=this;P("script[type\x3d'dojo/require']",f).forEach(function(n){v=v.then(function(){return u._require(n,g)});n.parentNode.removeChild(n)});return v},parse:function(f,g){!f||"string"==typeof f||"nodeType"in f||(g=f,f=g.rootNode);var t=f?b.byId(f):y.body();g=g||{};var v=g.template?{template:!0}:{},u=[],n=this;f=this._scanAmd(t,g).then(function(){return n.scan(t,g)}).then(function(A){return n._instantiate(A,v,g,!0)}).then(function(A){return u=u.concat(A)}).otherwise(function(A){console.error("dojo/parser::parse() error",
A);throw A;});c.mixin(u,f);return u}};C.parser=K;l.parseOnLoad&&m(100,K,"parse");return K})},"dojo/_base/url":function(){define(["./kernel"],function(H){var C=/^(([^:/?#]+):)?(\/\/([^/?#]*))?([^?#]*)(\?([^#]*))?(#(.*))?$/,c=/^((([^\[:]+):)?([^@]+)@)?(\[([^\]]+)\]|([^\[:]*))(:([0-9]+))?$/,h=function(){for(var l=arguments,b=[l[0]],y=1;y<l.length;y++)if(l[y]){var k=new h(l[y]+"");b=new h(b[0]+"");if(""==k.path&&!k.scheme&&!k.authority&&!k.query)null!=k.fragment&&(b.fragment=k.fragment),k=b;else if(!k.scheme&&
(k.scheme=b.scheme,!k.authority&&(k.authority=b.authority,"/"!=k.path.charAt(0)))){b=(b.path.substring(0,b.path.lastIndexOf("/")+1)+k.path).split("/");for(var a=0;a<b.length;a++)"."==b[a]?a==b.length-1?b[a]="":(b.splice(a,1),a--):0<a&&(1!=a||""!=b[0])&&".."==b[a]&&".."!=b[a-1]&&(a==b.length-1?(b.splice(a,1),b[a-1]=""):(b.splice(a-1,2),a-=2));k.path=b.join("/")}b=[];k.scheme&&b.push(k.scheme,":");k.authority&&b.push("//",k.authority);b.push(k.path);k.query&&b.push("?",k.query);k.fragment&&b.push("#",
k.fragment)}this.uri=b.join("");l=this.uri.match(C);this.scheme=l[2]||(l[1]?"":null);this.authority=l[4]||(l[3]?"":null);this.path=l[5];this.query=l[7]||(l[6]?"":null);this.fragment=l[9]||(l[8]?"":null);null!=this.authority&&(l=this.authority.match(c),this.user=l[3]||null,this.password=l[4]||null,this.host=l[6]||l[7],this.port=l[9]||null)};h.prototype.toString=function(){return this.uri};return H._Url=h})},"dojo/date/stamp":function(){define(["../_base/lang","../_base/array"],function(H,C){var c=
{};H.setObject("dojo.date.stamp",c);c.fromISOString=function(h,l){c._isoRegExp||(c._isoRegExp=/^(?:(\d{4})(?:-(\d{2})(?:-(\d{2}))?)?)?(?:T(\d{2}):(\d{2})(?::(\d{2})(.\d+)?)?((?:[+-](\d{2}):(\d{2}))|Z)?)?$/);var b=c._isoRegExp.exec(h);h=null;if(b){b.shift();b[1]&&b[1]--;b[6]&&(b[6]*=1E3);l&&(l=new Date(l),C.forEach(C.map("FullYear Month Date Hours Minutes Seconds Milliseconds".split(" "),function(a){return l["get"+a]()}),function(a,e){b[e]=b[e]||a}));h=new Date(b[0]||1970,b[1]||0,b[2]||1,b[3]||0,b[4]||
0,b[5]||0,b[6]||0);100>b[0]&&h.setFullYear(b[0]||1970);var y=0,k=b[7]&&b[7].charAt(0);"Z"!=k&&(y=60*(b[8]||0)+(Number(b[9])||0),"-"!=k&&(y*=-1));k&&(y-=h.getTimezoneOffset());y&&h.setTime(h.getTime()+6E4*y)}return h};c.toISOString=function(h,l){var b=function(e){return 10>e?"0"+e:e};l=l||{};var y=[],k=l.zulu?"getUTC":"get",a="";"time"!=l.selector&&(a=h[k+"FullYear"](),a=["0000".substr((a+"").length)+a,b(h[k+"Month"]()+1),b(h[k+"Date"]())].join("-"));y.push(a);"date"!=l.selector&&(a=[b(h[k+"Hours"]()),
b(h[k+"Minutes"]()),b(h[k+"Seconds"]())].join(":"),k=h[k+"Milliseconds"](),l.milliseconds&&(a+="."+(100>k?"0":"")+b(k)),l.zulu?a+="Z":"time"!=l.selector&&(h=h.getTimezoneOffset(),l=Math.abs(h),a+=(0<h?"-":"+")+b(Math.floor(l/60))+":"+b(l%60)),y.push(a));return y.join("T")};return c})},"jimu/dijit/CheckBox":function(){define("dojo/_base/declare dijit/_WidgetBase dojo/_base/lang dojo/_base/html dojo/dom-class dojo/on dojo/Evented dojo/keys ../utils".split(" "),function(H,C,c,h,l,b,y,k,a){return H([C,
y],{baseClass:"jimu-checkbox",declaredClass:"jimu.dijit.CheckBox",checked:!1,status:!0,label:"",postCreate:function(){this.checkNode=h.create("div",{"class":"checkbox jimu-float-leading"},this.domNode);this.labelNode=h.create("div",{"class":"label jimu-float-leading",innerHTML:a.sanitizeHTML(this.label)||""},this.domNode);this.checked&&h.addClass(this.checkNode,"checked");this.status||h.addClass(this.domNode,"jimu-state-disabled");this.own(b(this.checkNode,"click",c.hitch(this,function(){this.status&&
(this.checked?this.uncheck():this.check())})));this.own(b(this.labelNode,"click",c.hitch(this,function(){this.checked&&this.status?this.uncheck():this.status&&this.check()})));this._udpateLabelClass();this._initSection508()},setLabel:function(e){this.label=e||"";this.labelNode.innerHTML=a.sanitizeHTML(this.label);this._udpateLabelClass()},getLabel:function(){return this.label||""},_udpateLabelClass:function(){this.labelNode&&(this.labelNode.innerHTML?h.removeClass(this.labelNode,"not-visible"):h.addClass(this.labelNode,
"not-visible"))},_initSection508:function(){"undefined"!==typeof this.tabindex&&(h.setAttr(this.checkNode,"tabindex",this.tabindex),this.own(b(this.checkNode,"focus",c.hitch(this,function(){h.addClass(this.checkNode,"dijitCheckBoxFocused")}))),this.own(b(this.checkNode,"blur",c.hitch(this,function(){h.removeClass(this.checkNode,"dijitCheckBoxFocused")}))),this.own(b(this.checkNode,"keypress",c.hitch(this,function(e){e=e.charCode||e.keyCode;h.hasClass(this.checkNode,"dijitCheckBoxFocused")&&k.SPACE===
e&&this.status&&(this.checked?this.uncheck():this.check())}))))},setValue:function(e){this.status&&(!0===e?this.check():this.uncheck())},getValue:function(){return this.checked},setStatus:function(e){e=!!e;var r=this.status!==e;(this.status=e)?l.remove(this.domNode,"jimu-state-disabled"):l.add(this.domNode,"jimu-state-disabled");r&&this.emit("status-change",e)},getStatus:function(){return this.status},check:function(){this.status&&(this.checked=!0,h.addClass(this.checkNode,"checked"),this.onStateChange())},
uncheck:function(e){if(this.status&&(this.checked=!1,h.removeClass(this.checkNode,"checked"),!e))this.onStateChange()},onStateChange:function(){if(this.onChange&&c.isFunction(this.onChange))this.onChange(this.checked);this.emit("change",this.checked)},focus:function(){this.checkNode&&this.checkNode.focus&&this.checkNode.focus()}})})},"jimu/dijit/EditorXssFilter":function(){define("dojo/_base/declare dojo/_base/array dijit/_WidgetBase dojo/_base/lang dojo/Evented libs/arcgis-html-sanitizer/arcgis-html-sanitizer".split(" "),
function(H,C,c,h,l,b){var y=null,k=H([c,l],{baseClass:"jimu-editor-xss-filter",declaredClass:"jimu.dijit.EditorXssFilter",sanitizer:null,xss:null,whiteList:{},graphicsWhiteList:{},postCreate:function(){this.whiteList=this._getWhiteList();this.sanitizer=new b({whiteList:this.whiteList,safeAttrValue:h.hitch(this,function(a,e,r,F){return"style"===e?this.xss.friendlyAttrValue(r).replace(/"/g,"'"):"img"===a&&"src"===e?this.xss.escapeAttrValue(r):this.xss.safeAttrValue(a,e,r,F)}),onTag:h.hitch(this,function(a,
e,r){if(r.isWhite&&this._isInWhiteList(a,this.graphicsWhiteList))return e}),onIgnoreTagAttr:h.hitch(this,function(a,e,r,F){if("data-"===e.substr(0,5))return e+'\x3d"'+this.xss.escapeAttrValue(r)+'"'}),onIgnoreTag:h.hitch(this,function(a,e,r){if("o:"===a.substr(0,2)||"!--[if"===a||"!--[endif]--"===a)return e})},!0);this.xss=this.sanitizer.xss},sanitize:function(a){return this.sanitizer.sanitize(a)},_getWhiteList:function(){var a="title height width class style font-family id align text-align".split(" "),
e={div:a,h1:a,h2:a,h3:a,h4:a,h5:a,h6:a,span:a,p:a,s:a,strong:a,em:a,u:a,ol:a,ul:a,li:a,a:["href","target"].concat(a),img:["src","alt","border"].concat(a),blockquote:a,font:["face","size","color"].concat(a),pre:a,code:a,b:a,i:a,wbr:a,video:"autoplay controls loop muted poster preload".split(" ").concat(a),audio:["autoplay","controls","loop","muted","preload"].concat(a),source:["media","src","type"].concat(a),table:["cellpadding","cellspacing","border"].concat(a),tbody:[].concat(a),tr:["valign"].concat(a),
td:["valign","colspan","rowspan","nowrap"].concat(a),th:["valign","colspan","rowspan","nowrap"].concat(a),hr:a,html:a,title:a,link:["rel","href"],style:["type"].concat(a),body:a};this.graphicsWhiteList={animate:[],animateMotion:[],animateTransform:[],circle:[],clipPath:[],"color-profile":[],defs:[],desc:[],discard:[],ellipse:[],feBlend:[],feColorMatrix:[],feComponentTransfer:[],feComposite:[],feConvolveMatrix:[],feDiffuseLighting:[],feDisplacementMap:[],feDistantLight:[],feDropShadow:[],feFlood:[],
feFuncA:[],feFuncB:[],feFuncG:[],feFuncR:[],feGaussianBlur:[],feImage:[],feMerge:[],feMergeNode:[],feMorphology:[],feOffset:[],fePointLight:[],feSpecularLighting:[],feSpotLight:[],feTile:[],feTurbulence:[],filter:[],foreignObject:[],g:[],hatch:[],hatchpath:[],line:[],linearGradient:[],marker:[],mask:[],mesh:[],meshgradient:[],meshpatch:[],meshrow:[],metadata:[],mpath:[],path:[],pattern:[],polygon:[],polyline:[],radialGradient:[],rect:[],set:[],solidcolor:[],stop:[],svg:[],switch:[],symbol:[],text:[],
textPath:[],title:[],tspan:[],use:[],view:[],object:[],canvas:a};return this._extendObjectOfArrays([e,{a:["target","href","title"],abbr:["title"],address:[],area:["shape","coords","href","alt"],article:[],aside:[],audio:["autoplay","controls","loop","preload","src"],b:[],bdi:["dir"],bdo:["dir"],big:[],blockquote:["cite"],br:[],caption:[],center:[],cite:[],code:[],col:["align","valign","span","width"],colgroup:["align","valign","span","width"],dd:[],del:["datetime"],details:["open"],div:[],dl:[],dt:[],
em:[],font:["color","size","face"],footer:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],header:[],hr:[],i:[],img:["src","alt","title","width","height"],ins:["datetime"],li:[],mark:[],nav:[],ol:[],p:[],pre:[],s:[],section:[],small:[],span:[],sub:[],summary:[],sup:[],strong:[],table:["width","border","align","valign"],tbody:["align","valign"],td:["width","rowspan","colspan","align","valign"],tfoot:["align","valign"],th:["width","rowspan","colspan","align","valign"],thead:["align","valign"],tr:["rowspan","align",
"valign"],tt:[],u:[],ul:[],video:"autoplay controls loop preload src height width".split(" ")},this.graphicsWhiteList])},_extendObjectOfArrays:function(a){var e={};C.forEach(a,function(r){var F=Object.keys(r);C.forEach(F,function(K){Array.isArray(r[K])&&Array.isArray(e[K])?e[K]=e[K].concat(r[K]):e[K]=r[K]},this)},this);return e},_isInWhiteList:function(a,e){e=Object.keys(e);var r=!1;C.forEach(e,function(F){a===F&&(r=!0)},this);return r}});k.getInstance=function(){null===y&&(y=new k);return y};return k})},
"jimu/dijit/EditorPreviewLinkMessager":function(){define("dojo/_base/declare dijit/_WidgetBase dojo/on dojo/_base/lang dojo/_base/html dojo/query dojo/Evented dijit/Tooltip".split(" "),function(H,C,c,h,l,b,y,k){var a=null,e=H([C,y],{baseClass:"jimu-editor-preview-link-messager",declaredClass:"jimu.dijit.EditorPreviewLinkMessager",time:3E3,postMixInProperties:function(){this.nls=window.jimuNls.richTextEditor;this.tooltipPrefix=this.nls.previewLinkToolTipsPrefix;this.tooltipSuffix=this.nls.previewLinkToolTipsSuffix},
isInBuilder:function(){return window&&window.parent&&window.parent.isBuilder},isHasContent:function(r,F){return r&&!F},filter:function(r){if(r.nodeType&&1===r.nodeType){r=b("a",r);for(var F=0,K=r.length;F<K;F++){var P=r[F];"_self"===l.attr(P,"target")&&(l.removeAttr(P,"target"),l.attr(P,"href"),l.attr(P,"onclick",h.hitch(this,function(d){this._interceptLink(d);return!1})))}}},_interceptLink:function(r,F){r&&r.preventDefault();F=r.target.href;k.show(this.tooltipPrefix+F+"\x3cbr/\x3e"+this.tooltipSuffix,
r.target);setTimeout(h.hitch(this,function(){k.hide(r.target)}),this.time);return!1}});e.getInstance=function(){null===a&&(a=new e);return a};return e})},"widgets/Splash/_build-generate_module":function(){define(["dojo/text!./Widget.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/Splash/Widget.html":'\x3cdiv class\x3d"jimu-widget-splash-desktop"\x3e\r\n  \x3cdiv class\x3d"overlay" data-dojo-attach-point\x3d"overlayNode"\x3e\x3c/div\x3e\r\n  \x3cdiv class\x3d"envelope buried" data-dojo-attach-point\x3d"envelopeNode"\x3e\r\n    \x3cdiv class\x3d"splash-container splash-bg" data-dojo-attach-point\x3d"splashContainerBackground"\x3e\x3c/div\x3e\r\n    \x3cdiv class\x3d"splash-container" data-dojo-attach-point\x3d"splashContainerNode"\x3e\r\n      \x3cdiv class\x3d"custom-content" data-dojo-attach-point\x3d"customContentNode" style\x3d"font-family: \'Verdana\',\'Avenir Light\'"\x3e\x3c/div\x3e\r\n      \x3cdiv class\x3d"footer" data-dojo-attach-point\x3d"footerNode"\x3e\r\n        \x3cdiv class\x3d"confirmcheck-container" data-dojo-attach-point\x3d"confirmCheckContainer"\x3e\r\n          \x3cdiv data-dojo-attach-point\x3d"confirmCheck"\x3e\x3c/div\x3e\r\n        \x3c/div\x3e\r\n        \x3cbutton class\x3d"jimu-btn jimu-float-trailing" data-dojo-attach-point\x3d"okNode" data-dojo-attach-event\x3d"onclick:onOkClick" tabindex\x3d"0"\x3e\x3c/button\x3e\r\n      \x3c/div\x3e\r\n    \x3c/div\x3e\r\n  \x3c/div\x3e\r\n\x3c/div\x3e',
"url:widgets/Splash/css/style.css":".jimu-widget-splash{position: absolute !important; top: 0 !important; bottom: 0 !important; left: 0 !important; right: 0 !important; margin: auto !important; z-index: 110;}.jimu-widget-splash .buried{visibility: hidden;}.jimu-widget-splash .overlay{top: 0; left: 0; width: 100%; height: 100%; position: absolute; background-color:rgba(0,0,0,0.5);}.jimu-widget-splash-desktop .splash-container .jimu-checkbox,.jimu-widget-splash-mobile .splash-container .jimu-checkbox{font-size: 14px; color: #fff; overflow: auto; max-height: 50px; min-height: 25px; margin-top: 20px; margin-bottom: 10px; display: block;}.jimu-widget-splash-desktop .splash-container .jimu-checkbox .label,.jimu-widget-splash-mobile .splash-container .jimu-checkbox .label{white-space: normal; text-indent: 5px; margin-left: 5px; color: #fff; float: none !important; display: inline; vertical-align: middle;}.jimu-rtl .jimu-widget-splash-desktop .splash-container .jimu-checkbox .label,.jimu-rtl .jimu-widget-splash-mobile .splash-container .jimu-checkbox .label{margin-left: auto; margin-right: 5px;}.jimu-widget-splash-desktop .envelope{}.jimu-widget-splash-desktop .envelope,.jimu-widget-splash-mobile .envelope{position: absolute; top: 0; bottom: 0; left: 0; right: 0; margin: auto; -moz-user-select: none; -webkit-user-select: none; -ms-user-select: none;}.jimu-widget-splash-desktop .splash-container .jimu-btn,.jimu-widget-splash-mobile .splash-container .jimu-btn{height: 33px; padding: 0; width: 60px; line-height: 33px;}.jimu-rtl .jimu-widget-splash-desktop .splash-container .jimu-btn,.jimu-rtl .jimu-widget-splash-mobile .splash-container .jimu-btn{left: 0; right: auto;}.jimu-widget-splash-desktop .splash-container .enable-btn,.jimu-widget-splash-mobile .splash-container .enable-btn{background-color: #518dca;}.jimu-widget-splash-desktop .splash-container .disable-btn,.jimu-widget-splash-mobile .splash-container .disable-btn{background-color: #a0acbf !important; color: rgb(255, 255, 255) !important;}.jimu-widget-splash-desktop .splash-container .jimu-checkbox .checkbox,.jimu-widget-splash-mobile .splash-container .jimu-checkbox .checkbox{background-color: #fff;}.jimu-widget-splash-desktop .envelope{border: 1px solid rgba(255,255,255,0.3);}.jimu-widget-splash-desktop .splash-container,.jimu-widget-splash-desktop .splash-bg{position: absolute; display: inline-block; margin: auto; top: 0; left: 0; bottom: 0; right: 0; overflow:auto;}.jimu-widget-splash-desktop .splash-container{z-index: 1; overflow: hidden;}.jimu-widget-splash .norepeat{background: no-repeat;}.jimu-widget-splash .fill {background-size: cover !important;}.jimu-widget-splash .fit {background-size: contain !important;}.jimu-widget-splash .stretch {background-size: 100% 100% !important;}.jimu-widget-splash .center {background-size: initial !important;}.jimu-widget-splash .tile {background-size: initial !important;}.jimu-widget-splash-desktop .splash-bg{z-index: 0;}.jimu-widget-splash-desktop .custom-content{margin: 20px; color: #fff; overflow-x: hidden; overflow-y: auto;}.jimu-widget-splash-desktop .splash-container .footer{position: absolute; bottom: 10px; width: 100%;}.jimu-widget-splash .footer .confirmcheck-container{margin: 0 20px;}.jimu-widget-splash .footer .confirmcheck-container .jimu-checkbox .checkbox{margin: 2px;}.jimu-widget-splash .footer .confirmcheck-container .jimu-checkbox .dijitCheckBoxFocused{box-shadow: 0 0 0px 2px rgba(136, 176, 245, 1);}.jimu-widget-splash .footer .jimu-btn {margin: 0 20px 2px 20px;}.jimu-widget-splash .footer .jimu-btn:focus {box-shadow: 0 0 0px 2px rgba(136, 176, 245, 1);}",
"*now":function(H){H(['dojo/i18n!*preload*widgets/Splash/nls/Widget*["ar","bg","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])}}});
define("dojo/_base/declare dojo/_base/lang dojo/_base/html dojo/on dojo/query dojo/cookie dijit/_WidgetsInTemplateMixin jimu/BaseWidget jimu/dijit/CheckBox jimu/utils jimu/dijit/LoadingShelter dojo/Deferred jimu/dijit/EditorXssFilter jimu/dijit/EditorPreviewLinkMessager".split(" "),function(H,C,c,h,l,b,y,k,a,e,r,F,K,P){return H([k,y],{baseClass:"jimu-widget-splash",_hasContent:null,_requireConfirm:null,_isClosed:!1,postCreate:function(){this.inherited(arguments);this.shelter=new r({hidden:!0});this.shelter.placeAt(this.domNode);
this.shelter.startup();this.config.splash.splashContent=K.getInstance().sanitize(this.config.splash.splashContent);this._hasContent=this.config.splash&&this.config.splash.splashContent;this._requireConfirm=this.config.splash&&this.config.splash.requireConfirm;this._showOption=this.config.splash&&this.config.splash.showOption;this._confirmEverytime=this.config.splash&&this.config.splash.confirmEverytime;this._hasContent&&(this.customContentNode.innerHTML=this.config.splash.splashContent);if(this._requireConfirm||
this._showOption){var d="";this._requireConfirm?(d=this.config.splash.confirm.text,c.addClass(this.okNode,"disable-btn")):(d=this.nls.notShowAgain,c.addClass(this.okNode,"enable-btn"));this.confirmCheck=new a({label:e.stripHTML(d),checked:!1,tabindex:0},this.confirmCheck);this.own(h(this.confirmCheck,"change",C.hitch(this,this.onCheckBoxClick)));c.setAttr(this.confirmCheck.domNode,"title",e.stripHTML(d));this.confirmCheck.startup()}else c.setStyle(this.confirmCheck,"display","none"),c.addClass(this.okNode,
"enable-btn")},onOpen:function(){if(!e.isInConfigOrPreviewWindow()){var d=this._getCookieKey();d=b(d);e.isDefined(d)&&"false"===d.toString()&&this.close()}this._requireConfirm||this._showOption?this.confirmCheck.focus():this.okNode.focus()},startup:function(){this.inherited(arguments);this.shelter.show();this._normalizeDomNodePosition();this._setConfig();e.setWABLogoDefaultAlt(this.customContentNode)},_setConfig:function(){this._setWidthForOldVersion().then(C.hitch(this,function(){this._setSizeFromConfig();
var d=this.config.splash.button;"undefined"!==typeof d&&("undefined"!==typeof d.color&&(c.setStyle(this.okNode,"backgroundColor",d.color),c.setStyle(this.okNode,"color",e.invertColor(d.color))),"undefined"!==typeof d.transparency&&c.setStyle(this.okNode,"opacity",1-d.transparency));this.okNode.innerHTML=this.config.splash.button.text||this.nls.ok;c.attr(this.okNode,"title",this.config.splash.button.text||this.nls.ok);var m=this.config.splash.background;if("undefined"!==typeof m)if("image"===m.mode&&
"undefined"!==typeof m.image){var E=d="";d="url("+e.processUrlInWidgetConfig(m.image,this.folderUrl)+") center center ";E="no-repeat";m=m.type;"undefined"!==typeof m&&(c.addClass(this.splashContainerNode,m),"tile"===m&&(E="repeat"));c.setStyle(this.splashContainerNode,"background",d+E)}else"color"===m.mode&&"undefined"!==typeof m.color&&("undefined"!==typeof m.color&&c.setStyle(this.splashContainerBackground,"backgroundColor",m.color),"undefined"!==typeof m.transparency&&c.setStyle(this.splashContainerBackground,
"opacity",1-m.transparency));d=this.config.splash.confirm;"undefined"!==typeof d&&this.domNode&&(E=l(".label",this.domNode)[0],"undefined"!==typeof d.color&&E&&c.setStyle(E,"color",d.color),"undefined"!==typeof d.transparency&&E&&c.setStyle(E,"opacity",1-d.transparency));this.contentVertical="undefined"!==typeof this.config.splash.contentVertical?this.config.splash.contentVertical:"top";e.isInConfigOrPreviewWindow()||(d=this._getCookieKey(),d=b(d),e.isDefined(d)&&"false"===d.toString()&&this.close());
this.resize();this.own(h(window,"resize",C.hitch(this,function(){this.resize()})));this._resizeContentImg();c.removeClass(this.envelopeNode,"buried");d=P.getInstance();try{var S=d.isInBuilder()}catch(Q){S=!1}S&&d.isHasContent(this._hasContent,this._isClosed)&&d.filter(this.customContentNode);this.shelter.hide()}))},_normalizeDomNodePosition:function(){c.setStyle(this.domNode,"top",0);c.setStyle(this.domNode,"left",0);c.setStyle(this.domNode,"right",0);c.setStyle(this.domNode,"bottom",0)},setPosition:function(d){this.position=
d;c.place(this.domNode,window.jimuConfig.layoutId);this._normalizeDomNodePosition();this.started&&this.resize()},resize:function(){this._changeStatus()},_resizeContentImg:function(){if(this._hasContent&&!this._isClosed){var d=c.getContentBox(this.envelopeNode);c.empty(this.customContentNode);var m=c.toDom(this.config.splash.splashContent);c.place(m,this.customContentNode);if(this.customContentNode.nodeType&&1===this.customContentNode.nodeType&&(m=l("img",this.customContentNode))&&m.length)for(var E=
0,S=m.length;E<S;E++){var Q=m[E];c.setStyle(Q,"maxWidth",d.w-40-20+"px");c.setStyle(Q,"maxHeight",d.h-40+"px")}}},_changeStatus:function(){window.appInfo.isRunInMobile?(c.setStyle(this.envelopeNode,"height","100%"),c.setStyle(this.envelopeNode,"width","100%")):this._setSizeFromConfig();this._resizeCustomContent();this._resizeContentImg()},_getNodeStylePx:function(d,m){return d&&m?parseInt(c.getStyle(d,m),10):0},_resizeCustomContent:function(){var d=c.getContentBox(this.splashContainerNode),m=this.customContentNode.scrollHeight,
E=c.getMarginBox(this.footerNode),S=this._getNodeStylePx(this.customContentNode,"margin-bottom"),Q=this._getNodeStylePx(this.footerNode,"bottom");d=d.h-(E.h+Q);!0===m>=d||window.appInfo.isRunInMobile?c.setStyle(this.customContentNode,"height",d-S+"px"):(c.setStyle(this.customContentNode,"height","auto"),this._moveContentToMiddle({contentSpace:d,customContentScrollheight:m}))},_moveContentToMiddle:function(d){var m=(d.contentSpace-10)/2;"middle"===this.contentVertical&&(d=d.customContentScrollheight/
2-m,0>d?c.setStyle(this.customContentNode,"marginTop",Math.abs(d)+10+"px"):c.setStyle(this.customContentNode,"marginTop","10px"))},onCheckBoxClick:function(){this._requireConfirm&&(this.confirmCheck.getValue()?(c.addClass(this.okNode,"enable-btn"),c.removeClass(this.okNode,"disable-btn")):(c.addClass(this.okNode,"disable-btn"),c.removeClass(this.okNode,"enable-btn")))},_getCookieKey:function(){return"isfirst_"+encodeURIComponent(e.getAppIdFromUrl())},onOkClick:function(){var d=this._getCookieKey();
this._requireConfirm?this.confirmCheck.getValue()&&(e.isInConfigOrPreviewWindow()||this._confirmEverytime?b(d,null,{expires:-1}):b(d,!1,{expires:1E3,path:"/"}),this.close()):(this._showOption?!e.isInConfigOrPreviewWindow()&&this.confirmCheck.getValue()&&b(d,!1,{expires:1E3,path:"/"}):b(d,null,{expires:-1}),this.close())},close:function(){this._isClosed=!0;this.widgetManager.closeWidget(this)},_setSizeFromConfig:function(){var d=this.config.splash.size;if("undefined"!==typeof d&&"object"===typeof d){var m=
d.percent,E=d.wh;"percent"===d.mode&&"undefined"!==typeof m?(c.setStyle(this.envelopeNode,"width",m),c.setStyle(this.envelopeNode,"height",m)):"wh"===d.mode&&"undefined"!==typeof E&&(this._setWidthInCurrentScreen(E),this._setHeightInCurrentScreen(E))}},_setWidthInCurrentScreen:function(d){var m=window.innerWidth;!window.appInfo.isRunInMobile&&d.w<=m?c.setStyle(this.envelopeNode,"width",d.w+"px"):c.setStyle(this.envelopeNode,"width","100%")},_setHeightInCurrentScreen:function(d){var m=window.innerHeight;
!window.appInfo.isRunInMobile&&d.h<=m?c.setStyle(this.envelopeNode,"height",d.h+"px"):c.setStyle(this.envelopeNode,"height","100%")},_setWidthForOldVersion:function(){var d=new F,m=this.config.splash.size;if(!0===("wh"===m.mode&&"undefined"!==typeof m.wh&&null===m.wh.h))return e.getEditorContentHeight(this.config.splash.splashContent,this.domNode,{contentWidth:560,contentMarginTop:20,footerHeight:98}).then(C.hitch(this,function(E){return m.wh.h=E}));d.resolve();return d}})});