import { Component, OnInit } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  selectedDish: Dish;

  constructor(private dishservice: DishService, 
  	private route:ActivatedRoute, 
  	private location: Location) { 

  }

  ngOnInit() {
  	//uses the activated route service 
  	//must fetch the activated route using the plus value
  	let id = +this.route.snapshot.params['id'];
  	this.dishservice.getDish(id)
    .subscribe (selecteddish => this.selectedDish = selecteddish);

  }

  goBack(): void {
  	//built in method in the location module that returns to a previous location
  	this.location.back();
  }

}
