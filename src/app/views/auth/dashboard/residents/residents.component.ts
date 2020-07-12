import { Component, OnInit, OnDestroy } from '@angular/core';
import { mainAnimations } from '../../../../shared/animations/main-animations';
import { ResidentService } from '../../../../shared/services/resident/resident.service';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-residents',
	animations: [mainAnimations],
	templateUrl: './residents.component.html',
	styleUrls: ['./residents.component.scss']
})
export class ResidentsComponent implements OnInit, OnDestroy {
	private req: Subscription;
	public residents: any;

	constructor(private residentService: ResidentService) { }

	ngOnInit(): void {
		this.req = this.residentService.getListOfResidents()
		.subscribe(result => {
			console.log(result)
			this.residents = result.residents;
		});
	}

	ngOnDestroy(): void{
		if(this.req) this.req.unsubscribe();
	}
}
