import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DeliveryService } from '../services/delivery.service';

import { RouterModule } from '@angular/router';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';
import { FilterDeliveryComponent } from '../pages/filter-delivery/filter-delivery.component';

@NgModule({
  declarations: [
    //FilterDeliveryComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    NgbPaginationModule,
  ],
  providers: [
    DeliveryService
  ],
  exports: [
    //FilterDeliveryComponent 
  ],
})
export class DeliveryModule { }
