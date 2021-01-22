import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseData } from 'src/app/common/models/response-data.model';
import { ModalConfirmComponent } from 'src/app/components/modal/modal-confirm/modalConfirm.component';
import { ModalErrorComponent } from 'src/app/components/modal/modal-error/modalError.component';
import { ModalSuccessComponent } from 'src/app/components/modal/modal-success/modalSuccess.component';
import { ValidateService } from 'src/app/service/validate.service';
// import number from 'src/app/common/helper/number';
import { HttpService } from '../../../service/http.service';


const URL = {
  DELETE: 'role/delete-page-group/',
  GET: 'page/get',
  SAVE: 'role/save',
  GET_ALL: 'role/get-list',
  GET_BY_ID: 'role/get-by-id/',
  EDIT: 'role/edit'
};
@Component({
  selector: 'app-approve-details',
  templateUrl: './approve-details.component.html',
  styleUrls: ['./approve-details.component.css']
})
export class ApproveDetailsComponent implements OnInit {

  @ViewChild('saveModal') modalSave: ModalConfirmComponent;
  @ViewChild('successModal') modalSuccess: ModalSuccessComponent;
  @ViewChild('errorModal') modalError: ModalErrorComponent;
  @ViewChild('confirmModal') modalConfirm: ModalConfirmComponent;
  isCheck: any;
  listGroup: any[] = [];
  listGroupDetail: any[] = [];
  form: any = {
    fwRoleId: "",
    roleCode: "",
    roleName: "",
    roleDescription: "",
    listGroup: this.listGroup,
  }
  listData: any[] = [];
  listPageGroup: any[] = [];
  listDatail: any[] = [];
  breadcrumb: any = [
    {
      label: "การตั้งค่าผู้ใช้งานระบบ",
      link: "#",
    }, {
      label: "สิทธิ์การใช้งาน",
      link: "#",
    }, {
      label: "แก้ไขสิทธิ์การใช้งาน",
      link: "#",
    },
  ];
  idEdit: any
  constructor(
    private http: HttpService,
    private router: Router,
    private route: ActivatedRoute,
    private validate: ValidateService,
  ) {
    this.idEdit = this.route.snapshot.queryParams['edit'] || ""
    this.form.roleCode = this.route.snapshot.queryParams['code'] || ""
    this.form.roleName = this.route.snapshot.queryParams['name'] || ""
    this.form.roleDescription = this.route.snapshot.queryParams['description'] || ""

  }

  ngOnInit(): void {
    if (this.idEdit) {
      this.getEdit()
    } else {
      this.initDataTable();
    }
  }
  getEdit() {
    this.http.doGet("role/get-by-id/" + this.idEdit).subscribe(res => {
      this.listPageGroup = res.data.listGroup;
      this.http.doGet(URL.GET).subscribe((res: ResponseData<any>) => {
        for(let index in res.data){
          if(this.listPageGroup[index] === undefined){
            this.listPageGroup[index] = res.data[index];
          }
          for(let index1 in res.data[index].listDetail){          
            if(this.listPageGroup[index].listDetail[index1] === undefined){
              this.listPageGroup[index].listDetail[index1] = res.data[index].listDetail[index1];
            }
          }
        }      
      })
    })
  }
  initDataTable() {
    this.http.doGet(URL.GET).subscribe((res: ResponseData<any>) => {
      this.listPageGroup = res.data;
      for (let index1 = 0; index1 < this.listPageGroup.length; index1++) {
      


        for (let index2 = 0; index2 < this.listPageGroup[index1].listDetail.length; index2++) {
          this.listPageGroup[index1].listDetail[index2].readMark = false;
          this.listPageGroup[index1].listDetail[index2].writeMark = false;
          this.listPageGroup[index1].listDetail[index2].editMark = false;
          this.listPageGroup[index1].listDetail[index2].approveMark = false;
        }
      }
    });
  }

  onClickSave() {
    let data = {
      fwRoleId: null,
      roleCode: this.form.roleCode,
      roleName: this.form.roleName,
      roleDescription: this.form.roleDescription,
      listGroup: this.listPageGroup
    }
    let link = ""
    if (this.idEdit) {
      link = "role/edit"
      data.fwRoleId = this.idEdit
      this.http.doPut(link, data).subscribe(res => {
        if (res.status == 'SUCCESS') {
          this.modalSuccess.openModal();
          this.router.navigate(['/usersetting/approve'], {});
        }else{
          this.modalError.openModal(res.message);
        }
      })
    } else {
      link = "role/save"
      this.http.doPost(link, data).subscribe(res => {
        if (res.status == 'SUCCESS') {
          this.modalSuccess.openModal();
          this.router.navigate(['/usersetting/approve'], {});
        }else{
          this.modalError.openModal(res.message);
        }
      })
    }
  }
  onModalSave() {
    let validateData = [
      { format: "text", header: "roleCode", value: this.form.roleCode },
      { format: "text", header: "roleName", value: this.form.roleName },
    ];

    if (this.validate.checking(validateData)) {
      if (this.form.invalid) {
        this.modalError.openModal("กรุณากรอกข้อมูลให้ครบ");
      } else {
        this.modalSave.openModal();
      }
    }
    // this.modalSave.openModal();
  }

}
