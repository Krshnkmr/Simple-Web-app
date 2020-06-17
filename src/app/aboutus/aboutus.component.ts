import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aboutus',
  templateUrl: './aboutus.component.html',
  styleUrls: ['./aboutus.component.css']
})
export class AboutusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  items= [
    new aboutus(1,'The power of habit','Self improvement about habits'),
    new aboutus(2,'How to stop worrying and start living','best self help book'),
    new aboutus(3,'Rich dad Poor dad','My favorite personal finance management book')
  ]

}

export class aboutus
{
  constructor(
    public id : number,
    public Booktitle : string,
    public Bookcategory : string
  )
  {}
}