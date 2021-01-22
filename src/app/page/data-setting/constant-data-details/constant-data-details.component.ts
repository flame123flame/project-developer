import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
  SAVE : "constant/save",
  EDIT_DATA : "constant/edit",
  EDIT: "constant/edit",
  GET_BY_ID : "constant",
  EDIT_LIST : "constant/get-by-id/"
}
@Component({
  selector: 'app-constant-data-details',
  templateUrl: './constant-data-details.component.html',
  styleUrls: ['./constant-data-details.component.css']
})
export class ConstantDataDetailsComponent implements OnInit {
  @ViewChild('saveModal') modalSave: ModalConfirmComponent;
  @ViewChild('editModal') modalEdit: ModalConfirmComponent;
  @ViewChild('successModal') modalSuccess: ModalSuccessComponent;
  @ViewChild('errorModal') modalError: ModalErrorComponent;
  
  formGroup: FormGroup;
  formAddConstant : FormGroup;
  id: any;
  buttomedit: boolean = true;
  constantKey : any;
  constantValue : any;
  dataEdit: any;
  
  constructor(
    private httpClient :HttpService,
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private validate: ValidateService,
  ) {
    this.formAddConstant = this.formBuilder.group({
      fwConstantId: ["",],
      constantKey: ["",],
      constantValue: ["",]
    })
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id'] || "";
    if (Utils.isNotNull(this.id)) {
      this.editFormAddConstant(this.id);
      this.buttomedit = false;
    }
  }
  breadcrumb: any = [
    {
      label: 'ตั้งค่าข้อมูล',
      link: '#',
    },
    {
      label: 'รายการค่าคงที่',
      link: '#',
    },
    {
      label: 'เพิ่มรายการค่าคงที่',
      link: '#',
    }
  ];


  saveFormAddConstant() {
    this.httpClient.doPost(URL.SAVE, this.formAddConstant.value).subscribe((res: ResponseData<any>) => {
      if (MessageService.MSG.SUCCESS == res.status) {
        this.router.navigate(['/datasetting/constant']);
      }
    });
  }
  onClickSave(){
    let validateData = [
      { format: "text", header: "Key", value: this.formAddConstant.get("constantKey").value },
      { format: "text", header: "Value", value: this.formAddConstant.get("constantValue").value },
    ];

    if (this.validate.checking(validateData)) {
      if (this.formAddConstant.invalid) {
        this.modalError.openModal("กรุณากรอกข้อมูลให้ครบ");
      } else {
        this.modalSave.openModal();

      }
    }
  }

  onClickEdit(){
    let validateData = [
      { format: "text", header: "Key", value: this.formAddConstant.get("constantKey").value },
      { format: "text", header: "Value", value: this.formAddConstant.get("constantValue").value },
    ];

    if (this.validate.checking(validateData)) {
      if (this.formAddConstant.invalid) {
        this.modalError.openModal("กรุณากรอกข้อมูลให้ครบ");
      } else {
        this.modalEdit.openModal();

      }
    }
  }

  editFormAddConstant(id: any) {
    // let fwConstantId = id
    this.httpClient.doGet(URL.EDIT_LIST+id).subscribe((res) => {
      if (MessageService.MSG.SUCCESS == res.status) {
        this.dataEdit = res.data;
        this.formAddConstant.patchValue({
          fwConstantId: this.dataEdit.fwConstantId,
          constantKey: this.dataEdit.constantKey,
          constantValue: this.dataEdit.constantValue
        })
      } 
    });
  }

  editConstant(){
    this.httpClient.doPut(URL.EDIT, this.formAddConstant.value).subscribe((res: ResponseData<any>) => {
    if (MessageService.MSG.SUCCESS == res.status) {
      this.router.navigate(['/datasetting/constant']);
    } else {
      this.modalEdit.openModal();
    }
  });
  }

}
