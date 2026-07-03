(function () {
  const search = document.getElementById('wikiSearch');
  if (!search) return;
  const links = Array.from(document.querySelectorAll('.toc-panel a'));
  search.addEventListener('input', function () {
    const q = search.value.trim().toLowerCase();
    for (const link of links) {
      link.style.display = link.textContent.toLowerCase().includes(q) ? '' : 'none';
    }
  });
})();
