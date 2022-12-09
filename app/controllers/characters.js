import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default class CharactersController extends Controller {
  @service('index') index;
}
