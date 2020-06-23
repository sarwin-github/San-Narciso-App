import { Component, OnInit } from '@angular/core';
import { mainAnimations } from '../../../../shared/animations/main-animations';

@Component({
	selector: 'app-households',
	animations: [mainAnimations],
	templateUrl: './households.component.html',
	styleUrls: ['./households.component.scss']
})
export class HouseholdsComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
