import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FinalizarCadastroPage } from '../finalizar-cadastro/finalizar-cadastro';

/**
 * Generated class for the CadastroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastroPage');
  }

  goToLoginPage(){
    this.navCtrl.push(LoginPage)
  }

  goToFinalizarCadastroPage(){
    this.navCtrl.push(FinalizarCadastroPage)
  }

}
