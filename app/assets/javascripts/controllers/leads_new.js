App.LeadsNewController = Ember.Controller.extend({

  actions: {
    createLead: function() {
      var self = this;
      var lead = this.store.createRecord('lead', this.get('fields'));
      lead.save().then(function() {
        self.transitionToRoute('lead', lead);
      });
    }
  }

});