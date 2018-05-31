const path = require('path');
const axios = require('axios');
const db = require('../models');

module.exports = function(app) {

  app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
  });

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
