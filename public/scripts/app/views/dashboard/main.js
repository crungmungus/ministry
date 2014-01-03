/**
 * Main dashboard view.
 * Presents the user with the hello data and shortcuts to different places.
 */
define(['app', 'text!templates/clinics/main.html'], function (app, template) {
  'use strict';

  var View = Backbone.View.extend({
    initialize : function () {
      console.log('dashboard view loaded.');
    }
  });

  return View;
});