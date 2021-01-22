import { Component, OnInit ,ViewChild} from '@angular/core';
import * as moment from 'moment';
import { ModalAlertComponent } from 'src/app/components/modal/modal-alert/modalAlert.component';
import { CommonService } from 'src/app/service/common.service';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-import007',
  templateUrl: './import007.component.html',
  styleUrls: ['./import007.component.css']
})
export class Import007Component implements OnInit {
  @ViewChild('alertModal') modelAlert: ModalAlertComponent;

  breadcrumb: any = [
    {
      label: "นำเข้าข้อมูล",
      link: "#",
    },
    {
      label: "นำเข้าข้อมูลรายงานรายได้ภาษีจากระบบรายได้",
      link: "#",
    },
  ];

  file: any[] = [];
  listData: any[] = [];
  files: any;
  date: any
  dataTable: any;
  filesName = null;
  isBtn: boolean = true;
  isDate: boolean = true;
  dataDate: '';
  countChDate: number = 0;
  constructor(
    private httpService: HttpService,
    private commonService: CommonService,
  ) { }

  ngOnInit(): void {
    this.getDey();
  }
  dateChange(event) {
    this.dataDate = event;
    if (this.countChDate < 1) {
      this.countChDate++;
    } else {
      this.isDate = false;
    }
  }

  getDey() {
    this.httpService.doGet('excel-header-data/getcategolyname/TAX_INCOME_REPORT').subscribe((res) => {
      let newDate = new Date(res.data.uploadDate);
      const result = newDate.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      this.date = result + "  เวลา  " + moment(newDate, 'HH:mm').format('HH:mm') + " น.";
    });
  }

  uploadExcelGF() {
    const formBody = new FormData();
    formBody.append("fileName", this.filesName.toString());
    formBody.append("fileUpload", this.files);
    this.httpService.upload("gf-tax-income/upload-excel-gf", formBody, () => { }).then(res => {
      this.modelAlert.openModal();
      this.listData = res.data
      this.initDatatable();
    })
      .catch(
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

  initDatatable = () => {
    if (this.dataTable != null) {
      this.dataTable.destroy();
    }

    this.dataTable = $('#datatableIncome').DataTable({

      ordering: false,
      scrollX: true,
      lengthChange: false,
      info: false,
      pageLength: 30,
      searching: false,
      processing: false,
      serverSide: false,
      data: this.listData,
      columns: [

        {
          data: 'accountNumber', className: 'text-center'
        },
        {
          data: 'cost', className: 'text-center'
        },
        {
          data: 'unit', className: 'text-center'
        },
        {
          data: 'cost', className: 'text-center'
        },
        {
          data: 'code', className: 'text-center'
        },
        {
          data: 'year', className: 'text-center'
        },
        {
          data: 'installment', className: 'text-center'
        },
        {
          data: 'postDate', className: 'text-center'
        },
        {
          data: 'reportDate', className: 'text-center'
        },
        {
          data: 'reportNumber', className: 'text-center'
        },
        {
          data: 'refKey', className: 'text-center'
        },
        {
          data: 'bankAccount', className: 'text-center'
        },
        {
          data: 'type', className: 'text-center'
        },
        {
          data: 'refNumber', className: 'text-center'
        },
        {
          data: 'pk', className: 'text-center'
        },
        {
          data: 'lcAmnt', className: 'text-right'
        },
        {
          data: 'categorySupplies', className: 'text-center'
        },
        {
          data: 'trPrt', className: 'text-center'
        },
        {
          data: 'description', className: 'text-center'
        },
        {
          data: 'refNumber3', className: 'text-center'
        },
        {
          data: 'chargeDay', className: 'text-center'
        },
        {
          data: 'sourceMoney', className: 'text-center'
        },
        {
          data: 'budgetCode', className: 'text-center'
        },

      ],
    });

  }
}
