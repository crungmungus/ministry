define(['app', 'views/dashboard/main','collections/hello'], function (app, DashView, Hello) {
  'use strict';

  var Router = Backbone.SubRoute.extend({
    routes : {
      '' : 'root'
    },

    root : function () {
      var view = new DashView({
        collection : new Hello()
      });

      app.layout.main.show(view);
    }
  });

  return Router;
});
