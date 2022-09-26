import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ShopComponent} from "./shop/shop.component";
import {ProductItemComponent} from "./shop/product-item/product-item.component";
import {CheckoutComponent} from "./shop/checkout/checkout.component";
import {CartComponent} from "./shop/cart/cart.component";
import {HomeComponent} from './home/home.component';
import {ContactsComponent} from './contacts/contacts.component';
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    ShopComponent,
    ProductItemComponent,
    CheckoutComponent,
    CartComponent,
    HomeComponent,
    ContactsComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule,
  ],
  providers: []
})
export class MainModule {
}
