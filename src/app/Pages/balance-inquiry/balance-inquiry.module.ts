import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BalanceInquiryPage } from './balance-inquiry.page';

const routes: Routes = [
  {
    path: '',
    component: BalanceInquiryPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BalanceInquiryPage]
})
export class BalanceInquiryPageModule {}
