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

  atendimentoForm: FormGroup = new FormGroup({
    nome: new FormControl(null, Validators.required),
    medico: new FormControl(null, Validators.required),
    cid: new FormControl(null, Validators.required),
    receita: new FormControl(null, Validators.required),
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
        this.listaDoenca.push(data.doencas[i])
      }
    })
  }

  teste(){
    console.log(this.atendimentoForm);
  }

}
