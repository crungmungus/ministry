define([
  'app',
  'models/post'
],
function (app, PsModel) {
  'use strict';

  var Collection = Backbone.Collection.extend({
    model : PsModel,

    initialize : function (options) {
      options = options || {};

      _.extend(this, _.pick(options, 'church'));
    },

    url : function () {
      if(this.church) {
        return '/api/posts/church/' + this.church; 
      }

      return '/api/posts/';
    }
  });

  return Collection;
});