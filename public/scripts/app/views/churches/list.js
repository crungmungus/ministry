/**
 */
define([
  'app',
  'views/churches/item',
  'text!templates/churches/list.html'
],
function (app, ChItemView, template) {
  'use strict';

  var View = Backbone.Marionette.CompositeView.extend({
    itemView : ChItemView,

    itemViewContainer: "tbody",

    initialize : function () {
      this.template = template;
    }
  });

  return View;
});