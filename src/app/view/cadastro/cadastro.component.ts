import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/login.model';
import { LoginService } from 'src/app/_services/login.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  cadastro: Login = {
    nome : '',
    username: '',
    password: '',
    email: ''
  }
  confpassword : string = '';

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  cadastrar(){
    this.loginService.create(this.cadastro).subscribe((dados)=>{
      this.loginService.showMessage("Cadastro efetuado com sucesso!");
      this.router.navigate([""]);
    })
  }

  cancelar(){
    this.cadastro = {
      nome : '',
      username: '',
      password: '',
      email: ''
    }      
  }

}
