import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class IndexController extends Controller {
  @service('index') index;

  @action
  changebg() {
    let i = 1;
    const images = [...this.index.FMovies];
    // console.log(images);

    setInterval(function () {
      if (i < images.length) {
        document.getElementById('imagech').src = `${images[i].fullimage}`;
        i++;
      } else {
        i = 0;
      }
    }, 10000);
  }
}
