import { Routes } from '@angular/router';
import { FilterDeliveryComponent } from './pages/filter-delivery/filter-delivery.component';
import { HomeComponent } from './pages/home/home.component';
import { DashboardComponent } from './pages/dashboad/dashboard.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'delivery', component: FilterDeliveryComponent },
    { path: 'dashboard', component: DashboardComponent },
];
