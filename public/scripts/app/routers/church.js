define(['app'], function (app) {
  'use strict';

  var Router = Backbone.SubRoute.extend({
    routes : {
      ':churchId' : 'showChurch'
    },

    showChurch : function (churchId) {
      app.controllers.church.showChurch(churchId);
    },
  });

  return Router;
});
