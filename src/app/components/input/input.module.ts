import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputCalendarComponent } from './input-calendar/input-calendar.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { InputTextComponent } from './input-text/input-text.component';

@NgModule({

  imports: [
    CommonModule,
 
    BsDatepickerModule.forRoot()
  ],
  declarations: [
    InputCalendarComponent,
    InputTextComponent,
  
  ],
  exports: [
    InputCalendarComponent,
    InputTextComponent,
   
  ],

})
export class InputModule { }
