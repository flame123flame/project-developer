import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ResponseData } from 'src/app/common/models/response-data.model';
import { CommonService } from 'src/app/service/common.service';
import { HttpService } from 'src/app/service/http.service';

const URL = {

    GET: "importreportdeposit/get-all-fundreport"
  }

@Component({
    selector: 'app-fund-report001',
    templateUrl: './fund-report001.component.html',
    styleUrls: ['./fund-report001.component.css']
})
export class FundReport001Component implements OnInit, AfterViewInit {
    dataTable02: any;

    constructor(
        private commonService: CommonService,
        private httpClient : HttpService
        ) { }

    dataTable: any;
    showtable01 = true;
    showtable02 = false;
    textH: String = 'รายละเอียด';

    breadcrumb: any = [
        {
            label: "ออกรายงานส่งกองทุน",
            link: "#",
        },
        {
            label: "ออกรายงานส่งกองทุนสรุปยอดการนำส่งเงินบำรุงองค์กรฯ",
            link: "#",
        }
    ];
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
    mounts = [
        {
            mount: 'มกราคม'
        },
        {
            mount: 'กุมพาพันธ์'
        },
    ]
    users = [
        {
            username: "องค์กรฯ"

        }]



    data_detail: any[] = []
    data_sum: any[] = []

    
    getList() {
        this.httpClient.doPost(URL.GET, {}).subscribe((res: ResponseData<any>) => {
          this.data_detail = res.data;
          this.initDataTable01();
        })
      }

    

    ngOnInit(): void {
        this.getList();

    }
    ngAfterViewInit(): void {
        setTimeout(() => {
            this.initDataTable01();
        }, 100);

    }
    initDataTable(): void {
        if (this.dataTable != null) {
            this.dataTable.destroy();
            console.log("--->>")
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
            data: this.data_sum,
            columns: [{}

            ],
            createdRow: function (row, data: any, dataIndex) {
                if (data.no == '*') {
                    // $(row).addClass('bg-red');
                    $(row).css('background-color', '#53a5d8');
                }
            }
        }
        );
    }

    initDataTable01(): void {
        if (this.dataTable02 != null) {
            this.dataTable02.destroy();
        }
        this.dataTable02 = $('#datatable01').DataTable({

            pagingType: 'full_numbers',
            ordering: false,
            scrollX: false,
            lengthChange: false,
            info: false,
            pageLength: 15,
            searching: false,
            processing: true,
            serverSide: false,
            data: this.data_detail,
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
                  },  {
                    data: 'debit',
                    className: 'text-right',
          
                  },

            ],
            // createdRow: function (row, data: any, dataIndex) {
            //     if (data.date == '-') {
            //         // $(row).addClass('bg-red');
            //         $(row).css('background-color', '#53a5d8');
            //     }
            // }
        }
        );
    }
    clickShowTable01() {
        this.textH = 'รายละเอียด'
        this.showtable01 = true;
        this.showtable02 = false;
        setTimeout(() => {
            this.initDataTable01();
        }, 100);
    }
    clickShowTable02() {
        this.textH = 'ผลรวม'
        this.showtable02 = true;
        this.showtable01 = false;
        setTimeout(() => {
            this.initDataTable();
        }, 100);
    }
}
