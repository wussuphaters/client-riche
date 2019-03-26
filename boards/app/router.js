import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('developers', function() {
    this.route('new');
    this.route('edit',{path:'edit/:delevoper_id'})
  });
  this.route('projects', function() {
    this.route('new');
  });
});

export default Router;
