import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
export default class CardComponent extends Component {
  @service('index') index;

  @action
  view() {
    this.index.isImgShowing = false;
  }
}
