import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CategoryComponent } from './pages/category/category.component';
import { RestaurantItemComponent } from './pages/restaurant-item/restaurant-item.component';
import { CreateOrderComponent } from './pages/create-order/create-order.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CategoryComponent,
    RestaurantItemComponent,
    CreateOrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
