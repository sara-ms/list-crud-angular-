import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ListPeopleComponent} from './list-people/list-people.component';
const routes: Routes = [
  {
      path: '',
      component: ListPeopleComponent
  }
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
