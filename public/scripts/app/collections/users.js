define([
  'app',
  'models/church'
],
function (app, ChModel) {
  'use strict';

  var Collection = Backbone.Collection.extend({
    model : ChModel,

    initialize : function (options) {
      options = options || {};

    	_.extend(this, _.pick(options, 'church'));
  	},

  	url : function () {
  		if(this.church) {
  			return '/api/users/church/' + this.church; 
  		}

      return '/api/users/';
  	}
  });

  return Collection;
});