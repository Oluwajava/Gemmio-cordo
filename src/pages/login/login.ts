import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from "../menu/menu";
import {FingerprintAIO} from "@ionic-native/fingerprint-aio";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private faio: FingerprintAIO) {

  }

  ionViewDidLoad() {
    this.faio.show({
      clientId: 'Gemmio',
      clientSecret: 'password', //Only necessary for Android
      disableBackup:true,  //Only for Android(optional)
      localizedFallbackTitle: 'Use Pin', //Only for iOS
      localizedReason: 'Please authenticate' //Only for iOS
    })
      .then((result: any) => console.log(result))
      .catch((error: any) => console.log(error));
  }

  login() {
    this.navCtrl.push('menu');
  }


}
