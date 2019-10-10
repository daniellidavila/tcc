import { UsersProvider, PacienteCadastroClass } from './../../providers/users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { FinalizarCadastroPage } from '../finalizar-cadastro/finalizar-cadastro';


@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html',
})
export class CadastroPage {
  model = new PacienteCadastroClass();

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    private userProvider: UsersProvider,
    ) {
      this.model.nome = "Maria";
      this.model.sobrenome = "Silva";
      this.model.cpf = "000.000.000-00";
      this.model.email = "maria@teste.com";
      this.model.senha = "123";
      this.model.reSenha = "123";
  }

  cadastrarPaciente(){
    this.userProvider.cadastrarPaciente(this.model)
    .subscribe(data => {
      if (data.success) {
        this.toast.create({
          message: 'Usuário criado com sucesso',
          position: 'botton',
          duration: 3000
        }).present();
      }
    },
    err => {
      this.toast.create({
        message: `Erro ao criar usuário. Erro: ${err.error}`,
        position: 'botton',
        duration: 3000
      }).present();
    })
  }

  goToLoginPage(){
    this.navCtrl.push(LoginPage)
  }

  goToFinalizarCadastroPage(){
    this.navCtrl.push(FinalizarCadastroPage)
  }

}
