import { HomePage } from './../home/home';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AdicionarItemPage } from '../adicionar-item/adicionar-item';
import { DespensaPage } from '../despensa/despensa';
import { ListaDeCompraPage } from '../lista-de-compra/lista-de-compra';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {

  tab1Root: any = AdicionarItemPage;
  tab2Root: any = DespensaPage;
  tab3Root: any = ListaDeCompraPage;
  tab4Root: any = HomePage;
  constructor(public navCtrl: NavController) {
  }

}
