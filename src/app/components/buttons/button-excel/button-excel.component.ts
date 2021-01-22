import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'button-excel',
  templateUrl: './button-excel.component.html',
  styleUrls: ['./button-excel.component.css']
})
export class ButtonExcelComponent implements OnInit {
  @Input() wording: string = 'อัพโหลด CSV';
  @Input() disabled: boolean = false;
  @Input() status : boolean = false;
  constructor() { }

  ngOnInit() {
  }

}
