import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CharactersRoute extends Route {
  @service('index') index;

  model() {
    console.log('character', this.index.characters);
  }
}
