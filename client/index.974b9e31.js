import{S as e,i as t,s,c as n,e as r,a as o,b as l,d as i,f as a,n as c,g as $,h as d,u as f,t as u,j as h,k as g,o as p,l as m,m as v,p as w,q as E,r as y,v as x,w as I,x as b,y as S,z as k,A as L,B as A,C as U,D as T,E as j,F as R,G as O,H as P,I as B,J as M}from"./client.58257441.js";function C(e){let t,s,g,p;const m=e[9].default,v=n(m,e,e[8],null);return{c(){t=r("section"),v&&v.c(),this.h()},l(e){t=o(e,"SECTION",{id:!0,class:!0,style:!0});var s=l(t);v&&v.l(s),s.forEach(i),this.h()},h(){a(t,"id",s=e[2]||""),a(t,"class",g=c(e[2]||"")+" svelte-1wli347"),$(t,"--min-height",e[0]),$(t,"--padding-top",e[1])},m(s,n){d(s,t,n),v&&v.m(t,null),e[10](t),p=!0},p(e,[n]){v&&v.p&&256&n&&f(v,m,e,e[8],n,null,null),(!p||4&n&&s!==(s=e[2]||""))&&a(t,"id",s),(!p||4&n&&g!==(g=c(e[2]||"")+" svelte-1wli347"))&&a(t,"class",g),(!p||1&n)&&$(t,"--min-height",e[0]),(!p||2&n)&&$(t,"--padding-top",e[1])},i(e){p||(u(v,e),p=!0)},o(e){h(v,e),p=!1},d(s){s&&i(t),v&&v.d(s),e[10](null)}}}function D(e,t,s){const n=g();let r,o,l;function i(e){e.forEach(async e=>{e.isIntersecting&&(l=o.id,void 0!==l&&""!==l&&n("intersect",{id:l}))})}p(()=>{let e=d?o.querySelector(d):o;if(e)return r=new IntersectionObserver(i,{root:h,rootMargin:f,threshold:u}),r.observe(e),()=>{r.unobserve(e)}});let{minHeight:a="calc(100vh * (2/3))"}=t,{paddingTop:c="calc(100vh * (1/3))"}=t,{id:$=null}=t,{intersectSelector:d=null}=t,{intersectionMargin:f="-10% 0px -10% 0px"}=t,{intersectionThreshold:u=1}=t,{intersectionRoot:h=null}=t,{$$slots:v={},$$scope:w}=t;return e.$$set=e=>{"minHeight"in e&&s(0,a=e.minHeight),"paddingTop"in e&&s(1,c=e.paddingTop),"id"in e&&s(2,$=e.id),"intersectSelector"in e&&s(4,d=e.intersectSelector),"intersectionMargin"in e&&s(5,f=e.intersectionMargin),"intersectionThreshold"in e&&s(6,u=e.intersectionThreshold),"intersectionRoot"in e&&s(7,h=e.intersectionRoot),"$$scope"in e&&s(8,w=e.$$scope)},[a,c,$,o,d,f,u,h,w,v,function(e){m[e?"unshift":"push"](()=>{o=e,s(3,o)})}]}class N extends e{constructor(e){super(),t(this,e,D,C,s,{minHeight:0,paddingTop:1,id:2,intersectSelector:4,intersectionMargin:5,intersectionThreshold:6,intersectionRoot:7})}}function H(e){let t,s;const c=e[1].default,$=n(c,e,e[0],null);return{c(){t=r("p"),$&&$.c(),this.h()},l(e){t=o(e,"P",{id:!0,class:!0});var s=l(t);$&&$.l(s),s.forEach(i),this.h()},h(){a(t,"id","introduction"),a(t,"class","lede svelte-1cwuwlj")},m(e,n){d(e,t,n),$&&$.m(t,null),s=!0},p(e,[t]){$&&$.p&&1&t&&f($,c,e,e[0],t,null,null)},i(e){s||(u($,e),s=!0)},o(e){h($,e),s=!1},d(e){e&&i(t),$&&$.d(e)}}}function q(e,t,s){let{$$slots:n={},$$scope:r}=t;return e.$$set=e=>{"$$scope"in e&&s(0,r=e.$$scope)},[r,n]}class V extends e{constructor(e){super(),t(this,e,q,H,s,{})}}const X=e=>({}),z=e=>({});function G(e){let t,s;return{c(){t=r("h3"),s=v(e[0]),this.h()},l(n){t=o(n,"H3",{class:!0});var r=l(t);s=w(r,e[0]),r.forEach(i),this.h()},h(){a(t,"class","svelte-s45j22"),E(t,"logo",!!e[1])},m(e,n){d(e,t,n),y(t,s)},p(e,n){1&n&&x(s,e[0]),2&n&&E(t,"logo",!!e[1])},d(e){e&&i(t)}}}function W(e){let t,s;return{c(){t=r("a"),s=v("Read more"),this.h()},l(e){t=o(e,"A",{href:!0,rel:!0,"data-content":!0,class:!0});var n=l(t);s=w(n,"Read more"),n.forEach(i),this.h()},h(){a(t,"href",e[2]),a(t,"rel","prefetch"),a(t,"data-content","Read more"),a(t,"class","svelte-s45j22")},m(e,n){d(e,t,n),y(t,s)},p(e,s){4&s&&a(t,"href",e[2])},d(e){e&&i(t)}}}function F(e){let t,s,c,g,p,m,v,w=e[0]&&G(e);const E=e[4].byline,x=n(E,e,e[3],z),S=e[4].default,k=n(S,e,e[3],null);let L=!!e[2]&&W(e);return{c(){t=r("section"),w&&w.c(),s=I(),c=r("div"),x&&x.c(),g=I(),p=r("div"),k&&k.c(),m=I(),L&&L.c(),this.h()},l(e){t=o(e,"SECTION",{class:!0,style:!0});var n=l(t);w&&w.l(n),s=b(n),c=o(n,"DIV",{class:!0});var r=l(c);x&&x.l(r),r.forEach(i),g=b(n),p=o(n,"DIV",{class:!0});var a=l(p);k&&k.l(a),m=b(a),L&&L.l(a),a.forEach(i),n.forEach(i),this.h()},h(){a(c,"class","byline svelte-s45j22"),a(p,"class","description-body svelte-s45j22"),a(t,"class","description svelte-s45j22"),$(t,"--logo","url("+e[1]+")")},m(e,n){d(e,t,n),w&&w.m(t,null),y(t,s),y(t,c),x&&x.m(c,null),y(t,g),y(t,p),k&&k.m(p,null),y(p,m),L&&L.m(p,null),v=!0},p(e,[n]){e[0]?w?w.p(e,n):(w=G(e),w.c(),w.m(t,s)):w&&(w.d(1),w=null),x&&x.p&&8&n&&f(x,E,e,e[3],n,X,z),k&&k.p&&8&n&&f(k,S,e,e[3],n,null,null),e[2]?L?L.p(e,n):(L=W(e),L.c(),L.m(p,null)):L&&(L.d(1),L=null),(!v||2&n)&&$(t,"--logo","url("+e[1]+")")},i(e){v||(u(x,e),u(k,e),v=!0)},o(e){h(x,e),h(k,e),v=!1},d(e){e&&i(t),w&&w.d(),x&&x.d(e),k&&k.d(e),L&&L.d()}}}function J(e,t,s){let{title:n=null}=t,{logo:r=null}=t,{href:o=null}=t,{$$slots:l={},$$scope:i}=t;return e.$$set=e=>{"title"in e&&s(0,n=e.title),"logo"in e&&s(1,r=e.logo),"href"in e&&s(2,o=e.href),"$$scope"in e&&s(3,i=e.$$scope)},[n,r,o,i,l]}class K extends e{constructor(e){super(),t(this,e,J,F,s,{title:0,logo:1,href:2})}}const Q=e=>({}),Y=e=>({}),Z=e=>({}),_=e=>({});function ee(e){let t,s;return t=new K({props:{title:e[3],logo:e[4],href:e[2],$$slots:{default:[se],byline:[te]},$$scope:{ctx:e}}}),{c(){S(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){L(t,e,n),s=!0},p(e,s){const n={};8&s&&(n.title=e[3]),16&s&&(n.logo=e[4]),4&s&&(n.href=e[2]),64&s&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){s||(u(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){A(t,e)}}}function te(e){let t,s;const c=e[5].byline,$=n(c,e,e[6],_);return{c(){t=r("span"),$&&$.c(),this.h()},l(e){t=o(e,"SPAN",{slot:!0});var s=l(t);$&&$.l(s),s.forEach(i),this.h()},h(){a(t,"slot","byline")},m(e,n){d(e,t,n),$&&$.m(t,null),s=!0},p(e,t){$&&$.p&&64&t&&f($,c,e,e[6],t,Z,_)},i(e){s||(u($,e),s=!0)},o(e){h($,e),s=!1},d(e){e&&i(t),$&&$.d(e)}}}function se(e){let t,s;const r=e[5].description,o=n(r,e,e[6],Y);return{c(){t=I(),o&&o.c()},l(e){t=b(e),o&&o.l(e)},m(e,n){d(e,t,n),o&&o.m(e,n),s=!0},p(e,t){o&&o.p&&64&t&&f(o,r,e,e[6],t,Q,Y)},i(e){s||(u(o,e),s=!0)},o(e){h(o,e),s=!1},d(e){e&&i(t),o&&o.d(e)}}}function ne(e){let t,s,c,g;const p=e[5].default,m=n(p,e,e[6],null);let v=e[3]&&ee(e);return{c(){t=r("div"),m&&m.c(),s=I(),v&&v.c(),this.h()},l(e){t=o(e,"DIV",{class:!0,style:!0});var n=l(t);m&&m.l(n),s=b(n),v&&v.l(n),n.forEach(i),this.h()},h(){a(t,"class",c="entry "+e[0]+" svelte-a94q68"),$(t,"--entry-offset",e[1])},m(e,n){d(e,t,n),m&&m.m(t,null),y(t,s),v&&v.m(t,null),g=!0},p(e,[s]){m&&m.p&&64&s&&f(m,p,e,e[6],s,null,null),e[3]?v?(v.p(e,s),8&s&&u(v,1)):(v=ee(e),v.c(),u(v,1),v.m(t,null)):v&&(U(),h(v,1,1,()=>{v=null}),T()),(!g||1&s&&c!==(c="entry "+e[0]+" svelte-a94q68"))&&a(t,"class",c),(!g||2&s)&&$(t,"--entry-offset",e[1])},i(e){g||(u(m,e),u(v),g=!0)},o(e){h(m,e),h(v),g=!1},d(e){e&&i(t),m&&m.d(e),v&&v.d()}}}function re(e,t,s){let{class:n=null}=t,{entryOffset:r="0rem"}=t,{href:o=null}=t,{title:l=null}=t,{logo:i=null}=t,{$$slots:a={},$$scope:c}=t;return e.$$set=e=>{"class"in e&&s(0,n=e.class),"entryOffset"in e&&s(1,r=e.entryOffset),"href"in e&&s(2,o=e.href),"title"in e&&s(3,l=e.title),"logo"in e&&s(4,i=e.logo),"$$scope"in e&&s(6,c=e.$$scope)},[n,r,o,l,i,a,c]}class oe extends e{constructor(e){super(),t(this,e,re,ne,s,{class:0,entryOffset:1,href:2,title:3,logo:4})}}function le(e){let t,s,n,c,$,f,u,h,g,p,m,x,S,k,L,A,U,T,R,O,P,B,M,C,D;return{c(){t=r("ul"),s=r("li"),n=r("a"),c=r("span"),$=v("Osher Foundation"),f=I(),u=r("li"),h=r("a"),g=r("span"),p=v("Elim Springs"),m=I(),x=r("li"),S=r("a"),k=r("span"),L=v("Budgeting"),A=I(),U=r("li"),T=r("a"),R=r("span"),O=v("Boxes & Arrows"),P=I(),B=r("li"),M=r("a"),C=r("span"),D=v("Project X"),this.h()},l(e){t=o(e,"UL",{class:!0});var r=l(t);s=o(r,"LI",{class:!0});var a=l(s);n=o(a,"A",{href:!0,class:!0});var d=l(n);c=o(d,"SPAN",{class:!0});var v=l(c);$=w(v,"Osher Foundation"),v.forEach(i),d.forEach(i),a.forEach(i),f=b(r),u=o(r,"LI",{class:!0});var E=l(u);h=o(E,"A",{href:!0,class:!0});var y=l(h);g=o(y,"SPAN",{class:!0});var I=l(g);p=w(I,"Elim Springs"),I.forEach(i),y.forEach(i),E.forEach(i),m=b(r),x=o(r,"LI",{class:!0});var j=l(x);S=o(j,"A",{href:!0,class:!0});var N=l(S);k=o(N,"SPAN",{class:!0});var H=l(k);L=w(H,"Budgeting"),H.forEach(i),N.forEach(i),j.forEach(i),A=b(r),U=o(r,"LI",{class:!0});var q=l(U);T=o(q,"A",{href:!0,class:!0});var V=l(T);R=o(V,"SPAN",{class:!0});var X=l(R);O=w(X,"Boxes & Arrows"),X.forEach(i),V.forEach(i),q.forEach(i),P=b(r),B=o(r,"LI",{class:!0});var z=l(B);M=o(z,"A",{href:!0,class:!0});var G=l(M);C=o(G,"SPAN",{class:!0});var W=l(C);D=w(W,"Project X"),W.forEach(i),G.forEach(i),z.forEach(i),r.forEach(i),this.h()},h(){a(c,"class","svelte-g01wuk"),a(n,"href","#osher"),a(n,"class","svelte-g01wuk"),a(s,"class","svelte-g01wuk"),E(s,"active","osher"===e[0]),a(g,"class","svelte-g01wuk"),a(h,"href","#elimsprings"),a(h,"class","svelte-g01wuk"),a(u,"class","svelte-g01wuk"),E(u,"active","elimsprings"===e[0]),a(k,"class","svelte-g01wuk"),a(S,"href","#budgeting"),a(S,"class","svelte-g01wuk"),a(x,"class","svelte-g01wuk"),E(x,"active","budgeting"===e[0]),a(R,"class","svelte-g01wuk"),a(T,"href","#boxesandarrows"),a(T,"class","svelte-g01wuk"),a(U,"class","svelte-g01wuk"),E(U,"active","boxesandarrows"===e[0]),a(C,"class","svelte-g01wuk"),a(M,"href","#projectx"),a(M,"class","svelte-g01wuk"),a(B,"class","svelte-g01wuk"),E(B,"active","projectx"===e[0]),a(t,"class","svelte-g01wuk")},m(e,r){d(e,t,r),y(t,s),y(s,n),y(n,c),y(c,$),y(t,f),y(t,u),y(u,h),y(h,g),y(g,p),y(t,m),y(t,x),y(x,S),y(S,k),y(k,L),y(t,A),y(t,U),y(U,T),y(T,R),y(R,O),y(t,P),y(t,B),y(B,M),y(M,C),y(C,D)},p(e,[t]){1&t&&E(s,"active","osher"===e[0]),1&t&&E(u,"active","elimsprings"===e[0]),1&t&&E(x,"active","budgeting"===e[0]),1&t&&E(U,"active","boxesandarrows"===e[0]),1&t&&E(B,"active","projectx"===e[0])},i:j,o:j,d(e){e&&i(t)}}}function ie(e,t,s){let{currentSection:n=null}=t;return e.$$set=e=>{"currentSection"in e&&s(0,n=e.currentSection)},[n]}class ae extends e{constructor(e){super(),t(this,e,ie,le,s,{currentSection:0})}}const{document:ce,window:$e}=P;function de(e){let t,s,n,a,c,$;return{c(){t=r("strong"),s=v("Digital products,"),n=r("br"),a=v("\n            accessible and refined—"),c=r("br"),$=v("\n            users matter most.")},l(e){t=o(e,"STRONG",{});var r=l(t);s=w(r,"Digital products,"),r.forEach(i),n=o(e,"BR",{}),a=w(e,"\n            accessible and refined—"),c=o(e,"BR",{}),$=w(e,"\n            users matter most.")},m(e,r){d(e,t,r),y(t,s),d(e,n,r),d(e,a,r),d(e,c,r),d(e,$,r)},d(e){e&&i(t),e&&i(n),e&&i(a),e&&i(c),e&&i($)}}}function fe(e){let t,s;return t=new V({props:{$$slots:{default:[de]},$$scope:{ctx:e}}}),{c(){S(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){L(t,e,n),s=!0},p(e,s){const n={};4&s&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){s||(u(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){A(t,e)}}}function ue(e){let t,s;return t=new oe({props:{class:"introduction-entry",$$slots:{default:[fe]},$$scope:{ctx:e}}}),{c(){S(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){L(t,e,n),s=!0},p(e,s){const n={};4&s&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){s||(u(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){A(t,e)}}}function he(e){let t,s,n,c,$,f,u,h,g,p,m,E;return{c(){t=r("ul"),s=r("li"),n=v("Research"),c=I(),$=r("li"),f=v("IA"),u=I(),h=r("li"),g=v("Workflows"),p=I(),m=r("li"),E=v("UI and Visual Design"),this.h()},l(e){t=o(e,"UL",{slot:!0});var r=l(t);s=o(r,"LI",{});var a=l(s);n=w(a,"Research"),a.forEach(i),c=b(r),$=o(r,"LI",{});var d=l($);f=w(d,"IA"),d.forEach(i),u=b(r),h=o(r,"LI",{});var v=l(h);g=w(v,"Workflows"),v.forEach(i),p=b(r),m=o(r,"LI",{});var y=l(m);E=w(y,"UI and Visual Design"),y.forEach(i),r.forEach(i),this.h()},h(){a(t,"slot","byline")},m(e,r){d(e,t,r),y(t,s),y(s,n),y(t,c),y(t,$),y($,f),y(t,u),y(t,h),y(h,g),y(t,p),y(t,m),y(m,E)},d(e){e&&i(t)}}}function ge(e){let t,s;return{c(){t=r("p"),s=v("Class registration and student information system for Osher Lifelong Learning Institute at Colorado\n                    State University."),this.h()},l(e){t=o(e,"P",{slot:!0});var n=l(t);s=w(n,"Class registration and student information system for Osher Lifelong Learning Institute at Colorado\n                    State University."),n.forEach(i),this.h()},h(){a(t,"slot","description")},m(e,n){d(e,t,n),y(t,s)},d(e){e&&i(t)}}}function pe(e){let t;return{c(){t=I()},l(e){t=b(e)},m(e,s){d(e,t,s)},p:j,d(e){e&&i(t)}}}function me(e){let t,s;return t=new oe({props:{title:"Osher Lifelong Learning Institute",logo:"../osher-logo.svg",href:"/work/osher/",$$slots:{default:[pe],description:[ge],byline:[he]},$$scope:{ctx:e}}}),{c(){S(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){L(t,e,n),s=!0},p(e,s){const n={};4&s&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){s||(u(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){A(t,e)}}}function ve(e){let t,s,n,c,$,f;return{c(){t=r("ul"),s=r("li"),n=v("Brand"),c=I(),$=r("li"),f=v("UI and visual design"),this.h()},l(e){t=o(e,"UL",{slot:!0});var r=l(t);s=o(r,"LI",{});var a=l(s);n=w(a,"Brand"),a.forEach(i),c=b(r),$=o(r,"LI",{});var d=l($);f=w(d,"UI and visual design"),d.forEach(i),r.forEach(i),this.h()},h(){a(t,"slot","byline")},m(e,r){d(e,t,r),y(t,s),y(s,n),y(t,c),y(t,$),y($,f)},d(e){e&&i(t)}}}function we(e){let t,s;return{c(){t=r("p"),s=v("Marketing and e-commerce solution for event management and venue agency based in Düsseldorf,\n                    Germany."),this.h()},l(e){t=o(e,"P",{slot:!0});var n=l(t);s=w(n,"Marketing and e-commerce solution for event management and venue agency based in Düsseldorf,\n                    Germany."),n.forEach(i),this.h()},h(){a(t,"slot","description")},m(e,n){d(e,t,n),y(t,s)},d(e){e&&i(t)}}}function Ee(e){let t;return{c(){t=I()},l(e){t=b(e)},m(e,s){d(e,t,s)},p:j,d(e){e&&i(t)}}}function ye(e){let t,s;return t=new oe({props:{title:"Elim Springs",logo:"../elimsprings-logo.svg",href:"/work/elim-springs/",$$slots:{default:[Ee],description:[we],byline:[ve]},$$scope:{ctx:e}}}),{c(){S(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){L(t,e,n),s=!0},p(e,s){const n={};4&s&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){s||(u(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){A(t,e)}}}function xe(e){let t,s,n;return{c(){t=r("ul"),s=r("li"),n=v("UX, UI and visual design"),this.h()},l(e){t=o(e,"UL",{slot:!0});var r=l(t);s=o(r,"LI",{});var a=l(s);n=w(a,"UX, UI and visual design"),a.forEach(i),r.forEach(i),this.h()},h(){a(t,"slot","byline")},m(e,r){d(e,t,r),y(t,s),y(s,n)},d(e){e&&i(t)}}}function Ie(e){let t,s;return{c(){t=r("p"),s=v("Speculative user interface design for a personal finance and budgeting application for the web and\n                    desktop."),this.h()},l(e){t=o(e,"P",{slot:!0});var n=l(t);s=w(n,"Speculative user interface design for a personal finance and budgeting application for the web and\n                    desktop."),n.forEach(i),this.h()},h(){a(t,"slot","description")},m(e,n){d(e,t,n),y(t,s)},d(e){e&&i(t)}}}function be(e){let t;return{c(){t=I()},l(e){t=b(e)},m(e,s){d(e,t,s)},p:j,d(e){e&&i(t)}}}function Se(e){let t,s;return t=new oe({props:{title:"Budgeting",logo:"../budgeting-logo.svg",href:"/work/budgeting/",$$slots:{default:[be],description:[Ie],byline:[xe]},$$scope:{ctx:e}}}),{c(){S(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){L(t,e,n),s=!0},p(e,s){const n={};4&s&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){s||(u(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){A(t,e)}}}function ke(e){let t,s,n,c,$,f;return{c(){t=r("ul"),s=r("li"),n=v("IA"),c=I(),$=r("li"),f=v("UI and visual design"),this.h()},l(e){t=o(e,"UL",{slot:!0});var r=l(t);s=o(r,"LI",{});var a=l(s);n=w(a,"IA"),a.forEach(i),c=b(r),$=o(r,"LI",{});var d=l($);f=w(d,"UI and visual design"),d.forEach(i),r.forEach(i),this.h()},h(){a(t,"slot","byline")},m(e,r){d(e,t,r),y(t,s),y(s,n),y(t,c),y(t,$),y($,f)},d(e){e&&i(t)}}}function Le(e){let t,s;return{c(){t=r("p"),s=v("Award-winning site redesign and front-end implementation for the Boxes and Arrows magazine site."),this.h()},l(e){t=o(e,"P",{slot:!0});var n=l(t);s=w(n,"Award-winning site redesign and front-end implementation for the Boxes and Arrows magazine site."),n.forEach(i),this.h()},h(){a(t,"slot","description")},m(e,n){d(e,t,n),y(t,s)},d(e){e&&i(t)}}}function Ae(e){let t;return{c(){t=I()},l(e){t=b(e)},m(e,s){d(e,t,s)},p:j,d(e){e&&i(t)}}}function Ue(e){let t,s;return t=new oe({props:{title:"Boxes & Arrows",logo:"../boxesandarrows-logo.svg",href:"/work/boxes-and-arrows/",$$slots:{default:[Ae],description:[Le],byline:[ke]},$$scope:{ctx:e}}}),{c(){S(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){L(t,e,n),s=!0},p(e,s){const n={};4&s&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){s||(u(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){A(t,e)}}}function Te(e){let t,s,n,c,$,f,u,h,g;return{c(){t=r("ul"),s=r("li"),n=v("Research"),c=I(),$=r("li"),f=v("Workflows"),u=I(),h=r("li"),g=v("UI and visual design"),this.h()},l(e){t=o(e,"UL",{slot:!0});var r=l(t);s=o(r,"LI",{});var a=l(s);n=w(a,"Research"),a.forEach(i),c=b(r),$=o(r,"LI",{});var d=l($);f=w(d,"Workflows"),d.forEach(i),u=b(r),h=o(r,"LI",{});var p=l(h);g=w(p,"UI and visual design"),p.forEach(i),r.forEach(i),this.h()},h(){a(t,"slot","byline")},m(e,r){d(e,t,r),y(t,s),y(s,n),y(t,c),y(t,$),y($,f),y(t,u),y(t,h),y(h,g)},d(e){e&&i(t)}}}function je(e){let t,s;return{c(){t=r("p"),s=v("Content Relationship Manager, with outreach and call-scheduling for teams of remote volunteers distributed\n                    throughout the United States."),this.h()},l(e){t=o(e,"P",{slot:!0});var n=l(t);s=w(n,"Content Relationship Manager, with outreach and call-scheduling for teams of remote volunteers distributed\n                    throughout the United States."),n.forEach(i),this.h()},h(){a(t,"slot","description")},m(e,n){d(e,t,n),y(t,s)},d(e){e&&i(t)}}}function Re(e){let t;return{c(){t=I()},l(e){t=b(e)},m(e,s){d(e,t,s)},p:j,d(e){e&&i(t)}}}function Oe(e){let t,s;return t=new oe({props:{title:"Project X",href:"/work/project-x/",$$slots:{default:[Re],description:[je],byline:[Te]},$$scope:{ctx:e}}}),{c(){S(t.$$.fragment)},l(e){k(t.$$.fragment,e)},m(e,n){L(t,e,n),s=!0},p(e,s){const n={};4&s&&(n.$$scope={dirty:s,ctx:e}),t.$set(n)},i(e){s||(u(t.$$.fragment,e),s=!0)},o(e){h(t.$$.fragment,e),s=!1},d(e){A(t,e)}}}function Pe(e){let t,s,n,c,$,f,g,p,m,v,w,E,x,U,T,j,P,B,M,C;return n=new N({props:{id:"introduction",minHeight:"100vh",paddingTop:"0",intersectionMargin:"-80% 0px -20% 0px",intersectionThreshold:"0",$$slots:{default:[ue]},$$scope:{ctx:e}}}),n.$on("intersect",e[1]),f=new ae({props:{currentSection:e[0]}}),m=new N({props:{id:"osher",intersectSelector:".entry",$$slots:{default:[me]},$$scope:{ctx:e}}}),m.$on("intersect",e[1]),w=new N({props:{id:"elimsprings",intersectSelector:".entry",$$slots:{default:[ye]},$$scope:{ctx:e}}}),w.$on("intersect",e[1]),x=new N({props:{id:"budgeting",intersectSelector:".entry",$$slots:{default:[Se]},$$scope:{ctx:e}}}),x.$on("intersect",e[1]),T=new N({props:{id:"boxesandarrows",intersectSelector:".entry",$$slots:{default:[Ue]},$$scope:{ctx:e}}}),T.$on("intersect",e[1]),P=new N({props:{id:"projectx",intersectSelector:".entry",$$slots:{default:[Oe]},$$scope:{ctx:e}}}),P.$on("intersect",e[1]),{c(){t=r("meta"),s=I(),S(n.$$.fragment),c=I(),$=r("section"),S(f.$$.fragment),g=I(),p=r("section"),S(m.$$.fragment),v=I(),S(w.$$.fragment),E=I(),S(x.$$.fragment),U=I(),S(T.$$.fragment),j=I(),S(P.$$.fragment),this.h()},l(e){const r=R('[data-svelte="svelte-1orrqzx"]',ce.head);t=o(r,"META",{name:!0,content:!0}),r.forEach(i),s=b(e),k(n.$$.fragment,e),c=b(e),$=o(e,"SECTION",{class:!0});var a=l($);k(f.$$.fragment,a),g=b(a),p=o(a,"SECTION",{id:!0,class:!0});var d=l(p);k(m.$$.fragment,d),v=b(d),k(w.$$.fragment,d),E=b(d),k(x.$$.fragment,d),U=b(d),k(T.$$.fragment,d),j=b(d),k(P.$$.fragment,d),d.forEach(i),a.forEach(i),this.h()},h(){ce.title="Matt Titchener",a(t,"name","description"),a(t,"content","Matt Titchener’s UXD and visual design portfolio front page."),a(p,"id","entries"),a(p,"class","entries svelte-12yv6q7"),a($,"class","work svelte-12yv6q7")},m(e,r){y(ce.head,t),d(e,s,r),L(n,e,r),d(e,c,r),d(e,$,r),L(f,$,null),y($,g),y($,p),L(m,p,null),y(p,v),L(w,p,null),y(p,E),L(x,p,null),y(p,U),L(T,p,null),y(p,j),L(P,p,null),B=!0,M||(C=O($e,"hashchange",Be),M=!0)},p(e,[t]){const s={};4&t&&(s.$$scope={dirty:t,ctx:e}),n.$set(s);const r={};1&t&&(r.currentSection=e[0]),f.$set(r);const o={};4&t&&(o.$$scope={dirty:t,ctx:e}),m.$set(o);const l={};4&t&&(l.$$scope={dirty:t,ctx:e}),w.$set(l);const i={};4&t&&(i.$$scope={dirty:t,ctx:e}),x.$set(i);const a={};4&t&&(a.$$scope={dirty:t,ctx:e}),T.$set(a);const c={};4&t&&(c.$$scope={dirty:t,ctx:e}),P.$set(c)},i(e){B||(u(n.$$.fragment,e),u(f.$$.fragment,e),u(m.$$.fragment,e),u(w.$$.fragment,e),u(x.$$.fragment,e),u(T.$$.fragment,e),u(P.$$.fragment,e),B=!0)},o(e){h(n.$$.fragment,e),h(f.$$.fragment,e),h(m.$$.fragment,e),h(w.$$.fragment,e),h(x.$$.fragment,e),h(T.$$.fragment,e),h(P.$$.fragment,e),B=!1},d(e){i(t),e&&i(s),A(n,e),e&&i(c),e&&i($),A(f),A(m),A(w),A(x),A(T),A(P),M=!1,C()}}}function Be(){const e=window.location.hash.substring(1),t=document.getElementById(e);t instanceof HTMLElement&&t.scrollIntoView(!0)}function Me(e,t,s){let n=null;return p(Be),[n,async function(e){await B("#"+e.detail.id,{noscroll:!0,replaceState:!0}),s(0,n=e.detail.id),M.set(e.detail.id)}]}export default class extends e{constructor(e){super(),t(this,e,Me,Pe,s,{})}}
