import Component from '@glimmer/component';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
export default class NavBarComponent extends Component {
  @service('index') index;

  @action
  handleLogout() {
    this.index.islogged = false;
    localStorage.removeItem('token');
    localStorage.removeItem('email');
  }
}
