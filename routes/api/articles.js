const router = require('express').Router();
const controller = require('../../controllers/main');

// Matches with '/api/saved'
router.route('/')
  .get(controller.findAll)
  .post(controller.create);

// Matches with "/api/saved/:id"
router
  .route("/:id")
  .delete(controller.remove);

module.exports = router;
