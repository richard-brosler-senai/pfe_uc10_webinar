import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/_services/login.service';
import { StoredtokenService } from 'src/app/_services/storedtoken.service';

import * as bcryptjs from 'bcryptjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username : string = "";
  password : string = "";

  constructor(private storedToken : StoredtokenService, 
              private loginService : LoginService,
              private router: Router) { }

  ngOnInit(): void {
  }

  efetuarLogin(){
    this.loginService.read().subscribe((dados)=>{
      dados.forEach(it=>{
        if (it.username == this.username && 
            bcryptjs.compareSync(this.password,it.password)){
          this.storedToken.storeToken(it);
          this.loginService.showMessage("Login efetuado com sucesso!");
          this.router.navigate([""]);
          return;
        } else {
          this.loginService.showMessage("Problemas ao efetuar login!", true);
        }
      })
    })
  }
}
