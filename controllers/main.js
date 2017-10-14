const db = require('../models');

// Defining methods for the main controller
module.exports = {
  create: function(req, res) {
    db.Article
      .create(req.body)
      .then(data => res.json(data))
      .catch(err => console.log(err));
  },
};
