/* global api, describe, it, expect beforeEach */

const Job = require('../../../models/job');
const User = require('../../../models/user');
const jwt = require('jsonwebtoken');
const { secret } = require('../../../config/environment');

const userData = {
  userType: 'tenant',
  firstname: 'oz',
  email: 'test@test.com',
  password: 'test',
  passwordConfirmation: 'test'
};

const jobData = {
  description: 'I have a burst water main',
  image: 'https://i.ytimg.com/vi/ls97J_tQ0io/maxresdefault.jpg'
};

let jobId;
let token;

describe('DELETE /jobs', () => {
  beforeEach(done => {
    Promise.all([
      User.remove({}),
      Job.remove({})
    ])
      .then(() => User.create(userData))
      .then(user => {
        token = jwt.sign({ sub: user._id }, secret, { expiresIn: '6h' });
      })
      .then(() => Job.create(jobData))
      .then((job) => {
        jobId = job._id;
      })
      .then(() => done());
  });

  it('should return a 204 response with a token', done => {
    api
      .delete(`/api/jobs/${jobId}`)
      .set('Authorization', `Bearer ${token}` )
      .end((err, res) => {
        expect(res.status).to.eq(204);
        done();
      });
  });

  it('should return a 401 reponse without token', done => {
    api
      .delete(`/api/jobs/${jobId}`)
      .send(jobData)
      .end((err, res) => {
        expect(res.status).to.eq(401);
        done();
      });
  });

});
