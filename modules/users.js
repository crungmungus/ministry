var db = require('./db');

module.exports = {
  getByCredentials : function (username, password, done) {
    db.get('SELECT id, username, last_seen FROM users WHERE username = ?', username, done);
  },

  getById : function (id, done) {
    db.get('SELECT id, username, last_seen FROM users WHERE id = ?', id, done);
  }
};