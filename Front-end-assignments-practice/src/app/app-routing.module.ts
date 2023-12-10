import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { MenuComponent } from './component/menu/menu.component';
import { RestaurantComponent } from './component/restaurant/restaurant.component';
import { CartComponent } from './component/cart/cart.component';
import { SecurityComponent } from './component/security/security.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { CustomerComponent } from './component/customer/customer.component';
import { OrdersComponent } from './component/orders/orders.component';

const routes: Routes = [{
  path:'',component:SecurityComponent 
},
{
  path:'home',component:HomeComponent
},
{
  path:'menu',component:MenuComponent
},
{
  path:'restaurants',component:RestaurantComponent
},
{
  path:'cart',component:CartComponent
},
{
  path:'login',component:SecurityComponent
},
{
  path:'Customerlogin',component:CustomerComponent
},
{
  path:'orders',component:OrdersComponent
},
{
  path:'**',component:NotFoundComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
