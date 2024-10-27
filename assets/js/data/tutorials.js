import getRandomNumber from "../getRandomNumber.js";

const titles = [
   'Silent Echoes',
   'Lost Horizon',
   'Whispered Dreams',
   'Fading Memories',
   'Hidden Shadows',
   'Mystic Journey',
   'Broken Chains',
   'Last Refuge',
   'Eternal Flame',
   'Forgotten Lands',
   'Shattered Skies',
   'Golden Mirage',
   'Lost Souls',
   'Dark Waters',
   'Hidden Paths',
   'Sacred Ground',
   'Vanished Echoes',
   'Beyond Time',
   'Falling Stars',
   'Silent Storm',
];

const tutorials = [];

for (let i = 1; i <= 6; i++) {
   const titleIndex = getRandomNumber(0, titles.length - 1);

   tutorials.push({
      title: titles[titleIndex],
      duration: `${getRandomNumber(0, 9)}:${getRandomNumber(
         0,
         5
      )}${getRandomNumber(1, 9)}`,
   });

   titles.splice(titleIndex, 1);
}

export { tutorials };
