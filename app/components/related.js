import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class RelatedComponent extends Component {

    @tracked bgimage = this.args.items[0].fullimage;
    @tracked logo = this.args.items[0].logo;
    @tracked title = this.args.items[0].title;
    @tracked desc = this.args.items[0].overview.slice(0, 100) + '...';

    @action
    changebg(item) {
        console.log(item);
        this.bgimage = item.fullimage;
        this.title = item.title;
        this.logo = item.logo;
        this.desc = item.overview.slice(0, 100)+'...';
    }
}
