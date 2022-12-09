import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class TrailerComponent extends Component {
  @tracked isShowing = false;
  @action
  bgchange(key) {
    document.getElementById('trailer_section').style.backgroundImage =
      "url('https://img.youtube.com/vi/" + key + "/hqdefault.jpg')";
  }

  @action
  toggleshow() {
    if (this.isShowing) {
      this.isShowing = false;
      document.getElementById('youtube_video').src = '';
    } else {
      this.isShowing = true;
    }
  }

  @action
  playtrailer(key) {
    console.log(key);
    this.toggleshow();
    document.getElementById('youtube_video').src =
      'https://www.youtube.com/embed/' + key + '?autoplay=1';
  }
}
