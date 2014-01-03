define([
  'app',
  'text!templates/layout.html'
],
function (app, template) {
  'use strict';

  var Layout = Backbone.Marionette.Layout.extend({
    regions : {
      menu : '#menu',
      main : '#main',
      side : '#side'
    },

    initialize : function () {
      this.template = _.template(template);
    },

    /**
     */
    onRender : function () {

    }
  });

  return Layout;
});