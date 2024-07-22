import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryService } from '../services/delivery.service';

import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule,
    NgbPaginationModule,
  ],
  providers: [
    DeliveryService
  ],
  exports: [],
})
export class DeliveryModule { }
