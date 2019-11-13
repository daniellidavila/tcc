import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { MedicoPage } from '../medico/medico';
import { LoginPage } from '../login/login';
import { LogoutProvider } from '../../providers/logout/logout';

/**
 * Generated class for the ConfiguracoesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-configuracoes',
  templateUrl: 'configuracoes.html',
})
export class ConfiguracoesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private logoutProvider: LogoutProvider, private toast: ToastController) {
  }

  // goToMedicoPage(){
  //   this.navCtrl.push(MedicoPage)
  // }

  goToMensagem(){
    this.toast.create({
      message: 'Em desenvolvimento!',
      position: 'botton',
      duration: 3000
    }).present();
  }

  goToLoginPage(){
    this.logoutProvider.logoutEmitter.emit()
  }

}
