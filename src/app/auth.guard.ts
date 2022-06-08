import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';


@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate {
  constructor(
     private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const currentUser = JSON.parse(localStorage.getItem('user') || '{}');
    if (currentUser && currentUser.isAdmin) {
      return true;
    }
    this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
    return false;
  }
}
