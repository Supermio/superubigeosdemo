import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

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
    }        
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
