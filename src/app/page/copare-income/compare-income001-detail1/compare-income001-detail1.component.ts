import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compare-income001-detail1',
  templateUrl: './compare-income001-detail1.component.html',
  styleUrls: ['./compare-income001-detail1.component.css']
})
export class CompareIncome001Detail1Component implements OnInit {
  constructor() { }
  breadcrumb: any = [
    {
      label: "ระบบตรวจเปรียบเทียบ",
      link: "#",
    }, {
      label: "กระทบยอดรายได้ภาษีสรรพสามิต",
      link: "#",
    },
    {
      label: "รายละเอียดผลต่างแบ่งตามประเภทรายได้",
      link: "#",
    },
  ];
  ngOnInit(): void {
  }

}
