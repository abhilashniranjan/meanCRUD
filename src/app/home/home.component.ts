import { Component, OnInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import { DevextremService } from '../devextrem.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  data:string="abhi";
  dataSource: DataSource;
  constructor(private service: DevextremService) {
    
  }

  ngOnInit(): void {
  }
   

  helloWorld(){
    alert('Hello world!');
  }

  discountCellTemplate:any[]=[{
    Amount:122,
    Discount:12,SaleDate:122,Region:"bacchhh",Sector:"bbbbbbb",Channel:"ssssss",Customer:"aaaaaa"
  },{
    Amount:122,
    Discount:12,SaleDate:122,Region:"bacchhh",Sector:"bbbbbbb",Channel:"ssssss",Customer:"aaaaaa"
  }]


}
