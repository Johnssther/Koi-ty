import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database'
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private ListAnimal : any;  
  private todo: FormGroup;

  constructor(public navCtrl: NavController, private database: DatabaseProvider, private formBuilder: FormBuilder) {

    this.todo = this.formBuilder.group({
      marca: [''],
      numeroA: [''],
      especie: [''],
      raza: [''],
      fechaIngreso: [''],
      peso:[''],
      sexo: [''],
      lote: ['']
    });

  }
    CreateAnimal(){
      console.log(this.todo);
      
      this.database.CreateAnimal(this.todo.value.marca, this.todo.value.numeroA,
        this.todo.value.especie, this.todo.value.raza, this.todo.value.fechaIngreso,
        this.todo.value.peso, this.todo.value.sexo, this.todo.value.lote).then( (data) => {
        console.log(data);
       alert("se creo con exito ");
      }, (error) => {
        console.log(error);
      })
    }

    GetAllAnimal(){
      this.database.GetAllAnimals().then((data: any) => {
        console.log(data);
        this.ListAnimal = data;
      }, (error) => {
        console.log(error);
      })
    }


}
