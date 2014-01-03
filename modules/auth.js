var users = require('./user'),
    passport = require('passport'),
    Strategy = require('passport-local').Strategy;

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  users.getById(id, function (err, user) {
    if (err) {
      return done(err);
    } else if(!user) {
      return done(null, false);
    }

    return done(null, user);
  });
});

passport.use(new Strategy(
  function(username, password, done) {
    users.getByCredentials(username, password, function (err, user) {
      if (err) {
        return done(err);
      } else if(!user) {
        return done(null, false);
      }

      return done(null, user);
    });
  }
));

exports.check = function (req, res, next) {
  if (!req.isAuthenticated()) {
    return next();
    //return res.send("401 unauthorized", 401);
  }

  return next();
}