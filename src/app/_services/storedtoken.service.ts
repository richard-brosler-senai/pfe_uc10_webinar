import { Injectable } from '@angular/core';
import { Login } from '../model/login.model';

const APP_EXPIRE = "auth-user";

@Injectable({
  providedIn: 'root'
})
export class StoredtokenService {
  

  constructor() { }

  storeToken(authUser : Login): void{
    let agora = new Date();
    agora.setSeconds(agora.getSeconds() + 3600);
    let item= {
      login : authUser.username,
      expires_in : agora.toISOString(),
      role : [ "user" ]
    }
    window.sessionStorage.removeItem(APP_EXPIRE);
    window.sessionStorage.setItem(APP_EXPIRE,JSON.stringify(item));
  }

  getToken() : any {
    let dados = window.sessionStorage.getItem(APP_EXPIRE) || '{}'
    return JSON.parse(dados);
  }

  signOut(): void {
    window.sessionStorage.clear();
  }
}
