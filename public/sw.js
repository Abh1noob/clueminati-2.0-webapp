if(!self.define){let e,s={};const i=(i,a)=>(i=new URL(i+".js",a).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(a,n)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let t={};const r=e=>i(e,c),o={module:{uri:c},exports:t,require:r};s[c]=Promise.all(a.map((e=>o[e]||r(e)))).then((e=>(n(...e),t)))}}define(["./workbox-3c9d0171"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/KM_Lh-6iRCjNq14qGx3r3/_buildManifest.js",revision:"714107ebfcbd99972f9e3e1a1334d352"},{url:"/_next/static/KM_Lh-6iRCjNq14qGx3r3/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/160-c1b317ad9fcceefc.js",revision:"KM_Lh-6iRCjNq14qGx3r3"},{url:"/_next/static/chunks/456-cac66dc50c8eb1e7.js",revision:"KM_Lh-6iRCjNq14qGx3r3"},{url:"/_next/static/chunks/538-97225ed68ae87ea5.js",revision:"KM_Lh-6iRCjNq14qGx3r3"},{url:"/_next/static/chunks/663-e1eb50824d0f292d.js",revision:"KM_Lh-6iRCjNq14qGx3r3"},{url:"/_next/static/chunks/846-7bf507bfbe46376e.js",revision:"KM_Lh-6iRCjNq14qGx3r3"},{url:"/_next/static/chunks/app/_not-found/page-160eadccca337a83.js",revision:"KM_Lh-6iRCjNq14qGx3r3"},{url:"/_next/static/chunks/app/giveup/page-d2ceffb675a070ba.js",revision:"KM_Lh-6iRCjNq14qGx3r3"},{url:"/_next/static/chunks/app/layout-27fd24e28912d8f1.js",revision:"KM_Lh-6iRCjNq14qGx3r3"},{url:"/_next/static/chunks/app/login/page-b15d5e21f6b3f428.js",revision:"KM_Lh-6iRCjNq14qGx3r3"},{url:"/_next/static/chunks/app/page-6f7b586d6c1f5233.js",revision:"KM_Lh-6iRCjNq14qGx3r3"},{url:"/_next/static/chunks/app/profile/page-410e93fda39da74d.js",revision:"KM_Lh-6iRCjNq14qGx3r3"},{url:"/_next/static/chunks/app/team/created/page-3ef97d05be5035d1.js",revision:"KM_Lh-6iRCjNq14qGx3r3"},{url:"/_next/static/chunks/app/team/page-23a92f6912dd25c6.js",revision:"KM_Lh-6iRCjNq14qGx3r3"},{url:"/_next/static/chunks/c7779106-6145ac03ef153cfd.js",revision:"KM_Lh-6iRCjNq14qGx3r3"},{url:"/_next/static/chunks/framework-6e06c675866dc992.js",revision:"KM_Lh-6iRCjNq14qGx3r3"},{url:"/_next/static/chunks/main-012aee27854e7cd5.js",revision:"KM_Lh-6iRCjNq14qGx3r3"},{url:"/_next/static/chunks/main-app-479b02f7b64522ed.js",revision:"KM_Lh-6iRCjNq14qGx3r3"},{url:"/_next/static/chunks/pages/_app-649de3fb2c8c5c3f.js",revision:"KM_Lh-6iRCjNq14qGx3r3"},{url:"/_next/static/chunks/pages/_error-5c60d804d39d5be4.js",revision:"KM_Lh-6iRCjNq14qGx3r3"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-b433815db757ab0a.js",revision:"KM_Lh-6iRCjNq14qGx3r3"},{url:"/_next/static/css/2725c73696b5839b.css",revision:"2725c73696b5839b"},{url:"/_next/static/media/blue_icon.2f3b73e4.svg",revision:"09d4f5b565c0ed60d8bf45e96f0d754d"},{url:"/_next/static/media/boxes.4719d299.svg",revision:"c067f309baf2adb6fac7dc15534cc438"},{url:"/_next/static/media/circle.79e08899.svg",revision:"eb2ea513989e46ec7bbef60a398d481e"},{url:"/_next/static/media/e11418ac562b8ac1-s.p.woff2",revision:"0e46e732cced180e3a2c7285100f27d4"},{url:"/_next/static/media/green_icon.8cc4739c.svg",revision:"2c44156736ab5d08abce8715d6327792"},{url:"/_next/static/media/ico1.82aa0257.svg",revision:"38e9aaf067f8804b136bca078b86f73f"},{url:"/_next/static/media/ico2.fdc514d0.svg",revision:"cbdc0c2ed303d5afcd201e50cdaa0201"},{url:"/_next/static/media/orange_icon.f6111d91.svg",revision:"4a830e23fb2ccd890f5169b1c1751984"},{url:"/cc-logo.svg",revision:"2c9784356f9fb00eabe3f523195b5886"},{url:"/chef.svg",revision:"bdd984e9be8b1686cf3cc5396090a193"},{url:"/clueminati.svg",revision:"893144c82ef9abc608811ada78c9cbe8"},{url:"/favicon.ico",revision:"7f98bbc43ba0d1dbf3564adf0821a304"},{url:"/grid.svg",revision:"b7499fc99c6913f34cf7f241540b29af"},{url:"/manifest.json",revision:"7455e3219b3f789ebfdee855631e3adc"},{url:"/rank-icons/bronze.svg",revision:"e0e9ed8d8363a82a3aa443aa42d7c2e3"},{url:"/rank-icons/diamond.svg",revision:"aca40a0e582ea112d6790a812abd3288"},{url:"/rank-icons/golden.svg",revision:"978601688e16ea243d6eb3d5a9811627"},{url:"/rank-icons/silver.svg",revision:"5eda54d31114404d2181d9391a6f3111"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({response:e})=>e&&"opaqueredirect"===e.type?new Response(e.body,{status:200,statusText:"OK",headers:e.headers}):e}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:2592e3})]}),"GET"),e.registerRoute(/\/_next\/static.+\.js$/i,new e.CacheFirst({cacheName:"next-static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4|webm)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:48,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e,url:{pathname:s}})=>!(!e||s.startsWith("/api/auth/callback")||!s.startsWith("/api/"))),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&"1"===e.headers.get("Next-Router-Prefetch")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc-prefetch",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({request:e,url:{pathname:s},sameOrigin:i})=>"1"===e.headers.get("RSC")&&i&&!s.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages-rsc",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:{pathname:e},sameOrigin:s})=>s&&!e.startsWith("/api/")),new e.NetworkFirst({cacheName:"pages",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({sameOrigin:e})=>!e),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
