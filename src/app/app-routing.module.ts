import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponentComponent} from "./shared/main-layout-component/main-layout-component.component";
import {HomeComponent} from "./main/home/home.component";
import {ShopComponent} from "./main/shop/shop.component";
import {ProductItemComponent} from "./main/shop/product-item/product-item.component";
import {CartComponent} from "./main/shop/cart/cart.component";
import {ContactsComponent} from "./main/contacts/contacts.component";
import {AdminComponent} from "./admin-panel/admin.component";
import {AccountComponent} from "./admin-panel/account/account.component";
import {LoginComponent} from "./admin-panel/login/login.component";
import {Page404Component} from "./page404/page404.component";

const routes: Routes = [
  { // home-page
    path: '',
    component: MainLayoutComponentComponent,
    children: [
      {
        path: '',
        redirectTo: '/',
        pathMatch: 'full'
      },
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'shop',
        component: ShopComponent
      },
      {
        path: 'shop/product/:id',
        component: ProductItemComponent
      },
      {
        path: 'cart',
        component: CartComponent
      },
      {
        path: 'contact',
        component: ContactsComponent
      }
    ]
  },
  { // admin-panel
    path: 'admin', component: AdminComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'account',
        component: AccountComponent
      }
    ]
  },
  {path: '**', pathMatch: 'full', component: Page404Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
