const router = require('express').Router();
const auth = require('../controllers/auth');
const jobs = require('../controllers/jobs');
// const secureRoute = require('../lib/secureRoute');

router.route('/jobs')
  .get(jobs.index)
  .post( jobs.create);

router.route('/jobs/:id')
  .get(jobs.show)
  .put( jobs.update)
  .delete( jobs.delete);

router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;
