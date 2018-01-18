import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  sectionToBeDisplayed:string = "recipeSection";
  onSectionToggle(sectionSelected:string){
  	console.log(sectionSelected);
  	this.sectionToBeDisplayed = sectionSelected;

  }
}
