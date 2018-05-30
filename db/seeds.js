const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Job = require('../models/job');
const Property = require('../models/property');
const User = require('../models/user');

mongoose.connect(dbURI, (err, db) => {
  db.dropDatabase();

  Job.create([{
    description: 'I have a burst water main',
    image: 'https://i.ytimg.com/vi/ls97J_tQ0io/maxresdefault.jpg'
  } , {
    description: 'Boiler is broken',
    image: 'https://www.vaillant.co.uk/images/ecofit-sustain-2/whbc16-13692-01-890027-format-3-4@570@desktop.jpg'
  }])
    .then(jobs => {
      console.log(`${jobs.length} jobs created`);

      return User
        .create([{
          image: 'https://www.cj-law.co.uk/wp-content/uploads/2017/06/hugh.jpg',
          name: 'Ben',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          proffession: 'Accountant',
          address: '5 wickham court road',
          flat: 1,
          movedIn: '1st Jan, 2018'
        } ,{
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXITDHcrLhaou0AZsSh5wrlqSNoQzwdo-WL1N71E1t0G_sYM7C',
          name: 'Claire',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          proffession: 'Lawyer',
          address: '5 wickham court road',
          flat: 2,
          movedIn: '20th Dec, 2018'
        } ,{
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3U9lYimrXOiyAV1bu7DFeYxEJXJCrxUZpU339OOGQLLii7m5UnA',
          name: 'Phil',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          proffession: 'Retail Assistant',
          address: '5 wickham court road',
          flat: 3,
          movedIn: '18th March, 2018'
        } ,{
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYMU9u6oaDXJZzqxq9TtbL9ga489PhUbUU9_U_aOj2rGJfHg1o',
          name: 'Chloe',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          proffession: 'HR Officer',
          address: '5 wickham court road',
          flat: 4,
          movedIn: '18th March, 2018'
        } ,{
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYMU9u6oaDXJZzqxq9TtbL9ga489PhUbUU9_U_aOj2rGJfHg1o',
          name: 'Jill',
          email: 'b@b',
          password: 'b',
          proffession: 'Events Worker',
          passwordConfirmation: 'b',
          address: '5 wickham court road',
          flat: 5,
          movedIn: '18th March, 2018'
        } ,{
          image: 'https://i.pinimg.com/originals/25/3a/bf/253abf4f1f4bc16b6dc04571f8d21624.png',
          name: 'Aiden',
          email: 'b@b',
          password: 'b',
          proffession: 'CEO',
          passwordConfirmation: 'b',
          address: '5 wickham court road',
          flat: 6,
          movedIn: '18th March, 2018'
        } ,{
          image: 'http://actorsupgrade.com/wp-content/gallery/headshots-by-david-alexander/David-01-1.jpg',
          name: 'Mark',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          proffession: 'Senior Web Developer',
          address: '5 wickham court road',
          flat: 7,
          movedIn: '6th Feb, 2018'
        } ,{
          image: 'http://actorsupgrade.com/wp-content/gallery/headshots-by-david-alexander/Chrlotte.jpg',
          name: 'Susan',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          proffession: 'Junior Web Developer',
          address: '5 wickham court road',
          flat: 1,
          movedIn: '17th Mar, 2018'
        } ,{
          image: 'https://www.cj-law.co.uk/wp-content/uploads/2017/06/hugh.jpg',
          name: 'Louis',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          proffession: 'Senior Web Developer',
          address: '5 wickham court road', // --<<
          flat: 2,
          movedIn: '3rd Apr, 2018'
        } ,{
          image: 'https://www.cj-law.co.uk/wp-content/uploads/2017/06/hugh.jpg',
          name: 'Louis',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          proffession: 'Senior Web Developer',
          address: '5 wickham court road',
          flat: 3,
          movedIn: '3rd Apr, 2018'
        } ,{
          image: 'https://www.cj-law.co.uk/wp-content/uploads/2017/06/hugh.jpg',
          name: 'Louis',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          proffession: 'Senior Web Developer',
          address: '5 wickham court road',
          flat: 4,
          movedIn: '3rd Apr, 2018'
        } ,{
          image: 'https://www.cj-law.co.uk/wp-content/uploads/2017/06/hugh.jpg',
          name: 'Louis',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          proffession: 'Senior Web Developer',
          address: '5 wickham court road',
          flat: 5,
          movedIn: '3rd Apr, 2018'
        } ,{
          image: 'https://www.cj-law.co.uk/wp-content/uploads/2017/06/hugh.jpg',
          name: 'Louis',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          proffession: 'Senior Web Developer',
          address: '5 wickham court road',
          flat: 6,
          movedIn: '3rd Apr, 2018'
        } ,{
          image: 'https://www.cj-law.co.uk/wp-content/uploads/2017/06/hugh.jpg',
          name: 'Louis',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          proffession: 'Senior Web Developer',
          address: '5 wickham court road',
          flat: 7,
          movedIn: '3rd Apr, 2018'
        } ,{
          image: 'https://www.cj-law.co.uk/wp-content/uploads/2017/06/hugh.jpg',
          name: 'Louis',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          proffession: 'Senior Web Developer',
          address: '5 wickham court road',
          flat: 8,
          movedIn: '3rd Apr, 2018'
        }]);
    })
    .then(users => {
      console.log(`${users.length} jobs created`);

      return Property
        .create([{
          address: '14 West Bank, London, N16 5DG',
          image: 'https://i.imgur.com/Urseki1.png',
          tenants: [users[0], users[1], users[3], users[4], users[5], users[6], users[7]]
        } ,{
          address: '98 Dynevour Road',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTsF52cBB_D0Dvga_JyFkK447NbSeHMzr2m7vrrE8yBMfvW0fILQ',
          tenants: [users[8], users[9], users[10], users[11], users[12], users[13], users[14]]
        }]);
    })
    .then(properties => console.log(`${properties.length} properties created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
