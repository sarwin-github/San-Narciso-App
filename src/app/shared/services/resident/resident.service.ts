import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable, of, BehaviorSubject } from "rxjs";
import { map, filter, switchMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class ResidentService {
	private isUserLoggedIn: any;
	private server = environment.server;

	private selectedResident = new BehaviorSubject<any>(null || localStorage.getItem('userLogin'));
	public selectedResident$ = this.selectedResident.asObservable();

  	constructor(private http: Http, 
  		private router: Router) {
  	}

  	// error handler
  	private handleError(error:any, caught:any): any{
  		localStorage.setItem('notFound', 'true');
  		throw error;
  	}

  	// error handler authorize
  	private handleErrorAuthorize(error:any, caught:any): any{
  		localStorage.setItem('notFound', 'true');
  		throw error;
  	}


	// add new resident
	addNewResident(body: any): Observable<any>{
		return this.http
		.post(`${this.server}/api/resident/create`, body, { withCredentials : true})
		.pipe(
			map(res => res.json()),
			catchError(this.handleError)
		);
	}

	// get list of residents
	getListOfResidents(): any {
		return this.http
		.get(`${this.server}/api/resident/list`, { withCredentials : true})
		.pipe(
			map(res => res.json()),
			catchError(this.handleErrorAuthorize)
		);
	}

}
