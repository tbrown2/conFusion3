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
import { DishdetailComponent } from './dishdetail/dishdetail.component';

import { DishService } from './services/dish.service';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
//decorator - a function / wrapper that modifies javascript classes
//specify some details about your app module
@NgModule({
	//these are the view classes - directives, components and pipes
  declarations: [
    AppComponent,
    MenuComponent,
    DishdetailComponent,
    HeaderComponent,
    FooterComponent
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
  providers: [
    DishService
  ],
  //root component
  bootstrap: [AppComponent]
})
//adds classes to your typical javascript code 
export class AppModule { }
