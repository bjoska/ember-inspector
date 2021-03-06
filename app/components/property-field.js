import Ember from "ember";
export default Ember.TextField.extend({
  attributeBindings: ['label:data-label'],

  didInsertElement() {
    this._super();
    this.$().select();
  },

  insertNewline() {
    this.sendAction('save-property');
    this.sendAction('finished-editing');
  },

  cancel() {
    this.sendAction('finished-editing');
  },

  focusOut() {
    this.sendAction('finished-editing');
  }
});
