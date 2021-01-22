import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GenerateDeliveryData001Component } from './generate-delivery-data001/generate-delivery-data001.component';

const routes: Routes = [
  { path: 'generatedeliverydata001', component: GenerateDeliveryData001Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GenerateDeliveryDataRoutingModule { }
