import {Component} from '@angular/core';

import {Platform} from '@ionic/angular';
import {SplashScreen} from '@ionic-native/splash-screen/ngx';
import {StatusBar} from '@ionic-native/status-bar/ngx';
import {TranslateService} from '@ngx-translate/core';


@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {

    constructor(
        private platform: Platform,
        private splashScreen: SplashScreen,
        private statusBar: StatusBar,
        private _platform: Platform,
        private _translate: TranslateService
    ) {
        this._platform
            .ready()
            .then(() => {
                this._initTranslate();
            });
        this.initializeApp();
    }

    private _initTranslate() {
        // Set the default language for translation strings, and the current language.
        this._translate.setDefaultLang('en');


        if (this._translate.getBrowserLang() !== undefined) {
            this._translate.use(this._translate.getBrowserLang());
        } else {
            this._translate.use('en'); // Set your language here
        }
    }

    initializeApp() {
        this.platform.ready().then(() => {
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }
}
