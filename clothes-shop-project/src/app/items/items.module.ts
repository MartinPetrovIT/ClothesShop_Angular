import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ItemsCatalogComponent } from './items-catalog/items-catalog.component';

@NgModule({
  declarations: [     
    
    ItemsCatalogComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ItemsCatalogComponent
  ],
  exports: [
  ]
})
export class ItemModule { }
