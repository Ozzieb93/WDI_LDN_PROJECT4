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
    .then(jobs => console.log(`${jobs.length} jobs created`));

  User
    .create([{
      image: 'https://www.cj-law.co.uk/wp-content/uploads/2017/06/hugh.jpg',
      name: 'Joseph',
      flat: 1,
      movedIn: '1st Jan, 2018'
    } ,{
      image: 'https://www.cj-law.co.uk/wp-content/uploads/2017/06/hugh.jpg',
      name: 'Joseph',
      flat: 1,
      movedIn: '1st Jan, 2018'
    } ,{
      image: 'https://www.cj-law.co.uk/wp-content/uploads/2017/06/hugh.jpg',
      name: 'Joseph',
      flat: 1,
      movedIn: '1st Jan, 2018'
    }])
    .then(user => console.log(`${user.length} jobs created`));

  return Property
    .create([{
      address: '14 West Bank, London, N16 5DG',
      tenants: 4,
      image: 'https://i.imgur.com/Urseki1.png',
      tennats: {
        image: 'https://www.cj-law.co.uk/wp-content/uploads/2017/06/hugh.jpg',
        name: 'Joseph',
        flat: 1,
        movedIn: '1st Jan, 2018'
      }
    } ,{
      address: '98 Dynevour Road',
      tenants: 7,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTsF52cBB_D0Dvga_JyFkK447NbSeHMzr2m7vrrE8yBMfvW0fILQ'
    }])
    .then(properties => console.log(`${properties.length} properties created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
