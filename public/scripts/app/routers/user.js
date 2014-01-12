define(['app'], function (app) {
  'use strict';

  var Router = Backbone.SubRoute.extend({
    routes : {
      ':userId' : 'showUser'
    },

    showUser : function (userId) {
      app.controllers.user.showUser(userId);
    },
  });

  return Router;
});
