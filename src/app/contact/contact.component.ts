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
  //js object that will help detect errors
  formErrors = {
    'firstname': '',
    'lastname': '',
    'telnum': '', 
    'email':''
  };

  //angular recommends this way for form validation
  validationMessages = {
     'firstname': {
       'required': 'First Name is required.',
       'minlength': 'First Name must be at least 2 characters long.',
       'maxlength': 'First Name cannot be more than 25 characters long.'
     },
    'lastname':  {
       'required': 'Last Name is required.',
       'minlength': 'Last Name must be at least 2 characters long.',
       'maxlength': 'Last Name cannot be more than 25 characters long.'
     },
    'telnum': {
       'required': 'Telephone number is required.', 
       'pattern': 'Telephone number must contain only numbers.'
     },
    'email': {
       'required': 'Email is required.',
       'email': 'Email not in valid format.'
     } 
  }

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
  		firstname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
  		lastname: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
  		telnum: ['', [Validators.required, Validators.pattern("1?\W*([2-9][0-8][0-9])\W*([2-9][0-9]{2})\W*([0-9]{4})(\se?x?t?(\d*))?")]],
  		email: ['', Validators.required, Validators.email],
  		agree: false,
  		contacttype: 'None',
  		message: ''
  	});

      //subscribing to valuechanges observable
      this.feedbackForm.valueChanges
        .subscribe(data => this.onValueChanged(data));

      this.onValueChanged();

  }

  onValueChanged(data?: any) {
    if (!this.feedbackForm) {return;}
    const form = this.feedbackForm;

    for (const field in this.formErrors) {
      this.formErrors[field] = '';
      const control = form.get(field);
      if (control && control.dirty && !control.valid) {
        const messages = this.validationMessages[field];
        for (const key in control.errors) {
          this.formErrors[field] += messages[key] + ' ';
        }
      }
    }
  }

  onSubmit() {
    this.feedback = this.feedbackForm.value;
    console.log(this.feedback);
    this.feedbackForm.reset({
      firstname: '',
      lastname: '',
      telnum: '',
      email: '',
      agree: false,
      contacttype: 'None',
      message: ''
    })
  }
}
