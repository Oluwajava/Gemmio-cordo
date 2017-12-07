import {BrowserModule} from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {SplashScreen} from '@ionic-native/splash-screen';
import {StatusBar} from '@ionic-native/status-bar';

import {MyApp} from './app.component';
import {HomePage} from '../pages/home/home';
import {LoginPage} from "../pages/login/login";
import {SignUpPage} from "../pages/sign-up/sign-up";
import {MenuPage} from "../pages/menu/menu";
import {FundWalletPage} from "../pages/fund-wallet/fund-wallet";
import {ShopPage} from "../pages/shop/shop";
import {AccountPage} from "../pages/account/account";
import {MenuPageModule} from "../pages/menu/menu.module";
import {AddCardPage} from "../pages/add-card/add-card";
import {GiftCardDetailPage} from "../pages/gift-card-detail/gift-card-detail";
import {NgxQRCodeModule} from "ngx-qrcode2";
import {BarcodeScanner} from "@ionic-native/barcode-scanner";
import {RecieptPage} from "../pages/reciept/reciept";
import {FingerprintAIO} from "@ionic-native/fingerprint-aio";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    AddCardPage,
    GiftCardDetailPage,
    RecieptPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    MenuPageModule,
    NgxQRCodeModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    SignUpPage,
    MenuPage,
    AddCardPage,
    GiftCardDetailPage,
    RecieptPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    FingerprintAIO
  ]
})
export class AppModule {
}
