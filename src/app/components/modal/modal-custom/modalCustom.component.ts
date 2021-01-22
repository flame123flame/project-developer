import { Component, OnInit, Input, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
@Component({
  selector: 'modal-custom',
  templateUrl: './modalCustom.component.html',
  styleUrls: ['./modalCustom.component.css']
})
export class ModalCustomComponent implements OnInit {
  MODAL_SIZE_SMALL = 'modal-sm'
  MODAL_SIZE_LARGE = 'modal-lg';
  @ViewChild('modalCustom', { static: true }) mymodal;
  public modalRef: BsModalRef;
  public modalRef1: BsModalRef;
  
  @Input() header: string = '';
  @Input() body: string = 'กรุณายืนยันการทำรายการ';
  @Input() clickBackDropToClose: boolean = true;
  @Input() clickBackDropToClose2: boolean = true;
  @Input() check:boolean = false;
  @Output() onSave: EventEmitter<any> = new EventEmitter();
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  constructor(private modalService: BsModalService) { }


  ngOnInit() {
    
    
  }

  openModal(className: string = this.MODAL_SIZE_SMALL){
    this.modalRef = this.modalService.show(this.mymodal , { class: className, backdrop: this.clickBackDropToClose ? this.clickBackDropToClose : 'static' });
  }

  close() {
    this.modalRef.hide();
  }

  onClick(key){
    this.modalRef.hide();
    switch (key) {
      case 'save':
        this.onSave.emit();
        break;
      case 'close':
          this.onClose.emit();
          break;
      default:
        break;
    }    
  }
}
