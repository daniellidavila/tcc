import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';
import { DadosPessoaisPageModule } from '../dados-pessoais/dados-pessoais.module';
@NgModule({
  declarations: [
    LoginPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    DadosPessoaisPageModule
  ],
})
export class LoginPageModule {}
