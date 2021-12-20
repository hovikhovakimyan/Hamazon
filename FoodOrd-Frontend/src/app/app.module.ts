import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from "@angular/common/http";
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { RegisterFormComponent } from './forms/register-form/register-form.component';
import { LoginHeaderComponent } from './components/login-header/login-header.component';
import { LoginFormComponent } from './forms/login-form/login-form.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { HomepageHeaderComponent } from './components/homepage-header/homepage-header.component';
import { SearchPipe } from './pipes/search.pipe';
import { ProfileComponent } from './pages/profile/profile.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { OrdersComponent } from './pages/orders/orders.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterPageComponent,
    RegisterFormComponent,
    LoginHeaderComponent,
    LoginFormComponent,
    LoginPageComponent,
    ForgotPasswordComponent,
    HomepageComponent,
    HomepageHeaderComponent,
    SearchPipe,
    ProfileComponent,
    CheckoutComponent,
    OrdersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
