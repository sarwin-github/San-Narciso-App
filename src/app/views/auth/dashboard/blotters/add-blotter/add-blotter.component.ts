import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mainAnimations } from '../../../../../shared/animations/main-animations';
import { Subscription, Subject, Observable } from 'rxjs';
import { HouseholdService } from '../../../../../shared/services/household/household.service';
import { Car } from '../../../../../shared/domain/car';
import { CarService } from '../../../../../shared/services/car/car.service';
import { MessageService } from 'primeng/api';
import { ResidentService } from '../../../../../shared/services/resident/resident.service';
import { NonResidentService } from '../../../../../shared/services/non-resident/non-resident.service';

@Component({
	selector: 'app-add-blotter',
	animations: [mainAnimations],
	templateUrl: './add-blotter.component.html',
	styleUrls: ['./add-blotter.component.scss'],
	providers: [MessageService]
})
export class AddBlotterComponent implements OnInit {
	private residentReq: Subscription;
	private nonResidentReq: Subscription;
	private req: Subscription;

	public residents : any;
	public nonResidents: any;
	public blotterForm : FormGroup;
	public message : string;
	public error   : string;


	constructor(private router:Router, 
		private activatedRoute: ActivatedRoute,
		private residentService: ResidentService,
		private nonResidentService: NonResidentService,
		private householdService: HouseholdService,
		private messageService: MessageService,
		private formBuilder: FormBuilder,) { }

	createForm(){
		window.scrollTo({ top: 0, behavior: 'smooth'});
		
		this.residentReq = this.residentService.getListOfResidents()
		.subscribe(result => {
			console.log(result)
			this.residents = result.residents;
		});

		this.nonResidentReq = this.nonResidentService.getListOfNonResidents()
		.subscribe(result => {
			console.log(result)
			this.nonResidents = result.nonResidents;
		});

		this.blotterForm = this.formBuilder.group({
			'household_head' : [null, Validators.compose([Validators.required])],//
			'household_name' : [null, Validators.compose([Validators.required])],//
			'household_number': [123885, Validators.compose([Validators.required])],//
			'street'		: [null, Validators.compose([Validators.required])],//
			'barangay'		: [null, Validators.compose([Validators.required])],//
			'city'			: [null, Validators.compose([Validators.required])],//
			'province'		: [null, Validators.compose([Validators.required])],//
			'officer_in_charge' : [null, Validators.compose([Validators.required])],//
		});
	}

	createNewHousehold(){
		let body  = {
			'household_head' : this.blotterForm.get('household_head').value,
			'household_name' : this.blotterForm.get('household_name').value,
			'household_number' : this.blotterForm.get('household_number').value,
			'street' : this.blotterForm.get('street').value,
			'barangay' : this.blotterForm.get('barangay').value,
			'city' : this.blotterForm.get('city').value,
			'province' : this.blotterForm.get('province').value
		};

		this.req = this.householdService.addNewHousehold(body)
		.subscribe((result) => {
			console.log(result)
			if(result) this.messageService.add({severity:'success', summary:'Successfully Add new Household', detail: result.message, life: 5000 });
		}, err => {
			this.messageService.add({severity:'error', summary:'Error Message', detail: JSON.parse(err._body).message, life: 5000 });
			console.log(JSON.parse(err._body))
		})
	}

	public ngOnInit(): void {
		this.createForm();
	}

	// Clear error message
	onAlertClose(): void {
		localStorage.removeItem('householdInfoError');
		localStorage.removeItem('householdInfoMessage');
		this.error   = undefined;
		this.message = undefined;
	}

	ngOnDestroy(){
		localStorage.removeItem('householdInfoError');
		localStorage.removeItem('householdInfoMessage');

		if(this.req) this.req.unsubscribe();
	}

}
