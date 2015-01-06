// Adds X-CSRF-Token to all REST requests.
// Allows for the use of Rails protect_from_forgery
// The CSRF Token is normally found in app/views/layouts/application.html.*
// inserted with the rails helper: "csrf_meta_tags"
DS.RESTAdapter.reopen({

  namespace: 'api/v1',
});

App.Store = DS.Store.extend({});
App.ApplicationAdapter = DS.ActiveModelAdapter.extend({});