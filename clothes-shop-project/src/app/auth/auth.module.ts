import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../material.module';
import { AuthRouterModule } from './auth-routing.module';
import { LoginFormComponent } from './login-form/login-form.component';
import { SharedModule } from '../shared/shared.module';

 import { RegisterFormComponent } from './register-form/register-form.component';
// import { LogoutComponent } from './logout/logout.component';
// import { ProfileComponent } from './profile/profile.component';



@NgModule({
  declarations: [
    LoginFormComponent,
    RegisterFormComponent,
    // LogoutComponent,
    // ProfileComponent,
  ],
  imports: [
    CommonModule,
    AuthRouterModule, 
    FormsModule,  //Template-Driven Forms
    ReactiveFormsModule, //Reactive Forms
    SharedModule,
    MaterialModule

  ]
})
export class AuthModule { }
