import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { Params, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


import { Dish } from '../shared/dish';
import { Comment } from '../shared/comment';
import { DISHES } from '../shared/dishes';
import { DishService } from '../services/dish.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  selectedDish: Dish;
  dishcopy = null;
  //store all the ids of all the dishes in menu
  dishIds: number[];
  prev: number;
  next: number;

  commentForm: FormGroup;
  comment: Comment;

  errMess: string;

    //js object that will help detect errors
  formErrors = {
    'comment': '',
    'author': '', 
  };
   validationMessages = {
     'comment': {
       'required': 'Comment is required.',
       'minlength': 'First Name must be at least 2 characters long.',
     },
     'author' : {
       'required': 'Author Name is required.',
       'minlength': 'First Name must be at least 2 characters long.',
     }
   };



  constructor(private dishservice: DishService, 
  	private route:ActivatedRoute, 
  	private location: Location,
    private fb: FormBuilder, 
    @Inject('BaseURL') private BaseURL) { 
    }

  createForm() {
    this.commentForm = this.fb.group({
      rating: [5],
      comment: ['', [Validators.required, Validators.minLength(2)]],
      author: ['', [Validators.required, Validators.minLength(2)]],
      date: ['']
    });
    this.commentForm.valueChanges
       .subscribe(data => this.onValueChanged(data));

    this.onValueChanged();

  }

    onValueChanged(data?: any) {
    if (!this.commentForm) {return;}
    const form = this.commentForm;

    for (const field in this.commentForm) {
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

  onSubmit(){
    var d = new Date();
    this.comment = this.commentForm.value;
    this.comment.date = d.toISOString();
    //we push the new comment into the dish copy
    //dish copy is an object value not of our defined dish class 
    //that means when we make the data persist in our server itll work 
    //since Dish class is locally defined and REST api doesnt know
    this.dishcopy.comments.push(this.comment);
    //when the server responds, we will update the dish copy
    //dish object has been updated on the server 
    //then returns the object and now it will be reflected back
    this.dishcopy.save()
      .subscribe(dish => this.selectedDish = dish);
    this.commentForm.reset({
      rating: "5",
      comment: '',
      author: '',
      date: ''
    });
  }


  ngOnInit() {
    this.createForm();

    this.dishservice.getDishIds()
      .subscribe(dishIds => this.dishIds = dishIds);
  	//uses the activated route service 
  	//must fetch the activated route using the plus value
    //in angular the activated route value provides us params
    //params is an observable
    //plus converts the string into an integer value
    //switchMap will automatically update every time the id changes
  	this.route.params
      .switchMap((params: Params) => this.dishservice.getDish(+params['id']))
      .subscribe(
        selectedDish => {this.selectedDish = selectedDish; this.dishcopy = selectedDish; this.setPrevNext(selectedDish.id);},
        errMess => this.errMess = <any>errMess)

  }

  setPrevNext(dishId: number) {
    let index = this.dishIds.indexOf(dishId);
    //index of the current value 
    this.prev = this.dishIds[(this.dishIds.length+ index -1)%this.dishIds.length];
    this.next = this.dishIds[(this.dishIds.length+ index +1)%this.dishIds.length];
  }

  goBack(): void {
  	//built in method in the location module that returns to a previous location
  	this.location.back();
  }

}
