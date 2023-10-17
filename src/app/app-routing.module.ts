import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CategoryComponent } from './pages/category/category.component';
import { RestaurantItemComponent } from './pages/restaurant-item/restaurant-item.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';

const routes: Routes = [
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'foodCategory',
    component: CategoryComponent
  },
  {
    path: 'restaurantItems',
    component: RestaurantItemComponent
  },
  {
    path: 'createOrder',
    component: CreateOrderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
