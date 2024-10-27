import getRandomNumber from '../getRandomNumber.js';
import generateLorem from '../generateLorem.js';

const peoples = [
   {
      name: 'John Smith',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      role: 'Senior Developer',
      message: generateLorem(getRandomNumber(3, 39)),
   },
   {
      name: 'Alice Johnson',
      image: 'https://randomuser.me/api/portraits/women/4.jpg',
      role: 'Junior Designer',
      message: generateLorem(getRandomNumber(3, 39)),
   },
   {
      name: 'Maxime Dubois',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      role: 'Project Manager',
      message: generateLorem(getRandomNumber(3, 39)),
   },
   {
      name: 'Sophie Martin',
      image: 'https://randomuser.me/api/portraits/women/5.jpg',
      role: 'Systems Analyst',
      message: generateLorem(getRandomNumber(3, 39)),
   },
   {
      name: 'Lukas Schmidt',
      image: 'https://randomuser.me/api/portraits/men/5.jpg',
      role: 'Pleno Tester',
      message: generateLorem(getRandomNumber(3, 39)),
   },
   {
      name: 'Hannah Müller',
      image: 'https://randomuser.me/api/portraits/women/6.jpg',
      role: 'Junior Developer',
      message: generateLorem(getRandomNumber(3, 39)),
   },
   {
      name: 'Emma Thompson',
      image: 'https://randomuser.me/api/portraits/women/7.jpg',
      role: 'Marketing Manager',
      message: generateLorem(getRandomNumber(3, 39)),
   },
   {
      name: 'Léa Moreau',
      image: 'https://randomuser.me/api/portraits/women/8.jpg',
      role: 'Graphic Designer',
      message: generateLorem(getRandomNumber(3, 39)),
   },
   {
      name: 'Julien Lefèvre',
      image: 'https://randomuser.me/api/portraits/men/6.jpg',
      role: 'Software Engineer',
      message: generateLorem(getRandomNumber(3, 39)),
   },
   {
      name: 'Paul Fischer',
      image: 'https://randomuser.me/api/portraits/men/7.jpg',
      role: 'Front-End Developer',
      message: generateLorem(getRandomNumber(3, 39)),
   },
   {
      name: 'William Turner',
      image: 'https://randomuser.me/api/portraits/men/8.jpg',
      role: 'IT Consultant',
      message: generateLorem(getRandomNumber(3, 39)),
   },
   {
      name: 'Claire Laurent',
      image: 'https://randomuser.me/api/portraits/women/9.jpg',
      role: 'Data Analyst',
      message: generateLorem(getRandomNumber(3, 39)),
   },
   {
      name: 'Anna Becker',
      image: 'https://randomuser.me/api/portraits/women/10.jpg',
      role: 'Back-End Developer',
      message: generateLorem(getRandomNumber(3, 39)),
   },
   {
      name: 'James Wilson',
      image: 'https://randomuser.me/api/portraits/men/9.jpg',
      role: 'UX/UI Specialist',
      message: generateLorem(getRandomNumber(3, 39)),
   },
   {
      name: 'Marie Lefevre',
      image: 'https://randomuser.me/api/portraits/women/11.jpg',
      role: 'Product Manager',
      message: generateLorem(getRandomNumber(3, 39)),
   },
   {
      name: 'Tom Bauer',
      image: 'https://randomuser.me/api/portraits/men/10.jpg',
      role: 'Junior Developer',
      message: generateLorem(getRandomNumber(3, 39)),
   },
   {
      name: 'Lucie Bernard',
      image: 'https://randomuser.me/api/portraits/women/12.jpg',
      role: 'Interaction Designer',
      message: generateLorem(getRandomNumber(3, 39)),
   },
   {
      name: 'Karl Wagner',
      image: 'https://randomuser.me/api/portraits/men/11.jpg',
      role: 'Business Analyst',
      message: generateLorem(getRandomNumber(3, 39)),
   },
   {
      name: 'Oliver Brown',
      image: 'https://randomuser.me/api/portraits/men/12.jpg',
      role: 'Full-Stack Developer',
      message: generateLorem(getRandomNumber(3, 39)),
   },
   {
      name: 'Nina Schneider',
      image: 'https://randomuser.me/api/portraits/women/13.jpg',
      role: 'SEO Specialist',
      message: generateLorem(getRandomNumber(3, 39)),
   },
];

const tweets = [];

for (let i = 1; i <= 9; i++) {
   const index = getRandomNumber(0, peoples.length - 1);

   tweets.push({
      name: peoples[index].name,
      role: peoples[index].role,
      image: peoples[index].image,
      message: peoples[index].message,
   });

   peoples.splice(index, 1);
}

console.log(tweets);

export { tweets };
