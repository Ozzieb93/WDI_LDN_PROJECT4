/* global api, describe, it, expect, beforeEach */

const Job = require('../../../models/job');

const jobData = [{
  description: 'I have a burst water main',
  image: 'https://i.ytimg.com/vi/ls97J_tQ0io/maxresdefault.jpg'
} , {
  description: 'Boiler is broken',
  image: 'https://www.vaillant.co.uk/images/ecofit-sustain-2/whbc16-13692-01-890027-format-3-4@570@desktop.jpg'
}];


describe('GET /jobs', () => {
  beforeEach(done => {
    Job.remove({})
      .then(() => Job.create(jobData))
      .then(() => done());
  });

  it('should return a 200 response', done => {
    api
      .get('/api/jobs')
      .end((err, res) => {
        expect(res.status).to.eq(200);
        done();
      });
  });

  it('should return an array as a respone body', done => {
    api
      .get('/api/jobs')
      .end((err, res) => {
        expect(res.body).to.be.an('array');
        done();
      });
  });
  it('should return an aray of valid job object', done => {
    api
      .get('/api/jobs')
      .end((err, res) => {
        res.body.forEach((job, index) => {
          expect(job.description).to.eq(jobData[index].description);
          expect(job.image).to.eq(jobData[index].image);
        });
        done();
      });
  });
});
