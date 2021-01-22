import { Component, OnInit ,ViewChild} from '@angular/core';
import * as moment from 'moment';
import { ResponseData } from 'src/app/common/models/response-data.model';
import { ModalAlertComponent } from 'src/app/components/modal/modal-alert/modalAlert.component';
import { HttpService } from 'src/app/service/http.service';
const URL = {
  save_excel: "import-other-deposit/import-excel",
  GET_ALL: "import-other-deposit/get-all"
}
@Component({
  selector: 'app-import-data006',
  templateUrl: './import-data006.component.html',
  styleUrls: ['./import-data006.component.css']
})
export class ImportData006Component implements OnInit {
  @ViewChild('alertModal') modelAlert: ModalAlertComponent;
  breadcrumb: any = [
    {
      label: "นำเข้าข้อมูล",
      link: "#",
    },
    {
      label: "นำเข้าข้อมูลรับเงินฝากอื่น",
      link: "#",
    },

  ];

  file: any[] = [];
  files: any;
  date: any
  filesName: any
  account: '';
  agencyCode: '';
  data_ta03: any[] = [];
  dataTable03: DataTables.Api;
  isBtn: boolean = true;
  isDate: boolean = true;
  dataDate: '';
  countChDate: number = 0;
  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getDey();
  }

  getList() {
    this.httpService.doPost(URL.GET_ALL, {}).subscribe((res: ResponseData<any>) => {
      this.data_ta03 = res.data;
      this.account = res.data[0].account;
      this.agencyCode = res.data[1].agencyCode;
      this.initDataTable03();
    })
  }

  initDataTable03(): void {
    if (this.dataTable03 != null) {
      this.dataTable03.destroy();
    }
    this.dataTable03 = $('#table03').DataTable({
      pagingType: 'full_numbers',
      ordering: false,
      scrollX: false,
      lengthChange: false,
      info: false,
      pageLength: 15,
      searching: false,
      processing: true,
      serverSide: false,
      data: this.data_ta03,
      columns: [
        {
          data: 'account',
          className: 'text-center',

        }, {
          data: 'setDeposit',
          className: 'text-center',

        }, {
          data: 'disbursement',
          className: 'text-center',

        }, {
          data: 'constFrom',
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
          data: 'postDate',
          className: 'text-center',

        }, {
          data: 'docDate',
          className: 'text-center',

        }, {
          data: 'docNum',
          className: 'text-center',

        }, {
          data: 'refKey',
          className: 'text-center',

        }, {
          data: 'deposit',
          className: 'text-center',

        }, {
          data: 'typeDeposit',
          className: 'text-center',

        }, {
          data: 'refDeposit',
          className: 'text-center',

        }, {
          data: 'primKey',
          className: 'text-center',

        }, {
          data: 'currentInCountry',
          className: 'text-center',

        }, {
          data: 'description',
          className: 'text-center',

        }, {
          data: 'calculateDate',
          className: 'text-center',

        }, {
          data: 'refMoney',
          className: 'text-center',

        }, {
          data: 'budgetCode',
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
    console.log(formBody)
    this.httpService.upload(URL.save_excel, formBody, (response) => {
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
  getDey() {
    this.httpService.doGet('excel-header-data/getcategolyname/OTHER_DEPOSITS').subscribe((res) => {
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
