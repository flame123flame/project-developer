import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { HttpService } from 'src/app/service/http.service';
import { ResponseData } from 'src/app/common/models/response-data.model';
import { ModalConfirmComponent } from 'src/app/components/modal/modal-confirm/modalConfirm.component';
import { ModalSuccessComponent } from 'src/app/components/modal/modal-success/modalSuccess.component';
import { ModalErrorComponent } from 'src/app/components/modal/modal-error/modalError.component';
import { MessageService } from 'src/app/service/message.service';
import { ButtonDatatable } from 'src/app/components/buttons/button-datatable'
import { LoginModel } from 'src/app/store/login/login.model';
import { UserService } from 'src/app/service/user.service.';

declare var $: any;

const URL = {
  GET_ALL: 'page/get',
  DELETE: 'page/delete-page-group/'
}


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  breadcrumb: any = [
    {
      label: "การตั้งค่าผู้ใช้งานระบบ",
      link: "#",
    },
    {
      label: "เมนู",
      link: "#",
    },

  ];

  dataTable: any;
  dataList: any[]=[];
  pageGroupId: any;
  isButtonEdit:boolean;
  isButtonDelete:boolean;
  isButtonSave: boolean;
  login: LoginModel;

  @ViewChild('confirmModal') modalConfirm: ModalConfirmComponent;
  @ViewChild('successModal') modalSuccess: ModalSuccessComponent;
  @ViewChild('errorModal') modalError: ModalErrorComponent;
  
  constructor(
    private router: Router,
    private http: HttpService,
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
    this.data();
  }

  data() {

    this.http.doGet(URL.GET_ALL).subscribe((res: ResponseData<any>) => {
      this.dataList = res.data;
      this.initDataTable();
    })

  }

  onDelete(pageGroupId: String) {
    this.pageGroupId = pageGroupId;
    this.modalConfirm.openModal();
    
  }

  onClickConfirm() {
    this.http.delete(URL.DELETE+this.pageGroupId).subscribe((res:ResponseData<any>) => {
      if (MessageService.MSG.SUCCESS == res.status) {
        this.data();
        this.modalSuccess.openModal();
      } else {
        this.modalError.openModal(res.message);
      }
    })
  }

  initDataTable = () => {
    if (this.dataTable != null) {
      this.dataTable.destroy();
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
      data: this.dataList,
      columns: [
        {
          className: "text-center",
          render: function (data, type, row, meta) {
            return meta.row  + 1;
          }
        }, 
  
        {
          data: 'pageGroupCode', className: 'text-center'
        },
        {
          data: 'pageGroupName', className: 'text-center'
        },
        {
          data: 'pageGroupDescription', className: 'text-center'
        },  
        {
          className: 'text-center',
          render(data, type, row, meta) {
            let button= '';
            button += `
            ${ButtonDatatable.edit('edit', 'แก้ไข', false, dataBooleanEdit)}
            ${ButtonDatatable.delete('delete', 'ลบข้อมูล', false, dataBooleanDelete)}
            `
            return button;
          }
        },
      ],
    });
  
    this.dataTable.on('click','td > button#edit', (event) => {
      const data = this.dataTable.row($(event.currentTarget).closest('tr')).data();
      this.router.navigate(['/usersetting/menudetails'], {
        queryParams: {
          id: data.fwPageGroupId
        }
      });
    });
  
    this.dataTable.on('click', 'td > button#delete', (event) => {
      const data = this.dataTable.row($(event.currentTarget).closest('tr')).data();
      this.onDelete(data.pageGroupCode);
    });
  }


}
