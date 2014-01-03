var ministry = {
  routers : {}
};

var Activities = Backbone.Collection.extend({
  url : '/api/hello',

  initialize : function () {
    this.fetch();
  }
});

/**
 */
var MainRouter = Backbone.Router.extend({
  routes : {
    'dashboard*subroute' : 'invokeDashModule',
    'user*subroute' : 'invokeUserModule'
  },

  invokeUserModule : function (subroute) {
    if(!ministry.routers.users) {
      ministry.routers.users = new UserRouter('user');
    }
  },

  invokeDashModule : function (subroute) {
    if(!ministry.routers.dashboard) {
      ministry.routers.dashboard = new DashRouter('dashboard');
    }
  }
});

/**
 */
var DashRouter = Backbone.SubRoute.extend({
  routes : {
    '' : 'home'
  },

  home : function () {
    var a = new Activities();
  }
});

/**
 */
var UserRouter = Backbone.SubRoute.extend({
  routes : {
    '' : 'home',
    'login' : 'login'
  },

  home : function () {
    console.log('user screen');
  },

  login : function () {
    console.log('login form.');
  }
});

new MainRouter();
Backbone.history.start();