import { NgModule } from '@angular/core';
import { PersonComponent } from './person/person.component';
import { RouterModule, Routes } from '@angular/router';
import { BoComponent } from './bo.component';
import { PetComponent } from './pet/pet.component';
import { LoginGuard } from '../shared/login.guard';



const boRoutes: Routes = [
  {
    path: 'backoffice', component: BoComponent,
    canActivate: [LoginGuard],
    children: [
      {
        path: 'person', component: PersonComponent
      },
      {
        path: 'pet', component: PetComponent
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(boRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class BoRoutingModule { }
