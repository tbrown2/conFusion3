import { Injectable } from '@angular/core';
import { Promotion } from '../shared/promotion';

import { Observable } from 'rxjs/Observable';

//when you use rxjs, we only need to import parts we need
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

import { RestangularModule, Restangular } from 'ngx-restangular';
import { ProcessHTTPMsgService } from './process-httpmsg.service'

//we substituted observables for promises (check earlier versions)
//we did this because anything a promise can do, an observable can do as well

@Injectable()
export class PromotionService {

  constructor(private restangular: Restangular, 
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  getPromotions(): Observable<Promotion[]> {
  return this.restangular.all('promotions').getList();
  }

  getPromotion(id: number): Observable<Promotion> {
    return this.restangular.one('promotions', id).get();
   }

  getFeaturedPromotion(): Observable<Promotion> {
    return  this.restangular.all('promotions').getList()
      .map(promotions => promotions[0]);
  }
}