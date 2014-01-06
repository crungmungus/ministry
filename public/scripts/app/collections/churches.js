define([
  'app',
  'models/church'
],
function (app, MnChurch) {
  'use strict';

  var Collection = Backbone.Collection.extend({
    url : '/api/churches',

    model : MnChurch
  });

  return Collection;
});