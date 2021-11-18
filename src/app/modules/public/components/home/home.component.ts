import { Component, OnInit } from '@angular/core';
import {Person} from "../../../../shared/model/person";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  p1 : Person = {
    firstName: "Emre",
    lastName: "Cakir",
    age: 35
  };

  p2: Person = {
    firstName: "Ali",
    lastName: "veli",
    age: 30
  }

  constructor() { }

  ngOnInit(): void {
  }

}
