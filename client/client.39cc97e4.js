function t(){}function e(t,e){for(const n in e)t[n]=e[n];return t}function n(t){return t()}function r(){return Object.create(null)}function s(t){t.forEach(n)}function o(t){return"function"==typeof t}function a(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function c(e,n,r){e.$$.on_destroy.push(function(e,...n){if(null==e)return t;const r=e.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function i(t,e,n,r){if(t){const s=l(t,e,n,r);return t[0](s)}}function l(t,n,r,s){return t[1]&&s?e(r.ctx.slice(),t[1](s(n))):r.ctx}function u(t,e,n,r,s,o,a){const c=function(t,e,n,r){if(t[2]&&r){const s=t[2](r(n));if(void 0===e.dirty)return s;if("object"==typeof s){const t=[],n=Math.max(e.dirty.length,s.length);for(let r=0;r<n;r+=1)t[r]=e.dirty[r]|s[r];return t}return e.dirty|s}return e.dirty}(e,r,s,o);if(c){const s=l(e,n,r,a);t.p(s,c)}}function f(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function h(t,e){const n={};e=new Set(e);for(const r in t)e.has(r)||"$"===r[0]||(n[r]=t[r]);return n}function p(t){return null==t?"":t}function d(e){return e&&o(e.destroy)?e.destroy:t}function m(t,e){t.appendChild(e)}function g(t,e,n){t.insertBefore(e,n||null)}function $(t){t.parentNode.removeChild(t)}function v(t){return document.createElement(t)}function y(t){return document.createTextNode(t)}function b(){return y(" ")}function w(){return y("")}function E(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function _(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function x(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)null==e[r]?t.removeAttribute(r):"style"===r?t.style.cssText=e[r]:"__value"===r?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:_(t,r,e[r])}function S(t){return Array.from(t.childNodes)}function k(t,e,n,r){for(let r=0;r<t.length;r+=1){const s=t[r];if(s.nodeName===e){let e=0;const o=[];for(;e<s.attributes.length;){const t=s.attributes[e++];n[t.name]||o.push(t.name)}for(let t=0;t<o.length;t++)s.removeAttribute(o[t]);return t.splice(r,1)[0]}}return r?function(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}(e):v(e)}function A(t,e){for(let n=0;n<t.length;n+=1){const r=t[n];if(3===r.nodeType)return r.data=""+e,t.splice(n,1)[0]}return y(e)}function L(t){return A(t," ")}function P(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function C(t,e,n,r){t.style.setProperty(e,n,r?"important":"")}function j(t,e,n){t.classList[n?"add":"remove"](e)}function R(t,e=document.body){return Array.from(e.querySelectorAll(t))}class N{constructor(t=null){this.a=t,this.e=this.n=null}m(t,e,n=null){this.e||(this.e=v(e.nodeName),this.t=e,this.h(t)),this.i(n)}h(t){this.e.innerHTML=t,this.n=Array.from(this.e.childNodes)}i(t){for(let e=0;e<this.n.length;e+=1)g(this.t,this.n[e],t)}p(t){this.d(),this.h(t),this.i(this.a)}d(){this.n.forEach($)}}let I;function O(t){I=t}function D(){if(!I)throw new Error("Function called outside component initialization");return I}function H(t){D().$$.on_mount.push(t)}function U(t){D().$$.after_update.push(t)}function q(){const t=D();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const s=function(t,e){const n=document.createEvent("CustomEvent");return n.initCustomEvent(t,!1,!1,e),n}(e,n);r.slice().forEach(e=>{e.call(t,s)})}}}const M=[],V=[],T=[],z=[],F=Promise.resolve();let B=!1;function J(){B||(B=!0,F.then(G))}function K(t){T.push(t)}let W=!1;const Y=new Set;function G(){if(!W){W=!0;do{for(let t=0;t<M.length;t+=1){const e=M[t];O(e),X(e.$$)}for(M.length=0;V.length;)V.pop()();for(let t=0;t<T.length;t+=1){const e=T[t];Y.has(e)||(Y.add(e),e())}T.length=0}while(M.length);for(;z.length;)z.pop()();B=!1,W=!1,Y.clear()}}function X(t){if(null!==t.fragment){t.update(),s(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(K)}}const Q=new Set;let Z;function tt(){Z={r:0,c:[],p:Z}}function et(){Z.r||s(Z.c),Z=Z.p}function nt(t,e){t&&t.i&&(Q.delete(t),t.i(e))}function rt(t,e,n,r){if(t&&t.o){if(Q.has(t))return;Q.add(t),Z.c.push(()=>{Q.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}const st="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function ot(t,e){const n={},r={},s={$$scope:1};let o=t.length;for(;o--;){const a=t[o],c=e[o];if(c){for(const t in a)t in c||(r[t]=1);for(const t in c)s[t]||(n[t]=c[t],s[t]=1);t[o]=c}else for(const t in a)s[t]=1}for(const t in r)t in n||(n[t]=void 0);return n}function at(t){return"object"==typeof t&&null!==t?t:{}}function ct(t){t&&t.c()}function it(t,e){t&&t.l(e)}function lt(t,e,r){const{fragment:a,on_mount:c,on_destroy:i,after_update:l}=t.$$;a&&a.m(e,r),K(()=>{const e=c.map(n).filter(o);i?i.push(...e):s(e),t.$$.on_mount=[]}),l.forEach(K)}function ut(t,e){const n=t.$$;null!==n.fragment&&(s(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ft(e,n,o,a,c,i,l=[-1]){const u=I;O(e);const f=n.props||{},h=e.$$={fragment:null,ctx:null,props:i,update:t,not_equal:c,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:r(),dirty:l,skip_bound:!1};let p=!1;if(h.ctx=o?o(e,f,(t,n,...r)=>{const s=r.length?r[0]:n;return h.ctx&&c(h.ctx[t],h.ctx[t]=s)&&(!h.skip_bound&&h.bound[t]&&h.bound[t](s),p&&function(t,e){-1===t.$$.dirty[0]&&(M.push(t),J(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}(e,t)),n}):[],h.update(),p=!0,s(h.before_update),h.fragment=!!a&&a(h.ctx),n.target){if(n.hydrate){const t=S(n.target);h.fragment&&h.fragment.l(t),t.forEach($)}else h.fragment&&h.fragment.c();n.intro&&nt(e.$$.fragment),lt(e,n.target,n.anchor),G()}O(u)}class ht{$destroy(){ut(this,1),this.$destroy=t}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const pt=[];function dt(e,n=t){let r;const s=[];function o(t){if(a(e,t)&&(e=t,r)){const t=!pt.length;for(let t=0;t<s.length;t+=1){const n=s[t];n[1](),pt.push(n,e)}if(t){for(let t=0;t<pt.length;t+=2)pt[t][0](pt[t+1]);pt.length=0}}}return{set:o,update:function(t){o(t(e))},subscribe:function(a,c=t){const i=[a,c];return s.push(i),1===s.length&&(r=n(o)||t),a(e),()=>{const t=s.indexOf(i);-1!==t&&s.splice(t,1),0===s.length&&(r(),r=null)}}}}const mt={},gt=()=>({});function $t(e){let n,r,s,o,a,c,i,l,u,f,h,p,d;return{c(){n=v("nav"),r=v("ul"),s=v("li"),o=v("a"),a=v("span"),c=y("Work"),l=b(),u=v("li"),f=v("a"),h=v("span"),p=y("About"),this.h()},l(t){n=k(t,"NAV",{class:!0});var e=S(n);r=k(e,"UL",{class:!0});var i=S(r);s=k(i,"LI",{});var d=S(s);o=k(d,"A",{"aria-current":!0,"data-content":!0,href:!0,class:!0});var m=S(o);a=k(m,"SPAN",{class:!0});var g=S(a);c=A(g,"Work"),g.forEach($),m.forEach($),d.forEach($),l=L(i),u=k(i,"LI",{});var v=S(u);f=k(v,"A",{"aria-current":!0,"data-content":!0,href:!0,class:!0});var y=S(f);h=k(y,"SPAN",{class:!0});var b=S(h);p=A(b,"About"),b.forEach($),y.forEach($),v.forEach($),i.forEach($),e.forEach($),this.h()},h(){_(a,"class","svelte-y7o9o"),_(o,"aria-current",i=void 0===e[0]||"work"===e[0]?"page":void 0),_(o,"data-content","Work"),_(o,"href","#osher"),_(o,"class","svelte-y7o9o"),_(h,"class","svelte-y7o9o"),_(f,"aria-current",d="about"===e[0]?"page":void 0),_(f,"data-content","About"),_(f,"href","about/"),_(f,"class","svelte-y7o9o"),_(r,"class","svelte-y7o9o"),_(n,"class","svelte-y7o9o")},m(t,e){g(t,n,e),m(n,r),m(r,s),m(s,o),m(o,a),m(a,c),m(r,l),m(r,u),m(u,f),m(f,h),m(h,p)},p(t,[e]){1&e&&i!==(i=void 0===t[0]||"work"===t[0]?"page":void 0)&&_(o,"aria-current",i),1&e&&d!==(d="about"===t[0]?"page":void 0)&&_(f,"aria-current",d)},i:t,o:t,d(t){t&&$(n)}}}function vt(t,e,n){let{active:r}=e;return t.$$set=t=>{"active"in t&&n(0,r=t.active)},[r]}class yt extends ht{constructor(t){super(),ft(this,t,vt,$t,a,{active:0})}}function bt(t){let e,n,r,s,o,a,c,i,l,u,f,h,p;return h=new yt({props:{active:t[0]}}),{c(){e=v("header"),n=v("div"),r=v("a"),o=b(),a=v("span"),c=y("Ma"),i=v("span"),l=y("tt"),u=y(" Titchener"),f=b(),ct(h.$$.fragment),this.h()},l(t){e=k(t,"HEADER",{class:!0});var s=S(e);n=k(s,"DIV",{class:!0});var p=S(n);r=k(p,"A",{href:!0,class:!0});var d=S(r);o=L(d),a=k(d,"SPAN",{class:!0});var m=S(a);c=A(m,"Ma"),i=k(m,"SPAN",{class:!0});var g=S(i);l=A(g,"tt"),g.forEach($),u=A(m," Titchener"),m.forEach($),d.forEach($),p.forEach($),f=L(s),it(h.$$.fragment,s),s.forEach($),this.h()},h(){s=new N(o),_(i,"class","ligature svelte-xki9aj"),_(a,"class","name svelte-xki9aj"),j(a,"secondary",!t[1]),_(r,"href","#introduction"),_(r,"class","svelte-xki9aj"),_(n,"class","logo svelte-xki9aj"),_(e,"class","svelte-xki9aj")},m(t,d){g(t,e,d),m(e,n),m(n,r),s.m('<svg width="65" height="64" fill="rgba(0, 0, 0, 0.7)" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M64.025 56.327a3.218 3.218 0 01-2.953 3.452L7.664 63.936a3.227 3.227 0 01-3.457-2.952L.01 7.618a3.218 3.218 0 012.952-3.451L56.37.009a3.228 3.228 0 013.457 2.953l4.199 53.365zM9.997 13h44v6h-44v-6zM35 34v16.004h6V23h-5.304L25.5 39.781 15.265 23H10v27.004h5.972L16 34l8 13h3l8-13z"/></svg>',r),m(r,o),m(r,a),m(a,c),m(a,i),m(i,l),m(a,u),m(e,f),lt(h,e,null),p=!0},p(t,[e]){2&e&&j(a,"secondary",!t[1]);const n={};1&e&&(n.active=t[0]),h.$set(n)},i(t){p||(nt(h.$$.fragment,t),p=!0)},o(t){rt(h.$$.fragment,t),p=!1},d(t){t&&$(e),ut(h)}}}function wt(t,e,n){let{active:r}=e,{hasFixedName:s=!0}=e;return t.$$set=t=>{"active"in t&&n(0,r=t.active),"hasFixedName"in t&&n(1,s=t.hasFixedName)},[r,s]}class Et extends ht{constructor(t){super(),ft(this,t,wt,bt,a,{active:0,hasFixedName:1})}}function _t(e){let n,r,s,o;return{c(){n=v("div"),r=v("a"),s=y("Skip to main content (press enter)"),this.h()},l(t){n=k(t,"DIV",{class:!0});var e=S(n);r=k(e,"A",{class:!0,href:!0});var o=S(r);s=A(o,"Skip to main content (press enter)"),o.forEach($),e.forEach($),this.h()},h(){_(r,"class","visually-hidden svelte-1hr1w81"),_(r,"href",o="#"+e[0]),_(n,"class","svelte-1hr1w81")},m(t,e){g(t,n,e),m(n,r),m(r,s)},p(t,[e]){1&e&&o!==(o="#"+t[0])&&_(r,"href",o)},i:t,o:t,d(t){t&&$(n)}}}function xt(t,e,n){let{contentId:r="main"}=e;return t.$$set=t=>{"contentId"in t&&n(0,r=t.contentId)},[r]}class St extends ht{constructor(t){super(),ft(this,t,xt,_t,a,{contentId:0})}}const kt=dt();function At(t){let e,n,r,s,o;const a=t[5].default,c=i(a,t,t[4],null);return{c(){e=v("link"),n=b(),r=v("div"),c&&c.c(),this.h()},l(t){const s=R('[data-svelte="svelte-wfe8vz"]',document.head);e=k(s,"LINK",{rel:!0,type:!0,href:!0}),s.forEach($),n=L(t),r=k(t,"DIV",{class:!0});var o=S(r);c&&c.l(o),o.forEach($),this.h()},h(){_(e,"rel","icon"),_(e,"type","image/svg+xml"),_(e,"href",t[1]),_(r,"class",s="page "+t[2]+" svelte-fwat4n")},m(s,a){m(document.head,e),g(s,n,a),g(s,r,a),c&&c.m(r,null),t[6](r),o=!0},p(t,[n]){(!o||2&n)&&_(e,"href",t[1]),c&&c.p&&16&n&&u(c,a,t,t[4],n,null,null),(!o||4&n&&s!==(s="page "+t[2]+" svelte-fwat4n"))&&_(r,"class",s)},i(t){o||(nt(c,t),o=!0)},o(t){rt(c,t),o=!1},d(s){$(e),s&&$(n),s&&$(r),c&&c.d(s),t[6](null)}}}function Lt(t,e,n){let r,s;c(t,kt,t=>n(11,s=t));const{page:o}=ke();let a,i;c(t,o,t=>n(10,r=t));let l="#ffcf00",u="rgba(0, 0, 0, 0.7)";U(async()=>{await(J(),F),n(8,l=a&&getComputedStyle(a,":after").getPropertyValue("--secondary-background-color")),n(9,u=a&&getComputedStyle(a).getPropertyValue("--default-copy-color"))});let f,h,{$$slots:p={},$$scope:d}=e;return t.$$set=t=>{"$$scope"in t&&n(4,d=t.$$scope)},t.$$.update=()=>{768&t.$$.dirty&&n(1,f=`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='66' height='66' fill='none'%3E%3Cpath fill='${encodeURIComponent(l)}' d='M65.03 57.33a3.22 3.22 0 01-2.96 3.45l-53.4 4.16a3.23 3.23 0 01-3.46-2.96L1 8.62a3.22 3.22 0 012.95-3.45L57.36 1a3.23 3.23 0 013.47 2.95l4.2 53.37z'/%3E%3Cpath fill='${encodeURIComponent(u)}' d='M11 14h44v6H11v-6zM36 51V35l-8 13h-3l-8-13-.03 16H11V24h5.26L26.5 40.78 36.7 24H42v27h-6z'/%3E%3C/svg%3E`),3072&t.$$.dirty&&n(2,h=function(t,e){let n,r=t.replace(/\/$/,"");if(i===t||""===r)n=e;else switch(r){case"/about":n="about";break;case"/work/osher":n="work osher";break;case"/work/elim-springs":n="work elimsprings";break;case"/work/budgeting":n="work budgeting";break;case"/work/boxes-and-arrows":n="work boxesandarrows";break;case"/work/project-x":n="work projectx";break;default:n="error"}return i=t,n}(r.path,s))},[a,f,h,o,d,p,function(t){V[t?"unshift":"push"](()=>{a=t,n(0,a)})}]}class Pt extends ht{constructor(t){super(),ft(this,t,Lt,At,a,{})}}function Ct(t){let e,n,r,s,o,a;e=new St({props:{contentId:Rt}}),r=new Et({props:{active:t[0]}});const c=t[1].default,l=i(c,t,t[2],null);return{c(){ct(e.$$.fragment),n=b(),ct(r.$$.fragment),s=b(),o=v("main"),l&&l.c(),this.h()},l(t){it(e.$$.fragment,t),n=L(t),it(r.$$.fragment,t),s=L(t),o=k(t,"MAIN",{id:!0,class:!0});var a=S(o);l&&l.l(a),a.forEach($),this.h()},h(){_(o,"id",Rt),_(o,"class","svelte-kcwudd")},m(t,c){lt(e,t,c),g(t,n,c),lt(r,t,c),g(t,s,c),g(t,o,c),l&&l.m(o,null),a=!0},p(t,e){const n={};1&e&&(n.active=t[0]),r.$set(n),l&&l.p&&4&e&&u(l,c,t,t[2],e,null,null)},i(t){a||(nt(e.$$.fragment,t),nt(r.$$.fragment,t),nt(l,t),a=!0)},o(t){rt(e.$$.fragment,t),rt(r.$$.fragment,t),rt(l,t),a=!1},d(t){ut(e,t),t&&$(n),ut(r,t),t&&$(s),t&&$(o),l&&l.d(t)}}}function jt(t){let e,n;return e=new Pt({props:{$$slots:{default:[Ct]},$$scope:{ctx:t}}}),{c(){ct(e.$$.fragment)},l(t){it(e.$$.fragment,t)},m(t,r){lt(e,t,r),n=!0},p(t,[n]){const r={};5&n&&(r.$$scope={dirty:n,ctx:t}),e.$set(r)},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){rt(e.$$.fragment,t),n=!1},d(t){ut(e,t)}}}const Rt="content";function Nt(t,e,n){let{segment:r}=e,{$$slots:s={},$$scope:o}=e;return t.$$set=t=>{"segment"in t&&n(0,r=t.segment),"$$scope"in t&&n(2,o=t.$$scope)},[r,s,o]}class It extends ht{constructor(t){super(),ft(this,t,Nt,jt,a,{segment:0})}}function Ot(t){let e,n,r=t[1].stack+"";return{c(){e=v("pre"),n=y(r)},l(t){e=k(t,"PRE",{});var s=S(e);n=A(s,r),s.forEach($)},m(t,r){g(t,e,r),m(e,n)},p(t,e){2&e&&r!==(r=t[1].stack+"")&&P(n,r)},d(t){t&&$(e)}}}function Dt(e){let n,r,s,o,a,c,i,l,u,f,h,p,d,E,x,C=e[1].message+"";document.title=n=e[0];let j=e[4]&&e[1].stack&&Ot(e);return{c(){r=b(),s=v("div"),o=v("h1"),a=y(e[2]),c=b(),i=v("p"),l=y(e[3]),u=b(),f=v("small"),h=y(e[0]),p=b(),d=y(C),E=b(),j&&j.c(),x=w(),this.h()},l(t){R('[data-svelte="svelte-4sldlf"]',document.head).forEach($),r=L(t),s=k(t,"DIV",{class:!0});var n=S(s);o=k(n,"H1",{class:!0});var m=S(o);a=A(m,e[2]),m.forEach($),c=L(n),i=k(n,"P",{class:!0});var g=S(i);l=A(g,e[3]),g.forEach($),u=L(n),f=k(n,"SMALL",{class:!0});var v=S(f);h=A(v,e[0]),p=L(v),d=A(v,C),v.forEach($),n.forEach($),E=L(t),j&&j.l(t),x=w(),this.h()},h(){_(o,"class","svelte-16fwfob"),_(i,"class","lede svelte-16fwfob"),_(f,"class","svelte-16fwfob"),_(s,"class","svelte-16fwfob")},m(t,e){g(t,r,e),g(t,s,e),m(s,o),m(o,a),m(s,c),m(s,i),m(i,l),m(s,u),m(s,f),m(f,h),m(f,p),m(f,d),g(t,E,e),j&&j.m(t,e),g(t,x,e)},p(t,[e]){1&e&&n!==(n=t[0])&&(document.title=n),4&e&&P(a,t[2]),8&e&&P(l,t[3]),1&e&&P(h,t[0]),2&e&&C!==(C=t[1].message+"")&&P(d,C),t[4]&&t[1].stack?j?j.p(t,e):(j=Ot(t),j.c(),j.m(x.parentNode,x)):j&&(j.d(1),j=null)},i:t,o:t,d(t){t&&$(r),t&&$(s),t&&$(E),j&&j.d(t),t&&$(x)}}}function Ht(t,e,n){let r,s,{status:o}=e;switch(o){case 404:r="Something's missing. Sorry.",s="You may have been sent here in error or this page may have been (re)moved.";break;default:r="Page failed successfully.",s="Something went wrong. Can you try again? If you can't get to where you want to go please let me know."}let{error:a}=e;return t.$$set=t=>{"status"in t&&n(0,o=t.status),"error"in t&&n(1,a=t.error)},[o,a,r,s,false]}class Ut extends ht{constructor(t){super(),ft(this,t,Ht,Dt,a,{status:0,error:1})}}function qt(t){let n,r,s;const o=[t[4].props];var a=t[4].component;function c(t){let n={};for(let t=0;t<o.length;t+=1)n=e(n,o[t]);return{props:n}}return a&&(n=new a(c())),{c(){n&&ct(n.$$.fragment),r=w()},l(t){n&&it(n.$$.fragment,t),r=w()},m(t,e){n&&lt(n,t,e),g(t,r,e),s=!0},p(t,e){const s=16&e?ot(o,[at(t[4].props)]):{};if(a!==(a=t[4].component)){if(n){tt();const t=n;rt(t.$$.fragment,1,0,()=>{ut(t,1)}),et()}a?(n=new a(c()),ct(n.$$.fragment),nt(n.$$.fragment,1),lt(n,r.parentNode,r)):n=null}else a&&n.$set(s)},i(t){s||(n&&nt(n.$$.fragment,t),s=!0)},o(t){n&&rt(n.$$.fragment,t),s=!1},d(t){t&&$(r),n&&ut(n,t)}}}function Mt(t){let e,n;return e=new Ut({props:{error:t[0],status:t[1]}}),{c(){ct(e.$$.fragment)},l(t){it(e.$$.fragment,t)},m(t,r){lt(e,t,r),n=!0},p(t,n){const r={};1&n&&(r.error=t[0]),2&n&&(r.status=t[1]),e.$set(r)},i(t){n||(nt(e.$$.fragment,t),n=!0)},o(t){rt(e.$$.fragment,t),n=!1},d(t){ut(e,t)}}}function Vt(t){let e,n,r,s;const o=[Mt,qt],a=[];function c(t,e){return t[0]?0:1}return e=c(t),n=a[e]=o[e](t),{c(){n.c(),r=w()},l(t){n.l(t),r=w()},m(t,n){a[e].m(t,n),g(t,r,n),s=!0},p(t,s){let i=e;e=c(t),e===i?a[e].p(t,s):(tt(),rt(a[i],1,1,()=>{a[i]=null}),et(),n=a[e],n||(n=a[e]=o[e](t),n.c()),nt(n,1),n.m(r.parentNode,r))},i(t){s||(nt(n),s=!0)},o(t){rt(n),s=!1},d(t){a[e].d(t),t&&$(r)}}}function Tt(t){let n,r;const s=[{segment:t[2][0]},t[3].props];let o={$$slots:{default:[Vt]},$$scope:{ctx:t}};for(let t=0;t<s.length;t+=1)o=e(o,s[t]);return n=new It({props:o}),{c(){ct(n.$$.fragment)},l(t){it(n.$$.fragment,t)},m(t,e){lt(n,t,e),r=!0},p(t,[e]){const r=12&e?ot(s,[4&e&&{segment:t[2][0]},8&e&&at(t[3].props)]):{};147&e&&(r.$$scope={dirty:e,ctx:t}),n.$set(r)},i(t){r||(nt(n.$$.fragment,t),r=!0)},o(t){rt(n.$$.fragment,t),r=!1},d(t){ut(n,t)}}}function zt(t,e,n){let{stores:r}=e,{error:s}=e,{status:o}=e,{segments:a}=e,{level0:c}=e,{level1:i=null}=e,{notify:l}=e;var u,f;return U(l),u=mt,f=r,D().$$.context.set(u,f),t.$$set=t=>{"stores"in t&&n(5,r=t.stores),"error"in t&&n(0,s=t.error),"status"in t&&n(1,o=t.status),"segments"in t&&n(2,a=t.segments),"level0"in t&&n(3,c=t.level0),"level1"in t&&n(4,i=t.level1),"notify"in t&&n(6,l=t.notify)},[s,o,a,c,i,r,l]}class Ft extends ht{constructor(t){super(),ft(this,t,zt,Tt,a,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Bt=[],Jt=[{js:()=>import("./index.baafe220.js"),css:[]},{js:()=>import("./about.c8723d6c.js"),css:[]},{js:()=>import("./boxes-and-arrows.6d7303f1.js"),css:[]},{js:()=>import("./elim-springs.96aa8346.js"),css:[]},{js:()=>import("./budgeting.3ffb158f.js"),css:[]},{js:()=>import("./project-x.01d13502.js"),css:[]},{js:()=>import("./osher.92ef8e51.js"),css:[]}],Kt=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/work\/boxes-and-arrows\/?$/,parts:[null,{i:2}]},{pattern:/^\/work\/elim-springs\/?$/,parts:[null,{i:3}]},{pattern:/^\/work\/budgeting\/?$/,parts:[null,{i:4}]},{pattern:/^\/work\/project-x\/?$/,parts:[null,{i:5}]},{pattern:/^\/work\/osher\/?$/,parts:[null,{i:6}]}];function Wt(t,e={replaceState:!1}){const n=he(new URL(t,document.baseURI));return n?(le[e.replaceState?"replaceState":"pushState"]({id:ce},"",t),de(n,null).then(()=>{})):(location.href=t,new Promise(t=>{}))}const Yt="undefined"!=typeof __SAPPER__&&__SAPPER__;let Gt,Xt,Qt,Zt=!1,te=[],ee="{}";const ne={page:function(t){const e=dt(t);let n=!0;return{notify:function(){n=!0,e.update(t=>t)},set:function(t){n=!1,e.set(t)},subscribe:function(t){let r;return e.subscribe(e=>{(void 0===r||n&&e!==r)&&t(r=e)})}}}({}),preloading:dt(null),session:dt(Yt&&Yt.session)};let re,se;ne.session.subscribe(async t=>{if(re=t,!Zt)return;se=!0;const e=he(new URL(location.href)),n=Xt={},{redirect:r,props:s,branch:o}=await ge(e);n===Xt&&await me(r,o,s,e.page)});let oe,ae=null;let ce,ie=1;const le="undefined"!=typeof history?history:{pushState:(t,e,n)=>{},replaceState:(t,e,n)=>{},scrollRestoration:""},ue={};function fe(t){const e=Object.create(null);return t.length>0&&t.slice(1).split("&").forEach(t=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(t.replace(/\+/g," ")));"string"==typeof e[n]&&(e[n]=[e[n]]),"object"==typeof e[n]?e[n].push(r):e[n]=r}),e}function he(t){if(t.origin!==location.origin)return null;if(!t.pathname.startsWith(Yt.baseUrl))return null;let e=t.pathname.slice(Yt.baseUrl.length);if(""===e&&(e="/"),!Bt.some(t=>t.test(e)))for(let n=0;n<Kt.length;n+=1){const r=Kt[n],s=r.pattern.exec(e);if(s){const n=fe(t.search),o=r.parts[r.parts.length-1],a=o.params?o.params(s):{},c={host:location.host,path:e,query:n,params:a};return{href:t.href,route:r,match:s,page:c}}}}function pe(){return{x:pageXOffset,y:pageYOffset}}async function de(t,e,n,r){if(e)ce=e;else{const t=pe();ue[ce]=t,e=ce=++ie,ue[ce]=n?t:{x:0,y:0}}ce=e,Gt&&ne.preloading.set(!0);const s=ae&&ae.href===t.href?ae.promise:ge(t);ae=null;const o=Xt={},{redirect:a,props:c,branch:i}=await s;if(o===Xt&&(await me(a,i,c,t.page),document.activeElement&&document.activeElement.blur(),!n)){let t=ue[e];if(r){const e=document.getElementById(r.slice(1));e&&(t={x:0,y:e.getBoundingClientRect().top+scrollY})}ue[ce]=t,t&&scrollTo(t.x,t.y)}}async function me(t,e,n,r){if(t)return Wt(t.location,{replaceState:!0});if(ne.page.set(r),ne.preloading.set(!1),Gt)Gt.$set(n);else{n.stores={page:{subscribe:ne.page.subscribe},preloading:{subscribe:ne.preloading.subscribe},session:ne.session},n.level0={props:await Qt},n.notify=ne.page.notify;const t=document.querySelector("#sapper-head-start"),e=document.querySelector("#sapper-head-end");if(t&&e){for(;t.nextSibling!==e;)ve(t.nextSibling);ve(t),ve(e)}Gt=new Ft({target:oe,props:n,hydrate:!0})}te=e,ee=JSON.stringify(r.query),Zt=!0,se=!1}async function ge(t){const{route:e,page:n}=t,r=n.path.split("/").filter(Boolean);let s=null;const o={error:null,status:200,segments:[r[0]]},a={fetch:(t,e)=>fetch(t,e),redirect:(t,e)=>{if(s&&(s.statusCode!==t||s.location!==e))throw new Error("Conflicting redirects");s={statusCode:t,location:e}},error:(t,e)=>{o.error="string"==typeof e?new Error(e):e,o.status=t}};let c;Qt||(Qt=Yt.preloaded[0]||gt.call(a,{host:n.host,path:n.path,query:n.query,params:{}},re));let i=1;try{const s=JSON.stringify(n.query),l=e.pattern.exec(n.path);let u=!1;c=await Promise.all(e.parts.map(async(e,c)=>{const f=r[c];if(function(t,e,n,r){if(r!==ee)return!0;const s=te[t];return!!s&&(e!==s.segment||!(!s.match||JSON.stringify(s.match.slice(1,t+2))===JSON.stringify(n.slice(1,t+2)))||void 0)}(c,f,l,s)&&(u=!0),o.segments[i]=r[c+1],!e)return{segment:f};const h=i++;if(!se&&!u&&te[c]&&te[c].part===e.i)return te[c];u=!1;const{default:p,preload:d}=await function(t){const e="string"==typeof t.css?[]:t.css.map($e);return e.unshift(t.js()),Promise.all(e).then(t=>t[0])}(Jt[e.i]);let m;return m=Zt||!Yt.preloaded[c+1]?d?await d.call(a,{host:n.host,path:n.path,query:n.query,params:e.params?e.params(t.match):{}},re):{}:Yt.preloaded[c+1],o["level"+h]={component:p,props:m,segment:f,match:l,part:e.i}}))}catch(t){o.error=t,o.status=500,c=[]}return{redirect:s,props:o,branch:c}}function $e(t){const e="client/"+t;if(!document.querySelector(`link[href="${e}"]`))return new Promise((t,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=e,r.onload=()=>t(),r.onerror=n,document.head.appendChild(r)})}function ve(t){t.parentNode.removeChild(t)}function ye(t){const e=he(new URL(t,document.baseURI));if(e)return ae&&t===ae.href||function(t,e){ae={href:t,promise:e}}(t,ge(e)),ae.promise}let be;function we(t){clearTimeout(be),be=setTimeout(()=>{Ee(t)},20)}function Ee(t){const e=xe(t.target);e&&"prefetch"===e.rel&&ye(e.href)}function _e(t){if(1!==function(t){return null===t.which?t.button:t.which}(t))return;if(t.metaKey||t.ctrlKey||t.shiftKey)return;if(t.defaultPrevented)return;const e=xe(t.target);if(!e)return;if(!e.href)return;const n="object"==typeof e.href&&"SVGAnimatedString"===e.href.constructor.name,r=String(n?e.href.baseVal:e.href);if(r===location.href)return void(location.hash||t.preventDefault());if(e.hasAttribute("download")||"external"===e.getAttribute("rel"))return;if(n?e.target.baseVal:e.target)return;const s=new URL(r);if(s.pathname===location.pathname&&s.search===location.search)return;const o=he(s);if(o){de(o,null,e.hasAttribute("sapper-noscroll"),s.hash),t.preventDefault(),le.pushState({id:ce},"",s.href)}}function xe(t){for(;t&&"A"!==t.nodeName.toUpperCase();)t=t.parentNode;return t}function Se(t){if(ue[ce]=pe(),t.state){const e=he(new URL(location.href));e?de(e,t.state.id):location.href=location.href}else ie=ie+1,function(t){ce=t}(ie),le.replaceState({id:ce},"",location.href)}const ke=()=>{return t=mt,D().$$.context.get(t);var t};var Ae;Ae={target:document.body},"scrollRestoration"in le&&(le.scrollRestoration="manual"),addEventListener("beforeunload",()=>{le.scrollRestoration="auto"}),addEventListener("load",()=>{le.scrollRestoration="manual"}),function(t){oe=t}(Ae.target),addEventListener("click",_e),addEventListener("popstate",Se),addEventListener("touchstart",Ee),addEventListener("mousemove",we),Promise.resolve().then(()=>{const{hash:t,href:e}=location;le.replaceState({id:ie},"",e);const n=new URL(location.href);if(Yt.error)return function(t){const{host:e,pathname:n,search:r}=location,{session:s,preloaded:o,status:a,error:c}=Yt;Qt||(Qt=o&&o[0]),me(null,[],{error:c,status:a,session:s,level0:{props:Qt},level1:{props:{status:a,error:c},component:Ut},segments:o},{host:e,path:n,query:fe(r),params:{}})}();const r=he(n);return r?de(r,ie,!0,t):void 0});export{lt as A,ut as B,tt as C,et as D,t as E,R as F,E as G,st as H,Wt as I,kt as J,e as K,x as L,d as M,ot as N,h as O,f as P,ht as S,k as a,S as b,i as c,$ as d,v as e,_ as f,C as g,g as h,ft as i,rt as j,q as k,V as l,y as m,p as n,H as o,A as p,j as q,m as r,a as s,nt as t,u,P as v,b as w,L as x,ct as y,it as z};
