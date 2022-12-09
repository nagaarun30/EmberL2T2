import EmberRouter from '@ember/routing/router';
import config from 'ember-l2-t2/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('item', { path: '/character/:item_id' });
  this.route('not-found', { path: '/*path' });
  this.route('upload');
  this.route('movies');
  this.route('MovieItem', { path: '/movies/:movie_id' });
  this.route('TvShow', { path: '/Tv' });
  this.route('TvItem', { path: '/Tv/:tv_id' });
  this.route('characters');
  this.route('comics');
  this.route('Register', { path: '/register' });
});
