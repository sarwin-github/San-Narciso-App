import { Component, OnInit, OnDestroy } from '@angular/core';
import { mainAnimations } from '../../../../shared/animations/main-animations';
import { ResidentService } from '../../../../shared/services/resident/resident.service';
import { Subscription } from 'rxjs';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
	selector: 'app-residents',
	animations: [mainAnimations],
	templateUrl: './residents.component.html',
	styleUrls: ['./residents.component.scss']
})
export class ResidentsComponent implements OnInit, OnDestroy {
	private req: Subscription;
	public residents: any;
	public item_search: string;

	constructor(
		private spinner: NgxSpinnerService,
		private residentService: ResidentService) { }

	ngOnInit(): void {
		window.scrollTo({ top: 0, behavior: 'smooth'});
		this.spinner.show();
		this.req = this.residentService.getListOfResidents()
		.subscribe(result => {
			console.log(result)
			setTimeout(() => {
				this.spinner.hide();
				this.residents = result.residents;
			}, 1000);
		});
	}

	ngOnDestroy(): void{
		if(this.req) this.req.unsubscribe();
	}
}
