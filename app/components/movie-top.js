import Component from '@glimmer/component';

export default class MovieTopComponent extends Component {
  gallary(item) {
    let gallary = document.getElementById('gallary');
    console.log(gallary.innerHTML);
    for (let i = 0; i < item.images.length; i++) {
      gallary.innerHTML += `<div class="masonry-grid__column">
              <div class="masonry-grid__item" style="top: 0px; height: 119.818px; margin-bottom: 12px;">
            <div class="column-item--image--wrapper">
                <div style="height: 119.818px;">
                <img
                        style="object-fit: cover; height: 100%; width: 100%;"
                        class="column-item--image column-item--image-animation"
                        alt=${item.title}
                        src=${item.images[i]}>
                </div>
        </div>
    </div>`;
      if (i == 15) {
        break;
      }
    }
  }
}
