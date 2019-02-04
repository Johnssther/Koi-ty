import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RegistrosProvider } from "../../providers/registros/registros";



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
  registros:any=[];

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              public registrosProvider:RegistrosProvider) 
              
  {
    this.numberAnimal=this.navParams.get('numberAnimal');
    this.especie=this.navParams.get( 'especie' );
    this.raza=this.navParams.get( 'raza' );
    this.color=this.navParams.get( 'color' );
    this.dateIn=this.navParams.get( 'dateIn' );

    this.obtenerRegistros();
  }

  //UTILIZO EL METODO GET REGISTROS PARA TRAER TODOS LOS REGISTROS DE LA BASE DE DATOS
  obtenerRegistros(){
    this.registrosProvider.getRegistros()
    .then(registross =>{
      this.registros = registross;
    })
    .catch(error => {
      console.log(error);
    });
  }

  Consultar_compras(){
    alert('Consultando...');
  }
  Consultar_nacimientos(){
   alert('Consultando...');
  }

}
