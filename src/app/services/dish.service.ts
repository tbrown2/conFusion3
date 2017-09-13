//allows to define injectable decorator to dish service

import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';

//we are now using restangular not HTTP
//import { Http, Response } from '@angular/http';
//rxjs is already available when we nistalled using angular cli 
//will be in our package.json
import { Observable } from 'rxjs/Observable';

import { baseURL } from '../shared/baseurl';
import { ProcessHTTPMsgService } from './process-httpmsg.service'

import { RestangularModule, Restangular } from 'ngx-restangular';


//when you use rxjs, we only need to import parts we need
import 'rxjs/add/operator/delay';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';



//we substituted observables for promises (check earlier versions)
//we did this because anything a promise can do, an observable can do as well

@Injectable()
export class DishService {

  constructor(private restangular: Restangular, 
    private processHTTPMsgService: ProcessHTTPMsgService) { }
  

  getDishes(): Observable<Dish[]> {
    //doesnt need to .map or .catch on the returned resource
    //like normal HTTP as it takes care of the work for you
    //see previous git push for how to deal with HTTP get 
    //restangular already deals with errors for us
    return this.restangular.all('dishes').getList();
  }

  getDish(id: number): Observable<Dish> {
    //accessing dishes/id
    return this.restangular.one('dishes',id);
   }
  getFeaturedDish(): Observable<Dish> {
    //return a javascript array 
    //returns all that are featured true
    //accessing the first element  
    return  this.restangular.all('dishes').getList({featured: true})
      .map(dishes => dishes[0]);

  }

  getDishIds(): Observable<number[]> {
    //map takes each item in the array and maps details of
    //each item or the item itself to a new item array
    return this.getDishes()
      .map(dishes => { return dishes.map( dish => dish.id)})
      .catch(error => {return error});

  }
}
