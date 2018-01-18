import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipes.model'


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  	//console.log(this.recipeItem);
  }

  @Input() 
  recipeItem: Recipe;
  
  @Output()
  recipeSelectionEvent = new EventEmitter<void>();

  onRecipeItemSelected(){
    //console.log(this.recipeItem.name);
    this.recipeSelectionEvent.emit();
  }

}
