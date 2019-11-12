import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl } from '@angular/forms';
import { UsersProvider } from '../../providers/users/users';

@IonicPage()
@Component({
  selector: 'page-editar-dados-pessoais',
  templateUrl: 'editar-dados-pessoais.html',
})
export class EditarDadosPessoaisPage {
  editForm: FormGroup = new FormGroup({
    nome: new FormControl(null),
    sobrenome: new FormControl(null),
    genero: new FormControl(null),
    email: new FormControl(null),
    cpf: new FormControl(null),
    cns: new FormControl(null),
    nomeMae: new FormControl(null),
    nomePai: new FormControl(null),
    dataNascimento: new FormControl(null),
    celular: new FormControl(null),
    telEmergencia: new FormControl(null),
    tpoSanguineo: new FormControl(null),
    condEspecial: new FormControl(null),
    medicamentos: new FormControl(null),
    alAlimentos: new FormControl(null),
  })

  listaMedicamentos = [];
  listaAlimentos = [];
  listaCondicao = [];

  paciente = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UsersProvider
    ) {
  }

  ionViewDidLoad() {
  }

  ionViewDidEnter() {
    this.userProvider.getComboOptions()
    .subscribe(data => {
      for (let i = 0; i < 100; i++) {
        this.listaMedicamentos.push(data.combo.medicamentos[i])
      }
      this.listaCondicao = data.combo.condicao;
      this.listaAlimentos = data.combo.alimentos;
      this.paciente = data.paciente;
      this.setDefaultValuesForm();
    })
  }

  setDefaultValuesForm() {
    console.log(this.paciente);
  }



}
