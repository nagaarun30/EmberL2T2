import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ComicsRoute extends Route {
  @service('index') index;

  async model() {
    let comics = [];
    const ts = new Date().getTime();
    const publicKey = 'b37798739d58cd5a1c0f5220ca34c90d';
    const privateKey = '3754245ec65d41e7ccbdab5b50fa30204e8edda5';
    const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
    const url = `https://gateway.marvel.com:443/v1/public/comics?formatType=comic&noVariants=true&dateDescriptor=thisWeek&limit=60&ts=${ts}&apikey=${publicKey}&hash=${hash}`;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data.data.results);
    for (let i = 0; i < data.data.results.length; i++) {
      if (data.data.results[i].images.length > 0) {
        data.data.results[i].image =
          data.data.results[i].images[0].path +
          '.' +
          data.data.results[i].images[0].extension;
        comics.push(data.data.results[i]);
      }
    }
    console.log('comics', ts, 'hash', hash);
    return comics;
  }
}
