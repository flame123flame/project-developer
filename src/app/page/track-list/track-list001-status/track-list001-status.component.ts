import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-list001-status',
  templateUrl: './track-list001-status.component.html',
  styleUrls: ['./track-list001-status.component.css']
})
export class TrackList001StatusComponent implements OnInit {
  breadcrumb: any = [
    {
      label: "ระบบติดตามรายการผลต่าง",
      link: "#",
    }, {
      label: "ติดตามรายการผลต่างกองทุน",
      link: "#",
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
