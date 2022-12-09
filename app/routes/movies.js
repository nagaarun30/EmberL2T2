import Route from '@ember/routing/route';
import { marvelmovies } from '../data/movies';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class MoviesRoute extends Route {
  @service('index') index;
}
