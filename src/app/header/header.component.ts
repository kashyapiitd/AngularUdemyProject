import { Component, Output, EventEmitter } from '@angular/core'

// Component Decorator. For Angular to know that this is a component.
@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: ['./header.component.html']
})

export class HeaderComponent{
	@Output() sectionSelected = new EventEmitter<string>();
	displayRecipes(){
		console.log('Recipe Component Selected');
		this.sectionSelected.emit("recipeSection");
	}
	displayShoppingList(){
		console.log('Shopping List Component Selected');
		this.sectionSelected.emit("shoppingListSection");
	}
}