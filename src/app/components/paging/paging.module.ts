import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNavigationServersideComponent } from './page-navigation-serverside/page-navigation-serverside.component';
import { NgxPaginationModule } from 'ngx-pagination';



@NgModule({
  imports: [
    CommonModule,
    NgxPaginationModule,
  ],
  declarations: [
    PageNavigationServersideComponent,
  ],
  exports: [
    PageNavigationServersideComponent,
  ],
})
export class PagingModule { }
