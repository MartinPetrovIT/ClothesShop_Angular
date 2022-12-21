  import { RouterModule, Routes } from '@angular/router';
  import { ItemsCatalogComponent } from './items-catalog/items-catalog.component';
  import { DressCreateComponent } from '../items/dress/dress-create/dress-create.component';
  import { ShoesCreateComponent } from '../items/shoes/shoes-create/shoes-create.component';
  import { OrderHistoryComponent } from '../items/order-history/order-history.component';


  export const routes: Routes = [
    {
      path: 'items/catalog',
      component: ItemsCatalogComponent,
      title: 'Catalog Page',
      data: {
        loginRequired: false,
      },
       
    },

    {
      path: 'items/myOrders',
      component: OrderHistoryComponent,
      title: 'Create Dress Page',
      data: {
        loginRequired: false,
      },
       
    },

    {
      path: 'items/dress/create',
      component: DressCreateComponent,
      title: 'Create Dress Page',
      data: {
        loginRequired: false,
      },
       
    },
    {
      path: 'items/shoes/create',
      component: ShoesCreateComponent,
      title: 'Create Shoes Page',
      data: {
        loginRequired: false,
      },
       
    },
      
  ];

  export const ItemRouterModule = RouterModule.forChild(routes);
