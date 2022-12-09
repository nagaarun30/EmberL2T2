import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
  @service('index') index;

  init() {
    super.init(...arguments);
    let token = localStorage.getItem('token');
    let email = localStorage.getItem('email');
    console.log(email, token);

    if (email != null && token != null) {
      let response = fetch(
        'http://localhost:8080/MarvelCharacter/gettoken?email=' +
          email +
          '&token=' +
          token
      );
      response.then((data) => {
        data.json().then((data) => {
          console.log(data);
          if (data.token === token) {
            this.index.islogged = true;
          } else {
            this.index.islogged = false;
          }
        });
      });
    }
  }

  @action
  handleLogin() {
    this.index.islogged = true;
    console.log(this.index.islogged);
  }
}
