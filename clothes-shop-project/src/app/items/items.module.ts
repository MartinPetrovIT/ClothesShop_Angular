import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material.module';
import { ItemsCatalogComponent } from './items-catalog/items-catalog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {ItemRouterModule} from './item-routing.module'
import { DressCreateComponent } from './dress/dress-create/dress-create.component';
import { DressListComponent } from './dress/dress-list/dress-list.component';
import { ShoesCreateComponent } from './shoes/shoes-create/shoes-create.component';
import { OrderHistoryComponent } from './order-history/order-history.component';

@NgModule({
  declarations: [     
    DressCreateComponent,
    ItemsCatalogComponent,
    DressListComponent,
    OrderHistoryComponent,
    ShoesCreateComponent ,
  ],
  imports: [
    ItemRouterModule,
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
  ]
})
export class ItemModule { }
