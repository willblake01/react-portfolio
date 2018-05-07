require ('dotenv').config();
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const path = require('path');

const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');

// Import sequelize models
const db = require('./models');

// Serve static assets
app.use(express.static('client/build'));

// Set up an express app
app.use(morgan('dev')); // Log every request to the console
app.use(cookieParser()); // Read cookies
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Routes ==================================================
require('./routes/routes.js')(app); // Load routes and pass in app

// Define any API routes before this runs
app.use('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// Run server and sync database
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`)
  });
});
