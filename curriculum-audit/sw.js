// The audit moved to /vc-audit/. This worker removes itself and its cache wherever it is still installed.
self.addEventListener("install",()=>self.skipWaiting());
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k.startsWith("ca-audit-")).map(k=>caches.delete(k)))).then(()=>self.registration.unregister()).then(()=>self.clients.matchAll()).then(cs=>cs.forEach(c=>c.navigate("https://samuelkerr48-sm.github.io/vc-audit/"))));});
