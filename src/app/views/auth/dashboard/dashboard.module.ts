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

@NgModule({
	imports: [
		CommonModule,
		FormsModule, 
		ReactiveFormsModule,
		RouterModule.forChild(DashboardRoutes)
	],
	declarations: [
		ContainerHolderComponent,
		DashboardComponent,
		SidebarComponent
	]
})
export class DashboardModule { }
