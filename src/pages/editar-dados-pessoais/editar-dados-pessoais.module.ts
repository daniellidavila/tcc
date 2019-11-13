import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarDadosPessoaisPage } from './editar-dados-pessoais';
import { BrMaskerModule } from 'brmasker-ionic-3';

@NgModule({
  declarations: [
    EditarDadosPessoaisPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarDadosPessoaisPage),
    BrMaskerModule
  ],
})
export class EditarDadosPessoaisPageModule {}
