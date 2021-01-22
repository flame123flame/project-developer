import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'button-search',
  templateUrl: './button-search.component.html',
  styleUrls: ['./button-search.component.css']
})
export class ButtonSearchComponent implements OnInit {
  @Input() wording: string = 'ค้นหา';
  @Input() disabled: boolean = false;
  @Input() status : boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
