function e(){}function t(e,t){for(const n in t)e[n]=t[n];return e}function n(e){return e()}function r(){return Object.create(null)}function o(e){e.forEach(n)}function a(e){return"function"==typeof e}function s(e,t){return e!=e?t==t:e!==t||e&&"object"==typeof e||"function"==typeof e}function i(t,n,r){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const r=t.subscribe(...n);return r.unsubscribe?()=>r.unsubscribe():r}(n,r))}function l(e,t,n,r){if(e){const o=c(e,t,n,r);return e[0](o)}}function c(e,n,r,o){return e[1]&&o?t(r.ctx.slice(),e[1](o(n))):r.ctx}function f(e,t,n,r,o,a,s){const i=function(e,t,n,r){if(e[2]&&r){const o=e[2](r(n));if(void 0===t.dirty)return o;if("object"==typeof o){const e=[],n=Math.max(t.dirty.length,o.length);for(let r=0;r<n;r+=1)e[r]=t.dirty[r]|o[r];return e}return t.dirty|o}return t.dirty}(t,r,o,a);if(i){const o=c(t,n,r,s);e.p(o,i)}}function u(e){const t={};for(const n in e)"$"!==n[0]&&(t[n]=e[n]);return t}function d(e,t){const n={};t=new Set(t);for(const r in e)t.has(r)||"$"===r[0]||(n[r]=e[r]);return n}function h(e){return null==e?"":e}function p(t){return t&&a(t.destroy)?t.destroy:e}function g(e,t){e.appendChild(t)}function m(e,t,n){e.insertBefore(t,n||null)}function v(e){e.parentNode.removeChild(e)}function w(e){return document.createElement(e)}function b(e){return document.createTextNode(e)}function y(){return b(" ")}function $(){return b("")}function k(e,t,n,r){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n,r)}function x(e,t,n){null==n?e.removeAttribute(t):e.getAttribute(t)!==n&&e.setAttribute(t,n)}function E(e,t){const n=Object.getOwnPropertyDescriptors(e.__proto__);for(const r in t)null==t[r]?e.removeAttribute(r):"style"===r?e.style.cssText=t[r]:"__value"===r?e.value=e[r]=t[r]:n[r]&&n[r].set?e[r]=t[r]:x(e,r,t[r])}function _(e){return Array.from(e.childNodes)}function q(e,t,n,r){for(let r=0;r<e.length;r+=1){const o=e[r];if(o.nodeName===t){let t=0;const a=[];for(;t<o.attributes.length;){const e=o.attributes[t++];n[e.name]||a.push(e.name)}for(let e=0;e<a.length;e++)o.removeAttribute(a[e]);return e.splice(r,1)[0]}}return r?function(e){return document.createElementNS("http://www.w3.org/2000/svg",e)}(t):w(t)}function S(e,t){for(let n=0;n<e.length;n+=1){const r=e[n];if(3===r.nodeType)return r.data=""+t,e.splice(n,1)[0]}return b(t)}function A(e){return S(e," ")}function L(e,t){t=""+t,e.wholeText!==t&&(e.data=t)}function P(e,t,n,r){e.style.setProperty(t,n,r?"important":"")}function C(e,t,n){e.classList[n?"add":"remove"](t)}function j(e,t=document.body){return Array.from(t.querySelectorAll(e))}class z{constructor(e=null){this.a=e,this.e=this.n=null}m(e,t,n=null){this.e||(this.e=w(t.nodeName),this.t=t,this.h(e)),this.i(n)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let t=0;t<this.n.length;t+=1)m(this.t,this.n[t],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(v)}}let R;function N(e){R=e}function I(){if(!R)throw new Error("Function called outside component initialization");return R}function O(e){I().$$.on_mount.push(e)}function D(e){I().$$.after_update.push(e)}function M(){const e=I();return(t,n)=>{const r=e.$$.callbacks[t];if(r){const o=function(e,t){const n=document.createEvent("CustomEvent");return n.initCustomEvent(e,!1,!1,t),n}(t,n);r.slice().forEach(t=>{t.call(e,o)})}}}const H=[],U=[],V=[],T=[],B=Promise.resolve();let F=!1;function J(){F||(F=!0,B.then(G))}function K(e){V.push(e)}let W=!1;const Y=new Set;function G(){if(!W){W=!0;do{for(let e=0;e<H.length;e+=1){const t=H[e];N(t),X(t.$$)}for(N(null),H.length=0;U.length;)U.pop()();for(let e=0;e<V.length;e+=1){const t=V[e];Y.has(t)||(Y.add(t),t())}V.length=0}while(H.length);for(;T.length;)T.pop()();F=!1,W=!1,Y.clear()}}function X(e){if(null!==e.fragment){e.update(),o(e.before_update);const t=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,t),e.after_update.forEach(K)}}const Q=new Set;let Z;function ee(){Z={r:0,c:[],p:Z}}function te(){Z.r||o(Z.c),Z=Z.p}function ne(e,t){e&&e.i&&(Q.delete(e),e.i(t))}function re(e,t,n,r){if(e&&e.o){if(Q.has(e))return;Q.add(e),Z.c.push(()=>{Q.delete(e),r&&(n&&e.d(1),r())}),e.o(t)}}const oe="undefined"!=typeof window?window:"undefined"!=typeof globalThis?globalThis:global;function ae(e,t){const n={},r={},o={$$scope:1};let a=e.length;for(;a--;){const s=e[a],i=t[a];if(i){for(const e in s)e in i||(r[e]=1);for(const e in i)o[e]||(n[e]=i[e],o[e]=1);e[a]=i}else for(const e in s)o[e]=1}for(const e in r)e in n||(n[e]=void 0);return n}function se(e){return"object"==typeof e&&null!==e?e:{}}function ie(e){e&&e.c()}function le(e,t){e&&e.l(t)}function ce(e,t,r){const{fragment:s,on_mount:i,on_destroy:l,after_update:c}=e.$$;s&&s.m(t,r),K(()=>{const t=i.map(n).filter(a);l?l.push(...t):o(t),e.$$.on_mount=[]}),c.forEach(K)}function fe(e,t){const n=e.$$;null!==n.fragment&&(o(n.on_destroy),n.fragment&&n.fragment.d(t),n.on_destroy=n.fragment=null,n.ctx=[])}function ue(t,n,a,s,i,l,c=[-1]){const f=R;N(t);const u=n.props||{},d=t.$$={fragment:null,ctx:null,props:l,update:e,not_equal:i,bound:r(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(f?f.$$.context:[]),callbacks:r(),dirty:c,skip_bound:!1};let h=!1;if(d.ctx=a?a(t,u,(e,n,...r)=>{const o=r.length?r[0]:n;return d.ctx&&i(d.ctx[e],d.ctx[e]=o)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](o),h&&function(e,t){-1===e.$$.dirty[0]&&(H.push(e),J(),e.$$.dirty.fill(0)),e.$$.dirty[t/31|0]|=1<<t%31}(t,e)),n}):[],d.update(),h=!0,o(d.before_update),d.fragment=!!s&&s(d.ctx),n.target){if(n.hydrate){const e=_(n.target);d.fragment&&d.fragment.l(e),e.forEach(v)}else d.fragment&&d.fragment.c();n.intro&&ne(t.$$.fragment),ce(t,n.target,n.anchor),G()}N(f)}class de{$destroy(){fe(this,1),this.$destroy=e}$on(e,t){const n=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return n.push(t),()=>{const e=n.indexOf(t);-1!==e&&n.splice(e,1)}}$set(e){var t;this.$$set&&(t=e,0!==Object.keys(t).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const he=[];function pe(t,n=e){let r;const o=[];function a(e){if(s(t,e)&&(t=e,r)){const e=!he.length;for(let e=0;e<o.length;e+=1){const n=o[e];n[1](),he.push(n,t)}if(e){for(let e=0;e<he.length;e+=2)he[e][0](he[e+1]);he.length=0}}}return{set:a,update:function(e){a(e(t))},subscribe:function(s,i=e){const l=[s,i];return o.push(l),1===o.length&&(r=n(a)||e),s(t),()=>{const e=o.indexOf(l);-1!==e&&o.splice(e,1),0===o.length&&(r(),r=null)}}}}const ge={},me=()=>({});function ve(t){let n,r,o,a,s,i,l,c,f,u,d,h,p;return{c(){n=w("nav"),r=w("ul"),o=w("li"),a=w("a"),s=w("span"),i=b("Work"),c=y(),f=w("li"),u=w("a"),d=w("span"),h=b("About"),this.h()},l(e){n=q(e,"NAV",{class:!0});var t=_(n);r=q(t,"UL",{class:!0});var l=_(r);o=q(l,"LI",{class:!0});var p=_(o);a=q(p,"A",{"aria-current":!0,"data-content":!0,rel:!0,href:!0,class:!0});var g=_(a);s=q(g,"SPAN",{class:!0});var m=_(s);i=S(m,"Work"),m.forEach(v),g.forEach(v),p.forEach(v),c=A(l),f=q(l,"LI",{class:!0});var w=_(f);u=q(w,"A",{"aria-current":!0,"data-content":!0,rel:!0,href:!0,class:!0});var b=_(u);d=q(b,"SPAN",{class:!0});var y=_(d);h=S(y,"About"),y.forEach(v),b.forEach(v),w.forEach(v),l.forEach(v),t.forEach(v),this.h()},h(){x(s,"class","svelte-fgsehf"),x(a,"aria-current",l=void 0===t[0]||"work"===t[0]?"page":void 0),x(a,"data-content","Work"),x(a,"rel","prefetch"),x(a,"href","#osher"),x(a,"class","svelte-fgsehf"),x(o,"class","svelte-fgsehf"),x(d,"class","svelte-fgsehf"),x(u,"aria-current",p="about"===t[0]?"page":void 0),x(u,"data-content","About"),x(u,"rel","prefetch"),x(u,"href","about/"),x(u,"class","svelte-fgsehf"),x(f,"class","svelte-fgsehf"),x(r,"class","svelte-fgsehf"),x(n,"class","svelte-fgsehf")},m(e,t){m(e,n,t),g(n,r),g(r,o),g(o,a),g(a,s),g(s,i),g(r,c),g(r,f),g(f,u),g(u,d),g(d,h)},p(e,[t]){1&t&&l!==(l=void 0===e[0]||"work"===e[0]?"page":void 0)&&x(a,"aria-current",l),1&t&&p!==(p="about"===e[0]?"page":void 0)&&x(u,"aria-current",p)},i:e,o:e,d(e){e&&v(n)}}}function we(e,t,n){let{active:r}=t;return e.$$set=e=>{"active"in e&&n(0,r=e.active)},[r]}class be extends de{constructor(e){var t;super(),document.getElementById("svelte-fgsehf-style")||((t=w("style")).id="svelte-fgsehf-style",t.textContent='nav.svelte-fgsehf.svelte-fgsehf{padding-left:var(--navigation-horizontal-padding);max-width:var(--max-main-content-width);display:flex;justify-content:flex-end;padding-top:var(--header-top-padding)}ul.svelte-fgsehf.svelte-fgsehf{position:fixed;display:inline-flex;list-style:none;font-family:\'Montserrat\', sans-serif;padding:0;transform:translateX(100%)}a.svelte-fgsehf.svelte-fgsehf{display:block;padding:0 var(--navigation-horizontal-padding);box-sizing:border-box}a.svelte-fgsehf.svelte-fgsehf:link,a.svelte-fgsehf.svelte-fgsehf:visited,a.svelte-fgsehf.svelte-fgsehf:hover{text-decoration:none;color:var(--default-copy-color)}a.svelte-fgsehf.svelte-fgsehf:link,a.svelte-fgsehf.svelte-fgsehf:visited{text-transform:uppercase}a.svelte-fgsehf span.svelte-fgsehf{display:block;padding:1rem 0;box-sizing:border-box;white-space:nowrap;text-align:center;transition:border var(--navigation-transition-duration)}a.svelte-fgsehf span.svelte-fgsehf,.page:not(.introduction) ul:hover a[aria-current="page"].svelte-fgsehf span.svelte-fgsehf{border-bottom:4px solid transparent;font-weight:600}ul.svelte-fgsehf:hover li a:hover span.svelte-fgsehf,.page:not(.introduction) a[aria-current="page"].svelte-fgsehf span.svelte-fgsehf,.page:not(.introduction) ul:hover li.svelte-fgsehf:hover a[aria-current="page"] span.svelte-fgsehf{border-bottom:4px solid var(--primary-accent-color);font-weight:700}a.svelte-fgsehf.svelte-fgsehf::before{content:attr(data-content);display:block;font-weight:700;height:0;visibility:hidden}',g(document.head,t)),ue(this,e,we,ve,s,{active:0})}}function ye(e){let t,n,r,o,a,s,i,l,c,f,u,d,h;return d=new be({props:{active:e[0]}}),{c(){t=w("header"),n=w("div"),r=w("a"),a=y(),s=w("span"),i=b("Ma"),l=w("span"),c=b("tt"),f=b(" Titchener"),u=y(),ie(d.$$.fragment),this.h()},l(e){t=q(e,"HEADER",{class:!0});var o=_(t);n=q(o,"DIV",{class:!0});var h=_(n);r=q(h,"A",{href:!0,class:!0});var p=_(r);a=A(p),s=q(p,"SPAN",{class:!0});var g=_(s);i=S(g,"Ma"),l=q(g,"SPAN",{class:!0});var m=_(l);c=S(m,"tt"),m.forEach(v),f=S(g," Titchener"),g.forEach(v),p.forEach(v),h.forEach(v),u=A(o),le(d.$$.fragment,o),o.forEach(v),this.h()},h(){o=new z(a),x(l,"class","ligature svelte-1fhwqaq"),x(s,"class","name svelte-1fhwqaq"),C(s,"secondary",!e[1]),x(r,"href","#introduction"),x(r,"class","svelte-1fhwqaq"),x(n,"class","logo svelte-1fhwqaq"),x(t,"class","svelte-1fhwqaq")},m(e,p){m(e,t,p),g(t,n),g(n,r),o.m('<svg width="65" height="64" fill="rgba(0, 0, 0, 0.7)" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M64.025 56.327a3.218 3.218 0 01-2.953 3.452L7.664 63.936a3.227 3.227 0 01-3.457-2.952L.01 7.618a3.218 3.218 0 012.952-3.451L56.37.009a3.228 3.228 0 013.457 2.953l4.199 53.365zM9.997 13h44v6h-44v-6zM35 34v16.004h6V23h-5.304L25.5 39.781 15.265 23H10v27.004h5.972L16 34l8 13h3l8-13z"/></svg>',r),g(r,a),g(r,s),g(s,i),g(s,l),g(l,c),g(s,f),g(t,u),ce(d,t,null),h=!0},p(e,[t]){2&t&&C(s,"secondary",!e[1]);const n={};1&t&&(n.active=e[0]),d.$set(n)},i(e){h||(ne(d.$$.fragment,e),h=!0)},o(e){re(d.$$.fragment,e),h=!1},d(e){e&&v(t),fe(d)}}}function $e(e,t,n){let{active:r}=t,{hasFixedName:o=!0}=t;return e.$$set=e=>{"active"in e&&n(0,r=e.active),"hasFixedName"in e&&n(1,o=e.hasFixedName)},[r,o]}class ke extends de{constructor(e){var t;super(),document.getElementById("svelte-1fhwqaq-style")||((t=w("style")).id="svelte-1fhwqaq-style",t.textContent="header.svelte-1fhwqaq.svelte-1fhwqaq{--header-top-padding:3.5rem;box-sizing:border-box;height:0;padding-left:var(--content-left-margin);padding-right:var(--content-left-margin);position:relative;user-select:none;width:100%;z-index:10;display:flex}.logo.svelte-1fhwqaq.svelte-1fhwqaq{left:calc(var(--lettermark-offset) * -1);max-width:var(--max-main-content-width);position:relative;flex:0 0 var(--main-content-width);font-family:'Montserrat', sans-serif;text-transform:uppercase;font-weight:700;padding-top:var(--header-top-padding);height:5 0vh}.logo.svelte-1fhwqaq a.svelte-1fhwqaq:link,.logo.svelte-1fhwqaq a.svelte-1fhwqaq:visited,.logo.svelte-1fhwqaq a.svelte-1fhwqaq:active,.logo.svelte-1fhwqaq a.svelte-1fhwqaq:hover{color:var(--primary-accent-color);text-decoration:none;font-size:2.42rem;position:sticky;top:var(--header-top-padding);display:block}.logo.svelte-1fhwqaq a.svelte-1fhwqaq:focus{outline:none}.logo.svelte-1fhwqaq svg{fill:var(--primary-accent-color);display:inline-block;line-height:0;position:fixed;top:var(--header-top-padding)}.name.svelte-1fhwqaq.svelte-1fhwqaq{display:inline-block;padding-top:0.4rem;margin-left:var(--lettermark-offset);position:fixed}.name.secondary.svelte-1fhwqaq.svelte-1fhwqaq{position:sticky}.name.svelte-1fhwqaq .ligature.svelte-1fhwqaq{letter-spacing:-0.07rem}.page.work .logo .name,.page.about .logo .name{position:sticky}.no-js .page .logo a:link,.no-js .page .logo a:visited,.no-js .page .logo a:active,.no-js .page .logo a:hover,.page.introduction .logo a:link,.page.introduction .logo a:visited,.page.introduction .logo a:active,.page.introduction .logo a:hover,.page.about .logo a:link,.page.about .logo a:visited,.page.about .logo a:active,.page.about .logo a:hover{color:var(--default-copy-color)}.no-js .page .logo svg,.page.introduction .logo svg,.page.about .logo svg{fill:var(--default-copy-color)}",g(document.head,t)),ue(this,e,$e,ye,s,{active:0,hasFixedName:1})}}function xe(t){let n,r,o,a;return{c(){n=w("div"),r=w("a"),o=b("Skip to main content (press enter)"),this.h()},l(e){n=q(e,"DIV",{class:!0});var t=_(n);r=q(t,"A",{class:!0,href:!0});var a=_(r);o=S(a,"Skip to main content (press enter)"),a.forEach(v),t.forEach(v),this.h()},h(){x(r,"class","visually-hidden svelte-1hr1w81"),x(r,"href",a="#"+t[0]),x(n,"class","svelte-1hr1w81")},m(e,t){m(e,n,t),g(n,r),g(r,o)},p(e,[t]){1&t&&a!==(a="#"+e[0])&&x(r,"href",a)},i:e,o:e,d(e){e&&v(n)}}}function Ee(e,t,n){let{contentId:r="main"}=t;return e.$$set=e=>{"contentId"in e&&n(0,r=e.contentId)},[r]}class _e extends de{constructor(e){var t;super(),document.getElementById("svelte-1hr1w81-style")||((t=w("style")).id="svelte-1hr1w81-style",t.textContent="div.svelte-1hr1w81{background-color:var(--header-accent-color);box-sizing:border-box;padding:0.25rem var(--content-left-margin);left:0;top:0;width:100%;position:fixed;z-index:2}a.svelte-1hr1w81{--height:1.2rem;clip-path:inset(50%);clip:rect(1px, 1px, 1px, 1px);font-size:calc(var(--height) - 0.4rem);height:1px;margin:-1px;overflow:hidden;padding:0;display:block;width:1px;transition:height 100ms}a.svelte-1hr1w81:focus{height:var(--height);width:auto;clip-path:none;clip:auto;outline:none}a.svelte-1hr1w81:link,a.svelte-1hr1w81:visited,a.svelte-1hr1w81:hover{color:#fff}a.svelte-1hr1w81:link,a.svelte-1hr1w81:visited{text-decoration:none}",g(document.head,t)),ue(this,e,Ee,xe,s,{contentId:0})}}const qe=pe();function Se(e){let t,n,r,o,a;const s=e[5].default,i=l(s,e,e[4],null);return{c(){t=w("link"),n=y(),r=w("div"),i&&i.c(),this.h()},l(e){const o=j('[data-svelte="svelte-wfe8vz"]',document.head);t=q(o,"LINK",{rel:!0,type:!0,href:!0}),o.forEach(v),n=A(e),r=q(e,"DIV",{class:!0});var a=_(r);i&&i.l(a),a.forEach(v),this.h()},h(){x(t,"rel","icon"),x(t,"type","image/svg+xml"),x(t,"href",e[1]),x(r,"class",o="page "+(e[2]||"")+" svelte-fwat4n")},m(o,s){g(document.head,t),m(o,n,s),m(o,r,s),i&&i.m(r,null),e[6](r),a=!0},p(e,[n]){(!a||2&n)&&x(t,"href",e[1]),i&&i.p&&16&n&&f(i,s,e,e[4],n,null,null),(!a||4&n&&o!==(o="page "+(e[2]||"")+" svelte-fwat4n"))&&x(r,"class",o)},i(e){a||(ne(i,e),a=!0)},o(e){re(i,e),a=!1},d(o){v(t),o&&v(n),o&&v(r),i&&i.d(o),e[6](null)}}}function Ae(e,t,n){let r,o;i(e,qe,e=>n(11,o=e));let{$$slots:a={},$$scope:s}=t;const{page:l}=qt();let c,f;i(e,l,e=>n(10,r=e));let u,d,h="#ffcf00",p="rgba(0, 0, 0, 0.7)";return D(async()=>{await(J(),B),n(8,h=c&&getComputedStyle(c,":after").getPropertyValue("--secondary-background-color")),n(9,p=c&&getComputedStyle(c).getPropertyValue("--default-copy-color"))}),e.$$set=e=>{"$$scope"in e&&n(4,s=e.$$scope)},e.$$.update=()=>{768&e.$$.dirty&&n(1,u=`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='66' height='66' fill='none'%3E%3Cpath fill='${encodeURIComponent(h)}' d='M65.03 57.33a3.22 3.22 0 01-2.96 3.45l-53.4 4.16a3.23 3.23 0 01-3.46-2.96L1 8.62a3.22 3.22 0 012.95-3.45L57.36 1a3.23 3.23 0 013.47 2.95l4.2 53.37z'/%3E%3Cpath fill='${encodeURIComponent(p)}' d='M11 14h44v6H11v-6zM36 51V35l-8 13h-3l-8-13-.03 16H11V24h5.26L26.5 40.78 36.7 24H42v27h-6z'/%3E%3C/svg%3E`),3072&e.$$.dirty&&n(2,d=function(e,t){let n,r=e.replace(/\/$/,"");if(f===e)n=t;else switch(r){case"":n="introduction";break;case"/about":n="about";break;case"/work/osher":n="work osher";break;case"/work/elim-springs":n="work elimsprings";break;case"/work/budgeting":n="work budgeting";break;case"/work/boxes-and-arrows":n="work boxesandarrows";break;case"/work/project-x":n="work projectx";break;default:n="error"}return f=e,n}(r.path,o))},[c,u,d,l,s,a,function(e){U[e?"unshift":"push"](()=>{c=e,n(0,c)})}]}class Le extends de{constructor(e){var t;super(),document.getElementById("svelte-fwat4n-style")||((t=w("style")).id="svelte-fwat4n-style",t.textContent='.page.svelte-fwat4n{--primary-background-color:#ffe600;--secondary-background-color:#ffcf00;--primary-accent-color:rgb(0, 109, 207);--transform:none;--timing-function:cubic-bezier(0.23, 1, 0.320, 1);--selection-color:#fff;--selection-background-color:rgba(0, 0, 0, 0.6);color:var(--default-copy-color);height:100vh;overflow:auto}.page.svelte-fwat4n ::selection{background-color:var(--selection-background-color);color:var(--selection-color)}.page.svelte-fwat4n::before{background-color:var(--primary-background-color);content:"";height:100%;left:0;position:fixed;top:0;transition-timing-function:var(--timing-function);transition:background-color var(--background-transition-duration);width:100%;z-index:-2;will-change:background-color}.page.svelte-fwat4n::after{background-color:var(--secondary-background-color);border-radius:0.5rem;content:"";mix-blend-mode:var(--blend-mode, normal);position:fixed;transform:var(--transform);transition-timing-function:var(--timing-function);transition:background-color var(--background-transition-duration),\n                    transform var(--background-transition-duration),\n                    width var(--background-transition-duration);z-index:-1;width:100rem;height:110rem;top:0;left:0;will-change:background-color, transform, width}.page.work.svelte-fwat4n::after,.page.about.svelte-fwat4n::after{border-radius:0;width:100%}.page.introduction.svelte-fwat4n{--transform:translate(-40rem, 25vh) rotate(-4.5deg)}.page.boxesandarrows.svelte-fwat4n{--primary-accent-color:#000;--primary-background-color:#e07dd9;--secondary-background-color:#995594;--transform:translate(-60rem, 9rem) rotate(8deg);--default-copy-color:#fff}.page.work.boxesandarrows.svelte-fwat4n{--transform:none}.page.osher.svelte-fwat4n{--default-copy-color:#fff;--primary-accent-color:#ffd916;--primary-background-color:#0da73b;--secondary-background-color:#05702d;--transform:translate(-47rem, calc(100vh - 115%)) rotate(11deg)}.page.work.osher.svelte-fwat4n{--transform:none}.page.budgeting.svelte-fwat4n{--primary-accent-color:#ffce00;--primary-background-color:#436172;--secondary-background-color:#38505e;--transform:translate(-59rem, -29rem) rotate(-15deg);--default-copy-color:#fff}.page.work.budgeting.svelte-fwat4n{--transform:none}.page.projectx.svelte-fwat4n{--default-copy-color:#fff;--primary-accent-color:#fff;--primary-background-color:#222;--secondary-background-color:#151515;--transform:translate(-53rem, -34rem) rotate(-6.5deg)}.page.work.projectx.svelte-fwat4n{--transform:none}.page.error.svelte-fwat4n{--default-copy-color:#fff;--primary-accent-color:#fff;--primary-background-color:#ff5c5c;--secondary-background-color:#bc2533;--transform:translate(-33rem, 20rem) rotate(-4.5deg)}.page.elimsprings.svelte-fwat4n{--default-copy-color:#fff;--primary-accent-color:#353535;--primary-background-color:#00c3b9;--secondary-background-color:#00a4a4;--transform:translate(-53rem, 10rem) rotate(4.5deg)}.page.work.elimsprings.svelte-fwat4n{--transform:none}.page.svelte-fwat4n article{width:var(--main-content-width);max-width:var(--max-main-content-width)}.page.svelte-fwat4n article > p:last-child,.page.svelte-fwat4n article > section:last-child > p:last-child{margin-bottom:10rem}.page.svelte-fwat4n article > p:last-child::after,.page.svelte-fwat4n article > section:last-child > p:last-child::after{background-color:var(--primary-accent-color);border-radius:2px;content:"";display:inline-block;height:0.9rem;line-height:0;margin-left:0.4rem;width:0.9rem}.page.svelte-fwat4n article aside{background-color:rgba(0, 0, 0, 0.4);padding:0.3rem 1.9rem;border-radius:4px;overflow:hidden;margin-top:1rem;position:relative}.page.svelte-fwat4n article a:link,.page.svelte-fwat4n article a:visited{--underline-width:2px;--underline-opacity:1;--link-mask-image:linear-gradient(to top, rgba(0, 0, 0, var(--underline-opacity)) calc(var(--underline-width) + 1px), black calc(var(--underline-width) + 1px));--link-mask-size:100%;--link-mask-position:50% 0;--link-mask-repeat:no-repeat;color:var(--primary-accent-color);font-weight:700;background-image:linear-gradient(to top, var(--primary-accent-color) var(--underline-width), transparent var(--underline-width));background-position:0 calc(100% + var(--underline-width));background-size:0 var(--underline-width);background-repeat:no-repeat;border-bottom:var(--underline-width) solid transparent;-webkit-mask-image:var(--link-mask-image);-webkit-mask-size:var(--link-mask-size);-webkit-mask-position:var(--link-mask-position);-webkit-mask-repeat:var(--link-mask-repeat);mask-image:var(--link-mask-image);mask-size:var(--link-mask-size);mask-position:var(--link-mask-position);mask-repeat:var(--link-mask-repeat);text-decoration:none;transition:background-size 200ms}.page.svelte-fwat4n article a:hover{background-size:100% var(--underline-width)}.page.svelte-fwat4n article a[target="_blank"]::after{content:"\\00A0🗗";font-weight:400}',g(document.head,t)),ue(this,e,Ae,Se,s,{})}}function Pe(e){let t,n,r,o,a,s;t=new _e({props:{contentId:je}}),r=new ke({props:{active:e[0]}});const i=e[1].default,c=l(i,e,e[2],null);return{c(){ie(t.$$.fragment),n=y(),ie(r.$$.fragment),o=y(),a=w("main"),c&&c.c(),this.h()},l(e){le(t.$$.fragment,e),n=A(e),le(r.$$.fragment,e),o=A(e),a=q(e,"MAIN",{id:!0,class:!0});var s=_(a);c&&c.l(s),s.forEach(v),this.h()},h(){x(a,"id",je),x(a,"class","svelte-kcwudd")},m(e,i){ce(t,e,i),m(e,n,i),ce(r,e,i),m(e,o,i),m(e,a,i),c&&c.m(a,null),s=!0},p(e,t){const n={};1&t&&(n.active=e[0]),r.$set(n),c&&c.p&&4&t&&f(c,i,e,e[2],t,null,null)},i(e){s||(ne(t.$$.fragment,e),ne(r.$$.fragment,e),ne(c,e),s=!0)},o(e){re(t.$$.fragment,e),re(r.$$.fragment,e),re(c,e),s=!1},d(e){fe(t,e),e&&v(n),fe(r,e),e&&v(o),e&&v(a),c&&c.d(e)}}}function Ce(e){let t,n;return t=new Le({props:{$$slots:{default:[Pe]},$$scope:{ctx:e}}}),{c(){ie(t.$$.fragment)},l(e){le(t.$$.fragment,e)},m(e,r){ce(t,e,r),n=!0},p(e,[n]){const r={};5&n&&(r.$$scope={dirty:n,ctx:e}),t.$set(r)},i(e){n||(ne(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){fe(t,e)}}}const je="content";function ze(e,t,n){let{$$slots:r={},$$scope:o}=t,{segment:a}=t;return e.$$set=e=>{"segment"in e&&n(0,a=e.segment),"$$scope"in e&&n(2,o=e.$$scope)},[a,r,o]}class Re extends de{constructor(e){var t;super(),document.getElementById("svelte-kcwudd-style")||((t=w("style")).id="svelte-kcwudd-style",t.textContent="main.svelte-kcwudd{box-sizing:border-box;padding-left:var(--content-left-margin);padding-top:var(--site-header-height);width:100%}",g(document.head,t)),ue(this,e,ze,Ce,s,{segment:0})}}function Ne(e){let t,n,r=e[1].stack+"";return{c(){t=w("pre"),n=b(r)},l(e){t=q(e,"PRE",{});var o=_(t);n=S(o,r),o.forEach(v)},m(e,r){m(e,t,r),g(t,n)},p(e,t){2&t&&r!==(r=e[1].stack+"")&&L(n,r)},d(e){e&&v(t)}}}function Ie(t){let n,r,o,a,s,i,l,c,f,u,d,h,p,k,E,P=t[1].message+"";document.title=n=t[0];let C=t[4]&&t[1].stack&&Ne(t);return{c(){r=y(),o=w("div"),a=w("h1"),s=b(t[2]),i=y(),l=w("p"),c=b(t[3]),f=y(),u=w("small"),d=b(t[0]),h=y(),p=b(P),k=y(),C&&C.c(),E=$(),this.h()},l(e){j('[data-svelte="svelte-4sldlf"]',document.head).forEach(v),r=A(e),o=q(e,"DIV",{class:!0});var n=_(o);a=q(n,"H1",{class:!0});var g=_(a);s=S(g,t[2]),g.forEach(v),i=A(n),l=q(n,"P",{class:!0});var m=_(l);c=S(m,t[3]),m.forEach(v),f=A(n),u=q(n,"SMALL",{class:!0});var w=_(u);d=S(w,t[0]),h=A(w),p=S(w,P),w.forEach(v),n.forEach(v),k=A(e),C&&C.l(e),E=$(),this.h()},h(){x(a,"class","svelte-16fwfob"),x(l,"class","lede svelte-16fwfob"),x(u,"class","svelte-16fwfob"),x(o,"class","svelte-16fwfob")},m(e,t){m(e,r,t),m(e,o,t),g(o,a),g(a,s),g(o,i),g(o,l),g(l,c),g(o,f),g(o,u),g(u,d),g(u,h),g(u,p),m(e,k,t),C&&C.m(e,t),m(e,E,t)},p(e,[t]){1&t&&n!==(n=e[0])&&(document.title=n),4&t&&L(s,e[2]),8&t&&L(c,e[3]),1&t&&L(d,e[0]),2&t&&P!==(P=e[1].message+"")&&L(p,P),e[4]&&e[1].stack?C?C.p(e,t):(C=Ne(e),C.c(),C.m(E.parentNode,E)):C&&(C.d(1),C=null)},i:e,o:e,d(e){e&&v(r),e&&v(o),e&&v(k),C&&C.d(e),e&&v(E)}}}function Oe(e,t,n){let r,o,{status:a}=t;switch(a){case 404:r="Something's missing. Sorry.",o="You may have been sent here in error or this page may have been (re)moved.";break;default:r="Page failed successfully.",o="Something went wrong. Can you try again? If you can't get to where you want to go please let me know."}let{error:s}=t;return e.$$set=e=>{"status"in e&&n(0,a=e.status),"error"in e&&n(1,s=e.error)},[a,s,r,o,false]}class De extends de{constructor(e){var t;super(),document.getElementById("svelte-16fwfob-style")||((t=w("style")).id="svelte-16fwfob-style",t.textContent="div.svelte-16fwfob{animation-delay:500ms;animation-duration:1000ms;animation-fill-mode:forwards;animation-iteration-count:1;animation-name:show-lede;animation-timing-function:cubic-bezier(.02, .02, 0, 1.01);max-width:var(--max-main-content-width);opacity:0;padding-top:36vh;width:var(--main-content-width)}h1.svelte-16fwfob{font-size:3em;line-height:1.1;font-weight:700;margin:0}.lede.svelte-16fwfob{font-size:1.5rem;line-height:1.5;opacity:0.7;font-weight:500}small.svelte-16fwfob{text-transform:uppercase;font-weight:700;font-size:1rem}",g(document.head,t)),ue(this,e,Oe,Ie,s,{status:0,error:1})}}function Me(e){let n,r,o;const a=[e[4].props];var s=e[4].component;function i(e){let n={};for(let e=0;e<a.length;e+=1)n=t(n,a[e]);return{props:n}}return s&&(n=new s(i())),{c(){n&&ie(n.$$.fragment),r=$()},l(e){n&&le(n.$$.fragment,e),r=$()},m(e,t){n&&ce(n,e,t),m(e,r,t),o=!0},p(e,t){const o=16&t?ae(a,[se(e[4].props)]):{};if(s!==(s=e[4].component)){if(n){ee();const e=n;re(e.$$.fragment,1,0,()=>{fe(e,1)}),te()}s?(n=new s(i()),ie(n.$$.fragment),ne(n.$$.fragment,1),ce(n,r.parentNode,r)):n=null}else s&&n.$set(o)},i(e){o||(n&&ne(n.$$.fragment,e),o=!0)},o(e){n&&re(n.$$.fragment,e),o=!1},d(e){e&&v(r),n&&fe(n,e)}}}function He(e){let t,n;return t=new De({props:{error:e[0],status:e[1]}}),{c(){ie(t.$$.fragment)},l(e){le(t.$$.fragment,e)},m(e,r){ce(t,e,r),n=!0},p(e,n){const r={};1&n&&(r.error=e[0]),2&n&&(r.status=e[1]),t.$set(r)},i(e){n||(ne(t.$$.fragment,e),n=!0)},o(e){re(t.$$.fragment,e),n=!1},d(e){fe(t,e)}}}function Ue(e){let t,n,r,o;const a=[He,Me],s=[];function i(e,t){return e[0]?0:1}return t=i(e),n=s[t]=a[t](e),{c(){n.c(),r=$()},l(e){n.l(e),r=$()},m(e,n){s[t].m(e,n),m(e,r,n),o=!0},p(e,o){let l=t;t=i(e),t===l?s[t].p(e,o):(ee(),re(s[l],1,1,()=>{s[l]=null}),te(),n=s[t],n||(n=s[t]=a[t](e),n.c()),ne(n,1),n.m(r.parentNode,r))},i(e){o||(ne(n),o=!0)},o(e){re(n),o=!1},d(e){s[t].d(e),e&&v(r)}}}function Ve(e){let n,r;const o=[{segment:e[2][0]},e[3].props];let a={$$slots:{default:[Ue]},$$scope:{ctx:e}};for(let e=0;e<o.length;e+=1)a=t(a,o[e]);return n=new Re({props:a}),{c(){ie(n.$$.fragment)},l(e){le(n.$$.fragment,e)},m(e,t){ce(n,e,t),r=!0},p(e,[t]){const r=12&t?ae(o,[4&t&&{segment:e[2][0]},8&t&&se(e[3].props)]):{};147&t&&(r.$$scope={dirty:t,ctx:e}),n.$set(r)},i(e){r||(ne(n.$$.fragment,e),r=!0)},o(e){re(n.$$.fragment,e),r=!1},d(e){fe(n,e)}}}function Te(e,t,n){let{stores:r}=t,{error:o}=t,{status:a}=t,{segments:s}=t,{level0:i}=t,{level1:l=null}=t,{notify:c}=t;var f,u;return D(c),f=ge,u=r,I().$$.context.set(f,u),e.$$set=e=>{"stores"in e&&n(5,r=e.stores),"error"in e&&n(0,o=e.error),"status"in e&&n(1,a=e.status),"segments"in e&&n(2,s=e.segments),"level0"in e&&n(3,i=e.level0),"level1"in e&&n(4,l=e.level1),"notify"in e&&n(6,c=e.notify)},[o,a,s,i,l,r,c]}class Be extends de{constructor(e){super(),ue(this,e,Te,Ve,s,{stores:5,error:0,status:1,segments:2,level0:3,level1:4,notify:6})}}const Fe=[],Je=[{js:()=>import("./index.b9e9ef7b.js"),css:[]},{js:()=>import("./about.6ab9bc54.js"),css:[]},{js:()=>import("./boxes-and-arrows.333714c5.js"),css:[]},{js:()=>import("./elim-springs.6a8032fb.js"),css:[]},{js:()=>import("./budgeting.1851e20b.js"),css:[]},{js:()=>import("./project-x.9bcf37bf.js"),css:[]},{js:()=>import("./osher.4f9f3c20.js"),css:[]}],Ke=[{pattern:/^\/$/,parts:[{i:0}]},{pattern:/^\/about\/?$/,parts:[{i:1}]},{pattern:/^\/work\/boxes-and-arrows\/?$/,parts:[null,{i:2}]},{pattern:/^\/work\/elim-springs\/?$/,parts:[null,{i:3}]},{pattern:/^\/work\/budgeting\/?$/,parts:[null,{i:4}]},{pattern:/^\/work\/project-x\/?$/,parts:[null,{i:5}]},{pattern:/^\/work\/osher\/?$/,parts:[null,{i:6}]}];function We(e,t={replaceState:!1}){const n=dt(new URL(e,document.baseURI));return n?(ct[t.replaceState?"replaceState":"pushState"]({id:it},"",e),pt(n,null).then(()=>{})):(location.href=e,new Promise(e=>{}))}const Ye="undefined"!=typeof __SAPPER__&&__SAPPER__;let Ge,Xe,Qe,Ze=!1,et=[],tt="{}";const nt={page:function(e){const t=pe(e);let n=!0;return{notify:function(){n=!0,t.update(e=>e)},set:function(e){n=!1,t.set(e)},subscribe:function(e){let r;return t.subscribe(t=>{(void 0===r||n&&t!==r)&&e(r=t)})}}}({}),preloading:pe(null),session:pe(Ye&&Ye.session)};let rt,ot;nt.session.subscribe(async e=>{if(rt=e,!Ze)return;ot=!0;const t=dt(new URL(location.href)),n=Xe={},{redirect:r,props:o,branch:a}=await mt(t);n===Xe&&await gt(r,a,o,t.page)});let at,st=null;let it,lt=1;const ct="undefined"!=typeof history?history:{pushState:(e,t,n)=>{},replaceState:(e,t,n)=>{},scrollRestoration:""},ft={};function ut(e){const t=Object.create(null);return e.length>0&&e.slice(1).split("&").forEach(e=>{let[,n,r=""]=/([^=]*)(?:=(.*))?/.exec(decodeURIComponent(e.replace(/\+/g," ")));"string"==typeof t[n]&&(t[n]=[t[n]]),"object"==typeof t[n]?t[n].push(r):t[n]=r}),t}function dt(e){if(e.origin!==location.origin)return null;if(!e.pathname.startsWith(Ye.baseUrl))return null;let t=e.pathname.slice(Ye.baseUrl.length);if(""===t&&(t="/"),!Fe.some(e=>e.test(t)))for(let n=0;n<Ke.length;n+=1){const r=Ke[n],o=r.pattern.exec(t);if(o){const n=ut(e.search),a=r.parts[r.parts.length-1],s=a.params?a.params(o):{},i={host:location.host,path:t,query:n,params:s};return{href:e.href,route:r,match:o,page:i}}}}function ht(){return{x:pageXOffset,y:pageYOffset}}async function pt(e,t,n,r){if(t)it=t;else{const e=ht();ft[it]=e,t=it=++lt,ft[it]=n?e:{x:0,y:0}}it=t,Ge&&nt.preloading.set(!0);const o=st&&st.href===e.href?st.promise:mt(e);st=null;const a=Xe={},{redirect:s,props:i,branch:l}=await o;if(a===Xe&&(await gt(s,l,i,e.page),document.activeElement&&document.activeElement.blur(),!n)){let e=ft[t];if(r){const t=document.getElementById(r.slice(1));t&&(e={x:0,y:t.getBoundingClientRect().top+scrollY})}ft[it]=e,e&&scrollTo(e.x,e.y)}}async function gt(e,t,n,r){if(e)return We(e.location,{replaceState:!0});if(nt.page.set(r),nt.preloading.set(!1),Ge)Ge.$set(n);else{n.stores={page:{subscribe:nt.page.subscribe},preloading:{subscribe:nt.preloading.subscribe},session:nt.session},n.level0={props:await Qe},n.notify=nt.page.notify;const e=document.querySelector("#sapper-head-start"),t=document.querySelector("#sapper-head-end");if(e&&t){for(;e.nextSibling!==t;)wt(e.nextSibling);wt(e),wt(t)}Ge=new Be({target:at,props:n,hydrate:!0})}et=t,tt=JSON.stringify(r.query),Ze=!0,ot=!1}async function mt(e){const{route:t,page:n}=e,r=n.path.split("/").filter(Boolean);let o=null;const a={error:null,status:200,segments:[r[0]]},s={fetch:(e,t)=>fetch(e,t),redirect:(e,t)=>{if(o&&(o.statusCode!==e||o.location!==t))throw new Error("Conflicting redirects");o={statusCode:e,location:t}},error:(e,t)=>{a.error="string"==typeof t?new Error(t):t,a.status=e}};let i;Qe||(Qe=Ye.preloaded[0]||me.call(s,{host:n.host,path:n.path,query:n.query,params:{}},rt));let l=1;try{const o=JSON.stringify(n.query),c=t.pattern.exec(n.path);let f=!1;i=await Promise.all(t.parts.map(async(t,i)=>{const u=r[i];if(function(e,t,n,r){if(r!==tt)return!0;const o=et[e];return!!o&&(t!==o.segment||!(!o.match||JSON.stringify(o.match.slice(1,e+2))===JSON.stringify(n.slice(1,e+2)))||void 0)}(i,u,c,o)&&(f=!0),a.segments[l]=r[i+1],!t)return{segment:u};const d=l++;if(!ot&&!f&&et[i]&&et[i].part===t.i)return et[i];f=!1;const{default:h,preload:p}=await function(e){const t="string"==typeof e.css?[]:e.css.map(vt);return t.unshift(e.js()),Promise.all(t).then(e=>e[0])}(Je[t.i]);let g;return g=Ze||!Ye.preloaded[i+1]?p?await p.call(s,{host:n.host,path:n.path,query:n.query,params:t.params?t.params(e.match):{}},rt):{}:Ye.preloaded[i+1],a["level"+d]={component:h,props:g,segment:u,match:c,part:t.i}}))}catch(e){a.error=e,a.status=500,i=[]}return{redirect:o,props:a,branch:i}}function vt(e){const t="client/"+e;if(!document.querySelector(`link[href="${t}"]`))return new Promise((e,n)=>{const r=document.createElement("link");r.rel="stylesheet",r.href=t,r.onload=()=>e(),r.onerror=n,document.head.appendChild(r)})}function wt(e){e.parentNode.removeChild(e)}function bt(e){const t=dt(new URL(e,document.baseURI));if(t)return st&&e===st.href||function(e,t){st={href:e,promise:t}}(e,mt(t)),st.promise}let yt;function $t(e){clearTimeout(yt),yt=setTimeout(()=>{kt(e)},20)}function kt(e){const t=Et(e.target);t&&"prefetch"===t.rel&&bt(t.href)}function xt(e){if(1!==function(e){return null===e.which?e.button:e.which}(e))return;if(e.metaKey||e.ctrlKey||e.shiftKey)return;if(e.defaultPrevented)return;const t=Et(e.target);if(!t)return;if(!t.href)return;const n="object"==typeof t.href&&"SVGAnimatedString"===t.href.constructor.name,r=String(n?t.href.baseVal:t.href);if(r===location.href)return void(location.hash||e.preventDefault());if(t.hasAttribute("download")||"external"===t.getAttribute("rel"))return;if(n?t.target.baseVal:t.target)return;const o=new URL(r);if(o.pathname===location.pathname&&o.search===location.search)return;const a=dt(o);if(a){pt(a,null,t.hasAttribute("sapper-noscroll"),o.hash),e.preventDefault(),ct.pushState({id:it},"",o.href)}}function Et(e){for(;e&&"A"!==e.nodeName.toUpperCase();)e=e.parentNode;return e}function _t(e){if(ft[it]=ht(),e.state){const t=dt(new URL(location.href));t?pt(t,e.state.id):location.href=location.href}else lt=lt+1,function(e){it=e}(lt),ct.replaceState({id:it},"",location.href)}const qt=()=>{return e=ge,I().$$.context.get(e);var e};var St;St={target:document.body},"scrollRestoration"in ct&&(ct.scrollRestoration="manual"),addEventListener("beforeunload",()=>{ct.scrollRestoration="auto"}),addEventListener("load",()=>{ct.scrollRestoration="manual"}),function(e){at=e}(St.target),addEventListener("click",xt),addEventListener("popstate",_t),addEventListener("touchstart",kt),addEventListener("mousemove",$t),Promise.resolve().then(()=>{const{hash:e,href:t}=location;ct.replaceState({id:lt},"",t);const n=new URL(location.href);if(Ye.error)return function(e){const{host:t,pathname:n,search:r}=location,{session:o,preloaded:a,status:s,error:i}=Ye;Qe||(Qe=a&&a[0]),gt(null,[],{error:i,status:s,session:o,level0:{props:Qe},level1:{props:{status:s,error:i},component:De},segments:a},{host:t,path:n,query:ut(r),params:{}})}();const r=dt(n);return r?pt(r,lt,!0,e):void 0});export{ce as A,fe as B,ee as C,te as D,e as E,oe as F,j as G,k as H,We as I,qe as J,t as K,E as L,p as M,ae as N,d as O,u as P,de as S,g as a,q as b,l as c,_ as d,w as e,v as f,x as g,P as h,ue as i,m as j,re as k,M as l,U as m,h as n,O as o,b as p,S as q,C as r,s,ne as t,f as u,L as v,y as w,A as x,ie as y,le as z};
