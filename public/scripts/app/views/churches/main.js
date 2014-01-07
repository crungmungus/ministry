/**
 * Main dashboard view.
 * Presents the user with the hello data and shortcuts to different places.
 */
define([
  'app',
  'text!templates/churches/main.html'
],
function (app, template) {
  'use strict';

  var View = Backbone.View.extend({
    render : function () {
      this.$el.html(_.template(template, {
        data : this.model.toJSON()
      }));

      return this.$el;
    }
  });

  return View;
});