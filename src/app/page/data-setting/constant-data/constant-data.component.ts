import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import * as moment from 'moment';
import { ResponseData } from 'src/app/common/models/response-data.model';
import { ButtonDatatable } from 'src/app/components/buttons/button-datatable';
import { ModalConfirmComponent } from 'src/app/components/modal/modal-confirm/modalConfirm.component';
import { ModalErrorComponent } from 'src/app/components/modal/modal-error/modalError.component';
import { ModalSuccessComponent } from 'src/app/components/modal/modal-success/modalSuccess.component';
import { HttpService } from 'src/app/service/http.service';
import { MessageService } from 'src/app/service/message.service';
import { UserService } from 'src/app/service/user.service.';
import { LoginModel } from 'src/app/store/login/login.model';
import { LoginService } from 'src/app/store/login/login.service';

const URL = {
  GET : "constant/get",
  DELETE : "constant/delete-constant/",
  LIST : "constant/get",
}

@Component({
  selector: 'app-constant-data',
  templateUrl: './constant-data.component.html',
  styleUrls: ['./constant-data.component.css']
})
export class ConstantDataComponent implements OnInit {
  @ViewChild('successModal') modalSuccess: ModalSuccessComponent;
  @ViewChild('errorModal') modalError: ModalErrorComponent;
  @ViewChild('confirmModal') modalConfirm: ModalConfirmComponent;

  login: LoginModel;
  dataList: any[]=[];
  dataTable: any;
  constantKey: any;
  constantValue: any;
  isButtonEdit: any;
  isButtonDelete: any;
  isButtonSave: boolean;
  constantId : any;
  formSearch: FormGroup;
  constructor(
    private router: Router,
    private httpClient :HttpService,
    private formBuilder: FormBuilder,
    public userSV: UserService,
  ) { 
    this.formSearch = this.formBuilder.group({
      constantKey: ["", Validators.required]
    })
  }

   ngOnInit() {

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

    this.getdata();
  } 

  breadcrumb: any = [
    {
      label: 'ตั้งค่าข้อมูล',
      link: '#',
    },
    {
      label: 'รายการค่าคงที่',
      link: '#',
    }
  ];

  getList() {
    let url = URL.LIST;
    if (this.formSearch.controls.constantKey.value) {
      url+=`?constantKey=${this.formSearch.controls.constantKey.value}`
    }
    this.httpClient.doPost(URL.LIST,this.formSearch.value).subscribe((res: ResponseData<any>) => {
      this.dataList = res.data;
      this.initDatatable();
    });
  }

  getdata(){
    this.httpClient.doPost(URL.GET,{}).subscribe((res : ResponseData<any>) => {
    this.dataList = res.data; 
    this.initDatatable();
    })
  }

  initDatatable = () => {

    if (this.dataTable != null) {
      this.dataTable.destroy();
    }
    let dataBooleanEdit  = this.isButtonEdit;
    let dataBooleanDelete  = this.isButtonDelete;

    for (let index = 0; index < this.dataList.length; index++) {
      let newDate = new Date(this.dataList[index].createDate);
          const result = newDate.toLocaleDateString('th-TH', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
          this.dataList[index].convertDate = result+"  เวลา  "+moment(newDate,'HH:mm').format('HH:mm')+" น.";
      
    }

  

    this.dataTable = $('#datatable').DataTable({
      pagingType: 'full_numbers',
      ordering: false,
      scrollX: false,
      lengthChange: false,
      info: false,
      pageLength: 10,
      searching: false,
      processing: true,
      serverSide: false,
      data: this.dataList,
      columns: [
        {
          className: "text-center",
          render: function (data, type, row, meta) {
            return meta.row  + 1;
          }
        }, 
        {
          data: 'constantKey', className: 'text-center'
        }, 
      
        {
          data: 'constantValue', className: 'text-center'
        },
        {
          data: 'convertDate', className: 'text-center'
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
      this.router.navigate(['datasetting/constantdetails'], {
        queryParams: {
          id: data.fwConstantId
        }
      });
    });

    this.dataTable.on('click', 'td > button#delete', (event) => {
      const data = this.dataTable.row($(event.currentTarget).closest('tr')).data();
      this.constantId = data.fwConstantId;
      this.modalConfirm.openModal();
    });
  }

  onDel() {
    this.httpClient.doDelete(URL.DELETE + this.constantId).subscribe(
      (res) => {
        this.getdata();
        if (MessageService.MSG.SUCCESS === res.status) {
        } else {
          this.modalError.openModal(res.message);
        }
      });
  }
}