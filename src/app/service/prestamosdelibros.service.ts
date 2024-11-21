import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../env/env';
import { ResponseData } from 'src/app/interface/interfaces';
import { librosprestados } from '../interface/librosprestado';
import { librosprest } from '../interface/librosprest';

@Injectable({
  providedIn: 'root'
})
export class PrestamosLibrosService {
  public datos!:librosprestados[];
  public datosagrabar:any=[];
  private URL_API: string = environment.ApiUrl;

  constructor(private http: HttpClient,private https: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.URL_API}/api/Prestamos`);
  }

  getPost():Observable<librosprestados> {
    debugger;
    return this.http.get<librosprestados>(`${this.URL_API}/api/Prestamos`);
  }

  enviarDatos(datos:any) {
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(datos);
    
    return this.https.post(`${this.URL_API}/api/Prestamos`, body,{'headers':headers});
  }

  eliminarPorId(id: number) {
    const url = `${this.URL_API}/api/Prestamos/${id}`;
    return this.http.delete(url);
  }

  buscarPorId(id: number):Observable<any>{
    return this.http.get<any>(`${this.URL_API}/api/Prestamos/${id}`);
  }

  actualizar(datos: any) {
    debugger;
    const headers = { 'content-type': 'application/json'}  
    const body=JSON.stringify(datos);
    return this.http.put(`${this.URL_API}/api/Prestamos`, body,{'headers':headers});
  }

}
