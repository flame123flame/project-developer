import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResponseData } from 'src/app/common/models/response-data.model';
import { HttpService } from 'src/app/service/http.service';
const URL = {
  GET_ALL3: "import-other-deposit/get-all",
  GET_ALL2: "importreportdeposit/get-all",
  GET_ALL1: "importexcel/get-all"
}
@Component({
  selector: 'app-compare-income002detail',
  templateUrl: './compare-income002detail.component.html',
  styleUrls: ['./compare-income002detail.component.css']
})
export class CompareIncome002detailComponent implements OnInit {
  dataTable: any;
  dataTable01: DataTables.Api;
  dataTable02: any;
  dataTable03: any;
  dataQuery: any;
  constructor(private route: ActivatedRoute, private httpService: HttpService) {
    this.dataQuery = this.route.snapshot.queryParams
  }
  data_ta01: any[] = []
  data_ta02: any[] = []
  data_ta03: any[] = []

  ngOnInit(): void {
    this.getList01();
    this.getList02();
    this.getList03();
    console.log(this.dataQuery);

  }
  getList03() {
    this.httpService.doPost(URL.GET_ALL3, { code: this.dataQuery.otherCode}).subscribe((res: ResponseData<any>) => {
      this.data_ta03 = res.data;
      this.initDataTable03();
    })
  }
  getList02() {
    this.httpService.doPost(URL.GET_ALL2,  { code: this.dataQuery.reportCode}).subscribe((res: ResponseData<any>) => {
      this.data_ta02 = res.data;
      this.initDataTable02();
    })
  }
  getList01() {
    this.httpService.doPost(URL.GET_ALL1, {code: this.dataQuery.treasuryCode}).subscribe((res: ResponseData<any>) => {
      this.data_ta01 = res.data;
      this.initDataTable01();

    })
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
      paging: false,
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
          className: 'text-center',
          render(data, type, full, meta) {
            var color = 'red';
            return '<span style="color:' + color + '">' + data + '</span>';
          }
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
      paging: false,
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
          render(data, type, full, meta) {
            var color = 'red';
            return '<span style="color:' + color + '">' + data + '</span>';
          }

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
      paging: false,
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

        },{
          data: 'constFrom',
          className: 'text-center',

        },{
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
          render(data, type, full, meta) {
            var color = 'red';
            return '<span style="color:' + color + '">' + data + '</span>';
          }
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
}
