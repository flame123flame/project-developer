import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { MenuComponent } from './menu/menu.component';
import { ApproveComponent } from './approve/approve.component';
import { ApproveDetailsComponent } from './approve-details/approve-details.component';
import { MenuDetailsComponent } from './menu-details/menu-details.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { RouterModule, Routes } from '@angular/router';
import { DataTablesModule } from 'angular-datatables';
import { ComponentsModule } from 'src/app/components/components.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiSwitchModule } from 'ngx-toggle-switch';
// import { Http,} from '@angular/http';

const routes: Routes = [
  { path: '', component:  UsersComponent},
  { path: 'users', component: UsersComponent },
  { path: 'userdetails', component: UsersDetailsComponent },
  { path: 'approve', component: ApproveComponent },
  { path: 'approvedetails', component: ApproveDetailsComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menudetails', component: MenuDetailsComponent },

];

@NgModule({
  declarations: [UsersComponent, MenuComponent, ApproveComponent, ApproveDetailsComponent, MenuDetailsComponent, UsersDetailsComponent],
  imports: [
    CommonModule,
    ComponentsModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes),
    UiSwitchModule,
  ],
  exports: [RouterModule],
})
export class UsersSettingModule { }
