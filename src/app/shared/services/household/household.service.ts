import { Http } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable, of, BehaviorSubject } from "rxjs";
import { map, filter, switchMap, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HouseholdService {
	private server = environment.server;

	private selectHousehold = new BehaviorSubject<any>(null || localStorage.getItem('userLogin'));
	public selectHousehold$ = this.selectHousehold.asObservable();

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


	// add new household
	addNewHousehold(body: any): Observable<any>{
		return this.http
		.post(`${this.server}/api/household/create`, body)
		.pipe(
			map(res => res.json()),
			catchError(this.handleError)
		);
	}

	// get list of households
	getListOfHouseholds(): any {
		return this.http
		.get(`${this.server}/api/household/list`)
		.pipe(
			map(res => res.json()),
			catchError(this.handleErrorAuthorize)
		);
	}
}
