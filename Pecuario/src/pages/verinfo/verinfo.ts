import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HistorialProvider } from "../../providers/historial/historial";



@Component({
  selector: 'page-verinfo',
  templateUrl: 'verinfo.html',
})
export class VerinfoPage {

   index:number = 0;

  numberAnimal;
  especie;
  raza;
  color;
  dateIn;

  data ;//recibe el objeto compra de HistorialProvider --> servivio o provider

  numeroAnimalH;//Para iterar el ngFor
  razaH;


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public historialProvider:HistorialProvider) {
    this.numberAnimal=this.navParams.get('numberAnimal');
    this.especie=this.navParams.get( 'especie' );
    this.raza=this.navParams.get( 'raza' );
    this.color=this.navParams.get( 'color' );
    this.dateIn=this.navParams.get( 'dateIn' );
  }
  
  Consultar_compras(){
    
   

    this.data = this.historialProvider.cargar_historial();
    this.numeroAnimalH = this.data;
    this.razaH = this.data.raza;
    console.log(this.data);
    console.log(this.data + '  --> john');
                         this.data.color;
                         this.data.fechaIngreso;

    
  
   
    
  }
  
  Consultar_nacimientos(){
   alert('Consultando...');
  }

}
