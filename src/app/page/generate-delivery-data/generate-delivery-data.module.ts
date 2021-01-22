import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsModule } from 'src/app/components/components.module';
import { GenerateDeliveryDataRoutingModule } from './generate-delivery-data-routing.module';
import { GenerateDeliveryData001Component } from './generate-delivery-data001/generate-delivery-data001.component';


@NgModule({
  declarations: [GenerateDeliveryData001Component],
  imports: [
    CommonModule,
    GenerateDeliveryDataRoutingModule,
    ComponentsModule
  ]
})
export class GenerateDeliveryDataModule { }
