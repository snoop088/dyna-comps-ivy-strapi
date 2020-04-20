import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet/pet.component';
import { ApiLinkService } from 'src/app/shared/api-link.service';
import { Observable } from 'rxjs';
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
  pets?: Pet[];
}
@Component({
  selector: 'dyn-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {
  public person: Person;
  public created: Observable<Person>;

  constructor( private createPerson: ApiLinkService<Person>) {
    this.person = {
      title: '',
      firstName: '',
      lastName: '',
      email: '',
      address: {
        street1: '',
        street2: '',
        country: '',
        zip: '',
        city: 'Sofia',
      },
      pets: []
    };
  }

  ngOnInit(): void {
  }
  public save() {
    this.createPerson.apiUrl = 'http://dogg:1337/people';
    this.created = this.createPerson.createItem(this.person);
  }

}
