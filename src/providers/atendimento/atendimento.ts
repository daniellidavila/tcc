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

    postAtendimento(form: AtendimentoForm){
      const load = this.load.create({
        content: 'Aguarde...'
      })
      load.present();
      return this.http.post(`${this.BASE_URL}/atendimento`, form, {
        headers: {
          token: localStorage.getItem('token')
        }
      })
      .pipe<PayloadAtendimento>(
        finalize<PayloadAtendimento>(() => load.dismiss())
      )
    }
}

// Interface da resposta do back-end
interface PayloadGetDoencas {
  success: boolean;
  combo: {
    doencas: Combo[],
    medicamentos: Combo[],
  }
  error: Error;
}

interface PayloadAtendimento {
  success: boolean;
  combo: {
    doencas: Combo[],
    medicamentos: Combo[],
  }
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

interface AtendimentoForm {
  nome: string;
  medico: string;
  cid: string;
  dosagem: string;
  medicamento: string;
  data: Date;
}