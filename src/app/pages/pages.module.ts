
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { PagesComponent } from './pages.component';
import { HomeComponent } from './home/home.component';


import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../app-routing.module';

import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';





@NgModule({
  declarations: [
    PagesComponent,
    HomeComponent,
  
  ],
 
 exports: [
  HomeComponent,
 
 ],
 imports: [
  SharedModule,
    BrowserModule,
    AppRoutingModule,
    PAGES_ROUTES,
    FormsModule,
    ReactiveFormsModule,
   
 ],
 providers: [],
 
})
export class PagesModule { }
