/**
 * Hello message.
 * Not a serial collection but rather a composition of summary data.
 */
define([
  'app',
  'models/ministry',
  'collections/churches'
],
function (app, MnModel, ChCollection) {
  'use strict';

  var Collection = Backbone.Collection.extend({
    url : '/api/hello',

    parse : function (response, options) {
      if(_.has(response, 'ministry')) {
        response.ministry = new MnModel(response.ministry);
      }

      if(_.has(response, 'churches')) {
        response.churches = new ChCollection(response.churches);
      }

      return response;
    }
  });

  return Collection;
});