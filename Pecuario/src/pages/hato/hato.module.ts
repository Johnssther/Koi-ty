import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HatoPage } from './hato';

@NgModule({
  declarations: [
    HatoPage,
  ],
  imports: [
    IonicPageModule.forChild(HatoPage),
  ],
})
export class HatoPageModule {}
