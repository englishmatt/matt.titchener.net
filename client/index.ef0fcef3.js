import{S as e,i as t,s as n,c as s,e as r,a as o,b as l,d as i,f as a,n as c,g as $,h as d,u as f,t as h,j as u,k as p,o as g,l as m,m as v,p as y,q as E,r as w,v as x,w as b,x as I,y as S,z as L,A,B as U,C as T,D as R,E as k,F as O,G as P,H as B,I as M,J as j}from"./client.ea86fd1d.js";function C(e){let t,n,p,g;const m=e[9].default,v=s(m,e,e[8],null);return{c(){t=r("section"),v&&v.c(),this.h()},l(e){t=o(e,"SECTION",{id:!0,class:!0,style:!0});var n=l(t);v&&v.l(n),n.forEach(i),this.h()},h(){a(t,"id",n=e[2]||""),a(t,"class",p=c(e[2]||"")+" svelte-1wli347"),$(t,"--min-height",e[0]),$(t,"--padding-top",e[1])},m(n,s){d(n,t,s),v&&v.m(t,null),e[10](t),g=!0},p(e,[s]){v&&v.p&&256&s&&f(v,m,e,e[8],s,null,null),(!g||4&s&&n!==(n=e[2]||""))&&a(t,"id",n),(!g||4&s&&p!==(p=c(e[2]||"")+" svelte-1wli347"))&&a(t,"class",p),(!g||1&s)&&$(t,"--min-height",e[0]),(!g||2&s)&&$(t,"--padding-top",e[1])},i(e){g||(h(v,e),g=!0)},o(e){u(v,e),g=!1},d(n){n&&i(t),v&&v.d(n),e[10](null)}}}function D(e,t,n){const s=p();let r,o,l;function i(e){e.forEach(async e=>{e.isIntersecting&&(l=o.id,void 0!==l&&""!==l&&s("intersect",{id:l}))})}g(()=>{let e=d?o.querySelector(d):o;if(e)return r=new IntersectionObserver(i,{root:u,rootMargin:f,threshold:h}),r.observe(e),()=>{r.unobserve(e)}});let{minHeight:a="calc(100vh * (2/3))"}=t,{paddingTop:c="calc(100vh * (1/3))"}=t,{id:$=null}=t,{intersectSelector:d=null}=t,{intersectionMargin:f="-10% 0px -10% 0px"}=t,{intersectionThreshold:h=1}=t,{intersectionRoot:u=null}=t,{$$slots:v={},$$scope:y}=t;return e.$$set=e=>{"minHeight"in e&&n(0,a=e.minHeight),"paddingTop"in e&&n(1,c=e.paddingTop),"id"in e&&n(2,$=e.id),"intersectSelector"in e&&n(4,d=e.intersectSelector),"intersectionMargin"in e&&n(5,f=e.intersectionMargin),"intersectionThreshold"in e&&n(6,h=e.intersectionThreshold),"intersectionRoot"in e&&n(7,u=e.intersectionRoot),"$$scope"in e&&n(8,y=e.$$scope)},[a,c,$,o,d,f,h,u,y,v,function(e){m[e?"unshift":"push"](()=>{o=e,n(3,o)})}]}class N extends e{constructor(e){super(),t(this,e,D,C,n,{minHeight:0,paddingTop:1,id:2,intersectSelector:4,intersectionMargin:5,intersectionThreshold:6,intersectionRoot:7})}}function H(e){let t,n;const c=e[1].default,$=s(c,e,e[0],null);return{c(){t=r("p"),$&&$.c(),this.h()},l(e){t=o(e,"P",{id:!0,class:!0});var n=l(t);$&&$.l(n),n.forEach(i),this.h()},h(){a(t,"id","introduction"),a(t,"class","lede svelte-1cwuwlj")},m(e,s){d(e,t,s),$&&$.m(t,null),n=!0},p(e,[t]){$&&$.p&&1&t&&f($,c,e,e[0],t,null,null)},i(e){n||(h($,e),n=!0)},o(e){u($,e),n=!1},d(e){e&&i(t),$&&$.d(e)}}}function V(e,t,n){let{$$slots:s={},$$scope:r}=t;return e.$$set=e=>{"$$scope"in e&&n(0,r=e.$$scope)},[r,s]}class X extends e{constructor(e){super(),t(this,e,V,H,n,{})}}const q=e=>({}),z=e=>({});function G(e){let t,n;return{c(){t=r("h3"),n=v(e[0]),this.h()},l(s){t=o(s,"H3",{class:!0});var r=l(t);n=y(r,e[0]),r.forEach(i),this.h()},h(){a(t,"class","svelte-bg9ews"),E(t,"logo",!!e[1])},m(e,s){d(e,t,s),w(t,n)},p(e,s){1&s&&x(n,e[0]),2&s&&E(t,"logo",!!e[1])},d(e){e&&i(t)}}}function W(e){let t,n;return{c(){t=r("a"),n=v("Read more"),this.h()},l(e){t=o(e,"A",{href:!0,"data-content":!0,class:!0});var s=l(t);n=y(s,"Read more"),s.forEach(i),this.h()},h(){a(t,"href",e[2]),a(t,"data-content","Read more"),a(t,"class","svelte-bg9ews")},m(e,s){d(e,t,s),w(t,n)},p(e,n){4&n&&a(t,"href",e[2])},d(e){e&&i(t)}}}function F(e){let t,n,c,p,g,m,v,y=e[0]&&G(e);const E=e[4].byline,x=s(E,e,e[3],z),S=e[4].default,L=s(S,e,e[3],null);let A=!!e[2]&&W(e);return{c(){t=r("section"),y&&y.c(),n=b(),c=r("div"),x&&x.c(),p=b(),g=r("div"),L&&L.c(),m=b(),A&&A.c(),this.h()},l(e){t=o(e,"SECTION",{class:!0,style:!0});var s=l(t);y&&y.l(s),n=I(s),c=o(s,"DIV",{class:!0});var r=l(c);x&&x.l(r),r.forEach(i),p=I(s),g=o(s,"DIV",{class:!0});var a=l(g);L&&L.l(a),m=I(a),A&&A.l(a),a.forEach(i),s.forEach(i),this.h()},h(){a(c,"class","byline svelte-bg9ews"),a(g,"class","description-body svelte-bg9ews"),a(t,"class","description svelte-bg9ews"),$(t,"--logo","url("+e[1]+")")},m(e,s){d(e,t,s),y&&y.m(t,null),w(t,n),w(t,c),x&&x.m(c,null),w(t,p),w(t,g),L&&L.m(g,null),w(g,m),A&&A.m(g,null),v=!0},p(e,[s]){e[0]?y?y.p(e,s):(y=G(e),y.c(),y.m(t,n)):y&&(y.d(1),y=null),x&&x.p&&8&s&&f(x,E,e,e[3],s,q,z),L&&L.p&&8&s&&f(L,S,e,e[3],s,null,null),e[2]?A?A.p(e,s):(A=W(e),A.c(),A.m(g,null)):A&&(A.d(1),A=null),(!v||2&s)&&$(t,"--logo","url("+e[1]+")")},i(e){v||(h(x,e),h(L,e),v=!0)},o(e){u(x,e),u(L,e),v=!1},d(e){e&&i(t),y&&y.d(),x&&x.d(e),L&&L.d(e),A&&A.d()}}}function J(e,t,n){let{title:s=null}=t,{logo:r=null}=t,{href:o=null}=t,{$$slots:l={},$$scope:i}=t;return e.$$set=e=>{"title"in e&&n(0,s=e.title),"logo"in e&&n(1,r=e.logo),"href"in e&&n(2,o=e.href),"$$scope"in e&&n(3,i=e.$$scope)},[s,r,o,i,l]}class K extends e{constructor(e){super(),t(this,e,J,F,n,{title:0,logo:1,href:2})}}const Q=e=>({}),Y=e=>({}),Z=e=>({}),_=e=>({});function ee(e){let t,n;return t=new K({props:{title:e[3],logo:e[4],href:e[2],$$slots:{default:[ne],byline:[te]},$$scope:{ctx:e}}}),{c(){S(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},p(e,n){const s={};8&n&&(s.title=e[3]),16&n&&(s.logo=e[4]),4&n&&(s.href=e[2]),64&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){u(t.$$.fragment,e),n=!1},d(e){U(t,e)}}}function te(e){let t,n;const c=e[5].byline,$=s(c,e,e[6],_);return{c(){t=r("span"),$&&$.c(),this.h()},l(e){t=o(e,"SPAN",{slot:!0});var n=l(t);$&&$.l(n),n.forEach(i),this.h()},h(){a(t,"slot","byline")},m(e,s){d(e,t,s),$&&$.m(t,null),n=!0},p(e,t){$&&$.p&&64&t&&f($,c,e,e[6],t,Z,_)},i(e){n||(h($,e),n=!0)},o(e){u($,e),n=!1},d(e){e&&i(t),$&&$.d(e)}}}function ne(e){let t,n;const r=e[5].description,o=s(r,e,e[6],Y);return{c(){t=b(),o&&o.c()},l(e){t=I(e),o&&o.l(e)},m(e,s){d(e,t,s),o&&o.m(e,s),n=!0},p(e,t){o&&o.p&&64&t&&f(o,r,e,e[6],t,Q,Y)},i(e){n||(h(o,e),n=!0)},o(e){u(o,e),n=!1},d(e){e&&i(t),o&&o.d(e)}}}function se(e){let t,n,c,p;const g=e[5].default,m=s(g,e,e[6],null);let v=e[3]&&ee(e);return{c(){t=r("div"),m&&m.c(),n=b(),v&&v.c(),this.h()},l(e){t=o(e,"DIV",{class:!0,style:!0});var s=l(t);m&&m.l(s),n=I(s),v&&v.l(s),s.forEach(i),this.h()},h(){a(t,"class",c="entry "+e[0]+" svelte-a94q68"),$(t,"--entry-offset",e[1])},m(e,s){d(e,t,s),m&&m.m(t,null),w(t,n),v&&v.m(t,null),p=!0},p(e,[n]){m&&m.p&&64&n&&f(m,g,e,e[6],n,null,null),e[3]?v?(v.p(e,n),8&n&&h(v,1)):(v=ee(e),v.c(),h(v,1),v.m(t,null)):v&&(T(),u(v,1,1,()=>{v=null}),R()),(!p||1&n&&c!==(c="entry "+e[0]+" svelte-a94q68"))&&a(t,"class",c),(!p||2&n)&&$(t,"--entry-offset",e[1])},i(e){p||(h(m,e),h(v),p=!0)},o(e){u(m,e),u(v),p=!1},d(e){e&&i(t),m&&m.d(e),v&&v.d()}}}function re(e,t,n){let{class:s=null}=t,{entryOffset:r="0rem"}=t,{href:o=null}=t,{title:l=null}=t,{logo:i=null}=t,{$$slots:a={},$$scope:c}=t;return e.$$set=e=>{"class"in e&&n(0,s=e.class),"entryOffset"in e&&n(1,r=e.entryOffset),"href"in e&&n(2,o=e.href),"title"in e&&n(3,l=e.title),"logo"in e&&n(4,i=e.logo),"$$scope"in e&&n(6,c=e.$$scope)},[s,r,o,l,i,a,c]}class oe extends e{constructor(e){super(),t(this,e,re,se,n,{class:0,entryOffset:1,href:2,title:3,logo:4})}}function le(e){let t,n,s,c,$,f,h,u,p,g,m,x,S,L,A,U,T,R,O,P,B,M,j,C,D;return{c(){t=r("ul"),n=r("li"),s=r("a"),c=r("span"),$=v("Osher Foundation"),f=b(),h=r("li"),u=r("a"),p=r("span"),g=v("Elim Springs"),m=b(),x=r("li"),S=r("a"),L=r("span"),A=v("Budgeting"),U=b(),T=r("li"),R=r("a"),O=r("span"),P=v("Boxes & Arrows"),B=b(),M=r("li"),j=r("a"),C=r("span"),D=v("Project X"),this.h()},l(e){t=o(e,"UL",{class:!0});var r=l(t);n=o(r,"LI",{class:!0});var a=l(n);s=o(a,"A",{href:!0,class:!0});var d=l(s);c=o(d,"SPAN",{class:!0});var v=l(c);$=y(v,"Osher Foundation"),v.forEach(i),d.forEach(i),a.forEach(i),f=I(r),h=o(r,"LI",{class:!0});var E=l(h);u=o(E,"A",{href:!0,class:!0});var w=l(u);p=o(w,"SPAN",{class:!0});var b=l(p);g=y(b,"Elim Springs"),b.forEach(i),w.forEach(i),E.forEach(i),m=I(r),x=o(r,"LI",{class:!0});var k=l(x);S=o(k,"A",{href:!0,class:!0});var N=l(S);L=o(N,"SPAN",{class:!0});var H=l(L);A=y(H,"Budgeting"),H.forEach(i),N.forEach(i),k.forEach(i),U=I(r),T=o(r,"LI",{class:!0});var V=l(T);R=o(V,"A",{href:!0,class:!0});var X=l(R);O=o(X,"SPAN",{class:!0});var q=l(O);P=y(q,"Boxes & Arrows"),q.forEach(i),X.forEach(i),V.forEach(i),B=I(r),M=o(r,"LI",{class:!0});var z=l(M);j=o(z,"A",{href:!0,class:!0});var G=l(j);C=o(G,"SPAN",{class:!0});var W=l(C);D=y(W,"Project X"),W.forEach(i),G.forEach(i),z.forEach(i),r.forEach(i),this.h()},h(){a(c,"class","svelte-42cyp1"),a(s,"href","#osher"),a(s,"class","svelte-42cyp1"),a(n,"class","svelte-42cyp1"),E(n,"active","osher"===e[0]),a(p,"class","svelte-42cyp1"),a(u,"href","#elimsprings"),a(u,"class","svelte-42cyp1"),a(h,"class","svelte-42cyp1"),E(h,"active","elimsprings"===e[0]),a(L,"class","svelte-42cyp1"),a(S,"href","#budgeting"),a(S,"class","svelte-42cyp1"),a(x,"class","svelte-42cyp1"),E(x,"active","budgeting"===e[0]),a(O,"class","svelte-42cyp1"),a(R,"href","#boxesandarrows"),a(R,"class","svelte-42cyp1"),a(T,"class","svelte-42cyp1"),E(T,"active","boxesandarrows"===e[0]),a(C,"class","svelte-42cyp1"),a(j,"href","#projectx"),a(j,"class","svelte-42cyp1"),a(M,"class","svelte-42cyp1"),E(M,"active","projectx"===e[0]),a(t,"class","svelte-42cyp1")},m(e,r){d(e,t,r),w(t,n),w(n,s),w(s,c),w(c,$),w(t,f),w(t,h),w(h,u),w(u,p),w(p,g),w(t,m),w(t,x),w(x,S),w(S,L),w(L,A),w(t,U),w(t,T),w(T,R),w(R,O),w(O,P),w(t,B),w(t,M),w(M,j),w(j,C),w(C,D)},p(e,[t]){1&t&&E(n,"active","osher"===e[0]),1&t&&E(h,"active","elimsprings"===e[0]),1&t&&E(x,"active","budgeting"===e[0]),1&t&&E(T,"active","boxesandarrows"===e[0]),1&t&&E(M,"active","projectx"===e[0])},i:k,o:k,d(e){e&&i(t)}}}function ie(e,t,n){let{currentSection:s=null}=t;return e.$$set=e=>{"currentSection"in e&&n(0,s=e.currentSection)},[s]}class ae extends e{constructor(e){super(),t(this,e,ie,le,n,{currentSection:0})}}const{document:ce,window:$e}=B;function de(e){let t,n,s,a,c,$;return{c(){t=r("strong"),n=v("Digital products,"),s=r("br"),a=v("\n            accessible and refined—"),c=r("br"),$=v("\n            users matter most.")},l(e){t=o(e,"STRONG",{});var r=l(t);n=y(r,"Digital products,"),r.forEach(i),s=o(e,"BR",{}),a=y(e,"\n            accessible and refined—"),c=o(e,"BR",{}),$=y(e,"\n            users matter most.")},m(e,r){d(e,t,r),w(t,n),d(e,s,r),d(e,a,r),d(e,c,r),d(e,$,r)},d(e){e&&i(t),e&&i(s),e&&i(a),e&&i(c),e&&i($)}}}function fe(e){let t,n;return t=new X({props:{$$slots:{default:[de]},$$scope:{ctx:e}}}),{c(){S(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},p(e,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){u(t.$$.fragment,e),n=!1},d(e){U(t,e)}}}function he(e){let t,n;return t=new oe({props:{class:"introduction-entry",$$slots:{default:[fe]},$$scope:{ctx:e}}}),{c(){S(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},p(e,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){u(t.$$.fragment,e),n=!1},d(e){U(t,e)}}}function ue(e){let t,n,s,c,$,f,h,u,p,g,m,E;return{c(){t=r("ul"),n=r("li"),s=v("Research"),c=b(),$=r("li"),f=v("IA"),h=b(),u=r("li"),p=v("Workflows"),g=b(),m=r("li"),E=v("UI and Visual Design"),this.h()},l(e){t=o(e,"UL",{slot:!0});var r=l(t);n=o(r,"LI",{});var a=l(n);s=y(a,"Research"),a.forEach(i),c=I(r),$=o(r,"LI",{});var d=l($);f=y(d,"IA"),d.forEach(i),h=I(r),u=o(r,"LI",{});var v=l(u);p=y(v,"Workflows"),v.forEach(i),g=I(r),m=o(r,"LI",{});var w=l(m);E=y(w,"UI and Visual Design"),w.forEach(i),r.forEach(i),this.h()},h(){a(t,"slot","byline")},m(e,r){d(e,t,r),w(t,n),w(n,s),w(t,c),w(t,$),w($,f),w(t,h),w(t,u),w(u,p),w(t,g),w(t,m),w(m,E)},d(e){e&&i(t)}}}function pe(e){let t,n;return{c(){t=r("p"),n=v("Class registration and student information system for Osher Lifelong Learning Institute at Colorado\n                    State University."),this.h()},l(e){t=o(e,"P",{slot:!0});var s=l(t);n=y(s,"Class registration and student information system for Osher Lifelong Learning Institute at Colorado\n                    State University."),s.forEach(i),this.h()},h(){a(t,"slot","description")},m(e,s){d(e,t,s),w(t,n)},d(e){e&&i(t)}}}function ge(e){let t;return{c(){t=b()},l(e){t=I(e)},m(e,n){d(e,t,n)},p:k,d(e){e&&i(t)}}}function me(e){let t,n;return t=new oe({props:{title:"Osher Lifelong Learning Institute",logo:"../osher-logo.svg",href:"/work/osher",$$slots:{default:[ge],description:[pe],byline:[ue]},$$scope:{ctx:e}}}),{c(){S(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},p(e,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){u(t.$$.fragment,e),n=!1},d(e){U(t,e)}}}function ve(e){let t,n,s,c,$,f;return{c(){t=r("ul"),n=r("li"),s=v("Brand"),c=b(),$=r("li"),f=v("UI and visual design"),this.h()},l(e){t=o(e,"UL",{slot:!0});var r=l(t);n=o(r,"LI",{});var a=l(n);s=y(a,"Brand"),a.forEach(i),c=I(r),$=o(r,"LI",{});var d=l($);f=y(d,"UI and visual design"),d.forEach(i),r.forEach(i),this.h()},h(){a(t,"slot","byline")},m(e,r){d(e,t,r),w(t,n),w(n,s),w(t,c),w(t,$),w($,f)},d(e){e&&i(t)}}}function ye(e){let t,n;return{c(){t=r("p"),n=v("Marketing and e-commerce experience for event management and venue agency baed in Düsseldorf,\n                    Germany."),this.h()},l(e){t=o(e,"P",{slot:!0});var s=l(t);n=y(s,"Marketing and e-commerce experience for event management and venue agency baed in Düsseldorf,\n                    Germany."),s.forEach(i),this.h()},h(){a(t,"slot","description")},m(e,s){d(e,t,s),w(t,n)},d(e){e&&i(t)}}}function Ee(e){let t;return{c(){t=b()},l(e){t=I(e)},m(e,n){d(e,t,n)},p:k,d(e){e&&i(t)}}}function we(e){let t,n;return t=new oe({props:{title:"Elim Springs",logo:"../elimsprings-logo.svg",href:"/work/elim-springs",$$slots:{default:[Ee],description:[ye],byline:[ve]},$$scope:{ctx:e}}}),{c(){S(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},p(e,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){u(t.$$.fragment,e),n=!1},d(e){U(t,e)}}}function xe(e){let t,n,s;return{c(){t=r("ul"),n=r("li"),s=v("UX, UI and visual design"),this.h()},l(e){t=o(e,"UL",{slot:!0});var r=l(t);n=o(r,"LI",{});var a=l(n);s=y(a,"UX, UI and visual design"),a.forEach(i),r.forEach(i),this.h()},h(){a(t,"slot","byline")},m(e,r){d(e,t,r),w(t,n),w(n,s)},d(e){e&&i(t)}}}function be(e){let t,n;return{c(){t=r("p"),n=v("Speculative user interface design for a personal finance and budgeting application for the web and\n                    desktop."),this.h()},l(e){t=o(e,"P",{slot:!0});var s=l(t);n=y(s,"Speculative user interface design for a personal finance and budgeting application for the web and\n                    desktop."),s.forEach(i),this.h()},h(){a(t,"slot","description")},m(e,s){d(e,t,s),w(t,n)},d(e){e&&i(t)}}}function Ie(e){let t;return{c(){t=b()},l(e){t=I(e)},m(e,n){d(e,t,n)},p:k,d(e){e&&i(t)}}}function Se(e){let t,n;return t=new oe({props:{title:"Budgeting",logo:"../budgeting-logo.svg",href:"/work/budgeting",$$slots:{default:[Ie],description:[be],byline:[xe]},$$scope:{ctx:e}}}),{c(){S(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},p(e,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){u(t.$$.fragment,e),n=!1},d(e){U(t,e)}}}function Le(e){let t,n,s,c,$,f;return{c(){t=r("ul"),n=r("li"),s=v("IA"),c=b(),$=r("li"),f=v("UI and visual design"),this.h()},l(e){t=o(e,"UL",{slot:!0});var r=l(t);n=o(r,"LI",{});var a=l(n);s=y(a,"IA"),a.forEach(i),c=I(r),$=o(r,"LI",{});var d=l($);f=y(d,"UI and visual design"),d.forEach(i),r.forEach(i),this.h()},h(){a(t,"slot","byline")},m(e,r){d(e,t,r),w(t,n),w(n,s),w(t,c),w(t,$),w($,f)},d(e){e&&i(t)}}}function Ae(e){let t,n;return{c(){t=r("p"),n=v("Award-winning site redesign and front-end implementation for the Boxes and Arrows magazine site."),this.h()},l(e){t=o(e,"P",{slot:!0});var s=l(t);n=y(s,"Award-winning site redesign and front-end implementation for the Boxes and Arrows magazine site."),s.forEach(i),this.h()},h(){a(t,"slot","description")},m(e,s){d(e,t,s),w(t,n)},d(e){e&&i(t)}}}function Ue(e){let t;return{c(){t=b()},l(e){t=I(e)},m(e,n){d(e,t,n)},p:k,d(e){e&&i(t)}}}function Te(e){let t,n;return t=new oe({props:{title:"Boxes & Arrows",logo:"../boxesandarrows-logo.svg",href:"/work/boxes-and-arrows",$$slots:{default:[Ue],description:[Ae],byline:[Le]},$$scope:{ctx:e}}}),{c(){S(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},p(e,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){u(t.$$.fragment,e),n=!1},d(e){U(t,e)}}}function Re(e){let t,n,s,c,$,f,h,u,p;return{c(){t=r("ul"),n=r("li"),s=v("Research"),c=b(),$=r("li"),f=v("Workflows"),h=b(),u=r("li"),p=v("UI and visual design"),this.h()},l(e){t=o(e,"UL",{slot:!0});var r=l(t);n=o(r,"LI",{});var a=l(n);s=y(a,"Research"),a.forEach(i),c=I(r),$=o(r,"LI",{});var d=l($);f=y(d,"Workflows"),d.forEach(i),h=I(r),u=o(r,"LI",{});var g=l(u);p=y(g,"UI and visual design"),g.forEach(i),r.forEach(i),this.h()},h(){a(t,"slot","byline")},m(e,r){d(e,t,r),w(t,n),w(n,s),w(t,c),w(t,$),w($,f),w(t,h),w(t,u),w(u,p)},d(e){e&&i(t)}}}function ke(e){let t,n;return{c(){t=r("p"),n=v("Content Relationship Manager, with outreach and call-scheduling for teams of remote volunteers distributed\n                    throughout the United States."),this.h()},l(e){t=o(e,"P",{slot:!0});var s=l(t);n=y(s,"Content Relationship Manager, with outreach and call-scheduling for teams of remote volunteers distributed\n                    throughout the United States."),s.forEach(i),this.h()},h(){a(t,"slot","description")},m(e,s){d(e,t,s),w(t,n)},d(e){e&&i(t)}}}function Oe(e){let t;return{c(){t=b()},l(e){t=I(e)},m(e,n){d(e,t,n)},p:k,d(e){e&&i(t)}}}function Pe(e){let t,n;return t=new oe({props:{title:"Project X",href:"/work/project-x",$$slots:{default:[Oe],description:[ke],byline:[Re]},$$scope:{ctx:e}}}),{c(){S(t.$$.fragment)},l(e){L(t.$$.fragment,e)},m(e,s){A(t,e,s),n=!0},p(e,n){const s={};4&n&&(s.$$scope={dirty:n,ctx:e}),t.$set(s)},i(e){n||(h(t.$$.fragment,e),n=!0)},o(e){u(t.$$.fragment,e),n=!1},d(e){U(t,e)}}}function Be(e){let t,n,s,c,$,f,p,g,m,v,y,E,x,T,R,k,B,M,j,C;return s=new N({props:{id:"introduction",minHeight:"100vh",paddingTop:"0",intersectionMargin:"-80% 0px -20% 0px",intersectionThreshold:"0",$$slots:{default:[he]},$$scope:{ctx:e}}}),s.$on("intersect",e[1]),f=new ae({props:{currentSection:e[0]}}),m=new N({props:{id:"osher",intersectSelector:".entry",$$slots:{default:[me]},$$scope:{ctx:e}}}),m.$on("intersect",e[1]),y=new N({props:{id:"elimsprings",intersectSelector:".entry",$$slots:{default:[we]},$$scope:{ctx:e}}}),y.$on("intersect",e[1]),x=new N({props:{id:"budgeting",intersectSelector:".entry",$$slots:{default:[Se]},$$scope:{ctx:e}}}),x.$on("intersect",e[1]),R=new N({props:{id:"boxesandarrows",intersectSelector:".entry",$$slots:{default:[Te]},$$scope:{ctx:e}}}),R.$on("intersect",e[1]),B=new N({props:{id:"projectx",intersectSelector:".entry",$$slots:{default:[Pe]},$$scope:{ctx:e}}}),B.$on("intersect",e[1]),{c(){t=r("meta"),n=b(),S(s.$$.fragment),c=b(),$=r("section"),S(f.$$.fragment),p=b(),g=r("section"),S(m.$$.fragment),v=b(),S(y.$$.fragment),E=b(),S(x.$$.fragment),T=b(),S(R.$$.fragment),k=b(),S(B.$$.fragment),this.h()},l(e){const r=O('[data-svelte="svelte-1orrqzx"]',ce.head);t=o(r,"META",{name:!0,content:!0}),r.forEach(i),n=I(e),L(s.$$.fragment,e),c=I(e),$=o(e,"SECTION",{class:!0});var a=l($);L(f.$$.fragment,a),p=I(a),g=o(a,"SECTION",{id:!0,class:!0});var d=l(g);L(m.$$.fragment,d),v=I(d),L(y.$$.fragment,d),E=I(d),L(x.$$.fragment,d),T=I(d),L(R.$$.fragment,d),k=I(d),L(B.$$.fragment,d),d.forEach(i),a.forEach(i),this.h()},h(){ce.title="Matt Titchener",a(t,"name","description"),a(t,"content","Matt Titchener’s UXD and visual design portfolio front page."),a(g,"id","entries"),a(g,"class","entries svelte-ipx5r2"),a($,"class","work svelte-ipx5r2")},m(e,r){w(ce.head,t),d(e,n,r),A(s,e,r),d(e,c,r),d(e,$,r),A(f,$,null),w($,p),w($,g),A(m,g,null),w(g,v),A(y,g,null),w(g,E),A(x,g,null),w(g,T),A(R,g,null),w(g,k),A(B,g,null),M=!0,j||(C=P($e,"hashchange",Me),j=!0)},p(e,[t]){const n={};4&t&&(n.$$scope={dirty:t,ctx:e}),s.$set(n);const r={};1&t&&(r.currentSection=e[0]),f.$set(r);const o={};4&t&&(o.$$scope={dirty:t,ctx:e}),m.$set(o);const l={};4&t&&(l.$$scope={dirty:t,ctx:e}),y.$set(l);const i={};4&t&&(i.$$scope={dirty:t,ctx:e}),x.$set(i);const a={};4&t&&(a.$$scope={dirty:t,ctx:e}),R.$set(a);const c={};4&t&&(c.$$scope={dirty:t,ctx:e}),B.$set(c)},i(e){M||(h(s.$$.fragment,e),h(f.$$.fragment,e),h(m.$$.fragment,e),h(y.$$.fragment,e),h(x.$$.fragment,e),h(R.$$.fragment,e),h(B.$$.fragment,e),M=!0)},o(e){u(s.$$.fragment,e),u(f.$$.fragment,e),u(m.$$.fragment,e),u(y.$$.fragment,e),u(x.$$.fragment,e),u(R.$$.fragment,e),u(B.$$.fragment,e),M=!1},d(e){i(t),e&&i(n),U(s,e),e&&i(c),e&&i($),U(f),U(m),U(y),U(x),U(R),U(B),j=!1,C()}}}function Me(){const e=window.location.hash.substring(1),t=document.getElementById(e);t instanceof HTMLElement&&t.scrollIntoView(!0)}function je(e,t,n){let s=null;return g(Me),[s,async function(e){await M("#"+e.detail.id,{noscroll:!0,replaceState:!0}),n(0,s=e.detail.id),j.set(e.detail.id)}]}export default class extends e{constructor(e){super(),t(this,e,je,Be,n,{})}}
