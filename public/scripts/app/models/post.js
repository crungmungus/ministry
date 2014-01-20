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
		}
  });

  return Model;
});
