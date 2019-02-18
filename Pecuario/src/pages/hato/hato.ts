import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatabaseProvider } from '../../providers/database/database';
import { PrincipalPage } from '../principal/principal';
import { VistaPage } from '../vista/vista';

/**
 * Generated class for the HatoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-hato',
  templateUrl: 'hato.html',
})
export class HatoPage {

  private ListHato : any;  
  private todo: FormGroup;

  constructor(public navCtrl: NavController, private database: DatabaseProvider, private formBuilder: FormBuilder) {

    this.todo = this.formBuilder.group({
      nombre: [''],
      descripcion: [''],
      activo: [false],
    });
  }
  goPrincipal(){
    this.navCtrl.push(PrincipalPage);
  }

  view(){
    this.navCtrl.push(VistaPage);
  }

  CreateHato(){
    this.database.CreateHato(this.todo.value.nombre, this.todo.value.descripcion,
      this.todo.value.activo).then((data) => {
     alert("se creo Hato ");
    }, (error) => {
      console.log(error);
    })
  }

  getHato(id:number) {
    this.database.GetHato(id).then((data: object) => {
      this.navCtrl.push(VistaPage, {
        data: data
      });
    }, (error) => {
      console.log(error);
    })
  }

  GetAllHato(){
    this.database.GetAllHatos().then((data: any) => {
      console.log(data);
      this.ListHato = data;
    }, (error) => {
      console.log(error);
    })
  }


}
