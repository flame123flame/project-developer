import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardHeaderComponent } from './card-header/card-header.component';
import { RouterModule } from '@angular/router';
import { CardUpdateComponent } from './card-update/card-update.component';

@NgModule({
  
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CardHeaderComponent,
    CardUpdateComponent,
  ],
  exports: [
    CardHeaderComponent,
    CardUpdateComponent
  ]
})
export class CardModule { }
