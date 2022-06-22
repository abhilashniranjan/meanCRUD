import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddComponent } from './add/add.component';
import { DatafilterComponent } from './datafilter/datafilter.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { LoadingComponent } from './loading/loading.component';
import { PakegeComponent } from './pakege/pakege.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
 /*  {path:"",component:AddComponent},
{ path: "edit/:id", component: LoadingComponent },

  {path:"edit",component:EditComponent},

{path:"",component:HomeComponent},
  
{path:"",component:DatafilterComponent},
{path:"",component:PakegeComponent}


*/
{path:"",component:RxjsComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
