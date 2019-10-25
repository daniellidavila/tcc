import { HttpClientModule } from '@angular/common/http';
import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
    EditarDadosPessoaisPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    BrMaskerModule
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
    EditarDadosPessoaisPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    UsersProvider,
    SessionProvider
  ]
})
export class AppModule {}
