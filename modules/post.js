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
  },

  save : function (church_id, body, done) {
  	console.log(body);
  	db.run('UPDATE blog SET title = ?, body = ? WHERE church_id = ? AND id = ?', [
  		body.title,
  		body.body,
  		body.church_id,
  		body.id
  	], done);
  } 
};