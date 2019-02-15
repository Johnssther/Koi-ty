import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HatoPage } from '../hato/hato';


@IonicPage()
@Component({
  selector: 'page-principal',
  templateUrl: 'principal.html',
})
export class PrincipalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goHato(){
    this.navCtrl.push(HatoPage);
  }

}
