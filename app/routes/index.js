import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';
import { characters } from '../data/characters';

export default class IndexRoute extends Route {
  @service('index') index;
  @service store;

  async init() {
    super.init(...arguments);
    console.log(this.index.islogged);
    try {
      let characters = await fetch(
        'http://localhost:8080/MarvelCharacter/getCharacter?'
      );
      let charactersJson = await characters.json();
      console.log(charactersJson);
      this.index.characters = charactersJson;
      for (let i = 0; i < 4; i++) {
        this.index.featured[i] = charactersJson[i];
      }

      let response = await fetch('https://mcuapi.herokuapp.com/api/v1/movies');
      let data = await response.json();
      for (let i = 0; i < data.data.length; i++) {
        let response1 = await fetch(
          `https://api.themoviedb.org/3/search/movie?api_key=5136e1d0babe7ebe6c75976bec09bac4&language=en-US&query=${data.data[i].title}&page=1&include_adult=false`
        );
        let data1 = await response1.json();
        for (let j = 0; j < data1.results.length; j++) {
          if (
            data1.results[j].release_date.substring(0, 4) ===
            data.data[i].release_date.substring(0, 4)
          ) {
            data.data[i].image =
              'https://image.tmdb.org/t/p/w500' + data1.results[j].poster_path;
            data.data[i].fullimage =
              'https://image.tmdb.org/t/p/original' +
              data1.results[j].backdrop_path;
            data.data[i].id = data1.results[j].id;
            break;
          }
        }
      }
      this.index.Movies = data.data;
      this.index.TMPMovies = data.data.sort((a, b) => {
        if (
          a.release_date <= new Date().toISOString().substring(0, 10) &&
          b.release_date <= new Date().toISOString().substring(0, 10)
        ) {
          return a.release_date < b.release_date ? 1 : -1;
        }
      });
      for (let i = 0; i < 6; i++) {
        this.index.FMovies = [...this.index.FMovies, this.index.TMPMovies[i]];
      }
      console.log(this.index.Movies);

      let response2 = await fetch('http://localhost:4200/TvShow.json');
      let data2 = await response2.json();
      console.log(data2.TvShows);
      for (let i = 0; i < data2.TvShows.length; i++) {
        let response3 = null;
        if (data2.TvShows[i].type === 'TV Show') {
          response3 = await fetch(
            `https://api.themoviedb.org/3/search/tv?api_key=5136e1d0babe7ebe6c75976bec09bac4&language=en-US&query=${data2.TvShows[i].title}&page=1&include_adult=false`
          );
        } else {
          response3 = await fetch(
            `https://api.themoviedb.org/3/search/movie?api_key=5136e1d0babe7ebe6c75976bec09bac4&language=en-US&query=${data2.TvShows[i].title}&page=1&include_adult=false`
          );
        }
        let data3 = await response3.json();
        for (let j = 0; j < data3.results.length; j++) {
          if (data2.TvShows[i].type === 'TV Show') {
            if (
              data3.results[j].name.toLowerCase() ===
              data2.TvShows[i].title.toLowerCase()
            ) {
              console.log(data2.TvShows[i].title, data3.results[j]);
              data2.TvShows[i].image =
                'https://image.tmdb.org/t/p/w500' +
                data3.results[j].poster_path;
              data2.TvShows[i].fullimage =
                'https://image.tmdb.org/t/p/original' +
                data3.results[j].backdrop_path;
              data2.TvShows[i].id = data3.results[j].id;
              break;
            }
          } else {
            if (
              data3.results[j].title.toLowerCase() ===
              data2.TvShows[i].title.toLowerCase()
            ) {
              console.log(data2.TvShows[i].title, data3.results[j]);
              data2.TvShows[i].image =
                'https://image.tmdb.org/t/p/w500' +
                data3.results[j].poster_path;
              data2.TvShows[i].id = data3.results[j].id;
              break;
            }
          }
        }
      }
      this.index.TvShow = data2.TvShows;
      this.index.TMPMovies = data2.TvShows.slice(0, 6);
      for (let i = 0; i < 6; i++) {
        this.index.FTv = [...this.index.FTv, this.index.TMPMovies[i]];
      }
      console.log(this.index.TvShow);
    } catch (e) {
      console.log(e);
    }
    this.index.isLoaded = true;
  }
}
