import Model, { attr } from '@ember-data/model';

export default class MovieModel extends Model {
  @attr title;
  @attr image;
  @attr fullimage;
  @attr logo;
  @attr description;
  @attr images;
  @attr release_date;
  @attr tagline;
  @attr director;
  @attr cast;
  @attr videos;
}
