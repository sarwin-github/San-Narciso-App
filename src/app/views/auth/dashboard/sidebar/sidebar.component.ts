import { Component, OnInit } from '@angular/core';
//import { Role } from './../../models/role.enum';
//import { User } from './../../models/user';
import { DashboardSidebarService } from './../../../../shared/services/sidebar/dashboard-sidebar.service';
//import { customAnimations } from '../../animations/custom-animation';
//import { AuthService } from 'src/app/services/auth.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
	selector: 'dashboard-sidebar',
	templateUrl: './sidebar.component.html',
	styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

	//currenUser: User;
	open: any = true;
	location: string = '';

	constructor(private sidebar: DashboardSidebarService, 
		private router: Router
		) {

		router.events.subscribe((routes: NavigationEnd) => {
			this.location = router.url; 
		});
	}

	sidebarExpanded = true;
	sidebarWidth = '210';
	linkDisplayed = true;
	linksDisplayedDatasets = false;
	linksDisplayedAccountSettings = false;
	linksDisplayPlanningSection = false;
	linksDisplayDashboard = false;

	ngOnInit() {
		this.sidebar.dashboardSidebar.subscribe( (state:any) =>{
			if(state === true){
				this.open = true;
				this.sidebarWidth = '210';

				setTimeout( () => {
					if(this.sidebarWidth == '210') this.displayLink();
				}, 300);
			}
			else if(state === false){
				this.sidebarWidth = '75';
				this.open = false;
				this.linkDisplayed = false;
			}
		})
	}


	displayLink(){
		this.linkDisplayed = true;

		if(this.location.match('/company/dashboard')) this.displayDropdown('dashboard');
		else if(this.location.match('/company/data')) this.displayDropdown('datasets');
		else if(this.location.match('/company/planning')) this.displayDropdown('planning');
		else if(this.location.match('/company/account-settings')) this.displayDropdown('accounts');
	}

	// open or close toggle
	openToggle(){
		this.open = !this.open;
		this.sidebar.dashboardSidebar.next(this.open);
		this.linksDisplayedDatasets = false;
		this.linksDisplayedAccountSettings = false;
		this.linksDisplayPlanningSection = false;
		this.linksDisplayDashboard = false;

		if(this.open) sessionStorage.setItem('sidebarState', this.open);
		else sessionStorage.removeItem('sidebarState');
	}

	closeSidebar(link){
		this.router.navigate([link]);
		//this.sidebar.dashboardSidebar.next(false);
		//sessionStorage.removeItem('sidebarState');
	}

	displayDropdown(item){
		switch(item){
			case 'dashboard': {
				this.linksDisplayDashboard = !this.linksDisplayDashboard;
				this.linksDisplayedDatasets = false;
				this.linksDisplayPlanningSection = false;
				this.linksDisplayedAccountSettings = false;
				break;
			}

			case 'datasets': {
				this.linksDisplayedDatasets = !this.linksDisplayedDatasets;
				this.linksDisplayedAccountSettings = false;
				this.linksDisplayPlanningSection = false;
				this.linksDisplayDashboard = false;
				break;
			}

			case 'accounts': {
				this.linksDisplayedAccountSettings = !this.linksDisplayedAccountSettings;
				this.linksDisplayedDatasets = false;
				this.linksDisplayPlanningSection = false;
				this.linksDisplayDashboard = false;
				break;
			}

			case 'planning': {
				this.linksDisplayPlanningSection = !this.linksDisplayPlanningSection;
				this.linksDisplayedDatasets = false;
				this.linksDisplayedAccountSettings = false;
				this.linksDisplayDashboard = false;
				break;
			}
		}

		this.openSidebar();
	}

	openSidebar(){
		if(!this.open) {
			this.open = true;
			//this.sidebar.companySidebarState.next(this.open);
		}
	}

}
