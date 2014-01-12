/**
 * Main dashboard view.
 * Presents the user with the hello data and shortcuts to different places.
 */
define([
  'app',
  'text!templates/users/main.html'
],
function (app, template) {
  'use strict';

  var View = Backbone.View.extend({
    initialize : function () {
      this.template = template;
    },

    render : function () {
      this.$el.html(_.template(template));

      return this.$el;
    }
  });

  return View;
});