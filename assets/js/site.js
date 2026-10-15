(() => {
  const root = document.documentElement;
  const themeToggle = document.querySelector('.theme-toggle');
  themeToggle?.addEventListener('click', () => {
    const isDark = root.dataset.theme === 'dark' || (!root.dataset.theme && matchMedia('(prefers-color-scheme: dark)').matches);
    const next = isDark ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('theme', next); } catch (_) {}
  });

  const search = document.querySelector('#post-search');
  if (!search) return;
  const items = [...document.querySelectorAll('#post-list .archive-item')];
  const count = document.querySelector('#result-count');
  const empty = document.querySelector('#no-results');
  search.addEventListener('input', () => {
    const query = search.value.trim().toLocaleLowerCase();
    let visible = 0;
    for (const item of items) {
      const matches = item.dataset.search.toLocaleLowerCase().includes(query);
      item.hidden = !matches;
      if (matches) visible++;
    }
    count.textContent = `${visible} 篇文章`;
    empty.hidden = visible !== 0;
  });
})();
