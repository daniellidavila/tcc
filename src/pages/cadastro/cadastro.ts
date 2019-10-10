import { UsersProvider } from './../../providers/users/users';
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
  model: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private toast: ToastController, private userProvider: UsersProvider) {

      this.model = new User();
      this.model.nome = "Maria";
      this.model.sobrenome = "Silva";
      this.model.cpf = "000.000.000-00";
      this.model.email = "maria@teste.com";
      this.model.senha = "123";
      this.model.reSenha = "123";
  }

  cadastrarPaciente(){
    this.userProvider.cadastrarPaciente(this.model.nome, this.model.sobrenome, this.model.cpf, 
      this.model.email, this.model.senha, this.model.reSenha)
      .then((result: any) => {
        this.toast.create({ message: 'Usuário criado com sucesso. Token: ' + result.token, position: 'botton', duration: 3000 }).present();
      })
      .catch((error: any) => {
        this.toast.create({ message: 'Erro ao criar usuário. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
      });
  }

  goToLoginPage(){
    this.navCtrl.push(LoginPage)
  }

  goToFinalizarCadastroPage(){
    this.navCtrl.push(FinalizarCadastroPage)
  }

}

export class User {
  nome: String;
  sobrenome: String;
  cpf: String;
  email: String; 
  senha: String;
  reSenha: String;
}
