define([
  'app',
  'models/church'
],
function (app, ChModel) {
  'use strict';

  var Collection = Backbone.Collection.extend({
    url : '/api/churches',

    model : ChModel
  });

  return Collection;
});