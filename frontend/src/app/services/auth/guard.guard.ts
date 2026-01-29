import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';

export const guardGuard: CanActivateFn = (route, state) => {
  return true;
};
@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const expectedRoles = route.data['roles'] as Array<string>;
    const userRole = localStorage.getItem('userRole');

    if (!userRole || !expectedRoles.includes(userRole)) {
      // User role doesn't match the expected roles, redirect to the default route
      this.router.navigate(['']);
      return false;
    }

    return true;
  }
}