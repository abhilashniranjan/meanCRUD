import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datafilter',
  templateUrl: './datafilter.component.html',
  styleUrls: ['./datafilter.component.css']
})
export class DatafilterComponent implements OnInit {
  filterString:any = '';
  filter:any='';
  constructor() { }

  ngOnInit(): void {
  }

  dada:any=[
    {name:"abhi",age:23,place:"banglore"},
    {name:"mahi",age:24,place:"banglore"},
    {name:"mohan",age:25,place:"banglore"},
    {name:"abhilash",age:26,place:"banglore"},
    {name:"kiran",age:27,place:"banglore"},
    {name:"abd",age:28,place:"banglore"},
]



onclicked(){

this.filterString = this.filter;


}


}
