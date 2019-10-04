import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { AtendimentoPage } from '../atendimento/atendimento';
import { HistoricoPage } from '../historico/historico';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';

@Component({
  selector: 'tabs-page',
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AtendimentoPage;
  tab3Root = HistoricoPage;
  tab4Root = ConfiguracoesPage;

  constructor() {

  }
}
