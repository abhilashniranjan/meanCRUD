import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public loading:any= true;
  public food: any;
  public isitavail:any;
   
  constructor( private router: Router, private crud: CrudService,private toster:ToastrService) { }

  ngOnInit(): void {


    this.loading = true;
    if (this.crud.getFood()) {
      this.loading = false;
      this.food = this.crud.getFood();
    
  }
  }

  onSubmit(form:any){


      this.crud.putEmployee(form.value).subscribe((res) => {
        this.toster.success("eddite sucsses");
        this.router.navigate(['/'])
      });


    }



    oo(data:any){

      this.router.navigate(["edit/"+data._id])
      }


}
