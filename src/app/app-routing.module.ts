import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './Pages/tabs/tabs.module#TabsPageModule' },
  { path: 'balance-inquiry', loadChildren: './Pages/balance-inquiry/balance-inquiry.module#BalanceInquiryPageModule' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
