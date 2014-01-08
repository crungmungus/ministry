/**
 * Ministry 0.0.1
 */
var express  = require('express'),
    passport = require('passport'),
    dummy = require('./data/dummy'),
    auth  = require('./modules/auth'),
    church = require('./modules/church'),
    hello = require('./modules/hello');

var app = express();

app.configure(function () {
  app.use(express.cookieParser());
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.session({ secret: 'keyboard cat' }));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.post('/login',
  passport.authenticate('local'),
  function(req, res) {
    res.send(req.user);
  });

app.get('/logout', function(req, res){
  req.logout();
  res.end();
});

/**
 * Dashboard update.
 * Provides a general summary of activity (should be based on user type).
 */
app.get('/api/hello',
  auth.check,
  function(req, res) {
    hello.getActivity(1, function (data) {
      res.send(data);
    });
  });

/**
 * Update a user record.
 * This should be a complete update, not partial?
 */
app.put('/api/user/update',
  auth.check,
  function(req, res) {

  });

/**
 * Returns a list of churches associated with user/ministry.
 */
app.get('/api/churches',
  auth.check,
  function(req, res) {
    church.getAll(1, function (data) {
      res.send(data);
    });
  });

app.put('/api/churches/:id',
  auth.check,
  function(req, res) {
    console.log(req.body.id);
    church.update(req.body, 1, function (err) {
      if(!err) {
        res.end();
      } else {
        res.send(err);
      }
    });
  });

app.listen(process.env.port || 3000);