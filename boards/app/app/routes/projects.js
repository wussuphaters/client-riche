import Route from '@ember/routing/route';
import EmberObject,{get,set} from '@ember/object'


export default Route.extend({
    model(){
      return {
        projects : this.store.findAll('project'),
        suppr : false,
        projectTmp : null
      };
    },
    actions:{
      delete(model,project){
        project.destroyRecord();
        set(model,'suppr',false);
      },
      confirmSupp(model,project){
        set(model,'suppr',true);
        set(model,'projectTmp',project);
      },
      cancel(model){
        set(model,'suppr',false);
      }
    }
});
