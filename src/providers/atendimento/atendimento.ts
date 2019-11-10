import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoadingController } from 'ionic-angular';
import { finalize } from 'rxjs/operators';
import variaveis from '../../assets/config/variaveis'

@Injectable()
export class AtendimentoProvider {
  private BASE_URL = variaveis.apiBaseUrl;

  constructor(
    private http: HttpClient,
    private load: LoadingController
    ) { }

    getDoencas(){
      const load = this.load.create({
        content: 'Aguarde...'
      })
      load.present();
      return this.http.get(`${this.BASE_URL}/atendimento/combo`, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .pipe<PayloadGetDoencas>(
        finalize<PayloadGetDoencas>(() => load.dismiss())
      )
    }
}

// Interface da resposta do back-end
interface PayloadGetDoencas {
  success: boolean;
  doencas: Combo[]
  error: Error;
}

interface Combo {
  label: string;
  value: any;
}

interface Error {
  field: string;
  msg: string;
}