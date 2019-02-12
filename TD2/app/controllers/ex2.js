import Controller from '@ember/controller';
import {set,get} from '@ember/object';
export default Controller.extend({
  actions:{
    toggleActive(service){
      Ember.set(service,'active', !Ember.get(service,'active'));
    }
  }
});
