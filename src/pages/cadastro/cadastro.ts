import { FormGroup, FormControl, Validators } from '@angular/forms';
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

  cadastroForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    senha: new FormControl(null, Validators.required),
    reSenha: new FormControl(null, Validators.required),
  })

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController
    ) {}

  goToLoginPage(){
    this.navCtrl.push(LoginPage)
  }

  goToFinalizarCadastroPage(){
    if (this.cadastroForm.valid) {
      // o segundo parametro do navCtrl são os dados do formulário que vai ser passado para a outra tela
      this.navCtrl.push(FinalizarCadastroPage, this.cadastroForm.value)
    } else {
      this.toast.create({
        message: 'Todos os campos são obrigatórios',
        position: 'botton',
        duration: 3000
      }).present();
    }
  }

}
