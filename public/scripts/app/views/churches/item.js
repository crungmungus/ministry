/**
 */
define([
  'app',
  'text!templates/churches/item.html'
],
function (app, ChItemView, template) {
  'use strict';

  var View = Backbone.Marionette.ItemView.extend({
    tagName: "tr",

    initialize : function () {
      this.template = template;
    }
  });

  return View;
});