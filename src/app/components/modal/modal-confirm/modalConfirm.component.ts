import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'modal-confirm',
  templateUrl: './modalConfirm.component.html',
  styleUrls: ['./modalConfirm.component.css']
})
export class ModalConfirmComponent implements OnInit {
  @ViewChild('modalConfirm', { static: true }) mymodal;
  public modalRef: BsModalRef;
  i:number=0;
  @Input() header: string = 'ยืนยัน';
  @Input() body: string = 'กรุณายืนยันการทำรายการ';

  @Output() onConfirm: EventEmitter<any> = new EventEmitter();
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
      case 'confirm':
        this.modalService.hide();
        this.onConfirm.emit();
        break;
      case 'close':
        this.modalService.hide();
          this.onClose.emit();
          break;
      default:
        break;
    }  
    
  }
}
