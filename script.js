const menuButton = document.querySelector('.menu-toggle');
const menu = document.querySelector('.nav nav');
menuButton?.addEventListener('click', () => {
  const open = menu.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.textContent = open ? '×' : '☰';
});
menu?.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  menu.classList.remove('is-open');
  menuButton?.setAttribute('aria-expanded', 'false');
  if (menuButton) menuButton.textContent = '☰';
}));
const dialog = document.querySelector('.lightbox');
document.querySelectorAll('.art-item').forEach(btn => btn.addEventListener('click', () => {
  const img = dialog.querySelector('img');
  img.src = btn.dataset.src;
  img.alt = btn.dataset.caption || 'Expanded portfolio artwork';
  dialog.querySelector('p').textContent = btn.dataset.caption || '';
  dialog.showModal();
}));
dialog.querySelector('.lightbox-close').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
