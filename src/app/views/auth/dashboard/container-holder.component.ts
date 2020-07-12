import { Component, OnInit } from '@angular/core';
import { mainAnimations } from '../../../shared/animations/main-animations';

@Component({
  selector: 'app-container-holder',
  animations: [mainAnimations],
  templateUrl: './container-holder.component.html',
  styleUrls: ['./container-holder.component.scss']
})
export class ContainerHolderComponent implements OnInit {
	public template: string =`<img src="/assets/images/loading.gif" width="70px"/>`;

  	constructor() { }

 	ngOnInit(): void {
  	}

}
