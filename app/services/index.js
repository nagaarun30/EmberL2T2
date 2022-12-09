import Service from '@ember/service';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class IndexService extends Service {
  @tracked characters = [];
  @tracked Movies = [];
  @tracked isImgShowing = false;
  @tracked featured = [];
  @tracked FMovies = [];
  @tracked TvShow = [];
  @tracked FTv = [];
  @tracked isLoaded = false;
  @tracked isItemLoaded = false;
  @tracked islogged = false;

  addimage(character) {
    const id = this.ImageSrc.length + 1;
    const imageexist = this.ImageSrc.find(
      (img) => img.image === character.image
    );
    character.id = id;
    if (!imageexist) {
      this.ImageSrc = [...this.ImageSrc, character];
      console.log(this.ImageSrc);
    }
  }
}
