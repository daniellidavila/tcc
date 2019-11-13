import { HttpClient } from '@angular/common/http';
import { Injectable, EventEmitter } from '@angular/core';

/*
  Generated class for the LogoutProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LogoutProvider {
  logoutEmitter = new EventEmitter();

  constructor(public http: HttpClient) {
    console.log('Hello LogoutProvider Provider');
  }

}
