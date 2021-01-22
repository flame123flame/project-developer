import { Injectable } from '@angular/core';
@Injectable()
export class MessageService {
  public static MSG = {
    SAVE: 'บันทึกเรียบร้อยแล้ว',
    SUCCESS: 'SUCCESS',
    FAILED: 'FAILED',
    DUPLICATE_DATA: 'DUPLICATE_DATA',
    FAILED_CALLBACK: 'กรุณาติดต่อผู้ดูแลระบบ',
    REQUIRE_FIELD: 'กรุณากรอกข้อมูลให้ถูกต้อง',
    DUPLICATE_USER: 'DUPLICATE_USER',
    WRONG_PASSWORD: 'WRONG_PASSWORD',
    
    NOT_PENDING_STATUS:'NOT_PENDING_STATUS',
    TIME_OUT_TYPE:'TIME_OUT_TYPE',
    TIME_OUT_TRANSACTION:'TIME_OUT_TRANSACTION'



  };
}
