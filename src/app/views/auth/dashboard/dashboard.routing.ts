import { Routes } from '@angular/router';
import { UserGuard } from '../../../shared/guard/auth/user.guard';
import { ContainerHolderComponent } from './container-holder.component';

export const DashboardRoutes: Routes = [
	{ 
		path: 'dashboard', 
		component: ContainerHolderComponent,
		canActivate: [UserGuard]
	}
];
