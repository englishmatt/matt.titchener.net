import{S as t,i,s as a,K as n,e,a as s,b as l,d as h,L as o,q as d,f as r,h as c,r as u,M as f,N as g,E as w,O as I,P as m}from"./client.8557cbea.js";function y(t){let i,a,I,m,y,D,v=[{alt:t[3]},t[6],{style:I="\n            --width: "+(t[0]?t[0]:"initial")+";\n            --height: "+(t[1]?t[1]:"initial")+";\n            --fade-in-duration: "+t[2]+";"},{width:t[0]},{height:t[1]}],p={};for(let t=0;t<v.length;t+=1)p=n(p,v[t]);return{c(){i=e("div"),a=e("img"),this.h()},l(t){i=s(t,"DIV",{class:!0});var n=l(i);a=s(n,"IMG",{alt:!0,style:!0,width:!0,height:!0}),n.forEach(h),this.h()},h(){o(a,p),d(a,"loading",t[4]),d(a,"svelte-1yoicto",!0),r(i,"class","mobile svelte-1yoicto")},m(n,e){c(n,i,e),u(i,a),y||(D=f(m=t[5].call(null,a)),y=!0)},p(t,[i]){o(a,p=g(v,[8&i&&{alt:t[3]},64&i&&t[6],7&i&&I!==(I="\n            --width: "+(t[0]?t[0]:"initial")+";\n            --height: "+(t[1]?t[1]:"initial")+";\n            --fade-in-duration: "+t[2]+";")&&{style:I},1&i&&{width:t[0]},2&i&&{height:t[1]}])),d(a,"loading",t[4]),d(a,"svelte-1yoicto",!0)},i:w,o:w,d(t){t&&h(i),y=!1,D()}}}function D(t,i,a){const e=["width","height","fadeInDuration","alt"];let s=I(i,e),l=!0;let{width:h=null}=i,{height:o=null}=i,{fadeInDuration:d="300ms"}=i,{alt:r}=i;return t.$$set=t=>{i=n(n({},i),m(t)),a(6,s=I(i,e)),"width"in t&&a(0,h=t.width),"height"in t&&a(1,o=t.height),"fadeInDuration"in t&&a(2,d=t.fadeInDuration),"alt"in t&&a(3,r=t.alt)},[h,o,d,r,l,function(t){t.onload=t.onerror=()=>a(4,l=!1)},s]}class v extends t{constructor(t){super(),i(this,t,D,y,a,{width:0,height:1,fadeInDuration:2,alt:3})}}export{v as M};
