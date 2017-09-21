import { Component, OnInit } from '@angular/core';
//support for dialog material
import { MdDialog, MdDialogRef } from '@angular/material'; 
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  //bind in, allows us to retreive information and use it
  user = {username: '', password: '', remember:false};

  //return the dialogRef 
  //way of closing the dialog within the javascript code
  constructor(private dialogRef: MdDialogRef<LoginComponent>) { }

  ngOnInit() {
  }
  //executes when a user submits the form 
  onSubmit() {
  	console.log("User: ", this.user);
  	this.dialogRef.close();
  }

}
