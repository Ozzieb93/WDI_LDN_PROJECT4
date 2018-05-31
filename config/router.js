const router = require('express').Router();
const auth = require('../controllers/auth');
const jobs = require('../controllers/jobs');
const users = require('../controllers/users');
const properties = require('../controllers/properties');
const secureRoute = require('../lib/secureRoute');

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

// USERS Route

router.route('/users')
  .get(secureRoute, users.index);

router.route('/users/:id')
  .get(users.show)
  .put(secureRoute, users.update)
  .delete(users.delete);

// Tennants Route
// router.route('/tenant/:id')
//   .get(tenant.show);

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
