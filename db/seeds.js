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
      console.log(`${jobs.length} jobs created!`);

      return User
        .create([{
          role: 'Landlord',
          image: 'https://www.cj-law.co.uk/wp-content/uploads/2017/06/hugh.jpg',
          name: 'Ben',
          email: 'ben@b',
          description: 'My name is Ben. I am the owner of a small family run property company which mainly manages its own properties. I have almost 20 years experience in the property management industry and have the experience of housing both students and professionals. All repairs, problems and queries are reported direct to me and are usually resolved within days where possible. I only use qualified and trained tradesmen and try accompany them on all repairs.I am usually available 6 days a week for problems and queries and Sundays and evenings for emergencies.',
          password: 'ben',
          passwordConfirmation: 'ben',
          profession: 'Accountant',
          address: '14 West Bank, London, N16 5DG',
          flat: 1,
          movedIn: '1st Jan, 2018'
        } ,{
          role: 'Tenant',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXITDHcrLhaou0AZsSh5wrlqSNoQzwdo-WL1N71E1t0G_sYM7C',
          name: 'Claire',
          email: 'claire@c',
          password: 'c',
          passwordConfirmation: 'c',
          profession: 'Lawyer',
          address: '14 West Bank, London, N16 5DG',
          flat: 2,
          movedIn: '20th Dec, 2018'
        } ,{
          role: 'Tenant',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3U9lYimrXOiyAV1bu7DFeYxEJXJCrxUZpU339OOGQLLii7m5UnA',
          name: 'Phil',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          profession: 'Retail Assistant',
          address: '14 West Bank, London, N16 5DG',
          flat: 3,
          movedIn: '18th March, 2018'
        } ,{
          role: 'Tenant',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYMU9u6oaDXJZzqxq9TtbL9ga489PhUbUU9_U_aOj2rGJfHg1o',
          name: 'Chloe',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          profession: 'HR Officer',
          address: '14 West Bank, London, N16 5DG',
          flat: 4,
          movedIn: '18th March, 2018'
        } ,{
          role: 'Tenant',
          image: 'https://static1.squarespace.com/static/53b599ebe4b08a2784696956/53c987b9e4b02a3a05287045/573e5642ab48dee8fdd818bc/1463704281105/professional-headshots-73.jpg',
          name: 'Jill',
          email: 'b@b',
          password: 'b',
          profession: 'Events Worker',
          passwordConfirmation: 'b',
          address: '14 West Bank, London, N16 5DG',
          flat: 5,
          movedIn: '18th March, 2018'
        } ,{
          role: 'Tenant',
          image: 'https://i.pinimg.com/originals/25/3a/bf/253abf4f1f4bc16b6dc04571f8d21624.png',
          name: 'Aiden',
          email: 'b@b',
          password: 'b',
          profession: 'CEO',
          passwordConfirmation: 'b',
          address: '14 West Bank, London, N16 5DG',
          flat: 6,
          movedIn: '18th March, 2018'
        } ,{
          role: 'Tenant',
          image: 'http://actorsupgrade.com/wp-content/gallery/headshots-by-david-alexander/David-01-1.jpg',
          name: 'Mark',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          profession: 'Senior Web Developer',
          address: '14 West Bank, London, N16 5DG',
          flat: 7,
          movedIn: '6th Feb, 2018'
        } ,{
          role: 'Tenant',
          image: 'http://actorsupgrade.com/wp-content/gallery/headshots-by-david-alexander/Chrlotte.jpg',
          name: 'Susan',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          profession: 'Junior Web Developer',
          address: '14 West Bank, London, N16 5DG',
          flat: 8,
          movedIn: '17th Mar, 2018'
        } ,{
          role: 'Tenant',
          image: 'http://www.scottswansonphotography.com/wp-content/uploads/MarkSvetcos-Headshot.jpg',
          name: 'George',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          profession: 'PR Consultant',
          address: '98 Dynevour Road, London, N16 5DG',
          flat: 1,
          movedIn: '8th November, 2017'
        } ,{
          role: 'Tenant',
          image: 'http://actorsupgrade.com/wp-content/gallery/headshots-by-david-alexander/Will-03.jpg',
          name: 'Lowro',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          profession: 'Plumber',
          address: '98 Dynevour Road, London, N16 5DG',
          flat: 2,
          movedIn: '8th May, 2018'
        } ,{
          role: 'Tenant',
          image: 'https://i.pinimg.com/736x/24/c7/7e/24c77e41b7e4c1b617f13c577e91cea0--actor-headshots-professional-portrait.jpg',
          name: 'Linda',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          profession: 'iOS Developer',
          address: '98 Dynevour Road, London, N16 5DG',
          flat: 3,
          movedIn: '18th Jan, 2018'
        } ,{
          role: 'Tenant',
          image: 'https://s-media-cache-ak0.pinimg.com/originals/ef/3c/3f/ef3c3f747d477c9d3e6509c45f53d3f9.jpg',
          name: 'Gary',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          profession: 'Actor',
          address: '98 Dynevour Road, London, N16 5DG',
          flat: 4,
          movedIn: '24th Oct, 2018'
        } ,{
          role: 'Tenant',
          image: 'https://photos.smugmug.com/2011-2012/StaffFaculty/Random-Headshots/i-c3cbCzJ/0/e01f14c3/L/IMG_0684-L.jpg',
          name: 'Andrea',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          profession: 'Pharmacist',
          address: '98 Dynevour Road, London, N16 5DG',
          flat: 5,
          movedIn: '23rd Apr, 2018'
        } ,{
          role: 'Tenant',
          image: 'http://actorsupgrade.com/wp-content/gallery/headshots-by-david-alexander/Austin-01.jpg',
          name: 'James',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          profession: 'B&Q Manager',
          address: '98 Dynevour Road, London, N16 5DG',
          flat: 6,
          movedIn: '13th Jan, 2018'
        } ,{
          role: 'Tenant',
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFu6e-FOnaFNbyMDOmwgVjwjQcdhSCwe8neohUOol2-0fu6W13JA',
          name: 'Chole',
          email: 'b@b',
          password: 'b',
          passwordConfirmation: 'b',
          profession: 'Chef',
          address: '98 Dynevour Road, London, N16 5DG',
          flat: 7,
          movedIn: '9th Oct, 2017'
        }]);
    })
    .then(users => {
      console.log(`${users.length} users created!`);

      return Property
        .create([{
          address: '14 West Bank, London, N16 5DG',
          image: 'https://i.imgur.com/Urseki1.png',
          tenants: [users[1], users[3], users[4], users[5], users[6], users[7]],
          location: {
            lat: 51.573056,
            lng: -0.078197
          }
        } ,{
          address: '98 Dynevour Road, London, N16 5DG',
          image: 'https://i.imgur.com/rgUVOW3.png',
          tenants: [users[8], users[9], users[10], users[11], users[12], users[13], users[14]],
          location: {
            lat: 51.561236,
            lng: -0.075015
          }
        }]);
    })
    .then(properties => console.log(`${properties.length} properties created!`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
