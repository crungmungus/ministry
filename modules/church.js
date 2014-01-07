var db = require('./db');

module.exports = {
  getAll : function (user_id, done) {
    db.get('SELECT * FROM ministry WHERE user_id = ?', user_id, function (err, ministry) {
      db.all('SELECT * FROM church WHERE ministry_id = ?', ministry.id, function (err, churches) {
        return done(churches);
      });
    });
  }
};