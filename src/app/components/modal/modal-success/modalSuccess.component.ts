import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'modal-success',
  templateUrl: './modalSuccess.component.html',
  styleUrls: ['./modalSuccess.component.css']
})
export class ModalSuccessComponent implements OnInit {
  @ViewChild('modalsuccess', { static: true }) mymodal;
  public modalRef: BsModalRef;
  
  @Input() header: string = 'แจ้งเตือน !';
  @Input() body: string = 'ทำรายการเสร็จสิ้น';

  @Output() onClose: EventEmitter<any> = new EventEmitter();
  constructor(private modalService: BsModalService) { }


  ngOnInit() {
    console.log("header : ", this.header);
  }

  openModal(){
    this.modalRef = this.modalService.show(this.mymodal);
  }
  onClick(key){
    this.modalRef.hide();
    switch (key) {
      case 'close':
        this.onClose.emit();
        break;
    }    
  }
}
