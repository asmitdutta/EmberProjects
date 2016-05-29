import Ember from 'ember';

export default Ember.Route.extend({
    model(){
      return this.store.createRecord('contact');
    },

    actions: {
          sendMessage(newContact){
            alert(`Email: ${newContact.get('email')} Message: ${newContact.get('message')} saved !!!`);
            newContact.save()
            .then(() => this.controller.set('responseMessage',`Email sent to ${newContact.get('email')} with message ${newContact.get('message')}`))
            .then(() => this.controller.set('model.email',''))
            .then(() => this.controller.set('model.message',''));
          }
    }
});
