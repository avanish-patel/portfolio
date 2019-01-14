import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  images:string[] = ["1.jpg","10.jpg","9.jpg","2.jpg","3.jpg","5.jpg","6.jpg","7.jpg","8.jpg","11.jpg","12.jpg","13.jpg"] 

  constructor() { }

  ngOnInit() {
  }

}
