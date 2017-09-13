
import { Component, OnInit, Inject  } from '@angular/core';
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
	errMess:string;

  
//set up BaseUrl as a provider, so now it can be injected into the component
//getting BaseURL for our HTML file
 	constructor(private dishService: DishService, @Inject('BaseURL') private BaseURL) { }

//lifecycle method, will be executed by the angular framework when the component is executed
	ngOnInit() {
    //must implement then and catch
    //when the service returns a value the first will be executed 
    //if an error is returned then errmess will become the string 
    this.dishService.getDishes()
    .subscribe(
    	dishes => this.dishes = dishes,
    	errmess=> this.errMess = <any>errmess
    	);

	}

}
