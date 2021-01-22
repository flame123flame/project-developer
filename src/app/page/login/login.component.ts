import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ResponseData } from 'src/app/common/models/response-data.model';
import { ModalAlertComponent } from 'src/app/components/modal/modal-alert/modalAlert.component';
import { User } from 'src/app/_model/user';
import { HttpService } from 'src/app/service/http.service';
import { AuthService } from 'src/app/auth/auth.service';
import { CommonService } from 'src/app/service/common.service';
import { UserService } from 'src/app/service/user.service.';
declare var $: any;
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public imagePath: string;
  public username = '';
  public password = '';
  public bodyModal = 'ชื่อผู้ใช้งานหรือรหัสผ่านไม่ถูกต้อง';
  public modalRef: BsModalRef;
  public user: User = new User;
  @ViewChild('errorModal') modalError: ModalAlertComponent;
  constructor(private router: Router
    , private modalService: BsModalService
    , private httpSV: HttpService
    , private authSV: AuthService
    , private userSV: UserService,
  ) {

  }

  ngOnInit() {
    localStorage.removeItem('currentUser');
    this.imagePath = '/assets/img/Logo4.png';
  }

  async login() {
    const param = { username: this.username, password: this.password };
    try {
      let response = await this.httpSV.doAuth({
        username: this.username.toLocaleLowerCase().trim(),
        password: this.password.trim(),
      });
      if (response != null) {
        this.authSV.login(response.jwttoken, response.username);
          this.userSV.logIn(response);
          this.router.navigate(['/home']);
      }
    } catch (error) {
      this.modalError.openModal();
    }
  }
}
