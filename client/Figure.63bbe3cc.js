import{S as t,i as s,s as l,M as n,e,a as i,N as a,r as h,h as o,O as c,P as r,H as u,d,Q as f,R as g,c as p,b as $,u as m,t as v,j as w,f as I,o as y,m as O,x,y as D,v as E,z as H,A as j,B as b}from"./client.0e8f121a.js";function A(t){let s,l,f,g,p,$=[{alt:t[3]},t[7],{style:l="\n        --width: "+(t[0]?t[0]:"initial")+";\n        --height: "+(t[1]?t[1]:"initial")+";\n        --fade-in-duration: "+t[2]+";\n        --align: "+t[4]+";"},{width:t[0]},{height:t[1]}],m={};for(let t=0;t<$.length;t+=1)m=n(m,$[t]);return{c(){s=e("img"),this.h()},l(t){s=i(t,"IMG",{alt:!0,style:!0,width:!0,height:!0}),this.h()},h(){a(s,m),h(s,"loading",t[5]),h(s,"svelte-10f1hau",!0)},m(l,n){o(l,s,n),g||(p=c(f=t[6].call(null,s)),g=!0)},p(t,[n]){a(s,m=r($,[8&n&&{alt:t[3]},128&n&&t[7],23&n&&l!==(l="\n        --width: "+(t[0]?t[0]:"initial")+";\n        --height: "+(t[1]?t[1]:"initial")+";\n        --fade-in-duration: "+t[2]+";\n        --align: "+t[4]+";")&&{style:l},1&n&&{width:t[0]},2&n&&{height:t[1]}])),h(s,"loading",t[5]),h(s,"svelte-10f1hau",!0)},i:u,o:u,d(t){t&&d(s),g=!1,p()}}}function C(t,s,l){const e=["width","height","fadeInDuration","alt","align"];let i=f(s,e),a=!0;let{width:h=null}=s,{height:o=null}=s,{fadeInDuration:c="300ms"}=s,{alt:r}=s,{align:u=null}=s;return t.$$set=t=>{s=n(n({},s),g(t)),l(7,i=f(s,e)),"width"in t&&l(0,h=t.width),"height"in t&&l(1,o=t.height),"fadeInDuration"in t&&l(2,c=t.fadeInDuration),"alt"in t&&l(3,r=t.alt),"align"in t&&l(4,u=t.align)},[h,o,c,r,u,a,function(t){t.onload=t.onerror=()=>l(5,a=!1)},i]}class F extends t{constructor(t){super(),s(this,t,C,A,l,{width:0,height:1,fadeInDuration:2,alt:3,align:4})}}function G(t){let s,l,c;const u=t[6].default,f=p(u,t,t[5],null);let g=[t[4],{class:"carousel"},{style:l="--inset: "+t[0]+"; --scroll-offset: "+t[1]+"; --height: "+t[2]+"; --caption-height: "+t[3]}],I={};for(let t=0;t<g.length;t+=1)I=n(I,g[t]);return{c(){s=e("div"),f&&f.c(),this.h()},l(t){s=i(t,"DIV",{class:!0,style:!0});var l=$(s);f&&f.l(l),l.forEach(d),this.h()},h(){a(s,I),h(s,"svelte-11hdjdd",!0)},m(t,l){o(t,s,l),f&&f.m(s,null),c=!0},p(t,[n]){f&&f.p&&32&n&&m(f,u,t,t[5],n,null,null),a(s,I=r(g,[16&n&&t[4],{class:"carousel"},(!c||15&n&&l!==(l="--inset: "+t[0]+"; --scroll-offset: "+t[1]+"; --height: "+t[2]+"; --caption-height: "+t[3]))&&{style:l}])),h(s,"svelte-11hdjdd",!0)},i(t){c||(v(f,t),c=!0)},o(t){w(f,t),c=!1},d(t){t&&d(s),f&&f.d(t)}}}function R(t,s,l){const e=["inset","scrollOffset","height","captionHeight"];let i=f(s,e),{$$slots:a={},$$scope:h}=s,{inset:o="0rem"}=s,{scrollOffset:c="0rem"}=s,{height:r="40vw"}=s,{captionHeight:u="0rem"}=s;return t.$$set=t=>{s=n(n({},s),g(t)),l(4,i=f(s,e)),"inset"in t&&l(0,o=t.inset),"scrollOffset"in t&&l(1,c=t.scrollOffset),"height"in t&&l(2,r=t.height),"captionHeight"in t&&l(3,u=t.captionHeight),"$$scope"in t&&l(5,h=t.$$scope)},[o,c,r,u,i,h,a]}class T extends t{constructor(t){super(),s(this,t,R,G,l,{inset:0,scrollOffset:1,height:2,captionHeight:3})}}function k(t){let s,l;const n=t[2].default,a=p(n,t,t[1],null);return{c(){s=e("article"),a&&a.c(),this.h()},l(t){s=i(t,"ARTICLE",{class:!0});var l=$(s);a&&a.l(l),l.forEach(d),this.h()},h(){I(s,"class","svelte-14w4t5b")},m(n,e){o(n,s,e),a&&a.m(s,null),t[3](s),l=!0},p(t,[s]){a&&a.p&&2&s&&m(a,n,t,t[1],s,null,null)},i(t){l||(v(a,t),l=!0)},o(t){w(a,t),l=!1},d(l){l&&d(s),a&&a.d(l),t[3](null)}}}function M(t,s,l){let n,{$$slots:e={},$$scope:i}=s;return y(()=>{document&&document.querySelector("body > .page").scrollTo(0,0)}),t.$$set=t=>{"$$scope"in t&&l(1,i=t.$$scope)},[n,i,e,function(t){O[t?"unshift":"push"](()=>{n=t,l(0,n)})}]}class N extends t{constructor(t){super(),s(this,t,M,k,l,{})}}const P=t=>({}),S=t=>({});function q(t){let s,l;const n=t[2].caption,a=p(n,t,t[1],S);return{c(){s=e("figcaption"),a&&a.c(),this.h()},l(t){s=i(t,"FIGCAPTION",{class:!0});var l=$(s);a&&a.l(l),l.forEach(d),this.h()},h(){I(s,"class","svelte-tyk42")},m(t,n){o(t,s,n),a&&a.m(s,null),l=!0},p(t,s){a&&a.p&&2&s&&m(a,n,t,t[1],s,P,S)},i(t){l||(v(a,t),l=!0)},o(t){w(a,t),l=!1},d(t){t&&d(s),a&&a.d(t)}}}function z(t){let s,l,n;const a=t[2].default,h=p(a,t,t[1],null);let c=t[0].caption&&q(t);return{c(){s=e("figure"),h&&h.c(),l=x(),c&&c.c(),this.h()},l(t){s=i(t,"FIGURE",{class:!0});var n=$(s);h&&h.l(n),l=D(n),c&&c.l(n),n.forEach(d),this.h()},h(){I(s,"class","svelte-tyk42")},m(t,e){o(t,s,e),h&&h.m(s,null),E(s,l),c&&c.m(s,null),n=!0},p(t,[l]){h&&h.p&&2&l&&m(h,a,t,t[1],l,null,null),t[0].caption?c?(c.p(t,l),1&l&&v(c,1)):(c=q(t),c.c(),v(c,1),c.m(s,null)):c&&(H(),w(c,1,1,()=>{c=null}),j())},i(t){n||(v(h,t),v(c),n=!0)},o(t){w(h,t),w(c),n=!1},d(t){t&&d(s),h&&h.d(t),c&&c.d()}}}function B(t,s,l){let{$$slots:n={},$$scope:e}=s;const i=b(n);return t.$$set=t=>{"$$scope"in t&&l(1,e=t.$$scope)},[i,e,n]}class L extends t{constructor(t){super(),s(this,t,B,z,l,{})}}export{N as C,L as F,F as I,T as a};
