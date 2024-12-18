(function () {
  const r = document.createElement('link').relList;
  if (r && r.supports && r.supports('modulepreload')) return;
  for (const e of document.querySelectorAll('link[rel="modulepreload"]')) s(e);
  new MutationObserver((e) => {
    for (const t of e)
      if (t.type === 'childList')
        for (const o of t.addedNodes) o.tagName === 'LINK' && o.rel === 'modulepreload' && s(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function i(e) {
    const t = {};
    return (
      e.integrity && (t.integrity = e.integrity),
      e.referrerPolicy && (t.referrerPolicy = e.referrerPolicy),
      e.crossOrigin === 'use-credentials'
        ? (t.credentials = 'include')
        : e.crossOrigin === 'anonymous'
          ? (t.credentials = 'omit')
          : (t.credentials = 'same-origin'),
      t
    );
  }
  function s(e) {
    if (e.ep) return;
    e.ep = !0;
    const t = i(e);
    fetch(e.href, t);
  }
})();
const c = [
  {
    id: 1,
    title: 'The Grand Adventure',
    description: 'A thrilling tale of exploration and courage.',
    image: '/images/grand-adventure.jpg',
  },
  {
    id: 2,
    title: 'Romance in the Park',
    description: 'A heartwarming story of love found unexpectedly.',
    image: '/images/romance-park.jpg',
  },
  {
    id: 3,
    title: 'Space Odyssey',
    description: 'Journey through the cosmos in an epic adventure.',
    image: '/images/space-odyssey.jpg',
  },
];
function a() {
  const n = document.querySelector('.movies');
  c.forEach((r) => {
    const i = document.createElement('div');
    i.classList.add('movie'),
      (i.innerHTML = `
        <h2>${r.title}<h2>
        <img src="${r.image}" alt="${r.title}">
        <p>${r.description}</p>
        `),
      n.appendChild(i);
  });
}
a();
