import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Camera, CameraOptions } from '@ionic-native/camera';



/*
  Generated class for the CameraProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CameraProvider {

  constructor( private camera: Camera,) {
  }

  takePicture() {
    const options: CameraOptions = {
      quality: 30,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };
    let that = this;
    
    return new Promise((resolve,reject) =>{
      this.camera.getPicture(options).then((imageData) => {
        resolve(imageData);
      }).catch((err) => {
        reject(err);
      });
    });
  } 
}
