import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { ComponentsModule } from 'src/app/components/components.module';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ImportData001Component } from './import-data001/import-data001.component';
import { ImportData001detailComponent } from './import-data001detail/import-data001detail.component';
import { ImportData002Component } from './import-data002/import-data002.component';
import { ImportData003Component } from './import-data003/import-data003.component';
import { ImportData004Component } from './import-data004/import-data004.component';
import { ImportData005Component } from './import-data005/import-data005.component';
import { ImportData006Component } from './import-data006/import-data006.component';
import { Import007Component } from './import007/import007.component';


const routes: Routes = [
  { path: '', component: ImportData001Component },
  { path: 'importdata001', component: ImportData001Component },
  { path: 'importdata001detail', component: ImportData001detailComponent },
  { path: 'importdata002', component: ImportData002Component },
  { path: 'importdata003', component: ImportData003Component },
  { path: 'importdata004', component: ImportData004Component },
  { path: 'importdata005', component: ImportData005Component },
  { path: 'importdata006', component: ImportData006Component },
  { path: 'importdata007', component: Import007Component },

];

@NgModule({
  declarations: [
    ImportData001Component,
    ImportData001detailComponent,
    ImportData002Component,
    ImportData003Component,
    ImportData004Component,
    ImportData005Component,
    ImportData006Component,
    Import007Component


  ],
  imports: [
    CommonModule,
    ComponentsModule,
    DataTablesModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [RouterModule],
})
export class ImportDataModule { }
