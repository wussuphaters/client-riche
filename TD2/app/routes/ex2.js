import Route from '@ember/routing/route';
import EmberObject,{computed} from '@ember/object';

let Services=EmberObject.extend({
  services:[],
  countActive:computed('services.@each.active',function(){
    let activeServices=this.get('services').filter(
      service=>service.active
    );
    return activeServices.length;
  }),
  sumActive:computed('services.@each.active',function(){
    let total=0;
    this.get('services').forEach(service=>{
      if(service.active){
        total+=service.price;
      }
    });
    return total;
  }),
  codePromo:null,
  promos:null,
  txReduction:computed('codePromo','promos',function(){
    return this.get('promos')[this.get('codePromo')];
  })
});

export default Route.extend({
  model(){
    return Services.create({
      services:[
        {
          "name": "Web Development",
          "price": 300,
          "active":false
        },{
          "name": "Design",
          "price": 400,
          "active":false
        },{
          "name": "Integration",
          "price": 250,
          "active":false
        },{
          "name": "Formation",
          "price": 220,
          "active":false
        }
      ],
    promos:
      {
        "B22":0.05,
        "AZ":0.01,
        "UBOAT":0.02
      }
    });
  }
});
