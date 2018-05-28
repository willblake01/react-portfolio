const path = require('path');
const axios = require('axios');
const db = require('../models');

module.exports = function(app) {

  app.post('/contact/create', function(req, res) {
    db.user.create({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message
    }).then(function(dbuser) {
      console.log(dbuser);
      res.redirect('/');
    })
  });

}
