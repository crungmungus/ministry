var db = require('./db');

/**
 * 1 - admin 
 * 2 - user
 */
module.exports = {
  getByChurchId : function (church_id, limit, done) {
  	var query = 'SELECT * FROM blog WHERE church_id = ? ORDER BY created_at DESC';

  	if(limit) {
  		query += ' LIMIT ' + limit;
  	}

  	db.all(query, church_id, done);
  }
};