import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  firstName: string;
  lastName: string;
  Phone: number;
  constructor() { }

  ngOnInit() {
  }

}
