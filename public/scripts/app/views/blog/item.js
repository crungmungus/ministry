/**
 */
define([
  'app',
  'moment',
  'text!templates/blog/item.html'
],
function (app, moment, template) {
  'use strict';

  var View = Backbone.Marionette.ItemView.extend({
    tagName : 'tr',
    template : _.template(template),

    triggers: {
      'click .entry': 'click:entry'
    },

    serializeData : function () {
      var data = this.model.toJSON();
          data.recent = this.model.isRecent();

      return data;
    }
  });

  return View;
});