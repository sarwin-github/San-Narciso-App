import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { UsersService } from '../../services/auth/users.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map, delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
	constructor(private UsersService: UsersService, private router: Router){}

	canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
		return this.UsersService.getRefreshToken().pipe(map(result => {
		    if(!JSON.parse(JSON.stringify(result)).token){ 
		    	localStorage.setItem('loginError', "You are not allowed to access this URL. Please login to continue.");
		    	localStorage.setItem('returnURL', this.router.url);
		    	this.UsersService.logoutUser().subscribe(res => res);
		    	this.router.navigate(['/user/signin']);
		    	return false;
		    }
		    else {
		    	localStorage.setItem('refreshTokenMessage', 'Refresh Token was successful.');
		    	localStorage.setItem('token', 'Bearer ' + JSON.parse(JSON.stringify(result)).token);
		    	return true;
		    }
		}));
	}
}
