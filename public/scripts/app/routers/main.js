define([
  'app', 
  'routers/user',
  'routers/blog',
  'routers/dashboard', 
  'routers/church'
], 
function (app, UserRouter, BlogRouter, DashRouter, ChurchRouter) {
  'use strict';

  var Router = Backbone.Router.extend({
    routes : {
      'dashboard*subroute' : 'invokeDashModule',
      'user*subroute' : 'invokeUserModule',
      'blog*subroute' : 'invokeBlogModule',
      'church*subroute' : 'invokeChurchModule'
    },

    invokeUserModule : function (subroute) {
      new UserRouter('user');
    },

    invokeBlogModule : function (subroute) {
      new BlogRouter('blog');
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
