import { Component, EventEmitter, Output, ViewChild } from '@angular/core'
import { Ingredient } from '../../shared/ingredient.model'

@Component({
	selector: 'app-shopping-list-edit',
	templateUrl: './shopping-list-edit.component.html',
	styleUrls: ['./shopping-list-edit.component.css']
})

export class ShoppingListEditComponent{

@ViewChild('nameInput') nameInputRef
@ViewChild('amountInput') amountInputRef

@Output()
afterSubmit = new EventEmitter<Ingredient>();

onIngredientSubmit(){
		console.log(this.nameInputRef.nativeElement.value, this.amountInputRef.nativeElement.value);
		const name = this.nameInputRef.nativeElement.value;
		const amount = this.amountInputRef.nativeElement.value
		const ingredient:Ingredient = new Ingredient(name, amount);
		this.afterSubmit.emit(ingredient);

	}
}