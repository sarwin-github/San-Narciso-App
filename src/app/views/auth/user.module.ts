import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SigninComponent } from './users/signin/signin.component';
import { SignupComponent } from './users/signup/signup.component';
import { ProfileComponent } from './users/profile/profile.component';
import { UserRoutes } from './user.routing';
import { environment } from '../../../environments/environment';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  imports: [
    CommonModule,
    FormsModule, 
    ReactiveFormsModule,
    NgxSpinnerModule,
    RouterModule.forChild(UserRoutes)
  ],
  declarations: [
  	SigninComponent, 
  	SignupComponent, 
  	ProfileComponent, 
  ]
})
export class UserModule { }
