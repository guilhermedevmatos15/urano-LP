import animationsInit from './animations.js';
import { tutorials } from './data/tutorials.js';
import { tweets } from './data/tweets.js';

// Inicializando animações
animationsInit();

// Tutorials logic
const $tutorialsContainer = document.querySelector('.section--tutorials__container');

tutorials.forEach((tutorial) => {
   $tutorialsContainer.innerHTML += `
      <article>
         <div class="video" data-video="on">
            <span class="video__icon">
               <i class="fa-solid fa-play"></i>
            </span>
         </div>

         <h3 class="section--tutorials__title">${tutorial.title}</h3>
         <p class="section--tutorials__description">${tutorial.duration}</p>
      </article>
   `;
});

// Tweets logic
const $tweetsContainer = document.querySelector('.reviews');

tweets.forEach((tweet) => {
   $tweetsContainer.innerHTML += `
      <article class="reviews__review">
         <header>
            <div>
               <img
                  src="${tweet.image}"
                  alt="Profile pic"
               />
               <div>
                  <h3 class="name">${tweet.name}</h3>
                  <p class="function">${tweet.role}</p>
               </div>
            </div>

            <i class="fa-brands fa-twitter"></i>
         </header>

         <p>${tweet.message}</p>
      </article>
   `
});

// Lógica modal
const $modalMenu = document.querySelector('.modal--menu');
const $activeMenuElements = [...document.querySelectorAll('[data-menu="on"]')];
const $disableMenuElements = [
   ...document.querySelectorAll('[data-menu="off"]'),
];

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
      $modalMenu.classList.remove('active');
   }
});

const $modalVideo = document.querySelector('.modal--video');
const $activeVideoElements = [
   ...document.querySelectorAll('[data-video="on"]'),
];
const $disableVideoElements = [
   ...document.querySelectorAll('[data-video="off"]'),
];
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
