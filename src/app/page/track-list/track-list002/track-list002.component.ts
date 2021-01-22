import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-list002',
  templateUrl: './track-list002.component.html',
  styleUrls: ['./track-list002.component.css']
})
export class TrackList002Component implements OnInit {
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
