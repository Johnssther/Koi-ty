import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NacimientoPage } from './nacimiento';

@NgModule({
  declarations: [
    NacimientoPage,
  ],
  imports: [
    IonicPageModule.forChild(NacimientoPage),
  ],
})
export class NacimientoPageModule {}
