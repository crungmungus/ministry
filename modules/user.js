var db = require('./db');

module.exports = {
  getByCredentials : function (username, password, done) {
    db.get('SELECT id, username, last_seen FROM user WHERE username = ?', username, done);
  },

  getById : function (id, done) {
    db.get('SELECT id, username, last_seen FROM user WHERE id = ?', id, done);
  }
};