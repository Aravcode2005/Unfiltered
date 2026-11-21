(() => {
  const menuButton = document.querySelector('.menu-toggle');
  const menu = document.querySelector('.site-menu');
  menuButton?.addEventListener('click', () => {
    const open = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!open));
    menu.classList.toggle('open', !open);
    menuButton.setAttribute('aria-label', open ? 'Open navigation' : 'Close navigation');
  });
  menu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    menu.classList.remove('open');
    menuButton?.setAttribute('aria-expanded','false');
    menuButton?.setAttribute('aria-label','Open navigation');
  }));
  const filters = [...document.querySelectorAll('.filter')];
  const projects = [...document.querySelectorAll('.project-card')];
  filters.forEach(button => button.addEventListener('click', () => {
    const category = button.dataset.filter;
    filters.forEach(b => {b.classList.toggle('active', b === button); b.setAttribute('aria-pressed', String(b === button));});
    projects.forEach(card => {card.hidden = category !== 'all' && !(card.dataset.category||'').split(' ').includes(category);});
  }));
  const progress = document.querySelector('.scroll-progress');
  let pending = false;
  function updateProgress() {
    const max = document.documentElement.scrollHeight - window.innerHeight;
    progress.style.width = `${max > 0 ? Math.max(0, Math.min(100, window.scrollY / max * 100)) : 0}%`;
    pending = false;
  }
  addEventListener('scroll', () => {if(!pending){requestAnimationFrame(updateProgress);pending=true;}}, {passive:true});
  updateProgress();
  const dialog = document.getElementById('lightbox');
  const viewer = dialog?.querySelector('img');
  const description = dialog?.querySelector('p');
  document.querySelectorAll('.photo-tile').forEach(tile => tile.addEventListener('click', () => {
    if (!dialog || !viewer) return;
    viewer.src = tile.dataset.photo;
    viewer.alt = tile.querySelector('img')?.alt || 'Photograph';
    description.textContent = tile.dataset.caption || '';
    dialog.showModal();
  }));
  dialog?.querySelector('.lightbox-close')?.addEventListener('click', () => dialog.close());
  dialog?.addEventListener('click', event => {if (event.target === dialog) dialog.close();});
  addEventListener('keydown', (event) => { if (event.key === 'Escape' && dialog?.open) dialog.close(); });
})();
