import { Component, OnInit, ɵCodegenComponentFactoryResolver } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseData } from 'src/app/common/models/response-data.model';
import { HttpService } from 'src/app/service/http.service';
import { code } from '../../../common/constant/cosntant'
// const URL = {
//   getAll :"POST /api/fund-income/get-all"
// }
interface dataMock {
  period: string,
  dateOfDeposit: string,
  dateOfRest: string,
  depositAccount: string,
  determination: string,
  lcAmnt: string,
  debit: string,
  amountInCurrencies: string,
  diff: string,
}
const URL = {
  GET_ALL_TEASURY: "importexcel/get-all",
  GET_ALL_OTHER: "import-other-deposit/get-all",
  getAll: "fund-income/get-all"
}
@Component({
  selector: 'app-compare-income002',
  templateUrl: './compare-income002.component.html',
  styleUrls: ['./compare-income002.component.css']
})
export class CompareIncome002Component implements OnInit {
  breadcrumb: any = [
    {
      label: "ระบบตรวจเปรียบเทียบ",
      link: "#",
    }
  ];
  DataReq: any = {
    mount: '',
    year: '',
    constFrom: '',
    deposit: ''
  }
  listOther: any[] = [];
  listTeasury: any[] = [];
  listYears: any[] = [];

  code: any = code;
  
  monthList: any = [
    { value: 1, textThai: "มกราคม", textEng: "January" },
    { value: 2, textThai: "กุมภาพันธ์", textEng: "Febuary" },
    { value: 3, textThai: "มีนาคม", textEng: "March" },
    { value: 4, textThai: "เมษายน", textEng: "April" },
    { value: 5, textThai: "พฤษภาคม", textEng: "May" },
    { value: 6, textThai: "มิถุนายน", textEng: "June" },
    { value: 7, textThai: "กรกฎาคม", textEng: "July" },
    { value: 8, textThai: "สิงหาคม", textEng: "August" },
    { value: 9, textThai: "กันยายน", textEng: "September" },
    { value: 10, textThai: "ตุลาคม", textEng: "October" },
    { value: 11, textThai: "พฤศจิกายน", textEng: "November" },
    { value: 12, textThai: "ธันวาคม", textEng: "December" },
  ]

  data_k: any[] = [
  ]
  dataTable: any;
  constructor(private router: Router, private httpService: HttpService) { }

  ngOnInit(): void {
    // this.initDataTable();
    // this.clickBtn();
    // this.onClickList();
    this.addYears();
    this.DataReq = {
      mount: '',
      year: '',
      constFrom: '',
      deposit: ''
    }
  }
  addYears() {
    let nowDate = new Date().getFullYear();

    for (let index = 0; index < 10; index++) {
      this.listYears.push(String(nowDate--))
    }
    // console.log(this.listYears);

  }
  initDataTable(): void {
    if (this.dataTable != null) {
      this.dataTable.destroy();
    }
    this.dataTable = $('#datatable02').DataTable({
      pagingType: 'full_numbers',
      ordering: false,
      scrollX: false,
      lengthChange: false,
      info: false,
      pageLength: 15,
      searching: false,
      processing: true,
      serverSide: false,
      data: this.data_k,
      columns: [

        {
          data: 'period',
          className: 'text-center',

        },
        {
          data: 'dateOfDeposit',
          className: 'text-center',

        }, {
          data: 'dateOfRest',
          className: 'text-center',

        }, {
          data: 'depositAccount',
          className: 'text-center',

        }, {
          data: 'determination',
          className: 'text-center',

        }, {
          data: 'lcAmnt',
          className: 'text-right',

        }, {
          data: 'debit',
          className: 'text-right',

        }, {
          data: 'amountInCurrencies',
          className: 'text-right',

        }, {
          data: 'diff',
          className: 'text-center',
          //           className: "text-center",
          //           render: (data, type, full, meta) => {
          // if(full.diff){}
          //             return full.diff;
          //           }
        },
        {
          className: "text-center",
          render: (data, type, full, meta) => {

            return `<button type="button" class="btn btn-info btn-sm" id="edit" ><i class="fa fa-search" aria-hidden="true"></i> รายละเอียดผลต่าง</button>`;
          }
        }

      ],
      createdRow: function (row, data: dataMock, dataIndex) {
        if (data.diff != '-') {
          // $(row).addClass('bg-red');
          $(row).css('color', 'red');
        }
      }
    });
    this.dataTable.on('click', 'td > button#edit', (event) => {
      const data = this.dataTable.row($(event.currentTarget).closest('tr')).data();
      this.router.navigate(['/compare/compareincome002detail'],{
        queryParams:{
          otherCode : data.otherCode,
          reportCode:data.reportCode,
          treasuryCode:data.treasuryCode
        }})
    });
  }
  clickBtn() {
    
  }
  onClickList() {

    this.httpService.doPost(URL.getAll,{}).subscribe((res: ResponseData<any>) => {
      this.data_k = res.data;

      this.initDataTable();
    })
  }
}
