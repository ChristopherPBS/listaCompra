import { TabsControllerPage } from './../pages/tabs-controller/tabs-controller';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { AdicionarItemPage } from '../pages/adicionar-item/adicionar-item';
import { DespensaPage } from '../pages/despensa/despensa';
import { ListaDeCompraPage } from '../pages/lista-de-compra/lista-de-compra';



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) navCtrl: Nav;
    rootPage:any = TabsControllerPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  goToAdicionarItem(params){
    if (!params) params = {};
    this.navCtrl.setRoot(AdicionarItemPage);
  }goToDespensa(params){
    if (!params) params = {};
    this.navCtrl.setRoot(DespensaPage);
  }goToListaDeCompra(params){
    if (!params) params = {};
    this.navCtrl.setRoot(ListaDeCompraPage);
  }
}
