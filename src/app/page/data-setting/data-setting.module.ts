import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LovDataComponent } from './lov-data/lov-data.component';
import { ConstantDataComponent } from './constant-data/constant-data.component';
import { LovDataDetailsComponent } from './lov-data-details/lov-data-details.component';
import { ConstantDataDetailsComponent } from './constant-data-details/constant-data-details.component';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DepartmentsComponent } from './departments/departments.component';


const routes: Routes = [
  { path: '', component: ConstantDataComponent },
  { path: 'constant', component: ConstantDataComponent },
  { path: 'constantdetails', component: ConstantDataDetailsComponent },
  { path: 'lov', component: LovDataComponent },
  { path: 'lovdetails', component: LovDataDetailsComponent },
  { path: 'departments', component: DepartmentsComponent},

];

@NgModule({
  declarations: [LovDataComponent, ConstantDataComponent, LovDataDetailsComponent, ConstantDataDetailsComponent, DepartmentsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    DataTablesModule,
    ComponentsModule,
    BsDatepickerModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule, 
    
  ],
  exports: [RouterModule],
  
})
export class DataSettingModule { }
