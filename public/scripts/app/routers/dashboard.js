define(['app'], function (app) {
  'use strict';

  var Router = Backbone.SubRoute.extend({
    routes : {
      '' : 'root'
    },

    root : function () {
      console.log('dashboard');
    }
  });

  return Router;
});
