import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class SkillComponent extends Component {
  isgreat(skill) {
    if (skill > 3) {
      return true;
    }
    return false;
  }
}
