/**
 */
define([
  'app',
  'models/post',
  'text!templates/blog/post.html'
],
function (app, PsModel, template) {
  'use strict';

  var View = Backbone.View.extend({
    events : {
      'submit' : 'onPostSave',
    },

    initialize : function (options) {
      if(options.postId) {
        this.model = this.collection.get(options.postId);
      }

      if(!this.model) {
        this.model = new PsModel();
      }

      Backbone.Validation.bind(this);
    },

    onPostSave : function () {
      var comments, published;

      published = ($('#published').prop('checked')) ? 1 : 0;
      comments = ($('#comments').prop('checked')) ? 1 : 0;

      this.model.set('title', $('#post-title').val());
      this.model.set('body', $('#post-body').val());
      this.model.set('published', published);
      this.model.set('comments', comments);

      if(this.model.isValid(true)) {
        if(this.model.isNew()) {
          this.collection.create(this.model);
        } else {
          this.model.save();
        }
      } else {
        console.log('invalid');
      }
      
      return false;
    },

    render : function () {
      this.$el.html(_.template(template, this.model.attributes, {
        variable : 'data'
      }));

      return this.$el;
    }
  });

  return View;
});