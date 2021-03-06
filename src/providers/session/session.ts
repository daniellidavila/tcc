import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators'
import { LoadingController } from 'ionic-angular';

import variaveis from '../../assets/config/variaveis'

@Injectable()
export class SessionProvider {
  private BASE_URL = variaveis.apiBaseUrl;

  constructor(
    private http: HttpClient,
    private load: LoadingController
    ) {}

  login(body: Login) {
    // Cria um Loading
    const load = this.load.create({
      content: 'Aguarde...'
    })
    // Manda o Loading ser apresentado na tela
    load.present();
    // Faz a requisição para o back-end
    return this.http.post(`${this.BASE_URL}/login`, body)
    .pipe<PayloadLogin>(
      // quando finaliza a requisição ele manda o Loading fechar
      finalize<PayloadLogin>(() => load.dismiss())
      )
  }

}
// Interface da resposta do back-end
interface PayloadLogin {
  success: boolean;
  token?: string
}

// Interface de dados que deve ser enviado para a função de login
interface Login {
  usuario: string;
  senha: string;
}
