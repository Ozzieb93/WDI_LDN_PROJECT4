const Property = require('../models/property');

function indexRoute(req, res, next) {
  Property
    .find()
    .exec()
    .then(properties => res.json(properties))
    .catch(next);
}

function showRoute(req, res, next) {
  Property
    .findById(req.params.id)
    .exec()
    .then(property => {
      if(!property) return res.sendStatus(404);
      res.json(property);
    })
    .catch(next);
}

function createRoute (req, res, next){
  Property
    .create(req.body)
    .then(property => res.status(201).json(property))
    .catch(next);
}

function updateRoute(req, res, next){
  Property
    .findById(req.params.id)
    .exec()
    .then(property => {
      if(!property) return res.sendStatus(404);
      return Object.assign(property, req.body);
    })
    .then(property => property.save())
    .then(property => res.json(property))
    .catch(next);
}

function deleteRoute(req, res, next){
  Property
    .findById(req.params.id)
    .exec()
    .then(property => {
      if(!property) return res.sendStatus(404);
      return property.remove();
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
