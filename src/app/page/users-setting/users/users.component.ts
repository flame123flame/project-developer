import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { ResponseData } from 'src/app/common/models/response-data.model';
import { ButtonDatatable } from 'src/app/components/buttons/button-datatable';
import { ModalConfirmComponent } from 'src/app/components/modal/modal-confirm/modalConfirm.component';
import { ModalErrorComponent } from 'src/app/components/modal/modal-error/modalError.component';
import { ModalSuccessComponent } from 'src/app/components/modal/modal-success/modalSuccess.component';
import { HttpService } from 'src/app/service/http.service';
import { UserService } from 'src/app/service/user.service.';
import { PaginateRequest, PaginateSort } from 'src/app/_model/PaginateRequest';
import { Utils } from 'src/app/common/helper';
import * as moment from 'moment';

const URL = {
  GET: 'employee/get-all',
  DEL: 'employee/delete'
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  @ViewChild('successModal') modalSuccess: ModalSuccessComponent;
  @ViewChild('errorModal') modalError: ModalErrorComponent;
  @ViewChild('confirmModal') modalConfirm: ModalConfirmComponent;

  
  isButtonEdit: any;
  isButtonDelete: any;
  isButtonSave: boolean;
  dataTable: any;
  orgList: any[] = [];
  dataList: any[] = [];
  employeeCode: any;
  nameSearch: '';
  start = 0;
  search: any = {
    name: "",
    department: ""
  }
  breadcrumb: any = [

    {
      label: "ตั้งค่าผู้ใช้งาน",
      link: "#",
    },
    {
      label: "ผู้เข้าใช้งาน",
      link: "#",
    }
  ];
  data: any = {}
  paginateRequset: PaginateRequest = new PaginateRequest();
  constructor(
    private http: HttpService,
    private router: Router,
    public userSV: UserService,
  ) { }

async ngOnInit() {
  ( this.userSV.currentUserValue.role?.listGroup).forEach(itemGroup => {
    if (itemGroup.pageGroupCode === 'DATA-SETTING') {
      (itemGroup?.listDetail ?? []).forEach(item => {
        if ('CONSTANT' == item.pageDtlCode) {
            if(item.editMark){
              this.isButtonEdit = true
            }
            if(item.approveMark){
              this.isButtonDelete = true
            }
            if(item.writeMark){
              this.isButtonSave = true
            }
        }
      });
    }
  });
  this.initDataTable();
  }
  onClickEdit(employeeCode: any,roleCode: any) {
    this.router.navigate(['/usersetting/userdetails'], {
      queryParams: {
        id: employeeCode,
        roleCode :roleCode
      }
    });
  }
  onClickDelete(code, username) {
    this.data = {
      employeeCode: code,
      username: username
    }
    this.modalConfirm.openModal();

  }

  onDelete() {
    let data = this.data;
    this.http.doPost(URL.DEL, data).subscribe((res: ResponseData<any>) => {
      if (res.status == 'SUCCESS') {
        this.modalSuccess.openModal();
        this.initDataTable(); 
      } else {
        this.modalError.openModal(res.message);
      }

    });
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
    if (this.search.name) {
      this.paginateRequset.filter.push(
        {
          column: `a.first_name_th like '%` + this.search.name + `%' or a.last_name_th like '%`,
          op: 'contain', value: this.search.name
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
    let dataBooleanEdit  = this.isButtonEdit;
    let dataBooleanDelete  = this.isButtonDelete;
    
    this.dataTable = $('#datatable').DataTable({
      destroy: false,
      serverSide: true,
      processing: true,
      searching: false,
      ajax: (dataTablesParameters: any, callback) => {
        this.setParam(dataTablesParameters);
        this.setOrderBy(dataTablesParameters);
        this.setSearch();
        
        this.http.doPost('employee/paginate', this.paginateRequset).subscribe((res: ResponseData<any>) => {
          if (res.status === 'SUCCESS') {
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
          className: 'text-center',
          render: function (data, type, row, meta) {
            return meta.row + 1;
          },orderable: false
        },
        {
          data: 'username', className: 'text-center',name:"username",
          render: renderString
        },
        {
          render: function (data, type, row, meta) {
            return `${row.firstNameTh}  ${row.lastNameTh}`;
          },
          className: 'text-center',name:"first_name_th"
        },
        {
          data: 'roleCode', className: 'text-center',name:"role_code",
          render: renderString
        },
        {
          data: 'createDate', className: 'text-center',name:"create_date",
          render: renderString
        },
        {
          className: 'text-center',
          orderable: false,
          render(data, type, row, meta) {
            let button = '';
            button += `
            ${ButtonDatatable.edit('edit', 'แก้ไข', false, dataBooleanEdit)}
            ${ButtonDatatable.delete('delete', 'ลบข้อมูล', false, dataBooleanDelete)}
            `
            return button;
          }
        },
      ],
    });

    this.dataTable.on('click', 'td > button#edit', (e) => {
      const dataSelect = this.dataTable.row($(e.target).closest('tr')).data();
      this.onClickEdit(dataSelect.employeeCode,dataSelect.roleCode);
    });

    this.dataTable.on('click', 'td > button#delete', (event) => {
      const dataSelect = this.dataTable.row($(event.target).closest('tr')).data();
      this.onClickDelete(dataSelect.employeeCode, dataSelect.username);

    });
  }
}
