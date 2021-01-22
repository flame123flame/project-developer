import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'card-update',
  templateUrl: './card-update.component.html',
  styleUrls: ['./card-update.component.css']
})
export class CardUpdateComponent implements OnInit {

  @Input() date : string = '';
  @Input() textHeader : string = '';
  constructor() { }

  ngOnInit(): void {
  }

}
