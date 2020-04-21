import { Component, OnInit } from '@angular/core';
import { Pet } from '../pet/pet.component';
import { ApiLinkService } from 'src/app/shared/api-link.service';
import { Observable } from 'rxjs';
import { tap, shareReplay } from 'rxjs/operators';
export interface Person {
  id?: string;
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
  public pets: Observable<Pet[]>;
  public selectedPets: Pet[] = [];

  constructor( private createPerson: ApiLinkService<Person>, private getPetList: ApiLinkService<Pet>) {
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
    this.getPets();
  }
  public save() {
    console.log(this.person, this.selectedPets);
    this.person.pets = [...this.selectedPets];
    this.createPerson.apiUrl = 'http://dogg:1337/people';
    this.created = this.createPerson.createItem(this.person);
  }
  public getPets() {
    this.getPetList.apiUrl = 'http://dogg:1337/pets';
    this.pets = this.getPetList.getList().pipe(tap(pets => console.log(pets)), shareReplay(1));
  }
  public togglePet(pet: Pet) {
    const index = this.selectedPets.map( selPet => selPet.id).indexOf(pet.id);
    index > -1 ? this.selectedPets.splice(index, 1) : this.selectedPets.push(pet);
  }

}
