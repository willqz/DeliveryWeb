import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ReactiveFormsModule } from '@angular/forms';

import { DeliveryModule } from '../../delivery/delivery.module';
import { DeliveryService } from '../../services/delivery.service';
import { PanelOne } from '../../interfaces/panelOne';
import { GroupData } from '../../interfaces/groupByDriver';

import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import { PanelInsuccess } from '../../interfaces/panelInsuccess';
import { PanelBairro } from '../../interfaces/panelBairro';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    DeliveryModule,
    RouterOutlet,
    NgbModule,
    ReactiveFormsModule,
    MatCardModule, 
    MatChipsModule, 
    MatProgressBarModule, 
    MatTableModule
  ]
})
export class DashboardComponent implements OnInit {

  allDelivery: any;
  deliveryByDriver: any; 

  panelDelivery: PanelOne[] = [];
  panelInsuccess: PanelInsuccess[] = [];
  panelDistrict: PanelBairro[] = [];

  constructor(
    private deliveryService: DeliveryService
  ) { }

  ngOnInit() {
    this.getAllDeliveries();
  }

  getAllDeliveries() {
    this.deliveryService.getEntregas().subscribe(
      data => {
        this.allDelivery = data;
        
        this.getDataPanelDelivery();
        this.getDataPanelInsuccess();
        this.getDataPanelDistrict();
      }, error => {
        console.error('Error fetching data:', error);
      }
    );
  }

  getDataPanelDelivery(): any {
    const datas = this.groupByDriver();
    datas.map(item => {
      this.panelDelivery.push({
        nome: item.key,
        quantidadeTotal: item.deliveries?.length,
        quantidadeRealizada: item.deliveries?.filter(x => x.status_entrega === 'ENTREGUE')?.length,
      });
    });
  }

  getDataPanelInsuccess() {
    const datas = this.groupByDriver();
    datas.map(item => {
      this.panelInsuccess.push({
        nome: item.key,
        quantidade: item.deliveries?.filter(x => x.status_entrega === 'INSUCESSO')?.length,
      });
    });
  }

  getDataPanelDistrict() {
    const datas = this.groupByDistrict();
    datas.map(item => {
      this.panelDistrict.push({
        nome: item.key,
        quantidade: item.deliveries?.length,
        quantidadeRealizada: item.deliveries?.filter(x => x.status_entrega === 'ENTREGUE')?.length,
      });
    });
  }

  groupByDriver(): GroupData[] {
    const groupkey: { [key: string]: any[] } = {};

    this.allDelivery.forEach((result: any) => {
      if (!groupkey[result.motorista.nome]) {
        groupkey[result.motorista.nome] = [];
      }
      groupkey[result.motorista.nome].push(result);
    });

    return Object.keys(groupkey).map(driver => ({
      key: driver,
      deliveries: groupkey[driver]
    }));

  }

  groupByDistrict(): GroupData[] {
    const groupKey: { [key: string]: any[] } = {};
    this.allDelivery.forEach((result: any) => {
      if (!groupKey[result.cliente_destino.bairro]) {
        groupKey[result.cliente_destino.bairro] = [];
      }
      groupKey[result.cliente_destino.bairro].push(result);
    });

    return Object.keys(groupKey).map(district => ({
      key: district,
      deliveries: groupKey[district]
    }));

  }

}
