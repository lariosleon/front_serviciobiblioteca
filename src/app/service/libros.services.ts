import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../env/env';
import { ResponseData } from 'src/app/interface/interfaces';
@Injectable({
  providedIn: 'root'
})
export class LibrosService {
    
    private URL_API: string = environment.ApiUrl;

    constructor(private http: HttpClient) { }
  
    getData(): Observable<object[]> {
      return this.http.get<object[]>(`${this.URL_API}/Libros`);
    }
}