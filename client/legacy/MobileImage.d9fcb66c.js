import{_ as t,a as n,b as i,c as a,i as e,s as o,d as r,S as s,R as c,f as l,g as u,h,j as f,T as d,A as v,k as g,m as y,B as w,U as p,o as m,V as D,L as I,W as R,X as b}from"./client.5f8ed278.js";function j(t){var a=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(t){return!1}}();return function(){var e,o=n(t);if(a){var r=n(this).constructor;e=Reflect.construct(o,arguments,r)}else e=o.apply(this,arguments);return i(this,e)}}function x(t){for(var n,i,a,e,o,r=[{alt:t[3]},t[6],{style:a="\n            --width: "+(t[0]?t[0]:"initial")+";\n            --height: "+(t[1]?t[1]:"initial")+";\n            --fade-in-duration: "+t[2]+";"},{width:t[0]},{height:t[1]}],s={},R=0;R<r.length;R+=1)s=c(s,r[R]);return{c:function(){n=l("div"),i=l("img"),this.h()},l:function(t){n=u(t,"DIV",{class:!0});var a=h(n);i=u(a,"IMG",{alt:!0,style:!0,width:!0,height:!0}),a.forEach(f),this.h()},h:function(){d(i,s),v(i,"loading",t[4]),v(i,"svelte-1yoicto",!0),g(n,"class","mobile svelte-1yoicto")},m:function(a,r){y(a,n,r),w(n,i),e||(o=p(t[5].call(null,i)),e=!0)},p:function(t,n){var e=m(n,1)[0];d(i,s=D(r,[8&e&&{alt:t[3]},64&e&&t[6],7&e&&a!==(a="\n            --width: "+(t[0]?t[0]:"initial")+";\n            --height: "+(t[1]?t[1]:"initial")+";\n            --fade-in-duration: "+t[2]+";")&&{style:a},1&e&&{width:t[0]},2&e&&{height:t[1]}])),v(i,"loading",t[4]),v(i,"svelte-1yoicto",!0)},i:I,o:I,d:function(t){t&&f(n),e=!1,o()}}}function M(t,n,i){var a=["width","height","fadeInDuration","alt"],e=R(n,a),o=!0;var r=n.width,s=void 0===r?null:r,l=n.height,u=void 0===l?null:l,h=n.fadeInDuration,f=void 0===h?"300ms":h,d=n.alt;return t.$$set=function(t){n=c(c({},n),b(t)),i(6,e=R(n,a)),"width"in t&&i(0,s=t.width),"height"in t&&i(1,u=t.height),"fadeInDuration"in t&&i(2,f=t.fadeInDuration),"alt"in t&&i(3,d=t.alt)},[s,u,f,d,o,function(t){t.onload=t.onerror=function(){return i(4,o=!1)}},e]}var S=function(n){t(c,s);var i=j(c);function c(t){var n;return a(this,c),n=i.call(this),e(r(n),t,M,x,o,{width:0,height:1,fadeInDuration:2,alt:3}),n}return c}();export{S as M};