import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AuthenticateComponent } from './authenticate/authenticate.component';

import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
@NgModule({
  declarations: [
    AppComponent, AuthenticateComponent
  ],
  imports: [
    
    AuthModule,
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    MaterialModule, 
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
