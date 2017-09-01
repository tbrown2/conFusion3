import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

import { Observable } from 'rxjs/Observable';

//when you use rxjs, we only need to import parts we need
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';


//we substituted observables for promises (check earlier versions)
//we did this because anything a promise can do, an observable can do as well

@Injectable()
export class PromotionService {

  constructor() { }

  getPromotions(): Observable<Promotion[]> {
  return Observable.of(PROMOTIONS).delay(2000);
  }

  getPromotion(id: number): Observable<Promotion> {
    return Observable.of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).delay(2000);
   }

  getFeaturedPromotion(): Observable<Promotion> {
    return  Observable.of(PROMOTIONS.filter((promo) => promo.featured)[0]).delay(2000);
  }
}