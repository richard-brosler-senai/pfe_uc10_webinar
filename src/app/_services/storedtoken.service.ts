import { Injectable } from '@angular/core';
import { Login } from '../model/login.model';

@Injectable({
  providedIn: 'root'
})
export class StoredtokenService {
  APP_EXPIRE = "auth-user";

  constructor() { }

  storeToken(authUser : Login): void{
    let agora = new Date();
    agora.setSeconds(agora.getSeconds() + 3600);
    let item= {
      login : authUser.username,
      expires_in : agora,
      role : [ "user" ]
    }
    window.sessionStorage.removeItem(this.APP_EXPIRE);
    console.log(item);
    setTimeout(() => {
      window.sessionStorage.setItem(this.APP_EXPIRE,JSON.stringify(item));
    }); 
  }

  getToken() : any {
    let dados = window.sessionStorage.getItem(this.APP_EXPIRE) || '{}'
    return JSON.parse(dados);
  }

  signOut(): void {
    window.sessionStorage.clear();
  }
}
