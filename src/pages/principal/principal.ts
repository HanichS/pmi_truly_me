import { ComputerVisionProvider } from './../../providers/computer-vision/computer-vision';
import { CameraProvider } from './../../providers/camera/camera';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AlertController, IonicPage } from 'ionic-angular';


/**
 * Generated class for the PrincipalPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {
  fotoTeste: boolean = true
  mock: boolean = true

  constructor(public navCtrl: NavController, 
              public alertCtrl: AlertController,
              private camera: CameraProvider,
              private vision: ComputerVisionProvider,
              public loadingCtrl: LoadingController ) {
  }

  tirarFoto() {
    this.camera.takePicture().then((imageData) => {
      let loader = this.loadingCtrl.create({
        content: "Analisando a foto...",
      });
      loader.present();
      this.vision.getPredictionsFromImage(imageData, this.mock).then((predictions) => {
        loader.dismiss();
        //alert(previsoes);
        this.navCtrl.setRoot('ResultadosPage', {
          'predictions' : predictions,
          'image' : imageData,
          'teste' : this.fotoTeste
        });
      }).catch(() =>{
        loader.dismiss();
        alert("Erro, não foi possível obter os dados do servidor, tente novamente mais tarde");
      });
      //this.base64Image = 'data:image/jpg;base64,' + imageData;
    }).catch((err) => {
      alert('Desistiu? Vai lá, é de graça =)');
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PrincipalPage');
  }

}
