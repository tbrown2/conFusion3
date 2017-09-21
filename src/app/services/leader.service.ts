import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';

import { Observable } from 'rxjs/Observable';

//when you use rxjs, we only need to import parts we need
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

import { RestangularModule, Restangular } from 'ngx-restangular';
import { ProcessHTTPMsgService } from './process-httpmsg.service'


//we substituted observables for promises (check earlier versions)
//we did this because anything a promise can do, an observable can do as well


@Injectable()
export class LeaderService {

  constructor(private restangular: Restangular, 
    private processHTTPMsgService: ProcessHTTPMsgService) { }


  getLeaders(): Observable<Leader[]> {
    return  this.restangular.all('leaders').getList();
  }

  getLeader(id: number): Observable<Leader> {
    //filter() returns an array
    //but since we are taking the first index filter()[0]
    //=> is a shorthand way of writing function
    //return a dish type that satisfies
  	return this.restangular.one('leaders', id).get(); 
  }
  getFeaturedLeader(): Observable<Leader> {
    return  this.restangular.all('leaders').getList({featured: true})
      .map(leaders => leaders[0]);;
  }
}
