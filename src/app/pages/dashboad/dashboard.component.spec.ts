import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DashboardComponent } from './dashboard.component';
import { DeliveryService } from '../../services/delivery.service';

describe('DashboardComponent', () => {
  let component: DashboardComponent;
  let fixture: ComponentFixture<DashboardComponent>;

  const mockDeliveries = [
    {
        "id": "1",
        "documento": "01021",
        "motorista": {
        "nome": "Carlos Pereira"
        },
        "cliente_origem": {
        "nome": "Empresa ABC",
        "endereco": "Rua dos Pinheiros, 789",
        "bairro": "Jardins",
        "cidade": "S\u00e3o Paulo"
        },
        "cliente_destino": {
        "nome": "Ana Clara",
        "endereco": "Rua Vergueiro, 1234",
        "bairro": "Liberdade",
        "cidade": "S\u00e3o Paulo"
        },
        "status_entrega": "ENTREGUE"
    },
    {
        "id": "2",
        "documento": "01022",
        "motorista": {
        "nome": "Carla Souza"
        },
        "cliente_origem": {
        "nome": "Empresa DEF",
        "endereco": "Rua Augusta, 345",
        "bairro": "Consola\u00e7\u00e3o",
        "cidade": "S\u00e3o Paulo"
        },
        "cliente_destino": {
        "nome": "Pedro Lima",
        "endereco": "Avenida Brasil, 1010",
        "bairro": "Jardins",
        "cidade": "S\u00e3o Paulo"
        },
        "status_entrega": "PENDENTE"
    },
    {
        "id": "3",
        "documento": "01023",
        "motorista": {
        "nome": "Maria Oliveira"
        },
        "cliente_origem": {
        "nome": "Empresa GHI",
        "endereco": "Avenida Ibirapuera, 890",
        "bairro": "Moema",
        "cidade": "S\u00e3o Paulo"
        },
        "cliente_destino": {
        "nome": "Jo\u00e3o Mendes",
        "endereco": "Rua Pamplona, 567",
        "bairro": "Jardim Paulista",
        "cidade": "S\u00e3o Paulo"
        },
        "status_entrega": "PENDENTE"
    },
    {
        "id": "4",
        "documento": "01024",
        "motorista": {
        "nome": "Jo\u00e3o Silva"
        },
        "cliente_origem": {
        "nome": "Empresa XYZ",
        "endereco": "Rua das Flores, 123",
        "bairro": "Liberdade",
        "cidade": "S\u00e3o Paulo"
        },
        "cliente_destino": {
        "nome": "Paula Silva",
        "endereco": "Rua da Consola\u00e7\u00e3o, 123",
        "bairro": "Centro",
        "cidade": "S\u00e3o Paulo"
        },
        "status_entrega": "ENTREGUE"
    },
    {
        "id": "5",
        "documento": "01025",
        "motorista": {
        "nome": "Carlos Pereira"
        },
        "cliente_origem": {
        "nome": "Empresa ABC",
        "endereco": "Rua dos Pinheiros, 789",
        "bairro": "Bela Vista",
        "cidade": "S\u00e3o Paulo"
        },
        "cliente_destino": {
        "nome": "Carlos Lima",
        "endereco": "Rua Paulista, 101",
        "bairro": "Moema",
        "cidade": "S\u00e3o Paulo"
        },
        "status_entrega": "ENTREGUE"
    },
    {
        "id": "6",
        "documento": "01026",
        "motorista": {
        "nome": "Carla Souza"
        },
        "cliente_origem": {
        "nome": "Empresa DEF",
        "endereco": "Rua Augusta, 345",
        "bairro": "Jardim Paulista",
        "cidade": "S\u00e3o Paulo"
        },
        "cliente_destino": {
        "nome": "Ana Souza",
        "endereco": "Rua Vergueiro, 567",
        "bairro": "Consola\u00e7\u00e3o",
        "cidade": "S\u00e3o Paulo"
        },
        "status_entrega": "PENDENTE"
    },
    {
        "id": "7",
        "documento": "01027",
        "motorista": {
        "nome": "Maria Oliveira"
        },
        "cliente_origem": {
        "nome": "Empresa GHI",
        "endereco": "Avenida Ibirapuera, 890",
        "bairro": "Centro",
        "cidade": "S\u00e3o Paulo"
        },
        "cliente_destino": {
        "nome": "Maria Souza",
        "endereco": "Avenida Paulista, 456",
        "bairro": "Bela Vista",
        "cidade": "S\u00e3o Paulo"
        },
        "status_entrega": "ENTREGUE"
    },
    {
        "id": "8",
        "documento": "01028",
        "motorista": {
        "nome": "Jo\u00e3o Silva"
        },
        "cliente_origem": {
        "nome": "Empresa XYZ",
        "endereco": "Rua das Flores, 123",
        "bairro": "Jardins",
        "cidade": "S\u00e3o Paulo"
        },
        "cliente_destino": {
        "nome": "Ana Clara",
        "endereco": "Rua Vergueiro, 1234",
        "bairro": "Liberdade",
        "cidade": "S\u00e3o Paulo"
        },
        "status_entrega": "PENDENTE"
    },
    {
        "id": "9",
        "documento": "01029",
        "motorista": {
        "nome": "Carlos Pereira"
        },
        "cliente_origem": {
        "nome": "Empresa ABC",
        "endereco": "Rua dos Pinheiros, 789",
        "bairro": "Consola\u00e7\u00e3o",
        "cidade": "S\u00e3o Paulo"
        },
        "cliente_destino": {
        "nome": "Pedro Lima",
        "endereco": "Avenida Brasil, 1010",
        "bairro": "Jardins",
        "cidade": "S\u00e3o Paulo"
        },
        "status_entrega": "PENDENTE"
    },
    {
        "id": "10",
        "documento": "01030",
        "motorista": {
        "nome": "Carla Souza"
        },
        "cliente_origem": {
        "nome": "Empresa DEF",
        "endereco": "Rua Augusta, 345",
        "bairro": "Moema",
        "cidade": "S\u00e3o Paulo"
        },
        "cliente_destino": {
        "nome": "Jo\u00e3o Mendes",
        "endereco": "Rua Pamplona, 567",
        "bairro": "Jardim Paulista",
        "cidade": "S\u00e3o Paulo"
        },
        "status_entrega": "ENTREGUE"
    },
];

  beforeEach(async () => {
    const deliveryServiceSpy = jasmine.createSpyObj('DeliveryService', ['getEntregas']);

    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        DashboardComponent
      ],
      providers: [{ provide: DeliveryService, useValue: deliveryServiceSpy }]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call getAllDeliveries on ngOnInit', () => {
    const spy = spyOn(component, 'getAllDeliveries').and.callThrough();
    component.ngOnInit();
    expect(spy).toHaveBeenCalled();
  });

  it('get data correctly', () => {
    component.allDelivery = mockDeliveries;
    expect(component.allDelivery.length).toBe(10);
  });

  it('get data by driver correctly', () => {
    component.allDelivery = mockDeliveries;
    const groupedData = component.groupByDriver();

    expect(groupedData.length).toBe(4);
    expect(groupedData[0].key).toBe('Carlos Pereira');
    expect(groupedData[0].deliveries?.length).toBe(3);
  });

  it('get data by district correctly', () => {
    component.allDelivery = mockDeliveries;
    const groupedData = component.groupByDistrict();
    
    expect(groupedData.length).toBe(7)
    expect(groupedData[0].key).toBe('Liberdade');
    expect(groupedData[0].deliveries?.length).toBe(2);
  });

  it('get data Panel Delivery correctly', () => {
    component.allDelivery = mockDeliveries;
    component.getDataPanelDelivery();
    expect(component.panelDelivery.length).toBe(4);
  });

  it('get data Panel Insuccess correctly', () => {
    component.allDelivery = mockDeliveries;
    component.getDataPanelInsuccess();
    expect(component.panelInsuccess.length).toBe(4);
  });

  it('get data Panel District correctly', () => {
    component.allDelivery = mockDeliveries;
    component.getDataPanelDistrict();
    expect(component.panelDistrict.length).toBe(7);
  });

});
