!function(){"use strict";const e=1603685435528,n="cache"+e,s=["CNAME"],r=["client/client.04c4e36c.js","client/index.6ac14592.js","client/about.73da144c.js","client/boxes-and-arrows.ccd6a6ff.js","client/Figure.551cd2cb.js","client/elim-springs.c6441c66.js","client/MobileImage.584cb481.js","client/budgeting.fb31fb85.js","client/project-x.b11d385e.js","client/osher.270e016e.js"].concat(["service-worker-index.html","Budgeting.png","CNAME","boxes-and-arrows/article-page.jpg","boxes-and-arrows/category-page.jpg","boxes-and-arrows/front-page.jpg","boxes-and-arrows/information-architecture.png","boxes-and-arrows/issue-transitions-1.png","boxes-and-arrows/issue-transitions-2.png","boxes-and-arrows/issue-transitions-3.png","boxes-and-arrows/mockup-1.png","boxes-and-arrows/mockup-2.png","boxes-and-arrows/mockup-3.png","boxes-and-arrows/mockup-4.png","boxes-and-arrows/original-design.png","boxes-and-arrows/search-page.jpg","boxes-and-arrows/style-guide-1.png","boxes-and-arrows/style-guide-2.png","boxes-and-arrows/style-guide-3.png","boxes-and-arrows/topic-page.jpg","boxesandarrows-logo.svg","broken-image.svg","budgeting/balance-over-time.2x.png","budgeting/balance-over-time.png","budgeting/budgeting-sketch.jpg","budgeting/income.2x.png","budgeting/income.png","budgeting/onboarding.2x.png","budgeting/onboarding.png","budgeting/overview.2x.png","budgeting/overview.png","budgeting/pattern-library.2x.png","budgeting/pattern-library.png","budgeting/transaction-histogram.2x.png","budgeting/transaction-histogram.png","budgeting/transactions.2x.png","budgeting/transactions.png","budgeting/wireframes/bank-accounts.png","budgeting/wireframes/budget-empty.png","budgeting/wireframes/budget.png","budgeting/wireframes/savings-goals.png","budgeting/wireframes/savings.png","budgeting/wireframes/spending.png","budgeting/wireframes/transactions-for-account.png","budgeting/wireframes/transactions-for-all-accounts.png","budgeting/wireframes/welcome.png","budgeting-logo.svg","elim-springs/about-mobile.2x.png","elim-springs/about-mobile.png","elim-springs/about.2x.png","elim-springs/about.png","elim-springs/brand.2x.png","elim-springs/brand.png","elim-springs/buttons.2x.png","elim-springs/buttons.png","elim-springs/donations.2x.png","elim-springs/donations.png","elim-springs/events.2x.png","elim-springs/events.png","elim-springs/front-page-mobile.2x.png","elim-springs/front-page-mobile.png","elim-springs/front-page.2x.png","elim-springs/front-page.png","elim-springs/iteration-1.2x.png","elim-springs/iteration-1.png","elim-springs/iteration-2.2x.png","elim-springs/iteration-2.png","elim-springs/iteration-3.2x.png","elim-springs/iteration-3.png","elim-springs/iteration-4.2x.png","elim-springs/iteration-4.png","elim-springs/iteration-5.2x.png","elim-springs/iteration-5.png","elim-springs/iteration-6.2x.png","elim-springs/iteration-6.png","elim-springs/location-a.2x.png","elim-springs/location-a.png","elim-springs/location-b.2x.png","elim-springs/location-b.png","elim-springs/logo-typeface.png","elim-springs/navigation-open-mobile.2x.png","elim-springs/navigation-open-mobile.png","elim-springs/typography.2x.png","elim-springs/typography.png","elimsprings-logo.svg","fonts/inter-v3.15-latin-var.woff2","fonts/montserrat-v15-latin-600.woff2","fonts/montserrat-v15-latin-700.woff2","lettermark.svg","main.css","osher/checkout-bpmn.png","osher/course-browse-information.png","osher/course-browse.png","osher/course-discovery.png","osher/course-page.png","osher/front-page-mobile.png","osher/front-page-warning.png","osher/front-page.png","osher/grayboxing.png","osher/instructor-recruitment-bpmn.png","osher/membership.png","osher/payment-bpmn.png","osher/professional-development-front-page-cropped.png","osher/professional-development-front-page.png","osher/registration-bpmn.png","osher/wireframe-1.png","osher/wireframe-2.png","osher/wireframe-3.png","osher/wireframe-4.png","osher/wireframe-5.png","osher/wireframe-6.png","osher/wireframe-7.png","osher-logo.svg","project-x/customer-contact-history.png","project-x/customer-life-cycle.png","project-x/customer-list.png","project-x/customer-record-errors-messages.png","project-x/customer-record-first-contact.png","project-x/customer-record-quick-edit.png","project-x/customer-record.png","project-x/style-guidelines.png","project-x/user-journey.png","project-x/user-workflow.png"].filter(e=>!s.includes(e))),i=new Set(r);self.addEventListener("install",e=>{e.waitUntil(caches.open(n).then(e=>e.addAll(r)).then(()=>{self.skipWaiting()}))}),self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(async e=>{for(const s of e)s!==n&&await caches.delete(s);self.clients.claim()}))}),self.addEventListener("fetch",n=>{if("GET"!==n.request.method||n.request.headers.has("range"))return;const s=new URL(n.request.url);s.protocol.startsWith("http")&&(s.hostname===self.location.hostname&&s.port!==self.location.port||(s.host===self.location.host&&i.has(s.pathname)?n.respondWith(caches.match(n.request)):"only-if-cached"!==n.request.cache&&n.respondWith(caches.open("offline"+e).then(async e=>{try{const s=await fetch(n.request);return e.put(n.request,s.clone()),s}catch(s){const r=await e.match(n.request);if(r)return r;throw s}}))))})}();
