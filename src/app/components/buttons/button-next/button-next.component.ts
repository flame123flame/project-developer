import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'button-next',
  templateUrl: './button-next.component.html',
  styleUrls: ['./button-next.component.css']
})
export class ButtonNextComponent implements OnInit {

  @Input() status : boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
