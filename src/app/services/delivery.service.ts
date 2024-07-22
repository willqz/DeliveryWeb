import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class DeliveryService {

  urlApi = environment.baseUrl;

  constructor(private http: HttpClient) { }
  

  getEntregas(): Observable<any> {
    return this.http.get<any>(this.urlApi);
  }
  

}
