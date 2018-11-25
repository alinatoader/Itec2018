import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRoute, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Router } from '@angular/router';

@Injectable()
export class UserGuard implements CanActivate {

    constructor(private router: Router,
        private route: ActivatedRoute) { }

    canActivate(route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot) {
        if (localStorage.getItem('user')) {
            return true;
        }
        console.log(state);
        this.router.navigate(['/signup'], { queryParams: { returnUrl: state.url } });
        return false;
    }
}
