define(['app', 'vendor/backbone.validation'], function (app) {
  'use strict';

  var Model = Backbone.Model.extend({
		validation: {
			title : {
			  required: true
			},
			body : {
		    required: true
		  }
		},

		isRecent : function () {
			var age = moment(new Date()).diff(this.get('created_at'), 'days');

			return (age < 3);
		}
  });

  return Model;
});
