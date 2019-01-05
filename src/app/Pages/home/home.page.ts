import {Component} from '@angular/core';
// import {NavController, Platform} from '@ionic/angular';
import {TranslateService} from '@ngx-translate/core';
import {NavController} from '@ionic/angular';

@Component({
    selector: 'app-home',
    templateUrl: 'home.page.html',
    styleUrls: ['home.page.scss']
})
export class HomePage {

    public title: string;
    public description: string;
    public language: string;

    lang: any;

    constructor(
        public translate: TranslateService,
        private navCtrl: NavController) {
        this.lang = 'en';
        this.translate.setDefaultLang('en');
        this.translate.use('en');
    }

    // menue() {
    //     this.menuCtrl.open('');
    //     // this.menuCtrl.open('right');
    // }

    // ngAfterViewInit() {
    //     // this.app.setScrollDisabled(true);
    //     this.app._setDisableScroll(true);
    // }

    MobilBiil() {
        this.navCtrl.push('MobilRechargePage');
    }

    ElectPay() {
        this.navCtrl.push('ElectRechargePage');
    }

    E15Payment() {
        this.navCtrl.push('E15PaymentPage');
    }

    E15query() {
        this.navCtrl.push('E15InqueryPage');
    }

    cardTrans() {
        this.navCtrl.push('CardTransfermPage');
    }

    BalanceInquiry() {
        this.navCtrl.push('BalanceInquiryPage');
    }

    // @BackButton()
    // public onBackButton() {
    //     // alert('bak');
    //     this.platform.exitApp();
    //     return true;
    // }


    openMyQr() {
        this.navCtrl.push('CreateQrPage');
    }

    openPayQr() {
        this.navCtrl.push('GetPaymentQrPage');
    }

    Purchase() {
        this.navCtrl.push('PurchasePage');
    }


}
