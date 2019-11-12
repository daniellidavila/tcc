import { LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';

import variaveis from '../../assets/config/variaveis'

@Injectable()
export class UsersProvider {
  private BASE_URL = variaveis.apiBaseUrl;

  constructor(
    private http: HttpClient,
    private load: LoadingController
    ) { }

  cadastrarPaciente(body: PacienteCadastro){
    // Cria um Loading
    const load = this.load.create({
      content: 'Aguarde...'
    })
    // Manda o Loading ser apresentado na tela
    load.present();
    // Faz a requisição para o back-end
    return this.http.post(`${this.BASE_URL}/paciente`, body)
    .pipe<PayloadCadastroPaciente>(
      // quando finaliza a requisição ele manda o Loading fechar
      finalize<PayloadCadastroPaciente>(() => load.dismiss())
    )
  }
  atualizarPaciente(body){
    // Cria um Loading
    
    const load = this.load.create({
      content: 'Aguarde...'
    })
    load.present();
    return this.http.put(`${this.BASE_URL}/paciente`, body, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .pipe<PayloadCadastroPaciente>(
      finalize<PayloadCadastroPaciente>(() => load.dismiss())
    )
  }

  getDetalhes(){
    // Cria um Loading
    const load = this.load.create({
      content: 'Aguarde...'
    })
    // Manda o Loading ser apresentado na tela
    load.present();
    // Faz a requisição para o back-end
    return this.http.get(`${this.BASE_URL}/paciente`, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .pipe<PayloadGetPaciente>(
      // quando finaliza a requisição ele manda o Loading fechar
      finalize<PayloadGetPaciente>(() => load.dismiss())
    )
  }

  getComboOptions(){
    // Cria um Loading
    const load = this.load.create({
      content: 'Aguarde...'
    })
    // Manda o Loading ser apresentado na tela
    load.present();
    // Faz a requisição para o back-end
    return this.http.get(`${this.BASE_URL}/paciente/combo`, {
      headers: {
        token: localStorage.getItem('token')
      }
    })
    .pipe<PayloadGetCombo>(
      // quando finaliza a requisição ele manda o Loading fechar
      finalize<PayloadGetCombo>(() => load.dismiss())
    )
  }
}
// Interface da resposta do back-end
interface PayloadCadastroPaciente {
  success: boolean;
  errorList?: Error[]
  error?: string;
}

interface PayloadGetCombo {
  success: boolean;
  combo: {
    medicamentos: Combo[],
    alimentos: Combo[],
    condicao: Combo[],
  }
  paciente: Paciente;
}

export interface Combo {
  label: string;
  value?: string;
}

interface Error {
  field: string;
  msg: string;
}

export interface PayloadGetPaciente {
  success: boolean;
  error?: string;
  paciente: Paciente;
}

export interface Paciente {
  nome?: string
  nascimento?: Date
  sexo?: string
  cpf?: string
  email?: string
  cns?: string
  nomeMae?: string
  nomePai?: string
  celular?: string
  crm?: string
  expecialidade?: string
  telEmergencia?: string
  tpoSanguineo?: string
  medicamentos?: any[]
  alAlimentos?: any[]
  condEspecial?: any[]
};

// Interface de dados que deve ser enviado para a função de cadastro
interface PacienteCadastro {
  nome: string,
  sobrenome: string,
  cpf: string,
  email: string,
  senha: string,
  reSenha: string
}
