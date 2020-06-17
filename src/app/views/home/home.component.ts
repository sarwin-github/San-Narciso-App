import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { mainAnimations } from '../../shared/animations/main-animations';
import { Subscription } from 'rxjs';

@Component({
	selector: 'app-home',
	animations: [mainAnimations],
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
	constructor() { }

	public headerImages: any = [
		'/assets/images/background/gallery_item.jpg',
		'/assets/images/background/gallery_item_2.jpg',
		'/assets/images/background/gallery_item_3.jpg',
		'/assets/images/background/gallery_item_4.jpg'
	];

	public imageIndex = 0;
	public headerImage = this.headerImages[this.imageIndex];


    ngOnInit() {
		setInterval(() => { 
			if(this.imageIndex === 0 && this.imageIndex < 4) this.imageIndex += 1;
			else this.imageIndex = 0;

			this.headerImage = this.headerImages[this.imageIndex];
		}, 3000);

    }

	ngOnDestroy(){
	}



}
