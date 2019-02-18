import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
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
  // templateUrl: 'vista.html',
  template: `
    <ion-header>
        <ion-navbar>
          <ion-title>Pecuario</ion-title>
        </ion-navbar>
    </ion-header>
    <ion-content padding>
      <ion-list>
        <ion-card>
          <ion-card-header>
            <ion-card-title text-wrap>{{data.nombre}}</ion-card-title>
          </ion-card-header>
          <h3>Descripción</h3>
          <ion-card-content class="descripcion">{{data.descripcion}}</ion-card-content>
          <ion-card-content>Activo: {{ data.activo ? 'SI' : 'NO' }}</ion-card-content>

        </ion-card>
        <ion-fab right edge>
            <button ion-fab><ion-icon name="add"></ion-icon></button>
            <ion-fab-list side="left">
              <button ion-fab><ion-icon name="create" (click)="UpdatoHato(data.id)"></ion-icon></button>
              <button ion-fab><ion-icon name="trash" (click)="DeleteHato(data.id)"></ion-icon></button>
              
            </ion-fab-list>
          </ion-fab>
      </ion-list>
    </ion-content>`,
})
export class VistaPage {

  private ListHato : any;  
  data:object;
  constructor(public navCtrl: NavController, private database: DatabaseProvider,
     private formBuilder: FormBuilder, public navParams: NavParams, public modalCtrl: ModalController) {

    this.data = navParams.get('data');

  }

  DeleteHato(id:number){
    this.database.DeleteHato(id).then((data:any)=>{
      alert(data)
    },(error)=>{
      console.log(error)
    })
  }

  UpdatoHato(id:number){
    // let profileModal = this.modalCtrl.create();
    //  profileModal.present();
    // this.database.UpdateHato(id, 'hola mundo', 'hola mundillo', true).then((data:any)=>{
    //   alert(data)
    // },(error)=>{
    //   console.log(error)
    // })
  }
}
