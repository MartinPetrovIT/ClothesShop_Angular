import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import { AuthModule } from './auth/auth.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { BehaviorSubject } from 'rxjs';

import { API_ERROR } from './shared/constants';
import { ItemModule } from './items/items.module';

import { AuthenticateComponent } from './authenticate/authenticate.component';

import { MaterialModule } from './material.module';
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
@NgModule({
  declarations: [
    AppComponent, AuthenticateComponent
  ],
  imports: [
    ItemModule,
    AuthModule,
    BrowserModule,
    AppRoutingModule, 
    ReactiveFormsModule,
    MaterialModule, 
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    CoreModule,
  ],
  providers:  [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
