let nav_items = document.querySelectorAll('.nav_items');
let close_menu = document.querySelector('.close_menu');
let open_menu = document.querySelector('.open_menu');
let body = document.querySelector('body');

open_menu.addEventListener('click', () => {
  gsap.to(nav_items, 1, { right: 0, ease: Power4.easeOut });
  gsap.to(close_menu, { display: 'block', opacity: 1, delay: 0.5 });
  body.style.overflow = 'hidden';
});

close_menu.addEventListener('click', () => {
  gsap.to(nav_items, { right: '100%' });
  gsap.to(close_menu, { display: 'none', opacity: 0 });
  body.style.overflow = 'scroll';
});

gsap.from('.hero_text > *', 1.2, { opacity: 0, y: 100, stagger: 0.2 });
gsap.from('.hero_img ', 1.3, { opacity: 0, x: -100 });
