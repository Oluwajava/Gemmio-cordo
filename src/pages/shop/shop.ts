import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {GiftCardDetailPage} from "../gift-card-detail/gift-card-detail";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";

/**
 * Generated class for the ShopPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-shop',
  templateUrl: 'shop.html',
})


export class ShopPage {


  qrData = null;
  createdCode = null;
  scannedCode = null;
  menu = "scan_qr";

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
              private barcodeScanner: BarcodeScanner) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShopPage');
  }

  segmentChanged($event) {
    console.log($event);
  }

  giftCardDetail() {
    let modal = this.modalCtrl.create(GiftCardDetailPage);
    modal.present();
  }

  scanCode() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.scannedCode = barcodeData.text;
    }, (err) => {
      console.log('Error: ', err);
    });
  }

}
