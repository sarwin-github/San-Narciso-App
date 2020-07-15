import { Routes } from '@angular/router';
import { UserGuard } from '../../../shared/guard/auth/user.guard';
import { ContainerHolderComponent } from './container-holder.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ResidentsComponent } from './residents/residents.component';
import { HouseholdsComponent } from './households/households.component';
import { BlottersComponent } from './blotters/blotters.component';

import { AddResidentComponent } from './residents/add-resident/add-resident.component';
import { EditResidentComponent } from './residents/edit-resident/edit-resident.component';

import { AddHouseholdComponent } from './households/add-household/add-household.component';
import { EditHouseholdComponent } from './households/edit-household/edit-household.component';

import { AddBlotterComponent } from './blotters/add-blotter/add-blotter.component';
import { EditBlotterComponent } from './blotters/edit-blotter/edit-blotter.component';

import { BarangayClearanceComponent } from './barangay-clearance/barangay-clearance.component';
import { AddBarangayClearanceComponent } from './barangay-clearance/add-barangay-clearance/add-barangay-clearance.component';
import { EditBarangayClearanceComponent } from './barangay-clearance/edit-barangay-clearance/edit-barangay-clearance.component';


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

			{
				path: 'blotters',
				component: BlottersComponent,
				canActivate: [UserGuard]
			},
			{
				path: 'blotters/add',
				component: AddBlotterComponent,
				canActivate: [UserGuard],
			},
			{
				path: 'blotters/edit/:id',
				component: EditBlotterComponent,
				canActivate: [UserGuard],
			},

			{
				path: 'barangay-clearance',
				component: BarangayClearanceComponent,
				canActivate: [UserGuard]
			},
			{
				path: 'barangay-clearance/create',
				component: AddBarangayClearanceComponent,
				canActivate: [UserGuard]
			},
			{
				path: 'barangay-clearance/edit',
				component: EditBarangayClearanceComponent,
				canActivate: [UserGuard]
			},
		]
	}
];
