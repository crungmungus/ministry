/**
 * Main dashboard view.
 * Presents the user with the hello data and shortcuts to different places.
 */
define([
  'app',
  'collections/users',
  'views/users/list',
  'collections/posts',
  'views/blog/list',
  'text!templates/churches/main.html'
],
function (app, UsCollection, UsListView, PsCollection, PsListView, template) {
  'use strict';

  var View = Backbone.Marionette.Layout.extend({
    events : {
      'submit .edit-block' : 'onBlockSave',
      'click .post-new' : 'onNewPost'
    },

    regions : {
      users : '#user-list',
      posts : '#post-list'
    },

    initialize : function () {
      this.listenTo(this.model, 'change', this.onModelChange);

      this.usListView = new UsListView({
        collection : new UsCollection({
          church : this.model.id
        })
      });

      this.psListView = new PsListView({
        collection : new PsCollection({
          church : this.model.id
        })
      });
    },

    onNewPost : function () {
      app.trigger('post:create', this.model.id);

      app.router.navigate('blog' + '/' + this.model.id + '/new-post');
    },

    onBlockSave : function () {
      this.model.set('address', this.$('#address').val());
      this.model.set('city', this.$('#city').val());
      this.model.set('country', this.$('#country').val());
      this.model.set('twitter', this.$('#twitter').val());
      this.model.set('mission', this.$('#mission-edit-form textarea').val());

      this.model.save();

      return false;
    },

    onModelChange : function () {
      this.render();
    },

    render : function () {
      var html =  _.template(template, {
        data : this.model.toJSON()
      });

      this.$el.html(html);

      // Temporary.
      this.usListView.collection.fetch().done(_.bind(function () {
        this.users.show(this.usListView);
      },this));

      this.psListView.collection.fetch({
        data : {
          limit : 10
        }
      }).done(_.bind(function () {
        this.posts.show(this.psListView);
      },this));
      
      return this.$el;
    }
  });

  return View;
});