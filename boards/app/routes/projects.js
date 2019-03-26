import Route from '@ember/routing/route';
import EmberObject,{get,set} from '@ember/object'


export default Route.extend({
    model(){
      return {
        projects : this.store.findAll('projects')
      };
    },
});
