const Job = require('../models/job');

function indexRoute(req, res, next) {
  Job
    .find()
    .exec()
    .then(jobs => res.json(jobs))
    .catch(next);
}

function showRoute(req, res, next) {
  Job
    .findById(req.params.id)
    .exec()
    .then(job => {
      if(!job) return res.sendStatus(404);
      res.json(job);
    })
    .catch(next);
}

function createRoute (req, res, next){
  Job
    .create(req.body)
    .then(job => res.status(201).json(job))
    .catch(next);
}

function updateRoute(req, res, next){
  Job
    .findById(req.params.id)
    .exec()
    .then(job => {
      if(!job) return res.sendStatus(404);
      return Object.assign(job, req.body);
    })
    .then(job => job.save())
    .then(job => res.json(job))
    .catch(next);
}

function deleteRoute(req, res, next){
  Job
    .findById(req.params.id)
    .exec()
    .then(job => {
      if(!job) return res.sendStatus(404);
      return job.remove();
    })
    .then(() => res.sendStatus(204))
    .catch(next);
}

module.exports = {
  index: indexRoute,
  show: showRoute,
  create: createRoute,
  update: updateRoute,
  delete: deleteRoute
};
