import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class MovieCardComponent extends Component {
  @action
  changebg(item, tv, home) {
    if (home) {
      if (tv) {
        document.getElementById(
          'bg'
        ).style.backgroundImage = `url(${item.fullimage})`;
      } else {
        document.getElementById('imagech').src = `${item.fullimage}`;
      }
    }
  }
}
