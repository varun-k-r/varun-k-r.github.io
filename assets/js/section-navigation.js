// Keep native fragment navigation and CSS scroll offsets instead of the theme's
// animated scroll handler, which assumes a non-sticky header.
document.addEventListener('click', function (event) {
  if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
  const link = event.target.closest('a[href]');
  if (!link) return;
  const url = new URL(link.href, window.location.href);
  if (url.origin !== window.location.origin || url.pathname !== window.location.pathname || !url.hash) return;
  let id;
  try { id = decodeURIComponent(url.hash.slice(1)); } catch (_) { return; }
  if (!document.getElementById(id)) return;

  event.stopImmediatePropagation();
  const menu = link.closest('.hidden-links');
  if (menu) {
    menu.classList.add('hidden');
    document.querySelector('.greedy-nav__toggle')?.classList.remove('close');
  }
  // Retain a preview/cache-version query while jumping within this document.
  if (url.search !== window.location.search) {
    event.preventDefault();
    window.location.hash = url.hash;
  }
}, true);
