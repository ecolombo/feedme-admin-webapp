import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
    providedIn: 'root'
  })
export class AuthGuards implements CanActivate {

    constructor( private authService: AuthService,private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(!this.authService.isLoggedIn()){
            alert('You are not allowed to view this page. You are redirected to login Page');
            this.router.navigateByUrl('/auth/login');
        }
        return true;
    }

}