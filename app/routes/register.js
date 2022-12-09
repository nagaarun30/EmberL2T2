import Route from '@ember/routing/route';
import { action } from '@ember/object';
export default class RegisterRoute extends Route {
  @action
  async register() {
    let fname = event.target[0].value;
    let lname = event.target[1].value;
    let email = event.target[2].value;
    let password = event.target[3].value;

    fetch(
      `http://localhost:8080/MarvelCharacter/register?uname=${email}&fname=${fname}&lname=${lname}&email=${email}&password=${password}`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        if (data.status === 'Success') {
          alert('Registered successfully');
        } else {
          alert('Registration failed');
        }
      });
  }
}
