import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AtendimentoProvider } from '../../providers/atendimento/atendimento';

@IonicPage()
@Component({
  selector: 'page-atendimento',
  templateUrl: 'atendimento.html',
})
export class AtendimentoPage {
  listaDoenca = [];
  listaMedicamento = [];

  atendimentoForm: FormGroup = new FormGroup({
    nome: new FormControl(null, Validators.required),
    medico: new FormControl(null, Validators.required),
    cid: new FormControl(null, Validators.required),
    dosagem: new FormControl(null, Validators.required),
    medicamento: new FormControl(null, Validators.required),
    data: new FormControl(null, Validators.required),
    diagnostico: new FormControl(null, Validators.required),
  })

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private atendimentoProvider: AtendimentoProvider
    ) {
  }

  ionViewDidLoad() {
    this.atendimentoProvider.getDoencas()
    .subscribe(data => {
      for (let i = 0; i < 200; i++) {
        this.listaDoenca.push(data.combo.doencas[i])
        this.listaMedicamento.push(data.combo.medicamentos[i])
      }
    })
  }

  cadastrarAtendimento(){
    if (this.atendimentoForm.valid) {
      this.atendimentoProvider.postAtendimento(this.atendimentoForm.value)
      .subscribe(data => {
        if (data.success) {
          this.atendimentoForm.reset();
        }
        else {
          console.log(data);
        }
      },
      err => {
        console.log(err);
      })
    }
  }

  get stateBtn() {
    return !this.atendimentoForm.valid;
  }

}
