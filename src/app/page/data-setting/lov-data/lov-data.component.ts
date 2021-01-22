import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ResponseData } from 'src/app/common/models/response-data.model';
import { ButtonDatatable } from 'src/app/components/buttons/button-datatable';
import { ModalConfirmComponent } from 'src/app/components/modal/modal-confirm/modalConfirm.component';
import { ModalErrorComponent } from 'src/app/components/modal/modal-error/modalError.component';
import { ModalSuccessComponent } from 'src/app/components/modal/modal-success/modalSuccess.component';
import { HttpService } from 'src/app/service/http.service';
import { UserService } from 'src/app/service/user.service.';
import * as moment from 'moment';
import { PaginateRequest, PaginateSort } from 'src/app/_model/PaginateRequest';
import { Utils } from 'src/app/common/helper';

const URL = {
  GETDATA: "lov/get",
  DELETE: "lov/delete-lov-hdr/",
}

@Component({
  selector: 'app-lov-data',
  templateUrl: './lov-data.component.html',
  styleUrls: ['./lov-data.component.css']
})
export class LovDataComponent {
  @ViewChild('successModal') modalSuccess: ModalSuccessComponent;
  @ViewChild('errorModal') modalError: ModalErrorComponent;
  @ViewChild('confirmModal') modalConfirm: ModalConfirmComponent;


  buttonadd:boolean;
  approveMark: boolean;
  editMark: boolean;
  delete: any;
  dataTable: any;
  dataList: any[] = [];
  lovKey: any;
  formSearch: FormGroup;
  start = 0;
  search: any = {
    name: "",
    department: ""
  }
  breadcrumb: any = [
    {
      label: 'รายการข้อมูลค่าตั้งต้น',
      link: '#',
    }
  ];
  paginateRequset: PaginateRequest = new PaginateRequest();
  constructor(
    private formBuilder: FormBuilder,
    private httpClient: HttpService,
    private router: Router,
    public userSV: UserService,
  ) {
    this.formSearch = this.formBuilder.group({
      id: [""]
    })
  }

  async ngOnInit() {
    
    ( this.userSV.currentUserValue.role?.listGroup).forEach(itemGroup => {
      if (itemGroup.pageGroupCode === 'DATA-SETTING') {
        (itemGroup?.listDetail ?? []).forEach(item => {
          if(item.pageDtlCode === 'LOV'){
            this.editMark = item.editMark
            this.approveMark = item.approveMark;
            this.buttonadd = item.writeMark;
          }
        });
      }
    });
    this.initDatatable();
  }


  
  public clickTap() {
    this.reloadData();
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
    if (this.search.key) {
      this.paginateRequset.filter.push(
        {
          column: 'lov_key',
          op: 'contain', value: this.search.key
        });
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

  initDatatable = () => {
    let renderString = function (data, type, row, meta) {
      return Utils.isNull($.trim(data)) ? "-" : data;
    };
    if (this.dataTable != null) {
      this.dataTable.destroy();
    }
    if ($.fn.dataTable.isDataTable("#datatable")) {
      $('#datatable').DataTable().clear().destroy(true);

    }

    let editMark = this.editMark;
    let approveMark = this.approveMark;
    this.dataTable = $('#datatable').DataTable({
      destroy: false,
      serverSide: true,
      processing: true,
      searching: false,
      ajax: (dataTablesParameters: any, callback) => {
        this.setParam(dataTablesParameters);
        this.setOrderBy(dataTablesParameters);
        this.setSearch();
        
        this.httpClient.doPost('lov/paginate', this.paginateRequset).subscribe((res: ResponseData<any>) => {
          if (res.status === 'SUCCESS') {
            this.dataList = res.data.data;
            for(let index in res.data.data){
              let newDate = new Date(res.data.data[index].createDate);
              const result = newDate.toLocaleDateString('th-TH', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
              res.data.data[index].createDate= result+"  เวลา  "+moment(newDate,'HH:mm').format('HH:mm')+" น.";
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
            return meta.row + 1;
          },orderable: false
        },
        {
          data: 'lovKey', className: 'text-center',name:"lov_key",
          render: renderString
        },
        {
          data: 'lovDescription', className: 'text-center',name:"lov_description",
          render: renderString
        },
        {
          data: 'createDate', className: 'text-center',name:"create_date",
          render: renderString
        },
        {
          className: 'text-center',
          render(data, type, row, meta) {
            let button = '';
           button += `
           ${ButtonDatatable.edit('edit', 'แก้ไข', false,editMark)}
           ${ButtonDatatable.delete('delete', 'ลบข้อมูล', false, approveMark)}`
            return button;
          },orderable: false
        },
      ],
    });
    this.dataTable.on('click', 'td > button#edit', (event) => {
      const data = this.dataTable.row($(event.currentTarget).closest('tr')).data();
      this.router.navigate(['/datasetting/lovdetails'], {
        queryParams: {
          id: data.fwLovHdrId
        }
      });
    });

    this.dataTable.on('click', 'td > button#delete', (event) => {
      const data = this.dataTable.row($(event.currentTarget).closest('tr')).data();
      this.onClickDelete(data.lovKey);
    });
  }
  onClickDelete(id) {
    this.delete = id;
    this.modalConfirm.openModal();
  }
  deleteData() {
    const id = this.delete
    this.httpClient.doDelete(URL.DELETE + id).subscribe((res: ResponseData<any>) => {
      if (res.status == 'SUCCESS') {
        this.initDatatable();
        this.modalSuccess.openModal();
      } else {
        this.modalError.openModal(res.message);
      }

    });
  }
  refreshPage() {
    window.location.reload()
  }


}
