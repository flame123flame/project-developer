import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CompareIncome001Detail1Component } from './compare-income001-detail1/compare-income001-detail1.component';
import { CompareIncome001DifferenceComponent } from './compare-income001-difference/compare-income001-difference.component';
import { CompareIncome001Component } from './compare-income001/compare-income001.component';
import { CompareIncome002Component } from './compare-income002/compare-income002.component';
import { CompareIncome002detailComponent } from './compare-income002detail/compare-income002detail.component';

const routes: Routes = [
  { path: 'compareincome001', component: CompareIncome001Component },
  { path: 'compareincome002', component: CompareIncome002Component },
  { path: 'compareincomedetail001', component: CompareIncome001Detail1Component },
  { path: 'compareincome002detail', component: CompareIncome002detailComponent},
  { path: 'compareincomedifference001', component: CompareIncome001DifferenceComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CopareIncomeRoutingModule { }
