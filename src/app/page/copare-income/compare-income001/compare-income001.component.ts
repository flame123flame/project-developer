import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
// import { url } from 'inspector';
import { ResponseData } from 'src/app/common/models/response-data.model';
import { InputCalendarComponent } from 'src/app/components/input/input-calendar/input-calendar.component';
import { HttpService } from 'src/app/service/http.service';
import { code } from "../../../../app/common/constant/cosntant";

const URL = {
  GET:"gf-excise-tax/get-income",
  GET_ALL: 'master/departments/get-departments-all',
  GETLOV : 'lov/get-all'
}

@Component({
  selector: 'app-compare-income001',
  templateUrl: './compare-income001.component.html',
  styleUrls: ['./compare-income001.component.css']
})
export class CompareIncome001Component implements OnInit {
  @ViewChild('calendarStart') calendarStart: InputCalendarComponent;
  listCode= code;
  constant = code;
  agencyList = [];
  getDataLov = [];
  getlist : any;
  startDate: any;
  sendCode  : any
  endDate:any;
  breadcrumb: any = [
    {
      label: "ระบบตรวจเปรียบเทียบ",
      link: "#",
    }, {
      label: "กระทบยอดรายได้ภาษีสรรพสามิต",
      link: "#",
    },
  ];

  constructor(
    private httpService: HttpService
    , private router: Router
  ) {
  }
  ngOnInit(): void {
   this.getAgency();
   this.getLov();
  }

  clickSearch : any[
    
  ]
  
  onClickCheck(){

    let getlist1 = this.sendCode;
    this.getlist = getlist1;
    this.httpService.doPost(URL.GET, {dateEnd:this.endDate,dateStart:this.startDate}).subscribe((res: ResponseData<any>) => {
      console.log(this.startDate,this.endDate);
      for (let i =0; i < this.listCode.length;i++){
        for (let index = 0; index < res.data.length; index++) {
          if (this.listCode[i].code_2 == res.data[index].refKey) {
            this.listCode[i]={
              code_1: this.listCode[i].code_1,
              detail:this.listCode[i].detail,
              code_2: this.listCode[i].code_2,
              gf: res.data[index].income,
              ex:  res.data[index].excise,
              diff: res.data[index].sum
            }
          }
        }
      }
      // console.log(this.listCode)
      console.log(res.data);
    })
  }
  goTo(item) {
    this.router.navigate(['/compare/compareincomedifference001' + item.code_2 + item.detail], {
      queryParams: {
        startDate: this.startDate,
        endDate: this.endDate
      }
    });
  }
  dateChange1(event) {
    this.startDate = event;
    // this.formGroup.get(formControlName).patchValue(event);
  }

  dateChange2(event){
    this.endDate=event;
  }
 
  onSelectBankmain(e) {
    this.sendCode = e.target.value
  }
 

  newArray(size) {
    return Array(size)
  }

  getColor(number) {
    let decimalNumber = 12 + number
    let hexString = decimalNumber.toString(16);
    return `#${hexString}${hexString}${hexString}`
  }

  
   getAgency() {
    this.httpService.doGet(URL.GET_ALL).subscribe((res: ResponseData<any>) => {
      console.log(res)
        this.agencyList = res.data;
    });
  }
 
  getLov() {
    this.httpService.doGet(URL.GETLOV).subscribe((res: ResponseData<any>) => {
      console.log(res)
        this.getDataLov = res.data;
     
    });
  }

}

