import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-select',
  templateUrl: './button-select.component.html',
  styleUrls: ['./button-select.component.css']
})
export class ButtonSelectComponent implements OnInit {
  @Input() status : boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
