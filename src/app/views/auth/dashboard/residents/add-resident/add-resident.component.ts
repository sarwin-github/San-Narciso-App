import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { mainAnimations } from '../../../../../shared/animations/main-animations';
import { Subscription, Subject, Observable } from 'rxjs';
import {WebcamImage, WebcamInitError, WebcamUtil} from 'ngx-webcam';

@Component({
	selector: 'app-add-resident',
	animations: [mainAnimations],
	templateUrl: './add-resident.component.html',
	styleUrls: ['./add-resident.component.scss']
})
export class AddResidentComponent implements OnInit {
	private req: Subscription;

	residentForm : FormGroup;
	message        : string;
	error          : string;

	constructor(private router:Router, 
		private activatedRoute: ActivatedRoute,
		private formBuilder: FormBuilder,) { }

	createForm(){
		this.residentForm = this.formBuilder.group({
			'email'     	 : [null, Validators.compose([Validators.required, Validators.email])],
			// personal
			'first_name'	: [null, Validators.compose([Validators.required])],
			'middle_name'	: [null, Validators.compose([Validators.required])],
			'last_name'		: [null, Validators.compose([Validators.required])],
			'street'		: [null, Validators.compose([Validators.required])],
			'barangay'		: [null, Validators.compose([Validators.required])],
			'city'			: [null, Validators.compose([Validators.required])],
			'phone'			: [null, Validators.compose([Validators.required])],
			'citizenship'	: [null, Validators.compose([Validators.required])],
			'religion'		: [null, Validators.compose([Validators.required])],
			'province'		: [null, Validators.compose([Validators.required])],
			'gender'		: [null, Validators.compose([Validators.required])],
			
			// birth info
			'birthday'		: [null, Validators.compose([Validators.required])],
			'birthplace'	: [null, Validators.compose([Validators.required])],
			'age'			: [null, Validators.compose([Validators.required])],
			
			// career info
			'civil_status'	: [null, Validators.compose([Validators.required])],
			'occupation'	: [null, Validators.compose([Validators.required])],
			'tin_number'	: [null, Validators.compose([Validators.required])],
			'period_of_residence': [null],
			'voters_id_number'	 : [null, Validators.compose([Validators.required])],
			'precint_assignment_number'		: [null],
			
			// mother information
			'mother_information_first_name'	: [null],
			'mother_information_middle_name': [null],
			'mother_information_last_name'	: [null],
			
			// father information
			'father_information_first_name'	: [null],
			'father_information_middle_name': [null],
			'father_information_last_name'	: [null],
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
