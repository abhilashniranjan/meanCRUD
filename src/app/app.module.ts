import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingComponent } from './loading/loading.component';
import { EditComponent } from './edit/edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HomeComponent } from './home/home.component';
import { DevExtremeModule } from 'devextreme-angular';
import { DatafilterComponent } from './datafilter/datafilter.component';
import { FilterPipe } from './filter.pipe';
import { RxjsComponent } from './rxjs/rxjs.component';
import { PakegeComponent } from './pakege/pakege.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { QuillModule } from 'ngx-quill';


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    LoadingComponent,
    EditComponent,
    HomeComponent,
    DatafilterComponent,
    FilterPipe,
    RxjsComponent,
    PakegeComponent
  ],
  imports: [
    BrowserModule,DevExtremeModule,NgxPaginationModule, QuillModule.forRoot(),
    AppRoutingModule,FormsModule,HttpClientModule,BrowserAnimationsModule,ReactiveFormsModule,ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
