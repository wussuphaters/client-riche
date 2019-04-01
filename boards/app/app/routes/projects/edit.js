import Route from '@ember/routing/route';
import EmberObject,{get,set} from '@ember/object'
export default Route.extend({
  //debugger;
  templateName:'projects/edit',
  afterModel(model)
  { //declenchement une fois que le model est chargé

    let copy = EmberObject.create(model.toJSON());
    set(model,'copy',copy);
    return model;

  },

  actions:{
    save(model)
    {
      model.setProperties(JSON.parse(JSON.stringify(model.copy)));
      model.save().then(set(model, "copy",{})); //
    }
  }


});
