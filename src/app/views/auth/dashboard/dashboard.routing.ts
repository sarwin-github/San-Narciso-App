import { Routes } from '@angular/router';
import { UserGuard } from '../../../shared/guard/auth/user.guard';
import { ContainerHolderComponent } from './container-holder.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResidentsComponent } from './residents/residents.component';
import { HouseholdsComponent } from './households/households.component';
import { AddResidentComponent } from './residents/add-resident/add-resident.component';
import { EditResidentComponent } from './residents/edit-resident/edit-resident.component';
import { AddHouseholdComponent } from './households/add-household/add-household.component';
import { EditHouseholdComponent } from './households/edit-household/edit-household.component';

export const DashboardRoutes: Routes = [
	{ 
		path: '', 
		component: ContainerHolderComponent,
		children: [
			{
				path: 'dashboard',
				component: DashboardComponent,
				canActivate: [UserGuard]
			},

			{
				path: 'residents',
				component: ResidentsComponent,
				canActivate: [UserGuard],
			},

			{
				path: 'residents/add',
				component: AddResidentComponent,
				canActivate: [UserGuard],
			},

			{
				path: 'residents/edit/:id',
				component: EditResidentComponent,
				canActivate: [UserGuard],
			},

			{
				path: 'households',
				component: HouseholdsComponent,
				canActivate: [UserGuard]
			},

			{
				path: 'households/add',
				component: AddHouseholdComponent,
				canActivate: [UserGuard],
			},

			{
				path: 'households/edit/:id',
				component: EditHouseholdComponent,
				canActivate: [UserGuard],
			},
		]
	}
];
