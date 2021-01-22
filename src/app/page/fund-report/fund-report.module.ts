import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FundReportRoutingModule } from './fund-report-routing.module';
import { FundReport001Component } from './fund-report001/fund-report001.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [FundReport001Component],
  imports: [
    CommonModule,
    ComponentsModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    FundReportRoutingModule
  ]
})
export class FundReportModule { }
