import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-list002-status',
  templateUrl: './track-list002-status.component.html',
  styleUrls: ['./track-list002-status.component.css']
})
export class TrackList002StatusComponent implements OnInit {

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
