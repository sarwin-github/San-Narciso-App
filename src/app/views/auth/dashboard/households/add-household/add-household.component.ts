import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mainAnimations } from '../../../../../shared/animations/main-animations';
import { Subscription, Subject, Observable } from 'rxjs';
import {Car} from '../../../../../shared/domain/car';
import {CarService} from '../../../../../shared/services/car/car.service';

@Component({
	selector: 'app-add-household',
	animations: [mainAnimations],
	templateUrl: './add-household.component.html',
	styleUrls: ['./add-household.component.scss']
})
export class AddHouseholdComponent implements OnInit {

	private req: Subscription;

	householdForm : FormGroup;
	message        : string;
	error          : string;

	sourceCars: Car[];  
	targetCars: Car[];

	constructor(private router:Router, 
		private activatedRoute: ActivatedRoute,
		private carService: CarService,
		private formBuilder: FormBuilder,) { }

	createForm(){
		this.householdForm = this.formBuilder.group({
			'email'     	 : [null, Validators.compose([Validators.required, Validators.email])],
			// personal
			'household_head' : [null, Validators.compose([Validators.required])],//
			'household_name' : [null, Validators.compose([Validators.required])],//
			'household_number'		: [null, Validators.compose([Validators.required])],//
			'street'		: [null, Validators.compose([Validators.required])],//
			'barangay'		: [null, Validators.compose([Validators.required])],//
			'city'			: [null, Validators.compose([Validators.required])],//
			'province'		: [null, Validators.compose([Validators.required])],//
			
		});
	}

	public ngOnInit(): void {
		this.createForm();
		this.carService.getCarsSmall().then(cars => this.sourceCars = cars);
		this.targetCars = [];
	}

	// Clear error message
	onAlertClose(): void {
		localStorage.removeItem('residentInfoError');
		localStorage.removeItem('residentInfoMessage');
		this.error   = undefined;
		this.message = undefined;
	}

	ngOnDestroy(){
		localStorage.removeItem('residentInfoError');
		localStorage.removeItem('residentInfoMessage');

		if(this.req) this.req.unsubscribe();
	}

}
