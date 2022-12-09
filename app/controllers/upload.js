import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class UploadController extends Controller {
  @service('index') index;

  displayimageside(upimage) {
    var image = upimage;
    var reader = new FileReader(image);
    var imageo;
    reader.onload = function (e) {
      imageo = document.getElementById('output');
      imageo.src = e.target.result;
    };
    reader.readAsDataURL(upimage[0]);
    this.index.isImgShowing = true;
  }

  @action
  displayimagesideact() {
    var image = document.getElementById('image');

    var filePath = image.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if (!allowedExtensions.exec(filePath)) {
      alert('Invalid file type');
      image.value = '';
      return false;
    }

    if (image.length != 0) {
      this.displayimageside(image.files);
    }
  }

  @action
  addImage() {
    var src = document.getElementById('output').src;
    document.getElementById('status').innerHTML = 'Status: Uploading Error';
    const imageexist = this.index.ImageSrc.find((image) => image.image === src);

    if (imageexist) {
      alert('Image already exist');
    } else {
      var name = document.getElementById('name').value;
      var alias = document.getElementById('alias').value;
      var character = {
        image: src,
        name: name,
        alias: alias,
      };
      this.index.addimage(character);
      this.index.isImgShowing = false;
      document.getElementById('image').value = '';
      document.getElementById('name').value = '';
      document.getElementById('alias').value = '';
      document.getElementById('status').innerHTML = 'Status: Uploaded';
    }
  }
}
