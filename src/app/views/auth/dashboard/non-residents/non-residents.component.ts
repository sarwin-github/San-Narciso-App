import { Component, OnInit, OnDestroy } from '@angular/core';
import { mainAnimations } from '../../../../shared/animations/main-animations';
import { NonResidentService } from '../../../../shared/services/non-resident/non-resident.service';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
	selector: 'app-non-residents',
	animations: [mainAnimations],
	templateUrl: './non-residents.component.html',
	styleUrls: ['./non-residents.component.scss']
})
export class NonResidentsComponent implements OnInit {
	private req: Subscription;
	public nonResidents: any;
	public item_search: string;

	constructor(
		private spinner: NgxSpinnerService,
		private nonResidentService: NonResidentService) { }

	ngOnInit(): void {
		window.scrollTo({ top: 0, behavior: 'smooth'});
		this.spinner.show();
		this.req = this.nonResidentService.getListOfNonResidents()
		.subscribe(result => {
			console.log(result)
			setTimeout(() => {
				this.spinner.hide();
				this.nonResidents = result.nonResidents;
			}, 1000);
		});
	}

	ngOnDestroy(): void{
		if(this.req) this.req.unsubscribe();
	}
}
