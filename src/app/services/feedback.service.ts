import { Injectable } from '@angular/core';

import { RestangularModule, Restangular } from 'ngx-restangular';
import { ProcessHTTPMsgService } from './process-httpmsg.service'
import { Observable } from 'rxjs/Observable';
import { Feedback } from '../shared/feedback';



@Injectable()
export class FeedbackService {

  constructor(private restangular: Restangular, 
    private processHTTPMsgService: ProcessHTTPMsgService) { }

  submitFeedback(feedback: Feedback): Observable<Feedback> {
	return this.restangular.all('feedback').post(feedback).catch(error => {return error});
  };
}
