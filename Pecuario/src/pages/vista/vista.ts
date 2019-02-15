import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder } from '@angular/forms';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the VistaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-vista',
  templateUrl: 'vista.html',
})
export class VistaPage {

  private ListHato : any;  
  private todo: FormGroup;
  constructor(public navCtrl: NavController, private database: DatabaseProvider,
     private formBuilder: FormBuilder) {

    this.todo = this.formBuilder.group({
      nombre: [''],
      descripcion: [''],
      activo: [''],
    });
  }


  // viewHato(){
  //   this.database.getHato().then((data: any) => {
  //     alert('Entro al hato');
  //     // this.ListHato = data;
  //   }, (error) => {
  //     console.log(error);
  //   })
  // }

}
