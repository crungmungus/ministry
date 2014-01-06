define(['app', 'routers/user', 'routers/dashboard', 'routers/church'], function (app, UserRouter, DashRouter, ChurchRouter) {
  'use strict';

  var Router = Backbone.Router.extend({
    routes : {
      'dashboard*subroute' : 'invokeDashModule',
      'user*subroute' : 'invokeUserModule',
      'church*subroute' : 'invokeChurchModule'
    },

    invokeUserModule : function (subroute) {
      new UserRouter('user');
    },

    invokeDashModule : function (subroute) {
      new DashRouter('dashboard');
    },

    invokeChurchModule : function (subroute) {
      new ChurchRouter('church');
    }
  });

  return Router;
});
