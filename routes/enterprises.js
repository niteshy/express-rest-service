/**
 * Created by Nitesh on 20/07/17.
 */
const express = require('express');
const router = express.Router();

// Require our controllers
const enterpriseController = require('../controllers/enterpriseController');

/// Enterprises ROUTES ///

///* GET enterprise by id */
//router.get('/:enterpriseId', enterpriseController.getEnterpriseById);

/* POST request for creating enterprise. */
router.post('/:enterpriseId/profile', enterpriseController.postEnterpriseProfile);
/* GET enterprise by id */
router.get('/:enterpriseId/profile', enterpriseController.getEnterpriseProfile);

module.exports = router;
