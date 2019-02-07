import { Injectable } from '@angular/core';


@Injectable()
export class HistorialProvider {

  numeroAnimal:string[]=[];
  especie:string[]=[];
  raza:string[]=[];
  color:string[]=[];
  fechaIngreso:any[]=[];

  constructor() {
  }

  agregar_historial(numeroAnimal, especie, raza, color, fechaIngreso){
    // let data 
    console.log('holaaaaaa   ',especie);
    this.numeroAnimal.unshift(numeroAnimal);
    this.especie.unshift(especie);
    this.raza.unshift(raza);
    this.color.unshift(color);
    this.fechaIngreso.unshift(fechaIngreso);

  }

  cargar_historial(){
    console.log('estamos devolviendo su resultado almacenado');
/* 
     let compra:any = [{
      numeroAnimal:this.numeroAnimal,
      especie:this.especie,
      raza:this.raza,
      color:this.color,
      fechaIngreso:this.fechaIngreso
    }]  */

    
    //return compra;
    return this.color;
    
  }

}
