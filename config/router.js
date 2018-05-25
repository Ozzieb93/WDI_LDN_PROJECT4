const router = require('express').Router();
const auth = require('../controllers/auth');
const jobs = require('../controllers/jobs');
const properties = require('../controllers/properties');
// const secureRoute = require('../lib/secureRoute');

//JOBS ROUTE

router.route('/jobs')
  .get(jobs.index)
  .post( jobs.create);

router.route('/jobs/:id')
  .get(jobs.show)
  .put( jobs.update)
  .delete( jobs.delete);

// PROPERTIES ROUTE

router.route('/properties')
  .get(properties.index)
  .post(properties.create);

router.route('/properties/:id')
  .get(properties.show)
  .put(properties.update)
  .delete(properties.delete);

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
