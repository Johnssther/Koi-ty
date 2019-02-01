import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VerinfoPage } from "../index.pages";


@Component({
  selector: 'page-compra',
  templateUrl: 'compra.html',
})
export class CompraPage {

  numberAnimal:any = '';
  especie:any = '';
  raza:any = '';
  color:any = '';
  dateIn:any = '';


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  

  register(){
    this.navCtrl.push( VerinfoPage, {
      'numberAnimal':this.numberAnimal,
      'especie':this.especie,
      'raza':this.raza,
      'color':this.color,
      'dateIn':this.dateIn
    });

  }

}
