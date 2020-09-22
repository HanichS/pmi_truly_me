import { FilePath } from '@ionic-native/file-path';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ResultadosPage } from './resultados';

@NgModule({
  declarations: [
    ResultadosPage,
  ],
  providers: [
    FilePath
  ],
  imports: [
    IonicPageModule.forChild(ResultadosPage),
  ],
})
export class ResultadosPageModule {}
