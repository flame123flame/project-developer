import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Utils } from 'src/app/common/helper';
import { ResponseData } from 'src/app/common/models/response-data.model';
import { ModalConfirmComponent } from 'src/app/components/modal/modal-confirm/modalConfirm.component';
import { ModalErrorComponent } from 'src/app/components/modal/modal-error/modalError.component';
import { ModalSuccessComponent } from 'src/app/components/modal/modal-success/modalSuccess.component';
import { HttpService } from 'src/app/service/http.service';
import { MessageService } from 'src/app/service/message.service';
import { ValidateService } from 'src/app/service/validate.service';

const URL = {
  SAVE: "lov/save",
  EDIT: "lov/listdata",
  EDIT_DATA: "lov/edit",
  GET_BY_ID: "lov/get-by-id/"
}

@Component({
  selector: 'app-lov-data-details',
  templateUrl: './lov-data-details.component.html',
  styleUrls: ['./lov-data-details.component.css']
})
export class LovDataDetailsComponent implements OnInit {
  @ViewChild('saveModal') modalSave: ModalConfirmComponent;
  @ViewChild('successModal') modalSuccess: ModalSuccessComponent;
  @ViewChild('errorModal') modalError: ModalErrorComponent;
  isEdit: boolean = false;

  breadcrumb: any = [
    {
      label: 'รายการข้อมูลค่าตั้งต้น',
      link: '#',
    }
  ];
  listDetail: any = [{
    fwLovDtlId: null,
    lovKey: null,
    lovCode: null,
    valueTh1: null,
    valueEn1: null,
    valueTh2: null,
    valueEn2: null,
    seq: null
  }]
  formAdd = new FormGroup({
    fwLovHdrId: new FormControl(),
    lovKey: new FormControl(''),
    lovDescription: new FormControl(''),
    // listDetail:new FormControl(),
  });
  isDelete:any[]=[];
  constructor(
    private httpClient: HttpService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private validate: ValidateService,
  ) {

  }

  ngOnInit(): void {
    if (this.route.snapshot.queryParams['id'] != null) {
      this.setFrom(this.route.snapshot.queryParams['id']);
      this.isEdit = true;
    }
  }
  setFrom(data) {
    // this.commonService.loading();
    this.httpClient.doGet(URL.GET_BY_ID + data).subscribe(
      ((res: ResponseData<any>) => {
        this.formAdd.patchValue({
          fwLovHdrId: res.data.fwLovHdrId,
          lovKey: res.data.lovKey,
          lovDescription: res.data.lovDescription,
        })
        this.listDetail = res.data.listDetail;
        // if (this.formAdd.get("image").value != null) {
        //   // this.imgBase64 = this.formAdd.get("image").value;
        //   // this.previewLoaded = true;
        // }

        // this.dataTable = res;
        // this.commonService.unLoading();
      }));

  }
  onClickSave() {
    // this.modalSave.openModal();
    let validateData = [
      { format: "text", header: "Key", value: this.formAdd.get("lovKey").value },
    ];

    if (this.validate.checking(validateData)) {
      if (this.formAdd.invalid) {
        this.modalError.openModal("กรุณากรอกข้อมูลให้ครบ");
      } else {
        this.modalSave.openModal();

      }
    }
  }
  onSave() {
    if (!this.isEdit) {
      this.formAdd.addControl('listDetail', new FormControl(this.listDetail));
      this.formAdd.addControl('isDelete',new FormControl(this.isDelete));
      this.httpClient.doPost(URL.SAVE, this.formAdd.value).subscribe((res: ResponseData<any>) => {
        if (res.status == 'SUCCESS') {
          // this.getAllData();
          this.modalSuccess.openModal();
          this.router.navigate(['/datasetting/lov'], {});
        } else {
          this.modalError.openModal(res.message);
        }
      });
    }else{
      this.formAdd.addControl('listDetail',new FormControl(this.listDetail));
    this.formAdd.addControl('isDelete',new FormControl(this.isDelete));
    this.httpClient.doPut(URL.EDIT_DATA, this.formAdd.value).subscribe((res: ResponseData<any>) => {
      if(res.status=='SUCCESS'){
      // this.getAllData();
      this.modalSuccess.openModal();
      this.router.navigate(['/datasetting/lov'], {});
      }else{
        this.modalError.openModal(res.message);
      }
    });
    }

  }
  addlistDetailForm() {
    this.listDetail.push({
      fwLovDtlId: null,
      lovKey: null,
      lovCode: null,
      valueTh1: null,
      valueEn1: null,
      valueTh2: null,
      valueEn2: null,
      seq: null
    }
    );
  }
  popDetails(index) {
    if(this.listDetail[index]!=null){
      this.isDelete.push({fwLovDtlId : this.listDetail[index].fwLovDtlId})
    }
    this.listDetail.splice(index, 1);
  }

}
