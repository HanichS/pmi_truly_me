import { Prediction, getIconType } from './../../models/prediction';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FilePath } from '@ionic-native/file-path';

/**
 * Generated class for the ResultadosPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resultados',
  templateUrl: 'resultados.html',
})
export class ResultadosPage {

  predictions:[Prediction]
  imagePath: any
  teste: boolean = false
  getIconType = getIconType
  

  constructor(
                public navCtrl: NavController, 
                public navParams: NavParams,
                private filePath: FilePath
             ) {
       
  }

  ionViewDidLoad() {

  }

  ionViewWillEnter() {
    this.predictions = this.navParams.get('predictions');
    console.log(this.navParams.get('image'));
    this.imagePath = this.navParams.get('image');
    this.teste = this.navParams.get('teste');
    /*
    return this.filePath.resolveNativePath(this.navParams.get('image')).then((path) =>{
      console.log(path);
      this.imagePath = path;
    }); */

  }

  backToHome(){
    this.navCtrl.setRoot('PrincipalPage');
  }

}
