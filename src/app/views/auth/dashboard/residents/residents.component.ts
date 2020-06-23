import { Component, OnInit } from '@angular/core';
import { mainAnimations } from '../../../../shared/animations/main-animations';

@Component({
	selector: 'app-residents',
	animations: [mainAnimations],
	templateUrl: './residents.component.html',
	styleUrls: ['./residents.component.scss']
})
export class ResidentsComponent implements OnInit {

	constructor() { }

	ngOnInit(): void {
	}

}
