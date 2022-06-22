import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  employees:any[];
  public loading:any= true;
  name:string="";
  available:string="";
  displayIn:string="";
  category:string="";


 obj:any={};


  constructor(private employeeService: CrudService,private toster:ToastrService,private router:Router) { }

  ngOnInit() {
    this.resetForm();
    this.refreshEmployeeList();
  }

  resetForm(form?: NgForm) {
    if (form)
      form.reset();
  
  }

  onSubmit(form: NgForm) {
  
      this.employeeService.postEmployee(form.value).subscribe((res) => {
        this.resetForm(form);
        this.refreshEmployeeList();
       this.toster.success("added sucsses");
      });
    
  }

  refreshEmployeeList() {
    this.employeeService.getEmployeeList().subscribe((res) => {
      this.employees = res as any[];
    });
  }
/*
  onEdit(emp:any) {
    this.employeeService.selectedEmployee = emp;
  }
*/




onEdit(emp:any){


  this.employeeService.setFood(emp);
  this.router.navigate(['/edit'])

}






  onDelete(_id: string) {
    if (confirm('Are you sure to delete this record ?') == true) {
      this.employeeService.deleteEmployee(_id).subscribe((res) => {
        this.refreshEmployeeList();
    
        this.toster.success("Deleted successfully");
      });
    }
    this.refreshEmployeeList();
  }

}
