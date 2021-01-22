import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-print',
  templateUrl: './button-print.component.html',
  styleUrls: ['./button-print.component.css']
})
export class ButtonPrintComponent implements OnInit {
@Input() status : boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
