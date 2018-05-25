const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');
const { dbURI } = require('../config/environment');
const Job = require('../models/Job');

mongoose.connect(dbURI, (err, db) => {
  db.dropdatabe();

  Job.create([{
    description: 'I have a burst water main',
    image: 'https://i.ytimg.com/vi/ls97J_tQ0io/maxresdefault.jpg'
  } , {
    description: 'Boiler is broken',
    image: 'https://www.vaillant.co.uk/images/ecofit-sustain-2/whbc16-13692-01-890027-format-3-4@570@desktop.jpg'
  }])
    .then(jobs => console.log(`${jobs.length} jobs created`))
    .catch(err => console.log(err))
    .finally(() => mongoose.connection.close());
});
