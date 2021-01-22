import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DataDeliveryResults001Component } from './data-delivery-results001/data-delivery-results001.component';

const routes: Routes = [
  { path: 'datadeliveryresults001', component: DataDeliveryResults001Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DataDeliveryResultsRoutingModule { }
