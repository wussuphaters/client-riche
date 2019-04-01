import Route from '@ember/routing/route';
import EmberObject,{get,set} from '@ember/object'
export default Route.extend({

model(){
  return {
    copy:{},
    devs : this.store.findAll('developer')
  };
},
actions:{
  save(model){
    let dev=this.store.createRecord('project',
    EmberObject.create(model.copy,model.devs));
    dev.save();
  }
}
});
