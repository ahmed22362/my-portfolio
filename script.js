// Scroll-triggered reveal animations using IntersectionObserver
(function () {
  const items = document.querySelectorAll('.reveal, .reveal-up, .reveal-x');

  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -80px 0px' }
  );

  items.forEach((el) => observer.observe(el));
})();

// Tech icon hover-color tinting (mirrors the React version)
(function () {
  const icons = document.querySelectorAll('.icon');
  icons.forEach((el) => {
    const color = el.dataset.color;
    if (!color) return;
    const img = el.querySelector('img');
    if (!img) return;

    el.addEventListener('mouseenter', () => {
      const slug = img.src.split('/').slice(-2)[0];
      const cleanColor = color.replace('#', '');
      img.src = `https://cdn.simpleicons.org/${slug}/${cleanColor}`;
    });
    el.addEventListener('mouseleave', () => {
      const slug = img.src.split('/').slice(-2)[0];
      img.src = `https://cdn.simpleicons.org/${slug}/cbd5e1`;
    });
  });
})();
