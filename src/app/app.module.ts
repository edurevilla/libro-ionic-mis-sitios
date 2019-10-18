import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalNuevoSitioPageModule } from './modal-nuevo-sitio/modal-nuevo-sitio.module';
import { ImgService } from './services/img.service';
import { IonicStorageModule } from '@ionic/storage';
import { ModalDetalleSitioPageModule  } from './modal-detalle-sitio/modal-detalle-sitio.module';


@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    ModalNuevoSitioPageModule,
    IonicStorageModule.forRoot(),
    ModalDetalleSitioPageModule,
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ImgService,
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
