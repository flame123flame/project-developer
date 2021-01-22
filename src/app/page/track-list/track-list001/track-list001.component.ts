import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-track-list001',
  templateUrl: './track-list001.component.html',
  styleUrls: ['./track-list001.component.css']
})
export class TrackList001Component implements OnInit {

  breadcrumb: any = [
    {
      label: "ระบบติดตามรายการผลต่าง",
      link: "#",
    }, {
      label: "ติดตามรายการผลต่างรายได้",
      link: "#",
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
