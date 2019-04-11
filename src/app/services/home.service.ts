import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api-config';

@Injectable()

export class HomeService {

  constructor(private _http: HttpClient) { 
  }

  getData = () => this._http.get(API_CONFIG);
}
