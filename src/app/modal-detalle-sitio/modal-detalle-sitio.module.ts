import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalDetalleSitioPage } from './modal-detalle-sitio.page';

const routes: Routes = [
  {
    path: '',
    component: ModalDetalleSitioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalDetalleSitioPage]
})
export class ModalDetalleSitioPageModule {}
