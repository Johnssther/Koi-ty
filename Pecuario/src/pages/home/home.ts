import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CompraPage, NacimientoPage } from '../index.pages';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParam: NavParams) {

  }



  registerBirth(){
   this.navCtrl.push(NacimientoPage);
   console.log('Registrar Nacimiento');
  }

  registerBuy(){
    this.navCtrl.push(CompraPage);
   }


}
