import { Component, OnInit } from '@angular/core';

import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { Leader } from '../shared/leader';
import { LeaderService } from '../services/leader.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dish: Dish;
  promotion: Promotion;
  leader: Leader;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService, 
    private leaderservice: LeaderService) { }

  ngOnInit() {
    //this call for a promise is a bit confusing at first 
    //the first part of it is within our constructor
    //weve passed our service objects within it to get values
    //ex: dishservice is retrieving the promise 
    //if the promise is successful we pass that value it returned
    //into the function defined in the then scenario
    //we then assisn that returned object into this.dish
    this.dishservice.getFeaturedDish()
    .subscribe (returneddish => this.dish = returneddish);
    this.promotionservice.getFeaturedPromotion()
    .subscribe (promotion => this.promotion = promotion);
    this.leaderservice.getFeaturedLeader()
    .subscribe (returnedleader => this.leader = returnedleader);
  }

}