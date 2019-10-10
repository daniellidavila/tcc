import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';


@Injectable()
export class UsersProvider {
  private API_URL = 'localhost:3001/'

  constructor(public http: Http) { }

  cadastrarPaciente(nome: String, sobrenome: String, cpf: String, email: String, senha: String, reSenha: String){
    return new Promise((resolve, reject)=>{
      var data = {
        nome: nome,
        sobrenome: sobrenome,
        cpf: cpf,
        email: email,
        senha: senha,
        reSenha: reSenha
      };
      
      this.http.post(this.API_URL + 'paciente', data)
      .subscribe((result: any) => {
        resolve(result.json())
      },
      (error) => {
        reject(error.json())
      })
    });
  }

  login(usuario: String, senha: String){
    return new Promise((resolve, reject)=>{
      var data = {
        usuario: usuario,
        senha: senha
      };
      
      this.http.post(this.API_URL + 'login', data)
      .subscribe((result: any) => {
        resolve(result.json())
      },
      (error) => {
        reject(error.json())
      })
    });
  }
}

