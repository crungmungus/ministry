/*jshint browser: true, devel: true, plusplus: true, white: false, indent: 2 */
requirejs.config({
  paths: {
    text: 'vendor/text',
    controllers: 'app/controllers',
    layouts: 'app/layouts',
    services: 'app/services',
    routers : 'app/routers',
    models : 'app/models',
    collections : 'app/collections',
    views: 'app/views',
    underscore : 'vendor/underscore-min',
    moment : 'vendor/moment',
    jquery : 'vendor/jquery.min',
    backbone : 'vendor/backbone-min',
    subroute : 'vendor/backbone.subroute',
  },

  shim: {
    'underscore': {
      exports: '_'
    },
    'backbone': {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    'vendor/backbone.marionette': {
      deps: ['backbone'],
      exports: 'Backbone'
    },
    'vendor/backbone.subroute' : {
      deps: ['backbone'],
      exports: 'Backbone'
    },
    'app' : {
      deps : [
        'backbone',
        'vendor/backbone.subroute',
        'vendor/backbone.marionette',
        'vendor/backbone.validation'
      ]
    }
  }
});

/**
 *  The initialization of the application is separate from its execution.
 *  One place where all the components are created and wired up.
 */
require([
  'app',
  'routers/main',
  'layouts/layout',
  'controllers/church',
  'controllers/user',
  'controllers/blog'
],
function(app, Router, Layout, ChController, UsController, BgController) {
  'use strict';

  // General app stuff.
  app.addInitializer(function(){
    app.layout = new Layout();
    app.layout.render();

    // TODO: Move this.
    app.controllers = {
      church : new ChController(),
      user   : new UsController(),
      blog   : new BgController()
    };

    $('body').prepend(app.layout.el);
  });

  // Crank up the router.
  app.addInitializer(function(){
    app.router = new Router();
    Backbone.history.start();
  });

  app.start();
});