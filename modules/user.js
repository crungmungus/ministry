var db = require('./db');

/**
 * 1 - admin 
 * 2 - user
 */
module.exports = {
  getByCredentials : function (username, password, done) {
    db.get('SELECT id, username, last_seen FROM user WHERE username = ?', username, done);
  },

  getById : function (user_id, done) {
    db.get('SELECT id, username, last_seen FROM user WHERE id = ?', user_id, done);
  },

  getUsersByChurchId : function (church_id, done) {
  	db.all('SELECT id, username, title, last_seen FROM user WHERE church_id = ?', church_id, done);
  }
};