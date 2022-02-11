import { OeuvresService } from './../../services/oeuvres.service';
import { Oeuvre } from './../../models/oeuvre';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Geolocation } from '@capacitor/geolocation';
import { NativeGeocoder } from '@awesome-cordova-plugins/native-geocoder/ngx';



@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {

  oeuvre = new Oeuvre();

  constructor(
        private geocoder: NativeGeocoder,
        private router: Router,
        private toastCtrl: ToastController,
        private oeuvreService: OeuvresService,
  ) { }

  ngOnInit() {
    this.fillPosition();
  }

  async fillPosition(){
    Geolocation.watchPosition({enableHighAccuracy: true}, async (position, err) => {
        if(!err){
            const results = await this.geocoder.reverseGeocode(position.coords.latitude, position.coords.longitude);
            const address = results.pop();
            if(address.locality){
                this.oeuvre.latitude = address.latitude;
                this.oeuvre.longitude = address.longitude;
            }
        }
    });
  }
  save(){
    this.oeuvreService.add(this.oeuvre).subscribe(async () => {
        const toast = await this.toastCtrl.create({
            message: 'Votre destination à été ajoutée',
            duration: 5000,
            color: 'success',
        });
        toast.present();
        this.router.navigate(['/list']);
    });
  }
}
