var t=function(t,i){void 0===i&&(i={});var e=i.vertex;void 0===e&&(e="\n      attribute vec2 position;\n      attribute vec2 uv;\n\n      uniform mat4 projection;\n      uniform vec2 size;\n      uniform float time;\n\n      void main() {\n        vec4 p = vec4(position, 0.0, 1.0);\n        gl_Position = projection * p;\n      }\n    ");var r=i.fragment;void 0===r&&(r="\n      precision highp float;\n\n      void main() {\n        gl_FragColor = vec4(1.0, 0.0, 0.0, 1.0);\n      }\n    ");var s=i.uniforms;void 0===s&&(s={}),this.uniforms=s,this.instance=t,this.gl=this.instance.gl,this.program=this.createProgram(this.gl,e,r),this.parse()};function i(t,i,e){var r=i[0],s=i[1],o=i[2],a=i[3],n=i[4],h=i[5],u=i[6],c=i[7],f=i[8],v=i[9],p=i[10],d=i[11],m=i[12],l=i[13],E=i[14],T=i[15],g=e[0],R=e[1],_=e[2],A=e[3];return t[0]=g*r+R*n+_*f+A*m,t[1]=g*s+R*h+_*v+A*l,t[2]=g*o+R*u+_*p+A*E,t[3]=g*a+R*c+_*d+A*T,t[4]=(g=e[4])*r+(R=e[5])*n+(_=e[6])*f+(A=e[7])*m,t[5]=g*s+R*h+_*v+A*l,t[6]=g*o+R*u+_*p+A*E,t[7]=g*a+R*c+_*d+A*T,t[8]=(g=e[8])*r+(R=e[9])*n+(_=e[10])*f+(A=e[11])*m,t[9]=g*s+R*h+_*v+A*l,t[10]=g*o+R*u+_*p+A*E,t[11]=g*a+R*c+_*d+A*T,t[12]=(g=e[12])*r+(R=e[13])*n+(_=e[14])*f+(A=e[15])*m,t[13]=g*s+R*h+_*v+A*l,t[14]=g*o+R*u+_*p+A*E,t[15]=g*a+R*c+_*d+A*T,t}t.prototype.setUniforms=function(t){for(var i in this.texUnit=-1,t)this.setUniform(i,t[i])},t.prototype.parse=function(t){void 0===t&&(t=this.gl),this.uniformsList=new Map,this.attributesList=new Map,this.uniformsLoc=new Map,this.attributeLoc=new Map;for(var i=0;i<t.getProgramParameter(this.program,t.ACTIVE_UNIFORMS);i++){var e=t.getActiveUniform(this.program,i);this.uniformsList.set(e.name,e),this.uniformsLoc.set(e.name,t.getUniformLocation(this.program,e.name))}for(var r=0;r<t.getProgramParameter(this.program,t.ACTIVE_ATTRIBUTES);r++){var s=t.getActiveAttrib(this.program,r);this.attributesList.set(s.name,s),this.attributeLoc.set(s.name,t.getAttribLocation(this.program,s.name))}},t.prototype.setUniform=function(t,i){var e=this.uniformsList.get(t);if(e){var r=this.gl,s=e.type,o=this.uniformsLoc.get(t);if(35678!==s)switch(s){case 5126:return i.length?r.uniform1fv(o,i):r.uniform1f(o,i);case 35664:return r.uniform2fv(o,i);case 35665:return r.uniform3fv(o,i);case 35666:return r.uniform4fv(o,i);case 35670:case 5124:case 35678:case 35680:return i.length?r.uniform1iv(o,i):r.uniform1i(o,i);case 35671:case 35667:return r.uniform2iv(o,i);case 35672:case 35668:return r.uniform3iv(o,i);case 35673:case 35669:return r.uniform4iv(o,i);case 35674:return r.uniformMatrix2fv(o,!1,i);case 35675:return r.uniformMatrix3fv(o,!1,i);case 35676:return r.uniformMatrix4fv(o,!1,i)}}},t.prototype.createShader=function(t,i,e){var r=t.createShader(i);if(t.shaderSource(r,e),t.compileShader(r),t.getShaderParameter(r,t.COMPILE_STATUS))return r;console.error(t.getShaderInfoLog(r)),t.deleteShader(r)},t.prototype.createProgram=function(t,i,e){var r=this.createShader(t,t.VERTEX_SHADER,i),s=this.createShader(t,t.FRAGMENT_SHADER,e),o=t.createProgram();if(t.attachShader(o,r),t.attachShader(o,s),t.linkProgram(o),t.deleteShader(r),t.deleteShader(s),t.getProgramParameter(o,t.LINK_STATUS))return o;console.error(t.getProgramInfoLog(o)),t.deleteProgram(o)};var e=function(t){function e(i,e,r,s,o,a,n,h,u,c,f,v,p,d,m,l){return void 0===i&&(i=1),void 0===e&&(e=0),void 0===r&&(r=0),void 0===s&&(s=0),void 0===o&&(o=0),void 0===a&&(a=1),void 0===n&&(n=0),void 0===h&&(h=0),void 0===u&&(u=0),void 0===c&&(c=0),void 0===f&&(f=1),void 0===v&&(v=0),void 0===p&&(p=0),void 0===d&&(d=0),void 0===m&&(m=0),void 0===l&&(l=1),t.call(this,i,e,r,s,o,a,n,h,u,c,f,v,p,d,m,l),this}return t&&(e.__proto__=t),(e.prototype=Object.create(t&&t.prototype)).constructor=e,e.prototype.translate=function(t,i){return void 0===i&&(i=this),function(t,i,e){var r,s,o,a,n,h,u,c,f,v,p,d,m=e[0],l=e[1],E=e[2];i===t?(t[12]=i[0]*m+i[4]*l+i[8]*E+i[12],t[13]=i[1]*m+i[5]*l+i[9]*E+i[13],t[14]=i[2]*m+i[6]*l+i[10]*E+i[14],t[15]=i[3]*m+i[7]*l+i[11]*E+i[15]):(s=i[1],o=i[2],a=i[3],n=i[4],h=i[5],u=i[6],c=i[7],f=i[8],v=i[9],p=i[10],d=i[11],t[0]=r=i[0],t[1]=s,t[2]=o,t[3]=a,t[4]=n,t[5]=h,t[6]=u,t[7]=c,t[8]=f,t[9]=v,t[10]=p,t[11]=d,t[12]=r*m+n*l+f*E+i[12],t[13]=s*m+h*l+v*E+i[13],t[14]=o*m+u*l+p*E+i[14],t[15]=a*m+c*l+d*E+i[15])}(this,i,t),this},e.prototype.scale=function(t,i){return void 0===i&&(i=this),function(t,i,e){var r=e[0],s=e[1],o=e[2];t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=i[3]*r,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=i[7]*s,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=i[11]*o,t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15]}(this,i,"number"==typeof t?[t,t,t]:t),this},e.prototype.multiply=function(t,e){return e?i(this,t,e):i(this,this,t),this},e.prototype.fromPerspective=function(t){return void 0===t&&(t={}),function(i,e,r,s,o){var a=1/Math.tan(t.fov/2),n=1/(s-o);i[0]=a/r,i[1]=0,i[2]=0,i[3]=0,i[4]=0,i[5]=a,i[6]=0,i[7]=0,i[8]=0,i[9]=0,i[10]=(o+s)*n,i[11]=-1,i[12]=0,i[13]=0,i[14]=2*o*s*n,i[15]=0}(this,0,t.aspect,t.near,t.far),this},e}(Array),r=function(t,i,e){var r=this;void 0===e&&(e={});var s=e.material,o=e.wireframe;void 0===o&&(o=!1);var a=e.uniforms;void 0===a&&(a={});var n=e.position;void 0===n&&(n=[0,0]);var h=e.scale;void 0===h&&(h=[1,1]);var u=e.order;if(void 0===u&&(u=10),!s)return console.error("Missing material");this.instance=t,this.plane=this.instance.plane,this.dom=i,this.material=s,this.wireframe=o,this.uniforms=a,this.position=n,this.scale=h,this.order=u,this.active=!0,this.vao=this.instance.vao.createVertexArrayOES(),this.setupVao(),this.resize(),this.dom.classList.add("aladino"),this.dom.style.opacity="0","undefined"!=typeof ResizeObserver&&(this.observer=new ResizeObserver(function(){return r.resize()}),this.observer.observe(this.dom))};r.prototype.destroy=function(){this.active=!1},r.prototype.resize=function(){if(this.active)if(this.dom){var t=this.dom.getBoundingClientRect();this.bounds={top:t.top+this.instance.y,left:t.left+this.instance.x,width:t.width,height:t.height},this.uniforms.size=[this.bounds.width,this.bounds.height],this.updateProjection()}else this.destroy()},r.prototype.updateProjection=function(){this.projection=new e;var t=this.instance.aspect,i=Math.PI/180*45,r=this.order,s=2*Math.tan(i/2)*r,o=s*t,a=this.bounds.width/this.instance.width*o,n=this.bounds.height/this.instance.height*s;this.projection.fromPerspective({fov:i,aspect:t,near:.01,far:100}),this.projection.translate([0,0,-r,0]),this.projection.translate([-o/2+a/2,s/2-n/2,0,0]),this.projection.translate([(this.bounds.left-(this.instance.x-this.position[0]))/this.instance.width*o,-(this.bounds.top-(this.instance.y-this.position[1]))/this.instance.height*s,0,0]),this.projection.scale([a*this.scale[0],n*this.scale[1],1,1])},r.prototype.setupVao=function(){var t=this.instance.gl;this.instance.vao.bindVertexArrayOES(this.vao);var i=this.material.attributeLoc.get("position");void 0!==i&&(t.enableVertexAttribArray(i),t.bindBuffer(t.ARRAY_BUFFER,this.plane.position),t.vertexAttribPointer(i,2,t.FLOAT,!1,0,0));var e=this.material.attributeLoc.get("uv");void 0!==e&&(t.enableVertexAttribArray(e),t.bindBuffer(t.ARRAY_BUFFER,this.plane.uv),t.vertexAttribPointer(e,2,t.FLOAT,!1,0,0)),t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,this.plane.index),this.instance.vao.bindVertexArrayOES(null)},r.prototype.draw=function(){var t=this.instance.gl;this.updateProjection(),t.uniformMatrix4fv(this.material.uniformsLoc.get("projection"),!1,this.projection),t.drawElements(this.wireframe?t.LINES:t.TRIANGLES,this.plane.n,t.UNSIGNED_SHORT,0)};var s=function(t){var i=t.gl,e=this.build(t.density),r=e.position,s=e.index,o=e.uv;this.index=i.createBuffer(),this.position=i.createBuffer(),this.uv=i.createBuffer(),this.n=s.length,i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,this.index),i.bufferData(i.ELEMENT_ARRAY_BUFFER,s,i.STATIC_DRAW),i.bindBuffer(i.ARRAY_BUFFER,this.position),i.bufferData(i.ARRAY_BUFFER,r,i.STATIC_DRAW),i.bindBuffer(i.ARRAY_BUFFER,this.uv),i.bufferData(i.ARRAY_BUFFER,o,i.STATIC_DRAW)};s.prototype.build=function(t){for(var i=0,e=0,r=t,s=t,o=(r+1)*(s+1),a=r*s*6,n=new Float32Array(2*o),h=new Float32Array(2*o),u=o>65536?new Uint32Array(a):new Uint16Array(a),c=i,f=1/r,v=1/s,p=0;p<=s;p++)for(var d=p*v-.5,m=0;m<=r;m++,i++)if(n[2*i+0]=1*(m*f-.5),n[2*i+1]=-1*d,h[2*i]=m/r,h[2*i+1]=1-p/s,p!==s&&m!==r){var l=c+m+(p+1)*(r+1),E=c+m+(p+1)*(r+1)+1,T=c+m+p*(r+1)+1;u[6*e]=c+m+p*(r+1),u[6*e+1]=l,u[6*e+2]=T,u[6*e+3]=l,u[6*e+4]=E,u[6*e+5]=T,e++}return{position:n,uv:h,index:u}};var o=new Map,a=function(t,i,e){void 0===e&&(e={});var r,s,a,n=e.anisotropy;if(void 0===n&&(n=!1),o.get(i))return o.get(i);o.set(i,this),this.instance=t,this.gl=this.instance.gl,this.url=i,this.anisotropy=n,this.loading=(r=void 0,s=void 0,(a=new Promise(function(t,i){r=t,s=i})).resolve=r,a.reject=s,a);var h=this.gl;this.texture=h.createTexture(),h.activeTexture(h.TEXTURE0),h.bindTexture(h.TEXTURE_2D,this.texture),h.texImage2D(h.TEXTURE_2D,0,h.RGBA,1,1,0,h.RGBA,h.UNSIGNED_BYTE,new Uint8Array(4)),this.load()};a.prototype.load=function(){this.image=new Image,this.image.crossOrigin="anonymous",this.image.onload=this.onLoad.bind(this),this.image.src=this.url},a.prototype.onLoad=function(){var t=this.gl;if(t.activeTexture(t.TEXTURE0),t.bindTexture(t.TEXTURE_2D,this.texture),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,!0),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MAG_FILTER,t.LINEAR),this.anisotropy&&this.instance.anisotropy){var i=this.instance.anisotropy,e=t.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT);t.texParameterf(t.TEXTURE_2D,i.TEXTURE_MAX_ANISOTROPY_EXT,e)}t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.RGBA,t.UNSIGNED_BYTE,this.image),this.loading.resolve(this)};var n=function(t){void 0===t&&(t={});var i=t.canvas;void 0===i&&(i=document.createElement("canvas"));var e=t.dpr;void 0===e&&(e=Math.min(devicePixelRatio,2));var r=t.density;void 0===r&&(r=1);var o=t.autoScroll;void 0===o&&(o=!0);var a=t.post;void 0===a&&(a=!1);var n=t.attribs;void 0===n&&(n={antialias:!0});var h=t.autoTick;void 0===h&&(h=!0),this.dpr=e,this.canvas=i,this.density=r,this.autoScroll=o,this.carpets=new Map,this.lastProgramUsed=null,this.post=a,this.autoTick=h,this.x=0,this.y=0,this.post&&(n.antialias=!1);try{this.gl=i.getContext("webgl",n)||i.getContext("experimental-webgl",n),this.vao=this.gl.getExtension("OES_vertex_array_object")}catch(t){return void console.error("WebGL or VAO not available")}this.anisotropy=this.gl.getExtension("EXT_texture_filter_anisotropic")||this.gl.getExtension("MOZ_EXT_texture_filter_anisotropic")||this.gl.getExtension("WEBKIT_EXT_texture_filter_anisotropic"),this.gl.enable(this.gl.DEPTH_TEST),this.gl.clearColor(0,0,0,0),this.plane=new s(this),this.init()};n.prototype.init=function(){this.resize=this.resize.bind(this),this.draw=this.draw.bind(this),window.addEventListener("resize",this.resize),this.autoScroll&&(this.scroll=this.scroll.bind(this),window.addEventListener("scroll",this.scroll),this.scroll()),this.resize(),this.post&&this.setupPost(),this.autoTick&&this.draw()},n.prototype.destroy=function(){window.removeEventListener("resize",this.resize),this.requestID&&cancelAnimationFrame(this.requestID)},n.prototype.scroll=function(){var t=document.documentElement;this.x=(window.pageXOffset||t.scrollLeft)-(t.clientLeft||0),this.y=window.pageYOffset||document.documentElement.scrollTop},n.prototype.resize=function(){this.width=window.innerWidth,this.height=window.innerHeight,this.aspect=this.width/this.height;var t=this.gl;t.canvas.width=this.width*this.dpr,t.canvas.height=this.height*this.dpr,Object.assign(this.gl.canvas.style,{position:"fixed",top:0,right:0,bottom:0,left:0,width:this.width+"px",height:this.height+"px",pointerEvents:"none"}),this.carpets.forEach(function(t){return t.resize()}),t.viewport(0,0,t.canvas.width,t.canvas.height),this.post&&this.postTexture&&(t.bindTexture(t.TEXTURE_2D,this.postTexture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.canvas.width,t.canvas.height,0,t.RGBA,t.UNSIGNED_BYTE,null)),this.reset=!0},n.prototype.material=function(i){return new t(this,i)},n.prototype.carpet=function(t,i){var e=new r(this,t,i);return this.carpets.set(t,e),this.reset=!0,e},n.prototype.texture=function(t,i){return new a(this,t,i)},n.prototype.setupPost=function(){var t=this.gl;this.postTexture=t.createTexture(),this.postFb=t.createFramebuffer(),t.bindTexture(t.TEXTURE_2D,this.postTexture),t.texImage2D(t.TEXTURE_2D,0,t.RGBA,t.canvas.width,t.canvas.height,0,t.RGBA,t.UNSIGNED_BYTE,null),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_MIN_FILTER,t.LINEAR),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(t.TEXTURE_2D,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),t.bindFramebuffer(t.FRAMEBUFFER,this.postFb),t.framebufferTexture2D(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,this.postTexture,0),t.bindFramebuffer(t.FRAMEBUFFER,null),this.postMaterial=this.material({vertex:"\n        attribute vec2 position;\n\n        void main() {\n          gl_Position = vec4(position, 0.0, 1.0);\n        }\n      ",fragment:this.post.fragment||"\n        precision highp float;\n\n        uniform vec2 viewport;\n        uniform sampler2D image;\n\n        void main() {\n          vec2 uv = gl_FragCoord.xy / viewport;\n          vec4 color = texture2D(image, uv);\n          gl_FragColor = color;\n        }\n      ",uniforms:this.post.uniforms||{}}),this.postTriangle=t.createBuffer(),t.bindBuffer(t.ARRAY_BUFFER,this.postTriangle),t.bufferData(t.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),t.STATIC_DRAW),this.postVao=this.vao.createVertexArrayOES(),this.vao.bindVertexArrayOES(this.postVao);var i=this.postMaterial.attributeLoc.get("position");t.enableVertexAttribArray(i),t.bindBuffer(t.ARRAY_BUFFER,this.postTriangle),t.vertexAttribPointer(i,2,t.FLOAT,!1,0,0),this.vao.bindVertexArrayOES(null)},n.prototype.setTextures=function(t,i){var e=this.gl,r=0;t.uniformsList.forEach(function(s){if(35678===s.type){var o=i[s.name];if(!o)return;e.activeTexture(e.TEXTURE0+r),e.bindTexture(e.TEXTURE_2D,o.texture),e.uniform1i(t.uniformsLoc.get(s.name),r);var a=s.name,n="size"+a.charAt(0).toUpperCase()+a.substring(1);t.setUniform(n,[o.image.width,o.image.height]),r++}})},n.prototype.draw=function(t){var i=this;void 0===t&&(t=performance.now()),this.autoTick&&(this.requestID=requestAnimationFrame(this.draw));var e=this.gl,r=void 0,s=e.canvas.width,o=e.canvas.height;if(this.post&&e.bindFramebuffer(e.FRAMEBUFFER,this.postFb),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),this.carpets.forEach(function(a){a.active&&((a.material.program!==i.lastProgramUsed||i.reset)&&(e.useProgram(a.material.program),i.vao.bindVertexArrayOES(a.vao),i.setTextures(a.material,a.material.uniforms),i.reset=!1),a.material.program!==r&&(a.material.uniforms.time=t,a.material.uniforms.viewport=[s,o],a.material.setUniforms(a.material.uniforms)),i.setTextures(a.material,a.uniforms),a.material.setUniforms(a.uniforms),a.draw(),r=a.material.program,i.lastProgramUsed=a.material.program)}),this.post){var a=this.postMaterial;e.bindFramebuffer(e.FRAMEBUFFER,null),e.clear(e.COLOR_BUFFER_BIT|e.DEPTH_BUFFER_BIT),e.useProgram(a.program),a.uniforms.time=t,a.uniforms.viewport=[s,o],a.setUniforms(a.uniforms),e.activeTexture(e.TEXTURE0),e.bindTexture(e.TEXTURE_2D,this.postTexture),e.uniform1i(a.uniformsLoc.get("image"),0),this.vao.bindVertexArrayOES(this.postVao),e.drawArrays(e.TRIANGLES,0,3),this.reset=!0}},module.exports=n;
