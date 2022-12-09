import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class LoginComponent extends Component {
  @action
  handle(action) {
    let email = $('#email').val();
    let password = $('#password').val();

    if (email == '' || password == '') {
      alert('Please fill all fields');
    } else {
      fetch(`http://localhost:8080/MarvelCharacter/j_security_check`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: `j_username=${email}&j_password=${password}`,
      }).then((response) => {
          return response.json();
        })
        .then((data) => {
          console.log(data);
          if (data.status === 'Success') {
            alert('Login successful');
            let Token = Math.floor(Math.random() * 1000000000);
            localStorage.setItem('email', email);
            localStorage.setItem('token', Token);
            fetch(
              `http://localhost:8080/MarvelCharacter/login?email=${email}&token=${Token}`
            );
            action();
          } else {
            alert('Login failed');
          }
        });
    }
  }
}
