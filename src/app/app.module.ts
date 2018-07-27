import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import * as $ from "jquery";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartnerRegComponent } from './partner-reg/partner-reg.component';
import { CustomerRegisterComponent } from './customer-register/customer-register.component';
import {HttpClientModule } from '@angular/common/http';
import { FlowComponent } from './flow/flow.component';
import { CookieService } from 'ngx-cookie-service';


@NgModule({
  declarations: [
    AppComponent,
    PartnerRegComponent,
    CustomerRegisterComponent,
    FlowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule, 
    ReactiveFormsModule
  ],
  providers: [CookieService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
