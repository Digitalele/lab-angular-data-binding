import { Component, OnInit, Input } from '@angular/core';
import foods from '../foods';

@Component({
  selector: 'app-add-new-foods',
  templateUrl: './add-new-foods.component.html',
  styleUrls: ['./add-new-foods.component.css']
})
export class AddNewFoodsComponent implements OnInit {

  foods: Object[];

  newFood: Object = {
    name: '',
    calories: '',
    image: '',
    quantity: ''
  };

  constructor() { }

  ngOnInit() {
  	this.foods = foods;
  }

  addFood(){
  	this.foods.push(this.newFood);
  	console.log('add food');
  	this.newFood = {};
  	

  }



}













