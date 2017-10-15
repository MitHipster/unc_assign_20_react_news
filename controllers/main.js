const db = require('../models');

// Defining methods for the main controller
module.exports = {
  findAll: function(req, res) {
    db.Article
      .find(req.query)
      .sort({ savedDate: -1 })
      .then(data => res.json(data))
      .catch(err => console.log(err));
  },
  create: function(req, res) {
    db.Article
      .create(req.body)
      .then(data => res.json(data))
      .catch(err => console.log(err));
  },
};
