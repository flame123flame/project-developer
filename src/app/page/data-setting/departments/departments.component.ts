import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/service/user.service.';
import { HttpService } from 'src/app/service/http.service'
import { CommonService } from 'src/app/service/common.service';
import { ModalCustomComponent } from 'src/app/components/modal/modal-custom/modalCustom.component';
import { ModalConfirmComponent } from 'src/app/components/modal/modal-confirm/modalConfirm.component';
import { ModalErrorComponent } from 'src/app/components/modal/modal-error/modalError.component';
import { MessageService } from 'src/app/service/message.service';
import { ResponseData } from 'src/app/common/models/response-data.model';
import { ValidateService } from 'src/app/service/validate.service';

const URL = {
  GET_ALL: 'master/departments/get-departments-all',
  SAVE: 'master/departments/save-departments',
  EDIT: 'master/departments/edit-departments',
  GET_BY_CODE: 'master/departments/get-departments-by-code/',
  DELETE: 'master/departments/delete-departments/'
}

interface Departments {
  masterDepartmentsId: number;
  masterDepartmentsCode: string;
  createBy: string;
  createDate: Date;
  updateBy: string;
  updateDate: Date;
  name: string;
  parent: string;
  treelevel: number;
  area: string,
  address: string,
  road: string,
  village: string,
  parish: string,
  district: string,
  province: string,
  postalCode:string,
}

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html'
})
export class DepartmentsComponent implements OnInit {

  breadcrumb: any = [
    {
      label: 'จัดการข้อมูล',
      link: '/home',
    },
    {
      label: 'แผนก/ศูนย์ต้นทุน',
      link: '#',
    }
  ];
  filterList = [];
  buttonadd:boolean;
  approveMark: boolean;
  editMark: boolean;
  readonly = false;
  editonly = false;
  itemSave: any = {
    masterDepartmentsCode: null,
    name:null,
    area: null,
    address: null,
    road: null,
    village: null,
    parish: null,
    district: null,
    province: null,
    postalCode:null,
    parent:null,
    treelevel:0,
  }
  check: boolean;
  header: string;
  headerdetail: String
  show: boolean = true;
  departmentsList: any [] = [];
  departmentsListFilter: Departments[] = [];

  @ViewChild('modalCustom') modalCustom: ModalCustomComponent;
  @ViewChild('editModal') editModal: ModalConfirmComponent;
  @ViewChild('saveModal') saveModal: ModalConfirmComponent;
  @ViewChild('deleteModal') deleteModal: ModalConfirmComponent;
  @ViewChild('errorModal') modalError: ModalErrorComponent;
  constructor(
    private commonService: CommonService,
    private http: HttpService,
    public userSV: UserService,
    private validate: ValidateService,
  ) { }

  ngOnInit(): void {
    ( this.userSV.currentUserValue.role?.listGroup).forEach(itemGroup => {
      if (itemGroup.pageGroupCode === 'DATA-SETTING') {
        (itemGroup?.listDetail ?? []).forEach(item => {
          if(item.pageDtlCode === 'DEPARTMENTS'){
            this.editMark = item.editMark
            this.approveMark = item.approveMark;
            this.buttonadd = item.writeMark;
            this.check = item.writeMark;
            
          }
        });
      }
    });
    this.getDepartmentsList();
  }

  getDepartmentsList() {
    this.commonService.loading();
    this.http.doGet(URL.GET_ALL).subscribe((res: ResponseData<any>) => {
      if (MessageService.MSG.SUCCESS == res.status) {
        this.departmentsList = res.data;
        console.log("???????", this.departmentsList);
        this.setTable()
      } else {
        this.modalError.openModal(res.message);
      }
      this.commonService.unLoading();
    });
  }

 
  onToggleChange(selfCode, level, parentCode) {
    if (this.filterList.find(x => x.selfCode == selfCode) == null) {
      this.filterList.push({ selfCode: selfCode, level: level, status: true, parentCode: parentCode })
    } else {
      let index = this.filterList.findIndex(x => x.selfCode == selfCode);
      this.filterList[index].status = !this.filterList[index].status
      if (this.filterList[index].status == false) {
        this.disableChild(selfCode)
      }
    }
    
    this.setTable();
  }

  displayIcon(parent) {
    if (this.departmentsList.find(x => x.parent == parent) != null) {
      return true
    }
    return false
  }
  toggleIcon(code) {
    if (this.filterList.find(x =>x.selfCode == code && x.status == true) != null) {
      return true
    }
    return false
  }

  disableChild(parentCode) {
    this.filterList.forEach(ele => {
      if (ele.parentCode == parentCode) {
        this.disableChild(ele.selfCode)
        if (ele.status == true) {
          ele.status = !ele.status
        }
      }
    })
  }

  setTable() {
    this.departmentsListFilter = this.departmentsList.filter(x => { 
      let bool = false;
      if (x.treelevel <= 0) {
        bool = true
      }
      
      this.filterList.forEach(element => {  
        if (element.status && x.parent == element.selfCode && x.treelevel <= element.level+1) {
          bool = true
        }
      });
      return bool
    });
  }

  addData() {
    this.readonly = false;
    this.itemReset()
    this.header = "เพิ่มข้อมูล"
    this.modalCustom.openModal(this.modalCustom.MODAL_SIZE_LARGE);
  }

  itemReset() {
    this.itemSave.masterDepartmentsCode = null
    this.itemSave.name = null
    this.itemSave.parent = null
    this.itemSave.treelevel = null
  }

  validateData() {
    this.check = this.editMark;
    let validateData = [
      { format: "text", header: "รหัส (Code)", value: this.itemSave.masterDepartmentsCode },
      { format: "text", header: "ชื่อของหน่วยงาน", value: this.itemSave.name },
      { format: "text", header: "พิ้นที่ความรับผิดชอบ", value: this.itemSave.area },
      { format: "text", header: "ตำบล", value: this.itemSave.parish },
      { format: "text", header: "อำเภอ", value: this.itemSave.district },
      { format: "text", header: "จังหวัด", value: this.itemSave.province },
      { format: "text", header: "รหัสไปรษณีย์", value: this.itemSave.postalCode },
      { format: "text", header: "PARENT", value: this.itemSave.parent },
    ];
    console.log(this.itemSave);
    
    if (this.validate.checking(validateData)) {
      
      this.saveData(this.itemSave)
    }
  }

  saveData(data:any){ 
    if (this.editonly) {
      this.http.doPut(URL.EDIT, data).subscribe((res: ResponseData<any>) => {
        if (MessageService.MSG.SUCCESS == res.status) {
          this.modalCustom.close()
          this.getDepartmentsList();
        } else {
          this.modalError.openModal(res.message);
        }
        this.commonService.unLoading();
      });
    } else {
      this.http.doPost(URL.SAVE, data).subscribe((res: ResponseData<any>) => {
        if (MessageService.MSG.SAVE == res.message) {
          this.modalCustom.close()
          this.getDepartmentsList();
        } else {
          this.modalError.openModal(res.message);
        }
        this.commonService.unLoading();
      });
    }
  }

  Details(code) {
    this.header = "ข้อมูล"
    this.readonly = true;
    this.editonly = true;
    this.check = false;
    this.http.doGet(URL.GET_BY_CODE + code).subscribe((res: ResponseData<any>) => {
      if (MessageService.MSG.SUCCESS == res.status) {   
        this.modalCustom.openModal(this.modalCustom.MODAL_SIZE_LARGE)
        this.itemSave.masterDepartmentsCode = res.data.masterDepartmentsCode
        this.itemSave.name = res.data.name;
        this.itemSave.parent = res.data.parent;
        this.itemSave.area = res.data.area;
        this.itemSave.address = res.data.address;
        this.itemSave.road = res.data.road;
        this.itemSave.village = res.data.village;
        this.itemSave.parish = res.data.parish;
        this.itemSave.district = res.data.district;
        this.itemSave.province = res.data.province;
        this.itemSave.postalCode = res.data.postalCode;
        this.itemSave.treelevel = res.data.treelevel
      } else {
        this.modalError.openModal(res.message);
      }
      this.commonService.unLoading();
    })
    ;
  }

  editData(code) {
    this.itemReset()
    this.readonly = false;
    this.editonly = true;
    this.check = this.editMark;
    this.header = "แก้ไขข้อมูล"
    this.http.doGet(URL.GET_BY_CODE + code).subscribe((res: ResponseData<any>) => {
      if (MessageService.MSG.SUCCESS == res.status) {
        this.modalCustom.openModal(this.modalCustom.MODAL_SIZE_LARGE);
        this.itemSave.masterDepartmentsCode = res.data.masterDepartmentsCode
        this.itemSave.name = res.data.name;
        this.itemSave.parent = res.data.parent;
        this.itemSave.area = res.data.area;
        this.itemSave.address = res.data.address;
        this.itemSave.road = res.data.road;
        this.itemSave.village = res.data.village;
        this.itemSave.parish = res.data.parish;
        this.itemSave.district = res.data.district;
        this.itemSave.province = res.data.province;
        this.itemSave.postalCode = res.data.postalCode;
        this.itemSave.treelevel = res.data.treelevel
      } else {
        this.modalError.openModal(res.message);
      }
      this.commonService.unLoading();
    })
  }

  deleteData(code) {
    this.itemSave.masterDepartmentsCode = code;
    this.deleteModal.openModal();
  }

  delete() {
    this.http.doDelete(URL.DELETE + this.itemSave.masterDepartmentsCode).subscribe((res: ResponseData<any>) => {
      if (MessageService.MSG.SUCCESS == res.status) {
        this.getDepartmentsList();
      } else {
        this.modalError.openModal(res.message);
      }
      this.commonService.unLoading();
    });
  }

  findTreelevel(code) {
    this.http.doGet(URL.GET_BY_CODE + code).subscribe((res: ResponseData<any>) => {
      if (MessageService.MSG.SUCCESS == res.status) {
        if(code == "PARENT"){
          res.data.treelevel = null;
        }
        if (res.data.treelevel != null) {      
          this.itemSave.treelevel = res.data.treelevel+1
        } else {
          this.itemSave.treelevel = res.data.treelevel ?? 0;
        }

        console.log("findTreelevel", this.itemSave);

      } else {
        this.modalError.openModal(res.message);
      }
      this.commonService.unLoading();
    })
  }

}
