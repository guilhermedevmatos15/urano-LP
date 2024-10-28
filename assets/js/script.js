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

// Plans logic
const priceSwitch = document.querySelector('.section--pricing__switch');
const freePlanValueElement = document.querySelector('.section--pricing__plans > article:nth-child(1) > h3');
const proPlanValueElement = document.querySelector('.section--pricing__plans > article:nth-child(2) > h3');
const enterprisePlanValueElement = document.querySelector('.section--pricing__plans > article:nth-child(3) > h3');

const monthly = {
   element: priceSwitch.querySelector('.monthly'),
   freePlanValue: 0,
   proPlanValue: 15,
   enterprisePlanValue: 99,
};
const yearly = {
   element: priceSwitch.querySelector('.yearly'),
   freePlanValue: 0,
   proPlanValue: 99,
   enterprisePlanValue: 699,
};

monthly.element.addEventListener('click', () => {
   monthly.element.classList.add('active');
   yearly.element.classList.remove('active');

   freePlanValueElement.innerHTML = `$${monthly.freePlanValue} <span class="price__time">/ month</span>`;
   proPlanValueElement.innerHTML = `$${monthly.proPlanValue} <span class="price__time">/ month</span>`;
   enterprisePlanValueElement.innerHTML = `$${monthly.enterprisePlanValue} <span class="price__time">/ month</span>`;
});
yearly.element.addEventListener('click', () => {
   monthly.element.classList.remove('active');
   yearly.element.classList.add('active');

   freePlanValueElement.innerHTML = `$${yearly.freePlanValue} <span class="price__time">/ year</span>`;
   proPlanValueElement.innerHTML = `$${yearly.proPlanValue} <span class="price__time">/ year</span>`;
   enterprisePlanValueElement.innerHTML = `$${yearly.enterprisePlanValue} <span class="price__time">/ year</span>`;
});
