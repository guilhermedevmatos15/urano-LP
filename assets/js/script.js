import animationsInit from './animations.js';
import { tutorials } from './data/tutorials.js';
import { tweets } from './data/tweets.js';

// Inicializando animações
animationsInit();

// Tutorials logic
const $tutorialsContainer = document.querySelector('.section--tutorials__container');

tutorials.forEach((tutorial) => {
   $tutorialsContainer.innerHTML += `
      <article data-reveal="bottom">
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
      <article class="reviews__review" data-reveal="bottom">
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

$modalMenu.querySelector('ul li').addEventListener('click', () => {
   $modalMenu.classList.remove('active');
})

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
const $freePlan = document.querySelector('.section--pricing__plans > article:nth-child(1) > h3');
const $proPlanValue = document.querySelector('.section--pricing__plans > article:nth-child(2) > h3');
const $enterprisePlanValue = document.querySelector('.section--pricing__plans > article:nth-child(3) > h3');

const monthly = {
   $switchElement: document.querySelector('.section--pricing__switch .monthly'),
   free: 0,
   pro: 15,
   enterprise: 99,
};
const yearly = {
   $switchElement: document.querySelector('.section--pricing__switch .yearly'),
   free: 0,
   pro: 99,
   enterprise: 699,
};

monthly.$switchElement.addEventListener('click', () => {
   monthly.$switchElement.classList.add('active');
   yearly.$switchElement.classList.remove('active');

   $freePlan.innerHTML = `$${monthly.free} <span class="price__time">/ month</span>`;
   $proPlanValue.innerHTML = `$${monthly.pro} <span class="price__time">/ month</span>`;
   $enterprisePlanValue.innerHTML = `$${monthly.enterprise} <span class="price__time">/ month</span>`;
});
yearly.$switchElement.addEventListener('click', () => {
   monthly.$switchElement.classList.remove('active');
   yearly.$switchElement.classList.add('active');

   $freePlan.innerHTML = `$${yearly.free} <span class="price__time">/ year</span>`;
   $proPlanValue.innerHTML = `$${yearly.pro} <span class="price__time">/ year</span>`;
   $enterprisePlanValue.innerHTML = `$${yearly.enterprise} <span class="price__time">/ year</span>`;
});

// Questions logic
const questions = [...document.querySelectorAll('.questions li')];

questions.forEach((question, index) => {
   question.querySelector('.number').innerHTML = index + 1;
});

// Paralax logic
const img = document.querySelector('.section--parallax img');
const itens = [...document.querySelectorAll('.section--parallax ul li')];
const middleOfScreen = window.innerHeight / 2;

window.addEventListener('scroll', () => {
   itens.forEach((item, index) => {
      const rect = item.getBoundingClientRect();

      if (rect.top <= middleOfScreen && rect.bottom >= middleOfScreen) {
         itens.forEach((el) => el.classList.remove('active')); // Removendo 'active' de todos
         item.classList.add('active'); // Depois adicionando 'active' no que foi "scrolado"

         img.setAttribute('src', `./assets/img/sticky-feat/sticky-img${index + 1}.png`);
      }
   });
});
