import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GiftCardDetailPage } from './gift-card-detail';

@NgModule({
  declarations: [
    GiftCardDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GiftCardDetailPage),
  ],
})
export class GiftCardDetailPageModule {}
