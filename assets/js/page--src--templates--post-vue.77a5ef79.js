(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{174:function(t,e,n){t.exports=n.p+"assets/img/LogoFull.905b7007.svg"},175:function(t,e,n){t.exports=n.p+"assets/img/WhiteFull.4a8b1ffe.svg"},176:function(t,e,n){},177:function(t,e,n){},178:function(t,e){},185:function(t,e,n){var r=n(2);e.f=r},186:function(t,e,n){"use strict";var r=n(4),o=n(1),i=n(24),s=n(20),a=n(12),c=n(79),u=n(132),l=n(3),f=n(11),p=n(33),g=n(9),d=n(6),m=n(25),y=n(22),v=n(32),h=n(31),b=n(54),w=n(80),S=n(51),O=n(187),_=n(77),j=n(23),$=n(13),C=n(73),P=n(17),k=n(15),x=n(74),E=n(52),H=n(53),L=n(75),A=n(2),N=n(185),I=n(188),B=n(55),F=n(27),J=n(78).forEach,T=E("hidden"),U=A("toPrimitive"),K=F.set,R=F.getterFor("Symbol"),W=Object.prototype,D=o.Symbol,M=i("JSON","stringify"),Q=j.f,q=$.f,z=O.f,G=C.f,V=x("symbols"),X=x("op-symbols"),Y=x("string-to-symbol-registry"),Z=x("symbol-to-string-registry"),tt=x("wks"),et=o.QObject,nt=!et||!et.prototype||!et.prototype.findChild,rt=a&&l((function(){return 7!=b(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Q(W,e);r&&delete W[e],q(t,e,n),r&&t!==W&&q(W,e,r)}:q,ot=function(t,e){var n=V[t]=b(D.prototype);return K(n,{type:"Symbol",tag:t,description:e}),a||(n.description=e),n},it=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof D},st=function(t,e,n){t===W&&st(X,e,n),d(t);var r=v(e,!0);return d(n),f(V,r)?(n.enumerable?(f(t,T)&&t[T][r]&&(t[T][r]=!1),n=b(n,{enumerable:h(0,!1)})):(f(t,T)||q(t,T,h(1,{})),t[T][r]=!0),rt(t,r,n)):q(t,r,n)},at=function(t,e){d(t);var n=y(e),r=w(n).concat(ft(n));return J(r,(function(e){a&&!ct.call(n,e)||st(t,e,n[e])})),t},ct=function(t){var e=v(t,!0),n=G.call(this,e);return!(this===W&&f(V,e)&&!f(X,e))&&(!(n||!f(this,e)||!f(V,e)||f(this,T)&&this[T][e])||n)},ut=function(t,e){var n=y(t),r=v(e,!0);if(n!==W||!f(V,r)||f(X,r)){var o=Q(n,r);return!o||!f(V,r)||f(n,T)&&n[T][r]||(o.enumerable=!0),o}},lt=function(t){var e=z(y(t)),n=[];return J(e,(function(t){f(V,t)||f(H,t)||n.push(t)})),n},ft=function(t){var e=t===W,n=z(e?X:y(t)),r=[];return J(n,(function(t){!f(V,t)||e&&!f(W,t)||r.push(V[t])})),r};(c||(k((D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=L(t),n=function(t){this===W&&n.call(X,t),f(this,T)&&f(this[T],e)&&(this[T][e]=!1),rt(this,e,h(1,t))};return a&&nt&&rt(W,e,{configurable:!0,set:n}),ot(e,t)}).prototype,"toString",(function(){return R(this).tag})),k(D,"withoutSetter",(function(t){return ot(L(t),t)})),C.f=ct,$.f=st,j.f=ut,S.f=O.f=lt,_.f=ft,N.f=function(t){return ot(A(t),t)},a&&(q(D.prototype,"description",{configurable:!0,get:function(){return R(this).description}}),s||k(W,"propertyIsEnumerable",ct,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:D}),J(w(tt),(function(t){I(t)})),r({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=String(t);if(f(Y,e))return Y[e];var n=D(e);return Y[e]=n,Z[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(f(Z,t))return Z[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:function(t,e){return void 0===e?b(t):at(b(t),e)},defineProperty:st,defineProperties:at,getOwnPropertyDescriptor:ut}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:lt,getOwnPropertySymbols:ft}),r({target:"Object",stat:!0,forced:l((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(m(t))}}),M)&&r({target:"JSON",stat:!0,forced:!c||l((function(){var t=D();return"[null]"!=M([t])||"{}"!=M({a:t})||"{}"!=M(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(g(e)||void 0!==t)&&!it(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),o[1]=e,M.apply(null,o)}});D.prototype[U]||P(D.prototype,U,D.prototype.valueOf),B(D,"Symbol"),H[T]=!0},187:function(t,e,n){var r=n(22),o=n(51).f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return s&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return s.slice()}}(t):o(r(t))}},188:function(t,e,n){var r=n(131),o=n(11),i=n(185),s=n(13).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||s(e,t,{value:i.f(t)})}},189:function(t,e,n){"use strict";var r=n(4),o=n(12),i=n(1),s=n(11),a=n(9),c=n(13).f,u=n(130),l=i.Symbol;if(o&&"function"==typeof l&&(!("description"in l.prototype)||void 0!==l().description)){var f={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new l(t):void 0===t?l():l(t);return""===t&&(f[e]=!0),e};u(p,l);var g=p.prototype=l.prototype;g.constructor=p;var d=g.toString,m="Symbol(test)"==String(l("test")),y=/^Symbol\((.*)\)[^)]+$/;c(g,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=d.call(t);if(s(f,t))return"";var n=m?e.slice(7,-1):e.replace(y,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},190:function(t,e,n){"use strict";var r=n(4),o=n(76).includes,i=n(133);r({target:"Array",proto:!0,forced:!n(34)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},191:function(t,e,n){"use strict";var r=n(4),o=n(81),i=n(14);r({target:"String",proto:!0,forced:!n(82)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},192:function(t,e,n){"use strict";var r=n(176);n.n(r).a},193:function(t,e,n){"use strict";var r=n(177);n.n(r).a},194:function(t,e,n){"use strict";var r=n(178),o=n.n(r);e.default=o.a},202:function(t,e,n){"use strict";n.r(e);n(186),n(189),n(35),n(190),n(191);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"Header",attrs:{role:"banner"}},[e("a",{attrs:{href:"/"}},[e("img",{staticClass:"Header_logo light",attrs:{src:n(174),title:"Arjun Kalburgi Leaf Logo"}}),e("img",{staticClass:"Header_logo dark",attrs:{src:n(175),title:"Arjun Kalburgi Leaf Logo"}})])])}],o=(n(192),n(10)),i={name:"Post",metaInfo:function(){return{title:this.$page.post.title,meta:[{name:"description",content:this.$page.post.description},{property:"og:title",content:this.$page.post.title},{property:"og:image",content:this.getCoverImage,name:"image"},{property:"og:type",content:"article"},{property:"og:description",content:this.$page.post.description},{property:"og:updated_time",content:this.$page.post.date},{name:"twitter:description",content:this.$page.post.description},{name:"twitter:title",content:this.$page.post.title},{name:"twitter:site",content:"@arjunkalburgi"},{name:"twitter:image",content:this.getCoverImage},{name:"twitter:creator",content:"@arjunkalburgi"}]}},components:{Header:Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),r,!1,null,"6dee90c0",null).exports},computed:{getCoverImage:function(){var t="",e=this.$page.post.cover;return null!=e&&"string"!=typeof e?(console.log("cover: ",e),t="".concat(this.getBaseUrl).concat(e.src)):t=null!=e&&e.includes("http")?e:"".concat(this.getBaseUrl,"/writing/sra.jpg?").concat(e),t},getBaseUrl:function(){return"https://www.arjunkalburgi.com"}}},s=(n(193),n(194)),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("Header"),n("main",{staticClass:"post section"},[n("div",{staticClass:"post_header",attrs:{role:"region","aria-labelledby":"Article Header"}},[n("ul",{staticClass:"post_details"},[n("li",[n("p",{staticClass:"post_detail post_detail--date"},[t._v(t._s(t.$page.post.date))])]),n("li",[n("p",{staticClass:"post_detail post_detail--time"},[t._v(t._s(t.$page.post.timeToRead)+" min read")])])]),n("h2",{staticClass:"post_title"},[t._v(t._s(t.$page.post.title))])]),n("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post_content",attrs:{role:"region","aria-labelledby":"Article Body"},domProps:{innerHTML:t._s(t.$page.post.content)}})])],1)}),[],!1,null,"33d5cdc6",null);"function"==typeof s.default&&Object(s.default)(a);e.default=a.exports}}]);