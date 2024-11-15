import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../env/env';
import { ResponseData } from 'src/app/interface/interfaces';
import { librosprestados } from '../interface/librosprestado';
@Injectable({
  providedIn: 'root'
})
export class PrestamosLibrosService {
  public datos:librosprestados[]=[];
  public datosagrabar:any=[];
  private URL_API: string = environment.ApiUrl;

  constructor(private http: HttpClient) { }

  getData(): Observable<any> {
    return this.http.get<any>(`${this.URL_API}/Prestamos`);
  }

  enviarDatos(datosagrabar:librosprestados) {
    debugger;
    return this.http.post(`${this.URL_API}/Prestamos`, datosagrabar);
  }

  eliminarPorId(id: number) {
    const url = `${this.URL_API}/clientes/eliminar/${id}`;
    return this.http.delete(url);
  }

  actualizar(datos: any) {
    return this.http.put(`${this.URL_API}/clientes/actualizar`, datos);
  }
  verificarExistencia(cod: string) {
    return this.http.get<ResponseData>(`${this.URL_API}/clientes/verificar-cliente/${cod}`);
  }

}
