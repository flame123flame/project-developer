import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'modal-password',
  templateUrl: './modal-password.component.html',
  styleUrls: ['./modal-password.component.css']
})
export class ModalPasswordComponent implements OnInit {
  @ViewChild('modalpassword', { static: true }) mymodal;
  public modalRef: BsModalRef;
  
  @Input() header: string = 'เกิดข้อผิดพลาด !';
  @Input() body: string = 'ทำรายการเสร็จสิ้น';

  @Output() onClose: EventEmitter<any> = new EventEmitter();
  constructor(private modalService: BsModalService) { }


  ngOnInit() {
 
  }

  openModal(text){
    this.body = text;
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