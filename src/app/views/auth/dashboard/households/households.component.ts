import { Component, OnInit } from '@angular/core';
import { mainAnimations } from '../../../../shared/animations/main-animations';
import { HouseholdService } from '../../../../shared/services/household/household.service';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
	selector: 'app-households',
	animations: [mainAnimations],
	templateUrl: './households.component.html',
	styleUrls: ['./households.component.scss']
})
export class HouseholdsComponent implements OnInit {
	private req: Subscription;
	public households;

	constructor(
		private spinner: NgxSpinnerService,
		private householdService: HouseholdService) { }

	ngOnInit(): void {
		window.scrollTo({ top: 0, behavior: 'smooth'});
		this.spinner.show();
		this.req = this.householdService.getListOfHouseholds()
		.subscribe(result => {
			console.log(result)
			setTimeout(() => {
				this.spinner.hide();
				this.households = result.households;
			}, 4000);
		});
	}

	ngOnDestroy(): void{
		if(this.req) this.req.unsubscribe();
	}

}
