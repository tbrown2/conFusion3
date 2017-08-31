import { Injectable } from '@angular/core';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';


@Injectable()
export class LeaderService {

  constructor() { }
  getLeaders(): Promise<Leader[]> {
    return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(LEADERS), 2000);
    });
  }
  getLeader(id: number): Promise<Leader> {
    //filter() returns an array
    //but since we are taking the first index filter()[0]
    //=> is a shorthand way of writing function
    //return a dish type that satisfies
  	return Promise.resolve(LEADERS.filter((leader) => (leader.id === id))[0]); 
  }
  getFeaturedLeader(): Promise<Leader> {
    return  new Promise(resolve=> {
      // Simulate server latency with 2 second delay
        setTimeout(() => resolve(LEADERS.filter((leader) => leader.featured)[0]), 2000);
    });
  }
}
