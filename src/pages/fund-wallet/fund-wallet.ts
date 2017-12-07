import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {RecieptPage} from "../reciept/reciept";

/**
 * Generated class for the FundWalletPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-fund-wallet',
  templateUrl: 'fund-wallet.html',
})
export class FundWalletPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FundWalletPage');
  }

  reciept() {
    let modal = this.modalCtrl.create(RecieptPage);
    modal.present();
  }
}
