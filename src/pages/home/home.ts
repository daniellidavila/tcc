import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { DadosPessoaisPage } from '../dados-pessoais/dados-pessoais';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToDadosPessoaisPage(){
    this.navCtrl.push(DadosPessoaisPage)
  }
}
