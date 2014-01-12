/**
 */
define([
  'app',
  'text!templates/users/item.html'
],
function (app, template) {
  'use strict';

  var View = Backbone.Marionette.ItemView.extend({
    tagName : 'tr',
    template : _.template(template),

    triggers: {
      'click a.edit': 'edit'
    }
  });

  return View;
});