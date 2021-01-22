import { Injectable } from '@angular/core';
import { action, observable, computed } from 'mobx';
import { LoginService } from './login.service';
import { LoginModel } from './login.model';

@Injectable()
export class LoginStore {

    @observable data: LoginModel;

    constructor(
        private loginService: LoginService,
    ) { }

    @action async loadUserDetail() {
        this.data = await this.loginService.loadUserDetail();
    }

    @action async upUserDetail(data: LoginModel) {
        this.data = data;
    }

    @computed get getLogin() {
        return this.data;
    }
}
