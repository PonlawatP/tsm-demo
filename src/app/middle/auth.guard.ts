import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';


@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
    constructor(
        private router: Router,
        private http:HttpClient
    ) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('auth_data')) {
            const opts = {
                headers: {
                    'Authorization': 'Bearer ' + JSON.parse(localStorage.getItem('auth_data') || '{}')
                }
            }
            this.http.get('http://tsmapi.suksan.group/customers', opts).subscribe({
                next: (data:any)=>{
                    return true;
                }
            })
        }

        // not logged in so redirect to login page with the return url
        localStorage.removeItem('auth_data')
        this.router.navigate(['/account/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}