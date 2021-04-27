import { Injectable } from '@angular/core';
import { CanActivate, Router,ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { LoginServiceService } from '../services/login-service.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements CanActivate {

  constructor(private loginService: LoginServiceService, private router: Router){

  }

  async canActivate(){
      if(localStorage.getItem('token')){
        let res = await this.loginService.findByEmail(localStorage.getItem('token')).toPromise()
          if(res.length){
            return true;
          }
      }
    else{
      return this.router.navigate(['/login']);
    }
  }
  
}
