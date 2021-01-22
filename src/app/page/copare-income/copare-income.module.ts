import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CopareIncomeRoutingModule } from './copare-income-routing.module';
import { CompareIncome001Component } from './compare-income001/compare-income001.component';
import { CompareIncome001Detail1Component } from './compare-income001-detail1/compare-income001-detail1.component';
import { CompareIncome001DifferenceComponent } from './compare-income001-difference/compare-income001-difference.component';
import { CompareIncome002Component } from './compare-income002/compare-income002.component';
import { CompareIncome002detailComponent } from './compare-income002detail/compare-income002detail.component';
import { ComponentsModule } from 'src/app/components/components.module';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [CompareIncome001Component, CompareIncome001Detail1Component, CompareIncome001DifferenceComponent, CompareIncome002Component, CompareIncome002detailComponent],
  imports: [
    CommonModule,
    CopareIncomeRoutingModule,
    ComponentsModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class CopareIncomeModule { }
