import { Component, OnInit, OnChanges, Input, EventEmitter, Output, ViewEncapsulation } from '@angular/core';
import { IPerson } from '../person';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css'],
  /* with 'ViewEncapsulation.None' we encapsul(open cpasul) a component,
  and other component (a component that use this component)
  can use this component's elements like css and ... */
  encapsulation: ViewEncapsulation.None
})
export class StarComponent implements OnInit, OnChanges {

  starwidth: number;
  /*'starRating' is a name for rating property, that call from other components (for example from'home') */
  @Input("starRating") rating: number;
  /*'starRating' is a name for rating property, that call from other components (for example from'home') */
  @Output("starClick") starClicked = new EventEmitter<IPerson>();
  person: IPerson = {
    name: 'mohammad',
    age: 0,
    school: 'th.uc'
  };  

  constructor() { }

  ngOnInit(): void {

  }

  ngOnChanges(){
  this.starwidth = this.rating * 86 / 5;
  }

  onStarClicked(){
    this.person.age = this.rating;
    this.starClicked.emit(this.person);
  } 
}
