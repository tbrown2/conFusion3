//allows to define injectable decorator to dish service

import { Injectable } from '@angular/core';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';


@Injectable()
export class DishService {

  constructor() { }
  //if promise is resolved then the dish array will return
  //must configure the code so that promise is taken into account
  getDishes(): Promise<Dish[]> {
  	return Promise.resolve(DISHES);
  }
  getDish(id: number): Promise<Dish> {
    //filter() returns an array
    //but since we are taking the first index filter()[0]
    //=> is a shorthand way of writing function
    //return a dish type that satisfies
  	return Promise.resolve(DISHES.filter((dish) => (dish.id === id))[0]); 
  }
  getFeaturedDish(): Promise<Dish> {
    return Promise.resolve(DISHES.filter((dish) => dish.featured)[0]);
  }
}
