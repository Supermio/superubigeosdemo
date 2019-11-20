import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { BaseConfigService } from './service/config/base-config.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'card'
    },
    {
      title: 'Form1',
      url: '/form1',
      icon: 'card'
    },
    {
      title: 'Form2',
      url: '/form2',
      icon: 'card'
    },
    {
      title: 'Online',
      url: '/online',
      icon: 'card'
    },
    {
      title: 'Paginado',
      url: '/paginado',
      icon: 'card'
    },
    {
      title: 'Autocomplete',
      url: '/autocomplete',
      icon: 'card'
    },
    {
      title: 'Nosql',
      url: '/nosql',
      icon: 'card'
    } 
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private baseConfig: BaseConfigService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.baseConfig.init()
    .then( resolve => {
      console.log('Estoy en el InitializeApp');
      if (this.baseConfig.getAppDbPerUser()){}
      console.log('El config es: ' + this.baseConfig.getAppDb());
      this.baseConfig.initDb();
    })
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
