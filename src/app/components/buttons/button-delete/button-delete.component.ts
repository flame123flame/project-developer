import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'button-delete',
  templateUrl: './button-delete.component.html',
  styleUrls: ['./button-delete.component.css']
})
export class ButtonDeleteComponent implements OnInit {
  @Input() wording: string = '';
  @Input() disabled: boolean = false;
  @Input() status : boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
