import Route from '@ember/routing/route';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { characterstory } from '../data/characters';
import { inject as service } from '@ember/service';

export default class ItemRoute extends Route {
  @service('index') index;

  async getrelatedmovies(character) {



    let relatedmovies = [];
    for(let i=0;i<character.RelatedMovies.length;i++){
      let response = await fetch(
        `https://api.themoviedb.org/3/movie/${character.RelatedMovies[i]}?api_key=5136e1d0babe7ebe6c75976bec09bac4&language=en-US`
      );
      let data = await response.json();
      data.image = 'https://image.tmdb.org/t/p/w500' + data.poster_path;
      data.fullimage = 'https://image.tmdb.org/t/p/original' + data.backdrop_path;

      relatedmovies[i] = data;
      console.log(data);

      // response.then((data) => {
      //   data.json().then((data) => {
      //     console.log(data);
      //     data.image = `https://image.tmdb.org/t/p/w500${data.poster_path}`;
      //     data.fullimage = `https://image.tmdb.org/t/p/original${data.backdrop_path}`;
      //     character.RelatedMovies[i] = data;
      //   });
      // }
      // );
    }
    console.log('relatedmovies', relatedmovies);
    return relatedmovies;
  }

  async model(params) {
    this.index.isItemLoaded = false;
    console.log('loading item', this.index.isItemLoaded);
    const { item_id } = params;
    let response = await fetch(
      `http://localhost:8080/MarvelCharacter/getcharacterbyid?cid=${item_id}`
    );
    let data = await response.json();
    let character = [];

    let filterch = characterstory.filter((character) => {
      return character.cid == item_id;
    });

    console.log('filterch', filterch);
    let relatedmovies = await this.getrelatedmovies(filterch[0]);

    for(let i=0;i<relatedmovies.length;i++){
      let logo = await fetch(`https://api.themoviedb.org/3/movie/${relatedmovies[i].id}/images?api_key=5136e1d0babe7ebe6c75976bec09bac4`);
      let logodata = await logo.json();
      console.log('logodata', logodata);
      if (logodata.logos.length > 0) {
        for (let j = 0; j < logodata.logos.length; j++) {
          if (logodata.logos[j].iso_639_1 === 'en') {
            relatedmovies[i].logo = 'https://image.tmdb.org/t/p/w500' + logodata.logos[j].file_path;
            break;
          }
        }
      }
    }

    character = filterch[0];
    character.RelatedMoviesdetails = relatedmovies;

    console.log('character', character);
    let characterDetails = data[0];
    // console.log(character.story);
    this.index.isItemLoaded = true;

    return {
      character,
      characterDetails,
    };
  }
}
