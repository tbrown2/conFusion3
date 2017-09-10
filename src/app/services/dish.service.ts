//allows to define injectable decorator to dish service

import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { Http, Response } from '@angular/http';
//rxjs is already available when we nistalled using angular cli 
//will be in our package.json
import { Observable } from 'rxjs/Observable';

import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service'

//when you use rxjs, we only need to import parts we need
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';


//we substituted observables for promises (check earlier versions)
//we did this because anything a promise can do, an observable can do as well

@Injectable()
export class DishService {

  constructor(private http: Http, 
    private processHTTPMsgService: ProcessHTTPMsgService) { }
  
  //if promise is resolved then the dish array will return
  //must configure the code so that promise is taken into account
  getDishes(): Observable<Dish[]> {
  	return this.http.get(baseURL + 'dishes')
      .map(res => { return this.processHTTPMsgService.extractData(res); })
      .catch(error => {return this.processHTTPMsgService.handleError(error)});
  }
  getDish(id: number): Observable<Dish> {
    return this.http.get(baseURL + 'dishes/' + id)
      .map(res => { return this.processHTTPMsgService.extractData(res); })
      .catch(error => {return this.processHTTPMsgService.handleError(error)});

   }
  getFeaturedDish(): Observable<Dish> {
    //feature property must be true, ? is a query 
    return  this.http.get(baseURL + 'dishes?featured=true')
      .map(res => { return this.processHTTPMsgService.extractData(res)[0];})
      .catch(error => {return this.processHTTPMsgService.handleError(error)});

  }

  getDishIds(): Observable<number[]> {
    //map takes each item in the array and maps details of each item or the item itself to a new item array
    return this.getDishes()
      .map(dishes => { return dishes.map( dish => dish.id)})
      .catch(error => {return error});

  }
}
