/*! svg.js v2.5.0 MIT*/;!function(t,e){"function"==typeof define&&define.amd?define(function(){return e(t,t.document)}):"object"==typeof exports?module.exports=t.document?e(t,t.document):function(t){return e(t,t.document)}:t.SVG=e(t,t.document)}("undefined"!=typeof window?window:this,function(t,e){function i(t,e,i,n){return i+n.replace(w.regex.dots," .")}function n(t){for(var e=t.slice(0),i=e.length;i--;)Array.isArray(e[i])&&(e[i]=n(e[i]));return e}function r(t,e){return t instanceof e}function s(t,e){return(t.matches||t.matchesSelector||t.msMatchesSelector||t.mozMatchesSelector||t.webkitMatchesSelector||t.oMatchesSelector).call(t,e)}function o(t){return t.toLowerCase().replace(/-(.)/g,function(t,e){return e.toUpperCase()})}function a(t){return t.charAt(0).toUpperCase()+t.slice(1)}function h(t){return 4==t.length?["#",t.substring(1,2),t.substring(1,2),t.substring(2,3),t.substring(2,3),t.substring(3,4),t.substring(3,4)].join(""):t}function u(t){var e=t.toString(16);return 1==e.length?"0"+e:e}function l(t,e,i){if(null==e||null==i){var n=t.bbox();null==e?e=n.width/n.height*i:null==i&&(i=n.height/n.width*e)}return{width:e,height:i}}function c(t,e,i){return{x:e*t.a+i*t.c+0,y:e*t.b+i*t.d+0}}function f(t){return{a:t[0],b:t[1],c:t[2],d:t[3],e:t[4],f:t[5]}}function d(t){return t instanceof w.Matrix||(t=new w.Matrix(t)),t}function p(t,e){t.cx=null==t.cx?e.bbox().cx:t.cx,t.cy=null==t.cy?e.bbox().cy:t.cy}function m(t){return t=t.replace(w.regex.whitespace,"").replace(w.regex.matrix,"").split(w.regex.matrixElements),f(w.utils.map(t,function(t){return parseFloat(t)}))}function x(t){for(var e=0,i=t.length,n="";e<i;e++)n+=t[e][0],null!=t[e][1]&&(n+=t[e][1],null!=t[e][2]&&(n+=" ",n+=t[e][2],null!=t[e][3]&&(n+=" ",n+=t[e][3],n+=" ",n+=t[e][4],null!=t[e][5]&&(n+=" ",n+=t[e][5],n+=" ",n+=t[e][6],null!=t[e][7]&&(n+=" ",n+=t[e][7])))));return n+" "}function y(t){for(var e=t.childNodes.length-1;e>=0;e--)t.childNodes[e]instanceof SVGElement&&y(t.childNodes[e]);return w.adopt(t).id(w.eid(t.nodeName))}function v(t){return null==t.x&&(t.x=0,t.y=0,t.width=0,t.height=0),t.w=t.width,t.h=t.height,t.x2=t.x+t.width,t.y2=t.y+t.height,t.cx=t.x+t.width/2,t.cy=t.y+t.height/2,t}function g(t){var e=t.toString().match(w.regex.reference);if(e)return e[1]}var w=this.SVG=function(t){if(w.supported)return t=new w.Doc(t),w.parser.draw||w.prepare(),t};if(w.ns="http://www.w3.org/2000/svg",w.xmlns="http://www.w3.org/2000/xmlns/",w.xlink="http://www.w3.org/1999/xlink",w.svgjs="http://svgjs.com/svgjs",w.supported=function(){return!!e.createElementNS&&!!e.createElementNS(w.ns,"svg").createSVGRect}(),!w.supported)return!1;w.did=1e3,w.eid=function(t){return"Svgjs"+a(t)+w.did++},w.create=function(t){var i=e.createElementNS(this.ns,t);return i.setAttribute("id",this.eid(t)),i},w.extend=function(){var t,e,i,n;for(t=[].slice.call(arguments),e=t.pop(),n=t.length-1;n>=0;n--)if(t[n])for(i in e)t[n].prototype[i]=e[i];w.Set&&w.Set.inherit&&w.Set.inherit()},w.invent=function(t){var e="function"==typeof t.create?t.create:function(){this.constructor.call(this,w.create(t.create))};return t.inherit&&(e.prototype=new t.inherit),t.extend&&w.extend(e,t.extend),t.construct&&w.extend(t.parent||w.Container,t.construct),e},w.adopt=function(t){if(!t)return null;if(t.instance)return t.instance;var e;return e="svg"==t.nodeName?t.parentNode instanceof SVGElement?new w.Nested:new w.Doc:"linearGradient"==t.nodeName?new w.Gradient("linear"):"radialGradient"==t.nodeName?new w.Gradient("radial"):w[a(t.nodeName)]?new(w[a(t.nodeName)]):new w.Element(t),e.type=t.nodeName,e.node=t,t.instance=e,e instanceof w.Doc&&e.namespace().defs(),e.setData(JSON.parse(t.getAttribute("svgjs:data"))||{}),e},w.prepare=function(){var t=e.getElementsByTagName("body")[0],i=(t?new w.Doc(t):new w.Doc(e.documentElement).nested()).size(2,0);w.parser={body:t||e.documentElement,draw:i.style("opacity:0;position:absolute;left:-100%;top:-100%;overflow:hidden"),poly:i.polyline().node,path:i.path().node,native:w.create("svg")}},w.parser={native:w.create("svg")},e.addEventListener("DOMContentLoaded",function(){w.parser.draw||w.prepare()},!1),w.regex={numberAndUnit:/^([+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?)([a-z%]*)$/i,hex:/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i,rgb:/rgb\((\d+),(\d+),(\d+)\)/,reference:/#([a-z0-9\-_]+)/i,matrix:/matrix\(|\)/g,matrixElements:/,*\s+|,/,whitespace:/\s/g,isHex:/^#[a-f0-9]{3,6}$/i,isRgb:/^rgb\(/,isCss:/[^:]+:[^;]+;?/,isBlank:/^(\s+)?$/,isNumber:/^[+-]?(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,isPercent:/^-?[\d\.]+%$/,isImage:/\.(jpg|jpeg|png|gif|svg)(\?[^=]+.*)?/i,delimiter:/[\s,]+/,hyphen:/([^e])\-/gi,pathLetters:/[MLHVCSQTAZ]/gi,isPathLetter:/[MLHVCSQTAZ]/i,numbersWithDots:/((\d?\.\d+(?:e[+-]?\d+)?)((?:\.\d+(?:e[+-]?\d+)?)+))+/gi,dots:/\./g},w.utils={map:function(t,e){var i,n=t.length,r=[];for(i=0;i<n;i++)r.push(e(t[i]));return r},filter:function(t,e){var i,n=t.length,r=[];for(i=0;i<n;i++)e(t[i])&&r.push(t[i]);return r},radians:function(t){return t%360*Math.PI/180},degrees:function(t){return 180*t/Math.PI%360},filterSVGElements:function(t){return this.filter(t,function(t){return t instanceof SVGElement})}},w.defaults={attrs:{"fill-opacity":1,"stroke-opacity":1,"stroke-width":0,"stroke-linejoin":"miter","stroke-linecap":"butt",fill:"#000000",stroke:"#000000",opacity:1,x:0,y:0,cx:0,cy:0,width:0,height:0,r:0,rx:0,ry:0,offset:0,"stop-opacity":1,"stop-color":"#000000","font-size":16,"font-family":"Helvetica, Arial, sans-serif","text-anchor":"start"}},w.Color=function(t){var e;this.r=0,this.g=0,this.b=0,t&&("string"==typeof t?w.regex.isRgb.test(t)?(e=w.regex.rgb.exec(t.replace(/\s/g,"")),this.r=parseInt(e[1]),this.g=parseInt(e[2]),this.b=parseInt(e[3])):w.regex.isHex.test(t)&&(e=w.regex.hex.exec(h(t)),this.r=parseInt(e[1],16),this.g=parseInt(e[2],16),this.b=parseInt(e[3],16)):"object"==typeof t&&(this.r=t.r,this.g=t.g,this.b=t.b))},w.extend(w.Color,{toString:function(){return this.toHex()},toHex:function(){return"#"+u(this.r)+u(this.g)+u(this.b)},toRgb:function(){return"rgb("+[this.r,this.g,this.b].join()+")"},brightness:function(){return this.r/255*.3+this.g/255*.59+this.b/255*.11},morph:function(t){return this.destination=new w.Color(t),this},at:function(t){return this.destination?(t=t<0?0:t>1?1:t,new w.Color({r:~~(this.r+(this.destination.r-this.r)*t),g:~~(this.g+(this.destination.g-this.g)*t),b:~~(this.b+(this.destination.b-this.b)*t)})):this}}),w.Color.test=function(t){return t+="",w.regex.isHex.test(t)||w.regex.isRgb.test(t)},w.Color.isRgb=function(t){return t&&"number"==typeof t.r&&"number"==typeof t.g&&"number"==typeof t.b},w.Color.isColor=function(t){return w.Color.isRgb(t)||w.Color.test(t)},w.Array=function(t,e){t=(t||[]).valueOf(),0==t.length&&e&&(t=e.valueOf()),this.value=this.parse(t)},w.extend(w.Array,{morph:function(t){if(this.destination=this.parse(t),this.value.length!=this.destination.length){for(var e=this.value[this.value.length-1],i=this.destination[this.destination.length-1];this.value.length>this.destination.length;)this.destination.push(i);for(;this.value.length<this.destination.length;)this.value.push(e)}return this},settle:function(){for(var t=0,e=this.value.length,i=[];t<e;t++)i.indexOf(this.value[t])==-1&&i.push(this.value[t]);return this.value=i},at:function(t){if(!this.destination)return this;for(var e=0,i=this.value.length,n=[];e<i;e++)n.push(this.value[e]+(this.destination[e]-this.value[e])*t);return new w.Array(n)},toString:function(){return this.value.join(" ")},valueOf:function(){return this.value},parse:function(t){return t=t.valueOf(),Array.isArray(t)?t:this.split(t)},split:function(t){return t.trim().split(w.regex.delimiter).map(parseFloat)},reverse:function(){return this.value.reverse(),this},clone:function(){var t=new this.constructor;return t.value=n(this.value),t}}),w.PointArray=function(t,e){w.Array.call(this,t,e||[[0,0]])},w.PointArray.prototype=new w.Array,w.PointArray.prototype.constructor=w.PointArray,w.extend(w.PointArray,{toString:function(){for(var t=0,e=this.value.length,i=[];t<e;t++)i.push(this.value[t].join(","));return i.join(" ")},toLine:function(){return{x1:this.value[0][0],y1:this.value[0][1],x2:this.value[1][0],y2:this.value[1][1]}},at:function(t){if(!this.destination)return this;for(var e=0,i=this.value.length,n=[];e<i;e++)n.push([this.value[e][0]+(this.destination[e][0]-this.value[e][0])*t,this.value[e][1]+(this.destination[e][1]-this.value[e][1])*t]);return new w.PointArray(n)},parse:function(t){var e=[];if(t=t.valueOf(),Array.isArray(t)){if(Array.isArray(t[0]))return t}else t=t.trim().split(/[\s,]+/);t.length%2!==0&&t.pop();for(var i=0,n=t.length;i<n;i+=2)e.push([parseFloat(t[i]),parseFloat(t[i+1])]);return e},move:function(t,e){var i=this.bbox();if(t-=i.x,e-=i.y,!isNaN(t)&&!isNaN(e))for(var n=this.value.length-1;n>=0;n--)this.value[n]=[this.value[n][0]+t,this.value[n][1]+e];return this},size:function(t,e){var i,n=this.bbox();for(i=this.value.length-1;i>=0;i--)n.width&&(this.value[i][0]=(this.value[i][0]-n.x)*t/n.width+n.x),n.height&&(this.value[i][1]=(this.value[i][1]-n.y)*e/n.height+n.y);return this},bbox:function(){return w.parser.poly.setAttribute("points",this.toString()),w.parser.poly.getBBox()}}),w.PathArray=function(t,e){w.Array.call(this,t,e||[["M",0,0]])},w.PathArray.prototype=new w.Array,w.PathArray.prototype.constructor=w.PathArray,w.extend(w.PathArray,{toString:function(){return x(this.value)},move:function(t,e){var i=this.bbox();if(t-=i.x,e-=i.y,!isNaN(t)&&!isNaN(e))for(var n,r=this.value.length-1;r>=0;r--)n=this.value[r][0],"M"==n||"L"==n||"T"==n?(this.value[r][1]+=t,this.value[r][2]+=e):"H"==n?this.value[r][1]+=t:"V"==n?this.value[r][1]+=e:"C"==n||"S"==n||"Q"==n?(this.value[r][1]+=t,this.value[r][2]+=e,this.value[r][3]+=t,this.value[r][4]+=e,"C"==n&&(this.value[r][5]+=t,this.value[r][6]+=e)):"A"==n&&(this.value[r][6]+=t,this.value[r][7]+=e);return this},size:function(t,e){var i,n,r=this.bbox();for(i=this.value.length-1;i>=0;i--)n=this.value[i][0],"M"==n||"L"==n||"T"==n?(this.value[i][1]=(this.value[i][1]-r.x)*t/r.width+r.x,this.value[i][2]=(this.value[i][2]-r.y)*e/r.height+r.y):"H"==n?this.value[i][1]=(this.value[i][1]-r.x)*t/r.width+r.x:"V"==n?this.value[i][1]=(this.value[i][1]-r.y)*e/r.height+r.y:"C"==n||"S"==n||"Q"==n?(this.value[i][1]=(this.value[i][1]-r.x)*t/r.width+r.x,this.value[i][2]=(this.value[i][2]-r.y)*e/r.height+r.y,this.value[i][3]=(this.value[i][3]-r.x)*t/r.width+r.x,this.value[i][4]=(this.value[i][4]-r.y)*e/r.height+r.y,"C"==n&&(this.value[i][5]=(this.value[i][5]-r.x)*t/r.width+r.x,this.value[i][6]=(this.value[i][6]-r.y)*e/r.height+r.y)):"A"==n&&(this.value[i][1]=this.value[i][1]*t/r.width,this.value[i][2]=this.value[i][2]*e/r.height,this.value[i][6]=(this.value[i][6]-r.x)*t/r.width+r.x,this.value[i][7]=(this.value[i][7]-r.y)*e/r.height+r.y);return this},equalCommands:function(t){var e,i,n;for(t=new w.PathArray(t),n=this.value.length===t.value.length,e=0,i=this.value.length;n&&e<i;e++)n=this.value[e][0]===t.value[e][0];return n},morph:function(t){return t=new w.PathArray(t),this.equalCommands(t)?this.destination=t:this.destination=null,this},at:function(t){if(!this.destination)return this;var e,i,n,r,s=this.value,o=this.destination.value,a=[],h=new w.PathArray;for(e=0,i=s.length;e<i;e++){for(a[e]=[s[e][0]],n=1,r=s[e].length;n<r;n++)a[e][n]=s[e][n]+(o[e][n]-s[e][n])*t;"A"===a[e][0]&&(a[e][4]=+(0!=a[e][4]),a[e][5]=+(0!=a[e][5]))}return h.value=a,h},parse:function(t){if(t instanceof w.PathArray)return t.valueOf();var e,n,r,s,o,a,h=0,u=0,l={M:2,L:2,H:1,V:1,C:6,S:4,Q:4,T:2,A:7};t="string"==typeof t?t.replace(w.regex.numbersWithDots,i).replace(w.regex.pathLetters," $& ").replace(w.regex.hyphen,"$1 -").trim().split(w.regex.delimiter):t.reduce(function(t,e){return[].concat.apply(t,e)},[]);var a=[];do{for(w.regex.isPathLetter.test(t[0])?(s=t[0],t.shift()):"M"==s?s="L":"m"==s&&(s="l"),o=[s.toUpperCase()],e=0;e<l[o[0]];++e)o.push(parseFloat(t.shift()));s==o[0]?"M"==s||"L"==s||"C"==s||"Q"==s||"S"==s||"T"==s?(h=o[l[o[0]]-1],u=o[l[o[0]]]):"V"==s?u=o[1]:"H"==s?h=o[1]:"A"==s&&(h=o[6],u=o[7]):"m"==s||"l"==s||"c"==s||"s"==s||"q"==s||"t"==s?(o[1]+=h,o[2]+=u,null!=o[3]&&(o[3]+=h,o[4]+=u),null!=o[5]&&(o[5]+=h,o[6]+=u),h=o[l[o[0]]-1],u=o[l[o[0]]]):"v"==s?(o[1]+=u,u=o[1]):"h"==s?(o[1]+=h,h=o[1]):"a"==s&&(o[6]+=h,o[7]+=u,h=o[6],u=o[7]),"M"==o[0]&&(n=h,r=u),"Z"==o[0]&&(h=n,u=r),a.push(o)}while(t.length);return a},bbox:function(){return w.parser.path.setAttribute("d",this.toString()),w.parser.path.getBBox()}}),w.Number=w.invent({create:function(t,e){this.value=0,this.unit=e||"","number"==typeof t?this.value=isNaN(t)?0:isFinite(t)?t:t<0?-3.4e38:3.4e38:"string"==typeof t?(e=t.match(w.regex.numberAndUnit),e&&(this.value=parseFloat(e[1]),"%"==e[5]?this.value/=100:"s"==e[5]&&(this.value*=1e3),this.unit=e[5])):t instanceof w.Number&&(this.value=t.valueOf(),this.unit=t.unit)},extend:{toString:function(){return("%"==this.unit?~~(1e8*this.value)/1e6:"s"==this.unit?this.value/1e3:this.value)+this.unit},toJSON:function(){return this.toString()},valueOf:function(){return this.value},plus:function(t){return t=new w.Number(t),new w.Number(this+t,this.unit||t.unit)},minus:function(t){return t=new w.Number(t),new w.Number(this-t,this.unit||t.unit)},times:function(t){return t=new w.Number(t),new w.Number(this*t,this.unit||t.unit)},divide:function(t){return t=new w.Number(t),new w.Number(this/t,this.unit||t.unit)},to:function(t){var e=new w.Number(this);return"string"==typeof t&&(e.unit=t),e},morph:function(t){return this.destination=new w.Number(t),t.relative&&(this.destination.value+=this.value),this},at:function(t){return this.destination?new w.Number(this.destination).minus(this).times(t).plus(this):this}}}),w.Element=w.invent({create:function(t){this._stroke=w.defaults.attrs.stroke,this._event=null,this.dom={},(this.node=t)&&(this.type=t.nodeName,this.node.instance=this,this._stroke=t.getAttribute("stroke")||this._stroke)},extend:{x:function(t){return this.attr("x",t)},y:function(t){return this.attr("y",t)},cx:function(t){return null==t?this.x()+this.width()/2:this.x(t-this.width()/2)},cy:function(t){return null==t?this.y()+this.height()/2:this.y(t-this.height()/2)},move:function(t,e){return this.x(t).y(e)},center:function(t,e){return this.cx(t).cy(e)},width:function(t){return this.attr("width",t)},height:function(t){return this.attr("height",t)},size:function(t,e){var i=l(this,t,e);return this.width(new w.Number(i.width)).height(new w.Number(i.height))},clone:function(t,e){this.writeDataToDom();var i=y(this.node.cloneNode(!0));return t?t.add(i):this.after(i),i},remove:function(){return this.parent()&&this.parent().removeElement(this),this},replace:function(t){return this.after(t).remove(),t},addTo:function(t){return t.put(this)},putIn:function(t){return t.add(this)},id:function(t){return this.attr("id",t)},inside:function(t,e){var i=this.bbox();return t>i.x&&e>i.y&&t<i.x+i.width&&e<i.y+i.height},show:function(){return this.style("display","")},hide:function(){return this.style("display","none")},visible:function(){return"none"!=this.style("display")},toString:function(){return this.attr("id")},classes:function(){var t=this.attr("class");return null==t?[]:t.trim().split(/\s+/)},hasClass:function(t){return this.classes().indexOf(t)!=-1},addClass:function(t){if(!this.hasClass(t)){var e=this.classes();e.push(t),this.attr("class",e.join(" "))}return this},removeClass:function(t){return this.hasClass(t)&&this.attr("class",this.classes().filter(function(e){return e!=t}).join(" ")),this},toggleClass:function(t){return this.hasClass(t)?this.removeClass(t):this.addClass(t)},reference:function(t){return w.get(this.attr(t))},parent:function(t){var e=this;if(!e.node.parentNode)return null;if(e=w.adopt(e.node.parentNode),!t)return e;for(;e&&e.node instanceof SVGElement;){if("string"==typeof t?e.matches(t):e instanceof t)return e;e=w.adopt(e.node.parentNode)}},doc:function(){return this instanceof w.Doc?this:this.parent(w.Doc)},parents:function(t){var e=[],i=this;do{if(i=i.parent(t),!i||!i.node)break;e.push(i)}while(i.parent);return e},matches:function(t){return s(this.node,t)},native:function(){return this.node},svg:function(t){var i=e.createElement("svg");if(!(t&&this instanceof w.Parent))return i.appendChild(t=e.createElement("svg")),this.writeDataToDom(),t.appendChild(this.node.cloneNode(!0)),i.innerHTML.replace(/^<svg>/,"").replace(/<\/svg>$/,"");i.innerHTML="<svg>"+t.replace(/\n/,"").replace(/<(\w+)([^<]+?)\/>/g,"<$1$2></$1>")+"</svg>";for(var n=0,r=i.firstChild.childNodes.length;n<r;n++)this.node.appendChild(i.firstChild.firstChild);return this},writeDataToDom:function(){if(this.each||this.lines){var t=this.each?this:this.lines();t.each(function(){this.writeDataToDom()})}return this.node.removeAttribute("svgjs:data"),Object.keys(this.dom).length&&this.node.setAttribute("svgjs:data",JSON.stringify(this.dom)),this},setData:function(t){return this.dom=t,this},is:function(t){return r(this,t)}}}),w.easing={"-":function(t){return t},"<>":function(t){return-Math.cos(t*Math.PI)/2+.5},">":function(t){return Math.sin(t*Math.PI/2)},"<":function(t){return-Math.cos(t*Math.PI/2)+1}},w.morph=function(t){return function(e,i){return new w.MorphObj(e,i).at(t)}},w.Situation=w.invent({create:function(t){this.init=!1,this.reversed=!1,this.reversing=!1,this.duration=new w.Number(t.duration).valueOf(),this.delay=new w.Number(t.delay).valueOf(),this.start=+new Date+this.delay,this.finish=this.start+this.duration,this.ease=t.ease,this.loop=0,this.loops=!1,this.animations={},this.attrs={},this.styles={},this.transforms=[],this.once={}}}),w.FX=w.invent({create:function(t){this._target=t,this.situations=[],this.active=!1,this.situation=null,this.paused=!1,this.lastPos=0,this.pos=0,this.absPos=0,this._speed=1},extend:{animate:function(t,e,i){"object"==typeof t&&(e=t.ease,i=t.delay,t=t.duration);var n=new w.Situation({duration:t||1e3,delay:i||0,ease:w.easing[e||"-"]||e});return this.queue(n),this},delay:function(t){var e=new w.Situation({duration:t,delay:0,ease:w.easing["-"]});return this.queue(e)},target:function(t){return t&&t instanceof w.Element?(this._target=t,this):this._target},timeToAbsPos:function(t){return(t-this.situation.start)/(this.situation.duration/this._speed)},absPosToTime:function(t){return this.situation.duration/this._speed*t+this.situation.start},startAnimFrame:function(){this.stopAnimFrame(),this.animationFrame=requestAnimationFrame(function(){this.step()}.bind(this))},stopAnimFrame:function(){cancelAnimationFrame(this.animationFrame)},start:function(){return!this.active&&this.situation&&(this.active=!0,this.startCurrent()),this},startCurrent:function(){return this.situation.start=+new Date+this.situation.delay/this._speed,this.situation.finish=this.situation.start+this.situation.duration/this._speed,this.initAnimations().step()},queue:function(t){return("function"==typeof t||t instanceof w.Situation)&&this.situations.push(t),this.situation||(this.situation=this.situations.shift()),this},dequeue:function(){return this.stop(),this.situation=this.situations.shift(),this.situation&&(this.situation instanceof w.Situation?this.start():this.situation.call(this)),this},initAnimations:function(){var t,e,i=this.situation;if(i.init)return this;for(t in i.animations)e=this.target()[t](),i.animations[t]instanceof w.Number&&(e=new w.Number(e)),i.animations[t]=e.morph(i.animations[t]);for(t in i.attrs)i.attrs[t]=new w.MorphObj(this.target().attr(t),i.attrs[t]);for(t in i.styles)i.styles[t]=new w.MorphObj(this.target().style(t),i.styles[t]);return i.initialTransformation=this.target().matrixify(),i.init=!0,this},clearQueue:function(){return this.situations=[],this},clearCurrent:function(){return this.situation=null,this},stop:function(t,e){var i=this.active;return this.active=!1,e&&this.clearQueue(),t&&this.situation&&(!i&&this.startCurrent(),this.atEnd()),this.stopAnimFrame(),this.clearCurrent()},reset:function(){if(this.situation){var t=this.situation;this.stop(),this.situation=t,this.atStart()}return this},finish:function(){for(this.stop(!0,!1);this.dequeue().situation&&this.stop(!0,!1););return this.clearQueue().clearCurrent(),this},atStart:function(){return this.at(0,!0)},atEnd:function(){return this.situation.loops===!0&&(this.situation.loops=this.situation.loop+1),"number"==typeof this.situation.loops?this.at(this.situation.loops,!0):this.at(1,!0)},at:function(t,e){var i=this.situation.duration/this._speed;return this.absPos=t,e||(this.situation.reversed&&(this.absPos=1-this.absPos),this.absPos+=this.situation.loop),this.situation.start=+new Date-this.absPos*i,this.situation.finish=this.situation.start+i,this.step(!0)},speed:function(t){return 0===t?this.pause():t?(this._speed=t,this.at(this.absPos,!0)):this._speed},loop:function(t,e){var i=this.last();return i.loops=null==t||t,i.loop=0,e&&(i.reversing=!0),this},pause:function(){return this.paused=!0,this.stopAnimFrame(),this},play:function(){return this.paused?(this.paused=!1,this.at(this.absPos,!0)):this},reverse:function(t){var e=this.last();return"undefined"==typeof t?e.reversed=!e.reversed:e.reversed=t,this},progress:function(t){return t?this.situation.ease(this.pos):this.pos},after:function(t){var e=this.last(),i=function i(n){n.detail.situation==e&&(t.call(this,e),this.off("finished.fx",i))};return this.target().on("finished.fx",i),this._callStart()},during:function(t){var e=this.last(),i=function(i){i.detail.situation==e&&t.call(this,i.detail.pos,w.morph(i.detail.pos),i.detail.eased,e)};return this.target().off("during.fx",i).on("during.fx",i),this.after(function(){this.off("during.fx",i)}),this._callStart()},afterAll:function(t){var e=function e(i){t.call(this),this.off("allfinished.fx",e)};return this.target().off("allfinished.fx",e).on("allfinished.fx",e),this._callStart()},duringAll:function(t){var e=function(e){t.call(this,e.detail.pos,w.morph(e.detail.pos),e.detail.eased,e.detail.situation)};return this.target().off("during.fx",e).on("during.fx",e),this.afterAll(function(){this.off("during.fx",e)}),this._callStart()},last:function(){return this.situations.length?this.situations[this.situations.length-1]:this.situation},add:function(t,e,i){return this.last()[i||"animations"][t]=e,this._callStart()},step:function(t){if(t||(this.absPos=this.timeToAbsPos(+new Date)),this.situation.loops!==!1){var e,i,n;e=Math.max(this.absPos,0),i=Math.floor(e),this.situation.loops===!0||i<this.situation.loops?(this.pos=e-i,n=this.situation.loop,this.situation.loop=i):(this.absPos=this.situation.loops,this.pos=1,n=this.situation.loop-1,this.situation.loop=this.situation.loops),this.situation.reversing&&(this.situation.reversed=this.situation.reversed!=Boolean((this.situation.loop-n)%2))}else this.absPos=Math.min(this.absPos,1),this.pos=this.absPos;this.pos<0&&(this.pos=0),this.situation.reversed&&(this.pos=1-this.pos);var r=this.situation.ease(this.pos);for(var s in this.situation.once)s>this.lastPos&&s<=r&&(this.situation.once[s].call(this.target(),this.pos,r),delete this.situation.once[s]);return this.active&&this.target().fire("during",{pos:this.pos,eased:r,fx:this,situation:this.situation}),this.situation?(this.eachAt(),1==this.pos&&!this.situation.reversed||this.situation.reversed&&0==this.pos?(this.stopAnimFrame(),this.target().fire("finished",{fx:this,situation:this.situation}),this.situations.length||(this.target().fire("allfinished"),this.target().off(".fx"),this.active=!1),this.active?this.dequeue():this.clearCurrent()):!this.paused&&this.active&&this.startAnimFrame(),this.lastPos=r,this):this},eachAt:function(){var t,e,i=this,n=this.target(),r=this.situation;for(t in r.animations)e=[].concat(r.animations[t]).map(function(t){return"string"!=typeof t&&t.at?t.at(r.ease(i.pos),i.pos):t}),n[t].apply(n,e);for(t in r.attrs)e=[t].concat(r.attrs[t]).map(function(t){return"string"!=typeof t&&t.at?t.at(r.ease(i.pos),i.pos):t}),n.attr.apply(n,e);for(t in r.styles)e=[t].concat(r.styles[t]).map(function(t){return"string"!=typeof t&&t.at?t.at(r.ease(i.pos),i.pos):t}),n.style.apply(n,e);if(r.transforms.length){for(e=r.initialTransformation,t=0,len=r.transforms.length;t<len;t++){var s=r.transforms[t];s instanceof w.Matrix?e=s.relative?e.multiply((new w.Matrix).morph(s).at(r.ease(this.pos))):e.morph(s).at(r.ease(this.pos)):(s.relative||s.undo(e.extract()),e=e.multiply(s.at(r.ease(this.pos))))}n.matrix(e)}return this},once:function(t,e,i){return i||(t=this.situation.ease(t)),this.situation.once[t]=e,this},_callStart:function(){return setTimeout(function(){this.start()}.bind(this),0),this}},parent:w.Element,construct:{animate:function(t,e,i){return(this.fx||(this.fx=new w.FX(this))).animate(t,e,i)},delay:function(t){return(this.fx||(this.fx=new w.FX(this))).delay(t)},stop:function(t,e){return this.fx&&this.fx.stop(t,e),this},finish:function(){return this.fx&&this.fx.finish(),this},pause:function(){return this.fx&&this.fx.pause(),this},play:function(){return this.fx&&this.fx.play(),this},speed:function(t){if(this.fx){if(null==t)return this.fx.speed();this.fx.speed(t)}return this}}}),w.MorphObj=w.invent({create:function(t,e){return w.Color.isColor(e)?new w.Color(t).morph(e):w.regex.numberAndUnit.test(e)?new w.Number(t).morph(e):(this.value=t,void(this.destination=e))},extend:{at:function(t,e){return e<1?this.value:this.destination},valueOf:function(){return this.value}}}),w.extend(w.FX,{attr:function(t,e,i){if("object"==typeof t)for(var n in t)this.attr(n,t[n]);else this.add(t,e,"attrs");return this},style:function(t,e){if("object"==typeof t)for(var i in t)this.style(i,t[i]);else this.add(t,e,"styles");return this},x:function(t,e){if(this.target()instanceof w.G)return this.transform({x:t},e),this;var i=new w.Number(t);return i.relative=e,this.add("x",i)},y:function(t,e){if(this.target()instanceof w.G)return this.transform({y:t},e),this;var i=new w.Number(t);return i.relative=e,this.add("y",i)},cx:function(t){return this.add("cx",new w.Number(t))},cy:function(t){return this.add("cy",new w.Number(t))},move:function(t,e){return this.x(t).y(e)},center:function(t,e){return this.cx(t).cy(e)},size:function(t,e){if(this.target()instanceof w.Text)this.attr("font-size",t);else{var i;t&&e||(i=this.target().bbox()),t||(t=i.width/i.height*e),e||(e=i.height/i.width*t),this.add("width",new w.Number(t)).add("height",new w.Number(e))}return this},plot:function(){return this.add("plot",arguments.length>1?[].slice.call(arguments):arguments[0])},leading:function(t){return this.target().leading?this.add("leading",new w.Number(t)):this},viewbox:function(t,e,i,n){return this.target()instanceof w.Container&&this.add("viewbox",new w.ViewBox(t,e,i,n)),this},update:function(t){if(this.target()instanceof w.Stop){if("number"==typeof t||t instanceof w.Number)return this.update({offset:arguments[0],color:arguments[1],opacity:arguments[2]});null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",t.offset)}return this}}),w.Box=w.invent({create:function(t,e,i,n){return"object"!=typeof t||t instanceof w.Element?(4==arguments.length&&(this.x=t,this.y=e,this.width=i,this.height=n),void v(this)):w.Box.call(this,null!=t.left?t.left:t.x,null!=t.top?t.top:t.y,t.width,t.height)},extend:{merge:function(t){var e=new this.constructor;return e.x=Math.min(this.x,t.x),e.y=Math.min(this.y,t.y),e.width=Math.max(this.x+this.width,t.x+t.width)-e.x,e.height=Math.max(this.y+this.height,t.y+t.height)-e.y,v(e)},transform:function(t){var e=1/0,i=-(1/0),n=1/0,r=-(1/0),s=[new w.Point(this.x,this.y),new w.Point(this.x2,this.y),new w.Point(this.x,this.y2),new w.Point(this.x2,this.y2)];return s.forEach(function(s){s=s.transform(t),e=Math.min(e,s.x),i=Math.max(i,s.x),n=Math.min(n,s.y),r=Math.max(r,s.y)}),bbox=new this.constructor,bbox.x=e,bbox.width=i-e,bbox.y=n,bbox.height=r-n,v(bbox),bbox}}}),w.BBox=w.invent({create:function(t){if(w.Box.apply(this,[].slice.call(arguments)),t instanceof w.Element){var i;try{if(e.documentElement.contains){if(!e.documentElement.contains(t.node))throw new Exception("Element not in the dom")}else{for(var n=t.node;n.parentNode;)n=n.parentNode;if(n!=e)throw new Exception("Element not in the dom")}i=t.node.getBBox()}catch(e){if(t instanceof w.Shape){var r=t.clone(w.parser.draw).show();i=r.bbox(),r.remove()}else i={x:t.node.clientLeft,y:t.node.clientTop,width:t.node.clientWidth,height:t.node.clientHeight}}w.Box.call(this,i)}},inherit:w.Box,parent:w.Element,construct:{bbox:function(){return new w.BBox(this)}}}),w.BBox.prototype.constructor=w.BBox,w.extend(w.Element,{tbox:function(){return console.warn("Use of TBox is deprecated and mapped to RBox. Use .rbox() instead."),this.rbox(this.doc())}}),w.RBox=w.invent({create:function(t){w.Box.apply(this,[].slice.call(arguments)),t instanceof w.Element&&w.Box.call(this,t.node.getBoundingClientRect())},inherit:w.Box,parent:w.Element,extend:{addOffset:function(){return this.x+=t.pageXOffset,this.y+=t.pageYOffset,this}},construct:{rbox:function(t){return t?new w.RBox(this).transform(t.screenCTM().inverse()):new w.RBox(this).addOffset()}}}),w.RBox.prototype.constructor=w.RBox,w.Matrix=w.invent({create:function(t){var e,i=f([1,0,0,1,0,0]);for(t=t instanceof w.Element?t.matrixify():"string"==typeof t?m(t):6==arguments.length?f([].slice.call(arguments)):Array.isArray(t)?f(t):"object"==typeof t?t:i,e=C.length-1;e>=0;--e)this[C[e]]=t&&"number"==typeof t[C[e]]?t[C[e]]:i[C[e]]},extend:{extract:function(){var t=c(this,0,1),e=c(this,1,0),i=180/Math.PI*Math.atan2(t.y,t.x)-90;return{x:this.e,y:this.f,transformedX:(this.e*Math.cos(i*Math.PI/180)+this.f*Math.sin(i*Math.PI/180))/Math.sqrt(this.a*this.a+this.b*this.b),transformedY:(this.f*Math.cos(i*Math.PI/180)+this.e*Math.sin(-i*Math.PI/180))/Math.sqrt(this.c*this.c+this.d*this.d),skewX:-i,skewY:180/Math.PI*Math.atan2(e.y,e.x),scaleX:Math.sqrt(this.a*this.a+this.b*this.b),scaleY:Math.sqrt(this.c*this.c+this.d*this.d),rotation:i,a:this.a,b:this.b,c:this.c,d:this.d,e:this.e,f:this.f,matrix:new w.Matrix(this)}},clone:function(){return new w.Matrix(this)},morph:function(t){return this.destination=new w.Matrix(t),this},at:function(t){if(!this.destination)return this;var e=new w.Matrix({a:this.a+(this.destination.a-this.a)*t,b:this.b+(this.destination.b-this.b)*t,c:this.c+(this.destination.c-this.c)*t,d:this.d+(this.destination.d-this.d)*t,e:this.e+(this.destination.e-this.e)*t,f:this.f+(this.destination.f-this.f)*t});return e},multiply:function(t){return new w.Matrix(this.native().multiply(d(t).native()))},inverse:function(){return new w.Matrix(this.native().inverse())},translate:function(t,e){return new w.Matrix(this.native().translate(t||0,e||0))},scale:function(t,e,i,n){return 1==arguments.length?e=t:3==arguments.length&&(n=i,i=e,e=t),this.around(i,n,new w.Matrix(t,0,0,e,0,0))},rotate:function(t,e,i){return t=w.utils.radians(t),this.around(e,i,new w.Matrix(Math.cos(t),Math.sin(t),-Math.sin(t),Math.cos(t),0,0))},flip:function(t,e){return e="number"==typeof t?t:e,"x"==t?this.scale(-1,1,e,0):"y"==t?this.scale(1,-1,0,e):this.scale(-1,-1,e,e)},skew:function(t,e,i,n){return 1==arguments.length?e=t:3==arguments.length&&(n=i,i=e,e=t),t=w.utils.radians(t),e=w.utils.radians(e),this.around(i,n,new w.Matrix(1,Math.tan(e),Math.tan(t),1,0,0))},skewX:function(t,e,i){return this.skew(t,0,e,i)},skewY:function(t,e,i){return this.skew(0,t,e,i)},around:function(t,e,i){return this.multiply(new w.Matrix(1,0,0,1,t||0,e||0)).multiply(i).multiply(new w.Matrix(1,0,0,1,-t||0,-e||0))},native:function(){for(var t=w.parser.native.createSVGMatrix(),e=C.length-1;e>=0;e--)t[C[e]]=this[C[e]];return t},toString:function(){return"matrix("+this.a+","+this.b+","+this.c+","+this.d+","+this.e+","+this.f+")"}},parent:w.Element,construct:{ctm:function(){return new w.Matrix(this.node.getCTM())},screenCTM:function(){if(this instanceof w.Nested){var t=this.rect(1,1),e=t.node.getScreenCTM();return t.remove(),new w.Matrix(e)}return new w.Matrix(this.node.getScreenCTM())}}}),w.Point=w.invent({create:function(t,e){var i,n={x:0,y:0};i=Array.isArray(t)?{x:t[0],y:t[1]}:"object"==typeof t?{x:t.x,y:t.y}:null!=t?{x:t,y:null!=e?e:t}:n,this.x=i.x,this.y=i.y},extend:{clone:function(){
return new w.Point(this)},morph:function(t,e){return this.destination=new w.Point(t,e),this},at:function(t){if(!this.destination)return this;var e=new w.Point({x:this.x+(this.destination.x-this.x)*t,y:this.y+(this.destination.y-this.y)*t});return e},native:function(){var t=w.parser.native.createSVGPoint();return t.x=this.x,t.y=this.y,t},transform:function(t){return new w.Point(this.native().matrixTransform(t.native()))}}}),w.extend(w.Element,{point:function(t,e){return new w.Point(t,e).transform(this.screenCTM().inverse())}}),w.extend(w.Element,{attr:function(t,e,i){if(null==t){for(t={},e=this.node.attributes,i=e.length-1;i>=0;i--)t[e[i].nodeName]=w.regex.isNumber.test(e[i].nodeValue)?parseFloat(e[i].nodeValue):e[i].nodeValue;return t}if("object"==typeof t)for(e in t)this.attr(e,t[e]);else if(null===e)this.node.removeAttribute(t);else{if(null==e)return e=this.node.getAttribute(t),null==e?w.defaults.attrs[t]:w.regex.isNumber.test(e)?parseFloat(e):e;"stroke-width"==t?this.attr("stroke",parseFloat(e)>0?this._stroke:null):"stroke"==t&&(this._stroke=e),"fill"!=t&&"stroke"!=t||(w.regex.isImage.test(e)&&(e=this.doc().defs().image(e,0,0)),e instanceof w.Image&&(e=this.doc().defs().pattern(0,0,function(){this.add(e)}))),"number"==typeof e?e=new w.Number(e):w.Color.isColor(e)?e=new w.Color(e):Array.isArray(e)&&(e=new w.Array(e)),"leading"==t?this.leading&&this.leading(e):"string"==typeof i?this.node.setAttributeNS(i,t,e.toString()):this.node.setAttribute(t,e.toString()),!this.rebuild||"font-size"!=t&&"x"!=t||this.rebuild(t,e)}return this}}),w.extend(w.Element,{transform:function(t,e){var i,n=this;if("object"!=typeof t)return i=new w.Matrix(n).extract(),"string"==typeof t?i[t]:i;if(i=new w.Matrix(n),e=!!e||!!t.relative,null!=t.a)i=e?i.multiply(new w.Matrix(t)):new w.Matrix(t);else if(null!=t.rotation)p(t,n),i=e?i.rotate(t.rotation,t.cx,t.cy):i.rotate(t.rotation-i.extract().rotation,t.cx,t.cy);else if(null!=t.scale||null!=t.scaleX||null!=t.scaleY){if(p(t,n),t.scaleX=null!=t.scale?t.scale:null!=t.scaleX?t.scaleX:1,t.scaleY=null!=t.scale?t.scale:null!=t.scaleY?t.scaleY:1,!e){var r=i.extract();t.scaleX=1*t.scaleX/r.scaleX,t.scaleY=1*t.scaleY/r.scaleY}i=i.scale(t.scaleX,t.scaleY,t.cx,t.cy)}else if(null!=t.skew||null!=t.skewX||null!=t.skewY){if(p(t,n),t.skewX=null!=t.skew?t.skew:null!=t.skewX?t.skewX:0,t.skewY=null!=t.skew?t.skew:null!=t.skewY?t.skewY:0,!e){var r=i.extract();i=i.multiply((new w.Matrix).skew(r.skewX,r.skewY,t.cx,t.cy).inverse())}i=i.skew(t.skewX,t.skewY,t.cx,t.cy)}else t.flip?i=i.flip(t.flip,null==t.offset?n.bbox()["c"+t.flip]:t.offset):null==t.x&&null==t.y||(e?i=i.translate(t.x,t.y):(null!=t.x&&(i.e=t.x),null!=t.y&&(i.f=t.y)));return this.attr("transform",i)}}),w.extend(w.FX,{transform:function(t,e){var i,n=this.target();return"object"!=typeof t?(i=new w.Matrix(n).extract(),"string"==typeof t?i[t]:i):(e=!!e||!!t.relative,null!=t.a?i=new w.Matrix(t):null!=t.rotation?(p(t,n),i=new w.Rotate(t.rotation,t.cx,t.cy)):null!=t.scale||null!=t.scaleX||null!=t.scaleY?(p(t,n),t.scaleX=null!=t.scale?t.scale:null!=t.scaleX?t.scaleX:1,t.scaleY=null!=t.scale?t.scale:null!=t.scaleY?t.scaleY:1,i=new w.Scale(t.scaleX,t.scaleY,t.cx,t.cy)):null!=t.skewX||null!=t.skewY?(p(t,n),t.skewX=null!=t.skewX?t.skewX:0,t.skewY=null!=t.skewY?t.skewY:0,i=new w.Skew(t.skewX,t.skewY,t.cx,t.cy)):t.flip?i=(new w.Matrix).flip(t.flip,null==t.offset?n.bbox()["c"+t.flip]:t.offset):null==t.x&&null==t.y||(i=new w.Translate(t.x,t.y)),i?(i.relative=e,this.last().transforms.push(i),this._callStart()):this)}}),w.extend(w.Element,{untransform:function(){return this.attr("transform",null)},matrixify:function(){var t=(this.attr("transform")||"").split(/\)\s*,?\s*/).slice(0,-1).map(function(t){var e=t.trim().split("(");return[e[0],e[1].split(w.regex.matrixElements).map(function(t){return parseFloat(t)})]}).reduce(function(t,e){return"matrix"==e[0]?t.multiply(f(e[1])):t[e[0]].apply(t,e[1])},new w.Matrix);return t},toParent:function(t){if(this==t)return this;var e=this.screenCTM(),i=t.screenCTM().inverse();return this.addTo(t).untransform().transform(i.multiply(e)),this},toDoc:function(){return this.toParent(this.doc())}}),w.Transformation=w.invent({create:function(t,e){if(arguments.length>1&&"boolean"!=typeof e)return this.constructor.call(this,[].slice.call(arguments));if(Array.isArray(t))for(var i=0,n=this.arguments.length;i<n;++i)this[this.arguments[i]]=t[i];else if("object"==typeof t)for(var i=0,n=this.arguments.length;i<n;++i)this[this.arguments[i]]=t[this.arguments[i]];this.inversed=!1,e===!0&&(this.inversed=!0)},extend:{arguments:[],method:"",at:function(t){for(var e=[],i=0,n=this.arguments.length;i<n;++i)e.push(this[this.arguments[i]]);var r=this._undo||new w.Matrix;return r=(new w.Matrix).morph(w.Matrix.prototype[this.method].apply(r,e)).at(t),this.inversed?r.inverse():r},undo:function(t){for(var e=0,i=this.arguments.length;e<i;++e)t[this.arguments[e]]="undefined"==typeof this[this.arguments[e]]?0:t[this.arguments[e]];return t.cx=this.cx,t.cy=this.cy,this._undo=new(w[a(this.method)])(t,!0).at(1),this}}}),w.Translate=w.invent({parent:w.Matrix,inherit:w.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["transformedX","transformedY"],method:"translate"}}),w.Rotate=w.invent({parent:w.Matrix,inherit:w.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["rotation","cx","cy"],method:"rotate",at:function(t){var e=(new w.Matrix).rotate((new w.Number).morph(this.rotation-(this._undo?this._undo.rotation:0)).at(t),this.cx,this.cy);return this.inversed?e.inverse():e},undo:function(t){this._undo=t}}}),w.Scale=w.invent({parent:w.Matrix,inherit:w.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["scaleX","scaleY","cx","cy"],method:"scale"}}),w.Skew=w.invent({parent:w.Matrix,inherit:w.Transformation,create:function(t,e){this.constructor.apply(this,[].slice.call(arguments))},extend:{arguments:["skewX","skewY","cx","cy"],method:"skew"}}),w.extend(w.Element,{style:function(t,e){if(0==arguments.length)return this.node.style.cssText||"";if(arguments.length<2)if("object"==typeof t)for(e in t)this.style(e,t[e]);else{if(!w.regex.isCss.test(t))return this.node.style[o(t)];t=t.split(";");for(var i=0;i<t.length;i++)e=t[i].split(":"),this.style(e[0].replace(/\s+/g,""),e[1])}else this.node.style[o(t)]=null===e||w.regex.isBlank.test(e)?"":e;return this}}),w.Parent=w.invent({create:function(t){this.constructor.call(this,t)},inherit:w.Element,extend:{children:function(){return w.utils.map(w.utils.filterSVGElements(this.node.childNodes),function(t){return w.adopt(t)})},add:function(t,e){return null==e?this.node.appendChild(t.node):t.node!=this.node.childNodes[e]&&this.node.insertBefore(t.node,this.node.childNodes[e]),this},put:function(t,e){return this.add(t,e),t},has:function(t){return this.index(t)>=0},index:function(t){return[].slice.call(this.node.childNodes).indexOf(t.node)},get:function(t){return w.adopt(this.node.childNodes[t])},first:function(){return this.get(0)},last:function(){return this.get(this.node.childNodes.length-1)},each:function(t,e){var i,n,r=this.children();for(i=0,n=r.length;i<n;i++)r[i]instanceof w.Element&&t.apply(r[i],[i,r]),e&&r[i]instanceof w.Container&&r[i].each(t,e);return this},removeElement:function(t){return this.node.removeChild(t.node),this},clear:function(){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return delete this._defs,this},defs:function(){return this.doc().defs()}}}),w.extend(w.Parent,{ungroup:function(t,e){return 0===e||this instanceof w.Defs?this:(t=t||(this instanceof w.Doc?this:this.parent(w.Parent)),e=e||1/0,this.each(function(){return this instanceof w.Defs?this:this instanceof w.Parent?this.ungroup(t,e-1):this.toParent(t)}),this.node.firstChild||this.remove(),this)},flatten:function(t,e){return this.ungroup(t,e)}}),w.Container=w.invent({create:function(t){this.constructor.call(this,t)},inherit:w.Parent}),w.ViewBox=w.invent({create:function(t){var e,i,n,r,s,o,a,h,u=[0,0,0,0],l=1,c=1,f=/[+-]?(?:\d+(?:\.\d*)?|\.\d+)(?:e[+-]?\d+)?/gi;if(t instanceof w.Element){for(a=t,h=t,o=(t.attr("viewBox")||"").match(f),s=t.bbox,n=new w.Number(t.width()),r=new w.Number(t.height());"%"==n.unit;)l*=n.value,n=new w.Number(a instanceof w.Doc?a.parent().offsetWidth:a.parent().width()),a=a.parent();for(;"%"==r.unit;)c*=r.value,r=new w.Number(h instanceof w.Doc?h.parent().offsetHeight:h.parent().height()),h=h.parent();this.x=0,this.y=0,this.width=n*l,this.height=r*c,this.zoom=1,o&&(e=parseFloat(o[0]),i=parseFloat(o[1]),n=parseFloat(o[2]),r=parseFloat(o[3]),this.zoom=this.width/this.height>n/r?this.height/r:this.width/n,this.x=e,this.y=i,this.width=n,this.height=r)}else t="string"==typeof t?t.match(f).map(function(t){return parseFloat(t)}):Array.isArray(t)?t:"object"==typeof t?[t.x,t.y,t.width,t.height]:4==arguments.length?[].slice.call(arguments):u,this.x=t[0],this.y=t[1],this.width=t[2],this.height=t[3]},extend:{toString:function(){return this.x+" "+this.y+" "+this.width+" "+this.height},morph:function(t,e,i,n){return this.destination=new w.ViewBox(t,e,i,n),this},at:function(t){return this.destination?new w.ViewBox([this.x+(this.destination.x-this.x)*t,this.y+(this.destination.y-this.y)*t,this.width+(this.destination.width-this.width)*t,this.height+(this.destination.height-this.height)*t]):this}},parent:w.Container,construct:{viewbox:function(t,e,i,n){return 0==arguments.length?new w.ViewBox(this):this.attr("viewBox",new w.ViewBox(t,e,i,n))}}}),["click","dblclick","mousedown","mouseup","mouseover","mouseout","mousemove","touchstart","touchmove","touchleave","touchend","touchcancel"].forEach(function(t){w.Element.prototype[t]=function(e){var i=this;return this.node["on"+t]="function"==typeof e?function(){return e.apply(i,arguments)}:null,this}}),w.listeners=[],w.handlerMap=[],w.listenerId=0,w.on=function(t,e,i,n){var r=i.bind(n||t.instance||t),s=(w.handlerMap.indexOf(t)+1||w.handlerMap.push(t))-1,o=e.split(".")[0],a=e.split(".")[1]||"*";w.listeners[s]=w.listeners[s]||{},w.listeners[s][o]=w.listeners[s][o]||{},w.listeners[s][o][a]=w.listeners[s][o][a]||{},i._svgjsListenerId||(i._svgjsListenerId=++w.listenerId),w.listeners[s][o][a][i._svgjsListenerId]=r,t.addEventListener(o,r,!1)},w.off=function(t,e,i){var n=w.handlerMap.indexOf(t),r=e&&e.split(".")[0],s=e&&e.split(".")[1];if(n!=-1)if(i){if("function"==typeof i&&(i=i._svgjsListenerId),!i)return;w.listeners[n][r]&&w.listeners[n][r][s||"*"]&&(t.removeEventListener(r,w.listeners[n][r][s||"*"][i],!1),delete w.listeners[n][r][s||"*"][i])}else if(s&&r){if(w.listeners[n][r]&&w.listeners[n][r][s]){for(i in w.listeners[n][r][s])w.off(t,[r,s].join("."),i);delete w.listeners[n][r][s]}}else if(s)for(e in w.listeners[n])for(namespace in w.listeners[n][e])s===namespace&&w.off(t,[e,s].join("."));else if(r){if(w.listeners[n][r]){for(namespace in w.listeners[n][r])w.off(t,[r,namespace].join("."));delete w.listeners[n][r]}}else{for(e in w.listeners[n])w.off(t,e);delete w.listeners[n],delete w.handlerMap[n]}},w.extend(w.Element,{on:function(t,e,i){return w.on(this.node,t,e,i),this},off:function(t,e){return w.off(this.node,t,e),this},fire:function(t,e){return t instanceof Event?this.node.dispatchEvent(t):this.node.dispatchEvent(t=new N(t,{detail:e,cancelable:!0})),this._event=t,this},event:function(){return this._event}}),w.Defs=w.invent({create:"defs",inherit:w.Container}),w.G=w.invent({create:"g",inherit:w.Container,extend:{x:function(t){return null==t?this.transform("x"):this.transform({x:t-this.x()},!0)},y:function(t){return null==t?this.transform("y"):this.transform({y:t-this.y()},!0)},cx:function(t){return null==t?this.gbox().cx:this.x(t-this.gbox().width/2)},cy:function(t){return null==t?this.gbox().cy:this.y(t-this.gbox().height/2)},gbox:function(){var t=this.bbox(),e=this.transform();return t.x+=e.x,t.x2+=e.x,t.cx+=e.x,t.y+=e.y,t.y2+=e.y,t.cy+=e.y,t}},construct:{group:function(){return this.put(new w.G)}}}),w.extend(w.Element,{siblings:function(){return this.parent().children()},position:function(){return this.parent().index(this)},next:function(){return this.siblings()[this.position()+1]},previous:function(){return this.siblings()[this.position()-1]},forward:function(){var t=this.position()+1,e=this.parent();return e.removeElement(this).add(this,t),e instanceof w.Doc&&e.node.appendChild(e.defs().node),this},backward:function(){var t=this.position();return t>0&&this.parent().removeElement(this).add(this,t-1),this},front:function(){var t=this.parent();return t.node.appendChild(this.node),t instanceof w.Doc&&t.node.appendChild(t.defs().node),this},back:function(){return this.position()>0&&this.parent().removeElement(this).add(this,0),this},before:function(t){t.remove();var e=this.position();return this.parent().add(t,e),this},after:function(t){t.remove();var e=this.position();return this.parent().add(t,e+1),this}}),w.Mask=w.invent({create:function(){this.constructor.call(this,w.create("mask")),this.targets=[]},inherit:w.Container,extend:{remove:function(){for(var t=this.targets.length-1;t>=0;t--)this.targets[t]&&this.targets[t].unmask();return this.targets=[],this.parent().removeElement(this),this}},construct:{mask:function(){return this.defs().put(new w.Mask)}}}),w.extend(w.Element,{maskWith:function(t){return this.masker=t instanceof w.Mask?t:this.parent().mask().add(t),this.masker.targets.push(this),this.attr("mask",'url("#'+this.masker.attr("id")+'")')},unmask:function(){return delete this.masker,this.attr("mask",null)}}),w.ClipPath=w.invent({create:function(){this.constructor.call(this,w.create("clipPath")),this.targets=[]},inherit:w.Container,extend:{remove:function(){for(var t=this.targets.length-1;t>=0;t--)this.targets[t]&&this.targets[t].unclip();return this.targets=[],this.parent().removeElement(this),this}},construct:{clip:function(){return this.defs().put(new w.ClipPath)}}}),w.extend(w.Element,{clipWith:function(t){return this.clipper=t instanceof w.ClipPath?t:this.parent().clip().add(t),this.clipper.targets.push(this),this.attr("clip-path",'url("#'+this.clipper.attr("id")+'")')},unclip:function(){return delete this.clipper,this.attr("clip-path",null)}}),w.Gradient=w.invent({create:function(t){this.constructor.call(this,w.create(t+"Gradient")),this.type=t},inherit:w.Container,extend:{at:function(t,e,i){return this.put(new w.Stop).update(t,e,i)},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},fill:function(){return"url(#"+this.id()+")"},toString:function(){return this.fill()},attr:function(t,e,i){return"transform"==t&&(t="gradientTransform"),w.Container.prototype.attr.call(this,t,e,i)}},construct:{gradient:function(t,e){return this.defs().gradient(t,e)}}}),w.extend(w.Gradient,w.FX,{from:function(t,e){return"radial"==(this._target||this).type?this.attr({fx:new w.Number(t),fy:new w.Number(e)}):this.attr({x1:new w.Number(t),y1:new w.Number(e)})},to:function(t,e){return"radial"==(this._target||this).type?this.attr({cx:new w.Number(t),cy:new w.Number(e)}):this.attr({x2:new w.Number(t),y2:new w.Number(e)})}}),w.extend(w.Defs,{gradient:function(t,e){return this.put(new w.Gradient(t)).update(e)}}),w.Stop=w.invent({create:"stop",inherit:w.Element,extend:{update:function(t){return("number"==typeof t||t instanceof w.Number)&&(t={offset:arguments[0],color:arguments[1],opacity:arguments[2]}),null!=t.opacity&&this.attr("stop-opacity",t.opacity),null!=t.color&&this.attr("stop-color",t.color),null!=t.offset&&this.attr("offset",new w.Number(t.offset)),this}}}),w.Pattern=w.invent({create:"pattern",inherit:w.Container,extend:{fill:function(){return"url(#"+this.id()+")"},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},toString:function(){return this.fill()},attr:function(t,e,i){return"transform"==t&&(t="patternTransform"),w.Container.prototype.attr.call(this,t,e,i)}},construct:{pattern:function(t,e,i){return this.defs().pattern(t,e,i)}}}),w.extend(w.Defs,{pattern:function(t,e,i){return this.put(new w.Pattern).update(i).attr({x:0,y:0,width:t,height:e,patternUnits:"userSpaceOnUse"})}}),w.Doc=w.invent({create:function(t){t&&(t="string"==typeof t?e.getElementById(t):t,"svg"==t.nodeName?this.constructor.call(this,t):(this.constructor.call(this,w.create("svg")),t.appendChild(this.node),this.size("100%","100%")),this.namespace().defs())},inherit:w.Container,extend:{namespace:function(){return this.attr({xmlns:w.ns,version:"1.1"}).attr("xmlns:xlink",w.xlink,w.xmlns).attr("xmlns:svgjs",w.svgjs,w.xmlns)},defs:function(){if(!this._defs){var t;(t=this.node.getElementsByTagName("defs")[0])?this._defs=w.adopt(t):this._defs=new w.Defs,this.node.appendChild(this._defs.node)}return this._defs},parent:function(){return"#document"==this.node.parentNode.nodeName?null:this.node.parentNode},spof:function(t){var e=this.node.getScreenCTM();return e&&this.style("left",-e.e%1+"px").style("top",-e.f%1+"px"),this},remove:function(){return this.parent()&&this.parent().removeChild(this.node),this}}}),w.Shape=w.invent({create:function(t){this.constructor.call(this,t)},inherit:w.Element}),w.Bare=w.invent({create:function(t,e){if(this.constructor.call(this,w.create(t)),e)for(var i in e.prototype)"function"==typeof e.prototype[i]&&(this[i]=e.prototype[i])},inherit:w.Element,extend:{words:function(t){for(;this.node.hasChildNodes();)this.node.removeChild(this.node.lastChild);return this.node.appendChild(e.createTextNode(t)),this}}}),w.extend(w.Parent,{element:function(t,e){return this.put(new w.Bare(t,e))}}),w.Symbol=w.invent({create:"symbol",inherit:w.Container,construct:{symbol:function(){return this.put(new w.Symbol)}}}),w.Use=w.invent({create:"use",inherit:w.Shape,extend:{element:function(t,e){return this.attr("href",(e||"")+"#"+t,w.xlink)}},construct:{use:function(t,e){return this.put(new w.Use).element(t,e)}}}),w.Rect=w.invent({create:"rect",inherit:w.Shape,construct:{rect:function(t,e){return this.put(new w.Rect).size(t,e)}}}),w.Circle=w.invent({create:"circle",inherit:w.Shape,construct:{circle:function(t){return this.put(new w.Circle).rx(new w.Number(t).divide(2)).move(0,0)}}}),w.extend(w.Circle,w.FX,{rx:function(t){return this.attr("r",t)},ry:function(t){return this.rx(t)}}),w.Ellipse=w.invent({create:"ellipse",inherit:w.Shape,construct:{ellipse:function(t,e){return this.put(new w.Ellipse).size(t,e).move(0,0)}}}),w.extend(w.Ellipse,w.Rect,w.FX,{rx:function(t){return this.attr("rx",t)},ry:function(t){return this.attr("ry",t)}}),w.extend(w.Circle,w.Ellipse,{x:function(t){return null==t?this.cx()-this.rx():this.cx(t+this.rx())},y:function(t){return null==t?this.cy()-this.ry():this.cy(t+this.ry())},cx:function(t){return null==t?this.attr("cx"):this.attr("cx",t)},cy:function(t){return null==t?this.attr("cy"):this.attr("cy",t)},width:function(t){return null==t?2*this.rx():this.rx(new w.Number(t).divide(2))},height:function(t){return null==t?2*this.ry():this.ry(new w.Number(t).divide(2))},size:function(t,e){var i=l(this,t,e);return this.rx(new w.Number(i.width).divide(2)).ry(new w.Number(i.height).divide(2))}}),w.Line=w.invent({create:"line",inherit:w.Shape,extend:{array:function(){return new w.PointArray([[this.attr("x1"),this.attr("y1")],[this.attr("x2"),this.attr("y2")]])},plot:function(t,e,i,n){return null==t?this.array():(t="undefined"!=typeof e?{x1:t,y1:e,x2:i,y2:n}:new w.PointArray(t).toLine(),this.attr(t))},move:function(t,e){return this.attr(this.array().move(t,e).toLine())},size:function(t,e){var i=l(this,t,e);return this.attr(this.array().size(i.width,i.height).toLine())}},construct:{line:function(t,e,i,n){return w.Line.prototype.plot.apply(this.put(new w.Line),null!=t?[t,e,i,n]:[0,0,0,0])}}}),w.Polyline=w.invent({create:"polyline",inherit:w.Shape,construct:{polyline:function(t){return this.put(new w.Polyline).plot(t||new w.PointArray)}}}),w.Polygon=w.invent({create:"polygon",inherit:w.Shape,construct:{polygon:function(t){return this.put(new w.Polygon).plot(t||new w.PointArray)}}}),w.extend(w.Polyline,w.Polygon,{array:function(){return this._array||(this._array=new w.PointArray(this.attr("points")))},plot:function(t){return null==t?this.array():this.attr("points",this._array=new w.PointArray(t))},move:function(t,e){return this.attr("points",this.array().move(t,e))},size:function(t,e){var i=l(this,t,e);return this.attr("points",this.array().size(i.width,i.height))}}),w.extend(w.Line,w.Polyline,w.Polygon,{morphArray:w.PointArray,x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)},width:function(t){var e=this.bbox();return null==t?e.width:this.size(t,e.height)},height:function(t){var e=this.bbox();return null==t?e.height:this.size(e.width,t)}}),w.Path=w.invent({create:"path",inherit:w.Shape,extend:{morphArray:w.PathArray,array:function(){return this._array||(this._array=new w.PathArray(this.attr("d")))},plot:function(t){return null==t?this.array():this.attr("d",this._array=new w.PathArray(t))},move:function(t,e){return this.attr("d",this.array().move(t,e))},x:function(t){return null==t?this.bbox().x:this.move(t,this.bbox().y)},y:function(t){return null==t?this.bbox().y:this.move(this.bbox().x,t)},size:function(t,e){var i=l(this,t,e);return this.attr("d",this.array().size(i.width,i.height))},width:function(t){return null==t?this.bbox().width:this.size(t,this.bbox().height)},height:function(t){return null==t?this.bbox().height:this.size(this.bbox().width,t)}},construct:{path:function(t){return this.put(new w.Path).plot(t||new w.PathArray)}}}),w.Image=w.invent({create:"image",inherit:w.Shape,extend:{load:function(t){if(!t)return this;var i=this,n=e.createElement("img");return n.onload=function(){var e=i.parent(w.Pattern);null!==e&&(0==i.width()&&0==i.height()&&i.size(n.width,n.height),e&&0==e.width()&&0==e.height()&&e.size(i.width(),i.height()),"function"==typeof i._loaded&&i._loaded.call(i,{width:n.width,height:n.height,ratio:n.width/n.height,url:t}))},n.onerror=function(t){"function"==typeof i._error&&i._error.call(i,t)},this.attr("href",n.src=this.src=t,w.xlink)},loaded:function(t){return this._loaded=t,this},error:function(t){return this._error=t,this}},construct:{image:function(t,e,i){return this.put(new w.Image).load(t).size(e||0,i||e||0)}}}),w.Text=w.invent({create:function(){this.constructor.call(this,w.create("text")),this.dom.leading=new w.Number(1.3),this._rebuild=!0,this._build=!1,this.attr("font-family",w.defaults.attrs["font-family"])},inherit:w.Shape,extend:{x:function(t){return null==t?this.attr("x"):this.attr("x",t)},y:function(t){var e=this.attr("y"),i="number"==typeof e?e-this.bbox().y:0;return null==t?"number"==typeof e?e-i:e:this.attr("y","number"==typeof t?t+i:t)},cx:function(t){return null==t?this.bbox().cx:this.x(t-this.bbox().width/2)},cy:function(t){return null==t?this.bbox().cy:this.y(t-this.bbox().height/2)},text:function(t){if("undefined"==typeof t){for(var t="",e=this.node.childNodes,i=0,n=e.length;i<n;++i)0!=i&&3!=e[i].nodeType&&1==w.adopt(e[i]).dom.newLined&&(t+="\n"),t+=e[i].textContent;return t}if(this.clear().build(!0),"function"==typeof t)t.call(this,this);else{t=t.split("\n");for(var i=0,r=t.length;i<r;i++)this.tspan(t[i]).newLine()}return this.build(!1).rebuild()},size:function(t){return this.attr("font-size",t).rebuild()},leading:function(t){return null==t?this.dom.leading:(this.dom.leading=new w.Number(t),this.rebuild())},lines:function(){var t=(this.textPath&&this.textPath()||this).node,e=w.utils.map(w.utils.filterSVGElements(t.childNodes),function(t){return w.adopt(t)});return new w.Set(e)},rebuild:function(t){if("boolean"==typeof t&&(this._rebuild=t),this._rebuild){var e=this,i=0,n=this.dom.leading*new w.Number(this.attr("font-size"));this.lines().each(function(){this.dom.newLined&&(e.textPath()||this.attr("x",e.attr("x")),"\n"==this.text()?i+=n:(this.attr("dy",n+i),i=0))}),this.fire("rebuild")}return this},build:function(t){return this._build=!!t,this},setData:function(t){return this.dom=t,this.dom.leading=new w.Number(t.leading||1.3),this}},construct:{text:function(t){return this.put(new w.Text).text(t)},plain:function(t){return this.put(new w.Text).plain(t)}}}),w.Tspan=w.invent({create:"tspan",inherit:w.Shape,extend:{text:function(t){return null==t?this.node.textContent+(this.dom.newLined?"\n":""):("function"==typeof t?t.call(this,this):this.plain(t),this)},dx:function(t){return this.attr("dx",t)},dy:function(t){return this.attr("dy",t)},newLine:function(){var t=this.parent(w.Text);return this.dom.newLined=!0,this.dy(t.dom.leading*t.attr("font-size")).attr("x",t.x())}}}),w.extend(w.Text,w.Tspan,{plain:function(t){return this._build===!1&&this.clear(),this.node.appendChild(e.createTextNode(t)),this},tspan:function(t){var e=(this.textPath&&this.textPath()||this).node,i=new w.Tspan;return this._build===!1&&this.clear(),e.appendChild(i.node),i.text(t)},clear:function(){for(var t=(this.textPath&&this.textPath()||this).node;t.hasChildNodes();)t.removeChild(t.lastChild);return this},length:function(){return this.node.getComputedTextLength()}}),w.TextPath=w.invent({create:"textPath",inherit:w.Parent,parent:w.Text,construct:{path:function(t){for(var e=new w.TextPath,i=this.doc().defs().path(t);this.node.hasChildNodes();)e.node.appendChild(this.node.firstChild);return this.node.appendChild(e.node),e.attr("href","#"+i,w.xlink),this},array:function(){var t=this.track();return t?t.array():null},plot:function(t){var e=this.track(),i=null;return e&&(i=e.plot(t)),null==t?i:this},track:function(){var t=this.textPath();if(t)return t.reference("href")},textPath:function(){if(this.node.firstChild&&"textPath"==this.node.firstChild.nodeName)return w.adopt(this.node.firstChild)}}}),w.Nested=w.invent({create:function(){this.constructor.call(this,w.create("svg")),this.style("overflow","visible")},inherit:w.Container,construct:{nested:function(){return this.put(new w.Nested)}}}),w.A=w.invent({create:"a",inherit:w.Container,extend:{to:function(t){return this.attr("href",t,w.xlink)},show:function(t){return this.attr("show",t,w.xlink)},target:function(t){return this.attr("target",t)}},construct:{link:function(t){return this.put(new w.A).to(t)}}}),w.extend(w.Element,{linkTo:function(t){var e=new w.A;return"function"==typeof t?t.call(e,e):e.to(t),this.parent().put(e).put(this)}}),w.Marker=w.invent({create:"marker",inherit:w.Container,extend:{width:function(t){return this.attr("markerWidth",t)},height:function(t){return this.attr("markerHeight",t)},ref:function(t,e){return this.attr("refX",t).attr("refY",e)},update:function(t){return this.clear(),"function"==typeof t&&t.call(this,this),this},toString:function(){return"url(#"+this.id()+")"}},construct:{marker:function(t,e,i){return this.defs().marker(t,e,i)}}}),w.extend(w.Defs,{marker:function(t,e,i){return this.put(new w.Marker).size(t,e).ref(t/2,e/2).viewbox(0,0,t,e).attr("orient","auto").update(i)}}),w.extend(w.Line,w.Polyline,w.Polygon,w.Path,{marker:function(t,e,i,n){var r=["marker"];return"all"!=t&&r.push(t),r=r.join("-"),t=arguments[1]instanceof w.Marker?arguments[1]:this.doc().marker(e,i,n),this.attr(r,t)}});var b={stroke:["color","width","opacity","linecap","linejoin","miterlimit","dasharray","dashoffset"],fill:["color","opacity","rule"],prefix:function(t,e){return"color"==e?t:t+"-"+e}};["fill","stroke"].forEach(function(t){var e,i={};i[t]=function(i){if("undefined"==typeof i)return this;if("string"==typeof i||w.Color.isRgb(i)||i&&"function"==typeof i.fill)this.attr(t,i);else for(e=b[t].length-1;e>=0;e--)null!=i[b[t][e]]&&this.attr(b.prefix(t,b[t][e]),i[b[t][e]]);return this},w.extend(w.Element,w.FX,i)}),w.extend(w.Element,w.FX,{rotate:function(t,e,i){return this.transform({rotation:t,cx:e,cy:i})},skew:function(t,e,i,n){return 1==arguments.length||3==arguments.length?this.transform({skew:t,cx:e,cy:i}):this.transform({skewX:t,skewY:e,cx:i,cy:n})},scale:function(t,e,i,n){return 1==arguments.length||3==arguments.length?this.transform({scale:t,cx:e,cy:i}):this.transform({scaleX:t,scaleY:e,cx:i,cy:n})},translate:function(t,e){return this.transform({x:t,y:e})},flip:function(t,e){return e="number"==typeof t?t:e,this.transform({flip:t||"both",offset:e})},matrix:function(t){return this.attr("transform",new w.Matrix(6==arguments.length?[].slice.call(arguments):t))},opacity:function(t){return this.attr("opacity",t)},dx:function(t){return this.x(new w.Number(t).plus(this instanceof w.FX?0:this.x()),!0)},dy:function(t){return this.y(new w.Number(t).plus(this instanceof w.FX?0:this.y()),!0)},dmove:function(t,e){return this.dx(t).dy(e)}}),w.extend(w.Rect,w.Ellipse,w.Circle,w.Gradient,w.FX,{radius:function(t,e){var i=(this._target||this).type;return"radial"==i||"circle"==i?this.attr("r",new w.Number(t)):this.rx(t).ry(null==e?t:e)}}),w.extend(w.Path,{length:function(){return this.node.getTotalLength()},pointAt:function(t){return this.node.getPointAtLength(t)}}),w.extend(w.Parent,w.Text,w.Tspan,w.FX,{font:function(t,e){if("object"==typeof t)for(e in t)this.font(e,t[e]);return"leading"==t?this.leading(e):"anchor"==t?this.attr("text-anchor",e):"size"==t||"family"==t||"weight"==t||"stretch"==t||"variant"==t||"style"==t?this.attr("font-"+t,e):this.attr(t,e)}}),w.Set=w.invent({create:function(t){Array.isArray(t)?this.members=t:this.clear()},extend:{add:function(){var t,e,i=[].slice.call(arguments);for(t=0,e=i.length;t<e;t++)this.members.push(i[t]);return this},remove:function(t){var e=this.index(t);return e>-1&&this.members.splice(e,1),this},each:function(t){for(var e=0,i=this.members.length;e<i;e++)t.apply(this.members[e],[e,this.members]);return this},clear:function(){return this.members=[],this},length:function(){return this.members.length},has:function(t){return this.index(t)>=0},index:function(t){return this.members.indexOf(t)},get:function(t){return this.members[t]},first:function(){return this.get(0)},last:function(){return this.get(this.members.length-1)},valueOf:function(){return this.members},bbox:function(){if(0==this.members.length)return new w.RBox;var t=this.members[0].rbox(this.members[0].doc());return this.each(function(){t=t.merge(this.rbox(this.doc()))}),t}},construct:{set:function(t){return new w.Set(t)}}}),w.FX.Set=w.invent({create:function(t){this.set=t}}),w.Set.inherit=function(){var t,e=[];for(var t in w.Shape.prototype)"function"==typeof w.Shape.prototype[t]&&"function"!=typeof w.Set.prototype[t]&&e.push(t);e.forEach(function(t){w.Set.prototype[t]=function(){for(var e=0,i=this.members.length;e<i;e++)this.members[e]&&"function"==typeof this.members[e][t]&&this.members[e][t].apply(this.members[e],arguments);return"animate"==t?this.fx||(this.fx=new w.FX.Set(this)):this}}),e=[];for(var t in w.FX.prototype)"function"==typeof w.FX.prototype[t]&&"function"!=typeof w.FX.Set.prototype[t]&&e.push(t);e.forEach(function(t){w.FX.Set.prototype[t]=function(){for(var e=0,i=this.set.members.length;e<i;e++)this.set.members[e].fx[t].apply(this.set.members[e].fx,arguments);return this}})},w.extend(w.Element,{data:function(t,e,i){if("object"==typeof t)for(e in t)this.data(e,t[e]);else if(arguments.length<2)try{return JSON.parse(this.attr("data-"+t))}catch(e){return this.attr("data-"+t)}else this.attr("data-"+t,null===e?null:i===!0||"string"==typeof e||"number"==typeof e?e:JSON.stringify(e));return this}}),w.extend(w.Element,{remember:function(t,e){if("object"==typeof arguments[0])for(var e in t)this.remember(e,t[e]);else{if(1==arguments.length)return this.memory()[t];this.memory()[t]=e}return this},forget:function(){if(0==arguments.length)this._memory={};else for(var t=arguments.length-1;t>=0;t--)delete this.memory()[arguments[t]];return this},memory:function(){return this._memory||(this._memory={})}}),w.get=function(t){var i=e.getElementById(g(t)||t);return w.adopt(i)},w.select=function(t,i){return new w.Set(w.utils.map((i||e).querySelectorAll(t),function(t){return w.adopt(t)}))},w.extend(w.Parent,{select:function(t){return w.select(t,this.node)}});var C="abcdef".split("");if("function"!=typeof N){var N=function(t,i){
i=i||{bubbles:!1,cancelable:!1,detail:void 0};var n=e.createEvent("CustomEvent");return n.initCustomEvent(t,i.bubbles,i.cancelable,i.detail),n};N.prototype=t.Event.prototype,t.CustomEvent=N}return function(e){for(var i=0,n=["moz","webkit"],r=0;r<n.length&&!t.requestAnimationFrame;++r)e.requestAnimationFrame=e[n[r]+"RequestAnimationFrame"],e.cancelAnimationFrame=e[n[r]+"CancelAnimationFrame"]||e[n[r]+"CancelRequestAnimationFrame"];e.requestAnimationFrame=e.requestAnimationFrame||function(t){var n=(new Date).getTime(),r=Math.max(0,16-(n-i)),s=e.setTimeout(function(){t(n+r)},r);return i=n+r,s},e.cancelAnimationFrame=e.cancelAnimationFrame||e.clearTimeout}(t),w});
// svg.absorb.js 0.1.2 - Copyright (c) 2014 Wout Fierens - Licensed under the MIT license
;(function(){SVG.Absorbee=SVG.invent({create:function(e){this.node=e;this.type=e.localName;this.node.instance=this},inherit:SVG.Element,construct:{absorb:function(e){if(typeof e==="string"){var t,n=document.createElement("div");e=e.replace(/\n/,"").replace(/<(\w+)([^<]+?)\/>/g,"<$1$2></$1>");n.innerHTML='<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">'+e+"</svg>";for(t=n.firstChild.childNodes.length-1;t>=0;t--)if(n.firstChild.childNodes[t].nodeType==1)this.add(new SVG.Absorbee(n.firstChild.childNodes[t]),0);n=null}else{this.add(new SVG.Absorbee(e))}return this}}})}).call(this);
/*! svg.filter.js - v2.0.2 - 2016-02-24
* https://github.com/wout/svg.filter.js
* Copyright (c) 2016 Wout Fierens; Licensed MIT */
(function(){function a(a){return Array.isArray(a)&&(a=new SVG.Array(a)),a.toString().replace(/^\s+/,"").replace(/\s+$/,"").replace(/\s+/g," ")}function b(a){if(!Array.isArray(a))return a;for(var b=0,c=a.length,d=[];c>b;b++)d.push(a[b]);return d.join(" ")}function c(){var a=function(){};"function"==typeof arguments[arguments.length-1]&&(a=arguments[arguments.length-1],Array.prototype.splice.call(arguments,arguments.length-1,1));for(var b in arguments)for(var c in arguments[b])a(arguments[b][c],c,arguments[b])}SVG.Filter=SVG.invent({create:"filter",inherit:SVG.Parent,extend:{source:"SourceGraphic",sourceAlpha:"SourceAlpha",background:"BackgroundImage",backgroundAlpha:"BackgroundAlpha",fill:"FillPaint",stroke:"StrokePaint",autoSetIn:!0,put:function(a,b){return this.add(a,b),!a.attr("in")&&this.autoSetIn&&a.attr("in",this.source),a.attr("result")||a.attr("result",a),a},blend:function(a,b,c){return this.put(new SVG.BlendEffect(a,b,c))},colorMatrix:function(a,b){return this.put(new SVG.ColorMatrixEffect(a,b))},convolveMatrix:function(a){return this.put(new SVG.ConvolveMatrixEffect(a))},componentTransfer:function(a){return this.put(new SVG.ComponentTransferEffect(a))},composite:function(a,b,c){return this.put(new SVG.CompositeEffect(a,b,c))},flood:function(a,b){return this.put(new SVG.FloodEffect(a,b))},offset:function(a,b){return this.put(new SVG.OffsetEffect(a,b))},image:function(a){return this.put(new SVG.ImageEffect(a))},merge:function(){var a=[void 0];for(var b in arguments)a.push(arguments[b]);return this.put(new(SVG.MergeEffect.bind.apply(SVG.MergeEffect,a)))},gaussianBlur:function(a,b){return this.put(new SVG.GaussianBlurEffect(a,b))},morphology:function(a,b){return this.put(new SVG.MorphologyEffect(a,b))},diffuseLighting:function(a,b,c){return this.put(new SVG.DiffuseLightingEffect(a,b,c))},displacementMap:function(a,b,c,d,e){return this.put(new SVG.DisplacementMapEffect(a,b,c,d,e))},specularLighting:function(a,b,c,d){return this.put(new SVG.SpecularLightingEffect(a,b,c,d))},tile:function(){return this.put(new SVG.TileEffect)},turbulence:function(a,b,c,d,e){return this.put(new SVG.TurbulenceEffect(a,b,c,d,e))},toString:function(){return"url(#"+this.attr("id")+")"}}}),SVG.extend(SVG.Defs,{filter:function(a){var b=this.put(new SVG.Filter);return"function"==typeof a&&a.call(b,b),b}}),SVG.extend(SVG.Container,{filter:function(a){return this.defs().filter(a)}}),SVG.extend(SVG.Element,SVG.G,SVG.Nested,{filter:function(a){return this.filterer=a instanceof SVG.Element?a:this.doc().filter(a),this.doc()&&this.filterer.doc()!==this.doc()&&this.doc().defs().add(this.filterer),this.attr("filter",this.filterer),this.filterer},unfilter:function(a){return this.filterer&&a===!0&&this.filterer.remove(),delete this.filterer,this.attr("filter",null)}}),SVG.Effect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{"in":function(a){return null==a?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",a)},result:function(a){return null==a?this.attr("result"):this.attr("result",a)},toString:function(){return this.result()}}}),SVG.ParentEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Parent,extend:{"in":function(a){return null==a?this.parent()&&this.parent().select('[result="'+this.attr("in")+'"]').get(0)||this.attr("in"):this.attr("in",a)},result:function(a){return null==a?this.attr("result"):this.attr("result",a)},toString:function(){return this.result()}}});var d={blend:function(a,b){return this.parent()&&this.parent().blend(this,a,b)},colorMatrix:function(a,b){return this.parent()&&this.parent().colorMatrix(a,b)["in"](this)},convolveMatrix:function(a){return this.parent()&&this.parent().convolveMatrix(a)["in"](this)},componentTransfer:function(a){return this.parent()&&this.parent().componentTransfer(a)["in"](this)},composite:function(a,b){return this.parent()&&this.parent().composite(this,a,b)},flood:function(a,b){return this.parent()&&this.parent().flood(a,b)},offset:function(a,b){return this.parent()&&this.parent().offset(a,b)["in"](this)},image:function(a){return this.parent()&&this.parent().image(a)},merge:function(){return this.parent()&&this.parent().merge.apply(this.parent(),[this].concat(arguments))},gaussianBlur:function(a,b){return this.parent()&&this.parent().gaussianBlur(a,b)["in"](this)},morphology:function(a,b){return this.parent()&&this.parent().morphology(a,b)["in"](this)},diffuseLighting:function(a,b,c){return this.parent()&&this.parent().diffuseLighting(a,b,c)["in"](this)},displacementMap:function(a,b,c,d){return this.parent()&&this.parent().displacementMap(this,a,b,c,d)},specularLighting:function(a,b,c,d){return this.parent()&&this.parent().specularLighting(a,b,c,d)["in"](this)},tile:function(){return this.parent()&&this.parent().tile()["in"](this)},turbulence:function(a,b,c,d,e){return this.parent()&&this.parent().turbulence(a,b,c,d,e)["in"](this)}};SVG.extend(SVG.Effect,d),SVG.extend(SVG.ParentEffect,d),SVG.ChildEffect=SVG.invent({create:function(){this.constructor.call(this)},inherit:SVG.Element,extend:{"in":function(a){this.attr("in",a)}}});var e={blend:function(a,b,c){this.attr({"in":a,in2:b,mode:c||"normal"})},colorMatrix:function(b,c){"matrix"==b&&(c=a(c)),this.attr({type:b,values:"undefined"==typeof c?null:c})},convolveMatrix:function(b){b=a(b),this.attr({order:Math.sqrt(b.split(" ").length),kernelMatrix:b})},composite:function(a,b,c){this.attr({"in":a,in2:b,operator:c})},flood:function(a,b){this.attr("flood-color",a),null!=b&&this.attr("flood-opacity",b)},offset:function(a,b){this.attr({dx:a,dy:b})},image:function(a){this.attr("href",a,SVG.xlink)},displacementMap:function(a,b,c,d,e){this.attr({"in":a,in2:b,scale:c,xChannelSelector:d,yChannelSelector:e})},gaussianBlur:function(a,c){null!=a||null!=c?this.attr("stdDeviation",b(Array.prototype.slice.call(arguments))):this.attr("stdDeviation","0 0")},morphology:function(a,b){this.attr({operator:a,radius:b})},tile:function(){},turbulence:function(a,b,c,d,e){this.attr({numOctaves:b,seed:c,stitchTiles:d,baseFrequency:a,type:e})}},f={merge:function(){var a;if(arguments[0]instanceof SVG.Set){var b=this;arguments[0].each(function(a){this instanceof SVG.MergeNode?b.put(this):(this instanceof SVG.Effect||this instanceof SVG.ParentEffect)&&b.put(new SVG.MergeNode(this))})}else{a=Array.isArray(arguments[0])?arguments[0]:arguments;for(var c=0;c<a.length;c++)a[c]instanceof SVG.MergeNode?this.put(a[c]):this.put(new SVG.MergeNode(a[c]))}},componentTransfer:function(a){if(this.rgb=new SVG.Set,["r","g","b","a"].forEach(function(a){this[a]=new(SVG["Func"+a.toUpperCase()])("identity"),this.rgb.add(this[a]),this.node.appendChild(this[a].node)}.bind(this)),a){a.rgb&&(["r","g","b"].forEach(function(b){this[b].attr(a.rgb)}.bind(this)),delete a.rgb);for(var b in a)this[b].attr(a[b])}},diffuseLighting:function(a,b,c){this.attr({surfaceScale:a,diffuseConstant:b,kernelUnitLength:c})},specularLighting:function(a,b,c,d){this.attr({surfaceScale:a,diffuseConstant:b,specularExponent:c,kernelUnitLength:d})}},g={distantLight:function(a,b){this.attr({azimuth:a,elevation:b})},pointLight:function(a,b,c){this.attr({x:a,y:b,z:c})},spotLight:function(a,b,c,d,e,f){this.attr({x:a,y:b,z:c,pointsAtX:d,pointsAtY:e,pointsAtZ:f})},mergeNode:function(a){this.attr("in",a)}};["r","g","b","a"].forEach(function(a){g["Func"+a.toUpperCase()]=function(a){switch(this.attr("type",a),a){case"table":this.attr("tableValues",arguments[1]);break;case"linear":this.attr("slope",arguments[1]),this.attr("intercept",arguments[2]);break;case"gamma":this.attr("amplitude",arguments[1]),this.attr("exponent",arguments[2]),this.attr("offset",arguments[2])}}}),c(e,function(a,b){var c=b.charAt(0).toUpperCase()+b.slice(1),d={};SVG[c+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+c)),a.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.Effect,extend:d})}),c(f,function(a,b){var c=b.charAt(0).toUpperCase()+b.slice(1),d={};SVG[c+"Effect"]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+c)),a.apply(this,arguments),this.result(this.attr("id")+"Out")},inherit:SVG.ParentEffect,extend:d})}),c(g,function(a,b){var c=b.charAt(0).toUpperCase()+b.slice(1),d={};SVG[c]=SVG.invent({create:function(){this.constructor.call(this,SVG.create("fe"+c)),a.apply(this,arguments)},inherit:SVG.ChildEffect,extend:d})}),SVG.extend(SVG.MergeEffect,{"in":function(a){return a instanceof SVG.MergeNode?this.add(a,0):this.add(new SVG.MergeNode(a),0),this}}),SVG.extend(SVG.CompositeEffect,SVG.BlendEffect,SVG.DisplacementMapEffect,{in2:function(a){return null==a?this.parent()&&this.parent().select('[result="'+this.attr("in2")+'"]').get(0)||this.attr("in2"):this.attr("in2",a)}}),SVG.filter={sepiatone:[.343,.669,.119,0,0,.249,.626,.13,0,0,.172,.334,.111,0,0,0,0,0,1,0]}}).call(this);
var Assets = {};

Assets['icons/LV_FullScreen'] = 'data:image/png;base64,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';

Assets['icons/LV_Save'] = 'data:image/png;base64,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';

Assets['icons/LatentIcon'] = 'data:image/png;base64,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';

Assets['icons/MessageIcon'] = 'data:image/png;base64,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';

Assets['icons/icon_BlueprintEditor_Components_16x'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAADoDaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgICAgICAgICB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTQtMTEtMTFUMTQ6MjNaPC94bXA6Q3JlYXRlRGF0ZT4KICAgICAgICAgPHhtcDpNb2RpZnlEYXRlPjIwMTUtMDQtMjNUMTM6MTM6MDgrMDE6MDA8L3htcDpNb2RpZnlEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDE1LTA0LTIzVDEzOjEzOjA4KzAxOjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8cGhvdG9zaG9wOklDQ1Byb2ZpbGU+c1JHQiBJRUM2MTk2Ni0yLjE8L3Bob3Rvc2hvcDpJQ0NQcm9maWxlPgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOjkyNmYxYWIzLTBjZmEtYjI0Zi04NjllLWY5ZmUwZmJlMGE4NjwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDplODdlNzdhNy0yODY5LWE3NDktYjFhZi1jNWYyZGU2YWI5Njk8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDplODdlNzdhNy0yODY5LWE3NDktYjFhZi1jNWYyZGU2YWI5Njk8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6ZTg3ZTc3YTctMjg2OS1hNzQ5LWIxYWYtYzVmMmRlNmFiOTY5PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTExLTExVDE0OjIzWjwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6OTI2ZjFhYjMtMGNmYS1iMjRmLTg2OWUtZjlmZTBmYmUwYTg2PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE1LTA0LTIzVDEzOjEzOjA4KzAxOjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgKFdpbmRvd3MpPC9zdEV2dDpzb2Z0d2FyZUFnZW50PgogICAgICAgICAgICAgICAgICA8c3RFdnQ6Y2hhbmdlZD4vPC9zdEV2dDpjaGFuZ2VkPgogICAgICAgICAgICAgICA8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6U2VxPgogICAgICAgICA8L3htcE1NOkhpc3Rvcnk+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjE2PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjE2PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz52TTlvAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAQgSURBVHgBABAE7/sBd4GkAAAAAAD9/v4ACgoIAAACBwrx+QZKAgD1MQv/8OgDCAz2+vr8/vX1/AAXGRX+EA8T1s/S2csJBgMAAAEBAAQAAQMAAAAAAP///gAEBAUcDRMbbAwEDFXk28b48vbwugP5/O77+vj9Dw8RBQYD+w3s7/MyBAQH2v7//fEAAAEABO7v6wAAAAAAAQAAAPP29ZT95OJP+fn27Pn18vYNDg/6APjxFfn5+gwTFRYWGhoaGdfb6h729eeEBAL/AAAAAgAE8fHwAAAAAAACAAAA9/8FCgMA6VIM+uywHh4qvDg1LDru7u8S/f0A1+bk4dKpp8kNFhwj5Q8O+usA/wAAAAABAAQCAPsAAwIBAP79/AAC/wLsIicw/EArDnAVFhhBGRkYARAODgDy8vIc0Nve8crVrano6u9EISERAPz7/AD+/wAABPn38QD5+v0ADQsEAAIDCPQAAwYT1NbWJwDV2QEICAkADAsKAPAACw4JGyEmHiAl+Pb5/O//BgUA9vsAAAgGAgAEQj4yANfa6QDj4+QAAAb6/gAB/gQJCAfg+vsAAPv8+wDj5OUA+QYOABICAvH08fMKEx4e3hQVCQAcEvgAEggAAAQnIRUAMy0fALi59gDI1O7m1cnIDfwbAB0zNDcA+Pj5AP39/gAEAgQAyLu0DPP5EyK+wLauGRD+AJ+ZlgDZ290AA1VWWQAEBAQhIyQiHvT5BRvU2uF7trKlqs/KxPYA//0fDg8QBL/Avty4sq+HDxUgK+/l1ihIQDQeOjxB7u3x8+wDVlZXiUBAQ6r+/Pdp0dDNFff/EAkwMDUQ/f8FL+3w9Ang3t37xcPA4/7+/uAJDhsaQz4xHmtsbF4eHh9sz8/QCwElJSVtR0hJkKWlo7rv7u+YAQIGNhccJjglJinXAgMH9/7//R8kIyQbDREX787MzR/Eup/xBAQE4ERERCfQz8+nAQAAAAAAAAAiAAAA3gAAAAATEg8uJCMh5MnL0PVUVFGILi4yDKGjpsMNERgb7OnlZOTh2q8AAAB0AAAAAAAAAAAAAAAAAAAAAAAAAAAAAQEBAD09PQCbm5te1tbWy///////////2dnX8nZ0cLQLCgczAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD5jY2PM1tbX//Pz9P+Ojo7uICAgXwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICAhOKioqfgAAAAkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAP//SNtlrOz1e9sAAAAASUVORK5CYII=';

Assets['icons/icon_Blueprint_AddDelegate_16x'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAGWvaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTMtMDktMThUMTc6MzM6MTkrMDE6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDEzLTA5LTE4VDE3OjMzOjE5KzAxOjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxMy0wOS0xOFQxNzozMzoxOSswMTowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6ODJiMzc0Y2EtMWRhNy1iNzRjLWI5YTEtMTYzODA5ZmQ4ODc1PC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjFlYTVmZWNhLTNlYzUtNmU0Yy04ZGYzLWFiZGMzZWE3ZjcwZjwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjFlYTVmZWNhLTNlYzUtNmU0Yy04ZGYzLWFiZGMzZWE3ZjcwZjwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDoxZWE1ZmVjYS0zZWM1LTZlNGMtOGRmMy1hYmRjM2VhN2Y3MGY8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTMtMDktMThUMTc6MzM6MTkrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjgyYjM3NGNhLTFkYTctYjc0Yy1iOWExLTE2MzgwOWZkODg3NTwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxMy0wOS0xOFQxNzozMzoxOSswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICAgICA8cmRmOkJhZz4KICAgICAgICAgICAgICAgPHJkZjpsaT4wQkE2QkYyQUU5MTc1NzhEODI1NDk3RDgxNjJDRjYzODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjc5MkVBODUxNzZFMjM2MzM2QzBBMUU3MjZCOEYzOUY1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+ODA0NjQxMjM2OUZEMjdFMzExMzZGMzE0NDEwQzI4NTI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT45Mjg2MTlBRkJDREVFOUVGOTE1N0ZDQTU5MTAzQjJCQTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkJCRDgwQjJDNTA5M0EwNDFCRTg5MTE0NTlEOEJBQzE1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+REJFREIxMUIzODBBNERDNDQ2MTU0RUMzQzBBNTk4QUI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5FQTI4RkZCRjdFNEU0MTMyQjYxNUVCRUY5ODhGQkYxOTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkYwNDI4RDBBMjQyNDU4QzFGM0MyQUUyN0YyRkVDMzkzPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+RkNGMDREQ0M0Q0M0MDE4RjUzQUY1N0I1OTIzRkRGMjA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MGM0YTU3NDktZDM3Ni0xMWRhLWI3YmItOWQwNTdhM2I4ZDg2PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjEzZjFiMjdlLTRiMGQtMTFkYS05OGFkLWZjYjc4NDc5MTEzODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1N2IxNGMyNi01MjMyLTExZGQtYjI5NS1jMWNlNjNkMTk1MmI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6Y2VkMDI4NWEtODIwYS0xMWRiLWE1NDMtYzZkYjZhY2ZhOTdlPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmQ5YmE0Mjc0LTA3MWUtMTFkYS1hODEwLWNiY2IwMjM0NTQ1NjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MDFERTZFMUY2OTRFREQxMThGNTE4NkU0NUY3NkU1OTI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjAyM0ZCMkU1N0E1RUUyMTE5Rjg1ODI3NkUyNUJCNTVGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDoxMjg3NzQxRTY5NEVERDExOEY1MTg2RTQ1Rjc2RTU5MjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MTRENTgzQTgyOEQyRTAxMUI5QjZGMDJFNjU5RDFEQzQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjFFRTBDMUVGMjE3N0RBMTE5M0QzQTI2MDJCQTVERDcyPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDoyMUQ3RjVGRDc1NjNFMTExODRBMzlDQjVBQzQyNDQ5OTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6M0FBOTk1RTVFMjk4REMxMTlCQTZCRTQwMUI1RTMzMzk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjNGQTYwNTA1NzU1OERGMTE5M0ZDRTYyQzJGMjM0M0RGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDo0QUU1ODhEQjJEMTdEQTExOUUxNEVFQThCOEFCRjY3OTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6NUNCMTc1NjFCRTcwREUxMUJDODk4MjJCMzVCREREQTU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjYwOTAxNjJGQTMzQUUxMTFBNkQ3OEQ1NjMxNkUxMzQ1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDo4MDg2OUIyQ0VFM0ZFMTExOEQ4MTlFOTdBNkI5NzUxRjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6ODU4NjlCMkNFRTNGRTExMThEODE5RTk3QTZCOTc1MUY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjg1QkM1OTIyOTJBQ0RDMTE4RkY5QkU2MUI1MzEzNTQ5PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDo4OUJDNTkyMjkyQUNEQzExOEZGOUJFNjFCNTMxMzU0OTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6OEMyMjc1RUMyMkNBREQxMTlDMjNFRjhGNjUxNTZBMEQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjhDQjUyODFDNzQ3QkRDMTFCM0VFRTAzNEZGNTI3NUQ1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDpBMTlGQTM3MEJFNzBERTExQkM4OTgyMkIzNUJERERBNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6QTlEMTc1ODVFRjM4REExMUI4MkJFRjMwNTEyNUZFOTA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkMxMEVBQTY4N0JBRURDMTFCMEZFRDczNkJERjc0RjNCPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDpDMUQ1MERDNjNEM0NFMTExQTdCQ0QxRkZDQjk4RUMzOTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6Q0MzNDUwNEYzMTE3REExMTlFMTRFRUE4QjhBQkY2Nzk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkNEODBENTgzREVFN0RCMTE4Q0E3RkM1NTg3MTE3MjlDPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDpEQTI3NkU1QkFFMkZFMTExQTYyRUVDOUU2MDU1QUNENjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6Rjk1ODE2Njk3RDJGREUxMUE3ODlGQ0UxQzIxRUQxNEQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkZCMTE3MjZFM0UzOERGMTFCREUzOEY3RkVDMjUwRjIzPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDowMDlDRUUzMkVEMDZFMTExQkJDMjhDREVCMTVCNUQzMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDJFQzZBMTgxRkU1RTAxMUE4OTc4QkY3M0M2MDA1NzY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAzOUNFRTMyRUQwNkUxMTFCQkMyOENERUIxNUI1RDMzPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDowNDgyMTc0OUU2RkZFMDExQUUxOUVCMDQyMEU2RDIxMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDU4MjE3NDlFNkZGRTAxMUFFMTlFQjA0MjBFNkQyMTM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjBEQzgyM0FBMjk4MEUyMTE5QTE2RjZBMTMzNkQ1OTUyPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoxMDcwQjRENzFFNUZFMTExOUE1REIyQTE2QUNBODA0QTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MTBBQUVGQkNGRTI0RTExMUI3MUI4ODU4Mzg2QTAxQTc8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjExOTQwQTA1REMxOUUxMTFBNjVFODQ0NEEyRjZDRjVGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoxNzc4NzJBRjY3RDJFMDExOEVFMzk3RTNDQ0Y3MzlFRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MTc5NDBBMDVEQzE5RTExMUE2NUU4NDQ0QTJGNkNGNUY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjE4N0Y3Q0Y1ODEzNkUxMTE5NDQ2Qzc1M0Q0QkY3Q0YyPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoxOTc4NzJBRjY3RDJFMDExOEVFMzk3RTNDQ0Y3MzlFRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MTlDQjI4RjY1N0JCREYxMTg2QThFRUU1MzMzODlENjU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjFCNzg3MkFGNjdEMkUwMTE4RUUzOTdFM0NDRjczOUVEPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoxQjhCOTgzNjE0MzNFMjExODkwMjkwRjRDRDk5NzJGQTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MUI4Q0U5NzI3QzRCRTExMTkwQjZCRTVCREEyQ0Q3NEU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjFGNUZFQUE3NkY0QkUxMTE5MEI2QkU1QkRBMkNENzRFPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoyMDBEOUY5NEJEQzZFMDExQjc0M0I0Q0FBNzU1Q0Y5QzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MjAzNEVCNUMyQkJDREYxMThENkREQkNDQzc3N0YxQzk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjIzNDQ4NzEyRjkyQkUxMTFCOTdFQ0JFQzg3NzAwODA2PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoyNDM0QjdDMTA2OUVERTExQjE5OUI4NTVENzYyMzg4OTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MjRCMUFGOUJFQkRGRTAxMThFMDc4MEFBQzRGRERDMEQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjI3NDQ4NzEyRjkyQkUxMTFCOTdFQ0JFQzg3NzAwODA2PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoyQUNCREMxQkU0Q0NFMDExOUUwQ0ZBN0NGNzg1ODNDOTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MkY4MEZFMjdENTUxRTExMTlGRkNBMjA3NTNBMkExOTg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjMyQUIwRERGODI2MUUxMTE5MzAwRTM4RTZGMDlGNjY2PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDozN0IyQkNCNzI0RDNFMDExOEZENkU2OEVCNUVENzc3RjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6M0IwOEYxNzc3NDczRTExMUExMEVDQzI1NzhGNjhDNzM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjNCNTIzOUIzNjlBQkUyMTE4OEJERDJCQjZGQzkyMzQyPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDozQkZCRTU2Qjc3MUFFMTExQTY1RTg0NDRBMkY2Q0Y1RjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6M0MzQjZBMkFGMjQ4RTExMUJGNzQ5REQ4OTlBRjVDN0Y8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjNFM0I2QTJBRjI0OEUxMTFCRjc0OUREODk5QUY1QzdGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDozRkExN0FERDU0MzJFMjExOTlFRkFCNDVBMkIwREM1NjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NDEwRUM4ODQ2OERERTAxMUI3OTFCNTc2OTM4MjhGNDA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjQxOTA0OURBRjFEM0UwMTFCRjUyQUVGNUJCNUM4MEY3PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo0NDBFQzg4NDY4RERFMDExQjc5MUI1NzY5MzgyOEY0MDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NDdGMzZEQzU2RDg1RTAxMUI0QkFFRkFEMEIxMUFEQzM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjRBRjM2REM1NkQ4NUUwMTFCNEJBRUZBRDBCMTFBREMzPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo0RjI3MkVGRjUwREVFMDExQkVDOTlCODYxQjA0OUM0NTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NTI3RkMwNDI1QjQwRTExMTg2NTJBNEQ2NjNFNEUzQjQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjUzMUM4ODkzQ0YzNEUyMTE4MTE3OUEzNDRGODEzMzdGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo1MzlBQ0YyNzM3QzhFMDExOTREQkUyNUJCRjYyMUMxODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NTYwREE1MkVBNjc5RTExMTlFNzREQTk1MEUwQjMwN0Q8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjU4MERBNTJFQTY3OUUxMTE5RTc0REE5NTBFMEIzMDdEPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo1OEIzRTYyQUYwNThFMjExOEYyRDlGMzA1RkYzMkZGNjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NURDRDQ2MEZGMzE5RTExMUFEMUNEMjAxREJEMkZEREI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjVFMjkzRDJCRjQ3NEUxMTFBNUFCOTE2RkQ0RjM1MEE5PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo2QzdCNUVEM0ZBRkVERTExODVBQkRCREMyRDVERDhFNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NkZCMjVBMzJGNzgwRTIxMUJBNThBODEwRkQ2M0EzMzk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjczQzIzQTgwQzBENEUwMTFCRjlCQUU3MTU3M0Q4RTVCPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo3Njc1OUM3NENGRDNFMDExOEZENkU2OEVCNUVENzc3RjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6N0NBRDdFNTUyMkFDRTIxMTg4QkREMkJCNkZDOTIzNDI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjdENzU5Qzc0Q0ZEM0UwMTE4RkQ2RTY4RUI1RUQ3NzdGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo3RjUyMDMwODIzRDBFMDExOUJBNzlDRjk0NDIyM0UyNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6ODAxMEQxNDBDQUQzRTAxMThGRDZFNjhFQjVFRDc3N0Y8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjgwNzU5Qzc0Q0ZEM0UwMTE4RkQ2RTY4RUI1RUQ3NzdGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo4MTEwRDE0MENBRDNFMDExOEZENkU2OEVCNUVENzc3RjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6ODIyMEZFRjExQTk2RTExMUIzRDBFNURBOURFQ0IyRTk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjgyOUQxM0YzNjJERUUwMTE5QTI4OEE0NTNBMTIyNUQ0PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo4NUY3NTBDQ0ZGMEVFMTExODI2OUFBM0FCNjMwRDRDMjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OEJDMTczNDNEQURGRTAxMTgxMjZBMjNBRTJGNDIzOTA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjhDQURCMjEwRUFCQ0RGMTE5MDIzOUJDOTM5NkIyOTI0PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo5MzRBMEVDOEEyRERFMDExOUEyODhBNDUzQTEyMjVENDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OTU1QjZBRDdEQkQzRTAxMUJGOUJBRTcxNTczRDhFNUI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjk5NEEwRUM4QTJEREUwMTE5QTI4OEE0NTNBMTIyNUQ0PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo5OTVCNkFEN0RCRDNFMDExQkY5QkFFNzE1NzNEOEU1QjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OTlCRDkwOTlEMEJFRTAxMUExMzZFQ0M5RDk4MDkwNjM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjlCQkQ5MDk5RDBCRUUwMTFBMTM2RUNDOUQ5ODA5MDYzPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo5QzgzMjIzNkQyRTNFMDExODdGQjg1NjlEMTcxRDgwQzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OUUzM0NCRjZEQzFBRTExMUFEMUNEMjAxREJEMkZEREI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjlFNDQ0MEEzRTFFQUUwMTFCRjFGQzlBRkE3QzhENDBDPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo5RkMyRTI2NTIwNDlFMTExOTI2QUJCMDk4NDE0MkE0MDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QUU3RUY5QTk0MzlERTIxMTg5N0RBRTRCQkZFNzM3MEI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkI2Q0Q3M0YzNjkxQ0UxMTE4OUY1REEzQjlFRDUyMUY3PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpCNzA4NzBBMTI3RTlFMDExODA0N0MyRjhEMjZDMjRCRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Qjg5MUM1ODE4RDhERTIxMUFGRjU4MTM0Rjk4NkVDRDc8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkJBODk2NzZDNThDRUUwMTE5NUYyRTdGNDcyNTM0QjRCPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpCRDg2QTkyMDQ0N0VFMTExQjREM0NCN0ZFRUFCRjNDRjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QkUzQjhGMkVDODVCRTExMThDQUVCRDJBRjBGNDY4NzU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkJGM0I4RjJFQzg1QkUxMTE4Q0FFQkQyQUYwRjQ2ODc1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpDMDlGMDAwNjExQzhFMDExQkY0NTg1MUFBQUE5MkYxMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QzJEREEzMDJDMTM3RTExMUE1RDk4OUU0Qjg1MEY3NEU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkM0NDM2QjM5MkVERUUwMTFBRTEzQjkyMDgzMjA4RTg3PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpDNjczMDU1NjU0RDJFMDExQjg4NkI5Nzg1NjRBRDZDNDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QzdBN0E0MzlCRjQ2RTExMUEyQzRCQjNCQzU3OTkzQTU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkM4QURFMDIxMTIwMEUxMTE4QkZFQUE2OTg2RERDNjVBPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpDOENGRkIyQzM3MzNFMjExOTlFRkFCNDVBMkIwREM1NjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Q0UyNzFBMjFBNEQ0RTAxMUJGOUJBRTcxNTczRDhFNUI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkNGNTEzQ0UxREFEM0UwMTE4RkQ2RTY4RUI1RUQ3NzdGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpEMTQ1MjdENUU3RTJFMDExQTQ2RThFMTEwNzc4RTYwOTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RDU2RUNGM0RDREQzRTAxMThGRDZFNjhFQjVFRDc3N0Y8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkQ2MTUxMjUyMTAzQkUxMTE4MjFGOUREMjAyRTRFQjk5PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpENzZFQ0YzRENERDNFMDExOEZENkU2OEVCNUVENzc3RjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RDg2RUNGM0RDREQzRTAxMThGRDZFNjhFQjVFRDc3N0Y8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkQ4REY4ODY0N0NBRUUyMTE5NjA4OEVGMkI4QzlGNjZEPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpEOURGODg2NDdDQUVFMjExOTYwODhFRjJCOEM5RjY2RDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6REFERjg4NjQ3Q0FFRTIxMTk2MDg4RUYyQjhDOUY2NkQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkRCREY4ODY0N0NBRUUyMTE5NjA4OEVGMkI4QzlGNjZEPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpERjU5MkUzRUU3ODBFMjExODBCREI1MDkwOUZCRTA2QTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RTBDNTRCQkYwQjc4RTExMTlFNzREQTk1MEUwQjMwN0Q8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkUyOUZGMzdENjUyM0UyMTFBREVGQzEwQkU0MjkxMzdEPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpFMzU5MkUzRUU3ODBFMjExODBCREI1MDkwOUZCRTA2QTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RTQ5ODQ2ODg1QkU0RTAxMTkzMjJGQ0IwMEMxNzNFQjM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkU1MTM1M0Q5QUNBNkUyMTFBMEE2ODQ5QjcxMjc3NEY4PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpFNTNDMDJGNkJDMUFFMTExQUQxQ0QyMDFEQkQyRkREQjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RThGOEU5RUJFRDQ5RTIxMUFDQTBGQ0Q4MEM0QUMxMTI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkU5QTVEMThEQzQzNUUwMTFCNTczRjk1NTdGRDREMzg1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpFRTJGQTNGMTgwMTBFMTExQUE5OTg3N0FFQkM4RDAxMTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RjQ2Qzc2RTM0RUNGRTAxMTlCQTc5Q0Y5NDQyMjNFMjU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkY1RERCNjdBQTUwMEUxMTFCRDRGQUY1OTQzMUZFNTZGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDplYTliYzE0YS0yNGQ2LTQyNDUtOTM1NC1hNWRjYmFjZGVmODI8L3JkZjpsaT4KICAgICAgICAgICAgPC9yZGY6QmFnPgogICAgICAgICA8L3Bob3Rvc2hvcDpEb2N1bWVudEFuY2VzdG9ycz4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MzwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHBob3Rvc2hvcDpJQ0NQcm9maWxlPnNSR0IgSUVDNjE5NjYtMi4xPC9waG90b3Nob3A6SUNDUHJvZmlsZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTY8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MTY8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/Pm2xRFgAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAytJREFUeNpsk11Mm2UUx3/P+7xvv4FuHQW6Ah2j1QuYOqFmtUMTE0Miibsyfl0YNaLZdIuJbl5tUxSvnUbjV3TRBRWzGSQRs/kVggtdMHMVsi/txEIZH64UaF9o38ebQebC//LknN/5559zxPHjJ0in08RiOw41NW978uuhkTasUqownWZmZgYpJUJY/JvbxLIKUDSvkZsc4r0jr9K5+xU0p8NOR8cD1NQEZMmyam1SGndFtuA2dCxLoZRiPXXuPgCA3tDQ8EJ9fZ3TLJgxhCAWrntqg8c5LgzjR+mwjeq6RAiFyol1QXrV5rrX82bJo+sGhi7ZVOnbr5SFP3zLvnTRNWoYNsyleRYXc9hdcLMhOZ+3hr/q+37AMGzL4cZQ8zs9/V193w19mEoV8pk/c7/PTiwwdfkKmmbH6dkIVsGdz6Ysq1RUQgi0qampU3XBwLEtoWACQNhkj3Dfc3Sg94Oj7oqqWmUtsJKfBgHlXg81kdsWahqj3YbdBVKib6woI1DpJZH4LXlp/OrHmUwkOT29YoZvf9T+xovxcYgTCoVIpVLce/8jKvZgF9X10ZeElCOTfw33iM7nnmd52aSIHU9knzJziwAUsmMAfP7WQ2LPwV5V4d+uFGotyeqAi8tne9u0P5LnuHjhPLn5LMBag5KeXzze2nPRtl2q3H8HNw4DZCaWcAaaO9aKmibp7L7AdQfqo9eaBcDeI8MJt+ZruTqRet9c+Oen2kj8GMDM1NheR0X+bX0VYFkl3t2/FSBqtzuCs+Nvdm1tikeLlrDminOny9zaGb20dB7g4pnP7gu3PP4DwCogADwGuIDtplmYy+YKOzMTY0Nzk39/UV0bXnT4Ik+7Qi2tif6DWmv7YQVw6psDa4AccAKoBNJCiEt2R8UOrz/6sM1R1ei0l48o6b41OTTwa2v7YdW9p1ECpf+FtiohNHa2P0v4zicGDbfvbqzrF2cIvv3kmZNXRk8mARvwM9AvbwZoUpKdm+DabHrF4fJttjnKqnTDpikBZwc//XJpPnMaqAaqANf6HwJs8IfxeIOay+PbVhls2mXYyuKDfYdeXjFzIzfu+28AQw04l/bVkD4AAAAASUVORK5CYII=';

Assets['icons/icon_Blueprint_Anim_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_Blueprint_Defaults_16x'] = 'data:image/png;base64,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/GMzLdsAAIVAaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTUtMDQtMjdUMTU6NDI6NDArMDE6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDE1LTA0LTI3VDE1OjQyOjQwKzAxOjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNS0wNC0yN1QxNTo0Mjo0MCswMTowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6ODhlMDhhNWQtZGQ1MC0zNTQ1LWFiZGYtMWUxOWNlYzkyZjZmPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOmFmYzMxNmU1LTNkNTItYzQ0Zi04OGFlLWUyODRjMzI1ZTQ5MDwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOmFmYzMxNmU1LTNkNTItYzQ0Zi04OGFlLWUyODRjMzI1ZTQ5MDwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDphZmMzMTZlNS0zZDUyLWM0NGYtODhhZS1lMjg0YzMyNWU0OTA8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTUtMDQtMjdUMTU6NDI6NDArMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjg4ZTA4YTVkLWRkNTAtMzU0NS1hYmRmLTFlMTljZWM5MmY2Zjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNS0wNC0yN1QxNTo0Mjo0MCswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICAgICA8cmRmOkJhZz4KICAgICAgICAgICAgICAgPHJkZjpsaT4wMDZBN0Q4RkM1MDYyNkIwMTZERDlEMDM5OEM2QUEwMjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjA5MTI3NzEyRDJENjQyRDk4OEJDMUUwQjU4MDU5RUVCPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+MEJBNkJGMkFFOTE3NTc4RDgyNTQ5N0Q4MTYyQ0Y2Mzg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT4yQkVCN0M3MjRBNzI2OTJERkE0QjQxMjI4ODIzMjNGNjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjJFRkRBNjkyNjA5MkNBOEU2QTc2Qzg2RDlFMTlDQzBDPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+MkZBODcxRkJEQzQ4MTM3MDQyQjU2M0IyMjBDMTc1QTU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT4zMDEzRjlGMUQyREIyRjgwNTYzM0I5NDFBNEVFOTI0QjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjM2MEREMTVDOERDQ0YxNjA2RjFCREE5REIwQUQ1ODhBPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+Mzk0NEZFRDAwRkRGMEQ1Njk5RTcyMTFGMjM3QjI2MDA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT4zQTg1NkFFMDY1QjA3M0ZCNkRGRTcyQkREQzlCRUIyMTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjNCNjVDOEI1OTA0NkUxQTdBRkEyQUIwMjQwNUVDQjUxPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+M0JCRkIwQ0ZGQjU4MTdENjk1MTIyNkQ3RjU5Q0M1REY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT40NDFGOTcxRENGNzc2NkI0REQ4OTIyNUFFQTY3NDcyNjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjQ4NUJCMjA3NTM4MDQwODQyMzMwNzlCN0M2OUVDOUEzPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+NTdCMTNDODUxMkZCRjVCRUNBMUQ2RDRGQjdENTNDREQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT42MUU0RDY4REJGQTZEQ0I5OTNENERBMzc5MTEzQjJDNDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjYzMDA1ODM1Mjk2NDVBNEE5RTRBRDgxNjNFNjdGMDZCPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+NjREMUZBRUQyODA3OTU4Q0M4N0VCMDk1MjFCQTVEMjM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT42RkIyRkU2MEYxM0M3OTI0QzNCNTM5MzNCMDU0MTc0NzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjcwRkNCQkFCQjAwQUE3NjQ1RjYxMTY3NUU1RkE5ODk1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+NzkyRUE4NTE3NkUyMzYzMzZDMEExRTcyNkI4RjM5RjU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT44MDQ2NDEyMzY5RkQyN0UzMTEzNkYzMTQ0MTBDMjg1MjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjgxNUJGQTI0M0M5MDM0NzEzNjA2MENGODYwMkQwQ0JCPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+ODFGRUIyNThBNDZDODE2MjYyMTAwOEUxQkM5NDY0RTQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT44QzZCQjVGMUNBNkVGRkFDNTFBMjhEQjA5QzFDNDkwODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjkyODYxOUFGQkNERUU5RUY5MTU3RkNBNTkxMDNCMkJBPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+OTNCQjE0MTNGMEE5NEVDQzRDMTc0MDlCNEVDRUQzMDk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT45M0VCNENFNjQzODc2NEEzRDhFNzNERjM4RkY0NzY4RTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjk0QUFFNTkyNjFBQ0MwRjNDRUVCRDA0NTdGOTFFNzZDPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+OTg4RTZBQkNGOUE2RDI3ODAzRUE1MUEwMjNDNUUyNUY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT45QjkwN0Q3NkFBQjFDMTVCQ0UzQzczRTYyRTQyNkM0OTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkEwREEzMTlCODNFMTNGMjk2RjhEQkFCNUIyRjQ4MERFPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+QUFENjNBREJGNkU1MEZCNzdEODRBREM3NEQ0RkNBNUY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5BQ0E1MkE4RTg2NDY0M0I1NTUzMTYwMDA1RTA1MUJBNzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkJCRDgwQjJDNTA5M0EwNDFCRTg5MTE0NTlEOEJBQzE1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+QzM0ODM4OUQwMERDMkZFQkY2MDIyMkY3NThGRTIwMTg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5DQkRFQkNFRDUwMEQ4MkMxNkM1NTg3MDU5Qzg1RDMxNjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkQxQ0NEQzQ4NTNCQjAxMkFGRjY2M0ZGN0JCNUE1REY3PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+RDM5MUVBRDFGODQ5NkQwQkI1RkE3MkE1NzYyMThENDE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5EQjg0RDdCQkZFOTY1RTg2QTZCN0E5M0I2RjVGRjZCMTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkRCRURCMTFCMzgwQTREQzQ0NjE1NEVDM0MwQTU5OEFCPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+RTMwNzUyRENBNDAwQjdGNDg2QkNDNzg2MDY0OTEyNUY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5FQTI4RkZCRjdFNEU0MTMyQjYxNUVCRUY5ODhGQkYxOTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkVEMDk5NjUyMTFEQzgxMDFFMDJERThDOEY5NkM1Njc1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+RjA0MjhEMEEyNDI0NThDMUYzQzJBRTI3RjJGRUMzOTM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5GOUQzMzdBMDBBNjg0MUFDMjM0Q0Y3RDg1MzYyNEY1QTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkZDRjA0RENDNENDNDAxOEY1M0FGNTdCNTkyM0ZERjIwPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjBjNGE1NzQ5LWQzNzYtMTFkYS1iN2JiLTlkMDU3YTNiOGQ4NjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDoxM2YxYjI3ZS00YjBkLTExZGEtOThhZC1mY2I3ODQ3OTExMzg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MTU4YWEyNDAtNjUyYy0xMWUxLWI1ZGQtOTczZGM4YzIwZDdlPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjU3YjE0YzI2LTUyMzItMTFkZC1iMjk1LWMxY2U2M2QxOTUyYjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDphZmY4ZTZhNy0zMjNmLTExZDgtOWFlZC1jZDBkZjAxZTE5NjA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6Y2VkMDI4NWEtODIwYS0xMWRiLWE1NDMtYzZkYjZhY2ZhOTdlPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmQ5YmE0Mjc0LTA3MWUtMTFkYS1hODEwLWNiY2IwMjM0NTQ1NjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDpmYWMwNDllNi1mZjczLTExZGMtYThmOS1jYTQ4YjkzMDIzMjU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjAxREU2RTFGNjk0RUREMTE4RjUxODZFNDVGNzZFNTkyPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDowMjNGQjJFNTdBNUVFMjExOUY4NTgyNzZFMjVCQjU1RjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MTBCNDBGMjRCQTBGREQxMUJEMDZCODMxREY5MzFEQ0I8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjEyODc3NDFFNjk0RUREMTE4RjUxODZFNDVGNzZFNTkyPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDoxNEQ1ODNBODI4RDJFMDExQjlCNkYwMkU2NTlEMURDNDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MTZFMzE4RDlBN0M5RTExMTkxRjdGODc5NkE2MUEzRDE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjFFRTBDMUVGMjE3N0RBMTE5M0QzQTI2MDJCQTVERDcyPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDoyMUQ3RjVGRDc1NjNFMTExODRBMzlDQjVBQzQyNDQ5OTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MkNERTA2NEFDRjY2RTExMUI0QkU4QzI1MUEwNjU4MDA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjNBQTk5NUU1RTI5OERDMTE5QkE2QkU0MDFCNUUzMzM5PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDozRkE2MDUwNTc1NThERjExOTNGQ0U2MkMyRjIzNDNERjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6NEFFNTg4REIyRDE3REExMTlFMTRFRUE4QjhBQkY2Nzk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjVDQjE3NTYxQkU3MERFMTFCQzg5ODIyQjM1QkREREE1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDo2MDkwMTYyRkEzM0FFMTExQTZENzhENTYzMTZFMTM0NTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6ODA4NjlCMkNFRTNGRTExMThEODE5RTk3QTZCOTc1MUY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjg1ODY5QjJDRUUzRkUxMTE4RDgxOUU5N0E2Qjk3NTFGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDo4NUJDNTkyMjkyQUNEQzExOEZGOUJFNjFCNTMxMzU0OTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6ODlCQzU5MjI5MkFDREMxMThGRjlCRTYxQjUzMTM1NDk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjhDMjI3NUVDMjJDQUREMTE5QzIzRUY4RjY1MTU2QTBEPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDo4Q0I1MjgxQzc0N0JEQzExQjNFRUUwMzRGRjUyNzVENTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6OUI5RjhEMDRCMjYzRTIxMUI4QzM5MjRFRjEyRjI3NjQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkExOUZBMzcwQkU3MERFMTFCQzg5ODIyQjM1QkREREE1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDpBOUQxNzU4NUVGMzhEQTExQjgyQkVGMzA1MTI1RkU5MDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6QUNDRTQ1NEJFMjNBRTAxMTk1NDhGRDk1QzMxNTk2OTY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkMxMEVBQTY4N0JBRURDMTFCMEZFRDczNkJERjc0RjNCPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDpDMUQ1MERDNjNEM0NFMTExQTdCQ0QxRkZDQjk4RUMzOTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6Q0MzNDUwNEYzMTE3REExMTlFMTRFRUE4QjhBQkY2Nzk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkNDRTVCMjJCNjVGN0REMTE5QjZBQjZBQUY1REY1RTBBPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDpDRDgwRDU4M0RFRTdEQjExOENBN0ZDNTU4NzExNzI5QzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6RDA5NThGMEJGNzYzRTIxMUI4QzM5MjRFRjEyRjI3NjQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkRBMjc2RTVCQUUyRkUxMTFBNjJFRUM5RTYwNTVBQ0Q2PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDpFM0UzRTU2OUY0NjNFMjExQjhDMzkyNEVGMTJGMjc2NDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6Rjk1ODE2Njk3RDJGREUxMUE3ODlGQ0UxQzIxRUQxNEQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkZCMTE3MjZFM0UzOERGMTFCREUzOEY3RkVDMjUwRjIzPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDpGRjBENEI2RkZGNjNFMjExQjhDMzkyNEVGMTJGMjc2NDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDA5Q0VFMzJFRDA2RTExMUJCQzI4Q0RFQjE1QjVEMzM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAwQUQ1QUUzQ0FEOEUyMTE4NTRBQjA0QUJFNzhCNDY1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDowMkVDNkExODFGRTVFMDExQTg5NzhCRjczQzYwMDU3NjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDM5Q0VFMzJFRDA2RTExMUJCQzI4Q0RFQjE1QjVEMzM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjA0ODIxNzQ5RTZGRkUwMTFBRTE5RUIwNDIwRTZEMjEzPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDowNTgyMTc0OUU2RkZFMDExQUUxOUVCMDQyMEU2RDIxMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MERDODIzQUEyOTgwRTIxMTlBMTZGNkExMzM2RDU5NTI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjEwNzBCNEQ3MUU1RkUxMTE5QTVEQjJBMTZBQ0E4MDRBPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoxMEFBRUZCQ0ZFMjRFMTExQjcxQjg4NTgzODZBMDFBNzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MTE5NDBBMDVEQzE5RTExMUE2NUU4NDQ0QTJGNkNGNUY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjEyQzkxMjI3MDBBMUUyMTFCRkNFRkU4NDAxNzg4MEQxPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoxNzc4NzJBRjY3RDJFMDExOEVFMzk3RTNDQ0Y3MzlFRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MTc4QzZEMDg5OUYzRTIxMTlCQUJCREVDQkFCRjI2ODQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjE3OTQwQTA1REMxOUUxMTFBNjVFODQ0NEEyRjZDRjVGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoxODdGN0NGNTgxMzZFMTExOTQ0NkM3NTNENEJGN0NGMjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MTk3ODcyQUY2N0QyRTAxMThFRTM5N0UzQ0NGNzM5RUQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjE5Q0IyOEY2NTdCQkRGMTE4NkE4RUVFNTMzMzg5RDY1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoxQjc4NzJBRjY3RDJFMDExOEVFMzk3RTNDQ0Y3MzlFRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MUI4Qjk4MzYxNDMzRTIxMTg5MDI5MEY0Q0Q5OTcyRkE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjFCOENFOTcyN0M0QkUxMTE5MEI2QkU1QkRBMkNENzRFPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoxRjVGRUFBNzZGNEJFMTExOTBCNkJFNUJEQTJDRDc0RTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MjAwRDlGOTRCREM2RTAxMUI3NDNCNENBQTc1NUNGOUM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjIwMzRFQjVDMkJCQ0RGMTE4RDZEREJDQ0M3NzdGMUM5PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoyMTY3RjAxN0E1QzNFMjExQjU3QkU0RjY0OTAwMzMxNDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MjM0NDg3MTJGOTJCRTExMUI5N0VDQkVDODc3MDA4MDY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjI0MzRCN0MxMDY5RURFMTFCMTk5Qjg1NUQ3NjIzODg5PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoyNEIxQUY5QkVCREZFMDExOEUwNzgwQUFDNEZEREMwRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Mjc0NDg3MTJGOTJCRTExMUI5N0VDQkVDODc3MDA4MDY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjI4MGRiZmQ0LTc3YWItMDc0Zi1iNzRlLTAwYzBlODRjMDM5YTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MkFDQkRDMUJFNENDRTAxMTlFMENGQTdDRjc4NTgzQzk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjJFQTVEOTk0MTNBMkU0MTE4ODBFODM3RDY1REVBQTcyPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoyRjgwRkUyN0Q1NTFFMTExOUZGQ0EyMDc1M0EyQTE5ODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MzAzOEUzNjgwODIwNjgxMTgyMkE4QUNGREZGMTZDMkE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjMyQUIwRERGODI2MUUxMTE5MzAwRTM4RTZGMDlGNjY2PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDozNzZGQkVFNjc3NkNFMjExQTJGRjkzNzkyOTdFRjJDRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MzdCMkJDQjcyNEQzRTAxMThGRDZFNjhFQjVFRDc3N0Y8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjM5NTgyQ0JBMDg2QkUyMTFBMkZGOTM3OTI5N0VGMkNEPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDozQjA4RjE3Nzc0NzNFMTExQTEwRUNDMjU3OEY2OEM3MzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6M0JGQkU1NkI3NzFBRTExMUE2NUU4NDQ0QTJGNkNGNUY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjNDM0I2QTJBRjI0OEUxMTFCRjc0OUREODk5QUY1QzdGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDozQzU4MkNCQTA4NkJFMjExQTJGRjkzNzkyOTdFRjJDRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6M0UzQjZBMkFGMjQ4RTExMUJGNzQ5REQ4OTlBRjVDN0Y8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjNFRDMwQTc3Nzk2MUUyMTFCMzJGRDU4NkI1NDE5RDQzPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDozRkExN0FERDU0MzJFMjExOTlFRkFCNDVBMkIwREM1NjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NDA2RkJFRTY3NzZDRTIxMUEyRkY5Mzc5Mjk3RUYyQ0Q8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjQxMEVDODg0NjhEREUwMTFCNzkxQjU3NjkzODI4RjQwPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo0MTkwNDlEQUYxRDNFMDExQkY1MkFFRjVCQjVDODBGNzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NDJGMzU2MjhENzM3RTIxMTgxMTc5QTM0NEY4MTMzN0Y8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjQ0MEVDODg0NjhEREUwMTFCNzkxQjU3NjkzODI4RjQwPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo0N0YzNkRDNTZEODVFMDExQjRCQUVGQUQwQjExQURDMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NEFGMzZEQzU2RDg1RTAxMUI0QkFFRkFEMEIxMUFEQzM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjRGMTE2QzgxN0VEREUyMTE5ODI4RDE0M0I1REE3REQ4PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo0RjI3MkVGRjUwREVFMDExQkVDOTlCODYxQjA0OUM0NTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NTI3RkMwNDI1QjQwRTExMTg2NTJBNEQ2NjNFNEUzQjQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjUzMUM4ODkzQ0YzNEUyMTE4MTE3OUEzNDRGODEzMzdGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo1MzY2REU5MTNCNzRFMjExQTJGRjkzNzkyOTdFRjJDRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NTM5QUNGMjczN0M4RTAxMTk0REJFMjVCQkY2MjFDMTg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjU2MERBNTJFQTY3OUUxMTE5RTc0REE5NTBFMEIzMDdEPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo1NzIyN0Q0MTQzRDRFMjExODM1QTk3MzAxRTg5RDM4RTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NTgwREE1MkVBNjc5RTExMTlFNzREQTk1MEUwQjMwN0Q8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjU4QjNFNjJBRjA1OEUyMTE4RjJEOUYzMDVGRjMyRkY2PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo1QzFCNzQzRDQ4QjJFMjExQjZCOEFERDY5NzlFMjhBQTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NURDRDQ2MEZGMzE5RTExMUFEMUNEMjAxREJEMkZEREI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjVFMjkzRDJCRjQ3NEUxMTFBNUFCOTE2RkQ0RjM1MEE5PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo1RTlCMkU3NTg5NkZFMjExQTJGRjkzNzkyOTdFRjJDRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NWE3MmZjZjgtMGI5NS04NDRiLTllYzMtMTNiYzkwZmRiODVlPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo2NDA0MkNEODJEQzFFMjExOUVCM0FDNjg4MEFGMzNBNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NjZDNkUzRTMzREQ0RTIxMTgzNUE5NzMwMUU4OUQzOEU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjZBQzZFM0UzM0RENEUyMTE4MzVBOTczMDFFODlEMzhFPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo2QzdCNUVEM0ZBRkVERTExODVBQkRCREMyRDVERDhFNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NkQyQkUyQzBEOUJCRTIxMTkyREZCOEFDNEQzQTVGOEE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjZGQjI1QTMyRjc4MEUyMTFCQTU4QTgxMEZENjNBMzM5PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo3MEQ0NkY1RTNDQkVFMjExQUIwQ0JDNUY2OEQ5RjgwNDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NzJENDZGNUUzQ0JFRTIxMUFCMENCQzVGNjhEOUY4MDQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjcyRTUwQjNDQUZFRkUyMTFCRDczREVENUM0QURCNDY1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo3M0MyM0E4MEMwRDRFMDExQkY5QkFFNzE1NzNEOEU1QjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NzY3NTlDNzRDRkQzRTAxMThGRDZFNjhFQjVFRDc3N0Y8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjc3NEIyMzQzQkFENkUzMTFBRDE4RTI4NjExRTg1RUI4PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo3N0FEMzMyMDJFNkFFMjExQTJGRjkzNzkyOTdFRjJDRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NzlBRDMzMjAyRTZBRTIxMUEyRkY5Mzc5Mjk3RUYyQ0Q8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjc5QUQ3RTU1MjJBQ0UyMTE4OEJERDJCQjZGQzkyMzQyPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo3QkFEMzMyMDJFNkFFMjExQTJGRjkzNzkyOTdFRjJDRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6N0M5RDQ0NUFFM0EyRTQxMTg4MEU4MzdENjVERUFBNzI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjdENUE5NjI5MzFFRUUyMTFCRDczREVENUM0QURCNDY1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo3RDc1OUM3NENGRDNFMDExOEZENkU2OEVCNUVENzc3RjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6N0RBRDMzMjAyRTZBRTIxMUEyRkY5Mzc5Mjk3RUYyQ0Q8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjdFRDg0NjZCMUNDMkUyMTE5RUIzQUM2ODgwQUYzM0E1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo3RjUyMDMwODIzRDBFMDExOUJBNzlDRjk0NDIyM0UyNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6N0ZBRDMzMjAyRTZBRTIxMUEyRkY5Mzc5Mjk3RUYyQ0Q8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjgwMTBDNEY5RThBQ0UyMTE5ODdCRTc2QjYxQzJCNkY1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo4MDEwRDE0MENBRDNFMDExOEZENkU2OEVCNUVENzc3RjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6ODA1QTk2MjkzMUVFRTIxMUJENzNERUQ1QzRBREI0NjU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjgwNzU5Qzc0Q0ZEM0UwMTE4RkQ2RTY4RUI1RUQ3NzdGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo4MTEwRDE0MENBRDNFMDExOEZENkU2OEVCNUVENzc3RjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6ODIyMEZFRjExQTk2RTExMUIzRDBFNURBOURFQ0IyRTk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjgyOUQxM0YzNjJERUUwMTE5QTI4OEE0NTNBMTIyNUQ0PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo4MkY2QkE0ODgxQkRFMjExOTJERkI4QUM0RDNBNUY4QTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6ODU1MDQ0NjktMzhhOC1jNjRlLTg0MWUtOTJmN2VmZmRlZjg2PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo4NUY3NTBDQ0ZGMEVFMTExODI2OUFBM0FCNjMwRDRDMjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6ODc4REE3MDY2Mjc0RTIxMUEyRkY5Mzc5Mjk3RUYyQ0Q8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjhBOEZBNTIyNDM3MUUyMTFBMkZGOTM3OTI5N0VGMkNEPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo4QjhDNTk0MEM3RUVFMjExQkQ3M0RFRDVDNEFEQjQ2NTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OEJDMTczNDNEQURGRTAxMTgxMjZBMjNBRTJGNDIzOTA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjhDQURCMjEwRUFCQ0RGMTE5MDIzOUJDOTM5NkIyOTI0PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo5MGNkYTBjOS04MzJhLTRhNDUtYmYzZS0zMDhmZjEzNzBiMzM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjkzNEEwRUM4QTJEREUwMTE5QTI4OEE0NTNBMTIyNUQ0PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo5NTVCNkFEN0RCRDNFMDExQkY5QkFFNzE1NzNEOEU1QjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OTU4NUZENzg0QkQzRTIxMUE4NDRGNjRFNTAwRDEyQTk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjk2RDVGMTYxQzZGOUUyMTFCOTA4RURFNUM5MDY4QzA0PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo5OTRBMEVDOEEyRERFMDExOUEyODhBNDUzQTEyMjVENDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OTk1QjZBRDdEQkQzRTAxMUJGOUJBRTcxNTczRDhFNUI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjk5QkQ5MDk5RDBCRUUwMTFBMTM2RUNDOUQ5ODA5MDYzPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo5QkJEOTA5OUQwQkVFMDExQTEzNkVDQzlEOTgwOTA2MzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OUM4MzIyMzZEMkUzRTAxMTg3RkI4NTY5RDE3MUQ4MEM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjlFMzNDQkY2REMxQUUxMTFBRDFDRDIwMURCRDJGRERCPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo5RTQ0NDBBM0UxRUFFMDExQkYxRkM5QUZBN0M4RDQwQzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OUZDMkUyNjUyMDQ5RTExMTkyNkFCQjA5ODQxNDJBNDA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkEyNjk0NEVBMDRGN0UxMTFCQTYwRTgxNjM4RUUyOEFDPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpBQjVDOUQ1REZCRTNFMjExOTU5MUE4OUU4RkY4MDVDMDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QUI5MzU5Q0I0RkVERTIxMUJENzNERUQ1QzRBREI0NjU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkFFN0VGOUE5NDM5REUyMTE4OTdEQUU0QkJGRTczNzBCPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpCMTcxREVCRjc4QjlFMjExOTc4MEE4QTI0Q0FDNEZGRTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QjZDRDczRjM2OTFDRTExMTg5RjVEQTNCOUVENTIxRjc8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkI3MDg3MEExMjdFOUUwMTE4MDQ3QzJGOEQyNkMyNEJEPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpCODkxQzU4MThEOERFMjExQUZGNTgxMzRGOTg2RUNENzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QkE4OTY3NkM1OENFRTAxMTk1RjJFN0Y0NzI1MzRCNEI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkJCRUQwODI0MzRDMkUyMTE5RUIzQUM2ODgwQUYzM0E1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpCQzg2QTQ4OTc2RjBFMjExQkQ3M0RFRDVDNEFEQjQ2NTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QkQ4NkE5MjA0NDdFRTExMUI0RDNDQjdGRUVBQkYzQ0Y8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkJFM0I4RjJFQzg1QkUxMTE4Q0FFQkQyQUYwRjQ2ODc1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpCRjExNzJGMTVCQTBFMjExODM1QkVCMDVGQUY5RkRGNjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QkYzQjhGMkVDODVCRTExMThDQUVCRDJBRjBGNDY4NzU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkJGNDhGNDYwNjRFREUyMTFCRDczREVENUM0QURCNDY1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpDMDlGMDAwNjExQzhFMDExQkY0NTg1MUFBQUE5MkYxMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QzBEREQxRDA0MEM4RTIxMUJENzZGNEM0NjgxQjAyQTY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkMxREREMUQwNDBDOEUyMTFCRDc2RjRDNDY4MUIwMkE2PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpDMkREQTMwMkMxMzdFMTExQTVEOTg5RTRCODUwRjc0RTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QzQ0MzZCMzkyRURFRTAxMUFFMTNCOTIwODMyMDhFODc8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkM2NTUxNEI0RUNGOUUyMTFCOTA4RURFNUM5MDY4QzA0PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpDNjczMDU1NjU0RDJFMDExQjg4NkI5Nzg1NjRBRDZDNDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QzdBN0E0MzlCRjQ2RTExMUEyQzRCQjNCQzU3OTkzQTU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkM4QURFMDIxMTIwMEUxMTE4QkZFQUE2OTg2RERDNjVBPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpDOENGRkIyQzM3MzNFMjExOTlFRkFCNDVBMkIwREM1NjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QzlCNTYxOTU3MjYxRTIxMUIzMkZENTg2QjU0MTlENDM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkNFMjcxQTIxQTRENEUwMTFCRjlCQUU3MTU3M0Q4RTVCPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpDRjUxM0NFMURBRDNFMDExOEZENkU2OEVCNUVENzc3RjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RDE0NTI3RDVFN0UyRTAxMUE0NkU4RTExMDc3OEU2MDk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkQ1NkVDRjNEQ0REM0UwMTE4RkQ2RTY4RUI1RUQ3NzdGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpENjE1MTI1MjEwM0JFMTExODIxRjlERDIwMkU0RUI5OTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RDc2RUNGM0RDREQzRTAxMThGRDZFNjhFQjVFRDc3N0Y8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkQ4NkVDRjNEQ0REM0UwMTE4RkQ2RTY4RUI1RUQ3NzdGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpERjU5MkUzRUU3ODBFMjExODBCREI1MDkwOUZCRTA2QTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RTBDNTRCQkYwQjc4RTExMTlFNzREQTk1MEUwQjMwN0Q8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkUyMTM1M0Q5QUNBNkUyMTFBMEE2ODQ5QjcxMjc3NEY4PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpFMjlGRjM3RDY1MjNFMjExQURFRkMxMEJFNDI5MTM3RDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RTM1OTJFM0VFNzgwRTIxMTgwQkRCNTA5MDlGQkUwNkE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkU0OTg0Njg4NUJFNEUwMTE5MzIyRkNCMDBDMTczRUIzPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpFNTEzNTNEOUFDQTZFMjExQTBBNjg0OUI3MTI3NzRGODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RTUzQzAyRjZCQzFBRTExMUFEMUNEMjAxREJEMkZEREI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkU1NDg4Q0Q3MDcyMDY4MTE4MjJBQkIxNDNBMTJFRTgxPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpFOEY4RTlFQkVENDlFMjExQUNBMEZDRDgwQzRBQzExMjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RTlBNUQxOERDNDM1RTAxMUI1NzNGOTU1N0ZENEQzODU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkVFMkZBM0YxODAxMEUxMTFBQTk5ODc3QUVCQzhEMDExPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpGMjJDOEYyQUU1NzVFMjExQjRCM0U4NEMzN0YxMDc1RDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RjI2RTlGN0MzQzZBRTIxMUEyRkY5Mzc5Mjk3RUYyQ0Q8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkY0NkM3NkUzNEVDRkUwMTE5QkE3OUNGOTQ0MjIzRTI1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpGNUREQjY3QUE1MDBFMTExQkQ0RkFGNTk0MzFGRTU2RjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RjY2RTlGN0MzQzZBRTIxMUEyRkY5Mzc5Mjk3RUYyQ0Q8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkY5QjYyODg1NzE2NUUyMTFCMzJGRDU4NkI1NDE5RDQzPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpGQjZEQzYzNTNEMEJFMzExODdDRUNGQ0UzN0UxNjdDRjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6YTc1MzI3NWItNzFkNS05NjQ2LWI5NWItYTFmMGYzZTk2N2M3PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDphOWU3ZDA4NS1kOGU4LTE3NDAtYjg1OC0zYjdjOWIxNGYyN2Q8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOmMwNDllN2EyLTQ1MmMtNDc0OC04YTNhLWE1MmFkNjIyZjQ5ZTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6ZDY4MzhhOTUtZDFlYi1hNzRjLWJhMGEtODMyYjQ3ZjE4YWJmPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpkNmI1Mjk1Yi0yYzNlLTc1NDQtOTQxNC1kZmM3MTM3MGZkZTc8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOmRjOGYzYzJkLTQwM2ItNjY0YS04NTg3LWIyYmQ5Mzg0M2QxZDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpCYWc+CiAgICAgICAgIDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICA8cGhvdG9zaG9wOkNvbG9yTW9kZT4zPC9waG90b3Nob3A6Q29sb3JNb2RlPgogICAgICAgICA8cGhvdG9zaG9wOklDQ1Byb2ZpbGU+c1JHQiBJRUM2MTk2Ni0yLjE8L3Bob3Rvc2hvcDpJQ0NQcm9maWxlPgogICAgICAgICA8ZGM6Zm9ybWF0PmltYWdlL3BuZzwvZGM6Zm9ybWF0PgogICAgICAgICA8dGlmZjpPcmllbnRhdGlvbj4xPC90aWZmOk9yaWVudGF0aW9uPgogICAgICAgICA8dGlmZjpYUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WFJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOllSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpZUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6UmVzb2x1dGlvblVuaXQ+MjwvdGlmZjpSZXNvbHV0aW9uVW5pdD4KICAgICAgICAgPGV4aWY6Q29sb3JTcGFjZT4xPC9leGlmOkNvbG9yU3BhY2U+CiAgICAgICAgIDxleGlmOlBpeGVsWERpbWVuc2lvbj4xNjwvZXhpZjpQaXhlbFhEaW1lbnNpb24+CiAgICAgICAgIDxleGlmOlBpeGVsWURpbWVuc2lvbj4xNjwvZXhpZjpQaXhlbFlEaW1lbnNpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgIAo8P3hwYWNrZXQgZW5kPSJ3Ij8+6DKg1AAAACBjSFJNAAB6JQAAgIMAAPn/AACA6QAAdTAAAOpgAAA6mAAAF2+SX8VGAAAEIElEQVR4AQAQBO/7AwAAAAAAAAAAAAAALR0dHWpsbGx6hISEjjQ0NFr39/cv4ODg+AAAAAQAAAAgAAAANiEhIVnw8PDgAAAA8AAAAAABAAAAAAAAAEFTU1NmU1NTPRYWFhMICAgICwsLANvb2+jW1tbe4uLi3B8fHw4fHx8k/f39AHZ2dqft7e2MAAAA+gEAAAAAAAAAcbe3t4sVFRUDAQEBAP///wAdHR0A4eHhABEREQDp6ekAICAgAP///wAREREAHR0dge/v74oAAAD2AgAAAAMICAgF/Pz8+vj4+AD09PQA+Pj4AO/v7wDs7OwA+vr6AA8PDwAKCgoAAgICAP7+/gD7+/sdAAAAGAAAAAACAAAACxMTEw8JCQkF+/v7APz8/AD9/f0ABAQEAAgICAAAAAAA8PDwAPT09ADy8vIA/Pz8ABkZGTAAAAAoAAAAAAIAAAAeLCwsJAwMDAT///8ACwsLABAQEAAKCgoAAAAAAAcHBwD5+fkA/v7+APLy8gAEBAQAOzs7EgAAAA8AAAAAAgAAACs8PDwzBQUFAP7+/gDx8fEA7OzsAPDw8AD8/PwABgYGAA4ODgALCwsACAgIAAEBAQA7OzsPAAAADAAAAAACAAAAEyUlJRnz8/MA////AAEBAQD///8A7OzsAO/v7wDs7OwA5eXlAPj4+ADv7+8A8fHxACoqKg4AAAAdAAAADQQAAAAI////CQICAgAAAAAABgYGAPf39wD19fUACwsLAOXl5QAJCQkA6enpAP7+/gDz8/MA8/PzAwAAABQAAAAQBAAAAAEYGBgBEBAQAAICAgAAAAAA+/v7AP///wD7+/sA8/PzAAgICAABAQEADQ0NAAYGBgAXFxcACAgIGfj4+F0EAAAAAPr6+gDR0dEAycnJ8snJyfYICAgDOTk5DS8vLwcWFhYBDQ0NAAgICADz8/MA/Pz8APj4+AAKCgoM+Pj4DAEAAABEAAAAcwAAAB4AAADxAAAAAAAAAP8AAAD/AAAABwAAAAojIyMN9vb2/+zs7PX7+/v2AAAA/wAAAOQAAADcBAAAAN8AAADmAAAAEQAAAAYAAAACAAAA/gAAAP8AAAD/AAAA7d3d3doAAAD7AAAACQAAAAQAAAAOAAAAAwAAAAMBAAAAAAAAACMAAABZAAAAEgAAABUAAAATAAAA+wAAAOsAAADqAAAArAAAAPsAAABJAAAACQAAAAsAAAAAAAAA8gEAAAAAAAAAAAAAAAcAAAAQAAAAZwAAABoAAAD5AAAA5gAAAJgAAADxAAAAAAAAAAMAAAAGAAAACQAAAAAAAAD2AQAAAAAAAAAAAAAAAAAAAAAAAAAJAAAAFQAAAPsAAADrAAAA/AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAD//12KGcTjNyRjAAAAAElFTkSuQmCC';

Assets['icons/icon_Blueprint_Branch_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_BreakStruct_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_CallInEditor_16x'] = 'data:image/png;base64,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/GMzLdsAAF2yaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAyMSA3OS4xNTQ5MTEsIDIwMTMvMTAvMjktMTE6NDc6MTYgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTQtMDctMjVUMDg6Mzg6MTErMDE6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDE0LTA3LTI1VDA4OjM4OjExKzAxOjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNC0wNy0yNVQwODozODoxMSswMTowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6ZDAzN2NjMDUtODdlYS03NTQxLTg1ODYtMDZjNzc2MGY3MDIwPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOmI2NDBkOWM4LTQyYWItNGQ0My05NTExLTIyYjU1M2NiZDc5MzwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOmI2NDBkOWM4LTQyYWItNGQ0My05NTExLTIyYjU1M2NiZDc5MzwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDpiNjQwZDljOC00MmFiLTRkNDMtOTUxMS0yMmI1NTNjYmQ3OTM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTQtMDctMjVUMDg6Mzg6MTErMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmQwMzdjYzA1LTg3ZWEtNzU0MS04NTg2LTA2Yzc3NjBmNzAyMDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNC0wNy0yNVQwODozODoxMSswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICAgICA8cmRmOkJhZz4KICAgICAgICAgICAgICAgPHJkZjpsaT4wQkE2QkYyQUU5MTc1NzhEODI1NDk3RDgxNjJDRjYzODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPjc5MkVBODUxNzZFMjM2MzM2QzBBMUU3MjZCOEYzOUY1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+ODA0NjQxMjM2OUZEMjdFMzExMzZGMzE0NDEwQzI4NTI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT45Mjg2MTlBRkJDREVFOUVGOTE1N0ZDQTU5MTAzQjJCQTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkJCRDgwQjJDNTA5M0EwNDFCRTg5MTE0NTlEOEJBQzE1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+REJFREIxMUIzODBBNERDNDQ2MTU0RUMzQzBBNTk4QUI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5FQTI4RkZCRjdFNEU0MTMyQjYxNUVCRUY5ODhGQkYxOTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPkYwNDI4RDBBMjQyNDU4QzFGM0MyQUUyN0YyRkVDMzkzPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+RkNGMDREQ0M0Q0M0MDE4RjUzQUY1N0I1OTIzRkRGMjA8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6MGM0YTU3NDktZDM3Ni0xMWRhLWI3YmItOWQwNTdhM2I4ZDg2PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOjEzZjFiMjdlLTRiMGQtMTFkYS05OGFkLWZjYjc4NDc5MTEzODwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPmFkb2JlOmRvY2lkOnBob3Rvc2hvcDo1N2IxNGMyNi01MjMyLTExZGQtYjI5NS1jMWNlNjNkMTk1MmI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5hZG9iZTpkb2NpZDpwaG90b3Nob3A6Y2VkMDI4NWEtODIwYS0xMWRiLWE1NDMtYzZkYjZhY2ZhOTdlPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+YWRvYmU6ZG9jaWQ6cGhvdG9zaG9wOmQ5YmE0Mjc0LTA3MWUtMTFkYS1hODEwLWNiY2IwMjM0NTQ1NjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MDFERTZFMUY2OTRFREQxMThGNTE4NkU0NUY3NkU1OTI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjEyODc3NDFFNjk0RUREMTE4RjUxODZFNDVGNzZFNTkyPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDoxNEQ1ODNBODI4RDJFMDExQjlCNkYwMkU2NTlEMURDNDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6MUVFMEMxRUYyMTc3REExMTkzRDNBMjYwMkJBNURENzI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjIxRDdGNUZENzU2M0UxMTE4NEEzOUNCNUFDNDI0NDk5PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDozQUE5OTVFNUUyOThEQzExOUJBNkJFNDAxQjVFMzMzOTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6M0ZBNjA1MDU3NTU4REYxMTkzRkNFNjJDMkYyMzQzREY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjRBRTU4OERCMkQxN0RBMTE5RTE0RUVBOEI4QUJGNjc5PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDo1Q0IxNzU2MUJFNzBERTExQkM4OTgyMkIzNUJERERBNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6NjA5MDE2MkZBMzNBRTExMUE2RDc4RDU2MzE2RTEzNDU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjgwODY5QjJDRUUzRkUxMTE4RDgxOUU5N0E2Qjk3NTFGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDo4NTg2OUIyQ0VFM0ZFMTExOEQ4MTlFOTdBNkI5NzUxRjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6ODVCQzU5MjI5MkFDREMxMThGRjlCRTYxQjUzMTM1NDk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOjg5QkM1OTIyOTJBQ0RDMTE4RkY5QkU2MUI1MzEzNTQ5PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDo4QzIyNzVFQzIyQ0FERDExOUMyM0VGOEY2NTE1NkEwRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6OENCNTI4MUM3NDdCREMxMUIzRUVFMDM0RkY1Mjc1RDU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkExOUZBMzcwQkU3MERFMTFCQzg5ODIyQjM1QkREREE1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDpBOUQxNzU4NUVGMzhEQTExQjgyQkVGMzA1MTI1RkU5MDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6QzEwRUFBNjg3QkFFREMxMUIwRkVENzM2QkRGNzRGM0I8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkMxRDUwREM2M0QzQ0UxMTFBN0JDRDFGRkNCOThFQzM5PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDpDQzM0NTA0RjMxMTdEQTExOUUxNEVFQThCOEFCRjY3OTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6Q0Q4MEQ1ODNERUU3REIxMThDQTdGQzU1ODcxMTcyOUM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT51dWlkOkRBMjc2RTVCQUUyRkUxMTFBNjJFRUM5RTYwNTVBQ0Q2PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+dXVpZDpGOTU4MTY2OTdEMkZERTExQTc4OUZDRTFDMjFFRDE0RDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnV1aWQ6RkIxMTcyNkUzRTM4REYxMUJERTM4RjdGRUMyNTBGMjM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjAwOUNFRTMyRUQwNkUxMTFCQkMyOENERUIxNUI1RDMzPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDowMkVDNkExODFGRTVFMDExQTg5NzhCRjczQzYwMDU3NjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MDM5Q0VFMzJFRDA2RTExMUJCQzI4Q0RFQjE1QjVEMzM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjA0ODIxNzQ5RTZGRkUwMTFBRTE5RUIwNDIwRTZEMjEzPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDowNTgyMTc0OUU2RkZFMDExQUUxOUVCMDQyMEU2RDIxMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MTA3MEI0RDcxRTVGRTExMTlBNURCMkExNkFDQTgwNEE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjEwQUFFRkJDRkUyNEUxMTFCNzFCODg1ODM4NkEwMUE3PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoxMTk0MEEwNURDMTlFMTExQTY1RTg0NDRBMkY2Q0Y1RjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MTc3ODcyQUY2N0QyRTAxMThFRTM5N0UzQ0NGNzM5RUQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjE3OTQwQTA1REMxOUUxMTFBNjVFODQ0NEEyRjZDRjVGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoxODdGN0NGNTgxMzZFMTExOTQ0NkM3NTNENEJGN0NGMjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MTk3ODcyQUY2N0QyRTAxMThFRTM5N0UzQ0NGNzM5RUQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjE5Q0IyOEY2NTdCQkRGMTE4NkE4RUVFNTMzMzg5RDY1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoxQjc4NzJBRjY3RDJFMDExOEVFMzk3RTNDQ0Y3MzlFRDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MjAwRDlGOTRCREM2RTAxMUI3NDNCNENBQTc1NUNGOUM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjIwMzRFQjVDMkJCQ0RGMTE4RDZEREJDQ0M3NzdGMUM5PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoyNDM0QjdDMTA2OUVERTExQjE5OUI4NTVENzYyMzg4OTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MjRCMUFGOUJFQkRGRTAxMThFMDc4MEFBQzRGRERDMEQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjJBQ0JEQzFCRTRDQ0UwMTE5RTBDRkE3Q0Y3ODU4M0M5PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDozMkFCMERERjgyNjFFMTExOTMwMEUzOEU2RjA5RjY2NjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MzdCMkJDQjcyNEQzRTAxMThGRDZFNjhFQjVFRDc3N0Y8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjNCMDhGMTc3NzQ3M0UxMTFBMTBFQ0MyNTc4RjY4QzczPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDozQkZCRTU2Qjc3MUFFMTExQTY1RTg0NDRBMkY2Q0Y1RjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6M0MzQjZBMkFGMjQ4RTExMUJGNzQ5REQ4OTlBRjVDN0Y8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjNFM0I2QTJBRjI0OEUxMTFCRjc0OUREODk5QUY1QzdGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo0MTBFQzg4NDY4RERFMDExQjc5MUI1NzY5MzgyOEY0MDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NDE5MDQ5REFGMUQzRTAxMUJGNTJBRUY1QkI1QzgwRjc8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjQ0MEVDODg0NjhEREUwMTFCNzkxQjU3NjkzODI4RjQwPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo0N0YzNkRDNTZEODVFMDExQjRCQUVGQUQwQjExQURDMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NEFGMzZEQzU2RDg1RTAxMUI0QkFFRkFEMEIxMUFEQzM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjRGMjcyRUZGNTBERUUwMTFCRUM5OUI4NjFCMDQ5QzQ1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo1MjdGQzA0MjVCNDBFMTExODY1MkE0RDY2M0U0RTNCNDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NTM5QUNGMjczN0M4RTAxMTk0REJFMjVCQkY2MjFDMTg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjU2MERBNTJFQTY3OUUxMTE5RTc0REE5NTBFMEIzMDdEPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo1ODBEQTUyRUE2NzlFMTExOUU3NERBOTUwRTBCMzA3RDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NURDRDQ2MEZGMzE5RTExMUFEMUNEMjAxREJEMkZEREI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjVFMjkzRDJCRjQ3NEUxMTFBNUFCOTE2RkQ0RjM1MEE5PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo2QzdCNUVEM0ZBRkVERTExODVBQkRCREMyRDVERDhFNTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NzNDMjNBODBDMEQ0RTAxMUJGOUJBRTcxNTczRDhFNUI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjc2NzU5Qzc0Q0ZEM0UwMTE4RkQ2RTY4RUI1RUQ3NzdGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo3RDc1OUM3NENGRDNFMDExOEZENkU2OEVCNUVENzc3RjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6N0Y1MjAzMDgyM0QwRTAxMTlCQTc5Q0Y5NDQyMjNFMjU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjgwMTBEMTQwQ0FEM0UwMTE4RkQ2RTY4RUI1RUQ3NzdGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo4MDc1OUM3NENGRDNFMDExOEZENkU2OEVCNUVENzc3RjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6ODExMEQxNDBDQUQzRTAxMThGRDZFNjhFQjVFRDc3N0Y8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjgyMjBGRUYxMUE5NkUxMTFCM0QwRTVEQTlERUNCMkU5PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo4MjlEMTNGMzYyREVFMDExOUEyODhBNDUzQTEyMjVENDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6ODVGNzUwQ0NGRjBFRTExMTgyNjlBQTNBQjYzMEQ0QzI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjhCQzE3MzQzREFERkUwMTE4MTI2QTIzQUUyRjQyMzkwPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo4Q0FEQjIxMEVBQkNERjExOTAyMzlCQzkzOTZCMjkyNDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OTM0QTBFQzhBMkRERTAxMTlBMjg4QTQ1M0ExMjI1RDQ8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjk1NUI2QUQ3REJEM0UwMTFCRjlCQUU3MTU3M0Q4RTVCPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo5OTRBMEVDOEEyRERFMDExOUEyODhBNDUzQTEyMjVENDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OTk1QjZBRDdEQkQzRTAxMUJGOUJBRTcxNTczRDhFNUI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjk5QkQ5MDk5RDBCRUUwMTFBMTM2RUNDOUQ5ODA5MDYzPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo5QkJEOTA5OUQwQkVFMDExQTEzNkVDQzlEOTgwOTA2MzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OUM4MzIyMzZEMkUzRTAxMTg3RkI4NTY5RDE3MUQ4MEM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjlFMzNDQkY2REMxQUUxMTFBRDFDRDIwMURCRDJGRERCPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo5RTQ0NDBBM0UxRUFFMDExQkYxRkM5QUZBN0M4RDQwQzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QjZDRDczRjM2OTFDRTExMTg5RjVEQTNCOUVENTIxRjc8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkI3MDg3MEExMjdFOUUwMTE4MDQ3QzJGOEQyNkMyNEJEPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpCQTg5Njc2QzU4Q0VFMDExOTVGMkU3RjQ3MjUzNEI0QjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QkQ4NkE5MjA0NDdFRTExMUI0RDNDQjdGRUVBQkYzQ0Y8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkJFM0I4RjJFQzg1QkUxMTE4Q0FFQkQyQUYwRjQ2ODc1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpCRjNCOEYyRUM4NUJFMTExOENBRUJEMkFGMEY0Njg3NTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QzA5RjAwMDYxMUM4RTAxMUJGNDU4NTFBQUFBOTJGMTM8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkM0NDM2QjM5MkVERUUwMTFBRTEzQjkyMDgzMjA4RTg3PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpDNjczMDU1NjU0RDJFMDExQjg4NkI5Nzg1NjRBRDZDNDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6QzdBN0E0MzlCRjQ2RTExMUEyQzRCQjNCQzU3OTkzQTU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkM4QURFMDIxMTIwMEUxMTE4QkZFQUE2OTg2RERDNjVBPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpDRTI3MUEyMUE0RDRFMDExQkY5QkFFNzE1NzNEOEU1QjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6Q0Y1MTNDRTFEQUQzRTAxMThGRDZFNjhFQjVFRDc3N0Y8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkQxNDUyN0Q1RTdFMkUwMTFBNDZFOEUxMTA3NzhFNjA5PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpENTZFQ0YzRENERDNFMDExOEZENkU2OEVCNUVENzc3RjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RDYxNTEyNTIxMDNCRTExMTgyMUY5REQyMDJFNEVCOTk8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkQ3NkVDRjNEQ0REM0UwMTE4RkQ2RTY4RUI1RUQ3NzdGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpEODZFQ0YzRENERDNFMDExOEZENkU2OEVCNUVENzc3RjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RTBDNTRCQkYwQjc4RTExMTlFNzREQTk1MEUwQjMwN0Q8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkUyOUZGMzdENjUyM0UyMTFBREVGQzEwQkU0MjkxMzdEPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpFNDk4NDY4ODVCRTRFMDExOTMyMkZDQjAwQzE3M0VCMzwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RTUzQzAyRjZCQzFBRTExMUFEMUNEMjAxREJEMkZEREI8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkU5QTVEMThEQzQzNUUwMTFCNTczRjk1NTdGRDREMzg1PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpFRTJGQTNGMTgwMTBFMTExQUE5OTg3N0FFQkM4RDAxMTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6RjQ2Qzc2RTM0RUNGRTAxMTlCQTc5Q0Y5NDQyMjNFMjU8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkY1RERCNjdBQTUwMEUxMTFCRDRGQUY1OTQzMUZFNTZGPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOkJhZz4KICAgICAgICAgPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjE2PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjE2PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz6zI0FxAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAQgSURBVHgBABAE7/sA6fH3AAAAAAEAAAALEBERK5+kqZfK0dbMUVRWSAAAABMAAAAMAAAAH6OorJXT2uDhn6SpmhobHCwAAAAJ6fH3AAGywN0ATkAjA0dMWDJUW2ihFxkdKQAAAADg3djVvrmuoBETFQP8+/sVTlRhawcICQgAAAAA6efjzIV8aFHg3djlBPf4/AAAAAAB/v8BDQoNFCL3+PwAAAAAABcbJCtZYnaLAAAAAAAAAAD+AAAA9/j8APz8+/zj4uLX6Obi+am42f8E+Pn8AAAAAP27tafgKC04vDQ5REsAAAAAAAAAAAAAAAAAAAAAAAAAAP///wDx8OztubGin7ixob7+/v0cV0gnBAT3+PwAAAAAAgQEBQcPEhke9/j8AAAAAAAAAAAAAAAAAAAAAAAAAAAA9fPw8qSag5dFTV8/TlhvdAAAAADj4NiyAQAAABIAAAATTFRrXUVOYn0AAAAAAAAAAAAAAAD9/fz89PLv7wsNDw3Fva2gExYbICwxPki4sJuPAP//8khRZn8BZ3SXmAgJCzMQEhcmCw0RDgAAAAAAAAAA9fPv8Lqym4DPyLfHIyg0E/v6+RxZZIGJBgcJCHtqPkcXGiLh9/XyAQQYHileBQUHCQAAAAD6+/0AAAAAAAAAAADX08m4x7+srwAAAOwhJTNDHyQvYQUIDhH5+ff3SFNtJ7itk8wAAAD4BPv6/f8AAP4AAAAAAAAAAAAAAAAAAAAAAP39/gAAAAAAAAAAC/Hw7SP6+vsS+/v+AOnm4ev8+/wdAAAADH+SxfcC8fDt2fj49/j7/Pz//P3+APz9/gD8/f4AHiU0SDM7UE0EBQcmPklkjxYbJyf8/f4AFBkkHjdBWn4AAAAG/P3+AQPl4NS/3NbHufr59vkZHSgyAAAAAAAAAAAFBggIIig3RyAkMh+snXmSIic2MwgJDAqom3ZvtKeIc////uo+SGL6BObi19sAAADh3NbH4h4jMTsUFx8pAAAAAAAAAAACAgMDExYeMhEUG8AOERYS9fTv7AMDBNH9/fvbe4/D/AAAAAACe4/D/3uPw/kAAADt0cm1p/7+/f308u3t8/Hs6/38+/sCAgMBBwkMEAICAwTv7OXV4t3Q4gAAAP0AAAAAAAAAAAQAAAAAAAAAAAQFBwUvNkpD8/Dr3LKmhIf//wD5EhUcEx4jLyEcIS0fAAAAAPDt58749/Twe4/D/wAAAAAAAAAAAgAAAACFcT0BDQ8UAgYICwXt6uK74t3R11Fef3ojKDYvtqmLxyUqOj729fHo4NzOtwAAAPcAAAAAAAAAAAAAAAACAAAAAHuPw//v7OXsqJp0XgUGCM8DAwX2CAkNHCMpOFJpe6Z8AAAA9se9pXPRybXMAAAA+gAAAAAAAAAAAAAAAAEAAP//VwWHodA7ug4AAAAASUVORK5CYII=';

Assets['icons/icon_Blueprint_Cast_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_CommentBubbleOff_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_CommentBubbleOn_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_CommentBubblePin_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_CommentBubbleUnPin_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_Comment_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_Conduit_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_CustomEvent_16x'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGOfPtRkwAAACBjSFJNAACHDwAAjA8AAP1SAACBQAAAfXkAAOmLAAA85QAAGcxzPIV3AAAKOWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAEjHnZZ3VFTXFofPvXd6oc0wAlKG3rvAANJ7k15FYZgZYCgDDjM0sSGiAhFFRJoiSFDEgNFQJFZEsRAUVLAHJAgoMRhFVCxvRtaLrqy89/Ly++Osb+2z97n77L3PWhcAkqcvl5cGSwGQyhPwgzyc6RGRUXTsAIABHmCAKQBMVka6X7B7CBDJy82FniFyAl8EAfB6WLwCcNPQM4BOB/+fpFnpfIHomAARm7M5GSwRF4g4JUuQLrbPipgalyxmGCVmvihBEcuJOWGRDT77LLKjmNmpPLaIxTmns1PZYu4V8bZMIUfEiK+ICzO5nCwR3xKxRoowlSviN+LYVA4zAwAUSWwXcFiJIjYRMYkfEuQi4uUA4EgJX3HcVyzgZAvEl3JJS8/hcxMSBXQdli7d1NqaQffkZKVwBALDACYrmcln013SUtOZvBwAFu/8WTLi2tJFRbY0tba0NDQzMv2qUP91829K3NtFehn4uWcQrf+L7a/80hoAYMyJarPziy2uCoDOLQDI3fti0zgAgKSobx3Xv7oPTTwviQJBuo2xcVZWlhGXwzISF/QP/U+Hv6GvvmckPu6P8tBdOfFMYYqALq4bKy0lTcinZ6QzWRy64Z+H+B8H/nUeBkGceA6fwxNFhImmjMtLELWbx+YKuGk8Opf3n5r4D8P+pMW5FonS+BFQY4yA1HUqQH7tBygKESDR+8Vd/6NvvvgwIH554SqTi3P/7zf9Z8Gl4iWDm/A5ziUohM4S8jMX98TPEqABAUgCKpAHykAd6ABDYAasgC1wBG7AG/iDEBAJVgMWSASpgA+yQB7YBApBMdgJ9oBqUAcaQTNoBcdBJzgFzoNL4Bq4AW6D+2AUTIBnYBa8BgsQBGEhMkSB5CEVSBPSh8wgBmQPuUG+UBAUCcVCCRAPEkJ50GaoGCqDqqF6qBn6HjoJnYeuQIPQXWgMmoZ+h97BCEyCqbASrAUbwwzYCfaBQ+BVcAK8Bs6FC+AdcCXcAB+FO+Dz8DX4NjwKP4PnEIAQERqiihgiDMQF8UeikHiEj6xHipAKpAFpRbqRPuQmMorMIG9RGBQFRUcZomxRnqhQFAu1BrUeVYKqRh1GdaB6UTdRY6hZ1Ec0Ga2I1kfboL3QEegEdBa6EF2BbkK3oy+ib6Mn0K8xGAwNo42xwnhiIjFJmLWYEsw+TBvmHGYQM46Zw2Kx8lh9rB3WH8vECrCF2CrsUexZ7BB2AvsGR8Sp4Mxw7rgoHA+Xj6vAHcGdwQ3hJnELeCm8Jt4G749n43PwpfhGfDf+On4Cv0CQJmgT7AghhCTCJkIloZVwkfCA8JJIJKoRrYmBRC5xI7GSeIx4mThGfEuSIemRXEjRJCFpB+kQ6RzpLuklmUzWIjuSo8gC8g5yM/kC+RH5jQRFwkjCS4ItsUGiRqJDYkjiuSReUlPSSXK1ZK5kheQJyeuSM1J4KS0pFymm1HqpGqmTUiNSc9IUaVNpf+lU6RLpI9JXpKdksDJaMm4ybJkCmYMyF2TGKQhFneJCYVE2UxopFykTVAxVm+pFTaIWU7+jDlBnZWVkl8mGyWbL1sielh2lITQtmhcthVZKO04bpr1borTEaQlnyfYlrUuGlszLLZVzlOPIFcm1yd2WeydPl3eTT5bfJd8p/1ABpaCnEKiQpbBf4aLCzFLqUtulrKVFS48vvacIK+opBimuVTyo2K84p6Ss5KGUrlSldEFpRpmm7KicpFyufEZ5WoWiYq/CVSlXOavylC5Ld6Kn0CvpvfRZVUVVT1Whar3qgOqCmrZaqFq+WpvaQ3WCOkM9Xr1cvUd9VkNFw08jT6NF454mXpOhmai5V7NPc15LWytca6tWp9aUtpy2l3audov2Ax2yjoPOGp0GnVu6GF2GbrLuPt0berCehV6iXo3edX1Y31Kfq79Pf9AAbWBtwDNoMBgxJBk6GWYathiOGdGMfI3yjTqNnhtrGEcZ7zLuM/5oYmGSYtJoct9UxtTbNN+02/R3Mz0zllmN2S1zsrm7+QbzLvMXy/SXcZbtX3bHgmLhZ7HVosfig6WVJd+y1XLaSsMq1qrWaoRBZQQwShiXrdHWztYbrE9Zv7WxtBHYHLf5zdbQNtn2iO3Ucu3lnOWNy8ft1OyYdvV2o/Z0+1j7A/ajDqoOTIcGh8eO6o5sxybHSSddpySno07PnU2c+c7tzvMuNi7rXM65Iq4erkWuA24ybqFu1W6P3NXcE9xb3Gc9LDzWepzzRHv6eO7yHPFS8mJ5NXvNelt5r/Pu9SH5BPtU+zz21fPl+3b7wX7efrv9HqzQXMFb0ekP/L38d/s/DNAOWBPwYyAmMCCwJvBJkGlQXlBfMCU4JvhI8OsQ55DSkPuhOqHC0J4wybDosOaw+XDX8LLw0QjjiHUR1yIVIrmRXVHYqLCopqi5lW4r96yciLaILoweXqW9KnvVldUKq1NWn46RjGHGnIhFx4bHHol9z/RnNjDn4rziauNmWS6svaxnbEd2OXuaY8cp40zG28WXxU8l2CXsTphOdEisSJzhunCruS+SPJPqkuaT/ZMPJX9KCU9pS8Wlxqae5Mnwknm9acpp2WmD6frphemja2zW7Fkzy/fhN2VAGasyugRU0c9Uv1BHuEU4lmmfWZP5Jiss60S2dDYvuz9HL2d7zmSue+63a1FrWWt78lTzNuWNrXNaV78eWh+3vmeD+oaCDRMbPTYe3kTYlLzpp3yT/LL8V5vDN3cXKBVsLBjf4rGlpVCikF84stV2a9021DbutoHt5turtn8sYhddLTYprih+X8IqufqN6TeV33zaEb9joNSydP9OzE7ezuFdDrsOl0mX5ZaN7/bb3VFOLy8qf7UnZs+VimUVdXsJe4V7Ryt9K7uqNKp2Vr2vTqy+XeNc01arWLu9dn4fe9/Qfsf9rXVKdcV17w5wD9yp96jvaNBqqDiIOZh58EljWGPft4xvm5sUmoqbPhziHRo9HHS4t9mqufmI4pHSFrhF2DJ9NProje9cv+tqNWytb6O1FR8Dx4THnn4f+/3wcZ/jPScYJ1p/0Pyhtp3SXtQBdeR0zHYmdo52RXYNnvQ+2dNt293+o9GPh06pnqo5LXu69AzhTMGZT2dzz86dSz83cz7h/HhPTM/9CxEXbvUG9g5c9Ll4+ZL7pQt9Tn1nL9tdPnXF5srJq4yrndcsr3X0W/S3/2TxU/uA5UDHdavrXTesb3QPLh88M+QwdP6m681Lt7xuXbu94vbgcOjwnZHokdE77DtTd1PuvriXeW/h/sYH6AdFD6UeVjxSfNTws+7PbaOWo6fHXMf6Hwc/vj/OGn/2S8Yv7ycKnpCfVEyqTDZPmU2dmnafvvF05dOJZ+nPFmYKf5X+tfa5zvMffnP8rX82YnbiBf/Fp99LXsq/PPRq2aueuYC5R69TXy/MF72Rf3P4LeNt37vwd5MLWe+x7ys/6H7o/ujz8cGn1E+f/gUDmPP8usTo0wAAAAlwSFlzAAALEgAACxIB0t1+/AAAAAd0SU1FB9wFFhAwBj65wXEAAAAadEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjExR/NCNwAAAYdJREFUOE+N089KAlEUx3GVUTQ1eoN2tchNi9pF/0AiWgRRrYIKKisjrDcIeobeqEUtoqRoOf2jfwQJkTKMY9+f3gtpZh34gHPnnnPPuWrot6jVamlMYBwps/y/IKEL+3jBE3a1Zl53DjbGUMA7jrCHU+QRM9vaBxvUthI+ocgigimcQZ2kzfbm4IVOVvIrbGTNOxWZxSVUpLkTFjSz2tbJ9zg3JoMg6BXf97t5nscVdtC4Ez6koJM1s2ITEc/zEtVqdQXLFFjjeYB1Bwu4hjpJqYC+Jt22jXWEScwg77puuFwuO5VKJW4OjOIQzxjTwggeYMMWGEROSSpSKpWclgKPGNWC5lfbb1DUC2hmWi9AY6wyQoZ1jbAIjaB7SKqoisShxA/cwV7iNIl9FOunSA/PcyhiG4l6sg0W1NoG1JqN71/jDC6gH1S0ntQavEhCRdSJQj+kMPSfOIGSO/8v2KBONI7u5ABLOMYW2p/cGmzUneRwg1vo5OaZ/woS9O0MYRiN2/4RodAXl6M13XcarycAAAAASUVORK5CYII=';

Assets['icons/icon_Blueprint_Delegate_16x'] = 'data:image/png;base64,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/GMzLdsAADrYaVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/Pgo8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjUtYzAxNCA3OS4xNTE0ODEsIDIwMTMvMDMvMTMtMTI6MDk6MTUgICAgICAgICI+CiAgIDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+CiAgICAgIDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnBob3Rvc2hvcD0iaHR0cDovL25zLmFkb2JlLmNvbS9waG90b3Nob3AvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZXhpZj0iaHR0cDovL25zLmFkb2JlLmNvbS9leGlmLzEuMC8iPgogICAgICAgICA8eG1wOkNyZWF0b3JUb29sPkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTMtMDktMTJUMTU6MDA6MzkrMDE6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1ldGFkYXRhRGF0ZT4yMDEzLTA5LTEyVDE1OjAwOjM5KzAxOjAwPC94bXA6TWV0YWRhdGFEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxMy0wOS0xMlQxNTowMDozOSswMTowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXBNTTpJbnN0YW5jZUlEPnhtcC5paWQ6ZmU3MzU3MTYtODViNC1jMjQyLThlYTMtNGRlZDA3ZWMyZThkPC94bXBNTTpJbnN0YW5jZUlEPgogICAgICAgICA8eG1wTU06RG9jdW1lbnRJRD54bXAuZGlkOjYyODU3NzE5LTEwOTctNDA0Zi1iMDNkLTQ0ZDgxOTFiMTIwYzwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD54bXAuZGlkOjYyODU3NzE5LTEwOTctNDA0Zi1iMDNkLTQ0ZDgxOTFiMTIwYzwveG1wTU06T3JpZ2luYWxEb2N1bWVudElEPgogICAgICAgICA8eG1wTU06SGlzdG9yeT4KICAgICAgICAgICAgPHJkZjpTZXE+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPmNyZWF0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0Omluc3RhbmNlSUQ+eG1wLmlpZDo2Mjg1NzcxOS0xMDk3LTQwNGYtYjAzZC00NGQ4MTkxYjEyMGM8L3N0RXZ0Omluc3RhbmNlSUQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDp3aGVuPjIwMTMtMDktMTJUMTU6MDA6MzkrMDE6MDA8L3N0RXZ0OndoZW4+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpzb2Z0d2FyZUFnZW50PkFkb2JlIFBob3Rvc2hvcCBDQyAoV2luZG93cyk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOmZlNzM1NzE2LTg1YjQtYzI0Mi04ZWEzLTRkZWQwN2VjMmU4ZDwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxMy0wOS0xMlQxNTowMDozOSswMTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIChXaW5kb3dzKTwvc3RFdnQ6c29mdHdhcmVBZ2VudD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmNoYW5nZWQ+Lzwvc3RFdnQ6Y2hhbmdlZD4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOlNlcT4KICAgICAgICAgPC94bXBNTTpIaXN0b3J5PgogICAgICAgICA8cGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICAgICA8cmRmOkJhZz4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjQ0RUY5Q0RERTcxM0UzMTFBQUEwRDA3Q0M5OTJFOUE3PC9yZGY6bGk+CiAgICAgICAgICAgIDwvcmRmOkJhZz4KICAgICAgICAgPC9waG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgICAgIDx0aWZmOlhSZXNvbHV0aW9uPjcyMDAwMC8xMDAwMDwvdGlmZjpYUmVzb2x1dGlvbj4KICAgICAgICAgPHRpZmY6WVJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOllSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpSZXNvbHV0aW9uVW5pdD4yPC90aWZmOlJlc29sdXRpb25Vbml0PgogICAgICAgICA8ZXhpZjpDb2xvclNwYWNlPjE8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjE2PC9leGlmOlBpeGVsWERpbWVuc2lvbj4KICAgICAgICAgPGV4aWY6UGl4ZWxZRGltZW5zaW9uPjE2PC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz6pWAhVAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAD4SURBVHjarJMxSwNBGERf0ghJoYUQMGAruS61FvY2Ke0s8i/0ZwjxT1hYx950lhbaW8egIDbPwomsSY6AycDB7cz7Zhdur6GyiZrFew/or+H74ZYKWsAt0F5T0A7XWiy4ASrgGOjUDHeSV+F/pA79qw91oFI8g/ilhiqoE5f1rnYz3M16UZN5wZE6i/lVAFcpuCy8eT7LHPMjnic4USv1QR0nG2ddJTc8ZQHqKMC1eqG+xH+Of6eehmNVwY56oE7VM/W+OMFhdu6F+51rrLiJ03ymx8LbB0bAHvBWwnUFuzV3YamgyYZaVfBUw74Cn4tmY5t/47/0PQAg8GfaDiBORwAAAABJRU5ErkJggg==';

Assets['icons/icon_Blueprint_DoN_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_DoOnce_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_Documentation_16x'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAABCBJREFUeAEAEATv+wG/v8AAAgIBAAkKCgAKDQ0ADQ8QAPf29Qbp5eUcCQkKKQ0QEDUFCQg3+wEGKOrq8/4B+vex5N/Xmbi7v9n///8ABAAAAAkAAAAZAAAAKAAAADH9/PwyDhARKhMYGB4BAwMKAQEBAP3//wD8/f4A6e3zAN7q9nHl6vs6AQAAcQEBAccEGiAgqhEUE0UGCQkH/v7+AP7//wD+/v4A/v//AP/9/QD/AAAAAAAAAAIAAQAlIBgA7+ztAOQBAB85QUs5AQAAzgLh5OT0/P//AAABAQD8+/sA/fz8AM/NzQCrp6cA6OnpAAAAAAAA/wEA7u7vAOXj4gAHBP0AHRkRBgcFAA0GBQABAt3Y2sH19vbtAgICAPb4+ACTjY0AUEZGALCsrAANDQ4A//8AAMTBwQB3bm0AqqWkAMbBvQDOyMAKHh0XFQQA+gMC4t7dzPLw8O319/YAj4mIAJOOjgD39vYA3tvbANjW1gDz8vMAk4yLANXS0gAXGBoA9PP0APf29ggTFBMeAwMDCwTx7/Dd6ujq2MHAwC0KDA0An6qqALq2tQCzra4A9fX1AAECAgAKCwsA/v//ABYYGQBRVlgA7+/vAAEDBBoCBAQWAvv7+/fk4eHPICIj7FVcXAAtMTEA/f3+AP//AAAA/wEA/v8AAP8A/wAAAAAA/Pz8AA4QEQAXGBkAAwMEDwgJChkCICUl+evo6coaHB3mICEhAPr5+gD+/v4AAgICAAYGBgAA/wEAAAACAAMDBAABAQIA+fn6APn5+gACAgIKAwICIgMnJSYA8/Dw9R0iIkIZHh4l7OvsAMS+vwDW09IADxARAOPh4QC3srAA4+HgAO/u7gACAgQAHh8iAAMDBP349/jfBPDt7AABAADq6ufn0/f2+EP9/f4HCgwMAAAA/wCZk5AAERESACMlJgAEBAQAGBobACotLgALDQwA+/n7DA4PDyYBAAAAAAAAAABhZmhebXd5fRgbHCTz8fEAAQABAP//AAAAAAAA//7/AAAAAAADAwQABwcIAP/+/wDj4eDz2dfWqAQAAAAeAAAASsXCwUBCSkwKHB8eAP//AAD///8A//8AAAICAgAICQkAAgIDAOzq6v29xrjwt7Ov78bDv9nr6ejFBAAAAOwAAADp3dzcAdjV1gQ8QEQAAwMFAAMDBAAFBAUA8fDwAMvHv/e5tbLlv7q32uTi4NYAAADWAAAA2QAAAOEEAAAA9gAAAK/9/Pv239zbIPb18xYPDw8AzcrM+7u3tdq8trLJ29jWyf39/dEAAADeAAAA7gAAAP0AAAAAAAAAAAEAAAAAAAAAAAAAAAAqLTBVMjY4UuPi4NvGwr+6//3+1xocHe3r6ugA9/b2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA//93uZWuoJxguAAAAABJRU5ErkJggg==';

Assets['icons/icon_Blueprint_Enum_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_EventGraph_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_Event_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_FlipFlop_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_ForEach_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_Gate_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_Interfacefunction_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_IsValid_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_KeyboardEvent_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_Loop_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_Macro_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_MakeArray_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_MakeStruct_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_MouseEventAxis_16x'] = 'data:image/png;base64,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/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAABCBJREFUeAEAEATv+wH///8AAAAAAAAAAACgoKEoNjY2efT09C8MDQ/69vf3ssbHyI5ua2f2AAAAAAAAAAAAAABuAAAAkgAAAAAAAABuAP///wD///8ATk5PPOjo6uv/////pqmr/73Awv//////1Nndv0ZISg////8A////AP///27///8A////bv///wAA////AFtbXA/T09Tg8vP2//////95gYf/jY+S//v+/v/0/Pz/s7q/oP///wD///8A////bv///27///8A////AAIAAAAAOjo6YxUVFh/4+foAAAAAAAsIBgANDQwA/P//APf5/gA1OTpbfIOJKgAAAAAAAACRAAAAAAAAAG4AAABuAlNTVAIlJSVaAAAAAAABAQAAAAAAJyIeACIlJAAAAAAAAgIBAAkJAwQqLC5gV1xiAAAAAAEAAACSAAAAkgAAAJIEIyMkHQADBirT298A/P8CAAkLCgDU3OIAC+ftAP8HDAD//wQADQ4LABIWGTweISMBAAAA/wAAAAAAAAAAAAAAAATh5OUf2uHkCRkaHAAJCgoA/fz+AEBDRgD//PwA/f4CAP7//gDr7fAA4N/gFt3d3AcAAAD4AAAAAAAAAAAAAAAABD46ORE4LSgADhETAAUHCQACBAYAAwUGAAACAwAAAAAAAAEAAAACAAAiISQPDw8QCQAAAPgAAAAAAAAAAAAAAAAC09TT9vX39wD09vcA9vj5APf4+QD19vYA9vb2APf5+gD3+v4A9/n+APDx8vrU09H8AAAAAAAAAAAAAAAAAAAAAAT09PXf8fDw+QkMDwcB+/sABAABAAL/AAAAAgAAAgADAAIEAAD+AP8A8fP06vHw8PUAAAAAAAAAAAAAAAAAAAAAAuLi4eDj4+Pb+vr6APn5+gD6+vsA+vv7APz9/QD9AQEA/gf/AP8EAADQzcvRwru0/gAAAAAAAAAAAAAAAAAAAAAEycnI/BAQELokKCssBv8CAP4AAgAC/gAAA/4BAAUJAAABAwAA8vD6AKedldfY0s4FAAAA+wAAAAAAAAAAAAAAAAL6+voGvLu6zdDPzvj4+PkA9vf3APj5+QD2+PkA+Pv+APf5/gC5sLPr1M/K9QAAABQAAAAAAAAAAAAAAAAAAAAAAgAAAAL3+Pjon52avd7e3QDz9fcA8/X2APP19gDy8PUAy8HP/ZmKfr0AAP/lAAAA9wAAAAAAAAAAAAAAAAAAAAABAAAAAQAAABYAAAA4ICIkVkxVXEYhJy0UAQUG/9vX1eStoJa26ubitgAAAM0AAADm/////wAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAkAAAAYAAAAIg4RFBn+/v789PHu4AAAAOMAAADtAAAA+AAAAAD///8AAAAAAAAAAAAAAAAAAQAA///GvILyrGc1gwAAAABJRU5ErkJggg==';

Assets['icons/icon_Blueprint_MouseEvent_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_NewFunction_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_Node_16x'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsQAAALEAGtI711AAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAABCBJREFUeAEAEATv+wHh2sCpGSAqQ///////////AAAAAAAAAP8A/////wD//wD/////AAAA///////////+/wD/AP7//wAC//3X0815BAQHDDnz9/0T//79AAAAAAABAAAAAAEBAAAAAAAAAAAA/wAAAAD/AAAAAAAAAAACAAAAAAAAAAAABAQGAAQLFTME+fj16ggAAB3///4AAAABAP8AAAAA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAAAAAD9/f4A+vv56gL+/PvyAQAAAAAAAAAAAAAAAP//AAAA/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD//v7yBPTz7/QQAAEA//8BAAAAAAAAAAEA//8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAA/gECAPHw6/AEq6CShS093u77+/sGAAAAAAEBAQAGBwgBAQICAQEAAQABAAEAAAEBAQECAQABAQEAAAAAAAMCAwD9/wDmsaSVuwQYFhYPIBgSMPz7+gUBAQH/AQEBAAMEBAD//wAA//7/AP7//QD9/f0A/v39AP79/f/9/f0AAQABAPf4+AgHBQP9BCAlKT0LERsv/gD/AAEAAAAAAAEA////AAAAAAAAAAAA////AAD/AAD/AP8A////AAAAAAABAQAA/QMLLDM/9RwE+Pj27Pj49QD+/f8AAAAAAAAA/wAAAAEAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAEAAAAAAAEBAAD9Bgf0+vn58AICAQHz//7/AP8AAAAAAP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA////AAD//wAA//8AAQECAPv7+/yzsaj/BPf39vL///0AAAACAP8A/wD/AAAAAAD/AAAAAAAAAAAAAAABAAAAAAAAAAAA/wD/AAAAAAACAAEA+vn1AsXP5icE/f378v7+/gAAAQEAAP//AAAAAAAAAAAAAAAAAAAAAAAAAP8AAAAAAAABAQAAAAAAAAAAAP8AAAD6+vn3/PgA8wT9+/v0//39AAADAQAA//8AAAAAAAAAAAAAAQAAAAABAAAAAAAAAAAAAP//AAAAAQAAAAAAAAAAAPr5+Pb4+ADuBPb09PcBAwIAAgUIAAD+/gAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAQAAAAAAAAAAAAAAAAAEBggA/fz7+gAAAPMEg5Gt33kDCLoLDxUq/v/8AwEAAQAAAQEAAAAAAQEAAQABAAAAAAEBAAAAAAAAAAABAAEBAAQFBv3V0s2/AAAA9wEAAAABAAAAFwAAAB8AAAACAAAAAAAAAAEAAAABAAAAAAAAAAAAAAAAAAAA/wAAAAEAAAABAAAA/AAAAOYAAADnAQAA//+xrg3PNo1xDwAAAABJRU5ErkJggg==';

Assets['icons/icon_Blueprint_OverrideFunction_16x'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAABCBJREFUeAEAEATv+wH2+P8AAAAAAAAAAAAAAAAAAAAAXQAAAPQAAACvAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPn8AAAAAAAAAAAAAAAAAAAAAAAaAAAAhgAAAGkAAACaAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAE+fsAAAAAAAAAAAAlAAAAKwAAADIAAAACAAAAmQAAACQAAAB4AAAA/gAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHh6f8AAAAAhAAAAHIAAAAJAAAAAAAAAAAAAAAAAAAAAAAAALQAAABoAAAA5QAAAAAAAAAAAAAAAAAAAAAAAAAAAdnk/0YAAAC5AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALIAAABPAAAAAAAAAEUAAACRAAAA5gAAAEAE+PoAXAAAAAAAAAD/AAAA8QAAAAYAAAAKAAAAAAAAAAAAAADBAAAAdAAAAAAAAAAYAAAAogAAAM4AAABaAAAAjQT4+gBCAAAAsQAAAIMAAADjAAAAWwAAAI4AAAAAAAAAnQAAAGwAAAD4AAAAAAAAAFgAAAAYAAAAnwAAAPEAAABpBPn7ALsAAABjAAAA/gAAAAAAAAD1AAAAAAAAAHwAAACFAAAAAAAAAAAAAAAAAAAAbAAAAAAAAACsAAAAAAAAAPsE+foAdAAAAP4AAAAAAAAAAAAAAOwAAABlAAAAnAAAAAAAAAAAAAAADQAAAFAAAAAaAAAA6gAAAHgAAACSAAAA9gG0yP8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEgAAAOUAAAC5AAAAUAAAAAAAAAAABPv7/wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPAAAACAAAAOMAAAAAAAAAAAAAAAAE+vv8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACsAAAAAAAAA2AAAAAAAAAAAAAAAAAT6+/sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHQAAAP8AAAC/AAAAAAAAAAAAAAAABPv6+wAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAA8AAAABEAAAAoAAAA5QAAANYAAAAAAAAAAAAAAAAE+/v6AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAALMAAABKAAAAOgAAAC4AAABqAAAAAAAAAAAAAAAAAAAAAAT7+/sAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAAAALMAAAAQAAAAgwAAAJcAAAAAAAAAAAAAAAAAAAAAAQAA//+l6l1Yw6FesQAAAABJRU5ErkJggg==';

Assets['icons/icon_Blueprint_OverrideableFunction_16x'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAABCBJREFUeAEAEATv+wH///8AAAAAAAAAAAAAAAAA/P0AOgAAABoEAwCsAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAD6/AAxBAMAbvb5AHkAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAB////AAAAAAAAAAAA7/QAHQAAAHcAAAAJAAAAFgAAAPURDABYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAH///8A6O8AOAAAAIkAAAD/AAAA+AAAAH0YEQDL6O8AowAAAB4AAABVGBEA6gAAAAAAAAAAAAAAAAAAAAAAAAAAAN/o/xff6P/Q3+j/Wf///wD///8A////AP///wD///8A3+j/bt/o/9n///8A////AN/o/0Xf6P/W3+j/vN/o//wE+PoAaAAAAMAAAADA2OMAUAAAAP8AAAC5KB0A+AAAAAD4+gAZAAAA8gAAAADY4wAYAAAAogAAAM4AAABaAAAAjQT3+gA5AAAAFAAAADIAAADlAAAAHgAAAEAAAABxz90AtQAAAP0AAAA7AAAAAPf6AFgAAAAYAAAAnzEjAPHP3QBpAcbW/+cAAADHOSkAUgAAAADH1wBSAAAAagAAAAAAAADaOSkAagAAAAAAAAAAx9cA3AAAACM5KQABAAAAAAAAAAAC+PoAnzkpAFIAAAAAAAAAAPj6AAX4+gA2+PoArDkpAGoAAAAAv9EADb/RAF34+gAa+PoA6r/RAHi/0QAKAAAAAAH///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAuMwAEgAAAOUAAAC5SDQAUAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD6+wBPAAAACAAAAOMAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPr6/CsAAAAAAAAA2AAABAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+vv8HQAAAP8AAAC/AAAEAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACgtvMQAAAAAKC28xH6+vso+vr75VpECNYAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPv6+rObsO1KAAAAOgAAAC4AAABqAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+/v6PAAAALMAAAAQAAAAg2pVGZcAAAAAAAAAAAAAAAAAAAAAAQAA//8dpsA5fu4zvQAAAABJRU5ErkJggg==';

Assets['icons/icon_Blueprint_PadEventAxis_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_PadEvent_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_Rule_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_Select_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_Sequence_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_SpawnActor_16x'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsQAAALEAGtI711AAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAy5JREFUeNpsz11oWwUYxvHHdswLQaYiwxWkQ6ekdVLHIjpWQW+86MVE8UIikbZso9sKUmWabiEkmQ5T1k/7kZiYZl2axPWk+TrNyUnb1Ni1S8Om0i3t1jWSDEWWWciULEXi40Ws0NL/9fP+4AVJ1NbWQqlUorGxERpNO3Q6HQwGI7q6ujA0NARJkt5pa2s7XF9fj46ODoRCocc8Hs8bKpWqAtsBWq0WBoMRZ89qodfrEYlE3s5ms2mVSrXLbrfvy+fz16xW63utra3YBKjVamg07TtMJtPr/f0DTd3dPc0aTfuhnp7el0iWcrnc9UKh8Hs2m13Q6/UwmUxloKamBnV1dTh9+rMjbrfn+sREmJIU4cJCkquraWYymXSpVCryv5LJpNHhcOx0Op1lQKFQoKmp+agoTjAanaQkRShJMr+PX+HKnTQLhYfcWj6fTyUSiWaQRENDw6uC4P07HJYYDku8ejXBpeXbvDKfZECUeSN16//D9fX1tVQqpU6lUm8lk8n9IAmj8dxoKCQyGAxRlqO8l7tPkszc/Y2TM7O8/8caby7f4Y+LSywWizm3270zEAggFouVXxgcHPpFELz0+fwMhyNcWU0z/+AvLqZuczo+z/hckl4xSo8/wp9uLBeisrxXEASEw+EyYLF8s+ZyuSkIXvoDIiPRacZ+mGdkKs6QPMNgdJbBqTmOiVO0jY4/aP34k2eOtZzE8ZZTZcBk6kg7HBfpcnk45vXR6xc5HpToE2UG5DhjP6c5s/QrvfIcz3eb71VU7tiNjUjixImTl8xmC+3DF+l0XaZ7zEePN8jvxkWOidOcXMwwevMu3RNxqo+dugXgzU2AUqk8qNcbiv0DZlpsDn474uLw6GU63F4Oe/wcGY/SLkR4weIsVT1b7QLw7iagsrISCoXi6Bmtjp29g+wZsLLPPMyvrSPss15ir83FL3pt/xx47fAsgAsAXt4EbLSnqur8+x98+PDTM3pqv+yk7qs+fn6uk+qWtj+rn38xAcAG4AiAim0BAI8C+GjXE0+J1c+9sLx3n2Llyad3XwMgAGgHcBBb2wJs9DiA/QAOAXgFQBWAR7Yb/jsAq7YkFpQYaGQAAAAASUVORK5CYII=';

Assets['icons/icon_Blueprint_StateMachine_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_State_16x'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAxBJREFUeNpck11oW2Ucxp+TvMlJ0q62pqYwO1vXVEGFifTOTRS7DTc/NtlQh4LTzQt759WuFMEr8do7rVKdmYUNpkKLlaJzF5tOQdpJSZO22ZY2OR9vknNOzjnveT+8mGFpH3ju/r/nufjzaEopdOSHGBISbwiJlwE8qmnIaIAjFW56nlsIw/Diw3uyLXRJ6wS0Q0xGHJ96PhuntrXAWLgITTNJnOzOZgefzaT1CcOy/2426CcT+8audgLI//DzPsOFyq3qErWtQ3oqde3piXHZVfRZw8PHptX4kNrWMnAvAK6vhqirln7/c+3Xy/N/DCqlsNNOW01WLVX5+cpy4fo/1f5bhupfLjsDSikQBbx5xwhHNzYqZ0+9+oyJHaIujjg+CuXy+nxv3+Cp0YdyvYzjO9OixmLNOEtYhGOrxeJ8Ipm5vhO2HLzQ8vB9sbR2OZ3OvDMynMuSOKYZx5F2O3QpNQuxIMIjlmX/dvLFCdEN15t4yWxi9ubK2g8k2XNm78hQf4JgJmA42moDJNnT6zjea4QL9DAu7W54i+K40cQ3pVL5YibTe3p8NDeQiOOrgOEwdYGAAcl0H1gknyJxDUYspuc7cNXCiRrF+dVS6duTh8dOr9eQTRCcDxgmzdZdGACUIuBCDcc0DX8NPTh26KerVC9v4njVRmGlWP46lbnvTGkTu5MEs36IyRoFXB/g4q5DxsG5bMUCpqZHhh/IJxLp6fUt+cXKyuqXqfSu9x8by+7Ribrgh+q5LVvCaUtwfs/NZgOcyyXS8uQc5+pHSs23m9T8/L3Xn5wq3hbDSaJm2oHaX7MVfKa2fYfzCLZZgwLmNKUUFm6E+Xq9fkDXUzOP5wdyqaRWCJg6sGkJ+OF2WEkJatdwp1K8ltTTx7TuMf27wfL374pfanryiUotQjvY0RwxOC0bZv32ZsTYW+emDv5Cug9cj+smjQyDMgVoWiymQUoJHjGEoQ/XacBzGleEFB+dmzq4uG2NHc0uGH2u0zjKwuAVKfg+IUROSG4LwZekEHOxePzSB+/ur3fu/xsAS8Hcx4pW3IwAAAAASUVORK5CYII=';

Assets['icons/icon_Blueprint_SubgraphComposite_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_Switch_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_Timeline_16x'] = 'data:image/png;base64,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';

Assets['icons/icon_Blueprint_TouchEvent_16x'] = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAACXBIWXMAAAsQAAALEAGtI711AAAKT2lDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVNnVFPpFj333vRCS4iAlEtvUhUIIFJCi4AUkSYqIQkQSoghodkVUcERRUUEG8igiAOOjoCMFVEsDIoK2AfkIaKOg6OIisr74Xuja9a89+bN/rXXPues852zzwfACAyWSDNRNYAMqUIeEeCDx8TG4eQuQIEKJHAAEAizZCFz/SMBAPh+PDwrIsAHvgABeNMLCADATZvAMByH/w/qQplcAYCEAcB0kThLCIAUAEB6jkKmAEBGAYCdmCZTAKAEAGDLY2LjAFAtAGAnf+bTAICd+Jl7AQBblCEVAaCRACATZYhEAGg7AKzPVopFAFgwABRmS8Q5ANgtADBJV2ZIALC3AMDOEAuyAAgMADBRiIUpAAR7AGDIIyN4AISZABRG8lc88SuuEOcqAAB4mbI8uSQ5RYFbCC1xB1dXLh4ozkkXKxQ2YQJhmkAuwnmZGTKBNA/g88wAAKCRFRHgg/P9eM4Ors7ONo62Dl8t6r8G/yJiYuP+5c+rcEAAAOF0ftH+LC+zGoA7BoBt/qIl7gRoXgugdfeLZrIPQLUAoOnaV/Nw+H48PEWhkLnZ2eXk5NhKxEJbYcpXff5nwl/AV/1s+X48/Pf14L7iJIEyXYFHBPjgwsz0TKUcz5IJhGLc5o9H/LcL//wd0yLESWK5WCoU41EScY5EmozzMqUiiUKSKcUl0v9k4t8s+wM+3zUAsGo+AXuRLahdYwP2SycQWHTA4vcAAPK7b8HUKAgDgGiD4c93/+8//UegJQCAZkmScQAAXkQkLlTKsz/HCAAARKCBKrBBG/TBGCzABhzBBdzBC/xgNoRCJMTCQhBCCmSAHHJgKayCQiiGzbAdKmAv1EAdNMBRaIaTcA4uwlW4Dj1wD/phCJ7BKLyBCQRByAgTYSHaiAFiilgjjggXmYX4IcFIBBKLJCDJiBRRIkuRNUgxUopUIFVIHfI9cgI5h1xGupE7yAAygvyGvEcxlIGyUT3UDLVDuag3GoRGogvQZHQxmo8WoJvQcrQaPYw2oefQq2gP2o8+Q8cwwOgYBzPEbDAuxsNCsTgsCZNjy7EirAyrxhqwVqwDu4n1Y8+xdwQSgUXACTYEd0IgYR5BSFhMWE7YSKggHCQ0EdoJNwkDhFHCJyKTqEu0JroR+cQYYjIxh1hILCPWEo8TLxB7iEPENyQSiUMyJ7mQAkmxpFTSEtJG0m5SI+ksqZs0SBojk8naZGuyBzmULCAryIXkneTD5DPkG+Qh8lsKnWJAcaT4U+IoUspqShnlEOU05QZlmDJBVaOaUt2ooVQRNY9aQq2htlKvUYeoEzR1mjnNgxZJS6WtopXTGmgXaPdpr+h0uhHdlR5Ol9BX0svpR+iX6AP0dwwNhhWDx4hnKBmbGAcYZxl3GK+YTKYZ04sZx1QwNzHrmOeZD5lvVVgqtip8FZHKCpVKlSaVGyovVKmqpqreqgtV81XLVI+pXlN9rkZVM1PjqQnUlqtVqp1Q61MbU2epO6iHqmeob1Q/pH5Z/YkGWcNMw09DpFGgsV/jvMYgC2MZs3gsIWsNq4Z1gTXEJrHN2Xx2KruY/R27iz2qqaE5QzNKM1ezUvOUZj8H45hx+Jx0TgnnKKeX836K3hTvKeIpG6Y0TLkxZVxrqpaXllirSKtRq0frvTau7aedpr1Fu1n7gQ5Bx0onXCdHZ4/OBZ3nU9lT3acKpxZNPTr1ri6qa6UbobtEd79up+6Ynr5egJ5Mb6feeb3n+hx9L/1U/W36p/VHDFgGswwkBtsMzhg8xTVxbzwdL8fb8VFDXcNAQ6VhlWGX4YSRudE8o9VGjUYPjGnGXOMk423GbcajJgYmISZLTepN7ppSTbmmKaY7TDtMx83MzaLN1pk1mz0x1zLnm+eb15vft2BaeFostqi2uGVJsuRaplnutrxuhVo5WaVYVVpds0atna0l1rutu6cRp7lOk06rntZnw7Dxtsm2qbcZsOXYBtuutm22fWFnYhdnt8Wuw+6TvZN9un2N/T0HDYfZDqsdWh1+c7RyFDpWOt6azpzuP33F9JbpL2dYzxDP2DPjthPLKcRpnVOb00dnF2e5c4PziIuJS4LLLpc+Lpsbxt3IveRKdPVxXeF60vWdm7Obwu2o26/uNu5p7ofcn8w0nymeWTNz0MPIQ+BR5dE/C5+VMGvfrH5PQ0+BZ7XnIy9jL5FXrdewt6V3qvdh7xc+9j5yn+M+4zw33jLeWV/MN8C3yLfLT8Nvnl+F30N/I/9k/3r/0QCngCUBZwOJgUGBWwL7+Hp8Ib+OPzrbZfay2e1BjKC5QRVBj4KtguXBrSFoyOyQrSH355jOkc5pDoVQfujW0Adh5mGLw34MJ4WHhVeGP45wiFga0TGXNXfR3ENz30T6RJZE3ptnMU85ry1KNSo+qi5qPNo3ujS6P8YuZlnM1VidWElsSxw5LiquNm5svt/87fOH4p3iC+N7F5gvyF1weaHOwvSFpxapLhIsOpZATIhOOJTwQRAqqBaMJfITdyWOCnnCHcJnIi/RNtGI2ENcKh5O8kgqTXqS7JG8NXkkxTOlLOW5hCepkLxMDUzdmzqeFpp2IG0yPTq9MYOSkZBxQqohTZO2Z+pn5mZ2y6xlhbL+xW6Lty8elQfJa7OQrAVZLQq2QqboVFoo1yoHsmdlV2a/zYnKOZarnivN7cyzytuQN5zvn//tEsIS4ZK2pYZLVy0dWOa9rGo5sjxxedsK4xUFK4ZWBqw8uIq2Km3VT6vtV5eufr0mek1rgV7ByoLBtQFr6wtVCuWFfevc1+1dT1gvWd+1YfqGnRs+FYmKrhTbF5cVf9go3HjlG4dvyr+Z3JS0qavEuWTPZtJm6ebeLZ5bDpaql+aXDm4N2dq0Dd9WtO319kXbL5fNKNu7g7ZDuaO/PLi8ZafJzs07P1SkVPRU+lQ27tLdtWHX+G7R7ht7vPY07NXbW7z3/T7JvttVAVVN1WbVZftJ+7P3P66Jqun4lvttXa1ObXHtxwPSA/0HIw6217nU1R3SPVRSj9Yr60cOxx++/p3vdy0NNg1VjZzG4iNwRHnk6fcJ3/ceDTradox7rOEH0x92HWcdL2pCmvKaRptTmvtbYlu6T8w+0dbq3nr8R9sfD5w0PFl5SvNUyWna6YLTk2fyz4ydlZ19fi753GDborZ752PO32oPb++6EHTh0kX/i+c7vDvOXPK4dPKy2+UTV7hXmq86X23qdOo8/pPTT8e7nLuarrlca7nuer21e2b36RueN87d9L158Rb/1tWeOT3dvfN6b/fF9/XfFt1+cif9zsu72Xcn7q28T7xf9EDtQdlD3YfVP1v+3Njv3H9qwHeg89HcR/cGhYPP/pH1jw9DBY+Zj8uGDYbrnjg+OTniP3L96fynQ89kzyaeF/6i/suuFxYvfvjV69fO0ZjRoZfyl5O/bXyl/erA6xmv28bCxh6+yXgzMV70VvvtwXfcdx3vo98PT+R8IH8o/2j5sfVT0Kf7kxmTk/8EA5jz/GMzLdsAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAA0FJREFUeNqkkN1Pk3cUx09EFLOIA4SJ2/6CJRqvzLxwRrOwTAnyNpw3bIlGEQOSUhTHixctiNWATnBxyVxm3C7QzjdAGc44xWWjpVZoS/sAJVD7AqWU0ufp8/yel68XHVvvd5KTc/E953O+5xAA+j9Jhw59SUZje4EsKyHG5KAoSn7GZF8sFpsdGxufsVpHvaHQ/BSAKVlWpiQmcwlRcl+4fK1if8lhoubmVjKb755ESgQCQZw3deJMqxGNLQa0nDPA4XT+q2sAnlon2tu6bxE1NJyh+w/6mldFxmR0mDpx8xczYis8eEFA/8Bj6E+fxUI4DABQATy1OK42ma4T1dXV0+DgUNcqIBgKwdBugqqqqabQdaUbL4ZfAgAUAH85Z24Zu38mqqvT0bPnwzdXG3meh6GtA9zkFP5zxXDhYifGXRPQADAAI66Z/gbjVSK9/jT9PfqqX0vZNjT0O3QNjei98ysGHv8G43kTrn3/I5iqglcBQQXGvMHhc103iJqaWsju4P5k/5BXQRarDd/2XIfpcg/uPXqCmMggqEBUAlZkwDW3+Lq180YaGQxt6ZzX7xYBiADkFEhqiEgOLrNknVkQZi/9YH6HSopLMh4ODVtGPf74iMsnWt0+aZR7I9km/cwxG5Yds2HFNhmU7dPzst0bll97F2Wnb5n9YfdO7ztQlknbt23POHK8+pua+sYn1af0zupT9RMnanSeE7V6rqCwdOyzwtLxqlo9d7xG56mqrXdX1epdJ3VnLYe/OnqRiNZRZeXXOwUZkLTkD9SUE3ofDM7fNt+dBwCmAQkFiEsa4pKGCK9oH23bsYN2f7Jn/4oELMZVLPIalhLAspSE9Q48C9y51xdgAJYSQEQAwnENYR6IKcCu3Xs/pfIvKo5JAJaEZMNSAoiKyafdfvQiar4/EE2k6BEBiCSABIDPi8oqqbCouGbcG5RGXHPKiMunWCbeKFa3X3X6ImpHz0/uS1e+45xzEdXmCWg2Lqi9mgxp9ukFzROKqgWFpVW0Zk1a/sZ3cwoys3KKMrM2H9yUnXtwU05eSVZufnH6+g0fr8vYsCs7L780K3dLWXZefnl23tbynPfer9i85YOitLXpH74dANLqA4YApkuDAAAAAElFTkSuQmCC';
 

function Vector(x, y) {
	this.x = x || 0;
	this.y = y || 0;
}

Vector.prototype = {
	negative: function () {
		return new Vector(-this.x, -this.y);
	},
	add: function (v) {
		if (v instanceof Vector)
			return new Vector(this.x + v.x, this.y + v.y);
		else
			return new Vector(this.x + v, this.y + v);
	},
	subtract: function (v) {
		if (v instanceof Vector)
			return new Vector(this.x - v.x, this.y - v.y);
		else
			return new Vector(this.x - v, this.y - v);
	},
	multiply: function (v) {
		if (v instanceof Vector)
			return new Vector(this.x * v.x, this.y * v.y);
		else
			return new Vector(this.x * v, this.y * v);
	},
	divide: function (v) {
		if (v instanceof Vector)
			return new Vector(this.x / v.x, this.y / v.y);
		else
			return new Vector(this.x / v, this.y / v);
	},
	equals: function (v) {
		return this.x == v.x && this.y == v.y;
	},
	dot: function (v) {
		return this.x * v.x + this.y * v.y;
	},
	length: function () {
		return Math.sqrt(this.dot(this));
	},
	unit: function () {
		return this.divide(this.length());
	},
	min: function () {
		return Math.min(this.x, this.y);
	},
	max: function () {
		return Math.max(this.x, this.y);
	},
	angleTo: function (a) {
		return Math.acos(this.dot(a) / (this.length() * a.length()));
	},
	toArray: function (n) {
		return [this.x, this.y].slice(0, n || 2);
	},
	clone: function () {
		return new Vector(this.x, this.y);
	},
	init: function (x, y, z) {
		this.x = x;
		this.y = y;
		return this;
	}
};

Vector.negative = function (a, b) {
	b.x = -a.x;
	b.y = -a.y;
	return b;
};
Vector.add = function (a, b, c) {
	if (b instanceof Vector) {
		c.x = a.x + b.x;
		c.y = a.y + b.y;
	}
	else {
		c.x = a.x + b;
		c.y = a.y + b;
	}
	return c;
};
Vector.subtract = function (a, b, c) {
	if (b instanceof Vector) {
		c.x = a.x - b.x;
		c.y = a.y - b.y;
	}
	else {
		c.x = a.x - b;
		c.y = a.y - b;
	}
	return c;
};
Vector.multiply = function (a, b, c) {
	if (b instanceof Vector) {
		c.x = a.x * b.x;
		c.y = a.y * b.y;
	}
	else {
		c.x = a.x * b;
		c.y = a.y * b;
	}
	return c;
};
Vector.divide = function (a, b, c) {
	if (b instanceof Vector) {
		c.x = a.x / b.x;
		c.y = a.y / b.y;
	}
	else {
		c.x = a.x / b;
		c.y = a.y / b;
	}
	return c;
};

Vector.unit = function (a, b) {
	var length = a.length();
	b.x = a.x / length;
	b.y = a.y / length;
	return b;
};

Vector.min = function (a, b) {
	return new Vector(Math.min(a.x, b.x), Math.min(a.y, b.y));
};
Vector.max = function (a, b) {
	return new Vector(Math.max(a.x, b.x), Math.max(a.y, b.y));
};
Vector.lerp = function (a, b, fraction) {
	return b.subtract(a).multiply(fraction).add(a);
};
Vector.fromArray = function (a) {
	return new Vector(a[0], a[1]);
};
(function () {
	var out$ = typeof exports != 'undefined' && exports || typeof define != 'undefined' && {} || this;

	var doctype = '<?xml version="1.0" standalone="no"?><!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd">';

	function isElement(obj) {
		return obj instanceof HTMLElement || obj instanceof SVGElement;
	}

	function requireDomNode(el) {
		if (!isElement(el)) {
			throw new Error('an HTMLElement or SVGElement is required; got ' + el);
		}
	}

	function isExternal(url) {
		return url && url.lastIndexOf('http', 0) == 0 && url.lastIndexOf(window.location.host) == -1;
	}

	function inlineImages(el, callback) {
		requireDomNode(el);

		var images = el.querySelectorAll('image'),
				left = images.length,
				checkDone = function () {
					if (left === 0) {
						callback();
					}
				};

		checkDone();
		for (var i = 0; i < images.length; i++) {
			(function (image) {
				var href = image.getAttributeNS("http://www.w3.org/1999/xlink", "href");
				if (href) {
					if (isExternal(href.value)) {
						console.warn("Cannot render embedded images linking to external hosts: " + href.value);
						return;
					}
				}
				var canvas = document.createElement('canvas');
				var ctx = canvas.getContext('2d');
				var img = new Image();
				href = href || image.getAttribute('href');
				if (href) {
					img.src = href;
					img.onload = function () {
						canvas.width = img.width;
						canvas.height = img.height;
						ctx.drawImage(img, 0, 0);
						image.setAttributeNS("http://www.w3.org/1999/xlink", "href", canvas.toDataURL('image/png'));
						left--;
						checkDone();
					}
					img.onerror = function () {
						console.log("Could not load " + href);
						left--;
						checkDone();
					}
				} else {
					left--;
					checkDone();
				}
			})(images[i]);
		}
	}

	function styles(el, selectorRemap) {
		var css = "";
		var sheets = document.styleSheets;
		for (var i = 0; i < sheets.length; i++) {
			try {
				var rules = sheets[i].cssRules;
			} catch (e) {
				console.warn("Stylesheet could not be loaded: " + sheets[i].href);
				continue;
			}

			if (rules != null) {
				for (var j = 0; j < rules.length; j++) {
					var rule = rules[j];
					if (typeof (rule.style) != "undefined") {
						var match, selectorText;

						try {
							selectorText = rule.selectorText;
						} catch (err) {
							console.warn('The following CSS rule has an invalid selector: "' + rule + '"', err);
						}

						try {
							if (selectorText) {
								match = el.querySelector(selectorText);
							}
						} catch (err) {
							console.warn('Invalid CSS selector "' + selectorText + '"', err);
						}

						if (match) {
							var selector = selectorRemap ? selectorRemap(rule.selectorText) : rule.selectorText;
							css += selector + " { " + rule.style.cssText + " }\n";
						} else if (rule.cssText.match(/^@font-face/)) {
							css += rule.cssText + '\n';
						}
					}
				}
			}
		}
		return css;
	}

	function getDimension(el, clone, dim) {
		var v = (el.viewBox && el.viewBox.baseVal && el.viewBox.baseVal[dim]) ||
				(clone.getAttribute(dim) !== null && !clone.getAttribute(dim).match(/%$/) && parseInt(clone.getAttribute(dim))) ||
				el.getBoundingClientRect()[dim] ||
				parseInt(clone.style[dim]) ||
				parseInt(window.getComputedStyle(el).getPropertyValue(dim));
		return (typeof v === 'undefined' || v === null || isNaN(parseFloat(v))) ? 0 : v;
	}

	function reEncode(data) {
		data = encodeURIComponent(data);
		data = data.replace(/%([0-9A-F]{2})/g, function (match, p1) {
			var c = String.fromCharCode('0x' + p1);
			return c === '%' ? '%25' : c;
		});
		return decodeURIComponent(data);
	}

	out$.svgAsDataUri = function (el, options, cb) {
		requireDomNode(el);

		options = options || {};
		options.scale = options.scale || 1;
		var xmlns = "http://www.w3.org/2000/xmlns/";

		inlineImages(el, function () {
			var outer = document.createElement("div");
			var clone = el.cloneNode(true);
			var width, height;
			if (el.tagName == 'svg') {
				width = options.width || getDimension(el, clone, 'width');
				height = options.height || getDimension(el, clone, 'height');
			} else if (el.getBBox) {
				var box = el.getBBox();
				width = box.x + box.width;
				height = box.y + box.height;
				clone.setAttribute('transform', clone.getAttribute('transform').replace(/translate\(.*?\)/, ''));

				var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
				svg.appendChild(clone)
				clone = svg;
			} else {
				console.error('Attempted to render non-SVG element', el);
				return;
			}

			clone.setAttribute("version", "1.1");
			if (!clone.getAttribute('xmlns')) {
				clone.setAttributeNS(xmlns, "xmlns", "http://www.w3.org/2000/svg");
			}
			if (!clone.getAttribute('xmlns:xlink')) {
				clone.setAttributeNS(xmlns, "xmlns:xlink", "http://www.w3.org/1999/xlink");
			}
			clone.setAttribute("width", width * options.scale);
			clone.setAttribute("height", height * options.scale);
			clone.setAttribute("viewBox", [
				options.left || 0,
				options.top || 0,
				width,
				height
			].join(" "));

			outer.appendChild(clone);

			var css = styles(el, options.selectorRemap);
			var s = document.createElement('style');
			s.setAttribute('type', 'text/css');
			s.innerHTML = "<![CDATA[\n" + css + "\n]]>";
			var defs = document.createElement('defs');
			defs.appendChild(s);
			clone.insertBefore(defs, clone.firstChild);

			var svg = doctype + outer.innerHTML;
			var uri = 'data:image/svg+xml;base64,' + window.btoa(reEncode(svg));
			if (cb) {
				cb(uri);
			}
		});
	}

	out$.svgAsPngUri = function (el, options, cb) {
		requireDomNode(el);

		out$.svgAsDataUri(el, options, function (uri) {
			var image = new Image();
			image.onload = function () {
				var canvas = document.createElement('canvas');
				canvas.width = image.width;
				canvas.height = image.height;
				var context = canvas.getContext('2d');
				if (options && options.backgroundColor) {
					context.fillStyle = options.backgroundColor;
					context.fillRect(0, 0, canvas.width, canvas.height);
				}
				context.drawImage(image, 0, 0);
				var a = document.createElement('a'), png;
				try {
					png = canvas.toDataURL('image/png');
				} catch (e) {
					if ((typeof SecurityError !== 'undefined' && e instanceof SecurityError) || e.name == "SecurityError") {
						console.error("Rendered SVG images cannot be downloaded in this browser.");
						return;
					} else {
						throw e;
					}
				}
				cb(png);
			}
			image.onerror = function (error) {
				console.error('There was an error loading the data URI as an image', error);
			}
			image.src = uri;
		});
	}

	function download(name, uri) {
		var a = document.createElement('a');
		a.download = name;
		a.href = uri;
		document.body.appendChild(a);
		a.addEventListener("click", function (e) {
			a.parentNode.removeChild(a);
		});
		a.click();
	}

	out$.saveSvg = function (el, name, options) {
		requireDomNode(el);

		options = options || {};
		out$.svgAsDataUri(el, options, function (uri) {
			download(name, uri);
		});
	}

	out$.saveSvgAsPng = function (el, name, options) {
		requireDomNode(el);

		options = options || {};
		out$.svgAsPngUri(el, options, function (uri) {
			download(name, uri);
		});
	}

	// if define is defined create as an AMD module
	if (typeof define !== 'undefined') {
		define(function () {
			return out$;
		});
	}
})();
var CONFIG = {
    GRID_STEP: 16,
    GRID_COEFF: 3
};
 
var VAR_TYPES = {
    bool: {code: 0, name: "bool"},
    byte: {code: 1, name: "byte"},
    int: {code: 2, name: "int"},
    float: {code: 3, name: "float"},
    name: {code: 4, name: "name"},
    string: {code: 5, name: "string"},
    text: {code: 6, name: "text"},
    vector: {code: 7, name: "vector"},
    rotator: {code: 8, name: "rotator"},
    transform: {code: 9, name: "transform"},
    actor: {code: 10, name: "actor"},
    event: {code: 11, name: "delegateOut"},
    object: {code: 12, name: "object"},
    class: {code: 13, name: "class"},
    struct: {code: 14, name: "struct"},
    exec: {code: 15, name: "exec"},
    interface: {code: 16, name: "interface"},
    macro: {code: 17, name: "macro"},
    delegate: {code: 18, name: "delegate"},
    wildcard: {code: 19, name: "wildcard"}
};

var ICONS = {
    branch: "icon_Blueprint_Branch_16x.png",
    make_struct: "icon_Blueprint_MakeStruct_16x.png",
    break_struct: "icon_Blueprint_BreakStruct_16x.png",
    event_custom: "icon_Blueprint_CustomEvent_16x.png",
    event: "icon_Blueprint_Event_16x.png",
    for_each: "icon_Blueprint_ForEach_16x.png",
    for_loop: "icon_Blueprint_Loop_16x.png",
    make_array: "icon_Blueprint_MakeArray_16x.png",
    flip_flop: "icon_Blueprint_FlipFlop_16x.png",
    dynamic_cast: "icon_Blueprint_Cast_16x.png",
    timeline: "icon_Blueprint_Timeline_16x.png",
    node: "icon_Blueprint_Node_16x.png",
    message: "MessageIcon.png",
    latent: "LatentIcon.png",
    valid: "icon_Blueprint_IsValid_16x.png",
    select: "icon_Blueprint_Select_16x.png",
    sequence: "icon_Blueprint_Sequence_16x.png",
    macro: "icon_Blueprint_Macro_16x.png",
    keyboard: "icon_Blueprint_KeyboardEvent_16x.png",
    switch_on: "icon_Blueprint_Switch_16x.png",
    mouse: "icon_Blueprint_MouseEvent_16x.png",
    fullscreen:"LV_FullScreen.png",
    save:"LV_Save.png"
}

var FUNCTIONS_MAPPING = {
    K2Node_CallFunction: null,
    K2Node_SpawnActorFromClass: {
        text: "Spawn Actor"
    },
    K2Node_GetInputAxisValue: null,
    K2Node_MakeArray: {
        text: "Make Array"
    },
    K2Node_CreateWidget: {
        text: "Construct"
    },
    K2Node_MakeStruct: {
        text: "Make Struct"
    },
    K2Node_BreakStruct: {
        text: "Break Struct"
    },
    K2Node_LatentOnlineCall: {
        async: true
    },
    K2Node_AsyncAction: {
        async: true
    },
    K2Node_LeaderboardQuery: {
        text: "Read Leaderboard Integer",
        async: true
    },
    K2Node_SwitchInteger: {
        text: "Switch on Int",
        icon: ICONS["switch_on"],
        morpher: function (obj) {
            obj.color = VAR_COLORS["switch_on"];
            return obj;
        }
    },
    K2Node_SwitchEnum: {
        text: "Switch on Enum",
        icon: ICONS["switch_on"],
        morpher: function (obj) {
            obj.color = VAR_COLORS["switch_on"];
            return obj;
        }
    },
    K2Node_SwitchString: {
        text: "Switch on String",
        icon: ICONS["switch_on"],
        morpher: function (obj) {
            obj.color = VAR_COLORS["switch_on"];
            return obj;
        }
    },
    K2Node_CallParentFunction: {
        morpher: function (obj) {
            obj.name = "Parent: " + obj.name;
            obj.isParent = true;
            return obj;
        }
    },
    K2Node_AddComponent: null,
    K2Node_FormatText: {
        text: "Format Text",
        icon: ICONS["node"],
        morpher: function (obj) {
            obj.isPure = true;
            return obj;
        }
    },
    K2Node_GetInputVectorAxisValue: {
        icon: ICONS["keyboard"],
        morpher: function (obj, node) {
            obj.isPure = true;
            obj.name = "Get " + node.inputAxisKey;
            return obj;
        }
    },
    K2Node_GetDataTableRow: {
        text: "Get Data Table Row"
    }
}

var NAME_MAPPING = {
    "K2_Destroy Actor": "DestroyActor",
    "VSize": "VectorLength",
    "K2_Get Component Location": "GetWorldLocation",
    "K2_Set Actor Relative Location": "SetActorRelativeLocation",
    "K2_Set Relative Location": "SetRelativeLocation",
    "K2_Set Actor Location": "SetActorLocation",
    "K2_Set Actor Relative Rotation": "SetActorRelativeRotation",
    "K2_Set Relative Rotation": "SetRelativeRotation",
    "K2_Set Actor Rotation": "SetActorRotation",
    "K2_Set Timer": "Set Timer by Function Name",
    "K2_Get Actor Location": "GetActorLocation",
    "K2_Get Actor Rotation": "GetActorRotation",
    "RLerp": "Lerp (Rotator)",
    "FTrunc": "Truncate",
    "Conv_Int To Text": "ToText(int)",
    "Conv_Float To Text": "ToText(float)",
    "Conv_Text To String": "ToString(text)",
}

var FUNCTION_NAMES_MAPPING = {
    Array_Set: "Set Array Elem"
}

var ARRAY_FUNCTION_NAMES_MAPPING = {
    Array_Add: {
        text: "Add"
    },
    "Array_Add Unique": {
        text: "AddUnique"
    },
    Array_Append: {
        text: "Append"
    },
    Array_Clear: {
        text: "Clear"
    },
    Array_Contains: {
        text: "Contains"
    },
    Array_Find: {
        text: "Find"
    },
    Array_Get: {
        text: "Get"
    },
    Array_Insert: {
        text: "Insert"
    },
    "Array_Last Index": {
        text: "Last Index"
    },
    Array_Length: {
        text: "Length"
    },
    Array_Remove: {
        text: "Remove Index"
    },
    "Array_Remove Item": {
        text: "Remove"
    },
    Array_Resize: {
        text: "Resize"
    },
    Array_Set: {
        text: "Set Array Elem",
        showHeader: true
    },
    Array_Shuffle: {
        text: "Shuffle"
    }
}

var VAR_COLORS = {
    bool: "#8c0202",
    byte: "#026960",
    int: "#1ed6a4",
    float: "#97ef42",
    name: "#c07bef",
    string: "#ef02c8",
    text: "#d975a0",
    vector: "#efbd22",
    rotator: "#97a9ef",
    transform: "#eb6b02",
    actor: "#02a2e9",
    execFunction: "#5b8fb1",
    execFunctionF: "#79c9ff",
    pureFunction: "#83b47c",
    pureFunctionF: "#aaeea0",
    event: "#8d1313",
    delegate: "#ff3838",
    object: "#0481b7",
    class: "#5501b3",
    struct: "#024bab",
    exec: "#fff",
    interface: "#c9d58f",
    macro: "#b7b4aa",
    wildcard: "#7f7979",
    dynamicCast: "#258489",
    timeline: "#9d7e24",
    parent: "#854613",
    switch_on: "#8f9013"
};


var HIDDEN_PIN_NAMES = ["Output_Get"]


var fSymbol = "m 0,0 q -0.63477,0 -1.06201,-0.15259 l 0,-1.47705 q 0.37231,0.12818 0.7019,0.12818 0.83008,0 1.04981,-1.0376 l 1.13525,-5.3772 -1.02539,0 0.177,-0.90942 1.15357,-0.48828 0.10986,-0.5127 q 0.25024,-1.15967 0.84228,-1.69067 0.59815,-0.53711 1.67237,-0.53711 0.79956,0 1.43432,0.29907 l -0.48828,1.36719 q -0.42114,-0.18921 -0.81176,-0.18921 -0.34791,0 -0.56153,0.24414 -0.21362,0.24414 -0.28686,0.64087 l -0.0732,0.37842 1.33667,0 -0.29907,1.3977 -1.34277,0 -1.19629,5.65186 q -0.46997,2.2644 -2.46582,2.2644 z"

var eventArrow = "m19.666 0.0000015532c-0.635-0.00071-1.272 0.24199-1.759 0.72851l-17.174 17.13c-0.97546 0.97305-0.97718 2.5424-0.004 3.5176l17.131 17.164c0.97328 0.97523 2.5421 0.97695 3.5176 0.004l17.174-17.131c0.97545-0.97304 0.97718-2.5424 0.004-3.5176l-17.132-17.163c-0.486-0.4881-1.122-0.7322-1.758-0.73291zm-0.972 4.8379c0-1.4496 3.7208 1.7531 7.7668 5.4192s8.417 7.7958 8.417 9.2839c0 1.4882-4.3711 5.2806-8.417 9.1575-4.046 3.8769-7.7668 7.8382-7.7668 5.5456v-9.8848h-8.3514v-4.8184-4.8164h8.3514z";

var checkSymbol = "M 41.272753,92.252341 52.470676,104.29345 71.57596,74.519064"

String.prototype.format = function () {
    var formatted = this;
    for (var i = 0; i < arguments.length; i++) {
        var regexp = new RegExp('\\{' + i + '\\}', 'gi');
        formatted = formatted.replace(regexp, arguments[i]);
    }
    return formatted;
};

String.prototype.fromCamelCase = function () {
    var newString = '';
    for (var i = 0; i < this.length; i++) {
        newString += this[i];
        if (isLetter(this[i]) && this[i + 1] && isLetter(this[i + 1])) {
            if (this[i].toLowerCase() === this[i] && this[i + 1].toUpperCase() === this[i + 1]) {
                newString += " ";
            }
        }
    }
    return newString.trim();
}

function isLetter(c) {
    return c.toLowerCase() !== c.toUpperCase();
}


var createBezierPath = function (startX, startY, control1X, control1Y, control2X, control2Y, endX, endY) {
    return 'M ' + startX + ',' + startY + ' C ' + control1X + ',' + control1Y + ', ' + control2X + ',' + control2Y + ', ' + endX + ',' + endY;
};

var createSmoothPath = function (startX, startY, endX, endY) {
    return 'M ' + startX + ',' + startY + ' S ' + startX + ',' + startY + ' ' + endX + ',' + endY;
};


function intersectNode(node1, node2, scale, drawer, origin) {
    var s = scale || 1;
    if (node1.x + node1.width < node2.x * s || node2.x * s + node2.width * s < node1.x || node1.y + node1.height < node2.y * s || node2.y * s + node2.height * s < node1.y) {
        return false;
    } else {
        return true;
    }
}

function intersectNodeSelectable(node1, node2, scale, drawer, origin) {
    var s = scale || 1;
    if (node1.x + node1.width < node2.x * s || node2.x * s + node2.width * s < node1.x || node1.y + node1.height < node2.y * s || node2.y * s + node2.selectableHeight * s < node1.y) {
        return false;
    } else {
        return true;
    }
}

function inNode(node1, node2) {
    if (node2.x >= node1.x &&
            node2.x + node2.width <= node1.x + node1.width &&
            node2.y >= node1.y &&
            node2.y + node2.height <= node1.height + node1.y) {
        return true;
    } else
        return false;
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(Math.floor(r)) + componentToHex(Math.floor(g)) + componentToHex(Math.floor(b));
}

function getIcon(icon) {
    var iconPath = 'icons/{0}'.format(icon);
    return Assets[iconPath.replace(".png", "")] || iconPath;
}
class LinksDrawer {
    constructor(drawer) {
        this.allNodes = [];
        this.controlOffset = 85;
        this.drawer = drawer;
        this.linksGroup = this.drawer.group();
    }
    renderNodes(nodes) {
        var draw = this.linksGroup;
        this.allNodes = this.allNodes.concat(nodes);
        for (var i = 0; i < nodes.length; i++) {
            if (nodes[i].delegateOutput && nodes[i].delegateOutput.link) {
                this.drawPath(draw, nodes[i], nodes[i].delegateOutput, nodes[i].delegateOutput.color);
            }
            for (var j = 0; j < nodes[i].outputs.length; j++) {
                if (nodes[i].outputs[j].links) {
                    var output = nodes[i].outputs[j];
                    var color = VAR_COLORS[output.type.name];
                    for (var k = 0; k < nodes[i].outputs[j].links.length; k++) {
                        if (!nodes[i].outputs[j].drawedLines)
                            nodes[i].outputs[j].drawedLines = [];
                        nodes[i].outputs[j].drawedLines.push(this.drawPath(draw, nodes[i], output, nodes[i].outputs[j].links[k], color));
                    }
                }
            }
        }

        return draw;
    }
    redrawNodes(nodes) {
        var affectedOutputs = [];
        var allOutputs = [];
        var nodesInputs = [];
        for (var i = 0; i < this.allNodes.length; i++) {

            var currentNode = this.allNodes[i];
            if (currentNode.outputs && nodes.indexOf(currentNode) === -1) {
                currentNode.outputs.forEach(function (output) {
                    if (output.links && output.links.length > 0)
                        allOutputs.push(output);
                });
            }

        }

        nodes.forEach(function (affNode) {
            if (affNode.inputs && affNode.inputs.length > 0) {
                affNode.inputs.forEach(function (input) {
                    nodesInputs.push(input);
                });
            }

            if (affNode.outputs && affNode.outputs.length > 0) {
                affNode.outputs.forEach(function (output) {
                    affectedOutputs.push(output);
                });
            }
        });

        for (var i = 0; i < allOutputs.length; i++) {
            var currentOutput = allOutputs[i];
            currentOutput.links.forEach(function (link) {
                if (nodesInputs.indexOf(link) !== -1) {
                    affectedOutputs.push(currentOutput);
                }
            });


        }

        var self = this;
        var draw = this.linksGroup;

        affectedOutputs.forEach(function (output) {
            if (output.drawedLines && output.drawedLines.length > 0) {
                output.drawedLines.forEach(function (line) {
                    line.remove();
                });
                output.drawedLines = [];
                if (output.links) {
                    var color = VAR_COLORS[output.type.name];
                    for (var k = 0; k < output.links.length; k++) {
                        output.drawedLines.push(self.drawPath(draw, output.parent, output, output.links[k], color));
                    }
                }
            }
        })
    }

    drawPath(draw, node, pin, link, color) {
        var line = draw.group();
        var minOffset = 16;
        var startX = node.x + node.width;
        var startY = pin.center.y + node.y;

        var endX = link.parent.x;
        ;
        var endY = link.center.y + link.parent.y;

        var deltaX = Math.abs(link.center.x + link.parent.x - pin.center.x - node.x);

        var cOffset = (deltaX > this.controlOffset) && this.controlOffset || Math.max(deltaX, minOffset);



        line.path(createSmoothPath(pin.center.x + node.x, pin.center.y + node.y, startX, startY)).stroke({color: color, width: 1}).style('pointer-events', 'none');

        var control1X = pin.center.x + cOffset + node.x;
        var control1Y = pin.center.y + node.y;


        var control2X = link.center.x - cOffset + link.parent.x;
        var control2Y = link.center.y + link.parent.y;





        var path = line.path(createBezierPath(startX, startY, control1X, control1Y, control2X, control2Y, endX, endY));
        path.style('pointer-events', 'none');

        path.stroke({color: color, width: 1});
        path.fill({color: '#000000', opacity: 0});

        //endX+1 - for smooth drawing!!
        line.path(createSmoothPath(endX + 1, endY, link.center.x + link.parent.x, link.center.y + link.parent.y)).stroke({color: color, width: 1}).style('pointer-events', 'none');
        return line;
    }
}
class NodesDrawer {
    constructor(drawer, parent) {
        this.dragNode = null;
        this.selectedNodes = [];
        this.movingNodes = [];
        this.drawer = drawer;
        this.parent = parent;
        this.circleRadius = 8.5;
        this.fLetter = this.drawer.defs().path(fSymbol);
        this.eventArrow = this.drawer.defs().path(eventArrow);
        this.pinCircle = this.drawer.defs().circle(this.circleRadius);
        this.pinArrow = this.drawer.defs().polygon([
            [this.circleRadius * 1.5, this.circleRadius / 2],
            [this.circleRadius * 1.2, this.circleRadius / 2 - this.circleRadius / 4],
            [this.circleRadius * 1.2, this.circleRadius / 2 + this.circleRadius / 4],
            [this.circleRadius * 1.5, this.circleRadius / 2]
        ]);
        this.opacityLinearGradient = this.drawer.gradient('linear', function (stop) {
            stop.at({offset: 0, color: '#a0a0a0', opacity: 1});
            stop.at({offset: 0.03, color: '#5f5f5f', opacity: 0.3});
            stop.at({offset: 0.8, color: '#636363', opacity: 0.3});
            stop.at({offset: 1, color: '#ffffff', opacity: 1});
        });
        this.opacityLinearGradient.from(0, 1).to(0, 0);
    }
    renderNodes(nodes) {
        var draw = this.drawer.group();
        for (var i = 0; i < nodes.length; i++) {
            var currentNode = nodes[i];
            currentNode.calculateWidth();
            currentNode.draw(this);
            var node = currentNode.allNode;
            node.translate(currentNode.x, currentNode.y);
            draw.add(node);
            this.makeUnselectable(currentNode.allNode);
            this.subscribeNode(currentNode);
            currentNode.pins.forEach(function (pin) {
                pin.draw.style('cursor', 'default');
                pin.draw.mouseover(function (e) {
                    if (!this.dragNode)
                        pin.hover.show();
                });
                pin.draw.mouseout(function (e) {
                    pin.hover.hide();
                });
            })
        }

        return draw;
    }
    subscribeNode(el) {
        var self = this;
        if (el instanceof CommentNode) {
            //console.log(el);
            el.selectable.mousedown(function (event) {
                if (event.button === 0) {
                    //console.log('SELECTABLE');

                    self.dragNode = el;
                    var delta = self.parent.getCoords(event);
                    self.nodeMouseDownPoint = self.parent.getCoords(event);
                    var sub = delta.subtract(self.parent.origin);
                    self.pointOnNode = new Vector(sub.x - self.dragNode.x * self.parent.currentScale, sub.y - self.dragNode.y * self.parent.currentScale);
                    //console.log(pointOnNode);


                }
                if (event.button === 0) {
                    event.stopPropagation();
                }
            });
        } else {
            el.allNode.mousedown(function (event) {
                if (event.button === 0) {

                    self.dragNode = el;
                    var delta = self.parent.getCoords(event);
                    self.nodeMouseDownPoint = self.parent.getCoords(event);
                    var sub = delta.subtract(self.parent.origin);
                    self.pointOnNode = new Vector(sub.x - self.dragNode.x * self.parent.currentScale, sub.y - self.dragNode.y * self.parent.currentScale);
                    //console.log(pointOnNode);


                }
                if (event.button === 0) {
                    event.stopPropagation();
                }
            });
        }


        if (el instanceof CommentNode) {
            el.selectable.mouseup(function (event) {
                var mouseUpPoint = self.parent.getCoords(event)
                if (event.button === 0) {
                    self.movingNodes = [];
                    if (self.nodeMouseDownPoint.equals(mouseUpPoint))
                    {
                        if (!self.isNodeSelected(el) || event.ctrlKey) {
                            self.selectNode(el, event);
                        } else if (self.selectedNodes.length > 1) {
                            self.selectOneNode(el);
                        }
                    }


                    self.dragNode = null;
                }

            });
        } else {
            el.allNode.mouseup(function (event) {
                var mouseUpPoint = self.parent.getCoords(event)
                if (event.button === 0) {
                    self.movingNodes = [];
                    if (self.nodeMouseDownPoint.equals(mouseUpPoint))
                    {
                        if (!self.isNodeSelected(el) || event.ctrlKey) {
                            self.selectNode(el, event);
                        } else if (self.selectedNodes.length > 1) {
                            self.selectOneNode(el);
                        }
                    }
                    self.dragNode = null;
                }

            });
        }
    }
    makeUnselectable(node) {
        if (node.node)
            node = node.node;
        if (node.nodeType === 1) {
            if (node.tagName === "text" || node.tagName === "tspan")
                node.setAttribute("style", node.getAttribute("style") + "; -webkit-user-select: none; -moz-user-select: none; -ms-user-select: none;");
        }
        var child = node.firstChild;
        while (child) {
            this.makeUnselectable(child);
            child = child.nextSibling;
        }
    }
    isNodeSelected(el) {
        return this.selectedNodes.indexOf(el) !== -1;
    }
    selectAllNodes() {
        var self = this;
        this.selectedNodes.splice(0, this.selectedNodes.length);
        this.parent.nodesObjects.forEach(function (node) {
            node.hover.show();
            self.selectedNodes.push(node);
        });
        //console.log('len', selectedNodes.length);
    }

    selectOneNode(el) {
        this.selectedNodes.forEach(function (node) {
            node.hover.hide();
        });
        this.selectedNodes.splice(0, this.selectedNodes.length);
        this.selectedNodes[0] = el;
        this.selectedNodes.forEach(function (node) {
            if (node.hover.visible()) {
                node.hover.hide();
            } else {
                node.hover.show();
            }
        })
    }
    selectNodeGroup(group) {
        this.selectedNodes.forEach(function (node) {
            node.hover.hide();
        });
        this.selectedNodes.splice(0, this.selectedNodes.length);
        this.selectedNodes = group;
        this.selectedNodes.forEach(function (node) {
            node.hover.show();
        })
    }
    addNodeGroupToSelect(group) {
        var self = this;
        group.forEach(function (node) {
            if (self.selectedNodes.indexOf(node) === -1) {
                self.selectedNodes.push(node);
                node.hover.show();
            }
        });
    }
    selectNode(el, event) {
        this.selectedNodes.forEach(function (node) {
            node.hover.hide();
        });

        if (this.selectedNodes.indexOf(el) === -1) {
            if (event.shiftKey) {
                this.selectedNodes.push(el);
            } else if (event.ctrlKey) {
                this.selectedNodes.push(el);
            } else {
                this.selectedNodes.splice(0, this.selectedNodes.length);
                this.selectedNodes[0] = el;
            }
        } else if (event.ctrlKey) {
            this.selectedNodes.splice(this.selectedNodes.indexOf(el), 1);
        } else {
            this.selectedNodes.splice(this.selectedNodes.indexOf(el), 1);
        }



        this.selectedNodes.forEach(function (node) {
            if (node.hover.visible()) {
                node.hover.hide();
            } else {
                node.hover.show();
            }
        })
    }
    unselectAllNodes() {
        this.selectedNodes.forEach(function (node) {
            node.hover.hide();
        });
        this.selectedNodes.splice(0, this.selectedNodes.length);
    }
}
class InterfaceDrawer {
    constructor(drawer) {
        this.drawer = drawer;
        this.scaleLabel = null;
        this.menuRect = null;
        this.selectRect = null;
        this.saveCallback = null;
    }
    setSaveCallback(cb) {
        this.saveIcon.click(function (e) {
            cb(e);
        });
    }
    setFullScreenCallback(cb) {
        this.fullScreenIcon.click(function (e) {
            cb(e);
        });
    }
    render() {
        var draw = this.drawer.group();
        this.scaleLabel = this.drawScaleLabel();
        this.scaleLabel.style('pointer-events', 'none')
        this.menuRect = this.drawMenuRect();
        this.menuRect.style('pointer-events', 'none');
        var self = this;
        this.saveIcon = this.drawSaveIcon();
        this.fullScreenIcon = this.drawFullScreenIcon();

        this.saveIcon.mouseover(function (e) {
            self.saveIcon.hover.show();
        });
        this.saveIcon.mouseout(function (e) {
            self.saveIcon.hover.hide();
        });

        this.fullScreenIcon.mouseover(function (e) {
            self.fullScreenIcon.hover.show();
        });
        this.fullScreenIcon.mouseout(function (e) {
            self.fullScreenIcon.hover.hide();
        });



        draw.add(this.menuRect);
        draw.add(this.scaleLabel);
        draw.add(this.saveIcon);
        draw.add(this.fullScreenIcon);
        return draw;
    }
    drawFullScreenIcon() {
        var fullScreenIcon = this.drawer.group();
        var hover = fullScreenIcon.rect(40, 40).radius(4);
        fullScreenIcon.hover = hover;
        hover.hide();
        fullScreenIcon.image(getIcon(ICONS["fullscreen"]), 40, 40);

        hover.fill({color: "#f1b000"});
        fullScreenIcon.translate(60, 0);
        return fullScreenIcon;
    }
    drawSaveIcon() {
        var saveIcon = this.drawer.group();
        var hover = saveIcon.rect(40, 40).radius(4);
        saveIcon.hover = hover;
        hover.hide();
        saveIcon.image(getIcon(ICONS["save"]), 40, 40);

        hover.fill({color: "#f1b000"});
        saveIcon.translate(10, 0);
        return saveIcon;
    }
    setScaleLabelText(step) {
        if (step > 0)
            step = "+" + step;
        else if (step === 0)
            step = "1:1"
        this.scaleLabel.text("Zoom {0}".format(step));
    }
    drawMenuRect() {
        var rect = this.drawer.rect(this.drawer.width(), 48);
        rect.opacity(0.4);
        rect.backward();
        return rect;
    }
    drawScaleLabel() {
        var draw = this.drawer.group();
        var scaleLabel = draw.text("Zoom 1:1");

        scaleLabel.font({
            family: 'Roboto, sans-serif'
            , size: 24
            , anchor: 'end'
            , color: "#7f7f7f"
        });
        scaleLabel.style('font-weight', 'bold');
        scaleLabel.style('-webkit-user-select', 'none');
        scaleLabel.style('-moz-user-select', 'none');
        scaleLabel.style('-ms-user-select', 'none');
        scaleLabel.translate(this.drawer.width() - 5, 0);
        scaleLabel.fill({color: "#7f7f7f"});
        //	scaleLabel.opacity(0.2);

        return scaleLabel;

    }
    drawSelectRect(coordsStart, coordsEnd) {
        if (this.selectRect)
            this.selectRect.remove();
        var draw = this.drawer.group();
        this.selectRect = draw.rect(Math.abs(coordsEnd.x - coordsStart.x), Math.abs(coordsEnd.y - coordsStart.y)).fill({opacity: 0}).stroke({color: "#fff", width: 1, dasharray: "10,5"});
        if (coordsStart.x < coordsEnd.x && coordsStart.y < coordsEnd.y) {
            this.selectRect.move(coordsStart.x, coordsStart.y);
        } else if (coordsStart.x < coordsEnd.x && coordsStart.y > coordsEnd.y) {
            this.selectRect.move(coordsStart.x, coordsEnd.y);
        } else if (coordsStart.x > coordsEnd.x && coordsStart.y < coordsEnd.y) {
            this.selectRect.move(coordsEnd.x, coordsStart.y);
        } else {
            this.selectRect.move(coordsEnd.x, coordsEnd.y);
        }
    }
    removeSelectRect() {
        if (this.selectRect)
            this.selectRect.remove();
    }
}
class BPParser {
    constructor(text) {
        this.text = text;
        this.txt = this.text.split("\n");
    }
    getObject() {

    }
    strToObject(str, obj) {
        var retObj = {};
        str = str.replace("Begin Object", "");
        str = str.replace("End Object", "");
        str = str.trim();
        var accum = "";
        var currentProperty = null;
        var currentValue = null;
        var retObj = {};
        for (var i = 0; i <= str.length; i++) {
            if (str[i] === "=") {
                currentProperty = accum;
                retObj[currentProperty] = null;
                accum = "";
            } else if (((i + 1 > str.length) || (str[i] === " ")) && currentProperty) {
                currentValue = accum;
                retObj[currentProperty] = currentValue;

                currentProperty = null;
                currentValue = null;
                accum = "";
            } else {
                accum += str[i];
            }
        }
        return retObj;
    }
    strToObjectParams(str, obj) {
        str = str.trim();
        var left = str.substr(0, str.indexOf('='));
        var right = str.substr(str.indexOf('=') + 1);
        if (right[0] === "(") {
            obj[left] = {};
            right = right.replace("(", "");
            right = right.replace(")", "");
            var tArray = right.split(",");
            for (var i = 0; i < tArray.length; i++) {
                var final = tArray[i].trim().split("=");
                obj[left][final[0]] = final[1];
            }

        } else {
            obj[left] = right;
        }

    }
    parseObject(lineCounter, stack) {
        if (this.txt[lineCounter].length === 0)
            return lineCounter;
        var obj = this.strToObject(this.txt[lineCounter]);
        stack.push(obj);
        lineCounter++;
        while (lineCounter < this.txt.length) {
            var str = this.txt[lineCounter];
            if (str.indexOf("Begin Object") !== -1) {
                if (!obj.objects) {
                    obj.objects = [];
                }
                lineCounter = this.parseObject(lineCounter, obj.objects);
            } else if (str.indexOf("End Object") !== -1) {
                break;
            } else {
                this.strToObjectParams(str, obj);
            }
            lineCounter++;
        }

        return lineCounter;
    }
    verify(txt) {
        var bCount = 0, eCount = 0;
        txt.forEach(function (str) {
            if (str.indexOf("Begin Object") !== -1) {
                bCount++;
            } else if (str.indexOf("End Object") !== -1) {
                eCount++;
            }
        });

        if (eCount === bCount)
            return true;


        return false;

    }
    parseText() {
        var objects = [];
        var res = 0;
        if (!this.verify(this.txt))
            return null;
        while (res < this.txt.length) {
            res = this.parseObject(res, objects);
            res++;
        }
        var work = JSON.parse(JSON.stringify(objects));

        for (var i = 0; i < work.length; i++) {
            var currentNode = work[i];

            if (currentNode.FunctionReference) {
                currentNode["nodeName"] = currentNode.FunctionReference.MemberName.replace(/["']/g, "");
                currentNode["nodeName"] = currentNode["nodeName"].fromCamelCase();
                if (currentNode.FunctionReference.MemberParent)
                    currentNode["nodeParent"] = currentNode.FunctionReference.MemberParent;
                delete currentNode.FunctionReference;
            } else if (currentNode.ProxyFactoryFunctionName) {
                currentNode["nodeName"] = currentNode.ProxyFactoryFunctionName.replace(/["']/g, "");
                currentNode["nodeName"] = currentNode["nodeName"].fromCamelCase();
                if (currentNode.ProxyClass) {
                    currentNode["nodeName"] += " for ";
                    var forClass = currentNode.ProxyClass.split(".")[1].split("_")[0].fromCamelCase();
                    currentNode["nodeName"] += forClass;
                }

                delete currentNode.ProxyFactoryFunctionName;

            } else if (currentNode.MacroGraphReference) {
                //	console.log(currentNode.MacroGraphReference.MacroGraph);
                var tmp = currentNode.MacroGraphReference.MacroGraph.replace(/["']/g, "");
                if (tmp.split(":").length > 1) {
                    currentNode["nodeName"] = tmp.split(":")[1].fromCamelCase();
                } else {
                    currentNode["nodeName"] = tmp.fromCamelCase();
                }
                delete currentNode.MacroGraphReference;
            } else if (currentNode.EventReference) {
                if (!currentNode.InputAxisName && !currentNode.AxisKey) {
                    if (!currentNode.DelegatePropertyName) {
                        currentNode["nodeName"] = currentNode.EventReference.MemberName.replace(/["']/g, "").replace("Receive", "");
                        currentNode["nodeName"] = "Event " + currentNode["nodeName"];
                    } else {
                        currentNode["nodeName"] = currentNode.DelegatePropertyName.replace(/["']/g, "");
                        if (currentNode.ComponentPropertyName)
                            currentNode["nodeName"] += " (" + currentNode.ComponentPropertyName.replace(/["']/g, "") + ")";
                    }
                } else if (currentNode.InputAxisName) {
                    currentNode["nodeName"] = currentNode.InputAxisName.replace(/["']/g, "");
                    currentNode["nodeName"] = "InputAxis " + currentNode["nodeName"];
                } else if (currentNode.AxisKey) {
                    currentNode["nodeName"] = currentNode.AxisKey.replace(/["']/g, "");
                    currentNode["nodeName"] = "InputAxis " + currentNode["nodeName"];
                }
                delete currentNode.EventReference;
            } else if (currentNode.DelegateReference) {

                currentNode["nodeName"] = "Call " + currentNode.DelegateReference.MemberName.replace(/["']/g, "");
                //console.log(currentNode["nodeName"]);
                //delete currentNode.DelegateReference;
            }

            if (!currentNode["nodeName"] && currentNode.CustomFunctionName) {
                currentNode["nodeName"] = currentNode.CustomFunctionName;
                currentNode.isCustom = true;
            }

            if (currentNode["InputActionName"]) {
                if (currentNode["nodeName"])
                    currentNode["nodeName"] += currentNode["InputActionName"];
                else if (currentNode["Class"]) {
                    currentNode["Class"] += currentNode["InputActionName"].replace(/["']/g, "").fromCamelCase();
                }
            }
            var pinCounter = 0;
            currentNode.pins = [];
            while (currentNode["Pins({0})".format(pinCounter)]) {
                currentNode.pins.push(currentNode["Pins({0})".format(pinCounter)]);
                delete currentNode["Pins({0})".format(pinCounter)];
                pinCounter++;
            }
            if (currentNode.objects) {
                for (var j = currentNode.objects.length - 1; j >= 0; j--) {
                    var item = currentNode.objects[j];
                    if (item.Class)
                        currentNode.objects.splice(j, 1);
                }
            }

            var tmpPins = [];
            for (var j = 0; j < currentNode.pins.length; j++) {
                var currentPin = currentNode.pins[j];
                for (var k = 0; k < currentNode.objects.length; k++) {
                    //HERE PROBLEM!!!
                    //console.log(currentNode.objects[k]);
                    var objName = currentNode.objects[k].Name.replace(/["']/g, "");
                    if (currentPin.indexOf(objName) !== -1) {
                        var newPin = {};
                        newPin = currentNode.objects[k];
                        newPin.pinId = parseInt(currentNode.objects[k].Name.split("_")[1].replace(/["']/g, ""));
                        if (currentNode.objects[k].PinType)
                            newPin.pinType = currentNode.objects[k].PinType.PinCategory;
                        if (currentNode.objects[k].PinType && currentNode.objects[k].PinType.bIsArray) {
                            newPin.isArray = true;
                        }
                        if (currentNode.objects[k].PinType && currentNode.objects[k].PinType.PinSubCategoryObject) {
                            newPin.subType = currentNode.objects[k].PinType.PinSubCategoryObject;
                            if (newPin.subType.indexOf("ScriptStruct") !== -1) {
                                var start_pos = newPin.subType.indexOf('\'') + 1;
                                var end_pos = newPin.subType.indexOf('\'', start_pos);
                                var quotesText = newPin.subType.substring(start_pos, end_pos)
                                var tmp = quotesText.split("/");
                                var subType = tmp[tmp.length - 1];
                                newPin.pinSubType = subType.split(".")[1].toLowerCase();
                            }
                        }
                        if (currentNode.objects[k].PinName) {
                            newPin.pinText = currentNode.objects[k].PinName.replace(/["']/g, "")
                            if (newPin.pinText.indexOf(" ") === -1) {
                                newPin.pinText = newPin.pinText.fromCamelCase();
                            }
                            if (newPin.pinText[0] === "b") {
                                newPin.pinText = newPin.pinText.substr(1, newPin.pinText.length - 1);
                            }
                        } else {
                            newPin.pinText = "";
                        }


                        newPin.isOutput = (currentNode.objects[k].Direction && currentNode.objects[k].Direction === "EGPD_Output") && true || false;
                        newPin.linkedTo = [];
                        pinCounter = 0;
                        while (currentNode.objects[k]["LinkedTo({0})".format(pinCounter)]) {
                            var lTo = currentNode.objects[k]["LinkedTo({0})".format(pinCounter)];
                            var lToA = lTo.split("_");
                            newPin.linkedTo.push(parseInt(lToA[lToA.length - 1]));
                            delete currentNode.objects[k]["LinkedTo({0})".format(pinCounter)];
                            pinCounter++;
                        }



                        delete newPin.Direction;
                        delete newPin.PinName;
                        //delete newPin.Name;
                        delete newPin.PinType;
                        tmpPins.push(newPin);
                        break;
                    }
                }
            }


            currentNode.pins = tmpPins;
            delete currentNode.objects;


            for (var j = 0; j < currentNode.pins.length; j++) {
                var currentPin = currentNode.pins[j];
                for (var k in currentPin) {
                    if (k.length > 1) {
                        var str = currentPin[k];
                        if (str[0] === '"')
                            currentPin[k] = currentPin[k].substr(1, currentPin[k].length - 2)

                        if (k[0].toUpperCase() === k[0]) {
                            var newName = k.substr(0, 1).toLowerCase() + k.substr(1, k.length - 1);
                            currentPin[newName] = currentPin[k];
                            delete currentPin[k];
                        }
                    }
                }
            }

            for (var k in currentNode) {
                if (k.length > 1) {
                    var str = currentNode[k];
                    if (str[0] === '"')
                        currentNode[k] = currentNode[k].substr(1, currentNode[k].length - 2)

                    if (k[0].toUpperCase() === k[0]) {
                        var newName = k.substr(0, 1).toLowerCase() + k.substr(1, k.length - 1);
                        currentNode[newName] = currentNode[k];
                        delete currentNode[k];
                    }
                }
            }

        }
        console.log(work);
        return work;
    }
}

function BPToNodes(objects, origin) {
    var origin = origin || new Vector(0, 0);
    var minX, minY;
    var newNodes = [];
    for (var i = 0; i < objects.length; i++) {
        if (objects[i].nodePosX && objects[i].nodePosY) {
            minX = objects[i].nodePosX;
            minY = objects[i].nodePosY;
            break;
        }

    }


    for (var i = 0; i < objects.length; i++) {
        var curObj = objects[i];
        if (parseInt(curObj.nodePosX) < minX)
            minX = curObj.nodePosX;
        if (parseInt(curObj.nodePosY) < minY)
            minY = curObj.nodePosY;
    }

    for (var i = 0; i < objects.length; i++) {
        var curObj = objects[i];
        if (!curObj.nodePosY)
            curObj.nodePosY = 0;
        if (!curObj.nodePosX)
            curObj.nodePosX = 0;
        curObj.nodePosY -= minY;
        curObj.nodePosX -= minX;

        curObj.nodePosY += origin.y;
        curObj.nodePosX += origin.x;
    }

    var maxX = 0, maxY = 0;

    for (var i = 0; i < objects.length; i++) {
        var curObj = objects[i];

        if (parseInt(curObj.nodePosY) + parseInt(curObj.nodeHeight) > maxY)
            maxY = parseInt(curObj.nodePosY) + parseInt(curObj.nodeHeight);

        if (parseInt(curObj.nodePosX) + parseInt(curObj.nodeWidth) > maxX)
            maxX = parseInt(curObj.nodePosX) + parseInt(curObj.nodeWidth);
    }

    //console.log(maxX, maxY);



    var links = [];
    for (var i = 0; i < objects.length; i++) {
        var curObj = objects[i];
        var x, y;
        var newNode;
        var nN;
        x = curObj.nodePosX;
        y = curObj.nodePosY;
        if (curObj.class && curObj.class.indexOf("EdGraphNode_Comment") !== -1) {
            newNode = {
                name: curObj.nodeComment,
                width: curObj.nodeWidth,
                height: curObj.nodeHeight
            };
            if (curObj.commentColor)
                newNode.commentColor = curObj.commentColor;
            nN = new CommentNode(newNode, x, y);
            newNodes.push(nN);
        }


    }


    for (var i = 0; i < objects.length; i++) {
        var curObj = objects[i];

        var inputs = [];
        var outputs = [];
        var x, y;
        var newNode;
        var nN;
        x = curObj.nodePosX;
        y = curObj.nodePosY;

        if (curObj.pins.length === 0) {
            //console.log('empty pins');
            continue
        }

        for (var j = 0; j < curObj.pins.length; j++) {
            var curPin = curObj.pins[j];
            var pinType = VAR_TYPES[curPin.pinSubType] && VAR_TYPES[curPin.pinSubType] || VAR_TYPES[curPin.pinType];
            if (curPin.bHidden === "True")
                continue;

            if (curPin.isOutput) {
                for (var k = 0; k < curPin.linkedTo.length; k++) {
                    links.push({from: curPin.pinId, to: curPin.linkedTo[k]})
                }
            }
            var newPin = {
                name: curPin.pinFriendlyName && curPin.pinFriendlyName || curPin.pinText,
                type: pinType,
                id: curPin.pinId
            };

            if (curPin.pinFriendlyName && curPin.pinFriendlyName.indexOf("NSLOCTEXT") !== -1) {
                var tmp = curPin.pinFriendlyName.replace("NSLOCTEXT(", "").replace(")", "");
                var tmpArr = tmp.split(",");
                newPin.name = tmpArr[tmpArr.length - 1].replace(/["']/g, "");
            }

            if (curPin.pinToolTip) {
                newPin.tooltip = curPin.pinToolTip;
            }

            if (curPin.isArray)
                newPin.isArray = true;
            if (curPin.linkedTo.length > 0)
                newPin.linked = true;
            else
                newPin.linked = false;

            if (!newPin.linked && !curPin.isOutput) {
                if (newPin.type === VAR_TYPES["vector"] || newPin.type === VAR_TYPES["rotator"]) {
                    var tmpValue = curPin.defaultValue && curPin.defaultValue || curPin.autogeneratedDefaultValue;
                    if (tmpValue)
                    {
                        var vect = tmpValue.split(",");
                        for (var z = 0; z < vect.length; z++) {
                            vect[z] = parseFloat(vect[z]).toFixed(1);
                        }
                    } else {
                        vect[0] = 0.0;
                        vect[1] = 0.0;
                        vect[2] = 0.0;
                    }

                    newPin.value = vect;
                } else if (newPin.type === VAR_TYPES["float"] || newPin.type === VAR_TYPES["int"] || newPin.type === VAR_TYPES["byte"]) {
                    newPin.value = curPin.defaultValue && curPin.defaultValue || curPin.autogeneratedDefaultValue;
                    //newPin.value = parseFloat(newPin.value).toFixed(1);
                } else if (newPin.type === VAR_TYPES["bool"]) {
                    newPin.value = curPin.defaultValue && curPin.defaultValue || curPin.autogeneratedDefaultValue;
                    if (newPin.value === "true")
                        newPin.value = true;
                    else
                        newPin.value = false;
                    //newPin.value = parseFloat(newPin.value).toFixed(1);
                } else if (newPin.type === VAR_TYPES["actor"] || newPin.type === VAR_TYPES["object"]) {
                    if (curPin.pinText === "self") {
                        newPin.value = "self";
                    }
                }
            }

            if (curPin.isOutput) {
                outputs.push(newPin);
            } else {
                inputs.push(newPin);
            }
        }

        if (!curObj.class || (inputs.length === 0 && outputs.length === 0))
            continue

        if (typeof FUNCTIONS_MAPPING[curObj.class] !== "undefined") {
            var async = false;
            if (FUNCTIONS_MAPPING[curObj.class] !== null) {
                if (FUNCTIONS_MAPPING[curObj.class].text) {
                    curObj.nodeName = FUNCTIONS_MAPPING[curObj.class].text;
                }

                if (FUNCTIONS_MAPPING[curObj.class].async) {
                    async = true;
                }

            }



            newNode = {
                isPure: curObj.bIsPureFunc && curObj.bIsPureFunc === "True",
                name: curObj.nodeName,
                inputs: inputs,
                outputs: outputs
            };

            if (FUNCTIONS_MAPPING[curObj.class] !== null) {
                if (FUNCTIONS_MAPPING[curObj.class].async) {
                    newNode.async = true;
                }

                if (FUNCTIONS_MAPPING[curObj.class].icon) {
                    newNode.icon = FUNCTIONS_MAPPING[curObj.class].icon;
                }
                
                 if (FUNCTIONS_MAPPING[curObj.class].morpher) {
                    FUNCTIONS_MAPPING[curObj.class].morpher(newNode,curObj);
                    //console.log("After morpher",newNode);
                }

            }

            if (curObj.class.indexOf("K2Node_MakeArray") !== -1)
                newNode.isPure = true;

            if (newNode.name.indexOf("Conv_") !== -1 && newNode.name.indexOf("Int To Text") === -1 && newNode.name.indexOf("Float To Text") === -1) {
                nN = new ConverterNode(newNode, x, y);
            } else {
                nN = new FunctionNode(newNode, x, y);
            }

        } else if (curObj.class.indexOf("K2Node_DynamicCast") !== -1) {
            var tmpArr = curObj.targetType.split(".");
            var name = "Cast to " + tmpArr[tmpArr.length - 1].replace("_C", "").replace(/["']/g, "");
            newNode = {
                name: name,
                inputs: inputs,
                outputs: outputs
            };


            nN = new CastNode(newNode, x, y);
        } else if (curObj.class.indexOf("K2Node_Timeline") !== -1) {
            newNode = {
                name: curObj.timelineName,
                inputs: inputs,
                outputs: outputs
            };


            nN = new TimelineNode(newNode, x, y);
        } else if (curObj.class.indexOf("K2Node_CallDelegate") !== -1) {
            // console.log(curObj);
            newNode = {
                name: curObj.nodeName,
                inputs: inputs,
                outputs: outputs
            };


            nN = new CallDelegateNode(newNode, x, y);
        } else if (curObj.class.indexOf("K2Node_CallArrayFunction") !== -1) {
            newNode = {
                isPure: curObj.bIsPureFunc && curObj.bIsPureFunc === "True",
                name: curObj.nodeName,
                inputs: inputs,
                outputs: outputs
            };
            if (curObj.nodeName.indexOf("_Set") !== -1) {
                nN = new FunctionNode(newNode, x, y);
            } else {
                nN = new ArrayFunctionNode(newNode, x, y);
            }






        } else if (curObj.class.indexOf("EdGraphNode_Comment") !== -1) {
            continue
        } else if (curObj.class.indexOf("K2Node_MacroInstance") !== -1 || curObj.class.indexOf("K2Node_IfThenElse") !== -1 || curObj.class.indexOf("K2Node_ExecutionSequence") !== -1) {
            if (curObj.class.indexOf("K2Node_IfThenElse") !== -1)
                curObj.nodeName = "Branch"
            else if (curObj.class.indexOf("K2Node_ExecutionSequence") !== -1)
                curObj.nodeName = "Sequence"
            newNode = {
                name: curObj.nodeName,
                inputs: inputs,
                outputs: outputs
            };

            nN = new MacroNode(newNode, x, y);

        } else if (curObj.class.indexOf("K2Node_Event") !== -1 || curObj.class.indexOf("K2Node_CustomEvent") !== -1 || curObj.class.indexOf("K2Node_ComponentBoundEvent") !== -1 || curObj.class.indexOf("K2Node_InputTouch") !== -1 || curObj.class.indexOf("K2Node_InputAction") !== -1 || curObj.class.indexOf("K2Node_InputAxisEvent") !== -1 || curObj.class.indexOf("K2Node_InputKey") !== -1) {
            if (curObj.class && curObj.class.indexOf("K2Node") !== -1)
                curObj.class = curObj.class.replace("K2Node_", "");
            curObj.class = curObj.class.fromCamelCase();
            //console.log("EVENT", curObj);
            newNode = {
                name: curObj.nodeName && curObj.nodeName || curObj.class,
                inputs: inputs,
                outputs: outputs,
                isCustom: curObj.isCustom
            };

            if (curObj.class === "Input Key") {
                newNode.inputKey = curObj.inputKey;
            }

            nN = new EventNode(newNode, x, y);

        } else if (curObj.class.indexOf("K2Node_VariableGet") !== -1 || curObj.class.indexOf("K2Node_Self") !== -1) {
            newNode = {
                outputs: outputs
            };


            nN = new GetterNode(newNode, x, y);

        } else if (curObj.class.indexOf("Set") !== -1) {
            newNode = {
                outputs: outputs,
                inputs: inputs
            };
            nN = new SetterNode(newNode, x, y);
        } else if (curObj.class.indexOf("Operator") !== -1 || curObj.class.indexOf("K2Node_EnumEquality") !== -1) {
            newNode = {
                name: curObj.nodeName && curObj.nodeName || curObj.class,
                inputs: inputs,
                outputs: outputs
            };
            nN = new BinaryOperatorNode(newNode, x, y);
        } else if (curObj.class.indexOf("K2Node_Knot") !== -1) {
            //console.log('KNIT');
            newNode = {
                name: curObj.nodeName && curObj.nodeName || curObj.class,
                inputs: inputs,
                outputs: outputs
            };
            nN = new RerouteNode(newNode, x, y);
        } else if (curObj.class.indexOf("K2Node_Select") !== -1) {
            newNode = {
                name: "Select",
                inputs: inputs,
                outputs: outputs
            };
            nN = new SelectNode(newNode, x, y);
        } else if (curObj.class.indexOf("K2Node_Composite") !== -1) {
            newNode = {
                name: curObj.boundGraph.replace("EdGraph", "").replace(/["']/g, ""),
                inputs: inputs,
                outputs: outputs
            };
            nN = new CompositeNode(newNode, x, y);
        } else {
            newNode = {
                name: curObj.nodeName && curObj.nodeName || curObj.class || curObj.name,
                inputs: inputs,
                outputs: outputs
            };
            if (curObj.class.indexOf("Material") === -1)
                console.log("Unknown Node", curObj);
            nN = new UnknownNode(newNode, x, y);
        }

        newNodes.push(nN);
    }
    //console.log(newNodes);

    for (var i = 0; i < links.length; i++) {
        var curLink = links[i];
        var from = null;
        var to = null;
        var nodeFrom = null;
        //console.log('current link', curLink);
        for (var j = 0; j < newNodes.length; j++) {
            if (newNodes[j].outputs) {
                for (var k = 0; k < newNodes[j].outputs.length; k++) {
                    if (newNodes[j].outputs[k].id === curLink.from) {
                        from = newNodes[j].outputs[k];
                        nodeFrom = newNodes[j];
                        break;
                    }
                }
            }
            if (newNodes[j].inputs) {
                for (var k = 0; k < newNodes[j].inputs.length; k++) {
                    if (newNodes[j].inputs[k].id === curLink.to) {

                        to = newNodes[j].inputs[k];
                        break;
                    }
                }
            }
        }

        nodeFrom.setOutputLink(from, to);

    }

    return newNodes;
}


class AbstractNode {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.height = 0;
        this.angleRadius = 15;
        this.circleRadius = 8.5;
        this.cellSize = 16;
        this.inputs = [];
        this.outputs = [];
        this.fontSize = 14;
        this.pins = [];
        this.showPinText = true;
        this.width = this.cellSize * this.minCellWidth;
        this.inputOffset = this.cellSize * 0.2;
    }
    draw(nodesDrawer) {
        this.nodesDrawer = nodesDrawer;
        this.drawer = nodesDrawer.drawer;
        this.hover = this.drawHover(this.drawer);
        this.hover.hide();
        //this.shadow = this.drawShadow(this.drawer);

        this.nested = this.setSVG(this.drawer);
        this.allNode = this.drawer.group();
        this.allNode.add(this.hover);
        //this.allNode.add(this.shadow);
        this.allNode.add(this.nested);
        if (this instanceof CommentNode) {
            this.selectable.style('cursor', "url('cursors/cursor_grab.png'),pointer");
        } else {
            this.allNode.style('cursor', "url('cursors/cursor_grab.png'),pointer");
        }


    }
    calculateWidth() {
        var tmpDraw = SVG('tmpSvgContainer').size(0, 0);
        this.width = this.cellSize * this.minCellWidth;
        this.height = this.cellHeight * this.cellSize;
        if (this.function && this.showHeader) {
//console.log(this.function);
            var headerTextCheck = tmpDraw.text(this.function.name);
            //console.log(this.function);
            headerTextCheck.font({
                family: 'Roboto, sans-serif'
                , size: this.fontSize
                , anchor: 'start'
                , color: "#ffffff"
            });
            var headerTextWidth = this.getTextElementWidth(headerTextCheck);
            var newWidth = this.nearestCellWidth(headerTextWidth + this.cellSize * 2.5) * this.cellSize;
            if (this.delegateOutput) {
                newWidth += this.cellSize;
            }
            if (newWidth > this.width) {

                this.width = newWidth;
            }

            if (this.function.isCustom) {
                var nodeText = tmpDraw.text(this.customText);
                nodeText.style('font-style', 'italic');
                nodeText.font({
                    family: 'Roboto, sans-serif'
                    , size: this.fontSize
                    , anchor: 'start'
                    , color: "#a1825d"
                });
                headerTextWidth = this.getTextElementWidth(nodeText);
                newWidth = this.nearestCellWidth(headerTextWidth + this.cellSize * 2.5) * this.cellSize;
                if (this.delegateOutput) {
                    newWidth += this.cellSize;
                }
                if (newWidth > this.width) {
                    this.width = newWidth;
                }
            }


        }

        var maxOutSize = this.cellSize*2.5;
        var maxInSize = 0;
        for (var i = 0; i < this.inputs.length; i++) {
            var tIn = this.inputs[i];
            if (!tIn.linked) {
                if (tIn.type === VAR_TYPES["vector"] || tIn.type === VAR_TYPES["rotator"]) {
                    var startPosX = this.cellSize * 2.5;
                    for (var z = 0; z < tIn.value.length; z++) {
                        var text = tmpDraw.text(tIn.value[z]);
                        text.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'end'
                        });
                        var textWidth = this.getTextElementWidth(text);
                        var rect = tmpDraw.rect(textWidth + this.cellSize, this.cellSize);
                        startPosX = startPosX + rect.width() + this.cellSize * 0.2;
                    }
                    maxInSize = startPosX;
                    this.height += this.cellSize;
                } else if (tIn.type === VAR_TYPES["float"] || tIn.type === VAR_TYPES["int"] || tIn.type === VAR_TYPES["byte"]) {
                    if (tIn.value) {
                        var text = tmpDraw.text(tIn.value);
                        var inputText = tmpDraw.text(tIn.name);
                        inputText.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'start'
                            , color: "#ffffff"
                        });
                        var inputTextLength = this.getTextElementWidth(inputText)
                        var startPosX = this.cellSize + this.inputOffset + inputTextLength;
                        text.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'start'
                            , color: "#fff"
                        });
                        text.fill({color: "#fff"});
                        var textWidth = this.getTextElementWidth(text);
                        var rect = tmpDraw.rect(textWidth + this.cellSize * 0.2, this.cellSize).radius(2);
                        maxInSize = startPosX + rect.width();
                    }

                } else if (tIn.type === VAR_TYPES["actor"] || tIn.type === VAR_TYPES["object"]) {
                    if (tIn.value) {
                        var text = tmpDraw.text(tIn.value);
                        var inputText = tmpDraw.text(tIn.name);
                        inputText.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'start'
                            , color: "#ffffff"
                        });
                        var inputTextLength = this.getTextElementWidth(inputText);
                        var startPosX = this.cellSize + inputTextLength + this.inputOffset;
                        text.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'start'
                            , color: "#fff"
                        });
                        text.fill({color: "#fff"});
                        var textWidth = this.getTextElementWidth(text);
                        var rect = tmpDraw.rect(textWidth + this.cellSize * 0.2, this.cellSize).radius(2);
                        maxInSize = startPosX + rect.width();
                    }
                }


            }
        }

        if (this.showPinText) {
            for (var i = 0; i < this.inputs.length; i++) {
                var tIn = this.inputs[i];
                if (HIDDEN_PIN_NAMES.indexOf(tIn.name) === -1 && tIn.type !== VAR_TYPES["exec"]) {
                    var tInputText = tmpDraw.text(tIn.name);
                    tInputText.font({
                        family: 'Roboto, sans-serif'
                        , size: this.fontSize
                        , anchor: 'start'
                        , color: "#ffffff"
                    });
                    var size = this.getTextElementWidth(tInputText);
                    if (size > maxInSize)
                        maxInSize = size;
                }
            }


            for (var i = 0; i < this.outputs.length; i++) {
                var tOut = this.outputs[i];
                if (HIDDEN_PIN_NAMES.indexOf(tOut.name) === -1 && tOut.type !== VAR_TYPES["exec"]) {
                    var tOutText = tmpDraw.text(tOut.name);
                    tOutText.font({
                        family: 'Roboto, sans-serif'
                        , size: this.fontSize
                        , anchor: 'start'
                        , color: "#ffffff"
                    });
                    var size = this.getTextElementWidth(tOutText)
                    if (size > maxOutSize)
                        maxOutSize = size;
                }
            }

            var lineWidth = this.cellSize * 1.5 + this.circleRadius * 2 + maxInSize + maxOutSize + this.circleRadius * 2;
            //console.log("Line width",lineWidth);
            newWidth = this.nearestCellWidth(lineWidth) * this.cellSize;
            if (newWidth > this.width) {
                this.width = newWidth;
            }
        } else {
            if (maxInSize > this.width) {
                this.width = maxInSize;
            }
        }
//console.log("Drawer width",this.width,this.width/this.cellSize);
        tmpDraw.remove();
    }
    nearestCellWidth(width) {
        return Math.ceil(width / this.cellSize);
    }
    setOutputLink(from, to) {
//	console.log(from,to);
        if (from && to) {
            from.linked = true;
            if (!from.links)
                from.links = [];
            from.links.push(to);
            to.linked = true;
        }
    }
    setDelegateOut(dest) {
        if (this.delegateOutput) {
            this.delegateOutput.linked = true;
            this.delegateOutput.link = dest;
            dest.linked = true;
        }
    }
    getTextElementWidth(element) {
        if (element) {
            return document.getElementById(element.node.id).getBBox().width || 0;
        } else {
            return 0;
        }

    }
    getTextElementHeight(element) {
        if (element) {
            return document.getElementById(element.node.id).getBBox().height || 0;
        } else {
            return 0;
        }

    }
    drawShadow(drawer) {
        var group = drawer.group();
        var shadow = group.rect(this.width, this.height).radius(this.angleRadius);
        shadow.fill({color: '#f06', opacity: 0.0});
        shadow.stroke({color: '#000', opacity: 0.5, width: 4});
        shadow.filter(function (add) {
            add.gaussianBlur(2);
        });
        shadow.back();
        return group;
    }
    constructArray(draw, input, x, y) {
        input.parent = this;
        input.center = {x: x + this.circleRadius / 2, y: y + this.circleRadius / 2};
        var step = this.circleRadius / 3;
        var side = this.circleRadius / 4;
        var arrayPattern = draw.pattern(this.circleRadius, this.circleRadius, function (add) {
            for (var i = 0; i < 3; i++) {
                for (var j = 0; j < 3; j++) {
                    if (i === 1 && j === 1 && !input.linked)
                        continue
                    add.rect(side, side).fill(VAR_COLORS[input.type.name]).translate(i * step + 0.1, j * step + 0.1);
                }
            }
        });
        var aIn = draw.rect(this.circleRadius, this.circleRadius).fill(arrayPattern);
        //aIn.fill({color: "#fff"})
        //if (input.linked)
        //	aIn.fill({color: VAR_COLORS[input.type.name]});
        aIn.translate(x, y);
    }
    constructCircle(draw, input, x, y) {
        input.parent = this;
        input.center = {x: x + this.circleRadius / 2, y: y + this.circleRadius / 2};
        if (input.type !== VAR_TYPES.delegate) {
            var pinCircle = draw.use(this.nodesDrawer.pinCircle);
            var color = VAR_COLORS[input.type.name];
            pinCircle.stroke({color: color, width: 2});
            if (input.linked)
                pinCircle.fill({color: color});
            pinCircle.translate(x, y);
            draw.use(this.nodesDrawer.pinArrow).translate(x, y).fill(color).stroke({width: 1, color: color});
        } else {
            var dIn = draw.rect(this.circleRadius, this.circleRadius).radius(1).stroke({color: VAR_COLORS[input.type.name], width: 2});
            if (input.linked)
                dIn.fill({color: VAR_COLORS[input.type.name]});
            dIn.translate(x, y);
        }

    }
    constructExecNode(draw, input, x, y) {
        var execNodeRadius = 3;
        var nodeSize = 0.8 * this.cellSize;
        input.parent = this;
        input.center = {x: x + nodeSize / 2, y: y - nodeSize / 2};
        var path = "M 0,{0} C 0,{0} 0,0 {1},0".format(execNodeRadius, execNodeRadius);
        path += "H {1}".format(execNodeRadius, nodeSize / 2);
        path += "L {0},{1}".format(nodeSize, nodeSize / 2);
        path += "L {0},{1}".format(nodeSize / 2, nodeSize);
        path += "h {0}".format(execNodeRadius - nodeSize / 2);
        path += "C {0},{1} 0,{1} 0,{2}".format(execNodeRadius, nodeSize, nodeSize - execNodeRadius);
        path += "v {0}".format(-nodeSize + 2 * execNodeRadius);
        var arrow = draw.path(path);
        var arrowPos = {x: x, y: y - 0.8 * this.cellSize};
        arrow.stroke({color: "#fff", width: 2});
        arrow.fill({color: '#000000', opacity: 0.0});
        arrow.translate(arrowPos.x, arrowPos.y);
        if (input.linked) {
            arrow.fill({color: VAR_COLORS.exec, opacity: 1});
        }

    }
    drawHover(drawer) {
        var group = drawer.group();
        var hoverRect = group.rect(this.width, this.height).radius(this.angleRadius);
        hoverRect.fill({color: '#000000', opacity: 0});
        hoverRect.stroke({color: '#f1b000', opacity: 1, width: 8});
        hoverRect.translate(0, 0);
        hoverRect.back();
        return group;
    }
    drawPins(draw, newCellOffset, newDrawText) {
        var drawText = true;
        if (newDrawText === false)
            drawText = false;
        var cellOffset = newCellOffset || 2.5;
        if (newCellOffset === 0) {
            cellOffset = 0;
        }
        for (var i = 0; i < this.inputs.length; i++) {
            var tIn = this.inputs[i];
            var circleCenterX = this.cellSize;
            var circleCenterY = cellOffset * this.cellSize;
            var textCenterY = circleCenterY;
            var vectorCenterY = circleCenterY;
            var inputTextLength = 0;
            var pinObj = {};
            if (!tIn.linked) {
                if (tIn.type === VAR_TYPES["vector"] || tIn.type === VAR_TYPES["rotator"]) {
                    circleCenterY = (cellOffset + 0.5) * this.cellSize;
                    vectorCenterY = (cellOffset + 1) * this.cellSize;
                } else if (tIn.type === VAR_TYPES["float"]) {
//console.log(tIn);
                }
            }
            var pinDraw = draw.group();
            var pinFullLength = 0;
            var pinFullHeight = this.cellSize * 1.1;
            if (tIn.type === VAR_TYPES.exec) {
                this.constructExecNode(pinDraw, tIn, circleCenterX - this.circleRadius / 2, circleCenterY + 0.8 * this.cellSize / 2);
            } else {
                if (!tIn.isArray)
                    this.constructCircle(pinDraw, tIn, circleCenterX - this.circleRadius / 2, circleCenterY - this.circleRadius / 2);
                else
                    this.constructArray(pinDraw, tIn, circleCenterX - this.circleRadius / 2, circleCenterY - this.circleRadius / 2);
            }
            pinFullLength += this.circleRadius + circleCenterX;
            if (tIn.name !== "execute" && drawText) {
                var inputText = pinDraw.text(tIn.name);
                inputText.font({
                    family: 'Roboto, sans-serif'
                    , size: this.fontSize
                    , anchor: 'start'
                    , color: "#ffffff"
                });
                inputText.translate(circleCenterX + this.circleRadius * 1.5, circleCenterY - this.fontSize);
                inputText.fill({color: "#fff"});
                inputTextLength = this.getTextElementWidth(inputText);
                pinFullLength += inputTextLength;
            }


            if (!tIn.linked) {
                if (tIn.type === VAR_TYPES["vector"] || tIn.type === VAR_TYPES["rotator"]) {
                    if (inputText)
                        inputText.translate(circleCenterX + this.circleRadius * 1.5, textCenterY - this.fontSize);
                    var startPosX = circleCenterX + this.cellSize * 1.5;
                    pinFullLength += circleCenterX;
                    for (var z = 0; z < tIn.value.length; z++) {
                        var text = pinDraw.text(tIn.value[z]);
                        var labelText;
                        switch (z) {
                            case 0:
                                labelText = "X"
                                break
                            case 1:
                                labelText = "Y"
                                break
                            case 2:
                                labelText = "Z"
                                break
                        }
                        text.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'end', color: "#fff"
                        });
                        text.fill({color: "#fff"});
                        var textWidth = this.getTextElementWidth(text);
                        var rect = pinDraw.rect(textWidth + this.cellSize, this.cellSize).radius(2);
                        rect.fill({color: "#000", opacity: 0});
                        rect.stroke({color: "#fff", width: 1});
                        rect.x(startPosX);
                        rect.cy(vectorCenterY);
                        text.translate(startPosX + textWidth + this.cellSize * 0.9, vectorCenterY - this.fontSize);
                        var label = pinDraw.text(labelText);
                        label.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'start', color: "#fff"
                        });
                        label.fill({color: "#6f716f"});
                        label.translate(startPosX + this.cellSize * 0.1, vectorCenterY - this.fontSize);
                        startPosX = startPosX + rect.width() + this.cellSize * 0.2;
                        pinFullLength += rect.width() + this.cellSize * 0.2;
                    }
                    pinFullLength -= inputTextLength;
                    cellOffset += 1;
                    pinFullHeight += this.cellSize;
                } else if (tIn.type === VAR_TYPES["float"] || tIn.type === VAR_TYPES["int"] || tIn.type === VAR_TYPES["byte"]) {
                    if (tIn.value) {
                        var text = pinDraw.text(tIn.value);
                        var startPosX = circleCenterX + this.cellSize + this.inputOffset + inputTextLength;
                        text.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize, anchor: 'start'
                            , color: "#fff"
                        });
                        text.fill({color: "#fff"});
                        var textWidth = this.getTextElementWidth(text);
                        var rect = pinDraw.rect(textWidth + this.cellSize * 0.2, this.cellSize).radius(2);
                        rect.fill({color: "#000", opacity: 0});
                        rect.stroke({color: "#fff", width: 1});
                        rect.x(startPosX);
                        rect.cy(vectorCenterY);
                        text.translate(startPosX + this.cellSize * 0.1, vectorCenterY - this.fontSize);
                        pinFullLength += rect.width();
                    }
                } else if (tIn.type === VAR_TYPES["bool"]) {
                    var startPosX = circleCenterX + this.cellSize + this.inputOffset + inputTextLength;
                    var rect = pinDraw.rect(this.cellSize * 0.8, this.cellSize * 0.8).radius(3);
                    rect.fill({color: "#292b29"});
                    rect.stroke({color: "#fff", width: 2});
                    rect.x(startPosX);
                    rect.cy(vectorCenterY);
                    if (tIn.value === true) {
                        var path = pinDraw.path(checkSymbol);
                        path.center(startPosX + rect.width() / 2, vectorCenterY);
                        path.stroke({color: "#fff", width: 5});
                        path.fill({color: "#fff", opacity: 0})
                        path.scale(0.3, 0.3);
                    }
                    pinFullLength += rect.width();
                } else if (tIn.type === VAR_TYPES["actor"] || tIn.type === VAR_TYPES["object"]) {
                    if (tIn.value) {
                        var text = pinDraw.text(tIn.value);
                        var startPosX = circleCenterX + this.cellSize + this.inputOffset + inputTextLength;
                        text.font({
                            family: 'Roboto, sans-serif'
                            , size: this.fontSize
                            , anchor: 'start', color: "#fff"
                        });
                        text.fill({color: "#fff"});
                        var textWidth = this.getTextElementWidth(text);
                        var rect = pinDraw.rect(textWidth + this.cellSize * 0.2, this.cellSize).radius(2);
                        rect.fill({color: "#000", opacity: 0});
                        rect.stroke({color: "#fff", width: 1});
                        rect.x(startPosX);
                        rect.cy(vectorCenterY);
                        text.translate(startPosX + this.cellSize * 0.1, vectorCenterY - this.fontSize);
                        pinFullLength += rect.width();
                    }

                }
            }

            pinObj.draw = pinDraw;
            var hoverRect = pinDraw.rect(pinFullLength, pinFullHeight);
            var hoverGradient = draw.gradient('linear', function (stop) {
                stop.at({offset: 0, color: VAR_COLORS[tIn.type.name], opacity: 0});
                stop.at({offset: 0.1, color: VAR_COLORS[tIn.type.name], opacity: 0.8});
                stop.at({offset: 0.9, color: VAR_COLORS[tIn.type.name], opacity: 0.8});
                stop.at({offset: 1, color: VAR_COLORS[tIn.type.name], opacity: 0});
            });
            hoverRect.fill(hoverGradient)
            hoverRect.x(circleCenterX - this.circleRadius);
            hoverRect.cy(circleCenterY);
            hoverRect.back();
            if (tIn.tooltip) {
//console.log(tIn.tooltip);
                pinDraw.element('title').words(tIn.tooltip.replace("\\n\\n", "\n\n").replace("\\n", "\n"));
            }
            pinObj.hover = hoverRect;
            hoverRect.hide();
            this.pins.push(pinObj);
            cellOffset += 1.5;
        }
        cellOffset = newCellOffset || 2.5;
        for (var i = 0; i < this.outputs.length; i++) {
            var tOut = this.outputs[i];
            if (tOut.name === "Output Delegate")
                continue
            var circleCenterX = this.width - this.cellSize;
            var circleCenterY = cellOffset * this.cellSize;
            var pinDraw = draw.group();
            var pinFullHeight = this.cellSize * 1.1;
            var pinFullLength = 0;
            if (tOut.type === VAR_TYPES.exec) {
                this.constructExecNode(pinDraw, tOut, circleCenterX - this.circleRadius / 2, circleCenterY + 0.8 * this.cellSize / 2);
            } else {
                if (!tOut.isArray)
                    this.constructCircle(pinDraw, tOut, circleCenterX - this.circleRadius / 2, circleCenterY - this.circleRadius / 2);
                else
                    this.constructArray(pinDraw, tOut, circleCenterX - this.circleRadius / 2, circleCenterY - this.circleRadius / 2);
            }
            pinFullLength += this.circleRadius + this.cellSize;
            if (tOut.name !== "then" && tOut.name !== "Output_Get" && drawText) {
                var inputText = pinDraw.text(tOut.name);
                inputText.font({
                    family: 'Roboto, sans-serif'
                    , size: this.fontSize
                    , anchor: 'end'
                    , color: "#ffffff"
                });
                inputText.translate(circleCenterX - this.circleRadius, circleCenterY - this.fontSize);
                inputText.fill({color: "#fff"});
                pinFullLength += this.getTextElementWidth(inputText);
            }
            var pinObj = {};
            pinObj.draw = pinDraw;
            var hoverRect = pinDraw.rect(pinFullLength, pinFullHeight);
            var hoverGradient = draw.gradient('linear', function (stop) {
                stop.at({offset: 0, color: VAR_COLORS[tOut.type.name], opacity: 0});
                stop.at({offset: 0.1, color: VAR_COLORS[tOut.type.name], opacity: 0.8});
                stop.at({offset: 0.9, color: VAR_COLORS[tOut.type.name], opacity: 0.8});
                stop.at({offset: 1, color: VAR_COLORS[tOut.type.name], opacity: 0});
            });
            hoverRect.fill(hoverGradient)
            hoverRect.x(this.width - pinFullLength - this.circleRadius / 2);
            hoverRect.cy(circleCenterY);
            hoverRect.back();
            pinObj.hover = hoverRect;
            if (tOut.tooltip) {
                pinDraw.element('title').words(tOut.tooltip.replace("\\n\\n", "\n\n").replace("\\n", "\n"));
            }

            hoverRect.hide();
            this.pins.push(pinObj);
            cellOffset += 1.5;
        }
    }
}
class CommentNode extends AbstractNode {
    constructor(funcObj, x, y, drawer) {
        super(x, y, drawer);
        this.funcObj = funcObj;
        this.header = funcObj.name;
        this.angleRadius = 0;
        this.headerCellHeight = 2.5;
        this.selectable = null;
    }
    calculateWidth() {
        this.width = parseInt(this.funcObj.width);
        this.height = parseInt(this.funcObj.height);
    }
    setSVG(drawer) {
        var draw = drawer.group();
        draw.style('mix-blend-mode', 'screen');
        var headerColor = null;
        var opacity = 1;
        if (this.funcObj.commentColor) {
            var cColor = this.funcObj.commentColor;
            headerColor = rgbToHex(parseFloat(cColor.R) * 255, parseFloat(cColor.G) * 255, parseFloat(cColor.B) * 255);
            opacity = parseFloat(cColor.A);
        } else {
            headerColor = '#acacac';
            opacity = 1;
        }

        var header = draw.rect(this.width - this.cellSize / 2, this.height - this.cellSize / 2).radius(this.angleRadius).fill({color: headerColor, opacity: opacity});
        header.translate(this.cellSize / 4, this.cellSize / 4)
        var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.cellSize);

        header.clipWith(rect);



        var headerText = draw.text(this.header);

        headerText.font({
            family: 'Roboto'
            , size: 1.3 * this.cellSize
            , anchor: 'start'
            , color: "#ffffff"
        });
        headerText.style('font-weight', 'bold');
        headerText.style('pointer-events', 'none');
        headerText.style('text-shadow', '2px 2px 0px rgba(0, 0, 0, 1)');
        headerText.translate(this.cellSize, this.cellSize / 4);
        headerText.fill({color: "#fff"});





        var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        mainRect.fill({color: headerColor, opacity: 0.2});
        mainRect.stroke({color: '#000000', opacity: 1, width: 1});


        var selectableRect = draw.rect(this.width, this.headerCellHeight * this.cellSize).fill({color: "#fff", opacity: 0});
        ;
        this.selectable = selectableRect;
        this.selectableHeight = this.headerCellHeight * this.cellSize;


        return draw;

    }
}
class FunctionNode extends AbstractNode {
    constructor(funcObj, x, y, drawer) {
        super(x, y, drawer);
        
        this.minCellWidth = 8.5
        this.minCellHeight = 4;
        
        this.function = funcObj;

        this.inputs = funcObj.inputs;
        this.outputs = funcObj.outputs;

        //console.log("FUNCTION", funcObj);

        this.angleRadius = 8;
        this.showHeader = true;
        this.showPinText = true;
        this.headerCellHeight = 1.5;
        this.cellOffset = 0.5;
        if (this.function.name.indexOf("_") !== -1 && this.function.name.indexOf("Get") === -1 && this.function.name.indexOf("Conv") === -1 && this.function.name.indexOf("Set") === -1 && this.function.name.indexOf("Add") === -1 && this.function.name.indexOf("K2") === -1 && this.function.name.indexOf("Montage") === -1 && this.function.name.indexOf("Greater_Vector") === -1 && this.function.name.indexOf("Less_Vector") === -1) {
            this.angleRadius = 0;
            this.headerCellHeight = 0;
            this.minCellWidth = 5;
            this.minCellHeight = 4;
            this.showHeader = false;
            this.showPinText = false;
        }

        if (this.function.icon) {
            this.icon = this.function.icon;
        }

        if (this.function.name.indexOf("Make") !== -1 && this.function.name.indexOf("Array") === -1) {
            this.icon = ICONS["make_struct"];
        } else if (this.function.name.indexOf("Break") !== -1) {
            this.icon = ICONS["break_struct"];
        } else if (this.function.name.indexOf("Make Array") !== -1) {
            this.icon = ICONS["make_array"];
        }

        if (this.function.name.indexOf(" for ") !== -1) {
            this.function.name = this.function.name.substring(0, this.function.name.indexOf(" for "));
        }


        if (FUNCTION_NAMES_MAPPING[this.function.name]) {
            this.function.name = FUNCTION_NAMES_MAPPING[this.function.name];
        }


        if (NAME_MAPPING[this.function.name]) {
            this.function.name = NAME_MAPPING[this.function.name];
        }


        this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
    }
    setSVG(drawer) {
        var headerColor = null;




        if (!this.function.isPure) {
            headerColor = VAR_COLORS["execFunction"];
        } else {
            headerColor = VAR_COLORS["pureFunction"];
        }

        if (this.function.isParent) {
            headerColor = VAR_COLORS["parent"];
        }

        if (this.function.color) {
            headerColor = this.function.color;
        }

        var draw = drawer.group();



        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });

        var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
        var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        mainRect.fill({color: "#000", opacity: 0.5});
        mainRect.stroke({color: '#000000', opacity: 1, width: 1});

        if (this.showHeader) {
            var headerGradient = draw.gradient('linear', function (stop) {
                stop.at({offset: 0, color: headerColor, opacity: 1});
                stop.at({offset: 1, color: headerColor, opacity: 0});
            });
            headerGradient.from(0, 0).to(1, 0);
            var header = draw.rect(this.width, this.height).radius(this.angleRadius).fill(headerGradient);
            var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.cellSize)

            header.clipWith(rect)

            var headerText = draw.text(this.function.name);

            headerText.font({
                family: 'Roboto, sans-serif'
                , size: this.fontSize
                , anchor: 'start'
                , color: "#ffffff"
            });
            headerText.style('font-weight', 'bold');
            headerText.translate(this.cellSize * 2, 0);
            headerText.fill({color: "#fff"});

            if (this.function.name.indexOf("Delay") !== -1 || this.function.async) {
                var latentIcon = draw.image(getIcon(ICONS["latent"]), 32, 32).fill({color: "#fff"});
                this.icon = ICONS["node"];
                latentIcon.center(this.width, 0);
            }


            if (!this.icon) {
                var path = draw.use(this.nodesDrawer.fLetter);
                path.translate(this.cellSize, 1.1 * this.cellSize);
                if (!this.function.isPure) {
                    path.fill({color: VAR_COLORS.execFunctionF});
                } else {
                    path.fill({color: VAR_COLORS.pureFunctionF});
                }

                path.scale(1.65, 1.65);
            } else {
                var icon = draw.image(getIcon(this.icon), 16, 16).fill({color: "#fff"});
                icon.center(this.cellSize, this.headerCellHeight * this.cellSize / 2);
            }



            this.drawPins(draw);

        } else {
            var text = this.function.name;
            if (text.indexOf("Subtract") !== -1) {
                text = "-"
            } else if (text.indexOf("Add") !== -1) {
                text = "+"
            } else if (text.indexOf("Multiply") !== -1) {
                text = "x"
            } else if (text.indexOf("Percent") !== -1) {
                text = "%"
            } else if (text.indexOf("Divide") !== -1) {
                text = "/"
            } else if (text.indexOf("Dot") !== -1) {
                text = "."
            } else if (text.indexOf("Greater") !== -1) {
                if (text.indexOf("Equal") === -1)
                    text = ">"
                else
                    text = ">="
            } else if (text.indexOf("Less") !== -1) {
                console.log(text);
                if (text.indexOf("Equal") === -1)
                    text = "<"
                else
                    text = "<="
            } else if (text.indexOf("Equal") !== -1 && text.indexOf("Not") !== -1) {
                text = "!="
            } else if (text.indexOf("Equal") !== -1) {
                text = "="
            } else if (text.indexOf("Not") !== -1) {
                text = "NOT"
            }

            var textSize = 35;
            var nodeText = draw.text(text.toUpperCase());
            nodeText.translate(this.width / 2, this.height / 2 - textSize);
            nodeText.fill({color: "#fff", opacity: 0.3});
            nodeText.style('font-weight', 'bold');
            nodeText.font({
                family: 'Roboto, sans-serif'
                , size: textSize
                , anchor: 'middle'
                , color: "#ffffff"
            });
            this.drawPins(draw, 1, false);
        }





        return draw;

    }
}
class GetterNode extends AbstractNode {
    constructor(getterNode, x, y, drawer) {
        super(x, y, drawer);
        this.outputs = getterNode.outputs;
        this.minCellWidth = 8;
        this.cellHeight = 2;
        this.width = this.cellSize * this.minCellWidth;
    }
    setSVG(drawer) {
        var mainColor = VAR_COLORS[this.outputs[0].type.name];

        var draw = drawer.group();
        var radGradient = draw.gradient('radial', function (stop) {
            stop.at({offset: 0, color: mainColor, opacity: 0.74226803});
            stop.at({offset: 1, color: mainColor, opacity: 0.01});
        });

        radGradient.attr('gradientTransform', 'matrix(1,0,0,1,0,-0.5)');

        var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        opacityRect.fill(this.nodesDrawer.opacityLinearGradient);

        var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        mainRect.fill(radGradient);
        mainRect.stroke({color: '#000000', opacity: 1, width: 1});

        this.drawPins(draw, 1);

        return draw;
    }
}
class SetterNode extends AbstractNode {
	constructor(setterNode, x, y, drawer) {
		super(x, y, drawer);
		this.inputs = setterNode.inputs;
		this.outputs = setterNode.outputs;
		this.minCellWidth = 9;
		this.cellHeight = 5;
		this.showPinText = true;
		this.cellOffset = 0.5;

		this.width = this.cellSize * this.minCellWidth;
		this.headerCellHeight= 1.5;
		this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(setterNode.outputs.length, setterNode.inputs.length) + Math.max(setterNode.outputs.length, setterNode.inputs.length) * this.cellOffset;
	}
	setSVG(drawer) {
		var draw = drawer.group();

		var mainColor = null;
		this.inputs.forEach(function (item) {
			if (item.type !== VAR_TYPES.exec) {
				mainColor = VAR_COLORS[item.type.name];
				return;
			}
		});


		var radGradient = draw.gradient('radial', function (stop) {
			stop.at({offset: 0, color: mainColor, opacity: 0.74226803});
			stop.at({offset: 1, color: mainColor, opacity: 0});
		});
		radGradient.attr('gradientTransform', 'matrix(1,0,0,0.7,0,-0.3)');
		//radGradient.attr('gradientUnits', 'userSpaceOnUse');


		var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
		var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		mainRect.fill(radGradient);
		mainRect.stroke({color: '#000000', opacity: 1, width: 1});
		this.drawPins(draw);

		var setText = draw.text("SET");
		setText.translate(this.width / 2, 5);
		setText.fill({color: "#fff"});
		setText.style('font-weight', 'bold')
		setText.font({
			family: 'Roboto'
			, size: this.fontSize
			, anchor: 'middle'
			, color: "#ffffff"
		});

		return draw;
	}
}
class EventNode extends AbstractNode {
    constructor(funcObj, x, y, drawer) {
        super(x, y, drawer);
        this.function = funcObj;
        this.outputs = funcObj.outputs;
        this.delegateOutput = {};
        //console.log("EVENT", funcObj);

        this.minCellWidth = 6;
        this.minCellHeight = 4;
        this.showHeader = true;
        this.angleRadius = 10;
        this.icon = ICONS["event"];
        this.headerCellHeight = 1.5;
        if (this.function.isCustom === true) {
            this.headerCellHeight = 2.5;
            this.customText = "Custom Event";
            this.icon = ICONS["event_custom"];
        }
        this.cellOffset = 0.5;
        this.width = this.cellSize * this.minCellWidth;
        this.hasDelegateOut = false;
        for (var i = 0; i < this.outputs.length; i++) {
            if (this.outputs[i].name.indexOf("Output Delegate") !== -1) {
                this.hasDelegateOut = true;
                break;
            }
        }

        if (this.function.inputKey) {
            if (this.function.inputKey.indexOf("Mouse") !== -1)
                this.icon = ICONS["mouse"];
            else
                this.icon = ICONS["keyboard"];
            this.function.name = this.function.inputKey;
        }

        if (this.hasDelegateOut)
            this.cellHeight = this.headerCellHeight + this.cellOffset + (funcObj.outputs.length - 1) + (funcObj.outputs.length - 1) * this.cellOffset + this.cellOffset;
        else
            this.cellHeight = this.headerCellHeight + this.cellOffset + (funcObj.outputs.length) + (funcObj.outputs.length) * this.cellOffset + this.cellOffset;
    }
    setSVG(drawer) {
        var headerColor = VAR_COLORS["event"];
        var draw = drawer.group();
        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });
        var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
        var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        mainRect.fill({color: "#000", opacity: 0.5});
        mainRect.stroke({color: '#000000', opacity: 1, width: 1});
        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 1});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });
        headerGradient.from(0, 0).to(1, 0);
        var header = draw.rect(this.width, this.height).radius(this.angleRadius).fill(headerGradient);
        var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.cellSize)

        header.clipWith(rect)
        var headerText = draw.text(this.function.name);
        headerText.font({
            family: 'Roboto'
            , size: this.fontSize
            , anchor: 'start'
            , color: "#ffffff"
        });
        headerText.style('font-weight', 'bold');
        headerText.translate(this.cellSize * 2, 0);
        headerText.fill({color: "#fff"});
        if (this.function.isCustom) {
            var nodeText = draw.text(this.customText);
            nodeText.translate(this.cellSize * 2, this.fontSize);
            nodeText.fill({color: "#a1825d"});
            nodeText.style('font-style', 'italic');
            nodeText.font({
                family: 'Roboto'
                , size: this.fontSize
                , anchor: 'start'
                , color: "#a1825d"
            });
        }

        var icon = draw.image(getIcon(this.icon), 16, 16).fill({color: "#fff"});
        icon.center(this.cellSize, this.headerCellHeight * this.cellSize / 2);
        if (this.hasDelegateOut) {
            var dOut = draw.rect(this.circleRadius, this.circleRadius).radius(1).stroke({color: VAR_COLORS.delegate, width: 2});
            dOut.translate(this.width - this.cellSize, this.headerCellHeight * this.cellSize / 2 - this.circleRadius / 2);
            if (this.delegateOutput.linked)
                dOut.fill({color: VAR_COLORS.delegateOut});
            this.delegateOutput.color = VAR_COLORS.delegateOut;
            for (var i = 0; i < this.outputs.length; i++) {
                if (this.outputs[i].name.indexOf("Output Delegate") !== -1) {
                    this.outputs[i].center = {x: this.x + this.width - this.cellSize + this.cellSize / 4, y: this.y + this.cellSize / 2 + this.cellSize / 4};
                    break;
                }
            }
            this.delegateOutput.center = {x: this.x + this.width - this.cellSize + this.cellSize / 4, y: this.y + this.cellSize / 2 + this.cellSize / 4};
        }
        if (!this.function.isCustom)
            this.drawPins(draw);
        else
            this.drawPins(draw, 3.5);
        return draw;
    }
}
class ConverterNode extends AbstractNode {
    constructor(funcObj, x, y, drawer) {
        super(x, y, drawer);
        this.function = funcObj;
        //console.log("CONVERTER",funcObj);

        this.inputs = funcObj.inputs;
        this.outputs = funcObj.outputs;
        this.minCellWidth = 6;
        this.minCellHeight = 4;
        this.angleRadius = 0;
        this.cellOffset = 0.5;
        this.width = this.cellSize * this.minCellWidth;
        this.cellHeight = this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
    }
    calculateWidth() {
        this.height = this.minCellHeight * this.cellSize;
        this.width = this.cellSize * this.minCellWidth;
    }
    setSVG(drawer) {
        var draw = drawer.group();
        var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
        var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        mainRect.fill({color: "#000", opacity: 0.5});
        mainRect.stroke({color: '#000000', opacity: 1, width: 1});
        this.drawPins(draw, 2, false);
        var ellipseWidth = this.circleRadius * 1.5;
        var ellipseHeight = this.circleRadius * 2;
        var ellipse = draw.rect(ellipseWidth, ellipseHeight).radius(6);
        ellipse.translate(this.width / 2 - ellipseWidth / 2, this.height / 2 - ellipseHeight / 2);
        ellipse.fill({color: "#fff", opacity: 0.3});
        return draw;
    }
}
class BinaryOperatorNode extends AbstractNode {
    constructor(funcObj, x, y, drawer) {
        super(x, y, drawer);
        
        this.minCellWidth = 6;
        this.minCellHeight = 4;
        
        this.function = funcObj;

        this.inputs = funcObj.inputs;
        this.outputs = funcObj.outputs;
        //console.log("BINARY OPERATOR",funcObj);



        this.angleRadius = 0;

        this.cellOffset = 0.5;

        this.cellHeight = this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
    }
    /*calculateWidth: function () {
     this.height = this.cellHeight * this.cellSize;
     this.width = this.cellSize * this.minCellWidth;
     },*/
    setSVG(drawer) {
        var draw = drawer.group();


        var linGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: '#a0a0a0', opacity: 1});
            stop.at({offset: 0.03, color: '#5f5f5f', opacity: 0.3});
            stop.at({offset: 0.8, color: '#636363', opacity: 0.3});
            stop.at({offset: 1, color: '#ffffff', opacity: 1});
        });
        linGradient.from(0, 1).to(0, 0);
        var text = this.function.name;
        if (text.indexOf("Boolean") !== -1) {
            text = text.replace("Boolean", "").toUpperCase();
        } else if (text.indexOf("Int") !== -1 || text.indexOf("Float") !== -1 || text.indexOf("Enum") !== -1) {
            if (text.indexOf("And") !== -1) {
                text = "&";
            } else if (text.indexOf("Or") !== -1) {
                text = "|";
            } else if (text.indexOf("Multiply") !== -1) {
                text = "x";
            } else if (text.indexOf("Equality") !== -1) {
                text = "==";
            }
        }

        if (text.indexOf("Add") !== -1) {
            text = "+";
        }



        var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        opacityRect.fill(linGradient);
        var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        mainRect.fill({color: "#000", opacity: 0.5});
        mainRect.stroke({color: '#000000', opacity: 1, width: 1});

        var textSize = 35;
        var nodeText = draw.text(text.toUpperCase());
        nodeText.translate(this.width / 2, this.height / 2 - textSize);
        nodeText.fill({color: "#fff", opacity: 0.3});
        nodeText.style('font-weight', 'bold');
        nodeText.font({
            family: 'Roboto, sans-serif'
            , size: textSize
            , anchor: 'middle'
            , color: "#ffffff"
        });

        this.drawPins(draw, 1, false);

        return draw;
    }
}
class MacroNode extends AbstractNode {
    constructor(funcObj, x, y, drawer) {
        super(x, y, drawer);
        this.function = funcObj;
        this.inputs = funcObj.inputs;
        this.outputs = funcObj.outputs;

        this.minCellWidth = 10.5;
        this.minCellHeight = 2;

        this.angleRadius = 10;
        this.headerCellHeight = 1.5;
        this.cellOffset = 0.5;
        this.showHeader = true;
        this.showPinText = true;
        //console.log("MACRO",funcObj);


        if (this.function.name === "Branch") {
            this.icon = ICONS["branch"];
        } else if (this.function.name.indexOf("For Each") !== -1) {
            this.icon = ICONS["for_each"];
        } else if (this.function.name.indexOf("Flip") !== -1) {
            this.icon = ICONS["flip_flop"];
        } else if (this.function.name.indexOf("Valid") !== -1) {
            this.icon = ICONS["valid"];
        } else if (this.function.name.indexOf("Sequence") !== -1) {
            this.icon = ICONS["sequence"];
        } else if (this.function.name.indexOf("For Loop") !== -1) {
            this.icon = ICONS["for_loop"];
        } else {
            this.icon = ICONS["macro"];
        }

        this.width = this.cellSize * this.minCellWidth;
        this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
    }
    setSVG(drawer) {
        var headerColor = VAR_COLORS["macro"];

        var draw = drawer.group();


        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });



        var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
        var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        mainRect.fill({color: "#000", opacity: 0.5});
        mainRect.stroke({color: '#000000', opacity: 1, width: 1});

        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 1});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });
        headerGradient.from(0, 0).to(1, 0);
        var header = draw.rect(this.width, this.height).radius(this.angleRadius).fill(headerGradient);
        var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.cellSize)

        header.clipWith(rect);
        var headerText = draw.text(this.function.name);

        headerText.font({
            family: 'Roboto, sans-serif'
            , size: this.fontSize
            , anchor: 'start'
            , color: "#ffffff"
        });
        headerText.style('font-weight', 'bold');
        headerText.translate(this.cellSize * 2, 0);
        headerText.fill({color: "#fff"});
        //console.log('macro');
        this.drawPins(draw);

        if (this.icon) {
            var icon = draw.image(getIcon(this.icon), 16, 16);
            icon.center(this.cellSize, this.headerCellHeight * this.cellSize / 2);
            /*icon.filter(function (add) {
             add.colorMatrix('matrix', [1.0, 0, 0, 0, 0
             , 0, 0.2, 0, 0, 0
             , 0, 0, 0.2, 0, 0
             , 0, 0, 0, 1.0, 0])
             })*/
        }

        return draw;

    }
}
class RerouteNode extends AbstractNode {
	constructor(funcObj, x, y, drawer) {
		super(x, y, drawer);
		this.function = funcObj;
		this.inputs = funcObj.inputs;
		this.outputs = funcObj.outputs;
		this.minCellWidth = 2.5;
		this.minCellHeight = 1.5;
		this.angleRadius = 8;
		this.cellOffset = 0.5;
		this.width = this.cellSize * this.minCellWidth;
		this.cellHeight = this.cellSize * this.minCellHeight;
	}
	calculateWidth() {
		this.height = this.minCellHeight * this.cellSize;
		this.width = this.cellSize * this.minCellWidth;
	}
	drawPins(draw) {
		var cellOffset = 0.5;
		var tIn = this.outputs[0];
		var circleCenterX = this.cellSize + this.circleRadius / 2;
		var circleCenterY = cellOffset * this.cellSize;
		var pinObj = {};
		var pinDraw = draw.group();
		var pinFullLength = 0;
		var pinFullHeight = this.cellSize * 1.1;
		this.constructCircle(pinDraw, tIn, circleCenterX - this.circleRadius / 2, circleCenterY - this.circleRadius / 2);
		pinFullLength += this.circleRadius * 2.2;
		pinObj.draw = pinDraw;
		var hoverRect = pinDraw.rect(pinFullLength, pinFullHeight);
		var hoverGradient = draw.gradient('linear', function (stop) {
			stop.at({offset: 0, color: VAR_COLORS[tIn.type.name], opacity: 0});
			stop.at({offset: 0.1, color: VAR_COLORS[tIn.type.name], opacity: 0.8});
			stop.at({offset: 0.9, color: VAR_COLORS[tIn.type.name], opacity: 0.8});
			stop.at({offset: 1, color: VAR_COLORS[tIn.type.name], opacity: 0});
		});
		hoverRect.fill(hoverGradient);
		hoverRect.x(circleCenterX - this.circleRadius);
		hoverRect.cy(circleCenterY);
		hoverRect.back();
		pinObj.hover = hoverRect;
		this.inputs[0].parent = this;
		this.inputs[0].center = {x: circleCenterX - this.circleRadius / 2 + this.circleRadius / 2, y: circleCenterY - this.circleRadius / 2 + this.circleRadius / 2};
		hoverRect.hide();
		this.pins.push(pinObj);
	}
	setSVG(drawer) {
		var draw = drawer.group();
		var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
		mainRect.fill({color: "#000", opacity: 0});
		//mainRect.stroke({color: '#000000', opacity: 1, width: 1});

		this.drawPins(draw);
		return draw;
	}
}
class ArrayFunctionNode extends AbstractNode {
    constructor(funcObj, x, y, drawer) {
        super(x, y, drawer);
        
        this.minCellWidth = 8.5
        this.minCellHeight = 2;
        
        this.function = funcObj;

        this.inputs = funcObj.inputs;
        this.outputs = funcObj.outputs;



        this.angleRadius = 12;
        this.showHeader = true;
        this.showPinText = true;
        this.headerCellHeight = 1.5;
        this.cellOffset = 0.5;

        if (this.function.isPure || ARRAY_FUNCTION_NAMES_MAPPING[this.function.name]) {
            this.headerCellHeight = 0;
            this.minCellWidth = 5;
            this.minCellHeight = 4;
            if (ARRAY_FUNCTION_NAMES_MAPPING[this.function.name] && !ARRAY_FUNCTION_NAMES_MAPPING[this.function.name].showHeader)
                this.showHeader = false;
            this.showPinText = false;
        }

        //console.log(this.function.name, this.showHeader);

        if (this.function.name.indexOf("Make") !== -1) {
            this.icon = ICONS["make_struct"];
        } else if (this.function.name.indexOf("Break") !== -1) {
            this.icon = ICONS["break_struct"];
        } else {

        }

        if (ARRAY_FUNCTION_NAMES_MAPPING[this.function.name]) {
            this.function.name = ARRAY_FUNCTION_NAMES_MAPPING[this.function.name].text;
        }


        this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
    }
    calculateWidth() {
        super.calculateWidth();
        if (this.showHeader) {
            return
        }
        var tmpDraw = SVG('tmpSvgContainer').size(0, 0);

        var text = this.function.name;
        var multiline = false;
        if (text.split(" ").length > 1)
            multiline = true;

        var textSize = 30;
        var nodeText;
        if (!multiline) {
            nodeText = tmpDraw.text(text.toUpperCase());
        } else {
            nodeText = tmpDraw.text(function (add) {
                var tmpArr = text.split(" ");
                for (var z = 0; z < tmpArr.length; z++) {
                    add.tspan(tmpArr[z].toUpperCase()).newLine();
                }
            });

        }

        nodeText.style('font-weight', 'bold');
        nodeText.font({
            family: 'Roboto'
            , size: textSize
            , anchor: 'middle'
            , color: "#ffffff"
        });

        var textWidth = this.getTextElementWidth(nodeText);
        var textHeight = this.getTextElementHeight(nodeText);
        this.width += textWidth + 2 * this.cellSize;
        this.width = this.nearestCellWidth(this.width) * this.cellSize;
        this.height = this.nearestCellWidth(this.height) * this.cellSize;

        if (textHeight > this.height) {
            this.height = this.nearestCellWidth(textHeight) * this.cellSize;
        }

        if ((this.inputs.length === 1) && (this.outputs.length === 1)) {
            this.height += this.cellSize;
        }

    }
    setSVG(drawer) {
        var headerColor = null;
        if (!this.function.isPure) {
            headerColor = VAR_COLORS["execFunction"];
        } else {
            headerColor = VAR_COLORS["pureFunction"];
        }

        var draw = drawer.group();

        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });

        var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
        var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        mainRect.fill({color: "#000", opacity: 0.5});
        mainRect.stroke({color: '#000000', opacity: 1, width: 1});

        if (this.showHeader) {
            var headerGradient = draw.gradient('linear', function (stop) {
                stop.at({offset: 0, color: headerColor, opacity: 1});
                stop.at({offset: 1, color: headerColor, opacity: 0});
            });
            headerGradient.from(0, 0).to(1, 0);
            var header = draw.rect(this.width, this.height).radius(this.angleRadius).fill(headerGradient);
            var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.cellSize)

            header.clipWith(rect)

            var headerText = draw.text(this.function.name);

            headerText.font({
                family: 'Roboto'
                , size: this.fontSize
                , anchor: 'start'
                , color: "#ffffff"
            });
            headerText.style('font-weight', 'bold');
            headerText.translate(this.cellSize * 2, 0);
            headerText.fill({color: "#fff"});
            if (!this.icon) {
                var path = draw.use(this.nodesDrawer.fLetter);
                path.translate(this.cellSize, 1.1 * this.cellSize);
                if (!this.function.isPure) {
                    path.fill({color: VAR_COLORS.execFunctionF});
                } else {
                    path.fill({color: VAR_COLORS.pureFunctionF});
                }

                path.scale(1.65, 1.65);
            } else {
                var icon = draw.image(getIcon(this.icon), 16, 16).fill({color: "#fff"});
                icon.center(this.cellSize, this.headerCellHeight * this.cellSize / 2);
            }
            this.drawPins(draw);

        } else {
            var text = this.function.name;
            var multiline = false;
            if (text.split(" ").length > 1)
                multiline = true;

            var arrayInput = null;
            this.inputs.forEach(function (item) {
                if (item.isArray)
                    arrayInput = item;
            });

            this.arrayRect = draw.rect(this.height - this.cellSize, this.height - this.cellSize).center(this.width / 2, this.height / 2);
            var side = (this.height - this.cellSize);
            var arrayPattern = draw.pattern(side, side, function (add) {
                add.rect(side, side).fill({color: VAR_COLORS[arrayInput.type.name], opacity: 0.35});
            });

            this.arrayRect.fill(arrayPattern);

            var textSize = 30;
            var nodeText;
            if (!multiline) {
                nodeText = draw.text(text.toUpperCase());
                nodeText.translate(this.width / 2, this.height / 2 - textSize);
                nodeText.font({
                    family: 'Roboto'
                    , size: textSize
                    , anchor: 'middle'
                    , color: "#ffffff"
                });
            } else {
                nodeText = draw.text(function (add) {
                    var tmpArr = text.split(" ");
                    for (var z = 0; z < tmpArr.length; z++) {
                        add.tspan(tmpArr[z].toUpperCase()).newLine();
                    }
                });
                var textHeight = this.getTextElementHeight(nodeText);
                //var textWidth = this.getTextElementWidth(nodeText);
                nodeText.translate(this.width / 2, this.height / 2 - textSize - textHeight / 2);
                nodeText.font({
                    family: 'Roboto'
                    , size: textSize
                    , anchor: 'middle'
                    , color: "#ffffff"
                });

            }


            nodeText.fill({color: "#fff", opacity: 0.3});
            nodeText.style('font-weight', 'bold');



            if ((this.inputs.length === 1) && (this.outputs.length === 1)) {
                this.drawPins(draw, 1.5, false);
            } else {
                this.drawPins(draw, 1, false);
            }






        }

        return draw;

    }
}
class CastNode extends AbstractNode {
    constructor(funcObj, x, y, drawer) {
        super(x, y, drawer);
        
        this.minCellWidth = 8.5
        this.minCellHeight = 2;
        
        this.function = funcObj;

        this.inputs = funcObj.inputs;
        this.outputs = funcObj.outputs;



        this.angleRadius = 10;
        this.showHeader = true;
        this.showPinText = true;
        this.headerCellHeight = 1.5;
        this.cellOffset = 0.5;

        this.icon = ICONS["dynamic_cast"];



        this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
    }
    setSVG(drawer) {
        var headerColor = VAR_COLORS["dynamicCast"];
        ;

        var draw = drawer.group();

        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });

        var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
        var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        mainRect.fill({color: "#000", opacity: 0.5});
        mainRect.stroke({color: '#000000', opacity: 1, width: 1});

        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 1});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });
        headerGradient.from(0, 0).to(1, 0);
        var header = draw.rect(this.width, this.height).radius(this.angleRadius).fill(headerGradient);
        var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.cellSize)

        header.clipWith(rect)

        var headerText = draw.text(this.function.name);

        headerText.font({
            family: 'Roboto'
            , size: this.fontSize
            , anchor: 'start'
            , color: "#ffffff"
        });
        headerText.style('font-weight', 'bold');
        headerText.translate(this.cellSize * 2, 0);
        headerText.fill({color: "#fff"});
        var icon = draw.image(getIcon(this.icon), 16, 16).fill({color: "#fff"});
        icon.center(this.cellSize, this.headerCellHeight * this.cellSize / 2);
        this.drawPins(draw);


        return draw;

    }
}
class TimelineNode extends AbstractNode {
    constructor(funcObj, x, y, drawer) {
        super.call(x, y, drawer);
        
        this.minCellWidth = 8.5
        this.minCellHeight = 2;
        
        this.function = funcObj;

        this.inputs = funcObj.inputs;
        this.outputs = funcObj.outputs;



        this.angleRadius = 10;
        this.showHeader = true;
        this.showPinText = true;
        this.headerCellHeight = 1.5;
        this.cellOffset = 0.5;

        this.icon = ICONS["timeline"];



        this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
    }
    setSVG(drawer) {
        var headerColor = VAR_COLORS["timeline"];
        ;

        var draw = drawer.group();

        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });

        var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
        var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        mainRect.fill({color: "#000", opacity: 0.5});
        mainRect.stroke({color: '#000000', opacity: 1, width: 1});

        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 1});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });
        headerGradient.from(0, 0).to(1, 0);
        var header = draw.rect(this.width, this.height).radius(this.angleRadius).fill(headerGradient);
        var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.cellSize)

        header.clipWith(rect)

        var headerText = draw.text(this.function.name);

        headerText.font({
            family: 'Roboto'
            , size: this.fontSize
            , anchor: 'start'
            , color: "#ffffff"
        });
        headerText.style('font-weight', 'bold');
        headerText.translate(this.cellSize * 2, 0);
        headerText.fill({color: "#fff"});

        var icon = draw.image(getIcon(this.icon), 16, 16).fill({color: "#fff"});
        icon.center(this.cellSize, this.headerCellHeight * this.cellSize / 2);
        this.drawPins(draw);


        return draw;

    }
}
class CallDelegateNode extends AbstractNode {
    constructor(funcObj, x, y, drawer) {
        super(x, y, drawer);
        
        this.minCellWidth = 8.5
        this.minCellHeight = 2;
        
        this.function = funcObj;
        this.inputs = funcObj.inputs;
        this.outputs = funcObj.outputs;
        this.angleRadius = 10;
        this.showHeader = true;
        this.showPinText = true;
        this.headerCellHeight = 1.5;
        this.cellOffset = 0.5;
        this.icon = ICONS["node"];
        this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
    }
    setSVG(drawer) {
        var headerColor = VAR_COLORS["execFunction"];
        ;
        var draw = drawer.group();
        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });
        var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
        var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        mainRect.fill({color: "#000", opacity: 0.5});
        mainRect.stroke({color: '#000000', opacity: 1, width: 1});
        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 1});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });
        headerGradient.from(0, 0).to(1, 0);
        var header = draw.rect(this.width, this.height).radius(this.angleRadius).fill(headerGradient);
        var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.cellSize)

        header.clipWith(rect)

        var headerText = draw.text(this.function.name);
        headerText.font({
            family: 'Roboto'
            , size: this.fontSize
            , anchor: 'start'
            , color: "#ffffff"
        });
        headerText.style('font-weight', 'bold');
        headerText.translate(this.cellSize * 2, 0);
        headerText.fill({color: "#fff"});
        var icon = draw.image(getIcon(this.icon), 16, 16).fill({color: "#fff"});
        icon.center(this.cellSize, this.headerCellHeight * this.cellSize / 2);
        var message_icon = draw.image(getIcon(ICONS["message"]), 32, 32).fill({color: "#fff"});
        message_icon.center(this.width, 0);
        this.drawPins(draw);
        return draw;
    }
}
class UnknownNode extends AbstractNode {
    constructor(funcObj, x, y, drawer) {
        super(x, y, drawer);
        
        this.minCellWidth = 8.5
        this.minCellHeight = 2;
        
        this.function = funcObj;

        this.inputs = funcObj.inputs;
        this.outputs = funcObj.outputs;



        this.angleRadius = 8;
        this.showHeader = true;
        this.showPinText = true;
        this.headerCellHeight = 1.5;
        this.cellOffset = 0.5;

        this.name = "Unknown node";//funcObj.name;


        this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
    }

    setSVG(drawer) {
        var headerColor = null;

        headerColor = VAR_COLORS["execFunction"];


        var draw = drawer.group();



        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });

        var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
        var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        mainRect.fill({color: "#000", opacity: 0.5});
        mainRect.stroke({color: '#000000', opacity: 1, width: 1});

        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 1});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });
        headerGradient.from(0, 0).to(1, 0);
        var header = draw.rect(this.width, this.height).radius(this.angleRadius).fill(headerGradient);
        var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.cellSize)

        header.clipWith(rect)

        var headerText = draw.text(this.name);

        headerText.font({
            family: 'Roboto, sans-serif'
            , size: this.fontSize
            , anchor: 'start'
            , color: "#ffffff"
        });
        headerText.style('font-weight', 'bold');
        headerText.translate(this.cellSize * 2, 0);
        headerText.fill({color: "#fff"});

        this.drawPins(draw);

        return draw;

    }
}
class SelectNode extends AbstractNode {
    constructor(funcObj, x, y, drawer) {
        super(x, y, drawer);
        
        this.minCellWidth = 8.5
        this.minCellHeight = 2;
        
        this.function = funcObj;

        this.inputs = funcObj.inputs;
        this.outputs = funcObj.outputs;

        // console.log(funcObj);

        this.angleRadius = 8;
        this.showHeader = true;
        this.showPinText = true;
        this.headerCellHeight = 1.5;
        this.cellOffset = 0.5;

        this.icon = ICONS["select"];



        this.cellHeight = this.headerCellHeight + this.cellOffset + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
    }
    setSVG(drawer) {
        var headerColor = null;





        headerColor = VAR_COLORS["pureFunction"];

        var draw = drawer.group();



        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });

        var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
        var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        mainRect.fill({color: "#000", opacity: 0.5});
        mainRect.stroke({color: '#000000', opacity: 1, width: 1});

        if (this.showHeader) {
            var headerGradient = draw.gradient('linear', function (stop) {
                stop.at({offset: 0, color: headerColor, opacity: 1});
                stop.at({offset: 1, color: headerColor, opacity: 0});
            });
            headerGradient.from(0, 0).to(1, 0);
            var header = draw.rect(this.width, this.height).radius(this.angleRadius).fill(headerGradient);
            var rect = draw.rect(this.width, this.height).move(0, -this.height + this.headerCellHeight * this.cellSize)

            header.clipWith(rect)

            var headerText = draw.text(this.function.name);

            headerText.font({
                family: 'Roboto, sans-serif'
                , size: this.fontSize
                , anchor: 'start'
                , color: "#ffffff"
            });
            headerText.style('font-weight', 'bold');
            headerText.translate(this.cellSize * 2, 0);
            headerText.fill({color: "#fff"});
            if (!this.icon) {
                var path = draw.use(this.nodesDrawer.fLetter);
                path.translate(this.cellSize, 1.1 * this.cellSize);
                if (!this.function.isPure) {
                    path.fill({color: VAR_COLORS.execFunctionF});
                } else {
                    path.fill({color: VAR_COLORS.pureFunctionF});
                }

                path.scale(1.65, 1.65);
            } else {
                var icon = draw.image(getIcon(this.icon), 16, 16).fill({color: "#fff"});
                icon.center(this.cellSize, this.headerCellHeight * this.cellSize / 2);
            }

            if (this.function.name.indexOf("Delay") !== -1 || this.function.async) {
                var latentIcon = draw.image(getIcon(ICONS["latent"]), 32, 32).fill({color: "#fff"});
                latentIcon.center(this.width, 0);
            }

            this.drawPins(draw);

        } else {
            var text = this.function.name;
            if (text.indexOf("Subtract") !== -1) {
                text = "-"
            } else if (text.indexOf("Add") !== -1) {
                text = "+"
            } else if (text.indexOf("Multiply") !== -1) {
                text = "x"
            } else if (text.indexOf("Percent") !== -1) {
                text = "%"
            } else if (text.indexOf("Divide") !== -1) {
                text = "/"
            } else if (text.indexOf("Greater") !== -1) {
                text = ">"
            } else if (text.indexOf("Equal") !== -1 && text.indexOf("Not") !== -1) {
                text = "!="
            }
            var textSize = 35;
            var nodeText = draw.text(text.toUpperCase());
            nodeText.translate(this.width / 2, this.height / 2 - textSize);
            nodeText.fill({color: "#fff", opacity: 0.3});
            nodeText.style('font-weight', 'bold');
            nodeText.font({
                family: 'Roboto, sans-serif'
                , size: textSize
                , anchor: 'middle'
                , color: "#ffffff"
            });
            this.drawPins(draw, 1, false);
        }





        return draw;

    }
}
class CompositeNode extends AbstractNode {
    constructor(funcObj, x, y, drawer) {
        super(x, y, drawer);
        
        this.minCellWidth = 8.5
        this.minCellHeight = 4;
        
        this.function = funcObj;

        this.inputs = funcObj.inputs;
        this.outputs = funcObj.outputs;

        // console.log(funcObj);

        this.angleRadius = 8;
        this.showHeader = true;
        this.showPinText = true;
        this.headerCellHeight = 2;
        this.cellOffset = 0.5;

        //console.log(funcObj);

        this.cellHeight = this.headerCellHeight + this.cellOffset * 3 + Math.max(funcObj.outputs.length, funcObj.inputs.length) + Math.max(funcObj.outputs.length, funcObj.inputs.length) * this.cellOffset;
    }
    setSVG(drawer) {
        var headerColor = null;





        headerColor = VAR_COLORS["pureFunction"];

        var draw = drawer.group();



        var headerGradient = draw.gradient('linear', function (stop) {
            stop.at({offset: 0, color: headerColor, opacity: 0.74226803});
            stop.at({offset: 1, color: headerColor, opacity: 0});
        });

        var opacityRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        opacityRect.fill(this.nodesDrawer.opacityLinearGradient);
        var mainRect = draw.rect(this.width, this.height).radius(this.angleRadius);
        mainRect.fill({color: "#000", opacity: 0.5});
        mainRect.stroke({color: '#000000', opacity: 1, width: 1});


        var opRect = draw.rect(this.width * 0.8, this.height * 0.8).radius(this.angleRadius);
        opRect.fill({color: "#FFF", opacity: 0.1});
        opRect.translate(this.width / 2 - this.width * 0.4, this.height / 2 - this.height * 0.4);



        var headerText = draw.text(this.function.name);

        headerText.font({
            family: 'Roboto, sans-serif'
            , size: this.fontSize
            , anchor: 'start'
            , color: "#ffffff"
        });
        headerText.style('font-weight', 'bold');
        headerText.translate(this.cellSize * 0.5, 0);
        headerText.fill({color: "#fff"});


        var nodeText = draw.text("Collapsed graph");
        nodeText.translate(this.cellSize * 0.5, this.cellSize);
        nodeText.fill({color: "#9b9c77"});
        nodeText.style('font-style', 'italic');
        nodeText.font({
            family: 'Roboto'
            , size: this.fontSize
            , anchor: 'start'
            , color: "#9b9c77"
        });

        this.drawPins(draw, this.headerCellHeight + this.cellOffset * 2);



        return draw;

    }
}
/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



class Grid {
    constructor(drawer, drawerWidth, drawerHeight) {
        var gridStep = CONFIG["GRID_STEP"];
        var gridPattern = null;
        var grid = drawer.group();
        this.gridPattern = null;

        gridPattern = drawer.pattern(gridStep * 8, gridStep * 8, function (add) {
            add.rect(136, 136).fill('#262626');
            for (var i = 1; i < 8; i++) {
                add.line(i * gridStep, 0, i * gridStep, gridStep * 8).stroke({width: 1, color: '#343434'});
                add.line(0, i * gridStep, gridStep * 8, i * gridStep).stroke({width: 1, color: '#343434'});
            }

            add.line(0, 0, 0, gridStep * 8).stroke({width: 1, color: '#161616'});
            add.line(0, 0, gridStep * 8, 0).stroke({width: 1, color: '#161616'});
        });
        grid.rect(drawerWidth, drawerHeight).fill(gridPattern);
        grid.back();
        grid.style('pointer-events', 'none');

        this.gridPattern = gridPattern;
    }
    updatePattern(x, y, scale) {
        this.gridPattern.x(x / scale);
        this.gridPattern.y(y / scale);
    }
    updatePatternScale(newScale) {
        this.gridPattern.scale(newScale);
    }
}
document.addEventListener('dragstart', function (e) {
    e.preventDefault();
});
class BlueprintRenderer {
    constructor(domNodeId) {
        this.drawerHeight = 0;
        this.drawerWidth = 0;
        this.svgContainer = null;
        this.currentScaleStep = 0;
        this.grid = null;
        this.currentScale = 1;
        this.blueprintObjects = [];
        this.nodesObjects = [];
        this.mainDrawer = null;
        this.linksDrawer = null;
        this.nodesDrawer = null;
        this.interfaceDrawer = null;
        this.origin = null;
        this.config = null;
        this.layersContainer = null;
        this.linksLayer = null;
        this.nodesLayer = null;
        this.current = null;
        this.mainContainer = document.getElementById(domNodeId);
        var contentEditable = document.createElement("div");
        contentEditable.setAttribute("style", "display:none");
        contentEditable.setAttribute("contenteditable", "")
        this.mainContainer.appendChild(contentEditable);

        var svgContainer = document.createElement("div");
        svgContainer.setAttribute("id", "svgContainer");
        this.mainContainer.appendChild(svgContainer);
        this.svgContainerId = "svgContainer";
        this.svgCointainerNode = svgContainer;



        var tmpSvgContainer = document.createElement("div");
        tmpSvgContainer.setAttribute("id", "tmpSvgContainer");
        this.mainContainer.appendChild(tmpSvgContainer);

        var copyContainer = document.createElement("div");
        copyContainer.setAttribute("id", "copyContainer");
        this.mainContainer.appendChild(copyContainer);

        this.origin = new Vector(0, 0);
    }
    renderFromText(bpText) {
        this.parse(bpText);
    }
    renderFromFile(bpFileName) {
        var client = new XMLHttpRequest();
        var self = this;
        client.open('GET', bpFileName);
        client.onreadystatechange = function () {
            if (client.readyState === 4 && client.status === 200)
            {
                if (client.responseText)
                    self.parse(client.responseText);
            }
        }
        client.send();
    }
    parse(bpText) {
        var parser = new BPParser(bpText);
        this.blueprintObjects = parser.parseText();
        this.draw();
    }
    getCoords(e) {
        var can = this.svgCointainerNode;
        var x, y;
        if (e.pageX || e.pageY) {
            x = e.pageX;
            y = e.pageY;
        } else {
            x = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            y = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }

        x -= can.offsetLeft;
        y -= can.offsetTop;
        return new Vector(x, y);
    }
    draw() {
        this.drawerWidth = window.innerWidth;
        this.drawerHeight = window.innerHeight;
        this.mainDrawer = SVG(this.svgContainerId).size(this.drawerWidth, this.drawerHeight).spof();
        this.linksDrawer = new LinksDrawer(this.mainDrawer);
        this.nodesDrawer = new NodesDrawer(this.mainDrawer, this);
        this.interfaceDrawer = new InterfaceDrawer(this.mainDrawer);

        this.nodesObjects = this.nodesObjects.concat(BPToNodes(this.blueprintObjects));
        this.layersContainer = this.mainDrawer.group();
        this.linksLayer = this.layersContainer.group();
        var nodesDraw = this.drawNodes(this.nodesObjects);
        var links = this.linksDrawer.renderNodes(this.nodesObjects);
        links.back();
        this.layersContainer = this.mainDrawer.group();
        this.linksLayer = this.layersContainer.group();
        this.nodesLayer = this.layersContainer.group();
        this.drawGrid();
        this.linksLayer.back();
        this.linksLayer.add(links);
        this.nodesLayer.add(nodesDraw);
        this.interfaceDrawer.render();
        var self = this;
        this.interfaceDrawer.setSaveCallback(function (e) {
            var xmlns = "http://www.w3.org/2000/xmlns/";
            var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
            svg.innerHTML = self.mainDrawer.svg();

            svg.setAttribute("version", "1.1");
            if (!svg.getAttribute('xmlns')) {
                svg.setAttributeNS(xmlns, "xmlns", "http://www.w3.org/2000/svg");
            }
            if (!svg.getAttribute('xmlns:xlink')) {
                svg.setAttributeNS(xmlns, "xmlns:xlink", "http://www.w3.org/1999/xlink");
            }
            svgAsDataUri(svg, {}, function (uri) {
                var a = document.createElement('a');
                a.download = "blueprint.svg";
                a.href = uri;
                document.body.appendChild(a);
                a.addEventListener("click", function (e) {
                    a.parentNode.removeChild(a);
                });
                a.click();
            });
        });

        this.interfaceDrawer.setFullScreenCallback(function (e) {
            var elem = document.body; // Make the body go full screen.
            self.requestFullScreen(elem);
        });

        var self = this;
        this.svgCointainerNode.addEventListener('wheel', function (e) {
            self.wheelHandler(e);
        }, false);
        this.svgCointainerNode.addEventListener('contextmenu', function (ev) {
            ev.preventDefault();
            return false;
        }, false);
        this.subscribeMainDrawer();
        this.subscribeDocument();
    }
    subscribeDocument() {
        var self = this;
        document.addEventListener('paste', function (e) {
            var pastedText = undefined;
            if (window.clipboardData && window.clipboardData.getData) { // IE
                pastedText = window.clipboardData.getData('Text');
            } else if (e.clipboardData && e.clipboardData.getData) {
                pastedText = e.clipboardData.getData('text/plain');
            }

            var parser = new BPParser(pastedText);
            var newObjects = parser.parseText();
            if (newObjects) {
                var newNodes = BPToNodes(newObjects, self.currentCursorPos);
                self.nodesObjects = self.nodesObjects.concat(newNodes);

                var links = self.linksDrawer.renderNodes(newNodes)
                self.linksLayer.add(links);

                self.nodesLayer.add(self.drawNodes(newNodes));
            } else {
                console.log('Parse error');
            }
            return false; // Prevent the default handler from running.
        });
        document.addEventListener('copy', function (e) {
            return false;
        });

        document.onkeydown = function (evt) {
            evt = evt || window.event;
            console.log(evt.keyCode);
            if (evt.ctrlKey && evt.keyCode === 65) {
                self.nodesDrawer.selectAllNodes();
                evt.preventDefault();
            } else if (evt.ctrlKey && evt.keyCode === 67) {
                document.getElementById('copyContainer').innerHTML = '';
                self.nodesDrawer.selectedNodes.forEach(function (item) {
                    document.getElementById('copyContainer').innerHTML += item.x + ",";
                });
                var doc = document
                        , text = doc.getElementById('copyContainer')
                        , range, selection
                        ;
                if (doc.body.createTextRange) {
                    range = document.body.createTextRange();
                    range.moveToElementText(text);
                    range.select();
                } else if (window.getSelection) {
                    selection = window.getSelection();
                    range = document.createRange();
                    range.selectNodeContents(text);
                    selection.removeAllRanges();
                    selection.addRange(range);
                }
                var successful = document.execCommand('copy');
                var msg = successful ? 'successful' : 'unsuccessful';
                console.log('Copying text command was ' + msg);
                document.getElementById('copyContainer').innerHTML = '';
            }
        };
    }
    subscribeMainDrawer() {
        var self = this;
        this.mainDrawer.mousedown(function (e) {
            if (e.button === 2) {
                self.interfaceDrawer.removeSelectRect();
                self.rightButtonDown = true;
            } else if (e.button === 0 && !e.shiftKey) {
                self.nodesDrawer.unselectAllNodes();
            } else if (e.button === 1) {
                e.preventDefault();
                return;
            }
            self.clickPoint = self.getCoords(e);
        });
        this.mainDrawer.mouseup(function (e) {
            if (e.button === 1) {
                e.preventDefault();
                return;
            }
            self.rightButtonDown = false;
            self.origin.x = self.layersContainer.x();
            self.origin.y = self.layersContainer.y();
            self.dragStart = false;
            self.clickPoint = null;
            self.interfaceDrawer.removeSelectRect();
        });
        this.mainDrawer.mousemove(function (e) {

            self.currentCursorPos = self.getCoords(e).subtract(self.origin).divide(self.currentScale);
            if (self.rightButtonDown) {
                var delta = self.getCoords(e).subtract(self.clickPoint);
                self.grid.updatePattern(self.origin.x + delta.x, self.origin.y + delta.y, self.currentScale);
                self.layersContainer.move(self.origin.x + delta.x, self.origin.y + delta.y);
            }



            if (self.nodesDrawer.dragNode !== null && (e.button === 0)) {

                var delta = self.getCoords(e);
                if (!self.nodesDrawer.isNodeSelected(self.nodesDrawer.dragNode)) {
                    self.nodesDrawer.selectNode(self.nodesDrawer.dragNode, e);
                }

                var newPos = new Vector(delta.x - self.nodesDrawer.pointOnNode.x - self.origin.x, delta.y - self.nodesDrawer.pointOnNode.y - self.origin.y).divide(self.currentScale);
                newPos = self.getNearestCell(newPos.x, newPos.y)
                var deltaPos = new Vector(newPos.x - self.nodesDrawer.dragNode.allNode.x(), newPos.y - self.nodesDrawer.dragNode.allNode.y());
                self.nodesDrawer.dragNode.allNode.move(newPos.x, newPos.y);
                if (!self.dragStart) {
                    if (self.nodesDrawer.dragNode instanceof CommentNode) {
                        //console.log('is instance');
                        self.nodesObjects.forEach(function (nodeItem) {
                            if (inNode(self.nodesDrawer.dragNode, nodeItem) && nodeItem !== self.nodesDrawer.dragNode && self.nodesDrawer.selectedNodes.indexOf(nodeItem) === -1) {
                                self.nodesDrawer.movingNodes.push(nodeItem);
                            }
                        });
                    }


                    self.nodesDrawer.selectedNodes.forEach(function (node) {
                        if (node instanceof CommentNode && node !== self.nodesDrawer.dragNode) {
                            self.nodesObjects.forEach(function (nodeItem) {
                                if (inNode(node, nodeItem) && nodeItem !== node && self.nodesDrawer.selectedNodes.indexOf(nodeItem) === -1) {
                                    self.nodesDrawer.movingNodes.push(nodeItem);
                                }
                            });
                        }
                    });
                    self.dragStart = true;
                }



                self.nodesDrawer.selectedNodes.forEach(function (node) {
                    if (node !== self.nodesDrawer.dragNode) {
                        node.allNode.dmove(deltaPos.x, deltaPos.y);
                        node.x = node.allNode.x();
                        node.y = node.allNode.y();
                    }
                });
                self.nodesDrawer.movingNodes.forEach(function (node) {
                    if (node !== self.nodesDrawer.dragNode) {
                        node.allNode.dmove(deltaPos.x, deltaPos.y);
                        node.x = node.allNode.x();
                        node.y = node.allNode.y();
                    }
                });
                self.nodesDrawer.dragNode.x = self.nodesDrawer.dragNode.allNode.x();
                self.nodesDrawer.dragNode.y = self.nodesDrawer.dragNode.allNode.y();
                var affectedNodes = self.nodesDrawer.selectedNodes.concat(self.nodesDrawer.movingNodes);
                self.linksDrawer.redrawNodes(affectedNodes);
                // self.linksLayer.add(self.links);
            }
            if (!self.nodesDrawer.dragNode && self.clickPoint && !self.rightButtonDown) {
                var endPoint = self.getCoords(e);
                self.interfaceDrawer.drawSelectRect(self.clickPoint, self.getCoords(e));
                var rect = {};
                rect.x = (self.clickPoint.x < endPoint.x) && self.clickPoint.x || endPoint.x;
                rect.y = (self.clickPoint.y < endPoint.y) && self.clickPoint.y || endPoint.y;
                rect.width = Math.abs(endPoint.x - self.clickPoint.x);
                rect.height = Math.abs(endPoint.y - self.clickPoint.y);
                rect.x -= self.origin.x;
                rect.y -= self.origin.y;
                var group = [];
                self.nodesObjects.forEach(function (nodeItem) {
                    if (nodeItem instanceof CommentNode) {
                        if (intersectNodeSelectable(rect, nodeItem, self.currentScale, self.interfaceDrawer, self.origin)) {
                            group.push(nodeItem);
                        }
                    } else {
                        if (intersectNode(rect, nodeItem, self.currentScale, self.interfaceDrawer, self.origin)) {
                            group.push(nodeItem);
                        }
                    }
                })
                //console.log(group);
                if (!e.shiftKey)
                    self.nodesDrawer.selectNodeGroup(group);
                else {
                    //console.log('add group');
                    self.nodesDrawer.addNodeGroupToSelect(group);
                }

            }

        });
    }
    wheelHandler(e) {
        var sign = e.deltaY > 0 && -1 || 1;
        var newScaleStep = this.currentScaleStep + sign;
        if (newScaleStep >= -12 && newScaleStep <= 7) {
            var newScale = this.currentScale + sign * 0.08;
            var point = this.getCoords(e).subtract(this.origin).divide(this.currentScale);
            var deltaScale = newScale - this.currentScale;
            var offsetX = -((point.x) * deltaScale);
            var offsetY = -((point.y) * deltaScale);
            this.layersContainer.scale(newScale);
            this.layersContainer.move(this.origin.x, this.origin.y);
            this.layersContainer.dmove(offsetX, offsetY);
            this.origin.x = this.layersContainer.x();
            this.origin.y = this.layersContainer.y();
            this.currentScaleStep = newScaleStep;
            this.interfaceDrawer.setScaleLabelText(this.currentScaleStep);
            this.currentScale = newScale;
            this.grid.gridPattern.scale(this.currentScale);
            this.grid.updatePattern(this.origin.x, this.origin.y, this.currentScale);
        }
    }
    drawNodes(nodes) {
        var nodesDraw = this.nodesDrawer.renderNodes(nodes);
        return nodesDraw;
    }
    drawGrid() {
        this.grid = new Grid(this.mainDrawer, this.drawerWidth, this.drawerHeight);
    }
    setupListeners() {

    }
    getNearestCell(x, y) {
        return new Vector(Math.floor(x / CONFIG["GRID_STEP"]) * CONFIG["GRID_STEP"], Math.floor(y / CONFIG["GRID_STEP"]) * CONFIG["GRID_STEP"]);
    }
    requestFullScreen(element) {
        // Supports most browsers and their versions.
        if (this.isFullScreen) {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
            this.isFullScreen = false;
        } else {
            var requestMethod = element.requestFullScreen || element.webkitRequestFullScreen || element.mozRequestFullScreen || element.msRequestFullScreen;
            this.isFullScreen = true;
            if (requestMethod) { // Native full screen.
                requestMethod.call(element);
            } else if (typeof window.ActiveXObject !== "undefined") { // Older IE.
                var wscript = new ActiveXObject("WScript.Shell");
                if (wscript !== null) {
                    wscript.SendKeys("{F11}");
                }
            }
        }

    }
}