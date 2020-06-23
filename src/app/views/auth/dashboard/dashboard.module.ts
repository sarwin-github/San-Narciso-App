import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DashboardRoutes } from './dashboard.routing';
import { environment } from '../../../../environments/environment';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContainerHolderComponent } from './container-holder.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ResidentsComponent } from './residents/residents.component';
import { HouseholdsComponent } from './households/households.component';
import { AddResidentComponent } from './residents/add-resident/add-resident.component';
import { EditResidentComponent } from './residents/edit-resident/edit-resident.component';
import { WebcamModule } from 'ngx-webcam';

@NgModule({
	imports: [
		CommonModule,
		FormsModule, 
		ReactiveFormsModule,
		WebcamModule,
		RouterModule.forChild(DashboardRoutes)
	],
	declarations: [
		ContainerHolderComponent,
		DashboardComponent,
		SidebarComponent,
		ResidentsComponent,
		HouseholdsComponent,
		AddResidentComponent,
		EditResidentComponent
	]
})
export class DashboardModule { }
