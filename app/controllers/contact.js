import Ember from 'ember';

export default Ember.Controller.extend({
    emailAddress: '',
    message: '',
    isEmailValid: Ember.computed.match('emailAddress', /^.+@.+\..+$/),
    isMessageValid: Ember.computed.gte('message.length', 5),
    isValid: Ember.computed.and('isEmailValid','isMessageValid'),
    isDisabled: Ember.computed.not('isValid'),
    actions: {
      sendMessage(){
        alert(`Email: ${this.get('emailAddress')} Message: ${this.get('message')}`);
        this.set('emailAddress', '');
        this.set('message','');
        this.set('responseMessage',`Email sent to ${this.get('emailAddress')} with message ${this.get('message')}`);
      }
    }
});
