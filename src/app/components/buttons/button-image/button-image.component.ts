import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'button-image',
  templateUrl: './button-image.component.html',
  styleUrls: ['./button-image.component.css']
})
export class ButtonImageComponent implements OnInit {
  @Input() wording: string = 'เพิ่มรูปภาพ';
  @Input() status : boolean = false;
  @Input() disabled: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
