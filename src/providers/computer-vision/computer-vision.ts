import { Prediction } from './../../models/prediction';
import { FileUploadOptions, FileTransferObject, FileTransfer } from '@ionic-native/file-transfer';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

/*
  Generated class for the ComputerVisionProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class ComputerVisionProvider {

  constructor(private transfer: FileTransfer,
              ) {
    console.log('Hello ComputerVisionProvider Provider');
  }

  public getPredictionsFromImage(imageFileUri: any, teste: boolean) {

    if (teste) {
      return new Promise((resolve,reject) =>{
        setTimeout(() =>{
          resolve([
            {
              'tag':'sexy',
              'probability':'0.92'
            },
            {
              'tag':'formal',
              'probability':'0.91'
            },
            {
              'tag':'romantico',
              'probability':'0.91'
            },
          ]);

        },2500);

      })
    }
   
    let options: FileUploadOptions = {
      fileKey: 'file',
      fileName: 'name.jpg',
      mimeType: "application/octet-stream",
      headers: { 
        "Prediction-Key": "818d26f0280b4e099a13586628fbfd43"
      }
       
    }
    const url = 'https://southcentralus.api.cognitive.microsoft.com/customvision/v1.0/Prediction/103b472a-ce41-40a3-a8fa-30df803993cf/image';
    const fileTransfer: FileTransferObject = this.transfer.create();
    return fileTransfer.upload(imageFileUri, url, options)
      .then((data) => {
        console.log(data.response);
        let previsoes = JSON.parse(data.response).Predictions;
        let resultado:Prediction[] = [];
        for(let i = 0; i < previsoes.length; i++){
          let prev = previsoes[i];
          if(prev.Tag === 'vestido'){
            continue;
          }
          let prob = prev.Probability;
          let prediction: Prediction = {
            'tag': prev.Tag,
            'probability': prob
          }
           resultado.push(prediction);
        }
        return resultado;

      }).catch((err) =>{
        return err;
      });
      
  }



}
