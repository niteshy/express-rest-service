/**
 * Created by Nitesh on 20/07/17.
 */
const debug = require('debug')('enterpriseController');

const EnterpriseProfile = require('../models/enterpriseProfile');

exports.postEnterpriseProfile = function (req, res, next) {
  //TODO: add authentication
  //TODO: add values validations
  const enterpriseProfile = new EnterpriseProfile({
    id: req.params.enterpriseId,
    externalId: req.body.externalId
  });
  enterpriseProfile.save()
    .then(function (profile) {
      res.json(profile);
    })
    .catch(function (err) {
      const error = new Error(err);
      debug(`error: ${error}`);
      res.json(error);
    });
};

exports.getEnterpriseProfile = function (req, res, next) {
  //TODO: add authentication
  //TODO: add model validations
  EnterpriseProfile.get(req.params.enterpriseId)
    .then(function (profile) {
      res.json(profile);
    })
    .catch(function (err) {
      const error = new Error(err);
      debug(`error: ${error}`);
      res.json(error);
    });
};
