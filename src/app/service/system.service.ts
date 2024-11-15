import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../env/env';
import { System } from '../interface/system';
@Injectable({
    providedIn: 'root'
  })
  export class SystemService {
    private URL_API: string = environment.ApiUrl;

    constructor(private http: HttpClient) { }

    getData(): Observable<any> {
        return this.http.get<any>(`${this.URL_API}/system`);
      }
    

  }