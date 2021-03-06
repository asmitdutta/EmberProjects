import Ember from 'ember';

export default Ember.Controller.extend({

  headerMessage: 'Coming Soon',
  responseMessage: '',
  emailAddress: '',
  isValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
  isDisabled: Ember.computed.not('isValid'),
  actualEmailAddress: Ember.computed('emailAddress', function(){
    console.log('actualEmailAddress function is called: ', this.get('emailAddress'));
  }),
  emailAddressChanged: Ember.observer('emailAddress', function(){
    console.log('observer is called', this.get('emailAddress'));
  }),
  actions: {
    saveInvitation(){
      const email = this.get('emailAddress');
      const newInvitation = this.store.createRecord('invitation', { email: email });
      newInvitation.save().then((response) => {
        this.set('responseMessage', `Thank you! We have just saved your email address: ${response.get('id')}`);
        this.set('emailAddress', '');
      });
      alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
    }
  }
});
