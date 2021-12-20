import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckoutComponent } from './pages/checkout/checkout.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { OrdersComponent } from './pages/orders/orders.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routes: Routes = [
  {
    path: "" , component : LoginPageComponent
  },
  {
    path : "register", component : RegisterPageComponent
  },
  {
    path : "login", component : LoginPageComponent
  },
  {
    path : "forgot-password", component : ForgotPasswordComponent
  },
  {
    path: "homepage", component : HomepageComponent
  },
  {
    path: "profile", component : ProfileComponent
  },
  {
    path: "checkout", component : CheckoutComponent 
  },
  {
    path: "orders", component : OrdersComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
