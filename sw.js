/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-731c7a9763ee58461566.js"
  },
  {
    "url": "app.ae4a6a7c3a8ae8b47fb3.css"
  },
  {
    "url": "app-faa0da6c66aa7c066bce.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-028b19aef758163ddf02.js"
  },
  {
    "url": "index.html",
    "revision": "5d417d45329ceb7063965ca2cfaaecd3"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "8ad5375dfadece6680407b5621a59106"
  },
  {
    "url": "0.dc08b5aa5844822ee5a4.css"
  },
  {
    "url": "component---src-pages-index-js.a530c637b391377dc909.css"
  },
  {
    "url": "0-09d0914e0aa0a74d79d2.js"
  },
  {
    "url": "component---src-pages-index-js-c603016b8b540a1f5667.js"
  },
  {
    "url": "static/d/318/path---index-6a9-WDfGuRNEXZKePkYqyViZDZWpu5k.json",
    "revision": "0532ae05fa308ae50b721be4fb8db1b6"
  },
  {
    "url": "component---src-pages-404-js.c067075f489f1fef2ebd.css"
  },
  {
    "url": "component---src-pages-404-js-a5c4465f260bb43b0617.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/520/path---offline-plugin-app-shell-fallback-a-30-c5a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "55a9292126f8836e91e5d40b0a8cb54f"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/first-gatsby-site/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});