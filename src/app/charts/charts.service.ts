import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ChartsService {
  constructor(private httpClient: HttpClient) {}

  GetChartInfo() {
    return this.httpClient.get('http://localhost:3000/sales');
  }
}
