import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Feedback, ContactType } from '../shared/feedback';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  //form model 	
  feedbackForm: FormGroup;
  feedback: Feedback;
  contactType = ContactType;


  constructor(private fb: FormBuilder) {
  	//method in which we will create the actual form 
  	this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
  	//within a gorup we can create various forms
  	//it closely resebbles the feedback structure but it doesne necessarily need to 
  	this.feedbackForm = this.fb.group({
  		firstname: '',
  		lastname: '',
  		telnum: 0,
  		email: '',
  		agree: false,
  		contacttype: 'None',
  		message: ''

  	});
  }
}
