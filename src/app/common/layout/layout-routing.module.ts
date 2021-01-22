import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { DashboardComponent } from 'src/app/page/dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      { path: '', component: DashboardComponent },
      { path: 'home', component: DashboardComponent },
      { path: 'home/:id', component: DashboardComponent },
      { path: 'import', loadChildren: () => import('../../page/import-data/importdata.module').then(m => m.ImportDataModule) },
      { path: 'compare', loadChildren: () => import('../../page/copare-income/copare-income.module').then(m => m.CopareIncomeModule) },
      { path: 'fundreport', loadChildren: () => import('../../page/fund-report/fund-report.module').then(m => m.FundReportModule) },
      { path: 'generatedeliverydata', loadChildren: () => import('../../page/generate-delivery-data/generate-delivery-data.module').then(m => m.GenerateDeliveryDataModule) },
      { path: 'datadeliveryresults', loadChildren: () => import('../../page/data-delivery-results/data-delivery-results.module').then(m => m.DataDeliveryResultsModule) },
      { path: 'tracklist', loadChildren: () => import('../../page/track-list/track-list.module').then(m => m.TrackListModule) },
      { path: 'datasetting',loadChildren: () => import('../../page/data-setting/data-setting.module').then(m => m.DataSettingModule)},
      { path: 'usersetting',loadChildren: () => import('../../page/users-setting/users-setting.module').then(m => m.UsersSettingModule)},

    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
