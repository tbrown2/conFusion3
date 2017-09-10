import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { Http, Response } from '@angular/http';

import 'rxjs/add/observable/throw';


@Injectable()
export class ProcessHTTPMsgService {

  constructor() { }

  //takes the response from the server side and processes it 
  //and extracts data from teh body of the message
  //http reply will contain data in the body ofthe message 
  //if the server does not return the data we will handle that through 
  //handleError()
  public extractData(res: Response) {
  	let body = res.json();

  	//if body is null then return empty object
  	return body || { };
  }

  public handleError(error: Response | any) {
  	let errMsg: string;
  	 if (error instanceof Response) {
  	 	const body = error.json() || '';
  	 	const err = body.error || JSON.stringify(body);
      //using backwards quote
      //inside we are using variables, the status gives us whatever
      //the response value is
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
  	 }
  	 else {
       //error message, if it contains a value then convert the error to string
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    //the throw method means that we will throw the error
    return Observable.throw(errMsg);
  }

}
