import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersProvider, Paciente, Combo } from '../../providers/users/users';

@IonicPage()
@Component({
  selector: 'page-editar-dados-pessoais',
  templateUrl: 'editar-dados-pessoais.html',
})
export class EditarDadosPessoaisPage {
  editForm: FormGroup = new FormGroup({
    nome: new FormControl(null, Validators.required),
    sobrenome: new FormControl(null, Validators.required),
    genero: new FormControl(null),
    email: new FormControl(null, Validators.required),
    cpf: new FormControl(null, Validators.required),
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

  listaMedicamentos: Combo[] = [];
  listaAlimentos: Combo[] = [];
  listaCondicao: Combo[] = [];

  paciente: Paciente = {};

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

      if (key === 'cpf') {
        const { cpf } = this.paciente
        this.paciente.cpf = `${cpf.substring(0, 3)}.${cpf.substring(3, 6)}.${cpf.substring(6, 9)}-${cpf.substring(9, 11)}`;
      }

      if (this.paciente[key] && this.editForm.get(key)) {
        this.editForm.get(key).setValue(this.paciente[key])
      }
    })
  }

  setDefaultCondicao() {
    this.editForm.controls.condEspecial.setValue(
      this.listaCondicao.filter(condicao => this.paciente.condEspecial.some(cond => cond === condicao.value))
    )
  }
  setDefaultMedicamento() {
    this.editForm.controls.medicamentos.setValue(
      this.listaMedicamentos.filter(medicamento => this.paciente.medicamentos.some(med => med === medicamento.value))
    )
  }
  setDefaultAlimento() {
    this.editForm.controls.alAlimentos.setValue(
      this.listaAlimentos.filter(alimento => this.paciente.alAlimentos.some(ali => ali === alimento.value))
    )
  }

  salvar() {
    if (this.editForm.valid) {
      this.userProvider.atualizarPaciente(this.editForm.value)
      .subscribe(data => {
        if (data.success) {
          console.log('Deeeeeeeeuuuuuu');
        } else {
          console.log(data.errorList);
        }
      },
      err => {
        console.log(err);
      })
    }
  }

  get stateBtn() {
    return !this.editForm.valid;
  }
}
