import Ember from 'ember';

export default Ember.Controller.extend({
    isEmailValid: Ember.computed.match('model.email', /^.+@.+\..+$/),
    isMessageValid: Ember.computed.gte('model.message.length', 5),
    isValid: Ember.computed.and('isEmailValid','isMessageValid'),
    isDisabled: Ember.computed.not('isValid')
});
