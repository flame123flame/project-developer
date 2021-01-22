import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import * as moment from 'moment';
interface monthForm {
  excise?: String,
  income?: String,
  mmyyyy?: String,
  sum?: any
}
interface income {
  accountNumber?: String,
  set?: String,
  unit?: String,
  cost?: String,
  code?: String,
  year?: String,
  installment?: String,
  postDate?: Date,
  reportDate?: String,
  reportNumber?: String,
  refKey?: String,
  type?: String,
  refNumber?: String,
  pk?: String,
  lcAmnt?: String,
  income?: String,
  description?: String,
  sourceMoney?: String,
  budgetCode?: String,
}
interface excise {
  taxCode?: String,
  taxList?: String,
  exciseTax?: String,
  stampCost?: String,
  recompense?: String,
  stateIncome?: String,
  interior?: String,
  toInterior?: String,
  cost?: String,
  total?: String,
  cases?: String,
  income?: String,
  bribe?: String,
  prizeMoney?: String,
  caseFines?: String,
  depart?: String,
  docDate?: String,
}
@Component({
  selector: 'app-compare-income001-difference',
  templateUrl: './compare-income001-difference.component.html',
  styleUrls: ['./compare-income001-difference.component.css']
})
export class CompareIncome001DifferenceComponent implements OnInit {
 
breadcrumb: any = [
  {
    label: "ระบบตรวจเปรียบเทียบ",
    link: "#",
  }, {
    label: "กระทบยอดรายได้ภาษีสรรพสามิต",
    link: "#",
  },
  {
    label: "รายละเอียดผลต่าง",
    link: "#",
  },
];
dateStart: Date;
dateEnd: Date;
dateStartStr: String;
dateEndStr: String;
showTab01 = true;
showTab02 = false;
typeName: any
type: any
monthDataList: monthForm[] = []
incomeList: income[] = []
exciseList: excise[] = []
month: any[] = ["ม.ค.", "ก.พ.", "มี.ค.", "เม.ย.", "พ.ค.", "มิ.ย.", "ก.ค.", "ส.ค.", "ก.ย.", "ต.ค.", "พ.ย.",
  "ธ.ค."]
constructor(private ajax: HttpService,
  private route: ActivatedRoute,) { }


  ngOnInit(): void {
    this.dateStart = this.route.snapshot.queryParams['startDate'] || new Date();
    this.dateEnd = this.route.snapshot.queryParams['endDate'] || new Date();
    this.type = this.route.snapshot.paramMap.get('id').substring(0, 3)
    this.typeName = this.route.snapshot.paramMap.get('id').substring(3)
    this.getMonth()
    console.log(this.dateStart + "     " + this.dateEnd)

    this.dateStartStr = moment(this.dateStart, "YYYY-MM-DD").format("DD-MM-YYYY").toString()
    this.dateEndStr = moment(this.dateEnd, "YYYY-MM-DD").format("DD-MM-YYYY").toString()
  }
  getMonth() {
    this.ajax.doPost("gf-excise-tax/get-month ", { type: this.type, dateStart: this.dateStart, dateEnd: this.dateEnd }).subscribe(res => {
      this.monthDataList = res.data
    })
  }
  buttonShowTab01(item) {
    let monthIndex
    let textA = item.mmyyyy.split(".");
    let text = textA[0] + "." + textA[1] + ".";
    let yearStr = "25" + textA[2]
    let year = parseInt(yearStr) - 543
    for (let index = 0; index < this.month.length; index++) {
      if (text == this.month[index]) {
        monthIndex = index + 1
        if (monthIndex < 10) {
          monthIndex = "0" + monthIndex
        }
        break;
      }
    }
    this.ajax.doPost("gf-tax-income/get-one-month", { mmyyyy: monthIndex + "-" + year, type: this.type, dateStart: this.dateStart, dateEnd: this.dateEnd }).subscribe(res => {
      console.log(res.data)
      this.incomeList = res.data
    })
    this.showTab01 = true;
    this.showTab02 = false;

  }
  buttonShowTab02(item) {
    let monthIndex
    let textA = item.mmyyyy.split(".");
    let text = textA[0] + "." + textA[1] + ".";
    let yearStr = "25" + textA[2]
    let year = parseInt(yearStr) - 543
    for (let index = 0; index < this.month.length; index++) {
      if (text == this.month[index]) {
        monthIndex = index + 1
        if (monthIndex < 10) {
          monthIndex = "0" + monthIndex
        }
        break;
      }
    }
    this.ajax.doPost("gf-excise-tax/get-one-month", { mmyyyy: monthIndex + "-" + year, type: this.type, dateStart: this.dateStart, dateEnd: this.dateEnd }).subscribe(res => {
      console.log(res.data)
      this.exciseList = res.data
    })
    this.showTab01 = false;
    this.showTab02 = true;
  }
}
