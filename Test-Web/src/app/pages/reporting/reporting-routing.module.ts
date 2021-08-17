import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReportingDashboardComponent } from './reporting-dashboard/reporting-dashboard.component';

const routes: Routes = [{ path: '', component: ReportingDashboardComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ReportingRoutingModule {}

export const reportRoutings = [ReportingDashboardComponent];
