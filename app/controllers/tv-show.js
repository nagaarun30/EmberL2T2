import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
export default class TvShowController extends Controller {
  @service('index') index;

  @tracked filteredTv = [];

  queryParams = ['sort'];
  @tracked sort = null;

  get filteredTvfn() {
    let sort = this.sort;
    if (sort === 'asc') {
      console.log('asc');
      this.filteredTv = [
        ...this.index.TvShow.sort((a, b) => (a.title > b.title ? 1 : -1)),
      ];
      $('#dropdownMenuButton').dropdown('hide');
      return this.filteredTv;
    } else if (sort === 'desc') {
      console.log('desc');
      this.filteredTv = [
        ...this.index.TvShow.sort((a, b) => (a.title < b.title ? 1 : -1)),
      ];
      $('#dropdownMenuButton').dropdown('hide');
      return this.filteredTv;
    } else if (sort === 'release') {
      console.log('release');
      this.filteredTv = [
        ...this.index.TvShow.sort((a, b) =>
          a.release_date > b.release_date ? 1 : -1
        ),
      ];
      $('#dropdownMenuButton').dropdown('hide');
      return this.filteredTv;
    } else {
      return this.index.TvShow;
    }
  }

  @action
  toggleSort() {
    $('#dropdownMenuButton').dropdown('toggle');
  }
}
