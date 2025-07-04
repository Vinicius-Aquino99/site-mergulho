const toggleBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

toggleBtn.addEventListener('click', () => {
  menu.classList.toggle('active');
});

document.querySelectorAll('#menu a').forEach(link => {
  link.addEventListener('click', () => {
    menu.classList.remove('active');
  });
});

document.addEventListener('click', (e) => {
  if (!menu.contains(e.target) && !toggleBtn.contains(e.target)) {
    menu.classList.remove('active');
  }
});