var db = require('./db');

module.exports = {
  getAll : function (user_id, done) {
    db.get('SELECT * FROM ministry WHERE user_id = ?', user_id, function (err, ministry) {
      db.all('SELECT * FROM church WHERE ministry_id = ?', ministry.id, function (err, churches) {
        return done(churches);
      });
    });
  },

  update : function (body, user_id, done) {
  	db.run('UPDATE church SET address = ?, phone = ?, city = ?, country = ?, mission = ?, twitter = ? WHERE user_id = ?', [
  		body.address,
  		body.phone,
  		body.city,
  		body.country,
  		body.mission,
  		body.twitter,
  		user_id
  	], done);
  }
};