import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ResponseData } from 'src/app/common/models/response-data.model';
import { ButtonDatatable } from 'src/app/components/buttons/button-datatable';
import { ModalConfirmComponent } from 'src/app/components/modal/modal-confirm/modalConfirm.component';
import { ModalErrorComponent } from 'src/app/components/modal/modal-error/modalError.component';
import { ModalSuccessComponent } from 'src/app/components/modal/modal-success/modalSuccess.component';
import { UserService } from 'src/app/service/user.service.';
import { LoginModel } from 'src/app/store/login/login.model';
import { LoginService } from 'src/app/store/login/login.service';
import { HttpService } from '../../../service/http.service'

const URL = {
  DELETE: 'role/delete-page-group/',
  GET: 'page/get',
  SAVE: 'role/save',
  GET_ALL: 'role/get-list',
  GET_BY_ID: 'role/get-by-id/',
  EDIT: 'role/edit'
};
@Component({
  selector: 'app-approve',
  templateUrl: './approve.component.html',
  styleUrls: ['./approve.component.css']
})
export class ApproveComponent implements OnInit {

  @ViewChild('successModal') modalSuccess: ModalSuccessComponent;
  @ViewChild('errorModal') modalError: ModalErrorComponent;
  @ViewChild('confirmModal') modalConfirm: ModalConfirmComponent;
  breadcrumb: any = [
    {
      label: "การตั้งค่าผู้ใช้งานระบบ",
      link: "#",
    }, {
      label: "สิทธิ์การใช้งาน",
      link: "#",
    },
  ];
  isButtonEdit: any;
  isButtonDelete: any;
  isButtonSave: boolean;
  listData: any[] = [];
  dataTable: any;
  markDelete: any;
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
    this.getAll();
  }
  gotoEdit(item) {
    this.router.navigate(['/usersetting/approvedetails'], {
      queryParams: {
        edit: item.fwRoleId,
        code: item.roleCode,
        name: item.roleName,
        description: item.roleDescription,
      },
    });
  }
  getAll() {
    this.http.doGet(URL.GET_ALL).subscribe((res: ResponseData<any>) => {
      this.listData = res.data;
      this.initDataTable();
    });
  }
  deleteItem() {
    let code = this.markDelete;
    this.http.doDelete(URL.DELETE + code).subscribe((res: ResponseData<any>) => {
      if (res.status == 'SUCCESS') {
        this.modalSuccess.openModal();
        this.getAll();
      } else {
        this.modalError.openModal(res.message);
      }
    });
  }
  onClickDelete(code) {
    this.markDelete = code;
    this.modalConfirm.openModal();

  }
  initDataTable = () => {
    
    if (this.dataTable != null) {
      this.dataTable.destroy();
    }

    for (let index = 0; index < this.listData.length; index++) {
      console.log("this.listData[index].createDate = " ,this.listData[index].createDate);
      
      let newDate = new Date(this.listData[index].createDate);
      var getmonth = newDate.getMonth()+1;
      let newDate1 = new Date(newDate.getFullYear()+"-"+newDate.getDate()+"-"+getmonth)
      const result = newDate1.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      })
      this.listData[index].convertDate = getmonth+" "+result +" "+ newDate.getFullYear()+" , เวลา: "+moment(newDate,'HH:mm').format('HH:mm')+" น.";
    }

    let dataBooleanEdit  = this.isButtonEdit;
    let dataBooleanDelete  = this.isButtonDelete;
    this.dataTable = $('#datatable').DataTable({
      lengthChange: false,
      searching: false,
      ordering: false,
      processing: true,
      serverSide: false,
      paging: true,
      data: this.listData,
      columns: [
   
        {
          data: 'roleCode', className: 'text-center'
        },
        {
          data: 'roleName', className: 'text-center'
        },
        {
          data: 'roleDescription', className: 'text-center'
        },
      
        {
          className: 'text-center',
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
    this.dataTable.on('click', 'td > button#edit', (event) => {
      const data = this.dataTable.row($(event.currentTarget).closest('tr')).data();
      this.gotoEdit(data)
    });

    this.dataTable.on('click', 'td > button#delete', (event) => {
      const data = this.dataTable.row($(event.currentTarget).closest('tr')).data();
      this.onClickDelete(data.roleCode);
    });
  }
}
