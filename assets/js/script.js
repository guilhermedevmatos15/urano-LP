import animationsInit from "./animations.js";

// Inicializando animações
animationsInit();

// Lógica do menu
(() => {
   const menu = document.querySelector('.menu');
   const $activeMenuElements = [...document.querySelectorAll('[data-menu="on"]')];
   const $disableMenuElements = [...document.querySelectorAll('[data-menu="off"]')];

   $activeMenuElements.forEach((element) => {
      element.addEventListener('click', () => {
         menu.classList.add('active');
      });
   });

   $disableMenuElements.forEach((element) => {
      element.addEventListener('click', () => {
         menu.classList.remove('active');
      });
   });
   
   window.addEventListener('resize', () => {
      if (window.innerWidth >= 900) {
         menu.classList.remove('active');
      }
   });
})();
