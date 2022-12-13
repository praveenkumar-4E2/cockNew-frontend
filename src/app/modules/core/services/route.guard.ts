import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { JwtService } from './jwt.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuard implements CanActivate {
  constructor(private jwtService:JwtService,private route:Router){}

  canActivate():boolean{
    if (this.jwtService.loggedIn()){
      return true
    }
    else{
      this.route.navigate(['login'])
      return false
    }
  }
  
}
