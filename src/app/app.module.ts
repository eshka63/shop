import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {MainModule} from "./main/main.module";
import {MainLayoutComponentComponent} from './shared/main-layout-component/main-layout-component.component';
import {HeaderComponent} from "./shared/header/header.component";
import {FooterComponent} from "./shared/footer/footer.component";
import {AdminComponent} from "./admin-panel/admin.component";
import {LoginComponent} from "./admin-panel/login/login.component";
import {Page404Component} from "./page404/page404.component";

@NgModule({
  declarations: [
    AppComponent,
    MainLayoutComponentComponent,
    HeaderComponent,
    FooterComponent,
    AdminComponent,
    Page404Component,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MainModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
