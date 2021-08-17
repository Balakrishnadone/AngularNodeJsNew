import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportingRoutingModule } from './reporting-routing.module';
import { reportRoutings } from './reporting-routing.module';

@NgModule({
  declarations: [reportRoutings],
  imports: [CommonModule, ReportingRoutingModule],
})
export class ReportingModule {}
