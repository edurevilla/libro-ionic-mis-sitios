import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
 providedIn: 'root'
})
export class DbService {

 arrSitios: any = [];

 constructor(private storage: Storage) {
   this.getSitios().then( res => {
     if (res) {
       this.arrSitios = res;
     }
   });
 }

 addSitio(sitio) {
   this.arrSitios.push(sitio);
   return this.storage.set('sitios', this.arrSitios);
 }

 getSitios() {
   return this.storage.get('sitios');
 }

 modificaSitio(sitio, ind) {
   this.arrSitios[ind] = sitio;
   return this.storage.set('sitios', this.arrSitios);
 }

 borraSitio(ind) {
  this.arrSitios.splice(ind, 1);
  return this.storage.set('sitios', this.arrSitios);
}


}
