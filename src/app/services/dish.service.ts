//allows to define injectable decorator to dish service

import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
//rxjs is already available when we nistalled using angular cli 
//will be in our package.json
import { Observable } from 'rxjs/Observable';

//when you use rxjs, we only need to import parts we need
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';


//we substituted observables for promises (check earlier versions)
//we did this because anything a promise can do, an observable can do as well

@Injectable()
export class DishService {

  constructor() { }
  //if promise is resolved then the dish array will return
  //must configure the code so that promise is taken into account
  getDishes(): Observable<Dish[]> {
  	return Observable.of(DISHES).delay(2000);
  }
  getDish(id: number): Observable<Dish> {
    return Observable.of(DISHES.filter((dish) => (dish.id === id))[0]).delay(2000);
   }
  getFeaturedDish(): Observable<Dish> {
    return  Observable.of(DISHES.filter((dish) => dish.featured)[0]).delay(2000);
  }
}
