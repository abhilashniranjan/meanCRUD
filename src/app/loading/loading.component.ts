import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.css']
})
export class LoadingComponent implements OnInit {
  product:any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  
this.route.paramMap.subscribe((res:any)=>{
  console.log(res.params.id);
})

  }

}
