import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ModalNuevoSitioPage } from './modal-nuevo-sitio.page';

const routes: Routes = [
  {
    path: '',
    component: ModalNuevoSitioPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ModalNuevoSitioPage]
})
export class ModalNuevoSitioPageModule {}
