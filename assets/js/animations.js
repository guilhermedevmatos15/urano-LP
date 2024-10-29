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

   const scroll = new SmoothScroll('a[href*="#"]', {
      speed: 800, // Velocidade do scroll em milissegundos
      offset: 150,  // Ajuste para parar antes ou depois do destino
      easing: 'easeInOutCubic' // Efeito de aceleração do scroll
   });
}
