/**
 */
define([
  'app',
  'views/blog/item',
  'text!templates/blog/list.html'
],
function (app, PsItemView, template) {
  'use strict';

  var View = Backbone.Marionette.CompositeView.extend({
    itemView : PsItemView,

    tagName : 'table',

    onItemClicked : function (v) {
      app.trigger('post:selected', v.model.id);
      app.router.navigate('blog' + '/1/' + v.model.id);
    },

    initialize : function () {
      this.template = template;
      this.listenTo(this, 'itemview:click:entry', this.onItemClicked);
    }
  });

  return View;
});