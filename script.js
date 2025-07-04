const toggleBtn = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');
const homeBtn = document.getElementById('home-btn');

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

window.addEventListener('scroll', () => {
    const hero = document.getElementById('hero');
    const scrollPosition = window.scrollY;

    if (window.scrollY > 100) {
        homeBtn.classList.remove('hidden');
    } else {
        homeBtn.classList.add('hidden');
    }

    hero.style.backgroundPositionY = `${scrollPosition * 0.5}px`
}, {passive: true});

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            entry.target.classList.remove('invisible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.5
});

document.querySelectorAll('.bloco').forEach(bloco => {
    observer.observe(bloco);
})

document.querySelectorAll('.curso').forEach(curs => {
    observer.observe(curs);
} )

document.querySelectorAll('.saidas').forEach(saida => {
    observer.observe(saida);
})

observer.observe(document.querySelector('.icones'));