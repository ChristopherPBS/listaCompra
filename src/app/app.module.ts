import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { AdicionarItemPage } from '../pages/adicionar-item/adicionar-item';
import { ListaDeCompraPage } from '../pages/lista-de-compra/lista-de-compra';
import { DespensaPage } from '../pages/despensa/despensa';
import { TabsControllerPage } from '../pages/tabs-controller/tabs-controller';
import { IonicStorageModule } from '@ionic/storage';
import { UsersProvider } from '../providers/users/users';
import { HttpModule } from '@angular/http';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    AdicionarItemPage,
    ListaDeCompraPage,
    DespensaPage,
    TabsControllerPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot(),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AdicionarItemPage,
    ListaDeCompraPage,
    DespensaPage,
    TabsControllerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider
  ]
})
export class AppModule {}