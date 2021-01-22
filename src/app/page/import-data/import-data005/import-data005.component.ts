import { Component, OnInit, ViewChild } from '@angular/core';
import * as moment from 'moment';
import { ResponseData } from 'src/app/common/models/response-data.model';
import { ModalAlertComponent } from 'src/app/components/modal/modal-alert/modalAlert.component';
import { HttpService } from 'src/app/service/http.service';
const URL = {
  save: "importexcel/save-excel",
  GET_ALL: "importexcel/get-all"
}
@Component({
  selector: 'app-import-data005',
  templateUrl: './import-data005.component.html',
  styleUrls: ['./import-data005.component.css']
})
export class ImportData005Component implements OnInit {
  @ViewChild('alertModal') modelAlert: ModalAlertComponent;

  breadcrumb: any = [
    {
      label: "นำเข้าข้อมูล",
      link: "#",
    },
    {
      label: "นำเข้าข้อมูลพักเงินฝากธนาคารของคลัง",
      link: "#",
    },

  ];
  countChDate: number = 0;
  data_ta01: any[] = []
  dataTable01: DataTables.Api;
  file: any[] = [];
  files: any;
  date: any;
  account: '';
  agencyCode: '';
  filesName: any;
  isBtn: boolean = true;
  isDate: boolean = true;
  dataDate: '';
  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
    this.getDey();
  }
  initDataTable01(): void {
    if (this.dataTable01 != null) {
      this.dataTable01.destroy();
    }
    this.dataTable01 = $('#table01').DataTable({
      pagingType: 'full_numbers',
      ordering: false,
      scrollX: false,
      lengthChange: false,
      info: false,
      pageLength: 15,
      searching: false,
      processing: true,
      serverSide: false,
      data: this.data_ta01,
      columns: [
        {
          data: 'account',
          className: 'text-center',

        },
        {
          data: 'determination',
          className: 'text-center',

        }, {
          data: 'code',
          className: 'text-center',

        }, {
          data: 'years',
          className: 'text-center',

        }, {
          data: 'installment',
          className: 'text-center',

        }, {
          data: 'document',
          className: 'text-center',

        }, {
          data: 'documentDate',
          className: 'text-center'
        }, {
          data: 'postDate',
          className: 'text-center'
        }, {
          data: 'depositAccount',
          className: 'text-center'
        }, {
          data: 'sourceMoney',
          className: 'text-center'
        }, {
          data: 'typeDeposit',
          className: 'text-center'
        }, {
          data: 'ref1',
          className: 'text-center'
        }, {
          data: 'ref2',
          className: 'text-center'
        }, {
          data: 'ref3',
          className: 'text-center'
        }, {
          data: 'primkey',
          className: 'text-center'
        }, {
          data: 'lcAmnt',
          className: 'text-center'
        }, {
          data: 'clmgDoc',
          className: 'text-center'
        }, {
          data: 'discription',
          className: 'text-center'
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
    this.httpService.upload(URL.save, formBody, (response) => {
    }).then((res: ResponseData<any>) => {
      if (res.status == "SUCCESS") {
        this.getList();
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
    this.httpService.doPost(URL.GET_ALL, {}).subscribe((res: ResponseData<any>) => {
      this.data_ta01 = res.data;
      this.account = res.data[0].account;
      this.agencyCode = res.data[1].agencyCode;
      this.initDataTable01();

    })
  }
  getDey() {
    this.httpService.doGet('excel-header-data/getcategolyname/BREAK_BANK_DEPOSIT').subscribe((res) => {
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

