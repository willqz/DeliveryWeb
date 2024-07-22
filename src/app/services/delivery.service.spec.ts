import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { DeliveryService } from './delivery.service';
import { environment } from '../../environments/environment';

describe('DeliveryService', () => {
  let service: DeliveryService;
  let httpMock: HttpTestingController;
  const mockResponse = [
    { id: 1, name: 'Entrega 1' },
    { id: 2, name: 'Entrega 2' }
  ];

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [DeliveryService]
    });

    service = TestBed.inject(DeliveryService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should retrieve entregas from the API via GET', () => {
    service.getEntregas().subscribe((entregas) => {
      expect(entregas.length).toBe(2);
      expect(entregas).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(environment.baseUrl);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
