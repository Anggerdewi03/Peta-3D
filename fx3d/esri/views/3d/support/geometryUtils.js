//>>built
define("esri/core/libs/gl-matrix-2/vec3f64 esri/core/libs/gl-matrix-2/mat4f64 esri/core/libs/gl-matrix-2/vec3 esri/core/libs/gl-matrix-2/mat4 esri/views/3d/webgl-engine/lib/Util esri/views/3d/support/mathUtils".split(" "),function(p,q,m,n,r,t){var l=p.vec3f64;m=m.vec3;var u=q.mat4f64;n=n.mat4;var v=r.logWithBase;return{getOrigin:function(a,g,c,b){if(!(0>=a.length)){var e=l.create();c=Math.floor(c+(b-1)/2);e[0]=a[3*c];e[1]=a[3*c+1];e[2]=a[3*c+2];for(b=c=0;b<g;++b)a[c++]-=e[0],a[c++]-=e[1],a[c++]-=
e[2];var d=0,f=l.fromValues(a[d],a[d+1],a[d+2]),k=l.create(this.bbMin);for(c=0;c<g;c++)for(d=3*c,b=0;3>b;b++){var h=a[d+b];h<f[b]?f[b]=h:h>k[b]&&(k[b]=h)}b=l.create();m.lerp(b,f,k,.5);for(c=f=0;c<g;c++)d=3*c,k=a[d]-b[0],h=a[d+1]-b[1],d=a[d+2]-b[2],d=k*k+h*h+d*d,d>f&&(f=d);f=Math.sqrt(f);a=u.create();n.translate(a,a,e);g=t.maxScale(a);m.transformMat4(b,b,a);e=0;a=f*g*10/1E4;1<a&&(e=Math.ceil(v(a,2)));a=1E4*Math.pow(2,e);c=Math.round(b[0]/a);g=Math.round(b[1]/a);b=Math.round(b[2]/a);e=e+"_"+c+"_"+g+
"_"+b;return{vec3:l.fromValues(c*a,g*a,b*a),id:e}}}}});