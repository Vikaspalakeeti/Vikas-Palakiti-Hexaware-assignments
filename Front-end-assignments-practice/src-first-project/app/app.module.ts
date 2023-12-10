import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import {FormsModule}  from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StudentComponent } from './student/student.component';
import { CardhoverDirective } from './cardhover.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StudentComponent,
    CardhoverDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [StudentComponent]//[AppComponent]
})
export class AppModule { }
