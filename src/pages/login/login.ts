import { SessionProvider } from './../../providers/session/session';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { CadastroPage } from '../cadastro/cadastro';
import { FormControl, Validators, FormGroup } from '@angular/forms';


@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  // Formgroup é um grupo de controles para controlar os inputs
  loginForm = new FormGroup({
    // O FormControl é o controlador dos input, ele define as validações do campo para no final o FormGrup saber se está tudo válido
    usuario: new FormControl(null, Validators.required),
    senha: new FormControl(null, Validators.required)
  })

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    private sessionProvider: SessionProvider
    ) {
  }

  login(){
    // Verifica se o formulário todo é válido
    if (this.loginForm.valid) {
      // chama a função de login do provider e enviar o valor do formulário
      this.sessionProvider.login(this.loginForm.value)
      // data é a resposta do back-end
      .subscribe((data) => {
        // verifica se a requisição foi um sucesso
        if (data.success) {
          // salva o token no localstorage para ser usado depois
          localStorage.setItem('token', data.token);
          // navega para a tabspage
          this.navCtrl.setRoot(TabsPage)
        }
      },
      // se houver um erro ele apresenta esse toast na tela
      (err) => {
        this.toast.create({
          message: 'Erro ao logar',
          position: 'botton',
          duration: 3000
        }).present();
      })
      // se o formulário estiver inválido em qualquer que seja o campo ele emite um toast avisando que os campos são válidos
    } else {
      this.toast.create({
        message: 'Os campos usuário e senha são obrigatórios',
        position: 'botton',
        duration: 3000
      }).present();
    }
  }

  goToCadastroPage(){
    this.navCtrl.push(CadastroPage)
  }
}
