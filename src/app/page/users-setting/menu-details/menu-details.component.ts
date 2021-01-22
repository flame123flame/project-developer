import { HttpRequest } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ResponseData } from 'src/app/common/models/response-data.model';
import { ModalConfirmComponent } from 'src/app/components/modal/modal-confirm/modalConfirm.component';
import { ModalErrorComponent } from 'src/app/components/modal/modal-error/modalError.component';
import { ModalSuccessComponent } from 'src/app/components/modal/modal-success/modalSuccess.component';
import { CommonService } from 'src/app/service/common.service';
import { HttpService } from 'src/app/service/http.service';
import { MessageService } from 'src/app/service/message.service';
import { Utils } from 'src/app/common/helper';
import { ValidateService } from 'src/app/service/validate.service';
import { LoginModel } from 'src/app/store/login/login.model';
import { UserService } from 'src/app/service/user.service.';

const URL = {
  GET_BY_ID: 'page/get-by-id/',
  SAVE: 'page/save',
  DELETE_BY_ID: 'page/delete-page-dtl/',
  DELETE_BY_DETAIL: 'role/delete-user-page-dtl/'
}

@Component({
  selector: 'app-menu-details',
  templateUrl: './menu-details.component.html',
  styleUrls: ['./menu-details.component.css']
})
export class MenuDetailsComponent implements OnInit {

  @ViewChild('saveModal') modalSave: ModalConfirmComponent;
  @ViewChild('successModal') modalSuccess: ModalSuccessComponent;
  @ViewChild('errorModal') modalError: ModalErrorComponent;

dataText = "เพิ่มเมนู"
  pageGroupCode = '';
  pageGroupName = '';
  pageGroupDescription = '';
  breadcrumb: any = [
    {
      label: "การตั้งค่าผู้ใช้งานระบบ",
      link: "#",
    },
    {
      label: this.dataText,
      link: "#",
    },

  ];

  readmenucode:boolean;
  readdetailcode:boolean[] = [];
  isButtonEdit: any;
  isButtonDelete: any;
  isButtonSave: boolean;
  formGroup: FormGroup;
  listDetail: FormArray;
  dataTable: any;
  dataList: any[]=[];
  dataListArray: any[]=[];
  count: any;
  i_read:any;
  login: LoginModel;
  constructor(
    private fb: FormBuilder,
    private http: HttpService,
    private route: ActivatedRoute,
    private router: Router,
    private commonService: CommonService,
    private validate: ValidateService,
    public userSV: UserService,
  ) { 
    this.setFormGroup();
  }

setFormGroup() {
  this.formGroup = this.fb.group({
    fwPageGroupId: [""],
    pageGroupCode: [""],
    pageGroupName: ["",],
    pageGroupDescription: ["",],
    listDetail:this.fb.array([this.createlistDetailForm()]),
  })
}
createlistDetailForm(): FormGroup {
  return this.fb.group({
    fwPageDtlId: [""],
    pageDtlCode: ["",],
    pageDtlDescription: ["",],
    pageDtlName: ["",],
    pageGroupCode: ["",],
  
  });
}

onOpenModalSave() {
  
  this.listDetail = this.formGroup.get("listDetail") as FormArray;
  let validateData = [
    { format: "", header: "Menu Code", value: this.formGroup.get("pageGroupCode").value },
    { format: "", header: "Menu Name", value: this.formGroup.get("pageGroupName").value },
  ];
  for (let index = 1; index < this.listDetail.controls.length; index++) {
    const element = this.listDetail.controls[index];
    validateData.push(
      { format: "", header: "Menu Code row:" + (index + 1), value: element.get('pageDtlCode').value },
      { format: "", header: "Menu Name row:" + (index + 1), value: element.get('pageDtlName').value },
    );
    if(this.listDetail.controls[0].get('pageDtlCode').value == '' || this.listDetail.controls[0].get('pageDtlName').value == '') {
      validateData.push(
        { format: "", header: "Menu Code row:" + (1), value: this.listDetail.controls[0].get('pageDtlCode').value },
        { format: "", header: "Menu Name row:" + (1), value: this.listDetail.controls[0].get('pageDtlName').value },
      );
    }
  }
  if (this.validate.checking(validateData)) {
    if (this.formGroup.invalid) {
      this.modalError.openModal("กรุณากรอกข้อมูลให้ครบ");
    } else {
      this.modalSave.openModal();
    }
  }
}

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
    this.formGroup.get('fwPageGroupId').patchValue(this.route.snapshot.queryParams['id']);   
    if (this.formGroup.get('fwPageGroupId').value != null && this.formGroup.get('fwPageGroupId').value != '') {
      this.readmenucode = true;
      this.getById();
    }
  }
  
  addlistDetailForm(): void {
    this.listDetail = this.formGroup.get("listDetail") as FormArray;
    this.listDetail.push(this.createlistDetailForm());
  }

  removelistDetailForm(index: number): void {
    this.listDetail = this.formGroup.get("listDetail") as FormArray;
    if(this.formGroup.value.listDetail[index].fwPageDtlId != ''){
      this.http.delete(URL.DELETE_BY_ID+this.formGroup.value.listDetail[index].pageDtlCode).subscribe(res => {
        if (MessageService.MSG.SUCCESS == res.status) {
          this.http.delete(URL.DELETE_BY_DETAIL+this.formGroup.value.listDetail[index].pageDtlCode).subscribe(res => {
            if(MessageService.MSG.SUCCESS == res.status){
              this.readdetailcode[index] = false;
              this.listDetail.removeAt(index);
              this.i_read = index;
              this.modalSuccess.openModal();
            }
          })
        } else {
          this.modalError.openModal(res.message);
        }
      })
    }else{
      this.listDetail.removeAt(index);
    }
  }

  clearlistDetailForm() {
    this.listDetail = this.formGroup.get("listDetail") as FormArray;
    this.listDetail.controls.splice(0, this.listDetail.controls.length);
    this.listDetail.push(this.createlistDetailForm());
  }

  getById() {
    this.commonService.loading();
    this.http.doGet(URL.GET_BY_ID+this.formGroup.value.fwPageGroupId).subscribe((res: ResponseData<any>) => {
      if (MessageService.MSG.SUCCESS == res.status) {
        this.formGroup.patchValue({
          fwPageGroupId: res.data.fwPageGroupId,
          pageGroupCode: res.data.pageGroupCode,
          pageGroupDescription: res.data.pageGroupDescription,
          pageGroupName: res.data.pageGroupName,
        })
        // set detail
        if (Utils.isNotNull(res.data.listDetail)) {
          this.clearlistDetailForm();
          this.listDetail = this.formGroup.get("listDetail") as FormArray;
          for (let index = 0; index < res.data.listDetail.length; index++) {
            this.i_read = index;
            const element = res.data.listDetail[index];
            this.readdetailcode[index] = true
            this.listDetail.at(index).get('fwPageDtlId').patchValue(element.fwPageDtlId);
            this.listDetail.at(index).get('pageDtlCode').patchValue(element.pageDtlCode);
            this.listDetail.at(index).get('pageDtlDescription').patchValue(element.pageDtlDescription);
            this.listDetail.at(index).get('pageDtlName').patchValue(element.pageDtlName);
            this.listDetail.at(index).get('pageGroupCode').patchValue(element.pageGroupCode);
            this.addlistDetailForm();
          }
          this.listDetail.removeAt(this.listDetail.controls.length - 1);
        }
      } else {
        this.modalError.openModal(res.message);
      }
      this.commonService.unLoading();
    })
    this.commonService.unLoading();
  }

  onClickSave() {
    this.saveData().subscribe(() => {
      this.router.navigate(['/usersetting/menu']);
    }) 
  }

  saveData(): Observable<any> {
    return new Observable<any>(obs => {
      for(var index in this.formGroup.value.listDetail){
        this.count = index
      }
      if(this.formGroup.value.listDetail[0].pageDtlCode != '' && this.count == 0 ){
      }else if(this.formGroup.value.listDetail[0].pageDtlCode == '' && this.count == 0){
        this.formGroup.value.listDetail[0].pageGroupCode = this.formGroup.value.pageGroupCode;
        this.formGroup.value.listDetail[0].pageDtlCode = this.formGroup.value.pageGroupCode;
        this.formGroup.value.listDetail[0].pageDtlName = this.formGroup.value.pageGroupName;
        this.formGroup.value.listDetail[0].pageDtlDescription = this.formGroup.value.pageGroupDescription;
      }
      this.http.doPost(URL.SAVE, [this.formGroup.value]).subscribe((res: ResponseData<any>) => {
        if (MessageService.MSG.SUCCESS == res.status) {
          obs.next(res.data);
          this.modalSuccess.openModal();
        } else {
          obs.error(res.message);
          this.modalError.openModal(res.message);
        }
      });
    })
  }
}
