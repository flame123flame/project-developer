import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { ResponseData } from 'src/app/common/models/response-data.model'
import { ModalAlertComponent } from 'src/app/components/modal/modal-alert/modalAlert.component';
import { HttpService } from 'src/app/service/http.service';

const URL = {
  importexcel: "importreportdeposit/save-excel",
  GET: "importreportdeposit/get-all",
  GETHDR: "importreportdeposit/get-excel-head-code/"
}

@Component({
  selector: 'app-import-data004',
  templateUrl: './import-data004.component.html',
  styleUrls: ['./import-data004.component.css']
})


export class ImportData004Component implements OnInit {
  @ViewChild('alertModal') modelAlert: ModalAlertComponent;
 
  file: any[] = [];
  files: any;
  filesName: any;
  date: any;
  accountDeposit: any;
  accountDepositSplit: any;
  ownerDeposit: any;
  ownerDepositSplit: any;
  programName: any;
  programNameSplit: any;
  userName: any;
  userNameSplit: any;
  startDate: any;
  startDateSplit: any;
  typeAccount: any;
  typeAccountSplit: any;
  agencyCode: any;
  agencyCodeSplit: any;
  agencyName: any;
  agencyNameSplit: any;
  reportDate: any;
  reportTime: any;
  datacode: any;
  datenow: any;
  isBtn: boolean = true;
  isDate: boolean = true;
  dataDate: '';
  data_ta02: any[] = []
  dataTable02: any;
  countChDate: number = 0;
  constructor(
    private httpClient: HttpService,
  ) {

  }
  breadcrumb: any = [
    {
      label: "นำเข้าข้อมูล",
      link: "#",
    },
    {
      label: "นำเข้าข้อมูลรายงานแสดงการเคลื่อนไหวเงินฝากกระทรวงการคลัง",
      link: "#",
    },

  ];
  ngOnInit(): void {
    this.getDey();

    // this.getList();
    // this.getListHdr();

    // this.httpClient.doGet(URL.GETHDR + this.datacode).subscribe((res: ResponseData<any>) => {
    //   if (res.status === 'SUCCESS') {
    //       let newDate = new Date(res.data.uploadDate);
    //       const result = newDate.toLocaleDateString('th-TH', {
    //         year: 'numeric',
    //         month: 'long',
    //         day: 'numeric',
    //       })
    //       this.datenow= result+"  เวลา  "+moment(newDate,'HH:mm').format('HH:mm')+" น.";
    //       console.log(this.datenow);

    // }});

  }
  initDataTable02(): void {
    if (this.dataTable02 != null) {
      this.dataTable02.destroy();
    }
    this.dataTable02 = $('#table02').DataTable({
      pagingType: 'full_numbers',
      ordering: false,
      scrollX: false,
      lengthChange: false,
      info: false,
      pageLength: 15,
      searching: false,
      processing: true,
      serverSide: false,
      data: this.data_ta02,
      columns: [
        {
          data: 'postDate',
          className: 'text-center',

        },
        {
          data: 'idReport',
          className: 'text-center',

        }, {
          data: 'typeReport',
          className: 'text-center',

        }, {
          data: 'idRefer',
          className: 'text-center',

        }, {
          data: 'subName',
          className: 'text-center',

        }, {
          data: 'deterMination',
          className: 'text-center',

        }, {
          data: 'payUnit',
          className: 'text-center',

        }, {
          data: 'debit',
          className: 'text-right',

        }, {
          data: 'credit',
          className: 'text-right',
        }, {
          data: 'balance',
          className: 'text-center',
        }

      ]
    }
    );
  }
  dateChange(event) {
    this.dataDate = event;
    if (this.countChDate < 1) {
      this.countChDate++;
    } else {
      this.isDate = false;
    }
  }



  uploadExcel() {
    const formBody = new FormData();
    formBody.append("fileName", this.files.name);
    formBody.append("fileUpload", this.files);
    this.httpClient.upload(URL.importexcel, formBody, (response) => {
    }).then((res: ResponseData<any>) => {
      if (res.status == "SUCCESS") {
        this.getList();
        this.datacode = res.data.excelHeadCode;
        this.getListHdr();
        this.getDey();
        this.modelAlert.openModal();
      }
    }
    );
  }
  onChangeUpload = (event: any) => {
    this.files = event.target.files[0]
    this.filesName = event.target.files[0].name
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const f = {
          name: event.target.files[0].name,
          type: event.target.files[0].type,
          value: e.target.result
        };
        this.file = [f];
      };
      setTimeout(() => {
      }, 150);
    }
    this.isBtn = false;
  }
  getList() {
    this.httpClient.doPost(URL.GET, {}).subscribe((res: ResponseData<any>) => {
      this.data_ta02 = res.data;
      this.initDataTable02();
    })
  }

  getListHdr() {
    this.httpClient.doGet(URL.GETHDR + this.datacode).subscribe((res: ResponseData<any>) => {
      this.accountDeposit = res.data.accountDeposit;
      this.ownerDeposit = res.data.ownerDeposit;
      this.programName = res.data.programName;
      this.userName = res.data.userName;
      this.startDate = res.data.startDate;
      this.typeAccount = res.data.typeAccount;
      this.agencyCode = res.data.agencyCode;
      this.reportDate = res.data.reportDate;

      var test1 = this.accountDeposit.split(":");
      var test2 = this.ownerDeposit.split(":");
      var test5 = this.startDate.split("ตั้งแต่");
      var test6 = this.typeAccount.split(":");
      var test7 = this.agencyCode.split(" ");

      this.accountDepositSplit = test1[1];
      this.ownerDepositSplit = test2[1];
      this.startDateSplit = test5[1];
      this.typeAccountSplit = test6[1];
      this.agencyCodeSplit = test7[1];
    })
  }

  getDey() {
    this.httpClient.doGet('excel-header-data/getcategolyname/IMPORT_TAX_INCOME_REPORT').subscribe((res) => {
      console.log("res", res.data);
      let newDate = new Date(res.data.uploadDate);
      const result = newDate.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      this.date = result + "  เวลา  " + moment(newDate, 'HH:mm').format('HH:mm') + " น.";
    });
  }
}
