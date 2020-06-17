import { Component, OnInit } from '@angular/core';
import { ContactusValidationService } from '../service/contactus-validation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  constructor(private contactusvalidation: ContactusValidationService, private router : Router) { }

  ngOnInit(): void {
  }
  firstname = ''
  lastname = ''
  email = ''
  invalidLogin = false;
  // FirstnameError = 'Please enter your firstname';
  // LastnameError = 'Please enter your lastname';
  errormessage = 'Please enter your correct details'

  handleSubmit()
  {
    console.log(this.firstname);
    console.log(this.lastname);
    console.log(this.email);
    if(this.contactusvalidation.authenticate(this.firstname,this.lastname,this.email))
    {
      console.log('The value is going to service page ' + this.firstname,this.lastname,this.email);
      
      this.router.navigate(['success']);
      this.invalidLogin=false;
      console.log('The value of invalid login '+this.invalidLogin);
    }
    else
    {
      this.invalidLogin=true;
      console.log('when I dont enter the name and details ' + this.invalidLogin);
    }

  }
}