import animationsInit from "./animations.js";

// Inicializando animações
animationsInit();

// Lógica modal
(() => {
   const $modalMenu = document.querySelector('.modal--menu');
   const $activeMenuElements = [...document.querySelectorAll('[data-menu="on"]')];
   const $disableMenuElements = [...document.querySelectorAll('[data-menu="off"]')];

   $activeMenuElements.forEach((element) => {
      element.addEventListener('click', () => {
         $modalMenu.classList.add('active');
      });
   });

   $disableMenuElements.forEach((element) => {
      element.addEventListener('click', () => {
         $modalMenu.classList.remove('active');
      });
   });
   
   window.addEventListener('resize', () => {
      if (window.innerWidth >= 900) {
         menu.classList.remove('active');
      }
   });

   const $modalVideo = document.querySelector('.modal--video');
   const $activeVideoElements = [...document.querySelectorAll('[data-video="on"]')];
   const $disableVideoElements = [...document.querySelectorAll('[data-video="off"]')];
   const $iframe = $modalVideo.querySelector('iframe');

   $activeVideoElements.forEach((element) => {
      element.addEventListener('click', () => {
         $modalVideo.classList.add('active');
      });
   });
   $disableVideoElements.forEach((element) => {
      element.addEventListener('click', () => {
         $modalVideo.classList.remove('active');
         $iframe.src = $iframe.src; // "Redefine" o vídeo
      });
   });
})();
