import { LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { finalize } from 'rxjs/operators';


@Injectable()
export class UsersProvider {
  private BASE_URL = 'http://localhost:3001'

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
}
// Interface da resposta do back-end
interface PayloadCadastroPaciente {
  success: boolean;
}

// Interface de dados que deve ser enviado para a função de cadastro
interface PacienteCadastro {
  nome: string,
  sobrenome: string,
  cpf: string,
  email: string,
  senha: string,
  reSenha: string
}