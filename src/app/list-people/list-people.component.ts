import { Component, OnInit } from '@angular/core';


import {PeopleComponent} from '../people/people.component';

@Component({
  selector: 'app-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {

  
  peoples=[
{
  id:1,
  FirstName:"sara",
  LastName:"moussa",
  Phone: 7456123,
},
{

  id:2,
  FirstName:"souheil",
  LastName:"moussa",
  Phone: 1557894,
  
},

{
  id:3,
  FirstName:"houssem",
  LastName:"moussa",
  Phone: 5874615,
}



  ] 
  constructor( ) { }
  // add(FirstName, LastName, Phone) {
  //   const obj = {
  //     FirstName,
  //     LastName,
  //     Phone
  //   };
  //   console.log(obj);
  // }
  

  
  ngOnInit() {
    
  }
  deleteUser(people){
    let index = this.peoples.indexOf(people);
    this.peoples.splice(index,1);

  }
  
  
}
