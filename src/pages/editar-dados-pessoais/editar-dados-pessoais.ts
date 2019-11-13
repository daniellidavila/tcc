import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersProvider, Paciente, Combo } from '../../providers/users/users';

@IonicPage()
@Component({
  selector: 'page-editar-dados-pessoais',
  templateUrl: 'editar-dados-pessoais.html',
})
export class EditarDadosPessoaisPage {
  editForm: FormGroup = new FormGroup({
    nome: new FormControl('', Validators.required),
    sobrenome: new FormControl('', Validators.required),
    genero: new FormControl(''),
    email: new FormControl('', Validators.required),
    celular: new FormControl(null),
    cpf: new FormControl('', Validators.required),
    cns: new FormControl(''),
    nomeMae: new FormControl(''),
    nomePai: new FormControl(''),
    nascimento: new FormControl(''),
    telEmergencia: new FormControl(''),
    tpoSanguineo: new FormControl(''),
    condEspecial: new FormControl(null),
    medicamentos: new FormControl(null),
    alAlimentos: new FormControl(null),
  }, { updateOn: 'change' })

  listaMedicamentos: Combo[] = [];
  listaAlimentos: Combo[] = [];
  listaCondicao: Combo[] = [];

  paciente: Paciente = {};

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UsersProvider,
    private toast: ToastController
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
      this.setDefaultCondicao();
      this.setDefaultMedicamento();
      this.setDefaultAlimento();
    })
  }

  setDefaultValuesForm() {
    Object.keys(this.paciente).forEach(key => {
      if (key === 'medicamentos') return;
      if (key === 'alAlimentos') return;
      if (key === 'condEspecial') return;
      if (key === 'atendimentos') return;

      if (key === 'cpf' && this.paciente.cpf.length < 14) {
        const { cpf } = this.paciente
        this.paciente.cpf = `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6, 9)}-${cpf.substring(9, 11)}`;
      }

      if (this.paciente[key] && this.editForm.get(key)) {
        this.editForm.get(key).setValue(this.paciente[key])
      }
    })
  }

  setDefaultCondicao() {
    const tmp = this.listaCondicao.filter(condicao => this.paciente.condEspecial.some(cond => cond === condicao.value))
    this.editForm.controls.condEspecial.setValue(tmp.map(condicao => condicao.value))
  }
  setDefaultMedicamento() {
    const tmp = this.listaMedicamentos.filter(medicamento => this.paciente.medicamentos.some(med => med === medicamento.value))
    this.editForm.controls.medicamentos.setValue(tmp.map(medicamento => medicamento.value))
  }
  setDefaultAlimento() {
    const tmp = this.listaAlimentos.filter(alimento => this.paciente.alAlimentos.some(ali => ali === alimento.value))
    this.editForm.controls.alAlimentos.setValue(tmp.map(alimento => alimento.value))
  }

  salvar() {
    if (this.editForm.valid) {
      this.userProvider.atualizarPaciente(this.editForm.value)
      .subscribe(data => {
        if (data.success) {
          this.toast.create({
            message: 'Dados editados com sucesso!',
            position: 'botton',
            duration: 3000
          }).present();
          this.navCtrl.pop();
        } else {
          this.toast.create({
            message: 'Ocorreu um erro! Tente novamente mais tarde',
            position: 'botton',
            duration: 3000
          }).present();
          console.log(data.errorList);
        }
      },
      err => {
        this.toast.create({
          message: 'Ocorreu um erro! Tente novamente mais tarde',
          position: 'botton',
          duration: 3000
        }).present();
        console.log(err);
      })
    }
  }

  get stateBtn() {
    return !this.editForm.valid;
  }
}
