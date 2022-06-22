import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pakege',
  templateUrl: './pakege.component.html',
  styleUrls: ['./pakege.component.css']
})
export class PakegeComponent implements OnInit {
  p:number = 1;
  
  constructor() { }

  ngOnInit(): void {
  }

  data:any=[{
      name:"a",
      age:1
    }, {
      name:"b",
      age:2
    },{
      name:"c",
      age:3
    }, {
      name:"d",
      age:4
    }, {
      name:"e",
      age:5
    },{
      name:"f",
      age:6
    },{
      name:"a",
      age:1
    },{
      name:"a",
      age:1
    },{
      name:"a",
      age:1
    },{
      name:"a",
      age:1
    },{
      name:"a",
      age:1
    },
  ];








}
