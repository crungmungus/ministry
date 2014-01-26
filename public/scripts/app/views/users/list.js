/**
 */
define([
  'app',
  'views/users/item',
  'text!templates/users/list.html'
],
function (app, UsItemView, template) {
  'use strict';

  var View = Backbone.Marionette.CompositeView.extend({
    itemView : UsItemView,

    tagName : 'table',

    className : 'table',

    onItemClicked : function (v, obj) {
      app.trigger('user:selected', v.model.id);
      app.router.navigate('user' + '/' + v.model.id);
    },

    initialize : function () {
      this.template = template;
      this.listenTo(this, 'itemview:edit', this.onItemClicked);
    }
  });

  return View;
});