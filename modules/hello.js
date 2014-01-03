var db = require('./db'),
    async = require('async');

module.exports = {
  getActivity : function (user_id, done) {
    var report = {};

    db.get('SELECT * FROM ministry WHERE user_id = ?', user_id, function (err, ministry) {
      report.ministry = ministry;

      db.all('SELECT * FROM church WHERE ministry_id = ?', report.ministry.id, function (err, churches) {
        report.churches = churches;
        return done(report);
      });
    });
  }
};