import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SQLite} from '@ionic-native/sqlite/ngx';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import { RegistrosProvider } from "../providers/registros/registros";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, 
              public statusBar: StatusBar, 
              public splashScreen: SplashScreen,
              public sQLite:SQLite,
              public registrosProvider:RegistrosProvider) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Estadisticas', component: ListPage },
      { title: 'Ingresar Información', component: ListPage },
      { title: 'Consultar la base de datos', component: ListPage },
      { title: 'Sincronizar manualmente', component: ListPage },
      { title: 'Ajustes', component: ListPage }
    ];

    
  }
  //CREAR LA BASE DE DATOS Y EVALUARLA
  crearBasedeDatos(){
    this.sQLite.create({
      name: 'data.db',
      location: 'default'
    }).then(
      (db)=>{
        this.registrosProvider.setDatabase(db);
        console.log('base de datos creada');
        return this.registrosProvider.createTables();
      }
    ).catch( error => {
        console.log(error);
        console.log('Error, la base de datos no se creo');
    });
  }


  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      this.crearBasedeDatos();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
