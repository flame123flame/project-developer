import { Component, OnInit ,ViewChild} from '@angular/core';
import { ModalAlertComponent } from 'src/app/components/modal/modal-alert/modalAlert.component';
import { HttpService } from 'src/app/service/http.service';

@Component({
  selector: 'app-import-data003',
  templateUrl: './import-data003.component.html',
  styleUrls: ['./import-data003.component.css']
})
export class ImportData003Component implements OnInit {

  @ViewChild('alertModal') modelAlert: ModalAlertComponent;
  breadcrumb: any = [
    {
      label: "นำเข้าข้อมูล",
      link: "#",
    },
    {
      label: "นำเข้าข้อมูลรายงานรายได้ภาษี",
      link: "#",
    },
  ];

  file: any[] = [];
  files: any;
  filesName: any
  isBtn: boolean = true;
  isDate: boolean = true;
  dataDate: '';
  countChDate: number = 0;
  constructor(
    private httpService: HttpService
  ) { }

  ngOnInit(): void {
  }
  dateChange(event) {
    this.dataDate = event;
    if (this.countChDate < 1) {
      this.countChDate++;
    } else {
      this.isDate = false;
    }
  }

  uploadExcel() {
    const formBody = new FormData();
    formBody.append("fileName", this.files.name);
    formBody.append("fileUpload", this.files);
    this.httpService.upload("gf-excise-tax/upload-excel", formBody, (response) => {
    }).then(ss => {
      console.log("HIHIHIHIHIHI", ss);
      this.modelAlert.openModal();
    });
    
  }
  onChangeUpload = (event: any) => {
    this.files = event.target.files[0]
    this.filesName = event.target.files[0].name
    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.onload = (e: any) => {
        const f = {
          name: event.target.files[0].name,
          type: event.target.files[0].type,
          value: e.target.result
        };
        this.file = [f];
      };
      setTimeout(() => {
      }, 150);
    }
    this.isBtn = false;
  }
}
