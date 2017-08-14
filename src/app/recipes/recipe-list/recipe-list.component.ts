import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

	recipes: Recipe[] = [
		new Recipe('Hamburger', 'Delicious 100% meat hamburger', 
			'http://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/2:1/w_1260%2Ch_630/the-ultimate-hamburger.jpg'),
		new Recipe('Hamburger', 'Delicious 100% meat hamburger', 
			'http://assets.epicurious.com/photos/57c5c6d9cf9e9ad43de2d96e/2:1/w_1260%2Ch_630/the-ultimate-hamburger.jpg')
	];

  constructor() { }

  ngOnInit() {
  }

}
