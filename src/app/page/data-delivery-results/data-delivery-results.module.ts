import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataDeliveryResultsRoutingModule } from './data-delivery-results-routing.module';
import { DataDeliveryResults001Component } from './data-delivery-results001/data-delivery-results001.component';

import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  declarations: [DataDeliveryResults001Component],
  imports: [
    CommonModule,
    DataDeliveryResultsRoutingModule,
    ComponentsModule
  ]
})
export class DataDeliveryResultsModule { }
