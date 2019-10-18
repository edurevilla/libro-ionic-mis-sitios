import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Plugins, CameraResultType } from '@capacitor/core';
import { DbService } from '../services/db.service';
import { ImgService } from '../services/img.service';

const { Camera } = Plugins;

@Component({
 selector: 'app-modal-detalle-sitio',
 templateUrl: './modal-detalle-sitio.page.html',
 styleUrls: ['./modal-detalle-sitio.page.scss'],
})
export class ModalDetalleSitioPage implements OnInit {

 sitio: any;
 ind: number;
 edit = false;

 constructor(
   private modalCtrl: ModalController,
   private img: ImgService,
   private db: DbService,
    ) { }

 ngOnInit() {
 }

 cerrarModal() {
   this.modalCtrl.dismiss();
 }

 comoLlegar() {

   const destino = this.sitio.lat + ', ' + this.sitio.lng;

   const device = navigator.userAgent;

   let url = 'http://maps.google.com?daddr=' + destino;

   if (device.match(/Iphone/i) || device.match(/iPhone|iPad|iPod/i)) {
           // iOs
           url = 'http://maps.apple.com/maps?saddr=Current%20Location&daddr=' + destino;
       } else if (device.match(/Android/i)) {
           // Android
           url = 'geo:0,0?q=' + destino;
       }


   window.open(url, '_system', 'location=yes');

 }

 editar() {
   this.edit = true;
 }

 async sacarFoto() {
   try {
     const profilePicture = await Camera.getPhoto({
     quality: 50,
     height: 400,
     width: 600,
     allowEditing: false,
     resultType: CameraResultType.Base64,
     });
     this.sitio.foto = 'data:image/png;base64,' + profilePicture.base64String;
     this.sitio.preview = this.img.getImage(this.sitio.foto);
   } catch (error) {
     console.error(error);
   }
  }

 guardarSitio() {
   this.db.modificaSitio(this.sitio, this.ind).then((res) => {
     this.edit = false;
     console.log('se ha introducido correctamente en la bd');
   }, (err) => {  console.log('error al meter en la bd ' + err); });
 }

}
