import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SQLite} from '@ionic-native/sqlite/ngx';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { CompraPage, NacimientoPage, VerinfoPage } from "../pages/index.pages";
import { RegistrosProvider } from "../providers/registros/registros";



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CompraPage, 
    NacimientoPage, 
    VerinfoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CompraPage, 
    NacimientoPage, 
    VerinfoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SQLite,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RegistrosProvider
  ]
})
export class AppModule {}
