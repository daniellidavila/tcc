import { UsersProvider } from './../../providers/users/users';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { CadastroPage } from '../cadastro/cadastro';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  model: User;

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    private toast: ToastController, private userProvider: UsersProvider) {

      this.model = new User();
      this.model.usuario = "teste@teste";
      this.model.senha = "123";
  }

  login(){
    this.userProvider.login(this.model.usuario, this.model.senha)
    .then((result: any) => {
      this.toast.create({ message: 'Usuário logado com sucesso! Token: ' + result.Token, position: 'botton', duration: 3000 }).present();
    })
    .catch((error: any) => {
      this.toast.create({ message: 'Erro ao logar. Erro: ' + error.error, position: 'botton', duration: 3000 }).present();
    });
  }

  // goToTabsPage(){
  //   if (this.campoUsername=="adm" &&  this.campoSenha=="123") {
  //     this.navCtrl.push(TabsPage)
  //   }
  // }

  goToCadastroPage(){
    this.navCtrl.push(CadastroPage)
  }
}

export class User {
  usuario: String;
  senha: String;
}