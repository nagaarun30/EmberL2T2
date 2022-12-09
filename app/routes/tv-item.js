import Route from '@ember/routing/route';
import EmberObject from '@ember/object';

const Tv = EmberObject.extend({
  id: null,
  title: null,
  image: null,
  fullimage: null,
  logo: null,
  description: null,
  images: null,
  release_date: null,
  tagline: null,
  director: null,
  cast: null,
  videos: null,
});

export default class TvItemRoute extends Route {
  async model(params) {
    const { tv_id } = params;
    let response = await fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}?api_key=5136e1d0babe7ebe6c75976bec09bac4&language=en-US`
    );
    let data = await response.json();

    let response1 = await fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}/images?api_key=5136e1d0babe7ebe6c75976bec09bac4`
    );
    let data1 = await response1.json();

    let response2 = await fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}/credits?api_key=5136e1d0babe7ebe6c75976bec09bac4`
    );
    let data2 = await response2.json();

    let response3 = await fetch(
      `https://api.themoviedb.org/3/tv/${tv_id}/videos?api_key=5136e1d0babe7ebe6c75976bec09bac4&language=en-US`
    );
    let data3 = await response3.json();

    // console.log(data3);
    let logo = null;
    if (data1.logos.length > 0) {
      logo = data1.logos.filter((logo) => logo.iso_639_1 === 'en');
      if (logo.length === 0) {
        logo = 'https://image.tmdb.org/t/p/w500' + data1.logos[0].file_path;
      } else {
        logo = 'https://image.tmdb.org/t/p/w500' + logo[0].file_path;
      }
    }

    let backdrop = [];
    let oribackdrop = null;
    if (data1.backdrops.length > 0) {
      for (let i = 0; i < data1.backdrops.length; i++) {
        if (
          data1.backdrops[i].height === 2160 &&
          (data1.backdrops[i].iso_639_1 === 'en' ||
            data1.backdrops[i].iso_639_1 === null)
        ) {
          backdrop.push(data1.backdrops[i]);
        }
      }
      console.log(backdrop.length);
      if (backdrop.length === 0) {
        console.log('here', data1.backdrops[0].file_path);
        oribackdrop =
          'https://image.tmdb.org/t/p/original' + data1.backdrops[0].file_path;
      }
      if (backdrop.length === 1) {
        console.log('here1', data1.backdrops[0].file_path);
        oribackdrop =
          'https://image.tmdb.org/t/p/original' + backdrop[0].file_path;
      } else if (backdrop.length > 1) {
        oribackdrop =
          'https://image.tmdb.org/t/p/original' + backdrop[2].file_path;
      }
    }

    if (logo === oribackdrop) {
      logo = null;
    }

    console.log('CREW', data2.crew);

    let director = data2.crew.filter(
      (crew) => crew.job === 'Executive Producer'
    );
    if (director.length === 0) {
      director = null;
    } else {
      director = director[0].name;
    }
    let cast = data2.cast.filter((cast) => cast.order < 12);
    cast.forEach((cast) => {
      cast.image = 'https://image.tmdb.org/t/p/w500' + cast.profile_path;
    });
    console.log(cast);

    let videos = data3.results ? data3.results : null;
    console.log(videos);

    let tv = Tv.create({
      id: data.id,
      title: data.original_name,
      image: 'https://image.tmdb.org/t/p/original' + data.poster_path,
      fullimage: oribackdrop,
      logo: logo,
      description: data.overview,
      images: data1.backdrops.map((image) => {
        return 'https://image.tmdb.org/t/p/w500' + image.file_path;
      }),
      release_date: data.release_date,
      tagline: data.tagline,
      director: director,
      cast: cast,
      videos: videos,
    });

    console.log(tv);

    return { tv };
  }
}
