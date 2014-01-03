define(['app', 'routers/user', 'routers/dashboard'], function (app, UserRouter, DashRouter) {
  'use strict';

  var Router = Backbone.Router.extend({
    routes : {
      'dashboard*subroute' : 'invokeDashModule',
      'user*subroute' : 'invokeUserModule'
    },

    invokeUserModule : function (subroute) {
      new UserRouter('user');
    },

    invokeDashModule : function (subroute) {
      new DashRouter('dashboard');
    }
  });

  return Router;
});
