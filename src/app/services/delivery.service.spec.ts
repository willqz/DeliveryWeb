/* tslint:disable:no-unused-variable */

import { TestBed, inject } from '@angular/core/testing';
import { DeliveryService } from './delivery.service';

describe('Service: Distributor', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DeliveryService]
    });
  });

  it('should ...', inject([DeliveryService], (service: DeliveryService) => {
    expect(service).toBeTruthy();
  }));
});
