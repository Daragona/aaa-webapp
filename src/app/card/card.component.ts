import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  titolo="";
  constructor(public t: string){
    this.titolo=t;
  }
  
}
