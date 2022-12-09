import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class MoviesController extends Controller {
  @service('index') index;

  @tracked filteredMovies = [];

  queryParams = ['sort'];
  @tracked sort = null;

  get filteredMoviesfn() {
    let sort = this.sort;
    if (sort === 'asc') {
      console.log('asc');
      this.filteredMovies = [
        ...this.index.Movies.sort((a, b) => (a.title > b.title ? 1 : -1)),
      ];
      $('#dropdownMenuButton').dropdown('hide');
      return this.filteredMovies;
    } else if (sort === 'desc') {
      console.log('desc');
      this.filteredMovies = [
        ...this.index.Movies.sort((a, b) => (a.title < b.title ? 1 : -1)),
      ];
      $('#dropdownMenuButton').dropdown('hide');
      return this.filteredMovies;
    } else if (sort === 'release') {
      console.log('release');
      this.filteredMovies = [
        ...this.index.Movies.sort((a, b) =>
          a.release_date > b.release_date ? 1 : -1
        ),
      ];
      $('#dropdownMenuButton').dropdown('hide');
      return this.filteredMovies;
    } else {
      return this.index.Movies;
    }
  }

  @action
  toggleSort() {
    $('#dropdownMenuButton').dropdown('toggle');
  }
}
