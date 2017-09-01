
import { Component, OnInit  } from '@angular/core';
//improt a class we created called dish
import { Dish } from '../shared/dish';

import { DishdetailComponent } from '../dishdetail/dishdetail.component';

import { DishService } from '../services/dish.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

	dishes: Dish[];

	selectedDish: Dish;

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

  

 	constructor(private dishService: DishService) { }

//lifecycle method, will be executed by the angular framework when the component is executed
	ngOnInit() {
    //must implement then and catch
    this.dishService.getDishes()
    .subscribe(dishes => this.dishes = dishes);

	}

}
