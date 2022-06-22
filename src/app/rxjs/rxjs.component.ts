import { Component, OnInit } from '@angular/core';
import { filter, from, map, of, take } from 'rxjs';
import { CrudService } from '../crud.service';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {
  employees:any;
  arr:any;
  content:any="";
  
  constructor(private employeeService: CrudService) { }

  ngOnInit(): void {
   this.multiplyBy2();
   this.toUpperCase();
   this.take();
   this.geto();
   this.refreshEmployeeList();
   this.getalldata();
  }


 
//1)
  source = from([1, 2, 3, 4, 5]);
   example = this.source.pipe(filter(num => num  <= 2));
    subscribe = this.example.subscribe(val => console.log(`Even number: ${val}`));

//2)

 source1 = from([
  { name: 'Joe', age: 31 },
  { name: 'Bob', age: 25 }
]);
//filter out people with age under 30
 example1 = this.source1.pipe(filter(person => person.age >= 30));
//output: "Over 30: Joe"
 subscribe1 = this.example1.subscribe(val => console.log(`Over 30: ${val.name}`));



//3)  

 
srcArray = from([1, 2, 3, 4]);

multiplyBy2() {
  this.srcArray
  .pipe(map(val => { return val * 2}))
  .subscribe(val => { console.log(val)})
}


 //4)
srcName = from(['John', 'Tom', 'Katy'])
 
toUpperCase() {
  this.srcName
   .pipe(map(data => {
     return data.toUpperCase();
   }))
   .subscribe(data => console.log(data))
}


//5)

 source3 = from([1, 2, 3, 4, 5]);

 take(){
this.source3.pipe(take(3)).subscribe(res=>{
  console.log(res);
})

 }



geto(){

setTimeout(() => {
  console.log("uuuuuuuu");
}, 1000);

/*
setInterval(()=>{
  console.log("abhi");
} ,2000)

*/
}



refreshEmployeeList() {
  this.employeeService.getEmployeeList().subscribe((res) => {
     this.arr = res as [];

    for (let obj of this.arr) {
      console.log("print key:", obj.name);
    
  }
   
  });
}


oobj:any={
  name:"abhistar",
  age:23,
  role:"developer",
  arr:[{
    a:"bbbbbb",
    b:"eeeee"
  }]
}
arrr:any=[
  {
    a:"aaaaaa",
    b:"ababababa"
  },"abhipppppppp"
]

getalldata(){

 
const data =  this.oobj.arr;
  for(let o of data){
    console.log(o.a)
  }

for(let a of this.arrr){

console.log(a.b)

}





}


}
