/**
 */
define([
  'app',
  'text!templates/churches/item.html'
],
function (app, template) {
  'use strict';

  var View = Backbone.Marionette.ItemView.extend({
    tagName : 'tr',
    template : _.template(template),

    triggers: {
      'click td': 'click:td'
    }
  });

  return View;
});