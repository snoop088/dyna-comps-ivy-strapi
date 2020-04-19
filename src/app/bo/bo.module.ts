import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonComponent } from './person/person.component';
import { FormsModule } from '@angular/forms';
import { BoRoutingModule } from './bo-routing.module';
import { BoComponent } from './bo.component';
import { PetComponent } from './pet/pet.component';



@NgModule({
  declarations: [
    PersonComponent,
    BoComponent,
    PetComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BoRoutingModule
  ]
})
export class BoModule { }
