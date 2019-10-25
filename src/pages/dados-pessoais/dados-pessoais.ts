import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditarDadosPessoaisPage } from '../editar-dados-pessoais/editar-dados-pessoais';

/**
 * Generated class for the DadosPessoaisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dados-pessoais',
  templateUrl: 'dados-pessoais.html',
})
export class DadosPessoaisPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToEditarDadosPessoaisPage(){
    this.navCtrl.push(EditarDadosPessoaisPage)
  }

}
