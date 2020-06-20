import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routing';
import { HomeComponent } from './home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { DashboardOverviewComponent } from './components/dashboard-overview/dashboard-overview.component';
import { CovidTaskForceComponent } from './components/covid-task-force/covid-task-force.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(HomeRoutes)
  ],
  declarations: [
  	HomeComponent,
  	MainHeaderComponent,
  	AboutUsComponent,
  	ContactUsComponent,
  	DashboardOverviewComponent,
  	CovidTaskForceComponent,
  	FooterComponent,
  ]
})
export class HomeModule { }
