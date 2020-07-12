import { Component, OnInit } from '@angular/core';
import { mainAnimations } from '../../../../shared/animations/main-animations';
import { HouseholdService } from '../../../../shared/services/household/household.service';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
	selector: 'app-blotters',
	animations: [mainAnimations],
	templateUrl: './blotters.component.html',
	styleUrls: ['./blotters.component.scss']
})
export class BlottersComponent implements OnInit {
	private req: Subscription;
	public blotters: any;

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
				this.blotters = result.households;
			}, 4000);
		});
	}

	ngOnDestroy(): void{
		if(this.req) this.req.unsubscribe();
	}
}
