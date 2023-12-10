import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { AboutComponent } from './components/about/about.component';
import { PaymentComponent } from './payment/payment.component';

const routes: Routes = [
  {path:'',redirectTo:'home', pathMatch:'full'},

{path:'home',component:HomeComponent},
{path:'contactus',component:ContactusComponent},
{path:'about',component:AboutComponent},
{path:'callnow',redirectTo:'contactus'},

{path:'payment',component:PaymentComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }



