import { Component, OnInit } from '@angular/core';
import L from 'leaflet'; // Importamos L de leaflet para renderizar el mapa.
import { Plugins } from '@capacitor/core';
import { ModalController } from '@ionic/angular';
import { ModalNuevoSitioPage } from '../modal-nuevo-sitio/modal-nuevo-sitio.page';
 
const { Geolocation } = Plugins;

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  position: any;
  map: L.Map;
  center: L.PointTuple;
  miMarker: L.icon =  L.icon({ iconUrl: 'assets/img/ico_estoy_aqui.png',  iconSize:[48, 48],iconAnchor: [24, 43]});


  constructor(private modalCtrl: ModalController) {}

  ngOnInit() {
    this.initMap();
  }

  async initMap() {
    this.position = await Geolocation.getCurrentPosition();
    console.log('position:', this.position);
    this.center = [this.position.coords.latitude, this.position.coords.longitude];
 
    setTimeout(() => {
        this.map = L.map('map').setView(this.center, 13);
        L.tileLayer('https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        })
        .addTo(this.map);

        // Mostramos el icono de donde estamos
        L.marker(this.center, { icon: this.miMarker }).addTo(this.map);
      });
  }

  nuevoSitio() {
    // aquí vamos a abrir el modal para añadir nuestro sitio.
    this.modalCtrl.create({
      component: ModalNuevoSitioPage,
      componentProps: { lat: this.position.coords.latitude,  lon: this.position.coords.longitude }
 }).then((modal) => {
      modal.onDidDismiss().then(() => {
          // se ejecuta al cerrar
      });
      modal.present();
    });
  }

}
