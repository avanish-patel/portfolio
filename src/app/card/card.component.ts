import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  images:string[] = ["image1.jpg","image2.jpg","image3.jpg","image1.jpg","image2.jpg","image3.jpg","image1.jpg","image2.jpg","image3.jpg"] 

  constructor() { }

  ngOnInit() {
  }

}
