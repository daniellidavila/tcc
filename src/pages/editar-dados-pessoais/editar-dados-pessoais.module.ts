import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EditarDadosPessoaisPage } from './editar-dados-pessoais';

@NgModule({
  declarations: [
    EditarDadosPessoaisPage,
  ],
  imports: [
    IonicPageModule.forChild(EditarDadosPessoaisPage),
  ],
})
export class EditarDadosPessoaisPageModule {}
