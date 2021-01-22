import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ResponseData } from 'src/app/common/models/response-data.model';
import { ModalConfirmComponent } from 'src/app/components/modal/modal-confirm/modalConfirm.component';
import { ModalErrorComponent } from 'src/app/components/modal/modal-error/modalError.component';
import { ModalPasswordComponent } from 'src/app/components/modal/modal-password/modal-password.component';
import { ModalSuccessComponent } from 'src/app/components/modal/modal-success/modalSuccess.component';
import { CommonService } from 'src/app/service/common.service';
import { HttpService } from 'src/app/service/http.service';
import { MessageService } from 'src/app/service/message.service';
import { ValidateService } from 'src/app/service/validate.service';

let URL = {
  SAVE: 'user/register',
  GETROLE: 'role/get-list',
  GETALL: 'employee/get-by-code/',
  GET: 'employee/get-by-code/',
  EDIT: 'employee/edit'
}
@Component({
  selector: 'app-users-details',
  templateUrl: './users-details.component.html',
  styleUrls: ['./users-details.component.css']
})
export class UsersDetailsComponent implements OnInit {

  @ViewChild('modalpassword') modalpassword: ModalPasswordComponent;
  @ViewChild('saveModal') modalSave: ModalConfirmComponent;
  @ViewChild('successModal') modalSuccess: ModalSuccessComponent;
  @ViewChild('errorModal') modalError: ModalErrorComponent;
  @ViewChild('confirmModal') modalConfirm: ModalConfirmComponent;
  
  organizeList: any[] = [];
  formAddUser: FormGroup;
  breadcrumb: any = [
    {
      label: "สร้างผู้ใช้งาน",
      link: "#",
    },
  ];
  formGroup: FormGroup;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpService,
    private validate: ValidateService,
  ) { }
  isEdit: boolean = false;
  employeeCode: '';
  userName:string =  '';
  remark:string =  '';
  phoneNumber:string = '';
  password:string ='';
  position:string = '';
  firstNameTh: string = '';
  lastNameTh: string = '';
  confirmPassword:string = '';
  email:string = '';
  roleCode: String = '';
  form: any;
  role: any[] = []
  ngOnInit(): void {
    this.getrole();
    if (this.route.snapshot.queryParams['id'] != null) {
      this.setFrom(this.route.snapshot.queryParams['id'],this.route.snapshot.queryParams['roleCode']);
      this.isEdit = true;
    }
  }

  setFrom(data,roleCode) {
    this.http.doGet(URL.GETALL + data).subscribe(
      ((res: ResponseData<any>) => {
        this.employeeCode = res.data.employeeCode;
        this.roleCode = roleCode;
        this.userName = res.data.username;
        this.remark = res.data.remark;
        this.phoneNumber = res.data.phoneNumber;
       
        this.position = res.data.position;
        this.firstNameTh = res.data.firstNameTh;
        this.lastNameTh = res.data.lastNameTh; 
        this.password = "";
        this.confirmPassword = "";
        this.email = res.data.email;
      }));

  }
  saveFormAddUser() {
    if (this.isEdit) {

      this.http.doPost(URL.EDIT, {
        employeeCode: this.employeeCode,
        username: this.userName,
        roleCode: this.roleCode,
        remark: this.remark,
        phoneNumber: this.phoneNumber,
        password: this.password,
        position :this.position,
        firstNameTh: this.firstNameTh,
        lastNameTh: this.lastNameTh,
        confirmPassword: this.confirmPassword,
        email: this.email,
      }).subscribe(res => {
        if(res.data == "DUPLICATE_USER"){
          this.modalpassword.openModal("มีผู้ใช้งานในระบบแล้ว");
        }else{
          this.router.navigate(['/usersetting/users'])
        }
     

      })
    } else {
      
      this.http.doPost(URL.SAVE, {
        username: this.userName,
        roleCode: this.roleCode,
        remark: this.remark,
        phoneNumber: this.phoneNumber,
        password: this.password,
        position: this.position,
        firstNameTh: this.firstNameTh,
        lastNameTh: this.lastNameTh,
        confirmPassword: this.confirmPassword,
        email: this.email,
      }).subscribe(res => {
        if(res.data == "DUPLICATE_USER"){
          this.modalpassword.openModal("มีผู้ใช้งานในระบบแล้ว");
        }else{
          this.router.navigate(['/usersetting/users'])
        }

      })
    }

  }
  getrole() {
    this.http.doGet(URL.GETROLE).subscribe((res: ResponseData<any>) => {
      this.role = res.data;
    })
  }
  getOrganizeList() {
    this.http.doPost(URL.GETALL, {}).subscribe((res: ResponseData<any>) => {
      if (MessageService.MSG.SUCCESS == res.status) {
        this.organizeList = res.data;
      }
    });
  }
  onSave() {
    this.form = {
      employeeCode: this.employeeCode,
      userName:  this.userName,
      remark:  this.remark,
      phoneNumber:  this.phoneNumber,
      password:  this.password,
      position: this.position,
      firstNameTh:  this.firstNameTh,
      lastNameTh:  this.lastNameTh,
      confirmPassword:  this.confirmPassword,
      email:  this.email,
      roleCode:  this.roleCode,
    }
    let validateData = [
      { format: "text", header: "ชื่อผู้ใช้งาน", value: this.form.userName },
      { format: "text", header: "รหัสผ่าน", value: this.form.password},
      { format: "text", header: "ยืนยันรหัสผ่าน", value: this.form.confirmPassword},
      { format: "text", header: "สิทธิ์การใช้งานระบบ", value: this.form.roleCode},
      { format: "text", header: "ตำแหน่ง", value: this.form.position},
      { format: "text", header: "ชื่อ", value: this.form.firstNameTh},
      { format: "text", header: "นามสกุล", value: this.form.lastNameTh},
    ];

    let validateDataEdit = [
      { format: "text", header: "ชื่อผู้ใช้งาน", value: this.form.userName },
      { format: "text", header: "สิทธิ์การใช้งานระบบ", value: this.form.roleCode},
      { format: "text", header: "ตำแหน่ง", value: this.form.position},
      { format: "text", header: "ชื่อ", value: this.form.firstNameTh},
      { format: "text", header: "นามสกุล", value: this.form.lastNameTh},
    ];
  
    
    if (this.isEdit) {
      if (this.validate.checking(validateDataEdit)) {
        if (this.password != this.confirmPassword) {
          this.modalpassword.openModal("รหัสผ่านไม่ตรงกัน");
        } else {
          this.modalSave.openModal();
        }
      }
    }else{
      if (this.validate.checking(validateData)) {
        if (this.password != this.confirmPassword) {
          this.modalpassword.openModal("รหัสผ่านไม่ตรงกัน");
        } else {
          this.modalSave.openModal();
        }
      }
    }
   
  }
}

