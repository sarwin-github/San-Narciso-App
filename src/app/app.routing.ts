import { Routes } from '@angular/router';
import { UserGuard } from './shared/guard/auth/user.guard';
import { HeaderComponent } from './shared/components/header/header.component';

export const rootRouterConfig: Routes = [
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: '',
        loadChildren: './views/home/home.module#HomeModule'
      }
    ]
  },
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'user',
        loadChildren: './views/auth/user.module#UserModule'
      }
    ]
  },
  {
    path: '',
    component: HeaderComponent,
    children: [
      {
        path: 'community',
        loadChildren: './views/auth/dashboard/dashboard.module#DashboardModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'error/404'
  }
];
