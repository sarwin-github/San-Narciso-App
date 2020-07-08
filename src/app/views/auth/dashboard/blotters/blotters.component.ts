import { Component, OnInit } from '@angular/core';
import { mainAnimations } from '../../../../shared/animations/main-animations';
import { HouseholdService } from '../../../../shared/services/household/household.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-blotters',
	animations: [mainAnimations],
	templateUrl: './blotters.component.html',
	styleUrls: ['./blotters.component.scss']
})
export class BlottersComponent implements OnInit {

	private req: Subscription;

	constructor(private householdService: HouseholdService) { }

	ngOnInit(): void {
		this.req = this.householdService.getListOfHouseholds().subscribe(result => console.log(result));
	}

	ngOnDestroy(): void{
		if(this.req) this.req.unsubscribe();
	}
}
