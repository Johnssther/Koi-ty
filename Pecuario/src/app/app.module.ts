import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { DatabaseProvider } from '../providers/database/database';

import { SQLite } from '@ionic-native/sqlite';

import { HttpModule } from '@angular/http'
import { PrincipalPage } from '../pages/principal/principal';
import { HatoPage } from '../pages/hato/hato';
import { VistaPage } from '../pages/vista/vista';


@NgModule({
  declarations: [
    MyApp,
    HomePage,
    PrincipalPage,
    HatoPage,
    VistaPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    PrincipalPage,
    HatoPage,
    VistaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DatabaseProvider
  ]
})
export class AppModule {}
