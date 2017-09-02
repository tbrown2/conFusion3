import { Component, OnInit } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  selectedDish: Dish;
  //store all the ids of all the dishes in menu
  dishIds: number[];
  prev: number;
  next: number;

  constructor(private dishservice: DishService, 
  	private route:ActivatedRoute, 
  	private location: Location) { 

  }

  ngOnInit() {
    this.dishservice.getDishIds()
      .subscribe(dishIds => this.dishIds = dishIds);
  	//uses the activated route service 
  	//must fetch the activated route using the plus value
    //in angular the activated route value provides us params
    //params is an observable
    //plus converts the string into an integer value
    //switchMap will automatically update every time the id changes
  	this.route.params
      .switchMap((params: Params) => this.dishservice.getDish(+params['id']))
      .subscribe(selectedDish => {this.selectedDish = selectedDish; this.setPrevNext(selectedDish.id);});

  }

  setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    //index of the current value 
    this.prev = this.dishIds[(this.dishIds.length+ index -1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length+ index +1)%this.dishIds.length];
  }

  goBack(): void {
  	//built in method in the location module that returns to a previous location
  	this.location.back();
  }

}
