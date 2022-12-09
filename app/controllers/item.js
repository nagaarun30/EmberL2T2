import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ItemController extends Controller {
  @service('index') index;

  @tracked isShowing = false;
  @tracked image = this.model.character.story[0].image;

  @action
  toggleshow() {
    if (this.isShowing) {
      this.isShowing = false;
    } else {
      this.isShowing = true;
    }
  }

  @action
  setActive(event) {
    for (
      let i = 0;
      i < event.target.parentElement.parentElement.children.length;
      i++
    ) {
      event.target.parentElement.parentElement.children[i].classList.remove(
        'active'
      );
    }
    event.target.parentElement.classList.add('active');
    let models = this.model;
    console.log($('.sets__main').children()[0]);

    for (let i = 0; i < $('.sets__main').children().length; i++) {
      if (
        $('.sets__main').children()[i].id == event.target.attributes[1].value
      ) {
        console.log(this.model);
        $('.sets__main').children()[i].style.transition =
          'all 0.5s ease-in-out';
        $('#storyimage').css('background-image', `url(${models.character.story[event.target.attributes[1].value - 1].image})`);
        $('#storyimage').css('--imageLg1x', `url(${models.character.story[event.target.attributes[1].value - 1].image})`);
        $('#storyimage').css('transition', 'all 0.5s ease-in-out');
        $('.sets__main').children()[i].classList.remove('nextSet');
      } else {
        $('.sets__main').children()[i].style.transition = 'none';

        $('.sets__main').children()[i].classList.add('nextSet');
      }
    }
  }
}
