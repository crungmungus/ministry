var db = require("./db");

/**
 * 1 - admin 
 * 2 - user
 */
module.exports = {
  getByChurchId : function (church_id, limit, done) {
  	var query = "SELECT * FROM blog WHERE church_id = ? ORDER BY created_at DESC";

  	if(limit) {
  		query += " LIMIT " + limit;
  	}

  	db.all(query, church_id, done);
  },

  edit : function (church_id, body, done) {
		body.published_at = (body.published == 1) ? new Date().toISOString() : null;

  	db.run("UPDATE blog SET title = ?, body = ?, published = ?, published_at = ?, comments = ?, WHERE church_id = ? AND id = ?", [
  		body.title,
  		body.body,
  		body.published,
  		body.published_at,
  		body.comments,
  		body.church_id,
  		body.id
  	], done);
  },

  save : function (church_id, body, done) {
    body.published_at = (body.published == 1) ? new Date().toISOString() : null;
    body.created_at = new Date().toISOString();

    body.published_at = (body.published == 1) ? new Date().toISOString() : null;

    db.run('INSERT INTO blog (title, body, published, published_at, created_at, church_id, user_id) VALUES (?, ?, ?, ?, ?, ?, ?)', [
      body.title,
      body.body,
      body.published,
      body.published_at,
      body.created_at,
      church_id,
      1
    ], done);
  },
};