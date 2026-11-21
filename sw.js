// Fiche de police : ouverture sans connexion de l'espace hôte. Version 1
// Aucune donnée personnelle ne passe par ce fichier.
const PREFIX = 'fiche-police-';
const CACHE = PREFIX + 'v1';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './apple-touch-icon.png', './icon-192.png', './icon-512.png', './icon-maskable-512.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  // Ne supprime que les anciennes copies de cette application (Diabat et le planning gardent les leurs).
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith(PREFIX) && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  const url = new URL(req.url);
  const same = url.origin === location.origin;
  if (!same && !/^(cdnjs\.cloudflare\.com|fonts\.googleapis\.com|fonts\.gstatic\.com)$/.test(url.hostname)) return;
  if (same && req.mode === 'navigate') {
    // Page : version en ligne si disponible (mise à jour), sinon copie hors connexion
    e.respondWith((async () => {
      try {
        const ctrl = new AbortController(); const t = setTimeout(() => ctrl.abort(), 4000);
        const res = await fetch(req, { signal: ctrl.signal }); clearTimeout(t);
        if (res.ok) { const copy = res.clone(); caches.open(CACHE).then(c => c.put('./index.html', copy)); }
        return res;
      } catch (err) {
        return (await caches.match('./index.html')) || Response.error();
      }
    })());
    return;
  }
  // Icônes, polices et module PDF : copie gardée d'abord
  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res.ok || res.type === 'opaque') { const copy = res.clone(); caches.open(CACHE).then(c => c.put(req, copy)); }
    return res;
  })));
});
