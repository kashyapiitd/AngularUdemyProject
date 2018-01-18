import {Component,Output,EventEmitter} from '@angular/core'
import { Recipe } from '../recipes.model'

@Component({
	selector: 'app-recipe-list',
	templateUrl: './recipe-list.component.html',
	styleUrls: ['./recipe-list.component.html'],
})


export class RecipeListComponent{
recipes: Recipe[] = [
  	new Recipe('A Test Recipe', 'This is simply a test', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg'),
  	new Recipe('A Second Test Recipe', 'This is simply a test', 'https://static01.nyt.com/images/2015/08/14/dining/14ROASTEDSALMON/14ROASTEDSALMON-articleLarge.jpg')
  ];
selectedRecipe:Recipe;

@Output() recipeWasSelected = new EventEmitter<Recipe>();

onRecipeSelected(recipe:Recipe){
		//console.log(recipe);
		this.recipeWasSelected.emit(recipe);
	}
}