import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet/pet.component';
export interface Person {
  title: string;
  firstName: string;
  lastName: string;
  email: string;
  address: {
    street1: string,
    street2: string,
    country: string,
    zip: string,
    city: string,
  };
  pets: Pet[];
}
@Component({
  selector: 'dyn-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  public person: Person;

  constructor() { }

  ngOnInit(): void {
  }
  public save() {
    console.log(this.person);
  }

}
