import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { mainAnimations } from '../../../../shared/animations/main-animations';
import { Subscription } from 'rxjs';

@Component({
	selector: 'main-header-section',
	animations: [mainAnimations],
	templateUrl: './main-header.component.html',
	styleUrls: ['./main-header.component.scss']
})
export class MainHeaderComponent implements OnInit {
	public firstHead: boolean = true;
	public secondHead: boolean = true;
	public thirdHead: boolean = true;
	constructor() { }

	ngOnInit(): void {

		setInterval(() => {
			if(this.firstHead){
				this.firstHead = false;
				this.secondHead = true;
				this.thirdHead = false;
			}
			else if(this.secondHead){
				this.firstHead = false;
				this.secondHead = false;
				this.thirdHead = true;
			}
			else if(this.thirdHead){
				this.firstHead = true;
				this.secondHead = false;
				this.thirdHead = false;
			}
		}, 5000)
	}


	

}
