import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { DadosPessoaisPage } from '../dados-pessoais/dados-pessoais';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private toast: ToastController) {

  }

  goToDadosPessoaisPage(){
    this.navCtrl.push(DadosPessoaisPage)
  }

  goToMensagem(){
    this.toast.create({
      message: 'Em desenvolvimento!',
      position: 'botton',
      duration: 3000
    }).present();
  }
}
