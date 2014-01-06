/**
 */
define([
  'app',
  'text!templates/ministry/details.html'
],
function (app, template) {
  'use strict';

  var View = Backbone.View.extend({
    id : 'ministry-details',

    initialize : function () {
      this.template = template;
    },

    render : function () {
      this.$el.html(_.template(this.template, {

      }));

      return this.$el;
    }
  });

  return View;
});