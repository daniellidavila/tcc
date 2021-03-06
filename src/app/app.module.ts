import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { BrMaskerModule } from 'brmasker-ionic-3';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { DadosPessoaisPage } from '../pages/dados-pessoais/dados-pessoais';
import { CadastroPage } from '../pages/cadastro/cadastro';
import { FinalizarCadastroPage } from '../pages/finalizar-cadastro/finalizar-cadastro';
import { AtendimentoPage } from '../pages/atendimento/atendimento';
import { HistoricoPage } from '../pages/historico/historico';
import { ConfiguracoesPage } from '../pages/configuracoes/configuracoes';
import { UsersProvider } from '../providers/users/users';

import { SessionProvider } from '../providers/session/session';
import { EditarDadosPessoaisPage } from '../pages/editar-dados-pessoais/editar-dados-pessoais';
import { MedicoPage } from '../pages/medico/medico';
import { ComponentsModule } from '../components/components.module';
import { AtendimentoProvider } from '../providers/atendimento/atendimento';
import { LogoutProvider } from '../providers/logout/logout';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    DadosPessoaisPage,
    CadastroPage,
    FinalizarCadastroPage,
    AtendimentoPage,
    HistoricoPage,
    ConfiguracoesPage,
    EditarDadosPessoaisPage,
    MedicoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    BrMaskerModule,
    ComponentsModule,
    BrowserAnimationsModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TabsPage,
    DadosPessoaisPage,
    CadastroPage,
    FinalizarCadastroPage,
    AtendimentoPage,
    HistoricoPage,
    ConfiguracoesPage,
    EditarDadosPessoaisPage,
    MedicoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    SessionProvider,
    AtendimentoProvider,
    LogoutProvider,
  ]
})
export class AppModule {}
