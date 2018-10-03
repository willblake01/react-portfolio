require ('dotenv').config();
const express = require('express');
const path = require('path');
const morgan = require('morgan');
const winston = require('winston');
const expressWinston = require('express-winston');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const https = require('https');
const logger = require('./log/lib/logger.js');
const requestLogger = require('./log/lib/requestLogger.js');
const expressRequestId = require('express-request-id')();

// Set up port to be either the host's designated port, or 3001
const PORT = process.env.PORT || 3001;

// Instantiate Express App
const app = express();

// Import sequelize models
const db = require('./models');

// Serve static assets
app.use(express.static('client/build'));

// Set up body parser from documentation
app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Implement Morgan request logger
app.use(requestLogger);

// Appends request ID to request object
app.use(expressRequestId);

// express-winston logger BEFORE the router
app.use(expressWinston.logger({
  transports: [
    new winston.transports.Console({
      json: true,
      timestamp: new Date().toISOString(),
      colorize: true
    })
  ]
}));

// Routes ==================================================
require('./routes/routes.js')(app); // Load routes and pass in app

// Define any API routes before this runs
app.use('*', function(req, res) {
  res.sendFile(path.join(__dirname, './client/build/index.html'));
});

// express-winston errorLogger makes sense AFTER the router.
app.use(expressWinston.errorLogger({
  transports: [
    new winston.transports.Console({
      json: true,
      colorize: true
    })
  ]
}));

// Request error handling
app.use((request, response) => {
  console.warn(new Date().toISOString(), request.method, request.originalUrl, '404');
  return response.status(404).render('404', {
    title: '404',
  })
});

// Error handling
app.use((error, request, response, next) => {
  if (response.headersSent) {
    return next(error);
  }
  console.log(error);
  return response.status(500).render('500', {
    title: '500',
  });
});

// Run server and sync database
db.sequelize.sync({ force: true }).then(function() {
  app.listen(PORT, function() {
    console.log(`🌎 ==> Server now on port ${PORT}!`)
  })
  .on('listening', () => logger.info('HTTP server listening on port ${PORT}!'));
});
