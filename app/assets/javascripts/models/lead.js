App.Lead = DS.Model.extend({
  isEditing: false,
  firstName: DS.attr('string'),
  lastName:  DS.attr('string'),
  email:     DS.attr('string'),
  phone:     DS.attr('string'),
  status:    DS.attr('string', { defaultValue: 'new' }),
  notes:     DS.attr('string'),
  
  fullName:  function() {
    return this.get('firstName') + ' ' + this.get('lastName')
  }.property('firstName', 'lastName'),

})


App.Lead.reopenClass({
  STATUSES: ['new', 'in progress', 'closed', 'bad']
});

// Remember that model is a hook that’s 
// called whenever the route is entered. 
// The result of the model function is then 
// available to the controller, view, and template.

App.LeadsRoute = Ember.Route.extend({
	model: function() {return this.store.find('lead')}
})

// leads controller

App.LeadsController = Ember.ArrayController.extend({
  sortProperties: ['firstName', 'lastName']
})