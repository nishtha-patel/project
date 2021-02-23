import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './components/product/product.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ThankyouComponent } from './components/thankyou/thankyou.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileGuard } from './guard/profile.guard';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { HomeLayoutComponent } from './components/home-layout/home-layout.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';

import { CeilingFanComponent } from './components/ceiling-fan/ceiling-fan.component';
import { PedestalFanComponent } from './components/pedestal-fan/pedestal-fan.component';
import { TableFanComponent } from './components/table-fan/table-fan.component';
import { LightsComponent } from './lights/lights.component';
import { SmartLightingComponent } from './lights/smart-lighting/smart-lighting.component';
import { BattensComponent } from './lights/battens/battens.component';
import { CeilingLightsComponent } from './lights/ceiling-lights/ceiling-lights.component';
import { LedbulbsComponent } from './lights/ledbulbs/ledbulbs.component';
import { TablelampsComponent } from './lights/tablelamps/tablelamps.component';
import { ConventionalampsComponent } from './lights/conventionalamps/conventionalamps.component';
import { ElectricserviceComponent } from './electricservice/electricservice.component';
import { AppliancesComponent } from './appliances/appliances.component';

import { CoolerComponent } from './cooler/cooler.component';
import { HeaterComponent } from './heater/heater.component';
import { FanComponent } from './fan/fan.component';



const routes: Routes = [
  // Define routes for the landing / home page, create a separate component for the layout of home page
  // put only header, footer and router-outlet there
  {
    path: '',
    component: HomeLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      },
      {
        path: 'product',
        component: ProductComponent
      },
      {
        path: 'products',
        component: ProductComponent
      },

      {
        path: 'cart', component: CartComponent
      },
      {
        path: 'checkout', component: CheckoutComponent, canActivate: [ProfileGuard]
      },
      {
        path: 'thankyou', component: ThankyouComponent
      },
      {
        path: 'login', component: LoginComponent
      },
      {
        path: 'profile', component: ProfileComponent, canActivate: [ProfileGuard]
      },
      {
        path: 'register', component: RegisterComponent
      },

      {
        path: 'ceiling-fan', component: CeilingFanComponent
      },
      { path: 'pedestal-fan', component: PedestalFanComponent },
      {
        path: 'table-fan', component: TableFanComponent
      },

      {
        path: 'smart-lighting', component: SmartLightingComponent
      },
      {
        path: 'battens', component: BattensComponent
      },
      {
        path: 'ceiling-lights', component: CeilingLightsComponent
      },
      {
        path: 'ledbulbs', component: LedbulbsComponent
      },
      {
        path: 'tablelamps', component: TablelampsComponent
      },
      {
        path: 'conventionalamps', component: ConventionalampsComponent
      },
      {
        path: 'electricservice', component: ElectricserviceComponent
      },
      {
        path: 'appliances', component: AppliancesComponent
      },
      {
        path: 'contact-us',
        component: ContactUsComponent
      },
      {
        path: 'lights', component: LightsComponent
      },
      { path: 'fans', component: FanComponent },
      { path: 'appliances', component: AppliancesComponent },
      { path: 'cooler', component: CoolerComponent },
      { path: 'heater', component: HeaterComponent },
      { path: 'fan', component: FanComponent },

    ]
  },



  // Wildcard Route if no route is found == 404 NOTFOUND page
  {
    path: '**', pathMatch: 'full', redirectTo: ''
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

