import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../env/env';
import { Observable, tap } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private URL_API: string = environment.ApiUrl;

  constructor(private http: HttpClient) { }

  
  login(usuario: string, contrasena: string): Observable<any> {
    const params = { usuario: usuario, contrasena: contrasena };
    return this.http.get<any>(`${this.URL_API}/api/Login/${usuario}/${contrasena}`)
    .pipe(
      tap( response => {
        debugger 
        if(response.code == 200){
          localStorage.setItem('token', response.nombre);
        }
      }
    )
   )
    ;


/*      return this.http.get<any>(`${this.URL_API}/api/Login`, { 
      params: params
    }).pipe(
        tap( response => {
          debugger 
          if(response[0].id != 0){
            response.code = 200;
            localStorage.setItem('token', response[0].nombre);
          }else{
            response.code = 400;
          }
          
        }
      )
     ); */
     
  }

   isLoggedIn(): boolean {
     // return !!localStorage.getItem('token');
     return false
   }
}
