import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mainAnimations } from '../../../../../shared/animations/main-animations';
import { Subscription, Subject, Observable } from 'rxjs';
import { WebcamImage, WebcamInitError, WebcamUtil } from 'ngx-webcam';
import { ResidentService } from '../../../../../shared/services/resident/resident.service';
import { MessageService } from 'primeng/api';

@Component({
	selector: 'app-add-resident',
	animations: [mainAnimations],
	templateUrl: './add-resident.component.html',
	styleUrls: ['./add-resident.component.scss'],
	providers: [MessageService]
})
export class AddResidentComponent implements OnInit {
	private req: Subscription;

	residentForm : FormGroup;
	message        : string;
	error          : string;

	constructor(private router:Router, 
		private activatedRoute: ActivatedRoute,
		private residentService: ResidentService,
		private messageService: MessageService,
		private formBuilder: FormBuilder,) { }

	createForm(){
		window.scrollTo({ top: 0, behavior: 'smooth'});
		
		this.residentForm = this.formBuilder.group({
			'email'     	 : [null, Validators.compose([Validators.required, Validators.email])],
			// personal
			'first_name'	: [null, Validators.compose([Validators.required])],//
			'middle_name'	: [null, Validators.compose([Validators.required])],//
			'last_name'		: [null, Validators.compose([Validators.required])],//
			'street'		: [null, Validators.compose([Validators.required])],//
			'barangay'		: [null, Validators.compose([Validators.required])],//
			'city'			: [null, Validators.compose([Validators.required])],//
			'phone'			: [null, Validators.compose([Validators.required])],//
			'citizenship'	: [null, Validators.compose([Validators.required])],//
			'religion'		: [null, Validators.compose([Validators.required])],//
			'province'		: [null, Validators.compose([Validators.required])],//
			'gender'		: [null, Validators.compose([Validators.required])],//
			
			// birth info
			'birthday'		: [null, Validators.compose([Validators.required])],//
			'birthplace'	: [null, Validators.compose([Validators.required])],//
			'age'			: [null, Validators.compose([Validators.required])],//
			
			// career info
			'civil_status'	: [null, Validators.compose([Validators.required])],//
			'occupation'	: [null, Validators.compose([Validators.required])],//
			'tin_number'	: [null, Validators.compose([Validators.required])],//
			'period_of_residence': [null, Validators.compose([Validators.required])],//
			'voters_id_number'	 : [null, Validators.compose([Validators.required])],//
			'precint_assignment_number'		: [null],//
			
			// mother information
			'mother_information_first_name'	: [null],//
			'mother_information_middle_name': [null],//
			'mother_information_last_name'	: [null],//
			
			// father information
			'father_information_first_name'	: [null],//
			'father_information_middle_name': [null],//
			'father_information_last_name'	: [null],//
		});
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


	createNewResident(){
		let body  = {
			'email' : this.residentForm.get('email').value,

			'first_name' : this.residentForm.get('first_name').value,
			'middle_name' : this.residentForm.get('middle_name').value,
			'last_name' : this.residentForm.get('last_name').value,
			'street' : this.residentForm.get('street').value,
			'barangay' : this.residentForm.get('barangay').value,
			'city' : this.residentForm.get('city').value,
			'phone' : this.residentForm.get('phone').value,
			'citizenship' : this.residentForm.get('citizenship').value,
			'religion' : this.residentForm.get('religion').value,
			'province' : this.residentForm.get('province').value,
			'gender' : this.residentForm.get('gender').value,
			'birthday' : this.residentForm.get('birthday').value,
			'birthplace' : this.residentForm.get('birthplace').value,
			'age' : this.residentForm.get('age').value,
			'civil_status' : this.residentForm.get('civil_status').value,
			'occupation' : this.residentForm.get('occupation').value,
			'tin_number' : this.residentForm.get('tin_number').value,
			'period_of_residence' : this.residentForm.get('period_of_residence').value,
			'voters_id_number' : this.residentForm.get('voters_id_number').value,
			'precint_assignment_number' : this.residentForm.get('precint_assignment_number').value,
			
			'mother_information_first_name' : this.residentForm.get('mother_information_first_name').value,
			'mother_information_middle_name' : this.residentForm.get('mother_information_middle_name').value,
			'mother_information_last_name' : this.residentForm.get('mother_information_last_name').value,
			
			'father_information_first_name' : this.residentForm.get('father_information_first_name').value,
			'father_information_middle_name' : this.residentForm.get('father_information_middle_name').value,
			'father_information_last_name' : this.residentForm.get('father_information_last_name').value,
		};

		console.log(body);

		this.req = this.residentService.addNewResident(body)
		.subscribe((result) => {
			console.log(result)
			if(result) {
				this.messageService.add({severity:'success', summary:'Successfully Added a New Resident', detail: result.message, life: 5000 });
				this.router.navigate(['/community/residents']);
			}
		}, err => {
			this.messageService.add({severity:'error', summary:'Error Message', detail: JSON.parse(err._body).message, life: 5000 });
			console.log(JSON.parse(err._body))
		});
	}


	// toggle webcam on/off
	public showWebcam = true;
	public allowCameraSwitch = true;
	public multipleWebcamsAvailable = false;
	public deviceId: string;
	public videoOptions: MediaTrackConstraints = {
		// width: {ideal: 1024},
		// height: {ideal: 576}
	};
	public errors: WebcamInitError[] = [];

	// latest snapshot
	public webcamImage: WebcamImage = null;

	// webcam snapshot trigger
	private trigger: Subject<void> = new Subject<void>();
	// switch to next / previous / specific webcam; true/false: forward/backwards, string: deviceId
	private nextWebcam: Subject<boolean|string> = new Subject<boolean|string>();

	public ngOnInit(): void {
		this.createForm();
		
		WebcamUtil.getAvailableVideoInputs()
		.then((mediaDevices: MediaDeviceInfo[]) => {
			this.multipleWebcamsAvailable = mediaDevices && mediaDevices.length > 1;
		});
	}

	public triggerSnapshot(): void {
		this.trigger.next();
	}

	public toggleWebcam(): void {
		this.showWebcam = !this.showWebcam;
	}

	public handleInitError(error: WebcamInitError): void {
		this.errors.push(error);
	}

	public showNextWebcam(directionOrDeviceId: boolean|string): void {
		// true => move forward through devices
		// false => move backwards through devices
		// string => move to device with given deviceId
		this.nextWebcam.next(directionOrDeviceId);
	}

	public handleImage(webcamImage: WebcamImage): void {
		console.info('received webcam image', webcamImage);
		this.webcamImage = webcamImage;
	}

	public cameraWasSwitched(deviceId: string): void {
		console.log('active device: ' + deviceId);
		this.deviceId = deviceId;
	}

	public get triggerObservable(): Observable<void> {
		return this.trigger.asObservable();
	}

	public get nextWebcamObservable(): Observable<boolean|string> {
		return this.nextWebcam.asObservable();
	}
}
