import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StoredtokenService } from 'src/app/_services/storedtoken.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isLoggedIn: boolean = false;

  constructor(private storedService: StoredtokenService,
              private router : Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.storedService.getToken();
  }

  logout(){
    this.storedService.signOut();
    console.log("Logout");
    setTimeout(() => { this.router.navigate(['/login']); }, 3000);
  }

}
