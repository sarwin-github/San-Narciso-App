import { Component, OnInit } from '@angular/core';
import { mainAnimations } from '../../../../shared/animations/main-animations';
import { HouseholdService } from '../../../../shared/services/household/household.service';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
	selector: 'app-barangay-clearance',
	animations: [mainAnimations],
	templateUrl: './barangay-clearance.component.html',
	styleUrls: ['./barangay-clearance.component.scss']
})
export class BarangayClearanceComponent implements OnInit {
	private req: Subscription;
	public clearance: any;

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
				this.clearance = result.households;
			}, 1000);
		});
	}

	ngOnDestroy(): void{
		if(this.req) this.req.unsubscribe();
	}
}
