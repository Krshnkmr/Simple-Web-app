import { Component, OnInit } from '@angular/core';
import { ContactusValidationService } from '../service/contactus-validation.service';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor(private contactusvalidation : ContactusValidationService) { }
  heading = 'My Bio Data';
  ngOnInit(): void {
    this.contactusvalidation.refresh();
  }
  
}
