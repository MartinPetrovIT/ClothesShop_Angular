import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { MaterialModule } from '../material.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ErrorComponent } from './error/error.component';
import { CarouselModule } from '@coreui/angular';


@NgModule({
  declarations: [
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    PageNotFoundComponent,
    ErrorComponent,   
  ],
  imports: [
    CommonModule,
    RouterModule,CarouselModule,

    IconModule,
    MaterialModule,
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    ErrorComponent
  ]
})
export class CoreModule { }
