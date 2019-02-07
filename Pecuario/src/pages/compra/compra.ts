import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { VerinfoPage } from "../index.pages";

import { SQLite } from "@ionic-native/sqlite/ngx";

import { HistorialProvider } from "../../providers/historial/historial";

@Component({
  selector: 'page-compra',
  templateUrl: 'compra.html',
})
export class CompraPage {

  numberAnimal:any = '777A65BW32';
  especie:any = 'Bobino';
  raza:any = 'Pardo Suizo';
  color:any = 'Negro';
  dateIn:any = 2019/3/7;


  constructor(public navCtrl: NavController, public navParams: NavParams, public sQLite:SQLite, public historialProvider:HistorialProvider) {
   
  }

  

  register(){
    this.navCtrl.push( VerinfoPage, {
      'numberAnimal':this.numberAnimal,
      'especie':this.especie,
      'raza':this.raza,
      'color':this.color,
      'dateIn':this.dateIn

    });
    this.historialProvider.agregar_historial(this.numberAnimal, this.especie, this.raza, this.color, this.dateIn);
  }

}
