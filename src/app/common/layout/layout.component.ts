import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { UserService } from 'src/app/service/user.service.';
import { LoginModel } from 'src/app/store/login/login.model';
import { LoginService } from 'src/app/store/login/login.service';
import { User } from 'src/app/_model/user';
// import { CommonService } from 'src/app/_service/common.service';
// import { UserService } from 'src/app/_service/user.service.';
// import { AjaxService } from 'src/app/_service/ajax.service';
declare var $: any;


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})

export class LayoutComponent implements OnInit {
  alertSuccess: boolean = false;
  alertDanger: boolean = false;
  login: LoginModel;
  user: User = new User;
  fullname: String = '';
  constructor(
    private auth: AuthService,
    public userSV: UserService,
    private loginService: LoginService,
  ) {
 
  }


  async ngOnInit() {

    console.log("this.userSV.currentUserValue.role?.listGroup" ,this.userSV.currentUserValue.role?.listGroup);
    
    this.login = await this.loginService.loadUserDetail();  
    this.user.firstNameTh = this.userSV.currentUserValue.firstNameTh;
    this.user.lastNameTh = this.userSV.currentUserValue.lastNameTh;
    this.user.username = this.userSV.currentUserValue.username;
    this.user.position = this.userSV.currentUserValue.position;
    $(document).ready(function () {
      $('#sidebarCollapseNew').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(".dataTables_scrollHeadInner").css({ "width": "100%" });
        $(".table ").css({ "width": "100%" });
      });
    });

    
  }

  checkGroupMenu(code: string): boolean {
    if (!this.login) { return true; }
    let check = false;
    (this.login?.role?.listGroup).forEach(itemGroup => {
      if (itemGroup.pageGroupCode === code) {
        (itemGroup?.listDetail ?? []).forEach(item => {
          if (item.readMark) {
            check = true || check;
          }
        });
      }
    });
    return check;
  }



  checkDtlMenu(code: string, codeDtl: string): boolean {
    if (!this.login) { return true; }
    let check = false;
    (this.login?.role?.listGroup).forEach(itemGroup => {
      if (itemGroup.pageGroupCode === code) {
        (itemGroup?.listDetail ?? []).forEach(item => {
          if (codeDtl === item.pageDtlCode && (item.readMark)) {
            check = true;
            return true;
          }
        });
      }
    });
    return check;
  }


  ngAfterViewInit(): void {
  }
  logout() {
    this.auth.logout();
  }
  otherClick() {
    // click ที่ไหนก็ได้ จะโชว์เมนู
    $(document).ready(function () {
      $('#sidebar').removeClass('active');
      $(".dataTables_scrollHeadInner").css({ "width": "100%" });
      $(".table ").css({ "width": "100%" });
    });
  }

  scrollToTop() {
    window.scroll(0, 0);
  }

  toTop() {

  }




}
