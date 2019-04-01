import Route from '@ember/routing/route';
import EmberObject,{get,set} from '@ember/object'


export default Route.extend({
  model(){
    return {
      devs : this.store.findAll('developer'),
      suppr : false,
      devTmp : null
    };
  },
  actions:{
    delete(model,dev){
      dev.destroyRecord();
      set(model,'suppr',false);
    },
    confirmSupp(model,dev){
      set(model,'suppr',true);
      set(model,'devTmp',dev);
    },
    cancel(model){
      set(model,'suppr',false);
    }
  }
});
