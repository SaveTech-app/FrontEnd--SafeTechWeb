import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  CanActivateChild,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoAuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');

    if(token){
      let id=0;
      if(token.charAt(0)=='C'){
        id=Number(token.slice(12));
        this.router.navigate(['client',id,'profile'])
        return false;
      }
      else if(token.charAt(0)=='T'){
        id=Number(token.slice(10));
        this.router.navigate(['technician',id,'profile'])
        return false;
      }
      else{
        return true;
      }
    }
    return true;
  }
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    const token = localStorage.getItem('token');

    if(token){
      let id=0;
      if(token.charAt(0)=='R'){
        id=Number(token.slice(token.length - 11));
        console.log(id);
        this.router.navigate(['client',id,'profile'])
        return false;
      }
      else if(token.charAt(0)=='W'){
        id=Number(token.slice(token.length - 9));
        console.log(id);
        this.router.navigate(['technician',id,'profile'])
        return false;
      }
      else{
        return true;
      }
    }
    return true;
  }

}
