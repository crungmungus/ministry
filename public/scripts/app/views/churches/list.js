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

    tagName : 'table',

    onItemClicked : function (v, obj) {
      app.trigger('church:selected', v.model.id);
      app.router.navigate('church' + '/' + v.model.id);
    },

    initialize : function () {
      this.template = template;
      this.listenTo(this, 'itemview:click:td', this.onItemClicked);
    }
  });

  return View;
});