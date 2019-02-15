import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompraPage, NacimientoPage } from '../index.pages';

import { SQLite} from '@ionic-native/sqlite/ngx';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, 
              public navParam: NavParams,
              public sQlite:SQLite) {

  }



  registerBirth(){
   this.navCtrl.push(NacimientoPage);
  }

  registerBuy(){
    this.navCtrl.push(CompraPage);
   }


}
