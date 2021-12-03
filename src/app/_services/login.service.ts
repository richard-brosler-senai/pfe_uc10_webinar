import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { catchError, EMPTY, map, Observable } from 'rxjs';
import { Login } from '../model/login.model';

import * as bcryptjs from 'bcryptjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUrl = "http://localhost:3001/login";

  constructor(private snack : MatSnackBar, private http : HttpClient) { }

  create(dadosLogin: Login): Observable<Login>{
    let senha = dadosLogin.password;
    dadosLogin.password = bcryptjs.hashSync(senha,10);
    return this.http.post<Login>(this.baseUrl,dadosLogin).pipe(map(obj=>obj), 
      catchError(e=>this.errorMsg(e)));
  }

  showMessage(msg: string, isError: boolean = false): void {
    this.snack.open(msg, 'X', {
      duration: 5000,
      panelClass: isError ? ["errorMsg"] : ["successMsg"],
      verticalPosition: "bottom"
    })
  }

  errorMsg(e: any): Observable<any> {
    console.log(e);
    this.showMessage("Erro: " + e.message, true);
    return EMPTY;
  }

  read() : Observable<Login[]>{
    return this.http.get<Login[]>(this.baseUrl).pipe(map(obj=>obj), 
    catchError(e=>this.errorMsg(e)));
  }

  readById(id : Number): Observable<Login>{
    const url = `${this.baseUrl}/${id}`;
    return this.http.get<Login>(url).pipe(map(obj=>obj), 
    catchError(e=>this.errorMsg(e)));
  }
}
