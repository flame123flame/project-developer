import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FundReport001Component } from './fund-report001/fund-report001.component';
const routes: Routes = [
  { path: 'fundreport001', component: FundReport001Component },
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FundReportRoutingModule { }
