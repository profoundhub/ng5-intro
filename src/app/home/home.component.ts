import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  itemCount: number = 5;
  btnText: string = 'Add an Item';
  goalText: string = 'My First Life Goal';
  goals = [];
  
  constructor() { }

  ngOnInit() {
  }

}
