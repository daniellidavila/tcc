import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { EditarDadosPessoaisPage } from '../editar-dados-pessoais/editar-dados-pessoais';
import { UsersProvider, PayloadGetPaciente } from '../../providers/users/users';


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

  usuario = {}

  constructor(public navCtrl: NavController, public navParams: NavParams, public userSrv: UsersProvider) {
  }

  ionViewDidLoad (){
    this.userSrv.getDetalhes().subscribe(data => {
      console.log(data)
      this.usuario = data.paciente
    })
  }

  goToEditarDadosPessoaisPage(){
    this.navCtrl.push(EditarDadosPessoaisPage)
  }

}
