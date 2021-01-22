import { Component, OnInit } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { PaginateRequest, PaginateSort } from 'src/app/_model/PaginateRequest';
import { Utils } from 'src/app/common/helper';
import { ResponseData } from 'src/app/common/models/response-data.model';
import * as moment from 'moment';

const URL = {
  GET: "excel-header-data/paginate",
  GET_DATE: "excel-header-data/getcategolyname/"
}

@Component({
  selector: 'app-import-data001',
  templateUrl: './import-data001.component.html',
  styleUrls: ['./import-data001.component.css']
})
export class ImportData001Component implements OnInit {

  datenow:any;
  dataTable: any;
  start = 0;
  dataList: any[] = [];
  search: any = {
    name: "",
    department: ""
  }
  paginateRequset: PaginateRequest = new PaginateRequest();
  breadcrumb: any = [
    {
      label: "นำเข้าข้อมูล",
      link: "#",
    },

  ];

  listMenu : any = [
    {
      menu:"นำเข้าข้อมูลเปรียบเทียบรายได้ภาษีสรรพสามิต",
      function: this.clickButton01(),
      active:true

    },
    {
      menu:"นำเข้าข้อมูลเปรียบเทียบรายได้กองทุนและนำส่งกองทุน",
      function: this.clickButton02(),
      active:false
    }
  ]


  checkButton = false;
  checkButton01 = true;
  textH: String = 'นำเข้าข้อมูลเปรียบเทียบรายได้ภาษีสรรพสามิต';
  constructor(
    private http: HttpService,
  ) { }

  ngOnInit(): void {
    this.clickButton01();
    this.initDataTable();
    this.http.doGet(URL.GET_DATE+'ALL').subscribe((res: ResponseData<any>) => {
      if (res.status === 'SUCCESS') {
          let newDate = new Date(res.data.uploadDate);
          const result = newDate.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
          this.datenow= result+"  เวลา  "+moment(newDate,'HH:mm').format('HH:mm')+" น.";
          console.log(this.datenow);
          
    }});
  }

  clickButton01(){
    this.textH = "นำเข้าข้อมูลเปรียบเทียบรายได้ภาษีสรรพสามิต";
    this.checkButton = false;
    this.checkButton01 = true;
  }

  clickButton02(){
    this.textH = "นำเข้าข้อมูลเปรียบเทียบรายได้กองทุนและนำส่งกองทุน";
    this.checkButton = true;
    this.checkButton01 = false;
  }

  clickmenu(idx){
    let checkNoOne = 0;
    for (let index = 0; index < this.listMenu.length; index++) {
      if (index == idx) {
        this.listMenu[index].active = true;
        checkNoOne++;
      } else {
        this.listMenu[index].active = false;
      }
    }
    if(idx == 0){
      this.clickButton01();
    }else{
      this.clickButton02();
    }
  }
  reloadData() {
    this.dataTable.ajax.reload();
  }
  setParam(dataTablesParameters) {   
    const len = dataTablesParameters.length;
    const start = dataTablesParameters.start;
    this.start = dataTablesParameters.start;
    if (start === 0) {
      this.paginateRequset.page = 0;
      this.paginateRequset.length = len;
    } else {
      this.paginateRequset.page = Math.floor(start / len);
      this.paginateRequset.length = len;
    }
  }
  setSearch() {
    this.paginateRequset.filter = [];
    if (this.search.name) {
    }
  }
  setOrderBy(dataTablesParameters) {
    this.paginateRequset.sort = [];
    if (dataTablesParameters.order.length === 0) {
      return
    }
    const order = dataTablesParameters.order[0];
    const columns = dataTablesParameters.columns;
    if (!columns[order.column].orderable) {
      return;
    }
    const sort: PaginateSort = new PaginateSort();
    sort.column = columns[order.column].name;
    sort.order = order.dir;
    console.log(sort);
    this.paginateRequset.sort.push(sort);
  }
  // END SERVER SIDE DATATABLE // #d1d

  initDataTable = () => {
    let renderString = function (data, type, row, meta) {
      return Utils.isNull($.trim(data)) ? "-" : data;
    };
    if (this.dataTable != null) {
      this.dataTable.destroy();
    }
    if ($.fn.dataTable.isDataTable("#datatable")) {
      $('#datatable').DataTable().clear().destroy(true);

    }
    
    this.dataTable = $('#datatable').DataTable({
      destroy: false,
      serverSide: true,
      processing: true,
      searching: false,
      ajax: (dataTablesParameters: any, callback) => {
        this.setParam(dataTablesParameters);
        this.setOrderBy(dataTablesParameters);
        this.setSearch();
        
        this.http.doPost(URL.GET, this.paginateRequset).subscribe((res: ResponseData<any>) => {
          if (res.status === 'SUCCESS') {
            this.dataList = res.data.data;
            for(let index in res.data.data){
              let newDate = new Date(res.data.data[index].uploadDate);
              const result = newDate.toLocaleDateString('th-TH', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
              res.data.data[index].uploadDate= result;
              res.data.data[index].time =moment(newDate,'HH:mm').format('HH:mm');
            }
            callback({
              recordsTotal: res.data.recordsTotal,
              recordsFiltered: res.data.recordsTotal,
              data: res.data.data
            });
          } else {
            alert(res.message);
          }
        });
      },
      
      order: [],

      columns: [
        {
          className: "text-center",
          render: function (data, type, row, meta) {
            return meta.row  + 1;
          }
        }, 
        {
          data: 'fileExcelName', className: 'text-center',name:"file_excel_name",
          render: renderString
        },
        {
          data: 'uploadDate', className: 'text-center',name:"upload_date",
          render: renderString
        },
        {
          data: 'time', className: 'text-center',name:"upload_date",
          render: renderString
        },
      ],
    });
  }
  
}
