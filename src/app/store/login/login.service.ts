import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/service/http.service';
import { LoginModel } from './login.model';


@Injectable()
export class LoginService {

    constructor(
        private ajaxService: HttpService,
    ) { }

    async loadUserDetail(): Promise<LoginModel> {
        const res = await this.ajaxService.get<LoginModel>('user/get-data-from-token');
        return new Promise<LoginModel>(funStuff => {
            funStuff(res);
        });
    }

}
