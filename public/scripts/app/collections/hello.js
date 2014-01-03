/**
 * Hello message.
 * Not a serial collection but rather a composition of summary data.
 */
define(['app'], function (app) {
  'use strict';

  var Collection = Backbone.View.extend({
    url : '/api/hello',

    initialize : function () {
      this.fetch();
    }
  });

  return Collection;
});