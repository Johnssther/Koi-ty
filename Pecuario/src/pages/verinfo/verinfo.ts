import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';



@Component({
  selector: 'page-verinfo',
  templateUrl: 'verinfo.html',
})
export class VerinfoPage {
  numberAnimal;
  especie;
  raza;
  color;
  dateIn;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.numberAnimal=this.navParams.get('numberAnimal');
    this.especie=this.navParams.get( 'especie' );
    this.raza=this.navParams.get( 'raza' );
    this.color=this.navParams.get( 'color' );
    this.dateIn=this.navParams.get( 'dateIn' );
  }

  Consultar_compras(){
    alert('Consultando...');
  }
  Consultar_nacimientos(){
   alert('Consultando...');
  }

}
