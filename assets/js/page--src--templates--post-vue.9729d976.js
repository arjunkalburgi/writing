(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{174:function(t,e,n){t.exports=n.p+"assets/img/LogoFull.f4addec2.svg"},175:function(t,e,n){t.exports=n.p+"assets/img/WhiteFull.4a906a84.svg"},176:function(t,e,n){},177:function(t,e,n){},178:function(t,e){},184:function(t,e,n){var r=n(2);e.f=r},185:function(t,e,n){"use strict";var r=n(4),o=n(1),i=n(24),s=n(20),a=n(12),c=n(79),u=n(132),f=n(3),l=n(11),p=n(33),g=n(9),d=n(6),v=n(25),m=n(22),h=n(32),y=n(31),b=n(54),w=n(80),S=n(51),O=n(186),_=n(77),j=n(23),$=n(13),C=n(73),P=n(17),k=n(15),x=n(74),E=n(52),L=n(53),H=n(75),N=n(2),I=n(184),A=n(187),F=n(55),J=n(27),T=n(78).forEach,B=E("hidden"),U=N("toPrimitive"),K=J.set,R=J.getterFor("Symbol"),W=Object.prototype,D=o.Symbol,M=i("JSON","stringify"),Q=j.f,q=$.f,z=O.f,G=C.f,V=x("symbols"),X=x("op-symbols"),Y=x("string-to-symbol-registry"),Z=x("symbol-to-string-registry"),tt=x("wks"),et=o.QObject,nt=!et||!et.prototype||!et.prototype.findChild,rt=a&&f((function(){return 7!=b(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(t,e,n){var r=Q(W,e);r&&delete W[e],q(t,e,n),r&&t!==W&&q(W,e,r)}:q,ot=function(t,e){var n=V[t]=b(D.prototype);return K(n,{type:"Symbol",tag:t,description:e}),a||(n.description=e),n},it=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof D},st=function(t,e,n){t===W&&st(X,e,n),d(t);var r=h(e,!0);return d(n),l(V,r)?(n.enumerable?(l(t,B)&&t[B][r]&&(t[B][r]=!1),n=b(n,{enumerable:y(0,!1)})):(l(t,B)||q(t,B,y(1,{})),t[B][r]=!0),rt(t,r,n)):q(t,r,n)},at=function(t,e){d(t);var n=m(e),r=w(n).concat(lt(n));return T(r,(function(e){a&&!ct.call(n,e)||st(t,e,n[e])})),t},ct=function(t){var e=h(t,!0),n=G.call(this,e);return!(this===W&&l(V,e)&&!l(X,e))&&(!(n||!l(this,e)||!l(V,e)||l(this,B)&&this[B][e])||n)},ut=function(t,e){var n=m(t),r=h(e,!0);if(n!==W||!l(V,r)||l(X,r)){var o=Q(n,r);return!o||!l(V,r)||l(n,B)&&n[B][r]||(o.enumerable=!0),o}},ft=function(t){var e=z(m(t)),n=[];return T(e,(function(t){l(V,t)||l(L,t)||n.push(t)})),n},lt=function(t){var e=t===W,n=z(e?X:m(t)),r=[];return T(n,(function(t){!l(V,t)||e&&!l(W,t)||r.push(V[t])})),r};(c||(k((D=function(){if(this instanceof D)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=H(t),n=function(t){this===W&&n.call(X,t),l(this,B)&&l(this[B],e)&&(this[B][e]=!1),rt(this,e,y(1,t))};return a&&nt&&rt(W,e,{configurable:!0,set:n}),ot(e,t)}).prototype,"toString",(function(){return R(this).tag})),k(D,"withoutSetter",(function(t){return ot(H(t),t)})),C.f=ct,$.f=st,j.f=ut,S.f=O.f=ft,_.f=lt,I.f=function(t){return ot(N(t),t)},a&&(q(D.prototype,"description",{configurable:!0,get:function(){return R(this).description}}),s||k(W,"propertyIsEnumerable",ct,{unsafe:!0}))),r({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:D}),T(w(tt),(function(t){A(t)})),r({target:"Symbol",stat:!0,forced:!c},{for:function(t){var e=String(t);if(l(Y,e))return Y[e];var n=D(e);return Y[e]=n,Z[n]=e,n},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(l(Z,t))return Z[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),r({target:"Object",stat:!0,forced:!c,sham:!a},{create:function(t,e){return void 0===e?b(t):at(b(t),e)},defineProperty:st,defineProperties:at,getOwnPropertyDescriptor:ut}),r({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:ft,getOwnPropertySymbols:lt}),r({target:"Object",stat:!0,forced:f((function(){_.f(1)}))},{getOwnPropertySymbols:function(t){return _.f(v(t))}}),M)&&r({target:"JSON",stat:!0,forced:!c||f((function(){var t=D();return"[null]"!=M([t])||"{}"!=M({a:t})||"{}"!=M(Object(t))}))},{stringify:function(t,e,n){for(var r,o=[t],i=1;arguments.length>i;)o.push(arguments[i++]);if(r=e,(g(e)||void 0!==t)&&!it(t))return p(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),o[1]=e,M.apply(null,o)}});D.prototype[U]||P(D.prototype,U,D.prototype.valueOf),F(D,"Symbol"),L[B]=!0},186:function(t,e,n){var r=n(22),o=n(51).f,i={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];t.exports.f=function(t){return s&&"[object Window]"==i.call(t)?function(t){try{return o(t)}catch(t){return s.slice()}}(t):o(r(t))}},187:function(t,e,n){var r=n(131),o=n(11),i=n(184),s=n(13).f;t.exports=function(t){var e=r.Symbol||(r.Symbol={});o(e,t)||s(e,t,{value:i.f(t)})}},188:function(t,e,n){"use strict";var r=n(4),o=n(12),i=n(1),s=n(11),a=n(9),c=n(13).f,u=n(130),f=i.Symbol;if(o&&"function"==typeof f&&(!("description"in f.prototype)||void 0!==f().description)){var l={},p=function(){var t=arguments.length<1||void 0===arguments[0]?void 0:String(arguments[0]),e=this instanceof p?new f(t):void 0===t?f():f(t);return""===t&&(l[e]=!0),e};u(p,f);var g=p.prototype=f.prototype;g.constructor=p;var d=g.toString,v="Symbol(test)"==String(f("test")),m=/^Symbol\((.*)\)[^)]+$/;c(g,"description",{configurable:!0,get:function(){var t=a(this)?this.valueOf():this,e=d.call(t);if(s(l,t))return"";var n=v?e.slice(7,-1):e.replace(m,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:p})}},189:function(t,e,n){"use strict";var r=n(4),o=n(76).includes,i=n(133);r({target:"Array",proto:!0,forced:!n(34)("indexOf",{ACCESSORS:!0,1:0})},{includes:function(t){return o(this,t,arguments.length>1?arguments[1]:void 0)}}),i("includes")},190:function(t,e,n){"use strict";var r=n(4),o=n(81),i=n(14);r({target:"String",proto:!0,forced:!n(82)("includes")},{includes:function(t){return!!~String(i(this)).indexOf(o(t),arguments.length>1?arguments[1]:void 0)}})},191:function(t,e,n){"use strict";var r=n(176);n.n(r).a},192:function(t,e,n){"use strict";var r=n(177);n.n(r).a},193:function(t,e,n){"use strict";var r=n(178),o=n.n(r);e.default=o.a},200:function(t,e,n){"use strict";n.r(e);n(185),n(188),n(35),n(189),n(190);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("header",{staticClass:"Header"},[e("a",{attrs:{href:"/"}},[e("img",{staticClass:"Header_logo light",attrs:{src:n(174),title:"Arjun Kalburgi Leaf Logo"}}),e("img",{staticClass:"Header_logo dark",attrs:{src:n(175),title:"Arjun Kalburgi Leaf Logo"}})])])}],o=(n(191),n(10)),i={name:"Post",metaInfo:function(){return{title:this.$page.post.title,meta:[{name:"description",content:this.$page.post.description},{property:"og:title",content:this.$page.post.title},{property:"og:image",content:this.getCoverImage},{property:"og:type",content:"article"},{property:"og:description",content:this.$page.post.description},{property:"og:updated_time",content:this.$page.post.date},{name:"twitter:description",content:this.$page.post.description},{name:"twitter:title",content:this.$page.post.title},{name:"twitter:site",content:"@arjunkalburgi"},{name:"twitter:image",content:this.getCoverImage},{name:"twitter:creator",content:"@arjunkalburgi"}]}},components:{Header:Object(o.a)({},(function(){var t=this.$createElement;this._self._c;return this._m(0)}),r,!1,null,"0c96b5db",null).exports},computed:{getCoverImage:function(){var t="",e=this.$page.post.cover;return null!=e&&"string"!=typeof e?(console.log("cover: ",e),t="".concat(this.getBaseUrl).concat(e.src)):t=null!=e&&e.includes("http")?e:"".concat(this.getBaseUrl,"/writing/sra.jpg"),t},getBaseUrl:function(){return"https://www.arjunkalburgi.com"}}},s=(n(192),n(193)),a=Object(o.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Layout",[n("Header"),n("div",{staticClass:"post section"},[n("div",{staticClass:"post_header"},[n("ul",{staticClass:"post_details"},[n("li",[n("p",{staticClass:"post_detail post_detail--date"},[t._v(t._s(t.$page.post.date))])]),n("li",[n("p",{staticClass:"post_detail post_detail--time"},[t._v(t._s(t.$page.post.timeToRead)+" min read")])])]),n("h2",{staticClass:"post_title"},[t._v(t._s(t.$page.post.title))])]),n("div",{directives:[{name:"g-image",rawName:"v-g-image"}],staticClass:"post_content",domProps:{innerHTML:t._s(t.$page.post.content)}})])],1)}),[],!1,null,"339b9880",null);"function"==typeof s.default&&Object(s.default)(a);e.default=a.exports}}]);