import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the FinalizarCadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-finalizar-cadastro',
  templateUrl: 'finalizar-cadastro.html',
})
export class FinalizarCadastroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FinalizarCadastroPage');
  }

  goToCadastroPage() {
    this.navCtrl.push(CadastroPage);
  }

  goToTabsPage() {
    this.navCtrl.push(TabsPage);
  }

}
