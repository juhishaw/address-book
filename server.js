//importing modules
var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyparser = require('body-parser');
var cors = require('cors');
var path = require('path');
var config = require('./config');
var app = express();

//routes
var routes = require('./routes/routes');
var registrationLogin = require('./routes/registrationLogin');
var jwtVerify = require('./routes/jwtVerify');

var port = process.env.PORT || 3000;

//connect to mongoDB
mongoose.connect(config.database);

//adding middleware
app.use(cors());

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//static files
app.use(express.static(path.join(__dirname, 'public')));

//routes
app.use('/api',routes);
app.use('/', registrationLogin);
//define port number

app.listen(port);
//console.log('App working at 3000');
console.log('Use API routes http://localhost:' + port);
