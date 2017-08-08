
import { Component, OnInit  } from '@angular/core';
//improt a class we created called dish
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

import { DishdetailComponent } from '../dishdetail/dishdetail.component';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	dishes = DISHES;

	selectedDish: Dish;

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

  

 	constructor() { }

	ngOnInit() {

	}

}
