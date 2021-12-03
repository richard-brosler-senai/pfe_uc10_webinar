import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { StoredtokenService } from '../_services/storedtoken.service';

@Injectable({
  providedIn: 'root'
})
export class AuthguardGuard implements CanActivate {

  constructor(private storedSession: StoredtokenService, 
              private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | 
                                 Promise<boolean | UrlTree> | 
                                 boolean | UrlTree 
  {
    let isLoggin = !!this.storedSession.getToken();
    let canAccess = false;
    if (isLoggin){
      let agora = new Date();
      let expirein = new Date(this.storedSession.getToken().expires_in);
      canAccess = expirein > agora;
    }
    if (!canAccess) {
      this.storedSession.signOut();
      this.router.navigate(["/login"]);
    }
    return canAccess;
  }
  
}
