import { Component, OnInit } from '@angular/core';
import { mainAnimations } from '../../../../shared/animations/main-animations';
import { HouseholdService } from '../../../../shared/services/household/household.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-households',
	animations: [mainAnimations],
	templateUrl: './households.component.html',
	styleUrls: ['./households.component.scss']
})
export class HouseholdsComponent implements OnInit {
	private req: Subscription;
	public households;

	constructor(private householdService: HouseholdService) { }

	ngOnInit(): void {
		this.req = this.householdService.getListOfHouseholds().subscribe(result => console.log(result));
	}

	ngOnDestroy(): void{
		if(this.req) this.req.unsubscribe();
	}

}
