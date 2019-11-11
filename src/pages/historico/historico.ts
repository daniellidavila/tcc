import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AtendimentoProvider, Atendimento } from '../../providers/atendimento/atendimento';

@IonicPage()
@Component({
  selector: 'page-historico',
  templateUrl: 'historico.html',
})
export class HistoricoPage {
  atendimentos: Atendimento[] = [];
  atendimentosFiltrados: Atendimento[] = [];

  filter = '';

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private atendimentoProvider: AtendimentoProvider
    ) {
  }

  ionViewDidLoad() {
  }

  ionViewWillEnter() {
    this.atendimentoProvider.getAtendimentos()
    .subscribe(data => {
      this.atendimentos = data.atendimentos;
      this.filterAtendimento()
    })
  }

  filterAtendimento() {
    if (this.filter) {
      this.atendimentosFiltrados = [...this.atendimentos.filter(atendimento => atendimento.nome.includes(this.filter))]
    } else {
      this.atendimentosFiltrados = [...this.atendimentos]
    }
  }

}
