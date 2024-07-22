import { Component, OnInit } from '@angular/core';
import { DeliveryService } from '../../services/delivery.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DeliveryModule } from '../../delivery/delivery.module';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-filter-delivery',
  templateUrl: './filter-delivery.component.html',
  styleUrls: ['./filter-delivery.component.css'],
  standalone: true,
  imports: [
    CommonModule, 
    DeliveryModule,
    RouterOutlet,
    NgbModule,
    ReactiveFormsModule,
  ]
})
export class FilterDeliveryComponent implements OnInit {

  page = 1; 
  pageSize = 10; 
  collectionSize = 0; 
  
  drivers: any
  status: any;
  allDatadelivery: any[] = [];

  filterForm = new FormGroup({
    formDriver: new FormControl(''),
    formStatus: new FormControl('')
  });

  constructor(
    private deliveryService: DeliveryService
  ) { }

  ngOnInit() {
    this.getAllDeliveries();
    this.getAllDrivers();
    this.getAllStatus();
  }

  getAllDeliveries() {
    this.deliveryService.getEntregas().subscribe(
      data => {
        this.allDatadelivery = data;
        this.filterDriver();
        this.filterStatus();
        this.collectionSize = this.allDatadelivery.length
      }, error => {
        console.error('Error data:', error);
      }
    );
  }

  filterDriver() {
    if (this.filterForm.controls.formDriver.value?.toString() != '') {
      this.allDatadelivery = this.allDatadelivery.filter(x => 
        x.motorista.nome === this.filterForm.controls.formDriver.value?.toString())
    }
  }
  
  filterStatus() {
    if (this.filterForm.controls.formStatus.value?.toString() != '') {
      this.allDatadelivery = this.allDatadelivery.filter(x => 
        x.status_entrega === this.filterForm.controls.formStatus.value?.toString())
    }
  }

  getAllDrivers() {
    this.deliveryService.getEntregas().subscribe(data => {
        this.getOnlyDrivers();
      }, error => {
        console.error('Error data:', error);
      });
  }

  getOnlyDrivers() {
    const names: any[] = [];
    this.allDatadelivery.forEach((result: any) => {
      if (!names.includes(result.motorista.nome)) {
        names.push(result.motorista.nome);
      }
    });
    this.drivers = names;
  }
  
  getAllStatus() {
    this.deliveryService.getEntregas().subscribe(data => {
        this.getOnlystatus();
    }, error => {
      console.error('Error data:', error);
    });
  }

  getOnlystatus() {
    const status: any[] = [];
    this.allDatadelivery.forEach((result: any) => {
      if (!status.includes(result.status_entrega)) {
        status.push(result.status_entrega);
      }
    });
    this.status = status;
  }

  get tableListDelivery(): any[] {
    return this.allDatadelivery
      .map((appointment, i) => ({ i: i + 1, ...appointment }))
      .slice((this.page - 1) * this.pageSize, (this.page - 1) * this.pageSize + this.pageSize);
  }

  clear() {
    this.filterForm.controls.formDriver.setValue('');
    this.filterForm.controls.formStatus.setValue('');

    this.getAllDeliveries();
  }

}
