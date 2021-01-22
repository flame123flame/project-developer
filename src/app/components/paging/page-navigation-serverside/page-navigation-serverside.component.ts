import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-page-navigation-serverside',
  templateUrl: './page-navigation-serverside.component.html',
  styleUrls: ['./page-navigation-serverside.component.css']
})
export class PageNavigationServersideComponent implements OnInit {

  private _count = 1;
  private _itemsPerPage = 10;
  newsList: [] = [];
  config: any;
  collection: any;

  // tslint:disable: no-output-on-prefix
  @Output() onTabChangePage: EventEmitter<number> = new EventEmitter();

  @Input()
  set count(value: number) {
    console.log('_count', value);
    this._count = value;
    this.setData();
  }

  @Input()
  set itemsPerPage(value: number) {
    console.log('itemsPerPage', value);

    this._itemsPerPage = value;
    this.setData();
  }

  constructor() {
    this.setData();
  }

  setData() {
    this.collection = {
      count: this._count,
      data: [],
    };

    this.config = {
      itemsPerPage: this._itemsPerPage,
      currentPage: 1,
      totalItems: this.collection.count,
    };
  }

  ngOnInit(): void { }

  pageChanged(event) {
    this.config.currentPage = event;
    this.onTabChangePage?.emit(event);
  }

}
