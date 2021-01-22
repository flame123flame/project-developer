import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-edit',
  templateUrl: './button-edit.component.html',
  styleUrls: ['./button-edit.component.css']
})
export class ButtonEditComponent implements OnInit {
@Input() status :boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
