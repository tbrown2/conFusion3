import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import 'hammerjs';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
//decorator - a function / wrapper that modifies javascript classes
//specify some details about your app module
@NgModule({
	//these are the view classes - directives, components and pipes
  declarations: [
    AppComponent,
    MenuComponent
  ],
  //always import modules you install that you want to use
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, 
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
  ],
  //all the services that this app will make use of
  providers: [],
  //root component
  bootstrap: [AppComponent]
})
//adds classes to your typical javascript code 
export class AppModule { }
