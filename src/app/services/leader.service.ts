import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Observable } from 'rxjs/Observable';

//when you use rxjs, we only need to import parts we need
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';


//we substituted observables for promises (check earlier versions)
//we did this because anything a promise can do, an observable can do as well


@Injectable()
export class LeaderService {

  constructor() { }
  getLeaders(): Observable<Leader[]> {
    return  Observable.of(LEADERS).delay(2000);
  }

  getLeader(id: number): Observable<Leader> {
    //filter() returns an array
    //but since we are taking the first index filter()[0]
    //=> is a shorthand way of writing function
    //return a dish type that satisfies
  	return Observable.of(LEADERS.filter((leader) => (leader.id === id))[0]); 
  }
  getFeaturedLeader(): Observable<Leader> {
    return  Observable.of(LEADERS.filter((leader) => leader.featured)[0]).delay(2000);
  }
}
