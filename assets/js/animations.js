export default function animationsInit() {
   const $header = document.querySelector('.header');

   let lastScrollY = window.scrollY;
   window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
         $header.classList.add('disable');
      } else {
         $header.classList.remove('disable');
      }

      lastScrollY = currentScrollY;
   });

   // Scroll reveal
   setTimeout(() => {
      const directions = ['top', 'right', 'bottom', 'left'];

      directions.forEach((direction) => {
         ScrollReveal().reveal(`[data-reveal="${direction}"]`, {
            origin: direction,
            distance: '100px',
            duration: 1600,
            reset: false,
            opacity: 0,
         });
      });
   }, 200);
}
