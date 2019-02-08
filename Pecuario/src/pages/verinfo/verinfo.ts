import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { HistorialProvider } from "../../providers/historial/historial";
import { BasedatosProvider } from "../../providers/basedatos/basedatos";



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

  especieH;//Para iterar el ngFor
  razaH;

  hatoname = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,
              public historialProvider:HistorialProvider,
              public basedatosProvider:BasedatosProvider) {

    this.numberAnimal=this.navParams.get('numberAnimal');
    this.especie=this.navParams.get( 'especie' );
    this.raza=this.navParams.get( 'raza' );
    this.color=this.navParams.get( 'color' );
    this.dateIn=this.navParams.get( 'dateIn' );

  }
  
  Consultar_compras(){
    
   

    this.data = this.historialProvider.cargar_historial();
    this.especieH = this.data;
    this.razaH = this.data.raza;
    console.log(this.data);
    console.log(this.data + '  --> john');
                         this.data.color;
                         this.data.fechaIngreso;

    
 
  this.basedatosProvider.getHato(0);
   
   console.log('Este nombre fue guardado en la base de datos '+ this.basedatosProvider.getHato(0));
  }
  
  Consultar_nacimientos(){
   alert('Consultando...');
  }

}
