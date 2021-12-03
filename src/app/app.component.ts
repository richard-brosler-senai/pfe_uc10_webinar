import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { StoredtokenService } from './_services/storedtoken.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'senai-login';

  constructor(private storedService: StoredtokenService,
              private router : Router) { }

  ngOnInit(): void {
  }

  logout(){
    this.storedService.signOut();
    console.log("Logout");
    setTimeout(() => { 
      this.router.navigate(['/login']);
    }, 3000);
  }

  estaLogado() : boolean{
    let ret=!!this.storedService.getToken()?.login;
    return ret;
  }

  login(){
    this.router.navigate(['/login']);
  }

}
