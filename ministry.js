/**
 * Ministry 0.0.1
 */
var express  = require('express'),
    passport = require('passport'),
    dummy = require('./data/dummy'),
    auth  = require('./modules/auth'),
    church = require('./modules/church'),
    user = require('./modules/user'),
    post = require('./modules/post'),
    hello = require('./modules/hello');

var app = express();

app.set('views', __dirname + '/views');
app.set('view engine', 'jade');

app.configure(function () {
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

/**
 */
app.get('/', function(req, res) {
  res.render('index');
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
    church.update(req.body, 1, function (err) {
      res.end();
    });
  });

app.get('/api/users/church/:id',
  auth.check,
  function(req, res) {
    user.getByChurchId(req.params.id, function (err, data) {
      res.send(data);
    });
  });

app.get('/api/posts/church/:id',
  auth.check,
  function(req, res) {
    post.getByChurchId(req.params.id, req.query.limit, function (err, data) {
      res.send(data);
    });
  });

app.put('/api/posts/church/:church_id/:id',
  auth.check,
  function(req, res) {
    post.edit(req.params.church_id, req.body, function (err) {
      res.end();
    });
  });

app.post('/api/posts/church/:church_id',
  auth.check,
  function(req, res) {
    post.save(req.params.church_id, req.body, function (err) {
      if(err) {
        res.send(err)
      } else {
        res.end();
      }
    });
  });

app.listen(process.env.port || 3000);
console.log('Server started on port ' + process.env.port);