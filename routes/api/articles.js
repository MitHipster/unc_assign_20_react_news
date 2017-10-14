const router = require('express').Router();
const controller = require('../../controllers/main');

// Matches with '/api/saved'
router.route('/')
  .get()
  .post(controller.create);

module.exports = router;
