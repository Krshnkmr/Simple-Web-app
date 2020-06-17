import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent implements OnInit {

  constructor(private route:ActivatedRoute ) { }
  message = 'hello buddy';

  
  ngOnInit(): void {
    console.log(this.message);
  }

}
