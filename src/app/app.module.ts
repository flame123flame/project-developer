import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlockUiService } from './common/block-ui/block-ui.service';
import { ComponentsModule } from './components/components.module';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PipeModule } from './common/pipes/pipe.module';
import { DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { OwlModule } from 'ngx-owl-carousel';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { LoginComponent } from './page/login/login.component';
import { MaterialModule } from './material-module';
import { HttpService } from './service/http.service';
import { AuthGuardService } from './auth/auth-guard.service';
import { LoginGuardService } from './auth/login-guard.service';
import { AuthService } from './auth/auth.service';
import { UserService } from './service/user.service.';
import { ValidateService } from './service/validate.service';
import { LoginService } from './store/login/login.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ComponentsModule,
    FormsModule,
    HttpClientModule,
    ModalModule.forRoot(),
    PipeModule,
    OwlModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    BsDatepickerModule.forRoot(),
    MaterialModule,
  ],
  providers: [
    BlockUiService,
    HttpService,
    AuthGuardService,
    LoginGuardService,
    AuthService,
    DatePipe,
    UserService,
    BsModalRef,
    LoginService,
    DatePipe,
    ValidateService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
