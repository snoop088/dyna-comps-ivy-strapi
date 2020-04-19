import { Component, OnInit } from '@angular/core';

export interface Pet {
  name: string;
  type: string;
  age: number;
  colour: string;
  friendly: boolean;
}

@Component({
  selector: 'dyn-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
