import { Component, Input } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Atendimento } from '../../providers/atendimento/atendimento';

@Component({
  selector: 'atendimento-list',
  templateUrl: 'atendimento-list.html',
  animations: [
    trigger('openClose', [
      state('open', style({
        height: '100px',
      })),
      state('close', style({
        height: '32px'
      })),
      transition('* => *', [
        animate('.3s')
      ]),
    ]),
  ]
})
export class AtendimentoListComponent {
  @Input()atendimento: Atendimento;

  open = false;

  constructor() {
  }

}
