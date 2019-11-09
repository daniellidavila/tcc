import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { UsersProvider } from '../../providers/users/users';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@IonicPage()
@Component({
  selector: 'page-finalizar-cadastro',
  templateUrl: 'finalizar-cadastro.html',
})
export class FinalizarCadastroPage {
  cadastroForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    senha: new FormControl(null, Validators.required),
    reSenha: new FormControl(null, Validators.required),
    nome: new FormControl(null, Validators.required),
    sobrenome: new FormControl(null, Validators.required),
    cpf: new FormControl(null, Validators.required),
  })

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private toast: ToastController,
    private userProvider: UsersProvider,
    ) {
      // o navParams.data são os dados do formulário da outra tela
    this.saveDataForm(this.navParams.data);
  }

  cadastrarPaciente() {
    if (this.cadastroForm.valid) {
      this.userProvider.cadastrarPaciente(this.cadastroForm.value)
        .subscribe(data => {
          if (data.success) {
            this.toast.create({
              message: 'Usuário criado com sucesso',
              position: 'botton',
              duration: 3000
            }).present();
            this.navCtrl.setRoot(LoginPage)
          } else {
            console.log(data);
            if (data.errorList && data.errorList[0].field === 'cpf') {
              if (data.errorList[0].msg === 'cpf.invalido') {
                this.toast.create({
                  message: `Cpf inválido`,
                  position: 'botton',
                  duration: 3000
                }).present();
              } else if (data.errorList[0].msg === 'cpf.ja.cadastrado') {
                this.toast.create({
                  message: `Cpf já cadastraddo`,
                  position: 'botton',
                  duration: 3000
                }).present();
              }
            }
          }
        },
          err => {
            this.toast.create({
              message: `Erro ao criar usuário. Erro: ${err.error}`,
              position: 'botton',
              duration: 3000
            }).present();
          })
    } else {
      this.toast.create({
        message: 'Todos os campos são obrigatórios',
        position: 'botton',
        duration: 3000
      }).present();
    }
  }

  ionViewDidLoad() {
  }

  goToCadastroPage() {
    this.navCtrl.push(CadastroPage);
  }

  saveDataForm(data) {
    // essa função seta os dados inicias do formulário para os dados da tela anterior
    Object.keys(data).forEach(key => {
      this.cadastroForm.get(key).setValue(data[key]);
    })
  }

  get stateBtn() {
    return !this.cadastroForm.valid
  }

}
