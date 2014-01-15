/**
 */
define([
  'app',
  'text!templates/blog/main.html'
],
function (app, template) {
  'use strict';

  var View = Backbone.View.extend({
    render : function () {
      this.$el.html(_.template(template));
      return this.$el;
    }
  });

  return View;
});