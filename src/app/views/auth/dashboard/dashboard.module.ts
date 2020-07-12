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
import { AddHouseholdComponent } from './households/add-household/add-household.component';
import { EditHouseholdComponent } from './households/edit-household/edit-household.component';

import { WebcamModule } from 'ngx-webcam';
import { PickListModule } from 'primeng/picklist';
import { ToastModule } from 'primeng/toast';
import { BlottersComponent } from './blotters/blotters.component';
import { AddBlotterComponent } from './blotters/add-blotter/add-blotter.component';
import { EditBlotterComponent } from './blotters/edit-blotter/edit-blotter.component';
import { SharedPipeModule } from '../../../shared/shared-pipe.module';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
	imports: [
		CommonModule,
		FormsModule, 
		ReactiveFormsModule,
		WebcamModule,
		PickListModule,
		ToastModule,
		SharedPipeModule,
		NgxSpinnerModule,
		RouterModule.forChild(DashboardRoutes)
	],
	declarations: [
		ContainerHolderComponent,
		DashboardComponent,
		SidebarComponent,
		ResidentsComponent,
		HouseholdsComponent,
		AddResidentComponent,
		EditResidentComponent,
		AddHouseholdComponent,
		EditHouseholdComponent,
		BlottersComponent,
		AddBlotterComponent,
		EditBlotterComponent
	]
})
export class DashboardModule { }
