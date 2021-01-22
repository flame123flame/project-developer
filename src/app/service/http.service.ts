import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map, catchError, timeout } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import { CommonService } from './common.service';
import { UserService } from './user.service.';
const apiPath = environment.BASE_URL;
@Injectable()
export class HttpService {
  private API_URL: string = environment.BASE_URL + '/api';
  private BASE_URL: string = environment.BASE_URL;
  public static CONTEXT_PATH = apiPath + '/api/';
  private userToken: string;
  public headerAuth: any;
  statusGet = 0
  statusGetTemp = 0
  countAuth = 0
  timeout = 45000
  constructor(
    private commonService: CommonService,
    private httpClient: HttpClient,
    private router: Router,
    private userSv: UserService,
    private user: UserService,
    private authService: AuthService,
  ) { }

  private getHttpHeaders(): HttpHeaders {
    // if (!this.userToken)
    //   this.userToken = localStorage.getItem('srb-token');
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.getItem('srb-token')}`
    });
  }

  doAuth<T>(body: any): any {
    this.commonService.loading();
    return new Promise<T | any>((resolve, reject) => {
      this.httpClient.post(
        `${this.BASE_URL}/token/authenticate`,
        body,
        { headers: { 'Content-Type': 'application/json' } },
      )
        .subscribe(
          (res) => {
            resolve(res);
            this.commonService.unLoading();
          },
          (error) => {
            this.commonService.unLoading();
            reject(error);
          },
        );
    });
  }

  refreshToken<T>(): any {
    return new Promise<T | any>((resolve, reject) => {
      this.httpClient.get(
        `${this.BASE_URL}/token/refreshtoken`,
        {
          headers: {
            'Content-Type': 'application/json',
            isRefreshToken: 'true',
            Authorization: `Bearer ${localStorage.getItem('srb-token')}`
          }
        },
      )
        .subscribe(
          (res) => {
            resolve(res);
          },
          (error) => { reject(error); },
        );
    });
  }
  delete(path, hasCalled = false) {
    if (!hasCalled)
      this.commonService.loading();
    return this.httpClient.delete(`${this.API_URL}/${path}`, { headers: this.getHttpHeaders() }).pipe(
      timeout(this.timeout), map((res: any) => {
        this.commonService.unLoading();
        return res;
      }),
      catchError((err, caught) => {
        return this.doHandleError(err, caught, hasCalled, this.delete(path, true));
      })
    );
  }
  getHeader(): HttpHeaders {
    this.headerAuth = new HttpHeaders({
      'Authorization': `Bearer ${this.user?.currentUserValue?.jwttoken}`
    });
    return this.headerAuth;
  }
  private handleError(error: any): Promise<any> {
    return Promise.reject(error.message || error);
  }
  upload(url: string, body: any, success: any, error?: any, header?: Headers) {
    // var headers = new Headers({ 'Authorization': `Bearer ${this.user.currentUserValue.token}` });
    let errorFn = this.handleError;
    if (error) {
      errorFn = error;
    }
    this.commonService.loading();
    return this.httpClient
      .post(HttpService.CONTEXT_PATH + url, body, { headers: this.getHeader() })
      .toPromise()
      .then(suc => {
        this.commonService.unLoading();
        return success = suc
      })
      .catch(err=>{
        error = err
        errorFn
        this.commonService.unLoading();
        return error = err
      });
  }

  get<T>(url: string): Promise<T | any> {
    this.commonService.loading();
    return new Promise<T | any>((resolve, reject) => {
      this.httpClient.get(HttpService.CONTEXT_PATH + url, { headers: this.getHeader() }).subscribe(
        (res: any) => {
          if (res) {
            this.commonService.unLoading();
            return resolve(res);
          }
          return resolve(null);
        },
        (err: any) => {
          this.commonService.unLoading();
          this.handleErrorAsync(err);
          return reject(err);
        },
      );
    });
  }


  doGet(url, hasCalled = false) {
    if (!hasCalled)
      this.commonService.loading();
    return this.httpClient.get(`${this.API_URL}/${url}`, { headers: this.getHttpHeaders() }).pipe(
      timeout(this.timeout), map((res: any) => {
        this.commonService.unLoading();
        return res;
      }),
      catchError((err, caught) => {
        return this.doHandleError(err, caught, hasCalled, this.doGet(url, true));
      })
    );
  }

  doPost(url, data, hasCalled = false) {
    if (!hasCalled)
      this.commonService.loading();
    return this.httpClient.post(`${this.API_URL}/${url}`, data, { headers: this.getHttpHeaders() }).pipe(
      timeout(this.timeout),
      map((res: any) => {
        this.commonService.unLoading();
        return res;
      }),
      catchError((err, caught) => {
        return this.doHandleError(err, caught, hasCalled, this.doPost(url, data, true));
      })
    );
  }
  doPostCustom(domain, url, data, hasCalled = false) {
    if (!hasCalled)
      this.commonService.loading();
    return this.httpClient.post(`${domain}/${url}`, data, { headers: this.getHttpHeaders() }).pipe(
      timeout(this.timeout),
      map((res: any) => {
        this.commonService.unLoading();
        return res;
      }),
      catchError((err, caught) => {
        return this.doHandleError(err, caught, hasCalled, this.doPost(url, data, true));
      })
    );
  }

  doPostRegister(url, data, hasCalled = false) {
    if (!hasCalled)
      this.commonService.loading();
    return this.httpClient.post(`${this.API_URL}/${url}`, data, {}).pipe(
      map((res: any) => {
        this.commonService.unLoading();
        return res;
      }),
      catchError((err, caught) => {
        return this.doHandleError(err, caught, hasCalled, this.doPostRegister(url, data, true));
      })
    );
  }

  doDelete(url, hasCalled = false) {
    if (!hasCalled)
      this.commonService.loading();
    return this.httpClient.delete(`${this.API_URL}/${url}`, { headers: this.getHttpHeaders() }).pipe(
      timeout(this.timeout), map((res: any) => {
        this.commonService.unLoading();
        return res;
      }),
      catchError((err, caught) => {
        return this.doHandleError(err, caught, hasCalled, this.doDelete(url, true));
      })
    );
  }

  doPut(url, data, hasCalled = false) {
    if (!hasCalled)
      this.commonService.loading();
    return this.httpClient.put(`${this.API_URL}/${url}`, data, { headers: this.getHttpHeaders() }).pipe(
      timeout(this.timeout), map((res: any) => {
        this.commonService.unLoading();
        return res;
      }),
      catchError((err, caught) => {
        return this.doHandleError(err, caught, hasCalled, this.doPut(url, data, true));
      })
    );
  }

  doPatch(url, data, hasCalled = false) {
    if (!hasCalled)
      this.commonService.loading();
    return this.httpClient.patch(`${this.API_URL}/${url}`, data, { headers: this.getHttpHeaders() }).pipe(
      timeout(this.timeout), map((res: any) => {
        this.commonService.unLoading();
        return res;
      }),
      catchError((err, caught) => {
        return this.doHandleError(err, caught, hasCalled, this.doPatch(url, data, true));
      })
    );
  }


  private handleErrorAsync = (err) => {

    if (err.status === 401) {
      this.authService.logout();
    } else {
    }
  }

  private async doHandleError(err, caught, hasCalled, funcCallAgain) {
    if (!hasCalled)
      this.commonService.unLoading();
    if (err.status === 401) {
      // if (this.countAuth == 0) {
      //   this.countAuth++
      //   const res = await this.refreshToken()
      //   if (res != null) {
      //     this.authService.login(res.jwttoken, res.username);
      //   }
      //   // location.reload()
      // } else {
      this.authService.logout();
      // this.countAuth = 0
      // }
    } else if (err.status === 404 && !hasCalled) {
      return funcCallAgain;
    } else if (err.status === 524 && !hasCalled) {
      return funcCallAgain;
    } else if (err.toString().indexOf("TimeoutError") >= 0) {   //  Timeout error
      location.reload()
    }
    return Promise.reject(err.message || err);
  }

}
