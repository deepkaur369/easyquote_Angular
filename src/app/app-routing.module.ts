import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PartnerRegComponent } from './partner-reg/partner-reg.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import { FlowComponent } from './flow/flow.component';


const routes: Routes = [
{
	path: '',
	component: FlowComponent 
},
{
	path: 'Partner',
	component: PartnerRegComponent 
},
{
	path: 'Customer',
	component: CustomerRegisterComponent 
},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
