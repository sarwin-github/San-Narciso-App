import { Component, OnInit } from '@angular/core';
import { mainAnimations } from '../../../../shared/animations/main-animations';
import { NgxSpinnerService } from "ngx-spinner";

@Component({
	selector: 'community-dashboard',
	animations: [mainAnimations],
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
	public dashboardItems;
	constructor(private spinner: NgxSpinnerService,) { }

	ngOnInit(): void {
		window.scrollTo({ top: 0, behavior: 'smooth'});
		this.spinner.show();
		setTimeout(() => {
			this.spinner.hide();
			this.dashboardItems = 'yeah';
		}, 3000);
	}

}
