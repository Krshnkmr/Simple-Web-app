import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  username = '';
  errormessage = 'Please enter your name';
  invalidCredentials = false;
  handleUsername() {
    if (this.username !== '') {
      this.invalidCredentials = false;
      console.log('When I enter the some name ' +this.invalidCredentials);
      console.log(this.username);
    }
    else {
      console.log(this.username);
      
      this.invalidCredentials = true;
      console.log('When I dont enter the name '+this.invalidCredentials);
    }
  }

  ngOnInit(): void {
  }

}
