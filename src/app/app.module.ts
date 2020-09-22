import { PrincipalPageModule } from './../pages/principal/principal.module';
import { PrincipalPage } from './../pages/principal/principal';
import { CameraProvider } from './../providers/camera/camera';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera';
import { FileTransfer} from '@ionic-native/file-transfer';

import { MyApp } from './app.component';
import { ComputerVisionProvider } from '../providers/computer-vision/computer-vision';

@NgModule({
  declarations: [
    MyApp,
     
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PrincipalPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    PrincipalPage,
  ],
  providers: [
    FileTransfer,
    Camera,
    CameraProvider,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CameraProvider,
    ComputerVisionProvider
  ]
})
export class AppModule {}
