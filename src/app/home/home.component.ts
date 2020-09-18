import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IPerson } from '../person';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  message = "salam!"; 
  ratings: number[] = [2, 3, 3.5, 4.5];
  eventOutPut: IPerson;
  name: string;
  /* use 'ViewChild' to get value of a html tag (example: get #nameInputField value) */
  @ViewChild('nameInputField') inputVar: ElementRef;
  
  constructor() { }

  ngOnInit(): void {
  }

  onClick(event: IPerson){
  this.eventOutPut = event;
  }
  /* reference to/from a html element (example: set #nameInputField value) 
  buttonClick(inputName: HTMLInputElement){  
  this.name = inputName.value;
  }*/
  
  buttonClick(){  
  this.name = this.inputVar.nativeElement.value;
  }

}
